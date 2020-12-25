---
title: 'Pools'
order: 41
showToc: true
tocDepth: 3
---

# 公式

http://labs.phaser.io/index.html?dir=pools

# 概要

Groupを利用したGameObjectの再利用  
省メモリに貢献する？🤔:hammer_and_pick:

# 項目
- Create Pool<Badge color="lightgreen">入門用</Badge>
  - Groupを利用したGameObjectのプール
  - GameObject生成数制限の実装
- Pool Using A Custom Class / Bullets<Badge color="blue">おもしろい</Badge>
  - シューティングゲームの弾の実装例。参考になる！
  - 弾の移動はrunChildUpdateでカスタムクラス内のUpdateを呼び出して実現
  - Groupを再利用できる。
  - 弾の生存は画面外判定で実行。
- Max Size
  - 上のサンプルの発射弾幕の回数制限版
  - 再装填できない
- Multi Pools / Seeded Pool
  - 上のサンプルの発射弾幕の回数制限版
  - 弾に生存時間を設定して、再利用可能にしている
  - Seeded の意味が分からん🤔:hammer_and_pick: