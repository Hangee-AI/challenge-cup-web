/* ==========================================================
   finance-courses-more.js · 金融学：减半标准（主干 8 / 出口 4）
   ========================================================== */

appendChapters('economics-金融学', [
  /* 1 高等数学 +5 */
  {
    chapters: [
      { title: '极限与连续', brief: '金融里的一切"连续复利"都靠它。',
        q: [
          { stem: 'lim(x→0)(1+x)^(1/x) 等于：', options: ['1', 'e', '0', '∞'], answer: 1, explain: '重要极限。' },
          { stem: '连续复利终值公式是：', options: ['Pe^{rt}', 'P(1+r)^t', 'P+rt', 'P/r'], answer: 0, explain: 'e。' },
          { stem: '函数连续要求：', options: ['极限存在且等于函数值', '可导', '单调', '有界'], answer: 0, explain: '定义。' }
        ],
        doc: { lead: '这一章复习极限。', sections: [
          { id: 'limit', title: '极限', html: `<p>两个重要极限、等价无穷小；连续与间断。</p>` },
          { id: 'use', title: '金融用法', html: `<p>连续复利、贴现因子、瞬时收益率。</p>` }
        ], refs: [] } },
      { title: '导数与最优化', brief: '收益最大化与风险最小化。',
        q: [
          { stem: '组合方差最小化的一阶条件是：', options: ['对权重的偏导为零', '收益最大', '方差为零', '权重相等'], answer: 0, explain: '最优化。' },
          { stem: '久期可理解为：', options: ['债券价格对利率的敏感度', '到期时间', '票息率', '信用等级'], answer: 0, explain: '一阶导。' },
          { stem: '凸性对应：', options: ['二阶导', '一阶导', '零阶', '积分'], answer: 0, explain: '曲率。' }
        ],
        doc: { lead: '这一章讲求导。', sections: [
          { id: 'rules', title: '求导', html: `<p>幂、指数、对数、链式；边际与弹性。</p>` },
          { id: 'finance', title: '金融', html: `<p>久期与凸性、边际效用、最优化。</p>` }
        ], refs: [] } },
      { title: '偏导与约束优化', brief: '多资产配置的数学。',
        q: [
          { stem: '拉格朗日乘子在组合优化中表示：', options: ['约束的影子价格', '收益', '风险', '权重'], answer: 0, explain: '影子价格。' },
          { stem: '有效前沿上的点满足：', options: ['给定风险下收益最大', '收益最大唯一', '风险最小唯一', '权重相等'], answer: 0, explain: '前沿。' },
          { stem: '无差异曲线与有效前沿相切点是：', options: ['最优组合', '最小方差组合', '市场组合', '无风险组合'], answer: 0, explain: '切点。' }
        ],
        doc: { lead: '这一章讲多变量。', sections: [
          { id: 'partial', title: '偏导', html: `<p>其他条件不变下的边际影响。</p>` },
          { id: 'optimize', title: '优化', html: `<p>约束极值、有效前沿、最优资产配置。</p>` }
        ], refs: [] } },
      { title: '积分与现值', brief: '把未来现金流折回来。',
        q: [
          { stem: '年金现值系数用于：', options: ['等额现金流的折现', '一次性支付', '永续增长', '期权'], answer: 0, explain: '年金。' },
          { stem: '永续年金现值等于：', options: ['C/r', 'C·r', 'C/r²', 'C'], answer: 0, explain: '戈登模型基础。' },
          { stem: '连续现金流的现值用：', options: ['积分', '求和', '求导', '矩阵'], answer: 0, explain: '积分。' }
        ],
        doc: { lead: '这一章讲折现。', sections: [
          { id: 'pv', title: '现值', html: `<p>单利、复利、年金、永续年金、增长永续。</p>` },
          { id: 'integral', title: '连续', html: `<p>连续现金流与积分；债券定价的连续形式。</p>` }
        ], refs: [] } },
      { title: '矩阵与线性方程组', brief: '多资产、多因子的计算工具。',
        q: [
          { stem: '组合方差用矩阵表示为：', options: ['wᵀΣw', 'wᵀw', 'Σw', 'w+w'], answer: 0, explain: '二次型。' },
          { stem: '线性回归的正规方程是：', options: ['(XᵀX)β = Xᵀy', 'Xβ = y', 'Xᵀβ = y', 'β = y'], answer: 0, explain: 'OLS。' },
          { stem: '相关系数矩阵的对角线元素是：', options: ['1', '0', '方差', '协方差'], answer: 0, explain: '自相关为 1。' }
        ],
        doc: { lead: '这一章讲线性代数。', sections: [
          { id: 'matrix', title: '矩阵', html: `<p>协方差矩阵、相关系数矩阵；正定性。</p>` },
          { id: 'solve', title: '求解', html: `<p>线性方程组、最小二乘、因子模型。</p>` }
        ], refs: [] } }
    ]
  },
  /* 2 微观经济学 +5 */
  {
    chapters: [
      { title: '消费者选择', brief: '预算与偏好。',
        q: [
          { stem: '预算线斜率等于：', options: ['价格比', '收入', '效用', '边际效用'], answer: 0, explain: '相对价格。' },
          { stem: '风险厌恶者的效用函数是：', options: ['凹函数', '凸函数', '线性', '常数'], answer: 0, explain: '边际效用递减。' },
          { stem: '替代效应与收入效应的区别是：', options: ['相对价格 vs 实际收入', '短期 vs 长期', '个体 vs 总体', '正 vs 负'], answer: 0, explain: '分解。' }
        ],
        doc: { lead: '这一章讲消费。', sections: [
          { id: 'budget', title: '预算与偏好', html: `<p>无差异曲线、边际替代率、效用最大化。</p>` },
          { id: 'risk', title: '风险偏好', html: `<p>风险厌恶、风险中性、风险偏好；确定性等价。</p>` }
        ], refs: [] } },
      { title: '生产与成本', brief: '企业为何有规模边界。',
        q: [
          { stem: '规模经济意味着：', options: ['长期平均成本随产量下降', '短期成本下降', '边际成本上升', '利润增加'], answer: 0, explain: '长期。' },
          { stem: '范围经济指：', options: ['同时生产多种产品成本更低', '规模大', '单一产品', '外包'], answer: 0, explain: '多产品。' },
          { stem: '边际成本与平均成本的关系是：', options: ['MC 穿过 AC 最低点', 'MC 恒低于 AC', 'MC 恒高于 AC', '无关'], answer: 0, explain: '几何。' }
        ],
        doc: { lead: '这一章讲生产。', sections: [
          { id: 'production', title: '生产', html: `<p>边际报酬递减、规模报酬；成本曲线。</p>` },
          { id: 'scope', title: '范围', html: `<p>范围经济与多元化经营；金融集团的逻辑。</p>` }
        ], refs: [] } },
      { title: '市场结构', brief: '竞争、垄断与金融业。',
        q: [
          { stem: '银行业常见的市场结构是：', options: ['寡头垄断', '完全竞争', '完全垄断', '垄断竞争'], answer: 0, explain: '少数大行。' },
          { stem: '垄断厂商定价会：', options: ['高于边际成本', '等于边际成本', '低于边际成本', '等于平均成本'], answer: 0, explain: '加成。' },
          { stem: '进入壁垒包括：', options: ['牌照、资本要求、网点', '价格', '广告', '服务'], answer: 0, explain: '壁垒。' }
        ],
        doc: { lead: '这一章讲结构。', sections: [
          { id: 'types', title: '四种结构', html: `<p>完全竞争、垄断竞争、寡头、垄断。</p>` },
          { id: 'finance', title: '金融业', html: `<p>牌照壁垒、规模经济、网络效应。</p>` }
        ], refs: [] } },
      { title: '市场失灵与监管', brief: '为什么金融要监管。',
        q: [
          { stem: '金融外部性的典型是：', options: ['系统性风险与挤兑', '广告', '手续费', '利率'], answer: 0, explain: '负外部性。' },
          { stem: '信息不对称导致的典型问题是：', options: ['逆向选择与道德风险', '通胀', '失业', '汇率'], answer: 0, explain: '信息。' },
          { stem: '存款保险的作用是：', options: ['防止挤兑', '提高利率', '增加利润', '降低资本'], answer: 0, explain: '稳定。' }
        ],
        doc: { lead: '这一章讲失灵。', sections: [
          { id: 'externality', title: '外部性', html: `<p>系统性风险、传染、挤兑。</p>` },
          { id: 'regulation', title: '监管', html: `<p>准入、资本充足、存款保险、消费者保护。</p>` }
        ], refs: [] } },
      { title: '博弈基础', brief: '策略互动与均衡。',
        q: [
          { stem: '纳什均衡指：', options: ['给定对方策略无人愿单方改变', '总收益最大', '合作', '零和'], answer: 0, explain: '均衡。' },
          { stem: '囚徒困境说明：', options: ['个体理性可能导致集体非理性', '合作必然', '无均衡', '零和'], answer: 0, explain: '困境。' },
          { stem: '信号传递的例子是：', options: ['企业分红显示质量', '广告', '降价', '并购'], answer: 0, explain: '信号。' }
        ],
        doc: { lead: '这一章讲博弈。', sections: [
          { id: 'games', title: '基本概念', html: `<p>策略、支付、纳什均衡、重复博弈。</p>` },
          { id: 'info', title: '信息', html: `<p>信号、筛选、道德风险；金融中的声誉机制。</p>` }
        ], refs: [] } }
    ]
  },
  /* 3 金融学原理 +5 */
  {
    chapters: [
      { title: '货币与利率', brief: '资金的价格。',
        q: [
          { stem: '名义利率与实际利率的关系是：', options: ['费雪方程 i ≈ r + π', '相等', '无关', 'i = r − π'], answer: 0, explain: '费雪。' },
          { stem: '利率上升，债券价格：', options: ['下降', '上升', '不变', '无关'], answer: 0, explain: '反向。' },
          { stem: '货币的职能不包括：', options: ['价值尺度', '流通手段', '贮藏手段', '生产手段'], answer: 3, explain: '非生产。' }
        ],
        doc: { lead: '这一章讲货币。', sections: [
          { id: 'money', title: '货币', html: `<p>职能、层次、货币需求。</p>` },
          { id: 'rate', title: '利率', html: `<p>现值、到期收益率、期限结构。</p>` }
        ], refs: [] } },
      { title: '金融市场体系', brief: '直接融资与间接融资。',
        q: [
          { stem: '一级市场与二级市场的区别是：', options: ['发行 vs 流通', '股票 vs 债券', '国内 vs 国外', '机构 vs 个人'], answer: 0, explain: '发行/交易。' },
          { stem: '间接融资的典型是：', options: ['银行贷款', '股票发行', '债券发行', '众筹'], answer: 0, explain: '银行中介。' },
          { stem: '市场有效性的意义是：', options: ['价格反映信息', '价格永远错', '无法投资', '内幕有效'], answer: 0, explain: 'EMH。' }
        ],
        doc: { lead: '这一章讲市场。', sections: [
          { id: 'structure', title: '结构', html: `<p>货币市场/资本市场、一级/二级、场内/场外。</p>` },
          { id: 'efficiency', title: '效率', html: `<p>弱式、半强式、强式；异象。</p>` }
        ], refs: [] } },
      { title: '风险与收益', brief: '金融学的第一性原理。',
        q: [
          { stem: '风险溢价是：', options: ['预期收益减无风险利率', '无风险利率', '通胀率', '税率'], answer: 0, explain: '溢价。' },
          { stem: '标准差衡量：', options: ['总风险', '系统性风险', '信用风险', '流动性风险'], answer: 0, explain: '总风险。' },
          { stem: '夏普比率等于：', options: ['(Rp−Rf)/σp', 'Rp/σp', 'σp/Rp', 'Rp−Rf'], answer: 0, explain: '风险调整收益。' }
        ],
        doc: { lead: '这一章讲风险。', sections: [
          { id: 'return', title: '收益', html: `<p>持有期收益、年化、几何与算术平均。</p>` },
          { id: 'risk', title: '风险', html: `<p>方差、标准差、系统性/非系统性；夏普比率。</p>` }
        ], refs: [] } },
      { title: '资产定价入门', brief: '价格是怎么定出来的。',
        q: [
          { stem: 'DCF 估值的核心是：', options: ['未来现金流折现', '成本加成', '比较价格', '随机'], answer: 0, explain: '折现。' },
          { stem: '无套利定价的基本思想是：', options: ['相同现金流应有相同价格', '价格随机', '成本决定', '需求决定'], answer: 0, explain: '一价定律。' },
          { stem: '风险中性定价使用：', options: ['风险中性概率', '实际概率', '主观概率', '历史频率'], answer: 0, explain: '测度变换。' }
        ],
        doc: { lead: '这一章讲定价。', sections: [
          { id: 'dcf', title: 'DCF', html: `<p>现金流、折现率、终值；相对估值法。</p>` },
          { id: 'noarb', title: '无套利', html: `<p>一价定律、风险中性测度、复制组合。</p>` }
        ], refs: [] } },
      { title: '金融监管', brief: '监管架构与工具。',
        q: [
          { stem: '宏观审慎政策的目标是：', options: ['防范系统性风险', '控制物价', '促进出口', '增加税收'], answer: 0, explain: '系统风险。' },
          { stem: '资本充足率要求的作用是：', options: ['吸收损失、限制杠杆', '提高利润', '降低利率', '增加存款'], answer: 0, explain: '资本缓冲。' },
          { stem: '消费者保护的核心是：', options: ['信息披露与适当性管理', '提高利率', '限制竞争', '国有化'], answer: 0, explain: '保护。' }
        ],
        doc: { lead: '这一章讲监管。', sections: [
          { id: 'framework', title: '框架', html: `<p>微观审慎（机构）+ 宏观审慎（系统）；分业与混业。</p>` },
          { id: 'tools', title: '工具', html: `<p>资本、流动性、压力测试、消费者保护。</p>` }
        ], refs: [] } }
    ]
  },
  /* 4 宏观经济学 +5 */
  {
    chapters: [
      { title: '国民收入核算', brief: 'GDP 与缺口。',
        q: [
          { stem: '支出法 GDP 包括：', options: ['C+I+G+NX', '工资+利润', '消费+储蓄', '投资+税收'], answer: 0, explain: '四部门。' },
          { stem: 'GDP 缺口指：', options: ['潜在产出与实际产出之差', '通胀缺口', '贸易缺口', '财政缺口'], answer: 0, explain: '产出缺口。' },
          { stem: '名义与实际 GDP 的区别是：', options: ['是否剔除价格因素', '是否含出口', '是否含政府', '是否含投资'], answer: 0, explain: '价格。' }
        ],
        doc: { lead: '这一章讲核算。', sections: [
          { id: 'methods', title: '核算', html: `<p>生产法、收入法、支出法；恒等式。</p>` },
          { id: 'gap', title: '缺口', html: `<p>潜在产出、产出缺口、通胀与失业的关联。</p>` }
        ], refs: [] } },
      { title: 'IS-LM 与政策', brief: '利率、产出与政策效果。',
        q: [
          { stem: '财政政策的挤出效应指：', options: ['政府支出推高利率抑制私人投资', '政府支出减少', '税收增加', '出口下降'], answer: 0, explain: '挤出。' },
          { stem: '货币政策传导渠道不包括：', options: ['利率', '信贷', '资产价格', '人口'], answer: 3, explain: '人口不是渠道。' },
          { stem: '流动性陷阱下货币政策：', options: ['效果有限', '效果最强', '无效力', '必然紧缩'], answer: 0, explain: '陷阱。' }
        ],
        doc: { lead: '这一章讲政策。', sections: [
          { id: 'islm', title: 'IS-LM', html: `<p>产品与货币市场均衡；政策乘数。</p>` },
          { id: 'transmission', title: '传导', html: `<p>利率、信贷、资产价格、汇率、预期。</p>` }
        ], refs: [] } },
      { title: '通胀与失业', brief: '菲利普斯曲线。',
        q: [
          { stem: '短期菲利普斯曲线表明：', options: ['通胀与失业此消彼长', '同向', '无关', '长期有效'], answer: 0, explain: '替代。' },
          { stem: '自然失业率包括：', options: ['摩擦性与结构性失业', '周期性失业', '需求不足', '全部'], answer: 0, explain: '自然率。' },
          { stem: '通胀对债权人的影响是：', options: ['不利', '有利', '无影响', '不确定'], answer: 0, explain: '实际利率下降。' }
        ],
        doc: { lead: '这一章讲两大问题。', sections: [
          { id: 'phillips', title: '曲线', html: `<p>短期替代、长期垂直、预期调整。</p>` },
          { id: 'cost', title: '成本', html: `<p>菜单成本、再分配、不确定性。</p>` }
        ], refs: [] } },
      { title: '开放经济', brief: '汇率与资本流动。',
        q: [
          { stem: '本币贬值通常：', options: ['促进出口、抑制进口', '抑制出口', '无影响', '减少外汇储备'], answer: 0, explain: '汇率。' },
          { stem: '蒙代尔不可能三角指：', options: ['汇率稳定、资本自由流动、货币政策独立不可兼得', '增长、通胀、就业', '出口、投资、消费', '利率、汇率、税率'], answer: 0, explain: '三元悖论。' },
          { stem: '国际收支平衡表包括：', options: ['经常账户与资本金融账户', '只有贸易', '只有资本', '只有储备'], answer: 0, explain: '两大账户。' }
        ],
        doc: { lead: '这一章讲开放。', sections: [
          { id: 'fx', title: '汇率', html: `<p>决定因素、贬值影响、汇率制度。</p>` },
          { id: 'trilemma', title: '三元悖论', html: `<p>政策组合的选择；资本管制的作用。</p>` }
        ], refs: [] } },
      { title: '增长与周期', brief: '长期趋势与短期波动。',
        q: [
          { stem: '索洛模型强调：', options: ['资本、劳动与技术', '货币', '汇率', '税率'], answer: 0, explain: '增长核算。' },
          { stem: '经济周期的典型阶段是：', options: ['复苏、繁荣、衰退、萧条', '春夏秋冬', '投资、消费、出口', '通胀、通缩'], answer: 0, explain: '四阶段。' },
          { stem: '稳定化政策的目标是：', options: ['熨平波动', '扩大政府', '减少税收', '提高汇率'], answer: 0, explain: '逆周期。' }
        ],
        doc: { lead: '这一章讲长期与短期。', sections: [
          { id: 'growth', title: '增长', html: `<p>索洛模型、TFP、制度与人力资本。</p>` },
          { id: 'cycle', title: '周期', html: `<p>冲击来源、传导机制、逆周期政策。</p>` }
        ], refs: [] } }
    ]
  },
  /* 5 统计学 +5 */
  {
    chapters: [
      { title: '描述统计', brief: '收益率的分布。',
        q: [
          { stem: '金融收益率常呈现：', options: ['尖峰厚尾', '标准正态', '均匀', '指数'], answer: 0, explain: '厚尾。' },
          { stem: '几何平均收益适用于：', options: ['多期复合收益', '单期', '横截面', '风险'], answer: 0, explain: '复合。' },
          { stem: '偏度为负意味着：', options: ['左尾更长（大跌风险）', '右尾长', '对称', '无风险'], answer: 0, explain: '左偏。' }
        ],
        doc: { lead: '这一章讲描述。', sections: [
          { id: 'moments', title: '矩', html: `<p>均值、方差、偏度、峰度；厚尾与极端值。</p>` },
          { id: 'return', title: '收益', html: `<p>算术/几何平均、年化、对数收益。</p>` }
        ], refs: [] } },
      { title: '抽样与推断', brief: '估计与置信区间。',
        q: [
          { stem: '标准误随样本量：', options: ['减小', '增大', '不变', '先增后减'], answer: 0, explain: 'σ/√n。' },
          { stem: '95% 置信区间的含义是：', options: ['重复抽样约 95% 覆盖真值', '真值概率', '正确率', '显著性'], answer: 0, explain: '覆盖率。' },
          { stem: '中心极限定理要求：', options: ['大样本', '总体正态', '方差已知', '小样本'], answer: 0, explain: 'CLT。' }
        ],
        doc: { lead: '这一章讲推断。', sections: [
          { id: 'sampling', title: '抽样', html: `<p>抽样分布、标准误、大数定律。</p>` },
          { id: 'estimate', title: '估计', html: `<p>点估计、区间估计、bootstrap。</p>` }
        ], refs: [] } },
      { title: '假设检验', brief: '策略是否真的有效。',
        q: [
          { stem: 'p 值表示：', options: ['原假设下出现当前结果的概率', '原假设为真概率', '结论正确率', '效应大小'], answer: 0, explain: '条件概率。' },
          { stem: '多重检验会导致：', options: ['假阳性增加', '假阴性增加', '无影响', '样本减少'], answer: 0, explain: '数据窥探。' },
          { stem: '第一类错误是：', options: ['弃真', '取伪', '样本偏差', '计算错误'], answer: 0, explain: 'α。' }
        ],
        doc: { lead: '这一章讲检验。', sections: [
          { id: 'logic', title: '逻辑', html: `<p>H0/H1、显著性、单双侧、功效。</p>` },
          { id: 'multiple', title: '多重检验', html: `<p>数据窥探偏差；Bonferroni、FDR。</p>` }
        ], refs: [] } },
      { title: '回归分析', brief: '因子与解释力。',
        q: [
          { stem: '回归 R² 表示：', options: ['解释的方差比例', '因果强度', '显著性', '样本量'], answer: 0, explain: '拟合。' },
          { stem: '遗漏变量偏误的条件是：', options: ['遗漏变量影响 Y 且与 X 相关', '样本小', '变量多', '模型复杂'], answer: 0, explain: '混淆。' },
          { stem: '异方差会导致：', options: ['标准误有偏', '系数有偏', 'R² 为零', '无法估计'], answer: 0, explain: '推断失效。' }
        ],
        doc: { lead: '这一章讲回归。', sections: [
          { id: 'ols', title: 'OLS', html: `<p>系数解释、拟合优度、残差诊断。</p>` },
          { id: 'issue', title: '问题', html: `<p>共线性、异方差、内生性。</p>` }
        ], refs: [] } },
      { title: '时间序列', brief: '波动率与预测。',
        q: [
          { stem: '波动率聚集说明：', options: ['方差随时间变化（ARCH 效应）', '方差恒定', '均值恒定', '无相关'], answer: 0, explain: 'ARCH。' },
          { stem: '单位根检验用于：', options: ['判断平稳性', '检验均值', '检验方差', '检验相关'], answer: 0, explain: 'ADF。' },
          { stem: 'GARCH 模型刻画：', options: ['条件方差随时间变化', '均值', '趋势', '季节'], answer: 0, explain: '波动率。' }
        ],
        doc: { lead: '这一章讲时序。', sections: [
          { id: 'stationary', title: '平稳', html: `<p>自相关、单位根、差分。</p>` },
          { id: 'vol', title: '波动率', html: `<p>ARCH/GARCH、VaR、回测。</p>` }
        ], refs: [] } }
    ]
  },
  /* 6 公司金融 +5 */
  {
    chapters: [
      { title: '资本预算', brief: 'NPV 说了算。',
        q: [
          { stem: 'NPV 大于零意味着：', options: ['项目增加股东价值', '亏损', '无影响', '风险高'], answer: 0, explain: '净现值。' },
          { stem: 'IRR 的缺陷是：', options: ['多重解与再投资假设', '无法计算', '不看时间', '不看风险'], answer: 0, explain: '缺陷。' },
          { stem: '回收期法的缺点是：', options: ['忽略时间价值与期后现金流', '太复杂', '需折现', '不考虑风险'], answer: 0, explain: '粗略。' }
        ],
        doc: { lead: '这一章讲投资决策。', sections: [
          { id: 'npv', title: 'NPV', html: `<p>现金流预测、折现率、增量现金流。</p>` },
          { id: 'alternatives', title: '其他指标', html: `<p>IRR、回收期、盈利指数；各自的缺陷。</p>` }
        ], refs: [] } },
      { title: '资本成本', brief: 'WACC 与前缀。',
        q: [
          { stem: 'WACC 是：', options: ['债务与权益成本的加权平均', '贷款利率', '股利率', '通胀率'], answer: 0, explain: '加权。' },
          { stem: 'CAPM 中 β 衡量：', options: ['系统性风险', '总风险', '信用风险', '流动性风险'], answer: 0, explain: '系统风险。' },
          { stem: '税盾使债务成本：', options: ['实际降低', '升高', '不变', '无关'], answer: 0, explain: '利息抵税。' }
        ],
        doc: { lead: '这一章讲成本。', sections: [
          { id: 'wacc', title: 'WACC', html: `<p>债务成本、权益成本、权重；边际与历史。</p>` },
          { id: 'capm', title: 'CAPM', html: `<p>β 估计、风险溢价、无风险利率选择。</p>` }
        ], refs: [] } },
      { title: '资本结构', brief: '借多少合适。',
        q: [
          { stem: 'MM 定理（无税）认为：', options: ['资本结构不影响企业价值', '负债越多越好', '权益越多越好', '无关税'], answer: 0, explain: '无关性。' },
          { stem: '权衡理论强调：', options: ['税盾收益与财务困境成本的平衡', '只有税盾', '只有破产', '无关'], answer: 0, explain: '权衡。' },
          { stem: '优序融资理论认为企业偏好：', options: ['内部资金 → 债务 → 股权', '股权优先', '债务优先', '随机'], answer: 0, explain: '啄食顺序。' }
        ],
        doc: { lead: '这一章讲结构。', sections: [
          { id: 'mm', title: 'MM 定理', html: `<p>无税与有税情形；套利证明。</p>` },
          { id: 'theories', title: '理论', html: `<p>权衡理论、优序融资、代理成本。</p>` }
        ], refs: [] } },
      { title: '股利政策', brief: '分红还是回购。',
        q: [
          { stem: '股利无关论的前提是：', options: ['无税无摩擦', '有税', '有代理成本', '有信号'], answer: 0, explain: 'MM。' },
          { stem: '股票回购相比分红的优势是：', options: ['税务与信号灵活性', '成本低', '必须执行', '无影响'], answer: 0, explain: '灵活。' },
          { stem: '股利信号理论认为：', options: ['分红变化传递盈利预期', '分红无关', '分红越多越差', '信号无效'], answer: 0, explain: '信号。' }
        ],
        doc: { lead: '这一章讲分配。', sections: [
          { id: 'policy', title: '政策', html: `<p>剩余股利、固定股利、低正常加额外。</p>` },
          { id: 'signals', title: '信号与税', html: `<p>股利信号、客户效应、回购替代。</p>` }
        ], refs: [] } },
      { title: '营运资本', brief: '现金、存货、应收账款。',
        q: [
          { stem: '现金转换周期等于：', options: ['存货天数 + 应收天数 − 应付天数', '应收 − 应付', '存货 + 应付', '现金 + 存货'], answer: 0, explain: 'CCC。' },
          { stem: '收紧信用政策的代价是：', options: ['销量下降', '坏账增加', '现金减少', '利润下降'], answer: 0, explain: '权衡。' },
          { stem: '营运资本管理的目标是：', options: ['流动性与收益的平衡', '现金最多', '存货最少', '应付最长'], answer: 0, explain: '平衡。' }
        ],
        doc: { lead: '这一章讲短期。', sections: [
          { id: 'ccc', title: '现金周期', html: `<p>存货、应收、应付周转天数；现金缺口。</p>` },
          { id: 'policy', title: '政策', html: `<p>信用政策、存货管理、短期融资。</p>` }
        ], refs: [] } }
    ]
  },
  /* 7 投资学 +5 */
  {
    chapters: [
      { title: '组合理论', brief: '分散化的数学。',
        q: [
          { stem: '马科维茨有效前沿的性质是：', options: ['给定风险下收益最高', '收益最高唯一', '风险最低唯一', '权重相等'], answer: 0, explain: '前沿。' },
          { stem: '相关系数越低，分散化效果：', options: ['越好', '越差', '不变', '无关'], answer: 0, explain: '分散。' },
          { stem: '加入无风险资产后的前沿是：', options: ['直线（资本市场线）', '曲线', '点', '抛物线'], answer: 0, explain: 'CML。' }
        ],
        doc: { lead: '这一章讲组合。', sections: [
          { id: 'markowitz', title: '马科维茨', html: `<p>均值-方差、协方差、有效前沿。</p>` },
          { id: 'cml', title: 'CML', html: `<p>无风险资产与切点组合；夏普比率最大化。</p>` }
        ], refs: [] } },
      { title: 'CAPM 与因子', brief: 'β 与多因子。',
        q: [
          { stem: 'CAPM 认为预期收益由什么决定？', options: ['β', '标准差', '规模', '市盈率'], answer: 0, explain: '系统风险。' },
          { stem: 'Fama-French 三因子包括：', options: ['市场、规模、价值', '市场、动量、质量', '规模、价值、动量', '市场、行业、风格'], answer: 0, explain: '三因子。' },
          { stem: 'α 表示：', options: ['超额收益（模型未解释部分）', 'β', '波动率', '相关性'], answer: 0, explain: 'Alpha。' }
        ],
        doc: { lead: '这一章讲定价模型。', sections: [
          { id: 'capm', title: 'CAPM', html: `<p>证券市场线、β 估计、假设与批评。</p>` },
          { id: 'factors', title: '多因子', html: `<p>Fama-French、动量、质量；因子投资。</p>` }
        ], refs: [] } },
      { title: '债券定价', brief: '久期与信用。',
        q: [
          { stem: '债券价格与到期收益率：', options: ['反向', '同向', '无关', '相等'], answer: 0, explain: '折现。' },
          { stem: '久期越长，利率风险：', options: ['越大', '越小', '不变', '无关'], answer: 0, explain: '敏感度。' },
          { stem: '信用利差扩大意味着：', options: ['信用风险上升', '无风险利率上升', '流动性改善', '通胀下降'], answer: 0, explain: '利差。' }
        ],
        doc: { lead: '这一章讲债券。', sections: [
          { id: 'pricing', title: '定价', html: `<p>到期收益率、即期利率、远期利率。</p>` },
          { id: 'risk', title: '风险', html: `<p>久期、凸性、信用利差、违约回收。</p>` }
        ], refs: [] } },
      { title: '股票估值', brief: '绝对与相对。',
        q: [
          { stem: '戈登模型假设：', options: ['股利固定增长', '股利不变', '无股利', '增长无限'], answer: 0, explain: '永续增长。' },
          { stem: 'P/E 估值的局限是：', options: ['盈利波动与可比性', '无法计算', '不考虑增长', '不考虑风险'], answer: 0, explain: '局限。' },
          { stem: '自由现金流估值优于股利模型之处是：', options: ['适用于不分红公司', '更简单', '更保守', '无需折现'], answer: 0, explain: '适用性。' }
        ],
        doc: { lead: '这一章讲估值。', sections: [
          { id: 'ddm', title: '股利折现', html: `<p>戈登模型、多阶段增长。</p>` },
          { id: 'multiples', title: '相对估值', html: `<p>P/E、P/B、EV/EBITDA；可比公司选择。</p>` }
        ], refs: [] } },
      { title: '绩效评价', brief: '赚的是运气还是能力。',
        q: [
          { stem: '夏普比率衡量：', options: ['单位总风险的超额收益', '单位系统风险', '绝对收益', '最大回撤'], answer: 0, explain: '总风险。' },
          { stem: '特雷诺比率使用：', options: ['β 作为风险度量', '标准差', '最大回撤', '换手率'], answer: 0, explain: '系统风险。' },
          { stem: '归因分析回答：', options: ['收益来自哪里', '风险多大', '是否合法', '收费多少'], answer: 0, explain: '来源。' }
        ],
        doc: { lead: '这一章讲评价。', sections: [
          { id: 'ratios', title: '指标', html: `<p>夏普、特雷诺、信息比率、最大回撤。</p>` },
          { id: 'attribution', title: '归因', html: `<p>资产配置、选股、择时；生存者偏差。</p>` }
        ], refs: [] } }
    ]
  },
  /* 8 金融衍生品 +5 */
  {
    chapters: [
      { title: '远期与期货', brief: '锁定未来价格。',
        q: [
          { stem: '远期与期货的关键区别是：', options: ['是否标准化与场内交易', '是否交割', '是否有标的', '是否有价格'], answer: 0, explain: '标准化。' },
          { stem: '期货的逐日盯市意味着：', options: ['每日结算盈亏', '到期一次结算', '不结算', '只算手续费'], answer: 0, explain: 'mark-to-market。' },
          { stem: '基差是：', options: ['现货价减期货价', '期货价减现货价', '两合约价差', '利率差'], answer: 0, explain: '基差。' }
        ],
        doc: { lead: '这一章讲远期期货。', sections: [
          { id: 'forward', title: '远期', html: `<p>定价、交割、对手方风险。</p>` },
          { id: 'futures', title: '期货', html: `<p>保证金、逐日结算、基差与套保。</p>` }
        ], refs: [] } },
      { title: '期权与定价', brief: '权利而非义务。',
        q: [
          { stem: '看涨期权买方的最大损失是：', options: ['权利金', '无限', '标的价', '行权价'], answer: 0, explain: '有限。' },
          { stem: 'Black-Scholes 的关键假设不包括：', options: ['波动率恒定', '无套利', '连续交易', '存在交易成本'], answer: 3, explain: '无摩擦。' },
          { stem: '隐含波动率是：', options: ['由期权价格反推的波动率', '历史波动率', '预测波动率', '无风险利率'], answer: 0, explain: '反推。' }
        ],
        doc: { lead: '这一章讲期权。', sections: [
          { id: 'payoff', title: '损益', html: `<p>看涨/看跌、实值虚值、到期损益图。</p>` },
          { id: 'pricing', title: '定价', html: `<p>二叉树、BS 公式、隐含波动率、波动率微笑。</p>` }
        ], refs: [] } },
      { title: '希腊字母', brief: '风险敞口的分解。',
        q: [
          { stem: 'Delta 衡量：', options: ['标的价格变动对期权价格的影响', '时间衰减', '波动率敏感', '利率敏感'], answer: 0, explain: '一阶。' },
          { stem: 'Theta 通常为负说明：', options: ['时间流逝损耗期权价值', '波动率上升', '利率上升', '标的上行'], answer: 0, explain: '时间价值。' },
          { stem: 'Vega 衡量：', options: ['波动率敏感度', '时间敏感', '利率敏感', '价格敏感'], answer: 0, explain: '波动率。' }
        ],
        doc: { lead: '这一章讲风险参数。', sections: [
          { id: 'greeks', title: '五个希腊字母', html: `<p>Delta、Gamma、Theta、Vega、Rho。</p>` },
          { id: 'hedge', title: '对冲', html: `<p>Delta 中性、Gamma 风险、动态对冲成本。</p>` }
        ], refs: [] } },
      { title: '套期保值', brief: '把不想承担的风险转移。',
        q: [
          { stem: '套保比率决定：', options: ['对冲头寸与现货的比例', '手续费', '保证金', '到期日'], answer: 0, explain: '比率。' },
          { stem: '交叉套保的风险是：', options: ['基差风险', '信用风险', '操作风险', '法律风险'], answer: 0, explain: '基差。' },
          { stem: '套保会计的作用是：', options: ['减少利润波动', '免税', '提高杠杆', '降低保证金'], answer: 0, explain: '会计匹配。' }
        ],
        doc: { lead: '这一章讲套保。', sections: [
          { id: 'ratio', title: '比率', html: `<p>最小方差套保比率、基差风险。</p>` },
          { id: 'practice', title: '实务', html: `<p>套保会计、效果评估、过度套保的风险。</p>` }
        ], refs: [] } },
      { title: '结构化产品', brief: '把期权打包成理财。',
        q: [
          { stem: '雪球产品的核心风险是：', options: ['敲入后的下跌暴露', '利率风险', '汇率风险', '信用风险唯一'], answer: 0, explain: '敲入。' },
          { stem: '结构性存款的本质是：', options: ['存款 + 衍生品', '纯存款', '纯理财', '保险'], answer: 0, explain: '组合。' },
          { stem: '投资者适当性管理要求：', options: ['产品风险与投资者能力匹配', '人人可买', '只卖给机构', '禁止销售'], answer: 0, explain: '适当性。' }
        ],
        doc: { lead: '这一章讲产品。', sections: [
          { id: 'types', title: '类型', html: `<p>保本/非保本、自动赎回、双向鲨鱼鳍。</p>` },
          { id: 'risk', title: '风险', html: `<p>敲入敲出、流动性、对手方；适当性管理。</p>` }
        ], refs: [] } }
    ]
  },
  /* 9 商业银行管理 +5 */
  {
    chapters: [
      { title: '资产负债管理', brief: '期限与利率的匹配。',
        q: [
          { stem: '利率敏感性缺口为正时，利率上升：', options: ['净利息收入增加', '减少', '不变', '不确定'], answer: 0, explain: '缺口。' },
          { stem: '期限错配的风险是：', options: ['流动性风险与利率风险', '信用风险唯一', '操作风险', '声誉风险'], answer: 0, explain: '错配。' },
          { stem: 'ALM 的目标是：', options: ['收益与风险的平衡', '规模最大', '存款最多', '贷款最多'], answer: 0, explain: '平衡。' }
        ],
        doc: { lead: '这一章讲 ALM。', sections: [
          { id: 'gap', title: '缺口', html: `<p>利率敏感性缺口、重定价缺口。</p>` },
          { id: 'liquidity', title: '流动性', html: `<p>流动性覆盖率、净稳定资金比例。</p>` }
        ], refs: [] } },
      { title: '信贷风险', brief: '不良从哪来。',
        q: [
          { stem: '不良贷款率等于：', options: ['不良贷款/贷款总额', '贷款/资产', '拨备/贷款', '资本/资产'], answer: 0, explain: 'NPL。' },
          { stem: '信用评级的作用是：', options: ['量化违约概率', '确定利率唯一', '监管要求', '营销'], answer: 0, explain: '评级。' },
          { stem: '拨备覆盖率衡量：', options: ['损失准备对不良贷款的覆盖', '资本充足', '流动性', '盈利'], answer: 0, explain: '拨备。' }
        ],
        doc: { lead: '这一章讲信用风险。', sections: [
          { id: 'metrics', title: '指标', html: `<p>NPL、拨备覆盖率、迁徙率、集中度。</p>` },
          { id: 'model', title: '模型', html: `<p>评分卡、PD/LGD/EAD、压力测试。</p>` }
        ], refs: [] } },
      { title: '资本管理', brief: '巴塞尔协议的逻辑。',
        q: [
          { stem: '资本充足率等于：', options: ['资本/风险加权资产', '资本/总资产', '存款/贷款', '拨备/贷款'], answer: 0, explain: 'RWA。' },
          { stem: '核心一级资本主要是：', options: ['普通股与留存收益', '次级债', '存款', '拨备'], answer: 0, explain: 'CET1。' },
          { stem: '杠杆率的作用是：', options: ['限制表内外杠杆', '提高利润', '降低资本', '增加贷款'], answer: 0, explain: '杠杆。' }
        ],
        doc: { lead: '这一章讲资本。', sections: [
          { id: 'basel', title: '巴塞尔', html: `<p>三大支柱、风险加权资产、缓冲资本。</p>` },
          { id: 'manage', title: '管理', html: `<p>资本规划、压力测试、分红约束。</p>` }
        ], refs: [] } },
      { title: '中间业务', brief: '不占资本的收入。',
        q: [
          { stem: '中间业务的特点是：', options: ['不占用或较少占用资本', '风险最高', '收益固定', '不需牌照'], answer: 0, explain: '轻资本。' },
          { stem: '理财业务的转型方向是：', options: ['净值化、打破刚兑', '保本保收益', '资金池', '期限错配'], answer: 0, explain: '资管新规。' },
          { stem: '托管业务的收入来源是：', options: ['托管费', '利差', '投资收益', '手续费分成'], answer: 0, explain: '服务费。' }
        ],
        doc: { lead: '这一章讲中间业务。', sections: [
          { id: 'types', title: '类型', html: `<p>结算、托管、理财、投行、银行卡。</p>` },
          { id: 'trend', title: '趋势', html: `<p>轻资本转型、净值化、代销与投顾。</p>` }
        ], refs: [] } },
      { title: '数字银行', brief: '网点之外。',
        q: [
          { stem: '数字银行的核心优势是：', options: ['低成本获客与运营', '网点多', '资本足', '利率高'], answer: 0, explain: '成本。' },
          { stem: '开放银行的关键是：', options: ['API 与数据共享', '网点扩张', '利率战', '并购'], answer: 0, explain: '开放。' },
          { stem: '数字风控的主要挑战是：', options: ['数据质量与模型风险', '客户少', '利率低', '监管松'], answer: 0, explain: '模型。' }
        ],
        doc: { lead: '这一章讲转型。', sections: [
          { id: 'model', title: '模式', html: `<p>直销银行、互联网银行、开放银行。</p>` },
          { id: 'risk', title: '风险', html: `<p>模型风险、数据合规、算法歧视。</p>` }
        ], refs: [] } }
    ]
  },
  /* 10 金融数据分析 +1 */
  {
    chapters: [
      { title: '数据工作流', brief: '从行情到结论。',
        q: [
          { stem: '金融数据分析的第一步是：', options: ['明确问题与指标', '建模', '画图', '写报告'], answer: 0, explain: '问题。' },
          { stem: '可复现分析要求：', options: ['代码与数据可追溯', '只交报告', '手工计算', '截图'], answer: 0, explain: 'reproducible。' },
          { stem: '常用工具组合是：', options: ['Python/R + 数据库 + 可视化', '只有 Excel', '只有 SPSS', '纸笔'], answer: 0, explain: '工具链。' }
        ],
        doc: { lead: '这一章讲流程。', sections: [
          { id: 'flow', title: '五步', html: `<p>问题 → 取数 → 清洗 → 分析 → 呈现。</p>` },
          { id: 'habit', title: '习惯', html: `<p>脚本化、版本控制、文档化；结果可复现。</p>` }
        ], refs: [] } }
    ]
  },
  /* 11 实习 +1 */
  {
    chapters: [
      { title: '实习复盘', brief: '把经历变成作品。',
        q: [
          { stem: '实习最该留下的是：', options: ['作品与流程记录', '工牌', '照片', '评语'], answer: 0, explain: '可展示。' },
          { stem: '实习日志的推荐写法是：', options: ['问题—做法—结果—反思', '流水账', '只写结论', '只写感受'], answer: 0, explain: '结构化。' },
          { stem: '面试讲项目的最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'output', title: '三件套', html: `<p>研究报告、模型/数据表、流程复盘（脱敏）。</p>` },
          { id: 'review', title: '复盘', html: `<p>每周五行：做了什么、遇到什么、怎么解决、学到什么。</p>` }
        ], refs: [] } }
    ]
  },
  /* 12 考研与求职 +1 */
  {
    chapters: [
      { title: '复习规划与去向', brief: '考研与就业的时间线。',
        q: [
          { stem: '金融考研专业课通常是：', options: ['金融学综合（货币银行+公司金融+投资）', '只有数学', '只有英语', '只有会计'], answer: 0, explain: '431。' },
          { stem: '金融就业的主流方向是：', options: ['银行、券商、基金、保险', '只有银行', '只有高校', '只有公务员'], answer: 0, explain: '多元。' },
          { stem: '求职最加分的材料是：', options: ['实习 + 可复现的分析报告', '证书数量', '成绩单', '社团'], answer: 0, explain: '作品。' }
        ],
        doc: { lead: '这一章讲规划。', sections: [
          { id: 'exam', title: '考研', html: `<p>数学、英语、政治、431；3–6 月基础，7–8 月真题，9–12 月强化。</p>` },
          { id: 'job', title: '就业', html: `<p>银行/券商/基金/保险/监管；实习与建模能力是加分项。</p>` }
        ], refs: [] } }
    ]
  }
]);
