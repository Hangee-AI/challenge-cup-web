/* ==========================================================
   cpp-courses.js · 「面向对象程序设计（C++）」文字说明
   ----------------------------------------------------------
   依据 C++ 学习文档的 40 个主题重写为 10 章（10 关），
   每章 3 道选择题 + 完整正文（小节 / 代码 / 提示）。
   依赖：cs-courses.js（MAJOR_STAGE_OVERRIDES）、docs.js（DOCS）
   ========================================================== */
(function () {
  var MAJOR = 'engineering-计算机科学与技术';
  var COURSE = '面向对象程序设计（C++）';
  var ov = (typeof MAJOR_STAGE_OVERRIDES !== 'undefined') && MAJOR_STAGE_OVERRIDES[MAJOR];
  if (!ov || typeof DOCS === 'undefined') return;

  /* 本章权威参考（正文底部「延伸资源」） */
  var CPP = {
    runoob: { name: '菜鸟教程 · C++ 教程（本课程主要参考）', url: 'https://www.runoob.com/cplusplus/cpp-tutorial.html' },
    cppref: { name: 'cppreference · C++ 中文参考手册', url: 'https://zh.cppreference.com/w/cpp' },
    gfg: { name: 'GeeksforGeeks · C++ Programming', url: 'https://www.geeksforgeeks.org/c-plus-plus/' },
    cs106l: { name: 'Stanford CS106L：Standard C++ Programming（csdiy）', url: 'https://csdiy.wiki/%E7%BC%96%E7%A8%8B%E5%85%A5%E9%97%A8/cpp/CS106L/' }
  };

  var COURSES = [

    /* ---------------- 第 1 章 ---------------- */
    {
      title: '走进 C++：第一个程序与基础语法',
      brief: 'Hello World、语言简介、环境搭建、基本语法与注释。',
      q: [
        {
          stem: '下列哪一行是标准 C++ 向屏幕输出 Hello 的正确写法？',
          options: ['cout << "Hello" << endl;', 'print("Hello")', 'console.log("Hello")', 'echo "Hello"'],
          answer: 0,
          explain: 'C++ 用标准输出流 cout 配合插入运算符 << 输出，endl 表示换行并刷新缓冲区。'
        },
        {
          stem: '用 g++ 把 hello.cpp 编译成可执行文件 hello，正确的命令是？',
          options: ['g++ hello.cpp -o hello', 'g++ -o hello.cpp hello', 'g++ hello', 'run hello.cpp'],
          answer: 0,
          explain: 'g++ 的基本形式是 g++ 源文件 -o 输出文件；还可以加 -std=c++17 指定标准、-Wall 打开警告。'
        },
        {
          stem: '关于 C++ 注释，下列说法正确的是？',
          options: ['块注释 /* ... */ 不能嵌套使用', '// 注释可以跨多行', '块注释可以任意嵌套', '注释会在运行时输出到屏幕'],
          answer: 0,
          explain: '块注释遇到第一个 */ 就结束，因此不能嵌套；// 只作用于当前行；注释在编译时被忽略。'
        }
      ],
      doc: {
        lead: '这一章从零开始：先把第一个 C++ 程序跑起来，再补齐头文件、命名空间、基本语法规则和注释习惯。学完你应该能独立完成「写代码 → 编译 → 运行」的全过程。',
        sections: [
          {
            id: 'hello',
            title: 'Hello World 入门',
            html: `<p><b>Hello World 是每个 C++ 学习者的第一段程序</b>，它把「头文件 → 命名空间 → 主函数 → 输出」这条最基本的链路串了起来：</p>
<pre><code>#include &lt;iostream&gt;

using namespace std;

int main() {
    cout &lt;&lt; "Hello, World!" &lt;&lt; endl;
    return 0;
}</code></pre>
<ul>
  <li><code>#include &lt;iostream&gt;</code> 引入标准输入输出流库，<code>cout</code> 就来自这里。</li>
  <li><code>using namespace std;</code> 让你直接写 <code>cout</code>，否则要写成 <code>std::cout</code>。</li>
  <li><code>int main()</code> 是程序入口，返回 0 表示正常结束。</li>
  <li><code>cout &lt;&lt; ... &lt;&lt; endl;</code> 把内容送到屏幕，<code>endl</code> 换行并刷新缓冲区。</li>
</ul>
<div class="doc-tip">💡 <code>endl</code> 会立即刷新缓冲区，频繁使用会影响性能；只想要换行时用 <code>"\\n"</code>。大型工程中也建议不要写 <code>using namespace std;</code>，避免命名空间污染。</div>`
          },
          {
            id: 'intro',
            title: 'C++ 简介',
            html: `<p>C++ 由 Bjarne Stroustrup 于 1979 年在贝尔实验室开始设计，在 C 语言基础上加入类、模板、异常、命名空间等机制，是一门<b>静态类型、编译型、大小写敏感</b>的多范式语言。</p>
<ul>
  <li>既支持面向过程，也支持面向对象和泛型编程，可运行于 Windows、macOS、Linux 等平台。</li>
  <li>C++ 基本是 C 的超集，但极端情况下并非所有 C 代码都能直接编译通过。</li>
  <li>标准持续演进：C++11 / 14 / 17 / 20 带来了智能指针、lambda、概念等现代特性。</li>
</ul>
<div class="doc-tip">💡 入门阶段先把概念和写法跑通，不必一上来就纠结标准细节；遇到报错再查 cppreference。</div>`
          },
          {
            id: 'env',
            title: '环境设置',
            html: `<p>C++ 需要「编辑器 + 编译器」两样东西。编译器把源码翻译成可执行文件，常见选择：</p>
<ul>
  <li><b>Windows</b>：安装 MinGW-w64（g++）或 Visual Studio（MSVC）。</li>
  <li><b>macOS</b>：执行 <code>xcode-select --install</code> 安装 Clang。</li>
  <li><b>Linux</b>：执行 <code>sudo apt install build-essential</code>。</li>
</ul>
<pre><code>g++ hello.cpp -std=c++17 -Wall -o hello
./hello          # Windows 下运行 hello.exe</code></pre>
<p>编译过程分为<b>预处理 → 编译 → 汇编 → 链接</b>四步；初学只要记住「写完源码 → g++ 编译 → 运行」。</p>
<div class="doc-tip">💡 提示 <code>g++: command not found</code> 说明编译器没装或没加入 PATH，先解决环境再写代码。</div>`
          },
          {
            id: 'syntax',
            title: '基本语法',
            html: `<p>一个 C++ 程序由若干<b>语句</b>组成，每条语句以分号结尾；程序通常包含头文件、命名空间和函数定义。</p>
<pre><code>#include &lt;iostream&gt;   // 头文件

int main() {           // 主函数
    int age = 18;      // 声明并初始化
    return 0;          // 返回状态码
}</code></pre>
<ul>
  <li><b>标识符</b>：由字母、数字、下划线组成，不能以数字开头，不能使用关键字。</li>
  <li>C++ <b>区分大小写</b>：<code>Manpower</code> 与 <code>manpower</code> 是两个不同的名字。</li>
  <li>头文件 <code>&lt;iostream&gt;</code> 用尖括号表示标准库路径，<code>"my.h"</code> 表示当前目录。</li>
  <li>旧教材的 <code>#include &lt;iostream.h&gt;</code> 是过时写法，标准 C++ 不带 <code>.h</code>。</li>
</ul>`
          },
          {
            id: 'comments',
            title: '注释',
            html: `<p>注释是写给人看的，编译时会被忽略。C++ 有两种注释：</p>
<pre><code>// 单行注释：从 // 到行尾

/*
   多行块注释
   可以写很多行
*/</code></pre>
<ul>
  <li><b>块注释不能嵌套</b>：<code>/* /* ... */ ... */</code> 会在第一个 <code>*/</code> 处提前结束。</li>
  <li>要临时屏蔽一大段含注释的代码，用 <code>#if 0 ... #endif</code> 更可靠。</li>
  <li>注释应解释「为什么这么做」，而不是复述代码本身。</li>
</ul>`
          }
        ],
        refs: [CPP.runoob, CPP.cppref, CPP.gfg]
      }
    }
    ,

    /* ---------------- 第 2 章 ---------------- */
    {
      title: '数据、变量与存储',
      brief: '数据类型、变量类型与作用域、常量、修饰符、存储类。',
      q: [
        {
          stem: '执行 <code>int a = 7, b = 2; cout &lt;&lt; a / b;</code>，输出结果是？',
          options: ['3', '3.5', '4', '编译错误'],
          answer: 0,
          explain: '两个操作数都是整型时执行整数除法，小数部分被直接舍去，所以 7 / 2 得到 3；要得到 3.5 需写成 7.0 / 2。'
        },
        {
          stem: '在函数内定义但未初始化的局部变量，其值是？',
          options: ['0', '未定义（垃圾值）', 'NULL', '一定是 -1'],
          answer: 1,
          explain: '局部自动变量不会自动清零，值是内存中的残留数据；全局变量和静态变量才会被隐式初始化为 0。'
        },
        {
          stem: '关于 <code>const</code> 常量，下列说法正确的是？',
          options: ['定义时必须初始化，之后不能修改', '可以先定义、以后再赋值', '可以被修改一次', '与 #define 完全等价'],
          answer: 0,
          explain: 'const 变量必须在定义时初始化，之后只读；它比 #define 多了类型检查，是 C++ 推荐的常量写法。'
        }
      ],
      doc: {
        lead: '程序的核心是处理数据。这一章把 C++ 的内置类型、变量与作用域、常量、类型修饰符和存储类一次讲清，这是后面所有语法的基础。',
        sections: [
          {
            id: 'types',
            title: '数据类型',
            html: `<p>C++ 的内置类型可以分成几组，标准只规定<b>最小范围</b>，实际字节数取决于编译器和平台：</p>
<ul>
  <li><b>整型</b>：<code>short</code>、<code>int</code>、<code>long</code>、<code>long long</code>，默认都带符号。</li>
  <li><b>浮点型</b>：<code>float</code>（约 7 位有效数字）、<code>double</code>（约 15 位）、<code>long double</code>。</li>
  <li><b>字符型</b>：<code>char</code> 占 1 字节；<b>布尔型</b> <code>bool</code> 只有 <code>true</code> / <code>false</code>。</li>
  <li><b>无值</b>：<code>void</code> 表示「没有类型」，常用于函数返回值。</li>
</ul>
<pre><code>typedef int Feet;      // 给已有类型起别名
Feet distance = 10;    // 等价于 int distance = 10;</code></pre>
<div class="doc-tip">💡 <code>typedef</code> 是类型别名，有作用域和类型检查；<code>#define</code> 只是文本替换。现代 C++ 更推荐 <code>using Feet = int;</code>。</div>`
          },
          {
            id: 'variables',
            title: '变量类型',
            html: `<p>变量是内存中的一块命名存储区。定义变量时最好同时初始化：</p>
<pre><code>int    age    = 18;
double score  = 92.5;
char   grade  = 'A';
bool   passed = true;

extern int total;   // 声明：告诉编译器别处有定义</code></pre>
<ul>
  <li><b>声明 vs 定义</b>：<code>extern</code> 只是声明，不分配内存；链接时必须有一处真正的定义。</li>
  <li>全局变量和静态变量会被隐式初始化为 0，局部自动变量不会。</li>
  <li>整型相除会截断小数：<code>7 / 2 == 3</code>；混合运算时先统一类型再计算。</li>
</ul>
<div class="doc-tip">💡 未初始化的局部变量是常见 bug 来源，建议「定义即初始化」，或使用 <code>int x{};</code> 这种列表初始化。</div>`
          },
          {
            id: 'scope',
            title: '变量作用域',
            html: `<p>作用域决定变量「在哪里可见」。C++ 中常见的有局部、全局、类作用域：</p>
<pre><code>int g = 100;            // 全局变量

void f() {
    int g = 5;          // 局部变量，隐藏同名的全局变量
    cout &lt;&lt; g;          // 输出 5
    cout &lt;&lt; ::g;         // 用 :: 访问全局的 100
}</code></pre>
<ul>
  <li><b>局部变量</b>：函数或代码块内定义，离开作用域即销毁。</li>
  <li><b>全局变量</b>：整个程序生命周期内存在，应尽量少用。</li>
  <li>同名时局部变量会<b>隐藏</b>全局变量，容易造成误读。</li>
  <li>类的静态成员变量需要在类外单独定义和初始化。</li>
</ul>`
          },
          {
            id: 'constants',
            title: '常量',
            html: `<p>常量在程序运行期间不能被修改。C++ 有两条常见路线：</p>
<pre><code>const int MAX = 100;          // const 常量，带类型检查
#define PI 3.14159            // 预处理宏，纯文本替换
constexpr int SIZE = 16;      // 编译期常量，可用于数组长度</code></pre>
<ul>
  <li><code>const</code> 变量定义时必须初始化。</li>
  <li><code>#define</code> 末尾不要加分号，否则分号会被一起替换。</li>
  <li><code>#define N 2+3</code> 时 <code>N/2</code> 实际是 <code>2+3/2</code>，容易出错。</li>
  <li>常量名习惯用全大写，如 <code>MAX_SIZE</code>。</li>
</ul>
<div class="doc-tip">💡 新代码优先用 <code>const</code> / <code>constexpr</code>，宏只保留给条件编译和头文件保护。</div>`
          },
          {
            id: 'modifiers',
            title: '修饰符类型',
            html: `<p>修饰符用来改变基本类型的含义：</p>
<ul>
  <li><code>signed</code> / <code>unsigned</code>：是否有符号位。</li>
  <li><code>short</code> / <code>long</code>：改变整数或浮点的宽度。</li>
  <li><code>volatile</code>：告诉编译器该变量可能被外部改变，禁止过度优化。</li>
  <li><code>mutable</code>：允许在 const 成员函数中修改该成员。</li>
</ul>
<pre><code>unsigned int count = 0;
long long total = 10000000000LL;
volatile int flag = 0;   // 硬件寄存器 / 中断场景</code></pre>
<div class="doc-tip">💡 <code>int i = -5; unsigned int u = 1;</code> 比较时 <code>i &gt; u</code> 可能为真，因为有符号数被隐式转成了无符号大数。混用要格外小心。</div>`
          },
          {
            id: 'storage',
            title: '存储类',
            html: `<p>存储类决定变量的<b>生命周期、链接性和存储位置</b>：</p>
<ul>
  <li><code>auto</code>：C++11 起表示类型自动推导，不再是旧的「自动变量」。</li>
  <li><code>static</code>：局部静态变量只初始化一次；全局静态变量只在本文件可见。</li>
  <li><code>extern</code>：声明外部变量或函数。</li>
  <li><code>mutable</code>：只用于类的成员，允许 const 成员函数修改。</li>
  <li><code>thread_local</code>：每个线程各有一份副本。</li>
</ul>
<pre><code>void counter() {
    static int n = 0;   // 只初始化一次，跨调用保留
    ++n;
    cout &lt;&lt; n;
}</code></pre>
<div class="doc-tip">💡 <code>register</code> 在 C++17 已被移除，编译器会自动决定变量放在寄存器还是内存。</div>`
          }
        ],
        refs: [CPP.runoob, CPP.cppref, CPP.cs106l]
      }
    },

    /* ---------------- 第 3 章 ---------------- */
    {
      title: '运算符与流程控制',
      brief: '算术与逻辑运算符、if / switch 判断、for / while / do-while 循环。',
      q: [
        {
          stem: '前置 <code>++d</code> 与后置 <code>d++</code> 的区别是？',
          options: ['前置先自增再取值，后置先取值再自增', '两者完全一样', '后置先自增再取值', '前置不会改变 d 的值'],
          answer: 0,
          explain: '++d 先把 d 加 1 再参与表达式；d++ 先使用 d 的原值，表达式结束后再自增。'
        },
        {
          stem: '在 switch 语句中，某个 case 末尾漏写 <code>break</code> 会怎样？',
          options: ['继续执行下一个 case（贯穿）', '直接跳出 switch', '编译错误', '只执行 default'],
          answer: 0,
          explain: 'switch 的 case 只是跳转标签，没有 break 时会继续往下执行，称为 fall through；有时可故意利用，但多数情况是 bug。'
        },
        {
          stem: '<code>do { ... } while (false);</code> 中的循环体至少执行几次？',
          options: ['1 次', '0 次', '2 次', '由编译器决定'],
          answer: 0,
          explain: 'do-while 先执行循环体再判断条件，因此至少执行一次；while 和 for 则是先判断后执行。'
        }
      ],
      doc: {
        lead: '有了数据，接下来要让程序「算起来」和「做选择、重复做事」。这一章覆盖 C++ 的运算符、判断语句和三种循环。',
        sections: [
          {
            id: 'operators',
            title: '运算符',
            html: `<p>C++ 运算符可分为算术、关系、逻辑、位运算、赋值几类：</p>
<pre><code>int a = 10, b = 3;
cout &lt;&lt; a + b &lt;&lt; endl;   // 13
cout &lt;&lt; a % b &lt;&lt; endl;   // 1（取余）
cout &lt;&lt; (a &gt; b) &lt;&lt; endl;  // 1（true）
cout &lt;&lt; (a &amp; b) &lt;&lt; endl;  // 2（按位与）
a += 5;                   // 等价于 a = a + 5</code></pre>
<ul>
  <li><b>整数除法陷阱</b>：<code>7 / 2</code> 得到 3，要小数需写 <code>7.0 / 2</code>。</li>
  <li><code>++d</code> 先自增再取值，<code>d++</code> 先取值再自增。</li>
  <li>有符号数与无符号数比较会发生隐式转换，结果可能反直觉。</li>
  <li>对 2 的幂取模可用位运算代替：<code>a % 8</code> 等价于 <code>a &amp; 7</code>。</li>
</ul>
<div class="doc-tip">💡 不确定优先级时加括号。括号不会降低性能，却能避免大量隐蔽错误。</div>`
          },
          {
            id: 'decision',
            title: '判断',
            html: `<p>C++ 提供 <code>if / else</code>、<code>switch</code> 和三目运算符三种判断写法：</p>
<pre><code>if (score &gt;= 90) {
    cout &lt;&lt; "优秀";
} else if (score &gt;= 60) {
    cout &lt;&lt; "及格";
} else {
    cout &lt;&lt; "不及格";
}

switch (level) {
    case 1: cout &lt;&lt; "初级"; break;
    case 2: cout &lt;&lt; "中级"; break;
    default: cout &lt;&lt; "未知";
}</code></pre>
<ul>
  <li><b>条件必须是可转换为 bool 的表达式</b>，不能写成 <code>if (score &gt;= 90, 60)</code> 这种逗号表达式。</li>
  <li><code>switch</code> 的表达式只能是整型或枚举，不能是浮点或字符串。</li>
  <li>每个 <code>case</code> 通常要配 <code>break</code>，否则会贯穿到下一个分支。</li>
  <li><code>default</code> 可选，用于兜底。</li>
</ul>
<div class="doc-tip">💡 三目运算符 <code>x &gt; 0 ? "正" : "负"</code> 适合简单二选一；分支多了还是 if / switch 更清晰。</div>`
          },
          {
            id: 'loops',
            title: '循环',
            html: `<p>需要重复执行时用循环，C++ 有三种基本形式：</p>
<pre><code>for (int i = 0; i &lt; 5; ++i) {
    cout &lt;&lt; i &lt;&lt; ' ';
}

int n = 0;
while (n &lt; 3) { ++n; }

do {
    cout &lt;&lt; "至少执行一次";
} while (false);</code></pre>
<ul>
  <li><code>for</code> 和 <code>while</code> 先判断后执行，条件不成立时一次都不执行。</li>
  <li><code>do-while</code> 先执行后判断，循环体至少执行一次，末尾别忘了分号。</li>
  <li><code>break</code> 只跳出最内层循环；<code>continue</code> 只跳过本次迭代。</li>
  <li>C++11 的范围 for：<code>for (int x : arr)</code> 可直接遍历数组或容器。</li>
</ul>
<div class="doc-tip">💡 写循环时先确认「终止条件一定会成立」，避免死循环；遍历容器优先用范围 for。</div>`
          }
        ],
        refs: [CPP.runoob, CPP.cppref, CPP.gfg]
      }
    }
    ,

    /* ---------------- 第 4 章 ---------------- */
    {
      title: '函数与常用数值处理',
      brief: '函数定义、调用与参数传递，数学库、随机数与格式化输出。',
      q: [
        {
          stem: '函数设置默认参数时，必须从参数列表的哪一侧开始？',
          options: ['右侧', '左侧', '任意位置', '只能有一个默认参数'],
          answer: 0,
          explain: '默认参数必须从右往左连续设置，不能跳过中间参数给左边参数设默认值，否则调用时无法确定实参对应关系。'
        },
        {
          stem: '调用 <code>rand()</code> 前不调用 <code>srand()</code>，会出现什么现象？',
          options: ['每次运行都得到相同的随机序列', '程序编译失败', 'rand() 永远返回 0', '每次运行结果完全随机'],
          answer: 0,
          explain: 'rand() 使用固定的默认种子，不播种时每次启动都会产生同一串「随机数」；可用 srand(time(0)) 设置种子。'
        },
        {
          stem: '<code>sin(30)</code> 的结果并不等于 0.5，原因是？',
          options: ['三角函数参数使用弧度而不是角度', 'sin 只能计算 0 到 1', '必须先乘以 π', '需要包含 &lt;cstdlib&gt;'],
          answer: 0,
          explain: 'C++ 数学库的 sin/cos/tan 接收弧度值，30 度要先换算成 30 * π / 180 弧度。'
        }
      ],
      doc: {
        lead: '函数把一段逻辑封装成可复用的单元；数值处理则决定了程序算得对不对、输出得好不好看。这一章覆盖函数语法和常用的数学、随机数工具。',
        sections: [
          {
            id: 'functions',
            title: '函数',
            html: `<p>函数由<b>返回类型、函数名、参数列表、函数体</b>组成。使用前必须先声明或定义：</p>
<pre><code>int add(int a, int b);          // 声明（原型）

int add(int a, int b) {         // 定义
    return a + b;
}

int main() {
    cout &lt;&lt; add(2, 3);          // 调用
}</code></pre>
<ul>
  <li><b>传值调用</b>：形参是实参的副本，函数内修改形参不影响实参。</li>
  <li><b>默认参数</b>必须从参数列表右侧开始设置，如 <code>int f(int a, int b = 2)</code>。</li>
  <li>声明时参数名可以省略，定义时必须有参数名。</li>
  <li>同名函数只要参数列表不同就能共存，这叫<b>函数重载</b>（详见第 8 章）。</li>
</ul>
<div class="doc-tip">💡 想修改实参或避免大对象拷贝时，用引用参数 <code>int&amp; x</code> 或 <code>const string&amp; s</code>。</div>`
          },
          {
            id: 'numbers',
            title: '数字',
            html: `<p>C++ 通过 <code>&lt;cmath&gt;</code> 提供常用数学函数，通过 <code>&lt;iomanip&gt;</code> 控制输出精度：</p>
<pre><code>#include &lt;cmath&gt;
#include &lt;iomanip&gt;

cout &lt;&lt; sqrt(16) &lt;&lt; endl;        // 4
cout &lt;&lt; pow(2, 10) &lt;&lt; endl;      // 1024
cout &lt;&lt; abs(-7) &lt;&lt; endl;         // 7
cout &lt;&lt; fixed &lt;&lt; setprecision(2) &lt;&lt; 3.14159;  // 3.14

srand(time(0));                  // 设置随机种子
int dice = rand() % 6 + 1;       // 1~6</code></pre>
<ul>
  <li><b>浮点输出有精度取舍</b>，<code>30949.374</code> 可能显示为 <code>30949.4</code>。</li>
  <li><code>sin / cos / tan</code> 的参数是<b>弧度</b>，角度需先换算。</li>
  <li><code>rand()</code> 不播种时序列固定，<code>srand(time(0))</code> 才能得到近似随机。</li>
  <li>C++20 起可用 <code>&lt;numbers&gt;</code> 中的 <code>std::numbers::pi</code>。</li>
</ul>
<div class="doc-tip">💡 需要更高质量的随机数时，使用 <code>&lt;random&gt;</code> 中的 <code>mt19937</code> 引擎，而不是老式 rand()。</div>`
          }
        ],
        refs: [CPP.runoob, CPP.cppref, CPP.gfg]
      }
    },

    /* ---------------- 第 5 章 ---------------- */
    {
      title: '数组、字符串、指针与引用',
      brief: '一维/二维数组、C 风格字符串与 std::string、指针运算、引用传参。',
      q: [
        {
          stem: '定义 <code>int a[5];</code> 后，合法的下标范围是？',
          options: ['0 ~ 4', '1 ~ 5', '0 ~ 5', '1 ~ 4'],
          answer: 0,
          explain: 'C++ 数组下标从 0 开始，长度为 5 的数组下标是 0、1、2、3、4；访问 a[5] 属于越界，编译器不会自动检查。'
        },
        {
          stem: '<code>char s[] = "hello";</code> 中 <code>sizeof(s)</code> 的值是？',
          options: ['6', '5', '4', '不确定'],
          answer: 0,
          explain: '用字符串字面量初始化字符数组时会自动在末尾补 \\0，所以 5 个字符 + 1 个结束符共占 6 字节。'
        },
        {
          stem: '函数返回局部变量的引用，会发生什么问题？',
          options: ['悬垂引用，访问时是未定义行为', '没有任何问题', '自动延长局部变量生命周期', '编译一定失败'],
          answer: 0,
          explain: '局部变量在函数返回后即销毁，返回的引用指向已失效的内存，称为悬垂引用；应返回值或返回生命周期更长的对象。'
        }
      ],
      doc: {
        lead: '数组、字符串、指针和引用是 C++ 与内存打交道的四个入口。理解它们，才能看懂函数参数、容器实现和后续的类与对象。',
        sections: [
          {
            id: 'arrays',
            title: '数组',
            html: `<p>数组是一组<b>同类型</b>元素的连续存储，长度在声明时确定：</p>
<pre><code>int nums[5] = {1, 2, 3, 4, 5};
int grid[2][3] = {{1, 2, 3}, {4, 5, 6}};

for (int i = 0; i &lt; 5; ++i) {
    cout &lt;&lt; nums[i] &lt;&lt; ' ';
}</code></pre>
<ul>
  <li>下标从 <b>0 到 size-1</b>，越界访问不会报错，可能读到或写坏其他内存。</li>
  <li>数组长度固定，不能动态扩展；长度不定时用 <code>vector</code>。</li>
  <li>数组名在多数表达式中会隐式转换为指向首元素的指针。</li>
  <li>不能用一个数组直接给另一个数组整体赋值。</li>
</ul>
<div class="doc-tip">💡 现代 C++ 优先用 <code>std::array</code>（定长）或 <code>std::vector</code>（可变长），它们能报告大小并做边界检查。</div>`
          },
          {
            id: 'strings',
            title: '字符串',
            html: `<p>C++ 有两套字符串：C 风格字符数组和 <code>std::string</code>。</p>
<pre><code>#include &lt;string&gt;

char name[] = "Tom";              // C 风格，末尾自带 \\0
string s = "hello";
s += " world";                    // 拼接
cout &lt;&lt; s.size();                 // 11

string line;
getline(cin, line);               // 读入整行（含空格）</code></pre>
<ul>
  <li>C 风格字符串必须以 <code>\\0</code> 结尾，<code>{'h','e','l','l','o'}</code> 不是合法字符串。</li>
  <li><code>cin &gt;&gt;</code> 遇到空格就停止；读整行用 <code>getline()</code> 或 <code>cin.getline()</code>。</li>
  <li><code>strcpy / strcat</code> 不检查目标缓冲区大小，容易溢出。</li>
  <li>日常开发优先使用 <code>std::string</code>，自动管理内存和长度。</li>
</ul>
<div class="doc-tip">💡 <code>char a[] = "hello"</code> 的内容可修改；<code>char* p = "hello"</code> 指向只读字面量，修改是未定义行为。</div>`
          },
          {
            id: 'pointers',
            title: '指针',
            html: `<p>指针保存的是<b>变量的地址</b>，用 <code>&amp;</code> 取地址、<code>*</code> 解引用：</p>
<pre><code>int value = 42;
int* p = &amp;value;      // p 指向 value
cout &lt;&lt; *p;           // 42
*p = 100;             // 通过指针修改 value

int* q = nullptr;      // 空指针</code></pre>
<ul>
  <li>指针类型决定「一次解引用读多少字节」，<code>int*</code> 与 <code>char*</code> 不同。</li>
  <li><b>野指针</b>：未初始化或已 delete 的指针不要解引用，使用前判断是否为 <code>nullptr</code>。</li>
  <li>指针可以参与运算：<code>p + 1</code> 指向下一个同类型元素。</li>
  <li>区分 <code>int* ip[4]</code>（指针数组）与 <code>int (*ip)[4]</code>（数组指针）。</li>
</ul>
<div class="doc-tip">💡 不确定指针是否有效时，宁可传引用；现代 C++ 用 <code>std::unique_ptr</code> / <code>shared_ptr</code> 管理堆内存。</div>`
          },
          {
            id: 'references',
            title: '引用',
            html: `<p>引用是已存在变量的<b>别名</b>，必须在定义时绑定，之后不能改绑：</p>
<pre><code>int a = 10;
int&amp; ref = a;       // ref 是 a 的别名
ref = 20;            // 等价于 a = 20

void swap(int&amp; x, int&amp; y) {   // 引用传参，可修改实参
    int t = x; x = y; y = t;
}</code></pre>
<ul>
  <li>引用必须初始化，没有「空引用」。</li>
  <li><code>ref = b;</code> 不是改绑，而是把 b 的值赋给 ref 绑定的对象。</li>
  <li>不要返回局部变量的引用，否则会产生<b>悬垂引用</b>。</li>
  <li><code>const int&amp;</code> 可绑定临时值，是只读大对象传参的常用写法。</li>
</ul>
<div class="doc-tip">💡 函数参数选择：小类型传值，大对象传 <code>const&amp;</code>，需要修改实参传 <code>&amp;</code>，需要表达「可能为空」才用指针。</div>`
          }
        ],
        refs: [CPP.runoob, CPP.cppref, CPP.cs106l]
      }
    }
    ,

    /* ---------------- 第 6 章 ---------------- */
    {
      title: '日期时间、输入输出、数据结构与结构体',
      brief: '时间库与 tm 结构、标准输入输出流、常用 STL 容器、结构体用法。',
      q: [
        {
          stem: '用 <code>tm</code> 结构输出真实年份时，年份应写成？',
          options: ['1900 + tm_year', 'tm_year', '2000 + tm_year', 'tm_year - 1900'],
          answer: 0,
          explain: 'tm_year 保存的是「自 1900 年起的年数」，所以真实年份 = 1900 + tm_year；月份同理要 1 + tm_mon。'
        },
        {
          stem: '<code>cin &gt;&gt; s;</code> 读取字符串时遇到空格会怎样？',
          options: ['停止读取，只得到空格前的部分', '把空格也读进字符串', '跳过空格继续读完整个句子', '直接抛出异常'],
          answer: 0,
          explain: 'cin >> 默认以空白符（空格、Tab、回车）作为分隔，读整行需要 getline(cin, line)。'
        },
        {
          stem: '已知 <code>Employee* p</code> 指向一个结构体，访问其成员 <code>name</code> 应写成？',
          options: ['p-&gt;name', 'p.name', '*p.name', 'p::name'],
          answer: 0,
          explain: '结构体指针用 -> 访问成员；p->name 等价于 (*p).name。'
        }
      ],
      doc: {
        lead: '这一章补齐三块实用基础：怎样处理日期时间、怎样做标准输入输出、怎样用结构体和标准容器组织一组数据。',
        sections: [
          {
            id: 'datetime',
            title: '日期 & 时间',
            html: `<p>C++ 通过 <code>&lt;ctime&gt;</code> 使用 C 风格时间函数：</p>
<pre><code>#include &lt;ctime&gt;

time_t now = time(nullptr);          // 当前时间戳
tm* ltm = localtime(&amp;now);           // 转成本地时间结构

cout &lt;&lt; 1900 + ltm-&gt;tm_year &lt;&lt; "-"
     &lt;&lt; 1 + ltm-&gt;tm_mon  &lt;&lt; "-"
     &lt;&lt; ltm-&gt;tm_mday &lt;&lt; endl;
cout &lt;&lt; ltm-&gt;tm_hour &lt;&lt; ":" &lt;&lt; ltm-&gt;tm_min;</code></pre>
<ul>
  <li><code>tm_year</code> 是从 1900 年起的年数，显示年份要 <b>+1900</b>。</li>
  <li><code>tm_mon</code> 范围是 <b>0~11</b>，显示月份要 <b>+1</b>。</li>
  <li>结构体指针访问成员用 <code>-&gt;</code>。</li>
  <li><code>localtime</code> 返回静态内部缓冲区，多次调用会互相覆盖，需要保留就自己拷贝。</li>
</ul>
<div class="doc-tip">💡 新项目可用 C++20 的 <code>&lt;chrono&gt;</code> 日历组件，类型更安全；考试和旧代码仍常见 ctime 写法。</div>`
          },
          {
            id: 'io',
            title: '基本输入输出',
            html: `<p>C++ 用流对象完成 I/O：<code>cin</code> 输入、<code>cout</code> 普通输出、<code>cerr</code> 错误、<code>clog</code> 日志。</p>
<pre><code>int age;
string name;

cout &lt;&lt; "请输入姓名和年龄：";
cin &gt;&gt; name &gt;&gt; age;

cout &lt;&lt; "你好，" &lt;&lt; name &lt;&lt; "，明年 " &lt;&lt; age + 1 &lt;&lt; " 岁" &lt;&lt; endl;
cerr &lt;&lt; "这行是错误信息" &lt;&lt; endl;</code></pre>
<ul>
  <li><code>endl</code> 换行<b>并刷新缓冲区</b>；<code>"\\n"</code> 只换行，效率更高。</li>
  <li><code>cin &gt;&gt;</code> 以空白分隔，读整行用 <code>getline(cin, line)</code>。</li>
  <li>错误信息用 <code>cerr</code>，日志用 <code>clog</code>，普通输出用 <code>cout</code>。</li>
  <li>对性能要求极高时可改用 <code>printf</code>，但 <code>printf</code> 不能使用 <code>endl</code>。</li>
</ul>
<div class="doc-tip">💡 输入前最好检查流状态：<code>if (!(cin &gt;&gt; age)) { ... }</code>，否则用户输入字母会让后续读取全部失败。</div>`
          },
          {
            id: 'containers',
            title: '数据结构',
            html: `<p>标准库（STL）提供了现成的容器，不必自己从零实现链表和哈希表：</p>
<pre><code>#include &lt;vector&gt;
#include &lt;map&gt;
#include &lt;unordered_map&gt;

vector&lt;int&gt; v = {3, 1, 4};
v.push_back(2);                   // 追加
map&lt;string, int&gt; ordered;         // 有序，按 key 排序
unordered_map&lt;string, int&gt; fast;  // 无序，查找更快

fast["Tom"] = 90;</code></pre>
<ul>
  <li><code>vector</code>：可变长数组，随机访问快，最常用。</li>
  <li><code>list</code>：双向链表，插入删除快，随机访问慢。</li>
  <li><code>map</code> 有序但较慢，<code>unordered_map</code> 查找快但无序。</li>
  <li><code>stack</code> / <code>queue</code>：后进先出 / 先进先出。</li>
</ul>
<div class="doc-tip">💡 选容器前先问自己：主要操作是随机访问、频繁插入删除，还是按键查找？需求决定选择。</div>`
          },
          {
            id: 'structs',
            title: '结构体',
            html: `<p>结构体把多个不同类型的数据打包成一个新类型：</p>
<pre><code>struct Employee {
    string name;
    int    age;
    double salary;
};

Employee e = {"Tom", 28, 12000.0};
cout &lt;&lt; e.name &lt;&lt; endl;

Employee* p = &amp;e;
cout &lt;&lt; p-&gt;salary &lt;&lt; endl;    // 指针用 -&gt;</code></pre>
<ul>
  <li>结构体实体用 <code>.</code>，结构体指针用 <code>-&gt;</code>。</li>
  <li><code>struct</code> 默认成员 <b>public</b>，<code>class</code> 默认 <b>private</b>，这是二者唯一本质区别。</li>
  <li>C++ 中 struct 已是独立类型，定义变量可省略 <code>struct</code> 关键字。</li>
  <li>结构体可以嵌套、可以包含成员函数，也可以配合数组表示表格数据。</li>
</ul>
<div class="doc-tip">💡 只是聚合数据时用 struct；需要封装不变式、控制访问时用 class。</div>`
          }
        ],
        refs: [CPP.runoob, CPP.cppref, CPP.gfg]
      }
    },

    /* ---------------- 第 7 章 ---------------- */
    {
      title: '类与对象：封装、抽象与接口',
      brief: '类与对象、构造析构、数据封装、数据抽象、纯虚函数与抽象类。',
      q: [
        {
          stem: '定义一个 <code>class</code> 时，成员前不写任何访问修饰符，默认访问权限是？',
          options: ['private', 'public', 'protected', '由编译器随机决定'],
          answer: 0,
          explain: 'class 的默认访问权限是 private；struct 的默认访问权限是 public。'
        },
        {
          stem: '类定义末尾漏写分号 <code>;</code>，会怎样？',
          options: ['编译错误', '自动补上分号', '只影响注释', '运行时崩溃'],
          answer: 0,
          explain: '类定义本质上是一条声明语句，末尾必须有分号，漏写是最常见的编译错误之一。'
        },
        {
          stem: '含有纯虚函数的抽象类，能否直接定义对象？',
          options: ['不能，只能通过指针或引用使用派生类对象', '可以，和普通类一样', '可以，但必须先赋值', '只能定义一次'],
          answer: 0,
          explain: '抽象类不能实例化；但可以定义 Shape* / Shape& 指向派生类对象，从而通过统一接口调用多态方法。'
        }
      ],
      doc: {
        lead: '从这一章开始进入面向对象。类把数据和操作数据的方法绑定在一起，封装控制访问，抽象定义接口，抽象类则强制派生类遵守契约。',
        sections: [
          {
            id: 'class',
            title: '类 & 对象',
            html: `<p>类是对象的模板，对象是类的实例：</p>
<pre><code>class Box {
public:
    Box(double l, double w, double h) {   // 构造函数
        length = l; width = w; height = h;
    }
    ~Box() { /* 析构函数：释放资源 */ }

    double volume() { return length * width * height; }

private:
    double length, width, height;
};

Box b(3, 4, 5);
cout &lt;&lt; b.volume();     // 60</code></pre>
<ul>
  <li>类定义末尾的<b>分号不能漏</b>。</li>
  <li>成员默认 private，不写 <code>public:</code> 外部无法访问。</li>
  <li>构造函数在创建对象时自动调用；析构函数在对象销毁时自动调用。</li>
  <li>拷贝构造函数若只做指针浅拷贝，两个对象会共享堆内存，析构时重复释放；需要时实现<b>深拷贝</b>。</li>
</ul>
<div class="doc-tip">💡 成员函数定义在类内默认是 inline；只声明、类外定义时用 <code>返回类型 类名::函数名</code>。</div>`
          },
          {
            id: 'encapsulation',
            title: '数据封装',
            html: `<p>封装 = 把数据和操作绑定在一起，并<b>控制外部访问</b>：</p>
<pre><code>class Account {
public:
    Account(double init) : balance(init) {}

    double getBalance() const { return balance; }

    bool withdraw(double amount) {
        if (amount &lt;= 0 || amount &gt; balance) return false;
        balance -= amount;
        return true;
    }

private:
    double balance;      // 外部不能直接改
};</code></pre>
<ul>
  <li>数据成员尽量设为 private，通过 getter / setter 访问。</li>
  <li>在 setter 中做参数校验，是封装最直接的价值。</li>
  <li>把数据设为 public，任何改动都要牵动所有使用它的代码。</li>
  <li>友元会暴露实现细节、降低封装性，应谨慎使用。</li>
</ul>
<div class="doc-tip">💡 封装不是「写一堆 get/set」；关键是让对象自己维护内部状态的一致性。</div>`
          },
          {
            id: 'abstraction',
            title: '数据抽象',
            html: `<p>抽象关注「对外暴露什么」，隐藏「内部怎么实现」：</p>
<pre><code>class Adder {
public:
    Adder(int i = 0) : total(i) {}
    void addNum(int n) { total += n; }
    int getTotal() const { return total; }

private:
    int total;           // 内部表示对外不可见
};</code></pre>
<ul>
  <li>公有成员定义抽象视图，私有成员隐藏实现细节。</li>
  <li>使用者只依赖接口，不必知道内部用数组还是链表。</li>
  <li>内部实现变化时，只要接口不变，调用方无需修改。</li>
  <li><b>抽象 vs 封装</b>：抽象侧重「露什么接口」，封装侧重「绑数据 + 控访问」。</li>
</ul>
<div class="doc-tip">💡 设计类时先想清楚「别人需要用它做什么」，再决定哪些成员公开。</div>`
          },
          {
            id: 'interface',
            title: '接口 / 抽象类',
            html: `<p>含<b>纯虚函数</b>的类是抽象类，它定义接口而不给出完整实现：</p>
<pre><code>class Shape {
public:
    virtual double area() const = 0;   // 纯虚函数
    virtual ~Shape() {}
};

class Circle : public Shape {
public:
    Circle(double r) : radius(r) {}
    double area() const override { return 3.14159 * radius * radius; }
private:
    double radius;
};

Shape* s = new Circle(2);
cout &lt;&lt; s-&gt;area();
delete s;</code></pre>
<ul>
  <li>抽象类<b>不能直接实例化</b>，但可以定义指针或引用。</li>
  <li>派生类只要漏实现一个纯虚函数，它自己仍是抽象类。</li>
  <li>抽象类同样可以有普通成员函数和受保护的数据成员。</li>
  <li>接口的意义：新增类型时不必改动已有调用代码。</li>
</ul>
<div class="doc-tip">💡 抽象基类的析构函数应为 virtual，否则通过基类指针 delete 派生类对象是未定义行为。</div>`
          }
        ],
        refs: [CPP.runoob, CPP.cppref, CPP.cs106l]
      }
    }
    ,

    /* ---------------- 第 8 章 ---------------- */
    {
      title: '继承、多态与运算符重载',
      brief: '公有继承、虚函数与重写、虚析构、函数重载与运算符重载。',
      q: [
        {
          stem: '想要通过基类指针调用派生类的重写函数，必须满足什么条件？',
          options: ['基类函数声明为 virtual，并通过指针或引用调用', '派生类函数加 static', '基类函数声明为 private', '直接按值传递对象'],
          answer: 0,
          explain: '运行时多态依赖 virtual 函数表；按值传递还会发生对象切片，只有通过基类指针或引用才能看到派生类版本。'
        },
        {
          stem: '作为多态基类的析构函数，应该怎么声明？',
          options: ['声明为 virtual', '声明为 static', '声明为 private', '不需要声明'],
          answer: 0,
          explain: '通过基类指针 delete 派生类对象时，若析构函数不是虚函数，派生类析构不会被调用，属于未定义行为。'
        },
        {
          stem: '<code>class Dog : Animal</code> 不写访问修饰符时，默认继承方式是？',
          options: ['private', 'public', 'protected', '由成员决定'],
          answer: 0,
          explain: 'class 的默认继承方式是 private，struct 才是 public；实际工程中务必显式写 : public。'
        }
      ],
      doc: {
        lead: '继承让代码复用，多态让同一接口适配不同实现，运算符重载让自定义类型像内置类型一样自然。三者共同构成 C++ 面向对象的核心表达力。',
        sections: [
          {
            id: 'inheritance',
            title: '继承',
            html: `<p>继承表达「is-a」关系，派生类获得基类的成员：</p>
<pre><code>class Animal {
public:
    void eat() { cout &lt;&lt; "eating"; }
protected:
    string name;
};

class Dog : public Animal {
public:
    void bark() { cout &lt;&lt; "woof"; }
};</code></pre>
<ul>
  <li>派生类<b>不继承</b>基类的构造函数、析构函数、拷贝构造函数和友元。</li>
  <li>基类 private 成员派生类不能直接访问。</li>
  <li>构造顺序：基类 → 成员对象 → 派生类；析构顺序相反。</li>
  <li>多继承同名成员会产生二义性，需用 <code>类名::成员</code> 限定；菱形继承用 <code>virtual</code> 虚继承。</li>
</ul>
<div class="doc-tip">💡 优先用组合（has-a）而不是继承（is-a）；继承层次过深会让代码难以维护。</div>`
          },
          {
            id: 'polymorphism',
            title: '多态',
            html: `<p>多态让基类指针在运行时调用实际类型的方法：</p>
<pre><code>class Shape {
public:
    virtual double area() const = 0;
    virtual ~Shape() {}
};

class Square : public Shape {
public:
    Square(double s) : side(s) {}
    double area() const override { return side * side; }
private:
    double side;
};

Shape* p = new Square(3);
cout &lt;&lt; p-&gt;area();   // 9，调用派生类版本
delete p;            // 虚析构，正确释放</code></pre>
<ul>
  <li>没有 <code>virtual</code> 就是静态绑定，基类指针只会调用基类版本。</li>
  <li>派生类重写时加 <code>override</code>，让编译器检查签名。</li>
  <li><b>多态基类的析构函数必须是虚函数</b>。</li>
  <li>把派生类对象按值赋给基类对象会发生<b>对象切片</b>，多态失效。</li>
</ul>
<div class="doc-tip">💡 多态用「基类指针 / 引用 + 虚函数」实现，不要试图靠按值传递或强制转换达到同样效果。</div>`
          },
          {
            id: 'overloading',
            title: '重载运算符和重载函数',
            html: `<p>函数重载：同一作用域内函数名相同、参数列表不同。运算符重载：让自定义类型支持 <code>+</code>、<code>&lt;&lt;</code> 等运算。</p>
<pre><code>int add(int a, int b);
double add(double a, double b);   // 参数类型不同，构成重载

class Point {
public:
    Point(int x, int y) : x(x), y(y) {}
    Point operator+(const Point&amp; o) const {
        return Point(x + o.x, y + o.y);
    }
private:
    int x, y;
};</code></pre>
<ul>
  <li>仅返回类型不同<b>不能</b>构成重载，必须改参数列表。</li>
  <li><code>.</code>、<code>::</code>、<code>sizeof</code>、<code>?:</code>、<code>#</code> 不能被重载。</li>
  <li>重载不改变运算符的优先级、结合性和操作数个数。</li>
  <li>重载应保持运算符原本的语义直觉，避免滥用。</li>
</ul>
<div class="doc-tip">💡 输出自定义类型时常重载 <code>operator&lt;&lt;</code>，写成全局友元函数 <code>ostream&amp; operator&lt;&lt;(ostream&amp;, const T&amp;)</code>。</div>`
          }
        ],
        refs: [CPP.runoob, CPP.cppref, CPP.cs106l]
      }
    },

    /* ---------------- 第 9 章 ---------------- */
    {
      title: '文件流、异常、动态内存与命名空间',
      brief: '文件读写、try / catch 异常处理、new / delete 与智能指针、命名空间。',
      q: [
        {
          stem: '用 <code>ofstream</code> 打开已存在的文件，默认方式会怎样？',
          options: ['清空原文件内容', '保留内容并追加', '打开失败', '只读打开'],
          answer: 0,
          explain: 'ofstream 默认使用 trunc 模式，会清空原文件；要追加需显式加 ios::app。'
        },
        {
          stem: '<code>new[]</code> 申请的数组内存，应该用什么释放？',
          options: ['delete[]', 'delete', 'free()', '不需要释放'],
          answer: 0,
          explain: 'new[] 必须配 delete[]；用 delete 释放对象数组通常只析构首元素，造成资源泄漏。'
        },
        {
          stem: '多个 catch 分支中，<code>catch (...)</code> 应该放在哪里？',
          options: ['最后', '最前', '任意位置', '不能使用'],
          answer: 0,
          explain: 'catch(...) 能捕获任意类型，放在前面会截住后面更具体的 catch，所以必须放最后。'
        }
      ],
      doc: {
        lead: '程序运行中会遇到文件、异常和动态资源。这一章讲清文件流、异常处理、堆内存管理和命名空间，帮助你写出能安全处理失败的代码。',
        sections: [
          {
            id: 'files',
            title: '文件和流',
            html: `<p>文件流把磁盘文件当成输入输出流：<code>ifstream</code> 读、<code>ofstream</code> 写、<code>fstream</code> 读写。</p>
<pre><code>#include &lt;fstream&gt;

ofstream out("data.txt");            // 默认清空
if (!out.is_open()) return 1;        // 必须检查
out &lt;&lt; "Tom 90" &lt;&lt; endl;
out.close();

ofstream app("data.txt", ios::app);  // 追加
ifstream in("data.txt");
string line;
while (getline(in, line)) {
    cout &lt;&lt; line &lt;&lt; endl;
}</code></pre>
<ul>
  <li>打开后<b>必须检查</b> <code>is_open()</code> 或流对象真假。</li>
  <li>默认 <code>ofstream</code> 会清空原文件，追加要用 <code>ios::app</code>。</li>
  <li>处理二进制数据要加 <code>ios::binary</code>。</li>
  <li>打开成功不代表读写成功，写完后仍要检查流状态。</li>
</ul>
<div class="doc-tip">💡 文件流对象离开作用域会自动关闭文件；显式 <code>close()</code> 后可复用同一个流对象打开别的文件。</div>`
          },
          {
            id: 'exceptions',
            title: '异常处理',
            html: `<p>异常把「错误检测」和「错误处理」分开：</p>
<pre><code>#include &lt;stdexcept&gt;

try {
    int age;
    cin &gt;&gt; age;
    if (!cin) throw runtime_error("输入不合法");
    if (age &lt; 0) throw out_of_range("年龄不能为负");
    cout &lt;&lt; age;
} catch (const out_of_range&amp; e) {
    cerr &lt;&lt; e.what();
} catch (const exception&amp; e) {
    cerr &lt;&lt; "错误：" &lt;&lt; e.what();
} catch (...) {
    cerr &lt;&lt; "未知错误";
}</code></pre>
<ul>
  <li>catch 的类型要与 throw 的类型匹配，否则捕获不到。</li>
  <li>按 <code>const&amp;</code> 捕获可以避免拷贝并保留多态。</li>
  <li><code>catch(...)</code> 放在最后兜底。</li>
  <li>未被捕获的异常会调用 <code>std::terminate</code> 终止程序。</li>
</ul>
<div class="doc-tip">💡 自定义异常可继承 <code>std::exception</code> 并重写 <code>what()</code>，让调用方用统一方式获取错误信息。</div>`
          },
          {
            id: 'memory',
            title: '动态内存',
            html: `<p>堆内存由程序员手动申请和释放：</p>
<pre><code>int* p = new int(42);
delete p;                 // 单个对象

int* arr = new int[10];
delete[] arr;             // 数组必须用 delete[]

// 现代写法：智能指针自动释放
#include &lt;memory&gt;
auto q = make_unique&lt;int&gt;(42);</code></pre>
<ul>
  <li><code>new</code> 配 <code>delete</code>，<code>new[]</code> 配 <code>delete[]</code>，不能错配。</li>
  <li>现代 C++ 中 <code>new</code> 失败默认抛出 <code>std::bad_alloc</code>，不是返回 NULL。</li>
  <li>忘记释放会造成<b>内存泄漏</b>；delete 后继续使用会产生<b>野指针</b>。</li>
  <li>释放后建议把指针置为 <code>nullptr</code>。</li>
</ul>
<div class="doc-tip">💡 优先使用 <code>std::vector</code>、<code>std::string</code> 和智能指针，把手动 new/delete 降到最少。</div>`
          },
          {
            id: 'namespaces',
            title: '命名空间',
            html: `<p>命名空间用来避免大型工程中的名字冲突：</p>
<pre><code>namespace math {
    int add(int a, int b) { return a + b; }
}

namespace math {
    int sub(int a, int b) { return a - b; }   // 同名命名空间会合并
}

int main() {
    cout &lt;&lt; math::add(2, 3);
    using math::sub;
    cout &lt;&lt; sub(5, 1);
}</code></pre>
<ul>
  <li>用 <code>::</code> 访问命名空间成员，全局作用域写作 <code>::name</code>。</li>
  <li>同时引入两个含同名成员的命名空间，会产生二义性错误。</li>
  <li>局部同名变量会隐藏命名空间中的同名实体。</li>
  <li><b>不要在头文件里写 <code>using namespace std;</code></b>，会污染所有包含者。</li>
</ul>
<div class="doc-tip">💡 自己的库应放在独立命名空间中；匿名命名空间可让符号只在本文件可见。</div>`
          }
        ],
        refs: [CPP.runoob, CPP.cppref, CPP.gfg]
      }
    },

    /* ---------------- 第 10 章 ---------------- */
    {
      title: '模板、预处理器、信号、多线程与 Web 编程',
      brief: '函数/类模板、宏与条件编译、信号处理、std::thread 并发、CGI Web 编程。',
      q: [
        {
          stem: '模板函数的定义和实现通常应该放在哪里？',
          options: ['头文件中，与声明放在一起', '只能放在 .cpp 中', '必须放在 main 函数里', '单独放在 .txt 中'],
          answer: 0,
          explain: '模板要在编译期按实参类型实例化，编译器需要看到完整定义；把实现放进 .cpp 常导致链接错误。'
        },
        {
          stem: '定义函数式宏 <code>#define MIN(a, b) ...</code> 时，参数必须怎样处理？',
          options: ['每个参数和整体都加括号', '不需要括号', '只在整体加括号', '只能传常量'],
          answer: 0,
          explain: '宏是纯文本替换，不加括号会因运算符优先级出错；应写成 ((a) < (b) ? (a) : (b)) 并给整体加括号。'
        },
        {
          stem: '销毁一个仍处于 joinable 状态的 <code>std::thread</code> 对象会发生什么？',
          options: ['程序调用 std::terminate 终止', '线程自动 detach', '线程自动 join', '没有任何影响'],
          answer: 0,
          explain: 'std::thread 析构前必须显式 join() 或 detach()，否则标准要求调用 std::terminate。'
        }
      ],
      doc: {
        lead: '最后一章进入现代 C++ 的进阶工具：用模板写泛型代码，用预处理器控制编译，用信号和线程处理并发，最后看看 C++ 如何做 Web 后端。',
        sections: [
          {
            id: 'templates',
            title: '模板',
            html: `<p>模板让同一段代码适配多种类型，是 STL 的基础：</p>
<pre><code>template &lt;typename T&gt;
T maxOf(T a, T b) {
    return a &gt; b ? a : b;
}

template &lt;class T&gt;
class Stack {
public:
    void push(const T&amp; v) { data.push_back(v); }
    T pop() { T v = data.back(); data.pop_back(); return v; }
private:
    vector&lt;T&gt; data;
};

cout &lt;&lt; maxOf(3, 7);        // int 版本
cout &lt;&lt; maxOf(2.5, 1.5);    // double 版本</code></pre>
<ul>
  <li><code>typename</code> 与 <code>class</code> 在模板形参中等价。</li>
  <li>模板声明与实现通常放在同一头文件，否则链接阶段找不到实例化代码。</li>
  <li>实参类型必须支持模板内部使用的操作，例如 <code>&lt;</code> 或 <code>push_back</code>。</li>
  <li>模板报错信息很长，要顺着调用栈找到自己写的模板定义。</li>
</ul>
<div class="doc-tip">💡 C++20 的 concepts 能给模板参数加约束，让报错更早、更清晰。</div>`
          },
          {
            id: 'preprocessor',
            title: '预处理器',
            html: `<p>预处理在编译之前执行，负责宏替换、文件包含和条件编译：</p>
<pre><code>#define MAX 100
#define SQUARE(x) ((x) * (x))

#ifndef MY_HEADER_H
#define MY_HEADER_H
// 头文件内容
#endif

#if 0
    // 临时屏蔽的代码
#endif</code></pre>
<ul>
  <li>预处理指令<b>不以分号结尾</b>，加了分号会被当作替换文本的一部分。</li>
  <li>函数式宏的参数和整体都要加括号，避免优先级错误。</li>
  <li>头文件保护用 <code>#ifndef / #define / #endif</code>，防止重复包含。</li>
  <li><code>#if 0</code> 是屏蔽大段含注释代码的可靠方式。</li>
</ul>
<div class="doc-tip">💡 能用 <code>const</code> / <code>constexpr</code> / <code>inline</code> 替代宏时，优先用语言特性，保留类型安全。</div>`
          },
          {
            id: 'signals',
            title: '信号处理',
            html: `<p>信号是操作系统发给进程的异步通知，例如 Ctrl+C 产生 SIGINT：</p>
<pre><code>#include &lt;csignal&gt;
#include &lt;cstdlib&gt;

void handler(int sig) {
    cout &lt;&lt; "收到信号 " &lt;&lt; sig &lt;&lt; endl;
    exit(sig);
}

int main() {
    signal(SIGINT, handler);   // 注册处理函数
    while (true) { }
}</code></pre>
<ul>
  <li>信号处理函数要尽量精简，只做少量异步信号安全的操作。</li>
  <li>不是所有信号都能被捕获；部分信号由系统强制处理。</li>
  <li>处理函数中避免复杂对象操作和大量 iostream 输出。</li>
  <li><code>sleep()</code>（Linux，秒）与 <code>Sleep()</code>（Windows，毫秒）跨平台不通用。</li>
</ul>
<div class="doc-tip">💡 真实项目中优先用事件循环、条件变量等机制等待事件，信号只用于「通知退出」这类简单场景。</div>`
          },
          {
            id: 'threads',
            title: '多线程',
            html: `<p>C++11 起标准库提供 <code>std::thread</code>：</p>
<pre><code>#include &lt;thread&gt;
#include &lt;mutex&gt;

mutex mtx;
int counter = 0;

void work() {
    for (int i = 0; i &lt; 1000; ++i) {
        lock_guard&lt;mutex&gt; lock(mtx);   // 自动加锁 / 解锁
        ++counter;
    }
}

int main() {
    thread t(work);
    t.join();          // 等待线程结束
    cout &lt;&lt; counter;
}</code></pre>
<ul>
  <li>线程对象销毁前必须 <code>join()</code> 或 <code>detach()</code>，否则会 terminate。</li>
  <li>多线程读写共享变量且无同步会产生<b>数据竞争</b>。</li>
  <li>用 <code>mutex</code> + <code>lock_guard</code> 或 <code>atomic</code> 保护共享数据。</li>
  <li>想在线程中修改外部变量，传参要用 <code>std::ref</code>，否则默认按值拷贝。</li>
</ul>
<div class="doc-tip">💡 锁的粒度越小越好，但必须覆盖所有共享访问；不确定时先保证正确，再谈性能。</div>`
          },
          {
            id: 'web',
            title: 'Web 编程',
            html: `<p>C++ 可以通过 CGI 编写 Web 后端：服务器把 HTTP 请求转成环境变量和标准输入，程序输出 HTTP 响应。</p>
<pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    cout &lt;&lt; "Content-type:text/html\\r\\n\\r\\n";
    cout &lt;&lt; "&lt;html&gt;&lt;body&gt;";
    cout &lt;&lt; "&lt;h1&gt;Hello CGI&lt;/h1&gt;";
    cout &lt;&lt; "&lt;/body&gt;&lt;/html&gt;";
    return 0;
}</code></pre>
<ul>
  <li>必须先输出 <code>Content-type</code> 头和<b>一个空行</b>，否则浏览器无法正确解析。</li>
  <li><code>Set-Cookie</code> 等响应头要在空行之前发送。</li>
  <li>GET 参数暴露在 URL 中且长度有限，敏感数据用 POST。</li>
  <li>POST 数据长度由 <code>CONTENT_LENGTH</code> 决定，程序据此从标准输入读取。</li>
</ul>
<div class="doc-tip">💡 CGI 每次请求启动一个进程，性能有限；现代 C++ 后端更多使用 epoll / asio 等网络库。Web 输入务必校验转义，防止注入。</div>`
          }
        ],
        refs: [CPP.runoob, CPP.cppref, CPP.gfg]
      }
    }
  ];

  /* 把 10 章挂到「面向对象程序设计（C++）」模块，并登记到 DOCS 文档表 */
  var ci = 0;
  Object.keys(ov).forEach(function (stage) {
    (ov[stage].modules || []).forEach(function (mod) {
      if (mod.name === COURSE) {
        mod.levels = COURSES.map(function (ch, k) {
          DOCS[MAJOR + '-m' + ci + '-l' + k] = ch.doc;
          return {
            name: '第 ' + (k + 1) + ' 章 · ' + ch.title,
            brief: ch.brief,
            questions: ch.q,
            ready: true
          };
        });
      }
      ci++;
    });
  });
})();
