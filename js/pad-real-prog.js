/* ==========================================================
   pad-real-prog.js · 程序设计基础：把补齐的占位关做成真题
   涉及章节：程序与算法（程序设计语言）、数据类型与运算
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_GCC = { name: 'GCC 官方文档', url: 'https://gcc.gnu.org/onlinedocs/' };
  var REF_CPP = { name: 'cppreference（C/C++ 语言参考）', url: 'https://en.cppreference.com/' };

  function mk(title, brief, q, lead, s1, s2, refs) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: refs || [REF_CPP]
      }
    };
  }

  var LIST = [
    mk('第 1 章 · 程序与算法：程序设计语言', '算法特性与语言层次。', [
      { stem: '一个算法必须具备的特性不包括：', options: ['必须使用某一种具体编程语言书写', '有穷性', '确定性', '有零个或多个输入、一个或多个输出'], answer: 0, explain: '算法是解决问题步骤的描述，与具体语言无关，可用伪代码或流程图表示。' },
      { stem: '关于编译型与解释型语言，正确的是：', options: ['编译型先整体翻译为目标代码再执行，解释型边翻译边执行', '编译型一次只翻译一行', '二者完全相同', '解释型一定比编译型快'], answer: 0, explain: 'C/C++ 属编译型，Python 等常为解释执行（或先编译为字节码再由虚拟机执行）。' },
      { stem: '通常用大 O 记号描述算法的：', options: ['时间复杂度（随规模增长的增长阶）', '代码行数', '变量个数', '编译耗时'], answer: 0, explain: 'O(n)、O(n²)、O(log n) 描述的是运行时间的增长阶，用于比较算法的可扩展性。' }
    ], '这一章讲程序与算法的基本概念。',
      { t: '算法', h: '<ul><li>特性：有穷性、确定性、可行性、输入与输出。</li><li>复杂度：时间（语句执行次数的增长阶）与空间复杂度。</li></ul>' },
      { t: '程序设计语言', h: '<ul><li>层次：机器语言 → 汇编语言 → 高级语言。</li><li>翻译方式：编译（整体翻译后执行）与解释（边翻译边执行）。</li></ul>' },
      [REF_GCC]),

    mk('第 2 章 · 数据类型与运算：基本数据类型', '基本类型、运算与类型转换。', [
      { stem: '在 C 语言中，表达式 7 / 2 的结果是：', options: ['3（整数除法，结果取整）', '3.5', '4', '编译错误'], answer: 0, explain: '两个操作数都是整型时进行整数除法并舍去小数；写成 7.0 / 2 或 7 / 2.0 才得 3.5。' },
      { stem: '表达式 7 % 3 的值是：', options: ['1', '2', '0', '2.33'], answer: 0, explain: '% 为取模（求余）运算符，只用于整型；7 % 3 = 1。' },
      { stem: '关于类型转换，下列情况会发生隐式提升的是：', options: ['int 与 double 混合运算时，int 先转为 double', 'double 自动转为 int', 'char 不会被提升', '任何情况都不转换'], answer: 0, explain: '运算时小类型向大类型提升以避免精度损失；把 double 赋给 int 会截断小数（必要时需显式转换）。' }
    ], '这一章讲数据怎么表示、怎么算。',
      { t: '基本类型', h: '<ul><li>整型、浮点型、字符型、布尔型；不同语言的类型长度与表示范围可能不同。</li><li>常量与变量；标识符命名规则与关键字限制。</li></ul>' },
      { t: '运算规则', h: '<ul><li>运算符：算术（+ − * / %）、关系、逻辑与赋值；注意优先级与结合性。</li><li>整数除法与取模；隐式类型提升与强制类型转换（精度损失风险）。</li></ul>' },
      [REF_CPP])
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['程序设计基础'] = set(LIST);
  G.REAL_PAD_ALIAS['程序设计'] = '程序设计基础';
  G.REAL_PAD_ALIAS['程序设计入门'] = '程序设计基础';
  G.REAL_PAD_ALIAS['高级语言程序设计'] = '程序设计基础';
})();
