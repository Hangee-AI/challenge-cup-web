/* ==========================================================
   pad-real-acct.js · 会计学原理：把补齐的占位关做成真题
   涉及章节：会计基本概念、账户与复式记账
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_MOF = { name: '中华人民共和国财政部（会计准则）', url: 'https://www.mof.gov.cn/' };
  var REF_IFRS = { name: 'IFRS Foundation（国际财务报告准则）', url: 'https://www.ifrs.org/' };

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
    mk('第 1 章 · 会计基本概念：会计职能与目标', '会计要素与会计等式。', [
      { stem: '会计的基本职能通常概括为：', options: ['核算（反映）与监督', '生产与销售', '投资与融资', '招聘与考核'], answer: 0, explain: '核算是对经济活动的确认、计量、记录与报告，监督是对合规与效益的检查。' },
      { stem: '反映企业财务状况的静态会计等式是：', options: ['资产 = 负债 + 所有者权益', '利润 = 收入 − 费用', '资产 = 负债 − 所有者权益', '收入 = 费用 + 利润'], answer: 0, explain: '静态等式反映某一时点的财务状况；"收入 − 费用 = 利润"是动态等式。' },
      { stem: '下列各项目中，属于资产的是：', options: ['应收账款', '应付账款', '实收资本', '主营业务收入'], answer: 0, explain: '资产由过去交易形成、由企业拥有或控制、预期带来经济利益；应付账款是负债。' }
    ], '这一章建立会计的概念框架。',
      { t: '职能与目标', h: '<ul><li>基本职能：核算与监督；目标：向使用者提供决策有用的财务信息。</li><li>会计要素：资产、负债、所有者权益、收入、费用、利润。</li></ul>' },
      { t: '会计等式', h: '<ul><li>静态：资产 = 负债 + 所有者权益。</li><li>动态：收入 − 费用 = 利润；经济业务的发生不会破坏等式的平衡。</li></ul>' },
      [REF_MOF]),

    mk('第 2 章 · 账户与复式记账：会计科目', '借贷记账法与账户结构。', [
      { stem: '借贷记账法的记账规则是：', options: ['有借必有贷，借贷必相等', '只记借方', '只记贷方', '借贷可以不相等'], answer: 0, explain: '每笔业务至少影响两个账户，借方金额合计等于贷方金额合计。' },
      { stem: '在借贷记账法下，资产类账户的结构是：', options: ['借方登记增加，贷方登记减少，余额一般在借方', '贷方登记增加，借方登记减少', '增减都记借方', '无余额'], answer: 0, explain: '资产、费用类借增贷减；负债、所有者权益、收入类贷增借减。' },
      { stem: '企业用银行存款购买设备，应编制的分录是：', options: ['借：固定资产　贷：银行存款', '借：银行存款　贷：固定资产', '借：银行存款　贷：实收资本', '借：固定资产　贷：应付账款'], answer: 0, explain: '资产内部一增一减：固定资产增加记借方，银行存款减少记贷方，等式总额不变。' }
    ], '这一章是做账的基本功。',
      { t: '账户与科目', h: '<ul><li>会计科目分资产、负债、共同、所有者权益、成本、损益六大类，账户按科目开设。</li><li>账户基本结构：左借右贷，余额方向取决于账户性质。</li></ul>' },
      { t: '借贷记账法', h: '<ul><li>规则：有借必有贷、借贷必相等；试算平衡依据即借贷合计相等。</li><li>资产与费用借增贷减，负债、所有者权益与收入贷增借减。</li></ul>' },
      [REF_IFRS])
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['会计学原理'] = set(LIST);
  G.REAL_PAD_ALIAS['会计学基础'] = '会计学原理';
  G.REAL_PAD_ALIAS['基础会计'] = '会计学原理';
  G.REAL_PAD_ALIAS['会计学'] = '会计学原理';
})();
