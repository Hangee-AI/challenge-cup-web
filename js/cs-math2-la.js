/* ==========================================================
   cs-math2-la.js · 计科：给「高等数学（下）」「线性代数」补章节
   --------------------------------------------------------
   依赖 cs-intro-math.js 里的 registerCsCourse()，需排在它之后加载。
   每门 15 章，与 C 语言程序设计同密度。
   ========================================================== */

/* ---------------- 高等数学（下）（15 章） ---------------- */
registerCsCourse(0, '高等数学（下）', [
  {
    title: '多元函数与几何',
    brief: '从一条线到一张曲面：多元函数的定义域与图像。',
    q: [
      { stem: 'z = √(1 − x² − y²) 的定义域是：', options: ['x²+y² ≤ 1', 'x²+y² ≥ 1', '全体平面', 'x+y ≤ 1'], answer: 0, explain: '根号内非负。' },
      { stem: '二元函数 z=f(x,y) 的图像在三维空间中通常是：', options: ['一条曲线', '一张曲面', '一个平面', '一个点'], answer: 1, explain: '两个自变量对应一张曲面。' },
      { stem: '等值线（等高线）指的是：', options: ['函数值相同的点的轨迹', '定义域边界', '梯度方向', '极值点'], answer: 0, explain: 'f(x,y)=C 的曲线。' }
    ],
    doc: {
      lead: '这一章把一元推广到多元，先建立几何直觉。',
      sections: [
        { id: 'domain', title: '定义域', html: `<p>根号、分母、对数给出约束，交集即定义域。</p>` },
        { id: 'geometry', title: '几何', html: `<p>曲面、等值线、截面法；等值线密集处变化快。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '偏导数',
    brief: '固定其他变量，对其中一个求导。',
    q: [
      { stem: 'z = x²y + y³，则 ∂z/∂x 等于：', options: ['2xy', 'x² + 3y²', '2x + y', 'x²y'], answer: 0, explain: '对 x 求导时 y 视为常数。' },
      { stem: '偏导数 ∂z/∂x 的几何意义是：', options: ['曲面在某方向的切线斜率', '曲面面积', '法向量', '曲率'], answer: 0, explain: '沿 x 方向的截线斜率。' },
      { stem: '混合偏导 z_xy 与 z_yx 在什么条件下相等？', options: ['总是相等', '二阶偏导连续时', '函数单调时', '定义域有界时'], answer: 1, explain: '克莱罗定理。' }
    ],
    doc: {
      lead: '这一章讲偏导的计算与含义。',
      sections: [
        { id: 'calc', title: '计算', html: `<p>对一个变量求导，其余当常数；高阶偏导逐次求。</p>` },
        { id: 'meaning', title: '含义', html: `<p>偏导是"沿坐标轴方向"的变化率，不是全变化。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '全微分',
    brief: '所有方向变化的总和：dz = z_x dx + z_y dy。',
    q: [
      { stem: 'z = x² + y²，在 (1,1) 处 dz 等于：', options: ['2dx + 2dy', 'dx + dy', '2x + 2y', '0'], answer: 0, explain: '偏导在 (1,1) 都是 2。' },
      { stem: '可微的充分条件是：', options: ['偏导存在', '偏导连续', '函数连续', '有界'], answer: 1, explain: '偏导存在不保证可微。' },
      { stem: '梯度方向是：', options: ['函数值下降最快的方向', '函数值上升最快的方向', '等值线方向', '任意方向'], answer: 1, explain: '梯度指向增长最快处。' }
    ],
    doc: {
      lead: '这一章讲全微分与梯度。',
      sections: [
        { id: 'diff', title: '全微分', html: `<p>dz = f_x dx + f_y dy；近似计算与误差估计。</p>` },
        { id: 'grad', title: '梯度', html: `<p>∇f = (f_x, f_y)；垂直于等值线，指向增长最快。</p>
<div class="doc-tip">💡 梯度下降法就是沿 −∇f 走。</div>` }
      ],
      refs: []
    }
  },
  {
    title: '复合与隐函数求导',
    brief: '链式法则在多元里的版本。',
    q: [
      { stem: 'z=f(u,v)，u=u(x,y)、v=v(x,y)，则 ∂z/∂x 等于：', options: ['f_u·u_x + f_v·v_x', 'f_u·v_x + f_v·u_x', 'f_x', 'u_x·v_x'], answer: 0, explain: '链式法则逐条路径相加。' },
      { stem: '隐函数 F(x,y,z)=0 确定的 z(x,y)，其 ∂z/∂x 等于：', options: ['−F_x/F_z', 'F_x/F_z', '−F_z/F_x', 'F_x·F_z'], answer: 0, explain: '隐函数求导公式。' },
      { stem: '全导数 dz/dt 用于：', options: ['z 只通过中间变量依赖 t', 'z 与 t 无关', 't 固定', 'z 为常数'], answer: 0, explain: '链式法则的单参数版本。' }
    ],
    doc: {
      lead: '这一章讲两类求导。',
      sections: [
        { id: 'chain', title: '复合', html: `<p>画出变量依赖图，沿路径相乘、分支相加。</p>` },
        { id: 'implicit', title: '隐函数', html: `<p>∂z/∂x = −F_x/F_z（F_z ≠ 0）。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '多元函数极值',
    brief: '驻点 + 海森矩阵判别；条件极值用拉格朗日。',
    q: [
      { stem: '二元函数极值的必要条件是：', options: ['两个偏导都为零（或不可微）', '二阶导为零', '函数值为零', '梯度非零'], answer: 0, explain: '驻点。' },
      { stem: '判别式 AC−B² > 0 且 A > 0 时，该驻点是：', options: ['极大值', '极小值', '鞍点', '无法判断'], answer: 1, explain: '海森矩阵正定 → 极小。' },
      { stem: '拉格朗日乘数法用于：', options: ['无条件极值', '带约束的极值', '积分', '级数'], answer: 1, explain: '约束优化。' }
    ],
    doc: {
      lead: '这一章讲无条件与条件极值。',
      sections: [
        { id: 'free', title: '无条件', html: `<p>求驻点，用二阶判别式 AC−B² 与 A 的符号分类。</p>` },
        { id: 'lagrange', title: '条件极值', html: `<p>构造 L = f + λg，解方程组；λ 是约束的影子价格。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '二重积分',
    brief: '把平面区域"切碎求和"，化为累次积分。',
    q: [
      { stem: '把二重积分化为累次积分的关键是：', options: ['选择积分次序与区域描述', '换元', '求导', '取极限'], answer: 0, explain: '区域的 X 型或 Y 型描述。' },
      { stem: '极坐标下面积元素是：', options: ['dr dθ', 'r dr dθ', 'r² dr dθ', 'dθ'], answer: 1, explain: '雅可比为 r。' },
      { stem: '二重积分可以计算：', options: ['平面区域面积、体积、质量', '只有面积', '只有体积', '导数'], answer: 0, explain: '几何与物理量。' }
    ],
    doc: {
      lead: '这一章讲计算与换序。',
      sections: [
        { id: 'iterated', title: '累次积分', html: `<p>X 型：先 y 后 x；Y 型：先 x 后 y；画图定限。</p>` },
        { id: 'polar', title: '极坐标', html: `<p>圆形区域用极坐标；别忘了 r。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '三重积分',
    brief: '空间区域上的积分：柱坐标、球坐标。',
    q: [
      { stem: '柱坐标的体积元素是：', options: ['r dr dθ dz', 'dr dθ dz', 'r² sinφ dr dφ dθ', 'ρ dρ dθ'], answer: 0, explain: '雅可比为 r。' },
      { stem: '球坐标的体积元素是：', options: ['ρ² sinφ dρ dφ dθ', 'ρ dρ dφ dθ', 'r dr dθ dz', 'dρ dφ dθ'], answer: 0, explain: '雅可比为 ρ² sinφ。' },
      { stem: '三重积分可计算：', options: ['体积、质量、质心', '只有体积', '只有面积', '只有长度'], answer: 0, explain: '空间量。' }
    ],
    doc: {
      lead: '这一章讲三种坐标系。',
      sections: [
        { id: 'coords', title: '坐标系', html: `<p>直角、柱、球；选与被积区域匹配的坐标。</p>` },
        { id: 'jacobian', title: '雅可比', html: `<p>换元必须乘雅可比行列式的绝对值。</p>
<div class="doc-tip">⚠️ 最常见的错：漏掉 r 或 ρ²sinφ。</div>` }
      ],
      refs: []
    }
  },
  {
    title: '曲线积分',
    brief: '沿一条线累加：第一类看弧长，第二类看方向。',
    q: [
      { stem: '第一类曲线积分对方向：', options: ['敏感', '不敏感', '只与起点有关', '只与终点有关'], answer: 1, explain: '对弧长积分，与方向无关。' },
      { stem: '第二类曲线积分与路径无关的条件（单连通区域）是：', options: ['∂P/∂y = ∂Q/∂x', 'P = Q', '∂P/∂x = ∂Q/∂y', '梯度为零'], answer: 0, explain: '保守场的判据。' },
      { stem: '格林公式把平面曲线积分与：', options: ['二重积分联系起来', '三重积分', '级数', '导数'], answer: 0, explain: '∮P dx+Q dy = ∬(Q_x−P_y)dA。' }
    ],
    doc: {
      lead: '这一章讲两类曲线积分与格林公式。',
      sections: [
        { id: 'two', title: '两类', html: `<p>第一类 ds（弧长），第二类 dx/dy（做功）。</p>` },
        { id: 'green', title: '格林', html: `<p>闭合曲线 ↔ 二重积分；用于简化计算与判断保守场。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '曲面积分',
    brief: '穿过一张曲面的通量：高斯公式是它的"格林"。',
    q: [
      { stem: '高斯公式把闭合曲面积分化为：', options: ['三重积分', '二重积分', '曲线积分', '级数'], answer: 0, explain: '散度定理。' },
      { stem: '第二类曲面积分计算的是：', options: ['通量', '面积', '弧长', '质量'], answer: 0, explain: '向量场穿过曲面的量。' },
      { stem: '斯托克斯公式把空间曲线积分与：', options: ['曲面积分联系起来', '三重积分', '二重积分', '导数'], answer: 0, explain: '旋度定理。' }
    ],
    doc: {
      lead: '这一章讲三大积分定理。',
      sections: [
        { id: 'flux', title: '通量', html: `<p>第二类曲面积分；法向量取向决定符号。</p>` },
        { id: 'theorems', title: '三大定理', html: `<ul><li>格林：平面</li><li>高斯：空间闭合曲面</li><li>斯托克斯：空间曲线</li></ul>` }
      ],
      refs: []
    }
  },
  {
    title: '常数项级数',
    brief: '无穷个数相加是否有意义：收敛与发散。',
    q: [
      { stem: '调和级数 ∑1/n 是：', options: ['收敛', '发散', '条件收敛', '无法判断'], answer: 1, explain: 'p 级数 p=1 时发散。' },
      { stem: '级数收敛的必要条件是：', options: ['通项趋于 0', '通项为 0', '部分和有界', '比值小于 1'], answer: 0, explain: '必要条件非充分（调和级数反例）。' },
      { stem: 'p 级数 ∑1/n^p 收敛的条件是：', options: ['p > 1', 'p < 1', 'p = 1', '任意 p'], answer: 0, explain: 'p>1 收敛。' }
    ],
    doc: {
      lead: '这一章讲判别法。',
      sections: [
        { id: 'tests', title: '判别法', html: `<p>比较、比值、根值、积分判别法。</p>` },
        { id: 'abs', title: '绝对与条件', html: `<p>绝对收敛 ⇒ 收敛；条件收敛需另判。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '幂级数',
    brief: '把函数写成无穷多项式：展开与收敛半径。',
    q: [
      { stem: '幂级数的收敛半径常用什么求？', options: ['比值法/根值法', '求导', '积分', '夹逼'], answer: 0, explain: 'lim|a_{n+1}/a_n| 的倒数。' },
      { stem: 'e^x 的麦克劳林展开是：', options: ['∑x^n/n!', '∑x^n', '∑(−1)^n x^n', '∑x^(2n)'], answer: 0, explain: '标准展开。' },
      { stem: '在收敛区间内，幂级数可以：', options: ['逐项求导与积分', '随意取值', '不连续', '只有有限项'], answer: 0, explain: '解析性质。' }
    ],
    doc: {
      lead: '这一章讲展开与应用。',
      sections: [
        { id: 'radius', title: '收敛半径', html: `<p>比值法求 R；端点单独判定。</p>` },
        { id: 'taylor', title: '泰勒展开', html: `<p>e^x、sinx、ln(1+x)、1/(1−x)；用于近似与求极限。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '傅里叶级数',
    brief: '用正弦余弦叠加出周期函数。',
    q: [
      { stem: '傅里叶级数适用于：', options: ['周期函数', '任意连续函数', '只有多项式', '只有指数'], answer: 0, explain: '周期信号分解。' },
      { stem: '奇函数的傅里叶级数只含：', options: ['正弦项', '余弦项', '常数项', '都有'], answer: 0, explain: '奇函数展开为正弦级数。' },
      { stem: '傅里叶系数通过什么计算？', options: ['积分', '求导', '极限', '矩阵'], answer: 0, explain: '正交性给出积分公式。' }
    ],
    doc: {
      lead: '这一章讲周期信号分解。',
      sections: [
        { id: 'series', title: '级数形式', html: `<p>a0/2 + Σ(an cos nx + bn sin nx)。</p>` },
        { id: 'use', title: '用途', html: `<p>信号处理、热传导；吉布斯现象在间断点附近。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '一阶微分方程',
    brief: '含导数的方程：分离变量、齐次、线性。',
    q: [
      { stem: 'dy/dx = ky 的通解是：', options: ['Ce^{kx}', 'C+kx', 'C/x', 'kx'], answer: 0, explain: '指数增长/衰减。' },
      { stem: '可分离变量方程的标准做法是：', options: ['把 y 与 x 分到两边再积分', '直接求导', '取对数', '换元'], answer: 0, explain: '分离后积分。' },
      { stem: '一阶线性方程 y′ + P(x)y = Q(x) 的解法是：', options: ['积分因子法', '分离变量', '特征方程', '级数'], answer: 0, explain: '乘 e^{∫P dx}。' }
    ],
    doc: {
      lead: '这一章讲三类一阶方程。',
      sections: [
        { id: 'types', title: '三类', html: `<p>可分离、齐次、一阶线性。</p>` },
        { id: 'method', title: '方法', html: `<p>分离积分；齐次用 u=y/x 换元；线性用积分因子。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '二阶常系数线性方程',
    brief: '特征方程定通解，特解叠加。',
    q: [
      { stem: 'y″ − 3y′ + 2y = 0 的特征根是：', options: ['1 和 2', '−1 和 −2', '0 和 3', '2 和 3'], answer: 0, explain: 'r²−3r+2=(r−1)(r−2)。' },
      { stem: '特征根为共轭复根 α±βi 时，通解含：', options: ['e^{αx}(C1cosβx + C2sinβx)', 'Ce^{αx}', '多项式', '级数'], answer: 0, explain: '振荡解。' },
      { stem: '非齐次方程的通解 = ', options: ['齐次通解 + 一个特解', '特解', '齐次通解', '常数'], answer: 0, explain: '叠加原理。' }
    ],
    doc: {
      lead: '这一章讲三类特征根与特解设法。',
      sections: [
        { id: 'homogeneous', title: '齐次', html: `<p>相异实根、重根、共轭复根三种情况。</p>` },
        { id: 'particular', title: '非齐次', html: `<p>待定系数法；共振时需乘 x。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '数学建模应用',
    brief: '把现实问题写成方程，再解出来验证。',
    q: [
      { stem: '人口增长的 Malthus 模型假设是：', options: ['增长率与人口成正比', '人口恒定', '增长率递减', '无限制'], answer: 0, explain: '指数模型。' },
      { stem: 'Logistic 模型相比 Malthus 增加了：', options: ['环境容量限制', '随机项', '时间延迟', '多个物种'], answer: 0, explain: 'S 形增长曲线。' },
      { stem: '建模的一般步骤是：', options: ['提出假设—建模—求解—检验', '直接求解', '先求解再假设', '只做仿真'], answer: 0, explain: '四步循环。' }
    ],
    doc: {
      lead: '这一章把微积分用到实际问题上。',
      sections: [
        { id: 'steps', title: '四步', html: `<ol><li>假设与变量</li><li>建立方程</li><li>求解</li><li>检验与修正</li></ol>` },
        { id: 'cases', title: '经典案例', html: `<p>人口、冷却、传染病、药物浓度；微分方程是通用工具。</p>` }
      ],
      refs: []
    }
  }
]);

/* ---------------- 线性代数（15 章） ---------------- */
registerCsCourse(0, '线性代数', [
  {
    title: '行列式的定义',
    brief: '行列式是一个数：衡量线性变换对面积/体积的缩放。',
    q: [
      { stem: '二阶行列式 |a b; c d| 等于：', options: ['ad − bc', 'ab − cd', 'ad + bc', 'ac − bd'], answer: 0, explain: '对角线乘积之差。' },
      { stem: '单位矩阵的行列式等于：', options: ['0', '1', 'n', '−1'], answer: 1, explain: 'det I = 1。' },
      { stem: '行列式为 0 说明矩阵：', options: ['可逆', '不可逆（奇异）', '对称', '正交'], answer: 1, explain: '奇异矩阵不可逆。' }
    ],
    doc: {
      lead: '这一章讲行列式的定义与几何意义。',
      sections: [
        { id: 'def', title: '定义', html: `<p>按行展开、逆序数定义；低阶可直接算。</p>` },
        { id: 'geo', title: '几何', html: `<p>|det| 是面积/体积的缩放倍数；符号表示定向。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '行列式的性质与计算',
    brief: '用性质把行列式化简成三角形再相乘。',
    q: [
      { stem: '交换行列式的两行，行列式：', options: ['不变', '变号', '乘 2', '变 0'], answer: 1, explain: '反对称性。' },
      { stem: '某行乘以 k，行列式：', options: ['不变', '乘以 k', '除以 k', '变 0'], answer: 1, explain: '行提取因子。' },
      { stem: '上三角行列式的值等于：', options: ['对角元素之和', '对角元素之积', '1', '0'], answer: 1, explain: '三角化后直接相乘。' }
    ],
    doc: {
      lead: '这一章讲计算技巧。',
      sections: [
        { id: 'props', title: '六条性质', html: `<ul><li>换行变号</li><li>行提取因子</li><li>行相加不变</li><li>两行成比例 ⇒ 0</li><li>按行展开</li><li>det(AB)=det A·det B</li></ul>` },
        { id: 'trick', title: '常用套路', html: `<p>化为上三角、降阶、利用范德蒙德行列式。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '矩阵运算',
    brief: '矩阵是线性变换的表示：加法、数乘、乘法、转置。',
    q: [
      { stem: '矩阵乘法 AB 有意义的前提是：', options: ['A 的列数等于 B 的行数', '行数相等', '都是方阵', '元素非零'], answer: 0, explain: '维度匹配。' },
      { stem: '矩阵乘法一般：', options: ['满足交换律', '不满足交换律', '总是可交换', '无结合律'], answer: 1, explain: 'AB ≠ BA 一般成立。' },
      { stem: '(AB)^T 等于：', options: ['A^T B^T', 'B^T A^T', 'AB', 'A^T + B^T'], answer: 1, explain: '转置反序。' }
    ],
    doc: {
      lead: '这一章讲矩阵的基本运算。',
      sections: [
        { id: 'ops', title: '四种运算', html: `<p>加法、数乘、乘法、转置；分块矩阵。</p>` },
        { id: 'rules', title: '规则', html: `<p>(AB)C=A(BC)；(A+B)C=AC+BC；AB≠BA。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '逆矩阵',
    brief: 'A⁻¹ 存在当且仅当 det A ≠ 0。',
    q: [
      { stem: 'A 可逆的充要条件是：', options: ['det A ≠ 0', 'A 对称', 'A 元素非零', 'A 为方阵'], answer: 0, explain: '非奇异。' },
      { stem: 'A⁻¹ 的公式是：', options: ['A*/det A', 'det A · A*', 'A^T', '−A'], answer: 0, explain: '伴随矩阵除以行列式。' },
      { stem: '(AB)⁻¹ 等于：', options: ['A⁻¹B⁻¹', 'B⁻¹A⁻¹', 'AB', '(BA)⁻¹'], answer: 1, explain: '反序。' }
    ],
    doc: {
      lead: '这一章讲逆矩阵的判定与求法。',
      sections: [
        { id: 'criteria', title: '判定', html: `<p>det ≠ 0 ⇔ 可逆 ⇔ 满秩 ⇔ 齐次方程只有零解。</p>` },
        { id: 'compute', title: '求法', html: `<p>伴随矩阵法（小矩阵）；初等变换 [A|I] → [I|A⁻¹]（通用）。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '矩阵的秩',
    brief: '秩 = 线性无关的行（列）数 = 变换后像空间的维数。',
    q: [
      { stem: '矩阵的秩等于：', options: ['非零子式的最高阶数', '元素个数', '行数', 'det 值'], answer: 0, explain: '定义。' },
      { stem: '初等变换对秩的影响是：', options: ['改变秩', '不改变秩', '可能改变', '降一半'], answer: 1, explain: '初等变换不改变秩。' },
      { stem: 'r(A) = r 说明齐次方程组 Ax=0 的基础解系有：', options: ['r 个向量', 'n−r 个向量', 'n 个向量', '1 个向量'], answer: 1, explain: '自由变量个数。' }
    ],
    doc: {
      lead: '这一章讲秩的计算与含义。',
      sections: [
        { id: 'calc', title: '计算', html: `<p>行阶梯形中非零行的个数；初等行变换化阶梯。</p>` },
        { id: 'meaning', title: '含义', html: `<p>秩 = 像空间维数；秩亏 ⇒ 信息丢失。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '线性方程组',
    brief: '高斯消元 + 秩判定：有解、唯一、无穷多。',
    q: [
      { stem: 'Ax=b 有解的充要条件是：', options: ['r(A) = r(A|b)', 'r(A) = n', 'det A ≠ 0', 'b=0'], answer: 0, explain: '增广矩阵秩相等。' },
      { stem: 'r(A) = r(A|b) < n 时，方程组：', options: ['无解', '唯一解', '无穷多解', '无法判断'], answer: 2, explain: '自由变量存在。' },
      { stem: '齐次方程组 Ax=0 只有零解的条件是：', options: ['r(A) = n', 'r(A) < n', 'det A = 0', 'b≠0'], answer: 0, explain: '满列秩。' }
    ],
    doc: {
      lead: '这一章讲解的结构。',
      sections: [
        { id: 'gauss', title: '消元', html: `<p>增广矩阵行变换 → 阶梯形 → 回代。</p>` },
        { id: 'structure', title: '解的结构', html: `<p>非齐次通解 = 特解 + 齐次通解；基础解系含 n−r 个向量。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '向量组的线性相关性',
    brief: '能不能被其他向量表示：线性相关与极大无关组。',
    q: [
      { stem: '向量组线性相关的含义是：', options: ['存在不全为零的系数使其线性组合为零', '所有系数为 0', '向量个数大于 2', '向量非零'], answer: 0, explain: '定义。' },
      { stem: 'n 个 n 维向量线性无关的充要条件是：', options: ['行列式非零', '行列式为零', '含零向量', '和为 0'], answer: 0, explain: '方阵情形。' },
      { stem: '极大无关组所含向量个数等于：', options: ['向量总数', '向量组的秩', '1', 'n'], answer: 1, explain: '秩的定义。' }
    ],
    doc: {
      lead: '这一章讲相关性与秩。',
      sections: [
        { id: 'dep', title: '相关性', html: `<p>组合为零是否有非零解；含零向量必相关。</p>` },
        { id: 'maximal', title: '极大无关组', html: `<p>与秩等价；用于找基础解系。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '特征值与特征向量',
    brief: 'Av = λv：变换只缩放不转向的方向。',
    q: [
      { stem: '特征值满足的特征方程是：', options: ['det(A − λI) = 0', 'det A = 0', 'Av = 0', 'A = λI'], answer: 0, explain: '特征多项式。' },
      { stem: '矩阵的迹等于：', options: ['特征值之和', '特征值之积', '行列式', '秩'], answer: 0, explain: 'tr = Σλ。' },
      { stem: '特征向量必须：', options: ['非零', '为零', '单位长度', '正交'], answer: 0, explain: '零向量不定义方向。' }
    ],
    doc: {
      lead: '这一章讲特征值的求法与性质。',
      sections: [
        { id: 'compute', title: '求法', html: `<p>解 det(A−λI)=0 得 λ，再解 (A−λI)v=0 得特征向量。</p>` },
        { id: 'props', title: '性质', html: `<p>Σλ = tr(A)，Πλ = det(A)；不同特征值的特征向量线性无关。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '相似对角化',
    brief: 'A = PΛP⁻¹：把变换化成沿坐标轴的缩放。',
    q: [
      { stem: 'n 阶矩阵可对角化的充要条件是：', options: ['有 n 个线性无关的特征向量', '有 n 个特征值', 'det ≠ 0', '对称'], answer: 0, explain: '几何重数等于代数重数。' },
      { stem: '实对称矩阵：', options: ['一定可正交对角化', '不可对角化', '特征值为复数', '不可逆'], answer: 0, explain: '谱定理。' },
      { stem: '对角化后 A^k 的计算变得容易，因为：', options: ['Λ^k 只需对角元素取幂', 'A 变成零', 'P 可忽略', 'k 消失'], answer: 0, explain: 'A^k = PΛ^kP⁻¹。' }
    ],
    doc: {
      lead: '这一章讲对角化的条件与应用。',
      sections: [
        { id: 'condition', title: '条件', html: `<p>n 个线性无关特征向量；重根时几何重数 = 代数重数。</p>` },
        { id: 'use', title: '用途', html: `<p>快速算幂、解微分方程组、分析稳定性。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '二次型',
    brief: 'x^T A x：把二次多项式写成矩阵形式。',
    q: [
      { stem: '二次型的矩阵 A 通常取：', options: ['对称矩阵', '对角矩阵', '三角矩阵', '任意'], answer: 0, explain: '对称化后唯一。' },
      { stem: '用正交变换化二次型为标准形，实质是：', options: ['正交对角化 A', '求逆', '求秩', '求行列式'], answer: 0, explain: '合同变换。' },
      { stem: '二次型的标准形中系数是：', options: ['特征值', '奇异值', '对角元素', '秩'], answer: 0, explain: '正交变换下为特征值。' }
    ],
    doc: {
      lead: '这一章讲二次型与标准化。',
      sections: [
        { id: 'matrix', title: '矩阵表示', html: `<p>f = x^T A x，A 对称；写出 A 时交叉项系数要除以 2。</p>` },
        { id: 'standard', title: '标准化', html: `<p>正交变换（保长度）或配方法；标准形系数即特征值/惯性指数。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '正定性',
    brief: '二次型恒正：正定矩阵的判别与应用。',
    q: [
      { stem: 'A 正定的充要条件是：', options: ['所有顺序主子式为正', 'det A > 0', '特征值有正有负', 'A 可逆'], answer: 0, explain: 'Sylvester 判据；也等价于全部特征值为正。' },
      { stem: '正定矩阵的特征值：', options: ['全为正', '全为负', '有正有负', '全为零'], answer: 0, explain: '定义直接推出。' },
      { stem: '多元函数极值判别中，海森矩阵正定对应：', options: ['极小值', '极大值', '鞍点', '无法判断'], answer: 0, explain: '正定 → 极小。' }
    ],
    doc: {
      lead: '这一章讲正定的判别。',
      sections: [
        { id: 'criteria', title: '三种判据', html: `<ul><li>顺序主子式全正</li><li>特征值全正</li><li>存在可逆 P 使 A = P^T P</li></ul>` },
        { id: 'app', title: '应用', html: `<p>最优化（极值判别）、最小二乘、协方差矩阵。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '内积与正交',
    brief: '长度、夹角、投影：把几何搬进向量空间。',
    q: [
      { stem: '两向量正交的条件是：', options: ['内积为零', '长度相等', '夹角为 0', '和为零'], answer: 0, explain: '内积为 0。' },
      { stem: '施密特正交化的作用是：', options: ['把线性无关组化为正交组', '求逆', '求秩', '求特征值'], answer: 0, explain: 'Gram-Schmidt。' },
      { stem: '正交矩阵满足：', options: ['A^T A = I', 'A = A^T', 'det A = 0', 'A² = A'], answer: 0, explain: '列向量标准正交。' }
    ],
    doc: {
      lead: '这一章讲内积空间。',
      sections: [
        { id: 'inner', title: '内积', html: `<p>长度、夹角、Cauchy-Schwarz 不等式。</p>` },
        { id: 'orthogonal', title: '正交化', html: `<p>Gram-Schmidt；正交矩阵保持长度与夹角。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '最小二乘',
    brief: '方程无解时，找"最接近"的解。',
    q: [
      { stem: '最小二乘解满足的正规方程是：', options: ['A^T A x = A^T b', 'Ax = b', 'A^T x = b', 'A x = 0'], answer: 0, explain: '法方程。' },
      { stem: '最小二乘的几何意义是：', options: ['把 b 投影到 A 的列空间', '把 A 投影到 b', '求逆', '求秩'], answer: 0, explain: '正交投影。' },
      { stem: '数据点比未知数多时，方程组通常：', options: ['无精确解，用最小二乘', '有唯一解', '无穷多解', '无意义'], answer: 0, explain: '超定方程组。' }
    ],
    doc: {
      lead: '这一章讲拟合的数学基础。',
      sections: [
        { id: 'normal', title: '法方程', html: `<p>(A^T A)x = A^T b；A 列满秩时唯一。</p>` },
        { id: 'use', title: '用途', html: `<p>线性回归、曲线拟合、信号处理。</p>
<div class="doc-tip">💡 机器学习里的线性回归，本质就是最小二乘。</div>` }
      ],
      refs: []
    }
  },
  {
    title: '线性变换',
    brief: '矩阵是线性变换的坐标表示：旋转、投影、缩放。',
    q: [
      { stem: '线性变换必须满足：', options: ['T(u+v)=T(u)+T(v) 且 T(cu)=cT(u)', 'T(0)=0 即可', '连续', '可逆'], answer: 0, explain: '两条性质。' },
      { stem: '旋转变换的矩阵是：', options: ['正交矩阵', '对称矩阵', '三角矩阵', '零矩阵'], answer: 0, explain: '保持长度。' },
      { stem: '线性变换在不同基下的矩阵是：', options: ['相似的', '相同的', '合同的', '无关的'], answer: 0, explain: '相似变换。' }
    ],
    doc: {
      lead: '这一章讲变换与矩阵的对应。',
      sections: [
        { id: 'def', title: '定义', html: `<p>保持加法与数乘；矩阵就是它在某组基下的表示。</p>` },
        { id: 'examples', title: '例子', html: `<p>旋转、反射、投影、缩放；核与像维数关系（秩-零化度定理）。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '线性代数的应用',
    brief: '图像压缩、PCA、图论、PageRank：线性代数无处不在。',
    q: [
      { stem: 'PCA 的核心是：', options: ['协方差矩阵的特征值分解', '求逆', '高斯消元', '行列式'], answer: 0, explain: '主成分方向即最大特征值对应的特征向量。' },
      { stem: '奇异值分解（SVD）可用于：', options: ['降维与压缩', '求导', '积分', '排序'], answer: 0, explain: '低秩近似。' },
      { stem: 'PageRank 用到的核心概念是：', options: ['矩阵的特征向量（平稳分布）', '行列式', '最小二乘', '正交化'], answer: 0, explain: '随机矩阵的主特征向量。' }
    ],
    doc: {
      lead: '这一章把线代接到真实问题上。',
      sections: [
        { id: 'apps', title: '四个应用', html: `<ul><li>图像压缩（SVD）</li><li>PCA 降维</li><li>图与网络（邻接矩阵）</li><li>PageRank（特征向量）</li></ul>` },
        { id: 'summary', title: '一句话', html: `<p>线代是"给数据找坐标系"的学问：换一组基，问题就变简单。</p>` }
      ],
      refs: [CS_REFS.algo]
    }
  }
]);
