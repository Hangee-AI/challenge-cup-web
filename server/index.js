/* ==========================================================
   引路 · 后端入口
   运行：npm install && npm start  →  http://localhost:3000
   职责：静态托管前端（项目根目录）+ /api 接口
        （内容接口 / 账号 / 打卡 / 照明人数）
   ========================================================== */

const path = require('path');
const express = require('express');
const apiRouter = require('./routes/api');
const authRouter = require('./routes/auth');
const engageRouter = require('./routes/engage');
const chatRouter = require('./routes/chat');

const app = express();
const PORT = process.env.PORT || 3000;

app.disable('x-powered-by');
app.use(express.json({ limit: '64kb' }));

/* 跨域：允许静态站（如 guoguan.surge.sh）调用这个后端的 /api
   只用 Bearer 令牌，不依赖 cookie，所以不开放 credentials。 */
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Max-Age', '600');
  if (req.method === 'OPTIONS') return res.status(204).end();
  next();
});

/* API 不缓存 */
app.use('/api', (req, res, next) => { res.set('Cache-Control', 'no-store'); next(); });

app.use('/api/auth', authRouter);
app.use('/api', engageRouter);   // /api/checkin /api/stats /api/light
app.use('/api', chatRouter);     // /api/chat /api/chat/status（学习搭子）
app.use('/api', apiRouter);      // 内容接口 & 判题

app.get('/api/ping', (req, res) => res.json({ ok: true, app: 'yinlu', ts: Date.now() }));

/* 静态托管项目根（index.html / css / js / assets / docs） */
app.use(express.static(path.join(__dirname, '..'), { extensions: ['html'] }));

/* 兜底：不存在的页面回首页 */
app.use((req, res) => {
  if (req.path.indexOf('/api/') === 0) return res.status(404).json({ error: 'not found' });
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(PORT, () => {
  console.log('引路已启动: http://localhost:' + PORT);
  console.log('离线演示：直接双击 index.html 也可以（会自动退回本地模式）');
});
