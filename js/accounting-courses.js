/* ==========================================================
   accounting-courses.js · 会计学：12 门课（8/4）= 84 关
   ========================================================== */

(function () {
  var MAJOR = 'management-会计学';
  var TITLES = stageTitlesOf('management');

  var COURSES = [
    { name: '会计学原理', chapters: [
      { title: '会计基本概念', brief: '会计是什么。',
        q: [
          { stem: '会计的两大基本职能是：', options: ['核算与监督', '预测与决策', '计划与控制', '分析与考核'], answer: 0, explain: '两大职能。' },
          { stem: '会计基本假设包括：', options: ['会计主体、持续经营、会计分期、货币计量', '只有主体', '只有分期', '只有货币'], answer: 0, explain: '四假设。' },
          { stem: '会计信息质量要求中最重要的通常是：', options: ['可靠性', '及时性', '重要性', '谨慎性'], answer: 0, explain: '可靠性。' }
        ],
        doc: { lead: '这一章讲概念。', sections: [
          { id: 'function', title: '职能与假设', html: `<p>核算与监督；四大假设；会计基础（权责发生制）。</p>` },
          { id: 'quality', title: '信息质量', html: `<p>可靠性、相关性、可比性、及时性、重要性、谨慎性等。</p>` }
        ], refs: [] } },
      { title: '会计要素与等式', brief: '六个要素。',
        q: [
          { stem: '反映财务状况的要素是：', options: ['资产、负债、所有者权益', '收入、费用、利润', '资产、收入、利润', '负债、费用、利润'], answer: 0, explain: '时点要素。' },
          { stem: '会计扩展等式是：', options: ['资产 = 负债 + 所有者权益 + (收入 − 费用)', '资产 = 负债', '收入 = 费用', '资产 = 权益 − 负债'], answer: 0, explain: '扩展。' },
          { stem: '资产的定义强调：', options: ['由过去交易形成、企业控制、预期带来经济利益', '有实物形态', '有发票', '有现金'], answer: 0, explain: '资产定义。' }
        ],
        doc: { lead: '这一章讲要素。', sections: [
          { id: 'elements', title: '要素', html: `<p>资产、负债、所有者权益、收入、费用、利润；确认条件。</p>` },
          { id: 'equation', title: '等式', html: `<p>静态与动态等式；经济业务对等式的影响。</p>` }
        ], refs: [] } },
      { title: '账户与复式记账', brief: '怎么记。',
        q: [
          { stem: '复式记账的记账规则是：', options: ['有借必有贷、借贷必相等', '只记借方', '只记贷方', '单式记录'], answer: 0, explain: '规则。' },
          { stem: '负债类账户增加记：', options: ['贷方', '借方', '任意', '不记'], answer: 0, explain: '贷方。' },
          { stem: '试算平衡包括：', options: ['发生额平衡与余额平衡', '只有发生额', '只有余额', '无平衡'], answer: 0, explain: '两种。' }
        ],
        doc: { lead: '这一章讲记账。', sections: [
          { id: 'account', title: '账户', html: `<p>账户结构、借贷方向；总分类账与明细账。</p>` },
          { id: 'entry', title: '分录', html: `<p>会计分录、过账、试算平衡；错账更正。</p>` }
        ], refs: [] } },
      { title: '主要经济业务核算', brief: '全流程。',
        q: [
          { stem: '采购业务核算涉及的账户包括：', options: ['原材料、应付账款、应交税费', '只有原材料', '只有应付账款', '只有税费'], answer: 0, explain: '多账户。' },
          { stem: '销售业务确认收入的依据是：', options: ['控制权转移（新收入准则）', '收到现金', '签订合同', '开票'], answer: 0, explain: '控制权。' },
          { stem: '计提折旧的会计分录是：', options: ['借：制造费用/管理费用 贷：累计折旧', '借：累计折旧', '借：固定资产', '借：现金'], answer: 0, explain: '折旧。' }
        ],
        doc: { lead: '这一章讲业务。', sections: [
          { id: 'operating', title: '经营业务', html: `<p>采购、生产、销售、费用；往来核算。</p>` },
          { id: 'period', title: '期末事项', html: `<p>折旧、摊销、计提、结转；账户结转流程。</p>` }
        ], refs: [] } },
      { title: '凭证账簿与核算形式', brief: '流程。',
        q: [
          { stem: '记账凭证按用途分为：', options: ['收款、付款、转账凭证', '只有收款', '只有付款', '只有转账'], answer: 0, explain: '三类。' },
          { stem: '总账与明细账的关系是：', options: ['平行登记、金额相等', '无关系', '只需登记其一', '金额可不等'], answer: 0, explain: '平行登记。' },
          { stem: '记账凭证核算形式的优点是：', options: ['简单直观、适合小企业', '效率最高', '适合大企业', '无需账簿'], answer: 0, explain: '简单。' }
        ],
        doc: { lead: '这一章讲流程。', sections: [
          { id: 'voucher', title: '凭证', html: `<p>原始凭证、记账凭证；审核与传递。</p>` },
          { id: 'book', title: '账簿与形式', html: `<p>日记账、分类账；记账凭证、汇总记账凭证、科目汇总表核算形式。</p>` }
        ], refs: [] } },
      { title: '期末处理与报表', brief: '出报表。',
        q: [
          { stem: '资产负债表的结构是：', options: ['账户式（左资产右负债权益）', '报告式唯一', '单步式', '多步式'], answer: 0, explain: '账户式。' },
          { stem: '利润表的编制基础是：', options: ['收入 − 费用 = 利润', '资产 = 负债', '现金流入 − 流出', '权益变动'], answer: 0, explain: '利润表。' },
          { stem: '现金流量表的三类是：', options: ['经营、投资、筹资', '收入、费用、利润', '资产、负债、权益', '短期、长期、中期'], answer: 0, explain: '三类。' }
        ],
        doc: { lead: '这一章讲报表。', sections: [
          { id: 'closing', title: '结账', html: `<p>结转损益、计提减值；本年利润结转。</p>` },
          { id: 'statement', title: '报表', html: `<p>资产负债表、利润表、现金流量表；勾稽关系。</p>` }
        ], refs: [] } },
      { title: '报表分析基础', brief: '看懂报表。',
        q: [
          { stem: '流动比率 = ', options: ['流动资产 / 流动负债', '流动负债 / 流动资产', '资产 / 负债', '利润 / 收入'], answer: 0, explain: '流动比率。' },
          { stem: '资产负债率衡量：', options: ['长期偿债能力与财务风险', '盈利能力', '营运能力', '成长能力'], answer: 0, explain: '偿债。' },
          { stem: '净利润与经营现金流的差异可能来自：', options: ['应收应付与折旧', '只有折旧', '只有应收', '无差异'], answer: 0, explain: '应计。' }
        ],
        doc: { lead: '这一章讲分析。', sections: [
          { id: 'ratio', title: '比率', html: `<p>偿债、营运、盈利指标；杜邦分析。</p>` },
          { id: 'quality', title: '质量', html: `<p>利润含金量、现金流匹配；财务舞弊信号。</p>` }
        ], refs: [] } },
      { title: '会计实训', brief: '做账。',
        q: [
          { stem: '手工做账的第一步是：', options: ['建账、设科目、录期初', '填凭证', '编报表', '结账'], answer: 0, explain: '建账。' },
          { stem: '凭证审核内容包括：', options: ['真实性、合法性、完整性、正确性', '只有真实性', '只有合法性', '只有完整性'], answer: 0, explain: '审核。' },
          { stem: '实训应完成：', options: ['凭证—账簿—报表一整套', '只有凭证', '只有账簿', '只有报表'], answer: 0, explain: '一整套。' }
        ],
        doc: { lead: '这一章讲实训。', sections: [
          { id: 'setup', title: '建账', html: `<p>科目表、期初余额；凭证填制与审核。</p>` },
          { id: 'finish', title: '出表', html: `<p>登账、对账、结账；报表编制与装订。</p>` }
        ], refs: [] } }
    ] },
    { name: '微观经济学', chapters: [
      { title: '供求与弹性', brief: '价格机制。',
        q: [
          { stem: '需求定律表明：', options: ['价格上升需求量下降', '价格上升需求上升', '无关', '成正比'], answer: 0, explain: '需求定律。' },
          { stem: '均衡价格由：', options: ['供给与需求共同决定', '政府决定', '厂商决定', '消费者决定'], answer: 0, explain: '供求。' },
          { stem: '需求富有弹性时降价会使总收入：', options: ['增加', '减少', '不变', '不确定'], answer: 0, explain: '弹性。' }
        ],
        doc: { lead: '这一章讲供求。', sections: [
          { id: 'demand', title: '供求', html: `<p>曲线、影响因素；均衡及其变动。</p>` },
          { id: 'elasticity', title: '弹性', html: `<p>价格弹性、收入弹性；与收入的关系。</p>` }
        ], refs: [] } },
      { title: '消费者行为', brief: '选择。',
        q: [
          { stem: '边际效用递减意味着：', options: ['新增消费带来的效用下降', '总效用下降', '价格下降', '收入下降'], answer: 0, explain: '递减。' },
          { stem: '消费者均衡条件是：', options: ['MU/P 相等', '总效用最大唯一', '价格相等', '收入花完'], answer: 0, explain: '均衡。' },
          { stem: '替代效应与收入效应：', options: ['共同决定需求曲线斜率', '只有替代效应', '只有收入效应', '无关'], answer: 0, explain: '两种效应。' }
        ],
        doc: { lead: '这一章讲消费。', sections: [
          { id: 'utility', title: '效用', html: `<p>总效用与边际效用；消费者剩余。</p>` },
          { id: 'choice', title: '选择', html: `<p>无差异曲线、预算约束；替代与收入效应。</p>` }
        ], refs: [] } },
      { title: '生产与成本', brief: '供给背后。',
        q: [
          { stem: '边际报酬递减的原因是：', options: ['固定要素制约', '技术退步', '价格上升', '规模过大'], answer: 0, explain: '固定要素。' },
          { stem: '短期成本包括：', options: ['固定成本与可变成本', '只有固定', '只有可变', '无固定'], answer: 0, explain: '两类。' },
          { stem: '边际成本与平均成本的关系：', options: ['MC 穿过 AC 最低点', 'MC 总高于 AC', 'AC 穿过 MC 最低点', '无关'], answer: 0, explain: '交点。' }
        ],
        doc: { lead: '这一章讲成本。', sections: [
          { id: 'production', title: '生产', html: `<p>生产函数、边际报酬；规模经济。</p>` },
          { id: 'cost', title: '成本', html: `<p>短期成本曲线、长期成本；成本函数。</p>` }
        ], refs: [] } },
      { title: '市场结构', brief: '竞争形态。',
        q: [
          { stem: '完全竞争厂商是：', options: ['价格接受者', '价格制定者', '垄断者', '寡头'], answer: 0, explain: '接受者。' },
          { stem: '垄断厂商利润最大化条件是：', options: ['MR = MC', 'P = MC', 'P = AC', 'MR = 0'], answer: 0, explain: 'MR=MC。' },
          { stem: '垄断竞争的特点是：', options: ['产品有差异、厂商众多', '只有一家', '同质产品', '壁垒高'], answer: 0, explain: '差异。' }
        ],
        doc: { lead: '这一章讲市场。', sections: [
          { id: 'perfect', title: '完全竞争', html: `<p>短期与长期均衡；效率。</p>` },
          { id: 'imperfect', title: '不完全竞争', html: `<p>垄断、垄断竞争、寡头；定价与福利损失。</p>` }
        ], refs: [] } },
      { title: '要素市场', brief: '分配。',
        q: [
          { stem: '劳动需求是：', options: ['派生需求', '最终需求', '政府需求', '无弹性'], answer: 0, explain: '派生。' },
          { stem: '工资由：', options: ['劳动供求决定', '政府决定', '厂商单方决定', '工会单方决定'], answer: 0, explain: '供求。' },
          { stem: '资本的价格是：', options: ['利息', '工资', '地租', '利润'], answer: 0, explain: '利息。' }
        ],
        doc: { lead: '这一章讲要素。', sections: [
          { id: 'factor', title: '要素需求', html: `<p>边际产品价值；劳动、资本、土地市场。</p>` },
          { id: 'distribution', title: '分配', html: `<p>基尼系数、洛伦兹曲线；再分配。</p>` }
        ], refs: [] } },
      { title: '市场失灵', brief: '政府角色。',
        q: [
          { stem: '外部性导致：', options: ['资源配置偏离最优', '价格上升', '无影响', '效率提高'], answer: 0, explain: '外部性。' },
          { stem: '公共物品的特点：', options: ['非竞争性、非排他性', '竞争性', '排他性', '私有'], answer: 0, explain: '公共。' },
          { stem: '解决外部性的方法包括：', options: ['征税补贴、产权界定、管制', '只有征税', '只有管制', '无方法'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲失灵。', sections: [
          { id: 'externality', title: '外部性', html: `<p>正负外部性、庇古税、科斯定理。</p>` },
          { id: 'public', title: '公共品与信息', html: `<p>公共物品、公地悲剧；信息不对称。</p>` }
        ], refs: [] } },
      { title: '博弈与信息', brief: '互动。',
        q: [
          { stem: '纳什均衡指：', options: ['无人愿单方面改变策略', '总体最优', '收益最大', '零和'], answer: 0, explain: '纳什。' },
          { stem: '逆向选择发生在：', options: ['交易前信息不对称', '交易后', '信息完全', '无交易'], answer: 0, explain: '逆向选择。' },
          { stem: '道德风险发生在：', options: ['交易后行为不可观测', '交易前', '信息完全', '无合同'], answer: 0, explain: '道德风险。' }
        ],
        doc: { lead: '这一章讲博弈。', sections: [
          { id: 'nash', title: '纳什均衡', html: `<p>占优策略、囚徒困境；重复博弈。</p>` },
          { id: 'information', title: '信息不对称', html: `<p>逆向选择、道德风险；信号与筛选。</p>` }
        ], refs: [] } },
      { title: '微观应用', brief: '用起来。',
        q: [
          { stem: '企业定价可利用：', options: ['需求弹性差异（价格歧视）', '成本唯一', '只看竞争', '只看政策'], answer: 0, explain: '歧视。' },
          { stem: '成本领先战略的经济学基础是：', options: ['规模经济与经验曲线', '涨价', '差异化', '垄断'], answer: 0, explain: '规模。' },
          { stem: '微观分析对会计的意义：', options: ['理解成本性态与决策', '替代会计', '只做报表', '无意义'], answer: 0, explain: '成本。' }
        ],
        doc: { lead: '这一章讲应用。', sections: [
          { id: 'pricing', title: '定价', html: `<p>价格歧视、捆绑；平台与双边市场。</p>` },
          { id: 'accounting', title: '与会计的联系', html: `<p>成本性态、本量利；决策相关性。</p>` }
        ], refs: [] } }
    ] },
    { name: '管理学原理', chapters: [
      { title: '管理与管理者', brief: '基本概念。',
        q: [
          { stem: '管理四职能是：', options: ['计划、组织、领导、控制', '计划、执行、检查、改进', '决策、沟通、激励、创新', '生产、营销、财务、人事'], answer: 0, explain: '四职能。' },
          { stem: '管理者角色中“信息传递者”属于：', options: ['明茨伯格角色理论', '卡茨技能理论', '马斯洛需求', '赫茨伯格双因素'], answer: 0, explain: '明茨伯格。' },
          { stem: '效率与效果的关系是：', options: ['好方式做事 vs 做正确的事', '相同', '互斥', '无关'], answer: 0, explain: '两者。' }
        ],
        doc: { lead: '这一章讲概念。', sections: [
          { id: 'function', title: '职能', html: `<p>计划、组织、领导、控制；效率与效果。</p>` },
          { id: 'role', title: '角色技能', html: `<p>明茨伯格十角色；卡茨三技能。</p>` }
        ], refs: [] } },
      { title: '管理思想演进', brief: '历史。',
        q: [
          { stem: '科学管理的代表人物是：', options: ['泰勒', '梅奥', '法约尔', '韦伯'], answer: 0, explain: '泰勒。' },
          { stem: '霍桑实验的结论是：', options: ['人是社会人', '经济人', '技术决定', '制度万能'], answer: 0, explain: '霍桑。' },
          { stem: '权变理论认为：', options: ['不存在普适最佳管理方式', '存在普适原则', '只看制度', '只看文化'], answer: 0, explain: '权变。' }
        ],
        doc: { lead: '这一章讲历史。', sections: [
          { id: 'classical', title: '古典', html: `<p>泰勒、法约尔、韦伯。</p>` },
          { id: 'modern', title: '现代', html: `<p>行为科学、系统与权变；学习型组织。</p>` }
        ], refs: [] } },
      { title: '计划与决策', brief: '定方向。',
        q: [
          { stem: '计划的落脚点是：', options: ['目标与行动方案', '预算', '人员', '考核'], answer: 0, explain: '目标。' },
          { stem: '有限理性决策强调：', options: ['信息与认知受限、满意即可', '完全理性', '直觉唯一', '无决策'], answer: 0, explain: '有限理性。' },
          { stem: '目标管理的关键是：', options: ['参与设定与结果考核', '上级命令', '只看过程', '不考核'], answer: 0, explain: 'MBO。' }
        ],
        doc: { lead: '这一章讲计划。', sections: [
          { id: 'planning', title: '计划', html: `<p>计划类型、目标体系；MBO。</p>` },
          { id: 'decision', title: '决策', html: `<p>决策过程、理性与直觉；群体决策。</p>` }
        ], refs: [] } },
      { title: '组织', brief: '结构。',
        q: [
          { stem: '管理幅度与管理层次：', options: ['反比关系', '正比', '无关', '相等'], answer: 0, explain: '反比。' },
          { stem: '事业部制的核心是：', options: ['按产品/地区分权', '高度集权', '职能集中', '矩阵双线'], answer: 0, explain: '分权。' },
          { stem: '集权与分权的平衡取决于：', options: ['环境、规模、战略与能力', '只有规模', '只有环境', '只有战略'], answer: 0, explain: '多因素。' }
        ],
        doc: { lead: '这一章讲组织。', sections: [
          { id: 'design', title: '设计', html: `<p>部门化、幅度层次、集权分权；有机式与机械式。</p>` },
          { id: 'structure', title: '结构', html: `<p>直线职能、事业部、矩阵、网络型。</p>` }
        ], refs: [] } },
      { title: '领导与激励', brief: '带人。',
        q: [
          { stem: '双因素理论中保健因素的作用是：', options: ['防止不满但不激励', '直接激励', '提高绩效', '无作用'], answer: 0, explain: '保健。' },
          { stem: '期望理论的三个变量是：', options: ['期望、工具性、效价', '只有期望', '只有效价', '只有工具性'], answer: 0, explain: '三变量。' },
          { stem: '领导与管理的重要区别是：', options: ['领导重在方向与激励', '完全相同', '领导只管考核', '管理只定愿景'], answer: 0, explain: '区别。' }
        ],
        doc: { lead: '这一章讲领导。', sections: [
          { id: 'motivation', title: '激励', html: `<p>需求层次、双因素、期望与公平。</p>` },
          { id: 'leadership', title: '领导', html: `<p>风格理论、权变理论；领导力发展。</p>` }
        ], refs: [] } },
      { title: '控制与沟通', brief: '确保执行。',
        q: [
          { stem: '控制过程的起点是：', options: ['确立标准', '衡量绩效', '纠正偏差', '奖惩'], answer: 0, explain: '标准。' },
          { stem: '例外管理原则指：', options: ['重点关注偏差大的例外事项', '事必躬亲', '不做控制', '只做例行'], answer: 0, explain: '例外。' },
          { stem: '沟通障碍的改进方法包括：', options: ['简化语言、积极倾听、反馈', '只说不管', '只发文件', '减少沟通'], answer: 0, explain: '改进。' }
        ],
        doc: { lead: '这一章讲控制。', sections: [
          { id: 'control', title: '控制', html: `<p>控制类型、控制过程；例外管理。</p>` },
          { id: 'communication', title: '沟通', html: `<p>沟通网络、障碍与改进；冲突管理。</p>` }
        ], refs: [] } },
      { title: '创新与变革', brief: '变化。',
        q: [
          { stem: '创新的类型包括：', options: ['产品、流程、商业模式', '只有产品', '只有流程', '只有模式'], answer: 0, explain: '多类。' },
          { stem: '变革阻力的来源包括：', options: ['习惯、利益、不确定性', '只有习惯', '只有利益', '只有不确定性'], answer: 0, explain: '多源。' },
          { stem: '创新型组织的特征是：', options: ['容忍失败、扁平、开放', '层级森严', '惩罚失败', '封闭'], answer: 0, explain: '创新文化。' }
        ],
        doc: { lead: '这一章讲创新。', sections: [
          { id: 'innovation', title: '创新', html: `<p>创新类型、创新过程；组织保障。</p>` },
          { id: 'change', title: '变革', html: `<p>变革模型、阻力管理；组织学习。</p>` }
        ], refs: [] } },
      { title: '管理案例', brief: '用起来。',
        q: [
          { stem: '管理案例分析应：', options: ['界定问题—分析—方案—评价', '只给结论', '只描述', '只评价'], answer: 0, explain: '四步。' },
          { stem: '常用分析工具包括：', options: ['SWOT、五力、价值链', '只有 SWOT', '只有五力', '只有价值链'], answer: 0, explain: '多种。' },
          { stem: '方案落地应考虑：', options: ['资源、人员、时间与文化', '只有资源', '只有人员', '只有时间'], answer: 0, explain: '综合。' }
        ],
        doc: { lead: '这一章讲案例。', sections: [
          { id: 'framework', title: '框架', html: `<p>SWOT、五力、价值链；问题树。</p>` },
          { id: 'case', title: '案例', html: `<p>案例拆解与方案评价；汇报结构。</p>` }
        ], refs: [] } }
    ] },
    { name: '中级财务会计', chapters: [
      { title: '货币资金与应收', brief: '流动资产上。',
        q: [
          { stem: '现金短缺的会计处理是：', options: ['先记待处理财产损溢', '直接计入费用', '冲减收入', '计入资本公积'], answer: 0, explain: '待处理。' },
          { stem: '应收账款坏账计提方法包括：', options: ['余额百分比法与账龄分析法', '只有余额法', '只有账龄法', '直接冲销唯一'], answer: 0, explain: '多种。' },
          { stem: '应收票据贴现的实质是：', options: ['以票据向银行融资', '转让所有权唯一', '坏账', '投资'], answer: 0, explain: '贴现。' }
        ],
        doc: { lead: '这一章讲资金。', sections: [
          { id: 'cash', title: '货币资金', html: `<p>库存现金、银行存款、其他货币资金；清查与内控。</p>` },
          { id: 'receivable', title: '应收款项', html: `<p>应收账款、坏账准备；票据与贴现。</p>` }
        ], refs: [] } },
      { title: '存货', brief: '流动资产中。',
        q: [
          { stem: '存货成本的组成包括：', options: ['采购成本、加工成本与其他成本', '只有买价', '只有加工费', '只有运费'], answer: 0, explain: '三部分。' },
          { stem: '发出存货计价方法包括：', options: ['先进先出、加权平均、个别计价', '只有先进先出', '只有加权平均', '只有个别'], answer: 0, explain: '多种。' },
          { stem: '存货跌价准备计提的依据是：', options: ['成本高于可变现净值', '成本高于售价', '数量减少', '过期唯一'], answer: 0, explain: '可变现净值。' }
        ],
        doc: { lead: '这一章讲存货。', sections: [
          { id: 'cost', title: '成本', html: `<p>采购与加工成本；不计入存货的费用。</p>` },
          { id: 'measure', title: '计量', html: `<p>发出计价、期末计价；跌价准备转回。</p>` }
        ], refs: [] } },
      { title: '金融资产与长期股权投资', brief: '投资。',
        q: [
          { stem: '交易性金融资产公允价值变动计入：', options: ['当期损益', '其他综合收益', '资本公积', '留存收益'], answer: 0, explain: '损益。' },
          { stem: '长期股权投资成本法与权益法的区别是：', options: ['是否随被投资方净资产变动调整', '是否计提减值', '是否分红', '是否上市'], answer: 0, explain: '两种方法。' },
          { stem: '控制、共同控制、重大影响的判断依据是：', options: ['持股比例与实质权力', '只有比例', '只有合同', '只有董事席位'], answer: 0, explain: '实质。' }
        ],
        doc: { lead: '这一章讲投资。', sections: [
          { id: 'financial', title: '金融资产', html: `<p>三分类、公允价值；减值（预期信用损失）。</p>` },
          { id: 'equity', title: '长期股权', html: `<p>成本法与权益法；合并与商誉。</p>` }
        ], refs: [] } },
      { title: '固定资产与无形资产', brief: '长期资产。',
        q: [
          { stem: '固定资产折旧方法包括：', options: ['直线法、工作量法、双倍余额递减、年数总和', '只有直线', '只有工作量', '只有加速'], answer: 0, explain: '多种。' },
          { stem: '资本化与费用化的区别是：', options: ['是否计入资产成本', '金额大小', '时间长短', '是否有发票'], answer: 0, explain: '资本化。' },
          { stem: '无形资产摊销年限的确定依据：', options: ['使用寿命或合同/法律规定', '固定 10 年', '固定 5 年', '不摊销'], answer: 0, explain: '使用寿命。' }
        ],
        doc: { lead: '这一章讲长期资产。', sections: [
          { id: 'fixed', title: '固定资产', html: `<p>初始计量、折旧、后续支出；处置与减值。</p>` },
          { id: 'intangible', title: '无形资产', html: `<p>确认与摊销；研发支出资本化条件。</p>` }
        ], refs: [] } },
      { title: '负债', brief: '欠别人的。',
        q: [
          { stem: '应付职工薪酬包括：', options: ['工资、社保、福利、辞退福利', '只有工资', '只有社保', '只有福利'], answer: 0, explain: '多项。' },
          { stem: '可转换债券的会计处理需：', options: ['拆分负债与权益成分', '全部作负债', '全部作权益', '不作处理'], answer: 0, explain: '拆分。' },
          { stem: '预计负债确认的条件是：', options: ['很可能发生且金额能可靠计量', '可能发生', '金额不确定', '已发生'], answer: 0, explain: '预计负债。' }
        ],
        doc: { lead: '这一章讲负债。', sections: [
          { id: 'current', title: '流动负债', html: `<p>应付账款、职工薪酬、应交税费。</p>` },
          { id: 'noncurrent', title: '非流动负债', html: `<p>长期借款、应付债券、可转债；预计负债。</p>` }
        ], refs: [] } },
      { title: '所有者权益与收入', brief: '权益与收入。',
        q: [
          { stem: '所有者权益包括：', options: ['实收资本、资本公积、留存收益', '只有实收资本', '只有资本公积', '只有留存收益'], answer: 0, explain: '多项。' },
          { stem: '收入确认的五步法是：', options: ['识别合同—履约义务—交易价格—分摊—确认', '只有确认', '只有定价', '只有分摊'], answer: 0, explain: '五步。' },
          { stem: '合同负债与预收账款的关系：', options: ['合同负债更强调履约义务', '完全相同', '互斥', '无关'], answer: 0, explain: '合同负债。' }
        ],
        doc: { lead: '这一章讲权益。', sections: [
          { id: 'equity', title: '权益', html: `<p>投入资本、资本公积、留存收益；库存股。</p>` },
          { id: 'revenue', title: '收入', html: `<p>五步法、时点与时段确认；合同成本。</p>` }
        ], refs: [] } },
      { title: '财务报告与调整', brief: '出表与差错。',
        q: [
          { stem: '资产负债表日后事项分为：', options: ['调整事项与非调整事项', '只有调整', '只有非调整', '无分类'], answer: 0, explain: '两类。' },
          { stem: '会计政策变更的处理通常采用：', options: ['追溯调整法', '未来适用法唯一', '直接调整', '不调整'], answer: 0, explain: '追溯。' },
          { stem: '前期差错更正可采用：', options: ['追溯重述法', '未来适用法唯一', '不处理', '直接改'], answer: 0, explain: '追溯重述。' }
        ],
        doc: { lead: '这一章讲报告。', sections: [
          { id: 'report', title: '报告', html: `<p>报表附注、分部报告；合并报表基础。</p>` },
          { id: 'adjust', title: '调整', html: `<p>政策变更、差错更正、日后事项。</p>` }
        ], refs: [] } },
      { title: '中财实训', brief: '做账。',
        q: [
          { stem: '中财实训的重点是：', options: ['主要业务的账务处理与报表编制', '只编报表', '只做分录', '只学理论'], answer: 0, explain: '业务处理。' },
          { stem: '复杂业务应先：', options: ['判断业务实质与准则依据', '直接套分录', '问同事', '忽略'], answer: 0, explain: '实质。' },
          { stem: '实训检查的方法是：', options: ['试算平衡与报表勾稽', '只看凭证', '只看账簿', '凭感觉'], answer: 0, explain: '勾稽。' }
        ],
        doc: { lead: '这一章讲实训。', sections: [
          { id: 'case', title: '综合业务', html: `<p>采购、生产、销售、投资、筹资全流程核算。</p>` },
          { id: 'check', title: '核对', html: `<p>试算平衡、账表核对；常见错误。</p>` }
        ], refs: [] } }
    ] },
    { name: '成本会计', chapters: [
      { title: '成本会计基础', brief: '成本是什么。',
        q: [
          { stem: '成本会计的对象是：', options: ['产品成本与期间费用', '只有产品成本', '只有期间费用', '收入'], answer: 0, explain: '两者。' },
          { stem: '制造成本包括：', options: ['直接材料、直接人工、制造费用', '只有材料', '只有人工', '只有制造费用'], answer: 0, explain: '三项。' },
          { stem: '成本核算的基本程序是：', options: ['归集—分配—计算—结转', '只有归集', '只有分配', '只有计算'], answer: 0, explain: '程序。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'object', title: '对象', html: `<p>成本对象、成本项目；制造成本法。</p>` },
          { id: 'procedure', title: '程序', html: `<p>要素费用归集、辅助生产分配、制造费用分配。</p>` }
        ], refs: [] } },
      { title: '要素费用归集与分配', brief: '钱怎么摊。',
        q: [
          { stem: '材料费用分配的依据是：', options: ['定额消耗量或实际耗用量', '价格', '人数', '工时唯一'], answer: 0, explain: '消耗量。' },
          { stem: '制造费用分配方法包括：', options: ['生产工时、机器工时、直接成本比例', '只有工时', '只有机器工时', '只有成本比例'], answer: 0, explain: '多种。' },
          { stem: '辅助生产费用分配方法包括：', options: ['直接、交互、计划成本、代数', '只有直接', '只有交互', '只有代数'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲归集。', sections: [
          { id: 'material', title: '材料与人工', html: `<p>分配标准、定额；职工薪酬分配。</p>` },
          { id: 'overhead', title: '制造费用', html: `<p>分配方法、辅助生产费用交互分配。</p>` }
        ], refs: [] } },
      { title: '完工产品与在产品', brief: '怎么分。',
        q: [
          { stem: '完工产品与在产品成本分配方法包括：', options: ['约当产量法、定额比例法、不计算在产品', '只有约当产量', '只有定额比例', '只有不计'], answer: 0, explain: '多种。' },
          { stem: '约当产量法的关键是：', options: ['完工程度（投料与加工）', '产量', '价格', '工时'], answer: 0, explain: '完工程度。' },
          { stem: '在产品数量很小的企业可：', options: ['不计算在产品成本', '必须计算', '按 50% 计', '按售价计'], answer: 0, explain: '简化。' }
        ],
        doc: { lead: '这一章讲分配。', sections: [
          { id: 'equivalent', title: '约当产量', html: `<p>投料程度与加工程度；分配率计算。</p>` },
          { id: 'other', title: '其他方法', html: `<p>定额比例、定额成本、不计算在产品。</p>` }
        ], refs: [] } },
      { title: '产品成本计算方法', brief: '三种基本方法。',
        q: [
          { stem: '品种法适用于：', options: ['大量大批单步骤生产', '单件小批', '多步骤', '项目'], answer: 0, explain: '品种法。' },
          { stem: '分批法适用于：', options: ['单件小批生产', '大量大批', '连续生产', '服务'], answer: 0, explain: '分批。' },
          { stem: '分步法适用于：', options: ['大量大批多步骤生产', '单件', '单步骤', '项目'], answer: 0, explain: '分步。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'variety', title: '品种法', html: `<p>适用条件、计算程序。</p>` },
          { id: 'step', title: '分批与分步', html: `<p>分批法、逐步结转与平行结转分步法。</p>` }
        ], refs: [] } },
      { title: '标准成本与差异分析', brief: '管成本。',
        q: [
          { stem: '标准成本差异包括：', options: ['价格差异与数量差异', '只有价格', '只有数量', '无差异'], answer: 0, explain: '两类。' },
          { stem: '材料价格差异的责任通常归于：', options: ['采购部门', '生产部门', '销售部门', '财务部门'], answer: 0, explain: '采购。' },
          { stem: '有利差异指：', options: ['实际成本低于标准', '高于标准', '相等', '无法比较'], answer: 0, explain: '有利。' }
        ],
        doc: { lead: '这一章讲标准。', sections: [
          { id: 'standard', title: '标准成本', html: `<p>标准制定；直接材料、人工、制造费用标准。</p>` },
          { id: 'variance', title: '差异', html: `<p>价差与量差计算；责任归属与改进。</p>` }
        ], refs: [] } },
      { title: '作业成本法', brief: '更精确。',
        q: [
          { stem: '作业成本法的核心是：', options: ['按作业消耗资源、按成本动因分配', '按工时分摊', '按产量分摊', '按售价分摊'], answer: 0, explain: 'ABC。' },
          { stem: 'ABC 适用于：', options: ['产品多样、间接费用高', '单一产品', '间接费用低', '服务唯一'], answer: 0, explain: '适用。' },
          { stem: '成本动因的例子包括：', options: ['订单数、设备调整次数', '只有工时', '只有产量', '只有材料'], answer: 0, explain: '动因。' }
        ],
        doc: { lead: '这一章讲 ABC。', sections: [
          { id: 'concept', title: '概念', html: `<p>资源、作业、成本动因；两阶段分配。</p>` },
          { id: 'application', title: '应用', html: `<p>适用条件、与传统法比较；局限。</p>` }
        ], refs: [] } },
      { title: '成本控制与决策', brief: '用成本做决策。',
        q: [
          { stem: '变动成本法的特点：', options: ['只将变动成本计入产品成本', '全部成本计入产品', '只计固定', '不计成本'], answer: 0, explain: '变动成本法。' },
          { stem: '本量利分析的核心是：', options: ['盈亏平衡与边际贡献', '只有利润', '只有成本', '只有销量'], answer: 0, explain: 'CVP。' },
          { stem: '相关成本指：', options: ['随决策改变的未来成本', '已发生成本', '沉没成本', '固定成本'], answer: 0, explain: '相关成本。' }
        ],
        doc: { lead: '这一章讲决策。', sections: [
          { id: 'variable', title: '变动成本法', html: `<p>与完全成本法差异；利润差异原因。</p>` },
          { id: 'decision', title: '决策', html: `<p>本量利、边际贡献；特殊订单与自制外购。</p>` }
        ], refs: [] } },
      { title: '成本报表与分析', brief: '看成本。',
        q: [
          { stem: '成本报表的作用是：', options: ['反映成本水平并支持管理', '对外披露唯一', '纳税唯一', '装饰'], answer: 0, explain: '管理。' },
          { stem: '成本分析的方法包括：', options: ['比较、因素、比率分析', '只有比较', '只有因素', '只有比率'], answer: 0, explain: '多种。' },
          { stem: '降低成本的途径包括：', options: ['工艺改进、采购优化、减少浪费', '只有降薪', '只有涨价', '只有裁员'], answer: 0, explain: '多途径。' }
        ],
        doc: { lead: '这一章讲分析。', sections: [
          { id: 'report', title: '报表', html: `<p>产品成本表、主要产品单位成本表；编制。</p>` },
          { id: 'analysis', title: '分析', html: `<p>因素分析法、对标；降本措施。</p>` }
        ], refs: [] } }
    ] },
    { name: '经济法', chapters: [
      { title: '法律基础与经济法概述', brief: '入门。',
        q: [
          { stem: '法律关系的三要素是：', options: ['主体、客体、内容', '只有主体', '只有客体', '只有内容'], answer: 0, explain: '三要素。' },
          { stem: '经济法的调整对象是：', options: ['国家干预经济运行中的关系', '所有社会关系', '家庭关系', '刑事关系'], answer: 0, explain: '经济关系。' },
          { stem: '诉讼时效一般为：', options: ['三年', '一年', '五年', '十年'], answer: 0, explain: '三年。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'relation', title: '法律关系', html: `<p>主体、客体、内容；权利能力与行为能力。</p>` },
          { id: 'limitation', title: '时效', html: `<p>诉讼时效、中止与中断；期间计算。</p>` }
        ], refs: [] } },
      { title: '公司法', brief: '企业形式。',
        q: [
          { stem: '有限责任公司的股东责任是：', options: ['以认缴出资额为限', '无限责任', '连带责任', '无责任'], answer: 0, explain: '有限。' },
          { stem: '公司治理结构中，股东会的职权包括：', options: ['选举董事、审议重大事项', '日常经营', '任免经理唯一', '监督唯一'], answer: 0, explain: '股东会。' },
          { stem: '注册资本认缴制的含义是：', options: ['股东自主约定出资期限', '无需出资', '必须实缴', '由银行出资'], answer: 0, explain: '认缴。' }
        ],
        doc: { lead: '这一章讲公司。', sections: [
          { id: 'form', title: '形式', html: `<p>有限责任公司、股份有限公司；设立与出资。</p>` },
          { id: 'governance', title: '治理', html: `<p>股东会、董事会、监事会；高管责任。</p>` }
        ], refs: [] } },
      { title: '合同法', brief: '交易规则。',
        q: [
          { stem: '合同成立的要件包括：', options: ['要约与承诺', '只有要约', '只有承诺', '口头即可'], answer: 0, explain: '要约承诺。' },
          { stem: '无效合同的情形包括：', options: ['违反强制性规定、恶意串通等', '只有欺诈', '只有胁迫', '只有误解'], answer: 0, explain: '无效。' },
          { stem: '违约责任的形式包括：', options: ['继续履行、赔偿损失、违约金', '只有赔偿', '只有违约金', '只有解除'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲合同。', sections: [
          { id: 'formation', title: '订立', html: `<p>要约承诺、格式条款；效力与撤销。</p>` },
          { id: 'breach', title: '履行与违约', html: `<p>抗辩权、代位权；违约责任与解除。</p>` }
        ], refs: [] } },
      { title: '票据与支付结算法', brief: '结算。',
        q: [
          { stem: '票据的种类包括：', options: ['汇票、本票、支票', '只有汇票', '只有本票', '只有支票'], answer: 0, explain: '三类。' },
          { stem: '票据行为包括：', options: ['出票、背书、承兑、保证', '只有出票', '只有背书', '只有承兑'], answer: 0, explain: '多种。' },
          { stem: '票据抗辩的限制保护：', options: ['善意持票人', '出票人', '付款人', '背书人'], answer: 0, explain: '持票人。' }
        ],
        doc: { lead: '这一章讲票据。', sections: [
          { id: 'bill', title: '票据', html: `<p>种类、记载事项；票据权利与抗辩。</p>` },
          { id: 'settlement', title: '结算', html: `<p>银行结算方式；支付结算纪律。</p>` }
        ], refs: [] } },
      { title: '税法基础', brief: '纳税。',
        q: [
          { stem: '增值税的计税依据是：', options: ['增值额（销项减进项）', '销售额', '利润', '成本'], answer: 0, explain: '增值额。' },
          { stem: '企业所得税的税率一般为：', options: ['25%', '10%', '15%', '33%'], answer: 0, explain: '25%。' },
          { stem: '税收的特征包括：', options: ['强制性、无偿性、固定性', '只有强制性', '只有无偿性', '只有固定性'], answer: 0, explain: '三性。' }
        ],
        doc: { lead: '这一章讲税法。', sections: [
          { id: 'vat', title: '增值税', html: `<p>纳税人、税率、进项抵扣；发票管理。</p>` },
          { id: 'income', title: '所得税', html: `<p>应纳税所得额、税前扣除；税收优惠。</p>` }
        ], refs: [] } },
      { title: '证券与破产法', brief: '资本市场与退出。',
        q: [
          { stem: '证券发行的基本要求是：', options: ['依法核准/注册并披露信息', '无需披露', '随意发行', '只备案'], answer: 0, explain: '披露。' },
          { stem: '内幕交易的法律后果是：', options: ['行政处罚与刑事追责', '无责任', '只罚款', '只警告'], answer: 0, explain: '追责。' },
          { stem: '破产程序包括：', options: ['重整、和解、破产清算', '只有重整', '只有和解', '只有清算'], answer: 0, explain: '三种。' }
        ],
        doc: { lead: '这一章讲证券。', sections: [
          { id: 'securities', title: '证券', html: `<p>发行与交易、信息披露；禁止行为。</p>` },
          { id: 'bankruptcy', title: '破产', html: `<p>重整、和解、清算；债权申报与顺序。</p>` }
        ], refs: [] } },
      { title: '会计法规与责任', brief: '合规。',
        q: [
          { stem: '会计法的基本要求是：', options: ['依法设账、真实完整', '可设两套账', '可随意', '只报税'], answer: 0, explain: '依法。' },
          { stem: '财务造假的法律责任包括：', options: ['行政、民事与刑事责任', '只有行政', '只有民事', '无责任'], answer: 0, explain: '多重。' },
          { stem: '会计人员的职责包括：', options: ['核算、监督、拒绝违法事项', '只有核算', '只有监督', '无条件服从'], answer: 0, explain: '职责。' }
        ],
        doc: { lead: '这一章讲法规。', sections: [
          { id: 'accountinglaw', title: '会计法', html: `<p>设账、核算、监督；单位负责人责任。</p>` },
          { id: 'liability', title: '责任', html: `<p>行政、民事、刑事；会计职业道德。</p>` }
        ], refs: [] } },
      { title: '经济法案例', brief: '用起来。',
        q: [
          { stem: '经济法案例分析应：', options: ['找法律关系—适用法条—得出结论', '只谈道理', '只给结论', '只背法条'], answer: 0, explain: '三步。' },
          { stem: '合同纠纷处理方式包括：', options: ['协商、调解、仲裁、诉讼', '只有诉讼', '只有仲裁', '只有协商'], answer: 0, explain: '多种。' },
          { stem: '企业合规的价值是：', options: ['防范风险、保障持续经营', '增加成本', '无价值', '只做形式'], answer: 0, explain: '合规。' }
        ],
        doc: { lead: '这一章讲案例。', sections: [
          { id: 'method', title: '方法', html: `<p>法律关系分析、法条检索；裁判要旨。</p>` },
          { id: 'compliance', title: '合规', html: `<p>合同审查、内控；典型案例。</p>` }
        ], refs: [] } }
    ] },
    { name: '高级财务会计', chapters: [
      { title: '合并报表基础', brief: '集团。',
        q: [
          { stem: '合并范围的确定依据是：', options: ['控制', '持股 50% 唯一', '协议唯一', '规模'], answer: 0, explain: '控制。' },
          { stem: '合并报表的编制步骤是：', options: ['调整—抵销—合并', '只有抵销', '只有合并', '只有调整'], answer: 0, explain: '三步。' },
          { stem: '少数股东权益在合并报表中列示于：', options: ['所有者权益', '负债', '资产', '收入'], answer: 0, explain: '权益。' }
        ],
        doc: { lead: '这一章讲合并。', sections: [
          { id: 'scope', title: '范围', html: `<p>控制的判断、结构化主体；豁免。</p>` },
          { id: 'procedure', title: '程序', html: `<p>统一政策、内部交易抵销；少数股东权益。</p>` }
        ], refs: [] } },
      { title: '合并抵销与商誉', brief: '内部交易。',
        q: [
          { stem: '内部交易未实现损益应：', options: ['抵销', '不处理', '计入收入', '计入费用'], answer: 0, explain: '抵销。' },
          { stem: '商誉的初始确认金额是：', options: ['合并成本大于可辨认净资产公允价值份额的差额', '合并成本', '净资产', '溢价'], answer: 0, explain: '差额。' },
          { stem: '商誉减值测试的频率通常是：', options: ['每年至少一次', '每季', '每月', '不测试'], answer: 0, explain: '每年。' }
        ],
        doc: { lead: '这一章讲抵销。', sections: [
          { id: 'elimination', title: '抵销', html: `<p>存货、固定资产、债权债务内部交易抵销。</p>` },
          { id: 'goodwill', title: '商誉', html: `<p>确认、减值测试；负商誉处理。</p>` }
        ], refs: [] } },
      { title: '外币折算', brief: '汇率。',
        q: [
          { stem: '外币交易折算采用：', options: ['交易发生日即期汇率或近似汇率', '月末汇率唯一', '年初汇率', '固定汇率'], answer: 0, explain: '即期汇率。' },
          { stem: '汇兑差额一般计入：', options: ['当期损益（财务费用）', '资本公积', '其他综合收益', '留存收益'], answer: 0, explain: '损益。' },
          { stem: '境外经营报表折算差额计入：', options: ['其他综合收益', '当期损益', '资本公积', '收入'], answer: 0, explain: 'OCI。' }
        ],
        doc: { lead: '这一章讲外币。', sections: [
          { id: 'transaction', title: '外币交易', html: `<p>即期汇率、汇兑差额；货币性与非货币性项目。</p>` },
          { id: 'translation', title: '报表折算', html: `<p>资产负债项目汇率选择；折算差额。</p>` }
        ], refs: [] } },
      { title: '租赁会计', brief: '租还是买。',
        q: [
          { stem: '新租赁准则要求承租人对经营租赁：', options: ['确认使用权资产与租赁负债', '不确认', '只在附注披露', '计入费用'], answer: 0, explain: '入表。' },
          { stem: '使用权资产初始计量包括：', options: ['租赁负债现值与初始直接费用', '只有租金', '只有费用', '只有押金'], answer: 0, explain: '现值。' },
          { stem: '租赁分类的判断依据：', options: ['是否转移与资产所有权有关的几乎全部风险和报酬', '租期长短唯一', '金额大小', '是否含税'], answer: 0, explain: '风险报酬。' }
        ],
        doc: { lead: '这一章讲租赁。', sections: [
          { id: 'lessee', title: '承租人', html: `<p>使用权资产、租赁负债；折旧与利息。</p>` },
          { id: 'lessor', title: '出租人', html: `<p>融资租赁与经营租赁；销售型租赁。</p>` }
        ], refs: [] } },
      { title: '金融工具进阶', brief: '复杂工具。',
        q: [
          { stem: '金融资产三分类的依据是：', options: ['业务模式与合同现金流特征', '持有时间', '金额', '是否上市'], answer: 0, explain: '两标准。' },
          { stem: '套期会计的目的是：', options: ['使套期工具与被套期项目的损益配比', '增加利润', '减少税负', '规避披露'], answer: 0, explain: '配比。' },
          { stem: '预期信用损失模型的要点是：', options: ['按未来预期损失计提减值', '已发生损失计提', '不计提', '按账龄'], answer: 0, explain: 'ECL。' }
        ],
        doc: { lead: '这一章讲工具。', sections: [
          { id: 'classify', title: '分类', html: `<p>业务模式测试、SPPI 测试；重分类。</p>` },
          { id: 'hedge', title: '套期与减值', html: `<p>公允价值/现金流量套期；ECL 三阶段。</p>` }
        ], refs: [] } },
      { title: '所得税会计', brief: '税会差异。',
        q: [
          { stem: '递延所得税资产产生于：', options: ['可抵扣暂时性差异', '应纳税暂时性差异', '永久性差异', '亏损'], answer: 0, explain: '可抵扣。' },
          { stem: '资产负债表债务法的核心是：', options: ['比较账面价值与计税基础', '按利润调整', '按税率', '按现金流'], answer: 0, explain: '暂时性差异。' },
          { stem: '递延所得税资产的确认需考虑：', options: ['未来很可能取得应纳税所得额', '当期利润', '税率', '现金流'], answer: 0, explain: '可转回性。' }
        ],
        doc: { lead: '这一章讲所得税。', sections: [
          { id: 'difference', title: '差异', html: `<p>永久性与暂时性差异；账面价值与计税基础。</p>` },
          { id: 'deferred', title: '递延', html: `<p>递延所得税资产/负债计算；减值与列报。</p>` }
        ], refs: [] } },
      { title: '股份支付与每股收益', brief: '激励与指标。',
        q: [
          { stem: '权益结算股份支付按：', options: ['授予日公允价值计量', '行权日公允价值', '内在价值', '面值'], answer: 0, explain: '授予日。' },
          { stem: '基本每股收益的计算是：', options: ['净利润 / 发行在外普通股加权平均数', '净利润 / 股本', '收入 / 股数', '利润 / 资产'], answer: 0, explain: 'EPS。' },
          { stem: '稀释每股收益考虑：', options: ['潜在普通股的稀释性', '只有普通股', '只有优先股', '只有债券'], answer: 0, explain: '稀释。' }
        ],
        doc: { lead: '这一章讲支付。', sections: [
          { id: 'share', title: '股份支付', html: `<p>权益结算与现金结算；等待期费用分摊。</p>` },
          { id: 'eps', title: '每股收益', html: `<p>基本与稀释 EPS；加权平均股数。</p>` }
        ], refs: [] } },
      { title: '高财综合实训', brief: '综合。',
        q: [
          { stem: '合并报表实训的难点是：', options: ['内部交易抵销与少数股东权益', '填表', '装订', '打印'], answer: 0, explain: '抵销。' },
          { stem: '复杂业务处理应先：', options: ['判断交易实质与准则依据', '套模板', '问同事', '忽略'], answer: 0, explain: '实质。' },
          { stem: '报表勾稽检查包括：', options: ['资产负债表与利润表、现金流量表匹配', '只看一张表', '只看附注', '不检查'], answer: 0, explain: '勾稽。' }
        ],
        doc: { lead: '这一章讲实训。', sections: [
          { id: 'case', title: '综合案例', html: `<p>集团合并、外币、租赁、所得税综合业务。</p>` },
          { id: 'check', title: '核对', html: `<p>抵销分录、勾稽关系；常见错误。</p>` }
        ], refs: [] } }
    ] },
    { name: '审计学', chapters: [
      { title: '审计概述与职业道德', brief: '为什么审。',
        q: [
          { stem: '审计的目标是：', options: ['对财务报表是否公允发表意见', '查所有错误', '保证盈利', '编报表'], answer: 0, explain: '发表意见。' },
          { stem: '审计的独立性包括：', options: ['实质上独立与形式上独立', '只有实质', '只有形式', '不需要'], answer: 0, explain: '两方面。' },
          { stem: '合理保证与绝对保证的区别是：', options: ['审计提供合理保证而非绝对保证', '完全相同', '审计是绝对保证', '无保证'], answer: 0, explain: '合理保证。' }
        ],
        doc: { lead: '这一章讲概述。', sections: [
          { id: 'objective', title: '目标', html: `<p>公允反映、合理保证；审计与鉴证。</p>` },
          { id: 'ethics', title: '职业道德', html: `<p>独立、客观、专业胜任、保密；独立性威胁。</p>` }
        ], refs: [] } },
      { title: '审计准则与法律责任', brief: '规矩与责任。',
        q: [
          { stem: '审计失败与审计风险的区别是：', options: ['是否实际发生损失', '相同', '风险更大', '失败更小'], answer: 0, explain: '两者。' },
          { stem: '注册会计师的法律责任包括：', options: ['行政、民事、刑事责任', '只有行政', '只有民事', '无责任'], answer: 0, explain: '多重。' },
          { stem: '重要性水平的作用是：', options: ['确定审计范围与评价错报', '装饰', '算税', '定费用'], answer: 0, explain: '重要性。' }
        ],
        doc: { lead: '这一章讲准则。', sections: [
          { id: 'standard', title: '准则', html: `<p>审计准则体系；重要性、审计风险模型。</p>` },
          { id: 'liability', title: '责任', html: `<p>违约、过失、欺诈；抗辩与防范。</p>` }
        ], refs: [] } },
      { title: '审计计划与风险评估', brief: '先想风险。',
        q: [
          { stem: '审计风险模型是：', options: ['审计风险 = 重大错报风险 × 检查风险', '风险 = 错报', '风险 = 检查', '风险 = 重要性'], answer: 0, explain: '模型。' },
          { stem: '了解被审计单位内部控制的目的是：', options: ['识别与评估重大错报风险', '替代实质性程序', '出具内控报告唯一', '算成本'], answer: 0, explain: '评估风险。' },
          { stem: '总体审计策略与具体审计计划的区别是：', options: ['范围方向 vs 详细程序', '相同', '时间不同', '人员不同'], answer: 0, explain: '层次。' }
        ],
        doc: { lead: '这一章讲计划。', sections: [
          { id: 'risk', title: '风险评估', html: `<p>了解被审计单位及环境、内控；风险模型。</p>` },
          { id: 'plan', title: '计划', html: `<p>总体策略、具体计划；重要性分配。</p>` }
        ], refs: [] } },
      { title: '内部控制与测试', brief: '看制度。',
        q: [
          { stem: '内部控制的五要素是：', options: ['控制环境、风险评估、控制活动、信息沟通、监督', '只有控制环境', '只有控制活动', '只有监督'], answer: 0, explain: '五要素。' },
          { stem: '控制测试的目的是：', options: ['评价内部控制运行有效性', '发现所有错报', '替代实质性程序', '出具报告'], answer: 0, explain: '控制测试。' },
          { stem: '实质性程序包括：', options: ['细节测试与实质性分析程序', '只有细节测试', '只有分析程序', '只有控制测试'], answer: 0, explain: '两类。' }
        ],
        doc: { lead: '这一章讲内控。', sections: [
          { id: 'coso', title: '内控框架', html: `<p>COSO 五要素；控制缺陷分级。</p>` },
          { id: 'test', title: '测试', html: `<p>控制测试方法、样本；实质性程序。</p>` }
        ], refs: [] } },
      { title: '审计证据与抽样', brief: '证据。',
        q: [
          { stem: '审计证据的充分性与适当性分别指：', options: ['数量与质量', '质量与数量', '成本与效率', '时间与范围'], answer: 0, explain: '数量质量。' },
          { stem: '函证属于：', options: ['外部证据、可靠性较高', '内部证据', '口头证据', '分析程序'], answer: 0, explain: '外部。' },
          { stem: '审计抽样风险包括：', options: ['误拒风险与误受风险', '只有误拒', '只有误受', '无风险'], answer: 0, explain: '两类。' }
        ],
        doc: { lead: '这一章讲证据。', sections: [
          { id: 'evidence', title: '证据', html: `<p>充分适当、获取方法（检查/观察/函证/分析）。</p>` },
          { id: 'sampling', title: '抽样', html: `<p>统计与非统计抽样、样本量与风险。</p>` }
        ], refs: [] } },
      { title: '业务循环审计', brief: '按循环审。',
        q: [
          { stem: '销售与收款循环的关键控制是：', options: ['职责分离、信用审批、对账', '只有对账', '只有审批', '只有分离'], answer: 0, explain: '多项。' },
          { stem: '存货监盘的目的：', options: ['确认存货存在与状况', '算成本', '评内控唯一', '测收入'], answer: 0, explain: '监盘。' },
          { stem: '货币资金审计的重点是：', options: ['银行函证与余额调节表', '只看日记账', '只看凭证', '只看报表'], answer: 0, explain: '函证。' }
        ],
        doc: { lead: '这一章讲循环。', sections: [
          { id: 'sales', title: '销售与采购', html: `<p>收入确认、应收；采购与应付、截止测试。</p>` },
          { id: 'inventory', title: '存货与资金', html: `<p>监盘、计价测试；银行函证、调节表。</p>` }
        ], refs: [] } },
      { title: '审计报告', brief: '出结论。',
        q: [
          { stem: '审计意见的类型包括：', options: ['无保留、保留、否定、无法表示意见', '只有无保留', '只有保留', '只有否定'], answer: 0, explain: '四种。' },
          { stem: '关键审计事项的作用是：', options: ['沟通审计中最重要的事项', '替代意见', '披露商业秘密', '装饰'], answer: 0, explain: 'KAM。' },
          { stem: '持续经营重大不确定时应：', options: ['在报告中增加段落说明', '不披露', '出具否定意见唯一', '直接拒绝'], answer: 0, explain: '披露。' }
        ],
        doc: { lead: '这一章讲报告。', sections: [
          { id: 'opinion', title: '意见', html: `<p>意见类型与判断；形成意见的基础。</p>` },
          { id: 'kam', title: '沟通', html: `<p>关键审计事项、其他信息；治理层沟通。</p>` }
        ], refs: [] } },
      { title: '审计实训', brief: '上手。',
        q: [
          { stem: '审计实训的典型任务是：', options: ['编制审计工作底稿', '做账', '报税', '出报表'], answer: 0, explain: '底稿。' },
          { stem: '工作底稿的作用是：', options: ['记录证据与结论、支持报告', '装饰', '考核', '归档唯一'], answer: 0, explain: '支持。' },
          { stem: '底稿复核的层级通常包括：', options: ['项目组内复核与项目质量复核', '只有组内', '只有质量复核', '不复核'], answer: 0, explain: '两级。' }
        ],
        doc: { lead: '这一章讲实训。', sections: [
          { id: 'workpaper', title: '底稿', html: `<p>编制要求、索引与交叉引用；归档。</p>` },
          { id: 'review', title: '复核', html: `<p>三级复核、质量检查；常见问题。</p>` }
        ], refs: [] } }
    ] },
    { name: '财务管理', chapters: [
      { title: '财务管理导论', brief: '目标。',
        q: [
          { stem: '财务管理的目标是：', options: ['企业价值/股东财富最大化', '利润最大化唯一', '收入最大化', '规模最大化'], answer: 0, explain: '价值最大化。' },
          { stem: '三大财务决策是：', options: ['投资、融资、股利', '预算、核算、分析', '采购、生产、销售', '收入、成本、利润'], answer: 0, explain: '三大决策。' },
          { stem: '代理问题的表现包括：', options: ['管理层与股东利益不一致', '客户投诉', '产品质量', '员工流失'], answer: 0, explain: '代理。' }
        ],
        doc: { lead: '这一章讲导论。', sections: [
          { id: 'goal', title: '目标', html: `<p>价值最大化、代理问题与治理；财务经理职责。</p>` },
          { id: 'environment', title: '环境', html: `<p>金融市场、利率；税与法规。</p>` }
        ], refs: [] } },
      { title: '时间价值与估值', brief: '算现值。',
        q: [
          { stem: '复利终值公式：', options: ['FV = PV(1+i)^n', 'FV = PV(1+ni)', 'FV = PV/n', 'FV = PV·i'], answer: 0, explain: '复利。' },
          { stem: '永续年金现值等于：', options: ['C/i', 'C·i', 'C/i²', 'C·n'], answer: 0, explain: '永续。' },
          { stem: '债券价值等于：', options: ['未来现金流现值之和', '面值', '票面利息', '发行价'], answer: 0, explain: '现值。' }
        ],
        doc: { lead: '这一章讲时间价值。', sections: [
          { id: 'tvm', title: '时间价值', html: `<p>复利、年金；分期还款。</p>` },
          { id: 'valuation', title: '估值', html: `<p>债券估值、股票估值（股利折现）。</p>` }
        ], refs: [] } },
      { title: '风险与收益', brief: '风险定价。',
        q: [
          { stem: 'CAPM 中 β 衡量：', options: ['系统风险', '总风险', '非系统风险', '流动性'], answer: 0, explain: '系统风险。' },
          { stem: '分散化可消除：', options: ['非系统风险', '系统风险', '全部风险', '市场风险'], answer: 0, explain: '非系统。' },
          { stem: '风险溢价是：', options: ['超过无风险利率的补偿', '无风险利率', '通货膨胀', '税率'], answer: 0, explain: '溢价。' }
        ],
        doc: { lead: '这一章讲风险。', sections: [
          { id: 'measure', title: '度量', html: `<p>标准差、β；组合风险。</p>` },
          { id: 'capm', title: 'CAPM', html: `<p>证券市场线、必要报酬率。</p>` }
        ], refs: [] } },
      { title: '资本预算', brief: '投资决策。',
        q: [
          { stem: 'NPV 法的优点是：', options: ['考虑时间价值与全部现金流', '简单', '忽略风险', '只看回收期'], answer: 0, explain: 'NPV。' },
          { stem: 'IRR 与 NPV 冲突时通常以：', options: ['NPV 为准', 'IRR 为准', '回收期为准', '随机'], answer: 0, explain: 'NPV。' },
          { stem: '沉没成本在决策中应：', options: ['不考虑', '计入', '部分计入', '按比例'], answer: 0, explain: '不相关。' }
        ],
        doc: { lead: '这一章讲预算。', sections: [
          { id: 'method', title: '方法', html: `<p>NPV、IRR、回收期；决策规则。</p>` },
          { id: 'cashflow', title: '现金流', html: `<p>增量现金流、折旧税盾；风险调整。</p>` }
        ], refs: [] } },
      { title: '资本成本与结构', brief: '融资。',
        q: [
          { stem: 'WACC 反映：', options: ['企业整体资本成本', '债务成本', '股权成本', '无风险利率'], answer: 0, explain: 'WACC。' },
          { stem: '财务杠杆提高会：', options: ['增加财务风险与预期收益', '降低风险', '无影响', '降低收益'], answer: 0, explain: '杠杆。' },
          { stem: '最优资本结构的权衡是：', options: ['税盾收益与财务困境成本', '只有税盾', '只有困境', '无关'], answer: 0, explain: '权衡。' }
        ],
        doc: { lead: '这一章讲资本。', sections: [
          { id: 'cost', title: '成本', html: `<p>债务与股权成本、WACC；发行成本。</p>` },
          { id: 'structure', title: '结构', html: `<p>MM 定理、税盾、破产成本；目标结构。</p>` }
        ], refs: [] } },
      { title: '营运资金与股利', brief: '日常与分配。',
        q: [
          { stem: '营运资金管理目标是：', options: ['平衡流动性与收益', '最大化现金', '最小化现金', '最大化库存'], answer: 0, explain: '平衡。' },
          { stem: '信用政策的要素包括：', options: ['信用标准、期限、折扣、收账政策', '只有标准', '只有期限', '只有折扣'], answer: 0, explain: '多要素。' },
          { stem: '股利政策的影响因素包括：', options: ['盈利、现金、投资机会、税', '只有盈利', '只有现金', '只有税'], answer: 0, explain: '多因素。' }
        ],
        doc: { lead: '这一章讲营运。', sections: [
          { id: 'working', title: '营运资金', html: `<p>现金、应收、存货管理；周转率。</p>` },
          { id: 'dividend', title: '股利', html: `<p>政策类型、回购；信号效应。</p>` }
        ], refs: [] } },
      { title: '财务分析与预测', brief: '看与算。',
        q: [
          { stem: '杜邦分析把 ROE 分解为：', options: ['净利率 × 周转率 × 权益乘数', '利润/收入', '收入/资产', '资产/权益'], answer: 0, explain: '杜邦。' },
          { stem: '可持续增长率取决于：', options: ['ROE 与留存率', '只有 ROE', '只有留存率', '收入'], answer: 0, explain: 'SGR。' },
          { stem: '财务预测的起点是：', options: ['销售预测', '利润', '现金', '资产'], answer: 0, explain: '销售。' }
        ],
        doc: { lead: '这一章讲分析。', sections: [
          { id: 'ratio', title: '分析', html: `<p>比率分析、杜邦体系；同业对比。</p>` },
          { id: 'forecast', title: '预测', html: `<p>销售百分比法、可持续增长；融资需求。</p>` }
        ], refs: [] } },
      { title: '财务案例', brief: '综合。',
        q: [
          { stem: '投资决策案例应关注：', options: ['现金流、风险与期权价值', '只有会计利润', '只有收入', '只有成本'], answer: 0, explain: '现金流。' },
          { stem: '企业估值常用方法包括：', options: ['DCF、相对估值', '只有 DCF', '只有相对估值', '成本法唯一'], answer: 0, explain: '两类。' },
          { stem: '财务决策应：', options: ['兼顾收益、风险与战略', '只看收益', '只看风险', '只看短期'], answer: 0, explain: '平衡。' }
        ],
        doc: { lead: '这一章讲案例。', sections: [
          { id: 'valuation', title: '估值', html: `<p>DCF、PE/PB；敏感性分析。</p>` },
          { id: 'case', title: '案例', html: `<p>投资、融资、并购案例；决策建议。</p>` }
        ], refs: [] } }
    ] },

    /* ---- 大四 ---- */
    { name: '毕业论文', chapters: [
      { title: '选题与文献', brief: '研究什么。',
        q: [
          { stem: '会计论文选题关键是：', options: ['问题明确、数据可得、方法可行', '题目宏大', '追热点', '导师偏好'], answer: 0, explain: '可行。' },
          { stem: '会计研究常见类型包括：', options: ['实证、案例、规范研究', '只有实证', '只有案例', '只有规范'], answer: 0, explain: '多类。' },
          { stem: '文献综述的作用是：', options: ['梳理脉络并找到缺口', '凑字数', '装饰', '展示'], answer: 0, explain: '缺口。' }
        ],
        doc: { lead: '这一章讲开头。', sections: [
          { id: 'topic', title: '选题', html: `<p>财务报告、审计、成本管理、税务；数据来源。</p>` },
          { id: 'review', title: '文献', html: `<p>检索、综述结构；研究假设。</p>` }
        ], refs: [] } },
      { title: '研究方法与数据', brief: '怎么做。',
        q: [
          { stem: '实证研究的关键是：', options: ['变量设计、样本与模型', '只有模型', '只有样本', '只有变量'], answer: 0, explain: '三要素。' },
          { stem: '案例研究适合：', options: ['深入解释机制与过程', '大样本统计', '预测', '抽样'], answer: 0, explain: '机制。' },
          { stem: '数据来源包括：', options: ['CSMAR/Wind、年报、问卷', '只有年报', '只有数据库', '只有问卷'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'design', title: '设计', html: `<p>研究假设、变量定义；样本选择。</p>` },
          { id: 'analysis', title: '分析', html: `<p>描述统计、回归、稳健性；内生性初步。</p>` }
        ], refs: [] } },
      { title: '写作与规范', brief: '写清楚。',
        q: [
          { stem: '论文结构是：', options: ['引言—文献—方法—结果—结论', '总—分—总', '背景—致谢', '问答'], answer: 0, explain: '结构。' },
          { stem: '表格规范包括：', options: ['三线表、变量说明、显著性标记', '只有数字', '只有标题', '无要求'], answer: 0, explain: '规范。' },
          { stem: '引用规范的作用是：', options: ['可追溯与诚信', '凑数', '装饰', '增加篇幅'], answer: 0, explain: '规范。' }
        ],
        doc: { lead: '这一章讲写作。', sections: [
          { id: 'structure', title: '结构', html: `<p>摘要、引言、文献、方法、结果、结论。</p>` },
          { id: 'tables', title: '图表', html: `<p>三线表、变量表；引用格式与附录。</p>` }
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
      { title: '岗位与角色', brief: '财务岗位。',
        q: [
          { stem: '会计实习的常见岗位不包括：', options: ['总账会计', '成本会计', '审计助理', '外科医生'], answer: 3, explain: '无关。' },
          { stem: '选择实习最该看：', options: ['能否接触完整账务流程', '名气', '工资', '通勤'], answer: 0, explain: '实战。' },
          { stem: '实习生上手最快是：', options: ['从凭证与基础核算做起', '直接编合并报表', '只写报告', '只观察'], answer: 0, explain: '基础。' }
        ],
        doc: { lead: '这一章讲岗位。', sections: [
          { id: 'roles', title: '岗位', html: `<p>核算、成本、税务、审计、财务分析；职责。</p>` },
          { id: 'onboard', title: '上手', html: `<p>熟悉科目与流程、学软件；记录与提问。</p>` }
        ], refs: [] } },
      { title: '核算与报税', brief: '实务。',
        q: [
          { stem: '月末结账的关键是：', options: ['核对往来、计提摊销、结转损益', '只有结转', '只有核对', '只有计提'], answer: 0, explain: '结账。' },
          { stem: '增值税申报的关键是：', options: ['销项与进项匹配、发票合规', '只看收入', '只看成本', '只报税'], answer: 0, explain: '进销项。' },
          { stem: '财务软件操作应：', options: ['按权限与流程、留痕可查', '随意改', '共用账号', '跳过审核'], answer: 0, explain: '规范。' }
        ],
        doc: { lead: '这一章讲实务。', sections: [
          { id: 'closing', title: '结账', html: `<p>对账、计提、结转；报表编制。</p>` },
          { id: 'tax', title: '报税', html: `<p>增值税、所得税申报；发票与合规。</p>` }
        ], refs: [] } },
      { title: '审计与内控实习', brief: '另一条线。',
        q: [
          { stem: '审计助理的常见工作是：', options: ['抽凭、函证、底稿编制', '出具意见', '签字', '定收费'], answer: 0, explain: '基础工作。' },
          { stem: '抽凭的要点是：', options: ['按样本与风险选取、记录', '随便抽', '全抽', '不记录'], answer: 0, explain: '抽样。' },
          { stem: '函证控制要求：', options: ['全程控制、独立寄发回收', '由客户代发', '不控制', '只看回函'], answer: 0, explain: '控制。' }
        ],
        doc: { lead: '这一章讲审计。', sections: [
          { id: 'assistant', title: '助理工作', html: `<p>抽凭、截止测试、函证；底稿索引。</p>` },
          { id: 'internal', title: '内控', html: `<p>流程梳理、控制点识别；缺陷沟通。</p>` }
        ], refs: [] } },
      { title: '实习复盘', brief: '留下什么。',
        q: [
          { stem: '实习应留下的成果是：', options: ['账务/审计底稿与复盘', '工牌', '照片', '评语'], answer: 0, explain: '成果。' },
          { stem: '实习日志推荐写法：', options: ['问题—做法—结果—反思', '流水账', '只写结论', '只写感受'], answer: 0, explain: '结构化。' },
          { stem: '面试讲实习最佳结构：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'output', title: '成果', html: `<p>实操记录、软件技能、案例；可量化。</p>` },
          { id: 'review', title: '复盘', html: `<p>每周五行；讲清你的贡献与学到的东西。</p>` }
        ], refs: [] } }
    ] },
    { name: '考研与求职', chapters: [
      { title: '考研方向', brief: '会计与审计。',
        q: [
          { stem: '会计考研的常见方向是：', options: ['会计学、MPAcc、审计专硕', '只有会计学', '只有 MPAcc', '只有审计'], answer: 0, explain: '多方向。' },
          { stem: 'MPAcc 初试科目是：', options: ['管理类联考综合 + 英语二', '政治 + 数学', '专业课 + 英语', '只有综合'], answer: 0, explain: '199+204。' },
          { stem: '择校最应考虑：', options: ['方向、导师与就业资源', '城市', '学费', '宿舍'], answer: 0, explain: '匹配。' }
        ],
        doc: { lead: '这一章讲方向。', sections: [
          { id: 'paths', title: '方向', html: `<p>会计学硕、MPAcc、审计专硕、税务专硕。</p>` },
          { id: 'subjects', title: '科目', html: `<p>学硕：政治/英语/数学/专业课；专硕：199+204。</p>` }
        ], refs: [] } },
      { title: '专业课复习', brief: '会计与财管。',
        q: [
          { stem: '会计复习主线是：', options: ['要素—确认计量—报表—特殊业务', '只背分录', '只做计算', '只看真题'], answer: 0, explain: '主线。' },
          { stem: '财管复习重点是：', options: ['时间价值、风险、预算、资本结构', '只有时间价值', '只有预算', '只有结构'], answer: 0, explain: '多块。' },
          { stem: '综合题关键是：', options: ['业务判断 + 分录 + 计算', '猜', '背答案', '跳过'], answer: 0, explain: '判断。' }
        ],
        doc: { lead: '这一章讲复习。', sections: [
          { id: 'accounting', title: '会计', html: `<p>准则要点、典型业务分录；合并与特殊业务。</p>` },
          { id: 'finance', title: '财管', html: `<p>计算题模板；成本与管理会计。</p>` }
        ], refs: [] } },
      { title: '求职方向', brief: '企业与事务所。',
        q: [
          { stem: '会计毕业生的常见去向不包括：', options: ['企业财务', '会计师事务所', '银行/券商', '外科医生'], answer: 3, explain: '专业限制。' },
          { stem: '事务所看重：', options: ['专业基础、Excel 与抗压', '只有证书', '只有英语', '只有成绩'], answer: 0, explain: '综合。' },
          { stem: '求职最加分的材料：', options: ['实习经历与证书（CPA 科目）', '社团', '成绩单', '照片'], answer: 0, explain: '经历证书。' }
        ],
        doc: { lead: '这一章讲就业。', sections: [
          { id: 'paths', title: '路径', html: `<p>企业财务、事务所、银行券商、公务员、读研。</p>` },
          { id: 'skills', title: '能力', html: `<p>准则应用、Excel/ERP、CPA；沟通与细致。</p>` }
        ], refs: [] } },
      { title: '面试', brief: '展示能力。',
        q: [
          { stem: '会计面试常考：', options: ['准则应用与业务处理', '只有编程', '只有英语', '只有性格'], answer: 0, explain: '专业。' },
          { stem: '行为面试常用：', options: ['STAR 结构', '自由发挥', '只讲结果', '只讲感受'], answer: 0, explain: 'STAR。' },
          { stem: '被问到不会的问题应：', options: ['说明思路并诚实承认', '编造', '沉默', '转移话题'], answer: 0, explain: '诚实。' }
        ],
        doc: { lead: '这一章讲面试。', sections: [
          { id: 'tech', title: '技术', html: `<p>收入确认、金融工具、合并；税务处理。</p>` },
          { id: 'behavior', title: '行为', html: `<p>STAR、细致与合规案例；反问。</p>` }
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
