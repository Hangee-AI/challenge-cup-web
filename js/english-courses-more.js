/* ==========================================================
   english-courses-more.js · 英语：补齐零头（语法、口语、写作各 +1 章）
   ========================================================== */

appendChapters('literature-英语', [
  null, null,
  { chapters: [{
    title: '语篇语法与信息结构',
    brief: '语法不只在句内，也在篇章里。',
    q: [
      { stem: '信息结构中的"已知信息"通常位于：', options: ['句首', '句尾', '谓语', '从句'], answer: 0, explain: '句首。' },
      { stem: '强调句型（cleft）的作用是：', options: ['突出信息焦点', '缩短句子', '避免被动', '改变时态'], answer: 0, explain: '焦点。' },
      { stem: '语篇中时态的转换通常表示：', options: ['时间层次或叙事视角变化', '错误', '无意义', '语气'], answer: 0, explain: '层次。' }
    ],
    doc: { lead: '这一章讲语篇语法。', sections: [
      { id: 'info', title: '信息结构', html: `<p>已知信息前置、新信息后置；尾重原则。</p>` },
      { id: 'devices', title: '手段', html: `<p>强调句、倒装、被动、主题化；衔接与指代。</p>` }
    ], refs: [] } }] },
  null, null,
  { chapters: [{
    title: '语用能力与得体表达',
    brief: '会说还要说得体。',
    q: [
      { stem: '语用能力指：', options: ['在语境中恰当使用语言', '语法正确', '词汇量大', '发音标准'], answer: 0, explain: '得体。' },
      { stem: '礼貌策略包括：', options: ['弱化请求、给对方留余地', '直接命令', '提高音量', '沉默'], answer: 0, explain: '礼貌。' },
      { stem: '语用失误的后果通常是：', options: ['被误解或冒犯他人', '语法错误', '拼写错误', '听力下降'], answer: 0, explain: '误解。' }
    ],
    doc: { lead: '这一章讲语用。', sections: [
      { id: 'politeness', title: '礼貌', html: `<p>间接请求、hedging、致谢与道歉；面子理论。</p>` },
      { id: 'failure', title: '失误', html: `<p>语用迁移（直译母语礼貌表达）；调整策略。</p>` }
    ], refs: [] } }] },
  null,
  { chapters: [{
    title: '图表与数据描述',
    brief: '把数字写成句子。',
    q: [
      { stem: '描述上升趋势的常用表达是：', options: ['increase / rise / climb', 'decrease', 'fluctuate', 'level off'], answer: 0, explain: '上升。' },
      { stem: '图表作文的结构是：', options: ['概述—描述—分析—结论', '只有描述', '只有结论', '只有数据'], answer: 0, explain: '四段。' },
      { stem: '描述数据时应避免：', options: ['罗列所有数字', '抓关键趋势', '比较', '给原因'], answer: 0, explain: '取舍。' }
    ],
    doc: { lead: '这一章讲图表。', sections: [
      { id: 'trends', title: '趋势词', html: `<p>rise/fall/peak/plummet/level off；副词修饰（sharply, slightly）。</p>` },
      { id: 'structure', title: '结构', html: `<p>概述（overall trend）—关键数据—对比—原因与结论。</p>` }
    ], refs: [] } }] }
]);
