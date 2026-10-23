/* ============================================================
 * tools/cf-build.js · Cloudflare Workers 静态资源构建
 * ------------------------------------------------------------
 * 作用：把要发布的静态文件收拢到 dist-cf/ 目录，供 wrangler 作为
 *       assets 直接托管（HTML + CSS + 一个合并后的 JS 包）。
 *
 * 在 Cloudflare 面板里：
 *   构建命令 = node tools/cf-build.js
 *   部署命令 = npx wrangler deploy
 * ============================================================ */
'use strict';

const fs = require('fs');
const path = require('path');

const root = process.cwd();
const out = path.join(root, 'dist-cf');
const marker = process.env.CF_PAGES_COMMIT_SHA || process.env.GITHUB_SHA || String(Date.now());

function rmrf(p) {
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
}

rmrf(out);
fs.mkdirSync(path.join(out, 'js'), { recursive: true });
fs.mkdirSync(path.join(out, 'css'), { recursive: true });

// 1. 收集 index.html 里的 <script src>，按顺序合并成一个包
const htmlPath = path.join(root, 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');
const tagRe = /<script\s+src="([^"]+)"\s*><\/script>\s*/g;
const srcs = [];
let m;
let firstIdx = -1;
let lastEnd = -1;
while ((m = tagRe.exec(html)) !== null) {
  if (firstIdx < 0) firstIdx = m.index;
  lastEnd = tagRe.lastIndex;
  srcs.push(m[1]);
}

const parts = [];
for (const raw of srcs) {
  const rel = raw.replace(/\?.*$/, '').replace(/^\.?\//, '');
  const abs = path.join(root, rel);
  if (!fs.existsSync(abs)) {
    console.error('缺少文件：' + rel);
    process.exit(1);
  }
  parts.push('/* ==== ' + rel + ' ==== */\n' + fs.readFileSync(abs, 'utf8'));
}
fs.writeFileSync(path.join(out, 'js', 'bundle.js'), parts.join('\n;\n'), 'utf8');

// 2. 写回 index.html（把一长串 script 换成一个）
const inject = '<script src="js/bundle.js?v=' + marker + '"></script>\n';
const newHtml = html.slice(0, firstIdx) + inject + html.slice(lastEnd);
fs.writeFileSync(path.join(out, 'index.html'), newHtml, 'utf8');

// 3. 样式
fs.copyFileSync(path.join(root, 'css', 'style.css'), path.join(out, 'css', 'style.css'));

// 4. 静态资源（assets/：小引的图片、图标等）
function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const name of fs.readdirSync(src)) {
    const s = path.join(src, name);
    const d = path.join(dest, name);
    const st = fs.statSync(s);
    if (st.isDirectory()) copyDirSync(s, d);
    else fs.copyFileSync(s, d);
  }
}
copyDirSync(path.join(root, 'assets'), path.join(out, 'assets'));

const size = fs.statSync(path.join(out, 'js', 'bundle.js')).size;
console.log(
  'Cloudflare 构建完成：' + srcs.length + ' 个脚本 → dist-cf/js/bundle.js（' +
  (size / 1024 / 1024).toFixed(2) + ' MB）'
);
