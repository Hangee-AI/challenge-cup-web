/* ==========================================================
   引路 · 页面逻辑
   流程：首页 → 选专业 → 选学习方式 → 我的路径 → 闯关地图 → 关卡 → 报告
   视图：home / browse / style / major / map / level / report
   进度保存在 localStorage，key = yinlu_v1
   ========================================================== */
(function () {
  'use strict';

  var STORE_KEY = 'yinlu_v1';
  var ONLINE = false;  // 后端可用时为 true，自动判题走 POST，离线本地判题

  var state = {
    majorId: null,
    style: null,          // 'video' | 'text'
    levelId: null,
    qi: 0,
    levelCorrect: 0,
    answered: false,
    fromMap: true,
    videoPage: null,      // 视频页当前播放第几集
    done: {},             // levelId -> { ok, total, stars, name, majorId, ts }
    profile: null,        // { mode:'guest'|'member', sid, nickname, avatar, since }
    study: {},            // 'YYYY-MM-DD' -> 秒
    last: null,           // { majorId, levelId, mode, page, docY, ts } 上次学到哪
    theme: 'morning',     // 'morning' | 'night'
    caro: 0,
    quote: 0
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
      state.style = data.style || null;
      state.done = data.done || {};
      state.profile = data.profile || null;
      state.study = data.study || {};
      state.last = data.last || null;
      state.theme = data.theme === 'night' ? 'night' : 'morning';
    } catch (e) { /* 忽略损坏数据 */ }
  }
  function save() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify({
        majorId: state.majorId, style: state.style, done: state.done,
        profile: state.profile, study: state.study, last: state.last,
        theme: state.theme
      }));
    } catch (e) { /* 隐私模式下可能不可写 */ }
  }

  /* ---------------- 视图切换 ---------------- */
  var VIEWS = ['home', 'browse', 'style', 'major', 'map', 'doc', 'video', 'level', 'report', 'profile'];
  var curView = 'home';

  function show(name) {
    // 需要专业身份的页面，没选专业就先回选专业
    if (['style', 'major', 'map'].indexOf(name) > -1 && !state.majorId) name = 'browse';
    if (name === 'doc' && (!state.majorId || !state.levelId)) name = 'map';
    if (name === 'video' && !state.majorId) name = 'browse';
    if (name === 'level' && !state.levelId) name = 'map';
    curView = name;

    VIEWS.forEach(function (v) {
      var node = $('view-' + v);
      if (node) node.hidden = (v !== name);
    });
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-go') === name);
    });
    updateNav();
    markStyleSwitch();
    window.scrollTo(0, 0);

    if (name === 'home') { renderHomeCta(); renderHomeExtras(); }
    if (name === 'browse') renderBrowse();
    if (name === 'style') renderStyle();
    if (name === 'major') renderMajor();
    if (name === 'map') renderMap();
    if (name === 'doc') renderDoc();
    if (name === 'video') renderVideo();
    if (name === 'report') renderReport();
    if (name === 'profile') renderProfile();
  }

  function updateNav() {
    var has = !!state.majorId;
    var major = has ? getMajor(state.majorId) : null;
    $('navPath').hidden = !has;
    $('navMap').hidden = !has;
    $('reselectBtn').hidden = !has;
    $('navPick').hidden = has;
    $('navMajor').hidden = !has;
    if (major) $('navMajor').textContent = major.emoji + ' ' + major.name;
    var cta = $('homeCta');
    if (cta) cta.textContent = has ? '继续我的路径 →' : '选我的专业 →';
    var me = $('navMe');
    if (me) {
      var p = state.profile;
      if (p && p.mode === 'member') {
        $('navMeAvatar').textContent = p.avatar || '🐱';
        $('navMeName').textContent = p.nickname || '同学';
        me.classList.add('nav-me-on');
      } else {
        $('navMeAvatar').textContent = '👤';
        $('navMeName').textContent = '登录';
        me.classList.remove('nav-me-on');
      }
    }
  }

  /* ---------------- 小工具 ---------------- */
  function starSum() {
    return Object.keys(state.done).reduce(function (s, k) { return s + (state.done[k].stars || 0); }, 0);
  }
  function starsText(n) {
    n = n || 0;
    var s = '';
    for (var i = 0; i < 3; i++) s += i < n ? '★' : '☆';
    return s;
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
  function renderHomeCta() { updateNav(); }

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

  /* ---------------- 选专业 ---------------- */
  var curCat = null;

  function renderBrowse() {
    var has = !!state.majorId;
    $('pickMode').hidden = has;
    $('myMajorMode').hidden = !has;

    if (has) {
      var m = getMajor(state.majorId);
      var cat = getCategory(m.cat);
      var path = getPath(m.id);
      var levels = path ? allLevelsOf(path) : [];
      var doneN = levels.filter(function (lv) { return !!state.done[lv.id]; }).length;
      $('myEmoji').textContent = m.emoji;
      $('myName').textContent = m.name;
      $('myMeta').textContent = (cat ? cat.name : '') + ' · ' + m.desc +
        ' · 已完成 ' + doneN + ' / ' + levels.length + ' 关';
      markStyleSwitch();
      return;
    }

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
      var path = getPath(m.id);
      var totalN = path ? allLevelsOf(path).length : 0;
      var doneN = path ? allLevelsOf(path).filter(function (lv) { return !!state.done[lv.id]; }).length : 0;
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

  function selectMajor(id) {
    state.majorId = id;
    save();
    if (!state.style) { show('style'); return; }
    show('major');
  }

  function reselect() {
    state.majorId = null;
    curCat = null;
    save();
    toast('已清除专业选择，可以重新选');
    show('browse');
  }

  /* ---------------- 选学习方式 ---------------- */
  function styleName(id) {
    for (var i = 0; i < STYLES.length; i++) if (STYLES[i].id === id) return STYLES[i].emoji + ' ' + STYLES[i].name;
    return '未选择';
  }

  function renderStyle() {
    var box = $('styleList');
    box.innerHTML = '';
    STYLES.forEach(function (s) {
      var a = el('a', 'style-card' + (state.style === s.id ? ' style-on' : '') + (s.soon ? ' style-soon' : ''));
      a.href = '#';
      a.setAttribute('data-style', s.id);
      a.innerHTML =
        '<span class="style-emoji">' + s.emoji + '</span>' +
        '<span class="style-name">' + s.name +
        (s.soon ? '<span class="style-badge">即将开放</span>' : '') + '</span>' +
        '<span class="style-desc">' + s.desc + '</span>' +
        '<span class="style-tag">' + s.tag + '</span>' +
        (state.style === s.id ? '<span class="style-check">✓ 当前选择</span>' : '');
      box.appendChild(a);
    });
  }

  function selectStyle(id) {
    state.style = id;
    save();
    toast('学习方式已设为「' + styleName(id).replace(/^[^\u4e00-\u9fa5A-Za-z]+/, '') + '」');
    show('major');
  }

  /* 学习方式切换（我的专业页的大按钮 / 路径页的小按钮，共用一个数据属性） */
  function markStyleSwitch() {
    var opts = document.querySelectorAll('[data-switch-style]');
    for (var i = 0; i < opts.length; i++) {
      var on = opts[i].getAttribute('data-switch-style') === state.style;
      if (opts[i].classList.contains('learn-opt')) {
        opts[i].className = 'learn-opt' + (on ? ' learn-opt-on' : '');
      } else {
        opts[i].classList.toggle('mode-btn-on', on);
      }
      opts[i].setAttribute('aria-pressed', on ? 'true' : 'false');
    }
  }

  function switchStyle(id) {
    if (!id || state.style === id) return;
    state.style = id;
    save();
    markStyleSwitch();
    // 正停在文档页/视频页时，直接换成另一种看同一关
    if (curView === 'doc' || curView === 'video') {
      show(id === 'video' ? 'video' : 'doc');
    }
    toast('已切换为「' + styleName(id).replace(/^[^\u4e00-\u9fa5A-Za-z]+/, '') + '」');
  }

  /* ---------------- 专业路径 ---------------- */
  function renderMajor() {
    if (!state.majorId) { show('browse'); return; }
    var path = getPath(state.majorId);
    if (!path) { show('browse'); return; }
    var m = path.major;
    var cat = getCategory(m.cat);
    $('mjEmoji').textContent = m.emoji;
    $('mjName').textContent = m.name;
    $('mjMeta').textContent = (cat ? cat.name : '') + ' · ' + m.desc +
      ' · ' + styleName(state.style) +
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

  /* ---------------- 闯关地图 ---------------- */
  function readyLevels(path) {
    var out = [];
    path.stages.forEach(function (stage) {
      stage.modules.forEach(function (mod) {
        mod.levels.forEach(function (lv) {
          if (lv.ready) out.push({ level: lv, module: mod, stage: stage });
        });
      });
    });
    return out;
  }

  function renderMap() {
    if (!state.majorId) { show('browse'); return; }
    var path = getPath(state.majorId);
    if (!path) { show('browse'); return; }
    var list = readyLevels(path);
    var doneN = list.filter(function (x) { return !!state.done[x.level.id]; }).length;
    $('mapSub').textContent = list.length
      ? '共 ' + list.length + ' 个可闯关卡，已完成 ' + doneN + ' 个。按顺序通关，完成前一关才会解锁下一关。'
      : '这个专业的题目还在建设中，先去看看它的学习路径。';

    var box = $('mapList');
    box.innerHTML = '';

    if (!list.length) {
      var empty = el('div', 'card empty-card');
      empty.innerHTML =
        '<div class="empty-icon">🗺️</div>' +
        '<h2>地图还没修好</h2>' +
        '<p>这个专业的关卡内容正在补充，地图会在题目就绪后自动出现。你可以先看学习路径。</p>' +
        '<a class="btn btn-primary btn-sm" href="#" data-go="major">查看学习路径</a>';
      box.appendChild(empty);
      return;
    }

    // 按阶段分组画地图：每行一个阶段，节点按顺序排列
    var cursor = 0;
    var order = 0;
    path.stages.forEach(function (stage) {
      var nodes = list.filter(function (x) { return x.stage === stage; });
      if (!nodes.length) return;
      var group = el('div', 'map-group');
      var gh = el('div', 'map-group-head');
      gh.innerHTML = '<span class="stage-badge">' + (path.stages.indexOf(stage) + 1) + '</span>' +
        '<b>' + stage.title + '</b><span class="muted">' + stage.goal + '</span>';
      group.appendChild(gh);

      var track = el('div', 'map-track');
      nodes.forEach(function (item) {
        var lv = item.level;
        var rec = state.done[lv.id];
        var idxInList = list.indexOf(item);
        var unlocked = idxInList === 0 || !!state.done[list[idxInList - 1].level.id];
        var node = el('a', 'map-node' + (rec ? ' is-done' : (unlocked ? ' is-open' : ' is-lock')));
        node.href = '#';
        if (unlocked) node.setAttribute('data-level', lv.id);
        node.innerHTML =
          '<span class="map-node-dot">' + (rec ? '✓' : (unlocked ? '▶' : '🔒')) + '</span>' +
          '<span class="map-node-name">' + lv.name.replace(/^第 \d+ 关 · /, '') + '</span>' +
          '<span class="map-node-meta">' + (rec ? starsText(rec.stars) : (unlocked ? '可挑战' : '未解锁')) + '</span>';
        track.appendChild(node);
        order++;
      });
      group.appendChild(track);
      box.appendChild(group);
    });
  }

  /* ---------------- 打开关卡：先按学习方式分流 ---------------- */
  function openLevel(levelId, fromMap) {
    var path = getPath(state.majorId);
    var found = path && findLevel(path, levelId);
    if (!found) { show('map'); return; }

    state.levelId = levelId;
    state.qi = 0;
    state.levelCorrect = 0;
    state.fromMap = fromMap !== false;
    state.levelMeta = found;
    remember({ page: null, docY: 0 });

    // 视频讲解：进 B 站课程页（左侧是整门课的目录）
    if (state.style === 'video') {
      state.videoPage = null;   // 每次进关卡重新定位到本关第一集
      show('video');
      return;
    }

    show('doc');
  }

  /* ---------------- 视频讲解页 ---------------- */
  function videoPagesOf(levelId) {
    var v = getVideo(levelId);
    var pages = [];
    (v.main || []).forEach(function (r) {
      for (var p = r[0]; p <= r[1]; p++) pages.push({ page: p, kind: 'main' });
    });
    (v.extra || []).forEach(function (r) {
      for (var q = r[0]; q <= r[1]; q++) pages.push({ page: q, kind: 'extra' });
    });
    return pages;
  }

  function firstVideoPage(levelId) {
    var v = getVideo(levelId);
    var first = (v.main && v.main[0]) ? v.main[0][0] : 1;
    return first;
  }

  function renderVideoNav(levelId, curPage) {
    var nav = $('videoNav');
    nav.innerHTML = '';
    var mine = {};
    videoPagesOf(levelId).forEach(function (x) { mine[x.page] = x.kind; });

    bvSections().forEach(function (sec) {
      var head = el('div', 'video-sec' + (mine[sec.from] || (curPage >= sec.from && curPage <= sec.to) ? ' is-open' : ''));
      head.innerHTML =
        '<span class="video-sec-name">' + esc(sec.name) + '</span>' +
        '<span class="video-sec-range">P' + sec.from + '–P' + sec.to + '</span>';
      nav.appendChild(head);

      for (var p = sec.from; p <= sec.to; p++) {
        var kind = mine[p];
        var a = el('a',
          'video-ep' +
          (p === curPage ? ' is-on' : '') +
          (kind === 'main' ? ' is-mine' : '') +
          (kind === 'extra' ? ' is-extra' : ''));
        a.href = '#';
        a.setAttribute('data-page', p);
        a.innerHTML =
          '<span class="video-ep-no">P' + p + '</span>' +
          '<span class="video-ep-title">' + esc(bvTitle(p).replace(/^[^-]+-\d+-/, '')) + '</span>' +
          '<span class="video-ep-dur">' + bvDuration(p) + '</span>';
        nav.appendChild(a);
      }
    });
  }

  function renderVideo() {
    var found = currentLevel();
    if (!found) { show('map'); return; }
    var path = getPath(state.majorId);
    var major = path.major;
    var level = found.level;

    $('vCrumb').textContent = found.stage.title + ' / ' + found.module.name;
    $('vTitle').textContent = level.name;
    $('videoStartQuiz').hidden = !(level.questions && level.questions.length);

    // 没有按关卡细分集的专业：用本专业的零基础课程兜底（VIDEO_COURSES）
    if (!VIDEO_MAP[level.id] && major.video) {
      $('vSideTitle').textContent = '🎬 ' + major.name + ' · 零基础课';
      $('vSideSub').textContent = '本专业推荐课程（暂未按关卡细分）';
      $('vLead').textContent = '这个专业暂时只配了一门零基础课程，没有拆到每一关。先看课程导论或第一章，再回来做题；完整课程可以在 B 站继续看。';

      var nav0 = $('videoNav');
      nav0.innerHTML = '';
      nav0.appendChild(el('div', 'video-sec', '<span class="video-sec-name">本专业推荐课程</span>'));
      var item = el('a', 'video-ep is-on');
      item.href = major.video.url;
      item.target = '_blank';
      item.rel = 'noopener';
      item.innerHTML =
        '<span class="video-ep-no">B站</span>' +
        '<span class="video-ep-title">' + esc(major.video.title) + '</span>' +
        '<span class="video-ep-dur">↗</span>';
      nav0.appendChild(item);

      $('vPlayer').src = bvEmbedFromUrl(major.video.url);
      $('vNow').textContent = '正在播放：' + major.video.title;
      $('vOpen').href = major.video.url;
      $('vEpList').innerHTML = '';
      return;
    }

    var v = getVideo(level.id);
    var pages = videoPagesOf(level.id);
    var page = state.videoPage || firstVideoPage(level.id);
    state.videoPage = page;

    $('vSideTitle').textContent = '🎬 ' + BV_TITLE;
    $('vSideSub').textContent = '共 ' + BV_TOTAL + ' 集 · 约 26.5 小时';
    renderVideoNav(level.id, page);

    $('vLead').textContent = v.note || '';

    $('vPlayer').src = bvPlayerUrl(page);
    $('vNow').textContent = '正在播放 P' + page + ' · ' + bvTitle(page).replace(/^[^-]+-\d+-/, '') + '（' + bvDuration(page) + '）';
    $('vOpen').href = bvPageUrl(page);

    // 本关推荐分集
    var list = $('vEpList');
    list.innerHTML = '';
    ['main', 'extra'].forEach(function (kind) {
      var group = pages.filter(function (x) { return x.kind === kind; });
      if (!group.length) return;
      var label = el('div', 'ep-group-label', kind === 'main' ? '本关必看' : '想深挖再看（可选）');
      list.appendChild(label);
      group.forEach(function (x) {
        var card = el('a', 'ep-card' + (x.page === page ? ' is-playing' : ''));
        card.href = '#';
        card.setAttribute('data-page', x.page);
        card.innerHTML =
          '<span class="ep-no">P' + x.page + '</span>' +
          '<span class="ep-name">' + esc(bvTitle(x.page).replace(/^[^-]+-\d+-/, '')) + '</span>' +
          '<span class="ep-dur">' + bvDuration(x.page) + '</span>' +
          '<span class="ep-play">' + (x.page === page ? '播放中' : '播放 ▶') + '</span>';
        list.appendChild(card);
      });
    });
  }

  /* 点目录/推荐分集：只换播放器，不整页重绘 */
  function playVideo(page) {
    state.videoPage = page;
    remember({ page: page });
    $('vPlayer').src = bvPlayerUrl(page);
    $('vNow').textContent = '正在播放 P' + page + ' · ' + bvTitle(page).replace(/^[^-]+-\d+-/, '') + '（' + bvDuration(page) + '）';
    $('vOpen').href = bvPageUrl(page);
    renderVideo();
  }

  /* ---------------- 文字说明：文档页 ---------------- */
  function renderDoc() {
    var found = currentLevel();
    if (!found) { show('map'); return; }
    var path = getPath(state.majorId);
    var major = path.major;
    var cat = getCategory(major.cat);
    var level = found.level;
    var doc = getDoc(level, { module: found.module, major: major, cat: cat });

    $('docSideTitle').textContent = major.emoji + ' ' + major.name;
    $('docSideSub').textContent = found.stage.title + ' · ' + found.module.name;

    // 左侧：整个专业路径的目录（阶段 → 模块 → 关卡），可滚动
    var nav = $('docNav');
    nav.innerHTML = '';
    path.stages.forEach(function (stage) {
      var stageHead = el('div', 'doc-nav-stage', stage.title);
      nav.appendChild(stageHead);
      stage.modules.forEach(function (mod) {
        var modHead = el('div', 'doc-nav-label', mod.name);
        nav.appendChild(modHead);
        mod.levels.forEach(function (lv) {
          var rec = state.done[lv.id];
          var a = el('a', 'doc-nav-item' + (lv.id === level.id ? ' is-on' : ''));
          a.href = '#';
          a.setAttribute('data-level', lv.id);
          a.innerHTML =
            '<span class="doc-nav-dot">' + (rec ? '✓' : '·') + '</span>' +
            '<span class="doc-nav-txt">' + lv.name + '</span>' +
            (lv.ready ? '' : '<span class="doc-nav-soon">建设中</span>');
          nav.appendChild(a);
        });
      });
    });

    // 正文
    $('docCrumb').textContent = found.stage.title + ' / ' + found.module.name;
    $('docTitle').textContent = level.name;
    $('docLead').textContent = doc.lead || '';
    var body = $('docBody');
    body.innerHTML = '';
    doc.sections.forEach(function (sec, i) {
      var wrap = el('section', 'doc-sec');
      wrap.id = 'sec-' + sec.id;
      wrap.innerHTML = '<h2>' + sec.title + '</h2>' + sec.html;
      body.appendChild(wrap);
    });

    // 右侧：本页目录
    var toc = $('docToc');
    toc.innerHTML = '<div class="doc-toc-title">本页目录</div>';
    doc.sections.forEach(function (sec) {
      var a = el('a', 'doc-toc-link');
      a.href = '#sec-' + sec.id;
      a.textContent = sec.title;
      toc.appendChild(a);
    });

    // 延伸资源
    var refs = $('docRefs');
    refs.innerHTML = '';
    if (doc.refs && doc.refs.length) {
      refs.innerHTML = '<h3>想更深入一点？</h3>';
      var ul = el('ul', 'doc-ref-list');
      doc.refs.forEach(function (r) {
        var li = el('li');
        li.innerHTML = '<a href="' + r.url + '" target="_blank" rel="noopener">' + r.name + '</a>';
        ul.appendChild(li);
      });
      refs.appendChild(ul);
      var note = el('p', 'doc-ref-note', '延伸资源来自 <a href="https://csdiy.wiki/" target="_blank" rel="noopener">csdiy.wiki · CS 自学指南</a>，本站只做推荐，不转载其内容。');
      refs.appendChild(note);
    }

    // 底部按钮：有题目才能开始做题
    var btn = $('docStartQuiz');
    if (level.questions) {
      btn.hidden = false;
      btn.textContent = '读完，开始做题 →';
    } else {
      btn.hidden = true;
    }
    $('docBack').textContent = '← 返回' + (state.fromMap ? '地图' : '路径');
  }

  function currentLevel() {
    var path = getPath(state.majorId);
    return path ? findLevel(path, state.levelId) : null;
  }

  /* 从文档页进入答题 */
  function startQuiz() {
    var found = currentLevel();
    if (!found) { show('map'); return; }
    $('crumb').textContent = found.module.name + ' · ' + found.stage.title;
    $('levelName').textContent = found.level.name;

    if (!found.level.questions) {
      $('quizCard').hidden = true;
      $('levelEmpty').hidden = false;
    } else {
      $('quizCard').hidden = false;
      $('levelEmpty').hidden = true;
      state.qi = 0;
      state.levelCorrect = 0;
      renderQuestion();
    }
    show('level');
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

  function revealResult(q, userChoice, serverAnswer) {
    var opts = $('optionList').querySelectorAll('.option');
    opts.forEach(function (b, idx) {
      b.disabled = true;
      if (idx === serverAnswer) b.classList.add('correct');
      if (idx === userChoice && idx !== serverAnswer) b.classList.add('wrong');
    });
    var ok = userChoice === serverAnswer;
    if (ok) state.levelCorrect++;
    $('feedback').hidden = false;
    $('feedbackTitle').textContent = ok ? '✅ 答对了' : '❌ 再想想，正确答案是 ' + 'ABCD'[serverAnswer];
    $('feedbackTitle').className = ok ? 'fb-ok' : 'fb-bad';
    $('feedbackExplain').textContent = q.explain;
  }

  function chooseOption(i) {
    if (state.answered) return;
    var found = currentLevel();
    if (!found) return;
    var q = found.level.questions[state.qi];
    state.answered = true;

    if (ONLINE) {
      fetch('/api/levels/' + found.level.id + '/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questionIndex: state.qi, choice: i })
      }).then(function (r) { return r.ok ? r.json() : null; })
        .then(function (res) {
          if (!res) return;
          revealResult(q, i, res.answer);
        });
    } else {
      revealResult(q, i, q.answer);
    }
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
    show(state.fromMap ? 'map' : 'major');
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
    var go = e.target.closest('[data-go]');
    if (go) {
      e.preventDefault();
      var target = go.getAttribute('data-go');
      if (target === 'pickFirst') target = state.majorId ? 'major' : 'browse';
      show(target);
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
    if (mj) { e.preventDefault(); selectMajor(mj.getAttribute('data-major')); return; }
    var st = e.target.closest('[data-style]');
    if (st) { e.preventDefault(); selectStyle(st.getAttribute('data-style')); return; }
    var sw = e.target.closest('[data-switch-style]');
    if (sw) { e.preventDefault(); switchStyle(sw.getAttribute('data-switch-style')); return; }
    var lv = e.target.closest('[data-level]');
    if (lv) {
      e.preventDefault();
      // 文档页左侧目录切换关卡时，保持"从哪来"的返回目标不变
      var keepFrom = lv.classList.contains('doc-nav-item') ? state.fromMap : true;
      openLevel(lv.getAttribute('data-level'), keepFrom);
      return;
    }
    var vp = e.target.closest('[data-page]');
    if (vp) {
      e.preventDefault();
      playVideo(Number(vp.getAttribute('data-page')));
      return;
    }
    var opt = e.target.closest('.option');
    if (opt && !opt.disabled) { chooseOption(Number(opt.getAttribute('data-i'))); }
  });

  $('nextBtn').addEventListener('click', nextQuestion);
  $('backToMap').addEventListener('click', function (e) { e.preventDefault(); show(state.fromMap ? 'map' : 'major'); });
  $('backToMajor2').addEventListener('click', function (e) { e.preventDefault(); show('major'); });
  $('docStartQuiz').addEventListener('click', startQuiz);
  $('docBack').addEventListener('click', function (e) { e.preventDefault(); show(state.fromMap ? 'map' : 'major'); });
  $('videoStartQuiz').addEventListener('click', startQuiz);
  $('videoBack').addEventListener('click', function (e) { e.preventDefault(); show(state.fromMap ? 'map' : 'major'); });
  $('reselectBtn').addEventListener('click', reselect);
  $('reselectBtn2').addEventListener('click', reselect);
  $('resetBtn').addEventListener('click', function () {
    if (!confirm('确定要清空所有学习进度吗？此操作不可撤销。')) return;
    state.done = {};
    save();
    renderReport();
    toast('进度已清空');
  });

  /* ---------------- 主题：晨雀 / 夜猫 ---------------- */
  function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme === 'night' ? 'night' : 'morning');
    var ico = $('themeIco'), txt = $('themeText');
    if (ico) ico.textContent = state.theme === 'night' ? '🌙' : '☀️';
    if (txt) txt.textContent = state.theme === 'night' ? '夜猫' : '晨雀';
  }
  function toggleTheme() {
    state.theme = state.theme === 'night' ? 'morning' : 'night';
    save(); applyTheme();
    toast(state.theme === 'night' ? '已切换到夜猫模式' : '已切换到晨雀模式');
  }

  /* ---------------- 学习时长 ---------------- */
  function dateKey(d) {
    var m = d.getMonth() + 1, day = d.getDate();
    return d.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (day < 10 ? '0' : '') + day;
  }
  function addStudy(sec) {
    var k = dateKey(new Date());
    state.study[k] = (state.study[k] || 0) + sec;
    save();
  }
  function totalStudy() {
    var t = 0;
    for (var k in state.study) if (state.study.hasOwnProperty(k)) t += state.study[k] || 0;
    return t;
  }
  function fmtDur(sec) {
    sec = Math.round(sec || 0);
    var h = Math.floor(sec / 3600), m = Math.round((sec % 3600) / 60);
    if (h > 0) return h + ' 小时' + (m > 0 ? ' ' + m + ' 分' : '');
    if (m > 0) return m + ' 分钟';
    return sec + ' 秒';
  }
  function streakDays() {
    var n = 0, d = new Date();
    for (var i = 0; i < 400; i++) {
      if ((state.study[dateKey(d)] || 0) > 0) { n++; d.setDate(d.getDate() - 1); } else break;
    }
    return n;
  }
  function startStudyTimer() {
    window.setInterval(function () {
      if (document.visibilityState !== 'visible') return;
      addStudy(15);
      if (curView === 'profile') renderProfileStats();
    }, 15000);
  }

  /* ---------------- 上次学到哪 ---------------- */
  function remember(extra) {
    if (!state.majorId || !state.levelId) return;
    state.last = state.last || {};
    state.last.majorId = state.majorId;
    state.last.levelId = state.levelId;
    state.last.mode = state.style;
    if (extra) {
      for (var k in extra) if (extra.hasOwnProperty(k)) state.last[k] = extra[k];
    }
    state.last.ts = Date.now();
    save();
  }
  function resumeLast() {
    var l = state.last;
    if (!l || !l.levelId) return;
    var lv = l.levelId, md = l.majorId, mode = l.mode, page = l.page, docY = l.docY;
    var path = getPath(md);
    var found = path && findLevel(path, lv);
    if (!found) { show('browse'); return; }
    state.majorId = md;
    state.style = mode || state.style || 'text';
    openLevel(lv, true);
    remember({ page: page || null, docY: docY || 0 });
    if (state.style === 'video') {
      if (page) playVideo(page);
    } else if (docY) {
      window.setTimeout(function () { window.scrollTo(0, docY); }, 80);
    }
    toast('接着上次的地方继续');
  }

  /* ---------------- 首页：继续上次 + 鼓励语 + 公告轮播 ---------------- */
  function renderHomeExtras() {
    if (!HOME_QUOTES.length) return;
    if (!state.quote && state.quote !== 0) state.quote = 0;
    $('homeQuote').textContent = HOME_QUOTES[state.quote % HOME_QUOTES.length];

    var box = $('resumeCard');
    var l = state.last, found = null;
    if (l && l.majorId && l.levelId) {
      var p = getPath(l.majorId);
      found = p && findLevel(p, l.levelId);
    }
    if (found) {
      var mj = getMajor(l.majorId) || {};
      var modeTxt = l.mode === 'video' ? '视频讲解' : '文字说明';
      box.innerHTML =
        '<div class="resume-major">' + (mj.emoji || '') + ' ' + (mj.name || '') + '</div>' +
        '<div class="resume-level">' + found.level.name + '</div>' +
        '<div class="resume-meta">上次用「' + modeTxt + '」学到这儿</div>' +
        '<button class="btn btn-primary btn-sm" type="button" id="resumeBtn">接着学 →</button>';
      $('resumeBtn').addEventListener('click', resumeLast);
    } else {
      box.innerHTML =
        '<div class="resume-empty">还没开始。<br>先选个专业，我们给你一条从大一到大四的路。</div>' +
        '<a class="btn btn-primary btn-sm" href="#" data-go="pickFirst">选专业 →</a>';
    }
  }

  function renderCarousel() {
    var track = $('caroTrack'), dots = $('caroDots');
    if (!track) return;
    track.innerHTML = '';
    dots.innerHTML = '';
    ANNOUNCEMENTS.forEach(function (a, i) {
      var card = el('div', 'caro-card tone-' + a.tone);
      card.innerHTML =
        '<div class="caro-emoji">' + a.emoji + '</div>' +
        '<div class="caro-body">' +
        '<span class="caro-tag">' + a.tag + '</span>' +
        '<h3 class="caro-title">' + a.title + '</h3>' +
        '<p class="caro-desc">' + a.desc + '</p>' +
        '</div>';
      track.appendChild(card);

      var d = el('button', 'caro-dot' + (i === 0 ? ' on' : ''));
      d.type = 'button';
      d.setAttribute('aria-label', '第 ' + (i + 1) + ' 条');
      d.addEventListener('click', function () { state.caro = i; renderCarouselPos(); });
      dots.appendChild(d);
    });
    renderCarouselPos();
  }
  function renderCarouselPos() {
    var track = $('caroTrack');
    if (!track || !track.children.length) return;
    var n = track.children.length;
    if (state.caro >= n) state.caro = 0;
    if (state.caro < 0) state.caro = n - 1;
    track.style.transform = 'translateX(' + (-state.caro * 100) + '%)';
    var ds = $('caroDots').children;
    for (var i = 0; i < ds.length; i++) ds[i].classList.toggle('on', i === state.caro);
  }
  function caroGo(delta) {
    state.caro = (state.caro + delta);
    renderCarouselPos();
  }
  function startCarousel() {
    window.setInterval(function () {
      if (curView !== 'home' || caroPaused || document.visibilityState !== 'visible') return;
      caroGo(1);
    }, 5000);
  }
  var caroPaused = false;

  /* ---------------- 个人中心 ---------------- */
  var avatarPick = null;

  function renderAvatarPick() {
    var wrap = $('avatarPick');
    if (!wrap) return;
    wrap.innerHTML = '';
    if (!avatarPick) avatarPick = AVATARS[Math.floor(Math.random() * AVATARS.length)];
    AVATARS.forEach(function (a) {
      var b = el('button', 'avatar-opt' + (a === avatarPick ? ' on' : ''));
      b.type = 'button';
      b.textContent = a;
      b.addEventListener('click', function () {
        avatarPick = a;
        renderAvatarPick();
      });
      wrap.appendChild(b);
    });
  }

  function renderProfileStats() {
    var grid = $('pfStats');
    if (!grid) return;
    var doneN = Object.keys(state.done).length;
    var q = 0, ok = 0;
    for (var k in state.done) {
      if (!state.done.hasOwnProperty(k)) continue;
      q += state.done[k].total || 0;
      ok += state.done[k].ok || 0;
    }
    var acc = q ? Math.round(ok / q * 100) : 0;
    var items = [
      ['学习时长', fmtDur(totalStudy())],
      ['连续天数', streakDays() + ' 天'],
      ['通关数', doneN + ' 关'],
      ['答题数', q + ' 题'],
      ['正确率', acc + '%'],
      ['星星', starSum() + ' ★']
    ];
    grid.innerHTML = items.map(function (it) {
      return '<div class="pf-stat"><b>' + it[1] + '</b><span>' + it[0] + '</span></div>';
    }).join('');

    var bars = $('studyBars');
    if (bars) {
      var days = [];
      var max = 1;
      for (var i = 6; i >= 0; i--) {
        var d = new Date(); d.setDate(d.getDate() - i);
        var sec = state.study[dateKey(d)] || 0;
        if (sec > max) max = sec;
        days.push({ d: d, sec: sec });
      }
      bars.innerHTML = days.map(function (x) {
        var h = Math.max(4, Math.round(x.sec / max * 100));
        var w = ['日', '一', '二', '三', '四', '五', '六'][x.d.getDay()];
        return '<div class="bar-col">' +
          '<div class="bar-wrap"><div class="bar' + (x.sec ? '' : ' bar-empty') + '" style="height:' + h + '%" title="' + fmtDur(x.sec) + '"></div></div>' +
          '<span class="bar-label">' + w + '</span></div>';
      }).join('');
    }
  }

  function renderProfile() {
    var p = state.profile;
    var guest = !(p && p.mode === 'member');
    $('guestPanel').hidden = !guest;
    $('memberPanel').hidden = guest;
    if (guest) { renderAvatarPick(); return; }
    $('pfAvatar').textContent = p.avatar || '🐱';
    $('pfName').textContent = p.nickname || '同学';
    $('pfSid').textContent = '学号 ' + (p.sid || '—');
    $('pfMode').textContent = '常驻模式';
    $('pfSince').textContent = '加入于 ' + (p.since || '—');
    renderProfileStats();
  }

  function registerMember() {
    var sid = ($('sidInput').value || '').trim();
    if (!/^\d{6,20}$/.test(sid)) { toast('学号应该是 6–20 位数字'); $('sidInput').focus(); return; }
    var nick = ($('nickInput').value || '').trim();
    if (!nick) nick = '同学' + sid.slice(-4);
    state.profile = {
      mode: 'member',
      sid: sid,
      nickname: nick.slice(0, 16),
      avatar: avatarPick || AVATARS[0],
      since: dateKey(new Date())
    };
    save();
    updateNav();
    renderProfile();
    toast('注册成功，欢迎你，' + state.profile.nickname);
  }

  function logoutMember() {
    if (!confirm('退出后会回到游客模式，学习进度仍保留在这台设备上。确定退出？')) return;
    state.profile = { mode: 'guest' };
    save();
    updateNav();
    renderProfile();
    toast('已回到游客模式');
  }

  function changeAvatar() {
    var p = state.profile;
    if (!p || p.mode !== 'member') return;
    var i = AVATARS.indexOf(p.avatar);
    state.profile.avatar = AVATARS[(i + 1) % AVATARS.length];
    save();
    $('pfAvatar').textContent = state.profile.avatar;
    updateNav();
    toast('头像已换');
  }

  /* ---------------- 启动 ---------------- */
  load();
  applyTheme();
  renderHomeCats();
  renderCarousel();
  renderHomeExtras();
  startStudyTimer();
  startCarousel();

  $('themeBtn').addEventListener('click', toggleTheme);
  $('themeBtn2').addEventListener('click', toggleTheme);
  $('navMe').addEventListener('click', function (e) { e.preventDefault(); show('profile'); });
  $('quoteNext').addEventListener('click', function () {
    state.quote = (state.quote + 1) % HOME_QUOTES.length;
    $('homeQuote').textContent = HOME_QUOTES[state.quote];
  });
  $('caroPrev').addEventListener('click', function () { caroGo(-1); });
  $('caroNext').addEventListener('click', function () { caroGo(1); });
  $('carousel').addEventListener('mouseenter', function () { caroPaused = true; });
  $('carousel').addEventListener('mouseleave', function () { caroPaused = false; });
  $('registerBtn').addEventListener('click', registerMember);
  $('sidInput').addEventListener('keydown', function (e) { if (e.key === 'Enter') registerMember(); });
  $('nickInput').addEventListener('keydown', function (e) { if (e.key === 'Enter') registerMember(); });
  $('logoutBtn').addEventListener('click', logoutMember);
  $('editAvatarBtn').addEventListener('click', changeAvatar);

  var docScrollTimer = null;
  window.addEventListener('scroll', function () {
    if (curView !== 'doc') return;
    if (docScrollTimer) return;
    docScrollTimer = window.setTimeout(function () {
      docScrollTimer = null;
      remember({ docY: Math.round(window.scrollY) });
    }, 400);
  });
  window.addEventListener('pagehide', function () {
    if (curView === 'doc') remember({ docY: Math.round(window.scrollY) });
  });
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden' && curView === 'doc') {
      remember({ docY: Math.round(window.scrollY) });
    }
  });

  // 检测后端是否可用：在线模式下判题走 POST，离线模式本地判题
  fetch('/api/health', { cache: 'no-store' }).then(function (r) {
    if (r.ok) ONLINE = true;
  }).catch(function () { ONLINE = false; })
    .finally(function () { show('home'); });
})();
