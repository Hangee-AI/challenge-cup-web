/* ==========================================================
   english-courses.js · 英语：12 门课（主干 8 章 / 出口 4 章）= 84 关
   ========================================================== */

(function () {
  var MAJOR = 'literature-英语';
  var TITLES = stageTitlesOf('literature');

  var COURSES = [
    /* ---- 大一 ---- */
    { name: '综合英语（一）', chapters: [
      { title: '词汇与构词', brief: '词根词缀：把生词变成熟词。',
        q: [
          { stem: '前缀 "un-" 通常表示：', options: ['否定', '重复', '之前', '之下'], answer: 0, explain: '否定前缀。' },
          { stem: '词根 "spect" 的意思是：', options: ['看', '说', '写', '走'], answer: 0, explain: 'inspect/spectator。' },
          { stem: '扩大词汇量最有效的方式是：', options: ['词根词缀 + 语境复现', '只背单词表', '只看剧', '只做题'], answer: 0, explain: '语境。' }
        ],
        doc: { lead: '这一章讲词汇。', sections: [
          { id: 'affix', title: '词缀', html: `<p>常用前缀（un-, re-, pre-, sub-, inter-）与后缀（-tion, -able, -ment）。</p>` },
          { id: 'strategy', title: '策略', html: `<p>词根词缀 + 例句 + 复现；建立个人词库。</p>` }
        ], refs: [] } },
      { title: '时态与体', brief: '时间与状态的组合。',
        q: [
          { stem: '现在完成时强调：', options: ['过去动作对现在的影响', '过去某个时间点', '将来', '习惯'], answer: 0, explain: '影响。' },
          { stem: '进行体与完成进行体的区别是：', options: ['是否强调持续到现在的过程', '是否过去', '是否被动', '是否否定'], answer: 0, explain: '持续。' },
          { stem: '一般现在时表示将来常见于：', options: ['时间表安排', '任何情况', '过去', '虚拟'], answer: 0, explain: '时刻表。' }
        ],
        doc: { lead: '这一章讲时态。', sections: [
          { id: 'system', title: '体系', html: `<p>现在/过去/将来 × 一般/进行/完成/完成进行。</p>` },
          { id: 'use', title: '使用', html: `<p>时间标志词、语境、与时间状语从句的配合。</p>` }
        ], refs: [] } },
      { title: '语态与情态', brief: '被动与语气。',
        q: [
          { stem: '被动语态常用于：', options: ['强调动作承受者或不知道施动者', '强调施动者', '口语唯一', '否定'], answer: 0, explain: '被动。' },
          { stem: '"must have done" 表示：', options: ['对过去的肯定推测', '将来义务', '现在能力', '过去习惯'], answer: 0, explain: '推测。' },
          { stem: '情态动词的推测用法强度从高到低是：', options: ['must > should > may > might', 'might > may', 'may > must', '一样'], answer: 0, explain: '强度。' }
        ],
        doc: { lead: '这一章讲语态与情态。', sections: [
          { id: 'passive', title: '被动', html: `<p>构成、使用场合；get 被动；主动表被动。</p>` },
          { id: 'modal', title: '情态', html: `<p>能力、许可、义务、推测；情态 + have done。</p>` }
        ], refs: [] } },
      { title: '非谓语动词', brief: '不定式、动名词、分词。',
        q: [
          { stem: 'stop to do 与 stop doing 的区别是：', options: ['停下来去做 vs 停止做', '相同', '都是停止', '都是继续'], answer: 0, explain: '语义。' },
          { stem: '现在分词作状语通常表示：', options: ['主动或进行', '被动', '完成', '目的'], answer: 0, explain: '主动。' },
          { stem: '独立主格结构的特征是：', options: ['名词/代词 + 分词，逻辑主语不同', '无主语', '只有动词', '必须从句'], answer: 0, explain: '独立主格。' }
        ],
        doc: { lead: '这一章讲非谓语。', sections: [
          { id: 'forms', title: '三种形式', html: `<p>不定式、动名词、分词；作主语/宾语/定语/状语。</p>` },
          { id: 'choice', title: '选择', html: `<p>按动词搭配与语义（目的、主动、完成）选择。</p>` }
        ], refs: [] } },
      { title: '从句', brief: '名词性、定语、状语。',
        q: [
          { stem: '定语从句中 which 与 that 的选择：', options: ['非限定用 which，限定多可互换', '只能 that', '只能 which', '随意'], answer: 0, explain: '规则。' },
          { stem: '同位语从句与定语从句的区别是：', options: ['是否解释内容', '是否用 that', '是否后置', '是否修饰名词'], answer: 0, explain: '内容。' },
          { stem: '状语从句的连词按意义可分为：', options: ['时间、原因、条件、让步、结果等', '只有时间', '只有原因', '只有条件'], answer: 0, explain: '分类。' }
        ],
        doc: { lead: '这一章讲从句。', sections: [
          { id: 'noun', title: '名词性从句', html: `<p>主语、宾语、表语、同位语；that/whether/what。</p>` },
          { id: 'relatives', title: '关系从句与状语', html: `<p>关系代词/副词；限定与非限定；状语连词。</p>` }
        ], refs: [] } },
      { title: '虚拟语气', brief: '与事实相反。',
        q: [
          { stem: '与现在事实相反的虚拟条件句：', options: ['if + 过去式，主句 would do', 'if + 现在式', 'if + 将来', '不用虚拟'], answer: 0, explain: '结构。' },
          { stem: '"It is time that..." 从句用：', options: ['过去式或 should + do', '现在式', '将来式', '原形'], answer: 0, explain: '虚拟。' },
          { stem: 'wish 后的宾语从句表示与过去相反用：', options: ['过去完成时', '现在时', '将来时', '原形'], answer: 0, explain: 'had done。' }
        ],
        doc: { lead: '这一章讲虚拟。', sections: [
          { id: 'conditionals', title: '条件句', html: `<p>与现在/过去/将来相反；混合虚拟；倒装省略 if。</p>` },
          { id: 'other', title: '其他句型', html: `<p>wish、as if、would rather、It is time、建议命令动词后的 should 省略。</p>` }
        ], refs: [] } },
      { title: '衔接与连贯', brief: '句子怎么串成篇。',
        q: [
          { stem: 'however 表示：', options: ['转折', '因果', '递进', '举例'], answer: 0, explain: '转折。' },
          { stem: '指代与替代在语篇中的作用是：', options: ['避免重复、增强连贯', '增加难度', '装饰', '凑字数'], answer: 0, explain: '连贯。' },
          { stem: '段落连贯的关键是：', options: ['统一主题 + 逻辑顺序 + 衔接手段', '句子长', '词汇难', '多用从句'], answer: 0, explain: '三要素。' }
        ],
        doc: { lead: '这一章讲连贯。', sections: [
          { id: 'cohesion', title: '衔接手段', html: `<p>连接词、指代、替代、省略、词汇复现。</p>` },
          { id: 'coherence', title: '连贯', html: `<p>主题句—支撑句—结论；逻辑顺序与读者意识。</p>` }
        ], refs: [] } },
      { title: '精读方法', brief: '把一篇读透。',
        q: [
          { stem: '精读的第一步是：', options: ['通读把握主旨', '查所有生词', '背句型', '做练习'], answer: 0, explain: '整体。' },
          { stem: '长难句分析的关键是：', options: ['找主干、理修饰', '逐词翻译', '只看标点', '跳读'], answer: 0, explain: '主干。' },
          { stem: '精读笔记应记录：', options: ['结构、词句、文化背景、疑问', '只记生词', '只记译文', '只记语法'], answer: 0, explain: '多维。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'steps', title: '四步', html: `<p>通读主旨 → 分析结构 → 精析语言 → 复述与运用。</p>` },
          { id: 'notes', title: '笔记', html: `<p>结构图、好句摘录、文化注释、疑难点。</p>` }
        ], refs: [] } }
    ] },
    { name: '英语语音', chapters: [
      { title: '音素与音标', brief: '48 个音素的地图。',
        q: [
          { stem: '英语国际音标共有多少个音素？', options: ['44–48 个', '26 个', '20 个', '60 个'], answer: 0, explain: '元音+辅音。' },
          { stem: '元音与辅音的区别是：', options: ['气流是否受阻', '是否浊音', '是否响亮', '是否长'], answer: 0, explain: '受阻。' },
          { stem: '清浊对应的例子是：', options: ['/p/ 与 /b/', '/p/ 与 /t/', '/b/ 与 /d/', '/s/ 与 /ʃ/'], answer: 0, explain: '同部位。' }
        ],
        doc: { lead: '这一章讲音素。', sections: [
          { id: 'vowels', title: '元音', html: `<p>单元音 12 个、双元音 8 个；舌位与唇形。</p>` },
          { id: 'consonants', title: '辅音', html: `<p>按发音部位与方式分类；清浊配对。</p>` }
        ], refs: [] } },
      { title: '元音', brief: '长短与松紧。',
        q: [
          { stem: '/iː/ 与 /ɪ/ 的主要区别是：', options: ['长短与舌位松紧', '唇形', '声带', '鼻音'], answer: 0, explain: '紧松。' },
          { stem: '双元音的特点是：', options: ['由一个元音滑向另一个', '单音', '辅音', '鼻化'], answer: 0, explain: '滑动。' },
          { stem: '中国学习者常见的元音问题是：', options: ['长短不分、以汉语音替代', '全对', '不会发辅音', '只有语调'], answer: 0, explain: '迁移。' }
        ],
        doc: { lead: '这一章讲元音。', sections: [
          { id: 'mono', title: '单元音', html: `<p>前中后、高中低；/æ/ /e/ /ə/ 等易混音。</p>` },
          { id: 'diphthong', title: '双元音', html: `<p>/eɪ/ /aɪ/ /ɔɪ/ /aʊ/ /əʊ/；滑动过程。</p>` }
        ], refs: [] } },
      { title: '辅音', brief: '部位与方式。',
        q: [
          { stem: '/θ/ 与 /ð/ 的发音部位是：', options: ['舌尖齿间', '舌尖齿龈', '舌根', '双唇'], answer: 0, explain: '齿间。' },
          { stem: '/l/ 在词尾的发音常为：', options: ['含糊音（dark l）', '清音', '鼻音', '不发音'], answer: 0, explain: 'dark l。' },
          { stem: '连读中常见的音变是：', options: ['辅音+元音连读', '随机变化', '全部省略', '全部浊化'], answer: 0, explain: '连读。' }
        ],
        doc: { lead: '这一章讲辅音。', sections: [
          { id: 'places', title: '部位', html: `<p>双唇、唇齿、齿间、齿龈、硬腭、软腭、声门。</p>` },
          { id: 'problems', title: '难点', html: `<p>/θ/ /ð/ /r/ /l/ /v/ /w/；母语迁移与纠正。</p>` }
        ], refs: [] } },
      { title: '连读与弱读', brief: '自然语流。',
        q: [
          { stem: '弱读通常发生在：', options: ['功能词在非重读位置', '实词', '句首', '专有名词'], answer: 0, explain: '功能词。' },
          { stem: '失去爆破指：', options: ['爆破音后接辅音时不完全爆破', '不发音', '变浊', '变清'], answer: 0, explain: '不完全爆破。' },
          { stem: '同化现象的例子是：', options: ['/n/ 在 /p/ 前变 /m/', '任意变化', '不变化', '全部清化'], answer: 0, explain: '同化。' }
        ],
        doc: { lead: '这一章讲语流。', sections: [
          { id: 'linking', title: '连读', html: `<p>辅音+元音、元音+元音、r 连读。</p>` },
          { id: 'weak', title: '弱读与音变', html: `<p>弱读形式、失去爆破、同化、省音。</p>` }
        ], refs: [] } },
      { title: '重音与节奏', brief: '英语是重音计时语言。',
        q: [
          { stem: '英语的节奏类型是：', options: ['重音计时', '音节计时', '无节奏', '声调语言'], answer: 0, explain: '重音计时。' },
          { stem: '句子重音通常落在：', options: ['实词与信息焦点', '功能词', '所有词', '句首'], answer: 0, explain: '实词。' },
          { stem: '词重音位置错误会导致：', options: ['听者理解困难', '语法错误', '拼写错误', '无影响'], answer: 0, explain: '可懂度。' }
        ],
        doc: { lead: '这一章讲重音。', sections: [
          { id: 'word', title: '词重音', html: `<p>规则与例外；名词/动词重音差异（record）。</p>` },
          { id: 'sentence', title: '句重音', html: `<p>信息焦点、对比重音；节奏与停顿。</p>` }
        ], refs: [] } },
      { title: '语调', brief: '升降之间表意。',
        q: [
          { stem: '一般疑问句常用：', options: ['升调', '降调', '平调', '降升调'], answer: 0, explain: '升调。' },
          { stem: '特殊疑问句常用：', options: ['降调', '升调', '平调', '升降调'], answer: 0, explain: '降调。' },
          { stem: '语调的功能包括：', options: ['表意、表态、组织话语', '只有表意', '只有表态', '无功能'], answer: 0, explain: '多功能。' }
        ],
        doc: { lead: '这一章讲语调。', sections: [
          { id: 'patterns', title: '调型', html: `<p>降调、升调、降升调、升降调；使用场合。</p>` },
          { id: 'function', title: '功能', html: `<p>区分句型、表达态度、标示话轮与信息结构。</p>` }
        ], refs: [] } },
      { title: '英美音差异', brief: 'RP 与 GA。',
        q: [
          { stem: '英式与美式发音的典型差异是：', options: ['/ɑː/ 与 /æ/（ask, dance）', '语调', '语法', '拼写'], answer: 0, explain: '元音。' },
          { stem: '美式发音的特点是：', options: ['卷舌音 /r/ 明显', '不发音', '无重音', '无弱读'], answer: 0, explain: 'rhotic。' },
          { stem: '选择英音还是美音的关键是：', options: ['一致性', '难度', '流行度', '考试'], answer: 0, explain: '一致。' }
        ],
        doc: { lead: '这一章讲差异。', sections: [
          { id: 'vowels', title: '元音差异', html: `<p>lot/thought、bath、rhotic 与 non-rhotic。</p>` },
          { id: 'choice', title: '选择', html: `<p>选定一种并保持一致；听力要能适应两种。</p>` }
        ], refs: [] } },
      { title: '语音教学与纠音', brief: '怎么练、怎么教。',
        q: [
          { stem: '纠音的有效顺序是：', options: ['听辨—模仿—对比—固化', '只模仿', '只讲理论', '只考试'], answer: 0, explain: '四步。' },
          { stem: '最小对立对练习的作用是：', options: ['训练辨音', '扩大词汇', '练习语法', '提高写作'], answer: 0, explain: '辨音。' },
          { stem: '语音教学的常见误区是：', options: ['只讲音标不练语流', '不练音标', '只练语流', '不做示范'], answer: 0, explain: '脱离语流。' }
        ],
        doc: { lead: '这一章讲教学。', sections: [
          { id: 'training', title: '训练', html: `<p>听辨、模仿、最小对立对、录音自评。</p>` },
          { id: 'teaching', title: '教学', html: `<p>音标—单词—短语—语篇；语流优先。</p>` }
        ], refs: [] } }
    ] },
    { name: '英语语法', chapters: [
      { title: '句子成分与词类', brief: '骨架与零件。',
        q: [
          { stem: '英语基本句型不包括：', options: ['主谓', '主谓宾', '主系表', '主宾谓'], answer: 3, explain: 'SVO 语序。' },
          { stem: '限定词包括：', options: ['冠词、指示词、数量词', '副词', '连词', '介词'], answer: 0, explain: '限定词。' },
          { stem: '补语与宾语的区别是：', options: ['是否说明主语/宾语的状态', '位置', '词性', '长度'], answer: 0, explain: '补充说明。' }
        ],
        doc: { lead: '这一章讲基础。', sections: [
          { id: 'patterns', title: '五种句型', html: `<p>SV、SVO、SVP、SVOO、SVOC；扩展与转换。</p>` },
          { id: 'classes', title: '词类', html: `<p>名词、动词、形容词、副词、介词、连词、限定词。</p>` }
        ], refs: [] } },
      { title: '名词与限定词', brief: '数与指称。',
        q: [
          { stem: '不可数名词的量化表达是：', options: ['a piece of / an item of', 'a 直接加', '数词直接加', '不能量化'], answer: 0, explain: '量词。' },
          { stem: '定冠词 the 的典型用法是：', options: ['特指双方已知', '泛指', '唯一用 a', '不用'], answer: 0, explain: '特指。' },
          { stem: '主谓一致中 "the number of" 后接：', options: ['单数谓语', '复数谓语', '都可', '不用谓语'], answer: 0, explain: '单数。' }
        ],
        doc: { lead: '这一章讲名词。', sections: [
          { id: 'count', title: '可数与不可数', html: `<p>复数变化、量词、物质与抽象名词。</p>` },
          { id: 'articles', title: '冠词与限定', html: `<p>a/an/the 的用法；some/any/all/both/each。</p>` }
        ], refs: [] } },
      { title: '动词与配价', brief: '动词决定句型。',
        q: [
          { stem: '及物与不及物动词的区别是：', options: ['是否带宾语', '是否有时态', '是否可被动', '是否规则'], answer: 0, explain: '宾语。' },
          { stem: '系动词后接：', options: ['表语', '宾语', '状语', '定语'], answer: 0, explain: '表语。' },
          { stem: '短语动词的宾语位置取决于：', options: ['是否可分（ separable）', '词义', '时态', '语态'], answer: 0, explain: '可分离。' }
        ],
        doc: { lead: '这一章讲动词。', sections: [
          { id: 'types', title: '类型', html: `<p>及物、不及物、系动词、助动词、情态动词。</p>` },
          { id: 'patterns', title: '搭配', html: `<p>动词 + to do / doing；双宾与复合宾语。</p>` }
        ], refs: [] } },
      { title: '时态与体', brief: '时间系统。',
        q: [
          { stem: '过去完成时表示：', options: ['过去的过去', '将来', '现在', '习惯'], answer: 0, explain: '过去之前。' },
          { stem: '将来进行时表示：', options: ['将来某时正在进行', '将来完成', '过去', '习惯'], answer: 0, explain: '进行。' },
          { stem: '时态选择的依据是：', options: ['时间状语与语境', '主语人称', '词性', '句子长度'], answer: 0, explain: '语境。' }
        ],
        doc: { lead: '这一章讲时态。', sections: [
          { id: 'sixteen', title: '十六种组合', html: `<p>三时 × 四体；常用八种优先掌握。</p>` },
          { id: 'context', title: '语境', html: `<p>时间标志、叙事时态、时态呼应。</p>` }
        ], refs: [] } },
      { title: '非谓语与从句', brief: '复杂句的两大来源。',
        q: [
          { stem: '不定式与动名词作宾语的区别取决于：', options: ['动词搭配', '句子长度', '主语人称', '时态'], answer: 0, explain: '搭配。' },
          { stem: '关系代词 that 不能用于：', options: ['非限定性定语从句', '限定性定语从句', '同位语从句', '主语从句'], answer: 0, explain: '非限定。' },
          { stem: '状语从句的省略条件是：', options: ['主语一致且谓语含 be', '任何情况', '从句短', '主句长'], answer: 0, explain: '省略。' }
        ],
        doc: { lead: '这一章讲复杂句。', sections: [
          { id: 'nonfinite', title: '非谓语', html: `<p>作定语、状语、补语；悬垂修饰语的错误。</p>` },
          { id: 'clauses', title: '从句', html: `<p>名词性、关系、状语；从句的嵌套与简化。</p>` }
        ], refs: [] } },
      { title: '一致、倒装与强调', brief: '特殊结构。',
        q: [
          { stem: '倒装的常见触发是：', options: ['否定词置于句首', '主语长', '谓语短', '从句'], answer: 0, explain: '否定倒装。' },
          { stem: '强调句 "It is ... that" 可以强调：', options: ['主语、宾语、状语', '只有主语', '只有宾语', '谓语唯一'], answer: 0, explain: '多种成分。' },
          { stem: '主谓一致中 "either...or" 遵循：', options: ['就近原则', '就远原则', '复数优先', '单数优先'], answer: 0, explain: '就近。' }
        ],
        doc: { lead: '这一章讲特殊结构。', sections: [
          { id: 'agreement', title: '一致', html: `<p>语法一致、意义一致、就近原则。</p>` },
          { id: 'emphasis', title: '倒装与强调', html: `<p>全倒装/部分倒装；it 强调句；do 强调。</p>` }
        ], refs: [] } },
      { title: '语法教学', brief: '怎么讲语法。',
        q: [
          { stem: '演绎法与归纳法的区别是：', options: ['先讲规则 vs 先给例子', '是否用中文', '是否考试', '是否练习'], answer: 0, explain: '顺序。' },
          { stem: '语法教学的有效原则是：', options: ['形式—意义—使用三维', '只讲形式', '只讲意义', '只做题'], answer: 0, explain: '三维。' },
          { stem: '语法练习应从什么开始？', options: ['控制性练习到自由运用', '自由运用', '只做选择题', '只翻译'], answer: 0, explain: '梯度。' }
        ],
        doc: { lead: '这一章讲教学。', sections: [
          { id: 'approaches', title: '方法', html: `<p>演绎、归纳、任务型；形式—意义—使用。</p>` },
          { id: 'practice', title: '练习', html: `<p>机械—有意义—交际；纠错的时机与方式。</p>` }
        ], refs: [] } }
    ] },

    /* ---- 大二 ---- */
    { name: '综合英语（二）', chapters: [
      { title: '篇章结构', brief: '从段到篇。',
        q: [
          { stem: '说明文常见的组织方式不包括：', options: ['因果', '比较', '分类', '抒情'], answer: 3, explain: '抒情属文学。' },
          { stem: '主题句通常位于：', options: ['段首（也可见段中/段尾）', '只能段首', '只能段尾', '没有'], answer: 0, explain: '常见段首。' },
          { stem: '篇章分析的起点是：', options: ['找出主旨与结构', '查生词', '背句型', '做练习'], answer: 0, explain: '主旨。' }
        ],
        doc: { lead: '这一章讲篇章。', sections: [
          { id: 'patterns', title: '组织模式', html: `<p>时间、因果、比较对比、问题解决、分类。</p>` },
          { id: 'analysis', title: '分析', html: `<p>主旨—段落功能—衔接手段—作者立场。</p>` }
        ], refs: [] } },
      { title: '长难句', brief: '拆解的艺术。',
        q: [
          { stem: '长难句分析的第一步是：', options: ['找主谓宾主干', '逐词翻译', '找标点', '跳过'], answer: 0, explain: '主干。' },
          { stem: '同位语、插入语的作用是：', options: ['补充说明，可先剥离', '构成主干', '替代谓语', '改变时态'], answer: 0, explain: '补充。' },
          { stem: '并列与从属的区别是：', options: ['结构层级', '长度', '语态', '时态'], answer: 0, explain: '层级。' }
        ],
        doc: { lead: '这一章讲句子。', sections: [
          { id: 'steps', title: '三步', html: `<p>找主干 → 剥离修饰 → 还原逻辑关系。</p>` },
          { id: 'practice', title: '练习', html: `<p>每天两句：划成分、译大意、比参考译文。</p>` }
        ], refs: [] } },
      { title: '修辞与文体', brief: '语言的层次。',
        q: [
          { stem: '暗喻（metaphor）与明喻（simile）的区别是：', options: ['是否用 like/as', '是否夸张', '是否重复', '是否押韵'], answer: 0, explain: '比喻词。' },
          { stem: '正式文体与口语体的差异体现在：', options: ['词汇、句式、衔接', '只有词汇', '只有句式', '没有差异'], answer: 0, explain: '多层。' },
          { stem: '反讽（irony）的常见形式是：', options: ['字面与意图相反', '夸张', '重复', '排比'], answer: 0, explain: '反讽。' }
        ],
        doc: { lead: '这一章讲修辞。', sections: [
          { id: 'figures', title: '辞格', html: `<p>simile、metaphor、personification、hyperbole、irony、parallelism。</p>` },
          { id: 'register', title: '语域', html: `<p>正式/中性/口语；学术与新闻文体特征。</p>` }
        ], refs: [] } },
      { title: '学术词汇', brief: '从通用到学术。',
        q: [
          { stem: '学术英语词汇的特点是：', options: ['拉丁词源多、抽象名词化', '全是俚语', '全是短语动词', '无词形变化'], answer: 0, explain: '特征。' },
          { stem: '名词化（nominalization）的作用是：', options: ['使表达更正式紧凑', '使句子更长', '增加感情', '口语化'], answer: 0, explain: '正式。' },
          { stem: '搭配（collocation）错误会：', options: ['影响地道性与可读性', '不影响', '改变时态', '改变语态'], answer: 0, explain: '地道。' }
        ],
        doc: { lead: '这一章讲词汇。', sections: [
          { id: 'features', title: '特征', html: `<p>抽象名词、学术动词、 hedges（may, suggest）。</p>` },
          { id: 'learning', title: '学习', html: `<p>按主题与搭配记；学术词表 AWL；语料库查询。</p>` }
        ], refs: [] } },
      { title: '语篇分析', brief: '看作者怎么组织。',
        q: [
          { stem: '语篇的衔接与连贯分别指：', options: ['形式连接 vs 意义连贯', '相同', '相反', '无关'], answer: 0, explain: '形式/意义。' },
          { stem: '作者立场可通过什么识别？', options: ['情态词、评价性词汇、引述方式', '只有标点', '只有长度', '只有标题'], answer: 0, explain: '语言标记。' },
          { stem: '互文性指：', options: ['文本与其他文本的关联', '文本独立', '作者独创', '读者无关'], answer: 0, explain: '互文。' }
        ],
        doc: { lead: '这一章讲语篇。', sections: [
          { id: 'cohesion', title: '衔接', html: `<p>连接、指代、词汇衔接；信息结构。</p>` },
          { id: 'stance', title: '立场', html: `<p>情态、评价、引述；互文与话语共同体。</p>` }
        ], refs: [] } },
      { title: '批判性阅读', brief: '不被文本牵着走。',
        q: [
          { stem: '批判性阅读的核心是：', options: ['评估论证与证据', '挑错', '背诵', '速读'], answer: 0, explain: '评估。' },
          { stem: '识别作者假设的意义是：', options: ['判断论证是否成立', '增加词汇', '练习语法', '提高速度'], answer: 0, explain: '论证。' },
          { stem: '证据强度的判断标准包括：', options: ['来源、样本、方法', '长度', '语言', '排版'], answer: 0, explain: '证据。' }
        ],
        doc: { lead: '这一章讲批判。', sections: [
          { id: 'evaluate', title: '评估', html: `<p>论点—论据—假设—反驳；区分事实与观点。</p>` },
          { id: 'bias', title: '偏见', html: `<p>来源偏向、选择性证据、框架效应。</p>` }
        ], refs: [] } },
      { title: '写作衔接', brief: '把读转化为写。',
        q: [
          { stem: '读写结合的有效方式是：', options: ['仿写与改写', '只读不写', '只写不读', '背范文'], answer: 0, explain: '仿写。' },
          { stem: '摘要写作应包含：', options: ['目的、方法、结果、结论', '只有结论', '只有背景', '个人评价'], answer: 0, explain: '四要素。' },
          { stem: '改写（paraphrase）的关键是：', options: ['换结构换词但保意义', '换词不换结构', '照抄', '删减'], answer: 0, explain: '改述。' }
        ],
        doc: { lead: '这一章讲读写。', sections: [
          { id: 'summary', title: '摘要', html: `<p>压缩到 1/4；保留主干信息；用自己的话。</p>` },
          { id: 'paraphrase', title: '改写', html: `<p>同义替换、句式转换、语态调整；避免抄袭。</p>` }
        ], refs: [] } },
      { title: '综合训练', brief: '把能力合起来。',
        q: [
          { stem: '综合英语的考查重点是：', options: ['语言综合运用能力', '单词量唯一', '语法唯一', '翻译唯一'], answer: 0, explain: '综合。' },
          { stem: '错题整理的有效方式是：', options: ['按错误类型归类', '只抄题', '只记答案', '不做'], answer: 0, explain: '归类。' },
          { stem: '提升综合能力的关键是：', options: ['大量可理解输入 + 输出练习', '只做题', '只背单词', '只看语法书'], answer: 0, explain: '输入输出。' }
        ],
        doc: { lead: '这一章讲训练。', sections: [
          { id: 'loop', title: '循环', html: `<p>输入（读听）→ 内化（笔记/复述）→ 输出（说写）→ 反馈。</p>` },
          { id: 'review', title: '复盘', html: `<p>错题本按题型与错误类型双维度整理。</p>` }
        ], refs: [] } }
    ] },
    { name: '英语听力', chapters: [
      { title: '听力微技能', brief: '听什么、怎么听。',
        q: [
          { stem: '听力理解的核心微技能不包括：', options: ['辨音', '预测', '抓关键词', '逐字翻译'], answer: 3, explain: '不必逐字。' },
          { stem: '听前预测的依据是：', options: ['题干、选项、背景知识', '猜测', '运气', '语速'], answer: 0, explain: '预测。' },
          { stem: '听力笔记应记录：', options: ['关键词与逻辑关系', '全部原句', '只有数字', '只有人名'], answer: 0, explain: '要点。' }
        ],
        doc: { lead: '这一章讲技能。', sections: [
          { id: 'skills', title: '微技能', html: `<p>辨音、预测、抓主旨、记细节、推断态度。</p>` },
          { id: 'habit', title: '习惯', html: `<p>先看题、边听边记、听后核对；不纠结单个词。</p>` }
        ], refs: [] } },
      { title: '语音辨识', brief: '听不懂往往是听不出。',
        q: [
          { stem: '连读与弱读会造成：', options: ['词界模糊、听辨困难', '语速变慢', '语法错误', '无影响'], answer: 0, explain: '语流。' },
          { stem: '提高辨音的有效方法是：', options: ['跟读与听写', '只做题', '只背单词', '只看文本'], answer: 0, explain: '跟读。' },
          { stem: '听写训练的作用是：', options: ['暴露语音与拼写问题', '提高写作', '提高口语唯一', '无作用'], answer: 0, explain: '诊断。' }
        ],
        doc: { lead: '这一章讲辨音。', sections: [
          { id: 'features', title: '语流特征', html: `<p>连读、弱读、同化、省音、失去爆破。</p>` },
          { id: 'training', title: '训练', html: `<p>精听一段 + 听写 + 对照原文 + 跟读模仿。</p>` }
        ], refs: [] } },
      { title: '笔记方法', brief: '听的时候写什么。',
        q: [
          { stem: '听力笔记的常用符号系统是：', options: ['缩写、箭头、符号', '完整句子', '汉语', '图画'], answer: 0, explain: '速记。' },
          { stem: '讲座听力中应重点记录：', options: ['结构信号与例证', '每个形容词', '语气词', '口头禅'], answer: 0, explain: '结构。' },
          { stem: '笔记与答题的关系是：', options: ['笔记服务于题目定位', '笔记越多越好', '不用笔记', '只记数字'], answer: 0, explain: '定位。' }
        ],
        doc: { lead: '这一章讲笔记。', sections: [
          { id: 'system', title: '系统', html: `<p>缩写规则、逻辑符号（→ ∴ ∵）、分栏记录。</p>` },
          { id: 'signals', title: '信号词', html: `<p>first, however, therefore, for example；转折与结论处出题。</p>` }
        ], refs: [] } },
      { title: '新闻听力', brief: 'BBC/VOA 怎么听。',
        q: [
          { stem: '新闻听力的结构通常是：', options: ['倒金字塔（导语在前）', '顺叙', '插叙', '无结构'], answer: 0, explain: '导语。' },
          { stem: '新闻中数字与专名是：', options: ['重要信息点', '可忽略', '干扰项', '装饰'], answer: 0, explain: '信息。' },
          { stem: '适应新闻语速的方法是：', options: ['先慢速后原速 + 反复精听', '只听慢速', '只听原速', '放弃'], answer: 0, explain: '梯度。' }
        ],
        doc: { lead: '这一章讲新闻。', sections: [
          { id: 'structure', title: '结构', html: `<p>导语—细节—背景；5W1H。</p>` },
          { id: 'practice', title: '练习', html: `<p>一篇新闻听三遍：抓大意—记细节—核对文本。</p>` }
        ], refs: [] } },
      { title: '学术讲座', brief: '听课与考试。',
        q: [
          { stem: '学术讲座的典型结构是：', options: ['引入—主体—总结', '只有主体', '问答', '无结构'], answer: 0, explain: '三段。' },
          { stem: '讲座中举例的作用是：', options: ['解释抽象概念', '凑时间', '装饰', '增加难度'], answer: 0, explain: '解释。' },
          { stem: '听讲座最怕：', options: ['纠结生词错过结构', '记太多', '听太快', '不记笔记'], answer: 0, explain: '结构优先。' }
        ],
        doc: { lead: '这一章讲讲座。', sections: [
          { id: 'structure', title: '结构', html: `<p>话题引入、定义、分类、举例、结论；信号词。</p>` },
          { id: 'strategy', title: '策略', html: `<p>抓结构、记关键词、容忍模糊。</p>` }
        ], refs: [] } },
      { title: '应试策略', brief: '分数怎么来。',
        q: [
          { stem: '听力考试中遇到没听清的题应：', options: ['果断放弃、跟上后面的', '反复回想', '回头再听', '猜完就停'], answer: 0, explain: '跟上节奏。' },
          { stem: '选项预读的价值是：', options: ['预测内容与定位', '浪费时间', '提高语速', '无价值'], answer: 0, explain: '预测。' },
          { stem: '听力成绩提升的关键是：', options: ['持续精听 + 泛听结合', '只做真题', '只背词汇', '只练技巧'], answer: 0, explain: '训练量。' }
        ],
        doc: { lead: '这一章讲应试。', sections: [
          { id: 'before', title: '听前', html: `<p>读题、圈关键词、预测场景。</p>` },
          { id: 'during', title: '听中与听后', html: `<p>定位、速记、果断取舍；核对与复盘。</p>` }
        ], refs: [] } },
      { title: '材料选择', brief: '听什么最有效。',
        q: [
          { stem: '听力材料的选择原则是：', options: ['i+1（略高于现有水平）', '越难越好', '越简单越好', '只看兴趣'], answer: 0, explain: '可理解输入。' },
          { stem: '泛听的作用是：', options: ['增加输入量、适应语流', '精确定位', '记笔记', '做题'], answer: 0, explain: '输入量。' },
          { stem: '精听与泛听的比例建议：', options: ['精听为主、泛听为辅', '只泛听', '只精听', '各半'], answer: 0, explain: '比例。' }
        ],
        doc: { lead: '这一章讲材料。', sections: [
          { id: 'levels', title: '难度', html: `<p>i+1；生词率控制；主题熟悉度。</p>` },
          { id: 'mix', title: '搭配', html: `<p>精听（听写/跟读）+ 泛听（播客/新闻）。</p>` }
        ], refs: [] } },
      { title: '自主听力', brief: '把听力变成习惯。',
        q: [
          { stem: '养成听力习惯的关键是：', options: ['固定时段与可完成的小目标', '一次性长听', '只在考试前', '只靠课堂'], answer: 0, explain: '习惯。' },
          { stem: '听力日记应记录：', options: ['材料、时长、难点、收获', '只有时长', '只有材料', '无记录'], answer: 0, explain: '记录。' },
          { stem: '听力瓶颈期的正确做法是：', options: ['换材料、降难度、保持输入', '放弃', '只做题', '只看文本'], answer: 0, explain: '调整。' }
        ],
        doc: { lead: '这一章讲自主。', sections: [
          { id: 'routine', title: '日常', html: `<p>每天 20–30 分钟；通勤泛听、晚上精听。</p>` },
          { id: 'plateau', title: '瓶颈', html: `<p>降难度重建信心；换主题；回到听写。</p>` }
        ], refs: [] } }
    ] },
    { name: '英语口语', chapters: [
      { title: '发音与流利度', brief: '说清楚比说复杂重要。',
        q: [
          { stem: '流利度的核心是：', options: ['连贯表达与合理停顿', '语速快', '词汇难', '无停顿'], answer: 0, explain: '流利。' },
          { stem: '影响可懂度的首要因素是：', options: ['发音与重音', '语法', '词汇量', '语速'], answer: 0, explain: '可懂度。' },
          { stem: '减少填充词的方法是：', options: ['用思考停顿替代 um/uh', '加快语速', '多说', '背稿'], answer: 0, explain: '停顿。' }
        ],
        doc: { lead: '这一章讲流利。', sections: [
          { id: 'fluency', title: '流利', html: `<p>语块、连接词、停顿策略；避免逐词翻译。</p>` },
          { id: 'clarity', title: '清晰', html: `<p>重音、节奏、清晰收尾；语速适中。</p>` }
        ], refs: [] } },
      { title: '功能句型', brief: '按功能说话。',
        q: [
          { stem: '表达不同意的礼貌说法是：', options: ['I see your point, but...', 'You are wrong.', 'No.', 'Shut up.'], answer: 0, explain: '礼貌。' },
          { stem: '请求帮助的常用句型是：', options: ['Could you possibly...?', 'You must...', 'Give me...', 'Do it.'], answer: 0, explain: '礼貌。' },
          { stem: '功能句型的价值在于：', options: ['提高得体性与反应速度', '增加词汇', '练习语法', '提高写作'], answer: 0, explain: '得体。' }
        ],
        doc: { lead: '这一章讲句型。', sections: [
          { id: 'functions', title: '功能', html: `<p>请求、建议、同意/反对、道歉、感谢、澄清。</p>` },
          { id: 'register', title: '得体', html: `<p>正式与随意；语气的调节（hedging）。</p>` }
        ], refs: [] } },
      { title: '情景对话', brief: '在场景中说话。',
        q: [
          { stem: '情景对话的关键是：', options: ['完成交际任务', '语法正确唯一', '词汇高级', '语速快'], answer: 0, explain: '任务。' },
          { stem: '角色扮演的价值是：', options: ['练习真实语境中的应变', '背台词', '提高听力', '考试'], answer: 0, explain: '应变。' },
          { stem: '对话中听不懂时应：', options: ['请求重复或澄清', '沉默', '点头', '转移话题'], answer: 0, explain: '澄清。' }
        ],
        doc: { lead: '这一章讲情景。', sections: [
          { id: 'tasks', title: '任务', html: `<p>点餐、问路、面试、投诉；信息差活动。</p>` },
          { id: 'repair', title: '修补', html: `<p>Pardon? / Could you say that again? / Do you mean...?</p>` }
        ], refs: [] } },
      { title: '讨论与辩论', brief: '有观点地说话。',
        q: [
          { stem: '辩论中提出论点的结构是：', options: ['观点—理由—例证', '观点', '理由', '例证'], answer: 0, explain: '三段。' },
          { stem: '回应对方观点的有效方式是：', options: ['先承认再反驳', '直接否定', '回避', '重复'], answer: 0, explain: '让步反驳。' },
          { stem: '小组讨论中推进话题的用语是：', options: ['Shall we move on to...?', 'Stop.', 'No.', 'Bye.'], answer: 0, explain: '推进。' }
        ],
        doc: { lead: '这一章讲讨论。', sections: [
          { id: 'argument', title: '论证', html: `<p>立场—理由—证据—回应；让步与反驳。</p>` },
          { id: 'management', title: '话语管理', html: `<p>接话、打断、总结、推进；轮次与礼貌。</p>` }
        ], refs: [] } },
      { title: '演讲', brief: '站着说服人。',
        q: [
          { stem: '演讲开头最常见的策略是：', options: ['提问、故事、数据', '自我介绍唯一', '道歉', '读稿'], answer: 0, explain: '开场。' },
          { stem: '演讲结构的经典公式是：', options: ['总—分—总', '分—总', '总—分', '无结构'], answer: 0, explain: '三段。' },
          { stem: '演讲中的肢体语言应：', options: ['自然、有目的', '越多越好', '完全不动', '背对观众'], answer: 0, explain: '自然。' }
        ],
        doc: { lead: '这一章讲演讲。', sections: [
          { id: 'structure', title: '结构', html: `<p>开场抓注意、主体三点、结尾回扣与行动号召。</p>` },
          { id: 'delivery', title: '呈现', html: `<p>目光、语速、停顿、手势；PPT 少字多图。</p>` }
        ], refs: [] } },
      { title: '跨文化交际', brief: '文化也在说话。',
        q: [
          { stem: '高语境与低语境文化的区别是：', options: ['信息是否依赖语境', '语言难度', '经济发展', '人口'], answer: 0, explain: '语境。' },
          { stem: '跨文化交际中的常见误解来自：', options: ['价值观与交际规范差异', '语法错误', '发音', '词汇量'], answer: 0, explain: '规范。' },
          { stem: '提高跨文化能力的途径是：', options: ['知识、态度、技能并重', '只学语言', '只读书', '只出国'], answer: 0, explain: '三维。' }
        ],
        doc: { lead: '这一章讲文化。', sections: [
          { id: 'concepts', title: '概念', html: `<p>高低语境、个人/集体主义、权力距离、面子。</p>` },
          { id: 'skills', title: '技能', html: `<p>观察、提问、悬置判断、适应与反思。</p>` }
        ], refs: [] } },
      { title: '口语评价与练习', brief: '怎么练得准。',
        q: [
          { stem: '口语评价的常见维度是：', options: ['流利度、准确性、复杂度、互动', '只有流利', '只有准确', '只有发音'], answer: 0, explain: '多维。' },
          { stem: '录音自评的价值是：', options: ['发现自己的问题', '提高听力唯一', '增加词汇', '无价值'], answer: 0, explain: '反馈。' },
          { stem: '提高口语的有效方法是：', options: ['大量可理解输入 + 高频输出', '只背单词', '只看剧', '只做题'], answer: 0, explain: '输入输出。' }
        ],
        doc: { lead: '这一章讲练习。', sections: [
          { id: 'criteria', title: '标准', html: `<p>流利、准确、丰富、得体、互动。</p>` },
          { id: 'practice', title: '方法', html: `<p>影子跟读、复述、话题卡、语伴；录音复盘。</p>` }
        ], refs: [] } }
    ] },

    /* ---- 大三 ---- */
    { name: '英语阅读', chapters: [
      { title: '阅读策略', brief: '按目的读。',
        q: [
          { stem: 'skimming 与 scanning 的区别是：', options: ['抓大意 vs 找特定信息', '精读 vs 泛读', '朗读 vs 默读', '快 vs 慢'], answer: 0, explain: '两种。' },
          { stem: '阅读策略的选择取决于：', options: ['阅读目的与文本类型', '文本长度', '生词量', '排版'], answer: 0, explain: '目的。' },
          { stem: '预测与验证的作用是：', options: ['激活背景、提高理解', '增加难度', '浪费时间', '无作用'], answer: 0, explain: '激活。' }
        ],
        doc: { lead: '这一章讲策略。', sections: [
          { id: 'types', title: '类型', html: `<p>略读、寻读、精读、批判性阅读；策略组合。</p>` },
          { id: 'before', title: '读前', html: `<p>看标题与结构、激活图式、预测内容。</p>` }
        ], refs: [] } },
      { title: '体裁与结构', brief: '不同文章不同读法。',
        q: [
          { stem: '议论文的典型结构是：', options: ['论点—论据—结论', '时间顺序', '因果链', '分类'], answer: 0, explain: '论证。' },
          { stem: '说明文常用的组织方式不包括：', options: ['比较', '分类', '因果', '抒情'], answer: 3, explain: '抒情。' },
          { stem: '识别文本结构的作用是：', options: ['快速定位信息', '增加词汇', '练习语法', '提高速度唯一'], answer: 0, explain: '定位。' }
        ],
        doc: { lead: '这一章讲体裁。', sections: [
          { id: 'patterns', title: '模式', html: `<p>问题—解决、比较—对比、因果、分类、时间线。</p>` },
          { id: 'signals', title: '信号', html: `<p>标题、小标题、首末句、连接词；段落功能标注。</p>` }
        ], refs: [] } },
      { title: '词汇猜测', brief: '不认识也能读。',
        q: [
          { stem: '猜词的重要线索不包括：', options: ['上下文', '构词法', '标点与同位语', '字数'], answer: 3, explain: '字数无关。' },
          { stem: '定义线索常见于：', options: ['同位语与破折号', '问号', '感叹号', '省略号'], answer: 0, explain: '定义。' },
          { stem: '遇到生词的正确做法是：', options: ['先跳过、把握整体', '立即查词典', '逐字翻译', '放弃'], answer: 0, explain: '整体。' }
        ],
        doc: { lead: '这一章讲猜词。', sections: [
          { id: 'clues', title: '线索', html: `<p>定义、举例、对比、因果、构词法。</p>` },
          { id: 'balance', title: '取舍', html: `<p>关键词必须查，非关键词可跳过；建立"容忍模糊"的能力。</p>` }
        ], refs: [] } },
      { title: '推理与判断', brief: '读出言外之意。',
        q: [
          { stem: '推断题的依据是：', options: ['文本证据 + 逻辑', '常识', '猜测', '作者名气'], answer: 0, explain: '证据。' },
          { stem: '作者态度题的信号词包括：', options: ['fortunately, sadly, arguably', 'the, a', 'and, or', 'is, are'], answer: 0, explain: '评价词。' },
          { stem: '过度推断的表现是：', options: ['超出文本提供的信息', '引用原文', '概括主旨', '找细节'], answer: 0, explain: '过度。' }
        ],
        doc: { lead: '这一章讲推理。', sections: [
          { id: 'inference', title: '推断', html: `<p>基于证据的合理结论；区分事实与推断。</p>` },
          { id: 'attitude', title: '态度', html: `<p>评价性词汇、情态、引述方式；语气与立场。</p>` }
        ], refs: [] } },
      { title: '长篇阅读', brief: '耐力与方法。',
        q: [
          { stem: '长篇阅读的有效策略是：', options: ['先结构后细节、分段推进', '从头逐字读', '只看首尾', '跳读全部'], answer: 0, explain: '结构。' },
          { stem: '阅读速度与理解的关系是：', options: ['存在最佳区间，不是越快越好', '越快越好', '越慢越好', '无关'], answer: 0, explain: '平衡。' },
          { stem: '长文记忆负担的解决办法是：', options: ['做结构笔记与关键词', '反复重读', '背诵', '只看摘要'], answer: 0, explain: '笔记。' }
        ],
        doc: { lead: '这一章讲长篇。', sections: [
          { id: 'chunking', title: '分块', html: `<p>按章节/段落功能切块；每块一句话概括。</p>` },
          { id: 'pace', title: '节奏', html: `<p>难易段落变速；设定时间与目标。</p>` }
        ], refs: [] } },
      { title: '文学阅读', brief: '读小说与诗歌。',
        q: [
          { stem: '文学阅读的核心是：', options: ['细读文本、体会语言与主题', '只查生词', '只了解情节', '只看背景'], answer: 0, explain: '细读。' },
          { stem: '叙事视角的分析价值是：', options: ['影响读者对人物的理解', '增加字数', '装饰', '语法练习'], answer: 0, explain: '视角。' },
          { stem: '诗歌阅读应关注：', options: ['意象、韵律、语气', '只有情节', '只有作者', '只有背景'], answer: 0, explain: '诗歌要素。' }
        ],
        doc: { lead: '这一章讲文学。', sections: [
          { id: 'close', title: '细读', html: `<p>意象、叙事视角、语气、结构；文本证据。</p>` },
          { id: 'context', title: '语境', html: `<p>作者与时代、文学传统；避免以传代评。</p>` }
        ], refs: [] } },
      { title: '报刊阅读', brief: '新闻与评论。',
        q: [
          { stem: '新闻标题的语言特点是：', options: ['省略、简短、时态特殊', '长句', '古语', '押韵'], answer: 0, explain: '标题体。' },
          { stem: '社论与新闻报道的区别是：', options: ['是否表达立场', '长短', '时效', '版面'], answer: 0, explain: '立场。' },
          { stem: '报刊阅读的价值是：', options: ['扩大词汇与背景知识', '只练速度', '只练语法', '应付考试'], answer: 0, explain: '综合。' }
        ],
        doc: { lead: '这一章讲报刊。', sections: [
          { id: 'news', title: '新闻', html: `<p>标题语法、导语结构、常用表达；客观性修辞。</p>` },
          { id: 'opinion', title: '评论', html: `<p>论点与论据、修辞策略、立场标记。</p>` }
        ], refs: [] } },
      { title: '阅读教学', brief: '怎么教阅读。',
        q: [
          { stem: '阅读教学的三阶段是：', options: ['读前、读中、读后', '导入、讲授、作业', '预习、上课、复习', '听、说、读'], answer: 0, explain: '三阶段。' },
          { stem: '读中活动的核心是：', options: ['引导学生与文本互动', '讲解全部生词', '翻译全文', '做题'], answer: 0, explain: '互动。' },
          { stem: '读后活动的常见形式是：', options: ['复述、讨论、写作延伸', '只做选择题', '只背单词', '只讲语法'], answer: 0, explain: '延伸。' }
        ],
        doc: { lead: '这一章讲教学。', sections: [
          { id: 'stages', title: '三阶段', html: `<p>读前激活、读中设问、读后输出。</p>` },
          { id: 'skills', title: '技能', html: `<p>策略显性教学；分层次提问；文本与读者互动。</p>` }
        ], refs: [] } }
    ] },
    { name: '英语写作', chapters: [
      { title: '句子', brief: '从正确到有力。',
        q: [
          { stem: '句子片段（fragment）的问题是：', options: ['缺少主谓或不能独立成句', '太长', '太短', '用词难'], answer: 0, explain: '不完整。' },
          { stem: '逗号粘连（comma splice）指：', options: ['用逗号连接两个独立句', '逗号用错位置', '缺少逗号', '逗号太多'], answer: 0, explain: '粘连。' },
          { stem: '提升句子多样性的方法是：', options: ['变换句式与长度', '全用长句', '全用短句', '全用简单句'], answer: 0, explain: '多样。' }
        ],
        doc: { lead: '这一章讲句子。', sections: [
          { id: 'errors', title: '常见错误', html: `<p>片段、粘连、悬垂修饰、平行结构不一致。</p>` },
          { id: 'variety', title: '变化', html: `<p>长短交替、句式变换、主从结合。</p>` }
        ], refs: [] } },
      { title: '段落', brief: '一个段落一个中心。',
        q: [
          { stem: '段落的三要素是：', options: ['主题句、支撑句、结论句', '开头、中间、结尾', '词、句、篇', '描写、叙述、议论'], answer: 0, explain: '三要素。' },
          { stem: '支撑句的展开方式包括：', options: ['举例、解释、对比、因果', '只有举例', '只有解释', '只有对比'], answer: 0, explain: '多种。' },
          { stem: '段落统一性要求：', options: ['所有句子服务于同一中心', '句子一样长', '用词高级', '句式复杂'], answer: 0, explain: '统一。' }
        ],
        doc: { lead: '这一章讲段落。', sections: [
          { id: 'structure', title: '结构', html: `<p>主题句—支撑—小结；过渡与照应。</p>` },
          { id: 'development', title: '展开', html: `<p>举例、定义、分类、比较、因果、过程。</p>` }
        ], refs: [] } },
      { title: '篇章结构', brief: '文章怎么搭。',
        q: [
          { stem: '五段式作文的典型结构是：', options: ['引言—三个主体段—结论', '两段', '四段', '一段'], answer: 0, explain: '五段。' },
          { stem: '引言段的功能是：', options: ['引入话题 + 提出论点', '列举论据', '总结', '举例'], answer: 0, explain: '引入。' },
          { stem: '结论段应：', options: ['重申论点并升华', '提出新论点', '重复引言', '列新证据'], answer: 0, explain: '收束。' }
        ],
        doc: { lead: '这一章讲篇章。', sections: [
          { id: 'outline', title: '提纲', html: `<p>论点—分论点—论据；先列提纲再写。</p>` },
          { id: 'coherence', title: '连贯', html: `<p>段落间过渡、首尾呼应、逻辑推进。</p>` }
        ], refs: [] } },
      { title: '议论文', brief: '论证的艺术。',
        q: [
          { stem: '议论文的核心是：', options: ['论点明确 + 论证有力', '辞藻华丽', '篇幅长', '引用多'], answer: 0, explain: '论证。' },
          { stem: '常见的论证方法包括：', options: ['举例、说理、对比、引用', '只有举例', '只有引用', '只有对比'], answer: 0, explain: '多种。' },
          { stem: '让步段的作用是：', options: ['承认对方合理处再反驳，增强说服力', '凑字数', '削弱论点', '跑题'], answer: 0, explain: '让步。' }
        ],
        doc: { lead: '这一章讲议论。', sections: [
          { id: 'argument', title: '论证', html: `<p>论点—理由—证据—分析；避免空喊口号。</p>` },
          { id: 'counter', title: '反方', html: `<p>让步与反驳；体现批判性思维。</p>` }
        ], refs: [] } },
      { title: '说明文与应用文', brief: '把事说清楚。',
        q: [
          { stem: '说明文的核心是：', options: ['准确清晰地说明对象', '说服', '抒情', '叙事'], answer: 0, explain: '说明。' },
          { stem: '申请信应包含：', options: ['目的、背景、请求、礼貌结尾', '只有请求', '只有背景', '个人感想'], answer: 0, explain: '结构。' },
          { stem: '应用文的语体要求是：', options: ['得体、简洁、格式规范', '华丽', '随意', '冗长'], answer: 0, explain: '规范。' }
        ],
        doc: { lead: '这一章讲应用。', sections: [
          { id: 'expository', title: '说明文', html: `<p>定义、分类、过程、因果；客观准确。</p>` },
          { id: 'letters', title: '应用文', html: `<p>书信、邮件、通知、申请；格式与语气。</p>` }
        ], refs: [] } },
      { title: '学术写作', brief: '论文的语言。',
        q: [
          { stem: '学术写作的特征是：', options: ['客观、精确、有据', '主观', '口语化', '情绪化'], answer: 0, explain: '客观。' },
          { stem: '文献引用规范的作用是：', options: ['可追溯、避免抄袭', '凑数', '装饰', '增加篇幅'], answer: 0, explain: '规范。' },
          { stem: '学术写作中的 hedging 指：', options: ['用 may/suggest 等弱化断言', '夸大结论', '省略引用', '使用口语'], answer: 0, explain: '谨慎表达。' }
        ],
        doc: { lead: '这一章讲学术。', sections: [
          { id: 'features', title: '特征', html: `<p>正式、客观、精确、连贯；名词化与被动。</p>` },
          { id: 'citation', title: '引用', html: `<p>APA/MLA；直接引用与改述；参考文献。</p>` }
        ], refs: [] } },
      { title: '修改与评价', brief: '好文章是改出来的。',
        q: [
          { stem: '修改的正确顺序是：', options: ['内容—结构—语言—格式', '格式—语言—结构', '语言唯一', '格式唯一'], answer: 0, explain: '先大后小。' },
          { stem: '同伴互评的价值是：', options: ['获得读者视角', '节省时间', '替代教师', '提高分数'], answer: 0, explain: '读者视角。' },
          { stem: '写作评价的常见维度是：', options: ['内容、组织、语言、规范', '只有语言', '只有内容', '只有字数'], answer: 0, explain: '多维。' }
        ],
        doc: { lead: '这一章讲修改。', sections: [
          { id: 'revision', title: '修改', html: `<p>宏观修改与微观校对；朗读检验；间隔修改。</p>` },
          { id: 'rubric', title: '评价', html: `<p>量规：任务完成、连贯、词汇、语法、规范。</p>` }
        ], refs: [] } }
    ] },
    { name: '翻译理论与实践', chapters: [
      { title: '翻译标准', brief: '信达雅与对等。',
        q: [
          { stem: '严复提出的翻译标准是：', options: ['信、达、雅', '忠实、通顺', '功能对等', '等效'], answer: 0, explain: '严复。' },
          { stem: '奈达提出的核心概念是：', options: ['功能对等', '信达雅', '直译', '意译'], answer: 0, explain: 'Nida。' },
          { stem: '忠实与通顺的冲突应：', options: ['依文本目的权衡', '永远忠实', '永远通顺', '放弃'], answer: 0, explain: '权衡。' }
        ],
        doc: { lead: '这一章讲标准。', sections: [
          { id: 'history', title: '标准', html: `<p>信达雅、神似、化境；功能对等与目的论。</p>` },
          { id: 'tradeoff', title: '权衡', html: `<p>忠实（形式/内容）与通顺（目标语习惯）的平衡。</p>` }
        ], refs: [] } },
      { title: '直译与意译', brief: '两条路径。',
        q: [
          { stem: '直译的特点是：', options: ['保留原文形式与字面意义', '自由发挥', '只译大意', '改写'], answer: 0, explain: '直译。' },
          { stem: '意译适用于：', options: ['文化差异大、直译不通时', '任何情况', '只有诗歌', '只有法律'], answer: 0, explain: '适用。' },
          { stem: '死译与硬译的问题是：', options: ['不顾目标语习惯，难以理解', '太自由', '不忠实', '太短'], answer: 0, explain: '生硬。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'literal', title: '直译', html: `<p>形式对应、术语固定；适用于科技与法律文本。</p>` },
          { id: 'free', title: '意译', html: `<p>达意优先；文学与文化负载词常需意译。</p>` }
        ], refs: [] } },
      { title: '词义选择', brief: '一词多义怎么定。',
        q: [
          { stem: '确定词义的主要依据是：', options: ['上下文与搭配', '词典第一条', '个人喜好', '字数'], answer: 0, explain: '语境。' },
          { stem: '词义引申的常见方式包括：', options: ['具体化、抽象化、褒贬转换', '只有具体化', '只有抽象化', '随意'], answer: 0, explain: '引申。' },
          { stem: '搭配差异会导致：', options: ['直译生硬，需要调整', '无法翻译', '语法错误', '拼写错误'], answer: 0, explain: '搭配。' }
        ],
        doc: { lead: '这一章讲词义。', sections: [
          { id: 'context', title: '语境', html: `<p>搭配、语域、感情色彩；术语与普通义。</p>` },
          { id: 'shift', title: '转换', html: `<p>词类转换、具体与抽象、增词与减词。</p>` }
        ], refs: [] } },
      { title: '句法转换', brief: '结构不对等。',
        q: [
          { stem: '英译汉常见的句法转换是：', options: ['长句拆分、语序调整', '照搬语序', '全部合并', '不转换'], answer: 0, explain: '拆分。' },
          { stem: '被动转主动的原因是：', options: ['汉语被动使用较少、表达习惯不同', '语法禁止', '意思不同', '字数'], answer: 0, explain: '习惯。' },
          { stem: '定语从句的翻译常用：', options: ['前置、拆分、转状语', '只能前置', '只能后置', '不译'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲句法。', sections: [
          { id: 'split', title: '拆分与合并', html: `<p>长句拆短、短句合并；逻辑重组。</p>` },
          { id: 'voice', title: '语态与语序', html: `<p>被动转换、状语位置、主题突出。</p>` }
        ], refs: [] } },
      { title: '文化转换', brief: '译不过来怎么办。',
        q: [
          { stem: '文化负载词的常见处理是：', options: ['音译、意译、加注、替代', '删除', '忽略', '照搬'], answer: 0, explain: '多种。' },
          { stem: '归化与异化分别指：', options: ['向目标语靠拢 vs 保留源语特色', '直译 vs 意译', '增译 vs 减译', '口译 vs 笔译'], answer: 0, explain: 'Venuti。' },
          { stem: '习语翻译的难点是：', options: ['文化意象与联想不同', '字数', '语法', '标点'], answer: 0, explain: '意象。' }
        ],
        doc: { lead: '这一章讲文化。', sections: [
          { id: 'strategies', title: '策略', html: `<p>音译、直译加注、意译、替换、省略。</p>` },
          { id: 'debate', title: '归化异化', html: `<p>可读性与文化传递的张力；依文本目的选择。</p>` }
        ], refs: [] } },
      { title: '文学翻译', brief: '译味与译境。',
        q: [
          { stem: '文学翻译的核心是：', options: ['传达风格与审美效果', '字面对应', '术语准确', '格式规范'], answer: 0, explain: '风格。' },
          { stem: '诗歌翻译的难点是：', options: ['韵律、意象与意义难以兼得', '字数', '语法', '标点'], answer: 0, explain: '三难。' },
          { stem: '"神似"强调：', options: ['传达原作精神而非字面', '完全自由', '逐字对应', '改写'], answer: 0, explain: '神似。' }
        ],
        doc: { lead: '这一章讲文学。', sections: [
          { id: 'style', title: '风格', html: `<p>语体、节奏、意象；译者风格与作者风格。</p>` },
          { id: 'poetry', title: '诗歌', html: `<p>以诗译诗、散文化；韵律与意义的取舍。</p>` }
        ], refs: [] } },
      { title: '实用翻译', brief: '商务、科技、法律。',
        q: [
          { stem: '科技翻译的首要标准是：', options: ['准确、术语统一', '文采', '简洁唯一', '押韵'], answer: 0, explain: '准确。' },
          { stem: '法律翻译的特点是：', options: ['严谨、术语固定、格式规范', '自由', '口语化', '简洁唯一'], answer: 0, explain: '严谨。' },
          { stem: '商务翻译应注重：', options: ['得体与功能', '文学性', '押韵', '古雅'], answer: 0, explain: '得体。' }
        ],
        doc: { lead: '这一章讲实用。', sections: [
          { id: 'types', title: '类型', html: `<p>商务合同、产品说明、科技论文、法律文书。</p>` },
          { id: 'principles', title: '原则', html: `<p>术语一致、格式对应、功能对等；术语库建设。</p>` }
        ], refs: [] } },
      { title: '机辅翻译', brief: '人与机器。',
        q: [
          { stem: 'CAT 工具的核心功能是：', options: ['翻译记忆与术语库', '自动写作', '语音识别', '排版'], answer: 0, explain: 'TM。' },
          { stem: '机器翻译的典型问题是：', options: ['语境与风格把握不足', '速度慢', '成本高', '不能处理单词'], answer: 0, explain: '语境。' },
          { stem: '译后编辑（MTPE）的作用是：', options: ['人工修正机器译文', '替代翻译', '训练模型', '排版'], answer: 0, explain: 'MTPE。' }
        ],
        doc: { lead: '这一章讲技术。', sections: [
          { id: 'tools', title: '工具', html: `<p>TM、术语库、对齐、质量检查；NMT 与 LLM。</p>` },
          { id: 'workflow', title: '流程', html: `<p>预翻译—译后编辑—审校—质检；人机分工。</p>` }
        ], refs: [] } }
    ] },

    /* ---- 大四 ---- */
    { name: '毕业论文', chapters: [
      { title: '选题与文献', brief: '小问题、可操作。',
        q: [
          { stem: '英语专业论文选题的常见方向包括：', options: ['语言学、文学、翻译、教学', '只有文学', '只有翻译', '只有教学'], answer: 0, explain: '四方向。' },
          { stem: '文献综述应：', options: ['梳理脉络、指出缺口', '罗列摘要', '按时间堆砌', '只引名家'], answer: 0, explain: '缺口。' },
          { stem: '研究方法的选取应：', options: ['与问题匹配', '越新越好', '越复杂越好', '随大流'], answer: 0, explain: '匹配。' }
        ],
        doc: { lead: '这一章讲开头。', sections: [
          { id: 'topic', title: '选题', html: `<p>语言学（语料分析）、文学（文本细读）、翻译（案例）、教学（行动研究）。</p>` },
          { id: 'review', title: '综述', html: `<p>按主题组织；说明研究空白与你的问题。</p>` }
        ], refs: [] } },
      { title: '研究方法', brief: '怎么收集与分析。',
        q: [
          { stem: '语料库方法的核心是：', options: ['基于真实语料的定量/定性分析', '主观判断', '只读文本', '只做问卷'], answer: 0, explain: '语料。' },
          { stem: '问卷与访谈在论文中的作用是：', options: ['收集学习者数据', '装饰', '凑字数', '替代文献'], answer: 0, explain: '数据。' },
          { stem: '研究伦理要求：', options: ['知情同意、匿名、不伤害', '公开数据', '随意引用', '署名'], answer: 0, explain: '伦理。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'methods', title: '方法', html: `<p>语料库、问卷、访谈、课堂观察、文本分析。</p>` },
          { id: 'ethics', title: '伦理', html: `<p>知情同意、匿名化、数据保管；引用规范。</p>` }
        ], refs: [] } },
      { title: '写作与规范', brief: '学术语言。',
        q: [
          { stem: '学术论文的语言要求是：', options: ['客观、精确、简洁', '华丽', '口语化', '情绪化'], answer: 0, explain: '客观。' },
          { stem: '引用格式（APA/MLA）的作用是：', options: ['可追溯与规范', '凑数', '装饰', '避免查重'], answer: 0, explain: '规范。' },
          { stem: '论文结论应：', options: ['回应问题、说明局限', '提出新问题唯一', '重复引言', '写感想'], answer: 0, explain: '收束。' }
        ],
        doc: { lead: '这一章讲写作。', sections: [
          { id: 'language', title: '语言', html: `<p>避免口语与主观表达；hedging；段落连贯。</p>` },
          { id: 'citation', title: '引用', html: `<p>文中引用与参考文献；直接引用与改述；避免抄袭。</p>` }
        ], refs: [] } },
      { title: '答辩', brief: '讲清楚。',
        q: [
          { stem: '答辩陈述的要点是：', options: ['问题、方法、发现、局限', '致谢', '篇幅', '格式'], answer: 0, explain: '四点。' },
          { stem: '被质疑时应：', options: ['承认局限并说明理由', '争辩', '回避', '改口'], answer: 0, explain: '诚恳。' },
          { stem: '答辩前最该准备的是：', options: ['熟悉数据与结论依据', '背稿', 'PPT 模板', '服装'], answer: 0, explain: '依据。' }
        ],
        doc: { lead: '这一章讲答辩。', sections: [
          { id: 'talk', title: '陈述', html: `<p>8–10 分钟；问题—方法—发现—局限。</p>` },
          { id: 'qa', title: '问答', html: `<p>准备可能的问题；不会就说不确定并说明如何验证。</p>` }
        ], refs: [] } }
    ] },
    { name: '教育实习', chapters: [
      { title: '英语教学设计', brief: '一堂课怎么设计。',
        q: [
          { stem: '英语教学目标应体现：', options: ['语言能力、文化意识、思维品质、学习能力', '只有词汇', '只有语法', '只有考试'], answer: 0, explain: '核心素养。' },
          { stem: '任务型教学的核心是：', options: ['用语言完成任务', '讲语法', '背单词', '做练习'], answer: 0, explain: '任务。' },
          { stem: '教学设计应包含：', options: ['目标、重难点、活动、评价', '只有目标', '只有活动', '只有作业'], answer: 0, explain: '要素。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'literacy', title: '核心素养', html: `<p>语言能力、文化意识、思维品质、学习能力。</p>` },
          { id: 'design', title: '设计', html: `<p>目标—情境—任务—评价；PPP 与 TBLT。</p>` }
        ], refs: [] } },
      { title: '课堂管理', brief: '让课堂有序。',
        q: [
          { stem: '课堂指令应：', options: ['简短、清晰、示范', '冗长', '只用中文', '含糊'], answer: 0, explain: '指令。' },
          { stem: '小组活动的常见问题是：', options: ['搭便车与母语依赖', '太快', '太吵', '太多'], answer: 0, explain: '组织。' },
          { stem: '课堂管理的基本原则是：', options: ['预防为主、规则明确', '事后惩罚', '放任', '严惩'], answer: 0, explain: '预防。' }
        ],
        doc: { lead: '这一章讲管理。', sections: [
          { id: 'instructions', title: '指令', html: `<p>ICQ/CCQ 检查理解；示范与演示。</p>` },
          { id: 'groups', title: '分组', html: `<p>角色分工、个体问责、时间控制、成果展示。</p>` }
        ], refs: [] } },
      { title: '课堂反思', brief: '看见自己的课。',
        q: [
          { stem: '教学反思的有效写法是：', options: ['问题—分析—改进', '感想', '流水账', '表扬'], answer: 0, explain: '结构化。' },
          { stem: '课堂观察的维度包括：', options: ['目标、活动、互动、评价、时间', '只有纪律', '只有成绩', '只有板书'], answer: 0, explain: '多维。' },
          { stem: '同课异构的价值是：', options: ['比较不同设计的效果', '统一教法', '评比', '省时间'], answer: 0, explain: '比较。' }
        ],
        doc: { lead: '这一章讲反思。', sections: [
          { id: 'observation', title: '观察', html: `<p>记录关键事件、师生话语比例、学生参与度。</p>` },
          { id: 'improve', title: '改进', html: `<p>一次改一个点；录像复盘；同伴互评。</p>` }
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
      { title: '考研方向', brief: '文学、语言学、翻译、学科教学。',
        q: [
          { stem: '英语专业考研的常见方向不包括：', options: ['英语语言文学', '外国语言学及应用语言学', '翻译硕士（MTI）', '临床医学'], answer: 3, explain: '无关。' },
          { stem: '学硕与专硕的区别是：', options: ['学术研究 vs 职业实践', '学制', '是否有导师', '是否考试'], answer: 0, explain: '定位。' },
          { stem: '二外的重要性：', options: ['学硕常考二外', '不重要', '只考英语', '只考政治'], answer: 0, explain: '学硕。' }
        ],
        doc: { lead: '这一章讲方向。', sections: [
          { id: 'paths', title: '方向', html: `<p>英语语言文学、外应、MTI、学科教学（英语）。</p>` },
          { id: 'subjects', title: '科目', html: `<p>政治、二外/翻译硕士英语、专业课；基础英语与语言学/文学。</p>` }
        ], refs: [] } },
      { title: '专业课复习', brief: '语言学与文学。',
        q: [
          { stem: '语言学复习的主线是：', options: ['语音—语法—语义—语用—社会/历史', '只背定义', '只看真题', '只读教材'], answer: 0, explain: '脉络。' },
          { stem: '文学复习的主线是：', options: ['时代—流派—作家—作品', '只背作家', '只背作品', '只看真题'], answer: 0, explain: '脉络。' },
          { stem: '术语解释的答题结构是：', options: ['定义—特征—举例', '只有定义', '只有例子', '感想'], answer: 0, explain: '三段。' }
        ],
        doc: { lead: '这一章讲复习。', sections: [
          { id: 'linguistics', title: '语言学', html: `<p>核心概念 + 例证；对比分析（如 phoneme/allophone）。</p>` },
          { id: 'literature', title: '文学', html: `<p>时期—流派—代表作；文本细读与主题分析。</p>` }
        ], refs: [] } },
      { title: '求职方向', brief: '教师、翻译、外贸、外企。',
        q: [
          { stem: '英语专业毕业生的常见去向不包括：', options: ['英语教师', '翻译/本地化', '外贸/跨境电商', '外科医生'], answer: 3, explain: '专业限制。' },
          { stem: '翻译岗位最看重：', options: ['语言能力 + 领域知识', '证书数量', '学历', '口音'], answer: 0, explain: '能力。' },
          { stem: '外企岗位的英语要求通常是：', options: ['能进行工作沟通', '母语水平', '无要求', '只写不读'], answer: 0, explain: '实用。' }
        ],
        doc: { lead: '这一章讲就业。', sections: [
          { id: 'paths', title: '路径', html: `<p>教师、翻译、外贸、外企、公务员、留学。</p>` },
          { id: 'skills', title: '能力', html: `<p>语言 + 行业知识（法律/医学/IT）；CATTI、教资等证书。</p>` }
        ], refs: [] } },
      { title: '面试', brief: '用英语证明自己。',
        q: [
          { stem: '英文面试的自我介绍应：', options: ['结构清晰、突出匹配度', '越长越好', '背模板', '只讲爱好'], answer: 0, explain: '匹配。' },
          { stem: '教师面试试讲的关键是：', options: ['目标清晰、活动有效、互动自然', '背稿', 'PPT 精美', '时长'], answer: 0, explain: '基本功。' },
          { stem: '被问"你的优势"时应：', options: ['用具体例子证明', '空泛形容词', '回避', '谦虚否认'], answer: 0, explain: '例证。' }
        ],
        doc: { lead: '这一章讲面试。', sections: [
          { id: 'selfintro', title: '自我介绍', html: `<p>90 秒：背景—能力—匹配—意愿。</p>` },
          { id: 'demo', title: '试讲/笔译', html: `<p>教师岗准备 15 分钟试讲；翻译岗准备限时笔译。</p>` }
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
