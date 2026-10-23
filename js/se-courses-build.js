/* ==========================================================
   se-courses.js · 软件工程：12 门课（主干 8 / 出口 4）= 84 关
   ========================================================== */

(function () {
  var MAJOR = 'engineering-软件工程';
  var TITLES = stageTitlesOf('engineering');

  var COURSES = [
    { name: '程序设计基础', chapters: [
      { title: '变量与类型', brief: '数据的第一课。',
        q: [
          { stem: '整型与浮点型的主要区别是：', options: ['取值范围与精度', '字节数唯一', '是否有符号', '是否可运算'], answer: 0, explain: '精度。' },
          { stem: '变量作用域决定：', options: ['变量的可见范围与生存期', '大小', '类型', '初值'], answer: 0, explain: '作用域。' },
          { stem: '未初始化变量的值是：', options: ['不确定', '0', '随机但安全', '编译报错'], answer: 0, explain: '未定义。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'types', title: '类型', html: `<p>整型、浮点、字符、布尔；类型转换与溢出。</p>` },
          { id: 'scope', title: '作用域', html: `<p>局部、全局、静态；初始化与生命周期。</p>` }
        ], refs: [] } },
      { title: '控制结构', brief: '流程。',
        q: [
          { stem: 'for 与 while 的区别是：', options: ['循环控制方式不同', '是否可嵌套', '是否可跳出', '是否有条件'], answer: 0, explain: '结构。' },
          { stem: 'break 与 continue 的区别是：', options: ['跳出循环 vs 跳过本次', '相同', '都跳出', '都跳过'], answer: 0, explain: '语义。' },
          { stem: 'switch 语句的穿透（fallthrough）指：', options: ['没有 break 时继续执行下一分支', '语法错误', '跳出', '跳转'], answer: 0, explain: '穿透。' }
        ],
        doc: { lead: '这一章讲控制。', sections: [
          { id: 'branch', title: '分支', html: `<p>if/else、switch；嵌套与可读性。</p>` },
          { id: 'loop', title: '循环', html: `<p>for、while、do-while；break/continue；循环不变式。</p>` }
        ], refs: [] } },
      { title: '函数与递归', brief: '复用与自调用。',
        q: [
          { stem: '递归必须包含：', options: ['终止条件与递归步骤', '循环', '全局变量', '指针'], answer: 0, explain: '基准。' },
          { stem: '值传递与引用传递的区别是：', options: ['是否修改实参', '速度', '类型', '参数个数'], answer: 0, explain: '传递。' },
          { stem: '函数栈帧保存：', options: ['局部变量与返回地址', '全局变量', '堆', '文件'], answer: 0, explain: '栈帧。' }
        ],
        doc: { lead: '这一章讲函数。', sections: [
          { id: 'function', title: '函数', html: `<p>声明与定义、参数、返回值；作用域与生命周期。</p>` },
          { id: 'recursion', title: '递归', html: `<p>基准与递归步骤；栈溢出；尾递归。</p>` }
        ], refs: [] } },
      { title: '数组与字符串', brief: '批量数据。',
        q: [
          { stem: '数组下标越界的后果是：', options: ['未定义行为（可能崩溃或写坏内存）', '自动扩容', '报错唯一', '无害'], answer: 0, explain: '越界。' },
          { stem: '字符串在 C 中以什么结尾？', options: ['\\0', '\\n', '空格', '无'], answer: 0, explain: '空字符。' },
          { stem: '二维数组在内存中通常：', options: ['按行连续存储', '按列', '散列', '链式'], answer: 0, explain: '行优先。' }
        ],
        doc: { lead: '这一章讲数组。', sections: [
          { id: 'array', title: '数组', html: `<p>一维与多维；遍历、查找、排序；越界风险。</p>` },
          { id: 'string', title: '字符串', html: `<p>字符数组与指针；常用库函数；缓冲区安全。</p>` }
        ], refs: [] } },
      { title: '指针与内存', brief: '地址的世界。',
        q: [
          { stem: '指针变量存储的是：', options: ['地址', '值', '类型', '长度'], answer: 0, explain: '地址。' },
          { stem: 'malloc 分配的内存位于：', options: ['堆', '栈', '静态区', '代码区'], answer: 0, explain: '堆。' },
          { stem: '野指针是指：', options: ['指向已释放或未初始化内存的指针', '空指针', '常量指针', '函数指针'], answer: 0, explain: '野指针。' }
        ],
        doc: { lead: '这一章讲内存。', sections: [
          { id: 'pointer', title: '指针', html: `<p>取地址、解引用、指针运算；指针与数组。</p>` },
          { id: 'memory', title: '内存管理', html: `<p>栈与堆、malloc/free；内存泄漏与越界。</p>` }
        ], refs: [] } },
      { title: '结构体与文件', brief: '组织数据。',
        q: [
          { stem: '结构体与联合体的区别是：', options: ['成员是否共享内存', '大小', '是否有指针', '是否可嵌套'], answer: 0, explain: '共享。' },
          { stem: '文件读写完成后应：', options: ['关闭文件释放资源', '不用管', '删除', '重命名'], answer: 0, explain: '关闭。' },
          { stem: '文本模式与二进制模式的区别是：', options: ['是否做换行转换', '速度', '大小', '权限'], answer: 0, explain: '转换。' }
        ],
        doc: { lead: '这一章讲组织。', sections: [
          { id: 'struct', title: '结构体', html: `<p>定义、初始化、嵌套；结构体指针；对齐。</p>` },
          { id: 'file', title: '文件', html: `<p>fopen/fread/fwrite；文本与二进制；错误处理。</p>` }
        ], refs: [] } },
      { title: '调试与工程习惯', brief: '写好代码。',
        q: [
          { stem: '调试的第一步通常是：', options: ['复现问题', '改代码', '重装环境', '问别人'], answer: 0, explain: '复现。' },
          { stem: '断言（assert）的作用是：', options: ['检查不变量、快速暴露错误', '替代异常', '优化性能', '打印日志'], answer: 0, explain: '断言。' },
          { stem: '好代码的标准包括：', options: ['正确、可读、可维护、可测试', '短', '炫技', '无注释'], answer: 0, explain: '多维。' }
        ],
        doc: { lead: '这一章讲习惯。', sections: [
          { id: 'debug', title: '调试', html: `<p>复现、定位、最小化、修复、回归；断点与日志。</p>` },
          { id: 'style', title: '风格', html: `<p>命名、注释、函数长度；版本控制与提交规范。</p>` }
        ], refs: [] } },
      { title: '小项目实战', brief: '把知识合起来。',
        q: [
          { stem: '学生成绩管理系统最适合练：', options: ['结构体 + 数组 + 文件', '只有界面', '只有算法', '只有网络'], answer: 0, explain: '综合。' },
          { stem: '项目开始时最先确定的是：', options: ['需求与数据结构', '界面颜色', '框架', '部署'], answer: 0, explain: '需求。' },
          { stem: '模块化设计的好处是：', options: ['便于复用、测试与维护', '代码更长', '运行更快', '无需文档'], answer: 0, explain: '模块化。' }
        ],
        doc: { lead: '这一章讲实战。', sections: [
          { id: 'project', title: '项目', html: `<p>需求分析、数据结构设计、模块划分、测试。</p>` },
          { id: 'deliver', title: '交付', html: `<p>README、构建脚本、示例数据；代码评审。</p>` }
        ], refs: [] } }
    ] },
    { name: '数据结构', chapters: [
      { title: '线性表', brief: '顺序与链式。',
        q: [
          { stem: '顺序表与链表的区别是：', options: ['是否连续存储', '是否有序', '是否有头节点', '是否动态'], answer: 0, explain: '存储。' },
          { stem: '链表插入的时间复杂度（已知位置）是：', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'], answer: 0, explain: 'O(1)。' },
          { stem: '头结点的作用是：', options: ['统一插入删除操作', '存储长度', '加快查找', '节省空间'], answer: 0, explain: '统一。' }
        ],
        doc: { lead: '这一章讲线性表。', sections: [
          { id: 'array', title: '顺序表', html: `<p>随机访问、插入删除代价；动态扩容。</p>` },
          { id: 'linked', title: '链表', html: `<p>单链表、双链表、循环链表；插入删除与遍历。</p>` }
        ], refs: [] } },
      { title: '栈与队列', brief: '受限的线性表。',
        q: [
          { stem: '栈的特点是：', options: ['后进先出', '先进先出', '随机', '双端'], answer: 0, explain: 'LIFO。' },
          { stem: '循环队列解决：', options: ['假溢出', '真溢出', '内存泄漏', '排序'], answer: 0, explain: '循环。' },
          { stem: '栈的典型应用包括：', options: ['括号匹配、表达式求值、递归', '只有括号', '只有递归', '排序唯一'], answer: 0, explain: '多应用。' }
        ],
        doc: { lead: '这一章讲栈队列。', sections: [
          { id: 'stack', title: '栈', html: `<p>顺序栈与链栈；应用（括号、表达式、递归）。</p>` },
          { id: 'queue', title: '队列', html: `<p>循环队列、链队列；双端队列；BFS。</p>` }
        ], refs: [] } },
      { title: '树与二叉树', brief: '层次结构。',
        q: [
          { stem: '二叉树的中序遍历顺序是：', options: ['左—根—右', '根—左—右', '左—右—根', '右—根—左'], answer: 0, explain: '中序。' },
          { stem: '完全二叉树适合用：', options: ['数组存储', '链表', '图', '哈希'], answer: 0, explain: '顺序存储。' },
          { stem: '二叉搜索树的性质是：', options: ['左小右大', '左大右小', '无序', '平衡'], answer: 0, explain: 'BST。' }
        ],
        doc: { lead: '这一章讲树。', sections: [
          { id: 'binary', title: '二叉树', html: `<p>性质、遍历（前中后层）、线索化；重建。</p>` },
          { id: 'bst', title: 'BST 与堆', html: `<p>查找、插入、删除；堆与优先队列；平衡树初步。</p>` }
        ], refs: [] } },
      { title: '图', brief: '网络结构。',
        q: [
          { stem: '邻接矩阵适合：', options: ['稠密图', '稀疏图', '有向图唯一', '树'], answer: 0, explain: '稠密。' },
          { stem: 'Dijkstra 算法用于：', options: ['单源最短路径（非负权）', '最小生成树', '拓扑排序', '连通分量'], answer: 0, explain: '最短路。' },
          { stem: '拓扑排序适用于：', options: ['有向无环图', '任意图', '无向图', '树'], answer: 0, explain: 'DAG。' }
        ],
        doc: { lead: '这一章讲图。', sections: [
          { id: 'storage', title: '存储', html: `<p>邻接矩阵、邻接表；遍历（DFS/BFS）。</p>` },
          { id: 'algorithms', title: '算法', html: `<p>最短路、最小生成树、拓扑排序、关键路径。</p>` }
        ], refs: [] } },
      { title: '查找', brief: '找东西。',
        q: [
          { stem: '二分查找的前提是：', options: ['有序', '无序', '链式', '哈希'], answer: 0, explain: '有序。' },
          { stem: '哈希冲突的解决方法包括：', options: ['开放定址与链地址', '只有开放', '只有链地址', '排序'], answer: 0, explain: '两类。' },
          { stem: '平均查找长度衡量：', options: ['查找效率', '内存占用', '排序速度', '插入速度'], answer: 0, explain: 'ASL。' }
        ],
        doc: { lead: '这一章讲查找。', sections: [
          { id: 'search', title: '查找', html: `<p>顺序、二分、分块；ASL 分析。</p>` },
          { id: 'hash', title: '哈希', html: `<p>哈希函数、冲突处理、装填因子；性能。</p>` }
        ], refs: [] } },
      { title: '排序', brief: '排排队。',
        q: [
          { stem: '快速排序的平均复杂度是：', options: ['O(n log n)', 'O(n)', 'O(n²)', 'O(log n)'], answer: 0, explain: '平均。' },
          { stem: '稳定排序的例子是：', options: ['归并排序', '快速排序', '堆排序', '选择排序'], answer: 0, explain: '稳定。' },
          { stem: '堆排序的空间复杂度是：', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'], answer: 0, explain: '原地。' }
        ],
        doc: { lead: '这一章讲排序。', sections: [
          { id: 'compare', title: '比较排序', html: `<p>插入、冒泡、选择、归并、快排、堆排；稳定性与复杂度。</p>` },
          { id: 'linear', title: '线性排序', html: `<p>计数、桶、基数排序；适用条件。</p>` }
        ], refs: [] } },
      { title: '复杂度与算法思想', brief: '怎么分析。',
        q: [
          { stem: '大 O 表示：', options: ['渐进上界', '精确时间', '下界', '平均值'], answer: 0, explain: '上界。' },
          { stem: '分治法的步骤是：', options: ['分解、解决、合并', '贪心', '回溯', '动态规划'], answer: 0, explain: '分治。' },
          { stem: '动态规划与分治的区别是：', options: ['子问题是否重叠', '是否递归', '是否分块', '是否排序'], answer: 0, explain: '重叠子问题。' }
        ],
        doc: { lead: '这一章讲思想。', sections: [
          { id: 'complexity', title: '复杂度', html: `<p>时间与空间、渐进记号；常见量级。</p>` },
          { id: 'paradigms', title: '算法思想', html: `<p>分治、贪心、动态规划、回溯；适用场景。</p>` }
        ], refs: [] } },
      { title: '综合训练', brief: '刷题方法。',
        q: [
          { stem: '刷题的有效方式是：', options: ['按专题分类、总结模板', '随机刷', '只看答案', '只刷难题'], answer: 0, explain: '专题。' },
          { stem: '写代码前应先：', options: ['想清思路与复杂度', '直接敲', '找模板', '问人'], answer: 0, explain: '思路。' },
          { stem: '边界条件应：', options: ['专门测试（空、单元素、极值）', '忽略', '靠运气', '只测正常'], answer: 0, explain: '边界。' }
        ],
        doc: { lead: '这一章讲训练。', sections: [
          { id: 'topic', title: '专题', html: `<p>链表、树、图、DP、字符串；模板与变式。</p>` },
          { id: 'habit', title: '习惯', html: `<p>先想后写、手算样例、检查边界；复盘错题。</p>` }
        ], refs: [] } }
    ] },
    { name: '离散数学', chapters: [
      { title: '命题逻辑', brief: '真假推理。',
        q: [
          { stem: 'P→Q 为假的情形是：', options: ['P 真 Q 假', 'P 假 Q 真', '都真', '都假'], answer: 0, explain: '蕴含。' },
          { stem: '重言式是：', options: ['所有赋值下为真', '有时真', '全假', '不可判定'], answer: 0, explain: '永真。' },
          { stem: '范式的作用是：', options: ['标准化逻辑表达式', '简化计算', '排序', '证明'], answer: 0, explain: '范式。' }
        ],
        doc: { lead: '这一章讲命题逻辑。', sections: [
          { id: 'connectives', title: '连接词', html: `<p>真值表、等值式；范式（DNF/CNF）。</p>` },
          { id: 'proof', title: '推理', html: `<p>推理规则、归结原理；有效性判定。</p>` }
        ], refs: [] } },
      { title: '谓词逻辑', brief: '量词。',
        q: [
          { stem: '∀x(P(x)→Q(x)) 表示：', options: ['所有 P 都是 Q', '存在 P 是 Q', '没有 P', 'P 等于 Q'], answer: 0, explain: '全称。' },
          { stem: '量词否定的等值式是：', options: ['¬∀xP(x) ⇔ ∃x¬P(x)', '⇔ ∀x¬P(x)', '⇔ ¬∃xP(x)', '⇔ ∃xP(x)'], answer: 0, explain: '对偶。' },
          { stem: '自由变元与约束变元的区别是：', options: ['是否在量词辖域内', '大小写', '是否谓词', '是否常项'], answer: 0, explain: '辖域。' }
        ],
        doc: { lead: '这一章讲谓词。', sections: [
          { id: 'quantifiers', title: '量词', html: `<p>全称与存在、辖域、约束与自由；翻译。</p>` },
          { id: 'inference', title: '推理', html: `<p>全称/存在例化与 generalization；证明方法。</p>` }
        ], refs: [] } },
      { title: '集合与关系', brief: '结构基础。',
        q: [
          { stem: '等价关系的三性质是：', options: ['自反、对称、传递', '自反、反对称、传递', '对称、传递', '反对称、传递'], answer: 0, explain: '等价。' },
          { stem: '偏序关系的三性质是：', options: ['自反、反对称、传递', '自反、对称、传递', '对称、传递', '反对称、传递'], answer: 0, explain: '偏序。' },
          { stem: '函数的单射与满射区别是：', options: ['一对一 vs 覆盖值域', '是否有定义', '是否连续', '是否有限'], answer: 0, explain: '两类。' }
        ],
        doc: { lead: '这一章讲关系。', sections: [
          { id: 'sets', title: '集合', html: `<p>运算、幂集、笛卡尔积；容斥原理。</p>` },
          { id: 'relations', title: '关系', html: `<p>等价关系与划分、偏序与哈斯图；函数。</p>` }
        ], refs: [] } },
      { title: '图论', brief: '离散的结构。',
        q: [
          { stem: '欧拉回路的条件是：', options: ['所有顶点度数为偶且连通', '有奇点', '完全图', '二分图'], answer: 0, explain: '欧拉。' },
          { stem: '树的边数与顶点数的关系是：', options: ['m = n − 1', 'm = n', 'm = n + 1', 'm = 2n'], answer: 0, explain: '树。' },
          { stem: '平面图的欧拉公式是：', options: ['v − e + f = 2', 'v + e − f = 2', 'v − e − f = 2', 'v + e + f = 2'], answer: 0, explain: '欧拉公式。' }
        ],
        doc: { lead: '这一章讲图论。', sections: [
          { id: 'basic', title: '基本概念', html: `<p>度、路、连通、树、二分图；握手定理。</p>` },
          { id: 'special', title: '特殊图', html: `<p>欧拉图、哈密顿图、平面图、着色；四色定理。</p>` }
        ], refs: [] } },
      { title: '组合计数', brief: '数数。',
        q: [
          { stem: '排列与组合的区别是：', options: ['是否考虑顺序', '是否有限', '是否重复', '是否整数'], answer: 0, explain: '顺序。' },
          { stem: '鸽巢原理说明：', options: ['n+1 个物品放入 n 个盒子必有重叠', '一定有解', '无法计数', '无规律'], answer: 0, explain: '鸽巢。' },
          { stem: '二项式定理的系数是：', options: ['组合数', '排列数', '阶乘', '幂'], answer: 0, explain: '二项式。' }
        ],
        doc: { lead: '这一章讲计数。', sections: [
          { id: 'counting', title: '计数', html: `<p>加法与乘法原理、排列组合、容斥；递推。</p>` },
          { id: 'pigeon', title: '鸽巢与生成函数', html: `<p>鸽巢原理；生成函数初步。</p>` }
        ], refs: [] } },
      { title: '代数结构', brief: '运算的抽象。',
        q: [
          { stem: '群的四个要素是：', options: ['封闭、结合、单位元、逆元', '只有封闭', '只有单位元', '只有逆元'], answer: 0, explain: '定义。' },
          { stem: '环与域的区别是：', options: ['域中非零元可逆', '环有加法', '域无乘法', '环无单位元'], answer: 0, explain: '可逆。' },
          { stem: '同态基本定理说的是：', options: ['同态像同构于商结构', '同态即同构', '无关系', '只对群'], answer: 0, explain: '商。' }
        ],
        doc: { lead: '这一章讲代数。', sections: [
          { id: 'group', title: '群', html: `<p>半群、群、子群、陪集；拉格朗日定理。</p>` },
          { id: 'ring', title: '环与域', html: `<p>环、整环、域；同态与同构。</p>` }
        ], refs: [] } },
      { title: '数理逻辑初步', brief: '形式系统。',
        q: [
          { stem: '形式系统包括：', options: ['符号、公理、推理规则', '只有公理', '只有规则', '只有符号'], answer: 0, explain: '三部分。' },
          { stem: '可靠性与完备性分别指：', options: ['可证⇒真 vs 真⇒可证', '相同', '相反', '无关'], answer: 0, explain: '两个方向。' },
          { stem: '哥德尔不完备定理说明：', options: ['足够强的系统存在不可判定命题', '系统不完备唯一', '逻辑无效', '算术矛盾'], answer: 0, explain: '不完备。' }
        ],
        doc: { lead: '这一章讲逻辑。', sections: [
          { id: 'system', title: '形式系统', html: `<p>语法、语义；可靠性与完备性。</p>` },
          { id: 'limit', title: '界限', html: `<p>哥德尔不完备性；可判定性初步。</p>` }
        ], refs: [] } },
      { title: '应用与训练', brief: '用起来。',
        q: [
          { stem: '离散数学在计算机中的应用包括：', options: ['算法、数据库、编译、密码', '只有算法', '只有数据库', '无应用'], answer: 0, explain: '多领域。' },
          { stem: '证明题的关键是：', options: ['明确已知与目标、选择方法', '猜', '背', '跳过'], answer: 0, explain: '方法。' },
          { stem: '提高能力的有效方式是：', options: ['做题 + 总结反例', '只看书', '只背定义', '只做选择'], answer: 0, explain: '练习。' }
        ],
        doc: { lead: '这一章讲应用。', sections: [
          { id: 'application', title: '应用', html: `<p>关系数据库、编译原理、密码学、算法分析。</p>` },
          { id: 'practice', title: '训练', html: `<p>直接证明、反证、归纳；反例构造。</p>` }
        ], refs: [] } }
    ] },
    { name: '面向对象程序设计', chapters: [
      { title: '类与对象', brief: '封装。',
        q: [
          { stem: '类与对象的关系是：', options: ['类是模板、对象是实例', '相同', '对象是模板', '无关'], answer: 0, explain: '模板。' },
          { stem: '封装的目的是：', options: ['隐藏实现、暴露接口', '加快运行', '减少代码', '增加继承'], answer: 0, explain: '封装。' },
          { stem: '构造函数的职责是：', options: ['初始化对象', '销毁对象', '复制对象', '比较对象'], answer: 0, explain: '初始化。' }
        ],
        doc: { lead: '这一章讲封装。', sections: [
          { id: 'class', title: '类', html: `<p>成员变量与方法、访问控制、构造与析构。</p>` },
          { id: 'object', title: '对象', html: `<p>创建、引用、生命周期；this/self。</p>` }
        ], refs: [] } },
      { title: '继承与多态', brief: '复用与扩展。',
        q: [
          { stem: '重载与重写的区别是：', options: ['同签名不同实现 vs 子类覆盖', '相同', '都在子类', '都在父类'], answer: 0, explain: '两者。' },
          { stem: '多态的实现依赖：', options: ['动态绑定（虚函数/接口）', '静态类型', '构造函数', '析构函数'], answer: 0, explain: '动态绑定。' },
          { stem: '继承的滥用会导致：', options: ['强耦合、脆弱基类问题', '性能提升', '代码更少', '无问题'], answer: 0, explain: '耦合。' }
        ],
        doc: { lead: '这一章讲继承。', sections: [
          { id: 'inheritance', title: '继承', html: `<p>单继承与多继承、访问权限；组合优于继承。</p>` },
          { id: 'polymorphism', title: '多态', html: `<p>重载、重写、动态绑定；抽象类与接口。</p>` }
        ], refs: [] } },
      { title: '接口与抽象', brief: '契约。',
        q: [
          { stem: '抽象类与接口的区别是：', options: ['是否可有实现与状态', '是否可继承', '是否有方法', '是否公开'], answer: 0, explain: '实现。' },
          { stem: '面向接口编程的好处是：', options: ['解耦、易替换与测试', '运行更快', '代码更短', '无需实现'], answer: 0, explain: '解耦。' },
          { stem: '依赖倒置原则说的是：', options: ['依赖抽象而非具体实现', '依赖具体', '不依赖', '依赖全局'], answer: 0, explain: 'DIP。' }
        ],
        doc: { lead: '这一章讲抽象。', sections: [
          { id: 'interface', title: '接口', html: `<p>契约、多实现；默认方法与抽象类选择。</p>` },
          { id: 'solid', title: 'SOLID', html: `<p>单一职责、开闭、里氏替换、接口隔离、依赖倒置。</p>` }
        ], refs: [] } },
      { title: '异常与资源管理', brief: '稳妥地失败。',
        q: [
          { stem: '受检异常与非受检异常的区别是：', options: ['是否强制处理', '是否可抛出', '是否有信息', '是否继承'], answer: 0, explain: '强制。' },
          { stem: 'try-with-resources 的作用是：', options: ['自动关闭资源', '捕获所有异常', '忽略异常', '重试'], answer: 0, explain: '自动关闭。' },
          { stem: 'finally 块通常用于：', options: ['释放资源', '返回结果', '抛出异常', '循环'], answer: 0, explain: '清理。' }
        ],
        doc: { lead: '这一章讲异常。', sections: [
          { id: 'exception', title: '异常', html: `<p>分类、抛出与捕获；不要吞异常。</p>` },
          { id: 'resource', title: '资源', html: `<p>RAII、try-with-resources；内存与文件句柄。</p>` }
        ], refs: [] } },
      { title: '泛型与集合', brief: '类型安全。',
        q: [
          { stem: '泛型的主要好处是：', options: ['编译期类型检查、避免强制转换', '运行更快', '代码更短', '支持多线程'], answer: 0, explain: '类型安全。' },
          { stem: 'List 与 Set 的区别是：', options: ['是否允许重复且有序', '是否可变', '是否线程安全', '是否泛型'], answer: 0, explain: '重复。' },
          { stem: 'HashMap 与 TreeMap 的区别是：', options: ['哈希 vs 红黑树、是否有序', '速度', '线程安全', '容量'], answer: 0, explain: '结构。' }
        ],
        doc: { lead: '这一章讲集合。', sections: [
          { id: 'generic', title: '泛型', html: `<p>类型参数、通配符、类型擦除。</p>` },
          { id: 'collections', title: '集合', html: `<p>List/Set/Map；实现选择与复杂度。</p>` }
        ], refs: [] } },
      { title: '设计模式', brief: '经验复用。',
        q: [
          { stem: '单例模式的目的是：', options: ['保证全局唯一实例', '加速', '解耦', '继承'], answer: 0, explain: '唯一。' },
          { stem: '工厂模式解决：', options: ['对象创建的解耦', '性能', '排序', '并发'], answer: 0, explain: '创建。' },
          { stem: '观察者模式用于：', options: ['一对多通知（事件）', '缓存', '排序', '加密'], answer: 0, explain: '事件。' }
        ],
        doc: { lead: '这一章讲模式。', sections: [
          { id: 'creational', title: '创建型', html: `<p>单例、工厂、建造者、原型。</p>` },
          { id: 'behavioral', title: '结构型与行为型', html: `<p>适配器、装饰器、代理；观察者、策略、模板方法。</p>` }
        ], refs: [] } },
      { title: '并发初步', brief: '同时做多件事。',
        q: [
          { stem: '线程安全问题的根源是：', options: ['共享可变状态', '线程太多', '内存太小', '代码太长'], answer: 0, explain: '共享状态。' },
          { stem: 'synchronized 的作用是：', options: ['互斥与可见性', '加速', '异步', '解耦'], answer: 0, explain: '同步。' },
          { stem: '死锁的四个必要条件是：', options: ['互斥、占有等待、不可剥夺、循环等待', '只有两个', '只有互斥', '无'], answer: 0, explain: '四条件。' }
        ],
        doc: { lead: '这一章讲并发。', sections: [
          { id: 'thread', title: '线程', html: `<p>创建、生命周期、上下文切换；线程池。</p>` },
          { id: 'safety', title: '安全', html: `<p>原子性、可见性、有序性；锁与无锁；死锁。</p>` }
        ], refs: [] } },
      { title: '项目实践', brief: '写一个小系统。',
        q: [
          { stem: '分层架构的典型分层是：', options: ['表现、业务、数据', '前端、后端', '输入、输出', '读、写'], answer: 0, explain: '三层。' },
          { stem: '单元测试的价值是：', options: ['快速反馈与回归保护', '替代集成测试', '提高性能', '生成文档'], answer: 0, explain: '回归。' },
          { stem: '代码评审关注：', options: ['正确性、可读性、设计与测试', '只有格式', '只有性能', '只有注释'], answer: 0, explain: '综合。' }
        ],
        doc: { lead: '这一章讲实践。', sections: [
          { id: 'architecture', title: '分层', html: `<p>表现层、业务层、数据层；依赖方向。</p>` },
          { id: 'quality', title: '质量', html: `<p>单元测试、评审、持续集成；提交规范。</p>` }
        ], refs: [] } }
    ] },
    { name: '计算机组成原理', chapters: [
      { title: '数据表示', brief: '比特的世界。',
        q: [
          { stem: '补码的作用是：', options: ['统一加减运算、表示负数', '压缩', '加密', '排序'], answer: 0, explain: '补码。' },
          { stem: '浮点数的精度取决于：', options: ['尾数位数', '阶码位数', '总位数', '符号位'], answer: 0, explain: '尾数。' },
          { stem: '大端与小端的区别是：', options: ['字节存放顺序', '位宽', '编码', '总线'], answer: 0, explain: '字节序。' }
        ],
        doc: { lead: '这一章讲表示。', sections: [
          { id: 'integer', title: '整数', html: `<p>原码、反码、补码；溢出与符号扩展。</p>` },
          { id: 'float', title: '浮点', html: `<p>IEEE 754、规格化；精度与舍入。</p>` }
        ], refs: [] } },
      { title: '运算器', brief: '算得快。',
        q: [
          { stem: '加法器的进位方式包括：', options: ['串行进位与并行进位', '只有串行', '只有并行', '无进位'], answer: 0, explain: '两类。' },
          { stem: 'ALU 的功能是：', options: ['算术与逻辑运算', '存储', '控制', '通信'], answer: 0, explain: '运算。' },
          { stem: '布思乘法的目的是：', options: ['高效处理带符号乘法', '除法', '加法', '取模'], answer: 0, explain: 'Booth。' }
        ],
        doc: { lead: '这一章讲运算。', sections: [
          { id: 'adder', title: '加法器', html: `<p>半加、全加、超前进位；延迟分析。</p>` },
          { id: 'muldiv', title: '乘除', html: `<p>移位相加、Booth；除法与恢复余数。</p>` }
        ], refs: [] } },
      { title: '存储系统', brief: '记忆的层次。',
        q: [
          { stem: 'Cache 的作用是：', options: ['缓解 CPU 与内存速度差', '扩大内存', '存文件', '散热'], answer: 0, explain: '缓存。' },
          { stem: 'Cache 命中率受什么影响？', options: ['局部性与替换策略', '容量唯一', '频率', '总线'], answer: 0, explain: '局部性。' },
          { stem: '虚拟内存的作用是：', options: ['地址空间抽象与隔离', '增加物理内存', '加快磁盘', '压缩'], answer: 0, explain: '抽象。' }
        ],
        doc: { lead: '这一章讲存储。', sections: [
          { id: 'hierarchy', title: '层次', html: `<p>寄存器、Cache、主存、辅存；局部性原理。</p>` },
          { id: 'cache', title: 'Cache', html: `<p>映射方式、替换算法、写策略；命中率与平均访问时间。</p>` }
        ], refs: [] } },
      { title: '指令系统', brief: '机器的语言。',
        q: [
          { stem: 'RISC 与 CISC 的区别是：', options: ['指令数量与复杂度不同', '字长', '频率', '总线'], answer: 0, explain: 'RISC。' },
          { stem: '寻址方式的作用是：', options: ['确定操作数地址', '传输数据', '控制', '存储'], answer: 0, explain: '寻址。' },
          { stem: '指令格式通常包括：', options: ['操作码与地址码', '只有操作码', '只有地址', '只有寄存器'], answer: 0, explain: '两部分。' }
        ],
        doc: { lead: '这一章讲指令。', sections: [
          { id: 'format', title: '格式', html: `<p>操作码、地址码；定长与变长。</p>` },
          { id: 'addressing', title: '寻址', html: `<p>立即、直接、间接、变址、相对；RISC/CISC。</p>` }
        ], refs: [] } },
      { title: 'CPU 与流水线', brief: '执行指令。',
        q: [
          { stem: '指令周期的基本步骤是：', options: ['取指、译码、执行、写回', '编译、链接、运行', '读、写、删', '输入、处理、输出'], answer: 0, explain: '周期。' },
          { stem: '流水线的加速受限于：', options: ['最慢一级与冒险', '时钟频率唯一', '指令数', '寄存器'], answer: 0, explain: '瓶颈。' },
          { stem: '数据冒险的解决方法包括：', options: ['转发、停顿、编译调度', '只有转发', '只有停顿', '无方法'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲 CPU。', sections: [
          { id: 'cycle', title: '指令周期', html: `<p>取指、译码、执行、访存、写回；控制器。</p>` },
          { id: 'pipeline', title: '流水线', html: `<p>五级流水；结构、数据、控制冒险；分支预测。</p>` }
        ], refs: [] } },
      { title: '总线与 IO', brief: '内外连接。',
        q: [
          { stem: '中断与轮询的区别是：', options: ['是否由设备主动通知', '速度', '成本', '接口'], answer: 0, explain: '中断。' },
          { stem: 'DMA 的作用是：', options: ['设备与内存直接传输，减少 CPU 参与', '加密', '压缩', '缓存'], answer: 0, explain: 'DMA。' },
          { stem: '总线的性能取决于：', options: ['带宽与协议开销', '只有频率', '只有位宽', '只有长度'], answer: 0, explain: '带宽。' }
        ],
        doc: { lead: '这一章讲 IO。', sections: [
          { id: 'bus', title: '总线', html: `<p>数据、地址、控制总线；同步与异步。</p>` },
          { id: 'io', title: 'IO', html: `<p>程序查询、中断、DMA；设备驱动与缓冲。</p>` }
        ], refs: [] } },
      { title: '并行与体系结构', brief: '更强算力。',
        q: [
          { stem: '多核与多线程的区别是：', options: ['物理核心 vs 逻辑线程', '相同', '线程更贵', '核心更慢'], answer: 0, explain: '物理/逻辑。' },
          { stem: 'SIMD 指：', options: ['单指令多数据', '多指令单数据', '多指令多数据', '单指令单数据'], answer: 0, explain: 'SIMD。' },
          { stem: '存储墙指的是：', options: ['内存带宽跟不上计算速度', '硬盘慢', '网络慢', '总线慢'], answer: 0, explain: '存储墙。' }
        ],
        doc: { lead: '这一章讲并行。', sections: [
          { id: 'parallel', title: '并行', html: `<p>指令级、线程级、数据级并行；SIMD/MIMD。</p>` },
          { id: 'architecture', title: '体系', html: `<p>多核、GPU、加速器；存储墙与能效。</p>` }
        ], refs: [] } },
      { title: '实验与性能', brief: '量一量。',
        q: [
          { stem: 'CPI 指的是：', options: ['每条指令的平均时钟周期数', '每秒指令数', '时钟频率', '延迟'], answer: 0, explain: 'CPI。' },
          { stem: '程序执行时间等于：', options: ['指令数 × CPI × 时钟周期', '频率 × 指令数', 'CPI × 频率', '指令数 / 频率'], answer: 0, explain: '公式。' },
          { stem: '性能优化的关键是：', options: ['找到瓶颈（Amdahl 定律）', '全面优化', '换硬件', '加代码'], answer: 0, explain: 'Amdahl。' }
        ],
        doc: { lead: '这一章讲性能。', sections: [
          { id: 'metrics', title: '指标', html: `<p>CPI、IPC、MIPS、执行时间；基准测试。</p>` },
          { id: 'optimize', title: '优化', html: `<p>Amdahl 定律、局部性优化；profiling。</p>` }
        ], refs: [] } }
    ] },
    { name: '数据库原理', chapters: [
      { title: '关系模型', brief: '表的世界。',
        q: [
          { stem: '主键的作用是：', options: ['唯一标识元组', '加速所有查询', '加密', '备份'], answer: 0, explain: '唯一。' },
          { stem: '外键的作用是：', options: ['维护参照完整性', '加速', '加密', '排序'], answer: 0, explain: '参照。' },
          { stem: '关系代数的基本运算包括：', options: ['选择、投影、连接、并差', '只有选择', '只有投影', '只有连接'], answer: 0, explain: '基本运算。' }
        ],
        doc: { lead: '这一章讲模型。', sections: [
          { id: 'relation', title: '关系', html: `<p>元组、属性、键；完整性约束（实体、参照、用户定义）。</p>` },
          { id: 'algebra', title: '关系代数', html: `<p>选择、投影、笛卡尔积、连接、除；等价变换。</p>` }
        ], refs: [] } },
      { title: 'SQL', brief: '查询语言。',
        q: [
          { stem: 'WHERE 与 HAVING 的区别是：', options: ['分组前过滤 vs 分组后过滤', '相同', '都分组后', '都分组前'], answer: 0, explain: '时机。' },
          { stem: 'JOIN 的类型包括：', options: ['内、左、右、全外连接', '只有内', '只有左', '只有外'], answer: 0, explain: '多种。' },
          { stem: '子查询与连接的取舍取决于：', options: ['可读性与执行计划', '长度', '关键字', '数据库品牌'], answer: 0, explain: '执行计划。' }
        ],
        doc: { lead: '这一章讲 SQL。', sections: [
          { id: 'ddl', title: 'DDL/DML', html: `<p>建表、约束、增删改；事务控制。</p>` },
          { id: 'query', title: '查询', html: `<p>连接、聚合、分组、子查询、窗口函数；执行计划。</p>` }
        ], refs: [] } },
      { title: '规范化', brief: '减少冗余。',
        q: [
          { stem: '第一范式要求：', options: ['属性不可再分', '消除部分依赖', '消除传递依赖', '无冗余'], answer: 0, explain: '1NF。' },
          { stem: '第二范式消除：', options: ['非主属性对候选键的部分依赖', '传递依赖', '多值依赖', '所有冗余'], answer: 0, explain: '2NF。' },
          { stem: '第三范式消除：', options: ['非主属性对候选键的传递依赖', '部分依赖', '多值依赖', '连接依赖'], answer: 0, explain: '3NF。' }
        ],
        doc: { lead: '这一章讲范式。', sections: [
          { id: 'functional', title: '函数依赖', html: `<p>候选键、闭包、最小依赖集；Armstrong 公理。</p>` },
          { id: 'normal', title: '范式', html: `<p>1NF–3NF、BCNF、4NF；分解的无损与保持依赖。</p>` }
        ], refs: [] } },
      { title: '索引与存储', brief: '快起来。',
        q: [
          { stem: 'B+ 树索引适合：', options: ['范围查询与等值查询', '只有等值', '只有范围', '全文'], answer: 0, explain: 'B+ 树。' },
          { stem: '索引的代价是：', options: ['空间与写入开销', '查询变慢', '数据不一致', '无法回滚'], answer: 0, explain: '代价。' },
          { stem: '聚簇索引的特点是：', options: ['数据按索引顺序存储', '独立于数据', '只能一个', '不能范围查'], answer: 0, explain: '聚簇。' }
        ],
        doc: { lead: '这一章讲索引。', sections: [
          { id: 'index', title: '索引', html: `<p>B+ 树、哈希、位图；覆盖索引与最左前缀。</p>` },
          { id: 'storage', title: '存储', html: `<p>页、行格式、缓冲池；聚簇与二级索引。</p>` }
        ], refs: [] } },
      { title: '事务与并发', brief: '一致性地并发。',
        q: [
          { stem: 'ACID 中的隔离性指：', options: ['并发事务互不干扰', '不丢失', '满足约束', '提交持久'], answer: 0, explain: '隔离。' },
          { stem: '隔离级别从低到高是：', options: ['读未提交、读已提交、可重复读、串行化', '串行化最低', '只有两级', '无级别'], answer: 0, explain: '四级。' },
          { stem: '幻读的解决依赖：', options: ['间隙锁或串行化', '行锁唯一', '读已提交', '索引'], answer: 0, explain: '间隙锁。' }
        ],
        doc: { lead: '这一章讲事务。', sections: [
          { id: 'acid', title: 'ACID', html: `<p>原子、一致、隔离、持久；日志与恢复。</p>` },
          { id: 'concurrency', title: '并发', html: `<p>锁、MVCC、隔离级别；死锁与检测。</p>` }
        ], refs: [] } },
      { title: '数据库设计', brief: '从需求到表。',
        q: [
          { stem: 'E-R 图的作用是：', options: ['概念建模', '物理存储', '查询优化', '备份'], answer: 0, explain: '概念。' },
          { stem: 'E-R 转关系模式的规则是：', options: ['实体转表、联系按基数处理', '全部转表', '只转实体', '只转联系'], answer: 0, explain: '转换。' },
          { stem: '反规范化的目的是：', options: ['提升查询性能（牺牲部分冗余控制）', '减少冗余', '减少索引', '简化 SQL'], answer: 0, explain: '权衡。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'er', title: 'E-R 模型', html: `<p>实体、属性、联系、基数；弱实体。</p>` },
          { id: 'convert', title: '转换与权衡', html: `<p>模式转换、反规范化；数据字典。</p>` }
        ], refs: [] } },
      { title: '分布式与 NoSQL', brief: '更大规模。',
        q: [
          { stem: 'CAP 定理说明：', options: ['一致性、可用性、分区容忍不可兼得', '三者可兼得', '只有两个概念', '无限制'], answer: 0, explain: 'CAP。' },
          { stem: 'NoSQL 的类型包括：', options: ['键值、文档、列族、图', '只有键值', '只有文档', '只有图'], answer: 0, explain: '多种。' },
          { stem: '最终一致性指：', options: ['副本最终收敛', '强一致', '不保证一致', '无副本'], answer: 0, explain: '最终。' }
        ],
        doc: { lead: '这一章讲分布式。', sections: [
          { id: 'cap', title: 'CAP 与 BASE', html: `<p>一致性权衡；最终一致；分片与复制。</p>` },
          { id: 'nosql', title: 'NoSQL', html: `<p>键值、文档、列族、图数据库；选型。</p>` }
        ], refs: [] } },
      { title: '数据库实践', brief: '动手。',
        q: [
          { stem: '慢查询优化的第一步是：', options: ['看执行计划', '加索引', '换数据库', '加机器'], answer: 0, explain: '执行计划。' },
          { stem: '备份恢复策略应考虑：', options: ['RPO 与 RTO', '只有成本', '只有速度', '只有容量'], answer: 0, explain: 'RPO/RTO。' },
          { stem: '数据库安全的基本措施包括：', options: ['最小权限、审计、加密', '只有密码', '只有防火墙', '只有备份'], answer: 0, explain: '多层。' }
        ],
        doc: { lead: '这一章讲实践。', sections: [
          { id: 'tuning', title: '调优', html: `<p>执行计划、索引设计、SQL 改写；慢日志。</p>` },
          { id: 'ops', title: '运维', html: `<p>备份恢复、主从复制、监控；权限与审计。</p>` }
        ], refs: [] } }
    ] },
    { name: '软件工程导论', chapters: [
      { title: '软件工程概述', brief: '工程化地做软件。',
        q: [
          { stem: '软件危机的表现不包括：', options: ['进度超期', '成本超支', '质量低下', '硬件降价'], answer: 3, explain: '非危机。' },
          { stem: '软件生命周期包括：', options: ['需求、设计、实现、测试、维护', '只有开发', '只有测试', '只有维护'], answer: 0, explain: '全周期。' },
          { stem: '软件工程的目标是：', options: ['按时、按质、按预算交付', '写更多代码', '用最新技术', '减少文档'], answer: 0, explain: '目标。' }
        ],
        doc: { lead: '这一章讲概述。', sections: [
          { id: 'crisis', title: '软件危机', html: `<p>进度、成本、质量、维护问题；复杂度本质。</p>` },
          { id: 'lifecycle', title: '生命周期', html: `<p>需求、设计、实现、测试、部署、维护。</p>` }
        ], refs: [] } },
      { title: '过程模型', brief: '怎么组织开发。',
        q: [
          { stem: '瀑布模型的主要问题是：', options: ['不适应需求变更', '太快', '成本低', '无文档'], answer: 0, explain: '刚性。' },
          { stem: '敏捷开发的核心是：', options: ['迭代、反馈、拥抱变化', '文档齐全', '一次交付', '严格计划'], answer: 0, explain: '敏捷。' },
          { stem: 'Scrum 的三个角色是：', options: ['产品负责人、Scrum Master、开发团队', '经理、员工、客户', '设计、开发、测试', '前端、后端、运维'], answer: 0, explain: '三角色。' }
        ],
        doc: { lead: '这一章讲模型。', sections: [
          { id: 'traditional', title: '传统模型', html: `<p>瀑布、增量、螺旋、V 模型；适用场景。</p>` },
          { id: 'agile', title: '敏捷', html: `<p>Scrum、XP、看板；迭代与回顾。</p>` }
        ], refs: [] } },
      { title: '需求工程', brief: '做对的事。',
        q: [
          { stem: '功能性需求与非功能性需求的区别是：', options: ['做什么 vs 做得怎样', '重要程度', '是否文档', '是否可测'], answer: 0, explain: '两类。' },
          { stem: '用例图的作用是：', options: ['描述参与者与系统功能', '描述类结构', '描述部署', '描述时序'], answer: 0, explain: '用例。' },
          { stem: '需求变更管理的关键是：', options: ['变更评审与影响分析', '拒绝所有变更', '随时接受', '口头同意'], answer: 0, explain: '评审。' }
        ],
        doc: { lead: '这一章讲需求。', sections: [
          { id: 'elicitation', title: '获取', html: `<p>访谈、问卷、观察、原型；干系人分析。</p>` },
          { id: 'spec', title: '规格', html: `<p>用例、用户故事、需求规格说明书；验收标准。</p>` }
        ], refs: [] } },
      { title: '软件设计', brief: '结构与模块。',
        q: [
          { stem: '高内聚低耦合的目的是：', options: ['提高可维护性与复用性', '减少代码', '加快运行', '减少文档'], answer: 0, explain: '设计目标。' },
          { stem: '模块化的依据是：', options: ['信息隐藏与职责划分', '代码行数', '文件大小', '开发人员'], answer: 0, explain: '模块化。' },
          { stem: '设计模式属于：', options: ['可复用的设计经验', '框架', '语言特性', '工具'], answer: 0, explain: '经验。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'modularity', title: '模块化', html: `<p>内聚与耦合、信息隐藏、抽象；分层与分层依赖。</p>` },
          { id: 'uml', title: 'UML', html: `<p>类图、时序图、状态图；建模与沟通。</p>` }
        ], refs: [] } },
      { title: '软件测试', brief: '找问题。',
        q: [
          { stem: '黑盒与白盒测试的区别是：', options: ['是否看内部结构', '是否自动化', '是否单元', '是否回归'], answer: 0, explain: '两类。' },
          { stem: '单元测试的关注点是：', options: ['最小可测单元的行为', '系统集成', '性能', '验收'], answer: 0, explain: '单元。' },
          { stem: '回归测试的目的是：', options: ['确认修改未破坏既有功能', '发现新功能', '性能测试', '安全测试'], answer: 0, explain: '回归。' }
        ],
        doc: { lead: '这一章讲测试。', sections: [
          { id: 'levels', title: '层次', html: `<p>单元、集成、系统、验收；V 模型对应。</p>` },
          { id: 'methods', title: '方法', html: `<p>黑盒（等价类、边界值）、白盒（覆盖）；自动化与回归。</p>` }
        ], refs: [] } },
      { title: '质量与度量', brief: '怎么衡量。',
        q: [
          { stem: '软件质量属性包括：', options: ['可靠性、性能、可维护性、安全性', '只有性能', '只有可靠性', '只有安全'], answer: 0, explain: '多属性。' },
          { stem: '代码覆盖率衡量：', options: ['测试覆盖的代码比例', '缺陷数', '代码行数', '复杂度'], answer: 0, explain: '覆盖率。' },
          { stem: '技术债务指：', options: ['为短期速度牺牲的长期质量', '贷款', '预算', '人力'], answer: 0, explain: '技术债。' }
        ],
        doc: { lead: '这一章讲质量。', sections: [
          { id: 'attributes', title: '属性', html: `<p>ISO 25010；可测性与可维护性。</p>` },
          { id: 'metrics', title: '度量', html: `<p>覆盖率、缺陷密度、复杂度、技术债；持续改进。</p>` }
        ], refs: [] } },
      { title: '项目管理', brief: '把事做成。',
        q: [
          { stem: '项目估算的常用方法是：', options: ['类比、专家判断、功能点', '猜', '拍脑袋', '看预算'], answer: 0, explain: '多种。' },
          { stem: '关键路径的特点是：', options: ['决定项目最短工期', '最长路径无关', '可有浮动', '不含依赖'], answer: 0, explain: '关键路径。' },
          { stem: '风险管理的步骤是：', options: ['识别、评估、应对、监控', '只有识别', '只有应对', '只有监控'], answer: 0, explain: '四步。' }
        ],
        doc: { lead: '这一章讲管理。', sections: [
          { id: 'plan', title: '计划', html: `<p>WBS、估算、甘特图、关键路径；里程碑。</p>` },
          { id: 'risk', title: '风险', html: `<p>识别与评估、应对策略；沟通与干系人管理。</p>` }
        ], refs: [] } },
      { title: '配置与维护', brief: '长期演进。',
        q: [
          { stem: '版本控制的核心是：', options: ['记录变更历史、支持协作', '备份', '压缩', '加密'], answer: 0, explain: '版本。' },
          { stem: '软件维护的类型包括：', options: ['纠错、适应、完善、预防', '只有纠错', '只有适应', '只有完善'], answer: 0, explain: '四类。' },
          { stem: '持续集成的作用是：', options: ['频繁集成并自动验证', '减少测试', '加快部署唯一', '替代评审'], answer: 0, explain: 'CI。' }
        ],
        doc: { lead: '这一章讲维护。', sections: [
          { id: 'scm', title: '配置管理', html: `<p>版本控制、分支策略、基线；变更控制。</p>` },
          { id: 'maintenance', title: '维护', html: `<p>四类维护；可维护性设计；CI/CD。</p>` }
        ], refs: [] } }
    ] },
    { name: '软件设计与体系结构', chapters: [
      { title: '架构风格', brief: '整体结构。',
        q: [
          { stem: '分层架构的特点是：', options: ['层间依赖单向、关注点分离', '层间任意调用', '无层次', '只有两层'], answer: 0, explain: '分层。' },
          { stem: '微服务与单体架构的区别是：', options: ['服务拆分与独立部署', '语言', '数据库', '团队'], answer: 0, explain: '拆分。' },
          { stem: '事件驱动架构的核心是：', options: ['事件的生产与消费解耦', '同步调用', '批处理', '单线程'], answer: 0, explain: '事件。' }
        ],
        doc: { lead: '这一章讲风格。', sections: [
          { id: 'styles', title: '常见风格', html: `<p>分层、MVC、微服务、事件驱动、管道过滤。</p>` },
          { id: 'tradeoff', title: '权衡', html: `<p>一致性、可用性、复杂度、团队规模；演进式架构。</p>` }
        ], refs: [] } },
      { title: '设计原则', brief: 'SOLID 与更多。',
        q: [
          { stem: '开闭原则指：', options: ['对扩展开放、对修改关闭', '对修改开放', '不修改', '不扩展'], answer: 0, explain: 'OCP。' },
          { stem: '里氏替换原则要求：', options: ['子类可替换父类而不破坏正确性', '子类不能扩展', '父类不能抽象', '无继承'], answer: 0, explain: 'LSP。' },
          { stem: '接口隔离原则强调：', options: ['接口小而专', '接口大而全', '不用接口', '只有一个接口'], answer: 0, explain: 'ISP。' }
        ],
        doc: { lead: '这一章讲原则。', sections: [
          { id: 'solid', title: 'SOLID', html: `<p>单一职责、开闭、里氏、接口隔离、依赖倒置。</p>` },
          { id: 'others', title: '其他', html: `<p>DRY、KISS、YAGNI；组合优于继承。</p>` }
        ], refs: [] } },
      { title: '设计模式应用', brief: '落地。',
        q: [
          { stem: '策略模式解决：', options: ['算法可替换', '对象创建', '结构组合', '并发'], answer: 0, explain: '策略。' },
          { stem: '装饰器模式的特点：', options: ['动态添加职责而不改原类', '创建对象', '解耦通知', '缓存'], answer: 0, explain: '装饰。' },
          { stem: '滥用模式的后果是：', options: ['过度设计与复杂度上升', '性能提升', '代码更少', '无影响'], answer: 0, explain: '过度设计。' }
        ],
        doc: { lead: '这一章讲模式。', sections: [
          { id: 'apply', title: '应用', html: `<p>策略、工厂、适配器、装饰、观察者；场景匹配。</p>` },
          { id: 'antipattern', title: '反模式', html: `<p>上帝类、意大利面代码、过度设计；识别与重构。</p>` }
        ], refs: [] } },
      { title: '架构质量属性', brief: '非功能需求。',
        q: [
          { stem: '可扩展性的关键是：', options: ['无状态与水平扩展', '单机性能', '代码短', '数据库大'], answer: 0, explain: '扩展。' },
          { stem: '可观测性包括：', options: ['日志、指标、追踪', '只有日志', '只有指标', '只有追踪'], answer: 0, explain: '三支柱。' },
          { stem: '高可用常用手段包括：', options: ['冗余、故障转移、限流降级', '只有冗余', '只有限流', '只有备份'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲质量。', sections: [
          { id: 'attributes', title: '属性', html: `<p>性能、可用、伸缩、安全、可维护；质量属性场景。</p>` },
          { id: 'tactics', title: '战术', html: `<p>冗余与故障转移、缓存、限流降级、可观测性。</p>` }
        ], refs: [] } },
      { title: '接口与集成', brief: '系统之间。',
        q: [
          { stem: 'REST 的核心约束包括：', options: ['无状态、统一接口、资源导向', '有状态', '只 POST', '二进制唯一'], answer: 0, explain: 'REST。' },
          { stem: '同步与异步集成的区别是：', options: ['是否等待响应', '协议', '语言', '数据库'], answer: 0, explain: '调用方式。' },
          { stem: '幂等性的意义是：', options: ['重复调用结果一致，便于重试', '速度', '加密', '压缩'], answer: 0, explain: '幂等。' }
        ],
        doc: { lead: '这一章讲集成。', sections: [
          { id: 'api', title: 'API', html: `<p>REST、RPC、GraphQL；版本与契约。</p>` },
          { id: 'messaging', title: '消息', html: `<p>消息队列、发布订阅、幂等与重试；最终一致。</p>` }
        ], refs: [] } },
      { title: '数据与一致性', brief: '数据怎么放。',
        q: [
          { stem: '强一致与最终一致的区别是：', options: ['读到的数据是否总是最新', '性能', '存储', '协议'], answer: 0, explain: '一致性。' },
          { stem: '分布式事务的常见方案是：', options: ['两阶段提交、Saga、TCC', '只有两阶段', '只有 Saga', '只有 TCC'], answer: 0, explain: '多种。' },
          { stem: '缓存一致性的难点是：', options: ['更新与失效时机', '容量', '成本', '语言'], answer: 0, explain: '失效。' }
        ],
        doc: { lead: '这一章讲数据。', sections: [
          { id: 'consistency', title: '一致性', html: `<p>强一致、最终一致；CAP 权衡。</p>` },
          { id: 'patterns', title: '模式', html: `<p>Saga、TCC、事件溯源；缓存策略与失效。</p>` }
        ], refs: [] } },
      { title: '架构评估与演进', brief: '判断好坏。',
        q: [
          { stem: 'ATAM 的作用是：', options: ['评估架构对质量属性的满足', '编码', '测试', '部署'], answer: 0, explain: 'ATAM。' },
          { stem: '架构决策记录（ADR）的价值是：', options: ['记录决策背景与权衡', '装饰', '替代文档', '考核'], answer: 0, explain: 'ADR。' },
          { stem: '演进式架构强调：', options: ['在变化中保持可演进性', '一次设计到位', '不做设计', '只做重构'], answer: 0, explain: '演进。' }
        ],
        doc: { lead: '这一章讲演进。', sections: [
          { id: 'evaluation', title: '评估', html: `<p>场景驱动、ATAM；风险与敏感点。</p>` },
          { id: 'evolution', title: '演进', html: `<p>绞杀者模式、分支抽象；ADR 与技术债管理。</p>` }
        ], refs: [] } },
      { title: '架构实战', brief: '做一个设计。',
        q: [
          { stem: '架构设计的第一步是：', options: ['明确质量属性与约束', '选框架', '画图', '写代码'], answer: 0, explain: '需求。' },
          { stem: '架构文档应包含：', options: ['视图、决策、约束、风险', '只有图', '只有代码', '只有部署'], answer: 0, explain: '完整。' },
          { stem: '原型验证的意义是：', options: ['验证关键技术风险', '展示', '替代开发', '装饰'], answer: 0, explain: '验证。' }
        ],
        doc: { lead: '这一章讲实战。', sections: [
          { id: 'views', title: '视图', html: `<p>逻辑、开发、进程、部署视图；4+1 视图。</p>` },
          { id: 'practice', title: '实践', html: `<p>原型验证、技术选型评审；文档与沟通。</p>` }
        ], refs: [] } }
    ] },
    { name: '软件测试', chapters: [
      { title: '测试基础', brief: '为什么测。',
        q: [
          { stem: '测试的目的是：', options: ['发现缺陷、评估质量', '证明无缺陷', '写文档', '部署'], answer: 0, explain: '发现。' },
          { stem: '穷尽测试：', options: ['不可能，需基于风险选择', '总是可行', '必须做', '无意义'], answer: 0, explain: '不可能。' },
          { stem: '测试用例的要素包括：', options: ['输入、步骤、预期结果', '只有输入', '只有预期', '只有步骤'], answer: 0, explain: '三要素。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'purpose', title: '目的', html: `<p>发现缺陷、提供质量信息；缺陷成本随阶段上升。</p>` },
          { id: 'case', title: '用例', html: `<p>输入、步骤、预期；可重复与可判定。</p>` }
        ], refs: [] } },
      { title: '黑盒测试', brief: '看输入输出。',
        q: [
          { stem: '等价类划分的原则是：', options: ['有效与无效等价类', '只测有效', '只测无效', '随机'], answer: 0, explain: '两类。' },
          { stem: '边界值分析关注：', options: ['边界及其邻近值', '中间值', '随机值', '最大值唯一'], answer: 0, explain: '边界。' },
          { stem: '判定表适用于：', options: ['多条件组合的逻辑', '性能', '界面', '安全'], answer: 0, explain: '组合。' }
        ],
        doc: { lead: '这一章讲黑盒。', sections: [
          { id: 'partition', title: '等价类与边界', html: `<p>有效/无效等价类、边界值；用例设计。</p>` },
          { id: 'decision', title: '判定表与场景', html: `<p>条件组合、因果图；场景法。</p>` }
        ], refs: [] } },
      { title: '白盒测试', brief: '看代码。',
        q: [
          { stem: '语句覆盖要求：', options: ['每条语句至少执行一次', '每个分支', '每个条件', '每条路径'], answer: 0, explain: '语句。' },
          { stem: '分支覆盖比语句覆盖：', options: ['更强', '更弱', '相同', '无关'], answer: 0, explain: '更强。' },
          { stem: '路径覆盖的问题是：', options: ['路径爆炸', '太弱', '无法测', '无意义'], answer: 0, explain: '爆炸。' }
        ],
        doc: { lead: '这一章讲白盒。', sections: [
          { id: 'coverage', title: '覆盖', html: `<p>语句、判定、条件、路径覆盖；强度比较。</p>` },
          { id: 'static', title: '静态', html: `<p>代码审查、静态分析；复杂度度量。</p>` }
        ], refs: [] } },
      { title: '测试层次', brief: '测什么层级。',
        q: [
          { stem: '单元测试通常由：', options: ['开发者编写', '测试人员', '用户', '运维'], answer: 0, explain: '开发者。' },
          { stem: '集成测试关注：', options: ['模块间接口与交互', '单个函数', '性能', '验收'], answer: 0, explain: '集成。' },
          { stem: '验收测试的依据是：', options: ['需求与验收标准', '代码', '设计图', '日志'], answer: 0, explain: '需求。' }
        ],
        doc: { lead: '这一章讲层次。', sections: [
          { id: 'levels', title: '四层', html: `<p>单元、集成、系统、验收；测试金字塔。</p>` },
          { id: 'strategy', title: '策略', html: `<p>自底向上、自顶向下、三明治；冒烟与回归。</p>` }
        ], refs: [] } },
      { title: '自动化测试', brief: '让机器测。',
        q: [
          { stem: '自动化测试的适用场景是：', options: ['重复执行、回归测试', '一次性探索', '界面评审', '需求分析'], answer: 0, explain: '回归。' },
          { stem: '测试金字塔建议：', options: ['单元多、UI 少', 'UI 多', '单元少', '只有 UI'], answer: 0, explain: '金字塔。' },
          { stem: '不稳定的测试（flaky）会：', options: ['降低信任与效率', '提高覆盖', '加快速度', '无影响'], answer: 0, explain: 'flaky。' }
        ],
        doc: { lead: '这一章讲自动化。', sections: [
          { id: 'frameworks', title: '框架', html: `<p>单元测试框架、接口测试、UI 自动化；断言与报告。</p>` },
          { id: 'ci', title: 'CI 集成', html: `<p>持续测试、并行与缓存；flake 治理。</p>` }
        ], refs: [] } },
      { title: '性能与安全测试', brief: '非功能。',
        q: [
          { stem: '性能测试的类型包括：', options: ['负载、压力、稳定性、容量', '只有负载', '只有压力', '只有稳定性'], answer: 0, explain: '多种。' },
          { stem: '响应时间的关键指标是：', options: ['平均与分位数（P95/P99）', '只有平均', '只有最大值', '只有中位数'], answer: 0, explain: '分位。' },
          { stem: '常见安全测试内容包括：', options: ['注入、越权、XSS', '只有注入', '只有越权', '只有 XSS'], answer: 0, explain: '多类。' }
        ],
        doc: { lead: '这一章讲非功能。', sections: [
          { id: 'performance', title: '性能', html: `<p>负载模型、指标（TPS、RT、错误率）；瓶颈定位。</p>` },
          { id: 'security', title: '安全', html: `<p>OWASP Top 10；渗透测试与修复验证。</p>` }
        ], refs: [] } },
      { title: '缺陷管理', brief: '管好问题。',
        q: [
          { stem: '缺陷报告的要素包括：', options: ['复现步骤、预期、实际、环境', '只有标题', '只有截图', '只有优先级'], answer: 0, explain: '要素。' },
          { stem: '缺陷严重性与优先级的区别是：', options: ['影响程度 vs 修复紧急度', '相同', '优先级更高', '严重性更高'], answer: 0, explain: '两维度。' },
          { stem: '缺陷收敛趋势可用于：', options: ['判断质量与发布时机', '计算成本', '评估性能', '分配人力'], answer: 0, explain: '趋势。' }
        ],
        doc: { lead: '这一章讲管理。', sections: [
          { id: 'report', title: '报告', html: `<p>标题、环境、步骤、预期/实际、附件；可复现。</p>` },
          { id: 'tracking', title: '跟踪', html: `<p>生命周期、严重性与优先级、趋势分析；回归验证。</p>` }
        ], refs: [] } },
      { title: '测试管理与实践', brief: '组织测试。',
        q: [
          { stem: '测试计划的重点是：', options: ['范围、策略、资源、进度、风险', '只有进度', '只有资源', '只有范围'], answer: 0, explain: '计划。' },
          { stem: '基于风险的测试强调：', options: ['优先测高风险区域', '平均用力', '只测新功能', '只测旧功能'], answer: 0, explain: '风险。' },
          { stem: '质量门禁的作用是：', options: ['不达标不允许发布', '加快发布', '减少测试', '替代评审'], answer: 0, explain: '门禁。' }
        ],
        doc: { lead: '这一章讲管理。', sections: [
          { id: 'plan', title: '计划', html: `<p>测试范围、策略、环境、数据；准入准出标准。</p>` },
          { id: 'risk', title: '风险与门禁', html: `<p>风险驱动测试、质量门禁；度量与复盘。</p>` }
        ], refs: [] } }
    ] },

    /* ---- 大四 ---- */
    { name: '毕业设计', chapters: [
      { title: '选题与开题', brief: '做什么。',
        q: [
          { stem: '毕业设计选题的关键是：', options: ['问题明确、工作量适中、可交付', '题目宏大', '技术最新', '导师偏好'], answer: 0, explain: '可行。' },
          { stem: '开题报告应包含：', options: ['背景、目标、方案、计划', '只有背景', '只有计划', '只有方案'], answer: 0, explain: '四要素。' },
          { stem: '技术选型的原则是：', options: ['匹配需求与团队能力', '越新越好', '越流行越好', '越贵越好'], answer: 0, explain: '匹配。' }
        ],
        doc: { lead: '这一章讲开题。', sections: [
          { id: 'topic', title: '选题', html: `<p>应用系统、工具、算法改进；范围可控。</p>` },
          { id: 'proposal', title: '开题', html: `<p>背景、目标、方案、进度、风险；可行性论证。</p>` }
        ], refs: [] } },
      { title: '设计与实现', brief: '做出来。',
        q: [
          { stem: '毕业设计文档应包含：', options: ['需求、设计、实现、测试', '只有代码', '只有界面', '只有论文'], answer: 0, explain: '完整。' },
          { stem: '版本控制的作用是：', options: ['记录演进、便于回溯', '备份唯一', '加速', '压缩'], answer: 0, explain: '版本。' },
          { stem: '原型迭代的价值是：', options: ['尽早获得反馈', '省事', '装饰', '替代测试'], answer: 0, explain: '反馈。' }
        ],
        doc: { lead: '这一章讲实现。', sections: [
          { id: 'design', title: '设计', html: `<p>架构、模块、数据库设计；接口定义。</p>` },
          { id: 'implement', title: '实现', html: `<p>迭代开发、版本控制、单元测试；文档同步。</p>` }
        ], refs: [] } },
      { title: '测试与论文', brief: '证明可用。',
        q: [
          { stem: '毕业设计的测试应：', options: ['覆盖核心功能并记录结果', '只测一次', '只测界面', '不测'], answer: 0, explain: '测试。' },
          { stem: '论文与系统的关系是：', options: ['论文说明问题、方案与验证', '论文替代系统', '系统替代论文', '无关'], answer: 0, explain: '互补。' },
          { stem: '论文引用规范的作用是：', options: ['可追溯与诚信', '凑数', '装饰', '增加篇幅'], answer: 0, explain: '规范。' }
        ],
        doc: { lead: '这一章讲验证。', sections: [
          { id: 'test', title: '测试', html: `<p>功能测试、性能测试；用例与结果记录。</p>` },
          { id: 'thesis', title: '论文', html: `<p>问题—方案—实现—测试—结论；图表与引用规范。</p>` }
        ], refs: [] } },
      { title: '答辩与交付', brief: '讲清楚。',
        q: [
          { stem: '答辩演示的关键是：', options: ['现场可运行、突出核心价值', 'PPT 精美', '代码多', '时长'], answer: 0, explain: '演示。' },
          { stem: '交付物应包括：', options: ['源码、文档、部署说明、演示数据', '只有源码', '只有文档', '只有演示'], answer: 0, explain: '完整。' },
          { stem: '被质疑时应：', options: ['承认局限并说明理由', '争辩', '回避', '改口'], answer: 0, explain: '诚恳。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'demo', title: '演示', html: `<p>10 分钟：问题—方案—演示—结果；准备离线备份。</p>` },
          { id: 'deliver', title: '交付', html: `<p>源码、README、部署脚本、测试报告；可复现。</p>` }
        ], refs: [] } }
    ] },
    { name: '专业实习', chapters: [
      { title: '岗位与角色', brief: '开发、测试、运维。',
        q: [
          { stem: '软件开发实习的常见岗位不包括：', options: ['后端开发', '前端开发', '测试', '外科医生'], answer: 3, explain: '无关。' },
          { stem: '选择实习最该看：', options: ['能否参与真实项目', '名气', '工资', '通勤'], answer: 0, explain: '实战。' },
          { stem: '实习生最快上手的方式是：', options: ['从修小 bug 开始', '直接重构', '只写文档', '等安排'], answer: 0, explain: '小任务。' }
        ],
        doc: { lead: '这一章讲岗位。', sections: [
          { id: 'roles', title: '岗位', html: `<p>前端、后端、测试、运维、数据；职责与技能。</p>` },
          { id: 'onboard', title: '上手', html: `<p>读文档、跑通环境、修小 bug；提问与记录。</p>` }
        ], refs: [] } },
      { title: '工程协作', brief: '一起写代码。',
        q: [
          { stem: 'Git 分支策略的常见做法是：', options: ['主干 + 特性分支 + 合并请求', '只用一个分支', '每人一个仓库', '不用分支'], answer: 0, explain: '分支。' },
          { stem: '代码评审的价值是：', options: ['发现缺陷与知识共享', '考核', '拖延', '形式'], answer: 0, explain: '评审。' },
          { stem: 'Commit 信息的规范是：', options: ['说明改动目的与范围', '随便写', '只写日期', '只写人名'], answer: 0, explain: '规范。' }
        ],
        doc: { lead: '这一章讲协作。', sections: [
          { id: 'git', title: 'Git', html: `<p>分支、合并请求、冲突解决；提交粒度。</p>` },
          { id: 'review', title: '评审', html: `<p>小 PR、明确描述、建设性意见；自动化检查。</p>` }
        ], refs: [] } },
      { title: '工程质量', brief: '写可靠的代码。',
        q: [
          { stem: '单元测试在实习中的价值是：', options: ['防止回归、提升信心', '应付检查', '装饰', '无价值'], answer: 0, explain: '回归。' },
          { stem: '日志的作用是：', options: ['排查问题与监控', '装饰', '取代测试', '加密'], answer: 0, explain: '日志。' },
          { stem: '遇到线上问题应：', options: ['先止损再定位', '先改代码', '先甩锅', '先隐藏'], answer: 0, explain: '止损。' }
        ],
        doc: { lead: '这一章讲质量。', sections: [
          { id: 'testing', title: '测试', html: `<p>单元测试、集成测试；CI 流水线。</p>` },
          { id: 'debug', title: '排查', html: `<p>日志、监控、复现；止损优先；复盘与改进。</p>` }
        ], refs: [] } },
      { title: '实习复盘', brief: '留下什么。',
        q: [
          { stem: '实习应留下的成果是：', options: ['代码提交、项目文档、复盘', '工牌', '照片', '评语'], answer: 0, explain: '成果。' },
          { stem: '实习日志的推荐写法是：', options: ['问题—做法—结果—反思', '流水账', '只写结论', '只写感受'], answer: 0, explain: '结构化。' },
          { stem: '面试讲项目的最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'output', title: '成果', html: `<p>合并的 PR、技术文档、性能优化记录；可量化。</p>` },
          { id: 'review', title: '复盘', html: `<p>每周五行；讲清你的贡献与学到的东西。</p>` }
        ], refs: [] } }
    ] },
    { name: '考研与求职', chapters: [
      { title: '考研方向', brief: '软件与交叉。',
        q: [
          { stem: '软件工程考研的常见方向是：', options: ['软件工程、计算机技术（专硕）、计算机科学', '只有软件', '只有专硕', '只有计科'], answer: 0, explain: '多方向。' },
          { stem: '408 统考包含：', options: ['数据结构、组成、操作系统、网络', '只有数据结构', '只有网络', '只有操作系统'], answer: 0, explain: '四门。' },
          { stem: '择校最应考虑：', options: ['方向、导师与真题风格', '城市', '学费', '宿舍'], answer: 0, explain: '匹配。' }
        ],
        doc: { lead: '这一章讲方向。', sections: [
          { id: 'paths', title: '方向', html: `<p>软件工程、计算机技术专硕、人工智能、网络安全。</p>` },
          { id: 'subjects', title: '科目', html: `<p>政治、英语、数学、408 或自命题（数据结构 + 软件工程）。</p>` }
        ], refs: [] } },
      { title: '专业课复习', brief: '四门与算法。',
        q: [
          { stem: '数据结构复习的主线是：', options: ['线性—树—图—查找排序', '只背定义', '只做真题', '只看书'], answer: 0, explain: '主线。' },
          { stem: '操作系统复习的重点是：', options: ['进程、内存、文件、IO', '只有进程', '只有内存', '只有文件'], answer: 0, explain: '四大块。' },
          { stem: '算法题的关键是：', options: ['思路 + 复杂度 + 边界', '背代码', '猜', '跳过'], answer: 0, explain: '思路。' }
        ],
        doc: { lead: '这一章讲复习。', sections: [
          { id: 'subjects', title: '四门', html: `<p>数据结构、计算机组成、操作系统、计算机网络；真题分类。</p>` },
          { id: 'coding', title: '算法', html: `<p>手写代码、复杂度分析、边界测试；模板与变式。</p>` }
        ], refs: [] } },
      { title: '求职方向', brief: '开发、测试、产品。',
        q: [
          { stem: '软件工程毕业生的常见去向不包括：', options: ['后端开发', '测试开发', '产品经理', '外科医生'], answer: 3, explain: '专业限制。' },
          { stem: '后端岗位看重：', options: ['语言基础、数据库、系统设计', '只有算法', '只有框架', '只有证书'], answer: 0, explain: '综合。' },
          { stem: '求职最加分的材料是：', options: ['项目与代码仓库', '证书数量', '成绩单', '社团'], answer: 0, explain: '项目。' }
        ],
        doc: { lead: '这一章讲就业。', sections: [
          { id: 'paths', title: '路径', html: `<p>后端、前端、测试开发、客户端、产品、读博。</p>` },
          { id: 'skills', title: '能力', html: `<p>一门主力语言、数据库、网络、系统设计；项目与实习。</p>` }
        ], refs: [] } },
      { title: '面试', brief: '技术与表达。',
        q: [
          { stem: '技术面试的核心环节是：', options: ['算法题 + 项目深挖 + 基础八股', '只有算法', '只有项目', '只有八股'], answer: 0, explain: '综合。' },
          { stem: '讲项目的最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' },
          { stem: '被问到不会的问题应：', options: ['说明思路与边界，诚实承认', '编造', '沉默', '转移话题'], answer: 0, explain: '诚实。' }
        ],
        doc: { lead: '这一章讲面试。', sections: [
          { id: 'coding', title: '编码', html: `<p>算法题、复杂度、边界；边写边讲。</p>` },
          { id: 'project', title: '项目', html: `<p>架构、难点、数据；STAR 结构；反问环节。</p>` }
        ], refs: [] } }
    ] }
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
