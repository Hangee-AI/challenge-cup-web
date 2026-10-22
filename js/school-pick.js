/* ============================================================
 * 学校搜索选择（js/school-pick.js）
 * ------------------------------------------------------------
 * 把注册表单里原来的 <select> 换成可搜索的输入框：
 *   输入简称或校名 → 下拉列表 → 点选后写入隐藏字段 #sidPrefix
 * 账号前缀最终仍由 cloud.js / app.js 读 #sidPrefix.value，逻辑不变。
 * ============================================================ */
(function () {
  'use strict';

  var LIST = (window.UNIVERSITIES || []).slice();
  var $ = function (id) { return document.getElementById(id); };

  var input, menu, hidden, picked;
  var items = [];        // 当前下拉里的候选
  var active = -1;       // 键盘高亮下标
  var open = false;

  function norm(s) { return String(s || '').trim().toUpperCase(); }

  function find(code) {
    code = norm(code);
    for (var i = 0; i < LIST.length; i++) {
      if (norm(LIST[i][0]) === code) return LIST[i];
    }
    return null;
  }

  function labelOf(code) {
    var hit = find(code);
    return hit ? (hit[0] + ' · ' + hit[1]) : (code || '');
  }

  function filter(q) {
    q = norm(q);
    if (!q) return LIST.slice(0, 50);
    var starts = [], contains = [];
    LIST.forEach(function (u) {
      var code = norm(u[0]), name = u[1];
      if (code.indexOf(q) === 0) starts.push(u);
      else if (code.indexOf(q) > -1 || name.indexOf(q) > -1) contains.push(u);
    });
    return starts.concat(contains).slice(0, 50);
  }

  function render(q) {
    items = filter(q);
    active = items.length ? 0 : -1;
    menu.innerHTML = '';

    if (!items.length) {
      var tip = document.createElement('div');
      tip.className = 'school-empty';
      tip.textContent = '没找到？可以把简称直接打完整（2–10 位字母），或换个关键词试试。';
      menu.appendChild(tip);
    } else {
      items.forEach(function (u, i) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'school-opt' + (i === active ? ' is-active' : '');
        b.setAttribute('data-code', u[0]);
        b.innerHTML = '<b>' + u[0] + '</b><span>' + u[1] + '</span>';
        b.addEventListener('mousedown', function (e) {
          e.preventDefault();
          choose(u[0]);
        });
        menu.appendChild(b);
      });
    }

    // 输入的是合法简称但不在表里 → 允许自定义
    var raw = String(input.value || '').trim();
    if (/^[A-Za-z][A-Za-z0-9.\-]{1,9}$/.test(raw) && !find(raw)) {
      var custom = document.createElement('button');
      custom.type = 'button';
      custom.className = 'school-opt school-opt-custom';
      custom.innerHTML = '<b>' + raw.toUpperCase() + '</b><span>使用这个自定义简称</span>';
      custom.addEventListener('mousedown', function (e) {
        e.preventDefault();
        choose(raw.toUpperCase());
      });
      menu.appendChild(custom);
    }

    menu.hidden = false;
    open = true;
  }

  function close() {
    menu.hidden = true;
    open = false;
    active = -1;
  }

  function paintPicked(code) {
    picked.textContent = '已选：' + labelOf(code);
    picked.classList.toggle('is-empty', !code);
  }

  function choose(code) {
    hidden.value = code;
    var hit = find(code);
    input.value = hit ? (hit[0] + ' · ' + hit[1]) : code;
    paintPicked(code);
    close();
    input.blur();
  }

  function highlight(delta) {
    if (!items.length) return;
    var opts = menu.querySelectorAll('.school-opt');
    if (!opts.length) return;
    active = (active + delta + items.length) % items.length;
    for (var i = 0; i < opts.length; i++) {
      opts[i].classList.toggle('is-active', i === active && i < items.length);
    }
    if (opts[active]) opts[active].scrollIntoView({ block: 'nearest' });
  }

  function init() {
    input = $('schoolSearch');
    menu = $('schoolMenu');
    hidden = $('sidPrefix');
    picked = $('schoolPicked');
    if (!input || !menu || !hidden) return;

    // 回填已有账号前缀
    var initCode = hidden.value || 'NCU';
    var hit = find(initCode);
    input.value = hit ? (hit[0] + ' · ' + hit[1]) : initCode;
    paintPicked(initCode);

    input.addEventListener('focus', function () {
      input.select();
      render('');
    });

    input.addEventListener('input', function () {
      render(input.value);
    });

    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); if (!open) render(input.value); else highlight(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); highlight(-1); }
      else if (e.key === 'Enter') {
        if (open && items[active]) { e.preventDefault(); choose(items[active][0]); }
        else {
          var raw = norm(input.value).split('·')[0].trim();
          if (raw) { e.preventDefault(); choose(raw); }
        }
      } else if (e.key === 'Escape') { close(); }
    });

    input.addEventListener('blur', function () {
      setTimeout(function () {
        if (!open) return;
        close();
        // 手动输入了没点选的简称：若是表内学校或合法简称，直接用
        var raw = norm(input.value).split('·')[0].trim();
        if (!raw) { input.value = labelOf(hidden.value); return; }
        if (find(raw) || /^[A-Z][A-Z0-9.\-]{1,9}$/.test(raw)) choose(raw);
        else input.value = labelOf(hidden.value);
      }, 120);
    });
  }

  window.SchoolPick = {
    set: function (code) {
      if (!hidden) return;
      choose(code);
    },
    get: function () { return hidden ? hidden.value : ''; },
    find: find,
    labelOf: labelOf
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
