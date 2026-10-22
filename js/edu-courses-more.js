/* ==========================================================
   edu-courses-more.js · 教育学：减半标准（主干 8 / 出口 4）
   ========================================================== */

appendChapters('education-教育学', [
  /* 1 教育学原理 +5 */
  {
    chapters: [
      { title: '教育的本质', brief: '教育是什么、不是什么。',
        q: [
          { stem: '教育的质的规定性是：', options: ['有目的地培养人', '传授知识', '社会活动', '文化传承'], answer: 0, explain: '育人。' },
          { stem: '广义教育与狭义教育的区别是：', options: ['是否指学校教育', '是否正式', '是否国家办', '是否有课程'], answer: 0, explain: '口径。' },
          { stem: '教育的基本要素是：', options: ['教育者、受教育者、教育影响', '教师、学生、教材', '学校、家庭、社会', '德、智、体'], answer: 0, explain: '三要素。' }
        ],
        doc: { lead: '这一章讲本体。', sections: [
          { id: 'concept', title: '概念', html: `<p>广义/狭义；教育的质的规定性——有目的地培养人。</p>` },
          { id: 'elements', title: '要素', html: `<p>教育者、受教育者、教育影响；三者关系。</p>` }
        ], refs: [] } },
      { title: '教育目的', brief: '培养什么人。',
        q: [
          { stem: '我国教育目的的理论基础是：', options: ['马克思主义关于人的全面发展学说', '实用主义', '要素主义', '永恒主义'], answer: 0, explain: '全面发展。' },
          { stem: '教育目的与培养目标的关系是：', options: ['一般与特殊', '相同', '并列', '无关'], answer: 0, explain: '层次。' },
          { stem: '素质教育与应试教育的根本区别是：', options: ['是否面向全体、全面发展', '是否考试', '是否升学', '是否减负'], answer: 0, explain: '本质。' }
        ],
        doc: { lead: '这一章讲目的。', sections: [
          { id: 'theory', title: '理论', html: `<p>个人本位与社会本位；全面发展学说。</p>` },
          { id: 'levels', title: '层次', html: `<p>教育目的 → 培养目标 → 课程目标 → 教学目标。</p>` }
        ], refs: [] } },
      { title: '教育制度', brief: '学制与体系。',
        q: [
          { stem: '我国现行学制类型是：', options: ['分支型学制', '双轨制', '单轨制', '多轨制'], answer: 0, explain: '分支型。' },
          { stem: '义务教育的基本特征是：', options: ['强制性、免费性、普及性', '选择性', '收费', '精英化'], answer: 0, explain: '三性。' },
          { stem: '终身教育思想的提出者是：', options: ['朗格朗', '杜威', '赫尔巴特', '夸美纽斯'], answer: 0, explain: '朗格朗。' }
        ],
        doc: { lead: '这一章讲制度。', sections: [
          { id: 'school', title: '学制', html: `<p>双轨、单轨、分支型；我国学制演变。</p>` },
          { id: 'lifelong', title: '终身教育', html: `<p>终身化、全民化、民主化、多元化。</p>` }
        ], refs: [] } },
      { title: '教育公平', brief: '机会、过程、结果。',
        q: [
          { stem: '教育公平的三个层次是：', options: ['起点、过程、结果公平', '城市、农村、区域', '小学、中学、大学', '机会、质量、投入'], answer: 0, explain: '三层次。' },
          { stem: '教育机会均等的核心是：', options: ['入学机会不受出身限制', '结果相同', '投入相同', '分数相同'], answer: 0, explain: '起点。' },
          { stem: '缩小校际差距的主要手段是：', options: ['资源均衡配置与教师流动', '择校', '重点校', '收费'], answer: 0, explain: '均衡。' }
        ],
        doc: { lead: '这一章讲公平。', sections: [
          { id: 'levels', title: '三层次', html: `<p>起点（机会）、过程（条件）、结果（成就）。</p>` },
          { id: 'policy', title: '政策', html: `<p>均衡发展、集团化办学、教师轮岗、就近入学。</p>` }
        ], refs: [] } },
      { title: '教师专业发展', brief: '教师怎么成长。',
        q: [
          { stem: '教师专业发展的主要途径是：', options: ['反思性实践与同伴互助', '只靠培训', '只看书', '只靠经验'], answer: 0, explain: '实践反思。' },
          { stem: '教师角色的转变方向是：', options: ['从知识传授者到学习促进者', '从促进者到传授者', '只做管理', '只做研究'], answer: 0, explain: '转变。' },
          { stem: '教师职业道德的核心是：', options: ['爱与责任', '严格', '权威', '奉献'], answer: 0, explain: '师德。' }
        ],
        doc: { lead: '这一章讲教师。', sections: [
          { id: 'stages', title: '发展阶段', html: `<p>关注生存 → 关注情境 → 关注学生。</p>` },
          { id: 'ways', title: '途径', html: `<p>反思、观摩、教研、师徒制、行动研究。</p>` }
        ], refs: [] } }
    ]
  },
  /* 2 心理学基础 +5 */
  {
    chapters: [
      { title: '认知发展', brief: '思维如何长大。',
        q: [
          { stem: '皮亚杰认知发展阶段不包括：', options: ['感知运动阶段', '前运算阶段', '具体运算阶段', '道德成规阶段'], answer: 3, explain: '后者属道德发展。' },
          { stem: '守恒概念出现在：', options: ['具体运算阶段', '前运算阶段', '感知运动阶段', '形式运算阶段'], answer: 0, explain: '7–11 岁。' },
          { stem: '维果茨基强调：', options: ['社会文化与最近发展区', '成熟', '遗传', '强化'], answer: 0, explain: '社会文化。' }
        ],
        doc: { lead: '这一章讲认知。', sections: [
          { id: 'piaget', title: '皮亚杰', html: `<p>四阶段；同化、顺应、平衡。</p>` },
          { id: 'vygotsky', title: '维果茨基', html: `<p>最近发展区、支架、社会互动。</p>` }
        ], refs: [] } },
      { title: '人格与社会性', brief: '情绪、依恋、同伴。',
        q: [
          { stem: '依恋类型中"安全型"的特点是：', options: ['分离焦虑但能安抚', '完全不焦虑', '混乱', '回避'], answer: 0, explain: '安全。' },
          { stem: '埃里克森人格发展理论的核心是：', options: ['阶段性的心理社会危机', '认知结构', '强化', '本能'], answer: 0, explain: '八阶段。' },
          { stem: '同伴关系对发展的作用是：', options: ['提供社会比较与归属', '无作用', '只影响成绩', '只影响情绪'], answer: 0, explain: '同伴。' }
        ],
        doc: { lead: '这一章讲社会性。', sections: [
          { id: 'attachment', title: '依恋', html: `<p>安全型、回避型、矛盾型；抚养质量。</p>` },
          { id: 'erikson', title: '埃里克森', html: `<p>信任/怀疑 → 主动/内疚 → 勤奋/自卑 → 同一性。</p>` }
        ], refs: [] } },
      { title: '学习理论', brief: '行为、认知、建构。',
        q: [
          { stem: '操作性条件反射的核心是：', options: ['强化与惩罚塑造行为', '顿悟', '模仿', '同化'], answer: 0, explain: '斯金纳。' },
          { stem: '建构主义认为知识是：', options: ['学习者主动建构的', '被动接受的', '天赋的', '强化的'], answer: 0, explain: '建构。' },
          { stem: '班杜拉的社会学习理论强调：', options: ['观察学习与自我效能', '强化唯一', '本能', '成熟'], answer: 0, explain: '观察。' }
        ],
        doc: { lead: '这一章讲学习。', sections: [
          { id: 'behavior', title: '行为主义', html: `<p>经典/操作条件反射；强化程式。</p>` },
          { id: 'cognitive', title: '认知与建构', html: `<p>信息加工、建构主义、社会学习。</p>` }
        ], refs: [] } },
      { title: '动机', brief: '为什么愿意学。',
        q: [
          { stem: '自我决定论的基本需要是：', options: ['自主、胜任、归属', '安全、尊重、自我实现', '成就、权力、亲和', '生理、安全、社交'], answer: 0, explain: '三需要。' },
          { stem: '成就动机理论把动机分为：', options: ['追求成功与避免失败', '内在与外在', '近景与远景', '直接与间接'], answer: 0, explain: '两倾向。' },
          { stem: '提高内在动机的方式是：', options: ['给选择、设可达挑战', '加大奖惩', '排名', '延长课时'], answer: 0, explain: '自主。' }
        ],
        doc: { lead: '这一章讲动机。', sections: [
          { id: 'theories', title: '理论', html: `<p>强化、需要层次、自我决定、成就动机、归因。</p>` },
          { id: 'classroom', title: '课堂', html: `<p>目标结构、反馈方式、自主支持。</p>` }
        ], refs: [] } },
      { title: '个体差异', brief: '因材施教的依据。',
        q: [
          { stem: '智力理论中"多元智能"的提出者是：', options: ['加德纳', '斯皮尔曼', '卡特尔', '斯滕伯格'], answer: 0, explain: '加德纳。' },
          { stem: '学习风格理论受到的主要批评是：', options: ['缺乏匹配效应的实证支持', '太复杂', '不实用', '无法测量'], answer: 0, explain: '证据不足。' },
          { stem: '差异化教学的核心是：', options: ['基于学生差异调整内容与过程', '分层编班', '统一进度', '加大作业'], answer: 0, explain: '差异化。' }
        ],
        doc: { lead: '这一章讲差异。', sections: [
          { id: 'intelligence', title: '智力', html: `<p>g 因素、多元智能、三元智力；测量与局限。</p>` },
          { id: 'differentiation', title: '差异化', html: `<p>内容、过程、产品、环境四个维度的调整。</p>` }
        ], refs: [] } }
    ]
  },
  /* 3 教育社会学 +5 */
  {
    chapters: [
      { title: '教育的社会功能', brief: '社会化与筛选。',
        q: [
          { stem: '教育的显性功能与隐性功能的区分者是：', options: ['默顿', '涂尔干', '韦伯', '布迪厄'], answer: 0, explain: '默顿。' },
          { stem: '教育的社会化功能指：', options: ['传递规范与价值观', '筛选人才', '经济发展', '政治控制'], answer: 0, explain: '社会化。' },
          { stem: '教育的筛选功能可能带来：', options: ['社会再生产', '完全平等', '消除差异', '文化融合'], answer: 0, explain: '再生产。' }
        ],
        doc: { lead: '这一章讲功能。', sections: [
          { id: 'manifest', title: '显性/隐性', html: `<p>社会化、筛选、经济、政治、文化功能。</p>` },
          { id: 'conflict', title: '冲突视角', html: `<p>教育作为再生产工具；文凭社会。</p>` }
        ], refs: [] } },
      { title: '阶层与教育流动', brief: '出身还重要吗。',
        q: [
          { stem: '布迪厄提出的核心概念是：', options: ['文化资本与惯习', '社会流动', '标签', '符号互动'], answer: 0, explain: '文化资本。' },
          { stem: '教育扩张对流动的影响是：', options: ['未必提高流动率（文凭膨胀）', '必然提高', '必然降低', '无影响'], answer: 0, explain: '文凭膨胀。' },
          { stem: '家庭背景影响学业的主要机制是：', options: ['资源、期望与文化资本', '基因唯一', '学校唯一', '运气'], answer: 0, explain: '多重。' }
        ],
        doc: { lead: '这一章讲流动。', sections: [
          { id: 'capital', title: '资本', html: `<p>经济、文化、社会资本；惯习与场域。</p>` },
          { id: 'mobility', title: '流动', html: `<p>代际流动、文凭膨胀、教育公平的政策含义。</p>` }
        ], refs: [] } },
      { title: '学校组织', brief: '学校的运行逻辑。',
        q: [
          { stem: '学校的科层制特征表现在：', options: ['层级、分工、规则', '扁平', '无规则', '自治'], answer: 0, explain: '科层。' },
          { stem: '学校文化的核心是：', options: ['共享的价值与规范', '建筑', '课程', '考试'], answer: 0, explain: '文化。' },
          { stem: '教师文化的典型特征是：', options: ['个人主义与保守主义（哈格里夫斯）', '完全合作', '完全竞争', '无特征'], answer: 0, explain: '四种类型。' }
        ],
        doc: { lead: '这一章讲组织。', sections: [
          { id: 'bureau', title: '科层与松散耦合', html: `<p>学校既科层又松散耦合；制度同构。</p>` },
          { id: 'culture', title: '文化', html: `<p>学校文化、教师文化、学生文化。</p>` }
        ], refs: [] } },
      { title: '家庭与社区', brief: '学校之外的力量。',
        q: [
          { stem: '家校合作的核心是：', options: ['目标一致与双向沟通', '家长监督', '教师主导', '学校布置任务'], answer: 0, explain: '合作。' },
          { stem: '家庭社会经济地位影响教育的路径包括：', options: ['资源投入、教养方式、期望', '只有金钱', '只有基因', '只有学校'], answer: 0, explain: '多路径。' },
          { stem: '社区资源对学校的作用是：', options: ['提供实践场域与支持', '无作用', '替代学校', '只提供资金'], answer: 0, explain: '资源。' }
        ],
        doc: { lead: '这一章讲协同。', sections: [
          { id: 'family', title: '家庭', html: `<p>教养方式（权威型/专制型/放任型/忽视型）；期望与投入。</p>` },
          { id: 'community', title: '社区', html: `<p>家校社协同育人；资源与场域。</p>` }
        ], refs: [] } },
      { title: '教育政策的社会学', brief: '政策如何落地。',
        q: [
          { stem: '政策执行的"变通"现象说明：', options: ['基层会根据情境调整执行', '政策无效', '执行者反对', '政策模糊唯一'], answer: 0, explain: '变通。' },
          { stem: '教育政策的利益相关者包括：', options: ['政府、学校、教师、家长、学生', '只有政府', '只有学校', '只有家长'], answer: 0, explain: '多元。' },
          { stem: '政策评估的社会学视角关注：', options: ['分配效应与谁受益', '只有效率', '只有成本', '只有分数'], answer: 0, explain: '分配。' }
        ],
        doc: { lead: '这一章讲政策。', sections: [
          { id: 'process', title: '过程', html: `<p>议程、制定、执行、评估；基层变通。</p>` },
          { id: 'equity', title: '分配', html: `<p>谁受益、谁承担；政策的社会分层效应。</p>` }
        ], refs: [] } }
    ]
  },
  /* 4 发展心理学 +5 */
  {
    chapters: [
      { title: '发展阶段与规律', brief: '顺序性、阶段性、差异性。',
        q: [
          { stem: '发展的基本规律不包括：', options: ['顺序性', '阶段性', '不平衡性', '随意性'], answer: 3, explain: '非随意。' },
          { stem: '关键期概念强调：', options: ['某些能力在特定时期更易发展', '任何时期都一样', '越晚越好', '只与遗传有关'], answer: 0, explain: '关键期。' },
          { stem: '发展的差异性要求教育：', options: ['因材施教', '统一进度', '加大难度', '减少差异'], answer: 0, explain: '差异。' }
        ],
        doc: { lead: '这一章讲规律。', sections: [
          { id: 'laws', title: '规律', html: `<p>顺序性、阶段性、不平衡性、差异性、整体性。</p>` },
          { id: 'key', title: '关键期', html: `<p>语言、依恋的关键期；敏感期与可塑性。</p>` }
        ], refs: [] } },
      { title: '认知发展', brief: '从具体到抽象。',
        q: [
          { stem: '形式运算阶段的标志是：', options: ['抽象逻辑与假设演绎', '守恒', '客体永久性', '语言出现'], answer: 0, explain: '形式运算。' },
          { stem: '客体永久性出现在：', options: ['感知运动阶段', '前运算阶段', '具体运算阶段', '形式运算阶段'], answer: 0, explain: '8–12 月。' },
          { stem: '自我中心性表现在：', options: ['前运算阶段', '具体运算', '形式运算', '成人期'], answer: 0, explain: '三山实验。' }
        ],
        doc: { lead: '这一章讲认知。', sections: [
          { id: 'stages', title: '四阶段', html: `<p>感知运动、前运算、具体运算、形式运算。</p>` },
          { id: 'apply', title: '教学启示', html: `<p>提供具体材料、逐步抽象、尊重阶段特征。</p>` }
        ], refs: [] } },
      { title: '语言发展', brief: '说与读的成长。',
        q: [
          { stem: '语言发展的关键期大约在：', options: ['幼儿期', '青春期', '成年期', '老年期'], answer: 0, explain: '幼儿。' },
          { stem: '词汇爆发期通常出现在：', options: ['1.5–2 岁', '6 岁', '10 岁', '出生'], answer: 0, explain: '爆发。' },
          { stem: '促进语言发展的方式是：', options: ['多对话、共读', '多看屏幕', '多背单词', '减少交流'], answer: 0, explain: '互动。' }
        ],
        doc: { lead: '这一章讲语言。', sections: [
          { id: 'stages', title: '阶段', html: `<p>前语言期、单词句、双词句、完整句。</p>` },
          { id: 'support', title: '促进', html: `<p>亲子共读、扩展性回应、丰富语言环境。</p>` }
        ], refs: [] } },
      { title: '社会性与情绪', brief: '从自我到他人。',
        q: [
          { stem: '观点采择能力的发展意味着：', options: ['能理解他人视角', '自我中心', '情绪失控', '语言迟缓'], answer: 0, explain: '采择。' },
          { stem: '情绪调节能力随年龄：', options: ['增强', '减弱', '不变', '无规律'], answer: 0, explain: '发展。' },
          { stem: '同伴友谊在青少年期的作用是：', options: ['提供支持与认同', '无作用', '只影响成绩', '只影响健康'], answer: 0, explain: '支持。' }
        ],
        doc: { lead: '这一章讲社会性。', sections: [
          { id: 'self', title: '自我', html: `<p>自我意识、自尊、自我同一性。</p>` },
          { id: 'emotion', title: '情绪', html: `<p>情绪理解与调节；同伴与友谊。</p>` }
        ], refs: [] } },
      { title: '青春期发展', brief: '身心剧变的阶段。',
        q: [
          { stem: '青春期的典型特征是：', options: ['生理成熟加速与自我同一性探索', '认知退化', '情绪稳定', '依恋增强'], answer: 0, explain: '双重。' },
          { stem: '自我同一性危机（埃里克森）出现在：', options: ['青春期', '婴儿期', '学前期', '老年期'], answer: 0, explain: '同一性。' },
          { stem: '青春期教育的重点是：', options: ['尊重与引导并重', '严格控制', '放任', '只说教'], answer: 0, explain: '引导。' }
        ],
        doc: { lead: '这一章讲青春期。', sections: [
          { id: 'change', title: '变化', html: `<p>生理成熟、认知抽象化、同伴取向、情绪波动。</p>` },
          { id: 'support', title: '支持', html: `<p>同一性探索、亲子沟通、风险行为预防。</p>` }
        ], refs: [] } }
    ]
  },
  /* 5 学习心理学 +5 */
  {
    chapters: [
      { title: '行为主义学习观', brief: '刺激与反应。',
        q: [
          { stem: '经典条件反射的提出者是：', options: ['巴甫洛夫', '斯金纳', '华生', '桑代克'], answer: 0, explain: '巴甫洛夫。' },
          { stem: '负强化与惩罚的区别是：', options: ['前者增加行为、后者减少行为', '相同', '前者减少', '后者增加'], answer: 0, explain: '效果。' },
          { stem: '程序教学的理论基础是：', options: ['操作性条件反射', '建构主义', '认知失调', '归因'], answer: 0, explain: '斯金纳。' }
        ],
        doc: { lead: '这一章讲行为。', sections: [
          { id: 'classical', title: '经典条件反射', html: `<p>无条件/条件刺激；泛化与消退。</p>` },
          { id: 'operant', title: '操作条件反射', html: `<p>强化、惩罚、消退；强化程式与塑造。</p>` }
        ], refs: [] } },
      { title: '认知学习观', brief: '信息加工。',
        q: [
          { stem: '工作记忆的容量约为：', options: ['7±2 个组块', '无限', '1 个', '100 个'], answer: 0, explain: '有限。' },
          { stem: '精细复述比机械复述更有效，因为：', options: ['建立意义联系', '重复更多', '更快', '更省力'], answer: 0, explain: '意义。' },
          { stem: '图式的作用是：', options: ['组织知识、影响理解与记忆', '存储情绪', '控制动作', '无作用'], answer: 0, explain: '组织。' }
        ],
        doc: { lead: '这一章讲认知。', sections: [
          { id: 'memory', title: '记忆系统', html: `<p>感觉记忆、工作记忆、长时记忆；编码与提取。</p>` },
          { id: 'strategies', title: '策略', html: `<p>复述、精加工、组织、双重编码。</p>` }
        ], refs: [] } },
      { title: '建构主义', brief: '知识是建构的。',
        q: [
          { stem: '建构主义教学观强调：', options: ['情境、协作、会话、意义建构', '讲授唯一', '强化', '记忆'], answer: 0, explain: '四要素。' },
          { stem: '支架式教学的关键是：', options: ['逐步撤除支持', '永久支持', '增加难度', '减少互动'], answer: 0, explain: '渐隐。' },
          { stem: '认知学徒制的步骤包括：', options: ['示范、指导、退隐', '讲授、练习、考试', '预习、上课、复习', '读、写、算'], answer: 0, explain: '三阶段。' }
        ],
        doc: { lead: '这一章讲建构。', sections: [
          { id: 'principles', title: '原则', html: `<p>主动建构、社会互动、情境化、以学习者为中心。</p>` },
          { id: 'models', title: '模式', html: `<p>支架式、抛锚式、认知学徒制、合作学习。</p>` }
        ], refs: [] } },
      { title: '迁移', brief: '学以致用。',
        q: [
          { stem: '促进迁移最有效的方式是：', options: ['理解原理 + 多样化变式', '大量重复', '只做题', '只背答案'], answer: 0, explain: '原理与变式。' },
          { stem: '近迁移与远迁移的区别是：', options: ['情境相似程度', '时间长短', '难度', '记忆类型'], answer: 0, explain: '情境。' },
          { stem: '"为迁移而教"意味着：', options: ['重视原理与策略的教学', '多考试', '多作业', '加快进度'], answer: 0, explain: '策略。' }
        ],
        doc: { lead: '这一章讲迁移。', sections: [
          { id: 'types', title: '类型', html: `<p>近/远、正/负、水平/垂直迁移。</p>` },
          { id: 'conditions', title: '条件', html: `<p>原有认知结构、概括水平、变式练习、情境相似性。</p>` }
        ], refs: [] } },
      { title: '元认知与自我调节', brief: '学会学习。',
        q: [
          { stem: '元认知包括：', options: ['知识、体验与监控调节', '只有知识', '只有动机', '只有记忆'], answer: 0, explain: '三成分。' },
          { stem: '自我调节学习的循环是：', options: ['计划—执行—反思', '输入—输出', '预习—上课', '记忆—遗忘'], answer: 0, explain: '循环。' },
          { stem: '培养元认知最有效的方式是：', options: ['自我提问与学习日志', '多讲', '多练', '多考'], answer: 0, explain: '反思。' }
        ],
        doc: { lead: '这一章讲元认知。', sections: [
          { id: 'components', title: '成分', html: `<p>元认知知识、体验、监控与调节。</p>` },
          { id: 'training', title: '培养', html: `<p>计划表、自我提问、错题反思、同伴互评。</p>` }
        ], refs: [] } }
    ]
  },
  /* 6 课程论 +5 */
  {
    chapters: [
      { title: '课程类型', brief: '有哪些课程。',
        q: [
          { stem: '学科课程与活动课程的区别是：', options: ['按知识逻辑 vs 按经验与兴趣组织', '是否考试', '是否必修', '是否国家定'], answer: 0, explain: '组织方式。' },
          { stem: '隐性课程的特点是：', options: ['非计划、潜移默化', '有计划', '显性', '只在校外'], answer: 0, explain: '隐性。' },
          { stem: '校本课程开发的主体是：', options: ['学校与教师', '国家', '专家唯一', '出版社'], answer: 0, explain: '校本。' }
        ],
        doc: { lead: '这一章讲类型。', sections: [
          { id: 'types', title: '分类', html: `<p>学科/活动、分科/综合、必修/选修、显性/隐性、国家/地方/校本。</p>` },
          { id: 'hidden', title: '隐性课程', html: `<p>学校文化、师生关系、制度安排的潜移默化影响。</p>` }
        ], refs: [] } },
      { title: '课程目标与内容', brief: '教什么。',
        q: [
          { stem: '课程目标的三个维度是：', options: ['知识与技能、过程与方法、情感态度价值观', '德智体', '认知、情感、动作', '知识、能力、素质'], answer: 0, explain: '三维。' },
          { stem: '课程标准的作用是：', options: ['规定课程性质、目标与内容框架', '指定教材', '安排课表', '评价教师'], answer: 0, explain: '标准。' },
          { stem: '课程内容组织的基本原则是：', options: ['连续性、顺序性、整合性', '难度优先', '数量优先', '考试优先'], answer: 0, explain: '三性。' }
        ],
        doc: { lead: '这一章讲目标。', sections: [
          { id: 'objectives', title: '目标', html: `<p>三维目标、核心素养；行为动词。</p>` },
          { id: 'content', title: '内容', html: `<p>连续性、顺序性、整合性；教材与资源。</p>` }
        ], refs: [] } },
      { title: '课程实施', brief: '从文本到课堂。',
        q: [
          { stem: '课程实施的三种取向是：', options: ['忠实、相互适应、创生', '讲授、讨论、练习', '国家、地方、校本', '计划、执行、评价'], answer: 0, explain: '三取向。' },
          { stem: '课程实施的关键因素是：', options: ['教师的理解与能力', '教材', '课时', '考试'], answer: 0, explain: '教师。' },
          { stem: '课程实施中的"落差"指：', options: ['理想课程与实施课程之间的差距', '学生差异', '教材差异', '地区差异'], answer: 0, explain: '落差。' }
        ],
        doc: { lead: '这一章讲实施。', sections: [
          { id: 'orientations', title: '取向', html: `<p>忠实取向、相互适应取向、课程创生取向。</p>` },
          { id: 'factors', title: '因素', html: `<p>教师、资源、评价制度、学校文化。</p>` }
        ], refs: [] } },
      { title: '课程评价', brief: '课程好不好。',
        q: [
          { stem: '形成性评价与终结性评价的区别是：', options: ['过程改进 vs 结果鉴定', '是否考试', '是否量化', '是否公开'], answer: 0, explain: '功能。' },
          { stem: 'CIPP 评价模型包括：', options: ['背景、输入、过程、成果', '计划、执行、检查、改进', '知识、能力、素质', '诊断、形成、终结'], answer: 0, explain: '四层。' },
          { stem: '课程评价应避免：', options: ['只看分数', '多元方法', '过程关注', '利益相关者参与'], answer: 0, explain: '单一。' }
        ],
        doc: { lead: '这一章讲评价。', sections: [
          { id: 'types', title: '类型', html: `<p>诊断性、形成性、终结性；相对/绝对/个体内差异评价。</p>` },
          { id: 'models', title: '模型', html: `<p>CIPP、目标达成、回应性评价。</p>` }
        ], refs: [] } },
      { title: '校本课程开发', brief: '学校自己能开什么课。',
        q: [
          { stem: '校本课程开发的基本流程是：', options: ['需求分析—目标—内容—实施—评价', '选题—编写—使用', '申报—审批—开课', '调研—采购—上课'], answer: 0, explain: '流程。' },
          { stem: '校本课程的优势是：', options: ['贴合学校与学生实际', '统一标准', '便于考试', '成本低'], answer: 0, explain: '适切。' },
          { stem: '校本课程开发的常见问题是：', options: ['缺乏规划与评价', '太多资源', '教师不参与', '学生不喜欢'], answer: 0, explain: '规划。' }
        ],
        doc: { lead: '这一章讲开发。', sections: [
          { id: 'process', title: '流程', html: `<p>需求评估、目标设定、内容编制、实施、评价修订。</p>` },
          { id: 'support', title: '支持', html: `<p>教师培训、资源保障、课时安排、激励机制。</p>` }
        ], refs: [] } }
    ]
  },
  /* 7 教学论 +5 */
  {
    chapters: [
      { title: '教学模式', brief: '课堂的几种典型结构。',
        q: [
          { stem: '传递-接受模式的理论基础是：', options: ['有意义接受学习', '建构主义', '行为主义', '人本主义'], answer: 0, explain: '奥苏贝尔。' },
          { stem: '探究式教学的核心是：', options: ['学生提出问题并探究', '教师讲授', '大量练习', '考试'], answer: 0, explain: '探究。' },
          { stem: '合作学习的关键要素是：', options: ['积极互赖与个体问责', '分组即可', '竞争', '自由'], answer: 0, explain: '互赖。' }
        ],
        doc: { lead: '这一章讲模式。', sections: [
          { id: 'models', title: '常见模式', html: `<p>传递-接受、探究、合作、情境、翻转课堂。</p>` },
          { id: 'choose', title: '选择', html: `<p>依目标、内容、学情；没有万能模式。</p>` }
        ], refs: [] } },
      { title: '教学设计', brief: '一节课怎么设计。',
        q: [
          { stem: '教学设计的起点是：', options: ['学习者与目标分析', '选教材', '做课件', '写板书'], answer: 0, explain: '前端分析。' },
          { stem: '教学目标的行为化表述应包含：', options: ['行为、条件、标准', '只有行为', '只有知识', '只有态度'], answer: 0, explain: 'ABCD。' },
          { stem: '教学重难点的确定依据是：', options: ['课程标准与学情', '教师偏好', '教材顺序', '考试范围'], answer: 0, explain: '依据。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'front', title: '前端分析', html: `<p>学习者、目标、内容、重难点。</p>` },
          { id: 'flow', title: '流程', html: `<p>目标 → 活动 → 评价 → 反思；与目标对齐。</p>` }
        ], refs: [] } },
      { title: '课堂管理', brief: '让课堂有序而活跃。',
        q: [
          { stem: '课堂管理的核心目标是：', options: ['建立支持学习的环境', '控制学生', '维持安静', '完成进度'], answer: 0, explain: '支持。' },
          { stem: '预防性管理的关键是：', options: ['明确规则与流程', '事后惩罚', '忽视', '频繁批评'], answer: 0, explain: '预防。' },
          { stem: '处理问题行为的第一步是：', options: ['了解原因', '立即处罚', '请家长', '忽视'], answer: 0, explain: '归因。' }
        ],
        doc: { lead: '这一章讲管理。', sections: [
          { id: 'environment', title: '环境', html: `<p>物理环境、规则、课堂节奏与仪式。</p>` },
          { id: 'behavior', title: '行为', html: `<p>预防、干预、修复；最小干预原则。</p>` }
        ], refs: [] } },
      { title: '教学评价', brief: '怎么判断学会了。',
        q: [
          { stem: '评价与目标的关系应当是：', options: ['一致（对齐）', '无关', '越难越好', '只看分数'], answer: 0, explain: '对齐。' },
          { stem: '表现性评价适合测量：', options: ['复杂能力与素养', '记忆', '计算速度', '出勤'], answer: 0, explain: '表现。' },
          { stem: '反馈的有效性是：', options: ['具体、及时、可操作', '分数排名', '越频繁越好', '越笼统越好'], answer: 0, explain: '具体。' }
        ],
        doc: { lead: '这一章讲评价。', sections: [
          { id: 'alignment', title: '对齐', html: `<p>目标—活动—评价同构；评分规则（rubric）。</p>` },
          { id: 'feedback', title: '反馈', html: `<p>描述性反馈、自我评价、同伴互评。</p>` }
        ], refs: [] } },
      { title: '信息技术融合', brief: '技术如何真正帮上忙。',
        q: [
          { stem: '技术融合的核心判断标准是：', options: ['是否促进学习', '是否先进', '是否昂贵', '是否流行'], answer: 0, explain: '效果。' },
          { stem: 'TPACK 模型包括：', options: ['技术、教学法、学科知识', '硬件、软件、网络', '教师、学生、内容', '课前、课中、课后'], answer: 0, explain: 'TPACK。' },
          { stem: '混合式教学的优势是：', options: ['线上与线下优势互补', '减少教师', '降低成本', '便于管理'], answer: 0, explain: '互补。' }
        ],
        doc: { lead: '这一章讲技术。', sections: [
          { id: 'frameworks', title: '框架', html: `<p>TPACK、SAMR；技术与教学的整合层次。</p>` },
          { id: 'practice', title: '实践', html: `<p>混合式、翻转课堂、数据驱动教学。</p>` }
        ], refs: [] } }
    ]
  },
  /* 8 教育研究方法 +5 */
  {
    chapters: [
      { title: '研究设计', brief: '教育研究怎么做。',
        q: [
          { stem: '教育研究问题的基本要求是：', options: ['明确、可研究、有价值', '宏大', '时髦', '熟悉'], answer: 0, explain: '三要求。' },
          { stem: '量化与质性研究的分野在于：', options: ['数据形式与逻辑', '是否用软件', '是否有假设', '是否发表'], answer: 0, explain: '范式。' },
          { stem: '研究伦理的核心是：', options: ['知情同意、保密、不伤害', '快速发表', '数据公开', '署名'], answer: 0, explain: '伦理。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'question', title: '问题', html: `<p>从实践困惑或文献缺口出发；明确变量与对象。</p>` },
          { id: 'design', title: '设计', html: `<p>横截面/纵向、实验/准实验、个案/行动研究。</p>` }
        ], refs: [] } },
      { title: '量化方法', brief: '问卷、测验、实验。',
        q: [
          { stem: '问卷的信度指：', options: ['测量结果的稳定性', '测对了没有', '样本大小', '回收率'], answer: 0, explain: '信度。' },
          { stem: '准实验与真实验的区别是：', options: ['是否随机分配', '是否有对照', '是否有前后测', '是否量化'], answer: 0, explain: '随机化。' },
          { stem: '提高问卷回收率的方法包括：', options: ['简化问卷、提醒、激励', '加长', '匿名唯一', '只发一次'], answer: 0, explain: '设计。' }
        ],
        doc: { lead: '这一章讲量化。', sections: [
          { id: 'survey', title: '问卷', html: `<p>信度、效度、抽样、回收率。</p>` },
          { id: 'experiment', title: '实验', html: `<p>随机化、对照、前后测；内部与外部效度。</p>` }
        ], refs: [] } },
      { title: '质性方法', brief: '访谈、观察、个案。',
        q: [
          { stem: '质性研究的抽样通常是：', options: ['目的性抽样', '简单随机', '分层随机', '整群'], answer: 0, explain: '目的性。' },
          { stem: '访谈提纲的设计应：', options: ['开放、围绕主题、可追问', '封闭唯一', '固定顺序', '只问是否'], answer: 0, explain: '开放。' },
          { stem: '质性资料分析常用：', options: ['编码与主题分析', '回归', '方差分析', '假设检验'], answer: 0, explain: '编码。' }
        ],
        doc: { lead: '这一章讲质性。', sections: [
          { id: 'methods', title: '方法', html: `<p>访谈、观察、个案、实物分析。</p>` },
          { id: 'analysis', title: '分析', html: `<p>开放编码 → 主题 → 解释；三角验证。</p>` }
        ], refs: [] } },
      { title: '行动研究', brief: '教师做研究。',
        q: [
          { stem: '行动研究的循环是：', options: ['计划—行动—观察—反思', '选题—写作—发表', '设计—实验—报告', '调查—统计—结论'], answer: 0, explain: '四环节。' },
          { stem: '行动研究的主体通常是：', options: ['一线教师', '大学教授', '研究生', '管理者'], answer: 0, explain: '教师。' },
          { stem: '行动研究的价值在于：', options: ['改进实践并生成实践性知识', '发表论文', '评职称', '完成课题'], answer: 0, explain: '改进。' }
        ],
        doc: { lead: '这一章讲行动研究。', sections: [
          { id: 'cycle', title: '循环', html: `<p>计划、行动、观察、反思；多轮迭代。</p>` },
          { id: 'value', title: '价值', html: `<p>实践改进、教师专业发展、校本知识。</p>` }
        ], refs: [] } },
      { title: '论文写作与规范', brief: '把研究说清楚。',
        q: [
          { stem: '教育论文的结构通常是：', options: ['问题—文献—方法—结果—讨论', '总—分—总', '背景—致谢—结论', '引言—正文—附录'], answer: 0, explain: '结构。' },
          { stem: '引用规范的意义是：', options: ['尊重成果与可追溯', '凑数', '装饰', '避免查重'], answer: 0, explain: '规范。' },
          { stem: '研究局限应当：', options: ['如实说明', '隐藏', '忽略', '夸大'], answer: 0, explain: '诚实。' }
        ],
        doc: { lead: '这一章讲写作。', sections: [
          { id: 'structure', title: '结构', html: `<p>摘要、引言、文献、方法、结果、讨论、参考。</p>` },
          { id: 'ethics', title: '规范', html: `<p>引用、数据、署名、伦理审查。</p>` }
        ], refs: [] } }
    ]
  },
  /* 9 教学技能训练 +5 */
  {
    chapters: [
      { title: '导入技能', brief: '第一分钟抓住学生。',
        q: [
          { stem: '有效导入的关键是：', options: ['激发兴趣并链接新旧知识', '越长越好', '讲故事唯一', '直接讲新内容'], answer: 0, explain: '激趣+衔接。' },
          { stem: '导入方式包括：', options: ['情境、问题、复习、故事', '只有提问', '只有复习', '只有故事'], answer: 0, explain: '多种。' },
          { stem: '导入时间一般控制在：', options: ['3–5 分钟', '15 分钟', '半节课', '不限'], answer: 0, explain: '简短。' }
        ],
        doc: { lead: '这一章讲导入。', sections: [
          { id: 'functions', title: '功能', html: `<p>激趣、衔接、定向；建立学习期待。</p>` },
          { id: 'types', title: '类型', html: `<p>情境导入、问题导入、复习导入、故事导入、实验导入。</p>` }
        ], refs: [] } },
      { title: '提问技能', brief: '好问题是思维的脚手架。',
        q: [
          { stem: '开放性问题与封闭性问题的区别是：', options: ['答案是否多元', '难度', '时长', '对象'], answer: 0, explain: '开放性。' },
          { stem: '候答时间（wait time）的作用是：', options: ['给学生思考时间、提高回答质量', '拖延', '冷场', '减少参与'], answer: 0, explain: '候答。' },
          { stem: '追问的目的是：', options: ['深化理解、暴露思维过程', '为难学生', '填充时间', '维持纪律'], answer: 0, explain: '深化。' }
        ],
        doc: { lead: '这一章讲提问。', sections: [
          { id: 'types', title: '类型', html: `<p>回忆、理解、应用、分析、评价、创造（布鲁姆）。</p>` },
          { id: 'skills', title: '技巧', html: `<p>候答、追问、转问、追问理由；面向全体。</p>` }
        ], refs: [] } },
      { title: '讲解技能', brief: '把复杂讲简单。',
        q: [
          { stem: '讲解清晰的关键是：', options: ['结构清楚、语言准确、举例恰当', '语速快', '术语多', '篇幅长'], answer: 0, explain: '清晰。' },
          { stem: '举例的作用是：', options: ['把抽象概念具体化', '凑时间', '活跃气氛', '降低难度'], answer: 0, explain: '具体化。' },
          { stem: '讲解中应避免：', options: ['满堂灌', '互动', '板书', '提问'], answer: 0, explain: '灌输。' }
        ],
        doc: { lead: '这一章讲讲解。', sections: [
          { id: 'structure', title: '结构', html: `<p>提出—解释—举例—归纳—检测。</p>` },
          { id: 'language', title: '语言', html: `<p>准确、简洁、有节奏；避免口头禅。</p>` }
        ], refs: [] } },
      { title: '板书与多媒体', brief: '让思维看得见。',
        q: [
          { stem: '板书的主要功能是：', options: ['呈现结构、引导思维', '装饰', '替代讲解', '记录考勤'], answer: 0, explain: '结构。' },
          { stem: '课件设计应避免：', options: ['文字堆砌', '图文结合', '重点突出', '简洁'], answer: 0, explain: '堆砌。' },
          { stem: '板书与课件的关系应当是：', options: ['互补，板书呈现生成过程', '互相替代', '只用课件', '只用板书'], answer: 0, explain: '互补。' }
        ],
        doc: { lead: '这一章讲呈现。', sections: [
          { id: 'board', title: '板书', html: `<p>主板书（结构）+ 副板书（生成）；布局与时机。</p>` },
          { id: 'media', title: '多媒体', html: `<p>少字多图、动画有因、字体对比度。</p>` }
        ], refs: [] } },
      { title: '课堂观察与反思', brief: '看见自己的课。',
        q: [
          { stem: '课堂观察的常用工具是：', options: ['观察量表与录像分析', '只看感觉', '只问学生', '只看成绩'], answer: 0, explain: '工具。' },
          { stem: '教学反思的有效写法是：', options: ['问题—分析—改进', '感想', '流水账', '表扬自己'], answer: 0, explain: '结构化。' },
          { stem: '同课异构的价值是：', options: ['比较不同设计的效果', '统一教法', '评比', '省时间'], answer: 0, explain: '比较。' }
        ],
        doc: { lead: '这一章讲反思。', sections: [
          { id: 'observation', title: '观察', html: `<p>维度：目标、活动、互动、评价、时间分配。</p>` },
          { id: 'reflection', title: '反思', html: `<p>记录关键事件 → 分析原因 → 制定改进 → 再实践。</p>` }
        ], refs: [] } }
    ]
  },
  /* 10 教育实习 +1 */
  {
    chapters: [
      { title: '实习复盘', brief: '从站上讲台到站稳讲台。',
        q: [
          { stem: '教育实习最该留下的是：', options: ['教案与课堂实录', '工牌', '照片', '评语'], answer: 0, explain: '作品。' },
          { stem: '实习日志的推荐写法是：', options: ['问题—做法—结果—反思', '流水账', '只写结论', '只写感受'], answer: 0, explain: '结构化。' },
          { stem: '面试讲实习的最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'output', title: '三件套', html: `<p>3 份教案、1 段课堂实录、1 份实习总结。</p>` },
          { id: 'review', title: '复盘', html: `<p>每周五行；指导教师评语与自我反思对照。</p>` }
        ], refs: [] } }
    ]
  },
  /* 11 毕业论文 +1 */
  {
    chapters: [
      { title: '论文选题与写作', brief: '小问题、真研究。',
        q: [
          { stem: '本科教育论文最合适的选题是：', options: ['小而具体、可完成', '宏大理论', '流行话题', '导师方向唯一'], answer: 0, explain: '可行。' },
          { stem: '论文的核心是：', options: ['回答研究问题并提供证据', '篇幅', '引用数量', '格式'], answer: 0, explain: '论证。' },
          { stem: '答辩时最该准备的是：', options: ['熟悉数据与每一个结论的依据', '背稿', 'PPT 模板', '服装'], answer: 0, explain: '依据。' }
        ],
        doc: { lead: '这一章讲论文。', sections: [
          { id: 'topic', title: '选题', html: `<p>教学问题、政策分析、课程开发、调查研究。</p>` },
          { id: 'structure', title: '结构', html: `<p>问题—文献—方法—结果—讨论—结论。</p>` }
        ], refs: [] } }
    ]
  },
  /* 12 考编与考研 +1 */
  {
    chapters: [
      { title: '考编与考研规划', brief: '两条路的准备。',
        q: [
          { stem: '教师招聘考试通常包括：', options: ['教育综合知识 + 学科知识 + 面试', '只有笔试', '只有面试', '只有学科'], answer: 0, explain: '三块。' },
          { stem: '教育学考研专业课通常是：', options: ['311 教育学专业基础（或自命题）', '只有英语', '只有政治', '只有数学'], answer: 0, explain: '311。' },
          { stem: '面试试讲的关键是：', options: ['目标清晰、结构完整、互动自然', '背稿', 'PPT 精美', '时长最长'], answer: 0, explain: '教学基本功。' }
        ],
        doc: { lead: '这一章讲规划。', sections: [
          { id: 'exam', title: '考编', html: `<p>教综（教育学、心理学、法规）+ 学科 + 结构化面试 + 试讲。</p>` },
          { id: 'postgrad', title: '考研', html: `<p>311 或自命题；3–6 月基础，7–8 月真题，9–12 月背诵冲刺。</p>` }
        ], refs: [] } }
    ]
  }
]);
