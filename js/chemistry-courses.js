/* ==========================================================
   chemistry-courses.js · 化学：12 门课（主干 8 / 出口 4）= 84 关
   ========================================================== */

(function () {
  var MAJOR = 'science-化学';
  var TITLES = stageTitlesOf('science');

  var COURSES = [
    { name: '无机化学', chapters: [
      { title: '原子结构', brief: '电子的家。',
        q: [
          { stem: '四个量子数中决定轨道形状的是：', options: ['l', 'n', 'm', 'm_s'], answer: 0, explain: '角量子数。' },
          { stem: '电子排布遵循的三个原则不包括：', options: ['能量最低', '泡利不相容', '洪特规则', '质量守恒'], answer: 3, explain: '非原则。' },
          { stem: '原子半径的周期变化是：', options: ['同周期从左到右减小', '增大', '不变', '随机'], answer: 0, explain: '有效核电荷。' }
        ],
        doc: { lead: '这一章讲原子。', sections: [
          { id: 'quantum', title: '量子数', html: `<p>n、l、m、m_s；轨道与能级。</p>` },
          { id: 'periodic', title: '周期性', html: `<p>半径、电离能、电负性的变化规律。</p>` }
        ], refs: [] } },
      { title: '分子结构', brief: '化学键。',
        q: [
          { stem: 'VSEPR 理论用于判断：', options: ['分子空间构型', '反应速率', '溶解度', '酸碱性'], answer: 0, explain: '构型。' },
          { stem: '杂化轨道 sp³ 对应：', options: ['四面体', '平面三角', '直线', '八面体'], answer: 0, explain: '四面体。' },
          { stem: '分子间作用力包括：', options: ['色散力、诱导力、取向力、氢键', '只有氢键', '只有色散力', '离子键'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲成键。', sections: [
          { id: 'bond', title: '化学键', html: `<p>离子键、共价键、金属键；键参数。</p>` },
          { id: 'shape', title: '构型', html: `<p>VSEPR、杂化轨道、分子极性；分子间力。</p>` }
        ], refs: [] } },
      { title: '晶体结构', brief: '固体的秩序。',
        q: [
          { stem: 'NaCl 属于：', options: ['离子晶体', '分子晶体', '原子晶体', '金属晶体'], answer: 0, explain: '离子。' },
          { stem: '原子晶体的特点是：', options: ['熔点高、硬度大', '熔点低', '易挥发', '导电'], answer: 0, explain: '原子。' },
          { stem: '晶体缺陷会：', options: ['影响导电与颜色等性质', '无影响', '使晶体消失', '改变元素'], answer: 0, explain: '缺陷。' }
        ],
        doc: { lead: '这一章讲晶体。', sections: [
          { id: 'types', title: '四类晶体', html: `<p>离子、分子、原子、金属；性质比较。</p>` },
          { id: 'defect', title: '缺陷', html: `<p>点缺陷、晶体场初步；固体性质。</p>` }
        ], refs: [] } },
      { title: '化学热力学与平衡', brief: '方向与限度。',
        q: [
          { stem: '反应自发进行的判据是：', options: ['ΔG < 0', 'ΔG > 0', 'ΔH < 0', 'ΔS < 0'], answer: 0, explain: '吉布斯。' },
          { stem: '平衡常数与温度的关系由：', options: ['范特霍夫方程描述', '能斯特方程', '亨利定律', '拉乌尔定律'], answer: 0, explain: '范特霍夫。' },
          { stem: '勒夏特列原理说明：', options: ['平衡向减弱改变的方向移动', '平衡不变', '反应停止', '速率增大'], answer: 0, explain: '移动。' }
        ],
        doc: { lead: '这一章讲平衡。', sections: [
          { id: 'thermo', title: '热力学', html: `<p>焓、熵、吉布斯自由能；自发与平衡。</p>` },
          { id: 'equilibrium', title: '平衡', html: `<p>K、Q、移动方向；温度与压力的影响。</p>` }
        ], refs: [] } },
      { title: '酸碱与沉淀', brief: '溶液中的平衡。',
        q: [
          { stem: 'pH = 7 时（25℃）溶液：', options: ['中性', '酸性', '碱性', '不确定'], answer: 0, explain: '中性。' },
          { stem: '缓冲溶液的作用是：', options: ['抵抗少量酸碱保持 pH', '提高 pH', '降低 pH', '无作用'], answer: 0, explain: '缓冲。' },
          { stem: '溶度积 Ksp 与溶解度的关系是：', options: ['Ksp 越小越难溶', '越大越难溶', '无关', '相等'], answer: 0, explain: 'Ksp。' }
        ],
        doc: { lead: '这一章讲酸碱。', sections: [
          { id: 'acid', title: '酸碱', html: `<p>质子理论、pH、缓冲溶液；水解。</p>` },
          { id: 'precipitate', title: '沉淀', html: `<p>Ksp、同离子效应、分步沉淀；溶解平衡。</p>` }
        ], refs: [] } },
      { title: '氧化还原与电化学', brief: '电子转移。',
        q: [
          { stem: '原电池中氧化发生在：', options: ['负极', '正极', '两极同时', '溶液'], answer: 0, explain: '负极。' },
          { stem: '能斯特方程用于：', options: ['计算电极电势与浓度关系', '计算速率', '计算 Ksp', '判断颜色'], answer: 0, explain: '能斯特。' },
          { stem: '电解池与原电池的区别是：', options: ['是否由外电源驱动', '是否有电极', '是否有电解质', '是否有反应'], answer: 0, explain: '电源。' }
        ],
        doc: { lead: '这一章讲电化学。', sections: [
          { id: 'redox', title: '氧化还原', html: `<p>氧化数、配平；标准电极电势。</p>` },
          { id: 'cell', title: '电池与电解', html: `<p>原电池、电解、腐蚀与防护；能斯特方程。</p>` }
        ], refs: [] } },
      { title: '配位化学', brief: '配合物。',
        q: [
          { stem: '配位键的特点是：', options: ['配体提供孤对电子', '中心离子提供电子', '共用电子对均等', '离子键'], answer: 0, explain: '配位。' },
          { stem: '晶体场理论解释：', options: ['配合物的颜色与磁性', '反应速率', '溶解度', '酸碱性'], answer: 0, explain: '晶体场。' },
          { stem: '螯合物的稳定性通常：', options: ['较高', '较低', '无影响', '为零'], answer: 0, explain: '螯合效应。' }
        ],
        doc: { lead: '这一章讲配合物。', sections: [
          { id: 'complex', title: '配合物', html: `<p>组成、命名、异构；稳定常数。</p>` },
          { id: 'field', title: '晶体场', html: `<p>分裂能、高低自旋；颜色与磁性。</p>` }
        ], refs: [] } },
      { title: '元素化学', brief: '各族的性格。',
        q: [
          { stem: '碱金属的活泼性随原子序数：', options: ['增强', '减弱', '不变', '无规律'], answer: 0, explain: '增强。' },
          { stem: '卤素的氧化性从上到下：', options: ['减弱', '增强', '不变', '无规律'], answer: 0, explain: '减弱。' },
          { stem: '过渡金属的特点是：', options: ['多变价与配位能力强', '只有一价', '无颜色', '不导电'], answer: 0, explain: '过渡。' }
        ],
        doc: { lead: '这一章讲元素。', sections: [
          { id: 'main', title: '主族', html: `<p>s 区与 p 区元素性质递变；重要化合物。</p>` },
          { id: 'transition', title: '过渡', html: `<p>d 区元素、变价、配合物；重要反应。</p>` }
        ], refs: [] } }
    ] },
    { name: '分析化学', chapters: [
      { title: '误差与数据处理', brief: '准不准。',
        q: [
          { stem: '系统误差的特点是：', options: ['可校正、方向一致', '随机', '不可消除', '正负交替'], answer: 0, explain: '系统。' },
          { stem: '有效数字的运算规则中，加减法看：', options: ['小数点后位数', '有效数字位数', '总位数', '整数位'], answer: 0, explain: '小数点。' },
          { stem: '置信区间的意义是：', options: ['真值出现的概率范围', '样本均值', '误差', '标准偏差'], answer: 0, explain: '置信。' }
        ],
        doc: { lead: '这一章讲误差。', sections: [
          { id: 'error', title: '误差', html: `<p>系统与随机误差、准确度与精密度；有效数字。</p>` },
          { id: 'statistics', title: '统计', html: `<p>平均值、标准偏差、置信区间；可疑值取舍。</p>` }
        ], refs: [] } },
      { title: '滴定分析概论', brief: '容量分析。',
        q: [
          { stem: '滴定终点与化学计量点：', options: ['不一定重合', '必然重合', '无关', '相同'], answer: 0, explain: '误差。' },
          { stem: '基准物质的要求包括：', options: ['纯度高、稳定、摩尔质量大', '便宜', '易挥发', '有色'], answer: 0, explain: '基准。' },
          { stem: '滴定度的含义是：', options: ['每毫升标准溶液相当于被测物的质量', '浓度', '体积', '质量'], answer: 0, explain: '滴定度。' }
        ],
        doc: { lead: '这一章讲概论。', sections: [
          { id: 'basic', title: '基本概念', html: `<p>标准溶液、基准物质、计量点与终点；指示剂。</p>` },
          { id: 'calculation', title: '计算', html: `<p>滴定度、浓度换算；误差来源。</p>` }
        ], refs: [] } },
      { title: '酸碱滴定', brief: 'pH 的变化。',
        q: [
          { stem: '强酸滴定强碱的突跃范围取决于：', options: ['浓度', '温度', '指示剂', '体积'], answer: 0, explain: '浓度。' },
          { stem: '选择指示剂的原则是：', options: ['变色范围落在突跃范围内', '颜色好看', '越灵敏越好', '任意'], answer: 0, explain: '突跃。' },
          { stem: '弱酸滴定需考虑：', options: ['Ka 与浓度对突跃的影响', '只有浓度', '只有温度', '颜色'], answer: 0, explain: '弱酸。' }
        ],
        doc: { lead: '这一章讲酸碱。', sections: [
          { id: 'curve', title: '滴定曲线', html: `<p>强酸强碱、弱酸弱碱；突跃范围。</p>` },
          { id: 'indicator', title: '指示剂', html: `<p>变色原理、选择原则；混合指示剂。</p>` }
        ], refs: [] } },
      { title: '配位与氧化还原滴定', brief: '两类滴定。',
        q: [
          { stem: 'EDTA 滴定属于：', options: ['配位滴定', '酸碱滴定', '沉淀滴定', '氧化还原'], answer: 0, explain: '配位。' },
          { stem: '高锰酸钾法属于：', options: ['氧化还原滴定', '配位', '酸碱', '沉淀'], answer: 0, explain: '氧化还原。' },
          { stem: '配位滴定的关键是：', options: ['控制 pH 与掩蔽干扰', '加热', '加压', '光照'], answer: 0, explain: 'pH。' }
        ],
        doc: { lead: '这一章讲两类。', sections: [
          { id: 'complex', title: '配位滴定', html: `<p>EDTA、条件稳定常数、金属指示剂；掩蔽。</p>` },
          { id: 'redox', title: '氧化还原', html: `<p>高锰酸钾、重铬酸钾、碘量法；终点判断。</p>` }
        ], refs: [] } },
      { title: '重量分析与沉淀滴定', brief: '称重法。',
        q: [
          { stem: '重量分析的关键步骤是：', options: ['沉淀、过滤、洗涤、灼烧、称量', '只有称量', '只有沉淀', '只有过滤'], answer: 0, explain: '步骤。' },
          { stem: '沉淀的完全程度取决于：', options: ['溶度积与同离子效应', '温度唯一', '速度', '搅拌'], answer: 0, explain: 'Ksp。' },
          { stem: '陈化（熟化）的作用是：', options: ['获得大而纯的晶粒', '加快沉淀', '减少用量', '改变颜色'], answer: 0, explain: '陈化。' }
        ],
        doc: { lead: '这一章讲重量。', sections: [
          { id: 'gravimetric', title: '重量法', html: `<p>沉淀条件、共沉淀与后沉淀；灼烧与恒重。</p>` },
          { id: 'precipitation', title: '沉淀滴定', html: `<p>银量法、终点指示；应用。</p>` }
        ], refs: [] } },
      { title: '分光光度法', brief: '颜色测浓度。',
        q: [
          { stem: '朗伯-比尔定律说明吸光度与：', options: ['浓度和光程成正比', '浓度成反比', '波长成正比', '无关'], answer: 0, explain: '比尔。' },
          { stem: '最大吸收波长用于：', options: ['提高灵敏度与减少干扰', '改变颜色', '降低浓度', '测 pH'], answer: 0, explain: '最大吸收。' },
          { stem: '偏离比尔定律的原因包括：', options: ['高浓度、多色光、化学平衡', '只有温度', '只有溶剂', '无原因'], answer: 0, explain: '偏离。' }
        ],
        doc: { lead: '这一章讲光度。', sections: [
          { id: 'beer', title: '比尔定律', html: `<p>A = εbc；吸光度与透射比。</p>` },
          { id: 'method', title: '方法', html: `<p>标准曲线、显色条件、干扰消除；偏差原因。</p>` }
        ], refs: [] } },
      { title: '样品前处理', brief: '把样品变成溶液。',
        q: [
          { stem: '样品前处理的目的包括：', options: ['消解、分离、富集、去除干扰', '只有消解', '只有分离', '只有富集'], answer: 0, explain: '多目的。' },
          { stem: '湿法消解常用：', options: ['酸与氧化剂', '水', '有机溶剂', '碱唯一'], answer: 0, explain: '混酸。' },
          { stem: '前处理过程中的损失会导致：', options: ['结果偏低或失真', '无影响', '结果偏高唯一', '颜色变化'], answer: 0, explain: '损失。' }
        ],
        doc: { lead: '这一章讲前处理。', sections: [
          { id: 'digestion', title: '消解', html: `<p>湿法、干法、微波消解；试剂与空白。</p>` },
          { id: 'separation', title: '分离富集', html: `<p>萃取、沉淀、离子交换；回收率。</p>` }
        ], refs: [] } },
      { title: '质量控制', brief: '结果可信吗。',
        q: [
          { stem: '质量控制常用的手段是：', options: ['空白、平行、加标回收、标准物质', '只有空白', '只有平行', '只有加标'], answer: 0, explain: '多种。' },
          { stem: '加标回收率反映：', options: ['准确度', '精密度', '灵敏度', '选择性'], answer: 0, explain: '准确度。' },
          { stem: '检出限的意义是：', options: ['能可靠检出的最低浓度', '最高浓度', '平均浓度', '任意'], answer: 0, explain: '检出限。' }
        ],
        doc: { lead: '这一章讲质控。', sections: [
          { id: 'qa', title: '质控', html: `<p>空白、平行、加标、标准物质；控制图。</p>` },
          { id: 'validation', title: '验证', html: `<p>准确度、精密度、检出限、线性范围；方法确认。</p>` }
        ], refs: [] } }
    ] },
    { name: '高等数学（化学类）', chapters: [
      { title: '极限与连续', brief: '基础。',
        q: [
          { stem: 'lim(x→0) sinx/x 等于：', options: ['1', '0', '∞', '不存在'], answer: 0, explain: '重要极限。' },
          { stem: '连续函数在闭区间上：', options: ['有界且可取到最值', '必可导', '必单调', '无最值'], answer: 0, explain: '性质。' },
          { stem: '化学中的反应速率常用：', options: ['导数描述', '积分', '矩阵', '概率'], answer: 0, explain: '导数。' }
        ],
        doc: { lead: '这一章讲极限。', sections: [
          { id: 'limit', title: '极限', html: `<p>定义、运算法则、两个重要极限。</p>` },
          { id: 'continuity', title: '连续', html: `<p>连续与间断；闭区间性质。</p>` }
        ], refs: [] } },
      { title: '导数与应用', brief: '变化率。',
        q: [
          { stem: '反应速率是浓度对时间的：', options: ['导数', '积分', '对数', '极限'], answer: 0, explain: '导数。' },
          { stem: '求极值的条件是：', options: ['一阶导为零且二阶导判号', '导数不存在唯一', '函数为零', '任意'], answer: 0, explain: '极值。' },
          { stem: '化学中的最优化问题常用：', options: ['求导', '积分', '矩阵', '概率'], answer: 0, explain: '优化。' }
        ],
        doc: { lead: '这一章讲导数。', sections: [
          { id: 'derivative', title: '导数', html: `<p>求导法则、复合与隐函数；微分。</p>` },
          { id: 'application', title: '应用', html: `<p>极值、最优化、相关变化率；反应速率。</p>` }
        ], refs: [] } },
      { title: '积分', brief: '累积量。',
        q: [
          { stem: '由速率求浓度变化需要：', options: ['积分', '求导', '矩阵', '概率'], answer: 0, explain: '积分。' },
          { stem: '定积分可计算：', options: ['曲线下面积与总量', '斜率', '极值', '概率'], answer: 0, explain: '面积。' },
          { stem: '化学热力学中的功可表示为：', options: ['积 ∫p dV', '导数', '矩阵', '级数'], answer: 0, explain: '功。' }
        ],
        doc: { lead: '这一章讲积分。', sections: [
          { id: 'integral', title: '积分', html: `<p>不定与定积分；换元、分部。</p>` },
          { id: 'application', title: '应用', html: `<p>面积、体积、功；由速率求总量。</p>` }
        ], refs: [] } },
      { title: '微分方程', brief: '动力学。',
        q: [
          { stem: '一级反应的速率方程是：', options: ['dc/dt = −kc', 'dc/dt = −kc²', 'dc/dt = k', 'c = kt'], answer: 0, explain: '一级。' },
          { stem: '一级反应的半衰期：', options: ['与初始浓度无关', '成正比', '成反比', '为零'], answer: 0, explain: '常数。' },
          { stem: '微分方程的解给出：', options: ['浓度随时间的变化', '平衡常数', '焓变', '颜色'], answer: 0, explain: '解。' }
        ],
        doc: { lead: '这一章讲方程。', sections: [
          { id: 'first', title: '一阶', html: `<p>可分离、线性；一级与二级反应。</p>` },
          { id: 'application', title: '应用', html: `<p>反应动力学、放射性衰变；半衰期。</p>` }
        ], refs: [] } },
      { title: '线性代数', brief: '多组分。',
        q: [
          { stem: '线性方程组可用于：', options: ['多组分平衡计算', '求导', '积分', '概率'], answer: 0, explain: '方程组。' },
          { stem: '矩阵在化学中的用途包括：', options: ['光谱数据与多元分析', '只有解方程', '只有几何', '无用途'], answer: 0, explain: '多元。' },
          { stem: '特征值可用于：', options: ['分子振动分析', '求积分', '求极限', '测 pH'], answer: 0, explain: '振动。' }
        ],
        doc: { lead: '这一章讲线代。', sections: [
          { id: 'matrix', title: '矩阵', html: `<p>运算、逆矩阵、线性方程组；行列式。</p>` },
          { id: 'application', title: '应用', html: `<p>多组分分析、振动模式；主成分初步。</p>` }
        ], refs: [] } },
      { title: '概率与统计', brief: '误差的语言。',
        q: [
          { stem: '正态分布常用于描述：', options: ['随机误差', '系统误差', '粗差', '无误差'], answer: 0, explain: '随机。' },
          { stem: '标准偏差衡量：', options: ['数据的离散程度', '平均值', '极值', '中位数'], answer: 0, explain: '离散。' },
          { stem: 't 检验用于：', options: ['比较均值差异显著性', '计算浓度', '求导', '画图'], answer: 0, explain: '检验。' }
        ],
        doc: { lead: '这一章讲统计。', sections: [
          { id: 'probability', title: '概率', html: `<p>随机变量、正态分布；期望与方差。</p>` },
          { id: 'statistics', title: '统计', html: `<p>参数估计、假设检验、回归；分析化学应用。</p>` }
        ], refs: [] } },
      { title: '数据处理与误差传递', brief: '算得准。',
        q: [
          { stem: '误差传递公式用于：', options: ['由各量误差估计结果误差', '求平均值', '判显著性', '画图'], answer: 0, explain: '传递。' },
          { stem: '最小二乘法用于：', options: ['拟合标准曲线', '求导', '积分', '解方程'], answer: 0, explain: '拟合。' },
          { stem: '相关系数 R² 越接近 1 表示：', options: ['线性越好', '越差', '无关系', '误差大'], answer: 0, explain: '拟合。' }
        ],
        doc: { lead: '这一章讲数据。', sections: [
          { id: 'propagation', title: '误差传递', html: `<p>加减与乘除的传递公式；相对误差。</p>` },
          { id: 'fitting', title: '拟合', html: `<p>最小二乘、相关系数；标准曲线与检出限。</p>` }
        ], refs: [] } },
      { title: '化学计量与计算', brief: '算明白。',
        q: [
          { stem: '物质的量与质量的关系是：', options: ['n = m/M', 'n = mM', 'n = M/m', 'n = m+M'], answer: 0, explain: 'n=m/M。' },
          { stem: '摩尔浓度是：', options: ['n/V', 'm/V', 'n·V', 'V/n'], answer: 0, explain: 'c=n/V。' },
          { stem: '化学计量计算的关键是：', options: ['配平方程与物质的量比', '记公式', '估算', '查表'], answer: 0, explain: '计量比。' }
        ],
        doc: { lead: '这一章讲计算。', sections: [
          { id: 'mole', title: '物质的量', html: `<p>摩尔、摩尔质量、浓度；稀释与配制。</p>` },
          { id: 'stoichiometry', title: '计量', html: `<p>方程式配平、限量试剂、产率；滴定计算。</p>` }
        ], refs: [] } }
    ] },
    { name: '有机化学', chapters: [
      { title: '烷烃与立体化学', brief: '碳的骨架。',
        q: [
          { stem: 'sp³ 杂化碳的键角约为：', options: ['109.5°', '120°', '180°', '90°'], answer: 0, explain: '四面体。' },
          { stem: '手性分子的特征是：', options: ['不能与其镜像重合', '有对称面', '有对称中心', '无旋光性'], answer: 0, explain: '手性。' },
          { stem: '构象异构与构型异构的区别是：', options: ['能否通过单键旋转互变', '是否手性', '是否有双键', '分子式'], answer: 0, explain: '旋转。' }
        ],
        doc: { lead: '这一章讲烷烃。', sections: [
          { id: 'alkane', title: '烷烃', html: `<p>命名、构象（交叉/重叠）；自由基取代。</p>` },
          { id: 'stereo', title: '立体化学', html: `<p>手性、R/S、对映体与非对映体；旋光性。</p>` }
        ], refs: [] } },
      { title: '烯烃与炔烃', brief: '不饱和键。',
        q: [
          { stem: '烯烃的典型反应是：', options: ['加成', '取代', '消除唯一', '重排'], answer: 0, explain: '加成。' },
          { stem: '马氏规则说明：', options: ['氢加到含氢较多的碳上', '加到含氢较少的碳', '随机', '不加成'], answer: 0, explain: '马氏。' },
          { stem: '炔烃的酸性来自：', options: ['端基炔氢', '双键', '烷基', '卤素'], answer: 0, explain: '端炔。' }
        ],
        doc: { lead: '这一章讲不饱和。', sections: [
          { id: 'alkene', title: '烯烃', html: `<p>亲电加成、马氏规则、过氧化物效应；氧化与聚合。</p>` },
          { id: 'alkyne', title: '炔烃', html: `<p>加成、端炔酸性、偶联；二烯与共轭。</p>` }
        ], refs: [] } },
      { title: '芳香烃', brief: '苯的化学。',
        q: [
          { stem: '芳香性的判据是：', options: ['平面环状共轭且 4n+2 个 π 电子', '有双键', '有苯环唯一', '有取代基'], answer: 0, explain: '休克尔。' },
          { stem: '亲电取代的定位效应中，邻对位定位基：', options: ['多为给电子基', '吸电子基', '无影响', '使反应变难'], answer: 0, explain: '给电子。' },
          { stem: 'Friedel-Crafts 反应属于：', options: ['亲电取代', '亲核取代', '加成', '消除'], answer: 0, explain: '取代。' }
        ],
        doc: { lead: '这一章讲芳香。', sections: [
          { id: 'aromatic', title: '芳香性', html: `<p>休克尔规则、苯的结构；多环与杂环。</p>` },
          { id: 'substitution', title: '取代', html: `<p>硝化、卤代、烷基化、酰基化；定位效应。</p>` }
        ], refs: [] } },
      { title: '卤代烃与醇醚', brief: '取代与消除。',
        q: [
          { stem: 'SN1 与 SN2 的区别是：', options: ['分步与协同、是否形成碳正离子', '速率', '溶剂', '温度'], answer: 0, explain: '机理。' },
          { stem: 'E2 消除的立体要求是：', options: ['反式共平面', '顺式', '任意', '垂直'], answer: 0, explain: '反式。' },
          { stem: '醇的脱水属于：', options: ['消除反应', '取代', '加成', '重排'], answer: 0, explain: '消除。' }
        ],
        doc: { lead: '这一章讲取代。', sections: [
          { id: 'substitution', title: '取代', html: `<p>SN1、SN2、碳正离子重排；影响因数。</p>` },
          { id: 'elimination', title: '消除', html: `<p>E1、E2、择向规则；醇醚反应。</p>` }
        ], refs: [] } },
      { title: '醛酮与羧酸', brief: '羰基化学。',
        q: [
          { stem: '羰基的典型反应是：', options: ['亲核加成', '亲电加成', '自由基取代', '消除'], answer: 0, explain: '亲核加成。' },
          { stem: '羧酸的酸性来自：', options: ['羧基的共轭碱稳定', '烷基', '氢键', '分子量'], answer: 0, explain: '共轭。' },
          { stem: '酯化反应属于：', options: ['亲核酰基取代', '加成', '消除', '重排'], answer: 0, explain: '酰基取代。' }
        ],
        doc: { lead: '这一章讲羰基。', sections: [
          { id: 'carbonyl', title: '醛酮', html: `<p>亲核加成、缩合、氧化还原；α-H 的酸性。</p>` },
          { id: 'acid', title: '羧酸及衍生物', html: `<p>酸性、酯化、水解、酰卤与酰胺。</p>` }
        ], refs: [] } },
      { title: '胺与杂环', brief: '含氮化合物。',
        q: [
          { stem: '胺的碱性取决于：', options: ['氮上孤对电子与取代基效应', '分子量', '沸点', '颜色'], answer: 0, explain: '电子效应。' },
          { stem: '重氮盐的用途是：', options: ['合成多种取代苯', '只有染料', '无用途', '只做偶联'], answer: 0, explain: '重氮。' },
          { stem: '吡啶的碱性比苯胺：', options: ['强', '弱', '相同', '无'], answer: 0, explain: '吡啶。' }
        ],
        doc: { lead: '这一章讲含氮。', sections: [
          { id: 'amine', title: '胺', html: `<p>碱性、酰化、重氮化；霍夫曼降解。</p>` },
          { id: 'heterocycle', title: '杂环', html: `<p>吡啶、吡咯、呋喃、噻吩；芳香性与碱性。</p>` }
        ], refs: [] } },
      { title: '波谱解析', brief: '看懂谱图。',
        q: [
          { stem: '红外光谱主要提供：', options: ['官能团信息', '分子量', '碳骨架', '氢数目'], answer: 0, explain: '官能团。' },
          { stem: '核磁共振氢谱的积分面积对应：', options: ['氢原子数目比', '碳数', '分子量', '键长'], answer: 0, explain: '积分。' },
          { stem: '质谱的分子离子峰给出：', options: ['分子量', '官能团', '氢环境', '键角'], answer: 0, explain: '分子量。' }
        ],
        doc: { lead: '这一章讲谱学。', sections: [
          { id: 'ir', title: '红外', html: `<p>特征频率、官能团区与指纹区。</p>` },
          { id: 'nmr', title: 'NMR 与 MS', html: `<p>化学位移、裂分、积分；分子离子与碎片。</p>` }
        ], refs: [] } },
      { title: '反应机理', brief: '为什么这样反应。',
        q: [
          { stem: '自由基链反应的三步是：', options: ['引发、增长、终止', '加成、消除、重排', '氧化、还原、水解', '取代、加成、聚合'], answer: 0, explain: '三步。' },
          { stem: '碳正离子的稳定性顺序是：', options: ['叔 > 仲 > 伯 > 甲基', '伯 > 仲 > 叔', '相同', '甲基最稳'], answer: 0, explain: '超共轭。' },
          { stem: '周环反应遵循：', options: ['分子轨道对称守恒原理', '马氏规则', '休克尔规则', '查依采夫规则'], answer: 0, explain: ' Woodward-Hoffmann。' }
        ],
        doc: { lead: '这一章讲机理。', sections: [
          { id: 'radical', title: '自由基', html: `<p>链反应、稳定性；卤代选择性。</p>` },
          { id: 'pericyclic', title: '周环', html: `<p>电环化、环加成、σ 迁移；轨道对称性。</p>` }
        ], refs: [] } }
    ] },
    { name: '物理化学', chapters: [
      { title: '热力学第一定律', brief: '能量。',
        q: [
          { stem: '热力学第一定律的表达式是：', options: ['ΔU = Q + W', 'ΔU = Q − W', 'ΔH = Q', 'ΔG = 0'], answer: 0, explain: '符号约定。' },
          { stem: '等压过程的热效应等于：', options: ['ΔH', 'ΔU', 'ΔS', 'ΔG'], answer: 0, explain: '焓。' },
          { stem: '盖斯定律说明：', options: ['反应热与路径无关', '与路径有关', '只与温度有关', '无规律'], answer: 0, explain: '状态函数。' }
        ],
        doc: { lead: '这一章讲第一定律。', sections: [
          { id: 'work', title: '功与热', html: `<p>体积功、可逆过程；热容。</p>` },
          { id: 'enthalpy', title: '焓', html: `<p>ΔH、生成焓、燃烧焓；盖斯定律与基尔霍夫定律。</p>` }
        ], refs: [] } },
      { title: '热力学第二定律', brief: '方向。',
        q: [
          { stem: '熵增原理适用于：', options: ['孤立系统', '任何系统', '封闭系统唯一', '开放系统'], answer: 0, explain: '孤立。' },
          { stem: '吉布斯自由能判据是：', options: ['ΔG < 0 自发', 'ΔG > 0 自发', 'ΔS > 0 自发', 'ΔH < 0 自发'], answer: 0, explain: 'ΔG。' },
          { stem: '标准熵的规定是：', options: ['完美晶体 0 K 时为零', '任意', '25℃为零', '气体为零'], answer: 0, explain: '第三定律。' }
        ],
        doc: { lead: '这一章讲第二定律。', sections: [
          { id: 'entropy', title: '熵', html: `<p>熵变计算、卡诺循环；热力学第三定律。</p>` },
          { id: 'gibbs', title: '自由能', html: `<p>ΔG、ΔA；自发判据与平衡。</p>` }
        ], refs: [] } },
      { title: '化学势与相平衡', brief: '多相。',
        q: [
          { stem: '化学势是：', options: ['偏摩尔吉布斯自由能', '焓', '熵', '内能'], answer: 0, explain: '偏摩尔。' },
          { stem: '相律的表达式是：', options: ['f = C − P + 2', 'f = C + P', 'f = P − C', 'f = C·P'], answer: 0, explain: '相律。' },
          { stem: '克拉珀龙方程描述：', options: ['相变温度与压力的关系', '反应速率', '平衡常数', '浓度'], answer: 0, explain: '相变。' }
        ],
        doc: { lead: '这一章讲相平衡。', sections: [
          { id: 'potential', title: '化学势', html: `<p>偏摩尔量、化学势判据；理想溶液。</p>` },
          { id: 'phase', title: '相平衡', html: `<p>相律、相图（水、二组分）；克拉珀龙方程。</p>` }
        ], refs: [] } },
      { title: '化学平衡', brief: '限度。',
        q: [
          { stem: '标准平衡常数与 ΔG° 的关系是：', options: ['ΔG° = −RT lnK°', 'ΔG° = RT lnK°', 'ΔG° = K°', '无关'], answer: 0, explain: '关系式。' },
          { stem: '温度升高对放热反应：', options: ['K 减小', 'K 增大', '不变', '无影响'], answer: 0, explain: '放热。' },
          { stem: '平衡常数与压力：', options: ['K° 只与温度有关', '随压力变化', '随浓度变化', '无关'], answer: 0, explain: '温度。' }
        ],
        doc: { lead: '这一章讲平衡。', sections: [
          { id: 'constant', title: '平衡常数', html: `<p>K°、活度、标准态；与 ΔG° 的关系。</p>` },
          { id: 'shift', title: '移动', html: `<p>温度、压力、组成的影响；范特霍夫方程。</p>` }
        ], refs: [] } },
      { title: '电化学', brief: '电与化学。',
        q: [
          { stem: '电池电动势与 ΔG 的关系是：', options: ['ΔG = −nFE', 'ΔG = nFE', 'ΔG = E', '无关'], answer: 0, explain: '关系。' },
          { stem: '能斯特方程描述：', options: ['电极电势与浓度的关系', '速率', '平衡', '相变'], answer: 0, explain: '能斯特。' },
          { stem: '电解时的超电势导致：', options: ['实际分解电压高于理论值', '低于理论', '相等', '无影响'], answer: 0, explain: '超电势。' }
        ],
        doc: { lead: '这一章讲电化学。', sections: [
          { id: 'cell', title: '电池', html: `<p>可逆电池、电动势、能斯特方程；活度与标准电势。</p>` },
          { id: 'electrolysis', title: '电解', html: `<p>分解电压、超电势、极化；应用。</p>` }
        ], refs: [] } },
      { title: '化学动力学', brief: '快慢。',
        q: [
          { stem: '反应级数由什么确定？', options: ['实验（速率方程）', '方程式配平', '温度', '催化剂'], answer: 0, explain: '实验。' },
          { stem: '阿伦尼乌斯方程描述：', options: ['速率常数与温度的关系', '浓度关系', '压力关系', '相变'], answer: 0, explain: '阿伦尼乌斯。' },
          { stem: '催化剂的作用是：', options: ['降低活化能、加快反应', '提高产率', '改变平衡常数', '消耗自身'], answer: 0, explain: '活化能。' }
        ],
        doc: { lead: '这一章讲动力学。', sections: [
          { id: 'rate', title: '速率', html: `<p>速率方程、级数、半衰期；确定级数的方法。</p>` },
          { id: 'mechanism', title: '机理', html: `<p>基元反应、稳态近似、决速步；催化与酶动力学。</p>` }
        ], refs: [] } },
      { title: '表面与胶体', brief: '界面现象。',
        q: [
          { stem: '表面张力的原因是：', options: ['表面分子受力不平衡', '温度', '压力', '体积'], answer: 0, explain: '表面张力。' },
          { stem: '朗缪尔吸附等温式的假设是：', options: ['单分子层吸附', '多分子层', '无吸附', '化学吸附唯一'], answer: 0, explain: '单层。' },
          { stem: '胶体的稳定性依赖：', options: ['双电层与空间位阻', '只有温度', '只有浓度', '无因素'], answer: 0, explain: '稳定。' }
        ],
        doc: { lead: '这一章讲界面。', sections: [
          { id: 'surface', title: '表面', html: `<p>表面张力、润湿、吸附；朗缪尔与 BET。</p>` },
          { id: 'colloid', title: '胶体', html: `<p>胶体性质、双电层、聚沉；乳状液与表面活性剂。</p>` }
        ], refs: [] } },
      { title: '统计热力学初步', brief: '微观解释。',
        q: [
          { stem: '配分函数与热力学量的关系是：', options: ['可通过配分函数计算', '无关', '只与熵有关', '只与焓有关'], answer: 0, explain: '配分。' },
          { stem: '玻尔兹曼分布在什么条件下适用？', options: ['经典极限', '极低温', '高密度', '强相互作用'], answer: 0, explain: '经典。' },
          { stem: '统计热力学的价值是：', options: ['由分子性质计算宏观性质', '装饰', '替代实验', '无价值'], answer: 0, explain: '桥梁。' }
        ],
        doc: { lead: '这一章讲统计。', sections: [
          { id: 'partition', title: '配分函数', html: `<p>平动、转动、振动；热力学函数。</p>` },
          { id: 'application', title: '应用', html: `<p>平衡常数计算、热容、熵的统计解释。</p>` }
        ], refs: [] } }
    ] },
    { name: '仪器分析', chapters: [
      { title: '光谱分析概论', brief: '光与物质。',
        q: [
          { stem: '原子光谱与分子光谱的区别是：', options: ['是否涉及分子振动转动', '波长', '强度', '仪器'], answer: 0, explain: '能级。' },
          { stem: '吸收光谱与发射光谱的区别是：', options: ['是否测量吸收', '波长', '强度', '仪器'], answer: 0, explain: '吸收。' },
          { stem: '朗伯-比尔定律的适用条件是：', options: ['稀溶液、单色光', '浓溶液', '多色光', '任意'], answer: 0, explain: '条件。' }
        ],
        doc: { lead: '这一章讲概论。', sections: [
          { id: 'principle', title: '原理', html: `<p>能级跃迁、吸收与发射；光谱类型。</p>` },
          { id: 'law', title: '定量基础', html: `<p>比尔定律、灵敏度、选择性。</p>` }
        ], refs: [] } },
      { title: '紫外-可见光谱', brief: '共轭与颜色。',
        q: [
          { stem: '紫外可见吸收主要源于：', options: ['电子跃迁', '振动', '转动', '核跃迁'], answer: 0, explain: '电子。' },
          { stem: '共轭体系延长会使吸收峰：', options: ['红移', '蓝移', '不变', '消失'], answer: 0, explain: '红移。' },
          { stem: '紫外可见法的局限是：', options: ['选择性较差、易受干扰', '灵敏度低', '不能定量', '设备复杂'], answer: 0, explain: '选择性。' }
        ],
        doc: { lead: '这一章讲 UV-Vis。', sections: [
          { id: 'transition', title: '跃迁', html: `<p>σ→σ*、π→π*、n→π*；生色团与助色团。</p>` },
          { id: 'application', title: '应用', html: `<p>定量分析、纯度检查；导数光谱。</p>` }
        ], refs: [] } },
      { title: '红外光谱', brief: '官能团的指纹。',
        q: [
          { stem: '红外吸收源于：', options: ['分子振动能级跃迁', '电子跃迁', '转动', '核'], answer: 0, explain: '振动。' },
          { stem: '红外活性的条件是：', options: ['振动引起偶极矩变化', '必须有极性', '必须有双键', '必须对称'], answer: 0, explain: '偶极矩。' },
          { stem: '指纹区的作用是：', options: ['识别化合物特征', '定量', '测分子量', '测 pH'], answer: 0, explain: '指纹。' }
        ],
        doc: { lead: '这一章讲 IR。', sections: [
          { id: 'vibration', title: '振动', html: `<p>伸缩与弯曲、特征频率；影响因数。</p>` },
          { id: 'spectrum', title: '谱图', html: `<p>官能团区与指纹区；常见基团吸收。</p>` }
        ], refs: [] } },
      { title: '原子吸收光谱', brief: '测金属。',
        q: [
          { stem: '原子吸收光谱主要用于：', options: ['金属元素定量', '有机物结构', '阴离子', '气体'], answer: 0, explain: '金属。' },
          { stem: '空心阴极灯的作用是：', options: ['提供待测元素的特征谱线', '加热', '雾化', '检测'], answer: 0, explain: '光源。' },
          { stem: '基体干扰的消除方法包括：', options: ['基体改进剂、标准加入法', '稀释', '加热', '过滤'], answer: 0, explain: '干扰。' }
        ],
        doc: { lead: '这一章讲 AAS。', sections: [
          { id: 'principle', title: '原理', html: `<p>原子化、特征吸收；朗伯-比尔。</p>` },
          { id: 'interference', title: '干扰', html: `<p>物理、化学、光谱干扰；消除方法。</p>` }
        ], refs: [] } },
      { title: '色谱概论', brief: '分离的艺术。',
        q: [
          { stem: '色谱分离的基础是：', options: ['组分在两相间分配差异', '沸点', '密度', '颜色'], answer: 0, explain: '分配。' },
          { stem: '保留时间的作用是：', options: ['定性依据', '定量唯一', '分离度', '柱效'], answer: 0, explain: '定性。' },
          { stem: '理论塔板数衡量：', options: ['柱效', '灵敏度', '选择性', '线性'], answer: 0, explain: '柱效。' }
        ],
        doc: { lead: '这一章讲概论。', sections: [
          { id: 'principle', title: '原理', html: `<p>分配系数、保留时间、分离度；塔板与速率理论。</p>` },
          { id: 'types', title: '类型', html: `<p>气液、液固、离子交换、凝胶；正相与反相。</p>` }
        ], refs: [] } },
      { title: '气相色谱', brief: '挥发物。',
        q: [
          { stem: '气相色谱适用于：', options: ['挥发性、热稳定性好的物质', '所有物质', '只有无机物', '只有高分子'], answer: 0, explain: '挥发性。' },
          { stem: '检测器的选择取决于：', options: ['待测物性质与灵敏度要求', '柱温', '载气', '进样量'], answer: 0, explain: '检测器。' },
          { stem: '程序升温的作用是：', options: ['改善宽沸程样品的分离', '加快载气', '提高柱压', '减少进样'], answer: 0, explain: '程序升温。' }
        ],
        doc: { lead: '这一章讲 GC。', sections: [
          { id: 'system', title: '系统', html: `<p>载气、进样、色谱柱、检测器；FID、TCD、ECD。</p>` },
          { id: 'application', title: '应用', html: `<p>程序升温、分流比、定性定量；衍生化。</p>` }
        ], refs: [] } },
      { title: '液相色谱', brief: '不挥发物。',
        q: [
          { stem: '高效液相色谱的优势是：', options: ['适用于不挥发、热不稳定物质', '速度快唯一', '成本低', '无需检测器'], answer: 0, explain: '适用。' },
          { stem: '反相色谱的固定相通常是：', options: ['非极性（C18）', '极性', '离子交换', '凝胶'], answer: 0, explain: 'C18。' },
          { stem: '梯度洗脱的作用是：', options: ['改善复杂样品的分离', '提高流速', '降低柱压', '减少检测'], answer: 0, explain: '梯度。' }
        ],
        doc: { lead: '这一章讲 HPLC。', sections: [
          { id: 'system', title: '系统', html: `<p>泵、进样器、色谱柱、检测器；反相与正相。</p>` },
          { id: 'method', title: '方法', html: `<p>等度与梯度、流动相选择、方法开发。</p>` }
        ], refs: [] } },
      { title: '质谱与联用', brief: '分子量与结构。',
        q: [
          { stem: '质谱提供的信息是：', options: ['分子量与碎片结构', '官能团唯一', '氢环境', '键角'], answer: 0, explain: '质谱。' },
          { stem: 'GC-MS 的优势是：', options: ['分离与定性结合', '成本低', '速度快唯一', '无需标准品'], answer: 0, explain: '联用。' },
          { stem: '串联质谱（MS/MS）的作用是：', options: ['提高选择性与结构解析能力', '提高灵敏度唯一', '降低成本', '简化操作'], answer: 0, explain: 'MS/MS。' }
        ],
        doc: { lead: '这一章讲质谱。', sections: [
          { id: 'ionization', title: '电离', html: `<p>EI、ESI、MALDI；质量分析器。</p>` },
          { id: 'hyphenated', title: '联用', html: `<p>GC-MS、LC-MS；谱库检索与定量。</p>` }
        ], refs: [] } }
    ] },
    { name: '结构化学', chapters: [
      { title: '量子力学基础', brief: '微观规律。',
        q: [
          { stem: '波函数的平方表示：', options: ['概率密度', '能量', '动量', '电荷'], answer: 0, explain: '概率。' },
          { stem: '不确定性关系是：', options: ['ΔxΔp ≥ ħ/2', 'ΔxΔp = 0', 'Δx ≥ Δp', '无限制'], answer: 0, explain: '海森堡。' },
          { stem: '薛定谔方程的解给出：', options: ['波函数与能级', '轨迹', '力', '速率'], answer: 0, explain: '解。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'wavefunction', title: '波函数', html: `<p>概率解释、归一化；算符与本征值。</p>` },
          { id: 'equation', title: '方程', html: `<p>定态薛定谔方程；一维势阱与谐振子。</p>` }
        ], refs: [] } },
      { title: '原子结构', brief: '电子排布。',
        q: [
          { stem: '氢原子能级由哪个量子数决定？', options: ['n', 'l', 'm', 'm_s'], answer: 0, explain: 'n。' },
          { stem: '多电子原子的能级顺序由：', options: ['n+0.7l 规则等近似', '只有 n', '只有 l', '随机'], answer: 0, explain: '能级交错。' },
          { stem: '原子光谱的精细结构源于：', options: ['自旋-轨道耦合', '核自旋唯一', '同位素', '温度'], answer: 0, explain: '耦合。' }
        ],
        doc: { lead: '这一章讲原子。', sections: [
          { id: 'hydrogen', title: '氢原子', html: `<p>量子数、轨道形状、径向分布。</p>` },
          { id: 'multi', title: '多电子', html: `<p>屏蔽、能级交错、光谱项；选择定则。</p>` }
        ], refs: [] } },
      { title: '分子轨道理论', brief: '电子的分子世界。',
        q: [
          { stem: '成键轨道与反键轨道：', options: ['成键能量低、反键能量高', '相同', '反键更低', '无差别'], answer: 0, explain: '能量。' },
          { stem: '键级等于：', options: ['(成键电子数 − 反键电子数)/2', '电子总数', '成键电子数', '反键电子数'], answer: 0, explain: '键级。' },
          { stem: '分子轨道理论能解释：', options: ['O₂ 的顺磁性', '所有性质', '只解释键长', '只解释颜色'], answer: 0, explain: '顺磁。' }
        ],
        doc: { lead: '这一章讲 MO。', sections: [
          { id: 'mo', title: '分子轨道', html: `<p>LCAO、成键与反键；键级与磁性。</p>` },
          { id: 'diatomic', title: '双原子', html: `<p>同核与异核；能级图与电子排布。</p>` }
        ], refs: [] } },
      { title: '价键与杂化', brief: '另一种视角。',
        q: [
          { stem: 'sp² 杂化对应：', options: ['平面三角形', '四面体', '直线', '八面体'], answer: 0, explain: '平面。' },
          { stem: '价键理论的核心是：', options: ['电子配对成键', '分子轨道', '能带', '晶体场'], answer: 0, explain: '配对。' },
          { stem: '共振论用于解释：', options: ['离域与稳定性', '反应速率', '溶解度', '颜色'], answer: 0, explain: '离域。' }
        ],
        doc: { lead: '这一章讲价键。', sections: [
          { id: 'hybrid', title: '杂化', html: `<p>sp、sp²、sp³；构型与键角。</p>` },
          { id: 'resonance', title: '共振', html: `<p>共振结构、离域能；与分子轨道的关系。</p>` }
        ], refs: [] } },
      { title: '晶体结构', brief: '周期与对称。',
        q: [
          { stem: '布拉维点阵的数目（三维）是：', options: ['14 种', '7 种', '32 种', '230 种'], answer: 0, explain: '14。' },
          { stem: '面心立方与体心立方的配位数分别是：', options: ['12 与 8', '8 与 12', '6 与 8', '12 与 6'], answer: 0, explain: '配位。' },
          { stem: 'X 射线衍射用于：', options: ['测定晶体结构', '测分子量', '测颜色', '测 pH'], answer: 0, explain: '衍射。' }
        ],
        doc: { lead: '这一章讲晶体。', sections: [
          { id: 'lattice', title: '点阵', html: `<p>晶系、布拉维点阵、对称元素；空间群。</p>` },
          { id: 'diffraction', title: '衍射', html: `<p>布拉格方程、单晶与粉末衍射；结构解析。</p>` }
        ], refs: [] } },
      { title: '对称性与群论初步', brief: '对称的语言。',
        q: [
          { stem: '群的四个要素是：', options: ['封闭、结合、单位元、逆元', '只有封闭', '只有单位元', '只有逆元'], answer: 0, explain: '定义。' },
          { stem: '点群描述：', options: ['分子的对称性', '晶体平移', '电子排布', '反应'], answer: 0, explain: '点群。' },
          { stem: '群论在化学中的作用是：', options: ['判断光谱选择定则与轨道对称性', '计算浓度', '测 pH', '装饰'], answer: 0, explain: '选择定则。' }
        ],
        doc: { lead: '这一章讲群论。', sections: [
          { id: 'group', title: '群', html: `<p>对称操作、点群；特征标表。</p>` },
          { id: 'application', title: '应用', html: `<p>振动模式、分子轨道、选择定则。</p>` }
        ], refs: [] } },
      { title: '光谱与结构', brief: '从谱看结构。',
        q: [
          { stem: '转动光谱给出：', options: ['键长', '键能', '电子结构', '颜色'], answer: 0, explain: '键长。' },
          { stem: '振动光谱给出：', options: ['力常数与键强', '键长唯一', '电子数', '磁性'], answer: 0, explain: '力常数。' },
          { stem: '电子光谱给出：', options: ['能级与共轭信息', '键长', '质量', '电荷'], answer: 0, explain: '能级。' }
        ],
        doc: { lead: '这一章讲光谱。', sections: [
          { id: 'rotation', title: '转动与振动', html: `<p>转动惯量、键长；振动频率与力常数。</p>` },
          { id: 'electronic', title: '电子', html: `<p>跃迁、选择定则；荧光与磷光。</p>` }
        ], refs: [] } },
      { title: '计算化学初步', brief: '算结构。',
        q: [
          { stem: '从头算方法的特点是：', options: ['不依赖经验参数', '依赖大量参数', '只用经典力学', '只做拟合'], answer: 0, explain: 'ab initio。' },
          { stem: '密度泛函理论（DFT）的核心是：', options: ['用电子密度描述体系', '用波函数', '用经典力学', '用统计'], answer: 0, explain: 'DFT。' },
          { stem: '分子力学适用于：', options: ['大分子构象与力场计算', '电子结构精确计算', '光谱', '反应机理唯一'], answer: 0, explain: '力场。' }
        ],
        doc: { lead: '这一章讲计算。', sections: [
          { id: 'methods', title: '方法', html: `<p>半经验、从头算、DFT、分子力学；基组与泛函。</p>` },
          { id: 'application', title: '应用', html: `<p>几何优化、频率、反应路径；与实验对照。</p>` }
        ], refs: [] } }
    ] },
    { name: '高分子化学', chapters: [
      { title: '高分子概论', brief: '大分子的世界。',
        q: [
          { stem: '聚合度指：', options: ['重复单元数', '分子量', '链长', '支化度'], answer: 0, explain: '聚合度。' },
          { stem: '热塑性塑料与热固性塑料的区别是：', options: ['是否可反复加热成型', '颜色', '密度', '价格'], answer: 0, explain: '交联。' },
          { stem: '高分子分子量的特点是：', options: ['多分散性', '单分散', '恒定', '无分布'], answer: 0, explain: '多分散。' }
        ],
        doc: { lead: '这一章讲概论。', sections: [
          { id: 'concept', title: '概念', html: `<p>单体、重复单元、聚合度；线型、支化、交联。</p>` },
          { id: 'properties', title: '性质', html: `<p>分子量分布、玻璃化转变、结晶性。</p>` }
        ], refs: [] } },
      { title: '逐步聚合', brief: '缩聚。',
        q: [
          { stem: '逐步聚合的特点是：', options: ['单体逐步反应、分子量随转化率增长', '瞬间生成大分子', '无副产物', '只加聚'], answer: 0, explain: '逐步。' },
          { stem: '缩聚反应通常伴随：', options: ['小分子副产物', '无副产物', '只生成气体', '无变化'], answer: 0, explain: '副产物。' },
          { stem: '提高聚合度的关键是：', options: ['高转化率与严格配比', '升高温度唯一', '加催化剂唯一', '延长时间唯一'], answer: 0, explain: '配比。' }
        ],
        doc: { lead: '这一章讲缩聚。', sections: [
          { id: 'kinetics', title: '动力学', html: `<p>官能团等活性、Carothers 方程；凝胶点。</p>` },
          { id: 'examples', title: '实例', html: `<p>聚酯、聚酰胺、聚氨酯；固化与交联。</p>` }
        ], refs: [] } },
      { title: '自由基聚合', brief: '链式反应。',
        q: [
          { stem: '自由基聚合的三步是：', options: ['引发、增长、终止', '引发、缩聚、交联', '链转移唯一', '只有增长'], answer: 0, explain: '三步。' },
          { stem: '链转移会导致：', options: ['分子量降低或支化', '分子量升高', '无影响', '交联'], answer: 0, explain: '链转移。' },
          { stem: '自动加速效应的原因是：', options: ['黏度上升、终止变慢', '引发加快', '单体减少', '温度升高'], answer: 0, explain: 'Trommsdorff。' }
        ],
        doc: { lead: '这一章讲自由基。', sections: [
          { id: 'mechanism', title: '机理', html: `<p>引发剂、增长、终止、链转移；动力学方程。</p>` },
          { id: 'effect', title: '效应', html: `<p>自动加速、阻聚与缓聚；分子量控制。</p>` }
        ], refs: [] } },
      { title: '离子聚合', brief: '活性中心。',
        q: [
          { stem: '阴离子聚合的活性中心是：', options: ['碳负离子', '碳正离子', '自由基', '中性分子'], answer: 0, explain: '阴离子。' },
          { stem: '活性聚合的特点是：', options: ['无终止、分子量可控', '快速终止', '分子量不可控', '无活性'], answer: 0, explain: '活性。' },
          { stem: '阳离子聚合对单体的要求是：', options: ['富电子双键', '缺电子双键', '饱和', '芳香'], answer: 0, explain: '富电子。' }
        ],
        doc: { lead: '这一章讲离子。', sections: [
          { id: 'anionic', title: '阴离子', html: `<p>引发、活性聚合、嵌段共聚物；极性溶剂。</p>` },
          { id: 'cationic', title: '阳离子', html: `<p>质子酸与 Lewis 酸引发；异丁烯；温度影响。</p>` }
        ], refs: [] } },
      { title: '共聚合', brief: '两种单体。',
        q: [
          { stem: '竞聚率 r 的含义是：', options: ['两种单体相对活性之比', '分子量', '转化率', '温度'], answer: 0, explain: '竞聚率。' },
          { stem: 'r₁r₂ ≈ 1 时趋向：', options: ['理想共聚（无规）', '交替', '嵌段', '均聚'], answer: 0, explain: '无规。' },
          { stem: '嵌段共聚物可通过：', options: ['活性聚合制备', '自由基唯一', '缩聚唯一', '共混'], answer: 0, explain: '活性。' }
        ],
        doc: { lead: '这一章讲共聚。', sections: [
          { id: 'equation', title: '共聚方程', html: `<p>竞聚率、组成曲线；无规、交替、嵌段、接枝。</p>` },
          { id: 'application', title: '应用', html: `<p>性能调节、相容剂；活性聚合与结构控制。</p>` }
        ], refs: [] } },
      { title: '聚合方法', brief: '怎么做。',
        q: [
          { stem: '本体聚合的优点是：', options: ['产品纯度高、无需分离', '散热好', '易控制', '成本低'], answer: 0, explain: '纯度。' },
          { stem: '乳液聚合的特点是：', options: ['以水为介质、散热好、速率快', '无乳化剂', '只有本体', '只做缩聚'], answer: 0, explain: '乳液。' },
          { stem: '悬浮聚合与乳液聚合的区别是：', options: ['分散介质与稳定剂不同', '单体不同', '温度', '压力'], answer: 0, explain: '分散。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'bulk', title: '本体与溶液', html: `<p>散热、黏度；溶液聚合的溶剂回收。</p>` },
          { id: 'dispersion', title: '悬浮与乳液', html: `<p>分散剂、乳化剂、胶束成核；工业应用。</p>` }
        ], refs: [] } },
      { title: '分子量与分布', brief: '大小不一。',
        q: [
          { stem: '数均分子量与重均分子量的关系是：', options: ['重均 ≥ 数均', '数均 ≥ 重均', '相等', '无关'], answer: 0, explain: '分布。' },
          { stem: '分子量分布指数是：', options: ['重均/数均', '数均/重均', '两者之和', '两者之差'], answer: 0, explain: 'PDI。' },
          { stem: 'GPC 用于测定：', options: ['分子量及其分布', '结构', '颜色', '熔点'], answer: 0, explain: 'GPC。' }
        ],
        doc: { lead: '这一章讲分子量。', sections: [
          { id: 'average', title: '平均分子量', html: `<p>数均、重均、黏均；分布宽度。</p>` },
          { id: 'measure', title: '测定', html: `<p>GPC/SEC、黏度法、光散射；标定。</p>` }
        ], refs: [] } },
      { title: '高分子反应与改性', brief: '改造大分子。',
        q: [
          { stem: '高分子化学反应的特点是：', options: ['受邻近基团与构象影响', '与低分子完全相同', '无影响', '只降解'], answer: 0, explain: '效应。' },
          { stem: '接枝与嵌段的区别是：', options: ['支链 vs 主链分段', '相同', '都交联', '都降解'], answer: 0, explain: '结构。' },
          { stem: '高分子降解会导致：', options: ['性能下降', '性能提高', '无影响', '结晶'], answer: 0, explain: '降解。' }
        ],
        doc: { lead: '这一章讲改性。', sections: [
          { id: 'reaction', title: '反应', html: `<p>交联、接枝、嵌段、降解；邻近基团效应。</p>` },
          { id: 'modification', title: '改性', html: `<p>共混、增塑、填充、增强；功能高分子。</p>` }
        ], refs: [] } }
    ] },
    { name: '化学实验', chapters: [
      { title: '实验室安全', brief: '第一课。',
        q: [
          { stem: '进入实验室首先应：', options: ['了解安全规则与应急设施', '开始实验', '拍照', '开窗'], answer: 0, explain: '安全。' },
          { stem: '强酸溅到皮肤上应：', options: ['大量清水冲洗后就医', '涂碱', '擦干', '不处理'], answer: 0, explain: '冲洗。' },
          { stem: '危险化学品的存放原则是：', options: ['分类存放、通风避光', '混放', '随意', '密封唯一'], answer: 0, explain: '分类。' }
        ],
        doc: { lead: '这一章讲安全。', sections: [
          { id: 'rules', title: '规则', html: `<p>着装、操作、废弃物处理；应急喷淋与洗眼器。</p>` },
          { id: 'waste', title: '废弃物', html: `<p>分类收集、标签；有机废液与重金属废液。</p>` }
        ], refs: [] } },
      { title: '基本操作', brief: '基本功。',
        q: [
          { stem: '移液管使用前应：', options: ['润洗', '烘干', '不处理', '涂油'], answer: 0, explain: '润洗。' },
          { stem: '过滤时“一贴二低三靠”指的是：', options: ['操作规范要点', '三种滤纸', '三种漏斗', '三种溶剂'], answer: 0, explain: '规范。' },
          { stem: '电子天平称量前应：', options: ['调水平与预热', '直接称', '不校准', '开盖'], answer: 0, explain: '校准。' }
        ],
        doc: { lead: '这一章讲操作。', sections: [
          { id: 'glassware', title: '玻璃仪器', html: `<p>洗涤、润洗、读数；移液管与滴定管。</p>` },
          { id: 'balance', title: '称量', html: `<p>天平调平、校准；减量法称量。</p>` }
        ], refs: [] } },
      { title: '定性分析', brief: '是什么。',
        q: [
          { stem: '焰色反应用于：', options: ['鉴定金属元素', '鉴定阴离子', '测浓度', '测 pH'], answer: 0, explain: '焰色。' },
          { stem: '离子鉴定的关键是：', options: ['特征反应与干扰排除', '颜色唯一', '加热', '过滤'], answer: 0, explain: '特征。' },
          { stem: '分组分离的目的是：', options: ['消除干扰、逐一鉴定', '加快反应', '减少用量', '改变颜色'], answer: 0, explain: '分离。' }
        ],
        doc: { lead: '这一章讲定性。', sections: [
          { id: 'cations', title: '阳离子', html: `<p>分组、特征反应；焰色与沉淀。</p>` },
          { id: 'anions', title: '阴离子', html: `<p>特征反应、气体放出；干扰与掩蔽。</p>` }
        ], refs: [] } },
      { title: '定量分析实验', brief: '有多少。',
        q: [
          { stem: '滴定操作中，读数应：', options: ['平视凹液面最低点', '俯视', '仰视', '任意'], answer: 0, explain: '平视。' },
          { stem: '平行测定的目的是：', options: ['评估精密度', '提高准确度唯一', '节省时间', '装饰'], answer: 0, explain: '精密度。' },
          { stem: '空白实验的作用是：', options: ['扣除试剂与器皿带来的误差', '增加工作量', '校准 pH', '装饰'], answer: 0, explain: '空白。' }
        ],
        doc: { lead: '这一章讲定量。', sections: [
          { id: 'titration', title: '滴定', html: `<p>滴定管使用、终点判断、平行测定；数据处理。</p>` },
          { id: 'error', title: '误差', html: `<p>空白、对照、回收率；报告结果。</p>` }
        ], refs: [] } },
      { title: '有机合成实验', brief: '做分子。',
        q: [
          { stem: '回流装置的作用是：', options: ['加热同时减少溶剂损失', '降温', '加压', '过滤'], answer: 0, explain: '回流。' },
          { stem: '重结晶提纯的依据是：', options: ['溶解度随温度变化差异', '沸点差异', '密度差异', '颜色差异'], answer: 0, explain: '溶解度。' },
          { stem: '萃取分液的关键是：', options: ['选择合适溶剂与多次萃取', '一次大量', '加热', '搅拌唯一'], answer: 0, explain: '萃取。' }
        ],
        doc: { lead: '这一章讲合成。', sections: [
          { id: 'setup', title: '装置', html: `<p>回流、蒸馏、分液；干燥与除水。</p>` },
          { id: 'purify', title: '提纯', html: `<p>重结晶、柱层析、蒸馏；产率与纯度。</p>` }
        ], refs: [] } },
      { title: '物理化学实验', brief: '测性质。',
        q: [
          { stem: '燃烧焓测定常用：', options: ['氧弹量热计', '分光光度计', 'pH 计', '天平'], answer: 0, explain: '量热。' },
          { stem: '凝固点降低法用于测：', options: ['摩尔质量', '密度', '颜色', 'pH'], answer: 0, explain: '摩尔质量。' },
          { stem: '电导率测定可用于：', options: ['测解离度与平衡常数', '测密度', '测颜色', '测质量'], answer: 0, explain: '电导。' }
        ],
        doc: { lead: '这一章讲物化。', sections: [
          { id: 'thermo', title: '热力学', html: `<p>量热、相平衡、凝固点降低；数据处理。</p>` },
          { id: 'kinetics', title: '动力学与电化学', html: `<p>速率常数、活化能；电导、电动势测定。</p>` }
        ], refs: [] } },
      { title: '仪器操作', brief: '用设备。',
        q: [
          { stem: '分光光度计使用前应：', options: ['预热与调零', '直接测', '不调零', '开盖'], answer: 0, explain: '调零。' },
          { stem: '色谱柱的保养要求是：', options: ['避免高压冲击与污染', '高温烘烤', '随意冲洗', '不用保养'], answer: 0, explain: '保养。' },
          { stem: '仪器分析结果的可靠性取决于：', options: ['校准、质控与操作规范', '仪器价格', '品牌', '外观'], answer: 0, explain: '校准。' }
        ],
        doc: { lead: '这一章讲仪器。', sections: [
          { id: 'spectro', title: '光谱', html: `<p>UV-Vis、IR、AAS 操作与校准；比色皿使用。</p>` },
          { id: 'chromato', title: '色谱', html: `<p>进样、流动相、柱温；峰识别与定量。</p>` }
        ], refs: [] } },
      { title: '实验报告', brief: '写成文。',
        q: [
          { stem: '实验报告的核心是：', options: ['原理、步骤、数据、讨论', '只有数据', '只有结论', '只有步骤'], answer: 0, explain: '结构。' },
          { stem: '讨论部分应：', options: ['分析误差与异常', '只写成功', '抄教材', '省略'], answer: 0, explain: '讨论。' },
          { stem: '实验记录应：', options: ['即时、原始、可追溯', '事后补', '只记结果', '随意'], answer: 0, explain: '记录。' }
        ],
        doc: { lead: '这一章讲报告。', sections: [
          { id: 'structure', title: '结构', html: `<p>目的、原理、试剂与仪器、步骤、数据、讨论、结论。</p>` },
          { id: 'data', title: '数据', html: `<p>原始记录、有效数字、图表；误差分析。</p>` }
        ], refs: [] } }
    ] },

    /* ---- 大四 ---- */
    { name: '毕业论文', chapters: [
      { title: '选题与文献', brief: '小问题、可做。',
        q: [
          { stem: '化学论文选题的关键是：', options: ['问题明确、方法可行', '题目宏大', '追热点', '导师偏好'], answer: 0, explain: '可行。' },
          { stem: '文献阅读的作用是：', options: ['了解方法并找到切入点', '凑数', '展示', '替代研究'], answer: 0, explain: '切入。' },
          { stem: '化学研究的常见类型包括：', options: ['合成、分析、理论计算、应用', '只有合成', '只有分析', '只有计算'], answer: 0, explain: '多类。' }
        ],
        doc: { lead: '这一章讲开头。', sections: [
          { id: 'topic', title: '选题', html: `<p>合成、表征、分析、催化、材料；范围可控。</p>` },
          { id: 'review', title: '文献', html: `<p>综述、近三年论文；方法与表征手段。</p>` }
        ], refs: [] } },
      { title: '实验与表征', brief: '数据的来源。',
        q: [
          { stem: '产物结构表征的常用手段是：', options: ['NMR、IR、MS、XRD', '只有 IR', '只有 NMR', '只有 MS'], answer: 0, explain: '多种。' },
          { stem: '实验重复性的意义是：', options: ['验证结果可靠性', '装饰', '凑数据', '无意义'], answer: 0, explain: '可靠。' },
          { stem: '表征数据应：', options: ['完整、原始、可追溯', '只留最好的', '随意处理', '省略'], answer: 0, explain: '原始。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'synthesis', title: '合成', html: `<p>路线设计、条件优化、产率与纯度；安全。</p>` },
          { id: 'characterization', title: '表征', html: `<p>NMR、IR、MS、XRD、SEM；数据解读。</p>` }
        ], refs: [] } },
      { title: '写作与规范', brief: '学术表达。',
        q: [
          { stem: '化学论文的结构是：', options: ['引言—实验—结果与讨论—结论', '总—分—总', '背景—致谢', '问答'], answer: 0, explain: '结构。' },
          { stem: '谱图引用应：', options: ['标注关键峰与归属', '只贴图', '不标注', '只写数据'], answer: 0, explain: '归属。' },
          { stem: '引用规范的作用是：', options: ['可追溯与学术诚信', '凑数', '装饰', '增加篇幅'], answer: 0, explain: '规范。' }
        ],
        doc: { lead: '这一章讲写作。', sections: [
          { id: 'structure', title: '结构', html: `<p>摘要、引言、实验部分、结果与讨论、结论、参考。</p>` },
          { id: 'data', title: '数据', html: `<p>谱图归属、产率计算、有效数字；补充材料。</p>` }
        ], refs: [] } },
      { title: '答辩', brief: '讲清楚。',
        q: [
          { stem: '答辩陈述的要点是：', options: ['问题、方法、结果、局限', '致谢', '篇幅', '格式'], answer: 0, explain: '四点。' },
          { stem: '被质疑时应：', options: ['承认局限并说明理由', '争辩', '回避', '改口'], answer: 0, explain: '诚恳。' },
          { stem: '答辩前最该准备的是：', options: ['熟悉数据与谱图归属', '背稿', 'PPT 模板', '服装'], answer: 0, explain: '依据。' }
        ],
        doc: { lead: '这一章讲答辩。', sections: [
          { id: 'talk', title: '陈述', html: `<p>8–10 分钟；问题—方法—结果—局限。</p>` },
          { id: 'qa', title: '问答', html: `<p>准备可能问题；不会就说不确定并说明如何验证。</p>` }
        ], refs: [] } }
    ] },
    { name: '教育实习', chapters: [
      { title: '化学教学设计', brief: '一堂化学课。',
        q: [
          { stem: '化学教学的核心是：', options: ['宏微符三重表征', '记方程式', '刷题', '速度'], answer: 0, explain: '三重表征。' },
          { stem: '实验在化学教学中的作用是：', options: ['建立概念、培养探究能力', '装饰', '凑时间', '考试'], answer: 0, explain: '实验。' },
          { stem: '教学设计应包含：', options: ['目标、重难点、活动、评价', '只有目标', '只有活动', '只有作业'], answer: 0, explain: '要素。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'core', title: '核心素养', html: `<p>宏观辨识与微观探析、变化观念与平衡思想、证据推理、科学探究、社会责任。</p>` },
          { id: 'design', title: '设计', html: `<p>情境—实验—分析—归纳—应用；三重表征。</p>` }
        ], refs: [] } },
      { title: '课堂实施', brief: '把课上好。',
        q: [
          { stem: '化学提问的有效性是：', options: ['有层次、指向思维', '多而快', '只问方程式', '只问是否'], answer: 0, explain: '思维。' },
          { stem: '演示实验的关键是：', options: ['可见、安全、有引导', '复杂', '花哨', '越快越好'], answer: 0, explain: '可见。' },
          { stem: '化学用语教学应：', options: ['与宏观现象和微观解释结合', '只背符号', '只做题', '跳过'], answer: 0, explain: '结合。' }
        ],
        doc: { lead: '这一章讲实施。', sections: [
          { id: 'question', title: '提问', html: `<p>问题串、追问、认知冲突；暴露前概念。</p>` },
          { id: 'experiment', title: '实验', html: `<p>演示、分组、探究；现象与结论。</p>` }
        ], refs: [] } },
      { title: '化学评价', brief: '怎么考。',
        q: [
          { stem: '化学评价应：', options: ['知识与素养并重、过程与结果结合', '只考记忆', '只看分数', '只做选择'], answer: 0, explain: '素养。' },
          { stem: '实验题的考查重点是：', options: ['原理、操作与数据处理', '背诵', '计算速度', '书写'], answer: 0, explain: '实验。' },
          { stem: '反馈的有效性是：', options: ['具体、指向思路改进', '只给分数', '排名', '批评'], answer: 0, explain: '反馈。' }
        ],
        doc: { lead: '这一章讲评价。', sections: [
          { id: 'design', title: '命题', html: `<p>情境化、素养立意；实验与推理题。</p>` },
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
      { title: '考研方向', brief: '化学与交叉。',
        q: [
          { stem: '化学考研的常见方向是：', options: ['无机、有机、分析、物化、高分子', '只有有机', '只有分析', '只有物化'], answer: 0, explain: '多方向。' },
          { stem: '物理化学与有机化学在考研中的地位是：', options: ['专业课核心', '不重要', '只考其一', '只考公共课'], answer: 0, explain: '核心。' },
          { stem: '择校最应考虑：', options: ['方向、导师与真题风格', '城市', '学费', '宿舍'], answer: 0, explain: '匹配。' }
        ],
        doc: { lead: '这一章讲方向。', sections: [
          { id: 'paths', title: '方向', html: `<p>无机、有机、分析、物化、高分子、材料与化工。</p>` },
          { id: 'subjects', title: '科目', html: `<p>政治、英语、有机化学、物理化学（或综合化学）。</p>` }
        ], refs: [] } },
      { title: '专业课复习', brief: '反应与计算。',
        q: [
          { stem: '有机复习的主线是：', options: ['官能团反应 + 机理 + 合成', '只背反应', '只做推断', '只看真题'], answer: 0, explain: '三条。' },
          { stem: '物化复习的主线是：', options: ['热力学—动力学—电化学—表面', '只背公式', '只做计算', '只看真题'], answer: 0, explain: '主线。' },
          { stem: '有机推断题的关键是：', options: ['谱图信息 + 反应性质', '猜', '背答案', '跳过'], answer: 0, explain: '推断。' }
        ],
        doc: { lead: '这一章讲复习。', sections: [
          { id: 'organic', title: '有机', html: `<p>反应类型、机理、合成路线；波谱推断。</p>` },
          { id: 'physical', title: '物化', html: `<p>公式推导、典型计算；相图与动力学。</p>` }
        ], refs: [] } },
      { title: '求职方向', brief: '化工、制药、检测。',
        q: [
          { stem: '化学专业毕业生的常见去向不包括：', options: ['化工/制药研发', '检测机构', '中学教师', '外科医生'], answer: 3, explain: '专业限制。' },
          { stem: '研发岗位看重：', options: ['实验技能与项目经验', '只有学历', '只有英语', '只有证书'], answer: 0, explain: '实验。' },
          { stem: '求职最加分的材料是：', options: ['科研项目与技能清单', '证书数量', '成绩单', '社团'], answer: 0, explain: '项目。' }
        ],
        doc: { lead: '这一章讲就业。', sections: [
          { id: 'paths', title: '路径', html: `<p>化工、制药、材料、检测、环保、教师、读博。</p>` },
          { id: 'skills', title: '能力', html: `<p>合成与表征、仪器操作、数据分析；安全与规范意识。</p>` }
        ], refs: [] } },
      { title: '面试与试讲', brief: '展示能力。',
        q: [
          { stem: '化学教师面试试讲的关键是：', options: ['概念清晰、实验有效、推理严密', '背稿', 'PPT 精美', '时长'], answer: 0, explain: '推理。' },
          { stem: '研发岗面试常考：', options: ['专业基础与项目细节', '只有编程', '只有英语', '只有性格'], answer: 0, explain: '专业。' },
          { stem: '讲项目的最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
        ],
        doc: { lead: '这一章讲面试。', sections: [
          { id: 'teaching', title: '试讲', html: `<p>15 分钟：情境—实验—分析—归纳；板书与演示。</p>` },
          { id: 'tech', title: '技术', html: `<p>合成路线、表征数据、工艺放大；安全与合规。</p>` }
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
