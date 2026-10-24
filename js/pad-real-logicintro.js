/* ==========================================================
   pad-real-logicintro.js · 把补齐的占位关做成真题
   逻辑学导论（覆盖 2 个专业 / 4 个占位关）
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_SEP = { name: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/' };
  var REF_IEP = { name: 'Internet Encyclopedia of Philosophy', url: 'https://iep.utm.edu/' };

  function mk(title, brief, q, lead, s1, s2, refs) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: refs || [REF_IEP]
      }
    };
  }

  var LIST = [
    mk('第 1 章 · 逻辑与语言：命题与论证', '命题、论证与演绎归纳。', [
      { stem: '下列语句中属于"命题"（可判断真假）的是：', options: ['北京是中国的首都', '请把门关上', '今天天气真好啊！', '你是学生吗？'], answer: 0, explain: '命题是有真假之分的陈述句；祈使句、感叹句与疑问句一般不表达命题。' },
      { stem: '关于"有效"与"可靠"，下列说法正确的是：', options: ['有效指前提为真则结论不可能为假（形式性质）；可靠 = 有效且前提实际为真', '有效即结论一定为真', '有效即前提一定为真', '可靠只要求结论真'], answer: 0, explain: '一个论证可以前提假却仍然有效；可靠性才保证结论为真。' },
      { stem: '演绎论证与归纳论证的主要区别是：', options: ['演绎中前提为结论提供必然支持，归纳只提供或然支持', '演绎一定更简短', '归纳没有前提', '二者没有区别'], answer: 0, explain: '演绎看有效性（必然性），归纳看强度（概率性），如枚举归纳与类比论证。' }
    ], '这一章区分"说了什么"与"怎么推理"。',
      { t: '命题与论证', h: '<ul><li>命题：可判断真假的陈述句；论证 = 前提 + 结论，常用指示词（因为/所以）识别。</li><li>演绎（必然性支持，看有效性）与归纳（或然性支持，看强度）。</li></ul>' },
      { t: '评价论证', h: '<ul><li>有效性：前提真则结论不可能假；可靠性 = 有效 + 前提真。</li><li>注意：有效不等于结论真；前提假但形式有效的论证仍然有效。</li></ul>' },
      [REF_IEP]),

    mk('第 2 章 · 直言命题与三段论：A/E/I/O 命题', '直言命题与三段论。', [
      { stem: '"有些天鹅不是白色的"属于哪种直言命题：', options: ['O 命题（特称否定）', 'A 命题（全称肯定）', 'E 命题（全称否定）', 'I 命题（特称肯定）'], answer: 0, explain: 'A 全称肯定、E 全称否定、I 特称肯定、O 特称否定。' },
      { stem: '在 A/E/I/O 对当关系中，A 与 O 的关系是：', options: ['矛盾关系（不可同真亦不可同假）', '反对关系（可同假不可同真）', '下反对关系（可同真不可同假）', '差等关系'], answer: 0, explain: '矛盾：A—O、E—I；反对：A—E；下反对：I—O；差等（蕴涵）：A—I、E—O。' },
      { stem: '关于直言命题的周延性，下列说法正确的是：', options: ['全称命题主项周延，否定命题谓项周延', '所有主项都周延', '所有谓项都不周延', '周延性与量无关'], answer: 0, explain: '故 A 主项周延谓项不周延；E 主谓均周延；I 主谓均不周延；O 主项不周延、谓项周延。' }
    ], '这一章学习亚里士多德的古典逻辑。',
      { t: 'A/E/I/O', h: '<ul><li>四种命题：A（所有 S 是 P）、E（所有 S 不是 P）、I（有些 S 是 P）、O（有些 S 不是 P）。</li><li>对当关系：矛盾（A—O、E—I）、反对（A—E）、下反对（I—O）、差等（A—I、E—O）。</li></ul>' },
      { t: '三段论', h: '<ul><li>结构：大项 P、小项 S、中项 M；两个前提各含中项一次。</li><li>规则：中项至少周延一次；前提中不周延的项在结论中不得周延；两否定前提无结论；有一否定前提则结论否定。</li></ul>' },
      [REF_SEP])
  ];

  var byName = {};
  LIST.forEach(function (it) { byName[it.title] = it; });
  G.REAL_PAD['逻辑学导论'] = { list: LIST, byName: byName };
  G.REAL_PAD_ALIAS['逻辑学'] = '逻辑学导论';
  G.REAL_PAD_ALIAS['普通逻辑'] = '逻辑学导论';
  G.REAL_PAD_ALIAS['形式逻辑'] = '逻辑学导论';
})();
