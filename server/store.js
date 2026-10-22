/* ==========================================================
   引路 · 数据层（后端版）
   与 js/data.js 保持同样的数据结构，额外提供：
   - 关卡详情剥离 answer/explain（前端不下发）
   - 判题端点（后端本地比对）
   - 计算机专业模块挂 csdiy.wiki 推荐课程
   ========================================================== */

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
    id: r[0] + '-' + r[1].replace(/[^\u4e00-\u9fa5A-Za-z0-9]/g, ''),
    cat: r[0],
    name: r[1],
    emoji: r[2],
    desc: r[3],
    ready: r[4] || 0
  };
});

const PATH_TEMPLATE = {
  philosophy: { stages: [
    { title: '大一 · 入门与阅读', goal: '习惯读原著，别只背二手结论', modules: ['哲学导论', '逻辑学导论', '哲学原著导读'] },
    { title: '大二 · 分领域打底', goal: '中哲、西哲、伦理各铺一条线', modules: ['中国哲学史', '西方哲学史', '伦理学基础'] },
    { title: '大三 · 专题深入', goal: '挑一个方向读到能提出问题', modules: ['马克思主义哲学', '美学概论', '哲学文献研读'] },
    { title: '大四 · 输出与出口', goal: '把读过的变成一个能讲的问题', modules: ['毕业论文写作', '学术讲座与论文', '考研/求职准备'] }] },
  economics: { stages: [
    { title: '大一 · 数学与常识', goal: '数学类课程决定你后面能不能学下去', modules: ['高等数学', '微观经济学', '政治经济学'] },
    { title: '大二 · 专业基础', goal: '宏观、统计、会计三件套', modules: ['宏观经济学', '统计学', '会计学原理'] },
    { title: '大三 · 方向课', goal: '金融/国贸/财政，选一条走深', modules: ['计量经济学', '货币金融学', '专业方向课'] },
    { title: '大四 · 出口', goal: '实习、数据能力、考研择校', modules: ['数据分析与软件', '毕业论文/实习', '考研/求职准备'] }] },
  law: { stages: [
    { title: '大一 · 法理与体系', goal: '法理学+宪法，先建体系直觉', modules: ['法理学', '宪法学', '中国法制史'] },
    { title: '大二 · 部门法', goal: '民法刑法行政法是核心', modules: ['民法总论', '刑法总论', '行政法与行政诉讼法'] },
    { title: '大三 · 实务与案例', goal: '案例研读、法律检索、法考基础', modules: ['民法分论', '诉讼法', '法律职业伦理与案例研习'] },
    { title: '大四 · 法考与出口', goal: '法考/考研/实习，三选一提前定', modules: ['法考系统复习', '法律文书与实习', '考研/求职准备'] }] },
  education: { stages: [
    { title: '大一 · 教育学的眼睛', goal: '理解"教育是什么"而不是背定义', modules: ['教育学原理', '心理学基础', '教育社会学'] },
    { title: '大二 · 学习与发展', goal: '从心理学视角看学生', modules: ['发展心理学', '学习心理学', '课程论'] },
    { title: '大三 · 教学能力', goal: '会设计课、会上课、会评价', modules: ['教学论', '教育研究方法', '教学技能训练'] },
    { title: '大四 · 实践与出口', goal: '教育实习是重头戏', modules: ['教育实习', '毕业论文', '考编/考研准备'] }] },
  literature: { stages: [
    { title: '大一 · 语言与文本', goal: '现代汉语+古代文学，练基本功', modules: ['现代汉语', '中国古代文学（上）', '文学概论'] },
    { title: '大二 · 文学史线', goal: '古代到现代，把线串起来', modules: ['中国古代文学（下）', '中国现当代文学', '外国文学'] },
    { title: '大三 · 方向与写作', goal: '写得出东西，讲得清观点', modules: ['语言学概论', '专业方向课', '学术写作'] },
    { title: '大四 · 出口', goal: '论文、实习、考公考编或考研', modules: ['毕业论文', '实习实践', '考研/求职准备'] }] },
  history: { stages: [
    { title: '大一 · 通史框架', goal: '先有一张时间地图', modules: ['中国古代史（上）', '世界古代史', '史学概论'] },
    { title: '大二 · 断代与国别', goal: '选一个断代读深一点', modules: ['中国古代史（下）', '中国近现代史', '世界近现代史'] },
    { title: '大三 · 史料与专题', goal: '史料学、史学史、专题研究', modules: ['史料学', '史学史', '专题史'] },
    { title: '大四 · 出口', goal: '写一篇站得住的论文', modules: ['毕业论文', '田野/档案馆实习', '考研/求职准备'] }] },
  science: { stages: [
    { title: '大一 · 数理地基', goal: '高数、线代、专业导论，地基不能塌', modules: ['高等数学（上）', '线性代数', '专业导论'] },
    { title: '大二 · 专业基础', goal: '四大力学 / 有机无机 / 生化的分水岭', modules: ['高等数学（下）', '专业基础课 Ⅰ', '物理/化学/生物实验'] },
    { title: '大三 · 专业核心', goal: '核心课 + 实验设计 + 建模', modules: ['专业核心课 Ⅰ', '专业核心课 Ⅱ', '实验设计与数据处理'] },
    { title: '大四 · 科研出口', goal: '进组做一段科研，比什么都值', modules: ['科研训练/进实验室', '毕业论文', '保研/考研准备'] }] },
  engineering: { stages: [
    { title: '大一 · 打地基', goal: '数学、物理、工程入门课，别让基础拖后腿', modules: ['高等数学（上）', '大学物理', '工程导论'] },
    { title: '大二 · 专业基础', goal: '专业基础课+上机实验，动手不能只看书', modules: ['专业基础课 Ⅰ', '专业基础课 Ⅱ', '实验/上机课'] },
    { title: '大三 · 核心专业课', goal: '啃下最难的核心课，找一个想深挖的方向', modules: ['专业核心课 Ⅰ', '专业核心课 Ⅱ', '课程设计/项目'] },
    { title: '大四 · 出口', goal: '实习、毕设、考研或就业，提前半年定', modules: ['实习实践', '毕业设计', '考研/求职准备'] }] },
  agriculture: { stages: [
    { title: '大一 · 数理化生', goal: '农学不是"种地"，先补齐理科底子', modules: ['高等数学', '无机及分析化学', '植物学/动物学基础'] },
    { title: '大二 · 专业基础', goal: '生物化学、生理学是核心门槛', modules: ['生物化学', '植物生理学/动物生理学', '专业实验课'] },
    { title: '大三 · 核心与田间', goal: '栽培/育种/病理，配田间实习', modules: ['作物栽培学/兽医病理学', '遗传育种学', '田间/临床实习'] },
    { title: '大四 · 出口', goal: '科研训练、毕设、考公考编或考研', modules: ['科研训练', '毕业论文', '考研/求职准备'] }] },
  medicine: { stages: [
    { title: '大一 · 基础医学', goal: '解剖、组胚、生理——记忆量最大的阶段', modules: ['系统解剖学', '组织学与胚胎学', '医用化学'] },
    { title: '大二 · 病理与药理', goal: '理解"病是怎么发生的"', modules: ['生理学', '生物化学', '病理学'] },
    { title: '大三 · 临床课程', goal: '内外妇儿，配临床见习', modules: ['药理学', '诊断学', '内科学/外科学'] },
    { title: '大四·大五 · 临床与出口', goal: '临床实习+执业医师考试', modules: ['临床实习', '执业医师考试复习', '考研/规培准备'] }] },
  management: { stages: [
    { title: '大一 · 数理与商科常识', goal: '高数、经济学、管理学三件套', modules: ['高等数学', '管理学原理', '微观经济学'] },
    { title: '大二 · 职能模块', goal: '会计、营销、组织行为各摸一遍', modules: ['会计学', '市场营销学', '组织行为学'] },
    { title: '大三 · 工具与方向', goal: '数据分析、财务、运营选一条深走', modules: ['统计学/数据分析', '专业方向课', '商业案例分析'] },
    { title: '大四 · 出口', goal: '实习最重要，其次考研/考公', modules: ['企业实习', '毕业论文', '考研/求职准备'] }] },
  art: { stages: [
    { title: '大一 · 基本功', goal: '手头功夫和审美同时练', modules: ['造型基础/乐理基础', '设计概论/艺术概论', '软件/技法基础'] },
    { title: '大二 · 专业基础', goal: '把技法练到能稳定出作品', modules: ['专业基础技法 Ⅰ', '专业基础技法 Ⅱ', '作品临摹与分析'] },
    { title: '大三 · 创作与项目', goal: '开始有自己的作品集', modules: ['专业创作 Ⅰ', '专业创作 Ⅱ', '项目/展演实践'] },
    { title: '大四 · 作品集与出口', goal: '毕业设计就是你的作品集核心', modules: ['毕业创作/毕业设计', '作品集整理', '实习/考研准备'] }] },
  inter: { stages: [
    { title: '大一 · 数理与编程', goal: '数学+编程是交叉学科的双腿', modules: ['高等数学', '线性代数与概率论', '程序设计基础'] },
    { title: '大二 · 交叉基础', goal: '统计、算法、领域基础课', modules: ['概率统计', '数据结构与算法', '领域基础课'] },
    { title: '大三 · 核心与方法', goal: '模型、实验、工程落地', modules: ['机器学习/核心方法课', '实验与项目实践', '方向选修'] },
    { title: '大四 · 科研与出口', goal: '进组、比赛、实习三选一', modules: ['科研训练/竞赛', '毕业设计', '保研/考研/求职'] }] }
};

/* ---------- 计算机专业 C 语言示例关卡（唯一有真题的模块）
   覆盖 runoob C 教程 7 大主题：基础 / 流程控制 / 循环 / 数组 / 函数 / 指针 / 结构体共用体文件读写
   参考：https://www.runoob.com/cprogramming/c-tutorial.html  ---------- */

const CS_INTRO_LEVELS = [
  {
    id: 'c-l1',
    name: '第 1 关 · 认识你的第一行代码',
    brief: 'C 程序从 main 函数开始执行。变量 = 类型 + 名字 + 初值；运算符 + - * / % 做计算；scanf 读入、printf 输出。分号是语句结尾。',
    questions: [
      { stem: '想让程序在屏幕上输出 Hello, C! —— 下面哪种写法是正确的？', options: ['printf("Hello, C!");', 'print("Hello, C!");', 'console.log("Hello, C!");', 'echo "Hello, C!";'], answer: 0, explain: 'C 语言用 printf 输出，字符串放双引号，语句结尾有分号。print 是 Python 的，console.log 是 JS 的，echo 是 shell 的。' },
      { stem: '定义一个整数变量 age 并赋值 18，正确写法是？', options: ['int age = 18;', 'age = int 18;', 'var age = 18;', 'integer age := 18;'], answer: 0, explain: '格式是「类型 变量名 = 值;」。int 是整数类型，写在变量名前面。' },
      { stem: '下面的运算结果是？\n\nint a = 10;\nprintf("%d", a % 3);', options: ['3', '1', '0', '程序报错'], answer: 1, explain: '% 是取余运算符：10 除以 3 商 3 余 1，所以 10 % 3 = 1。注意 % 只能用于整数。' }
    ]
  },
  {
    id: 'c-l2',
    name: '第 4 关 · 让程序学会判断',
    brief: 'if 条件成立走一条路、不成立走另一条；switch 根据整数表达式的值跳到对应 case；每个 case 记得加 break 才不会一路往下跑。',
    questions: [
      { stem: '判断「成绩及格（60 分及以上）」，哪个写法正确？', options: ['if (score >= 60)', 'if score >= 60', 'if (score => 60)', 'while (score >= 60)'], answer: 0, explain: 'if 的条件必须写在圆括号里；「大于等于」是 >=；while 是循环不是判断。' },
      { stem: '下面这段 switch 会输出什么？\n\nchar g = \'B\';\nswitch (g) {\n  case \'A\': printf("优"); break;\n  case \'B\': printf("良");\n  case \'C\': printf("中"); break;\n  default: printf("差");\n}', options: ['良', '良中', '良中差', '编译报错'], answer: 1, explain: 'case B 后面没写 break，匹配到之后会「穿透」往下跑，依次执行 B 和 C，输出「良中」。这是 switch 最经典的坑。' },
      { stem: 'switch 后面的表达式可以是下面哪种类型？', options: ['字符串', '整数或字符', '浮点数', '任意类型'], answer: 1, explain: 'switch 表达式必须是整数类型（int / char / short / 枚举），case 标签必须是常量。浮点数和字符串都不能用。' }
    ]
  },
  {
    id: 'c-l3',
    name: '第 6 关 · 重复的力量',
    brief: '把同一段代码重复执行。for 写死次数、while 写到条件不成立为止、do-while 至少跑一遍才判断。break 跳出循环，continue 跳过本轮。',
    questions: [
      { stem: 'for (int i = 1; i <= 3; i++) printf("%d", i); 会输出什么？', options: ['123', '012', '1234', '321'], answer: 0, explain: 'i 依次取 1、2、3 并打印；当 i 变成 4 时，4 <= 3 不成立，循环结束。' },
      { stem: '下面这个循环，循环体一共执行多少次？\n\nfor (int i = 0; i < 5; i++) { /* 循环体 */ }', options: ['4 次', '5 次', '6 次', '无限次'], answer: 1, explain: 'i 取 0、1、2、3、4 共 5 个值；当 i = 5 时 5 < 5 不成立，循环退出。' },
      { stem: '循环结束时 i 的值是多少？\n\nint i = 0;\nwhile (i < 3) { i++; }', options: ['0', '2', '3', '死循环'], answer: 2, explain: 'i 从 0 开始，每轮加 1：0 → 1 → 2 → 3。当 i = 3 时 3 < 3 不成立，循环退出，此时 i 就是 3。' }
    ]
  },
  {
    id: 'c-l4',
    name: '第 8 关 · 把一组数存起来',
    brief: '数组是连续存放的一排变量，下标从 0 开始。二维数组是"数组的数组"。C 没有字符串类型，字符串就是以 \\0 结尾的字符数组。C 不检查越界，自己看好下标。',
    questions: [
      { stem: 'int nums[5]; 这个数组最多能放几个整数？合法下标是？', options: ['4 个，0~3', '5 个，0~4', '5 个，1~5', '6 个，0~5'], answer: 1, explain: '方括号里的数字就是元素个数，下标从 0 开始。int nums[5] 有 5 个元素，下标 0 ~ 4。' },
      { stem: '定义一个 3 行 4 列的整数矩阵，正确写法是？', options: ['int m[3][4];', 'int m[4][3];', 'int m[12];', 'int m = matrix(3,4);'], answer: 0, explain: '二维数组声明是 int 数组名[行数][列数]。int m[3][4] 表示 3 行 4 列共 12 个整数。' },
      { stem: 'char s[] = "hello"; printf("%d", strlen(s)); 输出多少？（已知 string.h 已包含）', options: ['4', '5', '6', '不确定'], answer: 1, explain: '"hello" 实际占 6 个字节（h e l l o \\0），但 strlen 遇到 \\0 就停，返回的是不含 \\0 的长度 5。' }
    ]
  },
  {
    id: 'c-l5',
    name: '第 11 关 · 把代码块打包成函数',
    brief: '函数 = 返回类型 + 函数名 + 参数。调用者传实参给形参；默认是传值（函数内改形参不影响实参）。函数可以自己调自己——这就是递归。',
    questions: [
      { stem: '写一个函数返回两个整数中较大的那个，正确的函数头是？', options: ['int max(int a, int b)', 'max(int a, int b)', 'void max(int a, int b)', 'int max(a, b)'], answer: 0, explain: '函数头格式是「返回类型 函数名(参数类型 参数名, ...)」。max 要返回 int，参数也要写清楚类型。' },
      { stem: '执行完下面代码后 main 里的 a 和 b 分别是？\n\nvoid swap(int x, int y) { int t = x; x = y; y = t; }\nint main() {\n  int a = 3, b = 5;\n  swap(a, b);\n}', options: ['a=3, b=5（没变）', 'a=5, b=3（交换了）', 'a=3, b=3', '程序报错'], answer: 0, explain: 'C 默认传值调用：swap 的形参 x、y 拿到的是 a、b 的拷贝，函数内交换的是拷贝，main 里的 a、b 不受影响。要交换实参得传指针。' },
      { stem: '递归算阶乘的基准条件（n == 0 时返回什么）才不会无限递归？\n\nint fact(int n) {\n  if (n == 0) return ???;\n  return n * fact(n - 1);\n}', options: ['0', '1', 'n', '-1'], answer: 1, explain: '数学上 0! = 1，基准条件返回 1 才能让递归正确收敛；返回 0 会让所有结果都是 0，不写基准条件会死递归直到栈溢出。' }
    ]
  },
  {
    id: 'c-l6',
    name: '第 13 关 · 地址与指针',
    brief: '每个变量都有地址，& 取地址、* 解引用。指针变量存的是地址。数组名在表达式里常退化成首元素的地址，所以指针和数组关系非常近。',
    questions: [
      { stem: 'int a = 10; int *p = &a; printf("%d", *p); 输出什么？', options: ['10', 'a', '0x...（一个地址）', '程序报错'], answer: 0, explain: 'p 存的是 a 的地址，*p 是「p 指向的那个变量」也就是 a 本身，所以输出 10。注意 %d 对应整数，打印地址要用 %p。' },
      { stem: 'int a[3] = {1, 2, 3}; int *p = a; p++; printf("%d", *p); 输出什么？', options: ['1', '2', '3', '地址值'], answer: 1, explain: '数组名 a 就是首元素地址，p 指向 a[0]。p++ 让指针往后移动一个 int 的位置，所以 *p 就是 a[1] = 2。' },
      { stem: '关于 NULL 指针，下面说法正确的是？', options: ['可以安全解引用', '表示指针不指向任何有效内存位置', '等于 1', '所有指针初始值都是 NULL'], answer: 1, explain: 'NULL 是标准库里定义为 0 的常量，表示"空指针"。访问 NULL 指向的内存会导致程序崩溃（段错误）。' }
    ]
  },
  {
    id: 'c-l7',
    name: '第 14 关 · 打包数据与读写文件',
    brief: 'struct 把不同类型的数据打包成一个新类型，用 . 访问成员；union 所有成员共用同一块内存；fopen / fclose / fread / fwrite 做文件 I/O。',
    questions: [
      { stem: '定义一个表示学生的结构体（名字、年龄、平均分），下面哪个是合法的？', options: ['struct Student { char name[20]; int age; double score; };', 'struct Student { string name; int age; double score; };', 'Student { char name[20]; int age; double score; }', 'struct Student: { char name[20]; int age; double score; };'], answer: 0, explain: 'struct 后面跟标签名 { 成员列表 }; 结尾必须有分号。string 不是 C 内置类型（得用 char 数组），成员之间没有逗号分隔。' },
      { stem: '关于 union（共用体），正确的说法是？', options: ['每个成员独占一块独立内存', '所有成员共用同一块内存，同一时刻只有一个成员有意义', '只能有两个成员', '和 struct 完全一样'], answer: 1, explain: 'union 的所有成员共用同一块起始地址的内存，大小取最大成员的大小。写了一个成员之后，其他成员的值就变成未定义的了。' },
      { stem: '打开文件并以只读方式读取，正确的调用是？', options: ['fopen("data.txt", "r")', 'open("data.txt")', 'read("data.txt")', 'fopen("data.txt", "w")'], answer: 0, explain: 'fopen 第一个参数是文件名，第二个是模式字符串："r" 只读、"w" 写（会清空文件）、"a" 追加。返回 NULL 表示打开失败。' }
    ]
  },

  /* ---------- 第 8 关 · 输入输出与格式化 ---------- */
  {
    id: 'c-l8',
    name: '第 3 关 · 和程序对话：输入输出',
    brief: 'printf 负责输出，scanf 负责读入。scanf 的变量参数前要加 &（取地址）；格式占位符要和变量类型一一对应；%.2f 表示保留两位小数。',
    questions: [
      { stem: 'scanf("%d", &n); 里的 & 有什么作用？', options: ['把 n 的地址交给 scanf，让它能把值写回去', '表示取余运算', '只是固定写法，可以省略', '表示 n 是常量'], answer: 0, explain: 'scanf 需要知道「把读到的值存到哪里」，所以传的是变量地址。漏掉 & 是新手最常见的崩溃原因之一。' },
      { stem: 'printf("%.2f", 3.14159); 会输出什么？', options: ['3.14', '3.14159', '3.1', '3'], answer: 0, explain: '%.2f 表示按浮点数输出并保留 2 位小数，第三位会四舍五入，所以是 3.14。' },
      { stem: '要读入一个整数存进 int n，正确写法是？', options: ['scanf("%d", &n);', 'scanf("%d", n);', 'scanf("%f", &n);', 'scanf("%s", &n);'], answer: 0, explain: '整数用 %d，变量前要加 &。%f 对应 float，%s 对应字符串，类型不匹配会读错。' }
    ]
  },

  /* ---------- 第 9 关 · 运算符与表达式 ---------- */
  {
    id: 'c-l9',
    name: '第 2 关 · 运算符与表达式',
    brief: '算术运算符 + - * / %，其中 / 做整数除法会丢掉小数；% 只能用于整数。++ / -- 有前置后置之分，优先级决定先算谁。',
    questions: [
      { stem: 'int a = 5; printf("%d", a++); 输出什么？', options: ['5', '6', '4', '编译报错'], answer: 0, explain: 'a++ 是后置自增：先使用 a 当前的值 5 输出，然后 a 才变成 6。' },
      { stem: 'int a = 7, b = 2; 那么 a / b 和 a % b 分别是？', options: ['3 和 1', '3.5 和 1', '3 和 0', '2 和 3'], answer: 0, explain: '两个整数相除，结果仍是整数，小数部分被丢掉，所以 7 / 2 = 3；7 % 2 是余数 1。' },
      { stem: '表达式 2 + 3 * 4 的值是多少？', options: ['14', '20', '24', '9'], answer: 0, explain: '乘法优先级高于加法，先算 3 * 4 = 12，再加 2，结果是 14。' }
    ]
  },

  /* ---------- 第 10 关 · 分支逻辑实战 ---------- */
  {
    id: 'c-l10',
    name: '第 5 关 · 分支逻辑实战',
    brief: '多个条件要用 &&（并且）、||（或者）连起来；C 里不能写 90 <= score < 100。if (x = 5) 是赋值，不是比较。',
    questions: [
      { stem: '要判断 score 在 90 到 99 之间，正确写法是？', options: ['score >= 90 && score < 100', '90 <= score < 100', 'score >= 90 || score < 100', 'score => 90 && score =< 100'], answer: 0, explain: 'C 的关系运算符不能连写，必须拆成两个条件用 && 连接。|| 只要一边成立就为真，范围会失效。' },
      { stem: 'if (x = 5) { ... } 这段代码的问题是什么？', options: ['把比较写成了赋值，条件永远为真', '5 不能赋给 x', 'if 后面不能加括号', '没有问题'], answer: 0, explain: '= 是赋值，== 才是比较。x = 5 会把 5 赋给 x，表达式的值非零，条件永远成立。' },
      { stem: '逻辑或 a || b 中，如果 a 已经为真，会怎样？', options: ['不再计算 b（短路）', '仍然计算 b', '程序报错', '把 b 的值赋给 a'], answer: 0, explain: '|| 具有短路特性：左边已经能确定结果为真，右边就不会再执行。常用来避免不必要的计算或越界访问。' }
    ]
  },

  /* ---------- 第 11 关 · 循环嵌套与图形打印 ---------- */
  {
    id: 'c-l11',
    name: '第 7 关 · 循环嵌套与图案',
    brief: '外层循环控制行，内层循环控制每一行打印几个字符，这是打印图形的通用套路。break 只跳出当前这一层循环。',
    questions: [
      { stem: '外层循环执行 3 次、内层循环每次执行 4 次，循环体一共执行多少次？', options: ['7 次', '12 次', '3 次', '4 次'], answer: 1, explain: '嵌套循环的总次数是相乘：3 × 4 = 12 次。' },
      { stem: '在两层嵌套循环里执行 break，会跳出几层？', options: ['只跳出当前所在的那一层', '同时跳出两层', '跳出整个程序', '一层都不跳'], answer: 0, explain: 'break 只作用于它所在的那一层循环。要一次跳出多层，可以用标志变量或 goto。' },
      { stem: 'continue 的作用是？', options: ['跳过本轮剩下的语句，直接进入下一轮', '结束整个循环', '重新从第一轮开始', '跳出函数'], answer: 0, explain: 'continue 不结束循环，只是放弃本轮剩余部分，接着判断下一轮条件。' }
    ]
  },

  /* ---------- 第 12 关 · 数组统计 ---------- */
  {
    id: 'c-l12',
    name: '第 9 关 · 数组遍历与统计',
    brief: '数组下标从 0 开始，n 个元素的下标是 0 ~ n-1。求和先设 0，求最大值先把第一个元素当作最大值，再逐个比较。',
    questions: [
      { stem: 'int a[5] = {3, 1, 4}; 此时 a[3] 的值是多少？', options: ['0', '4', '随机值', '编译报错'], answer: 0, explain: '只初始化了前 3 个元素，剩下的元素会被自动初始化为 0。' },
      { stem: '遍历一个长度为 5 的数组，下面哪个循环条件正确？', options: ['for (int i = 0; i < 5; i++)', 'for (int i = 1; i <= 5; i++)', 'for (int i = 0; i <= 5; i++)', 'for (int i = 5; i > 0; i--)'], answer: 0, explain: '合法下标是 0 ~ 4，所以 i < 5。i <= 5 会访问 a[5]，越界。' },
      { stem: '把数组传给函数时，实际传递的是什么？', options: ['首元素的地址', '整个数组的拷贝', '数组的长度', '最后一个元素的值'], answer: 0, explain: '数组名在表达式中会退化成首元素地址，所以函数里通过指针访问原数组，修改会影响原数据。' }
    ]
  },

  /* ---------- 第 13 关 · 字符串处理 ---------- */
  {
    id: 'c-l13',
    name: '第 10 关 · 字符串处理',
    brief: 'C 没有字符串类型，字符串是以 \\0 结尾的字符数组。strlen 数到 \\0 为止，sizeof 数整个数组占的字节，两者可能不同。比较字符串用 strcmp。',
    questions: [
      { stem: 'char s[] = "hello"; 那么 sizeof(s) 和 strlen(s) 分别是？', options: ['6 和 5', '5 和 5', '6 和 6', '5 和 6'], answer: 0, explain: 'sizeof 包含结尾的 \\0，共 6 个字节；strlen 遇到 \\0 停止，不算 \\0，所以是 5。' },
      { stem: 'C 字符串的结束标志是哪个字符？', options: ['\\0', '\\n', '空格', 'EOF'], answer: 0, explain: '字符串以空字符 \\0 结尾，strlen、printf("%s") 等函数都靠它判断字符串到哪里结束。' },
      { stem: '要判断两个字符串内容是否相同，应该用？', options: ['strcmp(a, b) == 0', 'a == b', 'strlen(a) == strlen(b)', 'a = b'], answer: 0, explain: '数组名比较的是地址，a == b 判断的是不是同一个数组。strcmp 返回 0 才表示内容相同。' }
    ]
  },

  /* ---------- 第 14 关 · 递归与函数进阶 ---------- */
  {
    id: 'c-l14',
    name: '第 12 关 · 递归与函数进阶',
    brief: '递归就是函数自己调用自己：先写基准条件（什么时候停），再写向基准条件靠近的递推。每次调用都有自己独立的局部变量。',
    questions: [
      { stem: '写递归函数时，最不能少的是什么？', options: ['基准条件（递归出口）', '全局变量', '循环语句', 'printf 输出'], answer: 0, explain: '没有基准条件，递归会一直调用自己，直到栈溢出。' },
      { stem: 'fact(n) = n * fact(n - 1)，fact(0) = 1，那么 fact(4) 是多少？', options: ['24', '12', '4', '120'], answer: 0, explain: '4 × 3 × 2 × 1 = 24。' },
      { stem: '递归函数每一层的局部变量之间是什么关系？', options: ['各自独立，互不影响', '共用同一份', '只有最后一层有效', '会被自动清零'], answer: 0, explain: '每次函数调用都会在调用栈上新建一份栈帧，局部变量属于各自的那一层。' }
    ]
  },

  /* ---------- 第 15 关 · 综合挑战：结构体数组 ---------- */
  {
    id: 'c-l15',
    name: '第 15 关 · 综合挑战：成绩榜',
    brief: '把结构体和数组结合起来，就能存一组学生。遍历、比较、找最大值都是之前学过的套路，只是这次比较的是结构体里的成员。',
    questions: [
      { stem: 'struct Student list[3]; 表示什么？', options: ['3 个 Student 结构体组成的数组', '1 个有 3 个成员的结构体', '3 个指向结构体的指针', '非法写法'], answer: 0, explain: '和普通数组一样，方括号里是元素个数，每个元素都是一个完整的 Student。' },
      { stem: 'scanf("%s", s.name); 读入 "Tom Smith" 时，s.name 里会是什么？', options: ['"Tom"', '"Tom Smith"', '空字符串', '编译报错'], answer: 0, explain: '%s 遇到空格就停止，只会读入 Tom。要读整行可以用 fgets。' },
      { stem: '在数组里找最高分，max 应该先初始化成什么？', options: ['第一个元素的分数', '0', '-1', '100'], answer: 0, explain: '先把第一个元素当作当前最大，再和后面的逐个比较。初始化为 0 在全是负分时会出错。' }
    ]
  }
];

/* 南昌大学 · 计算机科学与技术专业（2024 版培养方案）
   课程依据：https://smcs.ncu.edu.cn/docs/2026-06/f595e775495648438ad046b9d9033c64.pdf
   阶段标题与工程门类模板一致，与 js/data.js 中的 CS_STAGE_OVERRIDE 保持同步。 */
const CS_STAGE_OVERRIDE = {
  '大一 · 打地基': {
    modules: [
      /* C 语言 15 关按学习顺序拆成 5 个模块，每关保留原 id（c-l1..c-l15）用于代码任务查找 */
      { name: 'C 语言基础入门', levels: [CS_INTRO_LEVELS[0], CS_INTRO_LEVELS[8], CS_INTRO_LEVELS[7]] },
      { name: '流程控制', levels: [CS_INTRO_LEVELS[1], CS_INTRO_LEVELS[9], CS_INTRO_LEVELS[2], CS_INTRO_LEVELS[10]] },
      { name: '数据存储', levels: [CS_INTRO_LEVELS[3], CS_INTRO_LEVELS[11], CS_INTRO_LEVELS[12]] },
      { name: '函数与指针', levels: [CS_INTRO_LEVELS[4], CS_INTRO_LEVELS[13], CS_INTRO_LEVELS[5]] },
      { name: '高级应用', levels: [CS_INTRO_LEVELS[6], CS_INTRO_LEVELS[14]] },
      { name: '计算机导论与伦理', levels: null },
      { name: '高等数学（上）', levels: null },
      { name: '高等数学（下）', levels: null },
      { name: '线性代数', levels: null },
      { name: '面向对象程序设计（Java）', levels: null }
    ]
  },
  '大二 · 专业基础': {
    modules: [
      { name: '数据结构', levels: null },
      { name: '离散数学', levels: null },
      { name: '数字逻辑', levels: null },
      { name: '计算机组织与结构', levels: null },
      { name: '概率论与数理统计', levels: null },
      { name: '数据库原理', levels: null },
      { name: '数值计算', levels: null }
    ]
  },
  '大三 · 核心专业课': {
    modules: [
      { name: '操作系统', levels: null },
      { name: '编译原理', levels: null },
      { name: '计算机网络', levels: null },
      { name: '软件工程', levels: null },
      { name: '算法分析与设计', levels: null },
      { name: '人工智能', levels: null }
    ]
  },
  '大四 · 出口': {
    modules: [
      { name: '毕业实习', levels: null },
      { name: '毕业设计', levels: null },
      { name: '工程实践', levels: null },
      { name: '计算机网络课程实践', levels: null }
    ]
  }
};

/* ---------- csdiy.wiki 推荐课程（挂在计算机专业模块） ---------- */

const CS_MODULE_RESOURCES = {
  'C 语言基础入门': [
    { name: 'Harvard CS50: This is CS50x', school: 'Harvard', url: 'https://csdiy.wiki/%E7%BC%96%E7%A8%8B%E5%85%A5%E9%97%A8/C/CS50/', desc: '风靡全球的计算机入门课，从 C 语言起步' }
  ],
  '流程控制': [
    { name: 'runoob C 语言教程 · 分支/循环', school: 'runoob', url: 'https://www.runoob.com/cprogramming/c-decision.html', desc: 'if / switch / for / while 集中讲解' }
  ],
  '数据存储': [
    { name: 'C 语言中文网 · 数组和字符串', school: 'c.biancheng.net', url: 'https://c.biancheng.net/c/array/', desc: '一维/二维数组、字符数组与字符串详解' }
  ],
  '函数与指针': [
    { name: 'GeeksforGeeks · Functions & Pointers in C', school: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/c-functions/', desc: '函数传值、递归、指针与数组的关系' }
  ],
  '高级应用': [
    { name: 'cppreference C · 结构体与文件 I/O', school: 'cppreference', url: 'https://zh.cppreference.com/w/c/language/struct', desc: 'struct/union 与 stdio 文件操作的权威说明' }
  ],
  '线性代数': [
    { name: 'MIT 18.06: Linear Algebra (Gilbert Strang)', school: 'MIT', url: 'https://csdiy.wiki/%E6%95%B0%E5%AD%A6%E5%9F%BA%E7%A1%80/MIT-18.06/', desc: 'Strang 老爷子的线代神课' }
  ],
  '概率论与数理统计': [
    { name: 'Harvard Stat 110: Probability', school: 'Harvard', url: 'https://csdiy.wiki/%E6%95%B0%E5%AD%A6%E5%9F%BA%E7%A1%80/Stat110/', desc: '概率论入门名课' }
  ],
  '离散数学': [
    { name: 'MIT 6.042J: Mathematics for Computer Science', school: 'MIT', url: 'https://csdiy.wiki/%E6%95%B0%E5%AD%A6%E5%9F%BA%E7%A1%80/6.042/', desc: '专为 CS 学生设计的数学课' }
  ],
  '数据结构': [
    { name: 'UCB CS61B: Data Structures and Algorithms', school: 'UC Berkeley', url: 'https://csdiy.wiki/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/CS61B/', desc: 'Java 主讲的数据结构课，项目驱动' },
    { name: 'MIT 6.006: Introduction to Algorithms', school: 'MIT', url: 'https://csdiy.wiki/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/6.006/', desc: '算法导论配套课程' }
  ],
  '计算机组织与结构': [
    { name: 'CMU 15-213: CSAPP', school: 'CMU', url: 'https://csdiy.wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%E5%9F%BA%E7%A1%80/CSAPP/', desc: '深入理解计算机系统，CS 必读经典' },
    { name: 'UCB CS61C: Great Ideas in Computer Architecture', school: 'UC Berkeley', url: 'https://csdiy.wiki/%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84/CS61C/', desc: '体系结构核心思想' }
  ],
  '操作系统': [
    { name: 'MIT 6.1810 (6.S081): Operating System Engineering', school: 'MIT', url: 'https://csdiy.wiki/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/MIT6.S081/', desc: '基于 xv6 的操作系统工程课' },
    { name: 'NJU OS: Operating System (蒋炎岩)', school: '南京大学', url: 'https://csdiy.wiki/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/NJU-OS/', desc: '蒋炎岩老师的中文 OS 课，B 站全程录像' }
  ],
  '计算机网络': [
    { name: 'UCB CS168: Introduction to the Internet', school: 'UC Berkeley', url: 'https://csdiy.wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/CS168/', desc: '互联网架构与协议' },
    { name: 'Stanford CS144: Computer Network', school: 'Stanford', url: 'https://csdiy.wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/CS144/', desc: '亲手实现一个 TCP' }
  ],
  '数据库原理': [
    { name: 'UCB CS186: Introduction to Database System', school: 'UC Berkeley', url: 'https://csdiy.wiki/%E6%95%B0%E6%8D%AE%E5%BA%93%E7%B3%BB%E7%BB%9F/CS186/', desc: '数据库系统导论' },
    { name: 'CMU 15-445: Database Systems', school: 'CMU', url: 'https://csdiy.wiki/%E6%95%B0%E6%8D%AE%E5%BA%93%E7%B3%BB%E7%BB%9F/15445/', desc: 'Andy Pavlo 的数据库系统，lab 硬核' }
  ],
  '编译原理': [
    { name: 'Stanford CS143: Compilers', school: 'Stanford', url: 'https://csdiy.wiki/%E7%BC%96%E8%AF%91%E5%8E%9F%E7%90%86/CS143/', desc: '编译器原理与实现' }
  ],
  '软件工程': [
    { name: 'UCB CS169: Software Engineering', school: 'UC Berkeley', url: 'https://csdiy.wiki/%E8%BD%AF%E4%BB%B6%E5%B7%A5%E7%A8%8B/CS169/', desc: '敏捷开发与 SaaS 项目实战' }
  ],
  '计算机导论与伦理': [
    { name: 'UCB CS61A: SICP (Python)', school: 'UC Berkeley', url: 'https://csdiy.wiki/%E7%BC%96%E7%A8%8B%E5%85%A5%E9%97%A8/Python/CS61A/', desc: 'SICP 的 Python 改编版，无数人的自学起点' },
    { name: 'MIT Missing Semester', school: 'MIT', url: 'https://csdiy.wiki/%E7%BC%96%E7%A8%8B%E5%85%A5%E9%97%A8/MIT-Missing-Semester/', desc: 'CSer 的效率工具集训' }
  ],
  '高等数学（上）': [
    { name: 'MIT 18.01: Single Variable Calculus', school: 'MIT', url: 'https://csdiy.wiki/%E6%95%B0%E5%AD%A6%E5%9F%BA%E7%A1%80/MIT-18.01/', desc: '单变量微积分，配合教材使用' }
  ],
  '高等数学（下）': [
    { name: 'MIT 18.02: Multivariable Calculus', school: 'MIT', url: 'https://csdiy.wiki/%E6%95%B0%E5%AD%A6%E5%9F%BA%E7%A1%80/MIT-18.02/', desc: '多变量微积分' }
  ],
  '面向对象程序设计（Java）': [
    { name: 'UCB CS61B: Data Structures and Algorithms', school: 'UC Berkeley', url: 'https://csdiy.wiki/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/CS61B/', desc: 'Java 主讲的数据结构课，项目驱动' }
  ],
  '数字逻辑': [
    { name: 'Nand2Tetris: From Nand to Tetris', school: 'Hebrew University', url: 'https://csdiy.wiki/%E7%A1%AC%E4%BB%B6%E4%B8%8E%E7%B3%BB%E7%BB%9F/Nand2Tetris/', desc: '从与非门搭出一台计算机，逻辑设计入门神课' }
  ],
  '数值计算': [
    { name: 'MIT 18.06: Linear Algebra (Gilbert Strang)', school: 'MIT', url: 'https://csdiy.wiki/%E6%95%B0%E5%AD%A6%E5%9F%BA%E7%A1%80/MIT-18.06/', desc: '线代基础，数值计算的前置' }
  ],
  '算法分析与设计': [
    { name: 'MIT 6.006: Introduction to Algorithms', school: 'MIT', url: 'https://csdiy.wiki/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/6.006/', desc: '算法导论配套课程' },
    { name: 'MIT 6.046J: Design and Analysis of Algorithms', school: 'MIT', url: 'https://csdiy.wiki/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/6.046/', desc: '进阶算法设计与分析' }
  ],
  '人工智能': [
    { name: 'Stanford CS229: Machine Learning', school: 'Stanford', url: 'https://csdiy.wiki/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/CS229/', desc: '理论扎实的机器学习课' },
    { name: 'GAMES101: 现代计算机图形学入门（闫令琪）', school: 'UCSB / 国内', url: 'https://csdiy.wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9B%BE%E5%BD%A2%E5%AD%A6/GAMES101/', desc: 'AI 与图形学交叉方向可参考' }
  ]
};

/* ---------- 构建工具函数 ---------- */

function buildLevels(majorId, moduleIndex, realLevels) {
  var list = [];
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
  var TEMPLATE = [
    { name: '第 1 关 · 认识概念', tip: '先弄懂"它是什么"' },
    { name: '第 2 关 · 基础题',   tip: '跟着例题做一遍' },
    { name: '第 3 关 · 综合题',   tip: '自己独立做出来' }
  ];
  for (var i = 0; i < TEMPLATE.length; i++) {
    var t = TEMPLATE[i];
    list.push({
      id: majorId + '-m' + moduleIndex + '-l' + i,
      name: t.name, brief: t.tip, questions: null, ready: false
    });
  }
  return list;
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

function getPath(majorId) {
  var major = getMajor(majorId);
  if (!major) return null;
  var tpl = PATH_TEMPLATE[major.cat];
  var override = major.id === 'engineering-计算机科学与技术' ? CS_STAGE_OVERRIDE : {};
  var stages = [];
  var moduleIndex = 0;
  for (var i = 0; i < tpl.stages.length; i++) {
    var s = tpl.stages[i];
    var mods = (override[s.title] && override[s.title].modules)
      ? override[s.title].modules.map(function (m) { return { name: m.name, levels: m.levels }; })
      : s.modules.map(function (m) { return { name: m, levels: null }; });
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

function stripAnswer(lv) {
  return {
    id: lv.id, name: lv.name, brief: lv.brief, ready: lv.ready,
    questions: (lv.questions || []).map(function (q) { return { stem: q.stem, options: q.options }; })
  };
}

/* ---------- 对外接口 ---------- */

module.exports = {
  getCategory, majorsOfCategory, getMajor, getPath, CS_MODULE_RESOURCES, stripAnswer
};
