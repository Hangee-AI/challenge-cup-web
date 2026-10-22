/* ==========================================================
   statistics-courses.js · 统计学：12 门课（主干 8 / 出口 4）= 84 关
   ========================================================== */

(function () {
  var MAJOR = 'science-统计学';
  var TITLES = stageTitlesOf('science');

  var COURSES = [
    { name: '数学分析（一）', chapters: [
      { title: '极限', brief: '分析的起点。',
        q: [
          { stem: '数列极限的定义要求：', options: ['对任意 ε>0 存在 N', '存在 ε', 'n 足够大', '任意 N'], answer: 0, explain: '定义。' },
          { stem: '单调有界数列：', options: ['必收敛', '必发散', '可能收敛', '无极限'], answer: 0, explain: '准则。' },
          { stem: '夹逼定理用于：', options: ['求极限', '求导', '求积分', '判敛唯一'], answer: 0, explain: '夹逼。' }
        ],
        doc: { lead: '这一章讲极限。', sections: [
          { id: 'sequence', title: '数列', html: `<p>ε-N 定义、性质、夹逼、单调有界。</p>` },
          { id: 'function', title: '函数', html: `<p>ε-δ 定义、左右极限；两个重要极限。</p>` }
        ], refs: [] } },
      { title: '连续', brief: '极限等于函数值。',
        q: [
          { stem: '闭区间连续函数性质不包括：', options: ['有界性', '最值定理', '介值定理', '可导性'], answer: 3, explain: '连续不保证可导。' },
          { stem: '间断点分为：', options: ['可去、跳跃、无穷、振荡', '只有可去', '只有跳跃', '只有无穷'], answer: 0, explain: '四类。' },
          { stem: '一致连续与连续的区别是：', options: ['δ 是否与点无关', '是否连续', '是否有界', '是否可导'], answer: 0, explain: '一致。' }
        ],
        doc: { lead: '这一章讲连续。', sections: [
          { id: 'continuity', title: '连续', html: `<p>定义、间断点分类；局部性质。</p>` },
          { id: 'uniform', title: '一致连续', html: `<p>Cantor 定理；闭区间性质。</p>` }
        ], refs: [] } },
      { title: '导数与中值定理', brief: '变化率。',
        q: [
          { stem: '可导与连续的关系是：', options: ['可导必连续', '等价', '连续必可导', '无关'], answer: 0, explain: '蕴含。' },
          { stem: '拉格朗日中值定理的条件是：', options: ['闭区间连续、开区间可导', '只需连续', '只需可导', '无要求'], answer: 0, explain: '条件。' },
          { stem: '洛必达法则适用于：', options: ['0/0 或 ∞/∞ 型', '所有极限', '只有 0/0', '只有 ∞/∞'], answer: 0, explain: '未定式。' }
        ],
        doc: { lead: '这一章讲导数。', sections: [
          { id: 'derivative', title: '导数', html: `<p>定义、求导法则；微分与近似。</p>` },
          { id: 'mvt', title: '中值定理', html: `<p>罗尔、拉格朗日、柯西；泰勒公式。</p>` }
        ], refs: [] } },
      { title: '积分', brief: '累积。',
        q: [
          { stem: '牛顿-莱布尼茨公式是：', options: ['∫ₐᵇf = F(b) − F(a)', 'F(a) − F(b)', 'f(b) − f(a)', '∫f′'], answer: 0, explain: '公式。' },
          { stem: '分部积分公式是：', options: ['∫u dv = uv − ∫v du', 'uv + ∫v du', '∫u∫v', 'u′v′'], answer: 0, explain: '分部。' },
          { stem: '反常积分收敛判别常用：', options: ['比较判别法', '夹逼', '中值定理', '洛必达'], answer: 0, explain: '比较。' }
        ],
        doc: { lead: '这一章讲积分。', sections: [
          { id: 'indefinite', title: '不定积分', html: `<p>换元、分部、部分分式。</p>` },
          { id: 'definite', title: '定积分', html: `<p>定义、性质；反常积分与收敛判别。</p>` }
        ], refs: [] } },
      { title: '级数', brief: '无穷相加。',
        q: [
          { stem: 'p 级数收敛的条件是：', options: ['p > 1', 'p < 1', 'p = 1', '任意'], answer: 0, explain: 'p>1。' },
          { stem: '绝对收敛与条件收敛的关系是：', options: ['绝对收敛 ⇒ 收敛', '等价', '条件收敛更强', '无关'], answer: 0, explain: '蕴含。' },
          { stem: '幂级数的收敛半径可用：', options: ['比值法或根值法', '夹逼', '中值', '洛必达'], answer: 0, explain: '半径。' }
        ],
        doc: { lead: '这一章讲级数。', sections: [
          { id: 'series', title: '数项级数', html: `<p>正项判别、交错级数、绝对收敛。</p>` },
          { id: 'power', title: '幂级数', html: `<p>收敛半径、逐项求导积分；泰勒级数。</p>` }
        ], refs: [] } },
      { title: '多元函数', brief: '多维。',
        q: [
          { stem: '偏导数存在与连续的关系是：', options: ['不保证连续', '保证连续', '等价', '无关'], answer: 0, explain: '不保证。' },
          { stem: '全微分的充分条件是：', options: ['偏导连续', '偏导存在', '连续', '有界'], answer: 0, explain: '充分。' },
          { stem: '条件极值用：', options: ['拉格朗日乘数法', '洛必达', '泰勒', '积分'], answer: 0, explain: '乘数法。' }
        ],
        doc: { lead: '这一章讲多元。', sections: [
          { id: 'partial', title: '偏导与全微分', html: `<p>链式法则、隐函数；梯度。</p>` },
          { id: 'extremum', title: '极值', html: `<p>无条件与条件极值；黑塞矩阵。</p>` }
        ], refs: [] } },
      { title: '重积分与曲线积分', brief: '多维累积。',
        q: [
          { stem: '极坐标下的面积元素是：', options: ['r dr dθ', 'dr dθ', 'r² dr dθ', 'dθ'], answer: 0, explain: '雅可比。' },
          { stem: '格林公式把曲线积分与：', options: ['二重积分联系', '三重积分', '级数', '导数'], answer: 0, explain: '格林。' },
          { stem: '二重积分可计算：', options: ['面积、体积、质量', '只有面积', '只有体积', '导数'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲重积分。', sections: [
          { id: 'double', title: '重积分', html: `<p>累次积分、极坐标；三重积分与柱/球坐标。</p>` },
          { id: 'line', title: '曲线积分', html: `<p>第一/二类；格林公式与路径无关。</p>` }
        ], refs: [] } },
      { title: '应用与训练', brief: '用起来。',
        q: [
          { stem: '分析的核心方法是：', options: ['ε 语言与估计', '套公式', '记忆', '速算'], answer: 0, explain: '估计。' },
          { stem: '证明题的关键是：', options: ['构造与估计', '猜', '背', '跳过'], answer: 0, explain: '构造。' },
          { stem: '提高能力的有效方式是：', options: ['大量练习并总结', '只看答案', '只听课', '只背定理'], answer: 0, explain: '练习。' }
        ],
        doc: { lead: '这一章讲训练。', sections: [
          { id: 'method', title: '方法', html: `<p>ε-δ 证明、估计、反例；一题多解。</p>` },
          { id: 'habit', title: '习惯', html: `<p>写清条件、检验特例、错题归因。</p>` }
        ], refs: [] } }
    ] },
    { name: '高等代数', chapters: [
      { title: '行列式与矩阵', brief: '线性工具。',
        q: [
          { stem: '交换两行，行列式：', options: ['变号', '不变', '乘 2', '变 0'], answer: 0, explain: '反对称。' },
          { stem: '矩阵乘法 AB 有意义要求：', options: ['A 列数等于 B 行数', '行数相等', '都是方阵', '元素非零'], answer: 0, explain: '维度。' },
          { stem: '(AB)^T 等于：', options: ['B^T A^T', 'A^T B^T', 'AB', 'A^T + B^T'], answer: 0, explain: '反序。' }
        ],
        doc: { lead: '这一章讲矩阵。', sections: [
          { id: 'determinant', title: '行列式', html: `<p>定义、性质、展开；范德蒙德。</p>` },
          { id: 'matrix', title: '矩阵', html: `<p>运算、逆、秩；分块与初等变换。</p>` }
        ], refs: [] } },
      { title: '线性方程组', brief: '解的结构。',
        q: [
          { stem: 'Ax=b 有解的充要条件是：', options: ['r(A) = r(A|b)', 'r(A) = n', 'det ≠ 0', 'b = 0'], answer: 0, explain: '秩。' },
          { stem: '齐次方程组有非零解的条件是：', options: ['r(A) < n', 'r(A) = n', 'det ≠ 0', 'b ≠ 0'], answer: 0, explain: '秩亏。' },
          { stem: '基础解系含向量个数为：', options: ['n − r', 'r', 'n', '1'], answer: 0, explain: '自由变量。' }
        ],
        doc: { lead: '这一章讲方程。', sections: [
          { id: 'gauss', title: '消元', html: `<p>高斯消元、阶梯形；矩阵形式。</p>` },
          { id: 'structure', title: '结构', html: `<p>特解 + 齐次通解；基础解系。</p>` }
        ], refs: [] } },
      { title: '向量空间', brief: '线性结构。',
        q: [
          { stem: '线性无关的条件是：', options: ['只有零组合等于零', '存在非零组合', '个数大于维数', '含零向量'], answer: 0, explain: '无关。' },
          { stem: '基与维数的关系是：', options: ['基中向量数等于维数', '无关', '基越大越好', '维数固定'], answer: 0, explain: '定义。' },
          { stem: '子空间的交与和：', options: ['仍是子空间', '不是', '可能是集合', '无意义'], answer: 0, explain: '封闭。' }
        ],
        doc: { lead: '这一章讲空间。', sections: [
          { id: 'basis', title: '基', html: `<p>线性相关、极大无关组、坐标；维数公式。</p>` },
          { id: 'subspace', title: '子空间', html: `<p>交、和、直和；维数公式。</p>` }
        ], refs: [] } },
      { title: '线性变换', brief: '空间到空间。',
        q: [
          { stem: '线性变换由什么唯一确定？', options: ['基的像', '定义域', '值域', '矩阵大小'], answer: 0, explain: '基像。' },
          { stem: '不同基下的矩阵是：', options: ['相似的', '相同的', '合同的', '无关的'], answer: 0, explain: '相似。' },
          { stem: '秩-零化度定理是：', options: ['dim ker + dim im = dim V', '相等', '无关', '和为 0'], answer: 0, explain: '定理。' }
        ],
        doc: { lead: '这一章讲变换。', sections: [
          { id: 'matrix', title: '矩阵表示', html: `<p>过渡矩阵、相似变换。</p>` },
          { id: 'kernel', title: '核与像', html: `<p>秩-零化度；单射、满射、可逆。</p>` }
        ], refs: [] } },
      { title: '特征值与对角化', brief: '不变量。',
        q: [
          { stem: '特征值满足：', options: ['det(A − λI) = 0', 'det A = 0', 'Av = 0', 'A = λI'], answer: 0, explain: '方程。' },
          { stem: '可对角化的充要条件是：', options: ['有 n 个线性无关特征向量', '有 n 个特征值', 'det ≠ 0', '对称'], answer: 0, explain: '充要。' },
          { stem: '实对称矩阵可以：', options: ['正交对角化', '不可对角化', '复对角化唯一', '相似于零'], answer: 0, explain: '谱定理。' }
        ],
        doc: { lead: '这一章讲特征值。', sections: [
          { id: 'eigen', title: '特征值', html: `<p>特征多项式、迹与行列式；重数。</p>` },
          { id: 'diagonal', title: '对角化', html: `<p>条件；正交对角化；若尔当形。</p>` }
        ], refs: [] } },
      { title: '二次型', brief: '二次齐次。',
        q: [
          { stem: '二次型的矩阵通常取：', options: ['对称矩阵', '对角矩阵', '三角矩阵', '任意'], answer: 0, explain: '对称。' },
          { stem: '正定的判据是：', options: ['顺序主子式全正', 'det > 0', '迹 > 0', '秩满'], answer: 0, explain: 'Sylvester。' },
          { stem: '正交变换后的系数是：', options: ['特征值', '奇异值', '对角元', '秩'], answer: 0, explain: '特征值。' }
        ],
        doc: { lead: '这一章讲二次型。', sections: [
          { id: 'matrix', title: '矩阵表示', html: `<p>交叉项系数取半；合同变换与惯性指数。</p>` },
          { id: 'positive', title: '正定', html: `<p>判据与应用；半正定与负定。</p>` }
        ], refs: [] } },
      { title: '内积空间', brief: '几何结构。',
        q: [
          { stem: '施密特正交化把：', options: ['无关组化为正交组', '任意组正交化', '矩阵对角化', '求逆'], answer: 0, explain: '正交化。' },
          { stem: '正交变换保持：', options: ['内积与长度', '坐标', '原点唯一', '方向'], answer: 0, explain: '保距。' },
          { stem: '最小二乘解满足：', options: ['正规方程 AᵀAx = Aᵀb', 'Ax = b', 'Aᵀx = b', 'Ax = 0'], answer: 0, explain: '法方程。' }
        ],
        doc: { lead: '这一章讲内积。', sections: [
          { id: 'orthogonal', title: '正交', html: `<p>内积、范数、Gram-Schmidt；正交补。</p>` },
          { id: 'leastsquares', title: '最小二乘', html: `<p>投影、正规方程；统计中的应用。</p>` }
        ], refs: [] } },
      { title: '应用与计算', brief: '代数之用。',
        q: [
          { stem: '矩阵分解包括：', options: ['LU、QR、SVD', '只有 LU', '只有 QR', '只有 SVD'], answer: 0, explain: '多种。' },
          { stem: 'SVD 在统计中的应用是：', options: ['主成分与降维', '求逆唯一', '解方程唯一', '无应用'], answer: 0, explain: 'PCA。' },
          { stem: '数值稳定性要求：', options: ['误差不放大', '精度高唯一', '速度快', '代码短'], answer: 0, explain: '稳定。' }
        ],
        doc: { lead: '这一章讲应用。', sections: [
          { id: 'decomposition', title: '分解', html: `<p>LU、QR、SVD；数值稳定性与条件数。</p>` },
          { id: 'statistics', title: '统计', html: `<p>协方差矩阵、PCA、回归的矩阵形式。</p>` }
        ], refs: [] } }
    ] },
    { name: '概率论', chapters: [
      { title: '概率空间', brief: '公理化。',
        q: [
          { stem: '概率的三条公理是：', options: ['非负、规范、可列可加', '非负、有界、可加', '对称、规范', '相等、非负'], answer: 0, explain: '公理。' },
          { stem: '条件概率的定义是：', options: ['P(AB)/P(B)', 'P(A)P(B)', 'P(A)+P(B)', 'P(A)−P(B)'], answer: 0, explain: '定义。' },
          { stem: '独立的条件是：', options: ['P(AB) = P(A)P(B)', '互不相交', '和为 1', '包含'], answer: 0, explain: '独立。' }
        ],
        doc: { lead: '这一章讲公理。', sections: [
          { id: 'space', title: '空间', html: `<p>样本空间、事件域、概率测度；性质。</p>` },
          { id: 'conditional', title: '条件', html: `<p>乘法、全概率、贝叶斯；独立性。</p>` }
        ], refs: [] } },
      { title: '随机变量', brief: '数字化。',
        q: [
          { stem: '分布函数的性质是：', options: ['单调不减、右连续、极限 0/1', '连续可导', '对称', '有界'], answer: 0, explain: '三条。' },
          { stem: '离散与连续的区别是：', options: ['取值是否可列', '是否有分布', '是否有期望', '是否独立'], answer: 0, explain: '取值。' },
          { stem: '密度函数满足：', options: ['非负且积分为 1', '单调', '连续', '有界'], answer: 0, explain: '密度。' }
        ],
        doc: { lead: '这一章讲变量。', sections: [
          { id: 'cdf', title: '分布函数', html: `<p>定义与性质；分布律与密度。</p>` },
          { id: 'transform', title: '变换', html: `<p>随机变量函数的分布；雅可比。</p>` }
        ], refs: [] } },
      { title: '常见分布', brief: '工具箱。',
        q: [
          { stem: '二项分布的期望是：', options: ['np', 'p', 'n/p', 'np(1−p)'], answer: 0, explain: 'np。' },
          { stem: '正态分布的参数是：', options: ['μ 与 σ²', '只有 μ', '只有 σ', 'n 与 p'], answer: 0, explain: '两参数。' },
          { stem: '泊松分布常用于：', options: ['单位时间事件数', '连续测量', '比例', '分类'], answer: 0, explain: '计数。' }
        ],
        doc: { lead: '这一章讲分布。', sections: [
          { id: 'discrete', title: '离散', html: `<p>0-1、二项、泊松、几何。</p>` },
          { id: 'continuous', title: '连续', html: `<p>均匀、指数、正态、伽马、卡方、t、F。</p>` }
        ], refs: [] } },
      { title: '数字特征', brief: '概括。',
        q: [
          { stem: '方差的性质是：', options: ['Var(aX+b) = a²Var(X)', 'aVar(X)', 'a²+b', 'Var(X)'], answer: 0, explain: '性质。' },
          { stem: '协方差衡量：', options: ['线性相关', '独立性', '方差', '均值'], answer: 0, explain: '相关。' },
          { stem: '相关系数的范围是：', options: ['[−1,1]', '[0,1]', '全体实数', '[−∞,∞]'], answer: 0, explain: '范围。' }
        ],
        doc: { lead: '这一章讲特征。', sections: [
          { id: 'expectation', title: '期望', html: `<p>定义、性质；函数的期望。</p>` },
          { id: 'variance', title: '方差与协方差', html: `<p>方差、协方差、相关系数；不相关与独立。</p>` }
        ], refs: [] } },
      { title: '多维随机变量', brief: '联合分布。',
        q: [
          { stem: '边缘分布由什么得到？', options: ['联合分布求和或积分', '条件分布', '期望', '方差'], answer: 0, explain: '边缘。' },
          { stem: '独立的条件是：', options: ['联合等于边缘乘积', '不相关', '协方差为零', '同分布'], answer: 0, explain: '乘积。' },
          { stem: '二维正态的独立与不相关：', options: ['等价', '不等价', '无关', '矛盾'], answer: 0, explain: '等价。' }
        ],
        doc: { lead: '这一章讲多维。', sections: [
          { id: 'joint', title: '联合', html: `<p>联合、边缘、条件；独立性。</p>` },
          { id: 'transform', title: '变换', html: `<p>二维变换；和的分布与卷积。</p>` }
        ], refs: [] } },
      { title: '极限定理', brief: '大样本。',
        q: [
          { stem: '大数定律说明：', options: ['样本均值依概率收敛到期望', '分布收敛', '方差为零', '独立'], answer: 0, explain: '大数。' },
          { stem: '中心极限定理说明：', options: ['标准化和依分布收敛到正态', '均值等于期望', '方差不变', '独立'], answer: 0, explain: 'CLT。' },
          { stem: '切比雪夫不等式用于：', options: ['估计概率上界', '精确计算', '求期望', '判独立'], answer: 0, explain: '不等式。' }
        ],
        doc: { lead: '这一章讲极限。', sections: [
          { id: 'lln', title: '大数定律', html: `<p>切比雪夫、辛钦；依概率收敛。</p>` },
          { id: 'clt', title: '中心极限定理', html: `<p>林德伯格-列维；应用与近似。</p>` }
        ], refs: [] } },
      { title: '条件期望', brief: '信息与预测。',
        q: [
          { stem: '条件期望 E(Y|X) 是：', options: ['关于 X 的函数', '常数', '随机变量唯一', '方差'], answer: 0, explain: '函数。' },
          { stem: '全期望公式是：', options: ['E(Y) = E[E(Y|X)]', 'E(Y) = E(X)', 'E(Y|X) = 0', '无关'], answer: 0, explain: '全期望。' },
          { stem: '条件方差分解说明：', options: ['总方差 = 条件方差期望 + 条件期望方差', '方差恒定', '无关系', '等于零'], answer: 0, explain: '分解。' }
        ],
        doc: { lead: '这一章讲条件。', sections: [
          { id: 'conditional', title: '条件期望', html: `<p>定义、性质；全期望与全方差公式。</p>` },
          { id: 'application', title: '应用', html: `<p>预测、回归、鞅；统计推断基础。</p>` }
        ], refs: [] } },
      { title: '应用与建模', brief: '概率之用。',
        q: [
          { stem: '贝叶斯公式的应用是：', options: ['由结果推断原因', '求期望', '判独立', '求方差'], answer: 0, explain: '后验。' },
          { stem: '蒙特卡洛方法的核心是：', options: ['随机抽样估计', '精确积分', '解析解', '查表'], answer: 0, explain: '抽样。' },
          { stem: '概率建模的关键是：', options: ['选择合适的分布与假设', '算得快', '公式多', '记忆'], answer: 0, explain: '建模。' }
        ],
        doc: { lead: '这一章讲应用。', sections: [
          { id: 'bayes', title: '贝叶斯', html: `<p>先验与后验；分类与诊断。</p>` },
          { id: 'simulation', title: '模拟', html: `<p>随机数、蒙特卡洛；估计与误差。</p>` }
        ], refs: [] } }
    ] },
    { name: '数理统计', chapters: [
      { title: '抽样分布', brief: '统计量的分布。',
        q: [
          { stem: '样本均值的分布（正态总体）是：', options: ['正态', 't 分布', '卡方', 'F'], answer: 0, explain: '正态。' },
          { stem: 't 分布适用于：', options: ['小样本、方差未知', '大样本、方差已知', '只有比例', '非参数'], answer: 0, explain: 't。' },
          { stem: '卡方分布常用于：', options: ['方差与拟合检验', '均值检验', '相关', '回归'], answer: 0, explain: '卡方。' }
        ],
        doc: { lead: '这一章讲抽样。', sections: [
          { id: 'distributions', title: '三大分布', html: `<p>卡方、t、F 的构造与性质。</p>` },
          { id: 'statistics', title: '统计量', html: `<p>样本均值、方差；充分统计量。</p>` }
        ], refs: [] } },
      { title: '点估计', brief: '估参数。',
        q: [
          { stem: '矩估计与极大似然估计的区别是：', options: ['用矩 vs 用似然函数', '精度', '样本量', '分布'], answer: 0, explain: '方法。' },
          { stem: '无偏估计指：', options: ['期望等于真值', '方差最小', '一致', '有效'], answer: 0, explain: '无偏。' },
          { stem: '有效估计指：', options: ['方差最小', '期望相等', '一致', '简单'], answer: 0, explain: '有效。' }
        ],
        doc: { lead: '这一章讲点估计。', sections: [
          { id: 'methods', title: '方法', html: `<p>矩估计、极大似然；EM 算法初步。</p>` },
          { id: 'properties', title: '性质', html: `<p>无偏、有效、一致；C-R 下界。</p>` }
        ], refs: [] } },
      { title: '区间估计', brief: '范围。',
        q: [
          { stem: '置信区间的含义是：', options: ['重复抽样中覆盖真值的频率', '真值概率', '样本范围', '误差'], answer: 0, explain: '覆盖率。' },
          { stem: '区间变窄意味着：', options: ['置信度降低或样本增大', '更可靠', '无影响', '必然显著'], answer: 0, explain: '权衡。' },
          { stem: '比率估计的区间常用于：', options: ['比例问题', '方差', '相关', '回归'], answer: 0, explain: '比例。' }
        ],
        doc: { lead: '这一章讲区间。', sections: [
          { id: 'mean', title: '均值', html: `<p>已知与未知方差；t 区间。</p>` },
          { id: 'others', title: '其他', html: `<p>方差、比例、两样本差；bootstrap 区间。</p>` }
        ], refs: [] } },
      { title: '假设检验', brief: '判断。',
        q: [
          { stem: 'p 值的含义是：', options: ['原假设下出现当前结果的概率', '原假设为真概率', '结论正确率', '效应大小'], answer: 0, explain: '条件概率。' },
          { stem: '第一类错误是：', options: ['弃真', '取伪', '抽样偏差', '计算错误'], answer: 0, explain: 'α。' },
          { stem: '功效等于：', options: ['1 − β', 'α', 'p', 'R²'], answer: 0, explain: '功效。' }
        ],
        doc: { lead: '这一章讲检验。', sections: [
          { id: 'logic', title: '逻辑', html: `<p>H0/H1、显著性、单双侧；p 值。</p>` },
          { id: 'errors', title: '错误与功效', html: `<p>两类错误、样本量与功效；多重比较。</p>` }
        ], refs: [] } },
      { title: '方差分析', brief: '多组比较。',
        q: [
          { stem: 'ANOVA 用于：', options: ['三组及以上均值比较', '两组', '相关', '回归'], answer: 0, explain: '多组。' },
          { stem: 'F 统计量衡量：', options: ['组间与组内方差之比', '相关', '斜率', '均值差'], answer: 0, explain: '比值。' },
          { stem: 'ANOVA 显著后应做：', options: ['事后多重比较', '停止', '换数据', '加样本'], answer: 0, explain: '事后。' }
        ],
        doc: { lead: '这一章讲 ANOVA。', sections: [
          { id: 'logic', title: '思路', html: `<p>方差分解；单因素与双因素。</p>` },
          { id: 'post', title: '事后', html: `<p>Tukey、Bonferroni；交互作用。</p>` }
        ], refs: [] } },
      { title: '非参数方法', brief: '少假设。',
        q: [
          { stem: '非参数方法的优势是：', options: ['不依赖分布假设', '更强大', '样本小', '更快'], answer: 0, explain: '稳健。' },
          { stem: 'Wilcoxon 检验是：', options: ['秩和检验', '方差分析', '相关', '回归'], answer: 0, explain: '秩。' },
          { stem: '卡方拟合检验用于：', options: ['检验分布形状', '比较均值', '回归', '相关'], answer: 0, explain: '拟合。' }
        ],
        doc: { lead: '这一章讲非参数。', sections: [
          { id: 'rank', title: '秩方法', html: `<p>Mann-Whitney、Wilcoxon、Kruskal-Wallis。</p>` },
          { id: 'chi', title: '卡方', html: `<p>拟合优度、独立性检验；列联表。</p>` }
        ], refs: [] } },
      { title: '贝叶斯统计', brief: '先验与后验。',
        q: [
          { stem: '贝叶斯推断的核心是：', options: ['后验 ∝ 先验 × 似然', '只有似然', '只有先验', '频率'], answer: 0, explain: '公式。' },
          { stem: '共轭先验的作用是：', options: ['后验与先验同族、便于计算', '装饰', '加速抽样', '无作用'], answer: 0, explain: '共轭。' },
          { stem: '贝叶斯与频率派的区别是：', options: ['参数是否视为随机变量', '是否用数据', '是否检验', '是否计算'], answer: 0, explain: '视角。' }
        ],
        doc: { lead: '这一章讲贝叶斯。', sections: [
          { id: 'posterior', title: '后验', html: `<p>先验、似然、后验；共轭分布。</p>` },
          { id: 'computation', title: '计算', html: `<p>MCMC、变分推断；区间估计与检验。</p>` }
        ], refs: [] } },
      { title: '统计决策', brief: '做什么决定。',
        q: [
          { stem: '统计决策的要素包括：', options: ['行动、状态、损失函数', '只有损失', '只有行动', '只有状态'], answer: 0, explain: '三要素。' },
          { stem: '风险函数衡量：', options: ['决策的期望损失', '偏差', '方差', '样本量'], answer: 0, explain: '风险。' },
          { stem: '决策论与假设检验的关系是：', options: ['检验可视为决策的特例', '无关', '互斥', '相同'], answer: 0, explain: '统一。' }
        ],
        doc: { lead: '这一章讲决策。', sections: [
          { id: 'elements', title: '要素', html: `<p>行动空间、状态空间、损失函数；风险。</p>` },
          { id: 'bayes', title: '贝叶斯决策', html: `<p>后验风险最小；极大极小准则。</p>` }
        ], refs: [] } }
    ] },
    { name: '数学分析（二）', chapters: [
      { title: '多元微分', brief: '多维变化。',
        q: [
          { stem: '全微分存在的充分条件是：', options: ['偏导连续', '偏导存在', '连续', '有界'], answer: 0, explain: '充分。' },
          { stem: '方向导数与梯度的关系是：', options: ['梯度方向方向导数最大', '最小', '无关', '相等'], answer: 0, explain: '梯度。' },
          { stem: '隐函数定理的条件是：', options: ['偏导连续且相关偏导非零', '只需连续', '只需可导', '无要求'], answer: 0, explain: '条件。' }
        ],
        doc: { lead: '这一章讲多元。', sections: [
          { id: 'differential', title: '微分', html: `<p>偏导、全微分、方向导数、梯度。</p>` },
          { id: 'implicit', title: '隐函数', html: `<p>隐函数定理、雅可比；极值与条件极值。</p>` }
        ], refs: [] } },
      { title: '重积分', brief: '多维累积。',
        q: [
          { stem: '极坐标面积元素是：', options: ['r dr dθ', 'dr dθ', 'r² dr dθ', 'dθ'], answer: 0, explain: '雅可比。' },
          { stem: '三重积分的柱坐标元素是：', options: ['r dr dθ dz', 'dr dθ dz', 'ρ²sinφ', 'r² dr'], answer: 0, explain: '柱坐标。' },
          { stem: '重积分可计算：', options: ['体积、质量、质心', '只有体积', '只有质量', '导数'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲重积分。', sections: [
          { id: 'double', title: '二重', html: `<p>累次积分、极坐标；应用。</p>` },
          { id: 'triple', title: '三重', html: `<p>柱/球坐标；雅可比。</p>` }
        ], refs: [] } },
      { title: '曲线与曲面积分', brief: '沿线的积分。',
        q: [
          { stem: '第一类曲线积分对方向：', options: ['不敏感', '敏感', '只与起点有关', '只与终点有关'], answer: 0, explain: '弧长。' },
          { stem: '格林公式联系：', options: ['曲线积分与二重积分', '三重积分', '级数', '导数'], answer: 0, explain: '格林。' },
          { stem: '高斯公式联系：', options: ['曲面积分与三重积分', '曲线积分', '级数', '导数'], answer: 0, explain: '散度。' }
        ],
        doc: { lead: '这一章讲积分。', sections: [
          { id: 'line', title: '曲线', html: `<p>第一/二类；路径无关条件。</p>` },
          { id: 'surface', title: '曲面', html: `<p>第一/二类；格林、高斯、斯托克斯。</p>` }
        ], refs: [] } },
      { title: '级数', brief: '无穷与函数。',
        q: [
          { stem: '一致收敛保证：', options: ['极限与积分/求导可交换', '收敛快', '项数少', '计算简单'], answer: 0, explain: '交换。' },
          { stem: '幂级数在收敛区间内：', options: ['可逐项求导与积分', '任意取值', '不连续', '有限项'], answer: 0, explain: '解析。' },
          { stem: '傅里叶级数用于：', options: ['周期函数展开', '任意函数', '只有多项式', '只有指数'], answer: 0, explain: '周期。' }
        ],
        doc: { lead: '这一章讲级数。', sections: [
          { id: 'uniform', title: '一致收敛', html: `<p>Weierstrass 判别；幂级数性质。</p>` },
          { id: 'fourier', title: '傅里叶', html: `<p>三角级数、系数、收敛定理。</p>` }
        ], refs: [] } },
      { title: '含参积分', brief: '参数。',
        q: [
          { stem: '含参积分求导的条件是：', options: ['被积函数与偏导连续', '只需连续', '只需可导', '无要求'], answer: 0, explain: '条件。' },
          { stem: '含参反常积分一致收敛可用：', options: ['Weierstrass 判别', '比值法', '根值法', '夹逼'], answer: 0, explain: '判别。' },
          { stem: 'Γ 函数的性质是：', options: ['Γ(n+1) = n!', 'Γ(n) = n!', 'Γ(n) = n', '无关'], answer: 0, explain: '推广。' }
        ],
        doc: { lead: '这一章讲含参。', sections: [
          { id: 'proper', title: '正常', html: `<p>连续、可导、可积；莱布尼茨法则。</p>` },
          { id: 'improper', title: '反常', html: `<p>一致收敛；Γ 与 B 函数。</p>` }
        ], refs: [] } },
      { title: '复变初步', brief: '解析函数。',
        q: [
          { stem: '解析函数满足：', options: ['柯西-黎曼方程', '拉普拉斯方程唯一', '波动方程', '热方程'], answer: 0, explain: 'CR。' },
          { stem: '留数定理用于：', options: ['计算复积分与实积分', '求导', '判敛', '解方程唯一'], answer: 0, explain: '留数。' },
          { stem: '解析函数的实部与虚部：', options: ['都是调和函数', '无关', '都是常数', '都是线性'], answer: 0, explain: '调和。' }
        ],
        doc: { lead: '这一章讲复变。', sections: [
          { id: 'analytic', title: '解析', html: `<p>CR 方程、初等函数；积分与柯西定理。</p>` },
          { id: 'residue', title: '留数', html: `<p>级数展开、留数计算；实积分应用。</p>` }
        ], refs: [] } },
      { title: '应用与训练', brief: '用起来。',
        q: [
          { stem: '多元分析的关键是：', options: ['化归与对称性利用', '硬算', '背公式', '跳过'], answer: 0, explain: '化归。' },
          { stem: '证明题常用：', options: ['估计、构造、反例', '猜', '背', '查表'], answer: 0, explain: '方法。' },
          { stem: '提高能力的有效方式是：', options: ['大量练习并总结', '只看答案', '只听课', '只背定理'], answer: 0, explain: '练习。' }
        ],
        doc: { lead: '这一章讲训练。', sections: [
          { id: 'method', title: '方法', html: `<p>化归、对称性、变量替换；几何直观。</p>` },
          { id: 'habit', title: '习惯', html: `<p>写清条件、检验特例、错题归因。</p>` }
        ], refs: [] } }
    ] },
    { name: '随机过程', chapters: [
      { title: '马尔可夫链', brief: '无后效。',
        q: [
          { stem: '马尔可夫性的含义是：', options: ['未来只依赖现在', '依赖全部历史', '独立', '无规律'], answer: 0, explain: '无后效。' },
          { stem: '转移矩阵的性质是：', options: ['行和为 1', '列和为 1', '元素为 0', '对称'], answer: 0, explain: '随机矩阵。' },
          { stem: '平稳分布满足：', options: ['πP = π', 'πP = 0', 'Pπ = 0', 'π = P'], answer: 0, explain: '平稳。' }
        ],
        doc: { lead: '这一章讲链。', sections: [
          { id: 'chain', title: '链', html: `<p>状态、转移概率、C-K 方程；常返与瞬态。</p>` },
          { id: 'stationary', title: '平稳', html: `<p>平稳分布、遍历定理；应用（PageRank）。</p>` }
        ], refs: [] } },
      { title: '泊松过程', brief: '随机到达。',
        q: [
          { stem: '泊松过程的到达间隔服从：', options: ['指数分布', '正态', '均匀', '伽马'], answer: 0, explain: '指数。' },
          { stem: '泊松过程的计数增量：', options: ['独立且服从泊松分布', '相关', '均匀', '确定'], answer: 0, explain: '增量。' },
          { stem: '泊松过程的应用包括：', options: ['排队、放射衰变、呼叫中心', '只有排队', '只有衰变', '只有呼叫'], answer: 0, explain: '多应用。' }
        ],
        doc: { lead: '这一章讲泊松。', sections: [
          { id: 'definition', title: '定义', html: `<p>独立增量、平稳增量；强度 λ。</p>` },
          { id: 'application', title: '应用', html: `<p>排队论、可靠性、复合泊松；非齐次推广。</p>` }
        ], refs: [] } },
      { title: '布朗运动', brief: '连续随机游走。',
        q: [
          { stem: '布朗运动的轨道性质是：', options: ['连续但处处不可微', '光滑', '单调', '周期'], answer: 0, explain: '不可微。' },
          { stem: '布朗运动的增量服从：', options: ['正态分布', '泊松', '指数', '均匀'], answer: 0, explain: '正态。' },
          { stem: '布朗运动的方差随时间：', options: ['线性增长', '不变', '指数增长', '周期'], answer: 0, explain: '线性。' }
        ],
        doc: { lead: '这一章讲布朗。', sections: [
          { id: 'definition', title: '定义', html: `<p>独立增量、正态增量；样本轨道。</p>` },
          { id: 'properties', title: '性质', html: `<p>鞅性、反射原理；几何布朗运动与金融。</p>` }
        ], refs: [] } },
      { title: '鞅', brief: '公平游戏。',
        q: [
          { stem: '鞅的定义是：', options: ['E[X_{n+1}|F_n] = X_n', 'E = 0', '单调递增', '独立'], answer: 0, explain: '定义。' },
          { stem: '停时定理的作用是：', options: ['计算期望的停止时刻', '求方差', '判收敛', '求极限'], answer: 0, explain: '停时。' },
          { stem: '鞅的应用包括：', options: ['金融定价、赌博策略、收敛定理', '只有金融', '只有赌博', '无应用'], answer: 0, explain: '多应用。' }
        ],
        doc: { lead: '这一章讲鞅。', sections: [
          { id: 'martingale', title: '鞅', html: `<p>定义、上鞅与下鞅；停时与可选停时定理。</p>` },
          { id: 'convergence', title: '收敛', html: `<p>鞅收敛定理；应用与风险中性定价。</p>` }
        ], refs: [] } },
      { title: '更新过程', brief: '重复到达。',
        q: [
          { stem: '更新过程与泊松过程的区别是：', options: ['间隔一般分布', '间隔指数', '无到达', '连续'], answer: 0, explain: '一般分布。' },
          { stem: '更新定理说明：', options: ['长期更新率趋于 1/均值', '无规律', '趋于零', '指数增长'], answer: 0, explain: '更新定理。' },
          { stem: '更新报酬过程用于：', options: ['长期平均收益', '只有计数', '只有时间', '无应用'], answer: 0, explain: '报酬。' }
        ],
        doc: { lead: '这一章讲更新。', sections: [
          { id: 'renewal', title: '更新', html: `<p>更新函数、更新方程；关键更新定理。</p>` },
          { id: 'reward', title: '报酬', html: `<p>更新报酬过程；可靠性维修策略。</p>` }
        ], refs: [] } },
      { title: '排队论', brief: '等待的数学。',
        q: [
          { stem: 'M/M/1 队列的利用率是：', options: ['λ/μ', 'μ/λ', 'λμ', 'λ+μ'], answer: 0, explain: 'ρ。' },
          { stem: '队长的稳定性条件是：', options: ['λ < μ', 'λ > μ', 'λ = μ', '任意'], answer: 0, explain: '稳定。' },
          { stem: 'Little 公式是：', options: ['L = λW', 'L = W/λ', 'L = λ/W', 'L = λ+W'], answer: 0, explain: '公式。' }
        ],
        doc: { lead: '这一章讲排队。', sections: [
          { id: 'mm1', title: 'M/M/1', html: `<p>出生死亡过程、队长分布；Little 公式。</p>` },
          { id: 'networks', title: '网络', html: `<p>排队网络、服务系统设计；仿真。</p>` }
        ], refs: [] } },
      { title: '平稳过程', brief: '统计平稳。',
        q: [
          { stem: '宽平稳要求：', options: ['均值常数、自相关只与时间差有关', '分布相同', '方差为零', '独立'], answer: 0, explain: '宽平稳。' },
          { stem: '自相关函数描述：', options: ['不同时刻的相关性', '均值', '方差', '分布'], answer: 0, explain: '自相关。' },
          { stem: '谱密度是自相关的：', options: ['傅里叶变换', '导数', '积分', '平方'], answer: 0, explain: '谱。' }
        ],
        doc: { lead: '这一章讲平稳。', sections: [
          { id: 'stationary', title: '平稳', html: `<p>严平稳与宽平稳；自相关与遍历性。</p>` },
          { id: 'spectral', title: '谱', html: `<p>谱密度、线性滤波；时间序列基础。</p>` }
        ], refs: [] } },
      { title: '应用与计算', brief: '实践中。',
        q: [
          { stem: '随机过程模拟的常用方法是：', options: ['蒙特卡洛与离散化', '解析解', '查表', '估算'], answer: 0, explain: '模拟。' },
          { stem: '随机微分方程用于：', options: ['建模带噪声的动态系统', '静态分析', '分类', '回归'], answer: 0, explain: 'SDE。' },
          { stem: '随机过程在金融中的应用是：', options: ['期权定价与风险管理', '无应用', '只做统计', '只做分类'], answer: 0, explain: '金融。' }
        ],
        doc: { lead: '这一章讲应用。', sections: [
          { id: 'simulation', title: '模拟', html: `<p>布朗桥、Euler-Maruyama；方差缩减。</p>` },
          { id: 'finance', title: '金融', html: `<p>Black-Scholes、风险度量；信用模型。</p>` }
        ], refs: [] } }
    ] },
    { name: '回归分析', chapters: [
      { title: '一元回归', brief: '两个变量。',
        q: [
          { stem: 'OLS 的目标是：', options: ['最小化残差平方和', '最大化 R²', '最小样本', '最大化显著性'], answer: 0, explain: 'OLS。' },
          { stem: '斜率含义是：', options: ['X 增一单位 Y 的平均变化', '截距', '相关', '弹性'], answer: 0, explain: '边际。' },
          { stem: '残差应满足：', options: ['均值为零、与 X 不相关', '越大越好', '全正', '全零'], answer: 0, explain: '正交。' }
        ],
        doc: { lead: '这一章讲一元。', sections: [
          { id: 'ols', title: 'OLS', html: `<p>估计、拟合优度、标准误；预测区间。</p>` },
          { id: 'inference', title: '推断', html: `<p>t 检验、F 检验；置信区间。</p>` }
        ], refs: [] } },
      { title: '多元回归', brief: '控制变量。',
        q: [
          { stem: '多元回归系数是：', options: ['控制其他变量后的偏效应', '简单相关', 'R²', '截距'], answer: 0, explain: '偏效应。' },
          { stem: '多重共线性导致：', options: ['系数方差增大', '系数有偏', 'R² 为零', '无法估计'], answer: 0, explain: 'VIF。' },
          { stem: '调整 R² 的作用是：', options: ['惩罚变量个数', '提高拟合', '降低误差', '消除共线'], answer: 0, explain: '惩罚。' }
        ],
        doc: { lead: '这一章讲多元。', sections: [
          { id: 'matrix', title: '矩阵形式', html: `<p>β̂ = (XᵀX)⁻¹Xᵀy；偏效应解释。</p>` },
          { id: 'diagnostics', title: '诊断', html: `<p>共线、异方差、自相关；调整 R²。</p>` }
        ], refs: [] } },
      { title: '模型诊断', brief: '模型靠谱吗。',
        q: [
          { stem: '残差图用于检查：', options: ['异方差与非线性', '因果', '样本量', '显著性'], answer: 0, explain: '残差。' },
          { stem: '强影响点的识别常用：', options: ['Cook 距离', 'R²', 'p 值', '方差'], answer: 0, explain: 'Cook。' },
          { stem: '异方差的后果是：', options: ['标准误有偏、推断失效', '系数有偏', 'R² 为零', '无法估计'], answer: 0, explain: '方差。' }
        ],
        doc: { lead: '这一章讲诊断。', sections: [
          { id: 'residual', title: '残差', html: `<p>残差图、正态 QQ 图；异方差检验。</p>` },
          { id: 'influence', title: '影响点', html: `<p>杠杆值、Cook 距离；稳健标准误。</p>` }
        ], refs: [] } },
      { title: '变量选择', brief: '选模型。',
        q: [
          { stem: '逐步回归的风险是：', options: ['过拟合与选择偏差', '欠拟合', '计算慢', '无风险'], answer: 0, explain: '偏差。' },
          { stem: 'LASSO 的作用是：', options: ['L1 正则化、变量选择', 'L2 正则', '降维唯一', '聚类'], answer: 0, explain: 'L1。' },
          { stem: '交叉验证用于：', options: ['评估泛化能力', '提高 R²', '消除共线', '选样本'], answer: 0, explain: 'CV。' }
        ],
        doc: { lead: '这一章讲选择。', sections: [
          { id: 'criteria', title: '准则', html: `<p>AIC、BIC、调整 R²；逐步法的问题。</p>` },
          { id: 'regularization', title: '正则化', html: `<p>岭回归、LASSO、弹性网；交叉验证。</p>` }
        ], refs: [] } },
      { title: '广义线性模型', brief: '非正态响应。',
        q: [
          { stem: 'Logistic 回归用于：', options: ['二分类响应', '连续响应', '计数', '时间'], answer: 0, explain: '分类。' },
          { stem: '泊松回归适用于：', options: ['计数数据', '连续', '分类', '有序'], answer: 0, explain: '计数。' },
          { stem: '联系函数的作用是：', options: ['连接均值与线性预测子', '标准化', '加权', '降维'], answer: 0, explain: 'link。' }
        ],
        doc: { lead: '这一章讲 GLM。', sections: [
          { id: 'logistic', title: 'Logistic', html: `<p>logit 链接、OR 解释；拟合与检验。</p>` },
          { id: 'poisson', title: '泊松与多分类', html: `<p>对数链接、过离散；多项与有序模型。</p>` }
        ], refs: [] } },
      { title: '非线性回归', brief: '曲线关系。',
        q: [
          { stem: '多项式回归的注意点是：', options: ['过拟合与共线', '不能拟合', '无需检验', '不能预测'], answer: 0, explain: '过拟合。' },
          { stem: '非线性最小二乘用：', options: ['迭代优化', '解析解', '查表', '线性化唯一'], answer: 0, explain: '迭代。' },
          { stem: '样条回归的优势是：', options: ['灵活拟合非线性', '简单', '无参数', '无过拟合'], answer: 0, explain: '样条。' }
        ],
        doc: { lead: '这一章讲非线性。', sections: [
          { id: 'polynomial', title: '多项式与样条', html: `<p>基函数展开、节点选择；过拟合控制。</p>` },
          { id: 'nls', title: 'NLS', html: `<p>迭代算法、初值；可识别性。</p>` }
        ], refs: [] } },
      { title: '稳健回归', brief: '抗异常值。',
        q: [
          { stem: '稳健回归的目的是：', options: ['减少异常值影响', '提高 R²', '加快计算', '增加变量'], answer: 0, explain: '稳健。' },
          { stem: 'Huber 损失函数的特点是：', options: ['对极端残差线性惩罚', '平方惩罚', '无惩罚', '指数惩罚'], answer: 0, explain: 'Huber。' },
          { stem: '分位数回归估计：', options: ['条件分位数', '条件均值', '方差', '相关'], answer: 0, explain: '分位数。' }
        ],
        doc: { lead: '这一章讲稳健。', sections: [
          { id: 'loss', title: '损失', html: `<p>Huber、Tukey；M 估计。</p>` },
          { id: 'quantile', title: '分位数', html: `<p>分位数回归、区间预测；应用。</p>` }
        ], refs: [] } },
      { title: '应用与实战', brief: '做分析。',
        q: [
          { stem: '回归分析的第一步是：', options: ['明确问题与变量', '跑模型', '画图', '写报告'], answer: 0, explain: '问题。' },
          { stem: '模型报告应包含：', options: ['系数、标准误、诊断与局限', '只有 R²', '只有系数', '只有结论'], answer: 0, explain: '完整。' },
          { stem: '因果解释需谨慎，因为：', options: ['相关不等于因果、内生性', '样本大', '模型复杂', '数据多'], answer: 0, explain: '因果。' }
        ],
        doc: { lead: '这一章讲实战。', sections: [
          { id: 'workflow', title: '流程', html: `<p>问题—数据—模型—诊断—解释；可重复分析。</p>` },
          { id: 'interpretation', title: '解释', html: `<p>系数含义、效应量、因果边界；报告规范。</p>` }
        ], refs: [] } }
    ] },
    { name: '多元统计分析', chapters: [
      { title: '多元分布', brief: '多个变量。',
        q: [
          { stem: '多元正态分布由什么决定？', options: ['均值向量与协方差矩阵', '只有均值', '只有方差', '样本量'], answer: 0, explain: '两参数。' },
          { stem: '马氏距离的作用是：', options: ['考虑相关性的距离', '欧氏距离', '曼哈顿距离', '相关'], answer: 0, explain: '马氏。' },
          { stem: '协方差矩阵正定的意义是：', options: ['分布非退化', '方差为零', '变量独立', '样本大'], answer: 0, explain: '正定。' }
        ],
        doc: { lead: '这一章讲分布。', sections: [
          { id: 'normal', title: '多元正态', html: `<p>密度、性质；马氏距离。</p>` },
          { id: 'estimation', title: '估计', html: `<p>均值向量、协方差矩阵；检验。</p>` }
        ], refs: [] } },
      { title: '主成分分析', brief: '降维。',
        q: [
          { stem: '主成分是：', options: ['方差最大的线性组合', '均值最大', '相关最强', '变量最多'], answer: 0, explain: '方差。' },
          { stem: '主成分个数选择依据：', options: ['累计方差贡献率', '变量数', '样本量', '相关'], answer: 0, explain: '贡献率。' },
          { stem: 'PCA 的应用包括：', options: ['降维、可视化、去噪', '只有降维', '只有可视化', '分类唯一'], answer: 0, explain: '多应用。' }
        ],
        doc: { lead: '这一章讲 PCA。', sections: [
          { id: 'method', title: '方法', html: `<p>协方差矩阵特征分解；标准化与贡献率。</p>` },
          { id: 'application', title: '应用', html: `<p>降维可视化、去噪、特征提取；局限。</p>` }
        ], refs: [] } },
      { title: '因子分析', brief: '潜在结构。',
        q: [
          { stem: '因子分析的目的：', options: ['寻找潜在公共因子', '降维唯一', '分类', '预测'], answer: 0, explain: '潜在。' },
          { stem: '因子旋转的作用是：', options: ['使因子更易解释', '提高方差', '减少因子', '增加样本'], answer: 0, explain: '旋转。' },
          { stem: '因子分析与 PCA 的区别是：', options: ['是否有误差项与潜在模型', '无区别', 'PCA 更复杂', '因子不能降维'], answer: 0, explain: '模型。' }
        ],
        doc: { lead: '这一章讲因子。', sections: [
          { id: 'model', title: '模型', html: `<p>公共因子、特殊因子；载荷矩阵。</p>` },
          { id: 'rotation', title: '旋转', html: `<p>正交与斜交旋转；因子得分。</p>` }
        ], refs: [] } },
      { title: '判别分析', brief: '分类。',
        q: [
          { stem: 'Fisher 判别的基本思想是：', options: ['投影后类间距离最大', '类内距离最大', '方差最小', '均值相等'], answer: 0, explain: 'Fisher。' },
          { stem: '判别分析与聚类分析的区别是：', options: ['是否有已知类别', '是否降维', '是否用距离', '是否用矩阵'], answer: 0, explain: '有监督。' },
          { stem: '判别函数评价常用：', options: ['错判率与交叉验证', 'R²', 'p 值', '方差'], answer: 0, explain: '错判率。' }
        ],
        doc: { lead: '这一章讲判别。', sections: [
          { id: 'fisher', title: 'Fisher', html: `<p>线性判别、投影；贝叶斯判别。</p>` },
          { id: 'evaluation', title: '评价', html: `<p>错判率、ROC、交叉验证；类别不平衡。</p>` }
        ], refs: [] } },
      { title: '聚类分析', brief: '分组。',
        q: [
          { stem: 'K 均值聚类的核心是：', options: ['最小化类内平方和', '最大化类间', '随机分组', '层次合并'], answer: 0, explain: 'K-means。' },
          { stem: '层次聚类的结果是：', options: ['树状图（谱系）', '散点图', '柱状图', '网络图'], answer: 0, explain: '树状。' },
          { stem: '聚类效果评价的难点是：', options: ['无真实标签、依赖距离度量', '计算慢', '样本少', '维度低'], answer: 0, explain: '无标签。' }
        ],
        doc: { lead: '这一章讲聚类。', sections: [
          { id: 'kmeans', title: 'K 均值', html: `<p>算法、K 选择（肘部法、轮廓系数）。</p>` },
          { id: 'hierarchical', title: '层次与密度', html: `<p>连接方式、DBSCAN；距离度量。</p>` }
        ], refs: [] } },
      { title: '典型相关分析', brief: '两组变量。',
        q: [
          { stem: '典型相关的目标是：', options: ['最大化两组线性组合的相关', '最小化方差', '分类', '降维唯一'], answer: 0, explain: '典型。' },
          { stem: '典型相关系数的个数是：', options: ['min(p,q)', 'p+q', 'max(p,q)', '1'], answer: 0, explain: '较小者。' },
          { stem: '典型相关与回归的关系是：', options: ['可用于分析组间关联', '相同', '互斥', '无关'], answer: 0, explain: '关联。' }
        ],
        doc: { lead: '这一章讲典型。', sections: [
          { id: 'method', title: '方法', html: `<p>典型变量、相关系数；显著性检验。</p>` },
          { id: 'application', title: '应用', html: `<p>多变量关联、降维；解释与局限。</p>` }
        ], refs: [] } },
      { title: '多维标度与对应分析', brief: '空间表示。',
        q: [
          { stem: '多维标度的作用是：', options: ['用低维空间表示相似性', '分类', '回归', '预测'], answer: 0, explain: 'MDS。' },
          { stem: '对应分析用于：', options: ['列联表的可视化', '连续变量', '时间序列', '聚类'], answer: 0, explain: '对应。' },
          { stem: '降维方法的选择取决于：', options: ['数据类型与分析目的', '软件', '样本量', '计算速度'], answer: 0, explain: '目的。' }
        ],
        doc: { lead: '这一章讲标度。', sections: [
          { id: 'mds', title: 'MDS', html: `<p>距离矩阵、应力函数；经典与度量 MDS。</p>` },
          { id: 'ca', title: '对应分析', html: `<p>列联表降维、双标图；解释。</p>` }
        ], refs: [] } },
      { title: '应用与实战', brief: '做分析。',
        q: [
          { stem: '多元分析的第一步是：', options: ['数据检查与标准化', '跑模型', '画图', '写报告'], answer: 0, explain: '数据。' },
          { stem: '高维数据的挑战是：', options: ['维数灾难与过拟合', '样本少', '计算慢', '无挑战'], answer: 0, explain: '高维。' },
          { stem: '结果解释应：', options: ['结合领域知识与验证', '只看统计量', '照搬软件', '省略'], answer: 0, explain: '解释。' }
        ],
        doc: { lead: '这一章讲实战。', sections: [
          { id: 'workflow', title: '流程', html: `<p>数据检查、标准化、方法选择、验证、解释。</p>` },
          { id: 'caution', title: '注意', html: `<p>维数灾难、过拟合、可解释性；交叉验证。</p>` }
        ], refs: [] } }
    ] },
    { name: '时间序列分析', chapters: [
      { title: '平稳性与自相关', brief: '时间数据的基础。',
        q: [
          { stem: '平稳时间序列要求：', options: ['均值与自相关不随时间变化', '方差为零', '独立', '周期'], answer: 0, explain: '平稳。' },
          { stem: '自相关函数（ACF）用于：', options: ['识别相关结构', '测均值', '测方差', '分类'], answer: 0, explain: 'ACF。' },
          { stem: '单位根检验用于：', options: ['判断平稳性', '检验均值', '检验方差', '检验相关'], answer: 0, explain: 'ADF。' }
        ],
        doc: { lead: '这一章讲平稳。', sections: [
          { id: 'stationary', title: '平稳', html: `<p>严平稳与宽平稳；ACF、PACF。</p>` },
          { id: 'test', title: '检验', html: `<p>ADF、KPSS；差分与去趋势。</p>` }
        ], refs: [] } },
      { title: 'ARMA 模型', brief: '自回归与滑动平均。',
        q: [
          { stem: 'AR(p) 与 MA(q) 的区别是：', options: ['用过去值 vs 用过去误差', '阶数', '是否平稳', '是否线性'], answer: 0, explain: '两类。' },
          { stem: 'ARMA 模型的定阶依据：', options: ['ACF/PACF 与信息准则', 'R²', 'p 值', '样本量'], answer: 0, explain: '定阶。' },
          { stem: '模型检验的重点是：', options: ['残差是否为白噪声', 'R² 高', '系数多', '预测远'], answer: 0, explain: '残差。' }
        ],
        doc: { lead: '这一章讲 ARMA。', sections: [
          { id: 'ar', title: 'AR 与 MA', html: `<p>模型形式、平稳条件；可逆性。</p>` },
          { id: 'order', title: '定阶', html: `<p>ACF/PACF、AIC/BIC；参数估计。</p>` }
        ], refs: [] } },
      { title: 'ARIMA 与季节模型', brief: '非平稳与周期。',
        q: [
          { stem: 'ARIMA 中的 I 表示：', options: ['差分次数', '积分', '独立', '识别'], answer: 0, explain: '差分。' },
          { stem: '季节模型（SARIMA）增加的参数是：', options: ['季节阶数', '趋势', '常数', '误差'], answer: 0, explain: '季节。' },
          { stem: '过度差分的后果是：', options: ['引入人为相关、预测变差', '更好', '无影响', '消除趋势'], answer: 0, explain: '过度。' }
        ],
        doc: { lead: '这一章讲 ARIMA。', sections: [
          { id: 'arima', title: 'ARIMA', html: `<p>差分、模型形式；建模流程（Box-Jenkins）。</p>` },
          { id: 'seasonal', title: '季节', html: `<p>SARIMA、季节差分；节假日效应。</p>` }
        ], refs: [] } },
      { title: '谱分析', brief: '频域视角。',
        q: [
          { stem: '谱密度描述：', options: ['方差在频率上的分布', '均值', '趋势', '误差'], answer: 0, explain: '频域。' },
          { stem: '周期图用于：', options: ['估计谱密度', '预测', '定阶', '检验'], answer: 0, explain: '周期图。' },
          { stem: '滤波的作用是：', options: ['提取特定频率成分', '增加样本', '消除趋势唯一', '预测'], answer: 0, explain: '滤波。' }
        ],
        doc: { lead: '这一章讲谱。', sections: [
          { id: 'spectrum', title: '谱', html: `<p>谱密度、周期图；平滑与置信带。</p>` },
          { id: 'filter', title: '滤波', html: `<p>低通、高通、带通；季节调整。</p>` }
        ], refs: [] } },
      { title: '状态空间与卡尔曼滤波', brief: '动态系统。',
        q: [
          { stem: '状态空间模型包括：', options: ['状态方程与观测方程', '只有状态', '只有观测', '只有误差'], answer: 0, explain: '两方程。' },
          { stem: '卡尔曼滤波的作用是：', options: ['递推估计隐状态', '分类', '降维', '聚类'], answer: 0, explain: '滤波。' },
          { stem: '状态空间模型的优势是：', options: ['处理缺失、时变参数、多变量', '简单', '无需假设', '计算快'], answer: 0, explain: '灵活。' }
        ],
        doc: { lead: '这一章讲状态。', sections: [
          { id: 'model', title: '模型', html: `<p>状态方程、观测方程；线性高斯情形。</p>` },
          { id: 'kalman', title: '卡尔曼', html: `<p>预测与更新；平滑、参数估计。</p>` }
        ], refs: [] } },
      { title: 'GARCH 与波动率', brief: '方差的动态。',
        q: [
          { stem: '波动率聚集说明：', options: ['条件方差随时间变化', '方差恒定', '均值恒定', '无相关'], answer: 0, explain: '聚集。' },
          { stem: 'GARCH 模型刻画：', options: ['条件方差的自回归结构', '均值', '趋势', '季节'], answer: 0, explain: 'GARCH。' },
          { stem: 'VaR 的含义是：', options: ['给定置信水平的最大损失', '平均收益', '波动率', '相关系数'], answer: 0, explain: 'VaR。' }
        ],
        doc: { lead: '这一章讲波动。', sections: [
          { id: 'arch', title: 'ARCH/GARCH', html: `<p>模型形式、阶数；估计与检验。</p>` },
          { id: 'risk', title: '风险', html: `<p>VaR、ES、回测；金融应用。</p>` }
        ], refs: [] } },
      { title: '预测与评估', brief: '预测未来。',
        q: [
          { stem: '预测评估的常用指标是：', options: ['RMSE、MAE、MAPE', '只有 RMSE', '只有 MAE', '只有 MAPE'], answer: 0, explain: '多指标。' },
          { stem: '样本外检验的意义是：', options: ['评估真实预测能力', '提高拟合', '减少参数', '装饰'], answer: 0, explain: '样本外。' },
          { stem: '组合预测的优势是：', options: ['降低方差、提高稳健性', '更简单', '更准唯一', '无需评估'], answer: 0, explain: '组合。' }
        ],
        doc: { lead: '这一章讲预测。', sections: [
          { id: 'metrics', title: '指标', html: `<p>RMSE、MAE、MAPE；方向准确率。</p>` },
          { id: 'validation', title: '验证', html: `<p>滚动预测、训练测试划分；组合与基准。</p>` }
        ], refs: [] } },
      { title: '应用与实战', brief: '做分析。',
        q: [
          { stem: '时间序列分析的第一步是：', options: ['画图与平稳性检查', '建模', '预测', '写报告'], answer: 0, explain: '探索。' },
          { stem: '建模流程（Box-Jenkins）是：', options: ['识别—估计—诊断—预测', '只有估计', '只有预测', '只有识别'], answer: 0, explain: '四步。' },
          { stem: '预测的不确定性应：', options: ['给出预测区间', '忽略', '只说点预测', '夸大'], answer: 0, explain: '区间。' }
        ],
        doc: { lead: '这一章讲实战。', sections: [
          { id: 'workflow', title: '流程', html: `<p>可视化、平稳化、定阶、估计、诊断、预测。</p>` },
          { id: 'pitfall', title: '陷阱', html: `<p>过度差分、数据窥探、结构突变；报告规范。</p>` }
        ], refs: [] } }
    ] },

    /* ---- 大四 ---- */
    { name: '毕业论文', chapters: [
      { title: '选题与文献', brief: '小问题、可做。',
        q: [
          { stem: '统计论文选题的关键是：', options: ['问题明确、方法可行', '题目宏大', '追热点', '导师偏好'], answer: 0, explain: '可行。' },
          { stem: '文献阅读的作用是：', options: ['了解方法并找到切入点', '凑数', '展示', '替代研究'], answer: 0, explain: '切入。' },
          { stem: '统计研究的常见类型包括：', options: ['方法、应用、模拟、综述', '只有方法', '只有应用', '只有模拟'], answer: 0, explain: '多类。' }
        ],
        doc: { lead: '这一章讲开头。', sections: [
          { id: 'topic', title: '选题', html: `<p>方法改进、应用分析、模拟比较；范围可控。</p>` },
          { id: 'review', title: '文献', html: `<p>方法类论文与综述；近三年进展。</p>` }
        ], refs: [] } },
      { title: '方法与实证', brief: '证据。',
        q: [
          { stem: '统计论文的严谨性体现在：', options: ['假设、方法与结论一致', '结果好看', '图表多', '篇幅长'], answer: 0, explain: '严谨。' },
          { stem: '模拟研究的要点是：', options: ['设定、重复、评估指标', '只跑一次', '只看结果', '无设定'], answer: 0, explain: '模拟。' },
          { stem: '实证分析应报告：', options: ['数据来源、方法与局限', '只有结论', '只有表格', '只有图'], answer: 0, explain: '完整。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'method', title: '方法', html: `<p>模型设定、假设检验、模拟设计；可复现。</p>` },
          { id: 'report', title: '报告', html: `<p>数据、方法、结果、诊断、局限；代码附录。</p>` }
        ], refs: [] } },
      { title: '写作与规范', brief: '学术表达。',
        q: [
          { stem: '统计论文的结构是：', options: ['引言—方法—结果—讨论—结论', '总—分—总', '背景—致谢', '问答'], answer: 0, explain: '结构。' },
          { stem: '表格规范包括：', options: ['三线表、单位、显著性标记', '只有数字', '只有标题', '无要求'], answer: 0, explain: '规范。' },
          { stem: '引用规范的作用是：', options: ['可追溯与学术诚信', '凑数', '装饰', '增加篇幅'], answer: 0, explain: '规范。' }
        ],
        doc: { lead: '这一章讲写作。', sections: [
          { id: 'structure', title: '结构', html: `<p>摘要、引言、方法、结果、讨论、参考。</p>` },
          { id: 'tables', title: '图表', html: `<p>三线表、误差与显著性；有效数字。</p>` }
        ], refs: [] } },
      { title: '答辩', brief: '讲清楚。',
        q: [
          { stem: '答辩陈述的要点是：', options: ['问题、方法、结果、局限', '致谢', '篇幅', '格式'], answer: 0, explain: '四点。' },
          { stem: '被质疑时应：', options: ['承认局限并说明理由', '争辩', '回避', '改口'], answer: 0, explain: '诚恳。' },
          { stem: '答辩前最该准备的是：', options: ['熟悉方法与结论依据', '背稿', 'PPT 模板', '服装'], answer: 0, explain: '依据。' }
        ],
        doc: { lead: '这一章讲答辩。', sections: [
          { id: 'talk', title: '陈述', html: `<p>8–10 分钟；问题—方法—结果—局限。</p>` },
          { id: 'qa', title: '问答', html: `<p>准备可能问题；不会就说不确定并说明思路。</p>` }
        ], refs: [] } }
    ] },
    { name: '专业实习', chapters: [
      { title: '实习方向', brief: '数据、金融、互联网。',
        q: [
          { stem: '统计专业实习的常见方向不包括：', options: ['数据分析', '市场研究', '风险建模', '外科手术'], answer: 3, explain: '无关。' },
          { stem: '选择实习最该看：', options: ['能否参与真实数据项目', '名气', '工资', '通勤'], answer: 0, explain: '实战。' },
          { stem: '数据分析岗的核心工作是：', options: ['取数、分析、报告', '只有取数', '只有报告', '只有建模'], answer: 0, explain: '全流程。' }
        ],
        doc: { lead: '这一章讲方向。', sections: [
          { id: 'paths', title: '方向', html: `<p>互联网数据分析、金融风控、市场研究、医药统计。</p>` },
          { id: 'choose', title: '选择', html: `<p>真实数据、有带教、能出作品；工具与业务并重。</p>` }
        ], refs: [] } },
      { title: '数据工作流', brief: '从原始到结论。',
        q: [
          { stem: '数据分析的第一步是：', options: ['明确问题与指标', '建模', '画图', '写报告'], answer: 0, explain: '问题。' },
          { stem: '数据清洗的重点是：', options: ['缺失、异常、重复、口径', '只有缺失', '只有异常', '只有重复'], answer: 0, explain: '清洗。' },
          { stem: '可复现分析要求：', options: ['代码与数据可追溯', '只交报告', '截图', '口头说明'], answer: 0, explain: '可重复。' }
        ],
        doc: { lead: '这一章讲流程。', sections: [
          { id: 'flow', title: '流程', html: `<p>问题—取数—清洗—分析—可视化—报告。</p>` },
          { id: 'reproducible', title: '可重复', html: `<p>脚本、版本控制、文档；数据字典。</p>` }
        ], refs: [] } },
      { title: '报告与沟通', brief: '讲给决策者。',
        q: [
          { stem: '分析报告的摘要应：', options: ['结论先行、给出建议', '长篇', '只有数据', '只有背景'], answer: 0, explain: '结论。' },
          { stem: '可视化的原则是：', options: ['一图一结论、清晰准确', '炫技', '颜色多', '动画'], answer: 0, explain: '清晰。' },
          { stem: '向非技术听众汇报应：', options: ['少术语、讲业务影响', '堆公式', '只讲模型', '只讲代码'], answer: 0, explain: '沟通。' }
        ],
        doc: { lead: '这一章讲报告。', sections: [
          { id: 'structure', title: '结构', html: `<p>摘要（结论+建议）、背景、方法、结果、建议、附录。</p>` },
          { id: 'visual', title: '可视化', html: `<p>图型选择、标注、来源；避免误导。</p>` }
        ], refs: [] } },
      { title: '职业素养', brief: '做靠谱的分析师。',
        q: [
          { stem: '数据分析的伦理要求包括：', options: ['数据隐私、不误导、可解释', '只看结果', '随意使用', '无需说明'], answer: 0, explain: '伦理。' },
          { stem: '面对不确定结论应：', options: ['说明置信度与局限', '夸大', '隐瞒', '编造'], answer: 0, explain: '诚实。' },
          { stem: '实习期间最重要的是：', options: ['主动沟通、及时反馈', '少说话', '只做分内', '等安排'], answer: 0, explain: '主动。' }
        ],
        doc: { lead: '这一章讲素养。', sections: [
          { id: 'ethics', title: '伦理', html: `<p>隐私、合规、不误导；数据来源与授权。</p>` },
          { id: 'habits', title: '习惯', html: `<p>留痕、复盘、按时交付；保护商业数据。</p>` }
        ], refs: [] } }
    ] },
    { name: '考研与求职', chapters: [
      { title: '考研方向', brief: '统计与数据科学。',
        q: [
          { stem: '统计学考研的常见方向是：', options: ['统计学、应用统计（专硕）、数据科学', '只有统计学', '只有专硕', '只有数据科学'], answer: 0, explain: '多方向。' },
          { stem: '概率论与数理统计在考研中的地位是：', options: ['专业课核心', '不重要', '只考其一', '只考公共课'], answer: 0, explain: '核心。' },
          { stem: '择校最应考虑：', options: ['方向、导师与真题风格', '城市', '学费', '宿舍'], answer: 0, explain: '匹配。' }
        ],
        doc: { lead: '这一章讲方向。', sections: [
          { id: 'paths', title: '方向', html: `<p>统计学（学硕）、应用统计（专硕）、数据科学、生物统计。</p>` },
          { id: 'subjects', title: '科目', html: `<p>政治、英语、数学分析/高等代数（或数学三）、统计学。</p>` }
        ], refs: [] } },
      { title: '专业课复习', brief: '概率与统计。',
        q: [
          { stem: '概率论复习的主线是：', options: ['随机变量—分布—数字特征—极限定理', '只背公式', '只做计算', '只看真题'], answer: 0, explain: '主线。' },
          { stem: '数理统计复习的主线是：', options: ['抽样分布—估计—检验—回归', '只背定义', '只做计算', '只看真题'], answer: 0, explain: '主线。' },
          { stem: '证明题的关键是：', options: ['条件转化与构造', '猜', '背答案', '跳过'], answer: 0, explain: '构造。' }
        ],
        doc: { lead: '这一章讲复习。', sections: [
          { id: 'probability', title: '概率', html: `<p>分布、特征、极限定理；典型计算。</p>` },
          { id: 'statistics', title: '统计', html: `<p>估计、检验、回归；证明与计算并重。</p>` }
        ], refs: [] } },
      { title: '求职方向', brief: '数据、金融、互联网。',
        q: [
          { stem: '统计专业毕业生的常见去向不包括：', options: ['数据分析', '金融风控', '市场研究', '外科医生'], answer: 3, explain: '专业限制。' },
          { stem: '数据分析岗看重：', options: ['统计与编程能力', '只有统计', '只有编程', '只有证书'], answer: 0, explain: '复合。' },
          { stem: '求职最加分的材料是：', options: ['项目与代码作品', '证书数量', '成绩单', '社团'], answer: 0, explain: '作品。' }
        ],
        doc: { lead: '这一章讲就业。', sections: [
          { id: 'paths', title: '路径', html: `<p>互联网数据分析、金融风控、市场研究、医药统计、读博。</p>` },
          { id: 'skills', title: '能力', html: `<p>SQL、Python/R、统计建模、可视化、业务理解。</p>` }
        ], refs: [] } },
      { title: '面试', brief: '展示能力。',
        q: [
          { stem: '数据分析面试常考：', options: ['SQL、概率统计与业务案例', '只有编程', '只有统计', '只有英语'], answer: 0, explain: '综合。' },
          { stem: '讲项目的最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' },
          { stem: '业务案例题的关键是：', options: ['拆解指标、提出验证方案', '给结论', '猜', '回避'], answer: 0, explain: '拆解。' }
        ],
        doc: { lead: '这一章讲面试。', sections: [
          { id: 'sql', title: 'SQL 与统计', html: `<p>窗口函数、关联；概率分布与检验。</p>` },
          { id: 'case', title: '业务案例', html: `<p>指标拆解、A/B 设计、归因；沟通与表达。</p>` }
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
