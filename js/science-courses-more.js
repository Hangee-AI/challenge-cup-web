/* ==========================================================
   science-courses-more.js · 生物科学 / 统计学：补齐零头
   ========================================================== */

appendChapters('science-生物科学', [
  null, null,
  { chapters: [{
    title: '维生素与辅酶',
    brief: '微量的必需。',
    q: [
      { stem: '维生素的特点之一是：', options: ['人体需要量少但不可缺', '可大量合成', '提供能量', '构成主要结构'], answer: 0, explain: '微量必需。' },
      { stem: '水溶性维生素包括：', options: ['B 族与维生素 C', '维生素 A', '维生素 D', '维生素 E'], answer: 0, explain: '水溶性。' },
      { stem: '辅酶的作用是：', options: ['协助酶催化、传递基团或电子', '提供能量', '构成蛋白', '运输氧气'], answer: 0, explain: '辅酶。' }
    ],
    doc: { lead: '这一章讲维生素。', sections: [
      { id: 'types', title: '分类', html: `<p>水溶性（B 族、C）与脂溶性（A、D、E、K）；缺乏症。</p>` },
      { id: 'coenzyme', title: '辅酶', html: `<p>NAD⁺、FAD、辅酶 A、TPP；在代谢中的作用。</p>` }
    ], refs: [] } }] },
  null, null, null, null,
  { chapters: [{
    title: '生态模型与模拟',
    brief: '用方程描述生态。',
    q: [
      { stem: '逻辑斯谛增长模型加入了：', options: ['环境容纳量', '随机项', '时间延迟', '多物种'], answer: 0, explain: 'K 值。' },
      { stem: 'Lotka-Volterra 模型描述：', options: ['捕食者与猎物动态', '单种群增长', '群落演替', '物质循环'], answer: 0, explain: '捕食。' },
      { stem: '生态模型的作用是：', options: ['预测与情景分析', '替代观测', '装饰', '证明唯一'], answer: 0, explain: '预测。' }
    ],
    doc: { lead: '这一章讲模型。', sections: [
      { id: 'population', title: '种群模型', html: `<p>指数与逻辑斯谛；年龄结构模型；随机性。</p>` },
      { id: 'simulation', title: '模拟', html: `<p>系统动力学、基于个体的模型；参数估计与验证。</p>` }
    ], refs: [] } }] },
  null, null, null
]);

appendChapters('science-统计学', [
  null, null, null, null,
  { chapters: [{
    title: '傅里叶级数与积分变换初步',
    brief: '频域的工具。',
    q: [
      { stem: '傅里叶级数用于：', options: ['周期函数展开', '任意函数', '只有多项式', '只有指数'], answer: 0, explain: '周期。' },
      { stem: '傅里叶变换把时域变到：', options: ['频域', '空域', '复平面', '相空间'], answer: 0, explain: '频域。' },
      { stem: '傅里叶变换在统计中的应用是：', options: ['谱密度估计与时间序列分析', '分类唯一', '聚类', '降维唯一'], answer: 0, explain: '谱。' }
    ],
    doc: { lead: '这一章讲傅里叶。', sections: [
      { id: 'series', title: '级数', html: `<p>三角级数、系数、收敛定理；吉布斯现象。</p>` },
      { id: 'transform', title: '变换', html: `<p>傅里叶变换、卷积定理；谱密度与滤波。</p>` }
    ], refs: [] } }] },
  null, null, null, null
]);
