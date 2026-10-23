/* ==========================================================
   docs-deepen.js · 讲义加厚：为全站每一关补一节「教材要点」
   依据 level.sync（教材 / 章序号 / 章标题 / 知识点 / 难度）生成，
   未匹配到教材的关卡补「本章自查清单」。幂等：已有 bk 小节则跳过。
   ========================================================== */
(function () {
  if (typeof MAJORS === 'undefined' || typeof DOCS === 'undefined') return;
  if (typeof getPath !== 'function') return;

  var added = 0, missed = 0, skipped = 0;

  MAJORS.forEach(function (m) {
    var p;
    try { p = getPath(m.id); } catch (e) { return; }
    if (!p || !p.stages) return;

    var ci = 0;
    p.stages.forEach(function (s) {
      (s.modules || []).forEach(function (md) {
        (md.levels || []).forEach(function (l, k) {
          var doc = DOCS[m.id + '-m' + ci + '-l' + k];
          if (!doc) {
            /* 占位关（待补真题）也要有讲义：先看教材要点，再按清单自查 */
            doc = {
              lead: '本关是待补充真题的练习关。先按下面的教材要点把本章过一遍，'
                + '再对照自查清单检验自己是否真的掌握。',
              sections: [], refs: []
            };
            DOCS[m.id + '-m' + ci + '-l' + k] = doc;
          }
          if (!doc.sections) doc.sections = [];

          var has = false;
          doc.sections.forEach(function (sec) { if (sec.id === 'bk') has = true; });
          if (has) { skipped++; return; }

          var sync = l.sync;
          var sec = { id: 'bk', title: '教材要点', html: '' };

          if (sync && sync.book) {
            var b = sync.book;
            var t = sync.chapterTitle || ('第 ' + sync.chapterNo + ' 章');
            var pts = sync.points || [];

            sec.title = '教材要点 · 第 ' + sync.chapterNo + ' 章「' + t + '」';

            var h = '<p>本节对应 <b>' + b.title + '</b>';
            if (b.author) h += '（' + b.author + '）';
            h += ' 第 ' + sync.chapterNo + ' 章「' + t + '」';
            if (b.pub) h += '，' + b.pub;
            if (b.edition) h += ' · ' + b.edition;
            h += '。全书共 ' + sync.chapterTotal + ' 章，本关难度：' + sync.difficulty + '。</p>';

            if (pts.length) {
              h += '<p>读教材时抓住下面这几个要点：</p><ul>';
              pts.forEach(function (pt) { h += '<li>' + pt + '</li>'; });
              h += '</ul>';
            } else {
              h += '<p>本章主题：<b>' + t + '</b>，先通读教材该章，再对照本关题目定位考点。</p>';
            }

            h += '<p><b>过关提示：</b>先把要点逐条读一遍，再回到本关题目一一对应；'
              + '能脱离教材讲清要点之间的关系，就算真正过关。</p>';
            if (sync.note) h += '<p class="doc-tip">培养方案备注：' + sync.note + '</p>';
            sec.html = h;
            added++;
          } else {
            sec.title = '本章自查清单';
            sec.html = '<p>本关暂未匹配到教材章节，建议以课堂笔记与本课程大纲为准。</p>'
              + '<ul><li>能复述本关的核心概念</li><li>能独立完成本关例题</li>'
              + '<li>能说出一个易错点并知道如何避免</li></ul>';
            missed++;
          }

          doc.sections.push(sec);
        });
        ci++;
      });
    });
  });

  window.__DOC_DEEPEN__ = { added: added, missed: missed, skipped: skipped };
})();
