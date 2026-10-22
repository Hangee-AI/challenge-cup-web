/* ==========================================================
   sociology-courses-more.js · 社会学（上）：前 5 门主干补到 15 章
   ========================================================== */

appendChapters('law-社会学', [
  /* ---------- 1 社会学概论 ---------- */
  {
    chapters: [
      {
        title: '社会学的想象力',
        brief: '把个人困扰转成公共议题。',
        q: [
          { stem: '米尔斯"社会学想象力"强调：', options: ['个人努力', '把个人处境与历史结构联系起来', '统计技术', '心理分析'], answer: 1, explain: '结构视角。' },
          { stem: '"个人困扰"与"公共议题"的区别是：', options: ['是否超出个人可控范围、涉及制度', '是否严重', '是否普遍', '是否可解决'], answer: 0, explain: '结构层次。' },
          { stem: '社会学想象力要求我们：', options: ['把"我找不到工作"看成劳动力市场问题', '只怪自己', '只怪社会', '不思考'], answer: 0, explain: '双向理解。' }
        ],
        doc: {
          lead: '这一章建立学科视角。',
          sections: [
            { id: 'imagination', title: '三种提问', html: `<p>这个社会的结构是什么？它在历史中处于什么位置？什么样的人在其中占主导？</p>` },
            { id: 'use', title: '用法', html: `<p>任何个人困境都问：有多少人同样？制度如何塑造？</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '社会事实',
        brief: '涂尔干：外在于个人、有约束力的行为方式。',
        q: [
          { stem: '社会事实的特征是：', options: ['外在性、普遍性、约束性', '主观性', '个体性', '偶然性'], answer: 0, explain: '三特征。' },
          { stem: '用社会事实解释社会事实，反对：', options: ['心理还原论', '结构分析', '比较研究', '统计分析'], answer: 0, explain: '方法论。' },
          { stem: '自杀率研究属于：', options: ['实证社会学经典', '解释社会学', '现象学', '后现代'], answer: 0, explain: '涂尔干。' }
        ],
        doc: {
          lead: '这一章讲方法论起点。',
          sections: [
            { id: 'define', title: '定义', html: `<p>外在于个体、对个体有约束力的集体行为方式与思维方式。</p>` },
            { id: 'rule', title: '规则', html: `<p>把社会事实当作物来研究；用社会事实解释社会事实。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '社会结构',
        brief: '位置、关系与资源：看不见的骨架。',
        q: [
          { stem: '社会结构主要指：', options: ['地位、角色、制度与资源分布', '建筑', '人口数量', '地理'], answer: 0, explain: '关系结构。' },
          { stem: '结构与能动的关系，主流看法是：', options: ['相互构成（结构塑造人，人也再生产结构）', '结构决定一切', '能动决定一切', '互不相关'], answer: 0, explain: '吉登斯结构化理论。' },
          { stem: '制度的作用是：', options: ['提供稳定预期与行为规范', '增加成本', '消除差异', '替代文化'], answer: 0, explain: '降低不确定性。' }
        ],
        doc: {
          lead: '这一章讲结构。',
          sections: [
            { id: 'elements', title: '要素', html: `<p>地位与角色、群体与组织、制度、资源分配。</p>` },
            { id: 'agency', title: '能动', html: `<p>结构不是铁板：人在实践中再生产或改变结构。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '社会分层与流动',
        brief: '阶级、地位、权力：资源如何分布。',
        q: [
          { stem: '韦伯的分层三维度是：', options: ['阶级、地位、权力', '收入、教育、职业', '年龄、性别、民族', '城市、农村、流动'], answer: 0, explain: '三维。' },
          { stem: '代际流动指：', options: ['子代相对父代的地位变化', '一生内的变化', '人口迁移', '职业转换'], answer: 0, explain: '代际。' },
          { stem: '基尼系数衡量：', options: ['收入不平等', '贫困', '流动', '教育'], answer: 0, explain: '不平等。' }
        ],
        doc: {
          lead: '这一章讲分层。',
          sections: [
            { id: 'dims', title: '三维', html: `<p>阶级（经济）、地位（声望）、权力（组织）。</p>` },
            { id: 'mobility', title: '流动', html: `<p>代内/代际、向上/向下；流动率反映机会结构。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '文化与规范',
        brief: '共享的意义系统：价值、规范、符号。',
        q: [
          { stem: '文化中"规范"指的是：', options: ['行为的共享期望与规则', '价值观', '物质产品', '语言'], answer: 0, explain: '行为准则。' },
          { stem: '文化相对主义主张：', options: ['应从文化内部理解其习俗', '所有文化相同', '以本文化为标准', '文化无差别'], answer: 0, explain: '相对主义。' },
          { stem: '文化资本（布迪厄）包括：', options: ['语言、品味、学历等', '金钱', '土地', '设备'], answer: 0, explain: '文化资源。' }
        ],
        doc: {
          lead: '这一章讲文化。',
          sections: [
            { id: 'elements', title: '要素', html: `<p>符号、语言、价值观、规范、物质文化。</p>` },
            { id: 'capital', title: '资本', html: `<p>文化资本影响教育获得与社会再生产。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '社会化',
        brief: '从生物人到社会人。',
        q: [
          { stem: '初级社会化的主要场所是：', options: ['家庭', '学校', '职场', '媒体'], answer: 0, explain: '早期。' },
          { stem: '再社会化指的是：', options: ['进入新环境后学习新规范', '婴儿期学习', '学校教育', '同辈影响'], answer: 0, explain: '再学习。' },
          { stem: '"镜中我"的提出者是：', options: ['库利', '米德', '戈夫曼', '布鲁默'], answer: 0, explain: '库利。' }
        ],
        doc: {
          lead: '这一章讲学习做社会人。',
          sections: [
            { id: 'stages', title: '阶段', html: `<p>初级（家庭）、次级（学校/同辈）、再社会化（新环境）。</p>` },
            { id: 'theories', title: '理论', html: `<p>库利镜中我、米德主我与客我、弗洛伊德超我。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '角色与互动',
        brief: '角色期待、角色冲突、印象管理。',
        q: [
          { stem: '角色冲突指的是：', options: ['不同角色期待相互矛盾', '角色扮演失败', '没有角色', '角色单一'], answer: 0, explain: '多重角色。' },
          { stem: '戈夫曼的"拟剧论"把社会互动看作：', options: ['前台表演与后台准备', '纯理性交换', '无意义', '生物反应'], answer: 0, explain: '戏剧类比。' },
          { stem: '符号互动论强调：', options: ['意义在互动中生成', '结构决定行为', '经济决定一切', '文化不变'], answer: 0, explain: '互动。' }
        ],
        doc: {
          lead: '这一章讲日常互动。',
          sections: [
            { id: 'role', title: '角色', html: `<p>期待、冲突、紧张；角色距离。</p>` },
            { id: 'dramaturgy', title: '拟剧', html: `<p>印象管理：前台/后台、面子功夫。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '群体与组织',
        brief: '初级群体、次级群体、组织。',
        q: [
          { stem: '初级群体的特征是：', options: ['面对面、情感性、持久', '正式、任务导向', '大规模', '临时'], answer: 0, explain: '库利。' },
          { stem: '参照群体指的是：', options: ['个体用来比较与模仿的群体', '所属群体', '工作单位', '统计数据'], answer: 0, explain: '比较标准。' },
          { stem: '科层制的副作用是：', options: ['形式主义与目标置换', '效率低', '无分工', '无法问责'], answer: 0, explain: '默顿。' }
        ],
        doc: {
          lead: '这一章讲群体的层次。',
          sections: [
            { id: 'types', title: '类型', html: `<p>初级/次级、内群体/外群体、参照群体。</p>` },
            { id: 'org', title: '组织', html: `<p>科层制与反功能；非正式结构。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '制度',
        brief: '家庭、教育、经济、政治、宗教：社会的基本装置。',
        q: [
          { stem: '制度的核心功能是：', options: ['满足社会基本需要并稳定预期', '增加成本', '消灭差异', '替代文化'], answer: 0, explain: '功能。' },
          { stem: '家庭制度的变化趋势包括：', options: ['规模缩小、形式多样', '规模扩大', '形式单一', '消失'], answer: 0, explain: '现代化。' },
          { stem: '教育制度的社会功能不包括：', options: ['社会化', '筛选与分配', '文化传递', '消除所有不平等'], answer: 3, explain: '不能消除。' }
        ],
        doc: {
          lead: '这一章讲制度。',
          sections: [
            { id: 'five', title: '五大制度', html: `<p>家庭、教育、经济、政治、宗教；各有功能与冲突面。</p>` },
            { id: 'change', title: '变迁', html: `<p>现代化、城市化、信息化重塑制度形态。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '社会变迁',
        brief: '从传统到现代：动力与代价。',
        q: [
          { stem: '现代化理论的关键变量是：', options: ['工业化、城市化、理性化', '人口', '地理', '宗教唯一'], answer: 0, explain: '三化。' },
          { stem: '依附理论批评现代化理论：', options: ['忽视中心—边缘结构', '太复杂', '太激进', '不科学'], answer: 0, explain: '全球结构。' },
          { stem: '社会变迁的常见动力不包括：', options: ['技术', '人口', '观念', '不变的习俗'], answer: 3, explain: '习俗也会变。' }
        ],
        doc: {
          lead: '这一章讲变迁。',
          sections: [
            { id: 'theories', title: '三种理论', html: `<p>现代化、依附、世界体系；各有解释力与局限。</p>` },
            { id: 'china', title: '中国经验', html: `<p>压缩式现代化：工业化、城市化、数字化叠加。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '社会问题',
        brief: '什么被定义为"问题"，本身就是社会过程。',
        q: [
          { stem: '社会问题的建构论强调：', options: ['问题被界定与放大的过程', '问题客观存在唯一', '无需研究', '只靠统计'], answer: 0, explain: '建构。' },
          { stem: '越轨行为的"标签理论"认为：', options: ['越轨源于被贴上标签的过程', '天生犯罪', '经济决定', '无原因'], answer: 0, explain: '标签。' },
          { stem: '研究社会问题应避免：', options: ['把个体污名化', '结构分析', '历史比较', '数据'], answer: 0, explain: '去污名。' }
        ],
        doc: {
          lead: '这一章讲问题化。',
          sections: [
            { id: 'define', title: '两种视角', html: `<p>客观主义（可测量）与建构主义（话语与动员）。</p>` },
            { id: 'avoid', title: '警惕', html: `<p>避免"受害者有罪论"与数据误用。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '复习',
        brief: '概念—结构—变迁—问题，四块。',
        q: [
          { stem: '社会学概论的四大块是：', options: ['概念、结构、变迁、问题', '方法、统计、理论、应用', '家庭、教育、经济、政治', '城市、农村、人口、环境'], answer: 0, explain: '四块。' },
          { stem: '最常考的理论家是：', options: ['马克思、涂尔干、韦伯', '牛顿、爱因斯坦', '柏拉图、康德', '斯密、凯恩斯'], answer: 0, explain: '三大家。' },
          { stem: '复习最有效的方式是：', options: ['按"概念—理论—例证"整理', '背名词', '只看真题', '只读教材'], answer: 0, explain: '结构化。' }
        ],
        doc: {
          lead: '这一章收成框架。',
          sections: [
            { id: 'map', title: '框架', html: `<p>是什么（概念）→ 怎么组织（结构）→ 怎么变（变迁）→ 有什么问题。</p>` },
            { id: 'tip', title: '提示', html: `<p>论述题用"概念 + 理论 + 中国经验"三层。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      }
    ]
  },

  /* ---------- 2 社会研究方法 ---------- */
  {
    chapters: [
      {
        title: '研究设计',
        brief: '从问题到方案：可检验、可执行。',
        q: [
          { stem: '好研究问题的标准不包括：', options: ['可回答', '有价值', '可行', '宏大抽象'], answer: 3, explain: '具体。' },
          { stem: '横截面与纵贯研究的区别是：', options: ['是否跨时间', '样本大小', '是否定量', '是否随机'], answer: 0, explain: '时间维度。' },
          { stem: '因果推断三条件是：', options: ['相关、时序、排除混淆', '大样本、显著、可信', '随机、双盲、对照', '问卷、访谈、观察'], answer: 0, explain: '因果。' }
        ],
        doc: {
          lead: '这一章讲设计。',
          sections: [
            { id: 'question', title: '问题', html: `<p>明确对象、变量、机制与可观察预期。</p>` },
            { id: 'design', title: '设计', html: `<p>横截面/纵贯；实验/观察；定量/定性/混合。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '抽样',
        brief: '概率与非概率：能否推断。',
        q: [
          { stem: '概率抽样的核心是：', options: ['每个个体有已知入选概率', '样本大', '成本低', '问卷短'], answer: 0, explain: '可推断。' },
          { stem: '分层抽样的优势是：', options: ['提高精度、保证子群代表性', '省事', '样本大', '无需抽样框'], answer: 0, explain: '分层。' },
          { stem: '滚雪球抽样适用于：', options: ['难以接触的群体', '大样本调查', '随机抽样', '实验'], answer: 0, explain: '隐蔽群体。' }
        ],
        doc: {
          lead: '这一章讲抽样。',
          sections: [
            { id: 'prob', title: '概率', html: `<p>简单随机、系统、分层、整群、多阶段。</p>` },
            { id: 'nonprob', title: '非概率', html: `<p>方便、配额、滚雪球、判断；只能描述，不能推断。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '测量与操作化',
        brief: '把概念变成指标。',
        q: [
          { stem: '操作化指的是：', options: ['把抽象概念转化为可测量指标', '写报告', '抽样', '统计'], answer: 0, explain: '概念→指标。' },
          { stem: '信度与效度的关系是：', options: ['信度是效度的必要非充分条件', '等价', '互斥', '无关'], answer: 0, explain: '必要非充分。' },
          { stem: '提高效度的方法不包括：', options: ['多指标测量', '三角验证', '预调查修订', '随意改数据'], answer: 3, explain: '造假。' }
        ],
        doc: {
          lead: '这一章讲测量。',
          sections: [
            { id: 'levels', title: '四个层次', html: `<p>定类、定序、定距、定比；决定可用统计方法。</p>` },
            { id: 'quality', title: '质量', html: `<p>信度（稳定）与效度（测对）；三角验证。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '问卷设计',
        brief: '题干、选项、顺序都会影响答案。',
        q: [
          { stem: '双重问题（double-barreled）指：', options: ['一题问两件事', '两个答案', '两页问卷', '两次调查'], answer: 0, explain: '一题一事。' },
          { stem: '李克特量表的典型形式是：', options: ['五级/七级同意度', '是/否', '排序', '填空'], answer: 0, explain: '态度量表。' },
          { stem: '预调查（pilot）的作用是：', options: ['检验题目理解与长度', '凑样本', '提高回收率', '增加预算'], answer: 0, explain: '试测。' }
        ],
        doc: {
          lead: '这一章讲问卷。',
          sections: [
            { id: 'rules', title: '四规则', html: `<p>一题一事、中立措辞、选项互斥穷尽、先易后难。</p>` },
            { id: 'scale', title: '量表', html: `<p>李克特、语义差异；注意反向题与作答定势。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '访谈与观察',
        brief: '定性收集的两大手段。',
        q: [
          { stem: '半结构访谈的特点是：', options: ['有提纲可追问', '完全开放', '完全按问卷', '不需记录'], answer: 0, explain: '半结构。' },
          { stem: '参与观察的最大优势是：', options: ['获得局内视角', '样本大', '可推断', '成本低'], answer: 0, explain: '局内。' },
          { stem: '访谈中最好的追问是：', options: ['"能举个例子吗？"', '"你同意吗？"', '"为什么？"（反复）', '"你懂吧？"'], answer: 0, explain: '具体化。' }
        ],
        doc: {
          lead: '这一章讲定性工具。',
          sections: [
            { id: 'interview', title: '访谈', html: `<p>结构/半结构/无结构；追问、倾听、记录。</p>` },
            { id: 'observe', title: '观察', html: `<p>参与/非参与；观察提纲与记录格式。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '实验与准实验',
        brief: '因果识别的黄金标准。',
        q: [
          { stem: '随机分组的作用是：', options: ['平衡已知与未知混淆变量', '增加样本', '提高显著性', '减少成本'], answer: 0, explain: '随机化。' },
          { stem: '准实验的常见形式是：', options: ['非等组前后测', '随机对照', '双盲', '交叉'], answer: 0, explain: '准实验。' },
          { stem: '内部效度与外部效度的区别是：', options: ['因果推断的可靠 vs 结论的可推广', '样本大小', '统计方法', '时间'], answer: 0, explain: '两类效度。' }
        ],
        doc: {
          lead: '这一章讲实验。',
          sections: [
            { id: 'rct', title: '实验', html: `<p>随机分配、控制、前后测；内部效度高。</p>` },
            { id: 'quasi', title: '准实验', html: `<p>自然实验、断点、DID；需讨论选择偏差。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '效度与信度',
        brief: '研究质量的两把尺。',
        q: [
          { stem: '内部效度的威胁不包括：', options: ['成熟效应', '历史事件', '测量工具变化', '样本量大'], answer: 3, explain: '大样本不是威胁。' },
          { stem: '外部效度关注：', options: ['结论能否推广到其他人群情境', '测量是否稳定', '样本大小', '统计显著'], answer: 0, explain: '推广。' },
          { stem: '提高信度的方法包括：', options: ['标准化程序、多题项', '随意改题', '减少样本', '不培训访员'], answer: 0, explain: '标准化。' }
        ],
        doc: {
          lead: '这一章讲质量。',
          sections: [
            { id: 'validity', title: '效度', html: `<p>内部、外部、构念、统计结论效度。</p>` },
            { id: 'reliability', title: '信度', html: `<p>重测、复本、内部一致性；标准化与培训。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '研究伦理',
        brief: '知情同意、匿名、不伤害、诚实。',
        q: [
          { stem: '知情同意的核心是：', options: ['告知并自愿，可退出', '签字', '口头告知', '无需告知'], answer: 0, explain: '自愿。' },
          { stem: '研究数据造假属于：', options: ['学术不端', '误差', '创新', '可接受'], answer: 0, explain: '不端。' },
          { stem: '涉及未成年人的研究应：', options: ['取得监护人同意并严格保护', '自由研究', '公开数据', '无需审查'], answer: 0, explain: '更严格。' }
        ],
        doc: {
          lead: '这一章讲伦理。',
          sections: [
            { id: 'four', title: '四原则', html: `<p>知情同意、匿名保密、不伤害、诚实报告。</p>` },
            { id: 'irb', title: '审查', html: `<p>伦理审查、数据管理计划；敏感群体额外保护。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '数据处理',
        brief: '清洗、编码、建库。',
        q: [
          { stem: '数据清洗的第一步是：', options: ['检查缺失与逻辑错误', '跑回归', '画图', '写结论'], answer: 0, explain: '检查。' },
          { stem: '开放式问题需要：', options: ['编码归类', '直接统计', '删除', '随机赋值'], answer: 0, explain: '编码。' },
          { stem: '数据管理的最佳实践是：', options: ['版本控制、文档化、备份', '只存桌面', '只留最终版', '手改'], answer: 0, explain: '可追溯。' }
        ],
        doc: {
          lead: '这一章讲数据。',
          sections: [
            { id: 'clean', title: '清洗', html: `<p>缺失、异常、逻辑一致性、重复样本。</p>` },
            { id: 'doc', title: '文档', html: `<p>变量字典、编码表、版本记录。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '报告写作',
        brief: '问题—方法—发现—讨论。',
        q: [
          { stem: '方法部分应写清：', options: ['抽样、工具、执行与局限', '只写样本量', '只写方法名', '不写'], answer: 0, explain: '可复现。' },
          { stem: '结果与讨论的区别是：', options: ['陈述发现 vs 解释与比较', '没有区别', '前者更长', '后者只写数据'], answer: 0, explain: '两层。' },
          { stem: '结论不应：', options: ['超出数据支持范围', '回应问题', '说明局限', '提建议'], answer: 0, explain: '节制。' }
        ],
        doc: {
          lead: '这一章讲写作。',
          sections: [
            { id: 'structure', title: '结构', html: `<p>摘要、引言、文献、方法、结果、讨论、局限、参考。</p>` },
            { id: 'style', title: '表达', html: `<p>一图一结论；区分事实与解释。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '混合方法',
        brief: '定量与定性的组合。',
        q: [
          { stem: '混合方法的优势是：', options: ['互补验证、解释机制', '省钱', '更快', '更简单'], answer: 0, explain: '互补。' },
          { stem: '解释性序列设计指：', options: ['先定量后定性', '先定性后定量', '同时', '只用一种'], answer: 0, explain: '先量后质。' },
          { stem: '探索性序列设计适用于：', options: ['先定性探索再定量验证', '已有成熟量表', '只做实验', '只做问卷'], answer: 0, explain: '先质后量。' }
        ],
        doc: {
          lead: '这一章讲组合。',
          sections: [
            { id: 'types', title: '三种设计', html: `<p>解释性序列、探索性序列、聚敛并行。</p>` },
            { id: 'value', title: '价值', html: `<p>三角验证、补足机制、增强推广性。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '复习',
        brief: '设计—收集—分析—写作，一条链。',
        q: [
          { stem: '研究方法的主线是：', options: ['设计、收集、分析、写作', '抽样、问卷、统计、报告', '定性、定量、混合', '理论、方法、应用'], answer: 0, explain: '四步。' },
          { stem: '最容易失分的是：', options: ['方法细节写不清', '结论', '参考文献', '摘要'], answer: 0, explain: '可复现。' },
          { stem: '复习方法课最有效的是：', options: ['对照一篇真实论文拆解', '背定义', '只做真题', '只看教材'], answer: 0, explain: '案例。' }
        ],
        doc: {
          lead: '这一章收成链条。',
          sections: [
            { id: 'chain', title: '四步', html: `<p>设计 → 抽样与测量 → 收集 → 分析写作。</p>` },
            { id: 'tip', title: '提示', html: `<p>方法课考的是"能不能复现"，不是背名词。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      }
    ]
  },

  /* ---------- 3 社会统计学 ---------- */
  {
    chapters: [
      {
        title: '描述统计',
        brief: '集中趋势、离散程度、分布形状。',
        q: [
          { stem: '收入数据适合用什么描述中心？', options: ['中位数', '均值', '众数', '方差'], answer: 0, explain: '右偏。' },
          { stem: '标准差衡量：', options: ['离散程度', '集中趋势', '相关', '样本量'], answer: 0, explain: '波动。' },
          { stem: '右偏分布中：', options: ['均值 > 中位数', '均值 < 中位数', '相等', '无均值'], answer: 0, explain: '长尾在右。' }
        ],
        doc: {
          lead: '这一章讲描述。',
          sections: [
            { id: 'center', title: '中心', html: `<p>均值、中位数、众数；受异常值影响不同。</p>` },
            { id: 'spread', title: '离散', html: `<p>极差、四分位距、标准差、变异系数。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '概率与分布',
        brief: '随机性的语言。',
        q: [
          { stem: '正态分布的 95% 数据落在：', options: ['±2σ', '±1σ', '±3σ', '±0.5σ'], answer: 0, explain: '经验法则。' },
          { stem: '二项分布适用于：', options: ['n 次独立试验的成功次数', '连续变量', '时间间隔', '比例'], answer: 0, explain: '成功次数。' },
          { stem: '中心极限定理说明：', options: ['样本均值近似正态（大样本）', '总体正态', '方差为零', '相关为零'], answer: 0, explain: 'CLT。' }
        ],
        doc: {
          lead: '这一章讲分布。',
          sections: [
            { id: 'dist', title: '常见分布', html: `<p>正态、二项、泊松、卡方、t、F。</p>` },
            { id: 'clt', title: 'CLT', html: `<p>大样本下样本均值渐近正态，是推断的基础。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '抽样分布',
        brief: '统计量的分布：推断的桥梁。',
        q: [
          { stem: '标准误随样本量增大而：', options: ['减小', '增大', '不变', '先增后减'], answer: 0, explain: 'σ/√n。' },
          { stem: 't 分布与正态分布的区别是：', options: ['尾部更厚（小样本）', '完全相同', '更窄', '无均值'], answer: 0, explain: '厚尾。' },
          { stem: '抽样分布描述的是：', options: ['统计量在重复抽样中的分布', '总体分布', '样本数据', '误差'], answer: 0, explain: '统计量。' }
        ],
        doc: {
          lead: '这一章讲桥梁。',
          sections: [
            { id: 'se', title: '标准误', html: `<p>统计量的标准差；衡量估计精度。</p>` },
            { id: 'dist', title: '常用分布', html: `<p>z、t、卡方、F；依样本量与假设选用。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '参数估计',
        brief: '点估计与区间估计。',
        q: [
          { stem: '95% 置信区间的含义是：', options: ['重复抽样约 95% 的区间覆盖真值', '真值 95% 概率落入', '样本 95% 正确', '数据 95% 在区间'], answer: 0, explain: '覆盖率。' },
          { stem: '估计量的"无偏性"指：', options: ['期望等于真值', '方差最小', '一致', '有效'], answer: 0, explain: '无偏。' },
          { stem: '区间变宽意味着：', options: ['置信度提高或样本减小', '更精确', '无影响', '必然显著'], answer: 0, explain: '精度权衡。' }
        ],
        doc: {
          lead: '这一章讲估计。',
          sections: [
            { id: 'point', title: '点估计', html: `<p>无偏、有效、一致；样本均值估计总体均值。</p>` },
            { id: 'interval', title: '区间', html: `<p>估计 ± 临界值 × 标准误；解释为长期覆盖率。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '假设检验',
        brief: '原假设、p 值、两类错误。',
        q: [
          { stem: 'p 值的正确解释是：', options: ['原假设下观察到当前或更极端结果的概率', '原假设为真的概率', '结论为真的概率', '效应大小'], answer: 0, explain: '条件概率。' },
          { stem: '第一类错误是：', options: ['弃真', '取伪', '样本偏差', '计算错误'], answer: 0, explain: 'α。' },
          { stem: '显著性水平 α 通常取：', options: ['0.05', '0.5', '5', '1'], answer: 0, explain: '惯例。' }
        ],
        doc: {
          lead: '这一章讲检验。',
          sections: [
            { id: 'logic', title: '逻辑', html: `<p>反证法式：假设 H0，若观测结果罕见则拒绝。</p>` },
            { id: 'error', title: '错误', html: `<p>第一类（α）与第二类（β）；功效 = 1−β。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '方差分析',
        brief: '多组均值比较。',
        q: [
          { stem: 'ANOVA 用于：', options: ['比较三组及以上均值', '两组均值', '相关', '回归'], answer: 0, explain: '多组。' },
          { stem: 'F 统计量衡量：', options: ['组间方差与组内方差之比', '相关系数', '斜率', '均值差'], answer: 0, explain: '比值。' },
          { stem: 'ANOVA 显著后应做：', options: ['事后多重比较', '停止分析', '换数据', '增加样本'], answer: 0, explain: '事后检验。' }
        ],
        doc: {
          lead: '这一章讲 ANOVA。',
          sections: [
            { id: 'logic', title: '思路', html: `<p>把总变异分解为组间与组内，比较其比值。</p>` },
            { id: 'post', title: '事后', html: `<p>Tukey、Bonferroni 控制多重比较错误率。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '相关分析',
        brief: '两变量的线性关系。',
        q: [
          { stem: 'Pearson 相关系数的范围是：', options: ['−1 到 1', '0 到 1', '−∞ 到 ∞', '0 到 100'], answer: 0, explain: '范围。' },
          { stem: '相关系数为 0 说明：', options: ['无线性相关', '无任何关系', '有因果关系', '样本无效'], answer: 0, explain: '线性。' },
          { stem: 'Spearman 相关适用于：', options: ['定序数据或非线性单调关系', '定距连续', '只有二值', '时间序列'], answer: 0, explain: '秩相关。' }
        ],
        doc: {
          lead: '这一章讲相关。',
          sections: [
            { id: 'pearson', title: 'Pearson', html: `<p>线性相关；受异常值影响。</p>` },
            { id: 'spearman', title: 'Spearman', html: `<p>秩相关；稳健，适合定序。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '简单回归',
        brief: '用一个变量预测另一个。',
        q: [
          { stem: '回归斜率表示：', options: ['X 增加一单位 Y 的平均变化', '截距', '相关', 'R²'], answer: 0, explain: '边际效应。' },
          { stem: 'R² 的含义是：', options: ['解释的方差比例', '因果强度', '显著性', '样本量'], answer: 0, explain: '拟合。' },
          { stem: '残差应满足：', options: ['均值为零、与 X 不相关', '越大越好', '全为正', '全为零'], answer: 0, explain: 'OLS 性质。' }
        ],
        doc: {
          lead: '这一章讲一元回归。',
          sections: [
            { id: 'ols', title: 'OLS', html: `<p>最小化残差平方和；系数与截距的估计。</p>` },
            { id: 'fit', title: '拟合', html: `<p>R²、残差图、异常值诊断。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '多元回归',
        brief: '控制其他变量后的净效应。',
        q: [
          { stem: '多元回归系数的含义是：', options: ['控制其他变量后 X 对 Y 的平均影响', '相关系数', 'R²', '截距'], answer: 0, explain: '偏效应。' },
          { stem: '多重共线性的后果是：', options: ['系数方差变大、不显著', '系数有偏', 'R² 下降', '无法估计'], answer: 0, explain: '共线性。' },
          { stem: '遗漏变量偏误发生在：', options: ['遗漏变量同时影响 X 与 Y', '样本小', '变量多', '模型复杂'], answer: 0, explain: '混淆。' }
        ],
        doc: {
          lead: '这一章讲多元。',
          sections: [
            { id: 'interpret', title: '解释', html: `<p>偏回归系数；标准化系数的比较。</p>` },
            { id: 'diagnose', title: '诊断', html: `<p>共线性（VIF）、异方差、异常值、函数形式。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '非参数方法',
        brief: '不假设分布的分析。',
        q: [
          { stem: '卡方检验常用于：', options: ['两个定类变量的独立性', '均值比较', '回归', '相关'], answer: 0, explain: '列联表。' },
          { stem: 'Mann-Whitney U 检验是：', options: ['两独立组的秩和检验', '方差分析', '相关', '回归'], answer: 0, explain: '非参数。' },
          { stem: '非参数方法的优势是：', options: ['不依赖正态假设', '更强大', '样本小', '更快'], answer: 0, explain: '稳健。' }
        ],
        doc: {
          lead: '这一章讲非参数。',
          sections: [
            { id: 'tests', title: '常用', html: `<p>卡方、Mann-Whitney、Wilcoxon、Kruskal-Wallis。</p>` },
            { id: 'when', title: '何时用', html: `<p>小样本、定序数据、严重偏态。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '统计软件',
        brief: 'Stata / R / SPSS / Python：工具而已。',
        q: [
          { stem: '选择统计软件最重要的是：', options: ['能复现、可协作', '界面好看', '价格', '体积'], answer: 0, explain: '可复现。' },
          { stem: 'R 的优势是：', options: ['开源、包丰富、可视化强', '收费低', '速度快', '界面友好'], answer: 0, explain: '生态。' },
          { stem: '分析代码应当：', options: ['保存并注释，便于复现', '用完删除', '不写注释', '只存截图'], answer: 0, explain: '规范。' }
        ],
        doc: {
          lead: '这一章讲工具。',
          sections: [
            { id: 'tools', title: '四类', html: `<p>Stata（社科常用）、R（免费灵活）、SPSS（界面友好）、Python（通用）。</p>` },
            { id: 'habit', title: '习惯', html: `<p>脚本化、注释、版本控制；不要手动改数据。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '复习',
        brief: '描述—推断—回归，三层。',
        q: [
          { stem: '社会统计的三层是：', options: ['描述、推断、回归', '抽样、问卷、报告', '定性、定量、混合', '理论、方法、应用'], answer: 0, explain: '三层。' },
          { stem: '最易混淆的是：', options: ['标准差与标准误', '均值与中位数', '方差与协方差', 'R² 与 p'], answer: 0, explain: '概念。' },
          { stem: '复习统计最有效的方式是：', options: ['用真实数据跑一遍', '背公式', '只看书', '只做选择题'], answer: 0, explain: '动手。' }
        ],
        doc: {
          lead: '这一章收成三层。',
          sections: [
            { id: 'layers', title: '三层', html: `<ol><li>描述：中心与离散</li><li>推断：估计与检验</li><li>回归：关系与预测</li></ol>` },
            { id: 'tip', title: '提示', html: `<p>先看分布再选方法；显著不等于重要。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      }
    ]
  },

  /* ---------- 4 社会心理学 ---------- */
  {
    chapters: [
      {
        title: '社会认知',
        brief: '我们如何理解他人：图式、启发式、归因。',
        q: [
          { stem: '基本归因错误指：', options: ['高估个人因素、低估情境因素', '高估情境', '不归因', '只归因于运气'], answer: 0, explain: '归因偏差。' },
          { stem: '"启发式"指：', options: ['快速判断的心理捷径', '系统推理', '记忆', '情绪'], answer: 0, explain: '捷径。' },
          { stem: '自利归因偏差指：', options: ['成功归己、失败归外', '相反', '不归因', '客观'], answer: 0, explain: '自利。' }
        ],
        doc: {
          lead: '这一章讲认知捷径。',
          sections: [
            { id: 'schema', title: '图式', html: `<p>知识结构影响注意、记忆与解释。</p>` },
            { id: 'bias', title: '偏差', html: `<p>基本归因错误、自利偏差、确认偏差。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '态度与说服',
        brief: '态度如何形成、如何改变。',
        q: [
          { stem: '精细加工可能性模型区分：', options: ['中心路径与外周路径', '内隐与外显', '认知与情感', '个体与群体'], answer: 0, explain: 'ELM。' },
          { stem: '认知失调理论认为：', options: ['态度与行为不一致会引发不适并促使改变', '态度不变', '行为决定态度唯一', '无影响'], answer: 0, explain: '失调。' },
          { stem: '外周路径说服更依赖：', options: ['线索（如吸引力、权威）', '论证质量', '逻辑', '数据'], answer: 0, explain: '线索。' }
        ],
        doc: {
          lead: '这一章讲说服。',
          sections: [
            { id: 'elm', title: '两条路径', html: `<p>中心路径（论证）与外围路径（线索）；取决于动机与能力。</p>` },
            { id: 'dissonance', title: '失调', html: `<p>行为改变态度；诱导性服从实验。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '从众与服从',
        brief: '情境的力量：阿希与米尔格拉姆。',
        q: [
          { stem: '阿希实验研究：', options: ['从众', '服从', '记忆', '偏见'], answer: 0, explain: '从众。' },
          { stem: '米尔格拉姆实验说明：', options: ['普通人在权威下可能伤害他人', '人天生残忍', '从众', '群体极化'], answer: 0, explain: '服从。' },
          { stem: '减少从众的因素是：', options: ['有一个同盟者', '群体一致', '匿名', '任务难'], answer: 0, explain: '同盟。' }
        ],
        doc: {
          lead: '这一章讲情境。',
          sections: [
            { id: 'conform', title: '从众', html: `<p>信息性影响与规范性影响；群体规模与一致性。</p>` },
            { id: 'obey', title: '服从', html: `<p>权威合法性、渐进承诺、责任转移。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '群体行为',
        brief: '极化、惰化、群体思维。',
        q: [
          { stem: '群体极化指：', options: ['讨论后立场更极端', '更保守', '无变化', '分散'], answer: 0, explain: '极化。' },
          { stem: '社会惰化发生在：', options: ['个体贡献不可识别时', '个人任务', '竞争', '紧急'], answer: 0, explain: '惰化。' },
          { stem: '群体思维的对策是：', options: ['指定反方、匿名表决', '加强领导', '减少讨论', '统一意见'], answer: 0, explain: '对策。' }
        ],
        doc: {
          lead: '这一章讲群体。',
          sections: [
            { id: 'polar', title: '极化与惰化', html: `<p>讨论强化倾向；责任分散降低努力。</p>` },
            { id: 'groupthink', title: '群体思维', html: `<p>高凝聚 + 封闭 + 强领导；对策是异议机制。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '偏见与歧视',
        brief: '认知、态度、行为三层。',
        q: [
          { stem: '刻板印象属于：', options: ['认知层面', '态度层面', '行为层面', '制度层面'], answer: 0, explain: '认知。' },
          { stem: '减少偏见最有效的方式之一是：', options: ['平等地位下的合作接触', '隔离', '口号', '竞争'], answer: 0, explain: '接触假说。' },
          { stem: '内隐偏见的特点是：', options: ['自动化、难以自察', '有意识', '不存在', '只在外显'], answer: 0, explain: '内隐。' }
        ],
        doc: {
          lead: '这一章讲偏见。',
          sections: [
            { id: 'three', title: '三层', html: `<p>刻板印象（认知）、偏见（态度）、歧视（行为）。</p>` },
            { id: 'reduce', title: '减少', html: `<p>接触假说四条件；制度设计与反偏见训练。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '亲社会行为',
        brief: '为什么帮助别人，什么时候不帮。',
        q: [
          { stem: '旁观者效应指：', options: ['旁观者越多，帮助越少', '越多帮助越多', '无影响', '只在城市'], answer: 0, explain: '责任分散。' },
          { stem: '利他行为的解释不包括：', options: ['社会交换', '共情', '进化', '随机'], answer: 3, explain: '有机制。' },
          { stem: '增加助人行为的方式是：', options: ['明确指定某人求助', '人多', '模糊情境', '匆忙'], answer: 0, explain: '明确。' }
        ],
        doc: {
          lead: '这一章讲助人。',
          sections: [
            { id: 'bystander', title: '旁观者', html: `<p>注意—解释—责任—行动，每一步都可能卡住。</p>` },
            { id: 'theories', title: '解释', html: `<p>社会交换、共情利他、进化心理学。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '攻击行为',
        brief: '挫折、学习、环境。',
        q: [
          { stem: '"挫折—攻击"假说认为：', options: ['挫折增加攻击倾向', '攻击减少挫折', '无关系', '攻击天生'], answer: 0, explain: '挫折。' },
          { stem: '媒体暴力对攻击行为的影响：', options: ['存在相关，效应中等且受个体调节', '完全无关', '决定一切', '相反'], answer: 0, explain: '相关。' },
          { stem: '减少攻击的环境设计包括：', options: ['降低拥挤与噪音、提供宣泄渠道', '增加刺激', '鼓励竞争', '忽视'], answer: 0, explain: '环境。' }
        ],
        doc: {
          lead: '这一章讲攻击。',
          sections: [
            { id: 'theories', title: '三种解释', html: `<p>生物、挫折—攻击、社会学习。</p>` },
            { id: 'reduce', title: '干预', html: `<p>环境设计、去激化、社会技能训练。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '人际吸引',
        brief: '亲近、相似、互惠、外貌。',
        q: [
          { stem: '曝光效应指：', options: ['接触越多越喜欢', '越陌生越喜欢', '无影响', '只对物品'], answer: 0, explain: '熟悉。' },
          { stem: '相似性对吸引的作用是：', options: ['态度与价值观相似增加吸引', '互补唯一', '无关', '相反'], answer: 0, explain: '相似。' },
          { stem: '亲密关系的"投资模型"强调：', options: ['满意度、替代选择与投资', '只有激情', '只有外貌', '只有相似'], answer: 0, explain: '三要素。' }
        ],
        doc: {
          lead: '这一章讲吸引。',
          sections: [
            { id: 'factors', title: '四因素', html: `<p>接近性、相似性、互惠喜欢、外表吸引力。</p>` },
            { id: 'relationship', title: '关系', html: `<p>依恋类型、投资模型、冲突与修复。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '自我与身份',
        brief: '我是谁：自我概念、自尊、印象管理。',
        q: [
          { stem: '自我概念的主要来源是：', options: ['社会比较与反射评价', '天生', '基因唯一', '随机'], answer: 0, explain: '社会。' },
          { stem: '自尊的功能是：', options: ['维持自我价值感与应对威胁', '无功能', '只影响情绪', '只影响他人'], answer: 0, explain: '功能。' },
          { stem: '印象管理的策略包括：', options: ['讨好、自我推销、示范', '沉默', '回避', '攻击'], answer: 0, explain: '策略。' }
        ],
        doc: {
          lead: '这一章讲自我。',
          sections: [
            { id: 'self', title: '自我概念', html: `<p>社会比较、反射评价、自我知觉。</p>` },
            { id: 'presentation', title: '呈现', html: `<p>前台表演、面子、自我监控。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '文化与社会心理',
        brief: '独立我 vs 互依我。',
        q: [
          { stem: '集体主义文化更强调：', options: ['关系与群体和谐', '个人成就', '独立', '竞争'], answer: 0, explain: '互依我。' },
          { stem: '文化对归因的影响是：', options: ['影响情境因素权重', '无影响', '决定一切', '只影响记忆'], answer: 0, explain: '差异。' },
          { stem: '跨文化研究的陷阱是：', options: ['量表等值性问题', '样本大', '统计方法', '语言'], answer: 0, explain: '等值性。' }
        ],
        doc: {
          lead: '这一章讲文化。',
          sections: [
            { id: 'self', title: '两种自我', html: `<p>独立我（个人）与互依我（关系）。</p>` },
            { id: 'method', title: '方法', html: `<p>测量等值、概念对等、样本代表。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '复习',
        brief: '个体—互动—群体—文化，四层。',
        q: [
          { stem: '社会心理学的四层是：', options: ['个体、互动、群体、文化', '认知、情绪、行为、环境', '家庭、学校、职场、社会', '过去、现在、未来'], answer: 0, explain: '四层。' },
          { stem: '最经典的实验是：', options: ['阿希与米尔格拉姆', '巴甫洛夫', '皮亚杰', '斯金纳'], answer: 0, explain: '经典。' },
          { stem: '复习社会心理最有效的是：', options: ['用实验范式解释生活现象', '背定义', '只看书', '只做题'], answer: 0, explain: '应用。' }
        ],
        doc: {
          lead: '这一章收成四层。',
          sections: [
            { id: 'four', title: '四层', html: `<ol><li>个体：认知与自我</li><li>互动：态度与吸引</li><li>群体：从众与极化</li><li>文化：自我与归因差异</li></ol>` },
            { id: 'tip', title: '提示', html: `<p>社会心理学题常问"情境如何塑造行为"。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      }
    ]
  },

  /* ---------- 5 组织社会学 ---------- */
  {
    chapters: [
      {
        title: '组织理论流派',
        brief: '从科学管理到制度学派。',
        q: [
          { stem: '韦伯的科层制属于：', options: ['理性化理论', '人际关系学派', '制度学派', '权变理论'], answer: 0, explain: '理性化。' },
          { stem: '人际关系学派（霍桑实验）强调：', options: ['非正式关系与士气', '效率', '规则', '技术'], answer: 0, explain: '霍桑。' },
          { stem: '权变理论认为组织结构取决于：', options: ['环境、技术与规模', '领导偏好', '文化唯一', '历史'], answer: 0, explain: '权变。' }
        ],
        doc: {
          lead: '这一章给理论地图。',
          sections: [
            { id: 'schools', title: '四派', html: `<p>古典（泰勒/韦伯）、人际关系、系统与权变、制度与网络。</p>` },
            { id: 'use', title: '用法', html: `<p>不同问题用不同视角：效率看古典，变革看制度。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '组织结构',
        brief: '分工、层级、集权与分权。',
        q: [
          { stem: '扁平化组织的特征是：', options: ['层级少、决策快', '层级多', '集权', '规则多'], answer: 0, explain: '扁平。' },
          { stem: '矩阵结构的缺点是：', options: ['双重汇报、权责冲突', '效率低', '无分工', '不适应项目'], answer: 0, explain: '矩阵。' },
          { stem: '组织结构设计的目标是：', options: ['协调与效率的平衡', '最大化层级', '最小化沟通', '增加成本'], answer: 0, explain: '平衡。' }
        ],
        doc: {
          lead: '这一章讲结构。',
          sections: [
            { id: 'dims', title: '四个维度', html: `<p>正式化、集权化、专业化、层级数。</p>` },
            { id: 'types', title: '结构类型', html: `<p>直线职能、事业部、矩阵、网络型。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '组织环境与资源依赖',
        brief: '组织要向环境要资源。',
        q: [
          { stem: '资源依赖理论认为：', options: ['组织行为受关键资源依赖影响', '组织自治', '环境无关', '只靠内部'], answer: 0, explain: '依赖。' },
          { stem: '降低依赖的策略包括：', options: ['合并、联盟、游说、多元化', '减少合作', '提高价格', '裁员'], answer: 0, explain: '策略。' },
          { stem: '环境不确定性越高，组织越倾向：', options: ['分权与柔性结构', '集权', '僵化', '扩张层级'], answer: 0, explain: '柔性。' }
        ],
        doc: {
          lead: '这一章讲依赖。',
          sections: [
            { id: 'dep', title: '依赖', html: `<p>资源重要性、替代性、集中度决定依赖程度。</p>` },
            { id: 'strategy', title: '策略', html: `<p>纵向整合、战略联盟、董事会连接、政治游说。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '制度同构',
        brief: '组织为什么越来越像。',
        q: [
          { stem: '制度同构的三种机制是：', options: ['强制、模仿、规范', '竞争、垄断、合作', '计划、市场、混合', '内部、外部、混合'], answer: 0, explain: '迪马吉奥。' },
          { stem: '制度同构可能导致：', options: ['形式趋同但效率未必提高', '效率必然提高', '多样性增加', '无影响'], answer: 0, explain: '合法性。' },
          { stem: '组织追求合法性的意义是：', options: ['获得资源与生存空间', '提高利润', '减少成本', '扩大规模'], answer: 0, explain: '合法性。' }
        ],
        doc: {
          lead: '这一章讲同构。',
          sections: [
            { id: 'three', title: '三种', html: `<p>强制（法规）、模仿（不确定）、规范（专业）。</p>` },
            { id: 'decouple', title: '脱耦', html: `<p>形式结构与实际运作分离，以兼顾合法性与效率。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '组织文化',
        brief: '共享的价值与意义系统。',
        q: [
          { stem: '组织文化的层次包括：', options: ['器物、价值、基本假设', '只有口号', '只有制度', '只有领导'], answer: 0, explain: '三层次。' },
          { stem: '强文化的双面性是：', options: ['凝聚与盲从', '只有好处', '只有坏处', '无影响'], answer: 0, explain: '双刃。' },
          { stem: '文化变革的难点是：', options: ['基本假设难以改变', '口号难写', '预算', '人员'], answer: 0, explain: '深层。' }
        ],
        doc: {
          lead: '这一章讲文化。',
          sections: [
            { id: 'layers', title: '三层次', html: `<p>器物（可见）、价值（宣称）、基本假设（默认）。</p>` },
            { id: 'change', title: '变革', html: `<p>领导示范、仪式、叙事、人员更替。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '网络与嵌入',
        brief: '关系网络中的组织。',
        q: [
          { stem: '格兰诺维特"嵌入性"主张：', options: ['经济行为嵌入社会关系', '完全理性', '社会无关', '只靠制度'], answer: 0, explain: '嵌入。' },
          { stem: '结构洞理论认为：', options: ['占据连接不同群体的位置有优势', '关系越多越好', '孤立最好', '无差别'], answer: 0, explain: '伯特。' },
          { stem: '强关系与弱关系的区别是：', options: ['情感强度与互惠频率', '时间', '距离', '行业'], answer: 0, explain: '强度。' }
        ],
        doc: {
          lead: '这一章讲网络。',
          sections: [
            { id: 'embed', title: '嵌入', html: `<p>关系性嵌入与结构性嵌入；信任降低交易成本。</p>` },
            { id: 'holes', title: '结构洞', html: `<p>桥接不同群体的位置带来信息与控制优势。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '组织变革',
        brief: '为什么要变、怎么变、为何失败。',
        q: [
          { stem: '组织变革失败常见原因是：', options: ['缺乏紧迫感与领导支持', '预算太多', '人员太多', '目标清晰'], answer: 0, explain: '科特。' },
          { stem: '变革阻力的来源包括：', options: ['利益、习惯、不确定性', '只有懒惰', '只有技术', '只有资金'], answer: 0, explain: '多重。' },
          { stem: '渐进式变革与激进式变革的区别是：', options: ['幅度与速度', '是否有计划', '是否领导推动', '是否有效'], answer: 0, explain: '幅度。' }
        ],
        doc: {
          lead: '这一章讲变革。',
          sections: [
            { id: 'model', title: '科特八步', html: `<p>紧迫感、联盟、愿景、沟通、授权、短期胜利、巩固、固化。</p>` },
            { id: 'resist', title: '阻力', html: `<p>利益受损、习惯、信息不对称；对策是参与与沟通。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '非营利组织',
        brief: '使命驱动、多重问责。',
        q: [
          { stem: '非营利组织与企业的核心区别是：', options: ['不以利润分配为目的', '不雇人', '不收费', '不管理'], answer: 0, explain: '使命。' },
          { stem: '非营利组织的治理特点是：', options: ['理事会治理、多重问责', '股东治理', '政府直接管理', '无治理'], answer: 0, explain: '理事会。' },
          { stem: '非营利组织的绩效评估难点是：', options: ['目标多元、难以量化', '没有数据', '不透明', '规模小'], answer: 0, explain: '多元目标。' }
        ],
        doc: {
          lead: '这一章讲第三部门。',
          sections: [
            { id: 'features', title: '特征', html: `<p>使命驱动、非分配约束、志愿参与、多重问责。</p>` },
            { id: 'governance', title: '治理', html: `<p>理事会、透明度、社会影响评估。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '平台组织',
        brief: '算法管理下的新型组织。',
        q: [
          { stem: '平台组织的核心特征是：', options: ['连接供需双方、算法调度', '层级分明', '固定工位', '终身雇佣'], answer: 0, explain: '平台。' },
          { stem: '算法管理带来的问题是：', options: ['控制隐蔽、责任模糊', '效率低', '成本高', '无激励'], answer: 0, explain: '算法。' },
          { stem: '平台劳动者的组织化程度通常：', options: ['较低（分散、非正式）', '很高', '不变', '由工会决定'], answer: 0, explain: '分散。' }
        ],
        doc: {
          lead: '这一章讲新形态。',
          sections: [
            { id: 'model', title: '模式', html: `<p>双边市场、网络效应、算法调度、评分系统。</p>` },
            { id: 'labor', title: '劳动', html: `<p>灵活与不稳定并存；责任与保障的空白。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '组织研究方法',
        brief: '怎么研究组织。',
        q: [
          { stem: '组织研究常用的方法不包括：', options: ['问卷与访谈', '档案分析', '参与观察', '实验室化学反应'], answer: 3, explain: '无关。' },
          { stem: '案例研究适合：', options: ['揭示机制与过程', '大样本推断', '检验因果唯一', '统计分析'], answer: 0, explain: '机制。' },
          { stem: '组织研究伦理的重点是：', options: ['保护员工隐私与知情同意', '公开全部数据', '隐瞒目的', '不署名'], answer: 0, explain: '伦理。' }
        ],
        doc: {
          lead: '这一章讲方法。',
          sections: [
            { id: 'methods', title: '三种', html: `<p>问卷（广度）、案例（深度）、档案（历史）。</p>` },
            { id: 'ethic', title: '伦理', html: `<p>知情同意、匿名、避免对员工造成风险。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      },
      {
        title: '复习',
        brief: '结构—环境—制度—文化，四视角。',
        q: [
          { stem: '组织社会学的四视角是：', options: ['结构、环境、制度、文化', '计划、执行、检查、改进', '人、财、物、时间', '过去、现在、未来'], answer: 0, explain: '四视角。' },
          { stem: '最常考的理论是：', options: ['科层制与制度同构', '泰勒制', '霍桑', '权变'], answer: 0, explain: '高频。' },
          { stem: '案例题先判断：', options: ['组织面临的核心问题', '规模', '行业', '地点'], answer: 0, explain: '问题。' }
        ],
        doc: {
          lead: '这一章收成四视角。',
          sections: [
            { id: 'four', title: '四视角', html: `<ol><li>结构：分工与协调</li><li>环境：资源依赖</li><li>制度：合法性与同构</li><li>文化：意义与认同</li></ol>` },
            { id: 'tip', title: '提示', html: `<p>同一现象可多视角解释，答题时说明你选了哪个。</p>` }
          ],
          refs: [LAW_REFS.stats]
        }
      }
    ]
  }
]);
