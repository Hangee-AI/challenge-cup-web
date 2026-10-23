/* ==========================================================
   envdesign-courses-more.js · 环境设计：补齐零头（3 门各 +1 章）
   ========================================================== */

appendChapters('art-环境设计', [
  { chapters: [{
    title: '色彩表现',
    brief: '色彩与氛围。',
    q: [
      { stem: '环境设计色彩表现的重点是：', options: ['表达材质与空间氛围', '追求鲜艳', '描摹照片', '装饰'], answer: 0, explain: '氛围。' },
      { stem: '冷暖对比在效果图中的作用是：', options: ['拉开空间层次', '增加成本', '无作用', '降低真实感'], answer: 0, explain: '层次。' },
      { stem: '上色顺序通常是：', options: ['先大体块后细节', '先细节', '一次到位', '随机'], answer: 0, explain: '顺序。' }
    ],
    doc: { lead: '这一章讲色彩表现。', sections: [
      { id: 'tone', title: '色调', html: `<p>主色调与冷暖、明度层次；氛围与时间。</p>` },
      { id: 'material', title: '材质', html: `<p>木、石、金属、玻璃的表现要点；笔触与高光。</p>` }
    ], refs: [] } }] },
  { chapters: [{
    title: '空间与行为',
    brief: '人怎么用空间。',
    q: [
      { stem: '空间设计与行为研究的关系是：', options: ['行为需求指导空间组织', '无关', '只做形式', '只做结构'], answer: 0, explain: '指导。' },
      { stem: '边界效应指：', options: ['人倾向停留在空间边缘', '人喜欢中心', '无规律', '只与光有关'], answer: 0, explain: '边界。' },
      { stem: '空间的可识别性依赖：', options: ['标志物、导向与差异', '只有颜色', '只有面积', '只有材料'], answer: 0, explain: '识别。' }
    ],
    doc: { lead: '这一章讲行为。', sections: [
      { id: 'behavior', title: '行为', html: `<p>停留与通行、边界效应；领域性与私密性。</p>` },
      { id: 'legibility', title: '可识别性', html: `<p>标志物、导向系统；空间差异与记忆点。</p>` }
    ], refs: [] } }] },
  null,
  { chapters: [{
    title: '图纸校核与出图规范',
    brief: '别出错。',
    q: [
      { stem: '图纸校核的首要内容是：', options: ['与方案及专业条件一致', '只看美观', '只看图框', '只看字体'], answer: 0, explain: '一致。' },
      { stem: '出图前应检查：', options: ['比例、线宽、图层与打印样式', '只看颜色', '只看页数', '不检查'], answer: 0, explain: '出图。' },
      { stem: '图纸会审的作用是：', options: ['发现并解决专业间矛盾', '装饰', '算量', '归档'], answer: 0, explain: '会审。' }
    ],
    doc: { lead: '这一章讲校核。', sections: [
      { id: 'check', title: '校核', html: `<p>方案一致性、尺寸闭合、索引齐全；专业碰撞。</p>` },
      { id: 'print', title: '出图', html: `<p>比例与线宽、图层与打印样式；图框与签署。</p>` }
    ], refs: [] } }] },
  null, null, null, null, null, null, null, null, null
]);
