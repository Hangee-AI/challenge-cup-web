/* ==========================================================
   cs-intro-math.js · 计科：给「计算机导论与伦理」「高等数学（上）」补章节
   --------------------------------------------------------
   目标密度与「C 语言程序设计」一致：每门课 15 章，每章重点 + 3 题。
   做法：定位 cs-courses.js 建的占位模块，把 levels 换成真实章节，
   章节 id 由模块的全局序号决定（专业-m<全局序号>-l<章序号>）。
   ========================================================== */

/* 给某个占位课程装配章节（stageIdx 从 0 开始，name 必须与占位模块名一致） */
function registerCsCourse(stageIdx, name, chapters) {
  var MAJOR = 'engineering-计算机科学与技术';
  var TITLES = stageTitlesOf('engineering');
  var override = MAJOR_STAGE_OVERRIDES[MAJOR];
  if (!override) return false;
  var idx = 0;
  for (var s = 0; s < TITLES.length; s++) {
    var mods = override[TITLES[s]].modules;
    for (var i = 0; i < mods.length; i++) {
      if (s === stageIdx && mods[i].name === name) {
        mods[i].levels = chapters.map(function (ch, k) {
          DOCS[MAJOR + '-m' + idx + '-l' + k] = ch.doc;
          return {
            name: '第 ' + (k + 1) + ' 章 · ' + ch.title,
            brief: ch.brief,
            questions: ch.q,
            ready: true
          };
        });
        return true;
      }
      idx++;
    }
  }
  return false;
}

/* ---------------- 计算机导论与伦理（15 章） ---------------- */
registerCsCourse(0, '计算机导论与伦理', [
  {
    title: '计算机从哪来',
    brief: '从算盘到图灵机，再到冯·诺依曼：计算的历史是把"可计算"一步步变清楚的历史。',
    q: [
      { stem: '图灵机的理论意义在于：', options: ['造出了第一台电脑', '给出了"可计算"的严格定义', '发明了二进制', '提出了摩尔定律'], answer: 1, explain: '图灵用抽象机器定义了机械可计算的范围，是计算理论的地基。' },
      { stem: '冯·诺依曼结构的关键思想是：', options: ['程序与数据分开存放', '程序和数据存于同一存储器，按地址访问', '只用硬件不用软件', '并行计算'], answer: 1, explain: '存储程序思想，使计算机可通用。' },
      { stem: '摩尔定律描述的是：', options: ['价格每年翻倍', '集成电路上晶体管数量约每 18–24 个月翻一番', '网速翻倍', '内存容量每年减半'], answer: 1, explain: '经验规律，近年已放缓。' }
    ],
    doc: {
      lead: '这一章给一条时间线，让你知道今天这台机器是怎么被"想"出来的。',
      sections: [
        { id: 'history', title: '四个节点', html: `<ul><li>机械计算：差分机、穿孔卡</li><li>理论奠基：图灵机、丘奇论题</li><li>电子化：ENIAC、晶体管、集成电路</li><li>个人计算与互联网</li></ul>` },
        { id: 'idea', title: '一个核心思想', html: `<p>存储程序：把"怎么做"也变成数据存起来，机器因此通用。</p>
<div class="doc-tip">💡 今天你写的代码，本质是存在内存里的数据。</div>` }
      ],
      refs: [CS_REFS.entry]
    }
  },
  {
    title: '数据表示：二进制与编码',
    brief: '计算机只认 0 和 1：一切文字、图像、声音都要被编码。',
    q: [
      { stem: '十进制 13 的二进制是：', options: ['1011', '1101', '1110', '1001'], answer: 1, explain: '8+4+1=13，即 1101。' },
      { stem: '一个字节（byte）有多少位？', options: ['4 位', '8 位', '16 位', '32 位'], answer: 1, explain: '1 byte = 8 bits。' },
      { stem: 'UTF-8 的主要优点是：', options: ['定长编码', '兼容 ASCII 且能表示全球字符', '只能存中文', '占用空间固定'], answer: 1, explain: '变长编码，ASCII 部分与 ASCII 一致。' }
    ],
    doc: {
      lead: '这一章讲"信息如何变成比特"。',
      sections: [
        { id: 'binary', title: '进制与位', html: `<p>二进制、十六进制；位权展开；补码表示负数。</p>` },
        { id: 'encode', title: '编码', html: `<p>ASCII、GBK、UTF-8；图像（像素/压缩）、声音（采样）。</p>
<div class="doc-tip">⚠️ 乱码的本质是"用错了编码表"。</div>` }
      ],
      refs: [CS_REFS.entry]
    }
  },
  {
    title: '逻辑门与硬件',
    brief: '从与或非到加法器：所有计算都是逻辑门的组合。',
    q: [
      { stem: 'AND 门的输出为 1 的条件是：', options: ['任一输入为 1', '全部输入为 1', '全部输入为 0', '输入不同'], answer: 1, explain: '与门：全 1 才输出 1。' },
      { stem: '半加器能完成：', options: ['带进位的加法', '两个一位二进制数相加（和与进位）', '乘法', '除法'], answer: 1, explain: '两个一位相加，输出和与进位。' },
      { stem: '触发器（flip-flop）能存储：', options: ['一位二进制', '一个字节', '一条指令', '一个程序'], answer: 0, explain: '触发器是最基本的存储单元。' }
    ],
    doc: {
      lead: '这一章讲硬件的抽象层次。',
      sections: [
        { id: 'gates', title: '门电路', html: `<p>与、或、非、异或；真值表与布尔代数。</p>` },
        { id: 'layer', title: '层次', html: `<p>晶体管 → 门 → 组合/时序电路 → CPU → 系统。</p>` }
      ],
      refs: [CS_REFS.csapp]
    }
  },
  {
    title: '冯·诺依曼结构与存储层次',
    brief: 'CPU、内存、磁盘：速度差几个数量级，缓存来弥合。',
    q: [
      { stem: '存储层次从上到下，速度与容量分别：', options: ['变快、变大', '变慢、变大', '变慢、变小', '变快、变小'], answer: 1, explain: '寄存器→缓存→内存→磁盘，越往下越慢越大。' },
      { stem: 'CPU 执行指令的基本步骤是：', options: ['取指、译码、执行、写回', '编译、链接、运行', '读、写、删', '输入、处理、输出'], answer: 0, explain: '指令周期。' },
      { stem: '缓存（Cache）的作用是：', options: ['扩大内存', '缓解 CPU 与内存的速度差', '存文件', '散热'], answer: 1, explain: '利用局部性原理。' }
    ],
    doc: {
      lead: '这一章讲机器的骨架。',
      sections: [
        { id: 'structure', title: '五个部件', html: `<p>运算器、控制器、存储器、输入、输出；总线连接。</p>` },
        { id: 'memory', title: '局部性', html: `<p>时间局部性与空间局部性 → 缓存有效。</p>` }
      ],
      refs: [CS_REFS.csapp]
    }
  },
  {
    title: '操作系统在做什么',
    brief: '操作系统是硬件的管家：进程、内存、文件、设备。',
    q: [
      { stem: '操作系统的核心功能不包括：', options: ['进程管理', '内存管理', '文件管理', '编译源码'], answer: 3, explain: '编译由编译器完成。' },
      { stem: '进程与线程的关系是：', options: ['同一概念', '进程是资源分配单位，线程是调度单位', '线程更重', '进程在用户态'], answer: 1, explain: '线程共享进程资源。' },
      { stem: '虚拟内存的作用是：', options: ['增加物理内存', '让程序看到连续的地址空间', '加快磁盘', '压缩数据'], answer: 1, explain: '地址空间抽象与隔离。' }
    ],
    doc: {
      lead: '这一章讲 OS 的四大管理。',
      sections: [
        { id: 'four', title: '四件事', html: `<ul><li>进程/线程调度</li><li>内存与虚拟地址</li><li>文件系统</li><li>设备与中断</li></ul>` },
        { id: 'abstract', title: '本质', html: `<p>把复杂硬件抽象成简单接口，让程序不必关心细节。</p>` }
      ],
      refs: [CS_REFS.csapp]
    }
  },
  {
    title: '计算机网络基础',
    brief: '从网线到网页：分层让复杂系统可管理。',
    q: [
      { stem: 'TCP/IP 分层的典型四层是：', options: ['应用、传输、网络、链路', '物理、数据、网络、会话', '输入、处理、输出、存储', '前端、后端、数据库、运维'], answer: 0, explain: '应用/传输/网络/链路。' },
      { stem: 'TCP 与 UDP 的关键区别是：', options: ['速度', '是否可靠、面向连接', '是否加密', '是否分片'], answer: 1, explain: 'TCP 可靠有序，UDP 无连接不保证。' },
      { stem: 'DNS 的作用是：', options: ['分配 IP', '把域名解析成 IP 地址', '加密流量', '路由选择'], answer: 1, explain: '域名系统。' }
    ],
    doc: {
      lead: '这一章讲分层的直觉。',
      sections: [
        { id: 'layers', title: '分层', html: `<p>每层只关心自己的一段，接口清晰；封装与解封装。</p>` },
        { id: 'web', title: '一次访问', html: `<p>DNS → TCP 握手 → HTTP 请求 → 响应 → 渲染。</p>
<div class="doc-tip">💡 排查网络问题，按层自下而上查。</div>` }
      ],
      refs: [CS_REFS.csapp]
    }
  },
  {
    title: '数据库与信息管理',
    brief: '数据多了就要管理：表、键、索引、事务。',
    q: [
      { stem: '关系数据库中，主键的作用是：', options: ['加快所有查询', '唯一标识一行记录', '加密数据', '建立备份'], answer: 1, explain: '唯一性与非空。' },
      { stem: '索引的主要代价是：', options: ['查询变慢', '占用空间、写入变慢', '不能排序', '无法回滚'], answer: 1, explain: '以空间和写性能换读性能。' },
      { stem: '事务的 ACID 中，"隔离性"指：', options: ['数据不丢失', '并发事务互不干扰', '满足约束', '提交即持久'], answer: 1, explain: '隔离级别决定干扰程度。' }
    ],
    doc: {
      lead: '这一章讲关系模型与基本操作。',
      sections: [
        { id: 'model', title: '关系模型', html: `<p>表、行、列；主键、外键；规范化减少冗余。</p>` },
        { id: 'sql', title: '增删改查', html: `<p>SELECT / INSERT / UPDATE / DELETE；JOIN 与聚合。</p>` }
      ],
      refs: [CS_REFS.csapp]
    }
  },
  {
    title: '软件工程与开发流程',
    brief: '写代码只是开始：需求、设计、测试、维护才是大头。',
    q: [
      { stem: '瀑布模型与敏捷开发的主要区别是：', options: ['是否有测试', '是否强调迭代与快速反馈', '是否写文档', '是否用 Git'], answer: 1, explain: '敏捷以迭代和反馈应对变化。' },
      { stem: '版本控制工具（如 Git）的核心价值是：', options: ['自动写代码', '记录历史、支持协作与回溯', '加速编译', '压缩代码'], answer: 1, explain: '历史与协作。' },
      { stem: '单元测试的作用是：', options: ['替代集成测试', '验证最小代码单元的行为', '提高运行速度', '生成文档'], answer: 1, explain: '快速定位问题。' }
    ],
    doc: {
      lead: '这一章讲工程化。',
      sections: [
        { id: 'process', title: '流程', html: `<p>需求 → 设计 → 实现 → 测试 → 部署 → 维护；迭代式开发。</p>` },
        { id: 'practice', title: '实践', html: `<p>版本控制、代码评审、持续集成、自动化测试。</p>` }
      ],
      refs: [CS_REFS.tools]
    }
  },
  {
    title: '算法与程序设计思想',
    brief: '程序 = 数据结构 + 算法：先想清楚，再写。',
    q: [
      { stem: '算法的时间复杂度 O(n log n) 通常出现在：', options: ['冒泡排序', '归并/快速排序', '线性查找', '哈希查找'], answer: 1, explain: '分治类排序。' },
      { stem: '递归算法的两个必要部分是：', options: ['循环与判断', '基准情形与递归步骤', '输入与输出', '变量与常量'], answer: 1, explain: '缺基准会无限递归。' },
      { stem: '"分治"的基本步骤是：', options: ['分解、解决、合并', '输入、处理、输出', '读、写、存', '排序、查找'], answer: 0, explain: 'divide-conquer-combine。' }
    ],
    doc: {
      lead: '这一章讲三种基本思想。',
      sections: [
        { id: 'ideas', title: '三种思想', html: `<ul><li>分治：拆成子问题</li><li>贪心：局部最优</li><li>动态规划：记住子问题结果</li></ul>` },
        { id: 'complexity', title: '复杂度', html: `<p>用大 O 描述增长趋势；空间换时间常见。</p>` }
      ],
      refs: [CS_REFS.algo]
    }
  },
  {
    title: '人工智能概览',
    brief: 'AI 不是魔法：搜索、学习、推理三类方法。',
    q: [
      { stem: '监督学习与无监督学习的区别是：', options: ['是否用神经网络', '训练数据是否有标签', '是否需要 GPU', '是否在线'], answer: 1, explain: '有标签 vs 无标签。' },
      { stem: '大语言模型的基本训练目标是：', options: ['分类图片', '预测下一个词（自监督）', '强化学习唯一', '规则匹配'], answer: 1, explain: '自回归语言建模。' },
      { stem: 'AI 生成内容带来的主要伦理问题是：', options: ['耗电', '版权归属、真实性与责任', '速度慢', '价格高'], answer: 1, explain: '三类典型争议。' }
    ],
    doc: {
      lead: '这一章给 AI 的坐标系。',
      sections: [
        { id: 'three', title: '三类方法', html: `<p>搜索（博弈/规划）、学习（数据驱动）、推理（知识表示）。</p>` },
        { id: 'llm', title: '大模型', html: `<p>预训练 + 微调 + 对齐；幻觉与可解释性是主要挑战。</p>` }
      ],
      refs: [CS_REFS.entry]
    }
  },
  {
    title: '计算思维',
    brief: '把问题变成可执行步骤，是这个专业的通用能力。',
    q: [
      { stem: '计算思维的核心不包括：', options: ['抽象', '分解', '算法化', '背诵结论'], answer: 3, explain: '计算思维强调抽象、分解、模式识别与算法。' },
      { stem: '"抽象"在计算思维中指的是：', options: ['把事情说得模糊', '忽略细节、保留与问题相关的特征', '简化界面', '随机选择'], answer: 1, explain: '建模的核心动作。' },
      { stem: '把一个生活问题变成程序，第一步通常是：', options: ['写代码', '明确输入输出与约束', '选语言', '装环境'], answer: 1, explain: '先定义问题。' }
    ],
    doc: {
      lead: '这一章讲"怎么想"。',
      sections: [
        { id: 'four', title: '四个动作', html: `<ol><li>分解</li><li>模式识别</li><li>抽象</li><li>算法设计</li></ol>` },
        { id: 'use', title: '怎么练', html: `<p>拿日常任务练：把它写成"输入—步骤—输出"。</p>` }
      ],
      refs: [CS_REFS.plan]
    }
  },
  {
    title: '信息安全基础',
    brief: '机密性、完整性、可用性：安全的三根柱子。',
    q: [
      { stem: 'CIA 三要素指的是：', options: ['机密性、完整性、可用性', '成本、影响、审计', '控制、隔离、认证', '加密、签名、备份'], answer: 0, explain: 'Confidentiality/Integrity/Availability。' },
      { stem: '对称加密与非对称加密的关键区别是：', options: ['速度', '是否使用同一把密钥', '是否公开', '是否需要网络'], answer: 1, explain: '对称一把钥匙，非对称公私钥。' },
      { stem: 'SQL 注入的防御手段不包括：', options: ['参数化查询', '输入校验', '最小权限', '把错误信息全部打印给用户'], answer: 3, explain: '泄露错误信息反而助长攻击。' }
    ],
    doc: {
      lead: '这一章讲基本概念与常见风险。',
      sections: [
        { id: 'cia', title: '三要素', html: `<p>机密性（不被看）、完整性（不被改）、可用性（用得着）。</p>` },
        { id: 'risk', title: '常见风险', html: `<p>弱口令、注入、钓鱼、越权；防御靠分层与最小权限。</p>` }
      ],
      refs: [CS_REFS.tools]
    }
  },
  {
    title: '信息技术职业伦理',
    brief: '能做的，不一定该做。',
    q: [
      { stem: '工程师发现产品存在隐私风险，最恰当的做法是：', options: ['装作不知道', '内部报告并推动整改', '直接公开代码', '辞职'], answer: 1, explain: '先走内部渠道，必要时依规上报。' },
      { stem: '"知情同意"在数据收集中意味着：', options: ['随便收集', '告知用途并取得同意', '只要不违法即可', '买数据就行'], answer: 1, explain: '目的限定与同意。' },
      { stem: '算法歧视的典型来源是：', options: ['代码写法', '训练数据中的历史偏差', '编程语言', '服务器性能'], answer: 1, explain: '数据偏差被模型放大。' }
    ],
    doc: {
      lead: '这一章讲三条伦理原则。',
      sections: [
        { id: 'principles', title: '三原则', html: `<ul><li>不伤害</li><li>知情同意</li><li>可问责</li></ul>` },
        { id: 'case', title: '情境判断', html: `<p>问三句：影响谁？他们同意吗？出问题谁负责？</p>` }
      ],
      refs: [CS_REFS.plan]
    }
  },
  {
    title: '知识产权与隐私',
    brief: '代码有版权，数据有边界。',
    q: [
      { stem: '开源许可证 MIT 与 GPL 的关键区别是：', options: ['是否收费', 'GPL 要求衍生作品同样开源（传染性）', '是否允许商用', '是否需要署名'], answer: 1, explain: 'Copyleft 与宽松许可。' },
      { stem: '个人信息保护的基本原则不包括：', options: ['最小必要', '目的限定', '公开全部数据', '可删除'], answer: 2, explain: '公开全部数据违背保护原则。' },
      { stem: '使用他人代码时，正确做法是：', options: ['直接复制', '遵守许可证并注明来源', '改几个变量名', '删除注释'], answer: 1, explain: '许可证与署名义务。' }
    ],
    doc: {
      lead: '这一章讲两条边界。',
      sections: [
        { id: 'ip', title: '知识产权', html: `<p>著作权自动产生；开源许可证决定使用方式；专利保护技术方案。</p>` },
        { id: 'privacy', title: '隐私', html: `<p>最小必要、目的限定、可删除、可携带；未成年人更严格。</p>` }
      ],
      refs: [CS_REFS.tools]
    }
  },
  {
    title: '工程规范与学术诚信',
    brief: '把事做对，也把事说清楚。',
    q: [
      { stem: '代码评审的主要目的是：', options: ['挑错惩罚', '提升质量与共享知识', '考核绩效', '延长工期'], answer: 1, explain: '质量与传承。' },
      { stem: '引用他人成果时，正确做法是：', options: ['改写即可', '注明来源', '口头提一句', '不写'], answer: 1, explain: '引用规范。' },
      { stem: '提交信息写得清楚的好处是：', options: ['显得专业', '便于回溯与协作', '加快编译', '减少冲突'], answer: 1, explain: '可维护性。' }
    ],
    doc: {
      lead: '这一章讲职业习惯。',
      sections: [
        { id: 'norms', title: '三条规范', html: `<ul><li>代码可读、可测、可维护</li><li>引用标注来源</li><li>提交与文档写清楚</li></ul>` },
        { id: 'honesty', title: '诚信', html: `<p>不伪造数据、不抄袭、不隐瞒缺陷；出问题及时同步。</p>` }
      ],
      refs: [CS_REFS.tools]
    }
  }
]);

/* ---------------- 高等数学（上）（15 章） ---------------- */
registerCsCourse(0, '高等数学（上）', [
  {
    title: '函数与初等函数',
    brief: '高数的研究对象是函数：定义域、值域、单调、奇偶、周期。',
    q: [
      { stem: '函数 y = ln(x−1) 的定义域是：', options: ['x > 0', 'x > 1', 'x ≥ 1', '全体实数'], answer: 1, explain: '对数要求真数大于 0。' },
      { stem: '下列是奇函数的是：', options: ['x²', 'cos x', 'x³', 'e^x'], answer: 2, explain: 'x³ 满足 f(−x) = −f(x)。' },
      { stem: '复合函数 f(g(x)) 成立的条件是：', options: ['定义域无要求', 'g 的值域落在 f 的定义域内', '两者都单调', '都连续'], answer: 1, explain: '内层输出要在外层定义域内。' }
    ],
    doc: {
      lead: '这一章复习函数的性质与五类基本初等函数。',
      sections: [
        { id: 'basic', title: '五类函数', html: `<p>幂、指、对、三角、反三角；图像与性质要熟。</p>` },
        { id: 'compose', title: '复合与反函数', html: `<p>复合看定义域衔接；反函数关于 y=x 对称。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '数列极限',
    brief: '极限描述"越来越接近"：ε-N 语言是第一道关。',
    q: [
      { stem: 'lim(n→∞)(1+1/n)^n 等于：', options: ['1', 'e', '0', '∞'], answer: 1, explain: '重要极限，自然常数 e。' },
      { stem: '若数列收敛，则其极限：', options: ['可能不唯一', '唯一', '一定为 0', '一定为正'], answer: 1, explain: '极限唯一性。' },
      { stem: 'lim(n→∞)(−1)^n 的结果是：', options: ['1', '−1', '0', '不存在'], answer: 3, explain: '在 ±1 间振荡，不收敛。' }
    ],
    doc: {
      lead: '这一章讲收敛的定义与常用极限。',
      sections: [
        { id: 'def', title: 'ε-N 定义', html: `<p>对任意 ε>0，存在 N，使 n>N 时 |a_n − a| < ε。</p>` },
        { id: 'theorems', title: '常用结论', html: `<p>夹逼定理、单调有界必有极限、两个重要极限。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '函数极限',
    brief: '数列极限的连续版本：x 趋于某点时函数怎么走。',
    q: [
      { stem: 'lim(x→0) sinx/x 等于：', options: ['0', '1', '∞', '不存在'], answer: 1, explain: '重要极限。' },
      { stem: '极限存在与左右极限的关系是：', options: ['只需右极限', '左右极限存在且相等', '只需左极限', '无关'], answer: 1, explain: '充要条件。' },
      { stem: 'lim(x→∞)(1+1/x)^x 等于：', options: ['1', 'e', '0', '∞'], answer: 1, explain: '第二个重要极限。' }
    ],
    doc: {
      lead: '这一章讲极限的计算方法。',
      sections: [
        { id: 'methods', title: '四类方法', html: `<p>代入、因式分解约去零因子、等价无穷小、洛必达（后续）。</p>` },
        { id: 'equiv', title: '等价无穷小', html: `<p>x→0 时 sinx ~ x，ln(1+x) ~ x，1−cosx ~ x²/2。</p>
<div class="doc-tip">⚠️ 等价替换只能用于乘除，不能随意用于加减。</div>` }
      ],
      refs: []
    }
  },
  {
    title: '连续与间断',
    brief: '连续 = 极限等于函数值；间断点分四类。',
    q: [
      { stem: '函数在 x0 处连续的定义是：', options: ['有定义', '极限存在且等于函数值', '可导', '单调'], answer: 1, explain: '三要素合一。' },
      { stem: '可去间断点的特征是：', options: ['左右极限都存在且相等，但不等于函数值', '极限不存在', '趋于无穷', '振荡'], answer: 0, explain: '补定义即可连续。' },
      { stem: '闭区间上连续函数的性质不包括：', options: ['有界性', '最值定理', '介值定理', '可导性'], answer: 3, explain: '连续不保证可导。' }
    ],
    doc: {
      lead: '这一章讲连续与间断。',
      sections: [
        { id: 'types', title: '间断点', html: `<ul><li>可去</li><li>跳跃</li><li>无穷</li><li>振荡</li></ul>` },
        { id: 'theorem', title: '闭区间性质', html: `<p>有界、最值、介值、零点定理。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '导数的定义',
    brief: '导数是变化率，也是切线斜率。',
    q: [
      { stem: 'f′(x0) 的定义式是：', options: ['lim(h→0)[f(x0+h)−f(x0)]/h', 'f(x0)/x0', 'lim(f(x))', '[f(b)−f(a)]/(b−a)'], answer: 0, explain: '差商的极限。' },
      { stem: '函数在一点可导，则在该点：', options: ['必连续', '必不连续', '连续但不可导', '无定义'], answer: 0, explain: '可导 ⇒ 连续，反之不成立。' },
      { stem: 'y=|x| 在 x=0 处：', options: ['可导', '连续但不可导', '不连续', '无定义'], answer: 1, explain: '左右导数不等（−1 与 1）。' }
    ],
    doc: {
      lead: '这一章讲导数的定义与几何意义。',
      sections: [
        { id: 'def', title: '定义', html: `<p>差商极限；左导数与右导数相等才可导。</p>` },
        { id: 'geo', title: '几何', html: `<p>切线斜率；物理上是瞬时速度。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '求导法则',
    brief: '把求导变成查表加规则。',
    q: [
      { stem: '(x^n)′ 等于：', options: ['n x^(n−1)', 'x^(n+1)', 'n x^n', 'x^n / n'], answer: 0, explain: '幂函数求导。' },
      { stem: '(sin x)′ 等于：', options: ['cos x', '−cos x', 'sin x', '−sin x'], answer: 0, explain: '基本公式。' },
      { stem: '乘积法则 (uv)′ 等于：', options: ['u′v′', 'u′v + uv′', 'u′v − uv′', 'u′/v′'], answer: 1, explain: '莱布尼茨法则。' }
    ],
    doc: {
      lead: '这一章讲基本公式与四则、复合求导。',
      sections: [
        { id: 'table', title: '基本表', html: `<p>(x^a)′=ax^(a−1)、(e^x)′=e^x、(lnx)′=1/x、(sinx)′=cosx、(cosx)′=−sinx。</p>` },
        { id: 'chain', title: '链式法则', html: `<p>[f(g(x))]′ = f′(g(x))·g′(x)。复合函数求导的核心。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '高阶导数与隐函数求导',
    brief: '二阶导描述变化率的变化；隐函数要两边同时对 x 求导。',
    q: [
      { stem: '加速度是位置的：', options: ['一阶导', '二阶导', '三阶导', '原函数'], answer: 1, explain: '速度的导数是加速度。' },
      { stem: '隐函数求导的基本做法是：', options: ['解出 y 再求导', '方程两边对 x 求导，把 y 看作 x 的函数', '直接套公式', '取对数'], answer: 1, explain: '链式法则的应用。' },
      { stem: '参数方程 x=t², y=t³ 的 dy/dx 是：', options: ['3t/2', '3t²/(2t)=3t/2', '2t/3t²', 't'], answer: 1, explain: '(dy/dt)/(dx/dt) = 3t²/(2t) = 3t/2。' }
    ],
    doc: {
      lead: '这一章讲两种进阶求导。',
      sections: [
        { id: 'higher', title: '高阶导数', html: `<p>逐次求导；记号 y″、d²y/dx²。</p>` },
        { id: 'implicit', title: '隐函数与参数方程', html: `<p>隐函数两边求导；参数方程用 dy/dx = (dy/dt)/(dx/dt)。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '微分与近似',
    brief: '微分是"线性主部"，也是近似计算的工具。',
    q: [
      { stem: 'dy 与 Δy 的关系是：', options: ['完全相等', 'dy 是 Δy 的线性主部，差为高阶无穷小', '无关系', 'dy 更大'], answer: 1, explain: '可微的定义。' },
      { stem: '用微分近似 √1.02 约为：', options: ['1.01', '1.02', '1.005', '1.2'], answer: 0, explain: '1 + 0.5×0.02 = 1.01。' },
      { stem: 'f 在 x0 可微的充要条件是：', options: ['连续', '可导', '有定义', '单调'], answer: 1, explain: '一元函数中可微与可导等价。' }
    ],
    doc: {
      lead: '这一章讲微分的定义与近似。',
      sections: [
        { id: 'def', title: '定义', html: `<p>dy = f′(x)dx；它是 Δy 的线性近似。</p>` },
        { id: 'approx', title: '近似', html: `<p>f(x0+Δx) ≈ f(x0) + f′(x0)Δx。</p>
<div class="doc-tip">💡 Δx 越小，近似越好。</div>` }
      ],
      refs: []
    }
  },
  {
    title: '微分中值定理',
    brief: '罗尔、拉格朗日、柯西：把局部导数与整体变化联系起来。',
    q: [
      { stem: '拉格朗日中值定理的条件是：', options: ['闭区间连续、开区间可导', '只需连续', '只需可导', '无要求'], answer: 0, explain: '两个条件缺一不可。' },
      { stem: '罗尔定理比拉格朗日多出的条件是：', options: ['端点函数值相等', '函数为正', '二阶可导', '单调'], answer: 0, explain: 'f(a)=f(b)。' },
      { stem: '中值定理中 ξ 的位置：', options: ['一定在端点', '在开区间内某点', '一定在中点', '不存在'], answer: 1, explain: '存在性，不指定位置。' }
    ],
    doc: {
      lead: '这一章讲三个定理的条件与用途。',
      sections: [
        { id: 'three', title: '三个定理', html: `<ul><li>罗尔：端点相等 ⇒ 中间有水平切线</li><li>拉格朗日：割线斜率 = 某点切线斜率</li><li>柯西：两个函数之比</li></ul>` },
        { id: 'use', title: '用途', html: `<p>证明不等式、证明方程根的存在与唯一、估计误差。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '洛必达法则',
    brief: '0/0 与 ∞/∞ 型极限的标准解法。',
    q: [
      { stem: '洛必达法则适用于：', options: ['所有极限', '0/0 或 ∞/∞ 型', '只有 0/0', '只有 ∞/∞'], answer: 1, explain: '需先判断型。' },
      { stem: 'lim(x→0) sinx/x 用洛必达得到：', options: ['1', '0', '∞', '不存在'], answer: 0, explain: '求导后 cosx/1 → 1。' },
      { stem: '使用洛必达前必须确认：', options: ['函数单调', '分子分母同时趋于 0 或 ∞，且导数之比极限存在', '连续', '可积'], answer: 1, explain: '条件不满足不能用。' }
    ],
    doc: {
      lead: '这一章讲使用条件与常见陷阱。',
      sections: [
        { id: 'rule', title: '法则', html: `<p>lim f/g = lim f′/g′（在满足条件时可重复使用）。</p>` },
        { id: 'trap', title: '陷阱', html: `<p>非未定式硬用会出错；导数之比振荡时法则失效（如 x+sinx）/x。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '单调性与极值',
    brief: '一阶导定增减，二阶导定凹凸。',
    q: [
      { stem: 'f′(x) > 0 时函数：', options: ['递减', '递增', '不变', '有极值'], answer: 1, explain: '导数符号决定单调性。' },
      { stem: 'f′(x0)=0 且 f″(x0)<0，则 x0 是：', options: ['极小值点', '极大值点', '拐点', '不可导点'], answer: 1, explain: '二阶导为负 → 凹 → 极大。' },
      { stem: '极值点一定满足：', options: ['f′=0 或不可导', 'f″=0', 'f=0', '连续'], answer: 0, explain: '驻点或不可导点。' }
    ],
    doc: {
      lead: '这一章讲用导数研究函数。',
      sections: [
        { id: 'mono', title: '单调与极值', html: `<p>求导 → 找驻点与不可导点 → 判号 → 定单调与极值。</p>` },
        { id: 'concave', title: '凹凸', html: `<p>f″>0 凹（下凸），f″<0 凸；变号点为拐点。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '函数作图与应用',
    brief: '把单调、极值、凹凸、渐近线合成一张图。',
    q: [
      { stem: '垂直渐近线通常出现在：', options: ['x 趋于某点函数趋于无穷', 'x 趋于无穷', 'y=0', '原点'], answer: 0, explain: '如 1/x 在 x=0。' },
      { stem: '水平渐近线存在意味着：', options: ['函数无界', 'x 趋于无穷时函数趋于常数', '函数周期', '函数为奇'], answer: 1, explain: '极限为常数。' },
      { stem: '最值问题在闭区间上，必须先考虑：', options: ['端点值', '无穷远', '导数不存在处仅此', '对称性'], answer: 0, explain: '端点与驻点都要比较。' }
    ],
    doc: {
      lead: '这一章讲作图与最优化。',
      sections: [
        { id: 'steps', title: '作图五步', html: `<ol><li>定义域与对称性</li><li>一阶导：单调与极值</li><li>二阶导：凹凸与拐点</li><li>渐近线</li><li>关键点描图</li></ol>` },
        { id: 'opt', title: '最值', html: `<p>闭区间比较端点与驻点；实际问题先建模再求导。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '不定积分',
    brief: '求导的逆运算：结果带常数 C。',
    q: [
      { stem: '∫x²dx 等于：', options: ['x³/3 + C', '2x + C', 'x³ + C', '3x² + C'], answer: 0, explain: '幂函数积分公式。' },
      { stem: '∫(1/x)dx 等于：', options: ['ln|x| + C', 'x + C', '−1/x² + C', 'e^x + C'], answer: 0, explain: '注意绝对值。' },
      { stem: '不定积分结果中的 C 表示：', options: ['常数项，不可省略', '积分变量', '误差', '系数'], answer: 0, explain: '原函数族。' }
    ],
    doc: {
      lead: '这一章讲基本积分表与性质。',
      sections: [
        { id: 'table', title: '基本表', html: `<p>∫x^a dx = x^(a+1)/(a+1) + C（a≠−1）；∫e^x dx = e^x + C；∫1/x dx = ln|x| + C。</p>` },
        { id: 'linear', title: '线性性质', html: `<p>∫(af+bg) = a∫f + b∫g。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '换元与分部积分',
    brief: '两种核心积分技巧。',
    q: [
      { stem: '∫2x·cos(x²)dx 用换元 u=x² 后变为：', options: ['∫cos u du', '∫2u cos u du', '∫cos u /2 du', '∫sin u du'], answer: 0, explain: 'du=2x dx，正好凑成 ∫cos u du。' },
      { stem: '分部积分公式是：', options: ['∫u dv = uv − ∫v du', '∫u dv = uv + ∫v du', '∫u dv = ∫u ∫v', '∫u dv = u′v′'], answer: 0, explain: '由乘积求导法则推出。' },
      { stem: '∫x e^x dx 适合：', options: ['换元法', '分部积分（u=x, dv=e^x dx）', '直接查表', '不能积'], answer: 1, explain: '多项式乘指数，分部。' }
    ],
    doc: {
      lead: '这一章讲两类技巧的选择。',
      sections: [
        { id: 'sub', title: '换元', html: `<p>第一类：凑微分；第二类：三角换元处理根式。</p>` },
        { id: 'parts', title: '分部', html: `<p>∫u dv = uv − ∫v du；口诀"反对幂三指"选 u。</p>` }
      ],
      refs: []
    }
  },
  {
    title: '定积分及其应用',
    brief: '面积、总量、平均值：定积分是"无限细分再求和"。',
    q: [
      { stem: '∫₀¹ x dx 等于：', options: ['1', '1/2', '0', '2'], answer: 1, explain: '原函数 x²/2 在 0 到 1 的差。' },
      { stem: '牛顿-莱布尼茨公式把定积分与：', options: ['导数', '原函数联系起来', '极限无关', '级数'], answer: 1, explain: 'F(b)−F(a)。' },
      { stem: '定积分表示面积时，若 f 在区间上为负，则：', options: ['面积为正', '积分为负值，面积为绝对值', '无意义', '积分为 0'], answer: 1, explain: '代数和与几何面积的区别。' }
    ],
    doc: {
      lead: '这一章讲定积分的计算与应用。',
      sections: [
        { id: 'nlb', title: '计算公式', html: `<p>牛顿-莱布尼茨：∫ₐᵇ f = F(b) − F(a)；换元与分部同样适用。</p>` },
        { id: 'app', title: '应用', html: `<p>平面面积、旋转体体积、弧长、物理中的功与平均値。</p>` }
      ],
      refs: []
    }
  }
]);
