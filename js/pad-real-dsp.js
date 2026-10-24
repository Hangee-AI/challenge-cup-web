/* ==========================================================
   pad-real-dsp.js · 数字信号处理：把补齐的占位关做成真题
   涉及章节：离散时间信号与系统、z 变换与系统函数
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_IEEE = { name: 'IEEE Xplore（信号处理）', url: 'https://ieeexplore.ieee.org/' };
  var REF_DSPGUIDE = { name: 'The Scientist and Engineer\'s Guide to DSP', url: 'http://www.dspguide.com/' };

  function mk(title, brief, q, lead, s1, s2, refs) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: refs || [REF_DSPGUIDE]
      }
    };
  }

  var LIST = [
    mk('第 1 章 · 离散时间信号与系统：序列与基本运算', '典型序列、LTI 与卷积和。', [
      { stem: '离散时间单位样值序列 δ[n] 的定义是：', options: ['n = 0 时为 1，其余为 0', 'n ≥ 0 时为 1', '恒为 1', 'n = 1 时为 1'], answer: 0, explain: 'δ[n] 在 n=0 处取 1；u[n] 为 n≥0 时取 1 的单位阶跃序列，二者满足 δ[n] = u[n] − u[n−1]。' },
      { stem: '线性时不变（LTI）系统的输出由输入与单位样值响应通过什么运算得到：', options: ['卷积和 y[n] = Σ x[k]·h[n − k]', '简单相乘', '相加', '微分'], answer: 0, explain: '卷积和是 LTI 系统输入输出的基本关系，交换律、结合律与分配律都成立。' },
      { stem: '因果稳定的 LTI 系统，其单位样值响应必须满足：', options: ['h[n] = 0（n &lt; 0）且 Σ|h[n]| 有限', '只需 h[n] 有限长', '只需 h[n] 非负', '无约束'], answer: 0, explain: '因果性要求 n&lt;0 时 h[n]=0；BIBO 稳定性要求单位样值响应绝对可和（Σ|h[n]|&lt;∞）。' }
    ], '这一章把连续世界的信号与系统搬到离散域。',
      { t: '序列与运算', h: '<ul><li>基本序列：δ[n]、u[n]、复指数与正弦序列（离散正弦的周期性条件）。</li><li>基本运算：移位、反折、尺度变换、相加与相乘。</li></ul>' },
      { t: 'LTI 系统', h: '<ul><li>卷积和 y[n] = Σ x[k] h[n−k]；线性与时不变性分别可验证。</li><li>因果：h[n]=0（n&lt;0）；稳定：Σ|h[n]| &lt; ∞。</li></ul>' },
      [REF_DSPGUIDE]),

    mk('第 2 章 · z 变换与系统函数：z 变换与收敛域', 'z 变换、ROC 与稳定性判据。', [
      { stem: '序列 x[n] 的 z 变换定义为：', options: ['X(z) = Σ x[n]·z^(−n)（n 从 −∞ 到 +∞）', 'X(z) = Σ x[n]·z^n', 'X(z) = ∫x(t)e^(−zt)dt', 'X(z) = Σ x[n]·e^(−z n)'], answer: 0, explain: '双边 z 变换为幂级数形式，z 为复变量；单边 z 变换只对 n≥0 求和。' },
      { stem: '关于 z 变换的收敛域（ROC），正确的是：', options: ['ROC 内不包含任何极点，且通常以极点所在圆为边界', 'ROC 一定包含极点', 'ROC 一定是整个 z 平面', 'ROC 与系统稳定性无关'], answer: 0, explain: '右边序列的 ROC 在最外层极点之外，左边序列在最内层极点之内，双边序列为环形区域。' },
      { stem: '因果 LTI 系统稳定的充要条件是：', options: ['系统函数 H(z) 的全部极点都在单位圆内', '所有零点在单位圆内', 'ROC 不包含单位圆', '极点数少于零点数'], answer: 0, explain: '稳定要求 ROC 包含单位圆；因果系统的 ROC 在最外极点之外，故等价于是所有极点在单位圆内。' }
    ], '这一章给出离散系统的复频域分析工具。',
      { t: 'z 变换', h: '<ul><li>定义 X(z)=Σx[n]z⁻ⁿ；ROC 是使级数收敛的 z 的集合，ROC 不含极点。</li><li>右边序列 ROC 在最外极点之外，左边序列在最内极点之内。</li></ul>' },
      { t: '系统函数', h: '<ul><li>H(z) = Y(z)/X(z)，也等于 h[n] 的 z 变换；由差分方程取 z 变换可得。</li><li>因果稳定 ⇔ ROC 含单位圆且所有极点在单位圆内；零极点分布决定频率响应形状。</li></ul>' },
      [REF_IEEE])
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['数字信号处理'] = set(LIST);
  G.REAL_PAD_ALIAS['数字信号处理基础'] = '数字信号处理';
  G.REAL_PAD_ALIAS['DSP'] = '数字信号处理';
})();
