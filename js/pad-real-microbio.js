/* ==========================================================
   pad-real-microbio.js · 微生物学：把补齐的占位关做成真题
   涉及章节：微生物的形态（原核微生物）、营养与代谢
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_NCBI = { name: 'NCBI（微生物与基因组资源）', url: 'https://www.ncbi.nlm.nih.gov/' };
  var REF_ASM = { name: 'American Society for Microbiology（ASM）', url: 'https://asm.org/' };

  function mk(title, brief, q, lead, s1, s2, refs) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: refs || [REF_ASM]
      }
    };
  }

  var LIST = [
    mk('第 1 章 · 微生物的形态：原核微生物', '细菌形态结构与革兰氏染色。', [
      { stem: '细菌的基本形态通常分为：', options: ['球菌、杆菌、螺旋菌（含弧菌）', '线状、片状、块状', '圆形、方形、三角形', '单细胞、多细胞与病毒'], answer: 0, explain: '形态是细菌分类与初步鉴定的重要依据。' },
      { stem: '革兰氏阳性菌与阴性菌的关键差异在于：', options: ['细胞壁结构（阳性菌肽聚糖层厚、无外膜；阴性菌有外膜且肽聚糖层薄）', '有无细胞核', '有无核糖体', '是否能运动'], answer: 0, explain: '染色差异源于细胞壁结构：阳性菌保留结晶紫呈紫色，阴性菌呈红色。' },
      { stem: '下列结构中，与细菌运动相关的是：', options: ['鞭毛', '荚膜', '质粒', '核糖体'], answer: 0, explain: '鞭毛负责运动，荚膜多与黏附和抗吞噬有关，质粒携带附加基因（如耐药基因）。' }
    ], '这一章认识微生物长什么样、怎么区分。',
      { t: '细菌形态', h: '<ul><li>基本形态：球菌、杆菌、螺旋菌（弧菌）；排列方式也有鉴别价值。</li><li>基本结构：细胞壁、细胞膜、细胞质、核区；特殊结构：荚膜、鞭毛、菌毛、芽孢。</li></ul>' },
      { t: '革兰氏染色', h: '<ul><li>阳性菌：肽聚糖层厚、无外膜，染成紫色。</li><li>阴性菌：有外膜（含脂多糖），肽聚糖层薄，呈红色；外膜影响对抗生素的敏感性。</li></ul>' },
      [REF_ASM]),

    mk('第 2 章 · 微生物的营养与代谢：营养类型', '营养类型划分与生长规律。', [
      { stem: '划分微生物营养类型通常依据：', options: ['能源（光能/化能）与碳源（自养/异养）的组合', '细胞大小', '是否能运动', '有无细胞壁'], answer: 0, explain: '常见四类：光能自养、光能异养、化能自养、化能异养（多数病原菌属于化能异养）。' },
      { stem: '关于培养基，下列说法正确的是：', options: ['按用途可分为基础、选择、鉴别与加富培养基', '所有微生物都能用同一种培养基', '培养基无需灭菌', '培养基只含碳源'], answer: 0, explain: '培养基需满足碳源、氮源、无机盐、生长因子与水，并按需要调节 pH 与灭菌。' },
      { stem: '典型细菌生长曲线的分期依次是：', options: ['延滞期 → 对数期 → 稳定期 → 衰亡期', '衰亡期 → 对数期 → 稳定期 → 延滞期', '稳定期 → 延滞期 → 对数期 → 衰亡期', '对数期 → 延滞期 → 衰亡期 → 稳定期'], answer: 0, explain: '对数期菌体代谢活跃、常用于生理研究；稳定期常积累次级代谢产物（如抗生素）。' }
    ], '这一章讲微生物怎么"吃饭、长大"。',
      { t: '营养类型', h: '<ul><li>按能源：光能型、化能型；按碳源：自养（CO₂）、异养（有机物）。</li><li>培养基要素：碳源、氮源、无机盐、生长因子、水与适宜 pH。</li></ul>' },
      { t: '生长规律', h: '<ul><li>生长曲线四期：延滞期、对数期、稳定期、衰亡期。</li><li>测定方法：显微计数、平板菌落计数与比浊法。</li></ul>' },
      [REF_NCBI])
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['微生物学'] = set(LIST);
  G.REAL_PAD_ALIAS['微生物学基础'] = '微生物学';
  G.REAL_PAD_ALIAS['医学微生物学'] = '微生物学';
  G.REAL_PAD_ALIAS['基础微生物学'] = '微生物学';
})();
