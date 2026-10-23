/* ==========================================================
   envdesign-courses.js · 环境设计：12 门课（主干 8 / 出口 4）= 84 关
   ========================================================== */

(function () {
  var MAJOR = 'art-环境设计';
  var TITLES = stageTitlesOf('art');

  var COURSES = [
    { name: '设计素描与制图', chapters: [
      { title: '结构素描', brief: '看空间。',
        q: [
          { stem: '结构素描的重点是：', options: ['理解形体与空间关系', '光影细腻', '色彩丰富', '材质逼真'], answer: 0, explain: '结构。' },
          { stem: '一点透视的特点是：', options: ['一个消失点', '两个消失点', '无消失点', '三个消失点'], answer: 0, explain: '一点。' },
          { stem: '室内透视常采用：', options: ['一点或两点透视', '三点唯一', '等轴测唯一', '无透视'], answer: 0, explain: '透视。' }
        ],
        doc: { lead: '这一章讲结构。', sections: [
          { id: 'form', title: '形体', html: `<p>比例与结构、几何体；透视基本规律。</p>` },
          { id: 'space', title: '空间', html: `<p>一点/两点透视；视高与视距。</p>` }
        ], refs: [] } },
      { title: '制图基础', brief: '规范表达。',
        q: [
          { stem: '建筑制图中粗实线通常表示：', options: ['剖切到的轮廓线', '尺寸线', '中心线', '家具'], answer: 0, explain: '剖切。' },
          { stem: '图样比例 1:50 表示：', options: ['图上 1 单位代表实际 50 单位', '实际 1 代表图上 50', '1 米等于 50 毫米', '无意义'], answer: 0, explain: '比例。' },
          { stem: '标高以什么为单位？', options: ['米', '毫米', '厘米', '分米'], answer: 0, explain: '米。' }
        ],
        doc: { lead: '这一章讲制图。', sections: [
          { id: 'line', title: '线型与符号', html: `<p>粗实线、虚线、点画线；材料图例。</p>` },
          { id: 'scale', title: '比例与标注', html: `<p>比例、尺寸、标高；索引符号。</p>` }
        ], refs: [] } },
      { title: '空间构成', brief: '空间的语法。',
        q: [
          { stem: '空间构成的要素包括：', options: ['界面、体量、光与尺度', '只有界面', '只有体量', '只有光'], answer: 0, explain: '多要素。' },
          { stem: '围合度影响：', options: ['空间的私密性与感受', '只有面积', '只有成本', '无影响'], answer: 0, explain: '围合。' },
          { stem: '空间的序列组织包括：', options: ['起承转合与节奏', '只有入口', '只有出口', '无组织'], answer: 0, explain: '序列。' }
        ],
        doc: { lead: '这一章讲构成。', sections: [
          { id: 'element', title: '要素', html: `<p>界面、体量、光；尺度与比例。</p>` },
          { id: 'sequence', title: '序列', html: `<p>起承转合、节奏与对景；收放关系。</p>` }
        ], refs: [] } },
      { title: '手绘表现', brief: '表达。',
        q: [
          { stem: '马克笔上色的原则是：', options: ['由浅入深、概括块面', '一次涂满', '只用黑', '反复覆盖'], answer: 0, explain: '层次。' },
          { stem: '配景的作用是：', options: ['衬托尺度与氛围', '填补空白', '装饰唯一', '无作用'], answer: 0, explain: '配景。' },
          { stem: '手绘效果图的价值：', options: ['快速沟通设计意图', '替代施工图', '做预算', '装饰'], answer: 0, explain: '沟通。' }
        ],
        doc: { lead: '这一章讲手绘。', sections: [
          { id: 'tool', title: '工具', html: `<p>马克笔、彩铅、针管笔；纸张选择。</p>` },
          { id: 'skill', title: '技法', html: `<p>线稿、铺色、阴影；配景与氛围。</p>` }
        ], refs: [] } },
      { title: '软件制图', brief: '工具。',
        q: [
          { stem: 'CAD 图纸的图层应：', options: ['按类别分层管理', '全部一层', '随机', '不设图层'], answer: 0, explain: '图层。' },
          { stem: 'SketchUp 建模的优势是：', options: ['快速推敲体量与空间', '渲染最真实', '做施工图', '做预算'], answer: 0, explain: '推敲。' },
          { stem: '渲染软件的作用是：', options: ['模拟材质与光环境', '出施工图', '算造价', '排版'], answer: 0, explain: '渲染。' }
        ],
        doc: { lead: '这一章讲软件。', sections: [
          { id: 'cad', title: 'CAD', html: `<p>图层、块、标注；平面与立面绘制。</p>` },
          { id: 'model', title: '建模与渲染', html: `<p>SU/Rhino、Enscape/Vray；材质与灯光。</p>` }
        ], refs: [] } },
      { title: '作品集与表达', brief: '展示。',
        q: [
          { stem: '环境设计作品集的重点是：', options: ['方案逻辑与空间表达', '效果图数量', '软件炫技', '页数'], answer: 0, explain: '逻辑。' },
          { stem: '图纸排版应：', options: ['层级清晰、图面统一', '堆满图', '只放效果图', '无标注'], answer: 0, explain: '排版。' },
          { stem: '设计说明应讲清：', options: ['问题、策略与空间手法', '只写面积', '只写材料', '省略'], answer: 0, explain: '说明。' }
        ],
        doc: { lead: '这一章讲作品集。', sections: [
          { id: 'structure', title: '结构', html: `<p>调研、概念、平面、效果、节点；叙事逻辑。</p>` },
          { id: 'layout', title: '图面', html: `<p>版式与图例、比例尺；图片质量。</p>` }
        ], refs: [] } },
      { title: '设计表达训练', brief: '多练。',
        q: [
          { stem: '快题设计的核心是：', options: ['审题、功能分区与表达完整', '画得细', '颜色多', '字多'], answer: 0, explain: '快题。' },
          { stem: '平立剖的对应关系应：', options: ['严格一致', '随意', '只做平面', '只做效果'], answer: 0, explain: '一致。' },
          { stem: '提高表达能力的有效方式：', options: ['大量临摹与快题训练', '只看视频', '只做软件', '只背理论'], answer: 0, explain: '练习。' }
        ],
        doc: { lead: '这一章讲训练。', sections: [
          { id: 'quick', title: '快题', html: `<p>审题、功能泡泡图、平面与效果；时间分配。</p>` },
          { id: 'habit', title: '习惯', html: `<p>每日速写、抄绘优秀案例；复盘。</p>` }
        ], refs: [] } }
    ] },
    { name: '空间构成', chapters: [
      { title: '空间的基本要素', brief: '空间是什么。',
        q: [
          { stem: '空间的三个基本界面是：', options: ['地面、墙面、顶面', '门窗、家具、灯具', '柱、梁、板', '隔断、屏风、帘'], answer: 0, explain: '三界面。' },
          { stem: '空间尺度感取决于：', options: ['人体尺度与界面比例', '只有面积', '只有层高', '只有材料'], answer: 0, explain: '尺度。' },
          { stem: '虚实关系在空间中通过：', options: ['通透与封闭、界面处理建立', '只有颜色', '只有家具', '无关系'], answer: 0, explain: '虚实。' }
        ],
        doc: { lead: '这一章讲要素。', sections: [
          { id: 'interface', title: '界面', html: `<p>地墙顶；围合与限定。</p>` },
          { id: 'scale', title: '尺度', html: `<p>人体尺度、比例；虚实与通透。</p>` }
        ], refs: [] } },
      { title: '限定与围合', brief: '怎么围。',
        q: [
          { stem: '空间限定的手法包括：', options: ['围合、覆盖、凸起、下沉、肌理变化', '只有围合', '只有覆盖', '只有下沉'], answer: 0, explain: '多手法。' },
          { stem: '下沉空间的心理感受通常是：', options: ['安定、领域感强', '漂浮', '压抑唯一', '无差别'], answer: 0, explain: '下沉。' },
          { stem: '围合度越低，空间越：', options: ['开放通透', '私密', '封闭', '无变化'], answer: 0, explain: '开放。' }
        ],
        doc: { lead: '这一章讲限定。', sections: [
          { id: 'method', title: '手法', html: `<p>围合、覆盖、抬起下沉、材质与光线限定。</p>` },
          { id: 'degree', title: '程度', html: `<p>围合度与私密性；视线与流线。</p>` }
        ], refs: [] } },
      { title: '空间组织', brief: '怎么排。',
        q: [
          { stem: '常见的空间组织方式包括：', options: ['线性、集中、放射、网格、组团', '只有线性', '只有集中', '只有放射'], answer: 0, explain: '多种。' },
          { stem: '流线设计的核心是：', options: ['清晰顺畅且符合使用逻辑', '越长越好', '越绕越好', '无逻辑'], answer: 0, explain: '流线。' },
          { stem: '空间序列的作用是：', options: ['营造节奏与情绪', '装饰', '增加面积', '无作用'], answer: 0, explain: '序列。' }
        ],
        doc: { lead: '这一章讲组织。', sections: [
          { id: 'type', title: '类型', html: `<p>线性、集中、放射、网格；组合与过渡。</p>` },
          { id: 'circulation', title: '流线与序列', html: `<p>主次流线、起承转合；对景与收放。</p>` }
        ], refs: [] } },
      { title: '光与空间', brief: '光塑造空间。',
        q: [
          { stem: '自然采光的方式包括：', options: ['侧窗、天窗、高侧窗、中庭', '只有侧窗', '只有天窗', '只有中庭'], answer: 0, explain: '多种。' },
          { stem: '光的明暗对比可以：', options: ['强化空间层次与焦点', '无作用', '降低品质', '增加成本唯一'], answer: 0, explain: '层次。' },
          { stem: '人工照明设计应考虑：', options: ['照度、色温、眩光与场景', '只有亮度', '只有色温', '只有灯具'], answer: 0, explain: '照明。' }
        ],
        doc: { lead: '这一章讲光。', sections: [
          { id: 'daylight', title: '自然光', html: `<p>采光口形式、光的方向；光影与时间。</p>` },
          { id: 'artificial', title: '人工光', html: `<p>照度与色温、眩光控制；分层照明。</p>` }
        ], refs: [] } },
      { title: '色彩与材质', brief: '表面。',
        q: [
          { stem: '空间色彩设计应：', options: ['与功能、光线和使用者匹配', '只按喜好', '越鲜艳越好', '只用白色'], answer: 0, explain: '匹配。' },
          { stem: '材质的肌理影响：', options: ['触感、光感与空间温度感', '只有价格', '只有颜色', '无影响'], answer: 0, explain: '肌理。' },
          { stem: '大面积深色会：', options: ['产生压缩感并吸光', '显大', '提亮', '无影响'], answer: 0, explain: '深色。' }
        ],
        doc: { lead: '这一章讲色彩。', sections: [
          { id: 'color', title: '色彩', html: `<p>主色与点缀、明度对比；心理与功能。</p>` },
          { id: 'material', title: '材质', html: `<p>肌理、反射与吸声；搭配与收口。</p>` }
        ], refs: [] } },
      { title: '人体工程学', brief: '为人设计。',
        q: [
          { stem: '人体工程学研究：', options: ['人—机—环境的关系与尺度', '只有家具', '只有材料', '只有结构'], answer: 0, explain: '关系。' },
          { stem: '通道宽度的确定依据：', options: ['人流与使用需求', '随意', '越窄越好', '固定 1 米'], answer: 0, explain: '宽度。' },
          { stem: '无障碍设计的要求包括：', options: ['坡道、扶手、回转空间', '只有坡道', '只有扶手', '无要求'], answer: 0, explain: '无障碍。' }
        ],
        doc: { lead: '这一章讲人因。', sections: [
          { id: 'anthropometry', title: '尺度', html: `<p>人体尺寸、动作空间；家具与通道。</p>` },
          { id: 'a11y', title: '无障碍', html: `<p>坡道、扶手、盲道；通用设计。</p>` }
        ], refs: [] } },
      { title: '空间构成训练', brief: '做模型。',
        q: [
          { stem: '模型制作的作用是：', options: ['推敲体量与空间关系', '装饰', '替代施工图', '算成本'], answer: 0, explain: '推敲。' },
          { stem: '材料在模型中的选择应：', options: ['表达结构关系与质感', '越贵越好', '越薄越好', '随意'], answer: 0, explain: '表达。' },
          { stem: '评图关注：', options: ['概念、空间逻辑与表达', '尺寸', '材料贵', '数量'], answer: 0, explain: '逻辑。' }
        ],
        doc: { lead: '这一章讲训练。', sections: [
          { id: 'model', title: '模型', html: `<p>草模、工作模型、成果模型；材料与工具。</p>` },
          { id: 'review', title: '评图', html: `<p>空间逻辑、尺度与表达；互评与迭代。</p>` }
        ], refs: [] } }
    ] },
    { name: '设计概论', chapters: [
      { title: '设计是什么', brief: '定义。',
        q: [
          { stem: '设计的本质是：', options: ['有目的地解决问题并创造价值', '画得好看', '装饰', '模仿'], answer: 0, explain: '解决问题。' },
          { stem: '环境设计的研究对象是：', options: ['人工环境与人居空间', '只有建筑', '只有室内', '只有景观'], answer: 0, explain: '环境。' },
          { stem: '功能与形式的关系是：', options: ['形式追随功能并可超越', '形式无关功能', '功能无关形式', '二者对立'], answer: 0, explain: '关系。' }
        ],
        doc: { lead: '这一章讲定义。', sections: [
          { id: 'definition', title: '定义', html: `<p>设计的内涵；环境设计的范围与边界。</p>` },
          { id: 'value', title: '价值', html: `<p>功能、审美、社会与生态价值；设计伦理。</p>` }
        ], refs: [] } },
      { title: '设计史脉络', brief: '从哪来。',
        q: [
          { stem: '包豪斯的核心主张是：', options: ['艺术与技术统一、为大众设计', '装饰至上', '复古', '手工艺复兴'], answer: 0, explain: '包豪斯。' },
          { stem: '现代主义建筑强调：', options: ['功能、理性与新材料', '装饰', '折衷', '仿古'], answer: 0, explain: '现代主义。' },
          { stem: '后现代建筑的特点是：', options: ['多元、符号与文脉', '单一', '极简唯一', '无装饰'], answer: 0, explain: '后现代。' }
        ],
        doc: { lead: '这一章讲历史。', sections: [
          { id: 'modern', title: '现代', html: `<p>工艺美术、新艺术、包豪斯、现代主义。</p>` },
          { id: 'postmodern', title: '后现代与当代', html: `<p>后现代、地域性、可持续与数字设计。</p>` }
        ], refs: [] } },
      { title: '设计门类与交叉', brief: '有哪些。',
        q: [
          { stem: '室内设计与景观设计的区别是：', options: ['内部空间 vs 外部环境', '规模', '材料', '价格'], answer: 0, explain: '对象。' },
          { stem: '环境设计需要协同的专业包括：', options: ['建筑、结构、设备、景观', '只有建筑', '只有结构', '只有景观'], answer: 0, explain: '协同。' },
          { stem: '服务设计与环境设计的关系是：', options: ['可结合设计使用流程与体验', '互斥', '无关', '相同'], answer: 0, explain: '结合。' }
        ],
        doc: { lead: '这一章讲门类。', sections: [
          { id: 'category', title: '门类', html: `<p>室内、景观、展陈、公共艺术；交叉整合。</p>` },
          { id: 'collaboration', title: '协同', html: `<p>建筑结构设备、施工与造价；专业配合。</p>` }
        ], refs: [] } },
      { title: '设计思维', brief: '怎么想。',
        q: [
          { stem: '设计思维的五阶段是：', options: ['共情、定义、构思、原型、测试', '只有构思', '只有原型', '只有测试'], answer: 0, explain: '五阶段。' },
          { stem: '场地调研的内容包括：', options: ['区位、交通、气候、文脉与使用人群', '只有区位', '只有交通', '只有气候'], answer: 0, explain: '多内容。' },
          { stem: '设计概念应：', options: ['由问题与场地推导', '拍脑袋', '抄案例', '只看喜好'], answer: 0, explain: '推导。' }
        ],
        doc: { lead: '这一章讲思维。', sections: [
          { id: 'process', title: '流程', html: `<p>共情、定义、构思、原型、测试；双钻模型。</p>` },
          { id: 'site', title: '场地', html: `<p>场地分析、人群与行为；概念生成。</p>` }
        ], refs: [] } },
      { title: '形式与美学', brief: '美学。',
        q: [
          { stem: '形式美法则包括：', options: ['对比统一、比例尺度、节奏韵律', '只有对比', '只有比例', '只有节奏'], answer: 0, explain: '多法则。' },
          { stem: '比例中常用的经典比例是：', options: ['黄金比与模数', '随机', '1:10', '无比例'], answer: 0, explain: '比例。' },
          { stem: '地域性设计强调：', options: ['回应气候、材料与文化', '复制传统', '拒绝现代', '无关联'], answer: 0, explain: '地域。' }
        ],
        doc: { lead: '这一章讲形式。', sections: [
          { id: 'law', title: '法则', html: `<p>对比统一、比例尺度、节奏韵律。</p>` },
          { id: 'regional', title: '地域', html: `<p>气候适应性、地方材料与建造；批判性地域主义。</p>` }
        ], refs: [] } },
      { title: '可持续设计', brief: '责任。',
        q: [
          { stem: '可持续设计强调：', options: ['全生命周期的环境与资源影响', '只降成本', '只美观', '只耐用'], answer: 0, explain: '全周期。' },
          { stem: '被动式设计的手段包括：', options: ['朝向、遮阳、自然通风与蓄热', '只有遮阳', '只有通风', '只有空调'], answer: 0, explain: '被动式。' },
          { stem: '绿色建筑评价关注：', options: ['节能、节水、材料与室内环境', '只有节能', '只有材料', '只有室内'], answer: 0, explain: '多指标。' }
        ],
        doc: { lead: '这一章讲可持续。', sections: [
          { id: 'passive', title: '被动式', html: `<p>朝向与体形、遮阳通风；蓄热与自然采光。</p>` },
          { id: 'assessment', title: '评价', html: `<p>绿色建筑标准、LCA；材料与碳排。</p>` }
        ], refs: [] } },
      { title: '设计产业与职业', brief: '怎么活。',
        q: [
          { stem: '环境设计的职业路径包括：', options: ['设计院、设计公司、甲方、自由职业', '只有设计院', '只有设计公司', '只有甲方'], answer: 0, explain: '多路径。' },
          { stem: '设计管理的作用是：', options: ['协调设计、成本与进度', '只管审美', '只管进度', '无作用'], answer: 0, explain: '管理。' },
          { stem: '注册建筑师/设计师制度的作用是：', options: ['保证专业能力与责任', '限制就业', '增加成本', '无作用'], answer: 0, explain: '执业。' }
        ],
        doc: { lead: '这一章讲职业。', sections: [
          { id: 'industry', title: '产业', html: `<p>设计院、事务所、地产、施工；分工与流程。</p>` },
          { id: 'career', title: '职业', html: `<p>执业资格、能力模型；作品集与合同。</p>` }
        ], refs: [] } },
      { title: '设计评论与写作', brief: '会说。',
        q: [
          { stem: '设计评论的结构是：', options: ['描述—分析—解释—评价', '只有描述', '只有评价', '只有分析'], answer: 0, explain: '四步。' },
          { stem: '案例分析应关注：', options: ['场地、策略、空间与建造', '只有照片', '只有面积', '只有造价'], answer: 0, explain: '综合。' },
          { stem: '设计说明应：', options: ['逻辑清晰、图文对应', '辞藻华丽', '越长越好', '只写感受'], answer: 0, explain: '逻辑。' }
        ],
        doc: { lead: '这一章讲评论。', sections: [
          { id: 'method', title: '方法', html: `<p>案例分析方法、图解表达；评价标准。</p>` },
          { id: 'writing', title: '写作', html: `<p>设计说明、研究报告；图版与文字。</p>` }
        ], refs: [] } }
    ] },
    { name: '建筑制图与表现', chapters: [
      { title: '平立剖面', brief: '基本图。',
        q: [
          { stem: '平面图的剖切高度通常在：', options: ['窗台以上、门窗洞口附近', '地面处', '屋顶', '基础'], answer: 0, explain: '剖切。' },
          { stem: '立面图表达：', options: ['建筑外部造型与门窗位置', '内部构造', '基础', '配筋'], answer: 0, explain: '立面。' },
          { stem: '剖面图的作用是：', options: ['表达内部空间与构造关系', '装饰', '算面积', '选材料'], answer: 0, explain: '剖面。' }
        ],
        doc: { lead: '这一章讲三图。', sections: [
          { id: 'plan', title: '平面', html: `<p>剖切位置、尺寸标注、家具布置；轴网。</p>` },
          { id: 'section', title: '立面与剖面', html: `<p>标高、材料、构造层次；门窗表。</p>` }
        ], refs: [] } },
      { title: '详图与节点', brief: '细节。',
        q: [
          { stem: '节点详图的比例通常为：', options: ['1:1 至 1:20', '1:100', '1:500', '1:1000'], answer: 0, explain: '大比例。' },
          { stem: '节点设计要解决：', options: ['构造连接、收口与防水', '只有美观', '只有材料', '只有成本'], answer: 0, explain: '构造。' },
          { stem: '索引符号的作用是：', options: ['指向详图或做法', '标尺寸', '标标高', '标材料'], answer: 0, explain: '索引。' }
        ],
        doc: { lead: '这一章讲节点。', sections: [
          { id: 'detail', title: '详图', html: `<p>墙身、吊顶、地面、门窗节点；层次与收口。</p>` },
          { id: 'waterproof', title: '防水与保温', html: `<p>构造层次、防水收头；热桥处理。</p>` }
        ], refs: [] } },
      { title: '透视与轴测', brief: '立体表达。',
        q: [
          { stem: '轴测图的特点是：', options: ['平行投影、无消失点', '有消失点', '中心投影', '变形大'], answer: 0, explain: '轴测。' },
          { stem: '两点透视适合表现：', options: ['建筑外部转角', '室内正对墙', '平面', '剖面'], answer: 0, explain: '两点。' },
          { stem: '透视中视高的选择影响：', options: ['空间感受与构图', '只有比例', '只有成本', '无影响'], answer: 0, explain: '视高。' }
        ],
        doc: { lead: '这一章讲透视。', sections: [
          { id: 'axon', title: '轴测', html: `<p>正等测、斜二测；快速表达。</p>` },
          { id: 'perspective', title: '透视', html: `<p>一点/两点、视高视距；构图与配景。</p>` }
        ], refs: [] } },
      { title: '效果图表现', brief: '逼真。',
        q: [
          { stem: '效果图的光环境设计应：', options: ['匹配时间与氛围', '越亮越好', '无所谓', '只用夜景'], answer: 0, explain: '光环境。' },
          { stem: '材质表现的关键是：', options: ['反射、粗糙度与纹理比例', '只有颜色', '只有亮度', '无关键'], answer: 0, explain: '材质。' },
          { stem: '后期处理的作用是：', options: ['调整氛围与配景', '替代建模', '做施工图', '算造价'], answer: 0, explain: '后期。' }
        ],
        doc: { lead: '这一章讲效果。', sections: [
          { id: 'light', title: '光', html: `<p>自然光与人工光、时间氛围；曝光与白平衡。</p>` },
          { id: 'post', title: '后期', html: `<p>材质校正、配景与氛围；避免过度。</p>` }
        ], refs: [] } },
      { title: '施工图基础', brief: '能施工。',
        q: [
          { stem: '施工图的作用是：', options: ['指导施工与验收', '装饰', '汇报', '算面积'], answer: 0, explain: '指导。' },
          { stem: '图纸目录与设计说明的作用是：', options: ['组织图纸与统一要求', '装饰', '凑页数', '无作用'], answer: 0, explain: '说明。' },
          { stem: '尺寸标注应：', options: ['完整、闭合、与图纸一致', '随意', '只标总尺寸', '不标'], answer: 0, explain: '标注。' }
        ],
        doc: { lead: '这一章讲施工图。', sections: [
          { id: 'set', title: '图纸组成', html: `<p>目录、说明、平立剖、详图、门窗表。</p>` },
          { id: 'standard', title: '规范', html: `<p>制图标准、标注与图例；校对与审核。</p>` }
        ], refs: [] } },
      { title: '数字化制图', brief: '工具。',
        q: [
          { stem: 'BIM 的核心价值是：', options: ['三维协同与信息集成', '只画图', '只渲染', '只算量'], answer: 0, explain: 'BIM。' },
          { stem: 'CAD 布局与打印样式的作用是：', options: ['统一出图比例与线宽', '装饰', '加密', '压缩'], answer: 0, explain: '出图。' },
          { stem: '模型与图纸的一致性应：', options: ['通过同源模型保证', '人工核对唯一', '不保证', '随机'], answer: 0, explain: '一致性。' }
        ],
        doc: { lead: '这一章讲数字化。', sections: [
          { id: 'bim', title: 'BIM', html: `<p>Revit/ArchiCAD；协同与碰撞检查；出图。</p>` },
          { id: 'cad', title: 'CAD 出图', html: `<p>布局、比例、线宽；批量打印与归档。</p>` }
        ], refs: [] } },
      { title: '制图训练', brief: '画一套。',
        q: [
          { stem: '抄绘优秀图纸的作用是：', options: ['学习表达与构造逻辑', '装饰', '凑数量', '无作用'], answer: 0, explain: '学习。' },
          { stem: '图纸自检的重点：', options: ['投影、尺寸、标注与图例', '只有尺寸', '只有投影', '只有图例'], answer: 0, explain: '自检。' },
          { stem: '出图前应：', options: ['检查比例、线宽与文字大小', '直接打印', '只看效果', '不检查'], answer: 0, explain: '出图。' }
        ],
        doc: { lead: '这一章讲训练。', sections: [
          { id: 'copy', title: '抄绘', html: `<p>平立剖与节点；理解构造与比例。</p>` },
          { id: 'check', title: '校核', html: `<p>图纸校核清单；出图设置。</p>` }
        ], refs: [] } }
    ] },
    { name: '室内设计原理', chapters: [
      { title: '室内设计概述', brief: '是什么。',
        q: [
          { stem: '室内设计的核心目标是：', options: ['满足功能并提升空间体验', '只求美观', '只求省钱', '只换家具'], answer: 0, explain: '功能体验。' },
          { stem: '室内设计的内容包括：', options: ['空间、界面、家具、照明、陈设', '只有家具', '只有界面', '只有照明'], answer: 0, explain: '多内容。' },
          { stem: '室内设计与建筑设计的关系是：', options: ['延续与深化', '互斥', '无关', '替代'], answer: 0, explain: '延续。' }
        ],
        doc: { lead: '这一章讲概述。', sections: [
          { id: 'concept', title: '概念', html: `<p>范围与内容；与建筑、景观的关系。</p>` },
          { id: 'goal', title: '目标', html: `<p>功能、体验、安全与可持续。</p>` }
        ], refs: [] } },
      { title: '功能与分区', brief: '怎么用。',
        q: [
          { stem: '功能分区的原则包括：', options: ['动静分区、公私分区、洁污分区', '只有动静', '只有公私', '只有洁污'], answer: 0, explain: '多原则。' },
          { stem: '动线设计的目标是：', options: ['缩短路径、避免交叉干扰', '增加路径', '越绕越好', '无目标'], answer: 0, explain: '动线。' },
          { stem: '面积配比的确定依据：', options: ['使用需求与规范', '随意', '越平均越好', '只看预算'], answer: 0, explain: '配比。' }
        ],
        doc: { lead: '这一章讲分区。', sections: [
          { id: 'zone', title: '分区', html: `<p>动静、公私、洁污；功能关系图。</p>` },
          { id: 'circulation', title: '动线', html: `<p>主次动线、交叉与迂回；无障碍。</p>` }
        ], refs: [] } },
      { title: '界面与色彩', brief: '表面。',
        q: [
          { stem: '界面设计包括：', options: ['地面、墙面、顶面', '只有地面', '只有墙面', '只有顶面'], answer: 0, explain: '三界面。' },
          { stem: '吊顶的主要作用包括：', options: ['遮蔽设备、划分空间、调光', '只有美观', '只有遮蔽', '只有隔声'], answer: 0, explain: '多作用。' },
          { stem: '色彩设计应：', options: ['与功能、采光和风格协调', '只按流行', '越艳越好', '只用白色'], answer: 0, explain: '协调。' }
        ],
        doc: { lead: '这一章讲界面。', sections: [
          { id: 'surface', title: '界面', html: `<p>地面、墙面、顶面；材料与收口。</p>` },
          { id: 'color', title: '色彩', html: `<p>色调与对比、采光配合；风格统一。</p>` }
        ], refs: [] } },
      { title: '家具与陈设', brief: '布置。',
        q: [
          { stem: '家具布置应首先满足：', options: ['使用功能与通行尺度', '对称', '数量多', '色彩搭配'], answer: 0, explain: '功能。' },
          { stem: '软装陈设的作用是：', options: ['塑造氛围与个性', '只有装饰', '只有实用', '无作用'], answer: 0, explain: '氛围。' },
          { stem: '定制家具的优势是：', options: ['贴合空间与需求', '便宜', '快速', '通用'], answer: 0, explain: '定制。' }
        ],
        doc: { lead: '这一章讲家具。', sections: [
          { id: 'furniture', title: '家具', html: `<p>尺度与布置、通行宽度；定制与成品。</p>` },
          { id: 'decor', title: '陈设', html: `<p>软装、艺术品与绿植；风格与预算。</p>` }
        ], refs: [] } },
      { title: '照明设计', brief: '光。',
        q: [
          { stem: '室内照明的层次包括：', options: ['基础照明、重点照明、装饰照明', '只有基础', '只有重点', '只有装饰'], answer: 0, explain: '三层次。' },
          { stem: '色温影响：', options: ['空间氛围与舒适度', '只有亮度', '只有能耗', '无影响'], answer: 0, explain: '色温。' },
          { stem: '眩光控制的方法包括：', options: ['遮光角、柔光、合理布置', '只有遮光', '只有柔光', '无方法'], answer: 0, explain: '眩光。' }
        ],
        doc: { lead: '这一章讲照明。', sections: [
          { id: 'layer', title: '层次', html: `<p>基础、重点、装饰；场景与调光。</p>` },
          { id: 'quality', title: '质量', html: `<p>照度、显色、眩光与频闪；节能。</p>` }
        ], refs: [] } },
      { title: '风格与材料', brief: '调性。',
        q: [
          { stem: '室内风格的形成依赖：', options: ['空间、材料、色彩与细部', '只有家具', '只有颜色', '只有灯具'], answer: 0, explain: '综合。' },
          { stem: '材料选择应兼顾：', options: ['美观、耐久、环保与成本', '只有美观', '只有成本', '只有环保'], answer: 0, explain: '兼顾。' },
          { stem: '收口设计的作用是：', options: ['保证构造完成度与观感', '装饰唯一', '省成本', '无作用'], answer: 0, explain: '收口。' }
        ],
        doc: { lead: '这一章讲风格。', sections: [
          { id: 'style', title: '风格', html: `<p>现代、新中式、工业、侘寂；要素提炼。</p>` },
          { id: 'material', title: '材料与收口', html: `<p>石材木饰面、金属玻璃；节点收口。</p>` }
        ], refs: [] } },
      { title: '室内设计流程', brief: '怎么做。',
        q: [
          { stem: '室内设计的流程包括：', options: ['调研—概念—方案—施工图—配合施工', '只有方案', '只有施工图', '只有概念'], answer: 0, explain: '流程。' },
          { stem: '方案汇报的关键是：', options: ['讲清问题、策略与效果', '只放效果图', '只讲材料', '只讲造价'], answer: 0, explain: '汇报。' },
          { stem: '施工配合的作用是：', options: ['保证设计落地与质量', '装饰', '算量', '无作用'], answer: 0, explain: '落地。' }
        ],
        doc: { lead: '这一章讲流程。', sections: [
          { id: 'process', title: '流程', html: `<p>任务书、概念、方案、扩初、施工图；节点控制。</p>` },
          { id: 'coordination', title: '配合', html: `<p>现场交底、材料样板、验收；变更管理。</p>` }
        ], refs: [] } },
      { title: '室内设计课程设计', brief: '做一套。',
        q: [
          { stem: '课程设计的交付包括：', options: ['平立剖、效果图、材料表与节点', '只有效果图', '只有平面', '只有材料表'], answer: 0, explain: '完整。' },
          { stem: '评图重点是：', options: ['功能合理、空间品质与图纸完整', '效果图好看唯一', '材料贵', '页数'], answer: 0, explain: '综合。' },
          { stem: '设计说明应：', options: ['讲清概念与落地策略', '只写面积', '只写材料', '省略'], answer: 0, explain: '说明。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'task', title: '题目', html: `<p>住宅/小型商业空间；面积与功能要求。</p>` },
          { id: 'deliver', title: '交付', html: `<p>图纸、效果图、材料与节点；答辩。</p>` }
        ], refs: [] } }
    ] },
    { name: '材料与构造', chapters: [
      { title: '常用材料', brief: '有哪些。',
        q: [
          { stem: '室内常用材料包括：', options: ['石材、木材、金属、玻璃、涂料', '只有石材', '只有木材', '只有涂料'], answer: 0, explain: '多种。' },
          { stem: '材料的性能指标包括：', options: ['强度、耐久、防火、环保', '只有强度', '只有耐久', '只有防火'], answer: 0, explain: '多指标。' },
          { stem: '天然材料与人造材料的区别是：', options: ['来源与加工方式', '价格', '颜色', '重量'], answer: 0, explain: '来源。' }
        ],
        doc: { lead: '这一章讲材料。', sections: [
          { id: 'type', title: '类型', html: `<p>石材、陶瓷、木、金属、玻璃、涂料、织物。</p>` },
          { id: 'property', title: '性能', html: `<p>强度、耐磨、防火等级、环保；价格与供货。</p>` }
        ], refs: [] } },
      { title: '构造基础', brief: '怎么装。',
        q: [
          { stem: '构造设计的核心是：', options: ['连接、固定与收口', '只有美观', '只有材料', '只有成本'], answer: 0, explain: '构造。' },
          { stem: '干挂与湿贴的区别是：', options: ['是否用砂浆粘结', '材料', '价格', '颜色'], answer: 0, explain: '干挂。' },
          { stem: '变形缝的作用是：', options: ['吸收变形、防止开裂', '装饰', '分隔空间', '防水唯一'], answer: 0, explain: '变形缝。' }
        ],
        doc: { lead: '这一章讲构造。', sections: [
          { id: 'connection', title: '连接', html: `<p>干挂、粘贴、龙骨；五金与受力。</p>` },
          { id: 'joint', title: '缝与收口', html: `<p>变形缝、伸缩缝；收口条与密封。</p>` }
        ], refs: [] } },
      { title: '隔墙与吊顶', brief: '分隔与顶部。',
        q: [
          { stem: '轻钢龙骨隔墙的优点：', options: ['轻、薄、施工快', '隔声最好', '最便宜', '防火最好'], answer: 0, explain: '轻钢。' },
          { stem: '吊顶龙骨的作用是：', options: ['承托面板与设备', '只承重', '只装饰', '无作用'], answer: 0, explain: '承托。' },
          { stem: '隔声构造的关键是：', options: ['质量、空腔与密封', '只有厚度', '只有材料', '只有面层'], answer: 0, explain: '隔声。' }
        ],
        doc: { lead: '这一章讲隔墙。', sections: [
          { id: 'partition', title: '隔墙', html: `<p>轻钢龙骨、砌块、玻璃隔断；隔声与防火。</p>` },
          { id: 'ceiling', title: '吊顶', html: `<p>龙骨体系、检修口；设备综合。</p>` }
        ], refs: [] } },
      { title: '地面与墙面', brief: '面层。',
        q: [
          { stem: '地面构造通常包括：', options: ['基层、找平层、面层', '只有面层', '只有基层', '只有找平'], answer: 0, explain: '层次。' },
          { stem: '地暖地面的构造需注意：', options: ['保温层与伸缩缝', '只有面层', '只有管道', '无要求'], answer: 0, explain: '地暖。' },
          { stem: '墙面饰面的常见做法：', options: ['涂料、壁纸、木饰面、石材干挂', '只有涂料', '只有壁纸', '只有木饰面'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲地面。', sections: [
          { id: 'floor', title: '地面', html: `<p>构造层次、地暖与防潮；材料选择。</p>` },
          { id: 'wall', title: '墙面', html: `<p>涂料、壁纸、木饰面、石材；基层与找平。</p>` }
        ], refs: [] } },
      { title: '门窗与五金', brief: '开口。',
        q: [
          { stem: '门窗性能的关键指标：', options: ['气密、水密、抗风压、保温', '只有气密', '只有水密', '只有保温'], answer: 0, explain: '四性。' },
          { stem: '五金件对使用体验影响：', options: ['显著（开启、静音、寿命）', '无影响', '只影响外观', '只影响价格'], answer: 0, explain: '五金。' },
          { stem: '防火门的等级选择依据：', options: ['所在部位的防火要求', '价格', '颜色', '品牌'], answer: 0, explain: '防火。' }
        ],
        doc: { lead: '这一章讲门窗。', sections: [
          { id: 'window', title: '门窗', html: `<p>型材与玻璃、四性；开启方式。</p>` },
          { id: 'hardware', title: '五金', html: `<p>合页、锁具、滑轨；防火门与智能锁。</p>` }
        ], refs: [] } },
      { title: '防水与保温', brief: '耐久。',
        q: [
          { stem: '卫生间防水构造的关键：', options: ['基层处理、防水层、保护层与闭水试验', '只有防水层', '只有闭水试验', '无要求'], answer: 0, explain: '防水。' },
          { stem: '保温层的作用是：', options: ['减少热损失与结露', '装饰', '隔声唯一', '防火'], answer: 0, explain: '保温。' },
          { stem: '热桥会导致：', options: ['局部结露与能耗增加', '无影响', '更保温', '更美观'], answer: 0, explain: '热桥。' }
        ],
        doc: { lead: '这一章讲防水。', sections: [
          { id: 'waterproof', title: '防水', html: `<p>防水材料、节点收头；闭水试验。</p>` },
          { id: 'insulation', title: '保温', html: `<p>保温材料、热桥处理；防结露。</p>` }
        ], refs: [] } },
      { title: '材料与工艺实训', brief: '看实物。',
        q: [
          { stem: '材料样板的作用是：', options: ['确认颜色质感与工艺', '装饰', '算量', '归档'], answer: 0, explain: '样板。' },
          { stem: '工艺样板的目的是：', options: ['验证构造做法与效果', '装饰', '省成本', '无目的'], answer: 0, explain: '工艺。' },
          { stem: '现场巡检应关注：', options: ['材料规格、做法与收口', '只有进度', '只有成本', '只有外观'], answer: 0, explain: '巡检。' }
        ],
        doc: { lead: '这一章讲实训。', sections: [
          { id: 'sample', title: '样板', html: `<p>材料样板、工艺样板；封样与确认。</p>` },
          { id: 'inspection', title: '巡检', html: `<p>做法核对、隐蔽验收；问题整改。</p>` }
        ], refs: [] } },
      { title: '构造设计训练', brief: '画节点。',
        q: [
          { stem: '节点图的表达重点是：', options: ['层次、材料、连接与尺寸', '只有材料', '只有尺寸', '只有效果'], answer: 0, explain: '表达。' },
          { stem: '节点设计应：', options: ['满足受力、防水与施工可行', '只求好看', '越复杂越好', '忽略施工'], answer: 0, explain: '可行。' },
          { stem: '常见节点错误包括：', options: ['层次缺失、收口不当、防水不到位', '只有收口', '只有防水', '无错误'], answer: 0, explain: '错误。' }
        ],
        doc: { lead: '这一章讲训练。', sections: [
          { id: 'detail', title: '节点', html: `<p>墙面、吊顶、地面、门窗节点；1:5 至 1:10。</p>` },
          { id: 'review', title: '评图', html: `<p>构造合理性、施工可行性；错误清单。</p>` }
        ], refs: [] } }
    ] },
    { name: '景观设计', chapters: [
      { title: '景观设计概述', brief: '是什么。',
        q: [
          { stem: '景观设计的研究对象是：', options: ['室外空间与自然人文要素', '只有植物', '只有铺装', '只有建筑'], answer: 0, explain: '室外。' },
          { stem: '景观设计的核心目标是：', options: ['协调人、自然与场地关系', '只求美观', '只种树', '只做铺装'], answer: 0, explain: '协调。' },
          { stem: '景观与园林的区别是：', options: ['范围更广、强调生态与公共性', '相同', '园林更现代', '无差别'], answer: 0, explain: '范围。' }
        ],
        doc: { lead: '这一章讲概述。', sections: [
          { id: 'scope', title: '范围', html: `<p>公园、街区、滨水、庭院；生态与公共性。</p>` },
          { id: 'goal', title: '目标', html: `<p>功能、生态、文化与美学；可持续。</p>` }
        ], refs: [] } },
      { title: '场地分析', brief: '读懂场地。',
        q: [
          { stem: '场地分析的内容包括：', options: ['区位、地形、水系、植被、气候与人群', '只有地形', '只有植被', '只有人群'], answer: 0, explain: '多内容。' },
          { stem: 'SWOT 分析用于：', options: ['综合内外部条件', '算造价', '选植物', '画图'], answer: 0, explain: 'SWOT。' },
          { stem: '场地竖向设计的作用是：', options: ['解决排水与高差', '装饰', '增加成本', '无作用'], answer: 0, explain: '竖向。' }
        ],
        doc: { lead: '这一章讲场地。', sections: [
          { id: 'survey', title: '调研', html: `<p>区位交通、地形水系、植被与气候；人群行为。</p>` },
          { id: 'grading', title: '竖向', html: `<p>高程与坡度、排水；土方平衡。</p>` }
        ], refs: [] } },
      { title: '景观要素', brief: '有哪些。',
        q: [
          { stem: '景观要素包括：', options: ['地形、水体、植物、铺装、构筑物', '只有植物', '只有水体', '只有铺装'], answer: 0, explain: '多要素。' },
          { stem: '植物的作用包括：', options: ['造景、遮荫、生态与围合', '只有造景', '只有遮荫', '只有生态'], answer: 0, explain: '多作用。' },
          { stem: '铺装设计应考虑：', options: ['防滑、排水、材质与图案', '只有图案', '只有材质', '只有颜色'], answer: 0, explain: '铺装。' }
        ],
        doc: { lead: '这一章讲要素。', sections: [
          { id: 'landform', title: '地形与水体', html: `<p>微地形、驳岸；水景安全与维护。</p>` },
          { id: 'plant', title: '植物与铺装', html: `<p>植物配置层次、季相；铺装防滑排水。</p>` }
        ], refs: [] } },
      { title: '植物配置', brief: '种什么。',
        q: [
          { stem: '植物配置的基本原则：', options: ['适地适树、层次丰富、季相变化', '只求名贵', '只求整齐', '随意'], answer: 0, explain: '原则。' },
          { stem: '乔灌草搭配的作用是：', options: ['形成层次与生态稳定性', '增加成本', '减少绿地', '无作用'], answer: 0, explain: '层次。' },
          { stem: '乡土植物的优势：', options: ['适应性强、维护成本低', '更名贵', '更好看', '更稀有'], answer: 0, explain: '乡土。' }
        ],
        doc: { lead: '这一章讲植物。', sections: [
          { id: 'principle', title: '原则', html: `<p>适地适树、层次与季相；密度与冠幅。</p>` },
          { id: 'species', title: '种类', html: `<p>乔木、灌木、地被、水生；乡土与养护。</p>` }
        ], refs: [] } },
      { title: '景观空间与尺度', brief: '人的尺度。',
        q: [
          { stem: '景观空间尺度应基于：', options: ['人的视觉与行为尺度', '只有面积', '只有造价', '只有植物'], answer: 0, explain: '尺度。' },
          { stem: '围合感强的空间适合：', options: ['停留与私密活动', '快速通行', '大型集会', '停车场'], answer: 0, explain: '围合。' },
          { stem: '视线设计的作用是：', options: ['形成对景与引导', '增加成本', '无作用', '遮挡唯一'], answer: 0, explain: '视线。' }
        ],
        doc: { lead: '这一章讲空间。', sections: [
          { id: 'scale', title: '尺度', html: `<p>人体尺度、D/H 比；开放与围合。</p>` },
          { id: 'view', title: '视线', html: `<p>对景、框景、借景；视线通廊。</p>` }
        ], refs: [] } },
      { title: '硬质景观', brief: '构筑。',
        q: [
          { stem: '硬质景观包括：', options: ['铺装、台阶、挡墙、构筑物、小品', '只有铺装', '只有台阶', '只有小品'], answer: 0, explain: '多类。' },
          { stem: '无障碍坡道的坡度要求通常不大于：', options: ['1:12', '1:2', '1:5', '1:1'], answer: 0, explain: '1:12。' },
          { stem: '户外材料的耐久性重点：', options: ['抗冻、防滑、耐候', '只有颜色', '只有价格', '只有品牌'], answer: 0, explain: '耐久。' }
        ],
        doc: { lead: '这一章讲硬质。', sections: [
          { id: 'paving', title: '铺装与台阶', html: `<p>材料、防滑、排水；无障碍坡道。</p>` },
          { id: 'structure', title: '构筑与小品', html: `<p>挡墙、廊架、座椅；结构与耐久。</p>` }
        ], refs: [] } },
      { title: '生态与可持续', brief: '生态。',
        q: [
          { stem: '海绵城市的核心是：', options: ['渗、滞、蓄、净、用、排', '只做管道', '只做蓄水', '只做绿化'], answer: 0, explain: '海绵。' },
          { stem: '雨水花园的作用是：', options: ['滞蓄净化雨水', '装饰', '增加硬地', '无作用'], answer: 0, explain: '雨水花园。' },
          { stem: '生态设计应：', options: ['尊重场地自然过程与生物多样性', '只求整齐', '全部硬化', '引入外来种'], answer: 0, explain: '生态。' }
        ],
        doc: { lead: '这一章讲生态。', sections: [
          { id: 'sponge', title: '海绵', html: `<p>透水铺装、下凹绿地、雨水花园；年径流控制。</p>` },
          { id: 'biodiversity', title: '多样性', html: `<p>生境营造、乡土植物；低维护设计。</p>` }
        ], refs: [] } },
      { title: '景观课程设计', brief: '做一个。',
        q: [
          { stem: '景观课程设计的交付包括：', options: ['总平、竖向、种植、效果与说明', '只有总平', '只有效果图', '只有种植'], answer: 0, explain: '完整。' },
          { stem: '评图重点是：', options: ['场地回应、空间组织与表达', '效果图好看唯一', '植物贵', '页数'], answer: 0, explain: '综合。' },
          { stem: '设计说明应讲清：', options: ['问题、策略与生态措施', '只写面积', '只写植物', '省略'], answer: 0, explain: '说明。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'task', title: '题目', html: `<p>街头绿地/校园景观；面积与功能要求。</p>` },
          { id: 'deliver', title: '交付', html: `<p>图纸、效果、种植表；答辩。</p>` }
        ], refs: [] } }
    ] },
    { name: '公共空间设计', chapters: [
      { title: '公共空间概述', brief: '公共性。',
        q: [
          { stem: '公共空间的核心特征是：', options: ['开放可达、面向公众', '私有', '封闭', '收费唯一'], answer: 0, explain: '公共。' },
          { stem: '公共空间的类型包括：', options: ['街道、广场、公园、滨水、室内公共厅', '只有广场', '只有公园', '只有街道'], answer: 0, explain: '多类型。' },
          { stem: '公共空间品质的关键：', options: ['安全、舒适、活力与包容', '只有美观', '只有规模', '只有造价'], answer: 0, explain: '品质。' }
        ],
        doc: { lead: '这一章讲概述。', sections: [
          { id: 'concept', title: '概念', html: `<p>公共性、可达性；类型与层级。</p>` },
          { id: 'quality', title: '品质', html: `<p>安全舒适、活力包容；使用后评价。</p>` }
        ], refs: [] } },
      { title: '行为与需求', brief: '人怎么用。',
        q: [
          { stem: '公共空间行为研究的方法：', options: ['观察、访谈、行为地图', '只有访谈', '只有观察', '猜'], answer: 0, explain: '多种。' },
          { stem: '停留行为需要的条件：', options: ['边界、座椅、遮荫与视线', '只有座椅', '只有遮荫', '空旷唯一'], answer: 0, explain: '停留。' },
          { stem: '不同人群的需求应：', options: ['兼顾老人、儿童与残障者', '只考虑成人', '只考虑年轻人', '只考虑游客'], answer: 0, explain: '包容。' }
        ],
        doc: { lead: '这一章讲行为。', sections: [
          { id: 'research', title: '研究', html: `<p>行为观察、行为地图；活动类型。</p>` },
          { id: 'need', title: '需求', html: `<p>停留与通行、边界效应；全龄友好。</p>` }
        ], refs: [] } },
      { title: '空间组织与活力', brief: '让人来。',
        q: [
          { stem: '提升空间活力的手段包括：', options: ['功能混合、活动策划、界面开放', '只有绿化', '只有座椅', '只有雕塑'], answer: 0, explain: '活力。' },
          { stem: '街道空间设计应优先考虑：', options: ['步行与公共活动', '机动车速度', '停车数量', '广告位'], answer: 0, explain: '步行。' },
          { stem: '边界空间的处理可以：', options: ['形成丰富的过渡与停留', '无影响', '增加成本', '减少人流'], answer: 0, explain: '边界。' }
        ],
        doc: { lead: '这一章讲活力。', sections: [
          { id: 'mix', title: '混合', html: `<p>功能混合、时间共享；首层界面。</p>` },
          { id: 'edge', title: '边界', html: `<p>过渡空间、柔性边界；街道断面。</p>` }
        ], refs: [] } },
      { title: '公共设施与安全', brief: '配套。',
        q: [
          { stem: '公共设施包括：', options: ['座椅、照明、标识、卫生间、垃圾箱', '只有座椅', '只有照明', '只有标识'], answer: 0, explain: '多类。' },
          { stem: '照明设计对安全的影响：', options: ['显著（可见性与安全感）', '无影响', '只影响美观', '只影响能耗'], answer: 0, explain: '照明。' },
          { stem: '公共空间安全设计包括：', options: ['视线通透、防滑、防护与疏散', '只有防滑', '只有防护', '只有疏散'], answer: 0, explain: '安全。' }
        ],
        doc: { lead: '这一章讲设施。', sections: [
          { id: 'facility', title: '设施', html: `<p>座椅与遮荫、标识与照明；服务半径。</p>` },
          { id: 'safety', title: '安全', html: `<p>视线与盲区、防滑防护；应急疏散。</p>` }
        ], refs: [] } },
      { title: '城市更新与存量', brief: '改造。',
        q: [
          { stem: '城市更新的核心是：', options: ['提升品质与活力而非大拆大建', '全部拆除', '只做地产', '只做绿化'], answer: 0, explain: '更新。' },
          { stem: '微更新的特点是：', options: ['小尺度、渐进式、低成本', '大规模', '高成本', '一次性'], answer: 0, explain: '微更新。' },
          { stem: '更新中应保留：', options: ['场所记忆与社区网络', '全部建筑', '什么都不留', '只留立面'], answer: 0, explain: '保留。' }
        ],
        doc: { lead: '这一章讲更新。', sections: [
          { id: 'renewal', title: '更新', html: `<p>存量评估、功能置换；渐进式改造。</p>` },
          { id: 'memory', title: '记忆', html: `<p>场所精神、社区参与；文化延续。</p>` }
        ], refs: [] } },
      { title: '社区参与与治理', brief: '一起建。',
        q: [
          { stem: '公众参与的作用是：', options: ['提升方案适配性与认同感', '拖延', '增加成本', '无作用'], answer: 0, explain: '参与。' },
          { stem: '参与式设计的方法包括：', options: ['工作坊、问卷、共建活动', '只有问卷', '只有工作坊', '只开会'], answer: 0, explain: '多种。' },
          { stem: '后期运营的重要性：', options: ['决定空间长期活力', '不重要', '只影响外观', '只影响造价'], answer: 0, explain: '运营。' }
        ],
        doc: { lead: '这一章讲治理。', sections: [
          { id: 'participation', title: '参与', html: `<p>工作坊、共创；意见征集与反馈。</p>` },
          { id: 'operation', title: '运营', html: `<p>活动策划、维护机制；社区自治。</p>` }
        ], refs: [] } },
      { title: '公共空间案例分析', brief: '看案例。',
        q: [
          { stem: '案例分析应关注：', options: ['问题、策略、使用与运营', '只有照片', '只有面积', '只有造价'], answer: 0, explain: '综合。' },
          { stem: '使用后评价（POE）的作用：', options: ['检验设计效果并改进', '装饰', '考核', '归档'], answer: 0, explain: 'POE。' },
          { stem: '好案例的可借鉴之处在于：', options: ['方法与机制而非形式复制', '形式照搬', '材料复制', '规模复制'], answer: 0, explain: '借鉴。' }
        ],
        doc: { lead: '这一章讲案例。', sections: [
          { id: 'analysis', title: '分析', html: `<p>背景、策略、空间与运营；POE 方法。</p>` },
          { id: 'lesson', title: '启示', html: `<p>可迁移的方法；避免形式模仿。</p>` }
        ], refs: [] } },
      { title: '公共空间课程设计', brief: '做一个。',
        q: [
          { stem: '课程设计交付包括：', options: ['总平、剖面、设施与效果', '只有效果图', '只有总平', '只有说明'], answer: 0, explain: '完整。' },
          { stem: '评图重点是：', options: ['公共性、行为支持与表达', '效果好看唯一', '造价低', '页数'], answer: 0, explain: '综合。' },
          { stem: '方案应说明：', options: ['如何回应人群与运营', '只写面积', '只写材料', '省略'], answer: 0, explain: '说明。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'task', title: '题目', html: `<p>社区广场/街道更新；面积与人群要求。</p>` },
          { id: 'deliver', title: '交付', html: `<p>图纸、活动策划、效果；答辩。</p>` }
        ], refs: [] } }
    ] },
    { name: '施工图与预算', chapters: [
      { title: '施工图体系', brief: '图纸组成。',
        q: [
          { stem: '室内施工图通常包括：', options: ['目录说明、平立剖、详图、水电、材料表', '只有平面', '只有详图', '只有材料表'], answer: 0, explain: '完整。' },
          { stem: '设计说明的作用是：', options: ['统一材料做法与技术要求', '装饰', '凑页数', '无作用'], answer: 0, explain: '说明。' },
          { stem: '图纸深度应满足：', options: ['施工与验收需要', '只看效果', '只汇报', '无要求'], answer: 0, explain: '深度。' }
        ],
        doc: { lead: '这一章讲体系。', sections: [
          { id: 'set', title: '组成', html: `<p>目录、说明、平立剖、详图、机电、材料表。</p>` },
          { id: 'depth', title: '深度', html: `<p>各阶段图纸深度；出图标准。</p>` }
        ], refs: [] } },
      { title: '平面与立面深化', brief: '画细。',
        q: [
          { stem: '平面深化应包括：', options: ['家具定位、地面材质、索引与尺寸', '只有墙体', '只有家具', '只有尺寸'], answer: 0, explain: '深化。' },
          { stem: '立面深化应表达：', options: ['材质分格、收口与设备点位', '只有颜色', '只有高度', '只有文字'], answer: 0, explain: '立面。' },
          { stem: '索引的作用是：', options: ['指向详图与做法', '标尺寸', '标标高', '标材料'], answer: 0, explain: '索引。' }
        ],
        doc: { lead: '这一章讲深化。', sections: [
          { id: 'plan', title: '平面', html: `<p>家具与材质、索引；机电点位协调。</p>` },
          { id: 'elevation', title: '立面', html: `<p>分格与收口、设备末端；尺寸链。</p>` }
        ], refs: [] } },
      { title: '节点详图', brief: '细部。',
        q: [
          { stem: '节点详图的常见比例：', options: ['1:1 至 1:10', '1:100', '1:200', '1:500'], answer: 0, explain: '大比例。' },
          { stem: '节点应表达：', options: ['层次、材料、连接与密封', '只有材料', '只有尺寸', '只有颜色'], answer: 0, explain: '表达。' },
          { stem: '节点漏画的后果是：', options: ['施工随意、质量失控', '无影响', '更省钱', '更美观'], answer: 0, explain: '后果。' }
        ],
        doc: { lead: '这一章讲节点。', sections: [
          { id: 'detail', title: '详图', html: `<p>吊顶、墙面、地面、门窗；索引与编号。</p>` },
          { id: 'quality', title: '质量', html: `<p>构造合理、做法明确；图纸会审。</p>` }
        ], refs: [] } },
      { title: '机电配合', brief: '水暖电。',
        q: [
          { stem: '吊顶标高需协调：', options: ['风管、水管、桥架与灯具', '只有灯具', '只有风管', '只有水管'], answer: 0, explain: '综合。' },
          { stem: '点位图的作用是：', options: ['确定插座开关与设备位置', '装饰', '算量', '无作用'], answer: 0, explain: '点位。' },
          { stem: '综合天花图的意义：', options: ['协调各专业末端避免冲突', '只画灯', '只画风口', '无意义'], answer: 0, explain: '综合。' }
        ],
        doc: { lead: '这一章讲机电。', sections: [
          { id: 'ceiling', title: '综合天花', html: `<p>标高协调、末端排布；检修口。</p>` },
          { id: 'point', title: '点位', html: `<p>强弱电、给排水点位；与家具关系。</p>` }
        ], refs: [] } },
      { title: '工程预算基础', brief: '算钱。',
        q: [
          { stem: '工程量清单的作用是：', options: ['统一计量与计价口径', '装饰', '施工', '设计'], answer: 0, explain: '清单。' },
          { stem: '预算由哪几部分构成？', options: ['直接费、间接费、利润与税金', '只有材料', '只有人工', '只有管理费'], answer: 0, explain: '构成。' },
          { stem: '损耗率的作用是：', options: ['考虑材料切割与浪费', '增加利润', '减少工程量', '无作用'], answer: 0, explain: '损耗。' }
        ],
        doc: { lead: '这一章讲预算。', sections: [
          { id: 'quantity', title: '工程量', html: `<p>计量规则、清单编制；单位与精度。</p>` },
          { id: 'price', title: '计价', html: `<p>定额与市场价、损耗；费用构成。</p>` }
        ], refs: [] } },
      { title: '成本控制', brief: '省钱。',
        q: [
          { stem: '设计阶段对造价的影响：', options: ['决定性（方案决定大部分成本）', '很小', '无影响', '只影响材料'], answer: 0, explain: '设计。' },
          { stem: '限额设计的作用是：', options: ['在限额内优化方案', '降低标准唯一', '增加成本', '无作用'], answer: 0, explain: '限额。' },
          { stem: '变更控制的要点：', options: ['事前评估影响并书面确认', '事后再说', '口头', '不控制'], answer: 0, explain: '变更。' }
        ],
        doc: { lead: '这一章讲成本。', sections: [
          { id: 'limit', title: '限额设计', html: `<p>目标成本分解、方案比选；价值工程。</p>` },
          { id: 'change', title: '变更', html: `<p>变更流程、签证与索赔；台账管理。</p>` }
        ], refs: [] } },
      { title: '图纸管理与交付', brief: '归档。',
        q: [
          { stem: '图纸版本管理的作用是：', options: ['避免用错版本', '装饰', '增加工作量', '无作用'], answer: 0, explain: '版本。' },
          { stem: '竣工图的作用是：', options: ['记录实际建成情况', '装饰', '归档唯一', '无作用'], answer: 0, explain: '竣工图。' },
          { stem: '交付时应提供：', options: ['图纸、说明、材料表与保修信息', '只有图纸', '只有材料表', '只有说明'], answer: 0, explain: '交付。' }
        ],
        doc: { lead: '这一章讲交付。', sections: [
          { id: 'version', title: '版本', html: `<p>编号、修订记录；发放与回收。</p>` },
          { id: 'archive', title: '归档', html: `<p>竣工图、验收资料；保修与回访。</p>` }
        ], refs: [] } },
      { title: '施工图实训', brief: '画一套。',
        q: [
          { stem: '实训的典型任务是：', options: ['完成一套小型空间施工图', '只画平面', '只写说明', '只做预算'], answer: 0, explain: '一套。' },
          { stem: '图纸校对的重点：', options: ['与方案一致、尺寸闭合、索引齐全', '只有尺寸', '只有索引', '只有方案'], answer: 0, explain: '校对。' },
          { stem: '预算实训应：', options: ['按清单计量并核对单价', '估个数', '抄总价', '不做'], answer: 0, explain: '预算。' }
        ],
        doc: { lead: '这一章讲实训。', sections: [
          { id: 'task', title: '任务', html: `<p>小型商业/住宅：平立剖 + 节点 + 材料表。</p>` },
          { id: 'check', title: '校核', html: `<p>图纸校核清单；量与价核对。</p>` }
        ], refs: [] } }
    ] },

    /* ---- 大四 ---- */
    { name: '毕业设计', chapters: [
      { title: '选题与开题', brief: '做什么。',
        q: [
          { stem: '环设毕设选题关键是：', options: ['场地真实、问题明确、工作量适中', '题目宏大', '追热点', '导师偏好'], answer: 0, explain: '可行。' },
          { stem: '开题报告应包含：', options: ['背景、目标、方案、计划', '只有背景', '只有计划', '只有方案'], answer: 0, explain: '要素。' },
          { stem: '毕设常见类型包括：', options: ['室内、景观、公共空间、更新改造', '只有室内', '只有景观', '只有更新'], answer: 0, explain: '多类。' }
        ],
        doc: { lead: '这一章讲开题。', sections: [
          { id: 'topic', title: '选题', html: `<p>真实场地、功能策划；室内/景观/更新。</p>` },
          { id: 'proposal', title: '开题', html: `<p>背景、目标、方案、进度；可行性。</p>` }
        ], refs: [] } },
      { title: '调研与策划', brief: '想清楚。',
        q: [
          { stem: '前期调研的内容包括：', options: ['场地、人群、案例与规范', '只有场地', '只有案例', '只有规范'], answer: 0, explain: '多内容。' },
          { stem: '功能策划的作用是：', options: ['确定空间构成与面积配比', '装饰', '算造价', '画图'], answer: 0, explain: '策划。' },
          { stem: '案例分析应提炼：', options: ['可迁移的策略', '形式复制', '材料清单', '报价'], answer: 0, explain: '策略。' }
        ],
        doc: { lead: '这一章讲调研。', sections: [
          { id: 'survey', title: '调研', html: `<p>场地与人群、案例研究；规范与标准。</p>` },
          { id: 'program', title: '策划', html: `<p>功能泡泡图、面积表；概念生成。</p>` }
        ], refs: [] } },
      { title: '设计深化与表达', brief: '做出来。',
        q: [
          { stem: '方案深化应：', options: ['落实到平立剖与节点', '只做效果图', '只做模型', '只做概念'], answer: 0, explain: '深化。' },
          { stem: '表达图纸应：', options: ['逻辑清晰、比例准确、图面统一', '堆图', '只放效果', '无标注'], answer: 0, explain: '表达。' },
          { stem: '模型与实物的作用：', options: ['验证尺度与构造', '装饰', '替代图纸', '无作用'], answer: 0, explain: '验证。' }
        ],
        doc: { lead: '这一章讲深化。', sections: [
          { id: 'develop', title: '深化', html: `<p>平面、剖面、节点；材料与照明。</p>` },
          { id: 'present', title: '表达', html: `<p>图版、效果图、模型；展陈设计。</p>` }
        ], refs: [] } },
      { title: '答辩与展陈', brief: '讲清楚。',
        q: [
          { stem: '答辩陈述的重点是：', options: ['问题、策略、空间与落地', '致谢', '篇幅', '格式'], answer: 0, explain: '四点。' },
          { stem: '展陈设计应：', options: ['突出主线、便于阅读', '堆满图纸', '只放模型', '无说明'], answer: 0, explain: '展陈。' },
          { stem: '被质疑时应：', options: ['承认局限并说明理由', '争辩', '回避', '改口'], answer: 0, explain: '诚恳。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'talk', title: '陈述', html: `<p>10 分钟：问题—策略—空间—落地。</p>` },
          { id: 'exhibit', title: '展陈', html: `<p>图版、模型、材料样板；动线与说明。</p>` }
        ], refs: [] } }
    ] },
    { name: '专业实习', chapters: [
      { title: '岗位与角色', brief: '设计院与公司。',
        q: [
          { stem: '环设实习的常见岗位不包括：', options: ['方案设计', '施工图设计', '软装/驻场', '外科医生'], answer: 3, explain: '无关。' },
          { stem: '选择实习最该看：', options: ['能否参与真实项目', '名气', '工资', '通勤'], answer: 0, explain: '实战。' },
          { stem: '实习生上手最快是：', options: ['从制图与模型做起', '直接做主创', '只观察', '等安排'], answer: 0, explain: '制图。' }
        ],
        doc: { lead: '这一章讲岗位。', sections: [
          { id: 'roles', title: '岗位', html: `<p>方案、施工图、软装、驻场；技能与软件。</p>` },
          { id: 'onboard', title: '上手', html: `<p>熟悉制图标准与流程；改图与复盘。</p>` }
        ], refs: [] } },
      { title: '项目协作', brief: '一起做。',
        q: [
          { stem: '与主创配合的关键是：', options: ['准确理解意图并高效执行', '自由发挥', '只问不画', '照抄'], answer: 0, explain: '配合。' },
          { stem: '图纸互提条件的作用是：', options: ['协调各专业避免冲突', '装饰', '算量', '无作用'], answer: 0, explain: '提资。' },
          { stem: '会议纪要的价值是：', options: ['明确决议与责任', '装饰', '归档唯一', '无价值'], answer: 0, explain: '纪要。' }
        ],
        doc: { lead: '这一章讲协作。', sections: [
          { id: 'team', title: '团队', html: `<p>主创与深化、机电与结构；提资与反提资。</p>` },
          { id: 'document', title: '文档', html: `<p>会议纪要、变更单；版本管理。</p>` }
        ], refs: [] } },
      { title: '现场与落地', brief: '工地。',
        q: [
          { stem: '现场交底的作用是：', options: ['明确做法与标准', '装饰', '算量', '无作用'], answer: 0, explain: '交底。' },
          { stem: '材料样板确认应：', options: ['封样并书面确认', '口头', '不确认', '拍照即可'], answer: 0, explain: '封样。' },
          { stem: '常见落地问题是：', options: ['材料替换、做法走样、收口粗糙', '只有材料', '只有做法', '只有收口'], answer: 0, explain: '多问题。' }
        ],
        doc: { lead: '这一章讲落地。', sections: [
          { id: 'site', title: '现场', html: `<p>交底、样板、隐蔽验收；问题整改。</p>` },
          { id: 'quality', title: '质量', html: `<p>做法核对、收口细节；验收标准。</p>` }
        ], refs: [] } },
      { title: '实习复盘', brief: '留下什么。',
        q: [
          { stem: '实习应留下的成果是：', options: ['项目图纸与复盘', '工牌', '照片', '评语'], answer: 0, explain: '成果。' },
          { stem: '实习日志推荐写法：', options: ['问题—做法—结果—反思', '流水账', '只写结论', '只写感受'], answer: 0, explain: '结构化。' },
          { stem: '面试讲项目最佳结构：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'output', title: '成果', html: `<p>图纸、模型、现场照片、优化记录。</p>` },
          { id: 'review', title: '复盘', html: `<p>每周五行；讲清你的贡献与学到的东西。</p>` }
        ], refs: [] } }
    ] },
    { name: '考研与求职', chapters: [
      { title: '考研方向', brief: '设计考研。',
        q: [
          { stem: '环设考研的常见方向是：', options: ['设计学、艺术设计（专硕）、建筑学相关', '只有设计学', '只有专硕', '只有建筑'], answer: 0, explain: '多方向。' },
          { stem: '常见考试科目：', options: ['政治、英语、理论、快题（手绘）', '只有快题', '只有理论', '只有英语'], answer: 0, explain: '四科。' },
          { stem: '择校最应考虑：', options: ['方向、导师与资源', '城市', '学费', '宿舍'], answer: 0, explain: '匹配。' }
        ],
        doc: { lead: '这一章讲方向。', sections: [
          { id: 'paths', title: '方向', html: `<p>设计学、艺术设计专硕；室内、景观、更新。</p>` },
          { id: 'subjects', title: '科目', html: `<p>政治、英语、史论、快题；作品集。</p>` }
        ], refs: [] } },
      { title: '专业课复习', brief: '理论与快题。',
        q: [
          { stem: '史论复习主线：', options: ['中外建筑史与设计史脉络', '只背人名', '只背年份', '只看图'], answer: 0, explain: '脉络。' },
          { stem: '快题的关键是：', options: ['审题、功能分区、表达完整', '画得细', '颜色多', '字多'], answer: 0, explain: '快题。' },
          { stem: '作品集在复试中的作用：', options: ['展示设计与表达能力', '装饰', '凑数', '无作用'], answer: 0, explain: '作品集。' }
        ],
        doc: { lead: '这一章讲复习。', sections: [
          { id: 'history', title: '史论', html: `<p>建筑史、设计史、园林史；论述题。</p>` },
          { id: 'quick', title: '快题', html: `<p>审题、总平与平面、效果；时间分配。</p>` }
        ], refs: [] } },
      { title: '求职方向', brief: '设计岗。',
        q: [
          { stem: '环设毕业生的常见去向不包括：', options: ['设计院/事务所', '地产设计管理', '软装/施工', '外科医生'], answer: 3, explain: '专业限制。' },
          { stem: '设计岗看重：', options: ['方案能力与制图规范', '只有软件', '只有学历', '只有英语'], answer: 0, explain: '能力。' },
          { stem: '求职最加分的材料：', options: ['作品集与实习项目', '证书数量', '成绩单', '社团'], answer: 0, explain: '作品集。' }
        ],
        doc: { lead: '这一章讲就业。', sections: [
          { id: 'paths', title: '路径', html: `<p>设计院、事务所、地产、施工、软装；自由职业。</p>` },
          { id: 'skills', title: '能力', html: `<p>方案与制图、软件（CAD/SU/Revit）、沟通。</p>` }
        ], refs: [] } },
      { title: '面试', brief: '展示能力。',
        q: [
          { stem: '设计面试常考：', options: ['作品集讲解与快题测试', '只有软件', '只有英语', '只有学历'], answer: 0, explain: '综合。' },
          { stem: '讲作品集的最佳结构：', options: ['背景—问题—策略—结果', '流水账', '只讲结果', '只讲软件'], answer: 0, explain: '结构。' },
          { stem: '被问到不会的问题应：', options: ['说明思路并诚实承认', '编造', '沉默', '转移话题'], answer: 0, explain: '诚实。' }
        ],
        doc: { lead: '这一章讲面试。', sections: [
          { id: 'portfolio', title: '作品集', html: `<p>精选项目、讲清策略与落地；图纸规范。</p>` },
          { id: 'test', title: '快题测试', html: `<p>限时设计、手绘；时间管理与表达。</p>` }
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
