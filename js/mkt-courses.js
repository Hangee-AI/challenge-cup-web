/* ==========================================================
   mkt-courses.js · 市场营销：12 门课（主干 8 / 出口 4）= 84 关
   ========================================================== */

(function () {
  var MAJOR = 'management-市场营销';
  var TITLES = stageTitlesOf('management');

  var COURSES = [
    { name: '市场营销学原理', chapters: [
      { title: '市场与营销', brief: '营销是什么。',
        q: [
          { stem: '市场营销的核心是：', options: ['创造并传递顾客价值', '推销', '广告', '降价'], answer: 0, explain: '价值。' },
          { stem: '需要、欲望与需求的区别是：', options: ['需求有购买力支撑', '完全相同', '欲望最基础', '需要最具体'], answer: 0, explain: '购买力。' },
          { stem: '营销观念演进的最后阶段是：', options: ['社会营销观念', '生产观念', '产品观念', '推销观念'], answer: 0, explain: '社会营销。' }
        ],
        doc: { lead: '这一章讲概念。', sections: [
          { id: 'core', title: '核心概念', html: `<p>需要欲望需求、交换与关系；顾客价值与满意。</p>` },
          { id: 'philosophy', title: '营销观念', html: `<p>生产、产品、推销、营销、社会营销；营销组合 4P。</p>` }
        ], refs: [] } },
      { title: '营销环境与战略', brief: '看外部。',
        q: [
          { stem: '微观环境包括：', options: ['供应商、竞争者、顾客、公众', '只有竞争者', '只有顾客', '只有公众'], answer: 0, explain: '微观。' },
          { stem: 'SWOT 中 O 与 T 指：', options: ['机会与威胁', '优势与劣势', '机会与劣势', '优势与威胁'], answer: 0, explain: '外部。' },
          { stem: '营销战略的核心是：', options: ['目标市场选择与定位', '定价', '渠道', '广告'], answer: 0, explain: 'STP。' }
        ],
        doc: { lead: '这一章讲环境。', sections: [
          { id: 'environment', title: '环境', html: `<p>宏观（PEST）与微观环境；环境扫描。</p>` },
          { id: 'strategy', title: '战略', html: `<p>SWOT、STP；营销战略与业务战略匹配。</p>` }
        ], refs: [] } },
      { title: '市场细分与定位', brief: '找准人。',
        q: [
          { stem: '有效细分的标准包括：', options: ['可衡量、可进入、有规模、可区分', '只有可衡量', '只有可进入', '只要规模大'], answer: 0, explain: '多标准。' },
          { stem: '差异化定位应基于：', options: ['顾客重视且竞争对手未占据的点', '成本最低', '价格最低', '功能最多'], answer: 0, explain: '定位。' },
          { stem: '无差异营销的优点是：', options: ['成本经济', '满足个性需求', '风险低', '精准'], answer: 0, explain: '成本。' }
        ],
        doc: { lead: '这一章讲 STP。', sections: [
          { id: 'segmentation', title: '细分', html: `<p>细分变量、有效标准；细分方法。</p>` },
          { id: 'targeting', title: '目标与定位', html: `<p>目标市场选择策略；定位图与定位声明。</p>` }
        ], refs: [] } },
      { title: '产品策略', brief: '卖什么。',
        q: [
          { stem: '产品整体概念的三层是：', options: ['核心、形式、附加', '只有核心', '只有形式', '只有附加'], answer: 0, explain: '三层。' },
          { stem: '产品组合的维度包括：', options: ['宽度、长度、深度、关联度', '只有宽度', '只有长度', '只有深度'], answer: 0, explain: '四维度。' },
          { stem: '新产品开发的第一步是：', options: ['创意产生', '商业分析', '试销', '上市'], answer: 0, explain: '创意。' }
        ],
        doc: { lead: '这一章讲产品。', sections: [
          { id: 'product', title: '产品', html: `<p>整体产品、产品组合；产品生命周期策略。</p>` },
          { id: 'newproduct', title: '新产品', html: `<p>开发流程、采纳过程；失败原因。</p>` }
        ], refs: [] } },
      { title: '品牌与包装', brief: '让人记住。',
        q: [
          { stem: '品牌资产的核心是：', options: ['顾客认知、忠诚与溢价能力', '商标注册', '包装', '广告投入'], answer: 0, explain: '资产。' },
          { stem: '品牌延伸的风险是：', options: ['稀释品牌联想', '增加成本', '降低知名度', '无风险'], answer: 0, explain: '稀释。' },
          { stem: '包装的功能包括：', options: ['保护、便利、促销、信息', '只有保护', '只有便利', '只有促销'], answer: 0, explain: '多功能。' }
        ],
        doc: { lead: '这一章讲品牌。', sections: [
          { id: 'brand', title: '品牌', html: `<p>品牌要素、品牌资产模型；品牌策略。</p>` },
          { id: 'package', title: '包装', html: `<p>包装功能与设计；标签与合规。</p>` }
        ], refs: [] } },
      { title: '定价策略', brief: '卖多少钱。',
        q: [
          { stem: '成本加成定价的缺点是：', options: ['忽视需求与竞争', '成本高', '计算复杂', '不适合零售'], answer: 0, explain: '局限。' },
          { stem: '渗透定价适用于：', options: ['价格敏感、规模效应明显的新品', '奢侈品', '垄断品', '限量品'], answer: 0, explain: '渗透。' },
          { stem: '价格锚定的作用是：', options: ['影响消费者对价格的判断参照', '提高成本', '降低质量', '减少竞争'], answer: 0, explain: '锚定。' }
        ],
        doc: { lead: '这一章讲定价。', sections: [
          { id: 'method', title: '方法', html: `<p>成本、需求、竞争导向；撇脂与渗透。</p>` },
          { id: 'psychology', title: '心理', html: `<p>锚定、尾数、捆绑；价格调整与促销。</p>` }
        ], refs: [] } },
      { title: '渠道策略', brief: '怎么到顾客。',
        q: [
          { stem: '渠道层级指：', options: ['中间商环节数量', '门店数', '运输距离', '人员数'], answer: 0, explain: '层级。' },
          { stem: '渠道冲突包括：', options: ['水平、垂直、多渠道冲突', '只有水平', '只有垂直', '只有多渠道'], answer: 0, explain: '多类。' },
          { stem: '全渠道零售的核心是：', options: ['线上线下体验与数据打通', '只做线上', '只做线下', '只做批发'], answer: 0, explain: '打通。' }
        ],
        doc: { lead: '这一章讲渠道。', sections: [
          { id: 'structure', title: '结构', html: `<p>直接与间接、层级与密度；渠道设计。</p>` },
          { id: 'conflict', title: '管理', html: `<p>渠道冲突与协调；全渠道与 O2O。</p>` }
        ], refs: [] } },
      { title: '整合营销传播', brief: '怎么说。',
        q: [
          { stem: 'IMC 的核心是：', options: ['统一信息、多渠道协同', '只投广告', '只做促销', '只做公关'], answer: 0, explain: '整合。' },
          { stem: '推式与拉式策略：', options: ['推动渠道 vs 拉动终端', '价格高低', '渠道长短', '产品新旧'], answer: 0, explain: '推拉。' },
          { stem: '促销效果评估应看：', options: ['曝光、转化、ROI', '只有曝光', '只有转化', '只有费用'], answer: 0, explain: '多指标。' }
        ],
        doc: { lead: '这一章讲传播。', sections: [
          { id: 'mix', title: '组合', html: `<p>广告、人员推销、销售促进、公关；推拉策略。</p>` },
          { id: 'measure', title: '评估', html: `<p>传播目标、ROI；促销 ROI 计算。</p>` }
        ], refs: [] } }
    ] },
    { name: '微观经济学', chapters: [
      { title: '供求与弹性', brief: '价格机制。',
        q: [
          { stem: '需求定律表明：', options: ['价格与需求量反向变动', '同向', '无关', '成正比'], answer: 0, explain: '需求定律。' },
          { stem: '均衡价格由：', options: ['供求共同决定', '政府', '厂商', '消费者'], answer: 0, explain: '供求。' },
          { stem: '需求价格弹性大于 1 时降价：', options: ['收入增加', '收入减少', '不变', '不确定'], answer: 0, explain: '弹性。' }
        ],
        doc: { lead: '这一章讲供求。', sections: [
          { id: 'supply', title: '供求', html: `<p>曲线与均衡；影响因素与移动。</p>` },
          { id: 'elasticity', title: '弹性', html: `<p>价格、收入、交叉弹性；企业定价应用。</p>` }
        ], refs: [] } },
      { title: '消费者行为', brief: '选择。',
        q: [
          { stem: '边际效用递减意味着：', options: ['新增单位效用下降', '总效用下降', '价格下降', '收入下降'], answer: 0, explain: '递减。' },
          { stem: '消费者均衡条件：', options: ['MU/P 相等', '总效用最大唯一', '价格相等', '收入花完'], answer: 0, explain: '均衡。' },
          { stem: '消费者剩余是：', options: ['愿付价格与实际支付之差', '实际支付', '收入', '成本'], answer: 0, explain: '剩余。' }
        ],
        doc: { lead: '这一章讲消费。', sections: [
          { id: 'utility', title: '效用', html: `<p>总效用与边际效用；消费者剩余。</p>` },
          { id: 'indifference', title: '无差异曲线', html: `<p>替代率、预算线；最优选择。</p>` }
        ], refs: [] } },
      { title: '生产与成本', brief: '供给背后。',
        q: [
          { stem: '边际报酬递减的原因是：', options: ['固定要素制约', '技术退步', '价格上升', '规模过大'], answer: 0, explain: '固定要素。' },
          { stem: '短期成本包含：', options: ['固定与可变成本', '只有固定', '只有可变', '无固定'], answer: 0, explain: '两类。' },
          { stem: '规模经济的来源包括：', options: ['专业化、批量采购、分摊固定成本', '只有专业化', '只有采购', '只有分摊'], answer: 0, explain: '多源。' }
        ],
        doc: { lead: '这一章讲成本。', sections: [
          { id: 'production', title: '生产', html: `<p>生产函数、边际报酬；规模经济与范围经济。</p>` },
          { id: 'cost', title: '成本', html: `<p>短期成本曲线、长期成本；成本性态。</p>` }
        ], refs: [] } },
      { title: '市场结构', brief: '竞争。',
        q: [
          { stem: '完全竞争厂商是：', options: ['价格接受者', '价格制定者', '垄断者', '寡头'], answer: 0, explain: '接受者。' },
          { stem: '垄断厂商利润最大化：', options: ['MR = MC', 'P = MC', 'P = AC', 'MR = 0'], answer: 0, explain: 'MR=MC。' },
          { stem: '产品差异化对竞争的意义：', options: ['降低价格敏感、形成壁垒', '提高成本', '无意义', '减少需求'], answer: 0, explain: '差异化。' }
        ],
        doc: { lead: '这一章讲市场。', sections: [
          { id: 'perfect', title: '完全竞争', html: `<p>短期长期均衡；效率。</p>` },
          { id: 'differentiation', title: '不完全竞争', html: `<p>垄断、垄断竞争、寡头；差异化与定价。</p>` }
        ], refs: [] } },
      { title: '要素与分配', brief: '分配。',
        q: [
          { stem: '劳动需求是：', options: ['派生需求', '最终需求', '政府需求', '无弹性'], answer: 0, explain: '派生。' },
          { stem: '基尼系数衡量：', options: ['收入不平等', '增长', '通胀', '失业'], answer: 0, explain: '基尼。' },
          { stem: '人力资本投资包括：', options: ['教育与培训', '只有教育', '只有培训', '只有设备'], answer: 0, explain: '人力资本。' }
        ],
        doc: { lead: '这一章讲要素。', sections: [
          { id: 'factor', title: '要素市场', html: `<p>边际产品价值；工资与资本价格。</p>` },
          { id: 'human', title: '人力资本', html: `<p>教育与培训回报；分配与再分配。</p>` }
        ], refs: [] } },
      { title: '市场失灵与政府', brief: '失灵。',
        q: [
          { stem: '外部性导致：', options: ['资源错配', '效率提高', '无影响', '价格下降'], answer: 0, explain: '外部性。' },
          { stem: '公共物品特点：', options: ['非竞争、非排他', '竞争', '排他', '私有'], answer: 0, explain: '公共。' },
          { stem: '信息不对称的后果包括：', options: ['逆向选择与道德风险', '只有逆向选择', '只有道德风险', '无后果'], answer: 0, explain: '两种。' }
        ],
        doc: { lead: '这一章讲失灵。', sections: [
          { id: 'externality', title: '外部性', html: `<p>庇古税、科斯定理；管制。</p>` },
          { id: 'information', title: '信息', html: `<p>逆向选择、道德风险；信号与筛选。</p>` }
        ], refs: [] } },
      { title: '博弈与策略', brief: '互动。',
        q: [
          { stem: '纳什均衡指：', options: ['无人愿单方面改变', '总体最优', '收益最大', '零和'], answer: 0, explain: '纳什。' },
          { stem: '囚徒困境说明：', options: ['个体理性导致集体非理性', '合作总最优', '无均衡', '信息完全'], answer: 0, explain: '困境。' },
          { stem: '价格战往往是：', options: ['重复博弈中的非合作结果', '最优策略', '政府要求', '消费者决定'], answer: 0, explain: '价格战。' }
        ],
        doc: { lead: '这一章讲博弈。', sections: [
          { id: 'nash', title: '纳什均衡', html: `<p>占优策略、囚徒困境；重复博弈。</p>` },
          { id: 'competition', title: '竞争策略', html: `<p>价格战、合谋与差异化；进入威慑。</p>` }
        ], refs: [] } },
      { title: '经济学与营销', brief: '连接。',
        q: [
          { stem: '价格歧视的经济学基础是：', options: ['不同顾客价格弹性不同', '成本不同', '产品不同', '渠道不同'], answer: 0, explain: '弹性。' },
          { stem: '捆绑销售适用于：', options: ['需求负相关或互补的产品', '完全替代品', '无关产品', '奢侈品'], answer: 0, explain: '捆绑。' },
          { stem: '微观经济学对营销的价值是：', options: ['理解定价、需求与竞争', '替代营销', '只做报表', '无价值'], answer: 0, explain: '分析基础。' }
        ],
        doc: { lead: '这一章讲连接。', sections: [
          { id: 'pricing', title: '定价', html: `<p>价格歧视、两部定价、捆绑；平台定价。</p>` },
          { id: 'application', title: '应用', html: `<p>需求估计、竞争分析；营销决策。</p>` }
        ], refs: [] } }
    ] },
    { name: '管理学原理', chapters: [
      { title: '管理与管理者', brief: '基本概念。',
        q: [
          { stem: '管理四职能是：', options: ['计划、组织、领导、控制', '计划、执行、检查、改进', '决策、沟通、激励、创新', '人财物信息'], answer: 0, explain: '四职能。' },
          { stem: '管理者的三种技能是：', options: ['技术、人际、概念', '决策、沟通、执行', '生产、销售、财务', '计划、组织、控制'], answer: 0, explain: '卡茨。' },
          { stem: '效率与效果：', options: ['做事方式 vs 做事目标', '相同', '互斥', '无关'], answer: 0, explain: '两者。' }
        ],
        doc: { lead: '这一章讲概念。', sections: [
          { id: 'function', title: '职能', html: `<p>计划、组织、领导、控制；效率与效果。</p>` },
          { id: 'role', title: '角色', html: `<p>明茨伯格十角色；卡茨三技能。</p>` }
        ], refs: [] } },
      { title: '管理思想', brief: '历史。',
        q: [
          { stem: '科学管理代表人物：', options: ['泰勒', '梅奥', '法约尔', '韦伯'], answer: 0, explain: '泰勒。' },
          { stem: '霍桑实验结论：', options: ['人是社会人', '经济人', '技术决定', '制度万能'], answer: 0, explain: '霍桑。' },
          { stem: '权变理论认为：', options: ['无普适最佳方式', '有普适原则', '只看制度', '只看文化'], answer: 0, explain: '权变。' }
        ],
        doc: { lead: '这一章讲历史。', sections: [
          { id: 'classical', title: '古典', html: `<p>泰勒、法约尔、韦伯。</p>` },
          { id: 'modern', title: '现代', html: `<p>行为科学、系统与权变；学习型组织。</p>` }
        ], refs: [] } },
      { title: '计划与决策', brief: '定方向。',
        q: [
          { stem: '计划的落脚点是：', options: ['目标与行动方案', '预算', '人员', '考核'], answer: 0, explain: '目标。' },
          { stem: '有限理性的含义：', options: ['信息认知受限、满意即可', '完全理性', '直觉唯一', '无决策'], answer: 0, explain: '有限理性。' },
          { stem: '目标管理的关键：', options: ['参与设定与结果考核', '上级命令', '只看过程', '不考核'], answer: 0, explain: 'MBO。' }
        ],
        doc: { lead: '这一章讲计划。', sections: [
          { id: 'planning', title: '计划', html: `<p>计划类型、目标体系；MBO。</p>` },
          { id: 'decision', title: '决策', html: `<p>决策过程、理性与直觉；群体决策。</p>` }
        ], refs: [] } },
      { title: '组织设计', brief: '结构。',
        q: [
          { stem: '幅度与层次关系：', options: ['反比', '正比', '无关', '相等'], answer: 0, explain: '反比。' },
          { stem: '事业部制核心：', options: ['按产品/地区分权', '高度集权', '职能集中', '矩阵双线'], answer: 0, explain: '分权。' },
          { stem: '矩阵结构缺点：', options: ['双重领导冲突', '反应慢', '无专业分工', '集权过度'], answer: 0, explain: '双线。' }
        ],
        doc: { lead: '这一章讲组织。', sections: [
          { id: 'design', title: '设计', html: `<p>部门化、幅度层次、集权分权。</p>` },
          { id: 'structure', title: '结构', html: `<p>直线职能、事业部、矩阵、网络型。</p>` }
        ], refs: [] } },
      { title: '领导与激励', brief: '带人。',
        q: [
          { stem: '保健因素的作用是：', options: ['防止不满但不激励', '直接激励', '提高绩效', '无作用'], answer: 0, explain: '保健。' },
          { stem: '期望理论三要素：', options: ['期望、工具性、效价', '只有期望', '只有效价', '只有工具性'], answer: 0, explain: '三要素。' },
          { stem: '领导与管理的区别：', options: ['领导重方向与激励', '完全相同', '领导只管考核', '管理只定愿景'], answer: 0, explain: '区别。' }
        ],
        doc: { lead: '这一章讲领导。', sections: [
          { id: 'motivation', title: '激励', html: `<p>需求层次、双因素、期望与公平。</p>` },
          { id: 'leadership', title: '领导', html: `<p>风格与权变理论；领导力发展。</p>` }
        ], refs: [] } },
      { title: '控制与沟通', brief: '执行。',
        q: [
          { stem: '控制过程起点：', options: ['确立标准', '衡量绩效', '纠正偏差', '奖惩'], answer: 0, explain: '标准。' },
          { stem: '例外管理指：', options: ['重点关注偏差大的例外事项', '事必躬亲', '不做控制', '只做例行'], answer: 0, explain: '例外。' },
          { stem: '沟通改进方法：', options: ['简化语言、倾听、反馈', '只说不管', '只发文件', '减少沟通'], answer: 0, explain: '改进。' }
        ],
        doc: { lead: '这一章讲控制。', sections: [
          { id: 'control', title: '控制', html: `<p>控制类型与过程；例外管理。</p>` },
          { id: 'communication', title: '沟通', html: `<p>沟通网络、障碍与改进；冲突管理。</p>` }
        ], refs: [] } },
      { title: '组织文化', brief: '软实力。',
        q: [
          { stem: '文化三层次：', options: ['物质、制度、精神', '只有物质', '只有制度', '只有精神'], answer: 0, explain: '三层次。' },
          { stem: '强势文化作用：', options: ['统一行为、降低协调成本', '增加成本', '阻碍变革', '无作用'], answer: 0, explain: '强势。' },
          { stem: '文化变革难点：', options: ['价值观深层、惯性大', '成本高', '人少', '制度多'], answer: 0, explain: '惯性。' }
        ],
        doc: { lead: '这一章讲文化。', sections: [
          { id: 'level', title: '层次', html: `<p>物质、制度、精神；形成机制。</p>` },
          { id: 'change', title: '变革', html: `<p>文化诊断、变革阻力；领导作用。</p>` }
        ], refs: [] } },
      { title: '管理案例', brief: '用起来。',
        q: [
          { stem: '案例分析四步：', options: ['问题—原因—方案—评价', '只给结论', '只描述', '只评价'], answer: 0, explain: '四步。' },
          { stem: 'SWOT 包含：', options: ['优势劣势机会威胁', '人财物信息', '计划组织控制', '产供销'], answer: 0, explain: 'SWOT。' },
          { stem: '方案落地应考虑：', options: ['资源、人员、时间与文化', '只有资源', '只有人员', '只有时间'], answer: 0, explain: '综合。' }
        ],
        doc: { lead: '这一章讲案例。', sections: [
          { id: 'framework', title: '框架', html: `<p>SWOT、五力、价值链；问题树。</p>` },
          { id: 'case', title: '案例', html: `<p>案例拆解与方案评价；汇报。</p>` }
        ], refs: [] } }
    ] },
    { name: '消费者行为学', chapters: [
      { title: '消费者行为概述', brief: '为什么买。',
        q: [
          { stem: '消费者行为研究的核心是：', options: ['购买决策过程与影响因素', '只研究购买瞬间', '只研究广告', '只研究价格'], answer: 0, explain: '决策。' },
          { stem: '购买决策的五阶段是：', options: ['认知—信息—评价—购买—购后', '只有购买', '只有评价', '只有购后'], answer: 0, explain: '五阶段。' },
          { stem: '参与度高低影响：', options: ['决策过程的复杂程度', '价格', '渠道', '品牌'], answer: 0, explain: '参与度。' }
        ],
        doc: { lead: '这一章讲概述。', sections: [
          { id: 'process', title: '决策过程', html: `<p>五阶段模型；参与度与决策类型。</p>` },
          { id: 'scope', title: '研究范围', html: `<p>个体、群体、文化；研究方法。</p>` }
        ], refs: [] } },
      { title: '影响购买的因素', brief: '什么在起作用。',
        q: [
          { stem: '影响消费者行为的因素包括：', options: ['文化、社会、个人、心理', '只有文化', '只有社会', '只有心理'], answer: 0, explain: '四类。' },
          { stem: '参照群体的作用是：', options: ['提供规范与比较标准', '决定价格', '决定渠道', '无作用'], answer: 0, explain: '参照。' },
          { stem: '生活方式属于：', options: ['个人因素', '文化因素', '社会因素', '心理因素'], answer: 0, explain: '个人。' }
        ],
        doc: { lead: '这一章讲因素。', sections: [
          { id: 'cultural', title: '文化与社会', html: `<p>文化、亚文化、社会阶层；参照群体与家庭。</p>` },
          { id: 'personal', title: '个人与心理', html: `<p>年龄职业、生活方式、个性；动机知觉学习态度。</p>` }
        ], refs: [] } },
      { title: '知觉与学习', brief: '怎么理解。',
        q: [
          { stem: '知觉的选择性包括：', options: ['选择性注意、理解、记忆', '只有注意', '只有理解', '只有记忆'], answer: 0, explain: '三种。' },
          { stem: '经典条件反射在营销中的应用：', options: ['品牌与积极刺激关联', '惩罚', '随机', '无应用'], answer: 0, explain: '联想。' },
          { stem: '记忆的品牌联想网络说明：', options: ['品牌节点与联想强度影响回忆', '记忆无关', '只看价格', '只看广告'], answer: 0, explain: '联想。' }
        ],
        doc: { lead: '这一章讲知觉。', sections: [
          { id: 'perception', title: '知觉', html: `<p>暴露、注意、理解；阈限与潜意识。</p>` },
          { id: 'learning', title: '学习与记忆', html: `<p>条件反射、认知学习；品牌联想。</p>` }
        ], refs: [] } },
      { title: '动机与态度', brief: '为什么喜欢。',
        q: [
          { stem: '马斯洛需求层次最高层：', options: ['自我实现', '尊重', '社交', '安全'], answer: 0, explain: '自我实现。' },
          { stem: '态度的三成分是：', options: ['认知、情感、行为意向', '只有认知', '只有情感', '只有行为'], answer: 0, explain: '三成分。' },
          { stem: '改变态度的策略包括：', options: ['改变认知、情感联结、行为引导', '只有认知', '只有情感', '只有行为'], answer: 0, explain: '多策略。' }
        ],
        doc: { lead: '这一章讲动机。', sections: [
          { id: 'motive', title: '动机', html: `<p>需求层次、显性与隐性动机；冲突类型。</p>` },
          { id: 'attitude', title: '态度', html: `<p>三成分模型；改变态度与说服。</p>` }
        ], refs: [] } },
      { title: '购后行为', brief: '买完之后。',
        q: [
          { stem: '购后失调指：', options: ['购买后的怀疑与后悔', '满意度高', '重复购买', '推荐他人'], answer: 0, explain: '失调。' },
          { stem: '顾客满意的来源是：', options: ['感知绩效与期望的比较', '价格低唯一', '广告多', '渠道广'], answer: 0, explain: '期望。' },
          { stem: '忠诚的价值在于：', options: ['复购、推荐与更高容忍度', '只复购', '只推荐', '无价值'], answer: 0, explain: '忠诚。' }
        ],
        doc: { lead: '这一章讲购后。', sections: [
          { id: 'dissonance', title: '失调', html: `<p>购后失调、满意与不满；投诉处理。</p>` },
          { id: 'loyalty', title: '忠诚', html: `<p>忠诚层级、NPS；留存与推荐。</p>` }
        ], refs: [] } },
      { title: '群体与口碑', brief: '相互影响。',
        q: [
          { stem: '意见领袖的特点是：', options: ['专业、可信、社交活跃', '只有专业', '只有可信', '知名度高唯一'], answer: 0, explain: 'KOL。' },
          { stem: '从众行为的动因包括：', options: ['信息影响与规范影响', '只有信息', '只有规范', '无动因'], answer: 0, explain: '两种。' },
          { stem: '口碑传播的关键是：', options: ['真实体验与可信来源', '广告投入', '价格低', '渠道广'], answer: 0, explain: '口碑。' }
        ],
        doc: { lead: '这一章讲群体。', sections: [
          { id: 'influence', title: '群体影响', html: `<p>从众、参照群体；意见领袖与扩散。</p>` },
          { id: 'wom', title: '口碑', html: `<p>正负口碑、eWOM；危机应对。</p>` }
        ], refs: [] } },
      { title: '数字消费者', brief: '线上行为。',
        q: [
          { stem: '线上决策旅程的特点是：', options: ['触点碎片化、可被搜索与比较', '线性唯一', '不可逆', '无比较'], answer: 0, explain: '碎片化。' },
          { stem: '购物车放弃的主要原因是：', options: ['价格、运费与流程复杂', '只有价格', '只有运费', '只有流程'], answer: 0, explain: '多因。' },
          { stem: '个性化推荐的价值是：', options: ['降低搜索成本、提升转化', '增加成本', '减少选择', '无价值'], answer: 0, explain: '推荐。' }
        ],
        doc: { lead: '这一章讲数字。', sections: [
          { id: 'journey', title: '旅程', html: `<p>触点、搜索与比较；AISAS 模型。</p>` },
          { id: 'experience', title: '体验', html: `<p>转化漏斗、购物车放弃；个性化与隐私。</p>` }
        ], refs: [] } },
      { title: '消费者研究实务', brief: '怎么研究。',
        q: [
          { stem: '定性研究的方法包括：', options: ['深度访谈、焦点小组、观察', '只有访谈', '只有焦点小组', '只有观察'], answer: 0, explain: '多种。' },
          { stem: '神经营销的手段包括：', options: ['眼动、脑电、面部表情', '只有眼动', '只有脑电', '只有表情'], answer: 0, explain: '多种。' },
          { stem: '研究结论应：', options: ['基于证据并可指导决策', '凭感觉', '只描述', '只做图表'], answer: 0, explain: '证据。' }
        ],
        doc: { lead: '这一章讲实务。', sections: [
          { id: 'qualitative', title: '定性', html: `<p>访谈、焦点小组、民族志；编码分析。</p>` },
          { id: 'neuro', title: '神经营销', html: `<p>眼动、EEG、fMRI；伦理与边界。</p>` }
        ], refs: [] } }
    ] },
    { name: '市场调研与预测', chapters: [
      { title: '调研概述与流程', brief: '怎么研究市场。',
        q: [
          { stem: '市场调研的流程是：', options: ['问题—设计—收集—分析—报告', '只有收集', '只有分析', '只有报告'], answer: 0, explain: '流程。' },
          { stem: '探索性调研的目的是：', options: ['明确问题与假设', '验证假设', '预测销量', '定价'], answer: 0, explain: '探索。' },
          { stem: '调研方案应包括：', options: ['方法、样本、工具、预算与进度', '只有方法', '只有样本', '只有预算'], answer: 0, explain: '要素。' }
        ],
        doc: { lead: '这一章讲流程。', sections: [
          { id: 'process', title: '流程', html: `<p>问题界定、研究设计类型；调研方案。</p>` },
          { id: 'type', title: '类型', html: `<p>探索性、描述性、因果性；二手与一手数据。</p>` }
        ], refs: [] } },
      { title: '抽样与样本', brief: '问谁。',
        q: [
          { stem: '概率抽样与非概率抽样的区别是：', options: ['是否已知入样概率', '样本量', '成本', '工具'], answer: 0, explain: '概率。' },
          { stem: '样本量增大使：', options: ['抽样误差减小', '误差增大', '无影响', '成本降低'], answer: 0, explain: '误差。' },
          { stem: '分层抽样的优点是：', options: ['提高代表性、降低方差', '简单', '便宜', '无需抽样框'], answer: 0, explain: '分层。' }
        ],
        doc: { lead: '这一章讲抽样。', sections: [
          { id: 'method', title: '方法', html: `<p>简单随机、分层、整群、系统；非概率抽样。</p>` },
          { id: 'size', title: '样本量', html: `<p>置信度与误差；抽样误差计算。</p>` }
        ], refs: [] } },
      { title: '问卷设计', brief: '怎么问。',
        q: [
          { stem: '问卷设计的首要原则是：', options: ['问题清晰、无引导、易回答', '题目多', '开放题多', '有趣'], answer: 0, explain: '清晰。' },
          { stem: '量表类型包括：', options: ['李克特、语义差异、等级', '只有李克特', '只有语义差异', '只有等级'], answer: 0, explain: '多种。' },
          { stem: '预调研的目的是：', options: ['检验问卷与流程', '收集正式数据', '节省成本', '装饰'], answer: 0, explain: '预调研。' }
        ],
        doc: { lead: '这一章讲问卷。', sections: [
          { id: 'design', title: '设计', html: `<p>结构、题型、措辞；避免偏差。</p>` },
          { id: 'pretest', title: '预调研', html: `<p>试填与修订；信效度初检。</p>` }
        ], refs: [] } },
      { title: '数据收集方法', brief: '怎么收集。',
        q: [
          { stem: '在线调研的优点是：', options: ['成本低、速度快、覆盖广', '样本代表性最好', '无偏差', '回收率最高'], answer: 0, explain: '在线。' },
          { stem: '观察法的优点是：', options: ['记录真实行为、减少自报偏差', '成本低', '速度快', '样本大'], answer: 0, explain: '观察。' },
          { stem: '实验法的作用是：', options: ['识别因果关系', '描述现状', '探索问题', '降低成本'], answer: 0, explain: '因果。' }
        ],
        doc: { lead: '这一章讲收集。', sections: [
          { id: 'methods', title: '方法', html: `<p>面访、电话、在线、观察、实验；优缺点。</p>` },
          { id: 'quality', title: '质量', html: `<p>回收率、无应答偏差、数据清洗。</p>` }
        ], refs: [] } },
      { title: '数据分析', brief: '看出规律。',
        q: [
          { stem: '描述统计包括：', options: ['频数、均值、标准差', '只有均值', '只有频数', '只有标准差'], answer: 0, explain: '描述。' },
          { stem: '交叉分析用于：', options: ['考察变量间关联', '预测', '抽样', '设计问卷'], answer: 0, explain: '交叉。' },
          { stem: '回归分析的用途：', options: ['量化影响关系', '描述分布', '抽样', '画图'], answer: 0, explain: '回归。' }
        ],
        doc: { lead: '这一章讲分析。', sections: [
          { id: 'descriptive', title: '描述', html: `<p>分布、集中趋势、离散程度；交叉表。</p>` },
          { id: 'inference', title: '推断', html: `<p>假设检验、相关与回归；结果解读。</p>` }
        ], refs: [] } },
      { title: '市场预测', brief: '看未来。',
        q: [
          { stem: '定性预测方法包括：', options: ['专家意见、德尔菲、销售人员估计', '只有德尔菲', '只有专家', '只有销售'], answer: 0, explain: '定性。' },
          { stem: '移动平均法的作用是：', options: ['平滑随机波动', '消除趋势', '预测季节', '算成本'], answer: 0, explain: '平滑。' },
          { stem: '预测误差衡量常用：', options: ['MAD、MSE、MAPE', '只有 MAD', '只有 MSE', '只有 MAPE'], answer: 0, explain: '多指标。' }
        ],
        doc: { lead: '这一章讲预测。', sections: [
          { id: 'qualitative', title: '定性', html: `<p>专家法、德尔菲；情景分析。</p>` },
          { id: 'quantitative', title: '定量', html: `<p>时间序列、回归；误差与组合预测。</p>` }
        ], refs: [] } },
      { title: '调研报告与伦理', brief: '交付。',
        q: [
          { stem: '调研报告的核心结构是：', options: ['摘要—背景—方法—结果—结论建议', '只有结果', '只有结论', '只有方法'], answer: 0, explain: '结构。' },
          { stem: '调研伦理包括：', options: ['知情同意、隐私保护、数据真实', '只有同意', '只有隐私', '只有真实'], answer: 0, explain: '多要求。' },
          { stem: '结论与建议应：', options: ['有数据支撑且可执行', '只描述', '只喊口号', '无依据'], answer: 0, explain: '可执行。' }
        ],
        doc: { lead: '这一章讲报告。', sections: [
          { id: 'report', title: '报告', html: `<p>结构、图表、摘要；向决策者汇报。</p>` },
          { id: 'ethics', title: '伦理', html: `<p>知情同意、隐私、数据质量；利益冲突。</p>` }
        ], refs: [] } },
      { title: '调研项目实战', brief: '做一遍。',
        q: [
          { stem: '项目开始前应：', options: ['明确决策问题与研究问题', '直接发问卷', '先买数据', '先写报告'], answer: 0, explain: '问题。' },
          { stem: '数据质量控制包括：', options: ['逻辑校验、异常值处理、复核', '只有校验', '只有异常', '只有复核'], answer: 0, explain: '质控。' },
          { stem: '项目交付应包括：', options: ['报告、数据、代码/问卷', '只有报告', '只有数据', '只有问卷'], answer: 0, explain: '完整。' }
        ],
        doc: { lead: '这一章讲实战。', sections: [
          { id: 'project', title: '项目', html: `<p>选题、问卷、执行、分析全流程。</p>` },
          { id: 'deliver', title: '交付', html: `<p>报告、数据附件、可视化；答辩。</p>` }
        ], refs: [] } }
    ] },
    { name: '品牌管理', chapters: [
      { title: '品牌与品牌资产', brief: '品牌是什么。',
        q: [
          { stem: '品牌资产的核心是：', options: ['顾客认知与忠诚带来的溢价', '商标', '包装', '广告'], answer: 0, explain: '资产。' },
          { stem: '品牌资产模型（CBBE）的顶层是：', options: ['品牌共鸣', '品牌认知', '品牌联想', '品牌质量'], answer: 0, explain: '共鸣。' },
          { stem: '品牌的作用包括：', options: ['识别、信任、溢价、忠诚', '只有识别', '只有信任', '只有溢价'], answer: 0, explain: '多功能。' }
        ],
        doc: { lead: '这一章讲资产。', sections: [
          { id: 'concept', title: '概念', html: `<p>品牌定义、品牌资产维度；CBBE 金字塔。</p>` },
          { id: 'value', title: '价值', html: `<p>品牌对顾客与企业的价值；品牌估值方法。</p>` }
        ], refs: [] } },
      { title: '品牌定位', brief: '占心智。',
        q: [
          { stem: '品牌定位的本质是：', options: ['在顾客心智中占据独特位置', '定价格', '定渠道', '定产品'], answer: 0, explain: '心智。' },
          { stem: '定位声明的要素包括：', options: ['目标、差异点、理由', '只有目标', '只有差异点', '只有理由'], answer: 0, explain: '三要素。' },
          { stem: '重新定位的时机包括：', options: ['市场变化、形象老化、竞争加剧', '只有形象老化', '只有市场变化', '无时机'], answer: 0, explain: '多时机。' }
        ],
        doc: { lead: '这一章讲定位。', sections: [
          { id: 'position', title: '定位', html: `<p>定位图、差异点与共同点；定位声明。</p>` },
          { id: 'reposition', title: '重定位', html: `<p>时机、风险与执行；品牌延伸。</p>` }
        ], refs: [] } },
      { title: '品牌要素与识别', brief: '看得见的部分。',
        q: [
          { stem: '品牌要素包括：', options: ['名称、标识、口号、包装、色彩', '只有名称', '只有标识', '只有口号'], answer: 0, explain: '多要素。' },
          { stem: '好品牌名称的特点：', options: ['易记、易读、有意义、可保护', '越长越好', '越抽象越好', '无含义'], answer: 0, explain: '特点。' },
          { stem: '品牌视觉识别的原则是：', options: ['一致性、独特性、可延展', '经常更换', '模仿对手', '越复杂越好'], answer: 0, explain: '一致性。' }
        ],
        doc: { lead: '这一章讲识别。', sections: [
          { id: 'elements', title: '要素', html: `<p>名称、标识、口号、角色、包装；选择标准。</p>` },
          { id: 'identity', title: '识别系统', html: `<p>VI 规范、一致性管理；跨文化适应。</p>` }
        ], refs: [] } },
      { title: '品牌传播', brief: '怎么讲。',
        q: [
          { stem: '品牌传播的核心是：', options: ['一致的信息与一致的体验', '广告越多越好', '价格越低越好', '渠道越广越好'], answer: 0, explain: '一致。' },
          { stem: '品牌故事的作用是：', options: ['建立情感联结与记忆', '降低成本', '提高价格', '扩大渠道'], answer: 0, explain: '故事。' },
          { stem: '整合传播的关键是：', options: ['多渠道协同、触点一致', '只做线上', '只做线下', '只做公关'], answer: 0, explain: '协同。' }
        ],
        doc: { lead: '这一章讲传播。', sections: [
          { id: 'story', title: '故事', html: `<p>品牌叙事、原型；内容与社交传播。</p>` },
          { id: 'imc', title: '整合', html: `<p>触点一致、代言人选择；传播效果评估。</p>` }
        ], refs: [] } },
      { title: '品牌架构与延伸', brief: '多品牌。',
        q: [
          { stem: '品牌架构的类型包括：', options: ['单一品牌、多品牌、背书品牌', '只有单一', '只有多品牌', '只有背书'], answer: 0, explain: '多类型。' },
          { stem: '品牌延伸的风险是：', options: ['稀释品牌联想、失败反噬', '成本高', '渠道冲突', '无风险'], answer: 0, explain: '稀释。' },
          { stem: '品牌组合管理的目标是：', options: ['清晰分工、避免内耗', '越多越好', '越少越好', '只做高端'], answer: 0, explain: '组合。' }
        ],
        doc: { lead: '这一章讲架构。', sections: [
          { id: 'architecture', title: '架构', html: `<p>品牌层级、背书关系；组合决策。</p>` },
          { id: 'extension', title: '延伸', html: `<p>延伸条件与风险；子品牌与联合品牌。</p>` }
        ], refs: [] } },
      { title: '品牌危机管理', brief: '出事怎么办。',
        q: [
          { stem: '品牌危机处理的首要原则是：', options: ['快速响应、真诚沟通', '沉默', '推责', '删帖'], answer: 0, explain: '真诚。' },
          { stem: '危机公关的常见错误包括：', options: ['拖延、狡辩、忽视公众情绪', '只有拖延', '只有狡辩', '只有忽视'], answer: 0, explain: '多错误。' },
          { stem: '危机后的修复重点是：', options: ['重建信任与改进措施', '换包装', '降价', '打广告'], answer: 0, explain: '信任。' }
        ],
        doc: { lead: '这一章讲危机。', sections: [
          { id: 'response', title: '响应', html: `<p>危机分级、响应速度、道歉与补偿；发言人口径。</p>` },
          { id: 'repair', title: '修复', html: `<p>信任重建、整改披露；长期监测。</p>` }
        ], refs: [] } },
      { title: '品牌资产测量', brief: '怎么量。',
        q: [
          { stem: '品牌认知度的测量指标：', options: ['提示/未提示回忆、识别率', '只有回忆', '只有识别', '只有销量'], answer: 0, explain: '认知。' },
          { stem: '品牌忠诚度的指标包括：', options: ['复购率、推荐意愿、溢价支付', '只有复购', '只有推荐', '只有溢价'], answer: 0, explain: '多指标。' },
          { stem: '品牌评估方法包括：', options: ['成本法、市场法、收益法', '只有成本', '只有市场', '只有收益'], answer: 0, explain: '三种。' }
        ],
        doc: { lead: '这一章讲测量。', sections: [
          { id: 'metrics', title: '指标', html: `<p>认知、联想、质量感知、忠诚；NPS。</p>` },
          { id: 'valuation', title: '估值', html: `<p>Interbrand 等方法；品牌价值报告。</p>` }
        ], refs: [] } },
      { title: '品牌实战', brief: '做方案。',
        q: [
          { stem: '品牌方案的核心是：', options: ['目标受众、定位、传播与预算', '只有预算', '只有定位', '只有传播'], answer: 0, explain: '综合。' },
          { stem: '品牌审计的作用是：', options: ['评估现状与差距', '装饰', '算成本', '定价'], answer: 0, explain: '审计。' },
          { stem: '方案评估应看：', options: ['认知提升与商业结果', '只有曝光', '只有美观', '只有成本'], answer: 0, explain: '结果。' }
        ],
        doc: { lead: '这一章讲实战。', sections: [
          { id: 'audit', title: '审计', html: `<p>品牌现状诊断；竞品对标。</p>` },
          { id: 'plan', title: '方案', html: `<p>定位、传播、触点、预算；效果评估。</p>` }
        ], refs: [] } }
    ] },
    { name: '数字营销', chapters: [
      { title: '数字营销概述', brief: '新营销。',
        q: [
          { stem: '数字营销的核心特征是：', options: ['数据驱动、可测量、可互动', '只做广告', '只做电商', '只做内容'], answer: 0, explain: '数据。' },
          { stem: 'AARRR 模型包括：', options: ['获客、激活、留存、变现、推荐', '只有获客', '只有留存', '只有变现'], answer: 0, explain: '海盗指标。' },
          { stem: '与传统营销相比，数字营销的优势是：', options: ['精准与可归因', '成本更低唯一', '覆盖面更广唯一', '无需创意'], answer: 0, explain: '精准。' }
        ],
        doc: { lead: '这一章讲概述。', sections: [
          { id: 'concept', title: '概念', html: `<p>数字营销范畴、AARRR；用户旅程。</p>` },
          { id: 'ecosystem', title: '生态', html: `<p>平台、内容、电商、私域；MarTech。</p>` }
        ], refs: [] } },
      { title: '内容与社交营销', brief: '内容为王。',
        q: [
          { stem: '内容营销的目标是：', options: ['通过有价值内容吸引并转化', '直接推销', '降价', '刷量'], answer: 0, explain: '内容。' },
          { stem: '社交平台选择应考虑：', options: ['目标人群与内容形态匹配', '平台大小唯一', '成本唯一', '热度唯一'], answer: 0, explain: '匹配。' },
          { stem: '种草营销的关键是：', options: ['真实体验与信任背书', '夸大宣传', '刷单', '低价'], answer: 0, explain: '真实。' }
        ],
        doc: { lead: '这一章讲内容。', sections: [
          { id: 'content', title: '内容', html: `<p>内容策略、选题、形式；内容日历。</p>` },
          { id: 'social', title: '社交', html: `<p>KOL/KOC、社群、UGC；种草与拔草。</p>` }
        ], refs: [] } },
      { title: '搜索与电商营销', brief: '被找到与成交。',
        q: [
          { stem: 'SEO 与 SEM 的区别是：', options: ['自然优化 vs 付费广告', '成本', '平台', '效果'], answer: 0, explain: '付费。' },
          { stem: '电商营销的关键指标是：', options: ['流量、转化率、客单价、复购', '只有流量', '只有转化', '只有客单价'], answer: 0, explain: '多指标。' },
          { stem: '详情页优化的重点是：', options: ['卖点清晰、信任元素、行动引导', '文字越多越好', '图片越多越好', '价格最低'], answer: 0, explain: '转化。' }
        ],
        doc: { lead: '这一章讲搜索。', sections: [
          { id: 'search', title: '搜索', html: `<p>关键词、SEO/SEM；落地页优化。</p>` },
          { id: 'ecommerce', title: '电商', html: `<p>平台规则、大促节奏；转化率优化。</p>` }
        ], refs: [] } },
      { title: '私域与用户运营', brief: '留住人。',
        q: [
          { stem: '私域的核心是：', options: ['可重复触达的用户资产', '公域投放', '一次性成交', '价格战'], answer: 0, explain: '私域。' },
          { stem: '用户分层运营的依据是：', options: ['价值与生命周期阶段', '随机', '性别唯一', '地域唯一'], answer: 0, explain: '分层。' },
          { stem: '留存的关键是：', options: ['持续价值与激活机制', '只有优惠', '只有推送', '只有广告'], answer: 0, explain: '价值。' }
        ],
        doc: { lead: '这一章讲私域。', sections: [
          { id: 'private', title: '私域', html: `<p>企微/社群/会员；内容与活动节奏。</p>` },
          { id: 'operation', title: '用户运营', html: `<p>RFM 分层、生命周期；流失预警与召回。</p>` }
        ], refs: [] } },
      { title: '广告投放与优化', brief: '花钱。',
        q: [
          { stem: '信息流广告的核心是：', options: ['定向、创意与出价的组合优化', '只看出价', '只看创意', '只看定向'], answer: 0, explain: '组合。' },
          { stem: 'ROI 与 ROAS 的区别是：', options: ['利润口径 vs 收入口径', '相同', 'ROI 只看收入', 'ROAS 看利润'], answer: 0, explain: '口径。' },
          { stem: 'A/B 测试的作用是：', options: ['比较方案效果并择优', '提高预算', '扩大受众', '降低成本唯一'], answer: 0, explain: 'A/B。' }
        ],
        doc: { lead: '这一章讲投放。', sections: [
          { id: 'ads', title: '投放', html: `<p>渠道选择、定向、出价；素材迭代。</p>` },
          { id: 'optimize', title: '优化', html: `<p>ROI/ROAS、归因模型；A/B 测试。</p>` }
        ], refs: [] } },
      { title: '数据与增长', brief: '用数据。',
        q: [
          { stem: '增长黑客的核心是：', options: ['数据驱动的快速实验', '大规模投放', '降价', '刷单'], answer: 0, explain: '实验。' },
          { stem: '北极星指标的作用是：', options: ['统一团队目标的单一关键指标', '装饰', '考核唯一', '算成本'], answer: 0, explain: '北极星。' },
          { stem: '漏斗分析的价值是：', options: ['定位流失环节', '增加流量', '降低成本', '美化报表'], answer: 0, explain: '漏斗。' }
        ],
        doc: { lead: '这一章讲增长。', sections: [
          { id: 'growth', title: '增长', html: `<p>北极星指标、增长实验；冷启动。</p>` },
          { id: 'analytics', title: '分析', html: `<p>埋点、漏斗、留存曲线；归因与 LTV。</p>` }
        ], refs: [] } },
      { title: '营销自动化与 AI', brief: '更高效。',
        q: [
          { stem: '营销自动化的作用是：', options: ['自动触发个性化触达', '替代创意', '替代定价', '无需数据'], answer: 0, explain: '自动化。' },
          { stem: 'AI 在营销中的应用包括：', options: ['个性化推荐、内容生成、预测', '只有推荐', '只有生成', '只有预测'], answer: 0, explain: '多应用。' },
          { stem: '自动化的风险包括：', options: ['过度打扰、隐私与合规', '成本高', '速度慢', '无风险'], answer: 0, explain: '合规。' }
        ],
        doc: { lead: '这一章讲自动化。', sections: [
          { id: 'automation', title: '自动化', html: `<p>用户旅程编排、触达策略；MA 工具。</p>` },
          { id: 'ai', title: 'AI', html: `<p>推荐、生成、预测；隐私与品牌安全。</p>` }
        ], refs: [] } },
      { title: '数字营销实战', brief: '做方案。',
        q: [
          { stem: '数字营销方案的核心是：', options: ['目标—人群—内容—渠道—预算—指标', '只有预算', '只有渠道', '只有内容'], answer: 0, explain: '结构。' },
          { stem: '投放前应：', options: ['小规模测试并设定基准', '直接大投', '不设目标', '只看创意'], answer: 0, explain: '测试。' },
          { stem: '复盘应关注：', options: ['目标达成、成本效率与可复用经验', '只有花费', '只有曝光', '只有销量'], answer: 0, explain: '复盘。' }
        ],
        doc: { lead: '这一章讲实战。', sections: [
          { id: 'plan', title: '方案', html: `<p>目标与 KPI、人群与内容、渠道组合、预算排期。</p>` },
          { id: 'review', title: '复盘', html: `<p>数据看板、归因复盘；方法论沉淀。</p>` }
        ], refs: [] } }
    ] },
    { name: '渠道管理', chapters: [
      { title: '渠道基础', brief: '通路。',
        q: [
          { stem: '营销渠道的功能包括：', options: ['交易、物流、服务、信息', '只有交易', '只有物流', '只有服务'], answer: 0, explain: '多功能。' },
          { stem: '渠道层级指：', options: ['中间商环节数量', '门店数', '运输距离', '人员数'], answer: 0, explain: '层级。' },
          { stem: '渠道设计的核心是：', options: ['服务产出与成本效率的平衡', '越长越好', '越短越好', '越贵越好'], answer: 0, explain: '平衡。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'function', title: '功能', html: `<p>渠道流、功能与中间商价值。</p>` },
          { id: 'design', title: '设计', html: `<p>层级、密度、服务产出；渠道结构选择。</p>` }
        ], refs: [] } },
      { title: '渠道成员管理', brief: '合作方。',
        q: [
          { stem: '经销商选择的标准包括：', options: ['资金、网络、能力、信誉', '只有资金', '只有网络', '只有信誉'], answer: 0, explain: '多标准。' },
          { stem: '渠道激励的手段包括：', options: ['返利、培训、支持、授权', '只有返利', '只有培训', '只有授权'], answer: 0, explain: '多种。' },
          { stem: '渠道评估的指标包括：', options: ['销量、回款、覆盖、配合度', '只有销量', '只有回款', '只有覆盖'], answer: 0, explain: '多指标。' }
        ],
        doc: { lead: '这一章讲成员。', sections: [
          { id: 'selection', title: '选择', html: `<p>标准与流程；招商与审核。</p>` },
          { id: 'management', title: '管理', html: `<p>激励、培训、评估与淘汰；伙伴关系。</p>` }
        ], refs: [] } },
      { title: '渠道冲突与协调', brief: '打架。',
        q: [
          { stem: '渠道冲突的类型包括：', options: ['水平、垂直、多渠道', '只有水平', '只有垂直', '只有多渠道'], answer: 0, explain: '多类。' },
          { stem: '窜货的危害是：', options: ['破坏价格体系与渠道信心', '提高销量', '增加利润', '无危害'], answer: 0, explain: '窜货。' },
          { stem: '冲突协调的方法包括：', options: ['目标协调、区域划分、价格管控、沟通机制', '只有划分', '只有管控', '无方法'], answer: 0, explain: '多方法。' }
        ],
        doc: { lead: '这一章讲冲突。', sections: [
          { id: 'type', title: '类型', html: `<p>水平、垂直、多渠道冲突；成因。</p>` },
          { id: 'resolve', title: '协调', html: `<p>价格与区域管控、窜货治理；仲裁机制。</p>` }
        ], refs: [] } },
      { title: '零售与连锁', brief: '终端。',
        q: [
          { stem: '零售业成功的关键是：', options: ['选址、品类、体验与效率', '只看选址', '只看价格', '只看规模'], answer: 0, explain: '综合。' },
          { stem: '连锁经营的核心是：', options: ['标准化、统一采购与品牌', '自由经营', '各自定价', '无标准'], answer: 0, explain: '标准化。' },
          { stem: '单店模型的评估指标包括：', options: ['坪效、客流、客单、复购', '只有坪效', '只有客流', '只有客单'], answer: 0, explain: '多指标。' }
        ],
        doc: { lead: '这一章讲零售。', sections: [
          { id: 'retail', title: '零售', html: `<p>业态类型、选址与品类管理；体验设计。</p>` },
          { id: 'chain', title: '连锁', html: `<p>直营与加盟、标准化；单店模型与扩张节奏。</p>` }
        ], refs: [] } },
      { title: '电商与全渠道', brief: '线上线下一体。',
        q: [
          { stem: '全渠道的核心是：', options: ['线上线下商品、库存、会员、体验打通', '只做线上', '只做线下', '只做批发'], answer: 0, explain: '打通。' },
          { stem: 'O2O 模式的价值是：', options: ['线上下单线下履约/体验', '增加库存', '减少门店', '提高价格'], answer: 0, explain: 'O2O。' },
          { stem: '平台电商与自营电商的区别是：', options: ['是否自营商品与履约', '规模', '价格', '流量'], answer: 0, explain: '自营。' }
        ],
        doc: { lead: '这一章讲电商。', sections: [
          { id: 'omni', title: '全渠道', html: `<p>库存共享、会员打通、门店发货；履约设计。</p>` },
          { id: 'platform', title: '平台与自营', html: `<p>平台规则、自营供应链；直播与内容电商。</p>` }
        ], refs: [] } },
      { title: '物流与供应链', brief: '送得到。',
        q: [
          { stem: '物流服务的核心指标是：', options: ['时效、成本、完好率', '只有时效', '只有成本', '只有完好率'], answer: 0, explain: '多指标。' },
          { stem: '库存布局的目标是：', options: ['平衡服务水平与库存成本', '库存越多越好', '库存越少越好', '只做中心仓'], answer: 0, explain: '平衡。' },
          { stem: '逆向物流指：', options: ['退货、回收与维修', '正向配送', '采购', '生产'], answer: 0, explain: '逆向。' }
        ],
        doc: { lead: '这一章讲物流。', sections: [
          { id: 'logistics', title: '物流', html: `<p>仓配网络、时效与成本；第三方物流。</p>` },
          { id: 'reverse', title: '逆向与供应链', html: `<p>退货处理、回收；供应链协同与韧性。</p>` }
        ], refs: [] } },
      { title: '渠道数字化', brief: '用数据管渠道。',
        q: [
          { stem: '渠道数字化的价值是：', options: ['透明化、精细化与快速响应', '装饰', '增加层级', '提高价格'], answer: 0, explain: '透明。' },
          { stem: 'DMS/CRM 的作用是：', options: ['管理经销商与终端数据', '生产', '采购', '财务'], answer: 0, explain: '系统。' },
          { stem: '终端动销数据的意义是：', options: ['判断真实需求与库存健康', '只看进货', '只看回款', '无意义'], answer: 0, explain: '动销。' }
        ],
        doc: { lead: '这一章讲数字化。', sections: [
          { id: 'system', title: '系统', html: `<p>DMS、CRM、POS 数据；一物一码。</p>` },
          { id: 'insight', title: '洞察', html: `<p>动销与库存分析、窜货识别；渠道画像。</p>` }
        ], refs: [] } },
      { title: '渠道实战', brief: '做方案。',
        q: [
          { stem: '渠道方案的核心是：', options: ['结构、成员、政策、支持与考核', '只有政策', '只有成员', '只有考核'], answer: 0, explain: '综合。' },
          { stem: '渠道政策应：', options: ['激励相容、可执行、可考核', '越复杂越好', '只看返利', '一刀切'], answer: 0, explain: '政策。' },
          { stem: '渠道复盘应：', options: ['看覆盖、动销、库存与利润', '只有销量', '只有回款', '只有利润'], answer: 0, explain: '复盘。' }
        ],
        doc: { lead: '这一章讲实战。', sections: [
          { id: 'plan', title: '方案', html: `<p>渠道结构、招商、政策、支持、考核。</p>` },
          { id: 'review', title: '复盘', html: `<p>覆盖与动销、库存周转；渠道优化。</p>` }
        ], refs: [] } }
    ] },
    { name: '销售管理', chapters: [
      { title: '销售管理概述', brief: '管销售。',
        q: [
          { stem: '销售管理的核心是：', options: ['通过团队实现销售目标', '个人卖货', '只做考核', '只做培训'], answer: 0, explain: '团队。' },
          { stem: '销售流程的典型阶段是：', options: ['线索—商机—方案—谈判—成交—回款', '只有成交', '只有谈判', '只有回款'], answer: 0, explain: '流程。' },
          { stem: '销售组织的形式包括：', options: ['区域型、产品型、客户型、矩阵型', '只有区域', '只有产品', '只有客户'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲概述。', sections: [
          { id: 'process', title: '流程', html: `<p>销售漏斗、阶段定义与转化；销售周期。</p>` },
          { id: 'organization', title: '组织', html: `<p>区域/产品/客户型；内外勤协同。</p>` }
        ], refs: [] } },
      { title: '销售计划与预测', brief: '定目标。',
        q: [
          { stem: '销售目标分解的维度包括：', options: ['时间、区域、产品、人员', '只有时间', '只有区域', '只有人员'], answer: 0, explain: '多维度。' },
          { stem: '销售预测的方法包括：', options: ['自下而上、自上而下、历史趋势', '只有自下而上', '只有自上而下', '只有趋势'], answer: 0, explain: '多种。' },
          { stem: '目标设定的 SMART 原则包括：', options: ['具体、可衡量、可达成、相关、有时限', '只有具体', '只有可衡量', '只要数字'], answer: 0, explain: 'SMART。' }
        ],
        doc: { lead: '这一章讲计划。', sections: [
          { id: 'target', title: '目标', html: `<p>目标分解、配额分配；挑战性与可行性。</p>` },
          { id: 'forecast', title: '预测', html: `<p>漏斗加权、历史趋势；预测准确率管理。</p>` }
        ], refs: [] } },
      { title: '客户开发与拜访', brief: '找客户。',
        q: [
          { stem: '客户开发的核心是：', options: ['找到有需求、有预算、有决策权的客户', '广撒网', '只靠广告', '只靠转介绍'], answer: 0, explain: '目标客户。' },
          { stem: '有效拜访的关键是：', options: ['明确目标、准备充分、挖掘需求', '闲聊', '只介绍产品', '只报价'], answer: 0, explain: '拜访。' },
          { stem: '需求挖掘的常用方法是：', options: ['提问（SPIN）与倾听', '只讲产品', '只报价', '只谈优惠'], answer: 0, explain: 'SPIN。' }
        ],
        doc: { lead: '这一章讲客户。', sections: [
          { id: 'prospect', title: '开发', html: `<p>客户画像、线索来源；资格判断。</p>` },
          { id: 'visit', title: '拜访', html: `<p>拜访准备、需求挖掘（SPIN）、价值呈现。</p>` }
        ], refs: [] } },
      { title: '谈判与成交', brief: '拿单。',
        q: [
          { stem: '谈判中创造双赢的关键是：', options: ['扩大整体利益而非只分蛋糕', '强硬', '让步', '拖延'], answer: 0, explain: '双赢。' },
          { stem: '异议处理的步骤是：', options: ['倾听—认同—澄清—回应', '直接反驳', '回避', '降价'], answer: 0, explain: '处理。' },
          { stem: '成交信号的识别包括：', options: ['询问细节、价格、交付', '沉默', '离开', '拒绝'], answer: 0, explain: '信号。' }
        ],
        doc: { lead: '这一章讲谈判。', sections: [
          { id: 'negotiation', title: '谈判', html: `<p>BATNA、让步策略；价格与条款。</p>` },
          { id: 'closing', title: '成交', html: `<p>异议处理、成交技巧；合同与回款。</p>` }
        ], refs: [] } },
      { title: '客户关系管理', brief: '留住客户。',
        q: [
          { stem: 'CRM 的核心是：', options: ['客户数据与关系经营', '只存电话', '只做报表', '只做考核'], answer: 0, explain: 'CRM。' },
          { stem: '客户分层的常用方法是：', options: ['RFM 与价值分层', '随机', '按地区唯一', '按规模唯一'], answer: 0, explain: 'RFM。' },
          { stem: '大客户管理的关键是：', options: ['深度理解需求、多层级关系', '只靠价格', '只靠回扣', '只靠广告'], answer: 0, explain: 'KA。' }
        ],
        doc: { lead: '这一章讲 CRM。', sections: [
          { id: 'crm', title: 'CRM', html: `<p>客户档案、互动记录；RFM 分层与策略。</p>` },
          { id: 'ka', title: '大客户', html: `<p>客户规划、关系地图；续约与增购。</p>` }
        ], refs: [] } },
      { title: '销售团队管理', brief: '带队伍。',
        q: [
          { stem: '销售人员的激励机制常见形式：', options: ['底薪+提成+奖金', '只有底薪', '只有提成', '只有奖金'], answer: 0, explain: '组合。' },
          { stem: '销售培训的重点是：', options: ['产品知识、销售技能与心态', '只有产品', '只有技能', '只有心态'], answer: 0, explain: '综合。' },
          { stem: '销售例会的作用是：', options: ['复盘、辅导与目标对齐', '打卡', '批评', '形式'], answer: 0, explain: '复盘。' }
        ],
        doc: { lead: '这一章讲团队。', sections: [
          { id: 'incentive', title: '激励', html: `<p>薪酬结构、提成设计；竞赛与认可。</p>` },
          { id: 'coaching', title: '辅导', html: `<p>陪访、复盘、例会；新人成长路径。</p>` }
        ], refs: [] } },
      { title: '销售绩效与数据', brief: '看数据。',
        q: [
          { stem: '销售绩效指标包括：', options: ['销售额、毛利、回款、客户数', '只有销售额', '只有毛利', '只有回款'], answer: 0, explain: '多指标。' },
          { stem: '销售漏斗健康度的判断依据：', options: ['各阶段转化率与周期', '只看线索数', '只看成交数', '只看回款'], answer: 0, explain: '漏斗。' },
          { stem: '绩效面谈的重点是：', options: ['事实、原因与改进计划', '只打分', '只批评', '只表扬'], answer: 0, explain: '面谈。' }
        ],
        doc: { lead: '这一章讲绩效。', sections: [
          { id: 'kpi', title: '指标', html: `<p>过程与结果指标；漏斗转化率。</p>` },
          { id: 'review', title: '面谈', html: `<p>数据回顾、原因分析、改进计划；淘汰机制。</p>` }
        ], refs: [] } },
      { title: '销售实战', brief: '练一遍。',
        q: [
          { stem: '销售角色扮演的价值是：', options: ['练习话术与应对异议', '装饰', '考核唯一', '算业绩'], answer: 0, explain: '演练。' },
          { stem: '客户方案的核心是：', options: ['针对需求的解决方案与价值量化', '产品参数', '价格', '公司介绍'], answer: 0, explain: '方案。' },
          { stem: '销售复盘应：', options: ['看过程指标并找到可复制动作', '只看结果', '只看运气', '不复盘'], answer: 0, explain: '复盘。' }
        ],
        doc: { lead: '这一章讲实战。', sections: [
          { id: 'roleplay', title: '演练', html: `<p>开场、需求、方案、异议、成交；录像复盘。</p>` },
          { id: 'case', title: '案例', html: `<p>大单拆解；可复制的方法论。</p>` }
        ], refs: [] } }
    ] },

    /* ---- 大四 ---- */
    { name: '毕业论文', chapters: [
      { title: '选题与文献', brief: '研究什么。',
        q: [
          { stem: '营销论文选题关键是：', options: ['问题明确、数据可得、方法可行', '题目宏大', '追热点', '导师偏好'], answer: 0, explain: '可行。' },
          { stem: '文献综述的作用是：', options: ['梳理脉络并找到缺口', '凑字数', '装饰', '展示'], answer: 0, explain: '缺口。' },
          { stem: '研究问题应：', options: ['具体、可回答、有价值', '越宽越好', '越抽象越好', '只谈现象'], answer: 0, explain: '具体。' }
        ],
        doc: { lead: '这一章讲开头。', sections: [
          { id: 'topic', title: '选题', html: `<p>消费者行为、品牌、数字营销；数据来源。</p>` },
          { id: 'review', title: '文献', html: `<p>检索与综述；研究假设。</p>` }
        ], refs: [] } },
      { title: '研究方法与数据', brief: '怎么做。',
        q: [
          { stem: '问卷法的关键是：', options: ['量表信效度与样本代表性', '题目多', '样本大唯一', '开放题多'], answer: 0, explain: '信效度。' },
          { stem: '实验法的作用是：', options: ['检验因果关系', '描述现状', '探索问题', '降成本'], answer: 0, explain: '因果。' },
          { stem: '数据分析常用：', options: ['回归、方差分析、结构方程', '只有回归', '只有方差', '只有结构方程'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'design', title: '设计', html: `<p>问卷、实验、案例；抽样与样本量。</p>` },
          { id: 'analysis', title: '分析', html: `<p>信效度、回归、中介与调节；SPSS/SmartPLS。</p>` }
        ], refs: [] } },
      { title: '写作与规范', brief: '写清楚。',
        q: [
          { stem: '论文结构是：', options: ['引言—文献—方法—结果—讨论—结论', '总—分—总', '背景—致谢', '问答'], answer: 0, explain: '结构。' },
          { stem: '讨论部分应：', options: ['解释结果、对比文献、说明局限', '只重复结果', '只写结论', '省略'], answer: 0, explain: '讨论。' },
          { stem: '引用规范的作用是：', options: ['可追溯与诚信', '凑数', '装饰', '增加篇幅'], answer: 0, explain: '规范。' }
        ],
        doc: { lead: '这一章讲写作。', sections: [
          { id: 'structure', title: '结构', html: `<p>摘要、引言、文献、方法、结果、讨论。</p>` },
          { id: 'tables', title: '图表', html: `<p>三线表、变量定义；引用格式。</p>` }
        ], refs: [] } },
      { title: '答辩', brief: '讲清楚。',
        q: [
          { stem: '答辩陈述要点：', options: ['问题、方法、结果、局限', '致谢', '篇幅', '格式'], answer: 0, explain: '四点。' },
          { stem: '被质疑时应：', options: ['承认局限并说明理由', '争辩', '回避', '改口'], answer: 0, explain: '诚恳。' },
          { stem: '答辩前最该准备：', options: ['熟悉数据与结论依据', '背稿', '模板', '服装'], answer: 0, explain: '依据。' }
        ],
        doc: { lead: '这一章讲答辩。', sections: [
          { id: 'talk', title: '陈述', html: `<p>8–10 分钟：问题—方法—结果—局限。</p>` },
          { id: 'qa', title: '问答', html: `<p>准备方法与数据问题；不会就说思路。</p>` }
        ], refs: [] } }
    ] },
    { name: '专业实习', chapters: [
      { title: '岗位与角色', brief: '企业与岗位。',
        q: [
          { stem: '营销实习的常见岗位不包括：', options: ['市场专员', '品牌/内容', '销售/运营', '外科医生'], answer: 3, explain: '无关。' },
          { stem: '选择实习最该看：', options: ['能否参与真实项目', '名气', '工资', '通勤'], answer: 0, explain: '实战。' },
          { stem: '实习生上手最快是：', options: ['从具体执行做起并复盘', '只观察', '等安排', '只写文档'], answer: 0, explain: '实战。' }
        ],
        doc: { lead: '这一章讲岗位。', sections: [
          { id: 'roles', title: '岗位', html: `<p>市场、品牌、电商、销售、用户运营；技能。</p>` },
          { id: 'onboard', title: '上手', html: `<p>了解产品与用户、明确任务；周报。</p>` }
        ], refs: [] } },
      { title: '营销执行', brief: '做事。',
        q: [
          { stem: '活动执行的关键是：', options: ['目标、排期、物料与复盘', '只有创意', '只有预算', '只有渠道'], answer: 0, explain: '执行。' },
          { stem: '素材测试的作用是：', options: ['找出高转化创意', '装饰', '增加成本', '无作用'], answer: 0, explain: '测试。' },
          { stem: '执行中的风险包括：', options: ['合规、预算超支、节点延误', '只有预算', '只有合规', '无风险'], answer: 0, explain: '多风险。' }
        ],
        doc: { lead: '这一章讲执行。', sections: [
          { id: 'campaign', title: '活动', html: `<p>目标与预算、物料与排期；跨部门协同。</p>` },
          { id: 'risk', title: '风险', html: `<p>合规审查、应急方案；数据回收。</p>` }
        ], refs: [] } },
      { title: '数据与复盘', brief: '看效果。',
        q: [
          { stem: '营销效果评估的核心指标：', options: ['获客成本、转化率、ROI', '只有曝光', '只有点击', '只有销量'], answer: 0, explain: '多指标。' },
          { stem: '复盘的正确做法是：', options: ['对照目标、找差距、提炼可复用动作', '只讲成绩', '只讲问题', '不复盘'], answer: 0, explain: '复盘。' },
          { stem: '数据口径不一致的后果是：', options: ['结论失真、决策错误', '无影响', '提高效率', '美化报表'], answer: 0, explain: '口径。' }
        ],
        doc: { lead: '这一章讲复盘。', sections: [
          { id: 'metrics', title: '指标', html: `<p>漏斗与 ROI；数据看板。</p>` },
          { id: 'review', title: '复盘', html: `<p>目标对照、归因、经验沉淀。</p>` }
        ], refs: [] } },
      { title: '实习复盘', brief: '留下什么。',
        q: [
          { stem: '实习应留下的成果是：', options: ['项目成果、数据与作品', '工牌', '照片', '评语'], answer: 0, explain: '成果。' },
          { stem: '实习日志推荐写法：', options: ['问题—做法—结果—反思', '流水账', '只写结论', '只写感受'], answer: 0, explain: '结构化。' },
          { stem: '面试讲实习最佳结构：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'output', title: '成果', html: `<p>策划案、投放数据、内容作品；作品集。</p>` },
          { id: 'review', title: '复盘', html: `<p>每周五行；讲清你的贡献与学到的东西。</p>` }
        ], refs: [] } }
    ] },
    { name: '考研与求职', chapters: [
      { title: '考研方向', brief: '营销与管理。',
        q: [
          { stem: '市场营销考研的常见方向是：', options: ['企业管理（营销方向）、市场营销、MBA', '只有市场营销', '只有 MBA', '只有学硕'], answer: 0, explain: '多方向。' },
          { stem: '管理学专业课通常包括：', options: ['管理学原理 + 营销/经济学', '只有数学', '只有英语', '只有政治'], answer: 0, explain: '综合。' },
          { stem: '择校最应考虑：', options: ['方向、导师与就业资源', '城市', '学费', '宿舍'], answer: 0, explain: '匹配。' }
        ],
        doc: { lead: '这一章讲方向。', sections: [
          { id: 'paths', title: '方向', html: `<p>企业管理、市场营销、MBA/MPAcc；学硕与专硕。</p>` },
          { id: 'subjects', title: '科目', html: `<p>政治、英语、数学三/396、专业课（管理学/营销）。</p>` }
        ], refs: [] } },
      { title: '专业课复习', brief: '框架与案例。',
        q: [
          { stem: '营销复习主线是：', options: ['STP—4P—品牌—数字营销', '只背定义', '只做案例', '只看真题'], answer: 0, explain: '主线。' },
          { stem: '名词解释答题结构：', options: ['定义、要点、意义', '只有定义', '只有意义', '感想'], answer: 0, explain: '三段。' },
          { stem: '案例题关键：', options: ['理论 + 材料 + 逻辑', '篇幅', '名言', '字迹'], answer: 0, explain: '结合。' }
        ],
        doc: { lead: '这一章讲复习。', sections: [
          { id: 'framework', title: '框架', html: `<p>STP、4P、品牌与消费者行为；思维导图。</p>` },
          { id: 'writing', title: '答题', html: `<p>名词三段式、论述分点、案例结合材料。</p>` }
        ], refs: [] } },
      { title: '求职方向', brief: '品牌、运营、销售。',
        q: [
          { stem: '营销毕业生的常见去向不包括：', options: ['品牌/市场', '电商运营', '销售/大客户', '外科医生'], answer: 3, explain: '专业限制。' },
          { stem: '品牌岗位看重：', options: ['创意、内容与数据能力', '只有创意', '只有数据', '只有英语'], answer: 0, explain: '复合。' },
          { stem: '求职最加分的材料：', options: ['策划案与投放数据', '证书数量', '成绩单', '社团'], answer: 0, explain: '作品。' }
        ],
        doc: { lead: '这一章讲就业。', sections: [
          { id: 'paths', title: '路径', html: `<p>品牌、内容、电商、用户运营、销售、咨询。</p>` },
          { id: 'skills', title: '能力', html: `<p>策划与文案、数据分析、投放；作品集。</p>` }
        ], refs: [] } },
      { title: '面试', brief: '展示能力。',
        q: [
          { stem: '营销面试常考：', options: ['案例分析、数据解读与创意', '只有创意', '只有数据', '只有英语'], answer: 0, explain: '综合。' },
          { stem: '行为面试常用：', options: ['STAR 结构', '自由发挥', '只讲结果', '只讲感受'], answer: 0, explain: 'STAR。' },
          { stem: '被问到不会的问题应：', options: ['说明思路并诚实承认', '编造', '沉默', '转移话题'], answer: 0, explain: '诚实。' }
        ],
        doc: { lead: '这一章讲面试。', sections: [
          { id: 'case', title: '案例', html: `<p>增长方案、活动策划；结构化拆解。</p>` },
          { id: 'behavior', title: '行为', html: `<p>STAR、跨部门协作案例；反问。</p>` }
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
