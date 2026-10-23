/* ==========================================================
   pad-real-pchem.js · 物理化学：把补齐的占位关做成真题
   涉及章节：热力学第一定律（状态函数）、物理化学实验专题
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
    mk('第 1 章 · 热力学第一定律：状态函数', '内能、焓与状态函数的判断。', [
      { stem: '下列各组物理量中，全部属于状态函数的是：', options: ['内能 U、焓 H、熵 S、吉布斯函数 G', '热量 Q、功 W', '热量 Q、内能 U', '功 W、焓 H'], answer: 0, explain: '状态函数只与始末态有关，与路径无关；Q 与 W 是过程量。' },
      { stem: '理想气体向真空自由膨胀（绝热），下列判断正确的是：', options: ['Q = 0、W = 0，故 ΔU = 0，温度不变', '温度必然升高', '温度必然降低', '内能一定改变'], answer: 0, explain: '向真空膨胀外压为零，不做功；绝热则 Q=0，故 ΔU=0，理想气体内能只与温度有关，故温度不变。' },
      { stem: '恒压且只做体积功时，过程热与焓变的关系是：', options: ['Qp = ΔH', 'Qp = ΔU', 'Qp = ΔG', 'Qp = TΔS'], answer: 0, explain: '恒压反应热等于焓变；恒容反应热等于内能变（Qv = ΔU）。' }
    ], '这一章把能量守恒写成可计算的形式，并区分状态量与过程量。',
      { t: '第一定律', h: '<ul><li>ΔU = Q + W（注意教材对 W 正负号的约定）。</li><li>焓 H = U + pV，恒压热 Qp = ΔH，恒容热 Qv = ΔU。</li></ul>' },
      { t: '状态函数', h: '<ul><li>状态函数：U、H、S、G、p、V、T；其微小变化为全微分。</li><li>过程量：Q、W，与具体路径有关。</li><li>理想气体的 U、H 只是温度的函数（焦耳实验）。</li></ul>' },
      [REF_NIST]),

    mk('第 9 章 · 物理化学实验专题', '依数性测摩尔质量、动力学实验与误差处理。', [
      { stem: '用凝固点降低法测定溶质摩尔质量，依据的关系式是：', options: ['ΔTf = Kf · m（与溶质种类无关，只与粒子数有关）', 'ΔTf = Kf / m', 'ΔTf 与浓度无关', 'ΔTf = Kb · m'], answer: 0, explain: '凝固点降低是稀溶液的依数性，Kf 为溶剂的凝固点降低常数，m 为质量摩尔浓度。' },
      { stem: '乙酸乙酯皂化反应常用电导法测定速率常数，该反应对两反应物总体表现为：', options: ['二级反应（两反应物初浓度相等时可用 1/c − 1/c₀ = kt）', '零级反应', '一级反应', '三级反应'], answer: 0, explain: '皂化反应对酯与碱各为一级，总级数为二；等浓度时积分式可线性化求 k。' },
      { stem: '关于实验误差，下列说法正确的是：', options: ['系统误差有确定方向，可通过校准与空白试验减小；偶然误差可通过多次测量减小', '偶然误差可以通过校准仪器完全消除', '系统误差会随测量次数增加而消失', '两者无法区分'], answer: 0, explain: '系统误差源于方法或仪器偏差，需校正；偶然误差服从统计规律，增加平行测定次数可减小。' }
    ], '这一章把热力学与动力学的经典实验串起来。',
      { t: '经典实验', h: '<ul><li>凝固点降低法测摩尔质量：ΔTf = Kf·m，需测纯溶剂与溶液的凝固点。</li><li>皂化反应：电导随离子浓度变化，等浓度时为二级反应，作图求 k。</li></ul>' },
      { t: '数据处理', h: '<ul><li>系统误差：方法、仪器、试剂引起，有方向性，可校正。</li><li>偶然误差：随机波动，服从统计分布，靠多次平行测定减小。</li><li>注意有效数字与单位，作图宜线性化处理。</li></ul>' },
      [REF_NIST])
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['物理化学'] = set(LIST);
  G.REAL_PAD_ALIAS['物理化学（上）'] = '物理化学';
  G.REAL_PAD_ALIAS['物理化学（下）'] = '物理化学';
})();
