/* ============================================================
 * 后端地址配置（唯一需要改的地方）
 * ------------------------------------------------------------
 * 前端是静态站（guoguan.surge.sh），账号/打卡/照明这些接口跑在
 * 另一台公网后端上，这里填后端的公网地址（末尾不要带 /）。
 *
 * 现在用的是 Cloudflare 隧道地址；**隧道重启后地址会变**
 * （形如 https://xxx-yyy-zzz.trycloudflare.com），把下面换掉再 push 即可，
 * GitHub Actions 会自动重新发布静态站。
 *
 * 说明：
 *  - 本机打开（localhost / 127.0.0.1 / 双击 index.html）时自动走同源或本地模式，
 *    不会调用这个公网地址，所以本地开发不受影响。
 *  - 访问者也可以在自己的浏览器里临时指定：
 *    localStorage.setItem('yl_api_base', 'https://...')
 *    （优先级：本文件 > localStorage > 同源）
 * ============================================================ */

window.YL_API_BASE = 'https://juan-zinc-newman-lighter.trycloudflare.com';

// ci-marker: 2026-10-22-c
