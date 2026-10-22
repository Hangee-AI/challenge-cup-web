/* ==========================================================
   tools/bundle.js · 把 index.html 里几十个 <script src> 合并成一个
   ----------------------------------------------------------
   为什么需要：
   - 页面依赖 90 多个经典 <script>，每个文件都要单独发一次请求。
     Surge 的 CDN 在国内访问每个请求要 2–9 秒，九十几个就是几分钟，
     浏览器标签会一直转圈。
   - 合并成一个文件后只发一次请求（CDN 会再 gzip），首屏从分钟级降到几秒。

   用法（CI 里用）：
     node tools/bundle.js dist 20261022a
     第 2 个参数 = 输出目录，第 3 个参数 = 版本标记（拼在 bundle.js?v= 后面）

   注意：
   - 只处理「带 src 的经典 script」，且要求它们连成一段（本项目的实际情况）。
   - 顺序 = index.html 里的顺序，用一个 `;` 隔开，作用域与逐个加载一致。
   - 合并完会把输出目录里的零散 js 文件删掉，只留 bundle.js（不想删就不传 --keep）。
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
// 只处理“所有 script 连成一段”的情况：这一段里除 script 标签外，只允许 HTML 注释
const onlyScripts = between.replace(tagRe, '').replace(/<!--[\s\S]*?-->/g, '').trim();
if (onlyScripts.length > 0) {
  console.warn('提示：script 标签之间还有其它内容（' + onlyScripts.length + ' 字节），已一并移除，请确认没删掉有用标记');
}

const parts = [];
let totalBytes = 0;

for (const raw of srcs) {
  const rel = raw.replace(/\?.*$/, '').replace(/^\.?\//, '');
  const abs = path.join(root, rel);
  if (!fs.existsSync(abs)) {
    console.error('缺少文件：' + rel);
    process.exit(1);
  }
  const code = fs.readFileSync(abs, 'utf8');
  totalBytes += Buffer.byteLength(code, 'utf8');
  parts.push('/* ==== ' + rel + ' ==== */\n' + code);
}

const bundle = parts.join('\n;\n');
fs.mkdirSync(path.join(outDir, 'js'), { recursive: true });
fs.writeFileSync(path.join(outDir, 'js', 'bundle.js'), bundle, 'utf8');

const newTag = '<script src="js/bundle.js?v=' + marker + '"></script>\n';
const newHtml = html.slice(0, firstIdx) + newTag + html.slice(lastEnd);
fs.writeFileSync(path.join(outDir, 'index.html'), newHtml, 'utf8');

console.log(
  '合并完成：' + srcs.length + ' 个脚本 → js/bundle.js（' +
  (totalBytes / 1024 / 1024).toFixed(2) + ' MB 原始体积）'
);

// 清掉输出目录里已经不需要的零散 js，减小上传体积
if (!keepOriginals) {
  const jsDir = path.join(outDir, 'js');
  let removed = 0;
  (function walk(dir) {
    for (const name of fs.readdirSync(dir)) {
      const p = path.join(dir, name);
      const st = fs.statSync(p);
      if (st.isDirectory()) {
        walk(p);
        if (fs.readdirSync(p).length === 0) fs.rmdirSync(p);
      } else if (p !== path.join(jsDir, 'bundle.js')) {
        fs.unlinkSync(p);
        removed++;
      }
    }
  })(jsDir);
  console.log('清理输出目录里多余的 js 文件：' + removed + ' 个');
}
