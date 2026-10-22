/* ==========================================================
   preschool-courses-more.js · 学前教育：减半标准（主干 8 / 出口 4）
   ========================================================== */

appendChapters('education-学前教育', [
  /* 1 学前教育学 +5 */
  {
    chapters: [
      { title: '学前教育的性质', brief: '保教结合，以游戏为基本活动。',
        q: [
          { stem: '我国学前教育的基本原则是：', options: ['保教结合', '提前小学化', '知识优先', '纪律优先'], answer: 0, explain: '保教。' },
          { stem: '学前教育以什么为基本活动？', options: ['游戏', '上课', '作业', '考试'], answer: 0, explain: '游戏。' },
          { stem: '"小学化"倾向的危害是：', options: ['违背身心规律、损害兴趣', '提高成绩', '节省时间', '家长满意'], answer: 0, explain: '违背规律。' }
        ],
        doc: { lead: '这一章讲性质。', sections: [
          { id: 'nature', title: '性质', html: `<p>基础性、公益性、保教结合；以游戏为基本活动。</p>` },
          { id: 'against', title: '去小学化', html: `<p>禁止提前教授小学内容；以直接经验为主。</p>` }
        ], refs: [] } },
      { title: '学前教育的目标与任务', brief: '培养什么样的小孩。',
        q: [
          { stem: '我国学前教育的目标是：', options: ['体智德美全面发展', '识字算术', '艺术特长', '纪律训练'], answer: 0, explain: '全面发展。' },
          { stem: '五大领域包括：', options: ['健康、语言、社会、科学、艺术', '语数外理化', '德智体美劳', '听写算画唱'], answer: 0, explain: '五领域。' },
          { stem: '学前教育的双重任务是：', options: ['促进幼儿发展 + 服务家长', '只教知识', '只看孩子', '只做托管'], answer: 0, explain: '双重。' }
        ],
        doc: { lead: '这一章讲目标。', sections: [
          { id: 'goals', title: '目标', html: `<p>体智德美全面发展；《3–6 岁儿童学习与发展指南》五大领域。</p>` },
          { id: 'tasks', title: '任务', html: `<p>保教并重、家园共育、为入小学做准备（非提前小学化）。</p>` }
        ], refs: [] } },
      { title: '学前教育的基本原则', brief: '怎么做才对。',
        q: [
          { stem: '学前教育的原则不包括：', options: ['保教结合', '以游戏为基本活动', '尊重个体差异', '统一进度'], answer: 3, explain: '差异化。' },
          { stem: '尊重幼儿的学习方式是：', options: ['直接感知、实际操作、亲身体验', '听讲记忆', '反复练习', '书面作业'], answer: 0, explain: '做中学。' },
          { stem: '面向全体与因材施教的关系是：', options: ['统一要求与个别差异结合', '只面向全体', '只个别', '互斥'], answer: 0, explain: '结合。' }
        ],
        doc: { lead: '这一章讲原则。', sections: [
          { id: 'principles', title: '原则', html: `<p>保教结合、以游戏为基本活动、生活化、整体性、差异性原则。</p>` },
          { id: 'learning', title: '学习方式', html: `<p>直接感知、实际操作、亲身体验；避免灌输。</p>` }
        ], refs: [] } },
      { title: '幼儿园教育指导纲要', brief: '政策文本怎么读。',
        q: [
          { stem: '《幼儿园教育指导纲要》的核心精神是：', options: ['以幼儿发展为本', '以知识为本', '以考试为本', '以纪律为本'], answer: 0, explain: '发展为本。' },
          { stem: '《指南》与《纲要》的关系是：', options: ['纲要定方向、指南给具体目标与建议', '相同', '互斥', '后者替代前者'], answer: 0, explain: '配套。' },
          { stem: '幼儿园一日生活的组织原则是：', options: ['以游戏为基本活动、保教并重', '以集体教学为主', '以作业为主', '以纪律为主'], answer: 0, explain: '一日生活。' }
        ],
        doc: { lead: '这一章讲政策。', sections: [
          { id: 'outline', title: '纲要', html: `<p>五大领域目标与内容要求；以游戏为基本活动。</p>` },
          { id: 'guide', title: '指南', html: `<p>3–4、4–5、5–6 岁目标与教育建议；观察与评价依据。</p>` }
        ], refs: [] } },
      { title: '幼小衔接', brief: '平稳过渡。',
        q: [
          { stem: '科学的幼小衔接重点是：', options: ['身心、生活、社会与学习准备', '提前学拼音算术', '上补习班', '加大作业'], answer: 0, explain: '四准备。' },
          { stem: '提前小学化的长期效果通常是：', options: ['短期领先、后期无优势甚至更差', '持续领先', '无影响', '全面提升'], answer: 0, explain: '研究结论。' },
          { stem: '幼小衔接的主体是：', options: ['幼儿园、小学、家庭共同', '只有幼儿园', '只有小学', '只有家长'], answer: 0, explain: '三方。' }
        ],
        doc: { lead: '这一章讲衔接。', sections: [
          { id: 'prepare', title: '四个准备', html: `<p>身心准备、生活准备、社会准备、学习准备。</p>` },
          { id: 'myth', title: '误区', html: `<p>提前学知识 ≠ 衔接；重点是习惯、兴趣与能力。</p>` }
        ], refs: [] } }
    ]
  },
  /* 2 儿童发展心理学 +5 */
  {
    chapters: [
      { title: '发展的基本规律', brief: '顺序、阶段、差异。',
        q: [
          { stem: '儿童发展的基本规律不包括：', options: ['顺序性', '阶段性', '差异性', '随意性'], answer: 3, explain: '非随意。' },
          { stem: '关键期概念强调：', options: ['某些能力在特定时期更易发展', '任何时期一样', '越晚越好', '只与遗传有关'], answer: 0, explain: '关键期。' },
          { stem: '发展的整体性要求教育：', options: ['各领域相互渗透', '只重认知', '只重身体', '分科独立'], answer: 0, explain: '整体。' }
        ],
        doc: { lead: '这一章讲规律。', sections: [
          { id: 'laws', title: '规律', html: `<p>顺序性、阶段性、不平衡性、差异性、整体性。</p>` },
          { id: 'key', title: '关键期', html: `<p>语言、依恋、动作发展的敏感期。</p>` }
        ], refs: [] } },
      { title: '身体与动作发展', brief: '从爬到跑。',
        q: [
          { stem: '动作发展的一般顺序是：', options: ['从头到脚、从中心到外周', '从脚到头', '从外周到头', '随机'], answer: 0, explain: '头尾律。' },
          { stem: '大肌肉动作与小肌肉动作的关系是：', options: ['大肌肉先发展', '小肌肉先', '同时', '无关'], answer: 0, explain: '顺序。' },
          { stem: '促进动作发展的方式是：', options: ['充足户外活动与自由游戏', '静坐训练', '书写练习', '看视频'], answer: 0, explain: '活动。' }
        ],
        doc: { lead: '这一章讲身体。', sections: [
          { id: 'order', title: '顺序', html: `<p>头尾律、近远律、整体到分化；大肌肉→小肌肉。</p>` },
          { id: 'support', title: '支持', html: `<p>户外活动、攀爬跑跳、精细动作游戏。</p>` }
        ], refs: [] } },
      { title: '认知发展', brief: '皮亚杰与维果茨基。',
        q: [
          { stem: '2–7 岁处于皮亚杰的：', options: ['前运算阶段', '感知运动阶段', '具体运算阶段', '形式运算阶段'], answer: 0, explain: '前运算。' },
          { stem: '前运算阶段的典型特征是：', options: ['自我中心、泛灵论、不守恒', '守恒', '抽象推理', '假设演绎'], answer: 0, explain: '特征。' },
          { stem: '维果茨基的"最近发展区"提示教师：', options: ['提供略高于现有水平的支架', '只教已会的', '越难越好', '不做干预'], answer: 0, explain: '支架。' }
        ],
        doc: { lead: '这一章讲认知。', sections: [
          { id: 'piaget', title: '皮亚杰', html: `<p>感知运动（0–2）、前运算（2–7）；自我中心、泛灵、不守恒。</p>` },
          { id: 'vygotsky', title: '维果茨基', html: `<p>最近发展区、社会互动、支架。</p>` }
        ], refs: [] } },
      { title: '语言发展', brief: '词汇爆发。',
        q: [
          { stem: '幼儿词汇快速增长期是：', options: ['2–3 岁', '6 岁', '出生', '10 岁'], answer: 0, explain: '爆发。' },
          { stem: '促进语言发展的有效方式是：', options: ['亲子共读与对话', '看动画片', '背古诗唯一', '识字卡片唯一'], answer: 0, explain: '互动。' },
          { stem: '语言发展迟缓的早期信号包括：', options: ['2 岁词汇很少、不会双词句', '说话早', '爱提问', '爱模仿'], answer: 0, explain: '预警。' }
        ],
        doc: { lead: '这一章讲语言。', sections: [
          { id: 'stages', title: '阶段', html: `<p>前语言、单词句、双词句、简单句、复杂句。</p>` },
          { id: 'support', title: '支持', html: `<p>共读、扩展性回应、丰富语言环境；早期识别迟缓。</p>` }
        ], refs: [] } },
      { title: '社会性与情绪', brief: '从自我到同伴。',
        q: [
          { stem: '幼儿自我中心的表现是：', options: ['难以采择他人视角', '自私', '不礼貌', '语言差'], answer: 0, explain: '认知。' },
          { stem: '同伴交往对幼儿的作用是：', options: ['发展社会技能与观点采择', '无作用', '只影响语言', '只影响运动'], answer: 0, explain: '社会性。' },
          { stem: '情绪调节能力的培养方式是：', options: ['命名情绪、示范调节策略', '压抑情绪', '忽视', '惩罚'], answer: 0, explain: '引导。' }
        ],
        doc: { lead: '这一章讲社会性。', sections: [
          { id: 'self', title: '自我', html: `<p>自我意识、性别认同、自我控制。</p>` },
          { id: 'peer', title: '同伴与情绪', html: `<p>游戏中的交往；情绪识别与调节。</p>` }
        ], refs: [] } }
    ]
  },
  /* 3 幼儿卫生保健 +5 */
  {
    chapters: [
      { title: '生长发育规律', brief: '长得快也要看得懂。',
        q: [
          { stem: '幼儿生长发育的特点是：', options: ['速度快、个体差异大、程序性', '匀速', '无差异', '先慢后快'], answer: 0, explain: '特点。' },
          { stem: '生长监测的常用指标是：', options: ['身高、体重、头围', '血压', '血糖', '视力唯一'], answer: 0, explain: '指标。' },
          { stem: '发育迟缓的早期识别依靠：', options: ['定期体检与发育筛查', '家长感觉', '比较', '等长大'], answer: 0, explain: '筛查。' }
        ],
        doc: { lead: '这一章讲生长。', sections: [
          { id: 'laws', title: '规律', html: `<p>连续性与阶段性、速度不均、程序性、个体差异。</p>` },
          { id: 'monitor', title: '监测', html: `<p>身高体重曲线、发育筛查；早发现早干预。</p>` }
        ], refs: [] } },
      { title: '营养与膳食', brief: '吃得对才长得好。',
        q: [
          { stem: '幼儿膳食的基本原则是：', options: ['均衡、多样、适量、规律', '越多越好', '只吃精细', '只吃素'], answer: 0, explain: '均衡。' },
          { stem: '缺铁性贫血的预防重点是：', options: ['补充富铁食物与维 C', '多喝奶', '多吃糖', '少吃肉'], answer: 0, explain: '铁。' },
          { stem: '幼儿每日户外活动时间建议不少于：', options: ['2 小时', '30 分钟', '10 分钟', '不要求'], answer: 0, explain: '2 小时。' }
        ],
        doc: { lead: '这一章讲吃。', sections: [
          { id: 'diet', title: '膳食', html: `<p>平衡膳食宝塔、三餐一点；食物多样、少盐少糖。</p>` },
          { id: 'common', title: '常见问题', html: `<p>贫血、佝偻病、肥胖、挑食；户外活动与维生素 D。</p>` }
        ], refs: [] } },
      { title: '常见疾病预防', brief: '传染病怎么防。',
        q: [
          { stem: '手足口病的传播途径主要是：', options: ['消化道与密切接触', '空气唯一', '血液', '蚊虫'], answer: 0, explain: '接触。' },
          { stem: '幼儿园晨检的目的是：', options: ['早发现传染病与异常', '考勤', '收费', '评比'], answer: 0, explain: '早发现。' },
          { stem: '预防接种的意义是：', options: ['建立免疫屏障', '治疗疾病', '提高智力', '增强体质唯一'], answer: 0, explain: '免疫。' }
        ],
        doc: { lead: '这一章讲防病。', sections: [
          { id: 'infectious', title: '传染病', html: `<p>手足口、水痘、流感、诺如；隔离与消毒。</p>` },
          { id: 'routine', title: '常规', html: `<p>晨检、通风、洗手、接种证查验。</p>` }
        ], refs: [] } },
      { title: '安全与急救', brief: '防患于未然。',
        q: [
          { stem: '异物窒息的现场急救方法是：', options: ['海姆立克法', '拍背唯一', '喂水', '等待'], answer: 0, explain: '海姆立克。' },
          { stem: '烫伤后的正确处理是：', options: ['冷水冲洗、覆盖、就医', '涂牙膏', '挑破水泡', '冰敷'], answer: 0, explain: '冲脱泡盖送。' },
          { stem: '幼儿园安全管理的重点是：', options: ['环境排查、交接制度、应急演练', '事后追责', '减少活动', '封闭管理唯一'], answer: 0, explain: '预防。' }
        ],
        doc: { lead: '这一章讲安全。', sections: [
          { id: 'firstaid', title: '急救', html: `<p>窒息、烫伤、跌落、惊厥；冲脱泡盖送、侧卧位。</p>` },
          { id: 'system', title: '制度', html: `<p>接送交接、环境排查、应急预案与演练。</p>` }
        ], refs: [] } },
      { title: '心理卫生', brief: '情绪与行为。',
        q: [
          { stem: '幼儿分离焦虑的应对是：', options: ['稳定作息、渐进适应、温柔告别', '偷偷离开', '呵斥', '延长哭闹'], answer: 0, explain: '适应。' },
          { stem: '幼儿攻击行为的常见原因是：', options: ['语言表达不足与模仿', '天生坏', '故意', '无原因'], answer: 0, explain: '表达。' },
          { stem: '心理健康教育的重点是：', options: ['安全依恋与情绪支持', '纪律训练', '知识灌输', '评比'], answer: 0, explain: '支持。' }
        ],
        doc: { lead: '这一章讲心理。', sections: [
          { id: 'emotion', title: '情绪', html: `<p>分离焦虑、入园适应、情绪命名与安抚。</p>` },
          { id: 'behavior', title: '行为', html: `<p>攻击、咬人、退缩；观察原因与家园一致应对。</p>` }
        ], refs: [] } }
    ]
  },
  /* 4 幼儿园课程 +5 */
  {
    chapters: [
      { title: '课程理念', brief: '以儿童为本。',
        q: [
          { stem: '幼儿园课程的核心是：', options: ['以幼儿经验与生活为基础', '以教材为中心', '以考试为中心', '以教师讲授为中心'], answer: 0, explain: '经验。' },
          { stem: '幼儿园课程的特点是：', options: ['生活化、游戏化、整合性', '分科化', '学术化', '标准化'], answer: 0, explain: '三性。' },
          { stem: '课程与一日生活的关系是：', options: ['一日生活皆课程', '课程只在课堂', '生活与课程无关', '只在上课时间'], answer: 0, explain: '生活即课程。' }
        ],
        doc: { lead: '这一章讲理念。', sections: [
          { id: 'view', title: '儿童观与课程观', html: `<p>儿童是有能力的主动学习者；课程是经验的过程。</p>` },
          { id: 'features', title: '特点', html: `<p>生活化、游戏化、整合性、经验性。</p>` }
        ], refs: [] } },
      { title: '课程目标与内容', brief: '五大领域。',
        q: [
          { stem: '幼儿园课程内容组织的原则是：', options: ['整合性、生活化、趣味性', '分科独立', '难度优先', '考试优先'], answer: 0, explain: '整合。' },
          { stem: '主题活动设计的核心是：', options: ['围绕一个中心整合多领域', '分科教学', '只做游戏', '只做上课'], answer: 0, explain: '主题。' },
          { stem: '课程目标的表述应：', options: ['具体、可观察、适合年龄', '笼统', '越难越好', '统一'], answer: 0, explain: '可观察。' }
        ],
        doc: { lead: '这一章讲目标。', sections: [
          { id: 'goals', title: '目标', html: `<p>五大领域目标；三维（认知、能力、情感态度）。</p>` },
          { id: 'theme', title: '主题', html: `<p>主题网络、领域整合、资源与生成课程。</p>` }
        ], refs: [] } },
      { title: '课程实施', brief: '一日生活与游戏。',
        q: [
          { stem: '幼儿园一日生活的组织应：', options: ['稳定而有弹性、减少等待', '严格统一', '随意', '以集体教学为主'], answer: 0, explain: '弹性。' },
          { stem: '集体教学、小组与个别活动的比例应：', options: ['以小组与个别为主', '以集体为主', '只有集体', '只有个别'], answer: 0, explain: '分组。' },
          { stem: '过渡环节的管理重点是：', options: ['减少排队等待、提供自主活动', '加强纪律', '延长过渡', '统一行动'], answer: 0, explain: '减少等待。' }
        ],
        doc: { lead: '这一章讲实施。', sections: [
          { id: 'routine', title: '一日生活', html: `<p>生活、游戏、学习、运动；弹性作息与过渡环节。</p>` },
          { id: 'forms', title: '组织形式', html: `<p>集体、小组、个别；以游戏与小组为主。</p>` }
        ], refs: [] } },
      { title: '课程评价', brief: '看发展不看分数。',
        q: [
          { stem: '幼儿园课程评价的重点是：', options: ['幼儿的发展与课程适宜性', '考试分数', '排名', '识字量'], answer: 0, explain: '发展。' },
          { stem: '观察记录在评价中的作用是：', options: ['提供真实发展证据', '替代教学', '评比', '家长展示'], answer: 0, explain: '证据。' },
          { stem: '评价结果应用的方向是：', options: ['调整课程与支持策略', '排名', '奖惩', '公布'], answer: 0, explain: '改进。' }
        ],
        doc: { lead: '这一章讲评价。', sections: [
          { id: 'focus', title: '重点', html: `<p>发展性评价、过程性评价；不排名不考试。</p>` },
          { id: 'tools', title: '工具', html: `<p>观察记录、成长档案、作品分析、家长反馈。</p>` }
        ], refs: [] } },
      { title: '园本课程', brief: '自己园的特色。',
        q: [
          { stem: '园本课程开发的依据是：', options: ['本园资源、儿童兴趣与社区文化', '照搬他园', '教材', '考试'], answer: 0, explain: '本土。' },
          { stem: '园本课程开发的主体是：', options: ['园长与教师团队', '专家唯一', '家长唯一', '出版社'], answer: 0, explain: '教师。' },
          { stem: '园本课程开发的常见问题是：', options: ['缺乏规划与评价', '资源太多', '教师不参与', '孩子不喜欢'], answer: 0, explain: '规划。' }
        ],
        doc: { lead: '这一章讲园本。', sections: [
          { id: 'process', title: '流程', html: `<p>资源盘点 → 目标 → 内容 → 实施 → 评价修订。</p>` },
          { id: 'cases', title: '案例', html: `<p>乡土资源、绘本阅读、自然教育、生活课程。</p>` }
        ], refs: [] } }
    ]
  },
  /* 5 游戏与儿童发展 +5 */
  {
    chapters: [
      { title: '游戏的本质与价值', brief: '玩就是学。',
        q: [
          { stem: '游戏的本质特征是：', options: ['自愿、自主、愉悦、虚构', '有组织', '有考核', '有奖励'], answer: 0, explain: '四特征。' },
          { stem: '游戏对发展的作用是：', options: ['促进认知、社会性、情绪与身体发展', '浪费时间', '只促进身体', '只促进语言'], answer: 0, explain: '全面。' },
          { stem: '教师在游戏中的角色是：', options: ['观察者、支持者、引导者', '指挥者', '旁观者', '裁判'], answer: 0, explain: '支持。' }
        ],
        doc: { lead: '这一章讲游戏。', sections: [
          { id: 'nature', title: '本质', html: `<p>自愿性、自主性、愉悦性、虚构性、过程性。</p>` },
          { id: 'value', title: '价值', html: `<p>认知、社会性、情绪、身体；游戏是幼儿的学习方式。</p>` }
        ], refs: [] } },
      { title: '游戏类型与发展阶段', brief: '从独自玩到合作玩。',
        q: [
          { stem: '幼儿游戏的社会性发展阶段是：', options: ['独自、旁观、平行、联合、合作', '合作、联合、平行', '只有合作', '随机'], answer: 0, explain: '五阶段。' },
          { stem: '象征性游戏（假装游戏）的高峰期是：', options: ['3–6 岁', '0–1 岁', '10 岁', '青春期'], answer: 0, explain: '幼儿期。' },
          { stem: '建构游戏的价值是：', options: ['发展空间、计划与问题解决能力', '只发展动作', '只发展语言', '只发展社交'], answer: 0, explain: '综合。' }
        ],
        doc: { lead: '这一章讲类型。', sections: [
          { id: 'social', title: '社会性阶段', html: `<p>独自、旁观、平行、联合、合作游戏。</p>` },
          { id: 'types', title: '类型', html: `<p>角色、建构、表演、规则、运动、探究游戏。</p>` }
        ], refs: [] } },
      { title: '游戏环境与材料', brief: '材料决定玩法。',
        q: [
          { stem: '低结构材料的特点是：', options: ['玩法开放、可多种组合', '功能固定', '成品玩具', '电子设备'], answer: 0, explain: '开放。' },
          { stem: '游戏区角设置的原则是：', options: ['数量充足、分区合理、可自主取放', '越多越好', '统一', '教师控制'], answer: 0, explain: '开放。' },
          { stem: '户外游戏环境应保证：', options: ['挑战性与安全性平衡', '绝对安全无挑战', '越刺激越好', '只看护'], answer: 0, explain: '平衡。' }
        ],
        doc: { lead: '这一章讲环境。', sections: [
          { id: 'materials', title: '材料', html: `<p>高/低结构、自然材料、废旧材料；数量与可及性。</p>` },
          { id: 'space', title: '空间', html: `<p>区角划分、动静分离、户外挑战区。</p>` }
        ], refs: [] } },
      { title: '游戏观察与支持', brief: '看懂再介入。',
        q: [
          { stem: '教师介入游戏的时机是：', options: ['幼儿需要帮助或出现危险时', '随时介入', '从不介入', '只看结果'], answer: 0, explain: '适时。' },
          { stem: '游戏观察记录应包含：', options: ['情境、行为、语言、分析', '只有照片', '只有时间', '只有结论'], answer: 0, explain: '完整。' },
          { stem: '过度介入游戏的后果是：', options: ['打断幼儿自主性', '提高水平', '节省时间', '便于管理'], answer: 0, explain: '自主。' }
        ],
        doc: { lead: '这一章讲支持。', sections: [
          { id: 'observe', title: '观察', html: `<p>扫描观察、追踪观察、白描记录；分析游戏水平。</p>` },
          { id: 'intervene', title: '介入', html: `<p>平行介入、交叉介入、垂直介入；最小干预。</p>` }
        ], refs: [] } },
      { title: '游戏与课程', brief: '游戏化教学。',
        q: [
          { stem: '游戏化课程的核心是：', options: ['以游戏精神组织学习', '把教学变成比赛', '加奖励', '只玩游戏'], answer: 0, explain: '游戏精神。' },
          { stem: '教学游戏与自主游戏的区别是：', options: ['是否有教师预设目标', '是否有材料', '是否快乐', '是否分组'], answer: 0, explain: '目标。' },
          { stem: '游戏与学习的关系是：', options: ['游戏是学习的重要途径', '互斥', '游戏妨碍学习', '无关'], answer: 0, explain: '途径。' }
        ],
        doc: { lead: '这一章讲融合。', sections: [
          { id: 'spirit', title: '游戏精神', html: `<p>自主、愉悦、创造；课程游戏化不是加游戏。</p>` },
          { id: 'balance', title: '平衡', html: `<p>自主游戏与教学游戏的比例；保证充分自由游戏时间。</p>` }
        ], refs: [] } }
    ]
  },
  /* 6 幼儿园班级管理 +5 */
  {
    chapters: [
      { title: '班级常规', brief: '有序才自由。',
        q: [
          { stem: '班级常规建立的原则是：', options: ['少而明确、师幼共建、一致执行', '越多越好', '教师单方制定', '随意'], answer: 0, explain: '共建。' },
          { stem: '常规教育的有效方式是：', options: ['示范、游戏化练习、正向强化', '批评', '罚站', '说教'], answer: 0, explain: '正向。' },
          { stem: '过渡环节的管理目标是：', options: ['减少等待、平稳过渡', '加强纪律', '延长时间', '统一行动'], answer: 0, explain: '减少等待。' }
        ],
        doc: { lead: '这一章讲常规。', sections: [
          { id: 'rules', title: '常规', html: `<p>生活、游戏、学习常规；图示化、儿歌化。</p>` },
          { id: 'transition', title: '过渡', html: `<p>信号、分工、微活动；避免集体等待。</p>` }
        ], refs: [] } },
      { title: '一日生活组织', brief: '时间怎么排。',
        q: [
          { stem: '一日作息安排应：', options: ['稳定而有弹性', '严格固定', '随意', '以集体教学为主'], answer: 0, explain: '弹性。' },
          { stem: '生活环节的教育价值是：', options: ['培养自理能力与习惯', '只是照顾', '浪费时间', '无关'], answer: 0, explain: '教育价值。' },
          { stem: '午睡管理的重点是：', options: ['安全巡视与个别差异', '强制入睡', '统一时长', '不巡查'], answer: 0, explain: '巡视。' }
        ],
        doc: { lead: '这一章讲生活。', sections: [
          { id: 'schedule', title: '作息', html: `<p>入园、运动、游戏、学习、进餐、午睡、离园。</p>` },
          { id: 'selfcare', title: '自理', html: `<p>进餐、穿脱、如厕、整理；放手与指导并重。</p>` }
        ], refs: [] } },
      { title: '班级环境创设', brief: '环境是第三位老师。',
        q: [
          { stem: '班级环境创设的原则是：', options: ['安全、适宜、参与、动态', '美观唯一', '教师包办', '一次到位'], answer: 0, explain: '四原则。' },
          { stem: '幼儿参与环境创设的意义是：', options: ['增强归属感与学习机会', '省事', '美观', '应付检查'], answer: 0, explain: '参与。' },
          { stem: '墙面布置应避免：', options: ['过高、过高结构化、长期不变', '低矮', '可互动', '定期更换'], answer: 0, explain: '问题。' }
        ],
        doc: { lead: '这一章讲环境。', sections: [
          { id: 'principles', title: '原则', html: `<p>安全性、适宜性、参与性、动态性、审美性。</p>` },
          { id: 'zones', title: '区角', html: `<p>角色、建构、阅读、美工、科学；材料可及与标识。</p>` }
        ], refs: [] } },
      { title: '家园沟通', brief: '和家长站在一边。',
        q: [
          { stem: '家园沟通的基本原则是：', options: ['尊重、平等、合作', '教师权威', '家长服从', '只报喜'], answer: 0, explain: '合作。' },
          { stem: '处理家长投诉的第一步是：', options: ['倾听并了解事实', '辩解', '推责', '上报'], answer: 0, explain: '倾听。' },
          { stem: '家长会的有效形式是：', options: ['体验式、参与式', '单向宣讲', '批评', '收费'], answer: 0, explain: '参与。' }
        ],
        doc: { lead: '这一章讲沟通。', sections: [
          { id: 'channels', title: '渠道', html: `<p>日常交流、家访、家长会、成长档案、线上群。</p>` },
          { id: 'conflict', title: '冲突', html: `<p>倾听—共情—事实—方案—跟进；避免当众指责。</p>` }
        ], refs: [] } },
      { title: '安全管理', brief: '零事故是底线。',
        q: [
          { stem: '幼儿园安全管理的核心是：', options: ['预防为主、制度保障', '事后处理', '减少活动', '封闭管理'], answer: 0, explain: '预防。' },
          { stem: '接送制度的关键是：', options: ['凭卡接送、身份核验', '熟人即可', '口头交代', '不登记'], answer: 0, explain: '核验。' },
          { stem: '突发事件的处置顺序是：', options: ['保护生命—报告—处置—沟通', '先追责', '先公关', '先隐瞒'], answer: 0, explain: '生命优先。' }
        ],
        doc: { lead: '这一章讲安全。', sections: [
          { id: 'system', title: '制度', html: `<p>接送、交接、巡查、演练、食品与用药管理。</p>` },
          { id: 'emergency', title: '应急', html: `<p>预案、演练、上报与家长沟通；记录留痕。</p>` }
        ], refs: [] } }
    ]
  },
  /* 7 五大领域教学法 +5 */
  {
    chapters: [
      { title: '健康领域', brief: '身体与心理。',
        q: [
          { stem: '健康领域的目标包括：', options: ['身心状况、动作发展、生活习惯与能力', '识字', '算术', '绘画'], answer: 0, explain: '三方面。' },
          { stem: '体育活动设计的原则是：', options: ['适量、有趣、循序渐进', '越累越好', '统一', '只做操'], answer: 0, explain: '适量。' },
          { stem: '生活习惯培养的关键是：', options: ['一致性、示范、坚持', '说教', '惩罚', '比赛'], answer: 0, explain: '一致性。' }
        ],
        doc: { lead: '这一章讲健康。', sections: [
          { id: 'goals', title: '目标', html: `<p>身心状况、动作发展、生活习惯与生活能力。</p>` },
          { id: 'activity', title: '活动', html: `<p>体育活动、生活活动、安全教育；运动量与密度。</p>` }
        ], refs: [] } },
      { title: '语言领域', brief: '听说读。',
        q: [
          { stem: '语言领域的核心目标是：', options: ['倾听与表达、阅读与书写准备', '识字量', '背诵', '语法'], answer: 0, explain: '两维度。' },
          { stem: '绘本教学的有效方式是：', options: ['共读、提问、表演、复述', '只读字', '只做练习', '只背诵'], answer: 0, explain: '共读。' },
          { stem: '前书写准备的重点是：', options: ['精细动作与书面表达兴趣', '写规范字', '练字帖', '学拼音'], answer: 0, explain: '准备。' }
        ],
        doc: { lead: '这一章讲语言。', sections: [
          { id: 'goals', title: '目标', html: `<p>倾听与表达、阅读与书写准备。</p>` },
          { id: 'methods', title: '方法', html: `<p>谈话、讲述、文学欣赏、早期阅读；避免识字训练。</p>` }
        ], refs: [] } },
      { title: '社会领域', brief: '规则与交往。',
        q: [
          { stem: '社会领域的目标包括：', options: ['人际交往与社会适应', '识字', '计算', '绘画'], answer: 0, explain: '两维度。' },
          { stem: '培养规则意识的有效方式是：', options: ['共同制定规则并坚持', '强制', '惩罚', '放任'], answer: 0, explain: '共建。' },
          { stem: '社会性发展的途径是：', options: ['日常生活与游戏中的真实交往', '说教', '课堂讲授', '考试'], answer: 0, explain: '真实情境。' }
        ],
        doc: { lead: '这一章讲社会。', sections: [
          { id: 'goals', title: '目标', html: `<p>人际交往、社会适应、归属感与规则意识。</p>` },
          { id: 'methods', title: '方法', html: `<p>情境体验、角色扮演、合作游戏、值日生。</p>` }
        ], refs: [] } },
      { title: '科学领域', brief: '探究与数学。',
        q: [
          { stem: '科学领域的核心是：', options: ['激发探究兴趣与探究能力', '背科学知识', '做实验题', '看视频'], answer: 0, explain: '探究。' },
          { stem: '幼儿数学学习的途径是：', options: ['生活与游戏中的操作', '做练习册', '背口诀', '考试'], answer: 0, explain: '操作。' },
          { stem: '科学探究活动的步骤是：', options: ['提出问题—猜想—操作—记录—交流', '讲解—练习—测验', '看—听—记', '读—背—考'], answer: 0, explain: '探究。' }
        ],
        doc: { lead: '这一章讲科学。', sections: [
          { id: 'inquiry', title: '探究', html: `<p>提问、猜想、操作、记录、交流；教师少讲多问。</p>` },
          { id: 'math', title: '数学', html: `<p>数、量、形、空间、时间；在操作与游戏中学习。</p>` }
        ], refs: [] } },
      { title: '艺术领域', brief: '感受与表现。',
        q: [
          { stem: '艺术领域的目标是：', options: ['感受与欣赏、表现与创造', '画得像', '唱得准', '考级'], answer: 0, explain: '两维度。' },
          { stem: '幼儿绘画指导的正确做法是：', options: ['提供材料、鼓励表达、不示范范画', '范画临摹', '纠正比例', '评比'], answer: 0, explain: '表达。' },
          { stem: '艺术活动的评价应：', options: ['关注过程与个体表达', '像不像', '排名', '技巧'], answer: 0, explain: '过程。' }
        ],
        doc: { lead: '这一章讲艺术。', sections: [
          { id: 'goals', title: '目标', html: `<p>感受与欣赏、表现与创造。</p>` },
          { id: 'methods', title: '方法', html: `<p>多材料、多形式；不范画、不评比；作品陈列。</p>` }
        ], refs: [] } }
    ]
  },
  /* 8 幼儿行为观察 +5 */
  {
    chapters: [
      { title: '观察的意义与方法', brief: '看懂孩子。',
        q: [
          { stem: '幼儿行为观察的目的是：', options: ['理解发展、调整支持', '评比', '找错', '向家长汇报'], answer: 0, explain: '理解。' },
          { stem: '常用的观察方法包括：', options: ['轶事记录、时间取样、事件取样、等级评定', '只有录像', '只有问卷', '只有测试'], answer: 0, explain: '多种。' },
          { stem: '观察记录应遵循：', options: ['客观、具体、及时', '主观评价', '事后回忆', '概括'], answer: 0, explain: '客观。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'why', title: '目的', html: `<p>了解兴趣与水平、发现需要、评估课程。</p>` },
          { id: 'methods', title: '方法', html: `<p>轶事记录、时间/事件取样、检核表、等级评定。</p>` }
        ], refs: [] } },
      { title: '记录与档案', brief: '把观察留下来。',
        q: [
          { stem: '成长档案的内容包括：', options: ['作品、照片、观察记录、发展评估', '只有成绩', '只有照片', '只有评语'], answer: 0, explain: '多元。' },
          { stem: '白描式记录的要求是：', options: ['只描述事实不评价', '加评价', '写感受', '概括'], answer: 0, explain: '白描。' },
          { stem: '档案使用的伦理要求是：', options: ['保密、征得同意', '公开', '随意分享', '评比'], answer: 0, explain: '保密。' }
        ],
        doc: { lead: '这一章讲记录。', sections: [
          { id: 'portfolio', title: '档案', html: `<p>作品、照片、录音、观察记录、家长反馈。</p>` },
          { id: 'ethics', title: '伦理', html: `<p>隐私保护、用途告知、专业判断。</p>` }
        ], refs: [] } },
      { title: '行为分析与支持', brief: '从现象到原因。',
        q: [
          { stem: '分析问题行为应先：', options: ['了解前因后果（ABC）', '惩罚', '忽视', '请家长'], answer: 0, explain: 'ABC。' },
          { stem: '支持策略应基于：', options: ['观察证据与个体差异', '经验', '统一要求', '比较'], answer: 0, explain: '证据。' },
          { stem: '对发展迟缓幼儿的支持是：', options: ['早期干预与个别化支持', '等待', '忽视', '劝退'], answer: 0, explain: '干预。' }
        ],
        doc: { lead: '这一章讲支持。', sections: [
          { id: 'abc', title: 'ABC 分析', html: `<p>前因（A）—行为（B）—结果（C）；功能分析。</p>` },
          { id: 'plan', title: '支持', html: `<p>环境调整、技能教学、正向强化；家园一致。</p>` }
        ], refs: [] } },
      { title: '发展评估', brief: '不比排名。',
        q: [
          { stem: '幼儿发展评估的原则是：', options: ['发展性、过程性、个体化', '排名', '标准化考试', '横向比较'], answer: 0, explain: '发展性。' },
          { stem: '评估结果应主要用于：', options: ['调整教育支持', '评比', '招生', '分班'], answer: 0, explain: '支持。' },
          { stem: '评估信息的来源应：', options: ['多元（观察、作品、家长）', '只有测试', '只有教师印象', '只有家长'], answer: 0, explain: '多元。' }
        ],
        doc: { lead: '这一章讲评估。', sections: [
          { id: 'principles', title: '原则', html: `<p>发展性、过程性、个体化、多元化。</p>` },
          { id: 'use', title: '使用', html: `<p>调整课程与环境、个别化支持、与家长沟通。</p>` }
        ], refs: [] } },
      { title: '观察与课程', brief: '观察驱动教学。',
        q: [
          { stem: '观察与课程设计的关系是：', options: ['观察为课程提供依据', '无关', '课程为观察服务', '观察替代课程'], answer: 0, explain: '依据。' },
          { stem: '生成课程来源于：', options: ['幼儿兴趣与偶发事件', '教材', '考试', '计划'], answer: 0, explain: '生成。' },
          { stem: '教师专业成长的重要途径是：', options: ['持续观察与反思', '只看书', '只听讲座', '只写论文'], answer: 0, explain: '实践。' }
        ],
        doc: { lead: '这一章讲循环。', sections: [
          { id: 'cycle', title: '循环', html: `<p>观察 → 分析 → 计划 → 支持 → 再观察。</p>` },
          { id: 'growth', title: '成长', html: `<p>观察记录是教师研究儿童的第一手资料。</p>` }
        ], refs: [] } }
    ]
  },
  /* 9 家园共育 +5 */
  {
    chapters: [
      { title: '家园共育的理念', brief: '合作而非配合。',
        q: [
          { stem: '家园共育的核心是：', options: ['平等合作、共同育人', '家长配合', '学校主导', '家长监督'], answer: 0, explain: '合作。' },
          { stem: '家园共育的意义是：', options: ['一致的教育影响促进发展', '减轻教师负担', '增加收入', '便于管理'], answer: 0, explain: '一致性。' },
          { stem: '家园关系的理想状态是：', options: ['伙伴关系', '上下级', '买卖关系', '互不干涉'], answer: 0, explain: '伙伴。' }
        ],
        doc: { lead: '这一章讲理念。', sections: [
          { id: 'concept', title: '理念', html: `<p>平等、尊重、合作、共赢；家长是重要合作伙伴。</p>` },
          { id: 'value', title: '价值', html: `<p>教育一致性、资源互补、儿童发展支持网络。</p>` }
        ], refs: [] } },
      { title: '沟通渠道', brief: '怎么和家长说话。',
        q: [
          { stem: '日常沟通的有效方式是：', options: ['简短具体、聚焦孩子表现', '长篇大论', '只报问题', '群发'], answer: 0, explain: '具体。' },
          { stem: '家长开放日的作用是：', options: ['让家长了解教育过程', '展示成绩', '评比', '招生'], answer: 0, explain: '了解。' },
          { stem: '线上沟通的注意点是：', options: ['保护隐私、及时回复、避免刷屏', '随时发', '公开批评', '只发表情'], answer: 0, explain: '边界。' }
        ],
        doc: { lead: '这一章讲渠道。', sections: [
          { id: 'channels', title: '渠道', html: `<p>接送交流、家长会、开放日、家访、成长档案、线上群。</p>` },
          { id: 'skills', title: '技巧', html: `<p>具体描述、先肯定后建议、倾听共情、约定跟进。</p>` }
        ], refs: [] } },
      { title: '家长参与', brief: '让家长进来。',
        q: [
          { stem: '家长参与的形式包括：', options: ['助教、资源提供、活动志愿者', '只交钱', '只签字', '只接送'], answer: 0, explain: '多种。' },
          { stem: '家长参与的关键是：', options: ['与课程目标相关、量力而行', '越多越好', '必须参加', '统一要求'], answer: 0, explain: '适切。' },
          { stem: '家长资源开发的价值是：', options: ['拓展课程资源与儿童经验', '省教师力气', '评比', '收费'], answer: 0, explain: '资源。' }
        ],
        doc: { lead: '这一章讲参与。', sections: [
          { id: 'forms', title: '形式', html: `<p>家长助教、职业分享、亲子活动、资源捐赠。</p>` },
          { id: 'principle', title: '原则', html: `<p>自愿、适切、不影响正常秩序；提前沟通与培训。</p>` }
        ], refs: [] } },
      { title: '家庭教育指导', brief: '帮家长会教。',
        q: [
          { stem: '家庭教育指导的重点是：', options: ['科学育儿理念与方法', '提前小学化', '严格管教', '包办'], answer: 0, explain: '科学。' },
          { stem: '指导家长纠正"小学化"的做法是：', options: ['解释发展规律、提供替代活动', '强制', '批评', '不管'], answer: 0, explain: '解释。' },
          { stem: '针对祖辈抚养的指导应：', options: ['尊重并给出可操作建议', '指责', '忽视', '强制'], answer: 0, explain: '尊重。' }
        ],
        doc: { lead: '这一章讲指导。', sections: [
          { id: 'content', title: '内容', html: `<p>发展规律、游戏价值、习惯培养、情绪支持、安全教育。</p>` },
          { id: 'methods', title: '方法', html: `<p>讲座、个案咨询、家长学校、公众号推文。</p>` }
        ], refs: [] } },
      { title: '冲突处理', brief: '矛盾怎么化解。',
        q: [
          { stem: '处理家园冲突的第一步是：', options: ['倾听并核实事实', '辩解', '上报', '冷处理'], answer: 0, explain: '倾听。' },
          { stem: '涉及幼儿安全的事件应：', options: ['第一时间处置并如实沟通', '隐瞒', '拖延', '推责'], answer: 0, explain: '如实。' },
          { stem: '冲突后的修复关键是：', options: ['跟进与信任重建', '道歉了事', '换老师', '转园'], answer: 0, explain: '跟进。' }
        ],
        doc: { lead: '这一章讲冲突。', sections: [
          { id: 'steps', title: '五步', html: `<p>倾听、共情、核实、方案、跟进。</p>` },
          { id: 'boundary', title: '边界', html: `<p>不与家长争执、不在群里点名、保留记录。</p>` }
        ], refs: [] } }
    ]
  },
  /* 10 教育实习 +1 */
  {
    chapters: [
      { title: '实习复盘', brief: '从带班到带好班。',
        q: [
          { stem: '学前教育实习最该留下的是：', options: ['活动方案与观察记录', '工牌', '照片', '评语'], answer: 0, explain: '作品。' },
          { stem: '实习日志的推荐写法是：', options: ['问题—做法—结果—反思', '流水账', '只写结论', '只写感受'], answer: 0, explain: '结构化。' },
          { stem: '面试讲实习的最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'output', title: '三件套', html: `<p>3 份活动方案、1 份观察记录、1 份实习总结。</p>` },
          { id: 'review', title: '复盘', html: `<p>每周五行；指导教师评语与自我反思对照。</p>` }
        ], refs: [] } }
    ]
  },
  /* 11 毕业论文 +1 */
  {
    chapters: [
      { title: '论文选题与写作', brief: '小问题、真研究。',
        q: [
          { stem: '学前教育论文最合适的选题是：', options: ['小而具体、可完成', '宏大理论', '流行话题', '导师方向唯一'], answer: 0, explain: '可行。' },
          { stem: '论文的核心是：', options: ['回答研究问题并提供证据', '篇幅', '引用数量', '格式'], answer: 0, explain: '论证。' },
          { stem: '答辩时最该准备的是：', options: ['熟悉数据与每一个结论的依据', '背稿', 'PPT 模板', '服装'], answer: 0, explain: '依据。' }
        ],
        doc: { lead: '这一章讲论文。', sections: [
          { id: 'topic', title: '选题', html: `<p>游戏、观察、家园共育、课程开发、幼小衔接。</p>` },
          { id: 'structure', title: '结构', html: `<p>问题—文献—方法—结果—讨论—结论。</p>` }
        ], refs: [] } }
    ]
  },
  /* 12 考编与考研 +1 */
  {
    chapters: [
      { title: '考编与考研规划', brief: '两条路的准备。',
        q: [
          { stem: '幼儿教师招聘考试通常包括：', options: ['教综 + 学前教育专业知识 + 面试（含技能展示）', '只有笔试', '只有面试', '只有技能'], answer: 0, explain: '三块。' },
          { stem: '技能展示通常包括：', options: ['弹唱、绘画、舞蹈、讲故事', '编程', '翻译', '演讲'], answer: 0, explain: '五项技能。' },
          { stem: '面试试讲的关键是：', options: ['目标清晰、游戏化、互动自然', '背稿', 'PPT 精美', '时长最长'], answer: 0, explain: '基本功。' }
        ],
        doc: { lead: '这一章讲规划。', sections: [
          { id: 'exam', title: '考编', html: `<p>教综 + 学前教育学/心理学/卫生学 + 技能 + 试讲。</p>` },
          { id: 'postgrad', title: '考研', html: `<p>311 或学前教育学自命题；3–6 月基础，7–8 月真题，9–12 月背诵。</p>` }
        ], refs: [] } }
    ]
  }
]);
