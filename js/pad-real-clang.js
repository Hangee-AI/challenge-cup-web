/* ==========================================================
   pad-real-clang.js · C 语言程序设计：把补齐的占位关做成真题
   涉及章节：结构体与共用体、文件操作
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_CPP = { name: 'cppreference（C 语言参考）', url: 'https://en.cppreference.com/w/c' };
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
        refs: refs || [REF_CPP]
      }
    };
  }

  var LIST = [
    mk('第 9 章 · 结构体与共用体', '结构体、内存对齐与共用体。', [
      { stem: '通过结构体指针访问其成员，应使用的运算符是：', options: ['->', '.', '::', '&'], answer: 0, explain: '指针用 ->，结构体变量本身用 . 访问成员。' },
      { stem: '关于共用体（union），下列说法正确的是：', options: ['所有成员共享同一段内存，大小为最大成员所需空间', '每个成员都有独立内存', '可以同时存储所有成员的值', '大小等于各成员大小之和'], answer: 0, explain: 'union 各成员起始地址相同，同一时刻只有一个成员有效。' },
      { stem: '结构体变量的实际大小往往大于各成员大小之和，原因是：', options: ['编译器按对齐规则在成员间插入填充字节', '结构体自带隐藏成员', '编译错误导致', '内存不足'], answer: 0, explain: '内存对齐使访问更快，成员之间可能插入 padding，可用 #pragma pack 调整。' }
    ], '这一章把基本类型组合成自定义类型。',
      { t: '结构体', h: '<ul><li>定义类型与变量，成员用 . 访问，指针用 -> 访问。</li><li>内存对齐：成员按自身对齐数放置，可能插入填充字节。</li></ul>' },
      { t: '共用体与枚举', h: '<ul><li>union：成员共享内存，大小为最大成员（并按对齐）；常用于节省空间或类型双关。</li><li>typedef 可为类型起别名，便于定义链表等自引用结构。</li></ul>' },
      [REF_CPP]),

    mk('第 10 章 · 文件操作', '打开模式、读写函数与关闭文件。', [
      { stem: '以只读方式打开一个已存在的文本文件，应使用的模式字符串是：', options: ['"r"', '"w"', '"a"', '"rb+"'], answer: 0, explain: '"r" 只读（文件需存在）；"w" 新建/清空写；"a" 追加；加 b 为二进制。' },
      { stem: '用 "w" 模式打开一个已存在的文件会发生什么：', options: ['原内容被清空，文件长度变为 0', '在原内容后追加', '打开失败', '只读不可写'], answer: 0, explain: '"w" 会截断已有文件；要保留原内容应使用 "a"（追加）。' },
      { stem: '文件使用完毕必须调用 fclose，主要原因是：', options: ['把缓冲区数据写回文件并释放资源', '防止文件名被修改', '让文件变大', '提高文件大小精度'], answer: 0, explain: '写入常先进入缓冲区，不关闭可能丢失数据；描述符/句柄也需释放。' }
    ], '这一章让程序的数据能持久化。',
      { t: '打开与关闭', h: '<ul><li>fopen(路径, 模式)：r / w / a / r+ / w+ / a+，加 b 表示二进制。</li><li>用完 fclose；打开失败返回 NULL，必须先判断。</li></ul>' },
      { t: '读写', h: '<ul><li>字符：fgetc / fputc；字符串：fgets / fputs；格式化：fscanf / fprintf。</li><li>二进制块读写：fread / fwrite；定位：fseek / ftell / rewind。</li></ul>' },
      [REF_CCF])
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['C 语言程序设计'] = set(LIST);
  G.REAL_PAD_ALIAS['C语言程序设计'] = 'C 语言程序设计';
  G.REAL_PAD_ALIAS['C 语言'] = 'C 语言程序设计';
  G.REAL_PAD_ALIAS['程序设计基础（C）'] = 'C 语言程序设计';
})();
