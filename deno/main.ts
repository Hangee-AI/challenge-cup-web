/* ==========================================================
   引路 · 云端后端（Deno Deploy 版）
   ----------------------------------------------------------
   为什么有这一份：
     server/ 里的 Express 版要跑在一台一直开着的机器上；
     Deno Deploy 是免费的云端运行时，电脑关机也能用。
     数据存 Deno KV（不用数据库、不用文件系统）。

   和 Express 版保持同样的接口，前端不用改（只改 js/config.js 的地址）：
     GET  /api/ping
     GET  /api/health            （compiler.ready 固定 false：云端不判题，判题走前端离线判定）
     POST /api/auth/register | login | reset | change | nickname | logout
     GET  /api/auth/me
     POST /api/checkin
     GET  /api/stats
     POST /api/light
     GET  /api/chat/status
     POST /api/chat

   本地跑：deno run --allow-net --allow-env --allow-read --unstable-kv deno/main.ts
   部署：Deno Deploy 新建项目 → 指向仓库 → Entry point 填 deno/main.ts → 绑 KV
   ========================================================== */

const KV = await Deno.openKv();

const ALLOWED_ORIGINS = [
  'https://guoguan.surge.sh',
  'http://localhost:3000',
  'http://localhost:3210',
  'http://localhost:3211',
  'http://localhost:3212',
];

const SESSION_TTL_MS = 30 * 24 * 3600 * 1000;
const PBKDF2_ITER = 100000;

/* ---------------- 小工具 ---------------- */

function json(body: unknown, status = 200, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      ...headers,
    },
  });
}

function corsHeaders(origin: string | null): Record<string, string> {
  const allow = origin && (ALLOWED_ORIGINS.includes(origin) || origin.endsWith('.deno.dev') || origin.endsWith('.surge.sh'))
    ? origin
    : (ALLOWED_ORIGINS[0] || '*');
  return {
    'access-control-allow-origin': allow,
    'access-control-allow-methods': 'GET,POST,OPTIONS',
    'access-control-allow-headers': 'Content-Type, Authorization',
    'access-control-max-age': '600',
    'vary': 'Origin',
  };
}

function todayKey(d = new Date()): string {
  const tz = new Date(d.getTime() + 8 * 3600 * 1000);
  return tz.toISOString().slice(0, 10);
}

function base64(buf: ArrayBuffer | Uint8Array): string {
  const bytes = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
  let s = '';
  bytes.forEach((b) => { s += String.fromCharCode(b); });
  return btoa(s);
}

function fromBase64(str: string): Uint8Array<ArrayBuffer> {
  const bin = atob(str);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

/* ---------------- 密码（PBKDF2，不引第三方依赖） ---------------- */

async function hashPassword(pwd: string): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(pwd), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations: PBKDF2_ITER, hash: 'SHA-256' },
    key,
    256,
  );
  return `pbkdf2$${PBKDF2_ITER}$${base64(salt)}$${base64(bits)}`;
}

async function verifyPassword(pwd: string, stored: string): Promise<boolean> {
  const parts = String(stored || '').split('$');
  if (parts.length !== 4 || parts[0] !== 'pbkdf2') return false;
  const iter = Number(parts[1]);
  const salt = fromBase64(parts[2]);
  const expect = parts[3];
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(pwd), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations: iter, hash: 'SHA-256' },
    key,
    256,
  );
  const got = base64(bits);
  if (got.length !== expect.length) return false;
  let diff = 0;
  for (let i = 0; i < got.length; i++) diff |= got.charCodeAt(i) ^ expect.charCodeAt(i);
  return diff === 0;
}

function validPassword(p: unknown): boolean {
  return typeof p === 'string' && p.length >= 6 && p.length <= 32;
}

function newToken(): string {
  return [...crypto.getRandomValues(new Uint8Array(32))].map((b) => b.toString(16).padStart(2, '0')).join('');
}

function normalizeSid(prefix: string, rawSid: string): { prefix: string; snum: string; sid: string } {
  const p = String(prefix || 'NCU').toUpperCase().replace(/[^A-Z]/g, '').slice(0, 8) || 'NCU';
  const raw = String(rawSid || '').toUpperCase().trim();
  let snum = raw.replace(/^[A-Z][A-Z.\-\s]*?[\s-]?(\d{6,20})$/, '$1');
  if (!/^\d{6,20}$/.test(snum)) snum = raw.replace(/\D/g, '');
  return { prefix: p, snum, sid: p + snum };
}

function publicUser(u: any) {
  return {
    id: u.id,
    sid: u.sid,
    snum: u.snum,
    prefix: u.prefix,
    nickname: u.nickname,
    avatar: u.avatar,
    createdAt: u.createdAt,
    streak: streakOf(u),
  };
}

function streakOf(u: any): number {
  const days = new Set((u.checkins || []));
  if (!days.size) return 0;
  let n = 0;
  const d = new Date();
  for (;;) {
    const k = todayKey(d);
    if (!days.has(k)) break;
    n++;
    d.setTime(d.getTime() - 86400000);
  }
  return n;
}

/* ---------------- 限流（KV 计数，自带过期） ---------------- */

async function rateLimit(key: string, max: number, windowMs = 60_000): Promise<boolean> {
  const bucket = `rl:${key}:${Math.floor(Date.now() / windowMs)}`;
  const cur = (await KV.get<number>([bucket])).value || 0;
  if (cur >= max) return false;
  await KV.set([bucket], cur + 1, { expireIn: windowMs * 2 });
  return true;
}

/* ---------------- 用户 / 会话 ---------------- */

async function getUserBySid(sid: string) {
  const r = await KV.get<any>(['user', sid]);
  return r.value || null;
}

async function getUserBySnum(snum: string) {
  const idx = await KV.get<string>(['snum', snum]);
  if (!idx.value) return null;
  return await getUserBySid(idx.value);
}

async function saveUser(u: any) {
  u.updatedAt = new Date().toISOString();
  await KV.set(['user', u.sid], u);
  await KV.set(['snum', u.snum], u.sid);
  return u;
}

async function createSession(sid: string) {
  const token = newToken();
  await KV.set(['session', token], { sid, expires: Date.now() + SESSION_TTL_MS }, { expireIn: SESSION_TTL_MS });
  return token;
}

async function sessionUser(req: Request) {
  const h = req.headers.get('authorization') || '';
  let token = h.startsWith('Bearer ') ? h.slice(7).trim() : '';
  if (!token) {
    const cookie = req.headers.get('cookie') || '';
    const m = cookie.match(/(?:^|;\s*)yl_token=([^;]+)/);
    if (m) token = decodeURIComponent(m[1]);
  }
  if (!token) return null;
  const s = await KV.get<{ sid: string; expires: number }>(['session', token]);
  if (!s.value || s.value.expires < Date.now()) return null;
  const u = await KV.get<any>(['user', s.value.sid]);
  return u.value ? { token, user: u.value } : null;
}

function clientIp(req: Request): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0].trim()
    || req.headers.get('x-real-ip')
    || 'local';
}

async function bumpStats(field: 'lights' | 'users', delta = 1): Promise<number> {
  const key = ['stat', field];
  const cur = (await KV.get<number>(key)).value || 0;
  const next = cur + delta;
  await KV.set(key, next);
  return next;
}

/* ---------------- 学习搭子（/api/chat） ---------------- */

type ProviderName = 'deepseek' | 'openrouter' | 'siliconflow' | 'custom';

const PRESETS: Record<string, { base: string; model: string; fallbacks?: string[] }> = {
  deepseek: { base: 'https://api.deepseek.com', model: 'deepseek-chat' },
  openrouter: {
    base: 'https://openrouter.ai/api/v1',
    model: 'nvidia/nemotron-3-super-120b-a12b:free',
    fallbacks: ['google/gemma-4-31b-it:free', 'nvidia/nemotron-3.5-lightning:free'],
  },
  siliconflow: { base: 'https://api.siliconflow.cn/v1', model: 'deepseek-ai/DeepSeek-V3' },
};

function llmConfig() {
  const name = (Deno.env.get('LLM_PROVIDER') || '').toLowerCase() as ProviderName | '';
  const explicitBase = Deno.env.get('LLM_BASE') || '';
  const explicitModel = Deno.env.get('LLM_MODEL') || '';
  let provider: ProviderName = (name || 'deepseek') as ProviderName;
  if (!PRESETS[provider]) provider = 'custom';
  const preset = PRESETS[provider] || { base: explicitBase, model: explicitModel };
  const key = Deno.env.get('OPENROUTER_API_KEY')
    || Deno.env.get('DEEPSEEK_API_KEY')
    || Deno.env.get('LLM_API_KEY')
    || '';
  const base = (explicitBase || preset.base || '').replace(/\/+$/, '');
  const model = explicitModel || preset.model || '';
  const fallbacks = preset.fallbacks || [];
  return { provider, key, base, model, fallbacks };
}

async function chatStatus() {
  const c = llmConfig();
  return {
    ready: !!c.key,
    provider: c.provider,
    model: c.model,
    dailyUsed: (await KV.get<number>(['chat', 'day', todayKey()])).value || 0,
    dailyCap: Number(Deno.env.get('CHAT_DAILY_CAP') || 800),
    requireLogin: Deno.env.get('CHAT_REQUIRE_LOGIN') === '1',
  };
}

const SYSTEM_PROMPT = [
  '你是「小引」，一只猫头鹰形象的学习搭子，跟着大学生一起学专业课。',
  '说话要求：中文、口语、像学长；每次不超过 120 字；先给结论再给一句怎么做。',
  '不确定就说不确定，不要编造书名、链接、数据。',
].join('\n');

async function handleChat(req: Request, body: any): Promise<Response> {
  const c = llmConfig();
  if (!c.key) {
    return json({ ok: false, reason: 'no-key', hint: '还没配置模型 Key，我先用本地回答陪你。' }, 503, corsHeaders(req.headers.get('origin')));
  }
  const requireLogin = Deno.env.get('CHAT_REQUIRE_LOGIN') === '1';
  const me = requireLogin ? await sessionUser(req) : null;
  if (requireLogin && !me) {
    return json({ ok: false, reason: 'login-required', hint: '登录之后再来找我聊吧。' }, 401, corsHeaders(req.headers.get('origin')));
  }
  if (!(await rateLimit('chat:ip:' + clientIp(req), Number(Deno.env.get('CHAT_PER_IP_HOUR') || 40), 3600_000))) {
    return json({ ok: false, reason: 'rate-limit', hint: '问得有点快，歇一会儿再问。' }, 429, corsHeaders(req.headers.get('origin')));
  }
  const day = todayKey();
  const used = (await KV.get<number>(['chat', 'day', day])).value || 0;
  const cap = Number(Deno.env.get('CHAT_DAILY_CAP') || 800);
  if (used >= cap) {
    return json({ ok: false, reason: 'daily-cap', hint: '今天的额度用完了，明天再来。' }, 429, corsHeaders(req.headers.get('origin')));
  }
  const msg = String(body?.message || '').slice(0, 800).trim();
  if (!msg) return json({ ok: false, reason: 'empty', hint: '先说点什么吧。' }, 400, corsHeaders(req.headers.get('origin')));

  const models = [c.model, ...c.fallbacks].filter(Boolean);
  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...(Array.isArray(body?.history) ? body.history.slice(-6) : []),
    { role: 'user', content: msg },
  ];
  let lastErr = '';
  for (const model of models) {
    try {
      const r = await fetch(c.base + '/chat/completions', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'authorization': 'Bearer ' + c.key,
          ...(c.provider === 'openrouter' ? { 'HTTP-Referer': 'https://guoguan.surge.sh', 'X-Title': '引路·学习搭子' } : {}),
        },
        body: JSON.stringify({ model, messages, max_tokens: 320, temperature: 0.6 }),
      });
      const data = await r.json().catch(() => ({}));
      const text = data?.choices?.[0]?.message?.content;
      if (!r.ok || !text) {
        lastErr = data?.error?.message || ('HTTP ' + r.status);
        continue;
      }
      await KV.set(['chat', 'day', day], used + 1, { expireIn: 2 * 86400_000 });
      return json({ ok: true, reply: String(text).slice(0, 800), model, provider: c.provider, dailyUsed: used + 1, dailyCap: cap }, 200, corsHeaders(req.headers.get('origin')));
    } catch (e) {
      lastErr = String(e);
    }
  }
  return json({ ok: false, reason: 'upstream', hint: '模型那边没响应，等会儿再试。', upstream: lastErr }, 502, corsHeaders(req.headers.get('origin')));
}

/* ---------------- 路由 ---------------- */

async function handle(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const origin = req.headers.get('origin');
  const cors = corsHeaders(origin);

  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });

  const path = url.pathname.replace(/\/+$/, '') || '/';
  const ip = clientIp(req);
  const readBody = async () => {
    try { return await req.json(); } catch { return {}; }
  };

  /* --- 健康检查 --- */
  if (path === '/api/ping') return json({ ok: true, app: 'yinlu', runtime: 'deno', ts: Date.now() }, 200, cors);
  if (path === '/api/health') {
    return json({ ok: true, compiler: { ready: false, engine: 'none', detail: '云端不判题（判题在前端离线完成）' } }, 200, cors);
  }

  /* --- 注册 --- */
  if (path === '/api/auth/register' && req.method === 'POST') {
    if (!(await rateLimit('reg:' + ip, 10))) return json({ error: '操作太频繁，稍后再试' }, 429, cors);
    const b = await readBody();
    const n = normalizeSid(b.prefix, b.sid);
    if (!/^\d{6,20}$/.test(n.snum)) return json({ error: '学号应该是 6–20 位数字' }, 400, cors);
    if (!validPassword(b.password)) return json({ error: '密码请设置 6–32 位' }, 400, cors);
    if (await getUserBySid(n.sid) || await getUserBySnum(n.snum)) {
      return json({ error: '这个学号已经注册过了，点「忘记密码」输入学校简称+学号就能直接重置并登录' }, 409, cors);
    }
    const user = {
      id: crypto.randomUUID(),
      prefix: n.prefix,
      sid: n.sid,
      snum: n.snum,
      pwd: await hashPassword(String(b.password)),
      nickname: String(b.nickname || '').trim().slice(0, 16) || ('同学' + n.snum.slice(-4)),
      avatar: String(b.avatar || '🦉').slice(0, 4),
      createdAt: new Date().toISOString(),
      checkins: [] as string[],
    };
    await saveUser(user);
    const token = await createSession(user.sid);
    const total = await bumpStats('users');
    // 注册即点亮一盏灯（按账号去重）
    const lit = await KV.get(['light', 'user:' + user.id]);
    if (!lit.value) {
      await KV.set(['light', 'user:' + user.id], true);
      await bumpStats('lights');
    }
    return json({ token, user: publicUser(user), totalUsers: total }, 201, cors);
  }

  /* --- 登录 --- */
  if (path === '/api/auth/login' && req.method === 'POST') {
    if (!(await rateLimit('login:' + ip, 20))) return json({ error: '尝试次数过多，稍后再试' }, 429, cors);
    const b = await readBody();
    const n = normalizeSid(b.prefix, b.sid);
    let user = await getUserBySid(n.sid);
    if (!user) user = await getUserBySnum(n.snum);
    if (!user) return json({ error: '账号不存在，检查一下学校简称和学号' }, 401, cors);
    if (!(await verifyPassword(String(b.password || ''), user.pwd))) {
      return json({ error: '密码不对，可以点“忘记密码”用学号重置' }, 401, cors);
    }
    const token = await createSession(user.sid);
    return json({ token, user: publicUser(user) }, 200, cors);
  }

  /* --- 忘记密码：学校简称 + 学号即可重置 --- */
  if (path === '/api/auth/reset' && req.method === 'POST') {
    if (!(await rateLimit('reset:' + ip, 8))) return json({ error: '操作太频繁，稍后再试' }, 429, cors);
    const b = await readBody();
    const n = normalizeSid(b.prefix, b.sid);
    if (!/^\d{6,20}$/.test(n.snum)) return json({ error: '学号应该是 6–20 位数字' }, 400, cors);
    if (!validPassword(b.password)) return json({ error: '新密码请设置 6–32 位' }, 400, cors);
    let user = await getUserBySid(n.sid);
    if (!user) user = await getUserBySnum(n.snum);
    if (!user) return json({ error: '没有找到这个学号的账号，先注册吧' }, 404, cors);
    user.pwd = await hashPassword(String(b.password));
    await saveUser(user);
    const token = await createSession(user.sid);
    return json({ token, user: publicUser(user), message: '密码已重置，已帮你登录' }, 200, cors);
  }

  /* --- 改密码：原密码 + 新密码 --- */
  if (path === '/api/auth/change' && req.method === 'POST') {
    const me = await sessionUser(req);
    if (!me) return json({ error: '请先登录' }, 401, cors);
    if (!(await rateLimit('chg:' + ip, 10))) return json({ error: '操作太频繁，稍后再试' }, 429, cors);
    const b = await readBody();
    if (!(await verifyPassword(String(b.oldPassword || ''), me.user.pwd))) return json({ error: '原密码不对' }, 400, cors);
    if (!validPassword(b.newPassword)) return json({ error: '新密码请设置 6–32 位' }, 400, cors);
    if (b.oldPassword === b.newPassword) return json({ error: '新密码和原密码一样' }, 400, cors);
    me.user.pwd = await hashPassword(String(b.newPassword));
    await saveUser(me.user);
    return json({ ok: true, message: '密码已更新' }, 200, cors);
  }

  /* --- 昵称 / 头像 --- */
  if (path === '/api/auth/nickname' && req.method === 'POST') {
    const me = await sessionUser(req);
    if (!me) return json({ error: '请先登录' }, 401, cors);
    const b = await readBody();
    const nickname = String(b.nickname || '').trim().slice(0, 16);
    if (!nickname) return json({ error: '昵称不能为空' }, 400, cors);
    if (nickname === me.user.nickname) return json({ error: '昵称没有变化' }, 400, cors);
    me.user.nickname = nickname;
    await saveUser(me.user);
    return json({ ok: true, message: '昵称已更新', user: publicUser(me.user) }, 200, cors);
  }
  if (path === '/api/auth/avatar' && req.method === 'POST') {
    const me = await sessionUser(req);
    if (!me) return json({ error: '请先登录' }, 401, cors);
    const b = await readBody();
    me.user.avatar = String(b.avatar || '🦉').slice(0, 4);
    await saveUser(me.user);
    return json({ ok: true, user: publicUser(me.user) }, 200, cors);
  }

  /* --- 我是谁 / 退出 --- */
  if (path === '/api/auth/me') {
    const me = await sessionUser(req);
    if (!me) return json({ error: '未登录' }, 401, cors);
    return json({ user: publicUser(me.user) }, 200, cors);
  }
  if (path === '/api/auth/logout' && req.method === 'POST') {
    const me = await sessionUser(req);
    if (me) await KV.delete(['session', me.token]);
    return json({ ok: true }, 200, cors);
  }

  /* --- 每日打卡 --- */
  if (path === '/api/checkin' && req.method === 'POST') {
    const me = await sessionUser(req);
    if (!me) return json({ error: '打卡需要先登录（就在右侧个人中心）' }, 401, cors);
    const day = todayKey();
    const u = me.user;
    u.checkins = Array.isArray(u.checkins) ? u.checkins : [];
    const fresh = !u.checkins.includes(day);
    if (fresh) {
      u.checkins.push(day);
      await saveUser(u);
      const ck = ['day', day];
      const n = (await KV.get<number>(ck)).value || 0;
      await KV.set(ck, n + 1);
    }
    const todayCount = (await KV.get<number>(['day', day])).value || 0;
    return json({
      ok: true,
      fresh,
      day,
      todayCount,
      myStreak: streakOf(u),
      myTotal: u.checkins.length,
      message: fresh ? '打卡成功，今天也没掉队 👍' : '今天已经打过卡了，明天再来',
    }, 200, cors);
  }

  /* --- 看板数字 --- */
  if (path === '/api/stats') {
    const me = await sessionUser(req);
    const day = todayKey();
    const out: any = {
      ok: true,
      todayCount: (await KV.get<number>(['day', day])).value || 0,
      totalUsers: (await KV.get<number>(['stat', 'users'])).value || 0,
      lights: (await KV.get<number>(['stat', 'lights'])).value || 0,
    };
    if (me) out.me = { nickname: me.user.nickname, streak: streakOf(me.user), total: (me.user.checkins || []).length };
    return json(out, 200, cors);
  }

  /* --- 点亮（照明） --- */
  if (path === '/api/light' && req.method === 'POST') {
    const b = await readBody();
    const vid = String(b.visitorId || '').slice(0, 64);
    const day = todayKey();
    let lights = (await KV.get<number>(['stat', 'lights'])).value || 0;
    let isNew = false;
    if (vid) {
      const key = ['light', 'visitor:' + vid];
      if (!(await KV.get(key)).value) {
        await KV.set(key, true);
        lights = await bumpStats('lights');
        isNew = true;
      }
    }
    return json({
      lights,
      isNew,
      todayCount: (await KV.get<number>(['day', day])).value || 0,
      totalUsers: (await KV.get<number>(['stat', 'users'])).value || 0,
    }, 200, cors);
  }

  /* --- 学习搭子 --- */
  if (path === '/api/chat/status') return json(await chatStatus(), 200, cors);
  if (path === '/api/chat' && req.method === 'POST') return await handleChat(req, await readBody());

  if (path.startsWith('/api/')) return json({ error: 'not found' }, 404, cors);

  /* --- 静态站点：同一个域名既跑接口又跑前端（顺手把 CORS 也免了） --- */
  return await serveStatic(path, req);
}

/* ---------------- 打包：把 90+ 个脚本合成 1 个（运行时算一次，内存里缓存） ---------------- */

const STATIC_TYPES: Record<string, string> = {
  html: 'text/html; charset=utf-8',
  css: 'text/css; charset=utf-8',
  js: 'text/javascript; charset=utf-8',
  mjs: 'text/javascript; charset=utf-8',
  json: 'application/json; charset=utf-8',
  svg: 'image/svg+xml',
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  webp: 'image/webp',
  gif: 'image/gif',
  ico: 'image/x-icon',
  txt: 'text/plain; charset=utf-8',
  md: 'text/markdown; charset=utf-8',
  woff: 'font/woff',
  woff2: 'font/woff2',
  mp4: 'video/mp4',
  webm: 'video/webm',
};

type Asset = { raw: Uint8Array; gz: Uint8Array | null; br: Uint8Array | null };
type Bundle = {
  core: Asset;      // 首屏必需：界面代码 + 专业目录 + 路径模板
  content: Asset;   // 课程/教材正文，首屏之后后台加载
  all: Asset;       // core + content 合并（一次性加载用，避免拆分顺序问题）
  html: Asset;
  count: number;
  contentCount: number;
};
let bundleCache: Bundle | null = null;
let bundlePromise: Promise<Bundle | null> | null = null;

async function gzip(data: Uint8Array): Promise<Uint8Array> {
  const cs = new CompressionStream('gzip');
  const stream = new Blob([data as unknown as BlobPart]).stream().pipeThrough(cs);
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

/* brotli 比 gzip 再小 30% 左右（中文内容尤其明显）。
   通过 node:zlib 动态引入：万一部署环境不支持，就自动退回 gzip，不影响可用性。 */
type BrotliFn = (data: Uint8Array) => Uint8Array;
let brotliFn: BrotliFn | null = null;
try {
  const zlib = await import('node:zlib');
  brotliFn = (data: Uint8Array) =>
    new Uint8Array(
      zlib.brotliCompressSync(data as unknown as Uint8Array, {
        params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 9 },
      }),
    );
} catch {
  brotliFn = null;
}

async function brotli(data: Uint8Array): Promise<Uint8Array | null> {
  if (!brotliFn) return null;
  try {
    return brotliFn(data);
  } catch {
    return null;
  }
}

/* 轻量压缩：只去掉整行的 // 注释、空行和行尾空格，不动字符串里的内容 */
function lightMinify(code: string): string {
  const out: string[] = [];
  for (const line of code.split('\n')) {
    const t = line.trim();
    if (!t) continue;
    if (t.startsWith('//')) continue;
    out.push(line.replace(/\s+$/, ''));
  }
  return out.join('\n');
}
async function readRepoFile(name: string): Promise<Uint8Array | null> {
  try {
    return await Deno.readFile(new URL('../' + name, import.meta.url));
  } catch {
    return null;
  }
}

/* 哪些文件属于「内容层」：课程/教材/章节数据，只有进专业页、关卡页才需要 */
function isContentFile(rel: string): boolean {
  return /(courses|textbooks|chapters|majors\/|philosophy\.js|logic\.js|law\.js|economics\.js|education\.js)/.test(rel);
}

function pack(srcs: string[], code: string): Promise<Asset> {
  const raw = new TextEncoder().encode(code);
  return (async () => ({ raw, gz: await gzip(raw), br: await brotli(raw) }))();
}

function buildBundleOnce(): Promise<Bundle | null> {
  if (bundleCache) return Promise.resolve(bundleCache);
  if (bundlePromise) return bundlePromise;
  bundlePromise = (async () => {
    const htmlRaw = await readRepoFile('index.html');
    if (!htmlRaw) return null;
    const htmlText = new TextDecoder().decode(htmlRaw);

    const tagRe = /<script\s+src="([^"]+)"\s*><\/script>\s*/g;
    const srcs: string[] = [];
    let m: RegExpExecArray | null;
    while ((m = tagRe.exec(htmlText)) !== null) srcs.push(m[1]);
    if (!srcs.length) return null;

    const coreParts: string[] = [];
    const contentParts: string[] = [];
    for (const raw of srcs) {
      const rel = raw.replace(/\?.*$/, '').replace(/^\.?\//, '');
      const bytes = await readRepoFile(rel);
      if (!bytes) return null;
      const piece = '/* ==== ' + rel + ' ==== */\n' + lightMinify(new TextDecoder().decode(bytes));
      if (isContentFile(rel)) contentParts.push(piece); else coreParts.push(piece);
    }

    // 内容层加载完成后派发事件，页面据此重绘当前视图
    contentParts.push(
      'window.__CONTENT_LOADED = true;\n' +
      'try { window.dispatchEvent(new Event("content-ready")); } catch (e) {}',
    );

    const coreCode = coreParts.join('\n;\n');
    const contentCode = contentParts.join('\n;\n');

    const firstIdx = htmlText.search(tagRe);
    tagRe.lastIndex = 0;
    let lastEnd = -1;
    while ((m = tagRe.exec(htmlText)) !== null) lastEnd = tagRe.lastIndex;

    const inject =
      '<script src="js/bundle-core.js?v=deno"></script>\n' +
      '<script>\n' +
      '(function(){function load(){var s=document.createElement("script");' +
      's.src="js/bundle-content.js?v=deno";s.async=true;document.body.appendChild(s);}\n' +
      'if(document.readyState==="complete")setTimeout(load,60);else window.addEventListener("load",function(){setTimeout(load,60);});})();\n' +
      '</script>\n';

    const html = new TextEncoder().encode(htmlText.slice(0, firstIdx) + inject + htmlText.slice(lastEnd));

    const bundle: Bundle = {
      all: await pack(srcs, coreCode + '\n;\n' + contentCode),
      core: await pack(srcs, coreCode),
      content: await pack(srcs, contentCode),
      html: await pack(srcs, new TextDecoder().decode(html)),
      count: coreParts.length,
      contentCount: contentParts.length - 1,
    };
    bundleCache = bundle;
    console.log(
      'bundle ready: core ' + bundle.count + ' files / ' + (bundle.core.raw.length / 1024).toFixed(0) + 'KB (br ' +
      (bundle.core.br ? (bundle.core.br.length / 1024).toFixed(0) : 'n/a') + 'KB), content ' + bundle.contentCount +
      ' files / ' + (bundle.content.raw.length / 1024).toFixed(0) + 'KB (br ' +
      (bundle.content.br ? (bundle.content.br.length / 1024).toFixed(0) : 'n/a') + 'KB)',
    );
    return bundle;
  })();
  return bundlePromise;
}

function accepts(req: Request, enc: string): boolean {
  return (req.headers.get('accept-encoding') || '').toLowerCase().includes(enc);
}

function sendAsset(
  req: Request,
  asset: Asset,
  type: string,
  cacheControl: string,
): Response {
  let body = asset.raw;
  let enc = '';
  if (asset.br && accepts(req, 'br')) {
    body = asset.br;
    enc = 'br';
  } else if (asset.gz && accepts(req, 'gzip')) {
    body = asset.gz;
    enc = 'gzip';
  }
  const headers: Record<string, string> = {
    'content-type': type,
    'cache-control': cacheControl,
    'vary': 'Accept-Encoding',
    'x-served-by': 'deno-static',
  };
  if (enc) headers['content-encoding'] = enc;
  return new Response(req.method === 'HEAD' ? null : (body as unknown as BodyInit), { headers });
}

async function serveStatic(path: string, req: Request): Promise<Response> {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return new Response('Method Not Allowed', { status: 405 });
  }
  const rel = path === '/' ? 'index.html' : path.replace(/^\/+/, '');
  if (rel.includes('..')) return new Response('Not Found', { status: 404 });

  const JS = 'text/javascript; charset=utf-8';

  if (rel === 'js/bundle.js') {
    const b = await buildBundleOnce();
    if (b) return sendAsset(req, b.all, JS, 'public, max-age=86400, immutable');
  }
  if (rel === 'js/bundle-core.js') {
    const b = await buildBundleOnce();
    if (b) return sendAsset(req, b.core, JS, 'public, max-age=86400, immutable');
  }
  if (rel === 'js/bundle-content.js') {
    const b = await buildBundleOnce();
    if (b) return sendAsset(req, b.content, JS, 'public, max-age=86400, immutable');
  }
  if (rel === 'index.html' || rel === '') {
    const b = await buildBundleOnce();
    if (b) return sendAsset(req, b.html, 'text/html; charset=utf-8', 'no-cache');
  }

  let data = await readRepoFile(rel);
  let name = rel;
  if (!data) {
    const b = await buildBundleOnce();
    if (b) return sendAsset(req, b.html, 'text/html; charset=utf-8', 'no-cache');
    data = await readRepoFile('index.html');
    name = 'index.html';
  }
  if (!data) return new Response('Not Found', { status: 404 });

  const ext = (name.split('.').pop() || 'html').toLowerCase();
  const type = STATIC_TYPES[ext] || 'application/octet-stream';
  const isHtml = ext === 'html';
  const compressible = isHtml || ext === 'css' || ext === 'js' || ext === 'json' || ext === 'svg';
  const asset: Asset = {
    raw: data,
    gz: compressible ? await gzip(data) : null,
    br: compressible ? await brotli(data) : null,
  };
  return sendAsset(req, asset, type, isHtml ? 'no-cache' : 'public, max-age=600');
}

Deno.serve({ port: Number(Deno.env.get('PORT') || 8000) }, (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: corsHeaders(req.headers.get('origin')) });
  return handle(req);
});