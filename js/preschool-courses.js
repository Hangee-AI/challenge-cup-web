/* ==========================================================
   preschool-courses.js · 「学前教育」专业：12 门课 × 3 章
   --------------------------------------------------------
   每学期 3 门课、每门 3 章 = 9 关；共 36 关。
   替换 education.js 里学前教育原来的「4 门课 × 2 章」。
   ========================================================== */

(function () {
  var MAJOR = 'education-学前教育';
  var TITLES = stageTitlesOf('education');

  var COURSES = [
    /* ---- 大一 ---- */
    {
      name: '学前教育学',
      chapters: [
        {
          title: '性质与原则',
          brief: '学前教育是保教并重的启蒙教育。',
          q: [
            { stem: '我国学前教育的基本原则是：', options: ['以课堂教学为主', '以游戏为基本活动、保教结合', '提前教小学内容', '以考试评价为主'], answer: 1, explain: '《幼儿园工作规程》明确规定。' },
            { stem: '学前教育的年龄范围通常是：', options: ['0–3 岁', '3–6 岁', '6–12 岁', '0–6 岁'], answer: 1, explain: '幼儿园面向 3–6 岁；0–3 岁属托育。' },
            { stem: '学前教育与小学教育的关键区别是：', options: ['是否有课程', '是否以游戏和生活为主要形式', '是否有教师', '是否收费'], answer: 1, explain: '形式与内容都不同。' }
          ],
          doc: {
            lead: '这一章建立学前教育的基本定位。',
            sections: [
              { id: 'nature', title: '性质', html: `<p>基础性、启蒙性、公益性；保教结合是核心原则。</p>` },
              { id: 'principles', title: '原则', html: `<p>以游戏为基本活动、尊重个体差异、生活化、家园共育。</p>
<div class="doc-tip">💡 判断一个活动是否合适，先问"孩子在里面做什么"。</div>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '保教结合与一日生活',
          brief: '教育藏在吃喝拉撒睡里。',
          q: [
            { stem: '"保教结合"的含义是：', options: ['保育与教育分离', '保育与教育相互渗透、同一过程', '只重保育', '只重教育'], answer: 1, explain: '保育中渗透教育。' },
            { stem: '幼儿园一日生活中教育价值最高的环节通常是：', options: ['集体教学', '生活环节与游戏', '午睡', '排队'], answer: 1, explain: '生活与游戏是主要载体。' },
            { stem: '"小学化"倾向的主要危害是：', options: ['孩子太累', '违背发展规律、损伤学习兴趣', '家长不满', '教师负担'], answer: 1, explain: '短期领先、长期受损。' }
          ],
          doc: {
            lead: '这一章讲一日生活的教育点。',
            sections: [
              { id: 'day', title: '一日流程', html: `<p>入园、进餐、如厕、游戏、午睡、离园，每个环节都有发展目标。</p>` },
              { id: 'principle', title: '两条原则', html: `<p>安全优先、发展适宜性（跳一跳够得着）。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '幼小衔接',
          brief: '衔接的不是知识，是习惯与心理准备。',
          q: [
            { stem: '科学的幼小衔接重点是：', options: ['提前学拼音算术', '学习习惯、社会适应与心理准备', '大量写字', '考试训练'], answer: 1, explain: '零起点不等于零准备。' },
            { stem: '幼小衔接中家长最常见的误区是：', options: ['培养自理能力', '报班提前学小学课程', '规律作息', '亲子阅读'], answer: 1, explain: '超前学习易造成厌学。' },
            { stem: '幼儿园大班适宜的衔接活动是：', options: ['模拟课堂纪律与作息', '每天做卷子', '取消游戏', '只学写字'], answer: 0, explain: '体验式适应而非知识灌输。' }
          ],
          doc: {
            lead: '这一章讲衔接的正确做法。',
            sections: [
              { id: 'what', title: '衔接什么', html: `<p>自理、规则意识、任务意识、同伴交往、情绪调节。</p>` },
              { id: 'how', title: '怎么做', html: `<p>参观小学、调整作息、模拟课堂、亲子共读；不提前学科化。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        }
      ]
    },
    {
      name: '儿童发展心理学',
      chapters: [
        {
          title: '3–6 岁的认知与语言',
          brief: '前运算阶段：以具体形象思维为主。',
          q: [
            { stem: '3–6 岁儿童思维的主要特点是：', options: ['抽象逻辑', '具体形象', '形式运算', '辩证'], answer: 1, explain: '前运算阶段。' },
            { stem: '幼儿"自我中心"的典型表现是：', options: ['自私', '难以采择他人视角', '不听指令', '攻击性强'], answer: 1, explain: '皮亚杰的三山实验。' },
            { stem: '促进幼儿语言发展的有效方式是：', options: ['反复抄写', '丰富的对话、共读与讲述', '看视频', '做练习册'], answer: 1, explain: '语言在交流中发展。' }
          ],
          doc: {
            lead: '这一章讲认知与语言。',
            sections: [
              { id: 'cognition', title: '认知', html: `<p>具体形象思维、自我中心、泛灵论、不守恒。</p>` },
              { id: 'language', title: '语言', html: `<p>词汇爆发、语法简化、语用发展；对话与共读是关键。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '社会性与依恋',
          brief: '关系是发展的土壤。',
          q: [
            { stem: '安全型依恋的儿童通常：', options: ['回避母亲', '母亲在时安心探索，分离时不安，重聚易安抚', '极度焦虑', '无反应'], answer: 1, explain: '安斯沃斯陌生情境。' },
            { stem: '幼儿同伴交往中"平行游戏"指的是：', options: ['一起合作', '在旁边玩相似的玩具但无合作', '独自玩', '旁观'], answer: 1, explain: '帕顿的游戏发展阶段。' },
            { stem: '促进亲社会行为的方式不包括：', options: ['榜样示范', '共情引导', '强制分享', '肯定具体行为'], answer: 2, explain: '强制分享易适得其反。' }
          ],
          doc: {
            lead: '这一章讲社会性发展。',
            sections: [
              { id: 'attachment', title: '依恋', html: `<p>安全型、回避型、矛盾型；抚养质量与稳定性影响依恋。</p>` },
              { id: 'peer', title: '同伴', html: `<p>游戏阶段：独自、旁观、平行、联合、合作。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '个体差异与特殊需要',
          brief: '每个孩子的发展节奏不同。',
          q: [
            { stem: '面对发展较慢的幼儿，教师应当：', options: ['贴标签', '观察记录、提供适宜支持并沟通家长', '忽视', '要求加速'], answer: 1, explain: '观察—支持—沟通。' },
            { stem: '融合教育的核心理念是：', options: ['隔离安置', '让特殊需要儿童在普通环境中获得支持', '只做康复', '拒绝入园'], answer: 1, explain: '接纳与支持。' },
            { stem: '评估幼儿发展应基于：', options: ['一次测试', '长期观察与多来源信息', '家长印象', '教师直觉'], answer: 1, explain: '过程性、多来源。' }
          ],
          doc: {
            lead: '这一章讲差异与支持。',
            sections: [
              { id: 'difference', title: '差异', html: `<p>气质、发展速度、兴趣、家庭背景；避免横向比较。</p>` },
              { id: 'support', title: '支持', html: `<p>观察记录、个别化材料、与家长和治疗师协作。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        }
      ]
    },
    {
      name: '幼儿卫生保健',
      chapters: [
        {
          title: '营养与膳食',
          brief: '吃得好，才长得好。',
          q: [
            { stem: '幼儿膳食搭配的基本原则是：', options: ['高糖高脂', '均衡、多样、定时定量', '只吃素', '只喝奶'], answer: 1, explain: '营养均衡与规律进餐。' },
            { stem: '幼儿缺铁性贫血的常见原因是：', options: ['摄入不足与吸收差', '运动过多', '睡眠不足', '喝水少'], answer: 0, explain: '铁摄入不足是主因。' },
            { stem: '培养幼儿良好进餐习惯的做法不包括：', options: ['固定座位与时间', '鼓励自主进食', '强迫吃完', '榜样示范'], answer: 2, explain: '强迫易造成厌食。' }
          ],
          doc: {
            lead: '这一章讲吃的问题。',
            sections: [
              { id: 'nutrition', title: '营养', html: `<p>蛋白质、钙、铁、维生素；三餐一点、荤素搭配。</p>` },
              { id: 'habit', title: '习惯', html: `<p>定时、定点、自主进食；不追喂、不强迫。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '常见疾病与传染病',
          brief: '预防为主，早发现早隔离。',
          q: [
            { stem: '手足口病的传播途径主要是：', options: ['空气', '消化道与接触传播', '血液', '蚊虫'], answer: 1, explain: '粪口与接触传播。' },
            { stem: '幼儿园晨检的主要目的是：', options: ['考勤', '早期发现传染病与异常', '收费', '家长沟通'], answer: 1, explain: '一摸二看三问四查。' },
            { stem: '预防传染病的关键措施不包括：', options: ['通风消毒', '隔离患者', '接种疫苗', '关窗保暖'], answer: 3, explain: '密闭不通风会加剧传播。' }
          ],
          doc: {
            lead: '这一章讲疾病预防。',
            sections: [
              { id: 'infect', title: '传染病', html: `<p>手足口、水痘、流感、诺如；控制传染源、切断途径、保护易感者。</p>` },
              { id: 'daily', title: '日常', html: `<p>晨检、通风、消毒、洗手、因病缺勤追踪。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '安全与急救',
          brief: '意外伤害是幼儿最大风险。',
          q: [
            { stem: '幼儿气道异物梗阻时，首选：', options: ['海姆立克急救法', '喂水', '拍背等待', '送医院'], answer: 0, explain: '立即施救并呼叫急救。' },
            { stem: '预防跌落的关键是：', options: ['加强看护与环境防护', '限制活动', '只用口头提醒', '减少户外'], answer: 0, explain: '环境改造 + 看护。' },
            { stem: '幼儿园安全管理的"三防"通常指：', options: ['人防、物防、技防', '防火、防盗、防骗', '防摔、防烫、防病', '防走失、防欺凌、防中毒'], answer: 0, explain: '人防物防技防。' }
          ],
          doc: {
            lead: '这一章讲安全与急救。',
            sections: [
              { id: 'prevent', title: '预防', html: `<p>环境排查（桌角、插座、热水）、看护站位、接送制度。</p>` },
              { id: 'firstaid', title: '急救', html: `<p>异物梗阻、烫伤、跌伤、惊厥的基本处理；记住急救电话。</p>
<div class="doc-tip">⚠️ 烫伤先冲冷水 15 分钟，不要涂牙膏。</div>` }
            ],
            refs: [EDU_REFS.moe]
          }
        }
      ]
    },

    /* ---- 大二 ---- */
    {
      name: '幼儿园课程',
      chapters: [
        {
          title: '课程理念与五大领域',
          brief: '课程藏在生活与游戏里。',
          q: [
            { stem: '《3–6 岁儿童学习与发展指南》的五个领域是：', options: ['健康、语言、社会、科学、艺术', '语文、数学、英语、体育、音乐', '德智体美劳', '阅读、书写、计算、绘画、唱歌'], answer: 0, explain: '五大领域相互渗透。' },
            { stem: '幼儿园课程实施的主要形式是：', options: ['分科授课', '游戏、生活与主题活动', '考试训练', '自习'], answer: 1, explain: '经验与过程取向。' },
            { stem: '课程内容选择的依据是：', options: ['教材顺序', '幼儿兴趣经验与领域目标', '家长要求', '小学课程'], answer: 1, explain: '基于生活经验与目标。' }
          ],
          doc: {
            lead: '这一章讲课程理念与内容。',
            sections: [
              { id: 'idea', title: '理念', html: `<p>生活化、游戏化、经验化；以幼儿为主体。</p>` },
              { id: 'areas', title: '五大领域', html: `<p>健康、语言、社会、科学、艺术；强调渗透而非分科。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '主题活动设计',
          brief: '围绕一个主题，串起多个领域。',
          q: [
            { stem: '主题活动设计的起点通常是：', options: ['教材章节', '幼儿的兴趣或生活事件', '考试要求', '教师喜好'], answer: 1, explain: '兴趣与生活是主题来源。' },
            { stem: '一个完整的主题活动应包含：', options: ['目标、网络图、活动序列、环境与评价', '只有教案', '只有手工', '只有故事'], answer: 0, explain: '整体设计。' },
            { stem: '主题网络的绘制作用是：', options: ['美观', '梳理各领域活动与资源的关系', '凑页数', '给家长看'], answer: 1, explain: '把主题展开成活动地图。' }
          ],
          doc: {
            lead: '这一章讲主题设计四步。',
            sections: [
              { id: 'steps', title: '四步', html: `<ol><li>确定主题与目标</li><li>绘制网络图</li><li>设计活动序列</li><li>环境与评价</li></ol>` },
              { id: 'example', title: '例子', html: `<p>"秋天"主题：语言（儿歌）、科学（落叶）、艺术（树叶贴画）、健康（秋季锻炼）。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '课程的生活化与游戏化',
          brief: '最好的课程看不出是课程。',
          q: [
            { stem: '"生活即课程"意味着：', options: ['生活环节都有教育价值', '不用设计课程', '只学生活技能', '取消教学'], answer: 0, explain: '一日生活皆课程。' },
            { stem: '课程游戏化的核心是：', options: ['把游戏加入课程表', '用游戏精神组织活动', '减少活动', '增加玩具'], answer: 1, explain: '自由、自主、愉悦、创造。' },
            { stem: '评价幼儿园课程质量，最应看：', options: ['活动是否花哨', '幼儿的参与度与发展', '家长满意度', '材料成本'], answer: 1, explain: '以儿童发展为本。' }
          ],
          doc: {
            lead: '这一章讲课程的两个"化"。',
            sections: [
              { id: 'life', title: '生活化', html: `<p>入园、进餐、散步、离园都可生成活动。</p>` },
              { id: 'play', title: '游戏化', html: `<p>不是"上课加游戏"，而是活动本身具有游戏性。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        }
      ]
    },
    {
      name: '游戏与儿童发展',
      chapters: [
        {
          title: '游戏类型与价值',
          brief: '游戏是幼儿最严肃的学习。',
          q: [
            { stem: '角色游戏对幼儿发展的主要价值是：', options: ['锻炼体能', '发展社会性、语言与表征能力', '记忆知识', '练习写字'], answer: 1, explain: '扮演与规则协商。' },
            { stem: '规则游戏通常在哪个年龄段更明显？', options: ['小班', '中班', '大班', '婴儿期'], answer: 2, explain: '随年龄增长规则意识增强。' },
            { stem: '"游戏是儿童的基本活动"的依据是：', options: ['孩子喜欢', '符合身心发展特点，是主要学习方式', '便于管理', '不需要准备'], answer: 1, explain: '发展适宜性。' }
          ],
          doc: {
            lead: '这一章讲游戏分类与功能。',
            sections: [
              { id: 'types', title: '类型', html: `<p>角色、建构、表演、规则、智力游戏；按社会性分独自到合作。</p>` },
              { id: 'value', title: '价值', html: `<p>认知（表征、问题解决）、语言、社会性、情绪调节、身体动作。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '游戏中的学习',
          brief: '看见游戏里的数学、语言与科学。',
          q: [
            { stem: '积木游戏中蕴含的学习不包括：', options: ['空间与几何', '平衡与结构', '数量与比较', '汉字书写'], answer: 3, explain: '书写不是积木游戏的目标。' },
            { stem: '支持幼儿在游戏中学习，教师应当：', options: ['直接教知识点', '观察并适时提出问题、提供材料', '干预每一步', '不干预'], answer: 1, explain: '隐性支持。' },
            { stem: '游戏分享环节的作用是：', options: ['总结知识点', '回顾经验、提升表达与反思', '批评', '排队'], answer: 1, explain: '经验提升。' }
          ],
          doc: {
            lead: '这一章讲"看见学习"。',
            sections: [
              { id: 'see', title: '看什么', html: `<p>目标意识：这个游戏里孩子在练什么（分类、测量、协商、叙事）。</p>` },
              { id: 'lift', title: '怎么提升', html: `<p>分享环节用开放问题回放经验："你是怎么让它不倒的？"</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '教师支持与介入',
          brief: '该出手时出手，该退后时退后。',
          q: [
            { stem: '教师介入游戏最恰当的时机是：', options: ['任何时候', '出现危险、停滞或冲突无法解决时', '孩子玩得开心时', '从不'], answer: 1, explain: '安全与学习受阻时介入。' },
            { stem: '"平行游戏"作为支持策略指的是：', options: ['在旁边玩相似材料示范', '直接指挥', '旁观', '禁止'], answer: 0, explain: '隐性示范。' },
            { stem: '介入时以角色身份提出建议的好处是：', options: ['权威性强', '不打断游戏框架、易被接受', '更快', '更省力'], answer: 1, explain: '保持游戏性。' }
          ],
          doc: {
            lead: '这一章讲介入的艺术。',
            sections: [
              { id: 'when', title: '何时', html: `<p>危险、长时间停滞、冲突升级、学习机会出现。</p>` },
              { id: 'how', title: '如何', html: `<p>平行游戏、角色介入、材料投放、提问；避免直接教学。</p>
<div class="doc-tip">⚠️ 一旦开始提问"正确答案"，游戏就结束了。</div>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        }
      ]
    },
    {
      name: '幼儿园班级管理',
      chapters: [
        {
          title: '常规建立',
          brief: '稳定的一日流程带来安全感。',
          q: [
            { stem: '建立班级常规的关键是：', options: ['严厉惩罚', '规则清晰、一致执行、幼儿参与理解', '放任', '只奖励'], answer: 1, explain: '清晰稳定可预期。' },
            { stem: '过渡环节（如排队、洗手）最需要：', options: ['自由散漫', '明确指令与小组分流', '长时间等待', '教师代办'], answer: 1, explain: '减少等待与混乱。' },
            { stem: '表扬幼儿时最有效的方式是：', options: ['笼统说"真棒"', '描述具体行为', '发奖品', '比较排名'], answer: 1, explain: '具体化强化行为。' }
          ],
          doc: {
            lead: '这一章讲常规与指令。',
            sections: [
              { id: 'routine', title: '常规', html: `<p>作息固定、过渡有安排、指令具体可执行。</p>` },
              { id: 'praise', title: '强化', html: `<p>描述行为 + 说明意义；避免贴标签与横向比较。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '环境创设',
          brief: '环境是第三位老师。',
          q: [
            { stem: '区角设置的基本原则是：', options: ['越满越好', '动静分区、数量适宜、便于取放', '只放装饰', '全部统一'], answer: 1, explain: '支持自主活动。' },
            { stem: '墙面布置应当：', options: ['教师精心布置', '以幼儿作品与过程记录为主', '只要好看', '常年不换'], answer: 1, explain: '儿童视角与参与。' },
            { stem: '"材料低结构"指的是：', options: ['便宜', '玩法开放、可多种组合', '易碎', '单一用途'], answer: 1, explain: '低结构材料促进创造。' }
          ],
          doc: {
            lead: '这一章讲空间与材料。',
            sections: [
              { id: 'zones', title: '区角', html: `<p>角色、建构、阅读、美工、科学；动静分开、通道畅通。</p>` },
              { id: 'materials', title: '材料', html: `<p>低结构、可组合、数量充足；定期更新并与主题呼应。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '安全与突发',
          brief: '安全是底线。',
          q: [
            { stem: '班级安全管理的首要原则是：', options: ['事后追责', '预防为主、排查隐患', '限制活动', '口头提醒'], answer: 1, explain: '预防优先。' },
            { stem: '幼儿走失的预防措施不包括：', options: ['接送制度', '清点人数', '门禁管理', '减少户外活动'], answer: 3, explain: '减少活动不是办法。' },
            { stem: '发生意外伤害时，教师首先应：', options: ['追责', '保护现场、救助幼儿、通知家长与上报', '拍照', '隐瞒'], answer: 1, explain: '救治与报告。' }
          ],
          doc: {
            lead: '这一章讲安全闭环。',
            sections: [
              { id: 'prevent', title: '预防', html: `<p>环境排查、接送制度、清点人数、站位与视线。</p>` },
              { id: 'response', title: '应对', html: `<p>救治—报告—通知—复盘；保留记录。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        }
      ]
    },

    /* ---- 大三 ---- */
    {
      name: '五大领域教学法',
      chapters: [
        {
          title: '健康与语言',
          brief: '身体与表达，是发展的两条基线。',
          q: [
            { stem: '幼儿健康教育不包括：', options: ['生活习惯', '安全教育', '体育活动', '写字训练'], answer: 3, explain: '书写训练不属于幼儿健康教育。' },
            { stem: '语言领域活动的核心是：', options: ['识字量', '倾听、表达、阅读与书写准备', '背诵', '拼音'], answer: 1, explain: '完整语言能力。' },
            { stem: '绘本教学最有效的方式是：', options: ['教师朗读后提问讨论', '让孩子抄写', '只看动画', '背故事'], answer: 0, explain: '共读与对话。' }
          ],
          doc: {
            lead: '这一章讲两个领域。',
            sections: [
              { id: 'health', title: '健康', html: `<p>生活卫生习惯、安全、体能；每天户外活动不少于 2 小时。</p>` },
              { id: 'language', title: '语言', html: `<p>倾听、表达、阅读兴趣、书写准备（前书写）；避免机械识字。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '社会与科学',
          brief: '与人相处，与世界对话。',
          q: [
            { stem: '幼儿科学教育的核心是：', options: ['讲原理', '观察、猜想、操作、验证的探究过程', '背结论', '看视频'], answer: 1, explain: '探究为本。' },
            { stem: '社会领域活动最有效的形式是：', options: ['讲道理', '真实情境中的体验与交往', '做卷子', '看动画'], answer: 1, explain: '体验式学习。' },
            { stem: '科学区材料投放应当：', options: ['越复杂越好', '可操作、可观察、可重复', '只放图片', '只放成品'], answer: 1, explain: '支持探究。' }
          ],
          doc: {
            lead: '这一章讲两个领域。',
            sections: [
              { id: 'social', title: '社会', html: `<p>自我意识、同伴交往、规则与社会适应、归属感。</p>` },
              { id: 'science', title: '科学', html: `<p>观察、比较、分类、测量、实验；记录与表达。</p>
<div class="doc-tip">💡 科学活动别急着给答案，先让孩子猜。</div>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '艺术',
          brief: '感受与表现，而非技法训练。',
          q: [
            { stem: '幼儿艺术教育的核心目标是：', options: ['画得像', '感受美、表现与创造', '技法规范', '参加比赛'], answer: 1, explain: '审美与创造。' },
            { stem: '评价幼儿作品时应当：', options: ['按像不像打分', '关注表达意图与过程', '只选优秀作品展示', '与范画比较'], answer: 1, explain: '尊重表达。' },
            { stem: '艺术活动中教师示范应当：', options: ['提供统一范画', '适度示范并鼓励多样表达', '不做示范', '只讲技法'], answer: 1, explain: '避免千篇一律。' }
          ],
          doc: {
            lead: '这一章讲艺术领域。',
            sections: [
              { id: 'goal', title: '目标', html: `<p>感受与欣赏、表现与创造；不追求技法标准化。</p>` },
              { id: 'how', title: '做法', html: `<p>丰富材料与体验、过程性评价、展示每个孩子的作品。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        }
      ]
    },
    {
      name: '幼儿行为观察',
      chapters: [
        {
          title: '观察方法',
          brief: '轶事、时间取样、事件取样。',
          q: [
            { stem: '轶事记录法的特点是：', options: ['按固定间隔记录', '记录真实情境中的典型事件，客观描述', '只记问题行为', '用评分表'], answer: 1, explain: '抓典型片段。' },
            { stem: '时间取样法适合观察：', options: ['偶发事件', '高频且持续时间短的行为', '一次性的冲突', '深度访谈'], answer: 1, explain: '按时间段记录行为是否发生。' },
            { stem: '事件取样法适合：', options: ['特定行为发生时记录全过程', '固定间隔', '只记结果', '只记时间'], answer: 0, explain: '以事件为单位。' }
          ],
          doc: {
            lead: '这一章讲三种方法的选择。',
            sections: [
              { id: 'methods', title: '三种', html: `<ul><li>轶事：典型事件</li><li>时间取样：高频短行为</li><li>事件取样：完整过程</li></ul>` },
              { id: 'choose', title: '怎么选', html: `<p>看你要回答什么问题：频率、过程还是意义。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '记录与解读',
          brief: '事实与解释要分开。',
          q: [
            { stem: '观察记录中最常见的错误是：', options: ['记录太细', '把解释当事实写进去', '用词太客观', '时间太长'], answer: 1, explain: '应分栏记录。' },
            { stem: '"客观描述"要求：', options: ['写出推断', '只写可观察的行为与语言', '写评价', '写建议'], answer: 1, explain: '可观察、可验证。' },
            { stem: '解读幼儿行为时应当：', options: ['贴标签', '结合发展理论与情境提出假设', '下结论', '与其他孩子比较'], answer: 1, explain: '假设—验证。' }
          ],
          doc: {
            lead: '这一章讲记录规范。',
            sections: [
              { id: 'record', title: '记录', html: `<p>时间地点、客观描述、我的解读、支持计划，四栏分开。</p>` },
              { id: 'read', title: '解读', html: `<p>用发展理论解释，但保持假设性；多方验证。</p>
<div class="doc-tip">⚠️ "他很有攻击性"是标签，"他三次推倒同伴的积木"是事实。</div>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '支持策略',
          brief: '观察是为了支持，不是为了存档。',
          q: [
            { stem: '基于观察的支持计划应当：', options: ['笼统', '具体、可执行、可回看', '只写目标', '只写问题'], answer: 1, explain: '目标—策略—验证。' },
            { stem: '对社交退缩的幼儿，适宜的支持是：', options: ['强迫交往', '提供小范围同伴机会并示范', '忽视', '批评'], answer: 1, explain: '渐进式支持。' },
            { stem: '支持效果如何判断？', options: ['教师感觉', '再次观察与记录对比', '家长评价', '考试成绩'], answer: 1, explain: '用数据验证。' }
          ],
          doc: {
            lead: '这一章讲支持闭环。',
            sections: [
              { id: 'plan', title: '计划', html: `<p>目标（具体行为）+ 策略（环境/材料/互动）+ 时间。</p>` },
              { id: 'check', title: '验证', html: `<p>两周后再次观察，对比基线。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        }
      ]
    },
    {
      name: '家园共育',
      chapters: [
        {
          title: '日常沟通',
          brief: '说具体的事，给可做的建议。',
          q: [
            { stem: '与家长沟通幼儿问题，最有效的方式是：', options: ['笼统评价', '描述具体行为并共同商量策略', '只报喜', '让家长自己管'], answer: 1, explain: '具体、合作。' },
            { stem: '沟通中"三明治"结构指的是：', options: ['先批评后表扬', '肯定—问题—建议', '只表扬', '只批评'], answer: 1, explain: '降低防御。' },
            { stem: '家长最反感教师的做法是：', options: ['具体描述', '贴标签与横向比较', '给建议', '定期反馈'], answer: 1, explain: '标签伤害信任。' }
          ],
          doc: {
            lead: '这一章讲沟通技术。',
            sections: [
              { id: 'method', title: '三步', html: `<ol><li>描述具体行为与场景</li><li>说明发展意义</li><li>提出家园配合方案</li></ol>` },
              { id: 'tone', title: '语气', html: `<p>平等、具体、可执行；避免"你家孩子就是……"。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '家长会与家访',
          brief: '正式场合的沟通设计。',
          q: [
            { stem: '家长会最有效的形式是：', options: ['教师单向宣讲', '有主题、有互动、有参与', '只发通知', '只谈成绩'], answer: 1, explain: '参与式。' },
            { stem: '家访的主要目的是：', options: ['检查卫生', '了解家庭环境与教养方式、建立信任', '收费', '告状'], answer: 1, explain: '理解与联结。' },
            { stem: '家长开放日的设计应注意：', options: ['只展示优秀', '展示真实常态并安排互动', '全程录像', '取消'], answer: 1, explain: '真实与参与。' }
          ],
          doc: {
            lead: '这一章讲两类正式沟通。',
            sections: [
              { id: 'meeting', title: '家长会', html: `<p>主题聚焦、体验式环节、留出提问时间。</p>` },
              { id: 'visit', title: '家访', html: `<p>提前预约、双向了解、记录要点；避免只报问题。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '特殊需要的协作',
          brief: '家园一致，支持才有效。',
          q: [
            { stem: '面对疑似发展迟缓的幼儿，教师应当：', options: ['直接诊断', '建议家长就医评估并提供观察资料', '忽视', '贴标签'], answer: 1, explain: '不越界诊断。' },
            { stem: '与特殊需要儿童家长协作的关键是：', options: ['统一目标与策略', '各做各的', '只在学校干预', '减少沟通'], answer: 0, explain: '一致性。' },
            { stem: '融合班级中，普通幼儿家长担心时，教师应：', options: ['回避', '说明融合教育的价值与具体安排', '取消融合', '批评'], answer: 1, explain: '沟通与解释。' }
          ],
          doc: {
            lead: '这一章讲协作边界。',
            sections: [
              { id: 'boundary', title: '边界', html: `<p>教师做观察与支持，不做诊断；评估与治疗交给专业机构。</p>` },
              { id: 'coop', title: '协作', html: `<p>与家长、治疗师共享目标与记录，保持策略一致。</p>` }
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
          title: '带班',
          brief: '一日流程带得住，才算真的会。',
          q: [
            { stem: '新教师带班最先要建立的是：', options: ['威信', '稳定的常规与安全感', '成绩', '家长关系'], answer: 1, explain: '常规带来可预期。' },
            { stem: '组织集体活动时，教师站位应：', options: ['站在讲台', '能同时看到所有幼儿、靠近风险点', '坐在椅子上', '站在门口'], answer: 1, explain: '视线覆盖与快速响应。' },
            { stem: '过渡环节最有效的组织方式是：', options: ['让幼儿等待', '分组分流 + 明确指令', '教师代办', '自由活动'], answer: 1, explain: '减少等待。' }
          ],
          doc: {
            lead: '这一章讲带班三件事。',
            sections: [
              { id: 'routine', title: '常规', html: `<p>作息固定、指令具体、过渡有安排。</p>` },
              { id: 'safety', title: '安全', html: `<p>站位、清点人数、材料检查。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '组织活动',
          brief: '从写教案到真上课。',
          q: [
            { stem: '一次成功的集体活动，最重要的设计是：', options: ['教师讲得精彩', '目标适宜、材料充足、幼儿参与度高', '形式花哨', '时间短'], answer: 1, explain: '以幼儿参与为核心。' },
            { stem: '活动时间超出预期时，教师应当：', options: ['拖堂讲完', '灵活取舍、保住核心环节', '取消活动', '延长时间'], answer: 1, explain: '保目标而非保流程。' },
            { stem: '活动结束的分享环节可以：', options: ['省略', '回顾经验、提升表达', '改为排队', '批评'], answer: 1, explain: '经验提升。' }
          ],
          doc: {
            lead: '这一章讲组织技巧。',
            sections: [
              { id: 'design', title: '设计', html: `<p>目标—材料—环节—分工；预设与弹性。</p>` },
              { id: 'adjust', title: '调整', html: `<p>看幼儿反应实时调整；宁可少讲一个环节，也要保住参与。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '复盘',
          brief: '把三个月变成能力证明。',
          q: [
            { stem: '实习复盘最有价值的写法是：', options: ['问题—做法—结果—反思', '工作清单', '抒情', '考勤'], answer: 0, explain: '结构化复盘。' },
            { stem: '录下自己带的活动，最该看：', options: ['自己的语言与站位、幼儿反应', '画面色调', '背景音乐', '字幕'], answer: 0, explain: '教学行为与学习状态。' },
            { stem: '实习结束时应留下：', options: ['活动方案与观察记录', '只有照片', '只有评语', '什么都没有'], answer: 0, explain: '作品可复用。' }
          ],
          doc: {
            lead: '这一章讲复盘与留存。',
            sections: [
              { id: 'review', title: '复盘', html: `<p>每周五行：做了什么、遇到什么、怎么解决、学到什么。</p>` },
              { id: 'keep', title: '留存', html: `<p>3 份活动方案 + 5 篇观察记录 + 1 段带班视频。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        }
      ]
    },
    {
      name: '毕业论文',
      chapters: [
        {
          title: '选题与观察',
          brief: '从带班中的真问题出发。',
          q: [
            { stem: '学前教育本科论文最合适的选题是：', options: ['"论幼儿教育"', '某班幼儿同伴交往的观察研究', '纯理论综述', '翻译'], answer: 1, explain: '小问题 + 一手观察。' },
            { stem: '观察研究需要说明：', options: ['对象、时间、方法、记录方式', '只写结论', '只写对象', '不写方法'], answer: 0, explain: '可复现。' },
            { stem: '研究伦理要求：', options: ['公开幼儿姓名', '取得家长与园方同意、匿名化', '不需要告知', '随意拍摄'], answer: 1, explain: '涉及未成年人须谨慎。' }
          ],
          doc: {
            lead: '这一章讲选题与设计。',
            sections: [
              { id: 'topic', title: '选题', html: `<p>三筛：具体、可观察、一学期能完成。</p>` },
              { id: 'design', title: '设计', html: `<p>观察对象与时长、记录工具、伦理与授权。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '材料与写作',
          brief: '用记录说话。',
          q: [
            { stem: '观察资料分析常用的方法是：', options: ['编码与主题归纳', '回归分析', '因子分析', '显著性检验'], answer: 0, explain: '质性资料编码。' },
            { stem: '论文中的案例描述应当：', options: ['文学化', '客观、具体、可核对', '概括', '省略细节'], answer: 1, explain: '研究写作要求。' },
            { stem: '结论部分应当：', options: ['夸大推广', '回应问题并说明局限', '只写建议', '只写理论'], answer: 1, explain: '有节制。' }
          ],
          doc: {
            lead: '这一章讲分析与写作。',
            sections: [
              { id: 'analysis', title: '分析', html: `<p>编码、归类、找模式；三角验证（多种来源）。</p>` },
              { id: 'write', title: '写作', html: `<p>问题—方法—发现—讨论—局限；案例与引用规范。</p>` }
            ],
            refs: [EDU_REFS.cnki]
          }
        },
        {
          title: '答辩',
          brief: '讲清证据链。',
          q: [
            { stem: '答辩陈述最该突出：', options: ['问题、方法、发现', '篇幅', '致谢', '文献量'], answer: 0, explain: '三段式。' },
            { stem: '被问"样本太少"，最好的回答是：', options: ['越多越好', '说明目的与推论边界', '回避', '改口'], answer: 1, explain: '质性研究重深度。' },
            { stem: '答辩前最该准备的是：', options: ['背稿', '对自己的方法与结论有清晰解释', 'PPT 动画', '服装'], answer: 1, explain: '理解胜过背诵。' }
          ],
          doc: {
            lead: '这一章讲答辩准备。',
            sections: [
              { id: 'talk', title: '陈述', html: `<p>5 分钟：问题、方法、一个核心发现、一个局限。</p>` },
              { id: 'qa', title: '问答', html: `<p>准备三问：为什么这样设计、证据够不够、还能怎么改进。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        }
      ]
    },
    {
      name: '考编与考研',
      chapters: [
        {
          title: '考编：笔试',
          brief: '教综 + 学前专业知识。',
          q: [
            { stem: '幼儿教师招聘笔试通常包括：', options: ['教育综合 + 学前教育专业知识', '只考教育学', '只考技能', '只考英语'], answer: 0, explain: '两科为主。' },
            { stem: '学前教育专业知识常考：', options: ['学前心理学、五大领域、法规', '高等数学', '编程', '会计'], answer: 0, explain: '专业模块。' },
            { stem: '复习教综最有效的方式是：', options: ['背框架 + 真题', '只看教材', '只背押题', '不复习'], answer: 0, explain: '框架化 + 真题。' }
          ],
          doc: {
            lead: '这一章讲笔试准备。',
            sections: [
              { id: 'modules', title: '模块', html: `<ul><li>教育学与心理学</li><li>学前专业知识</li><li>法规与师德</li></ul>` },
              { id: 'plan', title: '节奏', html: `<p>先框架后真题，最后背诵与模拟。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '面试与技能',
          brief: '试讲 + 弹唱跳画。',
          q: [
            { stem: '幼儿教师面试通常包括：', options: ['试讲/说课 + 技能展示 + 结构化', '只有笔试', '只有才艺', '只有体检'], answer: 0, explain: '多环节。' },
            { stem: '技能展示的准备建议：', options: ['临考突击', '每个项目准备一个成品，长期练习', '只练一项', '不准备'], answer: 1, explain: '弹唱跳画各一。' },
            { stem: '结构化问答中"幼儿冲突"类问题，回答应先：', options: ['判断对错', '保证安全、安抚情绪、了解经过', '批评', '叫家长'], answer: 1, explain: '处理顺序。' }
          ],
          doc: {
            lead: '这一章讲面试三块。',
            sections: [
              { id: 'demo', title: '试讲', html: `<p>10 分钟：导入、活动、分享；要有互动与教具。</p>` },
              { id: 'skill', title: '技能', html: `<p>弹唱、舞蹈、绘画、讲故事各准备一个成品；每天 20 分钟。</p>` }
            ],
            refs: [EDU_REFS.moe]
          }
        },
        {
          title: '考研与备选',
          brief: '学前教育的深造与就业。',
          q: [
            { stem: '学前教育考研专业课常见范围是：', options: ['教育学原理、儿童发展、课程与教学', '只考英语', '只考政治', '只考技能'], answer: 0, explain: '333/311 常见。' },
            { stem: '学前教育就业方向不包括：', options: ['幼儿园教师', '早教机构', '儿童产品与出版', '临床医学'], answer: 3, explain: '与医学无关。' },
            { stem: '同时准备考编与考研，最现实的做法是：', options: ['以一条为主，另一条保留低成本动作', '两条满负荷', '放弃一条', '等结果'], answer: 0, explain: '主次分明。' }
          ],
          doc: {
            lead: '这一章讲深造与出口。',
            sections: [
              { id: 'exam', title: '考研', html: `<p>311 学硕 / 333 专硕；专业课重理论与儿童发展。</p>` },
              { id: 'job', title: '就业', html: `<p>幼儿园、早教、托育、儿童出版与产品、教研培训。</p>` }
            ],
            refs: [EDU_REFS.cnki]
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
