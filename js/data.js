/* ==========================================================
   引路 —— 大学新生专业学习导航
   数据层：学科门类 / 专业 / 路径模板 / 示例关卡

   说明：这是纯静态项目，为了能直接双击 index.html 打开，
   数据放在 js 文件里而不是 json（file:// 下 fetch 会被拦截）。
   当前阶段只搭"框架"：路径结构是真的，具体课程的关卡内容
   除计算机专业的 C 语言入门外，都标为"建设中"。
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

/* ---------------- 2. 专业（id, 门类, 名称, 图标, 一句话方向） ----------------
   ready = 1 表示已有可运行的示例关卡（目前只有计算机专业） */
const MAJOR_ROWS = [
  ['philosophy',  '哲学',                     '💭', '读原著、练逻辑'],
  ['philosophy',  '逻辑学',                   '🧠', '形式推理与论证'],
  ['law',         '法学',                     '⚖️', '规则与案例'],
  ['law',         '知识产权',                 '📜', '创新与保护'],
  ['law',         '社会学',                   '🤝', '观察社会运行'],
  ['economics',   '经济学',                   '📈', '看懂市场与政策'],
  ['economics',   '金融学',                   '💰', '资金与风险'],
  ['economics',   '国际经济与贸易',           '🌍', '跨市场做生意'],
  ['economics',   '财政学',                   '🏦', '政府的钱怎么花'],
  ['education',   '教育学',                   '🎓', '教育规律与方法'],
  ['education',   '学前教育',                 '🧸', '幼儿发展与保教'],
  ['education',   '教育技术学',               '💡', '用技术改进教学'],
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
  ['engineering', '软件工程',                 '🧩', '把需求做成产品'],
  ['engineering', '电子信息工程',             '📡', '信号与电路'],
  ['engineering', '自动化',                   '🤖', '让机器自己动'],
  ['engineering', '机械设计制造及其自动化',   '⚙️', '设计并造出机构'],
  ['engineering', '土木工程',                 '🏗️', '把建筑稳稳立住'],
  ['engineering', '材料科学与工程',           '🧱', '结构决定性能'],
  ['agriculture', '农学',                     '🌾', '作物与生长'],
  ['agriculture', '园艺',                     '🍎', '果树、蔬菜与花卉'],
  ['agriculture', '动物医学',                 '🐾', '动物健康'],
  ['agriculture', '食品科学与工程',           '🍱', '安全与加工'],
  ['medicine',    '临床医学',                 '🩺', '看病与治病'],
  ['medicine',    '口腔医学',                 '🦷', '牙与口腔'],
  ['medicine',    '护理学',                   '💉', '照护与康复'],
  ['medicine',    '药学',                     '💊', '药物与作用'],
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

const MAJORS = MAJOR_ROWS.map(function (r) {
  return {
    id: r[0].toLowerCase() + '-' + r[1].replace(/[^\u4e00-\u9fa5A-Za-z0-9]/g, ''),
    cat: r[0],
    name: r[1],
    emoji: r[2],
    desc: r[3],
    ready: r[4] || 0
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

/* ---------------- 5. 示例内容：计算机专业 · C 语言入门（唯一有真题的模块） ---------------- */
const CS_INTRO_LEVELS = [
  {
    id: 'c-l1',
    name: '第 1 关 · 认识你的第一行代码',
    brief: 'C 程序从 main 函数开始执行。printf 负责把内容打印到屏幕上；变量是给数据起的名字，类型写在变量名前面。',
    questions: [
      {
        stem: '想让程序在屏幕上输出 Hello, C! —— 下面哪种写法是正确的？',
        options: ['printf("Hello, C!");', 'print("Hello, C!");', 'console.log("Hello, C!");', 'echo "Hello, C!";'],
        answer: 0,
        explain: 'C 语言用 printf 输出，字符串要放在双引号里，语句结尾要有分号。print 是 Python 的写法，console.log 是 JavaScript 的。'
      },
      {
        stem: '在 C 语言里，定义一个整数变量 age 并赋值为 18，写法正确的是？',
        options: ['int age = 18;', 'age = int 18;', 'var age = 18;', 'integer age := 18;'],
        answer: 0,
        explain: '格式是「类型 变量名 = 值;」。int 表示整数，写在变量名前面。var 是别的语言的写法。'
      },
      {
        stem: '执行下面两行代码后，a 的值是？\n\nint a = 3;\na = a + 1;',
        options: ['3', '4', '5', '程序报错'],
        answer: 1,
        explain: '先算等号右边的 a + 1（3 + 1 = 4），再把 4 赋值给 a，所以 a 变成 4。'
      }
    ]
  },
  {
    id: 'c-l2',
    name: '第 2 关 · 让程序学会判断',
    brief: 'if 让程序做选择：条件成立走一条路，不成立走另一条。注意单个 = 是赋值，两个 == 才是比较。',
    questions: [
      {
        stem: 'score 是已经定义好的变量。要判断「成绩及格（60 分及以上）」，哪个写法正确？',
        options: ['if (score >= 60)', 'if score >= 60', 'if (score => 60)', 'while (score >= 60)'],
        answer: 0,
        explain: 'if 的条件必须写在圆括号里；「大于等于」是 >=，=> 不是 C 语言里的运算符；while 是循环不是判断。'
      },
      {
        stem: '下面这段程序会输出什么？\n\nint a = 5, b = 8;\nif (a > b) printf("A");\nelse printf("B");',
        options: ['A', 'B', 'AB', '什么都不输出'],
        answer: 1,
        explain: '5 > 8 不成立，所以跳过 if 分支，执行 else 分支，输出 B。'
      },
      {
        stem: '下面哪个符号用来判断「两个数是否相等」？',
        options: ['=（单个等号）', '==（两个等号）', '>=', '!='],
        answer: 1,
        explain: '单个 = 是赋值（把右边放进左边），两个 == 才是比较是否相等；!= 表示「不等于」。'
      }
    ]
  },
  {
    id: 'c-l3',
    name: '第 3 关 · 重复的力量',
    brief: 'for 循环把同一段代码重复执行。要看清三件事：从哪开始、什么时候停、每次怎么变。',
    questions: [
      {
        stem: '下面这段程序会输出什么？\n\nfor (int i = 1; i <= 3; i++) printf("%d", i);',
        options: ['123', '012', '1234', '321'],
        answer: 0,
        explain: 'i 依次取 1、2、3 并打印；当 i 变成 4 时，4 <= 3 不成立，循环结束。'
      },
      {
        stem: '下面这个循环，循环体一共执行多少次？\n\nfor (int i = 0; i < 5; i++) { /* 循环体 */ }',
        options: ['4 次', '5 次', '6 次', '无限次'],
        answer: 1,
        explain: 'i 取 0、1、2、3、4 共 5 个值；当 i = 5 时 5 < 5 不成立，循环退出。'
      },
      {
        stem: '循环结束时，i 的值是多少？\n\nint i = 0;\nwhile (i < 3) { i++; }',
        options: ['0', '2', '3', '死循环'],
        answer: 2,
        explain: 'i 从 0 开始，每轮加 1：0 → 1 → 2 → 3。当 i = 3 时 3 < 3 不成立，循环退出，此时 i 就是 3。'
      }
    ]
  },
  {
    id: 'c-l4',
    name: '第 4 关 · 把一组数存起来',
    brief: '数组是连续存放的一排变量。C 语言的数组下标从 0 开始，所以长度为 5 的数组，最后一个元素是 nums[4]。',
    questions: [
      {
        stem: 'int nums[5]; 这行代码定义了一个数组，它最多能放几个整数？',
        options: ['4 个', '5 个', '6 个', '不确定'],
        answer: 1,
        explain: '方括号里的数字就是元素个数，int nums[5] 表示能放 5 个整数，下标范围是 0 ~ 4。'
      },
      {
        stem: 'C 语言里，数组的下标是从几开始的？',
        options: ['0', '1', '-1', '没有规定'],
        answer: 0,
        explain: '从 0 开始。所以第一个元素是 nums[0]，第二个是 nums[1]，以此类推。'
      },
      {
        stem: '下面这段程序会输出什么？\n\nint nums[3] = {10, 20, 30};\nprintf("%d", nums[1]);',
        options: ['10', '20', '30', '1'],
        answer: 1,
        explain: 'nums[0] 是 10，nums[1] 是 20，nums[2] 是 30，所以输出 20。'
      }
    ]
  }
];

/* 计算机专业的大一阶段，把「C 语言入门」换成有真题的模块 */
const CS_STAGE_OVERRIDE = {
  '大一 · 打地基': {
    modules: [
      { name: 'C 语言入门', levels: CS_INTRO_LEVELS },
      { name: '高等数学（上）', levels: null },
      { name: '大学计算机导论', levels: null }
    ]
  }
};

/* ---------------- 6. 组装：把专业 + 模板 → 完整路径 ---------------- */
function buildLevels(majorId, moduleIndex, realLevels) {
  var list = [];
  // 有真题的模块：真实关卡有几关就放几关
  if (realLevels) {
    for (var r = 0; r < realLevels.length; r++) {
      list.push({
        id: majorId + '-m' + moduleIndex + '-l' + r,
        name: realLevels[r].name,
        brief: realLevels[r].brief,
        questions: realLevels[r].questions,
        ready: true
      });
    }
    return list;
  }
  // 没有真题的模块：按模板生成 3 个占位关卡
  for (var i = 0; i < LEVEL_TEMPLATE.length; i++) {
    var t = LEVEL_TEMPLATE[i];
    list.push({
      id: majorId + '-m' + moduleIndex + '-l' + i,
      name: t.name,
      brief: t.tip,
      questions: null,
      ready: false
    });
  }
  return list;
}

function getPath(majorId) {
  var major = getMajor(majorId);
  if (!major) return null;
  var tpl = PATH_TEMPLATE[major.cat];
  var override = major.id === 'engineering-计算机科学与技术' ? CS_STAGE_OVERRIDE : {};
  var stages = [];
  var moduleIndex = 0;
  for (var i = 0; i < tpl.stages.length; i++) {
    var s = tpl.stages[i];
    var mods = (override[s.title] && override[s.title].modules) || s.modules.map(function (m) { return { name: m, levels: null }; });
    var stage = { title: s.title, goal: s.goal, modules: [] };
    for (var j = 0; j < mods.length; j++) {
      var m = mods[j];
      stage.modules.push({
        id: major.id + '-m' + moduleIndex,
        name: m.name,
        levels: buildLevels(major.id, moduleIndex, m.levels)
      });
      moduleIndex++;
    }
    stages.push(stage);
  }
  return { major: major, stages: stages };
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
