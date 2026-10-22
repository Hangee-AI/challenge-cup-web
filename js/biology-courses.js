/* ==========================================================
   biology-courses.js · 生物科学：12 门课（主干 8 / 出口 4）= 84 关
   ========================================================== */

(function () {
  var MAJOR = 'science-生物科学';
  var TITLES = stageTitlesOf('science');

  var COURSES = [
    { name: '植物学', chapters: [
      { title: '植物细胞与组织', brief: '植物的基本单位。',
        q: [
          { stem: '植物细胞特有的结构是：', options: ['细胞壁与叶绿体', '线粒体', '核糖体', '高尔基体'], answer: 0, explain: '特有。' },
          { stem: '分生组织的功能是：', options: ['细胞分裂与生长', '光合', '储藏', '保护'], answer: 0, explain: '分生。' },
          { stem: '维管组织包括：', options: ['木质部与韧皮部', '表皮与皮层', '髓与皮层', '根与茎'], answer: 0, explain: '维管。' }
        ],
        doc: { lead: '这一章讲细胞。', sections: [
          { id: 'cell', title: '细胞', html: `<p>细胞壁、液泡、叶绿体；细胞分裂与分化。</p>` },
          { id: 'tissue', title: '组织', html: `<p>分生、保护、基本、维管组织；组织系统。</p>` }
        ], refs: [] } },
      { title: '营养器官', brief: '根茎叶。',
        q: [
          { stem: '根的主要功能是：', options: ['吸收与固着', '光合', '繁殖', '储藏唯一'], answer: 0, explain: '吸收。' },
          { stem: '双子叶植物茎的维管束排列是：', options: ['环状', '散生', '无', '交错'], answer: 0, explain: '环状。' },
          { stem: '叶的结构包括：', options: ['表皮、叶肉、叶脉', '只有叶肉', '只有表皮', '只有叶脉'], answer: 0, explain: '三部分。' }
        ],
        doc: { lead: '这一章讲器官。', sections: [
          { id: 'root', title: '根', html: `<p>根系、根尖分区、次生生长；变态根。</p>` },
          { id: 'stemleaf', title: '茎与叶', html: `<p>维管束、年轮；叶的结构与变态。</p>` }
        ], refs: [] } },
      { title: '生殖器官', brief: '花果实种子。',
        q: [
          { stem: '花的生殖部分包括：', options: ['雄蕊与雌蕊', '花萼与花冠', '花托', '花柄'], answer: 0, explain: '生殖。' },
          { stem: '双受精是：', options: ['两个精子分别与卵和极核融合', '两次受精', '单受精', '无受精'], answer: 0, explain: '双受精。' },
          { stem: '果实的类型取决于：', options: ['子房与花托的发育', '种子数', '花瓣', '花萼'], answer: 0, explain: '发育。' }
        ],
        doc: { lead: '这一章讲生殖。', sections: [
          { id: 'flower', title: '花', html: `<p>花的结构、花序；花程式。</p>` },
          { id: 'seed', title: '果实与种子', html: `<p>双受精、胚与胚乳；果实类型与传播。</p>` }
        ], refs: [] } },
      { title: '光合与代谢', brief: '绿色的工厂。',
        q: [
          { stem: '光合作用的场所是：', options: ['叶绿体', '线粒体', '细胞核', '液泡'], answer: 0, explain: '叶绿体。' },
          { stem: '光反应产生：', options: ['ATP 与 NADPH', '葡萄糖', '蛋白质', '脂肪'], answer: 0, explain: '光反应。' },
          { stem: 'C4 植物的优势是：', options: ['高温强光下光合效率高', '耐寒', '省水唯一', '无光呼吸'], answer: 0, explain: 'C4。' }
        ],
        doc: { lead: '这一章讲代谢。', sections: [
          { id: 'photosynthesis', title: '光合', html: `<p>光反应与暗反应、C3/C4/CAM；影响因数。</p>` },
          { id: 'transport', title: '运输', html: `<p>水分与矿质运输、蒸腾；同化物分配。</p>` }
        ], refs: [] } },
      { title: '植物分类', brief: '认识家族。',
        q: [
          { stem: '植物分类的基本单位是：', options: ['种', '属', '科', '目'], answer: 0, explain: '种。' },
          { stem: '双子叶植物与单子叶植物的区别是：', options: ['子叶数、叶脉、维管束排列', '颜色', '高度', '花期'], answer: 0, explain: '特征。' },
          { stem: '学名的组成是：', options: ['属名 + 种加词', '科名 + 属名', '俗名', '品种名'], answer: 0, explain: '双名法。' }
        ],
        doc: { lead: '这一章讲分类。', sections: [
          { id: 'taxonomy', title: '分类', html: `<p>双名法、分类阶元；藻类、苔藓、蕨类、裸子、被子。</p>` },
          { id: 'families', title: '常见科', html: `<p>禾本科、豆科、菊科、蔷薇科、十字花科；识别特征。</p>` }
        ], refs: [] } },
      { title: '植物生态适应', brief: '活下去的策略。',
        q: [
          { stem: '旱生植物的适应包括：', options: ['叶片退化、角质层厚', '叶大', '气孔多', '根系浅'], answer: 0, explain: '旱生。' },
          { stem: '阳生植物与阴生植物的区别是：', options: ['光补偿点与叶片结构', '颜色唯一', '高度', '花期'], answer: 0, explain: '光。' },
          { stem: '植物对胁迫的响应包括：', options: ['形态、生理与分子层面', '只有形态', '只有生理', '无响应'], answer: 0, explain: '多层。' }
        ],
        doc: { lead: '这一章讲适应。', sections: [
          { id: 'water', title: '水分', html: `<p>旱生、水生、盐生植物；渗透调节。</p>` },
          { id: 'stress', title: '胁迫', html: `<p>温度、光、污染胁迫；抗逆机制。</p>` }
        ], refs: [] } },
      { title: '植物资源与利用', brief: '为人所用。',
        q: [
          { stem: '植物资源利用包括：', options: ['食用、药用、工业、观赏', '只有食用', '只有药用', '只有观赏'], answer: 0, explain: '多用途。' },
          { stem: '药用植物的有效成分多属于：', options: ['次生代谢物', '蛋白质', '核酸', '糖'], answer: 0, explain: '次生代谢。' },
          { stem: '植物保护的意义是：', options: ['保存遗传资源与生态功能', '只有观赏', '只有经济', '无意义'], answer: 0, explain: '保护。' }
        ],
        doc: { lead: '这一章讲资源。', sections: [
          { id: 'uses', title: '利用', html: `<p>粮食、药用、纤维、能源；次生代谢物。</p>` },
          { id: 'conservation', title: '保护', html: `<p>珍稀濒危、迁地保护、种质资源库。</p>` }
        ], refs: [] } },
      { title: '植物学实验与野外', brief: '动手。',
        q: [
          { stem: '植物标本制作的关键是：', options: ['压制干燥与标签记录', '只压不记', '只拍照', '新鲜保存'], answer: 0, explain: '标本。' },
          { stem: '显微观察切片的步骤是：', options: ['取材—固定—切片—染色—观察', '直接观察', '只看整株', '只拍照'], answer: 0, explain: '制片。' },
          { stem: '野外调查的核心是：', options: ['样方设置与物种记录', '拍照唯一', '采集唯一', '目测'], answer: 0, explain: '样方。' }
        ],
        doc: { lead: '这一章讲实践。', sections: [
          { id: 'slide', title: '制片', html: `<p>临时装片、徒手切片、染色；显微镜使用。</p>` },
          { id: 'field', title: '野外', html: `<p>样方法、标本采集与鉴定；群落调查。</p>` }
        ], refs: [] } }
    ] },
    { name: '动物学', chapters: [
      { title: '动物体制与分类', brief: '多样的身体。',
        q: [
          { stem: '动物分类的基本单位是：', options: ['种', '属', '科', '门'], answer: 0, explain: '种。' },
          { stem: '两侧对称与辐射对称的区别是：', options: ['对称面数量', '体型大小', '有无体腔', '运动方式'], answer: 0, explain: '对称。' },
          { stem: '真体腔与假体腔的区别是：', options: ['体腔是否有中胚层衬里', '大小', '有无', '位置'], answer: 0, explain: '中胚层。' }
        ],
        doc: { lead: '这一章讲体制。', sections: [
          { id: 'symmetry', title: '对称与体腔', html: `<p>辐射、两侧对称；无体腔、假体腔、真体腔。</p>` },
          { id: 'taxonomy', title: '分类', html: `<p>门纲目科属种；无脊椎与脊椎。</p>` }
        ], refs: [] } },
      { title: '无脊椎动物', brief: '大多数动物。',
        q: [
          { stem: '节肢动物的特征是：', options: ['外骨骼、分节、附肢分节', '无分节', '内骨骼', '无附肢'], answer: 0, explain: '节肢。' },
          { stem: '昆虫的发育类型包括：', options: ['完全变态与不完全变态', '只有完全', '只有不完全', '无变态'], answer: 0, explain: '两类。' },
          { stem: '软体动物的代表是：', options: ['蜗牛、蚌、乌贼', '蚯蚓', '蜘蛛', '海星'], answer: 0, explain: '软体。' }
        ],
        doc: { lead: '这一章讲无脊椎。', sections: [
          { id: 'phyla', title: '各门', html: `<p>腔肠、扁形、线形、环节、软体、节肢、棘皮。</p>` },
          { id: 'insect', title: '昆虫', html: `<p>口器、翅、变态；与人类关系。</p>` }
        ], refs: [] } },
      { title: '脊椎动物', brief: '有脊椎的。',
        q: [
          { stem: '脊椎动物的五大类群是：', options: ['鱼、两栖、爬行、鸟、哺乳', '鱼、虫、鸟、兽', '鱼、两栖、鸟、兽', '鱼、爬行、鸟、兽'], answer: 0, explain: '五类。' },
          { stem: '鸟类适应飞行的特征包括：', options: ['羽毛、气囊、骨骼中空', '牙齿发达', '无羽毛', '体温不定'], answer: 0, explain: '飞行。' },
          { stem: '哺乳动物的特征是：', options: ['胎生哺乳、体表被毛', '卵生', '无乳腺', '变温'], answer: 0, explain: '哺乳。' }
        ],
        doc: { lead: '这一章讲脊椎。', sections: [
          { id: 'groups', title: '类群', html: `<p>鱼、两栖、爬行、鸟、哺乳；特征比较。</p>` },
          { id: 'adaptation', title: '适应', html: `<p>水生、陆生、飞行；体温调节与繁殖方式。</p>` }
        ], refs: [] } },
      { title: '比较解剖与生理', brief: '结构的演化。',
        q: [
          { stem: '同源器官说明：', options: ['共同起源', '功能相同', '环境相同', '无关系'], answer: 0, explain: '同源。' },
          { stem: '同功器官说明：', options: ['功能相似但起源不同', '起源相同', '无关系', '结构相同'], answer: 0, explain: '同功。' },
          { stem: '动物生理学研究：', options: ['器官系统功能与调节', '只有结构', '只有分类', '只有行为'], answer: 0, explain: '功能。' }
        ],
        doc: { lead: '这一章讲比较。', sections: [
          { id: 'homology', title: '同源与同功', html: `<p>比较解剖证据；演化线索。</p>` },
          { id: 'physiology', title: '生理', html: `<p>循环、呼吸、消化、排泄、神经内分泌。</p>` }
        ], refs: [] } },
      { title: '发育与进化', brief: '从受精到成体。',
        q: [
          { stem: '胚胎发育的关键阶段包括：', options: ['受精、卵裂、原肠、器官发生', '只有卵裂', '只有原肠', '只有器官'], answer: 0, explain: '阶段。' },
          { stem: '同源框基因的作用是：', options: ['调控体轴与器官发育', '只控制呼吸', '只控制颜色', '无作用'], answer: 0, explain: 'Hox。' },
          { stem: '进化证据包括：', options: ['化石、比较解剖、分子', '只有化石', '只有解剖', '只有分子'], answer: 0, explain: '多证据。' }
        ],
        doc: { lead: '这一章讲发育。', sections: [
          { id: 'embryo', title: '胚胎', html: `<p>卵裂、囊胚、原肠胚；三胚层与器官。</p>` },
          { id: 'evolution', title: '进化', html: `<p>化石、同源、分子钟；进化发育生物学。</p>` }
        ], refs: [] } },
      { title: '动物行为与生态', brief: '为什么这么做。',
        q: [
          { stem: '本能行为与学习行为的区别是：', options: ['是否先天、是否可塑', '是否复杂', '是否有益', '是否需要能量'], answer: 0, explain: '先天。' },
          { stem: '利他行为的解释包括：', options: ['亲缘选择与互惠', '自私唯一', '随机', '无解释'], answer: 0, explain: '亲缘。' },
          { stem: '动物生态学研究：', options: ['分布、数量与关系', '只有分类', '只有行为', '只有生理'], answer: 0, explain: '生态。' }
        ],
        doc: { lead: '这一章讲行为。', sections: [
          { id: 'behavior', title: '行为', html: `<p>本能、学习、通讯、繁殖、社会行为。</p>` },
          { id: 'ecology', title: '生态', html: `<p>种群、群落、栖息地；保护生物学。</p>` }
        ], refs: [] } },
      { title: '动物资源与保护', brief: '共处。',
        q: [
          { stem: '生物多样性包括：', options: ['遗传、物种、生态系统多样性', '只有物种', '只有遗传', '只有生态'], answer: 0, explain: '三层次。' },
          { stem: '濒危物种保护的措施包括：', options: ['就地与迁地保护', '只有迁地', '只有就地', '无措施'], answer: 0, explain: '两种。' },
          { stem: '外来物种入侵的危害是：', options: ['竞争与生态破坏', '无危害', '增加多样性唯一', '促进演化'], answer: 0, explain: '入侵。' }
        ],
        doc: { lead: '这一章讲保护。', sections: [
          { id: 'diversity', title: '多样性', html: `<p>三层次、热点地区；威胁因素。</p>` },
          { id: 'conservation', title: '保护', html: `<p>保护区、迁地保护、法律；入侵种管理。</p>` }
        ], refs: [] } },
      { title: '动物学实验与解剖', brief: '动手。',
        q: [
          { stem: '解剖实验的原则是：', options: ['按系统顺序、减少损伤', '随意剪', '只看表面', '不记录'], answer: 0, explain: '规范。' },
          { stem: '动物标本保存的方法包括：', options: ['浸制与干制', '只有浸制', '只有干制', '冷冻唯一'], answer: 0, explain: '两类。' },
          { stem: '动物实验伦理要求：', options: ['减少、替代、优化（3R）', '随意', '无需审批', '只求结果'], answer: 0, explain: '3R。' }
        ],
        doc: { lead: '这一章讲实践。', sections: [
          { id: 'dissection', title: '解剖', html: `<p>工具、顺序、记录；比较解剖观察。</p>` },
          { id: 'ethics', title: '伦理', html: `<p>3R 原则、伦理审查；标本来源合法。</p>` }
        ], refs: [] } }
    ] },
    { name: '生物化学', chapters: [
      { title: '蛋白质', brief: '生命的主力。',
        q: [
          { stem: '蛋白质的基本单位是：', options: ['氨基酸', '核苷酸', '单糖', '脂肪酸'], answer: 0, explain: '氨基酸。' },
          { stem: '蛋白质二级结构包括：', options: ['α 螺旋与 β 折叠', '只有 α', '只有 β', '无结构'], answer: 0, explain: '二级。' },
          { stem: '变性破坏的是：', options: ['空间结构（非共价键）', '肽键', '氨基酸序列', '元素组成'], answer: 0, explain: '构象。' }
        ],
        doc: { lead: '这一章讲蛋白质。', sections: [
          { id: 'structure', title: '结构', html: `<p>一至四级结构；肽键与二硫键；变性复性。</p>` },
          { id: 'function', title: '功能', html: `<p>催化、运输、结构、免疫；构效关系。</p>` }
        ], refs: [] } },
      { title: '酶', brief: '催化剂。',
        q: [
          { stem: '酶的作用是：', options: ['降低活化能、加快反应', '改变平衡常数', '提供能量', '消耗自身'], answer: 0, explain: '催化。' },
          { stem: '米氏常数 Km 反映：', options: ['酶与底物的亲和力', '酶浓度', '反应热', 'pH'], answer: 0, explain: '亲和力。' },
          { stem: '竞争性抑制的特点是：', options: ['Vmax 不变、Km 增大', 'Vmax 降低', 'Km 不变', '不可逆'], answer: 0, explain: '竞争。' }
        ],
        doc: { lead: '这一章讲酶。', sections: [
          { id: 'kinetics', title: '动力学', html: `<p>米氏方程、Km、Vmax；抑制剂类型。</p>` },
          { id: 'regulation', title: '调节', html: `<p>别构、共价修饰、酶原激活；同工酶。</p>` }
        ], refs: [] } },
      { title: '糖与脂', brief: '能量与结构。',
        q: [
          { stem: '葡萄糖的分解代谢始于：', options: ['糖酵解', '三羧酸循环', '氧化磷酸化', '磷酸戊糖途径'], answer: 0, explain: '糖酵解。' },
          { stem: '脂肪酸 β 氧化发生在：', options: ['线粒体', '细胞核', '内质网', '高尔基体'], answer: 0, explain: '线粒体。' },
          { stem: '糖异生的原料包括：', options: ['乳酸、甘油、氨基酸', '只有葡萄糖', '只有脂肪', '只有蛋白质'], answer: 0, explain: '多原料。' }
        ],
        doc: { lead: '这一章讲糖脂。', sections: [
          { id: 'glycolysis', title: '糖代谢', html: `<p>糖酵解、TCA、糖异生、糖原代谢；血糖调节。</p>` },
          { id: 'lipid', title: '脂代谢', html: `<p>β 氧化、酮体、脂肪酸合成；胆固醇。</p>` }
        ], refs: [] } },
      { title: '核酸', brief: '遗传物质。',
        q: [
          { stem: 'DNA 的基本单位是：', options: ['脱氧核苷酸', '核糖核苷酸', '氨基酸', '单糖'], answer: 0, explain: '核苷酸。' },
          { stem: 'DNA 双螺旋的碱基配对是：', options: ['A-T、G-C', 'A-G、T-C', 'A-C、G-T', '任意'], answer: 0, explain: '配对。' },
          { stem: 'RNA 的类型包括：', options: ['mRNA、tRNA、rRNA', '只有 mRNA', '只有 tRNA', '只有 rRNA'], answer: 0, explain: '三类。' }
        ],
        doc: { lead: '这一章讲核酸。', sections: [
          { id: 'structure', title: '结构', html: `<p>核苷酸、双螺旋、变性与复性；Tm 值。</p>` },
          { id: 'rna', title: 'RNA', html: `<p>mRNA、tRNA、rRNA；非编码 RNA。</p>` }
        ], refs: [] } },
      { title: '生物氧化', brief: '能量货币。',
        q: [
          { stem: 'ATP 被称为：', options: ['能量货币', '遗传物质', '催化剂', '结构蛋白'], answer: 0, explain: '货币。' },
          { stem: '氧化磷酸化发生在：', options: ['线粒体内膜', '细胞质', '细胞核', '溶酶体'], answer: 0, explain: '内膜。' },
          { stem: '呼吸链的作用是：', options: ['传递电子并泵出质子', '合成 DNA', '分解蛋白', '运输氧气唯一'], answer: 0, explain: '电子传递。' }
        ],
        doc: { lead: '这一章讲氧化。', sections: [
          { id: 'etc', title: '呼吸链', html: `<p>复合体、电子载体；氧化磷酸化与 P/O 比。</p>` },
          { id: 'atp', title: 'ATP', html: `<p>ATP 合成酶、化学渗透；能量 charge。</p>` }
        ], refs: [] } },
      { title: '代谢整合', brief: '整体视角。',
        q: [
          { stem: '代谢整合的意思是：', options: ['各代谢途径相互协调', '只有糖代谢', '只有脂代谢', '无联系'], answer: 0, explain: '整合。' },
          { stem: '关键调节酶的作用是：', options: ['控制代谢流方向与速度', '提供能量', '运输', '结构'], answer: 0, explain: '限速酶。' },
          { stem: '饥饿时的代谢变化包括：', options: ['糖异生增强、脂肪动员', '糖酵解增强', '脂肪合成', '无变化'], answer: 0, explain: '饥饿。' }
        ],
        doc: { lead: '这一章讲整合。', sections: [
          { id: 'regulation', title: '调节', html: `<p>限速酶、激素调控、能量状态；代谢区室化。</p>` },
          { id: 'states', title: '状态', html: `<p>进食、饥饿、运动、疾病状态下的代谢重编程。</p>` }
        ], refs: [] } },
      { title: '生化实验技术', brief: '怎么测。',
        q: [
          { stem: '蛋白质定量常用：', options: ['BCA 法、Bradford 法', 'PCR', '电泳', '离心'], answer: 0, explain: '定量。' },
          { stem: 'SDS-PAGE 用于：', options: ['按分子量分离蛋白质', '分离 DNA', '测酶活', '测糖'], answer: 0, explain: '电泳。' },
          { stem: '酶活测定应：', options: ['在初速度阶段、控制条件', '测终点唯一', '随意', '不控温'], answer: 0, explain: '初速度。' }
        ],
        doc: { lead: '这一章讲技术。', sections: [
          { id: 'quantification', title: '定量', html: `<p>蛋白定量、核酸定量；标准曲线。</p>` },
          { id: 'separation', title: '分离', html: `<p>离心、层析、电泳；活性检测与动力学。</p>` }
        ], refs: [] } }
    ] },
    { name: '细胞生物学', chapters: [
      { title: '细胞膜与物质运输', brief: '边界与通道。',
        q: [
          { stem: '细胞膜的基本骨架是：', options: ['磷脂双分子层', '蛋白质', '糖链', '胆固醇'], answer: 0, explain: '磷脂。' },
          { stem: '主动运输的特点是：', options: ['逆浓度梯度、耗能', '顺浓度', '不耗能', '无载体'], answer: 0, explain: '主动。' },
          { stem: '膜流动性受什么影响？', options: ['脂肪酸不饱和度与温度', '只有温度', '只有胆固醇', '无关'], answer: 0, explain: '流动。' }
        ],
        doc: { lead: '这一章讲膜。', sections: [
          { id: 'model', title: '流动镶嵌', html: `<p>磷脂、蛋白、糖被；流动性与不对称性。</p>` },
          { id: 'transport', title: '运输', html: `<p>被动、主动、胞吞胞吐；通道与泵。</p>` }
        ], refs: [] } },
      { title: '细胞器', brief: '分工协作。',
        q: [
          { stem: '蛋白质合成加工的场所是：', options: ['内质网与高尔基体', '溶酶体', '线粒体', '细胞核'], answer: 0, explain: 'ER/高尔基。' },
          { stem: '线粒体的功能是：', options: ['氧化磷酸化产生 ATP', '蛋白质合成', '脂质合成', '水解'], answer: 0, explain: '能量。' },
          { stem: '溶酶体的作用是：', options: ['水解消化', '合成', '运输', '储能'], answer: 0, explain: '消化。' }
        ],
        doc: { lead: '这一章讲细胞器。', sections: [
          { id: 'endomembrane', title: '内膜系统', html: `<p>ER、高尔基、溶酶体、过氧化物酶体；蛋白分选。</p>` },
          { id: 'energy', title: '能量', html: `<p>线粒体与叶绿体；内共生起源。</p>` }
        ], refs: [] } },
      { title: '细胞骨架', brief: '支架与马达。',
        q: [
          { stem: '细胞骨架的三种成分是：', options: ['微管、微丝、中间纤维', '只有微管', '只有微丝', '只有中间纤维'], answer: 0, explain: '三类。' },
          { stem: '微管的作用包括：', options: ['支撑、运输、纺锤体', '只支撑', '只运输', '只分裂'], answer: 0, explain: '多功能。' },
          { stem: '马达蛋白包括：', options: ['肌球蛋白、驱动蛋白、动力蛋白', '只有肌球蛋白', '只有驱动蛋白', '只有动力蛋白'], answer: 0, explain: '三类。' }
        ],
        doc: { lead: '这一章讲骨架。', sections: [
          { id: 'filaments', title: '三类', html: `<p>微管、微丝、中间纤维；组装与功能。</p>` },
          { id: 'motors', title: '马达', html: `<p>肌球蛋白、驱动蛋白、动力蛋白；运输与收缩。</p>` }
        ], refs: [] } },
      { title: '细胞周期', brief: '分裂的节律。',
        q: [
          { stem: '细胞周期的顺序是：', options: ['G1—S—G2—M', 'S—G1—M', 'M—G1—S', 'G1—M—S'], answer: 0, explain: '四期。' },
          { stem: '细胞周期调控的关键是：', options: ['周期蛋白与 CDK', '只有 ATP', '只有 DNA', '随机'], answer: 0, explain: 'CDK。' },
          { stem: '检查点的作用是：', options: ['保证复制与分裂的准确性', '加速分裂', '停止代谢', '无作用'], answer: 0, explain: '检查点。' }
        ],
        doc: { lead: '这一章讲周期。', sections: [
          { id: 'phases', title: '分期', html: `<p>G1、S、G2、M；有丝分裂各期特征。</p>` },
          { id: 'control', title: '调控', html: `<p>周期蛋白、CDK、检查点；癌变与周期失控。</p>` }
        ], refs: [] } },
      { title: '信号转导', brief: '细胞对话。',
        q: [
          { stem: '信号转导的基本步骤是：', options: ['接收—转导—响应', '只有接收', '只有响应', '无步骤'], answer: 0, explain: '三步。' },
          { stem: 'G 蛋白偶联受体的特点是：', options: ['七次跨膜、激活 G 蛋白', '单次跨膜', '核受体', '离子通道'], answer: 0, explain: 'GPCR。' },
          { stem: '第二信使的例子是：', options: ['cAMP、Ca²⁺', 'DNA', 'ATP 唯一', '葡萄糖'], answer: 0, explain: '第二信使。' }
        ],
        doc: { lead: '这一章讲信号。', sections: [
          { id: 'receptors', title: '受体', html: `<p>GPCR、受体酪氨酸激酶、离子通道、核受体。</p>` },
          { id: 'cascade', title: '级联', html: `<p>第二信使、激酶级联、放大与终止；串话。</p>` }
        ], refs: [] } },
      { title: '分化与死亡', brief: '命运决定。',
        q: [
          { stem: '细胞分化的本质是：', options: ['基因选择性表达', '基因丢失', 'DNA 突变', '细胞融合'], answer: 0, explain: '选择性表达。' },
          { stem: '细胞凋亡的特点是：', options: ['程序性、主动、无炎症', '被动坏死', '有炎症', '随机'], answer: 0, explain: '凋亡。' },
          { stem: '干细胞的特点是：', options: ['自我更新与多向分化', '只分裂', '只分化', '不分裂'], answer: 0, explain: '干细胞。' }
        ],
        doc: { lead: '这一章讲命运。', sections: [
          { id: 'differentiation', title: '分化', html: `<p>基因选择性表达、表观修饰；诱导分化。</p>` },
          { id: 'death', title: '死亡', html: `<p>凋亡、自噬、坏死；caspase 与线粒体途径。</p>` }
        ], refs: [] } },
      { title: '细胞研究技术', brief: '看见细胞。',
        q: [
          { stem: '观察活细胞常用：', options: ['相差与荧光显微镜', '电镜唯一', '只有染色', '只有固定'], answer: 0, explain: '活细胞。' },
          { stem: '流式细胞术用于：', options: ['细胞分选与定量分析', '观察结构', '测 DNA 序列', '培养'], answer: 0, explain: '流式。' },
          { stem: '细胞培养的关键是：', options: ['无菌、营养、环境', '只有温度', '只有培养基', '无要求'], answer: 0, explain: '培养。' }
        ],
        doc: { lead: '这一章讲技术。', sections: [
          { id: 'microscopy', title: '显微', html: `<p>光学、荧光、共聚焦、电镜；免疫荧光。</p>` },
          { id: 'culture', title: '培养与分选', html: `<p>原代与传代、无菌操作；流式与分选。</p>` }
        ], refs: [] } },
      { title: '细胞与疾病', brief: '失常的细胞。',
        q: [
          { stem: '癌细胞的典型特征是：', options: ['无限增殖、接触抑制丧失', '停止分裂', '凋亡增强', '无突变'], answer: 0, explain: '癌变。' },
          { stem: '癌基因与抑癌基因的关系是：', options: ['前者激活、后者失活促癌', '都促癌', '都抑癌', '无关'], answer: 0, explain: '两类。' },
          { stem: '细胞治疗的基础是：', options: ['干细胞与免疫细胞', '只有药物', '只有手术', '无基础'], answer: 0, explain: '细胞治疗。' }
        ],
        doc: { lead: '这一章讲疾病。', sections: [
          { id: 'cancer', title: '癌变', html: `<p>突变累积、癌基因与抑癌基因；转移。</p>` },
          { id: 'therapy', title: '治疗', html: `<p>靶向、免疫治疗、干细胞治疗；伦理。</p>` }
        ], refs: [] } }
    ] },
    { name: '遗传学', chapters: [
      { title: '孟德尔遗传', brief: '分离与自由组合。',
        q: [
          { stem: '分离定律说明：', options: ['等位基因在减数分裂时分离', '基因连锁', '基因突变', '无规律'], answer: 0, explain: '分离。' },
          { stem: '测交的作用是：', options: ['判断基因型', '改变表型', '诱导突变', '缩短世代'], answer: 0, explain: '测交。' },
          { stem: '自由组合定律适用于：', options: ['非同源染色体上的基因', '同源染色体', '同一基因', '所有基因'], answer: 0, explain: '非同源。' }
        ],
        doc: { lead: '这一章讲孟德尔。', sections: [
          { id: 'segregation', title: '分离', html: `<p>一对相对性状、基因型与表型；测交。</p>` },
          { id: 'assortment', title: '自由组合', html: `<p>两对性状、棋盘法；概率计算。</p>` }
        ], refs: [] } },
      { title: '连锁与互换', brief: '基因在同一染色体。',
        q: [
          { stem: '连锁基因的重组率反映：', options: ['基因间距离', '基因大小', '表达量', '突变率'], answer: 0, explain: '距离。' },
          { stem: '交换发生在：', options: ['减数分裂前期 I', '有丝分裂', '间期', '受精时'], answer: 0, explain: '前期 I。' },
          { stem: '遗传图距的单位是：', options: ['厘摩（cM）', 'bp', 'Da', 'mol'], answer: 0, explain: 'cM。' }
        ],
        doc: { lead: '这一章讲连锁。', sections: [
          { id: 'linkage', title: '连锁', html: `<p>完全与不完全连锁；重组率与图距。</p>` },
          { id: 'mapping', title: '作图', html: `<p>两点与三点测交；遗传图谱。</p>` }
        ], refs: [] } },
      { title: '基因突变', brief: '变化的来源。',
        q: [
          { stem: '基因突变的类型包括：', options: ['碱基替换、插入、缺失', '只有替换', '只有插入', '只有缺失'], answer: 0, explain: '三类。' },
          { stem: '移码突变会导致：', options: ['阅读框改变、蛋白序列大变', '无影响', '只改一个氨基酸', '不表达'], answer: 0, explain: '移码。' },
          { stem: '突变的诱因包括：', options: ['辐射、化学诱变剂、自发错误', '只有辐射', '只有化学', '无诱因'], answer: 0, explain: '多因。' }
        ],
        doc: { lead: '这一章讲突变。', sections: [
          { id: 'types', title: '类型', html: `<p>点突变、插入缺失、动态突变；同义与非同义。</p>` },
          { id: 'repair', title: '修复', html: `<p>错配、切除、重组修复；突变与疾病。</p>` }
        ], refs: [] } },
      { title: '染色体变异', brief: '大尺度的改变。',
        q: [
          { stem: '染色体结构变异包括：', options: ['缺失、重复、倒位、易位', '只有缺失', '只有重复', '只有易位'], answer: 0, explain: '四类。' },
          { stem: '非整倍体的例子是：', options: ['21 三体', '三倍体', '单倍体', '正常二倍体'], answer: 0, explain: '非整倍。' },
          { stem: '多倍体在植物中常导致：', options: ['器官增大、育性变化', '无变化', '死亡唯一', '变小'], answer: 0, explain: '多倍体。' }
        ],
        doc: { lead: '这一章讲变异。', sections: [
          { id: 'structure', title: '结构', html: `<p>缺失、重复、倒位、易位；后果与检测。</p>` },
          { id: 'number', title: '数目', html: `<p>整倍与非整倍；多倍体育种。</p>` }
        ], refs: [] } },
      { title: '群体遗传', brief: '基因频率。',
        q: [
          { stem: '哈迪-温伯格平衡的条件是：', options: ['大群体、随机交配、无选择突变迁移', '小群体', '有选择', '有突变'], answer: 0, explain: '条件。' },
          { stem: '遗传漂变在什么群体中更明显？', options: ['小群体', '大群体', '无群体', '任意'], answer: 0, explain: '小群体。' },
          { stem: '基因频率与基因型频率的关系由：', options: ['哈迪-温伯格定律描述', '孟德尔定律', '摩尔根定律', '中心法则'], answer: 0, explain: 'HW。' }
        ],
        doc: { lead: '这一章讲群体。', sections: [
          { id: 'hw', title: 'HW 平衡', html: `<p>等位基因与基因型频率；平衡条件。</p>` },
          { id: 'forces', title: '动力', html: `<p>选择、突变、迁移、漂变；适应与进化。</p>` }
        ], refs: [] } },
      { title: '数量遗传', brief: '连续性状。',
        q: [
          { stem: '数量性状的特点是：', options: ['连续变异、受多基因与环境影响', '离散', '单基因', '无环境作用'], answer: 0, explain: '连续。' },
          { stem: '遗传率反映：', options: ['表型变异中遗传因素的比例', '基因数量', '突变率', '选择强度'], answer: 0, explain: '遗传率。' },
          { stem: 'QTL 定位用于：', options: ['找到控制数量性状的位点', '测序唯一', '克隆唯一', '分类'], answer: 0, explain: 'QTL。' }
        ],
        doc: { lead: '这一章讲数量。', sections: [
          { id: 'variance', title: '方差分解', html: `<p>遗传方差与环境方差；遗传率。</p>` },
          { id: 'qtl', title: 'QTL', html: `<p>连锁分析、关联分析；育种应用。</p>` }
        ], refs: [] } },
      { title: '表观遗传', brief: '不改序列的改变。',
        q: [
          { stem: '表观遗传修饰包括：', options: ['DNA 甲基化、组蛋白修饰', '只有甲基化', '只有组蛋白', '基因突变'], answer: 0, explain: '两类。' },
          { stem: '表观遗传的特点是：', options: ['可遗传但不改变 DNA 序列', '改变序列', '不可遗传', '无影响'], answer: 0, explain: '可遗传。' },
          { stem: '表观修饰与环境的关系是：', options: ['环境可诱导表观改变', '无关', '只由基因决定', '随机'], answer: 0, explain: '环境。' }
        ],
        doc: { lead: '这一章讲表观。', sections: [
          { id: 'marks', title: '修饰', html: `<p>甲基化、组蛋白修饰、非编码 RNA；染色质状态。</p>` },
          { id: 'inheritance', title: '遗传', html: `<p>基因组印记、X 失活；环境与疾病。</p>` }
        ], refs: [] } },
      { title: '遗传工程与实验', brief: '改造基因。',
        q: [
          { stem: '基因克隆的基本步骤是：', options: ['切、接、转、选', '只切', '只接', '只选'], answer: 0, explain: '四步。' },
          { stem: 'CRISPR-Cas9 的作用是：', options: ['定向切割 DNA', '只复制', '只转录', '只翻译'], answer: 0, explain: '基因编辑。' },
          { stem: '模式生物包括：', options: ['果蝇、线虫、小鼠、拟南芥', '只有小鼠', '只有果蝇', '只有拟南芥'], answer: 0, explain: '模式。' }
        ],
        doc: { lead: '这一章讲工程。', sections: [
          { id: 'cloning', title: '克隆', html: `<p>酶切、连接、转化、筛选；载体与宿主。</p>` },
          { id: 'editing', title: '编辑', html: `<p>CRISPR、转基因、基因治疗；伦理与安全。</p>` }
        ], refs: [] } }
    ] },
    { name: '微生物学', chapters: [
      { title: '微生物形态与分类', brief: '看不见的世界。',
        q: [
          { stem: '细菌的基本形态包括：', options: ['球状、杆状、螺旋状', '只有球状', '只有杆状', '只有螺旋'], answer: 0, explain: '三形态。' },
          { stem: '原核与真核微生物的区别是：', options: ['有无核膜', '大小', '是否有 DNA', '是否致病'], answer: 0, explain: '核膜。' },
          { stem: '病毒的特点是：', options: ['无细胞结构、需宿主复制', '有细胞', '能独立繁殖', '有核'], answer: 0, explain: '病毒。' }
        ],
        doc: { lead: '这一章讲形态。', sections: [
          { id: 'bacteria', title: '细菌', html: `<p>形态、结构（壁、膜、鞭毛、芽孢）；革兰氏染色。</p>` },
          { id: 'classification', title: '分类', html: `<p>原核、真核、病毒；三域系统。</p>` }
        ], refs: [] } },
      { title: '营养与生长', brief: '怎么长。',
        q: [
          { stem: '微生物生长的四个时期是：', options: ['延迟、对数、稳定、衰亡', '只有对数', '只有稳定', '只有衰亡'], answer: 0, explain: '四期。' },
          { stem: '影响微生物生长的因素包括：', options: ['温度、pH、氧、营养', '只有温度', '只有 pH', '只有氧'], answer: 0, explain: '多因素。' },
          { stem: '灭菌与消毒的区别是：', options: ['是否杀死所有微生物（含芽孢）', '温度', '时间', '对象'], answer: 0, explain: '灭菌。' }
        ],
        doc: { lead: '这一章讲生长。', sections: [
          { id: 'curve', title: '生长曲线', html: `<p>四期、比生长速率；连续培养。</p>` },
          { id: 'control', title: '控制', html: `<p>灭菌、消毒、防腐；物理与化学方法。</p>` }
        ], refs: [] } },
      { title: '微生物代谢', brief: '多样的能量。',
        q: [
          { stem: '微生物的能量来源包括：', options: ['光能、有机物、无机物氧化', '只有光', '只有有机物', '只有无机物'], answer: 0, explain: '多样。' },
          { stem: '发酵与呼吸的区别是：', options: ['是否以有机物为最终电子受体', '是否有 ATP', '是否需要酶', '是否有底物'], answer: 0, explain: '受体。' },
          { stem: '固氮微生物的作用是：', options: ['将氮气转化为氨', '分解蛋白', '合成脂肪', '产氧'], answer: 0, explain: '固氮。' }
        ],
        doc: { lead: '这一章讲代谢。', sections: [
          { id: 'energy', title: '能量', html: `<p>发酵、呼吸、光合；自养与异养。</p>` },
          { id: 'nitrogen', title: '氮循环', html: `<p>固氮、硝化、反硝化；微生物驱动的元素循环。</p>` }
        ], refs: [] } },
      { title: '遗传与变异', brief: '怎么变。',
        q: [
          { stem: '细菌基因转移的方式包括：', options: ['转化、接合、转导', '只有转化', '只有接合', '只有转导'], answer: 0, explain: '三种。' },
          { stem: '质粒的特点是：', options: ['独立复制的小 DNA 分子', '与大基因组一体', '只有 RNA', '无基因'], answer: 0, explain: '质粒。' },
          { stem: '耐药性扩散的主要机制是：', options: ['质粒与转座子传播', '自发突变唯一', '环境', '随机'], answer: 0, explain: '耐药。' }
        ],
        doc: { lead: '这一章讲变异。', sections: [
          { id: 'transfer', title: '转移', html: `<p>转化、接合、转导；质粒与转座子。</p>` },
          { id: 'resistance', title: '耐药', html: `<p>耐药机制与传播；合理用药。</p>` }
        ], refs: [] } },
      { title: '病毒', brief: '寄生的寄生。',
        q: [
          { stem: '病毒复制的基本步骤是：', options: ['吸附—侵入—复制—装配—释放', '只有吸附', '只有复制', '只有释放'], answer: 0, explain: '五步。' },
          { stem: '噬菌体与动物病毒的区别是：', options: ['宿主不同', '是否有 DNA', '是否有蛋白', '大小'], answer: 0, explain: '宿主。' },
          { stem: '疫苗的原理是：', options: ['诱导免疫记忆', '直接杀菌', '替代抗体', '无作用'], answer: 0, explain: '免疫。' }
        ],
        doc: { lead: '这一章讲病毒。', sections: [
          { id: 'replication', title: '复制', html: `<p>吸附、侵入、复制、装配、释放；溶原与裂解。</p>` },
          { id: 'control', title: '防治', html: `<p>疫苗、抗病毒药物；新发传染病。</p>` }
        ], refs: [] } },
      { title: '免疫与微生物', brief: '防御。',
        q: [
          { stem: '先天免疫与适应性免疫的区别是：', options: ['是否特异性、是否有记忆', '快慢唯一', '是否需要细胞', '有无作用'], answer: 0, explain: '特异性。' },
          { stem: '抗体的产生来自：', options: ['B 细胞', 'T 细胞', '巨噬细胞', '红细胞'], answer: 0, explain: 'B 细胞。' },
          { stem: '微生物与宿主的关系包括：', options: ['共生、互利、致病', '只有共生', '只有致病', '无关系'], answer: 0, explain: '多种。' }
        ],
        doc: { lead: '这一章讲免疫。', sections: [
          { id: 'immune', title: '免疫', html: `<p>先天与适应；体液与细胞免疫。</p>` },
          { id: 'microbiome', title: '菌群', html: `<p>正常菌群、益生菌；微生态与健康。</p>` }
        ], refs: [] } },
      { title: '微生物生态', brief: '无处不在。',
        q: [
          { stem: '微生物在生态系统中的作用包括：', options: ['分解者、生产者、共生者', '只有分解', '只有生产', '只有共生'], answer: 0, explain: '多重。' },
          { stem: '生物膜的特点是：', options: ['群体协作、抗逆性强', '单个细胞', '无结构', '易杀灭'], answer: 0, explain: '生物膜。' },
          { stem: '极端环境微生物的意义是：', options: ['揭示生命极限与酶的来源', '无意义', '只研究', '只分类'], answer: 0, explain: '极端。' }
        ],
        doc: { lead: '这一章讲生态。', sections: [
          { id: 'roles', title: '角色', html: `<p>分解、固氮、共生；生物膜与群体感应。</p>` },
          { id: 'extreme', title: '极端', html: `<p>嗜热、嗜盐、嗜压；工业酶与应用。</p>` }
        ], refs: [] } },
      { title: '微生物应用', brief: '为人服务。',
        q: [
          { stem: '发酵工程的应用包括：', options: ['食品、医药、化工、环保', '只有食品', '只有医药', '只有环保'], answer: 0, explain: '多领域。' },
          { stem: '抗生素的主要来源是：', options: ['放线菌等微生物', '植物', '动物', '矿物'], answer: 0, explain: '微生物。' },
          { stem: '微生物在环境治理中的作用是：', options: ['降解污染物', '制造污染', '无作用', '只指示'], answer: 0, explain: '降解。' }
        ],
        doc: { lead: '这一章讲应用。', sections: [
          { id: 'fermentation', title: '发酵', html: `<p>菌种选育、发酵工艺、产物分离；工业微生物。</p>` },
          { id: 'environment', title: '环境', html: `<p>污水处理、生物修复；微生物采油与冶金。</p>` }
        ], refs: [] } }
    ] },
    { name: '分子生物学', chapters: [
      { title: 'DNA 复制', brief: '遗传信息的传递。',
        q: [
          { stem: 'DNA 复制的方式是：', options: ['半保留复制', '全保留', '分散', '随机'], answer: 0, explain: '半保留。' },
          { stem: 'DNA 聚合酶的方向是：', options: ['5′→3′', '3′→5′', '双向', '随机'], answer: 0, explain: '5′→3′。' },
          { stem: '复制起始需要：', options: ['引物、模板、dNTP、酶', '只有酶', '只有模板', '只有 dNTP'], answer: 0, explain: '要素。' }
        ],
        doc: { lead: '这一章讲复制。', sections: [
          { id: 'mechanism', title: '机制', html: `<p>半保留、前导链与后随链；引物与连接酶。</p>` },
          { id: 'eukaryote', title: '真核', html: `<p>多起点、端粒与端粒酶；复制调控。</p>` }
        ], refs: [] } },
      { title: '转录', brief: 'RNA 的合成。',
        q: [
          { stem: '转录的模板是：', options: ['DNA 的一条链', '两条链', 'RNA', '蛋白质'], answer: 0, explain: '模板链。' },
          { stem: '启动子的作用是：', options: ['结合 RNA 聚合酶、起始转录', '终止转录', '编码蛋白', '剪接'], answer: 0, explain: '启动子。' },
          { stem: '真核 mRNA 的加工包括：', options: ['加帽、加尾、剪接', '只有加帽', '只有加尾', '只有剪接'], answer: 0, explain: '三步。' }
        ],
        doc: { lead: '这一章讲转录。', sections: [
          { id: 'prokaryote', title: '原核', html: `<p>σ 因子、启动子、操纵子；转录终止。</p>` },
          { id: 'eukaryote', title: '真核', html: `<p>三种聚合酶、转录因子；加帽加尾剪接。</p>` }
        ], refs: [] } },
      { title: '翻译', brief: '蛋白质的合成。',
        q: [
          { stem: '遗传密码的特点是：', options: ['三联体、简并、通用', '二联体', '唯一', '不通用'], answer: 0, explain: '密码。' },
          { stem: 'tRNA 的作用是：', options: ['携带氨基酸并识别密码子', '构成核糖体', '剪接', '复制'], answer: 0, explain: 'tRNA。' },
          { stem: '翻译的起始密码子通常是：', options: ['AUG', 'UAA', 'UAG', 'UGA'], answer: 0, explain: 'AUG。' }
        ],
        doc: { lead: '这一章讲翻译。', sections: [
          { id: 'code', title: '密码', html: `<p>三联体、简并、摆动；起始与终止。</p>` },
          { id: 'ribosome', title: '核糖体', html: `<p>起始、延伸、终止；翻译后修饰与折叠。</p>` }
        ], refs: [] } },
      { title: '基因表达调控', brief: '什么时候开。',
        q: [
          { stem: '操纵子的调控方式是：', options: ['阻遏与诱导', '只有阻遏', '只有诱导', '无调控'], answer: 0, explain: '操纵子。' },
          { stem: '真核基因调控的层次包括：', options: ['染色质、转录、转录后、翻译、翻译后', '只有转录', '只有翻译', '只有转录后'], answer: 0, explain: '多层次。' },
          { stem: '增强子的特点是：', options: ['位置灵活、增强转录', '只在起始点', '抑制转录', '无作用'], answer: 0, explain: '增强子。' }
        ],
        doc: { lead: '这一章讲调控。', sections: [
          { id: 'prokaryote', title: '原核', html: `<p>操纵子、正负调控；衰减子。</p>` },
          { id: 'eukaryote', title: '真核', html: `<p>染色质重塑、转录因子、增强子；非编码 RNA。</p>` }
        ], refs: [] } },
      { title: '基因重组与转座', brief: '重排。',
        q: [
          { stem: '同源重组的关键是：', options: ['同源序列间的交换', '任意交换', '无序列要求', '只交换质粒'], answer: 0, explain: '同源。' },
          { stem: '转座子的特点是：', options: ['可在基因组中移动', '固定不动', '只有 RNA', '无基因'], answer: 0, explain: '转座。' },
          { stem: '位点特异性重组的例子是：', options: ['免疫球蛋白基因重排', '随机突变', '复制', '转录'], answer: 0, explain: 'V(D)J。' }
        ],
        doc: { lead: '这一章讲重组。', sections: [
          { id: 'homologous', title: '同源', html: `<p>Holliday 中间体、RecA；交叉与基因转换。</p>` },
          { id: 'transposon', title: '转座', html: `<p>转座子类型、机制；基因组演化。</p>` }
        ], refs: [] } },
      { title: '基因组学', brief: '整体地看。',
        q: [
          { stem: '基因组学与经典遗传学的区别是：', options: ['整体、规模化 vs 单个基因', '方法', '对象', '无区别'], answer: 0, explain: '整体。' },
          { stem: '二代测序的特点是：', options: ['高通量、短读长', '低通量', '长读长唯一', '只测 RNA'], answer: 0, explain: 'NGS。' },
          { stem: '转录组学研究：', options: ['全部 RNA 表达', '全部蛋白', '全部代谢物', '全部基因'], answer: 0, explain: '转录组。' }
        ],
        doc: { lead: '这一章讲基因组。', sections: [
          { id: 'sequencing', title: '测序', html: `<p>Sanger、NGS、三代测序；组装与注释。</p>` },
          { id: 'omics', title: '组学', html: `<p>转录组、蛋白组、代谢组；多组学整合。</p>` }
        ], refs: [] } },
      { title: 'RNA 世界与技术', brief: '不止信使。',
        q: [
          { stem: '非编码 RNA 包括：', options: ['miRNA、lncRNA、circRNA', '只有 miRNA', '只有 lncRNA', '只有 circRNA'], answer: 0, explain: '多类。' },
          { stem: 'RNAi 的作用是：', options: ['降解靶 mRNA、抑制表达', '增强表达', '复制 DNA', '翻译'], answer: 0, explain: 'RNAi。' },
          { stem: 'PCR 的基本步骤是：', options: ['变性—退火—延伸', '只有变性', '只有退火', '只有延伸'], answer: 0, explain: '三步。' }
        ],
        doc: { lead: '这一章讲 RNA。', sections: [
          { id: 'ncrna', title: '非编码', html: `<p>miRNA、siRNA、lncRNA、circRNA；调控网络。</p>` },
          { id: 'techniques', title: '技术', html: `<p>PCR、qPCR、RNAi、CRISPR；测序与克隆。</p>` }
        ], refs: [] } },
      { title: '中心法则与前沿', brief: '信息流。',
        q: [
          { stem: '中心法则描述：', options: ['DNA→RNA→蛋白质的信息流', '蛋白质→DNA', 'RNA→DNA 唯一', '无方向'], answer: 0, explain: '中心法则。' },
          { stem: '逆转录说明：', options: ['RNA 可反向合成 DNA', 'DNA 不能转录', '无例外', '中心法则错误'], answer: 0, explain: '逆转录。' },
          { stem: '基因编辑的伦理争议包括：', options: ['人类胚胎编辑与公平', '技术难度', '成本', '效率'], answer: 0, explain: '伦理。' }
        ],
        doc: { lead: '这一章讲前沿。', sections: [
          { id: 'dogma', title: '中心法则', html: `<p>复制、转录、翻译；逆转录与 RNA 复制。</p>` },
          { id: 'frontier', title: '前沿', html: `<p>单细胞、空间组学、合成生物学；伦理与监管。</p>` }
        ], refs: [] } }
    ] },
    { name: '生态学', chapters: [
      { title: '个体生态', brief: '环境与个体。',
        q: [
          { stem: '生态因子包括：', options: ['气候、土壤、生物因子', '只有气候', '只有土壤', '只有生物'], answer: 0, explain: '多类。' },
          { stem: '耐受定律说明：', options: ['生物对因子有耐受范围', '无限制', '只受一种因子', '任意'], answer: 0, explain: '耐受。' },
          { stem: '生态幅宽的物种通常：', options: ['分布广', '分布窄', '濒危', '特化'], answer: 0, explain: '广布。' }
        ],
        doc: { lead: '这一章讲个体。', html0: '', sections: [
          { id: 'factors', title: '因子', html: `<p>光、温、水、土壤；限制因子与耐受定律。</p>` },
          { id: 'adaptation', title: '适应', html: `<p>形态、生理、行为适应；生态型。</p>` }
        ], refs: [] } },
      { title: '种群生态', brief: '同种个体。',
        q: [
          { stem: '种群增长模型包括：', options: ['指数增长与逻辑斯谛增长', '只有指数', '只有逻辑斯谛', '无模型'], answer: 0, explain: '两种。' },
          { stem: '环境容纳量 K 指：', options: ['环境能维持的最大种群数量', '最大增长率', '最小种群', '出生率'], answer: 0, explain: 'K 值。' },
          { stem: '种群的年龄结构可用于：', options: ['预测种群趋势', '测数量', '测分布', '测行为'], answer: 0, explain: '预测。' }
        ],
        doc: { lead: '这一章讲种群。', sections: [
          { id: 'growth', title: '增长', html: `<p>指数与逻辑斯谛；r/K 对策。</p>` },
          { id: 'structure', title: '结构', html: `<p>年龄、性比、分布型；种群调节。</p>` }
        ], refs: [] } },
      { title: '群落生态', brief: '多种共存。',
        q: [
          { stem: '群落的水平结构表现为：', options: ['镶嵌分布', '分层唯一', '无结构', '随机'], answer: 0, explain: '镶嵌。' },
          { stem: '物种多样性指数常用：', options: ['Shannon 与 Simpson 指数', '只有 Shannon', '只有 Simpson', '无指数'], answer: 0, explain: '多样性。' },
          { stem: '群落演替的类型包括：', options: ['初生与次生演替', '只有初生', '只有次生', '无类型'], answer: 0, explain: '两类。' }
        ],
        doc: { lead: '这一章讲群落。', sections: [
          { id: 'structure', title: '结构', html: `<p>垂直与水平结构、优势种；边缘效应。</p>` },
          { id: 'succession', title: '演替', html: `<p>初生与次生、演替系列；顶极群落理论。</p>` }
        ], refs: [] } },
      { title: '生态系统', brief: '物质与能量。',
        q: [
          { stem: '能量流动的特点是：', options: ['单向、逐级递减', '循环', '递增', '双向'], answer: 0, explain: '单向。' },
          { stem: '物质循环的特点是：', options: ['循环利用', '单向', '递减', '不循环'], answer: 0, explain: '循环。' },
          { stem: '初级生产量指：', options: ['生产者固定的能量', '消费者同化', '分解者', '总呼吸'], answer: 0, explain: '初级。' }
        ],
        doc: { lead: '这一章讲系统。', sections: [
          { id: 'energy', title: '能量', html: `<p>食物链、营养级、生态效率；十分之一定律。</p>` },
          { id: 'cycle', title: '物质', html: `<p>碳、氮、磷循环；库与通量。</p>` }
        ], refs: [] } },
      { title: '生物多样性', brief: '多样的价值。',
        q: [
          { stem: '生物多样性包括：', options: ['遗传、物种、生态系统多样性', '只有物种', '只有遗传', '只有生态'], answer: 0, explain: '三层次。' },
          { stem: '多样性热点地区的特征是：', options: ['物种丰富且受威胁', '物种少', '无威胁', '面积大'], answer: 0, explain: '热点。' },
          { stem: '多样性丧失的主要原因包括：', options: ['栖息地丧失、入侵、污染、气候', '只有气候', '只有污染', '只有入侵'], answer: 0, explain: '多因。' }
        ],
        doc: { lead: '这一章讲多样性。', sections: [
          { id: 'levels', title: '层次', html: `<p>遗传、物种、生态系统；测度方法。</p>` },
          { id: 'threats', title: '威胁', html: `<p>栖息地破碎化、入侵种、过度利用、气候变化。</p>` }
        ], refs: [] } },
      { title: '全球变化', brief: '人类世。',
        q: [
          { stem: '全球变暖的主要原因是：', options: ['温室气体排放', '太阳活动', '火山', '地轴变化'], answer: 0, explain: '温室。' },
          { stem: '氮沉降的影响包括：', options: ['富营养化与多样性下降', '无影响', '增加多样性唯一', '净化空气'], answer: 0, explain: '沉降。' },
          { stem: '碳中和的途径包括：', options: ['减排与增汇', '只有减排', '只有增汇', '无途径'], answer: 0, explain: '两方面。' }
        ],
        doc: { lead: '这一章讲全球。', sections: [
          { id: 'climate', title: '气候', html: `<p>温室效应、升温、极端事件；生态响应。</p>` },
          { id: 'response', title: '应对', html: `<p>减排、碳汇、适应；生态修复与政策。</p>` }
        ], refs: [] } },
      { title: '应用生态学', brief: '解决实际问题。',
        q: [
          { stem: '生态修复的目标是：', options: ['恢复结构与功能', '只种树', '只造景', '无目标'], answer: 0, explain: '恢复。' },
          { stem: '生态农业的核心是：', options: ['物质循环与生态协调', '高投入', '单一种植', '化肥优先'], answer: 0, explain: '循环。' },
          { stem: '生态评估的常用指标包括：', options: ['生产力、多样性、稳定性', '只有生产力', '只有多样性', '只有稳定性'], answer: 0, explain: '多指标。' }
        ],
        doc: { lead: '这一章讲应用。', sections: [
          { id: 'restoration', title: '修复', html: `<p>退化生态系统、恢复路径；监测与评估。</p>` },
          { id: 'management', title: '管理', html: `<p>生态农业、自然保护区、生态补偿；可持续利用。</p>` }
        ], refs: [] } }
    ] },
    { name: '生物信息学', chapters: [
      { title: '序列比对', brief: '比较序列。',
        q: [
          { stem: '全局比对与局部比对的区别是：', options: ['是否覆盖全长', '是否用矩阵', '是否需要打分', '是否有空位'], answer: 0, explain: '范围。' },
          { stem: 'BLAST 的作用是：', options: ['序列相似性搜索', '结构预测', '聚类', '画图'], answer: 0, explain: '搜索。' },
          { stem: '打分矩阵（如 BLOSUM）用于：', options: ['评估氨基酸替换的保守性', '测序', '组装', '注释'], answer: 0, explain: '矩阵。' }
        ],
        doc: { lead: '这一章讲比对。', sections: [
          { id: 'alignment', title: '比对', html: `<p>全局、局部、多序列比对；空位罚分。</p>` },
          { id: 'search', title: '搜索', html: `<p>BLAST、FASTA；E 值与数据库。</p>` }
        ], refs: [] } },
      { title: '生物数据库', brief: '数据仓库。',
        q: [
          { stem: 'GenBank 属于：', options: ['核酸序列数据库', '蛋白结构库', '文献库', '表达库'], answer: 0, explain: '核酸。' },
          { stem: 'PDB 收录：', options: ['蛋白质三维结构', '序列', '表达量', '文献'], answer: 0, explain: '结构。' },
          { stem: '数据注释的意义是：', options: ['赋予序列生物学意义', '装饰', '压缩', '加密'], answer: 0, explain: '注释。' }
        ],
        doc: { lead: '这一章讲数据库。', sections: [
          { id: 'nucleotide', title: '核酸与蛋白', html: `<p>GenBank、EMBL、UniProt；PDB。</p>` },
          { id: 'annotation', title: '注释', html: `<p>功能注释、GO 与 KEGG；数据质量控制。</p>` }
        ], refs: [] } },
      { title: '系统发育分析', brief: '进化树。',
        q: [
          { stem: '系统发育树的构建方法包括：', options: ['邻接法、最大简约、最大似然、贝叶斯', '只有邻接', '只有最大似然', '只有贝叶斯'], answer: 0, explain: '多种。' },
          { stem: '自举值（bootstrap）反映：', options: ['分支的可靠性', '枝长', '物种数', '相似度'], answer: 0, explain: '可靠性。' },
          { stem: '根与外群的作用是：', options: ['确定树的极性', '装饰', '计算距离', '聚类'], answer: 0, explain: '外群。' }
        ],
        doc: { lead: '这一章讲进化。', sections: [
          { id: 'methods', title: '方法', html: `<p>距离法、简约法、似然法、贝叶斯；模型选择。</p>` },
          { id: 'support', title: '支持', html: `<p>自举、后验概率；树的解读与陷阱。</p>` }
        ], refs: [] } },
      { title: '基因组组装与注释', brief: '拼图。',
        q: [
          { stem: '基因组组装的难点包括：', options: ['重复序列与杂合度', '数据太少', '测序太慢', '无难点'], answer: 0, explain: '重复。' },
          { stem: 'contig 与 scaffold 的区别是：', options: ['是否含 gap 连接的更长片段', '长度', '质量', '来源'], answer: 0, explain: 'scaffold。' },
          { stem: '基因预测的依据包括：', options: ['开放阅读框与信号', '只有长度', '只有序列', '随机'], answer: 0, explain: 'ORF。' }
        ],
        doc: { lead: '这一章讲组装。', sections: [
          { id: 'assembly', title: '组装', html: `<p>reads、contig、scaffold；杂合与重复。</p>` },
          { id: 'annotation', title: '注释', html: `<p>基因预测、功能注释、非编码区；质量评估。</p>` }
        ], refs: [] } },
      { title: '结构预测', brief: '从序列到结构。',
        q: [
          { stem: '蛋白质结构预测的方法包括：', options: ['同源建模、折叠识别、从头预测', '只有同源', '只有从头', '只有折叠'], answer: 0, explain: '三类。' },
          { stem: 'AlphaFold 的突破在于：', options: ['高精度结构预测', '测序', '组装', '注释'], answer: 0, explain: '预测。' },
          { stem: '结构预测的验证依赖：', options: ['实验结构与评估指标', '猜测', '长度', '随机'], answer: 0, explain: '验证。' }
        ],
        doc: { lead: '这一章讲结构。', sections: [
          { id: 'methods', title: '方法', html: `<p>同源建模、threading、从头；深度学习。</p>` },
          { id: 'validation', title: '验证', html: `<p>RMSD、评估指标；实验验证的重要性。</p>` }
        ], refs: [] } },
      { title: '转录组与表达分析', brief: '谁在表达。',
        q: [
          { stem: 'RNA-seq 的主要步骤是：', options: ['建库—测序—比对—定量—差异分析', '只有测序', '只有比对', '只有定量'], answer: 0, explain: '流程。' },
          { stem: '差异表达分析常用：', options: ['DESeq2、edgeR', '只有 DESeq2', '只有 edgeR', '无方法'], answer: 0, explain: '工具。' },
          { stem: 'FPKM/RPKM 的作用是：', options: ['标准化表达量', '测序深度', '比对率', '注释'], answer: 0, explain: '标准化。' }
        ],
        doc: { lead: '这一章讲表达。', sections: [
          { id: 'pipeline', title: '流程', html: `<p>建库、比对、定量、标准化；批次效应。</p>` },
          { id: 'analysis', title: '分析', html: `<p>差异表达、富集分析、共表达网络。</p>` }
        ], refs: [] } },
      { title: '网络与多组学', brief: '系统视角。',
        q: [
          { stem: '蛋白质互作网络的数据来源包括：', options: ['酵母双杂交、质谱、文献', '只有酵母', '只有质谱', '只有文献'], answer: 0, explain: '多源。' },
          { stem: '网络分析的核心指标是：', options: ['度、聚类系数、中心性', '只有度', '只有中心性', '只有聚类'], answer: 0, explain: '指标。' },
          { stem: '多组学整合的价值是：', options: ['从多层面理解机制', '增加数据量', '装饰', '无价值'], answer: 0, explain: '整合。' }
        ],
        doc: { lead: '这一章讲网络。', sections: [
          { id: 'network', title: '网络', html: `<p>PPI、代谢网络、调控网络；拓扑分析。</p>` },
          { id: 'multiomics', title: '多组学', html: `<p>整合策略、机器学习；系统生物学。</p>` }
        ], refs: [] } },
      { title: '编程与实战', brief: '写代码。',
        q: [
          { stem: '生物信息学常用语言是：', options: ['Python 与 R', '只有 C', '只有 Java', '只有 SQL'], answer: 0, explain: '两类。' },
          { stem: '可重复分析要求：', options: ['代码、数据与参数可追溯', '只交结果', '截图', '口头说明'], answer: 0, explain: '可重复。' },
          { stem: '分析流程管理的常用工具是：', options: ['Snakemake、Nextflow', 'Word', 'Excel', 'PPT'], answer: 0, explain: '流程。' }
        ],
        doc: { lead: '这一章讲实战。', sections: [
          { id: 'tools', title: '工具', html: `<p>Biopython、Bioconductor、Linux 命令行；版本控制。</p>` },
          { id: 'workflow', title: '流程', html: `<p>流程管理、容器化、可重复研究；结果解读。</p>` }
        ], refs: [] } }
    ] },

    /* ---- 大四 ---- */
    { name: '毕业论文', chapters: [
      { title: '选题与文献', brief: '小问题、可做。',
        q: [
          { stem: '生物论文选题的关键是：', options: ['问题明确、方法可行', '题目宏大', '追热点', '导师偏好'], answer: 0, explain: '可行。' },
          { stem: '文献阅读的作用是：', options: ['了解方法并找到切入点', '凑数', '展示', '替代研究'], answer: 0, explain: '切入。' },
          { stem: '生物学研究的常见类型包括：', options: ['实验、野外、计算、综述', '只有实验', '只有计算', '只有综述'], answer: 0, explain: '多类。' }
        ],
        doc: { lead: '这一章讲开头。', sections: [
          { id: 'topic', title: '选题', html: `<p>分子、细胞、遗传、生态、生物信息；范围可控。</p>` },
          { id: 'review', title: '文献', html: `<p>综述与近三年论文；方法与结论。</p>` }
        ], refs: [] } },
      { title: '实验与数据', brief: '证据。',
        q: [
          { stem: '生物学实验的关键是：', options: ['对照、重复、统计', '只看结果', '无重复', '无对照'], answer: 0, explain: '三要素。' },
          { stem: '数据分析应：', options: ['选择合适方法并说明', '随意', '只算平均', '不做'], answer: 0, explain: '方法。' },
          { stem: '实验记录应：', options: ['即时、原始、可追溯', '事后补', '只记结果', '随意'], answer: 0, explain: '记录。' }
        ],
        doc: { lead: '这一章讲数据。', sections: [
          { id: 'design', title: '设计', html: `<p>对照、随机、重复；样本量。</p>` },
          { id: 'analysis', title: '分析', html: `<p>t 检验、方差分析、回归；作图规范。</p>` }
        ], refs: [] } },
      { title: '写作与规范', brief: '学术表达。',
        q: [
          { stem: '生物论文的结构是：', options: ['引言—方法—结果—讨论—结论', '总—分—总', '背景—致谢', '问答'], answer: 0, explain: 'IMRaD。' },
          { stem: '图表规范包括：', options: ['坐标标注、误差棒、统计说明', '只有图', '只有表', '无要求'], answer: 0, explain: '规范。' },
          { stem: '引用规范的作用是：', options: ['可追溯与学术诚信', '凑数', '装饰', '增加篇幅'], answer: 0, explain: '规范。' }
        ],
        doc: { lead: '这一章讲写作。', sections: [
          { id: 'structure', title: '结构', html: `<p>摘要、引言、材料与方法、结果、讨论、参考。</p>` },
          { id: 'figures', title: '图表', html: `<p>误差棒、显著性标记、图片分辨率；原始数据。</p>` }
        ], refs: [] } },
      { title: '答辩', brief: '讲清楚。',
        q: [
          { stem: '答辩陈述的要点是：', options: ['问题、方法、结果、局限', '致谢', '篇幅', '格式'], answer: 0, explain: '四点。' },
          { stem: '被质疑时应：', options: ['承认局限并说明理由', '争辩', '回避', '改口'], answer: 0, explain: '诚恳。' },
          { stem: '答辩前最该准备的是：', options: ['熟悉数据与实验结果', '背稿', 'PPT 模板', '服装'], answer: 0, explain: '依据。' }
        ],
        doc: { lead: '这一章讲答辩。', sections: [
          { id: 'talk', title: '陈述', html: `<p>8–10 分钟；问题—方法—结果—局限。</p>` },
          { id: 'qa', title: '问答', html: `<p>准备可能问题；不会就说不确定并说明思路。</p>` }
        ], refs: [] } }
    ] },
    { name: '专业实习', chapters: [
      { title: '实习类型', brief: '实验室、野外、企业。',
        q: [
          { stem: '生物专业实习的常见类型不包括：', options: ['实验室科研', '野外调查', '生物企业', '外科手术'], answer: 3, explain: '无关。' },
          { stem: '选择实习最该看：', options: ['能否参与真实项目', '名气', '工资', '通勤'], answer: 0, explain: '实战。' },
          { stem: '企业实习的核心内容是：', options: ['研发、质控与生产', '只有销售', '只有行政', '只有安保'], answer: 0, explain: '业务。' }
        ],
        doc: { lead: '这一章讲类型。', sections: [
          { id: 'lab', title: '实验室', html: `<p>课题参与、实验技能、数据分析；文献汇报。</p>` },
          { id: 'industry', title: '企业与野外', html: `<p>研发与质控；生态调查与监测。</p>` }
        ], refs: [] } },
      { title: '实验技能', brief: '手上功夫。',
        q: [
          { stem: '无菌操作的关键是：', options: ['灭菌、酒精灯、规范动作', '快速', '不灭菌', '开窗'], answer: 0, explain: '无菌。' },
          { stem: '移液器使用的要点是：', options: ['量程匹配、润洗、垂直吸放', '随意', '快速', '不换枪头'], answer: 0, explain: '规范。' },
          { stem: '实验安全要求：', options: ['防护、废弃物分类、应急处理', '只有手套', '只有通风', '无要求'], answer: 0, explain: '安全。' }
        ],
        doc: { lead: '这一章讲技能。', sections: [
          { id: 'aseptic', title: '无菌', html: `<p>灭菌、超净台、操作规范；污染排查。</p>` },
          { id: 'safety', title: '安全', html: `<p>试剂管理、废弃物、个人防护；应急预案。</p>` }
        ], refs: [] } },
      { title: '数据与报告', brief: '把工作留下。',
        q: [
          { stem: '实习应留下的成果是：', options: ['实验记录、数据与报告', '工牌', '照片', '评语'], answer: 0, explain: '成果。' },
          { stem: '实验记录应包含：', options: ['日期、步骤、数据、异常', '只有结果', '只有日期', '只有图'], answer: 0, explain: '要素。' },
          { stem: '实习报告的结构是：', options: ['背景—方法—结果—讨论', '只有感想', '只有数据', '只有照片'], answer: 0, explain: '四段。' }
        ],
        doc: { lead: '这一章讲成果。', sections: [
          { id: 'records', title: '记录', html: `<p>实验本、原始数据、图片；可追溯。</p>` },
          { id: 'report', title: '报告', html: `<p>背景、方法、结果、讨论；规范与伦理。</p>` }
        ], refs: [] } },
      { title: '职业素养', brief: '做靠谱的科研人。',
        q: [
          { stem: '科研诚信的核心是：', options: ['真实记录、不造假', '快速发表', '多产', '包装'], answer: 0, explain: '诚信。' },
          { stem: '生物安全的要求包括：', options: ['分级管理、规范操作', '无要求', '随意', '只看结果'], answer: 0, explain: '生物安全。' },
          { stem: '实习期间最重要的是：', options: ['主动学习、及时沟通', '少说话', '只做分内', '等安排'], answer: 0, explain: '主动。' }
        ],
        doc: { lead: '这一章讲素养。', sections: [
          { id: 'integrity', title: '诚信', html: `<p>原始数据、重复实验、署名规范；不造假。</p>` },
          { id: 'biosafety', title: '生物安全', html: `<p>实验室分级、菌毒种管理、废弃物处理。</p>` }
        ], refs: [] } }
    ] },
    { name: '考研与求职', chapters: [
      { title: '考研方向', brief: '生物与交叉。',
        q: [
          { stem: '生物科学考研的常见方向是：', options: ['生物化学与分子生物学、细胞、遗传、生态', '只有生化', '只有细胞', '只有生态'], answer: 0, explain: '多方向。' },
          { stem: '生化与分子生物学在考研中的地位是：', options: ['专业课核心', '不重要', '只考其一', '只考公共课'], answer: 0, explain: '核心。' },
          { stem: '择校最应考虑：', options: ['方向、导师与平台', '城市', '学费', '宿舍'], answer: 0, explain: '匹配。' }
        ],
        doc: { lead: '这一章讲方向。', sections: [
          { id: 'paths', title: '方向', html: `<p>生化与分子、细胞、遗传、发育、生态、生物信息。</p>` },
          { id: 'subjects', title: '科目', html: `<p>政治、英语、生化与分子生物学、细胞生物学（或专业综合）。</p>` }
        ], refs: [] } },
      { title: '专业课复习', brief: '概念与机制。',
        q: [
          { stem: '生化复习的主线是：', options: ['结构—代谢—遗传信息', '只背代谢', '只背结构', '只看真题'], answer: 0, explain: '主线。' },
          { stem: '细胞复习的主线是：', options: ['结构—功能—调控', '只背结构', '只背功能', '只看真题'], answer: 0, explain: '主线。' },
          { stem: '实验设计题的关键是：', options: ['对照、变量与检测指标', '猜', '背答案', '跳过'], answer: 0, explain: '设计。' }
        ],
        doc: { lead: '这一章讲复习。', sections: [
          { id: 'biochem', title: '生化', html: `<p>蛋白与酶、代谢途径、复制转录翻译；计算题。</p>` },
          { id: 'cell', title: '细胞', html: `<p>膜与细胞器、周期与信号、分化与死亡；实验技术。</p>` }
        ], refs: [] } },
      { title: '求职方向', brief: '医药、检测、教育。',
        q: [
          { stem: '生物专业毕业生的常见去向不包括：', options: ['医药研发', '检测与质控', '中学生物教师', '外科医生'], answer: 3, explain: '专业限制。' },
          { stem: '医药研发岗位看重：', options: ['实验技能与项目经验', '只有学历', '只有英语', '只有证书'], answer: 0, explain: '实验。' },
          { stem: '求职最加分的材料是：', options: ['科研项目与技能清单', '证书数量', '成绩单', '社团'], answer: 0, explain: '项目。' }
        ],
        doc: { lead: '这一章讲就业。', sections: [
          { id: 'paths', title: '路径', html: `<p>医药与生物技术、检测、环保、教师、读博。</p>` },
          { id: 'skills', title: '能力', html: `<p>实验与数据分析、文献阅读、生物信息；规范与安全。</p>` }
        ], refs: [] } },
      { title: '面试与试讲', brief: '展示能力。',
        q: [
          { stem: '生物教师面试试讲的关键是：', options: ['概念清晰、实验有效、逻辑严密', '背稿', 'PPT 精美', '时长'], answer: 0, explain: '推理。' },
          { stem: '研发岗面试常考：', options: ['实验设计与项目细节', '只有编程', '只有英语', '只有性格'], answer: 0, explain: '专业。' },
          { stem: '讲项目的最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
        ],
        doc: { lead: '这一章讲面试。', sections: [
          { id: 'teaching', title: '试讲', html: `<p>15 分钟：情境—探究—归纳—应用；板书与实验。</p>` },
          { id: 'tech', title: '技术', html: `<p>实验设计、数据分析、项目细节；安全与伦理。</p>` }
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
