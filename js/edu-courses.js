/* ==========================================================
   edu-courses.js · 「教育学」专业：12 门课 × 3 章
   --------------------------------------------------------
   每学期 3 门课、每门 3 章 = 9 关；共 36 关。
   替换 education.js 里教育学原来的「4 门课 × 2 章」。
   ========================================================== */

(function () {
  var MAJOR = 'education-教育学';
  var TITLES = stageTitlesOf('education');

  var COURSES = [
    /* ---- 大一 · 教育学的眼睛 ---- */
    {
      name: '教育学原理',
      chapters: [
        {
          title: '教育是什么',
          brief: '教育不是"把知识倒进脑子"，而是有目的地培养人。',
          q: [
            { stem: '教育的本质属性是：', options: ['传递知识', '有目的地培养人的社会活动', '考试选拔', '学校管理'], answer: 1, explain: '知识传递是手段；考试与选拔是制度功能。' },
            { stem: '广义教育与狭义教育的区别是：', options: ['是否在学校进行', '是否有教师', '是否有教材', '是否收费'], answer: 0, explain: '狭义指学校教育，广义含家庭与社会教育。' },
            { stem: '教育的基本要素不包括：', options: ['教育者', '受教育者', '教育影响', '教育经费'], answer: 3, explain: '三要素：教育者、受教育者、教育影响（内容与手段）。' }
          ],
          doc: {
            lead: '这一章建立"教育"这个概念的基本坐标。',
            sections: [
              { id: 'concept', title: '概念', html: `<p>广义：增进知识与技能、影响思想品德的活动；狭义：学校教育。</p>` },
              { id: 'elements', title: '三要素', html: `<p>教育者、受教育者、教育影响。三者关系决定教学模式。</p>
<div class="doc-tip">💡 讨论任何教育问题，先问：这是目的问题、内容问题，还是方法问题？</div>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '教育目的与制度',
          brief: '培养什么人、用什么结构培养。',
          q: [
            { stem: '我国教育的根本任务是：', options: ['提高升学率', '立德树人', '培养专才', '普及义务教育'], answer: 1, explain: '根本任务是立德树人。' },
            { stem: '义务教育的特征是：', options: ['强制、免费、普及', '自愿、收费', '只覆盖城市', '只覆盖初中'], answer: 0, explain: '强制性、免费性、普及性。' },
            { stem: '学制的纵向层级不包括：', options: ['学前教育', '初等教育', '中等教育', '职业教育'], answer: 3, explain: '职业教育属横向类型，不是纵向层级。' }
          ],
          doc: {
            lead: '这一章讲目的与制度。',
            sections: [
              { id: 'aim', title: '三层目的', html: `<p>国家总目的 → 学校培养目标 → 课堂教学目标，三层必须一致。</p>` },
              { id: 'system', title: '制度', html: `<p>学制（纵向层级 + 横向类型）、义务教育、三级课程管理。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '教师与学生',
          brief: '师生关系是教育关系的核心。',
          q: [
            { stem: '新课程倡导的师生关系是：', options: ['教师权威', '民主平等、尊重信任', '放任', '对立'], answer: 1, explain: '新型师生关系强调民主平等与相互尊重。' },
            { stem: '教师专业发展的主要途径不包括：', options: ['师范教育', '在职培训', '自我反思', '延长工时'], answer: 3, explain: '专业发展靠学习、实践与反思。' },
            { stem: '学生的"向师性"指的是：', options: ['学生依赖教师', '学生有模仿与亲近教师的倾向', '学生反抗', '学生独立'], answer: 1, explain: '向师性是学生心理特点之一。' }
          ],
          doc: {
            lead: '这一章讲两类主体的角色。',
            sections: [
              { id: 'teacher', title: '教师', html: `<p>角色：传道授业解惑者、管理者、研究者；专业素养含师德、知识、能力。</p>` },
              { id: 'student', title: '学生', html: `<p>学生是发展中的人、独特的人、具有独立意义的人。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        }
      ]
    },
    {
      name: '心理学基础',
      chapters: [
        {
          title: '感知、记忆与注意',
          brief: '学习的入口：注意选择、感知组织、记忆编码。',
          q: [
            { stem: '短时记忆的容量大约是：', options: ['3±1', '7±2 个组块', '20 个', '无限'], answer: 1, explain: '米勒的"神奇数字 7±2"。' },
            { stem: '遗忘曲线表明遗忘的进程是：', options: ['先慢后快', '先快后慢', '匀速', '不遗忘'], answer: 1, explain: '艾宾浩斯遗忘曲线。' },
            { stem: '注意的稳定性指：', options: ['注意的转移', '长时间保持在同一对象上', '注意的分配', '注意的广度'], answer: 1, explain: '与转移、分配、广度并列。' }
          ],
          doc: {
            lead: '这一章讲三个认知过程。',
            sections: [
              { id: 'attention', title: '注意', html: `<p>稳定性、广度、分配、转移；教学节奏影响注意保持。</p>` },
              { id: 'memory', title: '记忆', html: `<p>感觉记忆→短时→长时；组块化、复述、精细加工策略。</p>
<div class="doc-tip">💡 遗忘先快后慢 → 及时复习比考前突击有效。</div>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '动机与情绪',
          brief: '想不想学，往往比会不会学更关键。',
          q: [
            { stem: '内部动机与外部动机的区别是：', options: ['是否来自活动本身的兴趣', '是否强烈', '是否持久', '是否有奖励'], answer: 0, explain: '内部动机源于兴趣与胜任感。' },
            { stem: '自我决定论认为最基本的心理需要是：', options: ['自主、胜任、归属', '安全、尊重', '成就、权力', '生理、安全'], answer: 0, explain: 'Deci & Ryan 的三大需要。' },
            { stem: '过度奖励可能：', options: ['增强内部动机', '削弱内部动机（过度理由效应）', '无影响', '提高成绩'], answer: 1, explain: '外部奖励可能挤出内在兴趣。' }
          ],
          doc: {
            lead: '这一章讲动机理论。',
            sections: [
              { id: 'theories', title: '三种理论', html: `<ul><li>成就动机</li><li>归因理论（韦纳）</li><li>自我决定论</li></ul>` },
              { id: 'use', title: '教学启示', html: `<p>给自主空间、设置有挑战但可达的目标、反馈针对过程而非天赋。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '个体差异',
          brief: '同样教法，不同学生效果不同。',
          q: [
            { stem: '场独立与场依存描述的是：', options: ['认知风格', '智力水平', '动机类型', '情绪状态'], answer: 0, explain: '威特金的认知风格维度。' },
            { stem: '多元智能理论的提出者是：', options: ['加德纳', '斯金纳', '皮亚杰', '布鲁纳'], answer: 0, explain: '加德纳提出八种智能。' },
            { stem: '差异化教学的核心是：', options: ['降低标准', '根据学生差异调整内容、过程与产出', '统一进度', '只教优等生'], answer: 1, explain: '差异化不等于降低要求。' }
          ],
          doc: {
            lead: '这一章讲差异与因材施教。',
            sections: [
              { id: 'styles', title: '认知风格', html: `<p>场独立/场依存、冲动/沉思、整体/序列。</p>` },
              { id: 'diff', title: '差异化', html: `<p>内容、过程、产出、环境四个维度调整；分层作业与弹性分组。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        }
      ]
    },
    {
      name: '教育社会学',
      chapters: [
        {
          title: '教育与社会分层',
          brief: '学校是流动的阶梯，也可能是再生产的机器。',
          q: [
            { stem: '布迪厄"文化资本"指的是：', options: ['金钱', '语言、品味、学历等文化资源', '房产', '社会关系'], answer: 1, explain: '文化资本通过家庭传递，影响学业成就。' },
            { stem: '教育再生产理论强调：', options: ['教育促进平等', '教育复制既有阶层结构', '教育与阶层无关', '教育消灭差异'], answer: 1, explain: '批判教育学视角。' },
            { stem: '教育的社会流动功能主要指：', options: ['人口迁移', '个体通过教育改变社会地位', '城市化', '移民'], answer: 1, explain: '向上或向下流动。' }
          ],
          doc: {
            lead: '这一章讲教育的两面性。',
            sections: [
              { id: 'capital', title: '文化资本', html: `<p>具体化、客观化、制度化三种形态；家庭早期语言与习惯的差异被学校中性化评价。</p>` },
              { id: 'mobility', title: '流动与再生产', html: `<p>教育既促进流动，也可能通过分流与评价再生产阶层。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '学校组织与制度',
          brief: '学校不是孤岛：科层、制度与场域。',
          q: [
            { stem: '学校组织的科层化特征不包括：', options: ['层级分工', '成文规章', '非人格化', '完全自治'], answer: 3, explain: '科层化强调规则与层级。' },
            { stem: '制度化教育的主要标志是：', options: ['有教师', '有固定学制、课程与考试体系', '有教室', '有教材'], answer: 1, explain: '制度化=体系化、标准化。' },
            { stem: '隐性课程指的是：', options: ['未开设的课', '学校制度与文化中潜移默化的影响', '选修课', '补习班'], answer: 1, explain: '如校规、师生互动方式传递的价值。' }
          ],
          doc: {
            lead: '这一章讲学校作为组织。',
            sections: [
              { id: 'org', title: '组织特征', html: `<p>科层制、专业与行政的双重系统、松散耦合。</p>` },
              { id: 'hidden', title: '隐性课程', html: `<p>制度、仪式、空间、师生互动传递的规范与价值。</p>
<div class="doc-tip">💡 隐性课程往往比显性课程更能塑造行为。</div>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '家庭与社区',
          brief: '学校之外的两个教育场。',
          q: [
            { stem: '家庭教育的特点不包括：', options: ['先导性', '感染性', '系统性', '终身性'], answer: 2, explain: '系统性是学校教育的特征。' },
            { stem: '家校合作最有效的方式是：', options: ['只开家长会', '建立常态沟通与共同目标', '让家长批改作业', '互不干涉'], answer: 1, explain: '合作需要机制与共同目标。' },
            { stem: '社区教育资源包括：', options: ['图书馆、博物馆、公益组织', '只有学校', '只有家庭', '只有网络'], answer: 0, explain: '社区提供实践与社会化场景。' }
          ],
          doc: {
            lead: '这一章讲三教合一。',
            sections: [
              { id: 'family', title: '家庭', html: `<p>先导性、感染性、终身性；教养方式（权威型、专制型、放任型、忽视型）。</p>` },
              { id: 'community', title: '社区', html: `<p>场馆、志愿服务、社会实践；家校社协同育人机制。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        }
      ]
    },

    /* ---- 大二 · 学习与发展 ---- */
    {
      name: '发展心理学',
      chapters: [
        {
          title: '认知发展',
          brief: '皮亚杰的阶段与维果茨基的支架。',
          q: [
            { stem: '皮亚杰具体运算阶段大致是：', options: ['0–2 岁', '2–7 岁', '7–11 岁', '11 岁以后'], answer: 2, explain: '四个阶段：感知运动、前运算、具体运算、形式运算。' },
            { stem: '维果茨基"最近发展区"的教学启示是：', options: ['重复已会内容', '教学指向跳一跳可达到的水平并提供支架', '只教最难', '自学'], answer: 1, explain: 'ZPD 与支架式教学。' },
            { stem: '守恒概念出现在哪个阶段？', options: ['感知运动', '前运算', '具体运算', '形式运算'], answer: 2, explain: '具体运算阶段获得守恒。' }
          ],
          doc: {
            lead: '这一章讲两条认知发展路线。',
            sections: [
              { id: 'piaget', title: '皮亚杰', html: `<p>四阶段、同化与顺应、平衡化。</p>` },
              { id: 'vygotsky', title: '维果茨基', html: `<p>社会文化取向、ZPD、支架、语言与思维。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '社会性与人格',
          brief: '依恋、同伴、自我同一性。',
          q: [
            { stem: '埃里克森青春期的主要任务是：', options: ['信任', '自主', '自我同一性', '亲密'], answer: 2, explain: '同一性 vs 角色混乱。' },
            { stem: '安全型依恋的特点是：', options: ['母亲离开时极度焦虑', '母亲在时安心探索，离开时不安，回来易安抚', '完全无视', '回避'], answer: 1, explain: '安斯沃斯陌生情境实验。' },
            { stem: '同伴关系对发展的作用不包括：', options: ['提供情感支持', '练习社会技能', '替代家庭', '影响自我概念'], answer: 2, explain: '同伴不能替代家庭的功能。' }
          ],
          doc: {
            lead: '这一章讲社会性发展。',
            sections: [
              { id: 'attachment', title: '依恋', html: `<p>安全型、回避型、矛盾型、混乱型；早期依恋影响后续关系。</p>` },
              { id: 'identity', title: '同一性', html: `<p>埃里克森八阶段；青春期的探索与承诺。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '发展的影响因素',
          brief: '遗传与环境：不是二选一，而是交互。',
          q: [
            { stem: '遗传与环境的关系，现代观点认为是：', options: ['遗传决定', '环境决定', '交互作用', '互不相关'], answer: 2, explain: '基因-环境交互与相关。' },
            { stem: '关键期指的是：', options: ['任何时期都一样', '某些能力发展的敏感窗口', '青春期', '老年期'], answer: 1, explain: '如语言习得的敏感期。' },
            { stem: '生态系统理论（布朗芬布伦纳）包含：', options: ['微观、中间、外层、宏观系统', '只有家庭', '只有学校', '只有社会'], answer: 0, explain: '多层环境系统。' }
          ],
          doc: {
            lead: '这一章讲发展的条件。',
            sections: [
              { id: 'nature', title: '遗传与环境', html: `<p>交互作用、基因-环境相关（被动、唤起、主动）。</p>` },
              { id: 'context', title: '生态系统', html: `<p>微观、中间、外层、宏观、时间系统。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        }
      ]
    },
    {
      name: '学习心理学',
      chapters: [
        {
          title: '三大学习理论',
          brief: '行为、认知、建构：三种解释同一课堂。',
          q: [
            { stem: '斯金纳的操作性条件作用强调：', options: ['顿悟', '强化与惩罚塑造行为', '内在动机', '社会互动'], answer: 1, explain: '行为主义核心。' },
            { stem: '建构主义认为知识：', options: ['被动接收', '学习者基于经验主动建构', '先天具有', '刺激反应'], answer: 1, explain: '主动建构与社会情境。' },
            { stem: '发现学习的倡导者是：', options: ['布鲁纳', '斯金纳', '巴甫洛夫', '桑代克'], answer: 0, explain: '布鲁纳倡导发现学习与学科结构。' }
          ],
          doc: {
            lead: '这一章对照三派。',
            sections: [
              { id: 'three', title: '三派', html: `<ul><li>行为：联结与强化</li><li>认知：信息加工与策略</li><li>建构：主动建构与社会互动</li></ul>` },
              { id: 'use', title: '怎么用', html: `<p>技能训练用行为原理，知识结构化用认知策略，项目式学习用建构情境。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '学习策略与迁移',
          brief: '会学比学会重要。',
          q: [
            { stem: '元认知指的是：', options: ['对认知的认知', '记忆容量', '智力水平', '动机'], answer: 0, explain: '计划、监控、调节。' },
            { stem: '促进迁移最有效的方式是：', options: ['大量重复', '理解原理并多样化练习', '只做题', '只背答案'], answer: 1, explain: '原理理解 + 变式练习。' },
            { stem: '精细加工策略的例子是：', options: ['反复朗读', '用自己的话解释并与旧知识联系', '划线', '抄写'], answer: 1, explain: '精细加工强调建立联系。' }
          ],
          doc: {
            lead: '这一章讲策略与迁移。',
            sections: [
              { id: 'strategies', title: '三类策略', html: `<ul><li>认知：复述、精加工、组织</li><li>元认知：计划、监控、调节</li><li>资源管理：时间、环境、求助</li></ul>` },
              { id: 'transfer', title: '迁移', html: `<p>近迁移与远迁移；原理理解与变式练习是关键。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '动机与自我调节',
          brief: '从"要我学"到"我要学"。',
          q: [
            { stem: '自我效能感指的是：', options: ['对自己能否完成任务的信念', '实际能力', '外部奖励', '情绪'], answer: 0, explain: '班杜拉的概念。' },
            { stem: '提高自我效能感最有效的来源是：', options: ['口头表扬', '成功经验（掌握性体验）', '榜样', '生理状态'], answer: 1, explain: '亲历成功最有说服力。' },
            { stem: '成长型思维认为能力：', options: ['固定不变', '可以通过努力发展', '由遗传决定', '与努力无关'], answer: 1, explain: '德韦克的成长型思维。' }
          ],
          doc: {
            lead: '这一章讲动机的自我系统。',
            sections: [
              { id: 'efficacy', title: '自我效能', html: `<p>四个来源：掌握性体验、替代经验、言语说服、生理情绪状态。</p>` },
              { id: 'mindset', title: '思维模式', html: `<p>固定型 vs 成长型；表扬努力与策略而非天赋。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        }
      ]
    },
    {
      name: '课程论',
      chapters: [
        {
          title: '课程的类型与层次',
          brief: '课程不只是一本书。',
          q: [
            { stem: '课程的三级管理是：', options: ['国家、地方、学校', '中央、省、市', '小学、初中、高中', '必修、选修、活动'], answer: 0, explain: '三级课程管理。' },
            { stem: '隐性课程的特点是：', options: ['有计划、显性', '潜移默化、非正式', '只在校外', '只指选修'], answer: 1, explain: '隐性课程在学校环境中潜移默化。' },
            { stem: '课程标准的制定主体通常是：', options: ['国家教育行政部门', '学校', '教师个人', '出版社'], answer: 0, explain: '国家课程标准。' }
          ],
          doc: {
            lead: '这一章讲课程的层次与类型。',
            sections: [
              { id: 'levels', title: '三个层次', html: `<p>课程计划 → 课程标准 → 教材。</p>` },
              { id: 'types', title: '类型', html: `<p>学科/活动、必修/选修、显性/隐性、国家/地方/校本。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '课程设计',
          brief: '泰勒原理：目标、选择、组织、评价。',
          q: [
            { stem: '泰勒原理的四个基本问题是：', options: ['目标、经验选择、组织、评价', '计划、执行、检查、处理', '分析、设计、开发、实施', '导入、新授、练习、小结'], answer: 0, explain: '课程设计的经典框架。' },
            { stem: '课程目标的行为化表述要求：', options: ['可观察、可测量', '越抽象越好', '只写知识', '不写动词'], answer: 0, explain: '行为动词 + 条件 + 标准。' },
            { stem: '课程内容组织的原则包括：', options: ['连续性、顺序性、整合性', '随机性', '越多越好', '只按难度'], answer: 0, explain: '泰勒的三条组织准则。' }
          ],
          doc: {
            lead: '这一章讲课程设计框架。',
            sections: [
              { id: 'tyler', title: '泰勒原理', html: `<ol><li>目标</li><li>经验选择</li><li>组织</li><li>评价</li></ol>` },
              { id: 'goal', title: '目标表述', html: `<p>行为动词 + 条件 + 标准；避免"理解""体会"。</p>
<div class="doc-tip">💡 目标是课程的锚，评价必须回指目标。</div>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '课程实施与评价',
          brief: '课程不是发下去就生效。',
          q: [
            { stem: '课程实施中"忠实取向"意味着：', options: ['严格按方案执行', '随意调整', '完全不执行', '只做活动'], answer: 0, explain: '忠实、相互适应、创生三种取向。' },
            { stem: '校本课程开发的主体是：', options: ['学校与教师', '出版社', '教育部', '家长'], answer: 0, explain: '校本课程强调学校本位。' },
            { stem: '课程评价的 CIPP 模型包括：', options: ['背景、输入、过程、成果', '计划、执行、检查、改进', '知识、能力、情感', '自评、互评、师评'], answer: 0, explain: 'Stufflebeam 的 CIPP。' }
          ],
          doc: {
            lead: '这一章讲实施与评价。',
            sections: [
              { id: 'implementation', title: '实施', html: `<p>忠实、相互适应、创生三种取向；教师是实施的关键。</p>` },
              { id: 'evaluation', title: '评价', html: `<p>CIPP：背景、输入、过程、成果；形成性与总结性结合。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        }
      ]
    },

    /* ---- 大三 · 教学能力 ---- */
    {
      name: '教学论',
      chapters: [
        {
          title: '教学目标与原则',
          brief: '目标可测，教学才有方向。',
          q: [
            { stem: '布鲁姆认知目标分类的最高层次是：', options: ['记忆', '理解', '应用', '创造'], answer: 3, explain: '记忆、理解、应用、分析、评价、创造。' },
            { stem: '教学原则中"直观性原则"的依据是：', options: ['学生以具体形象思维为主', '教学要快', '教师主导', '考试要求'], answer: 0, explain: '符合认知发展特点。' },
            { stem: '一节好课的首要标准通常是：', options: ['气氛活跃', '目标明确且达成', '教师讲得多', 'PPT 精美'], answer: 1, explain: '目标达成是核心。' }
          ],
          doc: {
            lead: '这一章讲目标与原则。',
            sections: [
              { id: 'bloom', title: '目标分类', html: `<p>认知（记忆→创造）、动作技能、情感态度三个领域。</p>` },
              { id: 'principles', title: '原则', html: `<p>直观、启发、循序渐进、巩固、因材施教、理论联系实际。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '教学方法与模式',
          brief: '讲授、讨论、探究、项目：各有适用场景。',
          q: [
            { stem: '探究式教学的核心是：', options: ['教师讲解', '学生围绕问题自主探究', '大量练习', '背诵'], answer: 1, explain: '问题驱动、自主建构。' },
            { stem: '讲授法的主要优势是：', options: ['效率高、系统性强', '互动多', '个性化', '培养创新'], answer: 0, explain: '适合系统传授，但易被动。' },
            { stem: '翻转课堂的特点是：', options: ['课上听讲、课下作业', '课前自学视频、课上讨论练习', '只上网课', '取消作业'], answer: 1, explain: '时间重新分配。' }
          ],
          doc: {
            lead: '这一章讲方法选择。',
            sections: [
              { id: 'methods', title: '四类方法', html: `<ul><li>讲授：系统高效</li><li>讨论：思辨表达</li><li>探究：问题解决</li><li>项目：综合应用</li></ul>` },
              { id: 'choose', title: '怎么选', html: `<p>看目标、内容、学生与课时；一堂课常需组合使用。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '教学评价',
          brief: '评价是教学的一部分，不是终点。',
          q: [
            { stem: '形成性评价的目的是：', options: ['排名', '提供反馈、改进教学', '鉴定', '选拔'], answer: 1, explain: '过程性、改进导向。' },
            { stem: '评价的"效度"指的是：', options: ['测到了想测的东西', '测量稳定', '难度适中', '区分度高'], answer: 0, explain: '效度=测对了；信度=测得稳。' },
            { stem: '表现性评价最适合评价：', options: ['记忆', '综合运用与实际问题解决', '选择题', '计算速度'], answer: 1, explain: '通过任务表现评价高阶能力。' }
          ],
          doc: {
            lead: '这一章讲评价的分类与质量。',
            sections: [
              { id: 'types', title: '分类', html: `<p>诊断性、形成性、总结性；纸笔、表现性、档案袋。</p>` },
              { id: 'quality', title: '质量指标', html: `<p>信度、效度、难度、区分度。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        }
      ]
    },
    {
      name: '教育研究方法',
      chapters: [
        {
          title: '研究设计',
          brief: '先有可回答的问题。',
          q: [
            { stem: '教育研究问题的基本要求是：', options: ['宏大', '具体、可研究、有价值', '只能理论', '无需数据'], answer: 1, explain: '可行性与价值。' },
            { stem: '实验研究的关键特征是：', options: ['随机分组与控制变量', '问卷', '访谈', '观察'], answer: 0, explain: '操纵自变量、控制无关变量。' },
            { stem: '行动研究的主体是：', options: ['专职研究者', '一线教师', '学生', '家长'], answer: 1, explain: '教师在实践中研究自己的问题。' }
          ],
          doc: {
            lead: '这一章讲设计类型。',
            sections: [
              { id: 'types', title: '四类', html: `<ul><li>实验/准实验</li><li>调查</li><li>个案</li><li>行动研究</li></ul>` },
              { id: 'design', title: '要素', html: `<p>问题、对象、方法、工具、伦理。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '数据收集',
          brief: '问卷、访谈、观察、测验。',
          q: [
            { stem: '问卷预调查的作用是：', options: ['凑样本', '检验题目与信效度', '提高回收率', '增加预算'], answer: 1, explain: '小规模试测后修订。' },
            { stem: '课堂观察记录应当：', options: ['区分事实与解释', '只写结论', '只记问题', '事后补记'], answer: 0, explain: '客观描述与解释分开。' },
            { stem: '访谈中追问"能举个例子吗"的作用是：', options: ['获得具体细节', '打断对方', '节省时间', '引导答案'], answer: 0, explain: '具体化追问。' }
          ],
          doc: {
            lead: '这一章讲工具与技巧。',
            sections: [
              { id: 'tools', title: '四种工具', html: `<p>问卷、访谈、观察、测验；各有信效度要求。</p>` },
              { id: 'tips', title: '技巧', html: `<p>预调查、试访、观察记录分栏、录音转写。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '分析与写作',
          brief: '数据要能支持结论。',
          q: [
            { stem: '教育实验报告中必须报告：', options: ['效果量与显著性', '只有均值', '只有结论', '只有描述'], answer: 0, explain: '效应量说明实际意义。' },
            { stem: '质性资料的编码过程是：', options: ['贴标签、归类、找主题', '统计频次', '随机抽样', '检验假设'], answer: 0, explain: '开放编码到主题。' },
            { stem: '研究报告的结论应当：', options: ['回应问题并说明局限', '夸大推广', '只写建议', '只写数据'], answer: 0, explain: '有节制的结论。' }
          ],
          doc: {
            lead: '这一章讲分析与表达。',
            sections: [
              { id: 'analysis', title: '分析', html: `<p>定量：描述、检验、效应量；定性：编码、主题、三角验证。</p>` },
              { id: 'write', title: '写作', html: `<p>问题—方法—结果—讨论—局限。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        }
      ]
    },
    {
      name: '教学技能训练',
      chapters: [
        {
          title: '导入与提问',
          brief: '好的开头抓住注意，好的提问带动思考。',
          q: [
            { stem: '课堂导入最核心的作用是：', options: ['活跃气氛', '激发兴趣、建立新旧知识联系', '展示才艺', '拖延时间'], answer: 1, explain: '导入服务于学习动机与认知衔接。' },
            { stem: '封闭式问题与开放式问题的区别是：', options: ['答案是否唯一', '难度', '长度', '语气'], answer: 0, explain: '开放问题促进高阶思维。' },
            { stem: '候答时间（wait time）延长通常：', options: ['降低参与', '提高回答质量与参与度', '无影响', '加快进度'], answer: 1, explain: '给学生思考时间。' }
          ],
          doc: {
            lead: '这一章讲两项基本功。',
            sections: [
              { id: 'lead', title: '导入', html: `<p>情境导入、问题导入、复习导入、故事导入；要短、要相关。</p>` },
              { id: 'question', title: '提问', html: `<p>层次（记忆/理解/应用/分析）、候答时间、追问与转问。</p>
<div class="doc-tip">💡 一个问题问完全班再点名，参与度会明显提高。</div>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '讲解与板书',
          brief: '讲清楚是硬功夫。',
          q: [
            { stem: '讲解中"举例"的主要作用是：', options: ['活跃气氛', '把抽象概念具体化', '延长课堂', '展示知识'], answer: 1, explain: '例证支持理解。' },
            { stem: '板书设计应当：', options: ['写满黑板', '结构清晰、突出重点', '只写标题', '随意'], answer: 1, explain: '板书是思维的可视化。' },
            { stem: '语速与停顿的控制属于：', options: ['教学语言技能', '板书技能', '提问技能', '管理技能'], answer: 0, explain: '语言技能的一部分。' }
          ],
          doc: {
            lead: '这一章讲表达与呈现。',
            sections: [
              { id: 'explain', title: '讲解', html: `<p>结构：是什么—为什么—怎么用；举例、类比、对比。</p>` },
              { id: 'board', title: '板书', html: `<p>主副板书分区、关键词、逻辑线；与 PPT 分工。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '课堂管理与微格',
          brief: '管得住，教得实。',
          q: [
            { stem: '课堂管理的第一原则是：', options: ['严惩', '预防为主、规则清晰', '放任', '只表扬'], answer: 1, explain: '清晰规则与流程能预防多数问题。' },
            { stem: '微格教学的核心是：', options: ['完整上课', '拆分技能、短时试讲、录像反馈', '写教案', '听课'], answer: 1, explain: '5–10 分钟聚焦单一技能。' },
            { stem: '处理课堂突发事件的顺序通常是：', options: ['立即训斥', '稳定情绪、了解情况、课后处理', '忽略', '停课'], answer: 1, explain: '不打断教学节奏。' }
          ],
          doc: {
            lead: '这一章讲管理与训练。',
            sections: [
              { id: 'manage', title: '管理', html: `<p>规则上墙、指令具体、站位覆盖全班、奖惩一致。</p>` },
              { id: 'micro', title: '微格', html: `<p>目标单一、时长 5–10 分钟、录像复盘、同伴互评。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        }
      ]
    },

    /* ---- 大四 · 实践与出口 ---- */
    {
      name: '教育实习',
      chapters: [
        {
          title: '备课与教案',
          brief: '教案是教学的设计图。',
          q: [
            { stem: '一份完整教案通常不包括：', options: ['教学目标', '教学重难点', '教学过程', '教师个人简历'], answer: 3, explain: '教案围绕教学本身。' },
            { stem: '教学重难点的区别是：', options: ['重点是核心内容，难点是学生难理解之处', '没有区别', '难点更简单', '重点更长'], answer: 0, explain: '重点看内容地位，难点看学习障碍。' },
            { stem: '教案中"学情分析"的作用是：', options: ['形式要求', '确定起点与教学策略', '凑字数', '给领导看'], answer: 1, explain: '基于学生的真实起点设计。' }
          ],
          doc: {
            lead: '这一章讲备课四件事。',
            sections: [
              { id: 'lesson', title: '教案结构', html: `<p>目标、重难点、学情、方法、过程、板书、作业、反思。</p>` },
              { id: 'prepare', title: '备课三备', html: `<p>备教材、备学生、备教法。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '上课与班级工作',
          brief: '站上讲台，也站进班级。',
          q: [
            { stem: '新教师上课最常见的问题是：', options: ['知识不足', '节奏把控与课堂管理', '板书', '普通话'], answer: 1, explain: '节奏与管理是新手主要挑战。' },
            { stem: '班主任工作的核心是：', options: ['抓成绩', '班级建设与学生发展', '开会', '收费'], answer: 1, explain: '班集体建设与个别教育。' },
            { stem: '与家长沟通学生问题，最有效的方式是：', options: ['笼统评价', '描述具体行为并共同商量', '只报忧', '不见面'], answer: 1, explain: '具体、合作、有方案。' }
          ],
          doc: {
            lead: '这一章讲教学与班级两条线。',
            sections: [
              { id: 'teaching', title: '上课', html: `<p>导入—新授—练习—小结；时间分配与节奏；关注全体。</p>` },
              { id: 'class', title: '班级', html: `<p>班规、班干部、主题班会、个别谈话、家校沟通。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '实习复盘',
          brief: '把三个月变成能力证明。',
          q: [
            { stem: '实习复盘最有价值的写法是：', options: ['问题—做法—结果—反思', '工作清单', '抒情', '考勤'], answer: 0, explain: '结构化复盘可转化为面试素材。' },
            { stem: '实习中最该主动争取的是：', options: ['完整上过一个单元', '轻松任务', '加班', '出差'], answer: 0, explain: '完整教学经验最稀缺。' },
            { stem: '录课复盘时应重点看：', options: ['自己的语言与节奏、学生反应', '画面色调', '背景音乐', '字幕'], answer: 0, explain: '关注教学行为与学习状态。' }
          ],
          doc: {
            lead: '这一章讲复盘方法。',
            sections: [
              { id: 'review', title: '复盘', html: `<p>每周五行：做了什么、遇到什么、怎么解决、学到什么。</p>` },
              { id: 'video', title: '录课', html: `<p>看三处：提问后的等待、学生的参与、时间分配。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        }
      ]
    },
    {
      name: '毕业论文',
      chapters: [
        {
          title: '选题与文献',
          brief: '小问题、有材料、能完成。',
          q: [
            { stem: '教育学本科论文最合适的选题是：', options: ['"论素质教育"', '某校某年级具体问题的调查与改进', '纯理论综述', '翻译'], answer: 1, explain: '小切口 + 一手材料。' },
            { stem: '文献综述的作用是：', options: ['凑字数', '定位缺口', '展示阅读量', '复述教材'], answer: 1, explain: '为问题定位。' },
            { stem: '开题报告最应写清：', options: ['问题、方法、可行性', '致谢', '格式', '篇幅'], answer: 0, explain: '三要素决定能否完成。' }
          ],
          doc: {
            lead: '这一章讲选题与开题。',
            sections: [
              { id: 'topic', title: '选题', html: `<p>三筛：一句话说清、有一手材料、一学期能做完。</p>` },
              { id: 'proposal', title: '开题', html: `<p>问题—文献—方法—时间表。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '数据与写作',
          brief: '一手材料是关键。',
          q: [
            { stem: '教育调查最常见的样本问题是：', options: ['样本非随机、无法推断', '样本太大', '没有问卷', '没有统计'], answer: 0, explain: '方便抽样只能描述。' },
            { stem: '论文方法部分应写清：', options: ['对象、工具、过程与局限', '只写"问卷调查"', '只写样本量', '不写'], answer: 0, explain: '可复现性。' },
            { stem: '结论部分应当：', options: ['回应问题、说明局限', '夸大推广', '只写建议', '只写数据'], answer: 0, explain: '有节制的判断。' }
          ],
          doc: {
            lead: '这一章讲材料与写作。',
            sections: [
              { id: 'data', title: '材料', html: `<p>问卷、访谈、课堂观察、成绩数据；说明来源与处理。</p>` },
              { id: 'write', title: '写作', html: `<p>问题—方法—结果—讨论—局限；图表自足。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '答辩与修改',
          brief: '讲清证据链。',
          q: [
            { stem: '答辩陈述最该突出：', options: ['问题、方法、发现', '篇幅', '致谢', '文献量'], answer: 0, explain: '三段式。' },
            { stem: '被问"样本能否推广"，最好的回答是：', options: ['当然能', '说明样本性质与推论边界', '回避', '改口'], answer: 1, explain: '承认局限。' },
            { stem: '修改阶段最优先处理：', options: ['论证与证据漏洞', '格式', '篇幅', '致谢'], answer: 0, explain: '先实质后形式。' }
          ],
          doc: {
            lead: '这一章讲答辩与修改。',
            sections: [
              { id: 'talk', title: '陈述', html: `<p>5 分钟：问题 1、方法 1、发现 2、局限 1。</p>` },
              { id: 'fix', title: '修改', html: `<p>按评审意见逐条处理并标注位置。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        }
      ]
    },
    {
      name: '考编与考研',
      chapters: [
        {
          title: '教师招聘：笔试',
          brief: '教育综合 + 学科知识。',
          q: [
            { stem: '教师招聘笔试通常包括：', options: ['教育综合知识 + 学科专业知识', '只考教育学', '只考学科', '只考英语'], answer: 0, explain: '多数地区两科。' },
            { stem: '教育综合知识的核心模块是：', options: ['教育学、心理学、教育法规、师德', '数学、语文', '英语', '计算机'], answer: 0, explain: '四大模块。' },
            { stem: '复习教综最有效的方式是：', options: ['背框架 + 真题 + 错题', '只看教材', '只做真题', '只背押题'], answer: 0, explain: '框架化 + 真题。' }
          ],
          doc: {
            lead: '这一章讲笔试准备。',
            sections: [
              { id: 'modules', title: '四模块', html: `<ul><li>教育学</li><li>心理学</li><li>法规</li><li>师德</li></ul>` },
              { id: 'plan', title: '节奏', html: `<p>3–6 月框架，7–8 月真题，9–10 月背诵，考前模拟。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '教师招聘：面试与试讲',
          brief: '十分钟看结构，四十分钟看管理。',
          q: [
            { stem: '试讲最合理的结构是：', options: ['全程讲授', '导入、新授、练习、小结', '只练习', '只讲重点'], answer: 1, explain: '展示完整环节。' },
            { stem: '结构化面试常考的类型不包括：', options: ['教育理念', '班级管理', '应急应变', '才艺表演'], answer: 3, explain: '结构化问答考察教育情境处理。' },
            { stem: '说课与试讲的区别是：', options: ['说课讲"怎么设计及为什么"，试讲是"实际演一遍"', '没有区别', '说课更长', '试讲不需要学生'], answer: 0, explain: '说课面向评委讲设计。' }
          ],
          doc: {
            lead: '这一章讲面试两件事。',
            sections: [
              { id: 'demo', title: '试讲', html: `<p>10 分钟：导入 1、新授 5、练习 2、小结 2；要有互动与板书。</p>` },
              { id: 'structured', title: '结构化', html: `<p>教育理念、班级管理、应急应变、人际沟通四类。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '考研与备选路径',
          brief: '学硕、专硕、非全：三条线。',
          q: [
            { stem: '教育学学硕与专硕的主要区别是：', options: ['学术型 vs 应用型', '学制', '是否考试', '是否写论文'], answer: 0, explain: '培养定位不同。' },
            { stem: '教育学考研专业课通常包括：', options: ['教育学原理、中外教育史、教育心理学、研究方法', '只考教育学原理', '只考英语', '只考政治'], answer: 0, explain: '311/333 的常见范围。' },
            { stem: '同时准备考编与考研，最现实的做法是：', options: ['以一条为主，另一条保留低成本动作', '两条都满负荷', '放弃一条', '等结果'], answer: 0, explain: '主次分明。' }
          ],
          doc: {
            lead: '这一章讲三条路径。',
            sections: [
              { id: 'paths', title: '三条', html: `<ul><li>学硕：311，重理论</li><li>专硕：333，重应用</li><li>非全/在职：灵活</li></ul>` },
              { id: 'choose', title: '取舍', html: `<p>先定出口：想进学校就考编优先，想做研究就考研优先。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        }
      ]
    }
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
