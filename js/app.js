/* ==========================================================
   引路 · 页面逻辑
   视图：home（首页）/ browse（专业库）/ major（路径）/ level（关卡）/ report（报告）
   进度保存在 localStorage，key = yinlu_v1
   ========================================================== */
(function () {
  'use strict';

  var STORE_KEY = 'yinlu_v1';

  var state = {
    majorId: null,
    levelId: null,
    qi: 0,
    levelCorrect: 0,
    answered: false,
    done: {}              // levelId -> { ok, total, stars, name, majorId, ts }
  };

  function $(id) { return document.getElementById(id); }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  /* ---------------- 存储 ---------------- */
  function load() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (!raw) return;
      var data = JSON.parse(raw);
      state.majorId = data.majorId || null;
      state.done = data.done || {};
    } catch (e) { /* 忽略损坏数据 */ }
  }
  function save() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify({ majorId: state.majorId, done: state.done }));
    } catch (e) { /* 隐私模式下可能不可写 */ }
  }

  /* ---------------- 视图切换 ---------------- */
  var VIEWS = ['home', 'browse', 'major', 'level', 'report'];
  function show(name) {
    VIEWS.forEach(function (v) {
      var node = $('view-' + v);
      if (node) node.hidden = (v !== name);
    });
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-go') === name);
    });
    window.scrollTo(0, 0);
    if (name === 'browse') renderBrowse();
    if (name === 'major') renderMajor();
    if (name === 'report') renderReport();
  }

  /* ---------------- 小工具 ---------------- */
  function starSum() {
    return Object.keys(state.done).reduce(function (s, k) { return s + (state.done[k].stars || 0); }, 0);
  }
  function toast(msg) {
    var t = $('toast');
    if (!t) {
      t = el('div', 'toast');
      t.id = 'toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(function () { t.classList.remove('show'); }, 2400);
  }

  /* ---------------- 首页 ---------------- */
  function renderHomeCats() {
    var box = $('homeCats');
    if (!box || box.childElementCount) return;
    CATEGORIES.forEach(function (c) {
      var n = majorsOfCategory(c.id).length;
      var a = el('a', 'cat-card');
      a.href = '#';
      a.setAttribute('data-cat', c.id);
      a.innerHTML =
        '<span class="cat-emoji">' + c.emoji + '</span>' +
        '<span class="cat-name">' + c.name + '</span>' +
        '<span class="cat-desc">' + c.desc + '</span>' +
        '<span class="cat-count">' + n + ' 个专业 →</span>';
      box.appendChild(a);
    });
  }

  /* ---------------- 专业库 ---------------- */
  var curCat = null;

  function renderBrowse() {
    var chips = $('catChips');
    chips.innerHTML = '';
    var all = el('button', 'chip' + (curCat === null ? ' chip-on' : ''), '全部专业');
    all.setAttribute('data-cat', '');
    chips.appendChild(all);
    CATEGORIES.forEach(function (c) {
      var b = el('button', 'chip' + (curCat === c.id ? ' chip-on' : ''), c.emoji + ' ' + c.name);
      b.setAttribute('data-cat', c.id);
      chips.appendChild(b);
    });
    renderMajorList();
  }

  function renderMajorList() {
    var cat = curCat ? getCategory(curCat) : null;
    $('browseCatName').textContent = cat ? cat.name : '全部专业（' + MAJORS.length + '）';
    $('browseCatDesc').textContent = cat ? cat.desc : '按学科门类浏览，或者直接从下面找你的专业';

    var list = curCat ? majorsOfCategory(curCat) : MAJORS;
    var box = $('majorList');
    box.innerHTML = '';
    list.forEach(function (m) {
      var a = el('a', 'major-card');
      a.href = '#';
      a.setAttribute('data-major', m.id);
      var doneN = 0, totalN = 0;
      var path = getPath(m.id);
      if (path) {
        allLevelsOf(path).forEach(function (lv) {
          totalN++;
          if (state.done[lv.id]) doneN++;
        });
      }
      var badge = m.ready
        ? '<span class="badge badge-on">示例关卡已就绪</span>'
        : '<span class="badge">路径框架</span>';
      var progress = doneN ? '<span class="badge badge-done">已完成 ' + doneN + ' 关</span>' : '';
      a.innerHTML =
        '<span class="major-card-emoji">' + m.emoji + '</span>' +
        '<span class="major-card-body">' +
          '<span class="major-card-name">' + m.name + '</span>' +
          '<span class="major-card-desc">' + m.desc + '</span>' +
          '<span class="major-card-badges">' + badge + progress +
            '<span class="badge badge-ghost">' + totalN + ' 关</span></span>' +
        '</span>';
      box.appendChild(a);
    });
  }

  /* ---------------- 专业路径 ---------------- */
  function openMajor(id) {
    state.majorId = id;
    save();
    show('major');
  }

  function renderMajor() {
    if (!state.majorId) { show('browse'); return; }
    var path = getPath(state.majorId);
    if (!path) { show('browse'); return; }
    var m = path.major;
    var cat = getCategory(m.cat);
    $('mjEmoji').textContent = m.emoji;
    $('mjName').textContent = m.name;
    $('mjMeta').textContent = (cat ? cat.name : '') + ' · ' + m.desc +
      (m.ready ? ' · 已有 C 语言示例关卡' : ' · 路径框架（关卡内容建设中）');

    var levels = allLevelsOf(path);
    var doneN = levels.filter(function (lv) { return !!state.done[lv.id]; }).length;
    $('mjProgressFill').style.width = levels.length ? Math.round(doneN / levels.length * 100) + '%' : '0%';
    $('mjProgressText').textContent = doneN + ' / ' + levels.length + ' 关';

    var box = $('stageList');
    box.innerHTML = '';
    path.stages.forEach(function (stage, si) {
      var wrap = el('div', 'stage');
      var stageDone = 0, stageTotal = 0;
      stage.modules.forEach(function (mod) {
        mod.levels.forEach(function (lv) {
          stageTotal++;
          if (state.done[lv.id]) stageDone++;
        });
      });

      var head = el('div', 'stage-head');
      head.innerHTML =
        '<span class="stage-badge">' + (si + 1) + '</span>' +
        '<div class="stage-title-wrap">' +
          '<h2 class="stage-title">' + stage.title + '</h2>' +
          '<p class="stage-goal">' + stage.goal + '</p>' +
        '</div>' +
        '<span class="stage-progress">' + stageDone + '/' + stageTotal + '</span>';
      wrap.appendChild(head);

      var mods = el('div', 'modules');
      stage.modules.forEach(function (mod) {
        var card = el('div', 'module');
        var modDone = mod.levels.filter(function (lv) { return !!state.done[lv.id]; }).length;

        var mh = el('div', 'module-head');
        mh.innerHTML =
          '<span class="module-name">' + mod.name + '</span>' +
          '<span class="module-count">' + modDone + '/' + mod.levels.length + '</span>';
        card.appendChild(mh);

        var lvBox = el('div', 'level-list');
        mod.levels.forEach(function (lv) {
          var rec = state.done[lv.id];
          var a = el('a', 'level-item' + (rec ? ' is-done' : '') + (lv.ready ? '' : ' is-soon'));
          a.href = '#';
          a.setAttribute('data-level', lv.id);
          var right = rec
            ? '<span class="stars">' + starsText(rec.stars) + '</span>'
            : (lv.ready ? '<span class="level-go">开始 →</span>' : '<span class="level-soon">建设中</span>');
          a.innerHTML =
            '<span class="level-dot">' + (rec ? '✓' : (lv.ready ? '▶' : '·')) + '</span>' +
            '<span class="level-name-txt">' + lv.name + '</span>' + right;
          lvBox.appendChild(a);
        });
        card.appendChild(lvBox);
        mods.appendChild(card);
      });
      wrap.appendChild(mods);
      box.appendChild(wrap);
    });
  }

  function starsText(n) {
    n = n || 0;
    var s = '';
    for (var i = 0; i < 3; i++) s += i < n ? '★' : '☆';
    return s;
  }

  /* ---------------- 关卡 ---------------- */
  function openLevel(levelId) {
    var path = getPath(state.majorId);
    var found = path && findLevel(path, levelId);
    if (!found) { show('major'); return; }

    state.levelId = levelId;
    state.qi = 0;
    state.levelCorrect = 0;

    $('crumb').textContent = found.module.name + ' · ' + found.stage.title;
    $('levelName').textContent = found.level.name;
    $('briefBox').innerHTML = '<b>本关要点：</b>' + found.level.brief;

    if (!found.level.questions) {
      $('quizCard').hidden = true;
      $('levelEmpty').hidden = false;
      show('level');
      return;
    }
    $('quizCard').hidden = false;
    $('levelEmpty').hidden = true;
    show('level');
    renderQuestion();
  }

  function currentLevel() {
    var path = getPath(state.majorId);
    return path ? findLevel(path, state.levelId) : null;
  }

  function renderQuestion() {
    var found = currentLevel();
    if (!found) return;
    var qs = found.level.questions;
    var q = qs[state.qi];
    state.answered = false;

    $('qCount').textContent = '第 ' + (state.qi + 1) + ' / ' + qs.length + ' 题';
    $('qStem').textContent = q.stem;

    var box = $('optionList');
    box.innerHTML = '';
    q.options.forEach(function (opt, i) {
      var b = el('button', 'option');
      b.innerHTML = '<span class="option-key">' + 'ABCD'[i] + '</span><span class="option-txt">' + esc(opt) + '</span>';
      b.setAttribute('data-i', i);
      box.appendChild(b);
    });
    $('feedback').hidden = true;
    $('nextBtn').textContent = state.qi === qs.length - 1 ? '完成本关 →' : '下一题 →';
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function chooseOption(i) {
    if (state.answered) return;
    var found = currentLevel();
    if (!found) return;
    var q = found.level.questions[state.qi];
    state.answered = true;

    var opts = $('optionList').querySelectorAll('.option');
    opts.forEach(function (b, idx) {
      b.disabled = true;
      if (idx === q.answer) b.classList.add('correct');
      if (idx === i && i !== q.answer) b.classList.add('wrong');
    });

    var ok = i === q.answer;
    if (ok) state.levelCorrect++;

    $('feedback').hidden = false;
    $('feedbackTitle').textContent = ok ? '✅ 答对了' : '❌ 再想想，正确答案是 ' + 'ABCD'[q.answer];
    $('feedbackTitle').className = ok ? 'fb-ok' : 'fb-bad';
    $('feedbackExplain').textContent = q.explain;
  }

  function nextQuestion() {
    var found = currentLevel();
    if (!found) return;
    var qs = found.level.questions;
    if (state.qi < qs.length - 1) {
      state.qi++;
      renderQuestion();
      return;
    }
    var total = qs.length;
    var stars = state.levelCorrect === total ? 3
      : (state.levelCorrect >= Math.ceil(total * 2 / 3) ? 2 : (state.levelCorrect > 0 ? 1 : 0));
    var prev = state.done[state.levelId];
    if (!prev || stars >= (prev.stars || 0)) {
      state.done[state.levelId] = {
        ok: state.levelCorrect, total: total, stars: stars,
        name: found.level.name, majorId: state.majorId, ts: Date.now()
      };
      save();
    }
    toast('本关完成：' + state.levelCorrect + '/' + total + ' 题正确 ' + starsText(stars));
    show('major');
  }

  /* ---------------- 报告 ---------------- */
  function renderReport() {
    var ids = Object.keys(state.done);
    var okSum = 0, totalSum = 0;
    ids.forEach(function (k) {
      okSum += state.done[k].ok || 0;
      totalSum += state.done[k].total || 0;
    });
    var acc = totalSum ? Math.round(okSum / totalSum * 100) : 0;

    $('reportSub').textContent = ids.length
      ? '已完成 ' + ids.length + ' 关，累计答对 ' + okSum + ' / ' + totalSum + ' 题'
      : '还没有开始任何关卡';

    var stats = [
      { n: ids.length, label: '已完成关卡' },
      { n: totalSum, label: '累计答题' },
      { n: acc + '%', label: '总体正确率' },
      { n: starSum(), label: '获得星星' }
    ];
    var grid = $('statGrid');
    grid.innerHTML = '';
    stats.forEach(function (s) {
      grid.appendChild(el('div', 'stat',
        '<div class="stat-num">' + s.n + '</div><div class="stat-label">' + s.label + '</div>'));
    });

    var list = $('levelRecords');
    list.innerHTML = '';
    if (!ids.length) {
      list.appendChild(el('p', 'muted', '做几关之后，这里会显示你每一关的记录。'));
      return;
    }
    ids.sort(function (a, b) { return (state.done[b].ts || 0) - (state.done[a].ts || 0); });
    ids.forEach(function (k) {
      var r = state.done[k];
      var major = getMajor(r.majorId);
      var row = el('div', 'record');
      row.innerHTML =
        '<span class="record-name">' + r.name + '</span>' +
        '<span class="record-major">' + (major ? major.name : '') + '</span>' +
        '<span class="record-score">' + r.ok + '/' + r.total + '</span>' +
        '<span class="stars">' + starsText(r.stars) + '</span>';
      list.appendChild(row);
    });
  }

  /* ---------------- 事件绑定 ---------------- */
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-go]');
    if (t) {
      e.preventDefault();
      show(t.getAttribute('data-go'));
      return;
    }
    var cat = e.target.closest('[data-cat]');
    if (cat) {
      e.preventDefault();
      curCat = cat.getAttribute('data-cat') || null;
      show('browse');
      return;
    }
    var mj = e.target.closest('[data-major]');
    if (mj) {
      e.preventDefault();
      openMajor(mj.getAttribute('data-major'));
      return;
    }
    var lv = e.target.closest('[data-level]');
    if (lv) {
      e.preventDefault();
      openLevel(lv.getAttribute('data-level'));
      return;
    }
    var opt = e.target.closest('.option');
    if (opt && !opt.disabled) {
      chooseOption(Number(opt.getAttribute('data-i')));
    }
  });

  $('nextBtn').addEventListener('click', nextQuestion);
  $('backToMajor').addEventListener('click', function (e) { e.preventDefault(); show('major'); });
  $('backToMajor2').addEventListener('click', function (e) { e.preventDefault(); show('major'); });
  $('resetBtn').addEventListener('click', function () {
    if (!confirm('确定要清空所有学习进度吗？此操作不可撤销。')) return;
    state.done = {};
    save();
    renderReport();
    toast('进度已清空');
  });

  /* ---------------- 启动 ---------------- */
  load();
  renderHomeCats();
  show('home');
})();
