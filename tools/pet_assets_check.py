# -*- coding: utf-8 -*-
r"""pet 四图层素材校验 + 预合成预览
用法：python tools/pet_assets_check.py [素材根目录，默认 assets/pet4]
读取 assets\pet4\<category>\*.png（400x400 固定画布），校验后合成预览到 docs\screens\preview-pet4.png
"""
import os, sys, glob
try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass
import numpy as np
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, "assets", "pet4")
OUT  = os.path.join(ROOT, "docs", "screens")
S = 400

# 各类素材允许的外框（超出 = 位置跑偏）
LIMITS = {
  "body":    (5, 5, 395, 399),
  "glasses": (50, 30, 350, 260),
  "scarf":   (50, 110, 350, 399),
  "jacket":  (10, 140, 390, 399),
}
ORDER = ["body", "scarf", "jacket", "glasses"]      # 从下到上

def load(path):
    im = Image.open(path)
    if im.mode not in ("RGBA", "LA"):
        im = im.convert("RGBA")
    return im

def bbox_of(im):
    a = np.asarray(im)
    if a.shape[2] == 4:
        fg = a[:, :, 3] > 8
    else:
        rgb = a[:, :, :3].astype(np.int16)
        fg = ~((rgb.max(axis=2)-rgb.min(axis=2) <= 4) & (rgb.mean(axis=2) >= 240))
    if not fg.any(): return None
    ys, xs = np.where(fg)
    return (int(xs.min()), int(ys.min()), int(xs.max()), int(ys.max()))

rows, warns, ok = [], [], True
for cat in ORDER:
    files = sorted(glob.glob(os.path.join(BASE, cat, "*.png")))
    if not files:
        warns.append("[缺] %s/ 目录没有 png" % cat); ok = False; continue
    for f in files:
        name = os.path.basename(f)
        im = load(f)
        msg = []
        if im.size != (S, S):
            msg.append("尺寸 %dx%d，应为 400x400" % im.size)
        has_alpha = ("A" in im.getbands()) and np.asarray(im)[:, :, 3].min() < 250
        if not has_alpha:
            msg.append("没有透明通道（导成了 JPG/白底？）")
        bb = bbox_of(im)
        if bb:
            lim = LIMITS[cat]
            over = bb[0] < lim[0] or bb[1] < lim[1] or bb[2] > lim[2] or bb[3] > lim[3]
            if over:
                msg.append("内容超出该类建议框 bbox=%s 建议=%s" % (bb, lim))
        status = "OK" if not msg else "!! " + " / ".join(msg)
        if msg: ok = False
        rows.append((cat, name, im.size, bb, status))

print("=" * 78)
for cat, name, size, bb, status in rows:
    print("%-8s %-26s %-9s %-22s %s" % (cat, name, "%dx%d" % size, str(bb), status))
print("=" * 78)
for w in warns: print(w)

# 预览：取每个分区第一张
picks = {}
for cat in ORDER:
    files = sorted(glob.glob(os.path.join(BASE, cat, "*.png")))
    if files: picks[cat] = files[0]
if "body" in picks:
    canvas = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    for cat in ORDER:
        if cat in picks:
            canvas.alpha_composite(load(picks[cat]).convert("RGBA").resize((S, S)))
    bg = Image.new("RGB", (S, S), (246, 247, 251))
    bg.paste(canvas, (0, 0), canvas)
    os.makedirs(OUT, exist_ok=True)
    out = os.path.join(OUT, "preview-pet4.png")
    bg.save(out)
    print("预览已生成：", out)
    print("（用的组合：%s）" % " + ".join(os.path.basename(picks[c]) for c in ORDER if c in picks))
else:
    print("还没有 body，跳过预览")

sys.exit(0 if ok else 1)