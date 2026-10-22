/* ==========================================================
   code-offline.js · C 语言代码任务的「离线判定」答案表
   ----------------------------------------------------------
   为什么要有这个文件：
     线上是纯静态托管 + 无编译环境的后端，不能在云端跑 gcc。
     所以代码任务改成两项「离线可判」的检查：
       ① 关键代码填空（accept 里是可以接受的写法，比较时会忽略空格/大小写）
       ② 运行结果预测（用关卡自带的 tests[0] 的 stdin/stdout 比对）
     两项都对，才算这一关的代码任务通过。

   想加新关卡：在下面按「关卡 code.task 原文」加一条即可。
   注意：accept 里的 \n 是 C 源码里的两个字符（反斜杠 + n），不要写成真换行。
   ========================================================== */
window.CODE_OFFLINE = {
  '用 printf 在屏幕上输出一行：Hello, C!': {
    blanks: [
      { q: '补上输出那一行（注意结尾换行）', accept: ['printf("Hello, C!\\n");'] }
    ]
  },

  '读入两个整数 a、b，依次输出它们的和、差、积、商、余数，每个结果占一行。': {
    blanks: [
      { q: '输出「商」的那一行', accept: ['printf("%d\\n", a / b);', 'printf("%d\\n", a/b);'] },
      { q: '输出「余数」的那一行', accept: ['printf("%d\\n", a % b);', 'printf("%d\\n", a%b);'] }
    ]
  },

  '读入一个整数 a 和一个小数 b，按「a=3 b=2.5」的格式输出，小数保留 1 位。': {
    blanks: [
      { q: '用 printf 一次输出这两个值', accept: ['printf("a=%d b=%.1f\\n", a, b);', 'printf("a=%d b=%.1f\\n",a,b);'] }
    ]
  },

  '读入一个整数成绩 score，及格（>= 60）输出 pass，否则输出 fail。': {
    blanks: [
      { q: '写判断条件那一行', accept: ['if (score >= 60)', 'if(score>=60)'] }
    ]
  },

  '读入成绩 score，按规则输出等级：>=90 输出 A，>=80 输出 B，>=70 输出 C，>=60 输出 D，其余输出 E。': {
    blanks: [
      { q: '从高到低写出四个分界值（用逗号或空格隔开）', accept: ['90,80,70,60', '90 80 70 60'] }
    ]
  },

  '读入正整数 n，输出 1 + 2 + ... + n 的和。': {
    blanks: [
      { q: '写累加的循环那一行', accept: ['for (int i = 1; i <= n; i++) sum += i;', 'for(int i=1;i<=n;i++) sum+=i;'] }
    ]
  },

  '读入正整数 n，输出 n 行星号三角形：第 1 行 1 个 *，第 2 行 2 个……以此类推。': {
    blanks: [
      { q: '写「每行打印 i 个星号」的内层循环', accept: ['for (int j = 0; j < i; j++) printf("*");', 'for(int j=1;j<=i;j++) printf("*");'] }
    ]
  },

  '先读入整数 n，再读入 n 个整数，输出其中的最大值。': {
    blanks: [
      { q: '写「发现更大的数就更新 max」那一行', accept: ['if (x > max) max = x;', 'if(x>max) max=x;'] }
    ]
  },

  '读入 n 和 n 个整数，输出它们的和与平均值（保留两位小数），格式：sum=10 avg=2.50。': {
    blanks: [
      { q: '写平均值那个表达式（注意整数除法问题）', accept: ['(double)sum / n', '(double)sum/n'] }
    ]
  },

  '读入一个不含空格的字符串（长度不超过 100），输出它的长度和反转后的字符串，格式：len=5 rev=olleh。': {
    blanks: [
      { q: '用哪个函数求字符串长度？（写出调用表达式）', accept: ['strlen(s)', 'strlen(s);'] }
    ]
  },

  '实现函数 int max(int a, int b) 返回较大值，读入两个整数并输出结果。': {
    blanks: [
      { q: '在这个函数里返回较大值', accept: ['return a > b ? a : b;', 'return a>b?a:b;', 'if (a > b) return a; return b;', 'if(a>b) return a; return b;'] }
    ]
  },

  '用递归实现阶乘：读入 n（0 <= n <= 12），输出 n!。': {
    blanks: [
      { q: '写递归的出口', accept: ['if (n == 0) return 1;', 'if(n==0) return 1;'] },
      { q: '写递推那一行', accept: ['return n * fact(n - 1);', 'return n * fact(n-1);'] }
    ]
  },

  '用指针实现交换函数 void swap(int *a, int *b)，读入两个整数，输出交换后的两个数（空格分隔）。': {
    blanks: [
      { q: '借助临时变量交换 *a 和 *b', accept: ['int t = *a; *a = *b; *b = t;', 'int t=*a; *a=*b; *b=t;', 'int t = *a;*a = *b;*b = t;'] }
    ]
  },

  '定义学生结构体（姓名、年龄、分数），读入三个值，按「姓名:.. 年龄:.. 分数:..」输出，分数保留 1 位小数。': {
    blanks: [
      { q: '按格式输出结构体里的三个成员', accept: ['printf("姓名:%s 年龄:%d 分数:%.1f\\n", s.name, s.age, s.score);', 'printf("姓名:%s 年龄:%d 分数:%.1f\\n",s.name,s.age,s.score);'] }
    ]
  },

  '读入 n 个学生（每行：姓名 分数），输出分数最高的学生姓名（保证最高分唯一）。': {
    blanks: [
      { q: '写「发现更高分就更新 best 下标」那一行', accept: ['if (list[i].score > list[best].score) best = i;', 'if(list[i].score>list[best].score) best=i;'] }
    ]
  }
};
