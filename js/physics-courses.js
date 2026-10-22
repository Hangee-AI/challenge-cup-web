/* ==========================================================
   physics-courses.js · 物理学：12 门课（主干 8 / 出口 4）= 84 关
   ========================================================== */

(function () {
  var MAJOR = 'science-物理学';
  var TITLES = stageTitlesOf('science');

  var COURSES = [
    { name: '力学', chapters: [
      { title: '质点运动学', brief: '描述运动。',
        q: [
          { stem: '加速度是：', options: ['速度对时间的导数', '位置', '速度', '位移'], answer: 0, explain: '导数。' },
          { stem: '抛体运动的水平方向是：', options: ['匀速直线运动', '加速', '减速', '圆周'], answer: 0, explain: '匀速。' },
          { stem: '圆周运动的向心加速度是：', options: ['v²/r', 'v/r', 'vr', 'v²r'], answer: 0, explain: 'v²/r。' }
        ],
        doc: { lead: '这一章讲运动学。', sections: [
          { id: 'kinematics', title: '运动学', html: `<p>位置、速度、加速度；直线与曲线运动；相对运动。</p>` },
          { id: 'circular', title: '圆周', html: `<p>角量、向心与切向加速度；圆周运动的动力学。</p>` }
        ], refs: [] } },
      { title: '牛顿力学', brief: '力与运动。',
        q: [
          { stem: '牛顿第二定律的表达式是：', options: ['F = ma', 'F = mv', 'F = m/a', 'F = a/m'], answer: 0, explain: 'F=ma。' },
          { stem: '惯性系与非惯性系的区别是：', options: ['是否满足牛顿定律', '是否运动', '是否有引力', '是否旋转'], answer: 0, explain: '惯性系。' },
          { stem: '摩擦力方向：', options: ['与相对运动趋势相反', '与运动同向', '总是向前', '竖直向上'], answer: 0, explain: '阻碍相对运动。' }
        ],
        doc: { lead: '这一章讲牛顿定律。', sections: [
          { id: 'laws', title: '三定律', html: `<p>惯性、F=ma、作用反作用；受力分析。</p>` },
          { id: 'noninertial', title: '非惯性系', html: `<p>惯性力、离心力、科里奥利力。</p>` }
        ], refs: [] } },
      { title: '动量与角动量', brief: '守恒量。',
        q: [
          { stem: '动量守恒的条件是：', options: ['合外力为零', '合外力不为零', '有摩擦', '有转动'], answer: 0, explain: '合外力。' },
          { stem: '角动量守恒的条件是：', options: ['合外力矩为零', '合外力为零', '速度不变', '质量不变'], answer: 0, explain: '力矩。' },
          { stem: '碰撞中动量：', options: ['总是守恒', '不守恒', '只有弹性守恒', '只有非弹性守恒'], answer: 0, explain: '守恒。' }
        ],
        doc: { lead: '这一章讲守恒。', sections: [
          { id: 'momentum', title: '动量', html: `<p>冲量、动量定理、质心；碰撞与反冲。</p>` },
          { id: 'angular', title: '角动量', html: `<p>力矩、角动量定理；开普勒定律。</p>` }
        ], refs: [] } },
      { title: '功与能', brief: '能量的语言。',
        q: [
          { stem: '保守力做功与路径：', options: ['无关', '有关', '成正比', '成反比'], answer: 0, explain: '保守。' },
          { stem: '机械能守恒的条件是：', options: ['只有保守力做功', '有摩擦力', '有外力做功', '速度不变'], answer: 0, explain: '条件。' },
          { stem: '势能零点可以：', options: ['任意选取', '必须在地面', '必须在无穷远', '固定'], answer: 0, explain: '任意。' }
        ],
        doc: { lead: '这一章讲能量。', sections: [
          { id: 'work', title: '功与动能', html: `<p>功、动能定理；功率。</p>` },
          { id: 'potential', title: '势能', html: `<p>重力、弹性、引力势能；机械能守恒与能量图。</p>` }
        ], refs: [] } },
      { title: '刚体转动', brief: '转动动力学。',
        q: [
          { stem: '转动惯量取决于：', options: ['质量分布与转轴位置', '只有质量', '只有形状', '只有角速度'], answer: 0, explain: '分布。' },
          { stem: '转动定律是：', options: ['M = Iβ', 'F = ma', 'M = Iω', 'M = I/β'], answer: 0, explain: 'M=Iβ。' },
          { stem: '滚动中静摩擦力的作用是：', options: ['提供转动所需的力矩', '阻碍运动唯一', '不做功', '无作用'], answer: 0, explain: '力矩。' }
        ],
        doc: { lead: '这一章讲刚体。', sections: [
          { id: 'rotation', title: '定轴转动', html: `<p>角量、转动惯量、平行轴定理；转动定律。</p>` },
          { id: 'rolling', title: '滚动', html: `<p>纯滚动条件、能量法；陀螺与进动初步。</p>` }
        ], refs: [] } },
      { title: '振动', brief: '周期性运动。',
        q: [
          { stem: '简谐运动的周期由什么决定？', options: ['系统参数（m、k）', '振幅', '初相', '能量'], answer: 0, explain: '固有。' },
          { stem: '共振发生在：', options: ['驱动力频率接近固有频率', '任意频率', '频率为零', '振幅最大唯一'], answer: 0, explain: '共振。' },
          { stem: '阻尼振动中能量：', options: ['逐渐减少', '守恒', '增加', '不变'], answer: 0, explain: '耗散。' }
        ],
        doc: { lead: '这一章讲振动。', sections: [
          { id: 'shm', title: '简谐', html: `<p>运动方程、能量、弹簧振子与单摆。</p>` },
          { id: 'damped', title: '阻尼与受迫', html: `<p>阻尼振动、受迫振动、共振曲线。</p>` }
        ], refs: [] } },
      { title: '波动', brief: '振动的传播。',
        q: [
          { stem: '波速由什么决定？', options: ['介质性质', '频率', '振幅', '波长'], answer: 0, explain: '介质。' },
          { stem: '驻波的特点是：', options: ['波节波腹位置固定', '向前传播', '无能量', '频率为零'], answer: 0, explain: '驻波。' },
          { stem: '多普勒效应说明：', options: ['频率随源与观察者相对运动改变', '波速改变', '振幅改变', '波长不变'], answer: 0, explain: '多普勒。' }
        ],
        doc: { lead: '这一章讲波动。', sections: [
          { id: 'wave', title: '波', html: `<p>波函数、波速、能量；横波与纵波。</p>` },
          { id: 'interference', title: '干涉与驻波', html: `<p>叠加、相干、驻波；多普勒效应。</p>` }
        ], refs: [] } },
      { title: '流体与相对论初步', brief: '拓展视野。',
        q: [
          { stem: '伯努利方程体现：', options: ['能量守恒', '动量守恒', '角动量', '质量守恒'], answer: 0, explain: '能量。' },
          { stem: '狭义相对论的基本假设是：', options: ['相对性原理与光速不变', '绝对时空', '以太', '超光速'], answer: 0, explain: '两假设。' },
          { stem: '时间膨胀说明：', options: ['运动时钟变慢', '时钟变快', '时间不变', '无意义'], answer: 0, explain: '膨胀。' }
        ],
        doc: { lead: '这一章讲拓展。', sections: [
          { id: 'fluid', title: '流体', html: `<p>连续性方程、伯努利方程；粘滞与雷诺数。</p>` },
          { id: 'relativity', title: '相对论', html: `<p>洛伦兹变换、时间膨胀、长度收缩、质能关系。</p>` }
        ], refs: [] } }
    ] },
    { name: '热学', chapters: [
      { title: '温度与状态方程', brief: '热学的基本量。',
        q: [
          { stem: '理想气体状态方程是：', options: ['pV = nRT', 'pV = nR', 'p = nRT', 'V = nRT'], answer: 0, explain: '方程。' },
          { stem: '热力学第零定律说明：', options: ['温度可以定义与比较', '能量守恒', '熵增', '绝对零度'], answer: 0, explain: '温度。' },
          { stem: '温标的国际标准是：', options: ['热力学温标', '摄氏温标', '华氏温标', '兰氏温标'], answer: 0, explain: 'K。' }
        ],
        doc: { lead: '这一章讲状态。', sections: [
          { id: 'temperature', title: '温度', html: `<p>热平衡、温标、理想气体温标。</p>` },
          { id: 'equation', title: '状态方程', html: `<p>理想气体、范德瓦尔斯方程；混合气体。</p>` }
        ], refs: [] } },
      { title: '气体动理论', brief: '微观图像。',
        q: [
          { stem: '温度的微观本质是：', options: ['分子平均平动动能的量度', '热量', '压力', '体积'], answer: 0, explain: '动能。' },
          { stem: '麦克斯韦速率分布的特点是：', options: ['有一个最概然速率', '均匀分布', '只有一种速率', '无规律'], answer: 0, explain: '分布。' },
          { stem: '能量均分定理给出：', options: ['每个自由度平均能量 kT/2', '总能量', '压强', '体积'], answer: 0, explain: '均分。' }
        ],
        doc: { lead: '这一章讲动理论。', sections: [
          { id: 'kinetic', title: '动理论', html: `<p>压强公式、温度与平均动能；自由度与内能。</p>` },
          { id: 'distribution', title: '分布', html: `<p>麦克斯韦速率分布、玻尔兹曼分布；平均自由程。</p>` }
        ], refs: [] } },
      { title: '热力学第一定律', brief: '能量守恒。',
        q: [
          { stem: '热力学第一定律是：', options: ['Q = ΔU + W', 'Q = W', 'U = QW', 'W = Q + ΔU'], answer: 0, explain: '符号约定。' },
          { stem: '等温过程中理想气体内能：', options: ['不变', '增加', '减少', '不确定'], answer: 0, explain: '等温。' },
          { stem: '绝热过程的特点是：', options: ['Q = 0', 'W = 0', 'ΔU = 0', 'T 不变'], answer: 0, explain: '绝热。' }
        ],
        doc: { lead: '这一章讲第一定律。', sections: [
          { id: 'law', title: '定律', html: `<p>内能、功、热量；准静态过程与 p-V 图。</p>` },
          { id: 'processes', title: '过程', html: `<p>等容、等压、等温、绝热、循环；效率。</p>` }
        ], refs: [] } },
      { title: '热力学第二定律', brief: '方向性。',
        q: [
          { stem: '第二定律的实质是：', options: ['过程的方向性（熵增）', '能量守恒', '温度不变', '压强不变'], answer: 0, explain: '方向。' },
          { stem: '卡诺循环的效率是：', options: ['1 − T₂/T₁', 'T₂/T₁', '1 − T₁/T₂', 'T₁/T₂'], answer: 0, explain: '卡诺。' },
          { stem: '熵的微观意义是：', options: ['微观状态数的对数', '热量', '温度', '体积'], answer: 0, explain: 'S=k lnΩ。' }
        ],
        doc: { lead: '这一章讲第二定律。', sections: [
          { id: 'second', title: '第二定律', html: `<p>开尔文与克劳修斯表述；可逆与不可逆。</p>` },
          { id: 'entropy', title: '熵', html: `<p>熵增原理、卡诺定理、热力学温标。</p>` }
        ], refs: [] } },
      { title: '相变与物性', brief: '物质的状态。',
        q: [
          { stem: '相变潜热指：', options: ['相变时吸收或放出的热量', '温度变化', '压强变化', '体积变化'], answer: 0, explain: '潜热。' },
          { stem: '临界点的特点是：', options: ['气液界限消失', '温度最低', '压强最大', '体积为零'], answer: 0, explain: '临界。' },
          { stem: '相图描述：', options: ['不同条件下物质的状态', '只有温度', '只有压强', '只有体积'], answer: 0, explain: '相图。' }
        ],
        doc: { lead: '这一章讲相变。', sections: [
          { id: 'phase', title: '相变', html: `<p>熔化、汽化、升华；潜热与克拉珀龙方程。</p>` },
          { id: 'diagram', title: '相图', html: `<p>三相点、临界点；真实气体与液化。</p>` }
        ], refs: [] } },
      { title: '输运过程', brief: '非平衡。',
        q: [
          { stem: '热传导的规律是：', options: ['傅里叶定律', '牛顿定律', '欧姆定律', '菲克定律'], answer: 0, explain: '傅里叶。' },
          { stem: '扩散遵循：', options: ['菲克定律', '傅里叶定律', '牛顿定律', '欧姆定律'], answer: 0, explain: '菲克。' },
          { stem: '粘滞现象的微观机制是：', options: ['分子动量输运', '热量输运', '质量输运', '电荷输运'], answer: 0, explain: '动量。' }
        ],
        doc: { lead: '这一章讲输运。', sections: [
          { id: 'transport', title: '三种输运', html: `<p>热传导、扩散、粘滞；系数与微观解释。</p>` },
          { id: 'kinetics', title: '动理论', html: `<p>平均自由程、碰撞频率；输运系数的估算。</p>` }
        ], refs: [] } },
      { title: '统计物理初步', brief: '从概率到热力学。',
        q: [
          { stem: '玻尔兹曼分布给出：', options: ['粒子在各能级的概率', '速率', '压强', '体积'], answer: 0, explain: '分布。' },
          { stem: '配分函数的作用是：', options: ['计算热力学量的核心函数', '装饰', '测温度', '测压强'], answer: 0, explain: '配分。' },
          { stem: '经典与量子统计的分野是：', options: ['粒子是否可分辨与量子态', '温度高低', '压强', '体积'], answer: 0, explain: '量子。' }
        ],
        doc: { lead: '这一章讲统计。', sections: [
          { id: 'boltzmann', title: '玻尔兹曼', html: `<p>微观状态、等概率原理；配分函数与热力学量。</p>` },
          { id: 'quantum', title: '量子统计', html: `<p>玻色-爱因斯坦与费米-狄拉克；简并与经典极限。</p>` }
        ], refs: [] } }
    ] },
    { name: '数学物理基础', chapters: [
      { title: '矢量与场', brief: '物理的语言。',
        q: [
          { stem: '梯度指向：', options: ['标量场增长最快方向', '等值线方向', '任意', '垂直方向'], answer: 0, explain: '增长。' },
          { stem: '散度为零说明：', options: ['无源汇（无散场）', '无旋', '均匀', '静止'], answer: 0, explain: '无源。' },
          { stem: '旋度描述：', options: ['场的涡旋程度', '源汇', '大小', '方向'], answer: 0, explain: '旋转。' }
        ],
        doc: { lead: '这一章讲矢量。', sections: [
          { id: 'vector', title: '矢量代数', html: `<p>点积、叉积、混合积；坐标系。</p>` },
          { id: 'operators', title: '场论算子', html: `<p>梯度、散度、旋度、拉普拉斯算子；恒等式。</p>` }
        ], refs: [] } },
      { title: '复变函数', brief: '解析的工具。',
        q: [
          { stem: '解析函数的实部与虚部：', options: ['都是调和函数', '无关', '都是常数', '一个是线性'], answer: 0, explain: '调和。' },
          { stem: '留数定理用于：', options: ['计算复积分', '求导数', '求极限', '判敛'], answer: 0, explain: '留数。' },
          { stem: '共形映射保持：', options: ['角度', '长度', '面积', '距离'], answer: 0, explain: '保角。' }
        ],
        doc: { lead: '这一章讲复变。', sections: [
          { id: 'analytic', title: '解析', html: `<p>CR 方程、调和函数；初等复函数。</p>` },
          { id: 'integral', title: '积分与级数', html: `<p>柯西定理、留数、泰勒与洛朗展开。</p>` }
        ], refs: [] } },
      { title: '常微分方程', brief: '物理的方程。',
        q: [
          { stem: '二阶常系数线性方程的解由：', options: ['特征根决定', '初值唯一', '常数项', '次数'], answer: 0, explain: '特征根。' },
          { stem: '简谐振动的方程是：', options: ['x″ + ω²x = 0', 'x′ + ωx = 0', 'x″ = 0', 'x² = ω'], answer: 0, explain: '振动。' },
          { stem: '特解与齐次解的关系是：', options: ['通解 = 齐次通解 + 特解', '相同', '互斥', '无关'], answer: 0, explain: '叠加。' }
        ],
        doc: { lead: '这一章讲 ODE。', sections: [
          { id: 'first', title: '一阶', html: `<p>可分离、线性、恰当；积分因子。</p>` },
          { id: 'second', title: '二阶', html: `<p>常系数、特征根；受迫振动与共振。</p>` }
        ], refs: [] } },
      { title: '傅里叶分析', brief: '分解成波。',
        q: [
          { stem: '傅里叶级数用于：', options: ['周期函数展开', '任意函数', '只有多项式', '只有指数'], answer: 0, explain: '周期。' },
          { stem: '傅里叶变换把时域变到：', options: ['频域', '空域', '复平面', '相空间'], answer: 0, explain: '频域。' },
          { stem: '频谱分析的意义是：', options: ['看清信号的频率成分', '求导', '积分', '解方程'], answer: 0, explain: '成分。' }
        ],
        doc: { lead: '这一章讲傅里叶。', sections: [
          { id: 'series', title: '级数', html: `<p>三角级数、系数、收敛；吉布斯现象。</p>` },
          { id: 'transform', title: '变换', html: `<p>傅里叶变换、性质、卷积；应用。</p>` }
        ], refs: [] } },
      { title: '偏微分方程', brief: '分布与波动。',
        q: [
          { stem: '波动方程的类型是：', options: ['双曲型', '抛物型', '椭圆型', '混合型'], answer: 0, explain: '双曲。' },
          { stem: '热传导方程是：', options: ['抛物型', '双曲型', '椭圆型', '混合'], answer: 0, explain: '抛物。' },
          { stem: '拉普拉斯方程是：', options: ['椭圆型', '双曲型', '抛物型', '混合'], answer: 0, explain: '椭圆。' }
        ],
        doc: { lead: '这一章讲 PDE。', sections: [
          { id: 'types', title: '三类', html: `<p>波动、热传导、拉普拉斯；定解条件。</p>` },
          { id: 'methods', title: '解法', html: `<p>分离变量、傅里叶方法、行波法；格林函数初步。</p>` }
        ], refs: [] } },
      { title: '特殊函数', brief: '常见解的家族。',
        q: [
          { stem: '勒让德多项式出现在：', options: ['球坐标下的拉普拉斯方程', '柱坐标', '直角坐标', '一维'], answer: 0, explain: '球。' },
          { stem: '贝塞尔函数出现在：', options: ['柱坐标问题', '球坐标', '直角', '一维'], answer: 0, explain: '柱。' },
          { stem: '特殊函数的正交性用于：', options: ['级数展开求系数', '求导', '积分', '判敛'], answer: 0, explain: '正交。' }
        ],
        doc: { lead: '这一章讲特殊函数。', sections: [
          { id: 'legendre', title: '勒让德', html: `<p>球谐函数、正交性；边值问题。</p>` },
          { id: 'bessel', title: '贝塞尔', html: `<p>柱函数、递推关系；圆膜振动。</p>` }
        ], refs: [] } },
      { title: '数值与计算', brief: '算出来。',
        q: [
          { stem: '数值解 PDE 的常用方法是：', options: ['有限差分与有限元', '解析解', '级数唯一', '查表'], answer: 0, explain: '数值。' },
          { stem: '稳定性与收敛性是：', options: ['数值格式的重要性质', '解析解性质', '无意义', '只与精度有关'], answer: 0, explain: '性质。' },
          { stem: '物理建模中量纲分析的作用是：', options: ['简化问题、检验结果', '求精确解', '替代实验', '无作用'], answer: 0, explain: '量纲。' }
        ],
        doc: { lead: '这一章讲计算。', sections: [
          { id: 'numerical', title: '数值', html: `<p>差分、有限元；稳定性与收敛性。</p>` },
          { id: 'dimension', title: '量纲', html: `<p>量纲分析、相似性、无量纲化；模型简化。</p>` }
        ], refs: [] } }
    ] },
    { name: '电磁学', chapters: [
      { title: '静电场', brief: '电荷的作用。',
        q: [
          { stem: '库仑定律表明静电力与距离：', options: ['平方成反比', '成正比', '成反比', '无关'], answer: 0, explain: '平方反比。' },
          { stem: '电场线从：', options: ['正电荷指向负电荷', '负到正', '无方向', '任意'], answer: 0, explain: '正到负。' },
          { stem: '高斯定理说明：', options: ['电通量由包围电荷决定', '电场为零', '无源', '无旋'], answer: 0, explain: '高斯。' }
        ],
        doc: { lead: '这一章讲静电场。', sections: [
          { id: 'coulomb', title: '库仑定律', html: `<p>点电荷、叠加原理；电场强度。</p>` },
          { id: 'gauss', title: '高斯定理', html: `<p>电通量、对称性应用；电势与电势能。</p>` }
        ], refs: [] } },
      { title: '导体与电介质', brief: '材料中的电场。',
        q: [
          { stem: '静电平衡时导体内部电场：', options: ['为零', '最大', '均匀', '不确定'], answer: 0, explain: '为零。' },
          { stem: '电介质的极化会：', options: ['削弱介质中的电场', '增强', '无影响', '反向唯一'], answer: 0, explain: '削弱。' },
          { stem: '电容取决于：', options: ['几何形状与介质', '电荷量', '电压', '电流'], answer: 0, explain: '几何。' }
        ],
        doc: { lead: '这一章讲介质。', sections: [
          { id: 'conductor', title: '导体', html: `<p>静电平衡、静电屏蔽；尖端放电。</p>` },
          { id: 'dielectric', title: '电介质', html: `<p>极化、极化强度、电位移矢量；电容与储能。</p>` }
        ], refs: [] } },
      { title: '恒定电流与磁场', brief: '电流生磁。',
        q: [
          { stem: '毕奥-萨伐尔定律描述：', options: ['电流元产生的磁场', '电场', '电势', '电阻'], answer: 0, explain: '磁场。' },
          { stem: '安培环路定理说明：', options: ['磁场环流由电流决定', '磁场为零', '无源', '静电场'], answer: 0, explain: '安培。' },
          { stem: '磁场对运动电荷的作用力是：', options: ['洛伦兹力', '库仑力', '安培力唯一', '重力'], answer: 0, explain: '洛伦兹。' }
        ],
        doc: { lead: '这一章讲磁场。', sections: [
          { id: 'biot', title: '毕奥-萨伐尔', html: `<p>电流元磁场、叠加；长直导线、圆环、螺线管。</p>` },
          { id: 'ampere', title: '安培定理', html: `<p>环路定理、磁通连续性；磁场力与磁矩。</p>` }
        ], refs: [] } },
      { title: '电磁感应', brief: '变化的磁生电。',
        q: [
          { stem: '法拉第电磁感应定律说明：', options: ['感应电动势与磁通变化率成正比', '与磁通成正比', '与电流成正比', '无关'], answer: 0, explain: '法拉第。' },
          { stem: '楞次定律的作用是：', options: ['判断感应电流方向', '计算大小', '确定电阻', '判断磁场'], answer: 0, explain: '方向。' },
          { stem: '自感与互感：', options: ['都源于磁通变化', '只与电阻有关', '无关系', '只与电容有关'], answer: 0, explain: '磁通。' }
        ],
        doc: { lead: '这一章讲感应。', sections: [
          { id: 'faraday', title: '法拉第', html: `<p>磁通量、感应电动势、楞次定律。</p>` },
          { id: 'inductance', title: '自感互感', html: `<p>自感系数、磁场能量；变压器原理。</p>` }
        ], refs: [] } },
      { title: '麦克斯韦方程组', brief: '统一的电磁。',
        q: [
          { stem: '位移电流的作用是：', options: ['使安培定理与连续性方程相容', '增加电阻', '减小磁场', '无关'], answer: 0, explain: '位移电流。' },
          { stem: '麦克斯韦方程组包含：', options: ['高斯、磁高斯、法拉第、安培-麦克斯韦', '只有两个', '只有三个', '只有法拉第'], answer: 0, explain: '四个。' },
          { stem: '电磁波的速度由：', options: ['介质的电容率与磁导率决定', '频率', '振幅', '波长'], answer: 0, explain: '介质。' }
        ],
        doc: { lead: '这一章讲方程组。', sections: [
          { id: 'maxwell', title: '四个方程', html: `<p>积分与微分形式；物理意义。</p>` },
          { id: 'wave', title: '电磁波', html: `<p>波动方程、光速；能流密度（坡印亭矢量）。</p>` }
        ], refs: [] } },
      { title: '电路与交流电', brief: '应用。',
        q: [
          { stem: '交流电路中阻抗由：', options: ['电阻、感抗、容抗共同决定', '只有电阻', '只有电感', '只有电容'], answer: 0, explain: '阻抗。' },
          { stem: '谐振时：', options: ['阻抗最小、电流最大（串联）', '阻抗最大', '电流为零', '无影响'], answer: 0, explain: '谐振。' },
          { stem: '基尔霍夫定律基于：', options: ['电荷守恒与能量守恒', '动量守恒', '角动量', '质量守恒'], answer: 0, explain: '两个守恒。' }
        ],
        doc: { lead: '这一章讲电路。', sections: [
          { id: 'dc', title: '直流', html: `<p>欧姆定律、基尔霍夫定律；复杂电路。</p>` },
          { id: 'ac', title: '交流', html: `<p>相量法、阻抗、功率；谐振与滤波。</p>` }
        ], refs: [] } },
      { title: '电磁学实验与建模', brief: '动手。',
        q: [
          { stem: '测量电阻的常用方法是：', options: ['伏安法与电桥法', '只用万用表', '只用示波器', '只能计算'], answer: 0, explain: '伏安。' },
          { stem: '示波器的作用是：', options: ['观察电压随时间变化', '测电阻', '测质量', '测温度'], answer: 0, explain: '波形。' },
          { stem: '误差分析的意义是：', options: ['判断结果可靠性', '装饰', '凑数', '无意义'], answer: 0, explain: '误差。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'experiment', title: '实验', html: `<p>伏安法、电桥、示波器；误差与不确定度。</p>` },
          { id: 'model', title: '建模', html: `<p>等效电路、场与路的关系；近似条件。</p>` }
        ], refs: [] } }
    ] },
    { name: '光学', chapters: [
      { title: '几何光学', brief: '光线模型。',
        q: [
          { stem: '折射定律是：', options: ['n₁sinθ₁ = n₂sinθ₂', 'n₁θ₁ = n₂θ₂', 'sinθ₁ = n₂', 'n₁ = n₂'], answer: 0, explain: '斯涅尔。' },
          { stem: '全反射发生的条件是：', options: ['从光密到光疏且入射角大于临界角', '任意', '从疏到密', '垂直入射'], answer: 0, explain: '全反射。' },
          { stem: '薄透镜成像公式是：', options: ['1/f = 1/u + 1/v', 'f = u + v', 'f = uv', '1/f = u + v'], answer: 0, explain: '成像。' }
        ],
        doc: { lead: '这一章讲几何。', sections: [
          { id: 'refraction', title: '折射', html: `<p>反射、折射、全反射；费马原理。</p>` },
          { id: 'lens', title: '透镜', html: `<p>成像公式、放大率；光学仪器。</p>` }
        ], refs: [] } },
      { title: '光的干涉', brief: '波的性质。',
        q: [
          { stem: '杨氏双缝干涉说明光：', options: ['具有波动性', '是粒子', '是直线', '无干涉'], answer: 0, explain: '波动。' },
          { stem: '干涉条件包括：', options: ['相干、频率相同、相位差恒定', '只有频率', '只有相干', '无要求'], answer: 0, explain: '相干。' },
          { stem: '薄膜干涉的应用是：', options: ['增透膜与检测', '测质量', '测电阻', '测温度'], answer: 0, explain: '薄膜。' }
        ],
        doc: { lead: '这一章讲干涉。', sections: [
          { id: 'coherence', title: '相干', html: `<p>相干条件、光程差、相位差。</p>` },
          { id: 'interference', title: '干涉', html: `<p>双缝、薄膜、牛顿环；等厚与等倾干涉。</p>` }
        ], refs: [] } },
      { title: '衍射', brief: '绕过障碍。',
        q: [
          { stem: '单缝衍射的中央亮纹宽度与缝宽：', options: ['成反比', '成正比', '无关', '平方'], answer: 0, explain: '反比。' },
          { stem: '衍射光栅的作用是：', options: ['分光与测量波长', '聚光', '滤波唯一', '反射'], answer: 0, explain: '光栅。' },
          { stem: '圆孔衍射决定：', options: ['光学仪器的分辨本领', '亮度', '颜色', '焦距'], answer: 0, explain: '分辨。' }
        ],
        doc: { lead: '这一章讲衍射。', sections: [
          { id: 'single', title: '单缝', html: `<p>菲涅耳半波带、强度分布。</p>` },
          { id: 'grating', title: '光栅与分辨', html: `<p>光栅方程、缺级；瑞利判据。</p>` }
        ], refs: [] } },
      { title: '偏振', brief: '光的横波性。',
        q: [
          { stem: '偏振说明光是：', options: ['横波', '纵波', '粒子', '无偏振'], answer: 0, explain: '横波。' },
          { stem: '马吕斯定律是：', options: ['I = I₀cos²θ', 'I = I₀cosθ', 'I = I₀sinθ', 'I = I₀'], answer: 0, explain: '马吕斯。' },
          { stem: '布儒斯特角的特点是：', options: ['反射光完全偏振', '透射光完全偏振', '无偏振', '全反射'], answer: 0, explain: '布儒斯特。' }
        ],
        doc: { lead: '这一章讲偏振。', sections: [
          { id: 'polarization', title: '偏振', html: `<p>线偏振、圆偏振、椭圆偏振；起偏与检偏。</p>` },
          { id: 'law', title: '定律', html: `<p>马吕斯定律、布儒斯特定律；旋光与应力双折射。</p>` }
        ], refs: [] } },
      { title: '光的量子性', brief: '波粒二象。',
        q: [
          { stem: '光电效应的规律说明：', options: ['光具有粒子性', '光是波唯一', '无效应', '光速变化'], answer: 0, explain: '光子。' },
          { stem: '康普顿散射说明：', options: ['光子有动量', '光子无质量但有动量', '光速可变', '无散射'], answer: 0, explain: '动量。' },
          { stem: '德布罗意关系是：', options: ['λ = h/p', 'λ = hp', 'λ = p/h', 'λ = h/p²'], answer: 0, explain: '物质波。' }
        ],
        doc: { lead: '这一章讲量子。', sections: [
          { id: 'photoelectric', title: '光电效应', html: `<p>爱因斯坦方程、截止频率；光子。</p>` },
          { id: 'debroglie', title: '物质波', html: `<p>德布罗意关系、电子衍射；波粒二象性。</p>` }
        ], refs: [] } },
      { title: '激光与现代光学', brief: '应用。',
        q: [
          { stem: '激光的三个特点是：', options: ['单色、相干、方向性好', '多色、发散', '高强度唯一', '不可见'], answer: 0, explain: '三性。' },
          { stem: '激光产生的关键是：', options: ['粒子数反转与谐振腔', '高压', '高温', '磁场唯一'], answer: 0, explain: '反转。' },
          { stem: '光纤通信利用：', options: ['全反射传输光信号', '折射', '衍射', '偏振'], answer: 0, explain: '全反射。' }
        ],
        doc: { lead: '这一章讲现代。', sections: [
          { id: 'laser', title: '激光', html: `<p>受激辐射、粒子数反转、谐振腔；特性与应用。</p>` },
          { id: 'fiber', title: '光纤', html: `<p>全反射、模式、损耗；光通信与传感。</p>` }
        ], refs: [] } },
      { title: '光学实验与误差', brief: '动手测量。',
        q: [
          { stem: '测量透镜焦距的常用方法是：', options: ['物像公式法与自准直法', '只用尺', '只用眼睛', '只能计算'], answer: 0, explain: '方法。' },
          { stem: '分光计的作用是：', options: ['测量角度与光谱', '测质量', '测电阻', '测温度'], answer: 0, explain: '分光。' },
          { stem: '光学实验的关键是：', options: ['共轴调节与消除视差', '快', '省事', '不用调节'], answer: 0, explain: '共轴。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'experiment', title: '实验', html: `<p>焦距、折射率、光栅常数；分光计与读数显微镜。</p>` },
          { id: 'error', title: '误差', html: `<p>视差、共轴、环境光；不确定度评定。</p>` }
        ], refs: [] } }
    ] },
    { name: '数学物理方法', chapters: [
      { title: '复变与积分变换', brief: '工具。',
        q: [
          { stem: '留数定理可用于：', options: ['计算实积分', '求导数', '判敛', '解方程唯一'], answer: 0, explain: '实积分。' },
          { stem: '拉普拉斯变换用于：', options: ['解常微分方程与电路问题', '求积分', '判敛', '几何'], answer: 0, explain: '变换。' },
          { stem: '傅里叶变换与拉氏变换的区别是：', options: ['积分区间与适用对象', '无区别', '前者只对周期', '后者只对离散'], answer: 0, explain: '区间。' }
        ],
        doc: { lead: '这一章讲变换。', sections: [
          { id: 'complex', title: '复变', html: `<p>解析、留数；实积分计算。</p>` },
          { id: 'transform', title: '变换', html: `<p>傅里叶、拉普拉斯、Z 变换；性质与逆变换。</p>` }
        ], refs: [] } },
      { title: '特殊函数与正交展开', brief: '函数家族。',
        q: [
          { stem: '正交函数系可用于：', options: ['广义傅里叶展开', '求积分', '判敛', '几何'], answer: 0, explain: '展开。' },
          { stem: '勒让德多项式满足：', options: ['勒让德方程', '贝塞尔方程', '热传导', '波动'], answer: 0, explain: '方程。' },
          { stem: 'Γ 函数与阶乘的关系是：', options: ['Γ(n+1) = n!', 'Γ(n) = n!', 'Γ(n) = n', '无关'], answer: 0, explain: '推广。' }
        ],
        doc: { lead: '这一章讲函数。', sections: [
          { id: 'orthogonal', title: '正交系', html: `<p>正交性、完备性；广义傅里叶级数。</p>` },
          { id: 'special', title: '特殊函数', html: `<p>勒让德、贝塞尔、厄米、拉盖尔；Γ 与 B 函数。</p>` }
        ], refs: [] } },
      { title: '偏微分方程', brief: '三类方程。',
        q: [
          { stem: '分离变量法的前提是：', options: ['方程与边界条件可分离', '任意', '只有一维', '线性唯一'], answer: 0, explain: '分离。' },
          { stem: '本征值问题的解是：', options: ['本征函数系', '常数', '多项式', '指数'], answer: 0, explain: '本征。' },
          { stem: '定解条件包括：', options: ['初始条件与边界条件', '只有初始', '只有边界', '无'], answer: 0, explain: '两类。' }
        ],
        doc: { lead: '这一章讲 PDE。', sections: [
          { id: 'separation', title: '分离变量', html: `<p>本征值问题、级数解；矩形域与圆域。</p>` },
          { id: 'conditions', title: '定解', html: `<p>初始、边界（Dirichlet/Neumann/Robin）；适定性。</p>` }
        ], refs: [] } },
      { title: '格林函数', brief: '点源响应。',
        q: [
          { stem: '格林函数表示：', options: ['点源产生的场', '任意源', '边界', '初值'], answer: 0, explain: '点源。' },
          { stem: '格林函数法与叠加原理的关系是：', options: ['用点源解叠加出一般解', '无关', '互斥', '相同'], answer: 0, explain: '叠加。' },
          { stem: '镜像法适用于：', options: ['特定对称边界的格林函数', '任意边界', '只有一维', '只有非线性'], answer: 0, explain: '镜像。' }
        ],
        doc: { lead: '这一章讲格林。', sections: [
          { id: 'green', title: '格林函数', html: `<p>定义、对称性；泊松方程的解。</p>` },
          { id: 'methods', title: '方法', html: `<p>镜像法、本征展开；电像法与波的传播。</p>` }
        ], refs: [] } },
      { title: '变分法初步', brief: '极值原理。',
        q: [
          { stem: '变分法研究：', options: ['泛函的极值', '函数的极值', '积分', '微分'], answer: 0, explain: '泛函。' },
          { stem: '欧拉-拉格朗日方程给出：', options: ['极值曲线满足的方程', '边界条件', '初值', '数值解'], answer: 0, explain: 'EL 方程。' },
          { stem: '最小作用量原理是：', options: ['物理规律的变分表述', '能量守恒', '动量守恒', '熵增'], answer: 0, explain: '作用量。' }
        ],
        doc: { lead: '这一章讲变分。', sections: [
          { id: 'functional', title: '泛函', html: `<p>变分、泛函极值；欧拉-拉格朗日方程。</p>` },
          { id: 'physics', title: '物理', html: `<p>最小作用量原理、哈密顿原理；近似方法（里兹法）。</p>` }
        ], refs: [] } },
      { title: '数值方法', brief: '算。',
        q: [
          { stem: '有限差分法的核心是：', options: ['用差商近似导数', '用积分', '用级数', '查表'], answer: 0, explain: '差分。' },
          { stem: '有限元法适用于：', options: ['复杂几何的边值问题', '只有一维', '只有线性', '只有稳态'], answer: 0, explain: '有限元。' },
          { stem: '数值稳定性要求：', options: ['误差不放大', '精度高唯一', '速度快', '代码短'], answer: 0, explain: '稳定。' }
        ],
        doc: { lead: '这一章讲数值。', sections: [
          { id: 'fd', title: '差分', html: `<p>显式与隐式格式、稳定性（CFL 条件）。</p>` },
          { id: 'fem', title: '有限元', html: `<p>变分形式、网格、基函数；误差估计。</p>` }
        ], refs: [] } },
      { title: '建模与量纲', brief: '从物理到方程。',
        q: [
          { stem: '量纲分析的作用是：', options: ['减少变量、检验结果', '求精确解', '替代实验', '无作用'], answer: 0, explain: '简化。' },
          { stem: '相似性原理用于：', options: ['模型实验的推广', '求导', '积分', '判敛'], answer: 0, explain: '相似。' },
          { stem: '无量纲化的好处是：', options: ['突出关键参数、便于比较', '增加计算', '装饰', '无好处'], answer: 0, explain: '无量纲。' }
        ],
        doc: { lead: '这一章讲建模。', sections: [
          { id: 'dimension', title: '量纲', html: `<p>量纲齐次、Π 定理；无量纲化。</p>` },
          { id: 'model', title: '建模', html: `<p>守恒律、本构关系、边界条件；模型检验。</p>` }
        ], refs: [] } }
    ] },
    { name: '原子物理学', chapters: [
      { title: '早期原子模型', brief: '从汤姆孙到玻尔。',
        q: [
          { stem: '卢瑟福散射实验说明：', options: ['原子核很小且集中正电荷', '原子均匀', '电子在中心', '无核'], answer: 0, explain: '核式。' },
          { stem: '玻尔模型的假设包括：', options: ['定态与量子化条件', '只有定态', '只有量子化', '无假设'], answer: 0, explain: '两假设。' },
          { stem: '氢原子光谱的规律是：', options: ['巴尔末系等线系', '连续谱', '无规律', '只有一条'], answer: 0, explain: '线系。' }
        ],
        doc: { lead: '这一章讲早期。', sections: [
          { id: 'models', title: '模型', html: `<p>汤姆孙、卢瑟福；α 散射。</p>` },
          { id: 'bohr', title: '玻尔', html: `<p>定态、频率条件、角动量量子化；氢光谱。</p>` }
        ], refs: [] } },
      { title: '量子力学基础', brief: '新力学。',
        q: [
          { stem: '波函数的意义是：', options: ['概率幅', '轨迹', '能量', '动量'], answer: 0, explain: '概率。' },
          { stem: '不确定性关系是：', options: ['ΔxΔp ≥ ħ/2', 'ΔxΔp = 0', 'Δx ≥ Δp', 'ΔEΔt = 0'], answer: 0, explain: '海森堡。' },
          { stem: '薛定谔方程的作用是：', options: ['描述波函数演化', '求能量唯一', '求轨迹', '求力'], answer: 0, explain: '演化。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'wavefunction', title: '波函数', html: `<p>概率解释、归一化；叠加原理。</p>` },
          { id: 'schrodinger', title: '方程', html: `<p>定态与含时方程；一维势阱、势垒。</p>` }
        ], refs: [] } },
      { title: '单电子原子', brief: '氢原子精确解。',
        q: [
          { stem: '氢原子量子数包括：', options: ['n、l、m、m_s', '只有 n', '只有 n、l', '只有 m'], answer: 0, explain: '四个。' },
          { stem: '主量子数决定：', options: ['能量（氢原子）', '角动量', '磁矩', '自旋'], answer: 0, explain: '能量。' },
          { stem: '电子自旋的量子数是：', options: ['±1/2', '0', '±1', '任意'], answer: 0, explain: '自旋。' }
        ],
        doc: { lead: '这一章讲氢原子。', sections: [
          { id: 'quantum', title: '量子数', html: `<p>n、l、m、m_s 的物理意义；简并与退化。</p>` },
          { id: 'spectrum', title: '光谱', html: `<p>能级、跃迁、选择定则；精细结构。</p>` }
        ], refs: [] } },
      { title: '多电子原子', brief: '电子间的相互作用。',
        q: [
          { stem: '泡利不相容原理说明：', options: ['同一原子轨道最多两个自旋相反的电子', '任意填充', '只有一个电子', '无限制'], answer: 0, explain: '泡利。' },
          { stem: '电子壳层填充顺序由：', options: ['能量最低原理与洪特规则', '随机', '质量', '电荷'], answer: 0, explain: '规则。' },
          { stem: '元素周期律的量子解释是：', options: ['电子壳层结构', '质量递增', '电荷递增', '随机'], answer: 0, explain: '壳层。' }
        ],
        doc: { lead: '这一章讲多电子。', sections: [
          { id: 'pauli', title: '泡利原理', html: `<p>电子排布、能级顺序；洪特规则。</p>` },
          { id: 'periodic', title: '周期律', html: `<p>壳层与周期；原子半径、电离能的变化规律。</p>` }
        ], refs: [] } },
      { title: '分子与光谱', brief: '结合与跃迁。',
        q: [
          { stem: '共价键的形成源于：', options: ['电子云重叠与能量降低', '电荷吸引唯一', '磁性', '重力'], answer: 0, explain: '成键。' },
          { stem: '分子光谱的三种类型是：', options: ['电子、振动、转动', '只有电子', '只有振动', '只有转动'], answer: 0, explain: '三类。' },
          { stem: '红外光谱主要反映：', options: ['振动能级跃迁', '电子跃迁', '转动', '核跃迁'], answer: 0, explain: '振动。' }
        ],
        doc: { lead: '这一章讲分子。', sections: [
          { id: 'bond', title: '成键', html: `<p>离子键、共价键、金属键；分子轨道初步。</p>` },
          { id: 'spectrum', title: '光谱', html: `<p>转动、振动、电子光谱；红外与拉曼。</p>` }
        ], refs: [] } },
      { title: '原子核与粒子', brief: '更深的层次。',
        q: [
          { stem: '原子核由什么组成？', options: ['质子与中子', '电子', '光子', '夸克唯一'], answer: 0, explain: '核子。' },
          { stem: '放射性衰变的三种类型是：', options: ['α、β、γ', '只有 α', '只有 β', '只有 γ'], answer: 0, explain: '三种。' },
          { stem: '结合能说明：', options: ['核子结合时质量亏损释放能量', '质量增加', '无能量', '核稳定唯一'], answer: 0, explain: '结合能。' }
        ],
        doc: { lead: '这一章讲核。', sections: [
          { id: 'nucleus', title: '核', html: `<p>核子、结合能、核力；核模型。</p>` },
          { id: 'decay', title: '衰变', html: `<p>α、β、γ 衰变；半衰期；裂变与聚变。</p>` }
        ], refs: [] } },
      { title: '实验与近代物理方法', brief: '怎么观测。',
        q: [
          { stem: '光谱实验的作用是：', options: ['研究能级结构', '测质量', '测电阻', '测温度'], answer: 0, explain: '能级。' },
          { stem: '弗兰克-赫兹实验验证了：', options: ['能级量子化', '光电效应', '相对论', '波动性'], answer: 0, explain: '能级。' },
          { stem: '近代物理实验的特点是：', options: ['精密测量与统计处理', '简单', '不用仪器', '只看现象'], answer: 0, explain: '精密。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'spectra', title: '光谱', html: `<p>光栅光谱、能级测定；塞曼效应。</p>` },
          { id: 'methods', title: '方法', html: `<p>弗兰克-赫兹、光电效应；数据处理与误差。</p>` }
        ], refs: [] } }
    ] },
    { name: '量子力学', chapters: [
      { title: '波函数与态', brief: '量子态。',
        q: [
          { stem: '波函数的归一化条件是：', options: ['全空间概率为 1', '任意', '为零', '无限'], answer: 0, explain: '归一。' },
          { stem: '叠加原理说明：', options: ['态的线性组合仍是态', '只有一个态', '态不可叠加', '概率相加'], answer: 0, explain: '叠加。' },
          { stem: '力学量的期望值是：', options: ['⟨ψ|A|ψ⟩', 'ψA', '|ψ|²', 'Aψ'], answer: 0, explain: '期望。' }
        ],
        doc: { lead: '这一章讲态。', sections: [
          { id: 'wavefunction', title: '波函数', html: `<p>概率解释、归一化、希尔伯特空间。</p>` },
          { id: 'observables', title: '力学量', html: `<p>算符、本征值、期望值；不确定性。</p>` }
        ], refs: [] } },
      { title: '一维问题', brief: '典型模型。',
        q: [
          { stem: '无限深势阱的能量是：', options: ['量子化的', '连续的', '为零', '无限'], answer: 0, explain: '量子化。' },
          { stem: '势垒贯穿说明：', options: ['量子隧穿', '经典反射', '无透射', '能量守恒破坏'], answer: 0, explain: '隧穿。' },
          { stem: '谐振子的能级是：', options: ['等间距的', '连续的', '递减', '随机'], answer: 0, explain: '等间距。' }
        ],
        doc: { lead: '这一章讲一维。', sections: [
          { id: 'well', title: '势阱', html: `<p>无限深方势阱、有限深势阱；能级与波函数。</p>` },
          { id: 'oscillator', title: '势垒与振子', html: `<p>隧穿、谐振子、相干态初步。</p>` }
        ], refs: [] } },
      { title: '角动量', brief: '旋转的量子。',
        q: [
          { stem: '角动量量子数为 l 时，磁量子数取值：', options: ['−l 到 l 共 2l+1 个', '只有 l', '0 到 l', '任意'], answer: 0, explain: '2l+1。' },
          { stem: '自旋 1/2 的粒子是：', options: ['费米子', '玻色子', '无自旋', '光子'], answer: 0, explain: '费米子。' },
          { stem: '角动量耦合的规则是：', options: ['三角关系 |l₁−l₂| ≤ L ≤ l₁+l₂', '相加唯一', '任意', '只能相等'], answer: 0, explain: '耦合。' }
        ],
        doc: { lead: '这一章讲角动量。', sections: [
          { id: 'orbital', title: '轨道', html: `<p>本征值、球谐函数；空间量子化。</p>` },
          { id: 'spin', title: '自旋', html: `<p>自旋算符、泡利矩阵；角动量耦合与 CG 系数。</p>` }
        ], refs: [] } },
      { title: '微扰理论', brief: '近似方法。',
        q: [
          { stem: '定态微扰理论适用于：', options: ['哈密顿量可分解为已知部分加小扰动', '任意', '只有简并', '只有含时'], answer: 0, explain: '小扰动。' },
          { stem: '简并微扰需要：', options: ['在简并子空间对角化', '直接套公式', '忽略简并', '用变分'], answer: 0, explain: '简并。' },
          { stem: '变分法的原理是：', options: ['用试探波函数求能量上界', '精确解', '无误差', '只适用基态唯一'], answer: 0, explain: '变分。' }
        ],
        doc: { lead: '这一章讲近似。', sections: [
          { id: 'perturbation', title: '微扰', html: `<p>一阶与二阶修正；简并与非简并。</p>` },
          { id: 'variational', title: '变分', html: `<p>变分原理、里兹法；氦原子基态能量估算。</p>` }
        ], refs: [] } },
      { title: '全同粒子', brief: '不可分辨。',
        q: [
          { stem: '全同粒子的波函数必须：', options: ['对称或反对称', '任意', '为零', '常数'], answer: 0, explain: '对称性。' },
          { stem: '费米子的波函数是：', options: ['反对称', '对称', '无要求', '实函数'], answer: 0, explain: '反对称。' },
          { stem: '交换力来源于：', options: ['波函数的交换对称性', '电磁力', '引力', '强相互作用'], answer: 0, explain: '交换。' }
        ],
        doc: { lead: '这一章讲全同。', sections: [
          { id: 'symmetry', title: '对称性', html: `<p>玻色子与费米子；斯莱特行列式。</p>` },
          { id: 'consequence', title: '后果', html: `<p>泡利原理、交换能；固体与统计的应用。</p>` }
        ], refs: [] } },
      { title: '含时与散射', brief: '跃迁与碰撞。',
        q: [
          { stem: '含时微扰给出：', options: ['跃迁概率', '能量本征值', '波函数', '角动量'], answer: 0, explain: '跃迁。' },
          { stem: '费米黄金规则描述：', options: ['跃迁速率', '能量', '动量', '自旋'], answer: 0, explain: '速率。' },
          { stem: '散射截面衡量：', options: ['散射概率与作用强度', '能量', '速度', '自旋'], answer: 0, explain: '截面。' }
        ],
        doc: { lead: '这一章讲跃迁。', sections: [
          { id: 'timedependent', title: '含时', html: `<p>跃迁概率、费米黄金规则；选择定则。</p>` },
          { id: 'scattering', title: '散射', html: `<p>截面、玻恩近似；分波法初步。</p>` }
        ], refs: [] } },
      { title: '量子力学解释', brief: '意味着什么。',
        q: [
          { stem: '哥本哈根解释强调：', options: ['波函数的概率解释与测量', '隐变量', '多世界', '决定论'], answer: 0, explain: '哥本哈根。' },
          { stem: 'EPR 佯谬讨论：', options: ['量子力学的完备性与定域性', '能量守恒', '角动量', '自旋'], answer: 0, explain: 'EPR。' },
          { stem: '贝尔不等式实验支持：', options: ['量子非定域性', '定域隐变量', '经典力学', '无纠缠'], answer: 0, explain: '纠缠。' }
        ],
        doc: { lead: '这一章讲解释。', sections: [
          { id: 'interpretations', title: '解释', html: `<p>哥本哈根、多世界、隐变量、退相干。</p>` },
          { id: 'foundations', title: '基础', html: `<p>EPR、贝尔不等式、量子纠缠；测量问题。</p>` }
        ], refs: [] } }
    ] },
    { name: '统计物理', chapters: [
      { title: '统计基础', brief: '从微观到宏观。',
        q: [
          { stem: '等概率原理说明：', options: ['孤立系统各微观状态等概率', '各能量等概率', '各粒子等概率', '无规律'], answer: 0, explain: '等概率。' },
          { stem: '微观状态数 Ω 与熵的关系是：', options: ['S = k lnΩ', 'S = kΩ', 'S = Ω/k', 'S = lnΩ'], answer: 0, explain: '玻尔兹曼。' },
          { stem: '统计系综的类型包括：', options: ['微正则、正则、巨正则', '只有微正则', '只有正则', '只有巨正则'], answer: 0, explain: '三类。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'microstate', title: '微观状态', html: `<p>相空间、等概率原理；熵的统计意义。</p>` },
          { id: 'ensembles', title: '系综', html: `<p>微正则、正则、巨正则；配分函数。</p>` }
        ], refs: [] } },
      { title: '经典统计', brief: '玻尔兹曼。',
        q: [
          { stem: '玻尔兹曼分布给出：', options: ['粒子按能量的分布', '速率', '位置', '动量'], answer: 0, explain: '分布。' },
          { stem: '配分函数可用于求：', options: ['内能、熵、自由能等', '只有内能', '只有熵', '只有压强'], answer: 0, explain: '热力学量。' },
          { stem: '能量均分定理适用于：', options: ['经典极限下的二次型自由度', '所有系统', '只有量子', '只有固体'], answer: 0, explain: '经典。' }
        ],
        doc: { lead: '这一章讲经典。', sections: [
          { id: 'boltzmann', title: '玻尔兹曼分布', html: `<p>配分函数、热力学量；麦克斯韦分布。</p>` },
          { id: 'equipartition', title: '均分', html: `<p>自由度与比热；经典理论的失效。</p>` }
        ], refs: [] } },
      { title: '量子统计', brief: '不可分辨。',
        q: [
          { stem: '玻色-爱因斯坦统计适用于：', options: ['自旋为整数的粒子', '自旋半整数', '经典粒子', '所有'], answer: 0, explain: '玻色。' },
          { stem: '费米-狄拉克统计适用于：', options: ['自旋半整数粒子', '整数自旋', '经典', '所有'], answer: 0, explain: '费米。' },
          { stem: '经典极限的条件是：', options: ['粒子数远小于量子态数', '温度极低', '密度极大', '无相互作用'], answer: 0, explain: '稀薄。' }
        ],
        doc: { lead: '这一章讲量子。', sections: [
          { id: 'be', title: '玻色', html: `<p>玻色-爱因斯坦凝聚、光子气体；普朗克公式。</p>` },
          { id: 'fd', title: '费米', html: `<p>费米面、金属电子气；热容与简并压。</p>` }
        ], refs: [] } },
      { title: '相变与临界现象', brief: '突变的秩序。',
        q: [
          { stem: '一级相变的特点是：', options: ['有潜热与体积突变', '无潜热', '连续', '无变化'], answer: 0, explain: '一级。' },
          { stem: '临界指数描述：', options: ['物理量在临界点附近的幂律行为', '温度', '压强', '体积'], answer: 0, explain: '幂律。' },
          { stem: '伊辛模型用于研究：', options: ['铁磁相变', '液体', '气体唯一', '核反应'], answer: 0, explain: '伊辛。' }
        ],
        doc: { lead: '这一章讲相变。', sections: [
          { id: 'classification', title: '分类', html: `<p>一级与连续相变；序参量。</p>` },
          { id: 'critical', title: '临界', html: `<p>临界指数、标度律、普适性；平均场与重整化初步。</p>` }
        ], refs: [] } },
      { title: '非平衡统计', brief: '输运与涨落。',
        q: [
          { stem: '玻尔兹曼方程描述：', options: ['分布函数随时间演化', '平衡态', '相变', '量子'], answer: 0, explain: '演化。' },
          { stem: '涨落-耗散定理联系：', options: ['涨落与耗散系数', '温度与压强', '能量与动量', '无联系'], answer: 0, explain: '定理。' },
          { stem: '布朗运动的研究意义是：', options: ['验证分子运动与统计规律', '装饰', '无意义', '只数学'], answer: 0, explain: '布朗。' }
        ],
        doc: { lead: '这一章讲非平衡。', sections: [
          { id: 'boltzmann', title: '玻尔兹曼方程', html: `<p>碰撞项、H 定理；输运系数。</p>` },
          { id: 'fluctuation', title: '涨落', html: `<p>布朗运动、涨落-耗散；朗之万方程。</p>` }
        ], refs: [] } },
      { title: '固体与低温', brief: '凝聚态初步。',
        q: [
          { stem: '德拜模型解释：', options: ['低温比热', '高温比热', '导电', '磁性'], answer: 0, explain: '德拜。' },
          { stem: '能带理论说明：', options: ['导体、半导体与绝缘体的区别', '相变', '核', '光学'], answer: 0, explain: '能带。' },
          { stem: '超导的基本特征是：', options: ['零电阻与迈斯纳效应', '高电阻', '无磁性', '绝缘'], answer: 0, explain: '超导。' }
        ],
        doc: { lead: '这一章讲固体。', sections: [
          { id: 'phonon', title: '声子', html: `<p>晶格振动、德拜与爱因斯坦模型；比热。</p>` },
          { id: 'band', title: '能带与超导', html: `<p>布洛赫定理、能带；超导与 BCS 初步。</p>` }
        ], refs: [] } },
      { title: '应用与前沿', brief: '统计的用处。',
        q: [
          { stem: '统计物理在生物中的应用是：', options: ['蛋白质折叠、群体动力学', '无应用', '只有物理', '只数学'], answer: 0, explain: '交叉。' },
          { stem: '计算统计物理的常用方法是：', options: ['蒙特卡洛模拟', '解析解', '查表', '实验唯一'], answer: 0, explain: 'MC。' },
          { stem: '复杂系统的特征包括：', options: ['涌现、自组织、临界性', '简单', '线性', '可预测'], answer: 0, explain: '复杂。' }
        ],
        doc: { lead: '这一章讲前沿。', sections: [
          { id: 'simulation', title: '模拟', html: `<p>蒙特卡洛、分子动力学；抽样与误差。</p>` },
          { id: 'complex', title: '复杂', html: `<p>自组织临界、网络、生物物理；跨学科。</p>` }
        ], refs: [] } }
    ] },

    /* ---- 大四 ---- */
    { name: '毕业论文', chapters: [
      { title: '选题与文献', brief: '小问题、可做。',
        q: [
          { stem: '物理论文选题的关键是：', options: ['问题明确、方法可行', '题目宏大', '追热点', '导师偏好'], answer: 0, explain: '可行。' },
          { stem: '文献阅读的作用是：', options: ['了解方法并找到切入点', '凑数', '展示', '替代研究'], answer: 0, explain: '切入。' },
          { stem: '物理研究的常见类型包括：', options: ['理论、实验、计算、应用', '只有理论', '只有实验', '只有计算'], answer: 0, explain: '多类。' }
        ],
        doc: { lead: '这一章讲开头。', sections: [
          { id: 'topic', title: '选题', html: `<p>理论推导、实验测量、数值模拟、教学研究。</p>` },
          { id: 'review', title: '文献', html: `<p>经典教材、综述、近年论文；方法与结论。</p>` }
        ], refs: [] } },
      { title: '研究方法', brief: '怎么研究。',
        q: [
          { stem: '实验研究的关键是：', options: ['控制变量与误差分析', '只看结果', '忽略误差', '快速'], answer: 0, explain: '误差。' },
          { stem: '数值模拟的可信度依赖：', options: ['模型、算法与验证', '代码长度', '运行速度', '图形美观'], answer: 0, explain: '验证。' },
          { stem: '理论推导应：', options: ['假设清楚、推导严密、可检验', '简洁唯一', '省略步骤', '只给结论'], answer: 0, explain: '严密。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'experiment', title: '实验', html: `<p>装置、测量、误差与不确定度；重复性。</p>` },
          { id: 'theory', title: '理论与计算', html: `<p>模型假设、推导、数值实现；与实验对比。</p>` }
        ], refs: [] } },
      { title: '写作与规范', brief: '学术表达。',
        q: [
          { stem: '物理论文的结构是：', options: ['引言—方法—结果—讨论—结论', '总—分—总', '背景—致谢', '问答'], answer: 0, explain: 'IMRaD。' },
          { stem: '图表规范包括：', options: ['坐标轴标注、单位、误差棒', '只有图', '只有表', '无要求'], answer: 0, explain: '规范。' },
          { stem: '引用规范的作用是：', options: ['可追溯与学术诚信', '凑数', '装饰', '增加篇幅'], answer: 0, explain: '规范。' }
        ],
        doc: { lead: '这一章讲写作。', sections: [
          { id: 'structure', title: '结构', html: `<p>摘要、引言、方法、结果、讨论、参考。</p>` },
          { id: 'figures', title: '图表', html: `<p>坐标、单位、误差棒、有效数字；图注自明。</p>` }
        ], refs: [] } },
      { title: '答辩', brief: '讲清楚。',
        q: [
          { stem: '答辩陈述的要点是：', options: ['问题、方法、结果、局限', '致谢', '篇幅', '格式'], answer: 0, explain: '四点。' },
          { stem: '被质疑时应：', options: ['承认局限并说明理由', '争辩', '回避', '改口'], answer: 0, explain: '诚恳。' },
          { stem: '答辩前最该准备的是：', options: ['熟悉数据与推导依据', '背稿', 'PPT 模板', '服装'], answer: 0, explain: '依据。' }
        ],
        doc: { lead: '这一章讲答辩。', sections: [
          { id: 'talk', title: '陈述', html: `<p>8–10 分钟；问题—方法—结果—局限。</p>` },
          { id: 'qa', title: '问答', html: `<p>准备可能问题；不会就说不确定并说明思路。</p>` }
        ], refs: [] } }
    ] },
    { name: '教育实习', chapters: [
      { title: '物理教学设计', brief: '一堂物理课。',
        q: [
          { stem: '物理教学的核心是：', options: ['概念理解与科学思维', '记公式', '刷题', '速度'], answer: 0, explain: '思维。' },
          { stem: '实验在物理教学中的作用是：', options: ['建立概念、培养探究能力', '装饰', '凑时间', '考试'], answer: 0, explain: '实验。' },
          { stem: '教学设计应包含：', options: ['目标、重难点、活动、评价', '只有目标', '只有活动', '只有作业'], answer: 0, explain: '要素。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'core', title: '核心素养', html: `<p>物理观念、科学思维、科学探究、科学态度与责任。</p>` },
          { id: 'design', title: '设计', html: `<p>情境—问题—探究—归纳—应用；实验与推理结合。</p>` }
        ], refs: [] } },
      { title: '课堂实施', brief: '把课上好。',
        q: [
          { stem: '物理提问的有效性是：', options: ['有层次、指向思维', '多而快', '只问公式', '只问是否'], answer: 0, explain: '思维。' },
          { stem: '演示实验的关键是：', options: ['可见、可控、有引导', '复杂', '花哨', '越快越好'], answer: 0, explain: '可见。' },
          { stem: '概念教学中常见的误区是：', options: ['以公式代替理解', '举例', '实验', '讨论'], answer: 0, explain: '公式化。' }
        ],
        doc: { lead: '这一章讲实施。', sections: [
          { id: 'question', title: '提问', html: `<p>问题串、追问、认知冲突；暴露前概念。</p>` },
          { id: 'experiment', title: '实验', html: `<p>演示、分组、探究；数据与结论的关系。</p>` }
        ], refs: [] } },
      { title: '物理评价', brief: '怎么考。',
        q: [
          { stem: '物理评价应：', options: ['知识与素养并重、过程与结果结合', '只考记忆', '只看分数', '只做选择'], answer: 0, explain: '素养。' },
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
      { title: '考研方向', brief: '物理与交叉。',
        q: [
          { stem: '物理学考研的常见方向是：', options: ['理论物理、凝聚态、光学、粒子物理', '只有理论', '只有凝聚态', '只有光学'], answer: 0, explain: '多方向。' },
          { stem: '普通物理与量子力学在考研中的地位是：', options: ['专业课核心', '不重要', '只考其一', '只考公共课'], answer: 0, explain: '核心。' },
          { stem: '择校最应考虑：', options: ['方向、导师与真题风格', '城市', '学费', '宿舍'], answer: 0, explain: '匹配。' }
        ],
        doc: { lead: '这一章讲方向。', sections: [
          { id: 'paths', title: '方向', html: `<p>理论、凝聚态、光学、粒子核物理、天体、交叉学科。</p>` },
          { id: 'subjects', title: '科目', html: `<p>政治、英语、普通物理、量子力学（或数学物理方法）。</p>` }
        ], refs: [] } },
      { title: '专业课复习', brief: '概念与计算。',
        q: [
          { stem: '普通物理复习的主线是：', options: ['力热光电原', '只做计算', '只背公式', '只看真题'], answer: 0, explain: '五门。' },
          { stem: '量子力学复习的重点是：', options: ['波函数、算符、典型模型', '只背结论', '只做计算', '只看历史'], answer: 0, explain: '核心。' },
          { stem: '物理计算题的关键是：', options: ['物理图像 + 数学推导', '套公式', '猜答案', '跳过'], answer: 0, explain: '图像。' }
        ],
        doc: { lead: '这一章讲复习。', sections: [
          { id: 'general', title: '普物', html: `<p>力学、热学、电磁、光学、原子；典型题型。</p>` },
          { id: 'quantum', title: '量子', html: `<p>一维模型、角动量、微扰；计算与概念并重。</p>` }
        ], refs: [] } },
      { title: '求职方向', brief: '教师、研发、芯片。',
        q: [
          { stem: '物理专业毕业生的常见去向不包括：', options: ['中学教师', '半导体/光电研发', '数据分析', '外科医生'], answer: 3, explain: '专业限制。' },
          { stem: '半导体岗位看重：', options: ['固体物理与器件知识', '只有编程', '只有英语', '只有证书'], answer: 0, explain: '专业。' },
          { stem: '求职最加分的材料是：', options: ['科研项目与技能', '证书数量', '成绩单', '社团'], answer: 0, explain: '项目。' }
        ],
        doc: { lead: '这一章讲就业。', sections: [
          { id: 'paths', title: '路径', html: `<p>教师、半导体/光电、数据分析、科研、读博。</p>` },
          { id: 'skills', title: '能力', html: `<p>实验与计算、编程（Python/MATLAB）、器件与材料知识。</p>` }
        ], refs: [] } },
      { title: '面试与试讲', brief: '展示能力。',
        q: [
          { stem: '物理教师面试试讲的关键是：', options: ['概念清晰、实验有效、推理严密', '背稿', 'PPT 精美', '时长'], answer: 0, explain: '推理。' },
          { stem: '研发岗面试常考：', options: ['专业基础与项目细节', '只有编程', '只有英语', '只有性格'], answer: 0, explain: '专业。' },
          { stem: '讲项目的最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
        ],
        doc: { lead: '这一章讲面试。', sections: [
          { id: 'teaching', title: '试讲', html: `<p>15 分钟：情境—探究—归纳—应用；演示实验。</p>` },
          { id: 'tech', title: '技术', html: `<p>器件、材料、测量；项目细节与数据。</p>` }
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
