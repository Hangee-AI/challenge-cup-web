/* ==========================================================
   civil-courses.js · 土木工程：12 门课（主干 8 / 出口 4）= 84 关
   ========================================================== */

(function () {
  var MAJOR = 'engineering-土木工程';
  var TITLES = stageTitlesOf('engineering');

  var COURSES = [
    { name: '工程制图', chapters: [
      { title: '制图基础', brief: '工程的图纸。',
        q: [
          { stem: '三视图的投影规律是：', options: ['长对正、高平齐、宽相等', '长相等', '任意', '只看主视图'], answer: 0, explain: '三视图。' },
          { stem: '粗实线通常表示：', options: ['可见轮廓线', '尺寸线', '中心线', '剖面线'], answer: 0, explain: '粗实线。' },
          { stem: '图幅与比例应：', options: ['按国家标准选取', '任意', '越大越好', '越小越好'], answer: 0, explain: '标准。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'projection', title: '投影', html: `<p>正投影、三视图；投影规律与视图配置。</p>` },
          { id: 'standard', title: '标准', html: `<p>图幅、比例、线型、字体；标题栏。</p>` }
        ], refs: [] } },
      { title: '建筑形体表达', brief: '把房子画清楚。',
        q: [
          { stem: '剖面图的作用是：', options: ['表达内部构造', '放大', '美观', '省略尺寸'], answer: 0, explain: '内部。' },
          { stem: '建筑平面图是：', options: ['水平剖切后的俯视图', '立面图', '剖面图', '轴测图'], answer: 0, explain: '平面。' },
          { stem: '立面图表达：', options: ['建筑外部造型与门窗位置', '内部构造', '基础', '配筋'], answer: 0, explain: '立面。' }
        ],
        doc: { lead: '这一章讲表达。', sections: [
          { id: 'section', title: '剖视', html: `<p>全剖、阶梯剖；剖面符号与材料图例。</p>` },
          { id: 'elevation', title: '平立剖', html: `<p>平面、立面、剖面；尺寸与标高。</p>` }
        ], refs: [] } },
      { title: '建筑施工图', brief: '按图施工。',
        q: [
          { stem: '建筑施工图包括：', options: ['总平面、平面、立面、剖面、详图', '只有平面', '只有立面', '只有详图'], answer: 0, explain: '一套图。' },
          { stem: '标高以什么为单位？', options: ['米', '毫米', '厘米', '分米'], answer: 0, explain: '米。' },
          { stem: '索引符号的作用是：', options: ['指向详图或做法', '标注尺寸', '表示材料', '表示标高'], answer: 0, explain: '索引。' }
        ],
        doc: { lead: '这一章讲建施。', sections: [
          { id: 'drawing', title: '图纸', html: `<p>总平面、平立剖；节点详图与做法说明。</p>` },
          { id: 'annotation', title: '标注', html: `<p>尺寸、标高、索引与详图符号；门窗表。</p>` }
        ], refs: [] } },
      { title: '结构施工图', brief: '怎么配筋。',
        q: [
          { stem: '结构施工图的核心是：', options: ['构件尺寸与配筋', '装修做法', '门窗', '总平面'], answer: 0, explain: '配筋。' },
          { stem: '平法标注用于：', options: ['简化梁柱板配筋表达', '装修', '测量', '预算'], answer: 0, explain: '平法。' },
          { stem: '钢筋的锚固长度取决于：', options: ['混凝土强度、钢筋级别与直径', '只有直径', '只有级别', '只有跨度'], answer: 0, explain: '锚固。' }
        ],
        doc: { lead: '这一章讲结施。', sections: [
          { id: 'structure', title: '结构图', html: `<p>基础、梁板柱、楼梯；配筋图与钢筋表。</p>` },
          { id: 'pingfa', title: '平法', html: `<p>平面整体表示法；锚固与搭接。</p>` }
        ], refs: [] } },
      { title: '计算机绘图', brief: 'CAD。',
        q: [
          { stem: 'CAD 绘图优势是：', options: ['精确、易修改、可复用', '便宜', '不需标准', '不用标注'], answer: 0, explain: '效率。' },
          { stem: '图层的作用是：', options: ['分类管理线型与颜色', '加密', '压缩', '打印'], answer: 0, explain: '图层。' },
          { stem: '块的作用是：', options: ['重复使用图元组合', '加密', '压缩', '加密'], answer: 0, explain: '块。' }
        ],
        doc: { lead: '这一章讲 CAD。', sections: [
          { id: 'cad', title: '二维绘图', html: `<p>图层、块、标注；标准图框与打印。</p>` },
          { id: 'bim', title: 'BIM 初步', html: `<p>三维建模、协同；出图与算量。</p>` }
        ], refs: [] } },
      { title: '测量与放线', brief: '定位。',
        q: [
          { stem: '水准仪用于：', options: ['测量高差', '测角', '测距唯一', '测坐标'], answer: 0, explain: '水准。' },
          { stem: '全站仪可测：', options: ['角度、距离与坐标', '只有角度', '只有距离', '只有高差'], answer: 0, explain: '全站仪。' },
          { stem: '施工放样的目的是：', options: ['把设计位置标定到现场', '测量面积', '算造价', '画图'], answer: 0, explain: '放样。' }
        ],
        doc: { lead: '这一章讲测量。', sections: [
          { id: 'instruments', title: '仪器', html: `<p>水准仪、经纬仪、全站仪；误差与控制。</p>` },
          { id: 'setting', title: '放样', html: `<p>控制网、轴线投测、标高传递；沉降观测。</p>` }
        ], refs: [] } },
      { title: '识图综合训练', brief: '看懂图纸。',
        q: [
          { stem: '识图的第一步是：', options: ['看图纸目录与设计说明', '看详图', '看尺寸', '看标题栏'], answer: 0, explain: '说明。' },
          { stem: '建施与结施对照的作用是：', options: ['核对构件与预留洞位置', '装饰', '算量', '归档'], answer: 0, explain: '核对。' },
          { stem: '常见识图错误包括：', options: ['标高错、尺寸漏、构件对不上', '只有标高', '只有尺寸', '只有构件'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲识图。', sections: [
          { id: 'order', title: '顺序', html: `<p>目录—说明—平立剖—详图—结构图；对照检查。</p>` },
          { id: 'errors', title: '错误', html: `<p>标高、尺寸、预留洞、材料；检查清单。</p>` }
        ], refs: [] } },
      { title: '制图实训', brief: '画一套图。',
        q: [
          { stem: '制图实训的成果通常是：', options: ['一套小建筑施工图', '只有平面图', '只有效果图', '只有说明'], answer: 0, explain: '一套图。' },
          { stem: '图纸自检的重点是：', options: ['投影、尺寸、标注与图例', '只有投影', '只有尺寸', '只有图例'], answer: 0, explain: '自检。' },
          { stem: '提高制图能力的关键是：', options: ['多画多对照标准', '只背标准', '只画一遍', '只看视频'], answer: 0, explain: '练习。' }
        ],
        doc: { lead: '这一章讲实训。', sections: [
          { id: 'task', title: '任务', html: `<p>小住宅/门卫房；平立剖与节点详图。</p>` },
          { id: 'review', title: '评图', html: `<p>自检与互检清单；常见扣分点。</p>` }
        ], refs: [] } }
    ] },
    { name: '理论力学', chapters: [
      { title: '静力学基础', brief: '平衡。',
        q: [
          { stem: '二力杆受力方向：', options: ['沿杆轴线', '垂直杆', '任意', '沿切线'], answer: 0, explain: '轴线。' },
          { stem: '约束力方向与约束方向：', options: ['相反', '相同', '垂直', '无关'], answer: 0, explain: '相反。' },
          { stem: '力偶对物体：', options: ['只产生转动效应', '只产生移动', '无效应', '等于零'], answer: 0, explain: '转动。' }
        ],
        doc: { lead: '这一章讲静力。', sections: [
          { id: 'force', title: '受力分析', html: `<p>约束类型、受力图；二力杆与三力平衡。</p>` },
          { id: 'equilibrium', title: '平衡', html: `<p>力系简化、平衡方程；桁架分析。</p>` }
        ], refs: [] } },
      { title: '摩擦与重心', brief: '实际。',
        q: [
          { stem: '摩擦角的正切等于：', options: ['摩擦系数', '摩擦角', '正压力', '重量'], answer: 0, explain: 'tanφ=f。' },
          { stem: '自锁条件是：', options: ['主动力作用角小于摩擦角', '大于摩擦角', '等于零', '任意'], answer: 0, explain: '自锁。' },
          { stem: '重心求解方法：', options: ['积分法、分割法、实验法', '只有积分', '只有分割', '只有实验'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲摩擦。', sections: [
          { id: 'friction', title: '摩擦', html: `<p>滑动摩擦、摩擦角与自锁；滚动摩擦。</p>` },
          { id: 'centroid', title: '重心', html: `<p>重心与形心；组合体；稳定性。</p>` }
        ], refs: [] } },
      { title: '运动学', brief: '描述运动。',
        q: [
          { stem: '点的速度是：', options: ['位置对时间的导数', '加速度', '位移', '路程'], answer: 0, explain: '导数。' },
          { stem: '刚体平动时各点：', options: ['速度加速度相同', '速度不同', '加速度不同', '轨迹不同'], answer: 0, explain: '平动。' },
          { stem: '定轴转动点的加速度包含：', options: ['切向与法向', '只有切向', '只有法向', '无'], answer: 0, explain: '两分量。' }
        ],
        doc: { lead: '这一章讲运动学。', sections: [
          { id: 'point', title: '点的运动', html: `<p>速度、加速度；自然与直角坐标。</p>` },
          { id: 'rigid', title: '刚体运动', html: `<p>平动、定轴转动；角量与线量。</p>` }
        ], refs: [] } },
      { title: '合成运动', brief: '换参考系。',
        q: [
          { stem: '绝对速度等于：', options: ['相对与牵连速度的矢量和', '相对速度', '牵连速度', '两者之差'], answer: 0, explain: '合成。' },
          { stem: '科氏加速度产生于：', options: ['牵连转动与相对运动', '平动', '静止', '匀速'], answer: 0, explain: '科氏。' },
          { stem: '合成分析步骤：', options: ['选系—分析三种运动—速度—加速度', '只有速度', '只有加速度', '直接算'], answer: 0, explain: '步骤。' }
        ],
        doc: { lead: '这一章讲合成。', sections: [
          { id: 'velocity', title: '速度合成', html: `<p>绝对、相对、牵连；合成定理。</p>` },
          { id: 'acceleration', title: '加速度合成', html: `<p>科氏加速度；方向判定。</p>` }
        ], refs: [] } },
      { title: '动力学', brief: '力与运动。',
        q: [
          { stem: '牛顿第二定律是：', options: ['F = ma', 'F = mv', 'F = m/a', 'F = a/m'], answer: 0, explain: 'F=ma。' },
          { stem: '达朗贝尔原理的作用是：', options: ['把动力学问题化为静力平衡', '增加力', '减少质量', '改变加速度'], answer: 0, explain: '动静法。' },
          { stem: '动量定理表达式：', options: ['ΣF = d(mv)/dt', 'F = ma²', 'F = mv', 'F = 0'], answer: 0, explain: '动量。' }
        ],
        doc: { lead: '这一章讲动力学。', sections: [
          { id: 'newton', title: '牛顿定律', html: `<p>运动微分方程；初始条件。</p>` },
          { id: 'theorems', title: '基本定理', html: `<p>动量、动量矩、动能定理；动静法。</p>` }
        ], refs: [] } },
      { title: '刚体动力学', brief: '转动。',
        q: [
          { stem: '转动惯量取决于：', options: ['质量分布与转轴', '只有质量', '只有形状', '只有角速度'], answer: 0, explain: '分布。' },
          { stem: '定轴转动方程是：', options: ['M = Iβ', 'F = ma', 'M = Iω', 'M = I/β'], answer: 0, explain: 'M=Iβ。' },
          { stem: '平行轴定理用于：', options: ['平移转轴求转动惯量', '求质心', '求力矩', '求速度'], answer: 0, explain: '平行轴。' }
        ],
        doc: { lead: '这一章讲刚体。', sections: [
          { id: 'inertia', title: '转动惯量', html: `<p>计算、平行轴定理；回转半径。</p>` },
          { id: 'equation', title: '转动方程', html: `<p>定轴转动、平面运动；动能。</p>` }
        ], refs: [] } },
      { title: '振动与碰撞', brief: '特殊过程。',
        q: [
          { stem: '单自由度无阻尼振动频率取决于：', options: ['质量与刚度', '振幅', '初相', '能量'], answer: 0, explain: '固有。' },
          { stem: '恢复系数衡量：', options: ['碰撞的弹性程度', '质量', '速度', '力'], answer: 0, explain: '恢复系数。' },
          { stem: '碰撞中动量：', options: ['守恒', '不守恒', '只在弹性时守恒', '随机'], answer: 0, explain: '守恒。' }
        ],
        doc: { lead: '这一章讲振动。', sections: [
          { id: 'vibration', title: '振动', html: `<p>自由振动与共振；阻尼；隔振。</p>` },
          { id: 'impact', title: '碰撞', html: `<p>恢复系数、动量守恒；能量损失。</p>` }
        ], refs: [] } },
      { title: '综合训练', brief: '用起来。',
        q: [
          { stem: '力学题第一步是：', options: ['选研究对象并受力分析', '列方程', '计算', '检查'], answer: 0, explain: '分析。' },
          { stem: '静力与动力分界是：', options: ['是否考虑加速度', '是否有力', '是否有约束', '是否平衡'], answer: 0, explain: '加速度。' },
          { stem: '结果检验方法：', options: ['量纲、极限、能量', '猜', '背', '跳过'], answer: 0, explain: '检验。' }
        ],
        doc: { lead: '这一章讲训练。', sections: [
          { id: 'method', title: '方法', html: `<p>研究对象、受力图、方程；一题多解。</p>` },
          { id: 'check', title: '检验', html: `<p>量纲、极限情形、能量；常见错误。</p>` }
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
          { id: 'second', title: '二阶', html: `<p>常系数、特征根；振动。</p>` }
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
          { id: 'compute', title: '计算', html: `<p>典型题型；换元与分部；数值方法初步。</p>` },
          { id: 'tools', title: '工具', html: `<p>MATLAB/Python；符号与绘图。</p>` }
        ], refs: [] } }
    ] },
    { name: '材料力学', chapters: [
      { title: '基本概念', brief: '应力应变。',
        q: [
          { stem: '应力是：', options: ['内力集度', '变形量', '力', '位移'], answer: 0, explain: '集度。' },
          { stem: '正应力与切应力区别：', options: ['是否垂直截面', '大小', '方向唯一', '材料'], answer: 0, explain: '垂直。' },
          { stem: '胡克定律适用：', options: ['线弹性范围', '塑性阶段', '断裂', '任意'], answer: 0, explain: '线弹性。' }
        ],
        doc: { lead: '这一章讲概念。', sections: [
          { id: 'stress', title: '应力应变', html: `<p>内力、应力、应变；弹性模量与泊松比。</p>` },
          { id: 'assumption', title: '假设', html: `<p>连续、均匀、各向同性、小变形。</p>` }
        ], refs: [] } },
      { title: '拉压', brief: '最基本受力。',
        q: [
          { stem: '低碳钢拉伸阶段：', options: ['弹性、屈服、强化、颈缩', '只有弹性', '只有屈服', '只有强化'], answer: 0, explain: '四阶段。' },
          { stem: '许用应力由：', options: ['极限应力除以安全系数', '极限应力', '弹性极限', '比例极限'], answer: 0, explain: '安全系数。' },
          { stem: '拉压变形公式：', options: ['ΔL = FL/(EA)', 'ΔL = F/A', 'ΔL = EA/F', 'ΔL = FL'], answer: 0, explain: '公式。' }
        ],
        doc: { lead: '这一章讲拉压。', sections: [
          { id: 'curve', title: '曲线', html: `<p>比例极限、屈服、强度；塑性与脆性材料。</p>` },
          { id: 'strength', title: '强度', html: `<p>强度条件、安全系数；变形与刚度。</p>` }
        ], refs: [] } },
      { title: '剪切与扭转', brief: '横向。',
        q: [
          { stem: '圆轴扭转切应力沿半径：', options: ['线性分布', '均匀', '抛物线', '为零'], answer: 0, explain: '线性。' },
          { stem: '扭转角与什么成正比：', options: ['扭矩与长度', '扭矩唯一', '长度唯一', '直径'], answer: 0, explain: '公式。' },
          { stem: '剪切胡克定律：', options: ['τ = Gγ', 'τ = Eε', 'τ = σ', 'τ = F/A'], answer: 0, explain: '剪切。' }
        ],
        doc: { lead: '这一章讲剪切。', sections: [
          { id: 'shear', title: '剪切', html: `<p>剪应力、挤压；连接件强度。</p>` },
          { id: 'torsion', title: '扭转', html: `<p>扭矩图、切应力、扭转角；极惯性矩。</p>` }
        ], refs: [] } },
      { title: '弯曲内力', brief: '梁。',
        q: [
          { stem: '剪力与弯矩关系：', options: ['弯矩图斜率等于剪力', '无关', '相同', '相反'], answer: 0, explain: '微分关系。' },
          { stem: '简支梁集中力处弯矩：', options: ['最大', '为零', '最小', '不变'], answer: 0, explain: '集中力。' },
          { stem: '纯弯曲正应力沿高度：', options: ['线性分布', '均匀', '抛物线', '为零'], answer: 0, explain: '线性。' }
        ],
        doc: { lead: '这一章讲内力。', sections: [
          { id: 'diagram', title: '内力图', html: `<p>剪力、弯矩；微分关系。</p>` },
          { id: 'stress', title: '弯曲应力', html: `<p>正应力公式、抗弯截面系数；强度条件。</p>` }
        ], refs: [] } },
      { title: '弯曲变形', brief: '挠度。',
        q: [
          { stem: '挠曲线微分方程：', options: ['EIw″ = M', 'EIw′ = M', 'EIw = M', 'w″ = M'], answer: 0, explain: 'EIw″=M。' },
          { stem: '提高梁刚度措施：', options: ['增大惯性矩、减小跨度', '增大载荷', '减小截面', '增加悬臂'], answer: 0, explain: '刚度。' },
          { stem: '叠加法用于：', options: ['求复杂载荷变形', '求内力唯一', '求应力唯一', '求稳定'], answer: 0, explain: '叠加。' }
        ],
        doc: { lead: '这一章讲变形。', sections: [
          { id: 'deflection', title: '挠度', html: `<p>积分法、叠加法；转角与挠度。</p>` },
          { id: 'stiffness', title: '刚度', html: `<p>刚度条件、合理截面。</p>` }
        ], refs: [] } },
      { title: '应力状态与强度理论', brief: '复杂受力。',
        q: [
          { stem: '主应力是：', options: ['切应力为零面上正应力', '最大正应力', '最大切应力', '平均应力'], answer: 0, explain: '主应力。' },
          { stem: '第四强度理论适用：', options: ['塑性材料', '脆性材料', '铸铁', '混凝土'], answer: 0, explain: '畸变能。' },
          { stem: '莫尔圆用于：', options: ['表示应力状态', '求内力', '求变形', '求稳定'], answer: 0, explain: '莫尔圆。' }
        ],
        doc: { lead: '这一章讲强度。', sections: [
          { id: 'state', title: '应力状态', html: `<p>二向/三向；主平面与莫尔圆。</p>` },
          { id: 'theory', title: '强度理论', html: `<p>四个理论；相当应力与选用。</p>` }
        ], refs: [] } },
      { title: '组合变形与稳定', brief: '实际构件。',
        q: [
          { stem: '拉弯组合变形处理：', options: ['叠加各基本变形应力', '只算拉', '只算弯', '求平均'], answer: 0, explain: '叠加。' },
          { stem: '压杆临界力由：', options: ['欧拉公式（细长杆）', '强度条件', '刚度条件', '经验唯一'], answer: 0, explain: '欧拉。' },
          { stem: '提高压杆稳定性：', options: ['减小计算长度、增大惯性矩', '增大载荷', '减小截面', '增加偏心'], answer: 0, explain: '稳定。' }
        ],
        doc: { lead: '这一章讲组合。', sections: [
          { id: 'combined', title: '组合变形', html: `<p>拉弯、弯扭、偏心压缩。</p>` },
          { id: 'stability', title: '稳定', html: `<p>欧拉公式、柔度；折减系数法。</p>` }
        ], refs: [] } },
      { title: '材料力学实验', brief: '动手。',
        q: [
          { stem: '拉伸实验可测：', options: ['弹性模量、屈服强度、延伸率', '只有模量', '只有强度', '只有延伸率'], answer: 0, explain: '多项。' },
          { stem: '应变片原理：', options: ['电阻随应变变化', '电容变化', '电感变化', '光强变化'], answer: 0, explain: '应变片。' },
          { stem: '数据处理应：', options: ['剔除异常并分析误差', '挑选', '编造', '忽略'], answer: 0, explain: '处理。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'experiment', title: '实验', html: `<p>拉伸、压缩、扭转；应变片与电桥。</p>` },
          { id: 'analysis', title: '分析', html: `<p>数据与误差；与理论对比。</p>` }
        ], refs: [] } }
    ] },
    { name: '结构力学', chapters: [
      { title: '几何组成分析', brief: '能不能承力。',
        q: [
          { stem: '几何不变体系的条件是：', options: ['自由度小于等于零且约束布置合理', '自由度大于零', '无约束', '任意'], answer: 0, explain: '不变。' },
          { stem: '多余约束指：', options: ['去掉后仍几何不变的约束', '必须的约束', '临时约束', '支座'], answer: 0, explain: '多余。' },
          { stem: '瞬变体系的特征是：', options: ['微小位移后变成可变', '永远不变', '无约束', '静定'], answer: 0, explain: '瞬变。' }
        ],
        doc: { lead: '这一章讲组成。', sections: [
          { id: 'dof', title: '自由度', html: `<p>刚片、约束；计算公式。</p>` },
          { id: 'rules', title: '规则', html: `<p>二元体、三刚片；瞬变与常变。</p>` }
        ], refs: [] } },
      { title: '静定结构内力', brief: '算内力。',
        q: [
          { stem: '静定梁内力计算的基本方法是：', options: ['截面法', '位移法', '力矩分配', '有限元'], answer: 0, explain: '截面法。' },
          { stem: '桁架零杆的判断依据：', options: ['节点平衡与对称性', '材料', '跨度', '荷载'], answer: 0, explain: '零杆。' },
          { stem: '三铰拱的水平推力与：', options: ['矢高成反比', '矢高成正比', '无关', '跨度无关'], answer: 0, explain: '矢高。' }
        ],
        doc: { lead: '这一章讲静定。', sections: [
          { id: 'beam', title: '梁与刚架', html: `<p>截面法、内力图；多跨静定梁。</p>` },
          { id: 'truss', title: '桁架与拱', html: `<p>节点法、截面法；零杆；三铰拱。</p>` }
        ], refs: [] } },
      { title: '虚功原理与位移', brief: '变形。',
        q: [
          { stem: '单位荷载法用于：', options: ['计算位移', '计算内力', '判断稳定', '求反力'], answer: 0, explain: '位移。' },
          { stem: '图乘法的适用条件是：', options: ['等截面直杆、EI 常数', '任意杆', '变截面', '曲杆'], answer: 0, explain: '图乘法。' },
          { stem: '虚功原理的两种应用是：', options: ['虚位移原理与虚力原理', '只有虚位移', '只有虚力', '无应用'], answer: 0, explain: '两种。' }
        ],
        doc: { lead: '这一章讲位移。', sections: [
          { id: 'virtual', title: '虚功', html: `<p>虚位移与虚力原理；单位荷载法。</p>` },
          { id: 'graph', title: '图乘法', html: `<p>适用条件、计算步骤；温度与支座移动。</p>` }
        ], refs: [] } },
      { title: '力法', brief: '超静定。',
        q: [
          { stem: '力法的基本未知量是：', options: ['多余约束力', '位移', '内力', '荷载'], answer: 0, explain: '多余力。' },
          { stem: '力法方程的物理意义是：', options: ['多余约束处位移协调', '力平衡', '能量最小', '变形协调唯一'], answer: 0, explain: '协调。' },
          { stem: '超静定次数等于：', options: ['多余约束数', '支座数', '杆件数', '节点数'], answer: 0, explain: '次数。' }
        ],
        doc: { lead: '这一章讲力法。', sections: [
          { id: 'basic', title: '基本原理', html: `<p>基本体系、多余未知力；典型方程。</p>` },
          { id: 'application', title: '应用', html: `<p>超静定梁、刚架、桁架；对称性利用。</p>` }
        ], refs: [] } },
      { title: '位移法', brief: '另一种思路。',
        q: [
          { stem: '位移法基本未知量是：', options: ['节点位移', '多余力', '内力', '荷载'], answer: 0, explain: '位移。' },
          { stem: '位移法方程的依据是：', options: ['节点力平衡', '位移协调', '能量', '变形'], answer: 0, explain: '平衡。' },
          { stem: '力矩分配法适用于：', options: ['连续梁与无侧移刚架', '任意结构', '桁架', '拱'], answer: 0, explain: '分配法。' }
        ],
        doc: { lead: '这一章讲位移法。', sections: [
          { id: 'basic', title: '基本原理', html: `<p>基本结构、节点位移；形常数与载常数。</p>` },
          { id: 'moment', title: '力矩分配', html: `<p>分配系数、传递系数；连续梁。</p>` }
        ], refs: [] } },
      { title: '影响线', brief: '移动荷载。',
        q: [
          { stem: '影响线表示：', options: ['单位移动荷载下某量值的变化', '固定荷载内力', '位移', '反力唯一'], answer: 0, explain: '影响线。' },
          { stem: '最不利荷载位置的确定依据：', options: ['影响线', '内力图', '位移图', '弯矩图'], answer: 0, explain: '最不利。' },
          { stem: '简支梁绝对最大弯矩发生在：', options: ['跨中附近', '支座处', '任意', '端点'], answer: 0, explain: '最大弯矩。' }
        ],
        doc: { lead: '这一章讲影响线。', sections: [
          { id: 'concept', title: '概念', html: `<p>影响线定义、绘制（静力法/机动法）。</p>` },
          { id: 'application', title: '应用', html: `<p>最不利荷载位置、绝对最大弯矩；吊车梁。</p>` }
        ], refs: [] } },
      { title: '结构动力学初步', brief: '动荷载。',
        q: [
          { stem: '单自由度体系自振频率与什么有关：', options: ['刚度与质量', '荷载', '阻尼唯一', '跨度唯一'], answer: 0, explain: 'k 与 m。' },
          { stem: '共振发生在：', options: ['荷载频率接近自振频率', '任意频率', '频率为零', '阻尼最大'], answer: 0, explain: '共振。' },
          { stem: '阻尼对共振响应的影响是：', options: ['显著降低幅值', '提高幅值', '无影响', '改变频率唯一'], answer: 0, explain: '阻尼。' }
        ],
        doc: { lead: '这一章讲动力。', sections: [
          { id: 'sdof', title: '单自由度', html: `<p>自振频率、阻尼比；动力放大系数。</p>` },
          { id: 'response', title: '响应', html: `<p>简谐与冲击荷载；地震作用初步。</p>` }
        ], refs: [] } },
      { title: '结构力学训练', brief: '多算。',
        q: [
          { stem: '解结构力学题的第一步是：', options: ['几何组成分析', '列方程', '画图', '计算'], answer: 0, explain: '组成。' },
          { stem: '内力图应满足：', options: ['平衡与微分关系', '只平衡', '只微分', '任意'], answer: 0, explain: '校验。' },
          { stem: '提高能力的有效方式是：', options: ['大量练习并总结', '只看答案', '只听课', '只背公式'], answer: 0, explain: '练习。' }
        ],
        doc: { lead: '这一章讲训练。', sections: [
          { id: 'method', title: '方法', html: `<p>组成—反力—内力—位移—校核；一题多解。</p>` },
          { id: 'check', title: '校核', html: `<p>平衡校核、对称性、量纲；常见错误。</p>` }
        ], refs: [] } }
    ] },
    { name: '工程测量', chapters: [
      { title: '测量基础', brief: '定位与高差。',
        q: [
          { stem: '水准测量的目的是：', options: ['测定两点高差', '测角', '测距', '测坐标'], answer: 0, explain: '高差。' },
          { stem: '角度测量常用：', options: ['经纬仪/全站仪', '水准仪', '钢尺', 'GPS 唯一'], answer: 0, explain: '测角。' },
          { stem: '测量的基本原则是：', options: ['从整体到局部、先控制后碎部', '从局部到整体', '随意', '只做碎部'], answer: 0, explain: '原则。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'concept', title: '概念', html: `<p>高程、坐标、方位角；测量原则与精度。</p>` },
          { id: 'instruments', title: '仪器', html: `<p>水准仪、经纬仪、全站仪；使用与检校。</p>` }
        ], refs: [] } },
      { title: '水准测量', brief: '高差。',
        q: [
          { stem: '闭合水准路线的闭合差应：', options: ['接近零', '等于高差', '任意', '等于距离'], answer: 0, explain: '闭合差。' },
          { stem: '水准测量误差来源包括：', options: ['仪器、观测、外界条件', '只有仪器', '只有观测', '只有外界'], answer: 0, explain: '三类。' },
          { stem: '前后视距相等的作用是：', options: ['消除 i 角与地球曲率影响', '加快', '减小高差', '增大精度唯一'], answer: 0, explain: '等距。' }
        ],
        doc: { lead: '这一章讲水准。', sections: [
          { id: 'route', title: '路线', html: `<p>闭合、附合、支水准；测站与记录。</p>` },
          { id: 'error', title: '误差', html: `<p>i 角、视距、大气折光；闭合差调整。</p>` }
        ], refs: [] } },
      { title: '角度与距离', brief: '方向与长度。',
        q: [
          { stem: '测回法用于：', options: ['测量水平角', '测高差', '测距离', '测坐标'], answer: 0, explain: '水平角。' },
          { stem: '视距测量可同时得到：', options: ['距离与高差', '只有距离', '只有高差', '只有角度'], answer: 0, explain: '视距。' },
          { stem: '钢尺量距的改正包括：', options: ['尺长、温度、倾斜', '只有尺长', '只有温度', '只有倾斜'], answer: 0, explain: '三项。' }
        ],
        doc: { lead: '这一章讲角度。', sections: [
          { id: 'angle', title: '角度', html: `<p>测回法、方向法；限差与记录。</p>` },
          { id: 'distance', title: '距离', html: `<p>钢尺量距、视距、光电测距；改正。</p>` }
        ], refs: [] } },
      { title: '控制测量', brief: '骨架。',
        q: [
          { stem: '导线测量的布设形式包括：', options: ['闭合、附合、支导线', '只有闭合', '只有附合', '只有支'], answer: 0, explain: '三种。' },
          { stem: '坐标正反算用于：', options: ['由边长方位角算坐标及反算', '测高差', '测角', '测距'], answer: 0, explain: '正反算。' },
          { stem: 'GNSS 定位的优势是：', options: ['全天候、精度高、无需通视', '便宜', '只测高差', '只测角'], answer: 0, explain: 'GNSS。' }
        ],
        doc: { lead: '这一章讲控制。', sections: [
          { id: 'traverse', title: '导线', html: `<p>外业观测、内业计算；坐标方位角推算。</p>` },
          { id: 'gnss', title: 'GNSS', html: `<p>静态与动态；RTK 与网络 RTK。</p>` }
        ], refs: [] } },
      { title: '地形图测绘', brief: '画地面。',
        q: [
          { stem: '碎部测量的作用是：', options: ['测定地物地貌特征点', '建立控制', '测高差', '测角'], answer: 0, explain: '碎部。' },
          { stem: '等高线表示：', options: ['地面高低起伏', '地物', '边界', '道路'], answer: 0, explain: '等高线。' },
          { stem: '地形图的要素包括：', options: ['地物、地貌、注记', '只有地物', '只有地貌', '只有注记'], answer: 0, explain: '三要素。' }
        ],
        doc: { lead: '这一章讲地形。', sections: [
          { id: 'detail', title: '碎部', html: `<p>特征点选取、测绘方法；数字测图。</p>` },
          { id: 'contour', title: '等高线', html: `<p>等高距、典型地貌；地形图应用。</p>` }
        ], refs: [] } },
      { title: '施工测量', brief: '现场。',
        q: [
          { stem: '施工放样的基本工作包括：', options: ['测设已知水平角、距离、高程', '只有角度', '只有距离', '只有高程'], answer: 0, explain: '三项。' },
          { stem: '建筑物轴线投测常用：', options: ['经纬仪/全站仪或激光铅垂仪', '水准仪', '钢尺', '卷尺'], answer: 0, explain: '投测。' },
          { stem: '沉降观测的精度要求：', options: ['较高（毫米级）', '较低', '任意', '厘米级'], answer: 0, explain: '精度。' }
        ],
        doc: { lead: '这一章讲施工。', sections: [
          { id: 'setting', title: '放样', html: `<p>角度、距离、高程放样；平面与高程控制。</p>` },
          { id: 'monitoring', title: '监测', html: `<p>轴线投测、垂直度、沉降与位移观测。</p>` }
        ], refs: [] } },
      { title: '变形监测', brief: '看着它变。',
        q: [
          { stem: '变形监测的目的是：', options: ['掌握变形规律、保证安全', '装饰', '验收唯一', '算量'], answer: 0, explain: '安全。' },
          { stem: '水准基点应布设在：', options: ['稳定区域', '变形区', '建筑物上', '施工区'], answer: 0, explain: '稳定。' },
          { stem: '监测频率应：', options: ['随变形速率调整', '固定不变', '越少越好', '随意'], answer: 0, explain: '调整。' }
        ],
        doc: { lead: '这一章讲监测。', sections: [
          { id: 'design', title: '方案', html: `<p>基准点、监测点；精度与周期。</p>` },
          { id: 'analysis', title: '分析', html: `<p>变形量与速率、预警；报表。</p>` }
        ], refs: [] } },
      { title: '测量实训', brief: '动手。',
        q: [
          { stem: '测量实训的典型任务是：', options: ['闭合水准 + 导线 + 碎部测图', '只有水准', '只有导线', '只有测图'], answer: 0, explain: '综合。' },
          { stem: '实训成果应包括：', options: ['观测记录、计算表、图件', '只有记录', '只有图', '只有计算'], answer: 0, explain: '完整。' },
          { stem: '测量安全要求：', options: ['仪器保护与人身安全', '快速', '随意', '不看'], answer: 0, explain: '安全。' }
        ],
        doc: { lead: '这一章讲实训。', sections: [
          { id: 'task', title: '任务', html: `<p>控制测量、碎部测量、内业计算与成图。</p>` },
          { id: 'deliver', title: '成果', html: `<p>记录本、计算表、地形图；精度评定。</p>` }
        ], refs: [] } }
    ] },
    { name: '混凝土结构设计原理', chapters: [
      { title: '材料与基本原理', brief: '两种材料。',
        q: [
          { stem: '混凝土与钢筋共同工作的原因是：', options: ['粘结与相近的线膨胀系数', '颜色', '密度', '价格'], answer: 0, explain: '共同工作。' },
          { stem: '混凝土的立方体抗压强度是：', options: ['强度等级的依据', '弹性模量', '徐变系数', '收缩'], answer: 0, explain: '等级。' },
          { stem: '钢筋的屈服强度用于：', options: ['承载力计算的强度设计值依据', '弹性模量', '密度', '锚固'], answer: 0, explain: '设计强度。' }
        ],
        doc: { lead: '这一章讲材料。', sections: [
          { id: 'material', title: '材料', html: `<p>混凝土强度等级、应力应变；钢筋级别与力学性能。</p>` },
          { id: 'principle', title: '原理', html: `<p>粘结、锚固；极限状态设计法。</p>` }
        ], refs: [] } },
      { title: '受弯构件正截面', brief: '梁怎么弯。',
        q: [
          { stem: '适筋梁破坏的特征是：', options: ['钢筋先屈服后混凝土压碎', '混凝土先碎', '钢筋断裂', '无破坏'], answer: 0, explain: '适筋。' },
          { stem: '相对受压区高度界限值用于：', options: ['判别适筋与超筋', '计算挠度', '计算裂缝', '求配筋率'], answer: 0, explain: '界限。' },
          { stem: '最小配筋率的作用是：', options: ['防止少筋脆性破坏', '节约钢筋', '便于施工', '控制裂缝唯一'], answer: 0, explain: '少筋。' }
        ],
        doc: { lead: '这一章讲正截面。', sections: [
          { id: 'behavior', title: '受力', html: `<p>三阶段、三种破坏；基本假定。</p>` },
          { id: 'design', title: '计算', html: `<p>单筋/双筋矩形截面；T 形截面；构造要求。</p>` }
        ], refs: [] } },
      { title: '受弯构件斜截面', brief: '剪切破坏。',
        q: [
          { stem: '斜截面破坏形式包括：', options: ['斜压、剪压、斜拉', '只有斜压', '只有剪压', '只有斜拉'], answer: 0, explain: '三种。' },
          { stem: '箍筋的作用是：', options: ['抗剪、约束混凝土', '抗弯', '抗压', '抗扭唯一'], answer: 0, explain: '抗剪。' },
          { stem: '截面尺寸限制条件的目的是：', options: ['防止斜压破坏', '防裂', '省钢筋', '美观'], answer: 0, explain: '限制。' }
        ],
        doc: { lead: '这一章讲斜截面。', sections: [
          { id: 'form', title: '破坏形式', html: `<p>斜压、剪压、斜拉；影响因数。</p>` },
          { id: 'design', title: '设计', html: `<p>箍筋与弯起钢筋；截面限制与构造。</p>` }
        ], refs: [] } },
      { title: '受压构件', brief: '柱子。',
        q: [
          { stem: '轴心受压与偏心受压的区别是：', options: ['压力是否作用于截面形心', '材料', '配筋', '高度'], answer: 0, explain: '偏心。' },
          { stem: '长细比过大导致：', options: ['稳定承载力降低', '强度提高', '无影响', '裂缝减少'], answer: 0, explain: '稳定。' },
          { stem: '偏心受压构件的两种破坏是：', options: ['大偏心与小偏心', '只有大偏心', '只有小偏心', '无破坏'], answer: 0, explain: '两种。' }
        ],
        doc: { lead: '这一章讲受压。', sections: [
          { id: 'axial', title: '轴压', html: `<p>承载力公式、稳定系数；配筋构造。</p>` },
          { id: 'eccentric', title: '偏压', html: `<p>大/小偏心判别与计算；二阶效应。</p>` }
        ], refs: [] } },
      { title: '受扭与预应力', brief: '特殊情况。',
        q: [
          { stem: '受扭构件中纵筋与箍筋共同：', options: ['抵抗扭矩', '抗弯', '抗压', '抗剪唯一'], answer: 0, explain: '抗扭。' },
          { stem: '预应力混凝土的原理是：', options: ['预先施加压应力抵消拉应力', '提高混凝土强度', '减少钢筋', '加快施工'], answer: 0, explain: '预压。' },
          { stem: '预应力损失的类型包括：', options: ['张拉、收缩徐变、松弛', '只有张拉', '只有收缩', '只有松弛'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲特殊。', sections: [
          { id: 'torsion', title: '受扭', html: `<p>开裂扭矩、承载力；配筋构造。</p>` },
          { id: 'prestress', title: '预应力', html: `<p>先张与后张、损失、有效预应力；构造。</p>` }
        ], refs: [] } },
      { title: '正常使用极限状态', brief: '裂缝与挠度。',
        q: [
          { stem: '裂缝宽度与什么有关：', options: ['钢筋应力、直径、保护层', '只有应力', '只有直径', '只有保护层'], answer: 0, explain: '多因素。' },
          { stem: '挠度计算应考虑：', options: ['短期刚度与长期增长', '只有短期', '只有长期', '弹性模量唯一'], answer: 0, explain: '刚度。' },
          { stem: '裂缝控制等级分为：', options: ['三级', '两级', '四级', '五级'], answer: 0, explain: '三级。' }
        ],
        doc: { lead: '这一章讲使用。', sections: [
          { id: 'crack', title: '裂缝', html: `<p>裂缝宽度计算与控制等级；耐久性。</p>` },
          { id: 'deflection', title: '挠度', html: `<p>刚度、长期影响；限值验算。</p>` }
        ], refs: [] } },
      { title: '构造与规范', brief: '细节决定成败。',
        q: [
          { stem: '保护层厚度的作用是：', options: ['保护钢筋、防火与耐久', '美观', '省钢筋', '便于施工'], answer: 0, explain: '保护层。' },
          { stem: '钢筋锚固长度的作用：', options: ['保证钢筋与混凝土共同受力', '省材料', '便于施工', '控制裂缝'], answer: 0, explain: '锚固。' },
          { stem: '规范中的分项系数体现：', options: ['可靠度与安全储备', '经济性', '施工难度', '美观'], answer: 0, explain: '可靠度。' }
        ],
        doc: { lead: '这一章讲构造。', sections: [
          { id: 'detail', title: '构造', html: `<p>保护层、锚固、搭接；箍筋与附加钢筋。</p>` },
          { id: 'code', title: '规范', html: `<p>极限状态设计、分项系数；抗震构造。</p>` }
        ], refs: [] } },
      { title: '课程设计', brief: '设计一根梁。',
        q: [
          { stem: '受弯构件设计的步骤是：', options: ['选截面—算配筋—验算—绘施工图', '直接画图', '只算配筋', '只验算'], answer: 0, explain: '流程。' },
          { stem: '配筋计算应与什么对照：', options: ['最小配筋率与构造要求', '只有强度', '只有裂缝', '只有挠度'], answer: 0, explain: '构造。' },
          { stem: '施工图应包括：', options: ['配筋图、钢筋表、说明', '只有配筋图', '只有钢筋表', '只有说明'], answer: 0, explain: '完整。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'process', title: '流程', html: `<p>截面选择、内力计算、配筋、验算。</p>` },
          { id: 'drawing', title: '施工图', html: `<p>配筋图与钢筋表；平法表示。</p>` }
        ], refs: [] } }
    ] },
    { name: '钢结构设计原理', chapters: [
      { title: '材料与基本原理', brief: '钢材。',
        q: [
          { stem: '钢材的主要力学性能指标包括：', options: ['屈服强度、抗拉强度、伸长率', '只有屈服', '只有抗拉', '只有伸长率'], answer: 0, explain: '三指标。' },
          { stem: '钢结构相比混凝土的优点是：', options: ['强度高、自重轻、施工快', '防火好', '耐腐蚀', '便宜'], answer: 0, explain: '优势。' },
          { stem: '钢材的塑性指标是：', options: ['伸长率', '屈服强度', '弹性模量', '硬度'], answer: 0, explain: '伸长率。' }
        ],
        doc: { lead: '这一章讲材料。', sections: [
          { id: 'property', title: '性能', html: `<p>强度、塑性、韧性；冷弯与冲击功。</p>` },
          { id: 'principle', title: '原理', html: `<p>概率极限状态设计；分项系数。</p>` }
        ], refs: [] } },
      { title: '连接', brief: '焊缝与螺栓。',
        q: [
          { stem: '焊缝连接的优点是：', options: ['构造简单、省钢材、刚度大', '可拆卸', '无残余应力', '施工快'], answer: 0, explain: '焊缝。' },
          { stem: '高强螺栓的传力方式是：', options: ['摩擦型或承压型', '只有摩擦', '只有承压', '粘结'], answer: 0, explain: '两种。' },
          { stem: '焊缝的常见缺陷包括：', options: ['气孔、夹渣、未焊透、裂纹', '只有气孔', '只有夹渣', '只有裂纹'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲连接。', sections: [
          { id: 'weld', title: '焊缝', html: `<p>形式、计算；缺陷与质量等级。</p>` },
          { id: 'bolt', title: '螺栓', html: `<p>普通螺栓、高强螺栓；摩擦与承压。</p>` }
        ], refs: [] } },
      { title: '轴心受力构件', brief: '柱与拉杆。',
        q: [
          { stem: '轴心受压构件的主要破坏是：', options: ['整体失稳', '强度破坏', '局部失稳', '疲劳'], answer: 0, explain: '失稳。' },
          { stem: '长细比越大，稳定承载力：', options: ['越低', '越高', '不变', '无关'], answer: 0, explain: '长细比。' },
          { stem: '局部稳定的控制方法是：', options: ['限制板件宽厚比', '增大截面', '减少焊缝', '提高强度'], answer: 0, explain: '宽厚比。' }
        ],
        doc: { lead: '这一章讲轴心。', sections: [
          { id: 'strength', title: '强度与刚度', html: `<p>净截面验算；长细比限值。</p>` },
          { id: 'stability', title: '稳定', html: `<p>整体稳定（柱子曲线）、局部稳定（宽厚比）。</p>` }
        ], refs: [] } },
      { title: '受弯构件', brief: '钢梁。',
        q: [
          { stem: '钢梁的强度验算包括：', options: ['抗弯、抗剪、局部承压', '只有抗弯', '只有抗剪', '只有承压'], answer: 0, explain: '多项。' },
          { stem: '梁的整体失稳是：', options: ['侧向弯扭屈曲', '局部屈曲', '强度破坏', '疲劳'], answer: 0, explain: '弯扭。' },
          { stem: '提高梁整体稳定的措施：', options: ['设置侧向支撑、增大受压翼缘', '减小截面', '去掉支撑', '降低强度'], answer: 0, explain: '支撑。' }
        ],
        doc: { lead: '这一章讲受弯。', sections: [
          { id: 'strength', title: '强度', html: `<p>抗弯、抗剪、腹板局部压应力；塑性发展系数。</p>` },
          { id: 'stability', title: '稳定', html: `<p>整体稳定系数、侧向支撑；局部稳定与加劲肋。</p>` }
        ], refs: [] } },
      { title: '拉弯与压弯', brief: '组合受力。',
        q: [
          { stem: '压弯构件的设计需验算：', options: ['强度与整体稳定', '只有强度', '只有稳定', '只有变形'], answer: 0, explain: '两者。' },
          { stem: '二阶效应在压弯构件中：', options: ['不可忽略', '可忽略', '无影响', '只影响强度'], answer: 0, explain: '二阶。' },
          { stem: '框架柱的计算长度与：', options: ['柱端约束条件有关', '只有层高', '只有荷载', '只有材料'], answer: 0, explain: '计算长度。' }
        ],
        doc: { lead: '这一章讲组合。', sections: [
          { id: 'combined', title: '受力', html: `<p>拉弯、压弯；相关公式。</p>` },
          { id: 'effective', title: '计算长度', html: `<p>框架柱计算长度、二阶效应；抗震。</p>` }
        ], refs: [] } },
      { title: '抗震与构造', brief: '安全。',
        q: [
          { stem: '钢结构抗震的关键是：', options: ['延性与耗能', '强度唯一', '刚度唯一', '成本'], answer: 0, explain: '延性。' },
          { stem: '节点构造应保证：', options: ['传力可靠、避免脆性破坏', '美观', '省材料', '施工快'], answer: 0, explain: '传力。' },
          { stem: '耐火保护的措施包括：', options: ['防火涂料、包覆', '除锈', '镀锌', '喷漆'], answer: 0, explain: '防火。' }
        ],
        doc: { lead: '这一章讲抗震。', sections: [
          { id: 'seismic', title: '抗震', html: `<p>延性设计、强节点弱构件；耗能支撑。</p>` },
          { id: 'protection', title: '防护', html: `<p>防火、防腐；维护与检测。</p>` }
        ], refs: [] } },
      { title: '规范与设计实务', brief: '按规范做。',
        q: [
          { stem: '钢结构设计的依据是：', options: ['国家设计规范', '经验', '厂家样本', '软件默认'], answer: 0, explain: '规范。' },
          { stem: '荷载组合应考虑：', options: ['永久、可变、偶然', '只有永久', '只有可变', '只有偶然'], answer: 0, explain: '组合。' },
          { stem: '设计文件应包括：', options: ['计算书、施工图、说明', '只有图', '只有计算书', '只有说明'], answer: 0, explain: '完整。' }
        ],
        doc: { lead: '这一章讲规范。', sections: [
          { id: 'code', title: '规范', html: `<p>荷载与组合、承载力验算；构造规定。</p>` },
          { id: 'document', title: '文件', html: `<p>计算书、图纸、节点详图；审查要点。</p>` }
        ], refs: [] } },
      { title: '课程设计', brief: '设计一榀钢架。',
        q: [
          { stem: '钢梁设计的流程是：', options: ['内力—截面—验算—节点', '只算内力', '只选截面', '只画节点'], answer: 0, explain: '流程。' },
          { stem: '节点设计应：', options: ['与计算假定一致', '随意', '越复杂越好', '只看美观'], answer: 0, explain: '一致。' },
          { stem: '课程设计成果包括：', options: ['计算书 + 施工图', '只有计算书', '只有图', '只有报告'], answer: 0, explain: '两件。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'process', title: '流程', html: `<p>选型、内力分析、截面选择、节点设计。</p>` },
          { id: 'deliver', title: '成果', html: `<p>计算书、施工图；答辩要点。</p>` }
        ], refs: [] } }
    ] },
    { name: '土力学与地基基础', chapters: [
      { title: '土的物理性质', brief: '土是什么。',
        q: [
          { stem: '土的三个基本组成部分是：', options: ['固、液、气三相', '只有固相', '只有液相', '只有气相'], answer: 0, explain: '三相。' },
          { stem: '孔隙比与孔隙率的关系是：', options: ['e = n/(1−n)', 'e = n', 'e = 1−n', 'e = n²'], answer: 0, explain: '换算。' },
          { stem: '土的压实性用：', options: ['干密度与含水率关系曲线', '孔隙比', '饱和度', '比重'], answer: 0, explain: '击实。' }
        ],
        doc: { lead: '这一章讲性质。', sections: [
          { id: 'index', title: '指标', html: `<p>含水率、密度、比重、孔隙比；三相换算。</p>` },
          { id: 'compaction', title: '压实', html: `<p>击实曲线、最优含水率；压实度。</p>` }
        ], refs: [] } },
      { title: '渗流与固结', brief: '水在土里。',
        q: [
          { stem: '达西定律表明：', options: ['渗流速度与水力梯度成正比', '无关', '成反比', '平方'], answer: 0, explain: '达西。' },
          { stem: '渗透系数的影响因素是：', options: ['土的颗粒与孔隙特征', '只有温度', '只有水头', '只有面积'], answer: 0, explain: '渗透系数。' },
          { stem: '固结过程的本质是：', options: ['孔隙水排出、有效应力增长', '土骨架压缩唯一', '水压缩', '颗粒破碎'], answer: 0, explain: '固结。' }
        ],
        doc: { lead: '这一章讲渗流。', sections: [
          { id: 'darcy', title: '渗流', html: `<p>达西定律、渗透系数；流网与渗透力。</p>` },
          { id: 'consolidation', title: '固结', html: `<p>有效应力原理、一维固结；时间因数。</p>` }
        ], refs: [] } },
      { title: '土的压缩与抗剪', brief: '强度与变形。',
        q: [
          { stem: '土的抗剪强度由：', options: ['黏聚力与内摩擦角决定', '只有黏聚力', '只有摩擦', '孔隙比'], answer: 0, explain: '莫尔-库仑。' },
          { stem: '直剪试验的缺点是：', options: ['排水条件不易控制', '太慢', '太贵', '不能测强度'], answer: 0, explain: '直剪。' },
          { stem: '压缩模量与变形模量的关系：', options: ['两者不同，需换算', '相同', '无关', '互斥'], answer: 0, explain: '换算。' }
        ],
        doc: { lead: '这一章讲强度。', sections: [
          { id: 'compression', title: '压缩', html: `<p>压缩曲线、压缩模量；分层总和法。</p>` },
          { id: 'shear', title: '抗剪', html: `<p>莫尔-库仑准则；直剪与三轴试验。</p>` }
        ], refs: [] } },
      { title: '土压力与边坡', brief: '挡土与稳定。',
        q: [
          { stem: '朗肯土压力的三种状态是：', options: ['主动、被动、静止', '只有主动', '只有被动', '只有静止'], answer: 0, explain: '三种。' },
          { stem: '主动土压力与被动土压力的关系：', options: ['主动小于被动', '主动大于被动', '相等', '无关'], answer: 0, explain: '大小。' },
          { stem: '边坡稳定分析常用：', options: ['圆弧滑动法（条分法）', '达西定律', '固结理论', '压缩曲线'], answer: 0, explain: '条分法。' }
        ],
        doc: { lead: '这一章讲土压力。', sections: [
          { id: 'pressure', title: '土压力', html: `<p>朗肯与库仑理论；水的影响。</p>` },
          { id: 'slope', title: '边坡', html: `<p>稳定系数、条分法；支护与排水。</p>` }
        ], refs: [] } },
      { title: '地基承载力', brief: '能压多重。',
        q: [
          { stem: '地基承载力特征值由：', options: ['载荷试验、理论公式与经验确定', '只有公式', '只有经验', '只有试验'], answer: 0, explain: '多种。' },
          { stem: '地基破坏形式包括：', options: ['整体剪切、局部剪切、冲剪', '只有整体', '只有局部', '只有冲剪'], answer: 0, explain: '三种。' },
          { stem: '软弱下卧层需验算：', options: ['附加应力小于其承载力', '只有沉降', '只有强度', '无需验算'], answer: 0, explain: '下卧层。' }
        ],
        doc: { lead: '这一章讲承载力。', sections: [
          { id: 'capacity', title: '承载力', html: `<p>临塑与极限荷载、太沙基公式；深度与宽度修正。</p>` },
          { id: 'check', title: '验算', html: `<p>持力层与下卧层；软弱层处理。</p>` }
        ], refs: [] } },
      { title: '基础设计', brief: '怎么做基础。',
        q: [
          { stem: '浅基础的类型包括：', options: ['独立、条形、筏板、箱形', '只有独立', '只有条形', '只有筏板'], answer: 0, explain: '多种。' },
          { stem: '桩基础的分类依据是：', options: ['承台位置与受力方式', '材料', '直径', '深度'], answer: 0, explain: '分类。' },
          { stem: '基础埋深应考虑：', options: ['冻胀、地下水位、相邻建筑', '只有冻深', '只有水位', '只有相邻'], answer: 0, explain: '多因素。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'shallow', title: '浅基础', html: `<p>类型选择、埋深、尺寸确定；软弱地基处理。</p>` },
          { id: 'pile', title: '桩基础', html: `<p>桩型、承载力、沉降；承台设计。</p>` }
        ], refs: [] } },
      { title: '地基处理与抗震', brief: '改良与设防。',
        q: [
          { stem: '常用的地基处理方法包括：', options: ['换填、强夯、桩基、排水固结', '只有换填', '只有强夯', '只有桩基'], answer: 0, explain: '多种。' },
          { stem: '液化发生的条件是：', options: ['饱和砂土受震、孔压上升', '干燥土', '黏土', '岩石'], answer: 0, explain: '液化。' },
          { stem: '抗液化措施包括：', options: ['加密、换填、排水、桩基', '只有加密', '只有换填', '只有排水'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲处理。', sections: [
          { id: 'improvement', title: '处理', html: `<p>换填、强夯、复合地基；排水固结。</p>` },
          { id: 'liquefaction', title: '抗震', html: `<p>液化判别与处理；场地类别。</p>` }
        ], refs: [] } },
      { title: '土工试验', brief: '动手。',
        q: [
          { stem: '土的含水率测定常用：', options: ['烘干法', '比重瓶法', '环刀法', '筛分法'], answer: 0, explain: '烘干。' },
          { stem: '密度测定常用：', options: ['环刀法/灌砂法', '烘干法', '筛分法', '液塑限'], answer: 0, explain: '密度。' },
          { stem: '三轴试验可控制：', options: ['围压与排水条件', '只有围压', '只有排水', '只有速率'], answer: 0, explain: '三轴。' }
        ],
        doc: { lead: '这一章讲试验。', sections: [
          { id: 'index', title: '基本试验', html: `<p>含水率、密度、比重、颗粒分析；液塑限。</p>` },
          { id: 'strength', title: '强度试验', html: `<p>直剪、三轴（UU/CU/CD）、压缩；数据处理。</p>` }
        ], refs: [] } }
    ] },

    /* ---- 大四 ---- */
    { name: '毕业设计', chapters: [
      { title: '选题与开题', brief: '做什么。',
        q: [
          { stem: '土木毕业设计选题关键是：', options: ['问题明确、工作量适中、可交付', '题目宏大', '追热点', '导师偏好'], answer: 0, explain: '可行。' },
          { stem: '开题报告应包含：', options: ['背景、目标、方案、计划', '只有背景', '只有计划', '只有方案'], answer: 0, explain: '四要素。' },
          { stem: '常见毕设类型包括：', options: ['结构设计、施工组织、岩土、桥梁', '只有结构', '只有施工', '只有桥梁'], answer: 0, explain: '多类。' }
        ],
        doc: { lead: '这一章讲开题。', sections: [
          { id: 'topic', title: '选题', html: `<p>办公楼/住宅结构设计、施工组织设计；范围可控。</p>` },
          { id: 'proposal', title: '开题', html: `<p>背景、目标、方案、进度、风险；可行性。</p>` }
        ], refs: [] } },
      { title: '结构计算', brief: '算清楚。',
        q: [
          { stem: '框架结构设计的步骤是：', options: ['选型—荷载—内力—配筋—施工图', '直接画图', '只算内力', '只配筋'], answer: 0, explain: '流程。' },
          { stem: '荷载组合应考虑：', options: ['恒、活、风、地震', '只有恒载', '只有活载', '只有风'], answer: 0, explain: '组合。' },
          { stem: '内力分析常用：', options: ['手算近似法或电算', '只有电算', '只有手算', '查表'], answer: 0, explain: '两者。' }
        ],
        doc: { lead: '这一章讲计算。', sections: [
          { id: 'load', title: '荷载', html: `<p>恒载、活载、风与地震；传力路径。</p>` },
          { id: 'analysis', title: '内力', html: `<p>框架分析（分层法/弯矩分配）；电算校核。</p>` }
        ], refs: [] } },
      { title: '图纸与论文', brief: '表达。',
        q: [
          { stem: '结构施工图应：', options: ['符合平法标准并完整', '只有配筋', '不标注', '只画平面'], answer: 0, explain: '标准。' },
          { stem: '计算书的作用是：', options: ['记录计算依据与过程', '装饰', '替代图纸', '归档唯一'], answer: 0, explain: '依据。' },
          { stem: '论文引用规范的作用：', options: ['可追溯与诚信', '凑数', '装饰', '增加篇幅'], answer: 0, explain: '规范。' }
        ],
        doc: { lead: '这一章讲表达。', sections: [
          { id: 'drawing', title: '图纸', html: `<p>结构布置、配筋图、节点详图；平法。</p>` },
          { id: 'thesis', title: '论文', html: `<p>计算书、方案比较、结论；引用规范。</p>` }
        ], refs: [] } },
      { title: '答辩与交付', brief: '讲清楚。',
        q: [
          { stem: '答辩演示关键是：', options: ['图纸完整、计算可信', 'PPT 精美', '时长', '动画'], answer: 0, explain: '内容。' },
          { stem: '交付物应包括：', options: ['图纸、计算书、说明书', '只有图纸', '只有计算书', '只有论文'], answer: 0, explain: '完整。' },
          { stem: '被质疑时应：', options: ['承认局限并说明理由', '争辩', '回避', '改口'], answer: 0, explain: '诚恳。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'demo', title: '陈述', html: `<p>10 分钟：工程概况—方案—计算—图纸。</p>` },
          { id: 'qa', title: '问答', html: `<p>准备规范与构造问题；不会就说思路。</p>` }
        ], refs: [] } }
    ] },
    { name: '专业实习', chapters: [
      { title: '岗位与现场', brief: '工地与设计院。',
        q: [
          { stem: '土木实习的常见岗位不包括：', options: ['施工员', '结构设计', '监理', '外科医生'], answer: 3, explain: '无关。' },
          { stem: '选择实习最该看：', options: ['能否参与真实项目', '名气', '工资', '通勤'], answer: 0, explain: '实战。' },
          { stem: '工地实习常见起点是：', options: ['跟班学习工序与验收', '直接做主设计', '只写资料', '只开会'], answer: 0, explain: '跟班。' }
        ],
        doc: { lead: '这一章讲岗位。', sections: [
          { id: 'roles', title: '岗位', html: `<p>施工、监理、设计、造价；职责与技能。</p>` },
          { id: 'onboard', title: '上手', html: `<p>看图纸、认工序、学验收；记录与提问。</p>` }
        ], refs: [] } },
      { title: '施工与验收', brief: '怎么建。',
        q: [
          { stem: '隐蔽工程验收的作用是：', options: ['覆盖前确认质量', '装饰', '加快', '省检'], answer: 0, explain: '隐蔽。' },
          { stem: '混凝土浇筑的关键控制是：', options: ['配合比、振捣、养护', '只有振捣', '只有配合比', '只有养护'], answer: 0, explain: '三控。' },
          { stem: '钢筋工程验收要点：', options: ['规格、数量、间距、锚固', '只有规格', '只有数量', '只有间距'], answer: 0, explain: '多项。' }
        ],
        doc: { lead: '这一章讲施工。', sections: [
          { id: 'process', title: '工序', html: `<p>土方、模板、钢筋、混凝土、砌体；关键工序。</p>` },
          { id: 'acceptance', title: '验收', html: `<p>隐蔽验收、检验批；资料与实测。</p>` }
        ], refs: [] } },
      { title: '安全与规范', brief: '安全第一。',
        q: [
          { stem: '进入施工现场必须：', options: ['戴安全帽并遵守规程', '随意', '只看手机', '单独行动'], answer: 0, explain: '规程。' },
          { stem: '高处作业的定义是：', options: ['坠落高度基准面 2 m 以上', '1 m', '3 m', '5 m'], answer: 0, explain: '2 m。' },
          { stem: '危大工程应：', options: ['编制专项方案并论证', '口头交底', '不用方案', '随意施工'], answer: 0, explain: '专项方案。' }
        ],
        doc: { lead: '这一章讲安全。', sections: [
          { id: 'safety', title: '安全', html: `<p>三宝四口五临边；高处与用电；危大工程。</p>` },
          { id: 'code', title: '规范', html: `<p>施工规范与验收标准；资料管理。</p>` }
        ], refs: [] } },
      { title: '实习复盘', brief: '留下什么。',
        q: [
          { stem: '实习应留下的成果是：', options: ['施工日志、图纸学习笔记、复盘', '工牌', '照片', '评语'], answer: 0, explain: '成果。' },
          { stem: '实习日志推荐写法：', options: ['问题—做法—结果—反思', '流水账', '只写结论', '只写感受'], answer: 0, explain: '结构化。' },
          { stem: '面试讲项目最佳结构：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'output', title: '成果', html: `<p>日志、工序记录、质量检查表；可量化。</p>` },
          { id: 'review', title: '复盘', html: `<p>每周五行；讲清你的贡献与学到的东西。</p>` }
        ], refs: [] } }
    ] },
    { name: '考研与求职', chapters: [
      { title: '考研方向', brief: '土木与交叉。',
        q: [
          { stem: '土木考研的常见方向是：', options: ['结构工程、岩土工程、桥梁与隧道、土木水利专硕', '只有结构', '只有岩土', '只有桥梁'], answer: 0, explain: '多方向。' },
          { stem: '结构力学在考研中的地位：', options: ['专业课核心', '不重要', '只考其一', '只考公共课'], answer: 0, explain: '核心。' },
          { stem: '择校最应考虑：', options: ['方向、导师与真题风格', '城市', '学费', '宿舍'], answer: 0, explain: '匹配。' }
        ],
        doc: { lead: '这一章讲方向。', sections: [
          { id: 'paths', title: '方向', html: `<p>结构、岩土、桥隧、市政、防灾；专硕。</p>` },
          { id: 'subjects', title: '科目', html: `<p>政治、英语、数学一、专业课（结构力学/材料力学）。</p>` }
        ], refs: [] } },
      { title: '专业课复习', brief: '力学。',
        q: [
          { stem: '结构力学复习主线：', options: ['组成—静定—位移—超静定—动力', '只做计算', '只背公式', '只看真题'], answer: 0, explain: '主线。' },
          { stem: '材料力学复习重点：', options: ['拉压、扭转、弯曲、组合变形', '只有拉压', '只有弯曲', '只有组合'], answer: 0, explain: '四大块。' },
          { stem: '计算题关键：', options: ['受力分析 + 公式正确', '猜', '背答案', '跳过'], answer: 0, explain: '分析。' }
        ],
        doc: { lead: '这一章讲复习。', sections: [
          { id: 'structure', title: '结构力学', html: `<p>几何组成、静定、虚功、力法位移法、影响线。</p>` },
          { id: 'material', title: '材料力学', html: `<p>应力应变、弯曲、组合变形、稳定。</p>` }
        ], refs: [] } },
      { title: '求职方向', brief: '设计、施工、地产。',
        q: [
          { stem: '土木毕业生的常见去向不包括：', options: ['设计院', '施工单位', '地产/监理', '外科医生'], answer: 3, explain: '专业限制。' },
          { stem: '设计院看重：', options: ['力学基础、制图与软件', '只有编程', '只有英语', '只有证书'], answer: 0, explain: '专业。' },
          { stem: '求职最加分的材料：', options: ['项目与图纸/实习经历', '证书数量', '成绩单', '社团'], answer: 0, explain: '经历。' }
        ],
        doc: { lead: '这一章讲就业。', sections: [
          { id: 'paths', title: '路径', html: `<p>设计院、施工、地产、监理、造价、公务员。</p>` },
          { id: 'skills', title: '能力', html: `<p>CAD/PKPM/YJK、识图、规范；现场经验。</p>` }
        ], refs: [] } },
      { title: '面试', brief: '技术与表达。',
        q: [
          { stem: '土木面试常考：', options: ['力学、构造与规范', '只有编程', '只有英语', '只有性格'], answer: 0, explain: '专业。' },
          { stem: '讲项目最佳结构：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' },
          { stem: '被问到不会的问题应：', options: ['说明思路并诚实承认', '编造', '沉默', '转移话题'], answer: 0, explain: '诚实。' }
        ],
        doc: { lead: '这一章讲面试。', sections: [
          { id: 'tech', title: '技术', html: `<p>结构概念、构造要求、施工工艺；看图。</p>` },
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
