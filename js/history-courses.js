/* ==========================================================
   history-courses.js · 历史学：12 门课（主干 8 / 出口 4）= 84 关
   ========================================================== */

(function () {
  var MAJOR = 'history-历史学';
  var TITLES = stageTitlesOf('history');

  var COURSES = [
    { name: '中国古代史（上）', chapters: [
      { title: '史前与夏商周', brief: '从考古到王朝。',
        q: [
          { stem: '中国新石器时代代表性的考古文化是：', options: ['仰韶与龙山', '敦煌', '殷墟', '三星堆'], answer: 0, explain: '史前文化。' },
          { stem: '商代最重要的文字材料是：', options: ['甲骨文', '金文', '简牍', '帛书'], answer: 0, explain: '甲骨。' },
          { stem: '西周的分封制与宗法制的关系是：', options: ['互为表里', '相互排斥', '无关', '先后替代'], answer: 0, explain: '礼制。' }
        ],
        doc: { lead: '这一章讲先秦。', sections: [
          { id: 'prehistory', title: '史前', html: `<p>旧石器—新石器—青铜；仰韶、龙山、良渚；二里头与夏文化探索。</p>` },
          { id: 'dynasties', title: '夏商周', html: `<p>甲骨文、青铜器、分封宗法、礼乐制度。</p>` }
        ], refs: [] } },
      { title: '春秋战国', brief: '礼崩乐坏与百家争鸣。',
        q: [
          { stem: '春秋战国社会变革的根本动力是：', options: ['铁器牛耕与生产力发展', '战争', '变法', '思想'], answer: 0, explain: '生产力。' },
          { stem: '商鞅变法的核心内容是：', options: ['废井田、开阡陌、奖耕战', '分封', '井田', '世卿'], answer: 0, explain: '变法。' },
          { stem: '百家争鸣中主张"兼爱非攻"的是：', options: ['墨家', '儒家', '道家', '法家'], answer: 0, explain: '墨家。' }
        ],
        doc: { lead: '这一章讲变革。', sections: [
          { id: 'change', title: '变革', html: `<p>铁器牛耕、井田瓦解、士阶层兴起、变法运动。</p>` },
          { id: 'schools', title: '诸子', html: `<p>儒墨道法名兵农；核心主张与政治设计。</p>` }
        ], refs: [] } },
      { title: '秦汉', brief: '大一统的建立。',
        q: [
          { stem: '秦朝确立的政治制度是：', options: ['皇帝制度、三公九卿、郡县制', '分封制', '九品中正制', '三省六部'], answer: 0, explain: '秦制。' },
          { stem: '汉武帝加强中央集权的措施不包括：', options: ['推恩令', '盐铁官营', '独尊儒术', '分封诸侯'], answer: 3, explain: '推恩削弱诸侯。' },
          { stem: '丝绸之路开通的关键事件是：', options: ['张骞通西域', '班超', '玄奘', '郑和'], answer: 0, explain: '张骞。' }
        ],
        doc: { lead: '这一章讲秦汉。', sections: [
          { id: 'qin', title: '秦', html: `<p>统一六国、郡县制、书同文车同轨、焚书坑儒。</p>` },
          { id: 'han', title: '汉', html: `<p>休养生息、文景之治、武帝新政、丝绸之路、察举制。</p>` }
        ], refs: [] } },
      { title: '魏晋南北朝', brief: '分裂与融合。',
        q: [
          { stem: '魏晋时期选官制度是：', options: ['九品中正制', '察举制', '科举制', '世袭制'], answer: 0, explain: '九品。' },
          { stem: '北魏孝文帝改革的核心是：', options: ['汉化与均田制', '恢复分封', '废除儒学', '迁都洛阳唯一'], answer: 0, explain: '汉化。' },
          { stem: '这一时期民族交融的主要方式是：', options: ['人口迁徙、政权改革、经济文化交往', '只有战争', '只有和亲', '只有贸易'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲魏晋。', sections: [
          { id: 'politics', title: '政治', html: `<p>九品中正、门阀士族、南北对峙；孝文帝改革。</p>` },
          { id: 'culture', title: '文化', html: `<p>玄学、佛教传入、石窟艺术、民族交融。</p>` }
        ], refs: [] } },
      { title: '隋唐五代', brief: '盛世与转折。',
        q: [
          { stem: '隋唐确立的中央官制是：', options: ['三省六部制', '三公九卿', '二府三司', '内阁'], answer: 0, explain: '三省六部。' },
          { stem: '科举制正式确立于：', options: ['隋朝', '汉朝', '唐朝唯一', '宋朝'], answer: 0, explain: '隋。' },
          { stem: '安史之乱的影响是：', options: ['唐朝由盛转衰、藩镇割据', '统一加强', '经济繁荣', '外患消除'], answer: 0, explain: '转折。' }
        ],
        doc: { lead: '这一章讲隋唐。', sections: [
          { id: 'institution', title: '制度', html: `<p>三省六部、科举、均田与租庸调、两税法。</p>` },
          { id: 'decline', title: '转折', html: `<p>开元盛世、安史之乱、藩镇与宦官、五代十国。</p>` }
        ], refs: [] } },
      { title: '宋辽金元', brief: '多政权并立。',
        q: [
          { stem: '宋代加强中央集权的基本方针是：', options: ['强干弱枝、分化事权', '分封', '放权', '尚武'], answer: 0, explain: '集权。' },
          { stem: '宋代经济的重要变化是：', options: ['商品经济繁荣、纸币出现', '重农抑商加强', '闭关', '废除市场'], answer: 0, explain: '商业。' },
          { stem: '元朝的地方行政制度是：', options: ['行省制', '郡县制', '分封制', '三省六部'], answer: 0, explain: '行省。' }
        ],
        doc: { lead: '这一章讲宋元。', sections: [
          { id: 'song', title: '宋', html: `<p>二府三司、重文轻武、王安石变法、商品经济与市民文化。</p>` },
          { id: 'yuan', title: '辽金元', html: `<p>南北面官、猛安谋克、行省制、民族等级。</p>` }
        ], refs: [] } },
      { title: '明清', brief: '专制强化与转型。',
        q: [
          { stem: '明朝废丞相后设立的辅政机构是：', options: ['内阁', '军机处', '中书省', '尚书省'], answer: 0, explain: '内阁。' },
          { stem: '清朝君主专制达到顶峰的标志是：', options: ['军机处设立', '内阁', '议政王大臣会议', '南书房'], answer: 0, explain: '军机处。' },
          { stem: '明清经济的新现象是：', options: ['商品经济与资本主义萌芽', '自然经济消失', '工业化', '计划经济'], answer: 0, explain: '萌芽。' }
        ],
        doc: { lead: '这一章讲明清。', sections: [
          { id: 'autocracy', title: '专制', html: `<p>废丞相、设内阁、军机处；文字狱与思想控制。</p>` },
          { id: 'economy', title: '经济', html: `<p>一条鞭法、摊丁入亩、商业市镇、对外贸易与海禁。</p>` }
        ], refs: [] } },
      { title: '史料与考古', brief: '怎么知道。',
        q: [
          { stem: '研究上古史最重要的出土材料是：', options: ['甲骨、金文、简帛', '二十四史', '族谱', '笔记'], answer: 0, explain: '出土。' },
          { stem: '二重证据法指的是：', options: ['文献与考古实物互证', '两种文献', '两种语言', '两个学科'], answer: 0, explain: '王国维。' },
          { stem: '史料批判的核心是：', options: ['辨真伪、考源流、明语境', '只看文字', '只信官方', '只信传说'], answer: 0, explain: '批判。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'sources', title: '史料', html: `<p>传世文献、出土文献、考古遗存、图像与实物。</p>` },
          { id: 'method', title: '方法', html: `<p>二重证据、文献辨伪、考古分期；跨学科。</p>` }
        ], refs: [] } }
    ] },
    { name: '史学概论', chapters: [
      { title: '历史与史学', brief: '过去与对过去的认识。',
        q: [
          { stem: '历史与史学的区别是：', options: ['客观过程 vs 认识与研究', '古代 vs 现代', '中国 vs 外国', '文字 vs 实物'], answer: 0, explain: '两义。' },
          { stem: '史学的核心任务是：', options: ['求真与解释', '讲故事', '宣传', '预测'], answer: 0, explain: '求真。' },
          { stem: '"一切历史都是当代史"（克罗齐）强调：', options: ['历史认识受当下影响', '历史可改写', '历史无客观', '历史即政治'], answer: 0, explain: '当下性。' }
        ],
        doc: { lead: '这一章讲对象。', sections: [
          { id: 'object', title: '对象', html: `<p>历史过程（本体）与历史认识（认识）；客观性与主体性。</p>` },
          { id: 'task', title: '任务', html: `<p>复原事实、解释因果、理解意义；求真与致用。</p>` }
        ], refs: [] } },
      { title: '史料与考证', brief: '证据的学问。',
        q: [
          { stem: '史料分为：', options: ['一手史料与二手史料', '文字与实物', '官方与民间', '中国与外国'], answer: 0, explain: '直接/间接。' },
          { stem: '考证的基本方法是：', options: ['归纳、比较、溯源、辨伪', '直觉', '权威', '传说'], answer: 0, explain: '方法。' },
          { stem: '孤证不立的意思是：', options: ['单一证据不足以下结论', '证据越多越好', '孤本最珍贵', '不需证据'], answer: 0, explain: '多证。' }
        ],
        doc: { lead: '这一章讲史料。', sections: [
          { id: 'types', title: '分类', html: `<p>文献、实物、口述、图像、音像；直接与间接。</p>` },
          { id: 'criticism', title: '考证', html: `<p>外考证（真伪、年代、作者）与内考证（内容可信度）。</p>` }
        ], refs: [] } },
      { title: '历史解释', brief: '为什么会这样。',
        q: [
          { stem: '历史解释与自然科学的解释的差异在于：', options: ['涉及意义与理解', '不追求因果', '不需要证据', '无规律'], answer: 0, explain: '理解。' },
          { stem: '历史主义强调：', options: ['在具体历史语境中理解现象', '永恒标准', '循环史观', '无规律'], answer: 0, explain: '语境。' },
          { stem: '历史解释应避免：', options: ['以今律古、目的论', '史料', '比较', '语境化'], answer: 0, explain: '避免。' }
        ],
        doc: { lead: '这一章讲解释。', sections: [
          { id: 'explain', title: '解释', html: `<p>因果解释、意向解释、功能解释；理解与说明之争。</p>` },
          { id: 'pitfall', title: '陷阱', html: `<p>以今律古、后见之明、目的论、单因论。</p>` }
        ], refs: [] } },
      { title: '史学流派', brief: '不同的看法。',
        q: [
          { stem: '兰克学派的核心主张是：', options: ['如实直书、史料批判', '思辨历史', '年鉴', '后现代'], answer: 0, explain: '客观。' },
          { stem: '年鉴学派强调：', options: ['长时段、总体史、跨学科', '政治史唯一', '人物史', '事件史'], answer: 0, explain: '年鉴。' },
          { stem: '后现代史学挑战：', options: ['历史客观性与文本性', '史料', '考证', '叙事'], answer: 0, explain: '挑战。' }
        ],
        doc: { lead: '这一章讲流派。', sections: [
          { id: 'schools', title: '流派', html: `<p>兰克、年鉴、新社会史、文化史、全球史、后现代。</p>` },
          { id: 'debate', title: '争论', html: `<p>客观性、叙事性、因果与意义。</p>` }
        ], refs: [] } },
      { title: '唯物史观', brief: '马克思主义的解释。',
        q: [
          { stem: '唯物史观认为社会发展的根本动力是：', options: ['生产力与生产关系的矛盾', '理念', '地理', '人口'], answer: 0, explain: '基本矛盾。' },
          { stem: '经济基础与上层建筑的关系是：', options: ['决定与反作用', '无关', '上层决定', '循环'], answer: 0, explain: '决定。' },
          { stem: '阶级分析法的核心是：', options: ['从生产关系与利益分析社会冲突', '只分贫富', '只看思想', '只看制度'], answer: 0, explain: '阶级。' }
        ],
        doc: { lead: '这一章讲唯物史观。', sections: [
          { id: 'basic', title: '基本', html: `<p>生产力与生产关系、经济基础与上层建筑；社会形态更替。</p>` },
          { id: 'method', title: '方法', html: `<p>阶级分析、历史合力、具体问题具体分析。</p>` }
        ], refs: [] } },
      { title: '全球史与跨文化', brief: '超越国别。',
        q: [
          { stem: '全球史的核心视角是：', options: ['跨区域联系与互动', '国别史相加', '西方中心', '孤立发展'], answer: 0, explain: '联系。' },
          { stem: '全球史兴起的原因包括：', options: ['全球化与反欧洲中心', '史料减少', '技术进步唯一', '政治'], answer: 0, explain: '背景。' },
          { stem: '大分流讨论的是：', options: ['东西方经济发展何时分化', '战争', '文化', '人口'], answer: 0, explain: '大分流。' }
        ],
        doc: { lead: '这一章讲全球史。', sections: [
          { id: 'approach', title: '视角', html: `<p>贸易、移民、疾病、技术、思想的跨区域流动。</p>` },
          { id: 'debate', title: '争论', html: `<p>欧洲中心论批判、大分流、中心—边缘。</p>` }
        ], refs: [] } },
      { title: '口述史与公共史学', brief: '谁的历史。',
        q: [
          { stem: '口述史的价值是：', options: ['记录边缘群体与亲历经验', '替代档案', '更客观', '更省事'], answer: 0, explain: '经验。' },
          { stem: '口述史的局限是：', options: ['记忆偏差与主观性', '成本高', '不合法', '不可用'], answer: 0, explain: '记忆。' },
          { stem: '公共史学强调：', options: ['史学面向公众与社会应用', '只在学院', '只写论文', '只做考证'], answer: 0, explain: '公众。' }
        ],
        doc: { lead: '这一章讲公众。', sections: [
          { id: 'oral', title: '口述', html: `<p>访谈方法、记忆与情感、伦理；与文献互证。</p>` },
          { id: 'public', title: '公共史学', html: `<p>博物馆、纪录片、地方志、历史教育。</p>` }
        ], refs: [] } },
      { title: '史学写作', brief: '把研究写出来。',
        q: [
          { stem: '史学论文的基本结构是：', options: ['问题—史料—论证—结论', '背景—感想—结论', '叙事唯一', '综述'], answer: 0, explain: '结构。' },
          { stem: '史学写作的语言要求是：', options: ['准确、简洁、有分寸', '华丽', '抒情', '夸张'], answer: 0, explain: '分寸。' },
          { stem: '注释与引用规范的作用是：', options: ['可核查与学术诚信', '凑数', '装饰', '增加篇幅'], answer: 0, explain: '规范。' }
        ],
        doc: { lead: '这一章讲写作。', sections: [
          { id: 'structure', title: '结构', html: `<p>问题意识、学术史、史料与方法、论证、结论。</p>` },
          { id: 'style', title: '表达', html: `<p>据事直书、避免过度解释；注释体例。</p>` }
        ], refs: [] } }
    ] },
    { name: '历史文献学', chapters: [
      { title: '目录学', brief: '辨章学术，考镜源流。',
        q: [
          { stem: '目录学的核心作用是：', options: ['了解文献源流与学术门径', '收藏', '校勘', '翻译'], answer: 0, explain: '门径。' },
          { stem: '四部分类是：', options: ['经、史、子、集', '甲乙丙丁', '文史哲', '经史子集'], answer: 0, explain: '四部。' },
          { stem: '《四库全书总目》的价值是：', options: ['著录与提要，学术评价', '全文收录', '只列书名', '只收善本'], answer: 0, explain: '提要。' }
        ],
        doc: { lead: '这一章讲目录。', sections: [
          { id: 'history', title: '源流', html: `<p>《七略》《汉书·艺文志》《隋书·经籍志》；四部分类。</p>` },
          { id: 'use', title: '使用', html: `<p>知某书存佚、版本、内容；查学术史。</p>` }
        ], refs: [] } },
      { title: '版本学', brief: '同一本书的不同样子。',
        q: [
          { stem: '版本学研究的对象是：', options: ['同一文献的不同刻本与写本', '内容', '作者', '思想'], answer: 0, explain: '版本。' },
          { stem: '善本的标准通常包括：', options: ['年代早、校勘精、流传少', '价格高', '字大', '纸白'], answer: 0, explain: '三性。' },
          { stem: '选择版本的原则是：', options: ['择善而从、参考校勘记', '越新越好', '越旧越好', '随便'], answer: 0, explain: '择善。' }
        ],
        doc: { lead: '这一章讲版本。', sections: [
          { id: 'types', title: '类型', html: `<p>写本、刻本、活字、石印、影印；官刻、私刻、坊刻。</p>` },
          { id: 'choose', title: '选择', html: `<p>初刻、精刻、名家校本；利用版本目录。</p>` }
        ], refs: [] } },
      { title: '校勘学', brief: '恢复原貌。',
        q: [
          { stem: '校勘的目的是：', options: ['订正传写刊刻中的错误', '翻译', '注释', '评论'], answer: 0, explain: '正误。' },
          { stem: '校勘的常用方法是：', options: ['对校、本校、他校、理校', '只有对校', '只有理校', '猜测'], answer: 0, explain: '四法。' },
          { stem: '校勘记的作用是：', options: ['记录异文与取舍理由', '装饰', '凑数', '替代正文'], answer: 0, explain: '记录。' }
        ],
        doc: { lead: '这一章讲校勘。', sections: [
          { id: 'methods', title: '四法', html: `<p>对校（版本）、本校（本书）、他校（他书）、理校（文理）。</p>` },
          { id: 'record', title: '校记', html: `<p>异文、依据、判断；存疑与不改。</p>` }
        ], refs: [] } },
      { title: '辨伪与辑佚', brief: '真书假书。',
        q: [
          { stem: '辨伪的目的是：', options: ['确定文献真伪与年代', '收藏', '翻译', '注释'], answer: 0, explain: '真伪。' },
          { stem: '辨伪的常用方法是：', options: ['考察内容、语言、著录、流传', '只看纸张', '只看字数', '凭感觉'], answer: 0, explain: '综合。' },
          { stem: '辑佚指的是：', options: ['从类书等文献中辑录已佚之书', '删除', '校勘', '注释'], answer: 0, explain: '辑佚。' }
        ],
        doc: { lead: '这一章讲辨伪。', sections: [
          { id: 'forge', title: '辨伪', html: `<p>伪书类型、作伪动机；考据方法。</p>` },
          { id: 'recover', title: '辑佚', html: `<p>类书、古注、总集；辑本的价值与局限。</p>` }
        ], refs: [] } },
      { title: '类书、丛书与方志', brief: '大工程。',
        q: [
          { stem: '类书的特点是：', options: ['按类编排、汇集资料', '按作者编排', '只收诗文', '只收史书'], answer: 0, explain: '类编。' },
          { stem: '丛书的价值是：', options: ['汇集稀见文献、便于保存', '只有畅销书', '只收小说', '只收经部'], answer: 0, explain: '汇集。' },
          { stem: '地方志的史料价值是：', options: ['记录地方社会、经济、人物', '只有地理', '只有诗文', '无价值'], answer: 0, explain: '地方。' }
        ],
        doc: { lead: '这一章讲工具书。', sections: [
          { id: 'leishu', title: '类书', html: `<p>《太平御览》《永乐大典》《古今图书集成》；辑佚与查考。</p>` },
          { id: 'difang', title: '方志', html: `<p>总志、通志、府县志；社会史与地方史宝库。</p>` }
        ], refs: [] } },
      { title: '金石与简帛', brief: '出土文献。',
        q: [
          { stem: '金石学研究的对象是：', options: ['青铜器铭文与石刻', '甲骨', '简牍', '帛书'], answer: 0, explain: '金石。' },
          { stem: '简帛文献的价值是：', options: ['提供未经后世改动的原始文本', '装饰', '书法', '收藏'], answer: 0, explain: '原始。' },
          { stem: '出土文献研究应注意：', options: ['残断、缀合、释读与语境', '只看字形', '只信释文', '忽略出土信息'], answer: 0, explain: '综合。' }
        ],
        doc: { lead: '这一章讲出土。', sections: [
          { id: 'bronze', title: '金石', html: `<p>青铜铭文、碑刻、墓志；史料与书法。</p>` },
          { id: 'bamboo', title: '简帛', html: `<p>郭店、清华简、马王堆帛书；释读与辨伪。</p>` }
        ], refs: [] } },
      { title: '档案与文书', brief: '一手行政记录。',
        q: [
          { stem: '档案的史料价值在于：', options: ['原始、系统、可量化', '文学性', '易得', '完整无缺'], answer: 0, explain: '原始。' },
          { stem: '利用档案应注意：', options: ['形成背景、制度语境、缺漏', '只看内容', '只信数字', '忽略来源'], answer: 0, explain: '语境。' },
          { stem: '明清档案的重要收藏地是：', options: ['中国第一历史档案馆', '国家图书馆', '故宫', '社科院'], answer: 0, explain: '一史馆。' }
        ],
        doc: { lead: '这一章讲档案。', sections: [
          { id: 'types', title: '类型', html: `<p>诏令、奏折、户籍、契约、账簿、诉讼卷宗。</p>` },
          { id: 'method', title: '方法', html: `<p>文书学、制度史背景；量化与个案结合。</p>` }
        ], refs: [] } },
      { title: '工具书与检索', brief: '治学的钥匙。',
        q: [
          { stem: '查古代人物生平的常用工具书是：', options: ['《中国人名大辞典》与传记索引', '《辞海》', '《说文》', '《广韵》'], answer: 0, explain: '人名。' },
          { stem: '查历史纪年应使用：', options: ['《中国历史纪年表》', '《康熙字典》', '《辞源》', '《四库提要》'], answer: 0, explain: '纪年。' },
          { stem: '数字人文资源的作用是：', options: ['全文检索与数据化分析', '替代阅读', '装饰', '收藏'], answer: 0, explain: '检索。' }
        ],
        doc: { lead: '这一章讲工具。', sections: [
          { id: 'reference', title: '工具书', html: `<p>字典、年鉴、索引、年表、地理辞典；书目与论文索引。</p>` },
          { id: 'digital', title: '数字资源', html: `<p>古籍数据库、档案全文库、数字人文工具。</p>` }
        ], refs: [] } }
    ] },
    { name: '中国古代史（下）', chapters: [
      { title: '隋唐制度', brief: '三省六部与科举。',
        q: [
          { stem: '三省六部中负责执行的是：', options: ['尚书省', '中书省', '门下省', '御史台'], answer: 0, explain: '尚书省。' },
          { stem: '科举制与九品中正制的区别是：', options: ['考试选才 vs 门第推荐', '都是推荐', '都是世袭', '都没有'], answer: 0, explain: '考试。' },
          { stem: '两税法的主要变化是：', options: ['按资产与田亩征税、简化税制', '按人头', '按丁口', '免征'], answer: 0, explain: '两税。' }
        ],
        doc: { lead: '这一章讲制度。', sections: [
          { id: 'central', title: '中央', html: `<p>三省六部、政事堂；监察与地方制度。</p>` },
          { id: 'tax', title: '赋税', html: `<p>均田租庸调 → 两税法；财政与户籍。</p>` }
        ], refs: [] } },
      { title: '宋代制度与社会', brief: '分权与士大夫。',
        q: [
          { stem: '宋代分割相权的措施是：', options: ['设参知政事、枢密使、三司使', '废丞相', '设内阁', '设军机处'], answer: 0, explain: '分权。' },
          { stem: '宋代科举的变化是：', options: ['扩大取士、殿试制度化', '废除科举', '只考诗赋', '只考经义'], answer: 0, explain: '扩大。' },
          { stem: '宋代社会的新特点是：', options: ['市民阶层壮大、宗族普及', '贵族垄断', '奴隶制', '部落制'], answer: 0, explain: '市民。' }
        ],
        doc: { lead: '这一章讲宋代。', sections: [
          { id: 'politics', title: '政治', html: `<p>二府三司、重文轻武、台谏；王安石变法与党争。</p>` },
          { id: 'society', title: '社会', html: `<p>科举社会、宗族、市民文化、理学兴起。</p>` }
        ], refs: [] } },
      { title: '辽金元', brief: '北方政权。',
        q: [
          { stem: '辽朝的南北面官制体现：', options: ['因俗而治', '全盘汉化', '排斥汉制', '分封'], answer: 0, explain: '因俗。' },
          { stem: '金朝的猛安谋克是：', options: ['军政合一的组织', '税收制度', '科举', '宗教'], answer: 0, explain: '军政。' },
          { stem: '元朝行省制的影响是：', options: ['奠定后世地方行政格局', '废除地方', '恢复分封', '无影响'], answer: 0, explain: '行省。' }
        ],
        doc: { lead: '这一章讲辽金元。', sections: [
          { id: 'liao', title: '辽金', html: `<p>南北面官、猛安谋克；农牧并存的制度。</p>` },
          { id: 'yuan', title: '元', html: `<p>行省、宣政院、四等人制；中外交流。</p>` }
        ], refs: [] } },
      { title: '明代', brief: '专制与商品经济。',
        q: [
          { stem: '明朝强化专制的措施是：', options: ['废丞相、设内阁、厂卫', '设军机处', '设三省', '分封'], answer: 0, explain: '废相。' },
          { stem: '一条鞭法的核心是：', options: ['赋役合并、折银征收', '按丁征税', '按田征税唯一', '免役'], answer: 0, explain: '折银。' },
          { stem: '明代对外关系的特点是：', options: ['朝贡贸易与海禁并存', '完全开放', '完全封闭', '殖民扩张'], answer: 0, explain: '朝贡。' }
        ],
        doc: { lead: '这一章讲明代。', sections: [
          { id: 'politics', title: '政治', html: `<p>废相、内阁、厂卫、科举八股。</p>` },
          { id: 'economy', title: '经济与对外', html: `<p>一条鞭法、白银货币化、朝贡贸易、海禁与走私。</p>` }
        ], refs: [] } },
      { title: '清代前期', brief: '疆域与专制。',
        q: [
          { stem: '清代君主专制强化的标志是：', options: ['军机处', '内阁', '三省', '议会'], answer: 0, explain: '军机处。' },
          { stem: '摊丁入亩的意义是：', options: ['废除人头税、放松人身控制', '增加人头税', '恢复丁税', '取消土地税'], answer: 0, explain: '摊丁。' },
          { stem: '清代疆域治理的特点是：', options: ['因地制宜、多元管理', '单一郡县', '分封', '殖民'], answer: 0, explain: '多元。' }
        ],
        doc: { lead: '这一章讲清前期。', sections: [
          { id: 'autocracy', title: '专制', html: `<p>军机处、密折、文字狱；满汉关系。</p>` },
          { id: 'frontier', title: '疆域', html: `<p>理藩院、盟旗、金瓶掣签、改土归流。</p>` }
        ], refs: [] } },
      { title: '清代后期', brief: '冲击与回应。',
        q: [
          { stem: '鸦片战争后签订的第一个不平等条约是：', options: ['《南京条约》', '《马关条约》', '《辛丑条约》', '《北京条约》'], answer: 0, explain: '南京。' },
          { stem: '洋务运动的核心主张是：', options: ['师夷长技以自强', '变法维新', '民主共和', '全盘西化'], answer: 0, explain: '自强。' },
          { stem: '清末新政的内容包括：', options: ['废科举、编练新军、预备立宪', '恢复科举', '闭关', '分封'], answer: 0, explain: '新政。' }
        ],
        doc: { lead: '这一章讲晚清。', sections: [
          { id: 'impact', title: '冲击', html: `<p>两次鸦片战争、甲午、八国联军；条约体系。</p>` },
          { id: 'response', title: '回应', html: `<p>洋务、维新、新政、立宪；改革与革命的赛跑。</p>` }
        ], refs: [] } },
      { title: '制度与社会', brief: '长时段的变化。',
        q: [
          { stem: '中国古代选官制度的演变是：', options: ['世卿世禄—察举—九品中正—科举', '科举—察举', '分封—科举', '察举—世袭'], answer: 0, explain: '演变。' },
          { stem: '赋税制度演变的趋势是：', options: ['从人丁为主到土地资产为主', '从土地到人丁', '越来越复杂', '不变'], answer: 0, explain: '趋势。' },
          { stem: '中国古代经济重心的南移完成于：', options: ['南宋', '汉代', '唐代', '明代'], answer: 0, explain: '南宋。' }
        ],
        doc: { lead: '这一章讲长时段。', sections: [
          { id: 'institution', title: '制度', html: `<p>选官、赋税、地方行政的演变线索。</p>` },
          { id: 'economy', title: '经济', html: `<p>经济重心南移、白银货币化、人口与农业。</p>` }
        ], refs: [] } },
      { title: '史料研读', brief: '怎么读史书。',
        q: [
          { stem: '读正史应先了解：', options: ['体例、作者、成书背景', '只读正文', '只看注释', '只看评价'], answer: 0, explain: '体例。' },
          { stem: '纪传体与编年体的区别是：', options: ['以人物 vs 以时间为纲', '是否官方', '是否完整', '是否纪年'], answer: 0, explain: '体例。' },
          { stem: '使用史料时应：', options: ['批判性阅读、参照他证', '全盘接受', '只看结论', '忽略立场'], answer: 0, explain: '批判。' }
        ],
        doc: { lead: '这一章讲读法。', sections: [
          { id: 'genre', title: '体例', html: `<p>纪传、编年、纪事本末、政书、笔记、方志。</p>` },
          { id: 'critical', title: '批判', html: `<p>作者立场、史料来源、叙事策略；多重证据。</p>` }
        ], refs: [] } }
    ] },
    { name: '中国近现代史', chapters: [
      { title: '鸦片战争与条约体系', brief: '近代的开端。',
        q: [
          { stem: '鸦片战争爆发的直接原因是：', options: ['禁烟运动与英国利益冲突', '贸易逆差', '宗教', '边界'], answer: 0, explain: '禁烟。' },
          { stem: '《南京条约》的主要内容不包括：', options: ['割香港岛', '赔款', '五口通商', '割台湾'], answer: 3, explain: '台湾在马关。' },
          { stem: '不平等条约体系的核心是：', options: ['领事裁判权、协定关税、最惠国待遇', '自由贸易', '平等互惠', '关税自主'], answer: 0, explain: '特权。' }
        ],
        doc: { lead: '这一章讲开端。', sections: [
          { id: 'war', title: '战争', html: `<p>禁烟、战争过程、三元里；两次鸦片战争。</p>` },
          { id: 'treaty', title: '条约', html: `<p>南京、天津、北京条约；领事裁判权与协定关税。</p>` }
        ], refs: [] } },
      { title: '太平天国与洋务运动', brief: '内忧与自强。',
        q: [
          { stem: '太平天国的纲领性文件是：', options: ['《天朝田亩制度》', '《资政新篇》', '《海国图志》', '《劝学篇》'], answer: 0, explain: '田亩。' },
          { stem: '洋务运动的代表人物是：', options: ['曾国藩、李鸿章、左宗棠、张之洞', '康有为', '孙中山', '梁启超'], answer: 0, explain: '洋务派。' },
          { stem: '洋务运动失败的根本原因是：', options: ['只学技术不改制度', '资金不足', '人才缺乏', '外国干涉'], answer: 0, explain: '制度。' }
        ],
        doc: { lead: '这一章讲自强。', sections: [
          { id: 'taiping', title: '太平天国', html: `<p>起义、制度、失败原因；对地方权力结构的影响。</p>` },
          { id: 'selfstrength', title: '洋务', html: `<p>军工民用、新式学堂、派遣留学；甲午一战而败。</p>` }
        ], refs: [] } },
      { title: '甲午与戊戌', brief: '变法与觉醒。',
        q: [
          { stem: '《马关条约》的严重影响是：', options: ['割台湾、巨额赔款、允许设厂', '开放五口', '割香港', '赔款最少'], answer: 0, explain: '马关。' },
          { stem: '戊戌变法失败的直接原因是：', options: ['慈禧发动政变', '缺乏理论', '没有军队', '外国干涉'], answer: 0, explain: '政变。' },
          { stem: '甲午战后的社会思潮是：', options: ['变法维新与救亡图存', '洋务自强', '闭关', '复古'], answer: 0, explain: '维新。' }
        ],
        doc: { lead: '这一章讲转折。', sections: [
          { id: 'jiawu', title: '甲午', html: `<p>战争过程、马关条约、瓜分狂潮；民族危机加深。</p>` },
          { id: 'reform', title: '戊戌', html: `<p>康梁变法、百日维新、失败原因与影响。</p>` }
        ], refs: [] } },
      { title: '辛亥革命', brief: '帝制终结。',
        q: [
          { stem: '同盟会的政治纲领是：', options: ['驱除鞑虏、恢复中华、创立民国、平均地权', '自强求富', '变法维新', '君主立宪'], answer: 0, explain: '三民主义。' },
          { stem: '辛亥革命的历史意义是：', options: ['推翻帝制、建立共和', '完成反帝反封建', '实现现代化', '统一全国'], answer: 0, explain: '共和。' },
          { stem: '辛亥革命的局限是：', options: ['未改变半殖民地半封建社会性质', '没有推翻皇帝', '没有建都', '没有军队'], answer: 0, explain: '局限。' }
        ],
        doc: { lead: '这一章讲革命。', sections: [
          { id: 'prepare', title: '准备', html: `<p>兴中会、同盟会、三民主义；多次起义。</p>` },
          { id: 'revolution', title: '革命', html: `<p>武昌起义、民国建立、临时约法；袁世凯窃权。</p>` }
        ], refs: [] } },
      { title: '五四与国民革命', brief: '新文化与新政党。',
        q: [
          { stem: '五四运动的直接导火线是：', options: ['巴黎和会外交失败', '新文化运动', '十月革命', '五四文学'], answer: 0, explain: '和会。' },
          { stem: '新文化运动的两大旗帜是：', options: ['民主与科学', '自由与平等', '救亡与启蒙', '变法与革命'], answer: 0, explain: '德赛。' },
          { stem: '国民革命的主要成果是：', options: ['北伐胜利进军、动摇北洋统治', '建立新中国', '完成土改', '统一全国'], answer: 0, explain: '北伐。' }
        ],
        doc: { lead: '这一章讲觉醒。', sections: [
          { id: 'may4', title: '五四', html: `<p>新文化运动、马克思主义传播、五四运动。</p>` },
          { id: 'revolution', title: '国民革命', html: `<p>国共合作、北伐、工农运动；失败与教训。</p>` }
        ], refs: [] } },
      { title: '南京十年与抗战', brief: '危机与抗争。',
        q: [
          { stem: '抗日战争全面爆发的标志是：', options: ['七七事变', '九一八事变', '华北事变', '西安事变'], answer: 0, explain: '七七。' },
          { stem: '抗日民族统一战线正式形成的标志是：', options: ['国共合作宣言发表', '西安事变', '七七事变', '皖南事变'], answer: 0, explain: '合作。' },
          { stem: '抗战胜利的历史意义是：', options: ['近代以来反侵略第一次完全胜利', '结束内战', '完成现代化', '统一全国'], answer: 0, explain: '胜利。' }
        ],
        doc: { lead: '这一章讲抗战。', sections: [
          { id: 'nanjing', title: '南京十年', html: `<p>经济建设、新生活运动、围剿；社会矛盾。</p>` },
          { id: 'war', title: '抗战', html: `<p>局部与全面抗战、统一战线、敌后战场、胜利。</p>` }
        ], refs: [] } },
      { title: '解放战争与新中国', brief: '新中国的成立。',
        q: [
          { stem: '解放战争战略决战的三大战役是：', options: ['辽沈、淮海、平津', '台儿庄、武汉、长沙', '百团、平型关、忻口', '渡江、上海、广州'], answer: 0, explain: '三大战役。' },
          { stem: '中华人民共和国成立的时间是：', options: ['1949 年 10 月 1 日', '1949 年 9 月', '1945 年', '1950 年'], answer: 0, explain: '开国。' },
          { stem: '新中国成立的历史意义是：', options: ['结束半殖民地半封建社会、人民当家作主', '完成现代化', '统一全国', '结束冷战'], answer: 0, explain: '意义。' }
        ],
        doc: { lead: '这一章讲建国。', sections: [
          { id: 'civilwar', title: '解放战争', html: `<p>重庆谈判、战略进攻、三大战役、渡江。</p>` },
          { id: 'prc', title: '新中国', html: `<p>开国大典、共同纲领、土地改革；社会主义改造。</p>` }
        ], refs: [] } },
      { title: '近现代史研究方法', brief: '怎么看这段历史。',
        q: [
          { stem: '研究近现代史应特别重视：', options: ['档案、报刊、口述等多源史料', '只有正史', '只有回忆录', '只有外国档案'], answer: 0, explain: '多源。' },
          { stem: '评价历史事件应：', options: ['放在具体历史条件下', '以今律古', '单一标准', '道德审判'], answer: 0, explain: '语境。' },
          { stem: '革命史观与现代化史观的关系是：', options: ['可以互补', '互斥', '相同', '无关'], answer: 0, explain: '互补。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'sources', title: '史料', html: `<p>档案、报刊、日记、口述、影像；多方互证。</p>` },
          { id: 'perspective', title: '视角', html: `<p>革命史、现代化、社会史、全球史；避免单一叙事。</p>` }
        ], refs: [] } }
    ] },
    { name: '世界古代史', chapters: [
      { title: '古代近东', brief: '文明的摇篮。',
        q: [
          { stem: '世界上最早的文字之一出现在：', options: ['两河流域（楔形文字）', '埃及（象形）', '印度', '中国'], answer: 0, explain: '楔形。' },
          { stem: '《汉谟拉比法典》的特点是：', options: ['刻于石柱、同态复仇', '成文宪法', '民主', '宗教'], answer: 0, explain: '法典。' },
          { stem: '尼罗河对埃及文明的作用是：', options: ['农业与统一的基础', '交通唯一', '宗教', '军事'], answer: 0, explain: '农业。' }
        ],
        doc: { lead: '这一章讲近东。', sections: [
          { id: 'mesopotamia', title: '两河', html: `<p>苏美尔、巴比伦、亚述；楔形文字、法典、城市。</p>` },
          { id: 'egypt', title: '埃及', html: `<p>法老、金字塔、象形文字、来世观。</p>` }
        ], refs: [] } },
      { title: '古希腊', brief: '城邦与民主。',
        q: [
          { stem: '雅典民主的实质是：', options: ['成年男性公民的直接民主', '全民民主', '代议制', '君主制'], answer: 0, explain: '局限。' },
          { stem: '希波战争的影响是：', options: ['希腊城邦保存并走向繁荣', '希腊灭亡', '罗马崛起', '无影响'], answer: 0, explain: '保存。' },
          { stem: '亚历山大帝国的意义是：', options: ['希腊化时代的开启', '罗马建立', '中世纪开始', '无影响'], answer: 0, explain: '希腊化。' }
        ],
        doc: { lead: '这一章讲希腊。', sections: [
          { id: 'polis', title: '城邦', html: `<p>雅典民主、斯巴达寡头；公民与非公民。</p>` },
          { id: 'culture', title: '文化', html: `<p>哲学、戏剧、史学、建筑；希腊化世界。</p>` }
        ], refs: [] } },
      { title: '古罗马', brief: '共和到帝国。',
        q: [
          { stem: '罗马共和国的权力结构是：', options: ['执政官、元老院、公民大会', '皇帝独裁', '议会', '分封'], answer: 0, explain: '共和。' },
          { stem: '罗马法的发展线索是：', options: ['十二铜表法—公民法—万民法—法典', '只有法典', '只有习惯法', '无发展'], answer: 0, explain: '演变。' },
          { stem: '罗马帝国衰亡的原因包括：', options: ['政治腐败、经济衰退、外族入侵', '只有外族', '只有宗教', '只有气候'], answer: 0, explain: '多重。' }
        ],
        doc: { lead: '这一章讲罗马。', sections: [
          { id: 'republic', title: '共和', html: `<p>贵族与平民斗争、行省、布匿战争。</p>` },
          { id: 'empire', title: '帝国', html: `<p>屋大维、元首制、罗马法、基督教；分裂与衰亡。</p>` }
        ], refs: [] } },
      { title: '拜占庭与伊斯兰', brief: '中世纪的另一端。',
        q: [
          { stem: '拜占庭帝国的法典成就是：', options: ['《查士丁尼法典》', '《汉谟拉比法典》', '《拿破仑法典》', '《大宪章》'], answer: 0, explain: '查士丁尼。' },
          { stem: '伊斯兰教创立于：', options: ['7 世纪阿拉伯半岛', '1 世纪', '5 世纪', '10 世纪'], answer: 0, explain: '穆罕默德。' },
          { stem: '阿拉伯帝国对文明的贡献是：', options: ['保存与传播古典学术', '只有宗教', '只有战争', '无贡献'], answer: 0, explain: '学术。' }
        ],
        doc: { lead: '这一章讲东地中海。', sections: [
          { id: 'byzantium', title: '拜占庭', html: `<p>君士坦丁堡、查士丁尼、东正教；千年帝国。</p>` },
          { id: 'islam', title: '伊斯兰', html: `<p>穆罕默德、哈里发、阿拔斯王朝；翻译运动与科学。</p>` }
        ], refs: [] } },
      { title: '中世纪西欧', brief: '封建与教会。',
        q: [
          { stem: '西欧封建制度的核心是：', options: ['封君封臣与采邑', '中央集权', '民主', '殖民'], answer: 0, explain: '封建。' },
          { stem: '中世纪大学的兴起说明：', options: ['知识与城市的发展', '教会衰落', '国家强大', '农业衰退'], answer: 0, explain: '大学。' },
          { stem: '黑死病的影响是：', options: ['人口锐减、社会结构松动', '人口增加', '经济繁荣', '无影响'], answer: 0, explain: '黑死病。' }
        ],
        doc: { lead: '这一章讲西欧。', sections: [
          { id: 'feudal', title: '封建', html: `<p>封君封臣、庄园、农奴制；王权与教权。</p>` },
          { id: 'revival', title: '复兴', html: `<p>城市、商业、大学、经院哲学；危机与黑死病。</p>` }
        ], refs: [] } },
      { title: '文艺复兴与大航海', brief: '人的发现与世界的发现。',
        q: [
          { stem: '文艺复兴的核心思想是：', options: ['人文主义', '禁欲', '王权', '科学主义'], answer: 0, explain: '人文。' },
          { stem: '新航路开辟的直接动机是：', options: ['寻找通往东方的新商路', '科学探索', '传教唯一', '移民'], answer: 0, explain: '商路。' },
          { stem: '大航海的影响是：', options: ['世界市场与殖民体系开始形成', '孤立', '无影响', '仅文化交流'], answer: 0, explain: '世界。' }
        ],
        doc: { lead: '这一章讲转折。', sections: [
          { id: 'renaissance', title: '文艺复兴', html: `<p>意大利、人文主义、艺术与科学；北方文艺复兴。</p>` },
          { id: 'voyages', title: '大航海', html: `<p>葡西航海、哥伦布、麦哲伦；殖民与三角贸易。</p>` }
        ], refs: [] } },
      { title: '早期殖民与全球联系', brief: '世界连成一体。',
        q: [
          { stem: '哥伦布大交换的影响是：', options: ['物种、疾病、人口的全球流动', '只有贸易', '只有战争', '无影响'], answer: 0, explain: '交换。' },
          { stem: '三角贸易的核心是：', options: ['欧洲—非洲—美洲的奴役贸易', '亚洲贸易', '丝绸', '香料唯一'], answer: 0, explain: '奴隶贸易。' },
          { stem: '早期殖民体系的特点是：', options: ['重商主义、垄断贸易、掠夺', '自由贸易', '平等', '援助'], answer: 0, explain: '重商。' }
        ],
        doc: { lead: '这一章讲全球。', sections: [
          { id: 'exchange', title: '大交换', html: `<p>作物、牲畜、疾病；人口结构与生态改变。</p>` },
          { id: 'mercantilism', title: '重商主义', html: `<p>贸易垄断、殖民地、白银流动；世界市场雏形。</p>` }
        ], refs: [] } },
      { title: '史料与考古', brief: '怎么研究上古世界。',
        q: [
          { stem: '研究古希腊史的重要史料是：', options: ['希罗多德、修昔底德著作与考古', '只有铭文', '只有神话', '只有后人著作'], answer: 0, explain: '多源。' },
          { stem: '考古学对世界古代史的作用是：', options: ['提供实物证据与年代框架', '装饰', '替代文献', '无作用'], answer: 0, explain: '实物。' },
          { stem: '使用古典文献应：', options: ['注意作者立场与时代', '全盘接受', '只看结论', '忽略版本'], answer: 0, explain: '批判。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'literary', title: '文献', html: `<p>史诗、史著、戏剧、铭文；作者与语境。</p>` },
          { id: 'archaeology', title: '考古', html: `<p>遗址、器物、年代；文献与实物的互证。</p>` }
        ], refs: [] } }
    ] },
    { name: '世界近现代史', chapters: [
      { title: '宗教改革与启蒙', brief: '思想的解放。',
        q: [
          { stem: '宗教改革始于：', options: ['1517 年马丁·路德', '14 世纪', '18 世纪', '19 世纪'], answer: 0, explain: '路德。' },
          { stem: '启蒙运动的核心是：', options: ['理性、自由、平等', '信仰', '王权', '传统'], answer: 0, explain: '理性。' },
          { stem: '启蒙思想对革命的影响是：', options: ['提供理论武器', '无影响', '反对革命', '只影响文化'], answer: 0, explain: '理论。' }
        ],
        doc: { lead: '这一章讲思想。', sections: [
          { id: 'reformation', title: '宗教改革', html: `<p>路德、加尔文；新教伦理与政治后果。</p>` },
          { id: 'enlightenment', title: '启蒙', html: `<p>洛克、孟德斯鸠、卢梭、康德；三权分立与主权在民。</p>` }
        ], refs: [] } },
      { title: '英美法革命', brief: '现代政治的开端。',
        q: [
          { stem: '英国光荣革命的意义是：', options: ['确立君主立宪与议会主权', '建立共和', '废除议会', '恢复专制'], answer: 0, explain: '立宪。' },
          { stem: '美国独立战争的思想依据是：', options: ['天赋人权与社会契约', '君权神授', '等级制', '殖民'], answer: 0, explain: '契约。' },
          { stem: '法国大革命的口号是：', options: ['自由、平等、博爱', '秩序', '王权', '信仰'], answer: 0, explain: '口号。' }
        ],
        doc: { lead: '这一章讲革命。', sections: [
          { id: 'england', title: '英国', html: `<p>内战、光荣革命、权利法案；议会制。</p>` },
          { id: 'france', title: '美法', html: `<p>独立宣言、宪法；人权宣言、雅各宾、拿破仑。</p>` }
        ], refs: [] } },
      { title: '工业革命', brief: '机器改变世界。',
        q: [
          { stem: '工业革命首先发生在：', options: ['英国', '法国', '德国', '美国'], answer: 0, explain: '英国。' },
          { stem: '工业革命的影响不包括：', options: ['城市化', '工人阶级形成', '世界市场扩大', '人口锐减'], answer: 3, explain: '人口增长。' },
          { stem: '第二次工业革命的特点是：', options: ['电力、内燃机、化学工业', '蒸汽机唯一', '手工工场', '农业'], answer: 0, explain: '电气。' }
        ],
        doc: { lead: '这一章讲工业。', sections: [
          { id: 'first', title: '第一次', html: `<p>蒸汽机、纺织、铁路；工厂制度。</p>` },
          { id: 'second', title: '第二次', html: `<p>电力、钢铁、化工、汽车；垄断与帝国主义。</p>` }
        ], refs: [] } },
      { title: '民族国家与帝国主义', brief: '世界的重组。',
        q: [
          { stem: '德意志统一的关键人物是：', options: ['俾斯麦', '马克思', '拿破仑', '林肯'], answer: 0, explain: '俾斯麦。' },
          { stem: '帝国主义瓜分非洲的后果是：', options: ['人为划界、长期冲突', '和平发展', '无影响', '民族融合'], answer: 0, explain: '划界。' },
          { stem: '日本明治维新的核心是：', options: ['殖产兴业、文明开化、富国强兵', '闭关', '复古', '殖民'], answer: 0, explain: '维新。' }
        ],
        doc: { lead: '这一章讲扩张。', sections: [
          { id: 'nation', title: '民族国家', html: `<p>意德统一、民族主义；美国内战与重建。</p>` },
          { id: 'empire', title: '帝国主义', html: `<p>瓜分非洲、瓜分亚洲、势力范围；殖民体系。</p>` }
        ], refs: [] } },
      { title: '两次世界大战', brief: '总体战。',
        q: [
          { stem: '第一次世界大战的导火线是：', options: ['萨拉热窝事件', '慕尼黑', '珍珠港', '九一八'], answer: 0, explain: '萨拉热窝。' },
          { stem: '凡尔赛—华盛顿体系的问题是：', options: ['埋下新的冲突隐患', '公平合理', '促进和平', '解决所有问题'], answer: 0, explain: '隐患。' },
          { stem: '第二次世界大战的转折点包括：', options: ['斯大林格勒、中途岛、阿拉曼', '凡尔登', '马恩河', '索姆河'], answer: 0, explain: '转折。' }
        ],
        doc: { lead: '这一章讲战争。', sections: [
          { id: 'ww1', title: '一战', html: `<p>同盟国与协约国、总体战、凡尔赛体系。</p>` },
          { id: 'ww2', title: '二战', html: `<p>法西斯扩张、反法西斯同盟、雅尔塔体系。</p>` }
        ], refs: [] } },
      { title: '冷战与全球化', brief: '两极到多极。',
        q: [
          { stem: '冷战开始的标志是：', options: ['杜鲁门主义', '马歇尔计划', '北约成立', '铁幕演说'], answer: 0, explain: '杜鲁门。' },
          { stem: '冷战结束的标志是：', options: ['苏联解体', '柏林墙倒塌', '华约解散', '两德统一'], answer: 0, explain: '解体。' },
          { stem: '全球化的表现包括：', options: ['贸易、资本、技术、人员的跨国流动', '闭关', '区域隔绝', '单一市场'], answer: 0, explain: '流动。' }
        ],
        doc: { lead: '这一章讲当代。', sections: [
          { id: 'coldwar', title: '冷战', html: `<p>两极格局、马歇尔计划、北约华约、代理人战争。</p>` },
          { id: 'global', title: '全球化', html: `<p>布雷顿森林、WTO、跨国公司、区域一体化。</p>` }
        ], refs: [] } },
      { title: '亚非拉现代史', brief: '去殖民与现代化。',
        q: [
          { stem: '印度独立的领导人是：', options: ['甘地', '尼赫鲁唯一', '真纳', '苏加诺'], answer: 0, explain: '甘地。' },
          { stem: '不结盟运动的意义是：', options: ['第三世界的独立声音', '军事同盟', '经济组织', '宗教'], answer: 0, explain: '不结盟。' },
          { stem: '发展中国家的现代化困境包括：', options: ['依附、债务、政治不稳定', '人口少', '资源太多', '无困境'], answer: 0, explain: '困境。' }
        ],
        doc: { lead: '这一章讲第三世界。', sections: [
          { id: 'decolonization', title: '去殖民', html: `<p>印巴分治、非洲独立年、民族解放运动。</p>` },
          { id: 'development', title: '发展', html: `<p>进口替代、出口导向、依附理论；区域合作。</p>` }
        ], refs: [] } },
      { title: '世界现代史研究方法', brief: '怎么研究。',
        q: [
          { stem: '研究世界现代史应重视：', options: ['多国档案与多语种史料', '只有本国档案', '只有回忆录', '只有新闻'], answer: 0, explain: '多源。' },
          { stem: '全球史视角的价值是：', options: ['看到联系与比较', '只看一国', '只看西方', '忽略差异'], answer: 0, explain: '联系。' },
          { stem: '研究战争史应避免：', options: ['单一叙事与英雄史观', '多源史料', '比较研究', '平民视角'], answer: 0, explain: '多元。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'sources', title: '史料', html: `<p>外交档案、报刊、回忆录、影像；多语种与跨国比较。</p>` },
          { id: 'approach', title: '视角', html: `<p>全球史、社会史、性别史、环境史；避免单一中心。</p>` }
        ], refs: [] } }
    ] },
    { name: '中国史学史', chapters: [
      { title: '先秦史学', brief: '史官与经典。',
        q: [
          { stem: '先秦史学的代表著作是：', options: ['《春秋》《左传》《国语》', '《史记》', '《汉书》', '《资治通鉴》'], answer: 0, explain: '先秦。' },
          { stem: '孔子作《春秋》的特点是：', options: ['寓褒贬于记事（春秋笔法）', '详细叙事', '纪传体', '通史'], answer: 0, explain: '笔法。' },
          { stem: '先秦史官的作用是：', options: ['记录与保存历史', '军事', '税收', '教育唯一'], answer: 0, explain: '史官。' }
        ],
        doc: { lead: '这一章讲先秦。', sections: [
          { id: 'official', title: '史官', html: `<p>左史记言、右史记事；史官文化。</p>` },
          { id: 'classics', title: '典籍', html: `<p>《尚书》《春秋》《左传》《国语》《战国策》。</p>` }
        ], refs: [] } },
      { title: '《史记》与《汉书》', brief: '纪传体的确立。',
        q: [
          { stem: '《史记》的体例是：', options: ['纪传体通史', '编年体', '纪事本末体', '国别体'], answer: 0, explain: '纪传通史。' },
          { stem: '《汉书》的体例是：', options: ['纪传体断代史', '通史', '编年体', '政书'], answer: 0, explain: '断代。' },
          { stem: '司马迁的史学精神是：', options: ['实录与通古今之变', '只褒不贬', '只记帝王', '忽略经济'], answer: 0, explain: '实录。' }
        ],
        doc: { lead: '这一章讲两汉。', sections: [
          { id: 'shiji', title: '《史记》', html: `<p>本纪、表、书、世家、列传；通史与实录。</p>` },
          { id: 'hanshu', title: '《汉书》', html: `<p>断代为史、十志；班固的史学。</p>` }
        ], refs: [] } },
      { title: '魏晋南北朝史学', brief: '多体并进。',
        q: [
          { stem: '这一时期史学的新发展是：', options: ['起居注、地方志、家传兴起', '只有正史', '废除史学', '只有编年'], answer: 0, explain: '多样。' },
          { stem: '《后汉书》的作者是：', options: ['范晔', '班固', '陈寿', '司马彪'], answer: 0, explain: '范晔。' },
          { stem: '《三国志》的特点是：', options: ['纪传体、分国叙述', '编年', '通史', '政书'], answer: 0, explain: '三国。' }
        ],
        doc: { lead: '这一章讲魏晋。', sections: [
          { id: 'works', title: '著作', html: `<p>《后汉书》《三国志》《宋书》；注史与谱学。</p>` },
          { id: 'diversity', title: '多样', html: `<p>起居注、实录雏形、地志、家传；史学独立。</p>` }
        ], refs: [] } },
      { title: '唐代史学', brief: '官修与通典。',
        q: [
          { stem: '唐代设馆修史的意义是：', options: ['官修史书制度化', '废除私修', '只有实录', '无影响'], answer: 0, explain: '官修。' },
          { stem: '《史通》的作者是：', options: ['刘知几', '杜佑', '司马光', '郑樵'], answer: 0, explain: '刘知几。' },
          { stem: '《通典》属于：', options: ['政书（典章制度史）', '纪传体', '编年体', '方志'], answer: 0, explain: '政书。' }
        ],
        doc: { lead: '这一章讲唐代。', sections: [
          { id: 'official', title: '官修', html: `<p>史馆、监修；《晋书》《隋书》等。</p>` },
          { id: 'theory', title: '理论', html: `<p>《史通》的史学批评；《通典》的制度史。</p>` }
        ], refs: [] } },
      { title: '宋代史学', brief: '通鉴与考据。',
        q: [
          { stem: '《资治通鉴》的体例是：', options: ['编年体通史', '纪传体', '纪事本末', '政书'], answer: 0, explain: '编年。' },
          { stem: '《通志》的作者是：', options: ['郑樵', '司马光', '朱熹', '欧阳修'], answer: 0, explain: '郑樵。' },
          { stem: '宋代考据学的代表是：', options: ['《容斋随笔》等笔记考证', '只有正史', '只有类书', '只有方志'], answer: 0, explain: '考据。' }
        ],
        doc: { lead: '这一章讲宋代。', sections: [
          { id: 'tongjian', title: '《通鉴》', html: `<p>编年体、考异、史料批判；通鉴学。</p>` },
          { id: 'kaoju', title: '考据', html: `<p>金石学、笔记考证、目录学；疑古与求证。</p>` }
        ], refs: [] } },
      { title: '明清史学', brief: '实录与考据学。',
        q: [
          { stem: '明清史学的重要成就是：', options: ['实录、方志与乾嘉考据', '废除史学', '只有小说', '只有戏曲'], answer: 0, explain: '考据。' },
          { stem: '乾嘉学派的贡献是：', options: ['考据、校勘、辑佚', '理论创新', '史观革命', '白话'], answer: 0, explain: '考据。' },
          { stem: '《文史通义》的作者是：', options: ['章学诚', '戴震', '顾炎武', '黄宗羲'], answer: 0, explain: '章学诚。' }
        ],
        doc: { lead: '这一章讲明清。', sections: [
          { id: 'kaoju', title: '考据', html: `<p>乾嘉学派、校勘辑佚、音韵训诂；实证传统。</p>` },
          { id: 'theory', title: '理论', html: `<p>章学诚"六经皆史"；史意与史德。</p>` }
        ], refs: [] } },
      { title: '近代史学', brief: '新史学的兴起。',
        q: [
          { stem: '中国近代新史学的代表是：', options: ['梁启超《新史学》', '章学诚', '刘知几', '司马光'], answer: 0, explain: '梁启超。' },
          { stem: '新史学的主张是：', options: ['进化史观、民史、方法革新', '复古', '只考据', '只写帝王'], answer: 0, explain: '革新。' },
          { stem: '王国维的贡献是：', options: ['二重证据法与古史新证', '新史学', '考据学', '方志'], answer: 0, explain: '二重证据。' }
        ],
        doc: { lead: '这一章讲近代。', sections: [
          { id: 'newhistory', title: '新史学', html: `<p>梁启超、进化论、民众史；史料与方法。</p>` },
          { id: 'method', title: '方法', html: `<p>王国维二重证据、傅斯年史料学、顾颉刚疑古。</p>` }
        ], refs: [] } },
      { title: '马克思主义史学', brief: '唯物史观的中国化。',
        q: [
          { stem: '中国马克思主义史学的奠基作是：', options: ['《中国古代社会研究》', '《新史学》', '《史通》', '《文史通义》'], answer: 0, explain: '郭沫若。' },
          { stem: '五朵金花讨论的问题包括：', options: ['古史分期、农民战争、资本主义萌芽', '只有分期', '只有农民', '只有萌芽'], answer: 0, explain: '多议题。' },
          { stem: '马克思主义史学的核心方法是：', options: ['唯物史观与阶级分析', '考据唯一', '叙事唯一', '心理分析'], answer: 0, explain: '唯物史观。' }
        ],
        doc: { lead: '这一章讲当代。', sections: [
          { id: 'founders', title: '奠基', html: `<p>郭沫若、范文澜、翦伯赞、侯外庐；社会形态讨论。</p>` },
          { id: 'development', title: '发展', html: `<p>五朵金花、区域研究、社会史；方法与史料并重。</p>` }
        ], refs: [] } }
    ] },
    { name: '考古学通论', chapters: [
      { title: '考古学是什么', brief: '通过实物研究过去。',
        q: [
          { stem: '考古学的研究对象是：', options: ['古代人类活动的实物遗存', '文献', '语言', '思想'], answer: 0, explain: '实物。' },
          { stem: '考古学与历史学的关系是：', options: ['互补互证', '相互替代', '无关', '对立'], answer: 0, explain: '互补。' },
          { stem: '考古学的核心方法是：', options: ['田野调查、发掘与整理', '文献考证', '访谈', '实验'], answer: 0, explain: '田野。' }
        ],
        doc: { lead: '这一章讲定义。', sections: [
          { id: 'object', title: '对象', html: `<p>遗迹与遗物；人类行为的物质遗留。</p>` },
          { id: 'method', title: '方法', html: `<p>调查、发掘、记录、整理、研究；多学科合作。</p>` }
        ], refs: [] } },
      { title: '地层学与类型学', brief: '两个基本功。',
        q: [
          { stem: '地层学的基本原理是：', options: ['叠压关系决定相对年代', '器物大小', '颜色', '重量'], answer: 0, explain: '叠压。' },
          { stem: '类型学的作用是：', options: ['通过器物形态演变排序与断代', '测量重量', '化学分析', '摄影'], answer: 0, explain: '排序。' },
          { stem: '地层与类型学的关系是：', options: ['相互结合确定年代与序列', '相互排斥', '无关', '只有地层'], answer: 0, explain: '结合。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'strata', title: '地层学', html: `<p>叠压、打破、共生关系；层位与单位。</p>` },
          { id: 'typology', title: '类型学', html: `<p>形态分类、演变序列、式别划分；与地层结合。</p>` }
        ], refs: [] } },
      { title: '田野考古', brief: '怎么挖。',
        q: [
          { stem: '考古发掘的基本原则是：', options: ['按地层单位发掘、完整记录', '快速清理', '只取珍品', '随意开挖'], answer: 0, explain: '记录。' },
          { stem: '探方与探沟的作用是：', options: ['控制发掘范围与记录单位', '装饰', '排水', '运输'], answer: 0, explain: '布方。' },
          { stem: '发掘记录应包括：', options: ['文字、绘图、照片、测量数据', '只有照片', '只有文字', '只有器物'], answer: 0, explain: '多源。' }
        ],
        doc: { lead: '这一章讲发掘。', sections: [
          { id: 'procedure', title: '程序', html: `<p>调查、试掘、布方、清理、记录、提取、整理。</p>` },
          { id: 'record', title: '记录', html: `<p>日记、图纸、影像、三维数据；可复原性。</p>` }
        ], refs: [] } },
      { title: '年代学', brief: '什么时候。',
        q: [
          { stem: '相对年代与绝对年代的区别是：', options: ['先后关系 vs 具体年代', '新旧 vs 早晚', '地层 vs 类型', '国内 vs 国外'], answer: 0, explain: '两类。' },
          { stem: '碳十四测年的适用范围是：', options: ['数万年内的有机遗存', '所有材料', '金属', '石器'], answer: 0, explain: '有机。' },
          { stem: '树轮校正的作用是：', options: ['校正碳十四年代偏差', '测量重量', '分析成分', '拍照'], answer: 0, explain: '校正。' }
        ],
        doc: { lead: '这一章讲年代。', sections: [
          { id: 'relative', title: '相对', html: `<p>地层、类型、共存关系；序列建立。</p>` },
          { id: 'absolute', title: '绝对', html: `<p>碳十四、树轮、热释光、古地磁；校正曲线。</p>` }
        ], refs: [] } },
      { title: '聚落考古', brief: '人怎么生活。',
        q: [
          { stem: '聚落考古关注：', options: ['遗址内外的空间布局与社会组织', '只有器物', '只有墓葬', '只有年代'], answer: 0, explain: '空间。' },
          { stem: '聚落形态研究的意义是：', options: ['了解社会结构与环境适应', '装饰', '断代唯一', '分类'], answer: 0, explain: '社会。' },
          { stem: '环境考古的作用是：', options: ['重建古环境与人地关系', '断代', '分类', '修复'], answer: 0, explain: '环境。' }
        ],
        doc: { lead: '这一章讲聚落。', sections: [
          { id: 'settlement', title: '聚落', html: `<p>房址、窖穴、灰坑、壕沟；功能区与等级。</p>` },
          { id: 'environment', title: '环境', html: `<p>孢粉、植硅体、动物骨骼；生计方式。</p>` }
        ], refs: [] } },
      { title: '墓葬与礼制', brief: '死者的社会。',
        q: [
          { stem: '墓葬研究可以反映：', options: ['社会等级、信仰与习俗', '只有年代', '只有工艺', '只有人口'], answer: 0, explain: '社会。' },
          { stem: '随葬品分析的意义是：', options: ['判断身份、财富与交流', '装饰', '断代唯一', '收藏'], answer: 0, explain: '身份。' },
          { stem: '墓葬发掘的伦理要求是：', options: ['尊重遗骸与当地习俗', '快速清理', '只取随葬品', '公开影像'], answer: 0, explain: '尊重。' }
        ],
        doc: { lead: '这一章讲墓葬。', sections: [
          { id: 'types', title: '类型', html: `<p>土坑、砖室、石室、棺椁；葬式与方向。</p>` },
          { id: 'society', title: '社会', html: `<p>等级、性别、年龄、族属；礼制与信仰。</p>` }
        ], refs: [] } },
      { title: '科技考古', brief: '科学的帮助。',
        q: [
          { stem: '科技考古的领域包括：', options: ['年代测定、成分分析、DNA、同位素', '只有测年', '只有成分', '只有DNA'], answer: 0, explain: '多领域。' },
          { stem: '同位素分析可以研究：', options: ['饮食与迁徙', '年代', '颜色', '重量'], answer: 0, explain: '食谱。' },
          { stem: '古 DNA 研究的价值是：', options: ['揭示人群迁徙与亲缘', '断代唯一', '装饰', '修复'], answer: 0, explain: '人群。' }
        ],
        doc: { lead: '这一章讲科技。', sections: [
          { id: 'dating', title: '测年', html: `<p>碳十四、热释光、光释光、电子自旋共振。</p>` },
          { id: 'analysis', title: '分析', html: `<p>成分、同位素、古 DNA、残留物；保护与修复。</p>` }
        ], refs: [] } },
      { title: '文物保护', brief: '挖出来还要保住。',
        q: [
          { stem: '文物保护的基本原则是：', options: ['最小干预、可逆性、原真性', '彻底修复', '随意更换', '追求美观'], answer: 0, explain: '原则。' },
          { stem: '出土文物保护的首要步骤是：', options: ['现场保护与稳定处理', '清洗', '展出', '拍照'], answer: 0, explain: '稳定。' },
          { stem: '考古遗产保护的意义是：', options: ['保存文化记忆与科学价值', '旅游收入唯一', '装饰', '收藏'], answer: 0, explain: '价值。' }
        ],
        doc: { lead: '这一章讲保护。', sections: [
          { id: 'principles', title: '原则', html: `<p>最小干预、可逆、可识别、原真性；预防性保护。</p>` },
          { id: 'site', title: '遗址', html: `<p>原址保护、遗址公园、大遗址；公众考古。</p>` }
        ], refs: [] } }
    ] },

    /* ---- 大四 ---- */
    { name: '毕业论文', chapters: [
      { title: '选题与学术史', brief: '小问题、有史料。',
        q: [
          { stem: '历史学论文选题的关键是：', options: ['问题具体、史料可及', '题目宏大', '追热点', '导师偏好'], answer: 0, explain: '可行。' },
          { stem: '学术史回顾的作用是：', options: ['定位研究缺口', '凑字数', '展示阅读量', '替代论证'], answer: 0, explain: '缺口。' },
          { stem: '史料准备应：', options: ['尽可能穷尽并分类整理', '只看几条', '只用二手', '凭记忆'], answer: 0, explain: '穷尽。' }
        ],
        doc: { lead: '这一章讲开头。', sections: [
          { id: 'topic', title: '选题', html: `<p>区域、时段、问题三维限定；小题大做。</p>` },
          { id: 'review', title: '学术史', html: `<p>按问题梳理已有研究；指出空白与你的推进。</p>` }
        ], refs: [] } },
      { title: '史料与论证', brief: '用证据说话。',
        q: [
          { stem: '史学论证的核心是：', options: ['史料支撑与逻辑推演', '观点新颖', '文采', '篇幅'], answer: 0, explain: '证据。' },
          { stem: '孤证不立要求：', options: ['多重证据相互印证', '只用一条', '不用证据', '只信权威'], answer: 0, explain: '多证。' },
          { stem: '面对矛盾史料应：', options: ['辨析来源与语境，说明取舍', '忽略', '随便选', '全抄'], answer: 0, explain: '辨析。' }
        ],
        doc: { lead: '这一章讲论证。', sections: [
          { id: 'evidence', title: '证据', html: `<p>史料分类、批判、互证；量化与个案。</p>` },
          { id: 'argument', title: '论证', html: `<p>论点—证据—推理—回应反证；避免过度解释。</p>` }
        ], refs: [] } },
      { title: '写作与规范', brief: '学术表达。',
        q: [
          { stem: '史学论文的语言要求是：', options: ['准确、简洁、有分寸', '华丽', '抒情', '夸张'], answer: 0, explain: '分寸。' },
          { stem: '注释规范的作用是：', options: ['可核查与学术诚信', '凑数', '装饰', '增加篇幅'], answer: 0, explain: '规范。' },
          { stem: '结论应：', options: ['回应问题、说明局限', '提出新问题唯一', '重复引言', '写感想'], answer: 0, explain: '收束。' }
        ],
        doc: { lead: '这一章讲写作。', sections: [
          { id: 'structure', title: '结构', html: `<p>引言、学术史、史料与方法、正文、结论、附录。</p>` },
          { id: 'notes', title: '注释', html: `<p>脚注体例、引文格式、档案编号；图表说明。</p>` }
        ], refs: [] } },
      { title: '答辩', brief: '讲清楚。',
        q: [
          { stem: '答辩陈述的要点是：', options: ['问题、史料、结论、局限', '致谢', '篇幅', '格式'], answer: 0, explain: '四点。' },
          { stem: '被质疑时应：', options: ['承认局限并说明理由', '争辩', '回避', '改口'], answer: 0, explain: '诚恳。' },
          { stem: '答辩前最该准备的是：', options: ['熟悉史料与每条结论的依据', '背稿', 'PPT 模板', '服装'], answer: 0, explain: '依据。' }
        ],
        doc: { lead: '这一章讲答辩。', sections: [
          { id: 'talk', title: '陈述', html: `<p>8–10 分钟；问题—史料—论证—结论。</p>` },
          { id: 'qa', title: '问答', html: `<p>准备可能问题；不会就说不确定并说明如何查证。</p>` }
        ], refs: [] } }
    ] },
    { name: '教学实习', chapters: [
      { title: '历史教学设计', brief: '一堂历史课。',
        q: [
          { stem: '历史教学的核心素养包括：', options: ['唯物史观、时空观念、史料实证、历史解释、家国情怀', '只有知识', '只有考试', '只有故事'], answer: 0, explain: '五素养。' },
          { stem: '史料教学的价值是：', options: ['培养证据意识与探究能力', '装饰', '省事', '替代讲解'], answer: 0, explain: '实证。' },
          { stem: '教学设计应包含：', options: ['目标、重难点、史料、活动、评价', '只有目标', '只有活动', '只有作业'], answer: 0, explain: '要素。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'literacy', title: '素养', html: `<p>唯物史观、时空观念、史料实证、历史解释、家国情怀。</p>` },
          { id: 'design', title: '设计', html: `<p>主线问题—史料研读—讨论—归纳；避免满堂灌。</p>` }
        ], refs: [] } },
      { title: '课堂实施', brief: '把课上好。',
        q: [
          { stem: '历史课堂提问的有效性是：', options: ['有层次、指向史料与解释', '多而快', '只要记忆', '只问时间'], answer: 0, explain: '思维。' },
          { stem: '时间轴与地图的作用是：', options: ['建立时空观念', '装饰', '省事', '考试'], answer: 0, explain: '时空。' },
          { stem: '课堂讨论的组织关键是：', options: ['明确问题、提供材料、引导归纳', '放任', '只求热闹', '不总结'], answer: 0, explain: '组织。' }
        ],
        doc: { lead: '这一章讲实施。', sections: [
          { id: 'question', title: '提问', html: `<p>主问题 + 追问；指向因果、比较、评价。</p>` },
          { id: 'tools', title: '工具', html: `<p>时间轴、地图、史料卡片、表格归纳。</p>` }
        ], refs: [] } },
      { title: '学业评价', brief: '怎么考。',
        q: [
          { stem: '历史学业评价应：', options: ['知识与素养并重、过程与结果结合', '只考记忆', '只看分数', '只做选择题'], answer: 0, explain: '素养。' },
          { stem: '史料分析题考查的是：', options: ['提取信息与解释能力', '背诵', '书写', '速度'], answer: 0, explain: '能力。' },
          { stem: '评价反馈应：', options: ['具体、指向改进', '只给分数', '排名', '批评'], answer: 0, explain: '改进。' }
        ],
        doc: { lead: '这一章讲评价。', sections: [
          { id: 'design', title: '命题', html: `<p>材料题、开放题；素养立意；避免死记。</p>` },
          { id: 'feedback', title: '反馈', html: `<p>评分标准、典型答案、改进建议。</p>` }
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
      { title: '考研方向', brief: '中国史、世界史、考古。',
        q: [
          { stem: '历史学考研的常见方向是：', options: ['中国史、世界史、考古学、学科教学（历史）', '只有中国史', '只有世界史', '只有考古'], answer: 0, explain: '多方向。' },
          { stem: '历史学基础（313）的考试范围是：', options: ['中国史 + 世界史', '只有中国史', '只有世界史', '只有考古'], answer: 0, explain: '统考。' },
          { stem: '择校最应考虑：', options: ['科目、报录比与方向匹配', '城市', '学费', '宿舍'], answer: 0, explain: '匹配。' }
        ],
        doc: { lead: '这一章讲方向。', sections: [
          { id: 'paths', title: '方向', html: `<p>中国史、世界史、考古学、文博、学科教学（历史）。</p>` },
          { id: 'subjects', title: '科目', html: `<p>政治、英语、313 历史学基础（或自命题）。</p>` }
        ], refs: [] } },
      { title: '专业课复习', brief: '通史与专题。',
        q: [
          { stem: '历史学复习的主线是：', options: ['时间轴 + 专题 + 史料', '只背名词', '只看真题', '只读教材'], answer: 0, explain: '三条。' },
          { stem: '名词解释的答题结构是：', options: ['时间、内容、影响', '只有定义', '只有影响', '感想'], answer: 0, explain: '三段。' },
          { stem: '论述题的关键是：', options: ['观点明确 + 史实支撑 + 逻辑', '篇幅', '引用', '字迹'], answer: 0, explain: '内容。' }
        ],
        doc: { lead: '这一章讲复习。', sections: [
          { id: 'framework', title: '框架', html: `<p>时间轴、专题史、国别史；横向比较与纵向演变。</p>` },
          { id: 'writing', title: '答题', html: `<p>名词三段式；论述"总—分—总" + 史实 + 评价。</p>` }
        ], refs: [] } },
      { title: '求职方向', brief: '教师、文博、公务员。',
        q: [
          { stem: '历史学毕业生的常见去向不包括：', options: ['中学教师', '博物馆/档案馆', '公务员', '外科医生'], answer: 3, explain: '专业限制。' },
          { stem: '文博岗位看重：', options: ['专业基础与文书能力', '编程', '财务', '销售'], answer: 0, explain: '专业。' },
          { stem: '求职最加分的材料是：', options: ['论文、教案、实习经历', '证书数量', '成绩单', '社团'], answer: 0, explain: '作品。' }
        ],
        doc: { lead: '这一章讲就业。', sections: [
          { id: 'paths', title: '路径', html: `<p>中学教师、博物馆、档案馆、出版社、公务员、新媒体历史内容。</p>` },
          { id: 'skills', title: '能力', html: `<p>史料研读、写作、教学、公众表达。</p>` }
        ], refs: [] } },
      { title: '面试与试讲', brief: '展示功底。',
        q: [
          { stem: '历史教师面试试讲的关键是：', options: ['史料运用与问题设计', '背稿', 'PPT 精美', '时长'], answer: 0, explain: '史料。' },
          { stem: '被问"你怎么看某个历史事件"时应：', options: ['多角度分析并给出依据', '只说结论', '回避', '背书'], answer: 0, explain: '分析。' },
          { stem: '作品集应：', options: ['精选并说明贡献', '越多越好', '只放证书', '不放说明'], answer: 0, explain: '精选。' }
        ],
        doc: { lead: '这一章讲面试。', sections: [
          { id: 'demo', title: '试讲', html: `<p>15 分钟：导入—史料—探究—归纳；板书结构清晰。</p>` },
          { id: 'qa', title: '问答', html: `<p>史观、史学方法、教育理念；结合实例。</p>` }
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
