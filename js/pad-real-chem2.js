/* ==========================================================
   pad-real-chem2.js · 无机及分析化学：把补齐的占位关做成真题
   涉及章节：化学热力学基础、化学平衡与反应速率、分子结构与化学键
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_CHEMSOC = { name: '中国化学会', url: 'https://www.chemsoc.org.cn/' };
  var REF_NIST = { name: 'NIST Chemistry WebBook（物性数据）', url: 'https://webbook.nist.gov/chemistry/' };

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
    mk('第 1 章 · 化学热力学基础：状态函数', '内能、焓与状态函数判断。', [
      { stem: '下列物理量中属于状态函数的是：', options: ['内能 U、焓 H、熵 S', '热量 Q', '功 W', '反应途径'], answer: 0, explain: '状态函数只与始末态有关；Q 与 W 随过程路径变化，不是状态函数。' },
      { stem: '热力学第一定律可表达为：', options: ['ΔU = Q + W（能量守恒）', 'ΔU = Q − W 恒不成立', '能量可以凭空产生', 'ΔU 与 Q、W 无关'], answer: 0, explain: '本质是能量守恒；采用不同符号约定时公式形式略有差异，需按教材统一。' },
      { stem: '恒压且只做体积功时，反应热与焓变的关系是：', options: ['Qp = ΔH', 'Qp = ΔU', 'Qp = ΔG', 'Qp = TΔS'], answer: 0, explain: '恒压反应热等于焓变；恒容反应热等于内能变。' }
    ], '这一章给出判断反应方向与能量变化的标尺。',
      { t: '基本概念', h: '<ul><li>体系与环境、状态与状态函数、过程与途径。</li><li>ΔU = Q + W；H = U + pV。</li></ul>' },
      { t: '热化学', h: '<ul><li>恒压热 Qp = ΔH、恒容热 Qv = ΔU。</li><li>盖斯定律：反应热只与始末态有关，可代数相加。</li></ul>' },
      [REF_NIST]),

    mk('第 2 章 · 化学平衡与反应速率：平衡常数', '平衡常数、速率方程与勒夏特列原理。', [
      { stem: '对于一个给定的化学反应，平衡常数 K 的大小主要取决于：', options: ['温度', '初始浓度', '压强', '是否使用催化剂'], answer: 0, explain: 'K 只随温度变化；浓度/压强改变使平衡移动但不改变 K，催化剂只改变达到平衡的快慢。' },
      { stem: '催化剂对反应的影响是：', options: ['降低活化能、加快反应速率，但不改变平衡位置', '提高平衡转化率', '改变 ΔH', '改变平衡常数'], answer: 0, explain: '催化剂同等程度改变正逆速率，只缩短到达平衡的时间。' },
      { stem: '勒夏特列原理指出：改变影响平衡的条件，平衡将：', options: ['向减弱该改变的方向移动', '向增强该改变的方向移动', '不发生移动', '完全停止'], answer: 0, explain: '升温利于吸热方向、加压利于气体分子数减少的方向、增大反应物浓度利于正向。' }
    ], '这一章回答"反应进行到什么程度、有多快"。',
      { t: '化学平衡', h: '<ul><li>K 只与温度有关；Q 与 K 比较可判断反应方向。</li><li>勒夏特列原理用于定性判断平衡移动。</li></ul>' },
      { t: '反应速率', h: '<ul><li>速率方程与反应级数由实验测定，不等于计量系数（基元反应除外）。</li><li>催化剂降低活化能，加快正逆速率，不改变 K 与 ΔH。</li></ul>' },
      [REF_CHEMSOC]),

    mk('第 8 章 · 分子结构与化学键', '共价键类型、杂化与分子间作用力。', [
      { stem: '关于 σ 键与 π 键，下列说法正确的是：', options: ['σ 键由轨道"头碰头"重叠形成，π 键由"肩并肩"重叠形成', 'π 键可以单独存在于单键中', 'σ 键不能旋转', '两者完全相同'], answer: 0, explain: '单键为 σ 键，双键含一个 σ 与一个 π 键；π 键不能单独形成（须先有 σ 键）。' },
      { stem: 'BF₃ 分子中硼原子的杂化方式与空间构型是：', options: ['sp² 杂化，平面三角形', 'sp 杂化，直线形', 'sp³ 杂化，正四面体', '不杂化'], answer: 0, explain: '三个等价 sp² 杂化轨道呈平面三角形分布，键角约 120°。' },
      { stem: '下列作用力中，通常最强的是：', options: ['氢键', '范德华力（取向力、诱导力、色散力）', '离子键不属于分子间力', '疏水相互作用'], answer: 0, explain: '分子间作用力中氢键强于普通范德华力（但仍远弱于化学键），显著影响沸点与溶解度。' }
    ], '这一章解释分子为什么是特定的形状与性质。',
      { t: '共价键', h: '<ul><li>σ 键（头碰头、可旋转）与 π 键（肩并肩、不能单独存在）。</li><li>键参数：键能、键长、键角、键的极性。</li></ul>' },
      { t: '构型与作用力', h: '<ul><li>杂化：sp（直线）、sp²（平面三角）、sp³（四面体）；VSEPR 判断构型。</li><li>分子间力：范德华力与氢键，决定沸点、熔点与溶解性。</li></ul>' },
      [REF_CHEMSOC])
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['无机及分析化学'] = set(LIST);
  G.REAL_PAD_ALIAS['无机与分析化学'] = '无机及分析化学';
  G.REAL_PAD_ALIAS['分析化学'] = '无机及分析化学';
})();
