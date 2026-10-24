/* ==========================================================
   pad-real-fin.js · 财务管理：把补齐的占位关做成真题
   涉及章节：财务管理概论、财务分析与预测
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_MOF = { name: '中华人民共和国财政部（企业会计准则）', url: 'https://www.mof.gov.cn/' };
  var REF_CFA = { name: 'CFA Institute（财务分析）', url: 'https://www.cfainstitute.org/' };

  function mk(title, brief, q, lead, s1, s2, refs) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: refs || [REF_MOF]
      }
    };
  }

  var LIST = [
    mk('第 1 章 · 财务管理概论：财务目标与内容', '财务目标与四大活动。', [
      { stem: '现代财务管理较公认的目标是：', options: ['企业价值（股东财富）最大化', '会计利润最大化', '收入最大化', '成本最小化'], answer: 0, explain: '利润最大化忽略了货币时间价值、风险与投入资本规模，还易导致短期行为。' },
      { stem: '财务管理的主要内容包括：', options: ['筹资、投资、营运资金管理与利润分配', '生产、销售与售后服务', '招聘、培训与考核', '采购、仓储与物流'], answer: 0, explain: '财务活动围绕资金的筹集、投放、使用与分配展开。' },
      { stem: '股东与管理层之间的利益冲突在财务学中称为：', options: ['代理问题', '经营风险', '财务杠杆', '流动性风险'], answer: 0, explain: '代理问题源于所有权与经营权分离，常通过激励、监督与资本市场机制缓解。' }
    ], '这一章确立财务管理的目标与范围。',
      { t: '财务目标', h: '<ul><li>主流目标：股东财富最大化/企业价值最大化；利润最大化的局限（时间价值、风险、投入规模、短期化）。</li><li>代理问题：股东—管理层、股东—债权人之间的利益冲突。</li></ul>' },
      { t: '财务活动', h: '<ul><li>筹资（权益与债务、资本成本与资本结构）、投资（项目评价：NPV、IRR、回收期）。</li><li>营运资金管理（现金、应收、存货）与利润分配（股利政策）。</li></ul>' },
      [REF_CFA]),

    mk('第 2 章 · 财务分析与预测：三大报表分析', '报表结构与常用指标。', [
      { stem: '下列报表中，反映企业在某一时点财务状况的是：', options: ['资产负债表', '利润表', '现金流量表', '所有者权益变动表'], answer: 0, explain: '资产负债表是时点报表（余额），利润表与现金流量表是期间报表（流量）。' },
      { stem: '衡量短期偿债能力的常用指标是：', options: ['流动比率与速动比率', '资产负债率', '总资产周转率', '净资产收益率'], answer: 0, explain: '流动比率 = 流动资产/流动负债；速动比率扣除存货等变现较慢的资产；资产负债率反映长期偿债能力。' },
      { stem: '杜邦分析把净资产收益率（ROE）分解为：', options: ['销售净利率 × 总资产周转率 × 权益乘数', '毛利率 × 存货周转率', '净利率 + 资产负债率', '营业利润率 × 流动比率'], answer: 0, explain: '杜邦体系把 ROE 拆成盈利能力、营运能力与财务杠杆三个方面，便于定位驱动因素。' }
    ], '这一章用报表数据判断企业好坏。',
      { t: '三大报表', h: '<ul><li>资产负债表（时点：资产 = 负债 + 所有者权益）、利润表（期间：收入 − 费用 = 利润）、现金流量表（经营/投资/筹资）。</li><li>分析时须注意口径一致、会计政策差异与附注信息。</li></ul>' },
      { t: '指标与分析', h: '<ul><li>偿债：流动比率、速动比率、资产负债率、利息保障倍数。</li><li>营运：应收与存货周转率；盈利：毛利率、净利率、ROA、ROE；杜邦分析用于拆解 ROE。</li></ul>' },
      [REF_MOF])
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['财务管理'] = set(LIST);
  G.REAL_PAD_ALIAS['财务管理学'] = '财务管理';
  G.REAL_PAD_ALIAS['公司理财'] = '财务管理';
  G.REAL_PAD_ALIAS['财务分析'] = '财务管理';
})();
