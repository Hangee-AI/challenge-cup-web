/* ==========================================================
   pad-real-logic.js · 逻辑学导论：把补齐的占位关做成真题
   涉及章节：命题与论证、直言命题与三段论
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_SEP = { name: 'Stanford Encyclopedia of Philosophy（逻辑学条目）', url: 'https://plato.stanford.edu/' };

  function mk(title, brief, q, lead, s1, s2) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: [REF_SEP]
      }
    };
  }

  var LIST = [
    mk('第 1 章 · 逻辑与语言：命题与论证', '命题、论证与推理类型。', [
      { stem: '下列语句中属于命题（可判断真假）的是：', options: ['"所有金属都导电"', '"请把门关上"', '"今天天气好吗？"', '"啊，真美！"'], answer: 0, explain: '陈述句才有真假；祈使句、疑问句与感叹句一般不表达命题。' },
      { stem: '一个论证由哪两部分构成：', options: ['前提与结论', '主语与谓语', '概念与判断', '原因与结果'], answer: 0, explain: '论证是用若干前提支持一个结论的推理结构，评价看前提真假与推理有效性。' },
      { stem: '关于演绎推理与归纳推理，正确的是：', options: ['演绎推理前提真且形式有效时结论必真；归纳推理结论只具或然性', '两者都必然保真', '归纳推理必然保真', '演绎推理不要求有效性'], answer: 0, explain: '演绎保真（有效+前提真→结论必真），归纳（含类比）结论为概然支持。' }
    ], '这一章把"说理"拆成可检验的结构。',
      { t: '命题', h: '<ul><li>命题是可判断真假的陈述；简单命题与复合命题（联言、选言、假言、负命题）。</li><li>真值联结词：¬（非）、∧（且）、∨（或）、→（如果…那么…）。</li></ul>' },
      { t: '论证', h: '<ul><li>论证 = 前提 + 结论；评价标准：前提可接受性、推理有效性/支持度。</li><li>演绎（保真）与归纳（或然）；注意区分"真"与"有效"。</li></ul>' }),

    mk('第 2 章 · 直言命题与三段论：A/E/I/O 命题', '直言命题对当关系与三段论。', [
      { stem: '直言命题"所有 S 都是 P"属于哪种类型：', options: ['A 命题（全称肯定）', 'E 命题（全称否定）', 'I 命题（特称肯定）', 'O 命题（特称否定）'], answer: 0, explain: 'A：所有 S 是 P；E：所有 S 不是 P；I：有 S 是 P；O：有 S 不是 P。' },
      { stem: 'A 命题与 O 命题之间的对当关系是：', options: ['矛盾关系（不能同真、不能同假）', '反对关系', '下反对关系', '差等关系'], answer: 0, explain: '矛盾：A—O、E—I；反对：A—E（可同假）；下反对：I—O（可同真）；差等：A—I、E—O。' },
      { stem: '三段论中，在结论中不出现、只在两个前提中出现的项叫做：', options: ['中项', '大项', '小项', '谓项'], answer: 0, explain: '中项起媒介作用，必须至少周延一次；大项是结论的谓项，小项是结论的主项。' }
    ], '这一章是传统词项逻辑的核心。',
      { t: '直言命题', h: '<ul><li>四种：A（全称肯定）、E（全称否定）、I（特称肯定）、O（特称否定）。</li><li>周延性：全称主项周延，否定命题谓项周延；特称主项不周延，肯定谓项不周延。</li></ul>' },
      { t: '对当与三段论', h: '<ul><li>对当方阵：矛盾（A-O、E-I）、反对（A-E）、下反对（I-O）、差等（A-I、E-O）。</li><li>三段论规则：三项、中项至少周延一次、前提中不周延的项结论中不得周延等。</li></ul>' })
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['逻辑学导论'] = set(LIST);
  G.REAL_PAD_ALIAS['逻辑学'] = '逻辑学导论';
  G.REAL_PAD_ALIAS['普通逻辑学'] = '逻辑学导论';
  G.REAL_PAD_ALIAS['形式逻辑'] = '逻辑学导论';
})();
