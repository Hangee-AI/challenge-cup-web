/* ==========================================================
   pad-real-design.js · 设计概论：把补齐的占位关做成真题
   涉及章节：设计的概念、设计史线索
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_BAUHAUS = { name: 'Bauhaus Dessau（包豪斯档案）', url: 'https://www.bauhaus-dessau.de/' };
  var REF_VAM = { name: 'V&A 博物馆（设计与装饰艺术）', url: 'https://www.vam.ac.uk/' };

  function mk(title, brief, q, lead, s1, s2, refs) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: refs || [REF_VAM]
      }
    };
  }

  var LIST = [
    mk('第 1 章 · 设计的概念：设计的定义与分类', '设计的内涵与分类。', [
      { stem: '关于设计的本质，较恰当的理解是：', options: ['把需求转化为可实施方案的有目的创造性活动', '纯粹的美术创作', '等同于装饰', '只关注外观美化'], answer: 0, explain: '设计需兼顾功能、审美、经济与技术可行性，是"问题求解"而非单纯美化。' },
      { stem: '按对象与领域划分，设计通常不包括下列哪一类：', options: ['纯绘画创作', '视觉传达设计', '产品设计', '环境设计'], answer: 0, explain: '常见分类为视觉传达（平面）、产品（工业）设计、环境（建筑/景观/室内）设计，此外还有数字与交互设计等。' },
      { stem: '设计评价中通常强调的原则是：', options: ['功能性、审美性、经济性与可持续性的统一', '只追求形式新颖', '只追求成本最低', '只追求技术先进'], answer: 0, explain: '好的设计在满足功能的前提下兼顾美观、成本与环境影响。' }
    ], '这一章回答"设计是什么"。',
      { t: '设计的定义', h: '<ul><li>设计是有目的、有计划的创造性活动，把需求与约束转化为可实现的方案。</li><li>与纯艺术的区别：设计受功能、用户、生产与成本约束。</li></ul>' },
      { t: '分类与原则', h: '<ul><li>分类：视觉传达、产品设计、环境设计、服装与染织、数字与交互设计等。</li><li>原则：功能、美观、经济、宜人与可持续（绿色设计）。</li></ul>' },
      [REF_VAM]),

    mk('第 2 章 · 设计史线索：工艺美术运动到现代主义', '近现代设计运动脉络。', [
      { stem: '工艺美术运动（Arts & Crafts）的核心主张是：', options: ['反对工业化造成的粗制滥造，提倡回归手工艺与诚实的设计', '全面拥抱机械化生产', '主张装饰越少越好', '主张完全取消装饰与功能'], answer: 0, explain: '该运动兴起于 19 世纪下半叶的英国，强调手工艺价值与材料真实性，为现代设计奠定思想基础。' },
      { stem: '包豪斯（Bauhaus）对现代设计最重要的贡献是：', options: ['确立艺术与技术统一的理念并奠定现代设计教育体系', '复兴古典装饰', '反对一切工业产品', '只专注绘画教学'], answer: 0, explain: '包豪斯把工作室制与基础课结合，强调形式服从功能与标准化，深刻影响了建筑与工业设计。' },
      { stem: '"形式追随功能"（Form follows function）这一现代主义主张强调的是：', options: ['功能决定形式，反对无谓装饰', '形式优先于功能', '功能与形式无关', '装饰即罪恶且功能可忽略'], answer: 0, explain: '现代主义主张以功能与结构为出发点，强调简洁几何形态与材料真实性（"少即是多"亦属此脉络）。' }
    ], '这一章串起从手工艺到现代设计的演变。',
      { t: '工艺美术与新艺术', h: '<ul><li>工艺美术运动：反工业化粗制滥造，回归手工艺与材料诚实。</li><li>新艺术运动：以自然曲线与装饰性线条为特征，连接手工艺与现代设计。</li></ul>' },
      { t: '包豪斯与现代主义', h: '<ul><li>包豪斯：艺术与技术的新统一，基础课 + 工作室制，标准化与批量生产。</li><li>现代主义主张：形式追随功能、少即是多，反对多余装饰。</li></ul>' },
      [REF_BAUHAUS])
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['设计概论'] = set(LIST);
  G.REAL_PAD_ALIAS['设计学概论'] = '设计概论';
  G.REAL_PAD_ALIAS['艺术设计概论'] = '设计概论';
  G.REAL_PAD_ALIAS['设计基础'] = '设计概论';
})();
