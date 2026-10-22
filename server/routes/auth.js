/* ==========================================================
   server/routes/auth.js —— 账号相关接口
   POST /api/auth/register   注册 { prefix, sid, password, nickname, avatar }
   POST /api/auth/login      登录 { prefix, sid, password }
   POST /api/auth/reset      忘记密码：{ prefix, sid, password } 直接用简称+学号重置
   POST /api/auth/change     修改密码（需登录）：{ oldPassword, newPassword }
   POST /api/auth/nickname   修改昵称（需登录）：{ nickname }
   GET  /api/auth/me         当前登录用户
   POST /api/auth/logout     退出
   ========================================================== */

const express = require('express');
const crypto = require('crypto');
const db = require('../db');
const auth = require('../auth');

const router = express.Router();

/* 从 Authorization: Bearer xxx 或 cookie 里取令牌 */
function tokenOf(req) {
  const h = req.headers.authorization || '';
  if (h.indexOf('Bearer ') === 0) return h.slice(7).trim();
  const c = req.headers.cookie || '';
  const m = c.match(/(?:^|;\s*)yl_token=([^;]+)/);
  return m ? decodeURIComponent(m[1]) : '';
}

function currentUser(req) {
  const token = tokenOf(req);
  if (!token) return null;
  const s = db.getSession(token);
  if (!s) return null;
  const u = db.findUserById(s.userId);
  return u ? { user: u, token: token } : null;
}

function setTokenCookie(res, token) {
  res.setHeader('Set-Cookie',
    'yl_token=' + encodeURIComponent(token) + '; Path=/; Max-Age=' + (30 * 24 * 3600) +
    '; SameSite=Lax' + (process.env.NODE_ENV === 'production' ? '; Secure' : ''));
}

function issue(res, user) {
  const token = auth.newToken();
  db.createSession(token, user.id, auth.SESSION_TTL);
  setTokenCookie(res, token);
  return token;
}

function ipOf(req) {
  return (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || req.socket.remoteAddress || 'unknown';
}

/* ---------------- 注册 ---------------- */
router.post('/register', (req, res) => {
  if (!auth.rateLimit('reg:' + ipOf(req), 10)) return res.status(429).json({ error: '操作太频繁，稍后再试' });
  const b = req.body || {};
  const n = auth.normalizeSid(b.prefix, b.sid);
  if (!/^\d{6,20}$/.test(n.snum)) return res.status(400).json({ error: '学号应该是 6–20 位数字' });
  if (!auth.validPassword(b.password)) return res.status(400).json({ error: '密码请设置 6–32 位' });
  if (db.findUserBySid(n.sid) || db.findUserBySnum(n.snum)) {
    return res.status(409).json({ error: '这个学号已经注册过了，点「忘记密码」输入学校简称+学号就能直接重置并登录' });
  }

  const user = {
    id: 'u_' + crypto.randomBytes(8).toString('hex'),
    prefix: n.prefix,
    snum: n.snum,
    sid: n.sid,
    pwd: auth.hashPassword(b.password),
    nickname: String(b.nickname || '').slice(0, 16) || ('同学' + n.snum.slice(-4)),
    avatar: String(b.avatar || '🐱').slice(0, 8),
    createdAt: new Date().toISOString(),
    checkins: []
  };
  db.createUser(user);
  // 注册即点亮一盏灯
  db.markLight('user:' + user.id);
  const token = issue(res, user);
  res.status(201).json({ token: token, user: auth.publicUser(user) });
});

/* ---------------- 登录 ---------------- */
router.post('/login', (req, res) => {
  if (!auth.rateLimit('login:' + ipOf(req), 20)) return res.status(429).json({ error: '尝试次数过多，稍后再试' });
  const b = req.body || {};
  const n = auth.normalizeSid(b.prefix, b.sid);
  let user = db.findUserBySid(n.sid);
  // 兜底：学校简称选错时，仍按学号找到唯一账号
  if (!user) user = db.findUserBySnum(n.snum);
  if (!user) return res.status(401).json({ error: '账号不存在，检查一下学校简称和学号' });
  if (!auth.verifyPassword(b.password, user.pwd)) return res.status(401).json({ error: '密码不对，可以点“忘记密码”用学号重置' });
  const token = issue(res, user);
  res.json({ token: token, user: auth.publicUser(user) });
});

/* ---------------- 忘记密码：简称 + 学号 直接重置 ---------------- */
router.post('/reset', (req, res) => {
  if (!auth.rateLimit('reset:' + ipOf(req), 8)) return res.status(429).json({ error: '操作太频繁，稍后再试' });
  const b = req.body || {};
  const n = auth.normalizeSid(b.prefix, b.sid);
  if (!/^\d{6,20}$/.test(n.snum)) return res.status(400).json({ error: '学号应该是 6–20 位数字' });
  if (!auth.validPassword(b.password)) return res.status(400).json({ error: '新密码请设置 6–32 位' });
  let user = db.findUserBySid(n.sid);
  // 兜底：学校简称选错时，仍按学号找到唯一账号
  if (!user) user = db.findUserBySnum(n.snum);
  if (!user) return res.status(404).json({ error: '没有找到这个学号的账号，先注册吧' });
  db.updateUser(user.id, { pwd: auth.hashPassword(b.password) });
  const token = issue(res, user);
  res.json({ token: token, user: auth.publicUser(user), message: '密码已重置，已帮你登录' });
});

/* ---------------- 修改密码（需要登录 + 原密码） ---------------- */
router.post('/change', (req, res) => {
  const me = currentUser(req);
  if (!me) return res.status(401).json({ error: '请先登录' });
  if (!auth.rateLimit('chg:' + ipOf(req), 10)) return res.status(429).json({ error: '操作太频繁，稍后再试' });
  const b = req.body || {};
  if (!auth.verifyPassword(b.oldPassword, me.user.pwd)) return res.status(400).json({ error: '原密码不对' });
  if (!auth.validPassword(b.newPassword)) return res.status(400).json({ error: '新密码请设置 6–32 位' });
  if (b.oldPassword === b.newPassword) return res.status(400).json({ error: '新密码和原密码一样' });
  db.updateUser(me.user.id, { pwd: auth.hashPassword(b.newPassword) });
  res.json({ ok: true, message: '密码已更新' });
});

/* ---------------- 修改昵称（需要登录） ---------------- */
router.post('/nickname', (req, res) => {
  const me = currentUser(req);
  if (!me) return res.status(401).json({ error: '请先登录' });
  if (!auth.rateLimit('nick:' + ipOf(req), 10)) return res.status(429).json({ error: '操作太频繁，稍后再试' });
  const b = req.body || {};
  const nickname = String(b.nickname || '').trim().replace(/\s+/g, ' ').slice(0, 16);
  if (!nickname) return res.status(400).json({ error: '昵称不能为空' });
  if (nickname === me.user.nickname) return res.status(400).json({ error: '昵称没有变化' });
  const user = db.updateUser(me.user.id, { nickname: nickname });
  res.json({ ok: true, message: '昵称已更新', user: auth.publicUser(user) });
});

/* ---------------- 当前用户 ---------------- */
router.get('/me', (req, res) => {
  const me = currentUser(req);
  if (!me) return res.status(401).json({ error: '未登录' });
  res.json({ user: auth.publicUser(me.user) });
});

router.post('/logout', (req, res) => {
  const token = tokenOf(req);
  if (token) db.dropSession(token);
  res.setHeader('Set-Cookie', 'yl_token=; Path=/; Max-Age=0; SameSite=Lax');
  res.json({ ok: true });
});

module.exports = router;
module.exports.currentUser = currentUser;
module.exports.tokenOf = tokenOf;
