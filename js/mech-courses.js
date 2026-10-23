/* ==========================================================
   mech-courses.js · 机械设计制造及其自动化：12 门课（8/4）= 84 关
   ========================================================== */

(function () {
  var MAJOR = 'engineering-机械设计制造及其自动化';
  var TITLES = stageTitlesOf('engineering');

  var COURSES = [
    { name: '机械制图', chapters: [
      { title: '制图基础', brief: '工程的语言。',
        q: [
          { stem: '三视图的投影规律是：', options: ['长对正、高平齐、宽相等', '长相等、高相等', '任意', '只看主视图'], answer: 0, explain: '三视图。' },
          { stem: '第一角投影与第三角投影的区别是：', options: ['视图配置位置不同', '比例', '线型', '图幅'], answer: 0, explain: '配置。' },
          { stem: '图线的粗实线通常表示：', options: ['可见轮廓线', '尺寸线', '中心线', '不可见轮廓'], answer: 0, explain: '粗实线。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'projection', title: '投影', html: `<p>正投影、三视图、六面视图；投影规律。</p>` },
          { id: 'lines', title: '图线', html: `<p>粗实线、细实线、虚线、点画线；线型与应用。</p>` }
        ], refs: [] } },
      { title: '表达方法', brief: '怎么画清楚。',
        q: [
          { stem: '剖视图的作用是：', options: ['表达内部结构', '放大', '美观', '省略尺寸'], answer: 0, explain: '内部。' },
          { stem: '断面图与剖视图的区别是：', options: ['是否画出后面的轮廓', '比例', '线型', '图幅'], answer: 0, explain: '断面。' },
          { stem: '局部放大图用于：', options: ['放大细小结构', '表达整体', '装配', '剖切'], answer: 0, explain: '放大。' }
        ],
        doc: { lead: '这一章讲表达。', sections: [
          { id: 'section', title: '剖视', html: `<p>全剖、半剖、局部剖；剖面符号。</p>` },
          { id: 'detail', title: '简化与放大', html: `<p>断面图、局部放大、简化画法。</p>` }
        ], refs: [] } },
      { title: '尺寸与公差', brief: '精确要求。',
        q: [
          { stem: '尺寸公差带由什么确定？', options: ['基本偏差与公差等级', '只有基本偏差', '只有等级', '材料'], answer: 0, explain: '两要素。' },
          { stem: '配合的类型有：', options: ['间隙、过渡、过盈', '只有间隙', '只有过渡', '只有过盈'], answer: 0, explain: '三类。' },
          { stem: '表面粗糙度影响：', options: ['配合性质与耐磨性', '只有外观', '只有重量', '只有材料'], answer: 0, explain: '功能。' }
        ],
        doc: { lead: '这一章讲公差。', sections: [
          { id: 'tolerance', title: '公差', html: `<p>尺寸公差、配合制；标注方法。</p>` },
          { id: 'surface', title: '表面', html: `<p>粗糙度、几何公差；标注与识读。</p>` }
        ], refs: [] } },
      { title: '零件图', brief: '造一个零件。',
        q: [
          { stem: '零件图应包含：', options: ['视图、尺寸、技术要求、标题栏', '只有视图', '只有尺寸', '只有标题栏'], answer: 0, explain: '四部分。' },
          { stem: '技术要求通常包括：', options: ['材料、热处理、表面处理', '只有材料', '只有热处理', '只有表面'], answer: 0, explain: '多项。' },
          { stem: '轴类零件的常见表达是：', options: ['主视图 + 断面/局部放大', '只有主视图', '只有剖视', '只有轴测图'], answer: 0, explain: '轴类。' }
        ],
        doc: { lead: '这一章讲零件。', sections: [
          { id: 'drawing', title: '零件图', html: `<p>视图选择、尺寸标注、技术要求；典型零件。</p>` },
          { id: 'typical', title: '典型件', html: `<p>轴、盘盖、叉架、箱体；表达要点。</p>` }
        ], refs: [] } },
      { title: '装配图', brief: '装成机器。',
        q: [
          { stem: '装配图的作用是：', options: ['表达装配关系与工作原理', '加工零件', '热处理', '检验'], answer: 0, explain: '装配。' },
          { stem: '装配图的序号与明细表对应：', options: ['零件编号', '尺寸', '材料', '重量'], answer: 0, explain: '编号。' },
          { stem: '装配图中零件的接触面应：', options: ['只画一条轮廓线', '画两条', '不画', '虚线'], answer: 0, explain: '一条。' }
        ],
        doc: { lead: '这一章讲装配。', sections: [
          { id: 'assembly', title: '装配图', html: `<p>视图表达、序号与明细栏；配合尺寸。</p>` },
          { id: 'reading', title: '读图', html: `<p>拆画零件图、分析装配关系；常见错误。</p>` }
        ], refs: [] } },
      { title: '计算机绘图', brief: 'CAD。',
        q: [
          { stem: 'CAD 绘图的优势是：', options: ['精确、易修改、可复用', '便宜', '不需要标准', '不用标注'], answer: 0, explain: '效率。' },
          { stem: '图层的作用是：', options: ['分类管理线型与颜色', '加密', '压缩', '打印'], answer: 0, explain: '图层。' },
          { stem: '参数化建模的核心是：', options: ['尺寸驱动几何', '手动绘制', '只画线', '只标注'], answer: 0, explain: '参数化。' }
        ],
        doc: { lead: '这一章讲 CAD。', sections: [
          { id: 'cad', title: '二维绘图', html: `<p>图层、块、标注样式；标准图框。</p>` },
          { id: 'parametric', title: '三维建模', html: `<p>参数化、特征建模、装配；出工程图。</p>` }
        ], refs: [] } },
      { title: '标准件与常用件', brief: '不用画全。',
        q: [
          { stem: '螺纹的规定画法是：', options: ['简化/示意画法', '精确画螺旋', '不画', '只画中心线'], answer: 0, explain: '规定画法。' },
          { stem: '齿轮的要素包括：', options: ['模数、齿数、压力角', '只有模数', '只有齿数', '只有压力角'], answer: 0, explain: '参数。' },
          { stem: '键与销属于：', options: ['标准件', '专用件', '外购件唯一', '非标件'], answer: 0, explain: '标准件。' }
        ],
        doc: { lead: '这一章讲标准件。', sections: [
          { id: 'thread', title: '螺纹', html: `<p>规定画法、标注；螺栓连接。</p>` },
          { id: 'gear', title: '齿轮与键销', html: `<p>齿轮参数与画法；键、销、轴承。</p>` }
        ], refs: [] } },
      { title: '制图综合训练', brief: '多画。',
        q: [
          { stem: '读零件图的顺序是：', options: ['看标题栏—分析视图—看尺寸—看技术要求', '只看尺寸', '只看视图', '只看标题'], answer: 0, explain: '顺序。' },
          { stem: '常见制图错误包括：', options: ['线型混用、尺寸重复、投影错误', '只有线型', '只有尺寸', '只有投影'], answer: 0, explain: '多种。' },
          { stem: '提高制图能力的关键是：', options: ['多画多读、对照标准', '只背标准', '只画一遍', '只看视频'], answer: 0, explain: '练习。' }
        ],
        doc: { lead: '这一章讲训练。', sections: [
          { id: 'reading', title: '读图', html: `<p>读零件图与装配图；形体分析法。</p>` },
          { id: 'errors', title: '常见错误', html: `<p>线型、尺寸、投影、公差标注；检查清单。</p>` }
        ], refs: [] } }
    ] },
    { name: '理论力学', chapters: [
      { title: '静力学基础', brief: '平衡。',
        q: [
          { stem: '二力杆的受力方向是：', options: ['沿杆轴线', '垂直杆', '任意', '沿切线'], answer: 0, explain: '轴线。' },
          { stem: '约束力的方向与约束方向：', options: ['相反', '相同', '垂直', '无关'], answer: 0, explain: '相反。' },
          { stem: '力偶的特性是：', options: ['对物体只产生转动效应', '只产生移动', '无效应', '等于零'], answer: 0, explain: '转动。' }
        ],
        doc: { lead: '这一章讲静力。', sections: [
          { id: 'force', title: '受力分析', html: `<p>约束类型、受力图；二力杆。</p>` },
          { id: 'equilibrium', title: '平衡', html: `<p>力系简化、平衡方程；力偶与力矩。</p>` }
        ], refs: [] } },
      { title: '摩擦与重心', brief: '实际问题。',
        q: [
          { stem: '滑动摩擦力的最大值是：', options: ['fs·N', 'N', 'fs/N', '0'], answer: 0, explain: 'fN。' },
          { stem: '摩擦角的正切等于：', options: ['摩擦系数', '摩擦角', '正压力', '重量'], answer: 0, explain: 'tanφ=f。' },
          { stem: '重心的求解方法包括：', options: ['积分法、分割法、实验法', '只有积分', '只有分割', '只有实验'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲摩擦。', sections: [
          { id: 'friction', title: '摩擦', html: `<p>滑动摩擦、摩擦角与自锁；滚动摩擦。</p>` },
          { id: 'centroid', title: '重心', html: `<p>重心与形心；组合体；稳定性。</p>` }
        ], refs: [] } },
      { title: '运动学', brief: '描述运动。',
        q: [
          { stem: '点的速度是：', options: ['位置对时间的导数', '加速度', '位移', '路程'], answer: 0, explain: '导数。' },
          { stem: '刚体平动时各点：', options: ['速度加速度相同', '速度不同', '加速度不同', '轨迹不同'], answer: 0, explain: '平动。' },
          { stem: '定轴转动时点的加速度包含：', options: ['切向与法向分量', '只有切向', '只有法向', '无分量'], answer: 0, explain: '两分量。' }
        ],
        doc: { lead: '这一章讲运动学。', sections: [
          { id: 'kinematics', title: '点的运动', html: `<p>速度、加速度；自然坐标与直角坐标。</p>` },
          { id: 'rigid', title: '刚体运动', html: `<p>平动、定轴转动；角量与线量关系。</p>` }
        ], refs: [] } },
      { title: '点的合成运动', brief: '换参考系。',
        q: [
          { stem: '绝对速度等于：', options: ['相对速度与牵连速度的矢量和', '相对速度', '牵连速度', '两者之差'], answer: 0, explain: '合成。' },
          { stem: '科氏加速度产生于：', options: ['牵连转动与相对运动', '平动', '静止', '匀速'], answer: 0, explain: '科氏。' },
          { stem: '合成运动分析的步骤是：', options: ['选系—分析三种运动—速度合成—加速度合成', '只有速度', '只有加速度', '直接计算'], answer: 0, explain: '步骤。' }
        ],
        doc: { lead: '这一章讲合成。', sections: [
          { id: 'velocity', title: '速度合成', html: `<p>绝对、相对、牵连；速度合成定理。</p>` },
          { id: 'acceleration', title: '加速度合成', html: `<p>科氏加速度；方向判定。</p>` }
        ], refs: [] } },
      { title: '动力学基本定律', brief: '力与运动。',
        q: [
          { stem: '牛顿第二定律的表达式是：', options: ['F = ma', 'F = mv', 'F = m/a', 'F = a/m'], answer: 0, explain: 'F=ma。' },
          { stem: '惯性力的引入用于：', options: ['把动力学问题化为静力平衡', '增加力', '减少质量', '改变加速度'], answer: 0, explain: '达朗贝尔。' },
          { stem: '动量定理的表达式是：', options: ['ΣF = d(mv)/dt', 'F = ma²', 'F = mv', 'F = 0'], answer: 0, explain: '动量。' }
        ],
        doc: { lead: '这一章讲动力学。', sections: [
          { id: 'newton', title: '牛顿定律', html: `<p>运动微分方程；初始条件。</p>` },
          { id: 'theorems', title: '基本定理', html: `<p>动量、动量矩、动能定理；达朗贝尔原理。</p>` }
        ], refs: [] } },
      { title: '刚体动力学', brief: '转动。',
        q: [
          { stem: '转动惯量取决于：', options: ['质量分布与转轴', '只有质量', '只有形状', '只有角速度'], answer: 0, explain: '分布。' },
          { stem: '刚体定轴转动微分方程是：', options: ['M = Iβ', 'F = ma', 'M = Iω', 'M = I/β'], answer: 0, explain: 'M=Iβ。' },
          { stem: '平行轴定理用于：', options: ['平移转轴求转动惯量', '求质心', '求力矩', '求速度'], answer: 0, explain: '平行轴。' }
        ],
        doc: { lead: '这一章讲刚体。', sections: [
          { id: 'moment', title: '转动惯量', html: `<p>计算、平行轴定理；回转半径。</p>` },
          { id: 'rotation', title: '转动方程', html: `<p>定轴转动、平面运动；动能与功率。</p>` }
        ], refs: [] } },
      { title: '振动与碰撞', brief: '特殊过程。',
        q: [
          { stem: '单自由度无阻尼振动的频率取决于：', options: ['质量与刚度', '振幅', '初相', '能量'], answer: 0, explain: '固有。' },
          { stem: '恢复系数衡量：', options: ['碰撞的弹性程度', '质量', '速度', '力'], answer: 0, explain: '恢复系数。' },
          { stem: '碰撞中动量：', options: ['守恒', '不守恒', '只在弹性时守恒', '随机'], answer: 0, explain: '守恒。' }
        ],
        doc: { lead: '这一章讲振动。', sections: [
          { id: 'vibration', title: '振动', html: `<p>自由振动、阻尼、受迫；共振。</p>` },
          { id: 'impact', title: '碰撞', html: `<p>恢复系数、动量守恒；能量损失。</p>` }
        ], refs: [] } },
      { title: '综合训练', brief: '把力学用起来。',
        q: [
          { stem: '力学题的第一步是：', options: ['受力分析与研究对象选择', '列方程', '计算', '检查'], answer: 0, explain: '分析。' },
          { stem: '静力学与动力学的分界是：', options: ['是否考虑加速度', '是否有力', '是否有约束', '是否平衡'], answer: 0, explain: '加速度。' },
          { stem: '检查结果的方法包括：', options: ['量纲、极限情形、能量检验', '猜', '背', '跳过'], answer: 0, explain: '检验。' }
        ],
        doc: { lead: '这一章讲训练。', sections: [
          { id: 'method', title: '方法', html: `<p>研究对象、受力图、方程；一题多解。</p>` },
          { id: 'check', title: '检验', html: `<p>量纲、极限、能量；常见错误。</p>` }
        ], refs: [] } }
    ] },
    { name: '高等数学（工科）', chapters: [
      { title: '极限与连续', brief: '基础。',
        q: [
          { stem: 'lim(x→0) sinx/x 等于：', options: ['1', '0', '∞', '不存在'], answer: 0, explain: '重要极限。' },
          { stem: '连续函数在闭区间上：', options: ['有界且可取最值', '必可导', '必单调', '无最值'], answer: 0, explain: '性质。' },
          { stem: '等价无穷小替换适用于：', options: ['乘除', '加减', '任意', '只有极限'], answer: 0, explain: '乘除。' }
        ],
        doc: { lead: '这一章讲极限。', sections: [
          { id: 'limit', title: '极限', html: `<p>定义、法则、两个重要极限。</p>` },
          { id: 'continuity', title: '连续', html: `<p>连续与间断；闭区间性质。</p>` }
        ], refs: [] } },
      { title: '导数与微分', brief: '变化率。',
        q: [
          { stem: '可导与连续的关系是：', options: ['可导必连续', '等价', '连续必可导', '无关'], answer: 0, explain: '蕴含。' },
          { stem: '微分是：', options: ['增量的线性主部', '导数', '积分', '极限'], answer: 0, explain: '线性主部。' },
          { stem: '洛必达法则适用于：', options: ['0/0 或 ∞/∞ 型', '所有极限', '只有 0/0', '只有 ∞/∞'], answer: 0, explain: '未定式。' }
        ],
        doc: { lead: '这一章讲导数。', sections: [
          { id: 'derivative', title: '导数', html: `<p>定义、法则；隐函数、参数方程。</p>` },
          { id: 'application', title: '应用', html: `<p>极值、最优化、中值定理。</p>` }
        ], refs: [] } },
      { title: '积分', brief: '累积。',
        q: [
          { stem: '牛顿-莱布尼茨公式是：', options: ['∫ₐᵇf = F(b) − F(a)', 'F(a) − F(b)', 'f(b) − f(a)', '∫f′'], answer: 0, explain: '公式。' },
          { stem: '分部积分公式是：', options: ['∫u dv = uv − ∫v du', 'uv + ∫v du', '∫u∫v', 'u′v′'], answer: 0, explain: '分部。' },
          { stem: '定积分可计算：', options: ['面积、体积、功', '只有面积', '只有体积', '导数'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲积分。', sections: [
          { id: 'indefinite', title: '不定积分', html: `<p>换元、分部。</p>` },
          { id: 'definite', title: '定积分', html: `<p>性质与计算；应用。</p>` }
        ], refs: [] } },
      { title: '多元函数', brief: '多维。',
        q: [
          { stem: '全微分的充分条件是：', options: ['偏导连续', '偏导存在', '连续', '有界'], answer: 0, explain: '充分。' },
          { stem: '条件极值用：', options: ['拉格朗日乘数法', '洛必达', '泰勒', '积分'], answer: 0, explain: '乘数法。' },
          { stem: '梯度方向是：', options: ['函数增长最快方向', '等值线方向', '任意', '垂直'], answer: 0, explain: '梯度。' }
        ],
        doc: { lead: '这一章讲多元。', sections: [
          { id: 'differential', title: '微分', html: `<p>偏导、全微分、链式、梯度。</p>` },
          { id: 'extremum', title: '极值', html: `<p>无条件与条件极值；最小二乘。</p>` }
        ], refs: [] } },
      { title: '重积分与曲线积分', brief: '累积。',
        q: [
          { stem: '极坐标面积元素是：', options: ['r dr dθ', 'dr dθ', 'r² dr dθ', 'dθ'], answer: 0, explain: '雅可比。' },
          { stem: '格林公式联系：', options: ['曲线积分与二重积分', '三重积分', '级数', '导数'], answer: 0, explain: '格林。' },
          { stem: '重积分可计算：', options: ['质量、质心、转动惯量', '只有质量', '只有质心', '导数'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲重积分。', sections: [
          { id: 'multiple', title: '重积分', html: `<p>二重、三重；坐标变换。</p>` },
          { id: 'application', title: '应用', html: `<p>质量、质心、转动惯量；曲线积分。</p>` }
        ], refs: [] } },
      { title: '微分方程', brief: '动态建模。',
        q: [
          { stem: '可分离变量方程解法是：', options: ['分离后两边积分', '直接积分', '求导', '代入'], answer: 0, explain: '分离。' },
          { stem: '一阶线性方程用：', options: ['积分因子法', '分离变量', '特征方程', '级数'], answer: 0, explain: '积分因子。' },
          { stem: '二阶常系数方程解由：', options: ['特征根决定', '初值唯一', '常数项', '次数'], answer: 0, explain: '特征根。' }
        ],
        doc: { lead: '这一章讲方程。', sections: [
          { id: 'first', title: '一阶', html: `<p>可分离、线性；建模。</p>` },
          { id: 'second', title: '二阶', html: `<p>常系数、特征根；振动应用。</p>` }
        ], refs: [] } },
      { title: '级数与拉氏变换', brief: '工具。',
        q: [
          { stem: 'p 级数收敛条件是：', options: ['p > 1', 'p < 1', 'p = 1', '任意'], answer: 0, explain: 'p>1。' },
          { stem: '傅里叶级数用于：', options: ['周期信号展开', '任意函数', '只有多项式', '只有指数'], answer: 0, explain: '周期。' },
          { stem: '拉氏变换用于：', options: ['解微分方程', '求积分', '判敛', '几何'], answer: 0, explain: '变换。' }
        ],
        doc: { lead: '这一章讲级数。', sections: [
          { id: 'series', title: '级数', html: `<p>判别法、幂级数。</p>` },
          { id: 'laplace', title: '拉氏变换', html: `<p>性质、逆变换；解方程。</p>` }
        ], refs: [] } },
      { title: '工程计算与训练', brief: '算得准。',
        q: [
          { stem: '工程计算中量纲的作用是：', options: ['检验结果、统一单位', '装饰', '加速', '简化唯一'], answer: 0, explain: '量纲。' },
          { stem: 'MATLAB 在工科中的作用是：', options: ['计算与仿真', '排版', '绘图唯一', '装饰'], answer: 0, explain: '工具。' },
          { stem: '提高计算能力的关键是：', options: ['多练 + 总结题型', '只看书', '只背公式', '只做选择'], answer: 0, explain: '练习。' }
        ],
        doc: { lead: '这一章讲训练。', sections: [
          { id: 'compute', title: '计算', html: `<p>典型题型、换元与分部；数值方法初步。</p>` },
          { id: 'tools', title: '工具', html: `<p>MATLAB/Python；符号计算与绘图。</p>` }
        ], refs: [] } }
    ] },
    { name: '材料力学', chapters: [
      { title: '基本概念', brief: '应力与应变。',
        q: [
          { stem: '应力的定义是：', options: ['内力集度', '变形量', '力', '位移'], answer: 0, explain: '集度。' },
          { stem: '正应力与切应力的区别是：', options: ['是否垂直于截面', '大小', '方向唯一', '材料'], answer: 0, explain: '垂直。' },
          { stem: '胡克定律适用条件：', options: ['线弹性范围', '塑性阶段', '断裂', '任意'], answer: 0, explain: '线弹性。' }
        ],
        doc: { lead: '这一章讲概念。', sections: [
          { id: 'stress', title: '应力应变', html: `<p>内力、应力、应变；弹性模量与泊松比。</p>` },
          { id: 'assumption', title: '基本假设', html: `<p>连续性、均匀性、各向同性、小变形。</p>` }
        ], refs: [] } },
      { title: '拉伸与压缩', brief: '最基本的受力。',
        q: [
          { stem: '低碳钢拉伸曲线的阶段包括：', options: ['弹性、屈服、强化、颈缩', '只有弹性', '只有屈服', '只有强化'], answer: 0, explain: '四阶段。' },
          { stem: '许用应力由什么确定？', options: ['极限应力除以安全系数', '极限应力', '弹性极限', '比例极限'], answer: 0, explain: '安全系数。' },
          { stem: '拉压变形公式是：', options: ['ΔL = FL/(EA)', 'ΔL = F/A', 'ΔL = EA/F', 'ΔL = FL'], answer: 0, explain: '公式。' }
        ],
        doc: { lead: '这一章讲拉压。', sections: [
          { id: 'curve', title: '应力应变曲线', html: `<p>比例极限、屈服、强度；塑性材料与脆性材料。</p>` },
          { id: 'strength', title: '强度计算', html: `<p>强度条件、安全系数；变形与刚度。</p>` }
        ], refs: [] } },
      { title: '剪切与扭转', brief: '横向受力。',
        q: [
          { stem: '圆轴扭转的切应力沿半径：', options: ['线性分布', '均匀', '抛物线', '为零'], answer: 0, explain: '线性。' },
          { stem: '扭转角与什么成正比？', options: ['扭矩与长度，反比于 GIp', '扭矩唯一', '长度唯一', '直径'], answer: 0, explain: '公式。' },
          { stem: '剪切胡克定律是：', options: ['τ = Gγ', 'τ = Eε', 'τ = σ', 'τ = F/A'], answer: 0, explain: '剪切。' }
        ],
        doc: { lead: '这一章讲剪切。', sections: [
          { id: 'shear', title: '剪切', html: `<p>剪应力、挤压；连接件强度。</p>` },
          { id: 'torsion', title: '扭转', html: `<p>扭矩图、切应力、扭转角；极惯性矩。</p>` }
        ], refs: [] } },
      { title: '弯曲内力', brief: '梁的受力。',
        q: [
          { stem: '剪力图与弯矩图的关系是：', options: ['弯矩图斜率等于剪力', '无关', '相同', '相反'], answer: 0, explain: '微分关系。' },
          { stem: '简支梁受集中力时最大弯矩在：', options: ['集中力作用处', '支座处', '跨中唯一', '端点'], answer: 0, explain: '集中力。' },
          { stem: '纯弯曲时横截面正应力沿高度：', options: ['线性分布', '均匀', '抛物线', '为零'], answer: 0, explain: '线性。' }
        ],
        doc: { lead: '这一章讲内力。', sections: [
          { id: 'diagram', title: '内力图', html: `<p>剪力、弯矩；微分关系与作图。</p>` },
          { id: 'stress', title: '弯曲应力', html: `<p>正应力公式、抗弯截面系数；强度条件。</p>` }
        ], refs: [] } },
      { title: '弯曲变形', brief: '挠度。',
        q: [
          { stem: '挠曲线近似微分方程是：', options: ['EIw″ = M', 'EIw′ = M', 'EIw = M', 'w″ = M'], answer: 0, explain: 'EIw″=M。' },
          { stem: '提高梁刚度的措施包括：', options: ['增大截面惯性矩、减小跨度', '增大载荷', '减小截面', '增加悬臂'], answer: 0, explain: '刚度。' },
          { stem: '叠加法用于：', options: ['求复杂载荷下的变形', '求内力唯一', '求应力唯一', '求稳定'], answer: 0, explain: '叠加。' }
        ],
        doc: { lead: '这一章讲变形。', sections: [
          { id: 'deflection', title: '挠度', html: `<p>微分方程、积分法；叠加法。</p>` },
          { id: 'stiffness', title: '刚度', html: `<p>刚度条件、合理截面；超静定初步。</p>` }
        ], refs: [] } },
      { title: '应力状态与强度理论', brief: '复杂受力。',
        q: [
          { stem: '主应力的定义是：', options: ['切应力为零的面上正应力', '最大正应力', '最大切应力', '平均应力'], answer: 0, explain: '主应力。' },
          { stem: '第四强度理论适用于：', options: ['塑性材料（畸变能）', '脆性材料', '铸铁', '混凝土'], answer: 0, explain: '畸变能。' },
          { stem: '莫尔圆用于：', options: ['表示应力状态', '求内力', '求变形', '求稳定'], answer: 0, explain: '莫尔圆。' }
        ],
        doc: { lead: '这一章讲强度。', sections: [
          { id: 'state', title: '应力状态', html: `<p>二向/三向应力状态；主平面与莫尔圆。</p>` },
          { id: 'theory', title: '强度理论', html: `<p>四个强度理论；相当应力与选用。</p>` }
        ], refs: [] } },
      { title: '组合变形与稳定', brief: '实际构件。',
        q: [
          { stem: '拉弯组合变形的处理方法是：', options: ['叠加各基本变形应力', '只算拉', '只算弯', '求平均'], answer: 0, explain: '叠加。' },
          { stem: '压杆失稳的临界力由：', options: ['欧拉公式（细长杆）', '强度条件', '刚度条件', '经验唯一'], answer: 0, explain: '欧拉。' },
          { stem: '提高压杆稳定性的措施包括：', options: ['减小计算长度、增大惯性矩', '增大载荷', '减小截面', '增加偏心'], answer: 0, explain: '稳定。' }
        ],
        doc: { lead: '这一章讲组合。', sections: [
          { id: 'combined', title: '组合变形', html: `<p>拉弯、弯扭、偏心压缩；叠加法。</p>` },
          { id: 'stability', title: '稳定', html: `<p>欧拉公式、柔度；折减系数法。</p>` }
        ], refs: [] } },
      { title: '材料力学实验', brief: '动手。',
        q: [
          { stem: '拉伸实验可测：', options: ['弹性模量、屈服强度、延伸率', '只有模量', '只有强度', '只有延伸率'], answer: 0, explain: '多项。' },
          { stem: '应变片测量应变的原理是：', options: ['电阻随应变变化', '电容变化', '电感变化', '光强变化'], answer: 0, explain: '应变片。' },
          { stem: '实验数据处理应：', options: ['剔除异常并分析误差', '挑选', '编造', '忽略'], answer: 0, explain: '处理。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'experiment', title: '实验', html: `<p>拉伸、压缩、扭转；应变片与电桥。</p>` },
          { id: 'analysis', title: '分析', html: `<p>数据处理、误差分析；与理论对比。</p>` }
        ], refs: [] } }
    ] },
    { name: '机械原理', chapters: [
      { title: '机构的结构分析', brief: '怎么动。',
        q: [
          { stem: '自由度的计算公式是：', options: ['F = 3n − 2PL − PH', 'F = 3n', 'F = 2n − PL', 'F = n'], answer: 0, explain: '公式。' },
          { stem: '虚约束的作用是：', options: ['增加刚性但不影响运动', '增加自由度', '减少零件', '改变运动'], answer: 0, explain: '虚约束。' },
          { stem: '机构具有确定运动的条件是：', options: ['自由度等于原动件数', '自由度大于零', '自由度小于零', '任意'], answer: 0, explain: '条件。' }
        ],
        doc: { lead: '这一章讲结构。', sections: [
          { id: 'dof', title: '自由度', html: `<p>运动副、约束；计算公式与注意事项。</p>` },
          { id: 'diagram', title: '机构简图', html: `<p>绘制步骤；虚约束与局部自由度。</p>` }
        ], refs: [] } },
      { title: '平面连杆机构', brief: '四杆。',
        q: [
          { stem: '曲柄存在的条件是：', options: ['最短杆与最长杆之和小于其余两杆之和', '任意', '最短杆为机架', '四杆相等'], answer: 0, explain: '格拉肖夫。' },
          { stem: '急回特性的衡量指标是：', options: ['行程速比系数 K', '极位夹角唯一', '压力角', '传动角'], answer: 0, explain: 'K。' },
          { stem: '压力角越大，传力性能：', options: ['越差', '越好', '不变', '无关'], answer: 0, explain: '压力角。' }
        ],
        doc: { lead: '这一章讲连杆。', sections: [
          { id: 'type', title: '类型', html: `<p>曲柄摇杆、双曲柄、双摇杆；格拉肖夫条件。</p>` },
          { id: 'property', title: '特性', html: `<p>急回、压力角与传动角、死点。</p>` }
        ], refs: [] } },
      { title: '凸轮机构', brief: '推杆运动。',
        q: [
          { stem: '凸轮从动件常用运动规律包括：', options: ['等速、等加速等减速、简谐、摆线', '只有等速', '只有简谐', '只有摆线'], answer: 0, explain: '多种。' },
          { stem: '刚性冲击产生于：', options: ['等速运动规律的起止点', '简谐运动', '摆线运动', '静止段'], answer: 0, explain: '刚性冲击。' },
          { stem: '凸轮基圆半径过小会导致：', options: ['压力角过大', '运动失真唯一', '速度过快', '无影响'], answer: 0, explain: '压力角。' }
        ],
        doc: { lead: '这一章讲凸轮。', sections: [
          { id: 'motion', title: '运动规律', html: `<p>位移、速度、加速度曲线；冲击特性。</p>` },
          { id: 'design', title: '设计', html: `<p>压力角、基圆半径；轮廓设计（图解法/解析法）。</p>` }
        ], refs: [] } },
      { title: '齿轮机构', brief: '传动主力。',
        q: [
          { stem: '渐开线齿廓的优点是：', options: ['定传动比、中心距可分', '易加工唯一', '强度高唯一', '噪音低'], answer: 0, explain: '渐开线。' },
          { stem: '标准齿轮的分度圆压力角是：', options: ['20°', '0°', '45°', '90°'], answer: 0, explain: '20°。' },
          { stem: '根切发生在：', options: ['齿数过少时', '齿数过多', '模数过大', '压力角过小唯一'], answer: 0, explain: '根切。' }
        ],
        doc: { lead: '这一章讲齿轮。', sections: [
          { id: 'involute', title: '渐开线', html: `<p>性质、啮合基本定律；正确啮合条件。</p>` },
          { id: 'parameters', title: '参数', html: `<p>模数、齿数、压力角；根切与变位。</p>` }
        ], refs: [] } },
      { title: '轮系', brief: '多级传动。',
        q: [
          { stem: '定轴轮系与周转轮系的区别是：', options: ['是否有行星架自转', '齿轮数', '模数', '材料'], answer: 0, explain: '周转。' },
          { stem: '传动比计算的关键是：', options: ['判断转向与惰轮', '数齿数', '算模数', '看材料'], answer: 0, explain: '转向。' },
          { stem: '周转轮系可用：', options: ['转化机构法（反转法）', '直接除', '查表', '只能实验'], answer: 0, explain: '反转法。' }
        ],
        doc: { lead: '这一章讲轮系。', sections: [
          { id: 'fixed', title: '定轴轮系', html: `<p>传动比、转向判定；惰轮作用。</p>` },
          { id: 'epicyclic', title: '周转轮系', html: `<p>转化机构法；行星轮系传动比。</p>` }
        ], refs: [] } },
      { title: '间歇与其他机构', brief: '特殊运动。',
        q: [
          { stem: '棘轮机构的作用是：', options: ['单向间歇运动', '连续转动', '变速', '换向'], answer: 0, explain: '棘轮。' },
          { stem: '槽轮机构用于：', options: ['间歇转位', '连续传动', '调速', '缓冲'], answer: 0, explain: '槽轮。' },
          { stem: '凸轮与连杆组合可实现：', options: ['复杂运动规律', '简单转动', '无运动', '只往复'], answer: 0, explain: '组合。' }
        ],
        doc: { lead: '这一章讲间歇。', sections: [
          { id: 'intermittent', title: '间歇机构', html: `<p>棘轮、槽轮、不完全齿轮；运动系数。</p>` },
          { id: 'combination', title: '组合', html: `<p>机构选型与组合；运动方案设计。</p>` }
        ], refs: [] } },
      { title: '平衡与调速', brief: '稳定运转。',
        q: [
          { stem: '转子平衡分为：', options: ['静平衡与动平衡', '只有静平衡', '只有动平衡', '无平衡'], answer: 0, explain: '两类。' },
          { stem: '飞轮的作用是：', options: ['减小速度波动', '增加功率', '减小摩擦', '提高效率'], answer: 0, explain: '飞轮。' },
          { stem: '速度不均匀系数衡量：', options: ['速度波动程度', '平均速度', '功率', '效率'], answer: 0, explain: '不均匀系数。' }
        ],
        doc: { lead: '这一章讲平衡。', sections: [
          { id: 'balance', title: '平衡', html: `<p>静平衡、动平衡；平衡计算。</p>` },
          { id: 'flywheel', title: '调速', html: `<p>周期性波动、飞轮设计；不均匀系数。</p>` }
        ], refs: [] } },
      { title: '机械原理课程设计', brief: '做方案。',
        q: [
          { stem: '机构选型应考虑：', options: ['运动、传力、结构与成本', '只有运动', '只有成本', '只有结构'], answer: 0, explain: '综合。' },
          { stem: '运动方案设计的一般步骤是：', options: ['功能分析—选型—尺度综合—评价', '直接画图', '只选型', '只评价'], answer: 0, explain: '步骤。' },
          { stem: '课程设计成果应包括：', options: ['方案图、计算说明、分析', '只有图', '只有计算', '只有结论'], answer: 0, explain: '完整。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'process', title: '流程', html: `<p>功能分析、机构选型、尺度综合；评价指标。</p>` },
          { id: 'deliver', title: '交付', html: `<p>机构简图、运动分析、设计说明；答辩。</p>` }
        ], refs: [] } }
    ] },
    { name: '机械设计', chapters: [
      { title: '设计基础', brief: '怎么设计零件。',
        q: [
          { stem: '机械设计的基本要求是：', options: ['强度、刚度、寿命、成本', '只有强度', '只有刚度', '只有成本'], answer: 0, explain: '综合。' },
          { stem: '许用应力法的核心是：', options: ['工作应力不超过许用应力', '安全系数任意', '只算强度', '只算刚度'], answer: 0, explain: '许用。' },
          { stem: '标准化、系列化的意义是：', options: ['降低成本、便于互换', '增加成本', '限制设计', '无意义'], answer: 0, explain: '标准化。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'requirement', title: '要求', html: `<p>强度、刚度、耐磨、寿命；可靠性。</p>` },
          { id: 'method', title: '方法', html: `<p>许用应力、安全系数；标准化与系列化。</p>` }
        ], refs: [] } },
      { title: '连接设计', brief: '连起来。',
        q: [
          { stem: '螺栓连接的预紧作用是：', options: ['提高连接的紧密性与可靠性', '增大载荷', '降低成本', '便于拆卸'], answer: 0, explain: '预紧。' },
          { stem: '键连接的类型包括：', options: ['平键、半圆键、楔键', '只有平键', '只有半圆键', '只有楔键'], answer: 0, explain: '多种。' },
          { stem: '过盈连接依靠：', options: ['配合面间的压力传递载荷', '胶粘', '螺纹', '铆接'], answer: 0, explain: '过盈。' }
        ],
        doc: { lead: '这一章讲连接。', sections: [
          { id: 'thread', title: '螺纹连接', html: `<p>类型、预紧与防松；强度计算。</p>` },
          { id: 'key', title: '键销与过盈', html: `<p>键连接、销连接、过盈配合；设计要点。</p>` }
        ], refs: [] } },
      { title: '传动设计', brief: '带链齿轮。',
        q: [
          { stem: '带传动的主要失效形式是：', options: ['打滑与疲劳', '断裂唯一', '磨损唯一', '腐蚀'], answer: 0, explain: '打滑。' },
          { stem: '链传动的特点是：', options: ['无弹性滑动、平均传动比准确', '易打滑', '噪音小', '适合远距唯一'], answer: 0, explain: '链。' },
          { stem: '齿轮传动设计的关键是：', options: ['齿面接触与齿根弯曲强度', '只有接触', '只有弯曲', '只有磨损'], answer: 0, explain: '两项。' }
        ],
        doc: { lead: '这一章讲传动。', sections: [
          { id: 'belt', title: '带传动', html: `<p>受力、应力、弹性滑动；V 带设计。</p>` },
          { id: 'gear', title: '齿轮与链', html: `<p>强度计算、参数选择；链传动设计。</p>` }
        ], refs: [] } },
      { title: '轴的设计', brief: '支撑。',
        q: [
          { stem: '轴的强度计算包括：', options: ['扭转强度与弯扭组合', '只有扭转', '只有弯曲', '只有刚度'], answer: 0, explain: '组合。' },
          { stem: '轴的刚度不足会导致：', options: ['轴承与齿轮偏载', '断裂', '打滑', '腐蚀'], answer: 0, explain: '偏载。' },
          { stem: '轴的结构设计应：', options: ['便于装拆与定位', '尽量复杂', '无台阶', '无键槽'], answer: 0, explain: '结构。' }
        ],
        doc: { lead: '这一章讲轴。', sections: [
          { id: 'strength', title: '强度', html: `<p>扭转、弯扭组合；危险截面。</p>` },
          { id: 'structure', title: '结构', html: `<p>轴上零件定位、台阶与过渡；刚度校核。</p>` }
        ], refs: [] } },
      { title: '轴承与联轴器', brief: '支撑与连接。',
        q: [
          { stem: '滚动轴承的寿命计算基于：', options: ['基本额定动载荷与当量动载荷', '静载荷', '转速唯一', '温度'], answer: 0, explain: '寿命。' },
          { stem: '滑动轴承的优点是：', options: ['承载大、抗冲击、平稳', '摩擦小唯一', '免维护', '成本低'], answer: 0, explain: '滑动。' },
          { stem: '联轴器与离合器的区别是：', options: ['是否可在运转中分离', '是否传扭矩', '是否对中', '材料'], answer: 0, explain: '离合器。' }
        ],
        doc: { lead: '这一章讲轴承。', sections: [
          { id: 'bearing', title: '轴承', html: `<p>滚动轴承选型与寿命；滑动轴承润滑。</p>` },
          { id: 'coupling', title: '联轴器', html: `<p>类型、对中与补偿；离合器。</p>` }
        ], refs: [] } },
      { title: '弹簧与机架', brief: '细节件。',
        q: [
          { stem: '弹簧的主要用途包括：', options: ['缓冲、储能、测力、复位', '只有缓冲', '只有储能', '只有测力'], answer: 0, explain: '多种。' },
          { stem: '弹簧刚度与什么有关？', options: ['材料、几何尺寸与圈数', '只有材料', '只有直径', '只有圈数'], answer: 0, explain: '综合。' },
          { stem: '机架设计应保证：', options: ['刚度、稳定性与工艺性', '只有刚度', '只有稳定', '只有美观'], answer: 0, explain: '综合。' }
        ],
        doc: { lead: '这一章讲细节。', sections: [
          { id: 'spring', title: '弹簧', html: `<p>类型、刚度计算、疲劳；选用。</p>` },
          { id: 'frame', title: '机架', html: `<p>结构形式、刚度与减振；铸造与焊接。</p>` }
        ], refs: [] } },
      { title: '机械设计实践', brief: '综合设计。',
        q: [
          { stem: '减速器设计的一般步骤是：', options: ['选型—传动比分配—零件设计—校核—绘图', '直接画图', '只算齿轮', '只选轴承'], answer: 0, explain: '流程。' },
          { stem: '设计校核应：', options: ['覆盖强度刚度寿命', '只校强度', '只校刚度', '不校核'], answer: 0, explain: '校核。' },
          { stem: '设计说明书的重点是：', options: ['方案比较与计算依据', '只有图纸', '只有结论', '只有参数'], answer: 0, explain: '说明。' }
        ],
        doc: { lead: '这一章讲实践。', sections: [
          { id: 'process', title: '流程', html: `<p>传动方案、参数分配、零件设计、校核。</p>` },
          { id: 'document', title: '文档', html: `<p>计算说明书、装配图与零件图；答辩准备。</p>` }
        ], refs: [] } },
      { title: '现代设计方法', brief: '新工具。',
        q: [
          { stem: '有限元分析的作用是：', options: ['计算应力变形与优化结构', '绘图', '加工', '装配'], answer: 0, explain: 'FEA。' },
          { stem: '优化设计的目标通常是：', options: ['在约束下使目标函数最优', '最大体积', '最高成本', '最复杂'], answer: 0, explain: '优化。' },
          { stem: '可靠性设计的核心是：', options: ['控制失效概率', '提高安全系数唯一', '增加材料', '加大尺寸'], answer: 0, explain: '可靠性。' }
        ],
        doc: { lead: '这一章讲现代方法。', sections: [
          { id: 'fea', title: '有限元', html: `<p>网格、边界条件、结果判读；结构优化。</p>` },
          { id: 'reliability', title: '可靠性与优化', html: `<p>失效概率、应力-强度干涉；优化算法。</p>` }
        ], refs: [] } }
    ] },
    { name: '机械制造技术基础', chapters: [
      { title: '制造工艺基础', brief: '怎么造。',
        q: [
          { stem: '工序与工步的区别是：', options: ['是否在同一工作地连续完成', '是否用机床', '是否装夹', '是否测量'], answer: 0, explain: '工步。' },
          { stem: '生产类型的划分依据是：', options: ['生产纲领与批量', '设备数量', '厂房面积', '人员'], answer: 0, explain: '批量。' },
          { stem: '工艺规程的作用是：', options: ['指导生产与保证质量', '装饰', '考核', '存档唯一'], answer: 0, explain: '指导。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'concept', title: '基本概念', html: `<p>工序、工步、走刀；生产类型与工艺特征。</p>` },
          { id: 'process', title: '工艺规程', html: `<p>作用、编制步骤；定位与夹紧。</p>` }
        ], refs: [] } },
      { title: '切削原理', brief: '刀具与材料。',
        q: [
          { stem: '切削三要素是：', options: ['切削速度、进给量、切削深度', '只有速度', '只有进给', '只有深度'], answer: 0, explain: '三要素。' },
          { stem: '刀具磨损的主要形式是：', options: ['前刀面月牙洼与后刀面磨损', '断裂唯一', '腐蚀', '变形'], answer: 0, explain: '磨损。' },
          { stem: '切削温度升高会导致：', options: ['刀具磨损加快、精度下降', '效率提高', '无影响', '工件变硬'], answer: 0, explain: '温度。' }
        ],
        doc: { lead: '这一章讲切削。', sections: [
          { id: 'elements', title: '要素', html: `<p>切削速度、进给量、切深；切削力与温度。</p>` },
          { id: 'tool', title: '刀具', html: `<p>材料、几何角度、磨损与耐用度；冷却润滑。</p>` }
        ], refs: [] } },
      { title: '加工方法与设备', brief: '车铣刨磨。',
        q: [
          { stem: '车削适合加工：', options: ['回转体表面', '平面唯一', '内孔唯一', '齿轮'], answer: 0, explain: '回转体。' },
          { stem: '磨削的工艺特点是：', options: ['精度高、表面质量好', '效率最高', '成本最低', '适合粗加工'], answer: 0, explain: '精加工。' },
          { stem: '特种加工适用于：', options: ['难加工材料与复杂形状', '普通钢材', '大批量简单件', '木材'], answer: 0, explain: '特种。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'methods', title: '常规方法', html: `<p>车、铣、刨、磨、钻、镗；适用范围。</p>` },
          { id: 'special', title: '特种加工', html: `<p>电火花、线切割、激光；难加工材料。</p>` }
        ], refs: [] } },
      { title: '工艺尺寸链', brief: '尺寸怎么算。',
        q: [
          { stem: '尺寸链的封闭环是：', options: ['加工或装配中最后形成的尺寸', '最大尺寸', '基准尺寸', '设计尺寸'], answer: 0, explain: '封闭环。' },
          { stem: '极值法的特点是：', options: ['保守、不出现废品', '可能出现废品', '精度最高', '最简单'], answer: 0, explain: '极值。' },
          { stem: '概率法适用于：', options: ['大批量生产', '单件', '小批', '试制'], answer: 0, explain: '概率。' }
        ],
        doc: { lead: '这一章讲尺寸链。', sections: [
          { id: 'chain', title: '尺寸链', html: `<p>环、增减环；极值法计算。</p>` },
          { id: 'probability', title: '概率法', html: `<p>正态分布假设、公差分配；应用场合。</p>` }
        ], refs: [] } },
      { title: '机械加工精度', brief: '为什么不准。',
        q: [
          { stem: '影响加工精度的因素包括：', options: ['机床、刀具、夹具、工件与工艺', '只有机床', '只有刀具', '只有工艺'], answer: 0, explain: '多因素。' },
          { stem: '误差复映现象说明：', options: ['毛坯误差会部分反映到工件上', '误差消失', '精度提高', '无影响'], answer: 0, explain: '复映。' },
          { stem: '提高精度的措施包括：', options: ['提高刚度、减小切削力、误差补偿', '加大切深', '提高进给', '减少走刀'], answer: 0, explain: '措施。' }
        ],
        doc: { lead: '这一章讲精度。', sections: [
          { id: 'factors', title: '因素', html: `<p>原理误差、装夹、机床、刀具、受力变形、热变形。</p>` },
          { id: 'control', title: '控制', html: `<p>误差复映、提高刚度；误差补偿与统计控制。</p>` }
        ], refs: [] } },
      { title: '表面质量', brief: '不只是尺寸。',
        q: [
          { stem: '表面质量包括：', options: ['粗糙度、波纹度、纹理与物理力学性能', '只有粗糙度', '只有波纹度', '只有硬度'], answer: 0, explain: '多指标。' },
          { stem: '表面粗糙度影响：', options: ['耐磨性、疲劳强度、配合性质', '只有外观', '只有重量', '只有颜色'], answer: 0, explain: '功能。' },
          { stem: '提高表面质量的方法包括：', options: ['提高切削速度、精加工、滚压', '加大进给', '加大切深', '粗加工'], answer: 0, explain: '方法。' }
        ],
        doc: { lead: '这一章讲表面。', sections: [
          { id: 'quality', title: '表面质量', html: `<p>几何特征与物理力学性能；对使用性能的影响。</p>` },
          { id: 'improve', title: '改善', html: `<p>切削参数、精加工、表面强化；磨削烧伤。</p>` }
        ], refs: [] } },
      { title: '夹具设计', brief: '固定工件。',
        q: [
          { stem: '六点定位原理说明：', options: ['限制六个自由度实现完全定位', '只需三点', '越多越好', '不需定位'], answer: 0, explain: '六点。' },
          { stem: '过定位的后果是：', options: ['干涉与变形', '更稳定', '无影响', '精度提高'], answer: 0, explain: '过定位。' },
          { stem: '夹紧力的方向应：', options: ['朝向主要定位基准', '任意', '垂直向上', '与切削力同向'], answer: 0, explain: '夹紧。' }
        ],
        doc: { lead: '这一章讲夹具。', sections: [
          { id: 'locating', title: '定位', html: `<p>六点定位、过定位与欠定位；定位元件。</p>` },
          { id: 'clamping', title: '夹紧', html: `<p>夹紧力方向与大小；典型夹具。</p>` }
        ], refs: [] } },
      { title: '制造工艺实训', brief: '动手。',
        q: [
          { stem: '编制工艺规程时应先：', options: ['分析零件图与技术要求', '选机床', '选刀具', '写文件'], answer: 0, explain: '分析。' },
          { stem: '粗精加工分开的目的是：', options: ['保证精度与效率', '省时间', '省刀具', '简化'], answer: 0, explain: '分开。' },
          { stem: '实训安全要求：', options: ['遵守操作规程、防护到位', '快速', '随意', '只看不动'], answer: 0, explain: '安全。' }
        ],
        doc: { lead: '这一章讲实训。', sections: [
          { id: 'plan', title: '工艺编制', html: `<p>零件分析、基准选择、工序安排；切削用量。</p>` },
          { id: 'practice', title: '实训', html: `<p>车/铣/钻操作、测量；安全与规范。</p>` }
        ], refs: [] } }
    ] },
    { name: '液压与气压传动', chapters: [
      { title: '流体力学基础', brief: '传动的原理。',
        q: [
          { stem: '帕斯卡原理说明：', options: ['密闭液体传递压强不变', '压力减小', '流量增大', '温度升高'], answer: 0, explain: '帕斯卡。' },
          { stem: '伯努利方程体现：', options: ['能量守恒', '动量守恒', '质量守恒', '热量守恒'], answer: 0, explain: '能量。' },
          { stem: '液压油的粘度影响：', options: ['泄漏与损失', '只有颜色', '只有密度', '只有温度'], answer: 0, explain: '粘度。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'pressure', title: '压力与流量', html: `<p>帕斯卡原理、连续性方程；压力损失。</p>` },
          { id: 'fluid', title: '液压油', html: `<p>粘度、温度影响；污染控制。</p>` }
        ], refs: [] } },
      { title: '液压泵与马达', brief: '动力元件。',
        q: [
          { stem: '齿轮泵属于：', options: ['定量泵', '变量泵', '马达', '阀'], answer: 0, explain: '定量。' },
          { stem: '液压泵的工作压力取决于：', options: ['负载', '泵的排量', '转速', '油温'], answer: 0, explain: '负载。' },
          { stem: '液压马达与泵的区别是：', options: ['能量转换方向相反', '结构相同', '压力不同', '无区别'], answer: 0, explain: '方向。' }
        ],
        doc: { lead: '这一章讲泵。', sections: [
          { id: 'pump', title: '泵', html: `<p>齿轮泵、叶片泵、柱塞泵；排量与压力。</p>` },
          { id: 'motor', title: '马达', html: `<p>高速与低速马达；扭矩与转速。</p>` }
        ], refs: [] } },
      { title: '液压缸与阀', brief: '执行与控制。',
        q: [
          { stem: '液压缸的推力等于：', options: ['压力 × 有效面积', '压力 ÷ 面积', '面积 × 速度', '流量 × 压力'], answer: 0, explain: 'F=pA。' },
          { stem: '溢流阀的作用是：', options: ['稳压溢流、防止超压', '调速', '换向', '过滤'], answer: 0, explain: '溢流。' },
          { stem: '换向阀的“位”和“通”表示：', options: ['工作位置数与接口数', '压力与流量', '方向与速度', '温度与粘度'], answer: 0, explain: '位数。' }
        ],
        doc: { lead: '这一章讲执行。', sections: [
          { id: 'cylinder', title: '液压缸', html: `<p>单/双作用、差动；推力与速度计算。</p>` },
          { id: 'valve', title: '阀', html: `<p>压力阀、方向阀、流量阀；中位机能。</p>` }
        ], refs: [] } },
      { title: '基本回路', brief: '组合使用。',
        q: [
          { stem: '调压回路的核心元件是：', options: ['溢流阀', '节流阀', '换向阀', '过滤器'], answer: 0, explain: '溢流阀。' },
          { stem: '节流调速回路的效率：', options: ['较低（有溢流损失）', '很高', '中等', '为零'], answer: 0, explain: '节流。' },
          { stem: '锁紧回路常用：', options: ['液控单向阀', '节流阀', '换向阀', '过滤器'], answer: 0, explain: '锁紧。' }
        ],
        doc: { lead: '这一章讲回路。', sections: [
          { id: 'pressure', title: '压力与速度', html: `<p>调压、减压、卸荷；节流调速、容积调速。</p>` },
          { id: 'direction', title: '方向与锁紧', html: `<p>换向、锁紧、同步回路；顺序动作。</p>` }
        ], refs: [] } },
      { title: '气压传动', brief: '用空气。',
        q: [
          { stem: '气压传动的优点是：', options: ['清洁、成本低、动作快', '压力高', '精度高', '刚性好'], answer: 0, explain: '气压。' },
          { stem: '气压传动的缺点是：', options: ['压力低、刚性差、噪声大', '不清洁', '成本高', '速度慢'], answer: 0, explain: '缺点。' },
          { stem: '气源装置包括：', options: ['空压机、储气罐、过滤器', '只有空压机', '只有储气罐', '只有过滤器'], answer: 0, explain: '三件。' }
        ],
        doc: { lead: '这一章讲气压。', sections: [
          { id: 'source', title: '气源', html: `<p>空压机、后冷却器、干燥与过滤；压力分级。</p>` },
          { id: 'components', title: '元件', html: `<p>气缸、气马达、气动阀；真空元件。</p>` }
        ], refs: [] } },
      { title: '系统设计与维护', brief: '工程。',
        q: [
          { stem: '液压系统设计的第一步是：', options: ['工况分析与负载计算', '选泵', '画图', '选阀'], answer: 0, explain: '工况。' },
          { stem: '液压系统发热的主要原因是：', options: ['压力与流量损失', '油太多', '泵太大', '管道长'], answer: 0, explain: '损失。' },
          { stem: '污染控制的关键是：', options: ['过滤、密封、清洁装配', '换油唯一', '加热', '加压'], answer: 0, explain: '污染。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'design', title: '设计', html: `<p>工况分析、元件选型、管路布置；验算。</p>` },
          { id: 'maintenance', title: '维护', html: `<p>污染控制、泄漏与噪声；故障诊断。</p>` }
        ], refs: [] } },
      { title: '液压实验', brief: '动手。',
        q: [
          { stem: '液压实验的安全要点是：', options: ['防止高压喷射与超压', '快速拆装', '不用防护', '随意调压'], answer: 0, explain: '安全。' },
          { stem: '测试回路压力应使用：', options: ['压力表/压力传感器', '流量计', '温度计', '万用表'], answer: 0, explain: '压力表。' },
          { stem: '回路无动作的常见原因是：', options: ['溢流阀设定过低或换向阀未到位', '油太多', '泵太大', '管太长'], answer: 0, explain: '排查。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'experiment', title: '实验', html: `<p>调压、节流调速、换向与锁紧；压力流量测量。</p>` },
          { id: 'trouble', title: '排故', html: `<p>无动作、爬行、噪声、发热；排查顺序。</p>` }
        ], refs: [] } },
      { title: '综合应用', brief: '整机。',
        q: [
          { stem: '液压与电气联合控制中，电磁阀的作用是：', options: ['电信号转换为液压动作', '放大功率', '过滤', '储油'], answer: 0, explain: '电磁阀。' },
          { stem: '比例阀与伺服阀的区别是：', options: ['控制精度与响应速度', '压力等级', '流量', '材料'], answer: 0, explain: '精度。' },
          { stem: '系统调试应：', options: ['先空载后负载、先低压后高压', '直接满载', '一直高压', '不调试'], answer: 0, explain: '调试。' }
        ],
        doc: { lead: '这一章讲应用。', sections: [
          { id: 'integration', title: '机电液一体化', html: `<p>电磁阀、比例/伺服控制；PLC 联控。</p>` },
          { id: 'commissioning', title: '调试', html: `<p>冲洗、排气、压力设定；逐步加载。</p>` }
        ], refs: [] } }
    ] },
    { name: '数控技术', chapters: [
      { title: '数控基础', brief: '数字控制。',
        q: [
          { stem: '数控机床的组成包括：', options: ['数控装置、伺服、机床本体', '只有数控装置', '只有伺服', '只有本体'], answer: 0, explain: '三部分。' },
          { stem: '开环与闭环数控的区别是：', options: ['是否有位置检测反馈', '是否有电机', '是否有程序', '是否有刀具'], answer: 0, explain: '反馈。' },
          { stem: '数控系统的核心是：', options: ['插补与位置控制', '显示', '存储', '通信'], answer: 0, explain: '插补。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'structure', title: '组成', html: `<p>数控装置、伺服驱动、检测装置、机床本体。</p>` },
          { id: 'type', title: '类型', html: `<p>点位/直线/轮廓；开环/半闭环/闭环。</p>` }
        ], refs: [] } },
      { title: '数控编程基础', brief: '写程序。',
        q: [
          { stem: 'G 代码中 G00 表示：', options: ['快速定位', '直线插补', '圆弧插补', '暂停'], answer: 0, explain: '快速。' },
          { stem: 'M03 通常表示：', options: ['主轴正转', '主轴停止', '换刀', '冷却开'], answer: 0, explain: '主轴。' },
          { stem: '程序段的结构包括：', options: ['程序段号、功能字、坐标', '只有坐标', '只有功能字', '只有段号'], answer: 0, explain: '组成。' }
        ],
        doc: { lead: '这一章讲编程。', sections: [
          { id: 'gcode', title: 'G/M 代码', html: `<p>常用 G 指令、M 指令；模态与非模态。</p>` },
          { id: 'structure', title: '程序结构', html: `<p>程序头、程序段、子程序；坐标系与刀补。</p>` }
        ], refs: [] } },
      { title: '坐标与刀具补偿', brief: '对准。',
        q: [
          { stem: '工件坐标系设定的作用是：', options: ['确定编程原点在机床中的位置', '换刀', '调速', '冷却'], answer: 0, explain: '对刀。' },
          { stem: '刀具半径补偿的作用是：', options: ['按零件轮廓编程自动偏移', '加快进给', '延长刀具', '减小切削力'], answer: 0, explain: '补偿。' },
          { stem: '刀补建立与取消应：', options: ['在直线段且不与轮廓干涉', '在圆弧段', '任意位置', '不用建立'], answer: 0, explain: '建立。' }
        ],
        doc: { lead: '这一章讲坐标。', sections: [
          { id: 'coordinate', title: '坐标系', html: `<p>机床/工件/局部坐标系；对刀与零点偏置。</p>` },
          { id: 'compensation', title: '刀补', html: `<p>半径补偿与长度补偿；建立与取消规则。</p>` }
        ], refs: [] } },
      { title: '插补与轨迹控制', brief: '走直线圆弧。',
        q: [
          { stem: '逐点比较法的特点是：', options: ['每步比较偏差决定走向', '计算圆弧', '需要大量内存', '精度高唯一'], answer: 0, explain: '逐点。' },
          { stem: '数据采样插补适用于：', options: ['闭环/半闭环系统', '开环', '手工编程', '仿真'], answer: 0, explain: '采样。' },
          { stem: '进给速度与插补周期的关系是：', options: ['每周期走一步，速度由步长决定', '无关', '由刀具决定', '由材料决定'], answer: 0, explain: '步长。' }
        ],
        doc: { lead: '这一章讲插补。', sections: [
          { id: 'method', title: '方法', html: `<p>逐点比较、数字积分、数据采样；精度与速度。</p>` },
          { id: 'feed', title: '进给', html: `<p>进给速度控制、加减速；拐角处理。</p>` }
        ], refs: [] } },
      { title: '数控机床结构', brief: '机械部分。',
        q: [
          { stem: '滚珠丝杠的优点是：', options: ['摩擦小、传动效率高', '自锁', '便宜', '刚性好唯一'], answer: 0, explain: '滚珠。' },
          { stem: '导轨的作用是：', options: ['导向与承载', '传动', '检测', '冷却'], answer: 0, explain: '导向。' },
          { stem: '主轴单元的关键指标是：', options: ['转速、刚性与精度', '只有转速', '只有刚性', '只有精度'], answer: 0, explain: '综合。' }
        ],
        doc: { lead: '这一章讲结构。', sections: [
          { id: 'drive', title: '传动', html: `<p>滚珠丝杠、齿轮齿条；预紧与消隙。</p>` },
          { id: 'guide', title: '导轨与主轴', html: `<p>滚动/滑动导轨；电主轴与刚度。</p>` }
        ], refs: [] } },
      { title: '伺服系统', brief: '驱动。',
        q: [
          { stem: '步进电机与伺服电机的区别是：', options: ['是否闭环控制', '是否有绕组', '是否转动', '是否用电'], answer: 0, explain: '闭环。' },
          { stem: '伺服系统的性能指标包括：', options: ['定位精度、跟随误差、响应速度', '只有精度', '只有速度', '只有功率'], answer: 0, explain: '多指标。' },
          { stem: '位置检测常用：', options: ['光栅尺与编码器', '压力传感器', '温度传感器', '流量计'], answer: 0, explain: '检测。' }
        ],
        doc: { lead: '这一章讲伺服。', sections: [
          { id: 'motor', title: '电机', html: `<p>步进、直流伺服、交流伺服；转矩与转速。</p>` },
          { id: 'control', title: '控制', html: `<p>位置/速度/电流三环；检测元件与精度。</p>` }
        ], refs: [] } },
      { title: '多轴与先进制造', brief: '进阶。',
        q: [
          { stem: '五轴联动的优势是：', options: ['可加工复杂曲面、一次装夹', '速度快唯一', '成本低', '编程简单'], answer: 0, explain: '五轴。' },
          { stem: 'CAM 软件的作用是：', options: ['由模型生成刀具轨迹与程序', '绘图唯一', '仿真唯一', '管理'], answer: 0, explain: 'CAM。' },
          { stem: '加工仿真的意义是：', options: ['检查干涉与过切、验证程序', '装饰', '加快机床', '降低精度'], answer: 0, explain: '仿真。' }
        ],
        doc: { lead: '这一章讲先进。', sections: [
          { id: 'multiaxis', title: '多轴', html: `<p>五轴结构、RTCP；复杂曲面加工。</p>` },
          { id: 'cam', title: 'CAM', html: `<p>建模、刀轨、后处理；仿真与优化。</p>` }
        ], refs: [] } },
      { title: '数控实训', brief: '动手。',
        q: [
          { stem: '数控加工前应：', options: ['校验程序与对刀', '直接循环启动', '只装刀', '只夹紧'], answer: 0, explain: '校验。' },
          { stem: '首件试切的作用是：', options: ['验证程序与尺寸', '提高效率', '省刀具', '装饰'], answer: 0, explain: '首件。' },
          { stem: '实训安全要求：', options: ['关门防护、遵守规程', '快速操作', '随意', '不看'], answer: 0, explain: '安全。' }
        ],
        doc: { lead: '这一章讲实训。', sections: [
          { id: 'prepare', title: '准备', html: `<p>对刀、坐标系设定、程序校验；空运行。</p>` },
          { id: 'practice', title: '加工', html: `<p>首件试切、尺寸检测、参数优化；安全防护。</p>` }
        ], refs: [] } }
    ] },

    /* ---- 大四 ---- */
    { name: '毕业设计', chapters: [
      { title: '选题与开题', brief: '做什么。',
        q: [
          { stem: '机械毕业设计选题关键是：', options: ['问题明确、工作量适中、可交付', '题目宏大', '追热点', '导师偏好'], answer: 0, explain: '可行。' },
          { stem: '开题报告应包含：', options: ['背景、目标、方案、计划', '只有背景', '只有计划', '只有方案'], answer: 0, explain: '四要素。' },
          { stem: '技术路线应：', options: ['明确方法与验证手段', '只有框图', '只有零件', '只有论文'], answer: 0, explain: '路线。' }
        ],
        doc: { lead: '这一章讲开题。', sections: [
          { id: 'topic', title: '选题', html: `<p>机构设计、结构优化、工艺装备；范围可控。</p>` },
          { id: 'proposal', title: '开题', html: `<p>背景、目标、方案、进度、风险；可行性。</p>` }
        ], refs: [] } },
      { title: '设计与计算', brief: '算清楚。',
        q: [
          { stem: '机械设计计算应：', options: ['强度刚度寿命全面校核', '只校强度', '只校刚度', '不校核'], answer: 0, explain: '校核。' },
          { stem: '三维建模的作用是：', options: ['结构设计与干涉检查', '加工唯一', '装饰', '装配唯一'], answer: 0, explain: '建模。' },
          { stem: '有限元分析的应用是：', options: ['应力变形与优化', '绘图', '加工', '采购'], answer: 0, explain: 'FEA。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'design', title: '设计', html: `<p>方案比较、参数计算、标准件选型。</p>` },
          { id: 'analysis', title: '分析', html: `<p>三维建模、有限元、运动仿真；结果判读。</p>` }
        ], refs: [] } },
      { title: '图纸与论文', brief: '表达与论证。',
        q: [
          { stem: '毕业设计图纸应：', options: ['符合制图标准并完整标注', '只有视图', '只有零件图', '不标注'], answer: 0, explain: '标准。' },
          { stem: '论文应说明：', options: ['问题、方案、计算与验证', '只有图纸', '只有结论', '只有感想'], answer: 0, explain: '完整。' },
          { stem: '引用规范的作用是：', options: ['可追溯与诚信', '凑数', '装饰', '增加篇幅'], answer: 0, explain: '规范。' }
        ],
        doc: { lead: '这一章讲表达。', sections: [
          { id: 'drawing', title: '图纸', html: `<p>装配图、零件图；尺寸公差与技术要求。</p>` },
          { id: 'thesis', title: '论文', html: `<p>结构、计算书、图表；引用规范。</p>` }
        ], refs: [] } },
      { title: '答辩与交付', brief: '讲清楚。',
        q: [
          { stem: '答辩演示关键是：', options: ['模型/样机可展示、数据可信', 'PPT 精美', '图纸多', '时长'], answer: 0, explain: '演示。' },
          { stem: '交付物应包括：', options: ['图纸、计算书、模型、说明书', '只有图纸', '只有论文', '只有模型'], answer: 0, explain: '完整。' },
          { stem: '被质疑时应：', options: ['承认局限并说明理由', '争辩', '回避', '改口'], answer: 0, explain: '诚恳。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'demo', title: '演示', html: `<p>10 分钟：问题—方案—计算—验证；动画与样机。</p>` },
          { id: 'deliver', title: '交付', html: `<p>图纸、计算说明书、三维模型；可复现。</p>` }
        ], refs: [] } }
    ] },
    { name: '专业实习', chapters: [
      { title: '岗位与角色', brief: '车间与设计。',
        q: [
          { stem: '机械实习的常见岗位不包括：', options: ['工艺工程师', '结构设计', '设备维护', '外科医生'], answer: 3, explain: '无关。' },
          { stem: '选择实习最该看：', options: ['能否参与真实项目', '名气', '工资', '通勤'], answer: 0, explain: '实战。' },
          { stem: '车间实习常见起点是：', options: ['跟班学工艺与设备', '直接做主设计', '只写文档', '只开会'], answer: 0, explain: '跟班。' }
        ],
        doc: { lead: '这一章讲岗位。', sections: [
          { id: 'roles', title: '岗位', html: `<p>工艺、设计、设备、质量；职责与技能。</p>` },
          { id: 'onboard', title: '上手', html: `<p>读图纸、认设备、跟班；记录与提问。</p>` }
        ], refs: [] } },
      { title: '工艺与现场', brief: '怎么造出来。',
        q: [
          { stem: '工艺卡的作用是：', options: ['指导现场加工与检验', '装饰', '存档唯一', '考核'], answer: 0, explain: '指导。' },
          { stem: '现场质量控制的常见方法是：', options: ['首件检验、巡检、抽检', '只做终检', '不做检验', '只看外观'], answer: 0, explain: '控制。' },
          { stem: '提高效率的工艺措施包括：', options: ['优化工序、专用夹具、合理切削用量', '加大切深唯一', '减少检验', '加班'], answer: 0, explain: '优化。' }
        ],
        doc: { lead: '这一章讲现场。', sections: [
          { id: 'process', title: '工艺', html: `<p>工艺卡、工序卡；装夹与测量。</p>` },
          { id: 'quality', title: '质量', html: `<p>首件、巡检、抽检；不合格品处理。</p>` }
        ], refs: [] } },
      { title: '设备与维护', brief: '机器要养。',
        q: [
          { stem: '设备点检的目的是：', options: ['早期发现隐患', '考核', '装饰', '省事'], answer: 0, explain: '点检。' },
          { stem: '润滑管理的作用是：', options: ['减少磨损、延长寿命', '提高精度唯一', '降噪音唯一', '无作用'], answer: 0, explain: '润滑。' },
          { stem: '故障处理原则是：', options: ['先停机保安全再排查', '边跑边修', '忽略', '先上报'], answer: 0, explain: '安全。' }
        ],
        doc: { lead: '这一章讲设备。', sections: [
          { id: 'maintenance', title: '维护', html: `<p>点检、润滑、备件；TPM 思想。</p>` },
          { id: 'trouble', title: '排故', html: `<p>机械/电气/液压分类排查；安全第一。</p>` }
        ], refs: [] } },
      { title: '实习复盘', brief: '留下什么。',
        q: [
          { stem: '实习应留下的成果是：', options: ['工艺改进记录、图纸、复盘', '工牌', '照片', '评语'], answer: 0, explain: '成果。' },
          { stem: '实习日志推荐写法是：', options: ['问题—做法—结果—反思', '流水账', '只写结论', '只写感受'], answer: 0, explain: '结构化。' },
          { stem: '面试讲项目最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'output', title: '成果', html: `<p>工装改进、工艺优化、检测记录；可量化。</p>` },
          { id: 'review', title: '复盘', html: `<p>每周五行；讲清你的贡献与学到的东西。</p>` }
        ], refs: [] } }
    ] },
    { name: '考研与求职', chapters: [
      { title: '考研方向', brief: '机械与交叉。',
        q: [
          { stem: '机械考研的常见方向是：', options: ['机械工程、机械设计及理论、机械专硕', '只有机械工程', '只有专硕', '只有材料'], answer: 0, explain: '多方向。' },
          { stem: '机械原理与机械设计在考研中的地位是：', options: ['专业课核心', '不重要', '只考其一', '只考公共课'], answer: 0, explain: '核心。' },
          { stem: '择校最应考虑：', options: ['方向、导师与真题风格', '城市', '学费', '宿舍'], answer: 0, explain: '匹配。' }
        ],
        doc: { lead: '这一章讲方向。', sections: [
          { id: 'paths', title: '方向', html: `<p>机械设计、制造、机电、车辆、机器人。</p>` },
          { id: 'subjects', title: '科目', html: `<p>政治、英语、数学一、专业课（机械原理/机械设计）。</p>` }
        ], refs: [] } },
      { title: '专业课复习', brief: '原理与设计。',
        q: [
          { stem: '机械原理复习主线是：', options: ['结构—运动—力—平衡', '只做计算', '只背公式', '只看真题'], answer: 0, explain: '主线。' },
          { stem: '机械设计复习重点是：', options: ['连接、传动、轴系', '只有齿轮', '只有轴', '只有轴承'], answer: 0, explain: '三大块。' },
          { stem: '计算题关键是：', options: ['受力分析 + 公式选择', '猜', '背答案', '跳过'], answer: 0, explain: '分析。' }
        ],
        doc: { lead: '这一章讲复习。', sections: [
          { id: 'theory', title: '原理', html: `<p>自由度、连杆、凸轮、齿轮、轮系。</p>` },
          { id: 'design', title: '设计', html: `<p>连接、带链齿轮、轴、轴承；强度计算。</p>` }
        ], refs: [] } },
      { title: '求职方向', brief: '设计、工艺、设备。',
        q: [
          { stem: '机械毕业生的常见去向不包括：', options: ['结构设计', '工艺工程', '设备管理', '外科医生'], answer: 3, explain: '专业限制。' },
          { stem: '设计岗位看重：', options: ['三维建模、标准与计算', '只有编程', '只有英语', '只有证书'], answer: 0, explain: '设计。' },
          { stem: '求职最加分的材料是：', options: ['项目与图纸/作品', '证书数量', '成绩单', '社团'], answer: 0, explain: '作品。' }
        ],
        doc: { lead: '这一章讲就业。', sections: [
          { id: 'paths', title: '路径', html: `<p>结构设计、工艺、设备、质量、汽车与机器人。</p>` },
          { id: 'skills', title: '能力', html: `<p>SolidWorks/CATIA、制图标准、材料与工艺；项目。</p>` }
        ], refs: [] } },
      { title: '面试', brief: '技术与表达。',
        q: [
          { stem: '机械面试常考：', options: ['材料力学、机械设计与制图', '只有编程', '只有英语', '只有性格'], answer: 0, explain: '专业。' },
          { stem: '讲项目最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' },
          { stem: '被问到不会的问题应：', options: ['说明思路并诚实承认', '编造', '沉默', '转移话题'], answer: 0, explain: '诚实。' }
        ],
        doc: { lead: '这一章讲面试。', sections: [
          { id: 'tech', title: '技术', html: `<p>力学、设计、工艺、公差；看图能力。</p>` },
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
