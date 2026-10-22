/* ==========================================================
   philosophy-courses-more.js · 哲学：减半标准（主干 8 / 出口 4）
   ========================================================== */

appendChapters('philosophy-哲学', [
  /* 1 哲学导论 4 → 8 */
  {
    chapters: [
      { title: '形而上学', brief: '存在本身是什么。',
        q: [
          { stem: '形而上学研究的是：', options: ['存在之为存在', '认识的过程', '道德规范', '语言用法'], answer: 0, explain: '存在论。' },
          { stem: '实在论与唯名论之争围绕：', options: ['共相是否真实存在', '知识来源', '道德标准', '语言意义'], answer: 0, explain: '共相。' },
          { stem: '决定论与自由意志的核心问题是：', options: ['行为是否被因果决定', '知识是否可能', '美是否存在', '语言是否精确'], answer: 0, explain: '自由。' }
        ],
        doc: { lead: '这一章讲存在。', sections: [
          { id: 'questions', title: '核心问题', html: `<p>存在、共相、因果、自由、同一性、时间。</p>` },
          { id: 'positions', title: '立场', html: `<p>实在论/唯名论、决定论/自由意志论、唯物/唯心。</p>` }
        ], refs: [] } },
      { title: '认识论', brief: '我们如何知道。',
        q: [
          { stem: '经验论与唯理论的分歧在于：', options: ['知识主要来自经验还是理性', '是否研究存在', '是否有道德', '是否用语言'], answer: 0, explain: '来源。' },
          { stem: '怀疑论的核心挑战是：', options: ['知识是否可能', '道德是否普遍', '美是否主观', '语言是否清晰'], answer: 0, explain: '怀疑。' },
          { stem: '盖蒂尔问题针对的是：', options: ['知识的三要素定义', '因果理论', '道德实在论', '语言意义'], answer: 0, explain: 'JTB。' }
        ],
        doc: { lead: '这一章讲知识。', sections: [
          { id: 'sources', title: '来源', html: `<p>经验论、唯理论、先天综合判断。</p>` },
          { id: 'problems', title: '难题', html: `<p>怀疑论、盖蒂尔、确证与信念。</p>` }
        ], refs: [] } },
      { title: '语言与哲学', brief: '语言的转向。',
        q: [
          { stem: '20 世纪哲学的"语言转向"指：', options: ['通过分析语言解决哲学问题', '放弃哲学', '只研究文学', '回到古代'], answer: 0, explain: '语言分析。' },
          { stem: '意义的使用理论由谁提出？', options: ['维特根斯坦', '笛卡尔', '康德', '柏拉图'], answer: 0, explain: '后期维特根斯坦。' },
          { stem: '指称理论讨论的是：', options: ['词语如何指向对象', '句子是否真', '如何论证', '如何审美'], answer: 0, explain: '指称。' }
        ],
        doc: { lead: '这一章讲语言。', sections: [
          { id: 'turn', title: '语言转向', html: `<p>弗雷格、罗素、维特根斯坦；意义与指称。</p>` },
          { id: 'use', title: '影响', html: `<p>分析哲学、日常语言哲学、言语行为理论。</p>` }
        ], refs: [] } },
      { title: '哲学与生活', brief: '为什么学哲学。',
        q: [
          { stem: '哲学的价值主要在于：', options: ['澄清概念、反思前提', '提供技术', '预测未来', '增加收入'], answer: 0, explain: '反思。' },
          { stem: '苏格拉底"未经省察的人生"说明：', options: ['反思生活的重要性', '不必思考', '哲学无用', '生活即哲学'], answer: 0, explain: '省察。' },
          { stem: '哲学论证的要求是：', options: ['前提清楚、推理有效', '引经据典', '情感充沛', '结论惊人'], answer: 0, explain: '论证。' }
        ],
        doc: { lead: '这一章讲用处。', sections: [
          { id: 'value', title: '价值', html: `<p>概念澄清、前提反思、价值澄清、公共讨论。</p>` },
          { id: 'method', title: '方法', html: `<p>提出问题—分析概念—构建论证—回应反驳。</p>` }
        ], refs: [] } }
    ]
  },
  /* 2 逻辑学导论 3 → 8 */
  {
    chapters: [
      { title: '命题逻辑', brief: '连接词的逻辑。',
        q: [
          { stem: '"P 且 Q"为真需要：', options: ['P、Q 都真', '至少一真', '都假', '一真一假'], answer: 0, explain: '合取。' },
          { stem: '蕴含 P→Q 为假的唯一情形是：', options: ['P 真 Q 假', 'P 假 Q 真', '都真', '都假'], answer: 0, explain: '真值表。' },
          { stem: '重言式是：', options: ['在所有赋值下都真', '有时真', '全假', '不可判定'], answer: 0, explain: '永真。' }
        ],
        doc: { lead: '这一章讲命题逻辑。', sections: [
          { id: 'connectives', title: '连接词', html: `<p>否定、合取、析取、蕴含、等值；真值表。</p>` },
          { id: 'validity', title: '有效性', html: `<p>重言式、矛盾式、可满足式；真值表判定。</p>` }
        ], refs: [] } },
      { title: '谓词逻辑', brief: '量词的逻辑。',
        q: [
          { stem: '全称量词 ∀x 表示：', options: ['对所有 x', '存在 x', '唯一 x', '没有 x'], answer: 0, explain: '全称。' },
          { stem: '"所有人都会死"的形式是：', options: ['∀x(人(x)→死(x))', '∃x(人(x)∧死(x))', '∀x 人(x)', '∃x 死(x)'], answer: 0, explain: '蕴含。' },
          { stem: '存在量词 ∃x 表示：', options: ['至少有一个 x', '所有 x', '唯一 x', '没有 x'], answer: 0, explain: '存在。' }
        ],
        doc: { lead: '这一章讲谓词逻辑。', sections: [
          { id: 'quantifiers', title: '量词', html: `<p>∀ 与 ∃；辖域、约束与自由变元。</p>` },
          { id: 'translation', title: '翻译', html: `<p>全称用蕴含、存在用合取；注意否定量词等值式。</p>` }
        ], refs: [] } },
      { title: '演绎与归纳', brief: '两种推理。',
        q: [
          { stem: '演绎推理的特点是：', options: ['前提真则结论必然真', '结论或然', '结论更一般', '前提可假'], answer: 0, explain: '必然。' },
          { stem: '归纳推理的问题是：', options: ['结论超出前提（或然）', '前提必假', '结论必然', '无效'], answer: 0, explain: '或然。' },
          { stem: '类比推理属于：', options: ['归纳', '演绎', '无效推理', '证明'], answer: 0, explain: '归纳类。' }
        ],
        doc: { lead: '这一章讲推理。', sections: [
          { id: 'deductive', title: '演绎', html: `<p>有效性与可靠性；前提真+有效=结论真。</p>` },
          { id: 'inductive', title: '归纳', html: `<p>枚举、类比、最佳解释；强度而非有效性。</p>` }
        ], refs: [] } },
      { title: '推理有效性', brief: '怎么判断推得对。',
        q: [
          { stem: '推理有效指：', options: ['前提真时结论不可能假', '结论真', '前提真', '符合直觉'], answer: 0, explain: '保真。' },
          { stem: '否定前件是：', options: ['无效推理形式', '有效', '重言式', '归纳'], answer: 0, explain: '谬误。' },
          { stem: '肯定后件是：', options: ['无效推理形式', '有效', '演绎', '归纳'], answer: 0, explain: '谬误。' }
        ],
        doc: { lead: '这一章讲有效性。', sections: [
          { id: 'form', title: '形式', html: `<p>有效形式：肯定前件、否定后件、假言三段论。</p>` },
          { id: 'invalid', title: '无效', html: `<p>否定前件、肯定后件；形式谬误。</p>` }
        ], refs: [] } },
      { title: '逻辑谬误', brief: '常见的思维坑。',
        q: [
          { stem: '"诉诸人身"属于：', options: ['不相干谬误', '形式谬误', '归纳', '演绎'], answer: 0, explain: '人身攻击。' },
          { stem: '"稻草人"谬误是：', options: ['歪曲对方观点再攻击', '人身攻击', '循环论证', '滑坡'], answer: 0, explain: '稻草人。' },
          { stem: '"循环论证"的问题是：', options: ['前提预设结论', '结论太强', '前提太多', '语言模糊'], answer: 0, explain: '预设。' }
        ],
        doc: { lead: '这一章讲谬误。', sections: [
          { id: 'types', title: '类型', html: `<p>不相干、预设、歧义、归纳谬误。</p>` },
          { id: 'detect', title: '识别', html: `<p>先重构论证，再检查前提与推理。</p>` }
        ], refs: [] } }
    ]
  },
  /* 3 哲学原著导读 3 → 8 */
  {
    chapters: [
      { title: '柏拉图《理想国》', brief: '洞穴与正义。',
        q: [
          { stem: '洞穴喻说明：', options: ['从意见到知识的艰难', '政治斗争', '艺术本质', '语言问题'], answer: 0, explain: '转向。' },
          { stem: '柏拉图认为正义是：', options: ['各司其职、灵魂秩序', '强者利益', '平等分配', '契约'], answer: 0, explain: '秩序。' },
          { stem: '理念论主张：', options: ['可感事物分有理念', '只有可感事物', '理念是虚构', '理念即语言'], answer: 0, explain: '分有。' }
        ],
        doc: { lead: '这一章读《理想国》。', sections: [
          { id: 'themes', title: '主题', html: `<p>正义、灵魂三分、哲学王、洞穴喻、教育。</p>` },
          { id: 'method', title: '读法', html: `<p>对话结构、论证脉络、核心比喻；边读边重构论证。</p>` }
        ], refs: [] } },
      { title: '亚里士多德《形而上学》', brief: '四因与实体。',
        q: [
          { stem: '四因不包括：', options: ['形式因', '质料因', '动力因', '语言因'], answer: 3, explain: '四因。' },
          { stem: '亚里士多德认为实体是：', options: ['个别事物（这一某物）', '理念', '语言', '关系'], answer: 0, explain: '个别。' },
          { stem: '目的因强调：', options: ['事物朝向其目的', '材料构成', '形式规定', '外力推动'], answer: 0, explain: '目的。' }
        ],
        doc: { lead: '这一章读《形而上学》。', sections: [
          { id: 'four', title: '四因', html: `<p>质料、形式、动力、目的。</p>` },
          { id: 'substance', title: '实体', html: `<p>个别优先、形式与质料复合；潜能与现实。</p>` }
        ], refs: [] } },
      { title: '笛卡尔《第一哲学沉思集》', brief: '我思故我在。',
        q: [
          { stem: '笛卡尔怀疑的目的是：', options: ['寻找不可怀疑的基础', '否定一切', '逃避', '怀疑宗教'], answer: 0, explain: '基础。' },
          { stem: '"我思故我在"的确定性在于：', options: ['怀疑本身不可怀疑', '逻辑推理', '经验观察', '权威'], answer: 0, explain: '自明。' },
          { stem: '心身二元论的问题是：', options: ['心身如何相互作用', '是否存在心灵', '是否有身体', '语言'], answer: 0, explain: '交互。' }
        ],
        doc: { lead: '这一章读《沉思集》。', sections: [
          { id: 'doubt', title: '怀疑', html: `<p>感官、梦、恶魔；方法的怀疑。</p>` },
          { id: 'cogito', title: '我思', html: `<p>确定性的起点；心身二元与交互难题。</p>` }
        ], refs: [] } },
      { title: '康德《纯粹理性批判》', brief: '先天综合判断如何可能。',
        q: [
          { stem: '康德的核心问题是：', options: ['先天综合判断如何可能', '存在是什么', '语言意义', '道德标准'], answer: 0, explain: '核心。' },
          { stem: '"哥白尼式革命"指：', options: ['对象符合我们的认识形式', '我们符合对象', '放弃认识', '回到经验'], answer: 0, explain: '颠倒。' },
          { stem: '物自体是：', options: ['不可认识的界限概念', '可感对象', '语言实体', '道德律'], answer: 0, explain: '界限。' }
        ],
        doc: { lead: '这一章读《纯批》。', sections: [
          { id: 'structure', title: '结构', html: `<p>感性论、知性论、理性论；范畴与直观。</p>` },
          { id: 'limit', title: '界限', html: `<p>现象与物自体；知识的界限与形而上学问题。</p>` }
        ], refs: [] } },
      { title: '海德格尔《存在与时间》', brief: '此在与时间性。',
        q: [
          { stem: '海德格尔认为传统形而上学遗忘了：', options: ['存在本身', '语言', '道德', '科学'], answer: 0, explain: '存在。' },
          { stem: '"在世存在"强调：', options: ['人总是已在世界中', '主体孤立', '世界是客体', '语言'], answer: 0, explain: '在世。' },
          { stem: '"向死而在"说明：', options: ['此在的有限性与本真可能', '悲观', '宗教', '科学'], answer: 0, explain: '有限。' }
        ],
        doc: { lead: '这一章读《存在与时间》。', sections: [
          { id: 'dasein', title: '此在', html: `<p>在世存在、操心、常人；本真与非本真。</p>` },
          { id: 'time', title: '时间性', html: `<p>向死而在、良知与决断；时间性是存在意义的地平。</p>` }
        ], refs: [] } }
    ]
  },
  /* 4 中国哲学史 4 → 8 */
  {
    chapters: [
      { title: '先秦诸子', brief: '百家争鸣。',
        q: [
          { stem: '孔子的核心概念是：', options: ['仁', '道', '兼爱', '法'], answer: 0, explain: '仁。' },
          { stem: '老子的核心概念是：', options: ['道与无为', '仁', '礼', '法'], answer: 0, explain: '道。' },
          { stem: '墨家主张：', options: ['兼爱非攻', '无为', '性恶', '法治'], answer: 0, explain: '兼爱。' }
        ],
        doc: { lead: '这一章讲先秦。', sections: [
          { id: 'schools', title: '诸子', html: `<p>儒（孔孟荀）、道（老庄）、墨、法、名、阴阳。</p>` },
          { id: 'debates', title: '争论', html: `<p>人性善恶、义利之辨、天人关系、名实之辩。</p>` }
        ], refs: [] } },
      { title: '两汉经学与魏晋玄学', brief: '经与玄。',
        q: [
          { stem: '汉代经学的两大派别是：', options: ['今文经学与古文经学', '理学与心学', '禅宗与净土', '玄学与佛学'], answer: 0, explain: '今古文。' },
          { stem: '魏晋玄学的核心议题是：', options: ['有无之辨、名教与自然', '心性', '格物', '顿悟'], answer: 0, explain: '有无。' },
          { stem: '"贵无论"的代表是：', options: ['王弼', '郭象', '朱熹', '王阳明'], answer: 0, explain: '王弼。' }
        ],
        doc: { lead: '这一章讲汉魏。', sections: [
          { id: 'han', title: '汉代', html: `<p>董仲舒天人感应；今古文经学之争。</p>` },
          { id: 'xuan', title: '玄学', html: `<p>王弼贵无、郭象独化；名教与自然之辨。</p>` }
        ], refs: [] } },
      { title: '佛教中国化', brief: '禅宗与华严。',
        q: [
          { stem: '佛教中国化的代表宗派是：', options: ['禅宗', '律宗', '密宗', '唯识宗'], answer: 0, explain: '禅宗。' },
          { stem: '"顿悟"强调：', options: ['直指人心、见性成佛', '渐次修行', '诵经', '苦行'], answer: 0, explain: '顿悟。' },
          { stem: '华严宗的核心是：', options: ['事事无碍、法界缘起', '心即理', '性即理', '气本论'], answer: 0, explain: '华严。' }
        ],
        doc: { lead: '这一章讲佛教。', sections: [
          { id: 'sects', title: '宗派', html: `<p>天台、华严、唯识、禅宗；判教与心性。</p>` },
          { id: 'chan', title: '禅宗', html: `<p>慧能、顿悟、不立文字；对中国思想的影响。</p>` }
        ], refs: [] } },
      { title: '宋明理学与心学', brief: '理与心。',
        q: [
          { stem: '朱熹的核心主张是：', options: ['性即理、格物致知', '心即理', '气本论', '顿悟'], answer: 0, explain: '理学。' },
          { stem: '王阳明的核心主张是：', options: ['心即理、致良知、知行合一', '性即理', '贵无', '独化'], answer: 0, explain: '心学。' },
          { stem: '理气关系是：', options: ['理学的基本问题', '佛学问题', '西学问题', '玄学问题'], answer: 0, explain: '理气。' }
        ],
        doc: { lead: '这一章讲宋明。', sections: [
          { id: 'li', title: '理学', html: `<p>周敦颐、二程、朱熹；理气、格物、居敬。</p>` },
          { id: 'xin', title: '心学', html: `<p>陆九渊、王阳明；心即理、致良知、知行合一。</p>` }
        ], refs: [] } }
    ]
  },
  /* 5 西方哲学史 4 → 8 */
  {
    chapters: [
      { title: '古希腊哲学', brief: '从本原到理念。',
        q: [
          { stem: '泰勒斯认为本原是：', options: ['水', '火', '气', '原子'], answer: 0, explain: '水。' },
          { stem: '赫拉克利特强调：', options: ['万物流变与逻各斯', '存在不变', '理念', '原子'], answer: 0, explain: '流变。' },
          { stem: '巴门尼德主张：', options: ['存在者存在，非存在不存在', '万物流变', '原子论', '理念论'], answer: 0, explain: '存在。' }
        ],
        doc: { lead: '这一章讲古希腊。', sections: [
          { id: 'presocratic', title: '早期', html: `<p>本原问题；米利都学派、赫拉克利特、巴门尼德、原子论。</p>` },
          { id: 'classical', title: '古典', html: `<p>苏格拉底、柏拉图、亚里士多德；理念论与四因说。</p>` }
        ], refs: [] } },
      { title: '中世纪哲学', brief: '信仰与理性。',
        q: [
          { stem: '奥古斯丁的核心思想是：', options: ['上帝之光与内在人', '四因说', '我思', '绝对精神'], answer: 0, explain: '光照。' },
          { stem: '托马斯·阿奎那整合了：', options: ['亚里士多德与基督教神学', '柏拉图与佛学', '康德与黑格尔', '笛卡尔与休谟'], answer: 0, explain: '整合。' },
          { stem: '共相之争的两派是：', options: ['实在论与唯名论', '经验论与唯理论', '理性主义与浪漫主义', '唯物与唯心'], answer: 0, explain: '共相。' }
        ],
        doc: { lead: '这一章讲中世纪。', sections: [
          { id: 'fathers', title: '教父', html: `<p>奥古斯丁；信仰寻求理解。</p>` },
          { id: 'scholastic', title: '经院', html: `<p>阿奎那；五路证明、共相之争、理性与信仰。</p>` }
        ], refs: [] } },
      { title: '近代哲学', brief: '认识论的转向。',
        q: [
          { stem: '唯理论的代表是：', options: ['笛卡尔、斯宾诺莎、莱布尼茨', '洛克、贝克莱、休谟', '康德、黑格尔', '柏拉图、亚里士多德'], answer: 0, explain: '唯理论。' },
          { stem: '休谟的贡献是：', options: ['对因果必然性的怀疑', '理念论', '四因说', '绝对精神'], answer: 0, explain: '怀疑。' },
          { stem: '康德试图调和：', options: ['唯理论与经验论', '唯物与唯心', '古代与中世纪', '东方与西方'], answer: 0, explain: '调和。' }
        ],
        doc: { lead: '这一章讲近代。', sections: [
          { id: 'rationalism', title: '唯理论', html: `<p>笛卡尔、斯宾诺莎、莱布尼茨；天赋观念。</p>` },
          { id: 'empiricism', title: '经验论', html: `<p>洛克、贝克莱、休谟；白板说与因果怀疑。</p>` }
        ], refs: [] } },
      { title: '德国古典哲学', brief: '从康德到黑格尔。',
        q: [
          { stem: '黑格尔的核心概念是：', options: ['绝对精神与辩证法', '我思', '物自体', '单子'], answer: 0, explain: '绝对精神。' },
          { stem: '辩证法的一般形式是：', options: ['正—反—合', '因—果', '本质—现象', '主体—客体'], answer: 0, explain: '三段。' },
          { stem: '费希特与谢林分别强调：', options: ['自我与非我、同一哲学', '理念与物质', '经验与理性', '语言与逻辑'], answer: 0, explain: '过渡。' }
        ],
        doc: { lead: '这一章讲德国古典。', sections: [
          { id: 'kant', title: '康德', html: `<p>三大批判；现象与物自体；道德律。</p>` },
          { id: 'hegel', title: '黑格尔', html: `<p>辩证法、绝对精神、历史与自由。</p>` }
        ], refs: [] } }
    ]
  },
  /* 6 伦理学基础 3 → 8 */
  {
    chapters: [
      { title: '功利主义', brief: '最大幸福原则。',
        q: [
          { stem: '功利主义的判断标准是：', options: ['后果与总体幸福', '动机', '义务', '德性'], answer: 0, explain: '后果。' },
          { stem: '行为功利主义与规则功利主义的区别是：', options: ['判断单个行为还是规则', '是否计算', '是否考虑动物', '是否普遍'], answer: 0, explain: '层次。' },
          { stem: '对功利主义的主要批评是：', options: ['可能牺牲少数人权利', '太严格', '不可操作', '否认幸福'], answer: 0, explain: '权利。' }
        ],
        doc: { lead: '这一章讲功利主义。', sections: [
          { id: 'core', title: '核心', html: `<p>边沁、密尔；最大幸福、后果计算、平等考量。</p>` },
          { id: 'critique', title: '批评', html: `<p>权利、分配、不可通约、预测困难。</p>` }
        ], refs: [] } },
      { title: '义务论', brief: '不论后果的应当。',
        q: [
          { stem: '康德的绝对命令要求：', options: ['只按可普遍化的准则行动', '追求最大幸福', '培养德性', '服从权威'], answer: 0, explain: '普遍化。' },
          { stem: '义务论强调：', options: ['动机与义务本身', '后果', '德性', '习俗'], answer: 0, explain: '义务。' },
          { stem: '"人是目的"意味着：', options: ['不得把人仅当手段', '人人平等唯一', '追求幸福', '服从规则'], answer: 0, explain: '目的。' }
        ],
        doc: { lead: '这一章讲义务论。', sections: [
          { id: 'kant', title: '康德', html: `<p>绝对命令、可普遍化、人格尊严、自律。</p>` },
          { id: 'critique', title: '批评', html: `<p>冲突义务、后果忽视、形式主义。</p>` }
        ], refs: [] } },
      { title: '德性伦理', brief: '成为什么样的人。',
        q: [
          { stem: '德性伦理的核心问题是：', options: ['人应当成为什么样的人', '行为后果', '规则', '语言'], answer: 0, explain: '德性。' },
          { stem: '亚里士多德认为德性是：', options: ['介于两极端之间的中道', '天赋', '规则', '后果'], answer: 0, explain: '中道。' },
          { stem: '实践智慧（phronesis）的作用是：', options: ['在具体情境中判断如何行动', '计算后果', '遵守规则', '记忆'], answer: 0, explain: '情境判断。' }
        ],
        doc: { lead: '这一章讲德性。', sections: [
          { id: 'aristotle', title: '亚里士多德', html: `<p>幸福、中道、实践智慧、习惯养成。</p>` },
          { id: 'revival', title: '复兴', html: `<p>麦金太尔、努斯鲍姆；共同体与能力。</p>` }
        ], refs: [] } },
      { title: '元伦理学', brief: '道德判断是什么。',
        q: [
          { stem: '元伦理学研究：', options: ['道德语言与判断的性质', '具体规范', '应用政策', '宗教'], answer: 0, explain: '元层面。' },
          { stem: '认知主义与非认知主义的区别是：', options: ['道德判断是否有真假', '是否有规范', '是否普遍', '是否宗教'], answer: 0, explain: '真假。' },
          { stem: '休谟的"是—应当"问题指出：', options: ['从事实推不出规范', '事实即规范', '规范即事实', '无区别'], answer: 0, explain: '鸿沟。' }
        ],
        doc: { lead: '这一章讲元伦理。', sections: [
          { id: 'questions', title: '问题', html: `<p>客观性、真假、动机、理由。</p>` },
          { id: 'positions', title: '立场', html: `<p>实在论/反实在论、认知/非认知、自然主义。</p>` }
        ], refs: [] } },
      { title: '应用伦理', brief: '把理论用到现实。',
        q: [
          { stem: '应用伦理的典型领域不包括：', options: ['生命伦理', '环境伦理', '科技伦理', '形而上学'], answer: 3, explain: '非应用。' },
          { stem: '电车难题主要测试：', options: ['功利与义务的冲突', '语言', '美学', '逻辑'], answer: 0, explain: '冲突。' },
          { stem: '应用伦理的方法通常是：', options: ['理论—原则—案例的反思平衡', '只看案例', '只看理论', '投票'], answer: 0, explain: '平衡。' }
        ],
        doc: { lead: '这一章讲应用。', sections: [
          { id: 'fields', title: '领域', html: `<p>生命、环境、科技、商业、动物伦理。</p>` },
          { id: 'method', title: '方法', html: `<p>原则主义、案例类比、反思平衡。</p>` }
        ], refs: [] } }
    ]
  },
  /* 7 马克思主义哲学 3 → 8 */
  {
    chapters: [
      { title: '实践唯物主义', brief: '实践是出发点。',
        q: [
          { stem: '马克思主义哲学的核心范畴是：', options: ['实践', '理念', '语言', '单子'], answer: 0, explain: '实践。' },
          { stem: '"哲学家们只是解释世界"的下一句是：', options: ['问题在于改变世界', '世界不可知', '世界是理念', '世界是语言'], answer: 0, explain: '改变。' },
          { stem: '实践的观点强调：', options: ['主体与客体的统一', '纯粹思辨', '语言分析', '神秘体验'], answer: 0, explain: '统一。' }
        ],
        doc: { lead: '这一章讲实践。', sections: [
          { id: 'practice', title: '实践', html: `<p>物质生产、社会交往、科学实验；主体客体化与客体主体化。</p>` },
          { id: 'break', title: '变革', html: `<p>对旧唯物主义的批判；哲学的任务是改变世界。</p>` }
        ], refs: [] } },
      { title: '辩证法', brief: '联系与发展。',
        q: [
          { stem: '辩证法的三大规律不包括：', options: ['对立统一', '质量互变', '否定之否定', '因果律'], answer: 3, explain: '三大规律。' },
          { stem: '矛盾分析法强调：', options: ['抓主要矛盾与矛盾主要方面', '消除矛盾', '回避矛盾', '只看一面'], answer: 0, explain: '矛盾。' },
          { stem: '否定之否定说明发展是：', options: ['螺旋式上升', '直线', '循环', '倒退'], answer: 0, explain: '螺旋。' }
        ],
        doc: { lead: '这一章讲辩证法。', sections: [
          { id: 'laws', title: '三大规律', html: `<p>对立统一、质量互变、否定之否定。</p>` },
          { id: 'method', title: '方法', html: `<p>联系与发展、矛盾分析、具体问题具体分析。</p>` }
        ], refs: [] } },
      { title: '历史唯物主义', brief: '社会如何发展。',
        q: [
          { stem: '历史唯物主义认为社会发展的根本动力是：', options: ['生产力与生产关系的矛盾', '理念', '地理', '人口'], answer: 0, explain: '基本矛盾。' },
          { stem: '经济基础与上层建筑的关系是：', options: ['经济基础决定上层建筑，上层建筑反作用', '上层建筑决定', '无关', '循环'], answer: 0, explain: '决定与反作用。' },
          { stem: '人民群众在历史中的作用是：', options: ['历史的创造者', '被动的', '无关', '唯一'], answer: 0, explain: '创造者。' }
        ],
        doc: { lead: '这一章讲历史。', sections: [
          { id: 'basic', title: '基本矛盾', html: `<p>生产力与生产关系、经济基础与上层建筑。</p>` },
          { id: 'people', title: '主体', html: `<p>人民群众是历史创造者；杰出人物的作用。</p>` }
        ], refs: [] } },
      { title: '异化与解放', brief: '人的处境与出路。',
        q: [
          { stem: '马克思的异化理论主要分析：', options: ['劳动产品与人相异化', '语言', '理念', '逻辑'], answer: 0, explain: '劳动异化。' },
          { stem: '异化劳动的四个方面不包括：', options: ['产品异化', '劳动过程异化', '类本质异化', '语言异化'], answer: 3, explain: '四方面。' },
          { stem: '人的解放的最终目标是：', options: ['自由全面发展', '财富积累', '技术统治', '道德完善'], answer: 0, explain: '全面发展。' }
        ],
        doc: { lead: '这一章讲人。', sections: [
          { id: 'alienation', title: '异化', html: `<p>产品、过程、类本质、人与人相异化。</p>` },
          { id: 'emancipation', title: '解放', html: `<p>自由人的联合体；每个人的自由发展。</p>` }
        ], refs: [] } },
      { title: '当代发展', brief: '马克思主义的当代形态。',
        q: [
          { stem: '马克思主义中国化的最新成果强调：', options: ['以人民为中心的发展', '技术决定论', '市场万能', '文化复古'], answer: 0, explain: '人民。' },
          { stem: '马克思主义哲学当代研究的重点包括：', options: ['政治哲学、生态、空间、技术', '只有辩证法', '只有认识论', '只有逻辑'], answer: 0, explain: '多元。' },
          { stem: '学习马克思主义哲学应避免：', options: ['教条化', '联系实际', '批判思考', '发展创新'], answer: 0, explain: '教条。' }
        ],
        doc: { lead: '这一章讲发展。', sections: [
          { id: 'china', title: '中国化', html: `<p>实事求是、以人民为中心、新发展理念。</p>` },
          { id: 'frontier', title: '前沿', html: `<p>政治哲学、生态马克思主义、数字资本主义批判。</p>` }
        ], refs: [] } }
    ]
  },
  /* 8 美学概论 3 → 8 */
  {
    chapters: [
      { title: '美的本质', brief: '美是什么。',
        q: [
          { stem: '美学研究的基本问题是：', options: ['美的本质与审美经验', '道德规范', '语言意义', '逻辑形式'], answer: 0, explain: '美学。' },
          { stem: '主观论与客观论之争围绕：', options: ['美是主观感受还是客观属性', '是否研究艺术', '是否科学', '是否道德'], answer: 0, explain: '主客。' },
          { stem: '柏拉图认为美本身是：', options: ['理念', '感觉', '语言', '功利'], answer: 0, explain: '理念。' }
        ],
        doc: { lead: '这一章讲本质。', sections: [
          { id: 'question', title: '问题', html: `<p>美是主观、客观还是关系？美的概念史。</p>` },
          { id: 'positions', title: '立场', html: `<p>理念论、经验论、形式论、实践论。</p>` }
        ], refs: [] } },
      { title: '审美经验', brief: '看的时候发生了什么。',
        q: [
          { stem: '审美态度理论强调：', options: ['无利害的静观', '生理快感', '道德判断', '知识积累'], answer: 0, explain: '无利害。' },
          { stem: '移情说认为：', options: ['主体把情感投射到对象', '对象本身有情感', '情感是生理', '情感是语言'], answer: 0, explain: '移情。' },
          { stem: '审美经验的特点是：', options: ['直接性、非功利、整体性', '功利', '抽象', '分析'], answer: 0, explain: '特点。' }
        ],
        doc: { lead: '这一章讲经验。', sections: [
          { id: 'attitude', title: '态度', html: `<p>无利害、距离、静观；审美与日常态度的区别。</p>` },
          { id: 'empathy', title: '移情与形式', html: `<p>移情说、形式主义、格式塔。</p>` }
        ], refs: [] } },
      { title: '艺术与再现', brief: '艺术是什么。',
        q: [
          { stem: '模仿说认为艺术的本质是：', options: ['再现自然', '表现情感', '形式构造', '社会批判'], answer: 0, explain: '模仿。' },
          { stem: '表现说强调：', options: ['艺术表达情感', '再现对象', '形式', '功能'], answer: 0, explain: '表现。' },
          { stem: '艺术定义问题争论的是：', options: ['艺术是否有本质', '艺术是否美', '艺术是否贵', '艺术是否难'], answer: 0, explain: '本质。' }
        ],
        doc: { lead: '这一章讲艺术。', sections: [
          { id: 'theories', title: '三种理论', html: `<p>模仿、表现、形式。</p>` },
          { id: 'definition', title: '定义', html: `<p>制度理论、家族相似；反本质主义的挑战。</p>` }
        ], refs: [] } },
      { title: '崇高与悲剧', brief: '超出美的经验。',
        q: [
          { stem: '康德的崇高理论区分：', options: ['数学的崇高与力学的崇高', '美与丑', '悲剧与喜剧', '自然与艺术'], answer: 0, explain: '两类。' },
          { stem: '悲剧的净化说来自：', options: ['亚里士多德', '柏拉图', '康德', '黑格尔'], answer: 0, explain: '亚里士多德。' },
          { stem: '崇高感的特点是：', options: ['痛感转化为快感', '纯粹愉悦', '无情感', '生理反应'], answer: 0, explain: '转化。' }
        ],
        doc: { lead: '这一章讲崇高。', sections: [
          { id: 'sublime', title: '崇高', html: `<p>康德：想象力受挫后理性观念的唤起。</p>` },
          { id: 'tragedy', title: '悲剧', html: `<p>亚里士多德净化说；黑格尔的冲突论。</p>` }
        ], refs: [] } },
      { title: '当代美学', brief: '日常与大众。',
        q: [
          { stem: '日常生活审美化指的是：', options: ['审美渗透到日常消费与生活', '艺术消失', '只有精英艺术', '回到古典'], answer: 0, explain: '日常化。' },
          { stem: '大众文化研究关注：', options: ['文化工业与受众', '只有高雅艺术', '只有自然美', '只有形式'], answer: 0, explain: '大众。' },
          { stem: '环境美学强调：', options: ['自然的审美价值与参与', '只有艺术', '只有形式', '只有模仿'], answer: 0, explain: '环境。' }
        ],
        doc: { lead: '这一章讲当代。', sections: [
          { id: 'everyday', title: '日常', html: `<p>舒斯特曼、生活美学；审美与消费。</p>` },
          { id: 'environment', title: '环境与大众', html: `<p>环境美学、文化工业、受众研究。</p>` }
        ], refs: [] } }
    ]
  },
  /* 9 哲学文献研读 2 → 8 */
  {
    chapters: [
      { title: '文献类型与检索', brief: '找什么、去哪找。',
        q: [
          { stem: '一次文献与二次文献的区别是：', options: ['原始文本 vs 研究性文献', '中文 vs 外文', '古代 vs 现代', '纸质 vs 电子'], answer: 0, explain: '层级。' },
          { stem: '哲学研究的常用数据库包括：', options: ['PhilPapers、JSTOR、CNKI', '只有百度', '只有维基', '只有图书馆'], answer: 0, explain: '数据库。' },
          { stem: '检索策略的关键是：', options: ['关键词与引文追踪结合', '只搜一次', '只看标题', '只读摘要'], answer: 0, explain: '策略。' }
        ],
        doc: { lead: '这一章讲检索。', sections: [
          { id: 'types', title: '类型', html: `<p>原著、译本、二手研究、工具书、期刊论文。</p>` },
          { id: 'search', title: '检索', html: `<p>数据库、引文追踪、书目滚雪球；记录来源。</p>` }
        ], refs: [] } },
      { title: '版本与校勘', brief: '读哪个本子。',
        q: [
          { stem: '选择译本时应关注：', options: ['译者、出版社、参照版本', '封面', '价格', '厚度'], answer: 0, explain: '质量。' },
          { stem: '校勘的作用是：', options: ['比对异文、确定文本', '翻译', '注释', '索引'], answer: 0, explain: '异文。' },
          { stem: '读原著时参照二手文献的意义是：', options: ['理解背景与争论', '替代原著', '省时间', '凑引用'], answer: 0, explain: '辅助。' }
        ],
        doc: { lead: '这一章讲版本。', sections: [
          { id: 'edition', title: '版本', html: `<p>标准版（如 Akademie 版康德）、权威译本、注疏本。</p>` },
          { id: 'textual', title: '文本', html: `<p>校勘、异文、写作时间与思想分期。</p>` }
        ], refs: [] } },
      { title: '二手文献的使用', brief: '站在别人肩膀上。',
        q: [
          { stem: '使用二手文献的正确方式是：', options: ['批判性参考，回到原著验证', '直接引用结论', '替代原著', '只读综述'], answer: 0, explain: '批判。' },
          { stem: '文献综述的作用是：', options: ['定位争论与缺口', '凑字数', '展示阅读量', '替代论证'], answer: 0, explain: '定位。' },
          { stem: '引用他人观点时应：', options: ['注明出处并区分自己的观点', '不标注', '改述即可', '只写作者'], answer: 0, explain: '规范。' }
        ],
        doc: { lead: '这一章讲二手。', sections: [
          { id: 'use', title: '使用', html: `<p>理解解释传统、识别争论、找到缺口。</p>` },
          { id: 'cite', title: '引用', html: `<p>直接引用与间接引用；避免抄袭与过度依赖。</p>` }
        ], refs: [] } },
      { title: '论证重构', brief: '把文本变成论证。',
        q: [
          { stem: '论证重构的步骤是：', options: ['找出结论—前提—隐含假设', '摘抄原文', '写摘要', '列提纲'], answer: 0, explain: '三步。' },
          { stem: '重构时应：', options: ['尽量忠实且使论证最强', '随意改写', '只挑错', '忽略语境'], answer: 0, explain: '善意原则。' },
          { stem: '评价论证的关键是：', options: ['前提是否可信、推理是否有效', '作者名气', '文笔', '篇幅'], answer: 0, explain: '评价。' }
        ],
        doc: { lead: '这一章讲重构。', sections: [
          { id: 'steps', title: '三步', html: `<p>定位结论、列出前提、补足隐含假设。</p>` },
          { id: 'charity', title: '善意原则', html: `<p>按最强版本理解；再提出反驳。</p>` }
        ], refs: [] } },
      { title: '读书笔记与写作', brief: '把读变成写。',
        q: [
          { stem: '哲学读书笔记的推荐结构是：', options: ['问题—论证—评价—疑问', '摘抄', '感想', '目录'], answer: 0, explain: '结构。' },
          { stem: '写哲学论文的核心是：', options: ['提出并捍卫一个论点', '综述文献', '介绍生平', '罗列观点'], answer: 0, explain: '论证。' },
          { stem: '修改论文的有效方式是：', options: ['朗读、请人评阅、检查论证链', '只改错别字', '增加引用', '换题目'], answer: 0, explain: '修改。' }
        ],
        doc: { lead: '这一章讲写作。', sections: [
          { id: 'notes', title: '笔记', html: `<p>卡片式、问题导向、标注页码；建立概念索引。</p>` },
          { id: 'writing', title: '写作', html: `<p>论点先行、论证分层、回应反驳；反复修改。</p>` }
        ], refs: [] } },
      { title: '学术规范', brief: '底线与习惯。',
        q: [
          { stem: '学术不端包括：', options: ['抄袭、篡改、代写', '引用', '转述', '讨论'], answer: 0, explain: '不端。' },
          { stem: '引用格式的作用是：', options: ['可追溯与尊重成果', '凑数', '装饰', '避免查重'], answer: 0, explain: '规范。' },
          { stem: '使用 AI 工具写作时应：', options: ['声明使用范围并自行核验', '全部代写', '不声明', '直接提交'], answer: 0, explain: '诚信。' }
        ],
        doc: { lead: '这一章讲规范。', sections: [
          { id: 'rules', title: '规范', html: `<p>引用、署名、数据真实、AI 使用声明。</p>` },
          { id: 'habit', title: '习惯', html: `<p>边读边记来源；文献管理软件；保留草稿。</p>` }
        ], refs: [] } }
    ]
  },
  /* 10 毕业论文写作 2 → 4 */
  {
    chapters: [
      { title: '选题与文献综述', brief: '小问题、真争论。',
        q: [
          { stem: '哲学论文选题的关键是：', options: ['有明确的问题与可辩护的论点', '题目宏大', '资料多', '导师喜欢'], answer: 0, explain: '问题。' },
          { stem: '文献综述应：', options: ['梳理争论并指出缺口', '罗列摘要', '按时间堆砌', '只引名家'], answer: 0, explain: '缺口。' },
          { stem: '论文提纲的作用是：', options: ['组织论证结构', '凑页数', '装饰', '替代写作'], answer: 0, explain: '结构。' }
        ],
        doc: { lead: '这一章讲开头。', sections: [
          { id: 'topic', title: '选题', html: `<p>从概念困惑、文本矛盾、现实问题出发；范围可控。</p>` },
          { id: 'review', title: '综述', html: `<p>按问题组织；说明你的介入点。</p>` }
        ], refs: [] } },
      { title: '论证与答辩', brief: '把话说圆。',
        q: [
          { stem: '答辩时最容易被问的是：', options: ['你的核心论点与最强反驳', '字数', '格式', '参考文献数量'], answer: 0, explain: '论点。' },
          { stem: '面对反驳的正确态度是：', options: ['承认并回应或修正', '无视', '回避', '转移话题'], answer: 0, explain: '回应。' },
          { stem: '论文结论应：', options: ['总结论点并说明限度', '提出新问题唯一', '重复引言', '写感想'], answer: 0, explain: '收束。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'defense', title: '答辩', html: `<p>陈述 10 分钟：问题、论证、创新、局限。</p>` },
          { id: 'revise', title: '修改', html: `<p>按意见逐条回应；保留修改记录。</p>` }
        ], refs: [] } }
    ]
  },
  /* 11 学术讲座与论文 2 → 4 */
  {
    chapters: [
      { title: '听讲座的方法', brief: '如何从讲座中获益。',
        q: [
          { stem: '听学术讲座前应：', options: ['了解主题与讲者背景', '什么都不准备', '只看PPT', '等录音'], answer: 0, explain: '准备。' },
          { stem: '提问环节的有效提问是：', options: ['针对论证或前提', '问个人经历', '问无关问题', '不问'], answer: 0, explain: '论证。' },
          { stem: '讲座笔记应记录：', options: ['核心论点、论证与疑问', '全部原话', '只有题目', '只有感想'], answer: 0, explain: '要点。' }
        ],
        doc: { lead: '这一章讲听。', sections: [
          { id: 'prepare', title: '准备', html: `<p>读相关文献、列出问题；带着问题听。</p>` },
          { id: 'notes', title: '记录', html: `<p>论点—论证—反驳—疑问；会后整理。</p>` }
        ], refs: [] } },
      { title: '投稿与发表', brief: '让研究被看见。',
        q: [
          { stem: '投稿前应确认：', options: ['期刊范围与格式要求', '价格', '影响因子唯一', '编辑姓名'], answer: 0, explain: '匹配。' },
          { stem: '匿名评审意见的正确处理是：', options: ['逐条回应并修改', '忽略', '争辩', '换刊'], answer: 0, explain: '回应。' },
          { stem: '一稿多投的问题是：', options: ['违反学术规范', '节省时间', '提高命中率', '无问题'], answer: 0, explain: '规范。' }
        ],
        doc: { lead: '这一章讲发表。', sections: [
          { id: 'submit', title: '投稿', html: `<p>选刊、格式、附信；避免 predatory journals。</p>` },
          { id: 'review', title: '评审', html: `<p>回应信结构：感谢—逐条回应—修改说明。</p>` }
        ], refs: [] } }
    ]
  },
  /* 12 考研与求职准备 2 → 4 */
  {
    chapters: [
      { title: '考研复习', brief: '哲学考研怎么准备。',
        q: [
          { stem: '哲学考研专业课通常包括：', options: ['中西马哲学史 + 哲学综合', '只有英语', '只有政治', '只有逻辑'], answer: 0, explain: '专业课。' },
          { stem: '哲学史复习的主线是：', options: ['问题—人物—论证—影响', '只背人名', '只看真题', '只读教材'], answer: 0, explain: '脉络。' },
          { stem: '答论述题的关键是：', options: ['概念准确 + 论证清晰 + 评价', '篇幅', '引用', '字迹'], answer: 0, explain: '内容。' }
        ],
        doc: { lead: '这一章讲备考。', sections: [
          { id: 'subjects', title: '科目', html: `<p>中哲、西哲、马哲、哲学综合；英语与政治。</p>` },
          { id: 'plan', title: '节奏', html: `<p>3–6 月通读，7–8 月专题，9–10 月真题，11–12 月背诵。</p>` }
        ], refs: [] } },
      { title: '求职方向', brief: '学哲学能做什么。',
        q: [
          { stem: '哲学毕业生的常见去向不包括：', options: ['高校与科研', '出版与媒体', '公务员与事业单位', '临床医生'], answer: 3, explain: '专业限制。' },
          { stem: '哲学训练的核心能力是：', options: ['概念分析与论证写作', '编程', '设计', '财务'], answer: 0, explain: '分析。' },
          { stem: '求职材料应突出：', options: ['分析与写作作品', '证书数量', '成绩单', '社团'], answer: 0, explain: '能力。' }
        ],
        doc: { lead: '这一章讲就业。', sections: [
          { id: 'paths', title: '路径', html: `<p>高校、出版、媒体、公务员、企业研究/文案。</p>` },
          { id: 'skill', title: '能力', html: `<p>概念分析、论证写作、文献研究、公共表达。</p>` }
        ], refs: [] } }
    ]
  }
]);
