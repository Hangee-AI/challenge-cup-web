/* ==========================================================
   pad-real-thmech.js · 理论力学：把补齐的占位关做成真题
   涉及章节：静力学（受力分析）、运动学（点的运动与刚体基本运动）
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
    mk('第 1 章 · 静力学：受力分析', '约束、受力图与平衡条件。', [
      { stem: '光滑接触面对物体的约束力方向是：', options: ['沿接触面公法线并指向被约束物体', '沿接触面切线方向', '任意方向', '竖直向上'], answer: 0, explain: '光滑面约束只能提供压力（法向、指向物体）；柔索约束只能沿绳方向提供拉力。' },
      { stem: '只受两个力作用而平衡的构件称为二力杆，其两个力的作用线：', options: ['必沿两作用点的连线且等值反向', '可以任意方向', '必须互相垂直', '必须共点但不等值'], answer: 0, explain: '二力平衡条件：两力等值、反向、共线，与构件形状无关。' },
      { stem: '画受力图时的正确做法是：', options: ['先取分离体，再画主动力与约束反力，不画内力', '把所有外力内力都画上', '只画主动力', '不画约束反力'], answer: 0, explain: '分离体与受力图是力学计算的前提，内力在分离后不出现在受力图上。' }
    ], '这一章是所有力学计算的起点。',
      { t: '约束与约束力', h: '<ul><li>柔索（沿绳拉力）、光滑面（法向压力）、铰链（两个正交分力）、固定端（力 + 力偶）。</li><li>约束力方向由约束性质决定，与主动力无关。</li></ul>' },
      { t: '受力分析', h: '<ul><li>步骤：取分离体 → 画主动力 → 按约束性质画约束反力。</li><li>二力杆与三力平衡汇交定理（三力平衡且不平则必汇交于一点）。</li></ul>' }),

    mk('第 2 章 · 运动学：点的运动与刚体基本运动', '自然法描述与定轴转动。', [
      { stem: '用自然法描述点的运动时，法向加速度的大小为：', options: ['aₙ = v²/ρ（指向曲率中心）', 'aₙ = dv/dt', 'aₙ = 0', 'aₙ = v·ρ'], answer: 0, explain: '切向加速度 aτ = dv/dt 反映速度大小变化，法向加速度 an = v²/ρ 反映速度方向变化。' },
      { stem: '刚体作定轴转动时，距轴 r 处点的速度与角速度关系是：', options: ['v = ω·r', 'v = ω/r', 'v = ω²·r', 'v = ω·r²'], answer: 0, explain: '线量与角量关系：v = ωr，切向加速度 aτ = αr，法向加速度 an = ω²r。' },
      { stem: '刚体平动的特征是：', options: ['刚体内各点的轨迹、速度与加速度完全相同（可视为质点）', '各点速度不同', '必有转动', '只发生在绕定点转动时'], answer: 0, explain: '平动时刚体上任一直线始终保持平行；直线平动与曲线平动都可简化为质点问题。' }
    ], '这一章只研究运动本身，不问原因。',
      { t: '点的运动', h: '<ul><li>描述方法：矢量法、直角坐标法与自然法（切向 + 法向）。</li><li>aτ = dv/dt（改变快慢），an = v²/ρ（改变方向）。</li></ul>' },
      { t: '刚体基本运动', h: '<ul><li>平动：各点运动状态相同，可当质点处理。</li><li>定轴转动：ω = dφ/dt、α = dω/dt；v = ωr、aτ = αr、an = ω²r。</li></ul>' })
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['理论力学'] = set(LIST);
  G.REAL_PAD_ALIAS['工程力学（理论力学部分）'] = '理论力学';
  G.REAL_PAD_ALIAS['经典力学'] = '理论力学';
})();
