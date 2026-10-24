/* ==========================================================
   pad-real-prob.js · 概率论：把补齐的占位关做成真题
   涉及章节：概率论基本概念、随机变量及其分布（离散型）
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_NIST = { name: 'NIST／SEMATECH 统计手册（概率分布）', url: 'https://www.itl.nist.gov/div898/handbook/' };
  var REF_ISS = { name: '中国现场统计研究会', url: 'http://www.cssr.org.cn/' };

  function mk(title, brief, q, lead, s1, s2, refs) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: refs || [REF_ISS]
      }
    };
  }

  var LIST = [
    mk('第 1 章 · 概率论基本概念：随机试验与样本空间', '样本空间、概率公理与条件概率。', [
      { stem: '概率的公理化定义不包括下列哪一条：', options: ['任一事件的概率都大于 0.5', '非负性：P(A) ≥ 0', '规范性：P(Ω) = 1', '可列可加性：互斥事件之并的概率等于概率之和'], answer: 0, explain: '柯尔莫哥洛夫公理为：非负性、规范性、可列可加性。' },
      { stem: '条件概率 P(A | B) 的定义是：', options: ['P(AB) / P(B)，其中 P(B) > 0', 'P(A) × P(B)', 'P(A) + P(B)', 'P(A) − P(B)'], answer: 0, explain: '条件概率是在已知 B 发生的条件下 A 的概率，等价于把样本空间缩到 B。' },
      { stem: '事件 A 与 B 相互独立的充要条件是：', options: ['P(AB) = P(A)·P(B)', 'A 与 B 互斥', 'P(A) = P(B)', 'A ⊂ B'], answer: 0, explain: '独立是概率层面的乘积关系；互斥（不能同时发生）不等于独立。' }
    ], '这一章把"可能性"变成可运算的数学对象。',
      { t: '基本概念', h: '<ul><li>随机试验、样本空间 Ω、随机事件；事件的关系与运算（并、交、差、对立）。</li><li>概率公理：非负性、规范性、可列可加性。</li></ul>' },
      { t: '条件概率与独立性', h: '<ul><li>条件概率 P(A|B)=P(AB)/P(B)；乘法公式与全概率公式、贝叶斯公式。</li><li>独立 ⇔ P(AB)=P(A)P(B)；注意与互斥的区别。</li></ul>' },
      [REF_NIST]),

    mk('第 2 章 · 随机变量及其分布：离散型随机变量', '分布律与常见离散分布。', [
      { stem: '离散型随机变量的分布律必须满足：', options: ['pᵢ ≥ 0 且 Σpᵢ = 1', 'pᵢ > 1', 'Σpᵢ = 0', 'pᵢ 可为任意实数'], answer: 0, explain: '分布律列出所有可能取值及其概率，非负且总和为 1。' },
      { stem: '下列分布中，用于描述 n 次独立试验中"成功次数"的是：', options: ['二项分布 B(n, p)', '泊松分布', '均匀分布', '指数分布'], answer: 0, explain: '二项分布描述 n 次独立伯努利试验的成功次数；泊松分布常用于稀有事件计数。' },
      { stem: '数学期望 E(X) 描述的是随机变量的：', options: ['平均取值水平（加权平均）', '离散程度', '最大取值', '取值范围'], answer: 0, explain: '期望为 Σxᵢpᵢ（离散情形）；离散程度由方差 D(X) = E[(X − E X)²] 描述。' }
    ], '这一章把随机结果映射成可计算的数字。',
      { t: '离散型随机变量', h: '<ul><li>分布律：P(X = xᵢ) = pᵢ，满足 pᵢ≥0、Σpᵢ=1；分布函数右连续。</li><li>常见分布：0-1 分布、二项分布、泊松分布、几何分布。</li></ul>' },
      { t: '数字特征', h: '<ul><li>期望 E(X) 反映平均水平，方差 D(X) 反映离散程度。</li><li>性质：E(aX + b) = aE(X) + b；D(aX + b) = a²D(X)。</li></ul>' },
      [REF_NIST])
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['概率论'] = set(LIST);
  G.REAL_PAD_ALIAS['概率论基础'] = '概率论';
  G.REAL_PAD_ALIAS['概率统计'] = '概率论';
})();
