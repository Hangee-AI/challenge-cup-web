/* ==========================================================
   pet3.js · 「光球小引」——纯 CSS/JS 绘制，本来就"活的"
   呼吸形变 / 光晕 / 眨眼 / 眼神跟随鼠标 / 鼠标吸引 / 点击弹跳 / 拖拽挤压
   （不依赖任何图片素材）
   ========================================================== */
(function () {
  'use strict';

  var K_POS = 'pet3_pos';
  var K_SIZE = 'pet3_size';       /* 'mini' | 'big' */
  var IDLE_MS = 20000;
  var DRAG_THRESHOLD = 4;

  var el = {};
  var mode = 'mini';
  var mouse = { x: innerWidth * 0.72, y: innerHeight * 0.72 };
  var drag = null;
  var idleTimer = null, blobTimer = null, bubbleTimer = null;

  function $(id) { return document.getElementById(id); }

  function build() {
    if (document.getElementById('pet3')) return;
    var root = document.createElement('div');
    root.className = 'pet3';
    root.id = 'pet3';
    root.innerHTML =
      '<div class="pet3-bubble" id="pet3Bubble"></div>' +
      '<div class="pet3-float">' +
        '<div class="pet3-orb" id="pet3Orb">' +
          '<div class="pet3-halo"></div>' +
          '<div class="pet3-body"><div class="pet3-eyes"><i class="pet3-eye l"></i><i class="pet3-eye r"></i></div></div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(root);

    el.root = root;
    el.bubble = $('pet3Bubble');
    el.orb = $('pet3Orb');
    el.body = root.querySelector('.pet3-body');
    el.eyes = root.querySelector('.pet3-eyes');

    var pos = load(K_POS);
    if (pos && typeof pos.right === 'number') {
      root.style.right = pos.right + 'px';
      root.style.bottom = pos.bottom + 'px';
    }
    bind();
    setMode(load(K_SIZE) || 'mini', true);
    startBlink();      /* 随机眨眼（比固定节奏更活） */
    startBlob();
  }

  function load(k) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch (e) { return null; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  /* ---------------- 形态 ---------------- */
  function setMode(next, silent) {
    mode = next;
    el.orb.classList.toggle('pet3-big', next === 'big');
    if (!silent) save(K_SIZE, next);
    if (next === 'big') { play('hop'); resetIdle(); }
    else { stopIdle(); }
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

  /* ---------------- 随机眨眼（每个周期不等长） ---------------- */
  function blinkOnce() {
    var eyes = el.eyes.querySelectorAll('.pet3-eye');
    eyes.forEach(function (e) {
      e.style.animation = 'none';
      e.style.transform = 'scaleY(.1)';
    });
    setTimeout(function () {
      eyes.forEach(function (e) {
        e.style.transform = '';
        e.style.animation = '';
      });
    }, 130);
  }
  function startBlink() {
    (function loop() {
      var wait = 2600 + Math.random() * 3800;
      setTimeout(function () {
        if (!document.hidden) blinkOnce();
        loop();
      }, wait);
    })();
  }

  /* ---------------- 眼神 + 身体跟随鼠标 ---------------- */
  var last = 0;
  function followMouse() {
    var r = el.orb.getBoundingClientRect();
    var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    var dx = mouse.x - cx, dy = mouse.y - cy;
    var dist = Math.hypot(dx, dy) || 1;
    var nx = dx / dist, ny = dy / dist;

    /* 球体朝鼠标方向轻微移动 + 倾斜 */
    var pullX = Math.max(-7, Math.min(7, nx * 7));
    var pullY = Math.max(-5, Math.min(5, ny * 5));
    var tilt = Math.max(-4, Math.min(4, nx * 4));
    el.orb.style.setProperty('--mx', pullX.toFixed(1) + 'px');
    el.orb.style.setProperty('--my', pullY.toFixed(1) + 'px');
    el.orb.style.setProperty('--mt', tilt.toFixed(1) + 'deg');

    /* 眼睛比身体更"追"一点（最多 5px） */
    var ex = Math.max(-5, Math.min(5, nx * 5.2));
    var ey = Math.max(-4, Math.min(4, ny * 4.2));
    el.eyes.style.setProperty('--ex', ex.toFixed(1) + 'px');
    el.eyes.style.setProperty('--ey', ey.toFixed(1) + 'px');
  }

  /* ---------------- 空闲小动作 ---------------- */
  function startBlob() {
    stopBlob();
    blobTimer = setInterval(function () {
      if (document.hidden) return;
      var pool = ['wobble', 'hop', 'squash'];
      play(pool[Math.floor(Math.random() * pool.length)]);
    }, 7000 + Math.random() * 6000);
  }
  function stopBlob() { if (blobTimer) { clearInterval(blobTimer); blobTimer = null; } }

  /* ---------------- 闲置收回 ---------------- */
  function resetIdle() {
    stopIdle();
    idleTimer = setTimeout(function () { if (mode === 'big') setMode('mini'); }, IDLE_MS);
  }
  function stopIdle() { if (idleTimer) { clearTimeout(idleTimer); idleTimer = null; } }

  /* ---------------- 拖拽（带挤压反馈） ---------------- */
  function bind() {
    var start = null, moved = false, base = { right: 26, bottom: 24 };

    el.orb.addEventListener('pointerdown', function (e) {
      if (e.button !== undefined && e.button !== 0) return;
      start = { x: e.clientX, y: e.clientY };
      moved = false;
      var st = getComputedStyle(el.root);
      base = { right: parseFloat(st.right) || 26, bottom: parseFloat(st.bottom) || 24 };
      el.orb.setPointerCapture && el.orb.setPointerCapture(e.pointerId);
      play('squash', 700);
    });

    el.orb.addEventListener('pointermove', function (e) {
      if (!start) return;
      var dx = e.clientX - start.x, dy = e.clientY - start.y;
      if (!moved && Math.abs(dx) + Math.abs(dy) < DRAG_THRESHOLD) return;
      moved = true;
      el.root.style.right = Math.max(4, base.right - dx) + 'px';
      el.root.style.bottom = Math.max(4, base.bottom - dy) + 'px';
    });

    function end() {
      if (!start) return;
      var wasMoved = moved;
      start = null;
      if (wasMoved) {
        var st = getComputedStyle(el.root);
        save(K_POS, { right: parseFloat(st.right) || 26, bottom: parseFloat(st.bottom) || 24 });
        play('wobble', 700);
      } else {
        /* 单击：mini ↔ big，并弹一下 */
        setMode(mode === 'big' ? 'mini' : 'big');
        play('hop');
        say(mode === 'big' ? '想聊什么？点我换形态。' : '我在右下角，随时喊我。');
      }
    }
    el.orb.addEventListener('pointerup', end);
    el.orb.addEventListener('pointercancel', function () { start = null; });

    document.addEventListener('mousemove', function (e) {
      mouse.x = e.clientX; mouse.y = e.clientY;
      var now = Date.now();
      if (now - last < 16) return;
      last = now;
      followMouse();
      if (mode === 'big') resetIdle();
    }, { passive: true });

    window.addEventListener('resize', followMouse);
  }

  /* ---------------- 气泡 ---------------- */
  function say(text, ms) {
    if (!el.bubble) return;
    el.bubble.textContent = text;
    el.bubble.classList.add('is-on');
    if (bubbleTimer) clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(function () { el.bubble.classList.remove('is-on'); }, ms || 5200);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();

  window.Pet3 = {
    open: function () { setMode('big'); },
    close: function () { setMode('mini'); },
    mode: function () { return mode; },
    play: play,
    blink: blinkOnce,
    say: say,
    look: function () { return { ex: el.eyes.style.getPropertyValue('--ex'), ey: el.eyes.style.getPropertyValue('--ey') }; }
  };
})();