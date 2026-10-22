/* ==========================================================
   econ-courses.js · 「经济学」专业：12 门课 × 3 章
   --------------------------------------------------------
   每学期 3 门课、每门 3 章 = 9 关；共 36 关。
   替换 economics.js 里经济学原来的「4 门课 × 2 章」。
   ========================================================== */

(function () {
  var MAJOR = 'economics-经济学';
  var TITLES = stageTitlesOf('economics');

  var COURSES = [
    /* ---- 大一 · 数学与常识 ---- */
    {
      name: '高等数学',
      chapters: [
        {
          title: '极限与连续',
          brief: '极限是数学分析的地基，也是"边际"思想的来源。',
          q: [
            { stem: 'lim(x→0) sinx/x 等于：', options: ['0', '1', '∞', '不存在'], answer: 1, explain: '重要极限，常用于近似 sinx ≈ x。' },
            { stem: '函数在某点连续的含义是：', options: ['有定义', '极限存在且等于函数值', '可导', '单调'], answer: 1, explain: '连续 = 左极限 = 右极限 = 函数值。' },
            { stem: '经济学中"边际"对应数学上的：', options: ['函数值', '导数', '积分', '极限'], answer: 1, explain: '边际量 = 总量函数的导数（变化率）。' }
          ],
          doc: {
            lead: '这一章把极限、连续与导数打通。',
            sections: [
              { id: 'limit', title: '极限', html: `<p>数列与函数的极限、左右极限、无穷小与无穷大；连续性的判断。</p>` },
              { id: 'deriv', title: '导数', html: `<p>导数=瞬时变化率；经济学里"边际成本""边际效用"都是导数。</p>
<div class="doc-tip">💡 把"边际"读成"再多一单位带来的变化"，就不会混淆总量与边际。</div>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '导数与最优化',
          brief: '经济学一半的结论来自"求极值"。',
          q: [
            { stem: '函数在极值点处（可导时）一阶导数：', options: ['必为正', '必为零', '必为负', '不存在'], answer: 1, explain: '费马定理：可导极值点导数为零。' },
            { stem: '二阶导数为负说明该点为：', options: ['极小值', '极大值', '拐点', '不连续'], answer: 1, explain: '二阶导小于零 → 凹函数 → 极大值。' },
            { stem: '利润最大化的一阶条件是：', options: ['MR = MC', 'MR > MC', 'MR < MC', 'P = AC'], answer: 0, explain: '边际收益等于边际成本时利润最大。' }
          ],
          doc: {
            lead: '这一章讲极值与约束最优化。',
            sections: [
              { id: 'foc', title: '一阶与二阶条件', html: `<p>一阶导数为零定位候选点，二阶导数判断极大/极小。</p>` },
              { id: 'constraint', title: '约束最优化', html: `<p>拉格朗日乘子法：在预算约束下最大化效用，乘子的经济含义是"放松一单位约束带来的增量"。</p>
<div class="doc-tip">💡 拉格朗日乘子就是影子价格。</div>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '积分与动态',
          brief: '积分把"流量"加总成"存量"，也处理贴现与增长。',
          q: [
            { stem: '定积分在经济学中常用来：', options: ['求导', '求总量（如消费者剩余的面积）', '求极限', '解方程'], answer: 1, explain: '面积即累积量，如消费者剩余。' },
            { stem: '连续复利下，本金 P、利率 r、时间 t 的终值为：', options: ['P(1+r)t', 'Pe^{rt}', 'P+rt', 'P/(1+r)'], answer: 1, explain: '连续复利极限为 Pe^{rt}。' },
            { stem: '增长率 g 下，变量翻倍所需时间约为：', options: ['70/g', 'g/70', '100g', 'g²'], answer: 0, explain: '70 法则：翻倍时间 ≈ 70 / 增长率(%)。' }
            ],
          doc: {
            lead: '这一章讲积分与增长。',
            sections: [
              { id: 'area', title: '面积即总量', html: `<p>消费者剩余、生产者剩余都是面积；连续贴现用指数函数。</p>` },
              { id: 'growth', title: '增长', html: `<p>70 法则、复利与现值：理解"长期增长"的量级感。</p>
<div class="doc-tip">💡 年增长 7% ≈ 十年翻倍。</div>` }
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
          title: '供求与弹性',
          brief: '价格是信号：供给、需求与弹性决定冲击由谁承担。',
          q: [
            { stem: '需求价格弹性大于 1 时，降价会使总收益：', options: ['减少', '增加', '不变', '不确定'], answer: 1, explain: '富有弹性时销量增幅大于价格降幅。' },
            { stem: '对卖方征税，税负主要由谁承担？', options: ['买方', '弹性小的一方', '政府', '平均分担'], answer: 1, explain: '弹性越小越难转嫁，承担份额越大。' },
            { stem: '供给曲线向右上方倾斜，说明：', options: ['价格越高供给越多', '价格越高供给越少', '供给与价格无关', '供给固定'], answer: 0, explain: '价格上升激励更多生产。' }
          ],
          doc: {
            lead: '这一章讲价格机制与弹性。',
            sections: [
              { id: 'equilibrium', title: '均衡', html: `<p>供求相等决定均衡价格与数量；短缺与过剩是价格偏离均衡的结果。</p>` },
              { id: 'elasticity', title: '弹性', html: `<p>点弹性与弧弹性；需求弹性、收入弹性、交叉弹性。</p>
<div class="doc-tip">💡 弹性决定"谁承担冲击"，也决定税收与补贴的效果。</div>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '消费者与生产者',
          brief: '偏好与成本是两条腿：一个决定要什么，一个决定能供给多少。',
          q: [
            { stem: '无差异曲线的斜率（边际替代率）反映：', options: ['价格比', '两种商品的边际替代意愿', '收入水平', '成本'], answer: 1, explain: 'MRS 表示保持效用不变时愿以多少 Y 换一单位 X。' },
            { stem: '短期边际成本曲线与平均成本曲线的关系是：', options: ['MC 穿过 AC 的最低点', 'MC 始终高于 AC', 'MC 始终低于 AC', '两者无关'], answer: 0, explain: 'MC 从下方穿过 AC 最低点，是经典结论。' },
            { stem: '规模经济意味着长期平均成本：', options: ['随产量增加而下降', '上升', '不变', '先升后降'], answer: 0, explain: '规模报酬递增 → 长期平均成本下降。' }
          ],
          doc: {
            lead: '这一章讲两套曲线。',
            sections: [
              { id: 'consumer', title: '消费者', html: `<p>效用、预算线、无差异曲线；最优选择处 MRS = 价格比。</p>` },
              { id: 'producer', title: '生产者', html: `<p>短期成本（FC/VC/AC/MC）、长期成本与规模经济。</p>
<div class="doc-tip">💡 短期看边际，长期看规模。</div>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '市场结构与福利',
          brief: '从完全竞争到垄断：价格、产量与效率的差异。',
          q: [
            { stem: '垄断厂商的产量相对于完全竞争：', options: ['更多', '更少、价格更高', '相同', '无法比较'], answer: 1, explain: '垄断限制产量、抬高价格，造成无谓损失。' },
            { stem: '完全竞争厂商长期均衡时：', options: ['P = MC = AC 最低点', 'P > AC', 'P < MC', '有超额利润'], answer: 0, explain: '长期自由进出使经济利润为零。' },
            { stem: '寡头市场的典型特征是：', options: ['厂商众多且无策略互动', '少数厂商存在策略互动', '只有一个厂商', '完全同质'], answer: 1, explain: '寡头厂商相互依存，需用博弈论分析。' }
          ],
          doc: {
            lead: '这一章用"结构—行为—绩效"看市场。',
            sections: [
              { id: 'types', title: '四种结构', html: `<ul><li>完全竞争：价格接受者</li><li>垄断竞争：差异化</li><li>寡头：策略互动</li><li>垄断：定价者</li></ul>` },
              { id: 'welfare', title: '福利', html: `<p>消费者剩余 + 生产者剩余；垄断与税收造成无谓损失。</p>` }
            ],
            refs: [ECON_REFS.stats, ECON_REFS.wb]
          }
        }
      ]
    },
    {
      name: '政治经济学',
      chapters: [
        {
          title: '商品与价值',
          brief: '从商品二重性出发：使用价值与价值。',
          q: [
            { stem: '商品二重性指的是：', options: ['使用价值与价值', '价格与成本', '供给与需求', '具体劳动与抽象劳动'], answer: 0, explain: '使用价值是效用，价值是凝结的无差别人类劳动。' },
            { stem: '价值量由什么决定？', options: ['个别劳动时间', '社会必要劳动时间', '供求关系', '成本'], answer: 1, explain: '社会必要劳动时间决定价值量。' },
            { stem: '具体劳动与抽象劳动的关系是：', options: ['同一劳动的两个方面', '两种不同劳动', '无关', '先后关系'], answer: 0, explain: '具体劳动创造使用价值，抽象劳动形成价值。' }
          ],
          doc: {
            lead: '这一章讲劳动价值论的基本范畴。',
            sections: [
              { id: 'dual', title: '二重性', html: `<p>使用价值 / 价值；具体劳动 / 抽象劳动；社会必要劳动时间。</p>` },
              { id: 'form', title: '价值形式', html: `<p>从简单价值形式到货币形式，货币是价值形式发展的结果。</p>
<div class="doc-tip">💡 与西方经济学对照：一个从"生产"出发，一个从"选择"出发。</div>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '资本与剩余价值',
          brief: '剩余价值从哪来：劳动力成为商品。',
          q: [
            { stem: '剩余价值的源泉是：', options: ['流通中的贱买贵卖', '雇佣工人的剩余劳动', '机器', '资本家的节俭'], answer: 1, explain: '剩余价值在生产中由剩余劳动创造。' },
            { stem: '不变资本与可变资本的区别是：', options: ['是否用于购买生产资料 vs 劳动力', '是否固定', '是否流动', '是否盈利'], answer: 0, explain: '不变资本 c 购买生产资料，可变资本 v 购买劳动力。' },
            { stem: '剩余价值率 m\' 等于：', options: ['m/v', 'm/c', 'm/(c+v)', 'c/v'], answer: 0, explain: '剩余价值率 = 剩余价值 / 可变资本。' }
          ],
          doc: {
            lead: '这一章讲资本与剥削的理论结构。',
            sections: [
              { id: 'capital', title: 'c 与 v', html: `<p>不变资本转移价值，可变资本增殖价值；剩余价值率 m/v。</p>` },
              { id: 'absolute', title: '两种剩余价值', html: `<p>绝对剩余价值（延长劳动时间）与相对剩余价值（提高劳动生产率）。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '资本积累与危机',
          brief: '积累的动力与矛盾：利润率趋向下降与周期性危机。',
          q: [
            { stem: '资本有机构成提高指的是：', options: ['c/v 提高', 'v/c 提高', 'm/v 提高', 'c+m 提高'], answer: 0, explain: '有机构成 c/v 随技术进步提高。' },
            { stem: '利润率趋向下降规律的直接原因是：', options: ['工资上涨', '资本有机构成提高', '税率上升', '需求下降'], answer: 1, explain: 'c/v 上升使利润率趋于下降，但存在反作用因素。' },
            { stem: '经济危机的可能性根源于：', options: ['货币作为流通手段与支付手段', '资本家贪婪', '政府失职', '自然灾害'], answer: 0, explain: '马克思从商品与货币的矛盾分析危机的可能性。' }
          ],
          doc: {
            lead: '这一章讲积累的矛盾。',
            sections: [
              { id: 'accum', title: '积累', html: `<p>剩余价值资本化 → 资本有机构成提高 → 相对过剩人口。</p>` },
              { id: 'crisis', title: '危机', html: `<p>利润率下降与实现困难；危机的可能性、现实性与周期性。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        }
      ]
    },

    /* ---- 大二 · 专业基础 ---- */
    {
      name: '宏观经济学',
      chapters: [
        {
          title: 'GDP 与核算',
          brief: '总量从核算开始：生产法、收入法、支出法。',
          q: [
            { stem: '支出法 GDP 的组成是：', options: ['C+I+G+NX', 'C+S+T', '工资+利润', 'M2×V'], answer: 0, explain: '消费、投资、政府购买、净出口。' },
            { stem: '名义 GDP 与实际 GDP 的差别在于：', options: ['是否扣除通胀', '是否包含出口', '是否含政府支出', '统计口径'], answer: 0, explain: '实际 GDP 以不变价格计算，剔除价格变动。' },
            { stem: 'GDP 与 GNP 的差别是：', options: ['国土 vs 国民', '是否含税收', '是否含折旧', '统计频率'], answer: 0, explain: 'GDP 按国土原则，GNP 按国民原则。' }
          ],
          doc: {
            lead: '这一章讲核算恒等式与三个口径。',
            sections: [
              { id: 'three', title: '三种方法', html: `<p>生产法（增加值）、收入法（要素收入）、支出法（C+I+G+NX）。</p>` },
              { id: 'care', title: '易错点', html: `<p>二手交易、转移支付、家务劳动不计入 GDP；存货变动计入投资。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '通胀与失业',
          brief: '物价与就业：短期替代、长期垂直。',
          q: [
            { stem: 'CPI 衡量的是：', options: ['生产者成本', '居民消费价格', '股价', '汇率'], answer: 1, explain: 'CPI 反映居民消费篮子的价格变化。' },
            { stem: '短期菲利普斯曲线描述：', options: ['通胀与失业同向', '通胀与失业此消彼长', '无关', '与产出无关'], answer: 1, explain: '短期存在替代关系。' },
            { stem: '自然失业率包括：', options: ['周期性失业', '摩擦性 + 结构性失业', '只有摩擦性', '只有结构性'], answer: 1, explain: '自然失业率由摩擦性与结构性因素构成。' }
          ],
          doc: {
            lead: '这一章讲三个总量的关系。',
            sections: [
              { id: 'inflation', title: '通胀', html: `<p>需求拉动、成本推动、预期；CPI/PPI/GDP 平减指数。</p>` },
              { id: 'unemploy', title: '失业', html: `<p>摩擦性、结构性、周期性；奥肯定律联系产出与失业。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '财政与货币政策',
          brief: '两只手：财政管收支，货币管利率与流动性。',
          q: [
            { stem: '扩张性财政政策的典型组合是：', options: ['增支减税', '减支增税', '提高准备金率', '提高利率'], answer: 0, explain: '增支减税刺激总需求。' },
            { stem: '公开市场操作买入国债会：', options: ['增加基础货币', '减少基础货币', '提高准备金率', '减少货币供给'], answer: 0, explain: '央行买入国债投放基础货币。' },
            { stem: '财政政策的"挤出效应"指：', options: ['政府支出增加导致利率上升、私人投资减少', '税收增加', '出口下降', '通胀'], answer: 0, explain: '政府融资推高利率，挤出私人投资。' }
          ],
          doc: {
            lead: '这一章讲两大政策工具与传导。',
            sections: [
              { id: 'fiscal', title: '财政', html: `<p>政府支出、税收、赤字与国债；乘数效应与自动稳定器。</p>` },
              { id: 'monetary', title: '货币', html: `<p>三大工具：准备金率、再贴现、公开市场操作；传导：利率 → 投资 → 产出。</p>
<div class="doc-tip">💡 财政看"钱花到哪"，货币看"钱的价格"。</div>` }
            ],
            refs: [ECON_REFS.stats]
          }
        }
      ]
    },
    {
      name: '统计学',
      chapters: [
        {
          title: '描述统计',
          brief: '先看清数据：中心、离散、分布。',
          q: [
            { stem: '收入数据适合用什么描述中心？', options: ['均值', '中位数', '众数', '方差'], answer: 1, explain: '右偏分布中位数更稳健。' },
            { stem: '标准差衡量：', options: ['集中趋势', '离散程度', '相关', '样本量'], answer: 1, explain: '围绕均值的波动。' },
            { stem: '正态分布的约 95% 数据落在：', options: ['±1σ', '±2σ', '±3σ', '±0.5σ'], answer: 1, explain: '经验法则：68% / 95% / 99.7%。' }
          ],
          doc: {
            lead: '这一章讲三个描述工具。',
            sections: [
              { id: 'center', title: '中心', html: `<p>均值、中位数、众数的适用场景。</p>` },
              { id: 'shape', title: '分布', html: `<p>偏度、峰度、正态性；异常值处理。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '推断统计',
          brief: '用样本说总体：置信区间与假设检验。',
          q: [
            { stem: 'p 值的正确解释是：', options: ['原假设为真的概率', '原假设下观察到当前或更极端结果的概率', '结论正确的概率', '效应大小'], answer: 1, explain: 'p 值不是"结论为真"的概率。' },
            { stem: '样本量增大，标准误：', options: ['增大', '减小', '不变', '先增后减'], answer: 1, explain: 'SE = σ/√n。' },
            { stem: '第一类错误是：', options: ['原假设为真却拒绝', '原假设为假却不拒绝', '样本太小', '计算错误'], answer: 0, explain: '弃真错误，概率为 α。' }
          ],
          doc: {
            lead: '这一章讲推断的两块。',
            sections: [
              { id: 'ci', title: '置信区间', html: `<p>估计 ± 临界值 × 标准误；解释为长期覆盖率。</p>` },
              { id: 'test', title: '检验', html: `<p>原假设、显著性水平、两类错误、效应量。</p>
<div class="doc-tip">⚠️ 显著 ≠ 重要；要报告效应大小。</div>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '相关与回归',
          brief: '相关不等于因果，但回归是量化关系的起点。',
          q: [
            { stem: '相关系数 r = 0 意味着：', options: ['无因果关系', '无线性相关', '完全无关', '有非线性关系'], answer: 1, explain: 'r 只衡量线性相关。' },
            { stem: '简单线性回归的斜率表示：', options: ['X 变动一单位 Y 的平均变动', '截距', 'R²', '相关系数'], answer: 0, explain: '斜率即边际效应估计。' },
            { stem: 'R² 的含义是：', options: ['解释的方差比例', '因果强度', '显著性', '样本量'], answer: 0, explain: '模型解释的因变量变异比例。' }
          ],
          doc: {
            lead: '这一章讲相关与一元回归。',
            sections: [
              { id: 'corr', title: '相关', html: `<p>Pearson 与 Spearman；相关不蕴含因果，警惕遗漏变量。</p>` },
              { id: 'ols', title: 'OLS', html: `<p>最小二乘估计、拟合优度、残差诊断。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        }
      ]
    },
    {
      name: '会计学原理',
      chapters: [
        {
          title: '复式记账',
          brief: '有借必有贷，借贷必相等。',
          q: [
            { stem: '会计恒等式是：', options: ['资产=负债+所有者权益', '资产=收入−费用', '利润=资产+负债', '现金=利润'], answer: 0, explain: '资产负债表恒等式。' },
            { stem: '购买设备支付现金，影响是：', options: ['资产内部一增一减', '资产增加', '负债增加', '所有者权益增加'], answer: 0, explain: '固定资产增加、现金减少，总额不变。' },
            { stem: '借贷记账法中，资产增加记：', options: ['借方', '贷方', '两方', '不记'], answer: 0, explain: '资产、费用增加记借方；负债、权益、收入增加记贷方。' }
          ],
          doc: {
            lead: '这一章讲记账规则。',
            sections: [
              { id: 'equation', title: '恒等式', html: `<p>资产 = 负债 + 所有者权益；扩展式含收入与费用。</p>` },
              { id: 'rules', title: '借贷规则', html: `<p>资产/费用：借增贷减；负债/权益/收入：贷增借减。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '三大报表',
          brief: '资产负债表看家底，利润表看本事，现金流量表看命。',
          q: [
            { stem: '反映某一时点财务状况的报表是：', options: ['资产负债表', '利润表', '现金流量表', '所有者权益变动表'], answer: 0, explain: '资产负债表是时点报表。' },
            { stem: '利润表的核心等式是：', options: ['收入−费用=利润', '资产=负债+权益', '现金流入−流出=净额', '收入+费用=利润'], answer: 0, explain: '利润表反映期间经营成果。' },
            { stem: '企业经营活动现金流为负、净利润为正，可能说明：', options: ['应收账款增加', '盈利造假', '现金充裕', '无影响'], answer: 0, explain: '利润未转化为现金，常见于应收账款上升。' }
          ],
          doc: {
            lead: '这一章讲三张表的关系。',
            sections: [
              { id: 'three', title: '三张表', html: `<ul><li>资产负债表：时点、存量</li><li>利润表：期间、流量</li><li>现金流量表：期间的现金进出</li></ul>` },
              { id: 'link', title: '勾稽', html: `<p>净利润进入所有者权益；现金流与货币资金变动对应。</p>
<div class="doc-tip">💡 三张表要一起看：利润好看但现金流差，是危险信号。</div>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '财务比率',
          brief: '四类比率：偿债、营运、盈利、成长。',
          q: [
            { stem: '流动比率衡量：', options: ['短期偿债能力', '盈利能力', '成长性', '营运效率'], answer: 0, explain: '流动资产 / 流动负债。' },
            { stem: '资产负债率反映：', options: ['长期偿债能力与杠杆', '盈利能力', '周转速度', '成长'], answer: 0, explain: '负债总额 / 资产总额。' },
            { stem: '净资产收益率（ROE）等于：', options: ['净利润/净资产', '净利润/营收', '营收/资产', '毛利/成本'], answer: 0, explain: '杜邦分析可拆为净利率 × 周转率 × 权益乘数。' }
          ],
          doc: {
            lead: '这一章讲四类比率与杜邦分解。',
            sections: [
              { id: 'four', title: '四类', html: `<ul><li>偿债：流动、速动、资产负债率</li><li>营运：存货/应收周转</li><li>盈利：毛利率、净利率、ROE</li><li>成长：营收与利润增速</li></ul>` },
              { id: 'dupont', title: '杜邦', html: `<p>ROE = 净利率 × 总资产周转率 × 权益乘数。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        }
      ]
    },

    /* ---- 大三 · 方向课 ---- */
    {
      name: '计量经济学',
      chapters: [
        {
          title: '回归模型',
          brief: 'OLS 的假设、估计与解释。',
          q: [
            { stem: 'OLS 无偏性的关键假设是：', options: ['误差与解释变量不相关', 'R² 高', '样本大', '变量显著'], answer: 0, explain: '外生性（零条件均值）是无偏的核心。' },
            { stem: '异方差会导致：', options: ['系数有偏', '标准误估计不可靠', 'R² 为负', '模型无法估计'], answer: 1, explain: '异方差主要影响标准误与推断，可用稳健标准误。' },
            { stem: '多重共线性会造成：', options: ['系数估计方差变大、不显著', '系数有偏', 'R² 下降', '无法估计截距'], answer: 0, explain: '共线性不导致偏误，但使估计不精确。' }
          ],
          doc: {
            lead: '这一章讲 OLS 的假设与诊断。',
            sections: [
              { id: 'assume', title: '四个假设', html: `<ul><li>线性于参数</li><li>随机抽样</li><li>无完全共线性</li><li>零条件均值（外生）</li></ul>` },
              { id: 'diagnose', title: '诊断', html: `<p>异方差、共线性（VIF）、异常值、函数形式。</p>` }
            ],
            refs: [ECON_REFS.nber, ECON_REFS.stats]
          }
        },
        {
          title: '内生性与工具变量',
          brief: '因果推断的核心敌人：内生性。',
          q: [
            { stem: '内生性的三个来源是：', options: ['遗漏变量、测量误差、反向因果', '异方差、共线性、自相关', '样本小、缺数据、算力', '随机、双盲、对照'], answer: 0, explain: '三者都会使解释变量与误差相关。' },
            { stem: '工具变量需满足：', options: ['相关性与外生性', '显著性与稳健性', '线性与正态', '大样本与随机'], answer: 0, explain: '与内生变量相关，且仅通过它影响结果。' },
            { stem: '弱工具变量会导致：', options: ['估计偏误且标准误大', '估计更准', 'R² 更高', '无影响'], answer: 0, explain: '第一阶段 F 值过低时 IV 估计不可靠。' }
          ],
          doc: {
            lead: '这一章讲识别策略的入门。',
            sections: [
              { id: 'endo', title: '内生性', html: `<p>遗漏变量、测量误差、反向因果、样本选择。</p>` },
              { id: 'iv', title: '工具变量', html: `<p>两阶段最小二乘（2SLS）；检验相关性（第一阶段 F）与排他性（理论论证）。</p>
<div class="doc-tip">💡 好工具变量的说服力在"故事"，不在统计量。</div>` }
            ],
            refs: [ECON_REFS.nber]
          }
        },
        {
          title: '面板与政策评估',
          brief: '双重差分、固定效应：政策效果怎么估。',
          q: [
            { stem: 'DID 识别的是：', options: ['组间水平差', '处理组与对照组政策前后的变化差', '时间趋势', '均值差'], answer: 1, explain: '双重差分剔除共同趋势。' },
            { stem: 'DID 的关键假设是：', options: ['平行趋势', '随机抽样', '正态分布', '无共线性'], answer: 0, explain: '若无政策，两组趋势应平行。' },
            { stem: '固定效应模型主要控制：', options: ['不随时间变化的个体异质性', '时间趋势', '异方差', '测量误差'], answer: 0, explain: '个体固定效应吸收个体层面不变因素。' }
          ],
          doc: {
            lead: '这一章讲三种常用的政策评估设计。',
            sections: [
              { id: 'did', title: 'DID', html: `<p>处理组 × 政策后；平行趋势检验、事件研究图。</p>` },
              { id: 'fe', title: '固定效应', html: `<p>个体与时间双向固定效应；聚类稳健标准误。</p>` }
            ],
            refs: [ECON_REFS.nber, ECON_REFS.wb]
          }
        }
      ]
    },
    {
      name: '货币金融学',
      chapters: [
        {
          title: '利率与货币供求',
          brief: '利率是资金的价格：可贷资金与流动性偏好。',
          q: [
            { stem: '名义利率、实际利率与通胀的关系（费雪方程）是：', options: ['i = r + π', 'i = r − π', 'r = i + π', 'i = r × π'], answer: 0, explain: '名义利率 ≈ 实际利率 + 通胀预期。' },
            { stem: '货币需求增加（其他不变）会使利率：', options: ['上升', '下降', '不变', '不确定'], answer: 0, explain: '货币需求上升推高均衡利率。' },
            { stem: '流动性陷阱指的是：', options: ['利率极低时货币政策失效', '银行破产', '通胀高企', '汇率崩盘'], answer: 0, explain: '利率接近零下限，增发货币被持有而不进入投资。' }
          ],
          doc: {
            lead: '这一章讲利率决定与货币供求。',
            sections: [
              { id: 'rate', title: '利率', html: `<p>费雪方程、期限结构（预期理论、流动性溢价）。</p>` },
              { id: 'money', title: '货币', html: `<p>M0/M1/M2；货币需求三大动机（交易、预防、投机）。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '银行与货币乘数',
          brief: '商业银行创造存款：乘数效应。',
          q: [
            { stem: '简单货币乘数约为：', options: ['1/准备金率', '准备金率', '1+准备金率', '准备金率²'], answer: 0, explain: 'm ≈ 1/r（简化为现金漏损为零时）。' },
            { stem: '中央银行提高准备金率会：', options: ['收缩货币供给', '扩张货币供给', '利率下降', '通胀上升'], answer: 0, explain: '乘数下降，货币供给收缩。' },
            { stem: '银行的期限错配带来：', options: ['流动性风险', '信用风险', '汇率风险', '操作风险'], answer: 0, explain: '短存长贷，遇挤兑易出问题。' }
          ],
          doc: {
            lead: '这一章讲存款创造与银行风险。',
            sections: [
              { id: 'multiplier', title: '乘数', html: `<p>法定准备金率、超额准备金率、现金漏损率共同决定实际乘数。</p>` },
              { id: 'risk', title: '风险', html: `<p>流动性风险、信用风险、利率风险；存款保险与最后贷款人。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '货币政策传导',
          brief: '从政策利率到实体经济的几条通道。',
          q: [
            { stem: '货币政策传导的利率渠道是：', options: ['政策利率→市场利率→投资与消费', '汇率→出口', '资产价格→财富', '信贷配给'], answer: 0, explain: '最基础的传导路径。' },
            { stem: '量化宽松主要通过什么起作用？', options: ['购买资产压低长期利率、注入流动性', '提高准备金率', '增加税收', '直接发钱'], answer: 0, explain: 'QE 购买国债/MBS 压低长端利率。' },
            { stem: '货币政策面临"传导不畅"时，常见表现是：', options: ['宽货币但信用收缩（宽货币紧信用）', '利率上升', '汇率升值', '通胀下降'], answer: 0, explain: '流动性淤积在金融体系，未进入实体。' }
          ],
          doc: {
            lead: '这一章讲传导渠道与失效情形。',
            sections: [
              { id: 'channels', title: '五条渠道', html: `<ul><li>利率</li><li>信贷</li><li>资产价格</li><li>汇率</li><li>预期</li></ul>` },
              { id: 'limits', title: '失灵', html: `<p>流动性陷阱、信贷配给、银行惜贷、资产负债表衰退。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        }
      ]
    },
    {
      name: '产业经济学',
      chapters: [
        {
          title: '市场结构',
          brief: '用集中度与进入条件刻画市场。',
          q: [
            { stem: 'HHI 指数衡量：', options: ['市场集中度', '通胀', '失业', '汇率'], answer: 0, explain: '份额平方和，越大越集中。' },
            { stem: 'CR4 指的是：', options: ['前四大企业市场份额之和', '四倍成本', '四类产品', '四期增长'], answer: 0, explain: '常用集中度指标。' },
            { stem: '规模经济、范围经济与网络效应都会：', options: ['提高进入壁垒', '降低壁垒', '增加竞争', '降低集中度'], answer: 0, explain: '三者都使在位者具成本或需求优势。' }
          ],
          doc: {
            lead: '这一章讲结构与壁垒。',
            sections: [
              { id: 'measure', title: '集中度', html: `<p>CRn、HHI；市场界定（需求替代、供给替代）。</p>` },
              { id: 'barrier', title: '壁垒', html: `<p>规模经济、沉没成本、网络效应、牌照与专利。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '定价与策略',
          brief: '价格歧视、捆绑、掠夺性定价：厂商的竞争手段。',
          q: [
            { stem: '一级价格歧视指的是：', options: ['对每个消费者收取其最高支付意愿', '统一价格', '按地区定价', '按时间定价'], answer: 0, explain: '完全价格歧视，攫取全部消费者剩余。' },
            { stem: '掠夺性定价的特征是：', options: ['低于成本定价以排挤对手，再提价', '高价销售', '价格联盟', '成本加成'], answer: 0, explain: '短期亏损换取市场势力，需判断是否具有可回收性。' },
            { stem: '捆绑销售可能损害竞争，当它：', options: ['利用市场势力排除相邻市场竞争', '方便消费者', '降低价格', '提高质量'], answer: 0, explain: '关键看是否具有市场势力与排斥效果。' }
          ],
          doc: {
            lead: '这一章讲厂商策略与竞争评估。',
            sections: [
              { id: 'discrim', title: '价格歧视', html: `<p>一、二、三级；条件：市场可分割、需求弹性不同、无套利。</p>` },
              { id: 'strategy', title: '策略', html: `<p>捆绑、独家交易、最惠国条款、掠夺性定价。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '反垄断与规制',
          brief: '效率与创新之间：竞争政策怎么权衡。',
          q: [
            { stem: '反垄断审查中"相关市场"界定的常用方法是：', options: ['SSNIP（小幅但显著非暂时涨价）', '按企业数量', '按注册资本', '按员工数'], answer: 0, explain: 'SSNIP 测试界定市场边界。' },
            { stem: '自然垄断领域更适合：', options: ['放松规制', '价格规制与准入规制', '完全不管', '国有化唯一解'], answer: 1, explain: '自然垄断下竞争不可行，需规制价格与准入。' },
            { stem: '平台经济反垄断的特殊难点是：', options: ['多边市场、网络效应与数据', '没有市场', '没有价格', '不适用法律'], answer: 0, explain: '双边市场使传统市场界定与损害分析复杂化。' }
          ],
          doc: {
            lead: '这一章讲竞争政策与规制。',
            sections: [
              { id: 'antitrust', title: '反垄断', html: `<p>垄断协议、滥用市场支配地位、经营者集中；三步分析：市场界定—市场势力—竞争损害。</p>` },
              { id: 'regulate', title: '规制', html: `<p>价格上限（RPI-X）、准入、普遍服务；激励性规制与成本加成。</p>` }
            ],
            refs: [ECON_REFS.stats, ECON_REFS.wb]
          }
        }
      ]
    },

    /* ---- 大四 · 出口 ---- */
    {
      name: '数据分析与软件',
      chapters: [
        {
          title: '数据清洗',
          brief: '80% 的时间在清洗：口径、缺失、异常。',
          q: [
            { stem: '数据清洗第一步通常是：', options: ['跑回归', '检查变量定义与单位口径', '画图', '写结论'], answer: 1, explain: '口径不统一，后面全错。' },
            { stem: '缺失值处理方式不包括：', options: ['删除', '插补', '作为单独类别', '随机改数使其显著'], answer: 3, explain: '篡改数据属学术不端。' },
            { stem: '异常值处理前应当：', options: ['直接删除', '判断是录入错误还是真实极值', '取对数', '忽略'], answer: 1, explain: '先诊断再处理，并记录理由。' }
          ],
          doc: {
            lead: '这一章讲清洗的标准动作。',
            sections: [
              { id: 'steps', title: '四步', html: `<ol><li>统一口径与单位</li><li>处理缺失</li><li>诊断异常</li><li>构造变量并写文档</li></ol>` },
              { id: 'doc', title: '记录', html: `<p>每个处理决定都要写进代码注释与数据字典，保证可复现。</p>` }
            ],
            refs: [ECON_REFS.nber, ECON_REFS.stats]
          }
        },
        {
          title: '可视化与报告',
          brief: '一图一结论：图表是论证，不是装饰。',
          q: [
            { stem: '选择图表类型首先看：', options: ['颜色', '要表达的比较关系（趋势/分布/相关/占比）', '软件', '页数'], answer: 1, explain: '关系决定图形。' },
            { stem: '截断纵轴的主要问题是：', options: ['显得专业', '放大微小差异、误导读者', '无法绘制', '颜色单调'], answer: 1, explain: '截断轴会夸大变化幅度。' },
            { stem: '报告首页应放：', options: ['方法细节', '核心发现与一句结论', '参考文献', '附录'], answer: 1, explain: '先给结论，细节后置。' }
          ],
          doc: {
            lead: '这一章讲图与报告的组织。',
            sections: [
              { id: 'chart', title: '选图', html: `<ul><li>趋势：折线</li><li>分布：直方/箱线</li><li>相关：散点</li><li>占比：堆叠条</li></ul>` },
              { id: 'report', title: '报告', html: `<p>结论先行（金字塔）、图注自足、来源标注。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '复现与协作',
          brief: '别人能跑出你的结果，结论才算数。',
          q: [
            { stem: '复现性要求提供：', options: ['数据、代码与说明', '只有结论', '截图', '口头解释'], answer: 0, explain: '三者齐全才能复现。' },
            { stem: '版本控制的核心作用是：', options: ['记录改动、可回溯与协作', '自动备份到云', '加快运行', '加密'], answer: 0, explain: 'Git 记录历史与分支协作。' },
            { stem: '项目目录的最佳实践是：', options: ['data/ code/ output/ 分离', '所有文件放桌面', '按日期命名文件夹', '一个文件写到底'], answer: 0, explain: '结构清晰便于复现与交接。' }
          ],
          doc: {
            lead: '这一章讲工程化习惯。',
            sections: [
              { id: 'repo', title: '项目结构', html: `<pre><code>project/
  data/     原始与清洗后数据
  code/     01_clean.do, 02_reg.do
  output/   图表与表格
  README.md 运行说明</code></pre>` },
              { id: 'git', title: '版本控制', html: `<p>小步提交、写清信息、分支实验；不要用"最终版2.xlsx"。</p>` }
            ],
            refs: [ECON_REFS.nber]
          }
        }
      ]
    },
    {
      name: '毕业论文',
      chapters: [
        {
          title: '选题与文献',
          brief: '小问题、可识别、有数据。',
          q: [
            { stem: '经济学本科论文的好选题应当：', options: ['题目宏大', '小切口、有数据、可识别', '纯理论', '翻译'], answer: 1, explain: '可完成与可检验是底线。' },
            { stem: '文献综述的作用是：', options: ['凑字数', '定位争论与缺口', '展示阅读量', '复述教材'], answer: 1, explain: '为你的问题与贡献定位。' },
            { stem: '开题报告最应写清：', options: ['问题、方法、数据、可行性', '致谢', '参考文献格式', '篇幅'], answer: 0, explain: '四要素决定能否完成。' }
          ],
          doc: {
            lead: '这一章讲选题与开题。',
            sections: [
              { id: 'topic', title: '选题', html: `<p>三筛：一句话说清、有数据、能识别因果或有清晰描述。</p>` },
              { id: 'proposal', title: '开题', html: `<ul><li>问题与意义</li><li>文献缺口</li><li>数据与方法</li><li>时间表</li></ul>` }
            ],
            refs: [ECON_REFS.nber]
          }
        },
        {
          title: '数据与识别',
          brief: '论文的含金量在识别策略。',
          q: [
            { stem: '识别策略要在哪部分讲清？', options: ['致谢', '引言与实证设计', '附录', '参考文献'], answer: 1, explain: '引言点题，实证部分详述。' },
            { stem: '稳健性检验的作用是：', options: ['证明结论不依赖特定设定', '增加篇幅', '提高 R²', '展示软件技能'], answer: 0, explain: '换样本、换度量、安慰剂检验。' },
            { stem: '结果不显著时正确做法是：', options: ['改数据', '如实报告并讨论原因', '删掉', '换被解释变量直到显著'], answer: 1, explain: '诚实报告是底线。' }
          ],
          doc: {
            lead: '这一章讲实证论文的骨架。',
            sections: [
              { id: 'design', title: '设计', html: `<p>问题 → 数据 → 模型 → 识别 → 稳健性。</p>` },
              { id: 'write', title: '写作', html: `<p>每个表都要能独立读懂：变量定义、样本、标准误、显著性标记。</p>` }
            ],
            refs: [ECON_REFS.nber, ECON_REFS.stats]
          }
        },
        {
          title: '写作与答辩',
          brief: '论文是写给别人看的论证。',
          q: [
            { stem: '论文摘要应包含：', options: ['问题、方法、主要发现、贡献', '致谢', '目录', '参考文献'], answer: 0, explain: '四要素让读者快速判断价值。' },
            { stem: '答辩被问"你的识别可信吗"，最好的回答是：', options: ['当然可信', '说明识别假设、支持证据与局限', '回避', '改口'], answer: 1, explain: '承认假设与边界是专业表现。' },
            { stem: '结论部分不应：', options: ['回应研究问题', '说明局限', '提出延伸', '夸大因果范围'], answer: 3, explain: '结论不能超出证据支持的范围。' }
          ],
          doc: {
            lead: '这一章讲写作与答辩。',
            sections: [
              { id: 'write', title: '写作', html: `<p>结构：引言—文献—数据—方法—结果—讨论—结论；一图一表一结论。</p>` },
              { id: 'defend', title: '答辩', html: `<p>准备三问：核心发现、最强质疑、如果重做改什么。</p>` }
            ],
            refs: [ECON_REFS.nber]
          }
        }
      ]
    },
    {
      name: '考研与求职',
      chapters: [
        {
          title: '考研：院校与科目',
          brief: '经济学考研：数学是分水岭。',
          q: [
            { stem: '经济学学硕考研通常考：', options: ['数学三 + 专业课（微观/宏观/政治经济学）', '只考数学', '只考英语', '只考政治'], answer: 0, explain: '多数院校考数学三与经济学综合。' },
            { stem: '专业课复习的核心是：', options: ['背结论', '模型推导 + 图形 + 现实解释', '只看真题', '只看教材'], answer: 1, explain: '论述题要求模型与现实的结合。' },
            { stem: '择校最应考虑：', options: ['城市名气', '考试科目、报录比、专业课风格与自身匹配', '学费', '宿舍'], answer: 1, explain: '匹配度决定成功率。' }
          ],
          doc: {
            lead: '这一章讲考研的三块。',
            sections: [
              { id: 'subjects', title: '三块', html: `<ul><li>数学三：高数、线代、概率</li><li>专业课：微观、宏观、政经</li><li>英语政治：长期积累</li></ul>` },
              { id: 'plan', title: '时间', html: `<p>3–6 月数学基础 + 专业课一轮；7–8 月强化；9–10 月真题；11–12 月模拟。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '求职：方向与技能',
          brief: '银行、券商、咨询、企业、公共部门：经济学训练都是通用能力。',
          q: [
            { stem: '银行/券商研究岗最看重：', options: ['数据分析与报告写作', '背诵理论', '社交', '编程速度'], answer: 0, explain: '研究与分析能力是核心。' },
            { stem: '咨询行业笔试常见的题型是：', options: ['案例分析（估算市场规模等）', '古诗默写', '体能测试', '绘画'], answer: 0, explain: 'case interview 考察结构化拆解。' },
            { stem: '经济学背景的通用优势是：', options: ['把问题拆成约束与激励', '记忆力', '外语', '人脉'], answer: 0, explain: '约束条件下的选择框架是底层能力。' }
          ],
          doc: {
            lead: '这一章讲求职方向与准备。',
            sections: [
              { id: 'paths', title: '五个方向', html: `<ul><li>银行/券商</li><li>咨询</li><li>企业战略/运营</li><li>公共部门</li><li>数据/研究岗</li></ul>` },
              { id: 'prep', title: '准备', html: `<p>实习优先；练 case 与数据分析；准备一份行业研究报告。</p>` }
            ],
            refs: [ECON_REFS.stats, ECON_REFS.wb]
          }
        },
        {
          title: '作品集',
          brief: '一份分析报告 + 一份数据作品 + 一段实习复盘。',
          q: [
            { stem: '经济学求职作品集最核心的是：', options: ['成绩单', '一份有数据、有结论的研究报告', '社团经历', '证书'], answer: 1, explain: '可验证的分析能力最重要。' },
            { stem: '面试讲作品的最佳结构是：', options: ['流水账', '问题—数据—方法—发现—风险', '只讲结论', '只讲方法'], answer: 1, explain: '完整链条体现分析能力。' },
            { stem: '引用二手数据时应当：', options: ['不标来源', '标明来源、口径与时间', '随意改动', '只写"据统计"'], answer: 1, explain: '数据可追溯是专业性。' }
          ],
          doc: {
            lead: '这一章讲作品集的组织。',
            sections: [
              { id: 'kit', title: '三件套', html: `<ul><li>行业/公司研究报告（5–10 页）</li><li>数据分析作品（代码 + 图表）</li><li>实习复盘</li></ul>` },
              { id: 'tell', title: '讲法', html: `<p>2 分钟：问题、数据、方法、一个反直觉的发现。</p>` }
            ],
            refs: [ECON_REFS.stats]
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
