/* ==========================================================
   pad-real-mathmisc.js · 把补齐的占位关做成真题
   高等代数（一）/（二）/高等代数（同名占位关，一份内容 + 别名覆盖）
   数学物理基础 / 数学物理方法
   综合英语（一）/（二）
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_MATHW = { name: 'Wolfram MathWorld', url: 'https://mathworld.wolfram.com/' };
  var REF_CEFR = { name: 'CEFR（欧洲语言共同参考框架）', url: 'https://www.coe.int/en/web/common-european-framework-reference-languages' };

  function mk(title, brief, q, lead, s1, s2, refs) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: refs || [REF_MATHW]
      }
    };
  }

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  /* ---------- 1. 高等代数 ---------- */
  var ALG = [
    mk('第 1 章 · 多项式：整除与最大公因式', '整除理论与辗转相除。', [
      { stem: '设 f(x)、g(x) 为数域 P 上的多项式且 g(x) ≠ 0，则"g 整除 f"的含义是：', options: ['存在 h(x) ∈ P[x]，使 f = g·h', 'f 的次数大于 g', 'f 与 g 有公共根', 'f 除以 g 余数为 1'], answer: 0, explain: '带余除法给出 f = q·g + r（r = 0 或 deg r < deg g），r = 0 时即为整除。' },
      { stem: '求两个多项式最大公因式的标准方法是：', options: ['辗转相除法（欧几里得算法）', '直接观察', '因式分解猜测', '求导'], answer: 0, explain: '反复用带余除法，最后一个非零余式即为最大公因式（差一个非零常数倍）。' },
      { stem: '关于互素，下列说法正确的是：', options: ['f 与 g 互素当且仅当存在 u、v 使 u·f + v·g = 1', '互素即二者都是不可约多项式', '互素必然有一个为零多项式', '互素与最大公因式无关'], answer: 0, explain: '这是裴蜀（Bézout）等式，是互素判定与证明的重要工具。' }
    ], '这一章建立多项式运算的基础。',
      { t: '整除', h: '<ul><li>带余除法：f = q·g + r，r = 0 或 deg r &lt; deg g；r = 0 即整除。</li><li>整除性质：传递性、与数域扩大无关（整除关系不因数域扩张而改变）。</li></ul>' },
      { t: '最大公因式', h: '<ul><li>(f, g) 由辗转相除法求得；互素 ⇔ (f, g) = 1 ⇔ 存在 u、v 使 uf + vg = 1。</li><li>不可约多项式类比素数，因式分解具有唯一性（至多差非零常数倍与次序）。</li></ul>' },
      [REF_MATHW]),

    mk('第 2 章 · 行列式：行列式的性质与展开', '性质与计算方法。', [
      { stem: '下列关于行列式性质的说法错误的是：', options: ['交换两行，行列式不变', '交换两行，行列式变号', '某行乘以 k，行列式乘以 k', '把一行的 k 倍加到另一行，行列式不变'], answer: 0, explain: '换行变号是基本性质；倍加不变是化简行列式最常用的操作。' },
      { stem: '行列式按第 i 行展开的公式是：', options: ['D = Σ a(ij)·A(ij)（A 为代数余子式）', 'D = Σ a(ij)·M(ij)（M 为余子式）', 'D = Σ a(ij) 之和', 'D = Π a(ij) 之积'], answer: 0, explain: '代数余子式 A(ij) = (−1)^(i+j)·M(ij)；常先倍加造零再展开以简化计算。' },
      { stem: 'n 阶方阵 A 可逆的充要条件是：', options: ['|A| ≠ 0', 'A 的某一行为零', 'A 对称', 'A 的阶数为偶数'], answer: 0, explain: '还有等价条件：秩为 n、行（列）向量线性无关、齐次方程组只有零解；且 |AB| = |A|·|B|。' }
    ], '这一章把行列式算得又快又准。',
      { t: '性质', h: '<ul><li>换行变号、倍乘整行、倍加不变；转置不变；两行相同则行列式为 0。</li><li>三角形行列式等于对角线元素之积；|AB| = |A|·|B|。</li></ul>' },
      { t: '展开', h: '<ul><li>按行（列）展开：D = Σ a(ij)·A(ij)，A(ij) = (−1)^(i+j)·M(ij)。</li><li>技巧：先倍加造零再展开；特殊行列式如范德蒙德行列式有闭式结果。</li></ul>' },
      [REF_MATHW])
  ];
  G.REAL_PAD['高等代数'] = set(ALG);
  G.REAL_PAD_ALIAS['高等代数（一）'] = '高等代数';
  G.REAL_PAD_ALIAS['高等代数（二）'] = '高等代数';
  G.REAL_PAD_ALIAS['线性代数与高等代数'] = '高等代数';

  /* ---------- 2. 数学物理基础 / 数学物理方法 ---------- */
  var MPHYS = [
    mk('第 1 章 · 复变函数基础：解析函数', '解析性与 C-R 条件。', [
      { stem: '函数 f(z) 在点 z₀ 解析的含义是：', options: ['在 z₀ 的某个邻域内处处可导', '仅在 z₀ 一点可导', '处处连续', '处处有定义'], answer: 0, explain: '解析要求邻域内可导，比"某点可导"更强；这是复分析的核心概念。' },
      { stem: '设 f(z) = u(x, y) + i·v(x, y)，则 f 可导的必要条件（C-R 方程）是：', options: ['u_x = v_y 且 u_y = −v_x', 'u_x = v_x 且 u_y = v_y', 'u_x = −v_y 且 u_y = v_x', 'u_x + v_y = 0'], answer: 0, explain: '柯西—黎曼方程配合偏导连续，即可保证在该邻域解析。' },
      { stem: '下列函数中处处解析的是：', options: ['e^z', 'z̄（共轭）', '|z|', 'Re(z)'], answer: 0, explain: 'e^z、sin z、cos z 与多项式都是整函数；共轭、模与实部处处不满足 C-R 条件。' }
    ], '这一章把微积分推广到复数域。',
      { t: '解析性', h: '<ul><li>定义：在 z₀ 的邻域内可导称为在 z₀ 解析；区域上处处解析称解析函数。</li><li>C-R 方程：u_x = v_y，u_y = −v_x（偏导连续时为充分必要条件）。</li></ul>' },
      { t: '积分与级数', h: '<ul><li>柯西积分定理：解析函数沿闭路积分为零（单连通区域）。</li><li>柯西积分公式；解析函数可展开为幂级数（泰勒/洛朗级数）。</li></ul>' },
      [REF_MATHW]),

    mk('第 2 章 · 傅里叶级数与积分：级数展开', '级数与变换。', [
      { stem: '周期为 2π 的函数 f(x) 展开为傅里叶级数时，其系数由积分确定，其中余弦项系数 a_n 对应：', options: ['(1/π)∫ f(x)cos(nx) dx（一个周期上积分）', 'f(x) 的最大值', 'f(x) 的平均值的一半', 'f(x) 的导数'], answer: 0, explain: 'a₀ 常写成 (1/π)∫f dx，故平均值应取 a₀/2；正弦项系数 b_n 同理用 sin(nx)。' },
      { stem: '关于傅里叶级数的收敛，下列说法正确的是：', options: ['满足狄利克雷条件时，级数收敛于连续点的函数值、间断点处收敛于左右极限的平均值', '任意函数都一致收敛', '处处收敛到函数值', '永远不会收敛'], answer: 0, explain: '狄利克雷条件包括分段光滑、有限个极值点与间断点等工程常见函数均满足。' },
      { stem: '在间断点附近出现的傅里叶级数振荡上冲现象被称为：', options: ['吉布斯现象', '多普勒效应', '走样', '边界层效应'], answer: 0, explain: '增加项数不能消除该上冲幅度（约 9%），只会使其变窄。' }
    ], '这一章把复杂波形拆成简谐波。',
      { t: '傅里叶级数', h: '<ul><li>周期函数展开：f(x) = a₀/2 + Σ(a_n cos nx + b_n sin nx)，系数由积分给出。</li><li>奇偶性：奇函数只有正弦项，偶函数只有余弦项。</li></ul>' },
      { t: '收敛与应用', h: '<ul><li>狄利克雷条件与收敛结论；间断点附近存在吉布斯现象。</li><li>傅里叶变换用于信号频谱分析、求解热传导与波动方程等定解问题。</li></ul>' },
      [REF_MATHW])
  ];
  G.REAL_PAD['数学物理基础'] = set(MPHYS);
  G.REAL_PAD_ALIAS['数学物理方法'] = '数学物理基础';
  G.REAL_PAD_ALIAS['数学物理方程'] = '数学物理基础';

  /* ---------- 3. 综合英语（一）/（二） ---------- */
  var ENGLISH = [
    mk('第 1 章 · 语言基础：词汇与搭配', '词汇学习与搭配。', [
      { stem: '语言学中"collocation（搭配）"指的是：', options: ['词与词经常共同出现的固定组合（如 make a decision）', '同义词替换', '词根词缀', '句子成分'], answer: 0, explain: '掌握搭配比孤立背单词更能产出自然、地道的语言。' },
      { stem: '下列做法对扩大有效词汇量最有帮助的是：', options: ['在语境中按词块学习并反复使用', '只背中文释义', '只抄写单词表', '只记拼写'], answer: 0, explain: '结合例句、搭配与输出练习（造句、写作、口语）才能转化为可用词汇。' },
      { stem: 'affect 与 effect 的常见区别是：', options: ['affect 多作动词（影响），effect 多作名词（效果）', '二者完全可互换', 'effect 只能作动词', 'affect 只能作名词'], answer: 0, explain: 'effect 作动词时意为"实现、促成"（如 effect change），但远不如其名词用法常见。' }
    ], '这一章打词汇与搭配的底子。',
      { t: '词汇', h: '<ul><li>词块与搭配优先：动宾、形名、固定短语；注意语域与文体。</li><li>策略：语境记忆、词根词缀、间隔重复与主动输出。</li></ul>' },
      { t: '辨析', h: '<ul><li>常见易混：affect/effect、rise/raise、adapt/adopt、principal/principle。</li><li>一词多义与搭配限制是高阶学习的重点。</li></ul>' },
      [REF_CEFR]),

    mk('第 2 章 · 技能训练：精读与泛读', '两种阅读方式。', [
      { stem: '"精读"的主要特点是：', options: ['逐句分析词汇、句法与篇章结构，追求深度理解', '快速浏览抓大意', '只读标题', '只读不查词'], answer: 0, explain: '精读重在语言点积累与长难句分析，材料短而难。' },
      { stem: '泛读训练的核心目标是：', options: ['提高阅读流畅度与信息获取速度，积累语感', '记住每个生词', '逐句翻译', '背诵全文'], answer: 0, explain: '泛读材料应略低于精读难度（i+1 原则），量大面广，重在持续输入。' },
      { stem: '查找特定信息（如日期、数字）最合适的阅读技巧是：', options: ['scanning（扫读定位）', 'skimming（略读抓主旨）', '逐字朗读', '背诵'], answer: 0, explain: 'skimming 用于抓主旨与结构，scanning 用于定位具体细节。' }
    ], '这一章讲怎么读、读多少。',
      { t: '精读', h: '<ul><li>特点：材料短而难，逐句分析词汇、语法与篇章衔接。</li><li>产出：词汇笔记、长难句拆解与段落大意概括。</li></ul>' },
      { t: '泛读', h: '<ul><li>特点：量大、难度适中（i+1），重流畅度与语感；技巧：skimming、scanning、猜词。</li><li>二者互补：精读求深度，泛读求广度与速度。</li></ul>' },
      [REF_CEFR])
  ];
  G.REAL_PAD['综合英语（一）'] = set(ENGLISH);
  G.REAL_PAD_ALIAS['综合英语（二）'] = '综合英语（一）';
  G.REAL_PAD_ALIAS['综合英语'] = '综合英语（一）';
  G.REAL_PAD_ALIAS['英语精读'] = '综合英语（一）';
})();
