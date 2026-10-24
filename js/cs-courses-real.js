/* ==========================================================
   cs-courses-real.js · 计算机科学与技术：把占位关替换为真题（第一批）
   覆盖：数据结构、离散数学、
         数字逻辑、计算机组成与结构、概率论与数理统计
   C++ 课程见 cpp-courses.js（按 40 个主题重写为 10 章）
   第二批见 cs-courses-real2.js，第三批见 cs-courses-real3.js
   ========================================================== */
(function () {
  var MAJOR = 'engineering-计算机科学与技术';
  var ov = MAJOR_STAGE_OVERRIDES[MAJOR];
  if (!ov) return;

  var REFS = {
    ccf: { name: '中国计算机学会（CCF）', url: 'https://www.ccf.org.cn/' },
    moe: { name: '教育部高等学校计算机类专业教学指导委员会', url: 'http://www.moe.gov.cn/' },
    cmu: { name: '卡内基梅隆大学 15-213 课程资料', url: 'https://csapp.cs.cmu.edu/' }
  };

  var COURSES = {
    '数据结构': [
      { title: '线性表、栈与队列', brief: '顺序表、链表与受限线性结构。',
        q: [
          { stem: '单链表中删除某结点需要：', options: ['找到其前驱结点', '只需知道该结点', '必须遍历整表两次', '无法删除'], answer: 0, explain: '单链表删除需修改前驱的 next 指针，因此必须定位前驱。' },
          { stem: '栈的典型应用场景是：', options: ['函数调用与表达式求值', '打印队列', '广度优先搜索', '磁盘调度'], answer: 0, explain: '栈的后进先出特性适合递归调用、括号匹配与表达式求值。' },
          { stem: '循环队列判空与判满常通过：', options: ['牺牲一个存储单元或增设标志位', '比较队头队尾大小', '看数组长度', '随机判断'], answer: 0, explain: '循环队列用 (rear+1)%m==front 判满或引入计数/标志区分空满。' }
        ],
        doc: { lead: '这一章是所有算法题的地基。', sections: [
          { id: 'k1', title: '线性表', html: `<ul><li>顺序表：随机访问 O(1)，插入删除 O(n)。</li><li>链表：插入删除 O(1)（已知位置），访问 O(n)。</li></ul>` },
          { id: 'k2', title: '栈与队列', html: `<p>栈 LIFO：递归、括号匹配、表达式求值；队列 FIFO：BFS、缓冲区；循环队列解决假溢出。</p>` }
        ], refs: [REFS.ccf] } },
      { title: '树与二叉树', brief: '遍历、二叉搜索树与堆。',
        q: [
          { stem: '具有 n 个结点的完全二叉树深度为：', options: ['⌊log₂n⌋+1', 'n/2', 'log₂n', '2n'], answer: 0, explain: '完全二叉树深度为 ⌊log₂n⌋+1。' },
          { stem: '中序遍历一棵二叉搜索树得到的序列是：', options: ['递增有序序列', '递减序列', '层序序列', '随机序列'], answer: 0, explain: 'BST 的中序遍历结果为升序，这是 BST 的核心性质。' },
          { stem: '关于堆的说法正确的是：', options: ['大顶堆的堆顶元素最大', '堆一定是二叉搜索树', '堆的中序有序', '堆不能用数组存储'], answer: 0, explain: '大顶堆满足父结点不小于子结点，常用数组顺序存储。' }
        ],
        doc: { lead: '这一章把「层次结构」讲透。', sections: [
          { id: 'k1', title: '遍历', html: `<p>先序（根左右）、中序（左根右）、后序（左右根）、层序（队列）。已知中序＋先序/后序可唯一确定一棵二叉树。</p>` },
          { id: 'k2', title: 'BST 与堆', html: `<ul><li>BST：左<根<右，中序有序，查找平均 O(log n)。</li><li>堆：完全二叉树＋父子有序，堆排序与优先队列的基础。</li></ul>` }
        ], refs: [REFS.ccf] } },
      { title: '图与查找排序', brief: '图的遍历、最短路径与常见排序。',
        q: [
          { stem: '求带权图单源最短路径（边权非负）应使用：', options: ['Dijkstra 算法', 'Prim 算法', 'Kruskal 算法', 'DFS 遍历'], answer: 0, explain: 'Dijkstra 用于非负权单源最短路；Prim/Kruskal 求最小生成树。' },
          { stem: '下列排序算法中平均时间复杂度为 O(n log n) 且不稳定的是：', options: ['快速排序', '归并排序', '冒泡排序', '插入排序'], answer: 0, explain: '快排平均 O(n log n) 但不稳定；归并稳定，冒泡插入为 O(n²)。' },
          { stem: '拓扑排序可用于判断：', options: ['有向图是否存在环', '图是否连通', '最短路径长度', '最小生成树权重'], answer: 0, explain: '若能输出全部顶点则无环，常用于任务依赖分析。' }
        ],
        doc: { lead: '这一章覆盖面试与考研最高频考点。', sections: [
          { id: 'k1', title: '图', html: `<ul><li>存储：邻接矩阵与邻接表。</li><li>遍历：DFS（栈/递归）、BFS（队列）。</li><li>最短路：Dijkstra、Floyd；生成树：Prim、Kruskal；拓扑排序判环。</li></ul>` },
          { id: 'k2', title: '排序', html: `<p>快排（平均 O(n log n)，不稳定）、归并（O(n log n)，稳定）、堆排（O(n log n)，不稳定）、插入冒泡（O(n²)，稳定）。</p>` }
        ], refs: [REFS.ccf] } }
    ],
    '离散数学': [
      { title: '命题逻辑与谓词逻辑', brief: '命题联结词、范式与推理。',
        q: [
          { stem: '命题公式 ¬(P∧Q) 等价于：', options: ['¬P ∨ ¬Q', '¬P ∧ ¬Q', 'P ∨ Q', 'P → Q'], answer: 0, explain: '德摩根律：¬(P∧Q) ⇔ ¬P∨¬Q。' },
          { stem: '蕴含式 P→Q 为假当且仅当：', options: ['P 真 Q 假', 'P 假 Q 真', 'P、Q 同真', 'P、Q 同假'], answer: 0, explain: '仅当前件真后件假时蕴含式为假。' },
          { stem: '谓词逻辑中 ∀x P(x) 的否定是：', options: ['∃x ¬P(x)', '∀x ¬P(x)', '∃x P(x)', '¬∃x P(x)'], answer: 0, explain: '量词否定：¬∀xP(x) ⇔ ∃x¬P(x)。' }
        ],
        doc: { lead: '这一章训练形式化表达与证明。', sections: [
          { id: 'k1', title: '命题逻辑', html: `<p>联结词：¬ ∧ ∨ → ↔；等值式与德摩根律；主析取/合取范式。</p>` },
          { id: 'k2', title: '谓词逻辑', html: `<ul><li>全称与存在量词。</li><li>量词否定等值式：¬∀xP ⇔ ∃x¬P，¬∃xP ⇔ ∀x¬P。</li></ul>` }
        ], refs: [REFS.moe] } },
      { title: '集合与关系', brief: '集合运算、关系性质与等价关系。',
        q: [
          { stem: '关系 R 同时满足自反、对称、传递，则 R 是：', options: ['等价关系', '偏序关系', '函数', '全序关系'], answer: 0, explain: '等价关系需同时具备自反、对称、传递三性质。' },
          { stem: '集合 A 有 n 个元素，则其幂集元素个数为：', options: ['2^n', 'n^2', '2n', 'n!'], answer: 0, explain: '幂集包含所有子集，共 2^n 个。' },
          { stem: '偏序关系与等价关系的区别在于偏序要求：', options: ['自反、反对称、传递', '自反、对称、传递', '仅反对称', '仅传递'], answer: 0, explain: '偏序为自反、反对称、传递；等价为自反、对称、传递。' }
        ],
        doc: { lead: '这一章是数据库与编译原理的底层语言。', sections: [
          { id: 'k1', title: '集合', html: `<p>并交差补与幂集；容斥原理；|P(A)| = 2^|A|。</p>` },
          { id: 'k2', title: '关系', html: `<ul><li>自反、对称、反对称、传递。</li><li>等价关系 → 划分与商集；偏序 → 哈斯图与极值元。</li></ul>` }
        ], refs: [REFS.moe] } },
      { title: '图论基础', brief: '图的基本概念、树与欧拉/哈密顿图。',
        q: [
          { stem: '含 n 个顶点的树共有多少条边：', options: ['n−1', 'n', 'n+1', '2n'], answer: 0, explain: '树的等价定义之一：连通且边数 = 顶点数−1。' },
          { stem: '存在欧拉回路的充要条件是（连通无向图）：', options: ['所有顶点度数为偶数', '恰有两个奇度顶点', '所有顶点度数为奇数', '顶点数为偶数'], answer: 0, explain: '连通且全为偶度顶点时存在欧拉回路。' },
          { stem: '握手定理表明无向图中：', options: ['所有顶点度数之和等于边数的两倍', '度数之和等于边数', '奇度顶点数为偶数个但度数未知', '度数之和为偶数且一定小于边数'], answer: 0, explain: 'Σdeg(v) = 2|E|，因此奇度顶点个数必为偶数。' }
        ],
        doc: { lead: '这一章连接算法设计与网络分析。', sections: [
          { id: 'k1', title: '图的概念', html: `<p>度数与握手定理；连通性；完全图、二部图、树的等价定义（连通无回路、边数 n−1）。</p>` },
          { id: 'k2', title: '特殊路径', html: `<ul><li>欧拉回路：连通且全偶度。</li><li>哈密顿回路：经过每个顶点一次，判定为 NP 完全问题。</li></ul>` }
        ], refs: [REFS.moe] } }
    ],
    '数字逻辑': [
      { title: '逻辑代数与门电路', brief: '布尔运算、化简与门电路。',
        q: [
          { stem: '布尔代数中 A + ĀB 化简结果为：', options: ['A + B', 'AB', 'A', 'B'], answer: 0, explain: 'A + ĀB = (A+Ā)(A+B) = A+B。' },
          { stem: 'CMOS 门电路的静态功耗主要来自：', options: ['漏电流', '充放电电流', '短路电流唯一', '电感'], answer: 0, explain: '静态时 CMOS 上下管不导通，功耗主要来自亚阈值漏电流。' },
          { stem: '卡诺图化简的核心思想是：', options: ['圈出相邻的 2^n 个 1 并合并', '逐项相加', '随机分组', '按行化简'], answer: 0, explain: '圈越大消去的变量越多，圈应为 2^n 个相邻最小项。' }
        ],
        doc: { lead: '这一章是从布尔代数到硬件的第一步。', sections: [
          { id: 'k1', title: '布尔运算', html: `<p>与或非、异或；基本定律（交换、结合、分配、吸收、德摩根）；卡诺图与公式化简。</p>` },
          { id: 'k2', title: '门电路', html: `<ul><li>与门、或门、非门、与非、或非、异或。</li><li>CMOS 互补结构：静态功耗低，动态功耗与开关频率和负载电容相关。</li></ul>` }
        ], refs: [REFS.cmu] } },
      { title: '组合逻辑电路', brief: '编码器、译码器与竞争冒险。',
        q: [
          { stem: '组合逻辑电路的特点是：', options: ['输出只取决于当前输入', '含有记忆元件', '有时钟控制', '输出与历史有关'], answer: 0, explain: '组合电路无存储元件，输出仅由当前输入决定。' },
          { stem: '3—8 译码器的输入端数量为：', options: ['3', '8', '6', '11'], answer: 0, explain: 'n 位输入译码为 2^n 路输出，3—8 译码器为 3 输入 8 输出。' },
          { stem: '竞争冒险通常表现为：', options: ['输出端出现窄脉冲干扰', '输出恒为 1', '输出恒为 0', '电路无法上电'], answer: 0, explain: '信号经不同路径到达存在时延差，可产生尖峰窄脉冲。' }
        ],
        doc: { lead: '这一章训练「用门拼功能」。', sections: [
          { id: 'k1', title: '模块', html: `<p>编码器、译码器、数据选择器、加法器、比较器；分析方法：写表达式 → 真值表 → 功能说明。</p>` },
          { id: 'k2', title: '冒险', html: `<ul><li>竞争：信号经不同路径时延不同。</li><li>冒险：产生错误尖峰，可用冗余项、滤波电容或选通消除。</li></ul>` }
        ], refs: [REFS.cmu] } },
      { title: '时序逻辑电路', brief: '触发器、寄存器与计数器。',
        q: [
          { stem: 'D 触发器的特性方程是：', options: ['Q* = D', 'Q* = Q', 'Q* = D̄', 'Q* = 1'], answer: 0, explain: 'D 触发器在时钟边沿把 D 送入 Q。' },
          { stem: '同步时序电路与异步时序电路的区别在于：', options: ['触发器是否共用同一时钟', '是否有触发器', '是否有输出', '是否用 TTL'], answer: 0, explain: '同步电路所有触发器受同一时钟控制，异步则不同。' },
          { stem: '用 n 个触发器构成的计数器最多可表示多少个状态：', options: ['2^n', 'n', 'n²', '2n'], answer: 0, explain: 'n 位二进制状态共 2^n 个，模 M 计数器需 ⌈log₂M⌉ 个触发器。' }
        ],
        doc: { lead: '这一章是从组合电路到 CPU 的桥梁。', sections: [
          { id: 'k1', title: '触发器', html: `<p>SR、JK、D、T 触发器的特性方程与边沿/电平触发差异；建立时间与保持时间约束。</p>` },
          { id: 'k2', title: '时序模块', html: `<ul><li>寄存器：并行存储。</li><li>计数器：同步/异步、加法/减法、模 M 设计（反馈清零或置数）。</li></ul>` }
        ], refs: [REFS.cmu] } }
    ],
    '计算机组成与结构': [
      { title: '数据表示与指令系统', brief: '补码、浮点与寻址方式。',
        q: [
          { stem: '现代计算机中整数多采用补码表示，主要原因是：', options: ['加减法统一且零唯一', '表示范围最大', '便于乘除', '便于移位'], answer: 0, explain: '补码把减法化为加法，且 0 的表示唯一。' },
          { stem: 'IEEE 754 单精度浮点数的阶码位数为：', options: ['8 位', '11 位', '23 位', '32 位'], answer: 0, explain: '单精度：1 位符号 + 8 位阶码 + 23 位尾数，共 32 位。' },
          { stem: '下列寻址方式中，能缩短地址码长度的是：', options: ['寄存器间接寻址', '立即寻址唯一', '直接寻址', '变址寻址唯一'], answer: 0, explain: '寄存器间接寻址只需给出寄存器编号，地址码短且访问灵活。' }
        ],
        doc: { lead: '这一章解释「数在机器里怎么放」。', sections: [
          { id: 'k1', title: '数据表示', html: `<ul><li>原码反码补码；补码加减统一。</li><li>IEEE 754：单精度 1+8+23，双精度 1+11+52。</li></ul>` },
          { id: 'k2', title: '指令', html: `<p>指令格式：操作码 + 地址码；常见寻址：立即、直接、间接、寄存器、寄存器间接、变址、相对。</p>` }
        ], refs: [REFS.cmu] } },
      { title: '中央处理器', brief: '数据通路、控制器与流水线。',
        q: [
          { stem: 'CPU 中的程序计数器（PC）存放：', options: ['下一条指令的地址', '当前指令内容', '操作数', '运算结果'], answer: 0, explain: 'PC 指向下一条待取指令的地址，顺序执行时自动增量。' },
          { stem: '流水线中由转移指令引起的冲突属于：', options: ['控制相关', '结构相关', '数据相关', '资源相关'], answer: 0, explain: '分支改变 PC 造成控制相关，可用分支预测与延迟槽缓解。' },
          { stem: '微程序控制器中微指令存放在：', options: ['控制存储器（ROM）', '主存', 'Cache', '寄存器堆'], answer: 0, explain: '微程序固化在控制存储器中，每条机器指令对应一段微程序。' }
        ],
        doc: { lead: '这一章把 CPU 拆成看得见的部件。', sections: [
          { id: 'k1', title: '数据通路', html: `<p>取指 → 译码 → 执行 → 访存 → 写回；PC、IR、寄存器堆、ALU 与总线构成基本通路。</p>` },
          { id: 'k2', title: '流水线', html: `<ul><li>三类相关：结构、数据、控制。</li><li>解决：定向转发、暂停、分支预测、乱序执行。</li></ul>` }
        ], refs: [REFS.cmu] } },
      { title: '存储层次与输入输出', brief: 'Cache、虚拟存储与 I/O 方式。',
        q: [
          { stem: 'Cache 与主存之间地址映射方式不包括：', options: ['段页式映射', '直接映射', '全相联映射', '组相联映射'], answer: 0, explain: 'Cache 映射方式为直接、全相联、组相联；段页式属于虚拟内存管理。' },
          { stem: '虚拟存储器的基本思想是：', options: ['把部分辅存空间当作主存使用', '扩大 Cache 容量', '取消主存', '用寄存器替代内存'], answer: 0, explain: '基于程序局部性，由 MMU 完成地址变换与缺页调入。' },
          { stem: 'DMA 方式的主要特点是：', options: ['数据传送不经过 CPU 寄存器', '必须由 CPU 逐字节传送', '只能用于输入', '速度最慢'], answer: 0, explain: 'DMA 控制器接管总线直接在 I/O 与主存间传送，结束后以中断通知 CPU。' }
        ],
        doc: { lead: '这一章解释「为什么快的存储容量小」。', sections: [
          { id: 'k1', title: '层次结构', html: `<p>寄存器 → Cache → 主存 → 辅存；依据局部性原理，命中率与平均访问时间是核心指标。</p>` },
          { id: 'k2', title: 'I/O', html: `<ul><li>方式：程序查询、中断、DMA。</li><li>虚拟存储：页表 + TLB，缺页时调页并可能置换。</li></ul>` }
        ], refs: [REFS.cmu] } }
    ],
    '概率论与数理统计': [
      { title: '随机事件与概率', brief: '概率公理、条件概率与独立性。',
        q: [
          { stem: '若 A、B 互斥，则 P(A∪B) =', options: ['P(A)+P(B)', 'P(A)P(B)', 'P(A)−P(B)', '0'], answer: 0, explain: '互斥即 A∩B=∅，故并的概率等于概率之和。' },
          { stem: '条件概率 P(A|B) 的定义是：', options: ['P(AB)/P(B)（P(B)>0）', 'P(A)/P(B)', 'P(A)P(B)', 'P(B)/P(A)'], answer: 0, explain: '条件概率为交事件概率除以条件事件概率。' },
          { stem: '事件 A、B 相互独立的充要条件是：', options: ['P(AB)=P(A)P(B)', 'A∩B=∅', 'P(A)=P(B)', 'P(A∪B)=1'], answer: 0, explain: '独立定义为交事件概率等于概率之积；互斥不等于独立。' }
        ],
        doc: { lead: '这一章建立概率的语言。', sections: [
          { id: 'k1', title: '概率运算', html: `<p>加法公式、条件概率、乘法公式；全概率公式与贝叶斯公式用于「由果推因」。</p>` },
          { id: 'k2', title: '独立性', html: `<ul><li>独立：P(AB)=P(A)P(B)。</li><li>互斥：AB=∅，一般与独立不等价。</li></ul>` }
        ], refs: [REFS.moe] } },
      { title: '随机变量与分布', brief: '离散连续分布与数字特征。',
        q: [
          { stem: '设 X~B(n,p)，则 E(X) =', options: ['np', 'p', 'n(1−p)', 'np(1−p)'], answer: 0, explain: '二项分布期望为 np，方差为 np(1−p)。' },
          { stem: '若 X~N(μ,σ²)，则标准化变量为：', options: ['(X−μ)/σ ~ N(0,1)', 'X/σ ~ N(0,1)', '(X−μ) ~ N(0,1)', 'X−μ/σ'], answer: 0, explain: '标准化后服从标准正态分布，便于查表计算概率。' },
          { stem: '对任意两个随机变量，Var(X+Y) 等于：', options: ['Var(X)+Var(Y)+2Cov(X,Y)', 'Var(X)+Var(Y)', 'Var(X)Var(Y)', 'Cov(X,Y)'], answer: 0, explain: '独立时协方差为 0，才退化为方差之和。' }
        ],
        doc: { lead: '这一章把随机性量化成可计算的量。', sections: [
          { id: 'k1', title: '常见分布', html: `<ul><li>离散：0—1、二项、泊松。</li><li>连续：均匀、指数、正态（标准化后查表）。</li></ul>` },
          { id: 'k2', title: '数字特征', html: `<p>期望与方差；E(aX+b)=aE(X)+b，Var(aX+b)=a²Var(X)；协方差与相关系数刻画线性相关程度。</p>` }
        ], refs: [REFS.moe] } },
      { title: '统计推断基础', brief: '抽样分布、估计与假设检验。',
        q: [
          { stem: '样本均值 X̄ 是总体均值的：', options: ['无偏估计', '有偏估计', '必然相等', '最大似然估计唯一'], answer: 0, explain: 'E(X̄)=μ，故样本均值为总体均值的无偏估计。' },
          { stem: '假设检验中，第一类错误是指：', options: ['原假设为真却拒绝它（弃真）', '原假设为假却接受它（取伪）', '样本量不足', '检验统计量算错'], answer: 0, explain: '第一类错误概率即显著性水平 α；第二类为 β。' },
          { stem: '大数定律说明的是：', options: ['样本均值依概率收敛于期望', '样本方差收敛于 0', '分布一定为正态', '抽样必然无偏'], answer: 0, explain: '辛钦/伯努利大数定律保证频率与均值的稳定性，中心极限定理给出其近似正态性。' }
        ],
        doc: { lead: '这一章教你用样本说总体的话。', sections: [
          { id: 'k1', title: '估计', html: `<p>点估计（矩估计、最大似然）与区间估计；无偏性与有效性是评价标准。</p>` },
          { id: 'k2', title: '检验', html: `<ul><li>步骤：建立假设 → 选统计量 → 定拒绝域 → 计算并判断。</li><li>α 为弃真概率，β 为取伪概率。</li></ul>` }
        ], refs: [REFS.moe] } }
    ]
  };

  var ci = 0;
  Object.keys(ov).forEach(function (stage) {
    ov[stage].modules.forEach(function (mod) {
      var chs = COURSES[mod.name];
      if (chs) {
        mod.levels = chs.map(function (ch, k) {
          DOCS[MAJOR + '-m' + ci + '-l' + k] = ch.doc;
          return { name: '第 ' + (k + 1) + ' 章 · ' + ch.title, brief: ch.brief, questions: ch.q, ready: true };
        });
      }
      ci++;
    });
  });
})();
