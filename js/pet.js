/* ==========================================================
   pet.js · 学习搭子「小引」（桌面宠物挂件）
   ----------------------------------------------------------
   - 右下角一只猫头鹰：可拖动、会上下浮动、隔一会儿冒一句话
   - 点它打开对话框，回答由后端 /api/chat 转给 DeepSeek
   - 没配 Key / 断网 / 静态站连不上后端时，自动退回「本地兜底回答」，
     页面照样能用，不会白屏
   - 当前页面信息（专业/阶段/模块/关卡/讲解要点）会一起带给模型
   依赖：js/app.js 暴露的 window.__YL、js/cloud.js 暴露的 window.Cloud
   ========================================================== */

(function () {
  if (window.__PET_LOADED) return;
  window.__PET_LOADED = true;

  var K_POS = 'yl_pet_pos';
  var K_MIN = 'yl_pet_min';
  var K_TIP = 'yl_pet_tip';

  var TIPS = [
    '今天想从哪一关开始？',
    '卡住的时候可以点我，我陪你捋一遍。',
    '一关 10 分钟，做完再走更稳。',
    '不懂的概念，让我用大白话讲一遍？',
    '先把这一关的题做完，再看下一关。',
    '觉得自己笨的时候，往往只是还没拆小。',
    '学不下去就先写三行代码，手感会回来。',
    '要不要我出个小练习考考你？'
  ];

  var CHIPS = [
    { label: '这关重点是什么', text: '这一关的重点是什么？用三句话说。' },
    { label: '给我一道练习', text: '根据这一关的内容，给我出一道小练习题，先别给答案。' },
    { label: '我卡住了', text: '我卡在这一关了，给我一个提示，不要直接给答案。' },
    { label: '讲个概念', text: '把这一关最重要的概念，用大一新生能听懂的话讲一遍。' },
    { label: '今天学点什么', text: '我有点不知道从哪开始，给我一个今天 30 分钟能做完的安排。' }
  ];

  var el = {};
  var history = [];
  var waiting = false;
  var ready = false;      // 后端是否配好了 Key
  var checked = false;
  var tipTimer = null;
  var tipIndex = 0;

  /* ---------------- 小工具 ---------------- */
  function apiBase() {
    try {
      if (window.Cloud && typeof window.Cloud.apiBase === 'function') return window.Cloud.apiBase() || '';
    } catch (e) { /* ignore */ }
    return '';
  }

  function apiUrl(p) {
    var b = apiBase();
    return b ? String(b).replace(/\/+$/, '') + p : p;
  }

  function getStore(k, d) {
    try { var v = localStorage.getItem(k); return v == null ? d : v; } catch (e) { return d; }
  }
  function setStore(k, v) {
    try { localStorage.setItem(k, v); } catch (e) { /* ignore */ }
  }

  function viewName() {
    var nodes = document.querySelectorAll('.view');
    for (var i = 0; i < nodes.length; i++) {
      if (!nodes[i].hidden) return nodes[i].id.replace('view-', '');
    }
    return '';
  }

  /* 当前页面上下文：给模型一点「你在哪一关」的信息 */
  function collectContext() {
    var out = { major: '', stage: '', module: '', level: '', view: viewName(), doc: '', topic: '' };
    var st = (window.__YL && window.__YL.state) || {};
    try {
      if (st.majorId && typeof getPath === 'function') {
        var major = (typeof getMajor === 'function') ? getMajor(st.majorId) : null;
        if (major) out.major = major.name || '';
        var path = getPath(st.majorId);
        var found = (st.levelId && typeof findLevel === 'function') ? findLevel(path, st.levelId) : null;
        if (found && found.level) {
          out.stage = (found.stage && found.stage.title) || '';
          out.module = (found.module && found.module.name) || '';
          out.level = found.level.name || '';
          if (typeof getDoc === 'function') {
            try {
              var d = getDoc(found.level, { major: major, module: found.module, stage: found.stage });
              if (d && d.lead) out.doc = d.lead;
            } catch (e) { /* ignore */ }
          }
          if (found.level.questions && found.level.questions[0]) {
            out.topic = found.level.questions[0].stem || '';
          }
        }
      }
    } catch (e) { /* 拿不到就算了，不影响对话 */ }
    return out;
  }

  /* 本地兜底：没接大模型也能回答最关键的几个问题 */
  function localAnswer(text) {
    var c = collectContext();
    var t = String(text || '');
    if (/练习|出题|考考/.test(t)) {
      if (c.topic) return '先试试这一关的第一题：' + c.topic + '\n（写完告诉我你的答案，我帮你对一对思路。）';
      return '先去「闯关地图」点开一关，我把那关的题拿来考你。';
    }
    if (/重点|要点|讲什么/.test(t)) {
      if (c.level) return '你现在看的是「' + c.level + '」。' + (c.doc ? '\n' + c.doc : '\n先把讲解里的第一段看懂，再做那 3 道题。');
      return '先说你想学哪门课？选完专业我给你排一版路线。';
    }
    if (/卡|不会|不懂|难/.test(t)) {
      return '卡住很正常。先把这一关的讲解读一遍，然后试着回答第一题；答错了我会告诉你为什么错。\n（想让我细讲，需要在服务器上配好 DeepSeek Key。）';
    }
    return '我还没接通大模型（服务器上缺 DeepSeek Key），现在只能回答几个基础问题：这关重点 / 给我一道练习 / 我卡住了。\n配好 Key 之后我就能正常聊天了。';
  }

  /* ---------------- 渲染 ---------------- */
  function build() {
    var wrap = document.createElement('div');
    wrap.className = 'pet';
    wrap.id = 'petWrap';
    wrap.innerHTML = [
      '<div class="pet-bubble" id="petBubble" hidden></div>',
      '<div class="pet-panel" id="petPanel" hidden>',
      '  <div class="pet-head">',
      '    <span class="pet-avatar">🦉</span>',
      '    <div class="pet-title">小引 · 学习搭子<span class="pet-sub" id="petSub">正在连接…</span></div>',
      '    <button class="pet-x" id="petClose" type="button" aria-label="收起">✕</button>',
      '  </div>',
      '  <div class="pet-log" id="petLog"></div>',
      '  <div class="pet-chips" id="petChips"></div>',
      '  <form class="pet-inputrow" id="petForm">',
      '    <input id="petInput" type="text" maxlength="300" placeholder="问点什么，比如：这关重点是什么" autocomplete="off" />',
      '    <button type="submit" id="petSend">发送</button>',
      '  </form>',
      '</div>',
      '<button class="pet-body" id="petBody" type="button" aria-label="打开学习搭子">',
      '  <span class="pet-face">🦉</span>',
      '</button>'
    ].join('');
    document.body.appendChild(wrap);

    el.wrap = wrap;
    el.body = document.getElementById('petBody');
    el.bubble = document.getElementById('petBubble');
    el.panel = document.getElementById('petPanel');
    el.log = document.getElementById('petLog');
    el.chips = document.getElementById('petChips');
    el.form = document.getElementById('petForm');
    el.input = document.getElementById('petInput');
    el.sub = document.getElementById('petSub');

    CHIPS.forEach(function (c) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'pet-chip';
      b.textContent = c.label;
      b.addEventListener('click', function () { send(c.text); });
      el.chips.appendChild(b);
    });

    el.body.addEventListener('click', function (e) {
      if (e.detail > 1) return;   // 双击不触发
      toggle();
    });
    el.body.addEventListener('dblclick', function () { setMin(true); });
    document.getElementById('petClose').addEventListener('click', function () { setMin(true); });
    el.form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = el.input.value.trim();
      if (!v) return;
      el.input.value = '';
      send(v);
    });

    dragify();
    restorePos();
    addMsg('ai', '我是小引，这只猫头鹰会跟着你。哪一关卡了就直接问我。');
    setTimeout(function () { checkStatus(); }, 1200);
    scheduleTip(6000);
  }

  function setMin(min) {
    setStore(K_MIN, min ? '1' : '0');
    el.panel.hidden = !!min;
    hideBubble();
    el.wrap.classList.toggle('is-open', !min);
  }

  function toggle() {
    hideBubble();
    if (el.panel.hidden) { setMin(false); setTimeout(function () { el.input.focus(); }, 60); }
    else setMin(true);
  }

  function addMsg(role, text) {
    var d = document.createElement('div');
    d.className = 'pet-msg ' + (role === 'me' ? 'me' : 'ai');
    d.textContent = text;
    el.log.appendChild(d);
    el.log.scrollTop = el.log.scrollHeight;
    return d;
  }

  function showBubble(text) {
    el.bubble.textContent = text;
    el.bubble.hidden = false;
    el.bubble.classList.add('is-on');
  }
  function hideBubble() {
    el.bubble.hidden = true;
    el.bubble.classList.remove('is-on');
  }

  function scheduleTip(delay) {
    clearTimeout(tipTimer);
    tipTimer = setTimeout(function () {
      if (document.visibilityState === 'visible' && el.panel.hidden) {
        var i = Number(getStore(K_TIP, '-1'));
        tipIndex = (i + 1 + Math.floor(Math.random() * (TIPS.length - 1))) % TIPS.length;
        setStore(K_TIP, String(tipIndex));
        showBubble(TIPS[tipIndex]);
      }
      scheduleTip(90000 + Math.random() * 60000);
    }, delay);
  }

  /* 拖动：按住猫头鹰可以拖着走，位置记在本地 */
  function dragify() {
    var dragging = false, moved = false, sx = 0, sy = 0, ox = 0, oy = 0;

    el.body.addEventListener('pointerdown', function (e) {
      dragging = true; moved = false;
      sx = e.clientX; sy = e.clientY;
      var r = el.wrap.getBoundingClientRect();
      ox = r.left; oy = r.top;
      el.body.classList.add('is-drag');
      try { el.body.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
    });

    el.body.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      var dx = e.clientX - sx, dy = e.clientY - sy;
      if (Math.abs(dx) + Math.abs(dy) > 6) moved = true;
      if (!moved) return;
      var left = Math.max(8, Math.min(window.innerWidth - 80, ox + dx));
      var top = Math.max(8, Math.min(window.innerHeight - 80, oy + dy));
      el.wrap.style.left = left + 'px';
      el.wrap.style.top = top + 'px';
      el.wrap.style.right = 'auto';
      el.wrap.style.bottom = 'auto';
    });

    el.body.addEventListener('pointerup', function (e) {
      if (!dragging) return;
      dragging = false;
      el.body.classList.remove('is-drag');
      try { el.body.releasePointerCapture(e.pointerId); } catch (err) { /* ignore */ }
      if (moved) {
        var r = el.wrap.getBoundingClientRect();
        setStore(K_POS, JSON.stringify({ left: Math.round(r.left), top: Math.round(r.top) }));
      }
    });
  }

  function restorePos() {
    var raw = getStore(K_POS, '');
    if (!raw) return;
    try {
      var p = JSON.parse(raw);
      if (typeof p.left === 'number' && typeof p.top === 'number') {
        el.wrap.style.left = Math.max(8, Math.min(window.innerWidth - 80, p.left)) + 'px';
        el.wrap.style.top = Math.max(8, Math.min(window.innerHeight - 80, p.top)) + 'px';
        el.wrap.style.right = 'auto';
        el.wrap.style.bottom = 'auto';
      }
    } catch (e) { /* ignore */ }
  }

  /* ---------------- 后端状态 ---------------- */
  function checkStatus() {
    checked = true;
    fetch(apiUrl('/api/chat/status'), { cache: 'no-store' })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        ready = !!(j && j.ready);
        el.sub.textContent = ready ? '在线 · ' + (j.model || 'deepseek') : '只连着本地（未配大模型）';
        el.wrap.classList.toggle('is-offline', !ready);
      })
      .catch(function () {
        ready = false;
        el.sub.textContent = '连不上后端';
        el.wrap.classList.add('is-offline');
      });
  }

  /* ---------------- 对话 ---------------- */
  function send(text) {
    if (waiting) return;
    if (el.panel.hidden) setMin(false);
    hideBubble();

    addMsg('me', text);
    var t = addMsg('ai', '…');
    t.classList.add('is-typing');
    waiting = true;
    el.wrap.classList.add('is-thinking');

    if (!history.length) history.push({ role: 'assistant', content: '我是小引，学习搭子。' });
    history.push({ role: 'user', content: text });
    if (history.length > 8) history = history.slice(-8);

    var body = { messages: history.slice(-6), context: collectContext() };

    fetch(apiUrl('/api/chat'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }).then(function (r) {
      return r.json().then(function (j) { return { status: r.status, j: j || {} }; });
    }).then(function (res) {
      var j = res.j || {};
      if (j.ok && j.reply) {
        t.textContent = j.reply;
        history.push({ role: 'assistant', content: j.reply });
      } else if (j.reason === 'login-required') {
        t.textContent = j.hint || '先去个人中心用学号登录一下，就能跟我聊天了。';
      } else if (j.reason === 'rate-limit' || j.reason === 'quota-day') {
        t.textContent = j.hint || '问得有点快，等我缓一缓。';
      } else {
        ready = false;
        el.sub.textContent = '只连着本地（未配大模型）';
        t.textContent = localAnswer(text);
      }
    }).catch(function () {
      ready = false;
      el.sub.textContent = '连不上后端';
      t.textContent = localAnswer(text);
    }).then(function () {
      t.classList.remove('is-typing');
      waiting = false;
      el.wrap.classList.remove('is-thinking');
      el.log.scrollTop = el.log.scrollHeight;
    });
  }

  /* ---------------- 起步 ---------------- */
  function boot() {
    if (!document.body) return;
    build();
    if (getStore(K_MIN, '0') === '1') setMin(true);
    el.body.addEventListener('click', function () { hideBubble(); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  /* 给调试/自动化用 */
  window.Pet = {
    open: function () { setMin(false); },
    close: function () { setMin(true); },
    ask: send,
    status: function () { return { ready: ready, checked: checked }; },
    context: collectContext
  };
})();
