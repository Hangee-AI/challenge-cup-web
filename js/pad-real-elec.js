/* ==========================================================
   pad-real-elec.js · 模拟电子技术 / 数字电子技术基础：补齐的占位关做成真题
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_IEEE = { name: 'IEEE Xplore（电子电气文献库）', url: 'https://ieeexplore.ieee.org/' };

  function mk(title, brief, q, lead, s1, s2) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: [REF_IEEE]
      }
    };
  }

  var ANALOG = [
    mk('第 1 章 · 常用半导体器件：PN 结单向导电', 'PN 结偏置、二极管特性与稳压管。', [
      { stem: '使 PN 结正向导通的接法是：', options: ['P 区接电源正极、N 区接负极', 'P 区接负极、N 区接正极', '两端都接正极', '两端悬空'], answer: 0, explain: '正偏削弱内建电场、耗尽层变窄，因而导通；反偏时只有微小反向电流。' },
      { stem: '硅二极管正常导通时的正向压降约为：', options: ['0.7 V', '0.1 V', '3 V', '5 V'], answer: 0, explain: '硅管约 0.6~0.7 V，锗管约 0.2~0.3 V。' },
      { stem: '稳压二极管正常工作时处于：', options: ['反向击穿区', '正向导通区', '死区', '截止区'], answer: 0, explain: '利用反向击穿时电流大幅变化而电压基本稳定的特性实现稳压。' }
    ], '这一章从 PN 结讲起，建立器件级的直觉。',
      { t: 'PN 结', h: '<ul><li>正偏导通、反偏截止，即单向导电性。</li><li>伏安特性：死区电压、正向压降、反向击穿。</li></ul>' },
      { t: '二极管应用', h: '<ul><li>整流、限幅、钳位；稳压管用于基准与稳压。</li><li>使用稳压管必须串联限流电阻。</li></ul>' }),

    mk('第 2 章 · 基本放大电路：共射/共集/共基', '三种组态的特点与失真。', [
      { stem: '共射极放大电路的输出电压与输入电压相位关系为：', options: ['反相（相差 180°）', '同相', '相差 90°', '无确定关系'], answer: 0, explain: '共射电路电压增益为负，输出与输入反相。' },
      { stem: '共集电极电路（射极跟随器）的特点是：', options: ['电压增益接近 1、输入电阻大、输出电阻小', '电压增益很大', '输出与输入反相', '频带最窄'], answer: 0, explain: '射随器用于阻抗变换与缓冲，电压跟随、电流放大。' },
      { stem: '放大电路静态工作点设置不当通常会引起：', options: ['截止失真或饱和失真', '频率升高', '增益变为无穷大', '输入电阻为零'], answer: 0, explain: 'Q 点偏高易饱和失真，偏低易截止失真；需合理设置偏置。' }
    ], '这一章讲"三极管怎么把信号放大而不失真"。',
      { t: '三种组态', h: '<ul><li>共射：电压、电流增益都较大，输出反相。</li><li>共集：电压增益≈1，输入电阻大、输出电阻小，用于缓冲。</li><li>共基：电压增益大、输入电阻小，频带宽。</li></ul>' },
      { t: '静态与失真', h: '<ul><li>静态工作点决定动态范围，应设在负载线中部。</li><li>微变等效电路用于小信号分析：h 参数或 rbe 模型。</li></ul>' })
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['模拟电子技术'] = set(ANALOG);
  G.REAL_PAD_ALIAS['模拟电子技术基础'] = '模拟电子技术';
  G.REAL_PAD_ALIAS['电子技术基础（模拟部分）'] = '模拟电子技术';
})();
