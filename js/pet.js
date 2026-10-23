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

  /* 点一下宠物会冒出来的可爱碎碎念（纯前端，不调接口） */
  var REACTS = [
    '摸头成功！开心转圈圈～',
    '嘿嘿，被你发现啦 🌟',
    '今天也要加油呀！',
    '陪你一起，就不孤单啦～',
    '戳一下，元气 +1！',
    '我在这儿呢，随时找我。',
    '想知道什么？点我聊天呀～',
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
  var ready = false;      // 后端是否配好了 Key
  var checked = false;
  var tipTimer = null;
  var tipIndex = 0;
  var justDragged = false;

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

  /* ---------------- 小引的样子（可爱 SVG 形象） ---------------- */
  function mascotSVG() {
    return '' +
      '<svg class="pet-svg" viewBox="0 0 100 100" width="100%" height="100%" aria-hidden="true">' +
      '<ellipse class="pet-foot" cx="38" cy="87" rx="10" ry="6"/>' +
      '<ellipse class="pet-foot" cx="62" cy="87" rx="10" ry="6"/>' +
      '<ellipse class="pet-body-shape" cx="50" cy="54" rx="35" ry="33"/>' +
      '<ellipse class="pet-belly" cx="50" cy="60" rx="22" ry="20"/>' +
      '<circle class="pet-blush" cx="29" cy="61" r="6"/>' +
      '<circle class="pet-blush" cx="71" cy="61" r="6"/>' +
      '<g class="pet-eye pet-eye-l">' +
        '<circle class="pet-eye-white" cx="38" cy="50" r="9.5"/>' +
        '<circle class="pet-pupil" cx="39" cy="51" r="5.2"/>' +
        '<circle class="pet-shine" cx="41" cy="48.5" r="1.9"/>' +
      '</g>' +
      '<g class="pet-eye pet-eye-r">' +
        '<circle class="pet-eye-white" cx="62" cy="50" r="9.5"/>' +
        '<circle class="pet-pupil" cx="61" cy="51" r="5.2"/>' +
        '<circle class="pet-shine" cx="63" cy="48.5" r="1.9"/>' +
      '</g>' +
      '<path class="pet-mouth" d="M45 66 Q50 71 55 66"/>' +
      '<path class="pet-sprout" d="M50 21 C50 12 43 9 39 12 C44 16 47 20 50 21 Z"/>' +
      '<path class="pet-sprout pet-sprout2" d="M50 21 C50 12 57 9 61 12 C56 16 53 20 50 21 Z"/>' +
      '</svg>';
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
      '    <span class="pet-avatar">' + mascotSVG() + '</span>',
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
      '  ' + mascotSVG(),
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
      if (justDragged) { justDragged = false; return; }   // 刚拖完不触发
      petReact();                 // 点一下 = 蹦一下 + 撒爱心 + 冒一句可爱的话
    });
    // 点气泡就能打开聊天框
    el.bubble.addEventListener('click', function () {
      hideBubble();
      if (el.panel.hidden) setMin(false);
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

  var bubbleTimer = null;
  function showBubble(text) {
    el.bubble.textContent = text;
    el.bubble.hidden = false;
    el.bubble.classList.add('is-on');
    clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(function () { if (el.panel.hidden) hideBubble(); }, 4500);
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

  /* 点一下宠物：蹦一下 + 冒一句可爱的话 + 撒小爱心（纯前端互动，不调接口） */
  function petReact() {
    el.body.classList.remove('is-bounce');
    void el.body.offsetWidth;            // 重排以重启动画
    el.body.classList.add('is-bounce');
    if (el.panel.hidden) {
      var line = REACTS[Math.floor(Math.random() * REACTS.length)];
      showBubble(line);
    }
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

  /* 拖动：按住猫头鹰可以拖着走，位置记在本地 */
  function dragify() {
    var dragging = false, moved = false, sx = 0, sy = 0, ox = 0, oy = 0;

    el.body.addEventListener('pointerdown', function (e) {
      dragging = true; moved = false; justDragged = false;
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
        justDragged = true;
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
  /* 把 nvidia/nemotron-3-super-120b-a12b:free 缩成 nemotron-3-super-120b-a12b，状态栏才放得下 */
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
          ? '在线 · ' + (label ? label + ' / ' : '') + (name || 'deepseek')
          : '只连着本地（未配大模型）';
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
