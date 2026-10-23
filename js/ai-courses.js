/* ==========================================================
   ai-courses.js · 人工智能：12 门课（主干 8 / 出口 4）= 84 关
   ========================================================== */

(function () {
  var MAJOR = 'inter-人工智能';
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
      mk('Python 与开发环境', '起点', [
        { stem: 'Python 是：', options: ['解释型、动态类型语言', '编译型静态语言', '纯函数式语言', '汇编语言'], answer: 0, explain: '解释型。' },
        { stem: '虚拟环境的作用是：', options: ['隔离依赖版本', '加速运行', '加密代码', '压缩代码'], answer: 0, explain: '隔离。' },
        { stem: 'pip 的作用是：', options: ['安装与管理第三方包', '调试', '编译', '打包成 exe'], answer: 0, explain: '包管理。' }
      ], '这一章讲环境。', 'env', '环境', `<p>解释器、虚拟环境（venv/conda）；Jupyter/IDE。</p>`, 'pip', '包管理', `<p>pip、requirements.txt；常用科学计算包。</p>`),
      mk('数据类型与控制', '基础语法', [
        { stem: '列表与元组的区别是：', options: ['是否可变', '长度', '元素类型', '是否可迭代'], answer: 0, explain: '可变性。' },
        { stem: '字典的查找平均复杂度是：', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'], answer: 0, explain: '哈希。' },
        { stem: '列表推导式的作用是：', options: ['简洁构造列表', '加速循环', '调试', '排序'], answer: 0, explain: '构造。' }
      ], '这一章讲语法。', 'type', '数据类型', `<p>列表、元组、字典、集合；切片与推导式。</p>`, 'control', '控制结构', `<p>条件、循环；enumerate/zip；异常处理。</p>`),
      mk('函数与模块', '组织代码', [
        { stem: '函数默认参数应避免使用：', options: ['可变对象', '整数', '字符串', 'None'], answer: 0, explain: '可变默认值。' },
        { stem: '*args 与 **kwargs 的区别是：', options: ['位置参数 vs 关键字参数', '相同', '都是关键字', '都是位置'], answer: 0, explain: '两类。' },
        { stem: '模块与包的区别是：', options: ['包是含 __init__ 的目录', '相同', '模块是目录', '包是单文件'], answer: 0, explain: '包。' }
      ], '这一章讲函数。', 'function', '函数', `<p>参数、返回值、作用域；闭包与装饰器。</p>`, 'module', '模块', `<p>import 机制、包结构；__name__ 用法。</p>`),
      mk('面向对象', '抽象', [
        { stem: '类与实例的关系是：', options: ['类是模板、实例是对象', '相同', '实例是模板', '无关'], answer: 0, explain: '模板。' },
        { stem: '__init__ 的作用是：', options: ['初始化实例', '销毁实例', '复制实例', '比较实例'], answer: 0, explain: '初始化。' },
        { stem: '继承的作用是：', options: ['复用与扩展', '加速', '加密', '压缩'], answer: 0, explain: '复用。' }
      ], '这一章讲 OOP。', 'class', '类', `<p>属性与方法、继承、多态；魔术方法。</p>`, 'design', '设计', `<p>组合优于继承；数据类（dataclass）。</p>`),
      mk('常用库', '工具箱', [
        { stem: 'NumPy 的核心数据结构是：', options: ['ndarray', 'DataFrame', 'list', 'dict'], answer: 0, explain: 'ndarray。' },
        { stem: 'pandas 的 DataFrame 适合：', options: ['表格数据处理', '图像处理', '网络通信', '并发'], answer: 0, explain: '表格。' },
        { stem: '向量化运算的优势是：', options: ['避免 Python 循环、性能更高', '代码更长', '更易读唯一', '省内存唯一'], answer: 0, explain: '向量化。' }
      ], '这一章讲库。', 'numpy', 'NumPy', `<p>ndarray、广播、索引切片；向量化。</p>`, 'pandas', 'pandas', `<p>Series/DataFrame、分组聚合、缺失值处理。</p>`),
      mk('文件与数据读写', '输入输出', [
        { stem: '读取 CSV 常用：', options: ['pandas.read_csv', 'open 唯一', 'json.load 唯一', 'pickle'], answer: 0, explain: 'read_csv。' },
        { stem: 'JSON 适合：', options: ['半结构化嵌套数据', '大表格', '二进制模型', '图像'], answer: 0, explain: 'JSON。' },
        { stem: '大文件处理应采用：', options: ['分块读取', '一次读入', '全部加载到内存', '转成列表'], answer: 0, explain: '分块。' }
      ], '这一章讲 IO。', 'file', '文件', `<p>文本与二进制、编码；路径处理（pathlib）。</p>`, 'format', '数据格式', `<p>CSV/JSON/Parquet；分块读取与内存控制。</p>`),
      mk('调试与测试', '质量', [
        { stem: '单元测试框架常用：', options: ['pytest', 'pandas', 'numpy', 'flask'], answer: 0, explain: 'pytest。' },
        { stem: '断言的作用是：', options: ['检查预期并快速暴露错误', '加速', '加密', '格式化'], answer: 0, explain: '断言。' },
        { stem: '调试的第一步是：', options: ['复现问题', '改代码', '重装', '问人'], answer: 0, explain: '复现。' }
      ], '这一章讲质量。', 'debug', '调试', `<p>断点、pdb、日志；最小复现。</p>`, 'test', '测试', `<p>pytest、断言；测试覆盖率与 CI。</p>`),
      mk('小项目实战', '综合', [
        { stem: '项目结构应：', options: ['模块化、职责清晰', '全部放一个文件', '随机', '只写脚本'], answer: 0, explain: '模块化。' },
        { stem: 'README 的作用是：', options: ['说明安装、使用与结构', '装饰', '凑数', '无作用'], answer: 0, explain: '说明。' },
        { stem: '版本控制的意义：', options: ['记录演进与协作', '备份唯一', '压缩', '加密'], answer: 0, explain: '版本。' }
      ], '这一章讲实战。', 'project', '项目', `<p>数据清洗、分析、可视化小项目；模块划分。</p>`, 'deliver', '交付', `<p>README、依赖文件、可复现脚本；代码规范。</p>`)
    ] },
    { name: '高等数学（工科）', chapters: [
      mk('极限与连续', '基础', [
        { stem: 'lim(x→0) sinx/x 等于：', options: ['1', '0', '∞', '不存在'], answer: 0, explain: '重要极限。' },
        { stem: '闭区间连续函数：', options: ['有界且可取最值', '必可导', '必单调', '无最值'], answer: 0, explain: '性质。' },
        { stem: '等价无穷小替换适用于：', options: ['乘除', '加减', '任意', '只有极限'], answer: 0, explain: '乘除。' }
      ], '这一章讲极限。', 'limit', '极限', `<p>定义、法则、两个重要极限。</p>`, 'continuity', '连续', `<p>连续与间断；闭区间性质。</p>`),
      mk('导数与微分', '变化率', [
        { stem: '可导与连续的关系：', options: ['可导必连续', '等价', '连续必可导', '无关'], answer: 0, explain: '蕴含。' },
        { stem: '梯度下降中的梯度是：', options: ['多元函数的偏导向量', '导数', '积分', '二阶导'], answer: 0, explain: '梯度。' },
        { stem: '洛必达适用：', options: ['0/0 或 ∞/∞', '所有极限', '只有 0/0', '只有 ∞/∞'], answer: 0, explain: '未定式。' }
      ], '这一章讲导数。', 'derivative', '导数', `<p>求导法则、链式法则；隐函数。</p>`, 'gradient', '梯度', `<p>偏导、梯度与方向导数；优化中的意义。</p>`),
      mk('积分', '累积', [
        { stem: '牛顿-莱布尼茨公式：', options: ['∫ₐᵇf = F(b) − F(a)', 'F(a) − F(b)', 'f(b) − f(a)', '∫f′'], answer: 0, explain: '公式。' },
        { stem: '定积分在概率中的用途：', options: ['计算连续分布的概率与期望', '求和', '求导', '排序'], answer: 0, explain: '概率。' },
        { stem: '分部积分公式：', options: ['∫u dv = uv − ∫v du', 'uv + ∫v du', '∫u∫v', 'u′v′'], answer: 0, explain: '分部。' }
      ], '这一章讲积分。', 'integral', '积分', `<p>不定与定积分；换元、分部。</p>`, 'application', '应用', `<p>面积、期望、KL 散度等计算。</p>`),
      mk('多元函数', '多维', [
        { stem: '全微分充分条件：', options: ['偏导连续', '偏导存在', '连续', '有界'], answer: 0, explain: '充分。' },
        { stem: '条件极值用：', options: ['拉格朗日乘数法', '洛必达', '泰勒', '积分'], answer: 0, explain: '乘数法。' },
        { stem: '黑塞矩阵用于：', options: ['判断极值性质', '求积分', '求极限', '排序'], answer: 0, explain: '黑塞。' }
      ], '这一章讲多元。', 'differential', '微分', `<p>偏导、全微分、链式；黑塞矩阵。</p>`, 'extremum', '极值', `<p>无条件与条件极值；鞍点。</p>`),
      mk('线性代数初步', '矩阵语言', [
        { stem: '矩阵乘法的意义：', options: ['线性变换的复合', '逐元素相乘', '转置', '求逆'], answer: 0, explain: '复合。' },
        { stem: '特征值分解用于：', options: ['降维与主成分分析', '求积分', '求极限', '排序'], answer: 0, explain: 'PCA。' },
        { stem: '秩的意义是：', options: ['线性无关的行（列）最大数', '元素个数', '行列式', '迹'], answer: 0, explain: '秩。' }
      ], '这一章讲线代。', 'matrix', '矩阵', `<p>乘法、转置、逆、秩；线性方程组。</p>`, 'eigen', '特征值', `<p>特征分解、SVD；PCA 与降维。</p>`),
      mk('概率与统计', '不确定性', [
        { stem: '条件概率的定义是：', options: ['P(A|B)=P(AB)/P(B)', 'P(A)P(B)', 'P(A)+P(B)', 'P(A)−P(B)'], answer: 0, explain: '定义。' },
        { stem: '贝叶斯公式用于：', options: ['由结果推断原因', '求期望', '判独立', '求方差'], answer: 0, explain: '后验。' },
        { stem: '最大似然估计的目标是：', options: ['最大化观测数据的似然', '最小化方差', '最大化先验', '最小化误差'], answer: 0, explain: 'MLE。' }
      ], '这一章讲概率。', 'probability', '概率', `<p>条件概率、独立性、常见分布。</p>`, 'estimation', '估计', `<p>极大似然、贝叶斯；期望与方差。</p>`),
      mk('级数与逼近', '无穷', [
        { stem: '泰勒展开的作用是：', options: ['用多项式局部逼近函数', '求积分', '求极限唯一', '排序'], answer: 0, explain: '逼近。' },
        { stem: '梯度下降的步长称为：', options: ['学习率', '动量', '权重', '偏置'], answer: 0, explain: '学习率。' },
        { stem: '收敛性分析需要：', options: ['函数性质与步长条件', '只看结果', '随机', '只看迭代次数'], answer: 0, explain: '条件。' }
      ], '这一章讲逼近。', 'taylor', '泰勒', `<p>展开、余项；局部近似。</p>`, 'optimization', '逼近与优化', `<p>迭代格式、学习率；收敛条件。</p>`),
      mk('工程计算训练', '用起来', [
        { stem: '数值稳定的重要性：', options: ['避免误差放大导致错误结果', '加速', '省内存', '美观'], answer: 0, explain: '稳定。' },
        { stem: '量纲与单位检查的作用：', options: ['发现计算错误', '装饰', '加速', '无作用'], answer: 0, explain: '检查。' },
        { stem: '提高能力的有效方式：', options: ['结合代码实现公式', '只背公式', '只看书', '只做选择'], answer: 0, explain: '实现。' }
      ], '这一章讲训练。', 'numerical', '数值', `<p>浮点误差、下溢上溢；log-sum-exp 技巧。</p>`, 'practice', '实践', `<p>用 NumPy 实现公式；梯度检验。</p>`)
    ] },
    { name: '线性代数与概率统计', chapters: [
      mk('向量与空间', '基础', [
        { stem: '线性无关的含义是：', options: ['只有零组合等于零向量', '任意组合非零', '向量数量少', '向量正交'], answer: 0, explain: '无关。' },
        { stem: '内积的几何意义：', options: ['投影与夹角', '面积', '体积', '距离唯一'], answer: 0, explain: '投影。' },
        { stem: '基与维数的关系是：', options: ['基向量个数等于维数', '无关', '基越大越好', '维数固定'], answer: 0, explain: '定义。' }
      ], '这一章讲向量。', 'independence', '线性无关', `<p>张成空间、基与维数；内积与夹角。</p>`, 'projection', '投影', `<p>正交投影、最小二乘；Gram-Schmidt。</p>`),
      mk('矩阵分解', '结构', [
        { stem: 'SVD 适用于：', options: ['任意矩阵', '只有方阵', '只有对称阵', '只有可逆阵'], answer: 0, explain: '任意。' },
        { stem: '特征值分解要求矩阵：', options: ['可对角化（或对称）', '任意', '可逆', '正交'], answer: 0, explain: '条件。' },
        { stem: 'PCA 依赖：', options: ['协方差矩阵的特征分解', '梯度下降唯一', '随机采样', '聚类'], answer: 0, explain: 'PCA。' }
      ], '这一章讲分解。', 'svd', 'SVD', `<p>奇异值、低秩近似；降维与压缩。</p>`, 'pca', 'PCA', `<p>协方差、主成分；方差贡献率。</p>`),
      mk('概率基础', '随机性', [
        { stem: '随机变量的分布函数性质：', options: ['单调不减、右连续', '连续可导', '对称', '有界'], answer: 0, explain: '性质。' },
        { stem: '期望的线性性：', options: ['E(aX+bY)=aE(X)+bE(Y)', '需要独立', '只在离散时成立', '不成立'], answer: 0, explain: '线性。' },
        { stem: '方差的性质：', options: ['Var(aX)=a²Var(X)', 'aVar(X)', 'Var(X)', 'a²+b'], answer: 0, explain: '方差。' }
      ], '这一章讲概率。', 'distribution', '分布', `<p>离散与连续；分布函数与密度。</p>`, 'moment', '数字特征', `<p>期望、方差、协方差；线性性。</p>`),
      mk('常见分布', '工具箱', [
        { stem: '二项分布的期望是：', options: ['np', 'p', 'n/p', 'np(1−p)'], answer: 0, explain: 'np。' },
        { stem: '正态分布的重要性来自：', options: ['中心极限定理', '定义简单', '参数少', '易计算'], answer: 0, explain: 'CLT。' },
        { stem: '伯努利分布是：', options: ['二项分布 n=1 的特例', '正态特例', '泊松特例', '均匀特例'], answer: 0, explain: '特例。' }
      ], '这一章讲分布。', 'discrete', '离散', `<p>伯努利、二项、泊松、几何。</p>`, 'continuous', '连续', `<p>均匀、指数、正态、贝塔；用途。</p>`),
      mk('统计推断', '从样本到总体', [
        { stem: '中心极限定理说明：', options: ['样本均值近似正态', '样本必正态', '方差为零', '独立'], answer: 0, explain: 'CLT。' },
        { stem: '置信区间的含义：', options: ['重复抽样中覆盖真值的频率', '真值概率', '样本范围', '误差'], answer: 0, explain: '覆盖。' },
        { stem: '假设检验的 p 值：', options: ['原假设下出现当前结果的概率', '原假设为真的概率', '结论正确率', '效应大小'], answer: 0, explain: 'p 值。' }
      ], '这一章讲推断。', 'clt', '极限定理', `<p>大数定律、中心极限定理。</p>`, 'test', '估计与检验', `<p>点估计、区间估计；假设检验与 p 值。</p>`),
      mk('信息论基础', '度量', [
        { stem: '熵衡量：', options: ['不确定性', '能量', '距离', '方差'], answer: 0, explain: '不确定性。' },
        { stem: '交叉熵常作为：', options: ['分类损失函数', '正则项', '优化器', '激活函数'], answer: 0, explain: '损失。' },
        { stem: 'KL 散度是：', options: ['非对称的分布差异度量', '对称距离', '内积', '范数'], answer: 0, explain: '非对称。' }
      ], '这一章讲信息论。', 'entropy', '熵', `<p>信息量、熵、联合熵与条件熵。</p>`, 'divergence', '散度', `<p>交叉熵、KL 散度；在损失函数中的意义。</p>`),
      mk('数值计算与稳定', '工程', [
        { stem: 'log-sum-exp 技巧用于：', options: ['避免上溢下溢', '加速', '降维', '正则化'], answer: 0, explain: '数值稳定。' },
        { stem: '矩阵求逆通常应避免，因为：', options: ['数值不稳定且昂贵', '不能求', '会报错', '无意义'], answer: 0, explain: '稳定性。' },
        { stem: '浮点精度问题会导致：', options: ['结果偏差与不收敛', '更快', '更准', '无影响'], answer: 0, explain: '精度。' }
      ], '这一章讲数值。', 'stability', '稳定', `<p>上溢下溢、条件数；log-sum-exp。</p>`, 'practice', '实践', `<p>用库函数而非手写；解方程用分解法。</p>`),
      mk('综合训练', '串起来', [
        { stem: '机器学习中线性代数主要用于：', options: ['表示数据与模型参数', '求导', '积分', '排序'], answer: 0, explain: '表示。' },
        { stem: '概率统计在 ML 中的作用：', options: ['建模不确定性与评估', '只做可视化', '只做存储', '无作用'], answer: 0, explain: '建模。' },
        { stem: '理论联系实践的方式：', options: ['用代码实现推导并验证', '只背公式', '只看视频', '只做选择'], answer: 0, explain: '实现。' }
      ], '这一章讲训练。', 'connection', '联系', `<p>数据矩阵、参数向量；损失与概率。</p>`, 'practice', '实践', `<p>推导 + 实现 + 数值检验；错题总结。</p>`)
    ] },
    { name: '数据结构与算法', chapters: [
      mk('复杂度分析', '效率', [
        { stem: '大 O 表示：', options: ['渐进上界', '精确时间', '下界', '平均值'], answer: 0, explain: '上界。' },
        { stem: '二分查找的时间复杂度：', options: ['O(log n)', 'O(n)', 'O(n log n)', 'O(1)'], answer: 0, explain: 'log n。' },
        { stem: '空间复杂度衡量：', options: ['额外内存随规模的增长', '运行时间', '代码行数', '变量个数'], answer: 0, explain: '空间。' }
      ], '这一章讲复杂度。', 'bigo', '大 O', `<p>渐进记号、常见量级；摊还分析。</p>`, 'tradeoff', '权衡', `<p>时间与空间；常数因子与工程优化。</p>`),
      mk('线性结构', '表栈队列', [
        { stem: '链表插入（已知位置）复杂度：', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'], answer: 0, explain: 'O(1)。' },
        { stem: '栈的应用包括：', options: ['括号匹配、递归、表达式求值', '只有括号', '只有递归', '排序唯一'], answer: 0, explain: '多应用。' },
        { stem: '循环队列解决：', options: ['假溢出', '真溢出', '泄漏', '排序'], answer: 0, explain: '循环。' }
      ], '这一章讲线性。', 'list', '表', `<p>数组与链表；插入删除与随机访问。</p>`, 'stack', '栈与队列', `<p>LIFO/FIFO；双端队列；BFS。</p>`),
      mk('哈希表', '查找', [
        { stem: '哈希冲突解决：', options: ['开放定址与链地址', '只有开放', '只有链地址', '排序'], answer: 0, explain: '两类。' },
        { stem: '装填因子过大导致：', options: ['冲突增多、性能下降', '更快', '内存减少', '无影响'], answer: 0, explain: '因子。' },
        { stem: '哈希表平均查找复杂度：', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'], answer: 0, explain: 'O(1)。' }
      ], '这一章讲哈希。', 'hash', '哈希', `<p>哈希函数、冲突处理；装填因子。</p>`, 'application', '应用', `<p>去重、计数、缓存；一致性哈希。</p>`),
      mk('树与堆', '层次', [
        { stem: '二叉搜索树的查找平均复杂度：', options: ['O(log n)', 'O(n)', 'O(1)', 'O(n log n)'], answer: 0, explain: 'log n。' },
        { stem: '堆的插入复杂度：', options: ['O(log n)', 'O(1)', 'O(n)', 'O(n log n)'], answer: 0, explain: 'log n。' },
        { stem: '平衡树的作用是：', options: ['避免退化为链表', '加速排序唯一', '减少内存', '加密'], answer: 0, explain: '平衡。' }
      ], '这一章讲树。', 'bst', 'BST', `<p>查找、插入、删除；遍历方式。</p>`, 'heap', '堆与平衡树', `<p>优先队列、堆排序；AVL/红黑树。</p>`),
      mk('图算法', '网络', [
        { stem: 'Dijkstra 适用于：', options: ['非负权单源最短路', '负权', '最小生成树', '拓扑排序'], answer: 0, explain: '非负权。' },
        { stem: 'BFS 用于：', options: ['无权图最短路与层序遍历', '最小生成树', '拓扑排序', '排序'], answer: 0, explain: 'BFS。' },
        { stem: '拓扑排序适用于：', options: ['有向无环图', '任意图', '无向图', '树'], answer: 0, explain: 'DAG。' }
      ], '这一章讲图。', 'traverse', '遍历', `<p>DFS、BFS；连通分量。</p>`, 'shortest', '最短路与排序', `<p>Dijkstra、拓扑排序；最小生成树。</p>`),
      mk('排序与查找', '整理数据', [
        { stem: '快排平均复杂度：', options: ['O(n log n)', 'O(n)', 'O(n²)', 'O(log n)'], answer: 0, explain: '平均。' },
        { stem: '稳定排序的例子：', options: ['归并排序', '快速排序', '堆排序', '选择排序'], answer: 0, explain: '稳定。' },
        { stem: '二分查找前提：', options: ['有序', '无序', '链式', '哈希'], answer: 0, explain: '有序。' }
      ], '这一章讲排序。', 'sort', '排序', `<p>比较排序与线性排序；稳定性。</p>`, 'search', '查找', `<p>二分、插值；边界条件。</p>`),
      mk('算法思想', '范式', [
        { stem: '动态规划的关键：', options: ['最优子结构与重叠子问题', '贪心选择', '随机化', '分块'], answer: 0, explain: 'DP。' },
        { stem: '贪心的适用需要：', options: ['贪心选择性质与最优子结构', '任意问题', '只需重叠', '只需排序'], answer: 0, explain: '条件。' },
        { stem: '回溯的本质是：', options: ['搜索 + 剪枝', '排序', '哈希', '分治'], answer: 0, explain: '回溯。' }
      ], '这一章讲范式。', 'dp', '动态规划', `<p>状态定义、转移方程、边界；空间优化。</p>`, 'greedy', '贪心与回溯', `<p>贪心条件；搜索与剪枝。</p>`),
      mk('刷题与工程实践', '练', [
        { stem: '刷题有效方式：', options: ['按专题分类并总结模板', '随机刷', '只看答案', '只刷难题'], answer: 0, explain: '专题。' },
        { stem: '写代码前应先：', options: ['想清思路与复杂度', '直接敲', '找模板', '问人'], answer: 0, explain: '思路。' },
        { stem: '边界条件应：', options: ['专门测试（空、单元素、极值）', '忽略', '靠运气', '只测正常'], answer: 0, explain: '边界。' }
      ], '这一章讲练习。', 'topic', '专题', `<p>链表、树、图、DP、字符串；模板与变式。</p>`, 'habit', '习惯', `<p>手算样例、检查边界；复盘错题。</p>`)
    ] },
    { name: '机器学习', chapters: [
      mk('机器学习概述', '是什么', [
        { stem: '监督与无监督的区别：', options: ['是否有标签', '是否用数据', '是否有算法', '是否可视化'], answer: 0, explain: '标签。' },
        { stem: '过拟合的表现：', options: ['训练好测试差', '训练差测试好', '都好', '都差'], answer: 0, explain: '过拟合。' },
        { stem: '偏差-方差权衡说明：', options: ['模型复杂度与泛化的平衡', '方差越大越好', '偏差越大越好', '无关系'], answer: 0, explain: '权衡。' }
      ], '这一章讲概述。', 'type', '类型', `<p>监督、无监督、半监督、强化；任务形式。</p>`, 'generalization', '泛化', `<p>过拟合、欠拟合；偏差与方差。</p>`),
      mk('数据预处理与特征', '准备', [
        { stem: '标准化与归一化区别：', options: ['是否缩放到固定区间', '相同', '标准化到 [0,1]', '归一化到均值 0'], answer: 0, explain: '区间。' },
        { stem: '类别特征常用编码：', options: ['独热与目标编码', '只能独热', '只能目标编码', '不处理'], answer: 0, explain: '编码。' },
        { stem: '数据泄漏的后果：', options: ['评估虚高、上线失效', '更准', '无影响', '更快'], answer: 0, explain: '泄漏。' }
      ], '这一章讲特征。', 'cleaning', '清洗', `<p>缺失值、异常值、重复；采样与不平衡。</p>`, 'feature', '特征工程', `<p>标准化、编码、构造；数据泄漏防范。</p>`),
      mk('线性模型', '基线', [
        { stem: '线性回归的损失常用：', options: ['均方误差', '交叉熵', '合页损失', '绝对值唯一'], answer: 0, explain: 'MSE。' },
        { stem: '正则化的作用是：', options: ['抑制过拟合', '加速唯一', '提高训练误差', '增加特征'], answer: 0, explain: '正则。' },
        { stem: '逻辑回归的输出是：', options: ['概率（经 sigmoid）', '实数', '类别唯一', '向量'], answer: 0, explain: '概率。' }
      ], '这一章讲线性。', 'regression', '回归', `<p>最小二乘、梯度下降；Ridge/Lasso。</p>`, 'classification', '分类', `<p>逻辑回归、sigmoid；交叉熵损失。</p>`),
      mk('树模型与集成', '强力基线', [
        { stem: '决策树的分裂依据：', options: ['信息增益/基尼指数', '随机', '距离', '方差唯一'], answer: 0, explain: '不纯度。' },
        { stem: '随机森林通过什么降低方差：', options: ['样本与特征随机 + 集成平均', '加深树', '减少树', '只用一树'], answer: 0, explain: '集成。' },
        { stem: 'GBDT 的核心思想：', options: ['逐步拟合残差（梯度）', '随机采样', '平均预测', '线性组合特征'], answer: 0, explain: 'Boosting。' }
      ], '这一章讲树。', 'tree', '决策树', `<p>信息增益、基尼；剪枝与深度控制。</p>`, 'ensemble', '集成', `<p>Bagging/随机森林、Boosting/GBDT；XGBoost。</p>`),
      mk('支持向量机与核方法', '间隔', [
        { stem: 'SVM 的目标是：', options: ['最大化分类间隔', '最小化参数', '最大化似然', '最小化方差'], answer: 0, explain: '间隔。' },
        { stem: '核技巧的作用：', options: ['在高维隐式空间中线性可分', '降维', '加速训练唯一', '正则化'], answer: 0, explain: '核技巧。' },
        { stem: '软间隔引入：', options: ['松弛变量容忍噪声', '硬间隔', '去掉核', '增加特征'], answer: 0, explain: '软间隔。' }
      ], '这一章讲 SVM。', 'margin', '间隔', `<p>最大间隔、支持向量；对偶问题。</p>`, 'kernel', '核方法', `<p>核函数、软间隔；RBF 核与参数。</p>`),
      mk('无监督学习', '结构发现', [
        { stem: 'K-means 的目标：', options: ['最小化类内平方和', '最大化类间', '随机分组', '层次合并'], answer: 0, explain: 'K-means。' },
        { stem: 'PCA 的作用：', options: ['线性降维并保留最大方差', '分类', '聚类', '回归'], answer: 0, explain: 'PCA。' },
        { stem: '聚类效果评估的难点：', options: ['无标签、依赖距离度量', '计算慢', '样本少', '维度低'], answer: 0, explain: '无标签。' }
      ], '这一章讲无监督。', 'cluster', '聚类', `<p>K-means、层次、DBSCAN；K 选择。</p>`, 'dimreduce', '降维', `<p>PCA、t-SNE；可视化与解释。</p>`),
      mk('模型评估与调优', '可靠', [
        { stem: '交叉验证的作用：', options: ['更稳健评估泛化', '加快训练', '增加数据', '减少特征'], answer: 0, explain: 'CV。' },
        { stem: '类别不平衡时宜用：', options: ['F1、AUC 等指标', '只看准确率', '只看损失', '只看速度'], answer: 0, explain: '指标。' },
        { stem: '超参数调优的常用方法：', options: ['网格、随机、贝叶斯优化', '只有网格', '只有随机', '手动唯一'], answer: 0, explain: '多种。' }
      ], '这一章讲评估。', 'split', '划分', `<p>训练/验证/测试；交叉验证；时间序列划分。</p>`, 'metric', '指标与调参', `<p>准确率、精确率、召回、F1、AUC；调参策略。</p>`),
      mk('机器学习项目', '落地', [
        { stem: '项目的第一步：', options: ['明确问题与评价指标', '选模型', '调参', '画图'], answer: 0, explain: '问题。' },
        { stem: '基线模型的作用：', options: ['提供比较与快速验证', '装饰', '替代最终模型', '无作用'], answer: 0, explain: '基线。' },
        { stem: '上线后应：', options: ['监控效果与数据漂移', '不管', '只备份', '只归档'], answer: 0, explain: '监控。' }
      ], '这一章讲项目。', 'framing', '问题定义', `<p>任务类型、指标、数据可得性；可行性。</p>`, 'pipeline', '流程与上线', `<p>基线—迭代—评估—部署；监控漂移。</p>`)
    ] },
    { name: '最优化方法', chapters: [
      mk('最优化概述', '是什么', [
        { stem: '最优化问题的三要素：', options: ['变量、目标函数、约束', '只有变量', '只有目标', '只有约束'], answer: 0, explain: '三要素。' },
        { stem: '凸优化的好处是：', options: ['局部最优即全局最优', '一定快', '无需约束', '无梯度'], answer: 0, explain: '凸性。' },
        { stem: '无约束与有约束的区别：', options: ['是否含约束条件', '目标函数', '变量数', '求解器'], answer: 0, explain: '约束。' }
      ], '这一章讲概述。', 'form', '形式', `<p>min f(x) s.t. 约束；可行域。</p>`, 'convex', '凸性', `<p>凸集、凸函数；局部与全局最优。</p>`),
      mk('梯度下降', '基础算法', [
        { stem: '梯度方向是：', options: ['函数增长最快方向', '下降最快方向', '等值线方向', '任意'], answer: 0, explain: '增长。' },
        { stem: '学习率过大会导致：', options: ['震荡甚至发散', '收敛更快', '无影响', '更准'], answer: 0, explain: '学习率。' },
        { stem: '随机梯度下降的优势：', options: ['每步计算便宜、可逃离鞍点', '一定更准', '无需调参', '内存更大'], answer: 0, explain: 'SGD。' }
      ], '这一章讲 GD。', 'gd', '梯度下降', `<p>方向、步长；收敛条件与学习率。</p>`, 'sgd', '变体', `<p>SGD、小批量、动量；学习率衰减。</p>`),
      mk('自适应方法', '进阶', [
        { stem: 'Adam 结合了：', options: ['动量与自适应学习率', '只有动量', '只有自适应', '二阶信息'], answer: 0, explain: 'Adam。' },
        { stem: 'AdaGrad 的特点是：', options: ['按历史梯度平方累积调整步长', '固定步长', '只用动量', '二阶牛顿'], answer: 0, explain: 'AdaGrad。' },
        { stem: '自适应方法的常见问题：', options: ['可能收敛到次优点或泛化略差', '无法收敛', '需要大内存', '不适用深度学习'], answer: 0, explain: '问题。' }
      ], '这一章讲自适应。', 'adagrad', 'AdaGrad/RMSProp', `<p>累积平方梯度；分母平滑。</p>`, 'adam', 'Adam', `<p>一阶矩与二阶矩；偏差校正。</p>`),
      mk('二阶方法', '更快', [
        { stem: '牛顿法的更新使用：', options: ['黑塞矩阵的逆', '梯度', '动量', '随机采样'], answer: 0, explain: '牛顿。' },
        { stem: '牛顿法的问题是：', options: ['计算与存储黑塞矩阵昂贵', '收敛慢', '无精度', '不能用于凸问题'], answer: 0, explain: '代价。' },
        { stem: '拟牛顿法的思路：', options: ['近似黑塞矩阵', '忽略梯度', '只用动量', '随机搜索'], answer: 0, explain: '近似。' }
      ], '这一章讲二阶。', 'newton', '牛顿法', `<p>黑塞、二次收敛；局部性。</p>`, 'quasi', '拟牛顿', `<p>BFGS/L-BFGS；大规模优化。</p>`),
      mk('约束优化', '条件', [
        { stem: '拉格朗日乘子法用于：', options: ['等式约束优化', '无约束', '离散优化', '随机优化'], answer: 0, explain: '等式。' },
        { stem: 'KKT 条件的组成包括：', options: ['平稳性、原始与对偶可行性、互补松弛', '只有平稳性', '只有可行性', '只有互补'], answer: 0, explain: 'KKT。' },
        { stem: '对偶问题的作用：', options: ['提供下界并便于求解', '等价替换唯一', '加速唯一', '无作用'], answer: 0, explain: '对偶。' }
      ], '这一章讲约束。', 'lagrange', '拉格朗日', `<p>乘子、等式约束；几何解释。</p>`, 'kkt', 'KKT', `<p>不等式约束、互补松弛；对偶与 SVM。</p>`),
      mk('非凸与全局优化', '难问题', [
        { stem: '深度学习的损失面通常是：', options: ['非凸、有鞍点', '凸', '线性', '二次'], answer: 0, explain: '非凸。' },
        { stem: '鞍点的影响是：', options: ['梯度接近零但非最优', '一定最优', '梯度爆炸', '无影响'], answer: 0, explain: '鞍点。' },
        { stem: '逃离鞍点的常用手段：', options: ['随机初始化与噪声、动量', '更大学习率唯一', '减少数据', '去掉正则'], answer: 0, explain: '手段。' }
      ], '这一章讲非凸。', 'nonconvex', '非凸', `<p>局部极小、鞍点；高维直觉。</p>`, 'escape', '策略', `<p>随机初始化、动量、噪声；二阶信息。</p>`),
      mk('正则化与泛化', '防过拟合', [
        { stem: 'L1 正则的作用是：', options: ['产生稀疏解', '平滑权重', '加速训练', '增加特征'], answer: 0, explain: 'L1。' },
        { stem: '早停的作用是：', options: ['防止过拟合', '加速收敛', '提高学习率', '减少数据'], answer: 0, explain: '早停。' },
        { stem: '数据增强的意义：', options: ['扩充有效样本、提升泛化', '装饰', '加速唯一', '减少参数'], answer: 0, explain: '增强。' }
      ], '这一章讲正则。', 'l1l2', 'L1/L2', `<p>稀疏与平滑；权重衰减。</p>`, 'generalize', '泛化', `<p>早停、Dropout、数据增强；交叉验证。</p>`),
      mk('优化实践', '用起来', [
        { stem: '梯度检验的作用是：', options: ['验证反向传播实现正确', '加速训练', '减少参数', '调学习率'], answer: 0, explain: '检验。' },
        { stem: '训练不收敛时应先检查：', options: ['数据、损失与学习率', '换模型', '加数据', '换硬件'], answer: 0, explain: '检查。' },
        { stem: '批大小的影响：', options: ['影响噪声、显存与泛化', '无影响', '只影响速度', '只影响精度'], answer: 0, explain: '批大小。' }
      ], '这一章讲实践。', 'check', '检查', `<p>梯度检验、损失曲线；数据与标签。</p>`, 'tuning', '调参', `<p>学习率、批大小、正则；训练技巧。</p>`)
    ] },
    { name: '深度学习', chapters: [
      mk('神经网络基础', '从感知机到 MLP', [
        { stem: '多层感知机的能力来自：', options: ['非线性激活的堆叠', '线性层堆叠', '更多参数唯一', '更大批量'], answer: 0, explain: '非线性。' },
        { stem: '常见激活函数包括：', options: ['ReLU、sigmoid、tanh', '只有 ReLU', '只有 sigmoid', '只有 tanh'], answer: 0, explain: '多种。' },
        { stem: '万能逼近定理说明：', options: ['足够宽的网络可逼近连续函数', '深的网络必更好', '网络可以拟合任意数据', '无理论保证'], answer: 0, explain: '逼近。' }
      ], '这一章讲基础。', 'mlp', 'MLP', `<p>全连接、激活；前向与参数量。</p>`, 'activation', '激活', `<p>ReLU、sigmoid、tanh；梯度特性。</p>`),
      mk('反向传播', '训练机制', [
        { stem: '反向传播的核心是：', options: ['链式法则计算梯度', '随机搜索', '遗传算法', '聚类'], answer: 0, explain: '链式法则。' },
        { stem: '梯度消失的原因是：', options: ['深层连乘导致梯度趋零', '学习率太小', '批量太大', '数据太少'], answer: 0, explain: '消失。' },
        { stem: '残差连接的作用是：', options: ['缓解梯度消失、便于深层训练', '减少参数', '加速唯一', '增加正则'], answer: 0, explain: '残差。' }
      ], '这一章讲反向。', 'backprop', '反向传播', `<p>计算图、链式法则；梯度累积。</p>`, 'vanishing', '梯度问题', `<p>消失与爆炸；ReLU、归一化、残差。</p>`),
      mk('卷积神经网络', '视觉基础', [
        { stem: '卷积层的作用是：', options: ['提取局部特征并共享参数', '全连接', '降维唯一', '正则化'], answer: 0, explain: '卷积。' },
        { stem: '池化层的作用是：', options: ['降采样、扩大感受野', '增加参数', '提取边缘', '正则化'], answer: 0, explain: '池化。' },
        { stem: '感受野指：', options: ['输出单元对应的输入区域', '卷积核大小', '层数', '通道数'], answer: 0, explain: '感受野。' }
      ], '这一章讲 CNN。', 'conv', '卷积', `<p>核、步长、填充；参数共享与感受野。</p>`, 'arch', '典型结构', `<p>LeNet、ResNet；池化与归一化。</p>`),
      mk('循环神经网络', '序列', [
        { stem: 'RNN 的问题是：', options: ['长依赖梯度消失', '参数太少', '不能处理序列', '只能分类'], answer: 0, explain: '长依赖。' },
        { stem: 'LSTM 的关键结构是：', options: ['门控与细胞状态', '卷积', '注意力', '池化'], answer: 0, explain: 'LSTM。' },
        { stem: '注意力机制的优势：', options: ['直接建模长距离依赖', '参数更少唯一', '训练更快唯一', '无需数据'], answer: 0, explain: '注意力。' }
      ], '这一章讲 RNN。', 'rnn', 'RNN', `<p>循环结构、BPTT；长依赖问题。</p>`, 'lstm', 'LSTM 与注意力', `<p>门控、细胞状态；注意力与 Transformer 初步。</p>`),
      mk('Transformer', '主流架构', [
        { stem: '自注意力的计算是：', options: ['QKᵀ 缩放后 softmax 加权 V', '卷积', '池化', '全连接'], answer: 0, explain: '自注意力。' },
        { stem: '多头注意力的作用是：', options: ['在不同子空间捕捉不同关系', '增加参数唯一', '减少计算', '正则'], answer: 0, explain: '多头。' },
        { stem: '位置编码的必要性：', options: ['自注意力本身无序', '增加参数', '加速', '正则'], answer: 0, explain: '位置。' }
      ], '这一章讲 Transformer。', 'attention', '自注意力', `<p>Q/K/V、缩放点积；计算复杂度。</p>`, 'block', '结构', `<p>多头、残差与归一化；位置编码。</p>`),
      mk('训练技巧', '工程', [
        { stem: '批量归一化与层归一化的区别：', options: ['沿批维度 vs 特征维度', '相同', '都沿批', '都沿特征'], answer: 0, explain: '维度。' },
        { stem: 'Dropout 的作用是：', options: ['正则化、减少过拟合', '加速', '增加参数', '降维'], answer: 0, explain: 'Dropout。' },
        { stem: '混合精度训练的好处：', options: ['省显存、提速', '更准', '无需调参', '减少数据'], answer: 0, explain: '混合精度。' }
      ], '这一章讲训练。', 'norm', '归一化', `<p>BN、LN；训练与推理差异。</p>`, 'trick', '技巧', `<p>Dropout、初始化、混合精度；梯度裁剪。</p>`),
      mk('生成模型', '创造', [
        { stem: '自编码器的目标是：', options: ['重建输入并学习表示', '分类', '聚类', '排序'], answer: 0, explain: '重建。' },
        { stem: 'GAN 由什么组成：', options: ['生成器与判别器', '只有生成器', '只有判别器', '编码器与解码器唯一'], answer: 0, explain: 'GAN。' },
        { stem: '扩散模型的思路：', options: ['学习去噪过程生成样本', '对抗训练', '自回归', '聚类'], answer: 0, explain: '扩散。' }
      ], '这一章讲生成。', 'ae', '自编码器', `<p>编码解码、瓶颈；VAE 与变分下界。</p>`, 'gan', 'GAN 与扩散', `<p>对抗训练、模式崩溃；扩散去噪。</p>`),
      mk('深度学习项目', '落地', [
        { stem: '项目流程的第一步：', options: ['明确任务与数据', '选大模型', '调参', '部署'], answer: 0, explain: '任务。' },
        { stem: '小数据时的策略：', options: ['迁移学习与数据增强', '训练超大模型', '增加层数', '不调参'], answer: 0, explain: '迁移。' },
        { stem: '部署时关注：', options: ['延迟、显存与精度', '只有精度', '只有参数量', '只有框架'], answer: 0, explain: '部署。' }
      ], '这一章讲项目。', 'pipeline', '流程', `<p>数据、模型、训练、评估；实验管理。</p>`, 'deploy', '部署', `<p>量化、蒸馏、推理优化；监控。</p>`)
    ] },
    { name: '计算机视觉', chapters: [
      mk('图像基础', '数据形式', [
        { stem: '彩色图像通常用什么表示：', options: ['三通道矩阵', '单通道', '向量', '图结构'], answer: 0, explain: 'RGB。' },
        { stem: '图像分辨率指：', options: ['像素数量', '文件大小', '位深', '通道数'], answer: 0, explain: '分辨率。' },
        { stem: '归一化的作用是：', options: ['统一数值范围、稳定训练', '增加分辨率', '压缩存储', '加密'], answer: 0, explain: '归一化。' }
      ], '这一章讲基础。', 'pixel', '像素', `<p>RGB/灰度、位深；通道与布局。</p>`, 'preprocess', '预处理', `<p>缩放、裁剪、归一化；数据增强。</p>`),
      mk('图像分类', '识别', [
        { stem: 'ImageNet 是：', options: ['大规模图像分类数据集', '检测数据集', '分割数据集', '生成数据集'], answer: 0, explain: '分类。' },
        { stem: 'top-1 准确率指：', options: ['预测最高分类别正确率', '前五命中率', '召回率', 'F1'], answer: 0, explain: 'top-1。' },
        { stem: '迁移学习的优势：', options: ['小数据也能取得好效果', '无需训练', '参数更少', '速度更快唯一'], answer: 0, explain: '迁移。' }
      ], '这一章讲分类。', 'dataset', '数据集', `<p>ImageNet、CIFAR；划分与标注。</p>`, 'transfer', '迁移', `<p>预训练骨干、微调策略；数据效率。</p>`),
      mk('目标检测', '定位与分类', [
        { stem: '两阶段检测器的代表是：', options: ['Faster R-CNN', 'YOLO', 'SSD', 'RetinaNet'], answer: 0, explain: '两阶段。' },
        { stem: '单阶段检测器的特点：', options: ['速度快、直接回归框', '精度最高唯一', '需候选区域', '只能分类'], answer: 0, explain: '单阶段。' },
        { stem: 'IoU 衡量：', options: ['预测框与真实框的重叠程度', '分类精度', '速度', '参数量'], answer: 0, explain: 'IoU。' }
      ], '这一章讲检测。', 'twostage', '两阶段', `<p>RPN、RoI 池化；精度优先。</p>`, 'onestage', '单阶段', `<p>YOLO/SSD；Anchor 与 NMS；指标 mAP。</p>`),
      mk('图像分割', '像素级', [
        { stem: '语义分割与实例分割的区别：', options: ['是否区分同类不同个体', '分辨率', '数据量', '模型'], answer: 0, explain: '实例。' },
        { stem: 'U-Net 的特点是：', options: ['编码解码 + 跳跃连接', '只有编码', '只有解码', '无卷积'], answer: 0, explain: 'U-Net。' },
        { stem: 'mIoU 是：', options: ['各类 IoU 的平均', '精度', '召回', '损失'], answer: 0, explain: 'mIoU。' }
      ], '这一章讲分割。', 'semantic', '语义分割', `<p>FCN、U-Net；上采样与跳跃连接。</p>`, 'instance', '实例与全景', `<p>Mask R-CNN；指标 mIoU。</p>`),
      mk('人脸与生物特征', '特定任务', [
        { stem: '人脸识别的关键步骤：', options: ['检测、对齐、特征提取与比对', '只有检测', '只有比对', '只有对齐'], answer: 0, explain: '流程。' },
        { stem: '度量学习的作用是：', options: ['学习使同类近异类远的嵌入', '分类', '检测', '生成'], answer: 0, explain: '度量。' },
        { stem: '生物特征的隐私风险：', options: ['不可更改、需严格合规', '无风险', '可随意采集', '只用于娱乐'], answer: 0, explain: '隐私。' }
      ], '这一章讲人脸。', 'pipeline', '流程', `<p>检测、关键点对齐、嵌入与比对；阈值。</p>`, 'metric', '度量学习', `<p>Triplet/ArcFace；隐私与合规。</p>`),
      mk('视频与三维视觉', '时序与空间', [
        { stem: '视频理解的核心挑战：', options: ['时序建模与计算量', '分辨率', '通道数', '存储'], answer: 0, explain: '时序。' },
        { stem: '光流描述：', options: ['像素运动', '深度', '纹理', '颜色'], answer: 0, explain: '光流。' },
        { stem: '三维重建的常用输入：', options: ['多视图图像或深度数据', '只有单图', '只有文本', '只有音频'], answer: 0, explain: '多视图。' }
      ], '这一章讲视频。', 'video', '视频', `<p>帧采样、3D 卷积、时序模型；动作识别。</p>`, '3d', '三维', `<p>多视图几何、深度估计、点云；SLAM 初步。</p>`),
      mk('视觉模型训练', '工程', [
        { stem: '数据增强在视觉中常用：', options: ['翻转、裁剪、颜色抖动', '只有翻转', '只有裁剪', '只有颜色'], answer: 0, explain: '增强。' },
        { stem: '预训练 + 微调的优势：', options: ['减少数据需求、加快收敛', '无需标注', '参数量更小', '一定更准'], answer: 0, explain: '微调。' },
        { stem: '部署优化的常用手段：', options: ['量化、剪枝、蒸馏', '只有量化', '只有剪枝', '只有蒸馏'], answer: 0, explain: '优化。' }
      ], '这一章讲训练。', 'augment', '增强', `<p>几何与颜色变换；CutMix/MixUp。</p>`, 'compress', '压缩部署', `<p>量化、剪枝、蒸馏；TensorRT/ONNX。</p>`),
      mk('视觉项目', '落地', [
        { stem: '视觉项目的第一步：', options: ['定义任务与评价指标', '选模型', '调参', '标注'], answer: 0, explain: '任务。' },
        { stem: '标注质量的影响：', options: ['直接决定上限', '无影响', '只影响速度', '只影响成本'], answer: 0, explain: '标注。' },
        { stem: '上线后监控重点：', options: ['数据漂移与误检率', '只看速度', '只看显存', '只看模型大小'], answer: 0, explain: '监控。' }
      ], '这一章讲项目。', 'framing', '任务', `<p>分类/检测/分割；指标与场景约束。</p>`, 'data', '数据与上线', `<p>标注规范、难例挖掘；监控与迭代。</p>`)
    ] },
    { name: '自然语言处理', chapters: [
      mk('文本基础', '表示', [
        { stem: '分词的作用是：', options: ['把文本切分为词单元', '翻译', '分类', '生成'], answer: 0, explain: '分词。' },
        { stem: '词袋模型的缺点是：', options: ['丢失词序与语义', '维度低', '无法分类', '计算慢'], answer: 0, explain: '词袋。' },
        { stem: '子词（BPE）的优势：', options: ['缓解未登录词问题', '更短', '更快', '更准唯一'], answer: 0, explain: 'BPE。' }
      ], '这一章讲基础。', 'tokenize', '分词', `<p>中文分词、BPE/WordPiece；词表。</p>`, 'represent', '表示', `<p>词袋、TF-IDF、词向量；子词建模。</p>`),
      mk('词向量', '分布式表示', [
        { stem: 'word2vec 的两种模型是：', options: ['CBOW 与 Skip-gram', '只有 CBOW', '只有 Skip-gram', 'BERT'], answer: 0, explain: '两种。' },
        { stem: '词向量的相似度常用：', options: ['余弦相似度', '欧氏距离唯一', '曼哈顿距离', '编辑距离'], answer: 0, explain: '余弦。' },
        { stem: '静态词向量的局限：', options: ['无法区分多义词', '维度太低', '不能训练', '无语义'], answer: 0, explain: '多义。' }
      ], '这一章讲词向量。', 'word2vec', 'word2vec', `<p>CBOW、Skip-gram；负采样。</p>`, 'contextual', '上下文表示', `<p>ELMo/BERT；多义词处理。</p>`),
      mk('语言模型', '预测下一个词', [
        { stem: 'n-gram 语言模型的假设是：', options: ['马尔可夫性（只看前 n−1 词）', '全局依赖', '无假设', '只看后文'], answer: 0, explain: '马尔可夫。' },
        { stem: '困惑度（perplexity）衡量：', options: ['语言模型预测能力', '生成速度', '词表大小', '句子长度'], answer: 0, explain: 'PPL。' },
        { stem: '神经语言模型的优势：', options: ['分布式表示与长依赖建模', '参数少', '训练快', '无需数据'], answer: 0, explain: '优势。' }
      ], '这一章讲 LM。', 'ngram', 'n-gram', `<p>马尔可夫假设、平滑；困惑度。</p>`, 'neural', '神经 LM', `<p>RNN/Transformer LM；预训练目标。</p>`),
      mk('序列标注与分类', '任务', [
        { stem: '命名实体识别属于：', options: ['序列标注任务', '生成任务', '排序任务', '聚类任务'], answer: 0, explain: '序列标注。' },
        { stem: 'BIO 标注中 B 表示：', options: ['实体开始', '实体中间', '实体外部', '结束'], answer: 0, explain: 'B 开始。' },
        { stem: '文本分类的常用评估：', options: ['准确率、F1', 'BLEU', 'ROUGE', 'PPL'], answer: 0, explain: '分类指标。' }
      ], '这一章讲任务。', 'tagging', '序列标注', `<p>NER、POS；BIO 标注与 CRF。</p>`, 'classification', '分类', `<p>情感分析、主题分类；指标与不平衡。</p>`),
      mk('预训练模型', '范式', [
        { stem: 'BERT 的预训练任务是：', options: ['掩码语言模型与下一句预测', '自回归生成', '翻译', '分类'], answer: 0, explain: 'BERT。' },
        { stem: 'GPT 系列采用：', options: ['自回归语言建模', '掩码建模', '对比学习', '聚类'], answer: 0, explain: '自回归。' },
        { stem: '微调与提示学习的区别：', options: ['更新参数 vs 构造提示', '相同', '都只改提示', '都只改参数'], answer: 0, explain: '两种范式。' }
      ], '这一章讲预训练。', 'bert', 'BERT', `<p>MLM、NSP；编码器结构；微调。</p>`, 'gpt', 'GPT 与提示', `<p>自回归、Decoder-only；提示与少样本。</p>`),
      mk('文本生成', '产出', [
        { stem: '解码策略包括：', options: ['贪心、束搜索、采样', '只有贪心', '只有束搜索', '只有采样'], answer: 0, explain: '多种。' },
        { stem: '温度参数的作用是：', options: ['调节采样随机性', '调节长度', '调节速度', '调节显存'], answer: 0, explain: '温度。' },
        { stem: '生成评估的常用指标：', options: ['BLEU、ROUGE', '准确率唯一', 'F1 唯一', 'AUC'], answer: 0, explain: '生成指标。' }
      ], '这一章讲生成。', 'decode', '解码', `<p>贪心、束搜索、top-k/top-p；温度。</p>`, 'metric', '评估', `<p>BLEU、ROUGE、BERTScore；人工评估。</p>`),
      mk('信息抽取与问答', '应用', [
        { stem: '关系抽取的目标是：', options: ['识别实体间语义关系', '分类文本', '生成摘要', '翻译'], answer: 0, explain: '关系。' },
        { stem: '检索增强生成（RAG）的核心：', options: ['检索外部知识再生成', '只用大模型', '只用检索', '只用规则'], answer: 0, explain: 'RAG。' },
        { stem: '开放域问答的难点：', options: ['检索质量与答案可信度', '只有速度', '只有成本', '只有界面'], answer: 0, explain: '难点。' }
      ], '这一章讲应用。', 'extraction', '抽取', `<p>实体、关系、事件抽取；标注方案。</p>`, 'qa', '问答', `<p>检索+阅读；RAG 与幻觉控制。</p>`),
      mk('NLP 项目', '落地', [
        { stem: 'NLP 项目的第一步：', options: ['明确任务与数据', '选大模型', '调参', '部署'], answer: 0, explain: '任务。' },
        { stem: '数据质量的影响：', options: ['决定性', '无影响', '只影响速度', '只影响成本'], answer: 0, explain: '数据。' },
        { stem: '上线后应关注：', options: ['效果、延迟与安全', '只有效果', '只有延迟', '只有成本'], answer: 0, explain: '监控。' }
      ], '这一章讲项目。', 'framing', '任务', `<p>分类/抽取/生成；指标与基线。</p>`, 'deploy', '上线', `<p>推理优化、提示工程；安全与合规。</p>`)
    ] },

    /* ---- 大四 ---- */
    { name: '毕业设计', chapters: [
      mk('选题与开题', '做什么', [
        { stem: 'AI 毕设的关键是：', options: ['问题明确、数据可得、可评价', '题目宏大', '追热点', '导师偏好'], answer: 0, explain: '可行。' },
        { stem: '开题报告应包含：', options: ['背景、目标、方案、计划', '只有背景', '只有计划', '只有方案'], answer: 0, explain: '要素。' },
        { stem: '基线的重要性：', options: ['提供比较基准', '装饰', '替代最终方案', '无作用'], answer: 0, explain: '基线。' }
      ], '这一章讲开题。', 'topic', '选题', `<p>任务定义、数据来源、评价指标；可行性。</p>`, 'proposal', '开题', `<p>背景、目标、方法、进度；风险。</p>`),
      mk('实验与调优', '做实验', [
        { stem: '对照实验的作用是：', options: ['隔离变量、验证效果', '装饰', '凑数据', '无作用'], answer: 0, explain: '对照。' },
        { stem: '消融实验的目的是：', options: ['验证各模块贡献', '提高精度', '加速', '减少参数'], answer: 0, explain: '消融。' },
        { stem: '实验记录应：', options: ['记录配置、随机种子与结果', '只记最好结果', '不记录', '随意'], answer: 0, explain: '记录。' }
      ], '这一章讲实验。', 'design', '设计', `<p>数据划分、基线、对照与消融。</p>`, 'record', '记录', `<p>超参数、种子、日志；可复现。</p>`),
      mk('论文与系统', '交付', [
        { stem: 'AI 论文结构：', options: ['引言—相关工作—方法—实验—结论', '总—分—总', '背景—致谢', '问答'], answer: 0, explain: '结构。' },
        { stem: '图表规范应：', options: ['标注坐标、单位与误差', '只有图', '只有表', '无要求'], answer: 0, explain: '规范。' },
        { stem: '系统演示的价值：', options: ['展示可用性与工程完成度', '装饰', '替代论文', '无价值'], answer: 0, explain: '演示。' }
      ], '这一章讲交付。', 'thesis', '论文', `<p>方法描述、实验设置、结果分析；引用规范。</p>`, 'demo', '系统', `<p>演示、接口与文档；可复现。</p>`),
      mk('答辩', '讲清楚', [
        { stem: '答辩陈述要点：', options: ['问题、方法、结果与局限', '致谢', '篇幅', '格式'], answer: 0, explain: '要点。' },
        { stem: '被质疑时应：', options: ['承认局限并说明理由', '争辩', '回避', '改口'], answer: 0, explain: '诚恳。' },
        { stem: '答辩前最该准备：', options: ['熟悉实验与数据', '背稿', '模板', '服装'], answer: 0, explain: '依据。' }
      ], '这一章讲答辩。', 'talk', '陈述', `<p>10 分钟：问题—方法—结果—局限。</p>`, 'qa', '问答', `<p>准备方法与实验问题；不会就说思路。</p>`)
    ] },
    { name: '专业实习', chapters: [
      mk('岗位与角色', '去哪里', [
        { stem: 'AI 实习的常见岗位不包括：', options: ['算法工程师', '数据工程', '算法产品', '外科医生'], answer: 3, explain: '无关。' },
        { stem: '选择实习最该看：', options: ['能否参与真实建模项目', '名气', '工资', '通勤'], answer: 0, explain: '实战。' },
        { stem: '算法岗的日常包括：', options: ['数据处理、建模、评估与上线', '只写论文', '只开会', '只标注唯一'], answer: 0, explain: '全流程。' }
      ], '这一章讲岗位。', 'roles', '岗位', `<p>算法、数据、平台、产品；职责与技能。</p>`, 'onboard', '上手', `<p>熟悉数据与流程、跑通基线；记录。</p>`),
      mk('工程实践', '落地', [
        { stem: '模型上线的关键：', options: ['性能、稳定性与可维护性', '只有精度', '只有参数量', '只有框架'], answer: 0, explain: '落地。' },
        { stem: '特征/数据管道的重要性：', options: ['决定上限与稳定性', '无影响', '只影响速度', '只影响成本'], answer: 0, explain: '管道。' },
        { stem: 'A/B 测试的作用是：', options: ['比较策略真实效果', '提高精度', '减少数据', '加速训练'], answer: 0, explain: 'A/B。' }
      ], '这一章讲实践。', 'pipeline', '管道', `<p>数据采集、特征、训练、推理；监控。</p>`, 'ab', '评估与上线', `<p>离线指标、在线 A/B；灰度与回滚。</p>`),
      mk('协作与沟通', '一起做', [
        { stem: '与产品沟通的关键：', options: ['理解业务目标与约束', '只讲模型', '只讲指标', '不沟通'], answer: 0, explain: '业务。' },
        { stem: '技术方案的表达应：', options: ['结论先行、论据清晰', '堆术语', '流水账', '只讲难点'], answer: 0, explain: '表达。' },
        { stem: '跨团队协作的要点：', options: ['接口清晰、责任明确', '各做各的', '只发邮件', '只开会'], answer: 0, explain: '协作。' }
      ], '这一章讲协作。', 'product', '业务', `<p>目标、指标、约束；价值沟通。</p>`, 'team', '团队', `<p>接口、责任与节奏；文档与复盘。</p>`),
      mk('实习复盘', '留下什么', [
        { stem: '实习应留下的成果：', options: ['项目模型、指标与复盘', '工牌', '照片', '评语'], answer: 0, explain: '成果。' },
        { stem: '实习日志推荐写法：', options: ['问题—做法—结果—反思', '流水账', '只写结论', '只写感受'], answer: 0, explain: '结构化。' },
        { stem: '面试讲实习最佳结构：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
      ], '这一章讲收尾。', 'output', '成果', `<p>模型与指标提升、工程贡献；可量化。</p>`, 'review', '复盘', `<p>每周五行；讲清贡献与收获。</p>`)
    ] },
    { name: '考研与求职', chapters: [
      mk('考研方向', '往哪考', [
        { stem: 'AI 考研的常见方向：', options: ['计算机、人工智能、控制、电子信息专硕', '只有计算机', '只有人工智能', '只有控制'], answer: 0, explain: '多方向。' },
        { stem: '专业课常见组合：', options: ['数学一 + 数据结构/机器学习', '只有数学', '只有英语', '只有政治'], answer: 0, explain: '组合。' },
        { stem: '择校最应考虑：', options: ['方向、导师与算力资源', '城市', '学费', '宿舍'], answer: 0, explain: '资源。' }
      ], '这一章讲方向。', 'paths', '方向', `<p>计算机、人工智能、控制、电子信息；学硕与专硕。</p>`, 'subjects', '科目', `<p>政治、英语、数学一、专业课（数据结构/AI 基础）。</p>`),
      mk('专业课复习', '备考', [
        { stem: '数据结构复习主线：', options: ['线性—树—图—查找排序', '只背定义', '只做真题', '只看书'], answer: 0, explain: '主线。' },
        { stem: '机器学习复习重点：', options: ['模型、损失、优化与评估', '只有模型', '只有评估', '只背公式'], answer: 0, explain: '四块。' },
        { stem: '数学复习的关键：', options: ['基础计算与题型熟练', '只看难题', '只背结论', '只做选择'], answer: 0, explain: '基础。' }
      ], '这一章讲复习。', 'ds', '数据结构', `<p>线性结构、树、图、排序查找；复杂度。</p>`, 'ml', '机器学习', `<p>模型与损失、优化、评估；推导与实现。</p>`),
      mk('求职方向', '就业', [
        { stem: 'AI 毕业生的常见去向不包括：', options: ['算法工程师', '数据科学', 'AI 产品', '外科医生'], answer: 3, explain: '专业限制。' },
        { stem: '算法岗看重：', options: ['项目、代码与论文/竞赛', '只有学历', '只有证书', '只有英语'], answer: 0, explain: '综合。' },
        { stem: '求职最加分的材料：', options: ['项目与开源/竞赛成果', '证书数量', '成绩单', '社团'], answer: 0, explain: '成果。' }
      ], '这一章讲就业。', 'paths', '路径', `<p>算法、数据、平台、产品、科研；读博。</p>`, 'skills', '能力', `<p>Python/框架、建模与工程；论文与项目。</p>`),
      mk('面试', '展示能力', [
        { stem: '算法面试常考：', options: ['手写代码 + 机器学习基础 + 项目', '只有编程', '只有数学', '只有英语'], answer: 0, explain: '综合。' },
        { stem: '讲项目最佳结构：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' },
        { stem: '被问到不会的问题应：', options: ['说明思路并诚实承认', '编造', '沉默', '转移话题'], answer: 0, explain: '诚实。' }
      ], '这一章讲面试。', 'coding', '编码', `<p>算法题、复杂度；边写边讲。</p>`, 'project', '项目', `<p>方案、指标、难点；STAR 与反问。</p>`)
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
