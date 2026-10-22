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

const DOCS = {};

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
