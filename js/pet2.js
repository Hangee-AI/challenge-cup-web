/* ==========================================================
   pet2.js · 学习搭子「小引」——迷你头版
   只保留迷你小熊头（8 种卡通表情）+ 聊天框，去掉大熊/换装。
   · 点击迷你头 → 换下一个表情 + 弹出聊天框
   · 有眼睛的表情：头部朝鼠标轻微倾斜，像在看鼠标
   · 没眼睛的表情：被鼠标"拉扯"——更大幅度倾斜 + 错切拉伸
   · 拖拽移动位置、闲置自动轮换表情、气泡提示保留
   ========================================================== */
(function () {
  'use strict';

  var HEADS = [
    'assets/pet/head/head-1.png', 'assets/pet/head/head-2.png',
    'assets/pet/head/head-3.png', 'assets/pet/head/head-4.png',
    'assets/pet/head/head-5.png', 'assets/pet/head/head-6.png',
    'assets/pet/head/head-7.png', 'assets/pet/head/head-8.png'
  ];
  /* 哪些表情有可见眼睛（黑眼珠）→ 跟随鼠标；其余 → 拉扯感 */
  var HAS_EYES = [true, true, true, false, false, false, true, false];

  var K_POS = 'pet2_pos';
  var K_HEAD = 'pet2_head_idx';
  var IDLE_MS = 20000;
  var DRAG_THRESHOLD = 4;

  var el = {};
  var headIdx = 0;
  var idleTimer = null, headTimer = null, bubbleTimer = null;
  var mouseX = (innerWidth || 1) * 0.7, mouseY = (innerHeight || 1) * 0.7;

  function $(id) { return document.getElementById(id); }
  function loadJSON(k, dft) {
    try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : dft; } catch (e) { return dft; }
  }
  function saveJSON(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function isDay() { var h = new Date().getHours(); return h >= 6 && h < 18; }

  /* ---------------- 构建 DOM ---------------- */
  function build() {
    if (document.getElementById('pet2')) return;

    var root = document.createElement('div');
    root.className = 'pet2';
    root.id = 'pet2';
    root.innerHTML =
      '<div class="pet2-mini" id="pet2Mini">' +
        '<img id="pet2Head" alt="小引" />' +
      '</div>' +
      '<div class="pet2-bubble" id="pet2Bubble"></div>' +
      /* 聊天小窗口：可拖动，head 是拖拽把手 */
      '<div class="pet2-panel" id="pet2Panel" hidden>' +
        '<div class="pet2-panel-head" id="pet2PanelHead">' +
          '<div class="pet2-panel-title">小引 · 学习搭子<span class="pet2-panel-sub" id="pet2Sub">正在连接…</span></div>' +
          '<button class="pet2-panel-x" id="pet2Close" type="button" aria-label="收起">✕</button>' +
        '</div>' +
        '<div class="pet2-log" id="pet2Log"></div>' +
        '<form class="pet2-inputrow" id="pet2Form">' +
          '<input id="pet2Input" type="text" maxlength="300" placeholder="问点什么，比如：这关重点是什么？" autocomplete="off" />' +
          '<button type="submit">发送</button>' +
        '</form>' +
      '</div>';
    document.body.appendChild(root);

    el.root = root;
    el.mini = $('pet2Mini');
    el.head = $('pet2Head');
    el.bubble = $('pet2Bubble');
    el.panel = $('pet2Panel');
    el.panelHead = $('pet2PanelHead');
    el.log = $('pet2Log');
    el.form = $('pet2Form');
    el.input = $('pet2Input');
    el.sub = $('pet2Sub');

    bindEvents();
  }

  /* ---------------- 表情 ---------------- */
  function setHead(idx) {
    if (!el.head) return;
    headIdx = ((idx % HEADS.length) + HEADS.length) % HEADS.length;
    el.head.src = HEADS[headIdx];
    el.mini.classList.toggle('has-eyes', HAS_EYES[headIdx]);
    saveJSON(K_HEAD, headIdx);
    pointAtMouse();
  }
  function nextHead() {
    setHead(headIdx + 1);
  }
  function randomHead() {
    var n;
    do { n = Math.floor(Math.random() * HEADS.length); } while (n === headIdx && HEADS.length > 1);
    setHead(n);
  }
  function startHeadRotate() {
    stopHeadRotate();
    headTimer = setInterval(function () {
      if (document.hidden) return;
      if (Math.random() < 0.4) randomHead();
    }, 22000);
  }
  function stopHeadRotate() { if (headTimer) { clearInterval(headTimer); headTimer = null; } }

  /* ---------------- 鼠标跟随：有眼睛→看鼠标；没眼睛→被拉扯 ---------------- */
  function pointAtMouse() {
    if (!el.mini) return;
    var w = innerWidth || 1, h = innerHeight || 1;
    var nx = (mouseX / w - 0.5) * 2;      /* -1 ~ 1 */
    var ny = (mouseY / h - 0.5) * 2;
    var eyes = HAS_EYES[headIdx];

    if (eyes) {
      /* 有眼睛：头部轻微朝鼠标倾斜，像在看 */
      el.mini.style.setProperty('--mo-tilt', (nx * 5).toFixed(2) + 'deg');
      el.mini.style.setProperty('--mo-y', (ny * 1.5).toFixed(2) + 'px');
      el.mini.style.setProperty('--mo-skew', '0deg');
      el.mini.style.setProperty('--mo-sx', '1');
      el.mini.style.setProperty('--mo-sy', '1');
    } else {
      /* 没眼睛：被鼠标拉扯——更大倾斜 + 错切 + 朝鼠标方向拉伸 */
      el.mini.style.setProperty('--mo-tilt', (nx * 11).toFixed(2) + 'deg');
      el.mini.style.setProperty('--mo-y', (ny * 3).toFixed(2) + 'px');
      el.mini.style.setProperty('--mo-skew', (nx * 6).toFixed(2) + 'deg');
      var stretch = 1 + Math.abs(nx) * 0.05;
      el.mini.style.setProperty('--mo-sx', stretch.toFixed(3));
      el.mini.style.setProperty('--mo-sy', (2 - stretch).toFixed(3));
    }
  }
  function bindMouseFollow() {
    var last = 0;
    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX; mouseY = e.clientY;
      var now = Date.now();
      if (now - last < 16) return;      /* 约 60fps 节流 */
      last = now;
      pointAtMouse();
    }, { passive: true });
  }

  /* ---------------- 聊天小窗口 ---------------- */
  var K_PANEL = 'pet2_panel_pos';
  var waiting = false;

  function showPanel() {
    if (!el.panel) return;
    el.panel.hidden = false;
    if (!el.panel.dataset.placed) {
      var p = loadJSON(K_PANEL, null);
      if (p && typeof p.left === 'number') {
        placePanel(p.left, p.top);
      } else {
        var r = el.panel.getBoundingClientRect();
        var pw = r.width || 300, ph = r.height || 320;
        placePanel(Math.max(12, window.innerWidth - pw - 140),
                   Math.max(12, window.innerHeight - ph - 120));
      }
      el.panel.dataset.placed = '1';
    }
    checkStatus();
    setTimeout(function () { if (el.input) el.input.focus(); }, 60);
  }
  function hidePanel() { if (el.panel) el.panel.hidden = true; }

  function placePanel(left, top) {
    if (!el.panel) return;
    var w = el.panel.offsetWidth || 300, h = el.panel.offsetHeight || 320;
    left = Math.min(Math.max(8, left), Math.max(8, window.innerWidth - w - 8));
    top  = Math.min(Math.max(8, top),  Math.max(8, window.innerHeight - h - 8));
    el.panel.style.left = left + 'px';
    el.panel.style.top = top + 'px';
    el.panel.style.right = 'auto';
    el.panel.style.bottom = 'auto';
  }

  function apiBase() {
    try { if (window.Cloud && window.Cloud.apiBase) return window.Cloud.apiBase() || ''; } catch (e) { }
    return '';
  }
  function apiUrl(p) { return apiBase() + p; }

  function ctxLine() {
    var s = '';
    try {
      var st = window.__YL && window.__YL.state;
      if (st) {
        if (st.majorId && window.MAJORS) {
          var major = window.MAJORS.filter(function (m) { return m.id === st.majorId; })[0];
          if (major) s += '专业：' + major.name + '；';
        }
        if (st.levelId) s += '当前关卡：' + st.levelId + '；';
      }
    } catch (e) { }
    return s;
  }

  function localAnswer(q) {
    if (/重点|怎么学|方法/.test(q)) return '先把这一关的目标说清楚：看懂什么、动手做什么。不确定就点「这关重点是什么」，我按三句话讲。';
    if (/卡住|不会|难/.test(q)) return '卡住时先把问题缩小：哪一行报错、哪一步不懂。把报错发我，我陪你拆。';
    if (/多久|时间/.test(q)) return '一天 10 分钟，一学期就是一门课的量。先别追进度，先别断。';
    return '我在。你可以问这一关的重点、要装什么工具，或者告诉我卡在哪一步。';
  }

  function addMsg(role, text) {
    if (!el.log) return null;
    var d = document.createElement('div');
    d.className = 'pet2-msg ' + (role === 'me' ? 'me' : 'ai');
    d.textContent = text;
    el.log.appendChild(d);
    el.log.scrollTop = el.log.scrollHeight;
    return d;
  }

  function send(text) {
    addMsg('me', text);
    if (waiting) return;
    waiting = true;
    var t = addMsg('ai', '想想…');
    if (t) t.classList.add('is-typing');
    fetch(apiUrl('/api/chat'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text, context: ctxLine() })
    }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }).then(function (j) {
      if (t) t.textContent = j.reply || j.text || localAnswer(text);
      if (el.sub && j.provider) el.sub.textContent = '在线 · ' + (j.model || j.provider);
    }).catch(function () {
      if (t) t.textContent = localAnswer(text);
      if (el.sub) el.sub.textContent = '只连着本地（未接大模型）';
    }).then(function () {
      if (t) t.classList.remove('is-typing');
      waiting = false;
      if (el.log) el.log.scrollTop = el.log.scrollHeight;
    });
  }

  function checkStatus() {
    if (!el.sub) return;
    fetch(apiUrl('/api/chat/status')).then(function (r) { return r.json(); }).then(function (j) {
      if (j && j.ready) el.sub.textContent = '在线 · ' + (j.model || j.provider || 'AI');
      else el.sub.textContent = '只连着本地（未接大模型）';
    }).catch(function () { if (el.sub) el.sub.textContent = '只连着本地'; });
  }

  /* ---------------- 事件 ---------------- */
  function bindEvents() {
    /* 迷你头：点击换表情 + 弹聊天框；拖动整体移动 */
    var start = null, moved = false, base = { right: 26, bottom: 26 };
    el.mini.addEventListener('pointerdown', function (e) {
      if (e.button !== undefined && e.button !== 0) return;
      start = { x: e.clientX, y: e.clientY };
      moved = false;
      var st = getComputedStyle(el.root);
      base = { right: parseFloat(st.right) || 26, bottom: parseFloat(st.bottom) || 26 };
      el.mini.setPointerCapture && el.mini.setPointerCapture(e.pointerId);
    });
    el.mini.addEventListener('pointermove', function (e) {
      if (!start) return;
      var dx = e.clientX - start.x, dy = e.clientY - start.y;
      if (!moved && Math.abs(dx) + Math.abs(dy) < DRAG_THRESHOLD) return;
      moved = true;
      el.root.style.right = Math.max(4, base.right - dx) + 'px';
      el.root.style.bottom = Math.max(4, base.bottom - dy) + 'px';
      el.root.style.left = 'auto';
      el.root.style.top = 'auto';
    });
    function finish() {
      if (!start) return;
      var wasMoved = moved;
      start = null;
      if (wasMoved) {
        var st = getComputedStyle(el.root);
        saveJSON(K_POS, { right: parseFloat(st.right) || 26, bottom: parseFloat(st.bottom) || 26 });
      } else {
        nextHead();                  /* 点击 → 换表情 */
        showPanel();                 /* 同时弹出聊天框 */
        showBubble('点我可以换表情～');
      }
    }
    el.mini.addEventListener('pointerup', finish);
    el.mini.addEventListener('pointercancel', function () { start = null; });

    /* 聊天窗口：head 拖动 + 发送 + 收起 */
    var panStart = null;
    el.panelHead.addEventListener('pointerdown', function (e) {
      if (e.button !== undefined && e.button !== 0) return;
      if (e.target.closest && e.target.closest('.pet2-panel-x')) return;
      var r = el.panel.getBoundingClientRect();
      panStart = { x: e.clientX, y: e.clientY, left: r.left, top: r.top };
      el.panelHead.setPointerCapture && el.panelHead.setPointerCapture(e.pointerId);
      el.panel.classList.add('is-dragging');
      e.preventDefault();
    });
    el.panelHead.addEventListener('pointermove', function (e) {
      if (!panStart) return;
      placePanel(panStart.left + (e.clientX - panStart.x), panStart.top + (e.clientY - panStart.y));
    });
    function panFinish() {
      if (!panStart) return;
      panStart = null;
      el.panel.classList.remove('is-dragging');
      var st = el.panel.style;
      saveJSON(K_PANEL, { left: parseFloat(st.left) || 0, top: parseFloat(st.top) || 0 });
    }
    el.panelHead.addEventListener('pointerup', panFinish);
    el.panelHead.addEventListener('pointercancel', panFinish);

    $('pet2Close').addEventListener('click', function () { hidePanel(); });
    el.form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = el.input.value.trim();
      if (!v) return;
      el.input.value = '';
      send(v);
    });
    el.panel.addEventListener('pointerdown', function (e) { e.stopPropagation(); });

    window.addEventListener('resize', function () { pointAtMouse(); });
  }

  /* ---------------- 气泡 ---------------- */
  var DAY_TIPS = [
    '今天也一起往前挪一点吧。',
    '先做完这一小关，再休息。',
    '不用一开始就很快，先把路走顺。',
    '你觉得难的部分，通常就是最值钱的部分。'
  ];
  var NIGHT_TIPS = [
    '夜深了，屏幕亮度调低一点。',
    '再学 20 分钟就睡吧，明天还有力气。',
    '熬夜学的东西，第二天会打折。'
  ];
  function showBubble(text, ms) {
    if (!el.bubble) return;
    el.bubble.textContent = text;
    el.bubble.classList.add('is-on');
    if (bubbleTimer) clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(hideBubble, ms || 5200);
  }
  function hideBubble() {
    if (el.bubble) el.bubble.classList.remove('is-on');
    if (bubbleTimer) { clearTimeout(bubbleTimer); bubbleTimer = null; }
  }

  /* ---------------- 初始化 ---------------- */
  function init() {
    if (document.getElementById('pet2')) return;
    build();

    headIdx = loadJSON(K_HEAD, isDay() ? 0 : 2);
    if (typeof headIdx !== 'number' || headIdx < 0 || headIdx >= HEADS.length) headIdx = 0;
    setHead(headIdx);

    var pos = loadJSON(K_POS, null);
    if (pos && typeof pos.right === 'number') {
      el.root.style.right = pos.right + 'px';
      el.root.style.bottom = pos.bottom + 'px';
      el.root.style.left = 'auto';
      el.root.style.top = 'auto';
    }

    bindMouseFollow();
    startHeadRotate();
    setTimeout(pointAtMouse, 120);

    setTimeout(function () {
      showBubble(isDay() ? '点我可以换表情，还能聊天～' : '夜猫模式：陪你学到困。', 6000);
    }, 2600);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.Pet2 = {
    next: nextHead,
    head: function () { return headIdx; },
    setHead: setHead,
    panel: showPanel,
    hidePanel: hidePanel,
    tip: showBubble
  };
})();
