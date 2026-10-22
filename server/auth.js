/* ==========================================================
   server/auth.js —— 密码哈希 / 会话令牌 / 简单限流
   密码使用 Node 内置 crypto.scrypt（不引第三方，云平台不用装编译依赖）
   存储格式：scrypt$<salt hex>$<hash hex>
   ========================================================== */

const crypto = require('crypto');

const SCRYPT_KEYLEN = 64;
const SESSION_TTL = 30 * 24 * 60 * 60 * 1000; // 30 天

function hashPassword(password) {
  const salt = crypto.randomBytes(16);
  const hash = crypto.scryptSync(String(password), salt, SCRYPT_KEYLEN);
  return 'scrypt$' + salt.toString('hex') + '$' + hash.toString('hex');
}

function verifyPassword(password, stored) {
  if (typeof stored !== 'string') return false;
  const parts = stored.split('$');
  if (parts.length !== 3 || parts[0] !== 'scrypt') return false;
  const salt = Buffer.from(parts[1], 'hex');
  const expected = Buffer.from(parts[2], 'hex');
  let actual;
  try {
    actual = crypto.scryptSync(String(password), salt, expected.length);
  } catch (e) {
    return false;
  }
  if (actual.length !== expected.length) return false;
  return crypto.timingSafeEqual(actual, expected);
}

function newToken() {
  return crypto.randomBytes(32).toString('hex');
}

/* 简单内存限流：每个 IP+动作 每分钟最多 N 次 */
const buckets = new Map();
function rateLimit(key, max, windowMs) {
  const now = Date.now();
  const win = windowMs || 60 * 1000;
  const limit = max || 15;
  const arr = (buckets.get(key) || []).filter(t => now - t < win);
  if (arr.length >= limit) { buckets.set(key, arr); return false; }
  arr.push(now);
  buckets.set(key, arr);
  return true;
}

/* 学号统一成「学校简称 + 数字」 */
function normalizeSid(prefix, rawSid) {
  const p = String(prefix || 'NCU').toUpperCase().replace(/[^A-Z]/g, '').slice(0, 8) || 'NCU';
  const digits = String(rawSid || '').toUpperCase()
    .replace(/^[A-Z][A-Z.\-\s]*/, '')
    .replace(/[^0-9]/g, '');
  return { prefix: p, snum: digits, sid: p + digits };
}

function validPassword(pwd) {
  return typeof pwd === 'string' && pwd.length >= 6 && pwd.length <= 32;
}

function publicUser(u) {
  if (!u) return null;
  return {
    id: u.id,
    sid: u.sid,
    snum: u.snum,
    prefix: u.prefix,
    nickname: u.nickname,
    avatar: u.avatar,
    createdAt: u.createdAt,
    checkins: Array.isArray(u.checkins) ? u.checkins.slice(-60) : []
  };
}

module.exports = {
  hashPassword, verifyPassword, newToken, rateLimit,
  normalizeSid, validPassword, publicUser,
  SESSION_TTL
};
