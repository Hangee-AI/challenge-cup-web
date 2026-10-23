/* ==========================================================
   ee-courses.js · 电子信息工程：12 门课（主干 8 / 出口 4）= 84 关
   ========================================================== */

(function () {
  var MAJOR = 'engineering-电子信息工程';
  var TITLES = stageTitlesOf('engineering');

  var COURSES = [
    { name: '电路分析基础', chapters: [
      { title: '电路元件与定律', brief: '基本砖块。',
        q: [
          { stem: '基尔霍夫电流定律基于：', options: ['电荷守恒', '能量守恒', '欧姆定律', '法拉第定律'], answer: 0, explain: 'KCL。' },
          { stem: '理想电压源的内阻是：', options: ['零', '无穷', '有限', '不确定'], answer: 0, explain: '零。' },
          { stem: '受控源与独立源的区别是：', options: ['是否受其他量控制', '是否有电压', '是否有电流', '是否线性'], answer: 0, explain: '受控。' }
        ],
        doc: { lead: '这一章讲元件。', sections: [
          { id: 'elements', title: '元件', html: `<p>电阻、电容、电感；独立源与受控源；端口。</p>` },
          { id: 'laws', title: '定律', html: `<p>KCL、KVL、欧姆定律；参考方向。</p>` }
        ], refs: [] } },
      { title: '电阻电路分析', brief: '解方程。',
        q: [
          { stem: '节点法与网孔法的区别是：', options: ['以节点电压 vs 回路电流为未知量', '复杂度', '是否线性', '是否有源'], answer: 0, explain: '未知量。' },
          { stem: '叠加定理适用于：', options: ['线性电路', '非线性电路', '任意电路', '只有直流'], answer: 0, explain: '线性。' },
          { stem: '戴维南等效的参数是：', options: ['开路电压与等效电阻', '短路电流唯一', '只有电阻', '只有电压'], answer: 0, explain: '两参数。' }
        ],
        doc: { lead: '这一章讲分析。', sections: [
          { id: 'methods', title: '方法', html: `<p>等效变换、节点法、网孔法；受控源处理。</p>` },
          { id: 'theorems', title: '定理', html: `<p>叠加、戴维南、诺顿、最大功率传输。</p>` }
        ], refs: [] } },
      { title: '动态电路', brief: '储能元件。',
        q: [
          { stem: '一阶电路的时间常数是：', options: ['RC 或 L/R', 'R/C', 'LC', 'L·R'], answer: 0, explain: '时间常数。' },
          { stem: '换路定则指：', options: ['电容电压与电感电流不跃变', '电压不跃变', '电流不跃变', '功率不跃变'], answer: 0, explain: '定则。' },
          { stem: '二阶电路的响应类型取决于：', options: ['特征根（过阻尼等）', '电源', '电阻', '频率'], answer: 0, explain: '特征根。' }
        ],
        doc: { lead: '这一章讲动态。', sections: [
          { id: 'firstorder', title: '一阶', html: `<p>三要素法：初始值、稳态值、时间常数；零输入与零状态。</p>` },
          { id: 'secondorder', title: '二阶', html: `<p>特征方程、过阻尼/临界/欠阻尼；振荡。</p>` }
        ], refs: [] } },
      { title: '正弦稳态分析', brief: '交流电。',
        q: [
          { stem: '相量法把微分方程转化为：', options: ['代数方程', '积分方程', '差分方程', '偏微分'], answer: 0, explain: '代数。' },
          { stem: '阻抗的实部与虚部分别是：', options: ['电阻与电抗', '电抗与电阻', '电容与电感', '有功与无功'], answer: 0, explain: '阻抗。' },
          { stem: '谐振时电路的功率因数是：', options: ['1', '0', '0.5', '−1'], answer: 0, explain: '谐振。' }
        ],
        doc: { lead: '这一章讲交流。', sections: [
          { id: 'phasor', title: '相量', html: `<p>有效值相量、阻抗与导纳；KCL/KVL 相量形式。</p>` },
          { id: 'power', title: '功率', html: `<p>有功、无功、视在功率；功率因数与谐振。</p>` }
        ], refs: [] } },
      { title: '三相电路', brief: '工业用电。',
        q: [
          { stem: '三相星形连接的线电压与相电压关系是：', options: ['线电压为相电压的 √3 倍', '相等', '线电压更小', '两倍'], answer: 0, explain: '√3。' },
          { stem: '对称三相电路的总功率是：', options: ['√3 U_L I_L cosφ', '3UI', 'UI', '2UI'], answer: 0, explain: '功率。' },
          { stem: '中性线的作用是：', options: ['提供零序通路、平衡相电压', '增加功率', '减少损耗', '提高频率'], answer: 0, explain: '中性线。' }
        ],
        doc: { lead: '这一章讲三相。', sections: [
          { id: 'connection', title: '连接', html: `<p>星形与三角形；线量与相量关系。</p>` },
          { id: 'power', title: '功率', html: `<p>对称与不对称；中性线作用；安全。</p>` }
        ], refs: [] } },
      { title: '耦合电感与变压器', brief: '磁的耦合。',
        q: [
          { stem: '互感系数与耦合系数的关系是：', options: ['k = M/√(L₁L₂)', 'k = M', 'k = L₁L₂', 'k = √M'], answer: 0, explain: '定义。' },
          { stem: '理想变压器的电压比等于：', options: ['匝数比', '电流比', '阻抗比', '功率比'], answer: 0, explain: '匝数比。' },
          { stem: '同名端的作用是：', options: ['确定互感电压极性', '确定匝数', '确定功率', '确定频率'], answer: 0, explain: '极性。' }
        ],
        doc: { lead: '这一章讲耦合。', sections: [
          { id: 'mutual', title: '互感', html: `<p>互感电压、同名端；耦合系数。</p>` },
          { id: 'transformer', title: '变压器', html: `<p>理想变压器、阻抗变换；实际变压器模型。</p>` }
        ], refs: [] } },
      { title: '频率响应与二端口', brief: '频域与端口。',
        q: [
          { stem: '网络函数描述：', options: ['输出与输入之比随频率变化', '功率', '阻抗唯一', '电流'], answer: 0, explain: '网络函数。' },
          { stem: '滤波器的截止频率是：', options: ['幅度下降到 0.707 倍的频率', '最大值处', '零点', '任意'], answer: 0, explain: '截止。' },
          { stem: '二端口网络的参数包括：', options: ['Z、Y、H、ABCD 参数', '只有 Z', '只有 Y', '只有 H'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲频响。', sections: [
          { id: 'response', title: '频率响应', html: `<p>网络函数、幅频与相频；滤波器类型。</p>` },
          { id: 'twoport', title: '二端口', html: `<p>参数矩阵、互易与对称；级联。</p>` }
        ], refs: [] } },
      { title: '电路实验', brief: '动手。',
        q: [
          { stem: '测量电阻的常用方法是：', options: ['伏安法与电桥法', '只用万用表', '只用示波器', '只能计算'], answer: 0, explain: '伏安。' },
          { stem: '示波器的作用是：', options: ['观察电压波形', '测电阻', '测温度', '测质量'], answer: 0, explain: '波形。' },
          { stem: '实验误差分析的意义是：', options: ['判断结果可靠性', '装饰', '凑数', '无意义'], answer: 0, explain: '误差。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'measure', title: '测量', html: `<p>万用表、示波器、信号源；伏安法与电桥。</p>` },
          { id: 'error', title: '误差', html: `<p>系统与随机误差、不确定度；数据记录。</p>` }
        ], refs: [] } }
    ] },
    { name: '高等数学（工科）', chapters: [
      { title: '极限与连续', brief: '基础。',
        q: [
          { stem: '两个重要极限之一是：', options: ['lim sinx/x = 1', 'lim sinx/x = 0', 'lim x/sinx = 0', 'lim = ∞'], answer: 0, explain: '重要极限。' },
          { stem: '连续函数在闭区间上：', options: ['有界且可取最值', '必可导', '必单调', '无最值'], answer: 0, explain: '性质。' },
          { stem: '等价无穷小替换适用于：', options: ['乘除', '加减', '任意', '只有极限'], answer: 0, explain: '乘除。' }
        ],
        doc: { lead: '这一章讲极限。', sections: [
          { id: 'limit', title: '极限', html: `<p>定义、法则、两个重要极限；等价无穷小。</p>` },
          { id: 'continuity', title: '连续', html: `<p>连续与间断；闭区间性质。</p>` }
        ], refs: [] } },
      { title: '导数与微分', brief: '变化率。',
        q: [
          { stem: '可导与连续的关系是：', options: ['可导必连续', '等价', '连续必可导', '无关'], answer: 0, explain: '蕴含。' },
          { stem: '微分是：', options: ['增量的线性主部', '导数', '积分', '极限'], answer: 0, explain: '线性主部。' },
          { stem: '洛必达法则适用于：', options: ['0/0 或 ∞/∞ 型', '所有极限', '只有 0/0', '只有 ∞/∞'], answer: 0, explain: '未定式。' }
        ],
        doc: { lead: '这一章讲导数。', sections: [
          { id: 'derivative', title: '导数', html: `<p>定义、求导法则；隐函数与参数方程。</p>` },
          { id: 'application', title: '应用', html: `<p>极值、最优化、中值定理、洛必达。</p>` }
        ], refs: [] } },
      { title: '积分', brief: '累积。',
        q: [
          { stem: '牛顿-莱布尼茨公式是：', options: ['∫ₐᵇf = F(b) − F(a)', 'F(a) − F(b)', 'f(b) − f(a)', '∫f′'], answer: 0, explain: '公式。' },
          { stem: '分部积分公式是：', options: ['∫u dv = uv − ∫v du', 'uv + ∫v du', '∫u∫v', 'u′v′'], answer: 0, explain: '分部。' },
          { stem: '定积分可计算：', options: ['面积、体积、功', '只有面积', '只有体积', '导数'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲积分。', sections: [
          { id: 'indefinite', title: '不定积分', html: `<p>换元、分部、部分分式。</p>` },
          { id: 'definite', title: '定积分', html: `<p>性质、计算；反常积分；应用。</p>` }
        ], refs: [] } },
      { title: '级数', brief: '无穷。',
        q: [
          { stem: 'p 级数收敛条件是：', options: ['p > 1', 'p < 1', 'p = 1', '任意'], answer: 0, explain: 'p>1。' },
          { stem: '幂级数的收敛半径用：', options: ['比值法或根值法', '夹逼', '中值', '洛必达'], answer: 0, explain: '半径。' },
          { stem: '傅里叶级数用于：', options: ['周期信号展开', '任意函数', '只有多项式', '只有指数'], answer: 0, explain: '周期。' }
        ],
        doc: { lead: '这一章讲级数。', sections: [
          { id: 'series', title: '级数', html: `<p>正项判别、交错、绝对收敛；幂级数。</p>` },
          { id: 'fourier', title: '傅里叶', html: `<p>三角级数、系数；信号分析基础。</p>` }
        ], refs: [] } },
      { title: '多元函数', brief: '多维。',
        q: [
          { stem: '偏导存在与连续的关系是：', options: ['不保证连续', '保证连续', '等价', '无关'], answer: 0, explain: '不保证。' },
          { stem: '全微分的充分条件是：', options: ['偏导连续', '偏导存在', '连续', '有界'], answer: 0, explain: '充分。' },
          { stem: '条件极值用：', options: ['拉格朗日乘数法', '洛必达', '泰勒', '积分'], answer: 0, explain: '乘数法。' }
        ],
        doc: { lead: '这一章讲多元。', sections: [
          { id: 'differential', title: '微分', html: `<p>偏导、全微分、链式、隐函数。</p>` },
          { id: 'extremum', title: '极值', html: `<p>无条件与条件极值；黑塞矩阵。</p>` }
        ], refs: [] } },
      { title: '重积分与曲线积分', brief: '累积。',
        q: [
          { stem: '极坐标面积元素是：', options: ['r dr dθ', 'dr dθ', 'r² dr dθ', 'dθ'], answer: 0, explain: '雅可比。' },
          { stem: '格林公式联系：', options: ['曲线积分与二重积分', '三重积分', '级数', '导数'], answer: 0, explain: '格林。' },
          { stem: '高斯公式联系：', options: ['曲面积分与三重积分', '曲线积分', '级数', '导数'], answer: 0, explain: '散度。' }
        ],
        doc: { lead: '这一章讲重积分。', sections: [
          { id: 'multiple', title: '重积分', html: `<p>二重、三重；极坐标与柱球坐标。</p>` },
          { id: 'line', title: '线面积分', html: `<p>第一/二类；格林、高斯、斯托克斯。</p>` }
        ], refs: [] } },
      { title: '常微分方程', brief: '动态。',
        q: [
          { stem: '可分离变量方程的解法是：', options: ['分离后两边积分', '直接积分', '求导', '代入'], answer: 0, explain: '分离。' },
          { stem: '一阶线性方程用：', options: ['积分因子法', '分离变量', '特征方程', '级数'], answer: 0, explain: '积分因子。' },
          { stem: '二阶常系数方程解由：', options: ['特征根决定', '初值唯一', '常数项', '次数'], answer: 0, explain: '特征根。' }
        ],
        doc: { lead: '这一章讲方程。', sections: [
          { id: 'first', title: '一阶', html: `<p>可分离、齐次、线性；建模。</p>` },
          { id: 'second', title: '二阶', html: `<p>常系数、特征根；电路与振动应用。</p>` }
        ], refs: [] } },
      { title: '线性代数与复变', brief: '工具。',
        q: [
          { stem: '矩阵特征值的用途是：', options: ['系统分析与解耦', '求积分', '求极限', '排序'], answer: 0, explain: '特征值。' },
          { stem: '复数的极坐标形式是：', options: ['r(cosθ + j sinθ)', 'a + b', 'r + θ', 'r/θ'], answer: 0, explain: '极坐标。' },
          { stem: '拉普拉斯变换用于：', options: ['解微分方程与电路分析', '求积分', '判敛', '几何'], answer: 0, explain: '变换。' }
        ],
        doc: { lead: '这一章讲工具。', sections: [
          { id: 'linear', title: '线性代数', html: `<p>矩阵运算、特征值；方程组。</p>` },
          { id: 'complex', title: '复变与变换', html: `<p>复数的运算；拉普拉斯与傅里叶变换初步。</p>` }
        ], refs: [] } }
    ] },
    { name: 'C 语言程序设计', chapters: [
      { title: '基础语法', brief: '入门。',
        q: [
          { stem: 'C 程序的入口是：', options: ['main 函数', '任意函数', '文件头', '编译器'], answer: 0, explain: 'main。' },
          { stem: 'printf 的格式化占位符 %d 用于：', options: ['整数', '浮点', '字符', '字符串'], answer: 0, explain: '%d。' },
          { stem: '分号的作用是：', options: ['语句结束', '分隔', '注释', '声明'], answer: 0, explain: '结束。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'hello', title: '第一个程序', html: `<p>#include、main、printf、return；编译运行。</p>` },
          { id: 'types', title: '类型', html: `<p>int、float、double、char；格式化输入输出。</p>` }
        ], refs: [] } },
      { title: '控制与函数', brief: '流程与复用。',
        q: [
          { stem: 'for 循环的三部分是：', options: ['初始化、条件、更新', '条件、循环体、结束', '开始、中间、结束', '输入、处理、输出'], answer: 0, explain: '三部分。' },
          { stem: '递归必须有：', options: ['终止条件', '循环', '指针', '全局变量'], answer: 0, explain: '基准。' },
          { stem: '值传递不能：', options: ['修改实参', '返回值', '递归', '嵌套'], answer: 0, explain: '单向。' }
        ],
        doc: { lead: '这一章讲控制。', sections: [
          { id: 'control', title: '控制', html: `<p>if/switch、for/while；break/continue。</p>` },
          { id: 'function', title: '函数', html: `<p>声明与定义、参数、返回值；递归与栈。</p>` }
        ], refs: [] } },
      { title: '数组与指针', brief: '批量与地址。',
        q: [
          { stem: '数组名在表达式中通常退化为：', options: ['指向首元素的指针', '长度', '值', '类型'], answer: 0, explain: '指针。' },
          { stem: '指针运算 p+1 移动的字节数取决于：', options: ['所指类型的大小', '1 字节', '4 字节', '不确定'], answer: 0, explain: '类型。' },
          { stem: '越界访问数组会：', options: ['未定义行为', '自动扩容', '报错', '无害'], answer: 0, explain: 'UB。' }
        ],
        doc: { lead: '这一章讲数组。', sections: [
          { id: 'array', title: '数组', html: `<p>一维/二维；遍历、排序、查找。</p>` },
          { id: 'pointer', title: '指针', html: `<p>取地址、解引用、指针与数组；字符串。</p>` }
        ], refs: [] } },
      { title: '结构体与文件', brief: '组织与持久化。',
        q: [
          { stem: '结构体适合表示：', options: ['一组相关数据', '单个值', '函数', '文件'], answer: 0, explain: '聚合。' },
          { stem: 'fopen 的 "r" 表示：', options: ['只读', '只写', '追加', '读写'], answer: 0, explain: '只读。' },
          { stem: 'fclose 的作用是：', options: ['刷新缓冲并释放资源', '删除文件', '重命名', '加密'], answer: 0, explain: '关闭。' }
        ],
        doc: { lead: '这一章讲组织。', sections: [
          { id: 'struct', title: '结构体', html: `<p>定义、数组与指针；typedef。</p>` },
          { id: 'file', title: '文件', html: `<p>fopen/fread/fwrite/fclose；文本与二进制。</p>` }
        ], refs: [] } },
      { title: '内存管理', brief: '堆与栈。',
        q: [
          { stem: 'malloc 分配的内存在：', options: ['堆', '栈', '静态区', '代码区'], answer: 0, explain: '堆。' },
          { stem: '内存泄漏指：', options: ['分配后未释放', '越界', '野指针', '栈溢出'], answer: 0, explain: '泄漏。' },
          { stem: 'free 之后应：', options: ['将指针置空', '继续使用', '再次 free', '忽略'], answer: 0, explain: '置空。' }
        ],
        doc: { lead: '这一章讲内存。', sections: [
          { id: 'heap', title: '堆', html: `<p>malloc/calloc/realloc/free；容量与检查。</p>` },
          { id: 'bugs', title: '常见问题', html: `<p>泄漏、越界、重复释放、野指针；工具（valgrind/ASan）。</p>` }
        ], refs: [] } },
      { title: '调试与规范', brief: '写好代码。',
        q: [
          { stem: '调试的第一步是：', options: ['复现问题', '改代码', '重装', '问人'], answer: 0, explain: '复现。' },
          { stem: 'assert 的作用是：', options: ['检查不变量', '替代异常', '优化', '打印'], answer: 0, explain: '断言。' },
          { stem: '好代码的标准是：', options: ['正确、可读、可维护', '短', '炫技', '无注释'], answer: 0, explain: '多维。' }
        ],
        doc: { lead: '这一章讲规范。', sections: [
          { id: 'debug', title: '调试', html: `<p>断点、日志、最小复现；gdb 基础。</p>` },
          { id: 'style', title: '规范', html: `<p>命名、缩进、注释；编译警告全开。</p>` }
        ], refs: [] } },
      { title: '数据结构基础', brief: '常见结构。',
        q: [
          { stem: '链表相比数组的优势是：', options: ['插入删除灵活', '随机访问快', '占用小', '缓存友好'], answer: 0, explain: '插入。' },
          { stem: '栈的特点是：', options: ['后进先出', '先进先出', '随机', '双端'], answer: 0, explain: 'LIFO。' },
          { stem: '二分查找要求数据：', options: ['有序', '无序', '链式', '哈希'], answer: 0, explain: '有序。' }
        ],
        doc: { lead: '这一章讲结构。', sections: [
          { id: 'linear', title: '线性结构', html: `<p>数组、链表、栈、队列；复杂度。</p>` },
          { id: 'tree', title: '树与查找', html: `<p>二叉树、BST；查找与排序算法。</p>` }
        ], refs: [] } },
      { title: '项目实战', brief: '做小系统。',
        q: [
          { stem: '项目开始前应先：', options: ['明确需求与结构设计', '写界面', '选框架', '部署'], answer: 0, explain: '需求。' },
          { stem: '模块化的好处是：', options: ['便于测试与维护', '代码更长', '运行更快', '无需文档'], answer: 0, explain: '模块化。' },
          { stem: '交付时应提供：', options: ['源码、说明、示例数据', '只有源码', '只有可执行文件', '只有文档'], answer: 0, explain: '完整。' }
        ],
        doc: { lead: '这一章讲实战。', sections: [
          { id: 'project', title: '项目', html: `<p>学生管理、通讯录；结构体 + 文件 + 菜单。</p>` },
          { id: 'deliver', title: '交付', html: `<p>README、编译说明、测试用例；代码评审。</p>` }
        ], refs: [] } }
    ] },
    { name: '模拟电子技术', chapters: [
      { title: '半导体基础', brief: 'PN 结。',
        q: [
          { stem: 'PN 结的单向导电性指：', options: ['正偏导通、反偏截止', '双向导通', '双向截止', '无关'], answer: 0, explain: '单向。' },
          { stem: '二极管的正向导通压降约为：', options: ['0.7 V（硅）', '0 V', '5 V', '10 V'], answer: 0, explain: '0.7 V。' },
          { stem: '稳压管工作在：', options: ['反向击穿区', '正向导通区', '截止区', '饱和区'], answer: 0, explain: '击穿。' }
        ],
        doc: { lead: '这一章讲半导体。', sections: [
          { id: 'pn', title: 'PN 结', html: `<p>载流子、扩散与漂移；伏安特性。</p>` },
          { id: 'diode', title: '二极管', html: `<p>整流、稳压、限幅；小信号模型。</p>` }
        ], refs: [] } },
      { title: '三极管与放大', brief: '放大的核心。',
        q: [
          { stem: '三极管的三个工作区是：', options: ['截止、放大、饱和', '只有放大', '只有截止', '只有饱和'], answer: 0, explain: '三区。' },
          { stem: '共射放大电路的输出与输入：', options: ['反相', '同相', '无关', '相同'], answer: 0, explain: '反相。' },
          { stem: '静态工作点的作用是：', options: ['保证不失真放大', '提高增益唯一', '降低功耗', '稳定频率'], answer: 0, explain: 'Q 点。' }
        ],
        doc: { lead: '这一章讲三极管。', sections: [
          { id: 'bjt', title: 'BJT', html: `<p>结构、电流关系、特性曲线；三区。</p>` },
          { id: 'amplifier', title: '放大电路', html: `<p>共射/共集/共基；Q 点、增益、输入输出电阻。</p>` }
        ], refs: [] } },
      { title: '场效应管', brief: '电压控制。',
        q: [
          { stem: 'MOSFET 是：', options: ['电压控制器件', '电流控制器件', '无控制', '光控'], answer: 0, explain: '电压控制。' },
          { stem: '增强型与耗尽型的区别是：', options: ['零栅压时是否导通', '材料', '功率', '频率'], answer: 0, explain: '常开/常闭。' },
          { stem: '场效应管的优势是：', options: ['输入阻抗高、噪声低', '功率大唯一', '速度快唯一', '便宜'], answer: 0, explain: '高阻。' }
        ],
        doc: { lead: '这一章讲 FET。', sections: [
          { id: 'mosfet', title: 'MOSFET', html: `<p>结构、转移特性、输出特性；开关应用。</p>` },
          { id: 'compare', title: '比较', html: `<p>FET 与 BJT 的差异；偏置与放大。</p>` }
        ], refs: [] } },
      { title: '多级与反馈', brief: '系统级。',
        q: [
          { stem: '负反馈的作用是：', options: ['稳定增益、扩展带宽、减小失真', '提高增益', '增大失真', '降低稳定性'], answer: 0, explain: '负反馈。' },
          { stem: '负反馈可能引起：', options: ['自激振荡（相位裕度不足）', '增益上升', '带宽变窄', '无影响'], answer: 0, explain: '振荡。' },
          { stem: '多级放大的总增益是：', options: ['各级增益之积', '之和', '之差', '平均值'], answer: 0, explain: '乘积。' }
        ],
        doc: { lead: '这一章讲反馈。', sections: [
          { id: 'multistage', title: '多级', html: `<p>级联、耦合方式；带宽与增益分配。</p>` },
          { id: 'feedback', title: '反馈', html: `<p>四种组态、负反馈效应；稳定性与相位裕度。</p>` }
        ], refs: [] } },
      { title: '集成运放', brief: '万能模块。',
        q: [
          { stem: '理想运放的特性是：', options: ['虚短与虚断', '增益有限', '输入阻抗低', '输出阻抗高'], answer: 0, explain: '虚短虚断。' },
          { stem: '反相比例放大器的增益是：', options: ['−Rf/R1', 'Rf/R1', '1+Rf/R1', '−R1/Rf'], answer: 0, explain: '反相。' },
          { stem: '运放比较器工作在：', options: ['非线性区', '线性区', '截止区', '饱和区唯一'], answer: 0, explain: '非线性。' }
        ],
        doc: { lead: '这一章讲运放。', sections: [
          { id: 'ideal', title: '理想运放', html: `<p>虚短虚断；线性应用的条件（负反馈）。</p>` },
          { id: 'circuits', title: '典型电路', html: `<p>比例、加法、积分、微分、比较器；滤波。</p>` }
        ], refs: [] } },
      { title: '功率与电源', brief: '能量。',
        q: [
          { stem: '甲类功放的效率约为：', options: ['50% 以下', '78.5%', '90%', '100%'], answer: 0, explain: '甲类低。' },
          { stem: '乙类功放的交越失真源于：', options: ['死区电压', '电源不稳', '负载', '频率'], answer: 0, explain: '交越。' },
          { stem: '线性稳压与开关稳压的区别是：', options: ['效率与纹波不同', '价格', '体积', '输入'], answer: 0, explain: '效率。' }
        ],
        doc: { lead: '这一章讲功率。', sections: [
          { id: 'poweramp', title: '功放', html: `<p>甲、乙、甲乙类；效率与失真；散热。</p>` },
          { id: 'supply', title: '电源', html: `<p>整流滤波、线性稳压、开关电源；纹波与效率。</p>` }
        ], refs: [] } },
      { title: '频率响应与噪声', brief: '高频与干扰。',
        q: [
          { stem: '放大电路的上限频率受限于：', options: ['结电容与寄生电容', '电源', '负载', '温度'], answer: 0, explain: '电容。' },
          { stem: '增益带宽积是：', options: ['常数（运放）', '可变', '无穷', '为零'], answer: 0, explain: 'GBW。' },
          { stem: '降低噪声的措施包括：', options: ['合理偏置、屏蔽、滤波', '提高增益唯一', '加反馈唯一', '换电源'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲频响。', sections: [
          { id: 'bode', title: '频率响应', html: `<p>波特图、上下限频率、增益带宽积；稳定性。</p>` },
          { id: 'noise', title: '噪声', html: `<p>热噪声、散粒噪声；信噪比与屏蔽接地。</p>` }
        ], refs: [] } },
      { title: '模电实验', brief: '动手。',
        q: [
          { stem: '测量放大倍数应使用：', options: ['示波器测输入输出幅度', '万用表测电阻', '信号源唯一', '电源'], answer: 0, explain: '示波器。' },
          { stem: '静态工作点测量包括：', options: ['Ube、Uce、Ic', '只有 Uce', '只有 Ic', '只有 Ube'], answer: 0, explain: '三量。' },
          { stem: '实验中自激振荡应：', options: ['检查反馈与去耦', '提高增益', '加大输入', '忽略'], answer: 0, explain: '排查。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'measure', title: '测量', html: `<p>静态工作点、电压增益、输入输出电阻；频率特性。</p>` },
          { id: 'trouble', title: '排故', html: `<p>无输出、失真、振荡；电源与接地检查。</p>` }
        ], refs: [] } }
    ] },
    { name: '数字电子技术', chapters: [
      { title: '数制与逻辑代数', brief: '0 与 1。',
        q: [
          { stem: '二进制 1011 对应的十进制是：', options: ['11', '13', '9', '15'], answer: 0, explain: '11。' },
          { stem: '德摩根律是：', options: ['(A+B)\' = A\'·B\'', '(A·B)\' = A\'·B\'', 'A+A\' = 1', 'A·A\' = 0'], answer: 0, explain: '对偶。' },
          { stem: '卡诺图的作用是：', options: ['化简逻辑函数', '计数', '存储', '转换'], answer: 0, explain: '化简。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'number', title: '数制', html: `<p>二进制、十六进制；原码反码补码；BCD。</p>` },
          { id: 'boolean', title: '逻辑代数', html: `<p>基本定律、卡诺图、最小项；化简。</p>` }
        ], refs: [] } },
      { title: '门电路', brief: '基本单元。',
        q: [
          { stem: 'CMOS 反相器的特点是：', options: ['功耗低、抗干扰好', '功耗高', '速度快唯一', '不能集成'], answer: 0, explain: 'CMOS。' },
          { stem: 'TTL 与 CMOS 的区别是：', options: ['工艺与电平不同', '逻辑不同', '速度相同', '电压相同'], answer: 0, explain: '工艺。' },
          { stem: '三态门的作用是：', options: ['实现总线共享', '放大', '存储', '计数'], answer: 0, explain: '三态。' }
        ],
        doc: { lead: '这一章讲门。', sections: [
          { id: 'logic', title: '逻辑门', html: `<p>与或非、异或；真值表与符号。</p>` },
          { id: 'families', title: '门电路', html: `<p>TTL、CMOS；电平、噪声容限、扇出；三态门。</p>` }
        ], refs: [] } },
      { title: '组合逻辑', brief: '无记忆。',
        q: [
          { stem: '组合逻辑的输出取决于：', options: ['当前输入', '历史输入', '时钟', '状态'], answer: 0, explain: '当前输入。' },
          { stem: '译码器的作用是：', options: ['把编码转换为唯一输出', '计数', '存储', '放大'], answer: 0, explain: '译码。' },
          { stem: '竞争冒险的消除方法包括：', options: ['加冗余项、加滤波电容', '提高频率', '增加级数', '降低电压'], answer: 0, explain: '消除。' }
        ],
        doc: { lead: '这一章讲组合。', sections: [
          { id: 'analysis', title: '分析与设计', html: `<p>真值表—表达式—电路；编码器、译码器、数据选择器、加法器。</p>` },
          { id: 'hazard', title: '冒险', html: `<p>竞争与冒险；消除方法。</p>` }
        ], refs: [] } },
      { title: '时序逻辑', brief: '有记忆。',
        q: [
          { stem: '触发器的基本特性是：', options: ['记忆一位二进制', '放大', '计数唯一', '译码'], answer: 0, explain: '记忆。' },
          { stem: '同步与异步时序电路的区别是：', options: ['是否统一时钟', '是否有触发器', '是否有反馈', '是否计数'], answer: 0, explain: '时钟。' },
          { stem: '状态图描述：', options: ['状态与转移条件', '真值表', '波形', '电路图'], answer: 0, explain: '状态。' }
        ],
        doc: { lead: '这一章讲时序。', sections: [
          { id: 'ff', title: '触发器', html: `<p>RS、D、JK、T；特性方程与波形。</p>` },
          { id: 'analysis', title: '分析与设计', html: `<p>状态表/状态图、时序图；计数器与寄存器。</p>` }
        ], refs: [] } },
      { title: '计数器与寄存器', brief: '常用模块。',
        q: [
          { stem: '模 N 计数器需要：', options: ['N 个状态', 'N+1 个', '2N 个', 'N² 个'], answer: 0, explain: '模数。' },
          { stem: '移位寄存器可以实现：', options: ['串并转换与延时', '放大', '译码', '加法'], answer: 0, explain: '移位。' },
          { stem: '同步计数器相比异步：', options: ['速度更快、无累积延迟', '更慢', '更简单', '不能级联'], answer: 0, explain: '同步。' }
        ],
        doc: { lead: '这一章讲模块。', sections: [
          { id: 'counter', title: '计数器', html: `<p>同步与异步、模 N 设计；级联。</p>` },
          { id: 'register', title: '寄存器', html: `<p>并行与移位；串并转换、序列检测。</p>` }
        ], refs: [] } },
      { title: '存储器与可编程器件', brief: '存与编程。',
        q: [
          { stem: 'ROM 与 RAM 的区别是：', options: ['是否可随机写', '容量', '速度', '电压'], answer: 0, explain: '读写。' },
          { stem: 'FPGA 的特点是：', options: ['可现场编程、并行度高', '固定功能', '只能仿真', '成本最低'], answer: 0, explain: 'FPGA。' },
          { stem: '存储容量的单位换算中 1 KB 等于：', options: ['1024 B', '1000 B', '8 B', '1024 bit'], answer: 0, explain: '1024。' }
        ],
        doc: { lead: '这一章讲存储。', sections: [
          { id: 'memory', title: '存储器', html: `<p>ROM、RAM、Flash；容量扩展与地址译码。</p>` },
          { id: 'pld', title: '可编程', html: `<p>PLD、CPLD、FPGA；HDL 与综合流程。</p>` }
        ], refs: [] } },
      { title: '数模与模数转换', brief: '两个世界。',
        q: [
          { stem: 'A/D 转换的主要步骤是：', options: ['采样、保持、量化、编码', '只有采样', '只有量化', '只有编码'], answer: 0, explain: '四步。' },
          { stem: '采样定理要求采样频率：', options: ['大于信号最高频率的 2 倍', '小于 2 倍', '等于', '任意'], answer: 0, explain: '奈奎斯特。' },
          { stem: '量化误差来自：', options: ['离散化近似', '电源', '时钟', '温度'], answer: 0, explain: '量化。' }
        ],
        doc: { lead: '这一章讲转换。', sections: [
          { id: 'adc', title: 'ADC', html: `<p>采样定理、量化与编码；逐次比较、双积分。</p>` },
          { id: 'dac', title: 'DAC', html: `<p>权电阻、倒 T 型网络；分辨率与精度。</p>` }
        ], refs: [] } },
      { title: '数电实验', brief: '动手。',
        q: [
          { stem: '数字电路调试的常用工具是：', options: ['逻辑笔与示波器', '万用表唯一', '信号源唯一', '电源'], answer: 0, explain: '工具。' },
          { stem: '实验中出现毛刺应：', options: ['检查竞争与时钟', '提高电压', '加大负载', '忽略'], answer: 0, explain: '毛刺。' },
          { stem: '用 HDL 设计的流程是：', options: ['设计—仿真—综合—下载', '只有综合', '只有下载', '只有仿真'], answer: 0, explain: '流程。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'experiment', title: '实验', html: `<p>组合逻辑、时序逻辑、计数器；面包板与 FPGA 开发板。</p>` },
          { id: 'flow', title: '流程', html: `<p>HDL 设计、仿真、综合、下载；测试激励。</p>` }
        ], refs: [] } }
    ] },
    { name: '信号与系统', chapters: [
      { title: '信号与系统概述', brief: '研究对象。',
        q: [
          { stem: '连续信号与离散信号的区别是：', options: ['时间是否连续', '幅值', '能量', '周期'], answer: 0, explain: '时间。' },
          { stem: '线性系统的条件是：', options: ['叠加性与齐次性', '时不变', '因果', '稳定'], answer: 0, explain: '线性。' },
          { stem: '时不变系统的含义是：', options: ['参数不随时间变化', '输入不变', '输出不变', '无延迟'], answer: 0, explain: '时不变。' }
        ],
        doc: { lead: '这一章讲概述。', sections: [
          { id: 'signals', title: '信号', html: `<p>连续/离散、周期/非周期、能量/功率；基本信号。</p>` },
          { id: 'systems', title: '系统', html: `<p>线性、时不变、因果、稳定；框图。</p>` }
        ], refs: [] } },
      { title: '卷积', brief: '系统的响应。',
        q: [
          { stem: '卷积积分描述：', options: ['线性时不变系统的零状态响应', '零输入响应', '稳定性', '频率'], answer: 0, explain: '卷积。' },
          { stem: '卷积与冲激响应的关系是：', options: ['输出 = 输入 * h(t)', '输出 = 输入 + h', '输出 = h 唯一', '无关'], answer: 0, explain: '卷积。' },
          { stem: '卷积满足：', options: ['交换律、结合律、分配律', '只有交换律', '只有结合律', '不满足'], answer: 0, explain: '代数性质。' }
        ],
        doc: { lead: '这一章讲卷积。', sections: [
          { id: 'convolution', title: '卷积', html: `<p>定义、图解法、性质；冲激响应与阶跃响应。</p>` },
          { id: 'application', title: '应用', html: `<p>零状态响应、系统级联；离散卷积。</p>` }
        ], refs: [] } },
      { title: '傅里叶级数与变换', brief: '频域。',
        q: [
          { stem: '傅里叶级数适用于：', options: ['周期信号', '任意信号', '只有能量信号', '只有离散'], answer: 0, explain: '周期。' },
          { stem: '傅里叶变换把时域变到：', options: ['频域', '复频域', '空域', '相域'], answer: 0, explain: '频域。' },
          { stem: '时域卷积对应频域：', options: ['乘积', '卷积', '相加', '无关'], answer: 0, explain: '卷积定理。' }
        ],
        doc: { lead: '这一章讲傅里叶。', sections: [
          { id: 'series', title: '级数', html: `<p>三角与指数形式、频谱；吉布斯现象。</p>` },
          { id: 'transform', title: '变换', html: `<p>性质、常用变换对；卷积定理与能量谱。</p>` }
        ], refs: [] } },
      { title: '拉普拉斯变换', brief: '复频域。',
        q: [
          { stem: '拉氏变换的收敛域取决于：', options: ['信号的增长特性', '频率', '幅值', '相位'], answer: 0, explain: 'ROC。' },
          { stem: '系统函数 H(s) 的极点决定：', options: ['稳定性与响应形式', '增益唯一', '输入', '频率'], answer: 0, explain: '极点。' },
          { stem: '拉氏变换可用于：', options: ['解微分方程与电路分析', '只有解方程', '只有电路', '无应用'], answer: 0, explain: '两种。' }
        ],
        doc: { lead: '这一章讲拉氏。', sections: [
          { id: 'transform', title: '变换', html: `<p>定义、收敛域、性质；常用变换对。</p>` },
          { id: 'analysis', title: '系统分析', html: `<p>H(s)、零极点、稳定性；初值终值定理。</p>` }
        ], refs: [] } },
      { title: 'z 变换', brief: '离散系统。',
        q: [
          { stem: 'z 变换用于：', options: ['离散信号与系统', '连续信号', '随机过程', '非线性'], answer: 0, explain: '离散。' },
          { stem: '系统稳定的条件是：', options: ['极点位于单位圆内', '单位圆外', '虚轴', '原点'], answer: 0, explain: '稳定。' },
          { stem: 'z 变换与拉氏变换的关系是：', options: ['z = e^{sT}', 'z = s', 'z = 1/s', '无关'], answer: 0, explain: '映射。' }
        ],
        doc: { lead: '这一章讲 z。', sections: [
          { id: 'transform', title: '变换', html: `<p>定义、收敛域、性质；常用变换对。</p>` },
          { id: 'system', title: '系统', html: `<p>H(z)、零极点、稳定性；差分方程求解。</p>` }
        ], refs: [] } },
      { title: '系统函数与频响', brief: '系统特性。',
        q: [
          { stem: '系统函数描述：', options: ['系统的输入输出关系', '输入', '输出', '噪声'], answer: 0, explain: '关系。' },
          { stem: '最小相位系统的特点是：', options: ['零极点均在左半平面（或单位圆内）', '只有极点', '无零点', '不稳定'], answer: 0, explain: '最小相位。' },
          { stem: '全通系统的作用是：', options: ['只改变相位不改变幅度', '只改幅度', '放大', '滤波唯一'], answer: 0, explain: '全通。' }
        ],
        doc: { lead: '这一章讲系统函数。', sections: [
          { id: 'function', title: '系统函数', html: `<p>定义、零极点图；级联与并联。</p>` },
          { id: 'response', title: '频响', html: `<p>幅频与相频、最小相位、全通；滤波器概念。</p>` }
        ], refs: [] } },
      { title: '采样与重建', brief: '连接两个世界。',
        q: [
          { stem: '奈奎斯特采样定理要求：', options: ['fs > 2fmax', 'fs < 2fmax', 'fs = fmax', '任意'], answer: 0, explain: '采样定理。' },
          { stem: '频谱混叠的原因是：', options: ['采样频率不足', '幅值太小', '相位', '噪声'], answer: 0, explain: '混叠。' },
          { stem: '重建滤波器的作用是：', options: ['滤除高频镜像', '放大', '移相', '编码'], answer: 0, explain: '抗镜像。' }
        ],
        doc: { lead: '这一章讲采样。', sections: [
          { id: 'sampling', title: '采样', html: `<p>采样定理、频谱周期延拓；混叠。</p>` },
          { id: 'reconstruct', title: '重建', html: `<p>零阶保持、理想重建；抗混叠与抗镜像滤波。</p>` }
        ], refs: [] } },
      { title: '信号与系统实验', brief: '仿真与实测。',
        q: [
          { stem: '信号与系统实验常用工具是：', options: ['MATLAB/Simulink', 'Word', 'Excel', 'PPT'], answer: 0, explain: 'MATLAB。' },
          { stem: '频谱分析仪的作用是：', options: ['观察信号频域成分', '测电阻', '测温度', '测质量'], answer: 0, explain: '频谱。' },
          { stem: '仿真与实测不符时应：', options: ['检查模型与测量条件', '改数据', '忽略', '换软件'], answer: 0, explain: '排查。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'simulation', title: '仿真', html: `<p>卷积、傅里叶、滤波器设计；MATLAB 实践。</p>` },
          { id: 'measure', title: '实测', html: `<p>信号源、示波器、频谱仪；模型验证。</p>` }
        ], refs: [] } }
    ] },
    { name: '通信原理', chapters: [
      { title: '通信系统概述', brief: '信息怎么传。',
        q: [
          { stem: '通信系统的基本组成是：', options: ['信源、发送、信道、接收、信宿', '只有信道', '只有收发', '只有信源'], answer: 0, explain: '五部分。' },
          { stem: '模拟通信与数字通信的区别是：', options: ['传输信号形式', '频率', '功率', '距离'], answer: 0, explain: '信号。' },
          { stem: '信息量的单位是：', options: ['比特', '赫兹', '瓦特', '伏特'], answer: 0, explain: 'bit。' }
        ],
        doc: { lead: '这一章讲概述。', sections: [
          { id: 'model', title: '模型', html: `<p>信源、编码、调制、信道、解调、译码；噪声。</p>` },
          { id: 'measure', title: '度量', html: `<p>信息量、熵、传信率；带宽与信噪比。</p>` }
        ], refs: [] } },
      { title: '信道与噪声', brief: '传输的代价。',
        q: [
          { stem: '白噪声的功率谱密度是：', options: ['常数', '线性', '指数', '为零'], answer: 0, explain: '平坦。' },
          { stem: '香农公式给出：', options: ['信道容量与带宽信噪比的关系', '调制方式', '编码', '延迟'], answer: 0, explain: '香农。' },
          { stem: '信道容量随带宽增大：', options: ['趋于上限（受信噪比限制）', '无限增大', '减小', '不变'], answer: 0, explain: '上限。' }
        ],
        doc: { lead: '这一章讲信道。', sections: [
          { id: 'channel', title: '信道', html: `<p>恒参与变参、带宽、衰减；多径。</p>` },
          { id: 'capacity', title: '容量', html: `<p>香农公式、信噪比；编码增益。</p>` }
        ], refs: [] } },
      { title: '模拟调制', brief: 'AM/FM。',
        q: [
          { stem: 'AM 调制的带宽是基带信号的：', options: ['2 倍', '1 倍', '4 倍', '相同'], answer: 0, explain: '2 倍。' },
          { stem: 'FM 相比 AM 的优势是：', options: ['抗干扰强', '带宽窄', '功率小', '简单'], answer: 0, explain: '抗干扰。' },
          { stem: '调制的作用是：', options: ['把信号搬移到适合信道传输的频段', '放大', '滤波', '编码'], answer: 0, explain: '搬移。' }
        ],
        doc: { lead: '这一章讲模拟调制。', sections: [
          { id: 'am', title: '调幅', html: `<p>AM、DSB、SSB；功率与带宽；解调。</p>` },
          { id: 'fm', title: '调频', html: `<p>FM、PM；带宽（卡森公式）、抗噪性能。</p>` }
        ], refs: [] } },
      { title: '数字基带传输', brief: '不发载波。',
        q: [
          { stem: '基带传输适合：', options: ['短距离有线', '卫星', '移动', '广播'], answer: 0, explain: '短距。' },
          { stem: '码间干扰的原因是：', options: ['带宽受限与多径', '噪声', '功率', '频率'], answer: 0, explain: 'ISI。' },
          { stem: '眼图用于：', options: ['观察码间干扰与噪声容限', '测功率', '测频率', '测相位'], answer: 0, explain: '眼图。' }
        ],
        doc: { lead: '这一章讲基带。', sections: [
          { id: 'code', title: '码型', html: `<p>NRZ、RZ、AMI、HDB3；频谱特性。</p>` },
          { id: 'isi', title: '码间干扰', html: `<p>奈奎斯特准则、升余弦滚降；眼图与均衡。</p>` }
        ], refs: [] } },
      { title: '数字调制', brief: 'ASK/FSK/PSK。',
        q: [
          { stem: 'QPSK 每个符号携带：', options: ['2 比特', '1 比特', '4 比特', '8 比特'], answer: 0, explain: '2 bit。' },
          { stem: 'QAM 相比 PSK 的优势是：', options: ['频带利用率更高', '抗噪更强', '更简单', '功率更低'], answer: 0, explain: '效率。' },
          { stem: '误码率与信噪比的关系是：', options: ['信噪比越高误码率越低', '越高越高', '无关', '不变'], answer: 0, explain: '关系。' }
        ],
        doc: { lead: '这一章讲调制。', sections: [
          { id: 'askfskpsk', title: '基本调制', html: `<p>ASK、FSK、PSK；星座图与误码率。</p>` },
          { id: 'qam', title: '高阶调制', html: `<p>QPSK、QAM；频带效率与功率效率的权衡。</p>` }
        ], refs: [] } },
      { title: '编码与差错控制', brief: '纠错。',
        q: [
          { stem: '信道编码的目的是：', options: ['检错纠错、提高可靠性', '提高速率', '降低功率', '加密'], answer: 0, explain: '可靠性。' },
          { stem: '汉明码属于：', options: ['线性分组码', '卷积码', 'Turbo 码', '无编码'], answer: 0, explain: '分组码。' },
          { stem: '交织的作用是：', options: ['把突发错误分散为随机错误', '加密', '压缩', '同步'], answer: 0, explain: '交织。' }
        ],
        doc: { lead: '这一章讲编码。', sections: [
          { id: 'source', title: '信源编码', html: `<p>抽样量化、PCM、压缩；速率与质量。</p>` },
          { id: 'channel', title: '信道编码', html: `<p>汉明、循环码、卷积码；交织与 HARQ。</p>` }
        ], refs: [] } },
      { title: '同步与复用', brief: '对齐与共享。',
        q: [
          { stem: '载波同步的作用是：', options: ['恢复相干解调所需相位', '定时', '纠错', '加密'], answer: 0, explain: '载波。' },
          { stem: '时分复用与频分复用的区别是：', options: ['按时间 vs 按频率划分', '按码型', '按空间', '按功率'], answer: 0, explain: 'TDM/FDM。' },
          { stem: '帧同步的作用是：', options: ['确定帧的起止', '纠错', '加密', '压缩'], answer: 0, explain: '帧同步。' }
        ],
        doc: { lead: '这一章讲同步。', sections: [
          { id: 'sync', title: '同步', html: `<p>载波、位、帧同步；锁相环。</p>` },
          { id: 'multiplex', title: '复用', html: `<p>FDM、TDM、CDM、OFDM；多址接入。</p>` }
        ], refs: [] } },
      { title: '通信实验', brief: '动手。',
        q: [
          { stem: '通信实验常用的观测工具是：', options: ['示波器与频谱仪', '万用表', '电源', '烙铁'], answer: 0, explain: '仪器。' },
          { stem: '误码率测试需要：', options: ['已知序列与比对', '只看波形', '只测功率', '只测频率'], answer: 0, explain: '比对。' },
          { stem: '实验中出现误码高应：', options: ['检查信噪比与同步', '提高电压', '换设备', '忽略'], answer: 0, explain: '排查。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'experiment', title: '实验', html: `<p>调制解调、误码率测试、同步；软件无线电。</p>` },
          { id: 'analysis', title: '分析', html: `<p>星座图、眼图、频谱；参数与性能。</p>` }
        ], refs: [] } }
    ] },
    { name: '数字信号处理', chapters: [
      { title: '离散信号与系统', brief: '数字世界。',
        q: [
          { stem: '离散时间系统的输出由：', options: ['输入与冲激响应卷积', '输入之和', '输入乘积', '无关'], answer: 0, explain: '卷积。' },
          { stem: '线性时不变离散系统由：', options: ['单位冲激响应 h[n] 完全描述', '输入', '输出', '噪声'], answer: 0, explain: 'h[n]。' },
          { stem: '因果系统的条件是：', options: ['h[n] = 0（n<0）', 'h[n] ≠ 0', '任意', '稳定'], answer: 0, explain: '因果。' }
        ],
        doc: { lead: '这一章讲离散。', sections: [
          { id: 'sequence', title: '序列', html: `<p>基本序列、周期、能量；运算。</p>` },
          { id: 'system', title: '系统', html: `<p>线性时不变、因果、稳定；差分方程。</p>` }
        ], refs: [] } },
      { title: 'z 变换与频响', brief: '分析工具。',
        q: [
          { stem: '稳定系统的极点在：', options: ['单位圆内', '单位圆外', '单位圆上', '原点'], answer: 0, explain: '稳定。' },
          { stem: 'DTFT 与 z 变换的关系是：', options: ['单位圆上的 z 变换', '相同', '无关', '相反'], answer: 0, explain: '单位圆。' },
          { stem: '零极点分布决定：', options: ['幅频与相频特性', '只有幅频', '只有相频', '输入'], answer: 0, explain: '特性。' }
        ],
        doc: { lead: '这一章讲 z。', sections: [
          { id: 'ztransform', title: 'z 变换', html: `<p>定义、收敛域、性质；逆变换。</p>` },
          { id: 'response', title: '频响', html: `<p>H(e^{jω})、零极点；全通与最小相位。</p>` }
        ], refs: [] } },
      { title: 'DFT 与 FFT', brief: '计算频谱。',
        q: [
          { stem: 'DFT 的复杂度是：', options: ['O(N²)', 'O(N log N)', 'O(N)', 'O(log N)'], answer: 0, explain: '直接 DFT。' },
          { stem: 'FFT 的加速原理是：', options: ['分治与旋转因子周期性', '近似', '查表', '并行唯一'], answer: 0, explain: '分治。' },
          { stem: '频谱泄漏的原因是：', options: ['截断与非整周期采样', '噪声', '量化', '相位'], answer: 0, explain: '泄漏。' }
        ],
        doc: { lead: '这一章讲 DFT。', sections: [
          { id: 'dft', title: 'DFT', html: `<p>定义、性质、循环卷积；频谱分辨率。</p>` },
          { id: 'fft', title: 'FFT', html: `<p>基 2 算法、蝶形运算；加窗与泄漏。</p>` }
        ], refs: [] } },
      { title: '数字滤波器', brief: '选频。',
        q: [
          { stem: 'FIR 与 IIR 的区别是：', options: ['是否有反馈（极点）', '阶数', '是否线性', '是否稳定'], answer: 0, explain: '反馈。' },
          { stem: 'FIR 滤波器的优势是：', options: ['可严格线性相位、总是稳定', '阶数低', '计算量小', '不需要乘法'], answer: 0, explain: '线性相位。' },
          { stem: 'IIR 滤波器的设计常借助：', options: ['模拟滤波器原型', '直接优化唯一', '查表', '随机'], answer: 0, explain: '原型。' }
        ],
        doc: { lead: '这一章讲滤波器。', sections: [
          { id: 'fir', title: 'FIR', html: `<p>窗函数法、频率采样；线性相位与对称性。</p>` },
          { id: 'iir', title: 'IIR', html: `<p>模拟原型、双线性变换；稳定性与相位。</p>` }
        ], refs: [] } },
      { title: '滤波器设计实践', brief: '设计。',
        q: [
          { stem: '滤波器设计指标包括：', options: ['通带/阻带截止频率与衰减', '只有截止', '只有衰减', '只有阶数'], answer: 0, explain: '指标。' },
          { stem: '窗函数选择影响：', options: ['主瓣宽度与旁瓣电平', '只有阶数', '只有增益', '相位唯一'], answer: 0, explain: '窗。' },
          { stem: '滤波器阶数越高：', options: ['过渡带越窄、计算量越大', '过渡带越宽', '越不稳定', '越简单'], answer: 0, explain: '权衡。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'spec', title: '指标', html: `<p>通带、阻带、波纹、衰减；归一化频率。</p>` },
          { id: 'design', title: '设计', html: `<p>窗函数、最优设计；MATLAB/Python 实现。</p>` }
        ], refs: [] } },
      { title: '多速率与自适应', brief: '进阶。',
        q: [
          { stem: '抽取与内插分别：', options: ['降低/提高采样率', '提高/降低', '不变', '滤波'], answer: 0, explain: '速率。' },
          { stem: '抽取前需要：', options: ['抗混叠滤波', '放大', '移相', '编码'], answer: 0, explain: '抗混叠。' },
          { stem: '自适应滤波的典型应用是：', options: ['回声消除与信道均衡', '只有滤波', '只有压缩', '无应用'], answer: 0, explain: '自适应。' }
        ],
        doc: { lead: '这一章讲进阶。', sections: [
          { id: 'multirate', title: '多速率', html: `<p>抽取、内插、多相分解；滤波器组。</p>` },
          { id: 'adaptive', title: '自适应', html: `<p>LMS、RLS；回声消除、均衡、噪声抵消。</p>` }
        ], refs: [] } },
      { title: 'DSP 实现', brief: '落地。',
        q: [
          { stem: 'DSP 处理器适合：', options: ['实时乘加密集型运算', '大量存储', '图形', '网络'], answer: 0, explain: '实时。' },
          { stem: '定点与浮点实现的选择取决于：', options: ['精度、功耗与成本', '速度唯一', '语言', '框架'], answer: 0, explain: '权衡。' },
          { stem: '实时处理的约束是：', options: ['必须在采样间隔内算完', '任意时间', '按天', '不限制'], answer: 0, explain: '实时。' }
        ],
        doc: { lead: '这一章讲实现。', sections: [
          { id: 'platform', title: '平台', html: `<p>DSP、FPGA、通用 CPU/GPU；指令与架构。</p>` },
          { id: 'optimize', title: '优化', html: `<p>定点化、流水线、内存访问；实时性验证。</p>` }
        ], refs: [] } },
      { title: 'DSP 实验', brief: '动手。',
        q: [
          { stem: 'DSP 实验常用软件是：', options: ['MATLAB 与 Python', 'Word', 'Excel', 'PPT'], answer: 0, explain: '软件。' },
          { stem: '验证滤波效果应看：', options: ['时域波形与频域响应', '只有波形', '只有频谱', '只有参数'], answer: 0, explain: '两者。' },
          { stem: '实时实验中出现溢出应：', options: ['调整定点标度或改浮点', '提高电压', '换设备', '忽略'], answer: 0, explain: '标度。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'simulation', title: '仿真', html: `<p>滤波、频谱分析、多速率；参数扫描。</p>` },
          { id: 'realtime', title: '实时', html: `<p>DSP/FPGA 实现；采样率与延迟；溢出与标度。</p>` }
        ], refs: [] } }
    ] },
    { name: '电磁场与电磁波', chapters: [
      { title: '矢量分析与场论', brief: '数学工具。',
        q: [
          { stem: '梯度的方向是：', options: ['标量场增长最快方向', '等值面方向', '任意', '垂直方向'], answer: 0, explain: '梯度。' },
          { stem: '散度为零表示：', options: ['无源场', '无旋场', '均匀场', '静电场'], answer: 0, explain: '无源。' },
          { stem: '旋度为零表示：', options: ['无旋场（保守场）', '无源场', '变化场', '辐射'], answer: 0, explain: '保守。' }
        ],
        doc: { lead: '这一章讲工具。', sections: [
          { id: 'vector', title: '矢量分析', html: `<p>梯度、散度、旋度、拉普拉斯；恒等式。</p>` },
          { id: 'theorems', title: '定理', html: `<p>高斯、斯托克斯；亥姆霍兹定理。</p>` }
        ], refs: [] } },
      { title: '静电场', brief: '电荷的场。',
        q: [
          { stem: '高斯定理说明：', options: ['电通量由包围电荷决定', '电场为零', '无源', '无旋'], answer: 0, explain: '高斯。' },
          { stem: '静电场的旋度：', options: ['为零', '非零', '常数', '无关'], answer: 0, explain: '无旋。' },
          { stem: '泊松方程描述：', options: ['电位与电荷分布的关系', '磁场', '电流', '波动'], answer: 0, explain: '泊松。' }
        ],
        doc: { lead: '这一章讲静电场。', sections: [
          { id: 'gauss', title: '高斯定理', html: `<p>电通量、电位；边界条件。</p>` },
          { id: 'poisson', title: '泊松与拉普拉斯', html: `<p>方程与解法（分离变量、镜像法）。</p>` }
        ], refs: [] } },
      { title: '恒定电流与磁场', brief: '电流的场。',
        q: [
          { stem: '安培环路定理说明：', options: ['磁场环流由电流决定', '磁场为零', '无旋', '静电场'], answer: 0, explain: '安培。' },
          { stem: '磁场是无源场意味着：', options: ['磁通连续性（无磁单极）', '无旋', '有源', '静止'], answer: 0, explain: '无源。' },
          { stem: '矢量磁位的作用是：', options: ['简化磁场计算', '替代电场', '计算功率', '表示频率'], answer: 0, explain: '矢量位。' }
        ],
        doc: { lead: '这一章讲磁场。', sections: [
          { id: 'ampere', title: '安培定理', html: `<p>磁场强度、磁通连续性；边界条件。</p>` },
          { id: 'potential', title: '位函数', html: `<p>标量磁位与矢量磁位；电感计算。</p>` }
        ], refs: [] } },
      { title: '时变场与麦克斯韦方程', brief: '统一。',
        q: [
          { stem: '位移电流的引入使：', options: ['安培定理与连续性方程相容', '电场消失', '磁场消失', '无关'], answer: 0, explain: '位移电流。' },
          { stem: '麦克斯韦方程组包含几个方程？', options: ['四个', '两个', '三个', '五个'], answer: 0, explain: '四个。' },
          { stem: '电磁感应定律是：', options: ['法拉第定律', '安培定律', '高斯定律', '库仑定律'], answer: 0, explain: '法拉第。' }
        ],
        doc: { lead: '这一章讲时变。', sections: [
          { id: 'maxwell', title: '方程组', html: `<p>四个方程的积分与微分形式；本构关系。</p>` },
          { id: 'boundary', title: '边界', html: `<p>法向与切向连续性；理想导体表面。</p>` }
        ], refs: [] } },
      { title: '平面电磁波', brief: '传播。',
        q: [
          { stem: '均匀平面波的电场与磁场：', options: ['相互垂直且垂直于传播方向', '平行', '同向', '无关'], answer: 0, explain: 'TEM。' },
          { stem: '波阻抗在真空中约为：', options: ['377 Ω', '50 Ω', '1 Ω', '∞'], answer: 0, explain: '377。' },
          { stem: '趋肤深度随频率升高：', options: ['减小', '增大', '不变', '无关'], answer: 0, explain: '趋肤。' }
        ],
        doc: { lead: '这一章讲平面波。', sections: [
          { id: 'wave', title: '平面波', html: `<p>波动方程、相速、波阻抗；极化。</p>` },
          { id: 'media', title: '媒质中的传播', html: `<p>损耗媒质、趋肤效应；反射与折射。</p>` }
        ], refs: [] } },
      { title: '传输线', brief: '导波。',
        q: [
          { stem: '传输线方程（电报方程）描述：', options: ['电压电流随位置的分布', '电场', '磁场', '功率唯一'], answer: 0, explain: '传输线。' },
          { stem: '驻波比（VSWR）反映：', options: ['匹配程度', '功率', '频率', '长度'], answer: 0, explain: '匹配。' },
          { stem: '特性阻抗取决于：', options: ['分布参数 L、C', '长度', '频率', '功率'], answer: 0, explain: '分布参数。' }
        ],
        doc: { lead: '这一章讲传输线。', sections: [
          { id: 'equation', title: '方程', html: `<p>分布参数、特性阻抗、传播常数；无耗与有耗。</p>` },
          { id: 'matching', title: '匹配', html: `<p>反射系数、驻波比、阻抗匹配（λ/4、短截线）。</p>` }
        ], refs: [] } },
      { title: '波导与天线', brief: '导与辐射。',
        q: [
          { stem: '矩形波导的主模是：', options: ['TE10', 'TE11', 'TM11', 'TEM'], answer: 0, explain: 'TE10。' },
          { stem: '截止频率以下波导中：', options: ['波衰减不传播', '传播更快', '无影响', '反射为零'], answer: 0, explain: '截止。' },
          { stem: '天线增益衡量：', options: ['方向性与效率', '输入功率', '带宽唯一', '重量'], answer: 0, explain: '增益。' }
        ],
        doc: { lead: '这一章讲波导。', sections: [
          { id: 'waveguide', title: '波导', html: `<p>模式、截止频率、波导波长；色散。</p>` },
          { id: 'antenna', title: '天线', html: `<p>方向图、增益、极化；偶极子与阵列。</p>` }
        ], refs: [] } },
      { title: '电磁兼容与实验', brief: '实际工程。',
        q: [
          { stem: '电磁兼容包括：', options: ['发射与抗扰度', '只有发射', '只有抗扰', '只有屏蔽'], answer: 0, explain: '两方面。' },
          { stem: '屏蔽、接地、滤波的作用是：', options: ['抑制干扰耦合', '提高增益', '增加带宽', '降低成本'], answer: 0, explain: '抑制。' },
          { stem: '电磁实验常用仪器是：', options: ['矢量网络分析仪与频谱仪', '万用表', '电源', '烙铁'], answer: 0, explain: 'VNA。' }
        ],
        doc: { lead: '这一章讲工程。', sections: [
          { id: 'emc', title: 'EMC', html: `<p>干扰源、耦合途径、抑制措施；标准与测试。</p>` },
          { id: 'experiment', title: '实验', html: `<p>驻波与阻抗测量、天线方向图；VNA 使用。</p>` }
        ], refs: [] } }
    ] },

    /* ---- 大四 ---- */
    { name: '毕业设计', chapters: [
      { title: '选题与开题', brief: '做什么。',
        q: [
          { stem: '电子信息毕业设计选题的关键是：', options: ['问题明确、工作量适中、可交付', '题目宏大', '追热点', '导师偏好'], answer: 0, explain: '可行。' },
          { stem: '开题报告应包含：', options: ['背景、目标、方案、计划', '只有背景', '只有计划', '只有方案'], answer: 0, explain: '四要素。' },
          { stem: '技术路线应：', options: ['明确方法与验证手段', '只有框图', '只有器件', '只有论文'], answer: 0, explain: '路线。' }
        ],
        doc: { lead: '这一章讲开题。', sections: [
          { id: 'topic', title: '选题', html: `<p>信号处理、通信、嵌入式、电源；范围可控。</p>` },
          { id: 'proposal', title: '开题', html: `<p>背景、目标、方案、进度、风险；可行性。</p>` }
        ], refs: [] } },
      { title: '硬件与软件实现', brief: '做出来。',
        q: [
          { stem: '硬件设计的第一步是：', options: ['需求与指标分解', '画 PCB', '焊接', '选外壳'], answer: 0, explain: '需求。' },
          { stem: 'PCB 设计应考虑：', options: ['布局布线、电源完整性、EMC', '只有美观', '只有尺寸', '只有成本'], answer: 0, explain: '设计。' },
          { stem: '嵌入式软件调试常用：', options: ['在线调试与串口日志', '只看现象', '猜', '换板'], answer: 0, explain: '调试。' }
        ],
        doc: { lead: '这一章讲实现。', sections: [
          { id: 'hardware', title: '硬件', html: `<p>方案选型、原理图、PCB；电源与信号完整性。</p>` },
          { id: 'software', title: '软件', html: `<p>嵌入式编程、算法实现；调试与联调。</p>` }
        ], refs: [] } },
      { title: '测试与论文', brief: '证明可用。',
        q: [
          { stem: '系统测试应：', options: ['覆盖功能与指标并记录', '只测一次', '只测外观', '不测'], answer: 0, explain: '测试。' },
          { stem: '论文与实物的关系是：', options: ['论文说明方案与验证', '论文替代实物', '实物替代论文', '无关'], answer: 0, explain: '互补。' },
          { stem: '测试数据应：', options: ['真实、可重复', '挑选好看的', '编造', '省略'], answer: 0, explain: '真实。' }
        ],
        doc: { lead: '这一章讲验证。', sections: [
          { id: 'test', title: '测试', html: `<p>功能测试、指标测量（带宽、精度、效率）；记录与图表。</p>` },
          { id: 'thesis', title: '论文', html: `<p>问题—方案—实现—测试—结论；引用规范。</p>` }
        ], refs: [] } },
      { title: '答辩与交付', brief: '讲清楚。',
        q: [
          { stem: '答辩演示的关键是：', options: ['现场可运行、数据可信', 'PPT 精美', '器材多', '时长'], answer: 0, explain: '演示。' },
          { stem: '交付物应包括：', options: ['原理图、源码、测试报告、说明', '只有实物', '只有论文', '只有源码'], answer: 0, explain: '完整。' },
          { stem: '被质疑时应：', options: ['承认局限并说明理由', '争辩', '回避', '改口'], answer: 0, explain: '诚恳。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'demo', title: '演示', html: `<p>10 分钟：问题—方案—演示—数据；准备备用方案。</p>` },
          { id: 'deliver', title: '交付', html: `<p>原理图、PCB、源码、测试报告；可复现。</p>` }
        ], refs: [] } }
    ] },
    { name: '专业实习', chapters: [
      { title: '岗位与角色', brief: '硬件、软件、测试。',
        q: [
          { stem: '电子信息实习的常见岗位不包括：', options: ['硬件工程师', '嵌入式软件', '测试工程师', '外科医生'], answer: 3, explain: '无关。' },
          { stem: '选择实习最该看：', options: ['能否参与真实项目', '名气', '工资', '通勤'], answer: 0, explain: '实战。' },
          { stem: '硬件实习常见起点是：', options: ['测试与调试、器件选型', '直接做主设计', '只写文档', '只开会'], answer: 0, explain: '测试。' }
        ],
        doc: { lead: '这一章讲岗位。', sections: [
          { id: 'roles', title: '岗位', html: `<p>硬件、嵌入式、射频、测试、FAE；职责与技能。</p>` },
          { id: 'onboard', title: '上手', html: `<p>读原理图、用仪器、跑通流程；记录与提问。</p>` }
        ], refs: [] } },
      { title: '仪器与调试', brief: '手上功夫。',
        q: [
          { stem: '示波器探头的地线应：', options: ['就近接地、避免长引线', '不接', '接任意点', '接电源'], answer: 0, explain: '接地。' },
          { stem: '万用表测电流时应：', options: ['串联接入', '并联', '直接跨接电源', '不用表笔'], answer: 0, explain: '串联。' },
          { stem: '调试的第一步是：', options: ['确认电源与地正常', '改代码', '换器件', '重新画板'], answer: 0, explain: '电源。' }
        ],
        doc: { lead: '这一章讲调试。', sections: [
          { id: 'instruments', title: '仪器', html: `<p>万用表、示波器、信号源、频谱仪；探头与接地。</p>` },
          { id: 'debug', title: '调试', html: `<p>电源检查、分段排查、信号追踪；记录现象。</p>` }
        ], refs: [] } },
      { title: '工程规范', brief: '可维护。',
        q: [
          { stem: '原理图规范包括：', options: ['命名、分页、标注、版本', '只有美观', '只有尺寸', '只有颜色'], answer: 0, explain: '规范。' },
          { stem: 'BOM 的作用是：', options: ['物料清单与采购依据', '原理图', '程序', '测试报告'], answer: 0, explain: 'BOM。' },
          { stem: '版本控制对硬件同样重要，因为：', options: ['需要追溯设计与变更', '装饰', '加速', '压缩'], answer: 0, explain: '追溯。' }
        ],
        doc: { lead: '这一章讲规范。', sections: [
          { id: 'document', title: '文档', html: `<p>原理图、PCB、BOM、测试记录；版本与变更。</p>` },
          { id: 'quality', title: '质量', html: `<p>设计评审、可制造性、可测试性；可靠性。</p>` }
        ], refs: [] } },
      { title: '实习复盘', brief: '留下什么。',
        q: [
          { stem: '实习应留下的成果是：', options: ['项目记录、测试数据、复盘', '工牌', '照片', '评语'], answer: 0, explain: '成果。' },
          { stem: '实习日志的推荐写法是：', options: ['问题—做法—结果—反思', '流水账', '只写结论', '只写感受'], answer: 0, explain: '结构化。' },
          { stem: '面试讲项目的最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'output', title: '成果', html: `<p>调试记录、优化方案、测试报告；可量化。</p>` },
          { id: 'review', title: '复盘', html: `<p>每周五行；讲清你的贡献与学到的东西。</p>` }
        ], refs: [] } }
    ] },
    { name: '考研与求职', chapters: [
      { title: '考研方向', brief: '电子与通信。',
        q: [
          { stem: '电子信息考研的常见方向是：', options: ['电子科学与技术、信息与通信工程、电子信息专硕', '只有电子', '只有通信', '只有专硕'], answer: 0, explain: '多方向。' },
          { stem: '信号与系统在考研中的地位是：', options: ['专业课核心', '不重要', '只考其一', '只考公共课'], answer: 0, explain: '核心。' },
          { stem: '择校最应考虑：', options: ['方向、导师与真题风格', '城市', '学费', '宿舍'], answer: 0, explain: '匹配。' }
        ],
        doc: { lead: '这一章讲方向。', sections: [
          { id: 'paths', title: '方向', html: `<p>电路与系统、通信、信号处理、电磁场、微电子。</p>` },
          { id: 'subjects', title: '科目', html: `<p>政治、英语、数学一、专业课（信号与系统/电路/通信原理）。</p>` }
        ], refs: [] } },
      { title: '专业课复习', brief: '核心课程。',
        q: [
          { stem: '信号与系统复习的主线是：', options: ['时域—频域—复频域—z 域', '只做计算', '只背公式', '只看真题'], answer: 0, explain: '主线。' },
          { stem: '电路复习的重点是：', options: ['等效、动态、正弦稳态', '只有直流', '只有交流', '只有暂态'], answer: 0, explain: '三块。' },
          { stem: '计算题的关键是：', options: ['模型建立 + 计算准确', '猜', '背答案', '跳过'], answer: 0, explain: '建模。' }
        ],
        doc: { lead: '这一章讲复习。', sections: [
          { id: 'signals', title: '信号与系统', html: `<p>卷积、变换、系统函数、采样；典型题型。</p>` },
          { id: 'circuits', title: '电路与通信', html: `<p>等效与暂态、正弦稳态；调制与误码。</p>` }
        ], refs: [] } },
      { title: '求职方向', brief: '硬件、嵌入式、通信。',
        q: [
          { stem: '电子信息毕业生的常见去向不包括：', options: ['硬件工程师', '嵌入式开发', '通信/射频', '外科医生'], answer: 3, explain: '专业限制。' },
          { stem: '硬件岗位看重：', options: ['电路基础与调试能力', '只有编程', '只有英语', '只有证书'], answer: 0, explain: '硬件。' },
          { stem: '求职最加分的材料是：', options: ['项目与实物/数据', '证书数量', '成绩单', '社团'], answer: 0, explain: '项目。' }
        ],
        doc: { lead: '这一章讲就业。', sections: [
          { id: 'paths', title: '路径', html: `<p>硬件、嵌入式、射频通信、芯片、测试、读博。</p>` },
          { id: 'skills', title: '能力', html: `<p>电路设计、PCB、嵌入式 C、仪器使用；项目经验。</p>` }
        ], refs: [] } },
      { title: '面试', brief: '技术与表达。',
        q: [
          { stem: '硬件面试常考：', options: ['电路分析与器件选型', '只有编程', '只有英语', '只有性格'], answer: 0, explain: '专业。' },
          { stem: '讲项目的最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' },
          { stem: '被问到不会的问题应：', options: ['说明思路并诚实承认', '编造', '沉默', '转移话题'], answer: 0, explain: '诚实。' }
        ],
        doc: { lead: '这一章讲面试。', sections: [
          { id: 'tech', title: '技术', html: `<p>电路、器件、通信原理；调试案例。</p>` },
          { id: 'project', title: '项目', html: `<p>方案、难点、数据；STAR；反问环节。</p>` }
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
