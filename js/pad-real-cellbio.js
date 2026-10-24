/* ==========================================================
   pad-real-cellbio.js · 细胞生物学：把补齐的占位关做成真题
   涉及章节：细胞的结构（生物膜与细胞器）、物质运输与信号
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_NCBI = { name: 'NCBI Bookshelf（分子细胞生物学）', url: 'https://www.ncbi.nlm.nih.gov/books/' };
  var REF_ASCB = { name: 'ASCB（美国细胞生物学会）', url: 'https://www.ascb.org/' };

  function mk(title, brief, q, lead, s1, s2, refs) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: refs || [REF_ASCB]
      }
    };
  }

  var LIST = [
    mk('第 1 章 · 细胞的结构：生物膜与细胞器', '膜模型与细胞器功能。', [
      { stem: '描述生物膜结构的主流模型是：', options: ['流动镶嵌模型（磷脂双分子层为骨架，蛋白质镶嵌其中）', '三层结构模型', '刚性片层模型', '脂单层模型'], answer: 0, explain: '膜具有流动性（脂质与蛋白可侧向扩散）与不对称性，是选择透过性的结构基础。' },
      { stem: '下列细胞器中，被称为细胞"动力工厂"、负责氧化磷酸化产生 ATP 的是：', options: ['线粒体', '高尔基体', '溶酶体', '核糖体'], answer: 0, explain: '线粒体具双层膜与自身 DNA；高尔基体负责加工分选，溶酶体负责降解。' },
      { stem: '真核细胞中合成蛋白质的主要场所是：', options: ['核糖体（游离或附着于粗面内质网）', '细胞核', '中心体', '过氧化物酶体'], answer: 0, explain: '分泌蛋白与膜蛋白在粗面内质网上合成，经高尔基体加工分选后运往目的地。' }
    ], '这一章讲细胞这座"工厂"的结构分工。',
      { t: '生物膜', h: '<ul><li>流动镶嵌模型：磷脂双分子层 + 镶嵌蛋白；具流动性、不对称性与选择透过性。</li><li>膜蛋白分整合蛋白、外周蛋白与脂锚定蛋白。</li></ul>' },
      { t: '细胞器', h: '<ul><li>线粒体（ATP）、内质网（蛋白与脂质合成）、高尔基体（加工分选）、溶酶体（降解）、核糖体（蛋白合成）。</li><li>细胞骨架：微管、微丝与中间纤维，维持形态并参与运输与运动。</li></ul>' },
      [REF_NCBI]),

    mk('第 2 章 · 物质运输与信号：跨膜运输', '被动与主动运输、胞吞胞吐。', [
      { stem: '下列运输方式中，需要消耗 ATP 的是：', options: ['Na⁺—K⁺ 泵介导的主动运输', '自由扩散', '经通道的协助扩散', '渗透作用'], answer: 0, explain: '主动运输可逆浓度梯度进行并需能量；被动运输（自由扩散、协助扩散）顺浓度梯度、不耗能。' },
      { stem: '关于协助扩散，正确的是：', options: ['需载体蛋白或通道蛋白，顺浓度梯度且不耗能', '逆浓度梯度进行', '需要 ATP', '只在动物细胞中存在'], answer: 0, explain: '协助扩散提高极性分子与离子的通透速率，具饱和性与特异性。' },
      { stem: '细胞摄入大分子颗粒（如吞噬细菌）的方式是：', options: ['胞吞作用（吞噬/胞饮），属于膜泡运输', '自由扩散', '协助扩散', '主动运输中的离子泵'], answer: 0, explain: '大分子与颗粒通过膜泡运输进出细胞（胞吞与胞吐），需膜流动与细胞骨架参与。' }
    ], '这一章讲物质怎么进出细胞、信号怎么传进来。',
      { t: '跨膜运输', h: '<ul><li>被动：自由扩散（顺浓度、不需蛋白）与协助扩散（需通道/载体，不耗能）。</li><li>主动：原发性（如 Na⁺—K⁺ 泵耗 ATP）与继发性（协同转运）。</li></ul>' },
      { t: '膜泡运输与信号', h: '<ul><li>胞吞（吞噬、胞饮、受体介导）与胞吐，用于大分子与颗粒。</li><li>信号转导：受体 → 第二信使（cAMP、Ca²⁺、IP₃）→ 蛋白激酶级联 → 细胞响应。</li></ul>' },
      [REF_ASCB])
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['细胞生物学'] = set(LIST);
  G.REAL_PAD_ALIAS['细胞生物学基础'] = '细胞生物学';
  G.REAL_PAD_ALIAS['医学细胞生物学'] = '细胞生物学';
})();
