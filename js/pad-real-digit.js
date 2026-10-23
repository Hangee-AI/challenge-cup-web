/* ==========================================================
   pad-real-digit.js · 数字电子技术：把补齐的占位关做成真题
   涉及章节：数制与码制、逻辑代数基础
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

  var LIST = [
    mk('第 1 章 · 数制与码制：二进制与十六进制', '进制转换与常用编码。', [
      { stem: '二进制数 1011 对应的十进制数是：', options: ['11', '13', '9', '15'], answer: 0, explain: '1×8 + 0×4 + 1×2 + 1×1 = 8 + 2 + 1 = 11。' },
      { stem: '十六进制数 1A 对应的十进制数是：', options: ['26', '16', '20', '10'], answer: 0, explain: '1×16 + A(10) = 16 + 10 = 26。' },
      { stem: '关于 8421 BCD 码，下列说法正确的是：', options: ['用 4 位二进制表示 1 位十进制，1010~1111 为非法码', '与二进制数完全相同', '用 3 位二进制表示 1 位十进制', '可以表示 16 个十进制数字'], answer: 0, explain: 'BCD 码用 4 位二进制只表示 0~9，10~15 为非法编码。' }
    ], '这一章是所有数字系统的"语言基础"。',
      { t: '进制转换', h: '<ul><li>二/十六互转：4 位二进制对应 1 位十六进制，从小数点向两侧分组。</li><li>任意进制转十进制：按权展开求和；十进制转其他：除基取余（整数）、乘基取整（小数）。</li></ul>' },
      { t: '常用编码', h: '<ul><li>8421 BCD：4 位表示 1 位十进制，1010~1111 非法。</li><li>格雷码：相邻码只有一位不同，用于减小误码。</li></ul>' }),

    mk('第 2 章 · 逻辑代数基础：基本运算与公式', '基本运算、摩根定律与化简。', [
      { stem: '下列等式中符合摩根定律的是：', options: ['(A·B)′ = A′ + B′', '(A·B)′ = A′ · B′', '(A + B)′ = A′ + B′', 'A + AB = B'], answer: 0, explain: '摩根定律：(A·B)′ = A′ + B′，(A + B)′ = A′·B′。' },
      { stem: '与表达式 A + A′B 相等的最简式是：', options: ['A + B', 'A', 'B', 'A′'], answer: 0, explain: 'A + A′B = (A + A′)(A + B) = A + B，这是常用的冗余项消去除法。' },
      { stem: '用卡诺图化简时，合并相邻最小项的原则是：', options: ['按 2ⁿ 个相邻 1 格圈成矩形，圈越大越好且可重叠', '只能圈 2 个格', '圈必须互不重叠', '只能圈 4 个格'], answer: 0, explain: '圈内 1 的个数为 2ⁿ，圈应尽量大、尽量少，可重叠，覆盖全部 1。' }
    ], '这一章给出化简逻辑电路的工具。',
      { t: '基本运算与定律', h: '<ul><li>基本运算：与、或、非；复合：与非、或非、异或、同或。</li><li>常用公式：吸收律 A + AB = A；冗余律 A + A′B = A + B；摩根定律。</li></ul>' },
      { t: '化简方法', h: '<ul><li>公式法：并项、吸收、消去、配项。</li><li>卡诺图：按 2ⁿ 个相邻 1 圈矩形，注意循环相邻与无关项（×）。</li></ul>' })
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['数字电子技术'] = set(LIST);
  G.REAL_PAD_ALIAS['数字电子技术基础'] = '数字电子技术';
  G.REAL_PAD_ALIAS['数字电路与逻辑设计'] = '数字电子技术';
  G.REAL_PAD_ALIAS['数字逻辑'] = '数字电子技术';
})();
