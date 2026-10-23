/**
 * 引路 · Cloudflare Pages Functions 接口
 * 路由前缀 /api/*，所有数据存 Workers KV（绑定名 YINLU_KV）
 *
 * 和原来 Deno / Express 版接口保持一致：
 *   GET  /api/ping           健康检查
 *   GET  /api/health         运行环境说明
 *   POST /api/auth/register  注册（学校简称 + 学号 + 密码）
 *   POST /api/auth/login     登录
 *   POST /api/auth/reset     忘记密码（学校简称 + 学号，直接设新密码）
 *   POST /api/auth/change    修改密码（需登录，验原密码）
 *   POST /api/auth/nickname  改昵称
 *   POST /api/auth/avatar    改头像
 *   GET  /api/auth/me        当前用户
 *   POST /api/auth/logout    退出
 *   POST /api/checkin        每日打卡
 *   GET  /api/stats          全站统计（含我的数据）
 *   POST /api/light          照明（游客/新用户点亮）
 *   GET  /api/chat/status    小引是否可用
 *   POST /api/chat           小引对话（转发给大模型）
 */

const APP = 'yinlu';
const SESSION_TTL = 60 * 60 * 24 * 30; // 30 天
const PBKDF2_ITER = 10000;

const ALLOWED_ORIGINS = [
  'https://yinlu.pages.dev',
  'https://guoguan.surge.sh',
  'https://yinlu.surge.sh',
  'http://localhost:3000',
  'http://localhost:3210',
  'http://localhost:3211',
  'http://localhost:3212',
];

/* ---------------- 小工具 ---------------- */

const enc = new TextEncoder();

function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...extraHeaders },
  });
}

function corsHeaders(request) {
  const origin = request.headers.get('Origin') || '';
  let allow = '';
  if (ALLOWED_ORIGINS.includes(origin)) allow = origin;
  else if (/^https:\/\/[a-z0-9-]+\.(surge\.sh|pages\.dev)$/.test(origin)) allow = origin;
  if (!allow) allow = ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '600',
    Vary: 'Origin',
  };
}

function todayKey(d = new Date()) {
  return d.toISOString().slice(0, 10);
}

function daysBetween(aKey, bKey) {
  const a = new Date(aKey + 'T00:00:00Z').getTime();
  const b = new Date(bKey + 'T00:00:00Z').getTime();
  return Math.round((b - a) / 86400000);
}

function randomHex(bytes = 32) {
  const buf = crypto.getRandomValues(new Uint8Array(bytes));
  return [...buf].map((b) => b.toString(16).padStart(2, '0')).join('');
}

function toHex(buf) {
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

function fromHex(hex) {
  const out = new Uint8Array(hex.length / 2);
  for (let i = 0; i < out.length; i++) out[i] = parseInt(hex.substr(i * 2, 2), 16);
  return out;
}

async function pbkdf2(password, saltHex, iter) {
  const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt: fromHex(saltHex), iterations: iter, hash: 'SHA-256' },
    key,
    256,
  );
  return toHex(bits);
}

async function hashPassword(password) {
  const salt = randomHex(16);
  const hash = await pbkdf2(password, salt, PBKDF2_ITER);
  return `pbkdf2$${PBKDF2_ITER}$${salt}$${hash}`;
}

async function verifyPassword(password, stored) {
  const parts = String(stored || '').split('$');
  if (parts.length !== 4 || parts[0] !== 'pbkdf2') return false;
  const iter = Number(parts[1]) || PBKDF2_ITER;
  const calc = await pbkdf2(password, parts[2], iter);
  // 常量时间比较
  const a = calc;
  const b = parts[3];
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function normalizeSid(prefix, rawSid) {
  const p = String(prefix || '').toUpperCase().replace(/[^A-Z]/g, '').slice(0, 8) || 'NCU';
  let raw = String(rawSid || '')
    .toUpperCase()
    .replace(/^[A-Z][A-Z.\-\s]*?[\s-]?(?=\d)/, '')
    .replace(/\D/g, '');
  const sid = p + raw;
  return { prefix: p, raw, snum: raw, sid, key: sid };
}

function validPassword(pwd) {
  return typeof pwd === 'string' && pwd.length >= 6 && pwd.length <= 32;
}

function publicUser(u) {
  if (!u) return null;
  return {
    prefix: u.prefix,
    sid: u.sid,
    snum: u.snum,
    nickname: u.nickname,
    avatar: u.avatar,
    createdAt: u.createdAt,
  };
}

/* ---------------- KV 数据层 ---------------- */

async function kvGetJson(env, key) {
  return await env.YINLU_KV.get(key, 'json');
}
async function kvPutJson(env, key, value, opts = {}) {
  await env.YINLU_KV.put(key, JSON.stringify(value), opts);
}

async function findUser(env, sid) {
  return await kvGetJson(env, 'user:' + sid);
}
async function findUserBySnum(env, snum) {
  const sid = await env.YINLU_KV.get('snum:' + snum);
  if (!sid) return null;
  return await findUser(env, sid);
}
async function saveUser(env, user) {
  await kvPutJson(env, 'user:' + user.sid, user);
  await env.YINLU_KV.put('snum:' + user.snum, user.sid);
}

async function createSession(env, sid) {
  const token = randomHex(32);
  await kvPutJson(env, 'session:' + token, { sid, expires: Date.now() + SESSION_TTL * 1000 }, { expirationTtl: SESSION_TTL });
  return token;
}
async function getSessionUser(env, request) {
  let token = '';
  const auth = request.headers.get('Authorization') || '';
  if (auth.startsWith('Bearer ')) token = auth.slice(7).trim();
  if (!token) {
    const cookie = request.headers.get('Cookie') || '';
    const m = cookie.match(/(?:^|;\s*)yl_token=([^;]+)/);
    if (m) token = decodeURIComponent(m[1]);
  }
  if (!token) return { token: '', user: null };
  const sess = await kvGetJson(env, 'session:' + token);
  if (!sess || (sess.expires && sess.expires < Date.now())) return { token, user: null };
  const user = await findUser(env, sess.sid);
  return { token, user };
}

async function rateLimit(env, bucket, max, windowSec) {
  const key = 'rl:' + bucket;
  const cur = Number(await env.YINLU_KV.get(key)) || 0;
  if (cur >= max) return false;
  await env.YINLU_KV.put(key, String(cur + 1), { expirationTtl: windowSec });
  return true;
}

async function bumpStat(env, name, delta = 1) {
  const key = 'stat:' + name;
  const cur = Number(await env.YINLU_KV.get(key)) || 0;
  const next = Math.max(0, cur + delta);
  await env.YINLU_KV.put(key, String(next));
  return next;
}

async function getLights(env) {
  return Number(await env.YINLU_KV.get('stat:lights')) || 0;
}

async function markLight(env, key) {
  const existed = await env.YINLU_KV.get('light:' + key);
  if (existed) return { isNew: false, lights: await getLights(env) };
  await env.YINLU_KV.put('light:' + key, '1');
  const lights = await bumpStat(env, 'lights', 1);
  return { isNew: true, lights };
}

async function dayCount(env, day) {
  return Number(await env.YINLU_KV.get('day:' + day)) || 0;
}

async function markCheckin(env, user, day = todayKey()) {
  const ck = 'checkin:' + user.sid + ':' + day;
  const exists = await env.YINLU_KV.get(ck);
  if (exists) {
    return { fresh: false, day, todayCount: await dayCount(env, day), myStreak: user.streak || 1 };
  }
  await env.YINLU_KV.put(ck, '1');
  const count = await bumpStat(env, 'checkin:' + day, 1);
  // 连续天数
  const last = user.lastCheckin || '';
  let streak = 1;
  if (last) {
    const gap = daysBetween(last, day);
    streak = gap === 1 ? (user.streak || 0) + 1 : gap === 0 ? user.streak || 1 : 1;
  }
  user.lastCheckin = day;
  user.streak = streak;
  await saveUser(env, user);
  return { fresh: true, day, todayCount: count, myStreak: streak };
}

/* ---------------- 路由 ---------------- */

async function handleAuthRegister(env, request) {
  const body = await request.json().catch(() => ({}));
  const n = normalizeSid(body.prefix, body.sid);
  if (!/^\d{6,20}$/.test(n.raw)) return json({ ok: false, error: '学号应该是 6–20 位数字' }, 400);
  if (!validPassword(body.password)) return json({ ok: false, error: '密码请设置 6–32 位' }, 400);
  if (await findUser(env, n.sid)) {
    return json({ ok: false, error: '这个学号已经注册过了，点「忘记密码」输入学校简称+学号就能直接重置并登录' }, 409);
  }
  const bySnum = await findUserBySnum(env, n.snum);
  if (bySnum) {
    return json({ ok: false, error: '这个学号已经注册过了，点「忘记密码」输入学校简称+学号就能直接重置并登录' }, 409);
  }
  const user = {
    sid: n.sid,
    prefix: n.prefix,
    snum: n.snum,
    nickname: (body.nickname || '').trim().slice(0, 16) || '同学' + n.snum.slice(-4),
    avatar: (body.avatar || '🦉').slice(0, 4),
    pwd: await hashPassword(body.password),
    createdAt: new Date().toISOString(),
    streak: 0,
    lastCheckin: '',
  };
  await saveUser(env, user);
  await bumpStat(env, 'users', 1);
  await markLight(env, 'user:' + n.sid);
  const token = await createSession(env, n.sid);
  return json({ ok: true, token, user: publicUser(user), lights: await getLights(env), todayCount: await dayCount(env, todayKey()) });
}

async function handleAuthLogin(env, request) {
  const body = await request.json().catch(() => ({}));
  const n = normalizeSid(body.prefix, body.sid);
  let user = await findUser(env, n.sid);
  if (!user) user = await findUserBySnum(env, n.snum);
  if (!user) return json({ ok: false, error: '没找到这个学号，先注册一下' }, 404);
  if (!(await verifyPassword(body.password, user.pwd))) {
    return json({ ok: false, error: '密码不对，忘了的话用「忘记密码」＋学校简称＋学号重置' }, 401);
  }
  const token = await createSession(env, user.sid);
  return json({ ok: true, token, user: publicUser(user) });
}

async function handleAuthReset(env, request) {
  const body = await request.json().catch(() => ({}));
  const n = normalizeSid(body.prefix, body.sid);
  if (!validPassword(body.password)) return json({ ok: false, error: '新密码请设置 6–32 位' }, 400);
  let user = await findUser(env, n.sid);
  if (!user) user = await findUserBySnum(env, n.snum);
  if (!user) return json({ ok: false, error: '没找到这个学号，先注册一下' }, 404);
  user.pwd = await hashPassword(body.password);
  await saveUser(env, user);
  const token = await createSession(env, user.sid);
  return json({ ok: true, token, user: publicUser(user), reset: true });
}

async function handleAuthChange(env, request, ctx) {
  const body = await request.json().catch(() => ({}));
  if (!(await verifyPassword(body.oldPassword, ctx.user.pwd))) {
    return json({ ok: false, error: '原密码不对' }, 400);
  }
  if (!validPassword(body.password)) return json({ ok: false, error: '新密码请设置 6–32 位' }, 400);
  ctx.user.pwd = await hashPassword(body.password);
  await saveUser(env, ctx.user);
  return json({ ok: true });
}

async function handleStats(env, request, ctx) {
  const day = todayKey();
  const data = {
    ok: true,
    todayCount: await dayCount(env, day),
    totalUsers: Number(await env.YINLU_KV.get('stat:users')) || 0,
    lights: await getLights(env),
  };
  if (ctx.user) {
    data.me = {
      sid: ctx.user.sid,
      nickname: ctx.user.nickname,
      avatar: ctx.user.avatar,
      streak: ctx.user.streak || 0,
      checkedToday: !!(await env.YINLU_KV.get('checkin:' + ctx.user.sid + ':' + day)),
    };
  }
  return json(data);
}

async function handleLight(env, request) {
  const body = await request.json().catch(() => ({}));
  const vid = String(body.visitorId || '').slice(0, 64);
  if (!vid) return json({ ok: false, error: 'visitorId 必填' }, 400);
  const r = await markLight(env, 'v:' + vid);
  return json({ ok: true, lights: r.lights, isNew: r.isNew, todayCount: await dayCount(env, todayKey()), totalUsers: Number(await env.YINLU_KV.get('stat:users')) || 0 });
}

/* ---------------- 小引（大模型转发） ---------------- */

const SYSTEM_PROMPT = `你是「引路」网站里的学习搭子，名字叫小引，一只猫头鹰。
学生是大学新生，可能正在为选专业、学基础课、做题目发愁。
回答要求：
1. 只用简体中文，绝对不要夹杂英文单词或拼音（代码关键字除外）。
2. 先给结论或下一步动作，再简要解释，总共不超过 100 字。
3. 结合他当前所在的页面/专业/关卡来答，不要答与学习无关的内容。
4. 不确定的就说不知道，不要编造课程、政策、分数。
5. 语气像一个靠谱的学长，不要客套、不要念目录。`;

function chatKey(env) {
  return env.OPENROUTER_API_KEY || env.DEEPSEEK_API_KEY || env.LLM_API_KEY || '';
}
function chatProvider(env) {
  return (env.LLM_PROVIDER || 'openrouter').toLowerCase();
}

/** Workers AI 备选模型（按顺序试，第一个能用的就用）—— 不需要任何 API Key */
const WA_MODELS = [
  '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
  '@cf/qwen/qwen2.5-7b-instruct',
  '@cf/meta/llama-3.1-8b-instruct',
  '@cf/meta/llama-3.2-3b-instruct',
];

/** 小引到底走哪条通道：有 Key 走 Key，否则有 AI 绑定就走 Workers AI */
function chatEngine(env) {
  const key = chatKey(env);
  if (key) {
    const provider = chatProvider(env);
    return { kind: provider === 'deepseek' ? 'deepseek' : 'openrouter', key, label: provider === 'deepseek' ? 'DeepSeek' : 'OpenRouter' };
  }
  if (env.AI) return { kind: 'workers-ai', key: '', label: 'Cloudflare AI' };
  return { kind: 'none', key: '', label: '离线' };
}

async function handleChatStatus(env) {
  const engine = chatEngine(env);
  const ready = engine.kind !== 'none';
  return json({
    ok: true,
    ready,
    provider: engine.kind,
    providerLabel: engine.label,
    model: env.LLM_MODEL || (engine.kind === 'workers-ai' ? WA_MODELS[0] : 'deepseek-chat'),
    requireLogin: env.CHAT_REQUIRE_LOGIN === '1',
    reason: ready ? '' : 'no-key',
  });
}

async function handleChat(env, request, ctx) {
  const engine = chatEngine(env);
  if (engine.kind === 'none') {
    return json({ ok: false, reason: 'no-key', hint: '后端还没配大模型，小引暂时用本地兜底回答。' }, 503);
  }
  if (env.CHAT_REQUIRE_LOGIN === '1' && !ctx.user) {
    return json({ ok: false, reason: 'login-required', hint: '登录之后才能用小引。' }, 401);
  }
  const body = await request.json().catch(() => ({}));
  const msgs = Array.isArray(body.messages) ? body.messages.slice(-10) : [];
  const ctxText = body.context ? '\n当前页面信息：' + JSON.stringify(body.context).slice(0, 500) : '';
  const messages = [
    { role: 'system', content: SYSTEM_PROMPT + ctxText },
    ...msgs
      .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
      .map((m) => ({ role: m.role, content: m.content.slice(0, 800) })),
  ];
  if (!messages.some((m) => m.role === 'user')) return json({ ok: false, error: '没有提问内容' }, 400);

  // ---- 通道一：Workers AI（不需要任何 Key，走 Cloudflare 自家额度）----
  if (engine.kind === 'workers-ai') {
    const models = (env.LLM_MODEL || env.LLM_MODELS || WA_MODELS.join(','))
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    let lastErr = '';
    for (const model of models) {
      try {
        const out = await env.AI.run(model, { messages, max_tokens: 400, temperature: 0.7 });
        const text = (out && (out.response || out.text || out.result)) || '';
        if (text && String(text).trim()) {
          return json({ ok: true, text: String(text).trim(), model, provider: 'workers-ai' });
        }
        lastErr = 'empty response';
      } catch (err) {
        lastErr = err && err.message ? err.message : String(err);
      }
    }
    return json({ ok: false, reason: 'upstream', error: 'Workers AI 没返回内容：' + String(lastErr).slice(0, 200) }, 502);
  }

  // ---- 通道二：外部大模型 API（OpenRouter / DeepSeek，需 Key）----
  const provider = chatProvider(env);
  const isOpenRouter = engine.kind === 'openrouter';
  const base = (env.LLM_BASE || (isOpenRouter ? 'https://openrouter.ai/api/v1' : 'https://api.deepseek.com')).replace(/\/+$/, '');
  const model = env.LLM_MODEL || (isOpenRouter ? 'nvidia/nemotron-3-super-120b-a12b:free' : 'deepseek-chat');
  const payload = { model, messages, max_tokens: 500, temperature: 0.7 };
  if (isOpenRouter) {
    payload.models = (env.LLM_MODELS || 'nvidia/nemotron-3-super-120b-a12b:free,google/gemma-4-31b-it:free')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
  }
  const headers = { 'content-type': 'application/json', authorization: 'Bearer ' + engine.key };
  if (isOpenRouter) {
    headers['HTTP-Referer'] = 'https://yinlu.pages.dev';
    headers['X-Title'] = 'YinLu Study Companion';
  }
  try {
    const resp = await fetch(base + '/chat/completions', { method: 'POST', headers, body: JSON.stringify(payload) });
    if (!resp.ok) {
      const detail = await resp.text().catch(() => '');
      const reason = resp.status === 401 ? 'bad-key' : resp.status === 429 ? 'rate-limit' : 'upstream';
      return json({ ok: false, reason, error: '大模型接口返回 ' + resp.status, detail: detail.slice(0, 200) }, 502);
    }
    const data = await resp.json();
    const text = data?.choices?.[0]?.message?.content || '';
    return json({ ok: true, text, model: data?.model || model, provider: engine.kind });
  } catch (err) {
    return json({ ok: false, reason: 'timeout', error: '大模型请求失败：' + (err && err.message ? err.message : 'unknown') }, 504);
  }
}

/* ---------------- 入口 ---------------- */

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/+$/, '') || '/api';
  const cors = corsHeaders(request);

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: cors });
  }

  const respond = (resp) => {
    const headers = new Headers(resp.headers);
    Object.entries(cors).forEach(([k, v]) => headers.set(k, v));
    return new Response(resp.body, { status: resp.status, headers });
  };

  try {
    if (path === '/api' || path === '/api/ping') {
      return respond(json({ ok: true, app: APP, runtime: 'cloudflare', ts: Date.now() }));
    }
    if (path === '/api/health') {
      return respond(json({ ok: true, compiler: { ready: false, engine: 'none', detail: '云端不判题（判题在前端离线完成）' } }));
    }

    const ctx = await getSessionUser(env, request);

    if (path === '/api/auth/register' && request.method === 'POST') {
      if (!(await rateLimit(env, 'reg:' + (request.headers.get('CF-Connecting-IP') || 'x'), 10, 60))) {
        return respond(json({ ok: false, error: '请求太频繁，稍后再试' }, 429));
      }
      return respond(await handleAuthRegister(env, request));
    }
    if (path === '/api/auth/login' && request.method === 'POST') {
      if (!(await rateLimit(env, 'login:' + (request.headers.get('CF-Connecting-IP') || 'x'), 20, 60))) {
        return respond(json({ ok: false, error: '请求太频繁，稍后再试' }, 429));
      }
      return respond(await handleAuthLogin(env, request));
    }
    if (path === '/api/auth/reset' && request.method === 'POST') {
      if (!(await rateLimit(env, 'reset:' + (request.headers.get('CF-Connecting-IP') || 'x'), 8, 60))) {
        return respond(json({ ok: false, error: '请求太频繁，稍后再试' }, 429));
      }
      return respond(await handleAuthReset(env, request));
    }
    if (path === '/api/auth/change' && request.method === 'POST') {
      if (!ctx.user) return respond(json({ ok: false, error: '请先登录' }, 401));
      return respond(await handleAuthChange(env, request, ctx));
    }
    if (path === '/api/auth/nickname' && request.method === 'POST') {
      if (!ctx.user) return respond(json({ ok: false, error: '请先登录' }, 401));
      const body = await request.json().catch(() => ({}));
      const nickname = String(body.nickname || '').trim().slice(0, 16);
      if (!nickname) return respond(json({ ok: false, error: '昵称不能为空' }, 400));
      ctx.user.nickname = nickname;
      await saveUser(env, ctx.user);
      return respond(json({ ok: true, user: publicUser(ctx.user) }));
    }
    if (path === '/api/auth/avatar' && request.method === 'POST') {
      if (!ctx.user) return respond(json({ ok: false, error: '请先登录' }, 401));
      const body = await request.json().catch(() => ({}));
      ctx.user.avatar = String(body.avatar || '🦉').slice(0, 4);
      await saveUser(env, ctx.user);
      return respond(json({ ok: true, user: publicUser(ctx.user) }));
    }
    if (path === '/api/auth/me') {
      if (!ctx.user) return respond(json({ ok: false, error: '未登录' }, 401));
      return respond(json({ ok: true, user: publicUser(ctx.user) }));
    }
    if (path === '/api/auth/logout' && request.method === 'POST') {
      if (ctx.token) await env.YINLU_KV.delete('session:' + ctx.token);
      return respond(json({ ok: true }));
    }
    if (path === '/api/checkin' && request.method === 'POST') {
      if (!ctx.user) return respond(json({ ok: false, error: '请先登录' }, 401));
      const r = await markCheckin(env, ctx.user);
      return respond(json({ ok: true, ...r }));
    }
    if (path === '/api/stats') {
      return respond(await handleStats(env, request, ctx));
    }
    if (path === '/api/light' && request.method === 'POST') {
      return respond(await handleLight(env, request));
    }
    if (path === '/api/chat/status') {
      return respond(await handleChatStatus(env));
    }
    if (path === '/api/chat' && request.method === 'POST') {
      return respond(await handleChat(env, request, ctx));
    }

    return respond(json({ ok: false, error: 'not found' }, 404));
  } catch (err) {
    return respond(json({ ok: false, error: 'server error: ' + (err && err.message ? err.message : 'unknown') }, 500));
  }
}
