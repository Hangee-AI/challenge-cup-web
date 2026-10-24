/* 引路介绍页 · 实时数据代理
 * 主站 yinlu.pages.dev 的 /api/stats 有 Origin 白名单，浏览器直读会被 CORS 拦掉，
 * 所以由这里服务端取回后同源转发给页面。目标地址固定，不接受外部传入的 URL。
 */

const UP_STATS = "https://yinlu.pages.dev/api/stats";
const UP_DATA = "https://yinlu.pages.dev/js/bundle.js";
const TTL_STATS = 5 * 60 * 1000;
const TTL_DATA = 30 * 60 * 1000;
const MAX_HEAD = 64 * 1024;
const BUDGET_DATA = 7000;
const BUDGET_STATS = 4000;

let statsCache = null;
let dataCache = null;

function countMatches(src, startMark, endMark, re) {
  const i = src.indexOf(startMark);
  if (i < 0) return null;
  const j = src.indexOf(endMark, i + startMark.length);
  if (j < 0) return null;
  const m = src.slice(i, j).match(re);
  return m ? m.length : 0;
}

/* bundle.js 前面就是数据层：CATEGORIES / MAJOR_ROWS / VIDEO_COURSES 都在前 ~12KB。
   读到 VIDEO_COURSES 段落尾就掐断连接，不拉完整的 4.7MB；主站偶尔挂住连接，
   所以每次抓取都有硬超时，失败就沿用上一次成功的数量。 */
async function readDataHead() {
  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), BUDGET_DATA);
  try {
    const res = await fetch(UP_DATA, { signal: ac.signal });
    if (!res.ok || !res.body) return "";
    const reader = res.body.getReader();
    const dec = new TextDecoder();
    let text = "";
    while (text.length < MAX_HEAD) {
      const r = await reader.read();
      if (r.done) break;
      text += dec.decode(r.value, { stream: true });
      const vhead = text.indexOf("const VIDEO_COURSES");
      if (vhead > 0 && text.indexOf("\n};", vhead) > 0) break;
    }
    ac.abort();
    try { await reader.cancel(); } catch (_) { /* 已经读完 */ }
    return text;
  } catch (_) {
    return "";
  } finally {
    clearTimeout(timer);
  }
}

async function fetchStatsOnce() {
  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), BUDGET_STATS);
  try {
    const res = await fetch(UP_STATS, { signal: ac.signal });
    if (!res.ok) return {};
    const j = await res.json();
    return j && typeof j === "object" ? j : {};
  } catch (_) {
    return {};
  } finally {
    clearTimeout(timer);
  }
}

function num(v) {
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function countMajors(head) {
  const i = head.indexOf("const MAJOR_ROWS");
  if (i < 0) return null;
  const j = head.indexOf("\n];", i);
  if (j < 0) return null;
  return head.slice(i, j).split("\n").filter((l) => /^ {2}\[/.test(l)).length;
}

/* 主站偶发只回 `{}`（无 lights），取空就再试一次 */
async function getStats() {
  if (statsCache && Date.now() - statsCache.at < TTL_STATS) return statsCache.val;
  let s = await fetchStatsOnce();
  if (s.lights === undefined) s = await fetchStatsOnce();
  if (s.lights !== undefined) statsCache = { at: Date.now(), val: s };
  return statsCache ? statsCache.val : {};
}

/* 专业数量来自主站数据层，解析失败时沿用上一次成功的结果，页面就不会退回静态数字 */
async function getDataCounts() {
  if (dataCache && Date.now() - dataCache.at < TTL_DATA) return dataCache.val;
  const head = await readDataHead();
  const val = {
    categories: countMatches(head, "const CATEGORIES", "\n];", /\bid:\s*'/g),
    majors: countMajors(head),
    videoCourses: countMatches(head, "const VIDEO_COURSES", "\n};", /:\s*\{\s*title:/g),
  };
  if (val.categories !== null || val.majors !== null) dataCache = { at: Date.now(), val: val };
  return dataCache ? dataCache.val : val;
}

async function buildPayload() {
  const parts = await Promise.all([getDataCounts(), getStats()]);
  const data = parts[0];
  const stats = parts[1];
  const out = {
    ok: true,
    categories: data.categories,
    majors: data.majors,
    videoCourses: data.videoCourses,
    lights: num(stats.lights),
    totalUsers: num(stats.totalUsers),
    todayCount: num(stats.todayCount),
    syncedAt: new Date().toISOString(),
  };
  if (out.categories === null && out.majors === null && out.lights === null) out.ok = false;
  return out;
}

function handle(req) {
  if (req.method !== "GET") {
    return new Response(JSON.stringify({ ok: false, error: "method_not_allowed" }), {
      status: 405,
      headers: { "content-type": "application/json; charset=utf-8", allow: "GET" },
    });
  }
  return buildPayload()
    .then((payload) => new Response(JSON.stringify(payload), {
      status: payload.ok ? 200 : 502,
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": payload.ok ? "public, max-age=300" : "no-store",
      },
    }))
    .catch(() => new Response(JSON.stringify({ ok: false, error: "upstream_unavailable" }), {
      status: 502,
      headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
    }));
}

Deno.serve(handle);
