/* ==========================================================
   引路 —— 大学新生专业学习导航
   数据层：学科门类 / 专业 / 路径模板 / 示例关卡

   说明：这是纯静态项目，为了能直接双击 index.html 打开，
   数据放在 js 文件里而不是 json（file:// 下 fetch 会被拦截）。
   当前阶段只搭"框架"：路径结构是真的，具体课程的关卡内容
   除计算机专业的 C 语言（15 关整合为「C 语言程序设计」1 门课）外，都标为"建设中"。
   ========================================================== */

/* ---------------- 1. 学科门类（按教育部学科目录，不含军事学） ---------------- */
const CATEGORIES = [
  { id: 'philosophy',  name: '哲学',     emoji: '💭', desc: '追问本质与逻辑' },
  { id: 'economics',   name: '经济学',   emoji: '📈', desc: '理解资源与市场' },
  { id: 'law',         name: '法学',     emoji: '⚖️', desc: '规则、权利与责任' },
  { id: 'education',   name: '教育学',   emoji: '🎓', desc: '怎么教，也怎么学' },
  { id: 'literature',  name: '文学',     emoji: '📖', desc: '语言、文本与表达' },
  { id: 'history',     name: '历史学',   emoji: '🏛️', desc: '过去与证据' },
  { id: 'science',     name: '理学',     emoji: '🔬', desc: '数理与自然规律' },
  { id: 'engineering', name: '工学',     emoji: '⚙️', desc: '把想法造成东西' },
  { id: 'agriculture', name: '农学',     emoji: '🌾', desc: '生命、土地与环境' },
  { id: 'medicine',    name: '医学',     emoji: '🩺', desc: '健康与疾病' },
  { id: 'management',  name: '管理学',   emoji: '📊', desc: '组织与效率' },
  { id: 'art',         name: '艺术学',   emoji: '🎨', desc: '审美与表达' },
  { id: 'inter',       name: '交叉学科', emoji: '🧩', desc: '跨领域的组合' }
];

/* ---------------- 1.1 公共必修课：与专业无关，首页统一展示 ----------------
   加新课只往这个数组里追加一条，首页会自动多一张卡片 */
const COMMON_COURSES = [
  {
    code: '15040',
    tag: '思政',
    name: '习近平新时代中国特色社会主义思想概论',
    desc: '导论 + 17 章重点整理 · 每章一张思维导图',
    courseId: 'xi-thought',            // 站内「文字说明」用这个 id 取内容
    url: 'https://zhuanlan.zhihu.com/p/1903463551391240879'
  }
];

/* ---------------- 2. 专业（id, 门类, 名称, 图标, 一句话方向） ----------------
   ready = 1 表示已有可运行的示例关卡（目前只有计算机专业） */
const MAJOR_ROWS = [
  ['philosophy',  '哲学',                     '💭', '读原著、练逻辑', 1],
  ['philosophy',  '逻辑学',                   '🧠', '形式推理与论证', 1],
  ['law',         '法学',                     '⚖️', '规则与案例', 1],
  ['law',         '知识产权',                 '📜', '创新与保护', 1],
  ['law',         '社会学',                   '🤝', '观察社会运行', 1],
  ['economics',   '经济学',                   '📈', '看懂市场与政策', 1],
  ['economics',   '金融学',                   '💰', '资金与风险', 1],
  ['economics',   '国际经济与贸易',           '🌍', '跨市场做生意', 1],
  ['economics',   '财政学',                   '🏦', '政府的钱怎么花', 1],
  ['education',   '教育学',                   '🎓', '教育规律与方法', 1],
  ['education',   '学前教育',                 '🧸', '幼儿发展与保教', 1],
  ['education',   '教育技术学',               '💡', '用技术改进教学', 1],
  ['literature',  '汉语言文学',               '📖', '读与写的功夫'],
  ['literature',  '英语',                     '🌐', '语言与文化'],
  ['literature',  '新闻学',                   '📰', '采写编评'],
  ['literature',  '广告学',                   '📣', '创意与传播'],
  ['history',     '历史学',                   '🏛️', '史料与解释'],
  ['history',     '考古学',                   '🏺', '从实物读历史'],
  ['science',     '数学与应用数学',           '📐', '证明与建模'],
  ['science',     '物理学',                   '⚛️', '规律与实验'],
  ['science',     '化学',                     '🧪', '物质与反应'],
  ['science',     '生物科学',                 '🧬', '生命与机制'],
  ['science',     '统计学',                   '📊', '从数据里找规律'],
  ['engineering', '计算机科学与技术',         '💻', '编程与系统', 1],
  ['engineering', '软件工程',                 '🧩', '把需求做成产品', 1],
  ['engineering', '电子信息工程',             '📡', '信号与电路'],
  ['engineering', '自动化',                   '🤖', '让机器自己动'],
  ['engineering', '机械设计制造及其自动化',   '⚙️', '设计并造出机构'],
  ['engineering', '土木工程',                 '🏗️', '把建筑稳稳立住'],
  ['engineering', '材料科学与工程',           '🧱', '结构决定性能'],
  ['agriculture', '农学',                     '🌾', '作物与生长'],
  ['agriculture', '园艺',                     '🍎', '果树、蔬菜与花卉'],
  ['agriculture', '动物医学',                 '🐾', '动物健康'],
  ['agriculture', '食品科学与工程',           '🍱', '安全与加工', 1],
  ['medicine',    '临床医学',                 '🩺', '看病与治病', 1],
  ['medicine',    '口腔医学',                 '🦷', '牙与口腔', 1],
  ['medicine',    '护理学',                   '💉', '照护与康复', 1],
  ['medicine',    '药学',                     '💊', '药物与作用', 1],
  ['management',  '工商管理',                 '📊', '企业与经营'],
  ['management',  '会计学',                   '🧾', '账目与决策'],
  ['management',  '市场营销',                 '📣', '需求与增长'],
  ['management',  '信息管理与信息系统',       '🗂️', '用系统管业务'],
  ['art',         '视觉传达设计',             '🎨', '图形与信息'],
  ['art',         '环境设计',                 '🏠', '空间与体验'],
  ['art',         '音乐学',                   '🎵', '声音与理论'],
  ['art',         '播音与主持艺术',           '🎤', '表达与呈现'],
  ['inter',       '人工智能',                 '🤖', '让模型学数据'],
  ['inter',       '数据科学与大数据技术',     '📊', '从数据到决策'],
  ['inter',       '集成电路设计与集成系统',   '🔌', '芯片与电路']
];

/* ---------------- 2.1 专业对应的零基础视频课程 ----------------
   一个专业一条视频，优先国家级精品课 / 完整公开课 / 高播放入门课。
   url 统一指向 B 站，选「视频讲解」后会在关卡讲解区直接播放。 */
const VIDEO_COURSES = {
  '哲学': { title: '王德峰《哲学导论》全15讲30节', url: 'https://www.bilibili.com/video/BV1oB4y117AQ' },
  '逻辑学': { title: '台湾大学《逻辑学》全100集', url: 'https://www.bilibili.com/video/BV1iCdoYKEgf' },
  '法学': { title: '罗翔讲刑法 83讲', url: 'https://www.bilibili.com/video/BV1u3411Y73R' },
  '知识产权': { title: '王迁《知识产权法》66讲', url: 'https://www.bilibili.com/video/BV18kNx6ME6W' },
  '社会学': { title: '北京大学《社会学概论》卢晖临 64讲', url: 'https://www.bilibili.com/video/BV1xExTzyEJv' },
  '经济学': { title: '清华大学《经济学原理》钱颖一 77讲', url: 'https://www.bilibili.com/video/BV11bnGzCEFj' },
  '金融学': { title: '国家级精品课《金融学基础》40讲', url: 'https://www.bilibili.com/video/BV1ovaGzfE3B' },
  '国际经济与贸易': { title: '上海对外经贸大学《国际贸易实务》41讲', url: 'https://www.bilibili.com/video/BV1qbQGYAEo6' },
  '财政学': { title: '中南财经政法大学《财政学》61课', url: 'https://www.bilibili.com/video/BV18rLNz9E27' },
  '教育学': { title: '北京师范大学《教育学导论》', url: 'https://www.bilibili.com/video/BV1Xm1VY7EvY' },
  '学前教育': { title: '陕西师范大学《学前教育原理》国家级精品课', url: 'https://www.bilibili.com/video/av292228245' },
  '教育技术学': { title: '北京师范大学《教育技术学导论》含课件', url: 'https://www.bilibili.com/video/BV1hp4y1k7fB' },
  '汉语言文学': { title: '陕西师范大学《中国古代文学史》国家级精品课', url: 'https://www.bilibili.com/video/BV1UE411L7ke' },
  '英语': { title: '英语兔《全网最适合中国人的免费音标课》', url: 'https://www.bilibili.com/video/BV1iV411z7Nj' },
  '新闻学': { title: '复旦大学《新闻学概论》全12P', url: 'https://www.bilibili.com/video/BV1uK411j74F' },
  '广告学': { title: '中国传媒大学《广告学概论》丁俊杰 73讲', url: 'https://www.bilibili.com/video/BV18r4y1P7cz' },
  '历史学': { title: '央视《中国通史》全100集', url: 'https://www.bilibili.com/bangumi/play/ep327052/' },
  '考古学': { title: '北京大学《考古是什么》+《考古学通论》', url: 'https://www.bilibili.com/video/av29859306' },
  '数学与应用数学': { title: '宋浩《高等数学》2.0版', url: 'https://www.bilibili.com/video/BV1CAxaeHEeH' },
  '物理学': { title: '清华大学《普通物理》完整版', url: 'https://www.bilibili.com/video/BV15MTx6EEYF' },
  '化学': { title: '北京大学《普通化学》严纯华', url: 'https://www.bilibili.com/video/BV1pu4y1q7F9' },
  '生物科学': { title: '清华大学《普通生物学》', url: 'https://www.bilibili.com/video/BV14E41127Gr' },
  '统计学': { title: '宋浩《概率论与数理统计》2.0版', url: 'https://www.bilibili.com/video/BV1ot411y7mU' },
  '计算机科学与技术': { title: '浙江大学翁恺《C语言入门与进阶》129讲', url: 'https://www.bilibili.com/video/BV1ALSyBREDu' },
  '软件工程': { title: '电子科技大学《软件工程基础》48讲', url: 'https://www.bilibili.com/video/BV1VzqoBCEXJ' },
  '电子信息工程': { title: '清华大学《模拟电子技术基础》华成英 56讲', url: 'https://www.bilibili.com/video/av87698745' },
  '自动化': { title: '西北工业大学卢京潮《自动控制原理》', url: 'https://www.bilibili.com/video/BV1pw411d78U' },
  '机械设计制造及其自动化': { title: '《机械原理》8小时零基础速成课', url: 'https://www.bilibili.com/video/BV1FfMvzuEjQ' },
  '土木工程': { title: '同济大学《土木工程概论》36讲', url: 'https://www.bilibili.com/video/av11154768' },
  '材料科学与工程': { title: '西北工业大学《材料科学基础》93讲', url: 'https://www.bilibili.com/video/BV1qxwTziEKf' },
  '人工智能': { title: '吴恩达《机器学习》中文配音 2025版', url: 'https://www.bilibili.com/video/BV1MBKRzqEBR' },
  '数据科学与大数据技术': { title: 'Python数据分析教程 69集（NumPy+Pandas+Matplotlib）', url: 'https://www.bilibili.com/video/BV18ohHzkEnw' },
  '集成电路设计与集成系统': { title: '复旦大学合作《半导体与集成电路》公开课', url: 'https://www.bilibili.com/video/BV1rVd1BiEPq' },
  '农学': { title: '扬州大学《作物栽培学》戴其根 91讲', url: 'https://m.bilibili.com/video/BV15X4y1m7BE' },
  '园艺': { title: '华中农业大学《园艺植物栽培学》52讲', url: 'https://www.bilibili.com/video/av757148590' },
  '动物医学': { title: '中国农业大学《动物解剖学》陈耀星', url: 'https://www.bilibili.com/video/BV19v411A7gt' },
  '食品科学与工程': { title: '江南大学《食品化学》35讲', url: 'https://m.bilibili.com/video/BV1UzP9zFERY' },
  '临床医学': { title: '霍琨《系统解剖学》全集', url: 'https://www.bilibili.com/video/BV1S1QAY8Eqk' },
  '口腔医学': { title: '四川大学华西口腔医学院《口腔解剖学》全集', url: 'https://www.bilibili.com/video/BV1gzmjBmEG3' },
  '护理学': { title: '四川大学《护理学基础》62讲', url: 'https://www.bilibili.com/video/BV1ZiNwzNEkb' },
  '药学': { title: '复旦大学《药理学》程能能 国家级精品课', url: 'https://www.bilibili.com/video/BV1H4GwzdE4d' },
  '工商管理': { title: '东北财经大学《管理学》国家级精品课', url: 'https://www.bilibili.com/video/BV1nG411b7iJ' },
  '会计学': { title: '复旦大学《会计学原理》徐晔 国家精品课', url: 'https://www.bilibili.com/video/BV1NDuCz6EwP' },
  '市场营销': { title: '清华大学《营销的逻辑》全9讲', url: 'https://www.bilibili.com/video/BV1xhegzrEdr' },
  '信息管理与信息系统': { title: '复旦大学《管理信息系统》28讲', url: 'https://www.bilibili.com/video/BV1ab411V7vf' },
  '视觉传达设计': { title: 'PS零基础入门教程 100集（2026版）', url: 'https://www.bilibili.com/video/BV1uh9QBaECz' },
  '环境设计': { title: '室内设计零基础全套教程 108集', url: 'https://www.bilibili.com/video/BV1oU7N6dE44' },
  '音乐学': { title: '周海宏《音乐何须懂》音乐鉴赏讲座', url: 'https://www.bilibili.com/video/av8613616' },
  '播音与主持艺术': { title: '中国传媒大学《普通话语音》完整课程', url: 'https://www.bilibili.com/video/BV1oDuM6kEEj' }
};

const MAJORS = MAJOR_ROWS.map(function (r) {
  return {
    id: r[0].toLowerCase() + '-' + r[1].replace(/[^\u4e00-\u9fa5A-Za-z0-9]/g, ''),
    cat: r[0],
    name: r[1],
    emoji: r[2],
    desc: r[3],
    ready: r[4] || 0,
    video: VIDEO_COURSES[r[1]] || null
  };
});

/* ---------------- 3. 路径模板：每个门类 = 4 个阶段 × 3 个模块 ----------------
   阶段标题与目标是通用规律，模块名是该门类"代表性课程"，供模板生成用。 */
const PATH_TEMPLATE = {
  philosophy: {
    stages: [
      { title: '大一 · 入门与阅读', goal: '习惯读原著，别只背二手结论', modules: ['哲学导论', '逻辑学导论', '哲学原著导读'] },
      { title: '大二 · 分领域打底', goal: '中哲、西哲、伦理各铺一条线', modules: ['中国哲学史', '西方哲学史', '伦理学基础'] },
      { title: '大三 · 专题深入', goal: '挑一个方向读到能提出问题', modules: ['马克思主义哲学', '美学概论', '哲学文献研读'] },
      { title: '大四 · 输出与出口', goal: '把读过的变成一个能讲的问题', modules: ['毕业论文写作', '学术讲座与论文', '考研/求职准备'] }
    ]
  },
  economics: {
    stages: [
      { title: '大一 · 数学与常识', goal: '数学类课程决定你后面能不能学下去', modules: ['高等数学', '微观经济学', '政治经济学'] },
      { title: '大二 · 专业基础', goal: '宏观、统计、会计三件套', modules: ['宏观经济学', '统计学', '会计学原理'] },
      { title: '大三 · 方向课', goal: '金融/国贸/财政，选一条走深', modules: ['计量经济学', '货币金融学', '专业方向课'] },
      { title: '大四 · 出口', goal: '实习、数据能力、考研择校', modules: ['数据分析与软件', '毕业论文/实习', '考研/求职准备'] }
    ]
  },
  law: {
    stages: [
      { title: '大一 · 法理与体系', goal: '法理学+宪法，先建体系直觉', modules: ['法理学', '宪法学', '中国法制史'] },
      { title: '大二 · 部门法', goal: '民法刑法行政法是核心', modules: ['民法总论', '刑法总论', '行政法与行政诉讼法'] },
      { title: '大三 · 实务与案例', goal: '案例研读、法律检索、法考基础', modules: ['民法分论', '诉讼法', '法律职业伦理与案例研习'] },
      { title: '大四 · 法考与出口', goal: '法考/考研/实习，三选一提前定', modules: ['法考系统复习', '法律文书与实习', '考研/求职准备'] }
    ]
  },
  education: {
    stages: [
      { title: '大一 · 教育学的眼睛', goal: '理解"教育是什么"而不是背定义', modules: ['教育学原理', '心理学基础', '教育社会学'] },
      { title: '大二 · 学习与发展', goal: '从心理学视角看学生', modules: ['发展心理学', '学习心理学', '课程论'] },
      { title: '大三 · 教学能力', goal: '会设计课、会上课、会评价', modules: ['教学论', '教育研究方法', '教学技能训练'] },
      { title: '大四 · 实践与出口', goal: '教育实习是重头戏', modules: ['教育实习', '毕业论文', '考编/考研准备'] }
    ]
  },
  literature: {
    stages: [
      { title: '大一 · 语言与文本', goal: '现代汉语+古代文学，练基本功', modules: ['现代汉语', '中国古代文学（上）', '文学概论'] },
      { title: '大二 · 文学史线', goal: '古代到现代，把线串起来', modules: ['中国古代文学（下）', '中国现当代文学', '外国文学'] },
      { title: '大三 · 方向与写作', goal: '写得出东西，讲得清观点', modules: ['语言学概论', '专业方向课', '学术写作'] },
      { title: '大四 · 出口', goal: '论文、实习、考公考编或考研', modules: ['毕业论文', '实习实践', '考研/求职准备'] }
    ]
  },
  history: {
    stages: [
      { title: '大一 · 通史框架', goal: '先有一张时间地图', modules: ['中国古代史（上）', '世界古代史', '史学概论'] },
      { title: '大二 · 断代与国别', goal: '选一个断代读深一点', modules: ['中国古代史（下）', '中国近现代史', '世界近现代史'] },
      { title: '大三 · 史料与专题', goal: '史料学、史学史、专题研究', modules: ['史料学', '史学史', '专题史'] },
      { title: '大四 · 出口', goal: '写一篇站得住的论文', modules: ['毕业论文', '田野/档案馆实习', '考研/求职准备'] }
    ]
  },
  science: {
    stages: [
      { title: '大一 · 数理地基', goal: '高数、线代、专业导论，地基不能塌', modules: ['高等数学（上）', '线性代数', '专业导论'] },
      { title: '大二 · 专业基础', goal: '四大力学 / 有机无机 / 生化的分水岭', modules: ['高等数学（下）', '专业基础课 Ⅰ', '物理/化学/生物实验'] },
      { title: '大三 · 专业核心', goal: '核心课 + 实验设计 + 建模', modules: ['专业核心课 Ⅰ', '专业核心课 Ⅱ', '实验设计与数据处理'] },
      { title: '大四 · 科研出口', goal: '进组做一段科研，比什么都值', modules: ['科研训练/进实验室', '毕业论文', '保研/考研准备'] }
    ]
  },
  engineering: {
    stages: [
      { title: '大一 · 打地基', goal: '数学、物理、工程入门课，别让基础拖后腿', modules: ['高等数学（上）', '大学物理', '工程导论'] },
      { title: '大二 · 专业基础', goal: '专业基础课+上机实验，动手不能只看书', modules: ['专业基础课 Ⅰ', '专业基础课 Ⅱ', '实验/上机课'] },
      { title: '大三 · 核心专业课', goal: '啃下最难的核心课，找一个想深挖的方向', modules: ['专业核心课 Ⅰ', '专业核心课 Ⅱ', '课程设计/项目'] },
      { title: '大四 · 出口', goal: '实习、毕设、考研或就业，提前半年定', modules: ['实习实践', '毕业设计', '考研/求职准备'] }
    ]
  },
  agriculture: {
    stages: [
      { title: '大一 · 数理化生', goal: '农学不是"种地"，先补齐理科底子', modules: ['高等数学', '无机及分析化学', '植物学/动物学基础'] },
      { title: '大二 · 专业基础', goal: '生物化学、生理学是核心门槛', modules: ['生物化学', '植物生理学/动物生理学', '专业实验课'] },
      { title: '大三 · 核心与田间', goal: '栽培/育种/病理，配田间实习', modules: ['作物栽培学/兽医病理学', '遗传育种学', '田间/临床实习'] },
      { title: '大四 · 出口', goal: '科研训练、毕设、考公考编或考研', modules: ['科研训练', '毕业论文', '考研/求职准备'] }
    ]
  },
  medicine: {
    stages: [
      { title: '大一 · 基础医学', goal: '解剖、组胚、生理——记忆量最大的阶段', modules: ['系统解剖学', '组织学与胚胎学', '医用化学'] },
      { title: '大二 · 病理与药理', goal: '理解"病是怎么发生的"', modules: ['生理学', '生物化学', '病理学'] },
      { title: '大三 · 临床课程', goal: '内外妇儿，配临床见习', modules: ['药理学', '诊断学', '内科学/外科学'] },
      { title: '大四·大五 · 临床与出口', goal: '临床实习+执业医师考试', modules: ['临床实习', '执业医师考试复习', '考研/规培准备'] }
    ]
  },
  management: {
    stages: [
      { title: '大一 · 数理与商科常识', goal: '高数、经济学、管理学三件套', modules: ['高等数学', '管理学原理', '微观经济学'] },
      { title: '大二 · 职能模块', goal: '会计、营销、组织行为各摸一遍', modules: ['会计学', '市场营销学', '组织行为学'] },
      { title: '大三 · 工具与方向', goal: '数据分析、财务、运营选一条深走', modules: ['统计学/数据分析', '专业方向课', '商业案例分析'] },
      { title: '大四 · 出口', goal: '实习最重要，其次考研/考公', modules: ['企业实习', '毕业论文', '考研/求职准备'] }
    ]
  },
  art: {
    stages: [
      { title: '大一 · 基本功', goal: '手头功夫和审美同时练', modules: ['造型基础/乐理基础', '设计概论/艺术概论', '软件/技法基础'] },
      { title: '大二 · 专业基础', goal: '把技法练到能稳定出作品', modules: ['专业基础技法 Ⅰ', '专业基础技法 Ⅱ', '作品临摹与分析'] },
      { title: '大三 · 创作与项目', goal: '开始有自己的作品集', modules: ['专业创作 Ⅰ', '专业创作 Ⅱ', '项目/展演实践'] },
      { title: '大四 · 作品集与出口', goal: '毕业设计就是你的作品集核心', modules: ['毕业创作/毕业设计', '作品集整理', '实习/考研准备'] }
    ]
  },
  inter: {
    stages: [
      { title: '大一 · 数理与编程', goal: '数学+编程是交叉学科的双腿', modules: ['高等数学', '线性代数与概率论', '程序设计基础'] },
      { title: '大二 · 交叉基础', goal: '统计、算法、领域基础课', modules: ['概率统计', '数据结构与算法', '领域基础课'] },
      { title: '大三 · 核心与方法', goal: '模型、实验、工程落地', modules: ['机器学习/核心方法课', '实验与项目实践', '方向选修'] },
      { title: '大四 · 科研与出口', goal: '进组、比赛、实习三选一', modules: ['科研训练/竞赛', '毕业设计', '保研/考研/求职'] }
    ]
  }
};

/* ---------------- 4. 学习方式：视频讲解 / 文字说明 ---------------- */
const STYLES = [
  {
    id: 'video',
    name: '视频讲解',
    emoji: '🎬',
    desc: '左边整门课的章节目录，右边播放本关对应的分集',
    tag: '适合看不进文字的人'
  },
  {
    id: 'text',
    name: '文字说明',
    emoji: '📄',
    desc: '左边目录、右边正文的文档式讲解，读完做题',
    tag: '适合习惯快速浏览的人'
  }
];

/* ---------------- 5. 关卡模板：每个模块自动生成 3 个关卡 ---------------- */
const LEVEL_TEMPLATE = [
  { key: 'a', name: '第 1 关 · 认识概念', tip: '先弄懂"它是什么"' },
  { key: 'b', name: '第 2 关 · 基础题',   tip: '跟着例题做一遍' },
  { key: 'c', name: '第 3 关 · 综合题',   tip: '自己独立做出来' }
];

/* ---------------- 5.1 专业级路径覆盖 ----------------
   默认所有专业都用 PATH_TEMPLATE 的门类模板（模块为占位）。
   在这里登记的专业改用「一模块一关」的真实模块表；
   哲学 / 逻辑学 的覆盖由 js/philosophy.js、js/logic.js 在加载时补进来。 */
var MAJOR_STAGE_OVERRIDES = {};

/* ---------------- 6. 组装：把专业 + 模板 → 完整路径 ---------------- */

/* 给关卡挂上"同步教材"信息（教材 / 章序号 / 章标题 / 知识点 / 难度）
   数据来自 js/textbooks.js；未加载该文件时静默跳过，不影响原有功能 */
function attachTextbookSync(level, majorId, moduleName, index) {
  if (typeof levelSyncOf !== 'function') return level;
  level.moduleName = moduleName;
  level.sync = levelSyncOf(majorId, moduleName, level.name, index);
  return level;
}

function buildLevels(majorId, moduleIndex, realLevels, moduleName) {
  var list = [];
  // 有真题的模块：真实关卡有几关就放几关
  if (realLevels) {
    for (var r = 0; r < realLevels.length; r++) {
      list.push(attachTextbookSync({
        id: majorId + '-m' + moduleIndex + '-l' + r,
        name: realLevels[r].name,
        brief: realLevels[r].brief,
        questions: realLevels[r].questions,
        code: realLevels[r].code != null ? realLevels[r].code : (typeof CS_CODE_TASKS !== 'undefined' && CS_CODE_TASKS[realLevels[r].id]) || null,
        ready: true
      }, majorId, moduleName, r));
    }
    return list;
  }
  // 没有真题的模块：按模板生成 3 个占位关卡
  for (var i = 0; i < LEVEL_TEMPLATE.length; i++) {
    var t = LEVEL_TEMPLATE[i];
    list.push(attachTextbookSync({
      id: majorId + '-m' + moduleIndex + '-l' + i,
      name: t.name,
      brief: t.tip,
      questions: null,
      ready: false
    }, majorId, moduleName, i));
  }
  return list;
}

/* ---------------- 6.1 关卡补齐：不足 84 关的专业补到 84 ----------------
   部分专业（占位专业 / 医学类精简版）一门课只有 3 关，整个专业只有 36 关。
   这里把每个不足 7 关的模块补到 7 关：12 门课 × 7 关 = 84 关，
   与生物科学、统计学等已建成专业的关卡数对齐。
   补出来的关卡是占位题（ready: false），后续可直接替换成真题。 */
var PAD_TEMPLATE = {
  3: { name: '第 4 关 · 提高题',   tip: '在基础题上再进一步' },
  4: { name: '第 5 关 · 变式训练', tip: '换个角度再考一次' },
  5: { name: '第 6 关 · 综合演练', tip: '把这一章的内容串起来' },
  6: { name: '第 7 关 · 章末测试', tip: '模拟一次章末小测' }
};

function padLevelsTo84(major, stages) {
  var total = 0, i, j;
  for (i = 0; i < stages.length; i++)
    for (j = 0; j < stages[i].modules.length; j++)
      total += stages[i].modules[j].levels.length;
  if (!total || total >= 84) return stages;
  for (i = 0; i < stages.length; i++) {
    for (j = 0; j < stages[i].modules.length; j++) {
      var md = stages[i].modules[j];
      while (md.levels.length < 7 && PAD_TEMPLATE[md.levels.length]) {
        var idx = md.levels.length;
        var t = PAD_TEMPLATE[idx];
        md.levels.push(attachTextbookSync({
          id: md.id + '-l' + idx,
          name: t.name,
          brief: t.tip,
          questions: null,
          ready: false
        }, major.id, md.name, idx));
      }
      spreadSyncChapters(md.levels);
    }
  }
  return stages;
}

/* 关卡数多于教材章数时（如 7 关配 4 章的讲义），把章节序号按比例摊到整本书，
   避免"第 7 章 / 共 4 章"这种越界展示。明确写"第 N 章"的关卡保持原样。 */
function spreadSyncChapters(levels) {
  if (typeof levelSyncOf !== 'function' || !levels || !levels.length) return;
  var count = levels.length;
  levels.forEach(function (l, idx) {
    var s = l.sync;
    if (!s || !s.book || !s.chapterTotal) return;
    if (s.chapterNo <= s.chapterTotal) return;
    if (/第\s*\d+\s*章/.test(l.name || '')) return;
    var n = Math.min(s.chapterTotal, Math.max(1, Math.ceil((idx + 1) * s.chapterTotal / count)));
    var ch = s.book.chapters[n - 1];
    s.chapterNo = n;
    s.chapterTitle = ch ? ch.t : '';
    s.points = ch ? ch.p : [];
    s.difficulty = n > Math.ceil(s.chapterTotal * 2 / 3) ? '综合'
      : (n > Math.ceil(s.chapterTotal / 3) ? '进阶' : '入门');
    s.inBook = !!ch;
  });
}

function getPath(majorId) {
  var major = getMajor(majorId);
  if (!major) return null;
  var tpl = PATH_TEMPLATE[major.cat];
  // 有专门模块表的专业（计科、哲学、逻辑学）走覆盖，其余用门类模板
  var override = (typeof MAJOR_STAGE_OVERRIDES !== 'undefined' && MAJOR_STAGE_OVERRIDES[major.id]) || {};
  var stages = [];
  var moduleIndex = 0;
  for (var i = 0; i < tpl.stages.length; i++) {
    var s = tpl.stages[i];
    var mods = (override[s.title] && override[s.title].modules) || s.modules.map(function (m) { return { name: m, levels: null }; });
    var stage = { title: s.title, goal: (override[s.title] && override[s.title].goal) || s.goal, modules: [] };
    for (var j = 0; j < mods.length; j++) {
      var m = mods[j];
      var mod = {
        id: major.id + '-m' + moduleIndex,
        name: m.name,
        levels: buildLevels(major.id, moduleIndex, m.levels, m.name)
      };
      spreadSyncChapters(mod.levels);
      stage.modules.push(mod);
      moduleIndex++;
    }
    stages.push(stage);
  }
  return { major: major, stages: padLevelsTo84(major, stages) };
}

function getMajor(id) {
  for (var i = 0; i < MAJORS.length; i++) if (MAJORS[i].id === id) return MAJORS[i];
  return null;
}
function getCategory(id) {
  for (var i = 0; i < CATEGORIES.length; i++) if (CATEGORIES[i].id === id) return CATEGORIES[i];
  return null;
}
function majorsOfCategory(catId) {
  return MAJORS.filter(function (m) { return m.cat === catId; });
}
function allLevelsOf(path) {
  var out = [];
  for (var i = 0; i < path.stages.length; i++)
    for (var j = 0; j < path.stages[i].modules.length; j++)
      for (var k = 0; k < path.stages[i].modules[j].levels.length; k++)
        out.push(path.stages[i].modules[j].levels[k]);
  return out;
}
function findLevel(path, levelId) {
  for (var i = 0; i < path.stages.length; i++)
    for (var j = 0; j < path.stages[i].modules.length; j++) {
      var lv = path.stages[i].modules[j].levels;
      for (var k = 0; k < lv.length; k++) if (lv[k].id === levelId) return { level: lv[k], module: path.stages[i].modules[j], stage: path.stages[i] };
    }
  return null;
}

/* ---------------- 10. 首页：公告轮播 / 鼓励语 / 头像 ---------------- */
var ANNOUNCEMENTS = [
  {
    tag: '更新', emoji: '🆕', tone: 'blue',
    title: 'C 语言 15 关整合为「C 语言程序设计」课程',
    desc: '原 5 个模块的 15 关已合并为一门「C 语言程序设计」课，共 15 章，按学习顺序排列，每关都配了选择题和可运行的代码任务。'
  },
  {
    tag: '说明', emoji: '🎬', tone: 'violet',
    title: '视频讲解怎么用',
    desc: '左边是整门课的 14 章目录，点任意一集右面就换；「本关必看」标出这一关对应的几集，看完再做题。'
  },
  {
    tag: '说明', emoji: '📄', tone: 'green',
    title: '文字说明怎么用',
    desc: '仿文档站的三栏：左边整条路径目录，中间正文，右边本页目录。不想看视频的时候就读文字。'
  },
  {
    tag: '规则', emoji: '🎯', tone: 'amber',
    title: '关卡是按顺序解锁的',
    desc: '完成前一关才会打开下一关，答对几道给几颗星。答错会告诉你错在哪，而不是只打个叉。'
  },
  {
    tag: '进行中', emoji: '🤝', tone: 'pink',
    title: '内容还在补，欢迎一起写',
    desc: '目前 49 个专业里，计算机的 C 语言内容最完整，其它专业先给了路径框架和推荐课程，正在按培养方案补。'
  },
  {
    tag: '关于', emoji: '🧭', tone: 'slate',
    title: '这是「引路」的第一个版本',
    desc: '做它的原因很简单：大一刚进来，最难的不是学不会，是不知道先学什么。'
  }
];

var HOME_QUOTES = [
  '慢慢来，比较快。',
  '不用一开始就跑很快，先别停。',
  '你不需要很厉害才能开始，但你需要开始才会变厉害。',
  '把今天这一关做完，就已经比昨天的自己远了。',
  '迷茫的时候，先做眼前最小的一件事。',
  '别人的进度是别人的，你的路只属于你。',
  '看不懂就先做一遍，做完再回来看。',
  '一天十分钟，一个学期就是一门课。',
  '现在觉得难的东西，三个月后你会觉得理所当然。',
  '没有白走的路，每一步都算数。',
  '开始的勇气比完美的计划重要。',
  '别怕慢，怕的是原地站着想。',
  '想，全是问题；做，才有答案。',
  '把「我不会」换成「我可以学」。',
  '没有横空出世的幸运，只有不为人知的努力。',
  '所有的奇迹，都来自平凡的坚持。',
  '先完成，再完美。',
  '今天多学一点，明天就多一点选择。',
  '读书，是用最便宜的成本走最远的路。',
  '你只管向前走，时间会给你答案。',
  '怕什么真理无穷，进一寸有一寸的欢喜。',
  '路虽远，行则将至；事虽难，做则必成。',
  '不积跬步，无以至千里。',
  '星光不问赶路人，时光不负有心人。',
  '哪怕走得慢，也别回头。',
  '别人看到的是结果，你经历的是成长。',
  '焦虑，往往是因为想得太多、做得太少。',
  '每天进步一点点，一年后就是另一个自己。',
  '把大目标拆小，今天只做今天的事。',
  '现在吃的苦，是以后挑路的底气。',
  '不必和别人比速度，只和昨天的自己比距离。',
  '热爱可抵岁月漫长。',
  '真正的高手，都是把简单的事重复做。',
  '先别急着否定自己，你只是还没学完。',
  '今天的坚持，是明天别人追不上的差距。',
  '把时间花在成长上，而不是焦虑上。',
  '你现在偷的懒，都会变成以后的坑。',
  '不必一次看懂，先把这一页翻过去。',
  '不是等有兴趣才开始，是开始了才有兴趣。',
  '把手机放远一点，你就赢了一半。',
  '每天做完三件小事，比想一百件大事有用。',
  '没有人能替你成长，但你可以自己开始。',
  '一次只做一件事，做完再抬头。',
  '别用战术上的勤奋，掩盖思考上的懒惰。',
  '真正的进步，常常发生在你想放弃的下一次。',
  '先成为自己的光，再照亮想去的地方。',
  '不为失败找理由，只为成功找方法。',
  '书山有路勤为径，学海无涯苦作舟。',
  '宝剑锋从磨砺出，梅花香自苦寒来。',
  '长风破浪会有时，直挂云帆济沧海。',
  '天行健，君子以自强不息。',
  '纸上得来终觉浅，绝知此事要躬行。',
  '少壮不努力，老大徒伤悲。',
  '业精于勤，荒于嬉。',
  '志不立，天下无可成之事。',
  '千里之行，始于足下。',
  '觉得晚了的时候，恰恰是最早的时候。',
  '不是因为看到希望才坚持，而是坚持了才看到希望。',
  '慢一点没关系，方向对就好。',
  '和昨天的自己和解，和明天的自己约定。',
  '把每一件小事做好，就是了不起。',
  '你流过的汗，会变成脚下的路。',
  '认真生活的人，运气都不会太差。',
  '熬过无人问津的日子，才配得上诗和远方。',
  '把每一次想放弃，都变成再试一次。',
  '你已经走在很多人前面了，别停下。'
];

var AVATARS = ['🐱', '🐶', '🐼', '🦊', '🐨', '🦉', '🐧', '🐯', '🐸', '🐵', '🌱', '🚀', '⭐', '🍀', '🎯', '📚'];