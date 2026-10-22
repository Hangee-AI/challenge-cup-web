/* ==========================================================
   econ-courses-more.js · 经济学：减半标准（主干 8 章 / 出口 4 章）
   --------------------------------------------------------
   9 门主干各补 5 章（3→8），3 门出口各补 1 章（3→4）。
   ========================================================== */

appendChapters('economics-经济学', [
  /* 1 高等数学 +5 */
  {
    chapters: [
      { title: '极限与连续', brief: '经济学的语言：变化与趋近。',
        q: [
          { stem: 'lim(x→0)(1+x)^(1/x) 等于：', options: ['1', 'e', '0', '∞'], answer: 1, explain: '重要极限。' },
          { stem: '函数在一点连续要求：', options: ['极限存在且等于函数值', '可导', '单调', '有界'], answer: 0, explain: '定义。' },
          { stem: '边际分析的基础是：', options: ['导数', '积分', '矩阵', '概率'], answer: 0, explain: '增量之比。' }
        ],
        doc: { lead: '这一章复习极限。', sections: [
          { id: 'limit', title: '极限', html: `<p>两个重要极限；等价无穷小；连续性判断。</p>` },
          { id: 'use', title: '用处', html: `<p>复利、连续增长、边际与弹性都靠极限。</p>` }
        ], refs: [] } },
      { title: '导数与最优化', brief: '利润最大化就是一阶条件为零。',
        q: [
          { stem: '利润最大化的一阶条件是：', options: ['MR = MC', 'P = AC', 'TR 最大', 'MC = 0'], answer: 0, explain: '边际相等。' },
          { stem: '二阶条件要求：', options: ['二阶导小于零（极大）', '二阶导大于零', '一阶导为零', '无要求'], answer: 0, explain: '凹函数。' },
          { stem: '弹性定义为：', options: ['(dQ/dP)(P/Q)', 'dQ/dP', 'dP/dQ', 'Q/P'], answer: 0, explain: '相对变化之比。' }
        ],
        doc: { lead: '这一章讲求导与优化。', sections: [
          { id: 'rules', title: '求导', html: `<p>幂、指数、对数、链式法则；边际与弹性。</p>` },
          { id: 'opt', title: '最优化', html: `<p>一阶条件 + 二阶条件；约束最优化用拉格朗日。</p>` }
        ], refs: [] } },
      { title: '偏导与约束优化', brief: '多变量下的最优选择。',
        q: [
          { stem: '拉格朗日乘子的经济含义是：', options: ['约束放松一单位带来的目标增量（影子价格）', '成本', '税率', '利润'], answer: 0, explain: '影子价格。' },
          { stem: '效用最大化条件是：', options: ['MUx/Px = MUy/Py', 'MUx = MUy', 'Px = Py', 'MUx·Px = MUy·Py'], answer: 0, explain: '每元边际效用相等。' },
          { stem: '等产量线与等成本线相切表示：', options: ['成本最小化的要素组合', '利润最大', '收益最大', '无意义'], answer: 0, explain: '切点。' }
        ],
        doc: { lead: '这一章讲多变量优化。', sections: [
          { id: 'partial', title: '偏导', html: `<p>偏导即其他条件不变下的边际影响。</p>` },
          { id: 'lagrange', title: '拉格朗日', html: `<p>约束极值；乘子即影子价格，常用于消费者与生产者理论。</p>` }
        ], refs: [] } },
      { title: '积分与动态', brief: '把边际累加成总量。',
        q: [
          { stem: '消费者剩余可表示为：', options: ['需求曲线下方的面积', '供给曲线面积', '总收益', '总成本'], answer: 0, explain: '积分。' },
          { stem: '定积分用于：', options: ['由边际函数求总量', '求导', '解方程', '求概率'], answer: 0, explain: '累积。' },
          { stem: '连续复利公式是：', options: ['A = Pe^{rt}', 'A = P(1+r)^t', 'A = P+rt', 'A = P/r'], answer: 0, explain: 'e 的作用。' }
        ],
        doc: { lead: '这一章讲积分。', sections: [
          { id: 'integral', title: '积分', html: `<p>不定积分与定积分；由边际求总量。</p>` },
          { id: 'app', title: '应用', html: `<p>消费者剩余、资本现值、连续复利。</p>` }
        ], refs: [] } },
      { title: '矩阵与线性方程组', brief: '多部门、多市场的计算工具。',
        q: [
          { stem: '矩阵乘法可表示：', options: ['线性变换与投入产出关系', '加法', '微分', '积分'], answer: 0, explain: '线性。' },
          { stem: '克拉默法则用于：', options: ['解线性方程组', '求导', '积分', '概率'], answer: 0, explain: '行列式。' },
          { stem: '投入产出表的理论基础是：', options: ['列昂惕夫矩阵', '马尔可夫链', '博弈', '期权'], answer: 0, explain: 'Leontief。' }
        ],
        doc: { lead: '这一章讲线代基础。', sections: [
          { id: 'matrix', title: '矩阵运算', html: `<p>加法、乘法、逆矩阵；解线性方程组。</p>` },
          { id: 'io', title: '投入产出', html: `<p>部门间消耗关系；完全消耗系数。</p>` }
        ], refs: [] } }
    ]
  },
  /* 2 微观经济学 +5 */
  {
    chapters: [
      { title: '消费者选择', brief: '预算约束下的效用最大化。',
        q: [
          { stem: '预算线斜率的绝对值等于：', options: ['价格比 Px/Py', '收入', '效用', '边际效用'], answer: 0, explain: '相对价格。' },
          { stem: '替代效应与收入效应的区别是：', options: ['相对价格变化 vs 实际收入变化', '短期 vs 长期', '个体 vs 总体', '正 vs 负'], answer: 0, explain: '希克斯分解。' },
          { stem: '吉芬商品的特点是：', options: ['价格上升需求增加', '价格上升需求减少', '无需求', '需求无限'], answer: 0, explain: '收入效应压倒替代效应。' }
        ],
        doc: { lead: '这一章讲消费。', sections: [
          { id: 'budget', title: '预算与偏好', html: `<p>预算线、无差异曲线、边际替代率。</p>` },
          { id: 'effects', title: '效应分解', html: `<p>替代效应与收入效应；正常品、低档品、吉芬品。</p>` }
        ], refs: [] } },
      { title: '生产与成本', brief: '投入产出与成本曲线。',
        q: [
          { stem: '边际报酬递减意味着：', options: ['增加一单位投入带来的产出增量下降', '总产出下降', '成本下降', '规模报酬递减'], answer: 0, explain: '短期规律。' },
          { stem: '平均成本与边际成本的关系是：', options: ['MC 穿过 AC 的最低点', 'MC 始终低于 AC', 'MC 始终高于 AC', '无关'], answer: 0, explain: '几何关系。' },
          { stem: '规模经济指：', options: ['长期平均成本随产量下降', '短期成本下降', '边际成本上升', '利润增加'], answer: 0, explain: '长期。' }
        ],
        doc: { lead: '这一章讲生产。', sections: [
          { id: 'production', title: '生产函数', html: `<p>短期与长期；边际报酬递减与规模报酬。</p>` },
          { id: 'cost', title: '成本', html: `<p>固定/可变、平均/边际；成本曲线的形状。</p>` }
        ], refs: [] } },
      { title: '市场结构', brief: '竞争、垄断、寡头。',
        q: [
          { stem: '完全竞争厂商长期利润为：', options: ['零（正常利润）', '正', '负', '无限'], answer: 0, explain: '自由进出。' },
          { stem: '垄断厂商的定价：', options: ['高于边际成本（加成）', '等于边际成本', '低于边际成本', '等于平均成本'], answer: 0, explain: '市场势力。' },
          { stem: '寡头市场的典型特征是：', options: ['相互依存与策略互动', '价格接受', '无进入障碍', '产品同质唯一'], answer: 0, explain: '博弈。' }
        ],
        doc: { lead: '这一章讲结构。', sections: [
          { id: 'types', title: '四种', html: `<p>完全竞争、垄断竞争、寡头、垄断。</p>` },
          { id: 'power', title: '市场势力', html: `<p>加成定价、进入壁垒、策略行为。</p>` }
        ], refs: [] } },
      { title: '一般均衡与福利', brief: '所有市场同时出清。',
        q: [
          { stem: '帕累托最优指：', options: ['无法在不损害他人的情况下改善某人', '收入平等', '利润最大', '价格最低'], answer: 0, explain: '效率。' },
          { stem: '第一福利定理说明：', options: ['完全竞争均衡是帕累托最优', '市场必然失灵', '政府应干预', '垄断最优'], answer: 0, explain: '看不见的手。' },
          { stem: '第二福利定理强调：', options: ['分配与效率可分离（通过再分配）', '效率优先', '公平优先', '无法分离'], answer: 0, explain: '再分配。' }
        ],
        doc: { lead: '这一章讲效率。', sections: [
          { id: 'ge', title: '一般均衡', html: `<p>埃奇沃思盒、契约曲线、相对价格。</p>` },
          { id: 'welfare', title: '福利', html: `<p>帕累托效率、两个福利定理、社会无差异曲线。</p>` }
        ], refs: [] } },
      { title: '市场失灵', brief: '外部性、公共品、信息不对称。',
        q: [
          { stem: '负外部性导致：', options: ['市场产量高于社会最优', '产量过低', '价格过低', '无影响'], answer: 0, explain: '过度生产。' },
          { stem: '公共品的特征是：', options: ['非竞争性与非排他性', '竞争性', '排他性', '稀缺'], answer: 0, explain: '两性。' },
          { stem: '逆向选择发生在：', options: ['交易前信息不对称', '交易后', '无信息', '完全信息'], answer: 0, explain: '柠檬市场。' }
        ],
        doc: { lead: '这一章讲失灵。', sections: [
          { id: 'externality', title: '外部性', html: `<p>庇古税、科斯定理、排污权交易。</p>` },
          { id: 'info', title: '信息', html: `<p>逆向选择、道德风险、信号与筛选。</p>` }
        ], refs: [] } }
    ]
  },
  /* 3 政治经济学 +5 */
  {
    chapters: [
      { title: '商品与价值', brief: '使用价值与价值的二重性。',
        q: [
          { stem: '商品的二因素是：', options: ['使用价值与价值', '价格与成本', '供给与需求', '具体与抽象'], answer: 0, explain: '二重性。' },
          { stem: '价值量由什么决定？', options: ['社会必要劳动时间', '个别劳动时间', '供求', '成本'], answer: 0, explain: '社会必要。' },
          { stem: '具体劳动与抽象劳动的关系是：', options: ['同一劳动的两个方面', '两种劳动', '先后关系', '无关'], answer: 0, explain: '二重性。' }
        ],
        doc: { lead: '这一章讲商品。', sections: [
          { id: 'dual', title: '二重性', html: `<p>使用价值/价值；具体劳动/抽象劳动。</p>` },
          { id: 'value', title: '价值量', html: `<p>社会必要劳动时间；劳动生产率与价值量成反比。</p>` }
        ], refs: [] } },
      { title: '剩余价值', brief: '劳动与资本的分离。',
        q: [
          { stem: '剩余价值来源于：', options: ['雇佣工人的剩余劳动', '流通', '资本自身', '技术进步唯一'], answer: 0, explain: '劳动。' },
          { stem: '绝对剩余价值与相对剩余价值的区别是：', options: ['延长工时 vs 提高生产率', '前者更先进', '后者更剥削', '无区别'], answer: 0, explain: '两种方式。' },
          { stem: '资本有机构成是：', options: ['不变资本与可变资本之比', '固定与流动', '利润与工资', '投资与消费'], answer: 0, explain: 'c/v。' }
        ],
        doc: { lead: '这一章讲剩余价值。', sections: [
          { id: 'origin', title: '来源', html: `<p>劳动力商品的特殊使用价值；必要劳动与剩余劳动。</p>` },
          { id: 'forms', title: '两种形式', html: `<p>绝对剩余价值与相对剩余价值；超额剩余价值。</p>` }
        ], refs: [] } },
      { title: '资本积累', brief: '扩大再生产的逻辑与后果。',
        q: [
          { stem: '资本积累的源泉是：', options: ['剩余价值', '储蓄', '借贷', '政府投资'], answer: 0, explain: '剩余价值资本化。' },
          { stem: '相对过剩人口指：', options: ['相对于资本需要而言的失业人口', '绝对失业', '自愿失业', '摩擦失业'], answer: 0, explain: '产业后备军。' },
          { stem: '资本积聚与资本集中的区别是：', options: ['单个资本增大 vs 多个资本合并', '前者更快', '后者更慢', '无区别'], answer: 0, explain: '两种途径。' }
        ],
        doc: { lead: '这一章讲积累。', sections: [
          { id: 'accumulation', title: '积累', html: `<p>剩余价值资本化；资本积聚与集中。</p>` },
          { id: 'consequence', title: '后果', html: `<p>有机构成提高、相对过剩人口、贫富分化。</p>` }
        ], refs: [] } },
      { title: '资本循环与周转', brief: '资本在运动中增殖。',
        q: [
          { stem: '产业资本循环的三个阶段是：', options: ['购买、生产、销售', '投资、生产、消费', '借贷、投资、回收', '生产、分配、交换'], answer: 0, explain: '三阶段。' },
          { stem: '固定资本与流动资本的划分依据是：', options: ['价值转移方式', '周转速度唯一', '实物形态', '用途'], answer: 0, explain: '价值转移。' },
          { stem: '资本周转速度提高会：', options: ['提高年剩余价值率', '降低利润', '减少投资', '无影响'], answer: 0, explain: '周转。' }
        ],
        doc: { lead: '这一章讲循环。', sections: [
          { id: 'circuit', title: '循环', html: `<p>货币资本、生产资本、商品资本三种职能形式。</p>` },
          { id: 'turnover', title: '周转', html: `<p>固定/流动资本；周转速度与年剩余价值率。</p>` }
        ], refs: [] } },
      { title: '社会再生产与经济危机', brief: '两大部类的平衡。',
        q: [
          { stem: '社会再生产的两大部类是：', options: ['生产资料与消费资料', '农业与工业', '轻工业与重工业', '国内与国外'], answer: 0, explain: '两大部类。' },
          { stem: '经济危机的可能性源于：', options: ['货币作为流通手段与支付手段', '生产过剩唯一', '消费不足唯一', '政策失误'], answer: 0, explain: '形式可能。' },
          { stem: '资本主义经济危机的实质是：', options: ['生产相对过剩', '绝对短缺', '货币不足', '人口过多'], answer: 0, explain: '相对过剩。' }
        ],
        doc: { lead: '这一章讲平衡与危机。', sections: [
          { id: 'reproduction', title: '再生产', html: `<p>简单再生产与扩大再生产的实现条件；两大部类比例。</p>` },
          { id: 'crisis', title: '危机', html: `<p>可能性（货币）、现实性（比例失调）、周期性。</p>` }
        ], refs: [] } }
    ]
  },
  /* 4 宏观经济学 +5 */
  {
    chapters: [
      { title: '国民收入核算', brief: 'GDP 怎么算、算什么。',
        q: [
          { stem: 'GDP 衡量的是：', options: ['一国境内一定时期生产的最终产品与劳务价值', '国民收入', '存量财富', '销售额'], answer: 0, explain: '最终产品。' },
          { stem: '支出法包括：', options: ['C + I + G + NX', '工资 + 利润', '消费 + 储蓄', '投资 + 税收'], answer: 0, explain: '四部门。' },
          { stem: 'GDP 与 GNP 的区别是：', options: ['地域 vs 国民', '价格 vs 数量', '名义 vs 实际', '流量 vs 存量'], answer: 0, explain: '口径。' }
        ],
        doc: { lead: '这一章讲核算。', sections: [
          { id: 'methods', title: '三种方法', html: `<p>生产法、收入法、支出法；恒等关系。</p>` },
          { id: 'concepts', title: '相关概念', html: `<p>名义/实际、GDP/GNP、人均、绿色 GDP。</p>` }
        ], refs: [] } },
      { title: 'IS-LM 模型', brief: '产品市场与货币市场同时均衡。',
        q: [
          { stem: 'IS 曲线表示：', options: ['产品市场均衡时利率与产出的关系', '货币市场', '劳动市场', '国际市场'], answer: 0, explain: '产品。' },
          { stem: 'LM 曲线向上倾斜的原因是：', options: ['收入增加提高货币需求进而推高利率', '价格上升', '投资增加', '出口增加'], answer: 0, explain: '货币需求。' },
          { stem: '财政政策效果被削弱的原因是：', options: ['挤出效应', '乘数效应', '加速效应', '替代效应'], answer: 0, explain: '利率上升抑制投资。' }
        ],
        doc: { lead: '这一章讲 IS-LM。', sections: [
          { id: 'is', title: 'IS', html: `<p>投资储蓄均衡；斜率取决于投资与乘数。</p>` },
          { id: 'lm', title: 'LM', html: `<p>货币供求均衡；流动性陷阱。</p>` }
        ], refs: [] } },
      { title: '总需求与总供给', brief: '价格水平与产出。',
        q: [
          { stem: '总需求曲线向下倾斜的原因是：', options: ['价格下降提高实际货币供给与净出口', '收入效应', '替代效应', '规模经济'], answer: 0, explain: '利率与汇率。' },
          { stem: '短期总供给曲线向上倾斜是因为：', options: ['名义工资粘性', '价格完全灵活', '产出固定', '货币中性'], answer: 0, explain: '粘性。' },
          { stem: '供给冲击会导致：', options: ['滞胀', '通缩繁荣', '充分就业', '无影响'], answer: 0, explain: '成本推动。' }
        ],
        doc: { lead: '这一章讲 AD-AS。', sections: [
          { id: 'ad', title: '总需求', html: `<p>利率效应、实际余额效应、汇率效应。</p>` },
          { id: 'as', title: '总供给', html: `<p>短期粘性、长期垂直；供给冲击。</p>` }
        ], refs: [] } },
      { title: '通胀与失业', brief: '菲利普斯曲线的启示。',
        q: [
          { stem: '短期菲利普斯曲线表明：', options: ['通胀与失业此消彼长', '二者同向', '无关', '长期有效'], answer: 0, explain: '替代。' },
          { stem: '自然失业率包括：', options: ['摩擦性与结构性失业', '周期性失业', '总需求不足', '季节性全部'], answer: 0, explain: '自然率。' },
          { stem: '通胀的再分配效应是：', options: ['不利于债权人、利于债务人', '利于债权人', '无影响', '利于储蓄者'], answer: 0, explain: '实际利率。' }
        ],
        doc: { lead: '这一章讲两大问题。', sections: [
          { id: 'phillips', title: '菲利普斯曲线', html: `<p>短期替代、长期垂直、预期调整。</p>` },
          { id: 'cost', title: '通胀成本', html: `<p>菜单成本、鞋底成本、再分配、不确定性。</p>` }
        ], refs: [] } },
      { title: '增长与政策', brief: '长期靠什么增长。',
        q: [
          { stem: '索洛模型的核心变量是：', options: ['资本、劳动、技术与储蓄率', '货币', '税率', '汇率'], answer: 0, explain: '增长核算。' },
          { stem: '全要素生产率衡量：', options: ['技术与管理等未解释部分的效率', '资本产出比', '劳动生产率', '就业率'], answer: 0, explain: 'TFP。' },
          { stem: '财政政策与货币政策的搭配目标是：', options: ['稳定增长、就业与物价', '扩大政府', '减少税收', '提高汇率'], answer: 0, explain: '宏观调控。' }
        ],
        doc: { lead: '这一章讲长期。', sections: [
          { id: 'growth', title: '增长', html: `<p>索洛模型、趋同、TFP；制度与人力资本。</p>` },
          { id: 'policy', title: '政策', html: `<p>财政与货币工具；规则与相机抉择。</p>` }
        ], refs: [] } }
    ]
  },
  /* 5 统计学 +5 */
  {
    chapters: [
      { title: '描述统计', brief: '数据的初步画像。',
        q: [
          { stem: '偏态分布中更稳健的中心指标是：', options: ['中位数', '均值', '方差', '极差'], answer: 0, explain: '稳健。' },
          { stem: '标准差衡量：', options: ['离散程度', '集中趋势', '偏度', '峰度'], answer: 0, explain: '离散。' },
          { stem: '箱线图展示：', options: ['中位数与四分位数', '均值与方差', '相关系数', '回归线'], answer: 0, explain: '五数概括。' }
        ],
        doc: { lead: '这一章讲描述。', sections: [
          { id: 'center', title: '中心与离散', html: `<p>均值、中位数、众数；方差、标准差、IQR。</p>` },
          { id: 'shape', title: '形状', html: `<p>偏度、峰度、箱线图与异常值。</p>` }
        ], refs: [] } },
      { title: '抽样与推断', brief: '从样本推总体。',
        q: [
          { stem: '标准误随样本量：', options: ['减小', '增大', '不变', '先增后减'], answer: 0, explain: 'σ/√n。' },
          { stem: '95% 置信区间表示：', options: ['重复抽样中约 95% 区间覆盖真值', '真值落入的概率', '样本正确率', '显著水平'], answer: 0, explain: '覆盖率。' },
          { stem: '中心极限定理要求：', options: ['大样本下样本均值近似正态', '总体正态', '方差已知', '样本小'], answer: 0, explain: 'CLT。' }
        ],
        doc: { lead: '这一章讲推断。', sections: [
          { id: 'sampling', title: '抽样分布', html: `<p>标准误、CLT、t 分布。</p>` },
          { id: 'estimation', title: '估计', html: `<p>点估计与区间估计；无偏与有效。</p>` }
        ], refs: [] } },
      { title: '假设检验', brief: 'p 值与两类错误。',
        q: [
          { stem: 'p 值表示：', options: ['原假设下出现当前或更极端结果的概率', '原假设为真的概率', '结论正确率', '效应大小'], answer: 0, explain: '条件概率。' },
          { stem: '第一类错误是：', options: ['弃真', '取伪', '样本偏差', '计算错误'], answer: 0, explain: 'α。' },
          { stem: '功效等于：', options: ['1 − β', 'α', 'p', 'R²'], answer: 0, explain: '检验能力。' }
        ],
        doc: { lead: '这一章讲检验。', sections: [
          { id: 'logic', title: '逻辑', html: `<p>H0 与 H1；显著性水平；单双侧。</p>` },
          { id: 'error', title: '错误与功效', html: `<p>两类错误；样本量影响功效。</p>` }
        ], refs: [] } },
      { title: '相关与回归', brief: '变量间的关系。',
        q: [
          { stem: '相关系数为 0 表示：', options: ['无线性关系', '无任何关系', '有因果', '样本无效'], answer: 0, explain: '线性。' },
          { stem: 'R² 表示：', options: ['解释的方差比例', '因果强度', '显著性', '样本量'], answer: 0, explain: '拟合。' },
          { stem: '回归系数显著性用：', options: ['t 检验', '卡方', 'F 唯一', 'Z 唯一'], answer: 0, explain: '系数检验。' }
        ],
        doc: { lead: '这一章讲关系。', sections: [
          { id: 'corr', title: '相关', html: `<p>Pearson、Spearman；相关不等于因果。</p>` },
          { id: 'reg', title: '回归', html: `<p>OLS、系数解释、R²、残差诊断。</p>` }
        ], refs: [] } },
      { title: '时间序列', brief: '带时间的数据。',
        q: [
          { stem: '趋势、季节与随机波动是：', options: ['时间序列的典型成分', '回归假设', '抽样误差', '指数'], answer: 0, explain: '分解。' },
          { stem: '自相关指：', options: ['序列与自身滞后项相关', '两变量相关', '样本相关', '误差为零'], answer: 0, explain: 'ACF。' },
          { stem: '预测时应警惕：', options: ['结构突变', '样本大', '模型简单', '数据多'], answer: 0, explain: '断点。' }
        ],
        doc: { lead: '这一章讲时序。', sections: [
          { id: 'components', title: '分解', html: `<p>趋势、季节、循环、随机；移动平均。</p>` },
          { id: 'models', title: '模型', html: `<p>ARIMA、指数平滑；平稳性与差分。</p>` }
        ], refs: [] } }
    ]
  },
  /* 6 会计学原理 +5 */
  {
    chapters: [
      { title: '会计要素与等式', brief: '资产 = 负债 + 所有者权益。',
        q: [
          { stem: '会计恒等式是：', options: ['资产 = 负债 + 所有者权益', '收入 − 费用 = 利润', '资产 = 收入', '负债 = 权益'], answer: 0, explain: '基础。' },
          { stem: '收入增加会导致：', options: ['所有者权益增加', '负债增加', '资产减少', '无影响'], answer: 0, explain: '利润归所有者。' },
          { stem: '费用属于：', options: ['权益的减项', '资产', '负债', '收入'], answer: 0, explain: '减少权益。' }
        ],
        doc: { lead: '这一章讲要素。', sections: [
          { id: 'elements', title: '六要素', html: `<p>资产、负债、所有者权益、收入、费用、利润。</p>` },
          { id: 'equation', title: '等式', html: `<p>资产=负债+权益；扩展式含收入费用。</p>` }
        ], refs: [] } },
      { title: '复式记账', brief: '有借必有贷。',
        q: [
          { stem: '复式记账的核心是：', options: ['每笔业务至少影响两个科目且借贷相等', '单边记录', '只记现金', '只记资产'], answer: 0, explain: '借贷平衡。' },
          { stem: '资产增加记：', options: ['借方', '贷方', '两方', '不记'], answer: 0, explain: '借增贷减。' },
          { stem: '试算平衡检查的是：', options: ['借贷总额是否相等', '利润是否正确', '现金流', '税负'], answer: 0, explain: '平衡表。' }
        ],
        doc: { lead: '这一章讲记账。', sections: [
          { id: 'rule', title: '规则', html: `<p>资产/费用：借增贷减；负债/权益/收入：贷增借减。</p>` },
          { id: 'trial', title: '试算', html: `<p>借贷平衡；不能发现所有错误（如漏记同额）。</p>` }
        ], refs: [] } },
      { title: '凭证与账簿', brief: '会计信息的链条。',
        q: [
          { stem: '会计信息流程是：', options: ['凭证 → 账簿 → 报表', '报表 → 凭证', '账簿 → 凭证', '凭证 → 报表'], answer: 0, explain: '顺序。' },
          { stem: '原始凭证的作用是：', options: ['证明业务发生', '编制报表', '纳税', '审计唯一'], answer: 0, explain: '证据。' },
          { stem: '总账与明细账应当：', options: ['平行登记、金额相等', '只记总账', '只记明细', '不必一致'], answer: 0, explain: '平行。' }
        ],
        doc: { lead: '这一章讲流程。', sections: [
          { id: 'chain', title: '链条', html: `<p>原始凭证 → 记账凭证 → 明细账/总账 → 报表。</p>` },
          { id: 'check', title: '核对', html: `<p>账证、账账、账实相符。</p>` }
        ], refs: [] } },
      { title: '报表编制', brief: '三大报表。',
        q: [
          { stem: '资产负债表反映：', options: ['某一时点的财务状况', '一段期间经营成果', '现金流量', '所有者变动'], answer: 0, explain: '时点。' },
          { stem: '利润表反映：', options: ['一段期间的经营成果', '时点状况', '现金流', '权益变动'], answer: 0, explain: '期间。' },
          { stem: '现金流量表分为：', options: ['经营、投资、筹资', '收入、成本、利润', '资产、负债、权益', '年初、年中、年末'], answer: 0, explain: '三类活动。' }
        ],
        doc: { lead: '这一章讲报表。', sections: [
          { id: 'three', title: '三表', html: `<p>资产负债表、利润表、现金流量表；勾稽关系。</p>` },
          { id: 'prepare', title: '编制', html: `<p>结转损益、计提折旧、期末调整。</p>` }
        ], refs: [] } },
      { title: '报表分析', brief: '从数字看经营。',
        q: [
          { stem: '流动比率衡量：', options: ['短期偿债能力', '盈利能力', '营运能力', '成长性'], answer: 0, explain: '流动性。' },
          { stem: '毛利率等于：', options: ['(收入−成本)/收入', '净利润/收入', '收入/资产', '负债/资产'], answer: 0, explain: '毛利。' },
          { stem: '应收账款周转率反映：', options: ['回款效率', '盈利能力', '偿债能力', '成长性'], answer: 0, explain: '营运。' }
        ],
        doc: { lead: '这一章讲分析。', sections: [
          { id: 'ratios', title: '四类比率', html: `<p>偿债、营运、盈利、成长。</p>` },
          { id: 'caveat', title: '注意', html: `<p>会计政策差异、行业可比性、表外项目。</p>` }
        ], refs: [] } }
    ]
  },
  /* 7 计量经济学 +5 */
  {
    chapters: [
      { title: '一元回归', brief: '最简单的因果尝试。',
        q: [
          { stem: 'OLS 的目标是：', options: ['最小化残差平方和', '最大化 R²', '最小化样本', '最大化显著性'], answer: 0, explain: 'OLS。' },
          { stem: '斜率的经济含义是：', options: ['X 增加一单位 Y 的平均变化', '截距', '相关系数', '弹性'], answer: 0, explain: '边际效应。' },
          { stem: '残差与 X 的关系应：', options: ['不相关', '强相关', '正相关', '负相关'], answer: 0, explain: '正交性。' }
        ],
        doc: { lead: '这一章讲一元。', sections: [
          { id: 'ols', title: 'OLS', html: `<p>最小二乘估计；拟合优度；标准误。</p>` },
          { id: 'interpret', title: '解释', html: `<p>系数、截距、R²；不要过度解读。</p>` }
        ], refs: [] } },
      { title: '多元回归', brief: '控制变量后的净效应。',
        q: [
          { stem: '多元回归系数是：', options: ['控制其他变量后的偏效应', '简单相关', 'R²', '截距'], answer: 0, explain: '偏效应。' },
          { stem: '遗漏变量偏误的条件是：', options: ['遗漏变量影响 Y 且与 X 相关', '样本小', '变量多', '模型复杂'], answer: 0, explain: '混淆。' },
          { stem: '多重共线性导致：', options: ['系数方差增大', '系数有偏', 'R² 为零', '无法估计'], answer: 0, explain: 'VIF。' }
        ],
        doc: { lead: '这一章讲多元。', sections: [
          { id: 'interpret', title: '解释', html: `<p>偏回归系数；标准化系数；交互项。</p>` },
          { id: 'diagnose', title: '诊断', html: `<p>共线性、异方差、异常值、函数形式。</p>` }
        ], refs: [] } },
      { title: '假设检验与诊断', brief: '模型可靠吗。',
        q: [
          { stem: '异方差的后果是：', options: ['标准误估计有偏、推断失效', '系数有偏', 'R² 为零', '无法估计'], answer: 0, explain: '方差。' },
          { stem: '稳健标准误的作用是：', options: ['在异方差下修正推断', '提高 R²', '减少样本', '消除共线'], answer: 0, explain: '稳健。' },
          { stem: '内生性问题包括：', options: ['遗漏变量、测量误差、联立性', '共线性', '异方差', '异常值'], answer: 0, explain: '三类。' }
        ],
        doc: { lead: '这一章讲诊断。', sections: [
          { id: 'test', title: '检验', html: `<p>t、F、Wald；异方差与自相关检验。</p>` },
          { id: 'endo', title: '内生性', html: `<p>来源与后果；工具变量思路。</p>` }
        ], refs: [] } },
      { title: '面板与工具变量', brief: '更可信的因果。',
        q: [
          { stem: '固定效应模型控制：', options: ['不随时间变化的个体异质性', '时间趋势', '异方差', '共线'], answer: 0, explain: 'FE。' },
          { stem: '工具变量需满足：', options: ['相关性与外生性', '只相关', '只外生', '任意'], answer: 0, explain: '两条件。' },
          { stem: '双重差分识别的是：', options: ['处理组与对照组前后变化的差异', '横截面差异', '时间趋势', '个体效应'], answer: 0, explain: 'DID。' }
        ],
        doc: { lead: '这一章讲识别。', sections: [
          { id: 'panel', title: '面板', html: `<p>固定效应、随机效应、豪斯曼检验。</p>` },
          { id: 'iv', title: 'IV 与 DID', html: `<p>2SLS、平行趋势假设、事件研究。</p>` }
        ], refs: [] } },
      { title: '因果推断', brief: '相关之外的功夫。',
        q: [
          { stem: '潜在结果框架的核心是：', options: ['反事实', '相关系数', 'R²', '样本量'], answer: 0, explain: 'Rubin。' },
          { stem: '随机实验的优势是：', options: ['平衡混淆变量', '样本大', '成本低', '易实施'], answer: 0, explain: '随机化。' },
          { stem: '断点回归依赖：', options: ['阈值附近的连续性', '大样本', '时间序列', '问卷'], answer: 0, explain: 'RD。' }
        ],
        doc: { lead: '这一章讲识别策略。', sections: [
          { id: 'designs', title: '五种', html: `<p>RCT、DID、IV、RD、匹配。</p>` },
          { id: 'threat', title: '威胁', html: `<p>选择偏差、溢出、依从性、 attrition。</p>` }
        ], refs: [] } }
    ]
  },
  /* 8 货币金融学 +5 */
  {
    chapters: [
      { title: '货币与利率', brief: '货币的职能与价格。',
        q: [
          { stem: '货币的职能不包括：', options: ['价值尺度', '流通手段', '贮藏手段', '生产手段'], answer: 3, explain: '不是生产。' },
          { stem: '名义利率与实际利率的关系是：', options: ['费雪方程 i ≈ r + π', '相等', '无关', 'i = r − π'], answer: 0, explain: '费雪。' },
          { stem: '利率上升会导致债券价格：', options: ['下降', '上升', '不变', '无关'], answer: 0, explain: '反向。' }
        ],
        doc: { lead: '这一章讲货币。', sections: [
          { id: 'money', title: '货币', html: `<p>职能、层次（M0/M1/M2）、货币需求理论。</p>` },
          { id: 'rate', title: '利率', html: `<p>现值、到期收益率、利率期限结构。</p>` }
        ], refs: [] } },
      { title: '银行体系', brief: '存款创造与监管。',
        q: [
          { stem: '货币乘数与准备金率的关系是：', options: ['反向', '同向', '无关', '相等'], answer: 0, explain: '乘数 = 1/r。' },
          { stem: '中央银行的首要职能是：', options: ['制定货币政策、维护金融稳定', '吸收存款', '发放贷款', '理财'], answer: 0, explain: '央行。' },
          { stem: '存款保险制度的作用是：', options: ['防止挤兑、保护小额存款人', '提高利率', '增加利润', '降低准备金'], answer: 0, explain: '稳定。' }
        ],
        doc: { lead: '这一章讲银行。', sections: [
          { id: 'creation', title: '存款创造', html: `<p>准备金率与货币乘数；基础货币。</p>` },
          { id: 'regulation', title: '监管', html: `<p>资本充足率、存款保险、最后贷款人。</p>` }
        ], refs: [] } },
      { title: '货币政策', brief: '三大工具与传导。',
        q: [
          { stem: '货币政策三大工具不包括：', options: ['存款准备金率', '公开市场操作', '再贴现', '财政补贴'], answer: 3, explain: '财政。' },
          { stem: '公开市场操作买入债券会：', options: ['增加基础货币、宽松', '收紧', '无影响', '提高准备金率'], answer: 0, explain: '注入流动性。' },
          { stem: '货币政策传导渠道包括：', options: ['利率、信贷、资产价格、汇率', '只有利率', '只有信贷', '只有汇率'], answer: 0, explain: '多渠道。' }
        ],
        doc: { lead: '这一章讲政策。', sections: [
          { id: 'tools', title: '工具', html: `<p>准备金率、公开市场操作、再贷款/再贴现、利率走廊。</p>` },
          { id: 'transmission', title: '传导', html: `<p>利率、信贷、资产价格、汇率、预期。</p>` }
        ], refs: [] } },
      { title: '金融市场', brief: '资金的价格与风险。',
        q: [
          { stem: '股票估值的基本方法是：', options: ['未来现金流折现', '成本加成', '比较价格', '随机'], answer: 0, explain: 'DCF。' },
          { stem: '风险与收益的关系是：', options: ['高风险通常要求高收益', '无关', '反向', '固定'], answer: 0, explain: '风险溢价。' },
          { stem: '有效市场假说认为：', options: ['价格已反映公开信息', '价格永远错', '无法投资', '内幕有效'], answer: 0, explain: 'EMH。' }
        ],
        doc: { lead: '这一章讲市场。', sections: [
          { id: 'instruments', title: '工具', html: `<p>股票、债券、基金、衍生品。</p>` },
          { id: 'efficiency', title: '效率', html: `<p>弱式/半强式/强式；异象与行为金融。</p>` }
        ], refs: [] } },
      { title: '金融稳定', brief: '危机从哪来。',
        q: [
          { stem: '系统性风险指：', options: ['一个机构倒闭引发连锁反应的风险', '个股风险', '利率风险', '汇率风险'], answer: 0, explain: '系统。' },
          { stem: '宏观审慎政策的目标是：', options: ['防范系统性风险', '控制通胀', '促进出口', '增加税收'], answer: 0, explain: '宏观审慎。' },
          { stem: '挤兑的根源是：', options: ['信息不对称与自我实现的预期', '利率低', '监管严', '利润少'], answer: 0, explain: '协调失败。' }
        ],
        doc: { lead: '这一章讲稳定。', sections: [
          { id: 'risk', title: '风险', html: `<p>系统性风险、传染、杠杆与期限错配。</p>` },
          { id: 'policy', title: '政策', html: `<p>宏观审慎、逆周期资本、压力测试。</p>` }
        ], refs: [] } }
    ]
  },
  /* 9 产业经济学 +5 */
  {
    chapters: [
      { title: '市场结构', brief: '集中度与竞争。',
        q: [
          { stem: '衡量市场集中度的指标是：', options: ['HHI 与 CRn', '基尼系数', 'CPI', 'GDP'], answer: 0, explain: '集中度。' },
          { stem: 'HHI 越大表示：', options: ['集中度越高', '竞争越强', '效率越高', '价格越低'], answer: 0, explain: '平方和。' },
          { stem: '进入壁垒包括：', options: ['规模经济、牌照、专利、网络效应', '价格', '广告', '销售'], answer: 0, explain: '壁垒。' }
        ],
        doc: { lead: '这一章讲结构。', sections: [
          { id: 'measure', title: '测度', html: `<p>CRn、HHI、勒纳指数。</p>` },
          { id: 'barrier', title: '壁垒', html: `<p>结构性壁垒与策略性壁垒。</p>` }
        ], refs: [] } },
      { title: '定价与串谋', brief: '企业如何定价。',
        q: [
          { stem: '价格歧视的条件是：', options: ['能区分消费者且防止转售', '成本不同', '产品不同', '市场大'], answer: 0, explain: '三度。' },
          { stem: '卡特尔不稳定的原因是：', options: ['成员有背叛动机', '成本高', '需求低', '监管严'], answer: 0, explain: '囚徒困境。' },
          { stem: '限制性定价用于：', options: ['阻止进入', '提高利润唯一', '扩大需求', '降低成本'], answer: 0, explain: '策略。' }
        ],
        doc: { lead: '这一章讲行为。', sections: [
          { id: 'pricing', title: '定价', html: `<p>歧视、两部定价、捆绑、掠夺性定价。</p>` },
          { id: 'collusion', title: '串谋', html: `<p>默契合谋、触发策略、反垄断规制。</p>` }
        ], refs: [] } },
      { title: '规制', brief: '自然垄断与监管。',
        q: [
          { stem: '自然垄断的成因是：', options: ['规模经济导致平均成本递减', '专利', '牌照', '广告'], answer: 0, explain: '成本次可加。' },
          { stem: '收益率规制的缺点是：', options: ['可能过度投资（A-J 效应）', '价格过高', '无激励', '无法监管'], answer: 0, explain: 'Averch-Johnson。' },
          { stem: '激励性规制的代表是：', options: ['价格上限规制', '成本加成', '国有化', '放任'], answer: 0, explain: 'RPI-X。' }
        ],
        doc: { lead: '这一章讲规制。', sections: [
          { id: 'why', title: '为何规制', html: `<p>自然垄断、外部性、信息不对称。</p>` },
          { id: 'how', title: '怎么规制', html: `<p>收益率规制、价格上限、特许经营、激励规制。</p>` }
        ], refs: [] } },
      { title: '产业政策', brief: '政府选产业。',
        q: [
          { stem: '产业政策的争议在于：', options: ['政府能否有效选择赢家', '是否合法', '是否有预算', '是否需要立法'], answer: 0, explain: '选择性。' },
          { stem: '功能性产业政策强调：', options: ['改善通用环境（教育、研发、基础设施）', '补贴特定企业', '限制竞争', '国有化'], answer: 0, explain: '横向。' },
          { stem: '产业政策评估的关键是：', options: ['反事实（没有政策会怎样）', '预算', '规模', '口号'], answer: 0, explain: '因果。' }
        ],
        doc: { lead: '这一章讲政策。', sections: [
          { id: 'types', title: '类型', html: `<p>选择性（纵向）与功能性（横向）。</p>` },
          { id: 'eval', title: '评估', html: `<p>反事实、溢出效应、寻租风险。</p>` }
        ], refs: [] } },
      { title: '产业组织实证', brief: '用数据检验理论。',
        q: [
          { stem: '结构—行为—绩效（SCP）范式的批评是：', options: ['忽视反向因果', '数据太多', '模型简单', '无法检验'], answer: 0, explain: '内生性。' },
          { stem: '并购审查关注：', options: ['市场集中度变化与单边效应', '员工数', '广告', '价格'], answer: 0, explain: '竞争影响。' },
          { stem: '产业实证常用数据：', options: ['企业微观数据与价格数据', '只有宏观', '只有问卷', '只有访谈'], answer: 0, explain: '微观。' }
        ],
        doc: { lead: '这一章讲实证。', sections: [
          { id: 'scp', title: 'SCP', html: `<p>结构决定行为再决定绩效；内生性问题。</p>` },
          { id: 'merger', title: '并购', html: `<p>单边效应、协调效应、市场界定。</p>` }
        ], refs: [] } }
    ]
  },
  /* 10 数据分析与软件 +1 */
  {
    chapters: [
      { title: '数据工作流', brief: '从原始数据到结论。',
        q: [
          { stem: '数据分析的第一步是：', options: ['明确问题与指标', '建模', '画图', '写报告'], answer: 0, explain: '问题。' },
          { stem: '可复现分析要求：', options: ['代码与数据可追溯', '只交报告', '手工计算', '截图'], answer: 0, explain: 'reproducible。' },
          { stem: '常用工具组合是：', options: ['Python/R + 数据库 + 可视化', '只有 Excel', '只有 SPSS', '只有纸笔'], answer: 0, explain: '工具链。' }
        ],
        doc: { lead: '这一章讲流程。', sections: [
          { id: 'flow', title: '五步', html: `<p>问题 → 取数 → 清洗 → 分析 → 呈现。</p>` },
          { id: 'habit', title: '习惯', html: `<p>脚本化、版本控制、文档化；结果可复现。</p>` }
        ], refs: [] } }
    ]
  },
  /* 11 毕业论文 +1 */
  {
    chapters: [
      { title: '实证论文结构', brief: '问题—数据—识别—结论。',
        q: [
          { stem: '实证论文的核心是：', options: ['识别策略与稳健性', '文献数量', '篇幅', '格式'], answer: 0, explain: '因果。' },
          { stem: '稳健性检验的作用是：', options: ['排除替代解释', '凑页数', '装饰', '替代主结果'], answer: 0, explain: '可靠。' },
          { stem: '论文结论应：', options: ['与证据一致并说明局限', '夸大', '省略局限', '抄摘要'], answer: 0, explain: '节制。' }
        ],
        doc: { lead: '这一章讲写作。', sections: [
          { id: 'structure', title: '结构', html: `<p>引言、文献、数据与变量、模型、结果、稳健性、结论。</p>` },
          { id: 'tips', title: '提示', html: `<p>一张表讲一个结论；先写结果再写引言。</p>` }
        ], refs: [] } }
    ]
  },
  /* 12 考研与求职 +1 */
  {
    chapters: [
      { title: '复习规划与去向', brief: '考研与就业的时间线。',
        q: [
          { stem: '经济学考研专业课通常是：', options: ['微观 + 宏观（+政治经济学）', '只有数学', '只有统计', '只有英语'], answer: 0, explain: '两门。' },
          { stem: '数三与数一的区别是：', options: ['范围与难度不同', '完全相同', '数三更难', '数一更简单'], answer: 0, explain: '难度。' },
          { stem: '就业方向包括：', options: ['金融、咨询、政府、企业', '只有银行', '只有高校', '只有公务员'], answer: 0, explain: '多元。' }
        ],
        doc: { lead: '这一章讲规划。', sections: [
          { id: 'exam', title: '考研', html: `<p>数学、英语、政治、专业课；3–6 月基础，7–8 月真题，9–12 月强化冲刺。</p>` },
          { id: 'job', title: '就业', html: `<p>金融/咨询/政府/企业；实习与数据分析能力是加分项。</p>` }
        ], refs: [] } }
    ]
  }
]);
