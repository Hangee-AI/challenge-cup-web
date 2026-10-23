/* ==========================================================
   visual-courses.js · 视觉传达设计：12 门课（8/4）= 84 关
   ========================================================== */

(function () {
  var MAJOR = 'art-视觉传达设计';
  var TITLES = stageTitlesOf('art');

  var COURSES = [
    { name: '设计素描与色彩', chapters: [
      { title: '素描基础', brief: '看与画。',
        q: [
          { stem: '素描中明暗五调子不包括：', options: ['高光', '中间调', '明暗交界线', '色彩倾向'], answer: 3, explain: '色彩属色彩学。' },
          { stem: '结构素描强调的是：', options: ['形体结构关系的理解', '光影细腻', '色彩丰富', '材质逼真'], answer: 0, explain: '结构。' },
          { stem: '透视中一点透视的特点是：', options: ['一个消失点', '两个消失点', '无消失点', '三个消失点'], answer: 0, explain: '一点。' }
        ],
        doc: { lead: '这一章讲素描。', sections: [
          { id: 'form', title: '形体', html: `<p>比例、结构、透视；几何体与静物。</p>` },
          { id: 'light', title: '明暗', html: `<p>五调子、质感表现；排线与皴擦。</p>` }
        ], refs: [] } },
      { title: '色彩基础', brief: '颜色的规律。',
        q: [
          { stem: '色彩三属性是：', options: ['色相、明度、纯度', '红绿蓝', '冷暖轻重', '黑白灰'], answer: 0, explain: '三属性。' },
          { stem: '互补色指：', options: ['色相环上相对 180° 的颜色', '相邻颜色', '同一色相', '明度相同'], answer: 0, explain: '互补。' },
          { stem: '色彩对比的类型包括：', options: ['色相对比、明度对比、纯度对比、冷暖对比', '只有色相', '只有明度', '只有冷暖'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲色彩。', sections: [
          { id: 'attribute', title: '属性', html: `<p>色相环、明度、纯度；冷暖与轻重。</p>` },
          { id: 'harmony', title: '配色', html: `<p>对比与调和、色调；色彩心理。</p>` }
        ], refs: [] } },
      { title: '造型与速写', brief: '快速捕捉。',
        q: [
          { stem: '速写的核心是：', options: ['快速抓住动态与比例', '细节完整', '色彩丰富', '材质逼真'], answer: 0, explain: '动态。' },
          { stem: '人体比例常以什么为单位？', options: ['头高', '手长', '脚长', '肩宽'], answer: 0, explain: '头高。' },
          { stem: '构图的基本原则包括：', options: ['均衡、对比、节奏、统一', '只有均衡', '只有对比', '只有统一'], answer: 0, explain: '多原则。' }
        ],
        doc: { lead: '这一章讲速写。', sections: [
          { id: 'sketch', title: '速写', html: `<p>动态线、比例；人物与场景。</p>` },
          { id: 'composition', title: '构图', html: `<p>均衡、对比、节奏；视觉中心。</p>` }
        ], refs: [] } },
      { title: '构成基础', brief: '形式法则。',
        q: [
          { stem: '平面构成的要素是：', options: ['点、线、面', '只有点', '只有线', '只有面'], answer: 0, explain: '点线面。' },
          { stem: '重复构成的特点是：', options: ['同一元素反复出现形成秩序', '随机', '只出现一次', '无规律'], answer: 0, explain: '重复。' },
          { stem: '渐变构成的效果是：', options: ['产生节奏与空间感', '混乱', '静止', '无变化'], answer: 0, explain: '渐变。' }
        ],
        doc: { lead: '这一章讲构成。', sections: [
          { id: 'element', title: '要素', html: `<p>点线面；形态与肌理。</p>` },
          { id: 'method', title: '手法', html: `<p>重复、渐变、发射、对比、特异；秩序与张力。</p>` }
        ], refs: [] } },
      { title: '色彩构成', brief: '用色。',
        q: [
          { stem: '色彩调和的方法包括：', options: ['面积、位置、秩序调和', '只有面积', '只有位置', '只有秩序'], answer: 0, explain: '多方法。' },
          { stem: '同一色调配色容易产生：', options: ['统一但可能单调', '混乱', '强烈对比', '无层次'], answer: 0, explain: '统一。' },
          { stem: '色彩的心理联想受什么影响？', options: ['文化、经验与情境', '只有生理', '只有年龄', '无影响'], answer: 0, explain: '文化。' }
        ],
        doc: { lead: '这一章讲色彩构成。', sections: [
          { id: 'harmony', title: '调和', html: `<p>同类、邻近、对比、互补配色；面积与位置。</p>` },
          { id: 'psychology', title: '心理', html: `<p>冷暖、轻重、情绪；文化与品牌。</p>` }
        ], refs: [] } },
      { title: '手绘表现', brief: '表达想法。',
        q: [
          { stem: '马克笔表现的关键是：', options: ['笔触与层次、由浅入深', '一次涂满', '只用黑色', '反复覆盖'], answer: 0, explain: '层次。' },
          { stem: '手绘效果图的作用是：', options: ['快速沟通设计意图', '替代施工图', '装饰', '做预算'], answer: 0, explain: '沟通。' },
          { stem: '材质表现依赖：', options: ['笔触、肌理与光影', '只有颜色', '只有轮廓', '只有文字'], answer: 0, explain: '综合。' }
        ],
        doc: { lead: '这一章讲手绘。', sections: [
          { id: 'tool', title: '工具', html: `<p>马克笔、彩铅、色粉；纸张与辅助工具。</p>` },
          { id: 'technique', title: '技法', html: `<p>起稿、铺色、加深、提亮；材质与氛围。</p>` }
        ], refs: [] } },
      { title: '设计软件基础', brief: '工具。',
        q: [
          { stem: '位图与矢量的区别是：', options: ['是否由像素构成', '颜色', '分辨率无关', '文件大小'], answer: 0, explain: '像素。' },
          { stem: 'PS 中图层的作用是：', options: ['分层编辑互不影响', '加密', '压缩', '打印'], answer: 0, explain: '图层。' },
          { stem: 'AI 适合做：', options: ['标志与矢量图形', '照片修图', '视频剪辑', '3D 建模'], answer: 0, explain: '矢量。' }
        ],
        doc: { lead: '这一章讲软件。', sections: [
          { id: 'ps', title: '图像处理', html: `<p>图层、蒙版、通道；调色与合成。</p>` },
          { id: 'ai', title: '矢量绘图', html: `<p>路径、钢笔、布尔运算；标志与排版。</p>` }
        ], refs: [] } },
      { title: '作品集与表达', brief: '展示自己。',
        q: [
          { stem: '作品集的核心是：', options: ['展示思考过程与解决问题的能力', '数量多', '装饰华丽', '尺寸大'], answer: 0, explain: '过程。' },
          { stem: '作品排序应：', options: ['按逻辑与强弱节奏组织', '随机', '按时间唯一', '按尺寸'], answer: 0, explain: '节奏。' },
          { stem: '设计说明的作用是：', options: ['解释目标、思路与结果', '装饰', '凑页数', '替代作品'], answer: 0, explain: '说明。' }
        ],
        doc: { lead: '这一章讲作品集。', sections: [
          { id: 'structure', title: '结构', html: `<p>封面、目录、项目、过程、成果；叙事逻辑。</p>` },
          { id: 'present', title: '呈现', html: `<p>版式、图片质量、文字精炼；线上与 PDF。</p>` }
        ], refs: [] } }
    ] },
    { name: '平面构成与色彩构成', chapters: [
      { title: '形式美法则', brief: '为什么好看。',
        q: [
          { stem: '形式美法则包括：', options: ['对比与统一、对称与均衡、节奏与韵律', '只有对比', '只有对称', '只有节奏'], answer: 0, explain: '多法则。' },
          { stem: '视觉重量的平衡可通过：', options: ['大小、位置、色彩、肌理调节', '只有大小', '只有位置', '只有色彩'], answer: 0, explain: '多因素。' },
          { stem: '留白的作用是：', options: ['形成呼吸与聚焦', '浪费空间', '无作用', '填充'], answer: 0, explain: '留白。' }
        ],
        doc: { lead: '这一章讲法则。', sections: [
          { id: 'law', title: '法则', html: `<p>对比统一、对称均衡、节奏韵律、比例尺度。</p>` },
          { id: 'balance', title: '平衡', html: `<p>对称与不对称平衡；视觉重量与留白。</p>` }
        ], refs: [] } },
      { title: '点线面构成', brief: '基本元素。',
        q: [
          { stem: '点在构成中的作用是：', options: ['聚焦与定位', '分割', '围合唯一', '无作用'], answer: 0, explain: '聚焦。' },
          { stem: '线的方向性可以：', options: ['引导视线与表达情绪', '无作用', '只分割', '只装饰'], answer: 0, explain: '引导。' },
          { stem: '面的类型包括：', options: ['几何形、有机形、偶然形、不规则形', '只有几何', '只有有机', '只有偶然'], answer: 0, explain: '多类。' }
        ],
        doc: { lead: '这一章讲元素。', sections: [
          { id: 'point', title: '点与线', html: `<p>聚散、方向、粗细；视线引导。</p>` },
          { id: 'plane', title: '面', html: `<p>形态分类、图底关系；面的分割。</p>` }
        ], refs: [] } },
      { title: '构成手法', brief: '怎么组织。',
        q: [
          { stem: '发射构成的特点是：', options: ['围绕中心呈放射状', '平行排列', '随机', '无中心'], answer: 0, explain: '发射。' },
          { stem: '特异构成的作用是：', options: ['打破秩序形成视觉焦点', '平均', '重复', '无重点'], answer: 0, explain: '特异。' },
          { stem: '肌理构成可以增强：', options: ['触感与层次', '速度', '价格', '文字'], answer: 0, explain: '肌理。' }
        ],
        doc: { lead: '这一章讲手法。', sections: [
          { id: 'repeat', title: '重复与渐变', html: `<p>秩序、节奏；方向与密度变化。</p>` },
          { id: 'special', title: '特异与肌理', html: `<p>打破秩序、焦点；手工与数字肌理。</p>` }
        ], refs: [] } },
      { title: '色彩体系', brief: '系统用色。',
        q: [
          { stem: '孟塞尔色彩体系用哪三个维度？', options: ['色相、明度、彩度', '红绿蓝', '青品黄', '黑白灰'], answer: 0, explain: 'Munsell。' },
          { stem: 'CMYK 用于：', options: ['印刷', '屏幕', '摄影', '绘画'], answer: 0, explain: '印刷。' },
          { stem: 'RGB 是：', options: ['加色模式（屏幕）', '减色模式', '印刷模式', '灰度模式'], answer: 0, explain: '加色。' }
        ],
        doc: { lead: '这一章讲体系。', sections: [
          { id: 'system', title: '体系', html: `<p>Munsell、PCCS；色立体。</p>` },
          { id: 'model', title: '模式', html: `<p>RGB/CMYK/HSB；屏幕与印刷色差。</p>` }
        ], refs: [] } },
      { title: '配色训练', brief: '实战。',
        q: [
          { stem: '品牌配色应首先考虑：', options: ['目标人群与品牌调性', '设计师偏好', '流行色', '成本'], answer: 0, explain: '调性。' },
          { stem: '60-30-10 原则指：', options: ['主色、辅助色、点缀色的面积比', '三种颜色', '三个图层', '三个字体'], answer: 0, explain: '比例。' },
          { stem: '对比过强的配色会：', options: ['造成视觉疲劳', '更高级', '更统一', '无影响'], answer: 0, explain: '疲劳。' }
        ],
        doc: { lead: '这一章讲训练。', sections: [
          { id: 'method', title: '方法', html: `<p>从情绪板到色卡；面积比例（60-30-10）。</p>` },
          { id: 'application', title: '应用', html: `<p>品牌、界面、包装配色；可读性与无障碍。</p>` }
        ], refs: [] } },
      { title: '构成与版式', brief: '落地。',
        q: [
          { stem: '网格系统的作用是：', options: ['建立秩序与对齐', '限制创意', '装饰', '减少内容'], answer: 0, explain: '网格。' },
          { stem: '视觉层级可通过什么建立？', options: ['大小、位置、色彩、留白', '只有大小', '只有色彩', '只有位置'], answer: 0, explain: '多手段。' },
          { stem: '出血位的作用是：', options: ['避免裁切露白边', '装饰', '增加页数', '保护文件'], answer: 0, explain: '出血。' }
        ],
        doc: { lead: '这一章讲版式。', sections: [
          { id: 'grid', title: '网格', html: `<p>栏格、基线网格；对齐与节奏。</p>` },
          { id: 'hierarchy', title: '层级', html: `<p>视觉层级、对比；出血与安全区。</p>` }
        ], refs: [] } },
      { title: '构成的应用', brief: '用起来。',
        q: [
          { stem: '海报设计的核心是：', options: ['信息层级与视觉冲击', '元素多', '颜色多', '字体多'], answer: 0, explain: '层级。' },
          { stem: '导视系统的设计要点：', options: ['识别性、系统性、环境适配', '只有美观', '只有字体', '只有颜色'], answer: 0, explain: '系统。' },
          { stem: '构成训练的价值是：', options: ['建立形式判断力', '装饰', '替代创意', '无价值'], answer: 0, explain: '判断力。' }
        ],
        doc: { lead: '这一章讲应用。', sections: [
          { id: 'poster', title: '海报与导视', html: `<p>信息层级、识别系统；环境与尺度。</p>` },
          { id: 'exercise', title: '训练', html: `<p>从构成练习到实际项目；批判与迭代。</p>` }
        ], refs: [] } },
      { title: '课程综合作业', brief: '做一套。',
        q: [
          { stem: '综合作业的评分重点是：', options: ['概念、形式与完成度', '数量', '材料昂贵', '尺寸大'], answer: 0, explain: '综合。' },
          { stem: '设计说明应：', options: ['讲清目标、方法与依据', '只写感想', '只写尺寸', '省略'], answer: 0, explain: '说明。' },
          { stem: '作品呈现应注意：', options: ['拍摄光线与版面统一', '只拍局部', '不修图', '随意'], answer: 0, explain: '呈现。' }
        ],
        doc: { lead: '这一章讲作业。', sections: [
          { id: 'brief', title: '题目', html: `<p>主题海报/品牌基础系统；要求与评分点。</p>` },
          { id: 'review', title: '评图', html: `<p>概念、形式、执行与呈现；互评与修改。</p>` }
        ], refs: [] } }
    ] },
    { name: '设计概论', chapters: [
      { title: '设计是什么', brief: '定义。',
        q: [
          { stem: '设计的本质是：', options: ['有目的地解决问题并创造价值', '画得好看', '装饰', '模仿'], answer: 0, explain: '解决问题。' },
          { stem: '设计与人造物的关系是：', options: ['设计塑造人造物的形式与意义', '无关', '只关乎功能', '只关乎美学'], answer: 0, explain: '塑造。' },
          { stem: '功能与形式的关系常被概括为：', options: ['形式追随功能（并可超越）', '形式无关功能', '功能无关形式', '二者对立'], answer: 0, explain: '关系。' }
        ],
        doc: { lead: '这一章讲定义。', sections: [
          { id: 'definition', title: '定义', html: `<p>设计的内涵、边界；设计与人造物。</p>` },
          { id: 'value', title: '价值', html: `<p>功能、审美、经济、社会价值；设计伦理。</p>` }
        ], refs: [] } },
      { title: '设计史脉络', brief: '从哪来。',
        q: [
          { stem: '包豪斯的核心主张是：', options: ['艺术与技术的统一、为大众设计', '装饰至上', '手工艺复兴', '复古'], answer: 0, explain: '包豪斯。' },
          { stem: '现代主义设计强调：', options: ['功能、理性与标准化', '装饰', '个性唯一', '手工艺'], answer: 0, explain: '现代主义。' },
          { stem: '后现代设计的特点是：', options: ['多元、折衷、符号与戏谑', '单一', '极简唯一', '无装饰'], answer: 0, explain: '后现代。' }
        ],
        doc: { lead: '这一章讲历史。', sections: [
          { id: 'modern', title: '现代', html: `<p>工艺美术运动、新艺术、包豪斯、国际主义。</p>` },
          { id: 'postmodern', title: '后现代与当代', html: `<p>波普、后现代、数字与可持续设计。</p>` }
        ], refs: [] } },
      { title: '设计门类', brief: '有哪些。',
        q: [
          { stem: '视觉传达设计主要解决：', options: ['信息传递与识别', '空间组织', '产品结构', '服务流程'], answer: 0, explain: '信息。' },
          { stem: '产品设计与环境设计的区别是：', options: ['造物 vs 造空间', '规模', '材料', '价格'], answer: 0, explain: '对象。' },
          { stem: '服务设计的核心是：', options: ['设计服务流程与触点体验', '只做界面', '只做产品', '只做空间'], answer: 0, explain: '服务。' }
        ],
        doc: { lead: '这一章讲门类。', sections: [
          { id: 'visual', title: '视觉传达', html: `<p>品牌、包装、出版、数字媒体；信息设计。</p>` },
          { id: 'other', title: '产品与环境', html: `<p>产品、空间、服务、交互；交叉与整合。</p>` }
        ], refs: [] } },
      { title: '设计思维', brief: '怎么想。',
        q: [
          { stem: '设计思维的五阶段是：', options: ['共情、定义、构思、原型、测试', '只有构思', '只有原型', '只有测试'], answer: 0, explain: '五阶段。' },
          { stem: '双钻模型的两次发散与收敛是：', options: ['发现问题与解决问题', '只发散', '只收敛', '无模型'], answer: 0, explain: '双钻。' },
          { stem: '用户研究的方法包括：', options: ['访谈、观察、问卷、可用性测试', '只有访谈', '只有问卷', '只有测试'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲思维。', sections: [
          { id: 'process', title: '流程', html: `<p>共情、定义、构思、原型、测试；双钻模型。</p>` },
          { id: 'research', title: '研究', html: `<p>用户访谈与观察、人物角色、旅程图。</p>` }
        ], refs: [] } },
      { title: '形式与审美', brief: '美学。',
        q: [
          { stem: '格式塔原理包括：', options: ['接近、相似、连续、闭合', '只有接近', '只有相似', '只有闭合'], answer: 0, explain: '多原理。' },
          { stem: '简约设计（少即是多）强调：', options: ['去除多余、突出本质', '元素越多越好', '装饰堆叠', '无信息'], answer: 0, explain: '简约。' },
          { stem: '审美的形成受什么影响？', options: ['文化、教育、经验与时代', '只有天赋', '只有价格', '无影响'], answer: 0, explain: '多因素。' }
        ],
        doc: { lead: '这一章讲形式。', sections: [
          { id: 'gestalt', title: '格式塔', html: `<p>知觉组织规律；图底关系。</p>` },
          { id: 'style', title: '风格', html: `<p>简约与繁复、秩序与张力；审美与文化。</p>` }
        ], refs: [] } },
      { title: '设计与社会', brief: '责任。',
        q: [
          { stem: '可持续设计强调：', options: ['环境影响与全生命周期', '只降成本', '只美观', '只耐用'], answer: 0, explain: '可持续。' },
          { stem: '通用设计（无障碍）的原则包括：', options: ['公平使用、灵活、简单直观', '只有公平', '只有灵活', '只有简单'], answer: 0, explain: '通用。' },
          { stem: '设计伦理问题包括：', options: ['抄袭、误导、隐私、过度消费', '只有抄袭', '只有误导', '只有隐私'], answer: 0, explain: '多问题。' }
        ],
        doc: { lead: '这一章讲社会。', sections: [
          { id: 'sustainable', title: '可持续', html: `<p>材料与生命周期、循环设计；绿色设计。</p>` },
          { id: 'ethics', title: '伦理', html: `<p>原创与版权、无障碍、隐私；社会责任。</p>` }
        ], refs: [] } },
      { title: '设计产业与职业', brief: '怎么活。',
        q: [
          { stem: '设计师的职业路径包括：', options: ['甲方、乙方、自由职业、创业', '只有甲方', '只有乙方', '只有自由职业'], answer: 0, explain: '多路径。' },
          { stem: '设计管理的作用是：', options: ['协调设计资源与商业目标', '只管审美', '只管进度', '无作用'], answer: 0, explain: '管理。' },
          { stem: '设计价值的衡量包括：', options: ['商业结果、用户价值与品牌资产', '只有美观', '只有成本', '只有销量'], answer: 0, explain: '多维度。' }
        ],
        doc: { lead: '这一章讲职业。', sections: [
          { id: 'industry', title: '产业', html: `<p>设计公司、in-house、平台；分工与协作。</p>` },
          { id: 'career', title: '职业', html: `<p>能力模型、作品集、报价与合同；职业规划。</p>` }
        ], refs: [] } },
      { title: '设计评论与写作', brief: '会说。',
        q: [
          { stem: '设计评论的基本结构是：', options: ['描述—分析—解释—评价', '只有描述', '只有评价', '只有分析'], answer: 0, explain: '四步。' },
          { stem: '好的设计说明应：', options: ['目标清晰、逻辑严密、证据充分', '辞藻华丽', '越长越好', '只写感受'], answer: 0, explain: '逻辑。' },
          { stem: '批评的价值是：', options: ['推动改进与共识', '攻击', '装饰', '无价值'], answer: 0, explain: '改进。' }
        ],
        doc: { lead: '这一章讲评论。', sections: [
          { id: 'method', title: '方法', html: `<p>描述、分析、解释、评价；语境与标准。</p>` },
          { id: 'writing', title: '写作', html: `<p>设计说明、案例分析；图文结合。</p>` }
        ], refs: [] } }
    ] },
    { name: '字体设计', chapters: [
      { title: '字体基础', brief: '字的结构。',
        q: [
          { stem: '汉字的基本结构包括：', options: ['笔画、部首、间架结构', '只有笔画', '只有部首', '只有结构'], answer: 0, explain: '三要素。' },
          { stem: '字体的重心影响：', options: ['视觉稳定与排版节奏', '只有大小', '只有颜色', '无影响'], answer: 0, explain: '重心。' },
          { stem: '中宫收紧的字形通常显得：', options: ['紧凑有力', '松散', '幼稚', '无差别'], answer: 0, explain: '中宫。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'structure', title: '结构', html: `<p>笔画、部首、重心、中宫；字面与字重。</p>` },
          { id: 'category', title: '分类', html: `<p>宋体、黑体、楷体、圆体；衬线与无衬线。</p>` }
        ], refs: [] } },
      { title: '字体设计方法', brief: '怎么造字。',
        q: [
          { stem: '字体设计的第一步通常是：', options: ['确定骨架与比例', '上色', '加装饰', '导出'], answer: 0, explain: '骨架。' },
          { stem: '笔画统一包括：', options: ['粗细、曲直、端点处理', '只有粗细', '只有曲直', '只有端点'], answer: 0, explain: '统一。' },
          { stem: '字距与行距影响：', options: ['可读性与版面节奏', '只有美观', '只有速度', '无影响'], answer: 0, explain: '排版。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'skeleton', title: '骨架', html: `<p>字形比例、重心；方格与辅助线。</p>` },
          { id: 'detail', title: '细节', html: `<p>笔画统一、转折与端点；字距调整。</p>` }
        ], refs: [] } },
      { title: '中文排版', brief: '排字。',
        q: [
          { stem: '中文排版的标点处理包括：', options: ['行首行尾禁则、标点挤压', '随意', '只用半角', '不用标点'], answer: 0, explain: '禁则。' },
          { stem: '行长的合理范围通常为：', options: ['每行 25–40 个汉字', '5–10 个', '100 个以上', '不限'], answer: 0, explain: '行长。' },
          { stem: '字号层级的作用是：', options: ['建立信息层级与阅读节奏', '装饰', '增加页数', '无作用'], answer: 0, explain: '层级。' }
        ],
        doc: { lead: '这一章讲排版。', sections: [
          { id: 'rule', title: '规则', html: `<p>禁则、标点挤压、中英混排；行长行距。</p>` },
          { id: 'hierarchy', title: '层级', html: `<p>字号字重、对齐方式；网格与留白。</p>` }
        ], refs: [] } },
      { title: '西文排版', brief: '西文规则。',
        q: [
          { stem: '西文衬线体的代表是：', options: ['Times New Roman', 'Helvetica', 'Arial', 'Futura'], answer: 0, explain: '衬线。' },
          { stem: '字距调整（kerning）指：', options: ['特定字对之间的间距微调', '行距', '段距', '字号'], answer: 0, explain: 'kerning。' },
          { stem: '西文排版中斜体的作用是：', options: ['强调与区分', '装饰唯一', '标题', '页码'], answer: 0, explain: '强调。' }
        ],
        doc: { lead: '这一章讲西文。', sections: [
          { id: 'typeface', title: '字体', html: `<p>衬线与无衬线、展示体；x 高度。</p>` },
          { id: 'spacing', title: '间距', html: `<p>tracking/kerning、leading；标点与连字。</p>` }
        ], refs: [] } },
      { title: '字体与品牌', brief: '字的性格。',
        q: [
          { stem: '品牌定制字体的价值是：', options: ['独特识别与统一调性', '省钱', '加快设计', '无价值'], answer: 0, explain: '识别。' },
          { stem: '字体选择应考虑：', options: ['品牌调性、可读性与使用场景', '只有好看', '只有流行', '只有价格'], answer: 0, explain: '匹配。' },
          { stem: '字体授权的重要性是：', options: ['避免侵权与法律风险', '装饰', '加快', '无影响'], answer: 0, explain: '授权。' }
        ],
        doc: { lead: '这一章讲品牌。', sections: [
          { id: 'brand', title: '品牌字体', html: `<p>定制字、字标；与标志的关系。</p>` },
          { id: 'license', title: '授权', html: `<p>商用授权、嵌入与二次开发；合规风险。</p>` }
        ], refs: [] } },
      { title: '字体创意', brief: '玩形式。',
        q: [
          { stem: '字体创意的常见手法包括：', options: ['解构、同构、笔画替换、维度变化', '只有解构', '只有同构', '只有替换'], answer: 0, explain: '多手法。' },
          { stem: '创意字体首先要保证：', options: ['可识读性', '复杂', '装饰多', '颜色艳'], answer: 0, explain: '识读。' },
          { stem: '字库设计的工作量主要在于：', options: ['大量字符的一致性与细节', '只做几个字', '只做海报', '只做标志'], answer: 0, explain: '字库。' }
        ],
        doc: { lead: '这一章讲创意。', sections: [
          { id: 'method', title: '手法', html: `<p>解构、同构、替换、空间；度与可读性。</p>` },
          { id: 'typeface', title: '字库', html: `<p>字符集、一致性与字重；工具与流程。</p>` }
        ], refs: [] } },
      { title: '字体应用', brief: '落地。',
        q: [
          { stem: '导视系统的字体应优先考虑：', options: ['远距离识别性', '装饰性', '个性', '复杂'], answer: 0, explain: '识别。' },
          { stem: '包装上的字体需注意：', options: ['法规要求的字号与内容', '只求美观', '只求小', '无要求'], answer: 0, explain: '法规。' },
          { stem: '界面字体选择应考虑：', options: ['屏幕显示清晰度与多语言', '只有美观', '只有品牌', '只有大小'], answer: 0, explain: '屏幕。' }
        ],
        doc: { lead: '这一章讲应用。', sections: [
          { id: 'signage', title: '导视', html: `<p>视距、字号、对比；环境光。</p>` },
          { id: 'screen', title: '界面与包装', html: `<p>屏显字体、多语言；法规标注。</p>` }
        ], refs: [] } },
      { title: '字体课程作业', brief: '做一套。',
        q: [
          { stem: '字体作业的常见形式是：', options: ['一套字体设计或字体海报', '只写论文', '只做调研', '只临摹'], answer: 0, explain: '设计。' },
          { stem: '评图关注：', options: ['结构合理、风格统一、细节到位', '数量', '颜色', '尺寸'], answer: 0, explain: '质量。' },
          { stem: '作品展示应：', options: ['展示过程与最终效果', '只放结果', '不放说明', '随意'], answer: 0, explain: '过程。' }
        ],
        doc: { lead: '这一章讲作业。', sections: [
          { id: 'task', title: '题目', html: `<p>字体设计（8–12 字）或字体海报；要求。</p>` },
          { id: 'review', title: '评图', html: `<p>结构与风格、可读性；修改建议。</p>` }
        ], refs: [] } }
    ] },
    { name: '图形创意', chapters: [
      { title: '图形与语义', brief: '图能说话。',
        q: [
          { stem: '图形的首要功能是：', options: ['传递信息与意义', '装饰', '填充', '娱乐唯一'], answer: 0, explain: '信息。' },
          { stem: '能指与所指的关系是：', options: ['形式与其代表的意义', '相同', '无关', '互斥'], answer: 0, explain: '符号。' },
          { stem: '象征与隐喻的区别是：', options: ['约定俗成 vs 类比联想', '相同', '隐喻更直接', '象征更随意'], answer: 0, explain: '区别。' }
        ],
        doc: { lead: '这一章讲语义。', sections: [
          { id: 'semantics', title: '语义', html: `<p>符号、能指所指；象征与隐喻。</p>` },
          { id: 'function', title: '功能', html: `<p>指示、说明、说服、情感；语境。</p>` }
        ], refs: [] } },
      { title: '创意方法', brief: '怎么想出来。',
        q: [
          { stem: '头脑风暴的原则包括：', options: ['延迟评判、追求数量、鼓励联想', '立即评判', '只求质量', '禁止联想'], answer: 0, explain: '头脑风暴。' },
          { stem: '同构手法指：', options: ['不同事物在形式上找到共同结构', '完全相同', '模仿', '复制'], answer: 0, explain: '同构。' },
          { stem: '逆向思维的例子是：', options: ['把常规关系反转', '按常规', '模仿', '随机'], answer: 0, explain: '逆向。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'brainstorm', title: '发散', html: `<p>头脑风暴、思维导图、联想链；数量优先。</p>` },
          { id: 'technique', title: '手法', html: `<p>同构、异构、置换、夸张、逆向、正负形。</p>` }
        ], refs: [] } },
      { title: '图形语言', brief: '表达。',
        q: [
          { stem: '正负形的手法利用：', options: ['图与底的共用轮廓', '颜色对比', '文字', '材质'], answer: 0, explain: '正负形。' },
          { stem: '夸张手法的作用是：', options: ['强化特征与记忆点', '失真', '无意义', '装饰'], answer: 0, explain: '夸张。' },
          { stem: '系列图形应具备：', options: ['统一的形式语言与变化', '完全相同', '完全无关', '无规律'], answer: 0, explain: '系列。' }
        ],
        doc: { lead: '这一章讲语言。', sections: [
          { id: 'figure', title: '图底', html: `<p>正负形、轮廓共用；视觉双关。</p>` },
          { id: 'series', title: '系列', html: `<p>形式母题、变化规律；统一与差异。</p>` }
        ], refs: [] } },
      { title: '标志设计', brief: '一个符号。',
        q: [
          { stem: '好标志的特点包括：', options: ['简洁、易记、可缩放、适用多场景', '元素多', '颜色多', '细节多'], answer: 0, explain: '特点。' },
          { stem: '标志的类型包括：', options: ['字标、图形标、组合标、抽象标', '只有字标', '只有图形标', '只有抽象标'], answer: 0, explain: '多类型。' },
          { stem: '标志的可用性测试应检查：', options: ['缩小与单色是否可辨识', '只看彩色', '只看大图', '只看效果图'], answer: 0, explain: '可用性。' }
        ],
        doc: { lead: '这一章讲标志。', sections: [
          { id: 'type', title: '类型', html: `<p>字标、图形标、组合标；象征与首字母。</p>` },
          { id: 'grid', title: '制图', html: `<p>网格制图、比例与最小尺寸；黑白与缩放。</p>` }
        ], refs: [] } },
      { title: '插画与图像', brief: '画出来。',
        q: [
          { stem: '插画在品牌中的作用是：', options: ['建立个性与情感联结', '替代文字', '填充版面', '降低成本'], answer: 0, explain: '个性。' },
          { stem: '图像风格统一的关键是：', options: ['线条、色彩与构图的规则一致', '数量', '尺寸', '价格'], answer: 0, explain: '规则。' },
          { stem: 'AI 生成图像的使用需注意：', options: ['版权与风格来源、商用授权', '无限制', '随便用', '只求快'], answer: 0, explain: '版权。' }
        ],
        doc: { lead: '这一章讲插画。', sections: [
          { id: 'style', title: '风格', html: `<p>线描、扁平、肌理；色彩与构图规则。</p>` },
          { id: 'ai', title: '数字与 AI', html: `<p>工具流程、风格一致性；版权与伦理。</p>` }
        ], refs: [] } },
      { title: '信息图形', brief: '把数据画明白。',
        q: [
          { stem: '信息图的核心是：', options: ['清晰传达数据关系', '装饰', '炫技', '复杂'], answer: 0, explain: '清晰。' },
          { stem: '图表选择应依据：', options: ['数据关系（比较/分布/构成/关联）', '颜色', '尺寸', '偏好'], answer: 0, explain: '关系。' },
          { stem: '误导性图表的常见做法：', options: ['截断坐标轴、面积夸大', '标注来源', '清晰标题', '合适比例'], answer: 0, explain: '误导。' }
        ],
        doc: { lead: '这一章讲信息图。', sections: [
          { id: 'chart', title: '图表', html: `<p>比较、分布、构成、关联；比例与标注。</p>` },
          { id: 'narrative', title: '叙事', html: `<p>信息层级、引导；避免误导。</p>` }
        ], refs: [] } },
      { title: '创意与商业', brief: '能落地。',
        q: [
          { stem: '创意提案的关键是：', options: ['讲清洞察、创意与效果', '只有效果图', '只有口号', '只有预算'], answer: 0, explain: '提案。' },
          { stem: '创意评估应看：', options: ['相关性、独特性与可执行性', '只有好看', '只有新奇', '只有成本'], answer: 0, explain: '评估。' },
          { stem: '抄袭与借鉴的界限是：', options: ['是否复制核心表达与独创性', '是否同行业', '是否同颜色', '是否同尺寸'], answer: 0, explain: '独创。' }
        ],
        doc: { lead: '这一章讲商业。', sections: [
          { id: 'pitch', title: '提案', html: `<p>洞察—概念—执行—效果；故事化表达。</p>` },
          { id: 'original', title: '原创', html: `<p>借鉴与抄袭的边界；版权与署名。</p>` }
        ], refs: [] } },
      { title: '图形课程作业', brief: '做一套。',
        q: [
          { stem: '图形作业常见形式：', options: ['标志 + 系列图形 + 应用', '只有标志', '只有海报', '只有临摹'], answer: 0, explain: '综合。' },
          { stem: '评图重点是：', options: ['概念清晰、形式统一、执行到位', '数量', '颜色', '尺寸'], answer: 0, explain: '质量。' },
          { stem: '作品应展示：', options: ['推导过程与应用场景', '只放结果', '只放效果图', '不放说明'], answer: 0, explain: '过程。' }
        ],
        doc: { lead: '这一章讲作业。', sections: [
          { id: 'task', title: '题目', html: `<p>品牌标志与辅助图形；应用延展。</p>` },
          { id: 'review', title: '评图', html: `<p>概念、形式、执行；互评与迭代。</p>` }
        ], refs: [] } }
    ] },
    { name: '版式设计', chapters: [
      { title: '版式基础', brief: '排内容。',
        q: [
          { stem: '版式设计的核心是：', options: ['组织信息、建立阅读秩序', '装饰', '填满', '炫技'], answer: 0, explain: '组织。' },
          { stem: '版面率指：', options: ['版面中内容所占比例', '页数', '颜色数', '字号'], answer: 0, explain: '版面率。' },
          { stem: '留白的功能是：', options: ['区分层级、形成呼吸', '浪费', '无功能', '填充'], answer: 0, explain: '留白。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'element', title: '要素', html: `<p>文字、图像、色彩、留白；版面率。</p>` },
          { id: 'order', title: '秩序', html: `<p>对齐、分组、层级；视觉动线。</p>` }
        ], refs: [] } },
      { title: '网格系统', brief: '骨架。',
        q: [
          { stem: '网格系统的作用是：', options: ['建立秩序与效率', '限制创意', '装饰', '增加页数'], answer: 0, explain: '秩序。' },
          { stem: '栏网格的类型包括：', options: ['单栏、双栏、多栏、模块网格', '只有单栏', '只有双栏', '只有多栏'], answer: 0, explain: '多类型。' },
          { stem: '基线网格主要用于：', options: ['统一正文行距与对齐', '图片裁切', '标题设计', '颜色'], answer: 0, explain: '基线。' }
        ],
        doc: { lead: '这一章讲网格。', sections: [
          { id: 'type', title: '类型', html: `<p>栏网格、模块网格、基线网格；边距与栏距。</p>` },
          { id: 'break', title: '打破', html: `<p>有意识地破格；节奏与张力。</p>` }
        ], refs: [] } },
      { title: '文字编排', brief: '字号与行距。',
        q: [
          { stem: '行距过小会导致：', options: ['阅读困难、串行', '更紧凑好看', '无影响', '节省纸张唯一'], answer: 0, explain: '行距。' },
          { stem: '对齐方式包括：', options: ['左对齐、右对齐、居中、两端对齐', '只有左对齐', '只有居中', '只有两端'], answer: 0, explain: '四种。' },
          { stem: '中英混排应注意：', options: ['字距与标点、字体搭配', '只用中文', '只用英文', '无所谓'], answer: 0, explain: '混排。' }
        ],
        doc: { lead: '这一章讲文字。', sections: [
          { id: 'spacing', title: '间距', html: `<p>字号、行距、字距；行长与可读性。</p>` },
          { id: 'align', title: '对齐与混排', html: `<p>四种对齐；中英混排与标点。</p>` }
        ], refs: [] } },
      { title: '图像编排', brief: '图怎么放。',
        q: [
          { stem: '图像裁切的原则是：', options: ['保留主体与视觉重心', '随意裁', '只裁边缘', '不裁'], answer: 0, explain: '裁切。' },
          { stem: '图文关系的常见处理包括：', options: ['图文分离、图文叠压、图文环绕', '只有分离', '只有叠压', '只有环绕'], answer: 0, explain: '多种。' },
          { stem: '图片分辨率用于印刷通常要求：', options: ['300 dpi', '72 dpi', '150 dpi', '1200 dpi'], answer: 0, explain: '300dpi。' }
        ],
        doc: { lead: '这一章讲图像。', sections: [
          { id: 'crop', title: '裁切', html: `<p>构图与重心；比例与出血。</p>` },
          { id: 'relation', title: '图文关系', html: `<p>分离、叠压、环绕；分辨率与色彩模式。</p>` }
        ], refs: [] } },
      { title: '色彩与版式', brief: '用色。',
        q: [
          { stem: '版面主色的作用是：', options: ['建立整体调性与识别', '装饰唯一', '填充', '无作用'], answer: 0, explain: '调性。' },
          { stem: '文字与背景的对比应保证：', options: ['足够的可读性对比度', '越花越好', '越低越好', '无所谓'], answer: 0, explain: '对比。' },
          { stem: '印刷色与屏幕色差异的原因是：', options: ['色域不同（CMYK vs RGB）', '分辨率', '纸张', '软件'], answer: 0, explain: '色域。' }
        ],
        doc: { lead: '这一章讲色彩。', sections: [
          { id: 'tone', title: '调性', html: `<p>主色与辅助色、面积；情绪与品牌。</p>` },
          { id: 'print', title: '印刷', html: `<p>CMYK、专色；色差与打样。</p>` }
        ], refs: [] } },
      { title: '出版物版式', brief: '书与杂志。',
        q: [
          { stem: '书籍版式的核心是：', options: ['阅读舒适与结构清晰', '装饰多', '颜色艳', '页数多'], answer: 0, explain: '阅读。' },
          { stem: '杂志版式的特点是：', options: ['节奏变化大、视觉冲击强', '单一', '无图', '全文字'], answer: 0, explain: '节奏。' },
          { stem: '页码与书眉的作用是：', options: ['导航与定位', '装饰', '填充', '无作用'], answer: 0, explain: '导航。' }
        ],
        doc: { lead: '这一章讲出版。', sections: [
          { id: 'book', title: '书籍', html: `<p>版心、字体字号、行距；章节与目录。</p>` },
          { id: 'magazine', title: '杂志', html: `<p>栏目结构、图文节奏；封面与专题。</p>` }
        ], refs: [] } },
      { title: '数字版式', brief: '屏幕。',
        q: [
          { stem: '网页版式与印刷版式的关键差异是：', options: ['屏幕尺寸不固定、可交互', '颜色', '字体', '图片'], answer: 0, explain: '响应式。' },
          { stem: '响应式设计的目标是：', options: ['不同设备上都有良好体验', '只有手机', '只有电脑', '固定宽度'], answer: 0, explain: '响应式。' },
          { stem: '屏幕阅读的优化包括：', options: ['字号够大、对比足够、行宽适中', '越小越好', '越密越好', '越花越好'], answer: 0, explain: '可读。' }
        ],
        doc: { lead: '这一章讲数字。', sections: [
          { id: 'responsive', title: '响应式', html: `<p>断点、流式栅格；移动优先。</p>` },
          { id: 'readability', title: '可读性', html: `<p>字号行宽、对比；无障碍。</p>` }
        ], refs: [] } },
      { title: '版式课程作业', brief: '做一本。',
        q: [
          { stem: '版式作业的常见形式：', options: ['书籍/杂志/画册排版', '只做海报', '只做标志', '只写论文'], answer: 0, explain: '排版。' },
          { stem: '评图关注：', options: ['网格秩序、层级清晰、细节到位', '页数', '颜色数', '尺寸'], answer: 0, explain: '质量。' },
          { stem: '印刷交付应注意：', options: ['出血、字体转曲、色彩模式', '只看屏幕', '不检查', '随意导出'], answer: 0, explain: '印前。' }
        ],
        doc: { lead: '这一章讲作业。', sections: [
          { id: 'task', title: '题目', html: `<p>16–32 页小册子；网格与层级要求。</p>` },
          { id: 'prepress', title: '印前', html: `<p>出血、转曲、色彩模式；打样检查。</p>` }
        ], refs: [] } }
    ] },
    { name: '品牌视觉设计', chapters: [
      { title: '品牌基础', brief: '品牌是什么。',
        q: [
          { stem: '品牌视觉识别系统的核心是：', options: ['统一且可识别的视觉语言', '一个标志', '一套海报', '一次活动'], answer: 0, explain: '系统。' },
          { stem: '品牌定位决定：', options: ['视觉调性与传播方向', '只有价格', '只有渠道', '只有包装'], answer: 0, explain: '定位。' },
          { stem: '品牌资产包括：', options: ['认知、联想、忠诚与溢价', '只有标志', '只有广告', '只有包装'], answer: 0, explain: '资产。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'concept', title: '概念', html: `<p>品牌、定位、个性；品牌资产。</p>` },
          { id: 'role', title: '作用', html: `<p>识别、信任、溢价；视觉的角色。</p>` }
        ], refs: [] } },
      { title: 'VI 系统', brief: '基础系统。',
        q: [
          { stem: 'VI 基础系统通常包括：', options: ['标志、标准字、标准色、辅助图形', '只有标志', '只有标准色', '只有辅助图形'], answer: 0, explain: '多要素。' },
          { stem: '标志的组合规范应规定：', options: ['最小尺寸、安全空间、禁用方式', '只有颜色', '只有尺寸', '只有字体'], answer: 0, explain: '规范。' },
          { stem: '标准色的作用是：', options: ['强化识别与一致性', '装饰', '填充', '无作用'], answer: 0, explain: '识别。' }
        ],
        doc: { lead: '这一章讲 VI。', sections: [
          { id: 'logo', title: '标志', html: `<p>制图、组合、安全空间、最小尺寸；黑白与反白。</p>` },
          { id: 'color', title: '色彩与字体', html: `<p>标准色与辅助色；品牌字体与字标。</p>` }
        ], refs: [] } },
      { title: '应用系统', brief: '延展。',
        q: [
          { stem: 'VI 应用系统包括：', options: ['办公、环境、包装、数字、服饰', '只有办公', '只有包装', '只有数字'], answer: 0, explain: '多场景。' },
          { stem: '应用延展的关键是：', options: ['在统一规则下适配场景', '每个场景都不一样', '完全复制', '随意'], answer: 0, explain: '规则。' },
          { stem: '品牌手册的作用是：', options: ['保证多方使用的一致性', '装饰', '归档唯一', '考核'], answer: 0, explain: '手册。' }
        ],
        doc: { lead: '这一章讲应用。', sections: [
          { id: 'application', title: '应用', html: `<p>办公用品、导视、包装、社交媒体、制服。</p>` },
          { id: 'manual', title: '手册', html: `<p>品牌手册结构；规范与示例；版本管理。</p>` }
        ], refs: [] } },
      { title: '辅助图形与版式', brief: '延展语言。',
        q: [
          { stem: '辅助图形的作用是：', options: ['丰富延展、强化识别', '替代标志', '装饰唯一', '无作用'], answer: 0, explain: '辅助。' },
          { stem: '辅助图形应来源于：', options: ['品牌核心概念或标志元素', '随机', '流行趋势', '竞品'], answer: 0, explain: '来源。' },
          { stem: '品牌版式规范应规定：', options: ['网格、字体、图像风格与留白', '只有字体', '只有网格', '只有图像'], answer: 0, explain: '规范。' }
        ],
        doc: { lead: '这一章讲辅助。', sections: [
          { id: 'graphic', title: '辅助图形', html: `<p>来源、构成方式；延展规则。</p>` },
          { id: 'layout', title: '版式', html: `<p>品牌网格、图像风格、模板；一致性。</p>` }
        ], refs: [] } },
      { title: '品牌包装', brief: '货架上的品牌。',
        q: [
          { stem: '包装设计的关键是：', options: ['货架识别与信息传达', '只有好看', '只有成本', '只有材质'], answer: 0, explain: '识别。' },
          { stem: '包装的信息层级应：', options: ['品牌→品类→卖点→法规信息', '随意', '只有法规', '只有卖点'], answer: 0, explain: '层级。' },
          { stem: '可持续包装的趋势包括：', options: ['减量、可回收、可降解', '过度包装', '多层包装', '一次性'], answer: 0, explain: '可持续。' }
        ],
        doc: { lead: '这一章讲包装。', sections: [
          { id: 'shelf', title: '货架', html: `<p>陈列环境、视觉竞争；信息层级。</p>` },
          { id: 'sustainable', title: '可持续', html: `<p>材料与结构减量；法规与成本。</p>` }
        ], refs: [] } },
      { title: '品牌数字资产', brief: '线上。',
        q: [
          { stem: '社交媒体视觉规范应：', options: ['统一模板与调性、适配各平台', '每个平台随意', '只用一个尺寸', '不用规范'], answer: 0, explain: '规范。' },
          { stem: '品牌在界面中的一致性体现在：', options: ['色彩、字体、图标与动效', '只有颜色', '只有图标', '只有动效'], answer: 0, explain: '多要素。' },
          { stem: '动效设计的作用是：', options: ['传达品牌个性与引导操作', '装饰唯一', '炫技', '无作用'], answer: 0, explain: '动效。' }
        ],
        doc: { lead: '这一章讲数字。', sections: [
          { id: 'social', title: '社交', html: `<p>模板系统、封面与内容排布；平台适配。</p>` },
          { id: 'ui', title: '界面与动效', html: `<p>设计 tokens、组件；品牌动效原则。</p>` }
        ], refs: [] } },
      { title: '品牌升级与重塑', brief: '换新。',
        q: [
          { stem: '品牌升级的常见动因：', options: ['市场变化、形象老化、战略调整', '只有形象老化', '只有市场变化', '无动因'], answer: 0, explain: '动因。' },
          { stem: '品牌重塑的风险是：', options: ['丢失既有资产与认知', '成本高唯一', '无风险', '必然成功'], answer: 0, explain: '风险。' },
          { stem: '升级应保留：', options: ['核心识别资产与情感联结', '全部元素', '什么都不留', '只留颜色'], answer: 0, explain: '保留。' }
        ],
        doc: { lead: '这一章讲升级。', sections: [
          { id: 'reason', title: '动因', html: `<p>战略、人群、竞争；品牌审计。</p>` },
          { id: 'process', title: '过程', html: `<p>渐进式 vs 彻底重塑；过渡与传播。</p>` }
        ], refs: [] } },
      { title: '品牌课程设计', brief: '做一套 VI。',
        q: [
          { stem: '品牌课程设计的交付包括：', options: ['标志、基础系统、应用与手册', '只有标志', '只有海报', '只有手册'], answer: 0, explain: '完整。' },
          { stem: '提案应讲清：', options: ['品牌洞察、概念与视觉策略', '只有效果图', '只有颜色', '只有预算'], answer: 0, explain: '策略。' },
          { stem: '评图重点是：', options: ['概念、系统性、执行与延展性', '数量', '尺寸', '颜色数'], answer: 0, explain: '系统。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'task', title: '题目', html: `<p>虚拟品牌 VI：标志 + 基础 + 3 类应用。</p>` },
          { id: 'review', title: '评图', html: `<p>概念一致性、延展能力；手册规范。</p>` }
        ], refs: [] } }
    ] },
    { name: '包装设计', chapters: [
      { title: '包装的功能', brief: '为什么包。',
        q: [
          { stem: '包装的基本功能包括：', options: ['保护、便利、促销、信息', '只有保护', '只有促销', '只有信息'], answer: 0, explain: '多功能。' },
          { stem: '包装设计的三要素是：', options: ['结构、视觉、材料', '只有结构', '只有视觉', '只有材料'], answer: 0, explain: '三要素。' },
          { stem: '包装法规通常要求标注：', options: ['成分、净含量、生产信息', '只有品牌', '只有广告语', '只有图案'], answer: 0, explain: '法规。' }
        ],
        doc: { lead: '这一章讲功能。', sections: [
          { id: 'function', title: '功能', html: `<p>保护、便利、促销、信息；货架角色。</p>` },
          { id: 'element', title: '要素', html: `<p>结构、视觉、材料；成本与工艺。</p>` }
        ], refs: [] } },
      { title: '包装结构', brief: '怎么折。',
        q: [
          { stem: '折叠纸盒的常见结构包括：', options: ['管式、盘式、管盘式', '只有管式', '只有盘式', '只有管盘式'], answer: 0, explain: '三类。' },
          { stem: '结构设计要考虑：', options: ['强度、开启体验、成本与运输', '只有美观', '只有强度', '只有成本'], answer: 0, explain: '综合。' },
          { stem: '刀模图的作用是：', options: ['指导模切与折叠', '装饰', '算成本', '做效果图'], answer: 0, explain: '刀模。' }
        ],
        doc: { lead: '这一章讲结构。', sections: [
          { id: 'carton', title: '纸盒', html: `<p>管式、盘式；刀模图与压痕线。</p>` },
          { id: 'strength', title: '强度', html: `<p>堆码与运输测试；开启体验。</p>` }
        ], refs: [] } },
      { title: '包装视觉', brief: '画什么。',
        q: [
          { stem: '包装视觉设计的信息层级应为：', options: ['品牌→品类→卖点→法规', '随意', '法规→品牌', '卖点→品牌'], answer: 0, explain: '层级。' },
          { stem: '货架冲击力依赖：', options: ['色彩、图形与版式的对比', '只有颜色', '只有图形', '只有文字'], answer: 0, explain: '对比。' },
          { stem: '系列包装应：', options: ['统一规则下变化', '各自为政', '完全相同', '无规则'], answer: 0, explain: '系列。' }
        ],
        doc: { lead: '这一章讲视觉。', sections: [
          { id: 'hierarchy', title: '层级', html: `<p>品牌与品类、卖点与法规；正面与侧面。</p>` },
          { id: 'series', title: '系列', html: `<p>色彩编码、图形系统；货架陈列效果。</p>` }
        ], refs: [] } },
      { title: '材料与工艺', brief: '用什么做。',
        q: [
          { stem: '常见包装材料包括：', options: ['纸、塑料、金属、玻璃、复合材料', '只有纸', '只有塑料', '只有金属'], answer: 0, explain: '多种。' },
          { stem: '烫金、UV、击凸属于：', options: ['表面工艺', '结构工艺', '材料', '印刷方式'], answer: 0, explain: '表面工艺。' },
          { stem: '材料选择应权衡：', options: ['保护性、成本、环保与体验', '只有成本', '只有环保', '只有美观'], answer: 0, explain: '权衡。' }
        ],
        doc: { lead: '这一章讲材料。', sections: [
          { id: 'material', title: '材料', html: `<p>纸、塑料、金属、玻璃；阻隔与成本。</p>` },
          { id: 'craft', title: '工艺', html: `<p>印刷、烫印、UV、击凸；打样与量产。</p>` }
        ], refs: [] } },
      { title: '可持续包装', brief: '环保。',
        q: [
          { stem: '可持续包装的原则包括：', options: ['减量、可回收、可降解、可重复使用', '只有减量', '只有可回收', '只有可降解'], answer: 0, explain: '多原则。' },
          { stem: '过度包装的问题是：', options: ['浪费资源且增加成本', '更美观', '更保护', '更便宜'], answer: 0, explain: '过度。' },
          { stem: '包装生命周期评估（LCA）用于：', options: ['量化环境影响', '算成本', '定价格', '做设计'], answer: 0, explain: 'LCA。' }
        ],
        doc: { lead: '这一章讲可持续。', sections: [
          { id: 'principle', title: '原则', html: `<p>减量设计、单一材质、可回收标识；法规。</p>` },
          { id: 'lca', title: '评估', html: `<p>LCA 方法；碳足迹与成本平衡。</p>` }
        ], refs: [] } },
      { title: '包装与品牌体验', brief: '开箱。',
        q: [
          { stem: '开箱体验的设计要点：', options: ['开启顺畅、信息惊喜、可复用', '越复杂越好', '越难开越好', '无设计'], answer: 0, explain: '体验。' },
          { stem: '包装的二次利用可以：', options: ['延长品牌触点与好感', '增加成本', '无意义', '减少销量'], answer: 0, explain: '二次利用。' },
          { stem: '电商包装需特别考虑：', options: ['运输防护与退货便利', '只有美观', '只有成本', '只有尺寸'], answer: 0, explain: '电商。' }
        ],
        doc: { lead: '这一章讲体验。', sections: [
          { id: 'unbox', title: '开箱', html: `<p>开启序列、内衬与说明；情绪设计。</p>` },
          { id: 'ecommerce', title: '电商', html: `<p>防护、尺寸优化、退货；可持续。</p>` }
        ], refs: [] } },
      { title: '包装项目管理', brief: '落地。',
        q: [
          { stem: '包装项目流程包括：', options: ['brief—设计—打样—测试—量产', '只有设计', '只有打样', '只有量产'], answer: 0, explain: '流程。' },
          { stem: '包装测试包括：', options: ['跌落、堆码、运输、相容性', '只有跌落', '只有堆码', '只有运输'], answer: 0, explain: '多测试。' },
          { stem: '与供应商协作的关键是：', options: ['工艺可行性、成本与交期沟通', '只看价格', '只看速度', '只给图'], answer: 0, explain: '协作。' }
        ],
        doc: { lead: '这一章讲管理。', sections: [
          { id: 'process', title: '流程', html: `<p>需求 brief、结构打样、测试与量产；节点管理。</p>` },
          { id: 'supplier', title: '协作', html: `<p>工艺与成本沟通；印前与验货。</p>` }
        ], refs: [] } },
      { title: '包装课程设计', brief: '做一套。',
        q: [
          { stem: '包装课程设计交付包括：', options: ['结构刀模、视觉设计与实物样', '只有效果图', '只有刀模', '只有说明'], answer: 0, explain: '完整。' },
          { stem: '评图重点是：', options: ['结构合理、视觉传达、工艺可行', '数量', '尺寸', '颜色'], answer: 0, explain: '综合。' },
          { stem: '样机制作的价值是：', options: ['验证结构与体验', '装饰', '替代量产', '无价值'], answer: 0, explain: '验证。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'task', title: '题目', html: `<p>系列产品包装：结构 + 视觉 + 样机。</p>` },
          { id: 'review', title: '评图', html: `<p>结构与工艺、货架效果；改进建议。</p>` }
        ], refs: [] } }
    ] },
    { name: '数字媒体设计', chapters: [
      { title: '数字媒体概述', brief: '新媒介。',
        q: [
          { stem: '数字媒体的特征包括：', options: ['交互性、可编程、可复制', '只有交互性', '只有可复制', '不可变'], answer: 0, explain: '特征。' },
          { stem: 'UI 与 UX 的区别是：', options: ['界面视觉 vs 用户体验', '相同', 'UX 只做图', 'UI 只做研究'], answer: 0, explain: '两者。' },
          { stem: '动效在界面中的作用：', options: ['引导、反馈与品牌表达', '装饰唯一', '炫技', '无作用'], answer: 0, explain: '动效。' }
        ],
        doc: { lead: '这一章讲概述。', sections: [
          { id: 'concept', title: '概念', html: `<p>数字媒体类型、交互特征；UI/UX 分工。</p>` },
          { id: 'process', title: '流程', html: `<p>需求—原型—视觉—交付—迭代；协作。</p>` }
        ], refs: [] } },
      { title: '交互设计基础', brief: '好用。',
        q: [
          { stem: '尼尔森十大原则包括：', options: ['系统状态可见、一致性、错误预防等', '只有可见', '只有一致', '只有预防'], answer: 0, explain: '十原则。' },
          { stem: '用户流程设计的目标是：', options: ['减少认知负担与操作步骤', '增加点击', '增加页面', '装饰'], answer: 0, explain: '流程。' },
          { stem: '可用性测试的价值是：', options: ['发现真实使用障碍', '装饰', '替代设计', '无价值'], answer: 0, explain: '测试。' }
        ],
        doc: { lead: '这一章讲交互。', sections: [
          { id: 'principle', title: '原则', html: `<p>尼尔森原则、反馈与容错；一致性。</p>` },
          { id: 'flow', title: '流程', html: `<p>任务流、信息架构；可用性测试。</p>` }
        ], refs: [] } },
      { title: '界面视觉设计', brief: '好看。',
        q: [
          { stem: '界面设计的栅格系统作用是：', options: ['建立对齐与响应规则', '装饰', '限制', '无作用'], answer: 0, explain: '栅格。' },
          { stem: '设计规范（Design System）的核心是：', options: ['可复用的组件与规则', '只有颜色', '只有字体', '只有图标'], answer: 0, explain: '规范。' },
          { stem: '无障碍设计的要点包括：', options: ['对比度、可点击区域、替代文本', '只有对比', '只有尺寸', '只有文本'], answer: 0, explain: '无障碍。' }
        ],
        doc: { lead: '这一章讲视觉。', sections: [
          { id: 'grid', title: '栅格与组件', html: `<p>8pt 栅格、组件化；状态与变体。</p>` },
          { id: 'a11y', title: '无障碍', html: `<p>对比度、焦点、语义；国际化。</p>` }
        ], refs: [] } },
      { title: '动效与视频', brief: '动起来。',
        q: [
          { stem: '动效设计的基本参数是：', options: ['时长、缓动、延迟', '只有时长', '只有缓动', '只有延迟'], answer: 0, explain: '参数。' },
          { stem: '短视频的叙事关键是：', options: ['前 3 秒抓注意力与清晰结构', '越长越好', '无剪辑', '只放音乐'], answer: 0, explain: '叙事。' },
          { stem: '动效过多会导致：', options: ['干扰与性能问题', '更好体验', '无影响', '加载更快'], answer: 0, explain: '过度。' }
        ],
        doc: { lead: '这一章讲动效。', sections: [
          { id: 'motion', title: '动效', html: `<p>缓动曲线、节奏；引导与反馈。</p>` },
          { id: 'video', title: '视频', html: `<p>分镜、节奏与字幕；竖屏表达。</p>` }
        ], refs: [] } },
      { title: '网页与H5', brief: '做页面。',
        q: [
          { stem: '落地页的核心目标是：', options: ['引导转化', '展示技术', '装饰', '堆信息'], answer: 0, explain: '转化。' },
          { stem: '响应式断点的作用是：', options: ['适配不同屏幕的布局规则', '装饰', '加速', '无作用'], answer: 0, explain: '断点。' },
          { stem: 'H5 交互设计需注意：', options: ['加载性能与移动端操作', '只有动画', '只有音乐', '只有图片'], answer: 0, explain: '性能。' }
        ],
        doc: { lead: '这一章讲网页。', sections: [
          { id: 'landing', title: '落地页', html: `<p>结构、卖点、行动引导；A/B 测试。</p>` },
          { id: 'h5', title: 'H5', html: `<p>移动适配、加载优化；交互与分享。</p>` }
        ], refs: [] } },
      { title: '社交媒体视觉', brief: '刷得到。',
        q: [
          { stem: '社交内容视觉的首要目标是：', options: ['在信息流中被注意并理解', '艺术性', '复杂', '长篇'], answer: 0, explain: '注意。' },
          { stem: '内容模板化的好处是：', options: ['效率与一致性', '创意更多', '无好处', '减少内容'], answer: 0, explain: '模板。' },
          { stem: '数据反馈可用于：', options: ['优化选题与视觉', '装饰', '考核', '无用途'], answer: 0, explain: '优化。' }
        ],
        doc: { lead: '这一章讲社交。', sections: [
          { id: 'feed', title: '信息流', html: `<p>封面与标题、竖屏构图；节奏与系列。</p>` },
          { id: 'data', title: '数据', html: `<p>完播、互动、转化；内容迭代。</p>` }
        ], refs: [] } },
      { title: '数字产品交付', brief: '落地。',
        q: [
          { stem: '设计交付物通常包括：', options: ['设计稿、标注、切图与规范', '只有设计稿', '只有切图', '只有规范'], answer: 0, explain: '交付。' },
          { stem: '设计与开发的协作关键是：', options: ['组件规范与走查', '只交给开发', '只做效果图', '不沟通'], answer: 0, explain: '协作。' },
          { stem: '上线后的优化依赖：', options: ['数据埋点与用户反馈', '猜', '老板意见', '竞品复制'], answer: 0, explain: '数据。' }
        ],
        doc: { lead: '这一章讲交付。', sections: [
          { id: 'handoff', title: '交付', html: `<p>标注、切图、组件库；走查与验收。</p>` },
          { id: 'iterate', title: '迭代', html: `<p>埋点与反馈、AB 测试；版本规划。</p>` }
        ], refs: [] } },
      { title: '数字媒体课程作业', brief: '做一个。',
        q: [
          { stem: '课程作业常见形式：', options: ['App/网页界面 + 交互原型', '只有海报', '只有标志', '只有论文'], answer: 0, explain: '产品。' },
          { stem: '评图重点是：', options: ['问题定义、交互合理、视觉统一', '数量', '动画多', '颜色多'], answer: 0, explain: '综合。' },
          { stem: '原型演示应：', options: ['可点击并讲清关键流程', '只放静态图', '只讲理念', '不演示'], answer: 0, explain: '演示。' }
        ],
        doc: { lead: '这一章讲作业。', sections: [
          { id: 'task', title: '题目', html: `<p>小型 App 设计：用户研究 + 流程 + 界面 + 原型。</p>` },
          { id: 'review', title: '评图', html: `<p>问题与方案、交互与视觉；可用性测试结果。</p>` }
        ], refs: [] } }
    ] },

    /* ---- 大四 ---- */
    { name: '毕业设计', chapters: [
      { title: '选题与开题', brief: '做什么。',
        q: [
          { stem: '视传毕设选题关键是：', options: ['概念明确、工作量适中、可落地', '题目宏大', '追热点', '导师偏好'], answer: 0, explain: '可行。' },
          { stem: '开题报告应包含：', options: ['背景、目标、方案、计划', '只有背景', '只有计划', '只有方案'], answer: 0, explain: '要素。' },
          { stem: '毕设常见类型包括：', options: ['品牌设计、包装、出版、数字产品', '只有品牌', '只有包装', '只有数字'], answer: 0, explain: '多类。' }
        ],
        doc: { lead: '这一章讲开题。', sections: [
          { id: 'topic', title: '选题', html: `<p>品牌、包装、书籍、界面；调研与概念。</p>` },
          { id: 'proposal', title: '开题', html: `<p>背景、目标、方案、进度；可行性。</p>` }
        ], refs: [] } },
      { title: '调研与概念', brief: '想清楚。',
        q: [
          { stem: '设计调研的方法包括：', options: ['桌面研究、访谈、观察、竞品分析', '只有桌面', '只有访谈', '只有竞品'], answer: 0, explain: '多种。' },
          { stem: '概念板的用途是：', options: ['统一视觉方向与情绪', '装饰', '替代设计', '算成本'], answer: 0, explain: '概念板。' },
          { stem: '设计策略应：', options: ['由洞察推导并指导执行', '拍脑袋', '抄竞品', '只看喜好'], answer: 0, explain: '推导。' }
        ],
        doc: { lead: '这一章讲调研。', sections: [
          { id: 'research', title: '调研', html: `<p>桌面研究、用户访谈、竞品分析；洞察提炼。</p>` },
          { id: 'concept', title: '概念', html: `<p>概念板、情绪板；设计策略与关键词。</p>` }
        ], refs: [] } },
      { title: '设计与制作', brief: '做出来。',
        q: [
          { stem: '设计执行应：', options: ['先系统后延展、反复迭代', '一次到位', '只做效果图', '只做标志'], answer: 0, explain: '迭代。' },
          { stem: '打样与制作的作用是：', options: ['验证效果与工艺', '装饰', '替代设计', '无作用'], answer: 0, explain: '验证。' },
          { stem: '毕设展陈应：', options: ['突出核心概念与成果', '堆满作品', '只放电脑', '无说明'], answer: 0, explain: '展陈。' }
        ],
        doc: { lead: '这一章讲制作。', sections: [
          { id: 'execute', title: '执行', html: `<p>系统设计、延展应用；打样与调整。</p>` },
          { id: 'exhibit', title: '展陈', html: `<p>展板与实物、动线；作品集与说明。</p>` }
        ], refs: [] } },
      { title: '答辩与作品集', brief: '讲清楚。',
        q: [
          { stem: '答辩陈述的重点是：', options: ['概念、策略、成果与反思', '致谢', '篇幅', '格式'], answer: 0, explain: '四点。' },
          { stem: '作品集应：', options: ['精选项目并展示过程', '越多越好', '只放成品', '无说明'], answer: 0, explain: '精选。' },
          { stem: '被质疑时应：', options: ['承认局限并说明理由', '争辩', '回避', '改口'], answer: 0, explain: '诚恳。' }
        ],
        doc: { lead: '这一章讲答辩。', sections: [
          { id: 'talk', title: '陈述', html: `<p>10 分钟：概念—策略—成果—反思。</p>` },
          { id: 'portfolio', title: '作品集', html: `<p>项目结构、过程展示；线上与 PDF。</p>` }
        ], refs: [] } }
    ] },
    { name: '专业实习', chapters: [
      { title: '岗位与角色', brief: '设计公司。',
        q: [
          { stem: '视传实习的常见岗位不包括：', options: ['品牌设计师', '包装设计', 'UI 设计', '外科医生'], answer: 3, explain: '无关。' },
          { stem: '选择实习最该看：', options: ['能否参与真实项目', '名气', '工资', '通勤'], answer: 0, explain: '实战。' },
          { stem: '实习生上手最快是：', options: ['从执行与改稿做起', '直接做主创', '只观察', '等安排'], answer: 0, explain: '执行。' }
        ],
        doc: { lead: '这一章讲岗位。', sections: [
          { id: 'roles', title: '岗位', html: `<p>品牌、包装、出版、UI、广告；技能与工具。</p>` },
          { id: 'onboard', title: '上手', html: `<p>熟悉品牌规范与流程；改稿与复盘。</p>` }
        ], refs: [] } },
      { title: '项目协作', brief: '一起做。',
        q: [
          { stem: '与客户沟通的关键是：', options: ['理解真实需求并管理预期', '只讲专业术语', '全部照做', '拒绝沟通'], answer: 0, explain: '沟通。' },
          { stem: '改稿的合理做法是：', options: ['基于反馈澄清目标再修改', '无脑改', '拒绝改', '重做'], answer: 0, explain: '改稿。' },
          { stem: '设计文件的规范包括：', options: ['命名、图层、字体与链接', '随意', '只存 JPG', '不整理'], answer: 0, explain: '规范。' }
        ],
        doc: { lead: '这一章讲协作。', sections: [
          { id: 'client', title: '客户', html: `<p>需求澄清、提案与预期管理；比稿。</p>` },
          { id: 'file', title: '文件', html: `<p>命名与图层、字体授权、链接资源；交付规范。</p>` }
        ], refs: [] } },
      { title: '执行与交付', brief: '落地。',
        q: [
          { stem: '印前检查的关键项：', options: ['出血、转曲、色彩与图片精度', '只有出血', '只有色彩', '只有图片'], answer: 0, explain: '印前。' },
          { stem: '线上交付应注意：', options: ['尺寸规范与多端适配', '只给一张图', '只给源文件', '只给链接'], answer: 0, explain: '适配。' },
          { stem: '交付确认应：', options: ['书面确认范围与版本', '口头', '不确认', '默认通过'], answer: 0, explain: '确认。' }
        ],
        doc: { lead: '这一章讲交付。', sections: [
          { id: 'prepress', title: '印前', html: `<p>出血、转曲、色彩模式；打样签样。</p>` },
          { id: 'digital', title: '线上', html: `<p>尺寸与适配、命名规范；交付确认。</p>` }
        ], refs: [] } },
      { title: '实习复盘', brief: '留下什么。',
        q: [
          { stem: '实习应留下的成果是：', options: ['项目作品与复盘', '工牌', '照片', '评语'], answer: 0, explain: '作品。' },
          { stem: '实习日志推荐写法：', options: ['问题—做法—结果—反思', '流水账', '只写结论', '只写感受'], answer: 0, explain: '结构化。' },
          { stem: '面试讲项目最佳结构：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'output', title: '成果', html: `<p>上线项目、印刷成品、设计规范；作品集。</p>` },
          { id: 'review', title: '复盘', html: `<p>每周五行；讲清你的贡献与学到的东西。</p>` }
        ], refs: [] } }
    ] },
    { name: '考研与求职', chapters: [
      { title: '考研方向', brief: '设计考研。',
        q: [
          { stem: '视传考研的常见方向是：', options: ['设计学、艺术设计（专硕）、视觉传达方向', '只有设计学', '只有专硕', '只有美术学'], answer: 0, explain: '多方向。' },
          { stem: '设计考研通常考试科目：', options: ['政治、英语、专业理论、专业设计（手绘）', '只有手绘', '只有理论', '只有英语'], answer: 0, explain: '四科。' },
          { stem: '择校最应考虑：', options: ['方向、导师与资源', '城市', '学费', '宿舍'], answer: 0, explain: '匹配。' }
        ],
        doc: { lead: '这一章讲方向。', sections: [
          { id: 'paths', title: '方向', html: `<p>设计学、艺术设计专硕；品牌、包装、数字媒体。</p>` },
          { id: 'subjects', title: '科目', html: `<p>政治、英语、史论、手绘/快题；作品集。</p>` }
        ], refs: [] } },
      { title: '专业课复习', brief: '理论与手绘。',
        q: [
          { stem: '设计史论复习主线：', options: ['工艺美术—现代主义—后现代—当代', '只背人名', '只背年份', '只看图'], answer: 0, explain: '主线。' },
          { stem: '快题设计的关键是：', options: ['审题、概念、版面与完成度', '画得细', '颜色多', '字多'], answer: 0, explain: '快题。' },
          { stem: '作品集在复试中的作用：', options: ['展示能力与潜力', '装饰', '凑数', '无作用'], answer: 0, explain: '作品集。' }
        ],
        doc: { lead: '这一章讲复习。', sections: [
          { id: 'history', title: '史论', html: `<p>设计史脉络、代表人物与作品；论述题。</p>` },
          { id: 'sketch', title: '快题', html: `<p>审题、构图、配色；时间分配与模板。</p>` }
        ], refs: [] } },
      { title: '求职方向', brief: '设计岗。',
        q: [
          { stem: '视传毕业生的常见去向不包括：', options: ['品牌/广告公司', 'in-house 设计', '互联网 UI', '外科医生'], answer: 3, explain: '专业限制。' },
          { stem: '设计岗看重：', options: ['作品集与执行能力', '只有学历', '只有证书', '只有英语'], answer: 0, explain: '作品。' },
          { stem: '求职最加分的材料：', options: ['高质量作品集与实习经历', '证书数量', '成绩单', '社团'], answer: 0, explain: '作品集。' }
        ],
        doc: { lead: '这一章讲就业。', sections: [
          { id: 'paths', title: '路径', html: `<p>品牌广告、互联网 UI、出版、in-house；自由职业。</p>` },
          { id: 'skill', title: '能力', html: `<p>作品集、软件与执行；沟通与项目管理；持续学习。</p>` }
        ], refs: [] } },
      { title: '面试', brief: '展示能力。',
        q: [
          { stem: '设计面试常考：', options: ['作品集讲解与设计思路', '只有软件操作', '只有英语', '只有学历'], answer: 0, explain: '作品。' },
          { stem: '讲作品集的最佳结构：', options: ['背景—问题—方案—结果', '流水账', '只讲结果', '只讲软件'], answer: 0, explain: '结构。' },
          { stem: '被问到不会的问题应：', options: ['说明思路并诚实承认', '编造', '沉默', '转移话题'], answer: 0, explain: '诚实。' }
        ],
        doc: { lead: '这一章讲面试。', sections: [
          { id: 'portfolio', title: '作品集讲解', html: `<p>精选 2–3 个项目深讲；讲清问题、取舍与结果。</p>` },
          { id: 'test', title: '实操测试', html: `<p>限时设计、软件操作；时间管理与沟通。</p>` }
        ], refs: [] } }
    ] }
  ];

  var override = {};
  TITLES.forEach(function (t) { override[t] = { modules: [] }; });
  COURSES.forEach(function (c, ci) {
    var stageTitle = TITLES[Math.floor(ci / 3)];
    if (!stageTitle || !c.chapters) return;
    var levels = c.chapters.map(function (ch, k) {
      DOCS[MAJOR + '-m' + ci + '-l' + k] = ch.doc;
      return { name: '第 ' + (k + 1) + ' 章 · ' + ch.title, brief: ch.brief, questions: ch.q, ready: true };
    });
    override[stageTitle].modules.push({ name: c.name, levels: levels });
  });
  MAJOR_STAGE_OVERRIDES[MAJOR] = override;
})();
