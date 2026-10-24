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
      brief: 'C++ 简介、开发环境与第一个程序。',
      q: [
        { stem: 'C++ 程序从哪个函数开始执行？', options: ['main()', 'start()', 'begin()', 'init()'], answer: 0, explain: 'C++ 程序从 main() 函数开始执行，返回整数状态码。' },
        { stem: '#include <iostream> 的作用是：', options: ['引入标准输入输出流库', '定义主函数', '声明命名空间', '编译程序'], answer: 0, explain: '#include <iostream> 引入标准输入输出流库，提供 cin、cout 等。' },
        { stem: 'cout << "Hello" << endl; 中 endl 的作用是：', options: ['输出换行并刷新缓冲区', '仅输出换行', '结束程序', '定义变量'], answer: 0, explain: 'endl 输出换行符并立即刷新缓冲区，\\n 只换行不刷新。' }
      ],
      doc: {
        lead: '这一关带你认识 C++ 并写出第一个程序。',
        sections: [
          { id: 's1', title: 'C++ 简介', html: '<p>C++ 是一种静态类型的、编译式的、通用的编程语言，由 Bjarne Stroustrup 于 1979 年在贝尔实验室设计开发。它支持过程化编程、面向对象编程和泛型编程，是一种中级语言，综合了高级语言和低级语言的特点。</p><p>C++ 是 C 的超集，任何合法的 C 程序都是合法的 C++ 程序。主要应用于游戏开发（Unreal Engine）、嵌入式系统、金融高频交易、图形图像处理等领域。</p>' },
          { id: 's2', title: '开发环境', html: '<p>开发 C++ 需要文本编辑器和编译器。常用编辑器包括 Visual Studio Code、Visual Studio、Vim、Emacs、Eclipse。最常用的免费编译器是 GNU 的 GCC（g++）。</p><p>编译命令：<code>g++ hello.cpp -o hello</code>，常用选项：<code>-g</code>（调试信息）、<code>-Wall</code>（所有警告）、<code>-std=c++11</code>（指定标准）。</p>' },
          { id: 's3', title: 'Hello World', html: '<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    cout &lt;&lt; "Hello, World!" &lt;&lt; endl;\n    return 0;\n}</code></pre><p>程序结构：#include 引入头文件，using namespace std 使用标准命名空间，main() 是程序入口，cout 输出，return 0 结束程序。</p>' }
        ],
        refs: [REFS.runoob, REFS.cppref]
      }
    },
    {
      title: '基本语法与注释',
      brief: '程序结构、标识符、关键字与注释。',
      q: [
        { stem: 'C++ 中单行注释使用：', options: ['//', '/* */', '#', '--'], answer: 0, explain: '// 用于单行注释，/* */ 用于多行注释。' },
        { stem: '下列哪个是合法的 C++ 标识符？', options: ['_value', '2name', 'my-var', 'class'], answer: 0, explain: '标识符以字母或下划线开头，不能以数字开头，不能使用关键字。' },
        { stem: 'C++ 语句的结束符是：', options: ['分号 ;', '句号 .', '逗号 ,', '换行'], answer: 0, explain: 'C++ 中每个语句必须以分号结束。' }
      ],
      doc: {
        lead: '这一关讲解 C++ 的基本语法规则。',
        sections: [
          { id: 's1', title: '程序结构', html: '<p>C++ 程序可以定义为对象的集合，对象通过调用方法交互。基本概念：对象（Object）、类（Class）、方法（Method）、即时变量（Instance Variable）。</p><p>分号 ; 是语句结束符，大括号 {} 定义语句块。</p>' },
          { id: 's2', title: '标识符与关键字', html: '<p>标识符命名规则：以字母 A-Z、a-z 或下划线 _ 开头，后跟字母、下划线或数字。C++ 区分大小写。</p><p>关键字（保留字）不能用作标识符，如 int、class、return、if、for 等。</p>' },
          { id: 's3', title: '注释', html: '<p>单行注释：<code>// 注释内容</code></p><p>多行注释：<code>/* 注释内容 */</code>，注意多行注释不能嵌套。</p><p>条件编译注释：<code>#if 0 ... #endif</code> 可嵌套，适合注释大段代码。</p>' }
        ],
        refs: [REFS.runoob]
      }
    },
    {
      title: '数据类型',
      brief: '基本类型、类型修饰符与类型转换。',
      q: [
        { stem: 'int 类型在 64 位系统中通常占多少字节？', options: ['4 字节', '8 字节', '2 字节', '1 字节'], answer: 0, explain: 'int 在大多数现代系统中占 4 字节（32 位）。' },
        { stem: '下列哪种类型用于存储布尔值？', options: ['bool', 'int', 'char', 'float'], answer: 0, explain: 'bool 类型只能取 true 或 false 两个值。' },
        { stem: 'static_cast<int>(3.14) 的结果是：', options: ['3', '3.14', '4', '编译错误'], answer: 0, explain: 'static_cast 进行显式类型转换，浮点转整数直接截断小数部分。' }
      ],
      doc: {
        lead: '这一关详细介绍 C++ 的数据类型系统。',
        sections: [
          { id: 's1', title: '基本内置类型', html: '<p>七种基本类型：bool（布尔）、char（字符）、int（整数）、float（单精度浮点）、double（双精度浮点）、void（无类型）、wchar_t（宽字符）。</p><p>C++11 新增：auto（自动类型推断）、decltype（获取表达式类型）、nullptr（空指针）、long long（长长整型）。</p>' },
          { id: 's2', title: '类型大小与范围', html: '<ul><li>char: 1 字节，-128~127</li><li>short: 2 字节，-32768~32767</li><li>int: 4 字节，-2^31~2^31-1</li><li>long: 4 或 8 字节（平台相关）</li><li>long long: 8 字节</li><li>float: 4 字节，6-7 位有效数字</li><li>double: 8 字节，15 位有效数字</li></ul>' },
          { id: 's3', title: '类型转换', html: '<p>四种显式类型转换：</p><ul><li><code>static_cast&lt;T&gt;(expr)</code>：相关类型间转换，编译时检查</li><li><code>dynamic_cast&lt;T&gt;(expr)</code>：继承层次向下转换，运行时检查</li><li><code>const_cast&lt;T&gt;(expr)</code>：去除 const 属性</li><li><code>reinterpret_cast&lt;T&gt;(expr)</code>：低级别按位重新解释，最不安全</li></ul>' }
        ],
        refs: [REFS.runoob, REFS.cppref]
      }
    },
    {
      title: '变量与常量',
      brief: '变量定义、作用域、初始化与常量。',
      q: [
        { stem: '局部变量未初始化时其值是：', options: ['未定义的（垃圾值）', '0', 'NULL', '编译错误'], answer: 0, explain: '局部自动变量不会自动初始化，值是未定义的。' },
        { stem: 'const int N = 10; 中 N 能否被修改？', options: ['不能', '能', '只能增加', '只能减少'], answer: 0, explain: 'const 定义的常量值不能被修改，定义时必须初始化。' },
        { stem: '#define 与 const 的主要区别是：', options: ['#define 无类型检查，const 有', '#define 有作用域，const 没有', '#define 分配内存，const 不分配', '没有区别'], answer: 0, explain: '#define 是预处理指令，纯字符串替换无类型检查；const 有类型且编译时检查。' }
      ],
      doc: {
        lead: '这一关讲解变量的定义、作用域和常量的使用。',
        sections: [
          { id: 's1', title: '变量定义与初始化', html: '<p>变量定义：<code>type variable_name = value;</code></p><p>变量声明（extern）不分配内存：<code>extern int a;</code></p><p>左值（lvalue）指向内存位置，可被赋值；右值（rvalue）是数值，只能出现在赋值号右边。</p>' },
          { id: 's2', title: '变量作用域', html: '<p>四种作用域：</p><ul><li>局部作用域：函数内部，函数调用时创建</li><li>全局作用域：所有函数外部，程序全程存在</li><li>块作用域：{} 内部</li><li>类作用域：类内部</li></ul><p>内部作用域变量会隐藏外部同名变量。全局变量默认为 0，局部变量不会自动初始化。</p>' },
          { id: 's3', title: '常量', html: '<p>两种定义方式：</p><ul><li><code>#define LENGTH 10</code>：预处理替换，无类型检查，不要加分号</li><li><code>const int LENGTH = 10;</code>：有类型检查，可调试</li></ul><p>const 修饰指针：<code>const int *p</code>（指向常量）、<code>int * const p</code>（常量指针）。</p>' }
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
      brief: '算术、关系、逻辑、位运算与优先级。',
      q: [
        { stem: 'C++ 中 sizeof 是：', options: ['运算符', '函数', '关键字', '宏'], answer: 0, explain: 'sizeof 是运算符，在编译时计算类型或变量占用的字节数。' },
        { stem: 'a++ 与 ++a 的区别是：', options: ['a++ 先使用再加，++a 先加再使用', '没有区别', 'a++ 更快', '++a 语法错误'], answer: 0, explain: 'a++ 是后缀自增，先用后加；++a 是前缀自增，先加后用。' },
        { stem: '逻辑与 && 的短路特性是指：', options: ['左边为假时不计算右边', '左边为真时不计算右边', '两边同时计算', '只计算一边'], answer: 0, explain: '&& 短路：左边为假则整体为假，不再计算右边；|| 短路：左边为真则整体为真。' }
      ],
      doc: {
        lead: '这一关全面介绍 C++ 的运算符。',
        sections: [
          { id: 's1', title: '算术与关系运算符', html: '<p>算术运算符：+ - * / % ++ --</p><p>关系运算符：== != > < >= <=</p><p>注意整数除法：7/2 = 3（截断小数），7/2.0 = 3.5</p>' },
          { id: 's2', title: '逻辑与位运算符', html: '<p>逻辑运算符：&&（与）、||（或）、!（非）</p><p>位运算符：&（按位与）、|（按位或）、^（异或）、~（取反）、<<（左移）、>>（右移）</p><p>三元运算符：<code>condition ? expr1 : expr2</code></p>' },
          { id: 's3', title: '运算符优先级', html: '<p>优先级从高到低：括号 () > 一元运算符 > 算术运算符 > 关系运算符 > 逻辑运算符 > 赋值运算符</p><p>建议多用括号明确优先级，避免歧义。</p>' }
        ],
        refs: [REFS.runoob]
      }
    },
    {
      title: '循环与判断',
      brief: 'for、while、do-while 与条件语句。',
      q: [
        { stem: 'while 循环与 do-while 循环的区别是：', options: ['do-while 至少执行一次循环体', 'while 至少执行一次', '没有区别', 'do-while 不能用 break'], answer: 0, explain: 'do-while 先执行循环体再判断条件，至少执行一次。' },
        { stem: 'break 语句的作用是：', options: ['跳出当前循环或 switch', '结束程序', '跳过本次循环', '继续下一次循环'], answer: 0, explain: 'break 跳出最近的循环或 switch；continue 跳过本次循环剩余部分。' },
        { stem: 'switch 语句中 default 分支的作用是：', options: ['处理所有 case 都不匹配的情况', '必须存在', '提高运行速度', '没有作用'], answer: 0, explain: 'default 是可选的，处理所有 case 都不匹配的情况。' }
      ],
      doc: {
        lead: '这一关讲解控制流程：循环和条件判断。',
        sections: [
          { id: 's1', title: '循环语句', html: '<p>三种循环：</p><ul><li><code>for (init; condition; increment) { body }</code>：适合已知次数</li><li><code>while (condition) { body }</code>：适合未知次数</li><li><code>do { body } while (condition);</code>：至少执行一次</li></ul><p>break 跳出循环，continue 跳过本次，goto 跳转到标签（不推荐）。</p>' },
          { id: 's2', title: '条件判断', html: '<p>if-else 语句：</p><pre><code>if (condition1) {\n    // ...\n} else if (condition2) {\n    // ...\n} else {\n    // ...\n}</code></pre><p>switch 语句：多分支选择，每个 case 后通常要 break。</p>' },
          { id: 's3', title: '嵌套循环与模式', html: '<p>循环可以嵌套，常用于处理二维数组、打印图案等。</p><p>常见模式：累加、计数、查找最大值/最小值、判断素数、斐波那契数列。</p>' }
        ],
        refs: [REFS.runoob]
      }
    },
    {
      title: '函数',
      brief: '函数定义、参数传递、重载与递归。',
      q: [
        { stem: '函数声明的作用是：', options: ['告诉编译器函数存在，可在定义前调用', '定义函数体', '分配内存', '没有作用'], answer: 0, explain: '函数声明（原型）让编译器知道函数签名，定义可以在后面。' },
        { stem: 'C++ 中函数参数默认传递方式是：', options: ['值传递', '引用传递', '指针传递', '地址传递'], answer: 0, explain: '默认是值传递，拷贝实参；可用引用 & 或指针 * 实现引用传递。' },
        { stem: '函数重载（overload）要求：', options: ['函数名相同，参数列表不同', '返回值类型不同', '参数名不同', '函数体不同'], answer: 0, explain: '重载要求函数名相同，参数个数或类型不同，与返回值无关。' }
      ],
      doc: {
        lead: '这一关讲解函数的定义和使用。',
        sections: [
          { id: 's1', title: '函数定义与声明', html: '<p>函数定义：</p><pre><code>return_type function_name(parameters) {\n    // 函数体\n    return value;\n}</code></pre><p>函数声明（原型）：<code>return_type function_name(parameters);</code></p><p>默认参数：<code>void func(int a, int b = 10);</code>，默认参数必须从右向左。</p>' },
          { id: 's2', title: '参数传递', html: '<p>三种方式：</p><ul><li>值传递：拷贝实参，函数内修改不影响实参</li><li>引用传递：<code>void swap(int &a, int &b)</code>，直接操作实参</li><li>指针传递：<code>void swap(int *a, int *b)</code>，通过地址操作</li></ul>' },
          { id: 's3', title: '重载与递归', html: '<p>函数重载：同名函数参数列表不同，编译器根据参数选择。</p><p>递归：函数调用自身，必须有终止条件。</p><pre><code>int factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}</code></pre>' }
        ],
        refs: [REFS.runoob, REFS.cppref]
      }
    },
    {
      title: '数组与字符串',
      brief: '一维数组、多维数组、字符串与 string 类。',
      q: [
        { stem: 'C++ 中数组下标从多少开始？', options: ['0', '1', '任意', '-1'], answer: 0, explain: 'C++ 数组下标从 0 开始，最大下标是 length-1。' },
        { stem: 'string 类与 C 风格字符串的区别是：', options: ['string 是类，功能更强大；C 字符串是字符数组', '没有区别', 'C 字符串更安全', 'string 不能修改'], answer: 0, explain: 'string 是 STL 类，支持动态长度和丰富的操作；C 字符串是 char 数组，以 \\0 结尾。' },
        { stem: '定义数组 int a[5]; 后，a[5] 是：', options: ['越界访问', '最后一个元素', '等于 0', '编译错误'], answer: 0, explain: '数组大小是 5，合法下标是 0-4，a[5] 越界但编译器不检查。' }
      ],
      doc: {
        lead: '这一关讲解数组和字符串的使用。',
        sections: [
          { id: 's1', title: '数组', html: '<p>一维数组定义：<code>int arr[5];</code> 或 <code>int arr[] = {1, 2, 3};</code></p><p>多维数组：<code>int matrix[3][4];</code></p><p>数组作为函数参数时退化为指针，需额外传递长度。</p>' },
          { id: 's2', title: 'C 风格字符串', html: '<p>字符数组：<code>char str[] = "Hello";</code>，自动添加 \\0 结尾。</p><p>常用函数（<cstring>）：strlen、strcpy、strcat、strcmp。</p><p>注意缓冲区溢出风险。</p>' },
          { id: 's3', title: 'string 类', html: '<p>#include &lt;string&gt;</p><pre><code>string s1 = "Hello";\nstring s2 = s1 + " World";  // 拼接\nint len = s1.length();      // 长度\ns1.substr(0, 3);            // 子串\ns1.find("ll");              // 查找</code></pre><p>string 支持动态增长，比 C 字符串更安全方便。</p>' }
        ],
        refs: [REFS.runoob]
      }
    },
    {
      title: '指针与引用',
      brief: '指针概念、指针运算、引用与指针引用区别。',
      q: [
        { stem: '指针存储的是：', options: ['变量的内存地址', '变量的值', '变量的类型', '变量名'], answer: 0, explain: '指针变量存储的是另一个变量的内存地址。' },
        { stem: 'NULL 指针的值是：', options: ['0', '1', '-1', '任意值'], answer: 0, explain: 'NULL 指针值为 0，表示不指向任何对象。C++11 推荐用 nullptr。' },
        { stem: '引用与指针的主要区别是：', options: ['引用必须初始化且不能改指向，指针可以', '没有区别', '引用更安全但更慢', '指针不能为 NULL'], answer: 0, explain: '引用是别名，必须初始化且不能重新绑定；指针可以改变指向，可以为 NULL。' }
      ],
      doc: {
        lead: '这一关深入讲解指针和引用的概念。',
        sections: [
          { id: 's1', title: '指针基础', html: '<p>指针定义：<code>int *p;</code>，p 存储 int 类型变量的地址。</p><p>取地址：<code>p = &a;</code>，解引用：<code>*p = 10;</code></p><p>空指针：<code>int *p = nullptr;</code>（C++11）或 <code>NULL</code>。</p>' },
          { id: 's2', title: '指针运算与数组', html: '<p>指针可以加减整数，表示向前/向后移动。</p><p>数组名是指向首元素的指针常量：<code>arr == &arr[0]</code></p><p>指针相减得到元素个数。</p>' },
          { id: 's3', title: '引用', html: '<p>引用是变量的别名：<code>int &ref = a;</code></p><p>引用必须初始化，初始化后不能改指向其他变量。</p><p>引用常用于函数参数和返回值，避免拷贝。</p><p>指针 vs 引用：指针可变可为空，引用必须初始化且不可变。</p>' }
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
