/* ==========================================================
   pad-real-engmech.js · 工程力学：把补齐的占位关做成真题
   涉及章节：静力学基础（力与力偶）、力系平衡
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
    mk('第 1 章 · 静力学基础：力与力偶', '力的性质与力偶特征。', [
      { stem: '力的三要素是指：', options: ['大小、方向、作用点', '大小、方向、作用时间', '大小、速度、方向', '质量、加速度、方向'], answer: 0, explain: '对刚体而言，力是滑动矢量，可沿作用线滑移而不改变效应（力的可传性）。' },
      { stem: '关于力偶，下列说法正确的是：', options: ['力偶没有合力，力偶矩与矩心位置无关', '力偶可以用一个力平衡', '力偶矩随矩心改变', '力偶有合力'], answer: 0, explain: '力偶由两个等值反向不共线的平行力组成，只能由另一力偶平衡；力偶矩 M = F·d。' },
      { stem: '平面问题中，力对点之矩的大小等于：', options: ['力的大小与力臂的乘积', '力乘以力臂的平方', '力除以力臂', '力与力臂之和'], answer: 0, explain: 'M = F·d，d 为矩心到力作用线的垂直距离；正负号按转向约定。' }
    ], '这一章认识力、力矩与力偶。',
      { t: '力', h: '<ul><li>三要素：大小、方向、作用点；刚体上力为滑动矢量（可传性）。</li><li>力矩 M = F·d，是力使物体绕某点转动效应的度量。</li></ul>' },
      { t: '力偶', h: '<ul><li>力偶无合力，不能与单个力平衡，只能由力偶平衡。</li><li>力偶矩 M = F·d，与矩心无关；同平面内力偶可代数相加。</li></ul>' }),

    mk('第 2 章 · 力系平衡：平面力系平衡方程', '各类力系的平衡方程。', [
      { stem: '平面任意力系的独立平衡方程个数为：', options: ['3 个（两个投影方程加一个力矩方程）', '2 个', '1 个', '6 个'], answer: 0, explain: '平面任意力系可列 ΣFx = 0、ΣFy = 0、ΣM = 0（也可用二矩式或三矩式，但独立方程只有 3 个）。' },
      { stem: '平面汇交力系的独立平衡方程个数是：', options: ['2 个', '3 个', '1 个', '4 个'], answer: 0, explain: '所有力汇交于一点，对汇交点的力矩恒为零，故只剩两个投影方程。' },
      { stem: '平面平行力系的独立平衡方程可写成：', options: ['一个投影方程加一个力矩方程', '两个投影方程', '三个投影方程', '只有一个力矩方程'], answer: 0, explain: '各力平行时，垂直于力方向的投影方程自动满足，故为一个投影式加一个力矩式。' }
    ], '这一章用平衡方程求解未知力。',
      { t: '平衡条件', h: '<ul><li>平面任意力系：ΣFx = 0、ΣFy = 0、ΣM = 0，独立方程 3 个。</li><li>特殊情形：汇交力系 2 个、平行力系 2 个、力偶系 1 个。</li></ul>' },
      { t: '求解要点', h: '<ul><li>先画受力图，再选合适的坐标轴与取矩点（尽量使方程只含一个未知量）。</li><li>方程数等于独立未知量数时为静定问题；未知量更多则为超静定。</li></ul>' })
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['工程力学'] = set(LIST);
  G.REAL_PAD_ALIAS['工程力学基础'] = '工程力学';
  G.REAL_PAD_ALIAS['应用力学'] = '工程力学';
})();
