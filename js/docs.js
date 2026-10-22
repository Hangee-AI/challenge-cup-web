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

const DOCS = {

  /* ---------------- C 语言入门 · 第 1 关 ---------------- */
  'engineering-计算机科学与技术-m0-l0': {
    lead: '这一关的目标：看懂一个最小的 C 程序，知道每一行在干什么，然后自己把它敲出来、编译、运行。',
    sections: [
      {
        id: 'minimal',
        title: '一个最小的 C 程序',
        html: `<p>任何 C 程序都有<strong>一个入口</strong>：<code>main</code> 函数。操作系统运行程序时，从 <code>main</code> 的第一条语句开始执行。</p>
<pre><code>#include &lt;stdio.h&gt;      // 引入标准输入输出库

int main(void) {        // 程序的入口
    printf("Hello, C!\\n");
    return 0;           // 0 表示正常结束
}</code></pre>
<p>逐行拆开看：</p>
<ul>
  <li><code>#include &lt;stdio.h&gt;</code>：把「标准输入输出」的声明包含进来，<code>printf</code> 就是从这儿来的。</li>
  <li><code>int main(void)</code>：入口函数。<code>int</code> 表示它返回一个整数，<code>void</code> 表示不接受参数。</li>
  <li>每条<strong>语句以分号结尾</strong>，这是 C 的硬性语法，漏了会直接编译失败。</li>
  <li><code>return 0;</code>：把 0 返回给操作系统，表示程序正常结束。</li>
</ul>
<div class="doc-tip">💡 <strong>花括号</strong><code>{ }</code> 圈出的是「代码块」。C 不靠缩进决定结构，缩进只是为了人看。</div>`
      },
      {
        id: 'printf',
        title: 'printf 与格式占位符',
        html: `<p><code>printf</code> 负责把内容打印到屏幕上。它的第一个参数是「格式串」，里面用 <code>%</code> 开头的<strong>占位符</strong>表示「这里要填一个值」。</p>
<pre><code>int age = 19;
double score = 91.5;
char grade = 'A';

printf("age = %d\\n", age);       // %d 整数
printf("score = %f\\n", score);   // %f 小数
printf("grade = %c\\n", grade);   // %c 单个字符
printf("%s\\n", "hello");         // %s 字符串</code></pre>
<ul>
  <li><code>%d</code> 整数，<code>%f</code> 小数，<code>%c</code> 单个字符，<code>%s</code> 字符串。</li>
  <li><code>\\n</code> 是换行符，写在字符串里表示「这里换一行」。</li>
  <li>占位符和后面的参数<strong>按顺序一一对应</strong>，写反了会打出错误内容。</li>
</ul>
<div class="doc-tip">⚠️ 常见错误：在 <code>printf</code> 里写中文引号 <code>“ ”</code> 或中文分号 <code>；</code>，编译器会报莫名其妙的错——C 只认英文半角符号。</div>`
      },
      {
        id: 'variable',
        title: '变量：先声明，再使用',
        html: `<p>变量的写法是「类型 + 名字 + 初值」：</p>
<pre><code>int    a = 3;        // 整数
double b = 2.5;      // 小数
char   c = 'x';      // 字符（单引号）
int    d;            // 只声明不赋值，值是随机的</code></pre>
<p>C 是<strong>强类型</strong>语言：变量一旦声明成 <code>int</code>，就只能装整数。这也是 C 和 Python 最大的观感差别之一。</p>
<div class="doc-tip">💡 <code>int d;</code> 没有初始化时，里面可能是<strong>任意值</strong>（不是 0）。养成「声明时就给初值」的习惯。</div>`
      },
      {
        id: 'compile',
        title: '从源代码到能运行的程序',
        html: `<p>你写的 <code>.c</code> 文件计算机读不懂，需要先<strong>编译</strong>成机器能执行的程序：</p>
<pre><code>gcc hello.c -o hello     # 编译
./hello                  # 运行（Windows 下是 hello.exe）</code></pre>
<p>编译其实分四步：预处理（展开 <code>#include</code>）→ 编译（翻译成汇编）→ 汇编（变成机器码）→ 链接（把库函数接上）。现在你只需要记住：<strong>改完代码要重新编译</strong>，运行的是编译产物，不是源文件。</p>
<div class="doc-tip">💡 初学阶段别急着背这些步骤，但要知道「报错分两种」：<strong>编译错误</strong>（语法不对，程序根本生成不出来）和<strong>运行错误</strong>（能跑但结果不对 / 崩溃）。</div>`
      },
      {
        id: 'scanf',
        title: 'scanf：让用户输入',
        html: `<p><code>scanf</code> 是 <code>printf</code> 的搭档——负责从键盘读入数据。它的格式串和占位符用法跟 <code>printf</code> 一样，但变量前面要加 <code>&amp;</code>（取地址）。</p>
<pre><code>int age;
double score;
char name[32];

printf("请输入年龄：");
scanf("%d", &amp;age);

printf("请输入分数：");
scanf("%lf", &amp;score);   // double 用 %lf

printf("请输入姓名：");
scanf("%s", name);         // 数组名本身就是地址，不用 &amp;</code></pre>
<ul>
  <li><code>&amp;</code> 的作用：<code>scanf</code> 要知道"把值写到内存哪个位置"，所以你得把变量的<strong>地址</strong>给它。</li>
  <li><code>char name[32]</code> 是字符数组，数组名 <code>name</code> 本身就是首地址，不用再加 <code>&amp;</code>。</li>
  <li><code>%lf</code> 对应 <code>double</code>，<code>%f</code> 对应 <code>float</code>——<code>printf</code> 里 <code>double</code> 用 <code>%f</code> 就够了，但 <code>scanf</code> 一定要 <code>%lf</code>。</li>
</ul>
<div class="doc-tip">⚠️ <code>scanf("%s", name)</code> 遇到空格就停。要读带空格的整行，用 <code>fgets(name, sizeof(name), stdin)</code>。</div>`
      },
      {
        id: 'operators',
        title: '运算符速查',
        html: `<p>除了 <code>+ - * /</code>，C 还有几种常用运算符：</p>
<table>
<tr><th>类别</th><th>运算符</th><th>举例</th><th>说明</th></tr>
<tr><td>算术</td><td><code>+ - * / %</code></td><td><code>10 % 3</code></td><td><code>%</code> 取余只能用于整数；整数除法会丢掉小数</td></tr>
<tr><td>自增自减</td><td><code>++ --</code></td><td><code>a++</code></td><td><code>a++</code> 先用后加，<code>++a</code> 先加后用</td></tr>
<tr><td>赋值</td><td><code>= += -= *= /=</code></td><td><code>a += 2</code></td><td><code>a += 2</code> 等价于 <code>a = a + 2</code></td></tr>
<tr><td>比较</td><td><code>== != &gt; &lt; &gt;= &lt;=</code></td><td><code>x &gt; 5</code></td><td>结果是整数：0 假，1 真</td></tr>
<tr><td>逻辑</td><td><code>&amp;&amp; || !</code></td><td><code>a &amp;&amp; b</code></td><td>短路求值，见下一关</td></tr>
<tr><td>逗号</td><td><code>,</code></td><td><code>a=1, b=2</code></td><td>从左往右依次执行，整个表达式的值是最右边那个</td></tr>
</table>
<p>优先级记不住没关系——<strong>不确定就加括号</strong>，代码更清晰。</p>`
      }
    ],
    refs: [CS_REFS.entry, CS_REFS.tools]
  },

  /* ---------------- C 语言入门 · 第 2 关 ---------------- */
  'engineering-计算机科学与技术-m0-l1': {
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
    refs: [CS_REFS.entry, CS_REFS.plan]
  },

  /* ---------------- C 语言入门 · 第 3 关 ---------------- */
  'engineering-计算机科学与技术-m0-l2': {
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
    refs: [CS_REFS.entry, CS_REFS.missing]
  },

  /* ---------------- C 语言入门 · 第 4 关 ---------------- */
  'engineering-计算机科学与技术-m0-l3': {
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
      }
    ],
    refs: [CS_REFS.entry, CS_REFS.algo]
  },

  /* ---------------- C 语言入门 · 第 5 关（新）· 函数 ---------------- */
  'engineering-计算机科学与技术-m0-l4': {
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
    refs: [CS_REFS.entry, CS_REFS.algo]
  },

  /* ---------------- C 语言入门 · 第 6 关（新）· 指针 ---------------- */
  'engineering-计算机科学与技术-m0-l5': {
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
    refs: [CS_REFS.entry, CS_REFS.csapp]
  },

  /* ---------------- C 语言入门 · 第 7 关（新）· 结构体 / 共用体 / 文件读写 ---------------- */
  'engineering-计算机科学与技术-m0-l6': {
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
    refs: [CS_REFS.csapp, CS_REFS.plan]
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
        html: '<p>本关的正文内容由团队按培养方案补充（当前版本优先完成「计算机科学与技术 · C 语言入门」四关的完整文档）。</p>'
      }
    ],
    refs: refs
  };
}

function getDoc(level, ctx) {
  var d = DOCS[level.id];
  return d || makeGenericDoc(level, ctx);
}
