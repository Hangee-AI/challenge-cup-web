/* ==========================================================
   math-courses.js · 数学与应用数学：12 门课（主干 8 / 出口 4）= 84 关
   ========================================================== */

(function () {
  var MAJOR = 'science-数学与应用数学';
  var TITLES = stageTitlesOf('science');

  var COURSES = [
    { name: '数学分析（一）', chapters: [
      { title: '实数与极限', brief: '分析的基石。',
        q: [
          { stem: '数列极限的 ε-N 定义要求：', options: ['对任意 ε>0 存在 N，n>N 时 |a_n−a|<ε', '存在 ε', '对某个 ε', 'n 足够大即可'], answer: 0, explain: '定义。' },
          { stem: '单调有界数列：', options: ['必收敛', '必发散', '可能收敛', '无极限'], answer: 0, explain: '准则。' },
          { stem: '确界原理说的是：', options: ['非空有上界的数集有上确界', '所有集合有界', '极限存在', '连续'], answer: 0, explain: '确界。' }
        ],
        doc: { lead: '这一章讲极限。', sections: [
          { id: 'real', title: '实数', html: `<p>确界原理、阿基米德性、稠密性；实数的完备性。</p>` },
          { id: 'limit', title: '极限', html: `<p>ε-N 定义、性质、夹逼、单调有界；两个重要极限。</p>` }
        ], refs: [] } },
      { title: '连续', brief: '极限等于函数值。',
        q: [
          { stem: '闭区间上连续函数的性质不包括：', options: ['有界性', '最值定理', '介值定理', '可导性'], answer: 3, explain: '连续不保证可导。' },
          { stem: '间断点的类型包括：', options: ['可去、跳跃、无穷、振荡', '只有可去', '只有跳跃', '只有无穷'], answer: 0, explain: '四类。' },
          { stem: '一致连续与连续的区别是：', options: ['δ 是否与点无关', '是否连续', '是否有界', '是否可导'], answer: 0, explain: '一致。' }
        ],
        doc: { lead: '这一章讲连续。', sections: [
          { id: 'continuity', title: '连续', html: `<p>定义、间断点分类、局部性质。</p>` },
          { id: 'uniform', title: '一致连续', html: `<p>Cantor 定理；闭区间上连续 ⇒ 一致连续。</p>` }
        ], refs: [] } },
      { title: '导数与微分', brief: '变化率。',
        q: [
          { stem: '可导与连续的关系是：', options: ['可导必连续，反之不然', '等价', '连续必可导', '无关'], answer: 0, explain: '蕴含。' },
          { stem: '微分是：', options: ['增量的线性主部', '导数', '积分', '极限'], answer: 0, explain: '线性主部。' },
          { stem: '高阶导数的莱布尼茨公式用于：', options: ['乘积的高阶导', '商的导数', '复合函数', '反函数'], answer: 0, explain: '乘积。' }
        ],
        doc: { lead: '这一章讲导数。', sections: [
          { id: 'derivative', title: '导数', html: `<p>定义、几何与物理意义；求导法则、隐函数、参数方程。</p>` },
          { id: 'differential', title: '微分', html: `<p>可微与可导；一阶微分形式不变性；高阶导数。</p>` }
        ], refs: [] } },
      { title: '微分中值定理', brief: '连接局部与整体。',
        q: [
          { stem: '拉格朗日中值定理的条件是：', options: ['闭区间连续、开区间可导', '只需连续', '只需可导', '无要求'], answer: 0, explain: '条件。' },
          { stem: '泰勒公式的作用是：', options: ['用多项式逼近函数', '求积分', '解方程', '判敛'], answer: 0, explain: '逼近。' },
          { stem: '洛必达法则适用于：', options: ['0/0 或 ∞/∞ 型', '所有极限', '只有 0/0', '只有 ∞/∞'], answer: 0, explain: '未定式。' }
        ],
        doc: { lead: '这一章讲定理。', sections: [
          { id: 'mvt', title: '中值定理', html: `<p>罗尔、拉格朗日、柯西；几何意义与证明。</p>` },
          { id: 'taylor', title: '泰勒与洛必达', html: `<p>泰勒展开、余项；未定式极限。</p>` }
        ], refs: [] } },
      { title: '不定积分', brief: '求导的逆。',
        q: [
          { stem: '∫x²dx 等于：', options: ['x³/3 + C', '2x + C', 'x³ + C', '3x² + C'], answer: 0, explain: '幂函数。' },
          { stem: '分部积分公式是：', options: ['∫u dv = uv − ∫v du', 'uv + ∫v du', '∫u∫v', 'u′v′'], answer: 0, explain: '分部。' },
          { stem: '有理函数积分的关键是：', options: ['部分分式分解', '换元唯一', '分部唯一', '查表'], answer: 0, explain: '部分分式。' }
        ],
        doc: { lead: '这一章讲积分。', sections: [
          { id: 'basic', title: '基本方法', html: `<p>换元、分部、部分分式；三角有理式。</p>` },
          { id: 'table', title: '基本表', html: `<p>幂、指数、对数、三角、反三角；递推公式。</p>` }
        ], refs: [] } },
      { title: '定积分', brief: '面积与总量。',
        q: [
          { stem: '牛顿-莱布尼茨公式是：', options: ['∫ₐᵇf = F(b) − F(a)', 'F(a) − F(b)', 'f(b) − f(a)', '∫f′'], answer: 0, explain: '公式。' },
          { stem: '定积分的性质不包括：', options: ['线性', '区间可加', '保号', '与积分变量符号无关但可任意换元不换限'], answer: 3, explain: '换元需换限。' },
          { stem: '反常积分收敛的判别常用：', options: ['比较判别法', '夹逼', '中值定理', '洛必达'], answer: 0, explain: '比较。' }
        ],
        doc: { lead: '这一章讲定积分。', sections: [
          { id: 'definition', title: '定义', html: `<p>黎曼和、可积条件；性质与中值定理。</p>` },
          { id: 'improper', title: '反常积分', html: `<p>无穷限与瑕积分；收敛判别。</p>` }
        ], refs: [] } },
      { title: '级数', brief: '无穷相加。',
        q: [
          { stem: 'p 级数收敛的条件是：', options: ['p > 1', 'p < 1', 'p = 1', '任意'], answer: 0, explain: 'p>1。' },
          { stem: '绝对收敛与条件收敛的关系是：', options: ['绝对收敛 ⇒ 收敛', '等价', '条件收敛更强', '无关'], answer: 0, explain: '蕴含。' },
          { stem: '幂级数的收敛半径可用：', options: ['比值法或根值法', '夹逼', '中值定理', '洛必达'], answer: 0, explain: '求半径。' }
        ],
        doc: { lead: '这一章讲级数。', sections: [
          { id: 'series', title: '数项级数', html: `<p>正项级数判别、交错级数、绝对收敛。</p>` },
          { id: 'power', title: '函数项级数', html: `<p>幂级数、收敛半径、逐项求导与积分；一致收敛。</p>` }
        ], refs: [] } },
      { title: '应用与训练', brief: '把分析用起来。',
        q: [
          { stem: '数学分析的核心方法是：', options: ['ε 语言与估计', '公式套用', '计算速度', '记忆'], answer: 0, explain: '估计。' },
          { stem: '证明题的关键是：', options: ['找到合适的估计与构造', '猜答案', '背例题', '跳过'], answer: 0, explain: '构造。' },
          { stem: '提高分析能力的有效方式是：', options: ['大量做题并总结方法', '只看答案', '只背定理', '只听课'], answer: 0, explain: '练习。' }
        ],
        doc: { lead: '这一章讲训练。', sections: [
          { id: 'method', title: '方法', html: `<p>ε-δ 证明、估计技巧、反例构造；一题多解。</p>` },
          { id: 'habit', title: '习惯', html: `<p>写清条件、逐步推理、检验特例；错题归因。</p>` }
        ], refs: [] } }
    ] },
    { name: '高等代数（一）', chapters: [
      { title: '行列式', brief: '一个数。',
        q: [
          { stem: '交换两行，行列式：', options: ['变号', '不变', '乘 2', '变 0'], answer: 0, explain: '反对称。' },
          { stem: '上三角行列式等于：', options: ['对角元乘积', '对角元和', '1', '0'], answer: 0, explain: '乘积。' },
          { stem: '行列式为 0 意味着矩阵：', options: ['不可逆', '可逆', '对称', '正交'], answer: 0, explain: '奇异。' }
        ],
        doc: { lead: '这一章讲行列式。', sections: [
          { id: 'definition', title: '定义', html: `<p>逆序数定义、按行展开；几何意义（体积）。</p>` },
          { id: 'properties', title: '性质', html: `<p>换行变号、倍加不变、按行列展开；范德蒙德。</p>` }
        ], refs: [] } },
      { title: '矩阵', brief: '线性变换的表示。',
        q: [
          { stem: '矩阵乘法 AB 有意义要求：', options: ['A 的列数等于 B 的行数', '行数相等', '都是方阵', '元素非零'], answer: 0, explain: '维度。' },
          { stem: '(AB)^T 等于：', options: ['B^T A^T', 'A^T B^T', 'AB', 'A^T + B^T'], answer: 0, explain: '反序。' },
          { stem: '初等变换对秩的影响是：', options: ['不改变', '改变', '可能改变', '减半'], answer: 0, explain: '不变。' }
        ],
        doc: { lead: '这一章讲矩阵。', sections: [
          { id: 'operations', title: '运算', html: `<p>加法、数乘、乘法、转置、分块；逆矩阵。</p>` },
          { id: 'rank', title: '秩', html: `<p>行阶梯形、非零子式；初等变换不改变秩。</p>` }
        ], refs: [] } },
      { title: '线性方程组', brief: '解的结构。',
        q: [
          { stem: 'Ax=b 有解的充要条件是：', options: ['r(A) = r(A|b)', 'r(A) = n', 'det A ≠ 0', 'b = 0'], answer: 0, explain: '秩相等。' },
          { stem: '齐次方程组有非零解的条件是：', options: ['r(A) < n', 'r(A) = n', 'det A ≠ 0', 'b ≠ 0'], answer: 0, explain: '秩亏。' },
          { stem: '基础解系含向量个数为：', options: ['n − r', 'r', 'n', '1'], answer: 0, explain: '自由变量。' }
        ],
        doc: { lead: '这一章讲方程组。', sections: [
          { id: 'gauss', title: '消元', html: `<p>高斯消元、阶梯形、回代；矩阵形式。</p>` },
          { id: 'structure', title: '结构', html: `<p>特解 + 齐次通解；基础解系与维数。</p>` }
        ], refs: [] } },
      { title: '向量空间', brief: '线性结构。',
        q: [
          { stem: '向量组线性无关的条件是：', options: ['只有零组合等于零', '存在非零组合等于零', '个数大于维数', '含有零向量'], answer: 0, explain: '无关。' },
          { stem: '基与维数的关系是：', options: ['基中向量个数等于维数', '无关', '基越大越好', '维数固定为 3'], answer: 0, explain: '定义。' },
          { stem: '子空间的交与和：', options: ['仍是子空间', '不是子空间', '可能是集合', '无意义'], answer: 0, explain: '封闭。' }
        ],
        doc: { lead: '这一章讲空间。', sections: [
          { id: 'basis', title: '基与维数', html: `<p>线性相关、极大无关组、坐标；维数公式。</p>` },
          { id: 'subspace', title: '子空间', html: `<p>交、和、直和；维数公式 dim(U+V)=dimU+dimV−dim(U∩V)。</p>` }
        ], refs: [] } },
      { title: '线性变换', brief: '空间到空间。',
        q: [
          { stem: '线性变换由什么唯一确定？', options: ['基的像', '定义域', '值域', '矩阵大小'], answer: 0, explain: '基像。' },
          { stem: '线性变换在不同基下的矩阵是：', options: ['相似的', '相同的', '合同的', '无关的'], answer: 0, explain: '相似。' },
          { stem: '核与像的维数关系是：', options: ['dim ker + dim im = dim V', '相等', '无关', '和为 0'], answer: 0, explain: '秩-零化度。' }
        ],
        doc: { lead: '这一章讲变换。', sections: [
          { id: 'matrix', title: '矩阵表示', html: `<p>过渡矩阵、相似变换；同一变换不同基。</p>` },
          { id: 'kernel', title: '核与像', html: `<p>秩-零化度定理；单射、满射与可逆。</p>` }
        ], refs: [] } },
      { title: '特征值与对角化', brief: '不变量。',
        q: [
          { stem: '特征值满足：', options: ['det(A − λI) = 0', 'det A = 0', 'Av = 0', 'A = λI'], answer: 0, explain: '特征方程。' },
          { stem: 'n 阶矩阵可对角化的充要条件是：', options: ['有 n 个线性无关特征向量', '有 n 个特征值', 'det ≠ 0', '对称'], answer: 0, explain: '充要。' },
          { stem: '实对称矩阵一定可以：', options: ['正交对角化', '不可对角化', '复对角化唯一', '相似于零'], answer: 0, explain: '谱定理。' }
        ],
        doc: { lead: '这一章讲特征值。', sections: [
          { id: 'eigen', title: '特征值', html: `<p>特征多项式、迹与行列式；几何重数与代数重数。</p>` },
          { id: 'diagonal', title: '对角化', html: `<p>可对角化条件；实对称矩阵正交对角化；若尔当形。</p>` }
        ], refs: [] } },
      { title: '二次型', brief: '二次齐次多项式。',
        q: [
          { stem: '二次型的矩阵通常取：', options: ['对称矩阵', '对角矩阵', '三角矩阵', '任意'], answer: 0, explain: '对称化。' },
          { stem: '正定矩阵的判据是：', options: ['所有顺序主子式为正', 'det > 0', '迹 > 0', '秩满'], answer: 0, explain: 'Sylvester。' },
          { stem: '正交变换化二次型为标准形，系数是：', options: ['特征值', '奇异值', '对角元', '秩'], answer: 0, explain: '特征值。' }
        ],
        doc: { lead: '这一章讲二次型。', sections: [
          { id: 'matrix', title: '矩阵表示', html: `<p>交叉项系数取半；合同变换与惯性指数。</p>` },
          { id: 'positive', title: '正定', html: `<p>顺序主子式、特征值、合同标准形；半正定与负定。</p>` }
        ], refs: [] } }
    ] },
    { name: '解析几何', chapters: [
      { title: '向量代数', brief: '有方向的量。',
        q: [
          { stem: '点积为零说明：', options: ['两向量垂直', '平行', '相等', '反向'], answer: 0, explain: '正交。' },
          { stem: '叉积的几何意义是：', options: ['平行四边形面积', '长度', '角度', '距离'], answer: 0, explain: '面积。' },
          { stem: '混合积为零说明：', options: ['三向量共面', '两两垂直', '单位向量', '共线'], answer: 0, explain: '共面。' }
        ],
        doc: { lead: '这一章讲向量。', sections: [
          { id: 'product', title: '三种乘积', html: `<p>点积、叉积、混合积；坐标表示与几何意义。</p>` },
          { id: 'application', title: '应用', html: `<p>夹角、面积、体积、投影；距离公式。</p>` }
        ], refs: [] } },
      { title: '平面与直线', brief: '空间的位置关系。',
        q: [
          { stem: '平面方程的法向量是：', options: ['与平面垂直的向量', '平面内向量', '切线', '原点'], answer: 0, explain: '法向。' },
          { stem: '直线与平面的位置关系包括：', options: ['平行、相交、在平面内', '只有相交', '只有平行', '只有重合'], answer: 0, explain: '三种。' },
          { stem: '两直线异面的判据是：', options: ['不平行且不相交', '不平行', '不相交', '方向向量不平行'], answer: 0, explain: '异面。' }
        ],
        doc: { lead: '这一章讲位置。', sections: [
          { id: 'plane', title: '平面', html: `<p>点法式、一般式；点到平面距离。</p>` },
          { id: 'line', title: '直线', html: `<p>对称式、参数式；线线、线面关系；夹角与距离。</p>` }
        ], refs: [] } },
      { title: '曲面与曲线', brief: '空间图形。',
        q: [
          { stem: '球面方程的标准形式是：', options: ['(x−a)²+(y−b)²+(z−c)² = R²', 'x²+y² = 1', 'z = x²', 'xyz = 1'], answer: 0, explain: '球。' },
          { stem: '柱面与锥面的区别是：', options: ['母线是否平行/过定点', '是否二次', '是否闭合', '是否有顶点'], answer: 0, explain: '生成方式。' },
          { stem: '旋转曲面由：', options: ['曲线绕轴旋转生成', '平面平移', '直线平移', '点移动'], answer: 0, explain: '旋转。' }
        ],
        doc: { lead: '这一章讲曲面。', sections: [
          { id: 'surface', title: '曲面', html: `<p>柱面、锥面、旋转曲面；一般方程与参数方程。</p>` },
          { id: 'curve', title: '曲线', html: `<p>参数方程、投影；螺旋线；曲率与挠率初步。</p>` }
        ], refs: [] } },
      { title: '二次曲面', brief: '分类。',
        q: [
          { stem: '椭球面的方程是：', options: ['x²/a²+y²/b²+z²/c²=1', 'x²/a²−y²/b²=1', 'z = x²+y²', 'xy = 1'], answer: 0, explain: '椭球。' },
          { stem: '单叶双曲面的特点是：', options: ['有直母线', '无实点', '是平面', '是球'], answer: 0, explain: '直纹。' },
          { stem: '二次曲面分类的依据是：', options: ['二次型标准形与不变量', '大小', '位置', '颜色'], answer: 0, explain: '不变量。' }
        ],
        doc: { lead: '这一章讲二次曲面。', sections: [
          { id: 'types', title: '类型', html: `<p>椭球、双曲面、抛物面、柱面、锥面；标准方程。</p>` },
          { id: 'classification', title: '分类', html: `<p>坐标变换、不变量；直纹面与截痕法。</p>` }
        ], refs: [] } },
      { title: '坐标变换', brief: '换一个看法。',
        q: [
          { stem: '平移变换的作用是：', options: ['把原点移到指定点', '旋转', '缩放', '投影'], answer: 0, explain: '平移。' },
          { stem: '旋转变换保持：', options: ['长度与夹角', '坐标', '原点', '方向'], answer: 0, explain: '正交。' },
          { stem: '坐标变换的目的是：', options: ['化简方程、揭示几何特征', '增加计算', '装饰', '改变图形'], answer: 0, explain: '化简。' }
        ],
        doc: { lead: '这一章讲变换。', sections: [
          { id: 'translation', title: '平移', html: `<p>坐标平移；化简一次项。</p>` },
          { id: 'rotation', title: '旋转', html: `<p>正交变换、主轴；化二次型为标准形。</p>` }
        ], refs: [] } },
      { title: '曲线与曲面的一般理论', brief: '更一般的视角。',
        q: [
          { stem: '参数方程的优势是：', options: ['便于描述运动与计算', '更简单', '更短', '无需参数'], answer: 0, explain: '参数。' },
          { stem: '曲率描述：', options: ['曲线弯曲程度', '长度', '面积', '方向'], answer: 0, explain: '曲率。' },
          { stem: '挠率描述：', options: ['曲线偏离平面的程度', '弯曲', '长度', '速度'], answer: 0, explain: '挠率。' }
        ],
        doc: { lead: '这一章讲理论。', sections: [
          { id: 'param', title: '参数化', html: `<p>参数曲线、光滑性、切向量；弧长参数。</p>` },
          { id: 'curvature', title: '曲率', html: `<p>曲率、挠率、Frenet 标架；主法向量。</p>` }
        ], refs: [] } },
      { title: '射影几何初步', brief: '无穷远点。',
        q: [
          { stem: '射影平面与欧氏平面的区别是：', options: ['增加了无穷远点', '维度不同', '无坐标', '不可度量'], answer: 0, explain: '无穷远。' },
          { stem: '齐次坐标的作用是：', options: ['统一表示有限点与无穷远点', '简化计算', '表示向量', '测距'], answer: 0, explain: '齐次。' },
          { stem: '交比是：', options: ['射影不变量', '长度比', '面积比', '角度'], answer: 0, explain: '不变量。' }
        ],
        doc: { lead: '这一章讲射影。', sections: [
          { id: 'projective', title: '射影平面', html: `<p>齐次坐标、无穷远线；射影变换。</p>` },
          { id: 'invariant', title: '不变量', html: `<p>交比、对偶原理；圆锥曲线的射影分类。</p>` }
        ], refs: [] } },
      { title: '应用与计算', brief: '几何的用处。',
        q: [
          { stem: '解析几何的核心思想是：', options: ['用坐标与方程研究图形', '只画图', '只计算', '只证明'], answer: 0, explain: '坐标法。' },
          { stem: '空间距离与夹角问题常用：', options: ['向量方法', '纯几何', '三角函数唯一', '微积分'], answer: 0, explain: '向量。' },
          { stem: '提高解题能力的有效方式是：', options: ['画图 + 代数化 + 检验', '背公式', '只算不画', '只画不算'], answer: 0, explain: '结合。' }
        ],
        doc: { lead: '这一章讲应用。', sections: [
          { id: 'method', title: '方法', html: `<p>建系、设点、列方程、求解；几何直观与代数计算结合。</p>` },
          { id: 'practice', title: '训练', html: `<p>距离、夹角、轨迹、截面；一题多解。</p>` }
        ], refs: [] } }
    ] },
    { name: '数学分析（二）', chapters: [
      { title: '多元函数', brief: '多维的世界。',
        q: [
          { stem: '多元函数的极限要求：', options: ['沿任意路径趋于同一点', '沿坐标轴', '沿直线', '沿一条路径'], answer: 0, explain: '任意路径。' },
          { stem: '偏导数存在与连续的关系是：', options: ['偏导存在不保证连续', '保证连续', '等价', '无关'], answer: 0, explain: '不保证。' },
          { stem: '全微分存在的充分条件是：', options: ['偏导连续', '偏导存在', '连续', '有界'], answer: 0, explain: '充分。' }
        ],
        doc: { lead: '这一章讲多元。', sections: [
          { id: 'limit', title: '极限与连续', html: `<p>多重极限、路径；连续与有界。</p>` },
          { id: 'differential', title: '偏导与全微分', html: `<p>偏导、全微分、可微的充分条件；梯度。</p>` }
        ], refs: [] } },
      { title: '多元微分学', brief: '链式与极值。',
        q: [
          { stem: '多元复合函数求导用：', options: ['链式法则（矩阵形式）', '分部积分', '中值定理', '洛必达'], answer: 0, explain: '链式。' },
          { stem: '条件极值用：', options: ['拉格朗日乘数法', '洛必达', '泰勒', '积分'], answer: 0, explain: '乘数法。' },
          { stem: '黑塞矩阵正定对应：', options: ['极小值', '极大值', '鞍点', '不确定'], answer: 0, explain: '极小。' }
        ],
        doc: { lead: '这一章讲微分。', sections: [
          { id: 'chain', title: '链式', html: `<p>复合与隐函数求导；雅可比矩阵。</p>` },
          { id: 'extremum', title: '极值', html: `<p>无条件极值、条件极值；拉格朗日乘数、黑塞矩阵。</p>` }
        ], refs: [] } },
      { title: '重积分', brief: '体积与总量。',
        q: [
          { stem: '二重积分化为累次积分的条件是：', options: ['区域可表示为 X 型或 Y 型', '函数连续唯一', '区域为圆', '函数可导'], answer: 0, explain: '区域。' },
          { stem: '极坐标下的面积元素是：', options: ['r dr dθ', 'dr dθ', 'r² dr dθ', 'dθ'], answer: 0, explain: '雅可比。' },
          { stem: '三重积分的柱坐标体积元素是：', options: ['r dr dθ dz', 'dr dθ dz', 'ρ²sinφ dρdφdθ', 'r² dr dθ'], answer: 0, explain: '柱坐标。' }
        ],
        doc: { lead: '这一章讲重积分。', sections: [
          { id: 'double', title: '二重', html: `<p>累次积分、换序、极坐标；应用（面积、质心）。</p>` },
          { id: 'triple', title: '三重', html: `<p>直角、柱、球坐标；雅可比行列式。</p>` }
        ], refs: [] } },
      { title: '曲线与曲面积分', brief: '沿线的累加。',
        q: [
          { stem: '第一类曲线积分对方向：', options: ['不敏感', '敏感', '只与起点有关', '只与终点有关'], answer: 0, explain: '弧长。' },
          { stem: '格林公式把曲线积分与：', options: ['二重积分联系', '三重积分', '级数', '导数'], answer: 0, explain: '格林。' },
          { stem: '高斯公式把闭合曲面积分化为：', options: ['三重积分', '二重积分', '曲线积分', '级数'], answer: 0, explain: '散度。' }
        ],
        doc: { lead: '这一章讲积分。', sections: [
          { id: 'line', title: '曲线', html: `<p>第一/二类曲线积分；与路径无关的条件。</p>` },
          { id: 'surface', title: '曲面', html: `<p>第一/二类曲面积分；格林、高斯、斯托克斯公式。</p>` }
        ], refs: [] } },
      { title: '级数', brief: '无穷与函数。',
        q: [
          { stem: '函数项级数一致收敛的作用是：', options: ['保证极限与积分/求导可交换', '加快收敛', '减少项数', '简化计算'], answer: 0, explain: '交换。' },
          { stem: '幂级数在收敛区间内可以：', options: ['逐项求导与积分', '任意取值', '不连续', '只有有限项'], answer: 0, explain: '解析。' },
          { stem: '傅里叶级数用于：', options: ['周期函数展开', '任意函数', '只有多项式', '只有指数'], answer: 0, explain: '周期。' }
        ],
        doc: { lead: '这一章讲级数。', sections: [
          { id: 'uniform', title: '一致收敛', html: `<p>Weierstrass 判别、极限交换；幂级数性质。</p>` },
          { id: 'fourier', title: '傅里叶', html: `<p>三角级数、系数公式、收敛定理；吉布斯现象。</p>` }
        ], refs: [] } },
      { title: '含参积分', brief: '参数的影响。',
        q: [
          { stem: '含参积分求导的条件是：', options: ['被积函数与偏导连续', '只需连续', '只需可导', '无要求'], answer: 0, explain: '条件。' },
          { stem: '含参反常积分一致收敛可用：', options: ['Weierstrass 判别、Dirichlet 判别', '比值法', '根值法', '夹逼'], answer: 0, explain: '判别。' },
          { stem: '含参积分的应用包括：', options: ['计算定积分、解微分方程', '只算面积', '只求导', '无应用'], answer: 0, explain: '应用。' }
        ],
        doc: { lead: '这一章讲含参。', sections: [
          { id: 'proper', title: '正常', html: `<p>连续性、可导性、可积性；莱布尼茨法则。</p>` },
          { id: 'improper', title: '反常', html: `<p>一致收敛判别；欧拉积分（Γ、B 函数）。</p>` }
        ], refs: [] } },
      { title: '应用与训练', brief: '把分析用起来。',
        q: [
          { stem: '多元分析的关键是：', options: ['把问题化为一元或标准形', '硬算', '背公式', '跳过'], answer: 0, explain: '化归。' },
          { stem: '证明题常用：', options: ['估计、构造、反例', '猜', '背', '查表'], answer: 0, explain: '方法。' },
          { stem: '提高能力的有效方式是：', options: ['大量练习并总结', '只看答案', '只听课', '只背定理'], answer: 0, explain: '练习。' }
        ],
        doc: { lead: '这一章讲训练。', sections: [
          { id: 'method', title: '方法', html: `<p>化归、估计、对称性、变量替换；几何直观。</p>` },
          { id: 'habit', title: '习惯', html: `<p>写清条件、检验特例、总结错题。</p>` }
        ], refs: [] } }
    ] },
    { name: '高等代数（二）', chapters: [
      { title: '多项式', brief: '代数的起点。',
        q: [
          { stem: '多项式整除的性质包括：', options: ['带余除法、最大公因式', '只有除法', '只有因式', '无性质'], answer: 0, explain: '整除。' },
          { stem: '不可约多项式的判断常用：', options: ['艾森斯坦判别法', '韦达定理', '判别式', '因式分解'], answer: 0, explain: '判别。' },
          { stem: '代数基本定理说的是：', options: ['复系数多项式必有根', '实系数必有实根', '有理根存在', '无根'], answer: 0, explain: '复根。' }
        ],
        doc: { lead: '这一章讲多项式。', sections: [
          { id: 'division', title: '整除', html: `<p>带余除法、辗转相除、互素；唯一分解。</p>` },
          { id: 'roots', title: '根', html: `<p>重根、韦达定理；有理根判定；代数基本定理。</p>` }
        ], refs: [] } },
      { title: '矩阵的标准形', brief: '化简矩阵。',
        q: [
          { stem: '相似标准形的作用是：', options: ['揭示线性变换的结构', '简化计算唯一', '求逆', '求秩'], answer: 0, explain: '结构。' },
          { stem: '若尔当标准形存在的条件是：', options: ['在代数闭域上必有', '只需实矩阵', '只需可逆', '需对称'], answer: 0, explain: '代数闭。' },
          { stem: '不变因子与初等因子：', options: ['决定相似类', '决定合同类', '无关系', '只决定秩'], answer: 0, explain: '相似。' }
        ],
        doc: { lead: '这一章讲标准形。', sections: [
          { id: 'lambda', title: 'λ-矩阵', html: `<p>初等变换、不变因子、初等因子；行列式因子。</p>` },
          { id: 'jordan', title: '若尔当形', html: `<p>若尔当块、相似判定；最小多项式。</p>` }
        ], refs: [] } },
      { title: '欧氏空间', brief: '带内积的空间。',
        q: [
          { stem: '施密特正交化把：', options: ['线性无关组化为正交组', '任意组正交化', '矩阵对角化', '求逆'], answer: 0, explain: '正交化。' },
          { stem: '正交变换保持：', options: ['内积与长度', '坐标', '原点唯一', '方向'], answer: 0, explain: '保距。' },
          { stem: '正交补的维数关系是：', options: ['dim U + dim U⊥ = n', '相等', '无关', '和为 0'], answer: 0, explain: '直和。' }
        ],
        doc: { lead: '这一章讲欧氏空间。', sections: [
          { id: 'gram', title: '正交化', html: `<p>内积、范数、夹角；Gram-Schmidt；正交补。</p>` },
          { id: 'orthogonal', title: '正交变换', html: `<p>正交矩阵、对称变换；谱定理。</p>` }
        ], refs: [] } },
      { title: '双线性型与二次型', brief: '两个变量的线性。',
        q: [
          { stem: '双线性型的矩阵表示是：', options: ['对称或一般方阵', '只有对角', '只能是单位阵', '无矩阵'], answer: 0, explain: '矩阵。' },
          { stem: '合同变换保持：', options: ['二次型的秩与惯性指数', '特征值', '行列式唯一', '迹'], answer: 0, explain: '惯性。' },
          { stem: '惯性定理说的是：', options: ['正负惯性指数在合同下不变', '特征值不变', '秩不变唯一', '行列式不变'], answer: 0, explain: '惯性。' }
        ],
        doc: { lead: '这一章讲双线性。', sections: [
          { id: 'bilinear', title: '双线性型', html: `<p>矩阵表示、对称与反对称；合同变换。</p>` },
          { id: 'inertia', title: '惯性', html: `<p>标准形、惯性指数；正定与半正定判别。</p>` }
        ], refs: [] } },
      { title: '张量与多重线性', brief: '更高阶。',
        q: [
          { stem: '张量是：', options: ['多重线性映射', '矩阵', '向量', '标量'], answer: 0, explain: '多重线性。' },
          { stem: '张量积的维数是：', options: ['两空间维数之积', '之和', '之差', '相等'], answer: 0, explain: '乘积。' },
          { stem: '外积（楔积）的性质是：', options: ['反对称', '对称', '线性唯一', '无性质'], answer: 0, explain: '反对称。' }
        ],
        doc: { lead: '这一章讲张量。', sections: [
          { id: 'tensor', title: '张量积', html: `<p>多重线性映射、张量积的泛性质；坐标表示。</p>` },
          { id: 'exterior', title: '外积', html: `<p>反对称张量、行列式；外代数初步。</p>` }
        ], refs: [] } },
      { title: '群环域初步', brief: '抽象结构。',
        q: [
          { stem: '群的定义要求：', options: ['封闭、结合、单位元、逆元', '只有封闭', '只有结合', '只有逆元'], answer: 0, explain: '四条。' },
          { stem: '环与域的区别是：', options: ['域中非零元可逆', '环有加法', '域无乘法', '环无单位元'], answer: 0, explain: '可逆。' },
          { stem: '同态基本定理说的是：', options: ['同态像同构于商结构', '同态即同构', '无关系', '只对群'], answer: 0, explain: '商。' }
        ],
        doc: { lead: '这一章讲结构。', sections: [
          { id: 'group', title: '群', html: `<p>子群、陪集、拉格朗日定理；同态与商群。</p>` },
          { id: 'ring', title: '环与域', html: `<p>理想、商环；域的特征；有限域初步。</p>` }
        ], refs: [] } },
      { title: '应用与计算', brief: '代数之用。',
        q: [
          { stem: '线性代数在数据中的应用是：', options: ['降维、最小二乘、图论', '只有解方程', '只有求逆', '无应用'], answer: 0, explain: '多应用。' },
          { stem: '矩阵分解的常见形式包括：', options: ['LU、QR、SVD', '只有 LU', '只有 QR', '只有 SVD'], answer: 0, explain: '多种。' },
          { stem: '抽象代数的作用是：', options: ['统一结构、启发新问题', '只做题', '只证明', '无作用'], answer: 0, explain: '统一。' }
        ],
        doc: { lead: '这一章讲应用。', sections: [
          { id: 'decomposition', title: '分解', html: `<p>LU、QR、SVD、特征分解；数值稳定性。</p>` },
          { id: 'structure', title: '结构', html: `<p>抽象化与统一；编码、密码学、对称性。</p>` }
        ], refs: [] } }
    ] },
    { name: '常微分方程', chapters: [
      { title: '一阶方程', brief: '最简单的动态。',
        q: [
          { stem: '可分离变量方程的解法是：', options: ['分离后两边积分', '直接积分', '求导', '代入'], answer: 0, explain: '分离。' },
          { stem: '一阶线性方程用：', options: ['积分因子法', '分离变量', '特征方程', '级数'], answer: 0, explain: '积分因子。' },
          { stem: '恰当方程的条件是：', options: ['∂P/∂y = ∂Q/∂x', 'P = Q', '∂P/∂x = ∂Q/∂y', 'P+Q=0'], answer: 0, explain: '恰当。' }
        ],
        doc: { lead: '这一章讲一阶。', sections: [
          { id: 'types', title: '类型', html: `<p>可分离、齐次、线性、伯努利、恰当方程。</p>` },
          { id: 'existence', title: '存在唯一', html: `<p>Picard 迭代、Lipschitz 条件；解的延拓。</p>` }
        ], refs: [] } },
      { title: '高阶线性方程', brief: '叠加原理。',
        q: [
          { stem: '线性方程通解的结构是：', options: ['齐次通解 + 特解', '只有特解', '只有齐次解', '常数'], answer: 0, explain: '结构。' },
          { stem: '朗斯基行列式用于：', options: ['判断解的线性无关', '求积分', '求极限', '判敛'], answer: 0, explain: 'Wronskian。' },
          { stem: '常系数方程用：', options: ['特征方程法', '积分因子', '分离变量', '级数'], answer: 0, explain: '特征根。' }
        ],
        doc: { lead: '这一章讲高阶。', sections: [
          { id: 'structure', title: '结构', html: `<p>齐次解空间、基础解系、Wronskian；常数变易法。</p>` },
          { id: 'constant', title: '常系数', html: `<p>特征根三种情形；待定系数法求特解；共振。</p>` }
        ], refs: [] } },
      { title: '级数解法', brief: '幂级数。',
        q: [
          { stem: '幂级数解法适用于：', options: ['变系数方程在常点附近', '所有方程', '只有常系数', '只有一阶'], answer: 0, explain: '常点。' },
          { stem: '正则奇点处的解法是：', options: ['Frobenius 方法', '幂级数', '特征方程', '积分因子'], answer: 0, explain: 'Frobenius。' },
          { stem: '贝塞尔方程的解是：', options: ['贝塞尔函数', '指数函数', '多项式', '三角函数'], answer: 0, explain: '贝塞尔。' }
        ],
        doc: { lead: '这一章讲级数解。', sections: [
          { id: 'ordinary', title: '常点', html: `<p>幂级数解、收敛半径；递推关系。</p>` },
          { id: 'singular', title: '奇点', html: `<p>正则奇点、Frobenius 级数；贝塞尔与勒让德方程。</p>` }
        ], refs: [] } },
      { title: '线性方程组', brief: '多个变量。',
        q: [
          { stem: '一阶线性方程组可化为：', options: ['矩阵形式 x′ = Ax', '单个方程', '积分方程', '代数方程'], answer: 0, explain: '矩阵。' },
          { stem: '矩阵指数 e^{At} 的作用是：', options: ['给出解的基本矩阵', '求逆', '求秩', '判稳'], answer: 0, explain: '基本解。' },
          { stem: '方程组解的结构由：', options: ['A 的特征值决定', '初值唯一', '常数', '维数'], answer: 0, explain: '特征值。' }
        ],
        doc: { lead: '这一章讲方程组。', sections: [
          { id: 'matrix', title: '矩阵方法', html: `<p>e^{At}、基本解矩阵；若尔当形与解。</p>` },
          { id: 'phase', title: '相平面', html: `<p>二维线性系统的轨线；结点、鞍点、焦点、中心。</p>` }
        ], refs: [] } },
      { title: '稳定性', brief: '长期行为。',
        q: [
          { stem: '李雅普诺夫稳定指：', options: ['初值小扰动导致解长期接近', '解有界', '解收敛到零', '解周期'], answer: 0, explain: '稳定。' },
          { stem: '线性系统渐近稳定的条件是：', options: ['所有特征值实部为负', '特征值为正', '行列式为正', '迹为正'], answer: 0, explain: '负实部。' },
          { stem: '李雅普诺夫函数用于：', options: ['判定非线性系统稳定性', '求解', '求导', '积分'], answer: 0, explain: '函数。' }
        ],
        doc: { lead: '这一章讲稳定。', sections: [
          { id: 'linear', title: '线性', html: `<p>特征值判据；相图分类；临界情形。</p>` },
          { id: 'nonlinear', title: '非线性', html: `<p>李雅普诺夫直接法、线性化；极限环。</p>` }
        ], refs: [] } },
      { title: '数值解法', brief: '算出来。',
        q: [
          { stem: '欧拉法的误差阶是：', options: ['一阶', '二阶', '四阶', '无穷'], answer: 0, explain: '一阶。' },
          { stem: '龙格-库塔法的优点是：', options: ['精度高、稳定区域较好', '简单', '无误差', '不需初值'], answer: 0, explain: 'RK4。' },
          { stem: '刚性方程需要用：', options: ['隐式方法', '显式欧拉', '解析解', '级数'], answer: 0, explain: '隐式。' }
        ],
        doc: { lead: '这一章讲数值。', sections: [
          { id: 'methods', title: '方法', html: `<p>欧拉、改进欧拉、RK4；局部截断误差与阶。</p>` },
          { id: 'stability', title: '稳定性', html: `<p>绝对稳定域、刚性方程；隐式方法。</p>` }
        ], refs: [] } },
      { title: '应用建模', brief: '写出方程。',
        q: [
          { stem: '人口增长的 Logistic 模型加入了：', options: ['环境容量限制', '随机项', '时间延迟', '多物种'], answer: 0, explain: '容量。' },
          { stem: '捕食者-被捕食者模型是：', options: ['Lotka-Volterra 方程组', '单个方程', '线性方程', '代数方程'], answer: 0, explain: 'LV。' },
          { stem: '建模的一般步骤是：', options: ['假设—建模—求解—检验', '直接求解', '先求解后假设', '只做仿真'], answer: 0, explain: '四步。' }
        ],
        doc: { lead: '这一章讲应用。', sections: [
          { id: 'models', title: '模型', html: `<p>人口、传染病、种群、振动、电路；线性与非线性。</p>` },
          { id: 'process', title: '过程', html: `<p>假设、变量、方程、求解、检验与修正。</p>` }
        ], refs: [] } }
    ] },
    { name: '概率论', chapters: [
      { title: '概率空间', brief: '随机性的公理。',
        q: [
          { stem: '概率的三条公理是：', options: ['非负、规范、可列可加', '非负、有界、可加', '对称、规范、可加', '相等、非负、加法'], answer: 0, explain: '柯尔莫哥洛夫。' },
          { stem: '条件概率的定义是：', options: ['P(A|B) = P(AB)/P(B)', 'P(A)P(B)', 'P(A)+P(B)', 'P(A)−P(B)'], answer: 0, explain: '定义。' },
          { stem: '事件独立的条件是：', options: ['P(AB) = P(A)P(B)', '互不相交', '和为 1', '包含'], answer: 0, explain: '独立。' }
        ],
        doc: { lead: '这一章讲公理。', sections: [
          { id: 'space', title: '空间', html: `<p>样本空间、事件域、概率测度；性质与公式。</p>` },
          { id: 'conditional', title: '条件', html: `<p>条件概率、乘法公式、全概率、贝叶斯；独立性。</p>` }
        ], refs: [] } },
      { title: '随机变量', brief: '把结果数字化。',
        q: [
          { stem: '分布函数的性质是：', options: ['单调不减、右连续、极限 0 与 1', '连续可导', '对称', '有界'], answer: 0, explain: '三条。' },
          { stem: '离散型与连续型的区别是：', options: ['取值是否可列', '是否有分布', '是否有期望', '是否独立'], answer: 0, explain: '取值。' },
          { stem: '密度函数满足：', options: ['非负且积分为 1', '单调', '连续', '有界'], answer: 0, explain: '密度。' }
        ],
        doc: { lead: '这一章讲变量。', sections: [
          { id: 'cdf', title: '分布函数', html: `<p>定义与性质；离散型分布律、连续型密度。</p>` },
          { id: 'transform', title: '变换', html: `<p>随机变量函数的分布；雅可比法。</p>` }
        ], refs: [] } },
      { title: '常见分布', brief: '工具箱。',
        q: [
          { stem: '二项分布的期望是：', options: ['np', 'p', 'n/p', 'np(1−p)'], answer: 0, explain: '期望。' },
          { stem: '正态分布 N(μ,σ²) 的标准差是：', options: ['σ', 'σ²', 'μ', '1'], answer: 0, explain: 'σ。' },
          { stem: '泊松分布常用于：', options: ['单位时间事件数', '连续测量', '比例', '分类'], answer: 0, explain: '计数。' }
        ],
        doc: { lead: '这一章讲分布。', sections: [
          { id: 'discrete', title: '离散', html: `<p>0-1、二项、泊松、几何、超几何。</p>` },
          { id: 'continuous', title: '连续', html: `<p>均匀、指数、正态、伽马、卡方、t、F。</p>` }
        ], refs: [] } },
      { title: '数字特征', brief: '概括分布。',
        q: [
          { stem: '方差的性质是：', options: ['Var(aX+b) = a²Var(X)', 'aVar(X)', 'a²+b', 'Var(X)'], answer: 0, explain: '性质。' },
          { stem: '协方差衡量：', options: ['线性相关程度', '独立性', '方差', '均值'], answer: 0, explain: '相关。' },
          { stem: '相关系数的范围是：', options: ['[−1, 1]', '[0, 1]', '全体实数', '[−∞, ∞]'], answer: 0, explain: '范围。' }
        ],
        doc: { lead: '这一章讲特征。', sections: [
          { id: 'expectation', title: '期望', html: `<p>定义、性质、随机变量函数的期望。</p>` },
          { id: 'variance', title: '方差与协方差', html: `<p>方差、协方差、相关系数；不相关与独立。</p>` }
        ], refs: [] } },
      { title: '多维随机变量', brief: '联合分布。',
        q: [
          { stem: '边缘分布可由什么得到？', options: ['联合分布求和或积分', '条件分布', '期望', '方差'], answer: 0, explain: '边缘。' },
          { stem: '独立的条件是：', options: ['联合分布等于边缘乘积', '不相关', '协方差为零', '同分布'], answer: 0, explain: '乘积。' },
          { stem: '二维正态分布的独立与不相关：', options: ['等价', '不等价', '无关', '矛盾'], answer: 0, explain: '等价。' }
        ],
        doc: { lead: '这一章讲多维。', sections: [
          { id: 'joint', title: '联合', html: `<p>联合分布、边缘、条件；独立性。</p>` },
          { id: 'transform', title: '变换', html: `<p>二维变换的雅可比；和的分布、卷积。</p>` }
        ], refs: [] } },
      { title: '极限定理', brief: '大样本。',
        q: [
          { stem: '大数定律说明：', options: ['样本均值依概率收敛到期望', '分布收敛', '方差为零', '独立'], answer: 0, explain: '大数。' },
          { stem: '中心极限定理说明：', options: ['标准化和依分布收敛到正态', '样本均值等于期望', '方差不变', '独立'], answer: 0, explain: 'CLT。' },
          { stem: '切比雪夫不等式的用途是：', options: ['估计概率上界', '精确计算', '求期望', '判独立'], answer: 0, explain: '不等式。' }
        ],
        doc: { lead: '这一章讲极限。', sections: [
          { id: 'lln', title: '大数定律', html: `<p>切比雪夫、辛钦、伯努利；依概率收敛。</p>` },
          { id: 'clt', title: '中心极限定理', html: `<p>林德伯格-列维、棣莫弗-拉普拉斯；应用与近似。</p>` }
        ], refs: [] } },
      { title: '应用与建模', brief: '概率的用处。',
        q: [
          { stem: '贝叶斯公式的应用是：', options: ['由结果推断原因', '求期望', '判独立', '求方差'], answer: 0, explain: '后验。' },
          { stem: '保险与风险中的概率应用是：', options: ['定价与准备金', '装饰', '无应用', '只做统计'], answer: 0, explain: '精算。' },
          { stem: '概率建模的关键是：', options: ['选择合适的分布与假设', '算得快', '公式多', '记忆'], answer: 0, explain: '建模。' }
        ],
        doc: { lead: '这一章讲应用。', sections: [
          { id: 'bayes', title: '贝叶斯', html: `<p>先验与后验；诊断、垃圾邮件、风险评估。</p>` },
          { id: 'model', title: '建模', html: `<p>分布选择、独立假设、参数估计；模拟（蒙特卡洛）。</p>` }
        ], refs: [] } }
    ] },
    { name: '复变函数', chapters: [
      { title: '复数与复变函数', brief: '平面上的数。',
        q: [
          { stem: '复数的模与辐角满足：', options: ['z = r(cosθ + i sinθ)', 'z = r + θ', 'z = rθ', 'z = r/θ'], answer: 0, explain: '三角式。' },
          { stem: '复变函数的极限与连续定义与实函数：', options: ['类似（用模）', '完全不同', '无关', '只对多项式'], answer: 0, explain: '类似。' },
          { stem: '复平面上的区域分为：', options: ['开集、闭集、连通、单连通', '只有开集', '只有闭集', '无拓扑'], answer: 0, explain: '拓扑。' }
        ],
        doc: { lead: '这一章讲复数。', sections: [
          { id: 'complex', title: '复数', html: `<p>代数与几何表示、欧拉公式、乘幂与方根。</p>` },
          { id: 'topology', title: '区域', html: `<p>开集、连通、单连通；边界与闭包。</p>` }
        ], refs: [] } },
      { title: '解析函数', brief: '可导的复函数。',
        q: [
          { stem: '柯西-黎曼方程是：', options: ['u_x = v_y, u_y = −v_x', 'u_x = v_x', 'u_y = v_y', 'u = v'], answer: 0, explain: 'CR。' },
          { stem: '解析函数与调和函数的关系是：', options: ['实部虚部都是调和函数', '无关', '实部调和', '虚部调和'], answer: 0, explain: '调和。' },
          { stem: '解析函数的几何性质是：', options: ['保角（共形）', '保长', '保面积', '保方向唯一'], answer: 0, explain: '共形。' }
        ],
        doc: { lead: '这一章讲解析。', sections: [
          { id: 'cr', title: 'CR 方程', html: `<p>可导与解析；CR 方程与充分条件。</p>` },
          { id: 'harmonic', title: '调和', html: `<p>调和函数、共轭调和函数；共形映射初步。</p>` }
        ], refs: [] } },
      { title: '复积分', brief: '沿曲线的积分。',
        q: [
          { stem: '柯西积分定理说的是：', options: ['解析函数沿闭曲线的积分为零', '积分为 1', '积分存在', '无定义'], answer: 0, explain: '柯西。' },
          { stem: '柯西积分公式给出：', options: ['函数值由边界积分表示', '导数公式', '级数', '留数'], answer: 0, explain: '公式。' },
          { stem: '解析函数的高阶导数：', options: ['存在且解析', '可能不存在', '只一阶', '无公式'], answer: 0, explain: '无穷可导。' }
        ],
        doc: { lead: '这一章讲积分。', sections: [
          { id: 'cauchy', title: '柯西定理', html: `<p>单连通区域、复积分定义与性质。</p>` },
          { id: 'formula', title: '积分公式', html: `<p>柯西积分公式、高阶导数公式；刘维尔定理。</p>` }
        ], refs: [] } },
      { title: '级数', brief: '展开。',
        q: [
          { stem: '幂级数的收敛半径可由什么确定？', options: ['系数比值或根值', '积分', '留数', 'CR 方程'], answer: 0, explain: '半径。' },
          { stem: '泰勒级数与洛朗级数的区别是：', options: ['是否含负幂项', '是否收敛', '是否解析', '是否有系数'], answer: 0, explain: '洛朗。' },
          { stem: '解析函数的零点：', options: ['孤立（除非恒零）', '稠密', '无零点', '总是简单'], answer: 0, explain: '孤立。' }
        ],
        doc: { lead: '这一章讲级数。', sections: [
          { id: 'taylor', title: '泰勒', html: `<p>幂级数展开、收敛半径；解析函数的唯一性。</p>` },
          { id: 'laurent', title: '洛朗', html: `<p>环形区域展开、主部；孤立奇点分类。</p>` }
        ], refs: [] } },
      { title: '留数', brief: '积分的捷径。',
        q: [
          { stem: '留数定理把积分化为：', options: ['留数之和乘以 2πi', '导数', '级数', '极限'], answer: 0, explain: '留数。' },
          { stem: '可去奇点处的留数：', options: ['可能为零', '必为 1', '无穷', '不存在'], answer: 0, explain: '可去。' },
          { stem: '留数可用于计算：', options: ['实积分、级数和', '只实积分', '只级数', '只极限'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲留数。', sections: [
          { id: 'residue', title: '留数', html: `<p>定义、计算（极点阶数）；留数定理。</p>` },
          { id: 'application', title: '应用', html: `<p>实积分（有理、三角、无穷）、级数求和、辐角原理。</p>` }
        ], refs: [] } },
      { title: '共形映射', brief: '变形不改角。',
        q: [
          { stem: '共形映射保持：', options: ['角度与方向', '长度', '面积', '距离'], answer: 0, explain: '保角。' },
          { stem: '分式线性变换的性质是：', options: ['把圆/直线映射为圆/直线', '保长', '保面积', '保持原点'], answer: 0, explain: 'Möbius。' },
          { stem: '共形映射的应用是：', options: ['求解边值问题', '求导', '求积分', '判敛'], answer: 0, explain: '边值。' }
        ],
        doc: { lead: '这一章讲映射。', sections: [
          { id: 'mobius', title: '分式线性', html: `<p>交比、保圆性；上半平面到单位圆。</p>` },
          { id: 'application', title: '应用', html: `<p>儒可夫斯基变换、边值问题；黎曼映射定理。</p>` }
        ], refs: [] } },
      { title: '调和函数与边值问题', brief: '拉普拉斯。',
        q: [
          { stem: '调和函数满足：', options: ['Δu = 0', 'Δu = 1', 'u′ = 0', 'u″ = 1'], answer: 0, explain: '拉普拉斯。' },
          { stem: '调和函数的均值性质是：', options: ['圆心值等于圆周平均', '等于最大值', '等于零', '等于边界和'], answer: 0, explain: '均值。' },
          { stem: '狄利克雷问题的解由：', options: ['泊松积分给出', '留数', '级数唯一', 'CR 方程'], answer: 0, explain: '泊松。' }
        ],
        doc: { lead: '这一章讲调和。', sections: [
          { id: 'harmonic', title: '调和', html: `<p>均值性质、最大值原理；共轭调和函数。</p>` },
          { id: 'boundary', title: '边值', html: `<p>狄利克雷问题、泊松积分公式；应用。</p>` }
        ], refs: [] } },
      { title: '应用与训练', brief: '复分析的用处。',
        q: [
          { stem: '复变函数在物理中的应用是：', options: ['流体与电磁场的二维问题', '只有数学', '无应用', '只做计算'], answer: 0, explain: '场论。' },
          { stem: '复分析的核心工具是：', options: ['积分公式与留数', '求导', '级数唯一', 'CR 方程'], answer: 0, explain: '积分。' },
          { stem: '学习复变的有效方式是：', options: ['几何直观 + 计算训练', '只背公式', '只证明', '只计算'], answer: 0, explain: '结合。' }
        ],
        doc: { lead: '这一章讲应用。', sections: [
          { id: 'physics', title: '物理', html: `<p>平面流体、电场、热传导；势函数与流函数。</p>` },
          { id: 'practice', title: '训练', html: `<p>积分计算、级数展开、留数应用；几何理解。</p>` }
        ], refs: [] } }
    ] },
    { name: '数值分析', chapters: [
      { title: '误差与数值稳定性', brief: '算得准吗。',
        q: [
          { stem: '截断误差与舍入误差的区别是：', options: ['方法近似 vs 机器精度', '大小', '正负', '来源唯一'], answer: 0, explain: '两类。' },
          { stem: '数值稳定指：', options: ['误差不被放大', '结果精确', '收敛快', '无误差'], answer: 0, explain: '稳定。' },
          { stem: '条件数衡量：', options: ['问题对扰动的敏感度', '误差大小', '收敛速度', '复杂度'], answer: 0, explain: '条件数。' }
        ],
        doc: { lead: '这一章讲误差。', sections: [
          { id: 'error', title: '误差', html: `<p>绝对/相对误差、截断与舍入；有效数字。</p>` },
          { id: 'stability', title: '稳定性', html: `<p>算法稳定性、条件数；病态问题。</p>` }
        ], refs: [] } },
      { title: '插值', brief: '过点的曲线。',
        q: [
          { stem: '拉格朗日插值的余项与什么有关？', options: ['节点与函数的高阶导数', '节点数唯一', '系数', '区间'], answer: 0, explain: '余项。' },
          { stem: '龙格现象说明：', options: ['高次插值可能震荡', '插值总收敛', '低次更好唯一', '节点无关'], answer: 0, explain: '龙格。' },
          { stem: '样条插值的优势是：', options: ['光滑且稳定', '简单', '高次', '无误差'], answer: 0, explain: '样条。' }
        ],
        doc: { lead: '这一章讲插值。', sections: [
          { id: 'lagrange', title: '拉格朗日', html: `<p>基函数、余项；牛顿插值与差商。</p>` },
          { id: 'spline', title: '样条', html: `<p>分段插值、三次样条；龙格现象与节点选择。</p>` }
        ], refs: [] } },
      { title: '数值积分', brief: '算面积。',
        q: [
          { stem: '梯形公式的代数精度是：', options: ['1 次', '2 次', '3 次', '0 次'], answer: 0, explain: '一次。' },
          { stem: '辛普森公式的代数精度是：', options: ['3 次', '1 次', '2 次', '5 次'], answer: 0, explain: '三次。' },
          { stem: '高斯求积的优势是：', options: ['高精度、少节点', '简单', '无误差', '适合所有'], answer: 0, explain: '高斯。' }
        ],
        doc: { lead: '这一章讲积分。', sections: [
          { id: 'newton', title: '牛顿-科茨', html: `<p>梯形、辛普森；复化公式与误差。</p>` },
          { id: 'gauss', title: '高斯', html: `<p>正交多项式、节点与权；代数精度。</p>` }
        ], refs: [] } },
      { title: '线性方程组数值解', brief: '解方程。',
        q: [
          { stem: '高斯消元的主元选取是为了：', options: ['减少舍入误差', '加快速度唯一', '简化', '求逆'], answer: 0, explain: '主元。' },
          { stem: '迭代法收敛的条件通常与：', options: ['矩阵的谱半径或对角占优', '维数', '系数大小', '右端项'], answer: 0, explain: '收敛。' },
          { stem: '共轭梯度法适用于：', options: ['对称正定稀疏系统', '任意系统', '只有小矩阵', '非线性'], answer: 0, explain: 'CG。' }
        ],
        doc: { lead: '这一章讲方程组。', sections: [
          { id: 'direct', title: '直接法', html: `<p>LU、Cholesky、主元；条件数与误差。</p>` },
          { id: 'iterative', title: '迭代法', html: `<p>Jacobi、Gauss-Seidel、SOR、CG；收敛性。</p>` }
        ], refs: [] } },
      { title: '非线性方程', brief: '求根。',
        q: [
          { stem: '牛顿法的收敛速度是：', options: ['二次（单根附近）', '线性', '常数', '三次'], answer: 0, explain: '二次。' },
          { stem: '二分法的优点是：', options: ['必收敛但慢', '快', '无需区间', '精度高'], answer: 0, explain: '二分。' },
          { stem: '牛顿法的风险是：', options: ['初值敏感、可能发散', '太慢', '无精度', '不能编程'], answer: 0, explain: '风险。' }
        ],
        doc: { lead: '这一章讲求根。', sections: [
          { id: 'bracket', title: '区间法', html: `<p>二分、试位法；收敛速度。</p>` },
          { id: 'newton', title: '牛顿类', html: `<p>牛顿、割线、弦截；重根与收敛性。</p>` }
        ], refs: [] } },
      { title: '特征值计算', brief: '求特征值。',
        q: [
          { stem: '幂法用于求：', options: ['主特征值与特征向量', '最小特征值', '所有特征值', '秩'], answer: 0, explain: '主特征。' },
          { stem: 'QR 算法的思想是：', options: ['迭代相似变换化为三角', '直接求根', '随机', '积分'], answer: 0, explain: 'QR。' },
          { stem: '反幂法用于：', options: ['求接近给定值的特征值', '主特征', '最小唯一', '无限制'], answer: 0, explain: '反幂。' }
        ],
        doc: { lead: '这一章讲特征值。', sections: [
          { id: 'power', title: '幂法', html: `<p>幂法、反幂法、原点平移；收敛速度。</p>` },
          { id: 'qr', title: 'QR', html: `<p>QR 迭代、Hessenberg 化；对称矩阵的特殊方法。</p>` }
        ], refs: [] } },
      { title: '常微分方程数值解', brief: '算轨迹。',
        q: [
          { stem: '欧拉法的局部误差阶是：', options: ['O(h²)', 'O(h)', 'O(h³)', 'O(1)'], answer: 0, explain: '二阶局部。' },
          { stem: 'RK4 的局部误差阶是：', options: ['O(h⁵)', 'O(h⁴)', 'O(h³)', 'O(h²)'], answer: 0, explain: '五阶局部。' },
          { stem: '刚性方程需要：', options: ['隐式方法', '显式方法', '解析解', '级数'], answer: 0, explain: '隐式。' }
        ],
        doc: { lead: '这一章讲 ODE。', sections: [
          { id: 'single', title: '单步法', html: `<p>欧拉、改进欧拉、RK；局部与整体误差、阶。</p>` },
          { id: 'multistep', title: '多步与刚性', html: `<p>Adams、BDF；稳定性与刚性方程。</p>` }
        ], refs: [] } },
      { title: '算法实现与训练', brief: '写代码。',
        q: [
          { stem: '数值算法的评价标准包括：', options: ['精度、稳定性、效率、鲁棒性', '只有精度', '只有速度', '只有代码短'], answer: 0, explain: '多维。' },
          { stem: '编程实现时应注意：', options: ['浮点误差与向量化', '只看结果', '忽略边界', '硬编码'], answer: 0, explain: '误差。' },
          { stem: '验证算法的方法是：', options: ['与解析解或基准问题比较', '凭感觉', '只看输出', '不验证'], answer: 0, explain: '验证。' }
        ],
        doc: { lead: '这一章讲实现。', sections: [
          { id: 'practice', title: '实践', html: `<p>MATLAB/Python 实现；向量化；误差分析。</p>` },
          { id: 'verify', title: '验证', html: `<p>基准问题、收敛阶验证、收敛性测试。</p>` }
        ], refs: [] } }
    ] },

    /* ---- 大四 ---- */
    { name: '毕业论文', chapters: [
      { title: '选题与文献', brief: '小问题、可做。',
        q: [
          { stem: '数学论文选题的关键是：', options: ['问题明确、方法可行', '题目宏大', '追热点', '导师偏好'], answer: 0, explain: '可行。' },
          { stem: '文献阅读的作用是：', options: ['了解方法并找到切入点', '凑数', '展示', '替代研究'], answer: 0, explain: '切入。' },
          { stem: '论文的创新可以是：', options: ['新问题、新方法、新应用', '只有新定理', '只有新计算', '只有综述'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲开头。', sections: [
          { id: 'topic', title: '选题', html: `<p>分析、代数、概率、计算、应用数学；问题具体。</p>` },
          { id: 'review', title: '文献', html: `<p>经典教材、综述、近三年论文；方法与结论。</p>` }
        ], refs: [] } },
      { title: '方法与论证', brief: '严谨。',
        q: [
          { stem: '数学论文的核心是：', options: ['定义—定理—证明', '计算', '图表', '叙述'], answer: 0, explain: '证明。' },
          { stem: '证明应：', options: ['条件清楚、逻辑严密、可检验', '简洁唯一', '引用权威', '举例即可'], answer: 0, explain: '严密。' },
          { stem: '计算类论文应：', options: ['说明算法、复杂度与验证', '只给结果', '只给代码', '只给图'], answer: 0, explain: '完整。' }
        ],
        doc: { lead: '这一章讲论证。', sections: [
          { id: 'proof', title: '证明', html: `<p>定义、引理、定理、证明；反例与推广。</p>` },
          { id: 'compute', title: '计算', html: `<p>算法描述、复杂度、数值实验与误差分析。</p>` }
        ], refs: [] } },
      { title: '写作与规范', brief: '学术表达。',
        q: [
          { stem: '数学写作的要求是：', options: ['符号规范、表述准确、逻辑清晰', '华丽', '简洁唯一', '口语'], answer: 0, explain: '规范。' },
          { stem: '引用规范的作用是：', options: ['可追溯与学术诚信', '凑数', '装饰', '增加篇幅'], answer: 0, explain: '规范。' },
          { stem: '结论应：', options: ['总结结果并说明局限', '提出新问题唯一', '重复引言', '写感想'], answer: 0, explain: '收束。' }
        ],
        doc: { lead: '这一章讲写作。', sections: [
          { id: 'structure', title: '结构', html: `<p>摘要、引言、预备知识、主要结果、证明、结论。</p>` },
          { id: 'notation', title: '符号', html: `<p>符号统一、定义清楚、编号规范；图表与公式。</p>` }
        ], refs: [] } },
      { title: '答辩', brief: '讲清楚。',
        q: [
          { stem: '答辩陈述的要点是：', options: ['问题、方法、结果、局限', '致谢', '篇幅', '格式'], answer: 0, explain: '四点。' },
          { stem: '被质疑时应：', options: ['承认局限并说明理由', '争辩', '回避', '改口'], answer: 0, explain: '诚恳。' },
          { stem: '答辩前最该准备的是：', options: ['熟悉证明与每个结论的依据', '背稿', 'PPT 模板', '服装'], answer: 0, explain: '依据。' }
        ],
        doc: { lead: '这一章讲答辩。', sections: [
          { id: 'talk', title: '陈述', html: `<p>8–10 分钟；问题—方法—结果—局限。</p>` },
          { id: 'qa', title: '问答', html: `<p>准备可能问题；不会就说不确定并说明思路。</p>` }
        ], refs: [] } }
    ] },
    { name: '教育实习', chapters: [
      { title: '数学教学设计', brief: '一堂数学课。',
        q: [
          { stem: '数学教学的核心是：', options: ['发展思维与理解', '记公式', '刷题', '速度'], answer: 0, explain: '思维。' },
          { stem: '情境导入的作用是：', options: ['激活经验、引出问题', '装饰', '凑时间', '降低难度'], answer: 0, explain: '引题。' },
          { stem: '教学设计应包含：', options: ['目标、重难点、活动、评价', '只有目标', '只有活动', '只有作业'], answer: 0, explain: '要素。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'core', title: '核心素养', html: `<p>数学抽象、逻辑推理、数学建模、直观想象、运算、数据分析。</p>` },
          { id: 'design', title: '设计', html: `<p>问题串—探究—归纳—应用；变式训练。</p>` }
        ], refs: [] } },
      { title: '课堂实施', brief: '把课上好。',
        q: [
          { stem: '数学提问的有效性是：', options: ['有层次、指向思维', '多而快', '只问答案', '只问是否'], answer: 0, explain: '思维。' },
          { stem: '板书的数学课作用是：', options: ['呈现推理过程与结构', '装饰', '替代讲解', '凑数'], answer: 0, explain: '过程。' },
          { stem: '变式教学的目的是：', options: ['理解本质、防止机械模仿', '增加题量', '加快进度', '考试'], answer: 0, explain: '变式。' }
        ],
        doc: { lead: '这一章讲实施。', sections: [
          { id: 'question', title: '提问', html: `<p>问题串设计、候答、追问；暴露思维。</p>` },
          { id: 'variation', title: '变式', html: `<p>概念变式、题目变式；一题多解与多题一解。</p>` }
        ], refs: [] } },
      { title: '数学评价', brief: '怎么考。',
        q: [
          { stem: '数学评价应：', options: ['知识与素养并重、过程与结果结合', '只考记忆', '只看分数', '只做选择'], answer: 0, explain: '素养。' },
          { stem: '开放性问题的价值是：', options: ['考查思维与表达', '便于评分', '省时间', '降低难度'], answer: 0, explain: '开放。' },
          { stem: '反馈的有效性是：', options: ['具体、指向思路改进', '只给分数', '排名', '批评'], answer: 0, explain: '反馈。' }
        ],
        doc: { lead: '这一章讲评价。', sections: [
          { id: 'design', title: '命题', html: `<p>素养立意、情境化、层次性；难度分布。</p>` },
          { id: 'feedback', title: '反馈', html: `<p>错因分析、变式补救、面批；鼓励探究。</p>` }
        ], refs: [] } },
      { title: '实习复盘', brief: '留下作品。',
        q: [
          { stem: '实习最该留下的是：', options: ['教案与课堂实录', '工牌', '照片', '评语'], answer: 0, explain: '作品。' },
          { stem: '实习日志的推荐写法是：', options: ['问题—做法—结果—反思', '流水账', '只写结论', '只写感受'], answer: 0, explain: '结构化。' },
          { stem: '面试讲实习的最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'output', title: '三件套', html: `<p>3 份教案、1 段课堂实录、1 份实习总结。</p>` },
          { id: 'review', title: '复盘', html: `<p>每周五行；对照指导教师评语改进。</p>` }
        ], refs: [] } }
    ] },
    { name: '考研与求职', chapters: [
      { title: '考研方向', brief: '数学与交叉。',
        q: [
          { stem: '数学考研的常见方向是：', options: ['基础数学、应用数学、计算数学、统计学', '只有基础', '只有应用', '只有统计'], answer: 0, explain: '多方向。' },
          { stem: '数学分析与高等代数在考研中的地位是：', options: ['专业课核心', '不重要', '只考其一', '只考公共课'], answer: 0, explain: '核心。' },
          { stem: '择校最应考虑：', options: ['方向、导师与真题风格', '城市', '学费', '宿舍'], answer: 0, explain: '匹配。' }
        ],
        doc: { lead: '这一章讲方向。', sections: [
          { id: 'paths', title: '方向', html: `<p>基础、应用、计算、概率统计、运筹与控制。</p>` },
          { id: 'subjects', title: '科目', html: `<p>政治、英语、数学分析、高等代数（或统考数学）。</p>` }
        ], refs: [] } },
      { title: '专业课复习', brief: '证明与计算。',
        q: [
          { stem: '数分复习的主线是：', options: ['极限—微分—积分—级数', '只做计算', '只背定理', '只看真题'], answer: 0, explain: '主线。' },
          { stem: '高代复习的主线是：', options: ['矩阵—空间—变换—标准形', '只算行列式', '只解方程', '只背结论'], answer: 0, explain: '主线。' },
          { stem: '证明题的关键是：', options: ['条件转化与构造', '猜答案', '背例题', '跳过'], answer: 0, explain: '构造。' }
        ],
        doc: { lead: '这一章讲复习。', sections: [
          { id: 'analysis', title: '数分', html: `<p>ε 语言、估计、构造反例；真题分类。</p>` },
          { id: 'algebra', title: '高代', html: `<p>矩阵技巧、空间分解、标准形；一题多解。</p>` }
        ], refs: [] } },
      { title: '求职方向', brief: '教师、金融、IT。',
        q: [
          { stem: '数学专业毕业生的常见去向不包括：', options: ['教师', '数据分析', '金融量化', '外科医生'], answer: 3, explain: '专业限制。' },
          { stem: '数据分析岗位看重：', options: ['统计与编程能力', '只有数学', '只有英语', '只有证书'], answer: 0, explain: '复合。' },
          { stem: '求职最加分的材料是：', options: ['项目与代码/竞赛成果', '证书数量', '成绩单', '社团'], answer: 0, explain: '作品。' }
        ],
        doc: { lead: '这一章讲就业。', sections: [
          { id: 'paths', title: '路径', html: `<p>教师、数据分析、算法、金融量化、精算、读博。</p>` },
          { id: 'skills', title: '能力', html: `<p>数学建模、编程（Python/R）、统计；竞赛与项目。</p>` }
        ], refs: [] } },
      { title: '面试与试讲', brief: '展示能力。',
        q: [
          { stem: '数学教师面试试讲的关键是：', options: ['推理清晰、问题设计有效', '背稿', 'PPT 精美', '时长'], answer: 0, explain: '推理。' },
          { stem: '技术岗面试常考：', options: ['算法题与概率统计题', '只有编程', '只有数学', '只有英语'], answer: 0, explain: '综合。' },
          { stem: '讲项目的最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
        ],
        doc: { lead: '这一章讲面试。', sections: [
          { id: 'teaching', title: '试讲', html: `<p>15 分钟：情境—探究—归纳—练习；板书结构。</p>` },
          { id: 'tech', title: '技术', html: `<p>算法、概率、统计推断；白板推导与沟通。</p>` }
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
