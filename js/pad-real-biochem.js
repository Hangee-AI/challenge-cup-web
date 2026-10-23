/* ==========================================================
   pad-real-biochem.js · 生物化学：把补齐的占位关做成真题
   涉及章节：蛋白质（氨基酸与肽）、氨基酸与核苷酸代谢、遗传信息传递
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_NCBI = { name: 'NCBI Bookshelf（生物化学开放教材）', url: 'https://www.ncbi.nlm.nih.gov/books/' };
  var REF_PDB = { name: 'RCSB Protein Data Bank', url: 'https://www.rcsb.org/' };

  function mk(title, brief, q, lead, s1, s2, refs) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: refs || [REF_NCBI]
      }
    };
  }

  var LIST = [
    mk('第 1 章 · 蛋白质：氨基酸与肽', '氨基酸的结构、性质与肽键。', [
      { stem: '组成天然蛋白质的基本氨基酸通常有：', options: ['20 种', '4 种', '64 种', '8 种'], answer: 0, explain: '常见标准氨基酸为 20 种（另有硒半胱氨酸、吡咯赖氨酸等特殊情形）。' },
      { stem: '中性水溶液中氨基酸的主要存在形式是：', options: ['两性离子（兼性离子）', '完全不带电荷的分子', '仅正离子', '仅负离子'], answer: 0, explain: '氨基质子化带正电、羧基去质子化带负电，整体以两性离子形式存在。' },
      { stem: '肽键的本质是：', options: ['一个氨基酸的 α-羧基与另一氨基酸的 α-氨基脱水形成的酰胺键', '两个氨基酸之间的氢键', '二硫键', '糖苷键'], answer: 0, explain: '肽键是酰胺键，具有部分双键性质，因此肽平面不能自由旋转。' }
    ], '这一章从氨基酸讲到肽，是理解蛋白质结构的基础。',
      { t: '氨基酸', h: '<ul><li>20 种标准氨基酸，按侧链可分为非极性、极性不带电、酸性、碱性等。</li><li>两性电离与等电点 pI：pI 时净电荷为零，溶解度最小。</li></ul>' },
      { t: '肽与肽键', h: '<ul><li>肽键 = 酰胺键，具部分双键性质，形成刚性的肽平面。</li><li>主链方向为 N 端 → C 端；二硫键、氢键等维持高级结构。</li></ul>' },
      [REF_PDB]),

    mk('第 8 章 · 氨基酸与核苷酸代谢', '脱氨基、尿素循环与核苷酸代谢。', [
      { stem: '体内氨基酸脱氨基的主要方式是：', options: ['联合脱氨基（转氨基 + 谷氨酸氧化脱氨）', '直接氧化脱氨', '水解脱氨', '脱羧作用'], answer: 0, explain: '多数组织通过转氨基把氨基集中到谷氨酸，再由谷氨酸脱氢酶氧化脱氨。' },
      { stem: '尿素合成（鸟氨酸循环）主要发生在：', options: ['肝脏（线粒体与胞质协同）', '肌肉', '红细胞', '肾脏'], answer: 0, explain: '尿素循环的前两步在线粒体，后续在胞质，主要在肝细胞完成。' },
      { stem: '人体嘌呤核苷酸分解代谢的终产物是：', options: ['尿酸', '尿素', '氨', '肌酐'], answer: 0, explain: '人类缺乏尿酸酶，嘌呤最终氧化为尿酸；尿酸过高可致痛风。' }
    ], '这一章解决"氨基酸与核苷酸怎么合成、怎么分解"。',
      { t: '氨基酸代谢', h: '<ul><li>联合脱氨基：转氨酶 + 谷氨酸脱氢酶，是最主要的脱氨方式。</li><li>氨的解毒：肝中经鸟氨酸循环合成尿素排出。</li></ul>' },
      { t: '核苷酸代谢', h: '<ul><li>嘌呤从头合成以 PRPP 为起点，先合成 IMP 再分支为 AMP/GMP。</li><li>嘧啶合成先形成乳清酸再接 PRPP；嘌呤分解终产物为尿酸。</li></ul>' },
      [REF_NCBI]),

    mk('第 9 章 · 遗传信息传递', '中心法则、复制与翻译。', [
      { stem: '中心法则描述的信息流向是：', options: ['DNA → RNA → 蛋白质', '蛋白质 → RNA → DNA', 'RNA → DNA → 蛋白质', 'DNA → 蛋白质 → RNA'], answer: 0, explain: '经典中心法则为 DNA 复制、转录成 RNA、再翻译成蛋白质（逆转录是补充）。' },
      { stem: '关于 DNA 复制，下列说法正确的是：', options: ['半保留复制，且一条新链为不连续合成的冈崎片段', '两条新链都完全连续', '全保留复制', '不需要引物'], answer: 0, explain: '复制叉上前导链连续、滞后链以冈崎片段不连续合成，需 RNA 引物。' },
      { stem: '关于遗传密码，下列说法错误的是：', options: ['每个密码子都能编码多种氨基酸', '密码子具有简并性', 'AUG 常为起始密码子', '密码子在生物界基本通用'], answer: 0, explain: '简并性是指多个密码子对应同一种氨基酸；一个密码子只对应一种氨基酸（或终止）。' }
    ], '这一章把 DNA、RNA 与蛋白质串成一条信息流。',
      { t: '复制与转录', h: '<ul><li>DNA 半保留复制：解旋 → 引物 → 5′→3′ 延伸 → 连接冈崎片段。</li><li>转录以 DNA 一条链为模板，由 RNA 聚合酶合成 5′→3′ 的 RNA。</li></ul>' },
      { t: '翻译', h: '<ul><li>三联体密码：64 个密码子，61 个编码氨基酸 + 3 个终止信号。</li><li>简并性、通用性、方向性；AUG 编码甲硫氨酸并常作起始。</li></ul>' },
      [REF_NCBI])
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['生物化学'] = set(LIST);
  G.REAL_PAD_ALIAS['生物化学（上）'] = '生物化学';
  G.REAL_PAD_ALIAS['生物化学（下）'] = '生物化学';
  G.REAL_PAD_ALIAS['基础生物化学'] = '生物化学';
})();
