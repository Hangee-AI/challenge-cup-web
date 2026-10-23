/* ==========================================================
   pad-real-ds.js · 数据结构：把补齐的占位关做成真题
   涉及章节：线性表（顺序表）、串/数组/广义表（串匹配）
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_ACM = { name: 'ACM Digital Library', url: 'https://dl.acm.org/' };
  var REF_CCF = { name: '中国计算机学会（CCF）', url: 'https://www.ccf.org.cn/' };

  function mk(title, brief, q, lead, s1, s2, refs) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: refs || [REF_CCF]
      }
    };
  }

  var LIST = [
    mk('第 1 章 · 线性表：顺序表', '顺序表的存储与插入删除代价。', [
      { stem: '顺序表（数组实现）最主要的优点是：', options: ['可通过下标随机访问，时间复杂度 O(1)', '插入删除无需移动元素', '存储空间可动态增长且不浪费', '不需要预先分配空间'], answer: 0, explain: '顺序表物理地址连续，按下标访问为 O(1)；插入删除平均需移动约 n/2 个元素。' },
      { stem: '在长度为 n 的顺序表中第 i 个位置插入一个元素，需移动的元素个数为：', options: ['n − i + 1', 'i', 'n', '1'], answer: 0, explain: '第 i 个位置（1-based）之后的元素都要后移，共 n − i + 1 个；平均移动 n/2 个。' },
      { stem: '与链表相比，顺序表更适合的应用场景是：', options: ['频繁按下标查找、很少插入删除', '频繁在任意位置插入删除', '元素个数无法预估', '不需要连续内存'], answer: 0, explain: '查找多用顺序表，插入删除多用链表，这是两者的典型取舍。' }
    ], '这一章从最基础的线性结构讲起。',
      { t: '顺序表', h: '<ul><li>连续存储、随机访问 O(1)；插入/删除平均移动 n/2 个元素，时间 O(n)。</li><li>需预先分配容量，扩容通常成倍增长并搬移数据。</li></ul>' },
      { t: '与链表对比', h: '<ul><li>链表：插入删除 O(1)（已知位置时）、查找 O(n)，额外存指针。</li><li>选择依据：查多改少用顺序表，改多查少用链表。</li></ul>' },
      [REF_ACM]),

    mk('第 2 章 · 串、数组与广义表：串匹配', '朴素匹配与 KMP 算法。', [
      { stem: '朴素（BF）串匹配算法在最坏情况下的时间复杂度是：', options: ['O(n·m)', 'O(n + m)', 'O(n)', 'O(log m)'], answer: 0, explain: '每次失配都要回溯主串指针，最坏需比较约 n·m 次。' },
      { stem: 'KMP 算法提高效率的关键在于：', options: ['失配时主串指针不回溯，利用 next 数组移动模式串', '使用哈希表', '预处理主串', '并行比较'], answer: 0, explain: 'next 数组记录模式串的最长相等前后缀，失配时按 next 滑动，整体 O(n + m)。' },
      { stem: '二维数组按行优先（row-major）存储时，元素 a[i][j] 的地址计算需要：', options: ['基地址 + (i × 每行元素数 + j) × 元素大小', '基地址 + (j × 每列元素数 + i) × 元素大小', '基地址 + (i + j) × 元素大小', '无法计算'], answer: 0, explain: '行优先先连续存放一行，再放下一行；列优先则相反。' }
    ], '这一章讲串的存储、匹配与数组的寻址。',
      { t: '串匹配', h: '<ul><li>BF（朴素）：回溯主串，最坏 O(n·m)。</li><li>KMP：主串不回溯，按 next 数组滑动模式串，O(n + m)。</li></ul>' },
      { t: '数组与广义表', h: '<ul><li>数组多为顺序存储，注意行优先与列优先的地址公式。</li><li>广义表是线性表的推广，元素可为原子或子表（表头/表尾）。</li></ul>' },
      [REF_ACM])
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['数据结构'] = set(LIST);
  G.REAL_PAD_ALIAS['数据结构与算法'] = '数据结构';
  G.REAL_PAD_ALIAS['算法与数据结构'] = '数据结构';
})();
