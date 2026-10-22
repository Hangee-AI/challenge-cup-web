/* ==========================================================
   server/routes/engage.js —— 打卡 / 照明人数
   POST /api/checkin        今日打卡（需登录）→ { fresh, todayCount, myStreak }
   GET  /api/stats          首页人数看板 → { todayCount, totalUsers, lights }
   POST /api/light          新访客点亮一盏灯 { visitorId } → { lights, isNew }
   ========================================================== */

const express = require('express');
const db = require('../db');
const authRoute = require('./auth');

const router = express.Router();

const currentUser = authRoute.currentUser;

function counts() {
  const st = db.stats();
  const today = db.todayKey();
  return {
    todayCount: st.checkinDays[today] || 0,
    totalUsers: db.load().users.length,
    lights: Math.max(st.lights || 0, (st.lightKeys || []).length)
  };
}

/* ---------------- 打卡 ---------------- */
router.post('/checkin', (req, res) => {
  const me = currentUser(req);
  if (!me) return res.status(401).json({ error: '打卡需要先登录（就在右侧个人中心）' });
  const r = db.markCheckin(me.user.id);
  if (!r) return res.status(500).json({ error: '打卡失败，稍后再试' });
  const c = counts();
  res.json({
    fresh: r.fresh,
    day: r.day,
    todayCount: c.todayCount,
    myStreak: r.myStreak,
    message: r.fresh ? '打卡成功，今天是第 ' + r.myStreak + ' 天' : '今天已经打过卡啦'
  });
});

/* ---------------- 首页看板 ---------------- */
router.get('/stats', (req, res) => {
  const me = currentUser(req);
  const c = counts();
  const out = { ok: true, todayCount: c.todayCount, totalUsers: c.totalUsers, lights: c.lights };
  if (me) {
    const today = db.todayKey();
    out.me = {
      sid: me.user.sid,
      nickname: me.user.nickname,
      avatar: me.user.avatar,
      checkedToday: (me.user.checkins || []).indexOf(today) !== -1,
      myStreak: db.streakOf(me.user, today)
    };
  }
  res.json(out);
});

/* ---------------- 点亮一盏灯 ---------------- */
router.post('/light', (req, res) => {
  const b = req.body || {};
  const key = String(b.visitorId || '').slice(0, 64) || ('ip:' + (req.socket.remoteAddress || 'unknown'));
  const st = db.stats();
  // 只保留最近 5 万个指纹，防止文件无限增长
  if (Array.isArray(st.lightKeys) && st.lightKeys.length > 50000) st.lightKeys = st.lightKeys.slice(-40000);
  const isNew = db.markLight(key);
  const c = counts();
  res.json({ lights: c.lights, isNew: isNew, todayCount: c.todayCount, totalUsers: c.totalUsers });
});

module.exports = router;
