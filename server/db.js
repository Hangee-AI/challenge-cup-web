/* ==========================================================
   server/db.js —— 极简 JSON 文件数据库
   说明：院赛作品不需要真正的数据库。所有数据存在 server/data/db.json，
   读写时做一次原子替换（先写 .tmp 再 rename），避免写到一半断电损坏。
   ========================================================== */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

const EMPTY = {
  users: [],            // { id, prefix, sid, snum, pwd, nickname, avatar, createdAt, checkins: [] }
  sessions: {},         // token -> { userId, expires }
  stats: {
    lights: 0,          // 累计照明人数
    lightKeys: [],      // 已点亮过的访客指纹（去重）
    checkinDays: {}     // 'YYYY-MM-DD' -> 当日打卡人数
  }
};

let db = null;

function ensureDir() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
}

function load() {
  if (db) return db;
  ensureDir();
  try {
    const raw = fs.readFileSync(DB_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    db = {
      users: Array.isArray(parsed.users) ? parsed.users : [],
      sessions: parsed.sessions && typeof parsed.sessions === 'object' ? parsed.sessions : {},
      stats: Object.assign({}, EMPTY.stats, parsed.stats || {})
    };
    if (!Array.isArray(db.stats.lightKeys)) db.stats.lightKeys = [];
    if (!db.stats.checkinDays || typeof db.stats.checkinDays !== 'object') db.stats.checkinDays = {};
  } catch (e) {
    db = JSON.parse(JSON.stringify(EMPTY));
  }
  return db;
}

let saving = false;
function save() {
  if (!db) return;
  if (saving) return;
  saving = true;
  try {
    ensureDir();
    const tmp = DB_FILE + '.tmp';
    fs.writeFileSync(tmp, JSON.stringify(db, null, 2), 'utf8');
    fs.renameSync(tmp, DB_FILE);
  } catch (e) {
    console.error('[db] 保存失败:', e.message);
  } finally {
    saving = false;
  }
}

/* ---------------- 用户 ---------------- */
function findUserBySid(sid) {
  return load().users.find(u => u.sid === sid) || null;
}

/**
 * 只按「学号数字部分」找账号（忽略学校简称）。
 * 用途：用户在下拉里选错了学校简称、或早期数据里 sid 存得不规范时，
 * 仍然能用「学号」找到唯一账号，不至于出现「注册说已存在、登录/重置又说找不到」。
 * 只有唯一匹配时才返回，避免不同学校同学号串号。
 */
function findUserBySnum(snum) {
  const key = String(snum || '').replace(/[^0-9]/g, '');
  if (!key) return null;
  const hits = load().users.filter(u => u.snum === key);
  return hits.length === 1 ? hits[0] : null;
}

function findUserById(id) {
  return load().users.find(u => u.id === id) || null;
}

function createUser(user) {
  const d = load();
  d.users.push(user);
  save();
  return user;
}

function updateUser(id, patch) {
  const u = findUserById(id);
  if (!u) return null;
  Object.assign(u, patch);
  save();
  return u;
}

/* ---------------- 会话 ---------------- */
function createSession(token, userId, ttlMs) {
  const d = load();
  d.sessions[token] = { userId: userId, expires: Date.now() + ttlMs };
  save();
}

function getSession(token) {
  const d = load();
  const s = d.sessions[token];
  if (!s) return null;
  if (s.expires < Date.now()) { delete d.sessions[token]; save(); return null; }
  return s;
}

function dropSession(token) {
  const d = load();
  delete d.sessions[token];
  save();
}

function cleanSessions() {
  const d = load();
  const now = Date.now();
  let changed = false;
  Object.keys(d.sessions).forEach(t => {
    if (!d.sessions[t] || d.sessions[t].expires < now) { delete d.sessions[t]; changed = true; }
  });
  if (changed) save();
}

/* ---------------- 统计 ---------------- */
function stats() { return load().stats; }

function markLight(key) {
  const d = load();
  const st = d.stats;
  if (key && st.lightKeys.indexOf(key) === -1) {
    st.lightKeys.push(key);
    st.lights = st.lightKeys.length;
    save();
    return true;
  }
  st.lights = Math.max(st.lights || 0, st.lightKeys.length);
  save();
  return false;
}

function todayKey(d) {
  const t = d || new Date();
  const p = n => (n < 10 ? '0' + n : String(n));
  return t.getFullYear() + '-' + p(t.getMonth() + 1) + '-' + p(t.getDate());
}

function markCheckin(userId) {
  const d = load();
  const st = d.stats;
  const u = findUserById(userId);
  if (!u) return null;
  if (!Array.isArray(u.checkins)) u.checkins = [];
  const day = todayKey();
  const fresh = u.checkins.indexOf(day) === -1;
  if (fresh) {
    u.checkins.push(day);
    st.checkinDays[day] = (st.checkinDays[day] || 0) + 1;
  }
  st.checkinDays[day] = Math.max(st.checkinDays[day] || 0, 1);
  save();
  return { fresh: fresh, day: day, todayCount: st.checkinDays[day] || 0, myStreak: streakOf(u, day) };
}

function streakOf(user, day) {
  const set = new Set(user.checkins || []);
  if (!set.size) return 0;
  let n = 0;
  const cur = new Date(day + 'T00:00:00');
  // 今天没打卡就从昨天开始数
  if (!set.has(day)) cur.setDate(cur.getDate() - 1);
  while (true) {
    const k = todayKey(cur);
    if (!set.has(k)) break;
    n++;
    cur.setDate(cur.getDate() - 1);
    if (n > 3650) break;
  }
  return n;
}

module.exports = {
  load, save, findUserBySid, findUserBySnum, findUserById, createUser, updateUser,
  createSession, getSession, dropSession, cleanSessions,
  stats, markLight, markCheckin, todayKey, streakOf
};
