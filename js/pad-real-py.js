/* ==========================================================
   pad-real-py.js · 程序设计基础（Python）：把补齐的占位关做成真题
   涉及章节：Python 入门、数据类型与运算
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_PY = { name: 'Python 官方文档', url: 'https://docs.python.org/zh-cn/3/' };
  var REF_PEP8 = { name: 'PEP 8（Python 代码风格指南）', url: 'https://peps.python.org/pep-0008/' };

  function mk(title, brief, q, lead, s1, s2, refs) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: refs || [REF_PY]
      }
    };
  }

  var LIST = [
    mk('第 1 章 · Python 入门：语言特点与开发环境', '语言特性与运行方式。', [
      { stem: '下列关于 Python 的说法正确的是：', options: ['解释执行、动态类型，并用缩进表示代码块', '必须先编译成机器码再运行', '用大括号表示代码块', '变量必须先声明类型'], answer: 0, explain: 'Python 由解释器逐行执行（先编译为字节码），变量无需声明类型，缩进即语法。' },
      { stem: 'Python 源文件的常用扩展名是：', options: ['.py', '.python', '.pt', '.pyt'], answer: 0, explain: '脚本通常保存为 .py 文件，用 `python 文件名.py` 运行；交互式环境（REPL）可逐行执行。' },
      { stem: '不属于常见 Python 开发环境的是：', options: ['只能使用命令行，无法使用任何编辑器', 'IDLE', 'PyCharm', 'Jupyter Notebook'], answer: 0, explain: '常用工具包括 IDLE、PyCharm、VS Code 与 Jupyter 等，视项目类型选择。' }
    ], '这一章认识 Python 与开发环境。',
      { t: '语言特点', h: '<ul><li>语法简洁、解释执行、动态类型、跨平台，标准库与第三方库丰富。</li><li>缩进定义代码块（PEP 8 建议用 4 个空格）。</li></ul>' },
      { t: '运行与环境', h: '<ul><li>运行方式：交互式 REPL 与脚本文件（.py）。</li><li>工具：IDLE、PyCharm、VS Code、Jupyter；用 pip 管理第三方包。</li></ul>' },
      [REF_PEP8]),

    mk('第 2 章 · 数据类型与运算：数字字符串与布尔', '基本类型与运算规则。', [
      { stem: '在 Python 3 中，表达式 7 / 2 的结果是：', options: ['3.5（浮点真除法）', '3（整数）', '3.0 由解释器决定', '报错'], answer: 0, explain: '`/` 为真除法总返回 float；`//` 为向下取整的整除，`%` 为取模。' },
      { stem: '关于字符串，下列说法正确的是：', options: ['字符串是不可变序列，可用索引与切片访问', '字符串可原地修改某个字符', '字符串只能用双引号定义', '字符串不是序列'], answer: 0, explain: 's[0] 取首字符、s[1:3] 取切片；修改需生成新字符串，引号单双均可（需成对）。' },
      { stem: '在 Python 中，下列值在条件判断中被视为假的是：', options: ['0、空字符串与 None', '1', '"False"', '空列表是真相'], answer: 0, explain: '假值包括 False、0、0.0、空字符串、空列表/元组/字典、None 等，其余大多为真。' }
    ], '这一章讲 Python 里的数据怎么表示与运算。',
      { t: '数字与运算', h: '<ul><li>int、float、complex；`/` 真除、`//` 整除、`%` 取模、`**` 幂。</li><li>注意不同版本差异：Python 3 中 `/` 返回浮点数。</li></ul>' },
      { t: '字符串与布尔', h: '<ul><li>字符串不可变，支持索引、切片、拼接与 f-string 格式化。</li><li>布尔值 True/False；真值测试：0、空容器、空串与 None 为假。</li></ul>' },
      [REF_PY])
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['程序设计基础（Python）'] = set(LIST);
  G.REAL_PAD_ALIAS['Python 程序设计'] = '程序设计基础（Python）';
  G.REAL_PAD_ALIAS['Python程序设计'] = '程序设计基础（Python）';
  G.REAL_PAD_ALIAS['Python 语言程序设计'] = '程序设计基础（Python）';
  G.REAL_PAD_ALIAS['Python 编程基础'] = '程序设计基础（Python）';
})();
