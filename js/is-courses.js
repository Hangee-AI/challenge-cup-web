/* ==========================================================
   is-courses.js · 信息管理与信息系统：12 门课（8/4）= 84 关
   ========================================================== */

(function () {
  var MAJOR = 'management-信息管理与信息系统';
  var TITLES = stageTitlesOf('management');

  var COURSES = [
    { name: '管理学原理', chapters: [
      { title: '管理与管理者', brief: '基本概念。',
        q: [
          { stem: '管理四职能是：', options: ['计划、组织、领导、控制', '计划、执行、检查、改进', '决策、沟通、激励、创新', '人财物信息'], answer: 0, explain: '四职能。' },
          { stem: '管理者的三种技能是：', options: ['技术、人际、概念', '决策、沟通、执行', '生产、销售、财务', '计划、组织、控制'], answer: 0, explain: '卡茨。' },
          { stem: '效率与效果：', options: ['做事方式 vs 做事目标', '相同', '互斥', '无关'], answer: 0, explain: '两者。' }
        ],
        doc: { lead: '这一章讲概念。', sections: [
          { id: 'function', title: '职能', html: `<p>计划、组织、领导、控制；效率与效果。</p>` },
          { id: 'role', title: '角色', html: `<p>明茨伯格十角色；卡茨三技能。</p>` }
        ], refs: [] } },
      { title: '管理思想', brief: '历史。',
        q: [
          { stem: '科学管理代表人物：', options: ['泰勒', '梅奥', '法约尔', '韦伯'], answer: 0, explain: '泰勒。' },
          { stem: '霍桑实验结论：', options: ['人是社会人', '经济人', '技术决定', '制度万能'], answer: 0, explain: '霍桑。' },
          { stem: '权变理论认为：', options: ['无普适最佳方式', '有普适原则', '只看制度', '只看文化'], answer: 0, explain: '权变。' }
        ],
        doc: { lead: '这一章讲历史。', sections: [
          { id: 'classical', title: '古典', html: `<p>泰勒、法约尔、韦伯。</p>` },
          { id: 'modern', title: '现代', html: `<p>行为科学、系统与权变；学习型组织。</p>` }
        ], refs: [] } },
      { title: '计划与决策', brief: '定方向。',
        q: [
          { stem: '计划的落脚点是：', options: ['目标与行动方案', '预算', '人员', '考核'], answer: 0, explain: '目标。' },
          { stem: '有限理性的含义：', options: ['信息认知受限、满意即可', '完全理性', '直觉唯一', '无决策'], answer: 0, explain: '有限理性。' },
          { stem: '目标管理的关键：', options: ['参与设定与结果考核', '上级命令', '只看过程', '不考核'], answer: 0, explain: 'MBO。' }
        ],
        doc: { lead: '这一章讲计划。', sections: [
          { id: 'planning', title: '计划', html: `<p>计划类型、目标体系；MBO。</p>` },
          { id: 'decision', title: '决策', html: `<p>决策过程、理性与直觉；群体决策。</p>` }
        ], refs: [] } },
      { title: '组织设计', brief: '结构。',
        q: [
          { stem: '幅度与层次关系：', options: ['反比', '正比', '无关', '相等'], answer: 0, explain: '反比。' },
          { stem: '事业部制核心：', options: ['按产品/地区分权', '高度集权', '职能集中', '矩阵双线'], answer: 0, explain: '分权。' },
          { stem: '矩阵结构缺点：', options: ['双重领导冲突', '反应慢', '无专业分工', '集权过度'], answer: 0, explain: '双线。' }
        ],
        doc: { lead: '这一章讲组织。', sections: [
          { id: 'design', title: '设计', html: `<p>部门化、幅度层次、集权分权。</p>` },
          { id: 'structure', title: '结构', html: `<p>直线职能、事业部、矩阵、网络型。</p>` }
        ], refs: [] } },
      { title: '领导与激励', brief: '带人。',
        q: [
          { stem: '保健因素的作用是：', options: ['防止不满但不激励', '直接激励', '提高绩效', '无作用'], answer: 0, explain: '保健。' },
          { stem: '期望理论三要素：', options: ['期望、工具性、效价', '只有期望', '只有效价', '只有工具性'], answer: 0, explain: '三要素。' },
          { stem: '领导与管理的区别：', options: ['领导重方向与激励', '完全相同', '领导只管考核', '管理只定愿景'], answer: 0, explain: '区别。' }
        ],
        doc: { lead: '这一章讲领导。', sections: [
          { id: 'motivation', title: '激励', html: `<p>需求层次、双因素、期望与公平。</p>` },
          { id: 'leadership', title: '领导', html: `<p>风格与权变理论；领导力发展。</p>` }
        ], refs: [] } },
      { title: '控制与沟通', brief: '执行。',
        q: [
          { stem: '控制过程起点：', options: ['确立标准', '衡量绩效', '纠正偏差', '奖惩'], answer: 0, explain: '标准。' },
          { stem: '例外管理指：', options: ['重点关注偏差大的例外事项', '事必躬亲', '不做控制', '只做例行'], answer: 0, explain: '例外。' },
          { stem: '沟通改进方法：', options: ['简化语言、倾听、反馈', '只说不管', '只发文件', '减少沟通'], answer: 0, explain: '改进。' }
        ],
        doc: { lead: '这一章讲控制。', sections: [
          { id: 'control', title: '控制', html: `<p>控制类型与过程；例外管理。</p>` },
          { id: 'communication', title: '沟通', html: `<p>沟通网络、障碍与改进；冲突管理。</p>` }
        ], refs: [] } },
      { title: '数字化与管理变革', brief: '技术与组织。',
        q: [
          { stem: '数字化转型的核心是：', options: ['业务与数据技术的融合', '买软件', '上云唯一', '裁员'], answer: 0, explain: '融合。' },
          { stem: '扁平化组织的动因包括：', options: ['信息效率与授权需要', '成本唯一', '规模扩大', '监管'], answer: 0, explain: '扁平。' },
          { stem: '流程再造（BPR）的特点是：', options: ['根本性、彻底性、戏剧性', '局部优化', '小改小革', '只加自动化'], answer: 0, explain: 'BPR。' }
        ],
        doc: { lead: '这一章讲数字化。', sections: [
          { id: 'digital', title: '数字化', html: `<p>信息化与数字化、数据驱动决策；组织变革。</p>` },
          { id: 'bpr', title: '流程变革', html: `<p>BPR 原则、流程优化；变革阻力。</p>` }
        ], refs: [] } },
      { title: '管理案例', brief: '用起来。',
        q: [
          { stem: '案例分析四步：', options: ['问题—原因—方案—评价', '只给结论', '只描述', '只评价'], answer: 0, explain: '四步。' },
          { stem: 'SWOT 包含：', options: ['优势劣势机会威胁', '人财物信息', '计划组织控制', '产供销'], answer: 0, explain: 'SWOT。' },
          { stem: '信息化项目落地应考虑：', options: ['流程、数据、组织与文化', '只有技术', '只有预算', '只有供应商'], answer: 0, explain: '综合。' }
        ],
        doc: { lead: '这一章讲案例。', sections: [
          { id: 'framework', title: '框架', html: `<p>SWOT、五力、价值链；问题树。</p>` },
          { id: 'case', title: '案例', html: `<p>信息化案例拆解；方案评价。</p>` }
        ], refs: [] } }
    ] },
    { name: '程序设计基础', chapters: [
      { title: '变量与类型', brief: '数据。',
        q: [
          { stem: '整型与浮点型的主要区别是：', options: ['取值范围与精度', '字节数唯一', '符号', '运算'], answer: 0, explain: '精度。' },
          { stem: '变量的作用域决定：', options: ['可见范围与生存期', '大小', '类型', '初值'], answer: 0, explain: '作用域。' },
          { stem: '未初始化变量的值是：', options: ['不确定', '0', '安全随机', '编译错误'], answer: 0, explain: '未定义。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'types', title: '类型', html: `<p>整型、浮点、字符、布尔；转换与溢出。</p>` },
          { id: 'scope', title: '作用域', html: `<p>局部、全局、静态；生命周期。</p>` }
        ], refs: [] } },
      { title: '控制结构', brief: '流程。',
        q: [
          { stem: 'for 与 while 的区别是：', options: ['循环控制方式不同', '是否可嵌套', '是否可跳出', '是否有条件'], answer: 0, explain: '结构。' },
          { stem: 'break 与 continue：', options: ['跳出 vs 跳过本次', '相同', '都跳出', '都跳过'], answer: 0, explain: '语义。' },
          { stem: 'switch 穿透指：', options: ['无 break 时继续执行下一分支', '语法错误', '跳出', '跳转'], answer: 0, explain: '穿透。' }
        ],
        doc: { lead: '这一章讲控制。', sections: [
          { id: 'branch', title: '分支', html: `<p>if/else、switch；嵌套与可读性。</p>` },
          { id: 'loop', title: '循环', html: `<p>for、while；break/continue；循环不变式。</p>` }
        ], refs: [] } },
      { title: '函数与递归', brief: '复用。',
        q: [
          { stem: '递归必须有：', options: ['终止条件与递归步骤', '循环', '全局变量', '指针'], answer: 0, explain: '基准。' },
          { stem: '值传递不能：', options: ['修改实参', '返回值', '递归', '嵌套'], answer: 0, explain: '单向。' },
          { stem: '栈帧保存：', options: ['局部变量与返回地址', '全局变量', '堆', '文件'], answer: 0, explain: '栈帧。' }
        ],
        doc: { lead: '这一章讲函数。', sections: [
          { id: 'function', title: '函数', html: `<p>声明定义、参数、返回值；作用域。</p>` },
          { id: 'recursion', title: '递归', html: `<p>基准与递归；栈溢出；尾递归。</p>` }
        ], refs: [] } },
      { title: '数组与字符串', brief: '批量。',
        q: [
          { stem: '数组越界的后果：', options: ['未定义行为', '自动扩容', '必报错', '无害'], answer: 0, explain: 'UB。' },
          { stem: '数组名在表达式中：', options: ['退化为指向首元素的指针', '长度', '值', '类型'], answer: 0, explain: '指针。' },
          { stem: '二维数组通常：', options: ['按行连续存储', '按列', '散列', '链式'], answer: 0, explain: '行优先。' }
        ],
        doc: { lead: '这一章讲数组。', sections: [
          { id: 'array', title: '数组', html: `<p>一维/二维；遍历、排序、查找。</p>` },
          { id: 'string', title: '字符串', html: `<p>字符数组与指针；库函数与安全。</p>` }
        ], refs: [] } },
      { title: '指针与内存', brief: '底层。',
        q: [
          { stem: '指针存储的是：', options: ['地址', '值', '类型', '长度'], answer: 0, explain: '地址。' },
          { stem: 'malloc 分配在：', options: ['堆', '栈', '静态区', '代码区'], answer: 0, explain: '堆。' },
          { stem: '内存泄漏指：', options: ['分配后未释放', '越界', '野指针', '栈溢出'], answer: 0, explain: '泄漏。' }
        ],
        doc: { lead: '这一章讲内存。', sections: [
          { id: 'pointer', title: '指针', html: `<p>取地址、解引用、指针运算；指针与数组。</p>` },
          { id: 'memory', title: '内存', html: `<p>栈与堆、malloc/free；常见错误。</p>` }
        ], refs: [] } },
      { title: '结构体与文件', brief: '组织与持久化。',
        q: [
          { stem: '结构体适合表示：', options: ['一组相关数据', '单个值', '函数', '文件'], answer: 0, explain: '聚合。' },
          { stem: 'fopen 的 "r" 表示：', options: ['只读', '只写', '追加', '读写'], answer: 0, explain: '只读。' },
          { stem: 'fclose 的作用：', options: ['刷新缓冲并释放资源', '删除', '重命名', '加密'], answer: 0, explain: '关闭。' }
        ],
        doc: { lead: '这一章讲组织。', sections: [
          { id: 'struct', title: '结构体', html: `<p>定义、数组与指针；typedef。</p>` },
          { id: 'file', title: '文件', html: `<p>fopen/fread/fwrite/fclose；文本与二进制。</p>` }
        ], refs: [] } },
      { title: '调试与工程习惯', brief: '写好。',
        q: [
          { stem: '调试第一步：', options: ['复现问题', '改代码', '重装', '问人'], answer: 0, explain: '复现。' },
          { stem: 'assert 的作用：', options: ['检查不变量', '替代异常', '优化', '打印'], answer: 0, explain: '断言。' },
          { stem: '好代码标准：', options: ['正确、可读、可维护', '短', '炫技', '无注释'], answer: 0, explain: '多维。' }
        ],
        doc: { lead: '这一章讲习惯。', sections: [
          { id: 'debug', title: '调试', html: `<p>断点、日志、最小复现；版本控制。</p>` },
          { id: 'style', title: '风格', html: `<p>命名、注释、警告全开；代码评审。</p>` }
        ], refs: [] } },
      { title: '小项目实战', brief: '综合。',
        q: [
          { stem: '项目开始前应先：', options: ['明确需求与数据结构', '写界面', '选框架', '部署'], answer: 0, explain: '需求。' },
          { stem: '模块化的好处：', options: ['便于测试与维护', '代码更长', '运行更快', '无需文档'], answer: 0, explain: '模块化。' },
          { stem: '交付应包括：', options: ['源码、说明、测试数据', '只有源码', '只有文档', '只有数据'], answer: 0, explain: '完整。' }
        ],
        doc: { lead: '这一章讲实战。', sections: [
          { id: 'project', title: '项目', html: `<p>信息管理小系统：结构体 + 文件 + 菜单。</p>` },
          { id: 'deliver', title: '交付', html: `<p>README、构建说明、测试用例。</p>` }
        ], refs: [] } }
    ] },
    { name: '数据结构', chapters: [
      { title: '线性表', brief: '顺序与链式。',
        q: [
          { stem: '顺序表与链表的区别：', options: ['是否连续存储', '是否有序', '是否有头结点', '是否动态'], answer: 0, explain: '存储。' },
          { stem: '链表插入（已知位置）复杂度：', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'], answer: 0, explain: 'O(1)。' },
          { stem: '头结点的作用：', options: ['统一插入删除', '存储长度', '加快查找', '省空间'], answer: 0, explain: '统一。' }
        ],
        doc: { lead: '这一章讲线性表。', sections: [
          { id: 'array', title: '顺序表', html: `<p>随机访问、插入删除代价；动态扩容。</p>` },
          { id: 'linked', title: '链表', html: `<p>单/双/循环链表；插入删除与遍历。</p>` }
        ], refs: [] } },
      { title: '栈与队列', brief: '受限线性表。',
        q: [
          { stem: '栈的特点：', options: ['后进先出', '先进先出', '随机', '双端'], answer: 0, explain: 'LIFO。' },
          { stem: '循环队列解决：', options: ['假溢出', '真溢出', '泄漏', '排序'], answer: 0, explain: '循环。' },
          { stem: '栈的典型应用：', options: ['括号匹配、表达式求值、递归', '只有括号', '只有递归', '排序唯一'], answer: 0, explain: '多应用。' }
        ],
        doc: { lead: '这一章讲栈队列。', sections: [
          { id: 'stack', title: '栈', html: `<p>顺序栈与链栈；应用。</p>` },
          { id: 'queue', title: '队列', html: `<p>循环队列、链队列；BFS。</p>` }
        ], refs: [] } },
      { title: '树与二叉树', brief: '层次结构。',
        q: [
          { stem: '中序遍历顺序：', options: ['左—根—右', '根—左—右', '左—右—根', '右—根—左'], answer: 0, explain: '中序。' },
          { stem: '完全二叉树适合：', options: ['数组存储', '链表', '图', '哈希'], answer: 0, explain: '顺序。' },
          { stem: 'BST 性质：', options: ['左小右大', '左大右小', '无序', '平衡'], answer: 0, explain: 'BST。' }
        ],
        doc: { lead: '这一章讲树。', sections: [
          { id: 'binary', title: '二叉树', html: `<p>性质、遍历；线索化。</p>` },
          { id: 'bst', title: 'BST 与堆', html: `<p>查找插入删除；堆与优先队列；平衡树初步。</p>` }
        ], refs: [] } },
      { title: '图', brief: '网络结构。',
        q: [
          { stem: '邻接矩阵适合：', options: ['稠密图', '稀疏图', '有向唯一', '树'], answer: 0, explain: '稠密。' },
          { stem: 'Dijkstra 用于：', options: ['单源最短路（非负权）', '最小生成树', '拓扑排序', '连通分量'], answer: 0, explain: '最短路。' },
          { stem: '拓扑排序适用于：', options: ['有向无环图', '任意图', '无向图', '树'], answer: 0, explain: 'DAG。' }
        ],
        doc: { lead: '这一章讲图。', sections: [
          { id: 'storage', title: '存储', html: `<p>邻接矩阵、邻接表；DFS/BFS。</p>` },
          { id: 'algorithm', title: '算法', html: `<p>最短路、最小生成树、拓扑排序。</p>` }
        ], refs: [] } },
      { title: '查找', brief: '找东西。',
        q: [
          { stem: '二分查找前提：', options: ['有序', '无序', '链式', '哈希'], answer: 0, explain: '有序。' },
          { stem: '哈希冲突解决：', options: ['开放定址与链地址', '只有开放', '只有链地址', '排序'], answer: 0, explain: '两类。' },
          { stem: 'ASL 衡量：', options: ['查找效率', '内存', '排序速度', '插入速度'], answer: 0, explain: 'ASL。' }
        ],
        doc: { lead: '这一章讲查找。', sections: [
          { id: 'search', title: '查找', html: `<p>顺序、二分、分块；ASL。</p>` },
          { id: 'hash', title: '哈希', html: `<p>哈希函数、冲突处理、装填因子。</p>` }
        ], refs: [] } },
      { title: '排序', brief: '排队。',
        q: [
          { stem: '快排平均复杂度：', options: ['O(n log n)', 'O(n)', 'O(n²)', 'O(log n)'], answer: 0, explain: '平均。' },
          { stem: '稳定排序的例子：', options: ['归并排序', '快速排序', '堆排序', '选择排序'], answer: 0, explain: '稳定。' },
          { stem: '堆排序空间复杂度：', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'], answer: 0, explain: '原地。' }
        ],
        doc: { lead: '这一章讲排序。', sections: [
          { id: 'compare', title: '比较排序', html: `<p>插入、归并、快排、堆排；稳定性。</p>` },
          { id: 'linear', title: '线性排序', html: `<p>计数、桶、基数；适用条件。</p>` }
        ], refs: [] } },
      { title: '复杂度与算法思想', brief: '分析。',
        q: [
          { stem: '大 O 表示：', options: ['渐进上界', '精确时间', '下界', '平均'], answer: 0, explain: '上界。' },
          { stem: '分治步骤：', options: ['分解、解决、合并', '贪心', '回溯', '动态规划'], answer: 0, explain: '分治。' },
          { stem: 'DP 与分治区别：', options: ['子问题是否重叠', '是否递归', '是否分块', '是否排序'], answer: 0, explain: '重叠。' }
        ],
        doc: { lead: '这一章讲思想。', sections: [
          { id: 'complexity', title: '复杂度', html: `<p>时间与空间、渐进记号。</p>` },
          { id: 'paradigm', title: '思想', html: `<p>分治、贪心、动态规划、回溯。</p>` }
        ], refs: [] } },
      { title: '训练与刷题', brief: '练。',
        q: [
          { stem: '刷题有效方式：', options: ['按专题分类、总结模板', '随机刷', '只看答案', '只刷难题'], answer: 0, explain: '专题。' },
          { stem: '写代码前应先：', options: ['想清思路与复杂度', '直接敲', '找模板', '问人'], answer: 0, explain: '思路。' },
          { stem: '边界条件应：', options: ['专门测试（空、单元素、极值）', '忽略', '靠运气', '只测正常'], answer: 0, explain: '边界。' }
        ],
        doc: { lead: '这一章讲训练。', sections: [
          { id: 'topic', title: '专题', html: `<p>链表、树、图、DP；模板与变式。</p>` },
          { id: 'habit', title: '习惯', html: `<p>先想后写、手算样例、检查边界。</p>` }
        ], refs: [] } }
    ] },
    { name: '数据库原理', chapters: [
      { title: '关系模型', brief: '表。',
        q: [
          { stem: '主键的作用：', options: ['唯一标识元组', '加速所有查询', '加密', '备份'], answer: 0, explain: '唯一。' },
          { stem: '外键的作用：', options: ['维护参照完整性', '加速', '加密', '排序'], answer: 0, explain: '参照。' },
          { stem: '关系代数基本运算：', options: ['选择、投影、连接、并差', '只有选择', '只有投影', '只有连接'], answer: 0, explain: '基本运算。' }
        ],
        doc: { lead: '这一章讲模型。', sections: [
          { id: 'relation', title: '关系', html: `<p>元组、属性、键；完整性约束。</p>` },
          { id: 'algebra', title: '关系代数', html: `<p>选择投影连接除；等价变换。</p>` }
        ], refs: [] } },
      { title: 'SQL', brief: '查询语言。',
        q: [
          { stem: 'WHERE 与 HAVING：', options: ['分组前 vs 分组后过滤', '相同', '都分组后', '都分组前'], answer: 0, explain: '时机。' },
          { stem: 'JOIN 类型：', options: ['内、左、右、全外', '只有内', '只有左', '只有外'], answer: 0, explain: '多种。' },
          { stem: '窗口函数的作用：', options: ['分组内排序聚合而不合并行', '只排序', '只聚合', '只连接'], answer: 0, explain: '窗口。' }
        ],
        doc: { lead: '这一章讲 SQL。', sections: [
          { id: 'ddl', title: 'DDL/DML', html: `<p>建表约束、增删改；事务控制。</p>` },
          { id: 'query', title: '查询', html: `<p>连接、聚合、子查询、窗口函数；执行计划。</p>` }
        ], refs: [] } },
      { title: '规范化', brief: '减少冗余。',
        q: [
          { stem: '1NF 要求：', options: ['属性不可再分', '消除部分依赖', '消除传递依赖', '无冗余'], answer: 0, explain: '1NF。' },
          { stem: '2NF 消除：', options: ['部分依赖', '传递依赖', '多值依赖', '连接依赖'], answer: 0, explain: '2NF。' },
          { stem: '3NF 消除：', options: ['传递依赖', '部分依赖', '多值依赖', '连接依赖'], answer: 0, explain: '3NF。' }
        ],
        doc: { lead: '这一章讲范式。', sections: [
          { id: 'fd', title: '函数依赖', html: `<p>候选键、闭包、最小依赖集；公理。</p>` },
          { id: 'normal', title: '范式', html: `<p>1NF–3NF、BCNF；无损分解与保持依赖。</p>` }
        ], refs: [] } },
      { title: '索引与存储', brief: '快。',
        q: [
          { stem: 'B+ 树索引适合：', options: ['范围与等值查询', '只有等值', '只有范围', '全文'], answer: 0, explain: 'B+ 树。' },
          { stem: '索引的代价：', options: ['空间与写入开销', '查询变慢', '数据不一致', '无法回滚'], answer: 0, explain: '代价。' },
          { stem: '最左前缀原则用于：', options: ['联合索引的有效使用', '主键', '外键', '视图'], answer: 0, explain: '最左。' }
        ],
        doc: { lead: '这一章讲索引。', sections: [
          { id: 'index', title: '索引', html: `<p>B+ 树、哈希；覆盖索引与最左前缀。</p>` },
          { id: 'storage', title: '存储', html: `<p>页与行格式、缓冲池；聚簇与非聚簇。</p>` }
        ], refs: [] } },
      { title: '事务与并发', brief: '一致并发。',
        q: [
          { stem: 'ACID 中隔离性指：', options: ['并发事务互不干扰', '不丢失', '满足约束', '提交持久'], answer: 0, explain: '隔离。' },
          { stem: '隔离级别从低到高：', options: ['读未提交、读已提交、可重复读、串行化', '串行化最低', '只有两级', '无级别'], answer: 0, explain: '四级。' },
          { stem: 'MVCC 的作用：', options: ['读写互不阻塞、提高并发', '加锁唯一', '加密', '压缩'], answer: 0, explain: 'MVCC。' }
        ],
        doc: { lead: '这一章讲事务。', sections: [
          { id: 'acid', title: 'ACID', html: `<p>原子、一致、隔离、持久；日志与恢复。</p>` },
          { id: 'concurrency', title: '并发', html: `<p>锁、MVCC、隔离级别；死锁。</p>` }
        ], refs: [] } },
      { title: '数据库设计', brief: '从需求到表。',
        q: [
          { stem: 'E-R 图的作用：', options: ['概念建模', '物理存储', '查询优化', '备份'], answer: 0, explain: '概念。' },
          { stem: 'E-R 转关系：', options: ['实体转表、联系按基数处理', '全部转表', '只转实体', '只转联系'], answer: 0, explain: '转换。' },
          { stem: '反规范化的目的：', options: ['提升查询性能', '减少冗余', '减少索引', '简化 SQL'], answer: 0, explain: '权衡。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'er', title: 'E-R', html: `<p>实体、属性、联系、基数；弱实体。</p>` },
          { id: 'convert', title: '转换', html: `<p>模式转换、反规范化；数据字典。</p>` }
        ], refs: [] } },
      { title: '分布式与 NoSQL', brief: '大规模。',
        q: [
          { stem: 'CAP 定理说明：', options: ['一致性、可用性、分区容忍不可兼得', '三者兼得', '只有两概念', '无限制'], answer: 0, explain: 'CAP。' },
          { stem: 'NoSQL 类型：', options: ['键值、文档、列族、图', '只有键值', '只有文档', '只有图'], answer: 0, explain: '多种。' },
          { stem: '最终一致性指：', options: ['副本最终收敛', '强一致', '不保证', '无副本'], answer: 0, explain: '最终。' }
        ],
        doc: { lead: '这一章讲分布式。', sections: [
          { id: 'cap', title: 'CAP 与 BASE', html: `<p>一致性权衡；分片与复制。</p>` },
          { id: 'nosql', title: 'NoSQL', html: `<p>键值、文档、列族、图；选型。</p>` }
        ], refs: [] } },
      { title: '数据库实践', brief: '动手。',
        q: [
          { stem: '慢查询优化第一步：', options: ['看执行计划', '加索引', '换数据库', '加机器'], answer: 0, explain: '执行计划。' },
          { stem: '备份策略应考虑：', options: ['RPO 与 RTO', '只有成本', '只有速度', '只有容量'], answer: 0, explain: 'RPO/RTO。' },
          { stem: '安全措施包括：', options: ['最小权限、审计、加密', '只有密码', '只有防火墙', '只有备份'], answer: 0, explain: '多层。' }
        ],
        doc: { lead: '这一章讲实践。', sections: [
          { id: 'tuning', title: '调优', html: `<p>执行计划、索引设计、SQL 改写。</p>` },
          { id: 'ops', title: '运维', html: `<p>备份恢复、主从、监控；权限审计。</p>` }
        ], refs: [] } }
    ] },
    { name: '管理信息系统', chapters: [
      { title: '信息系统概述', brief: '是什么。',
        q: [
          { stem: '信息系统的基本组成是：', options: ['人、硬件、软件、数据、流程', '只有硬件', '只有软件', '只有数据'], answer: 0, explain: '五要素。' },
          { stem: '信息系统的作用是：', options: ['支持决策、运营与管理', '只做记账', '只做报表', '只做存储'], answer: 0, explain: '支持。' },
          { stem: '数据与信息的区别：', options: ['信息是加工后有意义的数据', '相同', '数据更有意义', '信息更原始'], answer: 0, explain: '加工。' }
        ],
        doc: { lead: '这一章讲概述。', sections: [
          { id: 'concept', title: '概念', html: `<p>数据、信息、知识；系统组成与功能。</p>` },
          { id: 'role', title: '作用', html: `<p>支持运营与决策；竞争优势。</p>` }
        ], refs: [] } },
      { title: '信息系统类型', brief: '分层。',
        q: [
          { stem: 'TPS、MIS、DSS、EIS 的层次由低到高是：', options: ['事务处理—管理信息—决策支持—高管支持', '高管—决策—管理—事务', '任意', '只有两层'], answer: 0, explain: '层次。' },
          { stem: 'DSS 的特点是：', options: ['支持半结构化决策、交互分析', '只做事务', '只做报表', '只做存储'], answer: 0, explain: 'DSS。' },
          { stem: 'ERP 的核心是：', options: ['集成企业资源与流程', '只做财务', '只做库存', '只做人事'], answer: 0, explain: 'ERP。' }
        ],
        doc: { lead: '这一章讲类型。', sections: [
          { id: 'level', title: '层次', html: `<p>TPS、MIS、DSS、EIS；功能与用户。</p>` },
          { id: 'enterprise', title: '企业系统', html: `<p>ERP、CRM、SCM、BI；集成与数据。</p>` }
        ], refs: [] } },
      { title: '信息系统战略', brief: '为什么建。',
        q: [
          { stem: '信息系统战略应与：', options: ['业务战略对齐', '技术趋势对齐唯一', '预算对齐', '供应商建议'], answer: 0, explain: '对齐。' },
          { stem: 'IT 治理的作用是：', options: ['确保 IT 投入与风险可控', '只做采购', '只做运维', '只做开发'], answer: 0, explain: '治理。' },
          { stem: '信息化投资评估应看：', options: ['成本、收益与风险', '只看成本', '只看收益', '只看技术'], answer: 0, explain: '综合。' }
        ],
        doc: { lead: '这一章讲战略。', sections: [
          { id: 'alignment', title: '对齐', html: `<p>业务与 IT 战略匹配；组合管理。</p>` },
          { id: 'governance', title: '治理', html: `<p>IT 治理框架、投资评估；ROI 与风险。</p>` }
        ], refs: [] } },
      { title: '业务流程与信息化', brief: '流程。',
        q: [
          { stem: 'BPR 与 BPI 的区别是：', options: ['根本性重构 vs 渐进改进', '相同', 'BPI 更激进', 'BPR 更温和'], answer: 0, explain: '程度。' },
          { stem: '流程建模的常用方法是：', options: ['流程图、BPMN', '只有流程图', '只有 BPMN', '只做文字'], answer: 0, explain: '建模。' },
          { stem: '信息化失败常见原因：', options: ['需求不清、流程未理顺、变革阻力', '只有技术', '只有预算', '只有供应商'], answer: 0, explain: '多因。' }
        ],
        doc: { lead: '这一章讲流程。', sections: [
          { id: 'modeling', title: '建模', html: `<p>流程图、BPMN；AS-IS 与 TO-BE。</p>` },
          { id: 'improve', title: '优化', html: `<p>BPR/BPI、瓶颈识别；变革管理。</p>` }
        ], refs: [] } },
      { title: '系统开发方法', brief: '怎么建。',
        q: [
          { stem: '瀑布与敏捷的区别：', options: ['阶段式 vs 迭代式', '成本', '语言', '规模'], answer: 0, explain: '迭代。' },
          { stem: '原型法适用于：', options: ['需求不明确时快速验证', '需求完全明确', '大型遗留系统', '无用户参与'], answer: 0, explain: '原型。' },
          { stem: '外包与自研的权衡取决于：', options: ['核心能力、成本与风险', '只有成本', '只有技术', '只有规模'], answer: 0, explain: '权衡。' }
        ],
        doc: { lead: '这一章讲开发。', sections: [
          { id: 'method', title: '方法', html: `<p>瀑布、原型、敏捷、迭代；适用场景。</p>` },
          { id: 'makeorbuy', title: '自研与外购', html: `<p>核心能力判断；SaaS 与定制。</p>` }
        ], refs: [] } },
      { title: '数据管理与商务智能', brief: '用数据。',
        q: [
          { stem: '数据仓库与数据库的区别是：', options: ['面向分析与集成 vs 面向事务', '规模', '厂商', '语言'], answer: 0, explain: '分析。' },
          { stem: 'ETL 的作用是：', options: ['抽取、转换、加载到数据仓库', '加密', '备份', '压缩'], answer: 0, explain: 'ETL。' },
          { stem: 'BI 的价值是：', options: ['支持报表、分析与决策', '只做报表', '只做存储', '只做采集'], answer: 0, explain: 'BI。' }
        ],
        doc: { lead: '这一章讲数据。', sections: [
          { id: 'warehouse', title: '数据仓库', html: `<p>ODS、DW、DM；ETL 与建模（星型/雪花）。</p>` },
          { id: 'bi', title: 'BI', html: `<p>报表、仪表盘、OLAP；自助分析。</p>` }
        ], refs: [] } },
      { title: '信息系统安全与伦理', brief: '风险。',
        q: [
          { stem: '信息安全的 CIA 三要素是：', options: ['机密性、完整性、可用性', '只有机密性', '只有完整性', '只有可用性'], answer: 0, explain: 'CIA。' },
          { stem: '常见威胁包括：', options: ['病毒、钓鱼、内部泄露、DDoS', '只有病毒', '只有钓鱼', '只有 DDoS'], answer: 0, explain: '多种。' },
          { stem: '数据合规要求包括：', options: ['最小必要、授权同意、可追溯', '只有同意', '只有最小必要', '无要求'], answer: 0, explain: '合规。' }
        ],
        doc: { lead: '这一章讲安全。', sections: [
          { id: 'security', title: '安全', html: `<p>CIA、访问控制、加密；应急响应。</p>` },
          { id: 'ethics', title: '伦理与合规', html: `<p>隐私保护、数据治理；法规要求。</p>` }
        ], refs: [] } },
      { title: '信息系统案例', brief: '综合。',
        q: [
          { stem: '信息系统案例分析应关注：', options: ['业务问题、方案与成效', '只有技术', '只有预算', '只有供应商'], answer: 0, explain: '综合。' },
          { stem: '实施成功的关键是：', options: ['高层支持、流程配套、用户培训', '只有技术', '只有预算', '只有培训'], answer: 0, explain: '多因素。' },
          { stem: '评估应看：', options: ['效率提升、决策改善与 ROI', '只有成本', '只有上线', '只有功能'], answer: 0, explain: '成效。' }
        ],
        doc: { lead: '这一章讲案例。', sections: [
          { id: 'framing', title: '分析框架', html: `<p>业务问题、方案比较、实施路径。</p>` },
          { id: 'case', title: '案例', html: `<p>ERP/BI/电商系统案例；经验与教训。</p>` }
        ], refs: [] } }
    ] },
    { name: '运筹学', chapters: [
      { title: '线性规划', brief: '优化入门。',
        q: [
          { stem: '线性规划的标准形要求：', options: ['约束为等式、变量非负', '约束为不等式', '变量任意', '无约束'], answer: 0, explain: '标准形。' },
          { stem: '单纯形法的基本思想：', options: ['沿可行域顶点迭代改进', '随机搜索', '枚举', '贪心'], answer: 0, explain: '单纯形。' },
          { stem: '对偶问题的经济含义：', options: ['资源的影子价格', '最优解', '成本', '产量'], answer: 0, explain: '影子价格。' }
        ],
        doc: { lead: '这一章讲线性规划。', sections: [
          { id: 'model', title: '建模', html: `<p>决策变量、目标函数、约束；标准形。</p>` },
          { id: 'simplex', title: '求解', html: `<p>单纯形法、对偶与灵敏度分析。</p>` }
        ], refs: [] } },
      { title: '运输与指派', brief: '分配。',
        q: [
          { stem: '运输问题的求解方法包括：', options: ['表上作业法、位势法', '只有表上作业', '只有位势法', '单纯形唯一'], answer: 0, explain: '多种。' },
          { stem: '指派问题可用：', options: ['匈牙利法', '单纯形唯一', '贪心唯一', '枚举唯一'], answer: 0, explain: '匈牙利。' },
          { stem: '产销平衡的处理：', options: ['虚设产地或销地', '忽略', '随机分配', '加价'], answer: 0, explain: '虚设。' }
        ],
        doc: { lead: '这一章讲运输。', sections: [
          { id: 'transport', title: '运输', html: `<p>初始解（最小元素/西北角）、最优性检验。</p>` },
          { id: 'assignment', title: '指派', html: `<p>匈牙利法；非平衡问题处理。</p>` }
        ], refs: [] } },
      { title: '整数规划', brief: '必须整数。',
        q: [
          { stem: '分支定界法的思想是：', options: ['分割可行域并剪枝', '随机', '枚举唯一', '贪心'], answer: 0, explain: '分支定界。' },
          { stem: '0-1 规划常用于：', options: ['选址、指派、选择问题', '连续生产', '运输唯一', '排序'], answer: 0, explain: '0-1。' },
          { stem: '整数规划松弛后：', options: ['提供界用于剪枝', '即为最优解', '无意义', '不可解'], answer: 0, explain: '界。' }
        ],
        doc: { lead: '这一章讲整数。', sections: [
          { id: 'branch', title: '分支定界', html: `<p>松弛、分支、剪枝；求解效率。</p>` },
          { id: 'binary', title: '0-1 规划', html: `<p>建模技巧；选址与指派应用。</p>` }
        ], refs: [] } },
      { title: '图与网络优化', brief: '网络。',
        q: [
          { stem: '最小生成树算法包括：', options: ['Kruskal 与 Prim', '只有 Kruskal', '只有 Prim', 'Dijkstra'], answer: 0, explain: '两种。' },
          { stem: '最大流的增广路思想是：', options: ['不断找增广路增加流量', '随机分配', '枚举', '贪心唯一'], answer: 0, explain: '增广路。' },
          { stem: '网络计划（CPM）的关键是：', options: ['关键路径决定工期', '成本', '资源', '质量'], answer: 0, explain: '关键路径。' }
        ],
        doc: { lead: '这一章讲网络。', sections: [
          { id: 'tree', title: '树与最短路', html: `<p>最小生成树、最短路；算法比较。</p>` },
          { id: 'flow', title: '流与计划', html: `<p>最大流最小割；CPM/PERT。</p>` }
        ], refs: [] } },
      { title: '动态规划', brief: '分阶段。',
        q: [
          { stem: 'DP 的三要素是：', options: ['阶段、状态、决策', '只有阶段', '只有状态', '只有决策'], answer: 0, explain: '三要素。' },
          { stem: '最优性原理指：', options: ['最优策略的子策略也最优', '任意策略最优', '贪心最优', '无原理'], answer: 0, explain: '最优性。' },
          { stem: 'DP 与贪心的区别：', options: ['是否考虑全局最优（状态转移）', '是否分阶段', '是否用表', '无区别'], answer: 0, explain: '全局。' }
        ],
        doc: { lead: '这一章讲 DP。', sections: [
          { id: 'model', title: '建模', html: `<p>状态转移方程、边界；背包与资源分配。</p>` },
          { id: 'application', title: '应用', html: `<p>库存、设备更新、最短路径；计算复杂度。</p>` }
        ], refs: [] } },
      { title: '排队与库存', brief: '随机系统。',
        q: [
          { stem: 'M/M/1 队列利用率：', options: ['λ/μ', 'μ/λ', 'λμ', 'λ+μ'], answer: 0, explain: 'ρ。' },
          { stem: 'EOQ 模型的目标是：', options: ['最小化订货与持有成本之和', '最大化库存', '最小化库存唯一', '最大化订货'], answer: 0, explain: 'EOQ。' },
          { stem: '安全库存的作用：', options: ['应对需求与提前期不确定性', '降成本', '提高产量', '减少品种'], answer: 0, explain: '安全库存。' }
        ],
        doc: { lead: '这一章讲排队。', sections: [
          { id: 'queue', title: '排队论', html: `<p>到达率、服务率；队长与等待时间。</p>` },
          { id: 'inventory', title: '库存', html: `<p>EOQ、报童模型；服务水平。</p>` }
        ], refs: [] } },
      { title: '决策分析', brief: '不确定下决策。',
        q: [
          { stem: '不确定型决策准则包括：', options: ['乐观、悲观、后悔值、等可能', '只有乐观', '只有悲观', '只有后悔值'], answer: 0, explain: '多准则。' },
          { stem: '风险型决策用：', options: ['期望值准则与决策树', '只有期望值', '只有决策树', '凭直觉'], answer: 0, explain: '期望。' },
          { stem: '信息价值指：', options: ['获得信息后期望收益的增量', '信息成本', '数据量', '存储'], answer: 0, explain: '信息价值。' }
        ],
        doc: { lead: '这一章讲决策。', sections: [
          { id: 'criteria', title: '准则', html: `<p>乐观、悲观、后悔值、等可能；决策树。</p>` },
          { id: 'value', title: '信息价值', html: `<p>完全信息价值；贝叶斯决策。</p>` }
        ], refs: [] } },
      { title: '运筹软件与建模', brief: '动手。',
        q: [
          { stem: '常用求解工具包括：', options: ['Excel 规划求解、Python/Lingo', '只有 Excel', '只有 Lingo', '手算唯一'], answer: 0, explain: '多种。' },
          { stem: '建模的关键是：', options: ['准确抽象变量与约束', '算得快', '软件高级', '数据多'], answer: 0, explain: '建模。' },
          { stem: '结果应做：', options: ['灵敏度分析与验证', '直接用', '只看数值', '忽略假设'], answer: 0, explain: '灵敏度。' }
        ],
        doc: { lead: '这一章讲建模。', sections: [
          { id: 'tools', title: '工具', html: `<p>Excel Solver、Python（PuLP/scipy）、Lingo。</p>` },
          { id: 'practice', title: '实践', html: `<p>建模步骤、灵敏度分析；案例求解。</p>` }
        ], refs: [] } }
    ] },
    { name: '系统分析与设计', chapters: [
      { title: '系统分析概述', brief: '做什么。',
        q: [
          { stem: '系统分析的核心是：', options: ['理解需求并定义系统做什么', '写代码', '部署', '测试'], answer: 0, explain: '需求。' },
          { stem: '可行性分析包括：', options: ['技术、经济、操作、进度', '只有技术', '只有经济', '只有操作'], answer: 0, explain: '多方面。' },
          { stem: '利益相关者分析的作用：', options: ['识别需求与影响', '装饰', '算成本', '定预算'], answer: 0, explain: '相关者。' }
        ],
        doc: { lead: '这一章讲概述。', sections: [
          { id: 'role', title: '角色', html: `<p>系统分析师的职责；系统开发生命周期。</p>` },
          { id: 'feasibility', title: '可行性', html: `<p>技术经济操作进度；相关者分析。</p>` }
        ], refs: [] } },
      { title: '需求获取与分析', brief: '问清楚。',
        q: [
          { stem: '需求获取的方法包括：', options: ['访谈、问卷、观察、原型、文档分析', '只有访谈', '只有问卷', '只有原型'], answer: 0, explain: '多种。' },
          { stem: '功能需求与非功能需求：', options: ['做什么 vs 做得怎样', '重要程度', '是否文档', '是否可测'], answer: 0, explain: '两类。' },
          { stem: '需求优先级排序的方法包括：', options: ['MoSCoW、价值/成本矩阵', '只有 MoSCoW', '只有矩阵', '随机'], answer: 0, explain: '排序。' }
        ],
        doc: { lead: '这一章讲需求。', sections: [
          { id: 'elicitation', title: '获取', html: `<p>方法选择与技巧；需求工作坊。</p>` },
          { id: 'spec', title: '规格', html: `<p>用例、用户故事、需求规格说明书；优先级。</p>` }
        ], refs: [] } },
      { title: '结构化分析', brief: '传统方法。',
        q: [
          { stem: '数据流图（DFD）的四要素是：', options: ['外部实体、处理、数据流、数据存储', '只有处理', '只有数据流', '只有存储'], answer: 0, explain: '四要素。' },
          { stem: '数据字典的作用是：', options: ['定义数据流与存储的组成', '画图', '写代码', '做测试'], answer: 0, explain: '字典。' },
          { stem: 'DFD 分层的作用是：', options: ['自顶向下逐步细化', '增加复杂度', '装饰', '减少沟通'], answer: 0, explain: '分层。' }
        ],
        doc: { lead: '这一章讲结构化。', sections: [
          { id: 'dfd', title: 'DFD', html: `<p>四要素、分层与平衡；与流程图的区别。</p>` },
          { id: 'dictionary', title: '数据字典', html: `<p>数据项、数据结构、数据流定义。</p>` }
        ], refs: [] } },
      { title: '面向对象分析', brief: 'OO。',
        q: [
          { stem: 'UML 中描述对象交互的图是：', options: ['时序图与协作图', '类图', '用例图', '部署图'], answer: 0, explain: '交互图。' },
          { stem: '类之间的关系包括：', options: ['关联、聚合、组合、继承、依赖', '只有关联', '只有继承', '只有依赖'], answer: 0, explain: '多关系。' },
          { stem: '用例图的作用：', options: ['描述参与者与系统功能', '描述类结构', '描述部署', '描述时序'], answer: 0, explain: '用例。' }
        ],
        doc: { lead: '这一章讲 OO。', sections: [
          { id: 'uml', title: 'UML', html: `<p>用例、类、时序、状态、活动图；建模要点。</p>` },
          { id: 'model', title: '建模', html: `<p>识别类与职责、关系；领域模型。</p>` }
        ], refs: [] } },
      { title: '系统设计', brief: '怎么实现。',
        q: [
          { stem: '架构设计的常见风格：', options: ['分层、C/S、B/S、微服务', '只有分层', '只有 B/S', '只有微服务'], answer: 0, explain: '多种。' },
          { stem: '高内聚低耦合的目标是：', options: ['提高可维护性与复用', '减少代码', '加快运行', '减少文档'], answer: 0, explain: '设计目标。' },
          { stem: '数据库设计应：', options: ['先概念后逻辑再物理', '直接建表', '只做 E-R', '只做索引'], answer: 0, explain: '三步。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'architecture', title: '架构', html: `<p>分层与分层依赖、B/S 与微服务；非功能设计。</p>` },
          { id: 'database', title: '数据库设计', html: `<p>概念/逻辑/物理设计；范式与性能权衡。</p>` }
        ], refs: [] } },
      { title: '界面与交互设计', brief: '好用。',
        q: [
          { stem: '界面设计的原则包括：', options: ['一致性、反馈、简洁、容错', '只有美观', '只有一致', '只有简洁'], answer: 0, explain: '多原则。' },
          { stem: '原型的作用是：', options: ['可视化需求并验证可用性', '替代开发', '装饰', '算成本'], answer: 0, explain: '原型。' },
          { stem: '可用性测试的价值：', options: ['发现真实使用问题', '装饰', '考核', '替代设计'], answer: 0, explain: '测试。' }
        ],
        doc: { lead: '这一章讲界面。', sections: [
          { id: 'principle', title: '原则', html: `<p>尼尔森十原则；一致性与反馈。</p>` },
          { id: 'prototype', title: '原型与测试', html: `<p>低保真/高保真原型；可用性测试方法。</p>` }
        ], refs: [] } },
      { title: '实施与运维', brief: '上线。',
        q: [
          { stem: '系统切换方式包括：', options: ['直接、并行、分阶段、试点', '只有直接', '只有并行', '只有试点'], answer: 0, explain: '多种。' },
          { stem: '数据迁移的关键是：', options: ['清洗、映射与验证', '只搬数据', '只写脚本', '只备份'], answer: 0, explain: '迁移。' },
          { stem: '运维的核心目标是：', options: ['稳定、可用与持续改进', '只修故障', '只监控', '只备份'], answer: 0, explain: '运维。' }
        ],
        doc: { lead: '这一章讲实施。', sections: [
          { id: 'deploy', title: '部署', html: `<p>切换策略、数据迁移、培训与推广。</p>` },
          { id: 'ops', title: '运维', html: `<p>监控告警、变更管理；持续改进。</p>` }
        ], refs: [] } },
      { title: '系统分析课程设计', brief: '做一套。',
        q: [
          { stem: '课程设计的交付物通常包括：', options: ['需求规格、设计文档、原型', '只有代码', '只有文档', '只有原型'], answer: 0, explain: '完整。' },
          { stem: '文档编写应：', options: ['面向读者、结构清晰、可追溯', '越长越好', '只有图', '省略'], answer: 0, explain: '文档。' },
          { stem: '评审的价值是：', options: ['尽早发现缺陷与偏差', '装饰', '考核', '拖延'], answer: 0, explain: '评审。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'deliver', title: '交付', html: `<p>SRS、设计说明书、原型与测试计划。</p>` },
          { id: 'review', title: '评审', html: `<p>需求评审、设计评审；问题跟踪。</p>` }
        ], refs: [] } }
    ] },
    { name: '数据挖掘与商务智能', chapters: [
      { title: '数据挖掘概述', brief: '从数据到知识。',
        q: [
          { stem: '数据挖掘与统计学的区别是：', options: ['面向大规模数据与预测', '完全相同', '只看描述', '不做推断'], answer: 0, explain: '规模。' },
          { stem: 'CRISP-DM 的步骤包括：', options: ['业务理解—数据理解—准备—建模—评估—部署', '只有建模', '只有评估', '只有部署'], answer: 0, explain: '流程。' },
          { stem: '有监督与无监督的区别：', options: ['是否有标签', '是否用数据', '是否有算法', '是否可视化'], answer: 0, explain: '标签。' }
        ],
        doc: { lead: '这一章讲概述。', sections: [
          { id: 'process', title: '流程', html: `<p>CRISP-DM、数据准备；问题定义。</p>` },
          { id: 'type', title: '类型', html: `<p>分类、回归、聚类、关联、降维。</p>` }
        ], refs: [] } },
      { title: '数据预处理', brief: '洗干净。',
        q: [
          { stem: '缺失值处理方法包括：', options: ['删除、均值/中位数填充、模型预测', '只有删除', '只有均值', '只有模型'], answer: 0, explain: '多种。' },
          { stem: '标准化与归一化的区别：', options: ['是否缩放到固定区间', '相同', '标准化到 [0,1]', '归一化到均值 0'], answer: 0, explain: '区间。' },
          { stem: '异常值处理应：', options: ['先判断成因再处理', '一律删除', '一律保留', '忽略'], answer: 0, explain: '判断。' }
        ],
        doc: { lead: '这一章讲预处理。', sections: [
          { id: 'clean', title: '清洗', html: `<p>缺失、异常、重复；编码与变换。</p>` },
          { id: 'transform', title: '变换', html: `<p>标准化、归一化、离散化；特征构造。</p>` }
        ], refs: [] } },
      { title: '分类与回归', brief: '预测。',
        q: [
          { stem: '过拟合的表现是：', options: ['训练好、测试差', '训练差测试好', '都好', '都差'], answer: 0, explain: '过拟合。' },
          { stem: '评估分类模型的指标包括：', options: ['准确率、精确率、召回率、F1、AUC', '只有准确率', '只有精确率', '只有 AUC'], answer: 0, explain: '多指标。' },
          { stem: '交叉验证的作用：', options: ['更稳健地评估泛化能力', '加快训练', '增加数据', '减少特征'], answer: 0, explain: 'CV。' }
        ],
        doc: { lead: '这一章讲分类。', sections: [
          { id: 'model', title: '模型', html: `<p>决策树、逻辑回归、KNN、集成学习。</p>` },
          { id: 'evaluate', title: '评估', html: `<p>混淆矩阵、ROC/AUC；交叉验证与调参。</p>` }
        ], refs: [] } },
      { title: '聚类与关联', brief: '发现结构。',
        q: [
          { stem: 'K-means 的核心是：', options: ['最小化类内平方和', '最大化类间', '随机分组', '层次合并'], answer: 0, explain: 'K-means。' },
          { stem: '关联规则的指标包括：', options: ['支持度、置信度、提升度', '只有支持度', '只有置信度', '只有提升度'], answer: 0, explain: '三指标。' },
          { stem: '聚类的难点是：', options: ['无标签、依赖距离与 K 选择', '计算慢', '数据少', '维度低'], answer: 0, explain: '无标签。' }
        ],
        doc: { lead: '这一章讲聚类。', sections: [
          { id: 'cluster', title: '聚类', html: `<p>K-means、层次、DBSCAN；轮廓系数。</p>` },
          { id: 'assoc', title: '关联', html: `<p>Apriori、FP-Growth；购物篮分析。</p>` }
        ], refs: [] } },
      { title: '商务智能应用', brief: '业务价值。',
        q: [
          { stem: 'BI 与数据挖掘的区别：', options: ['描述现状 vs 预测与发现', '完全相同', 'BI 更预测', '挖掘只描述'], answer: 0, explain: '定位。' },
          { stem: '用户画像的构建依据：', options: ['行为、交易与属性数据', '只有人口属性', '只有交易', '只有行为'], answer: 0, explain: '多源。' },
          { stem: '精准营销的关键：', options: ['人群分层与触达策略匹配', '只做投放', '只做优惠', '只做推送'], answer: 0, explain: '分层。' }
        ],
        doc: { lead: '这一章讲应用。', sections: [
          { id: 'bi', title: 'BI 应用', html: `<p>报表、仪表盘、OLAP；指标体系。</p>` },
          { id: 'marketing', title: '营销应用', html: `<p>用户画像、推荐、流失预警；A/B 测试。</p>` }
        ], refs: [] } },
      { title: '数据可视化', brief: '讲清楚。',
        q: [
          { stem: '图表选择的原则是：', options: ['按数据关系与目的选择', '只看美观', '越复杂越好', '只用饼图'], answer: 0, explain: '匹配。' },
          { stem: '误导性图表的常见做法：', options: ['截断坐标轴、滥用双轴', '标注来源', '使用合适比例', '清晰标题'], answer: 0, explain: '误导。' },
          { stem: '仪表盘设计应：', options: ['聚焦关键指标、层级清晰', '放满图表', '颜色越多越好', '无标题'], answer: 0, explain: '聚焦。' }
        ],
        doc: { lead: '这一章讲可视化。', sections: [
          { id: 'chart', title: '图表', html: `<p>比较、分布、构成、关系；选择原则。</p>` },
          { id: 'dashboard', title: '仪表盘', html: `<p>布局、指标层级、交互；故事化表达。</p>` }
        ], refs: [] } },
      { title: '数据治理与伦理', brief: '规矩。',
        q: [
          { stem: '数据治理的内容包括：', options: ['标准、质量、安全、生命周期', '只有标准', '只有质量', '只有安全'], answer: 0, explain: '多内容。' },
          { stem: '算法偏见来源于：', options: ['数据偏差与目标设计', '只有算力', '只有模型', '无来源'], answer: 0, explain: '数据。' },
          { stem: '数据伦理要求：', options: ['知情同意、最小必要、可解释', '只有同意', '只有必要', '无要求'], answer: 0, explain: '伦理。' }
        ],
        doc: { lead: '这一章讲治理。', sections: [
          { id: 'governance', title: '治理', html: `<p>数据标准、质量、主数据；生命周期管理。</p>` },
          { id: 'ethics', title: '伦理', html: `<p>隐私、偏见、可解释性；合规要求。</p>` }
        ], refs: [] } },
      { title: '数据挖掘实战', brief: '做一遍。',
        q: [
          { stem: '项目的第一步是：', options: ['明确业务问题与评价指标', '选模型', '调参', '画图'], answer: 0, explain: '问题。' },
          { stem: '建模流程应：', options: ['基线—迭代—评估—上线', '一次到位', '只调参', '只看准确率'], answer: 0, explain: '迭代。' },
          { stem: '模型上线后应：', options: ['监控效果与漂移、定期更新', '不管', '只备份', '只归档'], answer: 0, explain: '监控。' }
        ],
        doc: { lead: '这一章讲实战。', sections: [
          { id: 'project', title: '项目', html: `<p>问题定义、特征工程、建模与评估全流程。</p>` },
          { id: 'deploy', title: '上线', html: `<p>模型部署、监控漂移；AB 测试与迭代。</p>` }
        ], refs: [] } }
    ] },
    { name: '企业资源计划', chapters: [
      { title: 'ERP 概述', brief: '是什么。',
        q: [
          { stem: 'ERP 的核心思想是：', options: ['集成企业资源、统一数据与流程', '只做财务', '只做库存', '只做人事'], answer: 0, explain: '集成。' },
          { stem: 'ERP 的发展阶段包括：', options: ['MRP—MRPII—ERP', '只有 MRP', '只有 ERP', '只有 MRPII'], answer: 0, explain: '演进。' },
          { stem: 'ERP 的主要模块包括：', options: ['财务、采购、生产、销售、库存、人力', '只有财务', '只有生产', '只有销售'], answer: 0, explain: '多模块。' }
        ],
        doc: { lead: '这一章讲概述。', sections: [
          { id: 'concept', title: '概念', html: `<p>ERP 定义、演进（MRP/MRPII）；集成思想。</p>` },
          { id: 'module', title: '模块', html: `<p>财务、供应链、生产、销售、HR；主数据。</p>` }
        ], refs: [] } },
      { title: '主数据与编码', brief: '基础数据。',
        q: [
          { stem: '主数据的特点是：', options: ['跨系统共享、相对稳定', '频繁变化', '只在一个系统用', '无需治理'], answer: 0, explain: '主数据。' },
          { stem: '物料编码的原则是：', options: ['唯一、可扩展、有意义', '越短越好', '随机', '包含价格'], answer: 0, explain: '编码。' },
          { stem: 'BOM 的作用是：', options: ['描述产品结构与物料关系', '描述工艺', '描述成本', '描述销售'], answer: 0, explain: 'BOM。' }
        ],
        doc: { lead: '这一章讲主数据。', sections: [
          { id: 'master', title: '主数据', html: `<p>物料、客户、供应商、BOM；数据治理。</p>` },
          { id: 'code', title: '编码', html: `<p>编码规则、分类；与业务流程关系。</p>` }
        ], refs: [] } },
      { title: '销售与采购', brief: '两头。',
        q: [
          { stem: '销售订单触发：', options: ['生产计划与采购需求', '只触发开票', '只触发发货', '无影响'], answer: 0, explain: '需求驱动。' },
          { stem: '采购流程的关键控制点：', options: ['请购、审批、比价、验收、付款', '只有审批', '只有验收', '只有付款'], answer: 0, explain: '多控制。' },
          { stem: '供应商管理的内容包括：', options: ['准入、评价、分级、淘汰', '只有准入', '只有评价', '只有淘汰'], answer: 0, explain: '全周期。' }
        ],
        doc: { lead: '这一章讲购销。', sections: [
          { id: 'sales', title: '销售', html: `<p>报价、订单、发货、开票；ATP 可用量承诺。</p>` },
          { id: 'purchase', title: '采购', html: `<p>请购与审批、比价、收货与三单匹配。</p>` }
        ], refs: [] } },
      { title: '生产计划与控制', brief: '造什么。',
        q: [
          { stem: 'MRP 的输入包括：', options: ['主生产计划、BOM、库存', '只有 MPS', '只有 BOM', '只有库存'], answer: 0, explain: '三输入。' },
          { stem: 'MRP 的输出是：', options: ['采购计划与生产订单', '财务报表', '销售订单', '工资单'], answer: 0, explain: '计划。' },
          { stem: '能力需求计划的作用是：', options: ['校验计划在生产能力上可行', '算成本', '算工资', '算利润'], answer: 0, explain: 'CRP。' }
        ],
        doc: { lead: '这一章讲生产。', sections: [
          { id: 'mrp', title: 'MRP', html: `<p>毛需求、净需求、提前期；批量与安全库存。</p>` },
          { id: 'capacity', title: '能力与排产', html: `<p>CRP、粗能力；车间排产与工单。</p>` }
        ], refs: [] } },
      { title: '库存与成本', brief: '管物与算钱。',
        q: [
          { stem: '库存管理的关键指标：', options: ['周转率、呆滞、服务水平', '只有周转率', '只有呆滞', '只有服务'], answer: 0, explain: '多指标。' },
          { stem: '标准成本的作用是：', options: ['预算控制与差异分析', '只做核算', '只做报表', '无作用'], answer: 0, explain: '标准成本。' },
          { stem: '作业成本法与 ERP 的结合点：', options: ['按作业归集与分摊', '按产量分摊唯一', '无结合', '只做财务'], answer: 0, explain: 'ABC。' }
        ],
        doc: { lead: '这一章讲库存。', sections: [
          { id: 'inventory', title: '库存', html: `<p>ABC 分类、安全库存、盘点；呆滞处理。</p>` },
          { id: 'cost', title: '成本', html: `<p>标准成本、差异分析；实际成本核算。</p>` }
        ], refs: [] } },
      { title: '财务与业务一体化', brief: '业财融合。',
        q: [
          { stem: '业务财务一体化的价值是：', options: ['业务发生即生成财务数据、实时可视', '只做对账', '只做报表', '减少人员唯一'], answer: 0, explain: '一体化。' },
          { stem: '三单匹配指：', options: ['采购订单、收货单、发票匹配', '只有两单', '只有订单', '四单'], answer: 0, explain: '三单。' },
          { stem: '预算控制应在：', options: ['业务发生前与过程中', '只在事后', '不控制', '只做年报'], answer: 0, explain: '事前。' }
        ],
        doc: { lead: '这一章讲业财。', sections: [
          { id: 'integration', title: '一体化', html: `<p>业务单据自动生成凭证；实时核算与预算控制。</p>` },
          { id: 'control', title: '控制', html: `<p>三单匹配、审批流；合规与审计追踪。</p>` }
        ], refs: [] } },
      { title: 'ERP 实施', brief: '上线。',
        q: [
          { stem: 'ERP 实施的阶段包括：', options: ['规划—选型—蓝图—配置—上线—运维', '只有上线', '只有选型', '只有运维'], answer: 0, explain: '阶段。' },
          { stem: '实施失败的主要原因：', options: ['需求不清、流程未优化、变革阻力', '只有技术', '只有预算', '只有供应商'], answer: 0, explain: '多因。' },
          { stem: '上线切换策略包括：', options: ['并行、分模块、一次性', '只有一次性', '只有并行', '只有分模块'], answer: 0, explain: '策略。' }
        ],
        doc: { lead: '这一章讲实施。', sections: [
          { id: 'phase', title: '阶段', html: `<p>蓝图设计、系统配置、数据迁移、UAT。</p>` },
          { id: 'golive', title: '上线', html: `<p>切换策略、培训与支持；上线后优化。</p>` }
        ], refs: [] } },
      { title: 'ERP 实训', brief: '动手。',
        q: [
          { stem: 'ERP 实训的典型任务是：', options: ['跑通采购—生产—销售—财务全流程', '只做财务', '只做采购', '只做报表'], answer: 0, explain: '全流程。' },
          { stem: '实训中数据错误会导致：', options: ['下游单据与报表连锁错误', '无影响', '自动修复', '只影响界面'], answer: 0, explain: '连锁。' },
          { stem: '实训复盘应：', options: ['梳理流程与数据关系', '只看结果', '只截图', '不复盘'], answer: 0, explain: '复盘。' }
        ],
        doc: { lead: '这一章讲实训。', sections: [
          { id: 'flow', title: '流程', html: `<p>主数据准备、订单到收款、采购到付款。</p>` },
          { id: 'review', title: '复盘', html: `<p>单据流与数据流；常见错误与改进。</p>` }
        ], refs: [] } }
    ] },

    /* ---- 大四 ---- */
    { name: '毕业论文', chapters: [
      { title: '选题与文献', brief: '研究什么。',
        q: [
          { stem: '信管论文选题关键是：', options: ['问题明确、数据可得、方法可行', '题目宏大', '追热点', '导师偏好'], answer: 0, explain: '可行。' },
          { stem: '文献综述的作用：', options: ['梳理脉络并找到缺口', '凑字数', '装饰', '展示'], answer: 0, explain: '缺口。' },
          { stem: '研究问题应：', options: ['具体、可回答、有价值', '越宽越好', '越抽象越好', '只谈现象'], answer: 0, explain: '具体。' }
        ],
        doc: { lead: '这一章讲开头。', sections: [
          { id: 'topic', title: '选题', html: `<p>信息系统价值、数据治理、用户行为；数据来源。</p>` },
          { id: 'review', title: '文献', html: `<p>检索与综述；研究假设。</p>` }
        ], refs: [] } },
      { title: '方法与数据', brief: '怎么做。',
        q: [
          { stem: '实证研究的关键：', options: ['变量设计、样本与模型', '只有模型', '只有样本', '只有变量'], answer: 0, explain: '三要素。' },
          { stem: '问卷与实验的选择取决于：', options: ['研究问题与可行性', '成本唯一', '时间', '导师'], answer: 0, explain: '问题。' },
          { stem: '数据分析常用：', options: ['回归、结构方程、文本分析', '只有回归', '只有结构方程', '只有文本'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'design', title: '设计', html: `<p>问卷、案例、实验、二手数据；抽样。</p>` },
          { id: 'analysis', title: '分析', html: `<p>信效度、回归；PLS/SEM；结果解读。</p>` }
        ], refs: [] } },
      { title: '写作与规范', brief: '写清楚。',
        q: [
          { stem: '论文结构：', options: ['引言—文献—方法—结果—讨论—结论', '总—分—总', '背景—致谢', '问答'], answer: 0, explain: '结构。' },
          { stem: '表格规范：', options: ['三线表、变量说明、显著性', '只有数字', '只有标题', '无要求'], answer: 0, explain: '规范。' },
          { stem: '引用规范的作用：', options: ['可追溯与诚信', '凑数', '装饰', '增加篇幅'], answer: 0, explain: '规范。' }
        ],
        doc: { lead: '这一章讲写作。', sections: [
          { id: 'structure', title: '结构', html: `<p>摘要、引言、文献、方法、结果、讨论。</p>` },
          { id: 'tables', title: '图表', html: `<p>三线表、变量表；引用格式与附录。</p>` }
        ], refs: [] } },
      { title: '答辩', brief: '讲清楚。',
        q: [
          { stem: '答辩陈述要点：', options: ['问题、方法、结果、局限', '致谢', '篇幅', '格式'], answer: 0, explain: '四点。' },
          { stem: '被质疑时应：', options: ['承认局限并说明理由', '争辩', '回避', '改口'], answer: 0, explain: '诚恳。' },
          { stem: '答辩前最该准备：', options: ['熟悉数据与结论依据', '背稿', '模板', '服装'], answer: 0, explain: '依据。' }
        ],
        doc: { lead: '这一章讲答辩。', sections: [
          { id: 'talk', title: '陈述', html: `<p>8–10 分钟：问题—方法—结果—局限。</p>` },
          { id: 'qa', title: '问答', html: `<p>准备方法与数据问题；不会就说思路。</p>` }
        ], refs: [] } }
    ] },
    { name: '专业实习', chapters: [
      { title: '岗位与角色', brief: '岗位。',
        q: [
          { stem: '信管实习的常见岗位不包括：', options: ['系统实施/运维', '数据分析', '产品/需求', '外科医生'], answer: 3, explain: '无关。' },
          { stem: '选择实习最该看：', options: ['能否参与真实项目', '名气', '工资', '通勤'], answer: 0, explain: '实战。' },
          { stem: '实习生上手最快是：', options: ['从需求/数据基础工作做起', '只观察', '等安排', '只写文档'], answer: 0, explain: '实战。' }
        ],
        doc: { lead: '这一章讲岗位。', sections: [
          { id: 'roles', title: '岗位', html: `<p>实施顾问、运维、数据分析、产品助理；技能。</p>` },
          { id: 'onboard', title: '上手', html: `<p>熟悉业务与系统、明确任务；记录与提问。</p>` }
        ], refs: [] } },
      { title: '需求与数据分析', brief: '做事。',
        q: [
          { stem: '需求调研的关键是：', options: ['理解业务目标与痛点', '只记功能', '只做问卷', '只看文档'], answer: 0, explain: '业务。' },
          { stem: '数据报表应：', options: ['口径清晰、可追溯、能支持决策', '越多越好', '越花哨越好', '无口径'], answer: 0, explain: '口径。' },
          { stem: 'SQL 在实习中的常见用途：', options: ['取数与核对', '开发系统', '做设计', '写文档'], answer: 0, explain: '取数。' }
        ],
        doc: { lead: '这一章讲做事。', sections: [
          { id: 'requirement', title: '需求', html: `<p>访谈与调研、原型沟通；需求文档。</p>` },
          { id: 'data', title: '数据', html: `<p>SQL 取数、指标口径；报表与看板。</p>` }
        ], refs: [] } },
      { title: '系统实施与运维', brief: '落地。',
        q: [
          { stem: '系统实施的关键是：', options: ['流程梳理、数据迁移与培训', '只有技术', '只有预算', '只有上线'], answer: 0, explain: '多要素。' },
          { stem: '运维的核心：', options: ['稳定可用与快速响应', '只修故障', '只监控', '只备份'], answer: 0, explain: '可用。' },
          { stem: '变更管理应：', options: ['评估影响、审批、回滚预案', '直接改', '不记录', '不通知'], answer: 0, explain: '变更。' }
        ],
        doc: { lead: '这一章讲实施。', sections: [
          { id: 'implementation', title: '实施', html: `<p>配置、数据迁移、UAT；用户培训。</p>` },
          { id: 'ops', title: '运维', html: `<p>监控告警、变更与回滚；问题闭环。</p>` }
        ], refs: [] } },
      { title: '实习复盘', brief: '留下什么。',
        q: [
          { stem: '实习应留下的成果：', options: ['需求文档、数据报告、复盘', '工牌', '照片', '评语'], answer: 0, explain: '成果。' },
          { stem: '实习日志推荐写法：', options: ['问题—做法—结果—反思', '流水账', '只写结论', '只写感受'], answer: 0, explain: '结构化。' },
          { stem: '面试讲实习最佳结构：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'output', title: '成果', html: `<p>需求/设计文档、数据看板、优化记录；可量化。</p>` },
          { id: 'review', title: '复盘', html: `<p>每周五行；讲清你的贡献与学到的东西。</p>` }
        ], refs: [] } }
    ] },
    { name: '考研与求职', chapters: [
      { title: '考研方向', brief: '信管与交叉。',
        q: [
          { stem: '信管考研的常见方向是：', options: ['管理科学与工程、信息资源管理、图书情报专硕', '只有管理科学', '只有情报', '只有计算机'], answer: 0, explain: '多方向。' },
          { stem: '专业课常见科目：', options: ['管理学、运筹学、数据结构/数据库', '只有数学', '只有英语', '只有政治'], answer: 0, explain: '综合。' },
          { stem: '择校最应考虑：', options: ['方向、导师与就业资源', '城市', '学费', '宿舍'], answer: 0, explain: '匹配。' }
        ],
        doc: { lead: '这一章讲方向。', sections: [
          { id: 'paths', title: '方向', html: `<p>管理科学与工程、信息资源管理、信管、图情专硕。</p>` },
          { id: 'subjects', title: '科目', html: `<p>政治、英语、数学三、专业课（管理学/运筹学/数据结构）。</p>` }
        ], refs: [] } },
      { title: '专业课复习', brief: '两条线。',
        q: [
          { stem: '管理类专业课复习主线：', options: ['管理学框架 + 运筹学模型', '只背管理', '只做运筹', '只看真题'], answer: 0, explain: '两条。' },
          { stem: '技术类专业课重点：', options: ['数据结构、数据库、系统分析', '只有编程', '只有网络', '只有操作系统'], answer: 0, explain: '三大块。' },
          { stem: '计算题关键是：', options: ['模型建立与计算准确', '猜', '背答案', '跳过'], answer: 0, explain: '建模。' }
        ],
        doc: { lead: '这一章讲复习。', sections: [
          { id: 'management', title: '管理线', html: `<p>管理学、运筹学（线性规划、决策）。</p>` },
          { id: 'technical', title: '技术线', html: `<p>数据结构、数据库 SQL、系统分析与设计。</p>` }
        ], refs: [] } },
      { title: '求职方向', brief: 'IT 与数据。',
        q: [
          { stem: '信管毕业生的常见去向不包括：', options: ['系统实施/产品', '数据分析', 'IT 咨询', '外科医生'], answer: 3, explain: '专业限制。' },
          { stem: '产品岗看重：', options: ['业务理解、需求与沟通', '只有编程', '只有英语', '只有证书'], answer: 0, explain: '业务。' },
          { stem: '求职最加分的材料：', options: ['项目与数据作品', '证书数量', '成绩单', '社团'], answer: 0, explain: '作品。' }
        ],
        doc: { lead: '这一章讲就业。', sections: [
          { id: 'paths', title: '路径', html: `<p>产品、实施顾问、数据分析、IT 咨询、运维、读研。</p>` },
          { id: 'skills', title: '能力', html: `<p>SQL/Python、需求分析、项目管理；业务理解。</p>` }
        ], refs: [] } },
      { title: '面试', brief: '展示能力。',
        q: [
          { stem: '信管面试常考：', options: ['SQL、需求分析与项目细节', '只有编程', '只有英语', '只有性格'], answer: 0, explain: '综合。' },
          { stem: '行为面试常用：', options: ['STAR 结构', '自由发挥', '只讲结果', '只讲感受'], answer: 0, explain: 'STAR。' },
          { stem: '被问到不会的问题应：', options: ['说明思路并诚实承认', '编造', '沉默', '转移话题'], answer: 0, explain: '诚实。' }
        ],
        doc: { lead: '这一章讲面试。', sections: [
          { id: 'tech', title: '技术', html: `<p>SQL 查询、数据建模、系统流程；案例分析。</p>` },
          { id: 'behavior', title: '行为', html: `<p>STAR、跨部门协作；反问。</p>` }
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
