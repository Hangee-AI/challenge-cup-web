/* ==========================================================
   edtech-courses-more.js · 教育技术学：减半标准（主干 8 / 出口 4）
   ========================================================== */

appendChapters('education-教育技术学', [
  /* 1 教育技术学导论 +5 */
  {
    chapters: [
      { title: '学科定位与范畴', brief: '技术为学习服务。',
        q: [
          { stem: 'AECT 定义强调教育技术是：', options: ['对学习过程与资源的设计、开发、利用、管理与评价', '硬件采购', '教学管理', '教育政策'], answer: 0, explain: '五范畴。' },
          { stem: '教育技术学与教育信息化的区别是：', options: ['前者偏学习设计，后者偏基础设施与治理', '无区别', '前者只做硬件', '后者只做软件'], answer: 0, explain: '侧重。' },
          { stem: '判断教育技术方案的首要标准是：', options: ['是否促进学习', '技术是否先进', '设备价格', '界面美观'], answer: 0, explain: '效果。' }
        ],
        doc: { lead: '这一章讲定位。', sections: [
          { id: 'scope', title: '五范畴', html: `<p>设计、开发、利用、管理、评价；围绕学习。</p>` },
          { id: 'judge', title: '判断', html: `<p>解决什么学习问题、对谁有效、证据是什么。</p>` }
        ], refs: [] } },
      { title: '发展脉络', brief: '从视听教学到学习设计。',
        q: [
          { stem: '教育技术的发展大致经历：', options: ['视听教学→程序教学→系统设计→学习科学', '一直不变', '只做硬件', '只做软件'], answer: 0, explain: '四阶段。' },
          { stem: '程序教学的奠基者是：', options: ['斯金纳', '杜威', '布鲁纳', '加涅'], answer: 0, explain: '斯金纳。' },
          { stem: '加涅的贡献是：', options: ['九大教学事件与学习结果分类', '发现学习', '多元智能', '建构主义'], answer: 0, explain: '教学设计基础。' }
        ],
        doc: { lead: '这一章讲历史。', sections: [
          { id: 'stages', title: '四阶段', html: `<p>视听教学、程序教学、系统设计、学习科学。</p>` },
          { id: 'people', title: '人物', html: `<p>斯金纳、加涅、梅耶。</p>` }
        ], refs: [] } },
      { title: '理论基础', brief: '学习理论怎么支撑设计。',
        q: [
          { stem: '行为主义对教学设计的启示是：', options: ['明确目标、及时强化、小步子', '强调意义建构', '强调社会互动', '强调元认知'], answer: 0, explain: '强化。' },
          { stem: '建构主义强调：', options: ['情境、协作、会话、意义建构', '刺激反应', '强化程式', '信息加工'], answer: 0, explain: '四要素。' },
          { stem: '认知负荷理论对多媒体的启示是：', options: ['减少无关负荷、分步呈现', '增加装饰', '加快节奏', '信息越多越好'], answer: 0, explain: '负荷。' }
        ],
        doc: { lead: '这一章讲理论。', sections: [
          { id: 'schools', title: '三派', html: `<p>行为主义（强化）、认知主义（加工）、建构主义（建构）。</p>` },
          { id: 'apply', title: '应用', html: `<p>目标编写、活动设计、媒体选择、评价方式。</p>` }
        ], refs: [] } },
      { title: '教育技术的研究方法', brief: '怎么做研究。',
        q: [
          { stem: '设计研究（DBR）的特点是：', options: ['真实情境多轮迭代，产出设计与理论', '一次实验', '只做问卷', '只做综述'], answer: 0, explain: '迭代。' },
          { stem: '学习分析的常用数据是：', options: ['平台行为日志', '只有成绩', '只有问卷', '只有访谈'], answer: 0, explain: '日志。' },
          { stem: '教育技术研究应关注：', options: ['学习效果与机制', '技术先进性', '设备数量', '界面美观'], answer: 0, explain: '学习。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'methods', title: '方法', html: `<p>实验、设计研究、学习分析、话语分析。</p>` },
          { id: 'quality', title: '质量', html: `<p>三角验证、效果量、情境说明。</p>` }
        ], refs: [] } },
      { title: '职业与伦理', brief: '这个专业能做什么。',
        q: [
          { stem: '教育技术毕业生的典型岗位不包括：', options: ['教学设计师', '教育产品经理', '学校信息化教师', '外科医生'], answer: 3, explain: '无关。' },
          { stem: '教育数据使用的伦理底线是：', options: ['最小必要、知情同意、去标识化', '全部公开', '随意分析', '长期保存'], answer: 0, explain: '三条。' },
          { stem: '技术应用应避免：', options: ['为技术而技术', '以学习为中心', '证据驱动', '迭代改进'], answer: 0, explain: '目的。' }
        ],
        doc: { lead: '这一章讲职业。', sections: [
          { id: 'jobs', title: '岗位', html: `<p>教学设计、产品、信息化教学、企业培训、教研。</p>` },
          { id: 'ethics', title: '伦理', html: `<p>数据保护、算法公平、可及性；不夸大效果。</p>` }
        ], refs: [] } }
    ]
  },
  /* 2 学习科学与技术 +5 */
  {
    chapters: [
      { title: '认知负荷', brief: '工作记忆是瓶颈。',
        q: [
          { stem: '认知负荷理论认为学习失败常见原因是：', options: ['工作记忆超载', '不努力', '设备旧', '教室小'], answer: 0, explain: '容量。' },
          { stem: '外在认知负荷应当：', options: ['尽量降低', '尽量提高', '不变', '忽略'], answer: 0, explain: '呈现方式。' },
          { stem: '相关认知负荷的作用是：', options: ['促进图式建构', '阻碍学习', '无关', '消耗资源'], answer: 0, explain: '建构。' }
        ],
        doc: { lead: '这一章讲负荷。', sections: [
          { id: 'three', title: '三种', html: `<p>内在（内容复杂度）、外在（呈现不当）、相关（图式建构）。</p>` },
          { id: 'design', title: '设计', html: `<p>分步呈现、减少冗余、突出关键、拆分子目标。</p>` }
        ], refs: [] } },
      { title: '情境学习', brief: '在哪学决定能不能用。',
        q: [
          { stem: '情境学习强调：', options: ['在真实或仿真情境中学习', '脱离情境', '只做练习', '只背知识'], answer: 0, explain: '情境。' },
          { stem: '实践共同体的核心是：', options: ['共同实践、互动与身份认同', '同一地点', '同一职业', '同一学历'], answer: 0, explain: '共同体。' },
          { stem: '认知学徒制的步骤是：', options: ['示范、指导、退隐', '讲授、练习、考试', '预习、上课、复习', '读、写、算'], answer: 0, explain: '三阶段。' }
        ],
        doc: { lead: '这一章讲情境。', sections: [
          { id: 'situated', title: '情境学习', html: `<p>实践共同体、合法的边缘性参与、真实性任务。</p>` },
          { id: 'apprentice', title: '认知学徒制', html: `<p>示范 → 指导 → 支架 → 退隐 → 独立。</p>` }
        ], refs: [] } },
      { title: '专家与新手', brief: '差别在知识组织。',
        q: [
          { stem: '专家与新手的差别主要在于：', options: ['知识组织方式与模式识别', '记忆容量', '智商', '年龄'], answer: 0, explain: '组块。' },
          { stem: '组块化（chunking）的作用是：', options: ['扩大有效记忆容量', '减少记忆', '加快阅读', '提高智商'], answer: 0, explain: '组块。' },
          { stem: '培养专长的有效方式是：', options: ['刻意练习与及时反馈', '大量重复', '只看书', '只考试'], answer: 0, explain: '刻意练习。' }
        ],
        doc: { lead: '这一章讲专长。', sections: [
          { id: 'difference', title: '差异', html: `<p>专家按深层原理组织知识，新手按表面特征。</p>` },
          { id: 'develop', title: '培养', html: `<p>刻意练习、反馈、多样化情境、反思。</p>` }
        ], refs: [] } },
      { title: '多媒体学习', brief: '梅耶的原则。',
        q: [
          { stem: '冗余原则建议：', options: ['避免同时呈现相同文字与旁白', '图文重复', '增加装饰', '加音乐'], answer: 0, explain: '冗余。' },
          { stem: '一致性原则要求：', options: ['删除无关材料', '增加趣味', '使用动画', '配音乐'], answer: 0, explain: '去无关。' },
          { stem: '分段原则的目的是：', options: ['让学习者按自己节奏处理信息', '延长时长', '减少内容', '增加难度'], answer: 0, explain: '节奏。' }
        ],
        doc: { lead: '这一章讲多媒体。', sections: [
          { id: 'principles', title: '原则', html: `<p>多媒体、一致性、冗余、分段、信号、空间邻近。</p>` },
          { id: 'apply', title: '应用', html: `<p>课件与微课设计；图文配合而非重复。</p>` }
        ], refs: [] } },
      { title: '学习分析', brief: '用数据理解学习。',
        q: [
          { stem: '学习分析的核心是：', options: ['用行为数据理解与改进学习', '统计成绩', '排名', '监控'], answer: 0, explain: '改进。' },
          { stem: '完课率与完播率的关系是：', options: ['前者看整门课、后者看单个视频', '相同', '前者更细', '后者更粗'], answer: 0, explain: '粒度。' },
          { stem: '预警模型常用于：', options: ['识别辍学或挂科风险', '评分', '招生', '排课'], answer: 0, explain: '预警。' }
        ],
        doc: { lead: '这一章讲分析。', sections: [
          { id: 'data', title: '数据', html: `<p>点击、停留、提交、讨论、成绩。</p>` },
          { id: 'use', title: '应用', html: `<p>预警、干预、课程改进；注意数据真实性与伦理。</p>` }
        ], refs: [] } }
    ]
  },
  /* 3 教学设计基础 +5 */
  {
    chapters: [
      { title: '学习者分析', brief: '设计从谁学开始。',
        q: [
          { stem: '学习者分析的核心内容不包括：', options: ['起点能力', '学习动机', '认知特点', '家庭收入'], answer: 3, explain: '与学习直接相关。' },
          { stem: '前测的作用是：', options: ['了解起点水平', '评分', '筛选', '排名'], answer: 0, explain: '诊断。' },
          { stem: '学习风格理论应谨慎使用，因为：', options: ['缺乏匹配效应的证据', '太复杂', '无法测量', '不实用'], answer: 0, explain: '证据。' }
        ],
        doc: { lead: '这一章讲分析。', sections: [
          { id: 'who', title: '分析内容', html: `<p>起点知识、动机态度、认知特点、学习环境。</p>` },
          { id: 'method', title: '方法', html: `<p>前测、问卷、访谈、作品分析。</p>` }
        ], refs: [] } },
      { title: '目标与内容分析', brief: '教什么、教到什么程度。',
        q: [
          { stem: '教学目标的行为化表述应包含：', options: ['行为、条件、标准', '只有行为', '只有知识', '只有态度'], answer: 0, explain: 'ABCD。' },
          { stem: '布鲁姆分类的后三层是：', options: ['分析、评价、创造（高阶）', '记忆、理解、应用', '知识、技能、态度', '认知、情感、动作'], answer: 0, explain: '高阶。' },
          { stem: '内容分析的作用是：', options: ['确定知识点结构与顺序', '凑课时', '选教材', '写教案'], answer: 0, explain: '结构。' }
        ],
        doc: { lead: '这一章讲目标。', sections: [
          { id: 'objectives', title: '目标', html: `<p>行为 + 条件 + 标准；认知/技能/情感三类。</p>` },
          { id: 'content', title: '内容', html: `<p>概念图、任务分析、先决条件分析。</p>` }
        ], refs: [] } },
      { title: 'ADDIE 模型', brief: '设计有流程。',
        q: [
          { stem: 'ADDIE 的顺序是：', options: ['分析—设计—开发—实施—评价', '设计—分析—实施—开发—评价', '开发—设计—分析—评价—实施', '评价—分析—设计—开发—实施'], answer: 0, explain: '五阶段。' },
          { stem: 'ADDIE 中评价的作用是：', options: ['贯穿全过程（形成性+总结性）', '只在最后', '可省略', '只评学生'], answer: 0, explain: '贯穿。' },
          { stem: '原型法的作用是：', options: ['低成本试错、提前获得反馈', '增加成本', '装饰', '替代设计'], answer: 0, explain: '迭代。' }
        ],
        doc: { lead: '这一章讲流程。', sections: [
          { id: 'addie', title: '五阶段', html: `<p>分析、设计、开发、实施、评价。</p>` },
          { id: 'iter', title: '迭代', html: `<p>低保真原型 → 用户测试 → 修订。</p>` }
        ], refs: [] } },
      { title: '活动与策略设计', brief: '让学习者做。',
        q: [
          { stem: '活动设计中最容易被忽略的是：', options: ['学习者的实际练习与反馈', '教师讲解', 'PPT', '签到'], answer: 0, explain: '练习。' },
          { stem: '支架式教学的关键是：', options: ['随能力提升逐步撤除支持', '永久支持', '增加难度', '减少互动'], answer: 0, explain: '渐隐。' },
          { stem: '合作学习的关键要素是：', options: ['积极互赖与个体问责', '分组即可', '竞争', '自由'], answer: 0, explain: '互赖。' }
        ],
        doc: { lead: '这一章讲策略。', sections: [
          { id: 'activities', title: '活动', html: `<p>目标导向、可操作、有反馈；练习密度与变式。</p>` },
          { id: 'models', title: '模式', html: `<p>支架式、抛锚式、合作学习、翻转课堂。</p>` }
        ], refs: [] } },
      { title: '评价设计', brief: '怎么知道学会了。',
        q: [
          { stem: '评价与目标的关系应当是：', options: ['一致（对齐）', '无关', '越难越好', '只看分数'], answer: 0, explain: '对齐。' },
          { stem: '形成性评价的目的是：', options: ['改进学习与教学', '排名', '鉴定', '选拔'], answer: 0, explain: '改进。' },
          { stem: '评分规则（rubric）的作用是：', options: ['明确标准、提高一致性', '增加难度', '排名', '装饰'], answer: 0, explain: '标准。' }
        ],
        doc: { lead: '这一章讲评价。', sections: [
          { id: 'alignment', title: '对齐', html: `<p>目标—活动—评价同构。</p>` },
          { id: 'tools', title: '工具', html: `<p>测验、量规、表现性任务、档案袋。</p>` }
        ], refs: [] } }
    ]
  },
  /* 4 教学系统设计 +5 */
  {
    chapters: [
      { title: '需求分析', brief: '差距在哪。',
        q: [
          { stem: '需求分析的核心是：', options: ['确定现状与目标之间的差距', '选软件', '写脚本', '做界面'], answer: 0, explain: '差距。' },
          { stem: '若问题根源是制度而非能力，培训可能：', options: ['无效', '有效', '必须做', '更省钱'], answer: 0, explain: '先诊断。' },
          { stem: '绩效技术关注的层次包括：', options: ['组织、流程、个体', '只有个体', '只有技术', '只有培训'], answer: 0, explain: '多层次。' }
        ],
        doc: { lead: '这一章讲需求。', sections: [
          { id: 'gap', title: '差距', html: `<p>现状—目标—原因；区分"不会"与"不愿""不能"。</p>` },
          { id: 'hpt', title: '绩效技术', html: `<p>组织、流程、个体三层；培训只是干预之一。</p>` }
        ], refs: [] } },
      { title: '任务分析', brief: '把复杂拆开。',
        q: [
          { stem: '任务分析的作用是：', options: ['把复杂任务分解为可教的子技能', '统计人数', '制定预算', '选择平台'], answer: 0, explain: '分解。' },
          { stem: '程序性任务的分析方法是：', options: ['流程图与步骤分解', '概念图', '问卷', '访谈'], answer: 0, explain: '流程。' },
          { stem: '学习层级分析用于：', options: ['确定先决技能顺序', '统计', '评估', '预算'], answer: 0, explain: '先决。' }
        ],
        doc: { lead: '这一章讲任务。', sections: [
          { id: 'types', title: '三类任务', html: `<p>程序性、知识性、态度性；分解方式不同。</p>` },
          { id: 'methods', title: '方法', html: `<p>流程图、层级分析、概念图。</p>` }
        ], refs: [] } },
      { title: '系统设计模型', brief: '整体架构。',
        q: [
          { stem: '教学系统设计的核心是：', options: ['系统观下的整体规划', '单一媒体选择', '课件制作', '排课'], answer: 0, explain: '系统。' },
          { stem: 'Dick & Carey 模型的特点是：', options: ['以评价与修订为闭环', '线性一次完成', '只做分析', '只做开发'], answer: 0, explain: '闭环。' },
          { stem: '4C/ID 模型适用于：', options: ['复杂学习任务', '简单记忆', '体能训练', '艺术创作'], answer: 0, explain: '复杂。' }
        ],
        doc: { lead: '这一章讲模型。', sections: [
          { id: 'models', title: '三个模型', html: `<p>ADDIE、Dick & Carey、4C/ID。</p>` },
          { id: 'choose', title: '选择', html: `<p>按任务复杂度与情境选择；复杂任务用整体任务设计。</p>` }
        ], refs: [] } },
      { title: '原型与迭代', brief: '先做出来给人试。',
        q: [
          { stem: '低保真原型的作用是：', options: ['低成本验证结构与流程', '好看', '替代开发', '省时间'], answer: 0, explain: '验证。' },
          { stem: '用户测试中最重要的原则是：', options: ['观察真实使用而非引导', '解释功能', '提问', '避免沉默'], answer: 0, explain: '观察。' },
          { stem: '可用性问题最常出现在：', options: ['首次使用的前几分钟', '长期使用后', '考试时', '维护时'], answer: 0, explain: '上手。' }
        ],
        doc: { lead: '这一章讲迭代。', sections: [
          { id: 'prototype', title: '原型', html: `<p>纸面 → 交互 → 高保真；每级验证不同问题。</p>` },
          { id: 'test', title: '测试', html: `<p>3–5 名目标用户可发现大部分问题；记录卡点。</p>` }
        ], refs: [] } },
      { title: '项目管理', brief: '按时交付。',
        q: [
          { stem: '项目延期的常见原因是：', options: ['需求变更与评审不足', '人员太少', '预算', '工具'], answer: 0, explain: '需求。' },
          { stem: '里程碑的作用是：', options: ['分阶段验收与纠偏', '考核', '汇报', '装饰'], answer: 0, explain: '验收。' },
          { stem: '与开发协作最有效的材料是：', options: ['原型与设计说明', '口头描述', 'PPT', '邮件'], answer: 0, explain: '原型。' }
        ],
        doc: { lead: '这一章讲管理。', sections: [
          { id: 'plan', title: '计划', html: `<p>范围、里程碑、资源、风险；需求变更留痕。</p>` },
          { id: 'collab', title: '协作', html: `<p>原型 + 说明 + 验收标准；定期同步。</p>` }
        ], refs: [] } }
    ]
  },
  /* 5 教育心理学 +5 */
  {
    chapters: [
      { title: '学习理论', brief: '三种取向。',
        q: [
          { stem: '操作性条件反射的核心是：', options: ['强化与惩罚塑造行为', '顿悟', '模仿', '同化'], answer: 0, explain: '斯金纳。' },
          { stem: '建构主义认为知识是：', options: ['学习者主动建构的', '被动接受的', '天赋的', '强化的'], answer: 0, explain: '建构。' },
          { stem: '社会学习理论强调：', options: ['观察学习与自我效能', '强化唯一', '本能', '成熟'], answer: 0, explain: '观察。' }
        ],
        doc: { lead: '这一章讲学习。', sections: [
          { id: 'behavior', title: '行为', html: `<p>经典/操作条件反射；强化程式。</p>` },
          { id: 'cognitive', title: '认知与建构', html: `<p>信息加工、建构主义、社会学习。</p>` }
        ], refs: [] } },
      { title: '动机', brief: '为什么愿意学。',
        q: [
          { stem: '自我决定论的基本需要是：', options: ['自主、胜任、归属', '安全、尊重、自我实现', '成就、权力、亲和', '生理、安全、社交'], answer: 0, explain: '三需要。' },
          { stem: '外部奖励可能削弱内部动机，这称为：', options: ['过度理由效应', '霍桑效应', '皮格马利翁效应', '晕轮效应'], answer: 0, explain: '挤出。' },
          { stem: '提高动机最有效的反馈是：', options: ['针对过程与策略', '排名', '表扬天赋', '批评'], answer: 0, explain: '过程。' }
        ],
        doc: { lead: '这一章讲动机。', sections: [
          { id: 'theories', title: '理论', html: `<p>强化、需要层次、自我决定、归因、期望价值。</p>` },
          { id: 'design', title: '设计', html: `<p>给选择、设可达挑战、及时具体反馈。</p>` }
        ], refs: [] } },
      { title: '迁移与元认知', brief: '学以致用。',
        q: [
          { stem: '促进迁移最有效的方式是：', options: ['理解原理 + 多样化变式', '大量重复', '只做题', '只背答案'], answer: 0, explain: '原理。' },
          { stem: '元认知包括：', options: ['知识、体验与监控调节', '只有知识', '只有动机', '只有记忆'], answer: 0, explain: '三成分。' },
          { stem: '培养元认知最有效的方式是：', options: ['自我提问与学习日志', '多讲', '多练', '多考'], answer: 0, explain: '反思。' }
        ],
        doc: { lead: '这一章讲迁移。', sections: [
          { id: 'transfer', title: '迁移', html: `<p>近/远迁移；原理、变式、情境相似性。</p>` },
          { id: 'meta', title: '元认知', html: `<p>计划—监控—调节；自我调节学习。</p>` }
        ], refs: [] } },
      { title: '个体差异', brief: '因材施教。',
        q: [
          { stem: '差异化教学的核心是：', options: ['基于差异调整内容与过程', '分层编班', '统一进度', '加大作业'], answer: 0, explain: '调整。' },
          { stem: '特殊需要学生的支持方式是：', options: ['个别化教育计划与合理便利', '劝退', '忽视', '降低要求'], answer: 0, explain: 'IEP。' },
          { stem: '学习风格理论应谨慎使用，因为：', options: ['缺乏匹配效应证据', '太复杂', '无法测量', '不实用'], answer: 0, explain: '证据。' }
        ],
        doc: { lead: '这一章讲差异。', sections: [
          { id: 'difference', title: '差异', html: `<p>认知、动机、先前知识、特殊需要。</p>` },
          { id: 'design', title: '设计', html: `<p>多路径呈现、多方式参与、多形式表达（UDL）。</p>` }
        ], refs: [] } },
      { title: '课堂评估', brief: '评价促进学习。',
        q: [
          { stem: '形成性评价的目的是：', options: ['改进学习与教学', '排名', '鉴定', '选拔'], answer: 0, explain: '改进。' },
          { stem: '反馈的有效性是：', options: ['具体、及时、可操作', '分数排名', '越频繁越好', '越笼统越好'], answer: 0, explain: '具体。' },
          { stem: '表现性评价适合测量：', options: ['复杂能力与素养', '记忆', '计算速度', '出勤'], answer: 0, explain: '表现。' }
        ],
        doc: { lead: '这一章讲评估。', sections: [
          { id: 'formative', title: '形成性', html: `<p>课堂提问、随堂练习、同伴互评。</p>` },
          { id: 'rubric', title: '量规', html: `<p>维度、等级、描述语；提高一致性。</p>` }
        ], refs: [] } }
    ]
  },
  /* 6 多媒体技术 +5 */
  {
    chapters: [
      { title: '多媒体设计原则', brief: '图文怎么配。',
        q: [
          { stem: '多媒体原则建议：', options: ['图文结合优于纯文字', '只用文字', '只用图', '越多越好'], answer: 0, explain: '双通道。' },
          { stem: '空间邻近原则要求：', options: ['相关图文相邻呈现', '分开呈现', '随机', '只放图'], answer: 0, explain: '邻近。' },
          { stem: '信号原则的作用是：', options: ['突出关键信息', '增加装饰', '加快节奏', '增加音乐'], answer: 0, explain: '强调。' }
        ],
        doc: { lead: '这一章讲原则。', sections: [
          { id: 'principles', title: '原则', html: `<p>多媒体、空间/时间邻近、信号、一致性、冗余、分段。</p>` },
          { id: 'apply', title: '应用', html: `<p>课件布局：图主文辅、标注关键、少装饰。</p>` }
        ], refs: [] } },
      { title: '图像与视频', brief: '视觉素材的取舍。',
        q: [
          { stem: '教学视频的适宜长度通常是：', options: ['3–8 分钟', '30 分钟', '60 分钟', '越长越好'], answer: 0, explain: '注意力。' },
          { stem: '视频字幕的作用是：', options: ['提升可及性与理解', '装饰', '增加时长', '美观'], answer: 0, explain: '无障碍。' },
          { stem: '图像的分辨率与文件大小关系是：', options: ['正相关', '负相关', '无关', '先增后减'], answer: 0, explain: '压缩。' }
        ],
        doc: { lead: '这一章讲素材。', sections: [
          { id: 'video', title: '视频', html: `<p>短、聚焦、字幕、关键处停顿；避免花哨转场。</p>` },
          { id: 'image', title: '图像', html: `<p>分辨率、压缩格式、版权来源。</p>` }
        ], refs: [] } },
      { title: '交互设计', brief: '让操作有意义。',
        q: [
          { stem: '交互设计的及时反馈指：', options: ['操作后立刻给出状态变化', '延迟反馈', '无反馈', '只在错误时反馈'], answer: 0, explain: '反馈。' },
          { stem: '导航设计的目标是：', options: ['让学习者知道在哪、下一步做什么', '美观', '动画', '音乐'], answer: 0, explain: '位置感。' },
          { stem: '过度动画的问题是：', options: ['分散注意、增加负荷', '提升学习', '减少成本', '增强记忆'], answer: 0, explain: '干扰。' }
        ],
        doc: { lead: '这一章讲交互。', sections: [
          { id: 'feedback', title: '反馈', html: `<p>即时、明确、可撤销；状态可见。</p>` },
          { id: 'navigation', title: '导航', html: `<p>进度、路径、返回；避免隐藏操作。</p>` }
        ], refs: [] } },
      { title: '可用性与无障碍', brief: '谁都能用。',
        q: [
          { stem: '可用性测试关注：', options: ['用户能否高效完成任务', '界面美观', '代码质量', '服务器性能'], answer: 0, explain: '任务。' },
          { stem: '无障碍的常见要求不包括：', options: ['字幕', '足够对比度', '键盘可操作', '自动播放声音'], answer: 3, explain: '干扰。' },
          { stem: '移动端优先设计的原因是：', options: ['屏幕小、场景碎片化', '性能强', '省钱', '美观'], answer: 0, explain: '约束。' }
        ],
        doc: { lead: '这一章讲体验。', sections: [
          { id: 'usability', title: '可用性', html: `<p>易学、高效、少错、满意；任务完成率与耗时。</p>` },
          { id: 'a11y', title: '无障碍', html: `<p>字幕、对比度、键盘、屏幕阅读器。</p>` }
        ], refs: [] } },
      { title: '制作工具与流程', brief: '工欲善其事。',
        q: [
          { stem: '课件开发的基本流程是：', options: ['设计—脚本—制作—测试—修订', '打开软件—排版—保存', '找模板—填字—导出', '拍摄—剪辑'], answer: 0, explain: '流程。' },
          { stem: '工具选择的首要依据是：', options: ['教学需求与团队能力', '价格', '流行度', '体积'], answer: 0, explain: '需求。' },
          { stem: '素材版权应：', options: ['使用授权素材并标注来源', '随意下载', '不标注', '改一改'], answer: 0, explain: '版权。' }
        ],
        doc: { lead: '这一章讲制作。', sections: [
          { id: 'flow', title: '流程', html: `<p>设计 → 脚本 → 制作 → 测试 → 修订。</p>` },
          { id: 'tools', title: '工具', html: `<p>课件、录屏、剪辑、交互原型；版权合规。</p>` }
        ], refs: [] } }
    ]
  },
  /* 7 在线课程开发 +5 */
  {
    chapters: [
      { title: '课程结构设计', brief: '先骨架后内容。',
        q: [
          { stem: '在线课程结构设计的起点是：', options: ['目标与学习路径', '拍摄视频', '选平台', '做封面'], answer: 0, explain: '目标。' },
          { stem: '模块化设计的优势是：', options: ['便于复用与更新', '增加成本', '减少互动', '延长时长'], answer: 0, explain: '复用。' },
          { stem: '导航设计的核心要求是：', options: ['路径清晰、进度可见', '动画炫', '颜色多', '音乐好'], answer: 0, explain: '清晰。' }
        ],
        doc: { lead: '这一章讲结构。', sections: [
          { id: 'structure', title: '结构', html: `<p>模块 → 单元 → 课时；每课时一个目标、一个练习。</p>` },
          { id: 'nav', title: '导航', html: `<p>进度、路径、回看；学习地图。</p>` }
        ], refs: [] } },
      { title: '视频脚本与录制', brief: '好课是设计出来的。',
        q: [
          { stem: '教学视频脚本应先写：', options: ['学习目标与关键画面', '台词', '片头', '配乐'], answer: 0, explain: '目标。' },
          { stem: '录屏时语速与停顿应：', options: ['适中并留出思考时间', '越快越好', '越慢越好', '不停顿'], answer: 0, explain: '节奏。' },
          { stem: '录音质量的决定因素是：', options: ['麦克风与环境噪音', '摄像头', '灯光', '剪辑软件'], answer: 0, explain: '音频。' }
        ],
        doc: { lead: '这一章讲制作。', sections: [
          { id: 'script', title: '脚本', html: `<p>两栏：画面与旁白；标注停顿与强调。</p>` },
          { id: 'record', title: '录制', html: `<p>录音优先、画面简洁、环境安静；分段录制。</p>` }
        ], refs: [] } },
      { title: '学习活动设计', brief: '不只是看视频。',
        q: [
          { stem: '在线课程中最容易被忽略的是：', options: ['学习活动与互动', '视频画质', '平台功能', '证书'], answer: 0, explain: '活动。' },
          { stem: '讨论区的有效运营方式是：', options: ['明确话题、教师回应、同伴互评', '放任', '关闭', '只发通知'], answer: 0, explain: '运营。' },
          { stem: '作业设计应对齐：', options: ['学习目标', '视频数量', '平台功能', '考试'], answer: 0, explain: '对齐。' }
        ],
        doc: { lead: '这一章讲活动。', sections: [
          { id: 'activities', title: '活动', html: `<p>讨论、作业、测验、项目、同伴互评。</p>` },
          { id: 'engagement', title: '参与', html: `<p>节奏、提醒、反馈；避免"只看不练"。</p>` }
        ], refs: [] } },
      { title: '平台与工具', brief: '选对平台。',
        q: [
          { stem: '选择教学平台最应关注：', options: ['是否支持所需教学活动与数据', '界面好看', '价格最低', '广告少'], answer: 0, explain: '功能匹配。' },
          { stem: 'LMS 的核心功能不包括：', options: ['课程管理', '作业评价', '讨论互动', '视频剪辑'], answer: 3, explain: '制作工具。' },
          { stem: '工具过多带来的问题是：', options: ['学习成本与数据割裂', '效率提升', '成本降低', '体验更好'], answer: 0, explain: '堆叠。' }
        ],
        doc: { lead: '这一章讲工具。', sections: [
          { id: 'lms', title: '平台', html: `<p>内容管理、作业评价、讨论、数据、证书。</p>` },
          { id: 'stack', title: '工具链', html: `<p>录制、剪辑、字幕、交互课件、题库；少而通。</p>` }
        ], refs: [] } },
      { title: '质量保障', brief: '课程好不好。',
        q: [
          { stem: '在线课程质量评估的维度包括：', options: ['内容、设计、互动、技术、评价', '只有画面', '只有时长', '只有价格'], answer: 0, explain: '多维。' },
          { stem: '课程上线前的测试应：', options: ['多设备多角色走查', '只看电脑', '只看手机', '不用测试'], answer: 0, explain: '走查。' },
          { stem: '学习者反馈的正确用法是：', options: ['迭代改进课程', '忽略', '只看好评', '删差评'], answer: 0, explain: '改进。' }
        ],
        doc: { lead: '这一章讲质量。', sections: [
          { id: 'dimensions', title: '维度', html: `<p>内容准确性、教学设计、互动支持、技术稳定、评价有效。</p>` },
          { id: 'iterate', title: '迭代', html: `<p>数据 + 反馈 → 修订；建立课程版本记录。</p>` }
        ], refs: [] } }
    ]
  },
  /* 8 教育数据分析 +5 */
  {
    chapters: [
      { title: '数据采集与指标', brief: '先想清楚问什么。',
        q: [
          { stem: '学习分析最常用的数据来源是：', options: ['平台行为日志', '成绩单', '教师评价', '教材销量'], answer: 0, explain: '日志。' },
          { stem: '完课率与完播率的区别是：', options: ['整门课 vs 单个视频', '没有区别', '前者更小', '后者更粗'], answer: 0, explain: '粒度。' },
          { stem: '设计埋点时最先确定的是：', options: ['指标与改进动作', '数据库', '图表颜色', '服务器'], answer: 0, explain: '决策。' }
        ],
        doc: { lead: '这一章讲指标。', sections: [
          { id: 'metrics', title: '四指标', html: `<p>完课率、视频完播率、作业提交率、讨论参与度。</p>` },
          { id: 'action', title: '动作', html: `<p>每个指标都要能回答"低了怎么办"。</p>` }
        ], refs: [] } },
      { title: '分析方法', brief: '从描述到预测。',
        q: [
          { stem: '预警模型通常预测：', options: ['辍学或挂科风险', '教师工资', '设备故障', '天气'], answer: 0, explain: '风险。' },
          { stem: '分析学习行为时最需排除的干扰是：', options: ['刷课与挂机行为', '样本量', '软件', '图表'], answer: 0, explain: '真实性。' },
          { stem: '相关分析与因果推断的区别是：', options: ['是否控制混淆变量', '是否用软件', '样本大小', '数据类型'], answer: 0, explain: '因果。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'levels', title: '三层', html: `<p>描述（发生了什么）、诊断（为什么）、预测（谁会出问题）。</p>` },
          { id: 'clean', title: '清洗', html: `<p>刷课、代刷、设备差异；先清洗再分析。</p>` }
        ], refs: [] } },
      { title: '可视化与报告', brief: '让人看懂。',
        q: [
          { stem: '数据可视化的首要目标是：', options: ['清晰传达信息', '好看', '炫技', '增加篇幅'], answer: 0, explain: '传达。' },
          { stem: '图表选择应依据：', options: ['数据类型与比较目的', '颜色', '软件', '篇幅'], answer: 0, explain: '匹配。' },
          { stem: '仪表盘设计应避免：', options: ['指标过多、缺乏重点', '分层展示', '对比基准', '更新及时'], answer: 0, explain: '重点。' }
        ],
        doc: { lead: '这一章讲呈现。', sections: [
          { id: 'charts', title: '图表', html: `<p>比较用条形、趋势用折线、构成用堆叠；少用饼图。</p>` },
          { id: 'dashboard', title: '仪表盘', html: `<p>核心指标 + 基准 + 预警；一屏看全局。</p>` }
        ], refs: [] } },
      { title: '伦理与隐私', brief: '数据越细责任越大。',
        q: [
          { stem: '教育数据伦理的基本原则是：', options: ['最小必要、知情同意、去标识化', '全部公开', '只保护教师', '无需说明'], answer: 0, explain: '三条。' },
          { stem: '算法用于学生评价时需警惕：', options: ['标签化与自我实现预言', '计算速度', '存储成本', '界面'], answer: 0, explain: '公平。' },
          { stem: '数据保存应：', options: ['设定期限并安全存储', '永久保存', '公开分享', '随意传输'], answer: 0, explain: '期限。' }
        ],
        doc: { lead: '这一章讲伦理。', sections: [
          { id: 'principles', title: '三原则', html: `<p>最小必要、知情同意、去标识化。</p>` },
          { id: 'fair', title: '公平', html: `<p>模型可放大偏差；用于评价须可解释、可申诉。</p>` }
        ], refs: [] } },
      { title: '工具与实践', brief: '怎么落地。',
        q: [
          { stem: '学习分析常用的工具组合是：', options: ['Python/R + SQL + 可视化', '只有 Excel', '只有 SPSS', '纸笔'], answer: 0, explain: '工具链。' },
          { stem: '分析结果落地的前提是：', options: ['与教学决策衔接', '图表好看', '数据量大', '模型复杂'], answer: 0, explain: '决策。' },
          { stem: '可复现分析要求：', options: ['代码与数据可追溯', '只交报告', '手工计算', '截图'], answer: 0, explain: 'reproducible。' }
        ],
        doc: { lead: '这一章讲实践。', sections: [
          { id: 'stack', title: '工具', html: `<p>SQL 取数、Python/R 分析、BI 可视化。</p>` },
          { id: 'loop', title: '闭环', html: `<p>分析 → 干预 → 评估效果 → 再分析。</p>` }
        ], refs: [] } }
    ]
  },
  /* 9 教育技术研究方法 +5 */
  {
    chapters: [
      { title: '研究设计', brief: '问题决定方法。',
        q: [
          { stem: '教育技术研究问题的要求是：', options: ['明确、可研究、有价值', '宏大', '时髦', '熟悉'], answer: 0, explain: '三要求。' },
          { stem: '量化与质性研究的分野在于：', options: ['数据形式与逻辑', '是否用软件', '是否有假设', '是否发表'], answer: 0, explain: '范式。' },
          { stem: '研究伦理的核心是：', options: ['知情同意、保密、不伤害', '快速发表', '数据公开', '署名'], answer: 0, explain: '伦理。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'question', title: '问题', html: `<p>从实践困惑或文献缺口出发；明确变量与对象。</p>` },
          { id: 'design', title: '设计', html: `<p>横截面/纵向、实验/准实验、个案/设计研究。</p>` }
        ], refs: [] } },
      { title: '实验与准实验', brief: '证明有效需要对照。',
        q: [
          { stem: '随机对照实验的优势是：', options: ['控制混淆、支持因果推断', '样本大', '成本低', '速度快'], answer: 0, explain: '随机化。' },
          { stem: '准实验的常见形式是：', options: ['非等组前后测', '随机分组', '双盲', '交叉'], answer: 0, explain: '准实验。' },
          { stem: '前测-后测设计的主要威胁是：', options: ['成熟与测验效应', '样本量', '软件', '统计方法'], answer: 0, explain: '需对照。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'rct', title: '实验', html: `<p>随机分配、控制、前后测；内部效度高。</p>` },
          { id: 'quasi', title: '准实验', html: `<p>非等组、断点、时间序列；讨论选择偏差。</p>` }
        ], refs: [] } },
      { title: '设计研究', brief: '在真实课堂迭代。',
        q: [
          { stem: '设计研究（DBR）的产出是：', options: ['可用的设计 + 情境化理论', '只有论文', '只有软件', '只有数据'], answer: 0, explain: '双产出。' },
          { stem: 'DBR 的典型流程是：', options: ['分析—设计—实施—修订的循环', '一次实验', '只做综述', '只做问卷'], answer: 0, explain: '多轮。' },
          { stem: 'DBR 结论的推广需要：', options: ['说明情境与边界', '直接推广', '忽略情境', '只报均值'], answer: 0, explain: '边界。' }
        ],
        doc: { lead: '这一章讲 DBR。', sections: [
          { id: 'cycle', title: '循环', html: `<p>问题分析 → 设计干预 → 实施 → 数据 → 修订。</p>` },
          { id: 'output', title: '产出', html: `<p>设计原则 + 情境化理论 + 可复用方案。</p>` }
        ], refs: [] } },
      { title: '数据与测量', brief: '怎么量。',
        q: [
          { stem: '学习效果测量应：', options: ['多指标、对齐目标', '只看分数', '只看满意度', '只看时长'], answer: 0, explain: '对齐。' },
          { stem: '量表信度指：', options: ['测量结果的稳定性', '测对了没有', '样本大小', '回收率'], answer: 0, explain: '信度。' },
          { stem: '日志数据的局限是：', options: ['不能直接反映学习质量', '样本小', '难获取', '不客观'], answer: 0, explain: '代理指标。' }
        ],
        doc: { lead: '这一章讲测量。', sections: [
          { id: 'instruments', title: '工具', html: `<p>成绩测验、量表、日志、作品评分量规。</p>` },
          { id: 'quality', title: '质量', html: `<p>信度、效度、三角验证。</p>` }
        ], refs: [] } },
      { title: '论文写作', brief: '把研究说清楚。',
        q: [
          { stem: '教育技术论文的结构通常是：', options: ['问题—文献—方法—结果—讨论', '总—分—总', '背景—致谢—结论', '引言—正文—附录'], answer: 0, explain: '结构。' },
          { stem: '效应量的作用是：', options: ['说明差异的实际大小', '替代显著性', '提高 R²', '减少样本'], answer: 0, explain: '实际意义。' },
          { stem: '研究局限应当：', options: ['如实说明', '隐藏', '忽略', '夸大'], answer: 0, explain: '诚实。' }
        ],
        doc: { lead: '这一章讲写作。', sections: [
          { id: 'structure', title: '结构', html: `<p>摘要、引言、文献、方法、结果、讨论、参考。</p>` },
          { id: 'report', title: '报告', html: `<p>效应量、置信区间、局限；可复现材料。</p>` }
        ], refs: [] } }
    ]
  },
  /* 10 教育实习 +1 */
  {
    chapters: [
      { title: '实习复盘', brief: '把项目变成作品。',
        q: [
          { stem: '教育技术实习最该留下的是：', options: ['课程设计与原型', '工牌', '照片', '评语'], answer: 0, explain: '作品。' },
          { stem: '实习日志的推荐写法是：', options: ['问题—做法—结果—反思', '流水账', '只写结论', '只写感受'], answer: 0, explain: '结构化。' },
          { stem: '面试讲项目的最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'output', title: '三件套', html: `<p>一份课程设计、一个可运行原型、一段效果数据。</p>` },
          { id: 'review', title: '复盘', html: `<p>每周五行；项目结束写一页总结。</p>` }
        ], refs: [] } }
    ]
  },
  /* 11 毕业设计 +1 */
  {
    chapters: [
      { title: '毕设选题与作品', brief: '小而完整。',
        q: [
          { stem: '教育技术毕设最合适的成果是：', options: ['可运行作品 + 评价数据', '纯文献综述', '翻译', '读后感'], answer: 0, explain: '作品。' },
          { stem: '选题时最该避免：', options: ['功能堆砌、无法完成', '范围过小', '有真实用户', '可评价'], answer: 0, explain: '可行。' },
          { stem: '答辩时最该准备的是：', options: ['能现场演示并解释设计决策', '背稿', 'PPT 模板', '服装'], answer: 0, explain: '演示。' }
        ],
        doc: { lead: '这一章讲毕设。', sections: [
          { id: 'topic', title: '选题', html: `<p>一个微课、一个交互模块、一个分析工具都够。</p>` },
          { id: 'defense', title: '答辩', html: `<p>问题—方案—证据—局限；准备离线演示。</p>` }
        ], refs: [] } }
    ]
  },
  /* 12 考研与求职 +1 */
  {
    chapters: [
      { title: '考研与求职规划', brief: '两条路的准备。',
        q: [
          { stem: '教育技术考研专业课常见范围是：', options: ['教育技术学导论、教学设计、学习理论', '只考数学', '只考编程', '只考英语'], answer: 0, explain: '专业基础。' },
          { stem: '就业方向包括：', options: ['教学设计、教育产品、学校信息化', '只有高校', '只有公务员', '只有制造业'], answer: 0, explain: '多元。' },
          { stem: '求职最加分的材料是：', options: ['作品集 + 效果数据', '证书数量', '成绩单', '社团'], answer: 0, explain: '作品。' }
        ],
        doc: { lead: '这一章讲规划。', sections: [
          { id: 'exam', title: '考研', html: `<p>教育技术学基础、教学设计与学习理论、研究方法。</p>` },
          { id: 'job', title: '就业', html: `<p>教学设计（ID）、教育产品、学校信息化、企业培训。</p>` }
        ], refs: [] } }
    ]
  }
]);
