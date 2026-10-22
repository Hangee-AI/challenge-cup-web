/* ==========================================================
   se-courses.js · 「软件工程」专业
   --------------------------------------------------------
   依据南昌大学软件学院《软件工程专业培养方案（2024 版）》
   （https://jwccs.ncu.edu.cn/docs/2024-11/dc76c6fa9e71455e8a46fa344e4857d7.pdf）
   整理专业课程，按四个阶段组织。
   与「计算机科学与技术」专业相同的课程（C 语言程序设计、
   计算机科学与导论、高等数学（上/下）、线性代数等）直接复用
   计科的章节内容与文档，避免重复维护。
   依赖：data.js（MAJOR_STAGE_OVERRIDES / buildLevels）、
         docs.js（DOCS）、philosophy.js（stageTitlesOf）、
         cs-courses.js / cs-intro-math.js / cs-math2-la.js（计科内容）。
   ========================================================== */

(function () {
  var MAJOR = 'engineering-软件工程';
  var CS_MAJOR = 'engineering-计算机科学与技术';
  var TITLES = stageTitlesOf('engineering');

  /* ---------- 软件工程专业阶段课程（南昌大学 2024 版培养方案） ---------- */
  var SE_STAGES = {
    /* 大一 · 打地基 */
    0: [
      'C 语言程序设计',
      '计算机科学与导论',
      '高等数学（上）',
      '高等数学（下）',
      '线性代数',
      '数字逻辑',
      '面向对象程序设计（C++）',
      '大学物理',
      '软件工程导论'
    ],
    /* 大二 · 专业基础 */
    1: [
      '数据结构',
      '离散数学',
      '计算机系统基础',
      '概率论与数理统计',
      '计算机网络',
      '操作系统',
      '数据库原理',
      '算法分析与设计',
      'Python大数据分析与可视化',
      '软件开发实训'
    ],
    /* 大三 · 核心专业课 */
    2: [
      '软件系统分析与设计',
      '软件项目管理',
      '软件工程经济学',
      '软件测试',
      '工程伦理与网络安全法'
    ],
    /* 大四 · 出口 */
    3: [
      '软件综合实训',
      '毕业实习',
      '毕业设计'
    ]
  };

  /* 构建 override：所有模块先占位（levels: null） */
  var override = {};
  TITLES.forEach(function (t) { override[t] = { modules: [] }; });
  Object.keys(SE_STAGES).forEach(function (si) {
    SE_STAGES[si].forEach(function (m) {
      override[TITLES[si]].modules.push({ name: m, levels: null });
    });
  });
  MAJOR_STAGE_OVERRIDES[MAJOR] = override;

  /* ---------- 从计科复制共享课程的章节内容 ---------- */

  /**
   * 在 override 中按课程名查找模块，返回 { stageIdx, modIdx, globalIdx }
   */
  function findModule(over, name) {
    var g = 0;
    for (var s = 0; s < TITLES.length; s++) {
      var mods = over[TITLES[s]].modules;
      for (var i = 0; i < mods.length; i++) {
        if (mods[i].name === name) return { stageIdx: s, modIdx: i, globalIdx: g };
        g++;
      }
    }
    return null;
  }

  /**
   * 把计科某门课的章节内容（levels + DOCS）复制到软件工程同名/对应课程。
   * levels 中的题目、简介、代码直接共享；DOCS 按软件工程的模块序号重新建键。
   */
  function copyFromCs(seName, csName) {
    csName = csName || seName;
    var csOver = MAJOR_STAGE_OVERRIDES[CS_MAJOR];
    var seOver = MAJOR_STAGE_OVERRIDES[MAJOR];
    if (!csOver || !seOver) return false;

    var csMod = findModule(csOver, csName);
    var seMod = findModule(seOver, seName);
    if (!csMod || !seMod) return false;

    var csLevels = csOver[TITLES[csMod.stageIdx]].modules[csMod.modIdx].levels;
    if (!csLevels || !csLevels.length) return false;

    // 复制 levels（level 对象不含 id，可直接共享引用）
    seOver[TITLES[seMod.stageIdx]].modules[seMod.modIdx].levels = csLevels;

    // 复制 DOCS，键按软件工程的模块序号重建
    for (var k = 0; k < csLevels.length; k++) {
      var csKey = CS_MAJOR + '-m' + csMod.globalIdx + '-l' + k;
      var seKey = MAJOR + '-m' + seMod.globalIdx + '-l' + k;
      if (typeof DOCS !== 'undefined' && DOCS[csKey]) {
        DOCS[seKey] = DOCS[csKey];
      }
    }
    return true;
  }

  /* 与计科共享且已有完整章节内容的课程 */
  var shared = [
    { se: 'C 语言程序设计', cs: 'C 语言程序设计' },
    { se: '计算机科学与导论', cs: '计算机科学与导论' },
    { se: '高等数学（上）', cs: '高等数学（上）' },
    { se: '高等数学（下）', cs: '高等数学（下）' },
    { se: '线性代数', cs: '线性代数' }
  ];
  shared.forEach(function (pair) {
    copyFromCs(pair.se, pair.cs);
  });
})();
