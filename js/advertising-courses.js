/* ==========================================================
   advertising-courses.js · 广告学：12 门课（主干 8 / 出口 4）= 84 关
   ========================================================== */

(function () {
  var MAJOR = 'literature-广告学';
  var TITLES = stageTitlesOf('literature');

  var COURSES = [
    { name: '广告学概论', chapters: [
      { title: '广告的定义与功能', brief: '付费、可识别、劝服。',
        q: [
          { stem: '广告的基本特征是：', options: ['付费、非人际、有明确广告主', '免费', '人际传播', '无目的'], answer: 0, explain: '三特征。' },
          { stem: '广告的功能不包括：', options: ['传递信息', '塑造品牌', '促进销售', '替代产品'], answer: 3, explain: '不替代。' },
          { stem: '广告与公关的区别是：', options: ['是否付费购买媒介版面/时段', '是否需要创意', '是否有受众', '是否有效'], answer: 0, explain: '付费。' }
        ],
        doc: { lead: '这一章讲定义。', sections: [
          { id: 'define', title: '定义', html: `<p>由可识别的广告主付费，通过媒介对观念、商品或服务进行的非人际劝服传播。</p>` },
          { id: 'functions', title: '功能', html: `<p>信息、劝服、塑造品牌、促进销售、文化传播。</p>` }
        ], refs: [] } },
      { title: '广告发展史', brief: '从叫卖到算法。',
        q: [
          { stem: '现代广告业的兴起与什么密切相关？', options: ['大众媒介与工业化', '互联网', '印刷术唯一', '电视唯一'], answer: 0, explain: '媒介+工业。' },
          { stem: '20 世纪广告理论的转折点是：', options: ['从推销转向品牌与创意', '从电视转向报纸', '从创意转向推销', '从品牌转向渠道'], answer: 0, explain: '品牌。' },
          { stem: '数字广告的核心变化是：', options: ['精准投放与效果可测', '版面更大', '文案更长', '媒介更少'], answer: 0, explain: '精准。' }
        ],
        doc: { lead: '这一章讲历史。', sections: [
          { id: 'stages', title: '阶段', html: `<p>叫卖与招牌 → 印刷广告 → 大众媒介广告 → 品牌时代 → 数字与智能广告。</p>` },
          { id: 'china', title: '中国', html: `<p>近代报刊广告、改革开放后的广告业复兴、互联网广告崛起。</p>` }
        ], refs: [] } },
      { title: '广告类型', brief: '按什么分。',
        q: [
          { stem: '按媒介划分的广告类型不包括：', options: ['电视广告', '报纸广告', '网络广告', '情感广告'], answer: 3, explain: '情感是诉求方式。' },
          { stem: '商业广告与公益广告的区别是：', options: ['是否以营利为目的', '是否付费', '是否有创意', '是否有受众'], answer: 0, explain: '目的。' },
          { stem: '按诉求方式可分为：', options: ['理性诉求与感性诉求', '硬广与软广', '线上与线下', '图文与视频'], answer: 0, explain: '诉求。' }
        ],
        doc: { lead: '这一章讲分类。', sections: [
          { id: 'by-media', title: '按媒介', html: `<p>印刷、广播电视、户外、网络、移动、植入。</p>` },
          { id: 'by-appeal', title: '按诉求', html: `<p>理性（功能/数据）与感性（情感/故事）；硬广与软广。</p>` }
        ], refs: [] } },
      { title: '广告产业', brief: '谁在做广告。',
        q: [
          { stem: '广告产业链的主体包括：', options: ['广告主、代理公司、媒介、受众', '只有广告主', '只有代理', '只有媒介'], answer: 0, explain: '四主体。' },
          { stem: '4A 指的是：', options: ['广告代理协会（American Association of Advertising Agencies）', '四种广告类型', '四个媒介', '四种诉求'], answer: 0, explain: '协会。' },
          { stem: '广告代理制的核心是：', options: ['代理公司代表广告主与媒介交易', '广告主直投', '媒介自营', '受众付费'], answer: 0, explain: '代理。' }
        ],
        doc: { lead: '这一章讲产业。', sections: [
          { id: 'chain', title: '链条', html: `<p>广告主—代理/创意/媒介购买—媒介—受众；数据与技术服务商。</p>` },
          { id: 'model', title: '模式', html: `<p>代理费制、服务费制、佣金制、效果付费；程序化购买。</p>` }
        ], refs: [] } },
      { title: '广告伦理与法规', brief: '底线在哪。',
        q: [
          { stem: '虚假广告的判断标准是：', options: ['内容虚假或引人误解', '夸张', '创意', '明星代言'], answer: 0, explain: '虚假/误导。' },
          { stem: '广告法禁止的内容不包括：', options: ['使用"国家级"等绝对化用语', '虚假宣传', '贬低同行', '真实数据'], answer: 3, explain: '真实数据允许。' },
          { stem: '广告代言人的责任是：', options: ['不得为未使用过的商品代言', '无责任', '只收钱', '只道歉'], answer: 0, explain: '使用义务。' }
        ],
        doc: { lead: '这一章讲合规。', sections: [
          { id: 'law', title: '法规', html: `<p>广告法：真实性、可识别性、禁止绝对化用语、特殊商品限制。</p>` },
          { id: 'ethics', title: '伦理', html: `<p>不误导、不歧视、不利用弱势群体、尊重隐私。</p>` }
        ], refs: [] } },
      { title: '广告与消费者', brief: '影响怎么发生。',
        q: [
          { stem: 'AIDA 模型指的是：', options: ['注意—兴趣—欲望—行动', '认知—情感—行为—忠诚', '曝光—点击—转化—复购', '看—记—买—传'], answer: 0, explain: 'AIDA。' },
          { stem: '广告对消费者的影响通常是：', options: ['长期、累积、受多重因素影响', '立即决定购买', '无效', '唯一因素'], answer: 0, explain: '累积。' },
          { stem: '广告回避的主要原因是：', options: ['信息过载与不相关', '价格', '渠道', '时长'], answer: 0, explain: '相关。' }
        ],
        doc: { lead: '这一章讲受众。', sections: [
          { id: 'models', title: '模型', html: `<p>AIDA、AIDMA、AISAS；漏斗与转化。</p>` },
          { id: 'avoidance', title: '回避', html: `<p>广告疲劳、跳过、屏蔽；相关性是解药。</p>` }
        ], refs: [] } },
      { title: '整合营销传播 IMC', brief: '一个声音说话。',
        q: [
          { stem: 'IMC 的核心是：', options: ['统一信息、多渠道协同', '只做广告', '只做促销', '只做公关'], answer: 0, explain: '协同。' },
          { stem: '整合营销的渠道包括：', options: ['广告、公关、促销、直销、数字', '只有广告', '只有促销', '只有数字'], answer: 0, explain: '多渠道。' },
          { stem: 'IMC 成功的关键是：', options: ['一致的品牌信息与统一的顾客视角', '预算大', '渠道多', '创意炫'], answer: 0, explain: '一致。' }
        ],
        doc: { lead: '这一章讲整合。', sections: [
          { id: 'concept', title: '概念', html: `<p>以顾客为中心，整合所有接触点的传播；一个声音。</p>` },
          { id: 'practice', title: '实践', html: `<p>接触点地图、信息一致性、跨部门协作、效果评估。</p>` }
        ], refs: [] } },
      { title: '广告职业与能力', brief: '这行需要什么。',
        q: [
          { stem: '广告从业者的核心能力不包括：', options: ['洞察与创意', '策略思维', '沟通协作', '外科手术'], answer: 3, explain: '无关。' },
          { stem: '客户执行（AE）的核心职责是：', options: ['对接客户、管理项目', '设计', '文案', '媒介购买'], answer: 0, explain: 'AE。' },
          { stem: '进入广告业最有用的材料是：', options: ['作品集', '证书', '成绩单', '社团'], answer: 0, explain: '作品。' }
        ],
        doc: { lead: '这一章讲职业。', sections: [
          { id: 'roles', title: '岗位', html: `<p>文案、美术、策略、客户、媒介、社交运营、数据。</p>` },
          { id: 'skills', title: '能力', html: `<p>洞察、创意、表达、协作、数据敏感；作品集。</p>` }
        ], refs: [] } }
    ] },
    { name: '传播学概论', chapters: [
      { title: '传播模式', brief: '谁说了什么。',
        q: [
          { stem: '5W 模式不包括：', options: ['谁', '说什么', '渠道', '成本'], answer: 3, explain: '5W。' },
          { stem: '编码解码理论强调：', options: ['受众可做出不同解读', '信息原样传递', '渠道决定', '噪音唯一'], answer: 0, explain: '霍尔。' },
          { stem: '传播的仪式观强调：', options: ['共享意义与共同体建构', '信息传输', '效果测量', '技术'], answer: 0, explain: '仪式。' }
        ],
        doc: { lead: '这一章讲模式。', sections: [
          { id: 'linear', title: '传递观', html: `<p>5W、香农-韦弗；效果导向。</p>` },
          { id: 'ritual', title: '仪式观', html: `<p>詹姆斯·凯瑞；意义共享与文化。</p>` }
        ], refs: [] } },
      { title: '受众理论', brief: '谁在看。',
        q: [
          { stem: '使用与满足理论强调：', options: ['受众主动选择', '媒体决定', '技术决定', '无需求'], answer: 0, explain: '主动。' },
          { stem: '受众商品论（斯麦兹）指出：', options: ['受众的注意力被卖给广告主', '受众付费', '受众生产内容', '受众无价值'], answer: 0, explain: '注意力。' },
          { stem: '分众化趋势的原因是：', options: ['媒介增多与需求分化', '人口减少', '技术退步', '政策'], answer: 0, explain: '分化。' }
        ],
        doc: { lead: '这一章讲受众。', sections: [
          { id: 'active', title: '主动受众', html: `<p>使用与满足、解码；受众能动性。</p>` },
          { id: 'commodity', title: '受众商品', html: `<p>注意力经济；平台时代的用户数据。</p>` }
        ], refs: [] } },
      { title: '传播效果', brief: '有多大影响。',
        q: [
          { stem: '传播效果研究的三阶段是：', options: ['强—弱—适度', '一直强', '一直弱', '无变化'], answer: 0, explain: '三阶段。' },
          { stem: '有限效果论的代表研究是：', options: ['伊里县研究', '魔弹论', '培养理论', '议程设置'], answer: 0, explain: '拉扎斯菲尔德。' },
          { stem: '议程设置属于：', options: ['适度效果论', '魔弹论', '有限效果', '无效果'], answer: 0, explain: '适度。' }
        ],
        doc: { lead: '这一章讲效果。', sections: [
          { id: 'stages', title: '阶段', html: `<p>魔弹论 → 有限效果 → 适度/强大效果。</p>` },
          { id: 'theories', title: '理论', html: `<p>议程设置、框架、涵化、沉默螺旋、第三人效果。</p>` }
        ], refs: [] } },
      { title: '传播与文化', brief: '意义的生产。',
        q: [
          { stem: '霍尔"编码/解码"中的三种解读位置是：', options: ['主导、协商、对抗', '认知、情感、行为', '强、中、弱', '文字、图像、声音'], answer: 0, explain: '三种。' },
          { stem: '亚文化对广告的挪用说明：', options: ['意义可被重新赋义', '广告无效', '文化不变', '受众被动'], answer: 0, explain: '赋义。' },
          { stem: '文化研究关注：', options: ['意义、权力与身份', '只关注效果', '只关注技术', '只关注经济'], answer: 0, explain: '文化。' }
        ],
        doc: { lead: '这一章讲文化。', sections: [
          { id: 'encoding', title: '编码解码', html: `<p>生产—流通—消费；主导/协商/对抗解读。</p>` },
          { id: 'subculture', title: '亚文化', html: `<p>风格、抵抗、收编；品牌与亚文化的张力。</p>` }
        ], refs: [] } },
      { title: '人际与口碑', brief: '朋友比广告可信。',
        q: [
          { stem: '两级传播的关键角色是：', options: ['意见领袖', '广告主', '媒介', '政府'], answer: 0, explain: '意见领袖。' },
          { stem: '口碑传播的特点是：', options: ['可信度高、可控性低', '可信度低', '完全可控', '无影响'], answer: 0, explain: '双刃。' },
          { stem: 'KOL 营销的核心是：', options: ['借助信任关系影响决策', '低价', '曝光量唯一', '刷量'], answer: 0, explain: '信任。' }
        ],
        doc: { lead: '这一章讲口碑。', sections: [
          { id: 'two-step', title: '两级传播', html: `<p>媒体—意见领袖—受众；扩散曲线。</p>` },
          { id: 'kol', title: 'KOL', html: `<p>匹配度、真实感、长期合作；虚假流量的风险。</p>` }
        ], refs: [] } },
      { title: '传播研究方法', brief: '怎么知道有效。',
        q: [
          { stem: '广告效果研究的常用方法是：', options: ['实验、问卷、内容分析、数据监测', '只有问卷', '只有实验', '只有数据'], answer: 0, explain: '多方法。' },
          { stem: 'A/B 测试的核心是：', options: ['控制变量比较版本效果', '随机发送', '看总量', '凭经验'], answer: 0, explain: '对照。' },
          { stem: '研究伦理要求：', options: ['知情同意、数据保护', '公开数据', '随意分析', '无需告知'], answer: 0, explain: '伦理。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'methods', title: '方法', html: `<p>实验、问卷、焦点小组、内容分析、埋点监测。</p>` },
          { id: 'metrics', title: '指标', html: `<p>曝光、点击、转化、品牌回忆、态度改变。</p>` }
        ], refs: [] } },
      { title: '新媒体传播', brief: '平台逻辑。',
        q: [
          { stem: '社交媒体的传播特点是：', options: ['去中心化、互动、病毒式', '单向', '缓慢', '集中'], answer: 0, explain: '社交。' },
          { stem: '算法推荐对广告的影响是：', options: ['精准定向与信息茧房并存', '只带来好处', '无影响', '只带来坏处'], answer: 0, explain: '双刃。' },
          { stem: '私域流量的核心是：', options: ['可反复触达的用户资产', '平台流量', '广告位', 'KOL'], answer: 0, explain: '私域。' }
        ],
        doc: { lead: '这一章讲新媒体。', sections: [
          { id: 'platform', title: '平台', html: `<p>社交、内容、电商平台；算法分发与流量逻辑。</p>` },
          { id: 'private', title: '私域', html: `<p>社群、公众号、企微；复购与生命周期价值。</p>` }
        ], refs: [] } },
      { title: '传播伦理', brief: '影响力的责任。',
        q: [
          { stem: '传播伦理的核心是：', options: ['真实、不伤害、尊重受众', '流量', '速度', '创意'], answer: 0, explain: '真实。' },
          { stem: '虚假流量的危害是：', options: ['误导决策、破坏生态', '无害', '提高效率', '节省成本'], answer: 0, explain: '危害。' },
          { stem: '算法推荐的伦理问题是：', options: ['茧房、偏见放大、成瘾', '速度', '成本', '界面'], answer: 0, explain: '算法。' }
        ],
        doc: { lead: '这一章讲伦理。', sections: [
          { id: 'principles', title: '原则', html: `<p>真实、透明、不伤害、尊重隐私与自主。</p>` },
          { id: 'issues', title: '议题', html: `<p>虚假流量、深度伪造、定向广告与隐私、成瘾设计。</p>` }
        ], refs: [] } }
    ] },
    { name: '广告文案', chapters: [
      { title: '文案的角色', brief: '文字在卖什么。',
        q: [
          { stem: '广告文案的核心任务是：', options: ['用文字传达卖点并促成行动', '写得美', '写得长', '炫技'], answer: 0, explain: '任务。' },
          { stem: '标题与正文的分工是：', options: ['标题抓注意、正文说服', '标题说服', '正文抓注意', '无分工'], answer: 0, explain: '分工。' },
          { stem: '好文案的判断标准是：', options: ['准确、有洞察、能打动目标人群', '辞藻华丽', '押韵', '长度'], answer: 0, explain: '洞察。' }
        ],
        doc: { lead: '这一章讲角色。', sections: [
          { id: 'role', title: '角色', html: `<p>把策略翻译成可感知的语言；与画面协同。</p>` },
          { id: 'standard', title: '标准', html: `<p>准确、简洁、有洞察、有行动召唤。</p>` }
        ], refs: [] } },
      { title: '标题', brief: '第一句话。',
        q: [
          { stem: '标题的主要功能是：', options: ['吸引注意并传递核心利益', '完整说明', '抒情', '交代背景'], answer: 0, explain: '吸引。' },
          { stem: '标题的常见类型不包括：', options: ['利益式', '悬念式', '新闻式', '说明书式'], answer: 3, explain: '说明书非标题。' },
          { stem: '标题应避免：', options: ['过度承诺与标题党', '具体', '数字', '疑问'], answer: 0, explain: '过度。' }
        ],
        doc: { lead: '这一章讲标题。', sections: [
          { id: 'types', title: '类型', html: `<p>利益、悬念、新闻、提问、对比、数字化。</p>` },
          { id: 'rules', title: '要求', html: `<p>短、具体、有冲突或利益；与内容一致。</p>` }
        ], refs: [] } },
      { title: '正文与结构', brief: '把话说圆。',
        q: [
          { stem: 'AIDA 在文案中的对应是：', options: ['标题—兴趣—欲望—行动', '开头—中间—结尾', '问题—方案—证明', '总—分—总'], answer: 0, explain: '对应。' },
          { stem: '文案正文的常见结构是：', options: ['问题—方案—证据—行动', '时间顺序', '并列', '问答'], answer: 0, explain: '四段。' },
          { stem: '行动召唤（CTA）的作用是：', options: ['明确告诉受众下一步做什么', '装饰', '凑字数', '交代背景'], answer: 0, explain: 'CTA。' }
        ],
        doc: { lead: '这一章讲正文。', sections: [
          { id: 'structure', title: '结构', html: `<p>痛点/场景—解决方案—证据（数据/证言）—行动召唤。</p>` },
          { id: 'cta', title: 'CTA', html: `<p>具体动词、降低门槛、紧迫感（适度）。</p>` }
        ], refs: [] } },
      { title: '诉求与洞察', brief: '说到心里。',
        q: [
          { stem: '消费者洞察指的是：', options: ['未被言说的真实需求或矛盾', '统计数据', '市场趋势', '竞品分析'], answer: 0, explain: '洞察。' },
          { stem: '理性诉求适合：', options: ['高卷入、功能型产品', '快消品', '情感型产品', '所有产品'], answer: 0, explain: '高卷入。' },
          { stem: '感性诉求的有效条件是：', options: ['情感与品牌利益相关', '越煽情越好', '与产品无关', '时长够长'], answer: 0, explain: '相关。' }
        ],
        doc: { lead: '这一章讲诉求。', sections: [
          { id: 'insight', title: '洞察', html: `<p>从生活细节与矛盾中发现；"痛而不言"。</p>` },
          { id: 'appeal', title: '诉求', html: `<p>理性（证据/比较）与感性（故事/身份）；匹配品类与卷入度。</p>` }
        ], refs: [] } },
      { title: '语言风格', brief: '调性。',
        q: [
          { stem: '品牌调性在文案中体现为：', options: ['用词、语气、句式的统一', '字体', '颜色', '时长'], answer: 0, explain: '语言。' },
          { stem: '口语化文案的优势是：', options: ['亲近、易记', '正式', '权威', '严谨'], answer: 0, explain: '亲近。' },
          { stem: '文案风格应与什么一致？', options: ['品牌定位与媒介语境', '个人喜好', '流行趋势唯一', '竞品'], answer: 0, explain: '一致。' }
        ],
        doc: { lead: '这一章讲风格。', sections: [
          { id: 'tone', title: '调性', html: `<p>正式/亲和/幽默/高级；与品牌人格一致。</p>` },
          { id: 'medium', title: '媒介', html: `<p>纸媒长文案、户外短句、短视频口播、社交媒体梗文化。</p>` }
        ], refs: [] } },
      { title: '系列与 campaign', brief: '成组地打。',
        q: [
          { stem: '系列广告的特点是：', options: ['统一概念下的多组作品', '随机创作', '只有一个作品', '无关联'], answer: 0, explain: '系列。' },
          { stem: 'Campaign 的核心是：', options: ['围绕一个核心信息多渠道展开', '只做电视', '只做线上', '越多越好'], answer: 0, explain: '核心信息。' },
          { stem: '一致性在系列中的作用是：', options: ['积累品牌记忆', '增加成本', '限制创意', '无作用'], answer: 0, explain: '记忆。' }
        ],
        doc: { lead: '这一章讲系列。', sections: [
          { id: 'concept', title: '概念', html: `<p>Big idea 与执行延展；统一识别元素。</p>` },
          { id: 'campaign', title: '战役', html: `<p>主题、阶段（预热/引爆/延续）、渠道协同、效果评估。</p>` }
        ], refs: [] } },
      { title: '新媒体文案', brief: '平台语言。',
        q: [
          { stem: '社交平台文案的特点是：', options: ['短、口语、带话题与互动', '长', '正式', '无互动'], answer: 0, explain: '互动。' },
          { stem: '种草文案的关键是：', options: ['真实体验与场景化描述', '夸张', '硬广', '数据堆砌'], answer: 0, explain: '真实。' },
          { stem: '短视频脚本的结构是：', options: ['钩子—内容—行动', '开头—中间—结尾', '问题—答案', '总—分—总'], answer: 0, explain: '钩子。' }
        ],
        doc: { lead: '这一章讲新媒体。', sections: [
          { id: 'platforms', title: '平台', html: `<p>微博、微信、小红书、抖音、B 站；语态与格式差异。</p>` },
          { id: 'script', title: '脚本', html: `<p>前 3 秒钩子、信息密度、口播节奏、CTA。</p>` }
        ], refs: [] } },
      { title: '文案训练', brief: '怎么练。',
        q: [
          { stem: '提升文案能力的有效方式是：', options: ['大量拆解 + 每日练习', '只看理论', '只背模板', '等灵感'], answer: 0, explain: '练习。' },
          { stem: '拆解优秀文案的维度是：', options: ['洞察、结构、语言、行动', '只有语言', '只有结构', '只有洞察'], answer: 0, explain: '四维。' },
          { stem: '文案改稿的原则是：', options: ['删到不能再删', '越长越好', '多加形容词', '换标题'], answer: 0, explain: '精简。' }
        ],
        doc: { lead: '这一章讲训练。', sections: [
          { id: 'practice', title: '练习', html: `<p>每日 10 个标题、每周 1 篇长文案；建立素材库。</p>` },
          { id: 'review', title: '复盘', html: `<p>对照数据与反馈；找可复用句式与结构。</p>` }
        ], refs: [] } }
    ] },
    { name: '广告策划', chapters: [
      { title: '策划流程', brief: '从问题到方案。',
        q: [
          { stem: '广告策划的起点是：', options: ['明确营销问题与目标', '想创意', '选媒体', '做预算'], answer: 0, explain: '问题。' },
          { stem: '策划案的核心结构是：', options: ['背景—目标—策略—创意—媒介—预算—评估', '只有创意', '只有预算', '只有媒介'], answer: 0, explain: '全案。' },
          { stem: '好策划的判断标准是：', options: ['解决问题、可执行、可衡量', '好看', '创新唯一', '预算大'], answer: 0, explain: '有效。' }
        ],
        doc: { lead: '这一章讲流程。', sections: [
          { id: 'steps', title: '步骤', html: `<p>背景分析—目标—策略—创意—媒介—执行—预算—评估。</p>` },
          { id: 'brief', title: 'Brief', html: `<p>客户简报：问题、目标、受众、预算、时限、限制。</p>` }
        ], refs: [] } },
      { title: '市场与竞品分析', brief: '先看清战场。',
        q: [
          { stem: 'SWOT 分析包括：', options: ['优势、劣势、机会、威胁', '产品、价格、渠道、促销', '认知、态度、行为', '过去、现在、未来'], answer: 0, explain: 'SWOT。' },
          { stem: '竞品分析的重点是：', options: ['定位、卖点、传播策略', '只比价格', '只比包装', '只比销量'], answer: 0, explain: '定位。' },
          { stem: '市场分析的常用数据来源是：', options: ['行业报告、平台数据、调研', '直觉', '竞品官网唯一', '老板判断'], answer: 0, explain: '数据。' }
        ],
        doc: { lead: '这一章讲分析。', sections: [
          { id: 'swot', title: 'SWOT', html: `<p>内部优势劣势、外部机会威胁；交叉形成策略。</p>` },
          { id: 'competitor', title: '竞品', html: `<p>定位图、卖点矩阵、传播声量与内容策略。</p>` }
        ], refs: [] } },
      { title: '目标与策略', brief: '要什么、怎么要。',
        q: [
          { stem: '广告目标应遵循 SMART 原则，其中 M 指：', options: ['可衡量', '有意义', '最小', '最多'], answer: 0, explain: 'Measurable。' },
          { stem: '策略与创意的关系是：', options: ['策略决定创意方向', '创意决定策略', '互不相关', '相同'], answer: 0, explain: '策略先行。' },
          { stem: '目标受众的细分依据包括：', options: ['人口、行为、心理、需求', '只有年龄', '只有性别', '只有地域'], answer: 0, explain: '多维。' }
        ],
        doc: { lead: '这一章讲目标。', sections: [
          { id: 'smart', title: 'SMART', html: `<p>具体、可衡量、可实现、相关、有时限。</p>` },
          { id: 'strategy', title: '策略', html: `<p>定位、核心信息、支持理由（RTB）、调性。</p>` }
        ], refs: [] } },
      { title: '创意策略', brief: 'Big idea。',
        q: [
          { stem: '大创意（Big Idea）的特征是：', options: ['独特、可延展、与品牌相关', '新奇唯一', '复杂', '长'], answer: 0, explain: '三性。' },
          { stem: '创意简报应包含：', options: ['目标、受众、单一诉求、支持点、调性', '只有目标', '只有受众', '只有调性'], answer: 0, explain: '要素。' },
          { stem: '创意评估的标准不包括：', options: ['相关性', '原创性', '延展性', '成本最低'], answer: 3, explain: '非标准。' }
        ],
        doc: { lead: '这一章讲创意。', sections: [
          { id: 'bigidea', title: '大创意', html: `<p>一句话能说清、可跨媒介延展、源于洞察。</p>` },
          { id: 'brief', title: '创意简报', html: `<p>单一诉求（single-minded proposition）、支持理由、调性、限制。</p>` }
        ], refs: [] } },
      { title: '媒介策略', brief: '在哪说。',
        q: [
          { stem: '媒介组合的目标是：', options: ['覆盖与频次的平衡', '只求便宜', '只求曝光', '只求转化'], answer: 0, explain: '平衡。' },
          { stem: '到达率与频次的关系是：', options: ['预算固定时此消彼长', '完全相同', '无关', '同时最大'], answer: 0, explain: '权衡。' },
          { stem: '程序化购买的核心是：', options: ['算法实时竞价投放', '人工谈判', '固定版面', '线下'], answer: 0, explain: 'RTB。' }
        ],
        doc: { lead: '这一章讲媒介。', sections: [
          { id: 'planning', title: '计划', html: `<p>目标受众媒介习惯、覆盖/频次、排期（延续/脉冲/集中）。</p>` },
          { id: 'digital', title: '数字', html: `<p>程序化、信息流、搜索、社交、KOL 组合；归因。</p>` }
        ], refs: [] } },
      { title: '预算与排期', brief: '钱怎么花。',
        q: [
          { stem: '广告预算的常用确定方法不包括：', options: ['销售百分比法', '目标任务法', '竞争对标法', '随机分配法'], answer: 3, explain: '非方法。' },
          { stem: '排期的三种模式是：', options: ['持续、脉冲、集中', '早中晚', '线上线下', '图文视频'], answer: 0, explain: '三种。' },
          { stem: '预算分配应考虑：', options: ['目标、受众、媒介效率、阶段', '只考虑价格', '只考虑老板偏好', '只考虑竞品'], answer: 0, explain: '综合。' }
        ],
        doc: { lead: '这一章讲预算。', sections: [
          { id: 'methods', title: '方法', html: `<p>销售百分比、目标任务、竞争对标、量力而行。</p>` },
          { id: 'schedule', title: '排期', html: `<p>持续（日常）、脉冲（节点加强）、集中（上市期）。</p>` }
        ], refs: [] } },
      { title: '提案与执行', brief: '把方案卖出去。',
        q: [
          { stem: '提案成功的关键是：', options: ['逻辑清晰的策略 + 有感染力的创意', 'PPT 美观', '页数多', '价格低'], answer: 0, explain: '逻辑+创意。' },
          { stem: '执行阶段最重要的是：', options: ['质量控制与节点管理', '创意再改', '省钱', '加人'], answer: 0, explain: '质控。' },
          { stem: '项目复盘应关注：', options: ['目标达成、过程问题、可复用经验', '谁背锅', '预算', '加班'], answer: 0, explain: '复盘。' }
        ],
        doc: { lead: '这一章讲提案。', sections: [
          { id: 'pitch', title: '提案', html: `<p>背景—问题—洞察—策略—创意—媒介—预算—效果预估。</p>` },
          { id: 'execution', title: '执行', html: `<p>排期、分工、质控、风险预案；复盘归档。</p>` }
        ], refs: [] } },
      { title: '效果评估', brief: '有没有用。',
        q: [
          { stem: '广告效果评估分为：', options: ['传播效果与销售效果', '只有传播', '只有销售', '只有品牌'], answer: 0, explain: '两类。' },
          { stem: '品牌指标包括：', options: ['知名度、美誉度、联想、忠诚', '只有知名度', '只有销量', '只有点击'], answer: 0, explain: '多维。' },
          { stem: '归因分析的难点是：', options: ['多渠道触点难以分离贡献', '没有数据', '成本高', '没人做'], answer: 0, explain: '归因。' }
        ],
        doc: { lead: '这一章讲评估。', sections: [
          { id: 'levels', title: '层次', html: `<p>曝光—认知—态度—行为—销售；短期与长期。</p>` },
          { id: 'attribution', title: '归因', html: `<p>末次点击、线性、数据驱动归因；增量实验（geo test）。</p>` }
        ], refs: [] } }
    ] },
    { name: '广告设计基础', chapters: [
      { title: '视觉传达原理', brief: '看的东西怎么组织。',
        q: [
          { stem: '视觉设计的四大原则不包括：', options: ['对比', '对齐', '重复', '随机'], answer: 3, explain: 'CRAP。' },
          { stem: '视觉层级的作用是：', options: ['引导视线、突出重点', '填满画面', '增加颜色', '装饰'], answer: 0, explain: '层级。' },
          { stem: '负空间（留白）的作用是：', options: ['突出主体、提升质感', '浪费空间', '无作用', '增加信息'], answer: 0, explain: '留白。' }
        ],
        doc: { lead: '这一章讲原理。', sections: [
          { id: 'crap', title: '四原则', html: `<p>对比（Contrast）、重复（Repetition）、对齐（Alignment）、亲密性（Proximity）。</p>` },
          { id: 'hierarchy', title: '层级', html: `<p>大小、颜色、位置、留白；视觉动线。</p>` }
        ], refs: [] } },
      { title: '色彩', brief: '情绪的语言。',
        q: [
          { stem: '色彩三要素是：', options: ['色相、明度、饱和度', '红绿蓝', '冷暖', '深浅'], answer: 0, explain: '三要素。' },
          { stem: '互补色的作用是：', options: ['产生强烈对比与视觉冲击', '和谐唯一', '降低对比', '无作用'], answer: 0, explain: '互补。' },
          { stem: '品牌色的选择应考虑：', options: ['品类联想、竞品差异、可识别性', '个人喜好', '流行唯一', '成本'], answer: 0, explain: '策略。' }
        ],
        doc: { lead: '这一章讲色彩。', sections: [
          { id: 'theory', title: '理论', html: `<p>色相环、互补/类似/三角配色；冷暖与情绪。</p>` },
          { id: 'brand', title: '品牌色', html: `<p>差异化、记忆点、跨媒介一致性；无障碍对比度。</p>` }
        ], refs: [] } },
      { title: '版式与构图', brief: '把元素放对位置。',
        q: [
          { stem: '网格系统的作用是：', options: ['建立秩序与一致性', '限制创意', '装饰', '填满'], answer: 0, explain: '秩序。' },
          { stem: '三分法的构图原则是：', options: ['把主体放在三分线交点', '居中唯一', '随机', '填满'], answer: 0, explain: '三分。' },
          { stem: '海报设计的首要目标是：', options: ['在远处抓住注意并传递核心信息', '细节丰富', '文字多', '颜色多'], answer: 0, explain: '注意力。' }
        ],
        doc: { lead: '这一章讲版式。', sections: [
          { id: 'grid', title: '网格', html: `<p>栏格、基线、边距；对齐与节奏。</p>` },
          { id: 'poster', title: '海报', html: `<p>3 秒法则、视觉中心、信息层级、品牌露出。</p>` }
        ], refs: [] } },
      { title: '字体与文字设计', brief: '字也有性格。',
        q: [
          { stem: '衬线体与无衬线体的区别是：', options: ['笔画末端是否有装饰', '是否可读', '是否中文', '是否加粗'], answer: 0, explain: '衬线。' },
          { stem: '字体选择应考虑：', options: ['调性、可读性、媒介', '个人喜好', '数量多', '花哨'], answer: 0, explain: '调性。' },
          { stem: '文字排版的可读性要求：', options: ['字号、行距、对比度合适', '越小越好', '越密越好', '越多越好'], answer: 0, explain: '可读。' }
        ],
        doc: { lead: '这一章讲字体。', sections: [
          { id: 'type', title: '字体', html: `<p>衬线/无衬线、中英搭配、字重层级。</p>` },
          { id: 'layout', title: '排版', html: `<p>字号阶梯、行距、字距、对齐方式。</p>` }
        ], refs: [] } },
      { title: '图像与摄影', brief: '一图胜千言。',
        q: [
          { stem: '广告摄影的核心是：', options: ['传达产品卖点与品牌调性', '唯美', '技术', '器材'], answer: 0, explain: '卖点。' },
          { stem: '产品图的关键是：', options: ['质感、光影、细节', '背景复杂', '滤镜', '拼接'], answer: 0, explain: '质感。' },
          { stem: '图片版权风险应：', options: ['使用授权素材或原创', '随意下载', '去水印', '改一改'], answer: 0, explain: '版权。' }
        ],
        doc: { lead: '这一章讲图像。', sections: [
          { id: 'photo', title: '摄影', html: `<p>布光、构图、质感；产品与人像。</p>` },
          { id: 'copyright', title: '版权', html: `<p>图库授权、CC 协议、肖像权；AI 生成图的合规。</p>` }
        ], refs: [] } },
      { title: '动态与短视频', brief: '动起来的说服。',
        q: [
          { stem: '视频广告的前 3 秒应：', options: ['抓住注意、说明利益', '交代背景', '介绍公司', '抒情'], answer: 0, explain: '钩子。' },
          { stem: '分镜脚本的作用是：', options: ['可视化镜头与节奏', '记录台词', '报价', '排期'], answer: 0, explain: '分镜。' },
          { stem: '短视频完播率的关键是：', options: ['节奏与信息密度', '画质', '时长', '字幕'], answer: 0, explain: '节奏。' }
        ],
        doc: { lead: '这一章讲动态。', sections: [
          { id: 'storyboard', title: '分镜', html: `<p>镜号、画面、台词、时长、音乐；节奏设计。</p>` },
          { id: 'platform', title: '平台', html: `<p>竖屏、字幕、前贴/中插；完播与互动指标。</p>` }
        ], refs: [] } },
      { title: '设计工具与流程', brief: '工具只是手。',
        q: [
          { stem: '设计流程的正确顺序是：', options: ['brief—概念—草图—完稿—输出', '直接完稿', '草图唯一', '先输出'], answer: 0, explain: '流程。' },
          { stem: '设计交付应：', options: ['按媒介规格输出并标注', '只发截图', '只发源文件', '随意'], answer: 0, explain: '规范。' },
          { stem: '与文案/策略协作的关键是：', options: ['早期介入、共同打磨概念', '各做各的', '最后合并', '听美术'], answer: 0, explain: '协作。' }
        ],
        doc: { lead: '这一章讲流程。', sections: [
          { id: 'workflow', title: '流程', html: `<p>brief—概念—草图—提案—完稿—输出；版本管理。</p>` },
          { id: 'deliver', title: '交付', html: `<p>尺寸、色彩模式、出血、字体转曲；多平台适配。</p>` }
        ], refs: [] } },
      { title: '设计审美与趋势', brief: '眼高手才高。',
        q: [
          { stem: '提升设计审美的有效方式是：', options: ['大量看优秀作品并分析', '只学软件', '只背配色', '等灵感'], answer: 0, explain: '输入。' },
          { stem: '设计趋势应：', options: ['理解后为自己的策略服务', '盲目追随', '完全无视', '照搬'], answer: 0, explain: '服务。' },
          { stem: '好设计的标准是：', options: ['有效传达 + 美感', '好看唯一', '复杂', '炫技'], answer: 0, explain: '有效。' }
        ],
        doc: { lead: '这一章讲审美。', sections: [
          { id: 'input', title: '输入', html: `<p>作品集平台、展览、跨领域；建立灵感库与拆解习惯。</p>` },
          { id: 'trend', title: '趋势', html: `<p>扁平、拟物、复古、粗野主义；趋势服务于品牌策略。</p>` }
        ], refs: [] } }
    ] },
    { name: '消费者行为学', chapters: [
      { title: '消费者决策过程', brief: '从需要到购后。',
        q: [
          { stem: '消费者决策的五阶段是：', options: ['问题识别—信息搜索—方案评估—购买—购后行为', '看—记—买', '认知—情感—行为', '曝光—点击—转化'], answer: 0, explain: '五阶段。' },
          { stem: '高卷入与低卷入决策的区别是：', options: ['投入程度与信息搜索量', '价格', '渠道', '品牌'], answer: 0, explain: '卷入。' },
          { stem: '购后失调（后悔）的应对是：', options: ['提供确认与售后支持', '忽视', '涨价', '换包装'], answer: 0, explain: '购后。' }
        ],
        doc: { lead: '这一章讲决策。', sections: [
          { id: 'stages', title: '五阶段', html: `<p>问题识别、信息搜索、方案评估、购买决策、购后行为。</p>` },
          { id: 'involvement', title: '卷入度', html: `<p>高卷入（理性、多比较）与低卷入（习惯、线索）。</p>` }
        ], refs: [] } },
      { title: '知觉与注意', brief: '看见才算数。',
        q: [
          { stem: '绝对阈限与差别阈限的区别是：', options: ['能否感知到 vs 能否察觉变化', '大小', '时间', '颜色'], answer: 0, explain: '阈限。' },
          { stem: '广告中的"选择性注意"意味着：', options: ['只有相关或突出信息被注意', '全部被注意', '全部被忽略', '随机'], answer: 0, explain: '选择性。' },
          { stem: '韦伯定律说明：', options: ['变化需达到一定比例才能被察觉', '变化越大越好', '知觉无关', '阈限固定'], answer: 0, explain: '比例。' }
        ],
        doc: { lead: '这一章讲知觉。', sections: [
          { id: 'threshold', title: '阈限', html: `<p>绝对/差别阈限；韦伯定律；最小可觉差。</p>` },
          { id: 'attention', title: '注意', html: `<p>选择性、理解性、整体性；视觉显著性与相关性。</p>` }
        ], refs: [] } },
      { title: '学习与记忆', brief: '记住品牌。',
        q: [
          { stem: '经典条件反射在广告中的应用是：', options: ['把品牌与愉快刺激配对', '惩罚', '强化', '模仿'], answer: 0, explain: '配对。' },
          { stem: '品牌回忆与品牌再认的区别是：', options: ['主动想起 vs 提示后认出', '相同', '回忆更难', '再认更难'], answer: 0, explain: '两类。' },
          { stem: '增强记忆的广告策略包括：', options: ['重复、押韵、故事、视觉符号', '只有重复', '只有故事', '只有符号'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲学习。', sections: [
          { id: 'conditioning', title: '条件反射', html: `<p>经典与操作条件反射；品牌联想。</p>` },
          { id: 'memory', title: '记忆', html: `<p>感觉/短时/长时；复述、编码、提取线索。</p>` }
        ], refs: [] } },
      { title: '动机与需要', brief: '为什么买。',
        q: [
          { stem: '马斯洛需要层次中最高层是：', options: ['自我实现', '安全', '归属', '生理'], answer: 0, explain: '自我实现。' },
          { stem: '显性动机与隐性动机的区别是：', options: ['是否被意识到', '强与弱', '长期与短期', '个人与群体'], answer: 0, explain: '意识。' },
          { stem: '广告常用的动机诉求包括：', options: ['归属、成就、安全、自我表达', '只有价格', '只有功能', '只有促销'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲动机。', sections: [
          { id: 'needs', title: '需要', html: `<p>马斯洛、默里；显性与隐性动机。</p>` },
          { id: 'appeal', title: '诉求', html: `<p>归属、成就、安全、自我表达；与产品利益连接。</p>` }
        ], refs: [] } },
      { title: '态度与说服', brief: '改变看法。',
        q: [
          { stem: '态度的三成分是：', options: ['认知、情感、行为意向', '知、情、意', '真、善、美', '过去、现在、未来'], answer: 0, explain: 'ABC。' },
          { stem: '精细加工可能性模型区分：', options: ['中心路径与外周路径', '内隐与外显', '强与弱', '理性与感性'], answer: 0, explain: 'ELM。' },
          { stem: '认知失调理论认为：', options: ['态度与行为不一致会促使改变', '态度不变', '行为决定一切', '无影响'], answer: 0, explain: '失调。' }
        ],
        doc: { lead: '这一章讲态度。', sections: [
          { id: 'abc', title: '三成分', html: `<p>认知、情感、行为意向；测量与不一致。</p>` },
          { id: 'elm', title: '说服', html: `<p>中心路径（论证）与外周路径（线索）；信源可信度。</p>` }
        ], refs: [] } },
      { title: '社会与文化因素', brief: '人是社会人。',
        q: [
          { stem: '参照群体对消费的影响是：', options: ['提供比较与规范', '无影响', '只影响价格', '只影响渠道'], answer: 0, explain: '参照。' },
          { stem: '文化对消费的影响体现在：', options: ['价值观、习俗、符号意义', '只有语言', '只有收入', '只有技术'], answer: 0, explain: '文化。' },
          { stem: '社会阶层影响：', options: ['消费偏好与媒介接触', '无关', '只有价格', '只有品牌'], answer: 0, explain: '阶层。' }
        ],
        doc: { lead: '这一章讲社会。', sections: [
          { id: 'groups', title: '群体', html: `<p>参照群体、意见领袖、家庭决策角色。</p>` },
          { id: 'culture', title: '文化', html: `<p>价值观、仪式、符号；跨文化营销的本地化。</p>` }
        ], refs: [] } },
      { title: '数字消费者', brief: '新的行为模式。',
        q: [
          { stem: 'AISAS 模型中的两个 S 指：', options: ['搜索与分享', '满意与服务', '社交与销售', '看与买'], answer: 0, explain: 'Search/Share。' },
          { stem: '社交电商的核心是：', options: ['信任与内容驱动的购买', '低价', '广告位', '物流'], answer: 0, explain: '信任。' },
          { stem: '消费者旅程中的关键触点应：', options: ['识别并优化', '全部投放', '忽略', '只看最后'], answer: 0, explain: '触点。' }
        ],
        doc: { lead: '这一章讲数字。', sections: [
          { id: 'aisas', title: '模型', html: `<p>注意—兴趣—搜索—行动—分享；社交与内容。</p>` },
          { id: 'journey', title: '旅程', html: `<p>触点地图、转化路径、复购与推荐。</p>` }
        ], refs: [] } },
      { title: '消费者研究方法', brief: '怎么懂人。',
        q: [
          { stem: '消费者洞察的常用方法是：', options: ['深度访谈、观察、数据分析', '只看销量', '只看竞品', '凭经验'], answer: 0, explain: '多方法。' },
          { stem: '用户画像的价值是：', options: ['聚焦目标人群与需求', '装饰', '凑数', '替代策略'], answer: 0, explain: '聚焦。' },
          { stem: '神经营销（如眼动、脑电）的作用是：', options: ['测量无意识反应', '替代问卷', '决定一切', '无作用'], answer: 0, explain: '辅助。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'qual', title: '定性', html: `<p>深访、观察、民族志；洞察与需求挖掘。</p>` },
          { id: 'quant', title: '定量', html: `<p>问卷、A/B 测试、行为数据；画像与分群。</p>` }
        ], refs: [] } }
    ] },
    { name: '品牌管理', chapters: [
      { title: '品牌的内涵', brief: '不只是名字。',
        q: [
          { stem: '品牌资产的核心维度包括：', options: ['知名度、联想、感知质量、忠诚', '只有知名度', '只有忠诚', '只有 Logo'], answer: 0, explain: '四维。' },
          { stem: '品牌与产品的区别是：', options: ['品牌包含意义与情感附加', '品牌更贵', '产品更有名', '无区别'], answer: 0, explain: '意义。' },
          { stem: '品牌定位的核心是：', options: ['在消费者心智中占据独特位置', '价格最低', '功能最多', '广告最多'], answer: 0, explain: '心智。' }
        ],
        doc: { lead: '这一章讲内涵。', sections: [
          { id: 'equity', title: '品牌资产', html: `<p>知晓、联想、感知质量、忠诚、专有资产（Aaker）。</p>` },
          { id: 'positioning', title: '定位', html: `<p>目标人群 + 竞争框架 + 差异点（POP/POD）。</p>` }
        ], refs: [] } },
      { title: '品牌识别与形象', brief: '我是谁、你看到什么。',
        q: [
          { stem: '品牌识别（identity）与品牌形象（image）的区别是：', options: ['发送方意图 vs 接收方感知', '相同', '前者是感知', '后者是意图'], answer: 0, explain: '两端。' },
          { stem: '品牌识别的要素包括：', options: ['名称、标识、口号、调性', '只有 Logo', '只有口号', '只有颜色'], answer: 0, explain: '要素。' },
          { stem: '视觉识别系统（VI）的作用是：', options: ['保证跨媒介一致性', '装饰', '增加成本', '限制创意'], answer: 0, explain: '一致。' }
        ],
        doc: { lead: '这一章讲识别。', sections: [
          { id: 'identity', title: '识别', html: `<p>核心价值、个性、符号系统；品牌屋。</p>` },
          { id: 'vi', title: 'VI', html: `<p>Logo、色彩、字体、图形、应用规范。</p>` }
        ], refs: [] } },
      { title: '品牌架构', brief: '一个还是多个。',
        q: [
          { stem: '品牌架构的常见模式不包括：', options: ['单一品牌', '多品牌', '背书品牌', '随机品牌'], answer: 3, explain: '非模式。' },
          { stem: '品牌延伸的风险是：', options: ['稀释品牌联想、失败反噬', '成本高', '速度慢', '无风险'], answer: 0, explain: '稀释。' },
          { stem: '多品牌策略的优势是：', options: ['覆盖不同细分、分散风险', '省成本', '统一形象', '便于管理'], answer: 0, explain: '细分。' }
        ],
        doc: { lead: '这一章讲架构。', sections: [
          { id: 'models', title: '模式', html: `<p>品牌化 House of Brands、背书 Branded House、混合。</p>` },
          { id: 'extension', title: '延伸', html: `<p>相关性、匹配度、品类风险；子品牌与联合品牌。</p>` }
        ], refs: [] } },
      { title: '品牌传播', brief: '怎么被记住。',
        q: [
          { stem: '品牌传播的核心是：', options: ['一致而持续地传递核心价值', '频繁换口号', '只做促销', '只做广告'], answer: 0, explain: '一致。' },
          { stem: '品牌故事的要素包括：', options: ['冲突、人物、价值主张', '只有产品', '只有价格', '只有历史'], answer: 0, explain: '故事。' },
          { stem: '代言人选择的关键是：', options: ['与品牌调性和目标人群匹配', '名气最大', '价格最低', '粉丝最多'], answer: 0, explain: '匹配。' }
        ],
        doc: { lead: '这一章讲传播。', sections: [
          { id: 'consistency', title: '一致性', html: `<p>核心信息、视觉、调性跨渠道统一；长期主义。</p>` },
          { id: 'story', title: '故事', html: `<p>冲突—行动—价值；创始人、用户、产品故事。</p>` }
        ], refs: [] } },
      { title: '品牌危机', brief: '出事怎么办。',
        q: [
          { stem: '品牌危机响应的首要原则是：', options: ['及时、真诚、承担责任', '拖延', '删帖', '推责'], answer: 0, explain: '真诚。' },
          { stem: '危机公关的黄金时间是：', options: ['越快越好（24 小时内）', '一周后', '一个月', '不必回应'], answer: 0, explain: '及时。' },
          { stem: '危机后的修复重点是：', options: ['行动改进 + 持续沟通', '只道歉', '只发声明', '换 Logo'], answer: 0, explain: '行动。' }
        ],
        doc: { lead: '这一章讲危机。', sections: [
          { id: 'response', title: '响应', html: `<p>事实、态度、行动；统一口径；避免二次伤害。</p>` },
          { id: 'repair', title: '修复', html: `<p>整改措施、第三方监督、长期沟通；信任重建。</p>` }
        ], refs: [] } },
      { title: '品牌资产测量', brief: '值多少钱。',
        q: [
          { stem: '品牌资产测量的方法包括：', options: ['消费者调研、财务方法、市场表现', '只有财务', '只有调研', '只有销量'], answer: 0, explain: '多方法。' },
          { stem: '品牌价值排行榜（如 Interbrand）依据：', options: ['财务表现 + 品牌作用 + 品牌强度', '只看收入', '只看知名度', '只看广告投入'], answer: 0, explain: '综合。' },
          { stem: 'NPS（净推荐值）衡量：', options: ['推荐意愿', '销售额', '知名度', '忠诚度唯一'], answer: 0, explain: 'NPS。' }
        ],
        doc: { lead: '这一章讲测量。', sections: [
          { id: 'methods', title: '方法', html: `<p>调研（知晓/联想/忠诚）、财务（溢价/收益）、市场（份额）。</p>` },
          { id: 'metrics', title: '指标', html: `<p>NPS、品牌溢价、考虑集、首选率。</p>` }
        ], refs: [] } },
      { title: '品牌战略', brief: '长期怎么走。',
        q: [
          { stem: '品牌战略的核心问题是：', options: ['在哪个品类、以什么差异点竞争', '广告预算', '渠道', '包装'], answer: 0, explain: '战略。' },
          { stem: '品类战略的意义是：', options: ['开创新品类可绕开竞争', '减少选择', '降低成本', '无意义'], answer: 0, explain: '品类。' },
          { stem: '品牌升级的常见路径是：', options: ['提升价值感与人群', '降价', '换包装', '增加渠道'], answer: 0, explain: '升级。' }
        ],
        doc: { lead: '这一章讲战略。', sections: [
          { id: 'strategy', title: '战略', html: `<p>品类选择、差异点、目标人群、价格带；品牌组合。</p>` },
          { id: 'upgrade', title: '升级', html: `<p>产品、视觉、叙事、渠道协同；避免脱离基本盘。</p>` }
        ], refs: [] } },
      { title: '品牌与组织', brief: '内外一致。',
        q: [
          { stem: '内部品牌化指的是：', options: ['让员工理解并践行品牌价值', '对内打广告', '内部培训唯一', '员工福利'], answer: 0, explain: '内部。' },
          { stem: '品牌承诺与员工行为不一致会导致：', options: ['品牌信任受损', '无影响', '成本降低', '效率提高'], answer: 0, explain: '不一致。' },
          { stem: '品牌管理的组织保障包括：', options: ['品牌负责人、规范、考核', '只有广告部', '只有老板', '只有外包'], answer: 0, explain: '保障。' }
        ],
        doc: { lead: '这一章讲组织。', sections: [
          { id: 'internal', title: '内部品牌化', html: `<p>价值内化、行为标准、激励机制。</p>` },
          { id: 'governance', title: '治理', html: `<p>品牌手册、审批流程、跨部门协同、效果考核。</p>` }
        ], refs: [] } }
    ] },
    { name: '数字营销', chapters: [
      { title: '数字营销全景', brief: '渠道与逻辑。',
        q: [
          { stem: '数字营销的核心优势是：', options: ['可定向、可测量、可优化', '便宜', '快', '好看'], answer: 0, explain: '三可。' },
          { stem: '常见数字渠道不包括：', options: ['搜索', '社交', '信息流', '报纸'], answer: 3, explain: '传统。' },
          { stem: '营销漏斗的环节是：', options: ['曝光—点击—转化—复购—推荐', '看—记—买', '认知—情感—行为', '搜索—分享'], answer: 0, explain: '漏斗。' }
        ],
        doc: { lead: '这一章讲全景。', sections: [
          { id: 'channels', title: '渠道', html: `<p>搜索、社交、内容、电商、私域、程序化。</p>` },
          { id: 'metrics', title: '指标', html: `<p>曝光、点击率、转化率、CAC、LTV、ROI。</p>` }
        ], refs: [] } },
      { title: '搜索营销', brief: '意图最明确。',
        q: [
          { stem: 'SEM 与 SEO 的区别是：', options: ['付费竞价 vs 自然优化', '相同', '都付费', '都免费'], answer: 0, explain: '付费/自然。' },
          { stem: '关键词选择应关注：', options: ['搜索意图与商业价值', '词越长越好', '词越短越好', '热度唯一'], answer: 0, explain: '意图。' },
          { stem: '落地页优化的重点是：', options: ['与关键词一致、清晰 CTA', '信息越多越好', '动画', '颜色'], answer: 0, explain: '一致性。' }
        ],
        doc: { lead: '这一章讲搜索。', sections: [
          { id: 'sem', title: 'SEM', html: `<p>关键词、出价、质量度、落地页；搜索意图分类。</p>` },
          { id: 'seo', title: 'SEO', html: `<p>内容、结构、外链；长尾词与用户问题。</p>` }
        ], refs: [] } },
      { title: '社交营销', brief: '关系与内容。',
        q: [
          { stem: '社交营销的核心是：', options: ['建立关系与参与', '曝光量', '点击', '价格'], answer: 0, explain: '关系。' },
          { stem: 'KOL 营销的关键是：', options: ['匹配度与真实感', '粉丝量唯一', '价格', '数量'], answer: 0, explain: '匹配。' },
          { stem: 'UGC 的价值是：', options: ['真实口碑与低成本内容', '可控', '高质量', '快速'], answer: 0, explain: '口碑。' }
        ],
        doc: { lead: '这一章讲社交。', sections: [
          { id: 'platforms', title: '平台', html: `<p>微博、微信、小红书、抖音、B 站；内容形态与人群。</p>` },
          { id: 'kol', title: 'KOL', html: `<p>层级（头部/腰部/素人）、匹配、组合投放、效果评估。</p>` }
        ], refs: [] } },
      { title: '内容营销', brief: '用内容换注意力。',
        q: [
          { stem: '内容营销的目标是：', options: ['通过有价值的内容建立信任并转化', '直接卖货唯一', '涨粉唯一', '省钱'], answer: 0, explain: '信任。' },
          { stem: '内容矩阵包括：', options: ['图文、短视频、直播、播客', '只有图文', '只有视频', '只有直播'], answer: 0, explain: '矩阵。' },
          { stem: '好内容的判断标准是：', options: ['相关性、价值、可分享性', '长度', '数量', '制作成本'], answer: 0, explain: '三性。' }
        ],
        doc: { lead: '这一章讲内容。', sections: [
          { id: 'types', title: '形态', html: `<p>图文、短视频、直播、播客、白皮书；种草与测评。</p>` },
          { id: 'strategy', title: '策略', html: `<p>主题规划、系列化、分发与复用；内容与转化路径。</p>` }
        ], refs: [] } },
      { title: '电商与直播', brief: '边看边买。',
        q: [
          { stem: '直播带货的核心要素是：', options: ['人、货、场 + 信任', '价格唯一', '流量唯一', '主播颜值'], answer: 0, explain: '三要素。' },
          { stem: '电商转化的关键指标是：', options: ['转化率与客单价', '曝光量', '粉丝数', '时长'], answer: 0, explain: '转化。' },
          { stem: '直播选品的原则是：', options: ['引流款 + 利润款 + 福利款组合', '只卖高利润', '只卖低价', '随机'], answer: 0, explain: '组合。' }
        ],
        doc: { lead: '这一章讲电商。', sections: [
          { id: 'livestream', title: '直播', html: `<p>人货场、脚本节奏、互动与促单；信任与售后。</p>` },
          { id: 'ecommerce', title: '电商', html: `<p>详情页、评价、价格策略、活动节奏；GMV 与退货率。</p>` }
        ], refs: [] } },
      { title: '私域与用户运营', brief: '自己的流量。',
        q: [
          { stem: '私域运营的核心是：', options: ['可反复触达的用户资产', '平台流量', '广告位', 'KOL'], answer: 0, explain: '私域。' },
          { stem: '用户生命周期价值（LTV）指：', options: ['用户全周期贡献的价值', '客单价', '转化率', '获客成本'], answer: 0, explain: 'LTV。' },
          { stem: '私域运营的关键动作包括：', options: ['分层、内容、活动、复购', '只发广告', '只拉群', '只打折'], answer: 0, explain: '运营。' }
        ],
        doc: { lead: '这一章讲私域。', sections: [
          { id: 'assets', title: '资产', html: `<p>社群、企微、公众号、会员体系；LTV 与 CAC 比值。</p>` },
          { id: 'operations', title: '运营', html: `<p>分层运营、内容节奏、活动设计、流失召回。</p>` }
        ], refs: [] } },
      { title: '数据与优化', brief: '用数据迭代。',
        q: [
          { stem: 'A/B 测试的核心是：', options: ['控制变量比较效果', '随机发送', '看总量', '凭经验'], answer: 0, explain: '对照。' },
          { stem: '归因分析的作用是：', options: ['评估各触点对转化的贡献', '计算成本', '统计点击', '美化报表'], answer: 0, explain: '归因。' },
          { stem: 'ROI 与 ROAS 的区别是：', options: ['利润 vs 收入口径', '相同', 'ROI 只看广告', 'ROAS 含成本'], answer: 0, explain: '口径。' }
        ],
        doc: { lead: '这一章讲优化。', sections: [
          { id: 'test', title: '测试', html: `<p>A/B、多变量；样本量与显著性；避免过早下结论。</p>` },
          { id: 'attribution', title: '归因', html: `<p>末次、线性、数据驱动；增量实验与 geo 测试。</p>` }
        ], refs: [] } },
      { title: '增长与合规', brief: '快也要稳。',
        q: [
          { stem: '增长黑客的核心是：', options: ['低成本快速实验驱动增长', '砸钱', '刷量', '降价'], answer: 0, explain: '实验。' },
          { stem: '数据合规的要求包括：', options: ['知情同意、最小必要、可删除', '全部收集', '随意共享', '永久保存'], answer: 0, explain: '合规。' },
          { stem: '刷量与虚假流量的后果是：', options: ['误导决策、平台处罚', '无害', '提高效率', '节省成本'], answer: 0, explain: '后果。' }
        ],
        doc: { lead: '这一章讲增长。', sections: [
          { id: 'growth', title: '增长', html: `<p>AARRR、增长实验、渠道杠杆；北极星指标。</p>` },
          { id: 'compliance', title: '合规', html: `<p>个人信息保护、广告标识、平台规则；数据伦理。</p>` }
        ], refs: [] } }
    ] },
    { name: '广告效果研究', chapters: [
      { title: '效果研究框架', brief: '测什么。',
        q: [
          { stem: '广告效果研究的两个层面是：', options: ['传播效果与销售效果', '短期与长期', '线上与线下', '品牌与产品'], answer: 0, explain: '两类。' },
          { stem: '传播效果指标不包括：', options: ['曝光量', '回忆率', '态度改变', '库存周转'], answer: 3, explain: '非指标。' },
          { stem: '效果研究的关键原则是：', options: ['目标导向、可比较、可归因', '数据越多越好', '只看点击', '凭感觉'], answer: 0, explain: '原则。' }
        ],
        doc: { lead: '这一章讲框架。', sections: [
          { id: 'levels', title: '层次', html: `<p>曝光—注意—理解—记忆—态度—行为—销售。</p>` },
          { id: 'principles', title: '原则', html: `<p>与目标对应、设置对照、区分短期长期。</p>` }
        ], refs: [] } },
      { title: '前测与后测', brief: '上线前后。',
        q: [
          { stem: '广告前测的目的是：', options: ['在投放前评估创意与信息', '评估销售', '计算 ROI', '选媒介'], answer: 0, explain: '前测。' },
          { stem: '后测的常见方法是：', options: ['追踪调查、数据监测', '只做问卷', '只做实验', '凭经验'], answer: 0, explain: '后测。' },
          { stem: '前测的局限是：', options: ['实验室环境与真实情境差异', '成本低', '样本大', '无局限'], answer: 0, explain: '外部效度。' }
        ],
        doc: { lead: '这一章讲前后测。', sections: [
          { id: 'pretest', title: '前测', html: `<p>概念测试、文案测试、眼动/脑电；小样本定性。</p>` },
          { id: 'posttest', title: '后测', html: `<p>品牌追踪、销售数据、平台指标；对照与基线。</p>` }
        ], refs: [] } },
      { title: '实验设计', brief: '证明因果。',
        q: [
          { stem: '随机对照实验的优势是：', options: ['控制混淆、支持因果', '样本大', '成本低', '速度快'], answer: 0, explain: '因果。' },
          { stem: 'A/B 测试中应避免：', options: ['过早停止、多重比较', '随机分配', '大样本', '预设指标'], answer: 0, explain: '偏差。' },
          { stem: '地理实验（geo test）适用于：', options: ['无法个体随机时的区域对照', '任何情况', '小样本', '定性研究'], answer: 0, explain: 'geo。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'rct', title: 'RCT', html: `<p>随机分配、对照、样本量；内部与外部效度。</p>` },
          { id: 'geo', title: 'Geo 实验', html: `<p>区域对照、增量测量；适合媒体投放效果评估。</p>` }
        ], refs: [] } },
      { title: '品牌追踪', brief: '长期看变化。',
        q: [
          { stem: '品牌追踪研究的核心指标是：', options: ['知名度、考虑、偏好、购买意向', '只有知名度', '只有销量', '只有点击'], answer: 0, explain: '漏斗。' },
          { stem: '追踪研究需要：', options: ['连续、同口径、有基线', '一次性', '随机', '只做一次'], answer: 0, explain: '连续。' },
          { stem: '品牌健康度的意义是：', options: ['预测长期销售潜力', '短期促销', '渠道管理', '库存'], answer: 0, explain: '长期。' }
        ],
        doc: { lead: '这一章讲追踪。', sections: [
          { id: 'funnel', title: '漏斗', html: `<p>知晓—熟悉—考虑—偏好—购买—忠诚。</p>` },
          { id: 'design', title: '设计', html: `<p>固定样本/滚动样本；同口径问卷；基线比较。</p>` }
        ], refs: [] } },
      { title: '数字指标', brief: '平台的数字。',
        q: [
          { stem: 'CTR 指：', options: ['点击率', '转化率', '曝光量', '客单价'], answer: 0, explain: 'Click Through Rate。' },
          { stem: 'CAC 与 LTV 的关系应：', options: ['LTV 明显大于 CAC', '相等', 'CAC 更大', '无关'], answer: 0, explain: '健康。' },
          { stem: '虚荣指标的问题是：', options: ['好看但不反映价值', '太真实', '太难算', '太贵'], answer: 0, explain: '虚荣。' }
        ],
        doc: { lead: '这一章讲指标。', sections: [
          { id: 'metrics', title: '指标', html: `<p>曝光、CTR、CVR、CPA、CAC、LTV、ROI、ROAS。</p>` },
          { id: 'vanity', title: '虚荣指标', html: `<p>粉丝数、曝光量；应与转化和留存结合。</p>` }
        ], refs: [] } },
      { title: '归因与增量', brief: '到底是谁的功劳。',
        q: [
          { stem: '末次点击归因的缺陷是：', options: ['忽视前期触点贡献', '太复杂', '成本高', '无数据'], answer: 0, explain: '缺陷。' },
          { stem: '增量实验的目的是：', options: ['测量广告带来的真实增量', '计算点击', '统计曝光', '分配预算'], answer: 0, explain: '增量。' },
          { stem: '多触点归因的价值是：', options: ['更公平地分配贡献', '更简单', '更便宜', '更快'], answer: 0, explain: '公平。' }
        ],
        doc: { lead: '这一章讲归因。', sections: [
          { id: 'models', title: '模型', html: `<p>末次、首次、线性、时间衰减、数据驱动。</p>` },
          { id: 'incrementality', title: '增量', html: `<p>对照实验、PSA、geo 测试；避免"自然增长"被误算。</p>` }
        ], refs: [] } },
      { title: '研究报告', brief: '把结论说清。',
        q: [
          { stem: '效果报告的推荐结构是：', options: ['目标—方法—结果—结论建议', '只有数据', '只有结论', '只有图表'], answer: 0, explain: '四段。' },
          { stem: '报告中的相关性应：', options: ['谨慎表述，不轻易说因果', '直接说因果', '忽略', '夸大'], answer: 0, explain: '谨慎。' },
          { stem: '可视化在报告中的作用是：', options: ['帮助理解关键结论', '装饰', '凑页数', '替代分析'], answer: 0, explain: '理解。' }
        ],
        doc: { lead: '这一章讲报告。', sections: [
          { id: 'structure', title: '结构', html: `<p>摘要（结论先行）、目标、方法、结果、建议、局限。</p>` },
          { id: 'visual', title: '呈现', html: `<p>一图一结论；标注样本与口径；避免误导性坐标轴。</p>` }
        ], refs: [] } },
      { title: '效果优化', brief: '从数据到动作。',
        q: [
          { stem: '效果优化的第一步是：', options: ['定位问题环节（漏斗）', '加预算', '换素材', '换平台'], answer: 0, explain: '定位。' },
          { stem: '创意疲劳的信号是：', options: ['CTR 持续下降、频次上升', 'CTR 上升', '曝光下降', '成本下降'], answer: 0, explain: '疲劳。' },
          { stem: '优化应遵循：', options: ['一次改一个变量、验证后再推广', '同时改多个', '凭直觉', '全部推翻'], answer: 0, explain: '变量控制。' }
        ],
        doc: { lead: '这一章讲优化。', sections: [
          { id: 'diagnose', title: '诊断', html: `<p>漏斗定位：曝光不足/点击低/转化差/留存低。</p>` },
          { id: 'iterate', title: '迭代', html: `<p>创意轮换、定向调整、落地页优化、出价策略。</p>` }
        ], refs: [] } }
    ] },

    /* ---- 大四 ---- */
    { name: '毕业论文', chapters: [
      { title: '选题与文献', brief: '小问题、可研究。',
        q: [
          { stem: '广告学论文选题的方向包括：', options: ['品牌、消费者、数字营销、创意', '只有创意', '只有品牌', '只有数据'], answer: 0, explain: '多方向。' },
          { stem: '文献综述应：', options: ['梳理脉络、指出缺口', '罗列摘要', '按时间堆砌', '只引名家'], answer: 0, explain: '缺口。' },
          { stem: '研究问题的要求是：', options: ['明确、可研究、有价值', '宏大', '时髦', '熟悉'], answer: 0, explain: '三要求。' }
        ],
        doc: { lead: '这一章讲开头。', sections: [
          { id: 'topic', title: '选题', html: `<p>从实习、案例、理论争议中找；范围可控。</p>` },
          { id: 'review', title: '综述', html: `<p>按主题组织；说明研究空白与贡献。</p>` }
        ], refs: [] } },
      { title: '研究方法', brief: '怎么研究。',
        q: [
          { stem: '广告研究常用的量化方法是：', options: ['问卷、实验、内容分析', '只有访谈', '只有观察', '只有案例'], answer: 0, explain: '量化。' },
          { stem: '案例研究适合：', options: ['揭示机制与过程', '大样本推断', '统计检验', '预测'], answer: 0, explain: '机制。' },
          { stem: '研究伦理要求：', options: ['知情同意、匿名、不伤害', '公开数据', '随意引用', '署名'], answer: 0, explain: '伦理。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'methods', title: '方法', html: `<p>问卷、实验、内容分析、深访、案例；与问题匹配。</p>` },
          { id: 'ethics', title: '伦理', html: `<p>知情同意、匿名化、数据合规；商业敏感信息处理。</p>` }
        ], refs: [] } },
      { title: '写作与规范', brief: '学术表达。',
        q: [
          { stem: '论文语言的要求是：', options: ['客观、准确、简洁', '华丽', '口语', '情绪'], answer: 0, explain: '客观。' },
          { stem: '引用规范的作用是：', options: ['可追溯、避免抄袭', '凑数', '装饰', '增加篇幅'], answer: 0, explain: '规范。' },
          { stem: '结论应：', options: ['回应问题、说明局限', '提出新问题唯一', '重复引言', '写感想'], answer: 0, explain: '收束。' }
        ],
        doc: { lead: '这一章讲写作。', sections: [
          { id: 'structure', title: '结构', html: `<p>摘要、引言、文献、方法、结果、讨论、参考。</p>` },
          { id: 'cite', title: '引用', html: `<p>APA 等格式；数据来源标注；商业数据脱敏。</p>` }
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
      { title: '实习岗位', brief: '创意、策划、媒介、运营。',
        q: [
          { stem: '广告公司常见的实习岗位不包括：', options: ['文案', '美术', '客户执行', '外科医师'], answer: 3, explain: '无关。' },
          { stem: '选择实习岗位最该看：', options: ['能否参与真实项目', '名气', '工资', '通勤'], answer: 0, explain: '实战。' },
          { stem: 'AE 岗位的核心工作是：', options: ['对接客户与内部协调', '设计', '文案', '媒介'], answer: 0, explain: '协调。' }
        ],
        doc: { lead: '这一章讲岗位。', sections: [
          { id: 'roles', title: '岗位', html: `<p>文案、美术、策略、客户、媒介、社交运营、数据。</p>` },
          { id: 'choose', title: '选择', html: `<p>能上手、有带教、能出作品。</p>` }
        ], refs: [] } },
      { title: '项目参与', brief: '从执行做起。',
        q: [
          { stem: '实习生参与项目的合适切入点是：', options: ['一个模块的具体执行', '整体策略', '预算', '人事'], answer: 0, explain: '小切口。' },
          { stem: '与创意团队协作的关键是：', options: ['明确 brief 与交付标准', '口头沟通', '各做各的', '最后再说'], answer: 0, explain: 'brief。' },
          { stem: '项目延期的常见原因是：', options: ['需求变更与评审不足', '人太多', '预算高', '工具'], answer: 0, explain: '需求。' }
        ],
        doc: { lead: '这一章讲参与。', sections: [
          { id: 'scope', title: '范围', html: `<p>领一个模块：文案、素材、投放、数据复盘。</p>` },
          { id: 'collab', title: '协作', html: `<p>brief、排期、验收标准；需求变更留痕。</p>` }
        ], refs: [] } },
      { title: '作品与复盘', brief: '留下什么。',
        q: [
          { stem: '实习应留下的作品包括：', options: ['文案、设计方案、投放数据', '工牌', '照片', '评语'], answer: 0, explain: '作品。' },
          { stem: '作品集说明应包含：', options: ['背景、你的贡献、效果', '只有图', '只有文字', '只有数据'], answer: 0, explain: '三要素。' },
          { stem: '复盘的有效写法是：', options: ['问题—做法—结果—反思', '流水账', '只写结论', '只写感受'], answer: 0, explain: '结构化。' }
        ],
        doc: { lead: '这一章讲产出。', sections: [
          { id: 'portfolio', title: '作品集', html: `<p>3–5 个案例：背景、洞察、方案、你的角色、效果。</p>` },
          { id: 'review', title: '复盘', html: `<p>每周五行；对照数据与反馈改进。</p>` }
        ], refs: [] } },
      { title: '职业素养', brief: '靠谱比聪明重要。',
        q: [
          { stem: '广告从业者的基本素养是：', options: ['责任心、沟通、抗压、学习', '只有创意', '只有人脉', '只有加班'], answer: 0, explain: '综合。' },
          { stem: '面对客户反复修改应：', options: ['理解需求并管理预期', '抱怨', '拒绝', '硬扛'], answer: 0, explain: '管理。' },
          { stem: '实习期间最重要的是：', options: ['主动沟通、及时反馈', '少说话', '只做分内', '等安排'], answer: 0, explain: '主动。' }
        ],
        doc: { lead: '这一章讲素养。', sections: [
          { id: 'qualities', title: '素养', html: `<p>责任、沟通、抗压、审美、学习能力。</p>` },
          { id: 'habits', title: '习惯', html: `<p>按时交付、留痕、复盘、保护商业机密。</p>` }
        ], refs: [] } }
    ] },
    { name: '考研与求职', chapters: [
      { title: '考研方向', brief: '广告、传播、MJC。',
        q: [
          { stem: '广告学考研的常见方向是：', options: ['广告学、传播学、新闻与传播专硕', '只有广告学', '只有传播学', '只有专硕'], answer: 0, explain: '三类。' },
          { stem: '择校最应考虑：', options: ['科目、报录比与方向匹配', '城市', '学费', '宿舍'], answer: 0, explain: '匹配。' },
          { stem: '专业课复习的主线是：', options: ['理论—实务—热点', '只背理论', '只做真题', '只看热点'], answer: 0, explain: '三条线。' }
        ],
        doc: { lead: '这一章讲方向。', sections: [
          { id: 'paths', title: '方向', html: `<p>广告学、传播学、MJC、品牌与营销方向。</p>` },
          { id: 'plan', title: '复习', html: `<p>理论框架 + 实务操作 + 年度热点专题。</p>` }
        ], refs: [] } },
      { title: '求职方向', brief: '甲方、乙方、平台。',
        q: [
          { stem: '广告学毕业生的去向包括：', options: ['广告公司、甲方市场部、互联网平台、媒体', '只有广告公司', '只有甲方', '只有平台'], answer: 0, explain: '多元。' },
          { stem: '甲方市场部的工作重点是：', options: ['品牌管理与整合营销', '只做投放', '只做设计', '只做销售'], answer: 0, explain: '品牌。' },
          { stem: '求职最加分的材料是：', options: ['作品集与项目数据', '证书数量', '成绩单', '社团'], answer: 0, explain: '作品。' }
        ],
        doc: { lead: '这一章讲就业。', sections: [
          { id: 'paths', title: '路径', html: `<p>乙方（创意/媒介/策略）、甲方市场部、平台运营、MCN、创业。</p>` },
          { id: 'skills', title: '能力', html: `<p>洞察、创意、文案、数据、项目管理。</p>` }
        ], refs: [] } },
      { title: '作品集', brief: '最重要的敲门砖。',
        q: [
          { stem: '广告作品集的核心是：', options: ['案例完整性与你的贡献', '数量', '美观', '厚度'], answer: 0, explain: '案例。' },
          { stem: '作品集应包含：', options: ['背景、洞察、创意、执行、效果', '只有成品图', '只有文字', '只有数据'], answer: 0, explain: '五段。' },
          { stem: '没有实习作品时可以：', options: ['做模拟项目或参加比赛', '编造', '空着', '只放课程作业'], answer: 0, explain: '自造。' }
        ],
        doc: { lead: '这一章讲作品。', sections: [
          { id: 'structure', title: '结构', html: `<p>每个案例：brief—洞察—创意—执行—结果—反思。</p>` },
          { id: 'make', title: '积累', html: `<p>课程作业、比赛、自媒体、模拟提案；重视过程稿。</p>` }
        ], refs: [] } },
      { title: '面试', brief: '讲清你的思考。',
        q: [
          { stem: '广告公司面试常考：', options: ['现场提案或创意题', '编程', '财务', '体检'], answer: 0, explain: '创意题。' },
          { stem: '讲作品的最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲创意'], answer: 0, explain: 'STAR。' },
          { stem: '被问"你最喜欢哪个广告"时，应：', options: ['说明它有效的理由', '只说好看', '说不知道', '随便说'], answer: 0, explain: '分析。' }
        ],
        doc: { lead: '这一章讲面试。', sections: [
          { id: 'test', title: '考题', html: `<p>创意题、文案改写、案例分析、提案陈述。</p>` },
          { id: 'tell', title: '表达', html: `<p>结论先行、讲清洞察与取舍；承认不确定。</p>` }
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
