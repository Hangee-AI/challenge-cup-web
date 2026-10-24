/* ==========================================================
   pad-real-comms.js · 通信原理：把补齐的占位关做成真题
   涉及章节：绪论与信息度量、确定信号分析
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_IEEE = { name: 'IEEE Xplore（通信与信号处理）', url: 'https://ieeexplore.ieee.org/' };
  var REF_ITU = { name: 'ITU（国际电信联盟）', url: 'https://www.itu.int/' };

  function mk(title, brief, q, lead, s1, s2, refs) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: refs || [REF_IEEE]
      }
    };
  }

  var LIST = [
    mk('第 1 章 · 绪论与信息度量：通信系统模型', '通信系统组成与信息量。', [
      { stem: '通信系统的一般模型不包括下列哪一部分：', options: ['调制解调器之外的路由协议', '信源与信宿', '发送设备与接收设备', '信道与噪声源'], answer: 0, explain: '一般模型为：信源 → 发送设备 → 信道（含噪声源）→ 接收设备 → 信宿。' },
      { stem: '某消息出现的概率为 1/4，其信息量（以 2 为底）为：', options: ['2 bit', '1 bit', '4 bit', '0.25 bit'], answer: 0, explain: 'I = −log₂P，P = 1/4 时 I = log₂4 = 2 bit；等概二进制符号的信息量为 1 bit。' },
      { stem: '与模拟通信相比，数字通信的主要优点是：', options: ['抗干扰能力强、可差错控制与加密、便于再生中继', '占用带宽一定更小', '设备一定更简单', '不需要同步'], answer: 0, explain: '数字通信通过判决再生可消除噪声积累，但通常会占用更多带宽。' }
    ], '这一章讲通信系统的框架与"信息的度量"。',
      { t: '系统模型', h: '<ul><li>信源 → 发送设备 → 信道（噪声源）→ 接收设备 → 信宿；模拟与数字通信的区别。</li><li>有效性（传输速率、带宽效率）与可靠性（差错率）是通信质量的两大指标。</li></ul>' },
      { t: '信息度量', h: '<ul><li>信息量 I = −log₂P（比特）；概率越小信息量越大。</li><li>熵 H 为平均信息量；等概时熵最大。</li></ul>' },
      [REF_ITU]),

    mk('第 2 章 · 确定信号分析：频谱与傅里叶变换', '频谱、卷积与带宽。', [
      { stem: '周期信号的频谱特点是：', options: ['离散谱（只在基频整数倍处有谱线）', '连续谱', '无频谱', '与噪声谱相同'], answer: 0, explain: '周期信号用傅里叶级数展开，频谱离散；非周期信号用傅里叶变换，频谱连续。' },
      { stem: '时域中两个信号卷积，对应频域中的关系是：', options: ['频谱相乘', '频谱相加', '频谱卷积', '频谱不变'], answer: 0, explain: '时域卷积 ↔ 频域相乘，反之亦然；这是线性系统分析的核心性质。' },
      { stem: '信号能量在时域与频域之间的关系由下列定理给出：', options: ['Parseval 定理（时域能量等于频域能量积分）', '抽样定理', '奈奎斯特第一准则', '香农定理'], answer: 0, explain: 'Parseval 定理联系时域与频域的能量；香农公式给出信道容量 C = B log₂(1 + S/N)。' }
    ], '这一章提供分析信号的频域工具。',
      { t: '频谱', h: '<ul><li>周期信号 → 傅里叶级数（离散谱，谱线间隔为基频 f₀）。</li><li>非周期信号 → 傅里叶变换（连续谱）；带宽按主要能量集中范围定义。</li></ul>' },
      { t: '运算性质', h: '<ul><li>卷积定理：时域卷积 ⇔ 频域相乘；时移只改变相位谱。</li><li>Parseval 定理（能量守恒）与香农信道容量公式 C = B log₂(1+S/N)。</li></ul>' },
      [REF_IEEE])
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['通信原理'] = set(LIST);
  G.REAL_PAD_ALIAS['通信原理与技术'] = '通信原理';
  G.REAL_PAD_ALIAS['通信原理基础'] = '通信原理';
  G.REAL_PAD_ALIAS['现代通信原理'] = '通信原理';
})();
