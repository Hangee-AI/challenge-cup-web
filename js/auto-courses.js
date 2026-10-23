/* ==========================================================
   auto-courses.js · 自动化：12 门课（主干 8 / 出口 4）= 84 关
   ========================================================== */

(function () {
  var MAJOR = 'engineering-自动化';
  var TITLES = stageTitlesOf('engineering');

  var COURSES = [
    { name: '电路原理', chapters: [
      { title: '电路元件与定律', brief: '基本砖块。',
        q: [
          { stem: '基尔霍夫电压定律基于：', options: ['能量守恒', '电荷守恒', '欧姆定律', '法拉第定律'], answer: 0, explain: 'KVL。' },
          { stem: '理想电流源的内阻是：', options: ['无穷大', '零', '有限', '不确定'], answer: 0, explain: '无穷。' },
          { stem: '参考方向的作用是：', options: ['统一符号约定、便于列方程', '测量', '保护', '散热'], answer: 0, explain: '约定。' }
        ],
        doc: { lead: '这一章讲元件。', sections: [
          { id: 'elements', title: '元件', html: `<p>电阻、电容、电感；独立源与受控源。</p>` },
          { id: 'laws', title: '定律', html: `<p>KCL、KVL、欧姆定律；参考方向与功率。</p>` }
        ], refs: [] } },
      { title: '电阻电路分析', brief: '解方程。',
        q: [
          { stem: '节点法的未知量是：', options: ['节点电压', '回路电流', '支路电压', '功率'], answer: 0, explain: '节点电压。' },
          { stem: '叠加定理适用于：', options: ['线性电路', '非线性电路', '任意电路', '只有交流'], answer: 0, explain: '线性。' },
          { stem: '戴维南等效包含：', options: ['开路电压与等效电阻', '短路电流', '只有电阻', '只有电源'], answer: 0, explain: '两参数。' }
        ],
        doc: { lead: '这一章讲分析。', sections: [
          { id: 'methods', title: '方法', html: `<p>等效变换、节点法、网孔法；受控源处理。</p>` },
          { id: 'theorems', title: '定理', html: `<p>叠加、戴维南、诺顿、最大功率传输。</p>` }
        ], refs: [] } },
      { title: '动态电路', brief: '储能。',
        q: [
          { stem: '一阶电路时间常数是：', options: ['RC 或 L/R', 'R/C', 'LC', 'L·R'], answer: 0, explain: '时间常数。' },
          { stem: '换路定则指：', options: ['电容电压与电感电流不跃变', '电压不跃变', '电流不跃变', '功率不跃变'], answer: 0, explain: '定则。' },
          { stem: '三要素法需要：', options: ['初始值、稳态值、时间常数', '只有初始值', '只有稳态值', '只有时间常数'], answer: 0, explain: '三要素。' }
        ],
        doc: { lead: '这一章讲动态。', sections: [
          { id: 'first', title: '一阶', html: `<p>零输入、零状态、全响应；三要素法。</p>` },
          { id: 'second', title: '二阶', html: `<p>特征根；过阻尼、临界、欠阻尼。</p>` }
        ], refs: [] } },
      { title: '正弦稳态', brief: '交流。',
        q: [
          { stem: '相量法把微分方程化为：', options: ['代数方程', '积分方程', '差分方程', '偏微分'], answer: 0, explain: '代数。' },
          { stem: '阻抗的虚部称为：', options: ['电抗', '电阻', '导纳', '功率'], answer: 0, explain: '电抗。' },
          { stem: '谐振时功率因数为：', options: ['1', '0', '0.5', '−1'], answer: 0, explain: '谐振。' }
        ],
        doc: { lead: '这一章讲交流。', sections: [
          { id: 'phasor', title: '相量', html: `<p>有效值相量、阻抗与导纳；相量图。</p>` },
          { id: 'power', title: '功率', html: `<p>有功、无功、视在；功率因数与谐振。</p>` }
        ], refs: [] } },
      { title: '三相与互感', brief: '工业与耦合。',
        q: [
          { stem: '星形连接线电压是相电压的：', options: ['√3 倍', '1 倍', '2 倍', '3 倍'], answer: 0, explain: '√3。' },
          { stem: '互感系数与耦合系数关系：', options: ['k = M/√(L₁L₂)', 'k = M', 'k = L₁L₂', 'k = √M'], answer: 0, explain: '定义。' },
          { stem: '同名端用于确定：', options: ['互感电压极性', '匝数', '功率', '频率'], answer: 0, explain: '极性。' }
        ],
        doc: { lead: '这一章讲三相。', sections: [
          { id: 'three', title: '三相', html: `<p>星形与三角形；线量相量关系；中性线。</p>` },
          { id: 'mutual', title: '互感', html: `<p>同名端、耦合系数；变压器初步。</p>` }
        ], refs: [] } },
      { title: '频率响应', brief: '频域。',
        q: [
          { stem: '网络函数描述：', options: ['输出与输入之比随频率变化', '功率', '阻抗', '电流'], answer: 0, explain: '网络函数。' },
          { stem: '截止频率处的幅度是最大值的：', options: ['0.707 倍', '0.5 倍', '1 倍', '0 倍'], answer: 0, explain: '−3dB。' },
          { stem: '滤波器按通带分为：', options: ['低通、高通、带通、带阻', '只有低通', '只有高通', '只有带通'], answer: 0, explain: '四类。' }
        ],
        doc: { lead: '这一章讲频响。', sections: [
          { id: 'response', title: '频响', html: `<p>幅频与相频、波特图；谐振电路。</p>` },
          { id: 'filter', title: '滤波', html: `<p>低通/高通/带通/带阻；无源与有源滤波。</p>` }
        ], refs: [] } },
      { title: '二端口与电路实验', brief: '端口与动手。',
        q: [
          { stem: '二端口网络的参数包括：', options: ['Z、Y、H、ABCD', '只有 Z', '只有 Y', '只有 H'], answer: 0, explain: '多种。' },
          { stem: '测量电压应：', options: ['并联接入', '串联', '短接', '不用表笔'], answer: 0, explain: '并联。' },
          { stem: '实验误差分析的意义是：', options: ['判断结果可靠性', '装饰', '凑数', '无意义'], answer: 0, explain: '误差。' }
        ],
        doc: { lead: '这一章讲端口。', sections: [
          { id: 'twoport', title: '二端口', html: `<p>参数矩阵、互易与对称；级联。</p>` },
          { id: 'experiment', title: '实验', html: `<p>万用表、示波器、信号源；伏安法与电桥。</p>` }
        ], refs: [] } },
      { title: '电路综合训练', brief: '把方法串起来。',
        q: [
          { stem: '解电路题的第一步是：', options: ['明确已知与所求、画图', '列方程', '计算', '检查'], answer: 0, explain: '分析。' },
          { stem: '受控源的处理要点是：', options: ['先当作独立源列方程再补控制关系', '忽略', '视为电阻', '视为短路'], answer: 0, explain: '控制关系。' },
          { stem: '检验结果的方法包括：', options: ['功率平衡与量纲检查', '猜', '背答案', '跳过'], answer: 0, explain: '检验。' }
        ],
        doc: { lead: '这一章讲训练。', sections: [
          { id: 'method', title: '方法', html: `<p>建模、列方程、求解、检验；一题多解。</p>` },
          { id: 'habit', title: '习惯', html: `<p>画图、标方向、写单位；错题归因。</p>` }
        ], refs: [] } }
    ] },
    { name: '高等数学（工科）', chapters: [
      { title: '极限与连续', brief: '基础。',
        q: [
          { stem: 'lim(x→0) sinx/x 等于：', options: ['1', '0', '∞', '不存在'], answer: 0, explain: '重要极限。' },
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
          { id: 'derivative', title: '导数', html: `<p>定义、法则；隐函数与参数方程。</p>` },
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
          { id: 'definite', title: '定积分', html: `<p>性质与计算；应用；反常积分。</p>` }
        ], refs: [] } },
      { title: '微分方程', brief: '动态建模。',
        q: [
          { stem: '一阶线性方程用：', options: ['积分因子法', '分离变量', '特征方程', '级数'], answer: 0, explain: '积分因子。' },
          { stem: '二阶常系数方程的解由：', options: ['特征根决定', '初值唯一', '常数项', '次数'], answer: 0, explain: '特征根。' },
          { stem: '拉普拉斯变换用于：', options: ['解微分方程', '求积分', '判敛', '排序'], answer: 0, explain: '变换。' }
        ],
        doc: { lead: '这一章讲方程。', sections: [
          { id: 'first', title: '一阶', html: `<p>可分离、线性；建模（RC、RL 电路）。</p>` },
          { id: 'second', title: '二阶', html: `<p>常系数、特征根；受迫振动。</p>` }
        ], refs: [] } },
      { title: '级数与变换', brief: '无穷与频域。',
        q: [
          { stem: 'p 级数收敛条件是：', options: ['p > 1', 'p < 1', 'p = 1', '任意'], answer: 0, explain: 'p>1。' },
          { stem: '傅里叶级数用于：', options: ['周期信号展开', '任意函数', '只有多项式', '只有指数'], answer: 0, explain: '周期。' },
          { stem: '拉氏变换把微分方程化为：', options: ['代数方程', '积分方程', '差分方程', '偏微分'], answer: 0, explain: '代数。' }
        ],
        doc: { lead: '这一章讲级数。', sections: [
          { id: 'series', title: '级数', html: `<p>判别法、幂级数；收敛半径。</p>` },
          { id: 'transform', title: '变换', html: `<p>傅里叶级数、拉普拉斯变换；初值终值定理。</p>` }
        ], refs: [] } },
      { title: '线性代数', brief: '系统语言。',
        q: [
          { stem: '矩阵可逆的条件是：', options: ['行列式不为零', '元素非零', '对称', '满秩唯一'], answer: 0, explain: '非奇异。' },
          { stem: '特征值用于：', options: ['系统稳定性与解耦', '求积分', '求极限', '排序'], answer: 0, explain: '特征值。' },
          { stem: '状态方程的矩阵形式是：', options: ['ẋ = Ax + Bu', 'ẋ = A + B', 'ẋ = AB', 'ẋ = A/u'], answer: 0, explain: '状态方程。' }
        ],
        doc: { lead: '这一章讲线代。', sections: [
          { id: 'matrix', title: '矩阵', html: `<p>运算、逆、秩、特征值；对角化。</p>` },
          { id: 'application', title: '应用', html: `<p>状态方程、系统解耦；最小二乘。</p>` }
        ], refs: [] } },
      { title: '多元与重积分', brief: '多维。',
        q: [
          { stem: '全微分的充分条件是：', options: ['偏导连续', '偏导存在', '连续', '有界'], answer: 0, explain: '充分。' },
          { stem: '极坐标面积元素是：', options: ['r dr dθ', 'dr dθ', 'r² dr dθ', 'dθ'], answer: 0, explain: '雅可比。' },
          { stem: '条件极值用：', options: ['拉格朗日乘数法', '洛必达', '泰勒', '积分'], answer: 0, explain: '乘数法。' }
        ],
        doc: { lead: '这一章讲多元。', sections: [
          { id: 'multivariate', title: '多元微分', html: `<p>偏导、全微分、梯度、极值。</p>` },
          { id: 'integral', title: '重积分', html: `<p>二重、三重；坐标变换；应用。</p>` }
        ], refs: [] } },
      { title: '计算方法与工具', brief: '算得准。',
        q: [
          { stem: '数值求解微分方程常用：', options: ['欧拉法与 RK 法', '解析解', '查表', '积分唯一'], answer: 0, explain: '数值。' },
          { stem: 'MATLAB 在工科中的作用是：', options: ['建模、仿真与计算', '装饰', '排版', '绘图唯一'], answer: 0, explain: '工具。' },
          { stem: '结果检验应：', options: ['量纲与特例检查', '猜', '跳过', '只看数值'], answer: 0, explain: '检验。' }
        ],
        doc: { lead: '这一章讲计算。', sections: [
          { id: 'numerical', title: '数值', html: `<p>方程求根、数值积分、ODE 数值解；稳定性。</p>` },
          { id: 'tools', title: '工具', html: `<p>MATLAB/Python；符号与数值；仿真验证。</p>` }
        ], refs: [] } }
    ] },
    { name: 'C 语言程序设计', chapters: [
      { title: '基础语法', brief: '入门。',
        q: [
          { stem: 'C 程序入口是：', options: ['main 函数', '任意函数', '文件头', '编译器'], answer: 0, explain: 'main。' },
          { stem: 'printf 的 %d 用于：', options: ['整数', '浮点', '字符', '字符串'], answer: 0, explain: '%d。' },
          { stem: '语句以什么结束？', options: ['分号', '逗号', '冒号', '括号'], answer: 0, explain: '分号。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'hello', title: '第一个程序', html: `<p>#include、main、printf；编译运行。</p>` },
          { id: 'types', title: '类型', html: `<p>整型、浮点、字符；格式化输入输出。</p>` }
        ], refs: [] } },
      { title: '控制与函数', brief: '流程。',
        q: [
          { stem: 'for 循环三部分是：', options: ['初始化、条件、更新', '开始、中间、结束', '输入、处理、输出', '条件、体、返回'], answer: 0, explain: '三部分。' },
          { stem: '递归必须有：', options: ['终止条件', '循环', '指针', '全局变量'], answer: 0, explain: '基准。' },
          { stem: '值传递不能：', options: ['修改实参', '返回值', '递归', '嵌套'], answer: 0, explain: '单向。' }
        ],
        doc: { lead: '这一章讲控制。', sections: [
          { id: 'control', title: '控制', html: `<p>if/switch、for/while；break/continue。</p>` },
          { id: 'function', title: '函数', html: `<p>声明定义、参数、返回值；递归。</p>` }
        ], refs: [] } },
      { title: '数组与指针', brief: '批量与地址。',
        q: [
          { stem: '数组名在表达式中退化为：', options: ['指向首元素的指针', '长度', '值', '类型'], answer: 0, explain: '指针。' },
          { stem: '指针 p+1 移动字节数取决于：', options: ['所指类型大小', '1 字节', '4 字节', '不确定'], answer: 0, explain: '类型。' },
          { stem: '越界访问会：', options: ['未定义行为', '自动扩容', '报错', '无害'], answer: 0, explain: 'UB。' }
        ],
        doc: { lead: '这一章讲数组。', sections: [
          { id: 'array', title: '数组', html: `<p>一维/二维；遍历、排序、查找。</p>` },
          { id: 'pointer', title: '指针', html: `<p>取地址、解引用；指针与数组；字符串。</p>` }
        ], refs: [] } },
      { title: '结构体与文件', brief: '组织。',
        q: [
          { stem: '结构体用于：', options: ['表示一组相关数据', '单个值', '函数', '文件'], answer: 0, explain: '聚合。' },
          { stem: 'fopen 的 "r" 表示：', options: ['只读', '只写', '追加', '读写'], answer: 0, explain: '只读。' },
          { stem: 'fclose 的作用是：', options: ['刷新缓冲并释放资源', '删除', '重命名', '加密'], answer: 0, explain: '关闭。' }
        ],
        doc: { lead: '这一章讲组织。', sections: [
          { id: 'struct', title: '结构体', html: `<p>定义、数组与指针；typedef。</p>` },
          { id: 'file', title: '文件', html: `<p>fopen/fread/fwrite/fclose；文本与二进制。</p>` }
        ], refs: [] } },
      { title: '位运算与内存', brief: '底层。',
        q: [
          { stem: '位运算 & 的作用是：', options: ['按位与（常用于清零/取位）', '逻辑与', '加法', '取反'], answer: 0, explain: '按位与。' },
          { stem: 'malloc 分配的内存在：', options: ['堆', '栈', '静态区', '代码区'], answer: 0, explain: '堆。' },
          { stem: '寄存器操作常用：', options: ['位运算与指针', '浮点运算', '字符串', '递归'], answer: 0, explain: '位运算。' }
        ],
        doc: { lead: '这一章讲底层。', sections: [
          { id: 'bit', title: '位运算', html: `<p>与或非异或、移位；置位、清零、取位。</p>` },
          { id: 'memory', title: '内存', html: `<p>栈与堆、malloc/free；寄存器映射。</p>` }
        ], refs: [] } },
      { title: '嵌入式编程基础', brief: '控制硬件。',
        q: [
          { stem: 'GPIO 的作用是：', options: ['通用输入输出', '通信', '存储', '时钟'], answer: 0, explain: 'GPIO。' },
          { stem: '中断服务程序应：', options: ['短小快速、避免阻塞', '尽量长', '含延时', '调用打印'], answer: 0, explain: '短小。' },
          { stem: 'volatile 关键字用于：', options: ['防止编译器优化被外部改变的变量', '加速', '加密', '转换'], answer: 0, explain: 'volatile。' }
        ],
        doc: { lead: '这一章讲嵌入式。', sections: [
          { id: 'gpio', title: '外设', html: `<p>GPIO、定时器、串口；寄存器与库函数。</p>` },
          { id: 'interrupt', title: '中断', html: `<p>中断流程、ISR 原则；volatile 与竞态。</p>` }
        ], refs: [] } },
      { title: '调试与规范', brief: '写好代码。',
        q: [
          { stem: '调试第一步是：', options: ['复现问题', '改代码', '重装', '问人'], answer: 0, explain: '复现。' },
          { stem: 'assert 的作用是：', options: ['检查不变量', '替代异常', '优化', '打印'], answer: 0, explain: '断言。' },
          { stem: '好代码标准是：', options: ['正确、可读、可维护', '短', '炫技', '无注释'], answer: 0, explain: '多维。' }
        ],
        doc: { lead: '这一章讲规范。', sections: [
          { id: 'debug', title: '调试', html: `<p>断点、日志、最小复现；串口打印。</p>` },
          { id: 'style', title: '规范', html: `<p>命名、注释、警告全开；版本控制。</p>` }
        ], refs: [] } },
      { title: '课程设计', brief: '做一个小系统。',
        q: [
          { stem: '课程设计开始前应先：', options: ['明确需求与模块划分', '写界面', '选芯片', '画板'], answer: 0, explain: '需求。' },
          { stem: '模块化的好处是：', options: ['便于测试与维护', '代码更长', '运行更快', '无需文档'], answer: 0, explain: '模块化。' },
          { stem: '交付应包含：', options: ['源码、说明、测试记录', '只有源码', '只有实物', '只有报告'], answer: 0, explain: '完整。' }
        ],
        doc: { lead: '这一章讲实战。', sections: [
          { id: 'project', title: '项目', html: `<p>温度采集、电机控制、显示与按键；状态机。</p>` },
          { id: 'deliver', title: '交付', html: `<p>README、接线图、测试用例；答辩演示。</p>` }
        ], refs: [] } }
    ] },
    { name: '模拟电子技术', chapters: [
      { title: '半导体与二极管', brief: 'PN 结。',
        q: [
          { stem: 'PN 结单向导电指：', options: ['正偏导通、反偏截止', '双向导通', '双向截止', '无关'], answer: 0, explain: '单向。' },
          { stem: '硅二极管导通压降约为：', options: ['0.7 V', '0 V', '5 V', '10 V'], answer: 0, explain: '0.7。' },
          { stem: '稳压管工作在：', options: ['反向击穿区', '正向导通区', '截止区', '饱和区'], answer: 0, explain: '击穿。' }
        ],
        doc: { lead: '这一章讲半导体。', sections: [
          { id: 'pn', title: 'PN 结', html: `<p>载流子、伏安特性；温度影响。</p>` },
          { id: 'diode', title: '二极管', html: `<p>整流、稳压、限幅；小信号模型。</p>` }
        ], refs: [] } },
      { title: '三极管放大', brief: '核心。',
        q: [
          { stem: '三极管三区是：', options: ['截止、放大、饱和', '只有放大', '只有截止', '只有饱和'], answer: 0, explain: '三区。' },
          { stem: '共射电路输出与输入：', options: ['反相', '同相', '无关', '相同'], answer: 0, explain: '反相。' },
          { stem: '静态工作点保证：', options: ['不失真放大', '增益最大唯一', '功耗最低', '频率最高'], answer: 0, explain: 'Q 点。' }
        ],
        doc: { lead: '这一章讲三极管。', sections: [
          { id: 'bjt', title: 'BJT', html: `<p>结构、电流关系、特性曲线。</p>` },
          { id: 'amplifier', title: '放大电路', html: `<p>共射/共集/共基；Q 点与增益。</p>` }
        ], refs: [] } },
      { title: '场效应管', brief: '电压控制。',
        q: [
          { stem: 'MOSFET 是：', options: ['电压控制器件', '电流控制', '无控制', '光控'], answer: 0, explain: '电压。' },
          { stem: 'FET 的优势是：', options: ['输入阻抗高、噪声低', '功率大唯一', '速度快唯一', '便宜'], answer: 0, explain: '高阻。' },
          { stem: '增强型与耗尽型区别是：', options: ['零栅压是否导通', '材料', '功率', '频率'], answer: 0, explain: '常开常闭。' }
        ],
        doc: { lead: '这一章讲 FET。', sections: [
          { id: 'mosfet', title: 'MOSFET', html: `<p>结构、转移特性；开关与放大。</p>` },
          { id: 'compare', title: '比较', html: `<p>FET 与 BJT 差异；偏置方式。</p>` }
        ], refs: [] } },
      { title: '运放与反馈', brief: '模块化。',
        q: [
          { stem: '理想运放特性是：', options: ['虚短与虚断', '增益有限', '输入阻抗低', '输出阻抗高'], answer: 0, explain: '虚短虚断。' },
          { stem: '负反馈的作用是：', options: ['稳定增益、扩展带宽、减小失真', '提高增益', '增大失真', '降低稳定'], answer: 0, explain: '负反馈。' },
          { stem: '负反馈可能引起：', options: ['自激振荡', '增益上升', '带宽变窄', '无影响'], answer: 0, explain: '振荡。' }
        ],
        doc: { lead: '这一章讲运放。', sections: [
          { id: 'opamp', title: '运放', html: `<p>虚短虚断；比例、加法、积分、微分。</p>` },
          { id: 'feedback', title: '反馈', html: `<p>四种组态、负反馈效应；稳定性判别。</p>` }
        ], refs: [] } },
      { title: '信号调理', brief: '接口电路。',
        q: [
          { stem: '仪表放大器用于：', options: ['放大微弱差分信号、抑制共模', '功率放大', '滤波唯一', '整流'], answer: 0, explain: '仪表放大。' },
          { stem: '比较器与运放的区别是：', options: ['是否工作在线性区', '是否放大', '是否供电', '是否反馈'], answer: 0, explain: '非线性。' },
          { stem: '有源滤波相比无源：', options: ['可带负载、便于集成', '更简单', '无需电源', '频率更高'], answer: 0, explain: '有源。' }
        ],
        doc: { lead: '这一章讲调理。', sections: [
          { id: 'instrumentation', title: '仪表放大', html: `<p>共模抑制、差分放大；传感器接口。</p>` },
          { id: 'conditioning', title: '调理', html: `<p>比较器、有源滤波、电平转换；隔离。</p>` }
        ], refs: [] } },
      { title: '功率与电源', brief: '能量。',
        q: [
          { stem: '乙类功放交越失真源于：', options: ['死区电压', '电源不稳', '负载', '频率'], answer: 0, explain: '交越。' },
          { stem: '开关电源的优势是：', options: ['效率高', '纹波小', '简单', '便宜唯一'], answer: 0, explain: '效率。' },
          { stem: '线性稳压的优点是：', options: ['纹波小、噪声低', '效率高', '体积小', '输入范围宽'], answer: 0, explain: '低噪。' }
        ],
        doc: { lead: '这一章讲功率。', sections: [
          { id: 'poweramp', title: '功放', html: `<p>甲、乙、甲乙类；效率与失真；散热。</p>` },
          { id: 'supply', title: '电源', html: `<p>整流滤波、线性稳压、开关电源；纹波。</p>` }
        ], refs: [] } },
      { title: '噪声与抗干扰', brief: '实用问题。',
        q: [
          { stem: '降低噪声的措施包括：', options: ['合理偏置、屏蔽、滤波、接地', '提高增益唯一', '加反馈唯一', '换电源'], answer: 0, explain: '多种。' },
          { stem: '共模干扰的抑制依赖：', options: ['差分输入与共模抑制比', '增益', '带宽', '电源'], answer: 0, explain: 'CMRR。' },
          { stem: '接地不当会导致：', options: ['地环路与干扰耦合', '增益上升', '带宽变宽', '无影响'], answer: 0, explain: '地环路。' }
        ],
        doc: { lead: '这一章讲噪声。', sections: [
          { id: 'noise', title: '噪声', html: `<p>热噪声、散粒噪声；信噪比。</p>` },
          { id: 'emi', title: '抗扰', html: `<p>屏蔽、接地、去耦；共模与差模。</p>` }
        ], refs: [] } },
      { title: '模电实验', brief: '动手。',
        q: [
          { stem: '测增益应使用：', options: ['示波器测输入输出幅度', '万用表测电阻', '信号源', '电源'], answer: 0, explain: '示波器。' },
          { stem: '静态工作点测量包括：', options: ['Ube、Uce、Ic', '只有 Uce', '只有 Ic', '只有 Ube'], answer: 0, explain: '三量。' },
          { stem: '出现自激振荡应：', options: ['检查反馈与去耦', '提高增益', '加大输入', '忽略'], answer: 0, explain: '排查。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'measure', title: '测量', html: `<p>Q 点、增益、输入输出电阻；频率特性。</p>` },
          { id: 'trouble', title: '排故', html: `<p>无输出、失真、振荡；电源与接地。</p>` }
        ], refs: [] } }
    ] },
    { name: '数字电子技术', chapters: [
      { title: '逻辑代数', brief: '0 与 1。',
        q: [
          { stem: '二进制 1101 等于十进制：', options: ['13', '11', '9', '15'], answer: 0, explain: '13。' },
          { stem: '德摩根律是：', options: ['(A+B)\' = A\'·B\'', '(A·B)\' = A\'·B\'', 'A+A\'=1', 'A·A\'=0'], answer: 0, explain: '对偶。' },
          { stem: '卡诺图用于：', options: ['化简逻辑函数', '计数', '存储', '转换'], answer: 0, explain: '化简。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'number', title: '数制', html: `<p>二/十六进制；补码；BCD。</p>` },
          { id: 'boolean', title: '逻辑代数', html: `<p>定律、卡诺图、最小项；化简。</p>` }
        ], refs: [] } },
      { title: '门电路与电平', brief: '物理实现。',
        q: [
          { stem: 'CMOS 的优势是：', options: ['功耗低、抗干扰好', '功耗高', '速度快唯一', '不能集成'], answer: 0, explain: 'CMOS。' },
          { stem: '三态门用于：', options: ['总线共享', '放大', '存储', '计数'], answer: 0, explain: '三态。' },
          { stem: '噪声容限衡量：', options: ['抗干扰能力', '速度', '功耗', '面积'], answer: 0, explain: '容限。' }
        ],
        doc: { lead: '这一章讲门。', sections: [
          { id: 'gates', title: '逻辑门', html: `<p>与或非、异或；真值表与符号。</p>` },
          { id: 'levels', title: '电平', html: `<p>TTL/CMOS 电平、扇出、噪声容限；三态。</p>` }
        ], refs: [] } },
      { title: '组合逻辑', brief: '无记忆。',
        q: [
          { stem: '组合逻辑输出取决于：', options: ['当前输入', '历史输入', '时钟', '状态'], answer: 0, explain: '当前输入。' },
          { stem: '译码器作用：', options: ['编码转唯一输出', '计数', '存储', '放大'], answer: 0, explain: '译码。' },
          { stem: '竞争冒险消除方法：', options: ['加冗余项或滤波', '提高频率', '增加级数', '降压'], answer: 0, explain: '消除。' }
        ],
        doc: { lead: '这一章讲组合。', sections: [
          { id: 'design', title: '设计', html: `<p>真值表—表达式—电路；编码器、译码器、选择器、加法器。</p>` },
          { id: 'hazard', title: '冒险', html: `<p>竞争与冒险；消除。</p>` }
        ], refs: [] } },
      { title: '时序逻辑', brief: '有记忆。',
        q: [
          { stem: '触发器能存：', options: ['一位二进制', '一个字节', '一个数', '一个程序'], answer: 0, explain: '一位。' },
          { stem: '同步与异步区别：', options: ['是否统一时钟', '是否有触发器', '是否有反馈', '是否计数'], answer: 0, explain: '时钟。' },
          { stem: '状态图描述：', options: ['状态与转移条件', '真值表', '波形', '电路'], answer: 0, explain: '状态。' }
        ],
        doc: { lead: '这一章讲时序。', sections: [
          { id: 'ff', title: '触发器', html: `<p>RS、D、JK、T；特性方程。</p>` },
          { id: 'analysis', title: '分析设计', html: `<p>状态表/图；计数器与寄存器。</p>` }
        ], refs: [] } },
      { title: '计数器与寄存器', brief: '常用模块。',
        q: [
          { stem: '模 N 计数器有：', options: ['N 个状态', 'N+1 个', '2N 个', 'N² 个'], answer: 0, explain: '模数。' },
          { stem: '移位寄存器可实现：', options: ['串并转换与延时', '放大', '译码', '加法'], answer: 0, explain: '移位。' },
          { stem: '同步计数器相比异步：', options: ['更快、无累积延迟', '更慢', '更简单', '不能级联'], answer: 0, explain: '同步。' }
        ],
        doc: { lead: '这一章讲模块。', sections: [
          { id: 'counter', title: '计数器', html: `<p>同步/异步、模 N 设计；级联。</p>` },
          { id: 'register', title: '寄存器', html: `<p>并行、移位；串并转换、序列检测。</p>` }
        ], refs: [] } },
      { title: '存储与可编程逻辑', brief: '存与配置。',
        q: [
          { stem: 'ROM 与 RAM 区别：', options: ['是否可随机写', '容量', '速度', '电压'], answer: 0, explain: '读写。' },
          { stem: 'FPGA 特点是：', options: ['可现场编程、并行度高', '固定功能', '只仿真', '最便宜'], answer: 0, explain: 'FPGA。' },
          { stem: '1 KB 等于：', options: ['1024 B', '1000 B', '8 B', '1024 bit'], answer: 0, explain: '1024。' }
        ],
        doc: { lead: '这一章讲存储。', sections: [
          { id: 'memory', title: '存储器', html: `<p>ROM、RAM、Flash；容量扩展与译码。</p>` },
          { id: 'pld', title: '可编程', html: `<p>PLD/CPLD/FPGA；HDL 与综合。</p>` }
        ], refs: [] } },
      { title: 'AD/DA 转换', brief: '模拟数字桥。',
        q: [
          { stem: 'A/D 步骤是：', options: ['采样、保持、量化、编码', '只有采样', '只有量化', '只有编码'], answer: 0, explain: '四步。' },
          { stem: '采样定理要求：', options: ['fs > 2fmax', 'fs < 2fmax', 'fs = fmax', '任意'], answer: 0, explain: '奈奎斯特。' },
          { stem: '量化误差来自：', options: ['离散化近似', '电源', '时钟', '温度'], answer: 0, explain: '量化。' }
        ],
        doc: { lead: '这一章讲转换。', sections: [
          { id: 'adc', title: 'ADC', html: `<p>采样定理、量化；逐次比较、双积分。</p>` },
          { id: 'dac', title: 'DAC', html: `<p>权电阻、倒 T 型；分辨率与精度。</p>` }
        ], refs: [] } },
      { title: '数电实验', brief: '动手。',
        q: [
          { stem: '数电调试常用：', options: ['逻辑笔与示波器', '万用表唯一', '信号源唯一', '电源'], answer: 0, explain: '工具。' },
          { stem: '出现毛刺应：', options: ['检查竞争与时钟', '提高电压', '加大负载', '忽略'], answer: 0, explain: '毛刺。' },
          { stem: 'HDL 设计流程是：', options: ['设计—仿真—综合—下载', '只有综合', '只有下载', '只有仿真'], answer: 0, explain: '流程。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'experiment', title: '实验', html: `<p>组合、时序、计数器；面包板与开发板。</p>` },
          { id: 'flow', title: '流程', html: `<p>HDL 设计、仿真、综合、下载；测试激励。</p>` }
        ], refs: [] } }
    ] },
    { name: '自动控制原理', chapters: [
      { title: '控制系统概述', brief: '什么是控制。',
        q: [
          { stem: '开环与闭环的区别是：', options: ['是否有反馈', '是否有电源', '是否线性', '是否连续'], answer: 0, explain: '反馈。' },
          { stem: '负反馈的作用是：', options: ['减小偏差、提高精度', '增大偏差', '加速唯一', '降成本'], answer: 0, explain: '负反馈。' },
          { stem: '控制系统的基本要求是：', options: ['稳、准、快', '只有稳', '只有准', '只有快'], answer: 0, explain: '三性。' }
        ],
        doc: { lead: '这一章讲概述。', sections: [
          { id: 'concept', title: '概念', html: `<p>开环/闭环、反馈；给定与扰动。</p>` },
          { id: 'requirements', title: '要求', html: `<p>稳定性、准确性、快速性；性能指标。</p>` }
        ], refs: [] } },
      { title: '数学模型', brief: '建模。',
        q: [
          { stem: '传递函数的定义是：', options: ['零初始条件下输出与输入拉氏变换之比', '输出与输入之比', '增益', '误差'], answer: 0, explain: '定义。' },
          { stem: '结构图化简的目的是：', options: ['求取闭环传递函数', '画图', '装饰', '测稳定性'], answer: 0, explain: '化简。' },
          { stem: '梅逊增益公式用于：', options: ['求复杂结构图的传递函数', '求误差', '判稳定', '画根轨迹'], answer: 0, explain: '梅逊。' }
        ],
        doc: { lead: '这一章讲模型。', sections: [
          { id: 'transfer', title: '传递函数', html: `<p>线性化、拉氏变换；典型环节。</p>` },
          { id: 'block', title: '结构图', html: `<p>等效变换、梅逊公式；闭环传递函数。</p>` }
        ], refs: [] } },
      { title: '时域分析', brief: '响应与指标。',
        q: [
          { stem: '一阶系统的时间常数影响：', options: ['响应速度', '稳态误差唯一', '增益', '频率'], answer: 0, explain: '速度。' },
          { stem: '二阶系统阻尼比决定：', options: ['超调与振荡', '增益', '稳态误差', '输入'], answer: 0, explain: '阻尼。' },
          { stem: '稳态误差与什么有关？', options: ['系统型别与输入类型', '只有增益', '只有阻尼', '只有时间常数'], answer: 0, explain: '型别。' }
        ],
        doc: { lead: '这一章讲时域。', sections: [
          { id: 'response', title: '响应', html: `<p>一阶/二阶阶跃响应；超调、调节时间。</p>` },
          { id: 'error', title: '稳态误差', html: `<p>误差系数、系统型别；终值定理。</p>` }
        ], refs: [] } },
      { title: '根轨迹', brief: '参数变化。',
        q: [
          { stem: '根轨迹描述：', options: ['闭环极点随开环增益变化', '零点', '频率', '误差'], answer: 0, explain: '根轨迹。' },
          { stem: '根轨迹的起点是：', options: ['开环极点', '开环零点', '原点', '无穷'], answer: 0, explain: '极点。' },
          { stem: '根轨迹可用于：', options: ['分析稳定性与动态性能', '求误差唯一', '求输入', '求噪声'], answer: 0, explain: '分析。' }
        ],
        doc: { lead: '这一章讲根轨迹。', sections: [
          { id: 'rules', title: '绘制规则', html: `<p>分支、渐近线、分离点、出射角。</p>` },
          { id: 'design', title: '应用', html: `<p>稳定性判据、参数选择；补偿设计初步。</p>` }
        ], refs: [] } },
      { title: '频域分析', brief: '频率响应。',
        q: [
          { stem: '奈奎斯特判据依据：', options: ['开环频率特性判断闭环稳定性', '时域响应', '根轨迹', '误差'], answer: 0, explain: '奈氏。' },
          { stem: '相位裕度反映：', options: ['相对稳定性', '增益', '误差', '速度'], answer: 0, explain: '裕度。' },
          { stem: '波特图包含：', options: ['幅频与相频曲线', '只有幅频', '只有相频', '根轨迹'], answer: 0, explain: '波特。' }
        ],
        doc: { lead: '这一章讲频域。', sections: [
          { id: 'bode', title: '波特图', html: `<p>典型环节频率特性；稳定裕度。</p>` },
          { id: 'nyquist', title: '奈氏判据', html: `<p>开环与闭环关系；稳定性判别。</p>` }
        ], refs: [] } },
      { title: '校正与设计', brief: '让系统达标。',
        q: [
          { stem: '超前校正的作用是：', options: ['提高相位裕度、加快响应', '降低增益', '增大误差', '降速'], answer: 0, explain: '超前。' },
          { stem: '滞后校正的作用是：', options: ['提高稳态精度、降低带宽', '加快响应', '提高增益', '减小阻尼'], answer: 0, explain: '滞后。' },
          { stem: 'PID 中 P 的作用是：', options: ['按偏差成比例调节', '积分消除稳态误差', '微分预测', '滤波'], answer: 0, explain: '比例。' }
        ],
        doc: { lead: '这一章讲校正。', sections: [
          { id: 'compensation', title: '校正', html: `<p>超前、滞后、滞后-超前；参数确定。</p>` },
          { id: 'pid', title: 'PID', html: `<p>P/I/D 作用；参数整定（齐格勒-尼科尔斯）。</p>` }
        ], refs: [] } },
      { title: '离散与非线性', brief: '实际系统。',
        q: [
          { stem: '采样系统的稳定性判据常用：', options: ['z 平面单位圆', 's 平面虚轴', '根轨迹', '波特图'], answer: 0, explain: '单位圆。' },
          { stem: '非线性系统的典型现象是：', options: ['极限环与自振', '无响应', '线性', '无稳态'], answer: 0, explain: '极限环。' },
          { stem: '描述函数法用于：', options: ['分析非线性系统的自振', '求传递函数', '画根轨迹', '求误差'], answer: 0, explain: '描述函数。' }
        ],
        doc: { lead: '这一章讲特殊。', sections: [
          { id: 'discrete', title: '离散系统', html: `<p>z 变换、脉冲传递函数；稳定性。</p>` },
          { id: 'nonlinear', title: '非线性', html: `<p>死区、饱和、间隙；描述函数与相平面。</p>` }
        ], refs: [] } },
      { title: '控制实验', brief: '动手。',
        q: [
          { stem: '控制实验常用平台是：', options: ['MATLAB/Simulink 与实验箱', '万用表', '电源', '烙铁'], answer: 0, explain: '平台。' },
          { stem: '阶跃响应测试可获得：', options: ['超调、调节时间等指标', '只有增益', '只有误差', '只有频率'], answer: 0, explain: '指标。' },
          { stem: '仿真与实测不符应：', options: ['检查模型参数与饱和限幅', '改数据', '忽略', '换软件'], answer: 0, explain: '排查。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'simulation', title: '仿真', html: `<p>建模、PID 整定、频域分析；Simulink。</p>` },
          { id: 'experiment', title: '实测', html: `<p>阶跃响应、频率特性测量；模型校验。</p>` }
        ], refs: [] } }
    ] },
    { name: '现代控制理论', chapters: [
      { title: '状态空间模型', brief: '内部描述。',
        q: [
          { stem: '状态方程的形式是：', options: ['ẋ = Ax + Bu', 'y = Ax', 'ẋ = A/u', 'ẋ = AB'], answer: 0, explain: '状态方程。' },
          { stem: '状态变量的个数等于：', options: ['系统阶数', '输入数', '输出数', '极点数的一半'], answer: 0, explain: '阶数。' },
          { stem: '传递函数与状态空间的关系是：', options: ['可相互转换', '无关', '互斥', '相同'], answer: 0, explain: '等价。' }
        ],
        doc: { lead: '这一章讲模型。', sections: [
          { id: 'state', title: '状态方程', html: `<p>状态、输入、输出；建模方法。</p>` },
          { id: 'transfer', title: '与传递函数', html: `<p>G(s) = C(sI−A)⁻¹B + D；实现问题。</p>` }
        ], refs: [] } },
      { title: '状态方程求解', brief: '解出来。',
        q: [
          { stem: '矩阵指数 e^{At} 的作用是：', options: ['给出状态转移矩阵', '求逆', '求秩', '判稳'], answer: 0, explain: '状态转移。' },
          { stem: '零输入响应由什么决定？', options: ['初始状态与 A', '输入', 'B', 'C'], answer: 0, explain: '初始状态。' },
          { stem: '离散化后系统矩阵为：', options: ['e^{AT}', 'A', 'A+T', 'AT'], answer: 0, explain: '离散化。' }
        ],
        doc: { lead: '这一章讲解。', sections: [
          { id: 'solution', title: '解', html: `<p>状态转移矩阵、零输入与零状态；卷积。</p>` },
          { id: 'discrete', title: '离散化', html: `<p>e^{AT}、ZOH；采样周期影响。</p>` }
        ], refs: [] } },
      { title: '能控性与能观性', brief: '能不能控制/观测。',
        q: [
          { stem: '能控性判据是：', options: ['能控性矩阵满秩', '能观性矩阵满秩', 'A 可逆', 'C 满秩'], answer: 0, explain: '满秩。' },
          { stem: '能观性矩阵是：', options: ['[C; CA; CA²; …]', '[B AB A²B …]', '[A B]', '[C B]'], answer: 0, explain: '能观。' },
          { stem: '能控能观的意义是：', options: ['可实现状态反馈与观测器设计', '保证稳定', '保证精度', '保证速度'], answer: 0, explain: '设计基础。' }
        ],
        doc: { lead: '这一章讲性质。', sections: [
          { id: 'controllability', title: '能控性', html: `<p>判据、能控子空间；PBH 检验。</p>` },
          { id: 'observability', title: '能观性', html: `<p>判据、对偶性；标准形。</p>` }
        ], refs: [] } },
      { title: '稳定性分析', brief: '稳不稳。',
        q: [
          { stem: '渐近稳定的条件是：', options: ['A 的特征值实部全为负', '全为正', '有零实部', '任意'], answer: 0, explain: '负实部。' },
          { stem: '李雅普诺夫函数用于：', options: ['判定稳定性', '求传递函数', '画根轨迹', '求误差'], answer: 0, explain: '李雅普诺夫。' },
          { stem: '能控系统可通过状态反馈：', options: ['任意配置极点', '只能稳定', '不能改变极点', '改变阶数'], answer: 0, explain: '极点配置。' }
        ],
        doc: { lead: '这一章讲稳定。', sections: [
          { id: 'lyapunov', title: '李雅普诺夫', html: `<p>第一法与第二法；正定函数。</p>` },
          { id: 'poleplacement', title: '极点配置', html: `<p>状态反馈、Ackermann 公式；能控性前提。</p>` }
        ], refs: [] } },
      { title: '状态反馈与观测器', brief: '设计。',
        q: [
          { stem: '状态反馈的作用是：', options: ['配置极点、改善性能', '增加输入', '改变输出', '滤波'], answer: 0, explain: '极点配置。' },
          { stem: '观测器的作用是：', options: ['由输出估计状态', '测量输入', '放大', '滤波'], answer: 0, explain: '估计。' },
          { stem: '分离原理说明：', options: ['反馈与观测器可分别设计', '必须一起设计', '只需观测器', '只需反馈'], answer: 0, explain: '分离。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'feedback', title: '状态反馈', html: `<p>极点配置、LQR 思想；稳态误差。</p>` },
          { id: 'observer', title: '观测器', html: `<p>Luenberger 观测器、降维观测器；分离原理。</p>` }
        ], refs: [] } },
      { title: '最优控制初步', brief: '最好。',
        q: [
          { stem: 'LQR 的目标是：', options: ['最小化状态与控制加权的二次型指标', '最大化增益', '最小化误差唯一', '最快速'], answer: 0, explain: 'LQR。' },
          { stem: '最优控制需要：', options: ['性能指标与约束', '只有模型', '只有输入', '只有输出'], answer: 0, explain: '指标。' },
          { stem: '黎卡提方程用于：', options: ['求解 LQR 反馈增益', '求传递函数', '判稳定', '求误差'], answer: 0, explain: 'Riccati。' }
        ],
        doc: { lead: '这一章讲最优。', sections: [
          { id: 'lqr', title: 'LQR', html: `<p>二次型指标、权重选择；Riccati 方程。</p>` },
          { id: 'application', title: '应用', html: `<p>轨迹跟踪、约束处理；MPC 初步。</p>` }
        ], refs: [] } },
      { title: '数字控制', brief: '计算机实现。',
        q: [
          { stem: '数字控制的关键是：', options: ['采样与离散化', '放大器', '滤波器', '电源'], answer: 0, explain: '采样。' },
          { stem: '采样周期过大导致：', options: ['性能下降甚至失稳', '更稳定', '无影响', '精度提高'], answer: 0, explain: '采样。' },
          { stem: '数字 PID 与模拟 PID 的区别是：', options: ['离散化实现', '无积分', '无微分', '无比例'], answer: 0, explain: '离散化。' }
        ],
        doc: { lead: '这一章讲数字。', sections: [
          { id: 'discretize', title: '离散化', html: `<p>ZOH、双线性变换；采样周期选择。</p>` },
          { id: 'implement', title: '实现', html: `<p>数字 PID、量化与饱和；实时性。</p>` }
        ], refs: [] } },
      { title: '现代控制实验', brief: '动手。',
        q: [
          { stem: '状态观测器实验需要：', options: ['模型参数与输出测量', '只有输入', '只有电源', '只有示波器'], answer: 0, explain: '模型。' },
          { stem: '极点配置实验的验证是：', options: ['观察响应是否与设计一致', '只看稳态', '只看增益', '不验证'], answer: 0, explain: '验证。' },
          { stem: '仿真与实测不符应：', options: ['检查模型、饱和与噪声', '改数据', '忽略', '换软件'], answer: 0, explain: '排查。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'simulation', title: '仿真', html: `<p>状态空间建模、极点配置、LQR；MATLAB。</p>` },
          { id: 'experiment', title: '实测', html: `<p>电机/倒立摆平台；观测器与反馈验证。</p>` }
        ], refs: [] } }
    ] },
    { name: '传感器与检测技术', chapters: [
      { title: '检测技术基础', brief: '测量是什么。',
        q: [
          { stem: '传感器的定义是：', options: ['把被测量转换为可用信号的器件', '放大器', '执行器', '控制器'], answer: 0, explain: '转换。' },
          { stem: '灵敏度指：', options: ['输出变化与输入变化之比', '量程', '精度', '分辨率'], answer: 0, explain: '灵敏度。' },
          { stem: '测量误差分为：', options: ['系统误差与随机误差', '只有系统', '只有随机', '无误差'], answer: 0, explain: '两类。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'concept', title: '概念', html: `<p>传感器组成、静态与动态特性；灵敏度、线性度。</p>` },
          { id: 'error', title: '误差', html: `<p>系统与随机误差、精度等级；标定。</p>` }
        ], refs: [] } },
      { title: '电阻式传感器', brief: '应变与热电阻。',
        q: [
          { stem: '应变片的工作原理是：', options: ['电阻随应变变化', '电容变化', '电感变化', '电压变化'], answer: 0, explain: '应变。' },
          { stem: '热电阻测温利用：', options: ['电阻随温度变化', '热电势', '电容', '磁阻'], answer: 0, explain: '热阻。' },
          { stem: '电桥的作用是：', options: ['把电阻变化转换为电压', '放大功率', '滤波', '整流'], answer: 0, explain: '电桥。' }
        ],
        doc: { lead: '这一章讲电阻式。', sections: [
          { id: 'strain', title: '应变', html: `<p>应变片、灵敏度系数；电桥与温度补偿。</p>` },
          { id: 'thermal', title: '热电阻', html: `<p>Pt100、热敏电阻；非线性与自热。</p>` }
        ], refs: [] } },
      { title: '电容电感式传感器', brief: '非电量转换。',
        q: [
          { stem: '电容式传感器可测：', options: ['位移、压力、液位', '只有温度', '只有磁场', '只有光'], answer: 0, explain: '多种。' },
          { stem: '差动结构的作用是：', options: ['提高灵敏度、减小非线性', '降成本', '增大体积', '降精度'], answer: 0, explain: '差动。' },
          { stem: '电涡流传感器用于：', options: ['位移与转速非接触测量', '温度', '压力', '气体'], answer: 0, explain: '涡流。' }
        ],
        doc: { lead: '这一章讲电容电感。', sections: [
          { id: 'capacitive', title: '电容式', html: `<p>变极距、变面积、变介质；测量电路。</p>` },
          { id: 'inductive', title: '电感与涡流', html: `<p>自感互感、电涡流；差动与非线性。</p>` }
        ], refs: [] } },
      { title: '热电与压电', brief: '两种效应。',
        q: [
          { stem: '热电偶基于：', options: ['塞贝克效应', '压电效应', '霍尔效应', '光电效应'], answer: 0, explain: '热电。' },
          { stem: '压电传感器适合测：', options: ['动态力与振动', '静态温度', '静态位移', '气体成分'], answer: 0, explain: '动态。' },
          { stem: '冷端补偿用于：', options: ['热电偶测温', '热电阻', '应变', '电容'], answer: 0, explain: '冷端。' }
        ],
        doc: { lead: '这一章讲热电。', sections: [
          { id: 'thermocouple', title: '热电偶', html: `<p>塞贝克效应、分度表；冷端补偿。</p>` },
          { id: 'piezo', title: '压电', html: `<p>压电效应、电荷放大；动态测量。</p>` }
        ], refs: [] } },
      { title: '光电与磁敏', brief: '光与磁。',
        q: [
          { stem: '光敏电阻的原理是：', options: ['光照改变电阻', '光生电压', '光生电流', '光电发射'], answer: 0, explain: '光导。' },
          { stem: '霍尔传感器可测：', options: ['磁场与转速', '温度', '湿度', '压力'], answer: 0, explain: '霍尔。' },
          { stem: '光电编码器用于：', options: ['测角度与转速', '测温度', '测压力', '测流量'], answer: 0, explain: '编码器。' }
        ],
        doc: { lead: '这一章讲光电。', sections: [
          { id: 'photo', title: '光电', html: `<p>光敏电阻、光电池、光电二极管；特性。</p>` },
          { id: 'magnetic', title: '磁敏', html: `<p>霍尔、磁阻；编码器与测速。</p>` }
        ], refs: [] } },
      { title: '信号调理与接口', brief: '把信号变好用。',
        q: [
          { stem: '信号调理的常见功能包括：', options: ['放大、滤波、隔离、线性化', '只有放大', '只有滤波', '只有隔离'], answer: 0, explain: '多种。' },
          { stem: '4–20 mA 电流环的优势是：', options: ['抗干扰、可断线检测', '速度快', '精度高唯一', '便宜'], answer: 0, explain: '电流环。' },
          { stem: 'A/D 分辨率的单位是：', options: ['位（bit）', '伏特', '赫兹', '欧姆'], answer: 0, explain: '位数。' }
        ],
        doc: { lead: '这一章讲调理。', sections: [
          { id: 'conditioning', title: '调理', html: `<p>放大、滤波、隔离；线性化与补偿。</p>` },
          { id: 'interface', title: '接口', html: `<p>4–20 mA、RS-485、现场总线；A/D 选型。</p>` }
        ], refs: [] } },
      { title: '检测系统设计', brief: '整体。',
        q: [
          { stem: '检测系统设计的核心是：', options: ['精度、稳定性与抗干扰', '只有成本', '只有速度', '只有体积'], answer: 0, explain: '综合。' },
          { stem: '系统误差的消除方法包括：', options: ['校准与补偿', '多测几次', '换传感器', '忽略'], answer: 0, explain: '校准。' },
          { stem: '不确定度评定依据：', options: ['测量模型与误差源分析', '猜', '经验唯一', '厂家标注'], answer: 0, explain: '评定。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'design', title: '设计', html: `<p>选型、量程、精度匹配；布点与安装。</p>` },
          { id: 'uncertainty', title: '不确定度', html: `<p>A/B 类评定、合成；报告方式。</p>` }
        ], refs: [] } },
      { title: '传感器实验', brief: '动手。',
        q: [
          { stem: '传感器标定的目的是：', options: ['建立输入输出关系', '装饰', '测温度', '放大器选择'], answer: 0, explain: '标定。' },
          { stem: '电桥调零的作用是：', options: ['消除初始不平衡', '提高灵敏度', '滤波', '放大'], answer: 0, explain: '调零。' },
          { stem: '实验数据应：', options: ['重复测量并记录条件', '只取一次', '挑选', '编造'], answer: 0, explain: '记录。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'calibration', title: '标定', html: `<p>静态标定、最小二乘拟合；灵敏度与线性度。</p>` },
          { id: 'experiment', title: '实验', html: `<p>应变、热电偶、霍尔；调理电路与采集。</p>` }
        ], refs: [] } }
    ] },
    { name: '过程控制系统', chapters: [
      { title: '过程控制概述', brief: '工业现场。',
        q: [
          { stem: '过程控制的主要被控量是：', options: ['温度、压力、流量、液位', '只有温度', '只有压力', '只有流量'], answer: 0, explain: '四大参数。' },
          { stem: '过程控制的特点是：', options: ['慢过程、大惯性', '极快', '无惯性', '离散'], answer: 0, explain: '慢过程。' },
          { stem: '简单控制系统的组成是：', options: ['被控对象、检测、调节器、执行器', '只有调节器', '只有对象', '只有执行器'], answer: 0, explain: '四部分。' }
        ],
        doc: { lead: '这一章讲概述。', sections: [
          { id: 'concept', title: '概念', html: `<p>被控变量、操纵变量、扰动；控制通道与扰动通道。</p>` },
          { id: 'structure', title: '结构', html: `<p>检测变送、调节器、执行器；单回路。</p>` }
        ], refs: [] } },
      { title: '对象特性与建模', brief: '对象是什么脾气。',
        q: [
          { stem: '自衡性指：', options: ['扰动后能自行稳定', '无法稳定', '无惯性', '纯滞后'], answer: 0, explain: '自衡。' },
          { stem: '纯滞后对控制的影响是：', options: ['降低稳定性、增大超调', '无影响', '提高精度', '加快响应'], answer: 0, explain: '滞后。' },
          { stem: '对象建模的方法包括：', options: ['阶跃响应法、理论建模', '只有阶跃', '只有理论', '猜'], answer: 0, explain: '两种。' }
        ],
        doc: { lead: '这一章讲对象。', sections: [
          { id: 'dynamics', title: '动态特性', html: `<p>放大系数、时间常数、滞后时间；自衡与无自衡。</p>` },
          { id: 'modeling', title: '建模', html: `<p>阶跃响应法、两点法；模型简化。</p>` }
        ], refs: [] } },
      { title: 'PID 控制', brief: '主力算法。',
        q: [
          { stem: '积分作用的作用是：', options: ['消除稳态误差', '加快响应', '提高稳定性', '抑制超调'], answer: 0, explain: '积分。' },
          { stem: '微分作用的作用是：', options: ['超前调节、抑制超调', '消除误差', '提高增益', '滤波'], answer: 0, explain: '微分。' },
          { stem: '积分饱和的解决方法是：', options: ['抗饱和（限幅/积分分离）', '增大积分', '去除微分', '提高增益'], answer: 0, explain: '抗饱和。' }
        ],
        doc: { lead: '这一章讲 PID。', sections: [
          { id: 'actions', title: '作用', html: `<p>P/I/D 的物理意义；正反作用。</p>` },
          { id: 'tuning', title: '整定', html: `<p>经验法、临界比例度法、衰减曲线法；抗饱和。</p>` }
        ], refs: [] } },
      { title: '复杂控制系统', brief: '不止一个回路。',
        q: [
          { stem: '串级控制的作用是：', options: ['抑制内环扰动、改善动态', '减少仪表', '简化', '降成本'], answer: 0, explain: '串级。' },
          { stem: '前馈控制的依据是：', options: ['扰动量的测量', '偏差', '给定值', '输出'], answer: 0, explain: '前馈。' },
          { stem: '比值控制用于：', options: ['保持两流量比例', '保持温度', '保持液位', '保持压力'], answer: 0, explain: '比值。' }
        ],
        doc: { lead: '这一章讲复杂。', sections: [
          { id: 'cascade', title: '串级与分程', html: `<p>主副回路、副回路设计原则；分程控制。</p>` },
          { id: 'feedforward', title: '前馈与比值', html: `<p>前馈补偿、前馈-反馈；比值与选择性控制。</p>` }
        ], refs: [] } },
      { title: '先进控制', brief: '更进一步。',
        q: [
          { stem: '解耦控制解决：', options: ['多变量之间的耦合', '单回路整定', '传感器选型', '通信'], answer: 0, explain: '解耦。' },
          { stem: '模型预测控制的核心是：', options: ['滚动优化与反馈校正', '固定 PID', '查表', '模糊规则'], answer: 0, explain: 'MPC。' },
          { stem: '自适应控制适用于：', options: ['对象参数变化', '对象不变', '无扰动', '无模型'], answer: 0, explain: '自适应。' }
        ],
        doc: { lead: '这一章讲先进。', sections: [
          { id: 'decoupling', title: '解耦', html: `<p>相对增益矩阵、解耦器设计。</p>` },
          { id: 'mpc', title: 'MPC 与自适应', html: `<p>预测模型、滚动优化、反馈校正；增益调度。</p>` }
        ], refs: [] } },
      { title: '执行器与阀门', brief: '最后一步。',
        q: [
          { stem: '调节阀的流量特性包括：', options: ['线性、等百分比、快开', '只有线性', '只有等百分比', '只有快开'], answer: 0, explain: '多种。' },
          { stem: '阀门口径选择过大会：', options: ['调节精度差、易振荡', '更稳定', '无影响', '更省能'], answer: 0, explain: '选型。' },
          { stem: '气开与气关的选择依据：', options: ['故障时的安全性', '价格', '口径', '材质'], answer: 0, explain: '安全。' }
        ],
        doc: { lead: '这一章讲执行器。', sections: [
          { id: 'valve', title: '调节阀', html: `<p>流量特性、口径计算、气开气关；阀门定位器。</p>` },
          { id: 'other', title: '其他执行器', html: `<p>变频器、电动执行机构；故障安全。</p>` }
        ], refs: [] } },
      { title: '工程实施', brief: '落地。',
        q: [
          { stem: '控制系统投运的第一步是：', options: ['检查仪表与回路接线', '直接投自动', '调 PID', '改工艺'], answer: 0, explain: '检查。' },
          { stem: '无扰切换的意义是：', options: ['手动切自动时输出不突变', '加快响应', '提高精度', '省电'], answer: 0, explain: '无扰。' },
          { stem: '控制方案确定前应做：', options: ['工艺与控制需求分析', '买仪表', '写程序', '画图'], answer: 0, explain: '分析。' }
        ],
        doc: { lead: '这一章讲实施。', sections: [
          { id: 'commissioning', title: '投运', html: `<p>仪表校验、回路检查、参数整定；无扰切换。</p>` },
          { id: 'design', title: '方案', html: `<p>控制方案选择、安全联锁；DCS/PLC 实现。</p>` }
        ], refs: [] } },
      { title: '过程控制实验', brief: '动手。',
        q: [
          { stem: '过程控制实验装置常模拟：', options: ['液位/温度/流量', '只有液位', '只有温度', '只有流量'], answer: 0, explain: '多种。' },
          { stem: '整定 PID 时应：', options: ['先比例后积分再微分', '先微分', '同时调', '只调积分'], answer: 0, explain: '顺序。' },
          { stem: '阶跃扰动实验可得到：', options: ['对象动态参数', '只有稳态', '只有增益', '无信息'], answer: 0, explain: '参数。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'experiment', title: '实验', html: `<p>液位/温度单回路、串级；PID 整定。</p>` },
          { id: 'analysis', title: '分析', html: `<p>响应曲线、性能指标；扰动试验。</p>` }
        ], refs: [] } }
    ] },

    /* ---- 大四 ---- */
    { name: '毕业设计', chapters: [
      { title: '选题与开题', brief: '做什么。',
        q: [
          { stem: '自动化毕业设计选题关键是：', options: ['问题明确、工作量适中、可交付', '题目宏大', '追热点', '导师偏好'], answer: 0, explain: '可行。' },
          { stem: '开题报告应包含：', options: ['背景、目标、方案、计划', '只有背景', '只有计划', '只有方案'], answer: 0, explain: '四要素。' },
          { stem: '技术路线应：', options: ['明确方法与验证手段', '只有框图', '只有器件', '只有论文'], answer: 0, explain: '路线。' }
        ],
        doc: { lead: '这一章讲开题。', sections: [
          { id: 'topic', title: '选题', html: `<p>控制系统、机器人、检测装置；范围可控。</p>` },
          { id: 'proposal', title: '开题', html: `<p>背景、目标、方案、进度、风险；可行性。</p>` }
        ], refs: [] } },
      { title: '设计与实现', brief: '做出来。',
        q: [
          { stem: '系统设计的第一步是：', options: ['需求与指标分解', '选型', '画板', '写代码'], answer: 0, explain: '需求。' },
          { stem: '控制算法实现前应：', options: ['先仿真验证', '直接上机', '只写文档', '只画图'], answer: 0, explain: '仿真。' },
          { stem: '硬件与软件联调时应：', options: ['分模块验证再集成', '一次集成', '只测软件', '只测硬件'], answer: 0, explain: '分模块。' }
        ],
        doc: { lead: '这一章讲实现。', sections: [
          { id: 'design', title: '设计', html: `<p>方案选型、硬件电路、软件架构；指标分解。</p>` },
          { id: 'implement', title: '实现', html: `<p>仿真、编码、联调；版本控制与文档。</p>` }
        ], refs: [] } },
      { title: '测试与论文', brief: '证明可用。',
        q: [
          { stem: '系统测试应：', options: ['覆盖功能与指标并记录', '只测一次', '只测外观', '不测'], answer: 0, explain: '测试。' },
          { stem: '论文与实物的关系是：', options: ['论文说明方案与验证', '论文替代实物', '实物替代论文', '无关'], answer: 0, explain: '互补。' },
          { stem: '测试数据应：', options: ['真实、可重复', '挑选', '编造', '省略'], answer: 0, explain: '真实。' }
        ],
        doc: { lead: '这一章讲验证。', sections: [
          { id: 'test', title: '测试', html: `<p>功能、性能、稳定性；记录与图表。</p>` },
          { id: 'thesis', title: '论文', html: `<p>问题—方案—实现—测试—结论；引用规范。</p>` }
        ], refs: [] } },
      { title: '答辩与交付', brief: '讲清楚。',
        q: [
          { stem: '答辩演示关键是：', options: ['现场可运行、数据可信', 'PPT 精美', '器材多', '时长'], answer: 0, explain: '演示。' },
          { stem: '交付物应包括：', options: ['原理图、源码、测试报告、说明', '只有实物', '只有论文', '只有源码'], answer: 0, explain: '完整。' },
          { stem: '被质疑时应：', options: ['承认局限并说明理由', '争辩', '回避', '改口'], answer: 0, explain: '诚恳。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'demo', title: '演示', html: `<p>10 分钟：问题—方案—演示—数据；备用方案。</p>` },
          { id: 'deliver', title: '交付', html: `<p>原理图、源码、报告；可复现。</p>` }
        ], refs: [] } }
    ] },
    { name: '专业实习', chapters: [
      { title: '岗位与角色', brief: '现场与研发。',
        q: [
          { stem: '自动化实习的常见岗位不包括：', options: ['电气工程师', '控制算法', '仪表维护', '外科医生'], answer: 3, explain: '无关。' },
          { stem: '选择实习最该看：', options: ['能否参与真实项目', '名气', '工资', '通勤'], answer: 0, explain: '实战。' },
          { stem: '现场实习常见起点是：', options: ['跟班巡检与调试', '直接做主设计', '只写文档', '只开会'], answer: 0, explain: '巡检。' }
        ],
        doc: { lead: '这一章讲岗位。', sections: [
          { id: 'roles', title: '岗位', html: `<p>电气、仪表、控制、调试、运维；职责与技能。</p>` },
          { id: 'onboard', title: '上手', html: `<p>读图纸、认设备、跟班巡检；记录与提问。</p>` }
        ], refs: [] } },
      { title: '现场安全与规范', brief: '安全第一。',
        q: [
          { stem: '电气作业的基本要求是：', options: ['停电验电挂牌', '直接操作', '只看不动', '戴手套即可'], answer: 0, explain: '停电。' },
          { stem: '仪表校验的目的：', options: ['保证测量准确', '装饰', '加速', '省电'], answer: 0, explain: '校验。' },
          { stem: '进入现场应：', options: ['遵守安全规程与穿戴防护', '随意', '只看手机', '单独行动'], answer: 0, explain: '规程。' }
        ],
        doc: { lead: '这一章讲安全。', sections: [
          { id: 'safety', title: '安全', html: `<p>停送电、验电、挂牌；高处与受限空间。</p>` },
          { id: 'standard', title: '规范', html: `<p>仪表校验、接线规范、图纸标识；记录。</p>` }
        ], refs: [] } },
      { title: '调试与运维', brief: '让系统跑起来。',
        q: [
          { stem: '调试的第一步是：', options: ['检查接线与电源', '改程序', '换设备', '重启'], answer: 0, explain: '检查。' },
          { stem: 'PID 参数整定应：', options: ['由小到大逐步调整', '一次到位', '随机', '默认'], answer: 0, explain: '逐步。' },
          { stem: '故障处理的原则是：', options: ['先保安全再查原因', '先修再查', '先上报再停', '忽略'], answer: 0, explain: '安全。' }
        ],
        doc: { lead: '这一章讲调试。', sections: [
          { id: 'commissioning', title: '调试', html: `<p>单机、联动、投运；参数整定；无扰切换。</p>` },
          { id: 'maintenance', title: '运维', html: `<p>点检、定期校验、备件；故障树排查。</p>` }
        ], refs: [] } },
      { title: '实习复盘', brief: '留下什么。',
        q: [
          { stem: '实习应留下的成果是：', options: ['调试记录、方案、复盘', '工牌', '照片', '评语'], answer: 0, explain: '成果。' },
          { stem: '实习日志推荐写法是：', options: ['问题—做法—结果—反思', '流水账', '只写结论', '只写感受'], answer: 0, explain: '结构化。' },
          { stem: '面试讲项目最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'output', title: '成果', html: `<p>调试记录、改造方案、测试报告；可量化。</p>` },
          { id: 'review', title: '复盘', html: `<p>每周五行；讲清你的贡献与学到的东西。</p>` }
        ], refs: [] } }
    ] },
    { name: '考研与求职', chapters: [
      { title: '考研方向', brief: '控制与电气。',
        q: [
          { stem: '自动化考研的常见方向是：', options: ['控制科学与工程、电气工程、控制工程专硕', '只有控制', '只有电气', '只有专硕'], answer: 0, explain: '多方向。' },
          { stem: '自动控制原理在考研中的地位是：', options: ['专业课核心', '不重要', '只考其一', '只考公共课'], answer: 0, explain: '核心。' },
          { stem: '择校最应考虑：', options: ['方向、导师与真题风格', '城市', '学费', '宿舍'], answer: 0, explain: '匹配。' }
        ],
        doc: { lead: '这一章讲方向。', sections: [
          { id: 'paths', title: '方向', html: `<p>控制理论、模式识别、机器人、电气、检测。</p>` },
          { id: 'subjects', title: '科目', html: `<p>政治、英语、数学一、专业课（自控原理/电路）。</p>` }
        ], refs: [] } },
      { title: '专业课复习', brief: '核心课。',
        q: [
          { stem: '自控复习主线是：', options: ['建模—时域—根轨迹—频域—校正', '只做计算', '只背公式', '只看真题'], answer: 0, explain: '主线。' },
          { stem: '线性系统复习应：', options: ['掌握状态空间与能控能观', '只看经典', '只看现代', '跳过'], answer: 0, explain: '两者。' },
          { stem: '计算题关键是：', options: ['模型建立 + 计算准确', '猜', '背答案', '跳过'], answer: 0, explain: '建模。' }
        ],
        doc: { lead: '这一章讲复习。', sections: [
          { id: 'control', title: '自控', html: `<p>传递函数、时域指标、根轨迹、频域、校正。</p>` },
          { id: 'modern', title: '现代控制', html: `<p>状态空间、能控能观、极点配置；李雅普诺夫。</p>` }
        ], refs: [] } },
      { title: '求职方向', brief: '自动化与电气。',
        q: [
          { stem: '自动化毕业生的常见去向不包括：', options: ['电气/仪表工程师', '控制算法', '智能制造', '外科医生'], answer: 3, explain: '专业限制。' },
          { stem: '工控岗位看重：', options: ['PLC/电气与控制基础', '只有编程', '只有英语', '只有证书'], answer: 0, explain: '工控。' },
          { stem: '求职最加分的材料是：', options: ['项目与实物/数据', '证书数量', '成绩单', '社团'], answer: 0, explain: '项目。' }
        ],
        doc: { lead: '这一章讲就业。', sections: [
          { id: 'paths', title: '路径', html: `<p>电气/仪表、PLC 与工控、机器人、智能制造、读博。</p>` },
          { id: 'skills', title: '能力', html: `<p>电气识图、PLC、控制算法、嵌入式；项目经验。</p>` }
        ], refs: [] } },
      { title: '面试', brief: '技术与表达。',
        q: [
          { stem: '工控面试常考：', options: ['电气基础与控制系统', '只有编程', '只有英语', '只有性格'], answer: 0, explain: '专业。' },
          { stem: '讲项目最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' },
          { stem: '被问到不会的问题应：', options: ['说明思路并诚实承认', '编造', '沉默', '转移话题'], answer: 0, explain: '诚实。' }
        ],
        doc: { lead: '这一章讲面试。', sections: [
          { id: 'tech', title: '技术', html: `<p>电气、仪表、控制；调试案例。</p>` },
          { id: 'project', title: '项目', html: `<p>方案、难点、数据；STAR；反问。</p>` }
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
