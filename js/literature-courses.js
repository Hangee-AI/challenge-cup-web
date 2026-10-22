/* ==========================================================
   literature-courses.js · 汉语言文学：12 门课（主干 8 章 / 出口 4 章）
   --------------------------------------------------------
   84 关；每章 2 节重点 + 3 题。
   ========================================================== */

(function () {
  var MAJOR = 'literature-汉语言文学';
  var TITLES = stageTitlesOf('literature');

  var COURSES = [
    /* ---- 大一 · 语言与文本 ---- */
    { name: '现代汉语', chapters: [
      { title: '语音', brief: '声母、韵母、声调：普通话的骨架。',
        q: [
          { stem: '普通话声调有：', options: ['三个', '四个', '五个', '六个'], answer: 1, explain: '阴平、阳平、上声、去声。' },
          { stem: '声母与韵母的划分依据是：', options: ['发音部位与阻碍方式', '字数', '声调', '意义'], answer: 0, explain: '音素分类。' },
          { stem: '儿化的主要作用是：', options: ['区别意义、表示小称或感情色彩', '增加音节', '改变声调', '标记词性'], answer: 0, explain: '语法与语义功能。' }
        ],
        doc: { lead: '这一章讲普通话语音系统。', sections: [
          { id: 'system', title: '系统', html: `<p>21 个声母、39 个韵母、四声；声韵拼合规律。</p>` },
          { id: 'sound', title: '音变', html: `<p>变调、轻声、儿化、"啊"的音变。</p>` }
        ], refs: [] } },
      { title: '文字', brief: '汉字的结构与规范。',
        q: [
          { stem: '汉字的主要造字法是：', options: ['象形、指事、会意、形声', '拼音', '假借唯一', '转注唯一'], answer: 0, explain: '四书。' },
          { stem: '形声字的特点是：', options: ['形旁表义、声旁表音', '纯表音', '纯表义', '无结构'], answer: 0, explain: '形声。' },
          { stem: '规范汉字的标准是：', options: ['国家通用语言文字法与国家规范', '古籍写法', '个人习惯', '港台写法'], answer: 0, explain: '规范。' }
        ],
        doc: { lead: '这一章讲汉字。', sections: [
          { id: 'structure', title: '结构', html: `<p>笔画、部件、独体与合体；六书与四书。</p>` },
          { id: 'norm', title: '规范', html: `<p>简化字、异体字整理、错别字辨析。</p>` }
        ], refs: [] } },
      { title: '词汇', brief: '词的单位与构造。',
        q: [
          { stem: '语素是：', options: ['最小的音义结合体', '最小的词', '句子', '短语'], answer: 0, explain: '语素。' },
          { stem: '合成词的构造方式包括：', options: ['复合、附加、重叠', '只有复合', '只有附加', '只有重叠'], answer: 0, explain: '三种。' },
          { stem: '词义的性质包括：', options: ['概括性、模糊性、民族性', '唯一性', '任意性', '无限性'], answer: 0, explain: '性质。' }
        ],
        doc: { lead: '这一章讲词汇。', sections: [
          { id: 'unit', title: '单位', html: `<p>语素、词、短语；词与短语的区分。</p>` },
          { id: 'meaning', title: '词义', html: `<p>本义与引申义、色彩义、同义与反义。</p>` }
        ], refs: [] } },
      { title: '语法', brief: '词类与句法。',
        q: [
          { stem: '划分词类的主要依据是：', options: ['语法功能', '意义', '字数', '声调'], answer: 0, explain: '功能。' },
          { stem: '句子的主干成分是：', options: ['主语、谓语、宾语', '定语、状语、补语', '只有主语', '只有谓语'], answer: 0, explain: '主干。' },
          { stem: '"把"字句的特点是：', options: ['介词"把"引出受事，表示处置', '表示被动', '表示判断', '表示存在'], answer: 0, explain: '处置式。' }
        ],
        doc: { lead: '这一章讲语法。', sections: [
          { id: 'wordclass', title: '词类', html: `<p>实词与虚词；功能、形态、意义三标准。</p>` },
          { id: 'sentence', title: '句子', html: `<p>成分分析法与层次分析法；特殊句式。</p>` }
        ], refs: [] } },
      { title: '修辞', brief: '怎么说得更好。',
        q: [
          { stem: '比喻的构成要素是：', options: ['本体、喻体、相似点', '只有本体', '只有喻体', '喻词'], answer: 0, explain: '三要素。' },
          { stem: '借代与借喻的区别是：', options: ['是否出现本体与相似关系', '字数', '是否比喻', '是否有喻词'], answer: 0, explain: '相关 vs 相似。' },
          { stem: '语体分为：', options: ['口语语体与书面语体', '文言与白话', '雅与俗', '长与短'], answer: 0, explain: '两大类。' }
        ],
        doc: { lead: '这一章讲修辞。', sections: [
          { id: 'figures', title: '辞格', html: `<p>比喻、比拟、借代、夸张、对偶、排比、反复、反问。</p>` },
          { id: 'style', title: '语体', html: `<p>口语/书面；公文、科技、文艺、政论语体。</p>` }
        ], refs: [] } },
      { title: '语用', brief: '语境中的意义。',
        q: [
          { stem: '语用学研究：', options: ['语言在语境中的使用', '语音', '字形', '词类'], answer: 0, explain: '语用。' },
          { stem: '会话含义的特点是：', options: ['可取消性', '不可取消', '总是字面', '无法推导'], answer: 0, explain: '含义。' },
          { stem: '指示语依赖：', options: ['语境（时间、地点、说话人）', '词典', '语法', '声调'], answer: 0, explain: '语境。' }
        ],
        doc: { lead: '这一章讲语用。', sections: [
          { id: 'context', title: '语境', html: `<p>指示、预设、言语行为；合作原则。</p>` },
          { id: 'implicature', title: '含义', html: `<p>会话含义与规约含义；礼貌原则。</p>` }
        ], refs: [] } },
      { title: '方言与共同语', brief: '普通话与方言的关系。',
        q: [
          { stem: '我国方言分区通常分为：', options: ['七大方言区', '三大方言区', '两区', '十区'], answer: 0, explain: '七区。' },
          { stem: '普通话以什么为基础方言？', options: ['北方方言', '粤方言', '吴方言', '闽方言'], answer: 0, explain: '北方话。' },
          { stem: '推普与保护方言的关系是：', options: ['并行不悖、各司其职', '相互排斥', '只能推普', '只能保护'], answer: 0, explain: '并行。' }
        ],
        doc: { lead: '这一章讲方言。', sections: [
          { id: 'areas', title: '分区', html: `<p>官话、吴、湘、赣、客家、闽、粤；语音特点。</p>` },
          { id: 'policy', title: '政策', html: `<p>普通话为国家通用语言；方言的文化价值。</p>` }
        ], refs: [] } },
      { title: '语言规范与运用', brief: '规范不是束缚。',
        q: [
          { stem: '语言规范化的原则是：', options: ['约定俗成、动态跟进', '一成不变', '禁止新词', '只依古籍'], answer: 0, explain: '动态。' },
          { stem: '常见语病类型包括：', options: ['搭配不当、成分残缺、语序不当', '超长', '用词生僻', '口语化'], answer: 0, explain: '病句。' },
          { stem: '网络语言的规范态度是：', options: ['区分场合、合理使用', '全面禁止', '全面接受', '不予理睬'], answer: 0, explain: '语域。' }
        ],
        doc: { lead: '这一章讲应用。', sections: [
          { id: 'norm', title: '规范', html: `<p>读音、用字、标点；规范词典与标准。</p>` },
          { id: 'errors', title: '病句', html: `<p>六类病句与修改；公文与新闻的语体要求。</p>` }
        ], refs: [] } }
    ] },
    { name: '中国古代文学（上）', chapters: [
      { title: '《诗经》与楚辞', brief: '风雅颂与香草美人。',
        q: [
          { stem: '《诗经》的分类是：', options: ['风、雅、颂', '赋、比、兴', '经、史、子', '诗、词、曲'], answer: 0, explain: '三类。' },
          { stem: '"赋比兴"是《诗经》的：', options: ['表现手法', '分类', '篇目', '作者'], answer: 0, explain: '手法。' },
          { stem: '楚辞的代表作是：', options: ['《离骚》', '《诗经》', '《九章》唯一', '《天问》唯一'], answer: 0, explain: '屈原。' }
        ],
        doc: { lead: '这一章讲先秦诗歌。', sections: [
          { id: 'shijing', title: '《诗经》', html: `<p>风雅颂、赋比兴；现实主义源头。</p>` },
          { id: 'chuci', title: '楚辞', html: `<p>屈原、香草美人、浪漫主义源头。</p>` }
        ], refs: [] } },
      { title: '先秦散文', brief: '诸子与历史。',
        q: [
          { stem: '先秦历史散文的代表是：', options: ['《左传》《国语》《战国策》', '《论语》', '《庄子》', '《楚辞》'], answer: 0, explain: '史传。' },
          { stem: '诸子散文的共同特点是：', options: ['说理与论辩', '叙事', '抒情', '写景'], answer: 0, explain: '说理。' },
          { stem: '《庄子》的文体风格是：', options: ['寓言想象、汪洋恣肆', '严谨朴实', '简洁记事', '对偶骈俪'], answer: 0, explain: '庄子。' }
        ],
        doc: { lead: '这一章讲先秦散文。', sections: [
          { id: 'history', title: '历史散文', html: `<p>《尚书》《春秋》《左传》《国语》《战国策》。</p>` },
          { id: 'philosophers', title: '诸子散文', html: `<p>《论语》《孟子》《庄子》《荀子》《韩非子》。</p>` }
        ], refs: [] } },
      { title: '汉赋与史传', brief: '铺陈与实录。',
        q: [
          { stem: '汉赋的特点是：', options: ['铺陈排比、辞藻繁富', '简洁', '抒情', '口语'], answer: 0, explain: '铺陈。' },
          { stem: '《史记》的体例是：', options: ['纪传体', '编年体', '国别体', '纪事本末体'], answer: 0, explain: '纪传。' },
          { stem: '《史记》的文学价值在于：', options: ['人物刻画与叙事艺术', '韵律', '对偶', '寓言'], answer: 0, explain: '人物。' }
        ],
        doc: { lead: '这一章讲汉代文学。', sections: [
          { id: 'fu', title: '汉赋', html: `<p>骚体赋、大赋、抒情小赋；司马相如、扬雄。</p>` },
          { id: 'shiji', title: '史传', html: `<p>《史记》《汉书》；纪传体与人物塑造。</p>` }
        ], refs: [] } },
      { title: '乐府与古诗', brief: '感于哀乐，缘事而发。',
        q: [
          { stem: '汉乐府的特点是：', options: ['叙事性强、反映现实', '抒情为主', '骈俪', '说理'], answer: 0, explain: '叙事。' },
          { stem: '《古诗十九首》的主题多为：', options: ['游子思妇、人生感慨', '战争', '田园', '咏史'], answer: 0, explain: '抒情。' },
          { stem: '"感于哀乐，缘事而发"出自：', options: ['《汉书·艺文志》', '《文心雕龙》', '《诗品》', '《典论》'], answer: 0, explain: '汉志。' }
        ],
        doc: { lead: '这一章讲汉代诗歌。', sections: [
          { id: 'yuefu', title: '乐府', html: `<p>叙事诗传统；《陌上桑》《孔雀东南飞》。</p>` },
          { id: 'gushi', title: '古诗', html: `<p>《古诗十九首》；文人五言诗的成熟。</p>` }
        ], refs: [] } },
      { title: '建安与正始', brief: '风骨与玄言。',
        q: [
          { stem: '"建安风骨"指的是：', options: ['慷慨悲凉的风格', '辞藻华丽', '玄虚空谈', '田园牧歌'], answer: 0, explain: '风骨。' },
          { stem: '正始文学的代表是：', options: ['阮籍、嵇康', '曹操', '陶渊明', '谢灵运'], answer: 0, explain: '竹林。' },
          { stem: '曹植的贡献是：', options: ['文人五言诗的成熟', '创立律诗', '开创词体', '写骈文'], answer: 0, explain: '五言。' }
        ],
        doc: { lead: '这一章讲魏晋。', sections: [
          { id: 'jianan', title: '建安', html: `<p>三曹七子；风骨与悲凉。</p>` },
          { id: 'zhengshi', title: '正始', html: `<p>阮籍、嵇康；玄言与隐逸。</p>` }
        ], refs: [] } },
      { title: '陶渊明与山水诗', brief: '田园与山水。',
        q: [
          { stem: '陶渊明诗歌的风格是：', options: ['平淡自然', '华丽', '奇崛', '悲壮'], answer: 0, explain: '平淡。' },
          { stem: '山水诗的开创者是：', options: ['谢灵运', '陶渊明', '曹操', '鲍照'], answer: 0, explain: '谢灵运。' },
          { stem: '陶诗的思想核心是：', options: ['归隐与自然', '仕进', '游仙', '边塞'], answer: 0, explain: '归隐。' }
        ],
        doc: { lead: '这一章讲晋宋诗。', sections: [
          { id: 'tao', title: '陶渊明', html: `<p>田园诗、平淡自然；《归园田居》《饮酒》。</p>` },
          { id: 'shan', title: '山水', html: `<p>谢灵运、谢朓；山水诗的兴起。</p>` }
        ], refs: [] } },
      { title: '南北朝诗歌与文论', brief: '声律与批评。',
        q: [
          { stem: '永明体的贡献是：', options: ['讲究声律对偶，为律诗奠基', '开创词', '开创赋', '开创小说'], answer: 0, explain: '声律。' },
          { stem: '《文心雕龙》的作者是：', options: ['刘勰', '钟嵘', '曹丕', '陆机'], answer: 0, explain: '刘勰。' },
          { stem: '《诗品》的作者是：', options: ['钟嵘', '刘勰', '沈约', '萧统'], answer: 0, explain: '钟嵘。' }
        ],
        doc: { lead: '这一章讲南朝。', sections: [
          { id: 'yongming', title: '永明体', html: `<p>四声八病；沈约、谢朓；律诗的前奏。</p>` },
          { id: 'criticism', title: '文论', html: `<p>《文心雕龙》《诗品》《文选》；文体论与批评标准。</p>` }
        ], refs: [] } },
      { title: '小说与神话', brief: '志怪与志人。',
        q: [
          { stem: '魏晋南北朝小说的两大类型是：', options: ['志怪与志人', '传奇与话本', '章回与笔记', '文言与白话'], answer: 0, explain: '两类。' },
          { stem: '《世说新语》属于：', options: ['志人小说', '志怪小说', '传奇', '话本'], answer: 0, explain: '志人。' },
          { stem: '中国小说的源头包括：', options: ['神话传说、史传、寓言', '只有神话', '只有史传', '只有寓言'], answer: 0, explain: '多源。' }
        ],
        doc: { lead: '这一章讲小说起源。', sections: [
          { id: 'zhiguai', title: '志怪', html: `<p>《搜神记》；宗教与民间信仰。</p>` },
          { id: 'zhiren', title: '志人', html: `<p>《世说新语》；魏晋风度与人物品评。</p>` }
        ], refs: [] } }
    ] },
    { name: '文学概论', chapters: [
      { title: '文学的本质', brief: '文学是什么。',
        q: [
          { stem: '文学的审美属性体现在：', options: ['形象性与情感性', '实用性', '科学性', '政治性'], answer: 0, explain: '审美。' },
          { stem: '文学与其他艺术的区别在于：', options: ['以语言为媒介', '以色彩', '以声音', '以形体'], answer: 0, explain: '语言。' },
          { stem: '文学的社会功能包括：', options: ['认识、教育、审美、娱乐', '只有认识', '只有教育', '只有娱乐'], answer: 0, explain: '多功能。' }
        ],
        doc: { lead: '这一章讲本质。', sections: [
          { id: 'nature', title: '本质', html: `<p>意识形态性、审美性、语言艺术。</p>` },
          { id: 'function', title: '功能', html: `<p>认识、教育、审美、娱乐；寓教于乐。</p>` }
        ], refs: [] } },
      { title: '文学作品', brief: '文本的层次。',
        q: [
          { stem: '文学作品的层次通常分为：', options: ['语言、形象、意蕴', '开头、中间、结尾', '体裁、题材、风格', '作者、文本、读者'], answer: 0, explain: '三层次。' },
          { stem: '题材与主题的区别是：', options: ['写什么 vs 表达什么', '长短', '体裁', '风格'], answer: 0, explain: '内容。' },
          { stem: '典型形象的特点是：', options: ['个性与共性的统一', '只有个性', '只有共性', '抽象'], answer: 0, explain: '典型。' }
        ],
        doc: { lead: '这一章讲文本。', sections: [
          { id: 'layers', title: '层次', html: `<p>语言层、形象层、意蕴层；文本与作品。</p>` },
          { id: 'typical', title: '典型与意境', html: `<p>典型：个性与共性统一；意境：情景交融。</p>` }
        ], refs: [] } },
      { title: '文学创作', brief: '怎么写出来的。',
        q: [
          { stem: '创作的心理过程包括：', options: ['积累、构思、传达', '阅读、记忆、考试', '模仿、抄袭', '编辑、出版'], answer: 0, explain: '三阶段。' },
          { stem: '灵感的特点是：', options: ['突发性、创造性', '可计划', '可复制', '必然出现'], answer: 0, explain: '灵感。' },
          { stem: '创作方法包括：', options: ['现实主义、浪漫主义、现代主义', '只有现实', '只有浪漫', '只有现代'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲创作。', sections: [
          { id: 'process', title: '过程', html: `<p>生活积累、艺术构思、语言传达；灵感与直觉。</p>` },
          { id: 'methods', title: '方法', html: `<p>现实主义、浪漫主义、现代主义；创作个性。</p>` }
        ], refs: [] } },
      { title: '文学接受', brief: '读者在做什么。',
        q: [
          { stem: '接受美学的核心是：', options: ['读者参与意义建构', '作者中心', '文本自足', '社会决定'], answer: 0, explain: '读者。' },
          { stem: '期待视野指：', options: ['读者既有的经验与期待', '作者的意图', '文本结构', '社会背景'], answer: 0, explain: '姚斯。' },
          { stem: '共鸣产生于：', options: ['读者与作品的情感契合', '文本长度', '作者名气', '出版时间'], answer: 0, explain: '共鸣。' }
        ],
        doc: { lead: '这一章讲接受。', sections: [
          { id: 'aesthetics', title: '接受美学', html: `<p>期待视野、空白与召唤结构；伊瑟尔、姚斯。</p>` },
          { id: 'response', title: '反应', html: `<p>共鸣、净化、领悟；误读与过度阐释。</p>` }
        ], refs: [] } },
      { title: '文学批评', brief: '怎么评价。',
        q: [
          { stem: '文学批评的标准包括：', options: ['思想与艺术标准', '只有思想', '只有艺术', '销量'], answer: 0, explain: '两个标准。' },
          { stem: '社会历史批评关注：', options: ['作品与社会历史的关系', '语言结构', '读者心理', '作者生平唯一'], answer: 0, explain: '社会。' },
          { stem: '批评的态度应当是：', options: ['实事求是、好处说好', '一味吹捧', '一味否定', '不看作品'], answer: 0, explain: '客观。' }
        ],
        doc: { lead: '这一章讲批评。', sections: [
          { id: 'standards', title: '标准', html: `<p>思想标准与艺术标准；历史的与美学的观点。</p>` },
          { id: 'methods', title: '方法', html: `<p>社会历史、形式主义、精神分析、文化研究。</p>` }
        ], refs: [] } },
      { title: '文学体裁', brief: '四分法。',
        q: [
          { stem: '文学体裁四分法是：', options: ['诗歌、散文、小说、戏剧', '诗词曲赋', '记叙、议论、说明', '雅俗'], answer: 0, explain: '四分。' },
          { stem: '小说的三要素是：', options: ['人物、情节、环境', '时间、地点、人物', '开端、发展、结局', '主题、题材、风格'], answer: 0, explain: '三要素。' },
          { stem: '戏剧文学的特点是：', options: ['舞台性与冲突性', '抒情性', '叙事性唯一', '说理性'], answer: 0, explain: '戏剧。' }
        ],
        doc: { lead: '这一章讲体裁。', sections: [
          { id: 'four', title: '四分法', html: `<p>诗歌、散文、小说、戏剧；各自特征。</p>` },
          { id: 'cross', title: '跨类', html: `<p>散文诗、报告文学、影视文学；体裁的融合。</p>` }
        ], refs: [] } },
      { title: '文学风格与流派', brief: '辨识度从哪来。',
        q: [
          { stem: '风格的形成因素包括：', options: ['作家个性、题材、时代', '只有个性', '只有时代', '只有题材'], answer: 0, explain: '综合。' },
          { stem: '流派形成的关键是：', options: ['共同的审美主张与创作倾向', '同一地区', '同一出版社', '同一学历'], answer: 0, explain: '主张。' },
          { stem: '风格的最高要求是：', options: ['独创性', '模仿', '工整', '繁复'], answer: 0, explain: '独创。' }
        ],
        doc: { lead: '这一章讲风格。', sections: [
          { id: 'style', title: '风格', html: `<p>独创性、稳定性、多样性；风格即人。</p>` },
          { id: 'schools', title: '流派', html: `<p>共同主张、社团、刊物；流派与时代思潮。</p>` }
        ], refs: [] } },
      { title: '文学思潮', brief: '时代的潮流。',
        q: [
          { stem: '古典主义的核心是：', options: ['崇尚理性与规范', '崇尚情感', '崇尚想象', '崇尚荒诞'], answer: 0, explain: '理性。' },
          { stem: '浪漫主义强调：', options: ['情感、想象、个性', '理性', '规范', '实证'], answer: 0, explain: '浪漫。' },
          { stem: '现代主义的特点是：', options: ['反传统、重形式实验', '写实', '说教', '通俗'], answer: 0, explain: '现代。' }
        ],
        doc: { lead: '这一章讲思潮。', sections: [
          { id: 'history', title: '脉络', html: `<p>古典主义、浪漫主义、现实主义、现代主义、后现代。</p>` },
          { id: 'china', title: '中国', html: `<p>现实主义传统、现代主义影响、新时期思潮。</p>` }
        ], refs: [] } }
    ] },

    /* ---- 大二 · 文学史线 ---- */
    { name: '中国古代文学（下）', chapters: [
      { title: '唐诗', brief: '盛唐气象。',
        q: [
          { stem: '唐诗的分期通常为：', options: ['初、盛、中、晚', '早、中、晚', '前、后', '春、夏、秋、冬'], answer: 0, explain: '四唐。' },
          { stem: '李白的风格是：', options: ['豪放飘逸', '沉郁顿挫', '清新自然', '隐晦'], answer: 0, explain: '李白。' },
          { stem: '杜甫被称为：', options: ['诗圣', '诗仙', '诗鬼', '诗佛'], answer: 0, explain: '诗圣。' }
        ],
        doc: { lead: '这一章讲唐诗。', sections: [
          { id: 'periods', title: '四唐', html: `<p>初唐四杰、盛唐气象、中唐新变、晚唐余晖。</p>` },
          { id: 'masters', title: '大家', html: `<p>李杜、王孟、高岑、韩柳、元白、小李杜。</p>` }
        ], refs: [] } },
      { title: '宋词', brief: '婉约与豪放。',
        q: [
          { stem: '词的两大风格是：', options: ['婉约与豪放', '雅与俗', '长与短', '诗与曲'], answer: 0, explain: '两派。' },
          { stem: '苏轼对词的贡献是：', options: ['以诗为词、扩大题材', '创立词牌', '制定词律', '编词集'], answer: 0, explain: '豪放。' },
          { stem: '李清照的词风属于：', options: ['婉约', '豪放', '边塞', '田园'], answer: 0, explain: '婉约。' }
        ],
        doc: { lead: '这一章讲宋词。', sections: [
          { id: 'schools', title: '两派', html: `<p>婉约（柳永、李清照）与豪放（苏轼、辛弃疾）。</p>` },
          { id: 'development', title: '演变', html: `<p>令词到慢词、词律与词境；词话与词学。</p>` }
        ], refs: [] } },
      { title: '唐宋散文', brief: '古文运动。',
        q: [
          { stem: '古文运动的核心主张是：', options: ['文以明道、反对骈文', '唯美', '骈俪', '复古形式'], answer: 0, explain: '明道。' },
          { stem: '唐宋八大家不包括：', options: ['韩愈', '柳宗元', '李白', '欧阳修'], answer: 2, explain: '李白是诗人。' },
          { stem: '韩愈的散文风格是：', options: ['气势雄健', '清新', '婉约', '艰涩'], answer: 0, explain: '雄健。' }
        ],
        doc: { lead: '这一章讲散文。', sections: [
          { id: 'movement', title: '古文运动', html: `<p>韩柳倡导；文以明道、务去陈言。</p>` },
          { id: 'eight', title: '八大家', html: `<p>韩柳欧王三苏曾巩；唐宋散文的典范。</p>` }
        ], refs: [] } },
      { title: '元曲', brief: '杂剧与散曲。',
        q: [
          { stem: '元曲包括：', options: ['杂剧与散曲', '诗与词', '传奇与话本', '京剧与昆曲'], answer: 0, explain: '两类。' },
          { stem: '《窦娥冤》的作者是：', options: ['关汉卿', '王实甫', '马致远', '白朴'], answer: 0, explain: '关汉卿。' },
          { stem: '元杂剧的结构通常是：', options: ['四折一楔子', '三幕', '五折', '一折'], answer: 0, explain: '四折。' }
        ],
        doc: { lead: '这一章讲元曲。', sections: [
          { id: 'zaju', title: '杂剧', html: `<p>四折一楔子、旦本末本；关汉卿、王实甫、马致远。</p>` },
          { id: 'sanqu', title: '散曲', html: `<p>小令与套数；俗雅之间。</p>` }
        ], refs: [] } },
      { title: '明清小说', brief: '章回与世情。',
        q: [
          { stem: '四大名著不包括：', options: ['《红楼梦》', '《西游记》', '《金瓶梅》', '《水浒传》'], answer: 2, explain: '四大名著。' },
          { stem: '章回体的特点是：', options: ['分回标目、故事连贯', '短篇', '文言', '抒情'], answer: 0, explain: '章回。' },
          { stem: '《儒林外史》的批判对象是：', options: ['科举制度与士人', '农民', '商人', '官员唯一'], answer: 0, explain: '科举。' }
        ],
        doc: { lead: '这一章讲小说。', sections: [
          { id: 'masterworks', title: '名著', html: `<p>三国、水浒、西游、红楼、金瓶梅、儒林外史、聊斋。</p>` },
          { id: 'art', title: '艺术', html: `<p>人物塑造、结构、白话与文言；评点学。</p>` }
        ], refs: [] } },
      { title: '明清戏曲与诗文', brief: '传奇与复古。',
        q: [
          { stem: '明清传奇的代表作是：', options: ['《牡丹亭》', '《窦娥冤》', '《西厢记》', '《汉宫秋》'], answer: 0, explain: '汤显祖。' },
          { stem: '明代前后七子的主张是：', options: ['文必秦汉、诗必盛唐', '独抒性灵', '白话', '西化'], answer: 0, explain: '复古。' },
          { stem: '公安派的文学主张是：', options: ['独抒性灵、不拘格套', '复古', '格律', '载道'], answer: 0, explain: '性灵。' }
        ],
        doc: { lead: '这一章讲明清。', sections: [
          { id: 'chuanqi', title: '传奇', html: `<p>汤显祖、洪昇、孔尚任；临川四梦。</p>` },
          { id: 'poetry', title: '诗文', html: `<p>复古派、唐宋派、公安派、桐城派。</p>` }
        ], refs: [] } },
      { title: '近代文学', brief: '新旧之间。',
        q: [
          { stem: '近代文学的关键转变是：', options: ['文言到白话、传统到现代', '诗到词', '赋到诗', '小说到戏剧'], answer: 0, explain: '转型。' },
          { stem: '梁启超的贡献是：', options: ['提倡新文体、小说界革命', '古文运动', '词学', '戏曲'], answer: 0, explain: '新文体。' },
          { stem: '谴责小说的代表是：', options: ['《官场现形记》', '《红楼梦》', '《聊斋》', '《儒林外史》'], answer: 0, explain: '谴责。' }
        ],
        doc: { lead: '这一章讲近代。', sections: [
          { id: 'reform', title: '变革', html: `<p>诗界革命、小说界革命、新文体；翻译文学。</p>` },
          { id: 'fiction', title: '小说', html: `<p>谴责小说、鸳鸯蝴蝶派；向现代过渡。</p>` }
        ], refs: [] } },
      { title: '文学史方法论', brief: '怎么读史。',
        q: [
          { stem: '文学史研究的基本维度是：', options: ['作家、作品、思潮、社会', '只有作家', '只有作品', '只有思潮'], answer: 0, explain: '多维。' },
          { stem: '"知人论世"出自：', options: ['《孟子》', '《论语》', '《文心雕龙》', '《诗品》'], answer: 0, explain: '孟子。' },
          { stem: '文学史分期的依据是：', options: ['文学自身演变与社会历史', '朝代唯一', '作者年龄', '出版时间'], answer: 0, explain: '综合。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'dimensions', title: '维度', html: `<p>作家生平、作品文本、思潮流变、社会语境。</p>` },
          { id: 'periodization', title: '分期', html: `<p>朝代分期与文学史分期；连续与断裂。</p>` }
        ], refs: [] } }
    ] },
    { name: '中国现当代文学', chapters: [
      { title: '五四文学革命', brief: '从文言到白话。',
        q: [
          { stem: '五四文学革命的核心主张是：', options: ['提倡白话文、反对文言文', '复古', '全盘西化', '保存国粹'], answer: 0, explain: '白话。' },
          { stem: '《狂人日记》的作者是：', options: ['鲁迅', '胡适', '茅盾', '巴金'], answer: 0, explain: '鲁迅。' },
          { stem: '文学研究会的文学主张是：', options: ['为人生', '为艺术', '为政治', '为娱乐'], answer: 0, explain: '为人生。' }
        ],
        doc: { lead: '这一章讲五四。', sections: [
          { id: 'revolution', title: '革命', html: `<p>胡适《文学改良刍议》、陈独秀《文学革命论》；白话文运动。</p>` },
          { id: 'societies', title: '社团', html: `<p>文学研究会（为人生）、创造社（为艺术）。</p>` }
        ], refs: [] } },
      { title: '鲁迅', brief: '国民性与启蒙。',
        q: [
          { stem: '《阿Q正传》批判的是：', options: ['精神胜利法与国民性', '农民', '地主', '知识分子'], answer: 0, explain: '国民性。' },
          { stem: '鲁迅小说的艺术特点是：', options: ['白描、讽刺、象征', '抒情', '骈俪', '说教'], answer: 0, explain: '多样。' },
          { stem: '《野草》的文体是：', options: ['散文诗', '小说', '杂文', '戏剧'], answer: 0, explain: '散文诗。' }
        ],
        doc: { lead: '这一章讲鲁迅。', sections: [
          { id: 'fiction', title: '小说', html: `<p>《呐喊》《彷徨》；国民性批判与启蒙。</p>` },
          { id: 'essays', title: '杂文与散文', html: `<p>《朝花夕拾》《野草》；文体创造。</p>` }
        ], refs: [] } },
      { title: '三十年代文学', brief: '左翼与京派海派。',
        q: [
          { stem: '左翼文学的核心主张是：', options: ['文学为革命服务', '为艺术', '为人生唯一', '为娱乐'], answer: 0, explain: '左翼。' },
          { stem: '京派文学的特点是：', options: ['乡土抒情、文化怀旧', '都市摩登', '革命', '通俗'], answer: 0, explain: '京派。' },
          { stem: '《子夜》的作者是：', options: ['茅盾', '巴金', '老舍', '沈从文'], answer: 0, explain: '茅盾。' }
        ],
        doc: { lead: '这一章讲三十年代。', sections: [
          { id: 'left', title: '左翼', html: `<p>左联、革命文学论争；茅盾、丁玲。</p>` },
          { id: 'schools', title: '京海', html: `<p>京派（沈从文、废名）、海派（穆时英、刘呐鸥）。</p>` }
        ], refs: [] } },
      { title: '现代派与通俗文学', brief: '新感觉与鸳鸯蝴蝶。',
        q: [
          { stem: '新感觉派的特点是：', options: ['都市体验、心理描写、形式实验', '乡土', '革命', '说教'], answer: 0, explain: '现代。' },
          { stem: '张爱玲的文学风格是：', options: ['苍凉、细腻、世情', '豪放', '革命', '田园'], answer: 0, explain: '苍凉。' },
          { stem: '通俗文学的代表是：', options: ['张恨水', '鲁迅', '茅盾', '巴金'], answer: 0, explain: '张恨水。' }
        ],
        doc: { lead: '这一章讲现代派。', sections: [
          { id: 'modern', title: '现代派', html: `<p>新感觉派、心理分析；施蛰存、穆时英。</p>` },
          { id: 'popular', title: '通俗', html: `<p>鸳鸯蝴蝶派、张恨水；雅俗互动。</p>` }
        ], refs: [] } },
      { title: '十七年文学', brief: '政治与文学。',
        q: [
          { stem: '十七年文学的主流是：', options: ['革命现实主义', '现代主义', '浪漫主义唯一', '通俗文学'], answer: 0, explain: '现实主义。' },
          { stem: '《青春之歌》的主题是：', options: ['知识分子的成长与革命', '爱情', '乡土', '都市'], answer: 0, explain: '成长。' },
          { stem: '这一时期文学的局限是：', options: ['题材与主题单一化', '形式实验', '语言创新', '多元'], answer: 0, explain: '单一。' }
        ],
        doc: { lead: '这一章讲十七年。', sections: [
          { id: 'mainstream', title: '主流', html: `<p>革命历史题材、农村题材；《创业史》《青春之歌》。</p>` },
          { id: 'limits', title: '局限', html: `<p>概念化、单一化；与政治运动的关系。</p>` }
        ], refs: [] } },
      { title: '新时期文学', brief: '伤痕、反思、寻根。',
        q: [
          { stem: '伤痕文学的主题是：', options: ['控诉文革创伤', '改革', '寻根', '都市'], answer: 0, explain: '伤痕。' },
          { stem: '寻根文学的代表是：', options: ['韩少功、阿城', '刘心武', '蒋子龙', '王蒙'], answer: 0, explain: '寻根。' },
          { stem: '朦胧诗的代表是：', options: ['北岛、顾城、舒婷', '汪国真', '席慕蓉', '余光中'], answer: 0, explain: '朦胧诗。' }
        ],
        doc: { lead: '这一章讲新时期。', sections: [
          { id: 'waves', title: '潮流', html: `<p>伤痕、反思、改革、寻根、先锋、新写实。</p>` },
          { id: 'poetry', title: '诗歌', html: `<p>朦胧诗、第三代诗；北岛、顾城、海子。</p>` }
        ], refs: [] } },
      { title: '先锋与当代文学', brief: '形式实验与日常叙事。',
        q: [
          { stem: '先锋小说的特点是：', options: ['叙事实验、消解意义', '写实', '说教', '通俗'], answer: 0, explain: '先锋。' },
          { stem: '莫言的创作风格是：', options: ['魔幻现实主义、民间叙事', '写实', '抒情', '说理'], answer: 0, explain: '莫言。' },
          { stem: '新写实小说的特点是：', options: ['还原生活本相、零度情感', '理想化', '英雄化', '象征'], answer: 0, explain: '新写实。' }
        ],
        doc: { lead: '这一章讲先锋与当代。', sections: [
          { id: 'avant', title: '先锋', html: `<p>马原、余华、格非、苏童；叙事圈套。</p>` },
          { id: 'newreal', title: '新写实', html: `<p>池莉、方方；日常生活的诗学。</p>` }
        ], refs: [] } },
      { title: '港台与海外华文', brief: '另一种现代性。',
        q: [
          { stem: '白先勇的代表作是：', options: ['《台北人》', '《边城》', '《家》', '《围城》'], answer: 0, explain: '台北人。' },
          { stem: '金庸小说的类型是：', options: ['武侠', '言情', '科幻', '历史'], answer: 0, explain: '武侠。' },
          { stem: '海外华文文学的主题常涉及：', options: ['离散、身份、文化认同', '革命', '乡土唯一', '武侠'], answer: 0, explain: '离散。' }
        ],
        doc: { lead: '这一章讲港台海外。', sections: [
          { id: 'taiwan', title: '台湾', html: `<p>现代主义、乡土文学；白先勇、黄春明。</p>` },
          { id: 'diaspora', title: '海外', html: `<p>离散写作、文化认同；严歌苓、哈金。</p>` }
        ], refs: [] } }
    ] },
    { name: '外国文学', chapters: [
      { title: '古希腊罗马文学', brief: '史诗与悲剧。',
        q: [
          { stem: '古希腊两大史诗是：', options: ['《伊利亚特》《奥德赛》', '《神曲》《失乐园》', '《埃涅阿斯纪》', '《变形记》'], answer: 0, explain: '荷马。' },
          { stem: '古希腊悲剧的代表是：', options: ['埃斯库罗斯、索福克勒斯、欧里庇得斯', '阿里斯托芬', '维吉尔', '奥维德'], answer: 0, explain: '三大悲剧家。' },
          { stem: '《俄狄浦斯王》的主题是：', options: ['命运与人的抗争', '爱情', '战争', '复仇唯一'], answer: 0, explain: '命运。' }
        ],
        doc: { lead: '这一章讲古希腊。', sections: [
          { id: 'epic', title: '史诗', html: `<p>荷马史诗；英雄主义与人文精神。</p>` },
          { id: 'tragedy', title: '悲剧', html: `<p>命运悲剧、戏剧结构；亚里士多德《诗学》。</p>` }
        ], refs: [] } },
      { title: '中世纪与文艺复兴', brief: '神性与人性。',
        q: [
          { stem: '《神曲》的作者是：', options: ['但丁', '彼特拉克', '薄伽丘', '莎士比亚'], answer: 0, explain: '但丁。' },
          { stem: '文艺复兴的核心思想是：', options: ['人文主义', '禁欲主义', '理性主义', '浪漫主义'], answer: 0, explain: '人文。' },
          { stem: '莎士比亚四大悲剧不包括：', options: ['《哈姆雷特》', '《奥赛罗》', '《李尔王》', '《罗密欧与朱丽叶》'], answer: 3, explain: '四大悲剧。' }
        ],
        doc: { lead: '这一章讲中世纪与文艺复兴。', sections: [
          { id: 'medieval', title: '中世纪', html: `<p>宗教文学、骑士文学；但丁的过渡地位。</p>` },
          { id: 'renaissance', title: '文艺复兴', html: `<p>人文主义；莎士比亚、塞万提斯、拉伯雷。</p>` }
        ], refs: [] } },
      { title: '古典主义与启蒙', brief: '理性与秩序。',
        q: [
          { stem: '古典主义戏剧的"三一律"指：', options: ['时间、地点、情节统一', '三种体裁', '三个主角', '三幕'], answer: 0, explain: '三一律。' },
          { stem: '《浮士德》的作者是：', options: ['歌德', '席勒', '莫里哀', '伏尔泰'], answer: 0, explain: '歌德。' },
          { stem: '启蒙文学的特点是：', options: ['宣传理性与自由', '复古', '神秘', '颓废'], answer: 0, explain: '启蒙。' }
        ],
        doc: { lead: '这一章讲古典与启蒙。', sections: [
          { id: 'classical', title: '古典主义', html: `<p>理性、规范、三一律；莫里哀、拉辛。</p>` },
          { id: 'enlighten', title: '启蒙', html: `<p>伏尔泰、卢梭、歌德；理性与个性解放。</p>` }
        ], refs: [] } },
      { title: '浪漫主义', brief: '情感与想象。',
        q: [
          { stem: '浪漫主义文学的特征是：', options: ['主观抒情、想象、自然', '客观写实', '理性规范', '实验'], answer: 0, explain: '浪漫。' },
          { stem: '《巴黎圣母院》的作者是：', options: ['雨果', '拜伦', '雪莱', '普希金'], answer: 0, explain: '雨果。' },
          { stem: '拜伦式英雄的特点是：', options: ['孤傲、反抗、忧郁', '顺从', '理性', '滑稽'], answer: 0, explain: '拜伦。' }
        ],
        doc: { lead: '这一章讲浪漫主义。', sections: [
          { id: 'features', title: '特征', html: `<p>主观性、想象、自然、中世纪趣味；回归民间。</p>` },
          { id: 'masters', title: '代表', html: `<p>雨果、拜伦、雪莱、海涅、普希金。</p>` }
        ], refs: [] } },
      { title: '现实主义', brief: '典型与批判。',
        q: [
          { stem: '现实主义文学的核心是：', options: ['真实反映社会、塑造典型', '主观抒情', '形式实验', '神秘'], answer: 0, explain: '写实。' },
          { stem: '《人间喜剧》的作者是：', options: ['巴尔扎克', '司汤达', '福楼拜', '左拉'], answer: 0, explain: '巴尔扎克。' },
          { stem: '托尔斯泰的代表作是：', options: ['《战争与和平》', '《罪与罚》', '《死魂灵》', '《变色龙》'], answer: 0, explain: '托翁。' }
        ],
        doc: { lead: '这一章讲现实主义。', sections: [
          { id: 'features', title: '特征', html: `<p>客观写实、典型化、社会批判；细节真实。</p>` },
          { id: 'masters', title: '代表', html: `<p>巴尔扎克、狄更斯、托尔斯泰、陀思妥耶夫斯基、契诃夫。</p>` }
        ], refs: [] } },
      { title: '现代主义', brief: '反传统与实验。',
        q: [
          { stem: '现代主义文学的特征是：', options: ['反传统、重形式、表现内心', '写实', '说教', '通俗'], answer: 0, explain: '现代。' },
          { stem: '《尤利西斯》的作者是：', options: ['乔伊斯', '卡夫卡', '普鲁斯特', '伍尔夫'], answer: 0, explain: '乔伊斯。' },
          { stem: '卡夫卡作品的主题是：', options: ['荒诞、异化、官僚', '爱情', '战争', '田园'], answer: 0, explain: '荒诞。' }
        ],
        doc: { lead: '这一章讲现代主义。', sections: [
          { id: 'schools', title: '流派', html: `<p>象征主义、表现主义、意识流、超现实主义、存在主义。</p>` },
          { id: 'masters', title: '代表', html: `<p>卡夫卡、乔伊斯、普鲁斯特、伍尔夫、加缪。</p>` }
        ], refs: [] } },
      { title: '后现代主义', brief: '拼贴与解构。',
        q: [
          { stem: '后现代主义的特点包括：', options: ['拼贴、戏仿、元叙事', '总体性', '写实', '教化'], answer: 0, explain: '后现代。' },
          { stem: '《百年孤独》属于：', options: ['魔幻现实主义', '意识流', '存在主义', '自然主义'], answer: 0, explain: '魔幻。' },
          { stem: '博尔赫斯作品的核心是：', options: ['迷宫、时间、无限', '爱情', '战争', '乡土'], answer: 0, explain: '迷宫。' }
        ],
        doc: { lead: '这一章讲后现代。', sections: [
          { id: 'features', title: '特征', html: `<p>碎片化、反讽、互文、消解深度。</p>` },
          { id: 'world', title: '世界文学', html: `<p>拉美魔幻现实主义、后殖民写作；博尔赫斯、马尔克斯。</p>` }
        ], refs: [] } },
      { title: '东方文学', brief: '另一条脉络。',
        q: [
          { stem: '《源氏物语》的作者是：', options: ['紫式部', '清少纳言', '松尾芭蕉', '夏目漱石'], answer: 0, explain: '紫式部。' },
          { stem: '泰戈尔的代表作是：', options: ['《吉檀迦利》', '《源氏物语》', '《一千零一夜》', '《我是猫》'], answer: 0, explain: '泰戈尔。' },
          { stem: '《一千零一夜》属于：', options: ['民间故事集', '长篇小说', '史诗', '戏剧'], answer: 0, explain: '民间。' }
        ],
        doc: { lead: '这一章讲东方。', sections: [
          { id: 'japan', title: '日本', html: `<p>《源氏物语》、俳句、近代文学；川端康成。</p>` },
          { id: 'india', title: '印度与阿拉伯', html: `<p>泰戈尔、史诗传统；《一千零一夜》。</p>` }
        ], refs: [] } }
    ] },

    /* ---- 大三 · 语言与理论 ---- */
    { name: '古代汉语', chapters: [
      { title: '文字与字形', brief: '说文解字。',
        q: [
          { stem: '《说文解字》的作者是：', options: ['许慎', '段玉裁', '王念孙', '章太炎'], answer: 0, explain: '许慎。' },
          { stem: '六书不包括：', options: ['象形', '指事', '会意', '拼音'], answer: 3, explain: '六书。' },
          { stem: '古今字与异体字的区别是：', options: ['时代先后 vs 同时并存', '字数', '读音', '写法'], answer: 0, explain: '两类。' }
        ],
        doc: { lead: '这一章讲文字。', sections: [
          { id: 'liushu', title: '六书', html: `<p>象形、指事、会意、形声、转注、假借。</p>` },
          { id: 'variants', title: '字形关系', html: `<p>古今字、异体字、通假字、繁简字。</p>` }
        ], refs: [] } },
      { title: '音韵', brief: '古音的门径。',
        q: [
          { stem: '中古音的代表韵书是：', options: ['《广韵》', '《说文》', '《尔雅》', '《方言》'], answer: 0, explain: '广韵。' },
          { stem: '三十六字母是：', options: ['中古声母系统', '韵母', '声调', '诗律'], answer: 0, explain: '声母。' },
          { stem: '平仄属于：', options: ['声调规则', '声母', '韵母', '字形'], answer: 0, explain: '声调。' }
        ],
        doc: { lead: '这一章讲音韵。', sections: [
          { id: 'system', title: '系统', html: `<p>三十六字母、四声、韵图；《广韵》音系。</p>` },
          { id: 'use', title: '运用', html: `<p>平仄、押韵、通假与假借；读古诗的钥匙。</p>` }
        ], refs: [] } },
      { title: '词汇', brief: '古今词义的变化。',
        q: [
          { stem: '古今词义变化包括：', options: ['扩大、缩小、转移', '只有扩大', '只有缩小', '不变'], answer: 0, explain: '三类。' },
          { stem: '本义与引申义的关系是：', options: ['引申义由本义发展而来', '无关', '相同', '相反'], answer: 0, explain: '引申。' },
          { stem: '联绵词的特点是：', options: ['两个音节连缀成义、不可拆开', '单音节', '可拆开', '有实义字'], answer: 0, explain: '联绵。' }
        ],
        doc: { lead: '这一章讲词汇。', sections: [
          { id: 'change', title: '演变', html: `<p>扩大、缩小、转移、感情色彩变化。</p>` },
          { id: 'types', title: '类型', html: `<p>单音词与复音词、联绵词、偏义复词。</p>` }
        ], refs: [] } },
      { title: '语法', brief: '文言的特殊结构。',
        q: [
          { stem: '宾语前置的常见条件是：', options: ['疑问句代词宾语、否定句代词宾语', '任何句子', '只有被动句', '只有判断句'], answer: 0, explain: '前置。' },
          { stem: '"者……也"是：', options: ['判断句的标志', '被动句', '疑问句', '感叹句'], answer: 0, explain: '判断。' },
          { stem: '词类活用的例子是：', options: ['名词作动词', '名词作名词', '动词作动词', '形容词作形容词'], answer: 0, explain: '活用。' }
        ],
        doc: { lead: '这一章讲语法。', sections: [
          { id: 'special', title: '特殊句式', html: `<p>判断句、被动句、宾语前置、省略句。</p>` },
          { id: 'flexible', title: '词类活用', html: `<p>名词作动词/状语、使动、意动。</p>` }
        ], refs: [] } },
      { title: '训诂', brief: '解释古书。',
        q: [
          { stem: '训诂学的核心任务是：', options: ['解释古书词句意义', '研究语音', '研究字形', '研究语法'], answer: 0, explain: '释义。' },
          { stem: '互文见义指：', options: ['上下文互相补充见义', '同义词', '反义词', '通假'], answer: 0, explain: '互文。' },
          { stem: '常用的训诂方法包括：', options: ['以形索义、因声求义、据文证义', '只有形', '只有声', '只有文'], answer: 0, explain: '三法。' }
        ],
        doc: { lead: '这一章讲训诂。', sections: [
          { id: 'methods', title: '方法', html: `<p>以形索义、因声求义、据文证义；形音义互求。</p>` },
          { id: 'books', title: '工具书', html: `<p>《尔雅》《方言》《说文》《广韵》《康熙字典》。</p>` }
        ], refs: [] } },
      { title: '句读与标点', brief: '断句的功夫。',
        q: [
          { stem: '句读的作用是：', options: ['断开文句、标明语气', '注音', '释义', '校勘'], answer: 0, explain: '断句。' },
          { stem: '断句的主要依据是：', options: ['语法、虚词、对偶与文意', '字数', '韵脚唯一', '版本'], answer: 0, explain: '综合。' },
          { stem: '"也""矣""焉"多用于：', options: ['句末语气', '句首', '句中', '无作用'], answer: 0, explain: '句末。' }
        ],
        doc: { lead: '这一章讲断句。', sections: [
          { id: 'clues', title: '标志', html: `<p>虚词、句式、对偶、押韵、文意层次。</p>` },
          { id: 'practice', title: '练习', html: `<p>先通读大意，再逐句断，最后核对文气。</p>` }
        ], refs: [] } },
      { title: '文选精读', brief: '从篇章中学习。',
        q: [
          { stem: '读古文的正确顺序是：', options: ['通读—查词—翻译—评析', '只查词', '只翻译', '只评析'], answer: 0, explain: '四步。' },
          { stem: '翻译古文的原则是：', options: ['信、达、雅', '直译唯一', '意译唯一', '自由发挥'], answer: 0, explain: '三字。' },
          { stem: '积累常用词的意义应：', options: ['按义项归纳并记例句', '只背释义', '只读原文', '只做题'], answer: 0, explain: '义项+例句。' }
        ],
        doc: { lead: '这一章讲精读。', sections: [
          { id: 'steps', title: '四步', html: `<p>通读知大意、查词明训诂、翻译求信达、评析见思想。</p>` },
          { id: 'accumulate', title: '积累', html: `<p>实词义项、虚词用法、特殊句式；卡片式整理。</p>` }
        ], refs: [] } }
    ] },
    { name: '语言学概论', chapters: [
      { title: '语言的本质', brief: '符号系统。',
        q: [
          { stem: '语言符号的特点是：', options: ['任意性与线条性', '必然性', '直观性', '单一性'], answer: 0, explain: '任意。' },
          { stem: '语言与言语的区别是：', options: ['社会系统 vs 个人使用', '书面 vs 口语', '古代 vs 现代', '正式 vs 随意'], answer: 0, explain: '索绪尔。' },
          { stem: '语言的本质属性是：', options: ['社会性', '生理性', '心理性', '物理性'], answer: 0, explain: '社会。' }
        ],
        doc: { lead: '这一章讲本质。', sections: [
          { id: 'sign', title: '符号', html: `<p>能指与所指、任意性、线条性、系统性。</p>` },
          { id: 'properties', title: '属性', html: `<p>社会性、全民性、可变性与稳定性。</p>` }
        ], refs: [] } },
      { title: '语音', brief: '声音的规律。',
        q: [
          { stem: '音位是：', options: ['区别意义的最小语音单位', '最小音素', '音节', '声调'], answer: 0, explain: '音位。' },
          { stem: '音位变体是：', options: ['同一音位的不同发音', '不同音位', '不同语言', '不同声调'], answer: 0, explain: '变体。' },
          { stem: '韵律特征包括：', options: ['声调、重音、语调', '元音', '辅音', '音节'], answer: 0, explain: '韵律。' }
        ],
        doc: { lead: '这一章讲语音。', sections: [
          { id: 'phoneme', title: '音位', html: `<p>音素、音位、变体；对立与互补分布。</p>` },
          { id: 'prosody', title: '韵律', html: `<p>声调、重音、语调；音节结构。</p>` }
        ], refs: [] } },
      { title: '语法', brief: '组合的规则。',
        q: [
          { stem: '语法单位包括：', options: ['语素、词、短语、句子', '只有词', '只有句子', '只有短语'], answer: 0, explain: '四级。' },
          { stem: '组合关系与聚合关系是：', options: ['横向搭配 vs 纵向替换', '相同', '相反', '无关'], answer: 0, explain: '两类。' },
          { stem: '语法范畴的例子是：', options: ['性、数、格、时、体', '主谓宾', '声韵调', '字形'], answer: 0, explain: '范畴。' }
        ],
        doc: { lead: '这一章讲语法。', sections: [
          { id: 'units', title: '单位', html: `<p>语素、词、短语、句子；层次与递归。</p>` },
          { id: 'relations', title: '关系', html: `<p>组合与聚合；语法范畴与语法手段。</p>` }
        ], refs: [] } },
      { title: '语义', brief: '意义的结构。',
        q: [
          { stem: '语义场指：', options: ['相关词义的聚合系统', '句子意义', '语境', '语法'], answer: 0, explain: '语义场。' },
          { stem: '义素分析用于：', options: ['分解词义的构成成分', '分析语音', '分析语法', '分析语用'], answer: 0, explain: '义素。' },
          { stem: '同义、反义、上下义属于：', options: ['词义关系', '语法关系', '语音关系', '语用关系'], answer: 0, explain: '关系。' }
        ],
        doc: { lead: '这一章讲语义。', sections: [
          { id: 'field', title: '语义场', html: `<p>同义、反义、上下义、整体部分；义素分析。</p>` },
          { id: 'sentence', title: '句义', html: `<p>预设、蕴涵、歧义；语义与真值。</p>` }
        ], refs: [] } },
      { title: '语用', brief: '语境与使用。',
        q: [
          { stem: '言语行为理论区分：', options: ['语谓、语旨、语效', '语音、语义、语法', '词、句、篇', '听说读写'], answer: 0, explain: '三分。' },
          { stem: '合作原则的四准则是：', options: ['数量、质量、关联、方式', '礼貌、谦逊', '对偶、排比', '平仄'], answer: 0, explain: '格赖斯。' },
          { stem: '指示语依赖：', options: ['语境', '词典', '语法', '语音'], answer: 0, explain: '语境。' }
        ],
        doc: { lead: '这一章讲语用。', sections: [
          { id: 'speechact', title: '言语行为', html: `<p>奥斯汀、塞尔；适切条件。</p>` },
          { id: 'principles', title: '原则', html: `<p>合作原则、会话含义、礼貌原则。</p>` }
        ], refs: [] } },
      { title: '社会语言学', brief: '语言与社会。',
        q: [
          { stem: '社会方言的变项包括：', options: ['阶层、年龄、性别、职业', '只有地域', '只有年龄', '只有性别'], answer: 0, explain: '多重。' },
          { stem: '语言接触的结果包括：', options: ['借词、混合语、语言转用', '只有借词', '只有混合', '无影响'], answer: 0, explain: '多种。' },
          { stem: '语码转换指：', options: ['交际中交替使用不同语言变体', '翻译', '口音', '错别字'], answer: 0, explain: '转换。' }
        ],
        doc: { lead: '这一章讲社会。', sections: [
          { id: 'variation', title: '变异', html: `<p>地域方言、社会方言、语域；语言与身份。</p>` },
          { id: 'contact', title: '接触', html: `<p>借词、洋泾浜、克里奥尔、语言濒危。</p>` }
        ], refs: [] } },
      { title: '历史语言学与应用', brief: '演变与用途。',
        q: [
          { stem: '语言演变的规律性表现为：', options: ['音变规律、类推作用', '随机', '无变化', '只增不减'], answer: 0, explain: '规律。' },
          { stem: '语系划分的依据是：', options: ['历史同源关系', '地域', '文字', '人口'], answer: 0, explain: '同源。' },
          { stem: '应用语言学的领域包括：', options: ['语言教学、翻译、词典学、语言规划', '只有教学', '只有翻译', '只有词典'], answer: 0, explain: '多领域。' }
        ],
        doc: { lead: '这一章讲演变与应用。', sections: [
          { id: 'change', title: '演变', html: `<p>音变、类推、语法化；语系与谱系树。</p>` },
          { id: 'applied', title: '应用', html: `<p>二语教学、翻译、词典编纂、语言规划。</p>` }
        ], refs: [] } }
    ] },
    { name: '中国文学批评史', chapters: [
      { title: '先秦批评', brief: '诗言志。',
        q: [
          { stem: '"诗言志"出自：', options: ['《尚书》', '《论语》', '《孟子》', '《庄子》'], answer: 0, explain: '尚书。' },
          { stem: '孔子的文学观强调：', options: ['兴观群怨、文质彬彬', '唯美', '玄虚', '功利唯一'], answer: 0, explain: '孔子。' },
          { stem: '孟子的"知言养气"涉及：', options: ['批评方法与人格修养', '音韵', '字形', '小说'], answer: 0, explain: '孟子。' }
        ],
        doc: { lead: '这一章讲先秦。', sections: [
          { id: 'confucian', title: '儒家', html: `<p>诗言志、兴观群怨、尽善尽美、知人论世。</p>` },
          { id: 'taoist', title: '道家', html: `<p>大音希声、得意忘言、自然朴素。</p>` }
        ], refs: [] } },
      { title: '魏晋南北朝批评', brief: '文的自觉。',
        q: [
          { stem: '《典论·论文》的作者是：', options: ['曹丕', '曹植', '陆机', '刘勰'], answer: 0, explain: '曹丕。' },
          { stem: '"文以气为主"出自：', options: ['《典论·论文》', '《文赋》', '《文心雕龙》', '《诗品》'], answer: 0, explain: '曹丕。' },
          { stem: '《文赋》的作者是：', options: ['陆机', '刘勰', '钟嵘', '萧统'], answer: 0, explain: '陆机。' }
        ],
        doc: { lead: '这一章讲魏晋。', sections: [
          { id: 'awakening', title: '自觉', html: `<p>文的独立、文体论；曹丕、陆机。</p>` },
          { id: 'works', title: '著作', html: `<p>《典论·论文》《文赋》《文心雕龙》《诗品》。</p>` }
        ], refs: [] } },
      { title: '刘勰《文心雕龙》', brief: '体大思精。',
        q: [
          { stem: '《文心雕龙》的体系包括：', options: ['总论、文体论、创作论、批评论', '只有文体', '只有创作', '只有批评'], answer: 0, explain: '四部分。' },
          { stem: '"神思"讨论的是：', options: ['艺术想象', '声律', '文体', '修辞'], answer: 0, explain: '想象。' },
          { stem: '刘勰的核心主张是：', options: ['原道、宗经、征圣', '唯美', '复古形式', '白话'], answer: 0, explain: '宗经。' }
        ],
        doc: { lead: '这一章讲《文心雕龙》。', sections: [
          { id: 'system', title: '体系', html: `<p>五十篇；总论、文体论、创作论、批评论。</p>` },
          { id: 'concepts', title: '概念', html: `<p>神思、体性、风骨、通变、情采。</p>` }
        ], refs: [] } },
      { title: '唐代批评', brief: '意境与复古。',
        q: [
          { stem: '"意境"说的代表是：', options: ['王昌龄、司空图', '刘勰', '钟嵘', '严羽'], answer: 0, explain: '意境。' },
          { stem: '韩愈的文学主张是：', options: ['文以明道、不平则鸣', '唯美', '玄虚', '通俗'], answer: 0, explain: '明道。' },
          { stem: '司空图提出：', options: ['象外之象、味外之旨', '神思', '风骨', '通变'], answer: 0, explain: '含蓄。' }
        ],
        doc: { lead: '这一章讲唐代。', sections: [
          { id: 'jingjie', title: '意境', html: `<p>王昌龄、皎然、司空图；象外之象。</p>` },
          { id: 'guwen', title: '古文', html: `<p>韩柳的文道论；不平则鸣。</p>` }
        ], refs: [] } },
      { title: '宋代批评', brief: '诗话与词论。',
        q: [
          { stem: '《沧浪诗话》的作者是：', options: ['严羽', '欧阳修', '苏轼', '李清照'], answer: 0, explain: '严羽。' },
          { stem: '严羽的核心主张是：', options: ['妙悟、别材别趣', '文以载道', '唯美', '考据'], answer: 0, explain: '妙悟。' },
          { stem: '李清照《词论》主张：', options: ['词别是一家', '诗词同源', '以文为词', '放弃词'], answer: 0, explain: '别是一家。' }
        ],
        doc: { lead: '这一章讲宋代。', sections: [
          { id: 'shihua', title: '诗话', html: `<p>《六一诗话》《沧浪诗话》；妙悟与兴趣。</p>` },
          { id: 'cilun', title: '词论', html: `<p>李清照"词别是一家"；雅俗之辨。</p>` }
        ], refs: [] } },
      { title: '明清批评', brief: '小说评点与性灵。',
        q: [
          { stem: '金圣叹评点的代表作是：', options: ['《水浒传》', '《红楼梦》', '《三国演义》', '《西游记》'], answer: 0, explain: '金批水浒。' },
          { stem: '李贽的文学主张是：', options: ['童心说', '格调说', '神韵说', '肌理说'], answer: 0, explain: '童心。' },
          { stem: '王国维《人间词话》的核心概念是：', options: ['境界', '风骨', '神思', '格调'], answer: 0, explain: '境界。' }
        ],
        doc: { lead: '这一章讲明清。', sections: [
          { id: 'commentary', title: '评点', html: `<p>金圣叹、毛宗岗、张竹坡；小说评点的理论价值。</p>` },
          { id: 'schools', title: '诗论', html: `<p>格调、神韵、性灵、肌理；王国维境界说。</p>` }
        ], refs: [] } },
      { title: '现代文论', brief: '西学东渐。',
        q: [
          { stem: '王国维的贡献是：', options: ['引入西方美学、提出境界说', '古文运动', '词学', '小说评点'], answer: 0, explain: '王国维。' },
          { stem: '朱光潜的美学属于：', options: ['审美心理学', '社会历史批评', '形式主义', '结构主义'], answer: 0, explain: '心理学。' },
          { stem: '中国现代文论的两大资源是：', options: ['传统文论与西方理论', '只有传统', '只有西方', '只有政治'], answer: 0, explain: '融合。' }
        ],
        doc: { lead: '这一章讲现代。', sections: [
          { id: 'founders', title: '奠基', html: `<p>王国维、梁启超、朱光潜、宗白华。</p>` },
          { id: 'sources', title: '资源', html: `<p>传统文论的现代转化；西方理论的引进与本土化。</p>` }
        ], refs: [] } },
      { title: '当代批评方法', brief: '怎么用理论。',
        q: [
          { stem: '形式主义批评关注：', options: ['文本的语言与结构', '作者生平', '社会背景', '读者反应'], answer: 0, explain: '文本。' },
          { stem: '文化研究关注：', options: ['文学与权力、身份、媒介', '韵律', '字形', '版本'], answer: 0, explain: '文化。' },
          { stem: '使用理论时应避免：', options: ['生搬硬套、术语堆砌', '细读', '语境化', '反思'], answer: 0, explain: '套用。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'approaches', title: '方法', html: `<p>形式主义、结构主义、精神分析、女性主义、后殖民、文化研究。</p>` },
          { id: 'caution', title: '警惕', html: `<p>理论服务于文本，不是相反；避免术语空转。</p>` }
        ], refs: [] } }
    ] },

    /* ---- 大四 · 出口 ---- */
    { name: '毕业论文', chapters: [
      { title: '选题与文献', brief: '小问题、真材料。',
        q: [
          { stem: '文学论文选题的关键是：', options: ['问题具体、材料可及', '题目宏大', '追热点', '导师偏好'], answer: 0, explain: '可行。' },
          { stem: '文献综述应：', options: ['梳理研究脉络并指出缺口', '罗列摘要', '按时间堆砌', '只引名家'], answer: 0, explain: '缺口。' },
          { stem: '研究方法的选取应：', options: ['与问题匹配', '越新越好', '越复杂越好', '随大流'], answer: 0, explain: '匹配。' }
        ],
        doc: { lead: '这一章讲开头。', sections: [
          { id: 'topic', title: '选题', html: `<p>作家作品、文学现象、文体、接受史；范围可控。</p>` },
          { id: 'review', title: '综述', html: `<p>按问题组织；说明你的介入点与材料基础。</p>` }
        ], refs: [] } },
      { title: '论证与写作', brief: '文本细读。',
        q: [
          { stem: '文学论文的论证核心是：', options: ['文本证据与逻辑推演', '作者生平', '理论术语', '感想'], answer: 0, explain: '证据。' },
          { stem: '引文规范的作用是：', options: ['可核查与尊重成果', '凑数', '装饰', '避免查重'], answer: 0, explain: '规范。' },
          { stem: '论文结论应：', options: ['回应问题并说明限度', '提出新问题唯一', '重复引言', '写感想'], answer: 0, explain: '收束。' }
        ],
        doc: { lead: '这一章讲写作。', sections: [
          { id: 'argument', title: '论证', html: `<p>论点—文本证据—分析—回应反驳；避免以论代史。</p>` },
          { id: 'format', title: '规范', html: `<p>注释体例、引文格式、参考文献；学术诚信。</p>` }
        ], refs: [] } },
      { title: '修改与答辩', brief: '把话说圆。',
        q: [
          { stem: '修改论文的有效顺序是：', options: ['结构—论证—语言—格式', '格式—语言—结构', '语言唯一', '格式唯一'], answer: 0, explain: '先大后小。' },
          { stem: '答辩陈述的重点是：', options: ['问题、方法、结论、创新', '致谢', '篇幅', '格式'], answer: 0, explain: '四点。' },
          { stem: '面对质疑应：', options: ['承认局限并说明理由', '争辩', '回避', '改口'], answer: 0, explain: '诚恳。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'revise', title: '修改', html: `<p>先结构后文字；请同学与导师交叉阅读。</p>` },
          { id: 'defense', title: '答辩', html: `<p>10 分钟陈述；准备三个可能被问的问题。</p>` }
        ], refs: [] } }
    ] },
    { name: '教学实习', chapters: [
      { title: '语文教学设计', brief: '一堂课怎么设计。',
        q: [
          { stem: '语文教学目标应体现：', options: ['语言建构、思维、审美、文化', '只有知识', '只有考试', '只有思想'], answer: 0, explain: '核心素养。' },
          { stem: '文本解读的起点是：', options: ['细读文本', '看教参', '找课件', '看视频'], answer: 0, explain: '细读。' },
          { stem: '教学设计应包含：', options: ['目标、重难点、活动、评价', '只有目标', '只有活动', '只有作业'], answer: 0, explain: '要素。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'literacy', title: '核心素养', html: `<p>语言建构与运用、思维发展与提升、审美鉴赏与创造、文化传承与理解。</p>` },
          { id: 'design', title: '设计', html: `<p>目标—情境—活动—评价；主问题驱动。</p>` }
        ], refs: [] } },
      { title: '课堂实施', brief: '把设计跑起来。',
        q: [
          { stem: '课堂提问的有效性是：', options: ['有梯度、有候答、有追问', '多而快', '只问优生', '只问是非'], answer: 0, explain: '提问。' },
          { stem: '朗读指导的关键是：', options: ['理解基础上的表达', '只求响亮', '只求整齐', '只求速度'], answer: 0, explain: '理解。' },
          { stem: '课堂生成的处理应：', options: ['珍视并引导到目标', '忽略', '打断', '训斥'], answer: 0, explain: '生成。' }
        ],
        doc: { lead: '这一章讲实施。', sections: [
          { id: 'question', title: '提问', html: `<p>主问题 + 追问链；候答时间；面向全体。</p>` },
          { id: 'generative', title: '生成', html: `<p>预设与生成；把意外转化为教学资源。</p>` }
        ], refs: [] } },
      { title: '作文教学', brief: '怎么教写作。',
        q: [
          { stem: '作文教学的核心是：', options: ['过程指导（构思、起草、修改）', '只看结果', '只背范文', '只讲技巧'], answer: 0, explain: '过程。' },
          { stem: '批改的有效方式是：', options: ['面批与同伴互评结合', '只打分数', '只写评语', '不改'], answer: 0, explain: '多元。' },
          { stem: '写作素材的积累途径是：', options: ['阅读与生活观察', '只读作文选', '只背模板', '只做套题'], answer: 0, explain: '积累。' }
        ],
        doc: { lead: '这一章讲写作教学。', sections: [
          { id: 'process', title: '过程', html: `<p>审题—构思—起草—修改—发表；支架式指导。</p>` },
          { id: 'feedback', title: '评价', html: `<p>量规、面批、同伴互评、范文讲评。</p>` }
        ], refs: [] } },
      { title: '实习复盘', brief: '留下作品。',
        q: [
          { stem: '实习最该留下的是：', options: ['教案与课堂实录', '工牌', '照片', '评语'], answer: 0, explain: '作品。' },
          { stem: '实习日志的推荐写法是：', options: ['问题—做法—结果—反思', '流水账', '只写结论', '只写感受'], answer: 0, explain: '结构化。' },
          { stem: '面试讲实习的最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
        ],
        doc: { lead: '这一章讲收尾。', sections: [
          { id: 'output', title: '三件套', html: `<p>3 份教案、1 段课堂实录、1 份实习总结。</p>` },
          { id: 'review', title: '复盘', html: `<p>每周五行；对照指导教师的评语改进。</p>` }
        ], refs: [] } }
    ] },
    { name: '考研与求职', chapters: [
      { title: '考研方向与复习', brief: '文学考研怎么准备。',
        q: [
          { stem: '文学考研专业课通常包括：', options: ['文学史 + 文学理论 + 语言', '只有英语', '只有政治', '只有写作'], answer: 0, explain: '专业课。' },
          { stem: '文学史复习的主线是：', options: ['时代—思潮—作家—作品', '只背作家', '只背作品', '只看真题'], answer: 0, explain: '脉络。' },
          { stem: '答论述题的关键是：', options: ['观点明确 + 文本证据 + 理论支撑', '篇幅', '引用', '字迹'], answer: 0, explain: '内容。' }
        ],
        doc: { lead: '这一章讲备考。', sections: [
          { id: 'subjects', title: '科目', html: `<p>中国文学史、外国文学、文学理论、现代汉语/古代汉语。</p>` },
          { id: 'plan', title: '节奏', html: `<p>3–6 月通读，7–8 月专题，9–10 月真题，11–12 月背诵。</p>` }
        ], refs: [] } },
      { title: '求职方向', brief: '学文学能做什么。',
        q: [
          { stem: '汉语言文学毕业生的常见去向不包括：', options: ['教师', '编辑出版', '文案策划', '临床医生'], answer: 3, explain: '专业限制。' },
          { stem: '文案岗位最看重：', options: ['文字功底与策划能力', '编程', '财务', '设计'], answer: 0, explain: '文字。' },
          { stem: '求职材料应突出：', options: ['作品（文章、文案、教案）', '证书数量', '成绩单', '社团'], answer: 0, explain: '作品。' }
        ],
        doc: { lead: '这一章讲就业。', sections: [
          { id: 'paths', title: '路径', html: `<p>教师、编辑、文案、新媒体、公务员、企业行政。</p>` },
          { id: 'skill', title: '能力', html: `<p>写作、编辑、策划、表达；作品集比证书更重要。</p>` }
        ], refs: [] } },
      { title: '面试与作品', brief: '怎么展示自己。',
        q: [
          { stem: '面试讲作品的最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲感想'], answer: 0, explain: 'STAR。' },
          { stem: '教师面试试讲的关键是：', options: ['目标清晰、活动有效、互动自然', '背稿', 'PPT 精美', '时长'], answer: 0, explain: '基本功。' },
          { stem: '作品集应当：', options: ['精选并说明贡献', '越多越好', '只放截图', '不放说明'], answer: 0, explain: '精选。' }
        ],
        doc: { lead: '这一章讲求职。', sections: [
          { id: 'portfolio', title: '作品集', html: `<p>3–5 篇代表作 + 说明；教学岗附教案与课堂实录。</p>` },
          { id: 'interview', title: '面试', html: `<p>结构化问答、试讲、即兴写作；提前准备三分钟自我介绍。</p>` }
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
