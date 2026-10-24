/* ==========================================================
   pad-real-molbio.js · 分子生物学：把补齐的占位关做成真题
   涉及章节：遗传的物质基础、基因的表达（转录与 RNA 加工）
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_NCBI = { name: 'NCBI Bookshelf（Molecular Biology）', url: 'https://www.ncbi.nlm.nih.gov/books/' };
  var REF_NATURE = { name: 'Nature Education（分子生物学专题）', url: 'https://www.nature.com/scitable/' };

  function mk(title, brief, q, lead, s1, s2, refs) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: refs || [REF_NCBI]
      }
    };
  }

  var LIST = [
    mk('第 1 章 · 遗传的物质基础：DNA 是遗传物质的证据', '经典实验与双螺旋结构。', [
      { stem: '证明 DNA 是遗传物质的经典噬菌体标记实验使用的放射性同位素是：', options: ['³²P 标记 DNA、³⁵S 标记蛋白质', '¹⁴C 标记 DNA、³H 标记蛋白质', '¹⁸O 标记两者', '仅用 ¹⁵N'], answer: 0, explain: 'DNA 含磷不含硫，蛋白质含硫（甲硫氨酸、半胱氨酸）几乎不含磷，故用 ³²P 与 ³⁵S 分别标记；进入细菌的是 ³²P。' },
      { stem: '关于 DNA 双螺旋结构，下列说法错误的是：', options: ['两条链同向平行，A 与 C 配对', '两条链反向平行', 'A 与 T 之间形成 2 个氢键', 'G 与 C 之间形成 3 个氢键'], answer: 0, explain: '双链反向平行，碱基互补为 A—T（2 个氢键）、G—C（3 个氢键），故 GC 含量越高越稳定。' },
      { stem: 'Chargaff 规则指出：', options: ['双链 DNA 中 A 的量等于 T，G 的量等于 C', 'A 等于 G', 'T 等于 C', '四种碱基含量完全随机'], answer: 0, explain: '该规律是碱基互补配对的重要证据，不同物种间 (G+C) 含量可差异很大。' }
    ], '这一章回答"遗传信息藏在哪里"。',
      { t: '经典证据', h: '<ul><li>肺炎双球菌转化实验表明存在"转化因子"；后续实验证明该因子是 DNA。</li><li>噬菌体侵染实验用 ³²P（DNA）与 ³⁵S（蛋白质）分别标记，进入细菌的是 DNA。</li></ul>' },
      { t: 'DNA 结构', h: '<ul><li>反向平行双链、右手螺旋；磷酸—脱氧核糖在外，碱基在内。</li><li>互补配对 A—T（2 氢键）、G—C（3 氢键）；Chargaff 规则与半保留复制。</li></ul>' },
      [REF_NATURE]),

    mk('第 2 章 · 基因的表达：转录与 RNA 加工', '转录过程与真核 mRNA 成熟。', [
      { stem: '转录时 RNA 聚合酶以 DNA 的哪条链为模板、合成方向是：', options: ['以模板链为模板，新链沿 5′→3′ 方向延伸', '以编码链为模板，沿 3′→5′ 延伸', '两条链同时作为模板', '随机选择模板'], answer: 0, explain: 'RNA 链与模板链互补、与编码链序列一致（U 代替 T），合成方向始终为 5′→3′。' },
      { stem: '真核生物前体 mRNA 的加工不包括：', options: ['在胞质中进行剪接后再转运', '5′ 端加帽', '3′ 端加 poly(A) 尾', '剪除内含子、连接外显子'], answer: 0, explain: '转录与加工（加帽、加尾、剪接）都在细胞核内完成，成熟 mRNA 再转运至胞质翻译。' },
      { stem: '与原核生物相比，真核生物基因表达的典型特点是：', options: ['转录在核内、翻译在胞质，二者在空间上分离', '转录与翻译同时进行', 'mRNA 多为多顺反子', 'mRNA 无加工过程'], answer: 0, explain: '原核无核膜，可边转录边翻译且常为多顺反子；真核需经加工与核输出。' }
    ], '这一章讲遗传信息怎么被"读出来"。',
      { t: '转录', h: '<ul><li>RNA 聚合酶识别启动子，以模板链 3′→5′ 方向读取，合成 5′→3′ 的 RNA。</li><li>产物与模板链互补、与编码链同序（T→U）。</li></ul>' },
      { t: 'RNA 加工', h: '<ul><li>真核前体 mRNA：5′ 加帽、3′ 加 poly(A) 尾、剪接体切除内含子。</li><li>可变剪接使一个基因产生多种蛋白；原核 mRNA 通常不需加工且为多顺反子。</li></ul>' },
      [REF_NCBI])
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['分子生物学'] = set(LIST);
  G.REAL_PAD_ALIAS['基础分子生物学'] = '分子生物学';
  G.REAL_PAD_ALIAS['医学分子生物学'] = '分子生物学';
})();
