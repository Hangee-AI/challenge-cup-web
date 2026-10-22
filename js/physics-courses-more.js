/* ==========================================================
   physics-courses-more.js · 物理学：补齐零头（8 门各 +1 章）
   ========================================================== */

appendChapters('science-物理学', [
  null,
  { chapters: [{
    title: '热力学第三定律与低温',
    brief: '接近绝对零度。',
    q: [
      { stem: '热力学第三定律说明：', options: ['绝对零度不可达到', '可达', '无意义', '温度可为负'], answer: 0, explain: '不可达。' },
      { stem: '低温下固体的热容趋于：', options: ['零', '常数', '无穷', '负值'], answer: 0, explain: '趋于零。' },
      { stem: '获得低温的常用方法是：', options: ['绝热去磁与稀释制冷', '加热', '加压', '通电'], answer: 0, explain: '制冷。' }
    ],
    doc: { lead: '这一章讲低温。', sections: [
      { id: 'third', title: '第三定律', html: `<p>完美晶体 0 K 熵为零；绝对零度不可达。</p>` },
      { id: 'cryogenics', title: '低温技术', html: `<p>绝热去磁、稀释制冷、激光冷却；超流与超导。</p>` }
    ], refs: [] } }] },
  { chapters: [{
    title: '概率统计在物理中的应用',
    brief: '不确定性的数学。',
    q: [
      { stem: '测量误差通常服从：', options: ['正态分布', '均匀分布', '泊松分布', '指数分布'], answer: 0, explain: '正态。' },
      { stem: '统计涨落随计数增大：', options: ['相对减小', '增大', '不变', '消失'], answer: 0, explain: '√N 规律。' },
      { stem: '蒙特卡洛方法用于：', options: ['数值模拟随机过程', '精确求解析解', '替代实验', '计算积分唯一'], answer: 0, explain: '模拟。' }
    ],
    doc: { lead: '这一章讲统计。', sections: [
      { id: 'distribution', title: '分布', html: `<p>正态、二项、泊松；误差传递。</p>` },
      { id: 'simulation', title: '模拟', html: `<p>随机数、蒙特卡洛、抽样；物理中的统计方法。</p>` }
    ], refs: [] } }] },
  { chapters: [{
    title: '电磁场的能量与动量',
    brief: '场也是实在。',
    q: [
      { stem: '坡印亭矢量表示：', options: ['电磁能流密度', '电场强度', '磁场强度', '电荷密度'], answer: 0, explain: '能流。' },
      { stem: '电磁场具有：', options: ['能量、动量与角动量', '只有能量', '只有动量', '无属性'], answer: 0, explain: '多属性。' },
      { stem: '辐射压强说明：', options: ['光对物体有压力', '光无动量', '光速可变', '无作用'], answer: 0, explain: '辐射压。' }
    ],
    doc: { lead: '这一章讲能量。', sections: [
      { id: 'poynting', title: '坡印亭矢量', html: `<p>能流密度、能量密度；电路中的能流。</p>` },
      { id: 'momentum', title: '动量', html: `<p>场动量、辐射压；光镊与太阳帆。</p>` }
    ], refs: [] } }] },
  { chapters: [{
    title: '相干性与现代光学实验',
    brief: '光的相干。',
    q: [
      { stem: '相干长度与谱线宽度：', options: ['成反比', '成正比', '无关', '相等'], answer: 0, explain: '反比。' },
      { stem: '迈克尔逊干涉仪可用于：', options: ['精密测长与测折射率', '测质量', '测电阻', '测温度'], answer: 0, explain: '干涉。' },
      { stem: '全息术记录的是：', options: ['振幅与相位', '只有振幅', '只有相位', '只有颜色'], answer: 0, explain: '全息。' }
    ],
    doc: { lead: '这一章讲相干。', sections: [
      { id: 'coherence', title: '相干性', html: `<p>时间与空间相干、相干长度；激光的相干性。</p>` },
      { id: 'holography', title: '全息与干涉', html: `<p>迈克尔逊、法布里-珀罗；全息记录与再现。</p>` }
    ], refs: [] } }] },
  { chapters: [{
    title: '积分方程初步',
    brief: '未知在积分里。',
    q: [
      { stem: '积分方程与微分方程的关系是：', options: ['可相互转化', '无关', '互斥', '相同'], answer: 0, explain: '等价。' },
      { stem: '弗雷德霍姆方程的特点是：', options: ['积分限固定', '积分限可变', '无积分', '只代数'], answer: 0, explain: '固定限。' },
      { stem: '积分方程在物理中用于：', options: ['散射与边值问题', '只有数学', '无应用', '只计算'], answer: 0, explain: '散射。' }
    ],
    doc: { lead: '这一章讲积分方程。', sections: [
      { id: 'types', title: '类型', html: `<p>弗雷德霍姆、沃尔泰拉；第一类与第二类。</p>` },
      { id: 'method', title: '解法', html: `<p>迭代、积分变换、格林函数；物理应用。</p>` }
    ], refs: [] } }] },
  { chapters: [{
    title: '激光与原子光谱应用',
    brief: '精确测量。',
    q: [
      { stem: '激光冷却原子的原理是：', options: ['光子动量与多普勒效应', '加热', '磁场唯一', '电场唯一'], answer: 0, explain: '冷却。' },
      { stem: '原子钟的精度依赖：', options: ['原子能级跃迁频率的稳定性', '机械振动', '温度', '压力'], answer: 0, explain: '跃迁。' },
      { stem: '激光光谱的作用是：', options: ['精密测量能级与同位素', '测质量', '测电阻', '测颜色'], answer: 0, explain: '光谱。' }
    ],
    doc: { lead: '这一章讲应用。', sections: [
      { id: 'cooling', title: '激光冷却', html: `<p>多普勒冷却、磁光陷阱；玻色-爱因斯坦凝聚。</p>` },
      { id: 'spectroscopy', title: '精密光谱', html: `<p>饱和吸收、频率梳；原子钟与精密测量。</p>` }
    ], refs: [] } }] },
  { chapters: [{
    title: '路径积分初步',
    brief: '所有路径的叠加。',
    q: [
      { stem: '路径积分的基本思想是：', options: ['对所有路径的贡献求和', '只取经典路径', '只取直线', '忽略相位'], answer: 0, explain: '路径。' },
      { stem: '作用量在路径积分中决定：', options: ['相位因子', '振幅唯一', '能量', '动量'], answer: 0, explain: 'e^{iS/ħ}。' },
      { stem: '路径积分与薛定谔方程的关系是：', options: ['等价表述', '互斥', '无关', '近似'], answer: 0, explain: '等价。' }
    ],
    doc: { lead: '这一章讲路径。', sections: [
      { id: 'path', title: '路径积分', html: `<p>传播子、作用量、相位；经典极限与最小作用量。</p>` },
      { id: 'application', title: '应用', html: `<p>量子场论、统计物理；费曼图初步。</p>` }
    ], refs: [] } }] },
  { chapters: [{
    title: '信息熵与最大熵原理',
    brief: '信息的物理。',
    q: [
      { stem: '信息熵衡量：', options: ['不确定性', '能量', '温度', '体积'], answer: 0, explain: '不确定。' },
      { stem: '最大熵原理用于：', options: ['在约束下选择最无偏分布', '求最大值', '求导', '积分'], answer: 0, explain: '无偏。' },
      { stem: '信息熵与热力学熵的关系是：', options: ['本质相通（差一个常数）', '无关', '相反', '相同'], answer: 0, explain: '相通。' }
    ],
    doc: { lead: '这一章讲信息。', sections: [
      { id: 'entropy', title: '信息熵', html: `<p>香农熵、互信息；与热力学熵的联系。</p>` },
      { id: 'maxent', title: '最大熵', html: `<p>约束下的最大熵分布；统计推断与物理应用。</p>` }
    ], refs: [] } }] },
  null, null, null
]);
