---
title: 'Tweens'
order: 61
showToc: true
tocDepth: 3
---

# 公式

http://labs.phaser.io/index.html?dir=tweens

# 概要
Tweenアニメーション全般の例  
また、連続TweenアニメをTimelineと呼ぶ。

# 項目
- Tweenの使い方の具体例:hammer_and_pick:
  - コールバック等
- Checkerboard4
  - 黒いスプライトをタイミングで非表示にする
  - シーン遷移に使える？
- GrobalTimeScale<Badge color="blue">おもしろい</Badge>
  - Tweenアニメの再生速度を一括変更。スロー演出に使えそう
  - スプライトが行ったり来たりするアニメーションはyoyo + flipで実現可能
    - yoyoが必ず必要？演出として使える条件がちょっと厳しいかも…
- ShapeMorph<Badge color="red">難しい</Badge>
  - Phaser.Geomを利用した、スプライトの幾何配列
  - シューティングゲームの敵の移動とかで使う？
- StarCircle
  - Phaser.Geomを利用した、スプライトの幾何配列
  - Phaser.Geomの練習に良さそう

## Timelines
Tween連続アニメーションの例