/* ==========================================================
   pad-real-anal1.js · 数学分析（一）：把补齐的占位关做成真题
   涉及章节：实数与数列极限、函数极限与连续
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_MATHWORLD = { name: 'Wolfram MathWorld', url: 'https://mathworld.wolfram.com/' };
  var REF_AMS = { name: 'American Mathematical Society（AMS）', url: 'https://www.ams.org/' };

  function mk(title, brief, q, lead, s1, s2, refs) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: refs || [REF_AMS]
      }
    };
  }

  var LIST = [
    mk('第 1 章 · 实数与数列极限：确界原理', '实数完备性与极限定义。', [
      { stem: '确界原理的内容是：', options: ['任一非空有上界的数集必有上确界（最小上界）', '任一数集都有最大值', '有界集一定闭', '无界集也有上确界'], answer: 0, explain: '确界原理是实数完备性的等价形式之一，上确界可能不属于该集合（如 (0,1) 的上确界为 1）。' },
      { stem: '数列 {aₙ} 的极限为 A 的 ε—N 定义是：', options: ['对任意 ε>0，存在 N，当 n>N 时 |aₙ − A| < ε', '存在 ε>0，对任意 N 都有 |aₙ − A| < ε', '只要 aₙ 有界即可', '只要 aₙ 单调即可'], answer: 0, explain: 'ε 任意给定、N 随之确定；体现了"最终任意接近"的思想。' },
      { stem: '单调有界定理说明：', options: ['单调递增且有上界的数列必收敛（其极限为上确界）', '单调数列一定收敛', '有界数列一定收敛', '收敛数列一定单调'], answer: 0, explain: '单调递减有下界同理收敛；仅有界不足以保证收敛（如 (−1)ⁿ）。' }
    ], '这一章用极限的语言把"无限"说清楚。',
      { t: '实数完备性', h: '<ul><li>确界原理：非空有上界的数集必有上确界。</li><li>等价表述还有单调有界定理、闭区间套定理、柯西收敛准则等。</li></ul>' },
      { t: '数列极限', h: '<ul><li>ε—N 定义：∀ε>0，∃N，n>N 时 |aₙ − A|&lt;ε。</li><li>收敛 ⇒ 有界；单调有界 ⇒ 收敛（但要注意方向：递增看上界、递减看下界）。</li></ul>' },
      [REF_MATHWORLD]),

    mk('第 2 章 · 函数极限与连续：函数极限', '极限定义、连续与闭区间性质。', [
      { stem: '当 x → a 时 f(x) 的极限为 L 的 ε—δ 定义是：', options: ['∀ε>0，∃δ>0，当 0<|x − a|<δ 时 |f(x) − L|<ε', '∀δ>0，∃ε>0 使 |f(x) − L|<ε', '只需 f(a) 有定义', '只需左右极限存在'], answer: 0, explain: '注意 0<|x−a|：极限与 f 在 a 点是否有定义、取什么值无关。' },
      { stem: '函数 f 在 x₀ 处连续的定义是：', options: ['lim(x→x₀) f(x) = f(x₀)（即极限存在且等于函数值）', 'f 在 x₀ 有定义即可', 'f 在该点可导', 'f 在该点有界'], answer: 0, explain: '连续需同时满足：有定义、极限存在、两者相等；可导必连续但连续不一定可导。' },
      { stem: '闭区间上连续函数不一定具有的性质是：', options: ['可导性', '有界性', '最大值与最小值存在', '介值性'], answer: 0, explain: '闭区间连续必有界、能取到最大最小值并具介值性；连续不保证可导（如 |x| 在 0 处）。' }
    ], '这一章把极限从数列推广到函数。',
      { t: '函数极限', h: '<ul><li>ε—δ 定义；左、右极限存在且相等 ⇔ 极限存在。</li><li>海涅定理把函数极限与数列极限联系起来。</li></ul>' },
      { t: '连续性', h: '<ul><li>连续定义：lim f(x) = f(x₀)；初等函数在其定义区间内连续。</li><li>闭区间上连续函数的性质：有界性、最值定理、介值定理（零点定理）。</li></ul>' },
      [REF_MATHWORLD])
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['数学分析（一）'] = set(LIST);
  G.REAL_PAD_ALIAS['数学分析'] = '数学分析（一）';
  G.REAL_PAD_ALIAS['数学分析(一)'] = '数学分析（一）';
  G.REAL_PAD_ALIAS['数学分析上'] = '数学分析（一）';
})();
