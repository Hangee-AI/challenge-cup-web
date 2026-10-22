/* ==========================================================
   小引 · 学习搭子（DeepSeek 代理）
   ----------------------------------------------------------
   为什么要有这一层：
     DeepSeek 的 API Key 绝对不能写在前端（谁都能看到、会被刷爆）。
     所以浏览器只调用本站的 /api/chat，由服务器带着 Key 去请求 DeepSeek。

   Key 从哪来（优先级从高到低）：
     1. 环境变量  DEEPSEEK_API_KEY=sk-xxxx
     2. 文件      server/data/deepseek.json  内容 {"apiKey":"sk-xxxx"}
        （server/data/ 已在 .gitignore 里，不会被提交）

   没配 Key 时接口返回 503 + reason=no-key，前端会退回「本地兜底回答」，
   页面照样能演示，不会白屏。

   可选环境变量：
     DEEPSEEK_BASE       默认 https://api.deepseek.com
     DEEPSEEK_MODEL      默认 deepseek-chat（deepseek-reasoner 更慢更贵）
     DEEPSEEK_MAX_TOKENS 默认 500
     CHAT_DAILY_CAP      全站每天最多回答多少条，默认 800（防刷爆余额）
     CHAT_REQUIRE_LOGIN  设为 1 时，只有本站已登录用户才能对话
   ========================================================== */

const fs = require('fs');
const path = require('path');
const express = require('express');
const db = require('../db');

/* ---------- 服务商预设 ----------
   只要对方「兼容 OpenAI 的 /chat/completions」，就能接进来。
   切换方式：设环境变量 LLM_PROVIDER=deepseek|openrouter|siliconflow|ollama|custom
   任何一个预设都可以用 LLM_BASE / LLM_MODEL / LLM_MODELS / LLM_API_KEY 覆盖。 */
const PRESETS = {
  deepseek: {
    label: 'DeepSeek',
    base: 'https://api.deepseek.com',
    model: 'deepseek-chat',
    keyEnvs: ['DEEPSEEK_API_KEY'],
    files: ['deepseek.json']
  },
  openrouter: {
    label: 'OpenRouter 免费模型',
    base: 'https://openrouter.ai/api/v1',
    model: 'nvidia/nemotron-3-super-120b-a12b:free',
    /* OpenRouter 支持 models 数组：前一个限流/挂了自动换下一个 */
    models: [
      'nvidia/nemotron-3-super-120b-a12b:free',
      'google/gemma-4-31b-it:free',
      'nvidia/nemotron-3.5-lightning:free'
    ],
    keyEnvs: ['OPENROUTER_API_KEY'],
    files: ['openrouter.json', 'llm.json'],
    headers: {
      'HTTP-Referer': 'https://guoguan.surge.sh',
      'X-Title': 'YinLu Study Companion'
    }
  },
  siliconflow: {
    label: '硅基流动',
    base: 'https://api.siliconflow.cn/v1',
    model: 'deepseek-ai/DeepSeek-V3',
    keyEnvs: ['SILICONFLOW_API_KEY'],
    files: ['siliconflow.json', 'llm.json']
  },
  ollama: {
    label: '本地 Ollama',
    base: 'http://127.0.0.1:11434/v1',
    model: 'qwen2.5:1.5b',
    keyEnvs: ['OLLAMA_API_KEY'],
    files: ['ollama.json', 'llm.json']
  },
  custom: {
    label: '自定义',
    base: '',
    model: '',
    keyEnvs: ['LLM_API_KEY'],
    files: ['llm.json']
  }
};

/* 选服务商：LLM_PROVIDER 优先；没设就看哪个 Key 环境变量存在；都没有就 deepseek */
function pickProviderName() {
  const forced = String(process.env.LLM_PROVIDER || '').trim().toLowerCase();
  if (forced && PRESETS[forced]) return forced;
  if (process.env.OPENROUTER_API_KEY) return 'openrouter';
  if (process.env.SILICONFLOW_API_KEY) return 'siliconflow';
  if (process.env.LLM_BASE) return 'custom';
  return 'deepseek';
}

const PROVIDER = pickProviderName();
const PRESET = PRESETS[PROVIDER];
const BASE = (process.env.LLM_BASE || process.env.DEEPSEEK_BASE || PRESET.base || '').replace(/\/+$/, '');
const MODEL = process.env.LLM_MODEL || process.env.DEEPSEEK_MODEL || PRESET.model || '';
const FALLBACK_MODELS = (function () {
  const raw = String(process.env.LLM_MODELS || '').trim();
  const list = raw ? raw.split(',').map((s) => s.trim()).filter(Boolean) : (PRESET.models || []);
  return list.filter((m) => m && m !== MODEL);
})();
const MAX_TOKENS = Number(process.env.DEEPSEEK_MAX_TOKENS || 500);
const TIMEOUT_MS = Number(process.env.DEEPSEEK_TIMEOUT_MS || 25000);

/* 系统提示：把它限定成「学习搭子」，而不是万能聊天机器人 */
const SYSTEM_PROMPT = [
  '你是「引路」这个网页里的学习搭子，名字叫小引，形象是一只猫头鹰。',
  '网站面向刚上大学的本科生，帮他们把「该学什么、先学什么」排清楚。',
  '说话要求：',
  '1. 用中文，口语一点，像学长学姐在聊天，不要客套话。',
  '2. 短：一般 3 句话以内，最多 120 字；用户明确要求展开时才多写。',
  '3. 先给结论，再给一句原因或一个动作。',
  '4. 如果用户带着当前关卡的信息，尽量用这一关的概念举例。',
  '5. 不编造课程名、老师、学校规定；不确定就说不确定。',
  '6. 不回答与学习无关的请求（娱乐、八卦、代写作业），用一句话礼貌拉回学习。',
  '7. 不要输出 Markdown 标题和表格；代码只用短代码块。'
].join('\n');

function readKey() {
  for (let i = 0; i < PRESET.keyEnvs.length; i++) {
    const v = process.env[PRESET.keyEnvs[i]];
    if (v) return String(v).trim();
  }
  if (process.env.LLM_API_KEY) return String(process.env.LLM_API_KEY).trim();
  const dir = path.join(__dirname, '..', 'data');
  const files = (PRESET.files || []).concat(['llm.json']);
  for (let i = 0; i < files.length; i++) {
    try {
      const j = JSON.parse(fs.readFileSync(path.join(dir, files[i]), 'utf8'));
      if (j && j.apiKey) return String(j.apiKey).trim();
    } catch (e) { /* 没文件就是没配 */ }
  }
  return '';
}

/* 本地 Ollama 不校验 Key，给个占位即可 */
function effectiveKey() {
  const k = readKey();
  if (k) return k;
  return PROVIDER === 'ollama' ? 'ollama' : '';
}

/* ---------- 限流：每 IP 每小时 40 条，全站每天 CHAT_DAILY_CAP 条 ---------- */
const HOUR = 60 * 60 * 1000;
const PER_IP_HOUR = Number(process.env.CHAT_PER_IP_HOUR || 40);
const DAILY_CAP = Number(process.env.CHAT_DAILY_CAP || 800);
const REQUIRE_LOGIN = String(process.env.CHAT_REQUIRE_LOGIN || '') === '1';
const buckets = new Map();
let dayKey = '';
let dayCount = 0;

function todayKey() {
  const d = new Date();
  return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
}

function hitLimit(ip) {
  const now = Date.now();
  if (dayKey !== todayKey()) { dayKey = todayKey(); dayCount = 0; }
  if (dayCount >= DAILY_CAP) return 'deny-day';

  let b = buckets.get(ip);
  if (!b || now - b.start > HOUR) { b = { start: now, n: 0 }; buckets.set(ip, b); }
  if (b.n >= PER_IP_HOUR) return 'deny-ip';

  b.n += 1;
  dayCount += 1;
  if (buckets.size > 5000) buckets.clear();
  return '';
}

/* 取登录用户（可选）：开了 CHAT_REQUIRE_LOGIN 就必须是本站登录用户 */
function currentUser(req) {
  try {
    const h = String(req.headers.authorization || '');
    const token = h.indexOf('Bearer ') === 0 ? h.slice(7).trim() : '';
    if (!token) return null;
    const s = db.getSession(token);
    if (!s) return null;
    return db.findUserById(s.userId);
  } catch (e) {
    return null;
  }
}

/* ---------- 请求体清洗 ---------- */
function cleanMessages(input) {
  if (!Array.isArray(input)) return [];
  const out = [];
  for (let i = 0; i < input.length && out.length < 10; i++) {
    const m = input[i] || {};
    const role = m.role === 'assistant' ? 'assistant' : 'user';
    let content = String(m.content == null ? '' : m.content).trim();
    if (!content) continue;
    if (content.length > 800) content = content.slice(0, 800);
    out.push({ role: role, content: content });
  }
  return out.slice(-10);
}

function cleanContext(ctx) {
  const c = ctx || {};
  const pick = (v, n) => String(v == null ? '' : v).replace(/\s+/g, ' ').trim().slice(0, n);
  return {
    major: pick(c.major, 40),
    stage: pick(c.stage, 40),
    module: pick(c.module, 40),
    level: pick(c.level, 60),
    view: pick(c.view, 20),
    doc: pick(c.doc, 300),
    topic: pick(c.topic, 200)
  };
}

function contextBlock(c) {
  const lines = [];
  if (c.major) lines.push('专业：' + c.major);
  if (c.stage) lines.push('阶段：' + c.stage);
  if (c.module) lines.push('模块：' + c.module);
  if (c.level) lines.push('正在看：' + c.level);
  if (c.doc) lines.push('讲解要点：' + c.doc);
  if (c.topic) lines.push('本关第一题：' + c.topic);
  if (!lines.length) return '';
  return '【用户当前页面】\n' + lines.join('\n') + '\n（回答时结合这些信息，但不要逐条复述）';
}

const router = express.Router();

/* GET /api/chat/status  前端用来决定显示「在线/未接大模型」 */
router.get('/chat/status', (req, res) => {
  const key = effectiveKey();
  res.json({
    ok: true,
    ready: !!key,
    provider: PROVIDER,
    providerLabel: PRESET.label,
    model: MODEL,
    fallbacks: FALLBACK_MODELS,
    requireLogin: REQUIRE_LOGIN,
    reason: key ? '' : 'no-key',
    note: key ? '' : '在服务器上配置对应 API Key（或 server/data/llm.json）后即可对话'
  });
});

/* POST /api/chat  { messages:[{role,content}], context:{} } */
router.post('/chat', async (req, res) => {
  const key = effectiveKey();
  if (!key) {
    return res.status(503).json({
      ok: false,
      reason: 'no-key',
      hint: '学习搭子还没接通大模型：在服务器配置 API Key 即可。'
    });
  }

  const ip = (req.headers['x-forwarded-for'] || req.ip || '').toString().split(',')[0].trim();

  /* 可选：只允许本站已登录用户使用（开 CHAT_REQUIRE_LOGIN=1） */
  const user = currentUser(req);
  if (REQUIRE_LOGIN && !user) {
    return res.status(401).json({
      ok: false,
      reason: 'login-required',
      hint: '先到「个人中心」用学号注册/登录，就能跟小引聊天了。'
    });
  }

  const denied = hitLimit(ip);
  if (denied) {
    return res.status(429).json({
      ok: false,
      reason: denied === 'deny-day' ? 'quota-day' : 'rate-limit',
      hint: denied === 'deny-day' ? '今天全站的额度用完了，明天再来问我吧。' : '说得有点快，等我缓一缓（每小时 ' + PER_IP_HOUR + ' 条）。'
    });
  }

  const messages = cleanMessages(req.body && req.body.messages);
  if (!messages.length) {
    return res.status(400).json({ ok: false, reason: 'empty', hint: '先说点什么吧。' });
  }

  const ctx = cleanContext(req.body && req.body.context);
  const sys = SYSTEM_PROMPT + (contextBlock(ctx) ? '\n\n' + contextBlock(ctx) : '');

  const payload = {
    model: MODEL,
    messages: [{ role: 'system', content: sys }].concat(messages),
    max_tokens: MAX_TOKENS,
    temperature: 0.6,
    stream: false
  };
  /* OpenRouter：带 models 数组，主模型限流时自动换后面的免费模型 */
  if (FALLBACK_MODELS.length) payload.models = [MODEL].concat(FALLBACK_MODELS);

  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), TIMEOUT_MS);
  const started = Date.now();

  try {
    const headers = Object.assign(
      { 'Content-Type': 'application/json', Authorization: 'Bearer ' + key },
      PRESET.headers || {}
    );
    const r = await fetch(BASE + '/chat/completions', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload),
      signal: ctl.signal
    });
    const data = await r.json().catch(() => ({}));

    if (!r.ok) {
      const status = r.status;
      let reason = 'upstream';
      let hint = '大模型那边出了点问题，稍后再问我一次。';
      if (status === 401 || status === 403) {
        reason = 'bad-key';
        hint = '大模型的 Key 无效或没余额了，需要重新配置。';
      } else if (status === 429) {
        reason = 'upstream-limit';
        hint = '大模型那边限流了，过一会儿再问。';
      } else if (status >= 500) {
        reason = 'upstream-5xx';
      }
      return res.status(502).json({ ok: false, reason: reason, hint: hint, upstream: (data && data.error && data.error.message) || '' });
    }

    const choice = (data.choices && data.choices[0]) || {};
    const reply = ((choice.message && choice.message.content) || '').trim();
    if (!reply) {
      return res.status(502).json({ ok: false, reason: 'empty-reply', hint: '模型这次没说出话，再问一次试试。' });
    }

    res.json({
      ok: true,
      reply: reply,
      model: data.model || MODEL,
      ms: Date.now() - started,
      usage: data.usage || null
    });
  } catch (err) {
    const aborted = err && (err.name === 'AbortError' || String(err.message).indexOf('abort') > -1);
    res.status(aborted ? 504 : 502).json({
      ok: false,
      reason: aborted ? 'timeout' : 'network',
      hint: aborted ? '等太久了，这次先跳过；可以再问一次或说得短一点。' : '服务器连不上大模型，检查一下网络。'
    });
  } finally {
    clearTimeout(timer);
  }
});

module.exports = router;
