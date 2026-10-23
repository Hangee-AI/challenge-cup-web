/* ==========================================================
   pad-real-orgchem.js · 有机化学：把补齐的占位关做成真题
   涉及章节：烷烃与环烷烃、烯烃与炔烃、含氮化合物
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_CHEMSOC = { name: '中国化学会', url: 'https://www.chemsoc.org.cn/' };
  var REF_SDBS = { name: 'SDBS 有机化合物谱图数据库', url: 'https://sdbs.db.aist.go.jp/' };

  function mk(title, brief, q, lead, s1, s2, refs) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: refs || [REF_CHEMSOC]
      }
    };
  }

  var LIST = [
    mk('第 1 章 · 烷烃与环烷烃：命名与构象', '构象稳定性与系统命名规则。', [
      { stem: '乙烷最稳定的构象是：', options: ['交叉式（反叠式）', '重叠式', '任意构象能量相同', '顺叠式'], answer: 0, explain: '交叉式中两个甲基相距最远，扭转张力最小，能量最低。' },
      { stem: '环己烷最稳定的构象是：', options: ['椅式构象', '船式构象', '半椅式', '信封式'], answer: 0, explain: '椅式构象无角张力、相邻键全为交叉式，扭转张力最小；大取代基倾向占平伏键（e 键）。' },
      { stem: '按系统命名法，烷烃命名的主链选择原则是：', options: ['选最长碳链，编号使取代基位次最小', '选支链最多的链', '随意选一条链', '必须选含双键的链'], answer: 0, explain: '主链最长 → 编号使取代基位次和最小 → 书写按次序规则排序。' }
    ], '这一章把"碳骨架怎么搭、怎么写名字"讲清楚。',
      { t: '构象', h: '<ul><li>乙烷：交叉式最稳定、重叠式最不稳定（扭转张力）。</li><li>环己烷：椅式最稳定，取代基优先占 e 键；船式有旗杆相互作用。</li></ul>' },
      { t: '命名', h: '<ul><li>选最长碳链为主链，编号使取代基位次最小。</li><li>取代基按次序规则（较优基团后列）排序书写。</li></ul>' },
      [REF_SDBS]),

    mk('第 2 章 · 烯烃与炔烃：加成反应', '马氏规则、过氧化物效应与选择性还原。', [
      { stem: '不对称烯烃与 HX 加成时，遵循马氏规则，即：', options: ['氢原子加到含氢较多的双键碳上，卤素加到含氢较少的碳上', '氢原子加到含氢较少的碳上', '两者随机', '只生成反式产物'], answer: 0, explain: '本质是生成更稳定的碳正离子中间体（稳定性：3° > 2° > 1°）。' },
      { stem: '在过氧化物存在下，HBr 与烯烃加成表现为反马氏规则，这一现象：', options: ['仅对 HBr 显著，属自由基加成机理', '对所有 HX 都同样显著', '与 HBr 无关', '只在高温下发生'], answer: 0, explain: '过氧化物引发自由基链反应；HI 链传递吸热、HCl 链引发困难，故主要见于 HBr。' },
      { stem: '欲将炔烃选择性还原为顺式烯烃，宜选用：', options: ['Lindlar 催化剂（Pd/BaSO₄，喹啉毒化）', 'Na / 液氨', '酸性 KMnO₄', '臭氧后还原水解'], answer: 0, explain: 'Lindlar 催化加氢停在烯烃且为顺式；Na/液氨还原得反式烯烃。' }
    ], '这一章围绕不饱和键"加什么、加在哪、停在哪"。',
      { t: '烯烃加成', h: '<ul><li>亲电加成：马氏规则由碳正离子稳定性决定。</li><li>反马氏：HBr + 过氧化物（自由基机理）。</li><li>鉴別：溴水/高锰酸钾褪色；臭氧化可定位双键。</li></ul>' },
      { t: '炔烃', h: '<ul><li>末端炔氢具弱酸性，可与 Ag⁺/Cu⁺ 生成炔化物沉淀。</li><li>Lindlar → 顺式烯烃；Na/液氨 → 反式烯烃。</li></ul>' },
      [REF_CHEMSOC]),

    mk('第 8 章 · 含氮化合物', '胺的碱性、重氮盐与硝基还原。', [
      { stem: '下列化合物碱性由强到弱的正确顺序是：', options: ['脂肪胺 > 氨 > 芳香胺（苯胺）', '芳香胺 > 氨 > 脂肪胺', '氨 > 脂肪胺 > 芳香胺', '三者相同'], answer: 0, explain: '烷基给电子增强碱性；苯胺中氮的孤对电子与苯环共轭，碱性明显减弱。' },
      { stem: '芳香重氮盐在低温下与酚或芳胺反应可生成：', options: ['偶氮化合物（偶联反应）', '羧酸', '烷烃', '酰胺'], answer: 0, explain: '重氮盐作为亲电试剂发生偶联，生成 —N=N— 偶氮化合物（染料的重要结构）。' },
      { stem: '硝基苯还原制备苯胺常用的方法是：', options: ['Fe/HCl 或催化加氢还原', '用 NaOH 水解', '用浓硫酸脱水', '直接加热分解'], answer: 0, explain: '金属/酸还原或催化加氢均可将 —NO₂ 还原为 —NH₂。' }
    ], '这一章讲含氮官能团的性质与相互转化。',
      { t: '胺', h: '<ul><li>碱性：脂肪胺 > 氨 > 芳香胺；季铵碱为强碱。</li><li>胺可与酸成盐、可发生烷基化与酰化。</li></ul>' },
      { t: '重氮盐与硝基', h: '<ul><li>芳香重氮盐低温稳定，可发生取代（Sandmeyer）与偶联反应。</li><li>硝基化合物可还原为胺，是引入氨基的重要路线。</li></ul>' },
      [REF_SDBS])
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['有机化学'] = set(LIST);
  G.REAL_PAD_ALIAS['有机化学（上）'] = '有机化学';
  G.REAL_PAD_ALIAS['有机化学（下）'] = '有机化学';
  G.REAL_PAD_ALIAS['基础有机化学'] = '有机化学';
})();
