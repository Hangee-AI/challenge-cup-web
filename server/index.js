/* ==========================================================
   闯关学编程 · 后端入口
   运行：npm install && npm start  →  http://localhost:3000
   职责：静态托管前端（项目根目录）+ 挂载 /api 内容接口
   ========================================================== */

const path = require('path');
const express = require('express');
const apiRouter = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', apiRouter);

/* 静态托管项目根（index.html / css / js / assets / docs） */
app.use(express.static(path.join(__dirname, '..')));

app.listen(PORT, () => {
  console.log('闯关学编程已启动: http://localhost:' + PORT);
  console.log('离线演示：直接双击 index.html 亦可（仅 C 语言关卡）');
});
