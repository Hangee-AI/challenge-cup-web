/* ==========================================================
   textbook-notes-apply.js · 把共用教材讲义套用到各专业关卡
   ----------------------------------------------------------
   规则：
     1. 关卡所属课程能绑到教材（textbookOf），且该教材在 TEXTBOOK_NOTES 里有一份共用讲义；
     2. 该关卡当前讲义不足 3 节（即还是早期偏薄的 2 节版本）才升级，
        已经有加厚内容的（如金融学试点）不动；
     3. 按「章名匹配 → 序号兜底」定位教材章，避免上下册/章序错位。
   必须在所有课程文件、textbooks.js 之后，app.js 之前加载。
   ========================================================== */

(function () {
  if (typeof TEXTBOOK_NOTES === 'undefined' || typeof MAJORS === 'undefined') return;
  if (typeof textbookOf !== 'function' || typeof getPath !== 'function') return;

  var applied = 0, skipped = 0;

  function norm(s) {
    return String(s || '').replace(/\s+/g, '');
  }

  function pickChapter(chapters, levelName, idx) {
    var tail = String(levelName || '').replace(/^第\s*\d+\s*[章关][·\.、\s]*/, '');
    var nt = norm(tail);
    if (nt) {
      for (var i = 0; i < chapters.length; i++) {
        var ct = norm(chapters[i].t);
        if (ct && (nt.indexOf(ct) >= 0 || ct.indexOf(nt) >= 0)) return chapters[i];
      }
    }
    return chapters[idx] || null;
  }

  MAJORS.forEach(function (mj) {
    var p;
    try { p = getPath(mj.id); } catch (e) { return; }
    if (!p || !p.stages) return;
    p.stages.forEach(function (st) {
      (st.modules || []).forEach(function (m) {
        var tb = null;
        try { tb = textbookOf(mj.id, m.name); } catch (e) { tb = null; }
        if (!tb) return;
        var notes = TEXTBOOK_NOTES[tb.key];
        if (!notes || !notes.chapters) return;
        (m.levels || []).forEach(function (l, k) {
          if (!l || !l.ready) return;
          var d = DOCS[l.id];
          if (!d) return;
          var cur = d.sections ? d.sections.length : 0;
          if (cur >= 3) { skipped++; return; }
          var ch = pickChapter(notes.chapters, l.name, k);
          if (!ch || !ch.s) return;
          d.lead = ch.lead;
          d.sections = ch.s.map(function (s) {
            return { id: s.id, title: s.title, html: s.html };
          });
          if (!d.refs) d.refs = [];
          applied++;
        });
      });
    });
  });

  /* 调试用：控制台可看 __TB_NOTES.applied */
  try { window.__TB_NOTES = { applied: applied, skipped: skipped }; } catch (e) {}
})();
