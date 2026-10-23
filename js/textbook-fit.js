/* ==========================================================
   textbook-fit.js · 让教材目录与课程章节对齐
   有些课程按培养方案编了 8~15 章，而录入的教材目录只有 4~6 章，
   会出现"第 8 章 / 共 6 章"这种对不上的展示。
   这里在关卡同步之前，按课程实际章节把教材目录补到同样的章数，
   补出来的章名直接采用该课程对应关卡的章节标题，知识点留空。
   ========================================================== */
(function () {
  if (typeof MAJOR_STAGE_OVERRIDES === 'undefined' || typeof textbookOf !== 'function') return;
  var RE = /第\s*(\d+)\s*章\s*[·•:：\-—]?\s*(.+)/;
  var need = {};

  Object.keys(MAJOR_STAGE_OVERRIDES).forEach(function (mid) {
    var ov = MAJOR_STAGE_OVERRIDES[mid];
    if (!ov) return;
    Object.keys(ov).forEach(function (st) {
      (ov[st].modules || []).forEach(function (md) {
        (md.levels || []).forEach(function (l) {
          var m = RE.exec(l.name || '');
          if (!m) return;
          var n = parseInt(m[1], 10), t = m[2].trim();
          if (!n || !t) return;
          var key = mid + '|' + md.name;
          if (!need[key]) need[key] = { mid: mid, course: md.name, max: 0, titles: {} };
          if (n > need[key].max) need[key].max = n;
          if (!need[key].titles[n]) need[key].titles[n] = t;
        });
      });
    });
  });

  var fit = 0, books = 0;
  Object.keys(need).forEach(function (key) {
    var it = need[key];
    var book = textbookOf(it.mid, it.course);
    if (!book || !book.chapters) return;
    var C = book.chapters.length;
    if (it.max <= C) return;
    books++;
    for (var n = C + 1; n <= it.max; n++) {
      book.chapters.push({ n: n, t: it.titles[n] || ('第 ' + n + ' 章'), p: [] });
      fit++;
    }
  });

  window.__TEXTBOOK_FIT__ = { chapters: fit, books: books };
})();
