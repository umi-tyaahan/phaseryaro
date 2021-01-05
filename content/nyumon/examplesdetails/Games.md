---
title: "Games"
order: 24
showToc: true
tocDepth: 3
---

# 概要

Phaser で作られた実際のゲームサンプル

# 公式

http://labs.phaser.io/index.html?dir=games

# 項目

## Avoid The Germs

マウスで主人公を操作して、アイテムを取る。スコアを競うゲーム。  
Germs(細菌)に触れたら即死！

パックマンや[ヘビゲーム](https://ja.wikipedia.org/wiki/%E3%83%98%E3%83%93%E3%82%B2%E3%83%BC%E3%83%A0)に近いゲームルール  
シンプルな設計で参考にしやすい。

### コードを読み解く

- 専用のフォントイメージ使用（ビットマップフォント）
- パッキングされたスプライト読み込み、アニメーションの組み立て
- glsl によるシェーダー演出(細菌的表現！うにょうにょ)<Badge color="blue">おもしろい</Badge>
- シンプルな遷移システム(main.js->Boot.js->Preloader.js->MainMenu.js->Game.js)
- タイトル画面
  - 敵キャラランダム移動
- Game.js
  - 各 GameObject クラスからインスタンス作成
  - phisics による接触判定処理
  - GameOver 処理
- Player.js
  - プレイヤーの実装クラス(Arcade.Image 継承)
  - 生存判定
  - 移動処理
- Grem.js
  - 敵の実装クラス（Physics.Arcade.Sprite 継承)
  - 生存判定
  - 移動処理
- Grems.js
  - 敵管理クラス
  - 一定時間ごとに新たな敵を生み出すかチェックする

## Bank Panic

:hammer_and_pick:

## Breakout

ブロック崩しゲーム！（みんな大好き 😍）

:hammer_and_pick:

## Emoji Match

:hammer_and_pick:

## Firstgame

チュートリアルで作成するゲーム。  
解説なし

## Food-Fill

:hammer_and_pick:

## Snake

:hammer_and_pick:
ヘビゲームあるじゃん！  
なにかのチュートリアルの一部のようだが…？

## Snowmen Attack

:hammer_and_pick:

## Stacker

:hammer_and_pick:

## Top Down Shooter

:hammer_and_pick:
なにかのチュートリアル？
