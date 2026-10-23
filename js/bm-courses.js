/* ==========================================================
   bm-courses.js · 工商管理：12 门课（主干 8 / 出口 4）= 84 关
   ========================================================== */

(function () {
  var MAJOR = 'management-工商管理';
  var TITLES = stageTitlesOf('management');

  var COURSES = [
    { name: '管理学原理', chapters: [
      { title: '管理与管理者', brief: '管理是什么。',
        q: [
          { stem: '管理的四项基本职能是：', options: ['计划、组织、领导、控制', '计划、执行、检查、改进', '决策、沟通、激励、创新', '生产、营销、财务、人事'], answer: 0, explain: '四大职能。' },
          { stem: '管理者的三种技能是：', options: ['技术、人际、概念', '决策、沟通、执行', '计划、组织、控制', '生产、销售、财务'], answer: 0, explain: '卡茨模型。' },
          { stem: '效率与效果的区别是：', options: ['做事方式 vs 做事目标', '成本 vs 收益', '短期 vs 长期', '内部 vs 外部'], answer: 0, explain: 'efficiency/effectiveness。' }
        ],
        doc: { lead: '这一章讲基本概念。', sections: [
          { id: 'concept', title: '概念', html: `<p>管理的定义、职能；效率与效果；管理者的角色与技能。</p>` },
          { id: 'environment', title: '环境', html: `<p>组织环境、利益相关者；管理的普遍性与权变性。</p>` }
        ], refs: [] } },
      { title: '管理思想史', brief: '前人怎么想。',
        q: [
          { stem: '泰勒的科学管理核心是：', options: ['用科学方法提高劳动效率', '人际关系', '系统论', '权变思想'], answer: 0, explain: '科学管理。' },
          { stem: '梅奥的霍桑实验发现：', options: ['人是社会人、非正式组织存在', '经济人假设成立', '技术决定一切', '制度万能'], answer: 0, explain: '霍桑。' },
          { stem: '权变理论强调：', options: ['没有唯一最佳的管理方式', '存在普适原则', '只看制度', '只看文化'], answer: 0, explain: '权变。' }
        ],
        doc: { lead: '这一章讲思想史。', sections: [
          { id: 'classical', title: '古典', html: `<p>泰勒科学管理、法约尔过程理论、韦伯官僚制。</p>` },
          { id: 'modern', title: '现代', html: `<p>行为科学、系统理论、权变理论；学习型组织。</p>` }
        ], refs: [] } },
      { title: '计划与决策', brief: '定方向。',
        q: [
          { stem: '计划工作的核心是：', options: ['目标与实现路径', '预算', '人员', '考核'], answer: 0, explain: '目标。' },
          { stem: '理性决策模型的假设是：', options: ['信息完全、决策者完全理性', '信息不完全', '有限理性', '直觉决策'], answer: 0, explain: '完全理性。' },
          { stem: '目标管理（MBO）的关键是：', options: ['上下共同设定可考核目标', '上级下达', '只看结果', '只看过程'], answer: 0, explain: 'MBO。' }
        ],
        doc: { lead: '这一章讲计划。', sections: [
          { id: 'planning', title: '计划', html: `<p>计划层次、目标与手段链；MBO、滚动计划。</p>` },
          { id: 'decision', title: '决策', html: `<p>决策过程、理性与有限理性；群体决策与偏差。</p>` }
        ], refs: [] } },
      { title: '组织设计', brief: '分工与结构。',
        q: [
          { stem: '管理幅度与管理层次的关系是：', options: ['幅度越大层次越少', '幅度越大层次越多', '无关', '正比'], answer: 0, explain: '反比。' },
          { stem: '事业部制的特点是：', options: ['按产品或地区分权经营', '高度集权', '职能集中', '矩阵双线'], answer: 0, explain: '事业部。' },
          { stem: '矩阵结构的缺点是：', options: ['双重领导易冲突', '反应慢', '缺乏专业分工', '集权过度'], answer: 0, explain: '双线。' }
        ],
        doc: { lead: '这一章讲组织。', sections: [
          { id: 'design', title: '设计要素', html: `<p>分工、部门化、幅度与层次、集权与分权。</p>` },
          { id: 'structure', title: '结构类型', html: `<p>直线职能、事业部、矩阵、网络型；选择依据。</p>` }
        ], refs: [] } },
      { title: '领导与激励', brief: '带人。',
        q: [
          { stem: '马斯洛需求层次最高层是：', options: ['自我实现', '尊重', '社交', '安全'], answer: 0, explain: '自我实现。' },
          { stem: '赫茨伯格双因素理论中，激励因素指：', options: ['与工作内容相关、能带来满意', '薪酬福利', '工作条件', '公司政策'], answer: 0, explain: '激励因素。' },
          { stem: '领导权变理论强调：', options: ['领导风格应随情境调整', '风格固定', '只看人格', '只看制度'], answer: 0, explain: '权变。' }
        ],
        doc: { lead: '这一章讲领导。', sections: [
          { id: 'motivation', title: '激励', html: `<p>需求层次、双因素、期望理论、公平理论。</p>` },
          { id: 'leadership', title: '领导', html: `<p>特质、行为、权变理论；领导与管理的区别。</p>` }
        ], refs: [] } },
      { title: '控制与沟通', brief: '纠偏与对话。',
        q: [
          { stem: '控制过程的三步骤是：', options: ['确立标准、衡量绩效、纠正偏差', '计划、执行、检查', '输入、处理、输出', '决策、沟通、反馈'], answer: 0, explain: '三步骤。' },
          { stem: '前馈控制的特点是：', options: ['事前预防', '事中纠正', '事后总结', '不做控制'], answer: 0, explain: '前馈。' },
          { stem: '有效沟通的障碍包括：', options: ['过滤、选择性知觉、情绪、语言', '只有语言', '只有情绪', '无阻碍'], answer: 0, explain: '多障碍。' }
        ],
        doc: { lead: '这一章讲控制。', sections: [
          { id: 'control', title: '控制', html: `<p>前馈、同期、反馈控制；控制点与例外管理。</p>` },
          { id: 'communication', title: '沟通', html: `<p>沟通渠道、障碍与改进；冲突管理。</p>` }
        ], refs: [] } },
      { title: '组织文化', brief: '软实力。',
        q: [
          { stem: '组织文化的层次包括：', options: ['物质、制度、精神（价值观）', '只有物质', '只有制度', '只有精神'], answer: 0, explain: '三层次。' },
          { stem: '强势文化的作用是：', options: ['统一行为、降低协调成本', '增加成本', '阻碍变革', '无作用'], answer: 0, explain: '强势文化。' },
          { stem: '文化变革的难点是：', options: ['价值观深层且惯性大', '成本高', '人少', '制度多'], answer: 0, explain: '惯性。' }
        ],
        doc: { lead: '这一章讲文化。', sections: [
          { id: 'level', title: '层次', html: `<p>物质层、制度层、精神层；文化形成机制。</p>` },
          { id: 'change', title: '变革', html: `<p>文化诊断、变革阻力、领导者作用。</p>` }
        ], refs: [] } },
      { title: '管理案例与方法', brief: '用起来。',
        q: [
          { stem: '案例分析的步骤是：', options: ['识别问题—分析原因—提出方案—评价', '只看结论', '只提方案', '只描述'], answer: 0, explain: '四步。' },
          { stem: 'SWOT 分析包含：', options: ['优势、劣势、机会、威胁', '计划、组织、领导、控制', '人财物信息', '产供销'], answer: 0, explain: 'SWOT。' },
          { stem: '管理研究方法包括：', options: ['问卷、访谈、案例、实验', '只有问卷', '只有访谈', '只有实验'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'case', title: '案例', html: `<p>案例分析框架；问题界定与方案评价。</p>` },
          { id: 'method', title: '方法', html: `<p>SWOT、PEST、五力模型；调研方法。</p>` }
        ], refs: [] } }
    ] },
    { name: '微观经济学', chapters: [
      { title: '供求与均衡', brief: '价格怎么定。',
        q: [
          { stem: '需求定律表明：', options: ['价格上升需求量下降', '价格上升需求上升', '无关', '成正比'], answer: 0, explain: '需求定律。' },
          { stem: '均衡价格是：', options: ['供给量等于需求量时的价格', '最高价格', '最低价格', '成本价格'], answer: 0, explain: '均衡。' },
          { stem: '需求价格弹性大于 1 时，降价会使收入：', options: ['增加', '减少', '不变', '不确定'], answer: 0, explain: '弹性。' }
        ],
        doc: { lead: '这一章讲供求。', sections: [
          { id: 'demand', title: '供求', html: `<p>需求与供给曲线、影响因素；均衡与变动。</p>` },
          { id: 'elasticity', title: '弹性', html: `<p>需求/供给弹性、收入与交叉弹性；应用。</p>` }
        ], refs: [] } },
      { title: '消费者行为', brief: '怎么选。',
        q: [
          { stem: '边际效用递减规律说明：', options: ['消费越多每单位新增效用越低', '越高', '不变', '无关'], answer: 0, explain: '递减。' },
          { stem: '消费者均衡条件是：', options: ['各商品边际效用与价格之比相等', '总效用最大唯一', '收入全部花完', '价格相等'], answer: 0, explain: '均衡。' },
          { stem: '无差异曲线的特点是：', options: ['向右下方倾斜且凸向原点', '向上倾斜', '直线', '凹向原点'], answer: 0, explain: '无差异。' }
        ],
        doc: { lead: '这一章讲消费。', sections: [
          { id: 'utility', title: '效用', html: `<p>总效用与边际效用；消费者剩余。</p>` },
          { id: 'indifference', title: '无差异曲线', html: `<p>偏好、预算线、替代率；最优选择。</p>` }
        ], refs: [] } },
      { title: '生产与成本', brief: '怎么生产。',
        q: [
          { stem: '边际报酬递减发生在：', options: ['其他要素不变、连续增加一种要素', '所有要素同比例增加', '技术不变唯一', '长期'], answer: 0, explain: '递减。' },
          { stem: '短期与长期的区别是：', options: ['是否所有要素都可变', '时间长短', '产量大小', '成本高低'], answer: 0, explain: '要素可变。' },
          { stem: '平均成本与边际成本的关系是：', options: ['MC 穿过 AC 最低点', 'MC 总高于 AC', 'AC 穿过 MC 最低点', '无关'], answer: 0, explain: '交点。' }
        ],
        doc: { lead: '这一章讲生产。', sections: [
          { id: 'production', title: '生产', html: `<p>生产函数、边际报酬、等产量线；规模经济。</p>` },
          { id: 'cost', title: '成本', html: `<p>短期成本曲线、长期成本；范围经济。</p>` }
        ], refs: [] } },
      { title: '市场结构', brief: '竞争程度。',
        q: [
          { stem: '完全竞争市场的特征是：', options: ['众多厂商、同质产品、自由进出', '只有一家', '产品差异大', '进入壁垒高'], answer: 0, explain: '完全竞争。' },
          { stem: '垄断厂商的定价原则是：', options: ['MR = MC', 'P = MC', 'P = AC', 'MR = 0'], answer: 0, explain: '利润最大化。' },
          { stem: '寡头市场的特点是：', options: ['少数厂商相互依存', '只有一家', '无进入壁垒', '同质唯一'], answer: 0, explain: '寡头。' }
        ],
        doc: { lead: '这一章讲市场。', sections: [
          { id: 'competition', title: '竞争', html: `<p>完全竞争、垄断竞争；短期与长期均衡。</p>` },
          { id: 'monopoly', title: '垄断与寡头', html: `<p>垄断定价、无谓损失；博弈与策略行为。</p>` }
        ], refs: [] } },
      { title: '要素市场与分配', brief: '谁得到什么。',
        q: [
          { stem: '劳动需求取决于：', options: ['劳动的边际产品价值', '工资唯一', '人口', '资本'], answer: 0, explain: '派生需求。' },
          { stem: '基尼系数衡量：', options: ['收入分配不平等程度', '经济增长', '通货膨胀', '失业'], answer: 0, explain: '基尼。' },
          { stem: '要素价格由：', options: ['供求共同决定', '政府决定', '厂商单方决定', '工人单方决定'], answer: 0, explain: '供求。' }
        ],
        doc: { lead: '这一章讲分配。', sections: [
          { id: 'factor', title: '要素', html: `<p>劳动、资本、土地市场；边际生产力分配论。</p>` },
          { id: 'inequality', title: '分配', html: `<p>基尼系数、洛伦兹曲线；再分配政策。</p>` }
        ], refs: [] } },
      { title: '市场失灵', brief: '市场不管的地方。',
        q: [
          { stem: '外部性导致：', options: ['私人成本与社会成本偏离', '价格上升', '产量下降唯一', '无影响'], answer: 0, explain: '外部性。' },
          { stem: '公共物品的特点是：', options: ['非竞争性与非排他性', '竞争性', '排他性', '私有'], answer: 0, explain: '公共物品。' },
          { stem: '解决市场失灵的手段包括：', options: ['税收补贴、管制、产权界定', '只有税收', '只有管制', '无手段'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲失灵。', sections: [
          { id: 'externality', title: '外部性', html: `<p>正负外部性、科斯定理；庇古税。</p>` },
          { id: 'public', title: '公共与信息', html: `<p>公共物品、公地悲剧；信息不对称与逆向选择。</p>` }
        ], refs: [] } },
      { title: '博弈论初步', brief: '策略互动。',
        q: [
          { stem: '纳什均衡指：', options: ['给定对方策略无人愿单方面改变', '总体最优', '最大收益', '零和'], answer: 0, explain: '纳什。' },
          { stem: '囚徒困境说明：', options: ['个体理性导致集体非理性', '合作总是最优', '无均衡', '信息完全'], answer: 0, explain: '困境。' },
          { stem: '重复博弈中合作更可能因为：', options: ['长期利益与惩罚机制', '信息不完全', '一次性博弈', '无惩罚'], answer: 0, explain: '重复。' }
        ],
        doc: { lead: '这一章讲博弈。', sections: [
          { id: 'nash', title: '纳什均衡', html: `<p>策略式博弈、占优策略；囚徒困境。</p>` },
          { id: 'repeated', title: '动态博弈', html: `<p>重复博弈、声誉；序贯博弈与逆向归纳。</p>` }
        ], refs: [] } },
      { title: '微观应用与案例', brief: '用起来。',
        q: [
          { stem: '价格歧视的类型包括：', options: ['一级、二级、三级', '只有一级', '只有二级', '只有三级'], answer: 0, explain: '三级。' },
          { stem: '企业定价策略应考虑：', options: ['需求弹性、竞争与成本', '只有成本', '只有需求', '只有竞争'], answer: 0, explain: '综合。' },
          { stem: '微观分析的价值是：', options: ['理解选择与资源配置', '装饰', '预测股市', '替代会计'], answer: 0, explain: '分析框架。' }
        ],
        doc: { lead: '这一章讲应用。', sections: [
          { id: 'pricing', title: '定价', html: `<p>价格歧视、捆绑、两部定价；平台经济。</p>` },
          { id: 'case', title: '案例', html: `<p>用供求、弹性、博弈分析真实商业决策。</p>` }
        ], refs: [] } }
    ] },
    { name: '会计学基础', chapters: [
      { title: '会计与会计要素', brief: '会计是什么。',
        q: [
          { stem: '会计的基本职能是：', options: ['核算与监督', '预测与决策', '计划与控制', '组织与领导'], answer: 0, explain: '两大职能。' },
          { stem: '六大会计要素是：', options: ['资产、负债、所有者权益、收入、费用、利润', '资产、负债、权益、现金、收入、费用', '资产、负债、收入、费用、成本、利润', '流动、非流动、收入、费用、利润、权益'], answer: 0, explain: '六要素。' },
          { stem: '会计等式是：', options: ['资产 = 负债 + 所有者权益', '资产 = 负债', '收入 = 费用', '资产 = 收入'], answer: 0, explain: '基本等式。' }
        ],
        doc: { lead: '这一章讲要素。', sections: [
          { id: 'function', title: '职能', html: `<p>核算与监督；会计对象与目标；会计基本假设。</p>` },
          { id: 'elements', title: '要素', html: `<p>资产、负债、所有者权益、收入、费用、利润；会计等式。</p>` }
        ], refs: [] } },
      { title: '账户与复式记账', brief: '怎么记。',
        q: [
          { stem: '借贷记账法的记账规则是：', options: ['有借必有贷、借贷必相等', '只记借方', '只记贷方', '借贷不等'], answer: 0, explain: '记账规则。' },
          { stem: '资产类账户的增加记在：', options: ['借方', '贷方', '任意', '不记'], answer: 0, explain: '借方。' },
          { stem: '试算平衡的依据是：', options: ['借贷必相等', '资产等于负债', '收入等于费用', '现金等于银行'], answer: 0, explain: '平衡。' }
        ],
        doc: { lead: '这一章讲记账。', sections: [
          { id: 'account', title: '账户', html: `<p>账户结构、借贷方向；总账与明细账。</p>` },
          { id: 'journal', title: '分录', html: `<p>会计分录、过账、试算平衡；错账查找。</p>` }
        ], refs: [] } },
      { title: '凭证与账簿', brief: '流程。',
        q: [
          { stem: '会计凭证分为：', options: ['原始凭证与记账凭证', '收款与付款', '总账与明细账', '日记账与分类账'], answer: 0, explain: '两类。' },
          { stem: '会计账簿按用途分为：', options: ['日记账、分类账、备查账', '只有日记账', '只有分类账', '只有备查账'], answer: 0, explain: '三类。' },
          { stem: '对账的内容包括：', options: ['账证、账账、账实相符', '只有账证', '只有账账', '只有账实'], answer: 0, explain: '三相符。' }
        ],
        doc: { lead: '这一章讲流程。', sections: [
          { id: 'voucher', title: '凭证', html: `<p>原始凭证、记账凭证；审核与传递。</p>` },
          { id: 'book', title: '账簿', html: `<p>日记账、分类账；登记规则、对账与结账。</p>` }
        ], refs: [] } },
      { title: '期末处理与报表', brief: '出表。',
        q: [
          { stem: '资产负债表反映：', options: ['某一时点的财务状况', '一定期间经营成果', '现金流量', '所有者权益变动'], answer: 0, explain: '时点。' },
          { stem: '利润表反映：', options: ['一定期间的经营成果', '时点财务状况', '现金流量', '成本构成'], answer: 0, explain: '期间。' },
          { stem: '期末结转的目的是：', options: ['结平损益类账户、计算利润', '增加资产', '减少负债', '调整现金'], answer: 0, explain: '结转。' }
        ],
        doc: { lead: '这一章讲报表。', sections: [
          { id: 'closing', title: '期末', html: `<p>计提折旧、摊销、减值；结转损益。</p>` },
          { id: 'statements', title: '报表', html: `<p>资产负债表、利润表、现金流量表；勾稽关系。</p>` }
        ], refs: [] } },
      { title: '会计循环', brief: '一年怎么走。',
        q: [
          { stem: '会计循环的顺序是：', options: ['分录—过账—调整—结账—编表', '编表—分录—过账', '过账—分录—编表', '结账—分录—过账'], answer: 0, explain: '循环。' },
          { stem: '权责发生制要求：', options: ['按归属期确认收入费用', '收到现金才确认', '付出才确认', '按合同'], answer: 0, explain: '权责发生。' },
          { stem: '调整分录的作用是：', options: ['使收入费用归属正确期间', '增加现金', '减少负债', '调整资产'], answer: 0, explain: '调整。' }
        ],
        doc: { lead: '这一章讲循环。', sections: [
          { id: 'cycle', title: '循环', html: `<p>分录、过账、调整、结账、编表；工作底稿。</p>` },
          { id: 'accrual', title: '权责发生制', html: `<p>应计与递延；收入费用配比。</p>` }
        ], refs: [] } },
      { title: '财务报表分析初步', brief: '看懂表。',
        q: [
          { stem: '流动比率衡量：', options: ['短期偿债能力', '盈利能力', '营运能力', '成长能力'], answer: 0, explain: '流动比率。' },
          { stem: '毛利率等于：', options: ['(收入−成本)/收入', '净利润/收入', '收入/资产', '成本/收入'], answer: 0, explain: '毛利率。' },
          { stem: '现金流量表分为：', options: ['经营、投资、筹资活动', '收入、费用、利润', '资产、负债、权益', '短期、长期'], answer: 0, explain: '三类。' }
        ],
        doc: { lead: '这一章讲分析。', sections: [
          { id: 'ratio', title: '比率', html: `<p>偿债、营运、盈利、发展能力指标。</p>` },
          { id: 'cashflow', title: '现金流', html: `<p>三类活动现金流；利润与现金的差异。</p>` }
        ], refs: [] } },
      { title: '会计规范与职业道德', brief: '规矩。',
        q: [
          { stem: '会计信息质量要求包括：', options: ['可靠性、相关性、可比性等', '只有可靠性', '只有相关性', '无要求'], answer: 0, explain: '多项。' },
          { stem: '会计职业道德的核心是：', options: ['诚信与客观公正', '效率', '服从', '保密唯一'], answer: 0, explain: '诚信。' },
          { stem: '内控的目标包括：', options: ['防舞弊、保资产、合规', '只有防舞弊', '只有保资产', '只有合规'], answer: 0, explain: '多目标。' }
        ],
        doc: { lead: '这一章讲规范。', sections: [
          { id: 'standard', title: '准则', html: `<p>会计准则体系、信息质量要求；确认计量。</p>` },
          { id: 'ethics', title: '道德', html: `<p>职业道德、独立性；内部控制与舞弊防范。</p>` }
        ], refs: [] } },
      { title: '会计实训', brief: '做账。',
        q: [
          { stem: '实训的第一步是：', options: ['建账并设置会计科目', '填凭证', '编报表', '结账'], answer: 0, explain: '建账。' },
          { stem: '凭证审核的要点：', options: ['真实性、合法性、完整性', '只有真实性', '只有合法性', '只有完整性'], answer: 0, explain: '审核。' },
          { stem: '实训成果包括：', options: ['凭证、账簿、报表', '只有凭证', '只有账簿', '只有报表'], answer: 0, explain: '一整套。' }
        ],
        doc: { lead: '这一章讲实训。', sections: [
          { id: 'setup', title: '建账', html: `<p>科目设置、期初余额；凭证填制与审核。</p>` },
          { id: 'finish', title: '出表', html: `<p>登账、结账、编表；手工与电算化。</p>` }
        ], refs: [] } }
    ] },
    { name: '市场营销学', chapters: [
      { title: '市场营销基础', brief: '为谁创造价值。',
        q: [
          { stem: '市场营销的核心是：', options: ['创造并传递顾客价值', '推销产品', '打广告', '降价'], answer: 0, explain: '价值。' },
          { stem: '营销组合 4P 指：', options: ['产品、价格、渠道、促销', '人、财、物、信息', '计划、组织、领导、控制', '市场、渠道、客户、服务'], answer: 0, explain: '4P。' },
          { stem: '需要与需求的区别是：', options: ['需求是有购买力的需要', '相同', '需要更具体', '需求更抽象'], answer: 0, explain: '购买力。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'concept', title: '概念', html: `<p>需要、欲望、需求；交换与关系；营销观念演变。</p>` },
          { id: 'mix', title: '营销组合', html: `<p>4P/4C/7P；整合营销。</p>` }
        ], refs: [] } },
      { title: '市场调研与 STP', brief: '找对人群。',
        q: [
          { stem: 'STP 指：', options: ['细分、目标、定位', '销售、交易、促销', '产品、价格、渠道', '调研、分析、决策'], answer: 0, explain: 'STP。' },
          { stem: '市场细分的依据包括：', options: ['地理、人口、心理、行为', '只有地理', '只有人口', '只有心理'], answer: 0, explain: '四类。' },
          { stem: '定位的本质是：', options: ['在顾客心智中占据独特位置', '定价格', '定渠道', '定产品'], answer: 0, explain: '心智。' }
        ],
        doc: { lead: '这一章讲 STP。', sections: [
          { id: 'research', title: '调研', html: `<p>调研设计、抽样、问卷；数据分析。</p>` },
          { id: 'stp', title: 'STP', html: `<p>细分标准、目标市场选择、定位策略。</p>` }
        ], refs: [] } },
      { title: '产品与品牌', brief: '卖什么。',
        q: [
          { stem: '产品整体概念包括：', options: ['核心、形式、附加产品', '只有核心', '只有形式', '只有附加'], answer: 0, explain: '三层。' },
          { stem: '产品生命周期的阶段是：', options: ['导入、成长、成熟、衰退', '只有成长', '只有成熟', '只有衰退'], answer: 0, explain: '四阶段。' },
          { stem: '品牌资产的核心是：', options: ['顾客认知与忠诚', '商标注册', '包装', '价格'], answer: 0, explain: '品牌资产。' }
        ],
        doc: { lead: '这一章讲产品。', sections: [
          { id: 'product', title: '产品', html: `<p>整体产品、产品线组合；生命周期策略。</p>` },
          { id: 'brand', title: '品牌', html: `<p>品牌定位、品牌资产；品牌延伸。</p>` }
        ], refs: [] } },
      { title: '定价与渠道', brief: '怎么卖。',
        q: [
          { stem: '成本导向定价的局限是：', options: ['忽视需求与竞争', '成本太高', '计算复杂', '不适合制造业'], answer: 0, explain: '局限。' },
          { stem: '渠道长度指：', options: ['中间商层级数', '运输距离', '门店面积', '人员数量'], answer: 0, explain: '层级。' },
          { stem: '线上线下融合的价值是：', options: ['提升体验与效率', '降低成本唯一', '增加库存', '减少服务'], answer: 0, explain: '全渠道。' }
        ],
        doc: { lead: '这一章讲定价。', sections: [
          { id: 'pricing', title: '定价', html: `<p>成本、需求、竞争导向；价格调整与心理定价。</p>` },
          { id: 'channel', title: '渠道', html: `<p>渠道结构、中间商；全渠道与电商。</p>` }
        ], refs: [] } },
      { title: '促销与整合传播', brief: '怎么说。',
        q: [
          { stem: '整合营销传播的核心是：', options: ['统一信息、多渠道协同', '只投广告', '只做促销', '只做公关'], answer: 0, explain: '整合。' },
          { stem: '推式与拉式策略的区别是：', options: ['推动渠道 vs 拉动消费者', '价格高低', '渠道长短', '产品新旧'], answer: 0, explain: '推拉。' },
          { stem: '效果评估的指标包括：', options: ['曝光、转化、ROI', '只有曝光', '只有转化', '只有 ROI'], answer: 0, explain: '多指标。' }
        ],
        doc: { lead: '这一章讲传播。', sections: [
          { id: 'promotion', title: '促销', html: `<p>广告、人员推销、销售促进、公关；推拉策略。</p>` },
          { id: 'imc', title: '整合传播', html: `<p>传播组合、数字营销；效果评估与 ROI。</p>` }
        ], refs: [] } },
      { title: '消费者行为', brief: '为什么买。',
        q: [
          { stem: '消费者购买决策过程包括：', options: ['认知—信息—评价—购买—购后', '只有购买', '只有评价', '只有购后'], answer: 0, explain: '五阶段。' },
          { stem: '影响购买的因素包括：', options: ['文化、社会、个人、心理', '只有文化', '只有社会', '只有个人'], answer: 0, explain: '四类。' },
          { stem: '购后失调指：', options: ['购后怀疑与后悔', '满意度高', '重复购买', '推荐他人'], answer: 0, explain: '失调。' }
        ],
        doc: { lead: '这一章讲行为。', sections: [
          { id: 'process', title: '决策', html: `<p>五阶段模型；参与度与决策类型。</p>` },
          { id: 'factor', title: '因素', html: `<p>文化社会个人心理；购后行为与忠诚。</p>` }
        ], refs: [] } },
      { title: '数字营销', brief: '新战场。',
        q: [
          { stem: '内容营销的目的是：', options: ['通过有价值内容吸引并转化客户', '只做广告', '降价', '增加库存'], answer: 0, explain: '内容。' },
          { stem: '私域运营的核心是：', options: ['可重复触达的用户资产', '公域投放', '一次性成交', '价格战'], answer: 0, explain: '私域。' },
          { stem: '增长的本质是：', options: ['可持续的用户价值与留存', '短期投放', '打折', '刷单'], answer: 0, explain: '增长。' }
        ],
        doc: { lead: '这一章讲数字。', sections: [
          { id: 'content', title: '内容与社交', html: `<p>内容营销、社交媒体、KOL；种草与转化。</p>` },
          { id: 'growth', title: '增长', html: `<p>AARRR、私域、留存与 LTV；数据驱动。</p>` }
        ], refs: [] } },
      { title: '营销策划实战', brief: '写方案。',
        q: [
          { stem: '营销策划方案的核心结构是：', options: ['分析—目标—策略—执行—预算—评估', '只有策略', '只有预算', '只有评估'], answer: 0, explain: '结构。' },
          { stem: '目标应遵循 SMART 原则：', options: ['具体、可衡量、可达成、相关、有时限', '越多越好', '越模糊越好', '只写数字'], answer: 0, explain: 'SMART。' },
          { stem: '方案评估的关键是：', options: ['目标达成与投入产出', '篇幅', '美观', '页数'], answer: 0, explain: '评估。' }
        ],
        doc: { lead: '这一章讲实战。', sections: [
          { id: 'plan', title: '方案', html: `<p>市场分析、目标设定、策略组合、预算与排期。</p>` },
          { id: 'review', title: '评估', html: `<p>KPI 设定、复盘；案例拆解。</p>` }
        ], refs: [] } }
    ] },
    { name: '组织行为学', chapters: [
      { title: '个体行为基础', brief: '人怎么想。',
        q: [
          { stem: '大五人格包括：', options: ['开放性、尽责性、外倾性、宜人性、情绪稳定性', '只有内外向', '只有尽责', '只有情绪'], answer: 0, explain: '五因素。' },
          { stem: '知觉偏差包括：', options: ['首因、近因、晕轮、刻板', '只有首因', '只有晕轮', '只有刻板'], answer: 0, explain: '多种。' },
          { stem: '态度与行为的关系：', options: ['态度影响行为但不完全决定', '完全决定', '无关', '行为决定态度唯一'], answer: 0, explain: '影响。' }
        ],
        doc: { lead: '这一章讲个体。', sections: [
          { id: 'personality', title: '人格', html: `<p>大五模型、MBTI；个体差异与岗位匹配。</p>` },
          { id: 'perception', title: '知觉', html: `<p>归因、偏差；态度与工作满意度。</p>` }
        ], refs: [] } },
      { title: '动机与激励', brief: '为什么努力。',
        q: [
          { stem: '期望理论的三要素是：', options: ['期望、工具性、效价', '只有期望', '只有效价', '只有工具性'], answer: 0, explain: '三要素。' },
          { stem: '公平理论关注：', options: ['投入产出比与他人比较', '绝对薪酬', '工作条件', '晋升速度'], answer: 0, explain: '公平。' },
          { stem: '内在动机来源于：', options: ['工作本身的意义与成就感', '奖金', '惩罚', '监督'], answer: 0, explain: '内在。' }
        ],
        doc: { lead: '这一章讲激励。', sections: [
          { id: 'theory', title: '理论', html: `<p>内容型与过程型理论；期望、公平、目标设置。</p>` },
          { id: 'practice', title: '实践', html: `<p>薪酬与认可、工作设计；内在动机。</p>` }
        ], refs: [] } },
      { title: '群体与团队', brief: '一起干。',
        q: [
          { stem: '群体的发展阶段是：', options: ['形成、震荡、规范、执行、解散', '只有形成', '只有执行', '只有解散'], answer: 0, explain: '五阶段。' },
          { stem: '群体决策的优点是：', options: ['信息更全、接受度更高', '速度更快', '责任更清', '成本更低'], answer: 0, explain: '优点。' },
          { stem: '高效团队的特征包括：', options: ['目标清晰、角色互补、信任', '只有目标', '只有信任', '人越多越好'], answer: 0, explain: '特征。' }
        ],
        doc: { lead: '这一章讲群体。', sections: [
          { id: 'group', title: '群体', html: `<p>群体规范、角色、凝聚力；群体决策与极化。</p>` },
          { id: 'team', title: '团队', html: `<p>团队类型、信任与冲突；虚拟团队。</p>` }
        ], refs: [] } },
      { title: '沟通与冲突', brief: '怎么对话。',
        q: [
          { stem: '有效沟通的关键是：', options: ['编码清晰、反馈及时、渠道合适', '说得越多越好', '只用书面', '只用口头'], answer: 0, explain: '沟通。' },
          { stem: '建设性冲突的作用是：', options: ['促进创新与改进', '破坏关系', '降低效率', '无作用'], answer: 0, explain: '建设性。' },
          { stem: '谈判的整合式策略强调：', options: ['寻找双赢方案', '零和', '强硬', '回避'], answer: 0, explain: '双赢。' }
        ],
        doc: { lead: '这一章讲沟通。', sections: [
          { id: 'communication', title: '沟通', html: `<p>沟通模型、渠道选择、跨文化沟通。</p>` },
          { id: 'conflict', title: '冲突', html: `<p>冲突类型与处理策略；谈判技巧。</p>` }
        ], refs: [] } },
      { title: '领导与权力', brief: '影响力。',
        q: [
          { stem: '权力的来源包括：', options: ['法定、奖励、强制、专家、参照', '只有法定', '只有奖励', '只有专家'], answer: 0, explain: '五种。' },
          { stem: '变革型领导的特点是：', options: ['愿景激励与个人关怀', '只奖惩', '只监督', '只授权'], answer: 0, explain: '变革型。' },
          { stem: '授权的好处是：', options: ['提升效率与员工成长', '降低控制', '推卸责任', '增加成本'], answer: 0, explain: '授权。' }
        ],
        doc: { lead: '这一章讲领导。', sections: [
          { id: 'power', title: '权力', html: `<p>权力基础、政治行为；影响力策略。</p>` },
          { id: 'leadership', title: '领导', html: `<p>变革型与交易型；授权与教练。</p>` }
        ], refs: [] } },
      { title: '组织文化与变革', brief: '大环境。',
        q: [
          { stem: '组织文化对行为的影响是：', options: ['塑造价值观与行为规范', '无影响', '只影响薪酬', '只影响考勤'], answer: 0, explain: '文化。' },
          { stem: '变革阻力来源包括：', options: ['习惯、利益、不确定性', '只有习惯', '只有利益', '只有不确定性'], answer: 0, explain: '多源。' },
          { stem: '科特变革八步的第一步是：', options: ['建立紧迫感', '立即行动', '庆祝胜利', '固化成果'], answer: 0, explain: '紧迫感。' }
        ],
        doc: { lead: '这一章讲变革。', sections: [
          { id: 'culture', title: '文化', html: `<p>文化维度、亚文化；文化与绩效。</p>` },
          { id: 'change', title: '变革', html: `<p>变革模型、阻力管理；组织发展。</p>` }
        ], refs: [] } },
      { title: '工作设计与压力', brief: '怎么工作。',
        q: [
          { stem: '工作特征模型的核心维度包括：', options: ['技能多样性、任务完整性、自主性、反馈', '只有自主性', '只有反馈', '只有多样性'], answer: 0, explain: '五维度。' },
          { stem: '工作压力的来源包括：', options: ['任务、角色、人际、组织', '只有任务', '只有角色', '只有人际'], answer: 0, explain: '多源。' },
          { stem: '职业倦怠的三个维度是：', options: ['情绪耗竭、去人格化、低成就感', '只有耗竭', '只有去人格化', '只有低成就'], answer: 0, explain: '三维度。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'jobdesign', title: '工作设计', html: `<p>工作特征模型、工作再设计；弹性工作。</p>` },
          { id: 'stress', title: '压力', html: `<p>压力源、倦怠、干预；工作生活平衡。</p>` }
        ], refs: [] } },
      { title: '组织行为案例', brief: '用起来。',
        q: [
          { stem: '组织行为案例分析应关注：', options: ['个体、群体、组织三层', '只有个体', '只有群体', '只有组织'], answer: 0, explain: '三层。' },
          { stem: '诊断组织问题的方法包括：', options: ['访谈、问卷、观察', '只有访谈', '只有问卷', '只有观察'], answer: 0, explain: '多种。' },
          { stem: '改进方案应：', options: ['针对根因并可落地', '只喊口号', '只改制度', '只做培训'], answer: 0, explain: '落地。' }
        ],
        doc: { lead: '这一章讲案例。', sections: [
          { id: 'analysis', title: '分析', html: `<p>三层诊断、证据收集；问题界定。</p>` },
          { id: 'solution', title: '方案', html: `<p>干预措施、实施与评估；案例拆解。</p>` }
        ], refs: [] } }
    ] },
    { name: '财务管理', chapters: [
      { title: '财务管理导论', brief: '钱怎么管。',
        q: [
          { stem: '财务管理的三大决策是：', options: ['投资、融资、股利', '预算、核算、分析', '收入、成本、利润', '采购、生产、销售'], answer: 0, explain: '三大决策。' },
          { stem: '企业价值最大化的优点是：', options: ['考虑时间与风险、兼顾长期', '只重利润', '只看规模', '只看现金'], answer: 0, explain: '价值最大化。' },
          { stem: '财务管理的目标是：', options: ['股东财富/企业价值最大化', '利润最大化唯一', '收入最大化', '规模最大化'], answer: 0, explain: '目标。' }
        ],
        doc: { lead: '这一章讲导论。', sections: [
          { id: 'goal', title: '目标', html: `<p>利润最大化与价值最大化；代理问题与治理。</p>` },
          { id: 'decision', title: '决策', html: `<p>投资、融资、股利；财务经理职责。</p>` }
        ], refs: [] } },
      { title: '货币时间价值', brief: '钱的时间。',
        q: [
          { stem: '复利终值公式是：', options: ['FV = PV(1+i)^n', 'FV = PV(1+ni)', 'FV = PV/n', 'FV = PV·i'], answer: 0, explain: '复利。' },
          { stem: '年金现值系数的用途是：', options: ['计算一系列等额现金流现值', '计算单笔终值', '计算利率', '计算期数'], answer: 0, explain: '年金。' },
          { stem: '贴现率反映：', options: ['资金的机会成本与风险', '通货膨胀唯一', '税率', '利润率'], answer: 0, explain: '贴现率。' }
        ],
        doc: { lead: '这一章讲时间价值。', sections: [
          { id: 'compound', title: '复利', html: `<p>终值、现值；名义利率与实际利率。</p>` },
          { id: 'annuity', title: '年金', html: `<p>普通年金、预付年金、永续年金；分期还款。</p>` }
        ], refs: [] } },
      { title: '风险与收益', brief: '承担多少风险。',
        q: [
          { stem: 'CAPM 模型表达：', options: ['预期收益 = 无风险利率 + β×市场风险溢价', '收益 = 风险', '收益 = 无风险利率', '收益 = β'], answer: 0, explain: 'CAPM。' },
          { stem: 'β 系数衡量：', options: ['系统风险', '非系统风险', '总风险', '流动性'], answer: 0, explain: '系统风险。' },
          { stem: '分散化可以消除：', options: ['非系统风险', '系统风险', '全部风险', '市场风险'], answer: 0, explain: '非系统。' }
        ],
        doc: { lead: '这一章讲风险。', sections: [
          { id: 'measure', title: '度量', html: `<p>标准差、变异系数；组合风险与相关。</p>` },
          { id: 'capm', title: 'CAPM', html: `<p>β、证券市场线；必要报酬率。</p>` }
        ], refs: [] } },
      { title: '资本预算', brief: '投不投。',
        q: [
          { stem: 'NPV 法的决策规则是：', options: ['NPV > 0 则接受', 'NPV < 0 接受', 'NPV = 0 接受', '看 IRR'], answer: 0, explain: 'NPV。' },
          { stem: 'IRR 的缺点是：', options: ['多重解与再投资假设', '不考虑时间价值', '计算简单', '只看现金流'], answer: 0, explain: '缺点。' },
          { stem: '回收期法的缺点是：', options: ['忽略回收期后现金流与时间价值', '太复杂', '不考虑风险', '只看利润'], answer: 0, explain: '回收期。' }
        ],
        doc: { lead: '这一章讲预算。', sections: [
          { id: 'method', title: '方法', html: `<p>NPV、IRR、回收期、盈利指数；比较与选用。</p>` },
          { id: 'cashflow', title: '现金流', html: `<p>增量现金流、沉没成本；折旧与税盾。</p>` }
        ], refs: [] } },
      { title: '资本成本与资本结构', brief: '钱从哪来。',
        q: [
          { stem: 'WACC 是：', options: ['加权平均资本成本', '平均收益', '边际成本', '机会成本'], answer: 0, explain: 'WACC。' },
          { stem: 'MM 理论（无税）认为：', options: ['资本结构与企业价值无关', '负债越多越好', '负债越少越好', '无关税'], answer: 0, explain: 'MM。' },
          { stem: '财务杠杆提高会：', options: ['增加财务风险', '降低风险', '无影响', '降低收益'], answer: 0, explain: '杠杆。' }
        ],
        doc: { lead: '这一章讲资本。', sections: [
          { id: 'cost', title: '资本成本', html: `<p>债务成本、股权成本；WACC 计算。</p>` },
          { id: 'structure', title: '结构', html: `<p>MM 定理、税盾、破产成本；最优资本结构。</p>` }
        ], refs: [] } },
      { title: '营运资金管理', brief: '日常周转。',
        q: [
          { stem: '营运资金指：', options: ['流动资产减流动负债', '总资产', '现金', '存货'], answer: 0, explain: '净营运资金。' },
          { stem: '现金持有动机包括：', options: ['交易、预防、投机', '只有交易', '只有预防', '只有投机'], answer: 0, explain: '三动机。' },
          { stem: '存货管理的目标是：', options: ['在保证供应的前提下降低成本', '越多越好', '越少越好', '零库存唯一'], answer: 0, explain: '平衡。' }
        ],
        doc: { lead: '这一章讲营运。', sections: [
          { id: 'cash', title: '现金与应收', html: `<p>现金预算、最佳现金持有；信用政策。</p>` },
          { id: 'inventory', title: '存货', html: `<p>EOQ、JIT；周转率与营运资本。</p>` }
        ], refs: [] } },
      { title: '股利政策', brief: '分不分。',
        q: [
          { stem: '股利政策的形式包括：', options: ['剩余股利、固定股利、固定支付率', '只有剩余', '只有固定股利', '只有固定支付率'], answer: 0, explain: '多种。' },
          { stem: '股票回购的作用是：', options: ['回报股东、调整资本结构', '增加股本', '降低股价', '增加负债'], answer: 0, explain: '回购。' },
          { stem: '股利无关论的前提是：', options: ['完美市场、无税无摩擦', '有税', '有摩擦', '信息不对称'], answer: 0, explain: '无关论。' }
        ],
        doc: { lead: '这一章讲股利。', sections: [
          { id: 'policy', title: '政策', html: `<p>股利类型、影响因素；信号理论。</p>` },
          { id: 'repurchase', title: '回购', html: `<p>回购与股利比较；股东价值。</p>` }
        ], refs: [] } },
      { title: '财务分析与案例', brief: '看全局。',
        q: [
          { stem: '杜邦分析的核心是：', options: ['ROE = 净利率 × 周转率 × 权益乘数', 'ROE = 利润/收入', 'ROE = 收入/资产', 'ROE = 资产/权益'], answer: 0, explain: '杜邦。' },
          { stem: '财务危机的早期信号包括：', options: ['现金流恶化、负债率上升', '只有现金流', '只有负债率', '无信号'], answer: 0, explain: '信号。' },
          { stem: '财务决策应：', options: ['兼顾收益与风险、短期与长期', '只看收益', '只看风险', '只看短期'], answer: 0, explain: '平衡。' }
        ],
        doc: { lead: '这一章讲分析。', sections: [
          { id: 'dupont', title: '杜邦分析', html: `<p>ROE 分解、因素分析；同业对比。</p>` },
          { id: 'case', title: '案例', html: `<p>投资与融资决策案例；估值初步。</p>` }
        ], refs: [] } }
    ] },
    { name: '战略管理', chapters: [
      { title: '战略管理概述', brief: '全局。',
        q: [
          { stem: '战略管理的过程是：', options: ['环境分析—战略制定—实施—评价', '只有制定', '只有实施', '只有评价'], answer: 0, explain: '四步。' },
          { stem: '战略层次包括：', options: ['公司层、业务层、职能层', '只有公司层', '只有业务层', '只有职能层'], answer: 0, explain: '三层。' },
          { stem: '战略的本质是：', options: ['取舍与匹配', '计划', '口号', '预算'], answer: 0, explain: '取舍。' }
        ],
        doc: { lead: '这一章讲概述。', sections: [
          { id: 'process', title: '过程', html: `<p>战略分析、制定、实施、评价；战略层级。</p>` },
          { id: 'nature', title: '本质', html: `<p>定位与取舍；战略意图与使命愿景。</p>` }
        ], refs: [] } },
      { title: '外部环境分析', brief: '看外面。',
        q: [
          { stem: 'PEST 分析包括：', options: ['政治、经济、社会、技术', '优势、劣势、机会、威胁', '供应商、买方、替代、进入', '人财物信息'], answer: 0, explain: 'PEST。' },
          { stem: '波特五力不包括：', options: ['互补品', '现有竞争者', '潜在进入者', '替代品'], answer: 0, explain: '五力。' },
          { stem: '行业生命周期的阶段是：', options: ['导入、成长、成熟、衰退', '只有成长', '只有成熟', '只有衰退'], answer: 0, explain: '四阶段。' }
        ],
        doc: { lead: '这一章讲外部。', sections: [
          { id: 'macro', title: '宏观', html: `<p>PEST、宏观趋势；机会与威胁。</p>` },
          { id: 'industry', title: '行业', html: `<p>五力模型、行业生命周期；战略群组。</p>` }
        ], refs: [] } },
      { title: '内部资源与能力', brief: '看自己。',
        q: [
          { stem: 'VRIO 框架的四个维度是：', options: ['价值、稀缺、难以模仿、组织', '优势、劣势、机会、威胁', '成本、质量、速度、柔性', '人、财、物、信'], answer: 0, explain: 'VRIO。' },
          { stem: '核心能力的特征是：', options: ['有价值、独特、难模仿、可延展', '便宜', '易复制', '短期'], answer: 0, explain: '核心能力。' },
          { stem: '价值链分析的目的是：', options: ['识别价值创造与成本优势环节', '算成本唯一', '画组织图', '做预算'], answer: 0, explain: '价值链。' }
        ],
        doc: { lead: '这一章讲内部。', sections: [
          { id: 'resource', title: '资源能力', html: `<p>VRIO、核心能力；动态能力。</p>` },
          { id: 'valuechain', title: '价值链', html: `<p>基本与支持活动；外包与整合。</p>` }
        ], refs: [] } },
      { title: '竞争战略', brief: '怎么赢。',
        q: [
          { stem: '波特的三种基本战略是：', options: ['成本领先、差异化、聚焦', '扩张、收缩、稳定', '进攻、防守、撤退', '多元化、一体化、国际化'], answer: 0, explain: '三种。' },
          { stem: '“夹在中间”指：', options: ['既无成本优势也无差异化', '两者兼得', '只做高端', '只做低端'], answer: 0, explain: '夹中间。' },
          { stem: '蓝海战略的核心是：', options: ['开创无人竞争的新市场空间', '价格战', '成本削减', '跟随模仿'], answer: 0, explain: '蓝海。' }
        ],
        doc: { lead: '这一章讲竞争。', sections: [
          { id: 'generic', title: '基本战略', html: `<p>成本领先、差异化、聚焦；风险与适用条件。</p>` },
          { id: 'blue', title: '蓝海与动态', html: `<p>价值创新、战略布局图；动态竞争。</p>` }
        ], refs: [] } },
      { title: '公司层战略', brief: '做什么业务。',
        q: [
          { stem: '多元化的动因包括：', options: ['协同、增长、风险分散', '只有协同', '只有增长', '只有分散'], answer: 0, explain: '多动因。' },
          { stem: '相关多元化与非相关的区别是：', options: ['是否共享资源与能力', '规模', '地域', '上市'], answer: 0, explain: '相关性。' },
          { stem: '并购失败的主要原因包括：', options: ['整合不力、高溢价', '只有整合', '只有溢价', '无原因'], answer: 0, explain: '整合。' }
        ],
        doc: { lead: '这一章讲公司层。', sections: [
          { id: 'diversification', title: '多元化', html: `<p>相关与不相关；协同效应与范围经济。</p>` },
          { id: 'ma', title: '并购与联盟', html: `<p>并购类型、整合；战略联盟与外包。</p>` }
        ], refs: [] } },
      { title: '国际化战略', brief: '走出去。',
        q: [
          { stem: '国际化动因包括：', options: ['市场、资源、效率、战略资产', '只有市场', '只有资源', '只有效率'], answer: 0, explain: '四动因。' },
          { stem: '全球标准化与本地化的权衡是：', options: ['成本效率 vs 本地适应', '价格', '渠道', '品牌'], answer: 0, explain: '权衡。' },
          { stem: '进入模式包括：', options: ['出口、许可、合资、独资', '只有出口', '只有合资', '只有独资'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲国际化。', sections: [
          { id: 'motive', title: '动因', html: `<p>市场寻求、资源寻求；国际化阶段。</p>` },
          { id: 'entry', title: '进入', html: `<p>进入模式与风险；全球整合与本地响应。</p>` }
        ], refs: [] } },
      { title: '战略实施与控制', brief: '落地。',
        q: [
          { stem: '战略实施的关键是：', options: ['组织结构、文化、资源配置匹配', '只有组织', '只有文化', '只有资源'], answer: 0, explain: '匹配。' },
          { stem: '平衡计分卡的四个维度是：', options: ['财务、客户、内部流程、学习成长', '只有财务', '只有客户', '只有流程'], answer: 0, explain: 'BSC。' },
          { stem: '战略控制的作用是：', options: ['纠偏与调整', '装饰', '考核唯一', '归档'], answer: 0, explain: '纠偏。' }
        ],
        doc: { lead: '这一章讲实施。', sections: [
          { id: 'implementation', title: '实施', html: `<p>组织与文化匹配、资源配置；变革管理。</p>` },
          { id: 'control', title: '控制', html: `<p>平衡计分卡、战略地图；绩效评价。</p>` }
        ], refs: [] } },
      { title: '战略案例', brief: '用起来。',
        q: [
          { stem: '战略案例分析应：', options: ['外部内部结合、给出可行选择', '只谈外部', '只谈内部', '只给结论'], answer: 0, explain: '结合。' },
          { stem: 'SWOT 的作用是：', options: ['综合内外部分析形成策略', '算利润', '做预算', '画组织图'], answer: 0, explain: 'SWOT。' },
          { stem: '战略建议应：', options: ['有依据、可执行、可评估', '口号化', '只谈愿景', '无依据'], answer: 0, explain: '可行。' }
        ],
        doc: { lead: '这一章讲案例。', sections: [
          { id: 'framework', title: '框架', html: `<p>PEST、五力、VRIO、SWOT 综合运用。</p>` },
          { id: 'case', title: '案例', html: `<p>典型企业战略拆解；建议与风险。</p>` }
        ], refs: [] } }
    ] },
    { name: '人力资源管理', chapters: [
      { title: '人力资源管理概述', brief: '管人。',
        q: [
          { stem: '人力资源管理的核心职能包括：', options: ['招聘、培训、绩效、薪酬', '只有招聘', '只有培训', '只有薪酬'], answer: 0, explain: '多模块。' },
          { stem: '战略性人力资源管理的含义是：', options: ['HR 与业务战略匹配', '只做事务', '只做招聘', '只做薪酬'], answer: 0, explain: '匹配。' },
          { stem: '人事管理与 HRM 的区别是：', options: ['从成本到资本、从事务到战略', '名称不同', '规模不同', '行业不同'], answer: 0, explain: '理念。' }
        ],
        doc: { lead: '这一章讲概述。', sections: [
          { id: 'function', title: '职能', html: `<p>六大模块；HR 角色（尤里奇四角色）。</p>` },
          { id: 'strategy', title: '战略', html: `<p>人资与战略匹配；人力资本。</p>` }
        ], refs: [] } },
      { title: '工作分析与规划', brief: '先定岗位。',
        q: [
          { stem: '工作分析的结果是：', options: ['职位说明书与工作规范', '薪酬表', '培训计划', '考核表'], answer: 0, explain: '说明书。' },
          { stem: '工作分析的方法包括：', options: ['问卷、访谈、观察、日志', '只有问卷', '只有访谈', '只有观察'], answer: 0, explain: '多种。' },
          { stem: '人力资源规划的核心是：', options: ['供需预测与平衡', '招聘唯一', '培训唯一', '裁员唯一'], answer: 0, explain: '预测。' }
        ],
        doc: { lead: '这一章讲分析。', sections: [
          { id: 'analysis', title: '工作分析', html: `<p>方法、职位说明书；胜任力模型。</p>` },
          { id: 'planning', title: '规划', html: `<p>需求与供给预测；继任计划。</p>` }
        ], refs: [] } },
      { title: '招聘与甄选', brief: '找对人。',
        q: [
          { stem: '内部招聘的优点是：', options: ['熟悉、激励、成本低', '带来新思想', '扩大基数', '避免近亲繁殖'], answer: 0, explain: '内部。' },
          { stem: '结构化面试的特点是：', options: ['统一问题与评分标准', '随机提问', '只看印象', '无标准'], answer: 0, explain: '结构化。' },
          { stem: '甄选效度指：', options: ['测评结果与工作绩效的相关程度', '成本', '速度', '公平'], answer: 0, explain: '效度。' }
        ],
        doc: { lead: '这一章讲招聘。', sections: [
          { id: 'recruit', title: '招聘', html: `<p>内部与外部渠道；雇主品牌。</p>` },
          { id: 'select', title: '甄选', html: `<p>面试、测评中心、背景调查；信度与效度。</p>` }
        ], refs: [] } },
      { title: '培训与开发', brief: '让人成长。',
        q: [
          { stem: '培训需求分析的三个层次是：', options: ['组织、任务、人员', '只有组织', '只有任务', '只有人员'], answer: 0, explain: '三层次。' },
          { stem: '培训效果评估常用：', options: ['柯氏四级评估', '成本法', '问卷唯一', '考试唯一'], answer: 0, explain: '柯氏。' },
          { stem: '职业生涯管理的责任在：', options: ['组织与员工共同', '只有组织', '只有员工', '只有上级'], answer: 0, explain: '共同。' }
        ],
        doc: { lead: '这一章讲培训。', sections: [
          { id: 'need', title: '需求', html: `<p>三层次分析；培训计划与方式。</p>` },
          { id: 'evaluation', title: '评估', html: `<p>柯氏四级（反应/学习/行为/结果）；职业发展。</p>` }
        ], refs: [] } },
      { title: '绩效管理', brief: '考什么。',
        q: [
          { stem: '绩效管理与绩效考核的区别是：', options: ['是否包含目标设定与反馈改进', '名称', '周期', '对象'], answer: 0, explain: '闭环。' },
          { stem: 'KPI 与 OKR 的区别是：', options: ['考核指标 vs 目标对齐', '无区别', 'OKR 只考核', 'KPI 只对齐'], answer: 0, explain: '两者。' },
          { stem: '绩效反馈的关键是：', options: ['具体、及时、双向', '只打分', '只排名', '不反馈'], answer: 0, explain: '反馈。' }
        ],
        doc: { lead: '这一章讲绩效。', sections: [
          { id: 'system', title: '体系', html: `<p>目标设定、过程辅导、考核、反馈；KPI/OKR。</p>` },
          { id: 'method', title: '方法', html: `<p>360 度、关键事件、平衡计分卡；误差与偏差。</p>` }
        ], refs: [] } },
      { title: '薪酬与福利', brief: '给多少。',
        q: [
          { stem: '薪酬体系设计的原则是：', options: ['内部公平、外部竞争、激励性', '只有公平', '只有竞争', '只有激励'], answer: 0, explain: '三性。' },
          { stem: '职位评价的作用是：', options: ['确定岗位相对价值', '确定人数', '确定培训', '确定招聘'], answer: 0, explain: '职位评价。' },
          { stem: '长期激励的常见形式是：', options: ['股权与期权', '奖金', '津贴', '加班费'], answer: 0, explain: '股权。' }
        ],
        doc: { lead: '这一章讲薪酬。', sections: [
          { id: 'design', title: '设计', html: `<p>职位评价、薪酬调查、结构设计；宽带薪酬。</p>` },
          { id: 'incentive', title: '激励', html: `<p>短期奖金、长期股权；福利与弹性福利。</p>` }
        ], refs: [] } },
      { title: '劳动关系与法规', brief: '合规。',
        q: [
          { stem: '劳动合同的必备条款包括：', options: ['期限、工作内容、报酬、保险', '只有期限', '只有报酬', '只有保险'], answer: 0, explain: '必备。' },
          { stem: '劳动争议的处理途径包括：', options: ['协商、调解、仲裁、诉讼', '只有仲裁', '只有诉讼', '只有协商'], answer: 0, explain: '多种。' },
          { stem: '员工关系管理的目标是：', options: ['和谐稳定与效率', '只降成本', '只加薪', '只考核'], answer: 0, explain: '和谐。' }
        ],
        doc: { lead: '这一章讲关系。', sections: [
          { id: 'contract', title: '合同', html: `<p>订立、履行、解除；工时与休假。</p>` },
          { id: 'dispute', title: '争议', html: `<p>处理程序；工会与集体协商。</p>` }
        ], refs: [] } },
      { title: 'HR 数据与实务', brief: '用数据。',
        q: [
          { stem: '人力资源效能指标包括：', options: ['人均产出、流失率、招聘周期', '只有流失率', '只有人均产出', '只有招聘周期'], answer: 0, explain: '多指标。' },
          { stem: '员工流失分析应关注：', options: ['原因、结构、成本', '只有人数', '只有成本', '只有原因'], answer: 0, explain: '分析。' },
          { stem: 'HR 方案落地应：', options: ['与业务协同、分步推进', '一步到位', '只发文件', '只做培训'], answer: 0, explain: '落地。' }
        ],
        doc: { lead: '这一章讲实务。', sections: [
          { id: 'metrics', title: '指标', html: `<p>人力效能、流失率、招聘漏斗；数据看板。</p>` },
          { id: 'practice', title: '实务', html: `<p>HRBP、共享服务；方案设计与沟通。</p>` }
        ], refs: [] } }
    ] },
    { name: '运营管理', chapters: [
      { title: '运营管理概述', brief: '怎么生产。',
        q: [
          { stem: '运营管理的核心是：', options: ['将输入转化为输出的过程管理', '销售', '财务', '人事'], answer: 0, explain: '转换。' },
          { stem: '运营的竞争维度包括：', options: ['成本、质量、速度、柔性', '只有成本', '只有质量', '只有速度'], answer: 0, explain: '四维度。' },
          { stem: '制造业与服务业的区别是：', options: ['产品有形性与接触度', '规模', '利润', '资本'], answer: 0, explain: '差异。' }
        ],
        doc: { lead: '这一章讲概述。', sections: [
          { id: 'concept', title: '概念', html: `<p>投入—转换—产出；运营战略与竞争优先次序。</p>` },
          { id: 'service', title: '服务运营', html: `<p>服务特性、接触度；服务质量。</p>` }
        ], refs: [] } },
      { title: '流程分析与设计', brief: '流程。',
        q: [
          { stem: '流程能力指：', options: ['单位时间最大产出', '成本', '质量', '库存'], answer: 0, explain: '产能。' },
          { stem: '瓶颈工序决定了：', options: ['整个流程的产出', '成本', '质量', '库存'], answer: 0, explain: '瓶颈。' },
          { stem: '流程改进的常用方法是：', options: ['取消、合并、重排、简化（ECRS）', '只有取消', '只有合并', '只有简化'], answer: 0, explain: 'ECRS。' }
        ],
        doc: { lead: '这一章讲流程。', sections: [
          { id: 'analysis', title: '分析', html: `<p>流程图、节拍与瓶颈；利特尔法则。</p>` },
          { id: 'design', title: '设计', html: `<p>流程类型（项目/批量/流水/连续）；ECRS 改进。</p>` }
        ], refs: [] } },
      { title: '选址与布置', brief: '放哪里。',
        q: [
          { stem: '选址的影响因素包括：', options: ['市场、成本、劳动力、政策', '只有市场', '只有成本', '只有政策'], answer: 0, explain: '多因素。' },
          { stem: '工艺专业化布置适合：', options: ['多品种小批量', '单一品种大批量', '服务唯一', '无差别'], answer: 0, explain: '多品种。' },
          { stem: '流水线布置的关键是：', options: ['平衡各工位节拍', '增加库存', '减少设备', '提高价格'], answer: 0, explain: '平衡。' }
        ],
        doc: { lead: '这一章讲选址。', sections: [
          { id: 'location', title: '选址', html: `<p>因素评分法、重心法；全球选址。</p>` },
          { id: 'layout', title: '布置', html: `<p>工艺、产品、成组布置；线平衡。</p>` }
        ], refs: [] } },
      { title: '需求预测与计划', brief: '做多少。',
        q: [
          { stem: '定性预测方法包括：', options: ['专家意见、德尔菲、市场调研', '只有德尔菲', '只有专家', '只有调研'], answer: 0, explain: '定性。' },
          { stem: '移动平均法的作用是：', options: ['平滑随机波动', '消除趋势', '预测季节', '计算成本'], answer: 0, explain: '平滑。' },
          { stem: 'S&OP 的目的是：', options: ['平衡需求与供应', '增加库存', '降低成本唯一', '提高价格'], answer: 0, explain: '产销协同。' }
        ],
        doc: { lead: '这一章讲预测。', sections: [
          { id: 'forecast', title: '预测', html: `<p>定性定量方法；误差衡量（MAD/MSE）。</p>` },
          { id: 'planning', title: '计划', html: `<p>综合计划、主生产计划、S&OP；产能规划。</p>` }
        ], refs: [] } },
      { title: '库存管理', brief: '存多少。',
        q: [
          { stem: 'EOQ 模型的假设包括：', options: ['需求稳定、订货提前期固定', '需求随机', '价格波动', '无库存成本'], answer: 0, explain: 'EOQ。' },
          { stem: '安全库存的作用是：', options: ['应对需求与提前期不确定性', '降低成本', '提高产量', '减少品种'], answer: 0, explain: '安全库存。' },
          { stem: 'ABC 分类法的依据是：', options: ['库存价值占比', '数量占比', '体积', '重量'], answer: 0, explain: 'ABC。' }
        ],
        doc: { lead: '这一章讲库存。', sections: [
          { id: 'eoq', title: 'EOQ', html: `<p>订货批量、总成本；数量折扣。</p>` },
          { id: 'control', title: '控制', html: `<p>ABC 分类、安全库存、定期与定量订货。</p>` }
        ], refs: [] } },
      { title: '质量管理', brief: '做得好。',
        q: [
          { stem: '全面质量管理（TQM）的核心是：', options: ['全员参与、持续改进、顾客导向', '只靠检验', '只靠统计', '只靠罚款'], answer: 0, explain: 'TQM。' },
          { stem: '六西格玛的目标是：', options: ['每百万机会 3.4 个缺陷', '零缺陷唯一', '100% 检验', '降低成本'], answer: 0, explain: '六西格玛。' },
          { stem: 'PDCA 循环的顺序是：', options: ['计划—执行—检查—处理', '执行—计划—检查', '检查—计划—执行', '处理—执行—计划'], answer: 0, explain: 'PDCA。' }
        ],
        doc: { lead: '这一章讲质量。', sections: [
          { id: 'tqm', title: 'TQM', html: `<p>质量成本、PDCA、QC 七大手法。</p>` },
          { id: 'sixsigma', title: '六西格玛', html: `<p>DMAIC、SPC 控制图；精益六西格玛。</p>` }
        ], refs: [] } },
      { title: '精益生产与供应链', brief: '少浪费。',
        q: [
          { stem: '精益生产的核心是：', options: ['消除浪费、持续改进', '增加库存', '大批量', '提高价格'], answer: 0, explain: '精益。' },
          { stem: '七种浪费包括：', options: ['过量生产、等待、搬运、库存等', '只有等待', '只有库存', '只有搬运'], answer: 0, explain: '七浪费。' },
          { stem: '供应链管理的目标是：', options: ['整体效率与响应速度', '压低供应商价格', '增加库存', '减少品种'], answer: 0, explain: '协同。' }
        ],
        doc: { lead: '这一章讲精益。', sections: [
          { id: 'lean', title: '精益', html: `<p>JIT、看板、价值流图；七种浪费。</p>` },
          { id: 'scm', title: '供应链', html: `<p>牛鞭效应、供应商关系；敏捷与韧性。</p>` }
        ], refs: [] } },
      { title: '项目管理与运营实务', brief: '落地。',
        q: [
          { stem: '项目与运营的区别是：', options: ['一次性 vs 重复性', '规模', '利润', '人员'], answer: 0, explain: '一次性。' },
          { stem: '关键路径决定：', options: ['项目最短工期', '成本', '质量', '风险'], answer: 0, explain: '工期。' },
          { stem: '运营改进应：', options: ['数据驱动、聚焦瓶颈、持续迭代', '拍脑袋', '一步到位', '只看成本'], answer: 0, explain: '改进。' }
        ],
        doc: { lead: '这一章讲实务。', sections: [
          { id: 'project', title: '项目', html: `<p>WBS、甘特图、关键路径；项目风险。</p>` },
          { id: 'practice', title: '实务', html: `<p>产能与节拍、瓶颈改善；案例演练。</p>` }
        ], refs: [] } }
    ] },

    /* ---- 大四 ---- */
    { name: '毕业论文', chapters: [
      { title: '选题与文献', brief: '研究什么。',
        q: [
          { stem: '管理学论文选题关键是：', options: ['问题明确、数据可得、方法可行', '题目宏大', '追热点', '导师偏好'], answer: 0, explain: '可行。' },
          { stem: '文献综述的作用是：', options: ['梳理脉络、找到研究缺口', '凑字数', '展示', '装饰'], answer: 0, explain: '缺口。' },
          { stem: '研究问题应：', options: ['具体、可回答、有理论或实践价值', '越宽越好', '越抽象越好', '只谈现象'], answer: 0, explain: '具体。' }
        ],
        doc: { lead: '这一章讲开头。', sections: [
          { id: 'topic', title: '选题', html: `<p>研究问题、假设；理论视角与边界。</p>` },
          { id: 'review', title: '文献', html: `<p>检索、筛选、综述结构；引用规范。</p>` }
        ], refs: [] } },
      { title: '研究方法与数据', brief: '怎么做。',
        q: [
          { stem: '问卷设计的要点是：', options: ['题目清晰、避免引导、预调研', '越长越好', '只问开放题', '随便写'], answer: 0, explain: '设计。' },
          { stem: '信度与效度的区别是：', options: ['一致性 vs 测到想测的', '相同', '信度更重要', '效度更重要'], answer: 0, explain: '两者。' },
          { stem: '回归分析的用途是：', options: ['检验变量关系与影响', '描述样本', '画图', '抽样'], answer: 0, explain: '回归。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'design', title: '设计', html: `<p>问卷、访谈、案例、实验；抽样与样本量。</p>` },
          { id: 'analysis', title: '分析', html: `<p>描述统计、相关与回归；信效度、稳健性。</p>` }
        ], refs: [] } },
      { title: '写作与规范', brief: '写清楚。',
        q: [
          { stem: '管理学论文结构是：', options: ['引言—文献—方法—结果—讨论—结论', '总—分—总', '背景—致谢', '问答'], answer: 0, explain: '结构。' },
          { stem: '讨论部分应：', options: ['解释结果、对比文献、说明局限', '只重复结果', '只写结论', '省略'], answer: 0, explain: '讨论。' },
          { stem: '引用规范的作用是：', options: ['可追溯与诚信', '凑数', '装饰', '增加篇幅'], answer: 0, explain: '规范。' }
        ],
        doc: { lead: '这一章讲写作。', sections: [
          { id: 'structure', title: '结构', html: `<p>摘要、引言、文献、方法、结果、讨论、结论。</p>` },
          { id: 'tables', title: '图表', html: `<p>三线表、变量定义表；引用格式。</p>` }
        ], refs: [] } },
      { title: '答辩', brief: '讲清楚。',
        q: [
          { stem: '答辩陈述要点：', options: ['问题、方法、结果、贡献与局限', '致谢', '篇幅', '格式'], answer: 0, explain: '四点。' },
          { stem: '被质疑时应：', options: ['承认局限并说明理由', '争辩', '回避', '改口'], answer: 0, explain: '诚恳。' },
          { stem: '答辩前最该准备：', options: ['熟悉数据与每个结论依据', '背稿', '模板', '服装'], answer: 0, explain: '依据。' }
        ],
        doc: { lead: '这一章讲答辩。', sections: [
          { id: 'talk', title: '陈述', html: `<p>8–10 分钟：问题—方法—结果—局限。</p>` },
          { id: 'qa', title: '问答', html: `<p>准备方法与数据问题；不会就说思路。</p>` }
        ], refs: [] } }
    ] },
    { name: '专业实习', chapters: [
      { title: '岗位与角色', brief: '企业与岗位。',
        q: [
          { stem: '工商管理实习的常见岗位不包括：', options: ['市场/运营', '人力资源', '财务分析', '外科医生'], answer: 3, explain: '无关。' },
          { stem: '选择实习最该看：', options: ['能否参与真实业务', '名气', '工资', '通勤'], answer: 0, explain: '实战。' },
          { stem: '实习生上手最快的方式是：', options: ['从具体任务做起并主动复盘', '只观察', '等安排', '只写文档'], answer: 0, explain: '实战。' }
        ],
        doc: { lead: '这一章讲岗位。', sections: [
          { id: 'roles', title: '岗位', html: `<p>市场、运营、HR、财务、咨询；职责与技能。</p>` },
          { id: 'onboard', title: '上手', html: `<p>了解业务、明确任务、主动沟通；周报习惯。</p>` }
        ], refs: [] } },
      { title: '业务分析', brief: '看懂业务。',
        q: [
          { stem: '业务分析的起点是：', options: ['明确业务目标与指标', '做报表', '开会', '写方案'], answer: 0, explain: '目标。' },
          { stem: '指标拆解的常用方法是：', options: ['漏斗与公式拆解', '凭感觉', '只做汇总', '只看同比'], answer: 0, explain: '拆解。' },
          { stem: '分析结论应：', options: ['有数据支撑且可执行', '只描述现象', '只给结论', '只做图表'], answer: 0, explain: '可执行。' }
        ],
        doc: { lead: '这一章讲业务。', sections: [
          { id: 'metrics', title: '指标', html: `<p>北极星指标、漏斗、A/B 测试；数据口径。</p>` },
          { id: 'insight', title: '洞察', html: `<p>从数据到结论；汇报与建议。</p>` }
        ], refs: [] } },
      { title: '沟通与协作', brief: '一起做事。',
        q: [
          { stem: '跨部门协作的关键是：', options: ['目标对齐与明确分工', '各做各的', '只发邮件', '只开会'], answer: 0, explain: '对齐。' },
          { stem: '汇报的推荐结构是：', options: ['结论先行、论据支撑、建议明确', '按时间流水', '只讲过程', '只讲困难'], answer: 0, explain: '金字塔。' },
          { stem: '遇到资源冲突应：', options: ['升级或寻找替代方案', '拖延', '放弃', '抱怨'], answer: 0, explain: '解决。' }
        ],
        doc: { lead: '这一章讲协作。', sections: [
          { id: 'communication', title: '沟通', html: `<p>结论先行、结构化表达；会议与邮件。</p>` },
          { id: 'collaboration', title: '协作', html: `<p>目标对齐、责任分工；冲突处理。</p>` }
        ], refs: [] } },
      { title: '实习复盘', brief: '留下什么。',
        q: [
          { stem: '实习应留下的成果是：', options: ['项目成果、数据与复盘', '工牌', '照片', '评语'], answer: 0, explain: '成果。' },
          { stem: '实习日志推荐写法：', options: ['问题—做法—结果—反思', '流水账', '只写结论', '只写感受'], answer: 0, explain: '结构化。' },
          { stem: '面试讲实习最佳结构：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'output', title: '成果', html: `<p>可量化的业绩、方案、数据报告；作品集。</p>` },
          { id: 'review', title: '复盘', html: `<p>每周五行；讲清你的贡献与学到的东西。</p>` }
        ], refs: [] } }
    ] },
    { name: '考研与求职', chapters: [
      { title: '考研方向', brief: '管理类考研。',
        q: [
          { stem: '工商管理考研的常见方向是：', options: ['企业管理、技术经济、MBA/MPAcc 等专硕', '只有企业管理', '只有 MBA', '只有学硕'], answer: 0, explain: '多方向。' },
          { stem: '管理学专业课通常包括：', options: ['管理学原理 + 经济学/组织行为', '只有数学', '只有英语', '只有政治'], answer: 0, explain: '综合。' },
          { stem: '择校最应考虑：', options: ['方向、导师与就业资源', '城市', '学费', '宿舍'], answer: 0, explain: '匹配。' }
        ],
        doc: { lead: '这一章讲方向。', sections: [
          { id: 'paths', title: '方向', html: `<p>企业管理、市场营销、人力资源、财务；学硕与专硕。</p>` },
          { id: 'subjects', title: '科目', html: `<p>政治、英语、数学三/396、专业课（管理学）。</p>` }
        ], refs: [] } },
      { title: '专业课复习', brief: '框架与案例。',
        q: [
          { stem: '管理学复习主线是：', options: ['计划—组织—领导—控制—创新', '只背定义', '只做案例', '只看真题'], answer: 0, explain: '主线。' },
          { stem: '名词解释答题结构：', options: ['定义、要点、意义', '只有定义', '只有意义', '感想'], answer: 0, explain: '三段。' },
          { stem: '案例分析题关键：', options: ['理论 + 材料 + 逻辑', '篇幅', '名言', '字迹'], answer: 0, explain: '结合。' }
        ],
        doc: { lead: '这一章讲复习。', sections: [
          { id: 'framework', title: '框架', html: `<p>职能框架、理论人物；思维导图。</p>` },
          { id: 'writing', title: '答题', html: `<p>名词三段式、论述分点、案例结合材料。</p>` }
        ], refs: [] } },
      { title: '求职方向', brief: '企业与咨询。',
        q: [
          { stem: '工商管理毕业生的常见去向不包括：', options: ['市场营销', '人力资源', '咨询/管培生', '外科医生'], answer: 3, explain: '专业限制。' },
          { stem: '管培生项目看重：', options: ['学习能力、沟通与领导潜质', '只有成绩', '只有证书', '只有英语'], answer: 0, explain: '潜质。' },
          { stem: '求职最加分的材料：', options: ['实习成果与项目数据', '证书数量', '成绩单', '社团'], answer: 0, explain: '经历。' }
        ],
        doc: { lead: '这一章讲就业。', sections: [
          { id: 'paths', title: '路径', html: `<p>市场、运营、HR、财务、咨询、管培生、创业。</p>` },
          { id: 'skills', title: '能力', html: `<p>数据分析（Excel/SQL）、结构化表达、项目管理。</p>` }
        ], refs: [] } },
      { title: '面试', brief: '展示能力。',
        q: [
          { stem: '行为面试常用的方法是：', options: ['STAR 结构', '自由发挥', '只讲结果', '只讲感受'], answer: 0, explain: 'STAR。' },
          { stem: '案例面试考察：', options: ['结构化拆解与商业判断', '背诵', '计算速度', '英语口音'], answer: 0, explain: '拆解。' },
          { stem: '被问到不会的问题应：', options: ['说明思路并诚实承认', '编造', '沉默', '转移话题'], answer: 0, explain: '诚实。' }
        ],
        doc: { lead: '这一章讲面试。', sections: [
          { id: 'behavior', title: '行为面', html: `<p>STAR、领导力与冲突案例；复盘准备。</p>` },
          { id: 'case', title: '案例面', html: `<p>市场进入、利润提升、定价；框架与计算。</p>` }
        ], refs: [] } }
    ] }
  ];

  var override = {};
  TITLES.forEach(function (t) { override[t] = { modules: [] }; });
  COURSES.forEach(function (c, ci) {
    var stageTitle = TITLES[Math.floor(ci / 3)];
    if (!stageTitle) return;
    var levels = c.chapters.map(function (ch, k) {
      DOCS[MAJOR + '-m' + ci + '-l' + k] = ch.doc;
      return { name: '第 ' + (k + 1) + ' 章 · ' + ch.title, brief: ch.brief, questions: ch.q, ready: true };
    });
    override[stageTitle].modules.push({ name: c.name, levels: levels });
  });
  MAJOR_STAGE_OVERRIDES[MAJOR] = override;
})();
