/* ==========================================================
   C 代码运行器
   优先级：Docker 容器 → 本机 gcc → WSL 里的 gcc
   - 容器：--network none / 内存 128M / 0.5 核 / 进程数限制
   - 本机与 WSL：独立临时目录 + 超时 + 输出上限
   ========================================================== */

const { spawn } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const LIMIT = {
  source: 64 * 1024,
  tests: 10,
  input: 8 * 1024,
  output: 64 * 1024,
  compileMs: 25000,
  runMs: 5000
};

const DOCKER_IMAGE = process.env.GCC_IMAGE || 'gcc:13';

let cache = null;
let cacheAt = 0;

function runCmd(cmd, args, opts) {
  opts = opts || {};
  return new Promise(function (resolve) {
    let child;
    try {
      child = spawn(cmd, args, { windowsHide: true, cwd: opts.cwd });
    } catch (e) {
      resolve({ code: -1, stdout: '', stderr: String(e.message || e) });
      return;
    }
    let stdout = '', stderr = '', settled = false;
    let timer = null;

    function finish(result) {
      if (settled) return;
      settled = true;
      if (timer) clearTimeout(timer);
      resolve(result);
    }

    child.on('error', function (err) {
      finish({ code: -1, stdout: '', stderr: String(err.message || err) });
    });
    if (child.stdout) child.stdout.on('data', function (d) {
      if (stdout.length < LIMIT.output) stdout += d.toString('utf8');
    });
    if (child.stderr) child.stderr.on('data', function (d) {
      if (stderr.length < LIMIT.output) stderr += d.toString('utf8');
    });
    child.on('close', function (code) {
      finish({ code: code == null ? -1 : code, stdout: stdout, stderr: stderr });
    });

    if (opts.timeout) {
      timer = setTimeout(function () {
        try { child.kill('SIGKILL'); } catch (e) { /* 已退出 */ }
        finish({ code: -1, stdout: stdout, stderr: stderr, timedOut: true });
      }, opts.timeout);
    }

    if (opts.stdin != null && child.stdin) {
      child.stdin.end(opts.stdin);
    }
  });
}

async function detect() {
  if (cache && Date.now() - cacheAt < 30000) return cache;

  // 1) Docker：优先，最接近「本地容器 + 独立环境」
  const info = await runCmd('docker', ['info', '--format', '{{.ServerVersion}}'], { timeout: 5000 });
  if (info.code === 0) {
    const img = await runCmd('docker', ['image', 'inspect', DOCKER_IMAGE, '--format', '{{.Id}}'], { timeout: 5000 });
    cache = {
      ready: true,
      engine: 'docker',
      bin: 'docker',
      detail: 'Docker · ' + DOCKER_IMAGE + (img.code === 0 ? '' : '（首次运行会拉取镜像）')
    };
    cacheAt = Date.now();
    return cache;
  }

  // 2) 本机 gcc
  for (const bin of ['gcc', 'cc']) {
    const v = await runCmd(bin, ['--version'], { timeout: 3000 });
    if (v.code === 0 && v.stdout) {
      cache = {
        ready: true,
        engine: 'local',
        bin: bin,
        detail: '本机 ' + v.stdout.split('\n')[0].trim()
      };
      cacheAt = Date.now();
      return cache;
    }
  }

  // 3) WSL 里的 gcc（Windows 开发机的常见情况）
  const wsl = await runCmd('wsl.exe', ['-e', 'bash', '-lc', 'gcc --version | head -1'], { timeout: 8000 });
  if (wsl.code === 0 && wsl.stdout.trim()) {
    cache = {
      ready: true,
      engine: 'wsl',
      bin: 'wsl.exe',
      detail: 'WSL · ' + wsl.stdout.trim()
    };
    cacheAt = Date.now();
    return cache;
  }

  cache = {
    ready: false,
    engine: null,
    detail: '未找到 Docker / gcc / WSL gcc'
  };
  cacheAt = Date.now();
  return cache;
}

function normalize(s) {
  return String(s == null ? '' : s)
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+$/gm, '')
    .trim();
}

function wslPath(dir) {
  // C:\Users\x\AppData\Local\Temp\yinlu-run-123 → /mnt/c/Users/x/...（单引号包裹防空格）
  const p = dir.replace(/\\/g, '/');
  const m = /^([A-Za-z]):\/(.*)$/.exec(p);
  const posix = m ? '/mnt/' + m[1].toLowerCase() + '/' + m[2] : p;
  return "'" + posix.replace(/'/g, "'\\''") + "'";
}

function prepare(source, tests) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'yinlu-run-'));
  fs.writeFileSync(path.join(dir, 'main.c'), source, 'utf8');
  tests.forEach(function (t, i) {
    fs.writeFileSync(path.join(dir, 'in_' + (i + 1) + '.txt'), t.stdin || '', 'utf8');
  });
  return dir;
}

function read(dir, name) {
  try { return fs.readFileSync(path.join(dir, name), 'utf8'); }
  catch (e) { return ''; }
}

async function runDocker(dir, tests) {
  const script =
    'gcc -std=c11 -O2 -o prog main.c 2> compile.err\n' +
    'if [ ! -x ./prog ]; then exit 100; fi\n' +
    'i=1\n' +
    'while [ $i -le ' + tests.length + ' ]; do\n' +
    '  timeout 5 ./prog < in_$i.txt > out_$i.txt 2> err_$i.txt\n' +
    '  echo $? > code_$i.txt\n' +
    '  i=$((i+1))\n' +
    'done\n';
  fs.writeFileSync(path.join(dir, 'run.sh'), script, 'utf8');

  const mounted = dir.replace(/\\/g, '/');
  const r = await runCmd('docker', [
    'run', '--rm', '--network', 'none',
    '--memory', '128m', '--cpus', '0.5', '--pids-limit', '64',
    '-v', mounted + ':/work', '-w', '/work',
    DOCKER_IMAGE, 'sh', 'run.sh'
  ], { timeout: 180000 });

  const compileErr = read(dir, 'compile.err');
  if (r.code === 100 || /error:|undefined reference/i.test(compileErr)) {
    return { compileError: compileErr || r.stderr || '编译失败' };
  }
  if (r.code !== 0 && !fs.existsSync(path.join(dir, 'out_1.txt'))) {
    return { compileError: compileErr || r.stderr || ('容器运行失败（退出码 ' + r.code + '）') };
  }

  const results = tests.map(function (t, i) {
    const n = i + 1;
    const stdout = read(dir, 'out_' + n + '.txt');
    const stderr = read(dir, 'err_' + n + '.txt');
    const code = Number((read(dir, 'code_' + n + '.txt') || '0').trim()) || 0;
    return {
      name: t.name,
      passed: code === 0 && normalize(stdout) === normalize(t.stdout),
      stdout: stdout,
      stderr: stderr,
      exitCode: code,
      expected: t.stdout
    };
  });
  return { results: results };
}

async function runLocal(dir, tests, bin) {
  const exe = process.platform === 'win32' ? 'prog.exe' : './prog';
  const c = await runCmd(bin, ['-std=c11', '-O2', '-o', exe, 'main.c'], {
    cwd: dir, timeout: LIMIT.compileMs
  });
  if (c.code !== 0 || (c.stderr && /error:/.test(c.stderr))) {
    return { compileError: c.stderr || '编译失败（退出码 ' + c.code + '）' };
  }

  const results = [];
  for (const t of tests) {
    const r = await runCmd(path.join(dir, exe), [], {
      cwd: dir, timeout: LIMIT.runMs, stdin: t.stdin || ''
    });
    const code = r.timedOut ? 124 : r.code;
    results.push({
      name: t.name,
      passed: code === 0 && normalize(r.stdout) === normalize(t.stdout),
      stdout: r.stdout,
      stderr: r.stderr,
      exitCode: code,
      expected: t.stdout
    });
  }
  return { results: results };
}

async function runWsl(dir, tests) {
  const d = wslPath(dir);
  const c = await runCmd('wsl.exe', ['-e', 'bash', '-lc',
    'cd ' + d + ' && gcc -std=c11 -O2 -o prog main.c 2> compile.err'
  ], { timeout: LIMIT.compileMs });
  const compileErr = read(dir, 'compile.err');
  if (c.code !== 0 || !fs.existsSync(path.join(dir, 'prog'))) {
    return { compileError: compileErr || c.stderr || '编译失败（退出码 ' + c.code + '）' };
  }

  const results = [];
  for (const t of tests) {
    const r = await runCmd('wsl.exe', ['-e', 'bash', '-lc',
      'cd ' + d + ' && timeout ' + Math.ceil(LIMIT.runMs / 1000) + ' ./prog'
    ], { timeout: LIMIT.runMs + 3000, stdin: t.stdin || '' });
    const code = r.timedOut || r.code === 124 ? 124 : r.code;
    results.push({
      name: t.name,
      passed: code === 0 && normalize(r.stdout) === normalize(t.stdout),
      stdout: r.stdout,
      stderr: r.stderr,
      exitCode: code,
      expected: t.stdout
    });
  }
  return { results: results };
}

async function run(source, tests) {
  if (typeof source !== 'string' || !source.trim()) {
    const err = new Error('代码不能为空'); err.status = 400; throw err;
  }
  if (Buffer.byteLength(source, 'utf8') > LIMIT.source) {
    const err = new Error('代码太长（上限 64KB）'); err.status = 400; throw err;
  }
  const list = Array.isArray(tests) ? tests.slice(0, LIMIT.tests) : [];
  if (!list.length) {
    const err = new Error('缺少测试用例'); err.status = 400; throw err;
  }
  list.forEach(function (t) {
    if (typeof (t.stdin || '') !== 'string' || Buffer.byteLength(t.stdin || '') > LIMIT.input) {
      const err = new Error('测试输入过长'); err.status = 400; throw err;
    }
  });

  const eng = await detect();
  if (!eng.ready) {
    const err = new Error('运行环境未就绪：' + eng.detail);
    err.status = 503;
    throw err;
  }

  const dir = prepare(source, list);
  const t0 = Date.now();
  try {
    let out;
    if (eng.engine === 'docker') out = await runDocker(dir, list);
    else if (eng.engine === 'wsl') out = await runWsl(dir, list);
    else out = await runLocal(dir, list, eng.bin);

    if (out.compileError) {
      return { engine: eng.engine, compileError: String(out.compileError).slice(0, LIMIT.output) };
    }
    out.engine = eng.engine;
    out.ms = Date.now() - t0;
    return out;
  } finally {
    try { fs.rmSync(dir, { recursive: true, force: true }); } catch (e) { /* 忽略清理失败 */ }
  }
}

module.exports = { detect, run, LIMIT };
