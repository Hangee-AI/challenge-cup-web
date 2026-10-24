/* ==========================================================
   cs-cpp-complete.js · 面向对象程序设计（C++）完整课程
   覆盖菜鸟教程 C++ 教程全部 40 个主题，分为 18 个关卡
   ========================================================== */
(function () {
  var MAJOR = 'engineering-计算机科学与技术';
  var ov = MAJOR_STAGE_OVERRIDES[MAJOR];
  if (!ov) return;

  var REFS = {
    runoob: { name: '菜鸟教程 C++ 教程', url: 'https://www.runoob.com/cplusplus/cpp-tutorial.html' },
    ccf: { name: '中国计算机学会（CCF）', url: 'https://www.ccf.org.cn/' },
    cppref: { name: 'C++ Reference', url: 'https://en.cppreference.com/' }
  };

  var CPP_LEVELS = [
    /* ========== 第一部分：C++ 基础语法（10 关） ========== */
    {
      title: 'C++ 入门与环境搭建',
      brief: 'C++ 简介、开发环境、编译运行与第一个程序。',
      q: [
        { stem: 'C++ 程序从哪个函数开始执行？', options: ['main()', 'start()', 'begin()', 'init()'], answer: 0, explain: 'C++ 程序从 main() 函数开始执行，返回整数状态码。' },
        { stem: '#include <iostream> 的作用是：', options: ['引入标准输入输出流库', '定义主函数', '声明命名空间', '编译程序'], answer: 0, explain: '#include <iostream> 引入标准输入输出流库，提供 cin、cout 等。' },
        { stem: 'cout << "Hello" << endl; 中 endl 的作用是：', options: ['输出换行并刷新缓冲区', '仅输出换行', '结束程序', '定义变量'], answer: 0, explain: 'endl 输出换行符并立即刷新缓冲区，\\n 只换行不刷新。' }
      ],
      doc: {
        lead: '这一关带你认识 C++ 并写出第一个程序。C++ 是一种静态类型的、编译式的、通用的编程语言，由 Bjarne Stroustrup 于 1979 年在贝尔实验室设计开发。',
        sections: [
          { id: 's1', title: 'C++ 语言简介', html: '<p>C++ 是一种<strong>中级语言</strong>，综合了高级语言和低级语言的特点。它支持三种编程范式：</p><ul><li><strong>过程化编程</strong>：传统的结构化编程方式</li><li><strong>面向对象编程</strong>：封装、继承、多态</li><li><strong>泛型编程</strong>：模板和类型无关的代码</li></ul><p>C++ 是 C 的超集，任何合法的 C 程序都是合法的 C++ 程序。主要应用于：游戏开发（Unreal Engine）、嵌入式系统、金融高频交易、图形图像处理、科学计算等领域。</p><p><strong>面向对象四大特性：</strong></p><ul><li><strong>封装</strong>：将数据和方法组合在一起，隐藏实现细节</li><li><strong>继承</strong>：从已有类派生出新类，实现代码复用</li><li><strong>多态</strong>：同一操作作用于不同对象有不同解释</li><li><strong>抽象</strong>：提取共同特征，形成抽象类或接口</li></ul>' },
          { id: 's2', title: '开发环境搭建', html: '<p>开发 C++ 需要两款软件：<strong>文本编辑器</strong>和<strong>编译器</strong>。</p><p><strong>常用编辑器/IDE：</strong></p><ul><li><strong>Visual Studio Code</strong>：通用编辑器，安装 C/C++ 插件</li><li><strong>Visual Studio</strong>：综合性 Windows IDE</li><li><strong>Vim / Emacs</strong>：传统文本编辑器，高度可定制</li><li><strong>CLion</strong>：JetBrains 出品的专业 C++ IDE</li></ul><p><strong>编译器：</strong>最常用的是 GNU 的 GCC（g++）。</p><p><strong>各平台安装：</strong></p><ul><li><strong>Linux/UNIX</strong>：<code>g++ -v</code> 检查，未安装则从 gcc.gnu.org 安装</li><li><strong>Mac OS X</strong>：安装 Xcode 即可使用 GNU 编译器</li><li><strong>Windows</strong>：安装 MinGW-w64 或 Cygwin</li></ul><p><strong>g++ 常用编译命令：</strong></p><pre><code>g++ hello.cpp              # 默认生成 a.out\ng++ hello.cpp -o hello     # 指定输出文件名\ng++ -g -Wall -std=c++11 main.cpp  # 调试信息+警告+C++11</code></pre><p><strong>常用选项：</strong><code>-o</code>（输出文件）、<code>-g</code>（调试信息）、<code>-Wall</code>（所有警告）、<code>-O2</code>（优化）、<code>-c</code>（只编译不链接）、<code>-I</code>（头文件路径）、<code>-L</code>（库路径）。</p>' },
          { id: 's3', title: 'Hello World 程序', html: '<p><strong>经典 Hello World：</strong></p><pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    cout &lt;&lt; "Hello, World!" &lt;&lt; endl;\n    return 0;\n}</code></pre><p><strong>程序结构解析：</strong></p><ul><li><code>#include &lt;iostream&gt;</code>：预处理指令，引入标准输入输出流库</li><li><code>using namespace std;</code>：使用 std 命名空间，可直接用 cout、endl</li><li><code>int main()</code>：程序主入口，返回整数状态码</li><li><code>cout &lt;&lt; "..."</code>：向标准输出打印</li><li><code>endl</code>：换行并刷新缓冲区</li><li><code>return 0;</code>：结束程序，返回 0 表示正常退出</li></ul><p><strong>"\\n" 与 endl 的区别：</strong></p><ul><li><code>\\n</code>：只是换行字符，不刷新缓冲区，效率更高</li><li><code>endl</code>：换行并立即刷新缓冲区，必要时使用</li></ul><p><strong>头文件包含：</strong></p><ul><li><code>&lt;&gt;</code>：先在系统目录找，用于标准头文件</li><li><code>""</code>：先在当前目录找，用于自定义头文件</li></ul><p><strong>编译运行过程：</strong>源代码(.cpp) → 预处理 → 编译 → 汇编（.obj）→ 链接（.exe）→ 运行</p>' }
        ],
        refs: [REFS.runoob, REFS.cppref]
      }
    },
    {
      title: '基本语法与注释',
      brief: '程序结构、标识符、关键字、注释与条件编译。',
      q: [
        { stem: 'C++ 中单行注释使用：', options: ['//', '/* */', '#', '--'], answer: 0, explain: '// 用于单行注释，/* */ 用于多行注释。' },
        { stem: '下列哪个是合法的 C++ 标识符？', options: ['_value', '2name', 'my-var', 'class'], answer: 0, explain: '标识符以字母或下划线开头，不能以数字开头，不能使用关键字。' },
        { stem: 'C++ 语句的结束符是：', options: ['分号 ;', '句号 .', '逗号 ,', '换行'], answer: 0, explain: 'C++ 中每个语句必须以分号结束。' }
      ],
      doc: {
        lead: '这一关讲解 C++ 的基本语法规则和注释方式。',
        sections: [
          { id: 's1', title: '程序结构与基本概念', html: '<p>C++ 程序可以定义为<strong>对象的集合</strong>，对象通过调用彼此的方法进行交互。四个基本概念：</p><ul><li><strong>对象（Object）</strong>：具有状态和行为，是类的实例</li><li><strong>类（Class）</strong>：描述对象行为/状态的模板/蓝图</li><li><strong>方法（Method）</strong>：表示一种行为，类可包含多个方法</li><li><strong>即时变量（Instance Variable）</strong>：每个对象独特的变量</li></ul><p><strong>语法要点：</strong></p><ul><li><strong>分号 ;</strong>：语句结束符，每个语句必须以分号结束</li><li><strong>语句块 {}</strong>：用大括号括起来的一组逻辑连接的语句</li><li><strong>大小写敏感</strong>：<code>Manpower</code> 和 <code>manpower</code> 是不同的标识符</li><li>C++ 不以行末作为结束符，一行可放多个语句</li></ul>' },
          { id: 's2', title: '标识符与关键字', html: '<p><strong>标识符命名规则：</strong></p><ul><li>以字母 A-Z、a-z 或下划线 _ 开头</li><li>后跟零个或多个字母、下划线和数字（0-9）</li><li>不允许出现标点字符如 <code>@</code>、<code>&amp;</code>、<code>%</code></li><li>C++ 区分大小写</li></ul><p><strong>C++ 关键字（保留字）：</strong>不能用作标识符，如 <code>int</code>、<code>class</code>、<code>return</code>、<code>if</code>、<code>for</code>、<code>while</code>、<code>void</code>、<code>const</code>、<code>static</code> 等。</p><p><strong>三字符组（Trigraphs）：</strong>以 <code>??</code> 开头的三字符序列，用于表示键盘上没有的字符。如 <code>??=</code> 表示 <code>#</code>，<code>??/</code> 表示 <code>\\</code>。现代编译器默认不再自动替换。</p>' },
          { id: 's3', title: '注释与条件编译', html: '<p>C++ 支持两种注释形式：</p><ul><li><strong>单行注释</strong>：<code>// 注释内容</code>，从 // 到行末</li><li><strong>多行注释</strong>：<code>/* 注释内容 */</code>，可跨行，但<strong>不能嵌套</strong></li></ul><p><strong>嵌套规则：</strong></p><ul><li>在 <code>/* ... */</code> 内部，<code>//</code> 没有特殊含义</li><li>在 <code>//</code> 内部，<code>/*</code> 和 <code>*/</code> 也没有特殊含义</li><li>可以在一种注释内嵌套另一种注释</li></ul><p><strong>条件编译注释技巧：</strong></p><pre><code>#if 0\n    这段代码被注释掉了\n    cout &lt;&lt; "不会执行";\n#endif\n\n// 调试时用 #if 1，发布时改为 #if 0\n#if DEBUG\n    cout &lt;&lt; "调试信息";\n#endif</code></pre><p><code>#if 0 ... #endif</code> 可以实现真正的嵌套注释效果，适合注释掉大段包含已有注释的代码。</p>' }
        ],
        refs: [REFS.runoob]
      }
    },
    {
      title: '数据类型',
      brief: '基本类型、类型大小、类型修饰符与类型转换。',
      q: [
        { stem: 'int 类型在 64 位系统中通常占多少字节？', options: ['4 字节', '8 字节', '2 字节', '1 字节'], answer: 0, explain: 'int 在大多数现代系统中占 4 字节（32 位）。' },
        { stem: '下列哪种类型用于存储布尔值？', options: ['bool', 'int', 'char', 'float'], answer: 0, explain: 'bool 类型只能取 true 或 false 两个值。' },
        { stem: 'static_cast<int>(3.14) 的结果是：', options: ['3', '3.14', '4', '编译错误'], answer: 0, explain: 'static_cast 进行显式类型转换，浮点转整数直接截断小数部分。' }
      ],
      doc: {
        lead: '这一关详细介绍 C++ 的数据类型系统。变量保留的是它所存储的值的内存位置，操作系统根据数据类型来分配内存。',
        sections: [
          { id: 's1', title: '基本内置类型', html: '<p><strong>七种基本内置类型：</strong></p><ul><li><strong>bool</strong>（布尔型）：true 或 false，占 1 字节</li><li><strong>char</strong>（字符型）：单字符，占 1 字节，-128~127</li><li><strong>int</strong>（整型）：整数，通常占 4 字节</li><li><strong>float</strong>（单精度浮点）：占 4 字节，6-7 位有效数字</li><li><strong>double</strong>（双精度浮点）：占 8 字节，15 位有效数字</li><li><strong>void</strong>（无类型）：表示没有类型</li><li><strong>wchar_t</strong>（宽字符型）：占 2 或 4 字节，取决于平台</li></ul><p><strong>C++11 新增类型：</strong></p><ul><li><code>auto</code>：自动类型推断，<code>auto x = 10;</code></li><li><code>decltype</code>：获取表达式类型，<code>decltype(x) y = 20;</code></li><li><code>nullptr</code>：空指针常量，替代 NULL</li><li><code>long long</code>：长长整型，至少 8 字节</li><li><code>char16_t</code>、<code>char32_t</code>：Unicode 字符类型</li></ul>' },
          { id: 's2', title: '数据类型大小与范围', html: '<p><strong>完整数据类型表（64 位系统）：</strong></p><table style="width:100%;border-collapse:collapse;"><tr style="background:#f0f0f0;"><th style="border:1px solid #ddd;padding:8px;">类型</th><th style="border:1px solid #ddd;padding:8px;">字节数</th><th style="border:1px solid #ddd;padding:8px;">范围</th></tr><tr><td style="border:1px solid #ddd;padding:8px;">bool</td><td style="border:1px solid #ddd;padding:8px;">1</td><td style="border:1px solid #ddd;padding:8px;">true / false</td></tr><tr><td style="border:1px solid #ddd;padding:8px;">char</td><td style="border:1px solid #ddd;padding:8px;">1</td><td style="border:1px solid #ddd;padding:8px;">-128 ~ 127</td></tr><tr><td style="border:1px solid #ddd;padding:8px;">unsigned char</td><td style="border:1px solid #ddd;padding:8px;">1</td><td style="border:1px solid #ddd;padding:8px;">0 ~ 255</td></tr><tr><td style="border:1px solid #ddd;padding:8px;">short</td><td style="border:1px solid #ddd;padding:8px;">2</td><td style="border:1px solid #ddd;padding:8px;">-32,768 ~ 32,767</td></tr><tr><td style="border:1px solid #ddd;padding:8px;">unsigned short</td><td style="border:1px solid #ddd;padding:8px;">2</td><td style="border:1px solid #ddd;padding:8px;">0 ~ 65,535</td></tr><tr><td style="border:1px solid #ddd;padding:8px;">int</td><td style="border:1px solid #ddd;padding:8px;">4</td><td style="border:1px solid #ddd;padding:8px;">-2^31 ~ 2^31-1</td></tr><tr><td style="border:1px solid #ddd;padding:8px;">unsigned int</td><td style="border:1px solid #ddd;padding:8px;">4</td><td style="border:1px solid #ddd;padding:8px;">0 ~ 2^32-1</td></tr><tr><td style="border:1px solid #ddd;padding:8px;">long</td><td style="border:1px solid #ddd;padding:8px;">4 或 8</td><td style="border:1px solid #ddd;padding:8px;">平台相关</td></tr><tr><td style="border:1px solid #ddd;padding:8px;">long long</td><td style="border:1px solid #ddd;padding:8px;">8</td><td style="border:1px solid #ddd;padding:8px;">-2^63 ~ 2^63-1</td></tr><tr><td style="border:1px solid #ddd;padding:8px;">float</td><td style="border:1px solid #ddd;padding:8px;">4</td><td style="border:1px solid #ddd;padding:8px;">±3.4e±38</td></tr><tr><td style="border:1px solid #ddd;padding:8px;">double</td><td style="border:1px solid #ddd;padding:8px;">8</td><td style="border:1px solid #ddd;padding:8px;">±1.7e±308</td></tr></table><p><strong>查看类型大小：</strong></p><pre><code>#include &lt;iostream&gt;\n#include &lt;limits&gt;\nusing namespace std;\n\nint main() {\n    cout &lt;&lt; "int: " &lt;&lt; sizeof(int) &lt;&lt; " 字节\\n";\n    cout &lt;&lt; "最大值: " &lt;&lt; numeric_limits&lt;int&gt;::max() &lt;&lt; endl;\n    return 0;\n}</code></pre>' },
          { id: 's3', title: '类型修饰符与转换', html: '<p><strong>类型修饰符：</strong>signed、unsigned、short、long、const、volatile、mutable</p><p><strong>派生数据类型：</strong>数组、指针、引用、函数、结构体、类、联合体、枚举</p><p><strong>typedef 声明：</strong>为已有类型取新名字</p><pre><code>typedef int feet;\nfeet distance;  // 等价于 int distance;</pre><p><strong>枚举类型（enum）：</strong></p><pre><code>enum color { red, green=5, blue };  // red=0, green=5, blue=6\ncolor c = blue;</code></pre><p><strong>四种显式类型转换：</strong></p><ul><li><code>static_cast&lt;T&gt;(expr)</code>：相关类型间转换，编译时检查，无运行时检查</li><li><code>dynamic_cast&lt;T&gt;(expr)</code>：继承层次向下转换，运行时检查，失败返回 nullptr</li><li><code>const_cast&lt;T&gt;(expr)</code>：去除 const 属性</li><li><code>reinterpret_cast&lt;T&gt;(expr)</code>：低级别按位重新解释，最不安全</li></ul><p><strong>注意：</strong>不同系统/编译器下数据类型大小可能不同，尤其是 long 在 32 位和 64 位系统上大小不同。无符号数与有符号数比较时，有符号数会被隐式转换为无符号数，可能产生意外结果。</p>' }
        ],
        refs: [REFS.runoob, REFS.cppref]
      }
    },
    {
      title: '变量与常量',
      brief: '变量定义、初始化、作用域、常量定义与转义序列。',
      q: [
        { stem: '局部变量未初始化时其值是：', options: ['未定义的（垃圾值）', '0', 'NULL', '编译错误'], answer: 0, explain: '局部自动变量不会自动初始化，值是未定义的。' },
        { stem: 'const int N = 10; 中 N 能否被修改？', options: ['不能', '能', '只能增加', '只能减少'], answer: 0, explain: 'const 定义的常量值不能被修改，定义时必须初始化。' },
        { stem: '#define 与 const 的主要区别是：', options: ['#define 无类型检查，const 有', '#define 有作用域，const 没有', '#define 分配内存，const 不分配', '没有区别'], answer: 0, explain: '#define 是预处理指令，纯字符串替换无类型检查；const 有类型且编译时检查。' }
      ],
      doc: {
        lead: '这一关讲解变量的定义、作用域和常量的使用。变量是程序可操作的存储区的名称。',
        sections: [
          { id: 's1', title: '变量定义与初始化', html: '<p><strong>变量定义语法：</strong></p><pre><code>type variable_name = value;\nint i, j, k;           // 定义多个 int\nchar c, ch;            // 定义多个 char\nfloat f, salary;       // 定义多个 float</code></pre><p><strong>变量初始化：</strong></p><pre><code>int a = 10;            // 直接初始化\nint b(20);             // 构造函数初始化（C++）\nint c{30};             // 列表初始化（C++11）\nextern int d = 3;      // 声明并初始化</code></pre><p><strong>变量声明 vs 定义：</strong></p><ul><li><strong>定义（Definition）</strong>：分配内存，创建变量的存储。一个变量只能被定义一次</li><li><strong>声明（Declaration）</strong>：向编译器保证变量存在，不分配内存。使用 extern 关键字，可多次声明</li></ul><p><strong>左值（Lvalue）与右值（Rvalue）：</strong></p><ul><li><strong>左值</strong>：指向内存位置的表达式，可出现在赋值号左边或右边。变量是左值</li><li><strong>右值</strong>：存储在内存中的数值，只能出现在赋值号右边。字面值是右值</li></ul><pre><code>int g = 20;   // 合法：g 是左值，20 是右值\n10 = 20;      // 非法：10 是右值，不能出现在赋值号左边</code></pre>' },
          { id: 's2', title: '变量作用域', html: '<p><strong>四种作用域：</strong></p><table style="width:100%;border-collapse:collapse;"><tr style="background:#f0f0f0;"><th style="border:1px solid #ddd;padding:8px;">作用域类型</th><th style="border:1px solid #ddd;padding:8px;">声明位置</th><th style="border:1px solid #ddd;padding:8px;">访问范围</th><th style="border:1px solid #ddd;padding:8px;">生命周期</th></tr><tr><td style="border:1px solid #ddd;padding:8px;"><strong>局部作用域</strong></td><td style="border:1px solid #ddd;padding:8px;">函数内部</td><td style="border:1px solid #ddd;padding:8px;">仅函数内</td><td style="border:1px solid #ddd;padding:8px;">函数调用时创建，执行完销毁</td></tr><tr><td style="border:1px solid #ddd;padding:8px;"><strong>全局作用域</strong></td><td style="border:1px solid #ddd;padding:8px;">所有函数外部</td><td style="border:1px solid #ddd;padding:8px;">程序中任何函数</td><td style="border:1px solid #ddd;padding:8px;">程序开始创建，结束销毁</td></tr><tr><td style="border:1px solid #ddd;padding:8px;"><strong>块作用域</strong></td><td style="border:1px solid #ddd;padding:8px;">代码块 {} 内部</td><td style="border:1px solid #ddd;padding:8px;">仅代码块内</td><td style="border:1px solid #ddd;padding:8px;">代码块执行时创建，结束销毁</td></tr><tr><td style="border:1px solid #ddd;padding:8px;"><strong>类作用域</strong></td><td style="border:1px solid #ddd;padding:8px;">类内部</td><td style="border:1px solid #ddd;padding:8px;">类的所有成员函数</td><td style="border:1px solid #ddd;padding:8px;">与类生命周期相同</td></tr></table><p><strong>全局变量默认初始化值：</strong></p><ul><li>int: 0</li><li>char: \'\\0\'</li><li>float/double: 0</li><li>pointer: NULL</li></ul><p><strong>重要规则：</strong></p><ul><li>局部变量不会被系统自动初始化，必须自行初始化</li><li>如果内部作用域声明的变量与外部同名，内部变量会<strong>覆盖（隐藏）</strong>外部变量</li><li>全局变量在整个程序生命周期内都存在，过多使用会降低代码可维护性</li></ul>' },
          { id: 's3', title: '常量与转义序列', html: '<p><strong>两种定义常量的方式：</strong></p><p><strong>1. #define 预处理器：</strong></p><pre><code>#define LENGTH 10\n#define WIDTH 5\n#define NEWLINE \'\\n\'</code></pre><ul><li>预处理阶段展开，纯字符串替换</li><li>无类型检查</li><li>不分配内存，存于代码段</li><li>不受花括号限制，定义后到处可用</li><li>可用 <code>#undef</code> 取消重定义</li><li>不可调试</li><li><strong>注意：</strong>末尾不要加分号！</li></ul><p><strong>2. const 关键字：</strong></p><pre><code>const int LENGTH = 10;\nconst char NEWLINE = \'\\n\';</code></pre><ul><li>编译时类型检查</li><li>分配内存，存于数据段</li><li>有作用域限制</li><li>不可取消</li><li>可调试</li><li>可作为函数参数传递</li></ul><p><strong>const 修饰指针：</strong></p><pre><code>const int *p = &amp;a;      // 指向常量的指针：*p 只读，p 可改指向\nint * const p = &amp;a;     // 常量指针：p 只读（不可改指向），*p 可改\nconst int * const p = &amp;a;  // 两者都只读</code></pre><p><strong>转义序列：</strong></p><ul><li><code>\\\\</code>：反斜杠 \</li><li><code>\\\'</code>：单引号 \'</li><li><code>\\"</code>：双引号 "</li><li><code>\\n</code>：换行符</li><li><code>\\t</code>：水平制表符</li><li><code>\\0</code>：空字符</li><li><code>\\ooo</code>：一到三位八进制数</li><li><code>\\xhh</code>：一个或多个十六进制数</li></ul><p><strong>整数常量：</strong></p><ul><li><code>0x</code> 或 <code>0X</code> 前缀：十六进制</li><li><code>0</code> 前缀：八进制</li><li>无前缀：十进制</li><li>后缀 <code>U</code>：无符号，<code>L</code>：长整数</li></ul>' }
        ],
        refs: [REFS.runoob]
      }
    },
    {
      title: '修饰符与存储类',
      brief: '类型修饰符与变量存储类说明。',
      q: [
        { stem: 'unsigned int 与 signed int 的区别是：', options: ['unsigned 不能存储负数，范围更大', 'unsigned 占用更多内存', 'signed 不能存储负数', '没有区别'], answer: 0, explain: 'unsigned 无符号，所有位用于表示正值，范围是 signed 的两倍。' },
        { stem: 'static 局部变量的特点是：', options: ['值在函数调用间保持不变', '每次调用都重新初始化', '只能在类中使用', '不能修改'], answer: 0, explain: 'static 局部变量只初始化一次，生命周期贯穿整个程序运行期。' },
        { stem: 'volatile 关键字的作用是：', options: ['告诉编译器变量可能被外部因素改变，禁止优化', '定义常量', '声明静态变量', '限制变量作用域'], answer: 0, explain: 'volatile 用于硬件寄存器或多线程场景，防止编译器优化掉对该变量的访问。' }
      ],
      doc: {
        lead: '这一关介绍类型修饰符和存储类说明符。',
        sections: [
          { id: 's1', title: '类型修饰符', html: '<p>常用修饰符：</p><ul><li>signed：有符号（整型默认）</li><li>unsigned：无符号，范围扩大一倍</li><li>short：更小的 int</li><li>long：更大的 int</li><li>long long：C++11，比 long 更大</li></ul><p>类型限定符：const（常量）、volatile（易变）、mutable（可变）、static（静态）、register（寄存器，C++17 移除）。</p>' },
          { id: 's2', title: '存储类', html: '<p>六种存储类：</p><ul><li>auto：默认存储类，C++11 后用于类型推断</li><li>register：建议存入寄存器（已弃用）</li><li>static：静态存储期，值在函数调用间保持</li><li>extern：声明全局变量在其他文件定义</li><li>thread_local：线程局部存储（C++11）</li><li>mutable：可在 const 成员函数中修改</li></ul>' }
        ],
        refs: [REFS.runoob, REFS.cppref]
      }
    },
    {
      title: '运算符',
      brief: '算术、关系、逻辑、位运算、赋值与优先级。',
      q: [
        { stem: 'C++ 中 sizeof 是：', options: ['运算符', '函数', '关键字', '宏'], answer: 0, explain: 'sizeof 是运算符，在编译时计算类型或变量占用的字节数。' },
        { stem: 'a++ 与 ++a 的区别是：', options: ['a++ 先使用再加，++a 先加再使用', '没有区别', 'a++ 更快', '++a 语法错误'], answer: 0, explain: 'a++ 是后缀自增，先用后加；++a 是前缀自增，先加后用。' },
        { stem: '逻辑与 && 的短路特性是指：', options: ['左边为假时不计算右边', '左边为真时不计算右边', '两边同时计算', '只计算一边'], answer: 0, explain: '&& 短路：左边为假则整体为假，不再计算右边；|| 短路：左边为真则整体为真。' }
      ],
      doc: {
        lead: '这一关全面介绍 C++ 的运算符系统。',
        sections: [
          { id: 's1', title: '算术运算符', html: '<p><strong>基本算术运算符：</strong></p><ul><li><code>+</code> 加法</li><li><code>-</code> 减法</li><li><code>*</code> 乘法</li><li><code>/</code> 除法（整数除法截断小数）</li><li><code>%</code> 取模（求余数，只能用于整数）</li></ul><p><strong>自增自减运算符：</strong></p><ul><li><code>++</code> 自增 1</li><li><code>--</code> 自减 1</li></ul><p><strong>前缀 vs 后缀：</strong></p><pre><code>int a = 10;\nint b = ++a;  // 前缀：a 先加 1 变为 11，然后 b = 11\nint c = a++;  // 后缀：先 c = a（11），然后 a 加 1 变为 12</code></pre><p><strong>注意整数除法：</strong></p><pre><code>7 / 2 = 3      // 整数除法，截断小数\n7 / 2.0 = 3.5  // 浮点除法\n7.0 / 2 = 3.5  // 浮点除法</code></pre>' },
          { id: 's2', title: '关系与逻辑运算符', html: '<p><strong>关系运算符（比较）：</strong></p><ul><li><code>==</code> 等于</li><li><code>!=</code> 不等于</li><li><code>&gt;</code> 大于</li><li><code>&lt;</code> 小于</li><li><code>&gt;=</code> 大于等于</li><li><code>&lt;=</code> 小于等于</li></ul><p>关系表达式的结果是 bool 类型：true（1）或 false（0）</p><p><strong>逻辑运算符：</strong></p><ul><li><code>&amp;&amp;</code> 逻辑与（AND）：两边都为真才为真</li><li><code>||</code> 逻辑或（OR）：至少一边为真就为真</li><li><code>!</code> 逻辑非（NOT）：取反</li></ul><p><strong>短路特性：</strong></p><ul><li><code>&amp;&amp;</code> 短路：左边为假则整体为假，不再计算右边</li><li><code>||</code> 短路：左边为真则整体为真，不再计算右边</li></ul><pre><code>int x = 0;\nif (false &amp;&amp; (++x &gt; 0)) { }  // x 仍然是 0，++x 没有执行\nif (true || (++x &gt; 0)) { }   // x 仍然是 0，++x 没有执行</code></pre>' },
          { id: 's3', title: '位运算与其他运算符', html: '<p><strong>位运算符（操作二进制位）：</strong></p><ul><li><code>&amp;</code> 按位与：两位都为 1 才为 1</li><li><code>|</code> 按位或：至少一位为 1 就为 1</li><li><code>^</code> 按位异或：两位不同为 1，相同为 0</li><li><code>~</code> 按位取反：0 变 1，1 变 0</li><li><code>&lt;&lt;</code> 左移：所有位向左移动 n 位</li><li><code>&gt;&gt;</code> 右移：所有位向右移动 n 位</li></ul><p><strong>赋值运算符：</strong></p><ul><li><code>=</code> 简单赋值</li><li><code>+=</code> 加后赋值：<code>a += b</code> 等价于 <code>a = a + b</code></li><li><code>-=</code> 减后赋值</li><li><code>*=</code> 乘后赋值</li><li><code>/=</code> 除后赋值</li><li><code>%=</code> 取模后赋值</li></ul><p><strong>其他运算符：</strong></p><ul><li><code>sizeof</code>：返回类型或变量占用的字节数</li><li><code>?:</code> 三元条件运算符：<code>condition ? expr1 : expr2</code></li><li><code>,</code> 逗号运算符：从左到右求值，返回最右边的值</li><li><code>&amp;</code> 取地址符（一元）</li><li><code>*</code> 解引用符（一元）</li><li><code>-&gt;</code> 成员访问运算符（指针）</li><li><code>.</code> 成员访问运算符（对象）</li><li><code>::</code> 作用域解析运算符</li></ul><p><strong>运算符优先级（从高到低）：</strong></p><ol><li>括号 <code>()</code>、<code>[]</code>、<code>-&gt;</code>、<code>.</code></li><li>一元运算符：<code>!</code>、<code>~</code>、<code>++</code>、<code>--</code>、<code>sizeof</code></li><li>算术运算符：<code>*</code>、<code>/</code>、<code>%</code>，然后 <code>+</code>、<code>-</code></li><li>移位运算符：<code>&lt;&lt;</code>、<code>&gt;&gt;</code></li><li>关系运算符：<code>&lt;</code>、<code>&lt;=</code>、<code>&gt;</code>、<code>&gt;=</code></li><li>相等运算符：<code>==</code>、<code>!=</code></li><li>位运算符：<code>&amp;</code>、<code>^</code>、<code>|</code></li><li>逻辑运算符：<code>&amp;&amp;</code>、<code>||</code></li><li>条件运算符：<code>?:</code></li><li>赋值运算符：<code>=</code>、<code>+=</code> 等</li><li>逗号运算符：<code>,</code></li></ul><p><strong>建议：</strong>多用括号明确优先级，避免歧义。</p>' }
        ],
        refs: [REFS.runoob]
      }
    },
    {
      title: '循环与判断',
      brief: 'for、while、do-while 循环与 if-else、switch 判断。',
      q: [
        { stem: 'while 循环与 do-while 循环的区别是：', options: ['do-while 至少执行一次循环体', 'while 至少执行一次', '没有区别', 'do-while 不能用 break'], answer: 0, explain: 'do-while 先执行循环体再判断条件，至少执行一次。' },
        { stem: 'break 语句的作用是：', options: ['跳出当前循环或 switch', '结束程序', '跳过本次循环', '继续下一次循环'], answer: 0, explain: 'break 跳出最近的循环或 switch；continue 跳过本次循环剩余部分。' },
        { stem: 'switch 语句中 default 分支的作用是：', options: ['处理所有 case 都不匹配的情况', '必须存在', '提高运行速度', '没有作用'], answer: 0, explain: 'default 是可选的，处理所有 case 都不匹配的情况。' }
      ],
      doc: {
        lead: '这一关讲解控制流程：循环和条件判断。',
        sections: [
          { id: 's1', title: '循环语句', html: '<p><strong>三种循环：</strong></p><p><strong>1. for 循环：</strong>适合已知次数的循环</p><pre><code>for (init; condition; increment) {\n    // 循环体\n}\n\n// 示例：打印 0-9\nfor (int i = 0; i &lt; 10; i++) {\n    cout &lt;&lt; i &lt;&lt; " ";\n}</code></pre><p><strong>2. while 循环：</strong>适合未知次数的循环</p><pre><code>while (condition) {\n    // 循环体\n}\n\n// 示例\nint i = 0;\nwhile (i &lt; 10) {\n    cout &lt;&lt; i &lt;&lt; " ";\n    i++;\n}</code></pre><p><strong>3. do-while 循环：</strong>至少执行一次</p><pre><code>do {\n    // 循环体\n} while (condition);\n\n// 示例\nint j = 0;\ndo {\n    cout &lt;&lt; j &lt;&lt; " ";\n    j++;\n} while (j &lt; 10);</code></pre><p><strong>循环控制：</strong></p><ul><li><code>break</code>：跳出最近的循环或 switch</li><li><code>continue</code>：跳过本次循环剩余部分，进入下一次迭代</li><li><code>goto</code>：跳转到标签（不推荐使用）</li></ul><p><strong>无限循环：</strong></p><pre><code>for (;;) { }      // 无限循环\nwhile (true) { }  // 无限循环</code></pre>' },
          { id: 's2', title: '条件判断', html: '<p><strong>if-else 语句：</strong></p><pre><code>if (condition1) {\n    // condition1 为真时执行\n} else if (condition2) {\n    // condition2 为真时执行\n} else {\n    // 以上条件都不为真时执行\n}\n\n// 示例\nint score = 85;\nif (score &gt;= 90) {\n    cout &lt;&lt; "优秀" &lt;&lt; endl;\n} else if (score &gt;= 80) {\n    cout &lt;&lt; "良好" &lt;&lt; endl;\n} else if (score &gt;= 60) {\n    cout &lt;&lt; "及格" &lt;&lt; endl;\n} else {\n    cout &lt;&lt; "不及格" &lt;&lt; endl;\n}</code></pre><p><strong>switch 语句：</strong>多分支选择</p><pre><code>switch (expression) {\n    case constant1:\n        // 语句\n        break;\n    case constant2:\n        // 语句\n        break;\n    default:\n        // 默认语句\n}</code></pre><p><strong>注意事项：</strong></p><ul><li>每个 case 后通常要 break，否则会"穿透"到下一个 case</li><li>default 是可选的</li><li>expression 必须是整数或枚举类型</li><li>case 后的常量必须互不相同</li></ul><p><strong>三元条件运算符：</strong></p><pre><code>condition ? expr1 : expr2;\n\n// 示例\nint max = (a &gt; b) ? a : b;</code></pre>' },
          { id: 's3', title: '嵌套循环与常见模式', html: '<p><strong>嵌套循环：</strong>循环可以嵌套，常用于处理二维数组、打印图案等</p><pre><code>// 打印九九乘法表\nfor (int i = 1; i &lt;= 9; i++) {\n    for (int j = 1; j &lt;= i; j++) {\n        cout &lt;&lt; j &lt;&lt; "×" &lt;&lt; i &lt;&lt; "=" &lt;&lt; i*j &lt;&lt; "\\t";\n    }\n    cout &lt;&lt; endl;\n}</code></pre><p><strong>常见编程模式：</strong></p><ul><li><strong>累加</strong>：计算 1+2+...+n</li><li><strong>计数</strong>：统计满足条件的元素个数</li><li><strong>查找最大值/最小值</strong>：遍历数组找极值</li><li><strong>判断素数</strong>：检查能否被 2 到 sqrt(n) 整除</li><li><strong>斐波那契数列</strong>：F(n) = F(n-1) + F(n-2)</li><li><strong>冒泡排序</strong>：相邻元素比较交换</li></ul><p><strong>循环选择建议：</strong></p><ul><li>已知循环次数：用 for</li><li>未知循环次数，可能不执行：用 while</li><li>至少执行一次：用 do-while</li><li>遍历容器：用范围 for（C++11）</li></ul><pre><code>// C++11 范围 for\nvector&lt;int&gt; v = {1, 2, 3, 4, 5};\nfor (int x : v) {\n    cout &lt;&lt; x &lt;&lt; " ";\n}</code></pre>' }
        ],
        refs: [REFS.runoob]
      }
    },
    {
      title: '函数',
      brief: '函数定义、声明、参数传递、重载、递归与 lambda。',
      q: [
        { stem: '函数声明的作用是：', options: ['告诉编译器函数存在，可在定义前调用', '定义函数体', '分配内存', '没有作用'], answer: 0, explain: '函数声明（原型）让编译器知道函数签名，定义可以在后面。' },
        { stem: 'C++ 中函数参数默认传递方式是：', options: ['值传递', '引用传递', '指针传递', '地址传递'], answer: 0, explain: '默认是值传递，拷贝实参；可用引用 & 或指针 * 实现引用传递。' },
        { stem: '函数重载（overload）要求：', options: ['函数名相同，参数列表不同', '返回值类型不同', '参数名不同', '函数体不同'], answer: 0, explain: '重载要求函数名相同，参数个数或类型不同，与返回值无关。' }
      ],
      doc: {
        lead: '这一关讲解函数的定义和使用。函数是将一段代码封装在一起，可以重复使用的代码块。',
        sections: [
          { id: 's1', title: '函数定义与声明', html: '<p><strong>函数定义：</strong></p><pre><code>return_type function_name(parameter_list) {\n    // 函数体\n    return value;  // 如果有返回值\n}\n\n// 示例：求两数之和\nint add(int a, int b) {\n    return a + b;\n}</code></pre><p><strong>函数声明（原型）：</strong></p><pre><code>return_type function_name(parameter_list);  // 注意末尾分号\n\n// 示例\nint add(int, int);  // 参数名可以省略</code></pre><p>函数声明让编译器知道函数的签名（返回类型、参数类型和个数），这样函数可以在定义之前被调用。</p><p><strong>默认参数：</strong></p><pre><code>void printInfo(string name, int age = 18) {\n    cout &lt;&lt; name &lt;&lt; ", " &lt;&lt; age &lt;&lt; "岁" &lt;&lt; endl;\n}\n\nprintInfo("Alice");       // 使用默认 age=18\nprintInfo("Bob", 20);     // 使用指定 age=20</code></pre><p><strong>注意：</strong>默认参数必须从右向左连续指定。</p>' },
          { id: 's2', title: '参数传递方式', html: '<p><strong>三种参数传递方式：</strong></p><p><strong>1. 值传递：</strong>拷贝实参，函数内修改不影响实参</p><pre><code>void swap(int a, int b) {\n    int temp = a;\n    a = b;\n    b = temp;\n    // 只交换了副本，不影响实参\n}\n\nint x = 10, y = 20;\nswap(x, y);\n// x 仍然是 10，y 仍然是 20</code></pre><p><strong>2. 引用传递：</strong>直接操作实参</p><pre><code>void swap(int &amp;a, int &amp;b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\nint x = 10, y = 20;\nswap(x, y);  // x 变为 20，y 变为 10</code></pre><p><strong>3. 指针传递：</strong>通过地址操作</p><pre><code>void swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nint x = 10, y = 20;\nswap(&amp;x, &amp;y);  // x 变为 20，y 变为 10</code></pre><p><strong>选择建议：</strong></p><ul><li>不需要修改实参：值传递</li><li>需要修改实参：引用传递（推荐）或指针传递</li><li>传递大对象：引用传递避免拷贝开销</li></ul>' },
          { id: 's3', title: '函数重载与递归', html: '<p><strong>函数重载（Overload）：</strong>同名函数参数列表不同</p><pre><code>int add(int a, int b) {\n    return a + b;\n}\n\ndouble add(double a, double b) {\n    return a + b;\n}\n\nint add(int a, int b, int c) {\n    return a + b + c;\n}\n\nadd(1, 2);        // 调用 int add(int, int)\nadd(1.5, 2.3);    // 调用 double add(double, double)\nadd(1, 2, 3);     // 调用 int add(int, int, int)</code></pre><p><strong>注意：</strong>重载与返回值类型无关，只看参数列表（个数或类型）。</p><p><strong>递归：</strong>函数调用自身，必须有终止条件</p><pre><code>// 计算阶乘 n!\nint factorial(int n) {\n    if (n &lt;= 1) return 1;  // 终止条件\n    return n * factorial(n - 1);  // 递归调用\n}\n\n// factorial(5) = 5 * factorial(4) = 5 * 4 * factorial(3) = ... = 120</code></pre><p><strong>递归要素：</strong></p><ul><li><strong>基线条件</strong>：何时停止递归</li><li><strong>递归步骤</strong>：如何缩小问题规模</li></ul><p><strong>C++11 Lambda 表达式：</strong></p><pre><code>auto add = [](int a, int b) { return a + b; };\ncout &lt;&lt; add(3, 4);  // 输出 7\n\n// 捕获外部变量\nint x = 10;\nauto func = [x](int y) { return x + y; };\ncout &lt;&lt; func(5);  // 输出 15</code></pre>' }
        ],
        refs: [REFS.runoob, REFS.cppref]
      }
    },
    {
      title: '数组与字符串',
      brief: '一维数组、多维数组、C 风格字符串与 string 类。',
      q: [
        { stem: 'C++ 中数组下标从多少开始？', options: ['0', '1', '任意', '-1'], answer: 0, explain: 'C++ 数组下标从 0 开始，最大下标是 length-1。' },
        { stem: 'string 类与 C 风格字符串的区别是：', options: ['string 是类，功能更强大；C 字符串是字符数组', '没有区别', 'C 字符串更安全', 'string 不能修改'], answer: 0, explain: 'string 是 STL 类，支持动态长度和丰富的操作；C 字符串是 char 数组，以 \\0 结尾。' },
        { stem: '定义数组 int a[5]; 后，a[5] 是：', options: ['越界访问', '最后一个元素', '等于 0', '编译错误'], answer: 0, explain: '数组大小是 5，合法下标是 0-4，a[5] 越界但编译器不检查。' }
      ],
      doc: {
        lead: '这一关讲解数组和字符串的使用。数组是存储相同类型元素的集合，字符串是字符序列。',
        sections: [
          { id: 's1', title: '数组基础', html: '<p><strong>一维数组定义：</strong></p><pre><code>int arr[5];                    // 定义大小为 5 的数组\nint arr[5] = {1, 2, 3, 4, 5};  // 初始化\nint arr[] = {1, 2, 3};         // 自动推断大小为 3\nint arr[5] = {1, 2};           // 未初始化的元素默认为 0</code></pre><p><strong>数组访问：</strong></p><pre><code>arr[0] = 10;        // 第一个元素\narr[4] = 50;        // 最后一个元素（下标 4）\ncout &lt;&lt; arr[2];     // 访问第三个元素</code></pre><p><strong>多维数组：</strong></p><pre><code>// 二维数组（3 行 4 列）\nint matrix[3][4] = {\n    {1, 2, 3, 4},\n    {5, 6, 7, 8},\n    {9, 10, 11, 12}\n};\n\nmatrix[1][2] = 20;  // 访问第二行第三列\n\n// 遍历二维数组\nfor (int i = 0; i &lt; 3; i++) {\n    for (int j = 0; j &lt; 4; j++) {\n        cout &lt;&lt; matrix[i][j] &lt;&lt; " ";\n    }\n    cout &lt;&lt; endl;\n}</code></pre><p><strong>数组作为函数参数：</strong></p><pre><code>void printArray(int arr[], int size) {\n    for (int i = 0; i &lt; size; i++) {\n        cout &lt;&lt; arr[i] &lt;&lt; " ";\n    }\n}\n\n// 数组名退化为指针，需额外传递长度\nprintArray(arr, 5);</code></pre><p><strong>注意：</strong>数组下标越界编译器不检查，会导致未定义行为。</p>' },
          { id: 's2', title: 'C 风格字符串', html: '<p><strong>字符数组定义：</strong></p><pre><code>char str1[] = "Hello";        // 自动添加 \\0 结尾\nchar str2[6] = "Hello";       // 显式指定大小\nchar str3[] = {\'H\', \'e\', \'l\', \'l\', \'o\', \'\\0\'};  // 逐个字符初始化</code></pre><p>字符串以 <code>\\0</code>（空字符）结尾，<code>strlen</code> 计算长度时不包含 \\0。</p><p><strong>常用字符串函数（#include &lt;cstring&gt;）：</strong></p><pre><code>char str[100];\n\nstrlen(str);              // 返回字符串长度\nstrcpy(dest, src);        // 复制字符串\nstrcat(dest, src);        // 连接字符串\nstrcmp(str1, str2);       // 比较字符串（相等返回 0）\nstrchr(str, ch);          // 查找字符第一次出现\nstrstr(str1, str2);       // 查找子串</code></pre><p><strong>注意缓冲区溢出：</strong></p><pre><code>// 危险！可能溢出\nchar str[5];\nstrcpy(str, "Hello World");  // 超出数组大小\n\n// 安全版本\nstrncpy(str, "Hello World", sizeof(str) - 1);\nstr[sizeof(str) - 1] = \'\\0\';  // 确保以 \\0 结尾</code></pre>' },
          { id: 's3', title: 'string 类', html: '<p><strong>#include &lt;string&gt;</strong></p><pre><code>string s1 = "Hello";\nstring s2 = "World";\nstring s3;                    // 空字符串\nstring s4(5, \'a\');            // "aaaaa"</code></pre><p><strong>字符串操作：</strong></p><pre><code>// 拼接\nstring s = s1 + " " + s2;    // "Hello World"\ns += "!";                     // "Hello World!"\n\n// 长度\nint len = s.length();         // 或 s.size()\n\n// 访问字符\nchar c = s[0];                // \'H\'\ns[0] = \'h\';                   // 修改为 \'h\'\n\n// 子串\nstring sub = s.substr(0, 5);  // "Hello"，从位置 0 开始取 5 个字符\n\n// 查找\nsize_t pos = s.find("World"); // 返回 "World" 的起始位置\nif (pos != string::npos) {    // 找到了\n    cout &lt;&lt; "Found at " &lt;&lt; pos;\n}\n\n// 替换\ns.replace(6, 5, "C++");       // "Hello C++!"\n\n// 插入\ns.insert(5, ",");             // "Hello, C++!"\n\n// 删除\ns.erase(5, 2);                // 删除位置 5 开始的 2 个字符\n\n// 比较\nif (s1 == s2) { }             // 可以直接用 == 比较\nif (s1 &lt; s2) { }              // 字典序比较</code></pre><p><strong>string vs C 字符串转换：</strong></p><pre><code>string s = "Hello";\nconst char* cstr = s.c_str();  // string 转 C 字符串\n\nconst char* c = "World";\nstring s2(c);                   // C 字符串转 string</code></pre><p><strong>建议：</strong>现代 C++ 优先使用 string 类，比 C 字符串更安全、更方便。</p>' }
        ],
        refs: [REFS.runoob]
      }
    },
    {
      title: '指针与引用',
      brief: '指针概念、指针运算、引用、指针与引用区别、空指针与野指针。',
      q: [
        { stem: '指针存储的是：', options: ['变量的内存地址', '变量的值', '变量的类型', '变量名'], answer: 0, explain: '指针变量存储的是另一个变量的内存地址。' },
        { stem: 'NULL 指针的值是：', options: ['0', '1', '-1', '任意值'], answer: 0, explain: 'NULL 指针值为 0，表示不指向任何对象。C++11 推荐用 nullptr。' },
        { stem: '引用与指针的主要区别是：', options: ['引用必须初始化且不能改指向，指针可以', '没有区别', '引用更安全但更慢', '指针不能为 NULL'], answer: 0, explain: '引用是别名，必须初始化且不能重新绑定；指针可以改变指向，可以为 NULL。' }
      ],
      doc: {
        lead: '这一关深入讲解指针和引用的概念。指针是 C++ 最强大也最危险的特性，引用是更安全便捷的替代方案。',
        sections: [
          { id: 's1', title: '指针基础', html: '<p><strong>什么是指针？</strong>指针是一个变量，其值为另一个变量的地址。</p><p><strong>指针定义：</strong></p><pre><code>int *p;           // 指向 int 的指针\ndouble *d;        // 指向 double 的指针\nchar *c;          // 指向 char 的指针\nvoid *v;          // 通用指针，可指向任何类型</code></pre><p><strong>取地址与解引用：</strong></p><pre><code>int a = 10;\nint *p = &amp;a;      // &amp; 取地址运算符，p 存储 a 的地址\n\n// p 的值是 a 的地址\n// *p 是解引用，访问 p 指向的值\n\n*p = 20;          // 通过指针修改 a 的值\ncout &lt;&lt; a;        // 输出 20\ncout &lt;&lt; *p;       // 输出 20\ncout &lt;&lt; p;        // 输出地址（如 0x7fff5fbff6ac）\ncout &lt;&lt; &amp;a;       // 输出相同的地址</code></pre><p><strong>空指针：</strong></p><pre><code>int *p1 = NULL;           // C 风格\nint *p2 = nullptr;        // C++11 推荐\nint *p3 = 0;              // 也可以\n\nif (p1 != nullptr) {      // 检查指针是否为空\n    cout &lt;&lt; *p1;          // 解引用空指针会导致程序崩溃！\n}</code></pre><p><strong>野指针：</strong>未初始化或已释放的指针，指向不确定的内存。</p><pre><code>int *p;           // 野指针，未初始化\n*p = 10;          // 危险！可能崩溃\n\ndelete p;         // p 变成悬空指针\n*p = 20;          // 危险！未定义行为\n\n// 解决：初始化或释放后立即置空\nint *p = nullptr;\np = new int(10);\ndelete p;\np = nullptr;      // 防止野指针</code></pre>' },
          { id: 's2', title: '指针运算与数组', html: '<p><strong>指针运算：</strong></p><pre><code>int a = 10;\nint *p = &amp;a;\n\np++;              // 指针向前移动一个 int 的大小（通常是 4 字节）\np--;              // 指针向后移动\np + 5;            // 指针向前移动 5 个元素\np - 2;            // 指针向后移动 2 个元素</code></pre><p><strong>指针与数组的关系：</strong></p><pre><code>int arr[5] = {1, 2, 3, 4, 5};\nint *p = arr;     // 数组名是指向首元素的指针常量\n\n// 以下等价\ncout &lt;&lt; arr[0];   // 1\ncout &lt;&lt; *p;       // 1\ncout &lt;&lt; *(p + 2); // 3\ncout &lt;&lt; p[2];     // 3\n\n// 遍历数组\nfor (int i = 0; i &lt; 5; i++) {\n    cout &lt;&lt; *(p + i) &lt;&lt; " ";  // 或 p[i]\n}</code></pre><p><strong>指针相减：</strong>得到两个指针之间的元素个数</p><pre><code>int arr[] = {1, 2, 3, 4, 5};\nint *p1 = &amp;arr[1];\nint *p2 = &amp;arr[4];\nint diff = p2 - p1;  // diff = 3</code></pre><p><strong>指针数组与数组指针：</strong></p><pre><code>int *p1[5];         // 指针数组：包含 5 个 int 指针的数组\nint (*p2)[5];       // 数组指针：指向包含 5 个 int 的数组的指针</code></pre>' },
          { id: 's3', title: '引用与对比', html: '<p><strong>引用（Reference）：</strong>变量的别名</p><pre><code>int a = 10;\nint &amp;ref = a;       // ref 是 a 的引用（别名）\n\nref = 20;           // 修改 ref 就是修改 a\ncout &lt;&lt; a;          // 输出 20\n\n// 引用必须初始化\nint &amp;ref2;          // 错误！引用必须初始化\n\n// 引用初始化后不能改指向其他变量\nint b = 30;\nref = b;            // 这是赋值，不是改指向，a 变成 30</code></pre><p><strong>引用 vs 指针：</strong></p><table style="width:100%;border-collapse:collapse;"><tr style="background:#f0f0f0;"><th style="border:1px solid #ddd;padding:8px;">特性</th><th style="border:1px solid #ddd;padding:8px;">指针</th><th style="border:1px solid #ddd;padding:8px;">引用</th></tr><tr><td style="border:1px solid #ddd;padding:8px;">本质</td><td style="border:1px solid #ddd;padding:8px;">存储地址的变量</td><td style="border:1px solid #ddd;padding:8px;">变量的别名</td></tr><tr><td style="border:1px solid #ddd;padding:8px;">初始化</td><td style="border:1px solid #ddd;padding:8px;">可以不初始化</td><td style="border:1px solid #ddd;padding:8px;">必须初始化</td></tr><tr><td style="border:1px solid #ddd;padding:8px;">可变性</td><td style="border:1px solid #ddd;padding:8px;">可以改变指向</td><td style="border:1px solid #ddd;padding:8px;">不能改指向</td></tr><tr><td style="border:1px solid #ddd;padding:8px;">空值</td><td style="border:1px solid #ddd;padding:8px;">可以为 NULL</td><td style="border:1px solid #ddd;padding:8px;">不能为空</td></tr><tr><td style="border:1px solid #ddd;padding:8px;">访问方式</td><td style="border:1px solid #ddd;padding:8px;">需要解引用 *</td><td style="border:1px solid #ddd;padding:8px;">直接使用</td></tr><tr><td style="border:1px solid #ddd;padding:8px;">sizeof</td><td style="border:1px solid #ddd;padding:8px;">指针大小（4 或 8）</td><td style="border:1px solid #ddd;padding:8px;">被引用变量大小</td></tr></table><p><strong>使用建议：</strong></p><ul><li>需要重新指向或可能为空：用指针</li><li>不需要改变指向且不为空：用引用（更安全、更方便）</li><li>函数参数传递大对象：用引用避免拷贝</li></ul><p><strong>常量引用：</strong></p><pre><code>const int &amp;ref = a;  // 不能通过 ref 修改 a\nref = 20;            // 错误！常量引用不能修改</code></pre>' }
        ],
        refs: [REFS.runoob, REFS.cppref]
      }
    },
    {
      title: '输入输出与数据结构',
      brief: 'cin/cout、文件流与结构体。',
      q: [
        { stem: 'cin >> x; 中 >> 的作用是：', options: ['从输入流提取数据到 x', '比较大小', '右移运算', '输出 x'], answer: 0, explain: '>> 是提取运算符，从 cin 读取输入存入变量。' },
        { stem: 'struct 与 class 的默认访问权限区别是：', options: ['struct 默认 public，class 默认 private', '没有区别', 'struct 默认 private', 'class 不能继承'], answer: 0, explain: 'struct 成员默认 public，class 默认 private，其他方面基本相同。' },
        { stem: '定义结构体变量时能否省略 struct 关键字？', options: ['C++ 中可以，C 中不行', '都不能', '都可以', '取决于编译器'], answer: 0, explain: 'C++ 中 struct 定义后可以直接用名字定义变量，C 中需要 struct 关键字。' }
      ],
      doc: {
        lead: '这一关讲解输入输出和自定义数据结构。',
        sections: [
          { id: 's1', title: '标准输入输出', html: '<p>cout 输出：<code>cout &lt;&lt; "Value: " &lt;&lt; x &lt;&lt; endl;</code></p><p>cin 输入：<code>cin &gt;&gt; x;</code></p><p>cerr 错误输出（不缓冲），clog 日志输出（缓冲）。</p>' },
          { id: 's2', title: '文件流', html: '<p>#include &lt;fstream&gt;</p><pre><code>ofstream outFile("test.txt");  // 写文件\noutFile &lt;&lt; "Hello";\noutFile.close();\n\nifstream inFile("test.txt");   // 读文件\nstring line;\ngetline(inFile, line);</code></pre>' },
          { id: 's3', title: '结构体', html: '<p>定义结构体：</p><pre><code>struct Student {\n    string name;\n    int age;\n    float score;\n};\n\nStudent s1 = {"Alice", 20, 95.5};\nStudent s2;\ns2.name = "Bob";</code></pre><p>结构体数组、结构体指针、结构体作为函数参数。</p>' }
        ],
        refs: [REFS.runoob]
      }
    },
    /* ========== 第二部分：面向对象编程（4 关） ========== */
    {
      title: '类与对象',
      brief: '类的定义、对象、构造函数与析构函数。',
      q: [
        { stem: 'C++ 中实现封装主要依靠：', options: ['类的访问限定符（public/private/protected）', '全局变量', '宏定义', '头文件'], answer: 0, explain: '封装通过把数据与操作放在类中并限定访问权限实现。' },
        { stem: '构造函数的作用是：', options: ['创建对象时初始化对象状态', '释放对象资源', '拷贝对象地址', '声明对象类型'], answer: 0, explain: '构造函数在对象创建时自动调用，用于初始化成员。' },
        { stem: '析构函数在何时被调用：', options: ['对象生命周期结束时', '对象创建时', '调用 new 时', '程序编译时'], answer: 0, explain: '对象离开作用域或被 delete 时自动调用析构函数释放资源。' }
      ],
      doc: {
        lead: '这一关从「写函数」过渡到「设计类」。',
        sections: [
          { id: 's1', title: '类的定义', html: '<p>类把数据与成员函数组织在一起：</p><pre><code>class Box {\nprivate:\n    double length, width, height;\npublic:\n    void setDimensions(double l, double w, double h) {\n        length = l; width = w; height = h;\n    }\n    double volume() {\n        return length * width * height;\n    }\n};</code></pre>' },
          { id: 's2', title: '构造函数与析构函数', html: '<p>构造函数：与类同名，无返回类型，可重载。</p><pre><code>Box() { length = width = height = 0; }  // 默认构造\nBox(double l, double w, double h) { ... }  // 参数构造</code></pre><p>析构函数：~类名，无参数无返回，对象销毁时调用。</p><pre><code>~Box() { cout &lt;&lt; "Destroyed"; }</code></pre>' },
          { id: 's3', title: 'this 指针与拷贝构造', html: '<p>this 指针指向当前对象，用于区分成员变量和参数同名。</p><p>拷贝构造函数：<code>Box(const Box &b)</code>，用已有对象初始化新对象。</p><p>浅拷贝 vs 深拷贝：涉及动态内存时需要深拷贝。</p>' }
        ],
        refs: [REFS.runoob, REFS.cppref]
      }
    },
    {
      title: '继承',
      brief: '派生类、访问控制与继承方式。',
      q: [
        { stem: 'C++ 支持的继承方式有：', options: ['public、protected、private 继承', '只有 public 继承', '单继承和多继承', '以上都是'], answer: 3, explain: 'C++ 支持三种继承方式和多继承。' },
        { stem: '派生类能否访问基类的 private 成员？', options: ['不能直接访问', '可以直接访问', '通过 protected 访问', '只能读不能写'], answer: 0, explain: 'private 成员只能被基类成员函数访问，派生类需通过 public/protected 接口。' },
        { stem: '构造派生类对象时，构造函数的调用顺序是：', options: ['先基类后派生', '先派生后基类', '只调用派生类', '随机顺序'], answer: 0, explain: '先调用基类构造函数初始化基类部分，再调用派生类构造函数。' }
      ],
      doc: {
        lead: '这一关讲解继承机制，实现代码复用。',
        sections: [
          { id: 's1', title: '继承基础', html: '<p>派生类继承基类成员：</p><pre><code>class Shape {\nprotected:\n    int width, height;\npublic:\n    void setWidth(int w) { width = w; }\n};\n\nclass Rectangle : public Shape {\npublic:\n    int area() { return width * height; }\n};</code></pre>' },
          { id: 's2', title: '继承方式', html: '<p>public 继承：基类 public→派生类 public，protected→protected</p><p>protected 继承：基类 public/protected→派生类 protected</p><p>private 继承：基类 public/protected→派生类 private</p><p>最常用的是 public 继承，表示"是一个"的关系。</p>' },
          { id: 's3', title: '多继承与虚继承', html: '<p>多继承：派生类有多个基类。</p><pre><code>class C : public A, public B { ... };</code></pre><p>菱形继承问题：用虚继承解决二义性。</p><pre><code>class B : virtual public A { };</code></pre>' }
        ],
        refs: [REFS.runoob]
      }
    },
    {
      title: '多态与重载',
      brief: '虚函数、纯虚函数、函数重载与运算符重载。',
      q: [
        { stem: '实现运行时多态必须满足：', options: ['基类虚函数 + 通过指针或引用调用', '函数重载即可', '使用 static 成员', '把构造函数设为虚函数'], answer: 0, explain: '虚函数配合基类指针/引用调用才能触发动态绑定。' },
        { stem: '纯虚函数的作用是：', options: ['定义接口并强制派生类实现', '提高运行速度', '禁止继承', '自动生成代码'], answer: 0, explain: '含纯虚函数的类是抽象类，派生类必须实现该接口。' },
        { stem: '函数重载（overload）要求：', options: ['函数名相同，参数列表不同', '返回值类型不同', '参数名不同', '函数体不同'], answer: 0, explain: '重载要求函数名相同，参数个数或类型不同，与返回值无关。' }
      ],
      doc: {
        lead: '这一关是 C++ 面向对象设计的核心。',
        sections: [
          { id: 's1', title: '虚函数与多态', html: '<p>虚函数实现动态绑定：</p><pre><code>class Base {\npublic:\n    virtual void show() { cout &lt;&lt; "Base"; }\n};\nclass Derived : public Base {\npublic:\n    void show() override { cout &lt;&lt; "Derived"; }\n};\n\nBase *p = new Derived();\np->show();  // 输出 Derived</code></pre>' },
          { id: 's2', title: '纯虚函数与抽象类', html: '<p>纯虚函数：<code>virtual void func() = 0;</code></p><p>含纯虚函数的类是抽象类，不能实例化，只能被继承。</p><p>抽象类用于定义接口，强制派生类实现特定方法。</p>' },
          { id: 's3', title: '重载', html: '<p>函数重载：同名函数参数列表不同。</p><p>运算符重载：让运算符对用户自定义类型有意义。</p><pre><code>class Complex {\n    double real, imag;\npublic:\n    Complex operator+(const Complex &other) {\n        return {real + other.real, imag + other.imag};\n    }\n};</code></pre>' }
        ],
        refs: [REFS.runoob, REFS.cppref]
      }
    },
    {
      title: '数据抽象与封装',
      brief: '访问控制、数据隐藏与接口设计。',
      q: [
        { stem: '数据抽象的核心思想是：', options: ['对外提供接口，隐藏实现细节', '所有成员都公开', '不使用类', '只使用全局变量'], answer: 0, explain: '数据抽象通过公开接口、隐藏实现来降低耦合。' },
        { stem: 'public 成员的特点是：', options: ['可以被任何代码访问', '只能被类内部访问', '只能被派生类访问', '不能被访问'], answer: 0, explain: 'public 成员对外完全可见，是类的接口。' },
        { stem: '封装的好处不包括：', options: ['提高运行速度', '隐藏实现细节', '提高代码可维护性', '降低耦合'], answer: 0, explain: '封装主要提高可维护性和降低耦合，不直接提高运行速度。' }
      ],
      doc: {
        lead: '这一关讲解面向对象的设计原则。',
        sections: [
          { id: 's1', title: '数据抽象', html: '<p>数据抽象：只暴露必要的接口，隐藏内部实现。</p><p>抽象类定义接口，具体类实现细节。用户只需知道"能做什么"，不必知道"怎么做"。</p>' },
          { id: 's2', title: '访问控制', html: '<p>三种访问限定符：</p><ul><li>public：对外接口，任何代码可访问</li><li>private：内部实现，只有类成员函数可访问</li><li>protected：类似 private，但派生类可访问</li></ul><p>默认情况下，class 是 private，struct 是 public。</p>' },
          { id: 's3', title: '设计原则', html: '<p>高内聚低耦合：类的职责单一，接口清晰。</p><p>信息隐藏：通过 private 保护数据，通过 public 提供操作。</p><p>接口与实现分离：头文件声明接口，源文件实现细节。</p>' }
        ],
        refs: [REFS.runoob]
      }
    },
    /* ========== 第三部分：高级主题（4 关） ========== */
    {
      title: '模板与泛型编程',
      brief: '函数模板、类模板与模板特化。',
      q: [
        { stem: '模板的主要作用是：', options: ['实现与类型无关的泛型代码', '加快编译速度', '减少内存占用', '替代继承'], answer: 0, explain: '模板把类型参数化，一份代码适配多种类型。' },
        { stem: '类模板实例化时需要：', options: ['显式指定模板参数类型', '自动推断类型', '不需要参数', '只能用于 int'], answer: 0, explain: '类模板必须显式指定类型参数，如 <code>MyClass&lt;int&gt; obj;</code>' },
        { stem: '模板特化的作用是：', options: ['为特定类型提供专门实现', '禁止使用模板', '提高编译速度', '减少代码量'], answer: 0, explain: '特化为某些特殊类型提供优化或不同的实现。' }
      ],
      doc: {
        lead: '这一关讲解泛型编程的核心工具——模板。',
        sections: [
          { id: 's1', title: '函数模板', html: '<pre><code>template &lt;typename T&gt;\nT max(T a, T b) {\n    return (a &gt; b) ? a : b;\n}\n\nmax(10, 20);       // int\nmax(3.14, 2.71);   // double</code></pre><p>编译器根据实参类型自动实例化。</p>' },
          { id: 's2', title: '类模板', html: '<pre><code>template &lt;class T&gt;\nclass Stack {\nprivate:\n    vector&lt;T&gt; elements;\npublic:\n    void push(const T &amp;e) { elements.push_back(e); }\n    T pop() { ... }\n};\n\nStack&lt;int&gt; s;\ns.push(100);</code></pre>' },
          { id: 's3', title: '模板特化', html: '<p>全特化：为特定类型提供实现。</p><pre><code>template &lt;&gt;\nclass MyClass&lt;char&gt; {\n    // char 类型的专门实现\n};</code></pre><p>偏特化：对部分参数特化。</p><p>模板是 STL 的基础，理解模板才能用好容器和算法。</p>' }
        ],
        refs: [REFS.runoob, REFS.cppref]
      }
    },
    {
      title: 'STL 标准模板库',
      brief: '容器、迭代器与常用算法。',
      q: [
        { stem: '下列容器中查找平均时间复杂度为常数级的是：', options: ['unordered_map', 'vector', 'list', 'set'], answer: 0, explain: 'unordered_map 基于哈希表，平均 O(1)；set 为 O(log n)，vector/list 查找为 O(n)。' },
        { stem: 'vector 在尾部频繁插入但偶尔扩容时，均摊复杂度为：', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'], answer: 0, explain: '扩容按倍数增长，均摊后尾部插入为 O(1)。' },
        { stem: '迭代器的作用是：', options: ['遍历容器元素，类似指针', '排序容器', '查找最大值', '删除容器'], answer: 0, explain: '迭代器提供统一的遍历接口，连接容器和算法。' }
      ],
      doc: {
        lead: '这一关把 C++ 用到能写工程代码。',
        sections: [
          { id: 's1', title: '容器', html: '<p>序列容器：vector（动态数组）、deque（双端队列）、list（双向链表）</p><p>关联容器：map/set（红黑树，有序）、unordered_map/set（哈希，无序）</p><p>容器适配器：stack（栈）、queue（队列）、priority_queue（优先队列）</p>' },
          { id: 's2', title: '迭代器', html: '<p>迭代器类似指针，提供遍历接口：</p><pre><code>vector&lt;int&gt; v = {1, 2, 3};\nfor (auto it = v.begin(); it != v.end(); ++it) {\n    cout &lt;&lt; *it &lt;&lt; " ";\n}\n// C++11 范围 for\nfor (int x : v) cout &lt;&lt; x &lt;&lt; " ";</code></pre>' },
          { id: 's3', title: '算法', html: '<p>#include &lt;algorithm&gt;</p><p>常用算法：sort、find、binary_search、lower_bound、upper_bound、min、max、swap、reverse、unique</p><pre><code>vector&lt;int&gt; v = {3, 1, 4, 1, 5};\nsort(v.begin(), v.end());  // 排序\nauto it = find(v.begin(), v.end(), 4);  // 查找</code></pre>' }
        ],
        refs: [REFS.runoob, REFS.cppref]
      }
    },
    {
      title: '异常处理与动态内存',
      brief: 'try-catch、new-delete 与内存管理。',
      q: [
        { stem: 'C++ 异常处理的关键字是：', options: ['try-catch-throw', 'if-else', 'switch-case', 'begin-end'], answer: 0, explain: 'try 块包含可能异常的代码，catch 捕获异常，throw 抛出异常。' },
        { stem: 'new 运算符的作用是：', options: ['动态分配内存并返回指针', '释放内存', '定义变量', '创建数组'], answer: 0, explain: 'new 在堆上分配内存，返回指向内存的指针。' },
        { stem: '使用 new 分配的内存必须用_____释放：', options: ['delete', 'free', '不需要释放', 'return'], answer: 0, explain: 'new/delete 配对，malloc/free 配对，不能混用。' }
      ],
      doc: {
        lead: '这一关讲解错误处理和内存管理。',
        sections: [
          { id: 's1', title: '异常处理', html: '<pre><code>try {\n    if (x &lt; 0) throw "Negative value";\n    // 可能异常的代码\n} catch (const char* msg) {\n    cerr &lt;&lt; "Error: " &lt;&lt; msg &lt;&lt; endl;\n} catch (...) {\n    // 捕获所有异常\n}</code></pre><p>异常会沿调用栈向上传播，直到被捕获。</p>' },
          { id: 's2', title: '动态内存', html: '<p>new 分配内存，delete 释放：</p><pre><code>int *p = new int;       // 单个对象\n*p = 100;\ndelete p;               // 释放\n\nint *arr = new int[10]; // 数组\ndelete[] arr;           // 释放数组</code></pre><p>忘记释放会导致内存泄漏。</p>' },
          { id: 's3', title: '智能指针', html: '<p>C++11 引入智能指针自动管理内存：</p><ul><li>unique_ptr：独占所有权，不能拷贝</li><li>shared_ptr：共享所有权，引用计数</li><li>weak_ptr：弱引用，不增加计数</li></ul><pre><code>#include &lt;memory&gt;\nunique_ptr&lt;int&gt; p(new int(10));\nauto p2 = make_shared&lt;int&gt;(20);</code></pre>' }
        ],
        refs: [REFS.runoob, REFS.cppref]
      }
    },
    {
      title: '文件流与预处理器',
      brief: '文件读写、预处理指令与宏定义。',
      q: [
        { stem: 'ifstream 用于：', options: ['从文件读取数据', '向文件写入数据', '读写文件', '标准输入'], answer: 0, explain: 'ifstream 输入文件流，用于读取文件；ofstream 用于写入。' },
        { stem: '#define MAX 100 中 MAX 是：', options: ['宏，预处理时替换为 100', '变量', '常量', '函数'], answer: 0, explain: '#define 定义宏，预处理阶段进行字符串替换。' },
        { stem: '#ifdef 的作用是：', options: ['判断宏是否已定义', '定义宏', '取消宏定义', '包含头文件'], answer: 0, explain: '#ifdef 条件编译，如果宏已定义则编译相应代码。' }
      ],
      doc: {
        lead: '这一关讲解文件操作和预处理。',
        sections: [
          { id: 's1', title: '文件流', html: '<p>#include &lt;fstream&gt;</p><pre><code>// 写文件\nofstream out("data.txt");\nout &lt;&lt; "Hello World" &lt;&lt; endl;\nout.close();\n\n// 读文件\nifstream in("data.txt");\nstring line;\nwhile (getline(in, line)) {\n    cout &lt;&lt; line &lt;&lt; endl;\n}</code></pre>' },
          { id: 's2', title: '预处理指令', html: '<p>常用预处理指令：</p><ul><li>#include：包含头文件</li><li>#define：定义宏</li><li>#ifdef/#ifndef/#endif：条件编译</li><li>#pragma：编译器特定指令</li></ul><p>宏定义注意加括号：<code>#define SQUARE(x) ((x)*(x))</code></p>' },
          { id: 's3', title: '条件编译', html: '<p>用于调试或跨平台：</p><pre><code>#ifdef DEBUG\n    cout &lt;&lt; "Debug mode" &lt;&lt; endl;\n#endif\n\n#ifndef MAX_SIZE\n    #define MAX_SIZE 100\n#endif</code></pre><p>头文件保护（防止重复包含）：</p><pre><code>#ifndef MYHEADER_H\n#define MYHEADER_H\n// 头文件内容\n#endif</code></pre>' }
        ],
        refs: [REFS.runoob]
      }
    }
  ];

  // 替换原有的 C++ 课程
  ov[0].modules.forEach(function (m) {
    if (m.name === '面向对象程序设计（C++）') {
      m.levels = CPP_LEVELS;
    }
  });

  // 同时更新软件工程专业
  var SE_MAJOR = 'engineering-软件工程';
  var se_ov = MAJOR_STAGE_OVERRIDES[SE_MAJOR];
  if (se_ov && se_ov[0]) {
    se_ov[0].modules.forEach(function (m) {
      if (m.name === '面向对象程序设计（C++）') {
        m.levels = CPP_LEVELS;
      }
    });
  }
})();
