/* ==========================================================
   REST API 路由 —— 引路（后端版）
   GET  /api/health                          存活检查
   GET  /api/categories                      学科门类列表
   GET  /api/majors?cat=<id>                 专业列表（可按门类筛选）
   GET  /api/majors/:id                      专业详情 + 完整路径（关卡已剥离答案）
   GET  /api/majors/:id/resources             该专业各模块的 csdiy 推荐课程
   GET  /api/levels/:id                      关卡详情（已剥离 answer/explain）
   POST /api/levels/:id/check                判题 {questionIndex, choice}
   ========================================================== */

const express = require('express');
const store = require('../store');

const router = express.Router();

router.get('/health', (req, res) => { res.json({ ok: true }); });

router.get('/categories', (req, res) => {
  const cats = ['philosophy','economics','law','education','literature','history',
                'science','engineering','agriculture','medicine','management','art','inter']
    .map(id => {
      const c = store.getCategory(id);
      return c ? { ...c, majorCount: store.majorsOfCategory(id).length } : null;
    }).filter(Boolean);
  res.json(cats);
});

router.get('/majors', (req, res) => {
  const cat = req.query.cat;
  let list;
  if (cat) {
    list = store.majorsOfCategory(cat);
  } else {
    const seen = new Set();
    list = [];
    ['philosophy','economics','law','education','literature','history',
     'science','engineering','agriculture','medicine','management','art','inter'].forEach(catId => {
      store.majorsOfCategory(catId).forEach(m => {
        if (!seen.has(m.id)) { seen.add(m.id); list.push(m); }
      });
    });
  }
  res.json(list);
});

router.get('/majors/:id', (req, res) => {
  const path = store.getPath(req.params.id);
  if (!path) return res.status(404).json({ error: 'major not found' });

  // 关卡剥离 answer/explain
  const sanitized = { major: path.major, stages: [] };
  path.stages.forEach(s => {
    const stage = { title: s.title, goal: s.goal, modules: [] };
    s.modules.forEach(m => {
      const levels = m.levels.map(lv => store.stripAnswer(lv));
      stage.modules.push({ id: m.id, name: m.name, levels: levels });
    });
    sanitized.stages.push(stage);
  });
  res.json(sanitized);
});

router.get('/majors/:id/resources', (req, res) => {
  const major = store.getMajor(req.params.id);
  if (!major) return res.status(404).json({ error: 'major not found' });
  // 目前仅计算机专业模块挂有 csdiy 推荐课程
  res.json(store.CS_MODULE_RESOURCES);
});

router.get('/levels/:id', (req, res) => {
  // 先遍历所有能生成的专业路径找关卡
  const majors = store.getPath('engineering-计算机科学与技术')
    ? [store.getPath('engineering-计算机科学与技术')] : [];
  let found = null;
  majors.forEach(path => {
    if (!path) return;
    path.stages.forEach(s => { s.modules.forEach(m => {
      m.levels.forEach(lv => {
        if (lv.id === req.params.id) found = lv;
      });
    }); });
  });
  if (!found) return res.status(404).json({ error: 'level not found' });
  res.json(store.stripAnswer(found));
});

router.post('/levels/:id/check', (req, res) => {
  const body = req.body || {};
  const majors = store.getPath('engineering-计算机科学与技术')
    ? [store.getPath('engineering-计算机科学与技术')] : [];
  let found = null;
  majors.forEach(path => {
    if (!path) return;
    path.stages.forEach(s => { s.modules.forEach(m => {
      m.levels.forEach(lv => {
        if (lv.id === req.params.id) found = lv;
      });
    }); });
  });
  if (!found || !found.questions) return res.status(404).json({ error: 'level or question not found' });
  const q = found.questions[body.questionIndex];
  if (!q) return res.status(404).json({ error: 'question index out of range' });
  res.json({
    correct: body.choice === q.answer,
    answer: q.answer,
    explain: q.explain
  });
});

module.exports = router;
