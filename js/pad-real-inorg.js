/* ==========================================================
   pad-real-inorg.js · 无机化学：把补齐的占位关做成真题
   涉及章节：气体定律、化学热力学初步、分子结构与晶体
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_CHEMSOC = { name: '中国化学会', url: 'https://www.chemsoc.org.cn/' };
  var REF_NIST = { name: 'NIST Chemistry WebBook（物性数据）', url: 'https://webbook.nist.gov/chemistry/' };

  function mk(title, brief, q, lead, s1, s2, refs) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: refs || [REF_CHEMSOC]
      }
    };
  }

  var LIST = [
    mk('第 1 章 · 物质状态与气体定律：理想气体', '理想气体方程、摩尔体积与分压定律。', [
      { stem: '理想气体状态方程是：', options: ['pV = nRT', 'pV = nR/T', 'pT = nRV', 'p = V/nRT'], answer: 0, explain: 'p V = n R T，其中 R = 8.314 J·mol⁻¹·K⁻¹（注意单位配套）。' },
      { stem: '标准状况（0 ℃、101.325 kPa）下，1 mol 理想气体的体积约为：', options: ['22.4 L', '11.2 L', '24.5 L', '1 L'], answer: 0, explain: '由 pV = nRT 计算得约 22.4 L；25 ℃、101.325 kPa 下约为 24.5 L。' },
      { stem: '道尔顿分压定律的内容是：', options: ['混合气体的总压等于各组分气体分压之和', '总压等于最大组分的分压', '总压与组分无关', '分压之和小于总压'], answer: 0, explain: 'p总 = Σpi，且 pi = xi · p总，xi 为摩尔分数。' }
    ], '这一章把气体的宏观规律用方程表达出来。',
      { t: '气体定律', h: '<ul><li>理想气体方程 pV = nRT，注意温度必须用 K、R 与单位配套。</li><li>波义耳定律、查理定律、阿伏伽德罗定律都是它的特例。</li></ul>' },
      { t: '混合气体', h: '<ul><li>分压定律：p总 = Σpi，pi = xi p总。</li><li>实际气体在高压低温下偏离理想行为，可用范德华方程修正。</li></ul>' },
      [REF_NIST]),

    mk('第 2 章 · 化学热力学初步：热力学第一定律', '内能、焓与状态函数。', [
      { stem: '热力学第一定律的数学表达式（按 ΔU = Q + W 约定）说明：', options: ['能量守恒，内能变化等于系统吸热与环境对系统做功之和', '热量可以凭空产生', '做功不需要能量', '内能与热量无关'], answer: 0, explain: '本质是能量守恒；注意不同教材对 W 的正负号约定不同。' },
      { stem: '恒压且只做体积功时，反应热 Qp 与焓变的关系是：', options: ['Qp = ΔH', 'Qp = ΔU', 'Qp = ΔG', 'Qp = TΔS'], answer: 0, explain: '恒压过程的热量等于焓变；恒容过程的热量等于内能变（Qv = ΔU）。' },
      { stem: '下列各量中属于状态函数的是：', options: ['内能 U 与焓 H', '热量 Q', '功 W', '过程路径'], answer: 0, explain: 'U、H、S、G 等是状态函数，只与始末态有关；Q、W 与过程路径有关。' }
    ], '这一章把"反应放热多少"变成可计算的问题。',
      { t: '第一定律', h: '<ul><li>ΔU = Q + W，能量守恒的表达；注意符号约定。</li><li>焓 H = U + pV，恒压反应热 Qp = ΔH。</li></ul>' },
      { t: '状态函数与热化学', h: '<ul><li>状态函数：U、H、S、G；非状态函数：Q、W。</li><li>盖斯定律：反应热只与始末态有关，可代数相加。</li></ul>' },
      [REF_CHEMSOC]),

    mk('第 8 章 · 分子结构与晶体', '杂化轨道、分子间作用力与晶体类型。', [
      { stem: 'CH₄ 分子中碳原子采用的杂化方式是：', options: ['sp³ 杂化（正四面体）', 'sp 杂化', 'sp² 杂化', '不杂化'], answer: 0, explain: '四个等价的 sp³ 杂化轨道指向正四面体顶点，键角约 109°28′。' },
      { stem: 'H₂O 的沸点明显高于 H₂S，主要原因是：', options: ['水分子间存在氢键', '水的分子量更小', 'H₂S 是离子化合物', '水的密度更大'], answer: 0, explain: 'O 电负性大、半径小，可形成较强氢键；氢键强于普通范德华力。' },
      { stem: 'NaCl 晶体属于：', options: ['离子晶体', '原子晶体', '分子晶体', '金属晶体'], answer: 0, explain: '由 Na⁺ 与 Cl⁻ 通过离子键堆积而成，熔点较高、熔融可导电。' }
    ], '这一章解释"分子为什么长这样、晶体为什么有这些性质"。',
      { t: '分子结构', h: '<ul><li>杂化类型：sp（直线）、sp²（平面三角）、sp³（四面体）。</li><li>价层电子对互斥理论（VSEPR）判断构型；键的极性由电负性差决定。</li></ul>' },
      { t: '晶体', h: '<ul><li>四类：离子晶体、原子（共价）晶体、分子晶体、金属晶体。</li><li>分子间作用力：范德华力与氢键，氢键显著抬高沸点与熔点。</li></ul>' },
      [REF_CHEMSOC])
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['无机化学'] = set(LIST);
  G.REAL_PAD_ALIAS['无机化学（上）'] = '无机化学';
  G.REAL_PAD_ALIAS['无机化学（下）'] = '无机化学';
  G.REAL_PAD_ALIAS['普通化学'] = '无机化学';
})();
