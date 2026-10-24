/* ==========================================================
   pad-real-db.js · 数据库原理：把补齐的占位关做成真题
   涉及章节：关系数据库基础（关系模型）、SQL（数据定义）
   ========================================================== */
(function () {
  var G = (typeof window !== 'undefined') ? window : this;
  G.REAL_PAD = G.REAL_PAD || {};
  G.REAL_PAD_ALIAS = G.REAL_PAD_ALIAS || {};

  var REF_SQL = { name: 'SQL 标准与教程（W3Schools SQL）', url: 'https://www.w3schools.com/sql/' };
  var REF_MYSQL = { name: 'MySQL 官方参考手册', url: 'https://dev.mysql.com/doc/' };

  function mk(title, brief, q, lead, s1, s2, refs) {
    return {
      title: title, brief: brief, q: q,
      doc: {
        lead: lead,
        sections: [
          { id: 'k1', title: s1.t, html: s1.h },
          { id: 'k2', title: s2.t, html: s2.h }
        ],
        refs: refs || [REF_MYSQL]
      }
    };
  }

  var LIST = [
    mk('第 1 章 · 关系数据库基础：关系模型', '关系术语、码与完整性。', [
      { stem: '在关系模型中，表中的一行称为：', options: ['元组（记录）', '属性', '域', '关系模式'], answer: 0, explain: '一行是一个元组，一列是一个属性；属性的取值范围称域，表结构描述称关系模式。' },
      { stem: '外键（外码）体现的是：', options: ['参照完整性：其值必须取自另一关系的主码值或为空', '实体完整性：主码不能为空', '用户自定义完整性', '与完整性无关'], answer: 0, explain: '三类完整性：实体完整性（主码非空唯一）、参照完整性（外码约束）、用户定义完整性。' },
      { stem: '从关系中选出满足条件的行、并只保留指定列，对应的关系运算是：', options: ['选择（σ）与投影（π）', '仅并运算', '仅笛卡儿积', '仅除运算'], answer: 0, explain: '选择按行筛选，投影按列取舍；连接则按公共属性把两个关系横向拼接。' }
    ], '这一章讲数据怎么组织成表。',
      { t: '基本概念', h: '<ul><li>关系（表）、元组（行）、属性（列）、域、分量、关系模式。</li><li>码：候选码、主码、外码；全码与超码。</li></ul>' },
      { t: '完整性与运算', h: '<ul><li>三类完整性：实体、参照、用户定义。</li><li>基本运算：选择 σ、投影 π、连接 ⋈、并、差、笛卡儿积、除。</li></ul>' },
      [REF_SQL]),

    mk('第 2 章 · SQL：数据定义', 'DDL 语句与约束。', [
      { stem: '下列语句中属于数据定义语言（DDL）的是：', options: ['CREATE TABLE', 'INSERT INTO', 'SELECT', 'UPDATE'], answer: 0, explain: 'DDL 负责定义结构：CREATE、ALTER、DROP；INSERT/UPDATE/DELETE 属 DML，SELECT 属查询。' },
      { stem: '在 CREATE TABLE 中定义主键应使用：', options: ['PRIMARY KEY', 'FOREIGN KEY', 'UNIQUE KEY 即可', 'NOT NULL 即可'], answer: 0, explain: 'PRIMARY KEY 同时保证非空与唯一；NOT NULL 只约束非空，UNIQUE 只保证唯一。' },
      { stem: '删除整张表（结构与数据）应使用：', options: ['DROP TABLE', 'DELETE FROM', 'TRUNCATE TABLE', 'ALTER TABLE'], answer: 0, explain: 'DROP 删除表定义与数据；DELETE 逐行删除数据（可回滚、可带条件）；TRUNCATE 清空数据但保留结构。' }
    ], '这一章开始真正"建库建表"。',
      { t: 'DDL 概览', h: '<ul><li>建表 CREATE TABLE、修改 ALTER TABLE、删除 DROP TABLE。</li><li>删除方式区别：DROP（表结构与数据）、TRUNCATE（清空数据）、DELETE（按条件删行）。</li></ul>' },
      { t: '约束', h: '<ul><li>PRIMARY KEY（非空 + 唯一）、FOREIGN KEY（参照）、UNIQUE、NOT NULL、CHECK、DEFAULT。</li><li>外键约束保证引用有效，防止产生"孤儿"记录。</li></ul>' },
      [REF_MYSQL])
  ];

  function set(list) {
    var byName = {};
    list.forEach(function (it) { byName[it.title] = it; });
    return { list: list, byName: byName };
  }

  G.REAL_PAD['数据库原理'] = set(LIST);
  G.REAL_PAD_ALIAS['数据库系统原理'] = '数据库原理';
  G.REAL_PAD_ALIAS['数据库原理与应用'] = '数据库原理';
  G.REAL_PAD_ALIAS['数据库基础'] = '数据库原理';
})();
