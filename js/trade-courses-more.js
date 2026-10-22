/* ==========================================================
   trade-courses-more.js · 国际经济与贸易：减半标准（主干 8 / 出口 4）
   ========================================================== */

appendChapters('economics-国际经济与贸易', [
  /* 1 高等数学 +5 */
  {
    chapters: [
      { title: '极限与连续', brief: '增长与收敛的语言。',
        q: [
          { stem: 'lim(x→0)(1+x)^(1/x) 等于：', options: ['1', 'e', '0', '∞'], answer: 1, explain: '重要极限。' },
          { stem: '连续复利终值是：', options: ['Pe^{rt}', 'P(1+r)^t', 'P+rt', 'P/r'], answer: 0, explain: 'e。' },
          { stem: '函数连续要求：', options: ['极限存在且等于函数值', '可导', '单调', '有界'], answer: 0, explain: '定义。' }
        ],
        doc: { lead: '这一章复习极限。', sections: [
          { id: 'limit', title: '极限', html: `<p>两个重要极限、等价无穷小、连续与间断。</p>` },
          { id: 'use', title: '用法', html: `<p>复利、增长率、收敛速度。</p>` }
        ], refs: [] } },
      { title: '导数与最优化', brief: '弹性与最优化。',
        q: [
          { stem: '需求价格弹性大于 1 时降价会：', options: ['增加收入', '减少收入', '不变', '无法判断'], answer: 0, explain: '弹性。' },
          { stem: '利润最大化条件是：', options: ['MR = MC', 'P = AC', 'TR 最大', 'MC = 0'], answer: 0, explain: '边际。' },
          { stem: '进口关税的福利效应需要比较：', options: ['生产者剩余、消费者剩余与关税收入', '只有价格', '只有数量', '只有税收'], answer: 0, explain: '福利分解。' }
        ],
        doc: { lead: '这一章讲求导。', sections: [
          { id: 'rules', title: '求导', html: `<p>幂、指数、对数、链式；边际与弹性。</p>` },
          { id: 'opt', title: '最优化', html: `<p>一阶与二阶条件；贸易政策福利分析。</p>` }
        ], refs: [] } },
      { title: '偏导与约束优化', brief: '多变量与均衡。',
        q: [
          { stem: '拉格朗日乘子表示：', options: ['约束的影子价格', '目标值', '成本', '税率'], answer: 0, explain: '影子价格。' },
          { stem: '生产可能性边界的斜率是：', options: ['机会成本（相对价格）', '总成本', '利润', '效用'], answer: 0, explain: '机会成本。' },
          { stem: '一般均衡要求：', options: ['所有市场同时出清', '只有出口市场', '只有劳动市场', '只有货币市场'], answer: 0, explain: '一般均衡。' }
        ],
        doc: { lead: '这一章讲多变量。', sections: [
          { id: 'partial', title: '偏导', html: `<p>边际替代率、边际转换率。</p>` },
          { id: 'optimize', title: '优化', html: `<p>约束极值；贸易均衡与福利最大化。</p>` }
        ], refs: [] } },
      { title: '积分与累积量', brief: '从边际到总量。',
        q: [
          { stem: '消费者剩余可表示为：', options: ['需求曲线下方面积', '供给曲线面积', '总收益', '总成本'], answer: 0, explain: '积分。' },
          { stem: '关税的净福利损失可看作：', options: ['两块三角形面积', '矩形面积', '整块面积', '零'], answer: 0, explain: '无谓损失。' },
          { stem: '连续现金流现值用：', options: ['积分', '求和', '求导', '矩阵'], answer: 0, explain: '积分。' }
        ],
        doc: { lead: '这一章讲积分。', sections: [
          { id: 'integral', title: '积分', html: `<p>定积分与面积；由边际求总量。</p>` },
          { id: 'welfare', title: '福利', html: `<p>消费者/生产者剩余；关税的无谓损失。</p>` }
        ], refs: [] } },
      { title: '矩阵与线性模型', brief: '投入产出与多部门。',
        q: [
          { stem: '投入产出表的理论基础是：', options: ['列昂惕夫矩阵', '马尔可夫链', '博弈', '期权'], answer: 0, explain: 'Leontief。' },
          { stem: '矩阵乘法可表示：', options: ['线性变换与部门关系', '加法', '微分', '积分'], answer: 0, explain: '线性。' },
          { stem: '解线性方程组可用：', options: ['克拉默法则或消元', '求导', '积分', '概率'], answer: 0, explain: '线性代数。' }
        ],
        doc: { lead: '这一章讲线代。', sections: [
          { id: 'matrix', title: '矩阵', html: `<p>运算、逆矩阵、线性方程组。</p>` },
          { id: 'io', title: '投入产出', html: `<p>完全消耗系数；多部门贸易模型。</p>` }
        ], refs: [] } }
    ]
  },
  /* 2 微观经济学 +5 */
  {
    chapters: [
      { title: '消费者与生产者', brief: '贸易的微观基础。',
        q: [
          { stem: '消费者剩余指：', options: ['愿付价格与实际支付之差', '实际支付', '成本', '税收'], answer: 0, explain: '剩余。' },
          { stem: '生产者剩余指：', options: ['实际收入与保留价格之差', '利润唯一', '成本', '税收'], answer: 0, explain: '剩余。' },
          { stem: '贸易开放使消费者剩余：', options: ['增加（进口品价格下降）', '减少', '不变', '不确定'], answer: 0, explain: '受益。' }
        ],
        doc: { lead: '这一章讲剩余。', sections: [
          { id: 'surplus', title: '两种剩余', html: `<p>消费者剩余与生产者剩余；总福利。</p>` },
          { id: 'trade', title: '贸易效应', html: `<p>开放对两类剩余的不同影响。</p>` }
        ], refs: [] } },
      { title: '生产与成本', brief: '比较优势的成本基础。',
        q: [
          { stem: '机会成本递增意味着：', options: ['生产可能性边界凹向原点', '凸向原点', '直线', '垂直'], answer: 0, explain: '凹。' },
          { stem: '规模经济是：', options: ['长期平均成本随产量下降', '短期成本下降', '边际成本上升', '利润增加'], answer: 0, explain: '长期。' },
          { stem: '范围经济指：', options: ['多产品共同生产成本更低', '规模大', '单一产品', '外包'], answer: 0, explain: '多产品。' }
        ],
        doc: { lead: '这一章讲成本。', sections: [
          { id: 'ppf', title: '生产可能性', html: `<p>机会成本、边际转换率、比较优势。</p>` },
          { id: 'scale', title: '规模', html: `<p>规模经济与产业内贸易的基础。</p>` }
        ], refs: [] } },
      { title: '市场结构与贸易', brief: '不完全竞争下的贸易。',
        q: [
          { stem: '产业内贸易主要发生在：', options: ['要素禀赋相似的国家之间', '完全不同国家', '只有发展中国家', '只有发达国家'], answer: 0, explain: '相似国家。' },
          { stem: '倾销的构成要件包括：', options: ['低于正常价值 + 损害 + 因果', '只要低价', '只要出口', '只要补贴'], answer: 0, explain: '三要件。' },
          { stem: '战略贸易政策主张：', options: ['政府扶持战略性产业获取租金', '自由贸易唯一', '闭关', '提高关税一律'], answer: 0, explain: '战略。' }
        ],
        doc: { lead: '这一章讲结构。', sections: [
          { id: 'intra', title: '产业内贸易', html: `<p>规模经济、产品差异化、垄断竞争。</p>` },
          { id: 'policy', title: '政策', html: `<p>倾销与反倾销、补贴与反补贴、战略贸易政策。</p>` }
        ], refs: [] } },
      { title: '市场失灵与贸易', brief: '外部性与公共品。',
        q: [
          { stem: '出口外部性可能成为：', options: ['产业政策理由', '自由贸易理由', '无关', '关税理由'], answer: 0, explain: '外部性。' },
          { stem: '信息不对称在国际贸易中表现为：', options: ['质量不可观测', '价格差异', '关税', '汇率'], answer: 0, explain: '信息。' },
          { stem: '公共品供给不足需要：', options: ['集体行动或国际协调', '市场自发', '提高关税', '减少贸易'], answer: 0, explain: '协调。' }
        ],
        doc: { lead: '这一章讲失灵。', sections: [
          { id: 'externality', title: '外部性', html: `<p>学习效应、集群效应；政策干预的边界。</p>` },
          { id: 'coordination', title: '协调', html: `<p>国际公共品、标准与规则。</p>` }
        ], refs: [] } },
      { title: '博弈与贸易谈判', brief: '关税战为什么两败俱伤。',
        q: [
          { stem: '关税战属于：', options: ['囚徒困境式博弈', '零和博弈', '合作博弈', '无博弈'], answer: 0, explain: '困境。' },
          { stem: 'WTO 争端解决机制的作用是：', options: ['降低报复的不确定性', '提高关税', '取消贸易', '限制出口'], answer: 0, explain: '规则化。' },
          { stem: '重复博弈有利于：', options: ['合作', '背叛', '无均衡', '零和'], answer: 0, explain: '声誉。' }
        ],
        doc: { lead: '这一章讲博弈。', sections: [
          { id: 'game', title: '关税博弈', html: `<p>占优策略、纳什均衡、合作收益。</p>` },
          { id: 'institution', title: '制度', html: `<p>WTO、区域协定；争端解决与承诺。</p>` }
        ], refs: [] } }
    ]
  },
  /* 3 国际贸易学 +5 */
  {
    chapters: [
      { title: '比较优势', brief: '贸易的起点。',
        q: [
          { stem: '比较优势指：', options: ['机会成本较低', '绝对产量高', '技术先进', '价格低'], answer: 0, explain: '机会成本。' },
          { stem: '绝对优势与比较优势的关系是：', options: ['有绝对优势不一定有比较优势', '等价', '比较优势更强', '无关系'], answer: 0, explain: '区别。' },
          { stem: '李嘉图模型的关键假设是：', options: ['劳动是唯一要素、技术差异', '资本唯一', '规模经济', '垄断'], answer: 0, explain: '技术差异。' }
        ],
        doc: { lead: '这一章讲古典理论。', sections: [
          { id: 'absolute', title: '绝对优势', html: `<p>斯密：分工与交换。</p>` },
          { id: 'comparative', title: '比较优势', html: `<p>李嘉图：机会成本与贸易收益。</p>` }
        ], refs: [] } },
      { title: '要素禀赋', brief: 'H-O 模型。',
        q: [
          { stem: 'H-O 定理认为一国出口：', options: ['密集使用其丰裕要素的产品', '任何产品', '资本品唯一', '农产品唯一'], answer: 0, explain: '禀赋。' },
          { stem: '要素价格均等化定理说明：', options: ['贸易使要素价格趋同', '工资相同', '利率相同', '无影响'], answer: 0, explain: '趋同。' },
          { stem: '斯托尔珀-萨缪尔森定理关注：', options: ['贸易对要素收入分配的影响', '贸易量', '关税', '汇率'], answer: 0, explain: '分配。' }
        ],
        doc: { lead: '这一章讲新古典。', sections: [
          { id: 'ho', title: 'H-O', html: `<p>要素禀赋差异决定贸易模式。</p>` },
          { id: 'distribution', title: '分配', html: `<p>SS 定理、要素价格均等化；贸易中的赢家与输家。</p>` }
        ], refs: [] } },
      { title: '规模经济与产业内贸易', brief: '为什么相似国家贸易多。',
        q: [
          { stem: '产业内贸易的基础是：', options: ['规模经济与产品差异化', '要素禀赋', '技术差异', '关税'], answer: 0, explain: '规模。' },
          { stem: '克鲁格曼模型强调：', options: ['规模经济与垄断竞争', '完全竞争', '比较优势', '要素禀赋'], answer: 0, explain: '新贸易理论。' },
          { stem: '本地市场效应指：', options: ['大市场更易成为净出口国', '小市场出口多', '无影响', '关税决定'], answer: 0, explain: 'HME。' }
        ],
        doc: { lead: '这一章讲新贸易理论。', sections: [
          { id: 'scale', title: '规模经济', html: `<p>内部/外部规模经济；产品差异化。</p>` },
          { id: 'hme', title: '本地市场效应', html: `<p>需求规模影响出口结构；新经济地理。</p>` }
        ], refs: [] } },
      { title: '贸易政策工具', brief: '关税、配额、补贴。',
        q: [
          { stem: '进口关税的福利效应是：', options: ['总体净损失（小国）', '净收益', '无影响', '必然改善贸易条件'], answer: 0, explain: '无谓损失。' },
          { stem: '配额与关税的关键区别是：', options: ['租金归属（配额租）', '是否合法', '是否征税', '是否影响价格'], answer: 0, explain: '租金。' },
          { stem: '出口补贴会：', options: ['增加出口但由纳税人承担', '减少出口', '无成本', '提高福利'], answer: 0, explain: '补贴。' }
        ],
        doc: { lead: '这一章讲政策。', sections: [
          { id: 'tariff', title: '关税', html: `<p>价格效应、贸易条件、无谓损失；大国情形。</p>` },
          { id: 'ntb', title: '非关税', html: `<p>配额、许可证、技术标准、补贴、反倾销。</p>` }
        ], refs: [] } },
      { title: '区域一体化', brief: '自贸区与关税同盟。',
        q: [
          { stem: '关税同盟的静态效应是：', options: ['贸易创造与贸易转移', '只有创造', '只有转移', '无效应'], answer: 0, explain: '两效应。' },
          { stem: '自由贸易区的特点是：', options: ['成员国间免关税但各自对外关税独立', '共同对外关税', '共同货币', '共同市场'], answer: 0, explain: 'FTA。' },
          { stem: 'RCEP 的意义是：', options: ['全球最大自贸区之一', '关税同盟', '货币联盟', '政治联盟'], answer: 0, explain: '区域合作。' }
        ],
        doc: { lead: '这一章讲一体化。', sections: [
          { id: 'forms', title: '形式', html: `<p>自贸区、关税同盟、共同市场、经济联盟。</p>` },
          { id: 'effects', title: '效应', html: `<p>贸易创造/转移；福利不确定；原产地规则。</p>` }
        ], refs: [] } }
    ]
  },
  /* 4 宏观经济学 +5 */
  {
    chapters: [
      { title: '国民收入核算', brief: '开放经济的恒等式。',
        q: [
          { stem: '开放经济恒等式是：', options: ['S − I = NX', 'S = I', 'C + I = G', 'Y = C'], answer: 0, explain: '储蓄投资缺口。' },
          { stem: 'GDP 与 GNP 的区别是：', options: ['地域 vs 国民', '价格 vs 数量', '名义 vs 实际', '流量 vs 存量'], answer: 0, explain: '口径。' },
          { stem: '贸易顺差意味着：', options: ['储蓄大于投资', '投资大于储蓄', '消费过多', '税收过多'], answer: 0, explain: '恒等式。' }
        ],
        doc: { lead: '这一章讲核算。', sections: [
          { id: 'identity', title: '恒等式', html: `<p>Y = C + I + G + NX；S − I = NX。</p>` },
          { id: 'concepts', title: '概念', html: `<p>名义/实际、GDP/GNP、贸易条件。</p>` }
        ], refs: [] } },
      { title: 'IS-LM 与开放', brief: '蒙代尔-弗莱明模型。',
        q: [
          { stem: '固定汇率下资本完全流动，货币政策：', options: ['无效', '最有效', '部分有效', '不确定'], answer: 0, explain: 'M-F。' },
          { stem: '浮动汇率下财政政策效果：', options: ['被汇率升值削弱', '增强', '不变', '无影响'], answer: 0, explain: '挤出。' },
          { stem: '三元悖论指：', options: ['汇率稳定、资本流动、货币独立不可兼得', '增长、通胀、就业', '出口、投资、消费', '利率、汇率、税率'], answer: 0, explain: '不可能三角。' }
        ],
        doc: { lead: '这一章讲开放宏观。', sections: [
          { id: 'mf', title: 'M-F 模型', html: `<p>不同汇率制度与资本流动下的政策效果。</p>` },
          { id: 'trilemma', title: '三元悖论', html: `<p>政策组合选择；资本管制的作用。</p>` }
        ], refs: [] } },
      { title: '国际收支', brief: '钱怎么流进流出。',
        q: [
          { stem: '经常账户包括：', options: ['货物、服务、收益、转移', '只有货物', '只有服务', '只有资本'], answer: 0, explain: '四项。' },
          { stem: '国际收支失衡的调整方式包括：', options: ['汇率、收入、政策', '只有汇率', '只有关税', '只有储备'], answer: 0, explain: '多种。' },
          { stem: '外汇储备的作用是：', options: ['稳定汇率与偿付能力', '增加税收', '促进出口唯一', '降低利率'], answer: 0, explain: '稳定。' }
        ],
        doc: { lead: '这一章讲收支。', sections: [
          { id: 'accounts', title: '账户', html: `<p>经常账户、资本金融账户、储备资产、误差遗漏。</p>` },
          { id: 'adjust', title: '调整', html: `<p>价格（汇率）、收入、政策工具；J 曲线。</p>` }
        ], refs: [] } },
      { title: '增长与贸易', brief: '贸易对增长的作用。',
        q: [
          { stem: '出口导向增长的条件包括：', options: ['开放、基础设施、人力资本', '只有关税', '只有补贴', '只有汇率'], answer: 0, explain: '综合。' },
          { stem: '贸易对增长的渠道包括：', options: ['技术溢出、竞争、规模经济', '只有出口', '只有进口', '只有关税'], answer: 0, explain: '多渠。' },
          { stem: '全球价值链使增长更依赖：', options: ['中间品贸易与分工位置', '最终品', '关税', '汇率'], answer: 0, explain: 'GVC。' }
        ],
        doc: { lead: '这一章讲增长。', sections: [
          { id: 'channels', title: '渠道', html: `<p>技术溢出、竞争效应、规模经济、要素配置。</p>` },
          { id: 'gvc', title: 'GVC', html: `<p>增加值贸易、微笑曲线、升级路径。</p>` }
        ], refs: [] } },
      { title: '宏观政策协调', brief: '各国政策相互影响。',
        q: [
          { stem: '政策溢出的例子是：', options: ['大国加息引发资本外流', '关税', '出口', '补贴'], answer: 0, explain: '溢出。' },
          { stem: '汇率操纵指控的关键是：', options: ['是否人为压低汇率获取贸易优势', '是否浮动', '是否干预', '是否有储备'], answer: 0, explain: '认定。' },
          { stem: '国际政策协调的难点是：', options: ['激励不一致与承诺问题', '语言', '距离', '技术'], answer: 0, explain: '协调。' }
        ],
        doc: { lead: '这一章讲协调。', sections: [
          { id: 'spillover', title: '溢出', html: `<p>货币政策、财政政策的跨境影响。</p>` },
          { id: 'coordination', title: '协调', html: `<p>G20、IMF；规则与相机抉择。</p>` }
        ], refs: [] } }
    ]
  },
  /* 5 国际金融 +5 */
  {
    chapters: [
      { title: '汇率决定', brief: '货币的价格。',
        q: [
          { stem: '购买力平价认为汇率取决于：', options: ['两国物价水平之比', '利率', '贸易量', '储备'], answer: 0, explain: 'PPP。' },
          { stem: '利率平价认为：', options: ['利差反映预期汇率变动', '利率相等', '汇率固定', '无影响'], answer: 0, explain: 'UIP。' },
          { stem: '实际汇率衡量：', options: ['两国商品的相对价格', '名义汇率', '利率', '通胀'], answer: 0, explain: '竞争力。' }
        ],
        doc: { lead: '这一章讲汇率。', sections: [
          { id: 'ppp', title: '购买力平价', html: `<p>绝对/相对 PPP；巴拉萨-萨缪尔森效应。</p>` },
          { id: 'irp', title: '利率平价', html: `<p>抛补与非抛补；套利与风险溢价。</p>` }
        ], refs: [] } },
      { title: '外汇市场与衍生品', brief: '即期、远期、掉期、期权。',
        q: [
          { stem: '远期升水意味着：', options: ['远期汇率高于即期', '低于即期', '相等', '无关系'], answer: 0, explain: '升水。' },
          { stem: '企业汇率避险的常用工具是：', options: ['远期与期权', '只有即期', '只有存款', '只有贷款'], answer: 0, explain: '避险。' },
          { stem: '外汇干预的目的是：', options: ['影响汇率与预期', '增加储备唯一', '提高利率', '征收关税'], answer: 0, explain: '干预。' }
        ],
        doc: { lead: '这一章讲市场。', sections: [
          { id: 'instruments', title: '工具', html: `<p>即期、远期、掉期、期权、货币互换。</p>` },
          { id: 'hedge', title: '避险', html: `<p>自然对冲、金融对冲、成本与基差。</p>` }
        ], refs: [] } },
      { title: '国际货币体系', brief: '从金本位到浮动。',
        q: [
          { stem: '布雷顿森林体系的核心是：', options: ['美元与黄金挂钩、其他货币与美元挂钩', '黄金自由兑换', '浮动汇率', '欧元'], answer: 0, explain: '双挂钩。' },
          { stem: '特别提款权（SDR）是：', options: ['IMF 的储备资产', '一种货币', '黄金', '债券'], answer: 0, explain: 'SDR。' },
          { stem: '货币国际化需要：', options: ['可兑换、金融市场深度、信心', '只有贸易量', '只有储备', '只有汇率'], answer: 0, explain: '条件。' }
        ],
        doc: { lead: '这一章讲体系。', sections: [
          { id: 'history', title: '演变', html: `<p>金本位 → 布雷顿森林 → 牙买加体系。</p>` },
          { id: 'reform', title: '改革', html: `<p>SDR、区域金融安全网、人民币国际化。</p>` }
        ], refs: [] } },
      { title: '金融危机', brief: '危机如何发生。',
        q: [
          { stem: '货币危机的典型表现是：', options: ['资本外逃、汇率暴跌、储备耗竭', '通胀下降', '出口上升', '利率下降'], answer: 0, explain: '危机。' },
          { stem: '第一代危机模型的根源是：', options: ['基本面不兼容的固定汇率', '自我实现', '银行挤兑唯一', '外部冲击唯一'], answer: 0, explain: '基本面。' },
          { stem: '第二代模型强调：', options: ['预期自我实现与多重均衡', '基本面唯一', '银行唯一', '贸易唯一'], answer: 0, explain: '预期。' }
        ],
        doc: { lead: '这一章讲危机。', sections: [
          { id: 'models', title: '三代模型', html: `<p>基本面、自我实现、银行与资产负债表。</p>` },
          { id: 'prevent', title: '防范', html: `<p>储备、宏观审慎、资本管制、IMF 救助。</p>` }
        ], refs: [] } },
      { title: '人民币汇率与国际化', brief: '制度与改革。',
        q: [
          { stem: '我国汇率制度是：', options: ['以市场供求为基础、参考一篮子货币的有管理浮动', '完全浮动', '固定', '货币局'], answer: 0, explain: '有管理浮动。' },
          { stem: '人民币国际化的路径包括：', options: ['贸易结算、离岸市场、货币互换', '只有升值', '只有储备', '只有管制'], answer: 0, explain: '多路径。' },
          { stem: '资本项目开放的风险是：', options: ['跨境资本流动冲击', '贸易下降', '通胀上升', '就业下降'], answer: 0, explain: '冲击。' }
        ],
        doc: { lead: '这一章讲人民币。', sections: [
          { id: 'regime', title: '制度', html: `<p>中间价形成机制、波动区间、逆周期因子。</p>` },
          { id: 'intl', title: '国际化', html: `<p>结算、投资、储备货币功能；资本账户开放次序。</p>` }
        ], refs: [] } }
    ]
  },
  /* 6 国际商法 +5 */
  {
    chapters: [
      { title: '国际货物买卖合同法', brief: 'CISG 的规则。',
        q: [
          { stem: 'CISG 适用于：', options: ['营业地在不同缔约国的当事人之间的货物买卖', '所有合同', '服务贸易', '知识产权'], answer: 0, explain: '适用范围。' },
          { stem: '要约的生效采：', options: ['到达生效', '发出生效', '签字生效', '付款生效'], answer: 0, explain: '到达。' },
          { stem: '根本违约的后果是：', options: ['可宣告合同无效并索赔', '只能索赔', '只能延期', '无救济'], answer: 0, explain: 'fundamental breach。' }
        ],
        doc: { lead: '这一章讲 CISG。', sections: [
          { id: 'scope', title: '适用范围', html: `<p>营业地标准、排除事项、当事人意思自治。</p>` },
          { id: 'remedies', title: '救济', html: `<p>实际履行、损害赔偿、解除合同、减价、宽限期。</p>` }
        ], refs: [] } },
      { title: '贸易术语 Incoterms', brief: '谁付运费、谁担风险。',
        q: [
          { stem: 'FOB 下风险转移点是：', options: ['货物装船时', '目的地', '工厂', '付款时'], answer: 0, explain: '装船。' },
          { stem: 'CIF 与 FOB 的区别是：', options: ['卖方负责运费与保险', '风险转移更晚', '买方负责保险', '无区别'], answer: 0, explain: 'CIF。' },
          { stem: 'DDP 下卖方义务最重，因为：', options: ['负责进口清关与税费', '只负责运输', '只负责出口', '不负责风险'], answer: 0, explain: '完税交货。' }
        ],
        doc: { lead: '这一章讲术语。', sections: [
          { id: 'groups', title: '四组', html: `<p>E、F、C、D 组；风险与费用的分配。</p>` },
          { id: 'choose', title: '选用', html: `<p>按运输方式与责任划分选择；与合同条款一致。</p>` }
        ], refs: [] } },
      { title: '国际支付与信用证', brief: '钱货两清的工具。',
        q: [
          { stem: '信用证的核心是：', options: ['银行信用替代商业信用', '买方信用', '货物质量', '运输'], answer: 0, explain: '银行信用。' },
          { stem: 'UCP600 要求银行处理：', options: ['单据而非货物', '货物', '运输', '保险'], answer: 0, explain: '单据化。' },
          { stem: '信用证的"独立性"指：', options: ['独立于基础合同', '独立于银行', '独立于单据', '独立于国家'], answer: 0, explain: '独立抽象。' }
        ],
        doc: { lead: '这一章讲支付。', sections: [
          { id: 'methods', title: '方式', html: `<p>汇付、托收、信用证；风险与成本比较。</p>` },
          { id: 'lcs', title: '信用证', html: `<p>UCP600、单据相符、软条款风险。</p>` }
        ], refs: [] } },
      { title: '运输与保险', brief: '货在路上谁负责。',
        q: [
          { stem: '提单的性质包括：', options: ['运输合同证明、货物收据、物权凭证', '只有收据', '只有合同', '只有保险'], answer: 0, explain: '三性。' },
          { stem: '共同海损的分摊原则是：', options: ['受益方按比例分摊', '船方全担', '货方全担', '保险全担'], answer: 0, explain: '共同海损。' },
          { stem: '保险中的"一切险"通常：', options: ['承保外来风险的一般附加险', '承保所有风险', '只保战争', '只保偷窃'], answer: 0, explain: '范围。' }
        ],
        doc: { lead: '这一章讲物流。', sections: [
          { id: 'bl', title: '提单', html: `<p>记名/指示/不记名；清洁提单与批注。</p>` },
          { id: 'insurance', title: '保险', html: `<p>平安险、水渍险、一切险；共同海损与单独海损。</p>` }
        ], refs: [] } },
      { title: '争端解决', brief: '打官司还是仲裁。',
        q: [
          { stem: '国际商事仲裁的优势是：', options: ['裁决可依纽约公约执行', '更快', '更便宜', '无需律师'], answer: 0, explain: '执行。' },
          { stem: '仲裁协议的作用是：', options: ['排除法院管辖', '选择法院', '确定法律', '确定价格'], answer: 0, explain: '排除管辖。' },
          { stem: 'WTO 争端解决的特点是：', options: ['反向协商一致、准自动通过', '协商一致', '无约束力', '只调解'], answer: 0, explain: 'DSB。' }
        ],
        doc: { lead: '这一章讲解决。', sections: [
          { id: 'arbitration', title: '仲裁', html: `<p>仲裁协议、仲裁地、纽约公约、承认执行。</p>` },
          { id: 'wto', title: 'WTO', html: `<p>磋商、专家组、上诉、执行；与商业仲裁的区别。</p>` }
        ], refs: [] } }
    ]
  },
  /* 7 国际贸易实务 +5 */
  {
    chapters: [
      { title: '合同条款', brief: '品质、数量、包装、价格。',
        q: [
          { stem: '品质条款的常见表示方法是：', options: ['凭样品、凭规格、凭等级', '只有样品', '只有品牌', '只有价格'], answer: 0, explain: '多种。' },
          { stem: '溢短装条款用于：', options: ['允许数量在一定幅度内增减', '价格调整', '包装', '运输'], answer: 0, explain: '数量弹性。' },
          { stem: '中性包装的作用是：', options: ['不标明产地与品牌，适应市场', '降低成本', '提高质量', '加快运输'], answer: 0, explain: '中性。' }
        ],
        doc: { lead: '这一章讲条款。', sections: [
          { id: 'quality', title: '品质与数量', html: `<p>凭样/凭规格/凭商标；溢短装与公量。</p>` },
          { id: 'packing', title: '包装', html: `<p>运输包装与销售包装；中性包装与定牌。</p>` }
        ], refs: [] } },
      { title: '价格核算', brief: '报价里有什么。',
        q: [
          { stem: '出口报价通常包括：', options: ['成本 + 费用 + 利润', '只有成本', '只有运费', '只有利润'], answer: 0, explain: '三要素。' },
          { stem: '佣金与折扣的区别是：', options: ['佣金给中间商、折扣给买方', '相同', '佣金给买方', '折扣给中间商'], answer: 0, explain: '对象不同。' },
          { stem: '换汇成本衡量：', options: ['换取一美元所需人民币成本', '利润率', '运费', '汇率'], answer: 0, explain: '换汇成本。' }
        ],
        doc: { lead: '这一章讲报价。', sections: [
          { id: 'cost', title: '核算', html: `<p>成本、费用（运费/保险/佣金）、利润；FOB/CIF 换算。</p>` },
          { id: 'quote', title: '报价', html: `<p>佣金与折扣、换汇成本、盈亏率。</p>` }
        ], refs: [] } },
      { title: '结算方式选择', brief: '风险与成本的权衡。',
        q: [
          { stem: '汇付中的 T/T 特点是：', options: ['速度快、风险取决于预付或货到付款', '最安全', '银行担保', '单据化'], answer: 0, explain: 'T/T。' },
          { stem: '托收对卖方的风险是：', options: ['买方拒付或拒收', '银行倒闭', '汇率', '运输'], answer: 0, explain: '商业信用。' },
          { stem: '信用证对买方的主要缺点是：', options: ['费用高、单据严格', '风险大', '速度慢唯一', '无缺点'], answer: 0, explain: '成本。' }
        ],
        doc: { lead: '这一章讲结算。', sections: [
          { id: 'compare', title: '三种方式', html: `<p>汇付、托收、信用证；风险、成本、速度比较。</p>` },
          { id: 'choose', title: '组合', html: `<p>按客户信用与金额选择；部分预付 + 信用证。</p>` }
        ], refs: [] } },
      { title: '报关与报检', brief: '通关流程。',
        q: [
          { stem: '出口报关的基本单据包括：', options: ['报关单、发票、装箱单、合同', '只有发票', '只有合同', '只有提单'], answer: 0, explain: '单据。' },
          { stem: '原产地证书的作用是：', options: ['享受关税优惠', '运输', '保险', '结算'], answer: 0, explain: '原产地。' },
          { stem: '跨境电商的"清单核放"指：', options: ['以清单方式快速通关', '逐票报关', '免税', '免检'], answer: 0, explain: '便利化。' }
        ],
        doc: { lead: '这一章讲通关。', sections: [
          { id: 'customs', title: '报关', html: `<p>单据、税则归类、原产地证书。</p>` },
          { id: 'inspection', title: '检验', html: `<p>法定检验、商检、跨境电商清单核放。</p>` }
        ], refs: [] } },
      { title: '外贸函电与谈判', brief: '询盘、发盘、还盘、接受。',
        q: [
          { stem: '发盘（offer）的构成要件包括：', options: ['内容确定 + 有受约束意思', '只要报价', '只要发邮件', '只要签字'], answer: 0, explain: '要件。' },
          { stem: '还盘的法律效果是：', options: ['原发盘失效，构成新发盘', '承诺', '无影响', '合同成立'], answer: 0, explain: '反要约。' },
          { stem: '国际商务谈判的关键是：', options: ['明确利益与底线、准备替代方案', '气势', '语言', '礼品'], answer: 0, explain: 'BATNA。' }
        ],
        doc: { lead: '这一章讲沟通。', sections: [
          { id: 'letters', title: '函电', html: `<p>询盘、发盘、还盘、接受、订单；措辞与时效。</p>` },
          { id: 'negotiation', title: '谈判', html: `<p>BATNA、让步策略、跨文化差异。</p>` }
        ], refs: [] } }
    ]
  },
  /* 8 跨境电商 +5 */
  {
    chapters: [
      { title: '平台模式', brief: 'B2B、B2C、独立站。',
        q: [
          { stem: 'B2C 平台的核心资产是：', options: ['流量与履约能力', '工厂', '关税', '汇率'], answer: 0, explain: '平台。' },
          { stem: '独立站相比平台的优势是：', options: ['数据与品牌自主', '流量便宜', '无需运营', '无规则限制'], answer: 0, explain: '自主。' },
          { stem: '全托管模式的特点是：', options: ['平台负责运营与履约，商家供货', '商家全负责', '只做批发', '只做进口'], answer: 0, explain: '全托管。' }
        ],
        doc: { lead: '这一章讲模式。', sections: [
          { id: 'types', title: '类型', html: `<p>B2B、B2C、独立站、全托管/半托管。</p>` },
          { id: 'economics', title: '经济学', html: `<p>网络效应、双边市场、佣金与广告收入。</p>` }
        ], refs: [] } },
      { title: '选品与供应链', brief: '卖什么、怎么供。',
        q: [
          { stem: '跨境选品的核心是：', options: ['需求验证 + 毛利 + 合规', '低价', '跟卖', '铺货'], answer: 0, explain: '三要素。' },
          { stem: '海外仓的优势是：', options: ['缩短时效、提升体验', '降低库存', '免关税', '免退货'], answer: 0, explain: '时效。' },
          { stem: '柔性供应链应对：', options: ['小单快反', '大批量', '长周期', '单一供应商'], answer: 0, explain: '快反。' }
        ],
        doc: { lead: '这一章讲货。', sections: [
          { id: 'selection', title: '选品', html: `<p>需求、竞争、毛利、物流与合规成本。</p>` },
          { id: 'supply', title: '供应链', html: `<p>备货、海外仓、小单快反、退货处理。</p>` }
        ], refs: [] } },
      { title: '跨境支付与结汇', brief: '钱怎么回来。',
        q: [
          { stem: '跨境收款的主要风险是：', options: ['合规与资金安全', '汇率唯一', '手续费', '时效'], answer: 0, explain: '合规。' },
          { stem: '结汇指的是：', options: ['外币兑换为本币', '本币换外币', '转账', '贷款'], answer: 0, explain: '结汇。' },
          { stem: '汇率波动对跨境卖家的影响是：', options: ['直接影响毛利', '无影响', '只影响平台', '只影响物流'], answer: 0, explain: '毛利。' }
        ],
        doc: { lead: '这一章讲资金。', sections: [
          { id: 'channels', title: '渠道', html: `<p>平台收款、第三方支付、银行；费率与到账时间。</p>` },
          { id: 'risk', title: '风险', html: `<p>合规、汇率、资金冻结；对冲工具。</p>` }
        ], refs: [] } },
      { title: '合规与税务', brief: 'VAT、关税、产品合规。',
        q: [
          { stem: '欧盟 VAT 的要求是：', options: ['按销售额申报缴纳', '无需缴纳', '只交关税', '平台代缴唯一'], answer: 0, explain: 'VAT。' },
          { stem: '产品合规包括：', options: ['认证、标签、安全标准', '只有价格', '只有包装', '只有广告'], answer: 0, explain: '合规。' },
          { stem: '知识产权风险主要来自：', options: ['仿品与侵权图片', '物流', '支付', '汇率'], answer: 0, explain: 'IP。' }
        ],
        doc: { lead: '这一章讲合规。', sections: [
          { id: 'tax', title: '税务', html: `<p>VAT、关税、所得税；递延与代扣。</p>` },
          { id: 'product', title: '产品', html: `<p>认证、标签、知识产权、数据合规。</p>` }
        ], refs: [] } },
      { title: '运营与增长', brief: '流量、转化、复购。',
        q: [
          { stem: '跨境电商的转化率取决于：', options: ['listing 质量、价格、评价', '只有广告', '只有价格', '只有物流'], answer: 0, explain: '多因素。' },
          { stem: 'ACOS 衡量：', options: ['广告花费占广告销售额比例', '毛利率', '退货率', '库存周转'], answer: 0, explain: '广告效率。' },
          { stem: '提升复购的关键是：', options: ['产品质量与售后体验', '降价', '刷单', '换品'], answer: 0, explain: '体验。' }
        ],
        doc: { lead: '这一章讲运营。', sections: [
          { id: 'funnel', title: '漏斗', html: `<p>曝光 → 点击 → 转化 → 复购；各环节指标。</p>` },
          { id: 'ads', title: '广告', html: `<p>ACOS、ROI、关键词与预算；避免违规操作。</p>` }
        ], refs: [] } }
    ]
  },
  /* 9 计量经济学 +5 */
  {
    chapters: [
      { title: '一元回归', brief: '贸易数据的初步分析。',
        q: [
          { stem: 'OLS 的目标是：', options: ['最小化残差平方和', '最大化 R²', '最小化样本', '最大化显著性'], answer: 0, explain: 'OLS。' },
          { stem: '斜率含义是：', options: ['X 增加一单位 Y 的平均变化', '截距', '相关', '弹性'], answer: 0, explain: '边际。' },
          { stem: '引力模型中距离系数通常：', options: ['为负', '为正', '为零', '不显著'], answer: 0, explain: '贸易引力。' }
        ],
        doc: { lead: '这一章讲一元。', sections: [
          { id: 'ols', title: 'OLS', html: `<p>估计、拟合优度、标准误。</p>` },
          { id: 'gravity', title: '引力模型', html: `<p>GDP 与距离；贸易量的经验规律。</p>` }
        ], refs: [] } },
      { title: '多元回归', brief: '控制变量。',
        q: [
          { stem: '多元回归系数是：', options: ['控制其他变量后的偏效应', '简单相关', 'R²', '截距'], answer: 0, explain: '偏效应。' },
          { stem: '遗漏变量偏误的条件是：', options: ['遗漏变量影响 Y 且与 X 相关', '样本小', '变量多', '模型复杂'], answer: 0, explain: '混淆。' },
          { stem: '对数模型系数可解释为：', options: ['弹性', '绝对值', '概率', '比例'], answer: 0, explain: '弹性。' }
        ],
        doc: { lead: '这一章讲多元。', sections: [
          { id: 'interpret', title: '解释', html: `<p>偏效应、弹性、交互项。</p>` },
          { id: 'diagnose', title: '诊断', html: `<p>共线性、异方差、函数形式。</p>` }
        ], refs: [] } },
      { title: '假设检验与诊断', brief: '结论可靠吗。',
        q: [
          { stem: '异方差导致：', options: ['标准误有偏、推断失效', '系数有偏', 'R² 为零', '无法估计'], answer: 0, explain: '方差。' },
          { stem: '稳健标准误的作用是：', options: ['异方差下修正推断', '提高 R²', '减少样本', '消除共线'], answer: 0, explain: '稳健。' },
          { stem: '内生性来源包括：', options: ['遗漏变量、测量误差、联立性', '共线性', '异方差', '异常值'], answer: 0, explain: '三类。' }
        ],
        doc: { lead: '这一章讲诊断。', sections: [
          { id: 'test', title: '检验', html: `<p>t、F、异方差与自相关检验。</p>` },
          { id: 'endo', title: '内生性', html: `<p>来源与后果；IV 思路。</p>` }
        ], refs: [] } },
      { title: '面板与工具变量', brief: '更可信的识别。',
        q: [
          { stem: '固定效应控制：', options: ['不随时间变化的个体异质性', '时间趋势', '异方差', '共线'], answer: 0, explain: 'FE。' },
          { stem: '工具变量需满足：', options: ['相关性与外生性', '只相关', '只外生', '任意'], answer: 0, explain: '两条件。' },
          { stem: '双重差分识别：', options: ['处理组与对照组前后变化之差', '横截面差异', '时间趋势', '个体效应'], answer: 0, explain: 'DID。' }
        ],
        doc: { lead: '这一章讲识别。', sections: [
          { id: 'panel', title: '面板', html: `<p>固定/随机效应、豪斯曼检验。</p>` },
          { id: 'iv', title: 'IV 与 DID', html: `<p>2SLS、平行趋势、事件研究。</p>` }
        ], refs: [] } },
      { title: '因果推断与贸易政策评估', brief: '政策有没有用。',
        q: [
          { stem: '评估自贸区效果需要：', options: ['反事实', '相关系数', 'R²', '样本量'], answer: 0, explain: '反事实。' },
          { stem: '合成控制法适用于：', options: ['单一处理单位的政策评估', '大样本随机', '面板固定效应', '截面'], answer: 0, explain: 'SCM。' },
          { stem: '政策评估的常见威胁是：', options: ['预期效应与溢出效应', '样本大', '数据多', '模型简单'], answer: 0, explain: '威胁。' }
        ],
        doc: { lead: '这一章讲政策评估。', sections: [
          { id: 'designs', title: '方法', html: `<p>DID、合成控制、断点、IV。</p>` },
          { id: 'threat', title: '威胁', html: `<p>预期、溢出、依从性；稳健性检验。</p>` }
        ], refs: [] } }
    ]
  },
  /* 10 外贸实习 +1 */
  {
    chapters: [
      { title: '实习复盘', brief: '把跟单变成能力。',
        q: [
          { stem: '外贸实习最该留下的是：', options: ['单据与流程记录', '工牌', '照片', '评语'], answer: 0, explain: '作品。' },
          { stem: '实习日志的推荐写法是：', options: ['问题—做法—结果—反思', '流水账', '只写结论', '只写感受'], answer: 0, explain: '结构化。' },
          { stem: '面试讲项目的最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'output', title: '三件套', html: `<p>一套完整单据、一份客户开发记录、一段流程复盘。</p>` },
          { id: 'review', title: '复盘', html: `<p>每周五行；项目结束写一页总结。</p>` }
        ], refs: [] } }
    ]
  },
  /* 11 毕业论文 +1 */
  {
    chapters: [
      { title: '实证论文结构', brief: '问题—数据—识别—结论。',
        q: [
          { stem: '国贸论文的常见主题是：', options: ['贸易效应、FDI、全球价值链', '文学', '医学', '建筑'], answer: 0, explain: '主题。' },
          { stem: '实证论文的核心是：', options: ['识别策略与稳健性', '文献数量', '篇幅', '格式'], answer: 0, explain: '因果。' },
          { stem: '结论应：', options: ['与证据一致并说明局限', '夸大', '省略局限', '抄摘要'], answer: 0, explain: '节制。' }
        ],
        doc: { lead: '这一章讲写作。', sections: [
          { id: 'structure', title: '结构', html: `<p>引言、文献、数据、模型、结果、稳健性、结论。</p>` },
          { id: 'topic', title: '选题', html: `<p>RCEP、跨境电商、贸易摩擦、GVC 位置。</p>` }
        ], refs: [] } }
    ]
  },
  /* 12 考研与求职 +1 */
  {
    chapters: [
      { title: '复习规划与去向', brief: '考研与就业的时间线。',
        q: [
          { stem: '国贸考研专业课通常包括：', options: ['国际贸易学 + 国际金融（或经济学综合）', '只有数学', '只有英语', '只有会计'], answer: 0, explain: '专业课。' },
          { stem: '国贸就业的主流方向是：', options: ['外贸企业、跨境电商、银行国际业务、海关', '只有高校', '只有公务员', '只有制造业'], answer: 0, explain: '多元。' },
          { stem: '求职最加分的材料是：', options: ['实习 + 单证/数据分析能力', '证书数量', '成绩单', '社团'], answer: 0, explain: '能力。' }
        ],
        doc: { lead: '这一章讲规划。', sections: [
          { id: 'exam', title: '考研', html: `<p>数学、英语、政治、专业课；3–6 月基础，7–8 月真题，9–12 月强化。</p>` },
          { id: 'job', title: '就业', html: `<p>外贸/跨境电商/银行国际业务/海关；单证与英语是硬门槛。</p>` }
        ], refs: [] } }
    ]
  }
]);
