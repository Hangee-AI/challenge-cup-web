# -*- coding: utf-8 -*-
r"""把原始素材（任意尺寸 / JPG / 棋盘格底 / 白底 / 已透明）一键转成对齐好的 400x400 图层。

用法：
    python tools/pet_build_layers.py                # 读 assets/pet2，写 assets/pet4-aligned
    python tools/pet_build_layers.py <src> <out>

规则（与 docs/screens/tpl-*.png 一致）：
    本体   高 366，底边贴 y=396，水平居中
    眼镜   宽 0.56*bodyW，垂直中心 = bodyTop + 0.24*bodyH
    围巾   宽 0.66*bodyW，top      = bodyTop + 0.33*bodyH
    外套   宽 0.98*bodyW，top      = bodyTop + 0.40*bodyH
"""
import os, sys, glob
import numpy as np
from PIL import Image

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC  = os.path.abspath(sys.argv[1]) if len(sys.argv) > 1 else os.path.join(ROOT, "assets", "pet2")
DST  = os.path.abspath(sys.argv[2]) if len(sys.argv) > 2 else os.path.join(ROOT, "assets", "pet4-aligned")
S, BODY_H, BODY_BOTTOM = 400, 366, 396

CATS = ["body", "glasses", "scarf", "jacket"]
os.makedirs(DST, exist_ok=True)
for c in CATS:
    os.makedirs(os.path.join(DST, c), exist_ok=True)

def key_image(path):
    """返回按内容裁紧的 RGBA。支持真透明 PNG、白底、烤入的棋盘格底。"""
    im = Image.open(path)
    if im.mode in ("RGBA", "LA") and np.asarray(im.convert("RGBA"))[:, :, 3].min() < 250:
        rgba = im.convert("RGBA")                      # 已经是真透明，直接用
        a = np.asarray(rgba)[:, :, 3]
        fg = a > 8
    else:
        rgb = im.convert("RGB")
        arr = np.asarray(rgb).astype(np.int16)
        sat = arr.max(axis=2) - arr.min(axis=2)
        luma = arr.mean(axis=2)
        fg = ~((sat <= 4) & (luma >= 222))             # 棋盘格 / 纯白底
        h, w = fg.shape
        fg[int(h * 0.87):, int(w * 0.72):] = False     # 右下水印区
        fg[:4, :] = fg[-4:, :] = False
        fg[:, :4] = fg[:, -4:] = False
        rgba = Image.fromarray(np.dstack([arr.astype(np.uint8), np.where(fg, 255, 0).astype(np.uint8)]), "RGBA")

    ys, xs = np.where(fg)
    if len(xs) == 0:
        return None
    return rgba.crop((int(xs.min()), int(ys.min()), int(xs.max()) + 1, int(ys.max()) + 1))

def fit(im, w=None, h=None):
    if w:  r = w / im.width
    else:  r = h / im.height
    return im.resize((max(1, int(im.width * r)), max(1, int(im.height * r))), Image.LANCZOS)

def place(im, cat, body_w):
    canvas = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    b_top = BODY_BOTTOM - BODY_H
    if cat == "body":
        # 四只熊宽高比不同（0.80~1.37）：统一"底边贴 396、水平居中、不超出 380x366 框"
        im2 = fit(im, h=BODY_H)
        if im2.width > 380:
            im2 = fit(im, w=380)
        canvas.alpha_composite(im2, ((S - im2.width) // 2, BODY_BOTTOM - im2.height))
        return canvas
    if cat == "glasses":
        im2 = fit(im, w=int(body_w * 0.56))
        canvas.alpha_composite(im2, ((S - im2.width) // 2, b_top + int(BODY_H * 0.24) - im2.height // 2))
        return canvas
    if cat == "scarf":
        im2 = fit(im, w=int(body_w * 0.66))
        canvas.alpha_composite(im2, ((S - im2.width) // 2, b_top + int(BODY_H * 0.33)))
        return canvas
    im2 = fit(im, w=int(body_w * 0.98))
    canvas.alpha_composite(im2, ((S - im2.width) // 2, b_top + int(BODY_H * 0.40)))
    return canvas

# 先用第一只熊算 bodyW
bodies = sorted(glob.glob(os.path.join(SRC, "body-*.png")))
if not bodies:
    sys.exit("找不到 body-*.png（素材根目录：%s）" % SRC)
b0 = key_image(bodies[0]); b0 = fit(b0, h=BODY_H)
if b0.width > 380: b0 = fit(b0, w=380)
body_w = b0.width

MAP = {"body": "body-*.png", "glasses": "gl-*.png", "scarf": "sc-*.png", "jacket": "jk-*.png"}
count = 0
for cat, pat in MAP.items():
    for f in sorted(glob.glob(os.path.join(SRC, pat))):
        name = os.path.basename(f)
        if name.startswith("heads"): continue
        im = key_image(f)
        if im is None:
            print("  [跳过] %s（抠不出内容）" % name); continue
        out = place(im, cat, body_w)
        out.save(os.path.join(DST, cat, name))
        print("  %-8s %-24s -> %s" % (cat, name, os.path.join(dst_rel := os.path.relpath(DST, ROOT), cat, name)))
        count += 1
print("完成：%d 个图层 -> %s（bodyW=%d）" % (count, os.path.relpath(DST, ROOT), body_w))