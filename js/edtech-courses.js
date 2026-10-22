/* ==========================================================
   edtech-courses.js · 「教育技术学」专业：12 门课 × 3 章
   --------------------------------------------------------
   每学期 3 门课、每门 3 章 = 9 关；共 36 关。
   替换 education.js 里教育技术学原来的「4 门课 × 2 章」。
   ========================================================== */

(function () {
  var MAJOR = 'education-教育技术学';
  var TITLES = stageTitlesOf('education');

  var COURSES = [
    /* ---- 大一 ---- */
    {
      name: '教育技术学导论',
      chapters: [
        {
          title: '定义与范畴',
          brief: '技术是手段，学习才是目的。',
          q: [
            { stem: 'AECT 对教育技术的界定强调：', options: ['硬件设备', '对学习过程与学习资源的设计、开发、利用、管理与评价', '教学管理', '教育政策'], answer: 1, explain: '五个范畴围绕学习。' },
            { stem: '教育技术与教育信息化的主要区别是：', options: ['没有区别', '前者偏学习过程设计，后者偏基础设施与治理', '前者只做硬件', '后者只做软件'], answer: 1, explain: '交叉但侧重不同。' },
            { stem: '判断教育技术方案的首要标准是：', options: ['技术先进', '是否提升学习效果与效率', '设备昂贵', '界面炫'], answer: 1, explain: '学习效果为本。' }
          ],
          doc: {
            lead: '这一章明确专业边界与判断标准。',
            sections: [
              { id: 'scope', title: '五个范畴', html: `<p>设计、开发、利用、管理、评价。</p>` },
              { id: 'judge', title: '判断', html: `<p>先问：解决什么学习问题？对谁有效？证据是什么？</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '发展脉络',
          brief: '从视听教学到学习设计。',
          q: [
            { stem: '教育技术的发展大致经历了：', options: ['视听教学→程序教学→系统设计→学习科学', '一直不变', '只做硬件', '只做软件'], answer: 0, explain: '四个阶段的演进。' },
            { stem: '程序教学的奠基者是：', options: ['斯金纳', '杜威', '布鲁纳', '加涅'], answer: 0, explain: '斯金纳的教学机器与程序教学。' },
            { stem: '加涅对教育技术的主要贡献是：', options: ['九大教学事件与学习结果分类', '发现学习', '多元智能', '建构主义'], answer: 0, explain: '教学设计的重要基础。' }
          ],
          doc: {
            lead: '这一章讲一条时间线。',
            sections: [
              { id: 'stages', title: '四阶段', html: `<ul><li>视听教学</li><li>程序教学</li><li>系统设计</li><li>学习科学</li></ul>` },
              { id: 'people', title: '关键人物', html: `<p>斯金纳（程序教学）、加涅（教学事件）、梅耶（多媒体学习）。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '与教育信息化',
          brief: '一个管教学，一个管系统。',
          q: [
            { stem: '教育信息化的核心是：', options: ['买设备', '用信息技术支撑教育系统变革', '刷课', '建网站'], answer: 1, explain: '系统层面的变革。' },
            { stem: '智慧校园建设属于：', options: ['教育信息化', '教育技术设计', '课程开发', '教学评价'], answer: 0, explain: '基础设施与治理层面。' },
            { stem: '教育技术工作者在教育信息化中的角色是：', options: ['采购', '教学设计与应用支持', '网络运维', '行政'], answer: 1, explain: '把技术转化为教学价值。' }
          ],
          doc: {
            lead: '这一章讲两者的分工。',
            sections: [
              { id: 'split', title: '分工', html: `<p>信息化：基础设施、平台、数据治理；教育技术：学习设计、资源开发、评价。</p>` },
              { id: 'bridge', title: '桥梁', html: `<p>教育技术把"能用的技术"变成"会学的设计"。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        }
      ]
    },
    {
      name: '学习科学与技术',
      chapters: [
        {
          title: '认知负荷与工作记忆',
          brief: '工作记忆是瓶颈，设计要省着用。',
          q: [
            { stem: '认知负荷理论认为学习失败常见原因是：', options: ['工作记忆超载', '不努力', '设备旧', '教室小'], answer: 0, explain: '容量有限。' },
            { stem: '外在认知负荷应当：', options: ['尽量降低', '尽量提高', '保持不变', '忽略'], answer: 0, explain: '呈现方式不当造成的负荷。' },
            { stem: '相关认知负荷的作用是：', options: ['阻碍学习', '促进图式建构', '无关', '消耗资源'], answer: 1, explain: '用于建构的负荷应保留。' }
          ],
          doc: {
            lead: '这一章讲三种负荷。',
            sections: [
              { id: 'three', title: '三种', html: `<ul><li>内在：内容复杂度</li><li>外在：呈现不当</li><li>相关：图式建构</li></ul>` },
              { id: 'design', title: '设计启示', html: `<p>分步呈现、减少冗余、突出关键；把复杂任务拆成子目标。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '情境学习与专家新手',
          brief: '在哪学、怎么学，决定能不能用。',
          q: [
            { stem: '情境学习理论强调：', options: ['脱离情境的抽象练习', '在真实或仿真的实践共同体中学习', '只做选择题', '只看书'], answer: 1, explain: '学习是参与实践。' },
            { stem: '专家与新手的差别主要在于：', options: ['记忆容量', '知识组织方式与模式识别', '智商', '年龄'], answer: 1, explain: '组块化与图式。' },
            { stem: '"认知学徒制"的核心是：', options: ['教师示范—指导练习—逐步撤除支架', '完全自学', '只考试', '只看视频'], answer: 0, explain: '示范、指导、退隐。' }
          ],
          doc: {
            lead: '这一章讲两个研究传统。',
            sections: [
              { id: 'situated', title: '情境学习', html: `<p>实践共同体、合法的边缘性参与、真实性任务。</p>` },
              { id: 'expert', title: '专家新手', html: `<p>专家按深层原理组织知识；新手按表面特征。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '研究方法',
          brief: '学习科学怎么做研究。',
          q: [
            { stem: '设计研究（DBR）的特点是：', options: ['实验室一次实验', '真实情境中多轮迭代，同时产出设计与理论', '只做问卷', '只做综述'], answer: 1, explain: '迭代与情境化。' },
            { stem: '学习科学常用的数据包括：', options: ['行为日志、眼动、出声思维、成绩', '只有成绩', '只有问卷', '只有访谈'], answer: 0, explain: '多模态数据。' },
            { stem: '研究结论的可推广性取决于：', options: ['样本与情境', '软件', '图表', '篇幅'], answer: 0, explain: '情境与样本决定边界。' }
          ],
          doc: {
            lead: '这一章讲方法工具箱。',
            sections: [
              { id: 'methods', title: '方法', html: `<p>实验、设计研究、话语分析、学习分析。</p>` },
              { id: 'data', title: '数据', html: `<p>行为、生理、言语、作品；三角验证。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        }
      ]
    },
    {
      name: '教学设计基础',
      chapters: [
        {
          title: '学习者与目标分析',
          brief: '设计从"谁学、学到什么"开始。',
          q: [
            { stem: '学习者分析的核心内容不包括：', options: ['起点能力', '学习动机', '学习风格', '家庭收入'], answer: 3, explain: '与学习直接相关的特征。' },
            { stem: '教学目标的行为化表述应当包含：', options: ['行为、条件、标准', '只有行为', '只有知识', '只有态度'], answer: 0, explain: 'ABCD 模型。' },
            { stem: '目标层次中"分析"属于：', options: ['低阶', '高阶', '记忆', '理解'], answer: 1, explain: '布鲁姆分类的后三层为高阶。' }
          ],
          doc: {
            lead: '这一章讲前端分析。',
            sections: [
              { id: 'learner', title: '学习者', html: `<p>起点、动机、认知特点、先前知识。</p>` },
              { id: 'goal', title: '目标', html: `<p>行为动词 + 条件 + 标准；与评价对齐。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: 'ADDIE 模型',
          brief: '设计有流程，流程可迭代。',
          q: [
            { stem: 'ADDIE 的顺序是：', options: ['分析—设计—开发—实施—评价', '设计—分析—实施—开发—评价', '开发—设计—分析—评价—实施', '评价—分析—设计—开发—实施'], answer: 0, explain: '经典五阶段。' },
            { stem: 'ADDIE 中"评价"的作用是：', options: ['只在最后', '贯穿全过程（形成性 + 总结性）', '可省略', '只评学生'], answer: 1, explain: '评价贯穿各阶段。' },
            { stem: '原型法在 ADDIE 中的作用是：', options: ['增加成本', '低成本试错、提前获得反馈', '装饰', '替代设计'], answer: 1, explain: '快速迭代。' }
          ],
          doc: {
            lead: '这一章讲流程模型。',
            sections: [
              { id: 'addie', title: '五阶段', html: `<ol><li>分析</li><li>设计</li><li>开发</li><li>实施</li><li>评价</li></ol>` },
              { id: 'iter', title: '迭代', html: `<p>低保真原型 → 用户测试 → 修订；比一次做完更省成本。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '评价对齐',
          brief: '目标、活动、评价必须指向同一件事。',
          q: [
            { stem: '"对齐"指的是：', options: ['目标、活动与评价相互对应', '教材与课标一致', '教师与学生一致', '课时与进度一致'], answer: 0, explain: '建构性对齐。' },
            { stem: '形成性评价在教育技术项目中的作用是：', options: ['排名', '迭代改进', '鉴定', '选拔'], answer: 1, explain: '改进导向。' },
            { stem: '评价工具与目标不匹配的后果是：', options: ['无法证明学习发生', '没有影响', '提高效率', '降低成本'], answer: 0, explain: '测量不到目标。' }
          ],
          doc: {
            lead: '这一章讲对齐。',
            sections: [
              { id: 'align', title: '三步', html: `<ol><li>写清目标</li><li>设计与目标同构的活动</li><li>用同构任务评价</li></ol>` },
              { id: 'check', title: '自检', html: `<p>目标可测吗？活动在练这个目标吗？评价测得出来吗？</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        }
      ]
    },

    /* ---- 大二 ---- */
    {
      name: '教学系统设计',
      chapters: [
        {
          title: '需求与任务分析',
          brief: '先确认"差距在哪"。',
          q: [
            { stem: '需求分析的核心是：', options: ['确定现状与目标之间的差距', '选软件', '写脚本', '做界面'], answer: 0, explain: '差距即需求。' },
            { stem: '任务分析的作用是：', options: ['把复杂任务分解为可教的子技能', '统计人数', '制定预算', '选择平台'], answer: 0, explain: '层级分解。' },
            { stem: '若问题根源是制度而非能力，培训可能：', options: ['有效', '无效（不是培训能解决的）', '必须做', '更省钱'], answer: 1, explain: '先诊断再开方。' }
          ],
          doc: {
            lead: '这一章讲前端两件事。',
            sections: [
              { id: 'need', title: '需求', html: `<p>现状—目标—差距—原因；区分"不会"与"不愿""不能"。</p>` },
              { id: 'task', title: '任务', html: `<p>程序性任务、知识性任务、态度性任务，分解方式不同。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '活动与支架',
          brief: '让学习者做，而不是让讲师讲。',
          q: [
            { stem: '支架（scaffolding）的核心是：', options: ['永久支持', '随能力提升逐步撤除的临时支持', '增加难度', '减少互动'], answer: 1, explain: '渐隐是支架的关键。' },
            { stem: '活动设计中最容易被忽略的是：', options: ['教师讲解', '学习者的实际练习与反馈', 'PPT', '签到'], answer: 1, explain: '练习与反馈决定学习。' },
            { stem: '小组协作任务设计要避免：', options: ['明确分工', '责任分散与搭便车', '共同目标', '个体问责'], answer: 1, explain: '需个体问责。' }
          ],
          doc: {
            lead: '这一章讲活动与支架。',
            sections: [
              { id: 'activity', title: '活动', html: `<p>目标导向、可操作、有反馈；练习密度与变式。</p>` },
              { id: 'scaffold', title: '支架', html: `<p>示范、提示、模板、检查表；随熟练逐步撤除。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '原型与迭代',
          brief: '先做出来给人试。',
          q: [
            { stem: '低保真原型的作用是：', options: ['好看', '低成本快速验证结构与流程', '替代开发', '节省时间'], answer: 1, explain: '先验证再美化。' },
            { stem: '用户测试中最重要的原则是：', options: ['让用户自然使用并观察卡点', '引导用户', '解释功能', '避免提问'], answer: 0, explain: '观察真实行为。' },
            { stem: '可用性问题最常出现在：', options: ['首次使用的前几分钟', '长期使用后', '考试时', '维护时'], answer: 0, explain: '上手体验决定留存。' }
          ],
          doc: {
            lead: '这一章讲迭代方法。',
            sections: [
              { id: 'proto', title: '原型', html: `<p>纸面原型 → 交互原型 → 高保真；每级验证不同问题。</p>` },
              { id: 'test', title: '测试', html: `<p>3–5 名目标用户即可发现大部分可用性问题；记录卡点。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        }
      ]
    },
    {
      name: '教育心理学',
      chapters: [
        {
          title: '动机',
          brief: '为什么学比怎么学更早决定结果。',
          q: [
            { stem: '自我决定论提出的三种基本需要是：', options: ['自主、胜任、归属', '安全、尊重、自我实现', '成就、权力、亲和', '生理、安全、社交'], answer: 0, explain: 'Deci & Ryan。' },
            { stem: '外部奖励可能削弱内部动机，这称为：', options: ['过度理由效应', '霍桑效应', '皮格马利翁效应', '晕轮效应'], answer: 0, explain: '奖励挤出内在兴趣。' },
            { stem: '提高学习动机最有效的反馈是：', options: ['排名', '针对过程与策略的反馈', '表扬天赋', '批评'], answer: 1, explain: '过程性反馈。' }
          ],
          doc: {
            lead: '这一章讲动机理论。',
            sections: [
              { id: 'theories', title: '三种', html: `<p>期望-价值、归因、自我决定。</p>` },
              { id: 'design', title: '设计启示', html: `<p>给选择、设可达挑战、及时具体反馈。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '迁移',
          brief: '学到的能不能用出去。',
          q: [
            { stem: '促进迁移最有效的方式是：', options: ['大量重复', '理解原理 + 多样化变式练习', '只做题', '只背答案'], answer: 1, explain: '原理与变式。' },
            { stem: '近迁移与远迁移的区别是：', options: ['情境相似程度', '时间长短', '难度', '记忆类型'], answer: 0, explain: '相似情境 vs 新情境。' },
            { stem: '过度情境化可能导致：', options: ['迁移困难', '迁移容易', '记忆更好', '动机更强'], answer: 0, explain: '只会在原情境用。' }
          ],
          doc: {
            lead: '这一章讲迁移。',
            sections: [
              { id: 'types', title: '两类', html: `<p>近迁移（相似情境）与远迁移（新情境）。</p>` },
              { id: 'boost', title: '怎么促进', html: `<p>对比案例、原理提炼、变式练习、真实任务。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '元认知与自我调节',
          brief: '会监控自己的学习。',
          q: [
            { stem: '元认知包括：', options: ['元认知知识 + 元认知体验 + 监控调节', '只有知识', '只有动机', '只有记忆'], answer: 0, explain: '三个成分。' },
            { stem: '自我调节学习的循环是：', options: ['计划—执行—反思', '输入—输出', '预习—上课', '记忆—遗忘'], answer: 0, explain: '齐默尔曼的循环模型。' },
            { stem: '培养元认知最有效的做法是：', options: ['教师多讲', '让学生自我提问、写学习日志', '增加作业量', '只做测试'], answer: 1, explain: '反思性活动。' }
          ],
          doc: {
            lead: '这一章讲自我调节。',
            sections: [
              { id: 'meta', title: '元认知', html: `<p>计划（目标与策略）、监控（我懂了吗）、调节（换策略）。</p>` },
              { id: 'train', title: '培养', html: `<p>自我提问清单、学习日志、复盘会议。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        }
      ]
    },
    {
      name: '多媒体技术',
      chapters: [
        {
          title: '梅耶原则',
          brief: '多媒体学习有实验依据的设计规则。',
          q: [
            { stem: '多媒体学习的"冗余原则"建议：', options: ['图文并茂地重复同一段文字', '避免同时呈现相同的文字与旁白', '增加装饰', '加背景音乐'], answer: 1, explain: '冗余会分散注意。' },
            { stem: '"一致性原则"要求：', options: ['增加趣味元素', '删除与目标无关的材料', '使用动画', '配音乐'], answer: 1, explain: '减少无关加工。' },
            { stem: '"分段原则"的目的是：', options: ['延长时长', '让学习者按自己节奏处理信息', '减少内容', '增加难度'], answer: 1, explain: '学习者控制节奏。' }
          ],
          doc: {
            lead: '这一章讲五条常用原则。',
            sections: [
              { id: 'five', title: '五条', html: `<ul><li>多媒体（图文结合）</li><li>一致性（去无关）</li><li>冗余（不重复）</li><li>分段（可控节奏）</li><li>信号（突出关键）</li></ul>` },
              { id: 'use', title: '用法', html: `<p>做课件前先问：这条信息必须同时用两种通道呈现吗？</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '可用性与无障碍',
          brief: '能看懂、能操作、谁都能用。',
          q: [
            { stem: '可用性测试关注：', options: ['界面美观', '用户能否高效完成目标', '代码质量', '服务器性能'], answer: 1, explain: '以任务完成度衡量。' },
            { stem: '无障碍设计的常见要求不包括：', options: ['字幕', '足够的对比度', '键盘可操作', '自动播放声音'], answer: 3, explain: '自动播放会干扰。' },
            { stem: '移动端优先设计的原因是：', options: ['屏幕小、使用场景碎片化', '性能更强', '更省钱', '更美观'], answer: 0, explain: '约束驱动设计。' }
          ],
          doc: {
            lead: '这一章讲体验与可及。',
            sections: [
              { id: 'usability', title: '可用性', html: `<p>易学、高效、少错、满意；任务完成率与耗时是核心指标。</p>` },
              { id: 'a11y', title: '无障碍', html: `<p>字幕、对比度、键盘操作、屏幕阅读器兼容。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '交互与动画',
          brief: '动起来要有理由。',
          q: [
            { stem: '教学动画最有效的用法是：', options: ['装饰页面', '展示难以观察的过程与机制', '增加时长', '吸引眼球'], answer: 1, explain: '解释性动画。' },
            { stem: '交互设计中的及时反馈指：', options: ['操作后立刻给出状态变化', '延迟反馈', '无反馈', '只在错误时反馈'], answer: 0, explain: '反馈及时性。' },
            { stem: '过度动画的主要问题是：', options: ['分散注意、增加负荷', '提升学习', '减少成本', '增强记忆'], answer: 0, explain: '干扰学习。' }
          ],
          doc: {
            lead: '这一章讲动效与交互。',
            sections: [
              { id: 'anim', title: '动画', html: `<p>用于过程可视化；配旁白解释关键变化。</p>` },
              { id: 'inter', title: '交互', html: `<p>即时反馈、可撤销、状态可见；避免隐藏操作。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        }
      ]
    },

    /* ---- 大三 ---- */
    {
      name: '在线课程开发',
      chapters: [
        {
          title: '课程结构',
          brief: '先搭骨架，再填内容。',
          q: [
            { stem: '在线课程结构设计的起点是：', options: ['拍摄视频', '明确目标与学习路径', '选平台', '做封面'], answer: 1, explain: '目标先行。' },
            { stem: '微课视频的适宜长度通常是：', options: ['3–8 分钟', '30 分钟', '60 分钟', '越长越好'], answer: 0, explain: '符合注意力与碎片化学习。' },
            { stem: '课程导航设计最重要的是：', options: ['美观', '让学习者知道"我在哪、下一步做什么"', '动画', '音乐'], answer: 1, explain: '位置感与路径清晰。' }
          ],
          doc: {
            lead: '这一章讲课程骨架。',
            sections: [
              { id: 'structure', title: '结构', html: `<p>模块 → 单元 → 课时；每课时一个目标、一个练习。</p>` },
              { id: 'nav', title: '导航', html: `<p>进度可见、路径清晰、可回看。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '视频脚本与制作',
          brief: '好视频是设计出来的，不是拍出来的。',
          q: [
            { stem: '教学视频脚本应当先写：', options: ['台词', '学习目标与关键画面', '片头', '配乐'], answer: 1, explain: '目标决定内容。' },
            { stem: '录屏视频中，讲师语速与停顿应：', options: ['越快越好', '适中并留出思考时间', '越慢越好', '不停顿'], answer: 1, explain: '给认知加工留时间。' },
            { stem: '视频中的字幕主要作用是：', options: ['装饰', '提升可及性与理解', '增加时长', '美观'], answer: 1, explain: '无障碍与理解。' }
          ],
          doc: {
            lead: '这一章讲脚本与制作。',
            sections: [
              { id: 'script', title: '脚本', html: `<p>两栏：画面（演示/板书）与旁白；标注关键停顿与强调。</p>` },
              { id: 'produce', title: '制作', html: `<p>录音优先、画面简洁、字幕必配；避免花哨转场。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '平台与工具',
          brief: '工具是手段，流程是核心。',
          q: [
            { stem: '选择教学平台最应关注：', options: ['界面好看', '是否支持所需的教学活动与数据', '价格最低', '广告少'], answer: 1, explain: '功能匹配教学需求。' },
            { stem: 'LMS 的核心功能不包括：', options: ['课程管理', '作业与评价', '讨论互动', '视频剪辑'], answer: 3, explain: '剪辑是制作工具。' },
            { stem: '工具过多带来的主要问题是：', options: ['学习成本与数据割裂', '效率提升', '成本降低', '体验更好'], answer: 0, explain: '工具堆叠。' }
          ],
          doc: {
            lead: '这一章讲平台选型。',
            sections: [
              { id: 'lms', title: '平台功能', html: `<p>内容管理、作业评价、讨论、数据统计、证书。</p>` },
              { id: 'stack', title: '工具链', html: `<p>录制、剪辑、字幕、交互课件、题库；尽量少而通。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        }
      ]
    },
    {
      name: '教育数据分析',
      chapters: [
        {
          title: '数据采集与指标',
          brief: '先想清楚要回答什么问题。',
          q: [
            { stem: '学习分析最常用的数据来源是：', options: ['成绩单', '平台行为日志', '教师评价', '教材销量'], answer: 1, explain: '点击、停留、提交、讨论。' },
            { stem: '完课率与完播率的区别是：', options: ['是否学完整门课 vs 是否看完单个视频', '没有区别', '前者更小', '后者更粗'], answer: 0, explain: '粒度不同。' },
            { stem: '设计埋点时最先确定的是：', options: ['指标与对应的改进动作', '数据库', '图表颜色', '服务器'], answer: 0, explain: '指标服务于决策。' }
          ],
          doc: {
            lead: '这一章讲指标设计。',
            sections: [
              { id: 'metrics', title: '四个基础指标', html: `<ul><li>完课率</li><li>视频完播率</li><li>作业提交率</li><li>讨论参与度</li></ul>` },
              { id: 'action', title: '对应动作', html: `<p>每个指标都要能回答"低了怎么办"。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '分析方法',
          brief: '从描述到预测。',
          q: [
            { stem: '学习分析中的"预警模型"通常预测：', options: ['辍学或挂科风险', '教师工资', '设备故障', '天气'], answer: 0, explain: '风险预警。' },
            { stem: '分析学习行为时，最需要排除的干扰是：', options: ['刷课与挂机行为', '样本量', '软件', '图表'], answer: 0, explain: '数据真实性。' },
            { stem: '相关分析与因果推断的区别是：', options: ['是否控制混淆变量', '是否用软件', '样本大小', '数据类型'], answer: 0, explain: '因果需要识别策略。' }
          ],
          doc: {
            lead: '这一章讲三层分析。',
            sections: [
              { id: 'levels', title: '三层', html: `<ul><li>描述：发生了什么</li><li>诊断：为什么</li><li>预测：谁会出问题</li></ul>` },
              { id: 'care', title: '注意', html: `<p>刷课、代刷、设备差异会污染日志；先清洗再分析。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '伦理与隐私',
          brief: '数据越细，责任越大。',
          q: [
            { stem: '教育数据伦理的基本原则是：', options: ['最小必要、知情同意、去标识化', '全部公开', '只保护教师', '无需说明'], answer: 0, explain: '三条底线。' },
            { stem: '涉及未成年人数据时应当：', options: ['自由使用', '取得监护人同意并严格保护', '公开分享', '长期保存'], answer: 1, explain: '更严格。' },
            { stem: '算法用于学生评价时，需要特别警惕：', options: ['标签化与自我实现预言', '计算速度', '存储成本', '界面'], answer: 0, explain: '公平与偏见。' }
          ],
          doc: {
            lead: '这一章讲伦理。',
            sections: [
              { id: 'principles', title: '三原则', html: `<ul><li>最小必要</li><li>知情同意</li><li>去标识化</li></ul>` },
              { id: 'fair', title: '公平', html: `<p>模型可能放大既有偏差；用于评价时须可解释、可申诉。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        }
      ]
    },
    {
      name: '教育技术研究方法',
      chapters: [
        {
          title: '实验与准实验',
          brief: '证明"有效"需要对照。',
          q: [
            { stem: '随机对照实验的核心优势是：', options: ['样本大', '控制混淆、支持因果推断', '成本低', '速度快'], answer: 1, explain: '随机化平衡已知与未知变量。' },
            { stem: '准实验设计常见的形式是：', options: ['非等组前后测', '随机分组', '双盲', '交叉设计'], answer: 0, explain: '无法随机时使用。' },
            { stem: '前测-后测设计的主要威胁是：', options: ['成熟效应与测验效应', '样本量', '软件', '统计方法'], answer: 0, explain: '需对照组。' }
          ],
          doc: {
            lead: '这一章讲两种设计。',
            sections: [
              { id: 'rct', title: '实验', html: `<p>随机分配、控制条件、前后测；内部效度高。</p>` },
              { id: 'quasi', title: '准实验', html: `<p>非等组、断点、单组时间序列；需讨论选择偏差。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '设计研究',
          brief: '在真实课堂中迭代。',
          q: [
            { stem: '设计研究（DBR）的产出是：', options: ['只有论文', '可用的设计 + 情境化理论', '只有软件', '只有数据'], answer: 1, explain: '双重产出。' },
            { stem: 'DBR 的典型流程是：', options: ['分析—设计—实施—修订的循环', '一次实验', '只做综述', '只做问卷'], answer: 0, explain: '多轮迭代。' },
            { stem: 'DBR 结论的推广需要：', options: ['说明情境与边界', '直接推广', '忽略情境', '只报平均值'], answer: 0, explain: '情境化理论。' }
          ],
          doc: {
            lead: '这一章讲设计研究。',
            sections: [
              { id: 'cycle', title: '循环', html: `<p>问题分析 → 设计干预 → 实施 → 追溯数据 → 修订，多轮。</p>` },
              { id: 'output', title: '产出', html: `<p>设计原则 + 情境化理论 + 可复用的干预方案。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '效果量与报告',
          brief: '显著不等于有用。',
          q: [
            { stem: '效果量（effect size）的作用是：', options: ['说明差异的实际大小', '替代显著性', '提高 R²', '减少样本'], answer: 0, explain: '实践意义。' },
            { stem: 'Cohen 的 d 值 0.2/0.5/0.8 常被解释为：', options: ['小/中/大效应', '显著/不显著', '信度/效度', '样本量'], answer: 0, explain: '常用参照。' },
            { stem: '研究报告应当报告：', options: ['效应量、置信区间与局限', '只报 p 值', '只报均值', '只报结论'], answer: 0, explain: '完整证据。' }
          ],
          doc: {
            lead: '这一章讲证据表达。',
            sections: [
              { id: 'effect', title: '效果量', html: `<p>d、η²、r；解释实际意义，而非只看 p。</p>` },
              { id: 'report', title: '报告', html: `<p>样本、设计、效应量、置信区间、局限。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        }
      ]
    },

    /* ---- 大四 ---- */
    {
      name: '教育实习',
      chapters: [
        {
          title: '岗位与角色',
          brief: '学校信息化岗、教育企业、教研部门。',
          q: [
            { stem: '学校信息化岗位的核心工作是：', options: ['采购设备', '教学应用支持与资源建设', '网络布线', '行政值班'], answer: 1, explain: '技术转化为教学。' },
            { stem: '教育企业的教学设计岗（ID）主要负责：', options: ['课程与学习方案设计', '销售', '财务', '运维'], answer: 0, explain: 'ID 岗位。' },
            { stem: '选择实习岗位最该看：', options: ['能否参与真实项目并产出作品', '公司名气', '工位', '通勤'], answer: 0, explain: '作品导向。' }
          ],
          doc: {
            lead: '这一章讲三类岗位。',
            sections: [
              { id: 'roles', title: '三类', html: `<ul><li>学校信息化</li><li>教育企业（ID/产品）</li><li>教研与培训</li></ul>` },
              { id: 'pick', title: '选择', html: `<p>能上手真实任务、有人带、能产出可展示成果。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '参与项目',
          brief: '从一个模块做起。',
          q: [
            { stem: '实习生参与课程项目，最合适的切入点是：', options: ['整体架构', '一个模块的设计与开发', '预算', '人事'], answer: 1, explain: '小切口完整做。' },
            { stem: '与开发协作时，最有效的沟通材料是：', options: ['口头描述', '原型与设计说明', 'PPT', '邮件'], answer: 1, explain: '原型即语言。' },
            { stem: '项目延期的常见原因是：', options: ['需求变更与评审不足', '人员太少', '预算', '工具'], answer: 0, explain: '需求与评审。' }
          ],
          doc: {
            lead: '这一章讲项目协作。',
            sections: [
              { id: 'scope', title: '范围', html: `<p>领一个模块：目标、脚本、原型、测试。</p>` },
              { id: 'collab', title: '协作', html: `<p>原型 + 设计说明 + 验收标准；需求变更要留痕。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '复盘',
          brief: '把项目变成作品。',
          q: [
            { stem: '实习复盘最有价值的写法是：', options: ['问题—做法—结果—反思', '工作清单', '感想', '考勤'], answer: 0, explain: '结构化复盘。' },
            { stem: '实习结束应留下：', options: ['作品与数据', '只有证明', '只有照片', '什么也不留'], answer: 0, explain: '作品可展示。' },
            { stem: '面试讲实习项目的最佳结构是：', options: ['背景—任务—行动—结果', '流水账', '只讲结果', '只讲工具'], answer: 0, explain: 'STAR。' }
          ],
          doc: {
            lead: '这一章讲复盘与留存。',
            sections: [
              { id: 'review', title: '复盘', html: `<p>每周五行；项目结束写一页项目复盘。</p>` },
              { id: 'keep', title: '留存', html: `<p>设计稿、原型、测试记录、上线数据（脱敏）。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        }
      ]
    },
    {
      name: '毕业设计',
      chapters: [
        {
          title: '选题',
          brief: '做一个小而完整的东西。',
          q: [
            { stem: '教育技术毕业设计最合适的成果是：', options: ['纯文献综述', '可运行的作品 + 评价数据', '翻译', '读后感'], answer: 1, explain: '作品与证据。' },
            { stem: '选题时最该避免：', options: ['范围过小', '功能堆砌、无法完成', '有真实用户', '可评价'], answer: 1, explain: '小而完整优于大而空。' },
            { stem: '毕业设计的"问题"应当来自：', options: ['技术炫技', '真实的学习困难', '导师偏好', '流行趋势'], answer: 1, explain: '问题驱动。' }
          ],
          doc: {
            lead: '这一章讲选题三问。',
            sections: [
              { id: 'three', title: '三问', html: `<ol><li>解决谁的学习问题</li><li>能不能做出来</li><li>能不能评价效果</li></ol>` },
              { id: 'scope', title: '范围', html: `<p>一个微课、一个交互模块、一个分析工具，都够。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '开发与评价',
          brief: '做完还要证明有用。',
          q: [
            { stem: '评价作品效果最简可行的做法是：', options: ['专家打分', '小规模用户测试 + 前后测/问卷', '自我感觉', '看下载量'], answer: 1, explain: '有数据支撑。' },
            { stem: '可用性测试通常需要多少用户？', options: ['3–5 名', '50 名', '100 名', '越多越好'], answer: 0, explain: '小样本即可发现主要问题。' },
            { stem: '作品文档应当包含：', options: ['设计依据、功能说明、测试结果与局限', '只有截图', '只有代码', '只有致谢'], answer: 0, explain: '完整交付。' }
          ],
          doc: {
            lead: '这一章讲开发与验证。',
            sections: [
              { id: 'build', title: '开发', html: `<p>原型迭代：低保真 → 可用版本 → 打磨。</p>` },
              { id: 'eval', title: '评价', html: `<p>任务完成率、用时、满意度、前后测；报告样本与局限。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '答辩',
          brief: '讲清问题、方案与证据。',
          q: [
            { stem: '答辩陈述的三段是：', options: ['问题—方案—证据', '背景—致谢—总结', '技术—代码—部署', '理论—方法—文献'], answer: 0, explain: '以问题为主线。' },
            { stem: '被问"你的作品比现成工具好在哪"，最好的回答是：', options: ['功能更多', '针对特定学习问题做了设计与验证', '界面更美', '代码更多'], answer: 1, explain: '问题针对性。' },
            { stem: '答辩前最该准备的是：', options: ['背稿', '能现场演示作品并解释设计决策', 'PPT 模板', '服装'], answer: 1, explain: '演示与解释。' }
          ],
          doc: {
            lead: '这一章讲答辩。',
            sections: [
              { id: 'talk', title: '陈述', html: `<p>问题 1 分钟、方案 2 分钟、证据 1 分钟、局限 1 分钟。</p>` },
              { id: 'demo', title: '演示', html: `<p>准备离线演示与录屏备份，避免现场网络问题。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        }
      ]
    },
    {
      name: '考研与求职',
      chapters: [
        {
          title: '考研',
          brief: '教育技术考研：专业基础 + 技术。',
          q: [
            { stem: '教育技术学考研专业课常见范围是：', options: ['教育技术学导论、教学设计、学习理论', '只考数学', '只考编程', '只考英语'], answer: 0, explain: '专业基础为主。' },
            { stem: '复习教学设计最有效的方式是：', options: ['背模型名', '能对给定目标设计完整方案并说明理由', '只做真题', '只看教材'], answer: 1, explain: '应用能力。' },
            { stem: '复试常被问的是：', options: ['个人爱好', '技术如何服务学习', '家庭', '排名'], answer: 1, explain: '专业理解。' }
          ],
          doc: {
            lead: '这一章讲考研准备。',
            sections: [
              { id: 'subjects', title: '内容', html: `<ul><li>教育技术学基础</li><li>教学设计与学习理论</li><li>研究方法</li></ul>` },
              { id: 'plan', title: '节奏', html: `<p>3–6 月基础，7–8 月真题，9–10 月强化，11–12 月模拟。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '求职',
          brief: '四条路：学校、企业、出版、自由职业。',
          q: [
            { stem: '教育技术求职最核心的竞争力是：', options: ['作品与方法', '证书数量', '学校名气', '外语'], answer: 0, explain: '可验证能力。' },
            { stem: '企业培训设计（ID）岗最看重：', options: ['课程设计与项目推动能力', '编程', '美术', '销售'], answer: 0, explain: '设计与落地。' },
            { stem: '面试被问"你怎么评估课程效果"，应回答：', options: ['看满意度', '说明指标、方法与数据', '凭感觉', '看销量'], answer: 1, explain: '证据意识。' }
          ],
          doc: {
            lead: '这一章讲四条路径。',
            sections: [
              { id: 'paths', title: '四条', html: `<ul><li>学校信息化/信息技术教师</li><li>教育企业（ID/产品/运营）</li><li>出版社与数字资源</li><li>自由职业（课程制作）</li></ul>` },
              { id: 'prep', title: '准备', html: `<p>作品集 + 一个能讲清的效果数据。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '作品集',
          brief: '三件套：课程、原型、数据。',
          q: [
            { stem: '教育技术作品集最核心的是：', options: ['一份完整课程设计 + 可运行作品 + 数据', '成绩单', '证书', '自荐信'], answer: 0, explain: '设计与证据。' },
            { stem: '展示作品时最该说明：', options: ['用了什么工具', '解决了什么问题、怎么验证', '代码量', '开发时长'], answer: 1, explain: '问题与证据。' },
            { stem: '引用他人素材时应当：', options: ['注明来源与许可', '不标注', '随意使用', '改一改'], answer: 0, explain: '版权意识。' }
          ],
          doc: {
            lead: '这一章讲作品集组织。',
            sections: [
              { id: 'kit', title: '三件套', html: `<ul><li>课程设计方案（含对齐表）</li><li>可运行原型或微课</li><li>效果数据与复盘</li></ul>` },
              { id: 'tell', title: '讲法', html: `<p>2 分钟：问题、设计、证据、反思。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        }
      ]
    }
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
