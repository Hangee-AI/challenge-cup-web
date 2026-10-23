/* ==========================================================
   bigdata-courses.js · 数据科学与大数据技术：12 门课（8/4）= 84 关
   ========================================================== */

(function () {
  var MAJOR = 'inter-数据科学与大数据技术';
  var TITLES = stageTitlesOf('inter');

  function mk(title, brief, q, lead, s1, h1, s2, h2) {
    return {
      title: title,
      brief: brief,
      q: q,
      doc: { lead: lead, sections: [
        { id: s1, title: s1, html: h1 },
        { id: s2, title: s2, html: h2 }
      ], refs: [] }
    };
  }

  var COURSES = [
    { name: '程序设计基础（Python）', chapters: [
      mk('环境与工具', '起点', [
        { stem: 'Python 的执行方式是：', options: ['解释执行', '编译为机器码', '汇编', '硬件执行'], answer: 0, explain: '解释。' },
        { stem: '虚拟环境的作用是：', options: ['隔离依赖', '加速', '加密', '压缩'], answer: 0, explain: '隔离。' },
        { stem: 'Jupyter 适合：', options: ['交互式分析与展示', '大型工程唯一', '前端开发', '系统编程'], answer: 0, explain: '交互。' }
      ], '这一章讲环境。', 'env', '环境', `<p>解释器、venv/conda；Jupyter/IDE。</p>`, 'pkg', '包管理', `<p>pip、requirements.txt；常用数据栈。</p>`),
      mk('数据容器', '基础', [
        { stem: '字典查找平均复杂度：', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'], answer: 0, explain: '哈希。' },
        { stem: '列表与元组的区别：', options: ['是否可变', '长度', '类型', '迭代'], answer: 0, explain: '可变性。' },
        { stem: '集合的特点是：', options: ['去重且无序', '有序', '可重复', '可索引'], answer: 0, explain: '去重。' }
      ], '这一章讲容器。', 'list', '列表与元组', `<p>索引切片、推导式；不可变的意义。</p>`, 'dict', '字典与集合', `<p>哈希、键的要求；去重与集合运算。</p>`),
      mk('控制与函数', '逻辑', [
        { stem: 'for-else 的含义是：', options: ['循环未被 break 时执行 else', '总是执行', '出错时执行', '不执行'], answer: 0, explain: 'for-else。' },
        { stem: '生成器的作用是：', options: ['惰性求值、节省内存', '加速唯一', '并行', '加密'], answer: 0, explain: '生成器。' },
        { stem: '函数式工具包括：', options: ['map/filter/reduce', '只有 map', '只有 filter', '只有 reduce'], answer: 0, explain: '多种。' }
      ], '这一章讲控制。', 'control', '控制流', `<p>条件与循环；for-else；异常处理。</p>`, 'generator', '生成器', `<p>yield、迭代器；惰性求值。</p>`),
      mk('面向对象与模块', '组织', [
        { stem: '类属性的共享性：', options: ['所有实例共享类属性', '每个实例独立', '不可访问', '只读唯一'], answer: 0, explain: '共享。' },
        { stem: 'dataclass 的作用：', options: ['简化数据类定义', '加速', '加密', '序列化唯一'], answer: 0, explain: 'dataclass。' },
        { stem: '包的结构要求：', options: ['目录含 __init__.py（或命名空间包）', '单文件', '必须有 main', '必须有 setup'], answer: 0, explain: '包。' }
      ], '这一章讲组织。', 'class', '类', `<p>属性、方法、继承；魔术方法。</p>`, 'module', '模块与包', `<p>import、__name__；项目结构。</p>`),
      mk('科学计算栈', '工具', [
        { stem: 'NumPy 的核心是：', options: ['ndarray 与向量化', 'DataFrame', '绘图', '网络'], answer: 0, explain: 'ndarray。' },
        { stem: 'pandas 的 groupby 用于：', options: ['分组聚合', '排序', '合并', '透视唯一'], answer: 0, explain: '分组。' },
        { stem: 'matplotlib/seaborn 用于：', options: ['可视化', '建模', '存储', '并发'], answer: 0, explain: '可视化。' }
      ], '这一章讲栈。', 'numpy', 'NumPy', `<p>ndarray、广播、向量化；性能。</p>`, 'pandas', 'pandas 与绘图', `<p>DataFrame、分组聚合；seaborn 可视化。</p>`),
      mk('数据读写', 'IO', [
        { stem: '大文件读取应：', options: ['分块读取', '一次读入', '全部转列表', '只读表头'], answer: 0, explain: '分块。' },
        { stem: 'Parquet 的优势是：', options: ['列式存储、压缩与快速查询', '可读性好唯一', '通用格式', '无优势'], answer: 0, explain: 'Parquet。' },
        { stem: '编码问题应：', options: ['明确指定编码（如 utf-8）', '忽略', '用二进制唯一', '随机'], answer: 0, explain: '编码。' }
      ], '这一章讲 IO。', 'file', '文件', `<p>CSV/JSON/Excel；分块与内存。</p>`, 'format', '列式格式', `<p>Parquet/ORC；压缩与分区。</p>`),
      mk('调试与测试', '质量', [
        { stem: '单元测试框架：', options: ['pytest', 'flask', 'django', 'numpy'], answer: 0, explain: 'pytest。' },
        { stem: '断言的用途：', options: ['检查不变量', '加速', '加密', '格式化'], answer: 0, explain: '断言。' },
        { stem: '日志的价值：', options: ['排查与监控', '装饰', '加密', '压缩'], answer: 0, explain: '日志。' }
      ], '这一章讲质量。', 'debug', '调试', `<p>pdb/断点、日志；最小复现。</p>`, 'test', '测试', `<p>pytest、覆盖率；CI 自动运行。</p>`),
      mk('项目实战', '综合', [
        { stem: '数据分析项目的第一步：', options: ['明确问题与指标', '画图', '建模', '写报告'], answer: 0, explain: '问题。' },
        { stem: '可复现性的要求：', options: ['代码、数据与参数可追溯', '只交报告', '只交图', '截图'], answer: 0, explain: '可复现。' },
        { stem: 'README 的作用：', options: ['说明环境、运行与结构', '装饰', '凑数', '无作用'], answer: 0, explain: '说明。' }
      ], '这一章讲实战。', 'project', '项目', `<p>清洗、分析、可视化；报告结构。</p>`, 'deliver', '交付', `<p>README、依赖、脚本；代码规范。</p>`)
    ] },
    { name: '高等数学（工科）', chapters: [
      mk('极限与连续', '基础', [
        { stem: 'lim(x→0) sinx/x 等于：', options: ['1', '0', '∞', '不存在'], answer: 0, explain: '重要极限。' },
        { stem: '连续函数在闭区间上：', options: ['有界且可取最值', '必可导', '必单调', '无最值'], answer: 0, explain: '性质。' },
        { stem: '等价无穷小替换适用于：', options: ['乘除', '加减', '任意', '只有极限'], answer: 0, explain: '乘除。' }
      ], '这一章讲极限。', 'limit', '极限', `<p>定义与法则；两个重要极限。</p>`, 'continuity', '连续', `<p>间断点；闭区间性质。</p>`),
      mk('导数与微分', '变化率', [
        { stem: '可导与连续的关系：', options: ['可导必连续', '等价', '连续必可导', '无关'], answer: 0, explain: '蕴含。' },
        { stem: '梯度是：', options: ['偏导构成的向量', '二阶导', '积分', '极限'], answer: 0, explain: '梯度。' },
        { stem: '洛必达适用：', options: ['0/0 或 ∞/∞', '所有极限', '只有 0/0', '只有 ∞/∞'], answer: 0, explain: '未定式。' }
      ], '这一章讲导数。', 'derivative', '导数', `<p>法则、链式；隐函数与参数方程。</p>`, 'gradient', '梯度', `<p>偏导与梯度；优化中的方向。</p>`),
      mk('积分', '累积', [
        { stem: '牛顿-莱布尼茨公式：', options: ['∫ₐᵇf = F(b) − F(a)', 'F(a) − F(b)', 'f(b) − f(a)', '∫f′'], answer: 0, explain: '公式。' },
        { stem: '期望可用积分表示，当：', options: ['连续型随机变量', '离散型', '任意', '只有正态'], answer: 0, explain: '连续。' },
        { stem: '分部积分公式：', options: ['∫u dv = uv − ∫v du', 'uv + ∫v du', '∫u∫v', 'u′v′'], answer: 0, explain: '分部。' }
      ], '这一章讲积分。', 'integral', '积分', `<p>换元、分部；定积分应用。</p>`, 'application', '应用', `<p>面积、期望与概率密度。</p>`),
      mk('多元与矩阵', '多维', [
        { stem: '全微分充分条件：', options: ['偏导连续', '偏导存在', '连续', '有界'], answer: 0, explain: '充分。' },
        { stem: '矩阵乘法满足：', options: ['结合律但不满足交换律', '交换律', '无结合律', '都不满足'], answer: 0, explain: '结合律。' },
        { stem: '条件极值用：', options: ['拉格朗日乘数法', '洛必达', '泰勒', '积分'], answer: 0, explain: '乘数法。' }
      ], '这一章讲多元。', 'multivariate', '多元微分', `<p>偏导、全微分、极值。</p>`, 'linear', '线性代数', `<p>矩阵运算、秩、特征值；回归的矩阵形式。</p>`),
      mk('级数与逼近', '无穷', [
        { stem: '泰勒展开用于：', options: ['局部逼近', '求积分', '排序', '聚类'], answer: 0, explain: '逼近。' },
        { stem: 'p 级数收敛条件：', options: ['p > 1', 'p < 1', 'p = 1', '任意'], answer: 0, explain: 'p>1。' },
        { stem: '傅里叶级数用于：', options: ['周期信号分解', '任意函数', '只有多项式', '只有指数'], answer: 0, explain: '周期。' }
      ], '这一章讲级数。', 'taylor', '泰勒', `<p>展开与余项；近似误差。</p>`, 'series', '级数与变换', `<p>收敛判别；傅里叶与频域初步。</p>`),
      mk('概率基础', '随机性', [
        { stem: '条件概率定义：', options: ['P(AB)/P(B)', 'P(A)P(B)', 'P(A)+P(B)', 'P(A)−P(B)'], answer: 0, explain: '定义。' },
        { stem: '全概率公式的依据是：', options: ['完备事件组划分', '独立性', '互斥唯一', '对称'], answer: 0, explain: '划分。' },
        { stem: '贝叶斯公式用于：', options: ['由结果推原因', '求期望', '判独立', '求方差'], answer: 0, explain: '后验。' }
      ], '这一章讲概率。', 'probability', '概率', `<p>条件概率、乘法、全概率。</p>`, 'bayes', '贝叶斯', `<p>先验与后验；分类与诊断。</p>`),
      mk('数值与稳定', '工程', [
        { stem: '浮点运算的误差来源：', options: ['舍入与累积', '只有硬件', '只有算法', '无误差'], answer: 0, explain: '舍入。' },
        { stem: 'log-sum-exp 的作用：', options: ['数值稳定计算', '加速', '降维', '正则'], answer: 0, explain: '稳定。' },
        { stem: '条件数衡量：', options: ['问题对扰动的敏感度', '误差大小', '收敛速度', '复杂度'], answer: 0, explain: '条件数。' }
      ], '这一章讲数值。', 'error', '误差', `<p>舍入、截断；误差传播。</p>`, 'stability', '稳定性', `<p>条件数、上溢下溢；log-sum-exp。</p>`),
      mk('训练与应用', '用起来', [
        { stem: '理论公式应：', options: ['用代码实现并验证', '只背', '只推导', '只看'], answer: 0, explain: '实现。' },
        { stem: '数据分析中常用的分布：', options: ['正态、二项、泊松', '只有正态', '只有二项', '只有泊松'], answer: 0, explain: '多种。' },
        { stem: '提高能力的有效方式：', options: ['结合案例练习', '只背公式', '只看书', '只做选择'], answer: 0, explain: '练习。' }
      ], '这一章讲应用。', 'practice', '实践', `<p>用 NumPy/pandas 实现；案例驱动。</p>`, 'habit', '习惯', `<p>推导—实现—检验；错题总结。</p>`)
    ] },
    { name: '统计学基础', chapters: [
      mk('描述统计', '看数据', [
        { stem: '均值与中位数的区别：', options: ['是否受极端值影响', '单位不同', '是否有量纲', '是否可计算'], answer: 0, explain: '极端值。' },
        { stem: '标准差的含义是：', options: ['数据离散程度', '平均值', '中位数', '极差'], answer: 0, explain: '离散。' },
        { stem: '箱线图可展示：', options: ['中位数、四分位与离群点', '只有均值', '只有极值', '只有方差'], answer: 0, explain: '箱线。' }
      ], '这一章讲描述。', 'center', '集中趋势', `<p>均值、中位数、众数；偏态与异常值。</p>`, 'spread', '离散与图形', `<p>方差、标准差、四分位距；箱线图与直方图。</p>`),
      mk('概率分布', '建模随机', [
        { stem: '正态分布由什么决定：', options: ['均值与标准差', '只有均值', '只有方差', '自由度'], answer: 0, explain: '两参数。' },
        { stem: '二项分布适用：', options: ['n 次独立试验的成功次数', '稀有事件', '连续测量', '比例'], answer: 0, explain: '二项。' },
        { stem: '指数分布常用于：', options: ['等待时间', '计数', '比例', '分类'], answer: 0, explain: '等待时间。' }
      ], '这一章讲分布。', 'normal', '正态', `<p>密度、标准化；3σ 原则。</p>`, 'other', '其他分布', `<p>二项、泊松、指数；选择依据。</p>`),
      mk('抽样与估计', '从样本到总体', [
        { stem: '中心极限定理说明：', options: ['样本均值近似正态', '样本必正态', '方差为零', '样本独立'], answer: 0, explain: 'CLT。' },
        { stem: '点估计的无偏性指：', options: ['期望等于真值', '方差最小', '一致', '简单'], answer: 0, explain: '无偏。' },
        { stem: '置信区间的宽度受什么影响：', options: ['置信水平、样本量与方差', '只有样本量', '只有方差', '只有水平'], answer: 0, explain: '多因素。' }
      ], '这一章讲估计。', 'sampling', '抽样', `<p>简单随机、分层；抽样分布。</p>`, 'estimation', '估计', `<p>点估计与区间估计；标准误。</p>`),
      mk('假设检验', '判断', [
        { stem: 'p 值的含义：', options: ['原假设下出现当前结果的概率', '原假设为真概率', '结论正确率', '效应大小'], answer: 0, explain: 'p 值。' },
        { stem: '第一类错误指：', options: ['弃真', '取伪', '抽样偏差', '计算错误'], answer: 0, explain: 'α。' },
        { stem: '检验功效等于：', options: ['1 − β', 'α', 'p', 'R²'], answer: 0, explain: '功效。' }
      ], '这一章讲检验。', 'logic', '逻辑', `<p>H0/H1、显著性；单双侧。</p>`, 'error', '错误与功效', `<p>两类错误、样本量与功效；多重比较。</p>`),
      mk('相关与回归', '关系', [
        { stem: '相关系数的范围：', options: ['[−1,1]', '[0,1]', '全体实数', '[−∞,∞]'], answer: 0, explain: '范围。' },
        { stem: '相关不等于因果，因为：', options: ['可能存在混杂因素', '样本太小', '计算错误', '数据太少'], answer: 0, explain: '混杂。' },
        { stem: 'R² 的含义是：', options: ['解释的变异比例', '斜率', '截距', '误差'], answer: 0, explain: 'R²。' }
      ], '这一章讲回归。', 'correlation', '相关', `<p>散点、相关系数；相关与因果。</p>`, 'regression', '回归', `<p>最小二乘、系数解释；R² 与残差。</p>`),
      mk('方差分析', '多组比较', [
        { stem: 'ANOVA 用于：', options: ['三组及以上均值比较', '两组', '相关', '回归'], answer: 0, explain: '多组。' },
        { stem: 'F 统计量衡量：', options: ['组间与组内方差之比', '相关', '斜率', '均值差'], answer: 0, explain: '比值。' },
        { stem: 'ANOVA 显著后应：', options: ['事后多重比较', '停止', '换数据', '加样本'], answer: 0, explain: '事后。' }
      ], '这一章讲 ANOVA。', 'anova', '方差分析', `<p>单因素、双因素；F 检验。</p>`, 'post', '事后比较', `<p>Tukey、Bonferroni；交互作用。</p>`),
      mk('统计实验设计', '做实验', [
        { stem: 'A/B 测试的核心是：', options: ['随机分组与对照', '只看结果', '样本越多越好', '只做一次'], answer: 0, explain: '随机。' },
        { stem: '样本量估算需要：', options: ['效应量、显著性水平与功效', '只有样本', '只有水平', '只有功效'], answer: 0, explain: '三要素。' },
        { stem: '实验中的偏差来源：', options: ['选择偏差、混杂与测量偏差', '只有选择', '只有混杂', '只有测量'], answer: 0, explain: '多源。' }
      ], '这一章讲实验。', 'design', '设计', `<p>随机化、对照、重复；A/B 测试。</p>`, 'power', '样本量与偏差', `<p>功效分析、最小可检测效应；偏差控制。</p>`),
      mk('统计实践', '用起来', [
        { stem: '数据分析的第一步：', options: ['理解问题与数据来源', '建模', '画图', '写报告'], answer: 0, explain: '问题。' },
        { stem: '统计结论应：', options: ['说明不确定性与局限', '绝对化', '省略依据', '只给数字'], answer: 0, explain: '不确定性。' },
        { stem: '可视化在统计中的作用：', options: ['发现模式与异常', '装饰', '替代检验', '无作用'], answer: 0, explain: '探索。' }
      ], '这一章讲实践。', 'workflow', '流程', `<p>问题—数据—探索—建模—结论。</p>`, 'report', '报告', `<p>不确定性、局限；图表与结论对应。</p>`)
    ] },
    { name: '数据结构', chapters: [
      mk('复杂度', '效率', [
        { stem: '大 O 表示：', options: ['渐进上界', '精确时间', '下界', '平均'], answer: 0, explain: '上界。' },
        { stem: '二分查找复杂度：', options: ['O(log n)', 'O(n)', 'O(n log n)', 'O(1)'], answer: 0, explain: 'log n。' },
        { stem: '空间复杂度衡量：', options: ['额外内存随规模增长', '运行时间', '代码行数', '变量数'], answer: 0, explain: '空间。' }
      ], '这一章讲复杂度。', 'bigo', '大 O', `<p>常见量级；摊还分析。</p>`, 'tradeoff', '权衡', `<p>时间与空间；工程常数。</p>`),
      mk('线性结构', '表栈队列', [
        { stem: '链表插入（已知位置）：', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'], answer: 0, explain: 'O(1)。' },
        { stem: '栈的特点：', options: ['后进先出', '先进先出', '随机', '双端'], answer: 0, explain: 'LIFO。' },
        { stem: '循环队列解决：', options: ['假溢出', '真溢出', '泄漏', '排序'], answer: 0, explain: '循环。' }
      ], '这一章讲线性。', 'list', '表', `<p>数组与链表；访问与插入代价。</p>`, 'stack', '栈与队列', `<p>LIFO/FIFO；应用场景。</p>`),
      mk('哈希', '查找', [
        { stem: '冲突解决：', options: ['开放定址与链地址', '只有开放', '只有链地址', '排序'], answer: 0, explain: '两类。' },
        { stem: '装填因子过大：', options: ['冲突增多、性能下降', '更快', '省内存', '无影响'], answer: 0, explain: '因子。' },
        { stem: '哈希平均查找：', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'], answer: 0, explain: 'O(1)。' }
      ], '这一章讲哈希。', 'hash', '哈希', `<p>函数设计、冲突处理；负载因子。</p>`, 'use', '应用', `<p>去重、计数、连接；一致性哈希。</p>`),
      mk('树与堆', '层次', [
        { stem: 'BST 查找平均：', options: ['O(log n)', 'O(n)', 'O(1)', 'O(n log n)'], answer: 0, explain: 'log n。' },
        { stem: '堆用于：', options: ['优先队列与 Top-K', '排序唯一', '查找唯一', '存储'], answer: 0, explain: '优先队列。' },
        { stem: '平衡树避免：', options: ['退化为链表', '内存溢出', '哈希冲突', '递归'], answer: 0, explain: '退化。' }
      ], '这一章讲树。', 'tree', '树', `<p>遍历、BST；平衡树。</p>`, 'heap', '堆', `<p>建堆、堆排序；Top-K 与调度。</p>`),
      mk('图', '网络', [
        { stem: 'BFS 用于：', options: ['无权最短路与层序', '最小生成树', '拓扑排序', '排序'], answer: 0, explain: 'BFS。' },
        { stem: 'Dijkstra 要求：', options: ['非负权', '负权', '无环', '连通唯一'], answer: 0, explain: '非负。' },
        { stem: '拓扑排序适用于：', options: ['有向无环图', '任意图', '无向图', '树'], answer: 0, explain: 'DAG。' }
      ], '这一章讲图。', 'traverse', '遍历', `<p>DFS/BFS；连通分量。</p>`, 'algorithm', '算法', `<p>最短路、最小生成树；拓扑排序。</p>`),
      mk('排序与查找', '整理', [
        { stem: '快排平均：', options: ['O(n log n)', 'O(n)', 'O(n²)', 'O(log n)'], answer: 0, explain: '平均。' },
        { stem: '稳定排序：', options: ['归并排序', '快速排序', '堆排序', '选择排序'], answer: 0, explain: '稳定。' },
        { stem: '外部排序用于：', options: ['数据大于内存', '小数据', '链表', '图'], answer: 0, explain: '外部排序。' }
      ], '这一章讲排序。', 'sort', '排序', `<p>比较与线性排序；稳定性。</p>`, 'external', '外部排序', `<p>归并分段、多路归并；大数据场景。</p>`),
      mk('算法思想', '范式', [
        { stem: 'DP 关键：', options: ['最优子结构与重叠子问题', '贪心选择', '随机', '分块'], answer: 0, explain: 'DP。' },
        { stem: '贪心需：', options: ['贪心选择性质', '重叠子问题', '随机化', '排序唯一'], answer: 0, explain: '条件。' },
        { stem: '分治的步骤：', options: ['分解、解决、合并', '排序', '哈希', '搜索'], answer: 0, explain: '分治。' }
      ], '这一章讲范式。', 'dp', '动态规划', `<p>状态、转移、边界；空间优化。</p>`, 'greedy', '贪心与分治', `<p>适用条件；复杂度分析。</p>`),
      mk('刷题实践', '练', [
        { stem: '刷题有效方式：', options: ['按专题总结模板', '随机刷', '只看答案', '只刷难题'], answer: 0, explain: '专题。' },
        { stem: '写代码前应先：', options: ['想清思路与复杂度', '直接敲', '找模板', '问人'], answer: 0, explain: '思路。' },
        { stem: '边界条件应：', options: ['专门测试', '忽略', '靠运气', '只测正常'], answer: 0, explain: '边界。' }
      ], '这一章讲练习。', 'topic', '专题', `<p>链表、树、图、DP；模板与变式。</p>`, 'habit', '习惯', `<p>手算样例、检查边界；复盘。</p>`)
    ] },
    { name: '数据库与数据仓库', chapters: [
      mk('关系数据库', '基础', [
        { stem: '主键的作用：', options: ['唯一标识元组', '加速所有查询', '加密', '备份'], answer: 0, explain: '唯一。' },
        { stem: '外键维护：', options: ['参照完整性', '实体完整性', '用户定义完整性', '无约束'], answer: 0, explain: '参照。' },
        { stem: 'SQL 中 WHERE 与 HAVING：', options: ['分组前 vs 分组后', '相同', '都分组后', '都分组前'], answer: 0, explain: '时机。' }
      ], '这一章讲关系。', 'model', '模型', `<p>表、键、约束；范式与反规范化。</p>`, 'sql', 'SQL', `<p>连接、聚合、子查询、窗口函数。</p>`),
      mk('事务与并发', '一致性', [
        { stem: 'ACID 的隔离性指：', options: ['并发互不干扰', '不丢失', '满足约束', '持久'], answer: 0, explain: '隔离。' },
        { stem: '隔离级别从低到高：', options: ['读未提交、读已提交、可重复读、串行化', '串行化最低', '只有两级', '无级别'], answer: 0, explain: '四级。' },
        { stem: 'MVCC 的作用：', options: ['读写不阻塞', '加锁唯一', '加密', '压缩'], answer: 0, explain: 'MVCC。' }
      ], '这一章讲事务。', 'acid', 'ACID', `<p>原子、一致、隔离、持久；日志恢复。</p>`, 'concurrency', '并发', `<p>锁、MVCC、隔离级别；死锁。</p>`),
      mk('索引与优化', '快', [
        { stem: 'B+ 树索引适合：', options: ['范围与等值查询', '只有等值', '只有范围', '全文'], answer: 0, explain: 'B+ 树。' },
        { stem: '最左前缀原则用于：', options: ['联合索引', '主键', '外键', '视图'], answer: 0, explain: '最左。' },
        { stem: '慢查询优化第一步：', options: ['看执行计划', '加索引', '换库', '加机器'], answer: 0, explain: '执行计划。' }
      ], '这一章讲索引。', 'index', '索引', `<p>B+ 树、哈希；覆盖索引与最左前缀。</p>`, 'tuning', '调优', `<p>执行计划、SQL 改写；分区与分表。</p>`),
      mk('数据仓库', '面向分析', [
        { stem: '数据仓库与数据库的区别：', options: ['面向分析与集成 vs 事务', '规模', '厂商', '语言'], answer: 0, explain: '分析。' },
        { stem: '维度建模的常见模式是：', options: ['星型与雪花模型', '只有星型', '只有雪花', '三范式唯一'], answer: 0, explain: '两种。' },
        { stem: '事实表与维度表的区别：', options: ['度量 vs 描述属性', '大小', '数量', '主键'], answer: 0, explain: '度量。' }
      ], '这一章讲数仓。', 'dw', '分层', `<p>ODS、DWD、DWS、ADS；主题域。</p>`, 'modeling', '建模', `<p>星型/雪花、事实与维度；缓慢变化维。</p>`),
      mk('ETL 与数据集成', '搬运', [
        { stem: 'ETL 指：', options: ['抽取、转换、加载', '加密、传输、加载', '分析、挖掘、展示', '备份、恢复、归档'], answer: 0, explain: 'ETL。' },
        { stem: '增量抽取的依据：', options: ['时间戳或变更日志', '全量唯一', '随机', '抽样'], answer: 0, explain: '增量。' },
        { stem: '数据质量检查包括：', options: ['完整性、一致性、唯一性、及时性', '只有完整性', '只有一致性', '只有及时性'], answer: 0, explain: '多维。' }
      ], '这一章讲 ETL。', 'etl', '流程', `<p>抽取、清洗、转换、加载；调度与依赖。</p>`, 'quality', '质量', `<p>完整性、一致性、及时性；告警与修复。</p>`),
      mk('数据湖与湖仓', '新架构', [
        { stem: '数据湖的特点是：', options: ['存原始多样数据、模式后置', '只存结构化', '必须先建模', '不能分析'], answer: 0, explain: '数据湖。' },
        { stem: '湖仓一体的优势：', options: ['统一存储与分析、支持事务', '只有便宜', '只有快', '无优势'], answer: 0, explain: '湖仓。' },
        { stem: '元数据管理的作用：', options: ['可发现、可治理', '装饰', '加密', '压缩'], answer: 0, explain: '元数据。' }
      ], '这一章讲数据湖。', 'lake', '数据湖', `<p>对象存储、Parquet、模式演化；分区。</p>`, 'lakehouse', '湖仓一体', `<p>表格式（Iceberg/Hudi）、事务；元数据治理。</p>`),
      mk('数据治理与安全', '规矩', [
        { stem: '数据治理内容：', options: ['标准、质量、安全、生命周期', '只有标准', '只有质量', '只有安全'], answer: 0, explain: '多内容。' },
        { stem: '权限最小化原则：', options: ['按需授权', '全部开放', '只给管理员', '不授权'], answer: 0, explain: '最小权限。' },
        { stem: '数据脱敏的作用：', options: ['保护隐私同时可用', '加密唯一', '删除唯一', '无作用'], answer: 0, explain: '脱敏。' }
      ], '这一章讲治理。', 'governance', '治理', `<p>标准、主数据、血缘；生命周期。</p>`, 'security', '安全', `<p>分级分类、脱敏、审计；合规。</p>`),
      mk('数据库项目实践', '落地', [
        { stem: '数仓项目的起点：', options: ['业务问题与指标口径', '选工具', '建表', '写 SQL'], answer: 0, explain: '业务。' },
        { stem: '指标口径不一致的后果：', options: ['结论冲突、决策失真', '无影响', '更快', '更准'], answer: 0, explain: '口径。' },
        { stem: '数据血缘的价值：', options: ['排查影响与分析来源', '装饰', '加密', '压缩'], answer: 0, explain: '血缘。' }
      ], '这一章讲实践。', 'requirements', '需求', `<p>业务问题、指标口径；维度与粒度。</p>`, 'deliver', '交付', `<p>模型设计、ETL 任务、报表；文档与血缘。</p>`)
    ] },
    { name: '大数据技术原理', chapters: [
      mk('大数据概述', '是什么', [
        { stem: '大数据的特征（4V）包括：', options: ['规模、速度、多样性、价值密度', '只有规模', '只有速度', '只有多样性'], answer: 0, explain: '4V。' },
        { stem: '横向扩展（scale out）指：', options: ['增加机器节点', '升级单机', '加内存', '换 CPU'], answer: 0, explain: '横向。' },
        { stem: '数据本地性优化的目的是：', options: ['减少网络传输', '增加副本', '减少内存', '加速排序'], answer: 0, explain: '本地性。' }
      ], '这一章讲概述。', 'feature', '特征', `<p>4V、数据规模与形态；挑战。</p>`, 'arch', '架构', `<p>横向扩展、数据本地性；容错与副本。</p>`),
      mk('HDFS', '存储', [
        { stem: 'HDFS 默认块大小通常为：', options: ['128 MB', '4 KB', '1 GB', '64 KB'], answer: 0, explain: '128MB。' },
        { stem: 'HDFS 适合：', options: ['一次写入多次读取的大文件', '小文件海量', '随机修改', '事务'], answer: 0, explain: '大文件。' },
        { stem: 'NameNode 的作用是：', options: ['管理元数据', '存数据块', '计算', '调度'], answer: 0, explain: '元数据。' }
      ], '这一章讲 HDFS。', 'block', '块与副本', `<p>块大小、副本因子；机架感知。</p>`, 'role', '角色', `<p>NameNode/DataNode；小文件问题与联邦。</p>`),
      mk('MapReduce', '批处理', [
        { stem: 'MapReduce 的两个阶段是：', options: ['Map 与 Reduce', '只有 Map', '只有 Reduce', 'Shuffle 唯一'], answer: 0, explain: '两阶段。' },
        { stem: 'Shuffle 的作用是：', options: ['按 key 分组并传输给 Reduce', '排序唯一', '存储', '压缩'], answer: 0, explain: 'Shuffle。' },
        { stem: 'Combiner 的作用是：', options: ['本地预聚合减少传输', '替代 Reduce', '排序', '存储'], answer: 0, explain: 'Combiner。' }
      ], '这一章讲 MR。', 'model', '模型', `<p>Map/Reduce 函数；数据流与分区。</p>`, 'shuffle', 'Shuffle', `<p>排序、分区、合并；Combiner 优化。</p>`),
      mk('YARN 与资源管理', '调度', [
        { stem: 'YARN 的核心组件：', options: ['ResourceManager 与 NodeManager', '只有 RM', '只有 NM', '只有 AM'], answer: 0, explain: 'RM/NM。' },
        { stem: '容器（Container）表示：', options: ['资源分配单元', '数据块', '进程唯一', '队列'], answer: 0, explain: '容器。' },
        { stem: '调度器的常见类型：', options: ['FIFO、Capacity、Fair', '只有 FIFO', '只有 Capacity', '只有 Fair'], answer: 0, explain: '多种。' }
      ], '这一章讲 YARN。', 'component', '组件', `<p>RM、NM、AM；容器与队列。</p>`, 'scheduler', '调度', `<p>FIFO/Capacity/Fair；资源与隔离。</p>`),
      mk('Spark', '内存计算', [
        { stem: 'Spark 的核心抽象是：', options: ['RDD/DataFrame', '表', '文件', '队列'], answer: 0, explain: 'RDD。' },
        { stem: '惰性求值的含义：', options: ['遇到行动操作才执行', '立即执行', '不执行', '随机执行'], answer: 0, explain: '惰性。' },
        { stem: '宽依赖对应：', options: ['Shuffle', '窄依赖', '无依赖', '缓存'], answer: 0, explain: 'Shuffle。' }
      ], '这一章讲 Spark。', 'rdd', 'RDD', `<p>转换与行动；血缘与容错。</p>`, 'stage', '依赖与阶段', `<p>宽窄依赖、DAG、Shuffle；缓存与广播。</p>`),
      mk('流式计算', '实时', [
        { stem: '流处理与批处理的区别：', options: ['是否持续处理无界数据', '数据量', '存储', '语言'], answer: 0, explain: '无界。' },
        { stem: '事件时间与处理时间的区别：', options: ['事件发生 vs 系统处理时刻', '相同', '都指处理', '都指事件'], answer: 0, explain: '两种时间。' },
        { stem: '水位线（watermark）的作用：', options: ['处理乱序与迟到数据', '加密', '压缩', '排序唯一'], answer: 0, explain: '水位线。' }
      ], '这一章讲流。', 'stream', '流处理', `<p>无界数据、窗口；Kafka/Storm/Flink。</p>`, 'time', '时间与水位', `<p>事件时间、处理时间；水位线与迟到。</p>`),
      mk('NoSQL 与消息队列', '多样存储', [
        { stem: 'CAP 定理说明：', options: ['三者不可兼得', '三者兼得', '只有两概念', '无限制'], answer: 0, explain: 'CAP。' },
        { stem: 'Kafka 的核心概念：', options: ['主题、分区与消费者组', '只有主题', '只有分区', '只有消费者'], answer: 0, explain: 'Kafka。' },
        { stem: '最终一致性指：', options: ['副本最终收敛', '强一致', '不保证', '无副本'], answer: 0, explain: '最终。' }
      ], '这一章讲 NoSQL。', 'cap', 'CAP 与 BASE', `<p>一致性权衡；分片与复制。</p>`, 'kafka', '消息队列', `<p>主题、分区、偏移；消费者组与幂等。</p>`),
      mk('平台与项目', '落地', [
        { stem: '数据平台的核心能力：', options: ['采集、存储、计算、治理与服务', '只有存储', '只有计算', '只有采集'], answer: 0, explain: '全链路。' },
        { stem: '任务调度的关键：', options: ['依赖管理与失败重试', '只有定时', '只有日志', '只有告警'], answer: 0, explain: '依赖。' },
        { stem: '成本优化的手段：', options: ['存储分层、压缩、弹性伸缩', '只有压缩', '只有扩容', '只有降配'], answer: 0, explain: '优化。' }
      ], '这一章讲平台。', 'platform', '平台', `<p>采集、存储、计算、服务；元数据与调度。</p>`, 'ops', '运维与成本', `<p>监控告警、重试与补数；成本与弹性。</p>`)
    ] },
    { name: '数据挖掘', chapters: [
      mk('数据挖掘概述', '从数据到知识', [
        { stem: '数据挖掘的任务类型：', options: ['分类、回归、聚类、关联、异常', '只有分类', '只有聚类', '只有关联'], answer: 0, explain: '多类型。' },
        { stem: 'CRISP-DM 的步骤：', options: ['业务理解—数据理解—准备—建模—评估—部署', '只有建模', '只有评估', '只有部署'], answer: 0, explain: '流程。' },
        { stem: '过拟合的表现：', options: ['训练好测试差', '训练差测试好', '都好', '都差'], answer: 0, explain: '过拟合。' }
      ], '这一章讲概述。', 'task', '任务', `<p>分类、回归、聚类、关联、异常检测。</p>`, 'process', '流程', `<p>CRISP-DM；业务目标与评价。</p>`),
      mk('数据预处理', '洗干净', [
        { stem: '缺失值处理：', options: ['删除、填充、模型预测', '只有删除', '只有填充', '不处理'], answer: 0, explain: '多种。' },
        { stem: '标准化与归一化区别：', options: ['是否缩放到固定区间', '相同', '标准化到 [0,1]', '归一化均值 0'], answer: 0, explain: '区间。' },
        { stem: '数据泄漏的后果：', options: ['评估虚高、上线失效', '更准', '无影响', '更快'], answer: 0, explain: '泄漏。' }
      ], '这一章讲预处理。', 'clean', '清洗', `<p>缺失、异常、重复；采样与不平衡。</p>`, 'feature', '特征', `<p>编码、标准化、构造；泄漏防范。</p>`),
      mk('分类与回归', '预测', [
        { stem: '逻辑回归输出：', options: ['概率', '实数唯一', '类别', '向量'], answer: 0, explain: '概率。' },
        { stem: '评估分类模型的指标：', options: ['准确率、精确率、召回、F1、AUC', '只有准确率', '只有 F1', '只有 AUC'], answer: 0, explain: '多指标。' },
        { stem: '交叉验证作用：', options: ['稳健评估泛化', '加速', '增数据', '减特征'], answer: 0, explain: 'CV。' }
      ], '这一章讲预测。', 'model', '模型', `<p>逻辑回归、树模型、集成；基线。</p>`, 'evaluate', '评估', `<p>混淆矩阵、ROC/AUC；交叉验证。</p>`),
      mk('聚类', '发现结构', [
        { stem: 'K-means 目标：', options: ['最小化类内平方和', '最大化类间', '随机分组', '层次合并'], answer: 0, explain: 'K-means。' },
        { stem: 'K 的选择可用：', options: ['肘部法与轮廓系数', '随机', '只看准确率', '只看损失'], answer: 0, explain: 'K 选择。' },
        { stem: 'DBSCAN 的优势：', options: ['可发现任意形状并识别噪声', '更快唯一', '参数少', '不需距离'], answer: 0, explain: 'DBSCAN。' }
      ], '这一章讲聚类。', 'kmeans', 'K-means', `<p>质心迭代、K 选择；局限性。</p>`, 'density', '层次与密度', `<p>层次聚类、DBSCAN；距离度量。</p>`),
      mk('关联规则', '发现共现', [
        { stem: '支持度衡量：', options: ['项集出现频率', '规则可靠度', '提升程度', '相关性'], answer: 0, explain: '支持度。' },
        { stem: '置信度衡量：', options: ['前件出现时后件出现的条件概率', '频率', '提升', '覆盖'], answer: 0, explain: '置信度。' },
        { stem: '提升度大于 1 表示：', options: ['正相关', '负相关', '独立', '无意义'], answer: 0, explain: '正相关。' }
      ], '这一章讲关联。', 'metric', '指标', `<p>支持度、置信度、提升度；频繁项集。</p>`, 'algorithm', '算法', `<p>Apriori、FP-Growth；购物篮分析。</p>`),
      mk('异常检测', '找不同', [
        { stem: '异常检测的难点：', options: ['标签稀缺与定义模糊', '计算慢', '数据少', '维度低'], answer: 0, explain: '难点。' },
        { stem: '常用方法包括：', options: ['统计阈值、孤立森林、聚类距离', '只有统计', '只有孤立森林', '只有聚类'], answer: 0, explain: '多种。' },
        { stem: '评估异常检测的指标：', options: ['精确率、召回与 AUC', '只有准确率', '只有损失', '只有速度'], answer: 0, explain: '指标。' }
      ], '这一章讲异常。', 'method', '方法', `<p>统计、距离、密度、孤立森林；半监督。</p>`, 'evaluate', '评估', `<p>不平衡下的指标；业务代价。</p>`),
      mk('模型评估与部署', '可靠与落地', [
        { stem: '训练/验证/测试划分的作用：', options: ['评估泛化并调参', '增加数据', '加速', '降维'], answer: 0, explain: '划分。' },
        { stem: '数据漂移指：', options: ['线上数据分布变化', '模型变大', '磁盘满', '代码更新'], answer: 0, explain: '漂移。' },
        { stem: '模型监控的内容：', options: ['效果、延迟与特征分布', '只有效果', '只有延迟', '只有成本'], answer: 0, explain: '监控。' }
      ], '这一章讲部署。', 'split', '划分', `<p>训练/验证/测试；时间序列划分。</p>`, 'monitor', '监控', `<p>效果衰减、数据漂移；重训练策略。</p>`),
      mk('数据挖掘项目', '做一遍', [
        { stem: '项目第一步：', options: ['明确业务问题与指标', '选模型', '调参', '画图'], answer: 0, explain: '问题。' },
        { stem: '特征工程的价值：', options: ['往往比换模型更有效', '无价值', '只影响速度', '只影响成本'], answer: 0, explain: '特征。' },
        { stem: '结果解释应：', options: ['结合业务并说明局限', '只报指标', '只给图', '省略'], answer: 0, explain: '解释。' }
      ], '这一章讲项目。', 'framing', '问题', `<p>业务目标、标签定义；评价与代价。</p>`, 'deliver', '交付', `<p>模型、报告、可解释性；上线与复盘。</p>`)
    ] },
    { name: '分布式计算', chapters: [
      mk('分布式基础', '为什么分布', [
        { stem: '分布式系统的核心挑战：', options: ['部分失败与一致性', '编程语言', '界面', '成本'], answer: 0, explain: '失败与一致。' },
        { stem: 'CAP 定理说明：', options: ['一致性、可用性、分区容忍不可兼得', '三者兼得', '只有两概念', '无限制'], answer: 0, explain: 'CAP。' },
        { stem: '水平扩展的优点：', options: ['成本线性与容错', '单机性能最高', '无需网络', '简化一致性'], answer: 0, explain: '扩展。' }
      ], '这一章讲基础。', 'challenge', '挑战', `<p>部分失败、网络分区；时钟与顺序。</p>`, 'cap', 'CAP', `<p>一致性权衡；BASE 与最终一致。</p>`),
      mk('一致性与共识', '难题', [
        { stem: '强一致与最终一致的区别：', options: ['读是否总为最新', '性能', '存储', '协议'], answer: 0, explain: '一致性。' },
        { stem: 'Raft 的核心是：', options: ['选主与日志复制', '哈希', '压缩', '加密'], answer: 0, explain: 'Raft。' },
        { stem: '多数派（quorum）的作用：', options: ['保证一致性与容错', '加速唯一', '省存储', '省网络'], answer: 0, explain: '多数派。' }
      ], '这一章讲共识。', 'consistency', '一致性', `<p>线性一致、顺序一致；读写语义。</p>`, 'consensus', '共识', `<p>Paxos/Raft；选主、日志复制、脑裂。</p>`),
      mk('分布式存储', '数据放哪', [
        { stem: '分片（sharding）的目的是：', options: ['水平扩展与负载均衡', '加密', '压缩', '备份'], answer: 0, explain: '分片。' },
        { stem: '副本的作用：', options: ['容错与读扩展', '加密', '压缩', '排序'], answer: 0, explain: '副本。' },
        { stem: '一致性哈希的优势：', options: ['节点变动时迁移少', '更快', '更强一致', '更省空间'], answer: 0, explain: '一致性哈希。' }
      ], '这一章讲存储。', 'shard', '分片', `<p>范围/哈希分片；再平衡与热点。</p>`, 'replica', '副本', `<p>主从、多主；一致性哈希与迁移。</p>`),
      mk('分布式计算模型', '并行', [
        { stem: '数据并行与模型并行的区别：', options: ['切分数据 vs 切分模型', '相同', '都切数据', '都切模型'], answer: 0, explain: '两种。' },
        { stem: 'MapReduce 的思想：', options: ['分而治之 + 归并', '随机', '流水线唯一', '递归'], answer: 0, explain: '分治。' },
        { stem: '任务失败的处理：', options: ['重试与推测执行', '忽略', '整体失败', '人工'], answer: 0, explain: '重试。' }
      ], '这一章讲模型。', 'parallel', '并行', `<p>数据并行、模型并行；流水线。</p>`, 'fault', '容错', `<p>重试、检查点、推测执行；幂等。</p>`),
      mk('消息与流处理', '异步', [
        { stem: '消息队列的作用：', options: ['解耦、削峰与异步', '加密', '压缩', '排序'], answer: 0, explain: '解耦。' },
        { stem: '至少一次与恰好一次的区别：', options: ['是否可能重复投递', '速度', '顺序', '持久'], answer: 0, explain: '投递语义。' },
        { stem: '幂等设计的意义：', options: ['重复消费结果一致', '更快', '省内存', '省磁盘'], answer: 0, explain: '幂等。' }
      ], '这一章讲消息。', 'queue', '消息队列', `<p>主题与分区、消费组；顺序与积压。</p>`, 'semantics', '语义', `<p>至少一次、至多一次、恰好一次；幂等。</p>`),
      mk('调度与资源', '分配', [
        { stem: '调度器的目标：', options: ['提高利用率并满足 SLA', '只求公平', '只求速度', '只求成本'], answer: 0, explain: '目标。' },
        { stem: '资源隔离的作用：', options: ['避免互相干扰', '加速唯一', '省电', '省空间'], answer: 0, explain: '隔离。' },
        { stem: '弹性伸缩的依据：', options: ['负载指标与队列长度', '随机', '固定时间', '成本唯一'], answer: 0, explain: '弹性。' }
      ], '这一章讲调度。', 'scheduler', '调度', `<p>资源队列、优先级、抢占；公平与效率。</p>`, 'elastic', '弹性', `<p>指标驱动伸缩；容量规划与成本。</p>`),
      mk('分布式机器学习', '训练加速', [
        { stem: '参数服务器的思想：', options: ['集中管理参数并异步更新', '每机独立', '只做推理', '只做存储'], answer: 0, explain: 'PS。' },
        { stem: 'All-Reduce 的作用：', options: ['聚合各节点梯度', '切分数据', '序列化', '压缩'], answer: 0, explain: 'All-Reduce。' },
        { stem: '同步与异步更新的权衡：', options: ['一致性与效率', '精度与速度', '存储与网络', '成本与人力'], answer: 0, explain: '权衡。' }
      ], '这一章讲分布式 ML。', 'ps', '参数服务器', `<p>同步/异步 SGD；通信瓶颈。</p>`, 'collective', '集合通信', `<p>All-Reduce、Ring；梯度压缩。</p>`),
      mk('工程与实践', '落地', [
        { stem: '可观测性的三支柱：', options: ['日志、指标、追踪', '只有日志', '只有指标', '只有追踪'], answer: 0, explain: '三支柱。' },
        { stem: '灰度发布的目的是：', options: ['控制风险并验证', '加速', '省钱', '省人'], answer: 0, explain: '灰度。' },
        { stem: '容量规划应基于：', options: ['压测与业务预测', '猜', '历史唯一', '预算'], answer: 0, explain: '规划。' }
      ], '这一章讲实践。', 'observability', '可观测', `<p>日志、指标、链路追踪；告警。</p>`, 'release', '发布与容量', `<p>灰度、回滚；压测与容量规划。</p>`)
    ] },
    { name: '数据可视化', chapters: [
      mk('可视化基础', '为什么画图', [
        { stem: '可视化的首要目标是：', options: ['清晰传达信息', '美观', '炫技', '复杂'], answer: 0, explain: '传达。' },
        { stem: '视觉编码通道包括：', options: ['位置、长度、面积、颜色、形状', '只有颜色', '只有位置', '只有形状'], answer: 0, explain: '多通道。' },
        { stem: '前注意加工的特点是：', options: ['快速并行识别', '需要思考', '需记忆', '只能文字'], answer: 0, explain: '前注意。' }
      ], '这一章讲基础。', 'goal', '目标', `<p>探索与解释；受众与任务。</p>`, 'encoding', '编码', `<p>位置、长度、角度、颜色；精度排序。</p>`),
      mk('图表类型', '选对图', [
        { stem: '比较类别大小宜用：', options: ['条形图', '饼图', '散点图', '折线图'], answer: 0, explain: '条形图。' },
        { stem: '展示趋势宜用：', options: ['折线图', '饼图', '雷达图', '桑基图'], answer: 0, explain: '折线。' },
        { stem: '展示两个变量的关系宜用：', options: ['散点图', '饼图', '条形图', '热力图'], answer: 0, explain: '散点。' }
      ], '这一章讲图表。', 'compare', '比较与趋势', `<p>条形、折线；排序与基线。</p>`, 'relation', '关系与分布', `<p>散点、直方图、箱线、热力图。</p>`),
      mk('可视化设计原则', '怎么画好', [
        { stem: '数据墨水比（data-ink）强调：', options: ['减少非数据元素', '增加装饰', '多用颜色', '多用动画'], answer: 0, explain: '墨水比。' },
        { stem: '误导性图表的常见做法：', options: ['截断坐标轴、面积夸大', '标注来源', '清晰标题', '合适比例'], answer: 0, explain: '误导。' },
        { stem: '颜色使用应注意：', options: ['色盲友好与语义一致', '越艳越好', '越多越好', '随机'], answer: 0, explain: '颜色。' }
      ], '这一章讲原则。', 'principle', '原则', `<p>数据墨水比、对齐、层级；减少噪音。</p>`, 'mislead', '避免误导', `<p>坐标轴、比例；色盲友好与无障碍。</p>`),
      mk('统计图表进阶', '多维', [
        { stem: '分面（facet）的作用是：', options: ['按类别拆分小图比较', '装饰', '压缩', '加密'], answer: 0, explain: '分面。' },
        { stem: '平行坐标适合：', options: ['多维数据', '时间序列', '地理', '网络'], answer: 0, explain: '多维。' },
        { stem: '热力图常用于：', options: ['矩阵数值与密度', '趋势', '比例', '层级'], answer: 0, explain: '热力。' }
      ], '这一章讲进阶。', 'multidim', '多维', `<p>分面、平行坐标、雷达；降维后可视化。</p>`, 'density', '分布与密度', `<p>热力图、六边形分箱、小提琴图。</p>`),
      mk('交互可视化', '可探索', [
        { stem: '交互的作用是：', options: ['支持探索与下钻', '装饰', '加速渲染', '压缩数据'], answer: 0, explain: '探索。' },
        { stem: '联动筛选的价值：', options: ['多视图协同分析', '美化', '减少数据', '无价值'], answer: 0, explain: '联动。' },
        { stem: '过度交互的风险：', options: ['增加认知负担', '更快', '更准', '无风险'], answer: 0, explain: '负担。' }
      ], '这一章讲交互。', 'interaction', '交互', `<p>筛选、联动、下钻；工具提示。</p>`, 'balance', '平衡', `<p>探索与解释的差异；认知负担。</p>`),
      mk('可视化工具体系', '用什么画', [
        { stem: 'matplotlib 的特点是：', options: ['灵活底层、可精细控制', '交互最强', '只能网页', '只能 3D'], answer: 0, explain: 'matplotlib。' },
        { stem: 'Tableau/Power BI 适合：', options: ['快速自助分析', '算法开发', '后端服务', '嵌入式唯一'], answer: 0, explain: 'BI 工具。' },
        { stem: 'D3/ECharts 适合：', options: ['网页定制可视化', '离线报表', '科学计算', '数据库'], answer: 0, explain: '网页。' }
      ], '这一章讲工具。', 'python', 'Python 栈', `<p>matplotlib/seaborn/plotly；Altair。</p>`, 'bi', 'BI 与前端', `<p>Tableau/Power BI；ECharts/D3。</p>`),
      mk('可视化叙事', '讲清楚', [
        { stem: '数据故事的结构：', options: ['背景—冲突—解决', '总—分—总', '时间—空间', '问题—答案唯一'], answer: 0, explain: '叙事。' },
        { stem: '标题的作用是：', options: ['直接给出结论', '装饰', '凑数', '无作用'], answer: 0, explain: '结论。' },
        { stem: '仪表盘设计应：', options: ['聚焦关键指标、层级清晰', '放满图表', '颜色越多越好', '无标题'], answer: 0, explain: '聚焦。' }
      ], '这一章讲叙事。', 'story', '叙事', `<p>结论先行、信息层级；注释与高亮。</p>`, 'dashboard', '仪表盘', `<p>指标选择、布局与刷新；移动适配。</p>`),
      mk('可视化项目', '做一套', [
        { stem: '可视化项目的第一步：', options: ['明确受众与要回答的问题', '选工具', '配色', '画图'], answer: 0, explain: '受众。' },
        { stem: '数据检查的重要性：', options: ['避免错误结论', '装饰', '加速', '无作用'], answer: 0, explain: '检查。' },
        { stem: '作品评估应看：', options: ['准确性、清晰度与洞察', '美观唯一', '图表数量', '动画'], answer: 0, explain: '综合。' }
      ], '这一章讲项目。', 'framing', '问题', `<p>受众、问题与数据；图表选型。</p>`, 'deliver', '交付', `<p>图表、报告与讲解；可复现脚本。</p>`)
    ] },

    /* ---- 大四 ---- */
    { name: '毕业设计', chapters: [
      mk('选题与开题', '做什么', [
        { stem: '大数据毕设的关键：', options: ['问题明确、数据可得、可评价', '题目宏大', '追热点', '导师偏好'], answer: 0, explain: '可行。' },
        { stem: '开题报告应包含：', options: ['背景、目标、方案、计划', '只有背景', '只有计划', '只有方案'], answer: 0, explain: '要素。' },
        { stem: '数据合规的要求：', options: ['来源合法、脱敏与授权', '随意采集', '可公开个人数据', '无需授权'], answer: 0, explain: '合规。' }
      ], '这一章讲开题。', 'topic', '选题', `<p>分析类、平台类或算法类；数据与合规。</p>`, 'proposal', '开题', `<p>背景、目标、方法、进度；风险。</p>`),
      mk('数据与实验', '做实验', [
        { stem: '数据划分的作用：', options: ['评估泛化', '增加数据', '加速', '降维'], answer: 0, explain: '划分。' },
        { stem: '基线的作用：', options: ['提供比较基准', '装饰', '替代方案', '无作用'], answer: 0, explain: '基线。' },
        { stem: '实验记录应：', options: ['记录配置、种子与结果', '只记最好', '不记录', '随意'], answer: 0, explain: '记录。' }
      ], '这一章讲实验。', 'split', '划分', `<p>训练/验证/测试；时间序列与分层抽样。</p>`, 'record', '记录', `<p>参数、种子、日志；可复现。</p>`),
      mk('论文与系统', '交付', [
        { stem: '论文结构：', options: ['引言—相关工作—方法—实验—结论', '总—分—总', '背景—致谢', '问答'], answer: 0, explain: '结构。' },
        { stem: '图表规范：', options: ['标注坐标、单位与误差', '只有图', '只有表', '无要求'], answer: 0, explain: '规范。' },
        { stem: '系统演示的价值：', options: ['展示工程完成度', '装饰', '替代论文', '无价值'], answer: 0, explain: '演示。' }
      ], '这一章讲交付。', 'thesis', '论文', `<p>方法、实验设置、结果分析；引用规范。</p>`, 'system', '系统', `<p>可视化或平台演示；文档与复现。</p>`),
      mk('答辩', '讲清楚', [
        { stem: '答辩陈述要点：', options: ['问题、方法、结果与局限', '致谢', '篇幅', '格式'], answer: 0, explain: '要点。' },
        { stem: '被质疑时应：', options: ['承认局限并说明理由', '争辩', '回避', '改口'], answer: 0, explain: '诚恳。' },
        { stem: '答辩前最该准备：', options: ['熟悉数据与结论', '背稿', '模板', '服装'], answer: 0, explain: '依据。' }
      ], '这一章讲答辩。', 'talk', '陈述', `<p>10 分钟：问题—方法—结果—局限。</p>`, 'qa', '问答', `<p>准备数据与实验问题；不会就说思路。</p>`)
    ] },
    { name: '专业实习', chapters: [
      mk('岗位与角色', '去哪里', [
        { stem: '大数据实习的常见岗位不包括：', options: ['数据分析', '数据开发', '数据产品', '外科医生'], answer: 3, explain: '无关。' },
        { stem: '选择实习最该看：', options: ['能否参与真实数据项目', '名气', '工资', '通勤'], answer: 0, explain: '实战。' },
        { stem: '数据分析岗的日常：', options: ['取数、分析、报表与建议', '只取数', '只做报表', '只开会'], answer: 0, explain: '全流程。' }
      ], '这一章讲岗位。', 'roles', '岗位', `<p>分析、开发、平台、产品；职责与技能。</p>`, 'onboard', '上手', `<p>熟悉表结构与口径；跑通一个需求。</p>`),
      mk('数据开发实践', '建管道', [
        { stem: 'ETL 任务的关键：', options: ['正确性、幂等与可重跑', '只求快', '只求省', '只求短'], answer: 0, explain: '正确。' },
        { stem: '数据质量监控的作用：', options: ['及早发现异常', '装饰', '加速', '省成本'], answer: 0, explain: '监控。' },
        { stem: '血缘的价值：', options: ['影响分析与排障', '装饰', '加密', '压缩'], answer: 0, explain: '血缘。' }
      ], '这一章讲开发。', 'pipeline', '管道', `<p>任务依赖、幂等与重跑；调度与告警。</p>`, 'quality', '质量', `<p>校验规则、波动告警；补数与修复。</p>`),
      mk('分析与汇报', '讲给业务', [
        { stem: '分析报告应：', options: ['结论先行、建议明确', '长篇', '只有数据', '只有背景'], answer: 0, explain: '结论。' },
        { stem: '指标口径的重要性：', options: ['决定结论一致性', '无影响', '只影响速度', '只影响成本'], answer: 0, explain: '口径。' },
        { stem: '可视化在汇报中的作用：', options: ['快速传递洞察', '装饰', '替代结论', '无作用'], answer: 0, explain: '传递。' }
      ], '这一章讲汇报。', 'report', '报告', `<p>结论—证据—建议；图表与口径说明。</p>`, 'communication', '沟通', `<p>面向业务的语言；确认需求与预期。</p>`),
      mk('实习复盘', '留下什么', [
        { stem: '实习应留下的成果：', options: ['项目成果、数据与复盘', '工牌', '照片', '评语'], answer: 0, explain: '成果。' },
        { stem: '实习日志推荐写法：', options: ['问题—做法—结果—反思', '流水账', '只写结论', '只写感受'], answer: 0, explain: '结构化。' },
        { stem: '面试讲实习最佳结构：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
      ], '这一章讲收尾。', 'output', '成果', `<p>看板、模型、管道与提效数据；可量化。</p>`, 'review', '复盘', `<p>每周五行；讲清贡献与收获。</p>`)
    ] },
    { name: '考研与求职', chapters: [
      mk('考研方向', '往哪考', [
        { stem: '大数据考研的常见方向：', options: ['计算机、软件工程、数据科学、电子信息专硕', '只有计算机', '只有数据科学', '只有专硕'], answer: 0, explain: '多方向。' },
        { stem: '专业课常见组合：', options: ['数学一 + 数据结构/数据库', '只有数学', '只有英语', '只有政治'], answer: 0, explain: '组合。' },
        { stem: '择校最应考虑：', options: ['方向、导师与平台', '城市', '学费', '宿舍'], answer: 0, explain: '匹配。' }
      ], '这一章讲方向。', 'paths', '方向', `<p>计算机、软件工程、数据科学、电子信息；学硕与专硕。</p>`, 'subjects', '科目', `<p>政治、英语、数学、专业课（数据结构/数据库）。</p>`),
      mk('专业课复习', '备考', [
        { stem: '数据结构主线：', options: ['线性—树—图—查找排序', '只背定义', '只做真题', '只看书'], answer: 0, explain: '主线。' },
        { stem: '数据库重点：', options: ['SQL、范式、事务与索引', '只有 SQL', '只有范式', '只有事务'], answer: 0, explain: '四块。' },
        { stem: '数学复习关键：', options: ['基础计算与题型熟练', '只看难题', '只背结论', '只做选择'], answer: 0, explain: '基础。' }
      ], '这一章讲复习。', 'ds', '数据结构', `<p>结构、复杂度、算法设计。</p>`, 'db', '数据库', `<p>SQL、范式、事务、索引与优化。</p>`),
      mk('求职方向', '就业', [
        { stem: '大数据毕业生的常见去向不包括：', options: ['数据分析', '数据开发', '数据产品', '外科医生'], answer: 3, explain: '专业限制。' },
        { stem: '数据开发岗看重：', options: ['SQL/编程与数仓建模', '只有学历', '只有证书', '只有英语'], answer: 0, explain: '技能。' },
        { stem: '求职最加分的材料：', options: ['项目与数据作品', '证书数量', '成绩单', '社团'], answer: 0, explain: '作品。' }
      ], '这一章讲就业。', 'paths', '路径', `<p>数据分析、数据开发、算法、平台、产品。</p>`, 'skills', '能力', `<p>SQL/Python、数仓与可视化；业务理解。</p>`),
      mk('面试', '展示能力', [
        { stem: '数据岗面试常考：', options: ['SQL、统计与业务案例', '只有编程', '只有英语', '只有性格'], answer: 0, explain: '综合。' },
        { stem: '讲项目最佳结构：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' },
        { stem: '被问到不会的问题应：', options: ['说明思路并诚实承认', '编造', '沉默', '转移话题'], answer: 0, explain: '诚实。' }
      ], '这一章讲面试。', 'sql', 'SQL 与统计', `<p>窗口函数、关联；概率与检验。</p>`, 'case', '业务案例', `<p>指标拆解、A/B 设计；沟通表达。</p>`)
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
