/* ==========================================================
   archaeology-courses.js · 考古学：12 门课（主干 8 / 出口 4）= 84 关
   ========================================================== */

(function () {
  var MAJOR = 'history-考古学';
  var TITLES = stageTitlesOf('history');

  var COURSES = [
    { name: '考古学导论', chapters: [
      { title: '考古学的对象与方法', brief: '通过实物研究过去。',
        q: [
          { stem: '考古学的研究对象是：', options: ['古代人类活动的实物遗存', '文献记载', '语言', '思想'], answer: 0, explain: '实物。' },
          { stem: '考古学与历史学的关系是：', options: ['互补互证', '相互替代', '无关', '对立'], answer: 0, explain: '互补。' },
          { stem: '考古学的基本方法是：', options: ['田野调查与发掘', '文献考证', '访谈', '实验'], answer: 0, explain: '田野。' }
        ],
        doc: { lead: '这一章讲对象。', sections: [
          { id: 'object', title: '对象', html: `<p>遗迹与遗物；人类行为的物质遗留；长时段视角。</p>` },
          { id: 'method', title: '方法', html: `<p>调查、发掘、记录、整理、研究；多学科合作。</p>` }
        ], refs: [] } },
      { title: '学科史', brief: '从金石学到考古学。',
        q: [
          { stem: '中国考古学的前身是：', options: ['金石学', '文献学', '考据学', '目录学'], answer: 0, explain: '金石。' },
          { stem: '中国考古学科学化的标志是：', options: ['仰韶遗址发掘（1921）', '甲骨发现', '敦煌', '殷墟'], answer: 0, explain: '仰韶。' },
          { stem: '现代考古学的理论转向包括：', options: ['过程考古与后过程考古', '只有类型学', '只有地层学', '只有编年'], answer: 0, explain: '理论。' }
        ],
        doc: { lead: '这一章讲历史。', sections: [
          { id: 'china', title: '中国', html: `<p>金石学、安特生、李济、苏秉琦；区系类型理论。</p>` },
          { id: 'theory', title: '理论', html: `<p>文化历史考古、过程主义、后过程主义、社会考古。</p>` }
        ], refs: [] } },
      { title: '地层学与类型学', brief: '两大基本功。',
        q: [
          { stem: '地层学的核心原理是：', options: ['叠压与打破关系决定先后', '器物大小', '颜色', '重量'], answer: 0, explain: '叠压。' },
          { stem: '类型学的作用是：', options: ['通过形态演变排序与断代', '测量重量', '化学分析', '摄影'], answer: 0, explain: '排序。' },
          { stem: '两者结合可以：', options: ['建立遗址与文化的年代序列', '直接确定绝对年代', '替代测年', '判断族属'], answer: 0, explain: '序列。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'strata', title: '地层学', html: `<p>层位、单位、叠压打破；共生关系。</p>` },
          { id: 'typology', title: '类型学', html: `<p>分类、式别、演变序列；与地层结合断代。</p>` }
        ], refs: [] } },
      { title: '考古学文化', brief: '一群人留下的东西。',
        q: [
          { stem: '考古学文化指的是：', options: ['一定时空内具有共同特征的遗存共同体', '一个民族', '一个政权', '一种语言'], answer: 0, explain: '遗存。' },
          { stem: '区系类型理论强调：', options: ['区域划分与谱系关系', '单一起源', '只做类型', '只做断代'], answer: 0, explain: '苏秉琦。' },
          { stem: '考古学文化与族属的关系是：', options: ['不能简单等同', '完全相同', '毫无关系', '必然对应'], answer: 0, explain: '谨慎。' }
        ],
        doc: { lead: '这一章讲文化。', sections: [
          { id: 'concept', title: '概念', html: `<p>命名、分布、特征、分期；文化因素分析。</p>` },
          { id: 'ethnicity', title: '族属', html: `<p>考古学文化与族属的对应需谨慎；多学科证据。</p>` }
        ], refs: [] } },
      { title: '田野考古', brief: '怎么挖。',
        q: [
          { stem: '发掘的基本原则是：', options: ['按单位发掘、完整记录、可复原', '快速清理', '只取珍品', '随意'], answer: 0, explain: '记录。' },
          { stem: '探方法适用于：', options: ['大面积遗址的系统揭露', '墓葬', '洞穴', '水下'], answer: 0, explain: '探方。' },
          { stem: '发掘记录应包括：', options: ['文字、测绘、影像、三维数据', '只有照片', '只有文字', '只有器物'], answer: 0, explain: '多源。' }
        ],
        doc: { lead: '这一章讲发掘。', sections: [
          { id: 'procedure', title: '程序', html: `<p>调查、试掘、布方、清理、采样、记录、提取、整理。</p>` },
          { id: 'record', title: '记录', html: `<p>日记、平剖面图、影像、三维扫描；可复原性。</p>` }
        ], refs: [] } },
      { title: '年代学', brief: '什么时候。',
        q: [
          { stem: '相对年代与绝对年代的区别是：', options: ['先后关系 vs 具体年代', '新旧 vs 早晚', '地层 vs 类型', '国内 vs 国外'], answer: 0, explain: '两类。' },
          { stem: '碳十四测年适用于：', options: ['数万年内的有机遗存', '所有材料', '金属', '石器'], answer: 0, explain: '有机。' },
          { stem: '树轮校正曲线的作用是：', options: ['校正碳十四年代', '测成分', '测温度', '拍照'], answer: 0, explain: '校正。' }
        ],
        doc: { lead: '这一章讲年代。', sections: [
          { id: 'relative', title: '相对', html: `<p>地层、类型、共存；序列与分期。</p>` },
          { id: 'absolute', title: '绝对', html: `<p>碳十四、树轮、热释光、光释光、古地磁；校正。</p>` }
        ], refs: [] } },
      { title: '考古绘图与记录', brief: '把现场搬回实验室。',
        q: [
          { stem: '考古绘图的基本要求是：', options: ['准确、规范、可复原', '美观', '艺术性', '快速'], answer: 0, explain: '准确。' },
          { stem: '器物绘图通常包括：', options: ['正视、侧视、剖视', '只有正视', '只有照片', '只有文字'], answer: 0, explain: '三视。' },
          { stem: '数字化记录的价值是：', options: ['永久保存与共享研究', '装饰', '替代发掘', '省事'], answer: 0, explain: '保存。' }
        ],
        doc: { lead: '这一章讲记录。', sections: [
          { id: 'drawing', title: '绘图', html: `<p>比例、线型、剖面、器物三视图；测绘仪器。</p>` },
          { id: 'digital', title: '数字化', html: `<p>三维扫描、摄影测量、数据库；可复现研究。</p>` }
        ], refs: [] } },
      { title: '考古学与公众', brief: '为谁考古。',
        q: [
          { stem: '公众考古的意义是：', options: ['让公众理解并参与遗产保护', '增加收入唯一', '娱乐化', '替代研究'], answer: 0, explain: '共享。' },
          { stem: '考古报道应避免：', options: ['猎奇与炒作', '科学解释', '保护提示', '背景说明'], answer: 0, explain: '猎奇。' },
          { stem: '考古伦理的核心是：', options: ['尊重遗存、社区与后代利益', '追求发掘量', '收藏', '赚钱'], answer: 0, explain: '伦理。' }
        ],
        doc: { lead: '这一章讲公共。', sections: [
          { id: 'public', title: '公众', html: `<p>博物馆、遗址公园、研学、媒体传播；公众参与。</p>` },
          { id: 'ethics', title: '伦理', html: `<p>尊重人骨与墓葬、社区权益、文物保护；反对盗掘。</p>` }
        ], refs: [] } }
    ] },
    { name: '中国考古（上）', chapters: [
      { title: '旧石器时代', brief: '人类的黎明。',
        q: [
          { stem: '中国境内著名的旧石器时代遗址是：', options: ['周口店北京人遗址', '殷墟', '良渚', '二里头'], answer: 0, explain: '周口店。' },
          { stem: '旧石器时代的主要标志是：', options: ['打制石器', '磨制石器', '青铜器', '铁器'], answer: 0, explain: '打制。' },
          { stem: '旧石器考古关注：', options: ['石器技术、生计方式与人类演化', '王朝', '文字', '礼制'], answer: 0, explain: '技术。' }
        ],
        doc: { lead: '这一章讲旧石器。', sections: [
          { id: 'sites', title: '遗址', html: `<p>周口店、元谋、蓝田、许家窑；石器工业。</p>` },
          { id: 'life', title: '生计', html: `<p>狩猎采集、用火、洞穴居址；人类演化。</p>` }
        ], refs: [] } },
      { title: '新石器时代', brief: '农业与聚落。',
        q: [
          { stem: '中国新石器时代的代表性文化不包括：', options: ['仰韶', '龙山', '良渚', '殷墟'], answer: 3, explain: '殷墟是商。' },
          { stem: '新石器时代革命的标志是：', options: ['农业起源与定居', '青铜', '文字', '城市'], answer: 0, explain: '农业。' },
          { stem: '良渚文化的代表遗存是：', options: ['大型水利与玉器', '青铜礼器', '甲骨', '铁器'], answer: 0, explain: '良渚。' }
        ],
        doc: { lead: '这一章讲新石器。', sections: [
          { id: 'cultures', title: '文化', html: `<p>磁山、裴李岗、仰韶、大汶口、龙山、良渚、石家河。</p>` },
          { id: 'change', title: '变革', html: `<p>农业、家畜、陶器、聚落分化；早期国家萌芽。</p>` }
        ], refs: [] } },
      { title: '夏商周考古', brief: '青铜与王朝。',
        q: [
          { stem: '探索夏文化的关键遗址是：', options: ['二里头', '殷墟', '良渚', '三星堆'], answer: 0, explain: '二里头。' },
          { stem: '殷墟的重要发现是：', options: ['甲骨文与妇好墓', '青铜神树', '玉琮', '铁剑'], answer: 0, explain: '殷墟。' },
          { stem: '青铜礼器的作用是：', options: ['礼制与身份象征', '生产工具唯一', '货币唯一', '武器唯一'], answer: 0, explain: '礼制。' }
        ],
        doc: { lead: '这一章讲三代。', sections: [
          { id: 'erlitou', title: '二里头', html: `<p>宫殿、青铜作坊、绿松石龙；夏文化探索。</p>` },
          { id: 'shang', title: '商周', html: `<p>殷墟甲骨、青铜器、三星堆；西周分封与礼制。</p>` }
        ], refs: [] } },
      { title: '青铜器与铭文', brief: '金文的史料。',
        q: [
          { stem: '青铜器铭文的研究价值是：', options: ['记录史事、制度与族属', '装饰', '书法唯一', '收藏'], answer: 0, explain: '史料。' },
          { stem: '青铜器分期主要依据：', options: ['形制、纹饰、铭文与地层', '重量', '颜色', '价格'], answer: 0, explain: '综合。' },
          { stem: '青铜器铸造的典型工艺是：', options: ['范铸法', '失蜡法唯一', '锻造', '焊接'], answer: 0, explain: '范铸。' }
        ],
        doc: { lead: '这一章讲青铜。', sections: [
          { id: 'form', title: '形制', html: `<p>鼎、簋、爵、尊、彝；礼器组合与等级。</p>` },
          { id: 'inscription', title: '铭文', html: `<p>族徽、记事、册命；金文与史学研究。</p>` }
        ], refs: [] } },
      { title: '玉器与礼制', brief: '石之美者。',
        q: [
          { stem: '良渚玉器的代表是：', options: ['玉琮与玉璧', '玉衣', '玉玺', '玉带'], answer: 0, explain: '琮璧。' },
          { stem: '玉器在史前社会的作用是：', options: ['身份与宗教象征', '工具唯一', '货币唯一', '装饰唯一'], answer: 0, explain: '象征。' },
          { stem: '红山文化的代表是：', options: ['玉龙与女神庙', '玉琮', '青铜', '甲骨'], answer: 0, explain: '红山。' }
        ],
        doc: { lead: '这一章讲玉器。', sections: [
          { id: 'neolithic', title: '史前', html: `<p>红山、良渚、凌家滩；玉礼器与信仰。</p>` },
          { id: 'ritual', title: '礼制', html: `<p>璧琮圭璋璜；三代玉礼与身份。</p>` }
        ], refs: [] } },
      { title: '城址与聚落', brief: '早期城市。',
        q: [
          { stem: '中国史前城址的典型是：', options: ['良渚古城、石峁、陶寺', '殷墟', '长安', '洛阳'], answer: 0, explain: '史前城。' },
          { stem: '城址研究可以反映：', options: ['社会复杂化与权力集中', '只有人口', '只有军事', '只有宗教'], answer: 0, explain: '复杂化。' },
          { stem: '聚落考古关注：', options: ['空间布局与社会组织', '只有器物', '只有墓葬', '只有年代'], answer: 0, explain: '空间。' }
        ],
        doc: { lead: '这一章讲聚落。', sections: [
          { id: 'walled', title: '城址', html: `<p>城墙、壕沟、宫殿区、手工业区；良渚水利系统。</p>` },
          { id: 'complexity', title: '复杂化', html: `<p>等级分化、手工业专业化、早期国家。</p>` }
        ], refs: [] } },
      { title: '墓葬与社会', brief: '死者的等级。',
        q: [
          { stem: '墓葬随葬品差异反映：', options: ['社会等级与财富分化', '只有年代', '只有工艺', '只有人口'], answer: 0, explain: '等级。' },
          { stem: '良渚高等级墓葬的特点是：', options: ['大型土台、玉礼器丰富', '无随葬品', '只有陶器', '只有青铜'], answer: 0, explain: '高等级。' },
          { stem: '人骨研究可以了解：', options: ['体质、饮食、疾病与迁徙', '只有年龄', '只有性别', '只有身高'], answer: 0, explain: '多学科。' }
        ],
        doc: { lead: '这一章讲墓葬。', sections: [
          { id: 'hierarchy', title: '等级', html: `<p>墓圹规模、葬具、随葬品组合；社会分层。</p>` },
          { id: 'bioarch', title: '体质', html: `<p>人骨测量、同位素、古 DNA；健康与迁徙。</p>` }
        ], refs: [] } },
      { title: '中国考古的方法论', brief: '怎么解释。',
        q: [
          { stem: '区系类型理论的意义是：', options: ['建立中国史前文化的时空框架', '单一起源论', '只做类型', '只做断代'], answer: 0, explain: '框架。' },
          { stem: '考古学解释应避免：', options: ['简单比附文献与族属', '多学科', '语境分析', '比较研究'], answer: 0, explain: '比附。' },
          { stem: '中华文明探源研究关注：', options: ['文明起源的多元与一体', '只有中原', '只有夏', '只有文字'], answer: 0, explain: '探源。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'framework', title: '框架', html: `<p>区系类型、满天星斗、多元一体；文明探源工程。</p>` },
          { id: 'interpretation', title: '解释', html: `<p>避免简单比附；语境、过程与社会视角。</p>` }
        ], refs: [] } }
    ] },
    { name: '世界考古', chapters: [
      { title: '人类起源与扩散', brief: '走出非洲。',
        q: [
          { stem: '现代人类起源的主流学说是：', options: ['非洲单一起源（走出非洲）', '多地区连续进化唯一', '外星', '无起源'], answer: 0, explain: '走出非洲。' },
          { stem: '旧石器时代晚期的标志是：', options: ['细石器、艺术与象征行为', '农业', '青铜', '城市'], answer: 0, explain: '象征。' },
          { stem: '尼安德特人与现代人的关系是：', options: ['有基因交流', '完全无关', '同一物种唯一', '更晚出现'], answer: 0, explain: '交流。' }
        ],
        doc: { lead: '这一章讲起源。', sections: [
          { id: 'origin', title: '起源', html: `<p>非洲起源、多地区进化；古 DNA 证据。</p>` },
          { id: 'art', title: '艺术', html: `<p>洞穴壁画、雕像、装饰品；象征与认知。</p>` }
        ], refs: [] } },
      { title: '农业起源', brief: '新石器革命。',
        q: [
          { stem: '世界农业起源的中心包括：', options: ['西亚、中国、中美洲', '只有西亚', '只有中国', '只有美洲'], answer: 0, explain: '多中心。' },
          { stem: '农业起源的后果是：', options: ['定居、人口增长、社会分化', '人口减少', '游牧唯一', '无变化'], answer: 0, explain: '定居。' },
          { stem: '西亚的新石器代表遗址是：', options: ['恰塔霍裕克、杰里科', '殷墟', '良渚', '特奥蒂瓦坎'], answer: 0, explain: '西亚。' }
        ],
        doc: { lead: '这一章讲农业。', sections: [
          { id: 'centers', title: '中心', html: `<p>新月沃地、中国南北、中美洲、安第斯。</p>` },
          { id: 'consequence', title: '后果', html: `<p>定居聚落、驯化、剩余、社会分层。</p>` }
        ], refs: [] } },
      { title: '两河与埃及', brief: '最早的城市。',
        q: [
          { stem: '乌鲁克的城市革命指：', options: ['城市、文字与国家的出现', '农业起源', '工业', '铁器'], answer: 0, explain: '城市。' },
          { stem: '埃及金字塔属于：', options: ['王陵建筑', '神庙', '民居', '城墙'], answer: 0, explain: '王陵。' },
          { stem: '楔形文字的材料是：', options: ['泥板', '纸', '帛', '石'], answer: 0, explain: '泥板。' }
        ],
        doc: { lead: '这一章讲近东。', sections: [
          { id: 'mesopotamia', title: '两河', html: `<p>乌鲁克、楔形文字、神庙经济；城邦与帝国。</p>` },
          { id: 'egypt', title: '埃及', html: `<p>金字塔、王陵、象形文字；王权与来世。</p>` }
        ], refs: [] } },
      { title: '希腊罗马考古', brief: '古典世界。',
        q: [
          { stem: '雅典卫城的代表建筑是：', options: ['帕特农神庙', '斗兽场', '万神殿', '金字塔'], answer: 0, explain: '帕特农。' },
          { stem: '庞贝古城的价值是：', options: ['火山灰封存的城市生活', '王陵', '神庙', '城墙'], answer: 0, explain: '庞贝。' },
          { stem: '罗马道路与供水系统说明：', options: ['工程技术与管理能力', '只有军事', '只有宗教', '只有贸易'], answer: 0, explain: '工程。' }
        ],
        doc: { lead: '这一章讲古典。', sections: [
          { id: 'greek', title: '希腊', html: `<p>卫城、剧场、广场；城邦与殖民。</p>` },
          { id: 'roman', title: '罗马', html: `<p>斗兽场、万神殿、道路、水渠；城市与帝国。</p>` }
        ], refs: [] } },
      { title: '美洲考古', brief: '另一个半球。',
        q: [
          { stem: '玛雅文明的代表遗存是：', options: ['金字塔神庙与象形文字', '巨石阵', '青铜器', '铁器'], answer: 0, explain: '玛雅。' },
          { stem: '特奥蒂瓦坎的特点是：', options: ['大型城市与太阳金字塔', '王陵', '港口', '城堡'], answer: 0, explain: '特奥。' },
          { stem: '印加文明的工程成就是：', options: ['梯田、道路与石构建筑', '铁器', '轮子', '文字唯一'], answer: 0, explain: '印加。' }
        ],
        doc: { lead: '这一章讲美洲。', sections: [
          { id: 'mesoamerica', title: '中美洲', html: `<p>奥尔梅克、玛雅、特奥蒂瓦坎、阿兹特克。</p>` },
          { id: 'andes', title: '安第斯', html: `<p>查文、莫切、印加；梯田与道路。</p>` }
        ], refs: [] } },
      { title: '欧亚草原与丝路', brief: '交流的网络。',
        q: [
          { stem: '欧亚草原考古的代表是：', options: ['斯基泰与匈奴墓葬', '玛雅', '印加', '埃及'], answer: 0, explain: '草原。' },
          { stem: '丝绸之路考古关注：', options: ['贸易、宗教与技术的传播', '只有丝绸', '只有战争', '只有城市'], answer: 0, explain: '传播。' },
          { stem: '游牧社会的特点是：', options: ['移动性强、与农耕互动', '完全孤立', '只有农业', '无遗存'], answer: 0, explain: '互动。' }
        ],
        doc: { lead: '这一章讲草原。', sections: [
          { id: 'steppe', title: '草原', html: `<p>库尔干、动物纹饰、马具；游牧与定居互动。</p>` },
          { id: 'silkroad', title: '丝路', html: `<p>绿洲城市、宗教艺术、钱币与玻璃器；交流网络。</p>` }
        ], refs: [] } },
      { title: '中世纪与伊斯兰考古', brief: '城市与宗教。',
        q: [
          { stem: '伊斯兰考古的典型遗存是：', options: ['清真寺、浴场与市集', '金字塔', '斗兽场', '石阵'], answer: 0, explain: '伊斯兰。' },
          { stem: '中世纪欧洲的考古关注：', options: ['城堡、修道院与乡村聚落', '只有教堂', '只有城市', '只有战争'], answer: 0, explain: '多类。' },
          { stem: '沉船考古的价值是：', options: ['封存贸易与生活的断面', '只有金银', '只有武器', '无价值'], answer: 0, explain: '断面。' }
        ],
        doc: { lead: '这一章讲中世纪。', sections: [
          { id: 'islamic', title: '伊斯兰', html: `<p>城市布局、清真寺、水设施；贸易网络。</p>` },
          { id: 'shipwreck', title: '水下', html: `<p>沉船、货物、船体结构；贸易与航海技术。</p>` }
        ], refs: [] } },
      { title: '殖民与近代考古', brief: '接触与冲突。',
        q: [
          { stem: '历史考古学关注：', options: ['有文献时期的人群与物质文化', '只有史前', '只有化石', '只有艺术'], answer: 0, explain: '历史考古。' },
          { stem: '殖民地考古可以揭示：', options: ['文化接触、抵抗与融合', '只有战争', '只有贸易', '只有宗教'], answer: 0, explain: '接触。' },
          { stem: '工业考古的对象是：', options: ['工厂、矿山与基础设施', '王陵', '神庙', '村落'], answer: 0, explain: '工业。' }
        ],
        doc: { lead: '这一章讲近代。', sections: [
          { id: 'historical', title: '历史考古', html: `<p>文献与实物结合；殖民、奴隶制、贸易。</p>` },
          { id: 'industrial', title: '工业考古', html: `<p>工厂、铁路、矿山；现代性的物质痕迹。</p>` }
        ], refs: [] } }
    ] },
    { name: '中国考古（下）', chapters: [
      { title: '秦汉考古', brief: '帝国的物质。',
        q: [
          { stem: '秦始皇陵的考古发现包括：', options: ['兵马俑坑与陵园建筑', '甲骨', '玉琮', '青铜神树'], answer: 0, explain: '兵马俑。' },
          { stem: '汉墓的典型形式是：', options: ['画像石墓、崖洞墓与土坑墓', '金字塔', '砖塔', '石窟'], answer: 0, explain: '汉墓。' },
          { stem: '秦汉考古的重要材料是：', options: ['简牍、封泥、瓦当', '甲骨', '青花瓷', '铁器唯一'], answer: 0, explain: '简牍。' }
        ],
        doc: { lead: '这一章讲秦汉。', sections: [
          { id: 'qin', title: '秦', html: `<p>始皇陵、兵马俑、秦直道；郡县与度量衡。</p>` },
          { id: 'han', title: '汉', html: `<p>帝陵、画像石、简牍、丝绸之路遗存。</p>` }
        ], refs: [] } },
      { title: '魏晋南北朝考古', brief: '分裂中的交融。',
        q: [
          { stem: '这一时期的墓葬特点是：', options: ['壁画墓、家族墓地与佛教艺术', '只有土坑', '只有火葬', '无随葬品'], answer: 0, explain: '壁画。' },
          { stem: '石窟寺考古的代表是：', options: ['敦煌、云冈、龙门', '殷墟', '良渚', '三星堆'], answer: 0, explain: '石窟。' },
          { stem: '外来文化因素体现在：', options: ['金银器、玻璃器与佛教造像', '只有瓷器', '只有铁器', '无'], answer: 0, explain: '外来。' }
        ],
        doc: { lead: '这一章讲魏晋。', sections: [
          { id: 'tombs', title: '墓葬', html: `<p>壁画墓、砖室墓、族葬；随葬俑群。</p>` },
          { id: 'buddhism', title: '佛教', html: `<p>石窟、造像、寺院遗址；中外交流。</p>` }
        ], refs: [] } },
      { title: '隋唐考古', brief: '盛世的长安。',
        q: [
          { stem: '唐长安城的布局特点是：', options: ['棋盘式里坊制', '自由布局', '环形', '沿河带状'], answer: 0, explain: '里坊。' },
          { stem: '唐代墓葬的典型是：', options: ['壁画墓与三彩俑', '画像石', '玉琮', '青铜'], answer: 0, explain: '唐墓。' },
          { stem: '唐三彩主要用于：', options: ['随葬明器', '日用餐具', '建筑', '货币'], answer: 0, explain: '明器。' }
        ],
        doc: { lead: '这一章讲隋唐。', sections: [
          { id: 'capital', title: '都城', html: `<p>长安、洛阳；里坊、市场、宫城；考古勘探。</p>` },
          { id: 'tombs', title: '墓葬', html: `<p>壁画、三彩、金银器；等级与中外交流。</p>` }
        ], refs: [] } },
      { title: '宋元考古', brief: '市井与瓷业。',
        q: [
          { stem: '宋代城市的变化是：', options: ['坊市界限打破、商业街市兴起', '里坊加强', '封闭', '无变化'], answer: 0, explain: '街市。' },
          { stem: '宋元考古的重要材料是：', options: ['瓷窑址、城市遗址与沉船', '甲骨', '玉琮', '青铜'], answer: 0, explain: '瓷窑。' },
          { stem: '宋代墓葬的特点是：', options: ['仿木结构砖室墓与壁画', '崖洞墓', '土坑唯一', '火葬唯一'], answer: 0, explain: '仿木。' }
        ],
        doc: { lead: '这一章讲宋元。', sections: [
          { id: 'city', title: '城市', html: `<p>开封、临安、元大都；街市、瓦舍、手工业作坊。</p>` },
          { id: 'kiln', title: '瓷业', html: `<p>汝官哥钧定、景德镇；外销瓷与沉船。</p>` }
        ], refs: [] } },
      { title: '明清考古', brief: '近世的物质。',
        q: [
          { stem: '明清考古的重要对象是：', options: ['宫城、陵寝、窑址与沉船', '甲骨', '玉琮', '青铜'], answer: 0, explain: '宫城。' },
          { stem: '景德镇御窑的发现说明：', options: ['官窑生产与皇家制度', '民间窑场', '外销唯一', '无制度'], answer: 0, explain: '御窑。' },
          { stem: '水下考古的价值是：', options: ['贸易与航海的实物证据', '只有金银', '只有武器', '无价值'], answer: 0, explain: '贸易。' }
        ],
        doc: { lead: '这一章讲明清。', sections: [
          { id: 'palace', title: '宫城', html: `<p>紫禁城、明孝陵、清东陵；建筑与制度。</p>` },
          { id: 'trade', title: '贸易', html: `<p>外销瓷、沉船（南海一号）、海贸网络。</p>` }
        ], refs: [] } },
      { title: '石窟与宗教考古', brief: '信仰的遗迹。',
        q: [
          { stem: '中国四大石窟不包括：', options: ['莫高窟', '云冈', '龙门', '殷墟'], answer: 3, explain: '殷墟非石窟。' },
          { stem: '石窟考古研究：', options: ['造像题材、风格与供养人', '只有艺术', '只有年代', '只有宗教'], answer: 0, explain: '综合。' },
          { stem: '寺院遗址的考古价值是：', options: ['揭示宗教生活与社会经济', '只有建筑', '只有佛像', '无价值'], answer: 0, explain: '生活。' }
        ],
        doc: { lead: '这一章讲宗教。', sections: [
          { id: 'caves', title: '石窟', html: `<p>莫高窟、云冈、龙门、大足；分期与题材。</p>` },
          { id: 'temples', title: '寺院', html: `<p>塔基、地宫、窖藏；信仰与经济。</p>` }
        ], refs: [] } },
      { title: '陶瓷考古', brief: '火与土的艺术。',
        q: [
          { stem: '瓷器断代的主要依据是：', options: ['胎釉、器形、纹饰与窑口', '重量', '价格', '颜色唯一'], answer: 0, explain: '综合。' },
          { stem: '汝窑的特点是：', options: ['天青釉、支钉烧', '青花', '釉里红', '白瓷'], answer: 0, explain: '汝窑。' },
          { stem: '外销瓷研究可以反映：', options: ['贸易网络与文化交流', '只有工艺', '只有价格', '无信息'], answer: 0, explain: '贸易。' }
        ],
        doc: { lead: '这一章讲陶瓷。', sections: [
          { id: 'kilns', title: '窑口', html: `<p>越窑、邢窑、汝官哥钧定、景德镇；青花与彩瓷。</p>` },
          { id: 'export', title: '外销', html: `<p>沉船、贸易瓷、定制纹样；海上丝路。</p>` }
        ], refs: [] } },
      { title: '墓葬制度', brief: '生死之间。',
        q: [
          { stem: '墓葬形制的演变可以反映：', options: ['社会制度、信仰与技术', '只有年代', '只有工艺', '只有人口'], answer: 0, explain: '制度。' },
          { stem: '帝陵研究关注：', options: ['陵园布局、陪葬制度与祭祀', '只有宝物', '只有建筑', '只有风水'], answer: 0, explain: '制度。' },
          { stem: '墓地考古的伦理是：', options: ['尊重遗骸、谨慎发掘与展示', '快速清理', '公开影像', '收藏'], answer: 0, explain: '伦理。' }
        ],
        doc: { lead: '这一章讲墓葬。', sections: [
          { id: 'evolution', title: '演变', html: `<p>竖穴土坑—砖室—崖洞—宝城宝顶；随葬组合。</p>` },
          { id: 'ritual', title: '礼制', html: `<p>等级、祭祀、家族墓地；生死观。</p>` }
        ], refs: [] } }
    ] },
    { name: '田野考古实习', chapters: [
      { title: '实习准备', brief: '下工地前。',
        q: [
          { stem: '田野实习前应准备：', options: ['区域资料、法规与安全培训', '只有工具', '只有相机', '只有体力'], answer: 0, explain: '准备。' },
          { stem: '考古发掘的合法性要求：', options: ['取得考古发掘资质与审批', '任何人可挖', '有工具即可', '村民同意即可'], answer: 0, explain: '审批。' },
          { stem: '工地安全包括：', options: ['边坡、用电、防暑与防疫', '只有防暑', '只有用电', '只有交通'], answer: 0, explain: '安全。' }
        ],
        doc: { lead: '这一章讲准备。', sections: [
          { id: 'research', title: '资料', html: `<p>区域考古报告、地图、既往发现；制定方案。</p>` },
          { id: 'safety', title: '安全', html: `<p>探方边坡、机械、用电、饮食；应急预案。</p>` }
        ], refs: [] } },
      { title: '调查与钻探', brief: '找遗址。',
        q: [
          { stem: '考古调查的方法包括：', options: ['地面踏查、钻探、遥感', '只有发掘', '只有访谈', '只有文献'], answer: 0, explain: '多种。' },
          { stem: '钻探的作用是：', options: ['了解地下遗存分布与堆积', '采集器物', '拍照', '测绘'], answer: 0, explain: '钻探。' },
          { stem: '遥感与 GIS 的价值是：', options: ['大范围识别与空间分析', '替代发掘', '装饰', '测量温度'], answer: 0, explain: '空间。' }
        ],
        doc: { lead: '这一章讲调查。', sections: [
          { id: 'survey', title: '调查', html: `<p>踏查、剖面、采集；记录与制图。</p>` },
          { id: 'prospecting', title: '探测', html: `<p>钻探、物探、遥感；GIS 与空间分析。</p>` }
        ], refs: [] } },
      { title: '发掘操作', brief: '手铲下的功夫。',
        q: [
          { stem: '发掘的基本原则是：', options: ['按单位、逐层清理、完整记录', '快', '取宝', '随意'], answer: 0, explain: '原则。' },
          { stem: '常见遗迹的清理方法包括：', options: ['房址、灰坑、墓葬分别对待', '一刀切', '全部快挖', '只挖一半'], answer: 0, explain: '分别。' },
          { stem: '采样应包括：', options: ['浮选、碳样、DNA、微体化石', '只有陶片', '只有骨骼', '只有碳样'], answer: 0, explain: '多学科。' }
        ],
        doc: { lead: '这一章讲发掘。', sections: [
          { id: 'units', title: '单位', html: `<p>探方、层位、遗迹单位；清理顺序与工具。</p>` },
          { id: 'sampling', title: '采样', html: `<p>浮选、孢粉、碳十四、古 DNA；避免污染。</p>` }
        ], refs: [] } },
      { title: '记录与资料整理', brief: '把现场搬回。',
        q: [
          { stem: '发掘记录的核心要求是：', options: ['完整、准确、可复原', '美观', '简洁', '快速'], answer: 0, explain: '可复原。' },
          { stem: '资料整理包括：', options: ['器物清洗、编号、拼对、统计', '只有编号', '只有拍照', '只有入库'], answer: 0, explain: '整理。' },
          { stem: '发掘报告的意义是：', options: ['公开资料、接受检验', '评职称', '收藏', '宣传'], answer: 0, explain: '公开。' }
        ],
        doc: { lead: '这一章讲记录。', sections: [
          { id: 'record', title: '记录', html: `<p>日记、图纸、照片、三维；单位与层位对应。</p>` },
          { id: 'report', title: '报告', html: `<p>简报与正式报告；资料公开与共享。</p>` }
        ], refs: [] } },
      { title: '工地管理', brief: '一个工地怎么运转。',
        q: [
          { stem: '工地管理的核心是：', options: ['人员分工、进度、质量与安全', '只有进度', '只有安全', '只有经费'], answer: 0, explain: '综合。' },
          { stem: '农民工与技工的培训重点是：', options: ['操作规范与文物保护意识', '速度', '体力', '考勤'], answer: 0, explain: '规范。' },
          { stem: '与当地社区的关系应：', options: ['沟通、尊重、共享成果', '封闭', '忽视', '冲突'], answer: 0, explain: '沟通。' }
        ],
        doc: { lead: '这一章讲管理。', sections: [
          { id: 'team', title: '团队', html: `<p>领队、技师、学生、技工；分工与培训。</p>` },
          { id: 'community', title: '社区', html: `<p>沟通、雇佣、文物保护宣传；避免冲突。</p>` }
        ], refs: [] } },
      { title: '实验室工作', brief: '出土之后。',
        q: [
          { stem: '出土文物保护的第一步是：', options: ['现场稳定与保湿/避光', '立即清洗', '立即展出', '拍照'], answer: 0, explain: '稳定。' },
          { stem: '器物修复的原则是：', options: ['最小干预、可识别、可逆', '彻底修复', '全部粘接', '刷漆'], answer: 0, explain: '原则。' },
          { stem: '实验室考古的特点是：', options: ['整体提取、精细清理', '野外快挖', '只做记录', '只做摄影'], answer: 0, explain: '精细。' }
        ],
        doc: { lead: '这一章讲实验室。', sections: [
          { id: 'conserve', title: '保护', html: `<p>现场保护、整体提取、实验室清理；环境控制。</p>` },
          { id: 'restore', title: '修复', html: `<p>最小干预、可逆、可识别；记录修复过程。</p>` }
        ], refs: [] } },
      { title: '实习报告', brief: '写成文字。',
        q: [
          { stem: '实习报告的常见结构是：', options: ['概况—方法—发现—认识', '只有感想', '只有数据', '只有照片'], answer: 0, explain: '四段。' },
          { stem: '发掘简报应包含：', options: ['遗址、层位、遗迹、遗物与年代', '只有遗物', '只有年代', '只有结论'], answer: 0, explain: '要素。' },
          { stem: '实习报告的学术价值在于：', options: ['提供第一手资料与训练记录', '评奖', '装饰', '凑学分'], answer: 0, explain: '资料。' }
        ],
        doc: { lead: '这一章讲报告。', sections: [
          { id: 'structure', title: '结构', html: `<p>遗址概况、工作方法、遗迹遗物、分期与认识。</p>` },
          { id: 'standard', title: '规范', html: `<p>器物编号、图版、测量数据；客观描述与推测分开。</p>` }
        ], refs: [] } },
      { title: '职业素养', brief: '做一名考古人。',
        q: [
          { stem: '考古工作者的基本素养是：', options: ['严谨、耐心、责任与协作', '速度', '体力唯一', '口才'], answer: 0, explain: '严谨。' },
          { stem: '面对盗掘与走私应：', options: ['制止并报告', '无视', '参与', '购买'], answer: 0, explain: '守法。' },
          { stem: '田野工作的心态应是：', options: ['敬畏遗存、尊重当地', '征服', '猎奇', '应付'], answer: 0, explain: '敬畏。' }
        ],
        doc: { lead: '这一章讲素养。', sections: [
          { id: 'qualities', title: '素养', html: `<p>严谨记录、耐心清理、团队协作、守法护宝。</p>` },
          { id: 'ethics', title: '伦理', html: `<p>不盗掘、不私藏、不破坏；尊重人骨与社区。</p>` }
        ], refs: [] } }
    ] },
    { name: '文物学', chapters: [
      { title: '文物与文物学', brief: '什么是文物。',
        q: [
          { stem: '文物的基本特征是：', options: ['历史、科学、艺术价值', '价格高', '好看', '古老唯一'], answer: 0, explain: '三价值。' },
          { stem: '文物分类的常见依据是：', options: ['材质、时代、用途、来源', '只有材质', '只有时代', '只有价格'], answer: 0, explain: '多维。' },
          { stem: '文物学与考古学的关系是：', options: ['研究对象交叉、方法互补', '相同', '互斥', '无关'], answer: 0, explain: '交叉。' }
        ],
        doc: { lead: '这一章讲概念。', sections: [
          { id: 'define', title: '定义', html: `<p>人类活动遗留的具有历史、科学、艺术价值的实物。</p>` },
          { id: 'classify', title: '分类', html: `<p>可移动/不可移动；材质、时代、用途；文物普查与登录。</p>` }
        ], refs: [] } },
      { title: '可移动文物', brief: '器物世界。',
        q: [
          { stem: '可移动文物的常见类别不包括：', options: ['陶瓷', '青铜', '书画', '古建筑'], answer: 3, explain: '不可移动。' },
          { stem: '瓷器鉴定的要点是：', options: ['胎、釉、器形、纹饰、款识', '只有款识', '只有颜色', '只有重量'], answer: 0, explain: '综合。' },
          { stem: '书画鉴定的辅助手段包括：', options: ['笔墨、纸绢、印章、题跋', '只有印章', '只有题跋', '只有尺寸'], answer: 0, explain: '综合。' }
        ],
        doc: { lead: '这一章讲器物。', sections: [
          { id: 'types', title: '类别', html: `<p>陶瓷、青铜、玉器、书画、古籍、钱币、织物。</p>` },
          { id: 'authentication', title: '鉴定', html: `<p>目鉴与科技检测；风格、工艺、材料、流传。</p>` }
        ], refs: [] } },
      { title: '不可移动文物', brief: '遗址与建筑。',
        q: [
          { stem: '不可移动文物包括：', options: ['古遗址、古墓葬、古建筑、石窟寺', '只有建筑', '只有遗址', '只有墓葬'], answer: 0, explain: '多类。' },
          { stem: '古建筑保护的原则是：', options: ['原状保护、最小干预', '翻新', '重建', '商业开发'], answer: 0, explain: '原状。' },
          { stem: '文物保护单位的级别包括：', options: ['国家级、省级、市县级', '只有国家级', '只有省级', '无级别'], answer: 0, explain: '分级。' }
        ],
        doc: { lead: '这一章讲不可移动。', sections: [
          { id: 'types', title: '类型', html: `<p>遗址、墓葬、建筑、石窟、石刻、近现代史迹。</p>` },
          { id: 'protection', title: '保护', html: `<p>分级保护、保护区划、修缮原则；活化利用。</p>` }
        ], refs: [] } },
      { title: '文物鉴定', brief: '真伪与年代。',
        q: [
          { stem: '文物鉴定的基本方法是：', options: ['目鉴 + 科技检测 + 文献比证', '只有目鉴', '只有科技', '凭感觉'], answer: 0, explain: '综合。' },
          { stem: '科技检测的常用手段包括：', options: ['X 荧光、热释光、碳十四', '只有碳十四', '只有 X 光', '只有显微镜'], answer: 0, explain: '多种。' },
          { stem: '鉴定结论应：', options: ['注明依据与不确定性', '绝对肯定', '不写理由', '凭经验'], answer: 0, explain: '依据。' }
        ],
        doc: { lead: '这一章讲鉴定。', sections: [
          { id: 'methods', title: '方法', html: `<p>风格、工艺、材料、款识、流传；科技检测辅助。</p>` },
          { id: 'caution', title: '谨慎', html: `<p>避免"一眼假"；结论留有余地；防止赝品流通。</p>` }
        ], refs: [] } },
      { title: '文物价值与评估', brief: '为什么重要。',
        q: [
          { stem: '文物价值包括：', options: ['历史、艺术、科学、社会文化价值', '只有经济价值', '只有艺术', '只有历史'], answer: 0, explain: '多维。' },
          { stem: '文物经济价值与文物价值的关系是：', options: ['不能简单等同', '完全相同', '无关', '经济优先'], answer: 0, explain: '区分。' },
          { stem: '文物评估应：', options: ['由专业机构依法进行', '个人估价', '市场决定唯一', '不评估'], answer: 0, explain: '专业。' }
        ],
        doc: { lead: '这一章讲价值。', sections: [
          { id: 'values', title: '价值', html: `<p>历史、艺术、科学、社会；真实性与完整性。</p>` },
          { id: 'assessment', title: '评估', html: `<p>专业评估、依法定级；避免过度商业化。</p>` }
        ], refs: [] } },
      { title: '文物市场与法规', brief: '合法与非法。',
        q: [
          { stem: '我国文物市场的基本制度是：', options: ['文物拍卖与经营许可制度', '自由买卖', '禁止一切交易', '无规定'], answer: 0, explain: '许可。' },
          { stem: '出土文物属于：', options: ['国家所有', '发现者所有', '土地所有者', '买家'], answer: 0, explain: '国有。' },
          { stem: '盗掘古文化遗址罪的危害是：', options: ['破坏遗存信息与历史价值', '只损失财物', '无危害', '促进流通'], answer: 0, explain: '破坏。' }
        ],
        doc: { lead: '这一章讲法规。', sections: [
          { id: 'law', title: '法规', html: `<p>文物保护法：国家所有、分级保护、流通限制。</p>` },
          { id: 'crime', title: '违法', html: `<p>盗掘、走私、非法交易；举报与追索。</p>` }
        ], refs: [] } },
      { title: '文物与社会', brief: '活在当下。',
        q: [
          { stem: '文物活化的正确方式是：', options: ['在保护前提下合理利用与传播', '过度商业化', '封闭', '复制造假'], answer: 0, explain: '活化。' },
          { stem: '博物馆教育的作用是：', options: ['传播知识、培养认同', '娱乐唯一', '收藏', '赚钱'], answer: 0, explain: '教育。' },
          { stem: '公众参与文物保护的方式包括：', options: ['志愿服务、监督举报、合理参观', '私自收藏', '买卖', '挖掘'], answer: 0, explain: '参与。' }
        ],
        doc: { lead: '这一章讲社会。', sections: [
          { id: 'activation', title: '活化', html: `<p>展览、文创、研学、数字再现；保护优先。</p>` },
          { id: 'participation', title: '参与', html: `<p>志愿者、公众考古、监督；反对破坏性开发。</p>` }
        ], refs: [] } },
      { title: '文物研究方法', brief: '怎么做研究。',
        q: [
          { stem: '文物研究的基本路径是：', options: ['登录—描述—比较—解释', '只看图片', '只查价格', '凭经验'], answer: 0, explain: '路径。' },
          { stem: '类型学在文物研究中的作用是：', options: ['建立形制演变序列', '确定价格', '鉴定真伪唯一', '修复'], answer: 0, explain: '序列。' },
          { stem: '跨学科研究包括：', options: ['材料分析、同位素、数字化', '只有文献', '只有目鉴', '只有摄影'], answer: 0, explain: '跨学科。' }
        ],
        doc: { lead: '这一章讲研究。', sections: [
          { id: 'path', title: '路径', html: `<p>著录、分类、比较、分期、解释；建立数据库。</p>` },
          { id: 'interdisciplinary', title: '跨学科', html: `<p>材料科学、保护科学、数字人文；开放共享。</p>` }
        ], refs: [] } }
    ] },
    { name: '科技考古', chapters: [
      { title: '科技考古概述', brief: '科学与考古的交叉。',
        q: [
          { stem: '科技考古的核心是：', options: ['用自然科学方法研究考古问题', '只用仪器', '替代田野', '只做测年'], answer: 0, explain: '交叉。' },
          { stem: '科技考古的领域包括：', options: ['测年、成分、DNA、同位素、环境', '只有测年', '只有成分', '只有 DNA'], answer: 0, explain: '多领域。' },
          { stem: '科技考古的作用是：', options: ['拓展信息维度、提高解释力', '装饰', '替代发掘', '降低成本'], answer: 0, explain: '信息。' }
        ],
        doc: { lead: '这一章讲概述。', sections: [
          { id: 'scope', title: '范围', html: `<p>年代学、材料分析、生物考古、环境考古、数字考古。</p>` },
          { id: 'principle', title: '原则', html: `<p>问题导向、样品代表性、多证据整合。</p>` }
        ], refs: [] } },
      { title: '年代测定', brief: '多把尺子。',
        q: [
          { stem: '碳十四测年的原理是：', options: ['生物体死亡后碳十四衰变', '热释放', '磁性', '光激发'], answer: 0, explain: '衰变。' },
          { stem: '热释光测年适用于：', options: ['陶器与烧土', '骨骼', '木器', '金属'], answer: 0, explain: '陶土。' },
          { stem: '多种测年方法并用的意义是：', options: ['相互校验、提高可靠性', '增加成本', '装饰', '无意义'], answer: 0, explain: '校验。' }
        ],
        doc: { lead: '这一章讲测年。', sections: [
          { id: 'c14', title: '碳十四', html: `<p>半衰期、校正曲线、样品污染；年代范围。</p>` },
          { id: 'others', title: '其他', html: `<p>热释光、光释光、电子自旋共振、古地磁、铀系。</p>` }
        ], refs: [] } },
      { title: '材料分析', brief: '器物从哪来。',
        q: [
          { stem: '陶器成分分析的作用是：', options: ['判断产地与工艺', '测重量', '测年代', '测颜色'], answer: 0, explain: '产地。' },
          { stem: '青铜器铅同位素分析可以：', options: ['追溯矿料来源', '测年代', '测硬度', '测重量'], answer: 0, explain: '矿源。' },
          { stem: '残留物分析可以了解：', options: ['食物、酒类与使用方式', '年代', '颜色', '重量'], answer: 0, explain: '残留。' }
        ],
        doc: { lead: '这一章讲材料。', sections: [
          { id: 'composition', title: '成分', html: `<p>XRF、中子活化、岩相；产地与工艺。</p>` },
          { id: 'residue', title: '残留', html: `<p>脂质、淀粉粒、酒石酸；饮食与器物功能。</p>` }
        ], refs: [] } },
      { title: '生物考古', brief: '人与动物。',
        q: [
          { stem: '人骨研究可以了解：', options: ['年龄、性别、健康、饮食', '只有年龄', '只有性别', '只有身高'], answer: 0, explain: '多维。' },
          { stem: '稳定同位素分析用于：', options: ['重建食谱与迁徙', '测年', '测硬度', '测颜色'], answer: 0, explain: '食谱。' },
          { stem: '古 DNA 的价值是：', options: ['人群迁徙、亲缘与驯化', '测年唯一', '装饰', '修复'], answer: 0, explain: '人群。' }
        ],
        doc: { lead: '这一章讲生物。', sections: [
          { id: 'human', title: '人骨', html: `<p>性别年龄鉴定、创伤、疾病；古病理。</p>` },
          { id: 'isotope', title: '同位素与 DNA', html: `<p>C/N 同位素食谱；锶同位素迁徙；古 DNA 与污染控制。</p>` }
        ], refs: [] } },
      { title: '环境考古', brief: '古环境与人地关系。',
        q: [
          { stem: '孢粉分析的作用是：', options: ['重建古植被与气候', '测年', '测成分', '测人口'], answer: 0, explain: '植被。' },
          { stem: '植硅体的特点是：', options: ['抗风化、可鉴定植物种类', '易腐', '只能测年', '无信息'], answer: 0, explain: '植硅体。' },
          { stem: '环境考古的意义是：', options: ['理解人地互动与适应', '只有气候', '只有农业', '无意义'], answer: 0, explain: '人地。' }
        ],
        doc: { lead: '这一章讲环境。', sections: [
          { id: 'proxies', title: '指标', html: `<p>孢粉、植硅体、粒度、磁化率、动物群。</p>` },
          { id: 'interaction', title: '互动', html: `<p>气候事件与人类响应；农业与生态。</p>` }
        ], refs: [] } },
      { title: '数字考古', brief: '技术的手段。',
        q: [
          { stem: '三维扫描在考古中的作用是：', options: ['精确记录与虚拟展示', '替代发掘', '测年', '修复'], answer: 0, explain: '记录。' },
          { stem: 'GIS 的价值是：', options: ['空间分析与可视化', '测年', '成分', '修复'], answer: 0, explain: '空间。' },
          { stem: '数字人文的意义是：', options: ['资料共享与知识发现', '替代研究', '装饰', '娱乐'], answer: 0, explain: '共享。' }
        ],
        doc: { lead: '这一章讲数字。', sections: [
          { id: 'record', title: '记录', html: `<p>三维扫描、摄影建模、无人机测绘；数字档案。</p>` },
          { id: 'analysis', title: '分析', html: `<p>GIS、空间统计、数据库；虚拟复原。</p>` }
        ], refs: [] } },
      { title: '实验考古', brief: '动手复制。',
        q: [
          { stem: '实验考古的目的是：', options: ['通过复制与使用验证技术假设', '造假', '表演', '收藏'], answer: 0, explain: '验证。' },
          { stem: '实验考古的要素是：', options: ['原料、工艺、使用与损耗', '只有原料', '只有工艺', '只有使用'], answer: 0, explain: '全链条。' },
          { stem: '石器微痕分析结合实验可以：', options: ['推断工具用途', '测年', '测成分', '测人口'], answer: 0, explain: '用途。' }
        ],
        doc: { lead: '这一章讲实验。', sections: [
          { id: 'method', title: '方法', html: `<p>复制、使用、磨损观察；控制变量。</p>` },
          { id: 'usewear', title: '微痕', html: `<p>石器微痕、残留物；功能推断。</p>` }
        ], refs: [] } },
      { title: '研究设计与伦理', brief: '怎么用好科技。',
        q: [
          { stem: '科技考古研究设计的关键是：', options: ['问题先行、样品与方法的匹配', '仪器先进', '样品多', '成本高'], answer: 0, explain: '问题。' },
          { stem: '样品采集应：', options: ['有代表性、记录上下文', '随意取', '越多越好', '只取精品'], answer: 0, explain: '代表。' },
          { stem: '数据共享的意义是：', options: ['促进验证与合作', '泄密', '无意义', '增加成本'], answer: 0, explain: '共享。' }
        ],
        doc: { lead: '这一章讲设计。', sections: [
          { id: 'design', title: '设计', html: `<p>问题—假设—样品—方法—解释；跨学科协作。</p>` },
          { id: 'ethics', title: '伦理', html: `<p>样品来源合法、数据开放、结果审慎；人骨研究的伦理。</p>` }
        ], refs: [] } }
    ] },
    { name: '博物馆学', chapters: [
      { title: '博物馆的定义与功能', brief: '为什么存在。',
        q: [
          { stem: '现代博物馆的核心功能是：', options: ['收藏、研究、展示、教育', '只有收藏', '只有展示', '只有旅游'], answer: 0, explain: '四大。' },
          { stem: '博物馆的公共性体现在：', options: ['面向社会开放、服务公众', '只对专家', '只收费', '只收藏'], answer: 0, explain: '公共。' },
          { stem: '博物馆的类型包括：', options: ['历史、艺术、科技、自然、综合', '只有历史', '只有艺术', '只有科技'], answer: 0, explain: '多类。' }
        ],
        doc: { lead: '这一章讲定义。', sections: [
          { id: 'define', title: '定义', html: `<p>非营利的、为社会服务的永久性机构；研究、教育、欣赏。</p>` },
          { id: 'types', title: '类型', html: `<p>历史、艺术、科技、自然、综合、专题、生态博物馆。</p>` }
        ], refs: [] } },
      { title: '藏品管理', brief: '怎么保存。',
        q: [
          { stem: '藏品管理的基本流程是：', options: ['征集—登记—编目—保管—利用', '只有收藏', '只有展览', '只有修复'], answer: 0, explain: '流程。' },
          { stem: '藏品保存的环境要求包括：', options: ['温湿度、光照、虫害、安防', '只有温度', '只有光照', '只有安防'], answer: 0, explain: '环境。' },
          { stem: '藏品数字化的作用是：', options: ['保护原件与便于利用', '替代原件', '装饰', '出售'], answer: 0, explain: '利用。' }
        ],
        doc: { lead: '这一章讲藏品。', sections: [
          { id: 'management', title: '管理', html: `<p>征集、鉴定、登记、编目、入库、盘点；藏品总账。</p>` },
          { id: 'conservation', title: '保存', html: `<p>库房环境、预防性保护、修复；数字化存档。</p>` }
        ], refs: [] } },
      { title: '陈列展览', brief: '讲故事。',
        q: [
          { stem: '展览设计的核心是：', options: ['围绕主题组织展品与空间叙事', '展品多', '装饰美', '技术新'], answer: 0, explain: '叙事。' },
          { stem: '展览的类型包括：', options: ['基本陈列、临时展览、巡回展览', '只有基本陈列', '只有临时', '只有巡回'], answer: 0, explain: '多类。' },
          { stem: '展签与说明文字的作用是：', options: ['帮助理解、提供背景', '装饰', '凑数', '替代展品'], answer: 0, explain: '说明。' }
        ],
        doc: { lead: '这一章讲展览。', sections: [
          { id: 'design', title: '设计', html: `<p>主题—内容大纲—空间—展具—灯光—说明；观众动线。</p>` },
          { id: 'types', title: '类型', html: `<p>基本陈列、临时展、巡展、数字展；策展人制度。</p>` }
        ], refs: [] } },
      { title: '博物馆教育', brief: '让人学会。',
        q: [
          { stem: '博物馆教育的形式包括：', options: ['讲解、研学、工作坊、线上课程', '只有讲解', '只有研学', '只有线上'], answer: 0, explain: '多种。' },
          { stem: '针对儿童的展览设计应：', options: ['互动、具体、可操作', '文字多', '抽象', '安静'], answer: 0, explain: '互动。' },
          { stem: '博物馆之友与志愿者的作用是：', options: ['连接社区、扩大参与', '替代员工', '收费', '装饰'], answer: 0, explain: '参与。' }
        ],
        doc: { lead: '这一章讲教育。', sections: [
          { id: 'programs', title: '项目', html: `<p>讲解、研学、工作坊、讲座、线上资源；分众设计。</p>` },
          { id: 'participation', title: '参与', html: `<p>志愿者、博物馆之友、社区合作；无障碍服务。</p>` }
        ], refs: [] } },
      { title: '观众研究', brief: '谁来看。',
        q: [
          { stem: '观众研究的方法包括：', options: ['问卷、访谈、行为观察、数据分析', '只有问卷', '只有访谈', '只有观察'], answer: 0, explain: '多种。' },
          { stem: '观众研究的意义是：', options: ['改进展览与服务', '增加收入唯一', '考核', '装饰'], answer: 0, explain: '改进。' },
          { stem: '参观体验的关键指标是：', options: ['停留时间、互动、满意度、学习收获', '只有人数', '只有门票', '只有留言'], answer: 0, explain: '体验。' }
        ],
        doc: { lead: '这一章讲观众。', sections: [
          { id: 'methods', title: '方法', html: `<p>问卷、访谈、跟踪观察、眼动、社交媒体数据。</p>` },
          { id: 'evaluation', title: '评估', html: `<p>形成性评价与总结性评价；改进闭环。</p>` }
        ], refs: [] } },
      { title: '数字博物馆', brief: '线上线下。',
        q: [
          { stem: '数字博物馆的优势是：', options: ['突破时空、丰富展示手段', '替代实体', '降低成本唯一', '娱乐'], answer: 0, explain: '拓展。' },
          { stem: '虚拟展览的价值是：', options: ['保护原件与扩大传播', '替代研究', '装饰', '收藏'], answer: 0, explain: '传播。' },
          { stem: '数字化的风险是：', options: ['信息失真与版权问题', '成本低', '速度快', '无风险'], answer: 0, explain: '风险。' }
        ],
        doc: { lead: '这一章讲数字。', sections: [
          { id: 'digital', title: '数字', html: `<p>数字藏品、虚拟展厅、AR/VR、线上教育；元数据标准。</p>` },
          { id: 'risk', title: '风险', html: `<p>版权、真实性、数字鸿沟；技术更新与长期保存。</p>` }
        ], refs: [] } },
      { title: '博物馆管理', brief: '怎么运营。',
        q: [
          { stem: '博物馆管理的核心是：', options: ['收藏保护与公共服务的平衡', '盈利唯一', '收藏唯一', '展览唯一'], answer: 0, explain: '平衡。' },
          { stem: '博物馆的经费来源包括：', options: ['财政拨款、社会捐赠、文创收入', '只有财政', '只有门票', '只有捐赠'], answer: 0, explain: '多元。' },
          { stem: '理事会制度的作用是：', options: ['完善治理与决策', '增加层级', '装饰', '收费'], answer: 0, explain: '治理。' }
        ],
        doc: { lead: '这一章讲管理。', sections: [
          { id: 'governance', title: '治理', html: `<p>理事会、馆长负责制、章程；绩效评估。</p>` },
          { id: 'finance', title: '运营', html: `<p>财政、基金、文创、会员；免费开放与可持续发展。</p>` }
        ], refs: [] } },
      { title: '博物馆伦理', brief: '底线。',
        q: [
          { stem: '博物馆收藏伦理要求：', options: ['合法来源、反对盗掘与走私', '来者不拒', '只重价值', '私下交易'], answer: 0, explain: '合法。' },
          { stem: '涉及人骨与敏感藏品的展示应：', options: ['尊重来源社区与文化习俗', '随意展示', '猎奇', '商业化'], answer: 0, explain: '尊重。' },
          { stem: '文物返还争议的核心是：', options: ['来源合法性与文化权利', '价格', '运输', '保险'], answer: 0, explain: '返还。' }
        ],
        doc: { lead: '这一章讲伦理。', sections: [
          { id: 'acquisition', title: '收藏', html: `<p>来源审查、反非法交易；归还与返还。</p>` },
          { id: 'display', title: '展示', html: `<p>尊重文化、避免猎奇；原住民与社区参与。</p>` }
        ], refs: [] } }
    ] },
    { name: '文物保护', chapters: [
      { title: '保护的原则', brief: '最小干预。',
        q: [
          { stem: '文物保护的基本原则是：', options: ['最小干预、可逆性、原真性', '彻底修复', '焕然一新', '商业开发'], answer: 0, explain: '原则。' },
          { stem: '预防性保护强调的是：', options: ['控制环境、避免损害发生', '事后修复', '加固', '复制'], answer: 0, explain: '预防。' },
          { stem: '可逆性原则的意义是：', options: ['为未来技术留有余地', '便于施工', '省钱', '美观'], answer: 0, explain: '余地。' }
        ],
        doc: { lead: '这一章讲原则。', sections: [
          { id: 'principles', title: '原则', html: `<p>最小干预、可逆、可识别、原真性、整体性。</p>` },
          { id: 'preventive', title: '预防', html: `<p>环境控制、监测、包装运输、灾害预案。</p>` }
        ], refs: [] } },
      { title: '材料与劣化', brief: '为什么会坏。',
        q: [
          { stem: '文物劣化的主要原因包括：', options: ['温湿度、光照、污染物、生物', '只有时间', '只有人为', '只有水'], answer: 0, explain: '多因。' },
          { stem: '金属文物常见的病害是：', options: ['锈蚀与氯化物腐蚀', '虫蛀', '霉变', '褪色'], answer: 0, explain: '锈蚀。' },
          { stem: '纸质文物保护的要点是：', options: ['避光、控湿、防虫霉', '多翻动', '暴晒', '塑封'], answer: 0, explain: '环境。' }
        ],
        doc: { lead: '这一章讲劣化。', sections: [
          { id: 'agents', title: '因素', html: `<p>物理、化学、生物、人为；材料特性。</p>` },
          { id: 'types', title: '类型', html: `<p>金属锈蚀、石质风化、纸质酸化、木质虫蛀、壁画起甲。</p>` }
        ], refs: [] } },
      { title: '修复技术', brief: '怎么修。',
        q: [
          { stem: '修复前必须做的是：', options: ['病害调查与方案制定', '直接动手', '清洗', '粘接'], answer: 0, explain: '方案。' },
          { stem: '修复记录的意义是：', options: ['可追溯与可逆', '装饰', '凑数', '存档唯一'], answer: 0, explain: '追溯。' },
          { stem: '补配部分的处理应：', options: ['可识别、不过度做旧', '完全一致', '随意', '不做记录'], answer: 0, explain: '可识别。' }
        ],
        doc: { lead: '这一章讲修复。', sections: [
          { id: 'process', title: '流程', html: `<p>调查—方案—清洗—加固—补配—记录；最小干预。</p>` },
          { id: 'ethics', title: '伦理', html: `<p>不臆造、不掩盖、可逆；修复与研究的界限。</p>` }
        ], refs: [] } },
      { title: '石窟与壁画保护', brief: '大尺度的挑战。',
        q: [
          { stem: '壁画的主要病害是：', options: ['起甲、空鼓、酥碱、霉变', '虫蛀', '锈蚀', '酸化'], answer: 0, explain: '壁画。' },
          { stem: '石窟保护的关键是：', options: ['控制水与盐、监测环境', '封闭', '彩绘', '搬迁'], answer: 0, explain: '水盐。' },
          { stem: '游客管理对石窟保护的意义是：', options: ['控制湿度与二氧化碳', '增加收入', '宣传教育唯一', '无意义'], answer: 0, explain: '承载量。' }
        ],
        doc: { lead: '这一章讲石窟。', sections: [
          { id: 'diseases', title: '病害', html: `<p>起甲、空鼓、酥碱、盐析、生物；水害为主因。</p>` },
          { id: 'management', title: '管理', html: `<p>监测、限流、数字展示；预防性保护。</p>` }
        ], refs: [] } },
      { title: '土遗址与古建', brief: '大地上的遗产。',
        q: [
          { stem: '土遗址保护的主要难题是：', options: ['风化、雨蚀、结构失稳', '虫蛀', '锈蚀', '酸化'], answer: 0, explain: '风化。' },
          { stem: '古建筑修缮的原则是：', options: ['不改变文物原状', '翻新', '重建', '改建'], answer: 0, explain: '原状。' },
          { stem: '遗址公园的模式强调：', options: ['保护为主、合理利用', '商业开发', '封闭', '搬迁'], answer: 0, explain: '保护。' }
        ],
        doc: { lead: '这一章讲遗址。', sections: [
          { id: 'earthen', title: '土遗址', html: `<p>表面加固、排水、防风化；保护性设施。</p>` },
          { id: 'architecture', title: '古建', html: `<p>勘察测绘、原状修缮、材料工艺；防灾。</p>` }
        ], refs: [] } },
      { title: '水下与抢救性保护', brief: '来不及的时候。',
        q: [
          { stem: '水下考古保护的特殊性在于：', options: ['饱水环境与出水后的急剧变化', '成本低', '无需保护', '简单'], answer: 0, explain: '饱水。' },
          { stem: '抢救性考古适用于：', options: ['基建或盗掘威胁下的遗存', '任何遗址', '只有墓葬', '只有水下'], answer: 0, explain: '抢救。' },
          { stem: '出水木器的保护关键是：', options: ['脱水定型与防霉', '暴晒', '涂漆', '风干'], answer: 0, explain: '脱水。' }
        ],
        doc: { lead: '这一章讲特殊。', sections: [
          { id: 'underwater', title: '水下', html: `<p>原址保护、整体打捞、脱盐脱水；南海一号。</p>` },
          { id: 'rescue', title: '抢救', html: `<p>基建考古、快速记录、整体提取；保护与工期平衡。</p>` }
        ], refs: [] } },
      { title: '保护科技', brief: '新手段。',
        q: [
          { stem: '无损检测的作用是：', options: ['不损伤文物地了解内部与成分', '修复', '清洗', '搬运'], answer: 0, explain: '无损。' },
          { stem: '纳米材料在保护中的应用是：', options: ['加固与防护涂层', '替代原件', '装饰', '测年'], answer: 0, explain: '加固。' },
          { stem: '监测技术的价值是：', options: ['预警与评估保护效果', '装饰', '替代修复', '宣传'], answer: 0, explain: '预警。' }
        ],
        doc: { lead: '这一章讲科技。', sections: [
          { id: 'nondestructive', title: '无损', html: `<p>X 射线、CT、红外、拉曼；内部结构与成分。</p>` },
          { id: 'materials', title: '材料', html: `<p>加固剂、脱酸、纳米材料；兼容性与老化。</p>` }
        ], refs: [] } },
      { title: '保护管理与法规', brief: '制度保障。',
        q: [
          { stem: '文物保护工程的管理要求是：', options: ['资质、方案审批、验收', '自由施工', '无审批', '只验收'], answer: 0, explain: '审批。' },
          { stem: '文物保护法的核心制度包括：', options: ['分级保护、原址保护、审批许可', '自由贸易', '无规定', '只罚款'], answer: 0, explain: '制度。' },
          { stem: '破坏文物的法律责任包括：', options: ['行政、民事与刑事责任', '只有行政', '只有民事', '无责任'], answer: 0, explain: '多重。' }
        ],
        doc: { lead: '这一章讲管理。', sections: [
          { id: 'system', title: '制度', html: `<p>分级保护、修缮审批、工程资质、竣工验收。</p>` },
          { id: 'liability', title: '责任', html: `<p>行政、民事、刑事；追责与整改。</p>` }
        ], refs: [] } }
    ] },

    /* ---- 大四 ---- */
    { name: '毕业论文', chapters: [
      { title: '选题与学术史', brief: '小问题、有材料。',
        q: [
          { stem: '考古论文选题的关键是：', options: ['问题具体、材料可及', '题目宏大', '追热点', '导师偏好'], answer: 0, explain: '可行。' },
          { stem: '学术史回顾应：', options: ['梳理研究脉络并指出缺口', '罗列摘要', '按时间堆砌', '只引名家'], answer: 0, explain: '缺口。' },
          { stem: '材料准备包括：', options: ['发掘资料、器物、文献与数据', '只有文献', '只有器物', '只有图片'], answer: 0, explain: '多源。' }
        ],
        doc: { lead: '这一章讲开头。', sections: [
          { id: 'topic', title: '选题', html: `<p>区域、时段、器物或问题；小题大做。</p>` },
          { id: 'review', title: '学术史', html: `<p>按问题梳理；指出空白与你的推进。</p>` }
        ], refs: [] } },
      { title: '材料与方法', brief: '怎么研究。',
        q: [
          { stem: '考古论文的常见方法是：', options: ['类型学、地层学、统计与空间分析', '只有类型学', '只有地层', '只有统计'], answer: 0, explain: '多方法。' },
          { stem: '器物研究应：', options: ['建立分类与分期、结合语境', '只描述', '只拍照', '只测量'], answer: 0, explain: '分类。' },
          { stem: '使用他人资料应：', options: ['注明来源、尊重原始记录', '不标注', '随意改', '省略'], answer: 0, explain: '规范。' }
        ],
        doc: { lead: '这一章讲方法。', sections: [
          { id: 'methods', title: '方法', html: `<p>类型学、地层学、定量分析、GIS、科技手段。</p>` },
          { id: 'ethics', title: '规范', html: `<p>资料引用、发掘信息使用许可；未发表资料的引用规则。</p>` }
        ], refs: [] } },
      { title: '写作与规范', brief: '学术表达。',
        q: [
          { stem: '考古论文的语言要求是：', options: ['客观、准确、描述与解释分开', '华丽', '抒情', '夸张'], answer: 0, explain: '客观。' },
          { stem: '器物描述应包括：', options: ['编号、质地、尺寸、形制与纹饰', '只有尺寸', '只有形制', '只有照片'], answer: 0, explain: '要素。' },
          { stem: '结论应：', options: ['回应问题、说明局限', '提出新问题唯一', '重复引言', '写感想'], answer: 0, explain: '收束。' }
        ],
        doc: { lead: '这一章讲写作。', sections: [
          { id: 'structure', title: '结构', html: `<p>引言、材料与方法、分析、讨论、结论、附录（器物登记表）。</p>` },
          { id: 'standards', title: '规范', html: `<p>线图比例、图版编号、测量数据；注释体例。</p>` }
        ], refs: [] } },
      { title: '答辩', brief: '讲清楚。',
        q: [
          { stem: '答辩陈述的要点是：', options: ['问题、材料、方法、结论', '致谢', '篇幅', '格式'], answer: 0, explain: '四点。' },
          { stem: '被质疑时应：', options: ['承认局限并说明理由', '争辩', '回避', '改口'], answer: 0, explain: '诚恳。' },
          { stem: '答辩前最该准备的是：', options: ['熟悉材料与每条结论的依据', '背稿', 'PPT 模板', '服装'], answer: 0, explain: '依据。' }
        ],
        doc: { lead: '这一章讲答辩。', sections: [
          { id: 'talk', title: '陈述', html: `<p>8–10 分钟；材料—方法—结论—局限。</p>` },
          { id: 'qa', title: '问答', html: `<p>准备可能问题；不会就说不确定并说明如何查证。</p>` }
        ], refs: [] } }
    ] },
    { name: '专业实习', chapters: [
      { title: '实习类型', brief: '工地、博物馆、实验室。',
        q: [
          { stem: '考古专业实习的常见类型不包括：', options: ['田野发掘', '博物馆藏品管理', '实验室整理', '外科手术'], answer: 3, explain: '无关。' },
          { stem: '选择实习最该看：', options: ['能否参与真实项目', '名气', '工资', '通勤'], answer: 0, explain: '实战。' },
          { stem: '博物馆实习的核心内容是：', options: ['藏品、展览与教育', '只有讲解', '只有售票', '只有保安'], answer: 0, explain: '业务。' }
        ],
        doc: { lead: '这一章讲类型。', sections: [
          { id: 'field', title: '田野', html: `<p>调查、发掘、记录、整理；工地全流程。</p>` },
          { id: 'museum', title: '博物馆', html: `<p>藏品编目、展陈设计、社教活动；数字化。</p>` }
        ], refs: [] } },
      { title: '现场工作', brief: '在工地上。',
        q: [
          { stem: '工地实习的首要要求是：', options: ['遵守规程与安全要求', '快', '省力', '拍照'], answer: 0, explain: '规程。' },
          { stem: '清理遗迹时应注意：', options: ['按层位、保完整、勤记录', '快速', '只取器物', '不记录'], answer: 0, explain: '规范。' },
          { stem: '与技工协作的关键是：', options: ['明确分工、互相尊重', '命令', '竞争', '不沟通'], answer: 0, explain: '协作。' }
        ],
        doc: { lead: '这一章讲现场。', sections: [
          { id: 'procedure', title: '规程', html: `<p>布方、清理、绘图、拍照、取样；按单位推进。</p>` },
          { id: 'teamwork', title: '协作', html: `<p>领队、技师、学生、技工；沟通与学习。</p>` }
        ], refs: [] } },
      { title: '资料与报告', brief: '把工作留下。',
        q: [
          { stem: '实习应留下的成果是：', options: ['记录、器物登记表与实习报告', '工牌', '照片', '评语'], answer: 0, explain: '成果。' },
          { stem: '器物登记表应包含：', options: ['编号、坐标、质地、尺寸、保存状况', '只有编号', '只有尺寸', '只有照片'], answer: 0, explain: '要素。' },
          { stem: '实习报告的结构是：', options: ['概况—方法—发现—认识', '只有感想', '只有数据', '只有照片'], answer: 0, explain: '四段。' }
        ],
        doc: { lead: '这一章讲成果。', sections: [
          { id: 'records', title: '记录', html: `<p>日记、图纸、器物卡、采样记录；可追溯。</p>` },
          { id: 'report', title: '报告', html: `<p>遗址概况、工作方法、主要发现、初步认识。</p>` }
        ], refs: [] } },
      { title: '职业素养', brief: '做一个靠谱的人。',
        q: [
          { stem: '考古从业者的基本素养是：', options: ['严谨、耐心、守法、协作', '速度', '体力唯一', '口才'], answer: 0, explain: '严谨。' },
          { stem: '面对出土文物应：', options: ['依法登记上交、不私藏', '私自收藏', '出售', '赠送'], answer: 0, explain: '守法。' },
          { stem: '实习期间最重要的是：', options: ['多问多做、及时记录', '少说话', '只做分内', '等安排'], answer: 0, explain: '主动。' }
        ],
        doc: { lead: '这一章讲素养。', sections: [
          { id: 'qualities', title: '素养', html: `<p>严谨记录、耐心清理、守法护宝、团队协作。</p>` },
          { id: 'habits', title: '习惯', html: `<p>当天整理、留痕、复盘；尊重当地与社区。</p>` }
        ], refs: [] } }
    ] },
    { name: '考研与求职', chapters: [
      { title: '考研方向', brief: '考古、文博。',
        q: [
          { stem: '考古学考研的常见方向是：', options: ['考古学、文物与博物馆（专硕）', '只有考古', '只有文博', '只有历史'], answer: 0, explain: '两类。' },
          { stem: '考古学综合的考试范围通常包括：', options: ['考古学通论 + 中国考古 + 田野方法', '只有通论', '只有中国考古', '只有方法'], answer: 0, explain: '综合。' },
          { stem: '择校最应考虑：', options: ['方向、导师与实习资源', '城市', '学费', '宿舍'], answer: 0, explain: '资源。' }
        ],
        doc: { lead: '这一章讲方向。', sections: [
          { id: 'paths', title: '方向', html: `<p>考古学（史前/历史时期/科技/文化遗产）、文物与博物馆专硕。</p>` },
          { id: 'choose', title: '择校', html: `<p>导师方向、实习工地、博物馆资源；真题风格。</p>` }
        ], refs: [] } },
      { title: '专业课复习', brief: '通论与断代。',
        q: [
          { stem: '考古复习的主线是：', options: ['通论 + 断代考古 + 田野方法', '只背名词', '只看真题', '只读教材'], answer: 0, explain: '三条。' },
          { stem: '名词解释的答题结构是：', options: ['定义、特征、意义', '只有定义', '只有意义', '感想'], answer: 0, explain: '三段。' },
          { stem: '论述题的关键是：', options: ['观点 + 材料 + 逻辑', '篇幅', '引用', '字迹'], answer: 0, explain: '内容。' }
        ],
        doc: { lead: '这一章讲复习。', sections: [
          { id: 'framework', title: '框架', html: `<p>时代框架、文化序列、器物类型；重要遗址。</p>` },
          { id: 'writing', title: '答题', html: `<p>名词三段式；论述分点 + 例证。</p>` }
        ], refs: [] } },
      { title: '求职方向', brief: '文博系统与相关行业。',
        q: [
          { stem: '考古专业毕业生的常见去向不包括：', options: ['考古所/博物馆', '文化遗产管理', '文博出版与新媒体', '外科医生'], answer: 3, explain: '专业限制。' },
          { stem: '文博单位招考通常包括：', options: ['笔试（专业+公共）+ 面试', '只有面试', '只有笔试', '只有体检'], answer: 0, explain: '两块。' },
          { stem: '求职最加分的材料是：', options: ['实习经历与发掘/整理成果', '证书数量', '成绩单', '社团'], answer: 0, explain: '经历。' }
        ],
        doc: { lead: '这一章讲就业。', sections: [
          { id: 'paths', title: '路径', html: `<p>考古所、博物馆、文保中心、文化遗产部门、出版与新媒体。</p>` },
          { id: 'prep', title: '准备', html: `<p>田野经历、器物整理、报告写作；考编与专硕。</p>` }
        ], refs: [] } },
      { title: '面试', brief: '展示专业能力。',
        q: [
          { stem: '文博面试常考：', options: ['专业问题与材料分析', '编程', '财务', '销售'], answer: 0, explain: '专业。' },
          { stem: '讲实习经历的最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲感想'], answer: 0, explain: 'STAR。' },
          { stem: '被问"你怎么看考古的价值"时应：', options: ['结合实例说明学术与社会意义', '空谈', '回避', '背书'], answer: 0, explain: '实例。' }
        ],
        doc: { lead: '这一章讲面试。', sections: [
          { id: 'qa', title: '问答', html: `<p>专业基础、田野经验、法规伦理；结合实例。</p>` },
          { id: 'tell', title: '表达', html: `<p>结论先行、讲清方法与你自己的贡献。</p>` }
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
