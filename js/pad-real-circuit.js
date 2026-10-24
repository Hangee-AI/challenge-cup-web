/* ==========================================================
   pad-real-circuit.js · 电路分析基础：把补齐的占位关做成真题
   涉及章节：电路模型与定律、电阻电路分析
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_IEEE = { name: 'IEEE Xplore（电路与系统）', url: 'https://ieeexplore.ieee.org/' };
  var REF_AOFE = { name: 'All About Circuits（电路教程）', url: 'https://www.allaboutcircuits.com/' };

  function mk(title, brief, q, lead, s1, s2, refs) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: refs || [REF_AOFE]
      }
    };
  }

  var LIST = [
    mk('第 1 章 · 电路模型与定律：元件模型', '理想元件、参考方向与两大定律。', [
      { stem: '基尔霍夫电流定律（KCL）的依据是：', options: ['电荷守恒与电流连续性，节点处电流的代数和为零', '能量守恒', '欧姆定律', '电磁感应'], answer: 0, explain: 'KCL 体现节点处不能有电荷积累；KVL 则体现能量守恒（回路电压代数和为零）。' },
      { stem: '关于参考方向，下列说法正确的是：', options: ['参考方向是人为假定的方向，计算结果为负说明实际方向相反', '参考方向必须与实际方向一致', '参考方向不可改变', '参考方向只用于电压'], answer: 0, explain: '先任意指定参考方向再列方程，结果为正即与假定一致，为负则相反。' },
      { stem: '若元件电压与电流取关联参考方向，且 u = 10 V、i = 2 A，则该元件：', options: ['吸收 20 W 功率', '发出 20 W 功率', '吸收 5 W 功率', '不消耗功率'], answer: 0, explain: '关联方向下 p = ui，p &gt; 0 表示吸收功率（负载），p &lt; 0 表示发出功率（电源）。' }
    ], '这一章把实际电路抽象成可计算的模型。',
      { t: '元件与模型', h: '<ul><li>理想元件：电阻 R（u = Ri）、理想电压源、理想电流源；受控源。</li><li>参考方向：电压与电流取关联方向时 p = ui，p&gt;0 吸收、p&lt;0 发出。</li></ul>' },
      { t: '两大定律', h: '<ul><li>KCL：任一节点电流的代数和为零（广义可推广到闭合面）。</li><li>KVL：任一回路电压的代数和为零。</li></ul>' },
      [REF_AOFE]),

    mk('第 2 章 · 电阻电路分析：支路电流法', '系统分析法与常用定理。', [
      { stem: '用支路电流法分析含 b 条支路、n 个节点的电路时，方程个数为：', options: ['b 个（n − 1 个 KCL 加 b − n + 1 个 KVL）', 'n 个', 'b − 1 个', '任意个'], answer: 0, explain: '以 b 个支路电流为未知量，列 n−1 个独立 KCL 与 b−n+1 个独立 KVL 方程，共 b 个。' },
      { stem: '叠加定理适用于：', options: ['线性电路中电压与电流的计算，但不适用于功率', '任意非线性电路', '所有功率计算', '只适用于交流电路'], answer: 0, explain: '线性电路中各独立源可分别作用再叠加；因功率与电流平方成正比，功率不能直接叠加。' },
      { stem: '求含源二端网络对外等效最简单常用的方法是：', options: ['戴维南等效（等效电压源串联电阻）与诺顿等效', '只用电荷守恒', '只用支路电流法', '直接删除电源'], answer: 0, explain: '戴维南电压为开路电压，等效内阻为独立源置零后从端口看进去的电阻。' }
    ], '这一章给出解电路的通用套路。',
      { t: '系统方法', h: '<ul><li>支路电流法：b 个未知量，n−1 个 KCL + b−n+1 个 KVL。</li><li>节点电压法以节点电压为未知量，独立节点数通常为 n−1。</li></ul>' },
      { t: '常用定理', h: '<ul><li>叠加定理（仅线性量，功率不可叠加）、戴维南与诺顿等效、最大功率传输（负载等于等效内阻）。</li><li>等效变换：电阻串并联、电源等效变换（实际电压源与实际电流源互换）。</li></ul>' },
      [REF_IEEE])
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['电路分析基础'] = set(LIST);
  G.REAL_PAD_ALIAS['电路分析'] = '电路分析基础';
  G.REAL_PAD_ALIAS['电路基础'] = '电路分析基础';
  G.REAL_PAD_ALIAS['电工学'] = '电路分析基础';
})();
