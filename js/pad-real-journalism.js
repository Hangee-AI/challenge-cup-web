/* ==========================================================
   pad-real-journalism.js · 新闻学概论：把补齐的占位关做成真题
   涉及章节：新闻与新闻活动、新闻学研究方法
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_CJC = { name: '中国新闻传播学期刊（CNKI 学科导航）', url: 'https://www.cnki.net/' };
  var REF_ICA = { name: 'International Communication Association（ICA）', url: 'https://www.icahdq.org/' };

  function mk(title, brief, q, lead, s1, s2, refs) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: refs || [REF_ICA]
      }
    };
  }

  var LIST = [
    mk('第 1 章 · 新闻与新闻活动：新闻的定义', '新闻定义、要素与价值。', [
      { stem: '新闻学中被广泛引用的新闻定义是：', options: ['新闻是对新近发生的事实的报道', '新闻是对观点的表达', '新闻是文学创作', '新闻等同于宣传'], answer: 0, explain: '该定义强调"事实"是本源、"新近发生"是时间规定、"报道"是传播行为。' },
      { stem: '新闻的"五要素"（5W）通常指：', options: ['何时、何地、何人、何事、何故', '时间、地点、人物、情节、结局', '标题、导语、主体、背景、结尾', '采、写、编、评、摄'], answer: 0, explain: '即 When、Where、Who、What、Why（有时加 How 称 5W1H）。' },
      { stem: '下列哪一项不属于常见的新闻价值要素：', options: ['娱乐性之外无需其他', '时新性', '重要性', '接近性'], answer: 0, explain: '常见要素包括时新性、重要性、接近性、显著性与趣味性，共同决定新闻是否值得报道。' }
    ], '这一章回答"什么是新闻、什么值得报道"。',
      { t: '新闻定义与本源', h: '<ul><li>新闻是对新近发生的事实的报道；事实是新闻的本源，先有事实后有新闻。</li><li>真实是新闻的生命，报道须可核实、要素齐全。</li></ul>' },
      { t: '新闻要素与价值', h: '<ul><li>五要素：何时、何地、何人、何事、何故（5W）。</li><li>新闻价值要素：时新性、重要性、接近性、显著性、趣味性。</li></ul>' },
      [REF_ICA]),

    mk('第 9 章 · 新闻学研究方法', '常用研究方法与质量要求。', [
      { stem: '内容分析法的主要特点是：', options: ['对传播内容进行系统、客观、定量的描述', '只做主观解读', '不需要编码方案', '只适用于实验数据'], answer: 0, explain: '内容分析须制定明确的编码规则、抽样与信度检验，才能实现可重复测量。' },
      { stem: '想了解受访者的深层动机与经验，最适合的方法是：', options: ['深度访谈（质性）', '大样本问卷调查', '内容分析', '实验法'], answer: 0, explain: '质性方法（深访、焦点小组、个案研究）适合探索意义与过程，问卷适合描述与推断总体。' },
      { stem: '评价一项研究质量的常用标准是：', options: ['信度（结果稳定一致）与效度（测到了要测的东西）', '样本越大越好', '只要结论新颖', '只要引用数量多'], answer: 0, explain: '信度看重复测量的一致性，效度包括内部效度、外部效度与测量效度。' }
    ], '这一章讲怎么科学地研究新闻传播现象。',
      { t: '主要方法', h: '<ul><li>量化：内容分析、问卷调查、实验法；质性：深度访谈、焦点小组、个案研究、民族志。</li><li>方法选择取决于研究问题：描述、解释还是探索。</li></ul>' },
      { t: '质量要求', h: '<ul><li>抽样要有代表性；编码与测量需明确定义。</li><li>信度（一致性、可重复）与效度（准确性）；注意伦理与知情同意。</li></ul>' },
      [REF_CJC])
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['新闻学概论'] = set(LIST);
  G.REAL_PAD_ALIAS['新闻学'] = '新闻学概论';
  G.REAL_PAD_ALIAS['新闻理论'] = '新闻学概论';
  G.REAL_PAD_ALIAS['新闻学基础'] = '新闻学概论';
})();
