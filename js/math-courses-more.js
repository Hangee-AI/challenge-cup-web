/* ==========================================================
   math-courses-more.js · 数学：补齐零头（5 门各 +1 章）
   ========================================================== */

appendChapters('science-数学与应用数学', [
  null,
  { chapters: [{
    title: '矩阵分解初步',
    brief: '把矩阵拆开看。',
    q: [
      { stem: 'LU 分解的前提是：', options: ['顺序主子式非零（或可做行交换）', '矩阵对称', '矩阵可逆', '矩阵正交'], answer: 0, explain: '条件。' },
      { stem: 'QR 分解把矩阵分解为：', options: ['正交阵与上三角阵', '两个下三角', '对角与置换', '两个正交'], answer: 0, explain: 'QR。' },
      { stem: 'SVD 适用于：', options: ['任意矩阵', '只有方阵', '只有对称阵', '只有可逆阵'], answer: 0, explain: '任意。' }
    ],
    doc: { lead: '这一章讲分解。', sections: [
      { id: 'lu', title: 'LU 与 QR', html: `<p>消元与正交化；解方程与最小二乘。</p>` },
      { id: 'svd', title: 'SVD', html: `<p>奇异值、低秩近似；降维与压缩。</p>` }
    ], refs: [] } }] },
  null,
  { chapters: [{
    title: '重积分的应用与场论初步',
    brief: '积分与物理。',
    q: [
      { stem: '散度描述：', options: ['向量场的源汇强度', '旋转程度', '方向', '长度'], answer: 0, explain: '散度。' },
      { stem: '旋度描述：', options: ['向量场的旋转程度', '源汇', '梯度', '散度'], answer: 0, explain: '旋度。' },
      { stem: '高斯公式与散度的关系是：', options: ['通量等于散度的三重积分', '等于环量', '无关', '等于梯度'], answer: 0, explain: '散度定理。' }
    ],
    doc: { lead: '这一章讲场论。', sections: [
      { id: 'applications', title: '应用', html: `<p>质量、质心、转动惯量；功与通量。</p>` },
      { id: 'fields', title: '场论', html: `<p>梯度、散度、旋度；三大公式的统一表述。</p>` }
    ], refs: [] } }] },
  { chapters: [{
    title: '若尔当形的应用',
    brief: '不可对角化怎么办。',
    q: [
      { stem: '若尔当块对应：', options: ['特征值相同的广义特征向量链', '不同特征值', '零空间', '正交基'], answer: 0, explain: '链。' },
      { stem: '矩阵幂 A^k 可通过若尔当形：', options: ['化为块幂计算', '直接算', '无法计算', '取对角'], answer: 0, explain: '块幂。' },
      { stem: '最小多项式的作用是：', options: ['刻画矩阵的零化多项式次数', '求行列式', '求秩', '求特征值唯一'], answer: 0, explain: '零化。' }
    ],
    doc: { lead: '这一章讲应用。', sections: [
      { id: 'chain', title: '广义特征向量', html: `<p>根子空间、循环基；若尔当块结构。</p>` },
      { id: 'compute', title: '计算', html: `<p>矩阵函数 f(A)、微分方程组；对角化的推广。</p>` }
    ], refs: [] } }] },
  { chapters: [{
    title: '差分方程初步',
    brief: '离散的动力学。',
    q: [
      { stem: '一阶线性差分方程 x_{n+1} = ax_n + b 的解是：', options: ['等比型加常数项', '多项式', '指数唯一', '无解'], answer: 0, explain: '解结构。' },
      { stem: '差分方程稳定性的条件是：', options: ['特征根模小于 1', '大于 1', '等于 1', '无要求'], answer: 0, explain: '稳定。' },
      { stem: '差分方程与微分方程的关系是：', options: ['离散与连续的对应', '相同', '无关', '互斥'], answer: 0, explain: '对应。' }
    ],
    doc: { lead: '这一章讲离散。', sections: [
      { id: 'linear', title: '线性', html: `<p>一阶与二阶常系数；特征方程；稳定性。</p>` },
      { id: 'model', title: '模型', html: `<p>人口、金融复利、递推算法；Z 变换初步。</p>` }
    ], refs: [] } }] },
  { chapters: [{
    title: '随机过程初步',
    brief: '随时间变化的随机性。',
    q: [
      { stem: '马尔可夫链的核心性质是：', options: ['无后效性', '独立同分布', '连续时间', '高斯性'], answer: 0, explain: '马尔可夫。' },
      { stem: '泊松过程描述：', options: ['随机到达事件的计数', '连续波动', '周期', '确定性'], answer: 0, explain: '泊松。' },
      { stem: '平稳过程指：', options: ['统计特性不随时间平移改变', '方差为零', '均值递增', '独立'], answer: 0, explain: '平稳。' }
    ],
    doc: { lead: '这一章讲过程。', sections: [
      { id: 'markov', title: '马尔可夫链', html: `<p>转移矩阵、平稳分布、遍历性；应用。</p>` },
      { id: 'poisson', title: '泊松与平稳', html: `<p>泊松过程、更新过程；平稳与遍历。</p>` }
    ], refs: [] } }] },
  null, null, null, null, null, null
]);
