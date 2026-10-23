/* ==========================================================
   pad-real-signal.js · 信号与系统：把补齐的占位关做成真题
   涉及章节：连续时间信号与系统、傅里叶分析
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_IEEE = { name: 'IEEE Xplore（信号处理文献库）', url: 'https://ieeexplore.ieee.org/' };

  function mk(title, brief, q, lead, s1, s2) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: [REF_IEEE]
      }
    };
  }

  var LIST = [
    mk('第 1 章 · 连续时间信号与系统：典型信号', '冲激与阶跃信号、系统性质判断。', [
      { stem: '单位冲激信号 δ(t) 的筛选性质是：', options: ['∫ x(t)δ(t − t₀) dt = x(t₀)', '∫ x(t)δ(t) dt = 0', 'δ(t) 的积分等于 0', 'δ(t) 与任意信号卷积等于 0'], answer: 0, explain: '冲激函数在与普通函数的乘积积分中"筛选"出该点函数值，其面积为 1。' },
      { stem: '单位阶跃信号 u(t) 与冲激信号 δ(t) 的关系是：', options: ['δ(t) = du(t)/dt', 'u(t) = dδ(t)/dt', '两者完全相同', '两者无关'], answer: 0, explain: '阶跃在 0 处跳变，其广义导数即冲激；反之 u(t) = ∫δ(τ)dτ（从 −∞ 到 t）。' },
      { stem: '判断一个系统是否为线性时不变系统，需要满足：', options: ['同时满足叠加性（含齐次性）与时不变性', '只需满足因果性', '只需满足稳定性', '只需满足叠加性'], answer: 0, explain: '线性 = 可加 + 齐次；时不变 = 输入延时则输出等延时，二者缺一不可。' }
    ], '这一章建立信号与系统的基本语言。',
      { t: '典型信号', h: '<ul><li>冲激 δ(t)：面积为 1，具筛选性质；与 x(t) 卷积得 x(t)。</li><li>阶跃 u(t)：δ(t) = du/dt，用于表示信号的接入时刻。</li></ul>' },
      { t: '系统性质', h: '<ul><li>线性（可加 + 齐次）与时不变（延时不变）是 LTI 分析的前提。</li><li>另有因果性、稳定性、记忆性等性质判断。</li></ul>' }),

    mk('第 2 章 · 傅里叶分析：傅里叶级数', '周期信号的频谱与性质。', [
      { stem: '周期信号展开为傅里叶级数时，基波角频率 ω₀ 与周期 T 的关系是：', options: ['ω₀ = 2π/T', 'ω₀ = T/2π', 'ω₀ = 1/T', 'ω₀ = 2πT'], answer: 0, explain: '谐波位于 ω₀ 的整数倍处，即 kω₀ = 2kπ/T。' },
      { stem: '关于周期信号频谱的特点，正确的是：', options: ['离散谱，只在基波整数倍频率处有谱线', '连续谱', '与频率无关的直线', '只在零频有值'], answer: 0, explain: '周期信号 → 离散频谱；非周期信号 → 连续频谱（傅里叶变换）。' },
      { stem: '信号在时域展宽（尺度拉伸）时，其频谱的变化是：', options: ['频域压缩、幅度相应变化（时宽带宽互为反比）', '频域也展宽', '频谱不变', '频谱消失'], answer: 0, explain: 'x(at)（a<1 展宽）对应 X(ω/a)/|a|，即时域展宽 → 频域压缩。' }
    ], '这一章把信号从"看波形"变成"看频谱"。',
      { t: '傅里叶级数', h: '<ul><li>周期信号可分解为直流 + 基波 + 各次谐波（三角形式或指数形式）。</li><li>ω₀ = 2π/T，谐波只出现在 kω₀ 处。</li></ul>' },
      { t: '频谱与性质', h: '<ul><li>周期 → 离散谱；非周期 → 连续谱。</li><li>尺度变换：时域压缩 ↔ 频域展宽；时移 ↔ 频域相移。</li></ul>' })
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['信号与系统'] = set(LIST);
  G.REAL_PAD_ALIAS['信号与系统分析'] = '信号与系统';
  G.REAL_PAD_ALIAS['信号分析与处理'] = '信号与系统';
})();
