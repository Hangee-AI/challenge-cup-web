/* ==========================================================
   pet4.js · 「会动的小熊头」
   —— 保留原来的卡通熊头素材，动感来自：
      ① 上下悬浮（CSS）② 呼吸挤压（CSS）③ 表情轮换 ④ 眨眼（切闭眼帧）
      ⑤ 眼神/身体跟着鼠标歪 ⑥ 点击弹跳 ⑦ 拖拽压扁 ⑧ 空闲随机小动作
   ========================================================== */
(function () {
  'use strict';

  var BASE = 'assets/pet/head/head-';
  /* 白天用白熊：1 招手眨眼 / 2 撒花 / 5 犯困 / 6 护目镜 / 7 疑问 */
  var DAY = [1, 2, 5, 7];
  var DAY_BLINK = 4;      /* 闭眼笑，当眨眼帧 */
  /* 夜间用黑熊：3 举手 / 8 转圈（都是深色） */
  var NIGHT = [3, 8];
  var NIGHT_BLINK = 3;

  var K_POS = 'pet4_pos';
  var K_SIZE = 'pet4_size';
  var IDLE_MS = 20000;
  var DRAG_THRESHOLD = 4;

  var el = {};
  var mode = 'mini';
  var mouse = { x: innerWidth * 0.7, y: innerHeight * 0.7 };
  var drag = null;
  var timers = { idle: null, blob: null, expr: null, bubble: null, blink: null };
  var curFace = 1;
  var openMenuRef = null;   /* bind() 里赋值的右键菜单函数 */
  var quietUntil = 0;   /* 右键"安静 10 分钟"期间不乱眨眼/不提醒 */

  function $(id) { return document.getElementById(id); }
  function isDay() { var h = new Date().getHours(); return h >= 6 && h < 18; }
  function pool() { return isDay() ? DAY : NIGHT; }
  function blinkFace() { return isDay() ? DAY_BLINK : NIGHT_BLINK; }

  function build() {
    if (document.getElementById('pet4')) return;

    var root = document.createElement('div');
    root.className = 'pet4';
    root.id = 'pet4';
    root.innerHTML =
      '<div class="pet4-bubble" id="pet4Bubble"></div>' +
      '<div class="pet4-float">' +
        '<div class="pet4-shadow" id="pet4Shadow"></div>' +
        '<div class="pet4-orb" id="pet4Orb">' +
          '<img class="pet4-head" id="pet4Head" alt="" draggable="false">' +
        '</div>' +
      '</div>';
    document.body.appendChild(root);

    el.root = root;
    el.bubble = $('pet4Bubble');
    el.shadow = $('pet4Shadow');
    el.orb = $('pet4Orb');
    el.head = $('pet4Head');

    var pos = load(K_POS);
    if (pos && typeof pos.right === 'number') {
      root.style.right = pos.right + 'px';
      root.style.bottom = pos.bottom + 'px';
    }

    curFace = pool()[0];
    paint();
    bind();
    setMode(load(K_SIZE) || 'mini', true);
    startBlink();
    startExpr();
    startBlob();
  }

  function load(k) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch (e) { return null; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  function paint() {
    el.head.src = BASE + curFace + '.png';
  }

  /* ---------------- 形态 ---------------- */
  function setMode(next, silent) {
    mode = next;
    el.root.classList.toggle('is-big', next === 'big');
    if (!silent) save(K_SIZE, next);
    if (next === 'big') { play('hop'); resetIdle(); say('我在。'); }
    else { stopIdle(); }
    shadowSync();
  }

  function shadowSync() {
    /* 悬浮时影子变小变淡，落地变大——给出"有重量"的错觉 */
    if (!el.shadow) return;
    el.shadow.style.opacity = '1';
  }

  /* ---------------- 动作 ---------------- */
  var actTimer = null;
  function play(name, ms) {
    var cls = 'is-' + name;
    el.orb.classList.remove('is-hop', 'is-wobble', 'is-squash');
    void el.orb.offsetWidth;
    el.orb.classList.add(cls);
    if (actTimer) clearTimeout(actTimer);
    actTimer = setTimeout(function () { el.orb.classList.remove(cls); }, ms || 900);
  }

  /* ---------------- 表情轮换（让"脸"不那么死） ---------------- */
  function startExpr() {
    stopTimer('expr');
    (function loop() {
      var wait = 3200 + Math.random() * 2600;
      timers.expr = setTimeout(function () {
        if (!document.hidden) {
          var p = pool();
          var next = p[Math.floor(Math.random() * p.length)];
          if (next !== curFace) { curFace = next; paint(); }
        }
        loop();
      }, wait);
    })();
  }

  /* ---------------- 眨眼：切到闭眼帧 120ms ---------------- */
  function blinkOnce() {
    var keep = curFace;
    var bf = blinkFace();
    if (bf === keep) {
      /* 没有闭眼帧时用纵向压扁兜底 */
      el.head.style.transition = 'transform .09s ease';
      el.head.style.transform = 'scaleY(.88)';
      setTimeout(function () { el.head.style.transform = ''; }, 110);
      return;
    }
    el.head.src = BASE + bf + '.png';
    clearTimeout(timers.blink);
    timers.blink = setTimeout(function () { el.head.src = BASE + keep + '.png'; }, 120);
  }
  function startBlink() {
    (function loop() {
      var wait = 2400 + Math.random() * 3600;
      timers.blink0 = setTimeout(function () {
        if (!document.hidden && Date.now() >= quietUntil) blinkOnce();
        loop();
      }, wait);
    })();
  }

  /* ---------------- 跟随鼠标 ---------------- */
  var lastMove = 0;
  function followMouse() {
    var r = el.orb.getBoundingClientRect();
    var cx = r.left + r.width / 2;
    var cy = r.top + r.height / 2;
    var dx = mouse.x - cx, dy = mouse.y - cy;
    var dist = Math.hypot(dx, dy) || 1;
    var nx = dx / dist, ny = dy / dist;

    var amp = mode === 'big' ? 9 : 6;
    var mx = Math.max(-amp, Math.min(amp, nx * amp));
    var my = Math.max(-amp * 0.8, Math.min(amp * 0.8, ny * amp * 0.8));
    var mt = Math.max(-6, Math.min(6, nx * 6));
    el.orb.style.setProperty('--mx', mx.toFixed(1) + 'px');
    el.orb.style.setProperty('--my', my.toFixed(1) + 'px');
    el.orb.style.setProperty('--mt', mt.toFixed(1) + 'deg');

    /* 影子反向偏移，强化"被吸过去"的感觉 */
    if (el.shadow) el.shadow.style.transform = 'translateX(' + (-mx * 0.35).toFixed(1) + 'px) scale(' + (1 - Math.abs(my) / 200).toFixed(3) + ')';
  }

  /* ---------------- 空闲小动作 ---------------- */
  function startBlob() {
    stopTimer('blob');
    (function loop() {
      var wait = 6000 + Math.random() * 6000;
      timers.blob = setTimeout(function () {
        if (!document.hidden && mode) {
          var poolA = ['hop', 'wobble', 'squash'];
          play(poolA[Math.floor(Math.random() * poolA.length)]);
        }
        loop();
      }, wait);
    })();
  }
  function stopTimer(name) { if (timers[name]) { clearTimeout(timers[name]); timers[name] = null; } }

  function resetIdle() {
    stopIdle();
    timers.idle = setTimeout(function () { if (mode === 'big') setMode('mini'); }, IDLE_MS);
  }
  function stopIdle() { stopTimer('idle'); }

  /* ---------------- 拖拽 ---------------- */
  function bind() {
    var start = null, moved = false, base = { right: 26, bottom: 24 };

    el.orb.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      start = { x: e.clientX, y: e.clientY };
      moved = false;
      var st = getComputedStyle(el.root);
      base = { right: parseFloat(st.right) || 26, bottom: parseFloat(st.bottom) || 24 };
      try { el.orb.setPointerCapture(e.pointerId); } catch (err) {}
      play('squash', 600);
    });

    el.orb.addEventListener('pointermove', function (e) {
      if (!start) return;
      var dx = e.clientX - start.x, dy = e.clientY - start.y;
      if (!moved && Math.abs(dx) + Math.abs(dy) < DRAG_THRESHOLD) return;
      moved = true;
      el.root.style.right = Math.max(4, base.right - dx) + 'px';
      el.root.style.bottom = Math.max(4, base.bottom - dy) + 'px';
    });

    function endDrag(e) {
      if (!start) return;
      var was = moved;
      start = null;
      if (was) {
        var st = getComputedStyle(el.root);
        save(K_POS, { right: parseFloat(st.right) || 26, bottom: parseFloat(st.bottom) || 24 });
        play('wobble', 700);
      } else {
        setMode(mode === 'big' ? 'mini' : 'big');
      }
    }
    el.orb.addEventListener('pointerup', endDrag);
    el.orb.addEventListener('pointercancel', function () { start = null; });

    document.addEventListener('mousemove', function (e) {
      mouse.x = e.clientX; mouse.y = e.clientY;
      var now = Date.now();
      if (now - lastMove < 16) return;
      lastMove = now;
      followMouse();
      if (mode === 'big') resetIdle();
    }, { passive: true });

    /* ---- 双击：说一句鼓励（不需要新素材，但"有反应"） ---- */
    el.orb.addEventListener('dblclick', function (e) {
      e.preventDefault();
      var lines = [
        '慢一点也没关系，你还在走。',
        '今天已经比昨天多懂一点了。',
        '卡住的时候，先做最小的那一步。',
        '歇一会儿，眼睛也要休息。',
        '我在右下角，随时喊我。'
      ];
      play('wobble');
      say(lines[Math.floor(Math.random() * lines.length)]);
    });

    /* ---- 右键菜单：像桌面宠物一样"可操作" ---- */
    var MENU = [
      { t: '💬 说句话', f: function () { say(['加油！', '别硬撑，先歇 10 分钟。', '把这关做完就休息。'][Math.floor(Math.random() * 3)]); play('hop'); } },
      { t: '🎯 随机换个表情', f: function () { var p = pool(); curFace = p[Math.floor(Math.random() * p.length)]; paint(); play('squash'); } },
      { t: '👀 看你一眼', f: function () { play('wobble'); say('我在看你呢。'); } },
      { t: '↕️ 变大 / 变小', f: function () { setMode(mode === 'big' ? 'mini' : 'big'); } },
      { t: '🙈 安静 10 分钟', f: function () { quietUntil = Date.now() + 10 * 60 * 1000; el.root.style.opacity = '.45'; say('好，我先安静一会儿。'); } },
      { t: '👋 藏起来', f: function () { el.root.style.display = 'none'; setTimeout(function () { el.root.style.display = ''; say('我回来了。'); }, 20000); } }
    ];

    el.orb.addEventListener('contextmenu', function (e) {
      e.preventDefault();
      openMenu(e.clientX, e.clientY);
    });

    function openMenu(x, y) {
      closeMenu();
      var m = document.createElement('div');
      m.className = 'pet4-menu';
      m.id = 'pet4Menu';
      MENU.forEach(function (it) {
        var b = document.createElement('button');
        b.type = 'button';
        b.textContent = it.t;
        b.addEventListener('click', function (ev) {
          ev.stopPropagation();
          closeMenu();
          if (it.t.indexOf('安静') === 0) { quietUntil = Date.now() + 10 * 60 * 1000; el.root.style.opacity = '.45'; say('好，我先安静一会儿。'); return; }
          it.f();
        });
        m.appendChild(b);
      });
      m.style.left = Math.min(x, innerWidth - 190) + 'px';
      m.style.top = Math.min(y, innerHeight - 240) + 'px';
      document.body.appendChild(m);
      setTimeout(function () {
        document.addEventListener('click', closeMenu, { once: true });
      }, 0);
    }
    function closeMenu() {
      var m = document.getElementById('pet4Menu');
      if (m) m.remove();
    }
    openMenuRef = openMenu;

    /* ---- 喝水 / 休息提醒（像 pink-bear 的定时提醒） ---- */
    var waterAt = Date.now() + 40 * 60 * 1000;
    var restAt = Date.now() + 70 * 60 * 1000;
    setInterval(function () {
      if (document.hidden || Date.now() < quietUntil) return;
      var now = Date.now();
      if (now > waterAt) {
        waterAt = now + 40 * 60 * 1000;
        openBubble('该喝水啦，一口也行。'); play('hop');
      } else if (now > restAt) {
        restAt = now + 70 * 60 * 1000;
        openBubble('坐太久了，站起来走两步。'); play('wobble');
      }
    }, 30000);

    window.addEventListener('resize', followMouse);
  }

  /* ---------------- 气泡 ---------------- */
  function say(text, ms) {
    if (!el.bubble) return;
    el.bubble.textContent = text;
    el.bubble.classList.add('is-on');
    clearTimeout(timers.bubble);
    timers.bubble = setTimeout(function () { el.bubble.classList.remove('is-on'); }, ms || 4200);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();

  window.Pet4 = {
    open: function () { setMode('big'); },
    close: function () { setMode('mini'); },
    mode: function () { return mode; },
    face: function () { return curFace; },
    blink: blinkOnce,
    play: play,
    say: say,
    menu: function () { if (openMenuRef) openMenuRef(innerWidth - 220, innerHeight - 260); },
    nextFace: function () { var p = pool(); curFace = p[(p.indexOf(curFace) + 1) % p.length]; paint(); return curFace; }
  };
})();