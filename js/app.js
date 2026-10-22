/* ==========================================================
   闯关学编程 · 交互逻辑
   纯原生 JS，无框架、无依赖，双击 index.html 即可运行
   ========================================================== */

(function () {
  'use strict';

  var STORAGE_KEY = 'ccc_progress_v1';
  var LETTERS = ['A', 'B', 'C', 'D', 'E'];

  function $(id) { return document.getElementById(id); }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* ---------------- 状态 ---------------- */

  var state = {
    track: null,          // 专业方向 id
    topic: 'c',           // 学习方向 id
    style: null,          // 学习方式 id
    levelIndex: 0,
    questionIndex: 0,
    levelCorrect: 0,
    progress: loadProgress()
  };

  function emptyProgress() {
    return { track: null, style: null, levels: {} };
  }

  function loadProgress() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return emptyProgress();
      var p = JSON.parse(raw) || {};
      return {
        track: p.track || null,
        style: p.style || null,
        levels: p.levels || {}
      };
    } catch (e) {
      return emptyProgress();
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
    } catch (e) { /* 隐私模式下可能写不进去，忽略 */ }
  }

  /* ---------------- 视图切换 ---------------- */

  var VIEWS = ['view-welcome', 'view-setup', 'view-map', 'view-level', 'view-result'];

  function show(id) {
    VIEWS.forEach(function (v) { $(v).hidden = (v !== id); });
    $('topProgressWrap').hidden = (id === 'view-welcome' || id === 'view-setup');
    $('homeBtn').hidden = (id === 'view-welcome');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ---------------- 进度计算 ---------------- */

  function completedCount() {
    return LEVELS.filter(function (l) { return !!state.progress.levels[l.id]; }).length;
  }

  function unlockedCount() {
    return Math.min(completedCount() + 1, LEVELS.length);
  }

  function isUnlocked(i) { return i < unlockedCount(); }

  function updateTopProgress() {
    var pct = Math.round((completedCount() / LEVELS.length) * 100);
    $('topProgressFill').style.width = pct + '%';
    $('topProgressText').textContent = pct + '%';
  }

  function starsText(n) {
    var out = '';
    for (var i = 0; i < 3; i++) {
      out += i < n ? '<span>★</span>' : '<span class="empty">★</span>';
    }
    return out;
  }

  /* ---------------- 选择页 ---------------- */

  function renderSetup() {
    /* 专业方向 */
    var tg = $('trackGroup');
    tg.innerHTML = '';
    TRACKS.forEach(function (t) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip' + (state.track === t.id ? ' selected' : '');
      b.innerHTML = '<span class="chip-name">' + t.emoji + ' ' + esc(t.name) + '</span>' +
                    '<span class="chip-desc">' + esc(t.desc) + '</span>';
      b.onclick = function () { state.track = t.id; renderSetup(); };
      tg.appendChild(b);
    });

    /* 学习方向 */
    var topg = $('topicGroup');
    topg.innerHTML = '';
    TOPICS.forEach(function (tp) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip' + (state.topic === tp.id ? ' selected' : '');
      b.disabled = !tp.enabled;
      b.innerHTML = '<span class="chip-name">' + tp.emoji + ' ' + esc(tp.name) + '</span>' +
                    '<span class="chip-desc">' + esc(tp.desc) + '</span>';
      if (tp.enabled) b.onclick = function () { state.topic = tp.id; renderSetup(); };
      topg.appendChild(b);
    });

    /* 学习方式 */
    var sg = $('styleGroup');
    sg.innerHTML = '';
    STYLES.forEach(function (s) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip' + (state.style === s.id ? ' selected' : '');
      b.innerHTML = '<span class="chip-name">' + s.emoji + ' ' + esc(s.name) + '</span>' +
                    '<span class="chip-desc">' + esc(s.desc) + '</span>';
      b.onclick = function () { state.style = s.id; renderSetup(); };
      sg.appendChild(b);
    });

    $('beginBtn').disabled = !(state.track && state.style);
  }

  /* ---------------- 地图页 ---------------- */

  function renderMap() {
    var parts = [];
    if (state.progress.track) {
      TRACKS.forEach(function (t) { if (t.id === state.progress.track) parts.push(t.emoji + ' ' + t.name); });
    }
    if (state.progress.style) {
      STYLES.forEach(function (s) { if (s.id === state.progress.style) parts.push(s.emoji + ' ' + s.name); });
    }
    $('mapSub').textContent = parts.length
      ? '你的选择：' + parts.join(' · ') + '　|　完成当前关卡解锁下一关'
      : '完成当前关卡解锁下一关';

    var list = $('levelList');
    list.innerHTML = '';

    LEVELS.forEach(function (lvl, i) {
      var rec = state.progress.levels[lvl.id];
      var unlocked = isUnlocked(i);

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'level-card' + (unlocked ? '' : ' locked') + (rec ? ' done' : '');
      btn.disabled = !unlocked;

      btn.innerHTML =
        '<span class="level-index">' + (unlocked ? (rec ? '✓' : i + 1) : '🔒') + '</span>' +
        '<span class="level-info">' +
          '<span class="level-title">' + esc(lvl.title) + '</span>' +
          '<span class="level-meta">' +
            (rec ? ('已通关 · 答对 ' + rec.correct + '/' + rec.total + ' 题')
                 : (unlocked ? ('共 ' + lvl.questions.length + ' 题 · 约 5 分钟')
                             : '完成上一关后解锁')) +
          '</span>' +
        '</span>' +
        '<span class="level-stars">' + (rec ? starsText(rec.stars) : '') + '</span>';

      btn.onclick = function () { startLevel(i); };
      list.appendChild(btn);
    });

    updateTopProgress();
  }

  /* ---------------- 答题页 ---------------- */

  function startLevel(i) {
    state.levelIndex = i;
    state.questionIndex = 0;
    state.levelCorrect = 0;
    show('view-level');
    renderQuestion();
  }

  function renderQuestion() {
    var lvl = LEVELS[state.levelIndex];
    var q = lvl.questions[state.questionIndex];

    $('levelName').textContent = lvl.title;
    $('qCount').textContent = '第 ' + (state.questionIndex + 1) + ' / ' + lvl.questions.length + ' 题';
    $('qStem').textContent = q.stem;

    /* 学习方式为「先看讲解 / 先看例题」时，本关第一题前展示要点 */
    var briefBox = $('briefBox');
    if (state.questionIndex === 0 && state.style && state.style !== 'game') {
      briefBox.hidden = false;
      briefBox.innerHTML = '<strong>本关要点</strong>' + esc(lvl.brief);
    } else {
      briefBox.hidden = true;
    }

    var ol = $('optionList');
    ol.innerHTML = '';
    q.options.forEach(function (opt, idx) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'option';
      b.innerHTML = '<span class="idx">' + LETTERS[idx] + '</span><span>' + esc(opt) + '</span>';
      b.onclick = function () { chooseOption(idx); };
      ol.appendChild(b);
    });

    $('feedback').hidden = true;

    var isLast = state.questionIndex === lvl.questions.length - 1;
    $('nextBtn').textContent = isLast ? '完成本关 →' : '下一题 →';
  }

  function chooseOption(idx) {
    if (!$('feedback').hidden) return; /* 已作答过，忽略重复点击 */

    var lvl = LEVELS[state.levelIndex];
    var q = lvl.questions[state.questionIndex];
    var correct = idx === q.answer;

    var opts = $('optionList').querySelectorAll('.option');
    for (var i = 0; i < opts.length; i++) {
      opts[i].disabled = true;
      if (i === q.answer) opts[i].classList.add('correct');
      if (i === idx && !correct) opts[i].classList.add('wrong');
    }

    if (correct) state.levelCorrect++;

    var ft = $('feedbackTitle');
    ft.textContent = correct ? '✅ 答对了！' : '❌ 再想想，正确答案是 ' + LETTERS[q.answer];
    ft.className = 'feedback-title ' + (correct ? 'ok' : 'bad');
    $('feedbackExplain').textContent = q.explain;
    $('feedback').hidden = false;
    $('feedback').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  /* ---------------- 结算 ---------------- */

  function finishLevel() {
    var lvl = LEVELS[state.levelIndex];
    var total = lvl.questions.length;
    var ratio = state.levelCorrect / total;
    var stars = ratio === 1 ? 3 : ratio >= 0.67 ? 2 : ratio > 0 ? 1 : 0;

    var prev = state.progress.levels[lvl.id];
    state.progress.levels[lvl.id] = {
      stars: Math.max(stars, prev ? prev.stars : 0),
      correct: state.levelCorrect,
      total: total,
      doneAt: new Date().toISOString()
    };
    saveProgress();
    updateTopProgress();

    show('view-result');
    renderResult(lvl);
  }

  function renderResult(justFinished) {
    var done = 0, totalQ = 0, totalC = 0, stars = 0;
    LEVELS.forEach(function (l) {
      var r = state.progress.levels[l.id];
      if (r) {
        done++;
        totalQ += r.total;
        totalC += r.correct;
        stars += r.stars;
      }
    });
    var acc = totalQ ? Math.round((totalC / totalQ) * 100) : 0;

    $('reportSub').textContent = justFinished
      ? '刚才这关：' + justFinished.title + '　答对 ' + state.levelCorrect + '/' + justFinished.questions.length + ' 题'
      : '把所有关卡刷到 3 星，是这一步的小目标。';

    $('statGrid').innerHTML =
      statCard(done + ' / ' + LEVELS.length, '已通关卡') +
      statCard(totalQ, '累计答题') +
      statCard(acc + '<span class="unit">%</span>', '总体正确率') +
      statCard(stars + ' <span class="unit">/ ' + LEVELS.length * 3 + ' ★</span>', '已获星星');

    var rec = $('levelRecords');
    rec.innerHTML = '';
    LEVELS.forEach(function (l) {
      var r = state.progress.levels[l.id];
      var row = document.createElement('div');
      row.className = 'record-row';
      row.innerHTML =
        '<span>' + esc(l.title) + '</span>' +
        (r
          ? '<span class="muted">' + r.correct + '/' + r.total + ' 题 · <span style="color:#f5a623">' + '★'.repeat(r.stars) + '</span></span>'
          : '<span class="muted">未开始</span>');
      rec.appendChild(row);
    });
  }

  function statCard(num, label) {
    return '<div class="stat"><div class="stat-num">' + num + '</div><div class="stat-label">' + esc(label) + '</div></div>';
  }

  /* ---------------- 事件绑定 ---------------- */

  $('startBtn').onclick = function () {
    show('view-setup');
    renderSetup();
  };

  $('continueBtn').onclick = function () {
    show('view-map');
    renderMap();
  };

  $('beginBtn').onclick = function () {
    state.progress.track = state.track;
    state.progress.style = state.style;
    saveProgress();
    show('view-map');
    renderMap();
  };

  $('backToMap').onclick = function () {
    show('view-map');
    renderMap();
  };

  $('backToMap2').onclick = function () {
    show('view-map');
    renderMap();
  };

  $('reportBtn').onclick = function () {
    show('view-result');
    renderResult(null);
  };

  $('homeBtn').onclick = function () {
    show('view-welcome');
    refreshWelcome();
  };

  $('nextBtn').onclick = function () {
    var lvl = LEVELS[state.levelIndex];
    if (state.questionIndex < lvl.questions.length - 1) {
      state.questionIndex++;
      renderQuestion();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      finishLevel();
    }
  };

  $('resetBtn').onclick = function () {
    if (!window.confirm('确定要清空全部学习进度吗？这个操作不能撤销。')) return;
    state.progress = emptyProgress();
    state.track = null;
    state.style = null;
    saveProgress();
    updateTopProgress();
    show('view-welcome');
    refreshWelcome();
  };

  /* ---------------- 欢迎页状态 ---------------- */

  function refreshWelcome() {
    var hasProgress = completedCount() > 0 || !!state.progress.track;
    $('continueBtn').hidden = !hasProgress;
    $('startBtn').textContent = hasProgress ? '重新选择方向' : '开始第一步 →';
  }

  /* ---------------- 初始化 ---------------- */

  function init() {
    /* 恢复上次的选择 */
    if (state.progress.track) state.track = state.progress.track;
    if (state.progress.style) state.style = state.progress.style;

    refreshWelcome();
    updateTopProgress();
    show('view-welcome');
  }

  init();
})();
