---
title: 'Depth Sorting'
order: 9
showToc: true
tocDepth: 3
---

# 公式

http://labs.phaser.io/index.html?dir=depth%20sorting

# 概要
GameObjectの画面上の前後関係

# 項目
- Zindex<Badge color="lightgreen">入門用</Badge>
  - 前後関係設定の基本
- Breing To Top
  - 追加されたGameObjectはscene.childrenの配列データとして格納されている
  - Bring To Topで最前面に配置される
  - このデモでは再背面にある画像が最前面に配置される
- Get Top Object
  - GameObjectの前後関係のデータの取得
- Isometric Blocks/ Isometric Map<Badge color="red">難しい</Badge>
  - Phaser3.5で追加された斜め見下ろしマップの構築方法
- 3D Depth Sort<Badge color="red">難しい</Badge>
  - 3Dデータの頂点を元にしたDepthSort

以下は動かなかった:hammer_and_pick:
- DepthSortding
