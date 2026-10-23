/**
 * Cloudflare Worker · 静态站点 + 接口入口
 * ------------------------------------------------------------
 * 现在只做静态资源托管（HTML / CSS / JS 都从 dist-cf 出）。
 * 之后把账号、打卡、照明、小引这些接口搬到这里（配 KV 后启用）。
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (!url.pathname.startsWith('/api/')) {
      return env.ASSETS.fetch(request);
    }
    // 接口还没搬完：先给一个明确的回应，前端会自动回退到离线模式
    return new Response(
      JSON.stringify({ ok: false, reason: 'api-not-ready' }),
      { status: 503, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } },
    );
  },
};
