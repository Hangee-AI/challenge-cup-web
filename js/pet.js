/* ==========================================================
   pet.js · 学习搭子「小引」v3（图片版 · 圆环换装 + 海星展开）
   ----------------------------------------------------------
   - 平时只显示一个小熊头（按时间自动白/黑，可拖动）
   - 点头像：大熊 + 聊天框一起出现（大熊独立站在聊天框旁边，可拖）
   - 点大熊：大熊周围圆环展开 4 个部位（肤色/眼镜/围巾/外套）
             点某个部位后，该部位的选项沿同方向一条直线鱼骨状展开
   - 选中的穿搭存 localStorage，刷新/下次进入保持
   - 一段时间不聊天：说一句话 → 缩回只留小熊头
   - 白天(6:00-18:00) / 夜里 不同鼓励语
   ========================================================== */
(function () {
  'use strict';

  var BASE = 'assets/pet/';
  /* 待机用的 5 种卡通头像（用户素材图 5） */
  var CARTOON = {
    wave: BASE + 'cartoon-1.png',   /* 招手：白天默认 */
    shy: BASE + 'cartoon-4.png',    /* 闭眼笑：被夸/答完 */
    think: BASE + 'cartoon-8.png',  /* 黑色转圈：思考中 */
    sleepy: BASE + 'cartoon-5.png', /* 犯困：夜间默认 */
    ask: BASE + 'cartoon-7.png'     /* 疑问：等你说话 */
  };
  var headMood = '';
  function setHeadMood(m) {
    headMood = m || '';
    if (built && el.headImg) el.headImg.src = CARTOON[headMood] || CARTOON.wave;
  }
  var K_LOOK = 'yl_pet_look3';
  var K_MIN = 'yl_pet_min3';
  var K_POS = 'yl_pet_pos3';
  var K_BIGPOS = 'yl_pet_bigpos3_v2';

  /* ---------------- 素材 ---------------- */
  var SKINS = [
    { id: 'black', name: '墨黑' },
    { id: 'white', name: '雪白' },
    { id: 'brown', name: '栗棕' },
    { id: 'pink', name: '樱粉' }
  ];
  var GLASSES = [
    { id: '', name: '不戴' },
    { id: 'brown', name: '复古皮框', img: 'gl-brown.png' },
    { id: 'purple', name: '星芒护目镜', img: 'gl-purple.png' },
    { id: 'white', name: '白框护目镜', img: 'gl-white.png' },
    { id: 'black', name: '黑框护目镜', img: 'gl-black.png' },
    { id: 'blacksq', name: '黑框墨镜', img: 'gl-blacksq.png' },
    { id: 'whitesq', name: '白框墨镜', img: 'gl-whitesq.png' }
  ];
  var SCARVES = [
    { id: '', name: '不围' },
    { id: 'black', name: '纯黑围巾', img: 'sc-black.png' },
    { id: 'white', name: '纯白围巾', img: 'sc-white.png' },
    { id: 'check', name: '黑白棋盘', img: 'sc-check.png' },
    { id: 'tip', name: '白边黑巾', img: 'sc-tip.png' },
    { id: 'neon', name: '荧光黑', img: 'sc-neon.png' }
  ];
  var JACKETS = [
    { id: '', name: '不穿' },
    { id: 'varsity', name: '红黑棒球服', img: 'jk-varsity.png' },
    { id: 'denim', name: '牛仔拼棕', img: 'jk-denim.png' },
    { id: 'leather', name: '黑皮夹克', img: 'jk-leather.png' },
    { id: 'cardigan', name: '米白针织', img: 'jk-cardigan.png' }
  ];

  var DAY_TIPS = [
    '勤奋的一天开始了，今天也要努力呀！',
    '挑一个专业，先看清这学期该干什么。',
    '一关十分钟，今天先来一关？',
    '早上的脑子最好使，适合啃硬骨头。',
    '别等有空才学，学会了才有更多空。'
  ];
  var NIGHT_TIPS = [
    '大王晚上努力奋斗时，要注意用眼哦！',
    '夜深了，做两关就早点睡，眼睛要休息。',
    '晚上学完记得远眺 20 秒，别硬撑。',
    '今天已经比昨天多懂一点了，可以收工。',
    '灯调暗一点，屏幕亮度调低一点。'
  ];
  var CHIPS = [
    { label: '这关重点是什么', text: '这关的重点是什么？用三句话讲。' },
    { label: '给我一道练习', text: '给我出一道刚学内容的练习题，先别给答案。' },
    { label: '我卡住了', text: '我卡住了，帮我按步骤拆开讲。' },
    { label: '装什么环境', text: '学这个方向要装什么工具？最简单的一套。' },
    { label: '学多久能上手', text: '大概要学多久才能自己写出小项目？' }
  ];

  function isDay() { var h = new Date().getHours(); return h >= 6 && h < 18; }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function tipList() { return isDay() ? DAY_TIPS : NIGHT_TIPS; }

  /* ---------------- 状态 ---------------- */
  var look = { skin: '', glasses: '', scarf: '', jacket: '' };
  var built = false;
  var el = {};
  var dragging = false, justDragged = false, dragMoved = 0;
  var lastAct = Date.now();
  var waiting = false;
  var ringOpen = false, armCat = null;
  var idleTimer = null;

  function getStore(k, d) { try { var v = localStorage.getItem(k); return v == null ? d : v; } catch (e) { return d; } }
  function setStore(k, v) { try { localStorage.setItem(k, v); } catch (e) { } }
  function loadLook() {
    try {
      var raw = localStorage.getItem(K_LOOK);
      if (raw) {
        var o = JSON.parse(raw);
        if (o && o.skin) {
          look = {
            skin: o.skin,
            glasses: o.glasses || '',
            scarf: o.scarf || '',
            jacket: o.jacket || ''
          };
          return look;
        }
      }
    } catch (e) { }
    look = { skin: isDay() ? 'white' : 'black', glasses: '', scarf: '', jacket: '' };
    return look;
  }
  function saveLook() { setStore(K_LOOK, JSON.stringify(look)); }

  function findById(list, id) { for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i]; return null; }
  function img(name) { return name ? BASE + name : ''; }

  /* ---------------- 页面结构 ---------------- */
  function build() {
    if (document.getElementById('petWrap')) { assignEls(); return; }

    var wrap = document.createElement('div');
    wrap.className = 'pet';
    wrap.id = 'petWrap';

    var cats = [
      { id: 'skin', name: '肤色', angle: -135 },
      { id: 'glasses', name: '眼镜', angle: -45 },
      { id: 'scarf', name: '围巾', angle: 45 },
      { id: 'jacket', name: '外套', angle: 135 }
    ];
    var ringHtml = cats.map(function (c) {
      return '<button class="ring-cat" type="button" data-cat="' + c.id + '" data-angle="' + c.angle +
        '" style="--a:' + c.angle + 'deg">' + c.name + '</button>';
    }).join('');

    wrap.innerHTML = [
      /* 大熊舞台 */
      '<div class="pet-stage" id="petStage" hidden>',
      '  <div class="pet-dress" id="petDress">',
      '    <img class="p-jacket" id="pJacket" alt="" />',
      '    <img class="p-body" id="pBody" alt="" />',
      '    <img class="p-scarf" id="pScarf" alt="" />',
      '    <img class="p-glasses" id="pGlasses" alt="" />',
      '  </div>',
      '  <div class="pet-ring" id="petRing" hidden>' + ringHtml + '</div>',
      '  <div class="pet-arm" id="petArm" hidden></div>',
      '  <div class="pet-bigtip">点我换装</div>',
      '</div>',

      /* 只露头的小熊 */
      '<button class="pet-head" id="petHead" type="button" aria-label="打开学习搭子小引">',
      '  <img id="pHeadImg" alt="小引" />',
      '</button>',

      /* 气泡 */
      '<div class="pet-bubble" id="petBubble" hidden></div>',

      /* 聊天框 */
      '<div class="pet-panel" id="petPanel" hidden>',
      '  <div class="pet-head-row">',
      '    <span class="pet-avatar" id="petAvatar"></span>',
      '    <div class="pet-title">小引 · 学习搭子<span class="pet-sub" id="petSub">正在连接…</span></div>',
      '    <button class="pet-x" id="petClose" type="button" aria-label="收起">✕</button>',
      '  </div>',
      '  <div class="pet-log" id="petLog"></div>',
      '  <div class="pet-chips" id="petChips"></div>',
      '  <form class="pet-inputrow" id="petForm">',
      '    <input id="petInput" type="text" maxlength="300" placeholder="问点什么，比如：这关重点是什么？" autocomplete="off" />',
      '    <button type="submit" id="petSend">发送</button>',
      '  </form>',
      '  <div class="pet-foot" id="petFoot">点大熊可以给我换装</div>',
      '</div>'
    ].join('');

    document.body.appendChild(wrap);
    assignEls();

    el.bubble.addEventListener('click', function () { hideBubble(); });

    el.head.addEventListener('click', function (e) {
      if (justDragged) { justDragged = false; return; }
      lastAct = Date.now();
      if (el.panel.hidden) setMin(false); else setMin(true);
    });

    bindDrag(el.head, el.head, function () { savePos(); });
    bindStageDrag();
    el.stage.addEventListener('dblclick', function () { resetBigPos(); });

    Array.prototype.forEach.call(wrap.querySelectorAll('.ring-cat'), function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var cat = btn.getAttribute('data-cat');
        if (armCat === cat) { closeArm(); return; }
        openArm(cat, parseFloat(btn.getAttribute('data-angle')));
      });
    });

    wrap.querySelector('#petClose').addEventListener('click', function () { setMin(true); });
    el.form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = el.input.value.trim();
      if (!v) return;
      el.input.value = '';
      send(v);
    });
    CHIPS.forEach(function (c) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'pet-chip';
      b.textContent = c.label;
      b.addEventListener('click', function () { send(c.text); });
      el.chips.appendChild(b);
    });

    setHeadMood(isDay() ? 'wave' : 'sleepy');
    applyLook();
    restorePos();
    scheduleTip(5000);
    startIdleWatch();
  }

  function assignEls() {
    var wrap = document.getElementById('petWrap');
    el.wrap = wrap;
    el.stage = wrap.querySelector('#petStage');
    el.dress = wrap.querySelector('#petDress');
    el.body = wrap.querySelector('#pBody');
    el.glasses = wrap.querySelector('#pGlasses');
    el.scarf = wrap.querySelector('#pScarf');
    el.jacket = wrap.querySelector('#pJacket');
    el.ring = wrap.querySelector('#petRing');
    el.arm = wrap.querySelector('#petArm');
    el.head = wrap.querySelector('#petHead');
    el.headImg = wrap.querySelector('#pHeadImg');
    el.bubble = wrap.querySelector('#petBubble');
    el.panel = wrap.querySelector('#petPanel');
    el.log = wrap.querySelector('#petLog');
    el.chips = wrap.querySelector('#petChips');
    el.form = wrap.querySelector('#petForm');
    el.input = wrap.querySelector('#petInput');
    el.sub = wrap.querySelector('#petSub');
    el.avatar = wrap.querySelector('#petAvatar');
    built = true;
  }

  /* 让大熊站在聊天框左边 */
  function geometry() {
    if (!built) return;
    var panelW = el.panel.hidden ? 0 : (el.panel.offsetWidth || 330);
    el.stage.style.right = (panelW + 12) + 'px';
  }

  /* ---------------- 穿搭 ---------------- */
  function applyLook() {
    if (!built) return;
    var skin = look.skin || (isDay() ? 'white' : 'black');
    el.body.src = BASE + 'body-' + skin + '.png';
    setHeadMood(headMood || (isDay() ? 'wave' : 'sleepy'));

    var g = findById(GLASSES, look.glasses);
    if (g && g.img) { el.glasses.src = img(g.img); el.glasses.hidden = false; } else { el.glasses.hidden = true; }

    var s = findById(SCARVES, look.scarf);
    if (s && s.img) { el.scarf.src = img(s.img); el.scarf.hidden = false; } else { el.scarf.hidden = true; }

    var j = findById(JACKETS, look.jacket);
    if (j && j.img) { el.jacket.src = img(j.img); el.jacket.hidden = false; } else { el.jacket.hidden = true; }

    if (el.avatar) {
      el.avatar.innerHTML = '<img src="' + (CARTOON[headMood] || CARTOON.wave) + '" alt="" />';
    }
  }

  function thumbFor(cat, id) {
    if (cat === 'skin') return BASE + 'head-' + id + '.png';
    var list = cat === 'glasses' ? GLASSES : cat === 'scarf' ? SCARVES : JACKETS;
    var it = findById(list, id);
    return it && it.img ? img(it.img) : '';
  }

  function openArm(cat, angle) {
    armCat = cat;
    var list = cat === 'skin' ? SKINS : cat === 'glasses' ? GLASSES : cat === 'scarf' ? SCARVES : JACKETS;
    var cur = look[cat] || '';
    el.arm.hidden = false;
    el.arm.className = 'pet-arm arm-' + cat;
    el.arm.innerHTML = list.map(function (it, i) {
      var t = thumbFor(cat, it.id);
      var on = it.id === cur ? ' is-on' : '';
      return '<button class="arm-item' + on + '" type="button" data-cat="' + cat + '" data-id="' + it.id + '" data-i="' + i + '" title="' + it.name + '">' +
        (t ? '<img src="' + t + '" alt="" />' : '<span class="arm-none">无</span>') +
        '</button>';
    }).join('');
    positionArm(cat, angle, list.length);

    Array.prototype.forEach.call(el.arm.querySelectorAll('.arm-item'), function (b) {
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        var id = b.getAttribute('data-id');
        look[cat] = id;
        saveLook();
        applyLook();
        Array.prototype.forEach.call(el.arm.querySelectorAll('.arm-item'), function (x) { x.classList.remove('is-on'); });
        b.classList.add('is-on');
        react();
      });
    });

    Array.prototype.forEach.call(el.ring.querySelectorAll('.ring-cat'), function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-cat') === cat);
    });
  }

  function positionArm(cat, angle, n) {
    var rad = angle * Math.PI / 180;
    var r0 = 112;   /* 圆心到分类按钮 */
    var gap = 58;   /* 相邻选项间距 */
    var cx = 130, cy = 150;  /* 与 CSS 里 .pet-stage 的中心一致 */
    for (var i = 0; i < n; i++) {
      var btn = el.arm.querySelector('.arm-item[data-i="' + i + '"]');
      if (!btn) continue;
      var d = r0 + 26 + i * gap;
      btn.style.left = (cx + Math.cos(rad) * d) + 'px';
      btn.style.top = (cy + Math.sin(rad) * d) + 'px';
      btn.style.transitionDelay = (i * 26) + 'ms';
    }
  }

  function closeArm() {
    armCat = null;
    if (el.arm) el.arm.hidden = true;
    if (el.ring) Array.prototype.forEach.call(el.ring.querySelectorAll('.ring-cat'), function (b) { b.classList.remove('is-active'); });
  }

  /* 圆环按钮按熊身中心排一圈，自动避开聊天框和屏幕边缘 */
  function layoutRing() {
    if (!built || !el.ring) return;
    var sr = el.stage.getBoundingClientRect();
    var cx = sr.left + sr.width / 2, cy = sr.top + sr.height - 118;
    var cats = Array.prototype.slice.call(el.ring.querySelectorAll('.ring-cat'));
    var R = Math.min(118, Math.max(96, sr.width / 2 - 8));
    var pts = cats.map(function (b) {
      var a = parseFloat(b.getAttribute('data-angle') || '0') * Math.PI / 180;
      return { b: b, x: cx + Math.cos(a) * R, y: cy + Math.sin(a) * R };
    });
    var minX = Math.min.apply(null, pts.map(function (o) { return o.x; }));
    var maxX = Math.max.apply(null, pts.map(function (o) { return o.x; }));
    var dx = 0;
    if (minX < 34) dx = 34 - minX;
    else if (maxX > window.innerWidth - 34) dx = (window.innerWidth - 34) - maxX;
    pts.forEach(function (o) {
      o.b.style.left = Math.round(o.x + dx - cx) + 'px';
      o.b.style.top = Math.round(o.y - cy) + 'px';
      o.b.style.transform = 'translate(-50%, -50%)';
    });
    var centerX = Math.round(cx + dx - sr.left), centerY = Math.round(cy - sr.top);
    el.ring.style.left = centerX + 'px';
    el.ring.style.top = centerY + 'px';
  }
  function toggleRing() {
    ringOpen = !ringOpen;
    el.ring.hidden = !ringOpen;
    closeArm();
    if (ringOpen) layoutRing();
  }

  function ringClose() {
    if (ringOpen) { ringOpen = false; if (el.ring) el.ring.hidden = true; }
    closeArm();
  }

  /* ---------------- 展开 / 收起 ---------------- */
  function setMin(min) {
    if (!built) build();
    if (!built) return;
    setStore(K_MIN, min ? '1' : '0');
    el.panel.hidden = !!min;
    el.stage.hidden = !!min;
    ringClose();
    if (!min) {
      el.head.classList.add('is-big');
      lastAct = Date.now();
      geometry();
      restoreBigPos();
      autoGreet();
    } else {
      el.head.classList.remove('is-big');
      hideBubble();
    }
    el.wrap.classList.toggle('is-open', !min);
  }

  function autoGreet() {
    if (!el.log) return;
    if (el.log.children.length <= 1) addMsg('ai', pick(tipList()));
  }

  function showBubble(text, ms) {
    if (!built) return;
    if (!text) { hideBubble(); return; }
    el.bubble.textContent = text;
    el.bubble.hidden = false;
    el.bubble.classList.add('is-on');
    clearTimeout(el.bubble._t);
    el.bubble._t = setTimeout(function () { hideBubble(); }, ms || 6000);
  }
  function hideBubble() {
    if (!built || !el.bubble) return;
    el.bubble.classList.remove('is-on');
    el.bubble.hidden = true;
  }
  function scheduleTip(delay) {
    clearTimeout(el._tipT);
    el._tipT = setTimeout(function () {
      if (!built) return;
      if (!el.panel.hidden) { scheduleTip(60000); return; }
      showBubble(pick(tipList()), 7000);
      scheduleTip(42000 + Math.random() * 30000);
    }, delay || 40000);
  }

  function react() {
    el.head.classList.remove('is-bounce');
    void el.head.offsetWidth;
    el.head.classList.add('is-bounce');
    setTimeout(function () { el.head.classList.remove('is-bounce'); }, 700);
  }


  function saveBigPos() {
    if (!built) return;
    var r = el.stage.getBoundingClientRect();
    var w = el.wrap.getBoundingClientRect();
    setStore(K_BIGPOS, JSON.stringify({ dx: Math.round(r.left - w.left), dy: Math.round(r.top - w.top) }));
  }
  function restoreBigPos() {
    var raw = getStore(K_BIGPOS, '');
    if (!raw) return false;
    try {
      var p = JSON.parse(raw);
      if (typeof p.dx !== 'number' || typeof p.dy !== 'number') return false;
      var w = el.wrap.getBoundingClientRect();
      var vw = document.documentElement.clientWidth || window.innerWidth;
      var vh = document.documentElement.clientHeight || window.innerHeight;
      var sw = el.stage.offsetWidth || 240, sh = el.stage.offsetHeight || 268;
      var left = Math.max(6, Math.min(vw - sw - 6, w.left + p.dx));
      var top = Math.max(6, Math.min(vh - sh - 6, w.top + p.dy));
      el.stage.style.left = Math.round(left - w.left) + 'px';
      el.stage.style.top = Math.round(top - w.top) + 'px';
      el.stage.style.right = 'auto';
      el.stage.style.bottom = 'auto';
      return true;
    } catch (e) { }
    return false;
  }

  /* 大熊单独拖拽：只移动大熊本体，聊天框/头像不动 */
  function bindStageDrag() {
    var startX = 0, startY = 0, ox = 0, oy = 0, active = false, moved = 0;
    el.stage.addEventListener('pointerdown', function (e) {
      if (e.target && e.target.closest && e.target.closest('.ring-cat, .arm-item')) return;
      if (e.button != null && e.button !== 0) return;
      active = true; moved = 0; justDragged = false;
      var r = el.stage.getBoundingClientRect();
      var wr = el.wrap.getBoundingClientRect();
      startX = e.clientX; startY = e.clientY; ox = r.left - wr.left; oy = r.top - wr.top;
      try { el.stage.setPointerCapture(e.pointerId); } catch (err) { }
    });
    el.stage.addEventListener('pointermove', function (e) {
      if (!active) return;
      var dx = e.clientX - startX, dy = e.clientY - startY;
      moved = Math.max(moved, Math.abs(dx) + Math.abs(dy));
      if (moved < 5) return;
      justDragged = true;
      var w = el.wrap.getBoundingClientRect();
      var vw = document.documentElement.clientWidth || window.innerWidth;
      var vh = document.documentElement.clientHeight || window.innerHeight;
      var sw = el.stage.offsetWidth || 240, sh = el.stage.offsetHeight || 268;
      var l = Math.max(6 - w.left, Math.min(vw - sw - 6 - w.left, ox + dx));
      var t = Math.max(6 - w.top, Math.min(vh - sh - 6 - w.top, oy + dy));
      el.stage.style.left = Math.round(l) + 'px';
      el.stage.style.top = Math.round(t) + 'px';
      el.stage.style.right = 'auto';
      el.stage.style.bottom = 'auto';
    });
    function end(e) {
      if (!active) return;
      active = false;
      try { el.stage.releasePointerCapture(e.pointerId); } catch (err) { }
      if (moved > 6) {
        justDragged = true;
        var w = el.wrap.getBoundingClientRect();
        var vw = document.documentElement.clientWidth || window.innerWidth;
        var vh = document.documentElement.clientHeight || window.innerHeight;
        var sw = el.stage.offsetWidth || 240, sh = el.stage.offsetHeight || 268;
        var cur = el.stage.getBoundingClientRect();
        var l = Math.max(6, Math.min(vw - sw - 6, cur.left));
        var t = Math.max(6, Math.min(vh - sh - 6, cur.top));
        el.stage.style.left = Math.round(l - w.left) + 'px';
        el.stage.style.top = Math.round(t - w.top) + 'px';
        saveBigPos();
      }
      else { justDragged = false; lastAct = Date.now(); toggleRing(); }
      setTimeout(function () { justDragged = false; }, 60);
    }
    el.stage.addEventListener('pointerup', end);
    el.stage.addEventListener('pointercancel', function () { active = false; });
  }
  /* ---------------- 拖动 ---------------- */
  function bindDrag(handle, surface, onDragEnd, onClick) {
    var startX = 0, startY = 0, ox = 0, oy = 0, active = false, moved = 0;
    handle.addEventListener('pointerdown', function (e) {
      if (e.button != null && e.button !== 0) return;
      active = true; moved = 0; justDragged = false;
      var r = el.wrap.getBoundingClientRect();
      startX = e.clientX; startY = e.clientY; ox = r.left; oy = r.top;
      try { handle.setPointerCapture(e.pointerId); } catch (err) { }
    });
    handle.addEventListener('pointermove', function (e) {
      if (!active) return;
      var dx = e.clientX - startX, dy = e.clientY - startY;
      moved = Math.max(moved, Math.abs(dx) + Math.abs(dy));
      if (moved < 5) return;
      justDragged = true;
      moveWrap(ox + dx, oy + dy);
    });
    function end(e) {
      if (!active) return;
      active = false;
      try { handle.releasePointerCapture(e.pointerId); } catch (err) { }
      if (moved > 6) { justDragged = true; if (onDragEnd) onDragEnd(); }
      else { justDragged = false; if (onClick) onClick(); }
      setTimeout(function () { justDragged = false; }, 60);
    }
    handle.addEventListener('pointerup', end);
    handle.addEventListener('pointercancel', function () { active = false; });
  }

  function moveWrap(l, t) {
    var w = el.wrap.offsetWidth || 300, h = el.wrap.offsetHeight || 320;
    l = Math.max(6, Math.min(window.innerWidth - w - 6, l));
    t = Math.max(6, Math.min(window.innerHeight - h - 6, t));
    el.wrap.style.left = l + 'px';
    el.wrap.style.top = t + 'px';
    el.wrap.style.right = 'auto';
    el.wrap.style.bottom = 'auto';
  }

  /* 双击大熊：回到默认位置（聊天框左边） */
  function resetBigPos() {
    setStore(K_BIGPOS, '');
    el.stage.style.left = '';
    el.stage.style.top = '';
    el.stage.style.right = '';
    el.stage.style.bottom = '';
    geometry();
  }
  function clampPos() {
    var r = el.wrap.getBoundingClientRect();
    if (r.left < 0 || r.top < 0 || r.left + r.width > window.innerWidth || r.top + r.height > window.innerHeight) {
      moveWrap(r.left, r.top);
    }
  }
  function savePos() {
    var r = el.wrap.getBoundingClientRect();
    setStore(K_POS, JSON.stringify({ left: Math.round(r.left), top: Math.round(r.top) }));
  }
  function restorePos() {
    var raw = getStore(K_POS, '');
    if (!raw) return;
    try {
      var p = JSON.parse(raw);
      if (typeof p.left === 'number' && typeof p.top === 'number') {
        el.wrap.style.left = p.left + 'px';
        el.wrap.style.top = p.top + 'px';
        el.wrap.style.right = 'auto';
        el.wrap.style.bottom = 'auto';
        setTimeout(clampPos, 0);
      }
    } catch (e) { }
  }

  /* ---------------- AI 聊天 ---------------- */
  function apiBase() {
    if (window.Cloud && typeof window.Cloud.apiBase === 'function') {
      try { return window.Cloud.apiBase() || ''; } catch (e) { }
    }
    return '';
  }
  function apiUrl(p) { return (apiBase() || '') + p; }

  function ctxLine() {
    var s = '';
    try {
      var st = window.__YL && window.__YL.state;
      if (st) {
        if (window.MAJORS) {
          var major = window.MAJORS.filter(function (m) { return m.id === st.majorId; })[0];
          if (major) s += '专业：' + major.name + '；';
        }
        if (st.levelId) s += '当前关卡：' + st.levelId + '；';
      }
    } catch (e) { }
    return s;
  }

  function localAnswer(q) {
    if (/换装|衣服|穿|围巾|眼镜/.test(q)) return '点我旁边的大熊，圆环里选肤色、眼镜、围巾、外套，选完会记住～';
    if (/重点|怎么学|方法/.test(q)) return '先把这一关的目标说清楚：看懂什么、动手做什么。不确定就点「这关重点是什么」，我按三句话讲。';
    if (/卡住|不会|难/.test(q)) return '卡住时先把问题缩小：哪一行报错、哪一步不懂。把报错发我，我陪你拆。';
    if (/多久|时间/.test(q)) return '一天 10 分钟，一学期就是一门课的量。先别追进度，先别断。';
    return '我在。你可以问这一关的重点、要装什么工具，或者告诉我卡在哪一步。';
  }

  function addMsg(role, text) {
    var d = document.createElement('div');
    d.className = 'pet-msg ' + (role === 'me' ? 'me' : 'ai');
    d.textContent = text;
    el.log.appendChild(d);
    el.log.scrollTop = el.log.scrollHeight;
    return d;
  }

  function send(text) {
    if (!built) return;
    addMsg('me', text);
    lastAct = Date.now();
    if (waiting) return;
    waiting = true;
    var t = addMsg('ai', '想想…');
    setHeadMood('think');
    t.classList.add('is-typing');
    fetch(apiUrl('/api/chat'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text, context: ctxLine() })
    }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }).then(function (j) {
      t.textContent = j.reply || j.text || localAnswer(text);
      if (el.sub && j.provider) el.sub.textContent = '在线 · ' + (j.model || j.provider);
    }).catch(function () {
      t.textContent = localAnswer(text);
      if (el.sub) el.sub.textContent = '只连着本地（未接大模型）';
    }).then(function () {
      t.classList.remove('is-typing');
      waiting = false;
      el.log.scrollTop = el.log.scrollHeight;
      setHeadMood('shy');
      setTimeout(function () { setHeadMood(isDay() ? 'wave' : 'sleepy'); }, 4000);
      lastAct = Date.now();
    });
  }

  function checkStatus() {
    fetch(apiUrl('/api/chat/status')).then(function (r) { return r.json(); }).then(function (j) {
      if (!el.sub) return;
      if (j && j.ready) el.sub.textContent = '在线 · ' + (j.model || j.provider || 'AI');
      else el.sub.textContent = '只连着本地（未接大模型）';
    }).catch(function () {
      if (el.sub) el.sub.textContent = '只连着本地';
    });
  }


  /* 不定时冒一句鼓励（不打断聊天输入） */
  var cheerTimer = null;
  function startCheer() {
    clearTimeout(cheerTimer);
    (function loop() {
      var wait = 45000 + Math.floor(Math.random() * 35000);
      cheerTimer = setTimeout(function () {
        try {
          if (built && !waiting) {
            var text = pick(tipList());
            if (!el.bubble.hidden) { /* 已有气泡，跳过这回 */ }
            else showBubble(text, 6000);
          }
        } catch (e) { }
        loop();
      }, wait);
    })();
  }
  function startIdleWatch() {
    clearInterval(idleTimer);
    idleTimer = setInterval(function () {
      if (!built) return;
      if (!el.panel.hidden && Date.now() - lastAct > 120000) {
        showBubble(pick(tipList()), 2600);
        setTimeout(function () { if (!el.panel.hidden) setMin(true); }, 2600);
      }
    }, 15000);
  }

  /* ---------------- 启动 ---------------- */
  function boot() {
    if (!document.body) return;
    loadLook();
    build();
    if (!built) return;
    applyLook();
    if (getStore(K_MIN, '1') === '1') {
      el.panel.hidden = true;
      el.stage.hidden = true;
    } else {
      el.panel.hidden = false;
      el.stage.hidden = false;
      geometry();
    }
    restorePos();
    checkStatus();
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
    ask: function (q) { setMin(false); send(q); },
    wardrobe: function (on) { if (on) { if (!ringOpen) toggleRing(); } else ringClose(); },
    ring: function () { toggleRing(); },
    arm: function (cat, angle) { openArm(cat, angle || -45); },
    look: function () { return JSON.parse(JSON.stringify(look)); },
    setLook: function (o) {
      if (!o) return;
      if (o.skin) look.skin = o.skin;
      if ('glasses' in o) look.glasses = o.glasses;
      if ('scarf' in o) look.scarf = o.scarf;
      if ('jacket' in o) look.jacket = o.jacket;
      saveLook(); applyLook();
    },
    random: function () {
      var g = GLASSES.filter(function (x) { return x.id; });
      var s = SCARVES.filter(function (x) { return x.id; });
      var j = JACKETS.filter(function (x) { return x.id; });
      look = {
        skin: pick(SKINS).id,
        glasses: Math.random() < 0.75 ? pick(g).id : '',
        scarf: Math.random() < 0.75 ? pick(s).id : '',
        jacket: Math.random() < 0.75 ? pick(j).id : ''
      };
      saveLook(); applyLook();
      return JSON.parse(JSON.stringify(look));
    },
    reset: function () {
      look = { skin: isDay() ? 'white' : 'black', glasses: '', scarf: '', jacket: '' };
      saveLook(); applyLook();
    }
  };
})();
