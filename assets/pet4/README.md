# assets/pet4 —— 小熊四图层素材（400×400 固定画布）

这四个目录是**唯一**的素材入口。放进去的文件名必须和下面完全一致，
后缀统一 `.png`，画布统一 **400×400**，必须**带透明通道**（别用 JPG、别用棋盘格）。

图层叠放顺序（从下到上，网页里就是这样叠的）：

```
body(本体)  →  scarf(围巾)  →  jacket(外套)  →  glasses(眼镜)
```

## 文件清单

| 目录 | 文件名 | 件数 |
|---|---|---|
| `body/` | `body-white.png` `body-black.png` `body-brown.png` `body-pink.png` | 4 |
| `glasses/` | `gl-none.png`(可空) `gl-brown.png` `gl-purple.png` `gl-blackgoggle.png` `gl-whitegoggle.png` `gl-blacksq.png` `gl-whitesq.png` | 6~7 |
| `scarf/` | `sc-none.png`(可空) `sc-black.png` `sc-white.png` `sc-check.png` `sc-tip.png` `sc-neon.png` | 5~6 |
| `jacket/` | `jk-none.png`(可空) `jk-varsity.png` `jk-denim.png` `jk-leather.png` `jk-cardigan.png` | 4~5 |

> `*-none.png` 不用做，代码里"不戴/不围/不穿"是直接隐藏该图层。

## 每一类该画在哪（400×400 坐标系，左上角为 0,0）

参考 `docs/screens/tpl-body.png`、`tpl-glasses.png`、`tpl-scarf.png`、`tpl-jacket.png` 四张图，
灰底熊的轮廓只作参考，**不要把它画进去**。

| 类别 | 内容必须落在 | 说明 |
|---|---|---|
| body | 整只熊，底边贴 y≈396，宽约 360（x 20–380） | 耳朵/头/眼/鼻/嘴/手/脚都要有，居中对称 |
| glasses | 宽约 208（x 96–304），高约 76（y 120–196） | **只画眼镜**，不要画脸/头/耳 |
| scarf | 宽约 228（x 86–314），y 180–300 | **只画围巾**，不要画脖子/身体 |
| jacket | 宽约 340（x 30–370），y 200–392 | **只画敞开的外套**，里面不要画任何躯干/人 |

## 出图提示词模板（豆包等都能用）

```
以我给的 400x400 模板图为参考，保持完全相同的视角、缩放、画布尺寸(400x400)。
只生成【<类别>】，放在模板里对应框的位置：
- 眼镜：x 96-304, y 120-196（只画眼镜，不画脸）
- 围巾：x 86-314, y 180-300（只画围巾，不画脖子）
- 外套：x 30-370, y 200-392（只画敞开的外套，里面不要画人或躯干）
- 本体：整只小熊，底边贴 y=396，宽约 360
透明背景，导出 PNG。
```

## 校验（放完文件跑这一条）

```bash
python tools/pet_assets_check.py
```

它会逐张检查：尺寸是不是 400×400、有没有透明通道、内容有没有超出该类允许框，
最后用每个目录的第一张合成一张预览：`docs/screens/preview-pet4.png`

全部 `OK` 就说明素材可用了。