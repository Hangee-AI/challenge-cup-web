/* ==========================================================
   logic-courses-more.js · 逻辑学：减半标准（主干 8 / 出口 4）
   ========================================================== */

appendChapters('philosophy-逻辑学', [
  /* 1 逻辑学导论 +5 */
  {
    chapters: [
      { title: '命题逻辑', brief: '真值函数。',
        q: [
          { stem: '蕴含 P→Q 为假的唯一情形是：', options: ['P 真 Q 假', 'P 假 Q 真', '都真', '都假'], answer: 0, explain: '真值表。' },
          { stem: '重言式是：', options: ['所有赋值下都真', '有时真', '全假', '不可判定'], answer: 0, explain: '永真。' },
          { stem: '德摩根律说明：', options: ['¬(P∧Q) 等值于 ¬P∨¬Q', '¬(P∨Q) 等值于 ¬P∨¬Q', 'P→Q 等值于 Q→P', 'P∧Q 等值于 P∨Q'], answer: 0, explain: '对偶。' }
        ],
        doc: { lead: '这一章讲命题逻辑。', sections: [
          { id: 'connectives', title: '连接词', html: `<p>¬、∧、∨、→、↔；真值表定义。</p>` },
          { id: 'laws', title: '等值式', html: `<p>德摩根、分配、双重否定、换质位。</p>` }
        ], refs: [] } },
      { title: '谓词逻辑', brief: '量词与结构。',
        q: [
          { stem: '"所有 S 都是 P"的形式是：', options: ['∀x(S(x)→P(x))', '∃x(S(x)∧P(x))', '∀x S(x)', '∃x P(x)'], answer: 0, explain: '蕴含。' },
          { stem: '¬∀x P(x) 等值于：', options: ['∃x ¬P(x)', '∀x ¬P(x)', '¬∃x P(x)', '∃x P(x)'], answer: 0, explain: '量词否定。' },
          { stem: '自由变元与约束变元的区别是：', options: ['是否在量词辖域内', '是否大写', '是否谓词', '是否常项'], answer: 0, explain: '辖域。' }
        ],
        doc: { lead: '这一章讲谓词逻辑。', sections: [
          { id: 'syntax', title: '语法', html: `<p>个体词、谓词、量词、变元、辖域。</p>` },
          { id: 'translation', title: '翻译', html: `<p>全称用蕴含、存在用合取；量词否定与交换。</p>` }
        ], refs: [] } },
      { title: '推理有效性', brief: '保真的形式。',
        q: [
          { stem: '有效推理指：', options: ['前提真时结论不可能假', '结论真', '前提真', '符合直觉'], answer: 0, explain: '保真。' },
          { stem: '肯定前件式是：', options: ['有效形式', '无效', '归纳', '谬误'], answer: 0, explain: 'MP。' },
          { stem: '否定后件式是：', options: ['有效形式', '无效', '循环', '归纳'], answer: 0, explain: 'MT。' }
        ],
        doc: { lead: '这一章讲有效性。', sections: [
          { id: 'valid', title: '有效形式', html: `<p>MP、MT、假言三段论、析取三段论。</p>` },
          { id: 'sound', title: '可靠性', html: `<p>有效 + 前提真 = 可靠；有效不等于可靠。</p>` }
        ], refs: [] } },
      { title: '归纳与科学方法', brief: '或然的推理。',
        q: [
          { stem: '归纳推理的结论是：', options: ['或然的', '必然的', '无意义的', '定义的'], answer: 0, explain: '或然。' },
          { stem: '最佳解释推理属于：', options: ['归纳', '演绎', '谬误', '证明'], answer: 0, explain: '归纳。' },
          { stem: '休谟对归纳的质疑是：', options: ['归纳的合理性无法被证明', '归纳总是错', '归纳是演绎', '归纳无用'], answer: 0, explain: '归纳问题。' }
        ],
        doc: { lead: '这一章讲归纳。', sections: [
          { id: 'types', title: '类型', html: `<p>枚举、类比、统计、最佳解释。</p>` },
          { id: 'hume', title: '归纳问题', html: `<p>休谟的怀疑；概率与可靠主义回应。</p>` }
        ], refs: [] } },
      { title: '谬误与批判性思维', brief: '常见的错。',
        q: [
          { stem: '"诉诸人身"属于：', options: ['不相干谬误', '形式谬误', '归纳', '演绎'], answer: 0, explain: '人身。' },
          { stem: '"滑坡"谬误的问题是：', options: ['无根据地断言连锁后果', '人身攻击', '循环', '歧义'], answer: 0, explain: '滑坡。' },
          { stem: '识别谬误的第一步是：', options: ['重构论证', '看作者', '看篇幅', '看结论'], answer: 0, explain: '重构。' }
        ],
        doc: { lead: '这一章讲谬误。', sections: [
          { id: 'types', title: '类型', html: `<p>不相干、预设、歧义、归纳谬误。</p>` },
          { id: 'method', title: '方法', html: `<p>重构论证 → 检查前提 → 检查推理。</p>` }
        ], refs: [] } }
    ]
  },
  /* 2 数理逻辑基础 +5 */
  {
    chapters: [
      { title: '一阶语言', brief: '形式化的语法。',
        q: [
          { stem: '一阶语言的符号包括：', options: ['常项、变元、函数、谓词、连接词、量词', '只有命题变元', '只有谓词', '只有量词'], answer: 0, explain: '符号表。' },
          { stem: '项与公式的区别是：', options: ['指称对象 vs 有真值', '长短', '是否有变元', '是否量词'], answer: 0, explain: '语法。' },
          { stem: '自由变元的公式称为：', options: ['开公式', '闭公式', '句子', '原子式'], answer: 0, explain: '开/闭。' }
        ],
        doc: { lead: '这一章讲语法。', sections: [
          { id: 'symbols', title: '符号', html: `<p>逻辑符号与非逻辑符号；项与公式的归纳定义。</p>` },
          { id: 'scope', title: '辖域', html: `<p>自由与约束；代入与可代入性。</p>` }
        ], refs: [] } },
      { title: '语义与模型', brief: '真值从哪来。',
        q: [
          { stem: '模型由什么构成？', options: ['论域与解释函数', '只有论域', '只有函数', '只有公式'], answer: 0, explain: '结构。' },
          { stem: '公式在模型中为真意味着：', options: ['按解释满足公式', '语法正确', '可证明', '简短'], answer: 0, explain: '满足。' },
          { stem: '逻辑有效指：', options: ['在所有模型中为真', '在某模型中真', '可证明', '可满足'], answer: 0, explain: '有效。' }
        ],
        doc: { lead: '这一章讲语义。', sections: [
          { id: 'model', title: '模型', html: `<p>论域、常项解释、函数与谓词解释；满足关系 ⊨。</p>` },
          { id: 'validity', title: '有效性', html: `<p>逻辑有效、可满足、矛盾式。</p>` }
        ], refs: [] } },
      { title: '形式证明', brief: '从公理到定理。',
        q: [
          { stem: '希尔伯特系统主要由什么构成？', options: ['公理与推理规则', '只有公理', '只有规则', '只有语义'], answer: 0, explain: '公理系统。' },
          { stem: '自然演绎的特点是：', options: ['引入与消去规则', '只有公理', '只有真值表', '只有模型'], answer: 0, explain: '规则。' },
          { stem: '证明与真值的关系由什么定理说明？', options: ['完备性定理', '紧致性定理', '洛文海姆定理', '不完备性定理'], answer: 0, explain: '完备性。' }
        ],
        doc: { lead: '这一章讲证明。', sections: [
          { id: 'systems', title: '系统', html: `<p>希尔伯特系统、自然演绎、相继式演算。</p>` },
          { id: 'theorem', title: '定理', html: `<p>可靠性（⊢ ⇒ ⊨）与完备性（⊨ ⇒ ⊢）。</p>` }
        ], refs: [] } },
      { title: '完备性与紧致性', brief: '两个核心定理。',
        q: [
          { stem: '紧致性定理说：', options: ['理论每个有限子集可满足则整体可满足', '所有理论可满足', '有限理论可满足', '理论有限'], answer: 0, explain: '紧致。' },
          { stem: '紧致性的推论包括：', options: ['非标准模型的存在', '所有模型同构', '理论有限', '可判定'], answer: 0, explain: '非标准。' },
          { stem: '哥德尔完备性定理针对：', options: ['一阶逻辑的证明系统', '算术', '集合论', '模态逻辑'], answer: 0, explain: '一阶。' }
        ],
        doc: { lead: '这一章讲元定理。', sections: [
          { id: 'completeness', title: '完备性', html: `<p>哥德尔 1930：一阶逻辑的证明系统完备。</p>` },
          { id: 'compactness', title: '紧致性', html: `<p>由完备性推出；非标准模型与超积。</p>` }
        ], refs: [] } },
      { title: '不完备性', brief: '算术的界限。',
        q: [
          { stem: '哥德尔第一不完备定理说：', options: ['存在不可判定的真命题', '算术不一致', '逻辑无效', '证明无用'], answer: 0, explain: '不完备。' },
          { stem: '第二不完备定理说：', options: ['系统不能证明自身一致性', '系统一致', '系统完备', '系统有限'], answer: 0, explain: '一致性。' },
          { stem: '不完备性适用于：', options: ['足够强的一致形式系统', '所有系统', '命题逻辑', '只有集合论'], answer: 0, explain: '条件。' }
        ],
        doc: { lead: '这一章讲界限。', sections: [
          { id: 'godel', title: '哥德尔', html: `<p>编码、自指、不可判定命题；一致性不可自证。</p>` },
          { id: 'impact', title: '影响', html: `<p>对希尔伯特纲领的打击；可计算性与哲学后果。</p>` }
        ], refs: [] } }
    ]
  },
  /* 3 集合论 +5 */
  {
    chapters: [
      { title: '集合与运算', brief: '基础语言。',
        q: [
          { stem: '幂集的元素个数是：', options: ['2^n', 'n', 'n²', 'n+1'], answer: 0, explain: '幂集。' },
          { stem: '并、交、差的基本律包括：', options: ['德摩根律', '交换律唯一', '结合律唯一', '分配律唯一'], answer: 0, explain: '布尔代数。' },
          { stem: '有序对 (a,b) 的集合表示是：', options: ['{{a},{a,b}}', '{a,b}', '{{a,b}}', '{a,{b}}'], answer: 0, explain: '库拉托夫斯基。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'operations', title: '运算', html: `<p>并、交、差、对称差、笛卡尔积；恒等式。</p>` },
          { id: 'pairs', title: '有序对', html: `<p>库拉托夫斯基编码；关系的集合表示。</p>` }
        ], refs: [] } },
      { title: '关系与函数', brief: '结构的基础。',
        q: [
          { stem: '等价关系的三性质是：', options: ['自反、对称、传递', '自反、反对称、传递', '对称、传递', '自反、传递'], answer: 0, explain: '等价。' },
          { stem: '偏序关系的三性质是：', options: ['自反、反对称、传递', '自反、对称、传递', '对称、传递', '反对称、传递'], answer: 0, explain: '偏序。' },
          { stem: '函数的单射与满射区别是：', options: ['一对一 vs 覆盖值域', '是否有定义', '是否连续', '是否有限'], answer: 0, explain: '两类。' }
        ],
        doc: { lead: '这一章讲关系。', sections: [
          { id: 'relations', title: '关系', html: `<p>等价关系与划分；偏序与格。</p>` },
          { id: 'functions', title: '函数', html: `<p>单射、满射、双射；复合与逆。</p>` }
        ], refs: [] } },
      { title: '基数', brief: '无穷的大小。',
        q: [
          { stem: '可数无穷与实数集的基数关系是：', options: ['后者更大', '相等', '前者更大', '不可比'], answer: 0, explain: '康托尔。' },
          { stem: '康托尔定理说：', options: ['幂集基数严格大于原集', '所有无穷相等', '实数可数', '基数有序'], answer: 0, explain: '幂集。' },
          { stem: '对角线法的用途是：', options: ['证明不可数', '构造函数', '证明连续性', '计算极限'], answer: 0, explain: '对角化。' }
        ],
        doc: { lead: '这一章讲基数。', sections: [
          { id: 'countable', title: '可数', html: `<p>自然数、整数、有理数可数；实数不可数。</p>` },
          { id: 'cantor', title: '康托尔', html: `<p>对角线法、幂集定理、连续统假设。</p>` }
        ], refs: [] } },
      { title: '序数与选择公理', brief: '良序与无穷公理。',
        q: [
          { stem: '选择公理说：', options: ['任意非空族存在选择函数', '所有集合可数', '所有序良序', '无穷不存在'], answer: 0, explain: 'AC。' },
          { stem: '良序定理与选择公理的关系是：', options: ['等价', '矛盾', '无关', '前者更强'], answer: 0, explain: '等价。' },
          { stem: '序数用于刻画：', options: ['良序集的序型', '基数', '函数', '关系'], answer: 0, explain: '序型。' }
        ],
        doc: { lead: '这一章讲序。', sections: [
          { id: 'ordinal', title: '序数', html: `<p>良序、序型、超限归纳与递归。</p>` },
          { id: 'ac', title: '选择公理', html: `<p>与良序定理、佐恩引理等价；争议与独立性。</p>` }
        ], refs: [] } },
      { title: '悖论与公理化', brief: '避免矛盾。',
        q: [
          { stem: '罗素悖论的构造是：', options: ['所有不包含自身的集合之集', '所有集合之集', '空集', '幂集'], answer: 0, explain: '罗素。' },
          { stem: '公理化集合论的作用是：', options: ['限制概括原则以避免悖论', '取消集合', '增加集合', '证明一切'], answer: 0, explain: '限制。' },
          { stem: 'ZF 与 ZFC 的区别是：', options: ['是否含选择公理', '是否有无穷公理', '是否有幂集', '是否有空集'], answer: 0, explain: 'C=选择。' }
        ],
        doc: { lead: '这一章讲公理。', sections: [
          { id: 'paradox', title: '悖论', html: `<p>罗素、康托尔、布拉利-福尔蒂；概括原则的问题。</p>` },
          { id: 'axioms', title: '公理', html: `<p>ZF 公理列表；ZFC；独立性与大基数。</p>` }
        ], refs: [] } }
    ]
  },
  /* 4 模态逻辑 +5 */
  {
    chapters: [
      { title: '可能世界语义', brief: '必然与可能。',
        q: [
          { stem: '□P 表示：', options: ['必然 P', '可能 P', '偶然 P', '非 P'], answer: 0, explain: '必然。' },
          { stem: '◇P 等值于：', options: ['¬□¬P', '□¬P', '¬□P', '□□P'], answer: 0, explain: '对偶。' },
          { stem: '克里普克模型由什么构成？', options: ['世界集、可达关系、赋值', '只有世界', '只有关系', '只有赋值'], answer: 0, explain: '三元组。' }
        ],
        doc: { lead: '这一章讲语义。', sections: [
          { id: 'operators', title: '算子', html: `<p>□ 与 ◇；对偶关系。</p>` },
          { id: 'model', title: '模型', html: `<p>(W, R, V)；满足定义与有效性。</p>` }
        ], refs: [] } },
      { title: '正规模态系统', brief: 'K、T、S4、S5。',
        q: [
          { stem: '系统 K 的特征公理是：', options: ['□(P→Q)→(□P→□Q)', '□P→P', '□P→□□P', '◇P→□◇P'], answer: 0, explain: 'K 公理。' },
          { stem: 'T 公理对应可达关系的：', options: ['自反性', '对称性', '传递性', '欧性'], answer: 0, explain: '自反。' },
          { stem: 'S5 对应等价关系，因为包含：', options: ['自反、对称、欧性', '只有自反', '只有传递', '只有对称'], answer: 0, explain: 'S5。' }
        ],
        doc: { lead: '这一章讲系统。', sections: [
          { id: 'systems', title: '系统', html: `<p>K、T、S4、S5；公理与对应性质。</p>` },
          { id: 'correspondence', title: '对应', html: `<p>公理 ↔ 框架性质（自反、传递、对称、欧性）。</p>` }
        ], refs: [] } },
      { title: '可达关系与框架', brief: '关系决定逻辑。',
        q: [
          { stem: '框架有效性指：', options: ['在所有赋值下有效', '在某赋值下有效', '在某世界有效', '语法正确'], answer: 0, explain: '框架。' },
          { stem: '传递性对应公理：', options: ['□P→□□P', '□P→P', 'P→□◇P', '◇P→□P'], answer: 0, explain: '4。' },
          { stem: '对称性对应公理：', options: ['P→□◇P', '□P→P', '□P→□□P', '◇P→□P'], answer: 0, explain: 'B。' }
        ],
        doc: { lead: '这一章讲框架。', sections: [
          { id: 'frame', title: '框架', html: `<p>框架与模型；框架有效性。</p>` },
          { id: 'table', title: '对应表', html: `<p>T: 自反；4: 传递；B: 对称；5: 欧性；D: 持续。</p>` }
        ], refs: [] } },
      { title: '模态公理与推理', brief: '证明与完全性。',
        q: [
          { stem: '必然化规则说：', options: ['定理的必然化也是定理', '所有公式必然', '可能即必然', '必然即可能'], answer: 0, explain: 'N 规则。' },
          { stem: '模态系统的完全性指：', options: ['有效公式都可证明', '所有公式可证', '系统一致', '系统有限'], answer: 0, explain: '完全。' },
          { stem: 'B 系统包含：', options: ['T 与 B 公理', '只有 K', 'S4', 'S5'], answer: 0, explain: 'B。' }
        ],
        doc: { lead: '这一章讲证明。', sections: [
          { id: 'rules', title: '规则', html: `<p>必然化、替换；公理模式。</p>` },
          { id: 'completeness', title: '完全性', html: `<p>典范模型方法；对应语义的完全性。</p>` }
        ], refs: [] } },
      { title: '应用', brief: '知识、义务、时间。',
        q: [
          { stem: '认知逻辑用模态词表示：', options: ['知道/相信', '应当', '过去/将来', '必然'], answer: 0, explain: '认知。' },
          { stem: '道义逻辑的算子表示：', options: ['义务与允许', '知识', '时间', '概率'], answer: 0, explain: '道义。' },
          { stem: '时态逻辑研究：', options: ['时间中的真', '道德', '知识', '概率'], answer: 0, explain: '时态。' }
        ],
        doc: { lead: '这一章讲应用。', sections: [
          { id: 'epistemic', title: '认知', html: `<p>知识逻辑、公共知识；S5 与知识公理。</p>` },
          { id: 'deontic', title: '道义与时态', html: `<p>义务、允许；过去、将来算子。</p>` }
        ], refs: [] } }
    ]
  },
  /* 5 逻辑哲学 +5 */
  {
    chapters: [
      { title: '真与意义', brief: '真之理论。',
        q: [
          { stem: '符合论认为真是：', options: ['命题与事实相符合', '命题间一致', '实用有效', '冗余'], answer: 0, explain: '符合。' },
          { stem: '冗余论认为："P 是真的"与：', options: ['P 相同', 'P 相反', '无意义', '不可判定'], answer: 0, explain: '冗余。' },
          { stem: '塔斯基的真定义要求：', options: ['形式语言中的满足关系', '自然语言直觉', '实用标准', '共识'], answer: 0, explain: '语义真。' }
        ],
        doc: { lead: '这一章讲真。', sections: [
          { id: 'theories', title: '理论', html: `<p>符合、融贯、实用、冗余、语义真。</p>` },
          { id: 'tarski', title: '塔斯基', html: `<p>T 公式；对象语言与元语言；不可自指。</p>` }
        ], refs: [] } },
      { title: '指称与意义', brief: '名字指向什么。',
        q: [
          { stem: '弗雷格区分：', options: ['涵义与指称', '真与假', '必然与可能', '分析与综合'], answer: 0, explain: 'Sense/Reference。' },
          { stem: '罗素的摹状词理论把"当今法国国王"分析为：', options: ['存在与唯一性断言', '名字', '谓词', '量词'], answer: 0, explain: '摹状。' },
          { stem: '克里普克的因果指称理论强调：', options: ['指称由历史因果链决定', '由描述决定', '由说话者决定', '由语境决定'], answer: 0, explain: '因果链。' }
        ],
        doc: { lead: '这一章讲指称。', sections: [
          { id: 'frege', title: '弗雷格', html: `<p>涵义决定指称；晨星与暮星。</p>` },
          { id: 'kripke', title: '克里普克', html: `<p>严格指示词、因果链；必然的后天命题。</p>` }
        ], refs: [] } },
      { title: '必然性与可能世界', brief: '模态形而上学。',
        q: [
          { stem: '必然命题指：', options: ['在所有可能世界为真', '现实世界为真', '可证明', '不可反驳'], answer: 0, explain: '必然。' },
          { stem: '克里普克认为专名是：', options: ['严格指示词', '摹状词', '谓词', '变元'], answer: 0, explain: '严格。' },
          { stem: '本质主义的争论围绕：', options: ['事物是否有必然属性', '是否有世界', '是否有语言', '是否有逻辑'], answer: 0, explain: '本质。' }
        ],
        doc: { lead: '这一章讲模态。', sections: [
          { id: 'worlds', title: '可能世界', html: `<p>可能世界语义的形而上学解读；跨界同一性。</p>` },
          { id: 'essentialism', title: '本质', html: `<p>本质属性、必然与偶然；克里普克的论证。</p>` }
        ], refs: [] } },
      { title: '逻辑多元论', brief: '只有一种逻辑吗。',
        q: [
          { stem: '逻辑多元论主张：', options: ['存在多个同等合法的逻辑系统', '只有经典逻辑', '逻辑无意义', '逻辑是约定'], answer: 0, explain: '多元。' },
          { stem: '直觉主义逻辑拒绝：', options: ['排中律', '同一律', '矛盾律', '蕴含'], answer: 0, explain: '排中。' },
          { stem: '模糊逻辑处理：', options: ['真值的程度性', '必然性', '时间', '知识'], answer: 0, explain: '模糊。' }
        ],
        doc: { lead: '这一章讲多元。', sections: [
          { id: 'pluralism', title: '多元', html: `<p>经典、直觉主义、相关、模糊；选择标准之争。</p>` },
          { id: 'revision', title: '修正', html: `<p>逻辑是否可修正；蒯因的挑战与回应。</p>` }
        ], refs: [] } },
      { title: '逻辑与哲学问题', brief: '逻辑能解决什么。',
        q: [
          { stem: '悖论在逻辑哲学中的作用是：', options: ['暴露理论冲突、推动修正', '无意义', '只是文字游戏', '证明逻辑无用'], answer: 0, explain: '悖论。' },
          { stem: '语义悖论的典型是：', options: ['说谎者悖论', '罗素悖论', '芝诺悖论', '康德二律背反'], answer: 0, explain: '说谎者。' },
          { stem: '解决语义悖论的方法包括：', options: ['语言分层', '取消真', '取消语言', '取消逻辑'], answer: 0, explain: '分层。' }
        ],
        doc: { lead: '这一章讲问题。', sections: [
          { id: 'paradoxes', title: '悖论', html: `<p>说谎者、格雷林；语言分层与真理论。</p>` },
          { id: 'philosophy', title: '交叉', html: `<p>本体论承诺、模态、条件句、逻辑后承。</p>` }
        ], refs: [] } }
    ]
  },
  /* 6 语言逻辑 +5 */
  {
    chapters: [
      { title: '形式语义学', brief: '意义的形式刻画。',
        q: [
          { stem: '蒙塔古语义学的核心思想是：', options: ['自然语言可形式化处理', '自然语言不可分析', '意义即用法', '意义即指称'], answer: 0, explain: '蒙塔古。' },
          { stem: '组合性原则说：', options: ['整体意义由部分意义与结构决定', '意义由语境唯一决定', '意义由说话者决定', '意义不可组合'], answer: 0, explain: '组合。' },
          { stem: '类型论用于：', options: ['给表达式分配语义类型', '分类词性', '分析语法', '统计词频'], answer: 0, explain: '类型。' }
        ],
        doc: { lead: '这一章讲语义。', sections: [
          { id: 'composition', title: '组合', html: `<p>组合性原则、类型驱动解释；真值条件。</p>` },
          { id: 'lambda', title: 'λ 抽象', html: `<p>用 λ 表达式表示函数意义；量词的类型提升。</p>` }
        ], refs: [] } },
      { title: '预设', brief: '言外的前提。',
        q: [
          { stem: '预设的特点是：', options: ['否定后仍保留', '否定后消失', '总为真', '无关'], answer: 0, explain: '投射。' },
          { stem: '"停止做 X"预设：', options: ['之前在做 X', '从未做 X', '将来做 X', '不做 X'], answer: 0, explain: '预设。' },
          { stem: '预设与蕴涵的区别是：', options: ['否定下的投射行为', '真假', '长短', '语种'], answer: 0, explain: '投射。' }
        ],
        doc: { lead: '这一章讲预设。', sections: [
          { id: 'trigger', title: '触发语', html: `<p>定摹状词、叙实动词、状态变化动词。</p>` },
          { id: 'projection', title: '投射', html: `<p>否定、疑问、条件句中的预设行为；预设失败。</p>` }
        ], refs: [] } },
      { title: '言语行为', brief: '说话就是做事。',
        q: [
          { stem: '奥斯汀的三种行为是：', options: ['语谓、语旨、语效', '语法、语义、语用', '陈述、疑问、祈使', '真、假、无意义'], answer: 0, explain: '三分。' },
          { stem: '塞尔把言语行为分为：', options: ['断言、指令、承诺、表达、宣告', '陈述、疑问', '真、假', '直接、间接'], answer: 0, explain: '五类。' },
          { stem: '适切条件指：', options: ['言语行为成功的条件', '语法正确', '发音标准', '篇幅'], answer: 0, explain: '适切。' }
        ],
        doc: { lead: '这一章讲行为。', sections: [
          { id: 'austin', title: '奥斯汀', html: `<p>施事话语；语谓、语旨、语效行为。</p>` },
          { id: 'searle', title: '塞尔', html: `<p>五类言语行为；适切条件与构成规则。</p>` }
        ], refs: [] } },
      { title: '会话含义', brief: '言外之意。',
        q: [
          { stem: '格赖斯合作原则的四准则不包括：', options: ['数量', '质量', '关联', '韵律'], answer: 3, explain: '四准则。' },
          { stem: '会话含义的特点是：', options: ['可取消性', '不可取消', '总是字面', '与语境无关'], answer: 0, explain: '可取消。' },
          { stem: '"有些"暗示"不是全部"属于：', options: ['数量准则的会话含义', '预设', '蕴涵', '语法'], answer: 0, explain: '数量。' }
        ],
        doc: { lead: '这一章讲含义。', sections: [
          { id: 'maxims', title: '准则', html: `<p>数量、质量、关联、方式；违反与利用。</p>` },
          { id: 'implicature', title: '含义', html: `<p>会话含义 vs 规约含义；可取消性与可推导性。</p>` }
        ], refs: [] } },
      { title: '歧义与语境', brief: '意义的不确定。',
        q: [
          { stem: '词汇歧义与结构歧义的区别是：', options: ['词义多 vs 句法结构多', '中文 vs 英文', '口语 vs 书面', '长 vs 短'], answer: 0, explain: '两类。' },
          { stem: '指示词的意义依赖于：', options: ['语境', '词典', '语法', '语音'], answer: 0, explain: '语境。' },
          { stem: '歧义消解的策略包括：', options: ['语境与概率', '只看语法', '只看词典', '随机'], answer: 0, explain: '消解。' }
        ],
        doc: { lead: '这一章讲歧义。', sections: [
          { id: 'types', title: '类型', html: `<p>词汇、结构、指称、范围歧义。</p>` },
          { id: 'context', title: '语境', html: `<p>指示、语境依赖；消歧策略与语用推理。</p>` }
        ], refs: [] } }
    ]
  },
  /* 7 模型论 +5 */
  {
    chapters: [
      { title: '结构与同构', brief: '模型的形态。',
        q: [
          { stem: '同构指：', options: ['保持结构的双射', '元素相同', '基数相同', '语言相同'], answer: 0, explain: '同构。' },
          { stem: '初等等价指：', options: ['满足相同的一阶句子', '同构', '基数相同', '语言相同'], answer: 0, explain: '等价。' },
          { stem: '子结构要求：', options: ['运算封闭且解释一致', '基数更小', '语言更少', '同构'], answer: 0, explain: '子结构。' }
        ],
        doc: { lead: '这一章讲结构。', sections: [
          { id: 'structures', title: '结构', html: `<p>语言、论域、解释；同态、嵌入、同构。</p>` },
          { id: 'elementary', title: '初等', html: `<p>初等等价、初等嵌入、初等子结构。</p>` }
        ], refs: [] } },
      { title: '紧致性与洛文海姆-斯科伦', brief: '两个基本定理。',
        q: [
          { stem: '向下洛文海姆-斯科伦定理说：', options: ['可满足理论有可数模型', '所有模型可数', '理论有限', '模型唯一'], answer: 0, explain: '向下。' },
          { stem: '向上定理说明：', options: ['可有无穷大基数的模型', '模型唯一', '理论有限', '不可满足'], answer: 0, explain: '向上。' },
          { stem: '紧致性的应用包括：', options: ['构造非标准模型', '证明完备性', '证明一致性', '计算复杂度'], answer: 0, explain: '非标准。' }
        ],
        doc: { lead: '这一章讲定理。', sections: [
          { id: 'lowenheim', title: '洛文海姆-斯科伦', html: `<p>向下与向上；斯科伦悖论。</p>` },
          { id: 'compactness', title: '紧致性', html: `<p>非标准算术与实数；超积构造。</p>` }
        ], refs: [] } },
      { title: '类型与饱和', brief: '模型的丰富性。',
        q: [
          { stem: '类型是：', options: ['与理论一致的公式集', '模型', '语言', '函数'], answer: 0, explain: '类型。' },
          { stem: '饱和模型指：', options: ['实现所有小类型', '基数最大', '同构唯一', '可数'], answer: 0, explain: '饱和。' },
          { stem: '省略型定理用于：', options: ['构造不实现某类型的模型', '构造同构', '计算基数', '证明一致'], answer: 0, explain: '省略。' }
        ],
        doc: { lead: '这一章讲类型。', sections: [
          { id: 'types', title: '类型', html: `<p>部分类型、完全类型；斯通空间。</p>` },
          { id: 'saturation', title: '饱和', html: `<p>饱和与齐次模型；省略型定理。</p>` }
        ], refs: [] } },
      { title: '量词消去', brief: '简化理论。',
        q: [
          { stem: '量词消去指：', options: ['每个公式等价于无量词公式', '删除所有量词', '只用量词', '取消公式'], answer: 0, explain: 'QE。' },
          { stem: '代数闭域具有：', options: ['量词消去', '无模型', '不可判定', '有限模型'], answer: 0, explain: 'ACF。' },
          { stem: '量词消去的意义是：', options: ['判定性与可定义性分析', '加快计算', '减少符号', '简化语法'], answer: 0, explain: '判定。' }
        ],
        doc: { lead: '这一章讲消去。', sections: [
          { id: 'qe', title: 'QE', html: `<p>定义与判定；代数闭域、实闭域、稠密线性序。</p>` },
          { id: 'consequence', title: '推论', html: `<p>可判定性、完全性、可定义集的结构。</p>` }
        ], refs: [] } },
      { title: '应用', brief: '模型论能做什么。',
        q: [
          { stem: '模型论在数学中的应用包括：', options: ['代数与分析的元定理', '物理实验', '统计', '编程'], answer: 0, explain: '数学。' },
          { stem: '非标准分析的基础是：', options: ['紧致性构造的无穷小模型', '实数公理', '集合论', '概率'], answer: 0, explain: '非标准。' },
          { stem: '可定义性是研究：', options: ['哪些集合可被公式定义', '哪些公式可证', '哪些模型存在', '哪些语言有效'], answer: 0, explain: '可定义。' }
        ],
        doc: { lead: '这一章讲应用。', sections: [
          { id: 'math', title: '数学', html: `<p>非标准分析、代数几何中的应用；转移原理。</p>` },
          { id: 'definability', title: '可定义性', html: `<p>可定义集、可判定理论；与计算复杂性交叉。</p>` }
        ], refs: [] } }
    ]
  },
  /* 8 证明论 +5 */
  {
    chapters: [
      { title: '自然演绎', brief: '贴近推理的规则。',
        q: [
          { stem: '自然演绎的蕴含引入规则对应：', options: ['假设条件下的证明', '真值表', '模型', '公理'], answer: 0, explain: '→I。' },
          { stem: '消去规则的作用是：', options: ['使用连接词', '引入连接词', '删除公式', '证明一致性'], answer: 0, explain: 'E 规则。' },
          { stem: '自然演绎的规范化定理说明：', options: ['证明可化为范式', '所有证明等长', '无消去规则', '系统不完备'], answer: 0, explain: '规范化。' }
        ],
        doc: { lead: '这一章讲自然演绎。', sections: [
          { id: 'rules', title: '规则', html: `<p>引入与消去；假设与 discharges。</p>` },
          { id: 'normalization', title: '规范化', html: `<p>Prawitz；正规化与子公式性质。</p>` }
        ], refs: [] } },
      { title: '相继式演算', brief: 'Gentzen 的框架。',
        q: [
          { stem: '相继式 Γ ⇒ Δ 中左边表示：', options: ['前提（合取）', '结论', '析取', '否定'], answer: 0, explain: '左合取。' },
          { stem: '切规则的作用是：', options: ['引用引理', '删除公式', '引入量词', '证明完备'], answer: 0, explain: '切。' },
          { stem: 'LK 与 LJ 的区别是：', options: ['经典 vs 直觉主义', '是否含量词', '是否有切', '是否有效'], answer: 0, explain: '两类。' }
        ],
        doc: { lead: '这一章讲相继式。', sections: [
          { id: 'sequent', title: '相继式', html: `<p>Γ ⇒ Δ；结构规则与逻辑规则。</p>` },
          { id: 'systems', title: '系统', html: `<p>LK（经典）、LJ（直觉主义）；弱化、收缩、交换。</p>` }
        ], refs: [] } },
      { title: '切消除', brief: '核心定理。',
        q: [
          { stem: '切消除定理说：', options: ['切规则可被消除', '切规则必须保留', '切规则不完备', '切规则无意义'], answer: 0, explain: 'Hauptsatz。' },
          { stem: '切消除的推论包括：', options: ['子公式性质与一致性证明', '完备性', '紧致性', '可判定性'], answer: 0, explain: '推论。' },
          { stem: '切消除的代价是：', options: ['证明可能变长（超指数）', '证明更短', '系统不健全', '丢失规则'], answer: 0, explain: '复杂性。' }
        ],
        doc: { lead: '这一章讲切。', sections: [
          { id: 'hauptsatz', title: '主定理', html: `<p>Gentzen 的切消除；证明变换。</p>` },
          { id: 'consequences', title: '推论', html: `<p>子公式性质、一致性、插值定理。</p>` }
        ], refs: [] } },
      { title: '直觉主义逻辑', brief: '构造性的逻辑。',
        q: [
          { stem: '直觉主义拒绝：', options: ['排中律与双重否定消去', '矛盾律', '同一律', '蕴含'], answer: 0, explain: '排中。' },
          { stem: 'BHK 解释把证明理解为：', options: ['构造', '真值', '模型', '语法'], answer: 0, explain: '构造。' },
          { stem: '直觉主义逻辑与计算的关系是：', options: ['证明即程序（Curry-Howard）', '无关', '矛盾', '仅哲学'], answer: 0, explain: '对应。' }
        ],
        doc: { lead: '这一章讲直觉主义。', sections: [
          { id: 'reject', title: '拒绝', html: `<p>排中律、双重否定；构造性要求。</p>` },
          { id: 'bhk', title: 'BHK 与对应', html: `<p>证明即构造；Curry-Howard 同构。</p>` }
        ], refs: [] } },
      { title: '证明复杂性', brief: '证明有多长。',
        q: [
          { stem: '证明复杂性研究：', options: ['证明长度的下界', '证明的真假', '证明的美感', '证明的作者'], answer: 0, explain: '长度。' },
          { stem: 'NP 与证明复杂性的关系是：', options: ['命题证明系统与 NP 相关', '无关', '相同', '相反'], answer: 0, explain: '关联。' },
          { stem: '证明复杂性的意义是：', options: ['理解自动推理的极限', '加快计算', '减少符号', '证明一致性'], answer: 0, explain: '极限。' }
        ],
        doc: { lead: '这一章讲复杂性。', sections: [
          { id: 'lower', title: '下界', html: `<p>证明系统、多项式有界；NP vs coNP。</p>` },
          { id: 'systems', title: '系统比较', html: `<p>归结、Frege 系统、扩展 Frege；分离结果。</p>` }
        ], refs: [] } }
    ]
  },
  /* 9 计算与逻辑 +5 */
  {
    chapters: [
      { title: '可计算性', brief: '什么能被计算。',
        q: [
          { stem: '丘奇-图灵论题说：', options: ['可计算即图灵可计算', '所有函数可计算', '计算有限', '逻辑无用'], answer: 0, explain: '论题。' },
          { stem: '停机问题是：', options: ['不可判定的', '可判定', '多项式时间', '无意义'], answer: 0, explain: '不可判定。' },
          { stem: '递归可枚举集指：', options: ['可被图灵机枚举', '可判定', '有限', '可数'], answer: 0, explain: 'r.e.。' }
        ],
        doc: { lead: '这一章讲可计算。', sections: [
          { id: 'models', title: '模型', html: `<p>图灵机、λ 演算、递归函数；等价性。</p>` },
          { id: 'undecidable', title: '不可判定', html: `<p>停机问题、对角线法；r.e. 与可判定。</p>` }
        ], refs: [] } },
      { title: '图灵机与复杂度', brief: '计算资源。',
        q: [
          { stem: 'P 与 NP 的关系问题是：', options: ['未解决的公开问题', '已证明相等', '已证明不等', '无意义'], answer: 0, explain: '公开问题。' },
          { stem: 'NP 完全问题的典型是：', options: ['SAT', '排序', '查找', '加法'], answer: 0, explain: 'SAT。' },
          { stem: '归约的作用是：', options: ['比较问题难度', '加快计算', '减少输入', '证明存在'], answer: 0, explain: '归约。' }
        ],
        doc: { lead: '这一章讲复杂度。', sections: [
          { id: 'classes', title: '类', html: `<p>P、NP、coNP、PSPACE；完全性。</p>` },
          { id: 'reduction', title: '归约', html: `<p>多项式归约；Cook-Levin 定理。</p>` }
        ], refs: [] } },
      { title: '判定问题', brief: '逻辑的可判定性。',
        q: [
          { stem: '命题逻辑的可满足性是：', options: ['可判定（NP 完全）', '不可判定', '多项式时间', '无意义'], answer: 0, explain: 'SAT。' },
          { stem: '一阶逻辑的有效性是：', options: ['不可判定（丘奇定理）', '可判定', '多项式', '有限'], answer: 0, explain: '不可判定。' },
          { stem: '可判定理论的例子是：', options: ['实闭域理论', '算术', '集合论', '群论'], answer: 0, explain: 'RCF。' }
        ],
        doc: { lead: '这一章讲判定。', sections: [
          { id: 'decidable', title: '可判定', html: `<p>命题逻辑、Presburger 算术、实闭域。</p>` },
          { id: 'undecidable', title: '不可判定', html: `<p>一阶逻辑、算术；丘奇-图灵。</p>` }
        ], refs: [] } },
      { title: 'λ 演算', brief: '函数的计算。',
        q: [
          { stem: 'λ 演算的核心操作是：', options: ['β 归约', '加法', '乘法', '排序'], answer: 0, explain: 'β。' },
          { stem: '丘奇数用于表示：', options: ['自然数', '布尔值', '列表', '函数'], answer: 0, explain: '编码。' },
          { stem: 'λ 演算与图灵机的关系是：', options: ['计算能力等价', '图灵机更强', 'λ 更强', '无关'], answer: 0, explain: '等价。' }
        ],
        doc: { lead: '这一章讲 λ。', sections: [
          { id: 'calculus', title: '演算', html: `<p>抽象、应用、β 归约；丘奇-罗塞尔。</p>` },
          { id: 'encoding', title: '编码', html: `<p>丘奇数、布尔、递归；与函数式编程。</p>` }
        ], refs: [] } },
      { title: '类型论', brief: '证明与程序的对应。',
        q: [
          { stem: 'Curry-Howard 对应说的是：', options: ['证明与程序同构', '逻辑与代数', '模型与语言', '语法与语义'], answer: 0, explain: '同构。' },
          { stem: '简单类型 λ 演算对应：', options: ['直觉主义命题逻辑', '经典逻辑', '模态逻辑', '一阶逻辑'], answer: 0, explain: '直觉主义。' },
          { stem: '依赖类型的作用是：', options: ['用类型表达命题与规范', '加快编译', '减少代码', '美化语法'], answer: 0, explain: '依赖。' }
        ],
        doc: { lead: '这一章讲类型。', sections: [
          { id: 'correspondence', title: '对应', html: `<p>命题即类型、证明即项；自然演绎与类型系统。</p>` },
          { id: 'dependent', title: '依赖类型', html: `<p>依赖类型与形式化数学（Coq、Lean）。</p>` }
        ], refs: [] } }
    ]
  },
  /* 10 毕业论文写作 +1 */
  {
    chapters: [
      { title: '选题与论证', brief: '小问题、严论证。',
        q: [
          { stem: '逻辑学论文选题的关键是：', options: ['有明确问题与可检验的论证', '题目宏大', '资料多', '导师喜欢'], answer: 0, explain: '问题。' },
          { stem: '形式化论文的核心是：', options: ['定义、定理、证明', '综述', '例子', '感想'], answer: 0, explain: '证明。' },
          { stem: '答辩时最该准备的是：', options: ['核心论证与可能反驳', 'PPT 模板', '背稿', '篇幅'], answer: 0, explain: '论证。' }
        ],
        doc: { lead: '这一章讲写作。', sections: [
          { id: 'topic', title: '选题', html: `<p>逻辑系统、哲学问题、应用；范围可控。</p>` },
          { id: 'defense', title: '答辩', html: `<p>陈述：问题、方法、结果、局限。</p>` }
        ], refs: [] } }
    ]
  },
  /* 11 学术讲座与论文 +1 */
  {
    chapters: [
      { title: '学术活动与发表', brief: '融入学术共同体。',
        q: [
          { stem: '听讲座前应：', options: ['了解主题与讲者', '什么都不准备', '只看 PPT', '等录音'], answer: 0, explain: '准备。' },
          { stem: '投稿前应确认：', options: ['期刊范围与格式', '价格', '影响因子唯一', '编辑'], answer: 0, explain: '匹配。' },
          { stem: '评审意见的处理是：', options: ['逐条回应并修改', '忽略', '争辩', '换刊'], answer: 0, explain: '回应。' }
        ],
        doc: { lead: '这一章讲学术。', sections: [
          { id: 'talks', title: '讲座', html: `<p>准备问题、记录论证、会后交流。</p>` },
          { id: 'publish', title: '发表', html: `<p>选刊、格式、回应评审；避免 predatory journals。</p>` }
        ], refs: [] } }
    ]
  },
  /* 12 考研与求职准备 +1 */
  {
    chapters: [
      { title: '考研与求职', brief: '两条路的准备。',
        q: [
          { stem: '逻辑学考研专业课通常包括：', options: ['数理逻辑 + 逻辑史/哲学', '只有数学', '只有英语', '只有政治'], answer: 0, explain: '专业课。' },
          { stem: '逻辑学毕业生的去向包括：', options: ['高校、科研、IT、金融风控', '只有高校', '只有公务员', '只有中学'], answer: 0, explain: '多元。' },
          { stem: '求职最加分的材料是：', options: ['证明/编程作品', '证书数量', '成绩单', '社团'], answer: 0, explain: '作品。' }
        ],
        doc: { lead: '这一章讲规划。', sections: [
          { id: 'exam', title: '考研', html: `<p>数理逻辑、逻辑史、哲学综合；3–6 月基础，7–8 月真题，9–12 月强化。</p>` },
          { id: 'job', title: '就业', html: `<p>高校科研、形式化验证、算法、金融风控、教育。</p>` }
        ], refs: [] } }
    ]
  }
]);
