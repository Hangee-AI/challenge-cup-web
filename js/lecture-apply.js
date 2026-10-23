/* ==========================================================
   lecture-apply.js · 教材讲解章节注入器
   ----------------------------------------------------------
   用法：addLectures(majorId, { 课程名: [ [章标题, 导语, [知识点...], 方法与步骤, 易错点, [重点展开段落...]], ... ] })
   - 按课程名 + 章标题定位关卡（找不到标题时按章序号兜底）；
   - 覆盖该关的 DOCS 为 4 节：教材讲解·知识框架 / 教材精讲·重点展开 / 怎么用 / 易错点；
   - 同一本教材的多个专业可直接复用 window.TEXTBOOK_LECTURES[书名][章标题]，
     命中时优先使用共享精讲，不再重复撰稿；
   - 之后由 docs-deepen.js 继续追加「教材要点」。
   必须在各课程文件之后、docs-deepen.js 之前加载。
   ========================================================== */
(function () {
  if (typeof DOCS === 'undefined' || typeof getPath !== 'function') return;

  var stats = window.__LECT_STATS__ = window.__LECT_STATS__ || {};
  var shared = window.TEXTBOOK_LECTURES = window.TEXTBOOK_LECTURES || {};

  function tailOf(name) {
    return String(name || '').replace(/^第\s*\d+\s*[章关][·\.、\s]*/, '');
  }

  window.addLectures = function (majorId, data) {
    var p;
    try { p = getPath(majorId); } catch (e) { return; }
    if (!p || !p.stages) return;

    var applied = 0;
    p.stages.forEach(function (st) {
      (st.modules || []).forEach(function (m) {
        var list = data[m.name];
        if (!list) return;
        (m.levels || []).forEach(function (l, k) {
          var ch = null;
          var tail = tailOf(l.name);
          for (var j = 0; j < list.length; j++) {
            if (list[j][0] === tail) { ch = list[j]; break; }
          }
          if (!ch) ch = list[k];
          if (!ch) return;

          // 同一本教材直接复用共享精讲（按章标题精确匹配，避免错配）
          var book = l.sync && l.sync.book;
          var sList = book && shared[book];
          var sharedCh = sList && sList[tail];
          var src = sharedCh || ch;
          var isShared = !!sharedCh;

          var lead = isShared ? src[0] : src[1];
          var pts = isShared ? src[1] : src[2];
          var use = isShared ? src[2] : src[3];
          var trap = isShared ? src[3] : src[4];
          var ext = isShared ? src[4] : src[5];
          pts = pts || [];
          ext = ext || [];

          var html = '<ul>' + pts.map(function (x) {
            return '<li>' + x + '</li>';
          }).join('') + '</ul>';

          var sections = [{ id: 'lect', title: '教材讲解 · 知识框架', html: html }];
          if (ext.length) {
            sections.push({
              id: 'deep',
              title: '教材精讲 · 重点展开',
              html: ext.map(function (p) { return '<p>' + p + '</p>'; }).join('')
            });
          }
          sections.push({ id: 'use', title: '怎么用 · 方法与步骤', html: '<p>' + (use || '') + '</p>' });
          sections.push({ id: 'trap', title: '易错点 · 自检', html: '<p>' + (trap || '') + '</p>' });

          DOCS[l.id] = {
            lead: lead || '',
            sections: sections,
            refs: []
          };
          applied++;
        });
      });
    });
    stats[majorId] = applied;
  };
})();
