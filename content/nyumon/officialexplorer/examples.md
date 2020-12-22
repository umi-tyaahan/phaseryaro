---
title: 'Examplesの使い方'
order: 1
showToc: true
tocDepth: 3
---

# 機能の探し方

Phaserゲームフレームワークでゲーム制作をする場合、  
フレームワークの機能を調べるにはいくつか方法があると思います。

1.  [公式のAPI Documents](https://photonstorm.github.io/phaser3-docs/)から機能を調べる
2. [公式のExamples](http://labs.phaser.io/index.html)から機能を調べる
3. web上のチュートリアルを探す
4. githubで公開されているサンプルを見る

機能について、実際の画面上の挙動を確認するには2.の方法が良いと思います。  
しかし、PhaserのExamplesは現在、1772もあります！  

実際にExamplesに飛ぶと、ある程度の分類はされているようですが、いまいち探し方が分からない…  
ここでは、Examplesの分類ごとにどんな物があるかを調べた結果を記載しています。

<Info>
Phaser公式サイト内のExamplesとラボ(http://labs.phaser.io/)のExamplesは基本的に同じ内容のようです。

すぐにメンテナンスされそうなのはラボの方だと思うので、基本的にそちらの内容で解説していきます。
</Info>

<LinkCard title="ローカルでExampleを見る方法はこちら" url="/nyumon/devenv/buildlocalexamples" />

# トップレベルの分類:hammer_and_pick:

- :hammer_and_pick:(作成中)
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

# 詳細:hammer_and_pick:
各項目で気になったものをピックアップして解説します。

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