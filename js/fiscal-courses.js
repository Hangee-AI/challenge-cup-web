/* ==========================================================
   fiscal-courses.js · 「财政学」专业：12 门课 × 3 章
   --------------------------------------------------------
   每学期 3 门课、每门 3 章 = 9 关；共 36 关。
   替换 economics.js 里财政学原来的「4 门课 × 2 章」。
   ========================================================== */

(function () {
  var MAJOR = 'economics-财政学';
  var TITLES = stageTitlesOf('economics');

  var COURSES = [
    /* ---- 大一 ---- */
    {
      name: '高等数学',
      chapters: [
        {
          title: '极限与连续',
          brief: '财政分析里的增长率、收敛性都从这里来。',
          q: [
            { stem: '年增长 7% 时，规模翻倍约需：', options: ['7 年', '10 年', '14 年', '20 年'], answer: 1, explain: '70 法则。' },
            { stem: '连续函数在一点连续意味着：', options: ['极限等于函数值', '必可导', '必单调', '必为正'], answer: 0, explain: '连续是可导的必要条件。' },
            { stem: 'lim(x→0)(1+x)^{1/x} 等于：', options: ['0', '1', 'e', '∞'], answer: 2, explain: '自然常数定义。' }
          ],
          doc: {
            lead: '这一章讲极限与增长。',
            sections: [
              { id: 'limit', title: '极限', html: `<p>左右极限、等价无穷小。</p>` },
              { id: 'growth', title: '增长', html: `<p>70 法则、复利与收敛。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '导数与最优化',
          brief: '最优税率、最优支出规模都是极值问题。',
          q: [
            { stem: '极值点二阶导数为负说明是：', options: ['极大值', '极小值', '拐点', '不连续'], answer: 0, explain: '凹函数。' },
            { stem: '拉格朗日乘子表示：', options: ['约束的影子价格', '目标值', '斜率', '截距'], answer: 0, explain: '放松一单位约束的增量。' },
            { stem: '税收收入最大化的税率点满足：', options: ['边际收入为零', '边际收入为正', '税率为 100%', '税率为 0'], answer: 0, explain: '拉弗曲线的顶点。' }
          ],
          doc: {
            lead: '这一章讲最优化。',
            sections: [
              { id: 'foc', title: '条件', html: `<p>一阶定位、二阶定性。</p>` },
              { id: 'app', title: '应用', html: `<p>最优税率、最优公共品供给量。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '积分与贴现',
          brief: '公共项目的成本收益要折现。',
          q: [
            { stem: '社会贴现率越高，远期收益的现值：', options: ['越低', '越高', '不变', '不确定'], answer: 0, explain: '折现因子随 r 上升下降。' },
            { stem: '成本收益分析中，净现值大于零意味着：', options: ['项目值得做', '项目亏损', '无法判断', '应放弃'], answer: 0, explain: '收益现值超过成本现值。' },
            { stem: '永续年金现值公式是：', options: ['CF/r', 'CF×r', 'CF/(1+r)', 'CF×n'], answer: 0, explain: '永续年金。' }
          ],
          doc: {
            lead: '这一章讲折现与项目评估。',
            sections: [
              { id: 'pv', title: '现值', html: `<p>PV = CF/(1+r)^n；年金与永续年金。</p>` },
              { id: 'cba', title: '成本收益', html: `<p>NPV、内部收益率、社会贴现率的选择争议。</p>` }
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
          brief: '财政政策的微观基础。',
          q: [
            { stem: '需求缺乏弹性时征税，税负主要由谁承担？', options: ['买方', '卖方', '政府', '平均'], answer: 0, explain: '弹性小的一方承担更多。' },
            { stem: '价格上限会导致：', options: ['短缺', '过剩', '均衡', '无影响'], answer: 0, explain: '需求大于供给。' },
            { stem: '消费者剩余是：', options: ['支付意愿−实际支付', '实际支付', '成本', '税收'], answer: 0, explain: '福利分析基础。' }
          ],
          doc: {
            lead: '这一章讲供求与弹性。',
            sections: [
              { id: 'eq', title: '均衡', html: `<p>价格管制的后果。</p>` },
              { id: 'ela', title: '弹性', html: `<p>决定税负分配与政策效果。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '福利与外部性',
          brief: '市场失灵是财政存在的理由。',
          q: [
            { stem: '负外部性导致：', options: ['产量高于社会最优', '产量低于社会最优', '无影响', '价格下降'], answer: 0, explain: '私人成本低于社会成本。' },
            { stem: '庇古税的目的是：', options: ['使私人成本等于社会成本', '增加收入', '抑制消费', '补贴生产者'], answer: 0, explain: '内部化外部成本。' },
            { stem: '科斯定理强调：', options: ['产权明确且交易成本低时，可自行谈判解决', '政府必须干预', '税收唯一解', '不需要产权'], answer: 0, explain: '产权与交易成本是关键。' }
          ],
          doc: {
            lead: '这一章讲两类市场失灵。',
            sections: [
              { id: 'externality', title: '外部性', html: `<p>正/负外部性；庇古税与补贴；科斯定理。</p>` },
              { id: 'welfare', title: '福利', html: `<p>无谓损失、消费者与生产者剩余。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '公共品',
          brief: '非竞争非排他：市场供给不足。',
          q: [
            { stem: '公共品的两个特征是：', options: ['非竞争、非排他', '竞争、排他', '免费、强制', '可分割'], answer: 0, explain: '搭便车导致供给不足。' },
            { stem: '俱乐部物品的特征是：', options: ['可排他、非竞争', '不可排他', '竞争', '纯公共品'], answer: 0, explain: '如有线电视、高速公路。' },
            { stem: '公共品最优供给条件是：', options: ['各人边际支付意愿之和等于边际成本', '一人支付', '价格等于平均成本', '免费提供'], answer: 0, explain: '萨缪尔森条件。' }
          ],
          doc: {
            lead: '这一章讲公共品的分类与供给。',
            sections: [
              { id: 'types', title: '四类物品', html: `<ul><li>纯公共品：非竞争非排他</li><li>俱乐部物品：可排他非竞争</li><li>公共资源：竞争不可排他</li><li>私人物品</li></ul>` },
              { id: 'supply', title: '供给', html: `<p>萨缪尔森条件；林达尔均衡；搭便车问题。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        }
      ]
    },
    {
      name: '财政学原理',
      chapters: [
        {
          title: '财政职能',
          brief: '配置、分配、稳定：政府的三件事。',
          q: [
            { stem: '财政的三大职能是：', options: ['资源配置、收入分配、经济稳定', '生产、消费、交换', '征税、发债、印钞', '预算、决算、审计'], answer: 0, explain: '马斯格雷夫三职能。' },
            { stem: '收入分配职能主要通过什么实现？', options: ['累进税与转移支付', '公共投资', '货币政策', '汇率'], answer: 0, explain: '再分配工具。' },
            { stem: '稳定职能强调：', options: ['逆周期调节总需求', '扩大政府规模', '增加税收', '减少支出'], answer: 0, explain: '财政政策的宏观功能。' }
          ],
          doc: {
            lead: '这一章讲三职能与政府规模。',
            sections: [
              { id: 'three', title: '三职能', html: `<p>配置（公共品）、分配（再分配）、稳定（逆周期）。</p>` },
              { id: 'size', title: '政府规模', html: `<p>瓦格纳法则、皮考克-怀斯曼梯度效应；财政支出占比的衡量。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '公共支出',
          brief: '钱花在哪：购买性支出与转移性支出。',
          q: [
            { stem: '购买性支出与转移性支出的区别是：', options: ['是否直接换取商品服务', '是否属于政府', '是否纳税', '是否列入预算'], answer: 0, explain: '购买性支出直接消耗资源。' },
            { stem: '财政支出结构分析最关注：', options: ['民生支出与建设支出占比', '总额', '增速', '来源'], answer: 0, explain: '结构反映政策取向。' },
            { stem: '转移支付对收入分配的作用是：', options: ['缩小差距', '扩大差距', '无影响', '只影响富人'], answer: 0, explain: '再分配功能。' }
          ],
          doc: {
            lead: '这一章讲支出的分类与结构。',
            sections: [
              { id: 'types', title: '两类支出', html: `<p>购买性（政府消费与投资）与转移性（社保、补贴）。</p>` },
              { id: 'structure', title: '结构', html: `<p>民生支出占比、建设支出、债务付息；结构变化反映政策重点。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '财政分权',
          brief: '中央与地方：谁收钱、谁花钱。',
          q: [
            { stem: '分税制的核心是：', options: ['按税种划分中央与地方收入', '统一税率', '取消地方税', '全部上缴'], answer: 0, explain: '1994 年分税制改革。' },
            { stem: '纵向财政失衡指的是：', options: ['地方事权多、财权少', '中央没钱', '地方没钱花', '税收太少'], answer: 0, explain: '需转移支付弥补。' },
            { stem: '转移支付的主要类型包括：', options: ['一般性转移支付与专项转移支付', '税收返还唯一', '只给富裕地区', '只给中央'], answer: 0, explain: '一般性（均等化）与专项（指定用途）。' }
          ],
          doc: {
            lead: '这一章讲政府间财政关系。',
            sections: [
              { id: 'division', title: '分税制', html: `<p>中央税、地方税、共享税；事权与支出责任划分。</p>` },
              { id: 'transfer', title: '转移支付', html: `<p>一般性 vs 专项；均等化目标与地方激励。</p>` }
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
          title: '总量与核算',
          brief: 'GDP、CPI、失业：三个基本指标。',
          q: [
            { stem: '支出法 GDP 是：', options: ['C+I+G+NX', 'C+S+T', '工资+利润', 'M2×V'], answer: 0, explain: '四部门。' },
            { stem: 'CPI 衡量：', options: ['消费价格', '生产成本', '股价', '汇率'], answer: 0, explain: '居民消费价格指数。' },
            { stem: '潜在产出指：', options: ['不引发通胀的最大可持续产出', '历史最高', '计划值', '实际值'], answer: 0, explain: '对应自然失业率。' }
          ],
          doc: {
            lead: '这一章讲三个总量。',
            sections: [
              { id: 'gdp', title: 'GDP', html: `<p>三种核算法；名义与实际。</p>` },
              { id: 'others', title: 'CPI 与失业', html: `<p>通胀与失业的度量；奥肯定律。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '财政政策',
          brief: '政府收支如何影响总需求。',
          q: [
            { stem: '扩张性财政政策是：', options: ['增支减税', '减支增税', '提高利率', '减少货币'], answer: 0, explain: '刺激总需求。' },
            { stem: '自动稳定器指的是：', options: ['税收与转移支付随经济自动变化', '央行操作', '财政计划', '汇率制度'], answer: 0, explain: '如累进税与失业救济。' },
            { stem: '挤出效应指：', options: ['政府支出推高利率、减少私人投资', '税收增加', '出口下降', '通胀上升'], answer: 0, explain: '财政扩张的副作用。' }
          ],
          doc: {
            lead: '这一章讲财政政策的机制。',
            sections: [
              { id: 'tools', title: '工具', html: `<p>支出、税收、转移支付；乘数效应。</p>` },
              { id: 'limits', title: '限制', html: `<p>挤出效应、时滞、债务可持续性。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '公债与可持续性',
          brief: '赤字可以，但债要还得起。',
          q: [
            { stem: '债务率通常指：', options: ['债务余额/GDP', '赤字/GDP', '利息/税收', '债务/人口'], answer: 0, explain: '常用可持续性指标。' },
            { stem: '债务可持续的条件之一是：', options: ['名义增长率高于利率', '利率高于增长', '赤字为零', '没有债务'], answer: 0, explain: 'r < g 时债务率可下降。' },
            { stem: '财政赤字货币化的风险是：', options: ['通胀与货币信用受损', '没有风险', '提高利率', '减少债务'], answer: 0, explain: '央行直接为赤字融资。' }
          ],
          doc: {
            lead: '这一章讲债务的两面。',
            sections: [
              { id: 'sustain', title: '可持续性', html: `<p>r 与 g 的关系、初级盈余、债务动态方程。</p>` },
              { id: 'risk', title: '风险', html: `<p>货币化、期限结构、隐性债务。</p>` }
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
          brief: '先看清财政数据的形状。',
          q: [
            { stem: '地区间财力差异常用什么衡量？', options: ['变异系数或基尼系数', '均值', '中位数', '众数'], answer: 0, explain: '离散与不平等指标。' },
            { stem: '标准差衡量：', options: ['离散程度', '集中趋势', '相关', '样本量'], answer: 0, explain: '波动大小。' },
            { stem: '偏度为正说明：', options: ['右尾长', '左尾长', '对称', '无尾'], answer: 0, explain: '少数高值拉长右尾。' }
          ],
          doc: {
            lead: '这一章讲描述工具。',
            sections: [
              { id: 'center', title: '中心与离散', html: `<p>均值、中位数、标准差、变异系数。</p>` },
              { id: 'shape', title: '分布', html: `<p>偏度、峰度、异常值。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '推断统计',
          brief: '用样本推断总体。',
          q: [
            { stem: '95% 置信区间的含义是：', options: ['重复抽样约 95% 的区间覆盖真值', '真值 95% 概率落入', '样本 95% 正确', '数据 95% 在区间'], answer: 0, explain: '长期覆盖率。' },
            { stem: '样本量增大，标准误：', options: ['减小', '增大', '不变', '不确定'], answer: 0, explain: 'SE = σ/√n。' },
            { stem: 'p 值的含义是：', options: ['原假设下观察到当前结果的概率', '结论为真的概率', '效应大小', '错误率'], answer: 0, explain: '常见误读。' }
          ],
          doc: {
            lead: '这一章讲推断。',
            sections: [
              { id: 'ci', title: '区间', html: `<p>估计 ± 临界值 × 标准误。</p>` },
              { id: 'test', title: '检验', html: `<p>假设、p 值、两类错误、效应量。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '回归',
          brief: '财政数据的因果分析入门。',
          q: [
            { stem: '回归系数表示：', options: ['控制其他变量后 X 变动一单位 Y 的平均变动', '相关系数', 'R²', '截距'], answer: 0, explain: '偏效应。' },
            { stem: 'R² 表示：', options: ['解释的方差比例', '因果强度', '显著性', '样本量'], answer: 0, explain: '拟合优度。' },
            { stem: '遗漏变量会导致：', options: ['系数有偏', '样本失效', '无法估计', 'R² 为零'], answer: 0, explain: '遗漏变量偏误。' }
          ],
          doc: {
            lead: '这一章讲回归。',
            sections: [
              { id: 'ols', title: 'OLS', html: `<p>估计、标准误、显著性。</p>` },
              { id: 'bias', title: '偏误', html: `<p>遗漏变量、测量误差、反向因果。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        }
      ]
    },
    {
      name: '税收学',
      chapters: [
        {
          title: '税制要素',
          brief: '纳税人、税基、税率、征管。',
          q: [
            { stem: '税制的基本要素不包括：', options: ['纳税人', '税基', '税率', 'GDP'], answer: 3, explain: 'GDP 不是税制要素。' },
            { stem: '定额税率的特点是：', options: ['按数量固定征收', '按比例征收', '累进征收', '按收入征收'], answer: 0, explain: '如资源税按吨。' },
            { stem: '起征点与免征额的区别是：', options: ['起征点是达到即全额征，免征额是扣除部分', '没有区别', '起征点更低', '免征额只对富人'], answer: 0, explain: '两者计算方式不同。' }
          ],
          doc: {
            lead: '这一章讲税制结构。',
            sections: [
              { id: 'elements', title: '四要素', html: `<p>纳税人、税基、税率、征管。</p>` },
              { id: 'types', title: '分类', html: `<p>流转税、所得税、财产税、资源税、行为税。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '税负归宿',
          brief: '谁缴税不等于谁负担。',
          q: [
            { stem: '税负归宿主要取决于：', options: ['供需弹性', '法定纳税人', '税率', '征管'], answer: 0, explain: '弹性小的一方承担更多。' },
            { stem: '对卖方征税、需求完全无弹性时，税负由：', options: ['买方全部承担', '卖方全部承担', '政府承担', '分担'], answer: 0, explain: '买方无法减少购买。' },
            { stem: '累进税制指：', options: ['平均税率随收入上升', '所有人同税率', '高收入者税率更低', '只对富人'], answer: 0, explain: '累进、比例、累退。' }
          ],
          doc: {
            lead: '这一章讲归宿与公平。',
            sections: [
              { id: 'incidence', title: '归宿', html: `<p>法定归宿 vs 经济归宿；弹性决定分配。</p>` },
              { id: 'fair', title: '公平', html: `<p>累进/比例/累退；横向与纵向公平。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '最优税收',
          brief: '效率与公平的权衡：拉姆齐与米尔利斯。',
          q: [
            { stem: '拉弗曲线描述：', options: ['税率与税收收入的倒 U 形关系', '税率与增长', '税收与就业', '税收与汇率'], answer: 0, explain: '存在收入最大化的税率。' },
            { stem: '最优商品税理论强调：', options: ['对弹性小的商品征较高税率', '对所有商品同税率', '只对奢侈品征', '不对必需品征'], answer: 0, explain: '减少扭曲。' },
            { stem: '埃奇沃思模型的核心是：', options: ['对高收入者征高边际税率以最大化总效用', '统一税率', '零税率', '只征消费税'], answer: 0, explain: '极端公平取向。' }
          ],
          doc: {
            lead: '这一章讲最优税制的三种思路。',
            sections: [
              { id: 'laffer', title: '拉弗', html: `<p>税率与收入的倒 U 关系；现实中最优点位置有争议。</p>` },
              { id: 'optimal', title: '最优税收', html: `<p>拉姆齐（效率）、埃奇沃思（公平）、米尔利斯（信息不对称下的折中）。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        }
      ]
    },

    /* ---- 大三 ---- */
    {
      name: '政府预算',
      chapters: [
        {
          title: '四本账',
          brief: '预算体系：一般公共预算 + 三本专项。',
          q: [
            { stem: '我国政府预算的"四本账"不包括：', options: ['一般公共预算', '政府性基金预算', '国有资本经营预算', '企业利润预算'], answer: 3, explain: '四本账含社会保险基金预算。' },
            { stem: '一般公共预算的主体收入是：', options: ['税收', '土地出让', '国企利润', '社保缴费'], answer: 0, explain: '税收占比最高。' },
            { stem: '政府性基金预算的主要来源之一是：', options: ['土地出让收入', '增值税', '所得税', '关税'], answer: 0, explain: '国有土地使用权出让收入。' }
          ],
          doc: {
            lead: '这一章讲四本账的关系。',
            sections: [
              { id: 'four', title: '四本账', html: `<ul><li>一般公共预算</li><li>政府性基金预算</li><li>国有资本经营预算</li><li>社会保险基金预算</li></ul>` },
              { id: 'link', title: '调入调出', html: `<p>账与账之间的调入调出，影响赤字口径的理解。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '编制与执行',
          brief: '预算流程：两上两下、人大审批。',
          q: [
            { stem: '我国预算编制的基本流程包括：', options: ['部门编制、财政审核、人大审批', '只有财政决定', '只有国务院决定', '无需审批'], answer: 0, explain: '部门预算与人大审批。' },
            { stem: '预算执行中调整预算需要：', options: ['依法报批', '财政自行决定', '不用报批', '审计决定'], answer: 0, explain: '预算法规定程序。' },
            { stem: '国库集中收付制度的作用是：', options: ['减少资金沉淀、提高透明度', '增加收费', '扩大部门权力', '减少预算'], answer: 0, explain: '国库单一账户体系。' }
          ],
          doc: {
            lead: '这一章讲预算流程与制度。',
            sections: [
              { id: 'process', title: '流程', html: `<p>编制（两上两下）→ 审批（人大）→ 执行 → 决算 → 审计。</p>` },
              { id: 'system', title: '制度', html: `<p>部门预算、国库集中收付、政府采购、绩效管理。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '绩效评价',
          brief: '花钱要问效果。',
          q: [
            { stem: '财政支出绩效评价关注：', options: ['产出与效果是否达到目标', '花了多少钱', '执行率', '是否超支'], answer: 0, explain: '结果导向。' },
            { stem: '绩效目标应当：', options: ['可测量、与预算匹配', '越模糊越好', '只写投入', '不公开'], answer: 0, explain: '可考核。' },
            { stem: '绩效评价结果通常用于：', options: ['下一年预算安排', '人事任免', '税收优惠', '审计处罚'], answer: 0, explain: '与预算挂钩。' }
          ],
          doc: {
            lead: '这一章讲绩效管理的闭环。',
            sections: [
              { id: 'cycle', title: '闭环', html: `<p>目标 → 监控 → 自评 → 重点评价 → 结果应用。</p>` },
              { id: 'indicator', title: '指标', html: `<p>产出、效果、满意度；避免只看执行率。</p>
<div class="doc-tip">⚠️ 钱花完了但事没办成，绩效仍是不合格。</div>` }
            ],
            refs: [ECON_REFS.stats]
          }
        }
      ]
    },
    {
      name: '公共经济学',
      chapters: [
        {
          title: '公共品供给',
          brief: '谁提供、提供多少、怎么付费。',
          q: [
            { stem: '公共品的最优供给条件是：', options: ['边际支付意愿之和等于边际成本', '一人支付', '价格等于平均成本', '免费'], answer: 0, explain: '萨缪尔森条件。' },
            { stem: '搭便车问题导致：', options: ['公共品供给不足', '供给过剩', '价格上升', '无影响'], answer: 0, explain: '自愿供给不足。' },
            { stem: '林达尔均衡描述的是：', options: ['按受益分担成本的均衡', '市场均衡', '垄断均衡', '税收均衡'], answer: 0, explain: '个性化价格分担。' }
          ],
          doc: {
            lead: '这一章讲公共品理论。',
            sections: [
              { id: 'condition', title: '条件', html: `<p>萨缪尔森条件；林达尔均衡。</p>` },
              { id: 'mechanism', title: '机制', html: `<p>偏好显示问题（VCG 机制）、俱乐部理论与蒂布特模型。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '成本收益分析',
          brief: '公共项目怎么算账。',
          q: [
            { stem: '社会贴现率的选择会影响：', options: ['代际公平与项目选择', '税率', '就业', '汇率'], answer: 0, explain: '高贴现率不利于长期项目。' },
            { stem: '成本收益分析中，影子价格用于：', options: ['纠正市场价格扭曲', '计算税收', '确定工资', '设定利率'], answer: 0, explain: '反映真实社会成本。' },
            { stem: '难以货币化的收益通常用：', options: ['支付意愿法、旅行成本法等', '忽略', '按成本计', '按税收计'], answer: 0, explain: '非市场价值评估。' }
          ],
          doc: {
            lead: '这一章讲 CBA 的三步。',
            sections: [
              { id: 'steps', title: '三步', html: `<ol><li>识别成本与收益（含外部性）</li><li>货币化与贴现</li><li>敏感性分析</li></ol>` },
              { id: 'issue', title: '争议', html: `<p>贴现率、生命价值、代际公平——都是价值判断。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '政府间关系',
          brief: '财政联邦主义：分权的好处与代价。',
          q: [
            { stem: '财政分权的优势之一是：', options: ['更贴近本地偏好', '减少竞争', '统一标准', '降低税负'], answer: 0, explain: '信息优势与偏好匹配。' },
            { stem: '辖区间竞争可能带来：', options: ['税收竞争与公共服务不足', '效率提升唯一', '无影响', '统一税率'], answer: 0, explain: '竞价到底（race to the bottom）。' },
            { stem: '蒂布特模型假设：', options: ['居民用脚投票选择辖区', '政府统一提供', '没有迁移', '只有中央'], answer: 0, explain: '地方公共品的显示机制。' }
          ],
          doc: {
            lead: '这一章讲分权的两面。',
            sections: [
              { id: 'pro', title: '好处', html: `<p>信息优势、偏好匹配、实验与创新。</p>` },
              { id: 'con', title: '代价', html: `<p>外部性、规模不经济、税收竞争、均等化压力。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        }
      ]
    },
    {
      name: '国有资产管理',
      chapters: [
        {
          title: '产权与出资人',
          brief: '国有资产归谁、谁来管。',
          q: [
            { stem: '我国国有资产出资人职责主要由谁行使？', options: ['国资委等机构', '财政部唯一', '法院', '企业自身'], answer: 0, explain: '分级代表、分类监管。' },
            { stem: '产权清晰的意义是：', options: ['明确剩余索取权与控制权', '增加税收', '便于补贴', '减少竞争'], answer: 0, explain: '激励与责任的基础。' },
            { stem: '国有资本经营预算的收入主要来自：', options: ['国企上缴利润与产权转让', '税收', '土地出让', '社保'], answer: 0, explain: '国有资本收益。' }
          ],
          doc: {
            lead: '这一章讲产权与监管架构。',
            sections: [
              { id: 'owner', title: '出资人', html: `<p>国家所有、分级代表；国资委履行出资人职责。</p>` },
              { id: 'budget', title: '预算', html: `<p>国有资本经营预算：利润上缴、支出方向。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '布局与监管',
          brief: '国资该在哪些行业、怎么管。',
          q: [
            { stem: '"两个毫不动摇"指的是：', options: ['巩固公有制经济、鼓励支持引导非公有制经济', '只发展国企', '只发展民企', '国企私有化'], answer: 0, explain: '基本经济制度的表述。' },
            { stem: '国有资本布局优化通常强调：', options: ['向关系国家安全与命脉的行业集中', '全面退出', '平均分布', '只做金融'], answer: 0, explain: '功能分类。' },
            { stem: '混合所有制改革的主要目的是：', options: ['引入市场化机制、提高效率', '减少国资', '增加补贴', '取消监管'], answer: 0, explain: '混改与公司治理。' }
          ],
          doc: {
            lead: '这一章讲布局与改革。',
            sections: [
              { id: 'layout', title: '布局', html: `<p>功能分类（公益类、商业类）；向关键领域集中。</p>` },
              { id: 'reform', title: '改革', html: `<p>混合所有制、董事会建设、职业经理人、分类考核。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '保值增值',
          brief: '考核与防流失：两个方向。',
          q: [
            { stem: '国有资产保值增值的核心指标通常是：', options: ['净资产收益率等效益指标', '规模', '员工数', '投资额'], answer: 0, explain: '效益与效率。' },
            { stem: '防止国有资产流失的关键环节是：', options: ['产权交易进场、评估与披露', '减少监管', '快速处置', '内部定价'], answer: 0, explain: '公开透明与程序。' },
            { stem: '国企考核从"管资产"转向"管资本"意味着：', options: ['更关注资本回报与布局，而非具体经营', '不管了', '只管利润', '只管规模'], answer: 0, explain: '以管资本为主。' }
          ],
          doc: {
            lead: '这一章讲考核与防流失。',
            sections: [
              { id: 'kpi', title: '考核', html: `<p>效益指标、分类考核、任期制；EVA 与经济增加值。</p>` },
              { id: 'loss', title: '防流失', html: `<p>进场交易、资产评估、信息披露、责任追究。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        }
      ]
    },

    /* ---- 大四 ---- */
    {
      name: '财政数据分析',
      chapters: [
        {
          title: '指标',
          brief: '衡量财政的六个常用指标。',
          q: [
            { stem: '衡量地方财政收入质量最常用的指标是：', options: ['税收收入占比', 'GDP 增速', '人口', '面积'], answer: 0, explain: '税收占比高更稳定。' },
            { stem: '债务率通常用：', options: ['债务余额/综合财力', '债务/GDP', '债务/人口', '债务/土地'], answer: 0, explain: '地方债务风险的常用口径。' },
            { stem: '刚性支出占比高说明：', options: ['腾挪空间小', '财力充足', '支出灵活', '无债务'], answer: 0, explain: '教育、社保、付息等难压缩。' }
          ],
          doc: {
            lead: '这一章讲六个指标。',
            sections: [
              { id: 'six', title: '六个指标', html: `<ul><li>税收占比</li><li>债务率</li><li>土地依赖度</li><li>刚性支出占比</li><li>赤字率</li><li>人均财力</li></ul>` },
              { id: 'read', title: '怎么读', html: `<p>先看趋势（五年）、再看横向（同省地市）、最后结合政策背景解释异常。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '分析方法',
          brief: '结构分析、对比分析、回归分析。',
          q: [
            { stem: '分析财政支出结构，最常用：', options: ['占比与增速的分解', '只看总额', '只看增速', '只看排名'], answer: 0, explain: '结构决定政策含义。' },
            { stem: '比较不同地区财政压力，应当：', options: ['控制人口与经济规模差异', '直接比总额', '比增速', '比面积'], answer: 0, explain: '人均或占比口径更可比。' },
            { stem: '用回归分析财政数据时，最需要警惕：', options: ['遗漏变量与反向因果', '样本量', '软件', '图表'], answer: 0, explain: '因果识别问题。' }
          ],
          doc: {
            lead: '这一章讲三种分析路径。',
            sections: [
              { id: 'methods', title: '三种', html: `<ul><li>结构：占比与构成</li><li>对比：横向与纵向</li><li>回归：影响因素与政策效应</li></ul>` },
              { id: 'care', title: '注意', html: `<p>口径变化（如社保入账）、转移支付影响、一次性因素。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '报告写法',
          brief: '压力—原因—建议：政策分析的三段。',
          q: [
            { stem: '财政分析报告的推荐结构是：', options: ['现状—问题—原因—建议', '只写数据', '只写建议', '只写历史'], answer: 0, explain: '问题导向。' },
            { stem: '报告中呈现数据，最重要的是：', options: ['来源、口径与时间一致', '颜色', '页数', '术语'], answer: 0, explain: '可追溯。' },
            { stem: '给决策者的报告应：', options: ['结论先行、篇幅精简', '从方法讲起', '尽量长', '只放表格'], answer: 0, explain: '金字塔结构。' }
          ],
          doc: {
            lead: '这一章讲报告结构。',
            sections: [
              { id: 'structure', title: '四段', html: `<p>现状（数据）→ 问题（缺口）→ 原因（机制）→ 建议（可执行）。</p>` },
              { id: 'style', title: '表达', html: `<p>一页纸结论 + 图表；术语要有解释。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        }
      ]
    },
    {
      name: '实习',
      chapters: [
        {
          title: '岗位与业务',
          brief: '财政局、税务局、审计、企业财务：四种现场。',
          q: [
            { stem: '财政局实习最常接触的工作是：', options: ['预算编制与执行、报表汇总', '诉讼', '审计取证', '产品设计'], answer: 0, explain: '预算与国库业务。' },
            { stem: '税务部门实习常见业务是：', options: ['纳税申报、税源管理、稽查', '预算', '审计', '统计'], answer: 0, explain: '征管与服务。' },
            { stem: '审计署特派办的主要工作是：', options: ['财政财务收支审计', '税收征管', '预算编制', '政策制定'], answer: 0, explain: '审计监督。' }
          ],
          doc: {
            lead: '这一章讲四类岗位。',
            sections: [
              { id: 'roles', title: '四类', html: `<ul><li>财政：预算与国库</li><li>税务：征管与稽查</li><li>审计：监督</li><li>企业财务：核算与税务</li></ul>` },
              { id: 'skill', title: '技能', html: `<p>Excel/报表、政策文件阅读、公文写作。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '政策文件与数据',
          brief: '读懂预算报告与决算表。',
          q: [
            { stem: '阅读政府预算报告，先看：', options: ['收入结构、支出结构与赤字', '封面', '页码', '印刷'], answer: 0, explain: '三块决定整体判断。' },
            { stem: '决算与预算的差别是：', options: ['决算是执行结果', '没有差别', '决算更粗', '预算更准'], answer: 0, explain: '预算是计划，决算是实际。' },
            { stem: '政策文件中"一般性转移支付"主要用于：', options: ['均等化财力', '指定项目', '还债', '发工资'], answer: 0, explain: '不指定用途的转移支付。' }
          ],
          doc: {
            lead: '这一章讲读文件与取数。',
            sections: [
              { id: 'reading', title: '读', html: `<p>预算报告、决算表、政府工作报告、统计年鉴。</p>` },
              { id: 'data', title: '取数', html: `<p>财政部官网、地方财政局公开、Wind/CEIC。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '复盘与转化',
          brief: '把实习变成能写进简历的东西。',
          q: [
            { stem: '实习复盘最有价值的是：', options: ['问题—做法—结果—反思', '工作清单', '感想', '考勤'], answer: 0, explain: '结构化复盘。' },
            { stem: '在财政岗位实习，最该主动学的是：', options: ['一整套预算流程', '单一报表', '软件快捷键', '礼仪'], answer: 0, explain: '全流程理解最稀缺。' },
            { stem: '离职交接应当：', options: ['文档化并说明进度', '直接走', '删文件', '不回复'], answer: 0, explain: '职业口碑。' }
          ],
          doc: {
            lead: '这一章讲复盘方法。',
            sections: [
              { id: 'review', title: '复盘', html: `<p>每周五行：做了什么、遇到什么、怎么解决、学到什么。</p>` },
              { id: 'output', title: '产出', html: `<p>一份数据整理模板、一份政策梳理，都能成为面试素材。</p>` }
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
          title: '考研',
          brief: '财政学考研：专业课与数学。',
          q: [
            { stem: '财政学考研专业课通常包括：', options: ['财政学、税收学与宏观经济学', '只考会计', '只考数学', '只考英语'], answer: 0, explain: '多数院校考经济学综合。' },
            { stem: '专业课复习的核心是：', options: ['原理 + 政策 + 图形推导', '背结论', '只做真题', '只看教材'], answer: 0, explain: '论述题要结合现实。' },
            { stem: '择校最应考虑：', options: ['科目、报录比与方向', '城市', '学费', '宿舍'], answer: 0, explain: '匹配度。' }
          ],
          doc: {
            lead: '这一章讲考研三块。',
            sections: [
              { id: 'subjects', title: '科目', html: `<ul><li>数学三或 396</li><li>专业课（财政学/税收学/宏观）</li><li>英语政治</li></ul>` },
              { id: 'plan', title: '节奏', html: `<p>3–6 月基础，7–8 月强化，9–10 月真题，11–12 月模拟。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '求职',
          brief: '财政税务、审计、银行、企业财务。',
          q: [
            { stem: '财政学最对口的就业方向是：', options: ['财政税务部门、审计、公共部门研究', '临床医学', '建筑设计', '影视'], answer: 0, explain: '专业对口性强。' },
            { stem: '企业税务岗的核心能力是：', options: ['税法理解与税务筹划', '审计', '预算', '统计'], answer: 0, explain: '合规与优化。' },
            { stem: '公务员考试中，财政背景的优势体现在：', options: ['申论与财经政策理解', '体能', '外语', '绘画'], answer: 0, explain: '政策与写作。' }
          ],
          doc: {
            lead: '这一章讲四条路径。',
            sections: [
              { id: 'paths', title: '四条', html: `<ul><li>财政/税务</li><li>审计</li><li>银行与国企财务</li><li>企业与咨询</li></ul>` },
              { id: 'prep', title: '准备', html: `<p>考公（行测申论）+ 一份财政分析报告 + 实习经历。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '作品集',
          brief: '一份地方财政分析报告就是最好的敲门砖。',
          q: [
            { stem: '财政学求职作品集最核心的是：', options: ['一份有数据的财政分析报告', '成绩单', '证书', '自荐信'], answer: 0, explain: '分析能力最直观。' },
            { stem: '报告中引用数据应当：', options: ['标注来源与口径', '不标', '随意改', '只写"据统计"'], answer: 0, explain: '可追溯。' },
            { stem: '面试讲报告的最佳结构是：', options: ['问题—方法—发现—建议', '流水账', '只讲结论', '只讲数据'], answer: 0, explain: '完整链条。' }
          ],
          doc: {
            lead: '这一章讲作品集。',
            sections: [
              { id: 'kit', title: '三件套', html: `<ul><li>某省/市财政收支结构分析</li><li>一份税收政策梳理</li><li>实习复盘</li></ul>` },
              { id: 'tell', title: '讲法', html: `<p>2 分钟：压力在哪、原因是什么、建议怎么落。</p>` }
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
