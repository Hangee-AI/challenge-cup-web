/* ============================================================
 * 引路 · 云端账号 / 打卡 / 照明（js/cloud.js）
 * ------------------------------------------------------------
 * 设计原则：
 *   1) 后端可用 → 用服务器账号（密码登录、打卡、照明统计）
 *   2) 后端不可用（file:// 双击打开、静态托管、断网）→ 自动退回本地模式
 *      页面不会报错，只是隐藏"云端"相关按钮
 *   3) 所有网络请求都有超时，失败一律降级，不影响离线演示
 * ============================================================ */
(function () {
  'use strict';

  var $ = function (id) { return document.getElementById(id); };
  var online = false;
  var booted = false;
  var pingDone = false;

  var K_TOKEN = 'yl_token';
  var K_USER = 'yl_user';
  var K_VISITOR = 'yl_visitor';
  var K_LIT = 'yl_lit';
  var K_API = 'yl_api_base';

  var token = '';
  var me = null;
  var authMode = 'register'; // register | login | forgot

  /* ---------------- 基础工具 ---------------- */

  function apiBase() {
    var host = location.hostname || '';
    var isLocal = location.protocol === 'file:' || host === 'localhost' || host === '127.0.0.1' || host === '';
    // 本机开发：永远走同源（localhost:3210 那段就是完整后端），不去调公网地址
    if (isLocal) {
      try {
        var localOverride = localStorage.getItem(K_API);
        if (localOverride) return localOverride.replace(/\/$/, '');
      } catch (e) { /* 忽略 */ }
      return location.protocol === 'file:' ? '' : '';
    }
    try {
      if (window.YL_API_BASE) return String(window.YL_API_BASE).replace(/\/$/, '');
    } catch (e) { /* 忽略 */ }
    try {
      var forced = localStorage.getItem(K_API);
      if (forced) return forced.replace(/\/$/, '');
    } catch (e) { /* 忽略 */ }
    return ''; // 同源部署
  }

  function request(path, opts) {
    opts = opts || {};
    var url = apiBase() + path;
    var headers = { 'Content-Type': 'application/json' };
    var t = opts.token === undefined ? token : opts.token;
    if (t) headers.Authorization = 'Bearer ' + t;

    var ctrl = (typeof AbortController !== 'undefined') ? new AbortController() : null;
    var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, opts.timeout || 6000) : null;

    return fetch(url, {
      method: opts.method || 'GET',
      headers: headers,
      body: opts.body ? JSON.stringify(opts.body) : undefined,
      cache: 'no-store',
      credentials: 'same-origin',
      signal: ctrl ? ctrl.signal : undefined
    }).then(function (res) {
      if (timer) clearTimeout(timer);
      return res.json().catch(function () { return {}; }).then(function (data) {
        if (!res.ok) {
          var err = new Error(data.message || data.error || ('请求失败（' + res.status + '）'));
          err.status = res.status;
          err.payload = data;
          throw err;
        }
        return data;
      });
    }).catch(function (err) {
      if (timer) clearTimeout(timer);
      if (err && err.name === 'AbortError') {
        var e2 = new Error('连接服务器超时');
        e2.timeout = true;
        throw e2;
      }
      throw err;
    });
  }

  function readStorage(key) {
    try { return localStorage.getItem(key) || ''; } catch (e) { return ''; }
  }
  function writeStorage(key, val) {
    try { localStorage.setItem(key, val); } catch (e) { /* 忽略 */ }
  }

  function toast(msg) {
    if (window.__YL && window.__YL.toast) window.__YL.toast(msg);
  }

  function state() {
    return window.__YL ? window.__YL.state : null;
  }

  function visitorId() {
    var v = readStorage(K_VISITOR);
    if (!v) {
      v = 'v_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
      writeStorage(K_VISITOR, v);
    }
    return v;
  }

  /* ---------------- 在线探测 ---------------- */

  function probe() {
    if (location.protocol === 'file:') return Promise.resolve(false);
    return request('/api/ping', { token: null, timeout: 6000 })
      .then(function (r) { return !!(r && r.ok); })
      .catch(function () { return false; });
  }

  /* ---------------- 账号状态 ---------------- */

  function saveSession(tok, user) {
    token = tok || '';
    me = user || null;
    if (token) writeStorage(K_TOKEN, token); else try { localStorage.removeItem(K_TOKEN); } catch (e) {}
    if (me) writeStorage(K_USER, JSON.stringify(me)); else try { localStorage.removeItem(K_USER); } catch (e) {}
  }

  function loadSessionCache() {
    token = readStorage(K_TOKEN);
    var raw = readStorage(K_USER);
    if (raw) {
      try { me = JSON.parse(raw); } catch (e) { me = null; }
    }
  }

  function cloudProfile(user) {
    return {
      mode: 'member',
      cloud: true,
      prefix: user.prefix,
      sid: user.sid,
      snum: user.snum,
      nickname: user.nickname,
      avatar: user.avatar,
      since: user.createdAt,
      checkins: user.checkins || []
    };
  }

  // 把服务器账号镜像进本地 state，让原来的个人中心 UI 直接可用
  function syncLocalProfile(user) {
    var st = state();
    if (!st) return;
    if (user) {
      st.profile = cloudProfile(user);
      if (window.__YL) window.__YL.save();
      if (window.__YL) { window.__YL.renderProfile(); window.__YL.updateNav(); }
      var mode = $('pfMode');
      if (mode) mode.textContent = '云端账号';
      var nh = $('memberNickHint');
      if (nh) nh.textContent = '当前昵称：' + (user.nickname || '同学') + ' · 最多 16 个字';
    }
  }

  function clearLocalProfile() {
    var st = state();
    if (st) {
      st.profile = { mode: 'guest', prefix: (st.profile && st.profile.prefix) || 'NCU' };
      if (window.__YL) window.__YL.save();
      if (window.__YL) { window.__YL.renderProfile(); window.__YL.updateNav(); }
    }
  }

  /* ---------------- 打卡 / 照明 ---------------- */

  function paintStats(data) {
    if (!data) return;
    if (typeof data.todayCount === 'number' && $('pToday')) $('pToday').textContent = data.todayCount;
    if (typeof data.lights === 'number' && $('pLights')) {
      $('pLights').textContent = data.lights;
      var bar = $('pLightsBar');
      if (bar) bar.style.width = Math.min(100, Math.max(8, (data.lights % 100))) + '%';
    }

    var st = state();
    var streak = 0;
    var myStreak = data.me ? (typeof data.me.streak === 'number' ? data.me.streak : data.me.myStreak) : null;
    if (typeof myStreak === 'number') streak = myStreak;
    else if (st && st.profile && st.profile.cloud && st.profile.streak) streak = st.profile.streak;

    if ($('pStreakTop')) $('pStreakTop').textContent = streak || 0;
    if ($('pStreakHint')) {
      $('pStreakHint').textContent = hasSession() ? '已连续打卡 ' + (streak || 0) + ' 天' : '登录后开始记录';
    }
    if ($('pCheckinHint')) {
      $('pCheckinHint').textContent = hasSession()
        ? (data.me && data.me.checkedToday ? '今天已打卡，连续 ' + (streak || 0) + ' 天' : '今天还没打卡，点一下记录今天')
        : '登录后每天点一下，记录你的坚持';
    }
    if (data.me && $('memberCheckinHint')) {
      $('memberCheckinHint').textContent = data.me.checkedToday
        ? '今天已打卡，连续 ' + (streak || 0) + ' 天'
        : '今天还没打卡';
    }
    var st2 = state();
    if (st2 && st2.profile && data.me) {
      st2.profile.streak = streak || 0;
      st2.profile.checkedToday = !!data.me.checkedToday;
    }
  }

  function loadStats() {
    if (!online) return Promise.resolve();
    return request('/api/stats', { timeout: 5000 })
      .then(function (data) { paintStats(data); })
      .catch(function () { /* 静默降级 */ });
  }

  function lightMe() {
    if (!online) return Promise.resolve();
    return request('/api/light', { method: 'POST', body: { visitorId: visitorId() }, timeout: 5000 })
      .then(function (data) {
        paintStats({ todayCount: data.todayCount, lights: data.lights, me: null });
        if (!readStorage(K_LIT)) {
          writeStorage(K_LIT, '1');
          playLightAnim(data.lights, data.isNew);
        }
      })
      .catch(function () { /* 静默降级 */ });
  }

  function playLightAnim(total, isNew) {
    var box = $('lightOverlay');
    if (!box) return;
    var sub = $('lightSub');
    var title = $('lightTitle');
    if (title) title.textContent = isNew ? '已为你点亮一盏灯' : '欢迎回来';
    if (sub) sub.innerHTML = '你是第 <b>' + (total || '—') + '</b> 个被照亮的人';
    box.hidden = false;
    box.classList.add('is-on');
    if (window.__YL_LIGHT_HOLD) return; // 仅调试/截图时保持不消失
    if (!box.__ylClickBound) {
      box.__ylClickBound = true;
      box.addEventListener('click', function () { hideLight(); });
    }
    clearTimeout(box.__ylTimer);
    box.__ylTimer = setTimeout(hideLight, 2200);
    function hideLight() {
      clearTimeout(box.__ylTimer);
      box.classList.remove('is-on');
      box.__ylHideTimer = setTimeout(function () { box.hidden = true; }, 700);
    }
  }

  function checkin() {
    if (!online) { toast('当前是离线模式，打卡需要连接服务器'); return; }
    if (!hasSession()) {
      toast('先登录才能打卡');
      if (window.__YL) window.__YL.show('profile');
      setAuthMode('login');
      return;
    }
    var btn = $('pulseCheckinBtn');
    if (btn) btn.disabled = true;
    request('/api/checkin', { method: 'POST', body: {}, timeout: 6000 })
      .then(function (data) {
        toast(data.message || '打卡成功');
        paintStats({ todayCount: data.todayCount, lights: null, me: { streak: data.myStreak, checkedToday: true } });
        if (data.fresh) {
          if ($('pToday')) $('pToday').textContent = data.todayCount;
          document.body.classList.add('pulse-flash');
          setTimeout(function () { document.body.classList.remove('pulse-flash'); }, 900);
        }
        loadStats();
      })
      .catch(function (err) { toast(err.message || '打卡失败'); })
      .then(function () { if (btn) btn.disabled = false; });
  }

  /* ---------------- 注册 / 登录 / 重置密码 ---------------- */

  function setAuthMode(mode) {
    authMode = mode;
    var tabs = document.querySelectorAll('.auth-tab');
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.toggle('is-on', tabs[i].getAttribute('data-auth') === mode);
    }

    var isReg = mode === 'register';
    var isLogin = mode === 'login';
    var isForgot = mode === 'forgot';

    toggleEl('nickField', isReg);
    toggleEl('avatarField', isReg);
    toggleEl('pwdField', true); // 三种模式都要填密码：注册=设置密码，登录=原密码，忘记=新密码
    toggleEl('pwd2Field', !isLogin); // 只有登录不需要「再输一次」

    if ($('pwdLabel')) {
      $('pwdLabel').textContent = isReg ? '设置密码（6–32 位）'
        : (isForgot ? '新密码（6–32 位）' : '密码');
    }
    if ($('pwd2Label')) $('pwd2Label').textContent = isForgot ? '再输一次新密码' : '再输一次密码';
    if ($('pwdInput')) $('pwdInput').setAttribute('placeholder', isReg ? '登录、改密码、找回密码都要用它' : '');
    if ($('registerBtn')) {
      $('registerBtn').textContent = isReg ? '注册并登录' : (isLogin ? '登录' : '重置密码并登录');
    }
    if ($('authHint')) {
      $('authHint').textContent = isReg
        ? '注册后账号存在服务器上，换设备登录也能找回学习记录。'
        : (isLogin ? '用「学校简称 + 学号 + 密码」登录。' : '忘记密码？只要输入注册时的学校简称和学号，就能直接设置新密码，不需要邮箱和手机。');
    }
    if ($('cloudHint')) $('cloudHint').hidden = true; // 说明文字统一由 #authHint 承担，避免重复
  }

  function toggleEl(id, show) {
    var el = $(id);
    if (!el) return;
    el.hidden = !show;
  }

  function fieldVal(id) {
    var el = $(id);
    return el ? String(el.value || '').trim() : '';
  }

  function submitAuth() {
    if (!online) { toast('当前离线，只能用本地模式'); return; }
    if (!pingDone) { toast('还在连接服务器，稍等一下'); return; }

    var prefix = ($('sidPrefix') && $('sidPrefix').value) || 'NCU';
    var sid = fieldVal('sidInput').toUpperCase();
    var pwd = $('pwdInput') ? $('pwdInput').value : '';
    var pwd2 = $('pwdInput2') ? $('pwdInput2').value : '';
    var nick = fieldVal('nickInput');
    var avatar = (window.__YL && window.__YL.state && window.__YL.state.pendingAvatar) || '';

    if (sid.indexOf(prefix) === 0) sid = sid.slice(prefix.length);
    sid = sid.replace(/[^0-9A-Za-z]/g, '');
    if (!/^[0-9A-Za-z]{3,20}$/.test(sid)) { toast('学号看着不太对，检查一下'); return; }

    if (authMode !== 'login') {
      if (pwd.length < 6 || pwd.length > 32) { toast('密码要 6–32 位'); return; }
      if (pwd !== pwd2) { toast('两次输入的密码不一样'); return; }
    } else if (!pwd) { toast('请输入密码'); return; }

    var btn = $('registerBtn');
    if (btn) btn.disabled = true;

    var path = '/api/auth/' + authMode;
    var body = { prefix: prefix, sid: sid, password: pwd };
    if (authMode === 'register') {
      body.nickname = nick;
      body.avatar = avatar;
    }

    request(path, { method: 'POST', body: body, token: null, timeout: 8000 })
      .then(function (data) {
        saveSession(data.token, data.user);
        syncLocalProfile(data.user);
        if ($('pwdInput')) $('pwdInput').value = '';
        if ($('pwdInput2')) $('pwdInput2').value = '';
        toast(authMode === 'register' ? '注册成功，已登录' : (authMode === 'login' ? '登录成功' : '密码已重置，已登录'));
        setAuthMode('register');
        loadStats();
        lightMe();
      })
      .catch(function (err) {
        var msg = err.message || '操作失败';
        if (err.status === 409) {
          msg = '这个学号注册过了：记得密码就登录，忘了就点「忘记密码」，只要学校简称+学号';
          setAuthMode('login');
          if ($('pwdInput')) $('pwdInput').focus();
        }
        if (err.status === 401) msg = '密码不对，忘了的话点「忘记密码」用学校简称+学号重置';
        if (err.status === 404) msg = '没找到这个学号，先注册一下';
        toast(msg);
      })
      .then(function () { if (btn) btn.disabled = false; });
  }

  function logout() {
    var done = function () {
      saveSession('', null);
      me = null;
      clearLocalProfile();
      toast('已退出云端账号');
      loadStats();
    };
    if (!online || !hasSession()) { done(); return; }
    request('/api/auth/logout', { method: 'POST', body: {}, timeout: 5000 })
      .then(done).catch(done);
  }

  function hasSession() { return !!(token && token.length > 10); }

  function fetchMe() {
    if (!online || !hasSession()) return Promise.resolve(null);
    return request('/api/auth/me', { timeout: 5000 })
      .then(function (data) {
        me = data.user;
        writeStorage(K_USER, JSON.stringify(me));
        syncLocalProfile(me);
        return me;
      })
      .catch(function (err) {
        if (err.status === 401) { saveSession('', null); me = null; clearLocalProfile(); }
        return null;
      });
  }

  /* ---------------- 修改密码 ---------------- */

  function changePassword() {
    var oldP = $('oldPwdInput') ? $('oldPwdInput').value : '';
    var np = $('newPwdInput') ? $('newPwdInput').value : '';
    var np2 = $('newPwdInput2') ? $('newPwdInput2').value : '';
    if (!hasSession()) { toast('先登录'); return; }
    if (!oldP) { toast('请输入原密码'); return; }
    if (np.length < 6 || np.length > 32) { toast('新密码要 6–32 位'); return; }
    if (np !== np2) { toast('两次输入的新密码不一样'); return; }

    request('/api/auth/change', { method: 'POST', body: { oldPassword: oldP, newPassword: np }, timeout: 8000 })
      .then(function () {
        toast('密码已更新');
        if ($('oldPwdInput')) $('oldPwdInput').value = '';
        if ($('newPwdInput')) $('newPwdInput').value = '';
        if ($('newPwdInput2')) $('newPwdInput2').value = '';
        var f = $('pwdForm'); if (f) f.hidden = true;
      })
      .catch(function (err) { toast(err.message || '修改失败'); });
  }

  /* ---------------- 修改昵称 ---------------- */

  function changeNickname() {
    if (!hasSession()) { toast('先登录'); return; }
    var input = $('nickNewInput');
    var nick = input ? String(input.value || '').replace(/\s+/g, ' ').trim() : '';
    if (!nick) { toast('昵称不能为空'); if (input) input.focus(); return; }
    if (nick.length > 16) { toast('昵称最多 16 个字'); return; }

    request('/api/auth/nickname', { method: 'POST', body: { nickname: nick }, timeout: 8000 })
      .then(function (data) {
        me = data.user || me;
        writeStorage(K_USER, JSON.stringify(me));
        syncLocalProfile(me);
        toast('昵称已更新为「' + (me && me.nickname) + '」');
        if (input) input.value = '';
        var f = $('nickForm'); if (f) f.hidden = true;
      })
      .catch(function (err) { toast(err.message || '修改失败'); });
  }

  /* ---------------- UI 绑定 ---------------- */

  function bindUI() {
    var tabs = document.querySelectorAll('.auth-tab');
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', function () {
        setAuthMode(this.getAttribute('data-auth'));
      });
    }

    var btn = $('pulseCheckinBtn');
    if (btn) btn.addEventListener('click', checkin);
    var mb = $('memberCheckinBtn');
    if (mb) mb.addEventListener('click', checkin);
    var pb = $('pulseProfileBtn');
    if (pb) pb.addEventListener('click', function () {
      if (window.__YL) window.__YL.show('profile');
    });

    var tp = $('togglePwdBtn');
    if (tp) tp.addEventListener('click', function () {
      var f = $('pwdForm');
      if (f) f.hidden = !f.hidden;
    });
    var sp = $('savePwdBtn');
    if (sp) sp.addEventListener('click', changePassword);

    var tn = $('toggleNickBtn');
    if (tn) tn.addEventListener('click', function () {
      var f = $('nickForm');
      if (f) f.hidden = !f.hidden;
      var input = $('nickNewInput');
      if (input && !f.hidden) input.focus();
    });
    var sn = $('saveNickBtn');
    if (sn) sn.addEventListener('click', changeNickname);
    var ni = $('nickNewInput');
    if (ni) ni.addEventListener('keydown', function (e) { if (e.key === 'Enter') changeNickname(); });
  }

  function revealCloudUI() {
    var els = document.querySelectorAll('.cloud-only');
    for (var i = 0; i < els.length; i++) els[i].hidden = false;
    if ($('authHint')) $('authHint').hidden = true;
    var intro = $('profileIntro');
    if (intro) {
      intro.innerHTML = '账号保存在<b>服务器</b>上，换设备、换浏览器都能登录。'
        + '忘记密码只要输入「学校简称 + 学号」就能重设，不需要邮箱和手机。';
    }
    setAuthMode('register');
  }

  /* ---------------- 启动 ---------------- */

  function boot() {
    if (booted) return;
    booted = true;
    loadSessionCache();
    bindUI();
    tryOnline(0);
  }

  /* 首次探测可能被隧道/网络抖动打断，失败后再试两次 */
  function tryOnline(attempt) {
    probe().then(function (ok) {
      online = ok;
      if (!ok && attempt < 2) {
        setTimeout(function () { tryOnline(attempt + 1); }, 1200 + attempt * 800);
        return;
      }
      pingDone = true;
      if (!ok) {
        // 可能是 /api/ping 慢（跨国链路），再用公开接口确认一次；
        // 只有确实拿不到数据时才把看板藏起来，避免误导
        request('/api/stats', { token: null, timeout: 8000 })
          .then(function (data) {
            online = true;
            revealCloudUI();
            paintStats(data);
            fetchMe().then(function () { lightMe(); });
          })
          .catch(function () {
            var pulse = $('pulse');
            if (pulse) pulse.hidden = true;
          });
        return;
      }

      revealCloudUI();
      fetchMe().then(function () {
        loadStats();
        lightMe();
      });
    });
  }

  window.Cloud = {
    isOnline: function () { return online; },
    hasSession: hasSession,
    apiBase: apiBase,
    submitAuth: submitAuth,
    logout: logout,
    checkin: checkin,
    loadStats: loadStats,
    user: function () { return me; }
  };

  // app.js 在 DOM 末尾同步执行完毕后再启动，确保 window.__YL 已就绪
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    setTimeout(boot, 0);
  }
})();
