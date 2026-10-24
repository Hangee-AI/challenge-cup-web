/* ==========================================================
   pet2.js · 学习搭子「小引」（真实素材版）
   迷你头像 = 8 个卡通表情轮换；点开头像 → 大熊 + 圆环换装
   大熊 = 四图层叠加：本体 → 围巾 → 外套 → 眼镜
   素材目录：assets/pet4-aligned/<layer>/<file>.png（400x400）
   素材规格见 assets/pet4/README.md
   ========================================================== */
(function () {
  'use strict';

  var BASE = 'assets/pet4-aligned/';
  var HEADS = [
    'assets/pet/cartoon-1.png', 'assets/pet/cartoon-2.png',
    'assets/pet/cartoon-3.png', 'assets/pet/cartoon-4.png',
    'assets/pet/cartoon-5.png', 'assets/pet/cartoon-6.png',
    'assets/pet/cartoon-7.png', 'assets/pet/cartoon-8.png'
  ];

  var SKINS = [
    { id: 'white', name: '雪白', file: 'body-white.png' },
    { id: 'black', name: '墨黑', file: 'body-black.png' },
    { id: 'brown', name: '栗棕', file: 'body-brown.png' },
    { id: 'pink',  name: '樱粉', file: 'body-pink.png' }
  ];
  var GLASSES = [
    { id: 'none',          name: '不戴',     file: '' },
    { id: 'gl-brown',      name: '复古皮框', file: 'gl-brown.png' },
    { id: 'gl-purple',     name: '紫护目镜', file: 'gl-purple.png' },
    { id: 'gl-blackgoggle',name: '黑护目镜', file: 'gl-blackgoggle.png' },
    { id: 'gl-whitegoggle',name: '白护目镜', file: 'gl-whitegoggle.png' },
    { id: 'gl-blacksq',    name: '黑方框',   file: 'gl-blacksq.png' },
    { id: 'gl-whitesq',    name: '白方框',   file: 'gl-whitesq.png' }
  ];
  var SCARVES = [
    { id: 'none',     name: '不围',   file: '' },
    { id: 'sc-black', name: '纯黑',   file: 'sc-black.png' },
    { id: 'sc-check', name: '黑白棋盘', file: 'sc-check.png' },
    { id: 'sc-neon',  name: '荧光黑', file: 'sc-neon.png' },
    { id: 'sc-tip',   name: '白边黑', file: 'sc-tip.png' }
  ];
  /* 外套 4 张素材还在重出（原图自带躯干），到位后把 file 填上、把 pending 去掉即可 */
  var JACKETS = [
    { id: 'none',       name: '不穿',   file: '' }
  ];
  var JACKETS_PENDING = true;

  var K_LOOK = 'pet2_look';
  var K_FORM = 'pet2_form';
  var K_POS  = 'pet2_pos';
  var K_BIG  = 'pet2_bigpos';
  var IDLE_MS = 20000;
  var DRAG_THRESHOLD = 4;

  var el = {};
  var look = { skin: 'white', glasses: 'none', scarf: 'none', jacket: 'none' };
  var bigPos = { dx: 0, dy: 0 };
  var form = 'mini';
  var openCat = '';
  var idleTimer = null;
  var headTimer = null;
  var drag = null;
  var bubbleTimer = null;

  function $(id) { return document.getElementById(id); }
  function isDay() { var h = new Date().getHours(); return h >= 6 && h < 18; }

  function loadJSON(k, dft) {
    try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : dft; } catch (e) { return dft; }
  }
  function saveJSON(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  function fileOf(list, id) {
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i].file;
    return '';
  }

  /* ---------------- 构建 DOM ---------------- */
  function build() {
    if (el.root && document.getElementById('pet2')) return;

    var root = document.createElement('div');
    root.className = 'pet2';
    root.id = 'pet2';
    root.innerHTML =
      '<div class="pet2-big" id="pet2Big" hidden>' +
        '<div class="pet2-stage" id="pet2Stage">' +
          '<img class="pet2-layer" data-layer="body"    alt="" />' +
          '<img class="pet2-layer" data-layer="scarf"   alt="" hidden />' +
          '<img class="pet2-layer" data-layer="jacket"  alt="" hidden />' +
          '<img class="pet2-layer" data-layer="glasses" alt="" hidden />' +
          '<div class="pet2-ring" id="pet2Ring" hidden></div>' +
          '<div class="pet2-arm" id="pet2Arm" hidden></div>' +
        '</div>' +
      '</div>' +
      '<div class="pet2-mini" id="pet2Mini"><img id="pet2Head" alt="小引" /></div>' +
      '<div class="pet2-bubble" id="pet2Bubble"></div>';
    document.body.appendChild(root);

    el.root = root;
    el.mini = $('pet2Mini');
    el.head = $('pet2Head');
    el.big = $('pet2Big');
    el.stage = $('pet2Stage');
    el.ring = $('pet2Ring');
    el.arm = $('pet2Arm');
    el.bubble = $('pet2Bubble');
    el.body = root.querySelector('[data-layer="body"]');
    el.scarf = root.querySelector('[data-layer="scarf"]');
    el.jacket = root.querySelector('[data-layer="jacket"]');
    el.glasses = root.querySelector('[data-layer="glasses"]');

    buildRing();
    bindEvents();
  }

  var CATS = [
    { key: 'skin',    label: '肤色', a: -135 },
    { key: 'glasses', label: '眼镜', a: -45 },
    { key: 'scarf',   label: '围巾', a: 135 },
    { key: 'jacket',  label: '外套', a: 45 }
  ];

  function buildRing() {
    el.ring.innerHTML = '';
    CATS.forEach(function (c) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'pet2-cat';
      b.setAttribute('data-cat', c.key);
      b.style.setProperty('--a', c.a + 'deg');
      b.textContent = c.label;
      if (c.key === 'jacket' && JACKETS_PENDING) {
        b.classList.add('is-off');
        b.title = '外套素材正在重出，很快就来';
      }
      el.ring.appendChild(b);
    });
  }

  /* ---------------- 应用穿搭 ---------------- */
  function applyLook() {
    var bf = fileOf(SKINS, look.skin) || 'body-white.png';
    el.body.src = BASE + 'body/' + bf;

    var lyr = [
      { node: el.scarf,   file: fileOf(SCARVES, look.scarf),   dir: 'scarf' },
      { node: el.jacket,  file: fileOf(JACKETS, look.jacket),  dir: 'jacket' },
      { node: el.glasses, file: fileOf(GLASSES, look.glasses), dir: 'glasses' }
    ];
    lyr.forEach(function (o) {
      if (o.file) {
        o.node.src = BASE + o.dir + '/' + o.file;
        o.node.hidden = false;
      } else {
        o.node.hidden = true;
      }
    });
  }

  /* ---------------- 迷你头像表情 ---------------- */
  function setHead(idx) {
    if (!el.head) return;
    el.head.src = HEADS[idx % HEADS.length];
  }
  function headForNow() {
    /* 夜间默认黑熊皮肤 → 用黑色的卡通头；白天用白熊头 */
    if (!isDay()) return Math.random() < 0.5 ? 7 : 2;   /* 黑：转圈 / 疑惑 */
    return Math.random() < 0.5 ? 0 : 3;                  /* 白：招手 / 闭眼笑 */
  }
  function startHeadRotate() {
    stopHeadRotate();
    setHead(headForNow());
    headTimer = setInterval(function () {
      if (form !== 'mini') return;
      if (Math.random() < 0.45) setHead(headForNow());
    }, 26000);
  }
  function stopHeadRotate() { if (headTimer) { clearInterval(headTimer); headTimer = null; } }

  /* ---------------- 形态切换 ---------------- */
  function setForm(next) {
    form = next;
    if (next === 'big') {
      el.big.hidden = false;
      el.mini.style.display = 'none';
      hideBubble();
      applyLook();
      applyBigOffset();
      resetIdle();
    } else {
      el.big.hidden = true;
      el.mini.style.display = '';
      hideRing();
      stopIdle();
      startHeadRotate();
      saveJSON(K_FORM, 'mini');
    }
  }

  function openBig() { setForm('big'); saveJSON(K_FORM, 'big'); }
  function closeBig() { setForm('mini'); }

  /* ---------------- 圆环 / 选项 ---------------- */
  function showRing() {
    if (!el.ring) return;
    el.ring.hidden = false;
    layoutRing();
  }
  function hideRing() {
    openCat = '';
    if (el.ring) el.ring.hidden = true;
    if (el.arm) el.arm.hidden = true;
    if (el.ring) {
      Array.prototype.forEach.call(el.ring.children, function (b) { b.classList.remove('is-on'); });
    }
  }
  function toggleRing() { if (el.ring.hidden) showRing(); else hideRing(); }

  function layoutRing() {
    if (!el.ring || el.ring.hidden) return;
    var w = el.stage.clientWidth || 250;
    el.ring.style.left = (w / 2) + 'px';
    el.ring.style.top  = (w * 0.46) + 'px';
  }

  function openArm(catKey) {
    if (catKey === 'jacket' && JACKETS_PENDING) return;
    openCat = catKey;
    var list = catKey === 'skin' ? SKINS : catKey === 'glasses' ? GLASSES : catKey === 'scarf' ? SCARVES : JACKETS;
    var cur = catKey === 'skin' ? look.skin : catKey === 'glasses' ? look.glasses : catKey === 'scarf' ? look.scarf : look.jacket;
    var btn = el.ring.querySelector('[data-cat="' + catKey + '"]');
    var ang = btn ? parseFloat(btn.style.getPropertyValue('--a')) : 0;

    Array.prototype.forEach.call(el.ring.children, function (b) {
      b.classList.toggle('is-on', b.getAttribute('data-cat') === catKey);
    });

    el.arm.innerHTML = '';
    el.arm.hidden = false;
    var d0 = 150, gap = 58;
    list.forEach(function (item, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'pet2-opt' + (item.id === cur ? ' is-on' : '');
      b.title = item.name;
      b.setAttribute('data-cat', catKey);
      b.setAttribute('data-id', item.id);
      var d = d0 + i * gap;
      b.style.transform = 'rotate(' + ang + 'deg) translateY(-' + d + 'px) rotate(' + (-ang) + 'deg)';
      b.style.left = '0px';
      b.style.top = '0px';
      if (item.file) {
        var im = document.createElement('img');
        im.src = BASE + (catKey === 'skin' ? 'body/' : catKey === 'glasses' ? 'glasses/' : catKey === 'scarf' ? 'scarf/' : 'jacket/') + item.file;
        im.alt = item.name;
        b.appendChild(im);
      } else {
        var s = document.createElement('span');
        s.className = 'pet2-opt-none';
        s.textContent = item.name;
        b.appendChild(s);
      }
      el.arm.appendChild(b);
    });
    positionArm(ang, list.length);
  }

  function positionArm(ang, n) {
    if (!el.arm) return;
    var w = el.stage.clientWidth || 250;
    el.arm.style.left = (w / 2) + 'px';
    el.arm.style.top  = (w * 0.46) + 'px';
  }

  function selectOption(catKey, id) {
    look[catKey] = id;
    saveJSON(K_LOOK, look);
    applyLook();
    openArm(catKey);
  }

  function randomLook() {
    look.skin = SKINS[Math.floor(Math.random() * SKINS.length)].id;
    look.glasses = GLASSES[Math.floor(Math.random() * GLASSES.length)].id;
    look.scarf = SCARVES[Math.floor(Math.random() * SCARVES.length)].id;
    saveJSON(K_LOOK, look);
    applyLook();
  }

  /* ---------------- 拖拽 ---------------- */
  function bindDrag(node, onStart, onMove, onEnd) {
    node.addEventListener('pointerdown', function (e) {
      if (e.button !== undefined && e.button !== 0) return;
      var rect = node.getBoundingClientRect();
      drag = { id: e.pointerId, x: e.clientX, y: e.clientY, moved: false, base: onStart(rect) };
      node.setPointerCapture && node.setPointerCapture(e.pointerId);
      e.preventDefault();
    });
    node.addEventListener('pointermove', function (e) {
      if (!drag || e.pointerId !== drag.id) return;
      var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (!drag.moved && Math.abs(dx) + Math.abs(dy) < DRAG_THRESHOLD) return;
      drag.moved = true;
      onMove(drag.base, dx, dy);
      e.preventDefault();
    });
    function finish(e) {
      if (!drag || (e && e.pointerId !== drag.id)) return;
      var moved = drag.moved;
      drag = null;
      if (typeof onEnd === 'function') onEnd(moved);
    }
    node.addEventListener('pointerup', finish);
    node.addEventListener('pointercancel', finish);
  }

  function applyBigOffset() {
    el.big.style.transform = 'translate(' + bigPos.dx + 'px,' + bigPos.dy + 'px)';
  }

  function bindEvents() {
    /* 迷你头像：点击展开、拖动整体 */
    var miniStart = null, miniMoved = false, miniBase = { right: 26, bottom: 26 };
    el.mini.addEventListener('pointerdown', function (e) {
      if (e.button !== undefined && e.button !== 0) return;
      miniStart = { x: e.clientX, y: e.clientY };
      miniMoved = false;
      var st = getComputedStyle(el.root);
      miniBase = { right: parseFloat(st.right) || 26, bottom: parseFloat(st.bottom) || 26 };
      el.mini.setPointerCapture && el.mini.setPointerCapture(e.pointerId);
    });
    el.mini.addEventListener('pointermove', function (e) {
      if (!miniStart) return;
      var dx = e.clientX - miniStart.x, dy = e.clientY - miniStart.y;
      if (!miniMoved && Math.abs(dx) + Math.abs(dy) < DRAG_THRESHOLD) return;
      miniMoved = true;
      var r = Math.max(4, miniBase.right - dx);
      var b = Math.max(4, miniBase.bottom - dy);
      el.root.style.right = r + 'px';
      el.root.style.bottom = b + 'px';
      el.root.style.left = 'auto';
      el.root.style.top = 'auto';
    });
    function miniFinish() {
      if (!miniStart) return;
      var moved = miniMoved;
      miniStart = null;
      if (moved) {
        var st = getComputedStyle(el.root);
        saveJSON(K_POS, { right: parseFloat(st.right) || 26, bottom: parseFloat(st.bottom) || 26 });
      } else {
        openBig();
      }
    }
    el.mini.addEventListener('pointerup', miniFinish);
    el.mini.addEventListener('pointercancel', function () { miniStart = null; });

    /* 大熊：拖动只移动自己；单击展开/收起圆环 */
    var bigStart = null, bigMoved = false;
    el.big.addEventListener('pointerdown', function (e) {
      if (e.button !== undefined && e.button !== 0) return;
      bigStart = { x: e.clientX, y: e.clientY };
      bigMoved = false;
      el.big.setPointerCapture && el.big.setPointerCapture(e.pointerId);
    });
    el.big.addEventListener('pointermove', function (e) {
      if (!bigStart) return;
      var dx = e.clientX - bigStart.x, dy = e.clientY - bigStart.y;
      if (!bigMoved && Math.abs(dx) + Math.abs(dy) < DRAG_THRESHOLD) return;
      bigMoved = true;
      bigPos.dx = dx; bigPos.dy = dy;
      applyBigOffset();
    });
    function bigFinish() {
      if (!bigStart) return;
      var moved = bigMoved;
      bigStart = null;
      if (moved) {
        saveJSON(K_BIG, bigPos);
      } else {
        toggleRing();
      }
    }
    el.big.addEventListener('pointerup', bigFinish);
    el.big.addEventListener('pointercancel', function () { bigStart = null; });

    /* 圆环 / 选项 */
    el.ring.addEventListener('click', function (e) {
      var b = e.target.closest && e.target.closest('.pet2-cat');
      if (!b) return;
      var key = b.getAttribute('data-cat');
      if (openCat === key) { hideRing(); return; }
      openArm(key);
    });
    el.arm.addEventListener('click', function (e) {
      var b = e.target.closest && e.target.closest('.pet2-opt');
      if (!b) return;
      selectOption(b.getAttribute('data-cat'), b.getAttribute('data-id'));
    });

    /* 点空白处收起圆环 */
    document.addEventListener('click', function (e) {
      if (el.big.hidden) return;
      if (el.root.contains(e.target)) return;
      hideRing();
    });

    window.addEventListener('resize', function () { layoutRing(); });

    /* 闲置：20 秒无鼠标/键盘/滚动 → 收回迷你 */
    ['mousemove', 'keydown', 'wheel', 'touchstart'].forEach(function (ev) {
      document.addEventListener(ev, function () {
        if (form === 'big') resetIdle();
      }, { passive: true });
    });
  }

  function resetIdle() {
    stopIdle();
    idleTimer = setTimeout(function () { closeBig(); }, IDLE_MS);
  }
  function stopIdle() { if (idleTimer) { clearTimeout(idleTimer); idleTimer = null; } }

  /* ---------------- 气泡 ---------------- */
  var DAY_TIPS = [
    '今天也一起往前挪一点吧。',
    '先做完这一小关，再休息。',
    '卡住的时候，点开大熊换身衣服也行。',
    '不用一开始就很快，先把路走顺。',
    '你觉得难的部分，通常就是最值钱的部分。'
  ];
  var NIGHT_TIPS = [
    '夜深了，屏幕亮度调低一点。',
    '再学 20 分钟就睡吧，明天还有力气。',
    '护目镜戴起来，眼睛也要照顾。',
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

    look = loadJSON(K_LOOK, null) || { skin: isDay() ? 'white' : 'black', glasses: 'none', scarf: 'none', jacket: 'none' };
    if (!fileOf(SKINS, look.skin)) look.skin = isDay() ? 'white' : 'black';

    var pos = loadJSON(K_POS, null);
    if (pos && typeof pos.right === 'number') {
      el.root.style.right = pos.right + 'px';
      el.root.style.bottom = pos.bottom + 'px';
      el.root.style.left = 'auto';
      el.root.style.top = 'auto';
    }
    var bp = loadJSON(K_BIG, null);
    if (bp) { bigPos.dx = bp.dx || 0; bigPos.dy = bp.dy || 0; }

    applyLook();
    startHeadRotate();

    var savedForm = loadJSON(K_FORM, 'mini');
    if (savedForm === 'big') setForm('big'); else setForm('mini');

    setTimeout(function () {
      showBubble(isDay() ? '点我，可以给我换衣服。' : '夜猫模式：护目镜已就位。', 6000);
    }, 2600);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* 对外接口（便于自测/以后接 AI） */
  window.Pet2 = {
    open: function () { openBig(); },
    close: function () { closeBig(); },
    ring: function () { showRing(); },
    hideRing: hideRing,
    look: function () { return look; },
    setLook: function (o) { Object.keys(o || {}).forEach(function (k) { if (k in look) look[k] = o[k]; }); saveJSON(K_LOOK, look); applyLook(); },
    random: randomLook,
    tip: showBubble,
    form: function () { return form; }
  };
})();