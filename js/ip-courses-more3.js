/* ==========================================================
   ip-courses-more3.js · 知识产权：补齐各科零头，统一到 15 章
   ========================================================== */

appendChapters('law-知识产权', [
  null,
  { chapters: [{
    title: '民事权利的行使与保护',
    brief: '权利不能滥用：知产维权也要讲比例。',
    q: [
      { stem: '权利滥用在知产中的表现是：', options: ['恶意投诉、囤积权利、滥用禁令', '正常维权', '许可', '转让'], answer: 0, explain: '滥用类型。' },
      { stem: '权利人长期不维权可能导致：', options: ['禁反言或权利失效（个别情形）', '权利自动消灭', '扩大保护', '无效'], answer: 0, explain: '有限。' },
      { stem: '自力救济的边界是：', options: ['不得超出必要限度', '可以任意', '禁止', '只能报警'], answer: 0, explain: '比例。' }
    ],
    doc: {
      lead: '这一章讲权利边界。',
      sections: [
        { id: 'abuse', title: '滥用', html: `<p>恶意投诉、囤积商标、以禁令施压；可依诚信原则限制。</p>` },
        { id: 'remedy', title: '保护', html: `<p>自助行为、诉前禁令、证据保全须符合比例。</p>` }
      ],
      refs: [LAW_REFS.wenshu]
    }
  }] },
  { chapters: [{
    title: '著作权的转让与许可',
    brief: '卖断还是授权：合同条款决定收益。',
    q: [
      { stem: '著作权转让与许可的区别是：', options: ['是否转移权利本身', '是否收费', '是否书面', '是否登记'], answer: 0, explain: '转让 vs 授权。' },
      { stem: '专有许可与普通许可的区别是：', options: ['是否排除他人（含权利人）使用', '是否有偿', '是否登记', '是否书面'], answer: 0, explain: '排他程度。' },
      { stem: '著作权转让合同应当：', options: ['书面并明确权利种类、地域、期限', '口头即可', '无需约定', '必须公证'], answer: 0, explain: '条款。' }
    ],
    doc: {
      lead: '这一章讲交易。',
      sections: [
        { id: 'transfer', title: '转让', html: `<p>权利本身转移；须书面，明确种类、地域、价款。</p>` },
        { id: 'license', title: '许可', html: `<p>专有/非专有；期限、地域、使用方式与转授权。</p>` }
      ],
      refs: [LAW_REFS.lawdb]
    }
  }] },
  null,
  { chapters: [
    {
      title: '商标使用管理',
      brief: '规范使用：不改变标识、不超范围。',
      q: [
        { stem: '自行改变注册商标的后果是：', options: ['责令限期改正，逾期可撤销', '自动有效', '扩大保护', '无需处理'], answer: 0, explain: '规范使用。' },
        { stem: '注册商标连续三年不使用的风险是：', options: ['被撤销', '自动续展', '扩大保护', '无风险'], answer: 0, explain: '撤三。' },
        { stem: '许可他人使用商标应当：', options: ['签订许可合同并备案', '口头约定', '无需备案', '只能独占'], answer: 0, explain: '备案。' }
      ],
      doc: {
        lead: '这一章讲使用规范。',
        sections: [
          { id: 'use', title: '规范', html: `<p>按核准标识与核定商品使用；变更需申请。</p>` },
          { id: 'license', title: '许可', html: `<p>合同 + 备案；质量监督义务。</p>` }
        ],
        refs: [LAW_REFS.lawdb]
      }
    },
    {
      title: '商标代理与代理机构',
      brief: '代理行业的规范与责任。',
      q: [
        { stem: '商标代理机构不得：', options: ['明知委托人不当仍代理恶意注册', '代理正常注册', '提供咨询', '代写材料'], answer: 0, explain: '禁止恶意。' },
        { stem: '代理机构对委托人负有：', options: ['保密与勤勉义务', '保证注册成功', '垫付费用', '无限连带'], answer: 0, explain: '职业义务。' },
        { stem: '代理机构违规的后果包括：', options: ['行政处罚与行业惩戒', '无后果', '仅道歉', '仅罚款个人'], answer: 0, explain: '责任。' }
      ],
      doc: {
        lead: '这一章讲行业规范。',
        sections: [
          { id: 'duty', title: '义务', html: `<p>保密、如实告知、不得代理恶意注册。</p>` },
          { id: 'liability', title: '责任', html: `<p>行政处罚、行业惩戒、民事赔偿。</p>` }
        ],
        refs: [LAW_REFS.lawdb]
      }
    }
  ] },
  { chapters: [{
    title: '反法与消费者保护',
    brief: '虚假宣传同时损害竞争秩序与消费者。',
    q: [
      { stem: '虚假宣传可能同时引发：', options: ['行政处罚 + 民事赔偿 + 消费者索赔', '仅行政', '仅民事', '仅刑事'], answer: 0, explain: '多重。' },
      { stem: '消费者因虚假宣传受骗可依：', options: ['消费者权益保护法主张三倍赔偿', '只能退货', '只能投诉', '不能索赔'], answer: 0, explain: '惩罚性赔偿。' },
      { stem: '平台对虚假宣传的责任取决于：', options: ['是否明知应知且未处理', '一律承担', '一律免责', '与平台无关'], answer: 0, explain: '过错。' }
    ],
    doc: {
      lead: '这一章讲交叉责任。',
      sections: [
        { id: 'cross', title: '交叉', html: `<p>反法（竞争秩序）+ 消保法（消费者）+ 广告法（广告主/经营者）。</p>` },
        { id: 'platform', title: '平台', html: `<p>明知应知未处理可承担连带；避风港规则。</p>` }
      ],
      refs: [LAW_REFS.wenshu]
    }
  }] },
  { chapters: [
    {
      title: '知识产权尽职调查',
      brief: '交易前的知产体检。',
      q: [
        { stem: '知产尽调的核心是：', options: ['权属、有效性、负担与诉讼', '预算', '人员', '设备'], answer: 0, explain: '四查。' },
        { stem: '权属尽调要确认：', options: ['登记权利人、职务发明、共有情形', '只有登记', '只有合同', '只有发票'], answer: 0, explain: '权属链。' },
        { stem: '发现专利可能被无效时应当：', options: ['评估稳定性并调整交易对价', '忽略', '直接放弃交易', '要求对方承诺'], answer: 0, explain: '风险定价。' }
      ],
      doc: {
        lead: '这一章讲尽调。',
        sections: [
          { id: 'four', title: '四查', html: `<p>权属、有效性（年费/无效风险）、负担（许可/质押）、诉讼与争议。</p>` },
          { id: 'output', title: '输出', html: `<p>风险清单 + 交易条款建议（陈述保证、赔偿、托管）。</p>` }
        ],
        refs: [LAW_REFS.wenshu]
      }
    },
    {
      title: '知识产权保险',
      brief: '把诉讼风险转移出去。',
      q: [
        { stem: '专利侵权责任险保障的是：', options: ['被诉侵权的赔偿与抗辩费用', '专利申请费', '年费', '研发投入'], answer: 0, explain: '责任险。' },
        { stem: '专利执行险保障的是：', options: ['权利人维权费用', '被诉赔偿', '无效费用', '许可费'], answer: 0, explain: '执行险。' },
        { stem: '保险不能覆盖：', options: ['故意侵权', '过失侵权', '诉讼费用', '和解金'], answer: 0, explain: '故意除外。' }
      ],
      doc: {
        lead: '这一章讲风险转移。',
        sections: [
          { id: 'types', title: '两类', html: `<p>侵权责任险（被告）、专利执行险（原告）。</p>` },
          { id: 'limit', title: '限制', html: `<p>故意侵权、已知风险通常除外；保额与免赔额是关键。</p>` }
        ],
        refs: [LAW_REFS.lawdb]
      }
    }
  ] },
  { chapters: [{
    title: '地理标志保护',
    brief: '地名 + 品质：另一种集体权利。',
    q: [
      { stem: '地理标志保护的是：', options: ['特定产地产品的品质声誉', '任何地名', '企业商标', '专利技术'], answer: 0, explain: '产地关联。' },
      { stem: '我国地理标志的保护途径包括：', options: ['集体/证明商标、专门保护、农产品认证', '只有商标', '只有专利', '只有著作权'], answer: 0, explain: '三轨。' },
      { stem: '地理标志与普通商标的冲突常见于：', options: ['在先商标与地理标志并存', '专利无效', '著作权', '商业秘密'], answer: 0, explain: '共存规则。' }
    ],
    doc: {
      lead: '这一章讲产地保护。',
      sections: [
        { id: 'system', title: '三轨', html: `<p>商标法（集体/证明商标）、地理标志产品保护、农产品地理标志。</p>` },
        { id: 'conflict', title: '冲突', html: `<p>与在先商标的共存与善意使用；防止通用化。</p>` }
      ],
      refs: [LAW_REFS.lawdb]
    }
  }] }
]);
