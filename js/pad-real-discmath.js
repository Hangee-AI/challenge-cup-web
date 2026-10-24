/* ==========================================================
   pad-real-discmath.js · 离散数学：把补齐的占位关做成真题
   涉及章节：命题逻辑（命题公式）、一阶逻辑（谓词与量词）
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_SEP = { name: 'Stanford Encyclopedia of Philosophy（逻辑条目）', url: 'https://plato.stanford.edu/' };

  function mk(title, brief, q, lead, s1, s2) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: [REF_SEP]
      }
    };
  }

  var LIST = [
    mk('第 1 章 · 命题逻辑：命题公式', '联结词、真值表与等价式。', [
      { stem: '蕴涵式 p → q 为假的唯一情况是：', options: ['p 为真而 q 为假', 'p 为假而 q 为真', 'p 与 q 都为真', 'p 与 q 都为假'], answer: 0, explain: 'p→q 等价于 ¬p ∨ q；前件为假时整个蕴涵式为真（"善意推定"）。' },
      { stem: '德摩根律的正确形式是：', options: ['¬(p ∧ q) ≡ ¬p ∨ ¬q，¬(p ∨ q) ≡ ¬p ∧ ¬q', '¬(p ∧ q) ≡ ¬p ∧ ¬q', '¬(p ∨ q) ≡ ¬p ∨ ¬q', '¬(p ∧ q) ≡ p ∨ q'], answer: 0, explain: '否定穿过联结词时，析取与合取互换。' },
      { stem: '一个命题公式在所有赋值下都为真，称为：', options: ['重言式（永真式）', '矛盾式', '可满足式', '不可满足式'], answer: 0, explain: '永真式为重言式；永假为矛盾式；至少存在一组成真赋值则称可满足。' }
    ], '这一章把推理形式化。',
      { t: '命题与联结词', h: '<ul><li>联结词：¬、∧、∨、→、↔；优先级 ¬ &gt; ∧ &gt; ∨ &gt; → &gt; ↔。</li><li>真值表可判定公式类型（重言式、矛盾式、可满足式）。</li></ul>' },
      { t: '等值式与范式', h: '<ul><li>常用等值式：德摩根律、分配律、吸收律、蕴涵等值式 p→q ≡ ¬p∨q。</li><li>范式：析取范式与合取范式；主析取范式由成真赋值对应的极小项构成。</li></ul>' }),

    mk('第 2 章 · 一阶逻辑：谓词与量词', '量词及其否定。', [
      { stem: '命题 ∀x P(x) 的否定等价于：', options: ['∃x ¬P(x)', '∀x ¬P(x)', '∃x P(x)', '¬∃x ¬P(x)'], answer: 0, explain: '量词否定时全称与存在互换，并把否定移到谓词前（量词转换律）。' },
      { stem: '"所有学生都喜欢某门课程"若出现量词嵌套，理解的关键是：', options: ['量词顺序有先后，不能随意交换', '量词顺序无关紧要', '只需一个量词', '无法形式化'], answer: 0, explain: '∀x∃y 与 ∃y∀x 含义不同：前者允许每人选不同课程，后者要求存在一门课被所有人喜欢。' },
      { stem: '在公式 ∀x (P(x) → Q(x)) 中，x 属于：', options: ['约束变元（受全称量词辖域约束）', '自由变元', '常量符号', '谓词符号'], answer: 0, explain: '受量词辖域约束的出现为约束出现；在辖域外的出现才是自由出现。' }
    ], '这一章把命题逻辑扩展到个体与谓词。',
      { t: '谓词与量词', h: '<ul><li>个体、谓词与量词：全称 ∀、存在 ∃；个体域需先指定。</li><li>量词转换律：¬∀x P(x) ≡ ∃x ¬P(x)，¬∃x P(x) ≡ ∀x ¬P(x)。</li></ul>' },
      { t: '辖域与推理', h: '<ul><li>量词辖域决定变元是约束出现还是自由出现。</li><li>量词顺序影响含义；推理规则包括全称实例化、全称推广与存在实例化（须注意限制条件）。</li></ul>' })
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['离散数学'] = set(LIST);
  G.REAL_PAD_ALIAS['离散数学基础'] = '离散数学';
  G.REAL_PAD_ALIAS['离散结构'] = '离散数学';
})();
