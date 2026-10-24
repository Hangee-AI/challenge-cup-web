/* ==========================================================
   pad-real-brand.js · 品牌管理：把补齐的占位关做成真题
   涉及章节：品牌资产、品牌战略（品牌架构）
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_AMA = { name: 'American Marketing Association（AMA）', url: 'https://www.ama.org/' };
  var REF_WIPO = { name: 'WIPO 品牌与商标（马德里体系）', url: 'https://www.wipo.int/' };

  function mk(title, brief, q, lead, s1, s2, refs) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: refs || [REF_AMA]
      }
    };
  }

  var LIST = [
    mk('第 1 章 · 品牌资产：品牌知名度与联想', '品牌资产的构成与价值。', [
      { stem: '在经典的品牌资产模型中，通常不包含下列哪一项：', options: ['企业注册资本', '品牌知名度', '感知质量', '品牌联想'], answer: 0, explain: '常见构成为品牌知名度、感知质量、品牌联想、品牌忠诚与其他专有资产（商标、渠道关系等）。' },
      { stem: '"提到某品类时消费者能想到某品牌"指的是：', options: ['品牌知名度（尤其是第一提及知名度）', '品牌联想', '品牌忠诚', '感知质量'], answer: 0, explain: '知名度分再认与回忆两个层次，第一提及知名度最具竞争价值。' },
      { stem: '品牌资产给企业带来的典型收益不包括：', options: ['必然降低产品成本', '获得价格溢价', '提高顾客忠诚度', '更容易进行品牌延伸'], answer: 0, explain: '品牌资产带来溢价、忠诚、延伸空间与谈判力，但不直接等同于降低生产成本。' }
    ], '这一章解释品牌为什么值钱。',
      { t: '品牌资产', h: '<ul><li>构成：知名度、感知质量、品牌联想、品牌忠诚与其他专有资产。</li><li>知名度：再认（能认出）与回忆（能想起），第一提及最具价值。</li></ul>' },
      { t: '价值来源', h: '<ul><li>溢价能力、忠诚度与口碑、渠道谈判力、延伸与抗风险能力。</li><li>品牌联想的类型：属性、利益、态度；越强越独特越有利。</li></ul>' },
      [REF_AMA]),

    mk('第 2 章 · 品牌战略：品牌架构', '品牌架构类型与延伸。', [
      { stem: '企业推出不同品类产品却都使用同一个品牌名称，这属于：', options: ['单一品牌（统一品牌/伞品牌）策略', '多品牌策略', '背书品牌', '无品牌策略'], answer: 0, explain: '统一品牌可节省传播成本并借力，但一个产品出问题会牵连整体。' },
      { stem: '关于品牌延伸，下列风险最需要警惕的是：', options: ['延伸品类与母品牌不匹配时稀释品牌形象', '一定失败', '一定能成功', '与成本无关'], answer: 0, explain: '延伸成败取决于契合度（技术、使用场景、利益），不当延伸会稀释品牌资产。' },
      { stem: '"主品牌 + 副品牌"（如主品牌下带产品系列名）属于：', options: ['主副品牌架构', '多品牌架构', '单一品牌架构', '无品牌架构'], answer: 0, explain: '副品牌为主品牌补充具体属性与差异化，同时共享主品牌的信誉。' }
    ], '这一章讲品牌组合怎么排布。',
      { t: '品牌架构', h: '<ul><li>类型：单一品牌、多品牌、主副品牌、背书品牌。</li><li>选择取决于目标市场差异、渠道冲突与资源投入能力。</li></ul>' },
      { t: '延伸与定位', h: '<ul><li>品牌延伸看契合度；不当延伸稀释形象与联想。</li><li>品牌定位要明确目标顾客、差异点与可信理由。</li></ul>' },
      [REF_WIPO])
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['品牌管理'] = set(LIST);
  G.REAL_PAD_ALIAS['品牌策划'] = '品牌管理';
  G.REAL_PAD_ALIAS['品牌战略管理'] = '品牌管理';
})();
