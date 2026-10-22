/* ==========================================================
   ip-courses-more2.js · 知识产权（下）：后 4 门主干 + 3 门出口
   --------------------------------------------------------
   反不正当竞争法、知识产权管理、国际知识产权、知识产权诉讼：补到 15 章
   法考复习、专利代理实务、考研与求职：补到 8 章
   ========================================================== */

appendChapters('law-知识产权', [
  null, null, null, null, null,

  /* ---------- 6 反不正当竞争法：3 → 15 ---------- */
  {
    chapters: [
      {
        title: '混淆行为',
        brief: '仿冒有一定影响的标识，引人误认。',
        q: [
          { stem: '反法第六条规制的是：', options: ['混淆行为', '虚假宣传', '商业诋毁', '侵犯商业秘密'], answer: 0, explain: '仿冒。' },
          { stem: '"有一定影响"的认定考虑：', options: ['知名度、使用时间、地域范围', '注册资本', '员工人数', '纳税额'], answer: 0, explain: '综合。' },
          { stem: '将他人商标用作企业名称：', options: ['可能构成混淆', '合法', '必须许可', '无效'], answer: 0, explain: '字号冲突。' }
        ],
        doc: {
          lead: '这一章讲仿冒。',
          sections: [
            { id: 'acts', title: '行为类型', html: `<p>擅自使用他人有一定影响的商品名称、包装、装潢、企业名称、字号、域名、网页等。</p>` },
            { id: 'test', title: '判断', html: `<p>有一定影响 + 擅自使用 + 引人误认（含特定联系）。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '商业秘密',
        brief: '秘密性 + 价值性 + 保密措施。',
        q: [
          { stem: '商业秘密的三要件是：', options: ['秘密性、价值性、保密措施', '新颖性、创造性、实用性', '显著性、合法性、在先性', '独创性、可复制、发表'], answer: 0, explain: '三要件。' },
          { stem: '客户名单构成商业秘密的关键是：', options: ['深度信息 + 保密措施', '任何名单', '客户数量', '行业'], answer: 0, explain: '深度。' },
          { stem: '反向工程获取技术信息：', options: ['一般不构成侵权（合法渠道）', '一律侵权', '犯罪', '需许可'], answer: 0, explain: '例外。' }
        ],
        doc: {
          lead: '这一章讲秘密。',
          sections: [
            { id: 'elements', title: '三要件', html: `<p>不为公众所知悉 + 商业价值 + 合理保密措施。</p>` },
            { id: 'infringe', title: '侵权', html: `<p>盗窃、贿赂、违约披露、允许他人使用；反向工程与独立研发为抗辩。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '虚假宣传',
        brief: '对商品作虚假或引人误解的宣传。',
        q: [
          { stem: '"全网销量第一"无依据，构成：', options: ['虚假宣传', '商业诋毁', '混淆', '侵犯秘密'], answer: 0, explain: '虚假。' },
          { stem: '"引人误解"包括：', options: ['片面宣传、模糊表述', '只有完全虚假', '只有价格', '只有广告'], answer: 0, explain: '广义。' },
          { stem: '虚假宣传的责任主体包括：', options: ['经营者与明知应知的广告经营者', '只有经营者', '只有平台', '只有代言人'], answer: 0, explain: '连带。' }
        ],
        doc: {
          lead: '这一章讲"说假话"。',
          sections: [
            { id: 'behaviour', title: '行为', html: `<p>对性能、功能、质量、销售状况、用户评价、曾获荣誉等作虚假或引人误解宣传。</p>` },
            { id: 'liability', title: '责任', html: `<p>行政处罚 + 民事赔偿；广告经营者明知应知承担连带。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '商业诋毁',
        brief: '编造传播虚假信息损害对手商誉。',
        q: [
          { stem: '商业诋毁的对象是：', options: ['竞争对手的商誉', '消费者', '员工', '监管'], answer: 0, explain: '商誉。' },
          { stem: '对比广告的合法边界是：', options: ['客观真实、不贬低特定对手', '任意贬低', '必须指名', '禁止对比'], answer: 0, explain: '边界。' },
          { stem: '诋毁与正当批评的区别是：', options: ['是否捏造事实、是否以损害为目的', '篇幅', '渠道', '价格'], answer: 0, explain: '事实与目的。' }
        ],
        doc: {
          lead: '这一章讲"说坏话"。',
          sections: [
            { id: 'act', title: '行为', html: `<p>编造、传播虚假信息或误导性信息，损害竞争对手商业信誉、商品声誉。</p>` },
            { id: 'defense', title: '抗辩', html: `<p>内容真实、正当评论、消费者评价（非经营者）。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '互联网专条',
        brief: '流量劫持、强制跳转、恶意不兼容。',
        q: [
          { stem: '互联网专条规制的行为不包括：', options: ['插入链接强制跳转', '恶意不兼容', '流量劫持', '正常价格竞争'], answer: 3, explain: '价格竞争合法。' },
          { stem: '判断互联网竞争行为正当性的核心是：', options: ['是否损害消费者利益与竞争秩序', '技术是否先进', '公司大小', '是否免费'], answer: 0, explain: '综合。' },
          { stem: '"技术中立"能否作为抗辩？', options: ['不能当然免责，需看行为实质', '可以完全免责', '必须免责', '无意义'], answer: 0, explain: '实质判断。' }
        ],
        doc: {
          lead: '这一章讲网络竞争。',
          sections: [
            { id: 'acts', title: '行为', html: `<p>未经同意插入链接、强制目标跳转、误导欺骗强迫用户、恶意不兼容等。</p>` },
            { id: 'test', title: '判断', html: `<p>技术创新、消费者福利、竞争秩序三方面衡量。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '数据与流量',
        brief: '抓取、搬运、刷量：新类型不正当竞争。',
        q: [
          { stem: '大规模抓取平台数据并实质性替代原服务，可能构成：', options: ['不正当竞争', '合法', '侵权唯一', '犯罪唯一'], answer: 0, explain: '反法。' },
          { stem: '刷单炒信属于：', options: ['虚假宣传/不正当竞争', '合法营销', '侵犯商标', '侵犯专利'], answer: 0, explain: '虚假交易。' },
          { stem: '数据权益的保护路径包括：', options: ['反法、著作权、商业秘密、合同', '只有反法', '只有刑法', '没有保护'], answer: 0, explain: '多元。' }
        ],
        doc: {
          lead: '这一章讲数据竞争。',
          sections: [
            { id: 'types', title: '类型', html: `<p>数据抓取、流量劫持、刷量、恶意投诉。</p>` },
            { id: 'path', title: '救济', html: `<p>反法第二条（一般条款）+ 专条；著作权与商业秘密可并用。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '比较广告与有奖销售',
        brief: '营销的边界。',
        q: [
          { stem: '比较广告合法的前提是：', options: ['客观真实、不贬低对手', '必须指名道姓', '可以夸大', '禁止比较'], answer: 0, explain: '真实性。' },
          { stem: '有奖销售的违法情形不包括：', options: ['信息不明确', '欺骗性有奖', '最高奖金额超过法定上限', '正常促销'], answer: 3, explain: '正常促销合法。' },
          { stem: '抽奖式有奖销售的最高奖金额上限通常是：', options: ['5 万元', '1 万元', '10 万元', '无上限'], answer: 0, explain: '反法规定。' }
        ],
        doc: {
          lead: '这一章讲促销边界。',
          sections: [
            { id: 'compare', title: '比较广告', html: `<p>内容真实、对象可比、不贬低；虚假比较构成虚假宣传。</p>` },
            { id: 'lottery', title: '有奖销售', html: `<p>信息明确、无欺骗、最高奖 ≤ 5 万元。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '商业贿赂',
        brief: '为交易机会给好处：与折扣、佣金的界限。',
        q: [
          { stem: '商业贿赂的本质是：', options: ['以财物谋取交易机会或竞争优势', '正常折扣', '广告投入', '员工福利'], answer: 0, explain: '不正当利益。' },
          { stem: '合法折扣与佣金的要件是：', options: ['如实入账', '口头约定', '私下给付', '现金'], answer: 0, explain: '明示入账。' },
          { stem: '商业贿赂的责任包括：', options: ['行政处罚 + 民事赔偿 + 刑责（构成犯罪时）', '仅罚款', '仅道歉', '无责任'], answer: 0, explain: '多重。' }
        ],
        doc: {
          lead: '这一章讲"给好处"。',
          sections: [
            { id: 'define', title: '界定', html: `<p>经营者为销售或购买商品，给予对方单位或个人财物或其他手段贿赂。</p>` },
            { id: 'safe', title: '合法', html: `<p>明示并如实入账的折扣、佣金不属于贿赂。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '法律责任',
        brief: '民事、行政、刑事三管齐下。',
        q: [
          { stem: '不正当竞争的民事责任主要是：', options: ['停止侵害 + 赔偿', '罚款', '拘留', '吊销执照'], answer: 0, explain: '民事救济。' },
          { stem: '反法中的法定赔偿上限是：', options: ['500 万元', '300 万元', '100 万元', '50 万元'], answer: 0, explain: '2019 年修法。' },
          { stem: '侵犯商业秘密可能承担：', options: ['民事 + 行政 + 刑事', '仅民事', '仅行政', '仅刑事'], answer: 0, explain: '多重责任。' }
        ],
        doc: {
          lead: '这一章讲后果。',
          sections: [
            { id: 'civil', title: '民事', html: `<p>停止侵害、赔偿（实际损失/获利/法定 ≤500 万）。</p>` },
            { id: 'admin', title: '行政与刑事', html: `<p>罚款、没收；侵犯商业秘密罪、假冒注册商标罪等。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '与知产法的关系',
        brief: '反法是兜底，不是替代。',
        q: [
          { stem: '反法与商标法的关系是：', options: ['反法提供兜底保护', '反法优先', '商标法优先唯一', '互斥'], answer: 0, explain: '兜底。' },
          { stem: '已注册驰名商标被跨类使用，可主张：', options: ['商标法 + 反法', '只能商标法', '只能反法', '不能主张'], answer: 0, explain: '竞合。' },
          { stem: '反法一般条款的适用要求：', options: ['无特别法规定且违反诚信与商业道德', '任何情况', '只要损失', '只要竞争'], answer: 0, explain: '谦抑适用。' }
        ],
        doc: {
          lead: '这一章讲体系定位。',
          sections: [
            { id: 'relation', title: '关系', html: `<p>知产专项法优先；反法补位（仿冒、秘密、数据）。</p>` },
            { id: 'general', title: '一般条款', html: `<p>第二条：自愿、平等、公平、诚信 + 商业道德；适用需谨慎。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '复习',
        brief: '混淆—秘密—虚假—诋毁—互联网，五类行为。',
        q: [
          { stem: '反法规制的五类行为是：', options: ['混淆、商业贿赂、虚假宣传、侵犯秘密、不正当有奖销售（+诋毁、互联网）', '只有四类', '只有三类', '无分类'], answer: 0, explain: '行为类型。' },
          { stem: '最常考的是：', options: ['混淆与商业秘密', '有奖销售', '商业贿赂', '比较广告'], answer: 0, explain: '高频。' },
          { stem: '案例先判断：', options: ['行为类型与损害', '赔偿数额', '管辖', '时效'], answer: 0, explain: '顺序。' }
        ],
        doc: {
          lead: '这一章收成行为清单。',
          sections: [
            { id: 'list', title: '行为清单', html: `<p>混淆、商业贿赂、虚假宣传、侵犯商业秘密、不正当有奖销售、商业诋毁、互联网专条。</p>` },
            { id: 'tip', title: '提示', html: `<p>先归类，再找要件，最后谈抗辩与赔偿。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      }
    ]
  },

  /* ---------- 7 知识产权管理：3 → 15 ---------- */
  {
    chapters: [
      {
        title: '专利组合',
        brief: '核心 + 外围 + 防御，形成壁垒。',
        q: [
          { stem: '专利组合的主要价值是：', options: ['形成包围、提高规避成本', '省钱', '增加数量', '满足考核'], answer: 0, explain: '壁垒。' },
          { stem: '外围专利的作用是：', options: ['覆盖改进方案，防止绕开', '替代核心专利', '装饰', '降低费用'], answer: 0, explain: '包围。' },
          { stem: '防御性公开指：', options: ['公开技术使其进入公有领域，阻止他人专利', '申请专利', '保密', '许可'], answer: 0, explain: '阻断。' }
        ],
        doc: {
          lead: '这一章讲布局。',
          sections: [
            { id: 'layers', title: '三层', html: `<p>核心专利（必要技术）、外围专利（改进/应用）、防御性公开。</p>` },
            { id: 'goal', title: '目标', html: `<p>提高他人规避成本，增加谈判筹码。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: 'FTO 分析',
        brief: '自由实施：上市前先查雷。',
        q: [
          { stem: 'FTO 分析的目的是：', options: ['评估产品是否侵犯他人专利权', '申请专利', '评估商标', '计算赔偿'], answer: 0, explain: '风险排查。' },
          { stem: 'FTO 的最佳时机是：', options: ['产品研发早期与上市前', '被起诉后', '销售后', '授权后'], answer: 0, explain: '前置。' },
          { stem: '发现风险后的应对不包括：', options: ['规避设计', '无效对方专利', '获取许可', '无视风险'], answer: 3, explain: '不能无视。' }
        ],
        doc: {
          lead: '这一章讲风险排查。',
          sections: [
            { id: 'what', title: '做什么', html: `<p>检索目标市场专利、比对权利要求、评估侵权风险。</p>` },
            { id: 'action', title: '应对', html: `<p>规避设计、无效、许可、交叉许可、放弃市场。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '许可策略',
        brief: '独占、排他、普通；交叉与打包。',
        q: [
          { stem: '独占许可下：', options: ['只有被许可人可实施', '许可人可实施', '可再许可', '可转让'], answer: 0, explain: '独占。' },
          { stem: '交叉许可的价值是：', options: ['互相授权、降低诉讼与成本', '增加费用', '限制竞争唯一', '避免申请'], answer: 0, explain: '互惠。' },
          { stem: '许可合同必须写清：', options: ['范围、期限、地域、费用与违约', '只有费用', '只有期限', '只有地域'], answer: 0, explain: '核心条款。' }
        ],
        doc: {
          lead: '这一章讲许可。',
          sections: [
            { id: 'types', title: '类型', html: `<p>独占、排他、普通；交叉、打包（pool）。</p>` },
            { id: 'terms', title: '条款', html: `<p>标的、范围、地域、期限、费用（入门费+提成）、改进归属、违约与终止。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '转让与作价入股',
        brief: '权利转移的登记与估值。',
        q: [
          { stem: '专利权转让的生效要件是：', options: ['登记', '签字', '公证', '交付'], answer: 0, explain: '登记生效。' },
          { stem: '作价入股需要：', options: ['评估 + 权属清晰 + 登记', '口头约定', '公证唯一', '无需评估'], answer: 0, explain: '评估。' },
          { stem: '转让后原权利人：', options: ['丧失权利（除约定回授）', '仍可实施', '仍可许可', '仍可转让'], answer: 0, explain: '权利转移。' }
        ],
        doc: {
          lead: '这一章讲转移。',
          sections: [
            { id: 'transfer', title: '转让', html: `<p>专利权登记生效；商标核准公告；著作权合同即可。</p>` },
            { id: 'equity', title: '入股', html: `<p>评估作价、权属无争议、办理变更；注意出资不实的责任。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '价值评估',
        brief: '成本法、市场法、收益法。',
        q: [
          { stem: '知产评估最常用的方法是：', options: ['收益法', '成本法唯一', '市场法唯一', '打分法'], answer: 0, explain: '收益法。' },
          { stem: '收益法的核心是：', options: ['未来收益折现', '重置成本', '可比交易', '研发投入'], answer: 0, explain: '折现。' },
          { stem: '影响评估的关键因素不包括：', options: ['剩余保护期', '市场前景', '权利稳定性', '企业注册资本'], answer: 3, explain: '与价值无直接关系。' }
        ],
        doc: {
          lead: '这一章讲估值。',
          sections: [
            { id: 'methods', title: '三法', html: `<ul><li>成本法：重置成本 − 贬值</li><li>市场法：可比交易</li><li>收益法：未来收益折现</li></ul>` },
            { id: 'factors', title: '因素', html: `<p>剩余期限、权利稳定性、市场范围、许可费率、诉讼风险。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '质押与融资',
        brief: '拿专利去贷款：评估与处置难题。',
        q: [
          { stem: '知识产权质押融资的主要障碍是：', options: ['估值难、处置难、价值波动', '利率高', '期限短', '手续简单'], answer: 0, explain: '三大障碍。' },
          { stem: '质押登记的作用是：', options: ['设立质权（对抗第三人）', '合同生效', '权利转移', '税务'], answer: 0, explain: '登记设立。' },
          { stem: '降低质押风险的方式包括：', options: ['组合质押、保险、政府风险补偿', '只押一件', '不做评估', '口头约定'], answer: 0, explain: '组合。' }
        ],
        doc: {
          lead: '这一章讲融资。',
          sections: [
            { id: 'process', title: '流程', html: `<p>评估 → 质押合同 → 登记 → 放款 → 违约处置。</p>` },
            { id: 'risk', title: '风险', html: `<p>价值不稳定、变现渠道少；可用组合担保与风险补偿基金。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '标准化与开源',
        brief: '标准必要专利与开源许可证。',
        q: [
          { stem: '开源许可证 GPL 的核心是：', options: ['衍生作品需同样开源（传染性）', '允许闭源', '禁止商用', '无义务'], answer: 0, explain: 'copyleft。' },
          { stem: 'MIT 许可证要求：', options: ['保留版权声明与许可声明', '必须开源', '禁止商用', '必须署名作者'], answer: 0, explain: '宽松。' },
          { stem: '标准必要专利的 FRAND 承诺是：', options: ['公平合理无歧视许可', '免费', '拒绝许可', '独家'], answer: 0, explain: 'FRAND。' }
        ],
        doc: {
          lead: '这一章讲两个生态。',
          sections: [
            { id: 'oss', title: '开源', html: `<p>GPL（传染）、Apache/MIT（宽松）、BSD；注意许可证兼容性。</p>` },
            { id: 'sep', title: '标准', html: `<p>披露 + FRAND；禁令救济受限。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '诉讼策略',
        brief: '打不打、在哪打、怎么打。',
        q: [
          { stem: '选择管辖法院的考虑因素不包括：', options: ['审理经验与判赔水平', '被告所在地', '法院大楼高度', '证据便利'], answer: 2, explain: '与审理无关。' },
          { stem: '诉前禁令的申请条件是：', options: ['胜诉可能 + 损害难以弥补 + 担保', '只要起诉', '被告同意', '缴纳费用'], answer: 0, explain: '四要件。' },
          { stem: '和解的常见形式是：', options: ['交叉许可 + 付费', '只道歉', '只撤诉', '无和解'], answer: 0, explain: '商业解决。' }
        ],
        doc: {
          lead: '这一章讲诉讼决策。',
          sections: [
            { id: 'decide', title: '决策', html: `<p>商业目标、证据强度、成本、时间、公关影响。</p>` },
            { id: 'tools', title: '工具', html: `<p>管辖选择、证据保全、行为保全、无效反制、和解许可。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '风险管理',
        brief: '把知产风险纳入企业流程。',
        q: [
          { stem: '企业知产风险管理的首要环节是：', options: ['识别与分级', '诉讼', '许可', '评估'], answer: 0, explain: '识别。' },
          { stem: '员工离职的知识产权风险主要是：', options: ['商业秘密与职务成果流失', '工资', '考勤', '社保'], answer: 0, explain: '秘密与成果。' },
          { stem: '合同中知产条款应写明：', options: ['权属、许可范围、侵权担保', '只有价格', '只有期限', '只有交付'], answer: 0, explain: '条款。' }
        ],
        doc: {
          lead: '这一章讲风控。',
          sections: [
            { id: 'flow', title: '闭环', html: `<p>识别 → 评估 → 应对 → 监控；嵌入研发、采购、销售、人事流程。</p>` },
            { id: 'clause', title: '合同', html: `<p>权属约定、许可范围、侵权担保与赔偿、保密与竞业。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '复习',
        brief: '布局—风控—运营—诉讼，四块。',
        q: [
          { stem: '知产管理的四块是：', options: ['布局、风控、运营、诉讼', '申请、审查、授权、无效', '原告、被告、法院、判决', '国内、国际'], answer: 0, explain: '四块。' },
          { stem: '最容易被忽视的是：', options: ['FTO 与合同条款', '申请数量', '商标注册', '年费'], answer: 0, explain: '前置风控。' },
          { stem: '管理题的回答结构是：', options: ['目标—动作—风险—衡量', '只给结论', '只讲法条', '只讲案例'], answer: 0, explain: '结构化。' }
        ],
        doc: {
          lead: '这一章收成四块。',
          sections: [
            { id: 'four', title: '四块', html: `<ul><li>布局：组合、FTO</li><li>风控：流程、合同</li><li>运营：许可、评估、质押</li><li>诉讼：策略与和解</li></ul>` },
            { id: 'kpi', title: '衡量', html: `<p>专利质量、许可收入、诉讼成本、风险事件数。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      }
    ]
  },

  /* ---------- 8 国际知识产权：3 → 15 ---------- */
  {
    chapters: [
      {
        title: '巴黎公约',
        brief: '工业产权的"母公约"：国民待遇、优先权、独立保护。',
        q: [
          { stem: '巴黎公约的优先权期限（发明）是：', options: ['12 个月', '6 个月', '18 个月', '30 个月'], answer: 0, explain: '12 个月。' },
          { stem: '国民待遇指：', options: ['对外国人给予本国人待遇', '只保护本国人', '互惠唯一', '无差别'], answer: 0, explain: '原则。' },
          { stem: '独立保护原则指：', options: ['各国授权相互独立', '全球统一', '自动生效', '必须同步'], answer: 0, explain: '地域性。' }
        ],
        doc: {
          lead: '这一章讲工业产权基础。',
          sections: [
            { id: 'three', title: '三原则', html: `<p>国民待遇、优先权、独立保护；另有强制许可限制。</p>` },
            { id: 'scope', title: '范围', html: `<p>专利、商标、外观设计、原产地名称、反不正当竞争。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: 'PCT',
        brief: '一份申请、国际检索、30 个月进入国家。',
        q: [
          { stem: 'PCT 进入国家阶段的期限是：', options: ['30 个月', '12 个月', '18 个月', '36 个月'], answer: 0, explain: '自优先权日。' },
          { stem: 'PCT 国际阶段包括：', options: ['国际检索 + 国际公布 + 可选初步审查', '授权', '侵权判定', '无效'], answer: 0, explain: '不授权。' },
          { stem: 'PCT 的优点是：', options: ['延迟决策、统一形式、节省前期成本', '全球自动授权', '免翻译', '免费'], answer: 0, explain: '程序便利。' }
        ],
        doc: {
          lead: '这一章讲专利国际申请。',
          sections: [
            { id: 'stages', title: '两阶段', html: `<p>国际阶段（受理、检索、公布、初审）+ 国家阶段（各国授权）。</p>` },
            { id: 'benefit', title: '好处', html: `<p>30 个月缓冲、统一检索报告、降低多国申请的前期成本。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '伯尔尼公约',
        brief: '版权自动保护、国民待遇、最低保护期。',
        q: [
          { stem: '伯尔尼公约的核心原则是：', options: ['自动保护', '强制登记', '互惠唯一', '审查授权'], answer: 0, explain: '自动。' },
          { stem: '最低保护期是：', options: ['作者终生加 50 年', '发表后 20 年', '永久', '10 年'], answer: 0, explain: '最低标准。' },
          { stem: '伯尔尼公约的"独立保护"指：', options: ['各国保护独立于作品来源国', '全球统一', '只要一国保护', '自动执行'], answer: 0, explain: '独立。' }
        ],
        doc: {
          lead: '这一章讲版权国际保护。',
          sections: [
            { id: 'principles', title: '三原则', html: `<p>自动保护、国民待遇、独立保护。</p>` },
            { id: 'minimum', title: '最低标准', html: `<p>保护期、精神权利、翻译权等；各国可给予更高保护。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '马德里与海牙',
        brief: '商标与外观设计的国际注册。',
        q: [
          { stem: '马德里体系用于：', options: ['商标国际注册', '专利申请', '版权登记', '商业秘密'], answer: 0, explain: '商标。' },
          { stem: '海牙体系用于：', options: ['外观设计国际注册', '商标', '专利', '版权'], answer: 0, explain: '外观设计。' },
          { stem: '马德里国际注册需要：', options: ['原属国基础申请或注册', '任何国家', '法院判决', '公证'], answer: 0, explain: '基础要求。' }
        ],
        doc: {
          lead: '这一章讲两个注册体系。',
          sections: [
            { id: 'madrid', title: '马德里', html: `<p>一份申请、多国指定、统一续展；中心打击原则。</p>` },
            { id: 'hague', title: '海牙', html: `<p>外观设计国际注册；一件申请最多 100 项设计。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: 'TRIPS',
        brief: '把知产纳入 WTO：最低标准 + 争端解决。',
        q: [
          { stem: 'TRIPS 的特点是：', options: ['最低保护标准 + WTO 争端解决', '只适用发达国家', '无执法条款', '只保护商标'], answer: 0, explain: '双支柱。' },
          { stem: 'TRIPS 对专利的保护期要求是：', options: ['自申请日起至少 20 年', '10 年', '15 年', '永久'], answer: 0, explain: '最低标准。' },
          { stem: 'TRIPS 的弹性包括：', options: ['强制许可、平行进口、公共健康例外', '无弹性', '只能严格执行', '仅最不发达国家'], answer: 0, explain: '政策空间。' }
        ],
        doc: {
          lead: '这一章讲贸易与知产。',
          sections: [
            { id: 'content', title: '内容', html: `<p>版权、商标、地理标志、专利、集成电路布图、商业秘密、执法。</p>` },
            { id: 'flex', title: '弹性', html: `<p>多哈宣言确认公共健康弹性；强制许可与平行进口。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '跨境维权',
        brief: '在哪告、依什么、能不能执行。',
        q: [
          { stem: '跨境知产诉讼首先要确定：', options: ['管辖与准据法', '赔偿数额', '律师费用', '原告国籍'], answer: 0, explain: '两个前提。' },
          { stem: '地域性原则意味着：', options: ['权利只在授权国有效', '全球有效', '自动保护', '无需申请'], answer: 0, explain: '逐国。' },
          { stem: '判决跨境执行的主要障碍是：', options: ['承认与执行机制差异', '语言', '时差', '费用'], answer: 0, explain: '承认执行。' }
        ],
        doc: {
          lead: '这一章讲跨境诉讼。',
          sections: [
            { id: 'three', title: '三问', html: `<ol><li>哪国法院有管辖</li><li>适用哪国法</li><li>判决能否被承认执行</li></ol>` },
            { id: 'tools', title: '工具', html: `<p>仲裁（纽约公约）、海关保护、337 调查、跨境取证。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '海关保护',
        brief: '边境措施：把侵权货挡在国门。',
        q: [
          { stem: '知识产权海关保护的主要方式是：', options: ['依申请扣留与依职权扣留', '只依申请', '只依职权', '无'], answer: 0, explain: '两种。' },
          { stem: '权利人申请扣留需提供：', options: ['担保', '判决书', '公证书唯一', '合同'], answer: 0, explain: '担保。' },
          { stem: '被扣货物认定侵权后的处理是：', options: ['没收、销毁或删标', '拍卖唯一', '退还', '罚款放行'], answer: 0, explain: '法定处理。' }
        ],
        doc: {
          lead: '这一章讲边境。',
          sections: [
            { id: 'modes', title: '两种模式', html: `<p>依申请（权利人提供担保）与依职权（海关主动发现）。</p>` },
            { id: 'process', title: '流程', html: `<p>备案 → 扣留 → 认定 → 处理（没收/销毁）。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '337 调查',
        brief: '美国国际贸易委员会的"边境专利战"。',
        q: [
          { stem: '337 调查针对的是：', options: ['进口贸易中的不公平行为（含知产侵权）', '国内销售', '出口退税', '反倾销'], answer: 0, explain: '进口环节。' },
          { stem: '337 调查的救济措施包括：', options: ['排除令与停止令', '罚款唯一', '刑事处罚', '民事赔偿唯一'], answer: 0, explain: '排除/停止。' },
          { stem: '应对 337 调查的关键是：', options: ['积极应诉、证明不侵权或专利无效', '不应诉', '拖延', '和解唯一'], answer: 0, explain: '应诉。' }
        ],
        doc: {
          lead: '这一章讲美国边境程序。',
          sections: [
            { id: 'what', title: '是什么', html: `<p>ITC 依 337 条款调查进口中的不公平竞争行为，审理快、救济强。</p>` },
            { id: 'defense', title: '应对', html: `<p>不侵权抗辩、无效抗辩、规避设计、和解（ consent order）。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '国际仲裁',
        brief: '知产纠纷可否仲裁：可仲裁性与执行。',
        q: [
          { stem: '知产合同纠纷通常：', options: ['可仲裁', '不可仲裁', '只能诉讼', '只能行政'], answer: 0, explain: '合同可仲裁。' },
          { stem: '仲裁裁决的跨境执行依据是：', options: ['纽约公约', '巴黎公约', 'TRIPS', '伯尔尼'], answer: 0, explain: '纽约公约。' },
          { stem: '专利权有效性争议通常：', options: ['不宜仲裁（涉及公共政策）', '可仲裁', '必须仲裁', '无规定'], answer: 0, explain: '可仲裁性受限。' }
        ],
        doc: {
          lead: '这一章讲仲裁。',
          sections: [
            { id: 'scope', title: '范围', html: `<p>许可、转让、违约可仲裁；权利有效性多由行政/司法专属管辖。</p>` },
            { id: 'enforce', title: '执行', html: `<p>纽约公约保障承认与执行；保密与专业性是其优势。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '地域性与平行进口',
        brief: '同一商品在不同国家价格不同，能否转售？',
        q: [
          { stem: '平行进口的核心争议是：', options: ['权利用尽的地域范围', '关税', '汇率', '商标近似'], answer: 0, explain: '用尽范围。' },
          { stem: '国际用尽意味着：', options: ['首次销售后可在任何国家转售', '只在授权国用尽', '不用尽', '禁止转售'], answer: 0, explain: '国际用尽。' },
          { stem: '我国对平行进口的态度是：', options: ['依具体情形与商品状态判断', '一律允许', '一律禁止', '无规定'], answer: 0, explain: '个案。' }
        ],
        doc: {
          lead: '这一章讲用尽。',
          sections: [
            { id: 'exhaustion', title: '三种用尽', html: `<p>国内用尽、区域用尽、国际用尽。</p>` },
            { id: 'china', title: '中国实践', html: `<p>商标领域个案判断；专利与著作权倾向国内用尽。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '复习',
        brief: '三大公约 + 两个体系 + 三条维权路径。',
        q: [
          { stem: '三大基础公约是：', options: ['巴黎、伯尔尼、TRIPS', 'PCT、马德里、海牙', '纽约、华盛顿、日内瓦', '欧盟、美国、中国'], answer: 0, explain: '基础。' },
          { stem: '两个注册体系是：', options: ['马德里（商标）、海牙（外观）', 'PCT、巴黎', '伯尔尼、TRIPS', '纽约、海牙'], answer: 0, explain: '注册。' },
          { stem: '跨境维权的三条路是：', options: ['诉讼、仲裁、海关/337', '协商、调解、和解', '申请、审查、授权', '国内、国际、区域'], answer: 0, explain: '路径。' }
        ],
        doc: {
          lead: '这一章收成框架。',
          sections: [
            { id: 'map', title: '框架', html: `<p>公约（巴黎/伯尔尼/TRIPS）→ 体系（PCT/马德里/海牙）→ 维权（诉讼/仲裁/边境）。</p>` },
            { id: 'tip', title: '提示', html: `<p>先看地域（在哪有效），再看程序（怎么申请），最后看救济（怎么维权）。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      }
    ]
  },

  /* ---------- 9 知识产权诉讼：3 → 15 ---------- */
  {
    chapters: [
      {
        title: '管辖',
        brief: '技术类案件集中管辖。',
        q: [
          { stem: '专利等技术性强的案件通常由：', options: ['中级以上法院或知产法院', '基层法院', '仲裁委', '市场监管局'], answer: 0, explain: '集中管辖。' },
          { stem: '侵权行为地包括：', options: ['行为实施地与结果发生地', '只有实施地', '只有结果地', '原告住所地'], answer: 0, explain: '两类。' },
          { stem: '网络侵权案件的管辖连接点包括：', options: ['服务器所在地、被告住所地等', '只有原告地', '只有北京', '任意'], answer: 0, explain: '连接点。' }
        ],
        doc: {
          lead: '这一章讲去哪告。',
          sections: [
            { id: 'level', title: '级别', html: `<p>技术类一审集中在中院/知产法院；其他可在基层。</p>` },
            { id: 'place', title: '地域', html: `<p>被告住所地、侵权行为地（实施地、结果发生地）、网络服务器所在地。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '证据与保全',
        brief: '知产案件赢在取证。',
        q: [
          { stem: '证据保全的作用是：', options: ['固定可能灭失的侵权证据', '冻结账户', '限制人身', '查封房产'], answer: 0, explain: '固定证据。' },
          { stem: '举证妨碍规则指：', options: ['被告拒不提供其掌握的账簿，可推定原告主张成立', '被告必须举证', '原告无需举证', '法院代为取证'], answer: 0, explain: '不利推定。' },
          { stem: '时间戳/区块链存证的作用是：', options: ['证明电子数据形成时间与完整性', '替代公证唯一', '证明权属', '计算赔偿'], answer: 0, explain: '存证。' }
        ],
        doc: {
          lead: '这一章讲取证。',
          sections: [
            { id: 'tools', title: '工具', html: `<p>公证购买、时间戳、区块链、证据保全、调查令。</p>` },
            { id: 'burden', title: '举证责任', html: `<p>一般谁主张谁举证；侵权获利证据在被告手中时可适用举证妨碍。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '技术调查官',
        brief: '让懂技术的人帮法官看清事实。',
        q: [
          { stem: '技术调查官的职责是：', options: ['就技术问题提出咨询意见', '裁判', '代理', '鉴定唯一'], answer: 0, explain: '辅助。' },
          { stem: '技术鉴定与专家辅助人的区别是：', options: ['鉴定出具鉴定意见，专家辅助人出庭说明', '相同', '都无约束力', '都由法院指定'], answer: 0, explain: '定位不同。' },
          { stem: '技术调查意见的性质是：', options: ['供法官参考，不直接作为证据', '证据', '判决', '裁定'], answer: 0, explain: '参考。' }
        ],
        doc: {
          lead: '这一章讲技术事实查明。',
          sections: [
            { id: 'roles', title: '三种角色', html: `<p>技术调查官（法院内部）、鉴定人（出具意见）、专家辅助人（当事人聘请）。</p>` },
            { id: 'use', title: '作用', html: `<p>帮助理解权利要求、技术特征与等同判断。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '侵权比对',
        brief: '专利全面覆盖、著作权相似、商标混淆。',
        q: [
          { stem: '专利侵权的第一步是：', options: ['解释权利要求', '计算赔偿', '确定管辖', '取证'], answer: 0, explain: '先定范围。' },
          { stem: '著作权比对要排除：', options: ['思想、通用元素、公有领域', '独创表达', '具体情节', '结构'], answer: 0, explain: '不保护部分。' },
          { stem: '商标侵权比对的核心是：', options: ['混淆可能性', '完全相同', '价格相当', '包装相似'], answer: 0, explain: '混淆。' }
        ],
        doc: {
          lead: '这一章讲比对方法。',
          sections: [
            { id: 'patent', title: '专利', html: `<p>解释权利要求 → 技术特征逐一比对 → 全面覆盖 → 等同。</p>` },
            { id: 'other', title: '著作权/商标', html: `<p>接触+实质性相似；近似+类似+混淆。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '等同与禁止反悔',
        brief: '等同扩张保护，禁止反悔限缩。',
        q: [
          { stem: '等同判断的三要素是：', options: ['手段、功能、效果基本相同', '价格、品牌、渠道', '时间、地点、人物', '形式、内容、风格'], answer: 0, explain: '三基本。' },
          { stem: '禁止反悔原则适用于：', options: ['审查或无效程序中的限缩性陈述', '任何陈述', '庭审发言', '和解协议'], answer: 0, explain: '限缩。' },
          { stem: '捐献原则指：', options: ['说明书记载未写入权利要求的方案视为捐给公众', '捐赠', '免费许可', '放弃'], answer: 0, explain: 'dedication。' }
        ],
        doc: {
          lead: '这一章讲边界的收放。',
          sections: [
            { id: 'doctrine', title: '等同', html: `<p>扩张到"基本相同"的方案，防止简单替换规避。</p>` },
            { id: 'limit', title: '限制', html: `<p>禁止反悔、捐献原则、现有技术抗辩共同限缩。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '损害赔偿',
        brief: '四种计算 + 惩罚性赔偿。',
        q: [
          { stem: '知产赔偿的法定顺序是：', options: ['实际损失→获利→许可费→法定', '法定优先', '只看获利', '只看损失'], answer: 0, explain: '顺序。' },
          { stem: '惩罚性赔偿适用条件是：', options: ['故意且情节严重', '任何侵权', '过失', '首次'], answer: 0, explain: '主客观要件。' },
          { stem: '赔偿计算的证据难点是：', options: ['损失与获利的证明', '法律适用', '管辖', '时效'], answer: 0, explain: '举证。' }
        ],
        doc: {
          lead: '这一章讲赔多少。',
          sections: [
            { id: 'calc', title: '计算', html: `<p>实际损失 / 侵权获利 / 许可费倍数 / 法定（≤500 万）。</p>` },
            { id: 'evidence', title: '举证', html: `<p>财务账簿、销量、价格、许可合同；可申请法院调取或适用举证妨碍。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '惩罚性赔偿',
        brief: '故意 + 情节严重：1–5 倍。',
        q: [
          { stem: '惩罚性赔偿的倍数范围是：', options: ['1–5 倍', '2 倍', '10 倍', '无上限'], answer: 0, explain: '法定。' },
          { stem: '"故意"的认定考虑：', options: ['明知权利存在仍实施、收到警告后继续', '任何侵权', '过失', '不知者'], answer: 0, explain: '明知。' },
          { stem: '惩罚性赔偿的基数是：', options: ['按实际损失/获利/许可费确定的数额', '法定赔偿', '销售额', '利润'], answer: 0, explain: '基数。' }
        ],
        doc: {
          lead: '这一章讲加重。',
          sections: [
            { id: 'conditions', title: '条件', html: `<p>故意（明知+继续）+ 情节严重（重复侵权、规模化、拒不执行）。</p>` },
            { id: 'base', title: '基数', html: `<p>以补偿性赔偿数额为基数，乘以 1–5 倍。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '行为保全',
        brief: '诉前禁令：先把侵害停下来。',
        q: [
          { stem: '行为保全的四个要件是：', options: ['胜诉可能、损害难以弥补、利益平衡、担保', '起诉、立案、审理、判决', '原告、被告、法院、证据', '申请、审查、执行、复议'], answer: 0, explain: '四要件。' },
          { stem: '错误申请保全的后果是：', options: ['赔偿被申请人损失', '无责任', '罚款', '警告'], answer: 0, explain: '赔偿责任。' },
          { stem: '行为保全与财产保全的区别是：', options: ['前者制止行为，后者控制财产', '相同', '前者控制财产', '后者制止行为'], answer: 0, explain: '对象不同。' }
        ],
        doc: {
          lead: '这一章讲禁令。',
          sections: [
            { id: 'elements', title: '四要件', html: `<p>胜诉可能性、损害难以弥补、利益平衡、担保。</p>` },
            { id: 'risk', title: '风险', html: `<p>错误保全需赔偿；复议与解除机制。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '无效抗辩',
        brief: '打专利不如打无效。',
        q: [
          { stem: '被诉侵权时，被告可以：', options: ['向知产局请求宣告专利无效', '直接上诉', '拒不出庭', '要求和解唯一'], answer: 0, explain: '无效程序。' },
          { stem: '无效宣告与侵权诉讼的关系是：', options: ['可并行，法院可中止', '互斥', '必须先无效', '无效后不能诉讼'], answer: 0, explain: '并行。' },
          { stem: '现有技术抗辩与无效的区别是：', options: ['前者在侵权诉讼中直接抗辩，不改变专利效力', '相同', '前者无效专利', '后者不侵权'], answer: 0, explain: '效力不同。' }
        ],
        doc: {
          lead: '这一章讲反制。',
          sections: [
            { id: 'invalid', title: '无效', html: `<p>任何单位或个人可请求；理由为不符合授权条件。</p>` },
            { id: 'defense', title: '抗辩', html: `<p>现有技术抗辩更快捷，但不消灭专利权。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '执行',
        brief: '判决要能落地。',
        q: [
          { stem: '停止侵害判决的执行方式包括：', options: ['责令停止、罚款、拘留（拒执）', '只能罚款', '只能警告', '无措施'], answer: 0, explain: '执行措施。' },
          { stem: '赔偿判决的执行可采取：', options: ['查封、冻结、拍卖', '只能协商', '只能分期', '无措施'], answer: 0, explain: '执行。' },
          { stem: '行为保全裁定的违反后果是：', options: ['罚款、拘留，构成犯罪追刑责', '无后果', '仅警告', '仅道歉'], answer: 0, explain: '强制。' }
        ],
        doc: {
          lead: '这一章讲执行。',
          sections: [
            { id: 'measures', title: '措施', html: `<p>停止侵害、罚款、拘留、纳入失信；拒执罪。</p>` },
            { id: 'cross', title: '跨境', html: `<p>承认与执行外国判决难度大；仲裁裁决更易执行。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '跨境诉讼',
        brief: '禁诉令、平行诉讼与执行。',
        q: [
          { stem: '标准必要专利全球费率诉讼常涉及：', options: ['平行诉讼与禁诉令', '只有一国', '仲裁唯一', '行政裁决'], answer: 0, explain: '跨国。' },
          { stem: '禁诉令（anti-suit injunction）的作用是：', options: ['禁止对方在他国起诉', '禁止执行', '禁止上诉', '禁止和解'], answer: 0, explain: 'anti-suit。' },
          { stem: '跨境取证的主要途径是：', options: ['海牙取证公约、司法协助', '自行取证唯一', '黑客', '公开渠道唯一'], answer: 0, explain: '公约。' }
        ],
        doc: {
          lead: '这一章讲跨国诉讼。',
          sections: [
            { id: 'issues', title: '三个问题', html: `<p>管辖冲突、禁诉令、判决承认执行。</p>` },
            { id: 'strategy', title: '策略', html: `<p>选择有利法院、申请禁令、利用仲裁裁决的执行优势。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '复习',
        brief: '管辖—证据—比对—赔偿—执行，五段。',
        q: [
          { stem: '知产诉讼的五段是：', options: ['管辖、证据、比对、赔偿、执行', '原告、被告、法院、证据、判决', '国内、国际、区域', '立法、司法、执法'], answer: 0, explain: '五段。' },
          { stem: '最关键的环节是：', options: ['侵权比对与证据', '管辖', '执行', '时效'], answer: 0, explain: '核心。' },
          { stem: '案例题先判断：', options: ['权利基础与行为', '赔偿数额', '管辖', '时效'], answer: 0, explain: '顺序。' }
        ],
        doc: {
          lead: '这一章收成五段。',
          sections: [
            { id: 'five', title: '五段', html: `<ol><li>管辖</li><li>证据与保全</li><li>侵权比对</li><li>赔偿</li><li>执行</li></ol>` },
            { id: 'tip', title: '提示', html: `<p>先定权利与行为，再谈抗辩，最后算钱。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      }
    ]
  },

  /* ---------- 10 法考复习：3 → 8 ---------- */
  {
    chapters: [
      {
        title: '知产在法考中的位置',
        brief: '分值不大但稳定，性价比高。',
        q: [
          { stem: '知产在法考中的分值通常是：', options: ['中等偏小但稳定', '最高', '为零', '与民法相同'], answer: 0, explain: '稳定得分点。' },
          { stem: '知产复习的重点是：', options: ['著作权归属与限制、专利三性、商标显著性', '国际条约细节', '诉讼程序', '管理运营'], answer: 0, explain: '高频。' },
          { stem: '知产题最常见的设错是：', options: ['混淆三种权利的取得与期限', '数字错误', '人名错误', '年份错误'], answer: 0, explain: '概念混淆。' }
        ],
        doc: {
          lead: '这一章讲取舍。',
          sections: [
            { id: 'weight', title: '权重', html: `<p>客观题约 8–12 分，主观题偶有涉及；性价比高。</p>` },
            { id: 'focus', title: '重点', html: `<p>著作权（归属、限制）、专利（三性、侵权）、商标（显著性、混淆）。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '三法对比记忆',
        brief: '一张表记住取得、期限、判定。',
        q: [
          { stem: '三法对比表的关键列是：', options: ['取得方式、期限、判定标准', '原告、被告、法院', '国内、国外', '立法、司法'], answer: 0, explain: '三列。' },
          { stem: '保护期最长的是：', options: ['著作权（自然人终生+50 年）', '发明专利', '商标', '实用新型'], answer: 0, explain: '通常最长。' },
          { stem: '需要申请才能取得的是：', options: ['专利与商标', '著作权', '商业秘密', '邻接权'], answer: 0, explain: '申请授权。' }
        ],
        doc: {
          lead: '这一章讲对比。',
          sections: [
            { id: 'table', title: '对照', html: `<p>著作权：自动、终生+50；专利：申请、20/10/15；商标：注册、10 年可续。</p>` },
            { id: 'memory', title: '记忆', html: `<p>先记取得方式，再记期限，最后记判定公式。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '主观题答题模板',
        brief: '结论—依据—分析。',
        q: [
          { stem: '知产主观题的三段式是：', options: ['结论、依据、分析', '事实、理由、请求', '总、分、总', '问题、方法、结论'], answer: 0, explain: '结构。' },
          { stem: '答"是否侵权"时应先写：', options: ['权利类型与归属', '赔偿数额', '管辖', '时效'], answer: 0, explain: '前提。' },
          { stem: '主观题常见失分是：', options: ['只下结论不论证', '引用法条', '分析事实', '字数多'], answer: 0, explain: '论证缺失。' }
        ],
        doc: {
          lead: '这一章讲写法。',
          sections: [
            { id: 'template', title: '模板', html: `<p>结论（谁侵犯什么权）→ 依据（法条）→ 分析（要件与事实）。</p>` },
            { id: 'practice', title: '练习', html: `<p>每周两题限时手写，对照评分点。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '真题与错题',
        brief: '诊断而非刷题。',
        q: [
          { stem: '真题第一遍应：', options: ['限时做并标记不确定项', '开卷做', '只看答案', '跳过'], answer: 0, explain: '诊断。' },
          { stem: '错题本应记录：', options: ['错因与对应考点', '题目全文', '答案', '日期'], answer: 0, explain: '归因。' },
          { stem: '易错考点通常集中在：', options: ['期限与归属规则', '条约名称', '法院名称', '人名'], answer: 0, explain: '细节。' }
        ],
        doc: {
          lead: '这一章讲刷题。',
          sections: [
            { id: 'method', title: '三遍', html: `<p>诊断—补漏—提速；每遍目标不同。</p>` },
            { id: 'error', title: '错题', html: `<p>按"权利类型 + 考点"归类，每周复盘。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '心态与节奏',
        brief: '小科目也要给时间。',
        q: [
          { stem: '知产这种小科目的复习策略是：', options: ['固定时段、抓高频', '完全放弃', '全程精读', '只背条约'], answer: 0, explain: '性价比。' },
          { stem: '考前一周最该做的是：', options: ['回归错题与对比表', '学新内容', '换资料', '放松'], answer: 0, explain: '巩固。' },
          { stem: '长期备考最需要保护的是：', options: ['睡眠与运动', '社交', '娱乐', '兼职'], answer: 0, explain: '状态。' }
        ],
        doc: {
          lead: '这一章讲状态。',
          sections: [
            { id: 'rhythm', title: '节奏', html: `<p>每天固定 1 小时给知产，坚持到考前。</p>` },
            { id: 'mind', title: '心态', html: `<p>小科目不追求满分，保证不失分。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      }
    ]
  },

  /* ---------- 11 专利代理实务：3 → 8 ---------- */
  {
    chapters: [
      {
        title: '技术交底书的阅读',
        brief: '从发明人的话里提炼技术方案。',
        q: [
          { stem: '阅读技术交底书首先要找：', options: ['要解决的技术问题与方案', '发明人姓名', '公司规模', '预算'], answer: 0, explain: '问题与方案。' },
          { stem: '技术方案的核心是：', options: ['必要技术特征', '所有细节', '实施例', '附图'], answer: 0, explain: '必要特征。' },
          { stem: '与发明人沟通时最该确认：', options: ['区别现有技术的创新点', '价格', '期限', '发明人学历'], answer: 0, explain: '创新点。' }
        ],
        doc: {
          lead: '这一章讲读稿。',
          sections: [
            { id: 'read', title: '三问', html: `<ol><li>解决什么问题</li><li>用什么方案</li><li>比现有技术好在哪</li></ol>` },
            { id: 'extract', title: '提炼', html: `<p>把方案拆成技术特征，区分必要与非必要。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '检索与对比文件',
        brief: '先知道别人做了什么。',
        q: [
          { stem: '专利检索的主要目的是：', options: ['评估新颖性与创造性风险', '抄方案', '找客户', '定价'], answer: 0, explain: '风险评估。' },
          { stem: '检索要素包括：', options: ['关键词 + 分类号', '只看关键词', '只看分类号', '只看申请人'], answer: 0, explain: '组合。' },
          { stem: '最接近的现有技术通常选择：', options: ['技术领域与方案最接近的一篇', '最新的一篇', '最旧的一篇', '任意'], answer: 0, explain: '最接近。' }
        ],
        doc: {
          lead: '这一章讲检索。',
          sections: [
            { id: 'elements', title: '要素', html: `<p>关键词、IPC/CPC 分类号、申请人、时间；中外文库并用。</p>` },
            { id: 'use', title: '用途', html: `<p>判断三性风险、确定撰写策略、规避设计。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '权利要求布局',
        brief: '独权保范围，从权保退路。',
        q: [
          { stem: '独立权利要求应写入：', options: ['必要技术特征', '所有特征', '优选方案', '实施例'], answer: 0, explain: '必要特征。' },
          { stem: '从属权利要求的作用是：', options: ['进一步限定，作为审查与无效的退路', '扩大范围', '替代独权', '装饰'], answer: 0, explain: '退路。' },
          { stem: '布局时常见的错误是：', options: ['独权写太窄，无退路', '从权太多', '说明书太长', '附图太多'], answer: 0, explain: '范围过窄。' }
        ],
        doc: {
          lead: '这一章讲布局。',
          sections: [
            { id: 'structure', title: '层级', html: `<p>独权（必要特征）+ 从权（附加特征，层层递进）。</p>` },
            { id: 'strategy', title: '策略', html: `<p>独权尽量宽但要有支持；从权覆盖优选与替代方案。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '说明书撰写',
        brief: '充分公开是授权与无效的基石。',
        q: [
          { stem: '说明书应当：', options: ['清楚完整、能够实现', '尽量简略', '只写优点', '只写实施例'], answer: 0, explain: '充分公开。' },
          { stem: '实施例的作用是：', options: ['支持权利要求、证明可实现', '装饰', '凑字数', '满足格式'], answer: 0, explain: '支持。' },
          { stem: '公开不充分的后果是：', options: ['驳回或无效', '罚款', '警告', '不影响'], answer: 0, explain: '致命缺陷。' }
        ],
        doc: {
          lead: '这一章讲公开。',
          sections: [
            { id: 'content', title: '内容', html: `<p>技术领域、背景、发明内容、附图说明、具体实施方式。</p>` },
            { id: 'support', title: '支持', html: `<p>权利要求须得到说明书支持；实施例要足够。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '审查意见答复',
        brief: '争辩与修改的平衡。',
        q: [
          { stem: '答复创造性缺陷最常用的修改是：', options: ['把从权特征并入独权', '扩大范围', '删除说明书', '改申请人'], answer: 0, explain: '限缩。' },
          { stem: '修改不得：', options: ['超出原说明书和权利要求书记载的范围', '改错别字', '调整顺序', '增加从权'], answer: 0, explain: '超范围禁止。' },
          { stem: '答复的核心是：', options: ['指出区别特征与技术效果', '重复原文', '争辩审查员水平', '沉默'], answer: 0, explain: '论证。' }
        ],
        doc: {
          lead: '这一章讲答复。',
          sections: [
            { id: 'steps', title: '三步', html: `<ol><li>识别缺陷类型</li><li>决定争辩或修改</li><li>论证区别与效果</li></ol>` },
            { id: 'limit', title: '限制', html: `<p>修改不超范围；争辩要有文本依据。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '复审与无效实务',
        brief: '两条纠错通道的实操。',
        q: [
          { stem: '复审请求期限是：', options: ['收到驳回决定起 3 个月', '1 年', '6 个月', '无期限'], answer: 0, explain: '3 个月。' },
          { stem: '无效宣告的请求人可以是：', options: ['任何单位或个人', '只有权利人', '只有对手', '只有行政机关'], answer: 0, explain: '公众。' },
          { stem: '无效程序中修改权利要求：', options: ['仅限于删除、合并和技术特征限定', '可任意修改', '不可修改', '必须重写'], answer: 0, explain: '严格限制。' }
        ],
        doc: {
          lead: '这一章讲纠错。',
          sections: [
            { id: 'review', title: '复审', html: `<p>针对驳回；3 个月内请求；可修改（限于消除缺陷）。</p>` },
            { id: 'invalid', title: '无效', html: `<p>任何单位或个人；理由法定；修改方式受限。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: 'PCT 与海外申请',
        brief: '把国内申请送出去。',
        q: [
          { stem: 'PCT 国际阶段不产生：', options: ['专利权', '检索报告', '国际公布', '初步审查意见'], answer: 0, explain: '不授权。' },
          { stem: '进入国家阶段通常需：', options: ['翻译、缴费、指定国', '重新申请', '放弃国内', '公证唯一'], answer: 0, explain: '程序。' },
          { stem: '海外布局的考虑因素不包括：', options: ['目标市场、竞争对手、成本', '翻译质量', '专利审查周期', '公司注册资本'], answer: 3, explain: '与布局无关。' }
        ],
        doc: {
          lead: '这一章讲出海。',
          sections: [
            { id: 'pct', title: 'PCT', html: `<p>30 个月内进入国家阶段；翻译与费用是关键。</p>` },
            { id: 'strategy', title: '策略', html: `<p>按市场与竞争选择国家；优先权期内完成布局。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '代理师职业规范',
        brief: '保密、勤勉、利益冲突。',
        q: [
          { stem: '专利代理师的首要义务是：', options: ['保密与勤勉', '创收', '宣传', '拉客户'], answer: 0, explain: '职业义务。' },
          { stem: '代理师不得：', options: ['就同一技术方案同时代理利益冲突双方', '与发明人沟通', '检索', '撰写'], answer: 0, explain: '冲突回避。' },
          { stem: '代理师资格与律师资格：', options: ['两条独立资格线', '可互相替代', '必须先律师', '无关'], answer: 0, explain: '独立。' }
        ],
        doc: {
          lead: '这一章讲职业规范。',
          sections: [
            { id: 'duties', title: '义务', html: `<p>保密、勤勉、如实告知、利益冲突回避。</p>` },
            { id: 'liability', title: '责任', html: `<p>行业惩戒、行政处罚、民事赔偿。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      }
    ]
  },

  /* ---------- 12 考研与求职：3 → 8 ---------- */
  {
    chapters: [
      {
        title: '考研方向',
        brief: '知产法、民商法、法硕：三条路。',
        q: [
          { stem: '知产方向考研通常报考：', options: ['知产法/民商法/法硕', '刑法唯一', '国际法唯一', '法理唯一'], answer: 0, explain: '三类。' },
          { stem: '择校最应考虑：', options: ['科目、报录比与导师方向', '城市', '学费', '宿舍'], answer: 0, explain: '匹配。' },
          { stem: '知产研究的热点包括：', options: ['AI 生成内容、数据产权、SEP', '古代法制', '国际私法', '法医学'], answer: 0, explain: '前沿。' }
        ],
        doc: {
          lead: '这一章讲选择。',
          sections: [
            { id: 'paths', title: '三条', html: `<p>知产法学硕士、民商法（知产方向）、法律硕士。</p>` },
            { id: 'hot', title: '热点', html: `<p>AI 版权、数据确权、标准必要专利、惩罚性赔偿。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '专业课复习',
        brief: '原理 + 制度 + 案例。',
        q: [
          { stem: '知产专业课复习的核心是：', options: ['制度原理 + 案例分析', '背法条', '只看真题', '只看教材'], answer: 0, explain: '理解运用。' },
          { stem: '论述题的答题结构是：', options: ['概念—规范—评价', '总—分—总', '事实—理由—请求', '问题—方法—结论'], answer: 0, explain: '三层。' },
          { stem: '案例题先判断：', options: ['权利类型与归属', '赔偿数额', '管辖', '时效'], answer: 0, explain: '顺序。' }
        ],
        doc: {
          lead: '这一章讲复习。',
          sections: [
            { id: 'method', title: '三步', html: `<ol><li>搭体系</li><li>填制度</li><li>练案例</li></ol>` },
            { id: 'writing', title: '写作', html: `<p>概念准确、规范清楚、评价有据。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '英语与政治',
        brief: '公共课不能拖后腿。',
        q: [
          { stem: '英语复习最有效的是：', options: ['真题精读 + 长难句', '只背单词', '只看视频', '只做模拟'], answer: 0, explain: '真题。' },
          { stem: '政治选择题的重要性：', options: ['拉分主力', '不重要', '只背大题即可', '不用复习'], answer: 0, explain: '选择题。' },
          { stem: '作文准备的有效方式是：', options: ['形成个人模板并修改', '背范文', '临场发挥', '抄材料'], answer: 0, explain: '模板。' }
        ],
        doc: {
          lead: '这一章讲公共课。',
          sections: [
            { id: 'english', title: '英语', html: `<p>真题三遍、长难句、作文模板。</p>` },
            { id: 'politics', title: '政治', html: `<p>选择题 + 时政 + 大题框架。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '求职方向',
        brief: '律所知产团队、企业 IPR、代理机构、法院。',
        q: [
          { stem: '企业 IPR 的核心工作是：', options: ['专利挖掘、布局、风控', '诉讼', '招聘', '财务'], answer: 0, explain: '内部管理。' },
          { stem: '代理机构最看重：', options: ['技术理解与撰写能力', '外语口语', '社交', '驾驶'], answer: 0, explain: '撰写。' },
          { stem: '进入律所知产团队，通常需要：', options: ['法考 + 实习经验', '只有学历', '只有外语', '只有证书'], answer: 0, explain: '复合。' }
        ],
        doc: {
          lead: '这一章讲就业。',
          sections: [
            { id: 'roles', title: '四类岗位', html: `<p>律所、企业 IPR、代理机构、法院知产庭。</p>` },
            { id: 'prep', title: '准备', html: `<p>法考 + 专代（理工背景）+ 检索/撰写作品。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '作品集',
        brief: '检索报告 + 撰写样本 + 分析。',
        q: [
          { stem: '知产作品集最核心的是：', options: ['带权利要求对比的检索报告', '成绩单', '证书', '自荐信'], answer: 0, explain: '硬作品。' },
          { stem: '面试讲项目的结构是：', options: ['背景—工作—结果—反思', '流水账', '只讲结果', '只讲技术'], answer: 0, explain: 'STAR。' },
          { stem: '引用真实案例应：', options: ['脱敏处理', '公开信息', '随意改编', '不说明'], answer: 0, explain: '保密。' }
        ],
        doc: {
          lead: '这一章讲材料。',
          sections: [
            { id: 'kit', title: '三件套', html: `<p>检索报告、撰写样本、侵权分析（脱敏）。</p>` },
            { id: 'tell', title: '讲法', html: `<p>2 分钟：问题、做法、结果、反思。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      }
    ]
  }
]);
