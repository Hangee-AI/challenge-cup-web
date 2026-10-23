/* ==========================================================
   pet.js · 学习搭子「小引」（桌面宠物 + 换装系统）
   ----------------------------------------------------------
   行为：
   - 平时只有右下角「小熊头像」；眼睛会跟着鼠标转
   - 点小熊 → 大熊出现（在聊天框旁边，可拖动）+ 聊天框打开
   - 点大熊 → 弹出换装面板：肤色 / 眼镜 / 围巾 / 外套 + 一键搭配
   - 穿搭存 localStorage（yl_pet_look），刷新后保持
   - 6:00–18:00 默认白色「白熊」，其余时间默认黑色「黑熊」；用户自己选了肤色就以用户为准
   - 一段时时间不聊天 → 自动收起，只留小熊头像
   - 白天/晚上分别给不同的鼓励话
   依赖：js/app.js 的 window.__YL、js/cloud.js 的 window.Cloud
   ========================================================== */

(function () {
  if (window.__PET_LOADED) return;
  window.__PET_LOADED = true;

  var K_POS = 'yl_pet_pos';
  var K_MIN = 'yl_pet_min';
  var K_TIP = 'yl_pet_tip';
  var K_LOOK = 'yl_pet_look';

  /* ---------------- 换装数据 ---------------- */
  var SKINS = [
    { id: 'black', name: '墨黑' },
    { id: 'white', name: '雪白' },
    { id: 'brown', name: '栗棕' },
    { id: 'pink', name: '樱粉' }
  ];
  var GLASSES = [
    { id: 'none', name: '不戴' },
    { id: 'vintage', name: '复古皮框' },
    { id: 'goggle', name: '星芒护目镜' },
    { id: 'snowstar', name: '白框星芒' },
    { id: 'blackstar', name: '黑框星芒' },
    { id: 'blacksq', name: '黑框墨镜' },
    { id: 'whitesq', name: '白框墨镜' }
  ];
  var SCARVES = [
    { id: 'none', name: '不围' },
    { id: 'black', name: '纯黑' },
    { id: 'white', name: '纯白' },
    { id: 'check', name: '黑白棋盘' },
    { id: 'tip', name: '白边黑' },
    { id: 'neon', name: '荧光黑' }
  ];
  var JACKETS = [
    { id: 'none', name: '不穿' },
    { id: 'varsity', name: '红黑棒球服' },
    { id: 'denim', name: '牛仔拼棕' },
    { id: 'leather', name: '黑皮夹克' },
    { id: 'cardigan', name: '米白针织' }
  ];

  var DAY_TIPS = [
    '勤奋的一天开始了，今天也要努力呀！',
    '早上好～今天先完成一关，再去忙别的。',
    '白天最适合啃硬骨头，先挑最难的那一关？',
    '今天想从哪一关开始？我陪你。',
    '一关 10 分钟，上午先把这一关做完吧。'
  ];
  var NIGHT_TIPS = [
    '大王晚上努力奋斗时要注意用眼哦！',
    '夜深了，做两关就早点睡，眼睛要休息。',
    '晚上学 30 分钟，起来走两步再继续～',
    '这么晚还在学，佩服你。记得把屏幕调暗一点。',
    '睡前别刷太久，把今天这一关收个尾就休息吧。'
  ];

  var REACTS = [
    '摸头成功！开心转圈圈～',
    '嘿嘿，被你发现啦 🌟',
    '今天也要加油呀！',
    '陪你一起，就不孤单啦～',
    '戳一下，元气 +1！',
    '我在这儿呢，随时找我。',
    '想换身衣服吗？再点我一下～',
    '学习累了？先伸个懒腰！',
    '悄悄说：你比昨天厉害了。',
    '我们一起把这关打通关！',
    '叮～收到一份好心情 ✨',
    '要不要听个冷笑话？点对话框问我～'
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
  var ready = false;
  var checked = false;
  var tipTimer = null;
  var tipIndex = 0;
  var justDragged = false;
  var look = null;              // { skin, glasses, scarf, jacket }
  var lastAct = Date.now();     // 最后一次"用 AI"的时间
  var mouse = { x: 0, y: 0 };   // 鼠标位置，用来让眼睛追
  var lookSaveTimer = null;

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
  function isDay() {
    var h = new Date().getHours();
    return h >= 6 && h < 18;
  }
  function pick(list, prev) {
    var i = Math.floor(Math.random() * list.length);
    if (list.length > 1 && list[i] === prev) i = (i + 1) % list.length;
    return list[i];
  }

  /* ---------------- 穿搭状态 ---------------- */
  function defaultLook() {
    return { skin: isDay() ? 'white' : 'black', glasses: 'none', scarf: 'none', jacket: 'none' };
  }
  function loadLook() {
    var raw = getStore(K_LOOK, '');
    if (raw) {
      try {
        var o = JSON.parse(raw);
        if (o && SKINS.some(function (s) { return s.id === o.skin; })) {
          return {
            skin: o.skin,
            glasses: GLASSES.some(function (s) { return s.id === o.glasses; }) ? o.glasses : 'none',
            scarf: SCARVES.some(function (s) { return s.id === o.scarf; }) ? o.scarf : 'none',
            jacket: JACKETS.some(function (s) { return s.id === o.jacket; }) ? o.jacket : 'none'
          };
        }
      } catch (e) { /* ignore */ }
    }
    return defaultLook();
  }
  function saveLook() {
    clearTimeout(lookSaveTimer);
    lookSaveTimer = setTimeout(function () {
      setStore(K_LOOK, JSON.stringify(look));
    }, 120);
  }

  /* ---------------- 小熊 SVG（可换装） ---------------- */
  var PALETTE = {
    black: { fur: '#22222a', fur2: '#2d2d36', belly: '#2a2a33', ear: '#4b3a36', sclera: 'rgba(255,255,255,.94)', pupil: '#0e0e13' },
    white: { fur: '#fbfaf6', fur2: '#ffffff', belly: '#ffffff', ear: '#f6dad6', sclera: 'rgba(255,255,255,.9)', pupil: '#26262e' },
    brown: { fur: '#a9774c', fur2: '#b9875c', belly: '#e2b98d', ear: '#d3a078', sclera: 'rgba(255,255,255,.9)', pupil: '#2a2018' },
    pink: { fur: '#f2b6c3', fur2: '#f7c3ce', belly: '#ffd9e2', ear: '#f8cfd8', sclera: 'rgba(255,255,255,.9)', pupil: '#4a2b33' }
  };

  function glassesSVG(id) {
    if (!id || id === 'none') return '';
    var y = 86, lx = 74, rx = 126;
    if (id === 'vintage') {
      return '<g class="pet-glasses">' +
        '<rect x="46" y="' + (y - 12) + '" width="108" height="30" rx="15" fill="#5b3524" opacity=".96"/>' +
        '<path d="M60 78 h-12 v18 h12" fill="none" stroke="#8a5b3d" stroke-width="3"/>' +
        '<path d="M140 78 h12 v18 h-12" fill="none" stroke="#8a5b3d" stroke-width="3"/>' +
        '<rect x="52" y="' + (y - 8) + '" width="42" height="22" rx="11" fill="#c87f35" opacity=".92"/>' +
        '<rect x="106" y="' + (y - 8) + '" width="42" height="22" rx="11" fill="#c87f35" opacity=".92"/>' +
        '<rect x="96" y="' + (y - 2) + '" width="8" height="5" rx="2 " fill="#5b3524"/>' +
        '</g>';
    }
    if (id === 'goggle') {
      return '<g class="pet-glasses">' +
        '<defs><linearGradient id="pgG" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="#7b5cff"/><stop offset=".55" stop-color="#4b8bff"/><stop offset="1" stop-color="#43d9ff"/>' +
        '</linearGradient></defs>' +
        '<path d="M42 76 q58 -14 116 0 q8 3 4 20 q-4 14 -22 14 h-80 q-18 0 -22 -14 q-4 -17 4 -20 z" fill="#1b1b22"/>' +
        '<path d="M52 80 q48 -10 96 0 q6 2 3 15 q-3 11 -17 11 h-68 q-14 0 -17 -11 q-3 -13 3 -15 z" fill="url(#pgG)"/>' +
        '<path d="M84 84 l4 8 8 -3 -5 8 8 3 -9 2 1 8 -6 -6 -7 5 2 -8 -8 -3 8 -3 z" fill="#fff" opacity=".92"/>' +
        '<path d="M120 84 l3 6 6 -2 -4 6 6 2 -7 2 1 6 -5 -4 -5 4 1 -6 -6 -2 6 -2 z" fill="#fff" opacity=".92"/>' +
        '</g>';
    }
    if (id === 'snowstar' || id === 'blackstar') {
      var frame = id === 'snowstar' ? '#f7f7f2' : '#26262e';
      var lens = id === 'snowstar' ? '#cfd6e2' : '#2f3746';
      return '<g class="pet-glasses">' +
        '<path d="M46 78 q54 -12 108 0 q10 3 6 20 q-4 12 -20 12 h-80 q-16 0 -20 -12 q-4 -17 6 -20 z" fill="' + frame + '"/>' +
        '<path d="M54 82 q46 -9 92 0 q6 2 4 13 q-3 9 -15 9 h-70 q-12 0 -15 -9 q-2 -11 4 -13 z" fill="' + lens + '"/>' +
        '<path d="M82 88 l3 7 7 -2 -5 6 6 2 -7 2 1 6 -5 -4 -5 4 1 -6 -7 -2 6 -2 -5 -6 7 2 z" fill="#fff" opacity=".95"/>' +
        '<path d="M122 88 l3 7 7 -2 -5 6 6 2 -7 2 1 6 -5 -4 -5 4 1 -6 -7 -2 6 -2 -5 -6 7 2 z" fill="#fff" opacity=".95"/>' +
        '</g>';
    }
    // blacksq / whitesq：方框墨镜
    var f = id === 'blacksq' ? '#1d1d24' : '#f4f3ee';
    var l = id === 'blacksq' ? '#2b2f3a' : '#31343d';
    return '<g class="pet-glasses">' +
      '<rect x="48" y="74" width="46" height="30" rx="9" fill="' + f + '"/>' +
      '<rect x="106" y="74" width="46" height="30" rx="9" fill="' + f + '"/>' +
      '<rect x="53" y="79" width="36" height="20" rx="6" fill="' + l + '"/>' +
      '<rect x="111" y="79" width="36" height="20" rx="6" fill="' + l + '"/>' +
      '<rect x="92" y="84" width="16" height="5" rx="2" fill="' + f + '"/>' +
      '<path d="M48 84 h-10" stroke="' + f + '" stroke-width="4"/>' +
      '<path d="M152 84 h10" stroke="' + f + '" stroke-width="4"/>' +
      '</g>';
  }

  function scarfSVG(id, pal) {
    if (!id || id === 'none') return '';
    var base = id === 'white' ? '#f7f5ef' : '#1f1f26';
    var edge = id === 'neon' ? '#c6ff3d' : (id === 'tip' ? '#f7f5ef' : '');
    var g = '<g class="pet-scarf">';
    // 脖子一圈
    if (id === 'check') {
      g += '<path d="M62 126 q38 18 76 0 q6 12 -6 20 q-32 12 -64 0 q-12 -8 -6 -20 z" fill="#1f1f26"/>';
      for (var i = 0; i < 5; i++) {
        g += '<rect x="' + (66 + i * 15) + '" y="' + (132 + (i % 2) * 6) + '" width="9" height="8" fill="#f7f5ef"/>';
      }
    } else {
      g += '<path d="M62 126 q38 18 76 0 q6 12 -6 20 q-32 12 -64 0 q-12 -8 -6 -20 z" fill="' + base + '"/>';
      if (edge) {
        g += '<path d="M62 126 q38 18 76 0" fill="none" stroke="' + edge + '" stroke-width="3.4"/>';
      }
    }
    // 两条垂下来的尾巴
    if (id === 'check') {
      g += '<rect x="96" y="146" width="20" height="44" rx="5" fill="#f7f5ef"/>' +
        '<rect x="96" y="146" width="20" height="12" fill="#1f1f26"/>' +
        '<rect x="96" y="170" width="20" height="12" fill="#1f1f26"/>';
    } else if (id === 'tip') {
      g += '<rect x="97" y="146" width="19" height="46" rx="5" fill="#1f1f26"/>' +
        '<rect x="97" y="182" width="19" height="10" rx="4" fill="#f7f5ef"/>';
    } else if (id === 'neon') {
      g += '<rect x="97" y="146" width="19" height="46" rx="5" fill="#1f1f26"/>' +
        '<rect x="99" y="150" width="3" height="38" fill="#c6ff3d"/>' +
        '<rect x="111" y="150" width="3" height="38" fill="#c6ff3d"/>';
    } else {
      g += '<rect x="97" y="146" width="19" height="46" rx="5" fill="' + base + '"/>';
    }
    return g + '</g>';
  }

  function jacketSVG(id, pal) {
    if (!id || id === 'none') return '';
    var g = '<g class="pet-jacket">';
    if (id === 'varsity') {
      g += '<path d="M44 132 q56 -16 112 0 l10 62 q-66 20 -132 0 z" fill="#c8332f"/>' +
        '<path d="M44 132 q-14 8 -18 40 q10 10 26 8 z" fill="#1f1f26"/>' +
        '<path d="M156 132 q14 8 18 40 q-10 10 -26 8 z" fill="#1f1f26"/>' +
        '<path d="M48 132 q52 -12 104 0 l-6 8 q-46 -10 -92 0 z" fill="#f7f5ef"/>' +
        '<rect x="94" y="132" width="12" height="60" fill="#b52c28"/>' +
        '<circle cx="100" cy="146" r="2.4" fill="#f7f5ef"/><circle cx="100" cy="160" r="2.4" fill="#f7f5ef"/><circle cx="100" cy="174" r="2.4" fill="#f7f5ef"/>' +
        '<circle cx="146" cy="150" r="10" fill="#f7f5ef"/><text x="146" y="155" font-size="12" text-anchor="middle" fill="#c8332f" font-family="Georgia,serif">B</text>';
    } else if (id === 'denim') {
      g += '<path d="M44 132 q56 -16 112 0 l10 62 q-66 20 -132 0 z" fill="#8ba7c4"/>' +
        '<path d="M44 132 q-14 8 -18 40 q10 10 26 8 z" fill="#8ba7c4"/>' +
        '<path d="M156 132 q14 8 18 40 q-10 10 -26 8 z" fill="#8ba7c4"/>' +
        '<path d="M62 140 h26 l-2 26 h-26 z" fill="#b5793f"/>' +
        '<path d="M112 140 h26 l2 26 h-26 z" fill="#b5793f"/>' +
        '<path d="M48 132 q52 -12 104 0 l-4 6 q-48 -10 -96 0 z" fill="#7897b6"/>' +
        '<rect x="95" y="134" width="10" height="58" fill="#7d9cbb"/>' +
        '<circle cx="100" cy="148" r="2.2" fill="#e9eef5"/><circle cx="100" cy="164" r="2.2" fill="#e9eef5"/><circle cx="100" cy="180" r="2.2" fill="#e9eef5"/>';
    } else if (id === 'leather') {
      g += '<path d="M44 132 q56 -16 112 0 l10 62 q-66 20 -132 0 z" fill="#26262d"/>' +
        '<path d="M44 132 q-14 8 -18 40 q10 10 26 8 z" fill="#1e1e24"/>' +
        '<path d="M156 132 q14 8 18 40 q-10 10 -26 8 z" fill="#1e1e24"/>' +
        '<path d="M100 134 v58" stroke="#5c5c68" stroke-width="3" stroke-dasharray="4 4"/>' +
        '<path d="M52 138 h20" stroke="#3d3d47" stroke-width="3"/>' +
        '<path d="M128 138 h20" stroke="#3d3d47" stroke-width="3"/>' +
        '<rect x="94" y="186" width="12" height="8" rx="3" fill="#4a4a55"/>';
    } else if (id === 'cardigan') {
      g += '<path d="M44 132 q56 -16 112 0 l10 62 q-66 20 -132 0 z" fill="#f4efe4"/>' +
        '<path d="M44 132 q-14 8 -18 40 q10 10 26 8 z" fill="#c79a6b"/>' +
        '<path d="M156 132 q14 8 18 40 q-10 10 -26 8 z" fill="#c79a6b"/>' +
        '<path d="M96 132 h8 v66 h-8 z" fill="#e9e2d4"/>' +
        '<circle cx="100" cy="150" r="3.4" fill="#c8a271"/><circle cx="100" cy="166" r="3.4" fill="#c8a271"/><circle cx="100" cy="182" r="3.4" fill="#c8a271"/>';
    }
    return g + '</g>';
  }

  /* opts.night = 夜晚（自动加一层暗色，让小熊融入夜猫模式） */
  function bearSVG(lo, opts) {
    opts = opts || {};
    var p = PALETTE[lo.skin] || PALETTE.black;
    var big = opts.big;
    var uid = 'p' + (big ? 'b' : 's') + Math.floor(Math.random() * 100000);
    var s = '<svg class="pet-svg" viewBox="0 0 200 220" width="100%" height="100%" aria-hidden="true">';
    // 影子
    s += '<ellipse cx="100" cy="208" rx="58" ry="9" fill="rgba(0,0,0,.10)"/>';
    // 耳朵
    s += '<circle cx="66" cy="52" r="19" fill="' + p.fur + '"/><circle cx="66" cy="52" r="9" fill="' + p.ear + '"/>';
    s += '<circle cx="134" cy="52" r="19" fill="' + p.fur + '"/><circle cx="134" cy="52" r="9" fill="' + p.ear + '"/>';
    // 呆毛
    s += '<path d="M100 30 q4 -12 10 -13 q-2 7 0 12 q-6 -1 -10 1z" fill="' + p.fur2 + '"/>';
    // 身体
    s += '<ellipse cx="100" cy="150" rx="62" ry="56" fill="' + p.fur + '"/>';
    // 手脚
    s += '<ellipse cx="40" cy="152" rx="15" ry="27" fill="' + p.fur2 + '"/>';
    s += '<ellipse cx="160" cy="152" rx="15" ry="27" fill="' + p.fur2 + '"/>';
    s += '<ellipse cx="74" cy="196" rx="20" ry="13" fill="' + p.fur2 + '"/>';
    s += '<ellipse cx="126" cy="196" rx="20" ry="13" fill="' + p.fur2 + '"/>';
    // 头
    s += '<circle cx="100" cy="90" r="54" fill="' + p.fur + '"/>';
    // 肚皮
    s += '<ellipse cx="100" cy="158" rx="42" ry="40" fill="' + p.belly + '"/>';
    // 脸
    s += '<ellipse class="pet-eye-bg" cx="80" cy="92" rx="11" ry="12" fill="' + p.sclera + '"/>';
    s += '<ellipse class="pet-eye-bg" cx="120" cy="92" rx="11" ry="12" fill="' + p.sclera + '"/>';
    s += '<g class="pet-eye pet-eye-l" data-eye="l">' +
      '<circle class="pet-pupil" cx="80" cy="93" r="6.6" fill="' + p.pupil + '"/>' +
      '<circle class="pet-shine" cx="82.4" cy="90.4" r="2.2" fill="#fff" opacity=".95"/>' +
      '</g>';
    s += '<g class="pet-eye pet-eye-r" data-eye="r">' +
      '<circle class="pet-pupil" cx="120" cy="93" r="6.6" fill="' + p.pupil + '"/>' +
      '<circle class="pet-shine" cx="122.4" cy="90.4" r="2.2" fill="#fff" opacity=".95"/>' +
      '</g>';
    // 鼻子 + 嘴
    s += '<ellipse cx="100" cy="106" rx="8" ry="6.4" fill="' + p.pupil + '"/>';
    s += '<path class="pet-mouth" d="M92 116 q8 7 16 0" fill="none" stroke="' + p.pupil + '" stroke-width="2.4" stroke-linecap="round"/>';
    // 腮红
    s += '<ellipse cx="58" cy="108" rx="10" ry="6" fill="#ff9db0" opacity=".45"/>';
    s += '<ellipse cx="142" cy="108" rx="10" ry="6" fill="#ff9db0" opacity=".45"/>';
    // 服装层（在身体之上、头之下，视觉上像穿在身上）
    s += jacketSVG(lo.jacket, p);
    s += scarfSVG(lo.scarf, p);
    s += glassesSVG(lo.glasses);
    s += '</svg>';
    return s;
  }

  /* ---------------- 页面结构 ---------------- */
  /* 只要还没建好页面就补建一次（脚本可能在 DOMContentLoaded 之前被调用） */
  function ensureBuilt() { if (!look) look = loadLook(); if (!el.wrap || !el.panel) build(); }

  function build() {
    if (el.wrap && document.getElementById('petWrap')) return;
    var wrap = document.createElement('div');
    wrap.className = 'pet';
    wrap.id = 'petWrap';
    wrap.innerHTML = [
      '<div class="pet-bubble" id="petBubble" hidden></div>',

      '<div class="pet-big" id="petBig" hidden>',
      '  <button class="pet-bigbtn" id="petBigBtn" type="button" aria-label="点我给小引换装">' + bearSVG({ skin: 'white', glasses: 'none', scarf: 'none', jacket: 'none' }, { big: 1 }) + '</button>',
      '  <span class="pet-bigtip">点我换装</span>',
      '</div>',

      '<div class="pet-panel" id="petPanel" hidden>',
      '  <div class="pet-head">',
      '    <span class="pet-avatar" id="petAvatar">' + bearSVG({ skin: 'white', glasses: 'none', scarf: 'none', jacket: 'none' }) + '</span>',
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

      '<div class="pet-wardrobe" id="petWardrobe" hidden>',
      '  <div class="pw-head"><strong>给小引换装</strong><button class="pw-x" id="pwClose" type="button" aria-label="关闭">✕</button></div>',
      '  <div class="pw-body">',
      '    <div class="pw-sec"><div class="pw-title">肤色</div><div class="pw-opts" id="pwSkin"></div></div>',
      '    <div class="pw-sec"><div class="pw-title">眼镜</div><div class="pw-opts" id="pwGlasses"></div></div>',
      '    <div class="pw-sec"><div class="pw-title">围巾</div><div class="pw-opts" id="pwScarf"></div></div>',
      '    <div class="pw-sec"><div class="pw-title">外套</div><div class="pw-opts" id="pwJacket"></div></div>',
      '  </div>',
      '  <div class="pw-foot">',
      '    <button class="pw-btn pw-random" id="pwRandom" type="button">🎲 一键搭配</button>',
      '    <button class="pw-btn" id="pwReset" type="button">恢复默认</button>',
      '  </div>',
      '</div>',

      '<button class="pet-body" id="petBody" type="button" aria-label="打开学习搭子小引"></button>'
    ].join('');
    document.body.appendChild(wrap);

    el.wrap = wrap;
    el.body = document.getElementById('petBody');
    el.big = document.getElementById('petBig');
    el.bigBtn = document.getElementById('petBigBtn');
    el.bubble = document.getElementById('petBubble');
    el.panel = document.getElementById('petPanel');
    el.avatar = document.getElementById('petAvatar');
    el.log = document.getElementById('petLog');
    el.chips = document.getElementById('petChips');
    el.form = document.getElementById('petForm');
    el.input = document.getElementById('petInput');
    el.sub = document.getElementById('petSub');
    el.wardrobe = document.getElementById('petWardrobe');

    el.body.innerHTML = bearSVG(look);
    el.bigBtn.innerHTML = bearSVG(look, { big: 1 });
    el.avatar.innerHTML = bearSVG(look);

    CHIPS.forEach(function (c) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'pet-chip';
      b.textContent = c.label;
      b.addEventListener('click', function () { send(c.text); });
      el.chips.appendChild(b);
    });

    el.body.addEventListener('click', function (e) {
      if (e.detail > 1) return;
      if (justDragged) { justDragged = false; return; }
      lastAct = Date.now();
      petReact();
      if (el.panel.hidden) setMin(false);
    });
    el.bubble.addEventListener('click', function () {
      hideBubble();
      lastAct = Date.now();
      if (el.panel.hidden) setMin(false);
    });
    el.body.addEventListener('dblclick', function () { setMin(true); });
    document.getElementById('petClose').addEventListener('click', function () { setMin(true); });
    el.bigBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (justDragged) { justDragged = false; return; }
      lastAct = Date.now();
      toggleWardrobe();
    });
    document.getElementById('pwClose').addEventListener('click', function () { hideWardrobe(); });
    document.getElementById('pwRandom').addEventListener('click', randomLook);
    document.getElementById('pwReset').addEventListener('click', function () {
      look = defaultLook();
      applyLook();
      renderWardrobe();
      saveLook();
    });

    el.form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = el.input.value.trim();
      if (!v) return;
      el.input.value = '';
      send(v);
    });

    renderWardrobe();
    dragify();
    restorePos();
    trackMouse();
    watchIdle();
    addMsg('ai', '我是小引，你的学习搭子小玩偶～点我聊天，点大熊可以给我换衣服。');
    setTimeout(function () { checkStatus(); }, 1200);
    scheduleTip(6000);
  }

  /* ---------------- 换装面板 ---------------- */
  function optBtn(list, cur, id, label, onPick) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'pw-opt' + (cur === id ? ' is-on' : '');
    b.textContent = label;
    b.addEventListener('click', function () { onPick(id); });
    return b;
  }

  function renderWardrobe() {
    var box;
    box = document.getElementById('pwSkin');
    box.innerHTML = '';
    SKINS.forEach(function (s) {
      box.appendChild(optBtn(SKINS, look.skin, s.id, s.name, function (v) {
        look.skin = v; applyLook(); renderWardrobe(); saveLook();
      }));
    });
    box = document.getElementById('pwGlasses');
    box.innerHTML = '';
    GLASSES.forEach(function (s) {
      box.appendChild(optBtn(GLASSES, look.glasses, s.id, s.name, function (v) {
        look.glasses = v; applyLook(); renderWardrobe(); saveLook();
      }));
    });
    box = document.getElementById('pwScarf');
    box.innerHTML = '';
    SCARVES.forEach(function (s) {
      box.appendChild(optBtn(SCARVES, look.scarf, s.id, s.name, function (v) {
        look.scarf = v; applyLook(); renderWardrobe(); saveLook();
      }));
    });
    box = document.getElementById('pwJacket');
    box.innerHTML = '';
    JACKETS.forEach(function (s) {
      box.appendChild(optBtn(JACKETS, look.jacket, s.id, s.name, function (v) {
        look.jacket = v; applyLook(); renderWardrobe(); saveLook();
      }));
    });
  }

  function applyLook() {
    if (!el.body) return;
    el.body.innerHTML = bearSVG(look);
    el.bigBtn.innerHTML = bearSVG(look, { big: 1 });
    el.avatar.innerHTML = bearSVG(look);
    aimEyes();
  }

  function randomLook() {
    ensureBuilt();
    var skins = SKINS.filter(function (s) { return true; });
    var gs = GLASSES.filter(function (s) { return s.id !== 'none'; });
    var sc = SCARVES.filter(function (s) { return s.id !== 'none'; });
    var jk = JACKETS.filter(function (s) { return s.id !== 'none'; });
    look = {
      skin: pick(skins).id,
      glasses: Math.random() < 0.75 ? pick(gs).id : 'none',
      scarf: Math.random() < 0.75 ? pick(sc).id : 'none',
      jacket: Math.random() < 0.8 ? pick(jk).id : 'none'
    };
    applyLook();
    renderWardrobe();
    saveLook();
    showBubble('这套好看吗？不满意再摇一次～');
  }

  function toggleWardrobe() {
    ensureBuilt();
    if (el.wardrobe.hidden) {
      el.wardrobe.hidden = false;
      el.big.classList.add('is-dressing');
      el.wrap.classList.add('is-wardrobe');   // 换装时把聊天框让出来
      renderWardrobe();
    } else {
      hideWardrobe();
    }
  }
  function hideWardrobe() {
    ensureBuilt();
    el.wardrobe.hidden = true;
    el.big.classList.remove('is-dressing');
    el.wrap.classList.remove('is-wardrobe');
  }

  /* ---------------- 眼睛追鼠标 ---------------- */
  function trackMouse() {
    window.addEventListener('mousemove', function (e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      aimEyes();
    }, { passive: true });
  }

  function aimEyes() {
    ensureBuilt();
    if (!el.wrap) return;
    var layers = [
      { node: el.body, size: 64 },
      { node: el.bigBtn, size: 220 }
    ];
    layers.forEach(function (L) {
      if (!L.node) return;
      var r = L.node.getBoundingClientRect();
      if (!r.width) return;
      var cx = r.left + r.width / 2;
      var cy = r.top + r.height * (L.size > 100 ? 0.4 : 0.44);
      var dx = mouse.x - cx;
      var dy = mouse.y - cy;
      var d = Math.sqrt(dx * dx + dy * dy) || 1;
      var max = L.size > 100 ? 3.6 : 2.6;
      var px = (dx / d) * Math.min(max, d / 40);
      var py = (dy / d) * Math.min(max, d / 40);
      var pupils = L.node.querySelectorAll('.pet-pupil');
      for (var i = 0; i < pupils.length; i++) {
        pupils[i].setAttribute('transform', 'translate(' + px.toFixed(2) + ',' + py.toFixed(2) + ')');
      }
    });
  }

  /* ---------------- 打开 / 收起 ---------------- */
  function setMin(min) {
    ensureBuilt();
    setStore(K_MIN, min ? '1' : '0');
    el.panel.hidden = !!min;
    hideBubble();
    if (min) {
      hideWardrobe();
      el.big.hidden = true;
    } else {
      el.big.hidden = false;
      lastAct = Date.now();
      aimEyes();
    }
    el.wrap.classList.toggle('is-open', !min);
    if (!min) autoGreet();
  }

  function autoGreet() {
    var tips = isDay() ? DAY_TIPS : NIGHT_TIPS;
    if (el.log && el.log.children.length <= 1) {
      var t = document.createElement('div');
      t.className = 'pet-msg ai';
      t.textContent = pick(tips);
      el.log.appendChild(t);
    }
  }

  /* 一段时间不用 AI → 自动收起，只留小熊头像 */
  function watchIdle() {
    setInterval(function () {
      if (el.panel.hidden) return;
      if (Date.now() - lastAct > 150000) {   // 2.5 分钟
        var tips = isDay() ? DAY_TIPS : NIGHT_TIPS;
        showBubble(pick(tips));
        setTimeout(function () { setMin(true); }, 2600);
      }
    }, 15000);
  }

  function addMsg(role, text) {
    var d = document.createElement('div');
    d.className = 'pet-msg ' + (role === 'me' ? 'me' : 'ai');
    d.textContent = text;
    el.log.appendChild(d);
    el.log.scrollTop = el.log.scrollHeight;
    return d;
  }

  var bubbleTimer = null;
  function showBubble(text) {
    el.bubble.textContent = text;
    el.bubble.hidden = false;
    el.bubble.classList.add('is-on');
    clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(function () { if (el.panel.hidden) hideBubble(); }, 5200);
  }
  function hideBubble() {
    el.bubble.hidden = true;
    el.bubble.classList.remove('is-on');
  }

  function scheduleTip(delay) {
    clearTimeout(tipTimer);
    tipTimer = setTimeout(function () {
      if (document.visibilityState === 'visible' && el.panel.hidden) {
        var tips = isDay() ? DAY_TIPS : NIGHT_TIPS;
        var i = Number(getStore(K_TIP, '-1'));
        tipIndex = (i + 1 + Math.floor(Math.random() * (tips.length - 1))) % tips.length;
        setStore(K_TIP, String(tipIndex));
        showBubble(tips[tipIndex]);
      }
      scheduleTip(90000 + Math.random() * 60000);
    }, delay);
  }

  function petReact() {
    el.body.classList.remove('is-bounce');
    void el.body.offsetWidth;
    el.body.classList.add('is-bounce');
    if (el.panel.hidden) showBubble(REACTS[Math.floor(Math.random() * REACTS.length)]);
    spawnParticles();
    setTimeout(function () { el.body.classList.remove('is-bounce'); }, 650);
  }

  function spawnParticles() {
    var emojis = ['💖', '✨', '🌟', '💕', '⭐', '🍀'];
    for (var i = 0; i < 6; i++) {
      (function (i) {
        var p = document.createElement('span');
        p.className = 'pet-particle';
        p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        p.style.setProperty('--dx', (Math.random() * 36 - 18) + 'px');
        p.style.animationDelay = (i * 55) + 'ms';
        el.wrap.appendChild(p);
        setTimeout(function () { if (p.parentNode) p.parentNode.removeChild(p); }, 1700);
      })(i);
    }
  }

  /* 拖动：拖小熊头像 = 整个挂件跟着走；拖大熊 = 只移动大熊 */
  function dragify() {
    var dragging = false, moved = false, sx = 0, sy = 0, ox = 0, oy = 0, target = null;

    function start(node, e) {
      target = node;
      dragging = true; moved = false; justDragged = false;
      sx = e.clientX; sy = e.clientY;
      var r = (node === el.bigBtn ? el.big : el.wrap).getBoundingClientRect();
      ox = r.left; oy = r.top;
      node.classList.add('is-drag');
      try { node.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
    }
    function move(e) {
      if (!dragging) return;
      var dx = e.clientX - sx, dy = e.clientY - sy;
      if (Math.abs(dx) + Math.abs(dy) > 6) moved = true;
      if (!moved) return;
      if (target === el.bigBtn) {
        var left = ox + dx, top = oy + dy;
        var r2 = el.big.getBoundingClientRect();
        left = Math.max(8, Math.min(window.innerWidth - r2.width - 8, left));
        top = Math.max(8, Math.min(window.innerHeight - r2.height - 8, top));
        el.big.style.position = 'fixed';
        el.big.style.left = left + 'px';
        el.big.style.top = top + 'px';
        el.big.style.right = 'auto';
        el.big.style.bottom = 'auto';
      } else {
        var left2 = Math.max(8, Math.min(window.innerWidth - 80, ox + dx));
        var top2 = Math.max(8, Math.min(window.innerHeight - 80, oy + dy));
        el.wrap.style.left = left2 + 'px';
        el.wrap.style.top = top2 + 'px';
        el.wrap.style.right = 'auto';
        el.wrap.style.bottom = 'auto';
      }
    }
    function end(e) {
      if (!dragging) return;
      dragging = false;
      var node = target;
      if (node) node.classList.remove('is-drag');
      try { if (node) node.releasePointerCapture(e.pointerId); } catch (err) { /* ignore */ }
      if (moved) {
        justDragged = true;
        if (node === el.bigBtn) {
          var rb = el.big.getBoundingClientRect();
          setStore('yl_pet_bigpos', JSON.stringify({ left: Math.round(rb.left), top: Math.round(rb.top) }));
        } else {
          var r = el.wrap.getBoundingClientRect();
          setStore(K_POS, JSON.stringify({ left: Math.round(r.left), top: Math.round(r.top) }));
        }
      }
      target = null;
    }

    el.body.addEventListener('pointerdown', function (e) { start(el.body, e); });
    el.body.addEventListener('pointermove', move);
    el.body.addEventListener('pointerup', end);
    el.bigBtn.addEventListener('pointerdown', function (e) { start(el.bigBtn, e); });
    el.bigBtn.addEventListener('pointermove', move);
    el.bigBtn.addEventListener('pointerup', end);
  }

  function restorePos() {
    var raw = getStore(K_POS, '');
    if (raw) {
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
    var raw2 = getStore('yl_pet_bigpos', '');
    if (raw2) {
      try {
        var q = JSON.parse(raw2);
        if (typeof q.left === 'number' && typeof q.top === 'number') {
          el.big.style.position = 'fixed';
          el.big.style.left = q.left + 'px';
          el.big.style.top = q.top + 'px';
          el.big.style.right = 'auto';
          el.big.style.bottom = 'auto';
        }
      } catch (e) { /* ignore */ }
    }
  }

  /* ---------------- 后端状态 ---------------- */
  function shortModel(m) {
    var s = String(m || '');
    if (s.indexOf(':') > -1) s = s.split(':')[0];
    var parts = s.split('/');
    if (parts.length > 1) s = parts[parts.length - 1];
    return s.length > 24 ? s.slice(0, 24) + '…' : s;
  }

  function checkStatus() {
    checked = true;
    fetch(apiUrl('/api/chat/status'), { cache: 'no-store' })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        ready = !!(j && j.ready);
        var label = j && j.providerLabel ? j.providerLabel : '';
        var name = shortModel(j && j.model);
        el.sub.textContent = ready
          ? '在线 · ' + (label ? label + ' / ' : '') + (name || 'workers-ai')
          : '只连着本地（未配大模型）';
        el.wrap.classList.toggle('is-offline', !ready);
      })
      .catch(function () {
        ready = false;
        el.sub.textContent = '连不上后端';
        el.wrap.classList.add('is-offline');
      });
  }

  function collectContext() {
    var out = { major: '', stage: '', module: '', level: '', view: '', doc: '', topic: '' };
    var nodes = document.querySelectorAll('.view');
    for (var k = 0; k < nodes.length; k++) {
      if (!nodes[k].hidden) { out.view = nodes[k].id.replace('view-', ''); break; }
    }
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
          if (found.level.questions && found.level.questions[0]) out.topic = found.level.questions[0].stem || '';
        }
      }
    } catch (e) { /* ignore */ }
    return out;
  }

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
      return '卡住很正常。先把这一关的讲解读一遍，然后试着回答第一题；答错了我会告诉你为什么错。';
    }
    return '我这会儿连不上大模型，只能回答几个基础问题：这关重点 / 给我一道练习 / 我卡住了。';
  }

  /* ---------------- 对话 ---------------- */
  function send(text) {
    if (waiting) return;
    if (el.panel.hidden) setMin(false);
    hideBubble();
    lastAct = Date.now();

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
      lastAct = Date.now();
    });
  }

  /* ---------------- 起步 ---------------- */
  function boot() {
    if (!document.body) return;
    look = loadLook();
    build();
    // 白天/夜晚的小熊配色：如果用户没选过肤色，就按时间自动（每次打开重新判断）
    if (!getStore(K_LOOK, '')) applyLook();
    if (getStore(K_MIN, '0') === '1') setMin(true);
    aimEyes();
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
    context: collectContext,
    look: function () { return look; },
    setLook: function (patch) {
      for (var k in patch) if (patch.hasOwnProperty(k)) look[k] = patch[k];
      applyLook(); renderWardrobe(); saveLook();
      return look;
    },
    wardrobe: function (on) { if (on) toggleWardrobe(); else hideWardrobe(); },
    random: randomLook
  };
})();