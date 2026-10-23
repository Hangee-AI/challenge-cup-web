/* ==========================================================
   tools/bundle.js · 把 index.html 里几十个 <script src> 拆成两个包
   ----------------------------------------------------------
   为什么需要：
   - 页面依赖 90 多个经典 <script>，每个文件都要单独发一次请求。
     Surge 的 CDN 在国内访问每个请求要 2–9 秒，九十几个就是几分钟，
     浏览器标签会一直转圈。
   - 三个课程/教材目录加起来 3.4 MB，首屏根本用不到，一起加载就是几分钟空白。

   产出两个包：
   - js/bundle-core.js     首屏必需（界面 + 专业目录 + 路径模板），约 290 KB
   - js/bundle-content.js  课程/教材正文，约 3.4 MB，首屏出来之后再后台加载

   用法（CI 里用）：
     node tools/bundle.js dist 20261023a
     第 2 个参数 = 输出目录，第 3 个参数 = 版本标记（拼在 ?v= 后面）

   注意：
   - 只处理「带 src 的经典 script」，且要求它们连成一段（本项目的实际情况）。
   - 顺序 = index.html 里的顺序，用一个 `;` 隔开，作用域与逐个加载一致。
   - 合并完会把输出目录里的零散 js 文件删掉，只留两个包（不想删就传 --keep）。
   ========================================================== */
'use strict';

const fs = require('fs');
const path = require('path');

const root = process.cwd();
const outDir = path.resolve(root, process.argv[2] || 'dist');
const marker = process.argv[3] || String(Date.now());
const keepOriginals = process.argv.includes('--keep');

const htmlPath = path.join(root, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

const tagRe = /<script\s+src="([^"]+)"\s*><\/script>\s*/g;
const srcs = [];
let firstIdx = -1;
let lastEnd = -1;
let m;

while ((m = tagRe.exec(html)) !== null) {
  if (firstIdx < 0) firstIdx = m.index;
  lastEnd = tagRe.lastIndex;
  srcs.push(m[1]);
}

if (!srcs.length) {
  console.error('没有找到 <script src>，退出');
  process.exit(1);
}

const between = html.slice(firstIdx, lastEnd);
const onlyScripts = between.replace(tagRe, '').replace(/<!--[\s\S]*?-->/g, '').trim();
if (onlyScripts.length > 0) {
  console.warn('提示：script 标签之间还有其它内容（' + onlyScripts.length + ' 字节），已一并移除，请确认没删掉有用标记');
}

/* 哪些文件属于「内容层」：课程 / 教材 / 章节数据，只有进专业页、关卡页才需要 */
function isContentFile(rel) {
  return /(courses|textbooks|chapters|majors\/|philosophy\.js|logic\.js|law\.js|economics\.js|education\.js)/.test(rel);
}

const coreParts = [];
const contentParts = [];
let coreBytes = 0;
let contentBytes = 0;

for (const raw of srcs) {
  const rel = raw.replace(/\?.*$/, '').replace(/^\.?\//, '');
  const abs = path.join(root, rel);
  if (!fs.existsSync(abs)) {
    console.error('缺少文件：' + rel);
    process.exit(1);
  }
  const code = fs.readFileSync(abs, 'utf8');
  const piece = '/* ==== ' + rel + ' ==== */\n' + code;
  if (isContentFile(rel)) {
    contentBytes += Buffer.byteLength(code, 'utf8');
    contentParts.push(piece);
  } else {
    coreBytes += Buffer.byteLength(code, 'utf8');
    coreParts.push(piece);
  }
}

// 内容层加载完成后派发事件，页面据此重绘当前视图
contentParts.push(
  'window.__CONTENT_LOADED = true;\n' +
  'try { window.dispatchEvent(new Event("content-ready")); } catch (e) {}'
);

const jsDir = path.join(outDir, 'js');
fs.mkdirSync(jsDir, { recursive: true });
// 首屏包也不写进 dist：由 Deno 域名提供（见下方 coreUrl）
// 内容包不写进 dist：由 Deno 域名提供（见下方 contentUrl）

/* JS 全部放 Deno 域名：
   - Surge 的上传/CDN 经常把 300KB 的包传成半截，页面直接白掉（这是「照明数据没了」的真因）；
   - Deno 那边同时给 br/gzip 压缩，实测首屏包 90KB，一次请求就到。
   经典 script 允许跨域加载，所以 <script src> 直接引过去即可。
   需要换地址时设环境变量 CONTENT_BASE。 */
const assetBase = (process.env.CONTENT_BASE || 'https://challenge-cup-web.hangee-ai.deno.net').replace(/\/+$/, '');
const bundleUrl = assetBase + '/js/bundle.js?v=' + marker;

// 单文件加载：拆分 core/content 会让 app.js 顶层的依赖（如 stageTitlesOf）缺失，
// 所以这里一次性加载合并包；Deno 那边给的是 br 压缩 + 一天强缓存，第二次打开是秒开。
const inject = '<script src="' + bundleUrl + '"></script>\n';

const newHtml = html.slice(0, firstIdx) + inject + html.slice(lastEnd);
fs.writeFileSync(path.join(outDir, 'index.html'), newHtml, 'utf8');

console.log(
  '拆分完成：首屏包 ' + coreParts.length + ' 个脚本 / ' +
  (coreBytes / 1024).toFixed(0) + ' KB；内容包 ' + contentParts.length + ' 个脚本 / ' +
  (contentBytes / 1024 / 1024).toFixed(2) + ' MB（首屏后加载）'
);

// 清掉输出目录里已经不需要的零散 js，减小上传体积
if (!keepOriginals) {
  const keep = [];
  let removed = 0;
  (function walk(dir) {
    for (const name of fs.readdirSync(dir)) {
      const p = path.join(dir, name);
      const st = fs.statSync(p);
      if (st.isDirectory()) {
        walk(p);
        if (fs.readdirSync(p).length === 0) fs.rmdirSync(p);
      } else if (keep.indexOf(p) < 0) {
        fs.unlinkSync(p);
        removed++;
      }
    }
  })(jsDir);
  console.log('清理输出目录里多余的 js 文件：' + removed + ' 个');
}
