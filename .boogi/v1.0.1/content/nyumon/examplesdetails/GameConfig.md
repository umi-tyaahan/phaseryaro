---
title: 'Game Config'
order: 22
showToc: true
tocDepth: 3
---

# 公式

http://labs.phaser.io/index.html?dir=game%20config

# 概要
Game全般の設定項目

# 項目

- Game Title / Banner Color / Game Url / Game Version
  - console.logにてゲームタイトル、URL、バージョンを表示する
  - styleの設定可能
  - Hide Banner / Hide Phaser From Banner : console表示を隠す
- custom canvas / Custom Webgl Canvas / Custom Webgl2 Canvas
  - ゲーム画面の縁取り設定
- Game Destroy / Game Destroy With Multi Scenes
  - ゲーム内からの、ゲームのシャットダウンと起動
  - 複数シーン起動中でもシャットダウンは可能
- Game Rng<Badge color="blue">おもしろい</Badge>
  - ゲーム全体のランダムシード値の設定
- Round Pixels
  - テクスチャベースのGameObjectを整数で配置する(小数点を無視する)
  - これやらないとどうなるんだろう？🤔:hammer_and_pick:
- Transparent
  - ゲーム背景を透過。Html内で、ゲームキャンバスがあるdiv要素が透過される
- Pixcel Art Mode<Badge color="blue">おもしろい</Badge>
  - 拡大時のドットの自動補完無し！
- Multiple Game Instance
  - 複数ゲームの起動
- Headless Renderer<Badge color="red">難しい</Badge>
  - 描画レンダラー無し設定
  - どういう時に使うんだろう？🤔:hammer_and_pick: