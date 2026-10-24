/* ==========================================================
   pad-real-econometrics.js · 计量经济学：把补齐的占位关做成真题
   涉及章节：一元线性回归、多元回归
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_NBS = { name: '国家统计局', url: 'https://www.stats.gov.cn/' };
  var REF_AEA = { name: 'AEA（美国经济学会）', url: 'https://www.aeaweb.org/' };

  function mk(title, brief, q, lead, s1, s2, refs) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: refs || [REF_AEA]
      }
    };
  }

  var LIST = [
    mk('第 1 章 · 一元线性回归：OLS 估计', 'OLS 原理、拟合优度与 BLUE。', [
      { stem: '普通最小二乘法（OLS）估计参数的准则是：', options: ['使残差平方和最小', '使残差和最小', '使自变量的方差最大', '使样本量最大'], answer: 0, explain: 'OLS 最小化 Σeᵢ²，得到回归系数的估计值。' },
      { stem: '在一元线性回归中，判定系数 R² 表示：', options: ['因变量的变异中可由自变量解释的比例', '自变量与因变量的比值', '残差的标准差', '样本量'], answer: 0, explain: 'R² = ESS/TSS = 1 − RSS/TSS，取值 0~1，越大拟合越好（但不能单独说明因果）。' },
      { stem: '高斯—马尔可夫定理说明，在经典假定成立时 OLS 估计量是：', options: ['BLUE（最优线性无偏估计量）', '必然无偏但不具一致性', '一定有偏', '只在小样本下有效'], answer: 0, explain: '在满足线性、随机抽样、无完全共线、零条件均值、同方差等假定下，OLS 具 BLUE 性质。' }
    ], '这一章把"两个变量的关系"量化出来。',
      { t: 'OLS', h: '<ul><li>模型：y = β₀ + β₁x + u；OLS 通过最小化残差平方和估计 β₀、β₁。</li><li>残差 e = y − ŷ；注意区分误差项 u 与残差 e。</li></ul>' },
      { t: '拟合与性质', h: '<ul><li>R² = ESS/TSS，表示解释比例；调整 R² 用于多元回归惩罚变量个数。</li><li>经典假定下 OLS 为 BLUE；假定破坏时需相应处理。</li></ul>' },
      [REF_AEA]),

    mk('第 2 章 · 多元回归：模型设定', '共线性、异方差与检验。', [
      { stem: '在多元回归中，当两个自变量高度相关时，容易出现：', options: ['多重共线性，使系数估计不稳定、标准误变大', '异方差', '自相关', '内生性消失'], answer: 0, explain: '共线性不改变无偏性，但放大方差，使 t 检验不显著、符号与显著性不稳。' },
      { stem: '关于异方差，下列做法正确的是：', options: ['使用稳健标准误（或加权最小二乘）并重新检验', '忽略即可，不影响任何推断', '直接删除样本', '只增大样本量即可'], answer: 0, explain: '异方差下 OLS 仍无偏但不有效，且常规标准误不可靠，应使用异方差稳健标准误。' },
      { stem: '检验"所有斜率系数同时为零"应使用：', options: ['F 检验（联合显著性检验）', '单个系数的 t 检验', 'DW 检验', 'White 检验'], answer: 0, explain: 'F 检验用于联合约束的检验；t 检验用于单个系数；White/BP 检验异方差，DW 检验一阶自相关。' }
    ], '这一章处理现实数据中的各种"不完美"。',
      { t: '设定问题', h: '<ul><li>遗漏重要变量 → 估计偏误（内生性）；多余变量 → 效率损失。</li><li>多重共线性：系数方差变大、不稳；可增样本、剔除变量或用正则化。</li></ul>' },
      { t: '检验与修正', h: '<ul><li>异方差：稳健标准误 / WLS；自相关：Newey-West 或可行的 GLS。</li><li>推断：t 检验单个系数，F 检验联合约束。</li></ul>' },
      [REF_NBS])
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['计量经济学'] = set(LIST);
  G.REAL_PAD_ALIAS['经济计量学'] = '计量经济学';
  G.REAL_PAD_ALIAS['计量经济学基础'] = '计量经济学';
})();
