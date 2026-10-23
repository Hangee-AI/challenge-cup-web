/* ==========================================================
   pad-real-math.js · 高等数学（工科）/ 高等数学：把补齐的占位关做成真题
   教材《高等数学（第七版）》（同济大学）：第 8/9/10 章
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_MOE = { name: '高等教育出版社 · 高等数学（同济）课程资源', url: 'http://www.hep.com.cn/' };

  function mk(title, brief, q, lead, s1, s2) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: [REF_MOE]
      }
    };
  }

  var LIST = [
    mk('第 8 章 · 空间解析几何与向量代数', '向量的点积与叉积、平面与直线方程。', [
      { stem: '设向量 a = (1, 2, -1)，b = (2, -1, 0)，则 a · b 等于：', options: ['0', '1', '2', '-1'], answer: 0, explain: 'a·b = 1×2 + 2×(-1) + (-1)×0 = 0，说明两向量垂直。' },
      { stem: '平面 x + 2y - z = 3 的一个法向量是：', options: ['(1, 2, -1)', '(1, 2, 1)', '(3, 0, 0)', '(0, 0, 3)'], answer: 0, explain: '平面 Ax + By + Cz = D 的法向量就是系数 (A, B, C)。' },
      { stem: '关于向量积 a × b，下列说法正确的是：', options: ['结果仍是向量，且同时垂直于 a 与 b', '结果是标量', '结果与 a 同向', '结果等于 a · b'], answer: 0, explain: '叉积结果是向量，方向由右手定则确定，模为 |a||b|sinθ。' }
    ], '这一章把空间中的点、线、面用代数表达。',
      { t: '向量运算', h: '<ul><li>数量积 a·b = |a||b|cosθ，用于求夹角与判断垂直。</li><li>向量积 a×b 是向量，模为 |a||b|sinθ，方向由右手定则确定。</li></ul>' },
      { t: '平面与直线', h: '<ul><li>平面 Ax+By+Cz=D 的法向量为 (A,B,C)。</li><li>直线的对称式（点向式）由一点与方向向量确定。</li></ul>' }),

    mk('第 9 章 · 多元函数微分法及其应用', '偏导数、全微分与极值。', [
      { stem: '设 z = x²y + sin y，则 ∂z/∂x 等于：', options: ['2xy', 'x² + cos y', '2xy + cos y', 'x²y'], answer: 0, explain: '对 x 求偏导时把 y 当常数，sin y 对 x 的偏导为 0，得 2xy。' },
      { stem: '可偏导的函数 f(x, y) 在点 P 取得极值的必要条件是：', options: ['fx(P) = fy(P) = 0', 'fx(P) > 0', '二阶偏导全为 0', '梯度方向任意'], answer: 0, explain: '极值点（且偏导存在）必为驻点，即一阶偏导同时为 0。' },
      { stem: '函数在某点处方向导数的最大值出现在：', options: ['梯度方向', '与梯度垂直的方向', '任意方向都相同', '负梯度方向'], answer: 0, explain: '方向导数等于梯度与单位方向向量的点积，沿梯度方向取最大值 |grad f|。' }
    ], '这一章把一元的"导数"推广到多元。',
      { t: '偏导与全微分', h: '<ul><li>偏导：固定其余变量，只对某一个变量求导。</li><li>全微分 dz = fx dx + fy dy；可微 ⇒ 偏导存在（反之不成立）。</li></ul>' },
      { t: '极值与方向导数', h: '<ul><li>驻点（fx=fy=0）只是必要条件，还需二阶判别 AC−B²。</li><li>梯度方向是函数值上升最快的方向。</li></ul>' }),

    mk('第 10 章 · 重积分', '二重、三重积分的意义与计算。', [
      { stem: '二重积分 ∬_D 1 dσ 的几何意义是：', options: ['区域 D 的面积', '区域 D 的周长', '曲面体积', '函数的平均值'], answer: 0, explain: '被积函数为 1 时，二重积分的值就是积分区域的面积。' },
      { stem: '在圆域 x² + y² ≤ 1 上，∬_D dxdy 的值为：', options: ['π', '2π', '1', '4'], answer: 0, explain: '半径为 1 的圆面积为 πr² = π。' },
      { stem: '计算三重积分时常用的"先二后一"法是指：', options: ['先作二重积分再作一次积分', '先作一次积分再作二重积分', '只作二次积分', '只作一次积分'], answer: 0, explain: '先二后一（截面法）：先在某坐标的截面上做二重积分，再沿该坐标积分。' }
    ], '这一章把定积分推广到平面区域与空间区域。',
      { t: '二重积分', h: '<ul><li>化为二次积分：先确定区域类型（X 型 / Y 型）再定限。</li><li>圆域、扇形常用极坐标：x=r cosθ, y=r sinθ, dσ=r dr dθ。</li></ul>' },
      { t: '三重积分', h: '<ul><li>直角坐标下可用"先一后二"（投影法）与"先二后一"（截面法）。</li><li>柱坐标适合轴对称区域，球坐标适合球体区域。</li></ul>' })
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['高等数学（工科）'] = set(LIST);
  G.REAL_PAD_ALIAS['高等数学'] = '高等数学（工科）';
  G.REAL_PAD_ALIAS['高等数学（上）'] = '高等数学（工科）';
  G.REAL_PAD_ALIAS['高等数学（下）'] = '高等数学（工科）';
})();
