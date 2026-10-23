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
    courseId: null,       // 公共必修课（文字说明）当前课程 id
    style: null,          // 'video' | 'text'
    levelId: null,
    qi: 0,
    levelCorrect: 0,
    answered: false,
    fromMap: true,
    videoPage: null,      // 视频页当前播放第几集
    done: {},             // levelId -> { ok, total, stars, name, majorId, ts }
    code: {},             // levelId -> true（代码任务已通过）
    drafts: {},           // levelId -> 用户写过的代码
    selectedSubject: null, // 闯关地图当前选择的科目（module name）
    quizDone: false,      // 本关选择题是否已全部答完
    profile: null,        // { mode:'guest'|'member', sid, nickname, avatar, since }
    study: {},            // 'YYYY-MM-DD' -> 秒
    checkins: {},         // 'YYYY-MM-DD' -> true（每日打卡）
    justLit: null,        // 刚通关、需要在地图上做点亮动画的关卡 id
    last: null,           // { majorId, levelId, mode, page, docY, ts } 上次学到哪
    theme: 'morning',     // 'morning' | 'night'
    layout: 'auto',       // 'auto' | 'mobile' | 'desktop' 版式切换
    pendingAvatar: '',    // 云端注册时待提交的头像
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
      state.code = data.code || {};
      state.drafts = data.drafts || {};
      state.profile = data.profile || null;
      state.study = data.study || {};
      state.checkins = data.checkins || {};
      state.last = data.last || null;
      state.theme = data.theme === 'night' ? 'night' : 'morning';
      state.layout = (data.layout === 'mobile' || data.layout === 'desktop') ? data.layout : 'auto';
    } catch (e) { /* 忽略损坏数据 */ }
  }
  function save() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify({
        majorId: state.majorId, style: state.style, done: state.done,
        code: state.code, drafts: state.drafts,
        profile: state.profile, study: state.study, checkins: state.checkins,
        last: state.last, theme: state.theme, layout: state.layout
      }));
    } catch (e) { /* 隐私模式下可能不可写 */ }
  }

  /* ---------------- 视图切换 ---------------- */
  var VIEWS = ['home', 'browse', 'style', 'major', 'subjects', 'map', 'doc', 'video', 'level', 'report', 'profile', 'course'];
  var curView = 'home';

  function show(name) {
    // 需要专业身份的页面，没选专业就先回选专业
    if (['style', 'major', 'subjects', 'map'].indexOf(name) > -1 && !state.majorId) name = 'browse';
    if (name === 'doc' && (!state.majorId || !state.levelId)) name = 'map';
    if (name === 'video' && !state.majorId) name = 'browse';
    if (name === 'level' && !state.levelId) name = 'map';
    if (name === 'course' && !state.courseId) name = 'home';
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

    if (name === 'home') { renderHomeCta(); renderHomeExtras(); renderHomeCommon(); renderCheckin(); }
    if (name === 'browse') renderBrowse();
    if (name === 'style') renderStyle();
    if (name === 'major') renderMajor();
    if (name === 'subjects') renderSubjects();
    if (name === 'map') renderMap();
    if (name === 'doc') renderDoc();
    if (name === 'video') renderVideo();
    if (name === 'course') renderCourse();
    if (name === 'report') renderReport();
    if (name === 'profile') { renderProfile(); renderCheckin(); }
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
      if (isMember()) {
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

  /* 连不上后端时（纯静态/断网）才允许把本机记录当账号；
     一旦在线，必须有云端会话（profile.cloud）才算登录，
     否则旧版本留在本机的 profile 会让人"没注册却显示已登录"。 */
  function cloudOnline() {
    return !!(window.Cloud && window.Cloud.isOnline && window.Cloud.isOnline());
  }
  function isMember() {
    var p = state.profile;
    if (!p || p.mode !== 'member') return false;
    return cloudOnline() ? !!p.cloud : true;
  }
  function hasStaleProfile() {
    var p = state.profile;
    return cloudOnline() && !!p && p.mode === 'member' && !p.cloud;
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

  /* 公共必修课：数据来自 data.js 的 COMMON_COURSES，加课只改数组
     带 courseId 的课程走站内「文字说明」页，否则直接外链到资料 */
  function renderHomeCommon() {
    var box = $('homeCommon');
    if (!box || box.childElementCount) return;
    if (typeof COMMON_COURSES === 'undefined') return;
    COMMON_COURSES.forEach(function (c) {
      var inApp = c.courseId && getCourseData(c.courseId);
      var a = el('a', 'common-card' + (inApp ? ' common-card-in' : ''));
      if (inApp) {
        a.href = '#';
        a.setAttribute('data-course', c.courseId);
      } else {
        a.href = c.url;
        a.target = '_blank';
        a.rel = 'noopener';
      }
      a.innerHTML =
        '<span class="common-tag">' + (c.tag || '公共课') + (c.code ? ' · ' + c.code : '') + '</span>' +
        '<span class="common-name">《' + c.name + '》</span>' +
        '<span class="common-desc">' + (c.desc || '') + '</span>' +
        (inApp ? '<span class="common-meta">' + inApp.chapters.length + ' 章 · 每章一张思维导图</span>' : '') +
        '<span class="common-go">' + (inApp ? '读重点整理 →' : '打开资料 ↗') + '</span>';
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
    var sch = (typeof schemeOf === 'function') ? schemeOf(m.id) : null;
    $('mjMeta').textContent = (cat ? cat.name : '') + ' · ' + m.desc +
      ' · ' + styleName(state.style) +
      (sch ? ' · ' + (sch.college.indexOf('—') === 0 ? sch.scheme : sch.college) : '') +
      (m.ready ? ' · 已有讲解与练习' : ' · 路径框架（关卡内容建设中）');

    var levels = allLevelsOf(path);
    var doneN = levels.filter(function (lv) { return !!state.done[lv.id]; }).length;
    $('mjProgressFill').style.width = levels.length ? Math.round(doneN / levels.length * 100) + '%' : '0%';
    $('mjProgressText').textContent = doneN + ' / ' + levels.length + ' 关';

    var box = $('stageList');
    box.innerHTML = '';

    // 折叠默认展开位置：有上次学到的关卡就展开它那一阶段/模块，否则展开第一个有已就绪关卡的模块
    var focus = { si: 0, mi: 0 };
    var hit = false;
    path.stages.forEach(function (st, i) {
      st.modules.forEach(function (md, j) {
        md.levels.forEach(function (lv) {
          if (state.levelId && lv.id === state.levelId) { focus.si = i; focus.mi = j; hit = true; }
        });
      });
    });
    if (!hit) {
      var found = false;
      path.stages[0].modules.forEach(function (md, j) {
        if (!found && md.levels.some(function (lv) { return lv.ready; })) { focus.mi = j; found = true; }
      });
    }

    path.stages.forEach(function (stage, si) {
      var stageOpen = si === focus.si;
      var wrap = el('div', 'stage fold' + (stageOpen ? ' is-open' : ''));
      var stageDone = 0, stageTotal = 0;
      stage.modules.forEach(function (mod) {
        mod.levels.forEach(function (lv) {
          stageTotal++;
          if (state.done[lv.id]) stageDone++;
        });
      });

      var head = el('button', 'stage-head');
      head.type = 'button';
      head.setAttribute('data-fold', '');
      head.setAttribute('aria-expanded', stageOpen ? 'true' : 'false');
      head.innerHTML =
        '<span class="stage-badge">' + (si + 1) + '</span>' +
        '<span class="stage-title-wrap">' +
          '<span class="stage-title">' + stage.title + '</span>' +
          '<span class="stage-goal">' + stage.goal + '</span>' +
        '</span>' +
        '<span class="stage-progress">' + stageDone + '/' + stageTotal + '</span>' +
        '<span class="fold-arrow" aria-hidden="true">▾</span>';
      wrap.appendChild(head);

      var mods = el('div', 'modules stage-body');
      stage.modules.forEach(function (mod, mi) {
        var modOpen = stageOpen && mi === focus.mi;
        var card = el('div', 'module fold' + (modOpen ? ' is-open' : ''));
        var modDone = mod.levels.filter(function (lv) { return !!state.done[lv.id]; }).length;

        var mh = el('button', 'module-head');
        mh.type = 'button';
        mh.setAttribute('data-fold', '');
        mh.setAttribute('aria-expanded', modOpen ? 'true' : 'false');
        var modBook = (typeof textbookOf === 'function' && mod.levels[0] && mod.levels[0].sync)
          ? mod.levels[0].sync.book : null;
        mh.innerHTML =
          '<span class="module-name">' + mod.name +
            (modBook ? '<span class="module-book">📘 ' + esc(modBook.title) + '</span>' : '') +
          '</span>' +
          '<span class="module-count">' + modDone + '/' + mod.levels.length + '</span>' +
          '<span class="fold-arrow" aria-hidden="true">▾</span>';
        card.appendChild(mh);

        var lvBox = el('div', 'level-list module-body');
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

  /* ---------------- 科目选择页 ---------------- */
  function renderSubjects() {
    if (!state.majorId) { show('browse'); return; }
    var path = getPath(state.majorId);
    if (!path) { show('browse'); return; }

    var box = $('subjectsList');
    box.innerHTML = '';

    // 收集所有课程（每个 module 对应一门课）
    var courses = [];
    path.stages.forEach(function (stage) {
      stage.modules.forEach(function (mod) {
        var levels = mod.levels.filter(function (lv) { return lv.ready; });
        if (levels.length > 0) {
          var doneN = levels.filter(function (lv) { return !!state.done[lv.id]; }).length;
          courses.push({
            name: mod.name || mod.title,
            courseName: mod.courseName || '',
            levels: levels,
            total: levels.length,
            done: doneN,
            stage: stage.title
          });
        }
      });
    });

    if (courses.length === 0) {
      box.innerHTML = '<div class="card empty-card"><div class="empty-icon"></div><h2>暂无可用科目</h2><p>这个专业的课程还在建设中。</p></div>';
      return;
    }

    // 按阶段分组显示
    var currentStage = '';
    courses.forEach(function (course) {
      if (course.stage !== currentStage) {
        currentStage = course.stage;
        var stageHeader = el('div', 'subjects-stage-header');
        stageHeader.innerHTML = '<h3>' + esc(currentStage) + '</h3>';
        box.appendChild(stageHeader);
      }

      var card = el('button', 'subject-card');
      card.type = 'button';
      var progress = course.total > 0 ? Math.round((course.done / course.total) * 100) : 0;
      card.innerHTML =
        '<div class="subject-card-head">' +
          '<div class="subject-card-icon">📖</div>' +
          '<div class="subject-card-info">' +
            '<div class="subject-card-name">' + esc(course.name) + '</div>' +
            (course.courseName ? '<div class="subject-card-course">' + esc(course.courseName) + '</div>' : '') +
            '<div class="subject-card-progress">' +
              '<div class="progress-bar"><div class="progress-fill" style="width:' + progress + '%"></div></div>' +
              '<span>' + course.done + '/' + course.total + ' 关</span>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="subject-card-arrow">→</div>';

      card.addEventListener('click', function () {
        state.selectedSubject = course.name;
        show('map');
      });

      box.appendChild(card);
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

    // 如果没有选择科目，先跳转到科目选择页
    if (!state.selectedSubject) {
      show('subjects');
      return;
    }

    var list = readyLevels(path);
    list = list.filter(function (x) {
      return (x.module.name || x.module.title) === state.selectedSubject;
    });

    var doneN = list.filter(function (x) { return !!state.done[x.level.id]; }).length;
    $('mapSub').textContent = list.length
      ? '共 ' + list.length + ' 个可闯关卡，已点亮 ' + doneN + ' 个。拖动或滚动查看整条路线，点圆点进入关卡；选择题和代码任务都完成才算通关。'
      : '这个专业的题目还在建设中，先去看看它的学习路径。';

    // 更新地图标题
    if ($('mapTitle')) {
      $('mapTitle').textContent = state.selectedSubject + ' · 闯关地图';
    }

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

    // 每个阶段是一条横向旅程，节点按顺序排开
    var chapterNo = 0;
    path.stages.forEach(function (stage) {
      var nodes = list.filter(function (x) { return x.stage === stage; });
      if (!nodes.length) return;
      chapterNo++;
      box.appendChild(buildJourney(stage, nodes, list, chapterNo));
    });
  }

  var CN_NUM = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];

  function buildJourney(stage, nodes, allList, chapterNo) {
    var GAP = 178, PAD = 104, H = 320, BASE = 152, WAVE = 34;
    var width = PAD * 2 + (nodes.length - 1) * GAP;

    var points = nodes.map(function (_, i) {
      return {
        x: PAD + i * GAP,
        y: BASE + Math.round(Math.sin(i * 0.95) * WAVE)
      };
    });

    var wrap = el('section', 'journey');
    var litN = nodes.filter(function (it) { return !!state.done[it.level.id]; }).length;
    wrap.innerHTML =
      '<div class="journey-head">' +
        '<div class="journey-heading">' +
          '<div class="journey-kicker">第 ' + (CN_NUM[chapterNo] || chapterNo) + ' 章</div>' +
          '<h2 class="journey-title">' + esc(stage.title) + '</h2>' +
          '<p class="journey-desc">' + esc(stage.goal || '') + '。单线前进，完成前一关才会解锁下一关。</p>' +
        '</div>' +
        '<div class="journey-side">' +
          '<div class="journey-lit"><span class="journey-lit-dot"></span>已点亮 <b>' + litN + '</b> / ' + nodes.length + '</div>' +
          '<div class="journey-total"><strong>' + nodes.length + '</strong><span>个关卡 · 单线前进</span></div>' +
          '<div class="journey-compass" aria-hidden="true">' +
            '<svg viewBox="0 0 48 48">' +
              '<circle cx="24" cy="24" r="20.5" stroke="currentColor" stroke-opacity=".42" fill="none"/>' +
              '<path d="M24 2.5v4M24 41.5v4M2.5 24h4M41.5 24h4" stroke="currentColor" stroke-opacity=".45" stroke-width="1.4"/>' +
              '<path d="M24 9 L29.5 24 L24 39 L18.5 24 Z" fill="currentColor" fill-opacity=".22"/>' +
              '<path d="M24 9 L29.5 24 L24 24 Z" fill="#b4703f"/>' +
              '<path d="M24 39 L18.5 24 L24 24 Z" fill="#4a7a5f"/>' +
              '<text x="24" y="7.5" text-anchor="middle" font-size="6.5" fill="currentColor" font-family="sans-serif">N</text>' +
            '</svg>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="journey-stage">' +
        '<button type="button" class="journey-arrow journey-arrow-l" data-jdir="-1" aria-label="向左浏览">‹</button>' +
        '<div class="journey-viewport" tabindex="0">' +
          '<div class="journey-track" style="width:' + width + 'px;height:' + H + 'px">' +
            landSvg(width, H) +
            pathSvg(points) +
            decoSvg(points, width) +
          '</div>' +
        '</div>' +
        '<button type="button" class="journey-arrow journey-arrow-r" data-jdir="1" aria-label="向右浏览">›</button>' +
      '</div>' +
      '<div class="journey-foot"><span>按住拖动 · 滚轮横向浏览</span><span>点击圆点进入关卡</span></div>';

    var track = wrap.querySelector('.journey-track');
    var firstOpen = -1;

    nodes.forEach(function (item, i) {
      var lv = item.level;
      var rec = state.done[lv.id];
      var idxInList = allList.indexOf(item);
      var unlocked = idxInList === 0 || !!state.done[allList[idxInList - 1].level.id];
      var current = unlocked && !rec && firstOpen === -1;
      if (current) firstOpen = i;

      var order = String(idxInList + 1);
      if (order.length < 2) order = '0' + order;

      var fresh = state.justLit === lv.id;
      var node = el('button', 'jnode' + (rec ? ' is-done' : (unlocked ? ' is-open' : ' is-lock')) + (current ? ' is-current' : '') + (fresh ? ' just-lit' : ''));
      node.type = 'button';
      node.style.left = points[i].x + 'px';
      node.style.top = points[i].y + 'px';
      if (unlocked) node.setAttribute('data-level', lv.id); else node.disabled = true;
      node.setAttribute('aria-label', lv.name + (rec ? '，已通关' : (unlocked ? '，可挑战' : '，未解锁')));
      node.innerHTML =
        '<span class="jnode-badge">' + (rec ? '✓' : order) + '</span>' +
        '<span class="jnode-title">' + esc(lv.name.replace(/^第\s*\d+\s*[关章]\s*·\s*/, '')) + '</span>' +
        '<span class="jnode-sub">' + (rec ? starsText(rec.stars) : (unlocked ? '选择题 + 代码' : '未解锁')) + '</span>';
      track.appendChild(node);
    });

    setupJourney(wrap);
    state.justLit = null;

    if (firstOpen > -1) {
      window.setTimeout(function () {
        var vp = wrap.querySelector('.journey-viewport');
        var target = wrap.querySelectorAll('.jnode')[firstOpen];
        if (vp && target) vp.scrollLeft = target.offsetLeft - vp.clientWidth / 2 + 80;
      }, 40);
    }

    return wrap;
  }

  /* 地图底部的浅绿陆地：上下都是波浪边 */
  function landSvg(w, h) {
    var top = 64, bot = 248, d = 'M0,' + top;
    for (var x = 0; x < w; x += 90) {
      d += ' Q' + (x + 45) + ',' + (top - 16) + ' ' + (x + 90) + ',' + top;
    }
    d += ' L' + w + ',' + bot;
    for (var x2 = w; x2 > 0; x2 -= 90) {
      d += ' Q' + (x2 - 45) + ',' + (bot + 16) + ' ' + (x2 - 90) + ',' + bot;
    }
    d += ' Z';
    return '<svg class="journey-land" width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="none" aria-hidden="true">' +
      '<path d="' + d + '" fill="#cfe6b8" stroke="#d7c49a" stroke-width="10" stroke-linejoin="round"/>' +
      '<path d="' + d + '" fill="none" stroke="#eef6e4" stroke-width="3" stroke-linejoin="round"/>' +
      '</svg>';
  }

  /* 穿过所有节点的虚线小路 */
  function pathSvg(pts) {
    var d = 'M' + pts[0].x + ',' + pts[0].y;
    for (var i = 1; i < pts.length; i++) {
      var prev = pts[i - 1], cur = pts[i];
      var mid = Math.round((prev.x + cur.x) / 2);
      d += ' C' + mid + ',' + prev.y + ' ' + mid + ',' + cur.y + ' ' + cur.x + ',' + cur.y;
    }
    return '<svg class="journey-path" width="100%" height="320" aria-hidden="true">' +
      '<path d="' + d + '" fill="none" stroke="#fff9e8" stroke-width="13" stroke-linecap="round"/>' +
      '<path d="' + d + '" fill="none" stroke="#c9a54d" stroke-width="4" stroke-dasharray="2 14" stroke-linecap="round"/>' +
      '</svg>';
  }

  /* 树、房子、山：让地图不再是一条光秃秃的线 */
  function decoSvg(pts, width) {
    var TREES = [
      '<rect x="13" y="30" width="5" height="12" rx="1" fill="#8a6b45"/>' +
      '<polygon points="15.5,0 2,22 29,22" fill="#4f8b52"/>' +
      '<polygon points="15.5,10 3,32 28,32" fill="#5f9f62"/>',
      '<rect x="13" y="30" width="5" height="12" rx="1" fill="#8a6b45"/>' +
      '<polygon points="15.5,2 3,20 28,20" fill="#3f7a4b"/>' +
      '<polygon points="15.5,12 4,30 27,30" fill="#4f8b52"/>'
    ];
    var HOUSE =
      '<rect x="8" y="15" width="28" height="21" fill="#f5ead0"/>' +
      '<polygon points="22,0 2,17 42,17" fill="#d98e5f"/>' +
      '<rect x="18" y="24" width="8" height="12" fill="#a8794f"/>' +
      '<rect x="10" y="20" width="5" height="5" fill="#fff8ea"/>';
    var MOUNT =
      '<polygon points="30,0 2,46 58,46" fill="#a3bcae"/>' +
      '<polygon points="30,0 17,25 43,25" fill="#ffffff"/>';

    var kinds = [TREES[0], HOUSE, MOUNT, TREES[1], HOUSE, TREES[0], MOUNT, TREES[1]];
    var out = '';
    var count = Math.max(3, Math.floor(width / 230));

    for (var i = 0; i < count; i++) {
      var x = 46 + i * Math.floor((width - 92) / count) + (i % 2 ? 12 : 0);
      var kind = kinds[i % kinds.length];
      var size = kind === MOUNT ? 48 : 32;
      out += '<svg class="jdeco" aria-hidden="true" viewBox="0 0 ' + (kind === MOUNT ? 60 : 44) + ' ' + (kind === MOUNT ? 46 : 42) + '" ' +
        'style="left:' + x + 'px;top:' + (66 + (i % 3) * 5) + 'px;width:' + size + 'px;opacity:.92">' + kind + '</svg>';
    }
    return out;
  }

  /* 拖动 / 滚轮 / 箭头：横向浏览地图 */
  function setupJourney(wrap) {
    var vp = wrap.querySelector('.journey-viewport');
    if (!vp) return;
    var down = false, startX = 0, startLeft = 0, moved = 0;

    // 注意：这里不能用 setPointerCapture——一旦捕获，后续 click 的 target 会变成 viewport，
    // 圆点按钮就永远收不到 click（表现为「点图标没反应」）。
    vp.addEventListener('pointerdown', function (e) {
      if (e.button !== undefined && e.button !== 0) return;
      down = true; moved = 0;
      startX = e.clientX; startLeft = vp.scrollLeft;
    });
    vp.addEventListener('pointermove', function (e) {
      if (!down) return;
      var dx = e.clientX - startX;
      moved = Math.max(moved, Math.abs(dx));
      if (moved > 6) {
        vp.classList.add('is-dragging');
        vp.scrollLeft = startLeft - dx;
      }
    });
    function endDrag() {
      down = false;
      vp.classList.remove('is-dragging');
    }
    vp.addEventListener('pointerup', endDrag);
    vp.addEventListener('pointercancel', endDrag);
    vp.addEventListener('pointerleave', function () { if (!down) vp.classList.remove('is-dragging'); });

    // 拖动后不要误触发关卡
    vp.addEventListener('click', function (e) {
      if (moved > 6) { e.preventDefault(); e.stopPropagation(); moved = 0; return; }
      var node = e.target.closest ? e.target.closest('.jnode') : null;
      if (node && !node.getAttribute('data-level')) {
        e.preventDefault(); e.stopPropagation();
        toast('这关还没解锁，先把前面一关点亮');
      }
    }, true);

    vp.addEventListener('wheel', function (e) {
      var delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (!delta) return;
      vp.scrollLeft += delta;
      e.preventDefault();
    }, { passive: false });

    wrap.querySelectorAll('[data-jdir]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var dir = Number(btn.getAttribute('data-jdir'));
        vp.scrollBy({ left: dir * Math.max(360, vp.clientWidth * 0.8), behavior: 'smooth' });
      });
    });

    vp.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { vp.scrollBy({ left: 240, behavior: 'smooth' }); e.preventDefault(); }
      if (e.key === 'ArrowLeft') { vp.scrollBy({ left: -240, behavior: 'smooth' }); e.preventDefault(); }
    });
  }

  /* ---------------- 进入关卡：只做状态准备，不决定落在哪个页面 ---------------- */
  function enterLevel(levelId, fromMap) {
    var path = getPath(state.majorId);
    var found = path && findLevel(path, levelId);
    if (!found) { show('map'); return null; }

    state.levelId = levelId;
    state.qi = 0;
    state.levelCorrect = 0;
    state.fromMap = fromMap !== false;
    state.levelMeta = found;
    remember({ page: null, docY: 0 });
    return found;
  }

  /* 从路径 / 文档目录进关卡：先看讲解（视频或文档），再点「开始做题」 */
  function openLevel(levelId, fromMap) {
    var found = enterLevel(levelId, fromMap);
    if (!found) return;

    if (state.style === 'video') {
      state.videoPage = null;   // 每次进关卡重新定位到本关第一集
      show('video');
      return;
    }
    show('doc');
  }

  /* 从闯关地图点圆点：直接进题目（选择题 → 代码任务） */
  function startLevelQuiz(levelId, fromMap) {
    var found = enterLevel(levelId, fromMap);
    if (!found) return;
    startQuiz();
  }

  /* 在题目页点「看这一关的讲解」：回到讲解页 */
  function openExplainOfCurrentLevel() {
    if (!state.levelId) return;
    openLevel(state.levelId, state.fromMap);
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

    bvSections().forEach(function (sec, idx) {
      var hasMine = false;
      for (var p = sec.from; p <= sec.to; p++) { if (mine[p]) { hasMine = true; break; } }
      var open = hasMine || (curPage >= sec.from && curPage <= sec.to);

      var group = el('div', 'course-chapter' + (open ? ' is-open' : '') + (hasMine ? ' is-mine' : ''));
      var head = el('button', 'course-chapter-head');
      head.type = 'button';
      head.innerHTML =
        '<span class="course-chapter-idx">' + (idx + 1 < 10 ? '0' : '') + (idx + 1) + '</span>' +
        '<span class="course-chapter-text">' +
          '<span class="course-chapter-name">' + esc(sec.name) + '</span>' +
          '<span class="course-chapter-range">P' + sec.from + '–P' + sec.to + '</span>' +
        '</span>' +
        '<span class="course-chapter-arrow">▾</span>';
      head.addEventListener('click', function () { group.classList.toggle('is-open'); });

      var body = el('div', 'course-chapter-body');
      for (var q = sec.from; q <= sec.to; q++) {
        var kind = mine[q];
        var a = el('a',
          'video-ep' +
          (q === curPage ? ' is-on' : '') +
          (kind === 'main' ? ' is-mine' : '') +
          (kind === 'extra' ? ' is-extra' : ''));
        a.href = '#';
        a.setAttribute('data-page', q);
        a.innerHTML =
          '<span class="video-ep-no">P' + q + '</span>' +
          '<span class="video-ep-title">' + esc(bvTitle(q).replace(/^[^-]+-\d+-/, '')) + '</span>' +
          '<span class="video-ep-dur">' + bvDuration(q) + '</span>';
        body.appendChild(a);
      }

      group.appendChild(head);
      group.appendChild(body);
      nav.appendChild(group);
    });
  }

  function renderVideo() {
    var found = currentLevel();
    if (!found) { show('map'); return; }
    var path = getPath(state.majorId);
    var major = path.major;
    var level = found.level;

    // 选择本关对应的视频课程（高数/数分 → 宋浩高数，其余 → C 语言）
    var vc = (typeof pickVideoCourse === 'function') ? pickVideoCourse(major, level, found) : VIDEO_LIBS.cs;
    CUR_VC = vc;

    $('vCrumb').textContent = found.stage.title + ' / ' + found.module.name;
    $('vTitle').textContent = level.name;
    renderSyncBox($('videoSync'), level);
    $('videoStartQuiz').hidden = !(level.questions && level.questions.length);

    // 没有按关卡细分集的专业：用本专业的零基础课程兜底（major.video）
    if (vc.id === 'cs' && !VIDEO_MAP[level.id] && major.video) {
      $('vSideTitle').textContent = major.video.title;
      $('vSideSub').textContent = '本专业推荐课程 · 暂未按关卡细分';
      $('vSideNow').textContent = '';
      $('vLead').textContent = '这个专业暂时只配了一门零基础课程，没有拆到每一关。先看课程导论或第一章，再回来做题；完整课程可以在 B 站继续看。';

      var nav0 = $('videoNav');
      nav0.innerHTML = '';
      var group0 = el('div', 'course-chapter is-open is-mine');
      var head0 = el('div', 'course-chapter-head');
      head0.innerHTML =
        '<span class="course-chapter-idx">01</span>' +
        '<span class="course-chapter-text">' +
          '<span class="course-chapter-name">本专业推荐课程</span>' +
          '<span class="course-chapter-range">完整课程</span>' +
        '</span>';
      var body0 = el('div', 'course-chapter-body');
      var item = el('a', 'video-ep is-on');
      item.href = major.video.url;
      item.target = '_blank';
      item.rel = 'noopener';
      item.innerHTML =
        '<span class="video-ep-no">B站</span>' +
        '<span class="video-ep-title">' + esc(major.video.title) + '</span>' +
        '<span class="video-ep-dur">↗</span>';
      body0.appendChild(item);
      group0.appendChild(head0);
      group0.appendChild(body0);
      nav0.appendChild(group0);

      $('vPlayer').src = bvEmbedFromUrl(major.video.url);
      $('vNow').textContent = '正在播放：' + major.video.title;
      $('vOpen').href = major.video.url;
      $('vEpList').innerHTML = '';
      return;
    }

    // 换了课程（比如从 C 语言换到高数）：上一次看的集数作废，回到本关起点
    if (renderVideo._vcId !== vc.id) { state.videoPage = null; renderVideo._vcId = vc.id; }

    var v = getVideo(level.id);
    var pages = videoPagesOf(level.id);
    var page = state.videoPage || firstVideoPage(level.id);
    state.videoPage = page;

    $('vSideTitle').textContent = vc.title;
    $('vSideSub').textContent = vc.subtitle || ('共 ' + vc.total + ' 集');
    $('vSideNow').textContent = '正在播放 P' + page + ' / ' + vc.total;
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

  /* ---------------- 公共必修课：文字说明（分章 + 思维导图） ----------------
     内容在 js/course-common.js 的 COMMON_COURSES_DATA 里，
     这里只负责渲染：左栏章节目录 / 中间正文 / 右栏数字考点速记 */
  var COURSE_ACCENTS = ['#4f6ef7', '#7a5bf7', '#0f9d8c', '#d98324', '#d9544d', '#2f7fd0'];
  var courseIO = null;

  function getCourseData(id) {
    if (typeof COMMON_COURSES_DATA === 'undefined' || !id) return null;
    return COMMON_COURSES_DATA[id] || null;
  }

  function openCourse(id) {
    if (!getCourseData(id)) return;
    state.courseId = id;
    show('course');
  }

  function setActiveChapter(id) {
    document.querySelectorAll('#courseNav [data-ch]').forEach(function (a) {
      a.classList.toggle('is-on', a.getAttribute('data-ch') === id);
    });
  }

  function goChapter(id) {
    var node = document.getElementById('ch-' + id);
    if (!node) return;
    var top = node.getBoundingClientRect().top + window.pageYOffset - 76;
    window.scrollTo({ top: top, behavior: 'smooth' });
    setActiveChapter(id);
  }

  function mindMapHtml(map) {
    if (!map) return '';
    var branches = (map.branches || []).map(function (b) {
      var leaves = (b.leaves || []).map(function (x) {
        return '<span class="mm-leaf">' + x + '</span>';
      }).join('');
      return '<div class="mm-branch">' +
               '<div class="mm-label">' + b.label + '</div>' +
               '<div class="mm-leaves">' + leaves + '</div>' +
             '</div>';
    }).join('');
    return '<div class="mm">' +
             '<div class="mm-root">' + map.root + '</div>' +
             '<div class="mm-body">' + branches + '</div>' +
           '</div>';
  }

  function chapterHtml(ch) {
    var pts = (ch.pts || []).map(function (p) { return '<li>' + p + '</li>'; }).join('');
    return '<div class="ch-head">' +
             '<span class="ch-num">' + ch.num + '</span>' +
             '<h2 class="ch-title">' + ch.title + '</h2>' +
           '</div>' +
           '<p class="ch-core">' + ch.core + '</p>' +
           mindMapHtml(ch.map) +
           '<h3 class="ch-h3">必背要点</h3>' +
           '<ul class="kp-list">' + pts + '</ul>' +
           (ch.exam ? '<div class="course-tip"><b>考法提示</b>' + ch.exam + '</div>' : '');
  }

  function renderCourse() {
    var c = getCourseData(state.courseId);
    if (!c) { show('home'); return; }

    var byId = {};
    c.chapters.forEach(function (ch) { byId[ch.id] = ch; });

    /* 左栏：分组目录 */
    $('courseSideTitle').textContent = c.emoji + ' ' + c.short;
    $('courseSideSub').textContent = c.meta;
    var nav = $('courseNav');
    nav.innerHTML = '';
    var groups = c.groups || [{ title: '', ids: c.chapters.map(function (x) { return x.id; }) }];
    groups.forEach(function (g) {
      if (g.title) nav.appendChild(el('div', 'doc-nav-stage', g.title));
      g.ids.forEach(function (id) {
        var ch = byId[id];
        if (!ch) return;
        var a = el('a', 'doc-nav-item');
        a.href = '#ch-' + ch.id;
        a.setAttribute('data-ch', ch.id);
        a.innerHTML = '<span class="doc-nav-dot">·</span>' +
                      '<span class="doc-nav-txt">' + ch.num + ' ' + ch.title + '</span>';
        nav.appendChild(a);
      });
    });

    /* 中间：课程头 + 各章正文 */
    $('courseCrumb').textContent = '公共必修课 · ' + (c.tag || '思政');
    $('courseTitle').textContent = c.name;
    $('courseLead').textContent = c.lead;
    $('courseMeta').innerHTML =
      '<span class="cm-chip">📚 ' + c.meta + '</span>' +
      '<span class="cm-chip">🧭 ' + c.chapters.length + ' 章</span>' +
      '<span class="cm-chip">🗺️ 每章 1 张思维导图</span>';

    var body = $('courseBody');
    body.innerHTML = '';

    /* 开篇：全书逻辑主线 */
    if (c.map) {
      var intro = el('div', 'course-map');
      intro.innerHTML = '<h3 class="ch-h3">全书逻辑主线 · 先看这张图</h3>' + mindMapHtml(c.map);
      body.appendChild(intro);
    }

    c.chapters.forEach(function (ch, i) {
      var sec = el('section', 'course-ch');
      sec.id = 'ch-' + ch.id;
      sec.style.setProperty('--ch-accent', COURSE_ACCENTS[i % COURSE_ACCENTS.length]);
      sec.innerHTML = chapterHtml(ch);
      body.appendChild(sec);
    });

    /* 右栏：数字考点速记 */
    var q = $('courseQuick');
    q.innerHTML = '<div class="doc-toc-title">数字考点速记</div>';
    (c.quick || []).forEach(function (item) {
      var d = el('div', 'quick-item');
      d.innerHTML = '<span class="quick-n">' + item.n + '</span>' +
                    '<span class="quick-body"><span class="quick-t">' + item.t + '</span>' +
                    '<span class="quick-d">' + item.d + '</span></span>';
      q.appendChild(d);
    });

    /* 底部：延伸资源 */
    var refs = $('courseRefs');
    refs.innerHTML = '<h3>延伸与核对来源</h3>';
    var ul = el('ul', 'doc-ref-list');
    (c.refs || []).forEach(function (r) {
      var li = el('li');
      li.innerHTML = '<a href="' + r.url + '" target="_blank" rel="noopener">' + r.name + '</a>';
      ul.appendChild(li);
    });
    refs.appendChild(ul);
    refs.appendChild(el('p', 'doc-ref-note',
      '本页按教材章节框架重新组织考点，未转载原文；与手头教材/讲义不一致时以教材为准。'));

    var entry = (typeof COMMON_COURSES !== 'undefined' ? COMMON_COURSES : []).filter(function (x) {
      return x.courseId === c.id;
    })[0];
    var src = $('courseSrc');
    if (entry && entry.url) { src.href = entry.url; src.hidden = false; } else { src.hidden = true; }

    /* 左栏高亮跟随滚动 */
    setActiveChapter(c.chapters[0] ? c.chapters[0].id : null);
    if (courseIO) courseIO.disconnect();
    if (typeof IntersectionObserver === 'function') {
      courseIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) setActiveChapter(en.target.id.replace(/^ch-/, ''));
        });
      }, { rootMargin: '-80px 0px -68% 0px', threshold: 0 });
      c.chapters.forEach(function (ch) {
        var node = document.getElementById('ch-' + ch.id);
        if (node) courseIO.observe(node);
      });
    }
  }

  /* ---------------- 同步教材：关卡页「这本教材 · 第几章」卡片 ----------------
     数据来自 js/textbooks.js，经 data.js 的 attachTextbookSync() 挂到关卡上 */
  function renderSyncBox(node, level) {
    if (!node) return;
    var s = level && level.sync;
    if (!s) { node.hidden = true; node.innerHTML = ''; return; }

    var b = s.book;
    var h = '<div class="tb-sync-head">' +
      '<span class="tb-sync-kicker">📚 同步教材</span>' +
      (s.chapterTotal
        ? '<span class="tb-sync-chapter">第 ' + s.chapterNo + ' 章 / 共 ' + s.chapterTotal + ' 章</span>'
        : '<span class="tb-sync-chapter">第 ' + s.chapterNo + ' 章</span>') +
      '<span class="tb-sync-diff is-' + s.difficulty + '">' + s.difficulty + '</span>' +
      '</div>';

    if (b) {
      h += '<div class="tb-sync-book"><b>' + esc(b.title) + '</b>' +
        '<span class="tb-sync-meta">' + esc(b.author) + ' · ' + esc(b.pub) + ' · ' + esc(b.edition) + '</span></div>';
      if (s.chapterTitle) {
        h += '<div class="tb-sync-chapline">本章：第 ' + s.chapterNo + ' 章 · ' + esc(s.chapterTitle) + '</div>';
      }
    } else {
      h += '<div class="tb-sync-book"><b>教材待教务公布</b>' +
        '<span class="tb-sync-meta">这一关按培养方案中的课程位置编排</span></div>';
    }

    if (s.points && s.points.length) {
      h += '<div class="tb-sync-points"><span class="tb-points-label">本章知识点</span>' +
        s.points.map(function (p) { return '<span class="tb-point">' + esc(p) + '</span>'; }).join('') +
        '</div>';
    }

    var foot = [];
    if (s.scheme) {
      foot.push('培养方案：' + esc(s.scheme) +
        (s.college && s.college.indexOf('—') !== 0 ? '（' + esc(s.college) + '）' : ''));
    }
    if (s.note) foot.push(esc(s.note));
    if (foot.length) h += '<div class="tb-sync-foot">' + foot.join('<br>') + '</div>';

    node.hidden = false;
    node.innerHTML = h;
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

    // 左侧：整个专业路径的目录（阶段 → 模块 → 关卡），手机上是多级折叠
    var nav = $('docNav');
    nav.innerHTML = '';
    var curStage = -1, curModule = -1;
    path.stages.forEach(function (stage, si) {
      stage.modules.forEach(function (mod, mi) {
        mod.levels.forEach(function (lv) {
          if (lv.id === level.id) { curStage = si; curModule = mi; }
        });
      });
    });

    path.stages.forEach(function (stage, si) {
      var group = el('div', 'doc-nav-group fold' + (si === curStage ? ' is-open' : ''));
      var stageHead = el('button', 'doc-nav-stage');
      stageHead.type = 'button';
      stageHead.setAttribute('data-fold', '');
      stageHead.setAttribute('aria-expanded', si === curStage ? 'true' : 'false');
      stageHead.innerHTML =
        '<span class="doc-nav-stage-txt">' + stage.title + '</span>' +
        '<span class="fold-arrow" aria-hidden="true">▾</span>';
      group.appendChild(stageHead);

      var groupBody = el('div', 'doc-nav-group-body');
      stage.modules.forEach(function (mod, mi) {
        var open = si === curStage && mi === curModule;
        var sub = el('div', 'doc-nav-sub fold' + (open ? ' is-open' : ''));
        var modHead = el('button', 'doc-nav-label');
        modHead.type = 'button';
        modHead.setAttribute('data-fold', '');
        modHead.setAttribute('aria-expanded', open ? 'true' : 'false');
        modHead.innerHTML =
          '<span class="doc-nav-label-txt">' + mod.name + '</span>' +
          '<span class="fold-arrow" aria-hidden="true">▾</span>';
        sub.appendChild(modHead);

        var subBody = el('div', 'doc-nav-sub-body');
        mod.levels.forEach(function (lv) {
          var rec = state.done[lv.id];
          var a = el('a', 'doc-nav-item' + (lv.id === level.id ? ' is-on' : ''));
          a.href = '#';
          a.setAttribute('data-level', lv.id);
          a.innerHTML =
            '<span class="doc-nav-dot">' + (rec ? '✓' : '·') + '</span>' +
            '<span class="doc-nav-txt">' + lv.name + '</span>' +
            (lv.ready ? '' : '<span class="doc-nav-soon">建设中</span>');
          subBody.appendChild(a);
        });
        sub.appendChild(subBody);
        groupBody.appendChild(sub);
      });
      group.appendChild(groupBody);
      nav.appendChild(group);
    });

    // 正文
    $('docCrumb').textContent = found.stage.title + ' / ' + found.module.name;
    $('docTitle').textContent = level.name;
    $('docLead').textContent = doc.lead || '';
    renderSyncBox($('docSync'), level);

    // 阅读信息 + 进度条
    var plain = (doc.lead || '') + doc.sections.map(function (s) {
      return (s.title || '') + (s.html || '').replace(/<[^>]+>/g, '');
    }).join('');
    var mins = Math.max(1, Math.round(plain.length / 400));
    $('docReadMeta').textContent = doc.sections.length + ' 节 · 约 ' + mins + ' 分钟读完';
    $('docReadBar').style.width = '0%';

    var body = $('docBody');
    body.innerHTML = '';
    doc.sections.forEach(function (sec, i) {
      var wrap = el('section', 'doc-sec');
      wrap.id = 'sec-' + sec.id;
      wrap.innerHTML = '<h2>' + sec.title + '</h2>' + sec.html;
      body.appendChild(wrap);
    });

    // 右侧：本篇目录
    var toc = $('docToc');
    toc.innerHTML = '<div class="doc-toc-title">本篇目录</div>';
    doc.sections.forEach(function (sec, i) {
      var a = el('a', 'doc-toc-link');
      a.href = '#sec-' + sec.id;
      a.textContent = (i + 1) + '. ' + sec.title;
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
    $('openExplain').textContent = state.style === 'video' ? '🎬 看这一关的视频' : '📖 看这一关的讲解';
    state.quizDone = false;

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
    setupCodeCard(found.level);
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
    $('nextBtn').textContent = state.qi === qs.length - 1
      ? (found.level.code && !state.code[found.level.id] ? '去完成代码任务 ↓' : '完成本关 →')
      : '下一题 →';
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
      fetch(apiUrl('/api/levels/' + found.level.id + '/check'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questionIndex: state.qi, choice: i })
      }).then(function (r) { return r.ok ? r.json() : null; })
        .then(function (res) {
          // 服务端没有这道题（新关卡还没同步）时退回本地答案，避免卡住
          revealResult(q, i, res && typeof res.answer === 'number' ? res.answer : q.answer);
        })
        .catch(function () { revealResult(q, i, q.answer); });
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

    state.quizDone = true;

    // 有代码任务的关卡：选择题答完还不算通关，要把代码也跑过
    if (found.level.code && !state.code[found.level.id]) {
      $('nextBtn').textContent = '去完成代码任务 ↓';
      toast('选择题已完成，代码任务通过后即可通关');
      $('codeCard').scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    finishLevel(found);
  }

  function finishLevel(found) {
    var qs = found.level.questions || [];
    var total = qs.length;
    var stars = state.levelCorrect === total ? 3
      : (state.levelCorrect >= Math.ceil(total * 2 / 3) ? 2 : (state.levelCorrect > 0 ? 1 : 0));
    var prev = state.done[state.levelId];
    if (!prev || stars >= (prev.stars || 0)) {
      state.done[state.levelId] = {
        ok: state.levelCorrect, total: total, stars: stars,
        name: found.level.name, majorId: state.majorId, ts: Date.now(),
        code: !!found.level.code
      };
      save();
    }
    state.justLit = state.levelId;
    toast('🎉 本关已点亮：' + state.levelCorrect + '/' + total + ' 题正确' +
      (found.level.code ? '，代码任务已通过' : '') + ' ' + starsText(stars));
    show(state.fromMap ? 'map' : 'major');
  }

  /* ---------------- 代码任务：运行与判题 ---------------- */
  var codeBusy = false;

  /* ---------------- 代码任务：离线判定 ----------------
     线上没有编译环境，所以不跑 gcc，改成两项检查：
     ① 关键代码填空  ② 运行结果预测（用本关 tests[0] 比对）
     答案表在 js/code-offline.js。 */
  var codeFailCount = {};

  function offlineSpec(level) {
    var table = window.CODE_OFFLINE || {};
    return (level && level.code && table[level.code.task]) || null;
  }

  function setupCodeCard(level) {
    var card = $('codeCard');
    if (!level.code) { card.hidden = true; $('codeBlanks').innerHTML = ''; return; }
    card.hidden = false;
    $('codeTitle').textContent = level.name.replace(/^第 \d+ 关 · /, '');
    $('codeTask').innerHTML = '<strong>任务：</strong>' + esc(level.code.task);
    $('codeHintWrap').hidden = !level.code.hint;
    $('codeHintWrap').open = false;
    $('codeHint').textContent = level.code.hint || '';

    var st = $('runnerStatus');
    st.className = 'runner-status is-ready';
    st.textContent = offlineSpec(level) ? '离线判定 · 不用联网' : '这一关暂无离线判定';

    $('codeRef').textContent = level.code.starter || '';
    var t = (level.code.tests && level.code.tests[0]) || {};
    $('codeSampleIn').textContent = t.stdin ? String(t.stdin).replace(/\n/g, ' ⏎ ') : '（无输入）';

    var out = $('codeOutput');
    out.hidden = true;
    out.className = 'code-output';
    out.textContent = '';
    $('codePredict').value = state.drafts[level.id] || '';
    renderBlanks(level);
  }

  function renderBlanks(level) {
    var box = $('codeBlanks');
    box.innerHTML = '';
    var spec = offlineSpec(level);
    if (!spec) {
      box.appendChild(el('p', 'code-note', '这一关的离线判定还没配置，先做选择题吧。'));
      return;
    }
    var saved = (state.drafts[level.id + ':blank'] || []);
    spec.blanks.forEach(function (b, i) {
      var item = el('div', 'blank-item');
      item.appendChild(el('p', 'blank-q', (i + 1) + '. ' + b.q));
      var inp = el('input', 'blank-input');
      inp.type = 'text';
      inp.spellcheck = false;
      inp.setAttribute('data-blank', String(i));
      inp.value = saved[i] || '';
      inp.placeholder = '在这里写代码（末尾分号别忘了）';
      item.appendChild(inp);
      box.appendChild(item);
    });
  }

  // 代码比对：去掉所有空白、统一全角括号/逗号、忽略大小写
  function normCode(s) {
    return String(s || '')
      .replace(/[（]/g, '(').replace(/[）]/g, ')')
      .replace(/[，]/g, ',')
      .replace(/\s+/g, '')
      .toLowerCase();
  }

  // 输出比对：逐行去尾随空格、去掉末尾空行
  function normOut(s) {
    return String(s || '')
      .replace(/\r/g, '')
      .split('\n')
      .map(function (l) { return l.replace(/\s+$/, ''); })
      .join('\n')
      .replace(/\n+$/, '')
      .trim();
  }

  function submitCode() {
    var found = currentLevel();
    if (!found || !found.level.code) return;
    var level = found.level;
    var spec = offlineSpec(level);
    var out = $('codeOutput');
    out.hidden = false;
    out.className = 'code-output';

    if (!spec) {
      out.className = 'code-output is-bad';
      out.textContent = '这一关的离线判定还没配置，先做上面的选择题吧。';
      return;
    }

    var lines = [];
    var allOk = true;
    var failCount = (codeFailCount[level.id] || 0) + 1;
    codeFailCount[level.id] = failCount;

    // ① 填空
    var inputs = $('codeBlanks').querySelectorAll('.blank-input');
    var answers = [];
    spec.blanks.forEach(function (b, i) {
      var v = inputs[i] ? inputs[i].value : '';
      answers.push(v);
      var ok = b.accept.some(function (a) { return normCode(a) === normCode(v); });
      if (!ok) allOk = false;
      lines.push((ok ? '✓ ' : '✗ ') + '第 ' + (i + 1) + ' 项填空：' + (ok ? '对了' : '再看一眼提示里的写法'));
    });
    state.drafts[level.id + ':blank'] = answers;
    save();

    // ② 输出预测
    var t = (level.code.tests && level.code.tests[0]) || {};
    var pred = $('codePredict').value;
    state.drafts[level.id] = pred;
    save();
    var predOk = normOut(pred) === normOut(t.stdout);
    if (!predOk) allOk = false;
    lines.push((predOk ? '✓ ' : '✗ ') + '运行结果预测：' + (predOk ? '对了' : '还不对'));
    if (!predOk && failCount >= 2) {
      lines.push('   正确输出是：');
      String(t.stdout || '').split('\n').forEach(function (l) { lines.push('   | ' + l); });
    } else if (!predOk) {
      lines.push('   提示：注意输出格式（空格、换行、小数位数），对着代码骨架一行行推。');
    }

    if (allOk) {
      out.className = 'code-output is-ok';
      out.textContent = '✓ 两项都通过，这一关的代码任务完成。\n' + lines.join('\n');
      onCodePassed(found);
    } else {
      out.className = 'code-output is-bad';
      out.textContent = lines.join('\n') + (failCount >= 2 ? '' : '\n\n别急，改一改再提一次就行。');
    }
  }

  function resetCode() {
    var found = currentLevel();
    if (!found || !found.level.code) return;
    if (!confirm('清空这次填的内容，重新开始？')) return;
    delete state.drafts[found.level.id];
    delete state.drafts[found.level.id + ':blank'];
    save();
    $('codeOutput').hidden = true;
    setupCodeCard(found.level);
    toast('已清空，重新来一遍');
  }

  function copyCode() {
    var found = currentLevel();
    if (!found || !found.level.code) return;
    var text = found.level.code.starter || '';
    function done() { toast('代码骨架已复制，粘贴到本机编辑器里，装好 gcc 就能跑'); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(fallback);
    } else { fallback(); }
    function fallback() {
      var ta = el('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;left:-9999px;top:0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); done(); }
      catch (e) { toast('复制失败，请手动从骨架里选代码复制'); }
      document.body.removeChild(ta);
    }
  }


  // 静态站（Surge）与后端不同源：所有接口请求都要拼 API 基地址
  function apiUrl(p) {
    var b = (window.Cloud && window.Cloud.apiBase) ? window.Cloud.apiBase() : '';
    return b ? String(b).replace(/\/+$/, '') + p : p;
  }

  function postCode(url, payload) {
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (data) {
        if (!r.ok) throw new Error(data.error || ('HTTP ' + r.status));
        return data;
      });
    });
  }


  function onCodePassed(found) {
    state.code[found.level.id] = true;
    save();
    if (!found.level.questions || state.quizDone) {
      toast('代码任务通过，本关通关 🎉');
      finishLevel(found);
    } else {
      toast('代码任务通过！完成上面的选择题即可通关');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
    var cs = e.target.closest('[data-course]');
    if (cs) { e.preventDefault(); openCourse(cs.getAttribute('data-course')); return; }
    var chn = e.target.closest('[data-ch]');
    if (chn) { e.preventDefault(); goChapter(chn.getAttribute('data-ch')); return; }
    var st = e.target.closest('[data-style]');
    if (st) { e.preventDefault(); selectStyle(st.getAttribute('data-style')); return; }
    var sw = e.target.closest('[data-switch-style]');
    if (sw) { e.preventDefault(); switchStyle(sw.getAttribute('data-switch-style')); return; }
    // 多级折叠：阶段 / 模块 / 目录分组（必须排在 data-level 之前，否则会被关卡点击吃掉）
    var fold = e.target.closest('[data-fold]');
    if (fold) {
      e.preventDefault();
      var host = fold.closest('.fold');
      if (host) {
        var opened = host.classList.toggle('is-open');
        fold.setAttribute('aria-expanded', opened ? 'true' : 'false');
      }
      return;
    }
    var lv = e.target.closest('[data-level]');
    if (lv) {
      e.preventDefault();
      var lvId = lv.getAttribute('data-level');
      // 闯关地图的圆点：直接进题目；路径页 / 文档目录：先进讲解
      if (lv.classList.contains('jnode')) {
        startLevelQuiz(lvId, true);
      } else {
        // 文档页左侧目录切换关卡时，保持"从哪来"的返回目标不变
        var fromNav = lv.classList.contains('doc-nav-item');
        openLevel(lvId, fromNav ? state.fromMap : true);
        // 手机版：从目录选了章节就收起目录，直接看正文
        if (fromNav && isMobileView()) {
          collapseFold('.doc-side', '.doc-fold-btn');
          scrollToNode('.doc-main');
        }
      }
      return;
    }
    var vp = e.target.closest('[data-page]');
    if (vp) {
      e.preventDefault();
      playVideo(Number(vp.getAttribute('data-page')));
      // 手机版：从目录选集就收起目录，回到播放器
      if (vp.closest('.course-side') && isMobileView()) {
        collapseFold('.course-side', '.side-fold-btn');
        scrollToNode('.course-main');
      }
      return;
    }
    var opt = e.target.closest('.option');
    if (opt && !opt.disabled) { chooseOption(Number(opt.getAttribute('data-i'))); }
  });

  $('nextBtn').addEventListener('click', nextQuestion);

  /* 代码任务按钮 */
  /* 代码任务按钮（离线判定） */
  $('codeSubmit').addEventListener('click', submitCode);
  $('codeReset').addEventListener('click', resetCode);
  $('codeLocal').addEventListener('click', copyCode);
  $('codePredict').addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); submitCode(); }
  });
  $('backToMap').addEventListener('click', function (e) { e.preventDefault(); show(state.fromMap ? 'map' : 'major'); });
  $('openExplain').addEventListener('click', function (e) { e.preventDefault(); openExplainOfCurrentLevel(); });
  $('backToMajor2').addEventListener('click', function (e) { e.preventDefault(); show('major'); });
  $('docStartQuiz').addEventListener('click', startQuiz);
  $('docBack').addEventListener('click', function (e) { e.preventDefault(); show(state.fromMap ? 'map' : 'major'); });
  $('courseBack').addEventListener('click', function (e) { e.preventDefault(); show('home'); });
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

  /* ---------------- 版式：自动 / 手机 / 电脑 ---------------- */
  /* 当前是否手机版视口（真的是窄屏，或用户手动切到手机版） */
  function isMobileView() {
    return document.documentElement.getAttribute('data-layout') === 'mobile' ||
      window.matchMedia('(max-width: 640px)').matches;
  }
  /* 收起某个折叠容器（目录卡片），同步按钮的 aria-expanded */
  function collapseFold(hostSel, btnSel) {
    var host = document.querySelector(hostSel);
    if (host) host.classList.remove('is-open');
    var btn = document.querySelector(btnSel);
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }
  function scrollToNode(sel) {
    var node = document.querySelector(sel);
    if (node) node.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function applyLayout() {
    var html = document.documentElement;
    if (state.layout === 'mobile') {
      html.setAttribute('data-layout', 'mobile');
    } else if (state.layout === 'desktop') {
      html.setAttribute('data-layout', 'desktop');
    } else {
      html.removeAttribute('data-layout');
    }
    var ico = $('layoutIco'), txt = $('layoutText');
    if (ico) ico.textContent = state.layout === 'mobile' ? '📱' : state.layout === 'desktop' ? '💻' : '🖥️';
    if (txt) txt.textContent = state.layout === 'mobile' ? '手机版' : state.layout === 'desktop' ? '电脑版' : '版式';
  }
  function cycleLayout() {
    state.layout = state.layout === 'auto' ? 'mobile' : state.layout === 'mobile' ? 'desktop' : 'auto';
    save(); applyLayout();
    toast(state.layout === 'mobile' ? '已切换到手机版' : state.layout === 'desktop' ? '已切换到电脑版' : '已恢复自动版式');
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

  /* ---------------- 每日打卡 ---------------- */
  function checkinStreak() {
    var n = 0, d = new Date();
    if (!state.checkins[dateKey(d)]) d.setDate(d.getDate() - 1);
    for (var i = 0; i < 400; i++) {
      if (state.checkins[dateKey(d)]) { n++; d.setDate(d.getDate() - 1); } else break;
    }
    return n;
  }
  function checkinTotal() {
    return Object.keys(state.checkins).length;
  }
  function todayChecked() {
    return !!state.checkins[dateKey(new Date())];
  }
  function checkIn() {
    // 在线时走服务器打卡（账号 + 全站人数），离线时退回本地记录
    if (window.Cloud && window.Cloud.isOnline()) { window.Cloud.checkin(); return; }
    var k = dateKey(new Date());
    if (state.checkins[k]) { toast('今天已经打过卡啦，明天再来'); return; }
    state.checkins[k] = true;
    save();
    renderCheckin();
    toast('打卡成功 · 连续 ' + checkinStreak() + ' 天');
  }
  function renderCheckin() {
    var done = todayChecked();
    var streak = checkinStreak();

    var home = $('homeCheckinBtn');
    if (home) {
      home.textContent = done ? '📅 已打卡 · 连续 ' + streak + ' 天' : '📅 今日打卡';
      home.classList.toggle('is-done', done);
      home.disabled = done;
    }

    var btn = $('checkinBtn');
    if (btn) {
      btn.textContent = done ? '今日已打卡 ✓' : '今日打卡';
      btn.disabled = done;
    }
    if ($('ckStreak')) $('ckStreak').textContent = streak;
    if ($('ckTotal')) $('ckTotal').textContent = checkinTotal();
    if ($('ckToday')) $('ckToday').textContent = done ? '已打卡' : '未打卡';

    var week = $('ckWeek');
    if (!week) return;
    week.innerHTML = '';
    for (var i = 6; i >= 0; i--) {
      var d = new Date(); d.setDate(d.getDate() - i);
      var on = !!state.checkins[dateKey(d)];
      var cell = el('div', 'ck-day' + (on ? ' is-on' : '') + (i === 0 ? ' is-today' : ''));
      cell.innerHTML =
        '<span class="ck-dow">' + (i === 0 ? '今天' : '周' + ['日', '一', '二', '三', '四', '五', '六'][d.getDay()]) + '</span>' +
        '<span class="ck-dot">' + (on ? '✓' : '·') + '</span>' +
        '<span class="ck-date">' + (d.getMonth() + 1) + '/' + d.getDate() + '</span>';
      week.appendChild(cell);
    }
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
  var quoteIdx = -1;
  function pickQuote() {
    if (!HOME_QUOTES.length) return;
    var next = Math.floor(Math.random() * HOME_QUOTES.length);
    if (HOME_QUOTES.length > 1 && next === quoteIdx) {
      next = (next + 1 + Math.floor(Math.random() * (HOME_QUOTES.length - 1))) % HOME_QUOTES.length;
    }
    quoteIdx = next;
    $('homeQuote').textContent = HOME_QUOTES[next];
  }

  function showQuote() { pickQuote(); }

  function renderHomeExtras() {
    if (!HOME_QUOTES.length) return;
    pickQuote();

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
    state.pendingAvatar = avatarPick;
    AVATARS.forEach(function (a) {
      var b = el('button', 'avatar-opt' + (a === avatarPick ? ' on' : ''));
      b.type = 'button';
      b.textContent = a;
      b.addEventListener('click', function () {
        avatarPick = a;
        state.pendingAvatar = a;
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
    var guest = !isMember();
    $('guestPanel').hidden = !guest;
    $('memberPanel').hidden = guest;
    if (guest) {
      renderAvatarPick();
      // 记住上次选的学校简称，下次注册不用重选
      if ($('sidPrefix') && p && p.prefix) {
        if (window.SchoolPick) window.SchoolPick.set(p.prefix);
        else $('sidPrefix').value = p.prefix;
      }
      var hint = $('staleHint');
      if (hint) {
        if (hasStaleProfile()) {
          hint.hidden = false;
          hint.innerHTML = '这台设备上有一份<b>还没上传到服务器</b>的本地记录（' + esc(p.nickname || '同学') + '）。' +
            '用学号注册或登录后，学习进度就会跟着账号走，换设备也能继续。';
        } else {
          hint.hidden = true;
        }
      }
      updateNav();
      return;
    }
    var hint2 = $('staleHint');
    if (hint2) hint2.hidden = true;
    $('pfAvatar').textContent = p.avatar || '🐱';
    $('pfName').textContent = p.nickname || '同学';
    $('pfSid').textContent = '学号 ' + (p.sid || '—');
    $('pfMode').textContent = p.cloud ? '云端账号' : '常驻模式';
    var sinceText = p.since || '—';
    if (typeof sinceText === 'string' && sinceText.indexOf('T') > 0) sinceText = sinceText.slice(0, 10);
    $('pfSince').textContent = '加入于 ' + sinceText;
    renderProfileStats();
  }

  function registerMember() {
    var sel = $('sidPrefix');
    var prefix = (sel && sel.value ? sel.value : 'NCU').toUpperCase();
    var raw = ($('sidInput').value || '').trim().toUpperCase();
    // 允许直接粘贴带前缀的完整账号：前缀以粘贴的为准（在选择列表里就同步选中）
    var m = raw.match(/^([A-Z][A-Z.\-\s]*?)[\s-]?(\d{6,20})$/);
    if (m) {
      var given = m[1].replace(/[.\-\s]/g, '');
      if (sel) {
        var hit = false;
        if (window.SchoolPick) {
          hit = !!window.SchoolPick.find(given);
        } else if (sel.options) {
          for (var i = 0; i < sel.options.length; i++) {
            if (sel.options[i].value === given) { hit = true; break; }
          }
        }
        if (hit) {
          prefix = given;
          if (window.SchoolPick) window.SchoolPick.set(given);
          else sel.value = given;
        }
      }
      raw = m[2];
    }
    if (!/^\d{6,20}$/.test(raw)) { toast('学号应该是 6–20 位数字'); $('sidInput').focus(); return; }
    var nick = ($('nickInput').value || '').trim();
    if (!nick) nick = '同学' + raw.slice(-4);
    state.profile = {
      mode: 'member',
      prefix: prefix,
      sid: prefix + raw,
      snum: raw,
      nickname: nick.slice(0, 16),
      avatar: avatarPick || AVATARS[0],
      since: dateKey(new Date())
    };
    save();
    updateNav();
    renderProfile();
    toast('注册成功，账号 ' + prefix + raw);
  }

  function logoutMember() {
    if (!confirm('退出后会回到游客模式，学习进度仍保留在这台设备上。确定退出？')) return;
    var keepPrefix = (state.profile && state.profile.prefix) || 'NCU';
    state.profile = { mode: 'guest', prefix: keepPrefix };
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
  applyLayout();
  renderHomeCats();
  renderHomeCommon();
  renderCarousel();
  renderHomeExtras();
  startStudyTimer();
  startCarousel();

  $('themeBtn').addEventListener('click', toggleTheme);
  if ($('themeBtn2')) $('themeBtn2').addEventListener('click', toggleTheme);
  if ($('layoutBtn')) $('layoutBtn').addEventListener('click', cycleLayout);
  $('navMe').addEventListener('click', function (e) { e.preventDefault(); show('profile'); });
  $('quoteNext').addEventListener('click', showQuote);
  if ($('homeCheckinBtn')) $('homeCheckinBtn').addEventListener('click', checkIn);
  if ($('checkinBtn')) $('checkinBtn').addEventListener('click', checkIn);
  $('caroPrev').addEventListener('click', function () { caroGo(-1); });
  $('caroNext').addEventListener('click', function () { caroGo(1); });
  $('carousel').addEventListener('mouseenter', function () { caroPaused = true; });
  $('carousel').addEventListener('mouseleave', function () { caroPaused = false; });

  // 在线时注册/登录交给 js/cloud.js（服务器账号），离线时退回本地常驻模式
  function onAuthClick() {
    if (window.Cloud && window.Cloud.isOnline()) { window.Cloud.submitAuth(); return; }
    registerMember();
  }

  $('registerBtn').addEventListener('click', onAuthClick);
  $('sidInput').addEventListener('keydown', function (e) { if (e.key === 'Enter') onAuthClick(); });
  $('nickInput').addEventListener('keydown', function (e) { if (e.key === 'Enter') onAuthClick(); });
  if ($('pwdInput')) $('pwdInput').addEventListener('keydown', function (e) { if (e.key === 'Enter') onAuthClick(); });
  if ($('pwdInput2')) $('pwdInput2').addEventListener('keydown', function (e) { if (e.key === 'Enter') onAuthClick(); });
  $('logoutBtn').addEventListener('click', function () {
    if (window.Cloud && window.Cloud.hasSession()) { window.Cloud.logout(); return; }
    logoutMember();
  });
  $('editAvatarBtn').addEventListener('click', changeAvatar);

  // 给 js/cloud.js 用的钩子（在线/离线共用同一套渲染）
  window.__YL = {
    state: state,
    save: save,
    toast: toast,
    show: show,
    renderProfile: renderProfile,
    updateNav: updateNav,
    renderProfileStats: renderProfileStats,
    isOnline: function () { return ONLINE; }
  };

  var docScrollTimer = null;
  window.addEventListener('scroll', function () {
    if (curView !== 'doc') return;
    var bar = $('docReadBar');
    if (bar) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var pct = max > 0 ? Math.min(100, Math.max(0, window.scrollY / max * 100)) : 0;
      bar.style.width = pct.toFixed(1) + '%';
    }
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

  // 检测后端是否可用：在线模式下判题走 POST，离线模式本地判题（首次可能被网络抖动打断，自动重试）
  function detectBackend(attempt) {
    fetch(apiUrl('/api/health'), { cache: 'no-store' }).then(function (r) {
      if (r.ok) { ONLINE = true; return; }
      if (attempt < 2) window.setTimeout(function () { detectBackend(attempt + 1); }, 1200);
    }).catch(function () {
      if (attempt < 2) window.setTimeout(function () { detectBackend(attempt + 1); }, 1200);
      else ONLINE = false;
    });
  }
  detectBackend(0);
  show('home');
})();
