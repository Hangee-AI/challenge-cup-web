/* ==========================================================
   material-courses.js · 材料科学与工程：12 门课（8/4）= 84 关
   ========================================================== */

(function () {
  var MAJOR = 'engineering-材料科学与工程';
  var TITLES = stageTitlesOf('engineering');

  var COURSES = [
    { name: '材料科学基础', chapters: [
      { title: '原子结构与结合键', brief: '为什么结合。',
        q: [
          { stem: '离子键与共价键的区别是：', options: ['是否发生电子转移', '键能', '方向性', '熔点'], answer: 0, explain: '转移。' },
          { stem: '金属键的特点是：', options: ['电子共有、无方向性', '电子转移', '有方向性', '无自由电子'], answer: 0, explain: '金属键。' },
          { stem: '键能越大，熔点通常：', options: ['越高', '越低', '不变', '无关'], answer: 0, explain: '键能。' }
        ],
        doc: { lead: '这一章讲结合。', sections: [
          { id: 'atom', title: '原子', html: `<p>电子结构、周期律；原子半径与电负性。</p>` },
          { id: 'bond', title: '结合键', html: `<p>离子、共价、金属、范德瓦尔斯；键与性能。</p>` }
        ], refs: [] } },
      { title: '晶体结构', brief: '怎么排列。',
        q: [
          { stem: '面心立方（FCC）的配位数是：', options: ['12', '8', '6', '4'], answer: 0, explain: '12。' },
          { stem: '体心立方（BCC）的致密度是：', options: ['0.68', '0.74', '0.52', '1'], answer: 0, explain: '0.68。' },
          { stem: '晶体缺陷包括：', options: ['点、线、面缺陷', '只有点', '只有线', '只有面'], answer: 0, explain: '三类。' }
        ],
        doc: { lead: '这一章讲结构。', sections: [
          { id: 'lattice', title: '晶格', html: `<p>晶系、布拉菲点阵；FCC/BCC/HCP；致密度。</p>` },
          { id: 'defect', title: '缺陷', html: `<p>空位、位错、晶界；对性能的影响。</p>` }
        ], refs: [] } },
      { title: '相图与相变', brief: '温度与成分。',
        q: [
          { stem: '相律的表达式是：', options: ['f = C − P + 1（恒压）', 'f = C + P', 'f = C·P', 'f = P − C'], answer: 0, explain: '相律。' },
          { stem: '共晶反应的特点是：', options: ['液相同时结晶出两个固相', '一个固相分解', '无固相', '只有气相'], answer: 0, explain: '共晶。' },
          { stem: '杠杆定律用于：', options: ['计算两相相对量', '计算温度', '计算压力', '计算时间'], answer: 0, explain: '杠杆。' }
        ],
        doc: { lead: '这一章讲相图。', sections: [
          { id: 'phaserule', title: '相律', html: `<p>组元、相、自由度；二元相图基本类型。</p>` },
          { id: 'reaction', title: '反应', html: `<p>共晶、包晶、共析；杠杆定律。</p>` }
        ], refs: [] } },
      { title: '扩散', brief: '原子迁移。',
        q: [
          { stem: '菲克第一定律表明：', options: ['扩散通量与浓度梯度成正比', '无关', '成反比', '平方'], answer: 0, explain: '菲克。' },
          { stem: '扩散系数随温度：', options: ['指数增大', '线性增大', '减小', '不变'], answer: 0, explain: '阿伦尼乌斯。' },
          { stem: '扩散机制包括：', options: ['间隙与置换（空位）', '只有间隙', '只有空位', '无机制'], answer: 0, explain: '两种。' }
        ],
        doc: { lead: '这一章讲扩散。', sections: [
          { id: 'ficks', title: '菲克定律', html: `<p>稳态与非稳态；扩散方程。</p>` },
          { id: 'mechanism', title: '机制', html: `<p>间隙、空位、晶界扩散；温度与激活能。</p>` }
        ], refs: [] } },
      { title: '形变与再结晶', brief: '变形之后。',
        q: [
          { stem: '滑移的实质是：', options: ['位错运动', '原子扩散', '晶界迁移', '相变'], answer: 0, explain: '位错。' },
          { stem: '加工硬化指：', options: ['变形后强度升高塑性下降', '强度下降', '塑性升高', '无变化'], answer: 0, explain: '硬化。' },
          { stem: '再结晶温度约为：', options: ['0.4 Tm（绝对温度）', '0.1 Tm', 'Tm', '室温'], answer: 0, explain: '0.4Tm。' }
        ],
        doc: { lead: '这一章讲形变。', sections: [
          { id: 'deformation', title: '塑性变形', html: `<p>滑移与孪生；位错理论；加工硬化。</p>` },
          { id: 'recrystallization', title: '回复再结晶', html: `<p>回复、再结晶、晶粒长大；退火工艺。</p>` }
        ], refs: [] } },
      { title: '材料的失效', brief: '怎么坏。',
        q: [
          { stem: '断裂的类型包括：', options: ['韧性断裂与脆性断裂', '只有韧性', '只有脆性', '无类型'], answer: 0, explain: '两类。' },
          { stem: '疲劳断裂的特点是：', options: ['循环载荷下低应力断裂', '一次过载', '高温软化', '腐蚀'], answer: 0, explain: '疲劳。' },
          { stem: '提高疲劳寿命的措施：', options: ['表面强化、减少应力集中', '增大缺口', '表面粗糙', '降低强度'], answer: 0, explain: '强化。' }
        ],
        doc: { lead: '这一章讲失效。', sections: [
          { id: 'fracture', title: '断裂', html: `<p>解理与韧窝；冲击韧性、韧脆转变。</p>` },
          { id: 'fatigue', title: '疲劳与腐蚀', html: `<p>S-N 曲线、疲劳极限；应力腐蚀与氢脆。</p>` }
        ], refs: [] } },
      { title: '材料分类与选材', brief: '怎么选。',
        q: [
          { stem: '材料按成分分类包括：', options: ['金属、无机非金属、高分子、复合', '只有金属', '只有无机', '只有高分子'], answer: 0, explain: '四类。' },
          { stem: '选材应考虑：', options: ['性能、工艺、成本、环境', '只有性能', '只有成本', '只有工艺'], answer: 0, explain: '综合。' },
          { stem: '比强度指：', options: ['强度与密度之比', '强度与模量之比', '模量与密度之比', '硬度与强度'], answer: 0, explain: '比强度。' }
        ],
        doc: { lead: '这一章讲分类。', sections: [
          { id: 'class', title: '分类', html: `<p>金属、陶瓷、高分子、复合材料；性能特点。</p>` },
          { id: 'selection', title: '选材', html: `<p>性能指标、Ashby 图；工艺与成本权衡。</p>` }
        ], refs: [] } },
      { title: '材料表征方法', brief: '怎么测。',
        q: [
          { stem: 'XRD 用于：', options: ['物相与晶体结构分析', '形貌', '成分唯一', '力学性能'], answer: 0, explain: 'XRD。' },
          { stem: 'SEM 主要用于：', options: ['表面形貌观察', '晶体结构', '成分定量唯一', '热分析'], answer: 0, explain: 'SEM。' },
          { stem: 'DSC 用于：', options: ['热转变与热效应分析', '形貌', '结构', '力学'], answer: 0, explain: 'DSC。' }
        ],
        doc: { lead: '这一章讲表征。', sections: [
          { id: 'structure', title: '结构', html: `<p>XRD、TEM、SEM；晶体缺陷观察。</p>` },
          { id: 'thermal', title: '热与成分', html: `<p>DSC/DTA、TGA；EDS/XPS；力学测试。</p>` }
        ], refs: [] } }
    ] },
    { name: '无机化学', chapters: [
      { title: '原子结构与周期律', brief: '基础。',
        q: [
          { stem: '决定轨道形状的量子数是：', options: ['l', 'n', 'm', 'm_s'], answer: 0, explain: '角量子数。' },
          { stem: '电负性的变化规律是：', options: ['同周期从左到右增大', '减小', '不变', '随机'], answer: 0, explain: '周期律。' },
          { stem: '电子排布遵循：', options: ['能量最低、泡利、洪特', '只有能量最低', '只有泡利', '只有洪特'], answer: 0, explain: '三原则。' }
        ],
        doc: { lead: '这一章讲原子。', sections: [
          { id: 'quantum', title: '量子数', html: `<p>n、l、m、m_s；轨道与能级。</p>` },
          { id: 'periodic', title: '周期律', html: `<p>半径、电离能、电负性；有效核电荷。</p>` }
        ], refs: [] } },
      { title: '化学键与结构', brief: '怎么结合。',
        q: [
          { stem: 'VSEPR 用于判断：', options: ['分子空间构型', '反应速率', '溶解度', '酸碱性'], answer: 0, explain: '构型。' },
          { stem: 'sp³ 杂化对应：', options: ['四面体', '平面三角', '直线', '八面体'], answer: 0, explain: '四面体。' },
          { stem: '分子间力包括：', options: ['色散、诱导、取向、氢键', '只有氢键', '只有色散', '离子键'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲键。', sections: [
          { id: 'bond', title: '化学键', html: `<p>离子、共价、金属键；键参数。</p>` },
          { id: 'shape', title: '构型', html: `<p>VSEPR、杂化；分子间力与氢键。</p>` }
        ], refs: [] } },
      { title: '热力学与平衡', brief: '方向。',
        q: [
          { stem: '自发判据是：', options: ['ΔG < 0', 'ΔG > 0', 'ΔH < 0', 'ΔS < 0'], answer: 0, explain: 'ΔG。' },
          { stem: '平衡常数与温度关系由：', options: ['范特霍夫方程', '能斯特方程', '亨利定律', '拉乌尔定律'], answer: 0, explain: '范特霍夫。' },
          { stem: '勒夏特列原理说明：', options: ['平衡向减弱改变的方向移动', '不变', '停止', '加速'], answer: 0, explain: '移动。' }
        ],
        doc: { lead: '这一章讲平衡。', sections: [
          { id: 'thermo', title: '热力学', html: `<p>焓、熵、吉布斯自由能；自发与平衡。</p>` },
          { id: 'equilibrium', title: '平衡', html: `<p>K、Q、移动方向；温度影响。</p>` }
        ], refs: [] } },
      { title: '酸碱与沉淀', brief: '溶液平衡。',
        q: [
          { stem: '缓冲溶液的作用是：', options: ['抵抗少量酸碱保持 pH', '提高 pH', '降低 pH', '无作用'], answer: 0, explain: '缓冲。' },
          { stem: 'Ksp 越小说明：', options: ['越难溶', '越易溶', '无关', '等于溶解度'], answer: 0, explain: 'Ksp。' },
          { stem: '同离子效应使溶解度：', options: ['降低', '升高', '不变', '无关'], answer: 0, explain: '降低。' }
        ],
        doc: { lead: '这一章讲酸碱。', sections: [
          { id: 'acid', title: '酸碱', html: `<p>质子理论、pH、缓冲；水解。</p>` },
          { id: 'precipitate', title: '沉淀', html: `<p>Ksp、同离子效应、分步沉淀。</p>` }
        ], refs: [] } },
      { title: '电化学', brief: '电子转移。',
        q: [
          { stem: '原电池中氧化发生在：', options: ['负极', '正极', '溶液', '两极同时'], answer: 0, explain: '负极。' },
          { stem: '能斯特方程用于：', options: ['电极电势与浓度关系', '速率', 'Ksp', '颜色'], answer: 0, explain: '能斯特。' },
          { stem: '电解池与原电池区别：', options: ['是否由外电源驱动', '是否有电极', '是否有电解质', '是否有反应'], answer: 0, explain: '电源。' }
        ],
        doc: { lead: '这一章讲电化学。', sections: [
          { id: 'redox', title: '氧化还原', html: `<p>氧化数、配平；标准电极电势。</p>` },
          { id: 'cell', title: '电池与电解', html: `<p>原电池、电解、腐蚀；能斯特方程。</p>` }
        ], refs: [] } },
      { title: '配位化学', brief: '配合物。',
        q: [
          { stem: '配位键的特点是：', options: ['配体提供孤对电子', '中心离子提供电子', '均等共用', '离子键'], answer: 0, explain: '配位。' },
          { stem: '晶体场理论解释：', options: ['颜色与磁性', '速率', '溶解度', '酸碱性'], answer: 0, explain: '晶体场。' },
          { stem: '螯合物稳定性通常：', options: ['较高', '较低', '无影响', '为零'], answer: 0, explain: '螯合。' }
        ],
        doc: { lead: '这一章讲配合物。', sections: [
          { id: 'complex', title: '配合物', html: `<p>组成、命名、异构；稳定常数。</p>` },
          { id: 'field', title: '晶体场', html: `<p>分裂能、高低自旋；颜色与磁性。</p>` }
        ], refs: [] } },
      { title: '元素化学', brief: '各族性格。',
        q: [
          { stem: '碱金属活泼性随原子序数：', options: ['增强', '减弱', '不变', '无规律'], answer: 0, explain: '增强。' },
          { stem: '卤素氧化性从上到下：', options: ['减弱', '增强', '不变', '无规律'], answer: 0, explain: '减弱。' },
          { stem: '过渡金属特点是：', options: ['多变价与配位能力强', '只有一价', '无颜色', '不导电'], answer: 0, explain: '过渡。' }
        ],
        doc: { lead: '这一章讲元素。', sections: [
          { id: 'main', title: '主族', html: `<p>s 区与 p 区；性质递变与重要化合物。</p>` },
          { id: 'transition', title: '过渡', html: `<p>d 区元素、变价、配合物；应用材料。</p>` }
        ], refs: [] } },
      { title: '无机合成与实验', brief: '做出来。',
        q: [
          { stem: '制备无水盐常需：', options: ['防潮与干燥', '加水', '加热唯一', '曝露空气'], answer: 0, explain: '防潮。' },
          { stem: '滴定操作读数应：', options: ['平视凹液面最低点', '俯视', '仰视', '任意'], answer: 0, explain: '平视。' },
          { stem: '实验安全要求：', options: ['防护、通风、废弃物分类', '只有手套', '只有通风', '无要求'], answer: 0, explain: '安全。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'synthesis', title: '合成', html: `<p>固相、溶液法；无水操作与提纯。</p>` },
          { id: 'experiment', title: '实验', html: `<p>滴定、比色、离子鉴定；数据处理与安全。</p>` }
        ], refs: [] } }
    ] },
    { name: '高等数学（工科）', chapters: [
      { title: '极限与连续', brief: '基础。',
        q: [
          { stem: 'lim(x→0) sinx/x 等于：', options: ['1', '0', '∞', '不存在'], answer: 0, explain: '重要极限。' },
          { stem: '闭区间连续函数：', options: ['有界且可取最值', '必可导', '必单调', '无最值'], answer: 0, explain: '性质。' },
          { stem: '等价无穷小替换适用于：', options: ['乘除', '加减', '任意', '只有极限'], answer: 0, explain: '乘除。' }
        ],
        doc: { lead: '这一章讲极限。', sections: [
          { id: 'limit', title: '极限', html: `<p>定义、法则、两个重要极限。</p>` },
          { id: 'continuity', title: '连续', html: `<p>连续与间断；闭区间性质。</p>` }
        ], refs: [] } },
      { title: '导数与微分', brief: '变化率。',
        q: [
          { stem: '可导与连续的关系：', options: ['可导必连续', '等价', '连续必可导', '无关'], answer: 0, explain: '蕴含。' },
          { stem: '微分是：', options: ['增量的线性主部', '导数', '积分', '极限'], answer: 0, explain: '线性主部。' },
          { stem: '洛必达适用：', options: ['0/0 或 ∞/∞', '所有极限', '只有 0/0', '只有 ∞/∞'], answer: 0, explain: '未定式。' }
        ],
        doc: { lead: '这一章讲导数。', sections: [
          { id: 'derivative', title: '导数', html: `<p>定义、法则；隐函数、参数方程。</p>` },
          { id: 'application', title: '应用', html: `<p>极值、最优化、中值定理。</p>` }
        ], refs: [] } },
      { title: '积分', brief: '累积。',
        q: [
          { stem: '牛顿-莱布尼茨公式：', options: ['∫ₐᵇf = F(b) − F(a)', 'F(a) − F(b)', 'f(b) − f(a)', '∫f′'], answer: 0, explain: '公式。' },
          { stem: '分部积分公式：', options: ['∫u dv = uv − ∫v du', 'uv + ∫v du', '∫u∫v', 'u′v′'], answer: 0, explain: '分部。' },
          { stem: '定积分可算：', options: ['面积、体积、功', '只有面积', '只有体积', '导数'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲积分。', sections: [
          { id: 'indefinite', title: '不定积分', html: `<p>换元、分部。</p>` },
          { id: 'definite', title: '定积分', html: `<p>性质与计算；应用。</p>` }
        ], refs: [] } },
      { title: '多元函数', brief: '多维。',
        q: [
          { stem: '全微分充分条件：', options: ['偏导连续', '偏导存在', '连续', '有界'], answer: 0, explain: '充分。' },
          { stem: '条件极值用：', options: ['拉格朗日乘数法', '洛必达', '泰勒', '积分'], answer: 0, explain: '乘数法。' },
          { stem: '梯度方向：', options: ['函数增长最快方向', '等值线方向', '任意', '垂直'], answer: 0, explain: '梯度。' }
        ],
        doc: { lead: '这一章讲多元。', sections: [
          { id: 'differential', title: '微分', html: `<p>偏导、全微分、链式、梯度。</p>` },
          { id: 'extremum', title: '极值', html: `<p>无条件与条件极值。</p>` }
        ], refs: [] } },
      { title: '重积分与线面积分', brief: '累积。',
        q: [
          { stem: '极坐标面积元素：', options: ['r dr dθ', 'dr dθ', 'r² dr dθ', 'dθ'], answer: 0, explain: '雅可比。' },
          { stem: '格林公式联系：', options: ['曲线积分与二重积分', '三重积分', '级数', '导数'], answer: 0, explain: '格林。' },
          { stem: '重积分可算：', options: ['质量、质心、转动惯量', '只有质量', '只有质心', '导数'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲重积分。', sections: [
          { id: 'multiple', title: '重积分', html: `<p>二重、三重；坐标变换。</p>` },
          { id: 'application', title: '应用', html: `<p>形心、转动惯量；线面积分初步。</p>` }
        ], refs: [] } },
      { title: '微分方程', brief: '动态。',
        q: [
          { stem: '可分离变量的解法：', options: ['分离后积分', '直接积分', '求导', '代入'], answer: 0, explain: '分离。' },
          { stem: '一阶线性方程用：', options: ['积分因子法', '分离变量', '特征方程', '级数'], answer: 0, explain: '积分因子。' },
          { stem: '二阶常系数解由：', options: ['特征根决定', '初值唯一', '常数项', '次数'], answer: 0, explain: '特征根。' }
        ],
        doc: { lead: '这一章讲方程。', sections: [
          { id: 'first', title: '一阶', html: `<p>可分离、线性；建模。</p>` },
          { id: 'second', title: '二阶', html: `<p>常系数、特征根。</p>` }
        ], refs: [] } },
      { title: '级数与拉氏变换', brief: '工具。',
        q: [
          { stem: 'p 级数收敛条件：', options: ['p > 1', 'p < 1', 'p = 1', '任意'], answer: 0, explain: 'p>1。' },
          { stem: '傅里叶级数用于：', options: ['周期信号展开', '任意函数', '只有多项式', '只有指数'], answer: 0, explain: '周期。' },
          { stem: '拉氏变换用于：', options: ['解微分方程', '求积分', '判敛', '几何'], answer: 0, explain: '变换。' }
        ],
        doc: { lead: '这一章讲级数。', sections: [
          { id: 'series', title: '级数', html: `<p>判别法、幂级数。</p>` },
          { id: 'laplace', title: '拉氏变换', html: `<p>性质、逆变换；解方程。</p>` }
        ], refs: [] } },
      { title: '工程计算训练', brief: '算得准。',
        q: [
          { stem: '量纲的作用是：', options: ['检验结果、统一单位', '装饰', '加速', '简化唯一'], answer: 0, explain: '量纲。' },
          { stem: 'MATLAB 在工科的作用：', options: ['计算与仿真', '排版', '绘图唯一', '装饰'], answer: 0, explain: '工具。' },
          { stem: '提高计算能力的关键：', options: ['多练并总结题型', '只看书', '只背公式', '只做选择'], answer: 0, explain: '练习。' }
        ],
        doc: { lead: '这一章讲训练。', sections: [
          { id: 'compute', title: '计算', html: `<p>典型题型；数值方法初步。</p>` },
          { id: 'tools', title: '工具', html: `<p>MATLAB/Python；绘图与拟合。</p>` }
        ], refs: [] } }
    ] },
    { name: '物理化学', chapters: [
      { title: '热力学第一定律', brief: '能量。',
        q: [
          { stem: '第一定律表达式是：', options: ['ΔU = Q + W', 'ΔU = Q − W', 'ΔH = Q', 'ΔG = 0'], answer: 0, explain: '符号。' },
          { stem: '等压热效应等于：', options: ['ΔH', 'ΔU', 'ΔS', 'ΔG'], answer: 0, explain: '焓。' },
          { stem: '盖斯定律说明：', options: ['反应热与路径无关', '与路径有关', '只与温度有关', '无规律'], answer: 0, explain: '状态函数。' }
        ],
        doc: { lead: '这一章讲第一定律。', sections: [
          { id: 'work', title: '功与热', html: `<p>体积功、可逆过程；热容。</p>` },
          { id: 'enthalpy', title: '焓', html: `<p>生成焓、燃烧焓；盖斯定律与基尔霍夫定律。</p>` }
        ], refs: [] } },
      { title: '热力学第二定律', brief: '方向。',
        q: [
          { stem: '熵增原理适用于：', options: ['孤立系统', '任何系统', '封闭系统唯一', '开放系统'], answer: 0, explain: '孤立。' },
          { stem: '吉布斯判据是：', options: ['ΔG < 0 自发', 'ΔG > 0 自发', 'ΔS > 0 自发', 'ΔH < 0 自发'], answer: 0, explain: 'ΔG。' },
          { stem: '标准熵的规定：', options: ['完美晶体 0 K 时为零', '任意', '25℃为零', '气体为零'], answer: 0, explain: '第三定律。' }
        ],
        doc: { lead: '这一章讲第二定律。', sections: [
          { id: 'entropy', title: '熵', html: `<p>熵变、卡诺循环；第三定律。</p>` },
          { id: 'gibbs', title: '自由能', html: `<p>ΔG、ΔA；自发与平衡。</p>` }
        ], refs: [] } },
      { title: '化学势与相平衡', brief: '多相。',
        q: [
          { stem: '化学势是：', options: ['偏摩尔吉布斯自由能', '焓', '熵', '内能'], answer: 0, explain: '偏摩尔。' },
          { stem: '相律表达式：', options: ['f = C − P + 2', 'f = C + P', 'f = P − C', 'f = C·P'], answer: 0, explain: '相律。' },
          { stem: '克拉珀龙方程描述：', options: ['相变温度与压力关系', '速率', '平衡常数', '浓度'], answer: 0, explain: '相变。' }
        ],
        doc: { lead: '这一章讲相平衡。', sections: [
          { id: 'potential', title: '化学势', html: `<p>偏摩尔量；理想溶液与活度。</p>` },
          { id: 'phase', title: '相平衡', html: `<p>相律、相图；克拉珀龙方程。</p>` }
        ], refs: [] } },
      { title: '化学平衡与电化学', brief: '限度与电。',
        q: [
          { stem: 'ΔG° 与 K° 的关系是：', options: ['ΔG° = −RT lnK°', 'ΔG° = RT lnK°', 'ΔG° = K°', '无关'], answer: 0, explain: '关系。' },
          { stem: '电池电动势与 ΔG 关系：', options: ['ΔG = −nFE', 'ΔG = nFE', 'ΔG = E', '无关'], answer: 0, explain: '关系。' },
          { stem: '超电势导致：', options: ['分解电压高于理论值', '低于理论', '相等', '无影响'], answer: 0, explain: '超电势。' }
        ],
        doc: { lead: '这一章讲平衡。', sections: [
          { id: 'equilibrium', title: '化学平衡', html: `<p>K°、范特霍夫方程；活度。</p>` },
          { id: 'electro', title: '电化学', html: `<p>可逆电池、能斯特方程；电解与极化。</p>` }
        ], refs: [] } },
      { title: '化学动力学', brief: '快慢。',
        q: [
          { stem: '反应级数由什么确定：', options: ['实验', '方程式配平', '温度', '催化剂'], answer: 0, explain: '实验。' },
          { stem: '阿伦尼乌斯方程描述：', options: ['速率常数与温度关系', '浓度关系', '压力关系', '相变'], answer: 0, explain: '阿伦尼乌斯。' },
          { stem: '催化剂的作用是：', options: ['降低活化能、加快反应', '提高产率', '改变平衡常数', '消耗自身'], answer: 0, explain: '活化能。' }
        ],
        doc: { lead: '这一章讲动力学。', sections: [
          { id: 'rate', title: '速率', html: `<p>速率方程、级数、半衰期。</p>` },
          { id: 'mechanism', title: '机理', html: `<p>基元反应、稳态近似；催化与酶动力学。</p>` }
        ], refs: [] } },
      { title: '表面与胶体', brief: '界面。',
        q: [
          { stem: '表面张力的原因是：', options: ['表面分子受力不平衡', '温度', '压力', '体积'], answer: 0, explain: '表面张力。' },
          { stem: '朗缪尔等温式假设：', options: ['单分子层吸附', '多分子层', '无吸附', '化学吸附唯一'], answer: 0, explain: '单层。' },
          { stem: '胶体稳定性依赖：', options: ['双电层与空间位阻', '只有温度', '只有浓度', '无因素'], answer: 0, explain: '稳定。' }
        ],
        doc: { lead: '这一章讲界面。', sections: [
          { id: 'surface', title: '表面', html: `<p>表面张力、润湿、吸附；物理与化学吸附。</p>` },
          { id: 'colloid', title: '胶体', html: `<p>双电层、聚沉；表面活性剂。</p>` }
        ], refs: [] } },
      { title: '统计热力学初步', brief: '微观解释。',
        q: [
          { stem: '配分函数可用于：', options: ['计算热力学量', '测温度', '测压力', '测体积'], answer: 0, explain: '配分。' },
          { stem: '玻尔兹曼分布适用条件：', options: ['经典极限', '极低温', '高密度', '强相互作用'], answer: 0, explain: '经典。' },
          { stem: '统计热力学的价值：', options: ['由分子性质算宏观性质', '装饰', '替代实验', '无价值'], answer: 0, explain: '桥梁。' }
        ],
        doc: { lead: '这一章讲统计。', sections: [
          { id: 'partition', title: '配分函数', html: `<p>平动、转动、振动；热力学函数。</p>` },
          { id: 'application', title: '应用', html: `<p>平衡常数、热容、熵的统计解释。</p>` }
        ], refs: [] } },
      { title: '物化实验', brief: '动手。',
        q: [
          { stem: '燃烧焓测定用：', options: ['氧弹量热计', '分光光度计', 'pH 计', '天平'], answer: 0, explain: '量热。' },
          { stem: '电导率测定可用于：', options: ['求解离度与平衡常数', '测密度', '测颜色', '测质量'], answer: 0, explain: '电导。' },
          { stem: '实验数据处理应：', options: ['作图求斜率并分析误差', '挑选', '编造', '忽略'], answer: 0, explain: '处理。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'thermo', title: '热力学', html: `<p>量热、相平衡、凝固点降低。</p>` },
          { id: 'kinetics', title: '动力学', html: `<p>速率常数、活化能；电导与电动势。</p>` }
        ], refs: [] } }
    ] },
    { name: '材料物理性能', chapters: [
      { title: '电学性能', brief: '导电。',
        q: [
          { stem: '金属导电靠：', options: ['自由电子', '离子', '空穴', '分子'], answer: 0, explain: '电子。' },
          { stem: '半导体导电率随温度：', options: ['升高（本征）', '降低', '不变', '无关'], answer: 0, explain: '本征。' },
          { stem: '超导的两个特征是：', options: ['零电阻与迈斯纳效应', '高电阻', '无磁性', '绝缘'], answer: 0, explain: '超导。' }
        ],
        doc: { lead: '这一章讲电学。', sections: [
          { id: 'conduction', title: '导电', html: `<p>能带、载流子；金属、半导体、绝缘体。</p>` },
          { id: 'dielectric', title: '介电与超导', html: `<p>极化、介电常数；超导与压电。</p>` }
        ], refs: [] } },
      { title: '磁学性能', brief: '磁性。',
        q: [
          { stem: '铁磁性的特点是：', options: ['有自发磁化与磁滞', '无磁性', '顺磁唯一', '抗磁'], answer: 0, explain: '铁磁。' },
          { stem: '软磁与硬磁的区别是：', options: ['矫顽力大小', '密度', '颜色', '熔点'], answer: 0, explain: '矫顽力。' },
          { stem: '居里温度以上铁磁体变成：', options: ['顺磁', '抗磁', '超导', '绝缘'], answer: 0, explain: '居里点。' }
        ],
        doc: { lead: '这一章讲磁学。', sections: [
          { id: 'type', title: '类型', html: `<p>抗磁、顺磁、铁磁；磁畴与磁滞回线。</p>` },
          { id: 'application', title: '应用', html: `<p>软磁、硬磁、磁记录；居里温度。</p>` }
        ], refs: [] } },
      { title: '热学与光学性能', brief: '热与光。',
        q: [
          { stem: '热膨胀系数与键强的关系：', options: ['键强越大膨胀越小', '越大', '无关', '相反'], answer: 0, explain: '键强。' },
          { stem: '透明陶瓷与玻璃的区别是：', options: ['是否结晶', '颜色', '硬度', '密度'], answer: 0, explain: '结晶。' },
          { stem: '发光材料的关键是：', options: ['激活剂与基质', '只有基质', '只有激活剂', '密度'], answer: 0, explain: '发光中心。' }
        ],
        doc: { lead: '这一章讲热光。', sections: [
          { id: 'thermal', title: '热学', html: `<p>热容、热膨胀、热导；热震稳定性。</p>` },
          { id: 'optical', title: '光学', html: `<p>折射、透光、发光；激光与荧光材料。</p>` }
        ], refs: [] } },
      { title: '力学性能', brief: '强与韧。',
        q: [
          { stem: '弹性模量反映：', options: ['原子间结合强度', '塑性', '硬度', '密度'], answer: 0, explain: '结合强度。' },
          { stem: '陶瓷增韧的常用方法是：', options: ['相变增韧、纤维增韧', '提高温度', '减少晶界', '增大晶粒'], answer: 0, explain: '增韧。' },
          { stem: '硬度与强度的关系：', options: ['通常正相关但不相等', '完全相等', '无关', '负相关'], answer: 0, explain: '相关。' }
        ],
        doc: { lead: '这一章讲力学。', sections: [
          { id: 'elastic', title: '弹性', html: `<p>弹性模量、理论强度；实际强度与缺陷。</p>` },
          { id: 'toughness', title: '强度与韧性', html: `<p>断裂韧性、增韧机制；硬度与耐磨。</p>` }
        ], refs: [] } },
      { title: '功能材料', brief: '特殊功能。',
        q: [
          { stem: '形状记忆合金基于：', options: ['马氏体相变', '磁致伸缩', '压电', '扩散'], answer: 0, explain: '马氏体。' },
          { stem: '压电材料可实现：', options: ['机械能与电能互换', '光与电', '热与电', '磁与电'], answer: 0, explain: '压电。' },
          { stem: '储氢材料的关键是：', options: ['可逆吸放氢', '高密度', '低成本', '耐高温'], answer: 0, explain: '储氢。' }
        ],
        doc: { lead: '这一章讲功能。', sections: [
          { id: 'smart', title: '智能材料', html: `<p>形状记忆、压电、磁致伸缩；应用。</p>` },
          { id: 'energy', title: '能源材料', html: `<p>储氢、电池、热电；能量转换。</p>` }
        ], refs: [] } },
      { title: '性能测试方法', brief: '怎么测。',
        q: [
          { stem: '拉伸试验可测：', options: ['强度、塑性、弹性模量', '只有强度', '只有塑性', '只有模量'], answer: 0, explain: '多项。' },
          { stem: '四探针法用于：', options: ['测电阻率', '测硬度', '测磁性', '测热导'], answer: 0, explain: '四探针。' },
          { stem: '硬度测试常用：', options: ['布氏、洛氏、维氏', '只有布氏', '只有洛氏', '只有维氏'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲测试。', sections: [
          { id: 'mechanical', title: '力学', html: `<p>拉伸、硬度、冲击、断裂韧性。</p>` },
          { id: 'physical', title: '物理', html: `<p>电阻率、磁性、热导、光学；测试原理。</p>` }
        ], refs: [] } },
      { title: '性能与结构的关系', brief: '连起来。',
        q: [
          { stem: '晶粒细化通常使强度：', options: ['提高', '降低', '不变', '无关'], answer: 0, explain: '细晶强化。' },
          { stem: '孔隙率上升会：', options: ['降低强度与导热', '提高强度', '无影响', '提高透光'], answer: 0, explain: '孔隙。' },
          { stem: '性能设计的核心是：', options: ['成分—工艺—结构—性能', '只有成分', '只有工艺', '只有结构'], answer: 0, explain: '链条。' }
        ],
        doc: { lead: '这一章讲关系。', sections: [
          { id: 'structure', title: '结构', html: `<p>晶粒、相组成、缺陷；对性能的影响。</p>` },
          { id: 'design', title: '设计', html: `<p>成分与工艺调控；性能预测。</p>` }
        ], refs: [] } },
      { title: '性能实验', brief: '动手。',
        q: [
          { stem: '试样制备对测试的影响：', options: ['显著（尺寸、表面、取向）', '无影响', '只影响外观', '只影响成本'], answer: 0, explain: '制备。' },
          { stem: '数据分散的原因包括：', options: ['材料不均匀与测试误差', '只有误差', '只有不均匀', '无原因'], answer: 0, explain: '多因。' },
          { stem: '实验报告应：', options: ['记录条件、数据与结论', '只有结论', '只有数据', '只有图'], answer: 0, explain: '完整。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'prepare', title: '制备', html: `<p>取样、加工、表面处理；标准与夹具。</p>` },
          { id: 'report', title: '报告', html: `<p>条件、数据、图表；误差与结论。</p>` }
        ], refs: [] } }
    ] },
    { name: '材料力学性能', chapters: [
      { title: '拉伸与压缩', brief: '基本曲线。',
        q: [
          { stem: '屈服强度的定义是：', options: ['产生规定塑性变形时的应力', '断裂应力', '最大应力', '弹性极限'], answer: 0, explain: '屈服。' },
          { stem: '真应力-真应变曲线与工程曲线的区别是：', options: ['是否考虑截面积变化', '单位', '温度', '速率'], answer: 0, explain: '真应力。' },
          { stem: '塑性指标包括：', options: ['伸长率与断面收缩率', '只有伸长率', '只有收缩率', '硬度'], answer: 0, explain: '两指标。' }
        ],
        doc: { lead: '这一章讲拉伸。', sections: [
          { id: 'curve', title: '曲线', html: `<p>弹性、屈服、强化、颈缩；真应力与工程应力。</p>` },
          { id: 'index', title: '指标', html: `<p>强度、塑性、弹性模量；上下屈服点。</p>` }
        ], refs: [] } },
      { title: '硬度与磨损', brief: '表面。',
        q: [
          { stem: '硬度测试的常用方法：', options: ['布氏、洛氏、维氏', '只有布氏', '只有洛氏', '只有维氏'], answer: 0, explain: '多种。' },
          { stem: '硬度与耐磨性的关系：', options: ['通常正相关', '无关', '负相关', '相等'], answer: 0, explain: '相关。' },
          { stem: '磨损的类型包括：', options: ['磨粒、粘着、疲劳、腐蚀', '只有磨粒', '只有粘着', '只有疲劳'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲硬度。', sections: [
          { id: 'hardness', title: '硬度', html: `<p>布氏、洛氏、维氏；换算与选用。</p>` },
          { id: 'wear', title: '磨损', html: `<p>磨损机制、耐磨材料；表面强化。</p>` }
        ], refs: [] } },
      { title: '冲击与断裂韧性', brief: '抗断。',
        q: [
          { stem: '冲击韧性与温度的关系是：', options: ['低温下降（韧脆转变）', '低温升高', '无关', '恒定'], answer: 0, explain: '韧脆转变。' },
          { stem: '断裂韧性 K_IC 反映：', options: ['材料抵抗裂纹扩展的能力', '强度', '硬度', '塑性'], answer: 0, explain: 'K_IC。' },
          { stem: '提高断裂韧性的方法：', options: ['细化晶粒、减少夹杂', '增大晶粒', '增加夹杂', '提高碳量'], answer: 0, explain: '细化。' }
        ],
        doc: { lead: '这一章讲断裂。', sections: [
          { id: 'impact', title: '冲击', html: `<p>冲击试验、韧脆转变温度；影响因素。</p>` },
          { id: 'fracture', title: '断裂韧性', html: `<p>K_IC、裂纹尖端应力场；断裂力学初步。</p>` }
        ], refs: [] } },
      { title: '疲劳', brief: '反复受力。',
        q: [
          { stem: '疲劳极限指：', options: ['无限次循环不破坏的最大应力', '断裂应力', '屈服应力', '最大应力'], answer: 0, explain: '疲劳极限。' },
          { stem: '影响疲劳寿命的因素：', options: ['应力集中、表面质量、环境', '只有应力', '只有表面', '只有环境'], answer: 0, explain: '多因素。' },
          { stem: '提高疲劳强度的方法：', options: ['表面强化、减少应力集中', '增大缺口', '降低强度', '增大晶粒'], answer: 0, explain: '强化。' }
        ],
        doc: { lead: '这一章讲疲劳。', sections: [
          { id: 'curve', title: 'S-N 曲线', html: `<p>疲劳极限、寿命；低周与高周疲劳。</p>` },
          { id: 'improve', title: '改善', html: `<p>喷丸、渗碳、表面淬火；设计原则。</p>` }
        ], refs: [] } },
      { title: '高温与蠕变', brief: '热环境。',
        q: [
          { stem: '蠕变的定义是：', options: ['恒定应力下随时间变形', '瞬时变形', '断裂', '疲劳'], answer: 0, explain: '蠕变。' },
          { stem: '蠕变曲线的三个阶段：', options: ['减速、稳态、加速', '只有减速', '只有稳态', '只有加速'], answer: 0, explain: '三阶段。' },
          { stem: '提高高温强度的途径：', options: ['固溶强化、析出强化、单晶叶片', '增大晶界', '降低熔点', '减少合金元素'], answer: 0, explain: '强化。' }
        ],
        doc: { lead: '这一章讲蠕变。', sections: [
          { id: 'creep', title: '蠕变', html: `<p>三阶段、稳态速率；温度与应力影响。</p>` },
          { id: 'hightemp', title: '高温材料', html: `<p>高温合金、陶瓷；叶片与涂层。</p>` }
        ], refs: [] } },
      { title: '腐蚀与防护', brief: '环境损伤。',
        q: [
          { stem: '电化学腐蚀的条件是：', options: ['形成腐蚀电池', '只有水', '只有氧', '高温唯一'], answer: 0, explain: '电池。' },
          { stem: '不锈钢耐蚀的原因是：', options: ['表面钝化膜（Cr₂O₃）', '含碳高', '含镍唯一', '硬度高'], answer: 0, explain: '钝化。' },
          { stem: '防护措施包括：', options: ['涂层、阴极保护、合金化', '只有涂层', '只有阴极保护', '只有合金化'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲腐蚀。', sections: [
          { id: 'mechanism', title: '机制', html: `<p>化学与电化学腐蚀；点蚀、晶间腐蚀。</p>` },
          { id: 'protection', title: '防护', html: `<p>涂层、缓蚀剂、阴极保护、选材。</p>` }
        ], refs: [] } },
      { title: '力学性能测试', brief: '动手。',
        q: [
          { stem: '拉伸试验的标准试样：', options: ['按标准尺寸与标距', '任意尺寸', '只看长度', '只看直径'], answer: 0, explain: '标准。' },
          { stem: '硬度测试应：', options: ['多点测量取平均', '只测一点', '只测边缘', '随意'], answer: 0, explain: '多点。' },
          { stem: '数据处理应：', options: ['剔除异常并给出不确定度', '挑选', '编造', '忽略'], answer: 0, explain: '处理。' }
        ],
        doc: { lead: '这一章讲测试。', sections: [
          { id: 'tensile', title: '拉伸', html: `<p>试样、引伸计、速率；数据处理。</p>` },
          { id: 'hardness', title: '硬度与冲击', html: `<p>测试规范、取点；冲击试样与断口。</p>` }
        ], refs: [] } },
      { title: '失效分析', brief: '为什么会坏。',
        q: [
          { stem: '失效分析的第一步是：', options: ['收集现场信息与断口', '换材料', '加厚', '重设计'], answer: 0, explain: '断口。' },
          { stem: '断口分析的常用手段：', options: ['宏观+微观（SEM）', '只有肉眼', '只有称重', '只有硬度'], answer: 0, explain: '断口。' },
          { stem: '失效分析的价值是：', options: ['找到根因、改进设计', '装饰', '追责唯一', '归档'], answer: 0, explain: '改进。' }
        ],
        doc: { lead: '这一章讲失效。', sections: [
          { id: 'method', title: '方法', html: `<p>现场调查、断口分析、材料复验；根因判定。</p>` },
          { id: 'case', title: '案例', html: `<p>过载、疲劳、腐蚀、氢脆；改进措施。</p>` }
        ], refs: [] } }
    ] },
    { name: '材料合成与制备', chapters: [
      { title: '制备方法概述', brief: '怎么造材料。',
        q: [
          { stem: '材料制备方法大致分为：', options: ['气相、液相、固相法', '只有气相', '只有液相', '只有固相'], answer: 0, explain: '三类。' },
          { stem: '选择制备方法应考虑：', options: ['产物形态、纯度、成本', '只有纯度', '只有成本', '只有形态'], answer: 0, explain: '综合。' },
          { stem: '纳米材料制备的关键是：', options: ['控制成核与生长', '高温唯一', '高压唯一', '快速冷却'], answer: 0, explain: '成核。' }
        ],
        doc: { lead: '这一章讲概述。', sections: [
          { id: 'class', title: '分类', html: `<p>气相沉积、溶胶凝胶、固相烧结；适用材料。</p>` },
          { id: 'principle', title: '原理', html: `<p>成核与生长、热力学与动力学；形貌控制。</p>` }
        ], refs: [] } },
      { title: '粉体制备', brief: '从粉开始。',
        q: [
          { stem: '固相法合成粉体的特点：', options: ['简单、成本低、粒径较大', '纯度高', '粒径小', '无需煅烧'], answer: 0, explain: '固相。' },
          { stem: '溶胶-凝胶法的优点是：', options: ['均匀性好、可低温', '成本低', '产量大', '无需溶剂'], answer: 0, explain: '溶胶凝胶。' },
          { stem: '共沉淀法的关键是：', options: ['控制 pH 与浓度', '只有温度', '只有搅拌', '只有洗涤'], answer: 0, explain: '共沉淀。' }
        ],
        doc: { lead: '这一章讲粉体。', sections: [
          { id: 'solid', title: '固相法', html: `<p>球磨、煅烧；粒径与团聚。</p>` },
          { id: 'wet', title: '湿化学法', html: `<p>沉淀、溶胶-凝胶、水热；形貌与纯度。</p>` }
        ], refs: [] } },
      { title: '薄膜制备', brief: '薄薄一层。',
        q: [
          { stem: 'PVD 与 CVD 的区别是：', options: ['是否为化学气相反应', '真空度', '温度', '靶材'], answer: 0, explain: '化学。' },
          { stem: '溅射镀膜的优点是：', options: ['附着力好、可镀多种材料', '速度快唯一', '成本低', '无需真空'], answer: 0, explain: '溅射。' },
          { stem: '薄膜厚度的常用测量方法：', options: ['台阶仪、椭偏仪、XRR', '只有台阶仪', '只有椭偏仪', '只有 XRR'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲薄膜。', sections: [
          { id: 'pvd', title: 'PVD', html: `<p>蒸发、溅射；真空与沉积速率。</p>` },
          { id: 'cvd', title: 'CVD 与 ALD', html: `<p>化学气相沉积、原子层沉积；前驱体与温度。</p>` }
        ], refs: [] } },
      { title: '单晶与晶体生长', brief: '长晶体。',
        q: [
          { stem: '提拉法（Czochralski）用于：', options: ['生长单晶硅', '制备粉体', '镀膜', '烧结'], answer: 0, explain: '提拉。' },
          { stem: '区熔法的目的是：', options: ['提纯晶体', '增大晶粒', '镀膜', '粉碎'], answer: 0, explain: '区熔。' },
          { stem: '晶体生长速率过快会：', options: ['产生缺陷与夹杂', '提高质量', '无影响', '提高纯度'], answer: 0, explain: '速率。' }
        ],
        doc: { lead: '这一章讲单晶。', sections: [
          { id: 'method', title: '方法', html: `<p>提拉、区熔、坩埚下降、气相外延。</p>` },
          { id: 'defect', title: '缺陷', html: `<p>位错、孪晶、成分偏析；工艺控制。</p>` }
        ], refs: [] } },
      { title: '烧结与致密化', brief: '压成块。',
        q: [
          { stem: '烧结的驱动力是：', options: ['表面能与界面能降低', '压力唯一', '温度唯一', '化学反应'], answer: 0, explain: '表面能。' },
          { stem: '烧结阶段包括：', options: ['初期、中期、后期', '只有初期', '只有中期', '只有后期'], answer: 0, explain: '三阶段。' },
          { stem: '提高致密度的措施：', options: ['细化粉体、优化温度曲线、加压烧结', '增大粒径', '降低温度', '减少保温'], answer: 0, explain: '工艺。' }
        ],
        doc: { lead: '这一章讲烧结。', sections: [
          { id: 'driving', title: '驱动力', html: `<p>表面能降低、扩散与传质；致密化。</p>` },
          { id: 'process', title: '工艺', html: `<p>常压、热压、放电等离子烧结；晶粒控制。</p>` }
        ], refs: [] } },
      { title: '复合材料与加工', brief: '组合。',
        q: [
          { stem: '复合材料的目的是：', options: ['取长补短、获得综合性能', '降成本唯一', '减重唯一', '好看'], answer: 0, explain: '复合。' },
          { stem: '增强体的形式包括：', options: ['纤维、颗粒、晶须', '只有纤维', '只有颗粒', '只有晶须'], answer: 0, explain: '多种。' },
          { stem: '界面结合对性能：', options: ['影响显著', '无影响', '只影响外观', '只影响成本'], answer: 0, explain: '界面。' }
        ],
        doc: { lead: '这一章讲复合。', sections: [
          { id: 'type', title: '类型', html: `<p>金属基、陶瓷基、树脂基；增强体形式。</p>` },
          { id: 'interface', title: '界面', html: `<p>润湿、结合强度；制备工艺（浸渗、热压）。</p>` }
        ], refs: [] } },
      { title: '制备工艺实验', brief: '动手。',
        q: [
          { stem: '球磨的作用是：', options: ['细化粉体、混合均匀', '提纯', '镀膜', '烧结'], answer: 0, explain: '球磨。' },
          { stem: '煅烧温度过高会：', options: ['晶粒粗化、活性降低', '提高活性', '细化晶粒', '无影响'], answer: 0, explain: '粗化。' },
          { stem: '实验安全要求：', options: ['高温防护、粉尘防护、用电安全', '只有手套', '只有口罩', '无要求'], answer: 0, explain: '安全。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'process', title: '工艺', html: `<p>配料、球磨、成型、烧结；参数记录。</p>` },
          { id: 'safety', title: '安全', html: `<p>高温炉、粉尘、气体；防护与应急处置。</p>` }
        ], refs: [] } },
      { title: '制备与性能调控', brief: '工艺决定性能。',
        q: [
          { stem: '工艺—结构—性能的关系是：', options: ['工艺决定结构进而决定性能', '无关系', '性能决定工艺', '结构无关'], answer: 0, explain: '链条。' },
          { stem: '掺杂的作用是：', options: ['调控能带与缺陷、改变性能', '增加成本', '装饰', '无作用'], answer: 0, explain: '掺杂。' },
          { stem: '工艺优化的方法是：', options: ['正交试验与响应面', '猜', '一次定死', '只看经验'], answer: 0, explain: '优化。' }
        ],
        doc: { lead: '这一章讲调控。', sections: [
          { id: 'chain', title: '链条', html: `<p>工艺参数—微观结构—宏观性能。</p>` },
          { id: 'optimize', title: '优化', html: `<p>正交实验、响应面；掺杂与后处理。</p>` }
        ], refs: [] } }
    ] },
    { name: '材料分析方法', chapters: [
      { title: 'X 射线衍射', brief: '看晶体。',
        q: [
          { stem: '布拉格方程是：', options: ['2d sinθ = nλ', 'd sinθ = λ', '2d = nλ', 'd = λ'], answer: 0, explain: '布拉格。' },
          { stem: 'XRD 可用于：', options: ['物相定性与定量、晶格常数', '形貌', '元素价态唯一', '热分析'], answer: 0, explain: '物相。' },
          { stem: '衍射峰宽化反映：', options: ['晶粒细小或微观应变', '纯度高', '元素多', '温度低'], answer: 0, explain: '宽化。' }
        ],
        doc: { lead: '这一章讲 XRD。', sections: [
          { id: 'bragg', title: '布拉格', html: `<p>衍射条件、衍射仪；样品制备。</p>` },
          { id: 'analysis', title: '分析', html: `<p>物相检索、点阵常数、晶粒尺寸（谢乐公式）。</p>` }
        ], refs: [] } },
      { title: '电子显微分析', brief: '看见细节。',
        q: [
          { stem: 'SEM 的主要功能是：', options: ['表面形貌与微区成分', '晶体结构唯一', '热分析', '力学性能'], answer: 0, explain: 'SEM。' },
          { stem: 'TEM 的分辨率比 SEM：', options: ['更高', '更低', '相同', '无关'], answer: 0, explain: 'TEM。' },
          { stem: 'EDS 用于：', options: ['元素成分分析', '结构', '形貌唯一', '热性能'], answer: 0, explain: 'EDS。' }
        ],
        doc: { lead: '这一章讲电镜。', sections: [
          { id: 'sem', title: 'SEM', html: `<p>二次电子、背散射；形貌与成分衬度。</p>` },
          { id: 'tem', title: 'TEM', html: `<p>明场暗场、衍射；样品制备与分辨率。</p>` }
        ], refs: [] } },
      { title: '光谱与能谱', brief: '成分与价态。',
        q: [
          { stem: 'XPS 用于：', options: ['表面元素与化学价态', '体相结构', '形貌', '力学'], answer: 0, explain: 'XPS。' },
          { stem: '红外光谱用于：', options: ['官能团与分子结构', '元素定量唯一', '晶体结构', '热性能'], answer: 0, explain: 'IR。' },
          { stem: '拉曼光谱反映：', options: ['分子振动与晶格振动', '元素组成唯一', '形貌', '电学'], answer: 0, explain: '拉曼。' }
        ],
        doc: { lead: '这一章讲光谱。', sections: [
          { id: 'xps', title: 'XPS', html: `<p>结合能、化学位移；表面敏感性。</p>` },
          { id: 'vibration', title: '振动光谱', html: `<p>IR、Raman；官能团与结构。</p>` }
        ], refs: [] } },
      { title: '热分析', brief: '随温度变化。',
        q: [
          { stem: 'DSC 测量的是：', options: ['热流随温度变化', '质量变化', '尺寸变化', '电阻'], answer: 0, explain: 'DSC。' },
          { stem: 'TGA 测量的是：', options: ['质量随温度变化', '热流', '尺寸', '磁性'], answer: 0, explain: 'TGA。' },
          { stem: '热膨胀仪用于：', options: ['测热膨胀系数', '测热流', '测质量', '测磁性'], answer: 0, explain: '膨胀。' }
        ],
        doc: { lead: '这一章讲热分析。', sections: [
          { id: 'dsc', title: 'DSC/DTA', html: `<p>玻璃化转变、熔融、结晶；热效应。</p>` },
          { id: 'tga', title: 'TGA 与膨胀', html: `<p>失重与分解；热膨胀系数。</p>` }
        ], refs: [] } },
      { title: '力学与物理测试', brief: '性能表征。',
        q: [
          { stem: '纳米压痕可测：', options: ['硬度和弹性模量（微区）', '只有硬度', '只有模量', '只有密度'], answer: 0, explain: '压痕。' },
          { stem: '四探针法测：', options: ['电阻率', '硬度', '热导', '磁性'], answer: 0, explain: '电阻率。' },
          { stem: 'VSM 用于测：', options: ['磁滞回线', '电阻', '热导', '硬度'], answer: 0, explain: '磁性。' }
        ],
        doc: { lead: '这一章讲测试。', sections: [
          { id: 'nano', title: '微区力学', html: `<p>纳米压痕、划痕；硬度与模量。</p>` },
          { id: 'physical', title: '物理性能', html: `<p>四探针、霍尔、VSM；介电与热导。</p>` }
        ], refs: [] } },
      { title: '表面与界面分析', brief: '表面几层原子。',
        q: [
          { stem: '表面分析的特点是：', options: ['对表面几纳米敏感', '测体相', '测力学', '测热'], answer: 0, explain: '表面。' },
          { stem: 'AFM 可测：', options: ['表面形貌与力学性质（纳米级）', '元素', '价态', '晶体结构'], answer: 0, explain: 'AFM。' },
          { stem: '接触角测量用于：', options: ['表征表面润湿性', '测硬度', '测导电', '测磁性'], answer: 0, explain: '接触角。' }
        ],
        doc: { lead: '这一章讲表面。', sections: [
          { id: 'afm', title: 'AFM/STM', html: `<p>形貌与电子结构；探针与模式。</p>` },
          { id: 'wetting', title: '润湿', html: `<p>接触角、表面能；改性与涂层。</p>` }
        ], refs: [] } },
      { title: '数据分析与报告', brief: '看懂数据。',
        q: [
          { stem: '谱图解析应：', options: ['结合标准卡片与文献', '凭感觉', '只看峰高', '忽略背景'], answer: 0, explain: '对照。' },
          { stem: '定量分析的前提：', options: ['标样与校准曲线', '只有峰高', '只有仪器', '只有经验'], answer: 0, explain: '标样。' },
          { stem: '报告应包含：', options: ['方法、条件、结果与结论', '只有图', '只有结论', '只有数据'], answer: 0, explain: '完整。' }
        ],
        doc: { lead: '这一章讲数据。', sections: [
          { id: 'analysis', title: '解析', html: `<p>物相检索、峰拟合、半定量；伪影识别。</p>` },
          { id: 'report', title: '报告', html: `<p>方法、条件、原始数据；结论与不确定度。</p>` }
        ], refs: [] } },
      { title: '表征实验', brief: '上机。',
        q: [
          { stem: 'XRD 样品要求：', options: ['表面平整、粉末粒度合适', '任意', '越湿越好', '越薄越好'], answer: 0, explain: '样品。' },
          { stem: 'SEM 样品需：', options: ['导电或喷金处理', '必须透明', '必须液态', '必须高温'], answer: 0, explain: '导电。' },
          { stem: '上机安全要求：', options: ['遵守操作规程、注意高压与真空', '随意', '快速', '不看'], answer: 0, explain: '安全。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'sample', title: '样品', html: `<p>制备与要求；喷金、减薄、离子抛光。</p>` },
          { id: 'operation', title: '操作', html: `<p>仪器流程、参数选择；安全与维护。</p>` }
        ], refs: [] } }
    ] },
    { name: '金属材料学', chapters: [
      { title: '铁碳相图', brief: '钢铁的地图。',
        q: [
          { stem: '共析反应发生在：', options: ['727℃（珠光体转变）', '1148℃', '1538℃', '912℃'], answer: 0, explain: '共析。' },
          { stem: '奥氏体是：', options: ['碳溶于 γ-Fe 的固溶体', '碳化物', '铁素体', '马氏体'], answer: 0, explain: '奥氏体。' },
          { stem: '含碳量对钢性能影响是：', options: ['强度升高、塑性下降', '强度下降', '无影响', '塑性升高'], answer: 0, explain: '碳含量。' }
        ],
        doc: { lead: '这一章讲相图。', sections: [
          { id: 'diagram', title: '相图', html: `<p>铁碳相图、相区与转变；共析与共晶。</p>` },
          { id: 'phase', title: '组织', html: `<p>铁素体、奥氏体、渗碳体、珠光体；性能。</p>` }
        ], refs: [] } },
      { title: '钢的热处理', brief: '加热与冷却。',
        q: [
          { stem: '淬火的目的是：', options: ['获得马氏体、提高硬度', '软化', '消除应力', '细化晶粒'], answer: 0, explain: '淬火。' },
          { stem: '回火的作用是：', options: ['降低脆性、调整强韧性', '提高硬度', '细化晶粒', '消除碳'], answer: 0, explain: '回火。' },
          { stem: '退火与正火的区别是：', options: ['冷却速度不同', '加热温度', '保温时间', '材料'], answer: 0, explain: '冷却。' }
        ],
        doc: { lead: '这一章讲热处理。', sections: [
          { id: 'process', title: '工艺', html: `<p>退火、正火、淬火、回火；CCT/TTT 曲线。</p>` },
          { id: 'microstructure', title: '组织', html: `<p>马氏体、贝氏体、珠光体；强韧化机理。</p>` }
        ], refs: [] } },
      { title: '合金钢', brief: '加合金元素。',
        q: [
          { stem: '合金元素的主要作用包括：', options: ['固溶强化、细化晶粒、提高淬透性', '只有强化', '只有细化', '只有淬透'], answer: 0, explain: '多作用。' },
          { stem: '不锈钢中的主要合金元素是：', options: ['Cr', 'Cu', 'Al', 'Pb'], answer: 0, explain: 'Cr。' },
          { stem: '高速钢的特点是：', options: ['红硬性好', '耐蚀', '导电好', '密度小'], answer: 0, explain: '红硬性。' }
        ],
        doc: { lead: '这一章讲合金钢。', sections: [
          { id: 'element', title: '元素作用', html: `<p>固溶、碳化物形成；淬透性与回火稳定性。</p>` },
          { id: 'types', title: '钢种', html: `<p>结构钢、工具钢、不锈钢、耐热钢。</p>` }
        ], refs: [] } },
      { title: '铸铁与有色金属', brief: '其他金属。',
        q: [
          { stem: '灰铸铁的特点是：', options: ['减振性好、成本低', '强度高', '塑性好', '耐热'], answer: 0, explain: '灰铸铁。' },
          { stem: '球墨铸铁的球化处理作用是：', options: ['提高强度与塑性', '降低强度', '增加脆性', '改变颜色'], answer: 0, explain: '球化。' },
          { stem: '铝合金的强化方式包括：', options: ['时效强化、固溶强化', '只有时效', '只有固溶', '无强化'], answer: 0, explain: '时效。' }
        ],
        doc: { lead: '这一章讲其他。', sections: [
          { id: 'cast', title: '铸铁', html: `<p>灰铸铁、球墨铸铁、可锻铸铁；石墨形态。</p>` },
          { id: 'nonferrous', title: '有色', html: `<p>铝、铜、镁、钛合金；强化与用途。</p>` }
        ], refs: [] } },
      { title: '表面与防护', brief: '从表面改起。',
        q: [
          { stem: '表面淬火的作用是：', options: ['表硬心韧', '整体硬化', '软化', '细化晶粒'], answer: 0, explain: '表硬。' },
          { stem: '渗碳的目的是：', options: ['提高表面硬度和耐磨性', '提高心部强度', '降成本', '改善切削'], answer: 0, explain: '渗碳。' },
          { stem: '镀层防护的原理是：', options: ['隔离腐蚀介质或牺牲阳极', '提高强度', '提高导电', '装饰'], answer: 0, explain: '防护。' }
        ],
        doc: { lead: '这一章讲表面。', sections: [
          { id: 'treatment', title: '表面处理', html: `<p>感应淬火、渗碳渗氮、激光强化。</p>` },
          { id: 'coating', title: '涂层', html: `<p>电镀、热喷涂、PVD/CVD；防腐与耐磨。</p>` }
        ], refs: [] } },
      { title: '新型金属材料', brief: '前沿。',
        q: [
          { stem: '形状记忆合金的典型代表是：', options: ['NiTi 合金', '钢铁', '铝合金', '铜合金'], answer: 0, explain: 'NiTi。' },
          { stem: '非晶合金的特点是：', options: ['无长程有序、强度高', '脆性大唯一', '导电差', '密度大'], answer: 0, explain: '非晶。' },
          { stem: '高熵合金的设计思想是：', options: ['多主元近等原子比', '单一主元', '少量添加', '纯金属'], answer: 0, explain: '多主元。' }
        ],
        doc: { lead: '这一章讲新型。', sections: [
          { id: 'memory', title: '记忆与超弹', html: `<p>NiTi、马氏体相变；应用。</p>` },
          { id: 'amorphous', title: '非晶与高熵', html: `<p>非晶合金、高熵合金；性能与制备。</p>` }
        ], refs: [] } },
      { title: '材料选择与失效', brief: '选与用。',
        q: [
          { stem: '选材时应考虑：', options: ['服役条件、性能、工艺与成本', '只有性能', '只有成本', '只有工艺'], answer: 0, explain: '综合。' },
          { stem: '金属构件的常见失效包括：', options: ['疲劳、腐蚀、磨损、断裂', '只有疲劳', '只有腐蚀', '只有磨损'], answer: 0, explain: '多种。' },
          { stem: '提高零件寿命的途径：', options: ['选材、热处理、表面强化、结构优化', '只有选材', '只有热处理', '只有表面'], answer: 0, explain: '综合。' }
        ],
        doc: { lead: '这一章讲选材。', sections: [
          { id: 'selection', title: '选材', html: `<p>性能匹配、工艺性、经济性；替代材料。</p>` },
          { id: 'failure', title: '失效', html: `<p>失效模式与对策；寿命评估。</p>` }
        ], refs: [] } },
      { title: '金相实验', brief: '看组织。',
        q: [
          { stem: '金相试样制备的步骤：', options: ['取样—镶嵌—磨抛—腐蚀', '只有磨抛', '只有腐蚀', '直接观察'], answer: 0, explain: '制备。' },
          { stem: '金相腐蚀的目的是：', options: ['显示组织与晶界', '装饰', '提高硬度', '清洗'], answer: 0, explain: '腐蚀。' },
          { stem: '硬度测试应：', options: ['多点测量取平均', '只测一点', '只测边缘', '随意'], answer: 0, explain: '多点。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'metallography', title: '金相', html: `<p>制样、腐蚀、显微观察；组织识别。</p>` },
          { id: 'hardness', title: '硬度与热处理', html: `<p>硬度测试、淬火回火实验；组织-性能对应。</p>` }
        ], refs: [] } }
    ] },

    /* ---- 大四 ---- */
    { name: '毕业设计', chapters: [
      { title: '选题与开题', brief: '做什么。',
        q: [
          { stem: '材料毕设选题关键是：', options: ['问题明确、方案可行、可表征', '题目宏大', '追热点', '导师偏好'], answer: 0, explain: '可行。' },
          { stem: '开题报告应包含：', options: ['背景、目标、方案、计划', '只有背景', '只有计划', '只有方案'], answer: 0, explain: '四要素。' },
          { stem: '常见毕设类型包括：', options: ['制备与性能、表征分析、工艺优化', '只有制备', '只有表征', '只有工艺'], answer: 0, explain: '多类。' }
        ],
        doc: { lead: '这一章讲开题。', sections: [
          { id: 'topic', title: '选题', html: `<p>材料合成、性能改性、表征方法；范围可控。</p>` },
          { id: 'proposal', title: '开题', html: `<p>背景、目标、方案、进度、风险；可行性。</p>` }
        ], refs: [] } },
      { title: '实验与表征', brief: '做实验。',
        q: [
          { stem: '实验设计应包含：', options: ['变量、对照与重复', '只有变量', '只有对照', '只有重复'], answer: 0, explain: '设计。' },
          { stem: '表征手段选择依据：', options: ['要回答的科学问题', '仪器先进', '价格', '速度'], answer: 0, explain: '问题。' },
          { stem: '数据记录应：', options: ['原始、完整、可追溯', '只记好数据', '事后补', '随意'], answer: 0, explain: '记录。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'design', title: '设计', html: `<p>变量控制、对照、重复；工艺参数矩阵。</p>` },
          { id: 'characterization', title: '表征', html: `<p>XRD、SEM、性能测试；数据管理。</p>` }
        ], refs: [] } },
      { title: '论文与规范', brief: '写清楚。',
        q: [
          { stem: '材料论文的结构是：', options: ['引言—实验—结果与讨论—结论', '总—分—总', '背景—致谢', '问答'], answer: 0, explain: '结构。' },
          { stem: '图表规范包括：', options: ['坐标标注、误差、比例尺', '只有图', '只有表', '无要求'], answer: 0, explain: '规范。' },
          { stem: '引用规范的作用：', options: ['可追溯与诚信', '凑数', '装饰', '增加篇幅'], answer: 0, explain: '规范。' }
        ],
        doc: { lead: '这一章讲写作。', sections: [
          { id: 'structure', title: '结构', html: `<p>摘要、引言、实验、结果讨论、结论。</p>` },
          { id: 'figures', title: '图表', html: `<p>谱图与曲线规范；数据出处与误差。</p>` }
        ], refs: [] } },
      { title: '答辩与交付', brief: '讲清楚。',
        q: [
          { stem: '答辩陈述要点：', options: ['问题、方法、结果、局限', '致谢', '篇幅', '格式'], answer: 0, explain: '四点。' },
          { stem: '交付物应包括：', options: ['论文、原始数据、样品/工艺记录', '只有论文', '只有数据', '只有样品'], answer: 0, explain: '完整。' },
          { stem: '被质疑时应：', options: ['承认局限并说明理由', '争辩', '回避', '改口'], answer: 0, explain: '诚恳。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'demo', title: '陈述', html: `<p>10 分钟：问题—方法—结果—局限。</p>` },
          { id: 'qa', title: '问答', html: `<p>准备表征与机理问题；不会就说思路。</p>` }
        ], refs: [] } }
    ] },
    { name: '专业实习', chapters: [
      { title: '岗位与角色', brief: '工厂与实验室。',
        q: [
          { stem: '材料实习的常见岗位不包括：', options: ['工艺工程师', '材料研发', '质量检测', '外科医生'], answer: 3, explain: '无关。' },
          { stem: '选择实习最该看：', options: ['能否参与真实项目', '名气', '工资', '通勤'], answer: 0, explain: '实战。' },
          { stem: '车间实习常见起点是：', options: ['跟班学工艺与检测', '直接做主设计', '只写文档', '只开会'], answer: 0, explain: '跟班。' }
        ],
        doc: { lead: '这一章讲岗位。', sections: [
          { id: 'roles', title: '岗位', html: `<p>工艺、研发、检测、质量；职责与技能。</p>` },
          { id: 'onboard', title: '上手', html: `<p>读工艺文件、认设备、学检测；记录与提问。</p>` }
        ], refs: [] } },
      { title: '生产工艺', brief: '怎么造。',
        q: [
          { stem: '工艺参数对性能影响：', options: ['显著（温度、时间、气氛）', '无影响', '只影响外观', '只影响成本'], answer: 0, explain: '参数。' },
          { stem: '质量控制的常见手段：', options: ['首件、抽检、SPC', '只有终检', '不检验', '只看外观'], answer: 0, explain: '控制。' },
          { stem: '热处理工艺卡的作用：', options: ['指导操作与保证一致性', '装饰', '考核', '归档'], answer: 0, explain: '指导。' }
        ],
        doc: { lead: '这一章讲工艺。', sections: [
          { id: 'process', title: '工艺', html: `<p>熔炼、成型、热处理、表面处理；参数控制。</p>` },
          { id: 'quality', title: '质量', html: `<p>检验项目、抽样与 SPC；不合格处理。</p>` }
        ], refs: [] } },
      { title: '检测与失效', brief: '查问题。',
        q: [
          { stem: '来料检验的目的是：', options: ['确认成分与性能达标', '装饰', '加快', '省成本'], answer: 0, explain: '来料。' },
          { stem: '失效分析的常用手段：', options: ['断口、金相、成分分析', '只有目视', '只有称重', '只有硬度'], answer: 0, explain: '多种。' },
          { stem: '纠正措施应：', options: ['针对根因并验证效果', '只处理表面', '不验证', '口头'], answer: 0, explain: '根因。' }
        ],
        doc: { lead: '这一章讲检测。', sections: [
          { id: 'inspection', title: '检测', html: `<p>成分、力学、无损检测；标准与判定。</p>` },
          { id: 'failure', title: '失效', html: `<p>断口与金相分析；8D 与纠正措施。</p>` }
        ], refs: [] } },
      { title: '实习复盘', brief: '留下什么。',
        q: [
          { stem: '实习应留下的成果是：', options: ['工艺记录、检测数据、复盘', '工牌', '照片', '评语'], answer: 0, explain: '成果。' },
          { stem: '实习日志推荐写法：', options: ['问题—做法—结果—反思', '流水账', '只写结论', '只写感受'], answer: 0, explain: '结构化。' },
          { stem: '面试讲项目最佳结构：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'output', title: '成果', html: `<p>工艺改进、检测报告、失效案例；可量化。</p>` },
          { id: 'review', title: '复盘', html: `<p>每周五行；讲清你的贡献与学到的东西。</p>` }
        ], refs: [] } }
    ] },
    { name: '考研与求职', chapters: [
      { title: '考研方向', brief: '材料与交叉。',
        q: [
          { stem: '材料考研的常见方向是：', options: ['材料科学与工程、材料与化工专硕、材料物理化学', '只有材料科学', '只有专硕', '只有物理化学'], answer: 0, explain: '多方向。' },
          { stem: '材料科学基础在考研中的地位：', options: ['专业课核心', '不重要', '只考其一', '只考公共课'], answer: 0, explain: '核心。' },
          { stem: '择校最应考虑：', options: ['方向、导师与平台', '城市', '学费', '宿舍'], answer: 0, explain: '匹配。' }
        ],
        doc: { lead: '这一章讲方向。', sections: [
          { id: 'paths', title: '方向', html: `<p>金属、无机非金属、高分子、复合材料、新能源材料。</p>` },
          { id: 'subjects', title: '科目', html: `<p>政治、英语、数学二、专业课（材料科学基础/物理化学）。</p>` }
        ], refs: [] } },
      { title: '专业课复习', brief: '基础与计算。',
        q: [
          { stem: '材料科学基础复习主线：', options: ['结构—相图—扩散—形变—性能', '只背定义', '只做计算', '只看真题'], answer: 0, explain: '主线。' },
          { stem: '相图题的解题关键：', options: ['相区判断与杠杆定律', '猜', '背答案', '跳过'], answer: 0, explain: '相图。' },
          { stem: '物化复习重点：', options: ['热力学、平衡、动力学', '只有热力学', '只有平衡', '只有动力学'], answer: 0, explain: '三大块。' }
        ],
        doc: { lead: '这一章讲复习。', sections: [
          { id: 'fundamental', title: '材料基础', html: `<p>晶体、缺陷、相图、扩散、形变；计算题。</p>` },
          { id: 'physical', title: '物理化学', html: `<p>热力学、相平衡、电化学、动力学。</p>` }
        ], refs: [] } },
      { title: '求职方向', brief: '材料与制造。',
        q: [
          { stem: '材料毕业生的常见去向不包括：', options: ['材料研发', '工艺工程', '质量检测', '外科医生'], answer: 3, explain: '专业限制。' },
          { stem: '新能源岗位看重：', options: ['电池材料与表征能力', '只有编程', '只有英语', '只有证书'], answer: 0, explain: '专业。' },
          { stem: '求职最加分的材料：', options: ['科研项目与表征数据', '证书数量', '成绩单', '社团'], answer: 0, explain: '项目。' }
        ],
        doc: { lead: '这一章讲就业。', sections: [
          { id: 'paths', title: '路径', html: `<p>新能源、半导体、钢铁/有色、高分子、检测、读博。</p>` },
          { id: 'skills', title: '能力', html: `<p>材料制备、表征（XRD/SEM）、数据分析；项目经验。</p>` }
        ], refs: [] } },
      { title: '面试', brief: '技术与表达。',
        q: [
          { stem: '材料面试常考：', options: ['结构-性能关系与表征方法', '只有编程', '只有英语', '只有性格'], answer: 0, explain: '专业。' },
          { stem: '讲项目最佳结构：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' },
          { stem: '被问到不会的问题应：', options: ['说明思路并诚实承认', '编造', '沉默', '转移话题'], answer: 0, explain: '诚实。' }
        ],
        doc: { lead: '这一章讲面试。', sections: [
          { id: 'tech', title: '技术', html: `<p>晶体结构、相图、热处理、表征；案例分析。</p>` },
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
