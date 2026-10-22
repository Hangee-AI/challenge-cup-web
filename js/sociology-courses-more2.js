/* ==========================================================
   sociology-courses-more2.js · 社会学（下）：后 4 门主干 + 3 门出口
   ========================================================== */

appendChapters('law-社会学', [
  null, null, null, null, null,

  /* ---------- 6 城市社会学 ---------- */
  {
    chapters: [
      {
        title: '城市化',
        brief: '人口、空间与生活方式的转变。',
        q: [
          { stem: '城市化率通常指：', options: ['城镇常住人口占全国人口比重', '城市面积占比', '工业占比', '房价'], answer: 0, explain: '人口口径。' },
          { stem: '我国城市化进程的特点是：', options: ['速度快、规模大、半城市化', '缓慢', '已完成', '逆向'], answer: 0, explain: '半城市化。' },
          { stem: '"半城市化"指的是：', options: ['人进城但未获得完整市民权利', '城市空置', '逆城市化', '郊区化'], answer: 0, explain: '户籍与公共服务。' }
        ],
        doc: {
          lead: '这一章讲城市化的基本事实。',
          sections: [
            { id: 'measure', title: '测量', html: `<p>城市化率 = 城镇人口 / 总人口；还有建成区、就业结构等指标。</p>` },
            { id: 'china', title: '中国', html: `<p>快速城镇化 + 户籍分割 → 半城市化；近年转向市民化与县域城镇化。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '芝加哥学派',
        brief: '城市作为社会实验室。',
        q: [
          { stem: '芝加哥学派提出的经典模型是：', options: ['同心圆地带模型', '中心地理论', '增长极', '网络社会'], answer: 0, explain: '伯吉斯。' },
          { stem: '"城市生态学"强调：', options: ['空间竞争与人口分布', '文化唯一', '政治决定', '技术决定'], answer: 0, explain: '生态。' },
          { stem: '社区研究传统强调：', options: ['实地观察与地图绘制', '问卷唯一', '实验', '档案唯一'], answer: 0, explain: '田野。' }
        ],
        doc: {
          lead: '这一章讲经典传统。',
          sections: [
            { id: 'models', title: '三个模型', html: `<p>同心圆（伯吉斯）、扇形（霍伊特）、多核心（哈里斯/乌尔曼）。</p>` },
            { id: 'legacy', title: '遗产', html: `<p>把城市当作可观察的社会空间；社区研究方法的源头。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '空间与社会分层',
        brief: '住在哪里，本身就是分层。',
        q: [
          { stem: '"居住隔离"指的是：', options: ['不同群体在空间上分居', '混合居住', '搬迁', '通勤'], answer: 0, explain: '隔离。' },
          { stem: '空间失配假说解释：', options: ['就业机会与居住地错配导致失业', '房价', '交通', '教育'], answer: 0, explain: 'spatial mismatch。' },
          { stem: '门禁社区反映的是一种：', options: ['空间私有化与阶层区隔', '公共空间扩展', '混合居住', '去中心化'], answer: 0, explain: '区隔。' }
        ],
        doc: {
          lead: '这一章讲空间不平等。',
          sections: [
            { id: 'segregation', title: '隔离', html: `<p>收入、族群、户籍造成的居住分异；测度用隔离指数。</p>` },
            { id: 'mechanism', title: '机制', html: `<p>房价筛选、学区、规划、歧视。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '社区研究',
        brief: '从滕尼斯到当代中国社区。',
        q: [
          { stem: '滕尼斯的"共同体/社会"区分是：', options: ['情感纽带 vs 契约关系', '城市 vs 农村', '传统 vs 现代', '以上都对（近似）'], answer: 0, explain: '理想类型。' },
          { stem: '我国城市社区治理的典型结构是：', options: ['社区党组织、居委会、业委会、物业', '只有居委会', '只有物业', '只有政府'], answer: 0, explain: '多元。' },
          { stem: '社区参与的影响因素包括：', options: ['社会资本、利益关联、组织动员', '只有收入', '只有年龄', '只有学历'], answer: 0, explain: '多重。' }
        ],
        doc: {
          lead: '这一章讲社区。',
          sections: [
            { id: 'concept', title: '概念', html: `<p>地域、互动、认同；共同体与社会的理想类型。</p>` },
            { id: 'governance', title: '治理', html: `<p>党建引领 + 居委会 + 业委会 + 物业；社会资本与参与。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '绅士化',
        brief: '旧城更新与阶层替换。',
        q: [
          { stem: '绅士化指的是：', options: ['中产迁入、房价上涨、原住民被挤出', '人口外迁', '旧城衰败', '郊区化'], answer: 0, explain: '替换。' },
          { stem: '绅士化的正面效应包括：', options: ['环境改善、税收增加', '原住民受益唯一', '无影响', '租金下降'], answer: 0, explain: '两面。' },
          { stem: '抵抗绅士化的政策工具包括：', options: ['租金管制、包容性住房、社区土地信托', '放松管制', '提高容积率', '吸引投资'], answer: 0, explain: '政策。' }
        ],
        doc: {
          lead: '这一章讲更新。',
          sections: [
            { id: 'process', title: '过程', html: `<p>租金差 → 资本再投资 → 中产迁入 → 原住民迁出。</p>` },
            { id: 'policy', title: '政策', html: `<p>包容性规划、租金管制、社区土地信托、原址安置。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '城市治理',
        brief: '谁在管理城市、如何管理。',
        q: [
          { stem: '"城市增长机器"理论强调：', options: ['地方政府与开发商联盟推动增长', '居民自治', '中央政府', '市场自发'], answer: 0, explain: '增长联盟。' },
          { stem: '网格化管理的作用是：', options: ['细化治理单元、快速响应', '减少服务', '扩大规模', '去行政化'], answer: 0, explain: '网格。' },
          { stem: '城市治理的核心张力是：', options: ['增长与公平、效率与参与', '中央与地方', '城市与农村', '国内与国外'], answer: 0, explain: '张力。' }
        ],
        doc: {
          lead: '这一章讲治理。',
          sections: [
            { id: 'actors', title: '主体', html: `<p>政府、市场、社会；增长联盟与市民参与。</p>` },
            { id: 'tools', title: '工具', html: `<p>规划、网格化、数字化平台、公众参与。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '住房问题',
        brief: '房子不只是商品。',
        q: [
          { stem: '住房的商品属性与保障属性：', options: ['需要制度平衡', '只能商品化', '只能保障', '无属性'], answer: 0, explain: '双属性。' },
          { stem: '房价收入比衡量：', options: ['购房负担', '租金', '空置', '投资'], answer: 0, explain: '负担。' },
          { stem: '我国住房保障体系包括：', options: ['公租房、保障性租赁住房、共有产权房', '只有商品房', '只有廉租房', '只有经适房'], answer: 0, explain: '多层次。' }
        ],
        doc: {
          lead: '这一章讲住房。',
          sections: [
            { id: 'dual', title: '双属性', html: `<p>商品（市场配置）与保障（居住权）。</p>` },
            { id: 'policy', title: '政策', html: `<p>租购并举、保障性租赁住房、共有产权、公积金。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '交通与通勤',
        brief: '城市的流动成本。',
        q: [
          { stem: '通勤时间过长的主要后果是：', options: ['时间贫困与健康损耗', '收入增加', '效率提升', '无影响'], answer: 0, explain: '成本。' },
          { stem: '公共交通导向开发（TOD）强调：', options: ['围绕站点高密度混合开发', '郊区低密度', '私家车优先', '道路扩张'], answer: 0, explain: 'TOD。' },
          { stem: '交通公平关注：', options: ['不同群体可达性差异', '车速', '油价', '车辆数'], answer: 0, explain: '可达性。' }
        ],
        doc: {
          lead: '这一章讲出行。',
          sections: [
            { id: 'cost', title: '通勤成本', html: `<p>时间、金钱、健康；影响就业与社区选择。</p>` },
            { id: 'planning', title: '规划', html: `<p>TOD、慢行系统、需求管理；兼顾公平。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '城乡关系',
        brief: '不是两个世界，而是一个循环。',
        q: [
          { stem: '城乡二元结构的主要表现是：', options: ['户籍、土地、公共服务差异', '收入', '人口', '气候'], answer: 0, explain: '制度性。' },
          { stem: '乡村振兴的关键是：', options: ['产业、人才、土地与公共服务', '只有修路', '只有补贴', '只有旅游'], answer: 0, explain: '综合。' },
          { stem: '要素双向流动指：', options: ['人、地、钱在城乡间双向配置', '单向进城', '单向下乡', '不流动'], answer: 0, explain: '双向。' }
        ],
        doc: {
          lead: '这一章讲城乡。',
          sections: [
            { id: 'dual', title: '二元结构', html: `<p>户籍、土地制度、公共服务；半城市化是其结果。</p>` },
            { id: 'integration', title: '融合', html: `<p>县域城镇化、土地流转、公共服务均等化。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '都市圈与城市群',
        brief: '从单城到网络。',
        q: [
          { stem: '都市圈的核心特征是：', options: ['核心城市与周边通勤联系紧密', '行政合并', '人口相等', '产业相同'], answer: 0, explain: '通勤圈。' },
          { stem: '城市群发展的关键是：', options: ['基础设施互联与产业分工', '行政壁垒', '重复建设', '同质竞争'], answer: 0, explain: '协同。' },
          { stem: '收缩城市面临的问题是：', options: ['人口流失与设施闲置', '过度拥挤', '房价过高', '交通拥堵'], answer: 0, explain: '收缩。' }
        ],
        doc: {
          lead: '这一章讲区域。',
          sections: [
            { id: 'concept', title: '概念', html: `<p>都市圈（通勤）、城市群（分工）；以中心城市带动周边。</p>` },
            { id: 'issue', title: '问题', html: `<p>协同机制、利益分享、收缩城市的精明收缩。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '城市更新',
        brief: '拆与留之间。',
        q: [
          { stem: '城市更新的三种模式是：', options: ['拆除重建、整治改善、保护修缮', '只有拆除', '只有保护', '只有新建'], answer: 0, explain: '三类。' },
          { stem: '历史街区保护的核心是：', options: ['保留物质空间与社会生活', '只保留建筑', '全部重建', '商业开发唯一'], answer: 0, explain: '整体保护。' },
          { stem: '居民参与在城市更新中的作用是：', options: ['提升合法性与适配性', '降低效率', '增加成本', '无作用'], answer: 0, explain: '参与。' }
        ],
        doc: {
          lead: '这一章讲更新。',
          sections: [
            { id: 'modes', title: '三模式', html: `<p>拆除重建、综合整治、保护修缮。</p>` },
            { id: 'participation', title: '参与', html: `<p>征询、听证、共同设计；避免"一刀切"。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '复习',
        brief: '空间—分层—治理—更新，四块。',
        q: [
          { stem: '城市社会学的四块是：', options: ['空间、分层、治理、更新', '人口、交通、住房、环境', '过去、现在、未来', '国内、国际'], answer: 0, explain: '四块。' },
          { stem: '最常考的概念是：', options: ['绅士化与居住隔离', '地租', '规划', '通勤'], answer: 0, explain: '高频。' },
          { stem: '案例题先判断：', options: ['空间与社会的关系', '面积', '人口', 'GDP'], answer: 0, explain: '视角。' }
        ],
        doc: {
          lead: '这一章收成四块。',
          sections: [
            { id: 'four', title: '四块', html: `<ol><li>空间：城市化与形态</li><li>分层：隔离与绅士化</li><li>治理：主体与工具</li><li>更新：拆留与参与</li></ol>` },
            { id: 'tip', title: '提示', html: `<p>城市问题几乎都能落到"谁受益、谁承担"。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      }
    ]
  },

  /* ---------- 7 定性研究方法 ---------- */
  {
    chapters: [
      {
        title: '定性研究范式',
        brief: '理解意义，而非测量变量。',
        q: [
          { stem: '定性研究的核心目标是：', options: ['理解行动者的意义世界', '测量变量', '检验假设', '预测'], answer: 0, explain: '解释。' },
          { stem: '定性研究强调：', options: ['情境性、过程性与反身性', '随机抽样', '统计推断', '双盲'], answer: 0, explain: '三性。' },
          { stem: '定性样本选择通常采用：', options: ['目的性抽样', '简单随机', '分层随机', '整群'], answer: 0, explain: '目的性。' }
        ],
        doc: {
          lead: '这一章讲范式。',
          sections: [
            { id: 'goal', title: '目标', html: `<p>理解"为什么"和"如何"，而非"多少"。</p>` },
            { id: 'logic', title: '逻辑', html: `<p>归纳、迭代、理论生成；反身性要求研究者反思自身位置。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '深度访谈',
        brief: '让被访者讲出自己的故事。',
        q: [
          { stem: '深度访谈的关键技巧是：', options: ['倾听与追问具体经验', '快速提问', '引导答案', '只念提纲'], answer: 0, explain: '倾听。' },
          { stem: '"漏斗式"提问指：', options: ['从宽泛到具体', '从具体到宽泛', '随机', '只问封闭题'], answer: 0, explain: '结构。' },
          { stem: '访谈中应避免：', options: ['诱导性问题', '开放问题', '追问', '沉默'], answer: 0, explain: '诱导。' }
        ],
        doc: {
          lead: '这一章讲访谈。',
          sections: [
            { id: 'skills', title: '技巧', html: `<p>开放式问题、追问细节、复述确认、容忍沉默。</p>` },
            { id: 'guide', title: '提纲', html: `<p>主题式提纲而非问题清单；顺序可灵活。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '焦点小组',
        brief: '群体互动中生成观点。',
        q: [
          { stem: '焦点小组的优势是：', options: ['群体互动激发观点', '个体深度', '统计推断', '成本最低'], answer: 0, explain: '互动。' },
          { stem: '焦点小组的人数通常为：', options: ['6–10 人', '2 人', '30 人', '100 人'], answer: 0, explain: '小规模。' },
          { stem: '焦点小组的风险是：', options: ['从众与主导者垄断', '数据太少', '成本高', '无法记录'], answer: 0, explain: '群体动力。' }
        ],
        doc: {
          lead: '这一章讲小组访谈。',
          sections: [
            { id: 'design', title: '设计', html: `<p>同质性、6–10 人、主持人中立、记录与转录。</p>` },
            { id: 'risk', title: '风险', html: `<p>从众、沉默者、强势者；需主持人调节。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '参与观察',
        brief: '进入现场，成为"其中一员"。',
        q: [
          { stem: '参与观察的三种角色是：', options: ['完全参与者、参与者观察者、完全观察者', '访谈者、记录者、分析者', '内部、外部、混合', '公开、秘密、半公开'], answer: 0, explain: '角色。' },
          { stem: '观察笔记应当：', options: ['区分描述与解释', '只写结论', '只写感受', '事后补记'], answer: 0, explain: '分离。' },
          { stem: '"反应性"指：', options: ['被观察者因被观察而改变行为', '观察者改变', '数据变化', '环境变化'], answer: 0, explain: '影响。' }
        ],
        doc: {
          lead: '这一章讲观察。',
          sections: [
            { id: 'roles', title: '角色', html: `<p>参与程度谱系；公开与隐蔽的伦理代价。</p>` },
            { id: 'notes', title: '笔记', html: `<p>描述、对话、反思分栏；当天整理。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '民族志',
        brief: '长期浸泡后的整体描述。',
        q: [
          { stem: '民族志的核心是：', options: ['长期田野与整体性理解', '问卷', '实验', '统计'], answer: 0, explain: '整体。' },
          { stem: '"厚描"（格尔茨）指：', options: ['描述行为及其意义脉络', '详细统计', '长篇幅', '多图'], answer: 0, explain: '意义。' },
          { stem: '民族志的效度靠：', options: ['三角验证与成员检验', '大样本', '随机化', '显著性'], answer: 0, explain: '可信度。' }
        ],
        doc: {
          lead: '这一章讲民族志。',
          sections: [
            { id: 'method', title: '方法', html: `<p>长期参与、多源资料、整体视角；写文化。</p>` },
            { id: 'quality', title: '质量', html: `<p>三角验证、成员检验、厚描、反身性说明。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '个案研究',
        brief: '一个案例能说明什么。',
        q: [
          { stem: '个案研究的推广逻辑是：', options: ['分析性推广（理论）而非统计推广', '统计推断', '随机抽样', '无推广'], answer: 0, explain: '理论。' },
          { stem: '单案例与多案例研究的选择取决于：', options: ['研究问题与理论需要', '样本量', '预算', '时间'], answer: 0, explain: '问题导向。' },
          { stem: '关键个案的作用是：', options: ['检验理论或揭示机制', '代表总体', '节省成本', '便于写作'], answer: 0, explain: '机制。' }
        ],
        doc: {
          lead: '这一章讲个案。',
          sections: [
            { id: 'types', title: '类型', html: `<p>内在个案、工具性个案、集合个案；单案例与多案例。</p>` },
            { id: 'generalize', title: '推广', html: `<p>分析性推广：用案例检验或发展理论。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '话语分析',
        brief: '语言如何建构现实。',
        q: [
          { stem: '话语分析关注：', options: ['语言使用中的意义与权力', '词频', '语法', '发音'], answer: 0, explain: '建构。' },
          { stem: '批判话语分析的目标是：', options: ['揭示话语中的权力关系', '描述语言', '统计', '翻译'], answer: 0, explain: '批判。' },
          { stem: '话语分析的材料包括：', options: ['访谈、媒体、政策文本', '只有访谈', '只有问卷', '只有数据'], answer: 0, explain: '多源。' }
        ],
        doc: {
          lead: '这一章讲语言。',
          sections: [
            { id: 'approach', title: '取向', html: `<p>建构主义、批判话语分析、会话分析。</p>` },
            { id: 'data', title: '材料', html: `<p>自然发生的谈话、政策文件、媒体文本。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '编码与主题分析',
        brief: '从文本到概念。',
        q: [
          { stem: '开放式编码的作用是：', options: ['初步概念化与标签化', '统计检验', '抽样', '写作'], answer: 0, explain: '概念化。' },
          { stem: '主题分析的步骤是：', options: ['熟悉、编码、生成主题、审查、命名、写作', '抽样、统计、报告', '访谈、转录、分析', '设计、执行、评估'], answer: 0, explain: '六步。' },
          { stem: '编码的信度可通过：', options: ['多人编码与一致性检验', '单人编码', '随机编码', '不编码'], answer: 0, explain: '一致性。' }
        ],
        doc: {
          lead: '这一章讲编码。',
          sections: [
            { id: 'steps', title: '六步', html: `<p>熟悉数据 → 初始编码 → 主题 → 审查 → 命名 → 写作。</p>` },
            { id: 'quality', title: '质量', html: `<p>编码手册、多人一致性、保留原始引文。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '扎根理论',
        brief: '从数据中长出理论。',
        q: [
          { stem: '扎根理论的核心是：', options: ['持续比较与理论抽样', '先有假设再检验', '大样本', '随机化'], answer: 0, explain: '比较。' },
          { stem: '"理论饱和"指：', options: ['新数据不再产生新概念', '样本足够大', '时间到', '预算用完'], answer: 0, explain: '饱和。' },
          { stem: '扎根理论的编码三阶段是：', options: ['开放、主轴、选择性', '描述、解释、预测', '抽样、收集、分析', '归纳、演绎、验证'], answer: 0, explain: '三阶段。' }
        ],
        doc: {
          lead: '这一章讲理论生成。',
          sections: [
            { id: 'process', title: '过程', html: `<p>开放编码 → 主轴编码 → 选择性编码 → 理论建构。</p>` },
            { id: 'quality', title: '标准', html: `<p>理论饱和、持续比较、备忘录、理论抽样。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '质量控制',
        brief: '定性研究如何可信。',
        q: [
          { stem: '定性研究的可信度指标包括：', options: ['可信性、可迁移性、可靠性、可确认性', '信度、效度', 'α、p', 'R²'], answer: 0, explain: '林肯与古巴。' },
          { stem: '三角验证的作用是：', options: ['多来源交叉验证', '增加样本', '提高显著性', '节省时间'], answer: 0, explain: '交叉。' },
          { stem: '成员检验指：', options: ['让被研究者确认解读', '让专家评审', '重复实验', '随机抽样'], answer: 0, explain: 'member check。' }
        ],
        doc: {
          lead: '这一章讲质量。',
          sections: [
            { id: 'criteria', title: '四标准', html: `<p>可信性（三角/成员检验）、可迁移性（厚描）、可靠性（审计线索）、可确认性（反身性）。</p>` },
            { id: 'audit', title: '审计', html: `<p>保留原始资料与分析痕迹，使他人可追溯。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '写作与呈现',
        brief: '让读者"看见"田野。',
        q: [
          { stem: '定性写作的常见结构是：', options: ['问题—方法—发现（主题）—讨论', '摘要—引言—方法—结果', '总—分—总', '背景—方法—结论'], answer: 0, explain: '主题式。' },
          { stem: '引文的作用是：', options: ['呈现证据与让被研究者发声', '凑字数', '装饰', '替代分析'], answer: 0, explain: '证据。' },
          { stem: '定性写作应：', options: ['交代研究者位置与伦理', '隐去一切背景', '只写结论', '不署名'], answer: 0, explain: '反身性。' }
        ],
        doc: {
          lead: '这一章讲写作。',
          sections: [
            { id: 'structure', title: '结构', html: `<p>以主题组织，引文与分析交替；避免流水账。</p>` },
            { id: 'ethics', title: '呈现', html: `<p>匿名化、征得同意、避免可识别信息。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '复习',
        brief: '设计—收集—分析—呈现。',
        q: [
          { stem: '定性研究的主线是：', options: ['设计、收集、分析、呈现', '抽样、统计、报告', '理论、方法、应用', '过去、现在、未来'], answer: 0, explain: '四步。' },
          { stem: '最常考的两种方法是：', options: ['深度访谈与参与观察', '问卷与实验', '统计与建模', '档案与文献'], answer: 0, explain: '高频。' },
          { stem: '定性研究最容易失分的是：', options: ['不说明抽样与反思', '结论', '文献', '格式'], answer: 0, explain: '透明度。' }
        ],
        doc: {
          lead: '这一章收成链条。',
          sections: [
            { id: 'chain', title: '四步', html: `<p>问题与范式 → 抽样与进入 → 收集 → 编码与写作。</p>` },
            { id: 'tip', title: '提示', html: `<p>定性研究评价看"可信"，不看"显著"。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      }
    ]
  },

  /* ---------- 8 社会政策 ---------- */
  {
    chapters: [
      {
        title: '社会政策的概念',
        brief: '国家为应对社会风险所作的集体安排。',
        q: [
          { stem: '社会政策的本质是：', options: ['集体应对社会风险的制度安排', '慈善', '市场交易', '个人储蓄'], answer: 0, explain: '集体。' },
          { stem: '社会政策的核心领域不包括：', options: ['社会保障', '医疗', '教育', '国防采购'], answer: 3, explain: '非社会政策。' },
          { stem: '"社会权利"（马歇尔）指：', options: ['公民享有基本生活水准的权利', '财产权', '选举权', '契约自由'], answer: 0, explain: 'T.H. 马歇尔。' }
        ],
        doc: {
          lead: '这一章讲定义。',
          sections: [
            { id: 'define', title: '定义', html: `<p>政府为公民提供福利、应对失业/疾病/老年等风险的制度安排。</p>` },
            { id: 'rights', title: '权利', html: `<p>公民身份包含民事、政治、社会三类权利。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '福利体制',
        brief: '艾斯平-安德森的三种世界。',
        q: [
          { stem: '三种福利体制是：', options: ['自由主义、保守主义、社会民主', '计划、市场、混合', '中央、地方、社区', '保险、救助、服务'], answer: 0, explain: '三类型。' },
          { stem: '社会民主体制的特点是：', options: ['普遍主义、高税收高福利', '残余福利', '家庭为主', '市场为主'], answer: 0, explain: '北欧。' },
          { stem: '我国社会保障模式更接近：', options: ['社会统筹与个人账户结合', '纯粹自由主义', '纯粹社会民主', '无模式'], answer: 0, explain: '统账结合。' }
        ],
        doc: {
          lead: '这一章讲比较。',
          sections: [
            { id: 'three', title: '三体制', html: `<p>自由主义（英美，市场为主）、保守主义（欧陆，家庭/保险）、社会民主（北欧，普遍）。</p>` },
            { id: 'china', title: '中国', html: `<p>统账结合、多层次；覆盖扩大但待遇差异大。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '社会保障',
        brief: '养老、医疗、失业、工伤、生育。',
        q: [
          { stem: '我国社会保险的五大险种不包括：', options: ['养老', '医疗', '失业', '财产'], answer: 3, explain: '五险。' },
          { stem: '养老保险的筹资模式通常是：', options: ['现收现付 + 个人账户', '完全积累', '税收', '商业保险'], answer: 0, explain: '统账结合。' },
          { stem: '社会保障的再分配功能体现在：', options: ['收入转移与风险分担', '经济增长', '就业创造', '税收'], answer: 0, explain: '再分配。' }
        ],
        doc: {
          lead: '这一章讲社保。',
          sections: [
            { id: 'five', title: '五险', html: `<p>养老、医疗、失业、工伤、生育；另有社会救助与福利。</p>` },
            { id: 'finance', title: '筹资', html: `<p>现收现付、完全积累、统账结合；可持续性是核心议题。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '医疗政策',
        brief: '谁付钱、谁提供服务、如何控费。',
        q: [
          { stem: '我国基本医保体系包括：', options: ['职工医保与居民医保', '只有职工', '只有商业保险', '只有医疗救助'], answer: 0, explain: '两大块。' },
          { stem: '医疗费用控制的常见手段是：', options: ['支付方式改革（DRG/DIP）', '提高价格', '减少供给', '取消医保'], answer: 0, explain: '支付改革。' },
          { stem: '"看病难、看病贵"反映的是：', options: ['资源配置与费用负担问题', '医生不足唯一', '价格唯一', '技术问题'], answer: 0, explain: '系统问题。' }
        ],
        doc: {
          lead: '这一章讲医疗。',
          sections: [
            { id: 'system', title: '体系', html: `<p>职工医保、居民医保、医疗救助、商业保险；分级诊疗。</p>` },
            { id: 'cost', title: '控费', html: `<p>DRG/DIP 支付、集采、临床路径；质量与费用平衡。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '教育政策',
        brief: '公平与质量的双重目标。',
        q: [
          { stem: '教育政策的核心张力是：', options: ['公平与效率（质量）', '城市与农村', '公立与私立', '考试与素质'], answer: 0, explain: '张力。' },
          { stem: '"双减"政策的目标是：', options: ['减轻作业与校外培训负担', '取消考试', '减少学校', '提高收费'], answer: 0, explain: '减负。' },
          { stem: '教育公平的关键环节是：', options: ['资源均衡配置与机会公平', '校舍', '教材', '排名'], answer: 0, explain: '资源。' }
        ],
        doc: {
          lead: '这一章讲教育。',
          sections: [
            { id: 'goals', title: '目标', html: `<p>公平（机会、过程、结果）与质量；义务教育均衡发展。</p>` },
            { id: 'reform', title: '改革', html: `<p>双减、县中振兴、职普分流、高考改革。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '住房政策',
        brief: '从商品化到租购并举。',
        q: [
          { stem: '我国住房制度改革的转折点是：', options: ['1998 年停止福利分房', '2008 年', '2015 年', '2020 年'], answer: 0, explain: '房改。' },
          { stem: '保障性租赁住房面向：', options: ['新市民、青年人', '高收入者', '外国人', '企业'], answer: 0, explain: '新市民。' },
          { stem: '房价调控的常用工具包括：', options: ['土地供应、信贷、限购、税收', '只有限价', '只有加息', '只有补贴'], answer: 0, explain: '组合。' }
        ],
        doc: {
          lead: '这一章讲住房。',
          sections: [
            { id: 'history', title: '历程', html: `<p>福利分房 → 商品化 → 调控 → 租购并举。</p>` },
            { id: 'tools', title: '工具', html: `<p>保障房、租赁、土地与金融政策、税收。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '就业与劳动政策',
        brief: '灵活就业时代的新问题。',
        q: [
          { stem: '我国就业政策的首要目标是：', options: ['扩大就业与稳定岗位', '提高工资', '减少工时', '限制招聘'], answer: 0, explain: '就业优先。' },
          { stem: '平台灵活就业的主要风险是：', options: ['缺乏社保与劳动保护', '收入低唯一', '技术门槛', '税收'], answer: 0, explain: '保障缺口。' },
          { stem: '最低工资制度的作用是：', options: ['保障基本生活、影响工资底线', '提高利润', '减少就业必然', '抑制竞争'], answer: 0, explain: '底线。' }
        ],
        doc: {
          lead: '这一章讲劳动。',
          sections: [
            { id: 'policy', title: '政策', html: `<p>就业优先、职业培训、失业保险、最低工资、劳动合同。</p>` },
            { id: 'new', title: '新形态', html: `<p>平台用工的身份认定与保障；职业伤害保障试点。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '贫困与社会救助',
        brief: '从救济到发展型救助。',
        q: [
          { stem: '绝对贫困与相对贫困的区别是：', options: ['生存线 vs 相对平均水平', '城市 vs 农村', '收入 vs 支出', '短期 vs 长期'], answer: 0, explain: '标准。' },
          { stem: '我国脱贫攻坚完成后转向：', options: ['巩固成果与相对贫困治理', '停止救助', '只发钱', '取消低保'], answer: 0, explain: '衔接。' },
          { stem: '社会救助的典型项目是：', options: ['低保、特困供养、临时救助', '养老金', '医保', '公积金'], answer: 0, explain: '救助。' }
        ],
        doc: {
          lead: '这一章讲救助。',
          sections: [
            { id: 'concept', title: '贫困', html: `<p>绝对（生存标准）与相对（社会平均水平）；多维贫困。</p>` },
            { id: 'assist', title: '救助', html: `<p>低保、特困、临时救助、专项救助；发展型救助与能力建设。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '政策过程',
        brief: '议程、制定、执行、评估。',
        q: [
          { stem: '政策议程设置的关键是：', options: ['问题被关注并进入决策', '预算', '人员', '法律'], answer: 0, explain: '议程。' },
          { stem: '政策执行"走样"的常见原因是：', options: ['目标模糊、资源不足、激励错位', '人员少', '文件多', '会议多'], answer: 0, explain: '执行。' },
          { stem: '多源流理论解释：', options: ['问题、政策、政治三流汇合打开政策窗口', '预算周期', '官僚制', '选举'], answer: 0, explain: '金登。' }
        ],
        doc: {
          lead: '这一章讲过程。',
          sections: [
            { id: 'stages', title: '阶段', html: `<p>议程 → 制定 → 执行 → 评估 → 调整。</p>` },
            { id: 'theory', title: '理论', html: `<p>多源流、倡导联盟、渐进主义。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '政策评估',
        brief: '效果、效率、公平。',
        q: [
          { stem: '政策评估的三种类型是：', options: ['过程、效果、效率评估', '事前、事中、事后', '定量、定性、混合', '经济、社会、环境'], answer: 0, explain: '三类（也可分事前事后）。' },
          { stem: '反事实是效果评估的关键，常用方法是：', options: ['随机对照、双重差分、断点回归', '问卷', '访谈', '观察'], answer: 0, explain: '因果推断。' },
          { stem: '政策评估应避免：', options: ['只报喜不报忧', '使用数据', '对照比较', '公开结果'], answer: 0, explain: '客观。' }
        ],
        doc: {
          lead: '这一章讲评估。',
          sections: [
            { id: 'types', title: '类型', html: `<p>过程评估、效果评估、效率评估；事前与事后。</p>` },
            { id: 'method', title: '方法', html: `<p>RCT、DID、断点、匹配；注意选择偏差。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '中国社会政策',
        brief: '从单位福利到社会政策体系。',
        q: [
          { stem: '我国社会政策的转型路径是：', options: ['单位福利 → 社会保险 → 适度普惠', '一直普惠', '一直单位化', '完全市场化'], answer: 0, explain: '三阶段。' },
          { stem: '当前社会政策的重点是：', options: ['共同富裕、民生保障、一老一小', '扩大出口', '减少保障', '城市化唯一'], answer: 0, explain: '民生。' },
          { stem: '社会政策与经济发展的关系是：', options: ['相互支撑（社会投资）', '相互排斥', '无关', '后者优先'], answer: 0, explain: '社会投资。' }
        ],
        doc: {
          lead: '这一章讲中国经验。',
          sections: [
            { id: 'stages', title: '三阶段', html: `<p>单位制福利 → 社会保险体系建设 → 适度普惠与共同富裕。</p>` },
            { id: 'issues', title: '议题', html: `<p>老龄化、少子化、城乡差距、灵活就业保障。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '复习',
        brief: '理念—制度—过程—评估，四块。',
        q: [
          { stem: '社会政策的四块是：', options: ['理念、制度、过程、评估', '保险、救助、福利、服务', '中央、地方、社区、家庭', '过去、现在、未来'], answer: 0, explain: '四块。' },
          { stem: '最常考的是：', options: ['福利体制与政策评估', '预算', '税收', '选举'], answer: 0, explain: '高频。' },
          { stem: '案例题先判断：', options: ['政策目标与受益群体', '预算', '部门', '时间'], answer: 0, explain: '目标。' }
        ],
        doc: {
          lead: '这一章收成四块。',
          sections: [
            { id: 'four', title: '四块', html: `<ol><li>理念：权利与风险</li><li>制度：社保、医疗、教育、住房</li><li>过程：议程与执行</li><li>评估：效果与公平</li></ol>` },
            { id: 'tip', title: '提示', html: `<p>任何政策都问：谁受益、谁付费、谁被排除。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      }
    ]
  },

  /* ---------- 9 田野调查 ---------- */
  {
    chapters: [
      {
        title: '选题与进入',
        brief: '从问题到现场的第一步。',
        q: [
          { stem: '田野选题应当：', options: ['可行、有意义、能进入', '宏大', '时髦', '熟悉'], answer: 0, explain: '可行。' },
          { stem: '"进入"田野的关键是：', options: ['获得信任与许可', '带设备', '有钱', '有名'], answer: 0, explain: '信任。' },
          { stem: '研究者的"位置"会影响：', options: ['能看见什么与被如何对待', '数据量', '预算', '时间'], answer: 0, explain: '反身性。' }
        ],
        doc: {
          lead: '这一章讲开始。',
          sections: [
            { id: 'topic', title: '选题', html: `<p>问题意识 + 现场可及性；先做预调查。</p>` },
            { id: 'entry', title: '进入', html: `<p>守门人、介绍人、正式许可；说明研究目的与用途。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '守门人与关系',
        brief: '谁带你进去，决定你能看到什么。',
        q: [
          { stem: '守门人的作用是：', options: ['允许进入并影响样本构成', '提供资金', '做分析', '写报告'], answer: 0, explain: '关键人。' },
          { stem: '过度依赖守门人可能导致：', options: ['样本偏差与视角单一', '效率低', '成本高', '无影响'], answer: 0, explain: '偏差。' },
          { stem: '建立关系的原则是：', options: ['互惠、尊重、透明', '送礼', '隐瞒', '快速'], answer: 0, explain: '伦理。' }
        ],
        doc: {
          lead: '这一章讲关系。',
          sections: [
            { id: 'gatekeeper', title: '守门人', html: `<p>提供准入与介绍，也可能筛选与限制。</p>` },
            { id: 'reciprocity', title: '互惠', html: `<p>回馈时间与信息；避免过度承诺。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '参与观察实务',
        brief: '看什么、记什么、怎么待。',
        q: [
          { stem: '田野中"悬置判断"指：', options: ['先理解再评价', '不做判断', '随意判断', '只听不记'], answer: 0, explain: '悬置。' },
          { stem: '观察的焦点应包括：', options: ['空间、时间、人物、互动、语言', '只有人物', '只有语言', '只有空间'], answer: 0, explain: '多维度。' },
          { stem: '长时间待在现场的价值是：', options: ['看到常规与例外', '显得勤奋', '获得补贴', '避免访谈'], answer: 0, explain: '常规化。' }
        ],
        doc: {
          lead: '这一章讲现场。',
          sections: [
            { id: 'focus', title: '观察维度', html: `<p>场景、人物、事件、对话、情绪、沉默。</p>` },
            { id: 'stay', title: '在场', html: `<p>从"新鲜"到"习以为常"，才能看见日常规则。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '深度访谈实务',
        brief: '问出经验，而不是观点。',
        q: [
          { stem: '"能讲一次具体的经历吗"属于：', options: ['行为性问题', '观点性问题', '封闭问题', '诱导问题'], answer: 0, explain: '经验。' },
          { stem: '访谈记录应当：', options: ['录音 + 现场笔记 + 当天整理', '只靠记忆', '只录音', '只写结论'], answer: 0, explain: '多源。' },
          { stem: '遇到敏感话题应当：', options: ['尊重拒绝、说明用途', '追问到底', '偷偷录音', '公开'], answer: 0, explain: '伦理。' }
        ],
        doc: {
          lead: '这一章讲访谈。',
          sections: [
            { id: 'ask', title: '问法', html: `<p>问经历、问细节、问"然后呢"；少问"你怎么看"。</p>` },
            { id: 'record', title: '记录', html: `<p>录音需同意；笔记记关键词与场景；当天补全。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '田野笔记',
        brief: '把现场变成可分析的文本。',
        q: [
          { stem: '田野笔记的理想结构是：', options: ['描述、对话、反思分栏', '只写描述', '只写反思', '只写结论'], answer: 0, explain: '三分。' },
          { stem: '"厚描"要求记录：', options: ['情境与意义，而非仅事件', '统计数据', '只记时间', '只记人名'], answer: 0, explain: '意义。' },
          { stem: '笔记应多久整理一次？', options: ['当天', '一周后', '研究结束', '不整理'], answer: 0, explain: '当天。' }
        ],
        doc: {
          lead: '这一章讲笔记。',
          sections: [
            { id: 'structure', title: '结构', html: `<p>事实描述 / 直接引语 / 研究者反思 三栏。</p>` },
            { id: 'habit', title: '习惯', html: `<p>当天补全、标注时间地点、保留原始语言。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '反身性',
        brief: '研究者也是研究工具。',
        q: [
          { stem: '反身性要求研究者：', options: ['反思自身位置对研究的影响', '保持完全客观', '不写自己', '只记录他人'], answer: 0, explain: '反思。' },
          { stem: '"局内人/局外人"身份影响：', options: ['理解深度与信任程度', '样本量', '预算', '统计'], answer: 0, explain: '视角。' },
          { stem: '情绪反应在田野中：', options: ['是资料的一部分，应记录', '必须压抑', '无关', '应删除'], answer: 0, explain: '资料。' }
        ],
        doc: {
          lead: '这一章讲自我。',
          sections: [
            { id: 'position', title: '位置', html: `<p>年龄、性别、身份、机构背景都会影响互动。</p>` },
            { id: 'memo', title: '备忘录', html: `<p>记录困惑、情绪、假设变化——分析的材料。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '田野伦理',
        brief: '不伤害、知情、保密、互惠。',
        q: [
          { stem: '隐蔽观察的伦理问题是：', options: ['未获知情同意', '太累', '成本高', '数据少'], answer: 0, explain: '同意。' },
          { stem: '匿名化要防止：', options: ['通过细节被识别', '名字出现', '引用', '录音'], answer: 0, explain: '可识别性。' },
          { stem: '研究结果发表前应：', options: ['考虑对社区的影响', '直接发表', '不告知', '只给资助方'], answer: 0, explain: '影响评估。' }
        ],
        doc: {
          lead: '这一章讲伦理。',
          sections: [
            { id: 'principle', title: '四原则', html: `<p>知情同意、不伤害、匿名保密、互惠回馈。</p>` },
            { id: 'risk', title: '风险', html: `<p>敏感议题、权力关系、可识别性；必要时延迟发表。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '资料整理',
        brief: '转录、编号、建库。',
        q: [
          { stem: '转录应当：', options: ['逐字并标注停顿语气', '只记大意', '不转录', '机器翻译'], answer: 0, explain: '逐字。' },
          { stem: '资料编号的作用是：', options: ['可追溯与保密', '美观', '凑数', '统计'], answer: 0, explain: '追溯。' },
          { stem: '资料库应包含：', options: ['音频、转录、笔记、备忘录', '只有转录', '只有笔记', '只有结论'], answer: 0, explain: '多源。' }
        ],
        doc: {
          lead: '这一章讲整理。',
          sections: [
            { id: 'transcribe', title: '转录', html: `<p>逐字稿 + 时间戳；标注非语言信息。</p>` },
            { id: 'archive', title: '归档', html: `<p>统一编号、加密存储、访问权限。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '离开田野',
        brief: '退出也是关系的一部分。',
        q: [
          { stem: '离开田野应当：', options: ['提前告知并说明后续联系', '悄悄走', '删除资料', '不回复'], answer: 0, explain: '尊重。' },
          { stem: '"过度融入"的风险是：', options: ['失去分析距离（going native）', '数据太多', '成本高', '时间久'], answer: 0, explain: 'native。' },
          { stem: '回访的意义是：', options: ['检验解读与追踪变化', '增加样本', '凑时长', '礼节'], answer: 0, explain: '追踪。' }
        ],
        doc: {
          lead: '这一章讲退出。',
          sections: [
            { id: 'exit', title: '退出', html: `<p>告知、致谢、留下联系方式；处理未完成的承诺。</p>` },
            { id: 'return', title: '回访', html: `<p>成员检验与纵向追踪。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '田野与理论',
        brief: '不是"收集故事"，是回答问题。',
        q: [
          { stem: '田野资料与理论的关系是：', options: ['相互对话（理论敏感 + 数据驱动）', '理论先行唯一', '不要理论', '只做描述'], answer: 0, explain: '对话。' },
          { stem: '"理论饱和"意味着：', options: ['新资料不再挑战/补充理论', '资料够多', '时间到', '预算用完'], answer: 0, explain: '饱和。' },
          { stem: '意外发现应当：', options: ['记录并追踪，可能成为核心发现', '忽略', '删除', '改写'], answer: 0, explain: '意外。' }
        ],
        doc: {
          lead: '这一章讲理论。',
          sections: [
            { id: 'dialogue', title: '对话', html: `<p>带着理论敏感进入，但不被理论绑架。</p>` },
            { id: 'surprise', title: '意外', html: `<p>反常案例最有价值；记录并追访。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '多点田野',
        brief: '在多个地点之间比较。',
        q: [
          { stem: '多点田野的价值是：', options: ['比较与追踪跨地联系', '省时间', '成本低', '样本大'], answer: 0, explain: '比较。' },
          { stem: '多点研究的设计关键是：', options: ['选点逻辑与可比性', '数量多', '距离近', '语言同'], answer: 0, explain: '选点。' },
          { stem: '数字田野的伦理重点是：', options: ['公开/私密边界与知情', '网速', '设备', '平台选择'], answer: 0, explain: '边界。' }
        ],
        doc: {
          lead: '这一章讲扩展。',
          sections: [
            { id: 'design', title: '设计', html: `<p>跟随对象、跟随问题、跟随制度；说明选点理由。</p>` },
            { id: 'digital', title: '数字田野', html: `<p>公开内容的引用界限、匿名化难度、平台条款。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '复习',
        brief: '进入—在场—记录—退出，四段。',
        q: [
          { stem: '田野调查的四段是：', options: ['进入、在场、记录、退出', '设计、执行、分析、写作', '抽样、访谈、编码、报告', '观察、访谈、问卷、实验'], answer: 0, explain: '四段。' },
          { stem: '最容易被忽视的是：', options: ['伦理与反身性', '笔记', '访谈', '选址'], answer: 0, explain: '反思。' },
          { stem: '田野报告的可信度靠：', options: ['厚描与三角验证', '篇幅', '引用', '照片'], answer: 0, explain: '证据。' }
        ],
        doc: {
          lead: '这一章收成四段。',
          sections: [
            { id: 'four', title: '四段', html: `<ol><li>进入：守门人与许可</li><li>在场：观察与访谈</li><li>记录：笔记与转录</li><li>退出：伦理与回访</li></ol>` },
            { id: 'tip', title: '提示', html: `<p>田野的功夫在笔记里，不在嘴上。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      }
    ]
  },

  /* ---------- 10 毕业论文：3 → 8 ---------- */
  {
    chapters: [
      {
        title: '选题与文献',
        brief: '小切口、真问题、有文献。',
        q: [
          { stem: '本科论文选题最合适的是：', options: ['小而具体、可完成', '宏大理论', '流行话题', '导师方向唯一'], answer: 0, explain: '可行。' },
          { stem: '文献综述的作用是：', options: ['定位研究缺口', '凑字数', '展示阅读量', '替代研究'], answer: 0, explain: '缺口。' },
          { stem: '研究问题应当：', options: ['明确、可回答、有价值', '模糊', '宏大', '追热点'], answer: 0, explain: '三标准。' }
        ],
        doc: {
          lead: '这一章讲起点。',
          sections: [
            { id: 'topic', title: '选题', html: `<p>从课程、实习、社会现象中找；一个小问题做深。</p>` },
            { id: 'review', title: '文献', html: `<p>按主题而非时间组织；指出已有研究的不足。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '研究设计',
        brief: '方法与数据的匹配。',
        q: [
          { stem: '研究设计要说明：', options: ['对象、方法、数据、分析策略', '只写方法名', '只写样本', '只写结论'], answer: 0, explain: '四要素。' },
          { stem: '定量与定性的选择取决于：', options: ['研究问题', '导师偏好', '数据可得', '流行'], answer: 0, explain: '问题导向。' },
          { stem: '伦理审查在何时需要？', options: ['涉及人体/敏感数据时', '所有论文', '只有博士', '不需要'], answer: 0, explain: '按需。' }
        ],
        doc: {
          lead: '这一章讲设计。',
          sections: [
            { id: 'elements', title: '四要素', html: `<p>研究对象、方法、数据来源、分析策略。</p>` },
            { id: 'feasible', title: '可行', html: `<p>时间、渠道、能力；宁小勿大。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '数据收集',
        brief: '执行与质量控制。',
        q: [
          { stem: '预调查的作用是：', options: ['检验工具与流程', '凑样本', '提高回收率', '增加预算'], answer: 0, explain: '试测。' },
          { stem: '数据收集中应记录：', options: ['时间、地点、执行人、异常', '只有结果', '只有样本量', '只有结论'], answer: 0, explain: '过程。' },
          { stem: '回收率低时应当：', options: ['分析原因并说明局限', '伪造数据', '忽略', '改结论'], answer: 0, explain: '诚实。' }
        ],
        doc: {
          lead: '这一章讲执行。',
          sections: [
            { id: 'process', title: '过程', html: `<p>培训、预调查、过程记录、异常处理。</p>` },
            { id: 'quality', title: '质量', html: `<p>逻辑校验、抽查回访、数据留痕。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '论文写作',
        brief: '结构、论证、规范。',
        q: [
          { stem: '论文的核心是：', options: ['回答研究问题并提供证据', '篇幅', '引用数量', '格式'], answer: 0, explain: '论证。' },
          { stem: '引用规范的意义是：', options: ['尊重他人成果、可追溯', '凑数', '装饰', '避免查重'], answer: 0, explain: '规范。' },
          { stem: '结论部分应当：', options: ['回应问题、说明局限', '重复摘要', '引出新问题唯一', '写感想'], answer: 0, explain: '收束。' }
        ],
        doc: {
          lead: '这一章讲写作。',
          sections: [
            { id: 'structure', title: '结构', html: `<p>引言、文献、方法、结果、讨论、结论、参考。</p>` },
            { id: 'style', title: '表达', html: `<p>一段一个论点；数据说话；避免形容词堆砌。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '答辩',
        brief: '讲清问题、方法、发现。',
        q: [
          { stem: '答辩陈述的三段是：', options: ['问题、方法、发现', '背景、致谢、总结', '文献、数据、结论', '理论、模型、应用'], answer: 0, explain: '三段。' },
          { stem: '被问到"你的创新点"时，最好的回答是：', options: ['具体说明与已有研究的不同', '说没有', '说很多', '回避'], answer: 0, explain: '具体。' },
          { stem: '答辩前最该准备的是：', options: ['熟悉数据与每一个结论的依据', '背稿', 'PPT 模板', '服装'], answer: 0, explain: '依据。' }
        ],
        doc: {
          lead: '这一章讲答辩。',
          sections: [
            { id: 'talk', title: '陈述', html: `<p>8–10 分钟：问题、方法、发现、局限。</p>` },
            { id: 'qa', title: '问答', html: `<p>不会就说不确定，并说明如何验证。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      }
    ]
  },

  /* ---------- 11 社会调查实习：3 → 8 ---------- */
  {
    chapters: [
      {
        title: '项目设计',
        brief: '从委托到方案。',
        q: [
          { stem: '调查项目设计的第一步是：', options: ['明确委托方需求与决策用途', '设计问卷', '抽样', '写报告'], answer: 0, explain: '需求。' },
          { stem: '方案应包含：', options: ['目标、对象、方法、进度、预算', '只有问卷', '只有样本', '只有时间'], answer: 0, explain: '要素。' },
          { stem: '与研究论文相比，委托调查更强调：', options: ['实用性与时效', '理论创新', '长篇论述', '文献综述'], answer: 0, explain: '实用。' }
        ],
        doc: {
          lead: '这一章讲方案。',
          sections: [
            { id: 'needs', title: '需求', html: `<p>问清"结果要用来做什么"，决定指标与精度。</p>` },
            { id: 'plan', title: '方案', html: `<p>目标、抽样、工具、进度、预算、交付物。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '执行与质控',
        brief: '访员培训、过程管理。',
        q: [
          { stem: '访员培训的重点是：', options: ['问卷理解、追问技巧、伦理', '打扮', '速度', '话术'], answer: 0, explain: '规范。' },
          { stem: '质控手段包括：', options: ['陪访、录音抽查、逻辑校验、回访', '只看数量', '只看时间', '只看成本'], answer: 0, explain: '多重。' },
          { stem: '拒访率过高时应：', options: ['分析原因并说明代表性局限', '忽略', '伪造', '换样本不说明'], answer: 0, explain: '诚实。' }
        ],
        doc: {
          lead: '这一章讲执行。',
          sections: [
            { id: 'training', title: '培训', html: `<p>统一口径、模拟演练、伦理与安全。</p>` },
            { id: 'qc', title: '质控', html: `<p>陪访、抽查、逻辑校验、回访；进度日报。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '数据分析',
        brief: '从清理到出表。',
        q: [
          { stem: '分析前的第一步是：', options: ['数据清洗与核查', '跑回归', '画图', '写结论'], answer: 0, explain: '清洗。' },
          { stem: '交叉表适合：', options: ['两个定类变量的关系', '连续变量', '时间序列', '回归'], answer: 0, explain: '列联表。' },
          { stem: '报告中应说明：', options: ['样本结构、方法与局限', '只有结论', '只有图表', '只有建议'], answer: 0, explain: '透明。' }
        ],
        doc: {
          lead: '这一章讲分析。',
          sections: [
            { id: 'clean', title: '清洗', html: `<p>缺失、异常、逻辑矛盾、权重。</p>` },
            { id: 'report', title: '呈现', html: `<p>一图一结论；标注样本量与显著性。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '报告撰写',
        brief: '给决策者看的报告。',
        q: [
          { stem: '调查报告的摘要应当：', options: ['一页写清主要发现与建议', '长篇', '只有背景', '只有数据'], answer: 0, explain: '结论先行。' },
          { stem: '建议部分应当：', options: ['基于发现、可执行', '空泛', '越多越好', '与数据无关'], answer: 0, explain: '可执行。' },
          { stem: '技术附录的作用是：', options: ['放问卷、方法细节，便于核查', '凑页数', '装饰', '替代正文'], answer: 0, explain: '可核查。' }
        ],
        doc: {
          lead: '这一章讲交付。',
          sections: [
            { id: 'structure', title: '结构', html: `<p>摘要（发现+建议）、背景、方法、结果、建议、附录。</p>` },
            { id: 'style', title: '表达', html: `<p>结论先行、图表简洁、避免术语堆砌。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '实习复盘',
        brief: '把项目变成能力。',
        q: [
          { stem: '实习复盘最有价值的写法是：', options: ['问题—做法—结果—反思', '流水账', '感想', '考勤'], answer: 0, explain: '结构化。' },
          { stem: '实习应留下：', options: ['作品与数据（脱敏）', '只有证明', '只有照片', '没有'], answer: 0, explain: '作品。' },
          { stem: '面试讲项目的最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
        ],
        doc: {
          lead: '这一章讲收尾。',
          sections: [
            { id: 'review', title: '复盘', html: `<p>每周五行；项目结束写一页总结。</p>` },
            { id: 'keep', title: '留存', html: `<p>问卷、代码、报告（脱敏）；记录自己的贡献。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      }
    ]
  },

  /* ---------- 12 考研与求职：3 → 8 ---------- */
  {
    chapters: [
      {
        title: '考研方向与复习',
        brief: '社会学、社会工作、人口学。',
        q: [
          { stem: '社会学考研的专业课通常包括：', options: ['社会学理论 + 研究方法', '只有统计', '只有理论', '只有英语'], answer: 0, explain: '两门。' },
          { stem: '理论复习的主线是：', options: ['三大家 → 现代流派 → 当代议题', '只背人名', '只看真题', '只读教材'], answer: 0, explain: '脉络。' },
          { stem: '方法课复习重点是：', options: ['设计、抽样、测量与统计', '只有公式', '只有软件', '只有伦理'], answer: 0, explain: '全流程。' }
        ],
        doc: {
          lead: '这一章讲备考。',
          sections: [
            { id: 'subjects', title: '科目', html: `<p>社会学理论、社会研究方法（含统计）、英语、政治。</p>` },
            { id: 'plan', title: '节奏', html: `<p>3–6 月基础，7–8 月真题，9–10 月强化，11–12 月模拟。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '公共课',
        brief: '英语与政治不能拖后腿。',
        q: [
          { stem: '英语复习最有效的是：', options: ['真题精读 + 长难句', '只背单词', '只看视频', '只做模拟'], answer: 0, explain: '真题。' },
          { stem: '政治选择题的重要性：', options: ['拉分主力', '不重要', '只背大题', '不用复习'], answer: 0, explain: '选择题。' },
          { stem: '作文准备的有效方式是：', options: ['形成个人模板并修改', '背范文', '临场发挥', '抄材料'], answer: 0, explain: '模板。' }
        ],
        doc: {
          lead: '这一章讲公共课。',
          sections: [
            { id: 'english', title: '英语', html: `<p>真题三遍、长难句、作文模板。</p>` },
            { id: 'politics', title: '政治', html: `<p>选择题 + 时政 + 大题框架。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '求职方向',
        brief: '调研、公益、人力、公务员。',
        q: [
          { stem: '社会学毕业生常见去向不包括：', options: ['用户研究', '公益组织', '公务员', '外科医生'], answer: 3, explain: '专业限制。' },
          { stem: '用户研究岗位看重：', options: ['访谈与洞察能力', '编程', '设计', '财务'], answer: 0, explain: '调研。' },
          { stem: '公益组织的核心能力是：', options: ['项目管理与动员', '销售', '审计', '编程'], answer: 0, explain: '项目。' }
        ],
        doc: {
          lead: '这一章讲就业。',
          sections: [
            { id: 'paths', title: '四条', html: `<ul><li>用户研究/市场调研</li><li>公益与社会组织</li><li>公务员与事业单位</li><li>人力资源与运营</li></ul>` },
            { id: 'skill', title: '能力', html: `<p>访谈、问卷、数据分析、报告写作。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '面试',
        brief: '用项目证明能力。',
        q: [
          { stem: '面试讲项目的最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲方法'], answer: 0, explain: 'STAR。' },
          { stem: '被问"你的研究有什么价值"时，应回答：', options: ['说明发现与启示', '说很学术', '说没价值', '回避'], answer: 0, explain: '具体。' },
          { stem: '涉及受访者信息时应：', options: ['脱敏处理', '全部公开', '随意改编', '不说明'], answer: 0, explain: '保密。' }
        ],
        doc: {
          lead: '这一章讲面试。',
          sections: [
            { id: 'star', title: 'STAR', html: `<p>情境、任务、行动、结果；准备三个故事。</p>` },
            { id: 'ethic', title: '伦理', html: `<p>不泄露受访者隐私；数据脱敏。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '作品集',
        brief: '调研报告 + 数据 + 反思。',
        q: [
          { stem: '社会学作品集最核心的是：', options: ['一份完整调研报告', '成绩单', '证书', '自荐信'], answer: 0, explain: '硬作品。' },
          { stem: '作品集应说明：', options: ['问题、方法、发现、你的贡献', '只有结论', '只有图表', '只有工具'], answer: 0, explain: '贡献。' },
          { stem: '引用他人数据应：', options: ['注明来源', '不标注', '改一改', '随意使用'], answer: 0, explain: '规范。' }
        ],
        doc: {
          lead: '这一章讲材料。',
          sections: [
            { id: 'kit', title: '三件套', html: `<p>调研报告、数据表、方法反思（脱敏）。</p>` },
            { id: 'tell', title: '讲法', html: `<p>2 分钟：问题、方法、发现、价值。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      }
    ]
  }
]);
