/* ==========================================================
   pad-real-dmkt.js · 数字营销：把补齐的占位关做成真题
   涉及章节：渠道矩阵（搜索与信息流）、内容与投放
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_AMA = { name: 'American Marketing Association（AMA）', url: 'https://www.ama.org/' };
  var REF_IAB = { name: 'IAB（数字广告行业标准）', url: 'https://www.iab.com/' };

  function mk(title, brief, q, lead, s1, s2, refs) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: refs || [REF_IAB]
      }
    };
  }

  var LIST = [
    mk('第 1 章 · 渠道矩阵：搜索与信息流', '两类流量的差异与组合。', [
      { stem: '搜索广告相比信息流广告，最突出的特点是：', options: ['承接用户的主动需求，意图明确、转化路径短', '完全不需要关键词', '只能展示图片', '成本一定更低'], answer: 0, explain: '搜索是"人找信息"（主动意图），信息流是"信息找人"（被动推荐），定位不同。' },
      { stem: '关于公域流量与私域流量，正确的是：', options: ['私域可反复触达与低成本运营，公域需持续付费获取', '私域一定比公域流量大', '两者没有区别', '私域不需要维护'], answer: 0, explain: '公域靠平台分发与投放获取，私域（社群、会员、公众号等）可反复触达、积累资产。' },
      { stem: '搭建渠道矩阵的主要目的是：', options: ['在不同触点覆盖用户决策路径，形成协同与复用', '只在一个渠道投放', '减少预算即可', '只追求曝光最大化'], answer: 0, explain: '不同渠道承担认知、兴趣、转化与留存的不同角色，需要统一度量与内容适配。' }
    ], '这一章讲流量从哪里来、怎么组合。',
      { t: '流量类型', h: '<ul><li>搜索（主动意图、关键词竞价与 SEO）与信息流（算法推荐、素材与人群定向）。</li><li>公域（平台流量，需付费/分发）与私域（可反复触达的自有用户资产）。</li></ul>' },
      { t: '渠道矩阵', h: '<ul><li>按用户路径分工：曝光 → 兴趣 → 转化 → 复购/推荐。</li><li>需统一归因与指标口径，避免重复计算与渠道内耗。</li></ul>' },
      [REF_IAB]),

    mk('第 2 章 · 内容与投放：内容策略', '内容营销与投放指标。', [
      { stem: '内容营销的核心是：', options: ['持续创造对目标用户有用、相关且一致的内容，以吸引并留住用户', '只做促销广告', '追求单次曝光最大化', '只投放不产出内容'], answer: 0, explain: '内容营销强调长期关系与信任，最终促成有利可图的顾客行为。' },
      { stem: '广告投放中，CTR 指的是：', options: ['点击率（点击量 / 曝光量）', '转化率', '千次曝光成本', '单次点击成本'], answer: 0, explain: '常见指标：CPM（千次曝光成本）、CPC（单次点击成本）、CPA（单次行动成本）、ROI。' },
      { stem: '优化投放效果最常用的方法是：', options: ['A/B 测试并基于数据迭代素材、人群与出价', '一次性设定不再调整', '只提高预算', '只更换平台'], answer: 0, explain: '对照实验（A/B 测试）能隔离单一变量的影响，是数据驱动优化的基础。' }
    ], '这一章讲内容怎么做、投放怎么优化。',
      { t: '内容策略', h: '<ul><li>以用户任务与痛点为中心，规划选题、形式与发布节奏。</li><li>内容要可复用与可分发，兼顾搜索价值与社交传播。</li></ul>' },
      { t: '投放与度量', h: '<ul><li>指标：曝光、CTR、CPM/CPC/CPA、转化率、留存与 ROI。</li><li>A/B 测试与归因分析支撑持续优化；注意数据合规与用户隐私。</li></ul>' },
      [REF_AMA])
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['数字营销'] = set(LIST);
  G.REAL_PAD_ALIAS['网络营销'] = '数字营销';
  G.REAL_PAD_ALIAS['互联网营销'] = '数字营销';
  G.REAL_PAD_ALIAS['数字化营销'] = '数字营销';
})();
