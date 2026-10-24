/* ==========================================================
   pet3.js · 「小引」——矢量形象 + 弹簧动作引擎
   一个 rAF 主循环驱动全部形变：有机轮廓呼吸、眼球跟随 + 扫视、真实眼皮眨眼、
   眉毛/嘴的表情插值、头顶小光点的滞后跟随（follow-through）、
   拖拽惯性回弹与挤压拉伸、说话时的口型脉动、闲置犯困。
   不依赖图片素材。对外接口保持 window.Pet3 不变。
   ========================================================== */
(function () {
  'use strict';

  var K_POS = 'pet3_pos';
  var K_SIZE = 'pet3_size';
  var IDLE_MS = 20000;
  var SLEEPY_MS = 45000;
  var DRAG_THRESHOLD = 4;
  var REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var el = {};
  var mode = 'mini';
  var mouse = { x: 0, y: 0, inside: false };
  var lastActivity = Date.now();
  var drag = null;
  var idleTimer = null, bubbleTimer = null, brainTimer = null;
  var talkUntil = 0;

  /* ---------------- 弹簧 ---------------- */
  function Spring(v, stiff, damp) {
    this.x = v; this.to = v; this.v = 0;
    this.k = stiff == null ? 170 : stiff;
    this.d = damp == null ? 18 : damp;
  }
  Spring.prototype.step = function (dt) {
    var a = (this.to - this.x) * this.k - this.v * this.d;
    this.v += a * dt;
    this.x += this.v * dt;
    return this.x;
  };
  Spring.prototype.kick = function (dv) { this.v += dv; };
  Spring.prototype.snap = function (v) { this.x = v; this.to = v; this.v = 0; };

  var S = {
    px: new Spring(0, 210, 15),      /* 拖拽释放后的回弹位移 */
    py: new Spring(0, 210, 15),
    lookX: new Spring(0, 120, 15),   /* 眼球注视（扫视目标） */
    lookY: new Spring(0, 120, 15),
    pullX: new Spring(0, 60, 11),    /* 整体朝鼠标靠拢 */
    pullY: new Spring(0, 60, 11),
    lean: new Spring(0, 90, 10),     /* 倾斜 / 侧身 */
    sq: new Spring(0, 260, 13),      /* 挤压拉伸：>0 变扁 */
    lift: new Spring(0, 70, 5.5),    /* 上下跳（正值=离地） */
    lid: new Spring(0, 320, 26),     /* 0 睁眼 → 1 闭眼 */
    droop: new Spring(0, 40, 9),     /* 眼皮下垂度（犯困 / 惊讶为负） */
    brow: new Spring(0, 130, 13),
    smile: new Spring(0.55, 70, 11),
    open: new Spring(0.05, 190, 15),
    sparkX: new Spring(0, 55, 6.5),  /* 头顶光点：软、滞后 */
    sparkY: new Spring(0, 55, 6.5)
  };

  /* ---------------- 构建 DOM ---------------- */
  function build() {
    if (document.getElementById('pet3')) return;
    var root = document.createElement('div');
    root.className = 'pet3';
    root.id = 'pet3';
    root.innerHTML =
      '<div class="pet3-bubble" id="pet3Bubble"></div>' +
      '<div class="pet3-orb" id="pet3Orb">' +
        '<svg class="pet3-svg" viewBox="0 0 120 120" aria-hidden="true">' +
          '<defs>' +
            '<radialGradient id="p3Body" cx="34%" cy="26%" r="82%">' +
              '<stop class="p3-s1" offset="0%" />' +
              '<stop class="p3-s2" offset="46%" />' +
              '<stop class="p3-s3" offset="100%" />' +
            '</radialGradient>' +
            '<radialGradient id="p3Shine" cx="50%" cy="50%" r="50%">' +
              '<stop class="p3-h1" offset="0%" /><stop class="p3-h2" offset="100%" />' +
            '</radialGradient>' +
            '<radialGradient id="p3Halo" cx="50%" cy="50%" r="50%">' +
              '<stop class="p3-g1" offset="55%" /><stop class="p3-g2" offset="100%" />' +
            '</radialGradient>' +
            '<clipPath id="p3ClipL"><ellipse cx="46" cy="56" rx="10.6" ry="12.6" /></clipPath>' +
            '<clipPath id="p3ClipR"><ellipse cx="74" cy="56" rx="10.6" ry="12.6" /></clipPath>' +
          '</defs>' +
          '<ellipse class="p3-shadow" id="p3Shadow" cx="60" cy="108" rx="24" ry="4.6" />' +
          '<ellipse class="p3-halo" cx="60" cy="62" rx="56" ry="56" fill="url(#p3Halo)" />' +
          '<path class="p3-stem" id="p3Stem" d="" />' +
          '<circle class="p3-spark" id="p3Spark" cx="60" cy="16" r="3.4" />' +
          '<g id="p3Body2">' +
            '<path class="p3-blob" id="p3Blob" fill="url(#p3Body)" d="" />' +
            '<ellipse class="p3-shine" cx="44" cy="36" rx="15" ry="10" fill="url(#p3Shine)" />' +
          '</g>' +
          '<g id="p3Face">' +
            '<path class="p3-brow" id="p3BrowL" d="M38 40 Q46 36 54 40" />' +
            '<path class="p3-brow" id="p3BrowR" d="M66 40 Q74 36 82 40" />' +
            '<g clip-path="url(#p3ClipL)">' +
              '<ellipse class="p3-sclera" cx="46" cy="56" rx="10.6" ry="12.6" />' +
              '<g id="p3IrisL"><circle class="p3-iris" cx="46" cy="56" r="6.3" />' +
                '<circle class="p3-pupil" cx="46" cy="56" r="3.1" />' +
                '<circle class="p3-glint" cx="43.6" cy="53.2" r="1.9" /></g>' +
              '<rect class="p3-lid" id="p3LidL" x="34" y="13" width="24" height="30" rx="8" />' +
            '</g>' +
            '<g clip-path="url(#p3ClipR)">' +
              '<ellipse class="p3-sclera" cx="74" cy="56" rx="10.6" ry="12.6" />' +
              '<g id="p3IrisR"><circle class="p3-iris" cx="74" cy="56" r="6.3" />' +
                '<circle class="p3-pupil" cx="74" cy="56" r="3.1" />' +
                '<circle class="p3-glint" cx="71.6" cy="53.2" r="1.9" /></g>' +
              '<rect class="p3-lid" id="p3LidR" x="62" y="13" width="24" height="30" rx="8" />' +
            '</g>' +
            '<path class="p3-mouth" id="p3Mouth" d="" />' +
          '</g>' +
        '</svg>' +
      '</div>' +
      /* 聊天小窗口：head 是拖拽把手 */
      '<div class="pet3-panel" id="pet3Panel" hidden>' +
        '<div class="pet3-panel-head" id="pet3PanelHead">' +
          '<div class="pet3-panel-title">小引 · 学习搭子<span class="pet3-panel-sub" id="pet3Sub">正在连接…</span></div>' +
          '<button class="pet3-panel-x" id="pet3Close" type="button" aria-label="收起">✕</button>' +
        '</div>' +
        '<div class="pet3-log" id="pet3Log"></div>' +
        '<form class="pet3-inputrow" id="pet3Form">' +
          '<input id="pet3Input" type="text" maxlength="300" placeholder="问点什么，比如：这关重点是什么？" autocomplete="off" />' +
          '<button type="submit">发送</button>' +
        '</form>' +
      '</div>';
    document.body.appendChild(root);

    el.root = root;
    el.bubble = $('pet3Bubble');
    el.panel = $('pet3Panel');
    el.panelHead = $('pet3PanelHead');
    el.log = $('pet3Log');
    el.form = $('pet3Form');
    el.input = $('pet3Input');
    el.sub = $('pet3Sub');
    el.orb = $('pet3Orb');
    el.blob = $('p3Blob');
    el.bodyG = $('p3Body2');
    el.face = $('p3Face');
    el.shadow = $('p3Shadow');
    el.spark = $('p3Spark');
    el.stem = $('p3Stem');
    el.irisL = $('p3IrisL');
    el.irisR = $('p3IrisR');
    el.lidL = $('p3LidL');
    el.lidR = $('p3LidR');
    el.browL = $('p3BrowL');
    el.browR = $('p3BrowR');
    el.mouth = $('p3Mouth');

    var pos = load(K_POS);
    if (pos && typeof pos.right === 'number') {
      root.style.right = pos.right + 'px';
      root.style.bottom = pos.bottom + 'px';
    }
    setMode(load(K_SIZE) || 'mini', true);
    bind();
    startBrain();
    render();                 /* 先画一帧，切到后台标签页时也不会是空 SVG */
    if (!REDUCED) requestAnimationFrame(tick);
  }

  function $(id) { return document.getElementById(id); }
  function load(k) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch (e) { return null; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }

  /* ---------------- 形态 ---------------- */
  function setMode(next, silent) {
    mode = next;
    el.orb.classList.toggle('pet3-big', next === 'big');
    if (!silent) save(K_SIZE, next);
    if (next === 'big') { S.lift.kick(46); S.sq.kick(1.4); resetIdle(); }
    else stopIdle();
  }

  /* ---------------- 主循环 ---------------- */
  var prev = 0, t = 0;
  function tick(now) {
    var dt = prev ? Math.min(0.05, (now - prev) / 1000) : 0.016;
    prev = now;
    if (!document.hidden) { t += dt; step(dt); render(dt); }
    requestAnimationFrame(tick);
  }

  function step(dt) {
    /* 注视目标：由大脑给出扫视点，眼皮/眉毛跟随状态机 */
    var sleepy = (Date.now() - lastActivity) > SLEEPY_MS;
    S.droop.to = sleepy ? 0.55 : (S.droop.to > 0.4 && !sleepy ? 0 : S.droop.to);
    if (!sleepy && S.droop.to > 0.3) S.droop.to = 0;
    if (drag && drag.moved) { S.droop.to = -0.25; S.brow.to = 1.6; }
    stepSpringAll(dt);

    /* 呼吸：两条不同频率的正弦叠加，避免机械感 */
    var br = Math.sin(t * 1.35) * 0.5 + Math.sin(t * 0.53 + 1.2) * 0.5;
    breath = br;

    /* 说话口型 */
    if (Date.now() < talkUntil) {
      S.open.to = 0.30 + Math.abs(Math.sin(t * 11.5)) * 0.42;
      S.smile.to = 0.75;
    }
  }
  var breath = 0;
  function stepSpringAll(dt) {
    for (var k in S) if (S[k] instanceof Spring) S[k].step(dt);
  }

  function render() {
    var big = mode === 'big';
    /* 挤压拉伸：sq>0 变扁；呼吸也带一点体积变化 */
    var sy = 1 - S.sq.x * 0.10 + breath * 0.010;
    var sx = 1 + S.sq.x * 0.085 - breath * 0.006;
    var cx = 60 + S.pullX.x + S.px.x * 0.045;
    var cy = 62 - S.lift.x + S.pullY.x + S.py.x * 0.045;

    el.blob.setAttribute('d', blobPath(60, 62, 37.5, 1, 1, t));
    el.bodyG.setAttribute('transform', xf(cx, cy, sx, sy, S.lean.x));
    /* 五官只做一半的挤压，脸不会被拉变形 */
    el.face.setAttribute('transform', xf(cx, cy, 1 + (sx - 1) * 0.5, 1 + (sy - 1) * 0.5, S.lean.x));

    /* 地面阴影：跳起来时变小变淡，并把自身往下补偿，视觉上留在原地不动 */
    var lift = clamp(S.lift.x, -6, 18);
    el.shadow.setAttribute('cy', (108 + lift * 1.95).toFixed(2));
    el.shadow.setAttribute('rx', (24 - lift * 0.55).toFixed(2));
    el.shadow.setAttribute('opacity', clamp(0.20 - lift * 0.009, 0.06, 0.22).toFixed(3));
    el.shadow.setAttribute('cx', cx.toFixed(2));

    /* 眼球：注视点 + 轻微视差，瞳孔比虹膜多走一点 */
    var lx = clamp(S.lookX.x, -1, 1), ly = clamp(S.lookY.x, -1, 1);
    var ix = lx * 3.6, iy = ly * 3.0;
    el.irisL.setAttribute('transform', 'translate(' + ix.toFixed(2) + ',' + iy.toFixed(2) + ')');
    el.irisR.setAttribute('transform', 'translate(' + (ix * 1.06).toFixed(2) + ',' + iy.toFixed(2) + ')');

    /* 眼皮：眨眼 + 常闭度合成，左眼比右眼晚 12ms 更有生命感 */
    var cL = clamp(S.lid.x + S.droop.x * 0.62, 0, 1.06);
    var cR = clamp(S.lid.x * 0.94 + S.droop.x * 0.62, 0, 1.06);
    el.lidL.setAttribute('transform', 'translate(0,' + (cL * 27).toFixed(2) + ')');
    el.lidR.setAttribute('transform', 'translate(0,' + (cR * 27).toFixed(2) + ')');

    /* 眉毛 */
    var bw = S.brow.x;
    el.browL.setAttribute('transform', 'translate(0,' + (-bw * 2.4).toFixed(2) + ') rotate(' + (-bw * 2.2).toFixed(2) + ' 46 38)');
    el.browR.setAttribute('transform', 'translate(0,' + (-bw * 2.4).toFixed(2) + ') rotate(' + (bw * 2.2).toFixed(2) + ' 74 38)');

    /* 嘴：一条透镜形曲线，smile 控制弧度、open 控制厚度 */
    var my = 79 + S.open.x * 1.2, mw = 8.4 + S.open.x * 3.2;
    var up = my - (S.smile.x * 2.2 + S.open.x * 5.4), dn = my + (S.smile.x * 3.6 + S.open.x * 6.2);
    el.mouth.setAttribute('d', 'M' + (60 - mw).toFixed(2) + ',' + my.toFixed(2) +
      ' Q60,' + up.toFixed(2) + ' ' + (60 + mw).toFixed(2) + ',' + my.toFixed(2) +
      ' Q60,' + dn.toFixed(2) + ' ' + (60 - mw).toFixed(2) + ',' + my.toFixed(2) + ' Z');

    /* 头顶光点：锚点在球顶，靠软弹簧滞后拖拽出跟随感 */
    var ax = cx + Math.sin(S.lean.x * 0.6) * 2, ay = cy - 37.5 * sy + 2;
    var sxp = ax + S.sparkX.x, syp = ay - 15 + S.sparkY.x;
    el.spark.setAttribute('cx', sxp.toFixed(2));
    el.spark.setAttribute('cy', syp.toFixed(2));
    el.spark.setAttribute('r', (big ? 4.2 : 3.4).toFixed(2));
    el.stem.setAttribute('d', 'M' + ax.toFixed(2) + ',' + ay.toFixed(2) +
      ' Q' + ((ax + sxp) / 2 + S.sparkX.x * 0.3).toFixed(2) + ',' + ((ay + syp) / 2 + 5).toFixed(2) + ' ' + sxp.toFixed(2) + ',' + syp.toFixed(2));

    el.orb.style.transform = 'translate(' + S.px.x.toFixed(2) + 'px,' + (S.py.x + (-S.lift.x * 1.5)).toFixed(2) + 'px) rotate(' + (S.lean.x * 0.9).toFixed(2) + 'deg)';
  }

  function xf(cx, cy, sx, sy, rot) {
    return 'translate(' + cx.toFixed(2) + ',' + cy.toFixed(2) + ') rotate(' + rot.toFixed(2) +
      ') scale(' + sx.toFixed(3) + ',' + sy.toFixed(3) + ') translate(-60,-62)';
  }

  function blobPath(cx, cy, R, sx, sy, time) {
    var N = 16, pts = [], i, a, wob, r;
    for (i = 0; i < N; i++) {
      a = i / N * Math.PI * 2;
      wob = 1 + 0.021 * Math.sin(3 * a + time * 0.9) + 0.013 * Math.sin(5 * a - time * 0.62)
              + 0.009 * Math.sin(2 * a + time * 0.37);
      r = R * wob;
      pts.push([cx + Math.cos(a) * r * sx, cy + Math.sin(a) * r * sy]);
    }
    var d = 'M' + pts[0][0].toFixed(2) + ',' + pts[0][1].toFixed(2);
    for (i = 0; i < N; i++) {
      var p0 = pts[(i - 1 + N) % N], p1 = pts[i], p2 = pts[(i + 1) % N], p3 = pts[(i + 2) % N];
      d += 'C' + (p1[0] + (p2[0] - p0[0]) / 6).toFixed(2) + ',' + (p1[1] + (p2[1] - p0[1]) / 6).toFixed(2) +
           ' ' + (p2[0] - (p3[0] - p1[0]) / 6).toFixed(2) + ',' + (p2[1] - (p3[1] - p1[1]) / 6).toFixed(2) +
           ' ' + p2[0].toFixed(2) + ',' + p2[1].toFixed(2);
    }
    return d + 'Z';
  }

  /* ---------------- 大脑：扫视 / 眨眼 / 张望 / 犯困 ---------------- */
  function startBrain() {
    if (REDUCED) return;
    (function blinkLoop() {
      var wait = 2400 + Math.random() * 4200;
      setTimeout(function () {
        if (!document.hidden && !drag) {
          blink();
          if (Math.random() < 0.16) setTimeout(blink, 260);
        }
        blinkLoop();
      }, wait);
    })();
    (function glanceLoop() {
      setTimeout(function () {
        if (!document.hidden && !mouse.inside && !drag) glance();
        glanceLoop();
      }, 5200 + Math.random() * 5200);
    })();
    brainTimer = setInterval(function () {
      if (document.hidden) return;
      /* 没有鼠标时，注视点自己慢慢飘；有鼠标时由 follow 接管 */
      if (!mouse.inside) {
        S.lookX.to = (Math.random() - 0.5) * 1.2;
        S.lookY.to = (Math.random() - 0.5) * 0.9;
      }
    }, 3400);
  }
  function blink() {
    S.lid.snap(0);
    S.lid.to = 1;
    setTimeout(function () { S.lid.to = 0; }, 90);
  }
  function glance() {
    S.lookX.to = (Math.random() - 0.5) * 1.7;
    S.lookY.to = (Math.random() - 0.5) * 1.1;
    S.lean.kick((Math.random() - 0.5) * 1.6);
    S.brow.to = Math.random() < 0.35 ? 1.1 : 0;
    setTimeout(function () { S.brow.to = 0; }, 900);
  }

  /* ---------------- 鼠标跟随 ---------------- */
  var lastFollow = 0;
  function follow() {
    var r = el.orb.getBoundingClientRect();
    var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    var dx = mouse.x - cx, dy = mouse.y - cy;
    var dist = Math.hypot(dx, dy) || 1;
    var nx = dx / dist, ny = dy / dist;
    var near = clamp(1 - dist / 520, 0, 1);
    S.pullX.to = nx * 3.2 * (0.4 + near);
    S.pullY.to = ny * 2.4 * (0.4 + near);
    S.lean.to = nx * 3.0 * (0.5 + near * 0.5);
    S.lookX.to = nx * (0.85 + near * 0.15);
    S.lookY.to = ny * (0.8 + near * 0.2);
  }

  /* ---------------- 拖拽：速度 → 惯性回弹 ---------------- */
  function bind() {
    var start = null, moved = false, base = { right: 26, bottom: 24 }, pv = { x: 0, y: 0, t: 0 };

    el.orb.addEventListener('pointerdown', function (e) {
      if (e.button !== undefined && e.button !== 0) return;
      start = { x: e.clientX, y: e.clientY };
      moved = false;
      pv.x = e.clientX; pv.y = e.clientY; pv.t = performance.now();
      var st = getComputedStyle(el.root);
      base = { right: parseFloat(st.right) || 26, bottom: parseFloat(st.bottom) || 24 };
      el.orb.setPointerCapture && el.orb.setPointerCapture(e.pointerId);
      drag = { moved: false };
      S.sq.kick(2.2);                       /* 按下去先瘪一下 */
      S.sparkX.kick((Math.random() - 0.5) * 40);
    });

    el.orb.addEventListener('pointermove', function (e) {
      if (!start) return;
      var dx = e.clientX - start.x, dy = e.clientY - start.y;
      if (!moved && Math.abs(dx) + Math.abs(dy) < DRAG_THRESHOLD) return;
      moved = true;
      drag.moved = true;
      var now = performance.now(), dt = Math.max(8, now - pv.t) / 1000;
      S.sparkX.kick(-(e.clientX - pv.x) / dt * 0.012);
      S.sparkY.kick(-(e.clientY - pv.y) / dt * 0.010);
      pv = { x: e.clientX, y: e.clientY, t: now };
      S.lean.to = clamp((e.clientX - pv.x) * 0.4, -6, 6);
      el.root.style.right = Math.max(4, base.right - dx) + 'px';
      el.root.style.bottom = Math.max(4, base.bottom - dy) + 'px';
    });

    function end(e) {
      if (!start) return;
      var wasMoved = moved, vx = 0, vy = 0;
      if (drag) { vx = (e && pv.x ? (e.clientX - pv.x) : 0); vy = (e && pv.y ? (e.clientY - pv.y) : 0); }
      start = null; moved = false; drag = null;
      S.lean.to = 0;
      if (wasMoved) {
        var st = getComputedStyle(el.root);
        save(K_POS, { right: parseFloat(st.right) || 26, bottom: parseFloat(st.bottom) || 24 });
        S.px.kick(clamp(vx * 6, -260, 260));      /* 松手后冲出去再弹回 */
        S.py.kick(clamp(vy * 6, -260, 260));
        S.sq.kick(2.6);
        S.sparkX.kick(clamp(vx * 22, -420, 420));
        S.sparkY.kick(clamp(vy * 22, -420, 420));
      } else {
        hop();
        if (el.panel && !el.panel.hidden) {
          hidePanel();
          setMode('mini');
        } else {
          setMode('big');
          showPanel();
          say('想聊什么？我在。');
        }
      }
    }
    el.orb.addEventListener('pointerup', end);
    el.orb.addEventListener('pointercancel', function () { start = null; moved = false; drag = null; });

    /* ---- 聊天小窗口：标题栏拖动 / 发送 / 收起 ---- */
    var panStart = null;
    el.panelHead.addEventListener('pointerdown', function (e) {
      if (e.button !== undefined && e.button !== 0) return;
      if (e.target.closest && e.target.closest('.pet3-panel-x')) return;
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
    function panEnd() {
      if (!panStart) return;
      panStart = null;
      el.panel.classList.remove('is-dragging');
      save(K_PANEL, {
        left: parseFloat(el.panel.style.left) || 0,
        top: parseFloat(el.panel.style.top) || 0
      });
    }
    el.panelHead.addEventListener('pointerup', panEnd);
    el.panelHead.addEventListener('pointercancel', panEnd);

    $('pet3Close').addEventListener('click', function () { hidePanel(); });
    el.form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = el.input.value.trim();
      if (!v) return;
      el.input.value = '';
      send(v);
    });
    /* 输入框里的鼠标操作不要触发宠物跟随/收起逻辑 */
    el.panel.addEventListener('pointerdown', function (e) { e.stopPropagation(); });

    el.orb.addEventListener('pointerenter', function () { S.droop.to = -0.18; S.brow.to = 0.9; });
    el.orb.addEventListener('pointerleave', function () { if (!drag) { S.droop.to = 0; S.brow.to = 0; } });

    document.addEventListener('mousemove', function (e) {
      mouse.x = e.clientX; mouse.y = e.clientY; mouse.inside = true;
      lastActivity = Date.now();
      var now = Date.now();
      if (now - lastFollow < 16) return;
      lastFollow = now;
      if (!REDUCED) follow();
      if (mode === 'big') resetIdle();
    }, { passive: true });

    document.addEventListener('mouseleave', function () { mouse.inside = false; });
    window.addEventListener('resize', function () { if (!REDUCED) follow(); });
  }

  /* 起跳前先下蹲蓄力，落地再压扁 */
  function hop() {
    if (REDUCED) return;
    S.sq.to = 0.9;
    setTimeout(function () {
      S.sq.to = 0;
      S.lift.kick(150);
      setTimeout(function () { S.sq.kick(2.0); }, 320);
    }, 150);
  }

  /* ---------------- 聊天小窗口 ----------------
     后端 /api/chat 走 OpenAI 风格的 messages 数组；
     没配 Key 时后端会自动落到 Cloudflare Workers AI（免费额度），所以这里不用 Key。 */
  var K_PANEL = 'pet3_panel_pos';
  var chatHistory = [];
  var waiting = false;

  function showPanel() {
    if (!el.panel) return;
    el.panel.hidden = false;
    if (!el.panel.dataset.placed) {
      var p = load(K_PANEL);
      if (p && typeof p.left === 'number') {
        placePanel(p.left, p.top);
      } else {
        var pw = el.panel.offsetWidth || 320, ph = el.panel.offsetHeight || 220;
        placePanel(Math.max(12, window.innerWidth - pw - 150),
                   Math.max(12, window.innerHeight - ph - 130));
      }
      el.panel.dataset.placed = '1';
    }
    checkStatus();
    setTimeout(function () { if (el.input) el.input.focus(); }, 60);
  }
  function hidePanel() { if (el.panel) el.panel.hidden = true; }

  function placePanel(left, top) {
    if (!el.panel) return;
    var w = el.panel.offsetWidth || 320, h = el.panel.offsetHeight || 220;
    left = clamp(left, 8, Math.max(8, window.innerWidth - w - 8));
    top  = clamp(top,  8, Math.max(8, window.innerHeight - h - 8));
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
    if (/换装|衣服|穿|围巾|眼镜/.test(q)) return '点我一下，我变大之后可以换装～';
    if (/重点|怎么学|方法/.test(q)) return '先把这一关的目标说清楚：看懂什么、动手做什么。不确定就问「这关重点是什么」，我按三句话讲。';
    if (/卡住|不会|难/.test(q)) return '卡住时先把问题缩小：哪一行报错、哪一步不懂。把报错发我，我陪你拆。';
    if (/多久|时间/.test(q)) return '一天 10 分钟，一学期就是一门课的量。先别追进度，先别断。';
    return '我在。你可以问这一关的重点、要装什么工具，或者告诉我卡在哪一步。';
  }

  function addMsg(role, text) {
    if (!el.log) return null;
    var d = document.createElement('div');
    d.className = 'pet3-msg ' + (role === 'me' ? 'me' : 'ai');
    d.textContent = text;
    el.log.appendChild(d);
    el.log.scrollTop = el.log.scrollHeight;
    return d;
  }

  function send(text) {
    if (waiting) { addMsg('me', text); return; }
    addMsg('me', text);
    chatHistory.push({ role: 'user', content: text });
    if (chatHistory.length > 12) chatHistory = chatHistory.slice(-12);

    waiting = true;
    var tNode = addMsg('ai', '想想…');
    if (tNode) tNode.classList.add('is-typing');
    fetch(apiUrl('/api/chat'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: chatHistory, context: ctxLine() })
    }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }).then(function (j) {
      var reply = j.text || j.reply || '';
      if (!reply) throw new Error('empty');
      if (tNode) tNode.textContent = reply;
      chatHistory.push({ role: 'assistant', content: reply });
      if (chatHistory.length > 12) chatHistory = chatHistory.slice(-12);
      if (el.sub && j.provider) el.sub.textContent = '在线 · ' + (j.model || j.provider);
    }).catch(function () {
      if (tNode) tNode.textContent = localAnswer(text);
      /* 失败这轮不进上下文，免得把兜底话术当成模型回答再喂回去 */
      if (chatHistory.length && chatHistory[chatHistory.length - 1].role === 'user') chatHistory.pop();
      if (el.sub) el.sub.textContent = '只连着本地（未接大模型）';
    }).then(function () {
      if (tNode) tNode.classList.remove('is-typing');
      waiting = false;
      if (el.log) el.log.scrollTop = el.log.scrollHeight;
      if (mode === 'big') resetIdle();
    });
  }

  function checkStatus() {
    if (!el.sub) return;
    fetch(apiUrl('/api/chat/status')).then(function (r) { return r.json(); }).then(function (j) {
      if (j && j.ready) el.sub.textContent = '在线 · ' + (j.model || j.provider || 'AI');
      else el.sub.textContent = '离线 · 用本地回答';
    }).catch(function () { if (el.sub) el.sub.textContent = '离线 · 用本地回答'; });
  }

  /* ---------------- 闲置收回 ---------------- */
  function resetIdle() {
    stopIdle();
    idleTimer = setTimeout(function () {
      /* 聊天窗口开着就别自动缩回去，免得打字打到一半宠物跑了 */
      if (el.panel && !el.panel.hidden) return;
      if (mode === 'big') setMode('mini');
    }, IDLE_MS);
  }
  function stopIdle() { if (idleTimer) { clearTimeout(idleTimer); idleTimer = null; } }

  /* ---------------- 气泡 ---------------- */
  function say(text, ms) {
    if (!el.bubble) return;
    el.bubble.textContent = text;
    el.bubble.classList.add('is-on');
    talkUntil = Date.now() + Math.min((ms || 5200), 4200);
    S.smile.to = 0.95;
    setTimeout(function () { S.smile.to = 0.55; }, 2600);
    if (bubbleTimer) clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(function () { el.bubble.classList.remove('is-on'); }, ms || 5200);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();

  window.Pet3 = {
    open: function () { setMode('big'); },
    close: function () { setMode('mini'); },
    mode: function () { return mode; },
    play: function (name) { if (name === 'hop') hop(); },
    blink: blink,
    say: say,
    look: function () { return { x: S.lookX.x, y: S.lookY.x }; }
  };
})();
