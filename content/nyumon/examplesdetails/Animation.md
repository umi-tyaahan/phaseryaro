---
title: 'Animation'
order: 2
showToc: true
tocDepth: 3
---

# 公式

http://labs.phaser.io/index.html?dir=animation

# 概要
Phaserでのスプライトアニメーション利用方法

# 項目

- 60fps Animation Test<Badge color="lightgreen">入門用</Badge>
  - 普通のスプライトアニメーション
  - 動かすための工程は基本的に3ステップ
    - scene.animにアニメーションと名前を登録。
    - スプライトを追加。この状態だと静止画のまま
    - sprite.play(<アニメーション名>)でアニメーション開始
- Aseprite Animation
  - [ドットペイントツールAseprite](https://store.steampowered.com/app/431730/Aseprite/)との連携
    - Phaser3.5の目玉機能のひとつ
  - AsepriteのAnimation定義を読み込める
- Create Animation From Canvas Texture
  - ゲーム内でアニメーションテクスチャを動的に作成しそれをアニメーションさせる
  - 動的に何かを作るときはだいたいGraphicsクラス
- Create Animation From Sprite Sheet
  - スプライトシートの各フレームからアニメーション定義を組み立てる
  - アニメーション定義ファイルがない場合はこの方法を利用
- Create Animation From Texture Atlas
  - スプライトにアニメーション定義ファイルがある場合はこの方法
- Create From Sprite Config
  - スプライト表示の初期条件を渡す方法
- From Animation Json / From Json
  - Jsonファイルからのアニメーション定義作成
- Gif To Animation
  - GifファイルからのAnimation作成
  - Gifの各フレームを元にPhaserでアニメーション定義を作成
  - 演出処理が多く参考にしづらい。tweenやupdate内の処理をコメントアウトすると良い
- Hide On Complete<Badge color="blue">おもしろい</Badge>
  - クリックしたら敵が死ぬ！簡単な演出の実装
  - 別アニメーションがplayされたら、前のスプライトは`visible = false`になるという例
- Mixed Animation
  - 複数アニメーションの遷移時の処理
- on Repeat Event
  - アニメーションの繰り返しタイミングでの処理の例
  - 鎧の騎士（ランスロット🤖)がサムネイル表示されているExampleはアニメーションイベント関連
- Play Animation With Config
  - config設定付きの`play()`の例
- Stagger Play 1
  - anims.staggerPlayの例

## 技術デモ
以下は応用的な使い方をしているExampleです

- Cubes
  - scene.anims.staggerPlayでGroupへのアニメーション開始遅延命令
- Muybridge
  - scene.anims.staggerPlayでGroupへのアニメーション開始遅延命令

# その他
Asepriteは中々人気のドット絵アニメーション作成ツールのようです🤤  
欲しくなってきました。