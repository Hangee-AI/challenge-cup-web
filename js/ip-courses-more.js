/* ==========================================================
   ip-courses-more.js · 知识产权（上）：前 5 门主干补到 15 章
   --------------------------------------------------------
   C 方案：主干 15 章 / 出口 8 章。本文件负责
   民法与法理、著作权·专利·商标、著作权法、专利法、商标法。
   ========================================================== */

appendChapters('law-知识产权', [
  /* ---------- 1 法理学：3 → 15 ---------- */
  {
    chapters: [
      {
        title: '法的渊源与效力',
        brief: '知产规则散落在法律、行政法规、司法解释与国际条约中。',
        q: [
          { stem: '下列不属于我国正式法律渊源的是：', options: ['行政法规', '地方性法规', '法学教材', '司法解释'], answer: 2, explain: '教材属学理。' },
          { stem: '法律效力等级最高的是：', options: ['宪法', '法律', '行政法规', '规章'], answer: 0, explain: '宪法最高。' },
          { stem: '国际条约在我国的适用通常需要：', options: ['转化或直接适用（视条约性质）', '一律不适用', '只能参考', '由法院决定'], answer: 0, explain: '两种方式。' }
        ],
        doc: {
          lead: '这一章讲"到哪儿找规则"。',
          sections: [
            { id: 'sources', title: '渊源', html: `<p>宪法、法律（著作权法/专利法/商标法/反不正当竞争法）、行政法规、司法解释、国际条约。</p>` },
            { id: 'level', title: '效力', html: `<p>宪法 &gt; 法律 &gt; 行政法规 &gt; 地方性法规 &gt; 规章；下位法不得抵触。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '法律部门与体系',
        brief: '知产横跨民法、行政法、经济法与程序法。',
        q: [
          { stem: '著作权法属于：', options: ['民法商法部门', '行政法部门', '经济法部门', '社会法部门'], answer: 0, explain: '民事特别法。' },
          { stem: '专利授权程序属于：', options: ['行政程序', '民事程序', '刑事程序', '仲裁程序'], answer: 0, explain: '行政确权。' },
          { stem: '反不正当竞争法属于：', options: ['经济法部门', '民法部门', '刑法部门', '程序法'], answer: 0, explain: '市场秩序。' }
        ],
        doc: {
          lead: '这一章讲部门归属。',
          sections: [
            { id: 'map', title: '归属', html: `<p>著作权/专利/商标的民事规则属民法；确权程序属行政；反法属经济法；诉讼程序属程序法。</p>` },
            { id: 'use', title: '意义', html: `<p>决定适用哪套程序与救济：民事赔偿、行政查处、刑事追诉。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '法律关系',
        brief: '主体、客体、内容：知产法律关系同样三要素。',
        q: [
          { stem: '知产法律关系的客体是：', options: ['智力成果与商业标识', '物', '行为', '人身'], answer: 0, explain: '无形客体。' },
          { stem: '知产法律关系的主体包括：', options: ['权利人、使用人、公众', '只有权利人', '只有国家', '只有企业'], answer: 0, explain: '多方。' },
          { stem: '法律事实引起法律关系：', options: ['产生、变更、消灭', '只有产生', '只有消灭', '无影响'], answer: 0, explain: '三类变动。' }
        ],
        doc: {
          lead: '这一章讲三要素。',
          sections: [
            { id: 'elements', title: '三要素', html: `<p>主体（权利人/使用人）、客体（作品/技术方案/标识）、内容（专有权与义务）。</p>` },
            { id: 'change', title: '变动', html: `<p>创作、申请、许可、转让、侵权都是法律事实。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '法律责任',
        brief: '民事、行政、刑事：知产的三重责任。',
        q: [
          { stem: '知产侵权的民事责任主要是：', options: ['停止侵害与赔偿', '罚款', '拘留', '吊销执照'], answer: 0, explain: '民事救济。' },
          { stem: '侵犯著作权可能承担的行政责任是：', options: ['责令停止、没收、罚款', '拘役', '管制', '有期徒刑'], answer: 0, explain: '行政处罚。' },
          { stem: '假冒注册商标罪的构成要求：', options: ['情节严重', '任何使用', '只要近似', '只要未注册'], answer: 0, explain: '情节要件。' }
        ],
        doc: {
          lead: '这一章讲三重责任。',
          sections: [
            { id: 'civil', title: '民事', html: `<p>停止侵害、赔偿损失、消除影响。</p>` },
            { id: 'admin', title: '行政与刑事', html: `<p>责令停止、没收、罚款；假冒注册商标罪、侵犯著作权罪、侵犯商业秘密罪。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '立法与法律运行',
        brief: '修法节奏影响实务：近年知产法频繁修改。',
        q: [
          { stem: '我国著作权法最近一次大修是：', options: ['2020 年', '2010 年', '2001 年', '1990 年'], answer: 0, explain: '2020 年修正。' },
          { stem: '专利法 2020 年修改新增了：', options: ['惩罚性赔偿与药品专利期补偿', '废除实用新型', '取消年费', '缩短期限'], answer: 0, explain: '两项重点。' },
          { stem: '商标法 2019 年修改重点是：', options: ['规制恶意注册、提高赔偿', '取消异议', '缩短期限', '允许抢注'], answer: 0, explain: '恶意注册。' }
        ],
        doc: {
          lead: '这一章讲修法脉络。',
          sections: [
            { id: 'recent', title: '近年修改', html: `<p>著作权法 2020（惩罚性赔偿、视听作品）；专利法 2020（惩罚性赔偿、药品补偿、开放许可）；商标法 2019（恶意注册）。</p>` },
            { id: 'use', title: '影响', html: `<p>赔偿上限提高、举证规则细化、新客体出现。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '司法与执法',
        brief: '知产法院、技术调查官、行政执法。',
        q: [
          { stem: '我国知识产权法院设立于：', options: ['2014 年', '2001 年', '2010 年', '2020 年'], answer: 0, explain: '北上广。' },
          { stem: '技术类案件的上诉审理通常由：', options: ['最高人民法院知产法庭', '基层法院', '仲裁委', '市场监管局'], answer: 0, explain: '飞跃上诉。' },
          { stem: '行政执法与民事司法的关系是：', options: ['并行，可相互移送', '互斥', '只能行政', '只能司法'], answer: 0, explain: '并行。' }
        ],
        doc: {
          lead: '这一章讲运行机制。',
          sections: [
            { id: 'court', title: '司法', html: `<p>知产法院/法庭、技术调查官、飞跃上诉、惩罚性赔偿。</p>` },
            { id: 'admin', title: '执法', html: `<p>市场监管部门查处、海关保护、行政裁决（专利侵权纠纷）。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '法与社会',
        brief: '知产制度嵌在创新生态与产业政策里。',
        q: [
          { stem: '知产保护强度与经济发展水平的关系是：', options: ['通常正相关但有阶段差异', '完全无关', '负相关', '恒定'], answer: 0, explain: '发展阶段。' },
          { stem: '我国知产政策的转向是：', options: ['从数量导向到质量导向', '从保护到不保护', '从国内到放弃', '从严格到放任'], answer: 0, explain: '高质量发展。' },
          { stem: '知产与产业政策冲突的典型是：', options: ['仿制药与药品专利', '著作权登记', '商标注册', '专利申请'], answer: 0, explain: '公共健康。' }
        ],
        doc: {
          lead: '这一章讲制度环境。',
          sections: [
            { id: 'stage', title: '阶段差异', html: `<p>技术追赶期偏弱保护，创新引领期偏强保护；中国转向严格保护。</p>` },
            { id: 'conflict', title: '张力', html: `<p>药品与公共健康、教育与知识传播、平台与创作者。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '法与道德',
        brief: '抄袭、洗稿、抢注：法律与商业伦理的交叠。',
        q: [
          { stem: '学术抄袭主要违反：', options: ['学术规范与著作权法（视情形）', '只有道德', '只有刑法', '与法无关'], answer: 0, explain: '多重。' },
          { stem: '恶意抢注商标违反：', options: ['诚实信用原则', '罪刑法定', '比例原则', '信赖保护'], answer: 0, explain: '诚信。' },
          { stem: '"洗稿"是否必然违法？', options: ['不一定，需看是否构成实质性相似', '必然违法', '必然合法', '无法判断'], answer: 0, explain: '个案判断。' }
        ],
        doc: {
          lead: '这一章讲边界。',
          sections: [
            { id: 'ethics', title: '伦理', html: `<p>署名、引用、尊重创作；行业惯例。</p>` },
            { id: 'law', title: '法律', html: `<p>实质性相似、混淆、诚信原则——把伦理底线变成可诉标准。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '法经济学入门',
        brief: '保护的成本与收益。',
        q: [
          { stem: '知产制度的经济目标是：', options: ['激励创新与促进传播的平衡', '最大化垄断', '最小化成本', '消灭竞争'], answer: 0, explain: '平衡。' },
          { stem: '保护期过长的风险是：', options: ['阻碍后续创新与传播', '激励不足', '没有风险', '降低成本'], answer: 0, explain: '过度保护。' },
          { stem: '惩罚性赔偿的经济功能是：', options: ['提高违法成本、威慑', '增加财政', '补偿受害人唯一', '惩罚法官'], answer: 0, explain: '威慑。' }
        ],
        doc: {
          lead: '这一章讲效率视角。',
          sections: [
            { id: 'tradeoff', title: '权衡', html: `<p>激励（动态效率）vs 传播（静态效率）；期限、范围、例外都是调节旋钮。</p>` },
            { id: 'tool', title: '工具', html: `<p>成本收益、边际威慑、公共物品理论。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '法学方法论',
        brief: '涵摄、解释、论证、漏洞填补。',
        q: [
          { stem: '知产案件的"涵摄"指：', options: ['把被诉行为归入构成要件', '引用法条', '立法', '执行'], answer: 0, explain: '三段论。' },
          { stem: '法律解释的首选方法是：', options: ['文义解释', '目的解释', '历史解释', '比较法'], answer: 0, explain: '起点。' },
          { stem: '法律论证的要求是：', options: ['结论有可检验的理由', '结论即可', '引用越多越好', '符合舆论'], answer: 0, explain: '说理。' }
        ],
        doc: {
          lead: '这一章讲"怎么得出答案"。',
          sections: [
            { id: 'method', title: '四步', html: `<p>找规范 → 解释要件 → 认定事实 → 涵摄论证。</p>` },
            { id: 'gap', title: '漏洞', html: `<p>类推、目的性扩张/限缩；知产中常见于新技术场景。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '知识产权在法律体系中的位置',
        brief: '民事权利 + 行政确权 + 竞争规制。',
        q: [
          { stem: '知识产权在民法典中的定位是：', options: ['民事权利（第 123 条）', '行政权力', '经济权利', '宪法权利'], answer: 0, explain: '民事权利。' },
          { stem: '专利权的取得需要：', options: ['行政授权', '自动取得', '合同约定', '法院判决'], answer: 0, explain: '行政确权。' },
          { stem: '反法保护在知产体系中的角色是：', options: ['兜底补充', '替代', '优先', '无关'], answer: 0, explain: '兜底。' }
        ],
        doc: {
          lead: '这一章讲体系定位。',
          sections: [
            { id: 'position', title: '三层', html: `<p>民事权利（民法典第 123 条）→ 专门法（著/专/商）→ 竞争法兜底。</p>` },
            { id: 'use', title: '用法', html: `<p>先找专门法，找不到再考虑反法一般条款。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '复习',
        brief: '法理学的三条线：规范、适用、评价。',
        q: [
          { stem: '法理学复习的三条线是：', options: ['规范、适用、评价', '立法、司法、执法', '过去、现在、未来', '国内、国际'], answer: 0, explain: '三线。' },
          { stem: '知产案例最常用的方法：', options: ['请求权基础分析', '历史研究', '比较法唯一', '实证统计'], answer: 0, explain: '方法。' },
          { stem: '论述题得分关键是：', options: ['概念 + 规范 + 评价', '篇幅', '字迹', '引用'], answer: 0, explain: '内容。' }
        ],
        doc: {
          lead: '这一章收成三线。',
          sections: [
            { id: 'three', title: '三线', html: `<ul><li>规范：渊源与体系</li><li>适用：解释与涵摄</li><li>评价：正当性与效果</li></ul>` },
            { id: 'tip', title: '提示', html: `<p>遇到新问题，先找最接近的规范，再论证适用。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      }
    ]
  },

  /* ---------- 2 民法总论：3 → 15 ---------- */
  {
    chapters: [
      {
        title: '民法的基本原则',
        brief: '平等、自愿、公平、诚信、公序良俗、绿色。',
        q: [
          { stem: '知产交易中"显失公平"可导致：', options: ['可撤销', '当然无效', '效力待定', '无影响'], answer: 0, explain: '公平原则。' },
          { stem: '诚信原则在知产中的典型适用是：', options: ['规制恶意抢注与权利滥用', '扩大保护', '缩短期限', '免除赔偿'], answer: 0, explain: '诚信。' },
          { stem: '公序良俗原则可用于：', options: ['否定违反公共利益的交易', '增加许可', '降低价格', '延长保护'], answer: 0, explain: '效力控制。' }
        ],
        doc: {
          lead: '这一章讲民法总纲。',
          sections: [
            { id: 'six', title: '六项原则', html: `<p>平等、自愿、公平、诚信、守法与公序良俗、绿色。</p>` },
            { id: 'function', title: '功能', html: `<p>解释依据、效力控制、漏洞填补。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '民事主体',
        brief: '自然人、法人、非法人组织：谁享有知产。',
        q: [
          { stem: '作者的民事权利能力始于：', options: ['出生', '18 岁', '发表作品', '登记'], answer: 0, explain: '出生。' },
          { stem: '法人的著作权归属于：', options: ['法人（法人作品情形）', '员工个人', '股东', '国家'], answer: 0, explain: '法人作品。' },
          { stem: '非法人组织能否成为知产主体？', options: ['可以', '不可以', '只有法人可以', '只有自然人'], answer: 0, explain: '可。' }
        ],
        doc: {
          lead: '这一章讲主体资格。',
          sections: [
            { id: 'types', title: '三类', html: `<p>自然人、法人（营利/非营利）、非法人组织（合伙、个人独资等）。</p>` },
            { id: 'capacity', title: '能力', html: `<p>权利能力与行为能力；创作与申请资格另行判断。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '法律行为',
        brief: '意思表示 + 效果：合同、许可、转让都是法律行为。',
        q: [
          { stem: '知产许可合同属于：', options: ['双方法律行为', '单方法律行为', '事实行为', '行政行为'], answer: 0, explain: '双方。' },
          { stem: '意思表示不真实可能导致：', options: ['可撤销', '当然无效', '效力待定', '无影响'], answer: 0, explain: '欺诈胁迫。' },
          { stem: '附条件的许可合同，条件成就时：', options: ['生效', '无效', '解除', '效力待定'], answer: 0, explain: '条件成就。' }
        ],
        doc: {
          lead: '这一章讲行为效力。',
          sections: [
            { id: 'act', title: '法律行为', html: `<p>意思表示 + 效果意思；单方/双方/多方。</p>` },
            { id: 'valid', title: '效力', html: `<p>有效、无效、可撤销、效力待定；附条件与附期限。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '代理',
        brief: '委托代理、法定代理：知产许可与诉讼常靠代理。',
        q: [
          { stem: '无权代理的后果是：', options: ['效力待定，可追认', '当然无效', '当然有效', '自动撤销'], answer: 0, explain: '待定。' },
          { stem: '表见代理保护的是：', options: ['善意相对人', '被代理人', '代理人', '第三人'], answer: 0, explain: '交易安全。' },
          { stem: '自己代理原则上：', options: ['需被代理人同意，否则效力待定', '有效', '无效', '可撤销'], answer: 0, explain: '利益冲突。' }
        ],
        doc: {
          lead: '这一章讲代理。',
          sections: [
            { id: 'types', title: '类型', html: `<p>委托、法定、指定；本代理与复代理。</p>` },
            { id: 'conflict', title: '冲突', html: `<p>自己代理、双方代理需同意；表见代理保护善意。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '诉讼时效',
        brief: '3 年：知产侵权赔偿的时间边界。',
        q: [
          { stem: '普通诉讼时效为：', options: ['3 年', '1 年', '5 年', '20 年'], answer: 0, explain: '3 年。' },
          { stem: '持续侵权的赔偿可向前推算：', options: ['3 年', '1 年', '5 年', '全部'], answer: 0, explain: '自起诉日。' },
          { stem: '时效届满的后果是：', options: ['产生抗辩权，不消灭权利', '权利消灭', '合同无效', '自动续期'], answer: 0, explain: '抗辩权。' }
        ],
        doc: {
          lead: '这一章讲时效。',
          sections: [
            { id: 'term', title: '期限', html: `<p>3 年，最长 20 年；中止、中断、延长。</p>` },
            { id: 'ip', title: '知产', html: `<p>停止侵害不受时效限制；赔偿受时效约束。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '民事责任',
        brief: '违约、侵权、缔约过失：三种责任基础。',
        q: [
          { stem: '知产许可违约与侵权竞合时：', options: ['择一主张', '同时主张', '都不能', '由法院定'], answer: 0, explain: '竞合。' },
          { stem: '缔约过失责任赔偿的是：', options: ['信赖利益', '履行利益', '固有利益', '精神损害'], answer: 0, explain: '信赖。' },
          { stem: '侵权责任赔偿的是：', options: ['固有利益', '履行利益', '信赖利益', '预期利润'], answer: 0, explain: '固有。' }
        ],
        doc: {
          lead: '这一章讲三种责任。',
          sections: [
            { id: 'three', title: '三种', html: `<p>违约（履行利益）、侵权（固有利益）、缔约过失（信赖利益）。</p>` },
            { id: 'choose', title: '选择', html: `<p>看举证、赔偿范围、能否主张禁令与惩罚性赔偿。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '物权基础',
        brief: '知识产权的"准物权"属性：排他、对世。',
        q: [
          { stem: '知识产权与物权的共同点是：', options: ['排他性与对世性', '都有形', '都需登记', '都无期限'], answer: 0, explain: '支配性。' },
          { stem: '知识产权与物权的区别是：', options: ['客体无形、需法定类型', '都需交付', '都可占有', '都无期限'], answer: 0, explain: '法定主义。' },
          { stem: '物权法定原则对知产的启示是：', options: ['权利类型由法律规定', '可自由创设', '无需登记', '永久有效'], answer: 0, explain: '法定。' }
        ],
        doc: {
          lead: '这一章讲类比。',
          sections: [
            { id: 'similar', title: '相似', html: `<p>排他、对世、可许可、可转让。</p>` },
            { id: 'diff', title: '差异', html: `<p>无形、地域性、期限性、法定类型。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '债权基础',
        brief: '许可合同产生债：履行、抗辩、违约。',
        q: [
          { stem: '许可合同属于：', options: ['双务合同', '单务合同', '实践合同', '无偿合同'], answer: 0, explain: '双务。' },
          { stem: '被许可人未付许可费，许可人可以：', options: ['解除合同并索赔', '直接侵权', '无需处理', '自行使用'], answer: 0, explain: '违约救济。' },
          { stem: '债的相对性意味着：', options: ['只能向合同相对方主张', '可向任何人主张', '对世', '无相对人'], answer: 0, explain: '相对性。' }
        ],
        doc: {
          lead: '这一章讲合同之债。',
          sections: [
            { id: 'contract', title: '许可合同', html: `<p>双务、有偿；范围与期限为核心条款。</p>` },
            { id: 'remedy', title: '救济', html: `<p>继续履行、赔偿、解除；约定违约金。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '人格权基础',
        brief: '署名、肖像、姓名与知产的交叉。',
        q: [
          { stem: '著作权中的署名权属于：', options: ['著作人身权', '人格权编', '商标权', '专利权'], answer: 0, explain: '著作人身权。' },
          { stem: '将他人姓名注册为商标可能侵犯：', options: ['姓名权', '专利权', '著作权', '商业秘密'], answer: 0, explain: '在先权利。' },
          { stem: '肖像的商业使用需：', options: ['本人同意（法定例外除外）', '无需同意', '只需付费', '需公证'], answer: 0, explain: '肖像权。' }
        ],
        doc: {
          lead: '这一章讲交叉。',
          sections: [
            { id: 'overlap', title: '交叉点', html: `<p>署名权、姓名权、肖像权、名誉权与商标/著作权冲突。</p>` },
            { id: 'use', title: '救济', html: `<p>人格权请求权 + 知产无效/撤销 + 反法混淆。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '民法典与知产',
        brief: '第 123 条的定位与开放客体。',
        q: [
          { stem: '民法典第 123 条规定：', options: ['知识产权的客体类型', '专利申请程序', '侵权赔偿标准', '诉讼时效'], answer: 0, explain: '客体条款。' },
          { stem: '"数据、网络虚拟财产"的规定为：', options: ['留有保护空间（概括条款）', '明确保护', '完全排除', '仅刑法'], answer: 0, explain: '开放。' },
          { stem: '民法典对知产的作用是：', options: ['基础性规定 + 兜底', '替代专门法', '取消专门法', '仅宣示'], answer: 0, explain: '基础。' }
        ],
        doc: {
          lead: '这一章讲基础法。',
          sections: [
            { id: 'article', title: '第 123 条', html: `<p>作品、发明、实用新型、外观设计、商标、地理标志、商业秘密、集成电路布图、植物新品种等。</p>` },
            { id: 'open', title: '开放性', html: `<p>"法律规定的其他客体"为数据等新客体留出空间。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '复习',
        brief: '主体—行为—代理—时效—责任，五段。',
        q: [
          { stem: '民法总论的五段是：', options: ['主体、行为、代理、时效、责任', '物权、债权、人格、亲属、继承', '立法、司法、执法、守法、监督', '国内、国际'], answer: 0, explain: '五段。' },
          { stem: '知产案件中最常用的是：', options: ['法律行为与责任', '亲属', '继承', '婚姻'], answer: 0, explain: '合同与侵权。' },
          { stem: '案例题先判断：', options: ['主体与行为效力', '赔偿数额', '管辖', '时效'], answer: 0, explain: '顺序。' }
        ],
        doc: {
          lead: '这一章收成五段。',
          sections: [
            { id: 'five', title: '五段', html: `<ol><li>主体资格</li><li>法律行为效力</li><li>代理权限</li><li>时效</li><li>责任类型</li></ol>` },
            { id: 'tip', title: '提示', html: `<p>先看主体与行为，再谈责任与救济。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      }
    ]
  },

  /* ---------- 3 著作权法：3 → 15 ---------- */
  {
    chapters: [
      {
        title: '作品类型',
        brief: '九类作品 + 兜底；视听、美术、摄影最容易出题。',
        q: [
          { stem: '视听作品的著作权归：', options: ['制片者', '导演', '编剧', '演员'], answer: 0, explain: '制片者。' },
          { stem: '计算机软件受：', options: ['著作权法保护（另有条例）', '专利法', '商标法', '反法'], answer: 0, explain: '著作权。' },
          { stem: '民间文学艺术作品的保护：', options: ['另有规定，防止不当使用', '不受保护', '永久保护', '自动许可'], answer: 0, explain: '特殊规则。' }
        ],
        doc: {
          lead: '这一章讲客体分类。',
          sections: [
            { id: 'list', title: '类型', html: `<p>文字、口述、视听、美术、摄影、工程设计图、模型、计算机软件、符合作品特征的其他智力成果。</p>` },
            { id: 'special', title: '特殊客体', html: `<p>职务作品、委托作品、合作作品、汇编作品。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '著作权归属',
        brief: '作者是谁：创作人、单位、委托人。',
        q: [
          { stem: '委托作品的著作权归属：', options: ['合同优先，无约定归受托人', '归委托人', '归国家', '共有'], answer: 0, explain: '民法典/著作权法。' },
          { stem: '职务作品原则上归：', options: ['作者，单位有优先使用权', '单位', '国家', '无主'], answer: 0, explain: '一般职务作品。' },
          { stem: '合作作品的著作权由：', options: ['合作作者共同享有', '第一作者', '出资方', '出版社'], answer: 0, explain: '共同享有。' }
        ],
        doc: {
          lead: '这一章讲"权属"。',
          sections: [
            { id: 'rules', title: '归属规则', html: `<p>个人、职务、法人、委托、合作、汇编、演绎。</p>` },
            { id: 'dispute', title: '争议', html: `<p>署名推定：如无相反证明，署名者为作者。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '邻接权',
        brief: '表演者、录音制作者、出版者、广播组织。',
        q: [
          { stem: '邻接权保护的是：', options: ['传播者的劳动投入', '作者创作', '消费者', '平台'], answer: 0, explain: '传播者。' },
          { stem: '表演者的权利不包括：', options: ['表明表演者身份', '保护表演形象不受歪曲', '许可他人直播', '改编原作'], answer: 3, explain: '改编属作者。' },
          { stem: '录音制作者对录音制品享有：', options: ['复制、发行、出租、信息网络传播权', '表演权', '署名权', '改编权'], answer: 0, explain: '邻接权内容。' }
        ],
        doc: {
          lead: '这一章讲传播者权利。',
          sections: [
            { id: 'who', title: '四类主体', html: `<p>表演者、录音录像制作者、出版者、广播电台电视台。</p>` },
            { id: 'limit', title: '限制', html: `<p>邻接权不得损害被使用作品作者的著作权。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '保护期',
        brief: '自然人终生加 50 年；法人首次发表后 50 年。',
        q: [
          { stem: '自然人作品的财产权保护期是：', options: ['作者终生加死后 50 年', '发表后 50 年', '永久', '20 年'], answer: 0, explain: '基本规则。' },
          { stem: '法人作品的保护期是：', options: ['首次发表后 50 年', '终生加 50 年', '永久', '10 年'], answer: 0, explain: '发表起算。' },
          { stem: '署名权的保护期：', options: ['不受限制', '50 年', '终生', '10 年'], answer: 0, explain: '人身权永续。' }
        ],
        doc: {
          lead: '这一章讲期限。',
          sections: [
            { id: 'terms', title: '期限', html: `<p>自然人：终生 + 50 年（至第 50 年 12 月 31 日）；法人：首次发表后 50 年。</p>` },
            { id: 'personal', title: '人身权', html: `<p>署名、修改、保护作品完整权不受期限限制。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '合理使用详解',
        brief: '十三种情形 + 三步检验。',
        q: [
          { stem: '为课堂教学少量复制已发表作品：', options: ['属合理使用（限定）', '一律侵权', '需授权', '需付酬'], answer: 0, explain: '教学例外。' },
          { stem: '引用他人作品应：', options: ['指明作者与出处，且不损害权利人利益', '无需注明', '可整篇引用', '可改编'], answer: 0, explain: '引用规范。' },
          { stem: '三步检验法不包括：', options: ['特定情形', '不影响正常使用', '不损害合法利益', '必须免费'], answer: 3, explain: '三步内容。' }
        ],
        doc: {
          lead: '这一章讲例外清单。',
          sections: [
            { id: 'list', title: '常见情形', html: `<p>个人学习、评论引用、新闻报道、教学科研、图书馆存档、无障碍、免费表演等。</p>` },
            { id: 'test', title: '三步检验', html: `<p>特定情形 + 不影响正常使用 + 不无理损害权利人利益。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '侵权判定',
        brief: '接触 + 实质性相似。',
        q: [
          { stem: '实质性相似的比对对象是：', options: ['受保护的表达', '思想', '通用元素', '事实'], answer: 0, explain: '排除不保护部分。' },
          { stem: '"接触"的证明方式包括：', options: ['发表时间、工作关系、渠道', '猜测', '舆论', '市场地位'], answer: 0, explain: '推定。' },
          { stem: '抗辩事由不包括：', options: ['独立创作', '合理使用', '法定许可', '商业成功'], answer: 3, explain: '商业成功不是抗辩。' }
        ],
        doc: {
          lead: '这一章讲比对方法。',
          sections: [
            { id: 'test', title: '两步', html: `<p>接触可能性 + 表达实质性相似（剔除思想、公有领域、通用元素）。</p>` },
            { id: 'defense', title: '抗辩', html: `<p>独立创作、合理使用、法定许可、权利耗尽、时效。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '网络传播与平台责任',
        brief: '避风港、通知删除、红旗标准。',
        q: [
          { stem: '避风港规则的核心是：', options: ['平台不知情且及时处理可免责', '平台永远免责', '平台必须审查全部内容', '平台承担严格责任'], answer: 0, explain: '通知—删除。' },
          { stem: '红旗标准指：', options: ['侵权事实明显如红旗时平台应知', '平台必须插旗', '内容必须标注', '平台必须过滤'], answer: 0, explain: '应知标准。' },
          { stem: '平台收到通知后未处理，可能：', options: ['承担连带责任', '无责任', '仅罚款', '仅道歉'], answer: 0, explain: '帮助侵权。' }
        ],
        doc: {
          lead: '这一章讲平台责任。',
          sections: [
            { id: 'safeharbor', title: '避风港', html: `<p>通知—删除—反通知；明知或应知不免责。</p>` },
            { id: 'duty', title: '义务', html: `<p>必要措施、公示、转通知、合理注意。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '技术措施与权利管理信息',
        brief: '保护"锁"本身。',
        q: [
          { stem: '规避技术措施的行为：', options: ['可能构成侵权（法定例外除外）', '一律合法', '不违法', '只违约'], answer: 0, explain: '技术措施保护。' },
          { stem: '技术措施的例外不包括：', options: ['教学研究（限定）', '安全测试', '商业破解', '执法需要'], answer: 2, explain: '商业破解违法。' },
          { stem: '删除权利管理信息：', options: ['可能构成侵权', '合法', '无影响', '鼓励'], answer: 0, explain: 'RMI 保护。' }
        ],
        doc: {
          lead: '这一章讲两个"周边"权利。',
          sections: [
            { id: 'tpm', title: '技术措施', html: `<p>防止规避；法定例外（教学、安全、执法）。</p>` },
            { id: 'rmi', title: '权利管理信息', html: `<p>不得删除或篡改；用于追踪授权。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '损害赔偿与救济',
        brief: '停止侵害、赔偿、消除影响。',
        q: [
          { stem: '著作权侵权的赔偿顺序是：', options: ['实际损失→获利→许可费→法定', '法定优先', '只看获利', '只看损失'], answer: 0, explain: '法定顺序。' },
          { stem: '法定赔偿上限为：', options: ['500 万元', '50 万元', '100 万元', '无上限'], answer: 0, explain: '2020 年修法。' },
          { stem: '消除影响主要针对：', options: ['名誉与商誉损害', '财产损失', '合同违约', '行政违法'], answer: 0, explain: '非财产损害。' }
        ],
        doc: {
          lead: '这一章讲救济。',
          sections: [
            { id: 'calc', title: '计算', html: `<p>实际损失 / 获利 / 许可费倍数 / 法定（≤500 万）；故意且严重可惩罚性。</p>` },
            { id: 'other', title: '其他', html: `<p>停止侵害、消除影响、赔礼道歉、销毁侵权复制品。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '计算机软件',
        brief: '软件著作权：登记、保护、侵权判定。',
        q: [
          { stem: '软件著作权登记的作用是：', options: ['初步证明，非权利前提', '权利产生要件', '必须程序', '税务要求'], answer: 0, explain: '自动保护。' },
          { stem: '软件侵权的常见形式是：', options: ['复制、修改、发行、反向工程（超范围）', '正版使用', '备份', '学习'], answer: 0, explain: '非法复制。' },
          { stem: '软件著作权的保护期（自然人）：', options: ['终生加 50 年', '25 年', '10 年', '永久'], answer: 0, explain: '同一般作品。' }
        ],
        doc: {
          lead: '这一章讲软件的特殊性。',
          sections: [
            { id: 'protect', title: '保护', html: `<p>源代码与目标代码均受保护；登记为初步证明。</p>` },
            { id: 'infringe', title: '侵权', html: `<p>复制、发行、信息网络传播；合理使用限于必要备份与兼容开发。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '复习',
        brief: '五组关系：作品/载体、思想/表达、权利/限制、作者/传播者、侵权/合理使用。',
        q: [
          { stem: '著作权复习的五组关系不包括：', options: ['原告/被告', '作品/载体', '思想/表达', '权利/限制'], answer: 0, explain: '五组概念。' },
          { stem: '最常考的例外是：', options: ['合理使用', '强制许可', '法定许可', '公有领域'], answer: 0, explain: '高频。' },
          { stem: '案例题先判断：', options: ['是否构成作品、权属归谁', '赔偿多少', '管辖', '时效'], answer: 0, explain: '顺序。' }
        ],
        doc: {
          lead: '这一章收成五组关系。',
          sections: [
            { id: 'five', title: '五组', html: `<ul><li>作品 vs 载体</li><li>思想 vs 表达</li><li>权利 vs 限制</li><li>作者 vs 传播者</li><li>侵权 vs 合理使用</li></ul>` },
            { id: 'method', title: '方法', html: `<p>先定性（是否作品/权属），再比对（接触+相似），最后抗辩。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      }
    ]
  },

  /* ---------- 4 专利法：3 → 15 ---------- */
  {
    chapters: [
      {
        title: '专利客体与排除',
        brief: '什么能授、什么不能授。',
        q: [
          { stem: '下列不授予专利权的是：', options: ['科学发现', '新合金', '新工艺', '新结构'], answer: 0, explain: '排除客体。' },
          { stem: '疾病诊断治疗方法：', options: ['不授予专利权（但医疗器械可）', '可授权', '部分授权', '需备案'], answer: 0, explain: '排除。' },
          { stem: '动物和植物品种：', options: ['不授权，但生产方法可授权', '可授权', '完全排除', '需审批'], answer: 0, explain: '例外。' }
        ],
        doc: {
          lead: '这一章讲门槛。',
          sections: [
            { id: 'yes', title: '可授权', html: `<p>产品、方法、改进；发明、实用新型、外观设计。</p>` },
            { id: 'no', title: '排除', html: `<p>科学发现、智力活动规则、诊断治疗方法、动植物品种、原子核变换方法。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '新颖性与抵触申请',
        brief: '现有技术 + 无抵触申请。',
        q: [
          { stem: '现有技术包括：', options: ['申请日前国内外公开的技术', '仅国内', '仅专利文献', '仅论文'], answer: 0, explain: '全球公开。' },
          { stem: '抵触申请指：', options: ['他人先申请后公开的同样发明', '自己的旧专利', '国外专利', '过期专利'], answer: 0, explain: '破坏新颖性。' },
          { stem: '不丧失新颖性的宽限期是：', options: ['申请日前 6 个月内特定情形公开', '1 年', '2 年', '无'], answer: 0, explain: '法定例外。' }
        ],
        doc: {
          lead: '这一章讲新颖性。',
          sections: [
            { id: 'prior', title: '现有技术', html: `<p>申请日以前在国内外为公众所知的技术。</p>` },
            { id: 'grace', title: '宽限期', html: `<p>国家紧急状态、学术会议首次发表等 6 个月内不丧失新颖性。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '创造性判断',
        brief: '三步法：确定最接近现有技术—区别特征—是否显而易见。',
        q: [
          { stem: '创造性判断的"三步法"不包括：', options: ['确定最接近的现有技术', '确定区别特征与实际解决的技术问题', '判断是否显而易见', '看申请人的规模'], answer: 3, explain: '三步内容。' },
          { stem: '判断主体是：', options: ['本领域普通技术人员', '法官', '消费者', '审查员个人'], answer: 0, explain: '拟制主体。' },
          { stem: '技术启示可能来自：', options: ['对比文件、公知常识、需求', '市场销量', '广告', '企业规模'], answer: 0, explain: '启示来源。' }
        ],
        doc: {
          lead: '这一章讲创造性。',
          sections: [
            { id: 'steps', title: '三步法', html: `<ol><li>最接近现有技术</li><li>区别特征与实际解决的技术问题</li><li>是否显而易见（技术启示）</li></ol>` },
            { id: 'secondary', title: '辅助因素', html: `<p>意外效果、商业成功、长期需求——可佐证创造性。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '申请与审查程序',
        brief: '申请文件、初审、公布、实审、授权。',
        q: [
          { stem: '发明专利申请的公布通常在：', options: ['申请日起 18 个月', '授权后', '申请日', '实审后'], answer: 0, explain: '早期公布。' },
          { stem: '实质审查请求的期限是：', options: ['申请日起 3 年内', '1 年', '5 年', '授权前任何时间'], answer: 0, explain: '逾期视为撤回。' },
          { stem: '优先权期限（发明）是：', options: ['12 个月', '6 个月', '18 个月', '30 个月'], answer: 0, explain: '巴黎公约。' }
        ],
        doc: {
          lead: '这一章讲流程。',
          sections: [
            { id: 'flow', title: '流程', html: `<p>申请 → 受理 → 初审 → 公布（18 个月）→ 实审 → 授权。</p>` },
            { id: 'terms', title: '关键期限', html: `<p>实审请求 3 年；优先权 12 个月（外观 6 个月）；年费逐年缴。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '权利要求解释',
        brief: '以权利要求为准，说明书解释，禁止反悔。',
        q: [
          { stem: '权利要求解释的首要依据是：', options: ['权利要求的文字含义', '说明书摘要', '附图颜色', '审查员意见'], answer: 0, explain: '文义。' },
          { stem: '禁止反悔原则的作用是：', options: ['限制专利权人在诉讼中反悔审查中的限缩', '禁止上诉', '禁止无效', '禁止修改'], answer: 0, explain: 'estoppel。' },
          { stem: '捐献原则指：', options: ['说明书记载但未写入权利要求的方案视为捐给公众', '捐赠专利', '免费许可', '放弃申请'], answer: 0, explain: 'dedication。' }
        ],
        doc: {
          lead: '这一章讲解释规则。',
          sections: [
            { id: 'rules', title: '三规则', html: `<p>文义优先；说明书与附图解释；禁止反悔与捐献原则限缩。</p>` },
            { id: 'use', title: '意义', html: `<p>决定保护范围宽窄，直接影响侵权判定。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '侵权判定与等同',
        brief: '全面覆盖 + 等同原则。',
        q: [
          { stem: '全面覆盖原则要求：', options: ['被诉技术包含权利要求全部技术特征', '包含部分特征', '只要相似', '只要用途相同'], answer: 0, explain: '全部特征。' },
          { stem: '等同的"三基本"是：', options: ['手段、功能、效果基本相同', '价格、品牌、渠道', '时间、地点、人物', '形式、内容、风格'], answer: 0, explain: '等同标准。' },
          { stem: '等同的时间点是：', options: ['侵权行为发生时', '申请日', '授权日', '起诉日'], answer: 0, explain: '侵权时。' }
        ],
        doc: {
          lead: '这一章讲判定。',
          sections: [
            { id: 'literal', title: '相同侵权', html: `<p>全面覆盖：被诉方案包含权利要求记载的全部技术特征。</p>` },
            { id: 'equivalent', title: '等同侵权', html: `<p>手段、功能、效果基本相同且无需创造性劳动即可联想；受禁止反悔限制。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '抗辩事由',
        brief: '现有技术、权利用尽、先用权、临时过境。',
        q: [
          { stem: '现有技术抗辩的条件是：', options: ['被诉技术属于申请日前的现有技术', '专利无效', '被告善意', '原告放弃'], answer: 0, explain: '不侵权抗辩。' },
          { stem: '权利用尽指：', options: ['专利产品首次售出后他人可自由使用转售', '专利过期', '放弃专利', '许可终止'], answer: 0, explain: 'exhaustion。' },
          { stem: '先用权要求：', options: ['申请日前已制造使用或做好准备，且仅在原有范围', '任何使用', '授权后使用', '进口'], answer: 0, explain: '限定范围。' }
        ],
        doc: {
          lead: '这一章讲"不侵权的理由"。',
          sections: [
            { id: 'defenses', title: '五类', html: `<ul><li>不落入范围</li><li>现有技术/设计</li><li>权利用尽</li><li>先用权</li><li>临时过境与科研例外</li></ul>` },
            { id: 'burden', title: '举证', html: `<p>抗辩事由由被告举证；现有技术抗辩需具体比对。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '无效宣告',
        brief: '授权不等于有效：任何人均可挑战。',
        q: [
          { stem: '无效宣告的请求人是：', options: ['任何单位或个人', '只有权利人', '只有竞争对手', '只有行政机关'], answer: 0, explain: '公众监督。' },
          { stem: '无效理由不包括：', options: ['缺乏新颖性', '权利要求不清楚', '说明书公开不充分', '市场表现不好'], answer: 3, explain: '法定理由。' },
          { stem: '无效宣告决定的救济是：', options: ['向知产法院起诉', '上诉到最高法', '复议', '仲裁'], answer: 0, explain: '行政诉讼。' }
        ],
        doc: {
          lead: '这一章讲无效程序。',
          sections: [
            { id: 'grounds', title: '理由', html: `<p>不符合三性、客体、充分公开、权利要求清楚、修改超范围。</p>` },
            { id: 'effect', title: '效力', html: `<p>宣告无效视为自始不存在；部分无效则维持其余部分。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '期限、年费与终止',
        brief: '保护期与维持成本。',
        q: [
          { stem: '发明专利保护期是：', options: ['20 年（自申请日）', '10 年', '15 年', '50 年'], answer: 0, explain: '自申请日。' },
          { stem: '未缴年费的后果是：', options: ['专利权终止', '罚款', '无效', '自动续期'], answer: 0, explain: '终止。' },
          { stem: '专利权终止后：', options: ['技术进入公有领域', '仍可维权', '可恢复', '自动续展'], answer: 0, explain: '公有领域。' }
        ],
        doc: {
          lead: '这一章讲时间与维持。',
          sections: [
            { id: 'term', title: '期限', html: `<p>发明 20 年、实用新型 10 年、外观设计 15 年，自申请日起算。</p>` },
            { id: 'maintain', title: '维持', html: `<p>年费逐年缴；滞纳期与恢复程序；终止后不可恢复（除法定情形）。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '国际申请',
        brief: '巴黎公约与 PCT 两条路。',
        q: [
          { stem: 'PCT 国际申请进入国家阶段的期限是：', options: ['优先权日起 30 个月', '12 个月', '18 个月', '36 个月'], answer: 0, explain: '30 个月。' },
          { stem: '巴黎公约优先权（发明）是：', options: ['12 个月', '6 个月', '18 个月', '30 个月'], answer: 0, explain: '12 个月。' },
          { stem: 'PCT 的主要优势是：', options: ['一份申请、国际检索、延迟进入各国', '全球自动授权', '免翻译', '免费用'], answer: 0, explain: '程序便利。' }
        ],
        doc: {
          lead: '这一章讲两条路径。',
          sections: [
            { id: 'paris', title: '巴黎公约', html: `<p>优先权 12/6 个月；逐国申请、逐国审查。</p>` },
            { id: 'pct', title: 'PCT', html: `<p>国际阶段 + 国家阶段；30 个月内进入，节省前期成本。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '专利与标准',
        brief: '标准必要专利：承诺、许可与禁令。',
        q: [
          { stem: '标准必要专利的权利人通常承诺：', options: ['FRAND 许可', '免费许可', '拒绝许可', '独家许可'], answer: 0, explain: '公平合理无歧视。' },
          { stem: 'SEP 许可谈判中，禁令救济通常：', options: ['受到限制（善意被许可人）', '随时可申请', '不可能', '自动获得'], answer: 0, explain: '反垄断考量。' },
          { stem: '专利池的合法性取决于：', options: ['是否促进竞争与便利许可', '规模大小', '成员数量', '收费标准'], answer: 0, explain: '竞争分析。' }
        ],
        doc: {
          lead: '这一章讲标准与专利的交叉。',
          sections: [
            { id: 'seps', title: 'SEP', html: `<p>纳入标准前披露；FRAND 承诺；善意谈判义务。</p>` },
            { id: 'pool', title: '专利池', html: `<p>打包许可降低交易成本，但可能构成横向垄断。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '复习',
        brief: '三性—申请—范围—侵权—无效，一条链。',
        q: [
          { stem: '专利法的五个环节是：', options: ['三性、申请、范围、侵权、无效', '原告、被告、法院、证据、判决', '国内、国外、PCT、巴黎、TRIPS', '发明、实用新型、外观、商标、著作权'], answer: 0, explain: '主线。' },
          { stem: '最易错的是：', options: ['新颖性与创造性混淆', '原告与被告', '一审与二审', '国内与国外'], answer: 0, explain: '概念。' },
          { stem: '案例题先判断：', options: ['是否落入保护范围', '赔偿数额', '管辖', '时效'], answer: 0, explain: '顺序。' }
        ],
        doc: {
          lead: '这一章收成一条链。',
          sections: [
            { id: 'chain', title: '五环', html: `<ol><li>客体与三性</li><li>申请与审查</li><li>权利要求的范围</li><li>侵权判定与抗辩</li><li>无效与期限</li></ol>` },
            { id: 'tip', title: '提示', html: `<p>先看权利要求，再看被诉方案，最后谈抗辩。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      }
    ]
  },

  /* ---------- 5 商标法：3 → 15 ---------- */
  {
    chapters: [
      {
        title: '注册条件',
        brief: '显著性 + 合法性 + 在先性。',
        q: [
          { stem: '商标注册的实质条件是：', options: ['显著性 + 不违反禁用条款 + 不侵犯在先权利', '美观', '便宜', '有名'], answer: 0, explain: '三条件。' },
          { stem: '三维标志要获得注册需：', options: ['具有显著性且非功能性', '任何形状', '价格低', '有专利'], answer: 0, explain: '限制。' },
          { stem: '声音商标：', options: ['可注册（需显著性）', '不可注册', '需专利', '需备案'], answer: 0, explain: '2013 年起可注册。' }
        ],
        doc: {
          lead: '这一章讲门槛。',
          sections: [
            { id: 'sign', title: '显著性', html: `<p>固有显著性与获得显著性；通用名称不可注册。</p>` },
            { id: 'bar', title: '禁用', html: `<p>国家标志、民族歧视、欺骗性、功能性形状。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '显著性的阶梯',
        brief: '臆造 > 任意 > 暗示 > 描述 > 通用。',
        q: [
          { stem: '显著性最强的是：', options: ['臆造商标', '描述性商标', '通用名称', '暗示性商标'], answer: 0, explain: '臆造词。' },
          { stem: '描述性商标获得注册需要证明：', options: ['第二含义', '有专利', '有广告', '有奖项'], answer: 0, explain: '获得显著性。' },
          { stem: '通用名称化的后果是：', options: ['可能被撤销', '自动续展', '扩大保护', '无效'], answer: 0, explain: '如"阿司匹林"。' }
        ],
        doc: {
          lead: '这一章讲强弱。',
          sections: [
            { id: 'ladder', title: '五级', html: `<p>臆造（Kodak）&gt; 任意（Apple 用于电脑）&gt; 暗示（微软）&gt; 描述 &gt; 通用。</p>` },
            { id: 'loss', title: '退化', html: `<p>使用不当会成为通用名称，导致撤销风险。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '近似判断',
        brief: '音、形、义 + 整体比对。',
        q: [
          { stem: '商标近似判断的方法通常是：', options: ['隔离比对、整体与要部结合', '逐字比对唯一', '看价格', '看包装'], answer: 0, explain: '综合判断。' },
          { stem: '"呼叫近似"指的是：', options: ['读音相近', '含义相近', '字形相近', '颜色相近'], answer: 0, explain: '音近。' },
          { stem: '外文商标与中文商标的近似判断会考虑：', options: ['呼叫与含义的对应', '字数', '字体', '大小'], answer: 0, explain: '综合。' }
        ],
        doc: {
          lead: '这一章讲"像不像"。',
          sections: [
            { id: 'method', title: '方法', html: `<p>音、形、义；整体观察 + 要部比对；隔离比对；相关公众注意程度。</p>` },
            { id: 'use', title: '适用', html: `<p>近似 + 类似商品 + 混淆可能，三者结合。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '异议与无效',
        brief: '注册前后两道关。',
        q: [
          { stem: '商标异议的期限是：', options: ['初步审定公告之日起 3 个月内', '1 年', '5 年', '无期限'], answer: 0, explain: '异议期。' },
          { stem: '以欺骗手段取得注册的，可以：', options: ['请求宣告无效', '仅撤销', '仅罚款', '续展'], answer: 0, explain: '无效事由。' },
          { stem: '无效宣告的溯及力：', options: ['视为自始不存在', '从宣告日起', '不影响过去', '仅未来'], answer: 0, explain: '自始无效。' }
        ],
        doc: {
          lead: '这一章讲两道关。',
          sections: [
            { id: 'opposition', title: '异议', html: `<p>公告 3 个月内提出；理由为违反禁用条款或损害在先权利。</p>` },
            { id: 'invalidity', title: '无效', html: `<p>欺骗手段、损害在先权利、抢注；自始无效。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '撤销与使用义务',
        brief: '注册后不使用，可能被撤销。',
        q: [
          { stem: '"撤三"指：', options: ['连续三年不使用可被撤销', '撤销三次', '三年内撤销', '撤销三个类别'], answer: 0, explain: '使用义务。' },
          { stem: '使用证据的形式包括：', options: ['商品、包装、广告、交易文书', '只有发票', '只有合同', '只有照片'], answer: 0, explain: '多种形式。' },
          { stem: '自行改变注册商标的后果：', options: ['可能被责令改正或撤销', '自动有效', '扩大保护', '无需处理'], answer: 0, explain: '规范使用。' }
        ],
        doc: {
          lead: '这一章讲使用义务。',
          sections: [
            { id: 'use', title: '使用', html: `<p>连续三年不使用可撤销；使用包括在商品、包装、广告、交易文书上的使用。</p>` },
            { id: 'change', title: '变更', html: `<p>自行改变注册事项、成为通用名称，均可撤销。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '驰名商标',
        brief: '个案认定、按需认定、跨类保护。',
        q: [
          { stem: '驰名商标的认定方式是：', options: ['个案认定、被动认定', '永久认定', '自动认定', '企业申请即可'], answer: 0, explain: '按需认定。' },
          { stem: '驰名商标的特殊保护是：', options: ['可跨类保护、防止淡化', '永久有效', '无需使用', '免除撤销'], answer: 0, explain: '跨类。' },
          { stem: '认定驰名商标的考虑因素不包括：', options: ['相关公众知晓程度', '使用持续时间', '宣传投入', '企业注册资本'], answer: 3, explain: '法定因素。' }
        ],
        doc: {
          lead: '这一章讲驰名保护。',
          sections: [
            { id: 'recognition', title: '认定', html: `<p>个案、按需；考虑知晓度、使用时间、宣传、受保护记录。</p>` },
            { id: 'protect', title: '保护', html: `<p>跨类保护、禁止淡化与搭便车；防止"驰名"字样用于宣传。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '商标侵权',
        brief: '相同/近似 + 类似商品 + 混淆可能。',
        q: [
          { stem: '商标侵权的核心是：', options: ['容易导致混淆', '完全相同', '是否盈利', '是否注册'], answer: 0, explain: '混淆。' },
          { stem: '销售侵权商品能证明合法来源的：', options: ['免赔偿但须停止销售', '全免', '加倍赔偿', '刑责'], answer: 0, explain: '合法来源抗辩。' },
          { stem: '将他人商标用作企业字号：', options: ['可能构成不正当竞争', '合法', '必须许可', '无效'], answer: 0, explain: '字号冲突。' }
        ],
        doc: {
          lead: '这一章讲侵权类型。',
          sections: [
            { id: 'types', title: '类型', html: `<p>相同/近似使用、销售侵权商品、伪造标识、反向假冒、将商标用作字号或域名。</p>` },
            { id: 'defense', title: '抗辩', html: `<p>不侵权、合法来源、在先使用、权利用尽、撤销/无效。</p>` }
          ],
          refs: [LAW_REFS.wenshu]
        }
      },
      {
        title: '国际注册',
        brief: '马德里体系：一份申请、多国指定。',
        q: [
          { stem: '马德里体系的特点是：', options: ['一份申请、多国指定、统一管理', '全球自动注册', '免费用', '无需基础申请'], answer: 0, explain: '国际注册。' },
          { stem: '马德里国际注册需要：', options: ['原属国基础申请或注册', '任何国家', '法院判决', '公证'], answer: 0, explain: '基础要求。' },
          { stem: '国际注册的保护期通常为：', options: ['10 年，可续展', '20 年', '永久', '5 年'], answer: 0, explain: '同国内。' }
        ],
        doc: {
          lead: '这一章讲马德里。',
          sections: [
            { id: 'system', title: '体系', html: `<p>原属局提交、国际局注册、指定国审查；中心打击原则。</p>` },
            { id: 'term', title: '期限', html: `<p>10 年，可续展；各国保护标准仍独立。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '商标战略',
        brief: '主商标 + 防御商标 + 联合商标。',
        q: [
          { stem: '防御商标的作用是：', options: ['在关联类别注册防止他人使用', '防止抢注唯一', '提高知名度', '减少费用'], answer: 0, explain: '防御布局。' },
          { stem: '联合商标指：', options: ['注册近似商标形成保护圈', '两家企业共用', '国际注册', '集体商标'], answer: 0, explain: '近似防御。' },
          { stem: '商标监测的意义是：', options: ['及时发现抢注与侵权', '增加收入', '提高知名度', '减少成本'], answer: 0, explain: '预警。' }
        ],
        doc: {
          lead: '这一章讲布局。',
          sections: [
            { id: 'types', title: '类型', html: `<p>主商标、防御商标、联合商标、集体商标、证明商标。</p>` },
            { id: 'ops', title: '运营', html: `<p>监测、异议、许可、品牌授权；避免通用化。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      },
      {
        title: '复习',
        brief: '显著—注册—使用—侵权—保护，一条线。',
        q: [
          { stem: '商标法的主线是：', options: ['显著性、注册、使用、侵权、保护', '申请、审查、授权、无效', '原告、被告、法院、判决', '国内、国际、区域'], answer: 0, explain: '五环。' },
          { stem: '最易混的是：', options: ['撤销与无效', '原告与被告', '一审与二审', '注册与续展'], answer: 0, explain: '概念。' },
          { stem: '案例先判断：', options: ['是否混淆', '赔偿数额', '管辖', '时效'], answer: 0, explain: '核心。' }
        ],
        doc: {
          lead: '这一章收成一条线。',
          sections: [
            { id: 'chain', title: '五环', html: `<ol><li>显著性</li><li>注册与异议</li><li>使用义务</li><li>侵权判定</li><li>驰名与战略</li></ol>` },
            { id: 'tip', title: '提示', html: `<p>先看商标是否近似，再看商品是否类似，最后看混淆。</p>` }
          ],
          refs: [LAW_REFS.lawdb]
        }
      }
    ]
  }
]);
