/* ==========================================================
   fiscal-courses-more.js · 财政学：减半标准（主干 8 / 出口 4）
   ========================================================== */

appendChapters('economics-财政学', [
  /* 1 高等数学 +5 */
  {
    chapters: [
      { title: '极限与连续', brief: '财政分析的基础工具。',
        q: [
          { stem: 'lim(x→0)(1+x)^(1/x) 等于：', options: ['1', 'e', '0', '∞'], answer: 1, explain: '重要极限。' },
          { stem: '连续复利终值是：', options: ['Pe^{rt}', 'P(1+r)^t', 'P+rt', 'P/r'], answer: 0, explain: 'e。' },
          { stem: '函数连续要求：', options: ['极限存在且等于函数值', '可导', '单调', '有界'], answer: 0, explain: '定义。' }
        ],
        doc: { lead: '这一章复习极限。', sections: [
          { id: 'limit', title: '极限', html: `<p>两个重要极限、等价无穷小、连续与间断。</p>` },
          { id: 'use', title: '用法', html: `<p>复利、贴现、增长率；债务动态分析。</p>` }
        ], refs: [] } },
      { title: '导数与最优化', brief: '最优税率与最优规模。',
        q: [
          { stem: '拉弗曲线说明：', options: ['税率过高反而减少税收', '税率越高税收越多', '税收与税率无关', '税率越低越好'], answer: 0, explain: '倒 U。' },
          { stem: '公共品最优供给条件是：', options: ['边际收益之和等于边际成本', '边际收益等于价格', '成本最低', '收益最大'], answer: 0, explain: '萨缪尔森条件。' },
          { stem: '最优化的一阶条件是：', options: ['边际收益等于边际成本', '总量最大', '成本最小', '平均相等'], answer: 0, explain: '边际。' }
        ],
        doc: { lead: '这一章讲求导。', sections: [
          { id: 'rules', title: '求导', html: `<p>幂、指数、对数、链式；边际与弹性。</p>` },
          { id: 'opt', title: '最优化', html: `<p>拉弗曲线、最优公共品供给、税收超额负担。</p>` }
        ], refs: [] } },
      { title: '偏导与约束', brief: '多目标下的权衡。',
        q: [
          { stem: '拉格朗日乘子表示：', options: ['约束的影子价格', '目标值', '成本', '税率'], answer: 0, explain: '影子价格。' },
          { stem: '预算约束下的效用最大化用于：', options: ['分析政府支出结构', '计算税收', '评估债务', '汇率'], answer: 0, explain: '配置。' },
          { stem: '等产量线与等成本线相切表示：', options: ['成本最小化', '收益最大', '利润最大', '均衡'], answer: 0, explain: '切点。' }
        ],
        doc: { lead: '这一章讲多变量。', sections: [
          { id: 'partial', title: '偏导', html: `<p>边际影响；交叉偏导。</p>` },
          { id: 'optimize', title: '优化', html: `<p>约束极值；政府支出组合与税收组合。</p>` }
        ], refs: [] } },
      { title: '积分与现值', brief: '财政的跨期视角。',
        q: [
          { stem: '政府债务的可持续性可用什么分析？', options: ['债务动态方程', '积分', '矩阵', '概率'], answer: 0, explain: '动态。' },
          { stem: '年金现值系数用于：', options: ['等额支付的折现', '一次性支付', '永续增长', '期权'], answer: 0, explain: '年金。' },
          { stem: '成本收益分析中贴现率的作用是：', options: ['把未来收益折为现值', '计算税收', '评估风险', '确定预算'], answer: 0, explain: '折现。' }
        ],
        doc: { lead: '这一章讲跨期。', sections: [
          { id: 'pv', title: '现值', html: `<p>年金、永续、增长永续；贴现率选择。</p>` },
          { id: 'debt', title: '债务', html: `<p>债务/GDP 动态：r 与 g 的关系。</p>` }
        ], refs: [] } },
      { title: '矩阵与线性模型', brief: '多部门财政模型。',
        q: [
          { stem: '投入产出表可用于分析：', options: ['税收的部门影响', '汇率', '货币', '人口'], answer: 0, explain: 'IO。' },
          { stem: '线性方程组的解可用：', options: ['消元或克拉默法则', '求导', '积分', '概率'], answer: 0, explain: '线代。' },
          { stem: '相关系数矩阵对角线为：', options: ['1', '0', '方差', '协方差'], answer: 0, explain: '自相关。' }
        ],
        doc: { lead: '这一章讲线代。', sections: [
          { id: 'matrix', title: '矩阵', html: `<p>运算、逆矩阵、线性方程组。</p>` },
          { id: 'io', title: '投入产出', html: `<p>部门关联；税收与补贴的传导。</p>` }
        ], refs: [] } }
    ]
  },
  /* 2 微观经济学 +5 */
  {
    chapters: [
      { title: '消费者与剩余', brief: '税负的微观基础。',
        q: [
          { stem: '消费者剩余指：', options: ['愿付价格与实际支付之差', '实际支付', '成本', '税收'], answer: 0, explain: '剩余。' },
          { stem: '征税会使消费者剩余：', options: ['减少', '增加', '不变', '不确定'], answer: 0, explain: '税负。' },
          { stem: '税收的超额负担来自：', options: ['数量扭曲', '征管成本', '税率', '税基'], answer: 0, explain: '无谓损失。' }
        ],
        doc: { lead: '这一章讲剩余。', sections: [
          { id: 'surplus', title: '剩余', html: `<p>消费者/生产者剩余；总福利。</p>` },
          { id: 'tax', title: '税收效应', html: `<p>税负分担、无谓损失、弹性与转嫁。</p>` }
        ], refs: [] } },
      { title: '生产与成本', brief: '税收对企业的影响。',
        q: [
          { stem: '对生产者征税，短期供给曲线：', options: ['上移', '下移', '不变', '垂直'], answer: 0, explain: '成本上升。' },
          { stem: '规模经济与自然垄断的关系是：', options: ['规模经济导致自然垄断', '无关', '相反', '竞争'], answer: 0, explain: '成本次可加。' },
          { stem: '边际成本定价在自然垄断下会：', options: ['导致亏损', '盈利', '无影响', '提高效率'], answer: 0, explain: '需补贴。' }
        ],
        doc: { lead: '这一章讲成本。', sections: [
          { id: 'cost', title: '成本', html: `<p>固定/可变、平均/边际；税收对成本曲线的影响。</p>` },
          { id: 'monopoly', title: '自然垄断', html: `<p>规模经济、边际成本定价与补贴、两部定价。</p>` }
        ], refs: [] } },
      { title: '市场结构', brief: '税收在不同市场的归宿。',
        q: [
          { stem: '完全竞争下税负主要由谁承担？', options: ['取决于供求弹性', '买方全部', '卖方全部', '政府'], answer: 0, explain: '弹性。' },
          { stem: '垄断者面对从量税会：', options: ['提高价格并减少产量', '保持价格', '增加产量', '退出'], answer: 0, explain: '转嫁。' },
          { stem: '税收归宿的"弹性法则"是：', options: ['弹性小的一方承担更多税负', '弹性大的一方承担更多', '平均分担', '无关'], answer: 0, explain: '归宿。' }
        ],
        doc: { lead: '这一章讲结构。', sections: [
          { id: 'types', title: '四种结构', html: `<p>竞争、垄断竞争、寡头、垄断。</p>` },
          { id: 'incidence', title: '归宿', html: `<p>弹性与税负分担；垄断市场的转嫁能力。</p>` }
        ], refs: [] } },
      { title: '市场失灵与公共品', brief: '财政存在的理由。',
        q: [
          { stem: '公共品的特征是：', options: ['非竞争性与非排他性', '竞争性', '排他性', '稀缺'], answer: 0, explain: '两性。' },
          { stem: '免费搭车问题导致：', options: ['公共品供给不足', '供给过剩', '无影响', '价格上涨'], answer: 0, explain: '搭便车。' },
          { stem: '负外部性需要：', options: ['庇古税', '补贴', '放任', '国有化'], answer: 0, explain: '矫正税。' }
        ],
        doc: { lead: '这一章讲失灵。', sections: [
          { id: 'public', title: '公共品', html: `<p>非竞争/非排他；萨缪尔森条件；搭便车。</p>` },
          { id: 'externality', title: '外部性', html: `<p>庇古税与补贴、科斯定理、排污权。</p>` }
        ], refs: [] } },
      { title: '博弈与公共选择', brief: '集体决策的逻辑。',
        q: [
          { stem: '囚徒困境说明：', options: ['个体理性导致集体非理性', '合作必然', '无均衡', '零和'], answer: 0, explain: '困境。' },
          { stem: '投票悖论（阿罗不可能定理）说明：', options: ['不存在满足所有合理条件的完美投票规则', '投票无意义', '多数决最优', '独裁最好'], answer: 0, explain: '阿罗。' },
          { stem: '利益集团游说可能导致：', options: ['政策偏向少数人', '效率提高', '公平改善', '无影响'], answer: 0, explain: '俘获。' }
        ],
        doc: { lead: '这一章讲集体选择。', sections: [
          { id: 'game', title: '博弈', html: `<p>纳什均衡、囚徒困境、协调问题。</p>` },
          { id: 'choice', title: '公共选择', html: `<p>中位选民、投票悖论、利益集团与监管俘获。</p>` }
        ], refs: [] } }
    ]
  },
  /* 3 财政学原理 +5 */
  {
    chapters: [
      { title: '财政职能', brief: '配置、分配、稳定。',
        q: [
          { stem: '财政的三大职能是：', options: ['资源配置、收入分配、经济稳定', '收税、支出、借债', '预算、决算、审计', '中央、地方、基层'], answer: 0, explain: '马斯格雷夫。' },
          { stem: '收入分配职能主要通过：', options: ['税收与转移支付', '政府采购', '国债', '预算'], answer: 0, explain: '再分配。' },
          { stem: '稳定职能强调：', options: ['逆周期调节', '平衡预算', '扩大支出', '减税'], answer: 0, explain: '稳定。' }
        ],
        doc: { lead: '这一章讲职能。', sections: [
          { id: 'three', title: '三职能', html: `<p>配置（公共品）、分配（公平）、稳定（宏观）。</p>` },
          { id: 'conflict', title: '冲突', html: `<p>效率与公平、稳定与增长的权衡。</p>` }
        ], refs: [] } },
      { title: '公共品理论', brief: '为什么政府要提供。',
        q: [
          { stem: '纯公共品的例子是：', options: ['国防', '面包', '汽车', '手机'], answer: 0, explain: '非排他。' },
          { stem: '俱乐部的物品的特征是：', options: ['排他但非竞争', '非排他非竞争', '竞争排他', '纯公共'], answer: 0, explain: '拥挤点前。' },
          { stem: '公共品的最优供给要求：', options: ['各人边际收益之和等于边际成本', '平均成本等于价格', '收益最大', '成本最小'], answer: 0, explain: '萨缪尔森。' }
        ],
        doc: { lead: '这一章讲公共品。', sections: [
          { id: 'types', title: '分类', html: `<p>纯公共品、俱乐部品、公共资源、私人物品。</p>` },
          { id: 'supply', title: '供给', html: `<p>林达尔均衡、自愿供给、政府供给；公地悲剧。</p>` }
        ], refs: [] } },
      { title: '外部性', brief: '矫正市场的失灵。',
        q: [
          { stem: '庇古税的目的是：', options: ['使私人成本等于社会成本', '增加税收', '减少供给', '提高价格'], answer: 0, explain: '内部化。' },
          { stem: '科斯定理的前提是：', options: ['产权清晰且交易成本低', '政府干预', '税收', '补贴'], answer: 0, explain: '科斯。' },
          { stem: '排污权交易的优势是：', options: ['以最低成本减排', '增加税收', '禁止排放', '免费'], answer: 0, explain: '市场机制。' }
        ],
        doc: { lead: '这一章讲外部性。', sections: [
          { id: 'pigou', title: '庇古', html: `<p>税收与补贴；边际外部成本。</p>` },
          { id: 'coase', title: '科斯', html: `<p>产权、交易成本、排污权交易。</p>` }
        ], refs: [] } },
      { title: '财政体制', brief: '中央与地方的账。',
        q: [
          { stem: '分税制的核心是：', options: ['按税种划分中央与地方收入', '统一征收', '地方自主', '中央统收'], answer: 0, explain: '分税。' },
          { stem: '转移支付的作用是：', options: ['均衡地区财力、实现公共服务均等化', '增加税收', '控制支出', '减少债务'], answer: 0, explain: '均等化。' },
          { stem: '财政联邦主义关注：', options: ['支出责任与收入权限的匹配', '货币政策', '汇率', '贸易'], answer: 0, explain: '事权财权。' }
        ],
        doc: { lead: '这一章讲体制。', sections: [
          { id: 'system', title: '分税制', html: `<p>税种划分、共享税、转移支付。</p>` },
          { id: 'matching', title: '匹配', html: `<p>事权与支出责任划分；地方债管理。</p>` }
        ], refs: [] } },
      { title: '赤字与公债', brief: '借钱的代价。',
        q: [
          { stem: '财政赤字的口径通常是：', options: ['支出减收入', '债务余额', '国债发行量', '税收缺口'], answer: 0, explain: '收支差。' },
          { stem: '李嘉图等价认为：', options: ['借债与征税等价（理性预期下）', '借债更好', '征税更好', '无关'], answer: 0, explain: '等价。' },
          { stem: '债务可持续的关键是：', options: ['名义增长率高于利率', '债务为零', '赤字为零', '税收最高'], answer: 0, explain: 'r < g。' }
        ],
        doc: { lead: '这一章讲债务。', sections: [
          { id: 'deficit', title: '赤字', html: `<p>结构性/周期性；赤字口径与口径差异。</p>` },
          { id: 'debt', title: '公债', html: `<p>挤出效应、李嘉图等价、债务可持续性、代际负担。</p>` }
        ], refs: [] } }
    ]
  },
  /* 4 宏观经济学 +5 */
  {
    chapters: [
      { title: '国民收入核算', brief: '财政政策的作用对象。',
        q: [
          { stem: '支出法 GDP 包括：', options: ['C+I+G+NX', '工资+利润', '消费+储蓄', '投资+税收'], answer: 0, explain: '四部门。' },
          { stem: '政府支出乘数等于：', options: ['1/(1−MPC)', 'MPC', '1/MPC', 'MPC/(1−MPC)'], answer: 0, explain: '乘数。' },
          { stem: '自动稳定器包括：', options: ['累进税与失业保险', '政府采购', '国债', '转移支付唯一'], answer: 0, explain: '自动。' }
        ],
        doc: { lead: '这一章讲核算。', sections: [
          { id: 'identity', title: '恒等式', html: `<p>Y = C + I + G + NX；乘数效应。</p>` },
          { id: 'stabilizer', title: '稳定器', html: `<p>累进税、失业救济；相机抉择与规则。</p>` }
        ], refs: [] } },
      { title: 'IS-LM 与财政政策', brief: '挤出效应。',
        q: [
          { stem: '扩张性财政政策会：', options: ['提高利率、挤出投资', '降低利率', '无影响', '减少产出'], answer: 0, explain: '挤出。' },
          { stem: '流动性陷阱下财政政策：', options: ['效果最强', '无效', '效果弱', '不确定'], answer: 0, explain: '无挤出。' },
          { stem: '财政政策乘数在开放经济下：', options: ['因进口漏出而变小', '变大', '不变', '为零'], answer: 0, explain: '漏出。' }
        ],
        doc: { lead: '这一章讲政策。', sections: [
          { id: 'islm', title: 'IS-LM', html: `<p>财政扩张的产出与利率效应。</p>` },
          { id: 'crowd', title: '挤出', html: `<p>完全/部分挤出；开放经济下的漏出。</p>` }
        ], refs: [] } },
      { title: '通胀与失业', brief: '宏观稳定目标。',
        q: [
          { stem: '菲利普斯曲线表明：', options: ['通胀与失业短期此消彼长', '同向', '无关', '长期有效'], answer: 0, explain: '替代。' },
          { stem: '通胀对财政的影响是：', options: ['侵蚀实际税收与债务实际值', '增加实际税收', '无影响', '减少名义债务'], answer: 0, explain: '通胀税。' },
          { stem: '滞胀的成因通常是：', options: ['供给冲击', '需求不足', '货币紧缩', '财政紧缩'], answer: 0, explain: '供给。' }
        ],
        doc: { lead: '这一章讲两大问题。', sections: [
          { id: 'phillips', title: '曲线', html: `<p>短期替代、长期垂直。</p>` },
          { id: 'fiscal', title: '财政影响', html: `<p>通胀税、指数化、赤字货币化。</p>` }
        ], refs: [] } },
      { title: '开放经济', brief: '汇率与财政。',
        q: [
          { stem: '浮动汇率下财政扩张：', options: ['被净出口下降抵消', '效果增强', '无影响', '减少产出'], answer: 0, explain: '汇率升值。' },
          { stem: '固定汇率下财政政策：', options: ['效果较强', '无效', '较弱', '不确定'], answer: 0, explain: 'M-F。' },
          { stem: '三元悖论指：', options: ['汇率稳定、资本流动、货币独立不可兼得', '增长、通胀、就业', '出口、投资、消费', '利率、汇率、税率'], answer: 0, explain: '不可能三角。' }
        ],
        doc: { lead: '这一章讲开放。', sections: [
          { id: 'mf', title: 'M-F', html: `<p>不同汇率制度下的政策效果。</p>` },
          { id: 'trilemma', title: '三角', html: `<p>政策组合选择。</p>` }
        ], refs: [] } },
      { title: '增长与结构', brief: '财政的长期作用。',
        q: [
          { stem: '财政对长期增长的作用主要通过：', options: ['基础设施、教育、研发', '转移支付', '国债', '补贴'], answer: 0, explain: '生产性支出。' },
          { stem: '税收对增长的影响取决于：', options: ['税种结构与税率水平', '征收方式', '预算', '债务'], answer: 0, explain: '结构。' },
          { stem: '结构性改革的财政配套包括：', options: ['支出优化与税制改革', '扩大赤字', '增加补贴', '提高关税'], answer: 0, explain: '配套。' }
        ],
        doc: { lead: '这一章讲长期。', sections: [
          { id: 'growth', title: '增长', html: `<p>公共资本、人力资本、研发；挤出与挤入。</p>` },
          { id: 'structure', title: '结构', html: `<p>税制结构、支出结构、央地关系。</p>` }
        ], refs: [] } }
    ]
  },
  /* 5 统计学 +5 */
  {
    chapters: [
      { title: '描述统计', brief: '财政数据的画像。',
        q: [
          { stem: '基尼系数衡量：', options: ['收入不平等', '贫困', '增长', '税负'], answer: 0, explain: '不平等。' },
          { stem: '财政支出占 GDP 比重是：', options: ['宏观税负/支出规模的常用指标', '税率', '赤字率', '债务率'], answer: 0, explain: '规模。' },
          { stem: '中位数比均值更适合描述：', options: ['偏态分布（如收入）', '正态分布', '小样本', '时间序列'], answer: 0, explain: '稳健。' }
        ],
        doc: { lead: '这一章讲描述。', sections: [
          { id: 'center', title: '中心与离散', html: `<p>均值、中位数；标准差、分位数。</p>` },
          { id: 'index', title: '常用指数', html: `<p>基尼系数、赤字率、债务率、宏观税负。</p>` }
        ], refs: [] } },
      { title: '抽样与推断', brief: '从样本看总体。',
        q: [
          { stem: '标准误随样本量：', options: ['减小', '增大', '不变', '先增后减'], answer: 0, explain: 'σ/√n。' },
          { stem: '95% 置信区间表示：', options: ['重复抽样约 95% 覆盖真值', '真值概率', '正确率', '显著'], answer: 0, explain: '覆盖率。' },
          { stem: '中心极限定理要求：', options: ['大样本', '总体正态', '方差已知', '小样本'], answer: 0, explain: 'CLT。' }
        ],
        doc: { lead: '这一章讲推断。', sections: [
          { id: 'sampling', title: '抽样', html: `<p>抽样分布、标准误、大数定律。</p>` },
          { id: 'estimate', title: '估计', html: `<p>点估计、区间估计、权重与设计效应。</p>` }
        ], refs: [] } },
      { title: '假设检验', brief: '政策效果是否显著。',
        q: [
          { stem: 'p 值表示：', options: ['原假设下出现当前结果的概率', '原假设为真概率', '正确率', '效应大小'], answer: 0, explain: '条件概率。' },
          { stem: '第一类错误是：', options: ['弃真', '取伪', '抽样偏差', '计算错误'], answer: 0, explain: 'α。' },
          { stem: '多重检验会导致：', options: ['假阳性增加', '假阴性增加', '无影响', '样本减少'], answer: 0, explain: '数据窥探。' }
        ],
        doc: { lead: '这一章讲检验。', sections: [
          { id: 'logic', title: '逻辑', html: `<p>H0/H1、显著性、功效。</p>` },
          { id: 'multiple', title: '多重', html: `<p>Bonferroni、FDR；政策评估中的稳健性。</p>` }
        ], refs: [] } },
      { title: '回归分析', brief: '财政数据的因果尝试。',
        q: [
          { stem: 'R² 表示：', options: ['解释的方差比例', '因果强度', '显著性', '样本量'], answer: 0, explain: '拟合。' },
          { stem: '遗漏变量偏误的条件是：', options: ['遗漏变量影响 Y 且与 X 相关', '样本小', '变量多', '模型复杂'], answer: 0, explain: '混淆。' },
          { stem: '税收与增长的内生性来自：', options: ['增长影响税收、税收影响增长', '样本偏差', '测量误差', '共线'], answer: 0, explain: '联立。' }
        ],
        doc: { lead: '这一章讲回归。', sections: [
          { id: 'ols', title: 'OLS', html: `<p>系数解释、拟合优度、诊断。</p>` },
          { id: 'endo', title: '内生性', html: `<p>财政变量的双向因果；IV 与 DID。</p>` }
        ], refs: [] } },
      { title: '时间序列', brief: '财政数据的动态。',
        q: [
          { stem: '单位根检验用于：', options: ['判断平稳性', '检验均值', '检验方差', '检验相关'], answer: 0, explain: 'ADF。' },
          { stem: '财政数据的季节性主要来自：', options: ['预算年度与收支节奏', '随机波动', '趋势', '政策'], answer: 0, explain: '季节。' },
          { stem: '协整关系意味着：', options: ['非平稳序列存在长期均衡', '短期相关', '无关系', '因果'], answer: 0, explain: '协整。' }
        ],
        doc: { lead: '这一章讲时序。', sections: [
          { id: 'stationary', title: '平稳', html: `<p>自相关、单位根、差分。</p>` },
          { id: 'cointegration', title: '协整', html: `<p>长期均衡、误差修正模型；财政可持续性检验。</p>` }
        ], refs: [] } }
    ]
  },
  /* 6 税收学 +5 */
  {
    chapters: [
      { title: '税制要素', brief: '谁征、征谁、征多少。',
        q: [
          { stem: '税制的基本要素不包括：', options: ['纳税人', '课税对象', '税率', '预算'], answer: 3, explain: '预算不是要素。' },
          { stem: '比例税率与累进税率的区别是：', options: ['税率是否随税基变化', '是否合法', '是否直接税', '是否地方税'], answer: 0, explain: '累进。' },
          { stem: '直接税与间接税的划分依据是：', options: ['税负能否转嫁', '税率高低', '征收机关', '税基'], answer: 0, explain: '转嫁。' }
        ],
        doc: { lead: '这一章讲要素。', sections: [
          { id: 'elements', title: '要素', html: `<p>纳税人、课税对象、税率、纳税环节、减免。</p>` },
          { id: 'types', title: '分类', html: `<p>直接/间接、流转/所得/财产、中央/地方。</p>` }
        ], refs: [] } },
      { title: '税负转嫁与归宿', brief: '谁真正掏钱。',
        q: [
          { stem: '税负转嫁的主要方式是：', options: ['前转（提价）', '后转（压价）', '消转', '以上都是'], answer: 3, explain: '多种。' },
          { stem: '需求弹性越小，消费者承担的税负：', options: ['越多', '越少', '不变', '无关'], answer: 0, explain: '弹性。' },
          { stem: '税收归宿研究的核心是：', options: ['税负最终由谁承担', '征收成本', '税率高低', '税种数量'], answer: 0, explain: '归宿。' }
        ],
        doc: { lead: '这一章讲归宿。', sections: [
          { id: 'shift', title: '转嫁', html: `<p>前转、后转、消转；市场结构影响。</p>` },
          { id: 'incidence', title: '归宿', html: `<p>法定归宿与经济归宿；弹性法则；一般均衡归宿。</p>` }
        ], refs: [] } },
      { title: '税收效率与公平', brief: '两个标尺。',
        q: [
          { stem: '税收超额负担来自：', options: ['替代效应导致的数量扭曲', '征管成本', '税率', '税基'], answer: 0, explain: '无谓损失。' },
          { stem: '横向公平指：', options: ['相同情况相同对待', '不同情况不同对待', '累进', '平均'], answer: 0, explain: '横向。' },
          { stem: '纵向公平关注：', options: ['不同负担能力者之间的差别对待', '相同情况', '征管', '效率'], answer: 0, explain: '纵向。' }
        ],
        doc: { lead: '这一章讲两大标准。', sections: [
          { id: 'efficiency', title: '效率', html: `<p>超额负担、弹性与税率；拉姆齐法则。</p>` },
          { id: 'equity', title: '公平', html: `<p>横向/纵向公平；受益原则与能力原则。</p>` }
        ], refs: [] } },
      { title: '最优税收', brief: '怎么征最不坏。',
        q: [
          { stem: '拉姆齐法则建议：', options: ['对弹性小的商品征较高税', '对所有商品同税率', '只征所得税', '只征财产税'], answer: 0, explain: '逆弹性。' },
          { stem: '最优所得税理论关注：', options: ['效率与再分配的权衡', '征管成本', '税率单一', '税基'], answer: 0, explain: 'Mirrlees。' },
          { stem: '单一税率（flat tax）的争议在于：', options: ['简化与公平的取舍', '是否合法', '征管', '税基'], answer: 0, explain: '取舍。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'ramsey', title: '拉姆齐', html: `<p>逆弹性法则；商品税设计。</p>` },
          { id: 'income', title: '所得税', html: `<p>最优边际税率、负所得税、flat tax 争论。</p>` }
        ], refs: [] } },
      { title: '中国税制', brief: '主要税种。',
        q: [
          { stem: '我国第一大税种通常是：', options: ['增值税', '个人所得税', '关税', '房产税'], answer: 0, explain: '增值税。' },
          { stem: '个人所得税的征收模式是：', options: ['综合与分类相结合', '完全分类', '完全综合', '单一税率'], answer: 0, explain: '混合。' },
          { stem: '减税降费的主要目标是：', options: ['降低企业负担、激发活力', '增加税收', '扩大赤字', '提高利率'], answer: 0, explain: '减负。' }
        ],
        doc: { lead: '这一章讲税制。', sections: [
          { id: 'major', title: '主要税种', html: `<p>增值税、企业所得税、个人所得税、消费税、关税。</p>` },
          { id: 'reform', title: '改革', html: `<p>营改增、个税综合、减税降费、地方税体系。</p>` }
        ], refs: [] } }
    ]
  },
  /* 7 政府预算 +5 */
  {
    chapters: [
      { title: '预算程序', brief: '钱怎么批。',
        q: [
          { stem: '政府预算的程序包括：', options: ['编制、审批、执行、决算', '收税、支出', '借债、还债', '审计、公开'], answer: 0, explain: '四阶段。' },
          { stem: '预算审批权属于：', options: ['人民代表大会', '财政部门', '审计署', '政府'], answer: 0, explain: '人大。' },
          { stem: '四本预算包括：', options: ['一般公共、政府性基金、国有资本经营、社会保险基金', '中央、地方、部门、项目', '收入、支出、赤字、债务', '预算、决算、审计、公开'], answer: 0, explain: '四本账。' }
        ],
        doc: { lead: '这一章讲程序。', sections: [
          { id: 'stages', title: '四阶段', html: `<p>编制（部门→财政）→ 审批（人大）→ 执行 → 决算与审计。</p>` },
          { id: 'books', title: '四本账', html: `<p>一般公共预算、政府性基金、国有资本经营、社会保险基金。</p>` }
        ], refs: [] } },
      { title: '绩效预算', brief: '花钱要问效果。',
        q: [
          { stem: '绩效预算的核心是：', options: ['预算与产出/结果挂钩', '控制支出', '增加税收', '减少赤字'], answer: 0, explain: '绩效。' },
          { stem: '绩效评价的"3E"指：', options: ['经济性、效率性、有效性', '公平、公开、公正', '预算、决算、审计', '投入、过程、产出'], answer: 0, explain: '3E。' },
          { stem: '绩效目标管理的难点是：', options: ['目标量化与归因', '预算编制', '审批', '执行'], answer: 0, explain: '量化。' }
        ],
        doc: { lead: '这一章讲绩效。', sections: [
          { id: 'logic', title: '逻辑', html: `<p>投入—产出—结果—影响；绩效目标与指标。</p>` },
          { id: 'practice', title: '实践', html: `<p>事前评估、事中监控、事后评价；结果应用。</p>` }
        ], refs: [] } },
      { title: '国库集中支付', brief: '钱不经过部门账户。',
        q: [
          { stem: '国库集中支付的作用是：', options: ['减少资金沉淀、加强监督', '增加收入', '减少支出', '方便部门'], answer: 0, explain: '集中。' },
          { stem: '直接支付与授权支付的区别是：', options: ['由国库直接付 vs 部门经授权付', '金额大小', '中央地方', '预算内外'], answer: 0, explain: '两种方式。' },
          { stem: '政府采购的主要目标是：', options: ['规范、透明、物有所值', '省钱唯一', '支持国企', '限制竞争'], answer: 0, explain: '规范。' }
        ],
        doc: { lead: '这一章讲执行。', sections: [
          { id: 'treasury', title: '国库', html: `<p>集中收付、直接/授权支付、零余额账户。</p>` },
          { id: 'procurement', title: '采购', html: `<p>公开招标、竞争性谈判；物有所值与合规。</p>` }
        ], refs: [] } },
      { title: '政府会计', brief: '账怎么记。',
        q: [
          { stem: '政府会计实行：', options: ['预算会计与财务会计双功能', '只有预算会计', '只有财务会计', '收付实现制唯一'], answer: 0, explain: '双体系。' },
          { stem: '权责发生制的好处是：', options: ['反映资产负债全貌', '简单', '收付清晰', '便于拨款'], answer: 0, explain: '资产负债。' },
          { stem: '政府综合财务报告的作用是：', options: ['反映政府整体财务状况', '预算审批', '税收征管', '审计唯一'], answer: 0, explain: '整体。' }
        ],
        doc: { lead: '这一章讲会计。', sections: [
          { id: 'dual', title: '双体系', html: `<p>预算会计（收付实现） + 财务会计（权责发生）。</p>` },
          { id: 'report', title: '报告', html: `<p>政府综合财务报告、资产负债表、运行情况。</p>` }
        ], refs: [] } },
      { title: '预算公开与监督', brief: '看得见的账本。',
        q: [
          { stem: '预算公开的核心要求是：', options: ['内容完整、细化到项级', '只公开总数', '内部公开', '年度一次'], answer: 0, explain: '细化。' },
          { stem: '审计监督的主体是：', options: ['审计机关', '财政部门', '人大', '纪委监委'], answer: 0, explain: '审计。' },
          { stem: '人大监督预算的主要环节是：', options: ['审批、执行监督、决算审查', '编制', '执行', '审计'], answer: 0, explain: '监督。' }
        ],
        doc: { lead: '这一章讲透明。', sections: [
          { id: 'disclosure', title: '公开', html: `<p>公开范围、细化程度、可读性；平台与时限。</p>` },
          { id: 'oversight', title: '监督', html: `<p>人大、审计、社会监督；问责机制。</p>` }
        ], refs: [] } }
    ]
  },
  /* 8 公共经济学 +5 */
  {
    chapters: [
      { title: '公共品供给机制', brief: '政府还是市场。',
        q: [
          { stem: '公共品供给的政府失灵表现为：', options: ['效率低、寻租', '供给不足唯一', '价格高', '无竞争'], answer: 0, explain: '失灵。' },
          { stem: 'PPP 模式的核心是：', options: ['政府与社会资本合作', '私有化', '国有化', '补贴'], answer: 0, explain: '合作。' },
          { stem: '公共品提供的"用脚投票"（蒂布特）指：', options: ['居民选择社区以匹配偏好', '投票选举', '迁移出国', '抗议'], answer: 0, explain: '蒂布特。' }
        ],
        doc: { lead: '这一章讲供给。', sections: [
          { id: 'modes', title: '方式', html: `<p>政府直接供给、购买服务、PPP、社区自治。</p>` },
          { id: 'failure', title: '失灵', html: `<p>政府失灵与市场失灵；蒂布特模型。</p>` }
        ], refs: [] } },
      { title: '公共选择', brief: '政治过程的经济学。',
        q: [
          { stem: '中位选民定理说明：', options: ['多数决结果接近中位选民偏好', '少数决定', '全体一致', '随机'], answer: 0, explain: '中位。' },
          { stem: '阿罗不可能定理指出：', options: ['不存在满足所有合理条件的完美投票规则', '投票无用', '独裁最好', '多数决完美'], answer: 0, explain: '阿罗。' },
          { stem: '官僚预算最大化理论（尼斯坎南）认为：', options: ['官僚倾向扩大预算', '官僚节约', '预算由市场定', '无影响'], answer: 0, explain: '尼斯坎南。' }
        ],
        doc: { lead: '这一章讲选择。', sections: [
          { id: 'voting', title: '投票', html: `<p>中位选民、投票悖论、议程操纵。</p>` },
          { id: 'bureau', title: '官僚', html: `<p>预算最大化、信息不对称、监管俘获。</p>` }
        ], refs: [] } },
      { title: '成本收益分析', brief: '项目该不该上。',
        q: [
          { stem: '成本收益分析的核心指标是：', options: ['净现值', '回收期', '内部收益率', '利润率'], answer: 0, explain: 'NPV。' },
          { stem: '社会贴现率的选择影响：', options: ['代际公平与项目取舍', '税率', '预算', '债务'], answer: 0, explain: '贴现。' },
          { stem: '影子价格用于：', options: ['纠正市场扭曲后的项目评估', '市场价格', '税率', '补贴'], answer: 0, explain: '影子价格。' }
        ],
        doc: { lead: '这一章讲评估。', sections: [
          { id: 'npv', title: 'NPV', html: `<p>现金流、贴现率、敏感性分析。</p>` },
          { id: 'shadow', title: '影子价格', html: `<p>纠正税收/补贴/汇率扭曲；非市场物品估值。</p>` }
        ], refs: [] } },
      { title: '转移支付', brief: '均等化与再分配。',
        q: [
          { stem: '一般性转移支付的特点是：', options: ['不指定用途、地方自主', '专项指定', '按项目', '需配套'], answer: 0, explain: '一般性。' },
          { stem: '专项转移支付的问题是：', options: ['碎片化与地方配套压力', '不透明', '无监管', '金额小'], answer: 0, explain: '专项。' },
          { stem: '转移支付均等化的目标是：', options: ['基本公共服务均等化', '收入完全平均', '税收统一', '支出统一'], answer: 0, explain: '均等化。' }
        ],
        doc: { lead: '这一章讲转移支付。', sections: [
          { id: 'types', title: '两类', html: `<p>一般性（财力性）与专项；公式法与因素法。</p>` },
          { id: 'goal', title: '目标', html: `<p>公共服务均等化；激励与约束。</p>` }
        ], refs: [] } },
      { title: '公共规制', brief: '政府怎么管市场。',
        q: [
          { stem: '经济性规制针对：', options: ['自然垄断行业的准入与价格', '安全', '环境', '质量'], answer: 0, explain: '经济性。' },
          { stem: '社会性规制针对：', options: ['安全、健康、环境', '价格', '准入', '退出'], answer: 0, explain: '社会性。' },
          { stem: '规制俘获指：', options: ['监管机构被被监管者影响', '企业被罚', '消费者受损', '市场失灵'], answer: 0, explain: '俘获。' }
        ],
        doc: { lead: '这一章讲规制。', sections: [
          { id: 'types', title: '两类', html: `<p>经济性（准入/价格）与社会性（安全/环境）。</p>` },
          { id: 'capture', title: '俘获', html: `<p>规制俘获、激励规制、成本收益审查。</p>` }
        ], refs: [] } }
    ]
  },
  /* 9 国有资产管理 +5 */
  {
    chapters: [
      { title: '国资体制', brief: '谁代表国家出资。',
        q: [
          { stem: '我国国有资产监管体制是：', options: ['国家统一所有、分级代表', '地方所有', '部门所有', '企业所有'], answer: 0, explain: '分级。' },
          { stem: '出资人职责由谁行使？', options: ['国资监管机构', '企业自身', '财政部门唯一', '人大'], answer: 0, explain: '出资人。' },
          { stem: '经营性国资的目标是：', options: ['保值增值与公共服务', '利润最大唯一', '规模最大', '就业唯一'], answer: 0, explain: '双重。' }
        ],
        doc: { lead: '这一章讲体制。', sections: [
          { id: 'system', title: '体制', html: `<p>国家所有、分级代表；出资人职责与监管职责分离。</p>` },
          { id: 'goals', title: '目标', html: `<p>保值增值、布局优化、公共服务。</p>` }
        ], refs: [] } },
      { title: '产权与资本', brief: '国有资本的流动。',
        q: [
          { stem: '国有资本投资运营公司的作用是：', options: ['专业化运作国有股权', '行政审批', '直接经营', '收税'], answer: 0, explain: '运作。' },
          { stem: '混合所有制改革的目标是：', options: ['引入非公资本、完善治理', '私有化', '国有化', '上市唯一'], answer: 0, explain: '混改。' },
          { stem: '国有资产流失的常见形式是：', options: ['低价转让、关联交易', '正常交易', '分红', '上市'], answer: 0, explain: '流失。' }
        ],
        doc: { lead: '这一章讲产权。', sections: [
          { id: 'companies', title: '两类公司', html: `<p>国有资本投资公司、运营公司。</p>` },
          { id: 'mixed', title: '混改', html: `<p>股权多元化、治理改善、防止流失。</p>` }
        ], refs: [] } },
      { title: '国企改革', brief: '从管资产到管资本。',
        q: [
          { stem: '国企改革的方向是：', options: ['管资本为主', '管人管事管资产', '行政化', '私有化'], answer: 0, explain: '管资本。' },
          { stem: '国企分类改革分为：', options: ['商业一类、商业二类、公益类', '大中小', '中央地方', '上市非上市'], answer: 0, explain: '分类。' },
          { stem: '现代企业制度的核心是：', options: ['产权清晰、权责明确、政企分开、管理科学', '利润最大', '国家控股', '职工持股'], answer: 0, explain: '四句话。' }
        ],
        doc: { lead: '这一章讲改革。', sections: [
          { id: 'direction', title: '方向', html: `<p>从管资产到管资本；授权经营体制。</p>` },
          { id: 'classification', title: '分类', html: `<p>商业一类/二类/公益类；差异化考核。</p>` }
        ], refs: [] } },
      { title: '国资监管', brief: '考核与防流失。',
        q: [
          { stem: '国资考核从"两利四率"转向：', options: ['一利五率', '只看利润', '只看规模', '只看负债'], answer: 0, explain: '指标演进。' },
          { stem: '防止国有资产流失的制度包括：', options: ['评估、进场交易、审计', '内部决定', '口头协议', '关联交易'], answer: 0, explain: '制度。' },
          { stem: '违规经营投资责任追究的作用是：', options: ['约束决策、防范风险', '增加收入', '减少投资', '激励'], answer: 0, explain: '追责。' }
        ],
        doc: { lead: '这一章讲监管。', sections: [
          { id: 'kpi', title: '考核', html: `<p>利润、资产负债率、研发投入、全员劳动生产率。</p>` },
          { id: 'risk', title: '防流失', html: `<p>资产评估、进场交易、责任追究、审计巡视。</p>` }
        ], refs: [] } },
      { title: '国有资本经营预算', brief: '国企分红怎么用。',
        q: [
          { stem: '国有资本经营预算的收入主要来自：', options: ['国企上缴利润', '税收', '国债', '收费'], answer: 0, explain: '利润上缴。' },
          { stem: '国资预算支出的方向包括：', options: ['国企改革、资本注入、民生', '行政开支', '国防唯一', '教育唯一'], answer: 0, explain: '支出。' },
          { stem: '提高国企利润上缴比例的意义是：', options: ['充实社保与民生', '增加企业负担', '减少投资', '降低效率'], answer: 0, explain: '民生。' }
        ],
        doc: { lead: '这一章讲预算。', sections: [
          { id: 'revenue', title: '收入', html: `<p>利润上缴、股息、产权转让。</p>` },
          { id: 'expenditure', title: '支出', html: `<p>资本注入、改革成本、调入一般公共预算。</p>` }
        ], refs: [] } }
    ]
  },
  /* 10 财政数据分析 +1 */
  {
    chapters: [
      { title: '数据工作流', brief: '从报表到结论。',
        q: [
          { stem: '财政数据分析的第一步是：', options: ['明确问题与指标', '建模', '画图', '写报告'], answer: 0, explain: '问题。' },
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
      { title: '实习复盘', brief: '把流程变成能力。',
        q: [
          { stem: '财政实习最该留下的是：', options: ['报表与分析记录', '工牌', '照片', '评语'], answer: 0, explain: '作品。' },
          { stem: '实习日志的推荐写法是：', options: ['问题—做法—结果—反思', '流水账', '只写结论', '只写感受'], answer: 0, explain: '结构化。' },
          { stem: '面试讲项目的最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'output', title: '三件套', html: `<p>一份预算/决算分析、一份政策梳理、一段流程复盘。</p>` },
          { id: 'review', title: '复盘', html: `<p>每周五行；项目结束写一页总结。</p>` }
        ], refs: [] } }
    ]
  },
  /* 12 考研与求职 +1 */
  {
    chapters: [
      { title: '复习规划与去向', brief: '考研与就业的时间线。',
        q: [
          { stem: '财政学考研专业课通常是：', options: ['财政学 + 税收学（或经济学综合）', '只有数学', '只有英语', '只有会计'], answer: 0, explain: '专业课。' },
          { stem: '财政学就业方向包括：', options: ['财政税务部门、会计师事务所、企业财务', '只有高校', '只有银行', '只有制造业'], answer: 0, explain: '多元。' },
          { stem: '求职最加分的材料是：', options: ['实习 + 数据分析能力', '证书数量', '成绩单', '社团'], answer: 0, explain: '能力。' }
        ],
        doc: { lead: '这一章讲规划。', sections: [
          { id: 'exam', title: '考研', html: `<p>数学、英语、政治、专业课；3–6 月基础，7–8 月真题，9–12 月强化。</p>` },
          { id: 'job', title: '就业', html: `<p>财税部门、事务所、企业财务；CPA/税务师是加分项。</p>` }
        ], refs: [] } }
    ]
  }
]);
