/* ==========================================================
   journalism-courses.js · 新闻学：12 门课（主干 8 / 出口 4）= 84 关
   ========================================================== */

(function () {
  var MAJOR = 'literature-新闻学';
  var TITLES = stageTitlesOf('literature');

  var COURSES = [
    { name: '新闻学概论', chapters: [
      { title: '新闻的定义与特征', brief: '新闻是什么，不是什么。',
        q: [
          { stem: '新闻最基本的特点是：', options: ['真实、新鲜、公开', '有趣', '简短', '正面'], answer: 0, explain: '三性。' },
          { stem: '新闻与宣传的区别是：', options: ['是否以传播事实为主', '是否需要媒体', '是否有立场', '是否有受众'], answer: 0, explain: '事实/观点。' },
          { stem: '"新闻是新近发生的事实的报道"出自：', options: ['陆定一', '范长江', '邵飘萍', '梁启超'], answer: 0, explain: '陆定一。' }
        ],
        doc: { lead: '这一章讲定义。', sections: [
          { id: 'define', title: '定义', html: `<p>新近发生的事实的报道；真实、新鲜、公开、扩散性。</p>` },
          { id: 'distinction', title: '辨析', html: `<p>新闻 vs 宣传、广告、文学、历史；边界与交叉。</p>` }
        ], refs: [] } },
      { title: '新闻价值', brief: '什么值得报道。',
        q: [
          { stem: '新闻价值要素不包括：', options: ['时新性', '重要性', '接近性', '作者的文笔'], answer: 3, explain: '文笔非要素。' },
          { stem: '接近性包括：', options: ['地理、心理、利益接近', '只有地理', '只有心理', '只有时间'], answer: 0, explain: '多维。' },
          { stem: '新闻价值判断受什么影响？', options: ['受众需求、媒介定位、社会语境', '只有编辑偏好', '只有广告', '只有技术'], answer: 0, explain: '多重。' }
        ],
        doc: { lead: '这一章讲价值。', sections: [
          { id: 'elements', title: '要素', html: `<p>时新、重要、显著、接近、趣味、冲突。</p>` },
          { id: 'judgment', title: '判断', html: `<p>媒介定位、受众需求、社会效果；价值不是唯一标准。</p>` }
        ], refs: [] } },
      { title: '新闻真实', brief: '具体真实与总体真实。',
        q: [
          { stem: '新闻真实的最低要求是：', options: ['具体事实准确', '观点正确', '文笔优美', '时效快'], answer: 0, explain: '具体真实。' },
          { stem: '总体真实强调：', options: ['从整体与联系中反映现实', '细节准确唯一', '观点正确唯一', '时效'], answer: 0, explain: '总体。' },
          { stem: '导致新闻失实的常见原因是：', options: ['核实不足、断章取义、追求轰动', '采访太多', '写作太慢', '编辑太严'], answer: 0, explain: '失实。' }
        ],
        doc: { lead: '这一章讲真实。', sections: [
          { id: 'levels', title: '两个层次', html: `<p>具体真实（细节准确）与总体真实（整体符合实际）。</p>` },
          { id: 'causes', title: '失实原因', html: `<p>信源单一、核实不足、预设立场、流量驱动。</p>` }
        ], refs: [] } },
      { title: '客观与平衡', brief: '把观点和事实分开。',
        q: [
          { stem: '新闻客观性的核心是：', options: ['事实与观点分离、多方呈现', '没有立场', '不用形容词', '完全中立'], answer: 0, explain: '分离。' },
          { stem: '平衡报道要求：', options: ['呈现主要相关方的声音', '双方各一半', '只采访官方', '只采访弱者'], answer: 0, explain: '相关方。' },
          { stem: '客观性受到的主要批评是：', options: ['绝对客观不可能，可能掩盖立场', '太费时间', '太贵', '不受欢迎'], answer: 0, explain: '批评。' }
        ],
        doc: { lead: '这一章讲客观。', sections: [
          { id: 'rules', title: '操作', html: `<p>事实与评论分离、引语平衡、注明来源、避免标签。</p>` },
          { id: 'critique', title: '反思', html: `<p>客观性是一种专业规范，不是价值无涉；透明性作为补充。</p>` }
        ], refs: [] } },
      { title: '新闻自由与社会责任', brief: '权利与边界。',
        q: [
          { stem: '社会责任理论强调：', options: ['自由伴随责任', '绝对自由', '政府管制', '市场决定'], answer: 0, explain: '责任。' },
          { stem: '新闻自由的法律边界包括：', options: ['不得侵犯名誉权、隐私权、国家安全', '无边界', '只有国家安全', '只有隐私'], answer: 0, explain: '多重。' },
          { stem: '媒介审判的问题在于：', options: ['媒体代替司法定性与量刑', '报道太慢', '采访太多', '篇幅太长'], answer: 0, explain: '媒介审判。' }
        ],
        doc: { lead: '这一章讲自由。', sections: [
          { id: 'theory', title: '理论', html: `<p>自由主义理论、社会责任理论；知情权与表达权。</p>` },
          { id: 'limits', title: '边界', html: `<p>名誉、隐私、国家安全、司法独立；媒介审判的规避。</p>` }
        ], refs: [] } },
      { title: '新闻事业与体制', brief: '媒体怎么组织。',
        q: [
          { stem: '我国新闻事业的基本属性是：', options: ['事业性质、企业化管理', '纯企业', '纯事业', '纯公益'], answer: 0, explain: '双重。' },
          { stem: '新闻体制的核心问题是：', options: ['谁办媒体、如何管理', '技术', '广告', '发行'], answer: 0, explain: '体制。' },
          { stem: '媒体融合的背景是：', options: ['技术变革与受众迁移', '政策唯一', '广告下降唯一', '竞争'], answer: 0, explain: '技术。' }
        ],
        doc: { lead: '这一章讲体制。', sections: [
          { id: 'system', title: '体制', html: `<p>党管媒体、事业单位企业化管理、集团化。</p>` },
          { id: 'convergence', title: '融合', html: `<p>技术、平台、组织与文化的融合；中央厨房。</p>` }
        ], refs: [] } },
      { title: '新闻专业主义', brief: '这个职业的规矩。',
        q: [
          { stem: '新闻专业主义的核心包括：', options: ['真实、客观、独立、服务公众', '利润', '流量', '娱乐'], answer: 0, explain: '四要素。' },
          { stem: '专业主义面临的挑战是：', options: ['商业化、平台化、算法推荐', '技术太新', '记者太少', '采访太难'], answer: 0, explain: '挑战。' },
          { stem: '新闻职业伦理的最低要求是：', options: ['不造假、不伤害、不受贿', '文笔好', '速度快', '人脉广'], answer: 0, explain: '底线。' }
        ],
        doc: { lead: '这一章讲专业。', sections: [
          { id: 'core', title: '核心', html: `<p>公共服务、客观性、自治、伦理规范、专业教育。</p>` },
          { id: 'crisis', title: '危机', html: `<p>商业模式崩塌、平台依赖、信任下降；重建路径。</p>` }
        ], refs: [] } },
      { title: '新闻与舆论', brief: '媒体塑造看法。',
        q: [
          { stem: '舆论的三个要素是：', options: ['议题、公众、意见', '媒体、记者、受众', '事实、观点、情绪', '时间、地点、人物'], answer: 0, explain: '三要素。' },
          { stem: '媒体引导舆论的方式包括：', options: ['议程设置、框架、评论', '只有评论', '只有议程', '只有技术'], answer: 0, explain: '多种。' },
          { stem: '网络舆情的特点包括：', options: ['突发、情绪化、易反转', '稳定', '理性唯一', '缓慢'], answer: 0, explain: '特点。' }
        ],
        doc: { lead: '这一章讲舆论。', sections: [
          { id: 'concept', title: '概念', html: `<p>舆论、舆情、民意；形成与测量。</p>` },
          { id: 'guidance', title: '引导', html: `<p>议程设置、框架理论、舆情回应；避免封堵与炒作。</p>` }
        ], refs: [] } }
    ] },
    { name: '传播学概论', chapters: [
      { title: '传播模式', brief: '谁通过什么说了什么。',
        q: [
          { stem: '拉斯韦尔 5W 模式不包括：', options: ['谁', '说什么', '通过什么渠道', '赚多少钱'], answer: 3, explain: '5W。' },
          { stem: '香农-韦弗模式的核心是：', options: ['信息传递与噪音', '意义建构', '社会关系', '文化'], answer: 0, explain: '传输。' },
          { stem: '编码与解码理论强调：', options: ['受众可能做出不同解读', '信息原样传递', '渠道决定', '噪音唯一'], answer: 0, explain: '霍尔。' }
        ],
        doc: { lead: '这一章讲模式。', sections: [
          { id: 'linear', title: '线性模式', html: `<p>5W、香农-韦弗；传递观。</p>` },
          { id: 'cultural', title: '文化模式', html: `<p>编码/解码、仪式观；意义与协商。</p>` }
        ], refs: [] } },
      { title: '人际与群体传播', brief: '身边的传播。',
        q: [
          { stem: '意见领袖的特征是：', options: ['接触媒体多、在群体中有影响', '粉丝多', '收入高', '学历高'], answer: 0, explain: '两级传播。' },
          { stem: '群体传播的特点是：', options: ['群体规范影响信息接受', '完全自由', '只传播事实', '无互动'], answer: 0, explain: '规范。' },
          { stem: '创新扩散理论的要素包括：', options: ['创新、渠道、时间、社会系统', '只有创新', '只有渠道', '只有人'], answer: 0, explain: '四要素。' }
        ],
        doc: { lead: '这一章讲人际。', sections: [
          { id: 'two-step', title: '两级传播', html: `<p>大众媒体 → 意见领袖 → 一般受众。</p>` },
          { id: 'diffusion', title: '扩散', html: `<p>创新者、早期采用者、早期大众、晚期大众、落后者。</p>` }
        ], refs: [] } },
      { title: '大众传播的功能', brief: '媒体做什么。',
        q: [
          { stem: '拉斯韦尔提出的传播三功能不包括：', options: ['环境监视', '社会协调', '文化传承', '娱乐'], answer: 3, explain: '赖特加娱乐。' },
          { stem: '赖特补充的功能是：', options: ['娱乐', '监视', '协调', '传承'], answer: 0, explain: '娱乐。' },
          { stem: '传播的负功能包括：', options: ['麻醉性、刻板印象', '信息传递', '社会整合', '文化传承'], answer: 0, explain: '负功能。' }
        ],
        doc: { lead: '这一章讲功能。', sections: [
          { id: 'positive', title: '正功能', html: `<p>监视环境、协调社会、传承文化、提供娱乐。</p>` },
          { id: 'negative', title: '负功能', html: `<p>麻醉作用、刻板印象、信息过载、依赖。</p>` }
        ], refs: [] } },
      { title: '议程设置', brief: '媒体告诉我们想什么。',
        q: [
          { stem: '议程设置理论的核心是：', options: ['媒体影响公众关注什么议题', '媒体决定公众怎么想', '媒体改变行为', '媒体无影响'], answer: 0, explain: '第一层。' },
          { stem: '第二层议程设置关注：', options: ['议题属性的显著性转移', '议题数量', '媒体数量', '受众数量'], answer: 0, explain: '属性。' },
          { stem: '网络时代的议程设置变化是：', options: ['受众也可设置议程', '消失', '更强', '只由算法决定'], answer: 0, explain: '反向议程。' }
        ],
        doc: { lead: '这一章讲议程。', sections: [
          { id: 'levels', title: '两个层次', html: `<p>议题显著性 → 属性显著性；网络议程设置（NAS）。</p>` },
          { id: 'network', title: '网络', html: `<p>反向议程设置、算法议程；受众能动性上升。</p>` }
        ], refs: [] } },
      { title: '沉默的螺旋', brief: '为什么不敢说。',
        q: [
          { stem: '沉默的螺旋假设的核心是：', options: ['感知意见气候影响表达意愿', '多数人一定正确', '媒体决定一切', '沉默是美德'], answer: 0, explain: '意见气候。' },
          { stem: '该理论受到的挑战是：', options: ['网络环境可能减弱螺旋', '完全错误', '无法验证', '只适用政治'], answer: 0, explain: '网络。' },
          { stem: '准统计感官指：', options: ['人们感知意见分布的能力', '统计方法', '媒体调查', '算法'], answer: 0, explain: '感知。' }
        ],
        doc: { lead: '这一章讲螺旋。', sections: [
          { id: 'assumption', title: '假设', html: `<p>孤立恐惧、意见气候感知、表达与沉默的循环。</p>` },
          { id: 'critique', title: '争议', html: `<p>网络匿名与社群化是否削弱螺旋；实证分歧。</p>` }
        ], refs: [] } },
      { title: '使用与满足', brief: '受众为什么用媒体。',
        q: [
          { stem: '使用与满足理论的视角是：', options: ['受众主动选择媒体满足需求', '媒体决定受众', '技术决定', '无需求'], answer: 0, explain: '主动受众。' },
          { stem: '常见的使用动机包括：', options: ['信息、社交、娱乐、身份', '只有信息', '只有娱乐', '只有社交'], answer: 0, explain: '多种。' },
          { stem: '该理论的局限是：', options: ['忽视媒体结构与权力', '无法测量', '太复杂', '过时'], answer: 0, explain: '局限。' }
        ],
        doc: { lead: '这一章讲满足。', sections: [
          { id: 'needs', title: '需求', html: `<p>信息、社交、娱乐、个人认同；使用与依赖。</p>` },
          { id: 'limits', title: '局限', html: `<p>过度强调能动性；忽略算法与平台结构。</p>` }
        ], refs: [] } },
      { title: '培养理论', brief: '看电视看出的世界观。',
        q: [
          { stem: '培养理论的核心是：', options: ['长期接触电视影响对现实的认知', '短期效果', '只影响行为', '无影响'], answer: 0, explain: '长期。' },
          { stem: '"mean world syndrome"指：', options: ['重看者认为世界更危险', '世界确实更危险', '媒体更危险', '观众更暴力'], answer: 0, explain: 'mean world。' },
          { stem: '培养理论受到的批评是：', options: ['因果方向难确定、效果量小', '完全错误', '无法测量', '只适用儿童'], answer: 0, explain: '批评。' }
        ],
        doc: { lead: '这一章讲培养。', sections: [
          { id: 'cultivation', title: '培养', html: `<p>主流化、共振；重度观看者的认知偏向。</p>` },
          { id: 'critique', title: '批评', html: `<p>选择偏差、效果量、新媒体环境下的适用性。</p>` }
        ], refs: [] } },
      { title: '传播效果研究', brief: '效果有多强。',
        q: [
          { stem: '传播效果研究经历了：', options: ['强—弱—适度（强）', '一直强', '一直弱', '无变化'], answer: 0, explain: '三阶段。' },
          { stem: '有限效果论的代表研究是：', options: ['伊里县研究', '魔弹论', '培养理论', '议程设置'], answer: 0, explain: '拉扎斯菲尔德。' },
          { stem: '适度效果论强调：', options: ['效果有条件、受中介因素影响', '效果无限', '无效果', '只有短期'], answer: 0, explain: '条件。' }
        ],
        doc: { lead: '这一章讲效果。', sections: [
          { id: 'stages', title: '三阶段', html: `<p>魔弹论 → 有限效果 → 适度效果/强大效果。</p>` },
          { id: 'mediators', title: '中介', html: `<p>受众特征、群体、信源可信度、议题性质。</p>` }
        ], refs: [] } }
    ] },
    { name: '新闻采访', chapters: [
      { title: '采访准备', brief: '七分准备三分采访。',
        q: [
          { stem: '采访准备的核心是：', options: ['背景研究 + 问题设计', '设备', '服装', '路线'], answer: 0, explain: '功课。' },
          { stem: '背景资料的作用是：', options: ['提出好问题、避免被误导', '凑字数', '装饰', '应付'], answer: 0, explain: '提问。' },
          { stem: '采访提纲应：', options: ['有主线、可追问、灵活调整', '固定不变', '越多越好', '只列封闭问题'], answer: 0, explain: '主线。' }
        ],
        doc: { lead: '这一章讲准备。', sections: [
          { id: 'research', title: '研究', html: `<p>人物、事件、政策、争议；查公开资料与数据库。</p>` },
          { id: 'outline', title: '提纲', html: `<p>核心问题 + 追问方向；开放式为主。</p>` }
        ], refs: [] } },
      { title: '提问技巧', brief: '问出真东西。',
        q: [
          { stem: '开放式问题的优势是：', options: ['获得细节与叙事', '便于统计', '节省时间', '避免跑题'], answer: 0, explain: '细节。' },
          { stem: '追问的有效方式是：', options: ['要求举例、具体化', '重复原问题', '换话题', '沉默'], answer: 0, explain: '具体化。' },
          { stem: '采访中应避免：', options: ['诱导性提问', '开放提问', '倾听', '记录'], answer: 0, explain: '诱导。' }
        ],
        doc: { lead: '这一章讲提问。', sections: [
          { id: 'types', title: '类型', html: `<p>开放/封闭、直接/间接、追问、假设。</p>` },
          { id: 'skills', title: '技巧', html: `<p>倾听、复述确认、容忍沉默、控制节奏。</p>` }
        ], refs: [] } },
      { title: '消息源', brief: '谁在说话。',
        q: [
          { stem: '消息源评估的维度是：', options: ['知情程度、立场、可信度', '年龄', '职位唯一', '口才'], answer: 0, explain: '三维。' },
          { stem: '匿名信源的使用原则是：', options: ['必要且谨慎，编辑知情', '随意使用', '越多越好', '完全禁止'], answer: 0, explain: '谨慎。' },
          { stem: '多源核实的作用是：', options: ['降低失实风险', '凑字数', '显示勤奋', '保护信源'], answer: 0, explain: '核实。' }
        ],
        doc: { lead: '这一章讲信源。', sections: [
          { id: 'types', title: '类型', html: `<p>当事人、目击者、专家、官方、文件；一手与二手。</p>` },
          { id: 'verify', title: '核实', html: `<p>交叉验证、文件佐证、利益关系审查。</p>` }
        ], refs: [] } },
      { title: '现场与观察', brief: '到现场去。',
        q: [
          { stem: '现场采访的价值是：', options: ['获得一手细节与氛围', '节省时间', '避免麻烦', '便于写作'], answer: 0, explain: '一手。' },
          { stem: '观察记录应：', options: ['客观具体，区分事实与感受', '只写感受', '只写结论', '不记录'], answer: 0, explain: '客观。' },
          { stem: '突发事件采访的首要原则是：', options: ['不干扰救援、尊重当事人', '抢独家', '追问细节', '拍摄特写'], answer: 0, explain: '不伤害。' }
        ],
        doc: { lead: '这一章讲现场。', sections: [
          { id: 'observe', title: '观察', html: `<p>场景、人物、动作、对话、细节；五感记录。</p>` },
          { id: 'ethics', title: '伦理', html: `<p>不干扰救援、不消费苦难、征得同意。</p>` }
        ], refs: [] } },
      { title: '隐性采访', brief: '暗访的边界。',
        q: [
          { stem: '隐性采访的适用条件是：', options: ['涉及重大公共利益且无法通过公开方式获得', '任何题材', '便于获得', '成本低'], answer: 0, explain: '严格限制。' },
          { stem: '隐性采访的风险包括：', options: ['侵权、程序违法、伦理争议', '成本高', '时间长', '写作难'], answer: 0, explain: '风险。' },
          { stem: '使用隐性采访应当：', options: ['经编辑部批准并评估必要性', '记者自行决定', '越多越好', '不必记录'], answer: 0, explain: '程序。' }
        ],
        doc: { lead: '这一章讲暗访。', sections: [
          { id: 'conditions', title: '条件', html: `<p>公共利益、必要性、最后手段、比例原则。</p>` },
          { id: 'procedure', title: '程序', html: `<p>审批、记录、法律审查、事后公开说明。</p>` }
        ], refs: [] } },
      { title: '深度采访', brief: '把故事挖出来。',
        q: [
          { stem: '深度报道采访的特点是：', options: ['多次、多源、长时间', '一次成型', '只采访官方', '只靠电话'], answer: 0, explain: '多次。' },
          { stem: '人物采访的关键是：', options: ['建立信任、抓住细节与转折', '问隐私', '问成就', '按提纲念'], answer: 0, explain: '信任。' },
          { stem: '调查报道的核心方法是：', options: ['文件、数据、人物交叉验证', '传闻', '单一信源', '网络搜索唯一'], answer: 0, explain: '交叉。' }
        ],
        doc: { lead: '这一章讲深度。', sections: [
          { id: 'investigation', title: '调查', html: `<p>假设—证据—文件—人物；追踪资金与权力链。</p>` },
          { id: 'profile', title: '人物', html: `<p>场景、对话、细节、矛盾；避免造神或抹黑。</p>` }
        ], refs: [] } },
      { title: '采访伦理', brief: '不做伤害。',
        q: [
          { stem: '采访未成年人与受害者应：', options: ['格外谨慎、保护隐私', '如实公开', '追问细节', '拍摄面部'], answer: 0, explain: '保护。' },
          { stem: '"知情同意"在采访中意味着：', options: ['告知报道用途并取得同意', '签字', '口头告知', '无需告知'], answer: 0, explain: '告知。' },
          { stem: '采访中的利益冲突应：', options: ['披露并回避', '隐瞒', '接受', '无所谓'], answer: 0, explain: '回避。' }
        ],
        doc: { lead: '这一章讲伦理。', sections: [
          { id: 'principles', title: '原则', html: `<p>不伤害、知情同意、隐私保护、避免利益冲突。</p>` },
          { id: 'vulnerable', title: '弱势群体', html: `<p>儿童、受害者、逝者家属；二次伤害的防范。</p>` }
        ], refs: [] } },
      { title: '记录与整理', brief: '把材料变成稿件。',
        q: [
          { stem: '采访记录应当：', options: ['录音 + 笔记 + 当天整理', '只靠记忆', '只录音', '只写结论'], answer: 0, explain: '多源。' },
          { stem: '引语使用的要求是：', options: ['准确、不断章取义', '可润色', '可编造', '可合并'], answer: 0, explain: '准确。' },
          { stem: '素材整理的有效方式是：', options: ['按主题归档并标注来源', '按时间堆叠', '不整理', '只留结论'], answer: 0, explain: '归档。' }
        ],
        doc: { lead: '这一章讲整理。', sections: [
          { id: 'record', title: '记录', html: `<p>录音需同意；笔记记关键词与场景；当天补全。</p>` },
          { id: 'archive', title: '归档', html: `<p>按主题/人物/时间；标注来源与可信度；保留原始材料。</p>` }
        ], refs: [] } }
    ] },
    { name: '新闻写作', chapters: [
      { title: '消息结构', brief: '倒金字塔。',
        q: [
          { stem: '倒金字塔结构的特点是：', options: ['重要信息在前', '按时间顺序', '按逻辑递进', '结尾点题'], answer: 0, explain: '倒金字塔。' },
          { stem: '消息的五要素是：', options: ['何时、何地、何人、何事、何因', '标题、导语、主体、背景、结尾', '开头、中间、结尾', '事实、观点、引语'], answer: 0, explain: '5W。' },
          { stem: '倒金字塔的优点是：', options: ['便于编辑删减、读者快速获取信息', '文采好', '有悬念', '适合深度'], answer: 0, explain: '效率。' }
        ],
        doc: { lead: '这一章讲结构。', sections: [
          { id: 'inverted', title: '倒金字塔', html: `<p>导语—次重要—背景—补充；可随时截断。</p>` },
          { id: 'alternatives', title: '其他结构', html: `<p>时间顺序、悬念式、华尔街日报体（趣闻引入）。</p>` }
        ], refs: [] } },
      { title: '导语', brief: '第一段决定读不读。',
        q: [
          { stem: '硬导语的特点是：', options: ['直接陈述核心事实', '设置悬念', '描写场景', '引用名言'], answer: 0, explain: '硬导语。' },
          { stem: '软导语常用于：', options: ['特稿与软新闻', '突发新闻', '公告', '简讯'], answer: 0, explain: '软新闻。' },
          { stem: '好导语应当：', options: ['简短、具体、突出新闻点', '越长越好', '面面俱到', '用形容词'], answer: 0, explain: '具体。' }
        ],
        doc: { lead: '这一章讲导语。', sections: [
          { id: 'types', title: '类型', html: `<p>硬导语（5W）、软导语（场景/人物/悬念）、直接引语式。</p>` },
          { id: 'rules', title: '要求', html: `<p>30 字左右、具体数字与动作、避免空话。</p>` }
        ], refs: [] } },
      { title: '主体与背景', brief: '把故事讲完。',
        q: [
          { stem: '主体部分的作用是：', options: ['展开导语、提供细节与证据', '重复导语', '写感想', '凑字数'], answer: 0, explain: '展开。' },
          { stem: '背景材料的作用是：', options: ['帮助理解、提供语境', '装饰', '凑数', '表态'], answer: 0, explain: '语境。' },
          { stem: '消息结尾应：', options: ['自然收束或留有余味', '总结升华', '喊口号', '抒情'], answer: 0, explain: '收束。' }
        ],
        doc: { lead: '这一章讲主体。', sections: [
          { id: 'body', title: '主体', html: `<p>按重要性递减；一段一个信息点；引语与数据支撑。</p>` },
          { id: 'background', title: '背景', html: `<p>解释性背景、对比性背景；嵌入而非堆砌。</p>` }
        ], refs: [] } },
      { title: '新闻语言', brief: '准确、简洁、具体。',
        q: [
          { stem: '新闻语言的首要要求是：', options: ['准确', '华丽', '含蓄', '幽默'], answer: 0, explain: '准确。' },
          { stem: '应避免的表达是：', options: ['空话套话、形容词堆砌', '具体数字', '直接引语', '动作描写'], answer: 0, explain: '空话。' },
          { stem: '"用事实说话"意味着：', options: ['以细节与证据代替评价', '不写观点', '只写数据', '不用形容词'], answer: 0, explain: '事实。' }
        ],
        doc: { lead: '这一章讲语言。', sections: [
          { id: 'rules', title: '原则', html: `<p>准确、简洁、具体、中性；动词优先、少用形容词。</p>` },
          { id: 'traps', title: '陷阱', html: `<p>公文腔、宣传腔、网络腔；避免绝对化表述。</p>` }
        ], refs: [] } },
      { title: '特稿', brief: '讲故事的艺术。',
        q: [
          { stem: '特稿与消息的主要区别是：', options: ['篇幅、细节与叙事性', '真实性', '时效性', '采访'], answer: 0, explain: '叙事。' },
          { stem: '特稿的结构常用：', options: ['场景—冲突—解决', '倒金字塔', '时间顺序唯一', '问答'], answer: 0, explain: '叙事弧。' },
          { stem: '特稿写作的关键是：', options: ['细节与结构', '形容词', '抒情', '评论'], answer: 0, explain: '细节。' }
        ],
        doc: { lead: '这一章讲特稿。', sections: [
          { id: 'narrative', title: '叙事', html: `<p>场景、人物、冲突、转折、结局；细节与对话。</p>` },
          { id: 'ethics', title: '边界', html: `<p>不为叙事牺牲真实；复合人物需说明。</p>` }
        ], refs: [] } },
      { title: '人物报道', brief: '写活一个人。',
        q: [
          { stem: '人物报道的核心是：', options: ['通过细节展现性格与命运', '罗列成就', '赞美', '批判'], answer: 0, explain: '细节。' },
          { stem: '人物报道的常见问题是：', options: ['造神或抹黑、扁平化', '太短', '太少采访', '没有照片'], answer: 0, explain: '扁平。' },
          { stem: '写好人物需要：', options: ['场景、对话、矛盾、变化', '只有简历', '只有引语', '只有评价'], answer: 0, explain: '四要素。' }
        ],
        doc: { lead: '这一章讲人物。', sections: [
          { id: 'materials', title: '素材', html: `<p>场景、对话、细节、他人评价、关键事件。</p>` },
          { id: 'pitfalls', title: '陷阱', html: `<p>预设立场、过度诠释、隐私侵犯。</p>` }
        ], refs: [] } },
      { title: '数据新闻', brief: '用数据讲故事。',
        q: [
          { stem: '数据新闻的核心是：', options: ['用数据发现并支撑报道', '做图表', '堆数字', '写代码'], answer: 0, explain: '发现。' },
          { stem: '数据可视化的原则是：', options: ['准确、清晰、服务于叙事', '炫技', '颜色多', '动画'], answer: 0, explain: '清晰。' },
          { stem: '数据新闻的常见错误是：', options: ['相关当因果、口径不一致', '图表太简单', '数据太少', '文字太多'], answer: 0, explain: '误用。' }
        ],
        doc: { lead: '这一章讲数据。', sections: [
          { id: 'workflow', title: '流程', html: `<p>找数据—清洗—分析—可视化—写作；口径与来源。</p>` },
          { id: 'pitfalls', title: '陷阱', html: `<p>幸存者偏差、基数忽略、图表误导。</p>` }
        ], refs: [] } },
      { title: '修改与事实核查', brief: '最后一道关。',
        q: [
          { stem: '事实核查的对象包括：', options: ['人名、数字、引语、时间、因果关系', '只有数字', '只有人名', '只有引语'], answer: 0, explain: '全面。' },
          { stem: '修改的重点顺序是：', options: ['事实—结构—语言—标点', '标点—语言—结构', '语言唯一', '标题唯一'], answer: 0, explain: '事实优先。' },
          { stem: '稿件送审的意义是：', options: ['法律与伦理把关', '走流程', '增加署名', '拖延'], answer: 0, explain: '把关。' }
        ],
        doc: { lead: '这一章讲核查。', sections: [
          { id: 'checklist', title: '清单', html: `<p>每个事实标注来源；数字回算；引语回听录音。</p>` },
          { id: 'review', title: '审稿', html: `<p>编辑、法务、事实核查员；错误更正机制。</p>` }
        ], refs: [] } }
    ] },
    { name: '新闻编辑', chapters: [
      { title: '编辑流程', brief: '从稿件到版面。',
        q: [
          { stem: '编辑流程的正确顺序是：', options: ['策划—选稿—改稿—制作—审校', '改稿—选稿—策划', '制作—审校—策划', '只有一个环节'], answer: 0, explain: '流程。' },
          { stem: '编辑的核心职责是：', options: ['把关内容质量与导向', '写稿', '采访', '排版唯一'], answer: 0, explain: '把关。' },
          { stem: '编辑与记者的关系是：', options: ['协作与把关', '上下级', '竞争', '无关'], answer: 0, explain: '协作。' }
        ],
        doc: { lead: '这一章讲流程。', sections: [
          { id: 'steps', title: '环节', html: `<p>策划、组稿、选稿、改稿、制作、审校、发布。</p>` },
          { id: 'role', title: '角色', html: `<p>把关人、议程设置者、质量守门人。</p>` }
        ], refs: [] } },
      { title: '选题策划', brief: '报什么。',
        q: [
          { stem: '选题策划的依据包括：', options: ['新闻价值、受众需求、媒介定位', '只有热度', '只有广告', '只有上级'], answer: 0, explain: '综合。' },
          { stem: '系列报道的优势是：', options: ['形成规模与深度', '省事', '快', '便宜'], answer: 0, explain: '深度。' },
          { stem: '选题会上最应避免：', options: ['同质化与跟风', '差异化', '深度', '独家'], answer: 0, explain: '同质。' }
        ],
        doc: { lead: '这一章讲策划。', sections: [
          { id: 'criteria', title: '标准', html: `<p>价值、独家、可操作、差异化；受众与定位。</p>` },
          { id: 'forms', title: '形式', html: `<p>单篇、系列、专题、融媒策划。</p>` }
        ], refs: [] } },
      { title: '稿件处理', brief: '改稿的功夫。',
        q: [
          { stem: '改稿的首要原则是：', options: ['尊重事实与原意', '改得漂亮', '大幅删减', '换标题'], answer: 0, explain: '事实。' },
          { stem: '常见的稿件问题不包括：', options: ['导语冗长', '事实不清', '逻辑跳跃', '采访充分'], answer: 3, explain: '充分是优点。' },
          { stem: '与记者沟通修改意见应：', options: ['具体、说明理由', '直接改', '不沟通', '退回'], answer: 0, explain: '沟通。' }
        ],
        doc: { lead: '这一章讲改稿。', sections: [
          { id: 'problems', title: '常见问题', html: `<p>导语冗长、事实不清、逻辑跳跃、语言空泛。</p>` },
          { id: 'method', title: '方法', html: `<p>问三个问题：最重要是什么、证据够吗、读者看得懂吗。</p>` }
        ], refs: [] } },
      { title: '标题制作', brief: '一眼抓住。',
        q: [
          { stem: '好标题的要求是：', options: ['准确、具体、有信息量', '夸张', '悬念唯一', '押韵'], answer: 0, explain: '准确。' },
          { stem: '"标题党"的问题是：', options: ['题文不符、误导受众', '太长', '太短', '不押韵'], answer: 0, explain: '误导。' },
          { stem: '新媒体标题与纸媒标题的差异是：', options: ['更口语、更短、强调信息点', '更书面', '更长', '更含蓄'], answer: 0, explain: '适配。' }
        ],
        doc: { lead: '这一章讲标题。', sections: [
          { id: 'rules', title: '原则', html: `<p>准确、具体、简洁、有新闻点；题文一致。</p>` },
          { id: 'newmedia', title: '新媒体', html: `<p>口语化、信息前置、避免标题党；A/B 测试。</p>` }
        ], refs: [] } },
      { title: '版面设计', brief: '让信息有层次。',
        q: [
          { stem: '版面设计的核心是：', options: ['突出重要信息、引导阅读', '好看', '留白', '颜色多'], answer: 0, explain: '层次。' },
          { stem: '版面语言包括：', options: ['位置、大小、色彩、留白、线条', '只有字体', '只有图片', '只有颜色'], answer: 0, explain: '多元素。' },
          { stem: '头版设计的重点是：', options: ['头条与视觉中心', '填满', '广告', '均衡'], answer: 0, explain: '头条。' }
        ],
        doc: { lead: '这一章讲版面。', sections: [
          { id: 'elements', title: '元素', html: `<p>位置、字号、色彩、图片、留白；视觉动线。</p>` },
          { id: 'hierarchy', title: '层次', html: `<p>头条—次头条—简讯；模块化与网格。</p>` }
        ], refs: [] } },
      { title: '图片与图表', brief: '视觉证据。',
        q: [
          { stem: '新闻图片的选择标准是：', options: ['信息量、真实性、现场感', '美观唯一', '高清', '构图'], answer: 0, explain: '信息。' },
          { stem: '图片说明应：', options: ['交代时间地点人物与来源', '抒情', '评论', '重复标题'], answer: 0, explain: '五要素。' },
          { stem: '图表使用的原则是：', options: ['与文字互补、准确呈现数据', '替代文字', '装饰', '越多越好'], answer: 0, explain: '互补。' }
        ],
        doc: { lead: '这一章讲视觉。', sections: [
          { id: 'photos', title: '图片', html: `<p>新闻价值、真实性、伦理（不摆拍、不侵权）。</p>` },
          { id: 'charts', title: '图表', html: `<p>选对图型、标注来源、避免误导性坐标轴。</p>` }
        ], refs: [] } },
      { title: '校对与审稿', brief: '最后一关。',
        q: [
          { stem: '校对的重点是：', options: ['事实、文字、标点、格式', '只有错别字', '只有格式', '只有数字'], answer: 0, explain: '全面。' },
          { stem: '三审三校制度的作用是：', options: ['层层把关降低差错', '走流程', '增加成本', '拖延'], answer: 0, explain: '把关。' },
          { stem: '发现错误后的正确处理是：', options: ['及时更正并说明', '隐瞒', '删除', '沉默'], answer: 0, explain: '更正。' }
        ],
        doc: { lead: '这一章讲校对。', sections: [
          { id: 'checklist', title: '清单', html: `<p>人名职务、数字单位、时间地点、引语出处、标点格式。</p>` },
          { id: 'correction', title: '更正', html: `<p>更正与撤稿机制；透明与担责。</p>` }
        ], refs: [] } },
      { title: '融合编辑', brief: '一次采集多元发布。',
        q: [
          { stem: '中央厨房模式的核心是：', options: ['一次采集、多种生成、多元传播', '集中办公', '统一标题', '减少记者'], answer: 0, explain: '融合。' },
          { stem: '融合编辑需要的能力是：', options: ['多平台内容适配与数据意识', '只写稿', '只排版', '只剪辑'], answer: 0, explain: '复合。' },
          { stem: '不同平台的同一新闻应：', options: ['按平台特性重新组织', '一模一样', '只发一个', '复制粘贴'], answer: 0, explain: '适配。' }
        ],
        doc: { lead: '这一章讲融合。', sections: [
          { id: 'newsroom', title: '新闻室', html: `<p>中央厨房、跨部门协作、产品思维。</p>` },
          { id: 'adaptation', title: '适配', html: `<p>文字、短视频、直播、H5、播客；平台逻辑差异。</p>` }
        ], refs: [] } }
    ] },
    { name: '新闻评论', chapters: [
      { title: '评论的类型', brief: '社论、时评、专栏。',
        q: [
          { stem: '社论的特点是：', options: ['代表媒体立场、不署名', '个人观点', '署名', '短小'], answer: 0, explain: '社论。' },
          { stem: '时评的特点是：', options: ['针对时事快速发言', '长篇', '学术', '文学'], answer: 0, explain: '时效。' },
          { stem: '专栏评论的优势是：', options: ['个人风格与持续影响力', '快', '短', '免费'], answer: 0, explain: '风格。' }
        ],
        doc: { lead: '这一章讲类型。', sections: [
          { id: 'types', title: '类型', html: `<p>社论、评论员文章、时评、专栏、网友评论、微评。</p>` },
          { id: 'position', title: '定位', html: `<p>代表谁说话、面向谁、承担什么责任。</p>` }
        ], refs: [] } },
      { title: '论点与论证', brief: '讲道理的技术。',
        q: [
          { stem: '评论论点应当：', options: ['明确、可辩、有针对性', '模糊', '全面', '中庸'], answer: 0, explain: '明确。' },
          { stem: '论证的常见方法是：', options: ['举例、对比、归谬、引用', '只有举例', '只有引用', '抒情'], answer: 0, explain: '多种。' },
          { stem: '评论中的逻辑谬误包括：', options: ['以偏概全、滑坡、人身攻击', '举例', '对比', '引用'], answer: 0, explain: '谬误。' }
        ],
        doc: { lead: '这一章讲论证。', sections: [
          { id: 'thesis', title: '论点', html: `<p>一句话说清立场；有争议空间才有价值。</p>` },
          { id: 'reasoning', title: '论证', html: `<p>事实论据、道理论据；先破后立、层层推进。</p>` }
        ], refs: [] } },
      { title: '选题', brief: '评什么。',
        q: [
          { stem: '评论选题的价值判断标准是：', options: ['公共性、时效性、可讨论性', '热度唯一', '争议唯一', '新奇'], answer: 0, explain: '三维。' },
          { stem: '评论选题的来源包括：', options: ['新闻事件、政策、社会现象', '只有新闻', '只有政策', '只有网络'], answer: 0, explain: '多源。' },
          { stem: '选题过大时应：', options: ['切口小、聚焦具体问题', '硬写', '放弃', '转学术'], answer: 0, explain: '切口。' }
        ],
        doc: { lead: '这一章讲选题。', sections: [
          { id: 'criteria', title: '标准', html: `<p>公共性、时效、争议空间、可论证性。</p>` },
          { id: 'angle', title: '角度', html: `<p>小切口、具体案例；避免大而无当。</p>` }
        ], refs: [] } },
      { title: '结构与语言', brief: '怎么写得让人读下去。',
        q: [
          { stem: '评论的常见结构是：', options: ['由头—论点—论证—结论', '总—分—总唯一', '时间顺序', '问答'], answer: 0, explain: '四段。' },
          { stem: '评论语言应当：', options: ['准确、有力、有文采而不浮夸', '华丽', '口语', '晦涩'], answer: 0, explain: '有力。' },
          { stem: '评论开头常用的方式：', options: ['新闻由头、设问、对比', '抒情', '自我介绍', '引用经典唯一'], answer: 0, explain: '由头。' }
        ],
        doc: { lead: '这一章讲写作。', sections: [
          { id: 'structure', title: '结构', html: `<p>由头（新闻）—立论—论证（二至三层）—收束（呼吁或警示）。</p>` },
          { id: 'language', title: '语言', html: `<p>短句、动词、比喻；避免口号与套话。</p>` }
        ], refs: [] } },
      { title: '社论与专栏', brief: '两种写作人格。',
        q: [
          { stem: '社论写作的要求是：', options: ['代表媒体立场、审慎权威', '个人化', '幽默', '随意'], answer: 0, explain: '权威。' },
          { stem: '专栏写作的优势是：', options: ['个人视角与风格', '快速', '官方', '免费'], answer: 0, explain: '风格。' },
          { stem: '两者共同的要求是：', options: ['事实准确、论证有力', '文采唯一', '时效唯一', '篇幅长'], answer: 0, explain: '共同。' }
        ],
        doc: { lead: '这一章讲两类。', sections: [
          { id: 'editorial', title: '社论', html: `<p>集体讨论、代表立场；审慎与建设性。</p>` },
          { id: 'column', title: '专栏', html: `<p>个人风格、持续关注；建立读者信任。</p>` }
        ], refs: [] } },
      { title: '时评写作', brief: '快而不浅。',
        q: [
          { stem: '时评写作的最大挑战是：', options: ['时效压力下保持判断力', '字数', '版面', '稿费'], answer: 0, explain: '判断。' },
          { stem: '面对事实未明的事件，时评应：', options: ['谨慎、留有余地、等待核实', '抢先定性', '跟风', '煽动'], answer: 0, explain: '谨慎。' },
          { stem: '时评避免"反转"打脸的方法是：', options: ['基于已核实事实、保留条件', '写得模糊', '不写', '只转发'], answer: 0, explain: '审慎。' }
        ],
        doc: { lead: '这一章讲时评。', sections: [
          { id: 'speed', title: '快', html: `<p>短平快；抓核心矛盾；避免信息不全时下结论。</p>` },
          { id: 'judgment', title: '判断', html: `<p>价值判断、事实边界、可反驳性。</p>` }
        ], refs: [] } },
      { title: '评论伦理', brief: '批评的边界。',
        q: [
          { stem: '评论批评个人时应：', options: ['对事不对人、有事实依据', '人身攻击', '猜测动机', '曝光隐私'], answer: 0, explain: '对事。' },
          { stem: '"诽谤"与"正当评论"的区别是：', options: ['是否有事实依据与公共利益', '是否激烈', '是否署名', '是否发表'], answer: 0, explain: '依据。' },
          { stem: '评论转载他人观点应：', options: ['注明出处、不歪曲', '不标注', '改写', '截取'], answer: 0, explain: '规范。' }
        ],
        doc: { lead: '这一章讲伦理。', sections: [
          { id: 'boundaries', title: '边界', html: `<p>事实基础、公共利益、不侮辱人格、保护隐私。</p>` },
          { id: 'responsibility', title: '责任', html: `<p>更正与回应；容忍反批评。</p>` }
        ], refs: [] } },
      { title: '评论训练', brief: '怎么练出来。',
        q: [
          { stem: '提升评论写作的有效方法是：', options: ['大量阅读 + 每日短评练习', '只读理论', '只背范文', '只写长文'], answer: 0, explain: '练习。' },
          { stem: '拆解好评论的分析维度是：', options: ['选题、论点、论证、语言', '只有语言', '只有论点', '只有选题'], answer: 0, explain: '四维。' },
          { stem: '评论写作的长期积累包括：', options: ['知识结构、事实储备、价值判断', '词汇量唯一', '写作速度', '人脉'], answer: 0, explain: '积累。' }
        ],
        doc: { lead: '这一章讲训练。', sections: [
          { id: 'practice', title: '练习', html: `<p>每日 300 字短评；每周一篇长评；对照佳作复盘。</p>` },
          { id: 'accumulate', title: '积累', html: `<p>领域知识、政策文本、数据来源；建立素材库。</p>` }
        ], refs: [] } }
    ] },
    { name: '传播学研究方法', chapters: [
      { title: '研究设计', brief: '问题决定方法。',
        q: [
          { stem: '传播学研究的基本步骤是：', options: ['问题—文献—设计—收集—分析—写作', '选题—写作', '调查—统计', '观察—结论'], answer: 0, explain: '六步。' },
          { stem: '量化与质性研究的分野是：', options: ['数据形式与逻辑', '是否用软件', '是否有假设', '是否发表'], answer: 0, explain: '范式。' },
          { stem: '研究伦理的核心是：', options: ['知情同意、匿名、不伤害', '快速发表', '公开数据', '署名'], answer: 0, explain: '伦理。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'steps', title: '步骤', html: `<p>问题—文献—假设/研究问题—方法—抽样—实施—分析。</p>` },
          { id: 'ethics', title: '伦理', html: `<p>知情同意、隐私、数据安全；涉及未成年人的额外保护。</p>` }
        ], refs: [] } },
      { title: '内容分析', brief: '把文本变成数据。',
        q: [
          { stem: '内容分析的核心是：', options: ['系统、客观、定量地描述内容', '主观解读', '只读文本', '访谈'], answer: 0, explain: '系统。' },
          { stem: '编码信度的检验方法是：', options: ['多人编码 + 一致性系数', '单人编码', '随机编码', '不检验'], answer: 0, explain: '信度。' },
          { stem: '内容分析的抽样单位包括：', options: ['日期、版面、篇目、段落', '只有篇目', '只有日期', '只有人物'], answer: 0, explain: '单位。' }
        ],
        doc: { lead: '这一章讲内容分析。', sections: [
          { id: 'process', title: '流程', html: `<p>确定总体—抽样—类目构建—编码—信度检验—统计。</p>` },
          { id: 'reliability', title: '信度', html: `<p>编码员培训、预编码、Krippendorff's α / Cohen's κ。</p>` }
        ], refs: [] } },
      { title: '问卷调查', brief: '问出可信的答案。',
        q: [
          { stem: '问卷设计的核心要求是：', options: ['题目清晰、选项互斥穷尽', '题目多', '选项多', '开放题多'], answer: 0, explain: '质量。' },
          { stem: '抽样方法中可推断总体的 是：', options: ['概率抽样', '方便抽样', '滚雪球', '配额'], answer: 0, explain: '概率。' },
          { stem: '回收率低会导致：', options: ['代表性偏差', '样本量大', '信度提高', '无影响'], answer: 0, explain: '偏差。' }
        ],
        doc: { lead: '这一章讲问卷。', sections: [
          { id: 'design', title: '设计', html: `<p>一题一事、中立措辞、避免双重问题；预调查。</p>` },
          { id: 'sampling', title: '抽样', html: `<p>简单随机、分层、整群、多阶段；样本量与误差。</p>` }
        ], refs: [] } },
      { title: '实验法', brief: '因果识别。',
        q: [
          { stem: '实验的核心优势是：', options: ['控制变量、支持因果推断', '样本大', '成本低', '速度快'], answer: 0, explain: '因果。' },
          { stem: '随机分组的作用是：', options: ['平衡混淆变量', '增加样本', '提高显著性', '节省成本'], answer: 0, explain: '随机化。' },
          { stem: '实验的外部效度问题指：', options: ['结论能否推广到真实情境', '内部有效吗', '样本大小', '统计方法'], answer: 0, explain: '推广。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'design', title: '设计', html: `<p>前测后测、对照组、随机分配；内部与外部效度。</p>` },
          { id: 'media', title: '媒介实验', html: `<p>框架实验、议程设置实验；刺激材料与操纵检验。</p>` }
        ], refs: [] } },
      { title: '深度访谈', brief: '理解意义。',
        q: [
          { stem: '深度访谈的目的是：', options: ['理解受访者的经验与意义', '统计比例', '验证假设', '预测'], answer: 0, explain: '理解。' },
          { stem: '访谈抽样通常采用：', options: ['目的性抽样', '简单随机', '分层随机', '整群'], answer: 0, explain: '目的。' },
          { stem: '访谈资料分析常用：', options: ['编码与主题分析', '回归', '方差分析', '假设检验'], answer: 0, explain: '编码。' }
        ],
        doc: { lead: '这一章讲访谈。', sections: [
          { id: 'method', title: '方法', html: `<p>半结构访谈、追问、记录；目的性抽样与饱和。</p>` },
          { id: 'analysis', title: '分析', html: `<p>开放编码—主题—解释；成员检验与三角验证。</p>` }
        ], refs: [] } },
      { title: '焦点小组', brief: '群体互动。',
        q: [
          { stem: '焦点小组的人数通常为：', options: ['6–10 人', '2 人', '30 人', '100 人'], answer: 0, explain: '小规模。' },
          { stem: '焦点小组的优势是：', options: ['互动激发观点', '个体深度', '统计推断', '成本最低'], answer: 0, explain: '互动。' },
          { stem: '焦点小组的风险是：', options: ['从众与强势者主导', '数据少', '成本高', '无法记录'], answer: 0, explain: '群体动力。' }
        ],
        doc: { lead: '这一章讲小组。', sections: [
          { id: 'design', title: '设计', html: `<p>同质性、主持人中立、话题引导、记录与转录。</p>` },
          { id: 'analysis', title: '分析', html: `<p>互动模式、共识与分歧；与个体访谈互补。</p>` }
        ], refs: [] } },
      { title: '数据处理', brief: '从原始到结论。',
        q: [
          { stem: '数据清洗的第一步是：', options: ['检查缺失与逻辑错误', '跑回归', '画图', '写结论'], answer: 0, explain: '检查。' },
          { stem: '描述统计与推断统计的区别是：', options: ['概括样本 vs 推断总体', '难易', '软件', '数据类型'], answer: 0, explain: '功能。' },
          { stem: '质性资料管理应：', options: ['统一编号、加密存储', '随意存放', '只留结论', '公开'], answer: 0, explain: '规范。' }
        ],
        doc: { lead: '这一章讲处理。', sections: [
          { id: 'quant', title: '量化', html: `<p>缺失值、异常值、加权；描述与推断。</p>` },
          { id: 'qual', title: '质性', html: `<p>转录、编号、编码表；NVivo/MAXQDA。</p>` }
        ], refs: [] } },
      { title: '论文写作', brief: '把研究说清楚。',
        q: [
          { stem: '传播学论文的结构是：', options: ['引言—文献—方法—结果—讨论', '总—分—总', '背景—结论', '问答'], answer: 0, explain: 'IMRaD。' },
          { stem: '结果与讨论的区别是：', options: ['陈述发现 vs 解释与比较', '没有区别', '前者更长', '后者只写数据'], answer: 0, explain: '两层。' },
          { stem: '研究局限应：', options: ['如实说明', '隐藏', '忽略', '夸大'], answer: 0, explain: '诚实。' }
        ],
        doc: { lead: '这一章讲写作。', sections: [
          { id: 'structure', title: '结构', html: `<p>摘要、引言、文献、方法、结果、讨论、参考。</p>` },
          { id: 'report', title: '报告', html: `<p>样本、测量、分析、效应量；可复现材料。</p>` }
        ], refs: [] } }
    ] },
    { name: '媒介伦理与法规', chapters: [
      { title: '新闻伦理原则', brief: '不伤害与真实。',
        q: [
          { stem: '新闻伦理的基本原则不包括：', options: ['真实', '不伤害', '独立', '追求流量'], answer: 3, explain: '流量非原则。' },
          { stem: '伦理与法律的关系是：', options: ['伦理要求通常高于法律', '完全相同', '法律更高', '互不相关'], answer: 0, explain: '更高。' },
          { stem: '伦理困境的决策方法是：', options: ['权衡原则与后果并说明理由', '凭直觉', '听领导', '看热度'], answer: 0, explain: '权衡。' }
        ],
        doc: { lead: '这一章讲原则。', sections: [
          { id: 'four', title: '四项', html: `<p>真实、不伤害、独立、负责；公众利益优先。</p>` },
          { id: 'dilemma', title: '困境', html: `<p>公开权 vs 隐私、速度 vs 准确、同情 vs 报道。</p>` }
        ], refs: [] } },
      { title: '隐私与名誉', brief: '报道的边界。',
        q: [
          { stem: '侵犯隐私的典型情形是：', options: ['未经同意公开私密信息', '公开公共场合行为', '采访当事人', '报道判决'], answer: 0, explain: '私密。' },
          { stem: '名誉侵权的抗辩事由包括：', options: ['真实、公正评论、公共利益', '只要匿名', '只要道歉', '只要删除'], answer: 0, explain: '抗辩。' },
          { stem: '报道未成年人犯罪应：', options: ['隐匿身份信息', '实名', '曝光照片', '采访同学'], answer: 0, explain: '保护。' }
        ],
        doc: { lead: '这一章讲人格权。', sections: [
          { id: 'privacy', title: '隐私', html: `<p>私密空间、私密活动、私密信息；公共利益例外。</p>` },
          { id: 'reputation', title: '名誉', html: `<p>真实、公正评论、特许权；更正与道歉。</p>` }
        ], refs: [] } },
      { title: '著作权', brief: '引用与转载。',
        q: [
          { stem: '新闻报道引用他人作品属于：', options: ['合理使用（限定）', '侵权', '必须授权', '必须付费'], answer: 0, explain: '合理使用。' },
          { stem: '转载他人稿件应：', options: ['取得授权并注明', '随意转载', '改标题即可', '不注明'], answer: 0, explain: '授权。' },
          { stem: '图片使用的风险是：', options: ['版权与肖像权双重风险', '无风险', '只有版权', '只有肖像'], answer: 0, explain: '双重。' }
        ],
        doc: { lead: '这一章讲版权。', sections: [
          { id: 'fair', title: '合理使用', html: `<p>报道、评论、教学；注明来源、不影响正常使用。</p>` },
          { id: 'license', title: '授权', html: `<p>转载、图库、CC 协议；版权与肖像权并查。</p>` }
        ], refs: [] } },
      { title: '隐性采访的边界', brief: '最后手段。',
        q: [
          { stem: '隐性采访的合法性条件是：', options: ['公共利益 + 必要性 + 无其他手段', '任何情况', '成本低', '便于获取'], answer: 0, explain: '严格。' },
          { stem: '隐性采访可能触犯：', options: ['隐私权、非法侵入、欺诈', '著作权', '商标权', '专利权'], answer: 0, explain: '侵权。' },
          { stem: '使用前应当：', options: ['编辑部审批与法律评估', '记者决定', '不评估', '事后补'], answer: 0, explain: '程序。' }
        ],
        doc: { lead: '这一章讲暗访。', sections: [
          { id: 'test', title: '三要件', html: `<p>重大公共利益、必要性、比例原则；记录决策过程。</p>` },
          { id: 'risk', title: '风险', html: `<p>侵权诉讼、证据合法性、行业争议。</p>` }
        ], refs: [] } },
      { title: '虚假新闻与算法', brief: '新问题。',
        q: [
          { stem: '虚假新闻的常见类型是：', options: ['编造、篡改、误导性拼接', '只有编造', '只有篡改', '只有拼接'], answer: 0, explain: '多种。' },
          { stem: '深度伪造（deepfake）带来的风险是：', options: ['真假难辨、证据危机', '成本高', '画质差', '无人使用'], answer: 0, explain: '伪造。' },
          { stem: '算法推荐的伦理问题是：', options: ['信息茧房、放大偏见、流量优先', '速度慢', '成本高', '界面'], answer: 0, explain: '算法。' }
        ],
        doc: { lead: '这一章讲新风险。', sections: [
          { id: 'fake', title: '虚假信息', html: `<p>misinformation/disinformation；核查与溯源。</p>` },
          { id: 'algorithm', title: '算法', html: `<p>茧房、偏见放大、透明度与人工干预。</p>` }
        ], refs: [] } },
      { title: '新闻法规', brief: '法律框架。',
        q: [
          { stem: '我国新闻传播活动的基本法律依据包括：', options: ['宪法、民法典、网络安全法等', '只有宪法', '只有民法典', '只有行业规范'], answer: 0, explain: '多法。' },
          { stem: '信息公开的作用是：', options: ['保障知情权、便于监督', '限制媒体', '增加成本', '保密'], answer: 0, explain: '知情。' },
          { stem: '记者采访权的边界是：', options: ['依法采访、不得侵害他人权利', '无限', '只能采访官方', '只能电话'], answer: 0, explain: '依法。' }
        ],
        doc: { lead: '这一章讲法规。', sections: [
          { id: 'framework', title: '框架', html: `<p>宪法（言论出版自由）、民法典（人格权）、网络安全法、数据安全法。</p>` },
          { id: 'rights', title: '权利', html: `<p>采访权、报道权、批评建议权；边界与救济。</p>` }
        ], refs: [] } },
      { title: '伦理决策', brief: '怎么办。',
        q: [
          { stem: '伦理决策的常用框架是：', options: ['后果分析 + 义务原则 + 德性', '只看后果', '只看规则', '凭感觉'], answer: 0, explain: '综合。' },
          { stem: '遇到两难时应当：', options: ['与同事讨论并记录理由', '独自决定', '回避', '听流量'], answer: 0, explain: '讨论。' },
          { stem: '事后补救的方式包括：', options: ['更正、道歉、撤稿', '沉默', '删评论', '转移话题'], answer: 0, explain: '补救。' }
        ],
        doc: { lead: '这一章讲决策。', sections: [
          { id: 'framework', title: '框架', html: `<p>后果主义、义务论、德性伦理；比例原则。</p>` },
          { id: 'process', title: '流程', html: `<p>识别问题—列选项—评估—决定—复盘；团队讨论与记录。</p>` }
        ], refs: [] } }
    ] },
    { name: '新媒体传播', chapters: [
      { title: '平台生态', brief: '谁在分发信息。',
        q: [
          { stem: '平台经济的核心特征是：', options: ['双边市场与网络效应', '垄断唯一', '无中介', '免费'], answer: 0, explain: '平台。' },
          { stem: '平台对新闻业的影响是：', options: ['分发权转移、流量依赖', '无影响', '只带来好处', '只带来坏处'], answer: 0, explain: '双刃。' },
          { stem: '平台治理的难点是：', options: ['责任界定与内容审核尺度', '技术', '资金', '人才'], answer: 0, explain: '治理。' }
        ],
        doc: { lead: '这一章讲平台。', sections: [
          { id: 'model', title: '模式', html: `<p>双边市场、网络效应、数据驱动；平台权力。</p>` },
          { id: 'news', title: '与新闻', html: `<p>分发依赖、流量分成、平台责任与算法透明。</p>` }
        ], refs: [] } },
      { title: '社交媒体', brief: '人人都有麦克风。',
        q: [
          { stem: '社交媒体的传播特点是：', options: ['去中心化、互动性、病毒式扩散', '单向', '集中', '缓慢'], answer: 0, explain: '社交。' },
          { stem: '社交媒体对新闻生产的影响是：', options: ['UGC 成为信源、生产流程改变', '无影响', '只提供娱乐', '减少新闻'], answer: 0, explain: 'UGC。' },
          { stem: '社交媒体的风险包括：', options: ['谣言、回音室、网络暴力', '速度慢', '成本高', '无风险'], answer: 0, explain: '风险。' }
        ],
        doc: { lead: '这一章讲社交。', sections: [
          { id: 'features', title: '特征', html: `<p>去中心化、参与性、连接性；弱关系与强关系。</p>` },
          { id: 'impact', title: '影响', html: `<p>UGC、公民新闻、舆论极化；辟谣机制。</p>` }
        ], refs: [] } },
      { title: '算法推荐', brief: '看不见的编辑。',
        q: [
          { stem: '算法推荐的核心逻辑是：', options: ['基于行为数据预测偏好', '随机', '人工排序', '时间顺序唯一'], answer: 0, explain: '预测。' },
          { stem: '信息茧房指的是：', options: ['只接触同质信息、视野收窄', '信息太多', '网速慢', '没有推荐'], answer: 0, explain: '茧房。' },
          { stem: '算法透明与可解释的作用是：', options: ['保障知情与救济', '提高速度', '降低成本', '增加收入'], answer: 0, explain: '透明。' }
        ],
        doc: { lead: '这一章讲算法。', sections: [
          { id: 'logic', title: '逻辑', html: `<p>协同过滤、内容匹配、多目标优化（时长/互动）。</p>` },
          { id: 'issues', title: '问题', html: `<p>茧房、偏见放大、成瘾设计；监管与算法审计。</p>` }
        ], refs: [] } },
      { title: '短视频', brief: '新的叙事单位。',
        q: [
          { stem: '短视频的叙事特点是：', options: ['前 3 秒抓人、节奏快、视觉优先', '慢热', '文字为主', '长篇'], answer: 0, explain: '节奏。' },
          { stem: '短视频新闻的优势是：', options: ['现场感与传播效率', '深度', '准确', '低成本'], answer: 0, explain: '现场。' },
          { stem: '短视频新闻的风险是：', options: ['碎片化、情绪化、核查难', '太长', '太贵', '没人看'], answer: 0, explain: '碎片。' }
        ],
        doc: { lead: '这一章讲短视频。', sections: [
          { id: 'narrative', title: '叙事', html: `<p>钩子—冲突—信息点—结尾；字幕与音乐。</p>` },
          { id: 'news', title: '新闻', html: `<p>现场素材、核实、二次编辑；避免断章取义。</p>` }
        ], refs: [] } },
      { title: '数据新闻与可视化', brief: '用数据说话。',
        q: [
          { stem: '数据新闻的生产流程是：', options: ['找数—清洗—分析—可视化—叙事', '只做图', '只写文', '只爬数据'], answer: 0, explain: '流程。' },
          { stem: '交互式图表的价值是：', options: ['让读者自主探索', '好看', '省事', '替代文字'], answer: 0, explain: '探索。' },
          { stem: '数据可视化最常见的误导是：', options: ['坐标轴截断、比例失真', '颜色少', '图太小', '没有标题'], answer: 0, explain: '误导。' }
        ],
        doc: { lead: '这一章讲数据。', sections: [
          { id: 'workflow', title: '流程', html: `<p>数据源—清洗—分析—设计—开发—发布。</p>` },
          { id: 'design', title: '设计', html: `<p>图型选择、标注、来源；移动端适配。</p>` }
        ], refs: [] } },
      { title: '受众参与', brief: '读者也是生产者。',
        q: [
          { stem: '参与式新闻的形式包括：', options: ['众包、评论、UGC、协作报道', '只有评论', '只有众包', '只有转发'], answer: 0, explain: '多种。' },
          { stem: '受众参与的价值是：', options: ['扩充信源、增强信任', '节省成本', '提高流量唯一', '减少记者'], answer: 0, explain: '信任。' },
          { stem: '受众参与的风险是：', options: ['信息质量参差、被操纵', '成本高', '速度慢', '无人参与'], answer: 0, explain: '质量。' }
        ],
        doc: { lead: '这一章讲参与。', sections: [
          { id: 'forms', title: '形式', html: `<p>众包、开放编辑部、UGC 征集、社区运营。</p>` },
          { id: 'management', title: '管理', html: `<p>审核、激励、版权与隐私；防止刷量与操纵。</p>` }
        ], refs: [] } },
      { title: '媒介融合', brief: '组织的变革。',
        q: [
          { stem: '媒介融合的层次包括：', options: ['技术、经济、组织、文化', '只有技术', '只有组织', '只有文化'], answer: 0, explain: '多层。' },
          { stem: '融合转型的最大障碍是：', options: ['组织文化与考核机制', '技术', '资金', '设备'], answer: 0, explain: '文化。' },
          { stem: '全媒体人才的能力要求是：', options: ['采写编评 + 数据 + 运营', '只会写稿', '只会剪辑', '只会运营'], answer: 0, explain: '复合。' }
        ],
        doc: { lead: '这一章讲融合。', sections: [
          { id: 'levels', title: '层次', html: `<p>技术融合、业务融合、组织融合、文化融合。</p>` },
          { id: 'talent', title: '人才', html: `<p>复合能力、产品思维、数据素养；考核与激励改革。</p>` }
        ], refs: [] } },
      { title: '网络舆论', brief: '情绪的洪流。',
        q: [
          { stem: '网络舆论的特点包括：', options: ['突发、情绪化、易反转、圈层化', '理性唯一', '缓慢', '单一'], answer: 0, explain: '特点。' },
          { stem: '舆情回应的正确做法是：', options: ['及时、真诚、解决问题', '封堵', '沉默', '删帖'], answer: 0, explain: '回应。' },
          { stem: '网络暴力的治理需要：', options: ['平台责任 + 法律 + 素养教育', '只有平台', '只有法律', '只有教育'], answer: 0, explain: '共治。' }
        ],
        doc: { lead: '这一章讲舆论。', sections: [
          { id: 'features', title: '特征', html: `<p>突发性、情绪化、反转、圈层传播；意见领袖作用。</p>` },
          { id: 'response', title: '应对', html: `<p>监测—研判—回应—修复；避免封堵与傲慢。</p>` }
        ], refs: [] } }
    ] },

    /* ---- 大四 ---- */
    { name: '毕业论文', chapters: [
      { title: '选题与文献', brief: '小问题、可研究。',
        q: [
          { stem: '新闻传播论文选题的常见方向包括：', options: ['新闻业务、传播理论、媒介经济、新媒体', '只有业务', '只有理论', '只有新媒体'], answer: 0, explain: '多方向。' },
          { stem: '文献综述应：', options: ['梳理脉络、指出缺口', '罗列摘要', '按时间堆砌', '只引名家'], answer: 0, explain: '缺口。' },
          { stem: '研究问题的要求是：', options: ['明确、可研究、有价值', '宏大', '时髦', '熟悉'], answer: 0, explain: '三要求。' }
        ],
        doc: { lead: '这一章讲开头。', sections: [
          { id: 'topic', title: '选题', html: `<p>从实习、热点、理论争议中找；范围可控。</p>` },
          { id: 'review', title: '综述', html: `<p>按主题组织；说明研究空白与你的贡献。</p>` }
        ], refs: [] } },
      { title: '研究方法', brief: '怎么收集数据。',
        q: [
          { stem: '内容分析适用于：', options: ['大规模文本的特征描述', '因果推断', '深度理解', '预测'], answer: 0, explain: '描述。' },
          { stem: '问卷与访谈的区别是：', options: ['广度 vs 深度', '成本', '时间', '工具'], answer: 0, explain: '广度深度。' },
          { stem: '研究伦理要求：', options: ['知情同意、匿名、不伤害', '公开数据', '随意引用', '署名'], answer: 0, explain: '伦理。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'choose', title: '选择', html: `<p>内容分析、问卷、访谈、实验、个案；与问题匹配。</p>` },
          { id: 'ethics', title: '伦理', html: `<p>知情同意、匿名化、数据安全；涉及平台数据的合规。</p>` }
        ], refs: [] } },
      { title: '写作与规范', brief: '学术表达。',
        q: [
          { stem: '论文语言的要求是：', options: ['客观、准确、简洁', '华丽', '口语', '情绪'], answer: 0, explain: '客观。' },
          { stem: '引用规范的作用是：', options: ['可追溯、避免抄袭', '凑数', '装饰', '增加篇幅'], answer: 0, explain: '规范。' },
          { stem: '结论应：', options: ['回应问题、说明局限', '提出新问题唯一', '重复引言', '写感想'], answer: 0, explain: '收束。' }
        ],
        doc: { lead: '这一章讲写作。', sections: [
          { id: 'structure', title: '结构', html: `<p>摘要、引言、文献、方法、结果、讨论、参考。</p>` },
          { id: 'cite', title: '引用', html: `<p>APA 等格式；直接引用与转述；数据来源标注。</p>` }
        ], refs: [] } },
      { title: '答辩', brief: '讲清楚。',
        q: [
          { stem: '答辩陈述的要点是：', options: ['问题、方法、发现、局限', '致谢', '篇幅', '格式'], answer: 0, explain: '四点。' },
          { stem: '被质疑时应：', options: ['承认局限并说明理由', '争辩', '回避', '改口'], answer: 0, explain: '诚恳。' },
          { stem: '答辩前最该准备的是：', options: ['熟悉数据与结论依据', '背稿', 'PPT 模板', '服装'], answer: 0, explain: '依据。' }
        ],
        doc: { lead: '这一章讲答辩。', sections: [
          { id: 'talk', title: '陈述', html: `<p>8–10 分钟；问题—方法—发现—局限。</p>` },
          { id: 'qa', title: '问答', html: `<p>准备可能问题；不会就说不确定并说明如何验证。</p>` }
        ], refs: [] } }
    ] },
    { name: '专业实习', chapters: [
      { title: '媒体岗位认知', brief: '记者、编辑、运营。',
        q: [
          { stem: '记者岗位的核心能力是：', options: ['采访突破与写作', '剪辑', '排版', '运营'], answer: 0, explain: '采写。' },
          { stem: '新媒体运营的核心指标是：', options: ['用户增长与互动', '字数', '版面', '发行量'], answer: 0, explain: '增长。' },
          { stem: '实习选择岗位最该看：', options: ['能否参与真实选题', '名气', '工资', '通勤'], answer: 0, explain: '实战。' }
        ],
        doc: { lead: '这一章讲岗位。', sections: [
          { id: 'roles', title: '岗位', html: `<p>记者、编辑、评论员、新媒体运营、产品、数据新闻。</p>` },
          { id: 'choose', title: '选择', html: `<p>能上手真实任务、有老师带、能产出作品。</p>` }
        ], refs: [] } },
      { title: '选题与执行', brief: '从线索到稿件。',
        q: [
          { stem: '新闻线索的来源包括：', options: ['热线、网络、文件、人际', '只有网络', '只有热线', '只有文件'], answer: 0, explain: '多源。' },
          { stem: '采访执行的关键是：', options: ['约访、核实、记录', '写作', '排版', '剪辑'], answer: 0, explain: '执行。' },
          { stem: '截稿压力下应：', options: ['保证事实准确优先', '先发再说', '编造细节', '省略核实'], answer: 0, explain: '准确。' }
        ],
        doc: { lead: '这一章讲执行。', sections: [
          { id: 'clue', title: '线索', html: `<p>热线、爆料、公告、数据、日常观察；判断新闻价值。</p>` },
          { id: 'execute', title: '执行', html: `<p>约访—采访—核实—写作—送审；时间管理。</p>` }
        ], refs: [] } },
      { title: '作品与复盘', brief: '留下什么。',
        q: [
          { stem: '实习应留下的作品包括：', options: ['发表稿件、选题策划、数据作品', '工牌', '照片', '评语'], answer: 0, explain: '作品。' },
          { stem: '作品复盘的要点是：', options: ['选题、执行、效果、改进', '只有字数', '只有标题', '只有点击'], answer: 0, explain: '四维。' },
          { stem: '实习日志的推荐写法是：', options: ['问题—做法—结果—反思', '流水账', '只写结论', '只写感受'], answer: 0, explain: '结构化。' }
        ],
        doc: { lead: '这一章讲产出。', sections: [
          { id: 'portfolio', title: '作品集', html: `<p>3–5 篇代表作 + 选题说明 + 数据；标注自己的贡献。</p>` },
          { id: 'review', title: '复盘', html: `<p>每周五行；对照发表效果与编辑意见改进。</p>` }
        ], refs: [] } },
      { title: '职业素养', brief: '做一个靠谱的记者。',
        q: [
          { stem: '新闻从业者的基本素养是：', options: ['政治素养、业务能力、职业道德', '只有业务', '只有道德', '只有人脉'], answer: 0, explain: '三维。' },
          { stem: '面对诱惑时应：', options: ['拒收并报告', '接受', '隐瞒', '折中'], answer: 0, explain: '廉洁。' },
          { stem: '实习期间最重要的是：', options: ['多问多做、及时沟通', '少说话', '只做分内', '等安排'], answer: 0, explain: '主动。' }
        ],
        doc: { lead: '这一章讲素养。', sections: [
          { id: 'qualities', title: '素养', html: `<p>政治敏锐、业务扎实、伦理自觉、抗压能力。</p>` },
          { id: 'habits', title: '习惯', html: `<p>核实、守时、留痕、复盘；保护信源。</p>` }
        ], refs: [] } }
    ] },
    { name: '考研与求职', chapters: [
      { title: '考研方向', brief: '新闻学、传播学、专硕。',
        q: [
          { stem: '新闻传播考研的常见方向是：', options: ['新闻学、传播学、新闻与传播专硕（MJC）', '只有新闻学', '只有传播学', '只有专硕'], answer: 0, explain: '三类。' },
          { stem: '学硕与专硕的区别是：', options: ['学术研究 vs 职业实践', '学制', '是否有导师', '是否考试'], answer: 0, explain: '定位。' },
          { stem: '择校最应考虑：', options: ['科目、报录比与方向匹配', '城市', '学费', '宿舍'], answer: 0, explain: '匹配。' }
        ],
        doc: { lead: '新闻传播考研主要有新闻学、传播学与新闻与传播专硕三个方向，学硕重学术、专硕重实践。择校不能只看城市与名气，要综合科目、真题风格、报录比与导师方向。', sections: [
          { id: 'paths', title: '三个主要方向', html: `<p>新闻学侧重新闻史、新闻理论与业务，培养研究型人才；传播学侧重传播理论、研究方法与新媒体，理论性更强；新闻与传播专硕强调职业实践，课程含大量实务训练与实习。</p><p>此外还有出版、广播电视、广告等方向。选择方向要看本科基础、兴趣与职业规划，不同院校的差异比方向名称更大。</p>` },
          { id: 'degree', title: '学硕与专硕的差异', html: `<p>学硕通常三年，重理论与研究方法，毕业多要求学术论文；专硕通常两到三年，重实践，毕业可做作品或案例分析。学费、奖学金与住宿政策也可能不同。</p><p>考试上，学硕多考新闻传播史论与实务，专硕多考新闻与传播专业基础与综合能力；具体科目以院校招生目录为准。</p>` },
          { id: 'choose', title: '择校的方法', html: `<p>择校要看四点：考试科目是否与自己的强项匹配；真题风格偏理论还是偏热点；报录比与推免比例决定实际竞争强度；导师方向是否与你的兴趣一致。</p><p>信息渠道包括院校研究生院官网、招生目录、真题与学长学姐经验。要警惕只讲成功学的经验帖，重点看失败案例与调剂信息。</p>` },
          { id: 'pitfalls', title: '易错点与考点', html: `<ul><li>只看学校名气，不看科目与真题风格。</li><li>把学硕与专硕的考试科目混为一谈。</li><li>忽视推免比例，高估统考名额。</li><li>只收集成功经验，不看失败与调剂信息。</li><li>常考：三个方向的区别；学硕与专硕差异；择校要素。</li></ul>` }
        ], refs: [] } },
      { title: '专业课复习', brief: '理论与实务。',
        q: [
          { stem: '传播学复习的主线是：', options: ['理论流派—代表人物—核心概念', '只背人名', '只看真题', '只读教材'], answer: 0, explain: '脉络。' },
          { stem: '新闻实务复习的重点是：', options: ['采写编评的操作规范', '只背定义', '只看案例', '只写评论'], answer: 0, explain: '实务。' },
          { stem: '论述题的答题结构是：', options: ['概念—理论—案例—评价', '总—分—总', '只有观点', '只有案例'], answer: 0, explain: '四层。' }
        ],
        doc: { lead: '专业课复习不是背书比赛，而是建立知识地图。理论要按流派、人物、概念串成脉络，实务要掌握采写编评的操作规范，论述题则要用概念、理论、案例、评价四层展开。', sections: [
          { id: 'theory', title: '理论的复习主线', html: `<p>传播学理论按流派梳理：经验学派关注效果与实证研究，批判学派关注权力与意识形态，媒介环境学派关注技术与社会。每个流派记住代表人物、核心概念与经典研究。</p><p>新闻学理论按专题梳理：新闻定义与价值、真实与客观、自由与责任、舆论与宣传。把概念放在争论中理解，比孤立背诵更有效。</p>` },
          { id: 'practice', title: '实务的复习重点', html: `<p>新闻实务考采写编评的操作规范：消息的倒金字塔结构、导语写法、标题制作、评论论证、编辑把关。复习时要动手写，而不是只看范文。</p><p>热点专题要按主题整理：媒体融合、算法推荐、虚假信息、网络舆论、国际传播。每个专题准备定义、成因、影响、案例与对策。</p>` },
          { id: 'essay', title: '论述题的答题结构', html: `<p>论述题通常按四层展开：界定核心概念，引用相关理论，结合具体案例，给出评价或对策。四层缺一不可，只有观点没有理论或案例，得分很难提高。</p><p>答题要有框架意识：先列提纲再动笔，控制每部分篇幅；用学术语言而非口语；结尾回扣题目。时间分配上，论述题应留足三十分钟以上。</p>` },
          { id: 'pitfalls', title: '易错点与考点', html: `<ul><li>只背人名与定义，不理解理论脉络。</li><li>实务只看不写，考场无从下手。</li><li>热点只记结论，没有案例与对策。</li><li>论述题没有结构，想到哪写到哪。</li><li>常考：三大流派；实务规范；论述题四层结构。</li></ul>` }
        ], refs: [] } },
      { title: '求职方向', brief: '媒体、企业、公关。',
        q: [
          { stem: '新闻专业毕业生的去向包括：', options: ['媒体、企业公关、互联网运营、公务员', '只有媒体', '只有公关', '只有公务员'], answer: 0, explain: '多元。' },
          { stem: '企业公关岗位看重：', options: ['写作与沟通、危机应对', '编程', '财务', '设计'], answer: 0, explain: '沟通。' },
          { stem: '求职最加分的材料是：', options: ['发表作品与数据', '证书数量', '成绩单', '社团'], answer: 0, explain: '作品。' }
        ],
        doc: { lead: '新闻传播毕业生的去向远不止媒体：企业公关与品牌、互联网内容运营、公务员与事业单位、自媒体与自由职业，都在吸纳传播能力。不同岗位看重的能力结构不同，求职要有针对性。', sections: [
          { id: 'paths', title: '主要就业路径', html: `<p>媒体仍是重要去向，包括报社、广电、新闻网站与新媒体机构；企业公关与品牌岗位负责对外传播、危机应对与内容营销；互联网公司需要内容运营、用户增长、社区与审核人才。</p><p>公务员与事业单位的宣传、文旅、网信岗位也招传播专业；此外还有广告公司、MCN、知识付费与自由撰稿。</p>` },
          { id: 'skills', title: '不同岗位的能力要求', html: `<p>媒体看重采访写作与新闻判断；企业公关看重写作、沟通、危机应对与商业理解；互联网运营看重数据分析、用户洞察与活动策划；公务员看重政策理解与文字功底。</p><p>共通能力是写作、沟通、策划与学习能力。差异能力要靠实习与项目积累。</p>` },
          { id: 'materials', title: '求职材料与准备', html: `<p>最加分的材料是发表作品与可验证的数据，而不是证书数量。简历要针对岗位定制，用具体项目说明你做了什么、结果如何；作品集精选三到五篇，附贡献说明。</p><p>求职时间线要提前：暑期实习通常在前一年春天启动，秋招在毕业前一年九月，春招在次年三到五月。</p>` },
          { id: 'pitfalls', title: '易错点与考点', html: `<ul><li>不看岗位要求，一份简历海投。</li><li>只堆证书，没有作品与数据。</li><li>求职启动太晚，错过秋招。</li><li>把自媒体经历写成空泛的运营过账号。</li><li>常考：主要就业路径；岗位能力差异；求职材料准备。</li></ul>` }
        ], refs: [] } },
      { title: '面试与作品', brief: '展示能力。',
        q: [
          { stem: '面试讲作品的最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲感想'], answer: 0, explain: 'STAR。' },
          { stem: '媒体面试常考的实操是：', options: ['限时写稿或改稿', '编程', '财务', '设计'], answer: 0, explain: '实操。' },
          { stem: '作品集应：', options: ['精选并说明贡献', '越多越好', '只放截图', '不放说明'], answer: 0, explain: '精选。' }
        ],
        doc: { lead: '面试是用最短时间证明你能干活。讲作品用背景、任务、行动、结果的结构，媒体面试常有限时写稿或改稿的实操，作品集则要精选并说明自己的贡献。', sections: [
          { id: 'portfolio', title: '作品讲述的结构', html: `<p>讲作品推荐用四段式：背景交代选题由来，任务说明你负责什么，行动讲你如何采访、核实、写作，结果给出发表情况与影响。重点在行动，而不是渲染结果。</p><p>要准备追问：为什么选这个角度、遇到什么阻力、如果重做会怎么改。能清楚说出取舍理由，比背稿更能体现判断力。</p>` },
          { id: 'test', title: '媒体实操考核', html: `<p>媒体面试常有实操：限时写消息、改稿、拟标题、写评论或策划。考前要熟悉目标媒体的风格与版式，练习在四十分钟内完成一篇结构完整的消息。</p><p>实操考察的是基本功：导语是否抓住要点、结构是否清晰、事实是否准确、语言是否干净。不要追求文采，先保证不错。</p>` },
          { id: 'qa', title: '作品集与提问', html: `<p>作品集要精选三到五篇，覆盖不同体裁，附阅读量、转发量等可验证数据，并注明自己的贡献。没有发表作品时，可以用课程作业、实习稿件与自建账号内容替代。</p><p>面试结尾的提问环节也是考核：问团队的工作流程、考核方式、新人培养路径，比问薪资与加班更能体现职业成熟度。</p>` },
          { id: 'pitfalls', title: '易错点与考点', html: `<ul><li>讲作品只讲结果，不讲自己的行动。</li><li>实操追求文采，忽略事实与结构。</li><li>作品集堆数量、不说明贡献。</li><li>提问环节说没有问题。</li><li>常考：作品讲述四段式；实操考核重点；作品集要求。</li></ul>` }
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
