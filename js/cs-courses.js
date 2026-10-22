/* ==========================================================
   cs-courses.js · 「计算机科学与技术」专业
   --------------------------------------------------------
   将原 5 个模块 × 15 关整合为一门课「C 语言程序设计」，
   共 15 章，按学习顺序排列。保留原有选择题、代码任务与文档。
   其余阶段模块保持南昌大学培养方案的占位结构。
   依赖：data.js（MAJOR_STAGE_OVERRIDES / buildLevels）、
         docs.js（DOCS / CS_REFS / C_SOURCES）、
         philosophy.js（stageTitlesOf）。
   ========================================================== */

(function () {
  var MAJOR = 'engineering-计算机科学与技术';
  var TITLES = stageTitlesOf('engineering');

  var COURSES = [
    /* ---- 大一 · 打地基 ---- */
    {
      name: 'C 语言程序设计',
      chapters: [
        {
          title: '认识你的第一行代码',
          brief: 'C 程序从 main 函数开始执行。变量 = 类型 + 名字 + 初值；运算符 + - * / % 做计算；scanf 读入、printf 输出。分号是语句结尾。',
          q: [
            { stem: '想让程序在屏幕上输出 Hello, C! —— 下面哪种写法是正确的？', options: ['printf("Hello, C!");', 'print("Hello, C!");', 'console.log("Hello, C!");', 'echo "Hello, C!";'], answer: 0, explain: 'C 语言用 printf 输出，字符串放双引号，语句结尾有分号。print 是 Python 的，console.log 是 JS 的，echo 是 shell 的。' },
            { stem: '定义一个整数变量 age 并赋值 18，正确写法是？', options: ['int age = 18;', 'age = int 18;', 'var age = 18;', 'integer age := 18;'], answer: 0, explain: '格式是「类型 变量名 = 值;」。int 是整数类型，写在变量名前面。' },
            { stem: '下面的运算结果是？\n\nint a = 10;\nprintf("%d", a % 3);', options: ['3', '1', '0', '程序报错'], answer: 1, explain: '% 是取余运算符：10 除以 3 商 3 余 1，所以 10 % 3 = 1。注意 % 只能用于整数。' }
          ],
          code: {
            task: '用 printf 在屏幕上输出一行：Hello, C!',
            starter: '#include <stdio.h>\n\nint main(void) {\n    // TODO: 在这里写 printf\n    return 0;\n}',
            hint: 'printf("Hello, C!\\n"); 注意用英文双引号，语句结尾有分号。',
            tests: [{ name: '样例', stdin: '', stdout: 'Hello, C!' }]
          },
          doc: {
            lead: '这一章的目标：写出人生第一段 C 程序，搞懂 main、printf、变量、类型、编译运行这条最基本的链路。',
            sections: [
              {
                id: 'hello',
                title: 'Hello World：一切的开始',
                html: '<pre><code>#include &lt;stdio.h&gt;\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}</code></pre>\n<p>逐行拆解：</p>\n<ul>\n  <li><code>#include &lt;stdio.h&gt;</code>：引入标准输入输出库，<code>printf</code> 就来自这里。</li>\n  <li><code>int main()</code>：程序的入口函数，<strong>每个 C 程序都从 main 开始执行</strong>。</li>\n  <li><code>printf("...")</code>：把括号里的内容打印到屏幕。<code>\\n</code> 是换行符。</li>\n  <li><code>return 0;</code>：向操作系统报告「程序正常结束」（0 = 成功）。</li>\n</ul>'
              },
              {
                id: 'compile',
                title: '编译运行：从源码到可执行文件',
                html: '<p>C 是<strong>编译型语言</strong>，源码不能直接跑，要先编译成机器码：</p>\n<pre><code># 终端里执行\ngcc hello.c -o hello      # 编译，生成可执行文件 hello\n./hello                   # 运行（Windows 下是 hello.exe）</code></pre>\n<p>编译分四步：<strong>预处理 → 编译 → 汇编 → 链接</strong>。初学只要记住「写完代码 → gcc 编译 → 运行」就行。</p>\n<div class="doc-tip">💡 如果提示 <code>gcc: command not found</code>，说明没装编译器。Windows 装 MinGW 或 MSVC，macOS 装 Xcode Command Line Tools（<code>xcode-select --install</code>），Linux 装 <code>gcc</code>。</div>'
              },
              {
                id: 'var',
                title: '变量与数据类型',
                html: '<p>变量是「给一块内存起个名字」，类型决定这块内存存什么、占多大：</p>\n<pre><code>int    age = 19;        // 整数，通常 4 字节\nfloat  height = 1.75;   // 单精度浮点，4 字节\ndouble pi = 3.14159;    // 双精度浮点，8 字节\nchar   grade = \'A\';     // 单个字符，1 字节</code></pre>\n<ul>\n  <li>C 是<strong>强类型语言</strong>：变量必须先声明类型才能用。</li>\n  <li>类型影响<strong>取值范围</strong>和<strong>精度</strong>：<code>int</code> 约 ±21 亿，<code>float</code> 只有 6~7 位有效数字，要高精度用 <code>double</code>。</li>\n  <li>命名规则：字母/数字/下划线，不能数字开头，区分大小写，不能用关键字（<code>int</code>、<code>if</code> 等）。</li>\n</ul>'
              },
              {
                id: 'printf_fmt',
                title: 'printf 的格式化占位符',
                html: '<pre><code>int a = 10;\ndouble b = 3.14;\nchar c = \'X\';\n\nprintf("整数=%d\\n", a);        // %d  → int\nprintf("浮点=%.2f\\n", b);      // %f  → float/double，.2 表示保留 2 位小数\nprintf("字符=%c\\n", c);        // %c  → char\nprintf("字符串=%s\\n", "hi");   // %s  → 字符串\nprintf("地址=%p\\n", &amp;a);       // %p  → 指针地址</code></pre>\n<p>占位符和参数的<strong>类型、数量必须一一对应</strong>，写错了结果不可预期（比如用 <code>%d</code> 打印 <code>double</code> 会出乱码）。</p>'
              }
            ],
            refs: [CS_REFS.entry, CS_REFS.tools].concat(C_SOURCES)
          }
        },
        {
          title: '运算符与表达式',
          brief: '算术运算符 + - * / %，其中 / 做整数除法会丢掉小数；% 只能用于整数。++ / -- 有前置后置之分，优先级决定先算谁。',
          q: [
            { stem: 'int a = 5; printf("%d", a++); 输出什么？', options: ['5', '6', '4', '编译报错'], answer: 0, explain: 'a++ 是后置自增：先使用 a 当前的值 5 输出，然后 a 才变成 6。' },
            { stem: 'int a = 7, b = 2; 那么 a / b 和 a % b 分别是？', options: ['3 和 1', '3.5 和 1', '3 和 0', '2 和 3'], answer: 0, explain: '两个整数相除，结果仍是整数，小数部分被丢掉，所以 7 / 2 = 3；7 % 2 是余数 1。' },
            { stem: '表达式 2 + 3 * 4 的值是多少？', options: ['14', '20', '24', '9'], answer: 0, explain: '乘法优先级高于加法，先算 3 * 4 = 12，再加 2，结果是 14。' }
          ],
          code: {
            task: '读入两个整数 a、b，依次输出它们的和、差、积、商、余数，每个结果占一行。',
            starter: '#include <stdio.h>\n\nint main(void) {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    // TODO: 输出 5 行：a+b、a-b、a*b、a/b、a%b\n    return 0;\n}',
            hint: '整数除法会丢掉小数：7 / 2 输出 3，7 % 2 输出 1。',
            tests: [
              { name: '样例 1', stdin: '7 2', stdout: '9\n5\n14\n3\n1' },
              { name: '样例 2', stdin: '8 3', stdout: '11\n5\n24\n2\n2' }
            ]
          },
          doc: {
            lead: '这一章的目标：掌握 C 里各种运算符的写法和优先级，能看懂一个复杂表达式到底先算谁、后算谁。',
            sections: [
              {
                id: 'arith',
                title: '算术运算符：加减乘除余',
                html: '<pre><code>int a = 10, b = 3;\na + b    // 13\na - b    // 7\na * b    // 30\na / b    // 3   ← 整数除法，只保留整数部分！\na % b    // 1   ← 取余（模），只对整数有效</code></pre>\n<ul>\n  <li><code>/</code> 的坑：<strong>两个整数相除结果还是整数</strong>，小数部分直接丢弃（不是四舍五入）。想要小数，至少一个操作数写成浮点：<code>10.0 / 3</code> → <code>3.333...</code>。</li>\n  <li><code>%</code> 取余只能用于整数，常用于「判断奇偶」（<code>n % 2 == 0</code>）和「取个位」（<code>n % 10</code>）。</li>\n</ul>'
              },
              {
                id: 'inc',
                title: '自增自减：++ 与 --',
                html: '<pre><code>int i = 5;\ni++;      // i 变成 6，等价于 i = i + 1\n++i;      // i 变成 7\ni--;      // i 变成 6</code></pre>\n<p><strong>前缀 vs 后缀</strong>的区别在「取值时机」：</p>\n<pre><code>int a = 5, b = 5;\nint x = a++;   // 先取 a 的值赋给 x，a 再加 1 → x=5, a=6\nint y = ++b;   // b 先加 1，再赋给 y       → y=6, b=6</code></pre>\n<div class="doc-tip">⚠️ 不要在同一个表达式里对同一个变量多次 <code>++</code>，比如 <code>i++ + ++i</code>——这在 C 标准里是<strong>未定义行为</strong>，不同编译器结果不一样。拆开写最安全。</div>'
              },
              {
                id: 'assign',
                title: '赋值与复合赋值',
                html: '<pre><code>int a = 10;\na += 5;   // a = a + 5 → 15\na -= 3;   // a = a - 3 → 12\na *= 2;   // a = a * 2 → 24\na /= 4;   // a = a / 4 → 6\na %= 4;   // a = a % 4 → 2</code></pre>\n<p>复合赋值运算符（<code>+= -= *= /= %=</code>）是简写，<strong>功能完全等价</strong>于展开写法，但更紧凑。</p>\n<div class="doc-tip">💡 赋值表达式本身也有值：<code>a = 5</code> 这个表达式的值是 5。所以 <code>a = b = c = 0</code> 可以连续赋值（从右往左）。</div>'
              },
              {
                id: 'precedence',
                title: '优先级与结合性',
                html: '<p>运算符有<strong>优先级</strong>（谁先算）和<strong>结合性</strong>（同级时从左还是从右算）：</p>\n<ul>\n  <li>高 → 低：<code>()</code> 括号 &gt; 单目（<code>++ -- ! &amp; *</code>）&gt; 算术（<code>* / %</code> &gt; <code>+ -</code>）&gt; 比较（<code>&gt; &lt; == !=</code>）&gt; 逻辑（<code>&amp;&amp;</code> &gt; <code>||</code>）&gt; 赋值（<code>= +=</code>）。</li>\n  <li>赋值运算符是<strong>右结合</strong>：<code>a = b = 3</code> 先算 <code>b = 3</code>。</li>\n  <li>其余大多<strong>左结合</strong>：<code>a - b - c</code> 先算 <code>a - b</code>。</li>\n</ul>\n<div class="doc-tip">💡 记不住优先级？<strong>加括号</strong>永远不会错。写复杂表达式时，括号既是给编译器看的，更是给三个月后的自己看的。</div>'
              }
            ],
            refs: [CS_REFS.entry, CS_REFS.tools].concat(C_SOURCES)
          }
        },
        {
          title: '和程序对话：输入输出',
          brief: 'printf 负责输出，scanf 负责读入。scanf 的变量参数前要加 &（取地址）；格式占位符要和变量类型一一对应；%.2f 表示保留两位小数。',
          q: [
            { stem: 'scanf("%d", &n); 里的 & 有什么作用？', options: ['把 n 的地址交给 scanf，让它能把值写回去', '表示取余运算', '只是固定写法，可以省略', '表示 n 是常量'], answer: 0, explain: 'scanf 需要知道「把读到的值存到哪里」，所以传的是变量地址。漏掉 & 是新手最常见的崩溃原因之一。' },
            { stem: 'printf("%.2f", 3.14159); 会输出什么？', options: ['3.14', '3.14159', '3.1', '3'], answer: 0, explain: '%.2f 表示按浮点数输出并保留 2 位小数，第三位会四舍五入，所以是 3.14。' },
            { stem: '要读入一个整数存进 int n，正确写法是？', options: ['scanf("%d", &n);', 'scanf("%d", n);', 'scanf("%f", &n);', 'scanf("%s", &n);'], answer: 0, explain: '整数用 %d，变量前要加 &。%f 对应 float，%s 对应字符串，类型不匹配会读错。' }
          ],
          code: {
            task: '读入一个整数 a 和一个小数 b，按「a=3 b=2.5」的格式输出，小数保留 1 位。',
            starter: '#include <stdio.h>\n\nint main(void) {\n    int a;\n    double b;\n    scanf("%d %lf", &a, &b);\n    // TODO: 用 printf 一次输出两个值\n    return 0;\n}',
            hint: 'printf("a=%d b=%.1f\\n", a, b);',
            tests: [
              { name: '样例', stdin: '3 2.5', stdout: 'a=3 b=2.5' },
              { name: '隐藏用例', stdin: '-7 10', stdout: 'a=-7 b=10.0' }
            ]
          },
          doc: {
            lead: '这一章的目标：用 printf 格式化输出、用 scanf 读取用户输入，理解 & 为什么在 scanf 里必须出现。',
            sections: [
              {
                id: 'printf',
                title: 'printf：格式化输出',
                html: '<pre><code>int    n = 42;\ndouble d = 3.14159;\nchar   c = \'Q\';\nchar  *s = "Hello";\n\nprintf("%d\\n", n);           // 42\nprintf("%5d\\n", n);          // "   42"  宽度 5，右对齐\nprintf("%-5d|\\n", n);        // "42   |"  负号表示左对齐\nprintf("%.2f\\n", d);         // 3.14     保留 2 位小数\nprintf("%8.3f\\n", d);        // "   3.142"  总宽 8，小数 3 位\nprintf("%c %s\\n", c, s);     // Q Hello</code></pre>\n<p>常用格式符：<code>%d</code>(int)、<code>%f</code>(float/double)、<code>%c</code>(char)、<code>%s</code>(字符串)、<code>%p</code>(地址)、<code>%%</code>(输出百分号本身)。</p>'
              },
              {
                id: 'scanf',
                title: 'scanf：读取输入（& 是关键）',
                html: '<pre><code>int age;\nprintf("请输入年龄：");\nscanf("%d", &amp;age);           // &amp; 取地址，把读到的值放进 age 所在的内存\nprintf("你输入了：%d\\n", age);</code></pre>\n<p><strong>为什么要 <code>&amp;</code>？</strong><code>scanf</code> 需要知道「把数据写到哪里」，所以它要的是变量的<strong>地址</strong>，而不是变量的值。忘了 <code>&amp;</code> 会编译通过但运行时崩溃或写入错误位置。</p>\n<pre><code>double height;\nscanf("%lf", &amp;height);       // double 用 %lf（long float）\nchar name[20];\nscanf("%s", name);           // 字符串数组名本身就是地址，不用 &amp;</code></pre>\n<div class="doc-tip">⚠️ <code>%s</code> 遇到空格/回车就停，所以 <code>scanf("%s", name)</code> 读不了「张 三」。要读一整行用 <code>fgets(name, sizeof(name), stdin)</code>。</div>'
              },
              {
                id: 'escape',
                title: '转义字符',
                html: '<p>反斜杠 <code>\\</code> 开头的特殊字符：</p>\n<table>\n<tr><th>转义符</th><th>含义</th></tr>\n<tr><td><code>\\n</code></td><td>换行</td></tr>\n<tr><td><code>\\t</code></td><td>制表符（Tab）</td></tr>\n<tr><td><code>\\\\</code></td><td>反斜杠本身</td></tr>\n<tr><td><code>\\"</code></td><td>双引号</td></tr>\n<tr><td><code>\\0</code></td><td>空字符（字符串结束标记）</td></tr>\n</table>\n<pre><code>printf("C:\\\\Users\\\\name");   // 输出 C:\\Users\\name\nprintf("姓名\\t年龄\\n");        // 用制表符对齐</code></pre>'
              },
              {
                id: 'pitfalls',
                title: '输入缓冲区的坑',
                html: '<p>用户敲的字符先放在<strong>输入缓冲区</strong>里，<code>scanf</code> 从里面取。常见坑：</p>\n<pre><code>int a; char c;\nscanf("%d", &amp;a);\nscanf("%c", &amp;c);          // 会读到上一个 scanf 留下的回车！\nprintf("a=%d c=%c\\n", a, c);</code></pre>\n<p>输入 <code>42</code> 回车后，缓冲区里剩了个 <code>\\n</code>，第二个 <code>scanf("%c")</code> 直接把它读走了。</p>\n<p>解决：在 <code>%c</code> 前加空格跳过空白：<code>scanf(" %c", &amp;c);</code>。或者用 <code>getchar()</code> 吃掉多余的回车。</p>'
              }
            ],
            refs: [CS_REFS.entry, CS_REFS.tools].concat(C_SOURCES)
          }
        },
        {
          title: '让程序学会判断',
          brief: 'if 条件成立走一条路、不成立走另一条；switch 根据整数表达式的值跳到对应 case；每个 case 记得加 break 才不会一路往下跑。',
          q: [
            { stem: '判断「成绩及格（60 分及以上）」，哪个写法正确？', options: ['if (score >= 60)', 'if score >= 60', 'if (score => 60)', 'while (score >= 60)'], answer: 0, explain: 'if 的条件必须写在圆括号里；「大于等于」是 >=；while 是循环不是判断。' },
            { stem: '下面这段 switch 会输出什么？\n\nchar g = \'B\';\nswitch (g) {\n  case \'A\': printf("优"); break;\n  case \'B\': printf("良");\n  case \'C\': printf("中"); break;\n  default: printf("差");\n}', options: ['良', '良中', '良中差', '编译报错'], answer: 1, explain: 'case B 后面没写 break，匹配到之后会「穿透」往下跑，依次执行 B 和 C，输出「良中」。这是 switch 最经典的坑。' },
            { stem: 'switch 后面的表达式可以是下面哪种类型？', options: ['字符串', '整数或字符', '浮点数', '任意类型'], answer: 1, explain: 'switch 表达式必须是整数类型（int / char / short / 枚举），case 标签必须是常量。浮点数和字符串都不能用。' }
          ],
          code: {
            task: '读入一个整数成绩 score，及格（>= 60）输出 pass，否则输出 fail。',
            starter: '#include <stdio.h>\n\nint main(void) {\n    int score;\n    scanf("%d", &score);\n    // TODO: 用 if / else 判断并输出 pass 或 fail\n    return 0;\n}',
            hint: 'if (score >= 60) { printf("pass\\n"); } else { printf("fail\\n"); }',
            tests: [
              { name: '样例 1', stdin: '60', stdout: 'pass' },
              { name: '样例 2', stdin: '59', stdout: 'fail' },
              { name: '隐藏用例', stdin: '100', stdout: 'pass' }
            ]
          },
          doc: {
            lead: '这一章的目标：让程序根据条件走不同的分支，并且能看懂「为什么我的 if 没生效」这类问题。',
            sections: [
              {
                id: 'compare',
                title: '比较运算：结果是「真」还是「假」',
                html: '<p>C 里没有真正的布尔类型（C99 之前），比较的结果就是一个整数：<strong>0 表示假，非 0 表示真</strong>。</p>\n<pre><code>5 &gt; 3      // 1（真）\n5 == 3     // 0（假）\n5 != 3     // 1（真）\n\nint a = 5, b = 3;\nprintf("%d", a &gt; b);   // 输出 1</code></pre>\n<p>六个比较运算符：<code>==</code> 等于、<code>!=</code> 不等于、<code>&gt;</code> 大于、<code>&lt;</code> 小于、<code>&gt;=</code> 大于等于、<code>&lt;=</code> 小于等于。</p>\n<div class="doc-tip">⚠️ 最经典的坑：<code>=</code> 是赋值，<code>==</code> 才是比较。<code>if (a = 5)</code> 不是判断，而是「把 5 赋给 a，然后这个赋值表达式的值是 5（真）」——编译能过，逻辑全错。</div>'
              },
              {
                id: 'if',
                title: 'if / else if / else',
                html: '<p>基本结构：条件成立就执行花括号里的内容。</p>\n<pre><code>int score = 78;\n\nif (score &gt;= 90) {\n    printf("优秀\\n");\n} else if (score &gt;= 60) {\n    printf("及格\\n");\n} else {\n    printf("不及格\\n");\n}</code></pre>\n<p>要点：</p>\n<ul>\n  <li>判断<strong>从上往下</strong>，第一个成立的分支执行完就跳出整条 if 链，不会再往下判断。</li>\n  <li>所以顺序很重要：先判断 <code>&gt;= 90</code> 再判断 <code>&gt;= 60</code>，顺序写反，所有人都会变成「及格」。</li>\n  <li>只有一条语句时花括号可以省，但<strong>建议永远写</strong>，省了以后加代码就会出错。</li>\n</ul>'
              },
              {
                id: 'logic',
                title: '逻辑运算：&& || !',
                html: '<p>把多个条件组合起来：</p>\n<pre><code>int age = 19;\nint height = 175;\n\nif (age &gt;= 18 &amp;&amp; height &gt; 170) {\n    printf("两个条件都满足\\n");\n}\n\nif (age &lt; 18 || height &lt; 160) {\n    printf("至少一个满足\\n");\n}\n\nif (!(age &gt;= 18)) {\n    printf("未成年\\n");\n}</code></pre>\n<ul>\n  <li><code>&amp;&amp;</code> 与：两边都真才真。</li>\n  <li><code>||</code> 或：任意一边真就真。</li>\n  <li><code>!</code> 非：取反。</li>\n  <li>C 有<strong>短路求值</strong>：<code>a &amp;&amp; b</code> 中 a 为假时，b 根本不会被计算。这可以用来做安全检查，比如 <code>if (p != NULL &amp;&amp; p-&gt;value &gt; 0)</code>。</li>\n</ul>'
              },
              {
                id: 'pitfalls',
                title: '三个高频错误',
                html: '<ol>\n  <li><strong>把 <code>==</code> 写成 <code>=</code></strong>：<code>if (x = 0)</code> 永远为假，而且不报错。</li>\n  <li><strong>用 <code>==</code> 比较浮点数</strong>：<code>0.1 + 0.2 == 0.3</code> 在 C 里可能为假，因为小数在计算机里是二进制近似存储的。正确做法是比较差值的绝对值：<code>fabs(a - b) &lt; 1e-9</code>。</li>\n  <li><strong>if 后面多写了分号</strong>：<code>if (x &gt; 0);</code> 会让 if 管到一个空语句，后面的代码块永远执行。</li>\n</ol>\n<div class="doc-tip">💡 调试技巧：把条件里的每个变量单独打印出来，看它们到底等于几，比盯着代码猜快得多。</div>'
              },
              {
                id: 'switch',
                title: 'switch：多路分支的另一种写法',
                html: '<p>当你要根据<strong>同一个整数表达式</strong>的值走不同分支时，<code>switch</code> 比 <code>if-else if</code> 更清晰：</p>\n<pre><code>char grade = \'B\';\nswitch (grade) {\n  case \'A\': printf("优秀"); break;\n  case \'B\':\n  case \'C\': printf("及格"); break;   // B 和 C 共用这段\n  case \'D\': printf("不及格"); break;\n  default : printf("无效成绩");\n}</code></pre>\n<p><strong>三个必须记住的规则</strong>：</p>\n<ol>\n  <li><strong>case 后要加 break</strong>——不加的话会"穿透"到下一个 case 继续执行，这是 switch 最经典的坑。除非你故意想让多个 case 共用一段代码（如上面的 B 和 C）。</li>\n  <li><strong>switch 表达式只能是整数类型</strong>：int / char / short / 枚举。浮点数和字符串都不行。</li>\n  <li><strong>default 可选</strong>：所有 case 都不匹配时执行 default；如果没有 default 就直接跳过整个 switch。</li>\n</ol>\n<div class="doc-tip">💡 什么时候用 switch？当条件是「等于某个常量」的多路分支时优先 switch；需要范围判断（如 <code>x &gt; 60</code>）还是得用 if。</div>'
              }
            ],
            refs: [CS_REFS.entry, CS_REFS.plan].concat(C_SOURCES)
          }
        },
        {
          title: '分支逻辑实战',
          brief: '多个条件要用 &&（并且）、||（或者）连起来；C 里不能写 90 <= score < 100。if (x = 5) 是赋值，不是比较。',
          q: [
            { stem: '要判断 score 在 90 到 99 之间，正确写法是？', options: ['score >= 90 && score < 100', '90 <= score < 100', 'score >= 90 || score < 100', 'score => 90 && score =< 100'], answer: 0, explain: 'C 的关系运算符不能连写，必须拆成两个条件用 && 连接。|| 只要一边成立就为真，范围会失效。' },
            { stem: 'if (x = 5) { ... } 这段代码的问题是什么？', options: ['把比较写成了赋值，条件永远为真', '5 不能赋给 x', 'if 后面不能加括号', '没有问题'], answer: 0, explain: '= 是赋值，== 才是比较。x = 5 会把 5 赋给 x，表达式的值非零，条件永远成立。' },
            { stem: '逻辑或 a || b 中，如果 a 已经为真，会怎样？', options: ['不再计算 b（短路）', '仍然计算 b', '程序报错', '把 b 的值赋给 a'], answer: 0, explain: '|| 具有短路特性：左边已经能确定结果为真，右边就不会再执行。常用来避免不必要的计算或越界访问。' }
          ],
          code: {
            task: '读入成绩 score，按规则输出等级：>=90 输出 A，>=80 输出 B，>=70 输出 C，>=60 输出 D，其余输出 E。',
            starter: '#include <stdio.h>\n\nint main(void) {\n    int score;\n    scanf("%d", &score);\n    // TODO: 用 if / else if 判断等级\n    return 0;\n}',
            hint: '从高到低判断：if (score >= 90) ... else if (score >= 80) ...',
            tests: [
              { name: '样例 1', stdin: '95', stdout: 'A' },
              { name: '样例 2', stdin: '82', stdout: 'B' },
              { name: '边界', stdin: '60', stdout: 'D' },
              { name: '隐藏用例', stdin: '59', stdout: 'E' }
            ]
          },
          doc: {
            lead: '这一章的目标：用逻辑运算符组合复杂条件，避开 = 与 ==、悬垂 else 等经典陷阱，写出不会出错的判断。',
            sections: [
              {
                id: 'compound',
                title: '组合条件：&& || !',
                html: '<p>真实题目里的条件很少是单一判断，通常要组合：</p>\n<pre><code>// 判断闰年：能被 4 整除但不能被 100 整除，或者能被 400 整除\nint isLeap = (year % 4 == 0 &amp;&amp; year % 100 != 0) || (year % 400 == 0);\n\n// 判断成绩是否在 [60, 90) 区间\nint ok = score &gt;= 60 &amp;&amp; score &lt; 90;\n\n// 判断字符是否为小写字母\nint isLower = ch &gt;= \'a\' &amp;&amp; ch &lt;= \'z\';</code></pre>\n<p><strong>范围判断</strong>必须用 <code>&amp;&amp;</code> 连接两个不等式，不能写 <code>60 &lt;= score &lt; 90</code>——那在数学里对，在 C 里会先算 <code>60 &lt;= score</code> 得到 0 或 1，再用结果和 90 比，逻辑全错。</p>'
              },
              {
                id: 'short-circuit',
                title: '短路求值：有时是好事，有时是坑',
                html: '<pre><code>int a = 0;\nif (a != 0 &amp;&amp; 10 / a &gt; 1) {   // a!=0 为假，10/a 不会执行 → 不会除零崩溃\n    printf("ok");\n}\n\nif (a == 0 || 10 / a &gt; 1) {   // a==0 为真，后面不算\n    printf("ok");\n}</code></pre>\n<p>短路让我们可以<strong>把安全检查写在前面</strong>，后续条件就可以放心使用可能危险的操作。反过来，如果你期望某个条件的副作用（比如 <code>i++</code>）一定执行，就要小心短路会跳过它。</p>'
              },
              {
                id: 'equal',
                title: '= vs ==：一辈子的对手',
                html: '<pre><code>if (x = 5) { ... }   // ⚠️ 这是赋值！x 被设为 5，条件永真\nif (x == 5) { ... }  // ✅ 这才是判断</code></pre>\n<p>有个防御性写法：<strong>把常量放左边</strong>：<code>if (5 == x)</code>。这样万一写成 <code>5 = x</code>，编译器会直接报错（不能给常量赋值），帮你在编译期就发现 bug。</p>\n<div class="doc-tip">💡 现代编译器（gcc -Wall）会对 <code>if (x = 5)</code> 报警告，但养成 <code>==</code> 的肌肉记忆更靠谱。</div>'
              },
              {
                id: 'dangling-else',
                title: '悬垂 else：else 到底跟谁？',
                html: '<pre><code>if (a &gt; 0)\n    if (b &gt; 0)\n        printf("A");\nelse\n    printf("B");   // 这个 else 属于谁？</code></pre>\n<p>C 的规则：<strong>else 总是和最近的未匹配的 if 配对</strong>。所以上面的 <code>else</code> 属于内层的 <code>if (b &gt; 0)</code>，不是外层的。</p>\n<p>想让 else 属于外层，必须加花括号：</p>\n<pre><code>if (a &gt; 0) {\n    if (b &gt; 0)\n        printf("A");\n} else {\n    printf("B");   // 现在属于外层 if\n}</code></pre>\n<div class="doc-tip">⚠️ 这就是为什么「永远写花括号」是铁律——省花括号省出来的 bug，比省下的那一行代码贵一万倍。</div>'
              }
            ],
            refs: [CS_REFS.entry, CS_REFS.plan].concat(C_SOURCES)
          }
        },
        {
          title: '重复的力量',
          brief: '把同一段代码重复执行。for 写死次数、while 写到条件不成立为止、do-while 至少跑一遍才判断。break 跳出循环，continue 跳过本轮。',
          q: [
            { stem: 'for (int i = 1; i <= 3; i++) printf("%d", i); 会输出什么？', options: ['123', '012', '1234', '321'], answer: 0, explain: 'i 依次取 1、2、3 并打印；当 i 变成 4 时，4 <= 3 不成立，循环结束。' },
            { stem: '下面这个循环，循环体一共执行多少次？\n\nfor (int i = 0; i < 5; i++) { /* 循环体 */ }', options: ['4 次', '5 次', '6 次', '无限次'], answer: 1, explain: 'i 取 0、1、2、3、4 共 5 个值；当 i = 5 时 5 < 5 不成立，循环退出。' },
            { stem: '循环结束时 i 的值是多少？\n\nint i = 0;\nwhile (i < 3) { i++; }', options: ['0', '2', '3', '死循环'], answer: 2, explain: 'i 从 0 开始，每轮加 1：0 → 1 → 2 → 3。当 i = 3 时 3 < 3 不成立，循环退出，此时 i 就是 3。' }
          ],
          code: {
            task: '读入正整数 n，输出 1 + 2 + ... + n 的和。',
            starter: '#include <stdio.h>\n\nint main(void) {\n    int n, sum = 0;\n    scanf("%d", &n);\n    // TODO: 用循环把 1 到 n 累加到 sum\n    printf("%d\\n", sum);\n    return 0;\n}',
            hint: 'for (int i = 1; i <= n; i++) sum += i;',
            tests: [
              { name: '样例 1', stdin: '5', stdout: '15' },
              { name: '样例 2', stdin: '1', stdout: '1' },
              { name: '隐藏用例', stdin: '100', stdout: '5050' }
            ]
          },
          doc: {
            lead: '这一章的目标：用循环把「重复的事」交给计算机做，并且能判断自己写的是不是会死循环。',
            sections: [
              {
                id: 'for',
                title: 'for 循环：三段式写清楚',
                html: '<pre><code>for (int i = 1; i &lt;= 5; i++) {\n    printf("%d ", i);\n}\n// 输出：1 2 3 4 5</code></pre>\n<p>括号里由分号隔开<strong>三段</strong>，执行顺序是：</p>\n<ol>\n  <li><code>int i = 1</code>：初始化，只在开始时执行一次；</li>\n  <li><code>i &lt;= 5</code>：每轮开始前判断，为假就结束循环；</li>\n  <li>循环体执行；</li>\n  <li><code>i++</code>：每轮结束后更新，然后回到第 2 步。</li>\n</ol>\n<div class="doc-tip">💡 <code>i++</code> 等价于 <code>i = i + 1</code>。<code>i--</code>、<code>i += 2</code> 也是同理的简写。</div>'
              },
              {
                id: 'while',
                title: 'while 与 do-while',
                html: '<p>不知道要循环多少次、只知道「什么时候停」时，用 <code>while</code>：</p>\n<pre><code>int n = 12345, count = 0;\nwhile (n &gt; 0) {\n    n = n / 10;     // 整数除法，每次去掉最后一位\n    count++;\n}\nprintf("共 %d 位\\n", count);</code></pre>\n<p><code>do-while</code> 先执行一次再判断，适合「至少要跑一遍」的场景（比如读输入直到合法）：</p>\n<pre><code>do {\n    printf("请输入 1~100：");\n    scanf("%d", &amp;x);\n} while (x &lt; 1 || x &gt; 100);</code></pre>\n<p>选择建议：<strong>次数已知用 for，次数未知用 while，必须至少执行一次用 do-while</strong>。</p>'
              },
              {
                id: 'break',
                title: 'break 与 continue',
                html: '<ul>\n  <li><code>break</code>：<strong>立刻跳出整个循环</strong>，后面的轮次不再执行。</li>\n  <li><code>continue</code>：<strong>跳过本轮剩下的语句</strong>，直接进入下一轮。</li>\n</ul>\n<pre><code>for (int i = 1; i &lt;= 10; i++) {\n    if (i == 5) continue;   // 跳过 5\n    if (i == 8) break;      // 到 8 就停\n    printf("%d ", i);       // 输出 1 2 3 4 6 7\n}</code></pre>\n<div class="doc-tip">⚠️ 注意：<code>continue</code> 在 <code>while</code> 里容易写出死循环——如果「更新条件」的语句被 continue 跳过，循环就永远不结束。</div>'
              },
              {
                id: 'patterns',
                title: '三个必背的循环套路',
                html: '<p><strong>① 累加求和</strong></p>\n<pre><code>int sum = 0;\nfor (int i = 1; i &lt;= 100; i++) sum += i;</code></pre>\n<p><strong>② 计数</strong>（满足条件的有几个）</p>\n<pre><code>int cnt = 0;\nfor (int i = 1; i &lt;= 100; i++)\n    if (i % 3 == 0) cnt++;</code></pre>\n<p><strong>③ 求最值</strong>（先把第一个元素当最大，后面挨个比）</p>\n<pre><code>int a[5] = {3, 9, 2, 7, 5};\nint max = a[0];\nfor (int i = 1; i &lt; 5; i++)\n    if (a[i] &gt; max) max = a[i];</code></pre>\n<p>这三套是所有循环题的骨架，后面无论题目怎么变，基本都是它们的组合。</p>'
              }
            ],
            refs: [CS_REFS.entry, CS_REFS.missing].concat(C_SOURCES)
          }
        },
        {
          title: '循环嵌套与图案',
          brief: '外层循环控制行，内层循环控制每一行打印几个字符，这是打印图形的通用套路。break 只跳出当前这一层循环。',
          q: [
            { stem: '外层循环执行 3 次、内层循环每次执行 4 次，循环体一共执行多少次？', options: ['7 次', '12 次', '3 次', '4 次'], answer: 1, explain: '嵌套循环的总次数是相乘：3 × 4 = 12 次。' },
            { stem: '在两层嵌套循环里执行 break，会跳出几层？', options: ['只跳出当前所在的那一层', '同时跳出两层', '跳出整个程序', '一层都不跳'], answer: 0, explain: 'break 只作用于它所在的那一层循环。要一次跳出多层，可以用标志变量或 goto。' },
            { stem: 'continue 的作用是？', options: ['跳过本轮剩下的语句，直接进入下一轮', '结束整个循环', '重新从第一轮开始', '跳出函数'], answer: 0, explain: 'continue 不结束循环，只是放弃本轮剩余部分，接着判断下一轮条件。' }
          ],
          code: {
            task: '读入正整数 n，输出 n 行星号三角形：第 1 行 1 个 *，第 2 行 2 个……以此类推。',
            starter: '#include <stdio.h>\n\nint main(void) {\n    int n;\n    scanf("%d", &n);\n    // TODO: 外层控制行，内层控制每行打印几个 *\n    return 0;\n}',
            hint: 'for (int i = 1; i <= n; i++) { for (int j = 0; j < i; j++) printf("*"); printf("\\n"); }',
            tests: [
              { name: '样例', stdin: '3', stdout: '*\n**\n***' },
              { name: '隐藏用例', stdin: '1', stdout: '*' }
            ]
          },
          doc: {
            lead: '这一章的目标：用嵌套循环打印二维图案，理解 break/continue 在多层循环里的作用范围。',
            sections: [
              {
                id: 'nested',
                title: '嵌套循环：外层管行，内层管列',
                html: '<pre><code>// 打印 3 行 5 列的星号矩阵\nfor (int i = 0; i &lt; 3; i++) {        // 外层：行\n    for (int j = 0; j &lt; 5; j++) {    // 内层：列\n        printf("*");\n    }\n    printf("\\n");                    // 一行打完换行\n}\n// 输出：\n// *****\n// *****\n// *****</code></pre>\n<p>规律：<strong>外层循环变量 <code>i</code> 控制行号，内层 <code>j</code> 控制每行的第几个字符</strong>。所有二维图案题都套用这个骨架，只是「每行打什么」的条件不同。</p>'
              },
              {
                id: 'triangle',
                title: '三角形：让每行的星数随行号变化',
                html: '<pre><code>// 直角三角形（第 i 行打 i+1 个星）\nfor (int i = 0; i &lt; 5; i++) {\n    for (int j = 0; j &lt;= i; j++) {   // 列数 = 行号 + 1\n        printf("*");\n    }\n    printf("\\n");\n}\n// *\n// **\n// ***\n// ****\n// *****</code></pre>\n<p>关键是找到「第 i 行打几个」的规律。想打印倒三角就让列数从多到少：<code>j &lt; 5 - i</code>。</p>'
              },
              {
                id: 'multiply',
                title: '经典例题：九九乘法表',
                html: '<pre><code>for (int i = 1; i &lt;= 9; i++) {\n    for (int j = 1; j &lt;= i; j++) {\n        printf("%d*%d=%-4d", j, i, i * j);\n    }\n    printf("\\n");\n}</code></pre>\n<p>第 i 行有 i 个式子，所以内层 <code>j</code> 从 1 到 <code>i</code>。<code>%-4d</code> 让每个式子占 4 列、左对齐，排起来整齐。</p>'
              },
              {
                id: 'scope',
                title: 'break / continue 在嵌套中的作用域',
                html: '<p><code>break</code> 和 <code>continue</code> <strong>只作用于最内层的那一层循环</strong>，不会跳出外层：</p>\n<pre><code>for (int i = 0; i &lt; 3; i++) {\n    for (int j = 0; j &lt; 5; j++) {\n        if (j == 2) break;   // 只跳出内层 j 循环，外层 i 继续\n        printf("(%d,%d) ", i, j);\n    }\n    printf("\\n");\n}\n// 每行只会打印 j=0, j=1</code></pre>\n<p>想跳出多层循环？可以用 <code>goto</code>（C 里合法但要慎用），或者设一个外层标志变量：</p>\n<pre><code>int stop = 0;\nfor (int i = 0; i &lt; 3 &amp;&amp; !stop; i++) {\n    for (int j = 0; j &lt; 5; j++) {\n        if (j == 2) { stop = 1; break; }\n    }\n}</code></pre>'
              }
            ],
            refs: [CS_REFS.entry, CS_REFS.missing].concat(C_SOURCES)
          }
        },
        {
          title: '把一组数存起来',
          brief: '数组是连续存放的一排变量，下标从 0 开始。二维数组是"数组的数组"。C 没有字符串类型，字符串就是以 \\0 结尾的字符数组。C 不检查越界，自己看好下标。',
          q: [
            { stem: 'int nums[5]; 这个数组最多能放几个整数？合法下标是？', options: ['4 个，0~3', '5 个，0~4', '5 个，1~5', '6 个，0~5'], answer: 1, explain: '方括号里的数字就是元素个数，下标从 0 开始。int nums[5] 有 5 个元素，下标 0 ~ 4。' },
            { stem: '定义一个 3 行 4 列的整数矩阵，正确写法是？', options: ['int m[3][4];', 'int m[4][3];', 'int m[12];', 'int m = matrix(3,4);'], answer: 0, explain: '二维数组声明是 int 数组名[行数][列数]。int m[3][4] 表示 3 行 4 列共 12 个整数。' },
            { stem: 'char s[] = "hello"; printf("%d", strlen(s)); 输出多少？（已知 string.h 已包含）', options: ['4', '5', '6', '不确定'], answer: 1, explain: '"hello" 实际占 6 个字节（h e l l o \\0），但 strlen 遇到 \\0 就停，返回的是不含 \\0 的长度 5。' }
          ],
          code: {
            task: '先读入整数 n，再读入 n 个整数，输出其中的最大值。',
            starter: '#include <stdio.h>\n\nint main(void) {\n    int n;\n    scanf("%d", &n);\n    int x, max;\n    scanf("%d", &max);\n    // TODO: 继续读剩下的 n-1 个数，更新 max\n    printf("%d\\n", max);\n    return 0;\n}',
            hint: '先读第一个数作为 max，再从第 2 个数循环到第 n 个数：if (x > max) max = x;',
            tests: [
              { name: '样例 1', stdin: '5\n3 9 2 7 4', stdout: '9' },
              { name: '样例 2（负数）', stdin: '3\n-5 -2 -9', stdout: '-2' }
            ]
          },
          doc: {
            lead: '这一章的目标：用数组一次性管理一组数据，并且知道下标越界为什么最危险。',
            sections: [
              {
                id: 'array',
                title: '数组：一排连续的格子',
                html: '<pre><code>int a[5];                 // 5 个整数，未初始化\nint b[5] = {1, 2, 3, 4, 5};\nint c[5] = {0};           // 全部为 0\nint d[]  = {1, 2, 3};     // 长度自动为 3</code></pre>\n<ul>\n  <li>数组长度<strong>在定义时固定</strong>，之后不能改。</li>\n  <li>下标<strong>从 0 开始</strong>：长度为 5 的数组，合法下标是 0~4。</li>\n  <li>元素在内存里是<strong>连续存放</strong>的——这是数组「随机访问很快」的原因。</li>\n</ul>\n<div class="doc-tip">💡 <code>a[i]</code> 的本质是「从数组起始地址往后数 i 个格子」。所以 <code>a[0]</code> 是第一个，<code>a[n-1]</code> 是最后一个。</div>'
              },
              {
                id: 'loop',
                title: '遍历：数组和循环是天生一对',
                html: '<pre><code>int a[5] = {3, 9, 2, 7, 5};\nint n = 5;\n\nint sum = 0;\nfor (int i = 0; i &lt; n; i++) {\n    sum += a[i];\n}\nprintf("和 = %d, 平均 = %.2f\\n", sum, (double)sum / n);</code></pre>\n<ul>\n  <li>循环条件写 <code>i &lt; n</code>，不要写 <code>i &lt;= n</code>——后者会多访问一格，越界。</li>\n  <li>求平均时先转成 <code>double</code>，否则整数除法会丢掉小数。</li>\n</ul>'
              },
              {
                id: 'bound',
                title: '越界与初始化：C 不帮你检查',
                html: '<p>这是 C 和其他语言差别最大的地方：<strong>数组越界不会报错，也不会阻止你</strong>。</p>\n<pre><code>int a[5] = {1,2,3,4,5};\na[5] = 100;      // 编译通过，运行时写坏了别人的内存\nprintf("%d", a[-1]);   // 也不报错，读到垃圾值</code></pre>\n<p>后果可能是「结果莫名其妙」「程序突然崩溃」「这次没事下次崩」——所以数组题最常见的 bug 就是<strong>下标差一（off-by-one）</strong>。</p>\n<p>另外，<strong>局部数组不会自动清零</strong>：</p>\n<pre><code>int a[5];            // 里面是随机值\nint b[5] = {0};      // 全部为 0，安全写法</code></pre>\n<div class="doc-tip">💡 自查方法：写下循环后，用最小的 n 手工走一遍（比如 n=1、n=2），看下标有没有碰到 <code>n</code>。</div>'
              },
              {
                id: 'string',
                title: '字符数组与字符串',
                html: '<p>C 没有专门的字符串类型，字符串就是「以 <code>\\0</code> 结尾的字符数组」。</p>\n<pre><code>char s1[] = "abc";          // 实际占 4 个字节：\'a\',\'b\',\'c\',\'\\0\'\nchar s2[10] = "hello";\n\nprintf("%s\\n", s1);        // 用 %s 打印\nprintf("%c\\n", s1[0]);     // \'a\'，用 %c 打印单个字符</code></pre>\n<ul>\n  <li>结尾的 <code>\\0</code>（空字符）是<strong>结束标记</strong>，<code>printf</code>、<code>strlen</code> 都靠它判断字符串到哪结束。</li>\n  <li><code>strlen(s)</code> 返回的长度<strong>不含</strong> <code>\\0</code>，所以 <code>"abc"</code> 的长度是 3，但占 4 个字节。</li>\n  <li>字符串比较不能用 <code>==</code>（那比较的是地址），要用 <code>strcmp(a, b) == 0</code>。</li>\n</ul>'
              },
              {
                id: '二维数组',
                title: '二维数组：矩阵就是数组的数组',
                html: '<p>C 里的二维数组本质是「数组元素本身又是一维数组」：</p>\n<pre><code>int m[3][4] = {          // 3 行 4 列\n  {1, 2, 3, 4},\n  {5, 6, 7, 8},\n  {9,10,11,12}\n};\n\nprintf("%d\\n", m[1][2]);   // 第 2 行第 3 列 → 7</code></pre>\n<ul>\n  <li>声明格式：<code>类型 数组名[行数][列数]</code>。内存里所有元素仍然是<strong>连续存放</strong>的（先放完第一行再放第二行），只是你用下标把它分成行和列。</li>\n  <li>遍历时用<strong>双重循环</strong>：外层控制行，内层控制列。</li>\n  <li>初始化时可以省略第一维的长度（编译器会帮你数有几行），但<strong>第二维的长度不能省</strong>——因为每个"子数组"的大小必须固定。</li>\n</ul>\n<pre><code>// 打印二维数组\nfor (int i = 0; i &lt; 3; i++) {\n  for (int j = 0; j &lt; 4; j++) {\n    printf("%3d", m[i][j]);\n  }\n  printf("\\n");     // 每行结束后换行\n}</code></pre>'
              },
              {
                id: 'array_name_as_ptr',
                title: '数组名到底是什么？（数组名与指针）',
                html: '<p>这是 C 语言<strong>最容易混淆</strong>的概念之一，也是考研/期末/面试高频考点：</p>\n<pre><code>int a[5] = {1, 2, 3, 4, 5};\nint *p = a;          // ✅ 能过编译，说明 a 确实能当指针用\nprintf("%d", a[2]);   // 3\nprintf("%d", p[2]);   // 3，和 a[2] 一样\nprintf("%d", *(a+2)); // 3，等价写法</code></pre>\n<p><strong>核心规则（标准原文）</strong>：</p>\n<ol>\n  <li>在大多数表达式中，<strong>数组名会自动退化成首元素的地址</strong>（<code>&amp;a[0]</code>）。这就是为什么 <code>a</code> 能赋给 <code>int*</code>。</li>\n  <li>但有<strong>三个例外</strong>数组名不会退化：<strong>sizeof</strong>（<code>sizeof(a)</code> 得到整个数组大小）、<strong>&amp;</strong>（<code>&amp;a</code> 得到"指向整个数组的指针"）、<strong>字符串字面量</strong>（作为初始化器时）。</li>\n</ol>\n<p>所以 <code>a[i]</code> 的本质就是 <code>*(a + i)</code>——数组下标运算符在编译器里就是这么展开的。</p>\n<div class="doc-tip">⚠️ 经典反例：<code>int a[5]; int b[5]; a = b;</code> 编译报错——因为赋值时数组名<strong>没有退化成指针</strong>，C 不允许整体赋值数组。要复制数组只能用 <code>memcpy</code> 或循环逐个元素。</div>'
              },
              {
                id: 'ptr_and_2d_array',
                title: '指针与多维数组（考研/期末重点）',
                html: '<p>二维数组和指针的关系更绕——<strong>二维数组名会退化成「指向第一行的指针」</strong>（一个指向数组的指针，也称"行指针"）：</p>\n<pre><code>int m[3][4];\nint (*p)[4] = m;    // ✅ p 指向"由 4 个 int 组成的一行"\n\n// 下面三者等价：\nm[0][1];\np[0][1];\n(*(p + 0))[1];\n\n// 但 m 和 *(m+0) 类型不同：\n// m     → 指向行的指针（类型 int(*)[4]）\n// *(m+0) → 指向 int 的指针（类型 int*），即第一行首元素</code></pre>\n<p><strong>指针数组 vs 数组指针（容易混）</strong>：</p>\n<ul>\n  <li><code>int *p[4]</code> → <strong>指针数组</strong>，4 个元素每个是 <code>int*</code>（存 4 个地址）。<code>[]</code> 优先级高于 <code>*</code>。</li>\n  <li><code>int (*p)[4]</code> → <strong>数组指针</strong>，p 指向一个"4 个 int 的数组"。括号改变了优先级。</li>\n</ul>\n<p>初始化动态二维数组时，常用「一级指针数组」来模拟：</p>\n<pre><code>int **m = malloc(3 * sizeof(int*));   // 3 行\nfor (int i = 0; i &lt; 3; i++)\n  m[i] = malloc(4 * sizeof(int));     // 每行 4 列\n// 用完记得逐行 free</code></pre>\n<div class="doc-tip">💡 记法：<code>*</code> 放括号里的是"指向数组"（数组指针），<code>*</code> 放外面的是"装指针的数组"（指针数组）。<strong>面试必考</strong>。</div>'
              }
            ],
            refs: [CS_REFS.entry, CS_REFS.algo].concat(C_SOURCES)
          }
        },
        {
          title: '数组遍历与统计',
          brief: '数组下标从 0 开始，n 个元素的下标是 0 ~ n-1。求和先设 0，求最大值先把第一个元素当作最大值，再逐个比较。',
          q: [
            { stem: 'int a[5] = {3, 1, 4}; 此时 a[3] 的值是多少？', options: ['0', '4', '随机值', '编译报错'], answer: 0, explain: '只初始化了前 3 个元素，剩下的元素会被自动初始化为 0。' },
            { stem: '遍历一个长度为 5 的数组，下面哪个循环条件正确？', options: ['for (int i = 0; i < 5; i++)', 'for (int i = 1; i <= 5; i++)', 'for (int i = 0; i <= 5; i++)', 'for (int i = 5; i > 0; i--)'], answer: 0, explain: '合法下标是 0 ~ 4，所以 i < 5。i <= 5 会访问 a[5]，越界。' },
            { stem: '把数组传给函数时，实际传递的是什么？', options: ['首元素的地址', '整个数组的拷贝', '数组的长度', '最后一个元素的值'], answer: 0, explain: '数组名在表达式中会退化成首元素地址，所以函数里通过指针访问原数组，修改会影响原数据。' }
          ],
          code: {
            task: '读入 n 和 n 个整数，输出它们的和与平均值（保留两位小数），格式：sum=10 avg=2.50。',
            starter: '#include <stdio.h>\n\nint main(void) {\n    int n;\n    scanf("%d", &n);\n    int x, sum = 0;\n    // TODO: 读入 n 个数并累加\n    // TODO: 输出 sum 和平均值，保留两位小数\n    return 0;\n}',
            hint: '平均值用 double 计算：printf("sum=%d avg=%.2f\\n", sum, (double)sum / n);',
            tests: [
              { name: '样例 1', stdin: '4\n1 2 3 4', stdout: 'sum=10 avg=2.50' },
              { name: '样例 2', stdin: '3\n2 4 9', stdout: 'sum=15 avg=5.00' }
            ]
          },
          doc: {
            lead: '这一章的目标：熟练遍历数组做求和、计数、求最值、查找，并掌握最简单的排序算法。',
            sections: [
              {
                id: 'traverse',
                title: '遍历的写法',
                html: '<pre><code>int a[5] = {3, 9, 2, 7, 5};\nint n = 5;\n\n// 写法一：下标遍历（最常用）\nfor (int i = 0; i &lt; n; i++) {\n    printf("%d ", a[i]);\n}\n\n// 写法二：指针遍历\nfor (int *p = a; p &lt; a + n; p++) {\n    printf("%d ", *p);\n}</code></pre>\n<p>两种写法完全等价，编译器生成的代码几乎一样。下标写法更直观，指针写法在面试里常考。</p>'
              },
              {
                id: 'stat',
                title: '求和 / 平均 / 计数',
                html: '<pre><code>int a[5] = {3, 9, 2, 7, 5};\nint n = 5;\n\nint sum = 0, even = 0;\nfor (int i = 0; i &lt; n; i++) {\n    sum += a[i];                // 累加\n    if (a[i] % 2 == 0) even++;  // 统计偶数个数\n}\ndouble avg = (double)sum / n;   // 求平均（先转 double）\nprintf("和=%d 平均=%.2f 偶数=%d\\n", sum, avg, even);</code></pre>\n<div class="doc-tip">💡 累加器 <code>sum</code> 初始必须为 0，计数器 <code>cnt</code> 初始也为 0。忘了初始化，里面是垃圾值，结果全错。</div>'
              },
              {
                id: 'minmax',
                title: '最大值 / 最小值 / 查找',
                html: '<pre><code>int a[5] = {3, 9, 2, 7, 5};\nint n = 5;\n\nint max = a[0], min = a[0];   // 先假设第一个就是最值\nfor (int i = 1; i &lt; n; i++) {\n    if (a[i] &gt; max) max = a[i];\n    if (a[i] &lt; min) min = a[i];\n}\n\n// 查找 7 是否存在\nint target = 7, found = -1;\nfor (int i = 0; i &lt; n; i++) {\n    if (a[i] == target) { found = i; break; }\n}\nprintf("最大=%d 最小=%d 7的下标=%d\\n", max, min, found);</code></pre>\n<p>求最值的关键：<strong>先把第一个元素当最值，再从第二个开始比较</strong>。不要把 max 初始化成 0——如果数组全是负数，结果就错了。</p>'
              },
              {
                id: 'bubble',
                title: '排序入门：冒泡排序',
                html: '<p>冒泡排序的思想：每轮把最大的元素「冒泡」到末尾，像气泡往上浮。</p>\n<pre><code>int a[5] = {3, 9, 2, 7, 5};\nint n = 5;\nfor (int i = 0; i &lt; n - 1; i++) {           // 共 n-1 轮\n    for (int j = 0; j &lt; n - 1 - i; j++) {   // 每轮比较到 n-1-i\n        if (a[j] &gt; a[j + 1]) {              // 前一个比后一个大就交换\n            int t = a[j]; a[j] = a[j+1]; a[j+1] = t;\n        }\n    }\n}\n// 结果：2 3 5 7 9</code></pre>\n<p>时间复杂度 O(n²)，数据量大时很慢，但作为排序入门是必学的。更高效的排序（快排、归并）在数据结构课里学。</p>'
              }
            ],
            refs: [CS_REFS.entry, CS_REFS.algo].concat(C_SOURCES)
          }
        },
        {
          title: '字符串处理',
          brief: 'C 没有字符串类型，字符串是以 \\0 结尾的字符数组。strlen 数到 \\0 为止，sizeof 数整个数组占的字节，两者可能不同。比较字符串用 strcmp。',
          q: [
            { stem: 'char s[] = "hello"; 那么 sizeof(s) 和 strlen(s) 分别是？', options: ['6 和 5', '5 和 5', '6 和 6', '5 和 6'], answer: 0, explain: 'sizeof 包含结尾的 \\0，共 6 个字节；strlen 遇到 \\0 停止，不算 \\0，所以是 5。' },
            { stem: 'C 字符串的结束标志是哪个字符？', options: ['\\0', '\\n', '空格', 'EOF'], answer: 0, explain: '字符串以空字符 \\0 结尾，strlen、printf("%s") 等函数都靠它判断字符串到哪里结束。' },
            { stem: '要判断两个字符串内容是否相同，应该用？', options: ['strcmp(a, b) == 0', 'a == b', 'strlen(a) == strlen(b)', 'a = b'], answer: 0, explain: '数组名比较的是地址，a == b 判断的是不是同一个数组。strcmp 返回 0 才表示内容相同。' }
          ],
          code: {
            task: '读入一个不含空格的字符串（长度不超过 100），输出它的长度和反转后的字符串，格式：len=5 rev=olleh。',
            starter: '#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    char s[101];\n    scanf("%s", s);\n    // TODO: 求长度，再倒着输出\n    return 0;\n}',
            hint: 'int len = strlen(s); 从 len - 1 循环到 0 逐个 putchar。',
            tests: [
              { name: '样例 1', stdin: 'hello', stdout: 'len=5 rev=olleh' },
              { name: '样例 2', stdin: 'C', stdout: 'len=1 rev=C' }
            ]
          },
          doc: {
            lead: '这一章的目标：弄清 C 字符串的本质（以 \\0 结尾的字符数组），熟练使用 strlen、strcmp、strcpy 等库函数。',
            sections: [
              {
                id: 'essence',
                title: '字符串的本质：\\0 结尾',
                html: '<pre><code>char s1[] = "abc";       // 占 4 字节：\'a\' \'b\' \'c\' \'\\0\'\nchar s2[10] = "hi";      // s2[0]=\'h\' s2[1]=\'i\' s2[2]=\'\\0\' 其余清零\nchar s3[] = {\'a\', \'b\', \'c\'};  // ⚠️ 没有 \\0，不是合法字符串！</code></pre>\n<p>C 里所有字符串操作都依赖结尾的 <code>\\0</code> 来判断「到哪结束」。少了 <code>\\0</code>，<code>printf("%s")</code>、<code>strlen</code> 会一直往后读到内存里的垃圾或崩溃。</p>'
              },
              {
                id: 'strlen-sizeof',
                title: 'strlen vs sizeof',
                html: '<pre><code>char s[] = "hello";\nstrlen(s);   // 5   —— 不含 \\0 的字符个数\nsizeof(s);   // 6   —— 整个数组的字节数（含 \\0）\n\nchar *p = "hello";\nstrlen(p);   // 5\nsizeof(p);   // 8（64 位下指针大小）—— 注意！不是字符串长度</code></pre>\n<p><strong>核心区别</strong>：<code>strlen</code> 是函数，运行时数到 <code>\\0</code> 为止；<code>sizeof</code> 是运算符，编译期就知道大小。对字符数组用 <code>sizeof</code> 能得到容量，对 char* 用 <code>sizeof</code> 只能得到指针大小。</p>'
              },
              {
                id: 'funcs',
                title: '常用字符串函数（string.h）',
                html: '<pre><code>#include &lt;string.h&gt;\n\nchar a[20] = "Hello";\nchar b[20] = "World";\n\nstrcpy(a, b);        // 把 b 复制到 a，a 现在是 "World"\nstrcat(a, b);        // 把 b 拼到 a 末尾，a 变成 "WorldWorld"\nstrcmp(a, b);        // 比较：a&lt;b 返回负数，相等返回 0，a&gt;b 返回正数\nstrlen(a);           // 长度</code></pre>\n<table>\n<tr><th>函数</th><th>作用</th><th>注意</th></tr>\n<tr><td><code>strcpy(dst, src)</code></td><td>复制字符串</td><td>dst 必须足够大，否则溢出</td></tr>\n<tr><td><code>strcat(dst, src)</code></td><td>追加到末尾</td><td>dst 要有足够剩余空间</td></tr>\n<tr><td><code>strcmp(a, b)</code></td><td>比较大小</td><td>逐字符按 ASCII 码比，不能用 <code>==</code></td></tr>\n<tr><td><code>strlen(s)</code></td><td>求长度</td><td>不含 <code>\\0</code></td></tr>\n</table>\n<div class="doc-tip">⚠️ <code>strcpy</code>/<code>strcat</code> 不检查目标数组大小，是缓冲区溢出的重灾区。实际工程里推荐用 <code>strncpy</code>、<code>strncat</code> 限制长度。</div>'
              },
              {
                id: 'input',
                title: '字符串输入：gets 已死，fgets 当立',
                html: '<pre><code>char name[20];\nscanf("%s", name);        // 遇到空格/回车停止，读不了带空格的名字\n// 输入 "Zhang San" → name 只有 "Zhang"\n\nfgets(name, sizeof(name), stdin);  // 读一整行，包括空格\n// 但 fgets 会把末尾的 \\n 也读进来，需要手动去掉\nname[strcspn(name, "\\n")] = \'\\0\';</code></pre>\n<p><code>gets()</code> 函数因为无法限制输入长度，已被 C11 标准<strong>彻底移除</strong>，永远不要用。读取一行用 <code>fgets</code>。</p>'
              }
            ],
            refs: [CS_REFS.entry, CS_REFS.algo].concat(C_SOURCES)
          }
        },
        {
          title: '把代码块打包成函数',
          brief: '函数 = 返回类型 + 函数名 + 参数。调用者传实参给形参；默认是传值（函数内改形参不影响实参）。函数可以自己调自己——这就是递归。',
          q: [
            { stem: '写一个函数返回两个整数中较大的那个，正确的函数头是？', options: ['int max(int a, int b)', 'max(int a, int b)', 'void max(int a, int b)', 'int max(a, b)'], answer: 0, explain: '函数头格式是「返回类型 函数名(参数类型 参数名, ...)」。max 要返回 int，参数也要写清楚类型。' },
            { stem: '执行完下面代码后 main 里的 a 和 b 分别是？\n\nvoid swap(int x, int y) { int t = x; x = y; y = t; }\nint main() {\n  int a = 3, b = 5;\n  swap(a, b);\n}', options: ['a=3, b=5（没变）', 'a=5, b=3（交换了）', 'a=3, b=3', '程序报错'], answer: 0, explain: 'C 默认传值调用：swap 的形参 x、y 拿到的是 a、b 的拷贝，函数内交换的是拷贝，main 里的 a、b 不受影响。要交换实参得传指针。' },
            { stem: '递归算阶乘的基准条件（n == 0 时返回什么）才不会无限递归？\n\nint fact(int n) {\n  if (n == 0) return ???;\n  return n * fact(n - 1);\n}', options: ['0', '1', 'n', '-1'], answer: 1, explain: '数学上 0! = 1，基准条件返回 1 才能让递归正确收敛；返回 0 会让所有结果都是 0，不写基准条件会死递归直到栈溢出。' }
          ],
          code: {
            task: '实现函数 int max(int a, int b) 返回较大值，读入两个整数并输出结果。',
            starter: '#include <stdio.h>\n\nint max(int a, int b) {\n    // TODO: 返回较大的那个\n    return 0;\n}\n\nint main(void) {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    printf("%d\\n", max(a, b));\n    return 0;\n}',
            hint: 'return a > b ? a : b; 或写 if (a > b) return a; return b;',
            tests: [
              { name: '样例 1', stdin: '3 8', stdout: '8' },
              { name: '样例 2', stdin: '-1 -7', stdout: '-1' }
            ]
          },
          doc: {
            lead: '这一章的目标：把一段重复的代码打包成函数，理解形参与实参，以及递归的"自己调自己"。',
            sections: [
              {
                id: 'define',
                title: '定义一个函数',
                html: '<p>函数的格式是：<strong>返回类型 + 函数名 + 参数列表 + 花括号里的函数体</strong>。</p>\n<pre><code>// 返回类型 函数名(参数类型 参数名, ...)\nint max(int a, int b) {\n  if (a &gt; b) return a;\n  return b;\n}\n\nvoid sayHello() {       // void 表示不返回值\n  printf("Hello\\n");\n}</code></pre>\n<ul>\n  <li><code>return</code> 把结果返回给调用者，同时立刻结束函数；<code>void</code> 函数可以没有 <code>return</code>，也可以写 <code>return;</code>（不带值）提前退出。</li>\n  <li>函数<strong>只能返回一个值</strong>。想返回多个结果，后面要用指针或结构体。</li>\n  <li>C 不允许函数嵌套定义——函数体里不能再写另一个函数。</li>\n</ul>'
              },
              {
                id: 'call',
                title: '形参与实参：默认"传值"',
                html: '<p>调用函数时传给它的具体值叫<strong>实参</strong>，函数声明里接收的变量叫<strong>形参</strong>。C 默认是<strong>传值调用</strong>：</p>\n<pre><code>void setZero(int x) { x = 0; }\n\nint main() {\n  int a = 5;\n  setZero(a);\n  printf("%d", a);    // 还是 5，没变\n}</code></pre>\n<p><code>x</code> 拿到的是 <code>a</code> 的<strong>副本</strong>，函数内改的是副本，<code>main</code> 里的 <code>a</code> 不受影响。想让函数改实参，就得传<strong>指针</strong>——这是下一关的事。</p>\n<div class="doc-tip">💡 函数声明（原型）可以写在调用者前面，让编译器知道"有这么个函数存在"。函数定义写在后面没问题：<code>int max(int a, int b); // 声明</code></div>'
              },
              {
                id: 'scope',
                title: '作用域与生命周期',
                html: '<p>C 里变量的可见性和生存期由<strong>定义位置</strong>决定：</p>\n<ul>\n  <li><strong>局部变量</strong>（函数内定义）：只在本函数内可见，进入函数时创建、退出函数时销毁。不同函数可以有同名局部变量，互不干扰。</li>\n  <li><strong>全局变量</strong>（所有函数外定义）：整个程序都能访问，跟程序同生共死。能不用尽量不用——多个函数改同一个全局变量时很难排查 bug。</li>\n  <li><strong>static 局部变量</strong>：只初始化一次，之后每次调用保留上一次的值。</li>\n</ul>\n<pre><code>int countCalls() {\n  static int n = 0;   // 只在第一次进入时初始化\n  return ++n;\n}\n// 连续调用三次，依次返回 1, 2, 3</code></pre>'
              },
              {
                id: 'recursion',
                title: '递归：函数自己调自己',
                html: '<p>递归是把一个大问题拆成<strong>同类的小问题</strong>，直到小问题可以直接算出答案（基准条件）。经典例子：阶乘。</p>\n<pre><code>// n! = n * (n-1) * ... * 1\n// 基准条件：0! = 1\nint fact(int n) {\n  if (n &lt;= 1) return 1;         // 基准条件，必须先写\n  return n * fact(n - 1);       // 递归调用自己\n}</code></pre>\n<p><strong>写递归的两步法</strong>：</p>\n<ol>\n  <li><strong>基准条件</strong>：问题小到可以直接给答案的情况，必须能让递归停住（否则死递归 → 栈溢出）。</li>\n  <li><strong>递归步骤</strong>：把当前问题分解成"同类但更小"的子问题，递归调用。</li>\n</ol>\n<div class="doc-tip">⚠️ 递归虽短但慢——每多一层调用就多占一块栈空间。数据大时可能比循环慢甚至爆栈。写递归前先想：「能不能用循环改写？」</div>'
              }
            ],
            refs: [CS_REFS.entry, CS_REFS.algo].concat(C_SOURCES)
          }
        },
        {
          title: '递归与函数进阶',
          brief: '递归就是函数自己调用自己：先写基准条件（什么时候停），再写向基准条件靠近的递推。每次调用都有自己独立的局部变量。',
          q: [
            { stem: '写递归函数时，最不能少的是什么？', options: ['基准条件（递归出口）', '全局变量', '循环语句', 'printf 输出'], answer: 0, explain: '没有基准条件，递归会一直调用自己，直到栈溢出。' },
            { stem: 'fact(n) = n * fact(n - 1)，fact(0) = 1，那么 fact(4) 是多少？', options: ['24', '12', '4', '120'], answer: 0, explain: '4 × 3 × 2 × 1 = 24。' },
            { stem: '递归函数每一层的局部变量之间是什么关系？', options: ['各自独立，互不影响', '共用同一份', '只有最后一层有效', '会被自动清零'], answer: 0, explain: '每次函数调用都会在调用栈上新建一份栈帧，局部变量属于各自的那一层。' }
          ],
          code: {
            task: '用递归实现阶乘：读入 n（0 <= n <= 12），输出 n!。',
            starter: '#include <stdio.h>\n\nlong long fact(int n) {\n    // TODO: 先写 n == 0 的出口，再写递推\n    return 0;\n}\n\nint main(void) {\n    int n;\n    scanf("%d", &n);\n    printf("%lld\\n", fact(n));\n    return 0;\n}',
            hint: 'if (n == 0) return 1; return n * fact(n - 1);',
            tests: [
              { name: '样例 1', stdin: '5', stdout: '120' },
              { name: '边界', stdin: '0', stdout: '1' }
            ]
          },
          doc: {
            lead: '这一章的目标：深入理解递归的执行过程（栈帧），掌握经典递归问题，并学会在递归与迭代之间取舍。',
            sections: [
              {
                id: 'stack',
                title: '递归的底层：调用栈',
                html: '<p>每次函数调用，系统都会在<strong>调用栈</strong>上分配一块叫<strong>栈帧（stack frame）</strong>的内存，存这个函数的局部变量、参数、返回地址。函数返回时栈帧被回收。</p>\n<p>以 <code>fact(3)</code> 为例：</p>\n<pre><code>fact(3)\n  → 3 * fact(2)\n      → 2 * fact(1)\n          → 1 * fact(0)\n              → return 1      // 基准条件，开始回弹\n          → return 1 * 1 = 1\n      → return 2 * 1 = 2\n  → return 3 * 2 = 6</code></pre>\n<p>递归越深，栈帧越多。<strong>栈空间是有限的</strong>（通常几 MB），递归过深会触发<strong>栈溢出（stack overflow）</strong>导致程序崩溃。</p>'
              },
              {
                id: 'fib',
                title: '经典递归：斐波那契',
                html: '<p>斐波那契数列：1, 1, 2, 3, 5, 8, 13... 从第三项起每项等于前两项之和。</p>\n<pre><code>int fib(int n) {\n    if (n &lt;= 2) return 1;           // 基准条件\n    return fib(n - 1) + fib(n - 2); // 递归\n}</code></pre>\n<p>看似简洁，但有大问题：<code>fib(5)</code> 会调用 <code>fib(4)</code> 和 <code>fib(3)</code>，而 <code>fib(4)</code> 又会调用 <code>fib(3)</code>——<strong>大量重复计算</strong>。时间复杂度是指数级 O(2ⁿ)，算到 n=40 就明显变慢。</p>\n<div class="doc-tip">💡 优化方法：① 用循环改写（迭代）；② 记忆化递归（把算过的结果存起来，避免重复）。面试时能写出递归版再加一句「实际用迭代或记忆化」会很加分。</div>'
              },
              {
                id: 'hanoi',
                title: '经典递归：汉诺塔',
                html: '<p>汉诺塔：把 n 个盘子从 A 柱移到 C 柱，大盘不能压小盘，每次只能移一个。</p>\n<pre><code>void hanoi(int n, char from, char via, char to) {\n    if (n == 1) {\n        printf("%c → %c\\n", from, to);  // 只有一个盘子，直接移\n        return;\n    }\n    hanoi(n - 1, from, to, via);   // 把上面 n-1 个从 from 移到 via（借助 to）\n    printf("%c → %c\\n", from, to); // 把最底下的大盘从 from 移到 to\n    hanoi(n - 1, via, from, to);   // 把 n-1 个从 via 移到 to（借助 from）\n}</code></pre>\n<p>汉诺塔是「递归思想」最经典的演示：把 n 个盘子的问题，化成两个 n-1 盘子的子问题 + 一次移动。递归公式：移动次数 = 2ⁿ - 1。</p>'
              },
              {
                id: 'tradeoff',
                title: '递归 vs 迭代：怎么选',
                html: '<table>\n<tr><th></th><th>递归</th><th>迭代（循环）</th></tr>\n<tr><td>代码</td><td>简洁、贴近数学定义</td><td>通常更长</td></tr>\n<tr><td>性能</td><td>有函数调用开销，可能爆栈</td><td>快，无栈开销</td></tr>\n<tr><td>风险</td><td>忘了基准条件就死递归</td><td>循环条件写错会死循环</td></tr>\n</table>\n<p><strong>经验法则</strong>：问题天然是递归结构（树、分治、汉诺塔）用递归；简单重复（累加、遍历）用循环。能用循环轻松改写的递归，优先用循环。</p>\n<p>进阶：<strong>尾递归</strong>——递归调用是函数最后一条语句，部分编译器可以优化成循环（不占额外栈帧）。但 C 标准不保证优化，不能依赖。</p>'
              }
            ],
            refs: [CS_REFS.entry, CS_REFS.algo].concat(C_SOURCES)
          }
        },
        {
          title: '地址与指针',
          brief: '每个变量都有地址，& 取地址、* 解引用。指针变量存的是地址。数组名在表达式里常退化成首元素的地址，所以指针和数组关系非常近。',
          q: [
            { stem: 'int a = 10; int *p = &a; printf("%d", *p); 输出什么？', options: ['10', 'a', '0x...（一个地址）', '程序报错'], answer: 0, explain: 'p 存的是 a 的地址，*p 是「p 指向的那个变量」也就是 a 本身，所以输出 10。注意 %d 对应整数，打印地址要用 %p。' },
            { stem: 'int a[3] = {1, 2, 3}; int *p = a; p++; printf("%d", *p); 输出什么？', options: ['1', '2', '3', '地址值'], answer: 1, explain: '数组名 a 就是首元素地址，p 指向 a[0]。p++ 让指针往后移动一个 int 的位置，所以 *p 就是 a[1] = 2。' },
            { stem: '关于 NULL 指针，下面说法正确的是？', options: ['可以安全解引用', '表示指针不指向任何有效内存位置', '等于 1', '所有指针初始值都是 NULL'], answer: 1, explain: 'NULL 是标准库里定义为 0 的常量，表示"空指针"。访问 NULL 指向的内存会导致程序崩溃（段错误）。' }
          ],
          code: {
            task: '用指针实现交换函数 void swap(int *a, int *b)，读入两个整数，输出交换后的两个数（空格分隔）。',
            starter: '#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    // TODO: 借助临时变量交换 *a 和 *b\n}\n\nint main(void) {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    swap(&a, &b);\n    printf("%d %d\\n", a, b);\n    return 0;\n}',
            hint: 'int t = *a; *a = *b; *b = t; 这里必须用 * 解引用，交换的是指针指向的值。',
            tests: [
              { name: '样例 1', stdin: '3 5', stdout: '5 3' },
              { name: '样例 2', stdin: '10 20', stdout: '20 10' }
            ]
          },
          doc: {
            lead: '这一章的目标：搞懂「地址」是什么，& 和 * 分别干什么，以及为什么数组和指针经常可以互换。',
            sections: [
              {
                id: 'memory',
                title: '内存里的地址',
                html: '<p>计算机的内存可以想象成一排编号的小格子，每个格子有一个<strong>地址</strong>。每个变量都占一个或多个格子：</p>\n<pre><code>int a = 10;      // 假设 a 存在地址 0x1000\ndouble b = 3.14; // b 可能在 0x1004（int 占 4 字节）\n\nprintf("%p\\n", &amp;a);    // &amp;a 取出 a 的地址，用 %p 打印</code></pre>\n<p><code>&amp;</code> 运算符 = 取地址。得到的地址是一个十六进制数（如 0x7ffeeaae08d8），每次运行都可能不一样。</p>'
              },
              {
                id: 'pointer',
                title: '指针变量',
                html: '<p><strong>指针变量</strong>就是"专门存地址的变量"。声明时用 <code>*</code>：</p>\n<pre><code>int  a = 10;\nint *p = &amp;a;    // p 是"指向 int 的指针"，存的是 a 的地址\n\nprintf("%d\\n", *p);   // *p = 取出 p 指向的那个变量的值 → 10\n\n*p = 20;               // 通过 p 间接修改了 a！\nprintf("%d\\n", a);    // 现在 a 变成 20 了</code></pre>\n<p><strong>记住两个符号</strong>：</p>\n<ul>\n  <li><code>&amp;</code> —— 取地址（「这个变量住在哪里」）</li>\n  <li><code>*</code> —— 解引用（「这个地址上的那个变量」）</li>\n</ul>\n<div class="doc-tip">⚠️ 指针声明里的 <code>*</code> 不是乘号，也不是解引用——它只是说明"p 是个指针类型"。三个 <code>*</code> 在不同语境下意思完全不同，别混。</div>'
              },
              {
                id: 'pointer_array',
                title: '指针和数组的亲密关系',
                html: '<p>在 C 里，<strong>数组名在大多数表达式中会自动退化成首元素的地址</strong>。所以：</p>\n<pre><code>int a[3] = {1, 2, 3};\nint *p = a;           // 等价于 int *p = &amp;a[0];\n\nprintf("%d\\n", *(p + 1));   // 等价于 a[1]\nprintf("%d\\n", p[2]);       // 等价于 *(p + 2)</code></pre>\n<p>这就是为什么数组和指针经常可以互换——<code>a[i]</code> 的本质就是 <code>*(a + i)</code>。</p>\n<p><strong>指针算术</strong>：<code>p + 1</code> 不是地址值加 1，而是"加一个元素的大小"。对 <code>int*</code> 来说跳过 4 字节，对 <code>double*</code> 跳过 8 字节。这让 <code>p++</code> 可以顺序遍历数组。</p>'
              },
              {
                id: 'pass_by_pointer',
                title: '用指针让函数改实参',
                html: '<p>上一关说过 C 默认传值，函数改不了实参。解决办法：<strong>把实参的地址传进去</strong>，函数通过指针间接修改：</p>\n<pre><code>void swap(int *x, int *y) {\n  int t = *x; *x = *y; *y = t;\n}\n\nint main() {\n  int a = 3, b = 5;\n  swap(&amp;a, &amp;b);   // 传地址\n  printf("a=%d b=%d", a, b);  // a=5 b=3，真的交换了！\n}</code></pre>\n<p>这是指针最实用的场景之一：让函数能"回写"多个结果。反过来，当你想让函数<strong>只读</strong>一大块数据不想拷贝（比如大数组、大结构体），也传指针——但加上 <code>const</code>：</p>\n<pre><code>int sum(const int *arr, int n) { /* 不会改 arr */ }</code></pre>\n<div class="doc-tip">⚠️ 空指针（NULL）不能解引用。<code>int *p = NULL; *p = 1;</code> 会直接崩溃。使用指针前先判空：<code>if (p) ...</code></div>'
              }
            ],
            refs: [CS_REFS.entry, CS_REFS.csapp].concat(C_SOURCES)
          }
        },
        {
          title: '打包数据与读写文件',
          brief: 'struct 把不同类型的数据打包成一个新类型，用 . 访问成员；union 所有成员共用同一块内存；fopen / fclose / fread / fwrite 做文件 I/O。',
          q: [
            { stem: '定义一个表示学生的结构体（名字、年龄、平均分），下面哪个是合法的？', options: ['struct Student { char name[20]; int age; double score; };', 'struct Student { string name; int age; double score; };', 'Student { char name[20]; int age; double score; }', 'struct Student: { char name[20]; int age; double score; };'], answer: 0, explain: 'struct 后面跟标签名 { 成员列表 }; 结尾必须有分号。string 不是 C 内置类型（得用 char 数组），成员之间没有逗号分隔。' },
            { stem: '关于 union（共用体），正确的说法是？', options: ['每个成员独占一块独立内存', '所有成员共用同一块内存，同一时刻只有一个成员有意义', '只能有两个成员', '和 struct 完全一样'], answer: 1, explain: 'union 的所有成员共用同一块起始地址的内存，大小取最大成员的大小。写了一个成员之后，其他成员的值就变成未定义的了。' },
            { stem: '打开文件并以只读方式读取，正确的调用是？', options: ['fopen("data.txt", "r")', 'open("data.txt")', 'read("data.txt")', 'fopen("data.txt", "w")'], answer: 0, explain: 'fopen 第一个参数是文件名，第二个是模式字符串："r" 只读、"w" 写（会清空文件）、"a" 追加。返回 NULL 表示打开失败。' }
          ],
          code: {
            task: '定义学生结构体（姓名、年龄、分数），读入三个值，按「姓名:.. 年龄:.. 分数:..」输出，分数保留 1 位小数。',
            starter: '#include <stdio.h>\n\nstruct Student {\n    char name[20];\n    int age;\n    double score;\n};\n\nint main(void) {\n    struct Student s;\n    scanf("%s %d %lf", s.name, &s.age, &s.score);\n    // TODO: 按格式输出\n    return 0;\n}',
            hint: 'printf("姓名:%s 年龄:%d 分数:%.1f\\n", s.name, s.age, s.score);',
            tests: [
              { name: '样例', stdin: 'Tom 19 90.5', stdout: '姓名:Tom 年龄:19 分数:90.5' }
            ]
          },
          doc: {
            lead: '这一章的目标：用 struct 把不同类型的数据打包成新类型，了解 union 的内存共享特性，学会用 fopen/fclose 做基本的文件读写。',
            sections: [
              {
                id: 'struct',
                title: 'struct：自定义你的类型',
                html: '<p><strong>结构体</strong>把几个不同类型的变量打包在一起，组成一个新类型：</p>\n<pre><code>struct Student {\n  char name[32];\n  int  age;\n  double score;\n};\n\nstruct Student s1;                // 定义变量\ns1.age = 19;                      // 用 . 访问成员\nstrcpy(s1.name, "小明");\ns1.score = 91.5;\n\nstruct Student s2 = {"小红", 20, 88.0};  // 初始化</code></pre>\n<ul>\n  <li><code>struct 标签名 { 成员列表 };</code> 结尾的分号<strong>不能漏</strong>——这是 C 的语法坑之一。</li>\n  <li>成员默认按声明顺序在内存里依次排列，中间可能有对齐空隙（所以 <code>sizeof(struct)</code> 不一定等于各成员大小之和）。</li>\n  <li>结构体也可以作为函数参数或返回值，但大结构体建议传指针避免拷贝开销。</li>\n</ul>'
              },
              {
                id: 'pointer_to_struct',
                title: '指针与结构体：-> 运算符',
                html: '<p>如果有一个指向结构体的指针，访问成员有两种写法：</p>\n<pre><code>struct Student s = {"小明", 19, 91.5};\nstruct Student *p = &amp;s;\n\n// 以下两句等价：\n(*p).age = 20;     // 先解引用，再用 .\np-&gt;age = 20;       // 用 -&gt; 更简洁（结构体指针专用）</code></pre>\n<p><code>-&gt;</code> 就是"指向结构体的指针访问成员"的专用写法，比 <code>(*p).成员</code> 简洁且常用。</p>'
              },
              {
                id: 'union',
                title: 'union：共用一块内存',
                html: '<p><strong>共用体</strong>和结构体长得像，但有一个根本区别：<strong>所有成员共用同一块内存</strong>。</p>\n<pre><code>union Data {\n  int    i;\n  float  f;\n  char   str[20];\n};\n\nunion Data u;\nu.i = 65;\nprintf("%d\\n", u.i);   // 65\nprintf("%c\\n", u.f);   // 未定义！因为 f 和 i 共用同一块内存</code></pre>\n<ul>\n  <li><code>sizeof(union Data)</code> = 最大成员的大小（这里是 20）。</li>\n  <li>写一个成员后，其他成员的值就变成"未定义"了——读哪个取决于你最后写的是哪个。</li>\n  <li>什么时候用？需要用不同方式看同一块内存（比如把 4 字节 int 当 4 个 char 看），或节省内存空间。</li>\n</ul>\n<div class="doc-tip">💡 面试里常考 union 和 struct 的区别：struct 每个成员有独立内存，大小 ≥ 各成员之和；union 所有成员共用内存，大小 = 最大成员的大小。</div>'
              },
              {
                id: 'file_io',
                title: '文件读写',
                html: '<p>C 里做文件 I/O 的标准步骤：<strong>fopen 打开 → 读写 → fclose 关闭</strong>。</p>\n<pre><code>// ① 打开（"r"只读 / "w"写会清空 / "a"追加）\nFILE *fp = fopen("out.txt", "w");\nif (fp == NULL) {\n  printf("打开文件失败\\n");\n  return 1;\n}\n\n// ② 写入（fprintf 跟 printf 几乎一样，只是多一个 FILE* 参数）\nfprintf(fp, "学号: %s 分数: %.1f\\n", s.name, s.score);\n\n// ③ 读取\nchar line[128];\nwhile (fgets(line, sizeof(line), fp)) {\n  printf("%s", line);\n}\n\n// ④ 关闭（一定要关，否则数据可能没写进磁盘）\nfclose(fp);</code></pre>\n<table>\n<tr><th>模式</th><th>说明</th></tr>\n<tr><td><code>"r"</code></td><td>只读，文件必须已存在</td></tr>\n<tr><td><code>"w"</code></td><td>只写，不存在就创建，存在就<strong>清空</strong></td></tr>\n<tr><td><code>"a"</code></td><td>追加，写到文件末尾</td></tr>\n<tr><td><code>"rb" / "wb"</code></td><td>二进制模式（读写图片、音频等非文本文件）</td></tr>\n</table>\n<div class="doc-tip">⚠️ Windows 下写文件最好用 <code>"w"</code>（文本模式，会把 \\n 转成 \\r\\n）。用 <code>"wb"</code> 二进制模式时不会做转换。读完文件一定要 <code>fclose</code>——操作系统对可同时打开的文件数有限制。</div>'
              }
            ],
            refs: [CS_REFS.csapp, CS_REFS.plan].concat(C_SOURCES)
          }
        },
        {
          title: '综合挑战：成绩榜',
          brief: '把结构体和数组结合起来，就能存一组学生。遍历、比较、找最大值都是之前学过的套路，只是这次比较的是结构体里的成员。',
          q: [
            { stem: 'struct Student list[3]; 表示什么？', options: ['3 个 Student 结构体组成的数组', '1 个有 3 个成员的结构体', '3 个指向结构体的指针', '非法写法'], answer: 0, explain: '和普通数组一样，方括号里是元素个数，每个元素都是一个完整的 Student。' },
            { stem: 'scanf("%s", s.name); 读入 "Tom Smith" 时，s.name 里会是什么？', options: ['"Tom"', '"Tom Smith"', '空字符串', '编译报错'], answer: 0, explain: '%s 遇到空格就停止，只会读入 Tom。要读整行可以用 fgets。' },
            { stem: '在数组里找最高分，max 应该先初始化成什么？', options: ['第一个元素的分数', '0', '-1', '100'], answer: 0, explain: '先把第一个元素当作当前最大，再和后面的逐个比较。初始化为 0 在全是负分时会出错。' }
          ],
          code: {
            task: '读入 n 个学生（每行：姓名 分数），输出分数最高的学生姓名（保证最高分唯一）。',
            starter: '#include <stdio.h>\n\nstruct Student {\n    char name[20];\n    int score;\n};\n\nint main(void) {\n    int n;\n    scanf("%d", &n);\n    struct Student list[100];\n    for (int i = 0; i < n; i++) {\n        scanf("%s %d", list[i].name, &list[i].score);\n    }\n    // TODO: 找出最高分的学生并输出姓名\n    return 0;\n}',
            hint: '用 best = 0 记录下标，从 1 开始比较 list[i].score 和 list[best].score。',
            tests: [
              { name: '样例', stdin: '3\nTom 88\nAmy 95\nBob 90', stdout: 'Amy' },
              { name: '隐藏用例', stdin: '2\nLi 60\nWang 61', stdout: 'Wang' }
            ]
          },
          doc: {
            lead: '这一章的目标：把前面学的结构体、数组、循环、函数、指针组合起来，完成一个有实际意义的综合程序。',
            sections: [
              {
                id: 'problem',
                title: '题目拆解：我们要做什么',
                html: '<p><strong>需求</strong>：录入 N 个学生的姓名和分数，输出平均分、最高分学生，并按分数从高到低排序打印成绩榜。</p>\n<p>拆成子任务：</p>\n<ol>\n  <li>用结构体数组存学生信息（姓名 + 分数）。</li>\n  <li>输入 N 和每个学生的数据。</li>\n  <li>遍历求平均分。</li>\n  <li>遍历找最高分学生。</li>\n  <li>按分数排序。</li>\n  <li>输出成绩榜。</li>\n</ol>\n<p>这就是「<strong>输入 → 处理 → 输出</strong>」的经典程序结构，也是所有编程题的通用骨架。</p>'
              },
              {
                id: 'struct-array',
                title: '结构体数组：存多个学生',
                html: '<pre><code>#include &lt;stdio.h&gt;\n#include &lt;string.h&gt;\n\nstruct Student {\n    char name[32];\n    double score;\n};\n\nint main() {\n    int n;\n    printf("学生人数：");\n    scanf("%d", &amp;n);\n\n    struct Student stu[100];   // 最多 100 人\n    for (int i = 0; i &lt; n; i++) {\n        printf("第 %d 个：姓名 分数 = ", i + 1);\n        scanf("%s %lf", stu[i].name, &amp;stu[i].score);\n    }\n    // ... 后续处理\n    return 0;\n}</code></pre>\n<p><code>stu[i].name</code> 是数组名（地址），scanf 不用 <code>&amp;</code>；<code>stu[i].score</code> 是普通变量，要加 <code>&amp;</code>。</p>'
              },
              {
                id: 'modular',
                title: '模块化：拆成多个函数',
                html: '<p>把不同功能拆成独立函数，主函数只负责调度，代码更清晰：</p>\n<pre><code>// 求平均分\ndouble average(struct Student *s, int n) {\n    double sum = 0;\n    for (int i = 0; i &lt; n; i++) sum += s[i].score;\n    return sum / n;\n}\n\n// 找最高分学生的下标\nint topStudent(struct Student *s, int n) {\n    int top = 0;\n    for (int i = 1; i &lt; n; i++)\n        if (s[i].score &gt; s[top].score) top = i;\n    return top;\n}\n\n// 按分数降序排序（冒泡）\nvoid sortByScore(struct Student *s, int n) {\n    for (int i = 0; i &lt; n - 1; i++)\n        for (int j = 0; j &lt; n - 1 - i; j++)\n            if (s[j].score &lt; s[j+1].score) {\n                struct Student t = s[j];\n                s[j] = s[j+1];\n                s[j+1] = t;\n            }\n}</code></pre>\n<p>函数参数用<strong>结构体指针</strong>（<code>struct Student *s</code>），避免每次传参都拷贝整个数组。</p>'
              },
              {
                id: 'main',
                title: '组装主函数',
                html: '<pre><code>int main() {\n    int n;\n    scanf("%d", &amp;n);\n    struct Student stu[100];\n    for (int i = 0; i &lt; n; i++)\n        scanf("%s %lf", stu[i].name, &amp;stu[i].score);\n\n    printf("平均分：%.2f\\n", average(stu, n));\n\n    int top = topStudent(stu, n);\n    printf("最高分：%s (%.1f)\\n", stu[top].name, stu[top].score);\n\n    sortByScore(stu, n);\n    printf("\\n成绩榜：\\n");\n    for (int i = 0; i &lt; n; i++)\n        printf("%d. %s %.1f\\n", i + 1, stu[i].name, stu[i].score);\n    return 0;\n}</code></pre>\n<p>这一关把<strong>结构体、数组、循环、函数、指针</strong>全用上了，是 C 语言基础阶段的综合检验。能独立写出来，说明前面的知识真正打通了。</p>'
              },
              {
                id: 'extend',
                title: '进阶拓展',
                html: '<ul>\n  <li><strong>文件版</strong>：用 <code>fopen</code>/<code>fscanf</code> 从文件读成绩，<code>fprintf</code> 把榜单写入文件。</li>\n  <li><strong>动态数组</strong>：用 <code>malloc</code> 按实际人数分配内存，不用固定 100。</li>\n  <li><strong>多字段排序</strong>：分数相同按姓名排序，需要在比较函数里加条件。</li>\n  <li><strong>统计功能</strong>：统计各分数段人数（90+、80-89、…），画简易柱状图。</li>\n</ul>\n<div class="doc-tip">💡 到这里你已经掌握了 C 语言的核心语法。下一步可以学<strong>数据结构</strong>（用 C 实现链表、栈、队列），它会让你对指针和内存的理解再上一个台阶。</div>'
              }
            ],
            refs: [CS_REFS.csapp, CS_REFS.algo].concat(C_SOURCES)
          }
        }
      ]
    }
  ];

  var override = {};
  TITLES.forEach(function (t) { override[t] = { modules: [] }; });

  // 大一：C 语言程序设计（15 章）+ 培养方案占位模块
  COURSES.forEach(function (c, ci) {
    var stageTitle = TITLES[Math.floor(ci / 3)];
    if (!stageTitle) return;
    var levels = c.chapters.map(function (ch, k) {
      DOCS[MAJOR + '-m' + ci + '-l' + k] = ch.doc;
      return { name: '第 ' + (k + 1) + ' 章 · ' + ch.title, brief: ch.brief, questions: ch.q, code: ch.code, ready: true };
    });
    override[stageTitle].modules.push({ name: c.name, levels: levels });
  });

  // 大一其余占位模块（南昌大学培养方案）
  var freshmanPlaceholders = [
    '计算机导论与伦理', '高等数学（上）', '高等数学（下）', '线性代数', '面向对象程序设计（Java）'
  ];
  freshmanPlaceholders.forEach(function (m) {
    override[TITLES[0]].modules.push({ name: m, levels: null });
  });

  // 大二 · 专业基础
  var sophomoreModules = ['数据结构', '离散数学', '数字逻辑', '计算机组织与结构', '概率论与数理统计', '数据库原理', '数值计算'];
  sophomoreModules.forEach(function (m) {
    override[TITLES[1]].modules.push({ name: m, levels: null });
  });

  // 大三 · 核心专业课
  var juniorModules = ['操作系统', '编译原理', '计算机网络', '软件工程', '算法分析与设计', '人工智能'];
  juniorModules.forEach(function (m) {
    override[TITLES[2]].modules.push({ name: m, levels: null });
  });

  // 大四 · 出口
  var seniorModules = ['毕业实习', '毕业设计', '工程实践', '计算机网络课程实践'];
  seniorModules.forEach(function (m) {
    override[TITLES[3]].modules.push({ name: m, levels: null });
  });

  MAJOR_STAGE_OVERRIDES[MAJOR] = override;
})();
