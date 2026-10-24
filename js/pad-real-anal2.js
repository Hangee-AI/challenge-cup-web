/* ==========================================================
   pad-real-anal2.js · 数学分析（二）：把补齐的占位关做成真题
   涉及章节：级数（数项级数）、多元函数微分学
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
    mk('第 1 章 · 级数：数项级数', '收敛判别与常用级数。', [
      { stem: '级数 Σaₙ 收敛的必要条件是：', options: ['lim(n→∞) aₙ = 0', 'aₙ 单调递减', 'aₙ 恒为正', 'Σ|aₙ| 一定收敛'], answer: 0, explain: '一般项趋于 0 只是必要而非充分条件（调和级数 Σ1/n 即发散）。' },
      { stem: '关于几何级数 Σqⁿ 与 p 级数 Σ1/nᵖ，正确的是：', options: ['|q|<1 时几何级数收敛；p>1 时 p 级数收敛', '|q|<1 时几何级数发散', 'p=1 时 p 级数收敛', '两者总发散'], answer: 0, explain: '几何级数 |q|<1 收敛于 1/(1−q)（从 n=0 起）；p 级数 p>1 收敛、p≤1 发散。' },
      { stem: '比值判别法（达朗贝尔判别法）通常适用于：', options: ['一般项含阶乘或幂次的级数', '任意级数都能给出结论', '只用于交错级数', '只用于 p 级数'], answer: 0, explain: '若 lim|aₙ₊₁/aₙ| = r，则 r<1 收敛、r>1 发散、r=1 失效（需换别的方法）。' }
    ], '这一章把无穷求和的收敛性判明白。',
      { t: '收敛判别', h: '<ul><li>必要条件 aₙ→0；正项级数可用比较、比值、根值、积分判别法。</li><li>交错级数可用莱布尼茨判别法（单调趋于 0 ⇒ 收敛）。</li></ul>' },
      { t: '绝对与条件收敛', h: '<ul><li>Σ|aₙ| 收敛称绝对收敛；收敛但非绝对收敛称条件收敛。</li><li>绝对收敛可任意重排而不变和；条件收敛重排可改变和（黎曼重排定理）。</li></ul>' },
      [REF_MATHWORLD]),

    mk('第 2 章 · 多元函数微分学：多元函数的极限与连续', '重极限、偏导与可微。', [
      { stem: '关于二元函数的重极限与累次极限，正确的是：', options: ['重极限存在则两个累次极限存在且相等；反之不成立', '累次极限存在则重极限必存在', '两者完全等价', '重极限不存在时累次极限必不存在'], answer: 0, explain: '重极限要求沿任意路径趋于同值，条件最强；累次极限只是沿特殊路径，存在且相等也不能推出重极限存在。' },
      { stem: '函数 z = f(x, y) 在点 P 处偏导数都存在，则：', options: ['不能推出 f 在该点连续或可微', '一定连续', '一定可微', '一定存在极限'], answer: 0, explain: '偏导只反映沿坐标轴方向的变化；可微 ⇒ 连续且偏导存在，反之不成立。' },
      { stem: 'f 在 P 点可微的充分条件是：', options: ['偏导数在 P 的某邻域内存在且连续', '偏导数在 P 点存在', 'f 连续', 'f 有界'], answer: 0, explain: '偏导连续 ⇒ 可微 ⇒ 连续且偏导存在（逆向均不成立）。' }
    ], '这一章把一元微分推广到多元。',
      { t: '多元极限', h: '<ul><li>重极限要求沿任意路径趋于同一值；常用"换路径法"证明极限不存在。</li><li>重极限存在 ⇒ 累次极限存在且相等；逆命题不成立。</li></ul>' },
      { t: '偏导与可微', h: '<ul><li>偏导存在 ⇏ 连续 ⇏ 可微；可微 ⇒ 连续 + 偏导存在。</li><li>偏导连续是可微的充分条件（非必要）。</li></ul>' },
      [REF_MATHWORLD])
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['数学分析（二）'] = set(LIST);
  G.REAL_PAD_ALIAS['数学分析(二)'] = '数学分析（二）';
  G.REAL_PAD_ALIAS['数学分析下'] = '数学分析（二）';
})();
