/* ==========================================================
   pad-real-matmech.js · 材料力学：把补齐的占位关做成真题
   涉及章节：基本概念（内力与应力）、扭转与弯曲
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_IJSS = { name: 'International Journal of Solids and Structures', url: 'https://www.sciencedirect.com/journal/international-journal-of-solids-and-structures' };

  function mk(title, brief, q, lead, s1, s2) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: [REF_IJSS]
      }
    };
  }

  var LIST = [
    mk('第 1 章 · 基本概念：内力与应力', '截面法、应力与基本变形。', [
      { stem: '求杆件某一截面内力的基本方法是：', options: ['截面法（假想截开，取一部分，由平衡求内力）', '直接测量', '用能量法估算', '按体积计算'], answer: 0, explain: '截面法是材料力学求内力的通用方法，内力在该截面上成对出现、方向相反。' },
      { stem: '轴向拉压杆横截面上的正应力公式为：', options: ['σ = N / A', 'σ = N·A', 'σ = N / L', 'σ = M / W'], answer: 0, explain: 'N 为轴力、A 为横截面积；应力单位为 Pa，反映内力在截面上的分布集度。' },
      { stem: '杆件的基本变形形式通常有四种，不包括：', options: ['翘曲', '轴向拉压', '剪切', '扭转与弯曲'], answer: 0, explain: '四种基本变形为轴向拉压、剪切、扭转与弯曲；组合变形由它们叠加而成。' }
    ], '这一章建立强度、刚度、稳定性的分析起点。',
      { t: '内力与截面法', h: '<ul><li>内力分量：轴力 N、剪力 Q、扭矩 T、弯矩 M；用截面法求得。</li><li>内力图：轴力图、剪力图与弯矩图是强度计算的基础。</li></ul>' },
      { t: '应力与变形', h: '<ul><li>正应力 σ = N/A，切应力 τ；线应变 ε 与切应变 γ。</li><li>胡克定律 σ = Eε（各向同性、比例极限内）；四种基本变形。</li></ul>' }),

    mk('第 2 章 · 扭转与弯曲：扭转应力与变形', '圆轴扭转与梁弯曲正应力。', [
      { stem: '圆轴扭转时，横截面上距圆心 ρ 处的切应力：', options: ['与 ρ 成正比，圆心处为零、外缘最大', '处处相等', '与 ρ 成反比', '在圆心处最大'], answer: 0, explain: 'τ(ρ) = T·ρ / Iₚ，外缘最大 τ_max = T / Wₚ（Wₚ 为抗扭截面系数）。' },
      { stem: '等直圆轴扭转角的计算式为：', options: ['φ = T·L / (G·Iₚ)', 'φ = T·L / (E·I)', 'φ = T / (G·A)', 'φ = M·L / (E·I)'], answer: 0, explain: '扭转变形由剪切模量 G 与极惯性矩 Iₚ 决定；刚度条件常限制单位长度扭转角。' },
      { stem: '纯弯曲梁横截面上的正应力分布规律是：', options: ['沿截面高度线性分布，中性轴处为零、上下边缘最大', '均匀分布', '抛物线分布', '在中性轴处最大'], answer: 0, explain: 'σ = M·y / I z，中性轴处为零，最大值为 σ_max = M / W z（W 为抗弯截面系数）。' }
    ], '这一章是杆件强度计算的核心。',
      { t: '扭转', h: '<ul><li>τ(ρ) = Tρ/Iₚ；τ_max = T/Wₚ（实心圆轴 Wₚ = πd³/16）。</li><li>扭转角 φ = TL/(GIₚ)，反映抗扭刚度。</li></ul>' },
      { t: '弯曲', h: '<ul><li>正应力 σ = M·y/I z，沿高度线性分布，中性轴为零。</li><li>σ_max = M/W z；合理截面（工字形等）可提高抗弯效率。</li></ul>' })
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['材料力学'] = set(LIST);
  G.REAL_PAD_ALIAS['工程力学（材料力学部分）'] = '材料力学';
  G.REAL_PAD_ALIAS['材料力学基础'] = '材料力学';
})();
