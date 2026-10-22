/* ==========================================================
   finance-courses.js · 「金融学」专业：12 门课 × 3 章
   --------------------------------------------------------
   每学期 3 门课、每门 3 章 = 9 关；共 36 关。
   替换 economics.js 里金融学原来的「4 门课 × 2 章」。
   ========================================================== */

(function () {
  var MAJOR = 'economics-金融学';
  var TITLES = stageTitlesOf('economics');

  var COURSES = [
    /* ---- 大一 ---- */
    {
      name: '高等数学',
      chapters: [
        {
          title: '极限与连续',
          brief: '连续复利、久期、期权定价都建立在极限之上。',
          q: [
            { stem: '连续复利下终值公式是：', options: ['P(1+r)^t', 'Pe^{rt}', 'P+rt', 'P/(1+r)^t'], answer: 1, explain: '复利次数趋于无穷的极限。' },
            { stem: 'lim(x→0)(1+x)^{1/x} 等于：', options: ['0', '1', 'e', '∞'], answer: 2, explain: '重要极限，自然常数的定义。' },
            { stem: '函数连续意味着：', options: ['可导', '极限等于函数值', '单调', '有界'], answer: 1, explain: '连续是可导的必要非充分条件。' }
          ],
          doc: {
            lead: '这一章讲极限与连续，为复利与贴现打底。',
            sections: [
              { id: 'limit', title: '极限', html: `<p>左右极限、无穷小、等价无穷小替换。</p>` },
              { id: 'e', title: '自然常数', html: `<p>e 来自连续复利；e^{rt} 是金融里最常用的贴现/终值形式。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '导数与最优化',
          brief: '求极值是资产配置与套期保值的常用动作。',
          q: [
            { stem: '极值点处一阶导数为零，二阶导数为负说明：', options: ['极小值', '极大值', '拐点', '不连续'], answer: 1, explain: '凹函数得有极大值。' },
            { stem: '拉格朗日乘子的经济含义是：', options: ['约束的影子价格', '目标函数值', '斜率', '截距'], answer: 0, explain: '放松一单位约束带来的目标增量。' },
            { stem: '均值-方差最优化中，目标是：', options: ['给定风险下最大化收益', '最大化风险', '最小化收益', '随机选择'], answer: 0, explain: '有效前沿上的组合。' }
          ],
          doc: {
            lead: '这一章讲最优化与金融应用。',
            sections: [
              { id: 'foc', title: '条件', html: `<p>一阶条件定位、二阶条件定性质；约束最优化用拉格朗日。</p>` },
              { id: 'app', title: '应用', html: `<p>组合最优化、期权对冲比率、久期匹配。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '概率与随机',
          brief: '金融是概率的语言：期望、方差、正态与厚尾。',
          q: [
            { stem: '资产收益常用什么刻画风险？', options: ['均值', '方差/标准差', '中位数', '众数'], answer: 1, explain: '方差衡量波动。' },
            { stem: '厚尾分布意味着：', options: ['极端事件比正态更频繁', '没有极端事件', '完全对称', '方差为零'], answer: 0, explain: '金融收益常见厚尾，正态假设会低估风险。' },
            { stem: '两个随机变量的协方差衡量：', options: ['各自波动', '共同变动方向与程度', '均值差', '分布形状'], answer: 1, explain: '协方差是组合风险的核心。' }
          ],
          doc: {
            lead: '这一章讲概率基础与金融事实。',
            sections: [
              { id: 'dist', title: '分布', html: `<p>正态、对数正态、t 分布；厚尾与偏度。</p>` },
              { id: 'moment', title: '矩', html: `<p>均值、方差、协方差、相关系数；组合方差 = w'Σw。</p>
<div class="doc-tip">⚠️ 用正态低估尾部风险，是很多模型失效的原因。</div>` }
            ],
            refs: [ECON_REFS.stats]
          }
        }
      ]
    },
    {
      name: '微观经济学',
      chapters: [
        {
          title: '供求与均衡',
          brief: '价格是资源配置的信号。',
          q: [
            { stem: '需求弹性大于 1 时降价：', options: ['收入增加', '收入减少', '收入不变', '不确定'], answer: 0, explain: '销量增幅大于价格降幅。' },
            { stem: '价格上限低于均衡价格会导致：', options: ['短缺', '过剩', '均衡', '无影响'], answer: 0, explain: '需求大于供给。' },
            { stem: '消费者剩余是：', options: ['支付意愿−实际支付', '实际支付', '成本', '税收'], answer: 0, explain: '福利分析的基础。' }
          ],
          doc: {
            lead: '这一章讲供求与福利。',
            sections: [
              { id: 'eq', title: '均衡', html: `<p>供求相等；价格管制导致短缺或过剩。</p>` },
              { id: 'welfare', title: '福利', html: `<p>消费者剩余 + 生产者剩余；无谓损失来自未发生的互利交易。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '风险与效用',
          brief: '人为什么买保险：风险厌恶与边际效用递减。',
          q: [
            { stem: '风险厌恶者的效用函数是：', options: ['凸函数', '凹函数（边际效用递减）', '线性', '常数'], answer: 1, explain: '凹效用 → 确定等价小于期望值。' },
            { stem: '风险溢价是：', options: ['期望收益与确定等价之差', '无风险利率', '通胀', '手续费'], answer: 0, explain: '为承担风险要求的补偿。' },
            { stem: '分散化降低风险的前提是：', options: ['资产完全正相关', '资产相关性低', '资产都亏损', '只买一只'], answer: 1, explain: '低相关才能降低组合方差。' }
          ],
          doc: {
            lead: '这一章讲风险偏好与分散化。',
            sections: [
              { id: 'utility', title: '效用', html: `<p>风险厌恶、风险中性、风险偏好；确定等价与风险溢价。</p>` },
              { id: 'diversify', title: '分散', html: `<p>只要相关系数 &lt; 1，组合就能降低风险；系统性风险不可分散。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '信息不对称',
          brief: '逆向选择与道德风险：金融市场的结构性摩擦。',
          q: [
            { stem: '二手车市场上的"逆向选择"表现为：', options: ['好车驱逐坏车', '坏车驱逐好车', '价格上升', '没有交易'], answer: 1, explain: '信息劣势方压低价格，好车退出。' },
            { stem: '道德风险发生在：', options: ['交易前', '交易后一方改变行为', '签约时', '从未发生'], answer: 1, explain: '如投保后不谨慎。' },
            { stem: '缓解信息不对称的机制不包括：', options: ['信号发送', '筛选', '抵押与担保', '隐瞒信息'], answer: 3, explain: '隐瞒会加剧不对称。' }
          ],
          doc: {
            lead: '这一章讲两类不对称及其对策。',
            sections: [
              { id: 'adverse', title: '逆向选择', html: `<p>交易前信息不对称；对策：信号、筛选、强制信息披露。</p>` },
              { id: 'moral', title: '道德风险', html: `<p>交易后行为不可观测；对策：抵押、监督、激励合同。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        }
      ]
    },
    {
      name: '金融学原理',
      chapters: [
        {
          title: '货币时间价值',
          brief: '今天的钱比明天的钱值钱：贴现是金融的第一原理。',
          q: [
            { stem: '年利率 10%，两年后 121 元的现值是：', options: ['100', '110', '121', '133'], answer: 0, explain: '121/1.1² = 100。' },
            { stem: '永续年金（每年 CF，利率 r）的现值是：', options: ['CF/r', 'CF×r', 'CF/(1+r)', 'CF×n'], answer: 0, explain: '永续年金公式。' },
            { stem: '贴现率上升，未来现金流现值：', options: ['上升', '下降', '不变', '不确定'], answer: 1, explain: '折现因子随 r 上升而下降。' }
          ],
          doc: {
            lead: '这一章讲三个公式。',
            sections: [
              { id: 'formula', title: '公式', html: `<pre><code>PV = CF/(1+r)^n
永续年金 PV = CF/r
永续增长 PV = CF/(r−g)</code></pre>` },
              { id: 'use', title: '用法', html: `<p>债券定价、股票估值、项目评估都是贴现的应用。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '风险与收益',
          brief: '收益是风险的补偿：无风险利率 + 风险溢价。',
          q: [
            { stem: '预期收益的构成是：', options: ['无风险利率 + 风险溢价', '只有无风险利率', '只有通胀', '股息'], answer: 0, explain: '风险资产要求补偿。' },
            { stem: '系统性风险的特征是：', options: ['可通过分散消除', '不可分散，市场整体波动', '只影响一家公司', '由管理层决定'], answer: 1, explain: '系统性风险来自宏观因素。' },
            { stem: '夏普比率衡量：', options: ['单位风险的超额收益', '总收益', '最大回撤', '波动率'], answer: 0, explain: '(Rp−Rf)/σp。' }
          ],
          doc: {
            lead: '这一章讲收益与风险的度量。',
            sections: [
              { id: 'measure', title: '度量', html: `<p>算术/几何平均收益、标准差、最大回撤、夏普比率。</p>` },
              { id: 'systematic', title: '两类风险', html: `<p>系统性（不可分散）与非系统性（可分散）；只有前者获得补偿。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '金融市场与机构',
          brief: '资金从储蓄者流向融资者：直接与间接融资。',
          q: [
            { stem: '间接融资的典型形式是：', options: ['银行贷款', '发行股票', '发行债券', '众筹'], answer: 0, explain: '通过银行等中介。' },
            { stem: '一级市场与二级市场的区别是：', options: ['是否首次发行', '是否监管', '是否公开', '是否有价格'], answer: 0, explain: '一级发行，二级交易流通。' },
            { stem: '金融中介的核心功能不包括：', options: ['期限转换', '风险管理', '信息生产', '印钞'], answer: 3, explain: '印钞是央行职能。' }
          ],
          doc: {
            lead: '这一章讲市场结构与中介功能。',
            sections: [
              { id: 'markets', title: '市场', html: `<ul><li>货币市场 / 资本市场</li><li>一级发行 / 二级交易</li><li>场内 / 场外</li></ul>` },
              { id: 'intermediary', title: '中介', html: `<p>期限转换、流动性转换、信息生产、风险管理。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        }
      ]
    },

    /* ---- 大二 ---- */
    {
      name: '宏观经济学',
      chapters: [
        {
          title: '增长与周期',
          brief: '长期看增长，短期看波动。',
          q: [
            { stem: '长期经济增长的主要来源是：', options: ['资本、劳动与技术进步的乘积', '货币政策', '出口补贴', '人口红利唯一'], answer: 0, explain: '增长核算：资本深化 + 人力资本 + 全要素生产率。' },
            { stem: '经济周期的典型特征是：', options: ['产出与就业同向波动', '产出升失业升', '只升不降', '无规律'], answer: 0, explain: '扩张期产出与就业同升。' },
            { stem: '潜在产出指的是：', options: ['实际产出', '在不引发通胀压力下的最大可持续产出', '历史最高产出', '计划产出'], answer: 1, explain: '潜在产出对应自然失业率水平。' }
          ],
          doc: {
            lead: '这一章讲增长与周期两条线。',
            sections: [
              { id: 'growth', title: '增长', html: `<p>索洛模型：资本边际报酬递减，长期靠技术进步。</p>` },
              { id: 'cycle', title: '周期', html: `<p>产出缺口、领先/同步/滞后指标；政策逆周期调节。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '通胀与政策',
          brief: '物价稳定与充分就业：央行的双重使命。',
          q: [
            { stem: 'CPI 上升意味着：', options: ['居民消费价格上升', '股价上升', '汇率上升', '利率必然上升'], answer: 0, explain: 'CPI 是消费价格指数。' },
            { stem: '紧缩性货币政策通常：', options: ['提高利率、抑制需求', '降低利率', '增加货币供给', '扩大财政支出'], answer: 0, explain: '加息抑制投资与消费。' },
            { stem: '通胀目标制的核心是：', options: ['央行公开承诺通胀目标并据此操作', '固定汇率', '财政赤字货币化', '管制价格'], answer: 0, explain: '锚定预期，增强政策可信度。' }
          ],
          doc: {
            lead: '这一章讲通胀与政策框架。',
            sections: [
              { id: 'inflation', title: '通胀', html: `<p>需求拉动、成本推动、预期自我实现；核心通胀剔除食品能源。</p>` },
              { id: 'policy', title: '政策', html: `<p>利率规则（泰勒规则）、通胀目标制、宏观审慎。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '开放经济',
          brief: '汇率、国际收支与政策的三元悖论。',
          q: [
            { stem: '本币贬值通常使：', options: ['出口更具竞争力、进口变贵', '出口下降', '进口增加', '无影响'], answer: 0, explain: '外币价格下降、进口本币成本上升。' },
            { stem: '三元悖论指的是：', options: ['汇率稳定、资本自由流动、货币政策独立三者不可兼得', '三个目标都能实现', '只有两个国家', '三种货币'], answer: 0, explain: '只能选其二。' },
            { stem: '国际收支逆差意味着：', options: ['外汇储备可能下降或需融资', '货币必升值', '没有影响', '出口必增'], answer: 0, explain: '需用储备或资本流入弥补。' }
          ],
          doc: {
            lead: '这一章讲开放条件下的政策约束。',
            sections: [
              { id: 'fx', title: '汇率', html: `<p>固定、浮动、有管理浮动；购买力平价与利率平价。</p>` },
              { id: 'trinity', title: '三元悖论', html: `<p>汇率稳定 + 资本自由流动 + 货币政策独立，三者只能取二。</p>` }
            ],
            refs: [ECON_REFS.stats, ECON_REFS.wb]
          }
        }
      ]
    },
    {
      name: '统计学',
      chapters: [
        {
          title: '描述与分布',
          brief: '先看数据长什么样。',
          q: [
            { stem: '收益率分布常呈现：', options: ['正态', '尖峰厚尾', '均匀', '指数'], answer: 1, explain: '金融收益常见尖峰厚尾。' },
            { stem: '标准差衡量：', options: ['集中趋势', '波动程度', '偏度', '峰度'], answer: 1, explain: '风险的常用度量。' },
            { stem: '偏度为负说明：', options: ['左尾更长', '右尾更长', '对称', '无尾'], answer: 0, explain: '负偏（左偏）意味着大幅下跌更常见。' }
          ],
          doc: {
            lead: '这一章讲描述统计在金融中的应用。',
            sections: [
              { id: 'moments', title: '四阶矩', html: `<p>均值（收益）、方差（风险）、偏度（方向）、峰度（尾部）。</p>` },
              { id: 'robust', title: '稳健', html: `<p>异常值影响均值与方差，可用中位数与 MAD。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '推断',
          brief: '用样本估计参数：置信区间与检验。',
          q: [
            { stem: '95% 置信区间的含义是：', options: ['真值有 95% 概率落入', '重复抽样约 95% 的区间覆盖真值', '样本均值 95% 正确', '95% 数据在区间内'], answer: 1, explain: '长期覆盖率。' },
            { stem: '样本量增大，估计精度：', options: ['提高', '下降', '不变', '不确定'], answer: 0, explain: '标准误随 √n 减小。' },
            { stem: '第一类错误是：', options: ['弃真', '取伪', '样本偏差', '计算错误'], answer: 0, explain: '原假设为真却被拒绝。' }
          ],
          doc: {
            lead: '这一章讲推断基础。',
            sections: [
              { id: 'ci', title: '区间', html: `<p>估计 ± 临界值 × 标准误。</p>` },
              { id: 'test', title: '检验', html: `<p>t 检验、p 值、两类错误、功效。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '回归',
          brief: '因子模型的基础：多元回归。',
          q: [
            { stem: '回归系数 β 表示：', options: ['控制其他变量后 X 变动一单位 Y 的平均变动', '相关系数', 'R²', '截距'], answer: 0, explain: '偏回归系数。' },
            { stem: 'R² 的含义：', options: ['解释的方差比例', '因果强度', '显著性', '样本量'], answer: 0, explain: '拟合优度。' },
            { stem: '回归中遗漏重要变量会导致：', options: ['系数有偏', 'R² 为零', '无法估计', '样本失效'], answer: 0, explain: '遗漏变量偏误。' }
          ],
          doc: {
            lead: '这一章讲回归与因子分析。',
            sections: [
              { id: 'ols', title: 'OLS', html: `<p>估计、标准误、显著性；多重共线性诊断。</p>` },
              { id: 'factor', title: '因子', html: `<p>CAPM 与多因子模型都是回归：R = α + βF + ε。</p>` }
            ],
            refs: [ECON_REFS.stats, ECON_REFS.nber]
          }
        }
      ]
    },
    {
      name: '公司金融',
      chapters: [
        {
          title: '资本预算',
          brief: '投什么：NPV 为王。',
          q: [
            { stem: 'NPV 大于 0 意味着：', options: ['项目亏钱', '项目创造价值，应接受', '风险为零', '应放弃'], answer: 1, explain: 'NPV = 现值 − 初始投资。' },
            { stem: 'IRR 与 NPV 冲突时应以：', options: ['IRR 为准', 'NPV 为准', '平均', '都不准'], answer: 1, explain: 'NPV 直接衡量价值增量。' },
            { stem: '计算增量现金流时，应忽略：', options: ['沉没成本', '机会成本', '新增营运资本', '税收影响'], answer: 0, explain: '沉没成本与决策无关。' }
          ],
          doc: {
            lead: '这一章讲投资决策。',
            sections: [
              { id: 'npv', title: 'NPV 与 IRR', html: `<p>NPV 加总折现现金流；IRR 使 NPV=0；互斥项目用 NPV。</p>` },
              { id: 'cashflow', title: '现金流', html: `<p>增量、税后、含营运资本与残值；不含沉没成本与融资成本（已体现在折现率）。</p>` }
            ],
            refs: [ECON_REFS.nber, ECON_REFS.stats]
          }
        },
        {
          title: '资本结构',
          brief: '钱从哪来：MM 定理与权衡理论。',
          q: [
            { stem: '无税 MM 定理的结论是：', options: ['负债越多越好', '企业价值与资本结构无关', '股本成本固定', '股利决定价值'], answer: 1, explain: '无摩擦时价值由资产决定。' },
            { stem: '引入公司税后，负债的优势来自：', options: ['税盾', '更低风险', '股东偏好', '监管要求'], answer: 0, explain: '利息可税前扣除。' },
            { stem: '权衡理论认为最优资本结构出现在：', options: ['税盾收益与财务困境成本相等处', '负债为零', '负债 100%', '随机'], answer: 0, explain: '边际收益 = 边际成本。' }
          ],
          doc: {
            lead: '这一章讲资本结构的三层理论。',
            sections: [
              { id: 'mm', title: 'MM', html: `<p>无税无关；有税时负债有税盾，价值上升。</p>` },
              { id: 'tradeoff', title: '权衡', html: `<p>税盾 vs 财务困境成本与代理成本；优序融资（内部→债务→股权）。</p>` }
            ],
            refs: [ECON_REFS.nber]
          }
        },
        {
          title: '股利与营运资本',
          brief: '赚了怎么分、日常怎么转。',
          q: [
            { stem: '股利无关论的前提是：', options: ['无税无摩擦', '有税', '有代理成本', '市场无效'], answer: 0, explain: 'MM 股利无关论。' },
            { stem: '股票回购相比现金股利的优势之一是：', options: ['税收效率与信号作用', '必须发放', '提高股利', '降低成本'], answer: 0, explain: '回购常享资本利得税优惠，并可传递低估信号。' },
            { stem: '营运资本管理的核心是：', options: ['平衡流动性与收益', '最大化存货', '最小化现金', '延长收款'], answer: 0, explain: '现金转换周期管理。' }
          ],
          doc: {
            lead: '这一章讲分配与短期财务。',
            sections: [
              { id: 'dividend', title: '股利', html: `<p>无关论、税收与信号、代理成本；回购与股利的替代。</p>` },
              { id: 'wc', title: '营运资本', html: `<p>现金转换周期 = 存货天数 + 应收天数 − 应付天数。</p>` }
            ],
            refs: [ECON_REFS.nber]
          }
        }
      ]
    },

    /* ---- 大三 ---- */
    {
      name: '投资学',
      chapters: [
        {
          title: '组合理论',
          brief: '分散化是唯一的免费午餐。',
          q: [
            { stem: '有效前沿上的组合满足：', options: ['给定风险下收益最大', '风险最大', '收益最小', '随机'], answer: 0, explain: '有效前沿是风险-收益的最优边界。' },
            { stem: '两资产组合方差最小化的条件是：', options: ['相关系数为 −1 时可完全消除风险', '相关系数为 1', '收益相等', '权重相等'], answer: 0, explain: '完全负相关可构造零风险组合。' },
            { stem: '加入无风险资产后，最优组合位于：', options: ['资本市场线切点', '原点', '纵轴', '任意点'], answer: 0, explain: '切点组合（市场组合）。' }
          ],
          doc: {
            lead: '这一章讲马科维茨框架。',
            sections: [
              { id: 'frontier', title: '有效前沿', html: `<p>均值-方差最优；分散化降低非系统性风险。</p>` },
              { id: 'cml', title: '资本市场线', html: `<p>引入无风险资产后，有效集变成从 Rf 出发的切线。</p>` }
            ],
            refs: [ECON_REFS.nber, ECON_REFS.stats]
          }
        },
        {
          title: 'CAPM 与因子',
          brief: '风险被定价：β 决定预期收益。',
          q: [
            { stem: 'CAPM 的公式是：', options: ['E(R)=Rf+β(E(Rm)−Rf)', 'E(R)=Rf', 'E(R)=β', 'E(R)=Rm'], answer: 0, explain: '证券市场线。' },
            { stem: 'β 衡量：', options: ['系统性风险', '非系统性风险', '总风险', '流动性'], answer: 0, explain: '对市场波动的敏感度。' },
            { stem: '三因子模型在市场因子外加入：', options: ['规模与价值', '动量与波动', '流动性与情绪', '行业与地区'], answer: 0, explain: 'Fama-French：SMB 与 HML。' }
          ],
          doc: {
            lead: '这一章讲资产定价模型。',
            sections: [
              { id: 'capm', title: 'CAPM', html: `<p>假设与推导；β 的估计（回归）；证券市场线。</p>` },
              { id: 'multifactor', title: '多因子', html: `<p>Fama-French 三因子、五因子；动量与质量因子。</p>
<div class="doc-tip">⚠️ CAPM 的实证表现一般，但它是估资本成本的通用语言。</div>` }
            ],
            refs: [ECON_REFS.nber]
          }
        },
        {
          title: '有效市场与业绩评价',
          brief: '市场有效吗？业绩是能力还是运气？',
          q: [
            { stem: '半强式有效市场意味着：', options: ['内幕信息无效', '公开信息已反映在价格中', '技术分析有效', '基本面分析无效'], answer: 1, explain: '半强式：公开信息已定价；内幕信息仍可能获利。' },
            { stem: 'α 衡量的是：', options: ['超额收益（相对基准）', '系统性风险', '波动率', '久期'], answer: 0, explain: '回归截距，经风险调整后的超额收益。' },
            { stem: '评价基金业绩时，只看收益率的问题在于：', options: ['没考虑风险', '没考虑规模', '没考虑费率', '没考虑时间'], answer: 0, explain: '需要风险调整指标（夏普、特雷诺、信息比率）。' }
          ],
          doc: {
            lead: '这一章讲市场效率与评价。',
            sections: [
              { id: 'emh', title: '三种有效', html: `<p>弱式（历史价格）、半强式（公开信息）、强式（所有信息）。</p>` },
              { id: 'perf', title: '评价', html: `<p>夏普、特雷诺、詹森 α、信息比率；注意幸存者偏差与回测偏差。</p>` }
            ],
            refs: [ECON_REFS.nber]
          }
        }
      ]
    },
    {
      name: '金融衍生品',
      chapters: [
        {
          title: '远期与期货',
          brief: '锁定未来价格：套保与投机的一体两面。',
          q: [
            { stem: '远期与期货的关键区别是：', options: ['是否标准化与场内交易', '是否有标的', '是否需要保证金', '是否有价格'], answer: 0, explain: '期货标准化、场内、每日盯市。' },
            { stem: '基差指的是：', options: ['现货价 − 期货价', '期货价 + 现货价', '合约数量', '保证金比例'], answer: 0, explain: '基差风险是套保的主要残余风险。' },
            { stem: '买入套保适用于：', options: ['未来要买入标的、担心涨价', '持有标的、担心跌价', '投机', '套利'], answer: 0, explain: '多头套保锁定采购成本。' }
          ],
          doc: {
            lead: '这一章讲两类线性衍生品。',
            sections: [
              { id: 'compare', title: '远期 vs 期货', html: `<p>场外 vs 场内、定制 vs 标准、信用风险 vs 清算所。</p>` },
              { id: 'hedge', title: '套保', html: `<p>多头/空头套保、基差风险、套保比率。</p>` }
            ],
            refs: [ECON_REFS.nber]
          }
        },
        {
          title: '期权定价',
          brief: '权利而非义务：内在价值 + 时间价值。',
          q: [
            { stem: '看涨期权买方的最大损失是：', options: ['无限', '权利金', '标的价格', '保证金'], answer: 1, explain: '买方风险有限、收益无限。' },
            { stem: '期权价格随波动率上升：', options: ['上升', '下降', '不变', '不确定'], answer: 0, explain: '波动率对期权买方有利。' },
            { stem: 'Black-Scholes 模型的关键假设不包括：', options: ['无套利', '波动率恒定', '可连续对冲', '投资者情绪可测量'], answer: 3, explain: '模型不含情绪变量。' }
          ],
          doc: {
            lead: '这一章讲期权价值与定价直觉。',
            sections: [
              { id: 'value', title: '价值构成', html: `<p>内在价值 + 时间价值；实值/平值/虚值。</p>` },
              { id: 'bs', title: 'BS 直觉', html: `<p>用标的与无风险资产复制期权；五个输入：S、K、T、r、σ。</p>
<div class="doc-tip">💡 交易波动率，而不是猜方向。</div>` }
            ],
            refs: [ECON_REFS.nber]
          }
        },
        {
          title: '对冲与风险',
          brief: '希腊字母：把风险拆成可管理的维度。',
          q: [
            { stem: 'Delta 衡量：', options: ['标的价格变动对期权价格的影响', '波动率影响', '时间影响', '利率影响'], answer: 0, explain: '一阶价格敏感度。' },
            { stem: 'Gamma 衡量：', options: ['Delta 的变化率', '价格水平', '波动率', '久期'], answer: 0, explain: '二阶敏感度，影响对冲频率。' },
            { stem: 'Vega 衡量：', options: ['波动率敏感度', '时间衰减', '利率敏感度', '杠杆'], answer: 0, explain: '波动率上升，期权价值上升。' }
          ],
          doc: {
            lead: '这一章讲希腊字母与对冲。',
            sections: [
              { id: 'greeks', title: '五个希腊字母', html: `<ul><li>Delta：方向</li><li>Gamma：凸性</li><li>Vega：波动率</li><li>Theta：时间</li><li>Rho：利率</li></ul>` },
              { id: 'hedge', title: '对冲', html: `<p>Delta 中性对冲需动态调整；Gamma 越大调整越频繁。</p>` }
            ],
            refs: [ECON_REFS.nber]
          }
        }
      ]
    },
    {
      name: '商业银行管理',
      chapters: [
        {
          title: '资产负债管理',
          brief: '银行的生意：短借长贷，赚息差。',
          q: [
            { stem: '银行的核心盈利模式是：', options: ['存贷利差', '手续费唯一', '炒股', '发债'], answer: 0, explain: '净息差是主要收入来源之一。' },
            { stem: '利率上升对持有大量长期固息资产的银行：', options: ['有利', '不利（资产贬值）', '无影响', '不确定'], answer: 1, explain: '久期缺口导致净值下降。' },
            { stem: '资本充足率监管的目的是：', options: ['限制规模', '吸收损失、防范系统性风险', '提高利润', '限制分红'], answer: 1, explain: '资本是风险缓冲。' }
          ],
          doc: {
            lead: '这一章讲银行的资产负债表与利率风险。',
            sections: [
              { id: 'bs', title: '两张表', html: `<p>资产（贷款、债券）vs 负债（存款、同业）+ 资本。</p>` },
              { id: 'gap', title: '缺口', html: `<p>利率敏感性缺口与久期缺口；缺口为正时利率上升不利。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '信用风险',
          brief: '贷款能不能收回：评级、拨备与不良。',
          q: [
            { stem: '不良贷款率是：', options: ['不良贷款/总贷款', '拨备/贷款', '资本/资产', '利润/资产'], answer: 0, explain: '资产质量的核心指标。' },
            { stem: '拨备覆盖率衡量：', options: ['贷款损失准备对不良贷款的覆盖程度', '资本充足', '流动性', '盈利'], answer: 0, explain: '风险抵补能力。' },
            { stem: '信用风险管理的首要环节是：', options: ['贷前审查与评级', '贷后催收', '核销', '发债'], answer: 0, explain: '准入决定大部分风险。' }
          ],
          doc: {
            lead: '这一章讲信用风险的识别与计量。',
            sections: [
              { id: 'rating', title: '评级', html: `<p>5C 原则（品行、能力、资本、担保、环境）；内部评级。</p>` },
              { id: 'provision', title: '拨备', html: `<p>五级分类、拨备覆盖率、资本充足率三道防线。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '流动性风险',
          brief: '挤兑与错配：银行最古老的死法。',
          q: [
            { stem: '流动性风险指的是：', options: ['无法及时以合理成本获得资金', '资产贬值', '客户违约', '利润下降'], answer: 0, explain: '不能偿付到期债务的风险。' },
            { stem: '存款保险制度的作用是：', options: ['防止挤兑、保护小额存款人', '提高利率', '增加贷款', '限制竞争'], answer: 0, explain: '稳定预期，降低挤兑动机。' },
            { stem: '流动性覆盖率（LCR）要求银行：', options: ['持有足够优质流动性资产应对 30 天压力', '资本充足', '贷款分散', '盈利稳定'], answer: 0, explain: '巴塞尔Ⅲ 的流动性指标。' }
          ],
          doc: {
            lead: '这一章讲流动性管理。',
            sections: [
              { id: 'risk', title: '来源', html: `<p>期限错配、集中度、市场信心；挤兑的自我实现。</p>` },
              { id: 'tools', title: '工具', html: `<p>LCR、NSFR、存款保险、最后贷款人、央行流动性工具。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        }
      ]
    },

    /* ---- 大四 ---- */
    {
      name: '金融数据分析',
      chapters: [
        {
          title: '数据与因子',
          brief: '金融数据的第一课：复权、对齐、生存偏差。',
          q: [
            { stem: '股票价格分析前必须处理：', options: ['复权（分红送股）', '颜色', '字体', '页边距'], answer: 0, explain: '不复权会产生虚假跳空。' },
            { stem: '生存偏差指的是：', options: ['只保留存续样本导致高估收益', '样本太少', '数据缺失', '计算错误'], answer: 0, explain: '退市/倒闭公司被剔除。' },
            { stem: '因子构建后通常要做：', options: ['标准化与去极值', '直接排序', '随机打乱', '取对数'], answer: 0, explain: '标准化后可比，去极值避免异常值主导。' }
          ],
          doc: {
            lead: '这一章讲数据处理的三个坑。',
            sections: [
              { id: 'clean', title: '三件事', html: `<ul><li>复权与口径统一</li><li>对齐（时间、股票池）</li><li>生存偏差与停牌处理</li></ul>` },
              { id: 'factor', title: '因子', html: `<p>标准化、中性化（行业/市值）、去极值。</p>` }
            ],
            refs: [ECON_REFS.nber, ECON_REFS.stats]
          }
        },
        {
          title: '回测',
          brief: '回测最贵的不是算力，是偏差。',
          q: [
            { stem: '前视偏差（look-ahead）指的是：', options: ['使用了未来信息', '回测时间太短', '样本太少', '没有基准'], answer: 0, explain: '如用当日收盘价决定当日买入。' },
            { stem: '回测中必须计入：', options: ['交易成本与滑点', '只有收益', '只有波动', '只有最大回撤'], answer: 0, explain: '忽略成本会高估策略。' },
            { stem: '样本外检验的作用是：', options: ['检验策略是否过拟合', '增加样本', '提高收益', '减少成本'], answer: 0, explain: '在未参与调参的数据上验证。' }
          ],
          doc: {
            lead: '这一章讲回测的五个常见错误。',
            sections: [
              { id: 'bias', title: '五种偏差', html: `<ul><li>前视</li><li>生存</li><li>忽略成本</li><li>过度拟合</li><li>数据窥探</li></ul>` },
              { id: 'valid', title: '验证', html: `<p>样本外 + 滚动窗口 + 不同市场；报告要给出失效条件。</p>` }
            ],
            refs: [ECON_REFS.nber]
          }
        },
        {
          title: '研报与表达',
          brief: '把模型结论翻译成可决策的语言。',
          q: [
            { stem: '研报结论部分必须包含：', options: ['目标与风险提示', '只有目标价', '公司简介', '行业历史'], answer: 0, explain: '判断要有边界与风险。' },
            { stem: '向非专业读者解释 β，最好的说法是：', options: ['"大盘涨 1%，它平均涨多少"', '协方差除以方差', '回归斜率', '敏感度'], answer: 0, explain: '用可感知的类比。' },
            { stem: '图表在研报中的作用是：', options: ['支撑论点', '装饰', '填充页数', '展示软件'], answer: 0, explain: '一图一结论。' }
          ],
          doc: {
            lead: '这一章讲研报的写法。',
            sections: [
              { id: 'structure', title: '结构', html: `<p>结论 → 逻辑链 → 数据 → 风险；每部分可独立阅读。</p>` },
              { id: 'language', title: '语言', html: `<p>用可检验的表述："若 X 发生则 Y"，避免"可能""或许"堆砌。</p>` }
            ],
            refs: [ECON_REFS.nber]
          }
        }
      ]
    },
    {
      name: '实习',
      chapters: [
        {
          title: '岗位选择',
          brief: '卖方研究、买方研究、投行、银行、企业财务：路径不同。',
          q: [
            { stem: '卖方研究员的典型工作不包括：', options: ['撰写研究报告', '路演与客户沟通', '直接管理基金组合', '跟踪行业数据'], answer: 2, explain: '直接管钱是买方（基金经理）的工作。' },
            { stem: '投行（IB）实习最常见的工作是：', options: ['财务建模与材料制作', '下单交易', '风控审批', '客服'], answer: 0, explain: 'pitch book、财务模型、尽调支持。' },
            { stem: '选择实习岗位最该考虑：', options: ['能否接触真实业务与产出作品', '公司名气', '工位大小', '通勤'], answer: 0, explain: '可迁移的经验比名气重要。' }
          ],
          doc: {
            lead: '这一章比较五类岗位。',
            sections: [
              { id: 'paths', title: '五类', html: `<ul><li>卖方研究</li><li>买方研究</li><li>投行</li><li>银行</li><li>企业财务</li></ul>` },
              { id: 'choose', title: '选择', html: `<p>看三件事：能否上手真实任务、有没有人带、能否产出可展示的成果。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '研究方法',
          brief: '行业研究的基本功：数据、产业链、财务。',
          q: [
            { stem: '行业研究的第一步通常是：', options: ['画产业链与竞争格局', '预测股价', '写结论', '联系高管'], answer: 0, explain: '先理解结构与玩家。' },
            { stem: '财务建模中"三表联动"指的是：', options: ['利润表、资产负债表、现金流量表相互勾稽', '三家公司', '三个季度', '三种货币'], answer: 0, explain: '三表联动是建模基础。' },
            { stem: '调研纪要注意：', options: ['区分事实与观点、保留可核实信息', '只记结论', '不署名', '公开全部信息'], answer: 0, explain: '合规与可追溯很重要。' }
          ],
          doc: {
            lead: '这一章讲研究的四步。',
            sections: [
              { id: 'steps', title: '四步', html: `<ol><li>行业空间与格局</li><li>公司竞争力</li><li>财务与估值</li><li>风险与催化剂</li></ol>` },
              { id: 'tool', title: '工具', html: `<p>Wind/Choice 取数、Excel/Python 建模、纪要整理。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '复盘与转化',
          brief: '把三个月实习变成一段能讲的能力。',
          q: [
            { stem: '实习复盘最有价值的写法是：', options: ['罗列工作', '记录问题、做法、结果与反思', '抒情', '抄日报'], answer: 1, explain: '结构化复盘可转化为面试素材。' },
            { stem: '实习中最重要的软技能是：', options: ['主动确认需求与及时反馈', '加班', '社交', '背数据'], answer: 0, explain: '减少返工、建立信任。' },
            { stem: '离职前应当：', options: ['交接清楚、留存作品（合规范围内）', '直接走', '删除文件', '不再联系'], answer: 0, explain: '职业口碑与后续推荐都靠这一步。' }
          ],
          doc: {
            lead: '这一章讲复盘与交接。',
            sections: [
              { id: 'review', title: '复盘', html: `<p>每周五行：做了什么、遇到什么、怎么解决、学到什么、下周计划。</p>` },
              { id: 'handover', title: '交接', html: `<p>文档化、留联系方式、合规范围内保留可展示成果。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        }
      ]
    },
    {
      name: '考研与求职',
      chapters: [
        {
          title: '考研：数学与专业课',
          brief: '金融考研：数学是分水岭，专业课考金融学综合。',
          q: [
            { stem: '金融专硕常见的考试科目是：', options: ['数学三或 396 + 金融学综合', '只考英语', '只考政治', '只考编程'], answer: 0, explain: '多数院校考 396 联考或数学三 + 431 金融学综合。' },
            { stem: '431 金融学综合通常覆盖：', options: ['货币银行、公司金融、投资学', '只考会计', '只考统计', '只考英语'], answer: 0, explain: '三块是常见范围。' },
            { stem: '择校最该看：', options: ['科目组合、报录比与专业课风格', '城市', '学费', '宿舍'], answer: 0, explain: '匹配度决定胜率。' }
          ],
          doc: {
            lead: '这一章讲考研的两条主线。',
            sections: [
              { id: 'subjects', title: '科目', html: `<ul><li>396：数学基础 + 逻辑 + 写作</li><li>431：货银、公司金融、投资学</li></ul>` },
              { id: 'plan', title: '节奏', html: `<p>3–6 月数学与专业课一轮；7–8 月强化；9–10 月真题；11–12 月模拟。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '求职：简历与面试',
          brief: '金融求职：实习经历 > 证书 > 成绩。',
          q: [
            { stem: '金融简历中最有分量的是：', options: ['相关实习与分析作品', '社团经历', '兴趣爱好', '绩点'], answer: 0, explain: '可验证的实务经验最直接。' },
            { stem: '行为面试常用的 STAR 结构是：', options: ['情境—任务—行动—结果', '总结—分析—建议', '问题—方法—结论', '计划—执行—检查'], answer: 0, explain: '结构化叙述经历。' },
            { stem: '技术面常问"给一只股票估值"，最佳回答路径是：', options: ['先问行业与假设，再选方法', '直接给数字', '背公式', '说不会'], answer: 0, explain: '澄清假设体现专业。' }
          ],
          doc: {
            lead: '这一章讲简历与面试准备。',
            sections: [
              { id: 'resume', title: '简历', html: `<p>一页、量化、结果导向：'独立完成 XX 行业报告，覆盖 8 家公司'。</p>` },
              { id: 'interview', title: '面试', html: `<p>STAR 讲故事；技术面先澄清再作答；准备 2 个"我问面试官"的问题。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '作品集',
          brief: '一份研报 + 一个模型 + 一段实习复盘。',
          q: [
            { stem: '金融求职作品集最核心的是：', options: ['一份完整的公司/行业研究报告', '成绩单', '证书', '自荐信'], answer: 0, explain: '研究能力最直观的证明。' },
            { stem: '展示财务模型时，最应说明：', options: ['关键假设与敏感性', '公式数量', '颜色', '文件大小'], answer: 0, explain: '假设决定结论。' },
            { stem: '使用公开数据做研究时应当：', options: ['标注来源与时间', '不标注', '随意修改', '只说"公开数据"'], answer: 0, explain: '可追溯是专业性。' }
          ],
          doc: {
            lead: '这一章讲作品集三件套。',
            sections: [
              { id: 'kit', title: '三件套', html: `<ul><li>5–10 页研报</li><li>Excel/Python 估值模型（含敏感性表）</li><li>实习复盘</li></ul>` },
              { id: 'tell', title: '讲法', html: `<p>2 分钟：标的、逻辑、假设、风险。</p>` }
            ],
            refs: [ECON_REFS.nber]
          }
        }
      ]
    }
  ];

  var override = {};
  TITLES.forEach(function (t) { override[t] = { modules: [] }; });
  COURSES.forEach(function (c, ci) {
    var stageTitle = TITLES[Math.floor(ci / 3)];
    if (!stageTitle) return;
    var levels = c.chapters.map(function (ch, k) {
      DOCS[MAJOR + '-m' + ci + '-l' + k] = ch.doc;
      return { name: '第 ' + (k + 1) + ' 章 · ' + ch.title, brief: ch.brief, questions: ch.q, ready: true };
    });
    override[stageTitle].modules.push({ name: c.name, levels: levels });
  });
  MAJOR_STAGE_OVERRIDES[MAJOR] = override;
})();
