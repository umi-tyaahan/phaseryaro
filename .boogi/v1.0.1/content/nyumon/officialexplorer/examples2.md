---
title: 'Examplesの使い方２'
order: 2
showToc: true
tocDepth: 3
---

# トップレベルの分類:hammer_and_pick:

- :hammer_and_pick:(作成中)
- Actions / 沢山のGameObjectの整列と配置
- Animation / Phaserでのスプライトアニメーション利用方法
- Audio / 音声に関するもの
- Bugs / 既知のバグ？
- Cache / json,text,xmlのロード
- Camera / :hammer_and_pick:
- Components / GameObject自体にデータを持たせる例
- DemoScene / 様々なゲームデモ
- DepthSorting / GameObjectの前後関係
- Dwitter / 140文字で表現するJSエフェクト
- Loader / 様々なデータのLoadを行う
- Math / 距離計算のユーティリティ
- Scenes / ゲームシーン
- Snapshot / 画面キャプチャ機能の紹介
- Spine / Spineアニメーションソフトウェアとの連携:hammer_and_pick:
- Textures / :hammer_and_pick:
- Tilemap / :hammer_and_pick:
- Time / Timerの汎用的な使い方
- Timestep / Phaserのメインゲームループの時間に関するもの
- Transform / GameObjectの変形
- Tweens / tweenアニメーションと連続したtweenアニメ(timeline)
- Utils / データ構造・操作系

:hammer_and_pick:TODO : 難易度別分類

# 難易度別分類:hammer_and_pick:

## 基本
- Scenes / ゲームシーン
- Time / Timerの汎用的な使い方
- Components / GameObject自体にデータを持たせる例

## 中級
- Actions / 沢山のゲームオブジェクトの整列・配置

## 上級

## 特殊
- Bugs / 既知のバグ？
- DemoScene / 様々なゲームデモ
- Dwitter / 140文字で表現するJSエフェクト

# 詳細:hammer_and_pick:
各項目で気になったものをピックアップして解説します。

## Actions
沢山のゲームオブジェクトの整列・配置。  
Phaser.ActionクラスでGroupでまとめたGameObjectを特定の形状に整列・配置できる。

- Place On Circle
  - 基本的な使い方
- Shift Position<Badge color="red">難しい</Badge>
  - [Groupの配列要素を入れ替える処理みたいです](https://photonstorm.github.io/phaser3-docs/Phaser.Actions.html#.ShiftPosition__anchor)
- Wrap In Rectangle
  - 矩形領域からはみ出したらはみ出した座標が0になる
  - いわゆる画面右に出たら左からキャラが出てくる、というやつ

## Animation
Phaserでのスプライトアニメーション利用方法。

- 60fps Animation Test
  - 普通のスプライトアニメーション
  - 動かすための工程は基本的に3ステップ
    - scene.animにアニメーションと名前を登録。
    - スプライトを追加。この状態だと静止画のまま
    - sprite.play(<アニメーション名>)でアニメーション開始
- Aseprite Animation
  - [ドットペイントツールAseprite](https://store.steampowered.com/app/431730/Aseprite/)との連携
    - Phaser3.5の目玉機能のひとつ
  - AsepriteのAnimation定義を読み込める
  - Asepriteは中々人気のドット絵ツールのようです🤤欲しくなってきました
- Create Animation From Canvas Texture
  - ゲーム内でアニメーションテクスチャを動的に作成しそれをアニメーションさせる
  - 動的に何かを作るときはだいたいGraphicsクラスですね
- Create Animation From Sprite Sheet
  - スプライトシートの各フレームからアニメーション定義を組み立てる
  - スプライトにアニメーション定義ファイルがない場合はこの方法を利用
- Create Animation From Texture Atlas
  - スプライトにアニメーション定義ファイルがある場合はこの方法
- Create From Sprite Config
  - スプライト表示の初期条件を渡す方法
- From Animation Json / From Json
  - Jsonファイルからのアニメーション定義
- Gif To Animation
  - GifファイルからのAnimation作成
  - 基本的にはフレームをPhaserでアニメーション定義にしているだけ
  - 演出処理が多く参考にしづらい。tweenやupdate内の処理をコメントアウトすると良いかも
- Hide On Complete<Badge color="blue">おもしろい</Badge>
  - クリックしたら敵が死ぬ！簡単な演出
  - 別アニメーションがplayされたら、前のスプライトはvisible = falseになるという例
- Mixed Animation
  - 複数アニメーションの遷移時の処理
- on Repeat Event
  - アニメーションの繰り返しタイミングでの処理の例
  - この鎧の騎士（ランスロット🤖)のExampleはアニメーションイベント関連です
- Play Animation With Config
  - config設定付きの play()
- Stagger Play 1
  - anims.staggerPlayのサンプル

以下は技術デモ寄りの内容
- Cubes
  - scene.anims.staggerPlayでGroupへのアニメーション開始遅延命令
- Muybridge
  - scene.anims.staggerPlayでGroupへのアニメーション開始遅延命令

## Audio:hammer_and_pick:
音声に関する例。公式Exampleがメンテ中？:hammer_and_pick:  
複雑に音声操作を行えるのはWeb Audioクラス。  
基本的な操作のみ行えるのはHtml5 Audioクラス。  
No Audioは音声無し状態で利用されるクラス。  

とりあえず何も考えずにWeb audio使えば良いのか？🤔:hammer_and_pick:

- SID
  - [SID音源](https://sidplayer.cebix.net/)の再生

## Bugs
解説なし。

## Cache
json,text,xmlのロード方法の例

## Camera:hammer_and_pick:

## Components
GameObject自体にデータを持たせる例。
ゲームキャラクターのライフ等の実装にはこれを使う。

- Get And Set Data Values
  - 基本の例
- Store Scene Data
  - シーン自体にもデータを持たせることができる

## DemoScene
様々なゲームデモ。実装例。

- Birdy Nam Nam
  - アセットのロードと簡易的なインタラクションのデモ
  - Errorで動かない:hammer_and_pick:
- Chunky Raser Bars / Raster Carpet / Raser Wave
  - Group,Tint,tweenを利用したカラーバーの操作


## DepthSorting

- Zindex
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

## Display

## Dwitter
140文字で表現するJSエフェクトアート。  
[dwitter.net](https://www.dwitter.net/)  

Shaderのように、大きめな演出として使える？  
ゲームへどのぐらい負荷がかかるかは不明🤔:hammer_and_pick:

## Loader :hammer_and_pick:

## Math
2点間の距離計算。  

- Distance
  - ゲームオブジェクト2点間の距離の取得
  - いくつかの計算パターンがある

<Info>
MathクラスはExampleで紹介されている項目は少ないが、

配列からのランダムピック等の便利なクラスがある。ドキュメントを見るべき。  
</Info>

## Scene :hammer_and_pick:


## Snapshot
画面キャプチャ機能の紹介

- game.renderer.snapshot機能
  - 画面全体
  - 画面の特定の範囲
  - 1ピクセル

## Spine:hammer_and_pick:

## Textures:hammer_and_pick:

## Tilemap:hammer_and_pick:
マップチップを利用したタイル表現。
Tiledとの連携？:hammer_and_pick:

:hammer_and_pick:

## Time
Timerの汎用的な使い方

- Timer全般
  - 基本的な使い方はTimer Eventを見るのが良い
  - 時間変化の表現にはtimeerのprogressを利用する
    - progressは完了までの時間を0～1で表す

## Timestep
ゲームループに関わる時間関連の内容。  
シーンのupdateにも関わる。

- Delta History / TickerLoop
  - デルタ平滑化に使用される、以前のデルタ値を保持する内部配列(Documentより)
  - 1フレーム描画にかかった時間(ms)？
  - update()も基本的に1フレームごとにコールされる
- Variable Smooth Step(可変スムーズステップ)
  - updateのdelta（以前呼び出しからの経過時間)を使って正確な移動量を調整
  - Phaser.Math.GetSpeed(600,3)は600pixを3secで移動する速度が取れる
- WorldTime
  - updateのtimeはシーン開始からの経過時間が入っている

## Transform
GameObjectの変形。基本的な内容。

- Origin
  - 画像の原点の設定
  - 基本は画像左上が原点に設定されている（確か）:hammer_and_pick:
  - 原点の設定位置によって、Scale,Flip,Rotationにも影響あるので注意

## Tweens
Tweenアニメーション全般。連続TweenアニメをTimelineと呼ぶ。

- Tweenの使い方の具体例
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

## Utils
データ構造・操作  

- Array構造
  - 特別な2次元配列の操作ツール
- [R木（空間データの高速検索)](https://tanishiking24.hatenablog.com/entry/introduction_rtree_index)構造<Badge color="blue">おもしろい</Badge>
  - リアルタイムストラテジーで民兵とかを一括選択するアレ！
- Size構造
  - 矩形のAspect比固定操作など