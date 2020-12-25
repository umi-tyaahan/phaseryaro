---
title: 'Timestep'
order: 50
showToc: true
tocDepth: 3
---

# 公式

http://labs.phaser.io/index.html?dir=timestep

# 概要
ゲームループに関わる時間関連の内容。  
シーンのupdateにも関わる。

# 項目
- Delta History / TickerLoop
  - デルタ平滑化に使用される、以前のデルタ値を保持する内部配列(Documentより)
  - 1フレーム描画にかかった時間(ms)？
  - update()も基本的に1フレームごとにコールされる
- Variable Smooth Step(可変スムーズステップ)
  - updateのdelta（以前呼び出しからの経過時間)を使って正確な移動量を調整
  - Phaser.Math.GetSpeed(600,3)は600pixを3secで移動する速度が取れる
- WorldTime
  - updateのtimeはシーン開始からの経過時間が入っている
