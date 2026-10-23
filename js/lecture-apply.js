/* ==========================================================
   lecture-apply.js · 教材讲解章节注入器
   ----------------------------------------------------------
   用法：addLectures(majorId, { 课程名: [ [章标题, 导语, [知识点...], 方法与步骤, 易错点], ... ] })
   - 按课程名 + 章标题定位关卡（找不到标题时按章序号兜底）；
   - 覆盖该关的 DOCS 为 3 节：教材讲解 / 怎么用 / 易错点；
   - 之后由 docs-deepen.js 继续追加「教材要点」。
   必须在各课程文件之后、docs-deepen.js 之前加载。
   ========================================================== */
(function () {
  if (typeof DOCS === 'undefined' || typeof getPath !== 'function') return;

  var stats = window.__LECT_STATS__ = window.__LECT_STATS__ || {};

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

          var pts = ch[2] || [];
          var html = '<ul>' + pts.map(function (x) {
            return '<li>' + x + '</li>';
          }).join('') + '</ul>';

          DOCS[l.id] = {
            lead: ch[1] || '',
            sections: [
              { id: 'lect', title: '教材讲解 · 知识框架', html: html },
              { id: 'use', title: '怎么用 · 方法与步骤', html: '<p>' + (ch[3] || '') + '</p>' },
              { id: 'trap', title: '易错点 · 自检', html: '<p>' + (ch[4] || '') + '</p>' }
            ],
            refs: []
          };
          applied++;
        });
      });
    });
    stats[majorId] = applied;
  };
})();
