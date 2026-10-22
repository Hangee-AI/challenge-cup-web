/* ==========================================================
   trade-courses.js · 「国际经济与贸易」专业：12 门课 × 3 章
   --------------------------------------------------------
   每学期 3 门课、每门 3 章 = 9 关；共 36 关。
   替换 economics.js 里国贸原来的「4 门课 × 2 章」。
   ========================================================== */

(function () {
  var MAJOR = 'economics-国际经济与贸易';
  var TITLES = stageTitlesOf('economics');

  var COURSES = [
    /* ---- 大一 ---- */
    {
      name: '高等数学',
      chapters: [
        {
          title: '极限与连续',
          brief: '汇率换算、增长率的极限都从这里来。',
          q: [
            { stem: 'lim(x→0)(1+x)^{1/x} 等于：', options: ['0', '1', 'e', '∞'], answer: 2, explain: '自然常数 e 的定义式。' },
            { stem: '连续函数的特征之一是：', options: ['必可导', '极限等于函数值', '必单调', '必有界'], answer: 1, explain: '连续是可导的必要非充分条件。' },
            { stem: '年增长 7% 时，产出翻倍约需：', options: ['7 年', '10 年', '14 年', '20 年'], answer: 1, explain: '70 法则：70/7 = 10 年。' }
          ],
          doc: {
            lead: '这一章讲极限、连续与增长直觉。',
            sections: [
              { id: 'limit', title: '极限', html: `<p>左右极限、无穷小、等价替换。</p>` },
              { id: 'growth', title: '增长', html: `<p>70 法则与复利：判断"长期"的量级感。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '导数与最优化',
          brief: '关税最优、利润最大，都是求极值。',
          q: [
            { stem: '极值点一阶导数为零、二阶导数为负时是：', options: ['极小值', '极大值', '拐点', '不连续'], answer: 1, explain: '凹函数得有极大值。' },
            { stem: '约束最优化的拉格朗日乘子表示：', options: ['约束的影子价格', '目标值', '斜率', '截距'], answer: 0, explain: '放松一单位约束带来的目标增量。' },
            { stem: '利润最大化条件是：', options: ['MR = MC', 'MR > MC', 'P = AC', 'TR 最大'], answer: 0, explain: '边际收益等于边际成本。' }
          ],
          doc: {
            lead: '这一章讲最优化方法。',
            sections: [
              { id: 'foc', title: '条件', html: `<p>一阶定位、二阶定性；约束用拉格朗日。</p>` },
              { id: 'app', title: '应用', html: `<p>最优关税、出口定价、产能决策。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '积分与贴现',
          brief: '把未来收益折成今天：外贸投资评估的基础。',
          q: [
            { stem: '年利率 10%，两年后 121 元的现值是：', options: ['100', '110', '121', '133'], answer: 0, explain: '121/1.1² = 100。' },
            { stem: '贴现率上升，未来收益现值：', options: ['上升', '下降', '不变', '不确定'], answer: 1, explain: '折现因子随 r 上升而下降。' },
            { stem: '定积分在经济学中常表示：', options: ['总量或面积（如福利）', '导数', '极限', '概率'], answer: 0, explain: '累积量与剩余面积。' }
          ],
          doc: {
            lead: '这一章讲现值与累积。',
            sections: [
              { id: 'pv', title: '现值', html: `<p>PV = CF/(1+r)^n；年金与永续年金。</p>` },
              { id: 'area', title: '面积', html: `<p>消费者剩余、关税福利损失都是面积计算。</p>` }
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
          brief: '价格机制是贸易分析的语言。',
          q: [
            { stem: '需求富有弹性时降价：', options: ['收入增加', '收入减少', '不变', '不确定'], answer: 0, explain: '销量增幅大于价格降幅。' },
            { stem: '出口供给弹性大意味着：', options: ['出口量对价格敏感', '不敏感', '无关', '出口固定'], answer: 0, explain: '弹性大说明价格变化能迅速带来供给调整。' },
            { stem: '消费者剩余是：', options: ['支付意愿−实际支付', '实际支付', '成本', '税收'], answer: 0, explain: '福利分析基础。' }
          ],
          doc: {
            lead: '这一章讲供求与弹性。',
            sections: [
              { id: 'eq', title: '均衡', html: `<p>价格管制、配额都会造成短缺或过剩。</p>` },
              { id: 'ela', title: '弹性', html: `<p>需求/供给弹性决定政策效果的分配。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '消费者与厂商',
          brief: '偏好与成本：两个基本模型。',
          q: [
            { stem: '无差异曲线凸向原点说明：', options: ['边际替代率递减', '边际替代率递增', '效用不变', '价格固定'], answer: 0, explain: '凸性对应 MRS 递减。' },
            { stem: '短期平均成本与边际成本的关系是：', options: ['MC 穿过 AC 最低点', 'MC 恒高于 AC', 'MC 恒低于 AC', '无关系'], answer: 0, explain: '经典结论。' },
            { stem: '规模经济意味着长期平均成本：', options: ['下降', '上升', '不变', '先升后降'], answer: 0, explain: '规模报酬递增。' }
          ],
          doc: {
            lead: '这一章讲两套模型。',
            sections: [
              { id: 'consumer', title: '消费者', html: `<p>效用、预算线、最优选择 MRS = 价格比。</p>` },
              { id: 'firm', title: '厂商', html: `<p>成本曲线、规模经济、短期与长期。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '市场结构',
          brief: '竞争程度决定定价与效率。',
          q: [
            { stem: '完全竞争厂商是：', options: ['价格接受者', '价格制定者', '垄断者', '寡头'], answer: 0, explain: '产品同质、厂商众多。' },
            { stem: '垄断造成的社会成本主要是：', options: ['无谓损失', '税收', '通胀', '失业'], answer: 0, explain: '产量低于竞争水平造成的福利损失。' },
            { stem: '寡头市场分析常用：', options: ['博弈论', '完全竞争模型', '供求曲线', '货币数量论'], answer: 0, explain: '厂商间存在策略互动。' }
          ],
          doc: {
            lead: '这一章讲四种结构与效率。',
            sections: [
              { id: 'types', title: '四种', html: `<p>完全竞争、垄断竞争、寡头、垄断。</p>` },
              { id: 'welfare', title: '福利', html: `<p>垄断、税收、关税都产生无谓损失。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        }
      ]
    },
    {
      name: '国际贸易学',
      chapters: [
        {
          title: '比较优势',
          brief: '国贸第一原理：机会成本低者专业化。',
          q: [
            { stem: '比较优势取决于：', options: ['绝对成本', '机会成本', '出口额', '汇率'], answer: 1, explain: '生产一单位的机会成本谁更低。' },
            { stem: '即使一国两种产品都绝对劣势，仍可能从贸易中获益，因为：', options: ['比较优势', '规模经济', '补贴', '汇率'], answer: 0, explain: '按比较优势分工仍能互利。' },
            { stem: '贸易条件改善意味着：', options: ['同量出口换更多进口', '出口下降', '关税上升', '汇率贬值'], answer: 0, explain: '出口价格相对进口价格上升。' }
          ],
          doc: {
            lead: '这一章讲绝对与比较优势。',
            sections: [
              { id: 'absolute', title: '绝对优势', html: `<p>用更少资源生产同一产品。</p>` },
              { id: 'comparative', title: '比较优势', html: `<p>机会成本更低；分工与交换使双方消费可能性扩大。</p>
<div class="doc-tip">💡 比较优势解释"为什么贸易"，不解释"谁赢谁输"。</div>` }
            ],
            refs: [ECON_REFS.wb]
          }
        },
        {
          title: '要素禀赋与规模经济',
          brief: 'H-O 理论：一国出口密集使用其丰裕要素的产品。',
          q: [
            { stem: 'H-O 理论的核心是：', options: ['要素禀赋决定比较优势', '技术决定一切', '需求决定', '汇率决定'], answer: 0, explain: '资本丰裕国出口资本密集型产品。' },
            { stem: '规模经济导致贸易的原因是：', options: ['市场扩大使成本下降', '要素禀赋', '关税', '汇率'], answer: 0, explain: '产业内贸易的常见解释。' },
            { stem: '产业内贸易指的是：', options: ['同一产业内双向贸易', '不同产业间贸易', '只出口', '只进口'], answer: 0, explain: '如汽车零部件的双向流动。' }
          ],
          doc: {
            lead: '这一章讲两种贸易理论。',
            sections: [
              { id: 'ho', title: '要素禀赋', html: `<p>资本/劳动相对丰裕度决定出口结构；里昂惕夫悖论提出挑战。</p>` },
              { id: 'scale', title: '规模经济', html: `<p>规模报酬递增 + 产品差异化 → 产业内贸易。</p>` }
            ],
            refs: [ECON_REFS.wb]
          }
        },
        {
          title: '贸易政策与福利',
          brief: '关税、配额、补贴：谁受益谁受损。',
          q: [
            { stem: '进口关税对进口国的净福利通常：', options: ['增加', '减少（无谓损失）', '不变', '无法判断'], answer: 1, explain: '除非大国贸易条件改善或存在市场失灵。' },
            { stem: '配额与关税的主要区别是：', options: ['配额不限制数量', '配额租金归属取决于许可分配', '配额不影响价格', '关税只对出口国征'], answer: 1, explain: '两者都抬高国内价格。' },
            { stem: '出口补贴对本国的影响通常是：', options: ['生产者获益、消费者与财政受损', '全民获益', '无影响', '只有外国获益'], answer: 0, explain: '补贴抬高国内价格，财政承担成本。' }
          ],
          doc: {
            lead: '这一章用"价格—数量—福利"三步分析政策。',
            sections: [
              { id: 'steps', title: '三步', html: `<ol><li>价格变化</li><li>谁受益谁受损</li><li>净福利</li></ol>` },
              { id: 'tools', title: '三种工具', html: `<p>关税、配额、出口补贴；贸易战与报复的博弈。</p>` }
            ],
            refs: [ECON_REFS.wb, ECON_REFS.stats]
          }
        }
      ]
    },

    /* ---- 大二 ---- */
    {
      name: '宏观经济学',
      chapters: [
        {
          title: 'GDP 与核算',
          brief: '总量从核算开始。',
          q: [
            { stem: '支出法 GDP 是：', options: ['C+I+G+NX', 'C+S+T', '工资+利润', 'M2×V'], answer: 0, explain: '消费、投资、政府购买、净出口。' },
            { stem: '净出口为负说明：', options: ['贸易逆差', '贸易顺差', '平衡', '无贸易'], answer: 0, explain: '进口大于出口。' },
            { stem: 'GDP 与 GNP 的差别是：', options: ['国土 vs 国民', '是否含税收', '是否含折旧', '统计频率'], answer: 0, explain: '按地域 vs 按国民。' }
          ],
          doc: {
            lead: '这一章讲核算与开放经济恒等式。',
            sections: [
              { id: 'identity', title: '恒等式', html: `<p>Y = C + I + G + NX；储蓄—投资关系。</p>` },
              { id: 'care', title: '易错', html: `<p>二手交易、转移支付不计入；存货变动计投资。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '通胀与失业',
          brief: '国内均衡与外部均衡的冲突。',
          q: [
            { stem: 'CPI 衡量：', options: ['消费价格', '生产者成本', '股价', '汇率'], answer: 0, explain: '居民消费价格指数。' },
            { stem: '本币贬值对通胀的影响通常是：', options: ['推高进口品价格、增加通胀压力', '降低通胀', '无影响', '降低利率'], answer: 0, explain: '进口成本上升传导至物价。' },
            { stem: '失业率上升通常伴随：', options: ['产出下降', '产出上升', '通胀必升', '出口必降'], answer: 0, explain: '奥肯定律联系产出与失业。' }
          ],
          doc: {
            lead: '这一章讲内部平衡的两个指标。',
            sections: [
              { id: 'inflation', title: '通胀', html: `<p>需求拉动、成本推动、输入型通胀（汇率与大宗商品）。</p>` },
              { id: 'unemploy', title: '失业', html: `<p>摩擦、结构、周期；自然失业率。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '开放经济政策',
          brief: '汇率、资本流动与政策独立性。',
          q: [
            { stem: '三元悖论指的是：', options: ['汇率稳定、资本自由流动、货币政策独立不可兼得', '三个都能实现', '三种货币', '三个国家'], answer: 0, explain: '只能取其二。' },
            { stem: '固定汇率下，扩张性货币政策的效果是：', options: ['短期有效，长期因资本流出而失效', '长期有效', '完全无效', '引发通胀'], answer: 0, explain: '为维持汇率需回笼货币。' },
            { stem: '国际收支逆差时，本币通常面临：', options: ['贬值压力', '升值压力', '无压力', '升值'], answer: 0, explain: '外汇需求大于供给。' }
          ],
          doc: {
            lead: '这一章讲开放条件下的政策约束。',
            sections: [
              { id: 'trinity', title: '三元悖论', html: `<p>固定汇率 + 资本自由流动 + 独立货币政策，三者取二。</p>` },
              { id: 'policy', title: '政策组合', html: `<p>财政与货币的搭配、外汇干预、宏观审慎。</p>` }
            ],
            refs: [ECON_REFS.stats, ECON_REFS.wb]
          }
        }
      ]
    },
    {
      name: '国际金融',
      chapters: [
        {
          title: '汇率决定',
          brief: '汇率是两国货币的相对价格。',
          q: [
            { stem: '购买力平价（PPP）认为汇率取决于：', options: ['两国物价水平之比', '利率', '贸易额', 'GDP'], answer: 0, explain: '一价定律的国际版本。' },
            { stem: '利率平价认为高利率货币远期：', options: ['贴水', '升水', '不变', '无关'], answer: 0, explain: '否则存在套利机会。' },
            { stem: '本币升值对出口的影响是：', options: ['出口竞争力下降', '上升', '无影响', '出口增加'], answer: 0, explain: '出口品外币价格上升。' }
          ],
          doc: {
            lead: '这一章讲三种汇率理论。',
            sections: [
              { id: 'ppp', title: '购买力平价', html: `<p>绝对 PPP 与相对 PPP；巴拉萨-萨缪尔森效应。</p>` },
              { id: 'irp', title: '利率平价', html: `<p>抛补与无抛补利率平价；套利与远期升贴水。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '国际收支',
          brief: '一国与世界的一切交易都记在这里。',
          q: [
            { stem: '货物贸易记入：', options: ['经常账户', '资本账户', '金融账户', '储备'], answer: 0, explain: '经常账户含货物、服务、收入。' },
            { stem: '经常账户逆差通常需要：', options: ['资本流入或储备下降弥补', '无需弥补', '货币升值', '出口下降'], answer: 0, explain: '国际收支恒等式。' },
            { stem: '外汇储备的作用包括：', options: ['稳定汇率与偿付能力', '增加税收', '提高利率', '限制进口'], answer: 0, explain: '应对冲击与信心支撑。' }
          ],
          doc: {
            lead: '这一章讲收支表与失衡调整。',
            sections: [
              { id: 'accounts', title: '三个账户', html: `<p>经常、资本、金融；储备变动是平衡项。</p>` },
              { id: 'adjust', title: '调整', html: `<p>价格（汇率）、收入、政策调整；J 曲线效应。</p>` }
            ],
            refs: [ECON_REFS.stats, ECON_REFS.wb]
          }
        },
        {
          title: '外汇风险',
          brief: '外贸企业的日常：锁汇、报价、结算。',
          q: [
            { stem: '出口商担心本币升值，可用什么工具？', options: ['远期结汇', '远期购汇', '不做处理', '增加进口'], answer: 0, explain: '锁定未来结汇汇率。' },
            { stem: '自然对冲指的是：', options: ['收付币种匹配以减少敞口', '购买期权', '不做业务', '提高价格'], answer: 0, explain: '用同币种收支抵消风险。' },
            { stem: '合同中约定汇率浮动条款的作用是：', options: ['重新议价、分担汇率风险', '固定价格', '增加关税', '规避法律'], answer: 0, explain: '超过区间即重谈。' }
          ],
          doc: {
            lead: '这一章讲三类汇率风险管理。',
            sections: [
              { id: 'tools', title: '工具', html: `<ul><li>远期结售汇</li><li>外汇期权</li><li>货币互换</li></ul>` },
              { id: 'contract', title: '合同', html: `<p>币种选择、浮动条款、结算周期与自然对冲。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        }
      ]
    },
    {
      name: '国际商法',
      chapters: [
        {
          title: 'CISG',
          brief: '国际货物买卖的统一规则。',
          q: [
            { stem: 'CISG 规范的是：', options: ['国际货物买卖合同的订立与违约', '投资准入', '知识产权注册', '反倾销'], answer: 0, explain: '合同成立、货物相符、救济。' },
            { stem: 'CISG 适用于：', options: ['营业地在不同缔约国的当事人之间的货物销售', '所有合同', '只适用于服务', '只适用于国内'], answer: 0, explain: '适用范围有明确条件。' },
            { stem: '买方发现货物不符，应及时：', options: ['在合理时间内通知卖方', '直接退货', '不通知', '拒付全部'], answer: 0, explain: '检验与通知义务。' }
          ],
          doc: {
            lead: '这一章讲 CISG 的适用与核心规则。',
            sections: [
              { id: 'scope', title: '适用', html: `<p>营业地标准；当事人可排除适用。</p>` },
              { id: 'remedy', title: '救济', html: `<p>要求履行、解除合同、损害赔偿；减损义务。</p>` }
            ],
            refs: [ECON_REFS.wb]
          }
        },
        {
          title: 'Incoterms',
          brief: '贸易术语：风险、费用与手续的分配表。',
          q: [
            { stem: 'FOB 下风险转移点是：', options: ['装运港船上', '目的地', '工厂', '仓库'], answer: 0, explain: '货物装上船即转移。' },
            { stem: 'CIF 与 FOB 的主要差别是：', options: ['卖方是否承担运费与保险', '风险转移点', '是否报关', '是否需要提单'], answer: 0, explain: 'CIF 卖方付运费保险，风险点相同。' },
            { stem: 'DDP 下由谁办理进口清关？', options: ['卖方', '买方', '承运人', '银行'], answer: 0, explain: '完税后交货，卖方承担最大义务。' }
          ],
          doc: {
            lead: '这一章讲术语的两条线：风险与费用。',
            sections: [
              { id: 'risk', title: '风险', html: `<p>FOB/CFR/CIF 在装运港转移；D 组在目的地。</p>` },
              { id: 'cost', title: '费用', html: `<p>E &lt; F &lt; C &lt; D：卖方义务递增。</p>
<div class="doc-tip">⚠️ 术语只规范交货，不规范付款与所有权。</div>` }
            ],
            refs: [ECON_REFS.wb]
          }
        },
        {
          title: '争议解决',
          brief: '仲裁还是诉讼：跨境纠纷的选择。',
          q: [
            { stem: '国际商事仲裁相比诉讼的优势是：', options: ['裁决更易跨境执行（纽约公约）', '费用更低', '不需要律师', '可以上诉'], answer: 0, explain: '纽约公约保障承认与执行。' },
            { stem: '合同中仲裁条款应当写明：', options: ['仲裁机构、规则、地点、语言', '只写"仲裁"', '只写法院', '不写'], answer: 0, explain: '否则条款可能无效。' },
            { stem: '适用法律条款的作用是：', options: ['确定实体争议适用哪国法', '确定管辖', '确定税率', '确定汇率'], answer: 0, explain: '准据法条款。' }
          ],
          doc: {
            lead: '这一章讲两条救济路径。',
            sections: [
              { id: 'arb', title: '仲裁', html: `<p>一裁终局、保密、跨境执行便利；条款要具体。</p>` },
              { id: 'litigation', title: '诉讼', html: `<p>公开、可上诉，但跨境执行难。</p>` }
            ],
            refs: [ECON_REFS.wb]
          }
        }
      ]
    },

    /* ---- 大三 ---- */
    {
      name: '国际贸易实务',
      chapters: [
        {
          title: '报价核算',
          brief: '一单生意从算清成本开始。',
          q: [
            { stem: '出口报价通常包括：', options: ['成本 + 费用 + 利润', '只有成本', '只有运费', '只有汇率'], answer: 0, explain: '按贸易术语调整各项费用。' },
            { stem: 'FOB 价换算 CIF 价需要加：', options: ['运费与保险费', '关税', '增值税', '佣金'], answer: 0, explain: 'CIF = FOB + 运费 + 保险。' },
            { stem: '换汇成本衡量的是：', options: ['换取一单位外汇所需人民币成本', '汇率', '利润率', '运费'], answer: 0, explain: '用于判断出口是否划算。' }
          ],
          doc: {
            lead: '这一章讲报价的三块。',
            sections: [
              { id: 'cost', title: '成本费用', html: `<p>采购成本（含税）、运费、保险、报关、佣金、银行费用。</p>` },
              { id: 'formula', title: '换算', html: `<p>FOB → CFR → CIF；退税后成本重算。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '单据与信用证',
          brief: '单证相符，银行才付款。',
          q: [
            { stem: '信用证付款的核心条件是：', options: ['单证相符', '货物合格', '买方确认', '卖方盈利'], answer: 0, explain: '银行只审单，不看货。' },
            { stem: '提单的三个功能不包括：', options: ['货物收据', '运输合同证明', '物权凭证', '保险凭证'], answer: 3, explain: '保险凭证是保险单。' },
            { stem: '信用证最常见的拒付原因是：', options: ['单证不符', '货物损坏', '买方破产', '汇率波动'], answer: 0, explain: '制单要逐字核对。' }
          ],
          doc: {
            lead: '这一章讲单据与结算。',
            sections: [
              { id: 'docs', title: '五种单据', html: `<p>发票、装箱单、提单、保险单、原产地证。</p>` },
              { id: 'lc', title: '信用证', html: `<p>开证、通知、交单、议付；软条款要警惕。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '物流与报关',
          brief: '货怎么走、怎么过海关。',
          q: [
            { stem: '海运提单与空运单的关键区别是：', options: ['提单是物权凭证，空运单不是', '速度', '价格', '重量'], answer: 0, explain: '空运单不可转让。' },
            { stem: '出口退税退的是：', options: ['国内环节已征的增值税、消费税', '关税', '所得税', '运费'], answer: 0, explain: '避免双重征税，提升出口竞争力。' },
            { stem: '报关时需要的主要材料不包括：', options: ['发票装箱单', '合同', '提单/运单', '员工体检报告'], answer: 3, explain: '报关材料与货物、合同相关。' }
          ],
          doc: {
            lead: '这一章讲运输与通关。',
            sections: [
              { id: 'logistics', title: '运输', html: `<p>海运、空运、中欧班列；整箱与拼箱。</p>` },
              { id: 'customs', title: '通关', html: `<p>报关、查验、征税、放行；单一窗口与 AEO 认证。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        }
      ]
    },
    {
      name: '跨境电商',
      chapters: [
        {
          title: '平台与选品',
          brief: '在平台上做生意，选品决定一半胜负。',
          q: [
            { stem: '跨境电商选品最应关注：', options: ['需求规模、竞争度、物流成本与合规', '个人喜好', '颜色', '品牌'], answer: 0, explain: '四要素决定能否盈利。' },
            { stem: '平台型与自建站的主要差别是：', options: ['流量来源与用户资产归属', '是否需要收款', '是否需要物流', '是否需要客服'], answer: 0, explain: '平台带流量，自建站积累用户。' },
            { stem: '跨境物流中"海外仓"的主要优势是：', options: ['缩短配送时间、提升转化', '成本最低', '无需清关', '无需库存'], answer: 0, explain: '前置备货提升体验。' }
          ],
          doc: {
            lead: '这一章讲选品与渠道。',
            sections: [
              { id: 'product', title: '选品', html: `<p>需求、竞争、毛利、物流友好度、合规风险。</p>` },
              { id: 'channel', title: '渠道', html: `<p>平台（亚马逊/速卖通/TikTok Shop）vs 独立站；流量成本与复购。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '流量与转化',
          brief: '从曝光到下单：每个环节都能优化。',
          q: [
            { stem: '转化率指的是：', options: ['下单人数/访问人数', '访问量', '客单价', '复购率'], answer: 0, explain: '转化漏斗的关键指标。' },
            { stem: 'ACOS 衡量的是：', options: ['广告花费占销售额比例', '毛利率', '库存周转', '退货率'], answer: 0, explain: '广告成本效率。' },
            { stem: '提升复购最有效的手段之一是：', options: ['产品质量与售后体验', '提高价格', '减少客服', '降低曝光'], answer: 0, explain: '口碑与体验决定复购。' }
          ],
          doc: {
            lead: '这一章讲漏斗与指标。',
            sections: [
              { id: 'funnel', title: '漏斗', html: `<p>曝光 → 点击 → 加购 → 下单 → 复购；每层看转化率。</p>` },
              { id: 'ads', title: '广告', html: `<p>ACOS、ROAS、CPC；关键词与素材测试。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '合规与税务',
          brief: '跨境的红线：VAT、认证、知识产权。',
          q: [
            { stem: '欧盟跨境电商卖家通常需要注册：', options: ['VAT（增值税）', '所得税', '关税', '印花税'], answer: 0, explain: '按仓储国/销售额触发注册义务。' },
            { stem: '产品认证中最常见的是：', options: ['CE（欧盟）、FCC（美国）等', 'ISO 9001', 'BSCI', 'SGS'], answer: 0, explain: '按目标市场强制要求。' },
            { stem: '跨境电商知识产权风险主要来自：', options: ['商标、专利与版权侵权投诉', '物流延误', '汇率', '客服'], answer: 0, explain: '平台对侵权处理严厉，可能直接下架封店。' }
          ],
          doc: {
            lead: '这一章讲三条合规线。',
            sections: [
              { id: 'tax', title: '税务', html: `<p>VAT 注册与申报、IOSS、关税起征点。</p>` },
              { id: 'ip', title: '知产与认证', html: `<p>商标备案、专利检索、产品认证；上架前自查。</p>
<div class="doc-tip">⚠️ 侵权投诉是封店主因之一，先查再上。</div>` }
            ],
            refs: [ECON_REFS.stats]
          }
        }
      ]
    },
    {
      name: '计量经济学',
      chapters: [
        {
          title: '回归',
          brief: '量化关系的第一步。',
          q: [
            { stem: 'OLS 无偏的关键假设是：', options: ['外生性（误差与解释变量不相关）', 'R² 高', '样本大', '显著'], answer: 0, explain: '零条件均值。' },
            { stem: '异方差主要影响：', options: ['标准误与推断', '系数', 'R²', '样本'], answer: 0, explain: '可用稳健标准误。' },
            { stem: '多元回归系数的含义是：', options: ['控制其他变量后 X 对 Y 的平均影响', '相关系数', '弹性', '截距'], answer: 0, explain: '偏效应。' }
          ],
          doc: {
            lead: '这一章讲 OLS 与诊断。',
            sections: [
              { id: 'ols', title: '估计', html: `<p>最小二乘、拟合优度、标准误。</p>` },
              { id: 'diag', title: '诊断', html: `<p>异方差、共线性、异常值、函数形式。</p>` }
            ],
            refs: [ECON_REFS.nber, ECON_REFS.stats]
          }
        },
        {
          title: '因果识别',
          brief: '贸易政策的效果怎么估。',
          q: [
            { stem: 'DID 的关键假设是：', options: ['平行趋势', '随机抽样', '正态分布', '无共线性'], answer: 0, explain: '无政策时两组趋势应相同。' },
            { stem: '工具变量需满足：', options: ['相关性与外生性', '显著性与稳健性', '线性与正态', '大样本'], answer: 0, explain: '与内生变量相关、仅通过它影响结果。' },
            { stem: '断点回归适用于：', options: ['存在明确阈值决定处理的情形', '随机实验', '时间序列', '面板'], answer: 0, explain: '阈值附近近似随机。' }
          ],
          doc: {
            lead: '这一章讲三种识别策略。',
            sections: [
              { id: 'did', title: 'DID', html: `<p>处理组 × 政策后；事件研究图检验动态效应。</p>` },
              { id: 'iv', title: 'IV 与 RDD', html: `<p>IV 找外生冲击；RDD 用阈值附近比较。</p>` }
            ],
            refs: [ECON_REFS.nber]
          }
        },
        {
          title: '贸易实证',
          brief: '引力模型：贸易量的经典解释。',
          q: [
            { stem: '引力模型认为双边贸易额与什么正相关？', options: ['两国经济规模、负相关于距离', '正相关于距离', '无关', '只与关税有关'], answer: 0, explain: 'GDP 越大、距离越近，贸易越多。' },
            { stem: '测算关税对贸易的影响，常用：', options: ['引力模型 + 固定效应', '只画散点', '只做问卷', '只看政策文本'], answer: 0, explain: '控制多边阻力与不可观测因素。' },
            { stem: '贸易数据的常见问题是：', options: ['转口贸易导致重复统计', '没有数据', '数据太少', '没有价格'], answer: 0, explain: '原产地与转口造成口径问题。' }
          ],
          doc: {
            lead: '这一章讲引力模型与数据问题。',
            sections: [
              { id: 'gravity', title: '引力模型', html: `<p>ln T = α + β1 ln GDP + β2 ln Dist + …；多边阻力项。</p>` },
              { id: 'data', title: '数据', html: `<p>转口、复进口、统计口径；用 CEPII/UN Comtrade。</p>` }
            ],
            refs: [ECON_REFS.wb, ECON_REFS.nber]
          }
        }
      ]
    },

    /* ---- 大四 ---- */
    {
      name: '外贸实习',
      chapters: [
        {
          title: '岗位与流程',
          brief: '外贸业务员、跟单员、单证员：三个岗位三种活。',
          q: [
            { stem: '外贸业务员的核心工作是：', options: ['开发客户与谈判成交', '制单', '报关', '财务'], answer: 0, explain: '业务员负责获客与成交。' },
            { stem: '跟单员主要负责：', options: ['订单进度与生产协调', '开发客户', '报关', '收款'], answer: 0, explain: '跟踪生产与交期。' },
            { stem: '单证员的核心要求是：', options: ['单据准确、单证相符', '英语口语', '谈判', '设计'], answer: 0, explain: '单证差错直接影响收汇。' }
          ],
          doc: {
            lead: '这一章讲三个岗位的分工。',
            sections: [
              { id: 'roles', title: '三个岗位', html: `<ul><li>业务员：客户与订单</li><li>跟单员：生产与交期</li><li>单证员：单据与结算</li></ul>` },
              { id: 'flow', title: '一单流程', html: `<p>询盘→报价→打样→合同→生产→订舱→报关→制单→收汇。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '客户与单证',
          brief: '获客与制单，是实习最常上手的两件事。',
          q: [
            { stem: '开发信最有效的内容是：', options: ['针对客户需求的简短价值主张', '长篇公司介绍', '只发价格表', '只发问候'], answer: 0, explain: '相关性与简洁决定回复率。' },
            { stem: '客户询盘后，第一步应当：', options: ['确认需求与数量再报价', '直接报最低价', '不回复', '寄样品'], answer: 0, explain: '需求不清的报价容易作废。' },
            { stem: '制单时最需要核对的是：', options: ['品名、数量、金额与信用证条款一致', '字体', '页边距', '邮箱'], answer: 0, explain: '单证不符会被拒付。' }
          ],
          doc: {
            lead: '这一章讲获客与制单的实操。',
            sections: [
              { id: 'customer', title: '客户', html: `<p>展会、平台、海关数据、老客户介绍；跟进节奏与话术。</p>` },
              { id: 'docs', title: '单证', html: `<p>发票、装箱单、提单、产地证；与信用证逐条对照。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '复盘与转化',
          brief: '把三个月实习变成一段能讲的能力。',
          q: [
            { stem: '实习复盘最有价值的写法是：', options: ['问题—做法—结果—反思', '罗列工作', '抒情', '抄日报'], answer: 0, explain: '结构化复盘可转化为面试素材。' },
            { stem: '实习中最该主动争取的是：', options: ['完整跟进一单的机会', '轻松的任务', '加班费', '出差'], answer: 0, explain: '全流程经验最稀缺。' },
            { stem: '离职交接应当：', options: ['文档化并说明进度', '直接离开', '删除文件', '不回复'], answer: 0, explain: '职业口碑很重要。' }
          ],
          doc: {
            lead: '这一章讲复盘与交接。',
            sections: [
              { id: 'review', title: '复盘', html: `<p>每周五行：做了什么、遇到什么、怎么解决、学到什么。</p>` },
              { id: 'leave', title: '交接', html: `<p>客户清单、订单进度、单据模板；合规范围内保留作品。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        }
      ]
    },
    {
      name: '毕业论文',
      chapters: [
        {
          title: '选题与文献',
          brief: '小问题、有数据、可识别。',
          q: [
            { stem: '国贸本科论文的合格选题应当：', options: ['具体、有数据、可分析', '宏大抽象', '纯翻译', '只谈政策'], answer: 0, explain: '可完成与可检验是底线。' },
            { stem: '文献综述的作用是：', options: ['定位缺口', '凑字数', '展示阅读量', '复述教材'], answer: 0, explain: '为你的问题定位。' },
            { stem: '开题最应写清：', options: ['问题、数据、方法、可行性', '致谢', '格式', '篇幅'], answer: 0, explain: '四要素决定可行性。' }
          ],
          doc: {
            lead: '这一章讲选题与开题。',
            sections: [
              { id: 'topic', title: '选题', html: `<p>如"某关税政策对某行业出口的影响"：有政策冲击、有数据。</p>` },
              { id: 'proposal', title: '开题', html: `<p>问题—文献—数据—方法—时间表。</p>` }
            ],
            refs: [ECON_REFS.wb, ECON_REFS.nber]
          }
        },
        {
          title: '数据与识别',
          brief: '论文的含金量在识别。',
          q: [
            { stem: '使用海关数据做研究，需要注意：', options: ['HS 编码版本与口径一致', '颜色', '字体', '页边距'], answer: 0, explain: '编码版本变化会导致口径断裂。' },
            { stem: '识别策略应在哪部分详述？', options: ['实证设计', '致谢', '附录', '参考文献'], answer: 0, explain: '模型、变量与识别假设。' },
            { stem: '结果不显著时应当：', options: ['如实报告并讨论原因', '改数据', '删除结果', '换变量直到显著'], answer: 0, explain: '学术诚信底线。' }
          ],
          doc: {
            lead: '这一章讲数据与实证设计。',
            sections: [
              { id: 'data', title: '数据', html: `<p>UN Comtrade、海关总署、CEPII；HS 编码对照。</p>` },
              { id: 'design', title: '设计', html: `<p>引力模型 + 固定效应；DID 评估政策；稳健性检验。</p>` }
            ],
            refs: [ECON_REFS.wb]
          }
        },
        {
          title: '写作与答辩',
          brief: '把结论写清楚，把问题答得住。',
          q: [
            { stem: '摘要应包含：', options: ['问题、方法、发现、贡献', '致谢', '目录', '参考文献'], answer: 0, explain: '四要素。' },
            { stem: '答辩被问"数据可靠吗"，最好的回答是：', options: ['说明来源、口径与局限', '当然可靠', '回避', '改口'], answer: 0, explain: '承认边界是专业表现。' },
            { stem: '结论部分不应：', options: ['夸大因果范围', '回应问题', '说明局限', '提延伸'], answer: 0, explain: '结论不能超出证据。' }
          ],
          doc: {
            lead: '这一章讲写作与答辩。',
            sections: [
              { id: 'write', title: '写作', html: `<p>问题—文献—数据—方法—结果—讨论—结论。</p>` },
              { id: 'defend', title: '答辩', html: `<p>准备三问：核心发现、最强质疑、改进方向。</p>` }
            ],
            refs: [ECON_REFS.wb]
          }
        }
      ]
    },
    {
      name: '考研与求职',
      chapters: [
        {
          title: '考研',
          brief: '国贸考研：数学与专业课并重。',
          q: [
            { stem: '国际贸易学硕专业课通常考：', options: ['国际贸易学 + 经济学综合', '只考数学', '只考英语', '只考政治'], answer: 0, explain: '多数院校考经济学综合与国际经济。' },
            { stem: '复习专业课的核心是：', options: ['理论 + 图形 + 现实案例', '背结论', '只做真题', '只看教材'], answer: 0, explain: '论述题需要模型与现实结合。' },
            { stem: '择校最应考虑：', options: ['科目、报录比与方向匹配', '城市', '学费', '宿舍'], answer: 0, explain: '匹配度决定胜率。' }
          ],
          doc: {
            lead: '这一章讲考研三块。',
            sections: [
              { id: 'subjects', title: '科目', html: `<ul><li>数学三</li><li>经济学综合（微观/宏观/国贸）</li><li>英语政治</li></ul>` },
              { id: 'plan', title: '节奏', html: `<p>3–6 月基础，7–8 月强化，9–10 月真题，11–12 月模拟。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '求职',
          brief: '外贸企业、货代、银行国际业务、跨境电商。',
          q: [
            { stem: '外贸岗位最看重的硬技能是：', options: ['外语 + 单证 + 报价核算', '编程', '设计', '会计'], answer: 0, explain: '三项是日常刚需。' },
            { stem: '货代公司的核心业务是：', options: ['订舱、报关、运输组织', '生产', '零售', '金融'], answer: 0, explain: '国际物流服务。' },
            { stem: '跨境电商运营岗看重：', options: ['数据运营与平台规则', '谈判', '制单', '报关'], answer: 0, explain: '选品、投放与合规。' }
          ],
          doc: {
            lead: '这一章讲四个去向。',
            sections: [
              { id: 'paths', title: '四个方向', html: `<ul><li>外贸企业/跨境电商</li><li>货代与供应链</li><li>银行国际业务</li><li>海关/商务部门</li></ul>` },
              { id: 'prep', title: '准备', html: `<p>英语 + 单证 + 一份完整的订单复盘。</p>` }
            ],
            refs: [ECON_REFS.stats]
          }
        },
        {
          title: '作品集',
          brief: '一份订单全流程记录，胜过十句自我介绍。',
          q: [
            { stem: '国贸求职作品集最核心的是：', options: ['一单业务的完整记录（脱敏）', '成绩单', '证书', '自荐信'], answer: 0, explain: '流程经验最直观。' },
            { stem: '面试讲业务经历的最佳结构是：', options: ['背景—我的工作—结果—反思', '流水账', '只讲结果', '只讲公司'], answer: 0, explain: '结构化叙述体现贡献。' },
            { stem: '涉及客户信息时应当：', options: ['脱敏处理', '全部公开', '随意编造', '不提'], answer: 0, explain: '保密义务。' }
          ],
          doc: {
            lead: '这一章讲作品集的组织。',
            sections: [
              { id: 'kit', title: '三件套', html: `<ul><li>订单流程记录</li><li>报价核算表</li><li>实习复盘</li></ul>` },
              { id: 'tell', title: '讲法', html: `<p>2 分钟：客户、难点、结果、反思。</p>` }
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
