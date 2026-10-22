/* ==========================================================
   literature-courses-more.js · 汉语言文学：补齐零头（古代汉语、
   语言学概论各 +1 章到 8；毕业论文、考研与求职各 +1 章到 4）
   ========================================================== */

appendChapters('literature-汉语言文学', [
  null, null, null, null, null, null,
  { chapters: [{
    title: '虚词与句法',
    brief: '之乎者也：文言虚词是理解文气的钥匙。',
    q: [
      { stem: '"之"的常见用法不包括：', options: ['代词', '结构助词', '动词（往）', '语气词'], answer: 3, explain: '"之"不作语气词。' },
      { stem: '"而"表示转折的例子是：', options: ['青，取之于蓝，而青于蓝', '吾尝终日而思矣', '人而无信', '已而'], answer: 0, explain: '转折。' },
      { stem: '文言虚词学习的有效方法是：', options: ['按用法归类并记例句', '只背释义', '只读原文', '只做题'], answer: 0, explain: '归类+例句。' }
    ],
    doc: { lead: '这一章讲虚词。', sections: [
      { id: 'common', title: '常见虚词', html: `<p>之、其、而、以、于、为、者、也、矣、焉、乎、哉。</p>` },
      { id: 'method', title: '方法', html: `<p>按用法（代词/介词/连词/助词/语气）归类，配经典例句。</p>` }
    ], refs: [] } }] },
  { chapters: [{
    title: '文字与语言的关系',
    brief: '语言是第一性的，文字是第二性的。',
    q: [
      { stem: '文字与语言的关系是：', options: ['文字记录语言，语言先于文字', '文字先于语言', '二者无关', '文字即语言'], answer: 0, explain: '记录关系。' },
      { stem: '表音文字与表意文字的区别是：', options: ['记录音素还是意义单位', '是否书写', '是否规范', '是否古老'], answer: 0, explain: '类型。' },
      { stem: '汉字的特点包括：', options: ['表意性强、形音义结合', '纯表音', '无结构', '无历史'], answer: 0, explain: '汉字。' }
    ],
    doc: { lead: '这一章讲文字。', sections: [
      { id: 'relation', title: '关系', html: `<p>语言是第一性、文字是第二性；文字的反作用。</p>` },
      { id: 'types', title: '类型', html: `<p>表意、表音、意音文字；汉字的特点与信息化。</p>` }
    ], refs: [] } }] },
  null,
  { chapters: [{
    title: '学术规范与诚信', brief: '底线问题。',
    q: [
      { stem: '学术不端包括：', options: ['抄袭、篡改、代写', '引用', '转述', '讨论'], answer: 0, explain: '不端。' },
      { stem: '引用他人成果应：', options: ['注明出处并区分自己的贡献', '不标注', '改述即可', '只写作者'], answer: 0, explain: '规范。' },
      { stem: '使用 AI 工具写作时应：', options: ['声明使用范围并核验内容', '全部代写', '不声明', '直接提交'], answer: 0, explain: '诚信。' }
    ],
    doc: { lead: '这一章讲规范。', sections: [
      { id: 'rules', title: '规范', html: `<p>引用格式、署名、数据真实、AI 使用声明。</p>` },
      { id: 'habit', title: '习惯', html: `<p>边读边记来源；文献管理工具；保留草稿与修改记录。</p>` }
    ], refs: [] } }] },
  null,
  { chapters: [{
    title: '教师招聘与考编', brief: '语文教师怎么考。',
    q: [
      { stem: '教师招聘考试通常包括：', options: ['教综 + 学科知识 + 面试试讲', '只有笔试', '只有面试', '只有学科'], answer: 0, explain: '三块。' },
      { stem: '语文试讲的重点是：', options: ['文本解读与语言训练', '背诵', '板书美观', '时长'], answer: 0, explain: '语文味。' },
      { stem: '结构化面试的准备方式是：', options: ['分类整理 + 模拟练习', '只背模板', '临场发挥', '不看题'], answer: 0, explain: '练习。' }
    ],
    doc: { lead: '这一章讲考编。', sections: [
      { id: 'exam', title: '考试', html: `<p>教育综合（教育学、心理学、法规）+ 学科专业知识 + 试讲/说课 + 结构化。</p>` },
      { id: 'prep', title: '准备', html: `<p>熟悉教材、练写教案、模拟试讲录像复盘。</p>` }
    ], refs: [] } }] }
]);
