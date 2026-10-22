/* ==========================================================
   docs.js · 文字说明（文档页）内容
   --------------------------------------------------------
   - 键名 = 关卡 id（见 data.js 的 buildLevels）
   - 有专门文档的关卡：显示完整正文 + 目录
   - 没有专门文档的关卡：由 makeGenericDoc() 生成「建设中」文档
   参考与延伸资源来自 https://csdiy.wiki （CS 自学指南，MKdocs 站点）
   ========================================================== */

const CSDIY = 'https://csdiy.wiki/';

/* 计算机专业各阶段的延伸资源（csdiy.wiki 对应页面） */
const CS_REFS = {
  entry: { name: 'CS50：哈佛大学计算机科学导论（C 语言入门）', url: CSDIY + '%E7%BC%96%E7%A8%8B%E5%85%A5%E9%97%A8/C/CS50/' },
  tools: { name: 'MIT-Missing-Semester：命令行 / Git / 编辑器必备工具', url: CSDIY + '%E7%BC%96%E7%A8%8B%E5%85%A5%E9%97%A8/MIT-Missing-Semester/' },
  plan: { name: 'csdiy.wiki：一份仅供参考的 CS 学习规划', url: CSDIY + 'CS%E5%AD%A6%E4%B9%A0%E8%A7%84%E5%88%92/' },
  csapp: { name: 'CMU 15-213（CSAPP）：深入理解计算机系统', url: CSDIY + '%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%E5%9F%BA%E7%A1%80/CSAPP/' },
  algo: { name: 'UCB CS61B：数据结构与算法', url: CSDIY + '%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/CS61B/' },
  missing: { name: '命令行艺术 & Shell 脚本', url: CSDIY + '%E5%BF%85%E5%AD%A6%E5%B7%A5%E5%85%B7/workflow/' }
};

/* C 语言权威参考来源（cup.md 要求覆盖 4 个站点） */
const C_SOURCES = [
  { name: 'runoob C 语言教程（中文入门，本项目主要参考）',      url: 'https://www.runoob.com/cprogramming/c-tutorial.html' },
  { name: 'C 语言中文网（编程中文网，25 万字实践派，章节最全）',  url: 'https://c.biancheng.net/c/' },
  { name: 'GeeksforGeeks C Programming Language（英文，题目/代码丰富）', url: 'https://www.geeksforgeeks.org/c-programming-language/' },
  { name: 'cppreference C 语言（中文，权威标准手册，查语法/库函数首选）', url: 'https://zh.cppreference.com/w/c/language' }
];

const DOCS = {

  /* ============================================================
     模块 0 · C 语言基础入门
     ============================================================ */

  /* ---------------- 第 1 关：认识你的第一行代码 ---------------- */
  'engineering-计算机科学与技术-m0-l0': {
    lead: '这一关的目标：写出人生第一段 C 程序，搞懂 main、printf、变量、类型、编译运行这条最基本的链路。',
    sections: [
      {
        id: 'hello',
        title: 'Hello World：一切的开始',
        html: `<pre><code>#include &lt;stdio.h&gt;

int main() {
    printf("Hello, World!\\n");
    return 0;
}</code></pre>
<p>逐行拆解：</p>
<ul>
  <li><code>#include &lt;stdio.h&gt;</code>：引入标准输入输出库，<code>printf</code> 就来自这里。</li>
  <li><code>int main()</code>：程序的入口函数，<strong>每个 C 程序都从 main 开始执行</strong>。</li>
  <li><code>printf("...")</code>：把括号里的内容打印到屏幕。<code>\\n</code> 是换行符。</li>
  <li><code>return 0;</code>：向操作系统报告「程序正常结束」（0 = 成功）。</li>
</ul>`
      },
      {
        id: 'compile',
        title: '编译运行：从源码到可执行文件',
        html: `<p>C 是<strong>编译型语言</strong>，源码不能直接跑，要先编译成机器码：</p>
<pre><code># 终端里执行
gcc hello.c -o hello      # 编译，生成可执行文件 hello
./hello                   # 运行（Windows 下是 hello.exe）</code></pre>
<p>编译分四步：<strong>预处理 → 编译 → 汇编 → 链接</strong>。初学只要记住「写完代码 → gcc 编译 → 运行」就行。</p>
<div class="doc-tip">💡 如果提示 <code>gcc: command not found</code>，说明没装编译器。Windows 装 MinGW 或 MSVC，macOS 装 Xcode Command Line Tools（<code>xcode-select --install</code>），Linux 装 <code>gcc</code>。</div>`
      },
      {
        id: 'var',
        title: '变量与数据类型',
        html: `<p>变量是「给一块内存起个名字」，类型决定这块内存存什么、占多大：</p>
<pre><code>int    age = 19;        // 整数，通常 4 字节
float  height = 1.75;   // 单精度浮点，4 字节
double pi = 3.14159;    // 双精度浮点，8 字节
char   grade = 'A';     // 单个字符，1 字节</code></pre>
<ul>
  <li>C 是<strong>强类型语言</strong>：变量必须先声明类型才能用。</li>
  <li>类型影响<strong>取值范围</strong>和<strong>精度</strong>：<code>int</code> 约 ±21 亿，<code>float</code> 只有 6~7 位有效数字，要高精度用 <code>double</code>。</li>
  <li>命名规则：字母/数字/下划线，不能数字开头，区分大小写，不能用关键字（<code>int</code>、<code>if</code> 等）。</li>
</ul>`
      },
      {
        id: 'printf_fmt',
        title: 'printf 的格式化占位符',
        html: `<pre><code>int a = 10;
double b = 3.14;
char c = 'X';

printf("整数=%d\\n", a);        // %d  → int
printf("浮点=%.2f\\n", b);      // %f  → float/double，.2 表示保留 2 位小数
printf("字符=%c\\n", c);        // %c  → char
printf("字符串=%s\\n", "hi");   // %s  → 字符串
printf("地址=%p\\n", &amp;a);       // %p  → 指针地址</code></pre>
<p>占位符和参数的<strong>类型、数量必须一一对应</strong>，写错了结果不可预期（比如用 <code>%d</code> 打印 <code>double</code> 会出乱码）。</p>`
      }
    ],
    refs: [CS_REFS.entry, CS_REFS.tools].concat(C_SOURCES)
  },

  /* ---------------- 第 2 关：运算符与表达式 ---------------- */
  'engineering-计算机科学与技术-m0-l1': {
    lead: '这一关的目标：掌握 C 里各种运算符的写法和优先级，能看懂一个复杂表达式到底先算谁、后算谁。',
    sections: [
      {
        id: 'arith',
        title: '算术运算符：加减乘除余',
        html: `<pre><code>int a = 10, b = 3;
a + b    // 13
a - b    // 7
a * b    // 30
a / b    // 3   ← 整数除法，只保留整数部分！
a % b    // 1   ← 取余（模），只对整数有效</code></pre>
<ul>
  <li><code>/</code> 的坑：<strong>两个整数相除结果还是整数</strong>，小数部分直接丢弃（不是四舍五入）。想要小数，至少一个操作数写成浮点：<code>10.0 / 3</code> → <code>3.333...</code>。</li>
  <li><code>%</code> 取余只能用于整数，常用于「判断奇偶」（<code>n % 2 == 0</code>）和「取个位」（<code>n % 10</code>）。</li>
</ul>`
      },
      {
        id: 'inc',
        title: '自增自减：++ 与 --',
        html: `<pre><code>int i = 5;
i++;      // i 变成 6，等价于 i = i + 1
++i;      // i 变成 7
i--;      // i 变成 6</code></pre>
<p><strong>前缀 vs 后缀</strong>的区别在「取值时机」：</p>
<pre><code>int a = 5, b = 5;
int x = a++;   // 先取 a 的值赋给 x，a 再加 1 → x=5, a=6
int y = ++b;   // b 先加 1，再赋给 y       → y=6, b=6</code></pre>
<div class="doc-tip">⚠️ 不要在同一个表达式里对同一个变量多次 <code>++</code>，比如 <code>i++ + ++i</code>——这在 C 标准里是<strong>未定义行为</strong>，不同编译器结果不一样。拆开写最安全。</div>`
      },
      {
        id: 'assign',
        title: '赋值与复合赋值',
        html: `<pre><code>int a = 10;
a += 5;   // a = a + 5 → 15
a -= 3;   // a = a - 3 → 12
a *= 2;   // a = a * 2 → 24
a /= 4;   // a = a / 4 → 6
a %= 4;   // a = a % 4 → 2</code></pre>
<p>复合赋值运算符（<code>+= -= *= /= %=</code>）是简写，<strong>功能完全等价</strong>于展开写法，但更紧凑。</p>
<div class="doc-tip">💡 赋值表达式本身也有值：<code>a = 5</code> 这个表达式的值是 5。所以 <code>a = b = c = 0</code> 可以连续赋值（从右往左）。</div>`
      },
      {
        id: 'precedence',
        title: '优先级与结合性',
        html: `<p>运算符有<strong>优先级</strong>（谁先算）和<strong>结合性</strong>（同级时从左还是从右算）：</p>
<ul>
  <li>高 → 低：<code>()</code> 括号 &gt; 单目（<code>++ -- ! &amp; *</code>）&gt; 算术（<code>* / %</code> &gt; <code>+ -</code>）&gt; 比较（<code>&gt; &lt; == !=</code>）&gt; 逻辑（<code>&amp;&amp;</code> &gt; <code>||</code>）&gt; 赋值（<code>= +=</code>）。</li>
  <li>赋值运算符是<strong>右结合</strong>：<code>a = b = 3</code> 先算 <code>b = 3</code>。</li>
  <li>其余大多<strong>左结合</strong>：<code>a - b - c</code> 先算 <code>a - b</code>。</li>
</ul>
<div class="doc-tip">💡 记不住优先级？<strong>加括号</strong>永远不会错。写复杂表达式时，括号既是给编译器看的，更是给三个月后的自己看的。</div>`
      }
    ],
    refs: [CS_REFS.entry, CS_REFS.tools].concat(C_SOURCES)
  },

  /* ---------------- 第 3 关：和程序对话——输入输出 ---------------- */
  'engineering-计算机科学与技术-m0-l2': {
    lead: '这一关的目标：用 printf 格式化输出、用 scanf 读取用户输入，理解 & 为什么在 scanf 里必须出现。',
    sections: [
      {
        id: 'printf',
        title: 'printf：格式化输出',
        html: `<pre><code>int    n = 42;
double d = 3.14159;
char   c = 'Q';
char  *s = "Hello";

printf("%d\\n", n);           // 42
printf("%5d\\n", n);          // "   42"  宽度 5，右对齐
printf("%-5d|\\n", n);        // "42   |"  负号表示左对齐
printf("%.2f\\n", d);         // 3.14     保留 2 位小数
printf("%8.3f\\n", d);        // "   3.142"  总宽 8，小数 3 位
printf("%c %s\\n", c, s);     // Q Hello</code></pre>
<p>常用格式符：<code>%d</code>(int)、<code>%f</code>(float/double)、<code>%c</code>(char)、<code>%s</code>(字符串)、<code>%p</code>(地址)、<code>%%</code>(输出百分号本身)。</p>`
      },
      {
        id: 'scanf',
        title: 'scanf：读取输入（& 是关键）',
        html: `<pre><code>int age;
printf("请输入年龄：");
scanf("%d", &amp;age);           // &amp; 取地址，把读到的值放进 age 所在的内存
printf("你输入了：%d\\n", age);</code></pre>
<p><strong>为什么要 <code>&amp;</code>？</strong><code>scanf</code> 需要知道「把数据写到哪里」，所以它要的是变量的<strong>地址</strong>，而不是变量的值。忘了 <code>&amp;</code> 会编译通过但运行时崩溃或写入错误位置。</p>
<pre><code>double height;
scanf("%lf", &amp;height);       // double 用 %lf（long float）
char name[20];
scanf("%s", name);           // 字符串数组名本身就是地址，不用 &amp;</code></pre>
<div class="doc-tip">⚠️ <code>%s</code> 遇到空格/回车就停，所以 <code>scanf("%s", name)</code> 读不了「张 三」。要读一整行用 <code>fgets(name, sizeof(name), stdin)</code>。</div>`
      },
      {
        id: 'escape',
        title: '转义字符',
        html: `<p>反斜杠 <code>\\</code> 开头的特殊字符：</p>
<table>
<tr><th>转义符</th><th>含义</th></tr>
<tr><td><code>\\n</code></td><td>换行</td></tr>
<tr><td><code>\\t</code></td><td>制表符（Tab）</td></tr>
<tr><td><code>\\\\</code></td><td>反斜杠本身</td></tr>
<tr><td><code>\\"</code></td><td>双引号</td></tr>
<tr><td><code>\\0</code></td><td>空字符（字符串结束标记）</td></tr>
</table>
<pre><code>printf("C:\\\\Users\\\\name");   // 输出 C:\Users\name
printf("姓名\\t年龄\\n");        // 用制表符对齐</code></pre>`
      },
      {
        id: 'pitfalls',
        title: '输入缓冲区的坑',
        html: `<p>用户敲的字符先放在<strong>输入缓冲区</strong>里，<code>scanf</code> 从里面取。常见坑：</p>
<pre><code>int a; char c;
scanf("%d", &amp;a);
scanf("%c", &amp;c);          // 会读到上一个 scanf 留下的回车！
printf("a=%d c=%c\\n", a, c);</code></pre>
<p>输入 <code>42</code> 回车后，缓冲区里剩了个 <code>\\n</code>，第二个 <code>scanf("%c")</code> 直接把它读走了。</p>
<p>解决：在 <code>%c</code> 前加空格跳过空白：<code>scanf(" %c", &amp;c);</code>。或者用 <code>getchar()</code> 吃掉多余的回车。</p>`
      }
    ],
    refs: [CS_REFS.entry, CS_REFS.tools].concat(C_SOURCES)
  },

  /* ============================================================
     模块 1 · 流程控制
     ============================================================ */

  /* ---------------- 第 1 关：让程序学会判断 ---------------- */
  'engineering-计算机科学与技术-m1-l0': {
    lead: '这一关的目标：让程序根据条件走不同的分支，并且能看懂「为什么我的 if 没生效」这类问题。',
    sections: [
      {
        id: 'compare',
        title: '比较运算：结果是「真」还是「假」',
        html: `<p>C 里没有真正的布尔类型（C99 之前），比较的结果就是一个整数：<strong>0 表示假，非 0 表示真</strong>。</p>
<pre><code>5 &gt; 3      // 1（真）
5 == 3     // 0（假）
5 != 3     // 1（真）

int a = 5, b = 3;
printf("%d", a &gt; b);   // 输出 1</code></pre>
<p>六个比较运算符：<code>==</code> 等于、<code>!=</code> 不等于、<code>&gt;</code> 大于、<code>&lt;</code> 小于、<code>&gt;=</code> 大于等于、<code>&lt;=</code> 小于等于。</p>
<div class="doc-tip">⚠️ 最经典的坑：<code>=</code> 是赋值，<code>==</code> 才是比较。<code>if (a = 5)</code> 不是判断，而是「把 5 赋给 a，然后这个赋值表达式的值是 5（真）」——编译能过，逻辑全错。</div>`
      },
      {
        id: 'if',
        title: 'if / else if / else',
        html: `<p>基本结构：条件成立就执行花括号里的内容。</p>
<pre><code>int score = 78;

if (score &gt;= 90) {
    printf("优秀\\n");
} else if (score &gt;= 60) {
    printf("及格\\n");
} else {
    printf("不及格\\n");
}</code></pre>
<p>要点：</p>
<ul>
  <li>判断<strong>从上往下</strong>，第一个成立的分支执行完就跳出整条 if 链，不会再往下判断。</li>
  <li>所以顺序很重要：先判断 <code>&gt;= 90</code> 再判断 <code>&gt;= 60</code>，顺序写反，所有人都会变成「及格」。</li>
  <li>只有一条语句时花括号可以省，但<strong>建议永远写</strong>，省了以后加代码就会出错。</li>
</ul>`
      },
      {
        id: 'logic',
        title: '逻辑运算：&& || !',
        html: `<p>把多个条件组合起来：</p>
<pre><code>int age = 19;
int height = 175;

if (age &gt;= 18 &amp;&amp; height &gt; 170) {
    printf("两个条件都满足\\n");
}

if (age &lt; 18 || height &lt; 160) {
    printf("至少一个满足\\n");
}

if (!(age &gt;= 18)) {
    printf("未成年\\n");
}</code></pre>
<ul>
  <li><code>&amp;&amp;</code> 与：两边都真才真。</li>
  <li><code>||</code> 或：任意一边真就真。</li>
  <li><code>!</code> 非：取反。</li>
  <li>C 有<strong>短路求值</strong>：<code>a &amp;&amp; b</code> 中 a 为假时，b 根本不会被计算。这可以用来做安全检查，比如 <code>if (p != NULL &amp;&amp; p-&gt;value &gt; 0)</code>。</li>
</ul>`
      },
      {
        id: 'pitfalls',
        title: '三个高频错误',
        html: `<ol>
  <li><strong>把 <code>==</code> 写成 <code>=</code></strong>：<code>if (x = 0)</code> 永远为假，而且不报错。</li>
  <li><strong>用 <code>==</code> 比较浮点数</strong>：<code>0.1 + 0.2 == 0.3</code> 在 C 里可能为假，因为小数在计算机里是二进制近似存储的。正确做法是比较差值的绝对值：<code>fabs(a - b) &lt; 1e-9</code>。</li>
  <li><strong>if 后面多写了分号</strong>：<code>if (x &gt; 0);</code> 会让 if 管到一个空语句，后面的代码块永远执行。</li>
</ol>
<div class="doc-tip">💡 调试技巧：把条件里的每个变量单独打印出来，看它们到底等于几，比盯着代码猜快得多。</div>`
      },
      {
        id: 'switch',
        title: 'switch：多路分支的另一种写法',
        html: `<p>当你要根据<strong>同一个整数表达式</strong>的值走不同分支时，<code>switch</code> 比 <code>if-else if</code> 更清晰：</p>
<pre><code>char grade = 'B';
switch (grade) {
  case 'A': printf("优秀"); break;
  case 'B':
  case 'C': printf("及格"); break;   // B 和 C 共用这段
  case 'D': printf("不及格"); break;
  default : printf("无效成绩");
}</code></pre>
<p><strong>三个必须记住的规则</strong>：</p>
<ol>
  <li><strong>case 后要加 break</strong>——不加的话会"穿透"到下一个 case 继续执行，这是 switch 最经典的坑。除非你故意想让多个 case 共用一段代码（如上面的 B 和 C）。</li>
  <li><strong>switch 表达式只能是整数类型</strong>：int / char / short / 枚举。浮点数和字符串都不行。</li>
  <li><strong>default 可选</strong>：所有 case 都不匹配时执行 default；如果没有 default 就直接跳过整个 switch。</li>
</ol>
<div class="doc-tip">💡 什么时候用 switch？当条件是「等于某个常量」的多路分支时优先 switch；需要范围判断（如 <code>x &gt; 60</code>）还是得用 if。</div>`
      }
    ],
    refs: [CS_REFS.entry, CS_REFS.plan].concat(C_SOURCES)
  },

  /* ---------------- 第 2 关：分支逻辑实战 ---------------- */
  'engineering-计算机科学与技术-m1-l1': {
    lead: '这一关的目标：用逻辑运算符组合复杂条件，避开 = 与 ==、悬垂 else 等经典陷阱，写出不会出错的判断。',
    sections: [
      {
        id: 'compound',
        title: '组合条件：&& || !',
        html: `<p>真实题目里的条件很少是单一判断，通常要组合：</p>
<pre><code>// 判断闰年：能被 4 整除但不能被 100 整除，或者能被 400 整除
int isLeap = (year % 4 == 0 &amp;&amp; year % 100 != 0) || (year % 400 == 0);

// 判断成绩是否在 [60, 90) 区间
int ok = score &gt;= 60 &amp;&amp; score &lt; 90;

// 判断字符是否为小写字母
int isLower = ch &gt;= 'a' &amp;&amp; ch &lt;= 'z';</code></pre>
<p><strong>范围判断</strong>必须用 <code>&amp;&amp;</code> 连接两个不等式，不能写 <code>60 &lt;= score &lt; 90</code>——那在数学里对，在 C 里会先算 <code>60 &lt;= score</code> 得到 0 或 1，再用结果和 90 比，逻辑全错。</p>`
      },
      {
        id: 'short-circuit',
        title: '短路求值：有时是好事，有时是坑',
        html: `<pre><code>int a = 0;
if (a != 0 &amp;&amp; 10 / a &gt; 1) {   // a!=0 为假，10/a 不会执行 → 不会除零崩溃
    printf("ok");
}

if (a == 0 || 10 / a &gt; 1) {   // a==0 为真，后面不算
    printf("ok");
}</code></pre>
<p>短路让我们可以<strong>把安全检查写在前面</strong>，后续条件就可以放心使用可能危险的操作。反过来，如果你期望某个条件的副作用（比如 <code>i++</code>）一定执行，就要小心短路会跳过它。</p>`
      },
      {
        id: 'equal',
        title: '= vs ==：一辈子的对手',
        html: `<pre><code>if (x = 5) { ... }   // ⚠️ 这是赋值！x 被设为 5，条件永真
if (x == 5) { ... }  // ✅ 这才是判断</code></pre>
<p>有个防御性写法：<strong>把常量放左边</strong>：<code>if (5 == x)</code>。这样万一写成 <code>5 = x</code>，编译器会直接报错（不能给常量赋值），帮你在编译期就发现 bug。</p>
<div class="doc-tip">💡 现代编译器（gcc -Wall）会对 <code>if (x = 5)</code> 报警告，但养成 <code>==</code> 的肌肉记忆更靠谱。</div>`
      },
      {
        id: 'dangling-else',
        title: '悬垂 else：else 到底跟谁？',
        html: `<pre><code>if (a &gt; 0)
    if (b &gt; 0)
        printf("A");
else
    printf("B");   // 这个 else 属于谁？</code></pre>
<p>C 的规则：<strong>else 总是和最近的未匹配的 if 配对</strong>。所以上面的 <code>else</code> 属于内层的 <code>if (b &gt; 0)</code>，不是外层的。</p>
<p>想让 else 属于外层，必须加花括号：</p>
<pre><code>if (a &gt; 0) {
    if (b &gt; 0)
        printf("A");
} else {
    printf("B");   // 现在属于外层 if
}</code></pre>
<div class="doc-tip">⚠️ 这就是为什么「永远写花括号」是铁律——省花括号省出来的 bug，比省下的那一行代码贵一万倍。</div>`
      }
    ],
    refs: [CS_REFS.entry, CS_REFS.plan].concat(C_SOURCES)
  },

  /* ---------------- 第 3 关：重复的力量 ---------------- */
  'engineering-计算机科学与技术-m1-l2': {
    lead: '这一关的目标：用循环把「重复的事」交给计算机做，并且能判断自己写的是不是会死循环。',
    sections: [
      {
        id: 'for',
        title: 'for 循环：三段式写清楚',
        html: `<pre><code>for (int i = 1; i &lt;= 5; i++) {
    printf("%d ", i);
}
// 输出：1 2 3 4 5</code></pre>
<p>括号里由分号隔开<strong>三段</strong>，执行顺序是：</p>
<ol>
  <li><code>int i = 1</code>：初始化，只在开始时执行一次；</li>
  <li><code>i &lt;= 5</code>：每轮开始前判断，为假就结束循环；</li>
  <li>循环体执行；</li>
  <li><code>i++</code>：每轮结束后更新，然后回到第 2 步。</li>
</ol>
<div class="doc-tip">💡 <code>i++</code> 等价于 <code>i = i + 1</code>。<code>i--</code>、<code>i += 2</code> 也是同理的简写。</div>`
      },
      {
        id: 'while',
        title: 'while 与 do-while',
        html: `<p>不知道要循环多少次、只知道「什么时候停」时，用 <code>while</code>：</p>
<pre><code>int n = 12345, count = 0;
while (n &gt; 0) {
    n = n / 10;     // 整数除法，每次去掉最后一位
    count++;
}
printf("共 %d 位\\n", count);</code></pre>
<p><code>do-while</code> 先执行一次再判断，适合「至少要跑一遍」的场景（比如读输入直到合法）：</p>
<pre><code>do {
    printf("请输入 1~100：");
    scanf("%d", &amp;x);
} while (x &lt; 1 || x &gt; 100);</code></pre>
<p>选择建议：<strong>次数已知用 for，次数未知用 while，必须至少执行一次用 do-while</strong>。</p>`
      },
      {
        id: 'break',
        title: 'break 与 continue',
        html: `<ul>
  <li><code>break</code>：<strong>立刻跳出整个循环</strong>，后面的轮次不再执行。</li>
  <li><code>continue</code>：<strong>跳过本轮剩下的语句</strong>，直接进入下一轮。</li>
</ul>
<pre><code>for (int i = 1; i &lt;= 10; i++) {
    if (i == 5) continue;   // 跳过 5
    if (i == 8) break;      // 到 8 就停
    printf("%d ", i);       // 输出 1 2 3 4 6 7
}</code></pre>
<div class="doc-tip">⚠️ 注意：<code>continue</code> 在 <code>while</code> 里容易写出死循环——如果「更新条件」的语句被 continue 跳过，循环就永远不结束。</div>`
      },
      {
        id: 'patterns',
        title: '三个必背的循环套路',
        html: `<p><strong>① 累加求和</strong></p>
<pre><code>int sum = 0;
for (int i = 1; i &lt;= 100; i++) sum += i;</code></pre>
<p><strong>② 计数</strong>（满足条件的有几个）</p>
<pre><code>int cnt = 0;
for (int i = 1; i &lt;= 100; i++)
    if (i % 3 == 0) cnt++;</code></pre>
<p><strong>③ 求最值</strong>（先把第一个元素当最大，后面挨个比）</p>
<pre><code>int a[5] = {3, 9, 2, 7, 5};
int max = a[0];
for (int i = 1; i &lt; 5; i++)
    if (a[i] &gt; max) max = a[i];</code></pre>
<p>这三套是所有循环题的骨架，后面无论题目怎么变，基本都是它们的组合。</p>`
      }
    ],
    refs: [CS_REFS.entry, CS_REFS.missing].concat(C_SOURCES)
  },

  /* ---------------- 第 4 关：循环嵌套与图案 ---------------- */
  'engineering-计算机科学与技术-m1-l3': {
    lead: '这一关的目标：用嵌套循环打印二维图案，理解 break/continue 在多层循环里的作用范围。',
    sections: [
      {
        id: 'nested',
        title: '嵌套循环：外层管行，内层管列',
        html: `<pre><code>// 打印 3 行 5 列的星号矩阵
for (int i = 0; i &lt; 3; i++) {        // 外层：行
    for (int j = 0; j &lt; 5; j++) {    // 内层：列
        printf("*");
    }
    printf("\\n");                    // 一行打完换行
}
// 输出：
// *****
// *****
// *****</code></pre>
<p>规律：<strong>外层循环变量 <code>i</code> 控制行号，内层 <code>j</code> 控制每行的第几个字符</strong>。所有二维图案题都套用这个骨架，只是「每行打什么」的条件不同。</p>`
      },
      {
        id: 'triangle',
        title: '三角形：让每行的星数随行号变化',
        html: `<pre><code>// 直角三角形（第 i 行打 i+1 个星）
for (int i = 0; i &lt; 5; i++) {
    for (int j = 0; j &lt;= i; j++) {   // 列数 = 行号 + 1
        printf("*");
    }
    printf("\\n");
}
// *
// **
// ***
// ****
// *****</code></pre>
<p>关键是找到「第 i 行打几个」的规律。想打印倒三角就让列数从多到少：<code>j &lt; 5 - i</code>。</p>`
      },
      {
        id: 'multiply',
        title: '经典例题：九九乘法表',
        html: `<pre><code>for (int i = 1; i &lt;= 9; i++) {
    for (int j = 1; j &lt;= i; j++) {
        printf("%d*%d=%-4d", j, i, i * j);
    }
    printf("\\n");
}</code></pre>
<p>第 i 行有 i 个式子，所以内层 <code>j</code> 从 1 到 <code>i</code>。<code>%-4d</code> 让每个式子占 4 列、左对齐，排起来整齐。</p>`
      },
      {
        id: 'scope',
        title: 'break / continue 在嵌套中的作用域',
        html: `<p><code>break</code> 和 <code>continue</code> <strong>只作用于最内层的那一层循环</strong>，不会跳出外层：</p>
<pre><code>for (int i = 0; i &lt; 3; i++) {
    for (int j = 0; j &lt; 5; j++) {
        if (j == 2) break;   // 只跳出内层 j 循环，外层 i 继续
        printf("(%d,%d) ", i, j);
    }
    printf("\\n");
}
// 每行只会打印 j=0, j=1</code></pre>
<p>想跳出多层循环？可以用 <code>goto</code>（C 里合法但要慎用），或者设一个外层标志变量：</p>
<pre><code>int stop = 0;
for (int i = 0; i &lt; 3 &amp;&amp; !stop; i++) {
    for (int j = 0; j &lt; 5; j++) {
        if (j == 2) { stop = 1; break; }
    }
}</code></pre>`
      }
    ],
    refs: [CS_REFS.entry, CS_REFS.missing].concat(C_SOURCES)
  },

  /* ============================================================
     模块 2 · 数据存储
     ============================================================ */

  /* ---------------- 第 1 关：把一组数存起来 ---------------- */
  'engineering-计算机科学与技术-m2-l0': {
    lead: '这一关的目标：用数组一次性管理一组数据，并且知道下标越界为什么最危险。',
    sections: [
      {
        id: 'array',
        title: '数组：一排连续的格子',
        html: `<pre><code>int a[5];                 // 5 个整数，未初始化
int b[5] = {1, 2, 3, 4, 5};
int c[5] = {0};           // 全部为 0
int d[]  = {1, 2, 3};     // 长度自动为 3</code></pre>
<ul>
  <li>数组长度<strong>在定义时固定</strong>，之后不能改。</li>
  <li>下标<strong>从 0 开始</strong>：长度为 5 的数组，合法下标是 0~4。</li>
  <li>元素在内存里是<strong>连续存放</strong>的——这是数组「随机访问很快」的原因。</li>
</ul>
<div class="doc-tip">💡 <code>a[i]</code> 的本质是「从数组起始地址往后数 i 个格子」。所以 <code>a[0]</code> 是第一个，<code>a[n-1]</code> 是最后一个。</div>`
      },
      {
        id: 'loop',
        title: '遍历：数组和循环是天生一对',
        html: `<pre><code>int a[5] = {3, 9, 2, 7, 5};
int n = 5;

int sum = 0;
for (int i = 0; i &lt; n; i++) {
    sum += a[i];
}
printf("和 = %d, 平均 = %.2f\\n", sum, (double)sum / n);</code></pre>
<ul>
  <li>循环条件写 <code>i &lt; n</code>，不要写 <code>i &lt;= n</code>——后者会多访问一格，越界。</li>
  <li>求平均时先转成 <code>double</code>，否则整数除法会丢掉小数。</li>
</ul>`
      },
      {
        id: 'bound',
        title: '越界与初始化：C 不帮你检查',
        html: `<p>这是 C 和其他语言差别最大的地方：<strong>数组越界不会报错，也不会阻止你</strong>。</p>
<pre><code>int a[5] = {1,2,3,4,5};
a[5] = 100;      // 编译通过，运行时写坏了别人的内存
printf("%d", a[-1]);   // 也不报错，读到垃圾值</code></pre>
<p>后果可能是「结果莫名其妙」「程序突然崩溃」「这次没事下次崩」——所以数组题最常见的 bug 就是<strong>下标差一（off-by-one）</strong>。</p>
<p>另外，<strong>局部数组不会自动清零</strong>：</p>
<pre><code>int a[5];            // 里面是随机值
int b[5] = {0};      // 全部为 0，安全写法</code></pre>
<div class="doc-tip">💡 自查方法：写下循环后，用最小的 n 手工走一遍（比如 n=1、n=2），看下标有没有碰到 <code>n</code>。</div>`
      },
      {
        id: 'string',
        title: '字符数组与字符串',
        html: `<p>C 没有专门的字符串类型，字符串就是「以 <code>\\0</code> 结尾的字符数组」。</p>
<pre><code>char s1[] = "abc";          // 实际占 4 个字节：'a','b','c','\\0'
char s2[10] = "hello";

printf("%s\\n", s1);        // 用 %s 打印
printf("%c\\n", s1[0]);     // 'a'，用 %c 打印单个字符</code></pre>
<ul>
  <li>结尾的 <code>\\0</code>（空字符）是<strong>结束标记</strong>，<code>printf</code>、<code>strlen</code> 都靠它判断字符串到哪结束。</li>
  <li><code>strlen(s)</code> 返回的长度<strong>不含</strong> <code>\\0</code>，所以 <code>"abc"</code> 的长度是 3，但占 4 个字节。</li>
  <li>字符串比较不能用 <code>==</code>（那比较的是地址），要用 <code>strcmp(a, b) == 0</code>。</li>
</ul>`
      },
      {
        id: '二维数组',
        title: '二维数组：矩阵就是数组的数组',
        html: `<p>C 里的二维数组本质是「数组元素本身又是一维数组」：</p>
<pre><code>int m[3][4] = {          // 3 行 4 列
  {1, 2, 3, 4},
  {5, 6, 7, 8},
  {9,10,11,12}
};

printf("%d\\n", m[1][2]);   // 第 2 行第 3 列 → 7</code></pre>
<ul>
  <li>声明格式：<code>类型 数组名[行数][列数]</code>。内存里所有元素仍然是<strong>连续存放</strong>的（先放完第一行再放第二行），只是你用下标把它分成行和列。</li>
  <li>遍历时用<strong>双重循环</strong>：外层控制行，内层控制列。</li>
  <li>初始化时可以省略第一维的长度（编译器会帮你数有几行），但<strong>第二维的长度不能省</strong>——因为每个"子数组"的大小必须固定。</li>
</ul>
<pre><code>// 打印二维数组
for (int i = 0; i &lt; 3; i++) {
  for (int j = 0; j &lt; 4; j++) {
    printf("%3d", m[i][j]);
  }
  printf("\\n");     // 每行结束后换行
}</code></pre>`
      },
      {
        id: 'array_name_as_ptr',
        title: '数组名到底是什么？（数组名与指针）',
        html: `<p>这是 C 语言<strong>最容易混淆</strong>的概念之一，也是考研/期末/面试高频考点：</p>
<pre><code>int a[5] = {1, 2, 3, 4, 5};
int *p = a;          // ✅ 能过编译，说明 a 确实能当指针用
printf("%d", a[2]);   // 3
printf("%d", p[2]);   // 3，和 a[2] 一样
printf("%d", *(a+2)); // 3，等价写法</code></pre>
<p><strong>核心规则（标准原文）</strong>：</p>
<ol>
  <li>在大多数表达式中，<strong>数组名会自动退化成首元素的地址</strong>（<code>&amp;a[0]</code>）。这就是为什么 <code>a</code> 能赋给 <code>int*</code>。</li>
  <li>但有<strong>三个例外</strong>数组名不会退化：<strong>sizeof</strong>（<code>sizeof(a)</code> 得到整个数组大小）、<strong>&amp;</strong>（<code>&amp;a</code> 得到"指向整个数组的指针"）、<strong>字符串字面量</strong>（作为初始化器时）。</li>
</ol>
<p>所以 <code>a[i]</code> 的本质就是 <code>*(a + i)</code>——数组下标运算符在编译器里就是这么展开的。</p>
<div class="doc-tip">⚠️ 经典反例：<code>int a[5]; int b[5]; a = b;</code> 编译报错——因为赋值时数组名<strong>没有退化成指针</strong>，C 不允许整体赋值数组。要复制数组只能用 <code>memcpy</code> 或循环逐个元素。</div>`
      },
      {
        id: 'ptr_and_2d_array',
        title: '指针与多维数组（考研/期末重点）',
        html: `<p>二维数组和指针的关系更绕——<strong>二维数组名会退化成「指向第一行的指针」</strong>（一个指向数组的指针，也称"行指针"）：</p>
<pre><code>int m[3][4];
int (*p)[4] = m;    // ✅ p 指向"由 4 个 int 组成的一行"

// 下面三者等价：
m[0][1];
p[0][1];
(*(p + 0))[1];

// 但 m 和 *(m+0) 类型不同：
// m     → 指向行的指针（类型 int(*)[4]）
// *(m+0) → 指向 int 的指针（类型 int*），即第一行首元素</code></pre>
<p><strong>指针数组 vs 数组指针（容易混）</strong>：</p>
<ul>
  <li><code>int *p[4]</code> → <strong>指针数组</strong>，4 个元素每个是 <code>int*</code>（存 4 个地址）。<code>[]</code> 优先级高于 <code>*</code>。</li>
  <li><code>int (*p)[4]</code> → <strong>数组指针</strong>，p 指向一个"4 个 int 的数组"。括号改变了优先级。</li>
</ul>
<p>初始化动态二维数组时，常用「一级指针数组」来模拟：</p>
<pre><code>int **m = malloc(3 * sizeof(int*));   // 3 行
for (int i = 0; i &lt; 3; i++)
  m[i] = malloc(4 * sizeof(int));     // 每行 4 列
// 用完记得逐行 free</code></pre>
<div class="doc-tip">💡 记法：<code>*</code> 放括号里的是"指向数组"（数组指针），<code>*</code> 放外面的是"装指针的数组"（指针数组）。<strong>面试必考</strong>。</div>`
      }
    ],
    refs: [CS_REFS.entry, CS_REFS.algo].concat(C_SOURCES)
  },

  /* ---------------- 第 2 关：数组遍历与统计 ---------------- */
  'engineering-计算机科学与技术-m2-l1': {
    lead: '这一关的目标：熟练遍历数组做求和、计数、求最值、查找，并掌握最简单的排序算法。',
    sections: [
      {
        id: 'traverse',
        title: '遍历的写法',
        html: `<pre><code>int a[5] = {3, 9, 2, 7, 5};
int n = 5;

// 写法一：下标遍历（最常用）
for (int i = 0; i &lt; n; i++) {
    printf("%d ", a[i]);
}

// 写法二：指针遍历
for (int *p = a; p &lt; a + n; p++) {
    printf("%d ", *p);
}</code></pre>
<p>两种写法完全等价，编译器生成的代码几乎一样。下标写法更直观，指针写法在面试里常考。</p>`
      },
      {
        id: 'stat',
        title: '求和 / 平均 / 计数',
        html: `<pre><code>int a[5] = {3, 9, 2, 7, 5};
int n = 5;

int sum = 0, even = 0;
for (int i = 0; i &lt; n; i++) {
    sum += a[i];                // 累加
    if (a[i] % 2 == 0) even++;  // 统计偶数个数
}
double avg = (double)sum / n;   // 求平均（先转 double）
printf("和=%d 平均=%.2f 偶数=%d\\n", sum, avg, even);</code></pre>
<div class="doc-tip">💡 累加器 <code>sum</code> 初始必须为 0，计数器 <code>cnt</code> 初始也为 0。忘了初始化，里面是垃圾值，结果全错。</div>`
      },
      {
        id: 'minmax',
        title: '最大值 / 最小值 / 查找',
        html: `<pre><code>int a[5] = {3, 9, 2, 7, 5};
int n = 5;

int max = a[0], min = a[0];   // 先假设第一个就是最值
for (int i = 1; i &lt; n; i++) {
    if (a[i] &gt; max) max = a[i];
    if (a[i] &lt; min) min = a[i];
}

// 查找 7 是否存在
int target = 7, found = -1;
for (int i = 0; i &lt; n; i++) {
    if (a[i] == target) { found = i; break; }
}
printf("最大=%d 最小=%d 7的下标=%d\\n", max, min, found);</code></pre>
<p>求最值的关键：<strong>先把第一个元素当最值，再从第二个开始比较</strong>。不要把 max 初始化成 0——如果数组全是负数，结果就错了。</p>`
      },
      {
        id: 'bubble',
        title: '排序入门：冒泡排序',
        html: `<p>冒泡排序的思想：每轮把最大的元素「冒泡」到末尾，像气泡往上浮。</p>
<pre><code>int a[5] = {3, 9, 2, 7, 5};
int n = 5;
for (int i = 0; i &lt; n - 1; i++) {           // 共 n-1 轮
    for (int j = 0; j &lt; n - 1 - i; j++) {   // 每轮比较到 n-1-i
        if (a[j] &gt; a[j + 1]) {              // 前一个比后一个大就交换
            int t = a[j]; a[j] = a[j+1]; a[j+1] = t;
        }
    }
}
// 结果：2 3 5 7 9</code></pre>
<p>时间复杂度 O(n²)，数据量大时很慢，但作为排序入门是必学的。更高效的排序（快排、归并）在数据结构课里学。</p>`
      }
    ],
    refs: [CS_REFS.entry, CS_REFS.algo].concat(C_SOURCES)
  },

  /* ---------------- 第 3 关：字符串处理 ---------------- */
  'engineering-计算机科学与技术-m2-l2': {
    lead: '这一关的目标：弄清 C 字符串的本质（以 \\0 结尾的字符数组），熟练使用 strlen、strcmp、strcpy 等库函数。',
    sections: [
      {
        id: 'essence',
        title: '字符串的本质：\\0 结尾',
        html: `<pre><code>char s1[] = "abc";       // 占 4 字节：'a' 'b' 'c' '\\0'
char s2[10] = "hi";      // s2[0]='h' s2[1]='i' s2[2]='\\0' 其余清零
char s3[] = {'a', 'b', 'c'};  // ⚠️ 没有 \\0，不是合法字符串！</code></pre>
<p>C 里所有字符串操作都依赖结尾的 <code>\\0</code> 来判断「到哪结束」。少了 <code>\\0</code>，<code>printf("%s")</code>、<code>strlen</code> 会一直往后读到内存里的垃圾或崩溃。</p>`
      },
      {
        id: 'strlen-sizeof',
        title: 'strlen vs sizeof',
        html: `<pre><code>char s[] = "hello";
strlen(s);   // 5   —— 不含 \\0 的字符个数
sizeof(s);   // 6   —— 整个数组的字节数（含 \\0）

char *p = "hello";
strlen(p);   // 5
sizeof(p);   // 8（64 位下指针大小）—— 注意！不是字符串长度</code></pre>
<p><strong>核心区别</strong>：<code>strlen</code> 是函数，运行时数到 <code>\\0</code> 为止；<code>sizeof</code> 是运算符，编译期就知道大小。对字符数组用 <code>sizeof</code> 能得到容量，对 char* 用 <code>sizeof</code> 只能得到指针大小。</p>`
      },
      {
        id: 'funcs',
        title: '常用字符串函数（string.h）',
        html: `<pre><code>#include &lt;string.h&gt;

char a[20] = "Hello";
char b[20] = "World";

strcpy(a, b);        // 把 b 复制到 a，a 现在是 "World"
strcat(a, b);        // 把 b 拼到 a 末尾，a 变成 "WorldWorld"
strcmp(a, b);        // 比较：a<b 返回负数，相等返回 0，a>b 返回正数
strlen(a);           // 长度</code></pre>
<table>
<tr><th>函数</th><th>作用</th><th>注意</th></tr>
<tr><td><code>strcpy(dst, src)</code></td><td>复制字符串</td><td>dst 必须足够大，否则溢出</td></tr>
<tr><td><code>strcat(dst, src)</code></td><td>追加到末尾</td><td>dst 要有足够剩余空间</td></tr>
<tr><td><code>strcmp(a, b)</code></td><td>比较大小</td><td>逐字符按 ASCII 码比，不能用 <code>==</code></td></tr>
<tr><td><code>strlen(s)</code></td><td>求长度</td><td>不含 <code>\\0</code></td></tr>
</table>
<div class="doc-tip">⚠️ <code>strcpy</code>/<code>strcat</code> 不检查目标数组大小，是缓冲区溢出的重灾区。实际工程里推荐用 <code>strncpy</code>、<code>strncat</code> 限制长度。</div>`
      },
      {
        id: 'input',
        title: '字符串输入：gets 已死，fgets 当立',
        html: `<pre><code>char name[20];
scanf("%s", name);        // 遇到空格/回车停止，读不了带空格的名字
// 输入 "Zhang San" → name 只有 "Zhang"

fgets(name, sizeof(name), stdin);  // 读一整行，包括空格
// 但 fgets 会把末尾的 \\n 也读进来，需要手动去掉
name[strcspn(name, "\\n")] = '\\0';</code></pre>
<p><code>gets()</code> 函数因为无法限制输入长度，已被 C11 标准<strong>彻底移除</strong>，永远不要用。读取一行用 <code>fgets</code>。</p>`
      }
    ],
    refs: [CS_REFS.entry, CS_REFS.algo].concat(C_SOURCES)
  },

  /* ============================================================
     模块 3 · 函数与指针
     ============================================================ */

  /* ---------------- 第 1 关：把代码块打包成函数 ---------------- */
  'engineering-计算机科学与技术-m3-l0': {
    lead: '这一关的目标：把一段重复的代码打包成函数，理解形参与实参，以及递归的"自己调自己"。',
    sections: [
      {
        id: 'define',
        title: '定义一个函数',
        html: `<p>函数的格式是：<strong>返回类型 + 函数名 + 参数列表 + 花括号里的函数体</strong>。</p>
<pre><code>// 返回类型 函数名(参数类型 参数名, ...)
int max(int a, int b) {
  if (a &gt; b) return a;
  return b;
}

void sayHello() {       // void 表示不返回值
  printf("Hello\\n");
}</code></pre>
<ul>
  <li><code>return</code> 把结果返回给调用者，同时立刻结束函数；<code>void</code> 函数可以没有 <code>return</code>，也可以写 <code>return;</code>（不带值）提前退出。</li>
  <li>函数<strong>只能返回一个值</strong>。想返回多个结果，后面要用指针或结构体。</li>
  <li>C 不允许函数嵌套定义——函数体里不能再写另一个函数。</li>
</ul>`
      },
      {
        id: 'call',
        title: '形参与实参：默认"传值"',
        html: `<p>调用函数时传给它的具体值叫<strong>实参</strong>，函数声明里接收的变量叫<strong>形参</strong>。C 默认是<strong>传值调用</strong>：</p>
<pre><code>void setZero(int x) { x = 0; }

int main() {
  int a = 5;
  setZero(a);
  printf("%d", a);    // 还是 5，没变
}</code></pre>
<p><code>x</code> 拿到的是 <code>a</code> 的<strong>副本</strong>，函数内改的是副本，<code>main</code> 里的 <code>a</code> 不受影响。想让函数改实参，就得传<strong>指针</strong>——这是下一关的事。</p>
<div class="doc-tip">💡 函数声明（原型）可以写在调用者前面，让编译器知道"有这么个函数存在"。函数定义写在后面没问题：<code>int max(int a, int b); // 声明</code></div>`
      },
      {
        id: 'scope',
        title: '作用域与生命周期',
        html: `<p>C 里变量的可见性和生存期由<strong>定义位置</strong>决定：</p>
<ul>
  <li><strong>局部变量</strong>（函数内定义）：只在本函数内可见，进入函数时创建、退出函数时销毁。不同函数可以有同名局部变量，互不干扰。</li>
  <li><strong>全局变量</strong>（所有函数外定义）：整个程序都能访问，跟程序同生共死。能不用尽量不用——多个函数改同一个全局变量时很难排查 bug。</li>
  <li><strong>static 局部变量</strong>：只初始化一次，之后每次调用保留上一次的值。</li>
</ul>
<pre><code>int countCalls() {
  static int n = 0;   // 只在第一次进入时初始化
  return ++n;
}
// 连续调用三次，依次返回 1, 2, 3</code></pre>`
      },
      {
        id: 'recursion',
        title: '递归：函数自己调自己',
        html: `<p>递归是把一个大问题拆成<strong>同类的小问题</strong>，直到小问题可以直接算出答案（基准条件）。经典例子：阶乘。</p>
<pre><code>// n! = n * (n-1) * ... * 1
// 基准条件：0! = 1
int fact(int n) {
  if (n &lt;= 1) return 1;         // 基准条件，必须先写
  return n * fact(n - 1);       // 递归调用自己
}</code></pre>
<p><strong>写递归的两步法</strong>：</p>
<ol>
  <li><strong>基准条件</strong>：问题小到可以直接给答案的情况，必须能让递归停住（否则死递归 → 栈溢出）。</li>
  <li><strong>递归步骤</strong>：把当前问题分解成"同类但更小"的子问题，递归调用。</li>
</ol>
<div class="doc-tip">⚠️ 递归虽短但慢——每多一层调用就多占一块栈空间。数据大时可能比循环慢甚至爆栈。写递归前先想：「能不能用循环改写？」</div>`
      }
    ],
    refs: [CS_REFS.entry, CS_REFS.algo].concat(C_SOURCES)
  },

  /* ---------------- 第 2 关：递归与函数进阶 ---------------- */
  'engineering-计算机科学与技术-m3-l1': {
    lead: '这一关的目标：深入理解递归的执行过程（栈帧），掌握经典递归问题，并学会在递归与迭代之间取舍。',
    sections: [
      {
        id: 'stack',
        title: '递归的底层：调用栈',
        html: `<p>每次函数调用，系统都会在<strong>调用栈</strong>上分配一块叫<strong>栈帧（stack frame）</strong>的内存，存这个函数的局部变量、参数、返回地址。函数返回时栈帧被回收。</p>
<p>以 <code>fact(3)</code> 为例：</p>
<pre><code>fact(3)
  → 3 * fact(2)
      → 2 * fact(1)
          → 1 * fact(0)
              → return 1      // 基准条件，开始回弹
          → return 1 * 1 = 1
      → return 2 * 1 = 2
  → return 3 * 2 = 6</code></pre>
<p>递归越深，栈帧越多。<strong>栈空间是有限的</strong>（通常几 MB），递归过深会触发<strong>栈溢出（stack overflow）</strong>导致程序崩溃。</p>`
      },
      {
        id: 'fib',
        title: '经典递归：斐波那契',
        html: `<p>斐波那契数列：1, 1, 2, 3, 5, 8, 13... 从第三项起每项等于前两项之和。</p>
<pre><code>int fib(int n) {
    if (n &lt;= 2) return 1;           // 基准条件
    return fib(n - 1) + fib(n - 2); // 递归
}</code></pre>
<p>看似简洁，但有大问题：<code>fib(5)</code> 会调用 <code>fib(4)</code> 和 <code>fib(3)</code>，而 <code>fib(4)</code> 又会调用 <code>fib(3)</code>——<strong>大量重复计算</strong>。时间复杂度是指数级 O(2ⁿ)，算到 n=40 就明显变慢。</p>
<div class="doc-tip">💡 优化方法：① 用循环改写（迭代）；② 记忆化递归（把算过的结果存起来，避免重复）。面试时能写出递归版再加一句「实际用迭代或记忆化」会很加分。</div>`
      },
      {
        id: 'hanoi',
        title: '经典递归：汉诺塔',
        html: `<p>汉诺塔：把 n 个盘子从 A 柱移到 C 柱，大盘不能压小盘，每次只能移一个。</p>
<pre><code>void hanoi(int n, char from, char via, char to) {
    if (n == 1) {
        printf("%c → %c\\n", from, to);  // 只有一个盘子，直接移
        return;
    }
    hanoi(n - 1, from, to, via);   // 把上面 n-1 个从 from 移到 via（借助 to）
    printf("%c → %c\\n", from, to); // 把最底下的大盘从 from 移到 to
    hanoi(n - 1, via, from, to);   // 把 n-1 个从 via 移到 to（借助 from）
}</code></pre>
<p>汉诺塔是「递归思想」最经典的演示：把 n 个盘子的问题，化成两个 n-1 盘子的子问题 + 一次移动。递归公式：移动次数 = 2ⁿ - 1。</p>`
      },
      {
        id: 'tradeoff',
        title: '递归 vs 迭代：怎么选',
        html: `<table>
<tr><th></th><th>递归</th><th>迭代（循环）</th></tr>
<tr><td>代码</td><td>简洁、贴近数学定义</td><td>通常更长</td></tr>
<tr><td>性能</td><td>有函数调用开销，可能爆栈</td><td>快，无栈开销</td></tr>
<tr><td>风险</td><td>忘了基准条件就死递归</td><td>循环条件写错会死循环</td></tr>
</table>
<p><strong>经验法则</strong>：问题天然是递归结构（树、分治、汉诺塔）用递归；简单重复（累加、遍历）用循环。能用循环轻松改写的递归，优先用循环。</p>
<p>进阶：<strong>尾递归</strong>——递归调用是函数最后一条语句，部分编译器可以优化成循环（不占额外栈帧）。但 C 标准不保证优化，不能依赖。</p>`
      }
    ],
    refs: [CS_REFS.entry, CS_REFS.algo].concat(C_SOURCES)
  },

  /* ---------------- 第 3 关：地址与指针 ---------------- */
  'engineering-计算机科学与技术-m3-l2': {
    lead: '这一关的目标：搞懂「地址」是什么，& 和 * 分别干什么，以及为什么数组和指针经常可以互换。',
    sections: [
      {
        id: 'memory',
        title: '内存里的地址',
        html: `<p>计算机的内存可以想象成一排编号的小格子，每个格子有一个<strong>地址</strong>。每个变量都占一个或多个格子：</p>
<pre><code>int a = 10;      // 假设 a 存在地址 0x1000
double b = 3.14; // b 可能在 0x1004（int 占 4 字节）

printf("%p\\n", &amp;a);    // &amp;a 取出 a 的地址，用 %p 打印</code></pre>
<p><code>&amp;</code> 运算符 = 取地址。得到的地址是一个十六进制数（如 0x7ffeeaae08d8），每次运行都可能不一样。</p>`
      },
      {
        id: 'pointer',
        title: '指针变量',
        html: `<p><strong>指针变量</strong>就是"专门存地址的变量"。声明时用 <code>*</code>：</p>
<pre><code>int  a = 10;
int *p = &amp;a;    // p 是"指向 int 的指针"，存的是 a 的地址

printf("%d\\n", *p);   // *p = 取出 p 指向的那个变量的值 → 10

*p = 20;               // 通过 p 间接修改了 a！
printf("%d\\n", a);    // 现在 a 变成 20 了</code></pre>
<p><strong>记住两个符号</strong>：</p>
<ul>
  <li><code>&amp;</code> —— 取地址（「这个变量住在哪里」）</li>
  <li><code>*</code> —— 解引用（「这个地址上的那个变量」）</li>
</ul>
<div class="doc-tip">⚠️ 指针声明里的 <code>*</code> 不是乘号，也不是解引用——它只是说明"p 是个指针类型"。三个 <code>*</code> 在不同语境下意思完全不同，别混。</div>`
      },
      {
        id: 'pointer_array',
        title: '指针和数组的亲密关系',
        html: `<p>在 C 里，<strong>数组名在大多数表达式中会自动退化成首元素的地址</strong>。所以：</p>
<pre><code>int a[3] = {1, 2, 3};
int *p = a;           // 等价于 int *p = &amp;a[0];

printf("%d\\n", *(p + 1));   // 等价于 a[1]
printf("%d\\n", p[2]);       // 等价于 *(p + 2)</code></pre>
<p>这就是为什么数组和指针经常可以互换——<code>a[i]</code> 的本质就是 <code>*(a + i)</code>。</p>
<p><strong>指针算术</strong>：<code>p + 1</code> 不是地址值加 1，而是"加一个元素的大小"。对 <code>int*</code> 来说跳过 4 字节，对 <code>double*</code> 跳过 8 字节。这让 <code>p++</code> 可以顺序遍历数组。</p>`
      },
      {
        id: 'pass_by_pointer',
        title: '用指针让函数改实参',
        html: `<p>上一关说过 C 默认传值，函数改不了实参。解决办法：<strong>把实参的地址传进去</strong>，函数通过指针间接修改：</p>
<pre><code>void swap(int *x, int *y) {
  int t = *x; *x = *y; *y = t;
}

int main() {
  int a = 3, b = 5;
  swap(&amp;a, &amp;b);   // 传地址
  printf("a=%d b=%d", a, b);  // a=5 b=3，真的交换了！
}</code></pre>
<p>这是指针最实用的场景之一：让函数能"回写"多个结果。反过来，当你想让函数<strong>只读</strong>一大块数据不想拷贝（比如大数组、大结构体），也传指针——但加上 <code>const</code>：</p>
<pre><code>int sum(const int *arr, int n) { /* 不会改 arr */ }</code></pre>
<div class="doc-tip">⚠️ 空指针（NULL）不能解引用。<code>int *p = NULL; *p = 1;</code> 会直接崩溃。使用指针前先判空：<code>if (p) ...</code></div>`
      }
    ],
    refs: [CS_REFS.entry, CS_REFS.csapp].concat(C_SOURCES)
  },

  /* ============================================================
     模块 4 · 高级应用
     ============================================================ */

  /* ---------------- 第 1 关：打包数据与读写文件 ---------------- */
  'engineering-计算机科学与技术-m4-l0': {
    lead: '这一关的目标：用 struct 把不同类型的数据打包成新类型，了解 union 的内存共享特性，学会用 fopen/fclose 做基本的文件读写。',
    sections: [
      {
        id: 'struct',
        title: 'struct：自定义你的类型',
        html: `<p><strong>结构体</strong>把几个不同类型的变量打包在一起，组成一个新类型：</p>
<pre><code>struct Student {
  char name[32];
  int  age;
  double score;
};

struct Student s1;                // 定义变量
s1.age = 19;                      // 用 . 访问成员
strcpy(s1.name, "小明");
s1.score = 91.5;

struct Student s2 = {"小红", 20, 88.0};  // 初始化</code></pre>
<ul>
  <li><code>struct 标签名 { 成员列表 };</code> 结尾的分号<strong>不能漏</strong>——这是 C 的语法坑之一。</li>
  <li>成员默认按声明顺序在内存里依次排列，中间可能有对齐空隙（所以 <code>sizeof(struct)</code> 不一定等于各成员大小之和）。</li>
  <li>结构体也可以作为函数参数或返回值，但大结构体建议传指针避免拷贝开销。</li>
</ul>`
      },
      {
        id: 'pointer_to_struct',
        title: '指针与结构体：-> 运算符',
        html: `<p>如果有一个指向结构体的指针，访问成员有两种写法：</p>
<pre><code>struct Student s = {"小明", 19, 91.5};
struct Student *p = &amp;s;

// 以下两句等价：
(*p).age = 20;     // 先解引用，再用 .
p-&gt;age = 20;       // 用 -&gt; 更简洁（结构体指针专用）</code></pre>
<p><code>-&gt;</code> 就是"指向结构体的指针访问成员"的专用写法，比 <code>(*p).成员</code> 简洁且常用。</p>`
      },
      {
        id: 'union',
        title: 'union：共用一块内存',
        html: `<p><strong>共用体</strong>和结构体长得像，但有一个根本区别：<strong>所有成员共用同一块内存</strong>。</p>
<pre><code>union Data {
  int    i;
  float  f;
  char   str[20];
};

union Data u;
u.i = 65;
printf("%d\\n", u.i);   // 65
printf("%c\\n", u.f);   // 未定义！因为 f 和 i 共用同一块内存</code></pre>
<ul>
  <li><code>sizeof(union Data)</code> = 最大成员的大小（这里是 20）。</li>
  <li>写一个成员后，其他成员的值就变成"未定义"了——读哪个取决于你最后写的是哪个。</li>
  <li>什么时候用？需要用不同方式看同一块内存（比如把 4 字节 int 当 4 个 char 看），或节省内存空间。</li>
</ul>
<div class="doc-tip">💡 面试里常考 union 和 struct 的区别：struct 每个成员有独立内存，大小 ≥ 各成员之和；union 所有成员共用内存，大小 = 最大成员的大小。</div>`
      },
      {
        id: 'file_io',
        title: '文件读写',
        html: `<p>C 里做文件 I/O 的标准步骤：<strong>fopen 打开 → 读写 → fclose 关闭</strong>。</p>
<pre><code>// ① 打开（"r"只读 / "w"写会清空 / "a"追加）
FILE *fp = fopen("out.txt", "w");
if (fp == NULL) {
  printf("打开文件失败\\n");
  return 1;
}

// ② 写入（fprintf 跟 printf 几乎一样，只是多一个 FILE* 参数）
fprintf(fp, "学号: %s 分数: %.1f\\n", s.name, s.score);

// ③ 读取
char line[128];
while (fgets(line, sizeof(line), fp)) {
  printf("%s", line);
}

// ④ 关闭（一定要关，否则数据可能没写进磁盘）
fclose(fp);</code></pre>
<table>
<tr><th>模式</th><th>说明</th></tr>
<tr><td><code>"r"</code></td><td>只读，文件必须已存在</td></tr>
<tr><td><code>"w"</code></td><td>只写，不存在就创建，存在就<strong>清空</strong></td></tr>
<tr><td><code>"a"</code></td><td>追加，写到文件末尾</td></tr>
<tr><td><code>"rb" / "wb"</code></td><td>二进制模式（读写图片、音频等非文本文件）</td></tr>
</table>
<div class="doc-tip">⚠️ Windows 下写文件最好用 <code>"w"</code>（文本模式，会把 \\n 转成 \\r\\n）。用 <code>"wb"</code> 二进制模式时不会做转换。读完文件一定要 <code>fclose</code>——操作系统对可同时打开的文件数有限制。</div>`
      }
    ],
    refs: [CS_REFS.csapp, CS_REFS.plan].concat(C_SOURCES)
  },

  /* ---------------- 第 2 关：综合挑战——成绩榜 ---------------- */
  'engineering-计算机科学与技术-m4-l1': {
    lead: '这一关的目标：把前面学的结构体、数组、循环、函数、指针组合起来，完成一个有实际意义的综合程序。',
    sections: [
      {
        id: 'problem',
        title: '题目拆解：我们要做什么',
        html: `<p><strong>需求</strong>：录入 N 个学生的姓名和分数，输出平均分、最高分学生，并按分数从高到低排序打印成绩榜。</p>
<p>拆成子任务：</p>
<ol>
  <li>用结构体数组存学生信息（姓名 + 分数）。</li>
  <li>输入 N 和每个学生的数据。</li>
  <li>遍历求平均分。</li>
  <li>遍历找最高分学生。</li>
  <li>按分数排序。</li>
  <li>输出成绩榜。</li>
</ol>
<p>这就是「<strong>输入 → 处理 → 输出</strong>」的经典程序结构，也是所有编程题的通用骨架。</p>`
      },
      {
        id: 'struct-array',
        title: '结构体数组：存多个学生',
        html: `<pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

struct Student {
    char name[32];
    double score;
};

int main() {
    int n;
    printf("学生人数：");
    scanf("%d", &amp;n);

    struct Student stu[100];   // 最多 100 人
    for (int i = 0; i &lt; n; i++) {
        printf("第 %d 个：姓名 分数 = ", i + 1);
        scanf("%s %lf", stu[i].name, &amp;stu[i].score);
    }
    // ... 后续处理
    return 0;
}</code></pre>
<p><code>stu[i].name</code> 是数组名（地址），scanf 不用 <code>&amp;</code>；<code>stu[i].score</code> 是普通变量，要加 <code>&amp;</code>。</p>`
      },
      {
        id: 'modular',
        title: '模块化：拆成多个函数',
        html: `<p>把不同功能拆成独立函数，主函数只负责调度，代码更清晰：</p>
<pre><code>// 求平均分
double average(struct Student *s, int n) {
    double sum = 0;
    for (int i = 0; i &lt; n; i++) sum += s[i].score;
    return sum / n;
}

// 找最高分学生的下标
int topStudent(struct Student *s, int n) {
    int top = 0;
    for (int i = 1; i &lt; n; i++)
        if (s[i].score &gt; s[top].score) top = i;
    return top;
}

// 按分数降序排序（冒泡）
void sortByScore(struct Student *s, int n) {
    for (int i = 0; i &lt; n - 1; i++)
        for (int j = 0; j &lt; n - 1 - i; j++)
            if (s[j].score &lt; s[j+1].score) {
                struct Student t = s[j];
                s[j] = s[j+1];
                s[j+1] = t;
            }
}</code></pre>
<p>函数参数用<strong>结构体指针</strong>（<code>struct Student *s</code>），避免每次传参都拷贝整个数组。</p>`
      },
      {
        id: 'main',
        title: '组装主函数',
        html: `<pre><code>int main() {
    int n;
    scanf("%d", &amp;n);
    struct Student stu[100];
    for (int i = 0; i &lt; n; i++)
        scanf("%s %lf", stu[i].name, &amp;stu[i].score);

    printf("平均分：%.2f\\n", average(stu, n));

    int top = topStudent(stu, n);
    printf("最高分：%s (%.1f)\\n", stu[top].name, stu[top].score);

    sortByScore(stu, n);
    printf("\\n成绩榜：\\n");
    for (int i = 0; i &lt; n; i++)
        printf("%d. %s %.1f\\n", i + 1, stu[i].name, stu[i].score);
    return 0;
}</code></pre>
<p>这一关把<strong>结构体、数组、循环、函数、指针</strong>全用上了，是 C 语言基础阶段的综合检验。能独立写出来，说明前面的知识真正打通了。</p>`
      },
      {
        id: 'extend',
        title: '进阶拓展',
        html: `<ul>
  <li><strong>文件版</strong>：用 <code>fopen</code>/<code>fscanf</code> 从文件读成绩，<code>fprintf</code> 把榜单写入文件。</li>
  <li><strong>动态数组</strong>：用 <code>malloc</code> 按实际人数分配内存，不用固定 100。</li>
  <li><strong>多字段排序</strong>：分数相同按姓名排序，需要在比较函数里加条件。</li>
  <li><strong>统计功能</strong>：统计各分数段人数（90+、80-89、…），画简易柱状图。</li>
</ul>
<div class="doc-tip">💡 到这里你已经掌握了 C 语言的核心语法。下一步可以学<strong>数据结构</strong>（用 C 实现链表、栈、队列），它会让你对指针和内存的理解再上一个台阶。</div>`
      }
    ],
    refs: [CS_REFS.csapp, CS_REFS.algo].concat(C_SOURCES)
  }

};

/* 没有专门文档时生成的通用文档 */
function makeGenericDoc(level, ctx) {
  var moduleName = (ctx && ctx.module && ctx.module.name) || '本模块';
  var majorName = (ctx && ctx.major && ctx.major.name) || '';
  var catName = (ctx && ctx.cat && ctx.cat.name) || '';
  var refs = [];
  if (majorName.indexOf('计算机') > -1) refs = [CS_REFS.plan, CS_REFS.csapp];

  // 门类名和专业名经常一样（如 哲学 · 哲学），避免重复
  var belong = catName && catName !== majorName
    ? '属于「' + catName + ' · ' + majorName + '」的路径'
    : '属于「' + majorName + '」的路径';

  return {
    lead: '这一关的文档还在整理中。下面是这个模块的学习目标和通用自学建议，题目会随后补上。',
    sections: [
      {
        id: 'goal',
        title: '这一模块要解决什么',
        html: '<p><strong>' + moduleName + '</strong> ' + belong + '。' +
          '这一关的核心任务是：先把概念弄清楚（是什么、解决什么问题），再用小练习验证自己真的会用。</p>' +
          '<div class="doc-tip">💡 学不动的时候先问自己一句：这个知识点，我能用一句话讲给室友听吗？讲不出来，说明还没懂。</div>'
      },
      {
        id: 'how',
        title: '通用学习建议（三步）',
        html: `<ol>
  <li><strong>先看一遍目录</strong>：知道这一章有几块、它们怎么连起来，比一上来就抠细节有效。</li>
  <li><strong>动手做最小实验</strong>：每学一个概念，立刻写一个最小的例子验证它，不要只看不写。</li>
  <li><strong>用自己的话复述</strong>：合上资料，把要点写成三五句话；写不出来的地方就是没掌握的地方。</li>
</ol>`
      },
      {
        id: 'todo',
        title: '当前进度',
        html: '<p>计算机科学与技术专业的 C 语言 15 关文档已全部补齐，可在「地图」中逐关学习。</p>'
      }
    ],
    refs: refs
  };
}

function getDoc(level, ctx) {
  var d = DOCS[level.id];
  return d || makeGenericDoc(level, ctx);
}
