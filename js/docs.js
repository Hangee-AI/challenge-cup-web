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
      }
    ],
    refs: [CS_REFS.entry, CS_REFS.algo]
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
