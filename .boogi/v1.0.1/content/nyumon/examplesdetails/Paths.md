---
title: "Paths"
order: 29
showToc: true
tocDepth: 3
---

# 概要

Path は Geom と同じように、実際には描画されず、データのみのクラスです。  
Path を描画するには、Graphics クラスなどを利用します。  
曲線表現には、Spline（スプライン曲線)、Quadratic Bezier（2 次ベジェ曲線）、 cubicBezier（3 次ベジェ曲線）が利用できます。  
いわゆるベクターツールでよく利用されてるのは 3 次ベジェ曲線です。

Path は GameObject の複雑な移動経路の表現に利用できます。  
ヘルパー関数の scene.add.follower を利用すると、GameObject を簡単に Path に沿って移動させることができます。

パス形状を作成する、補助的なパスペイントツールが公開されています。  
https://github.com/samid737/phaser3-plugin-pathbuilder

# 公式

http://labs.phaser.io/index.html?dir=paths

Document  
https://photonstorm.github.io/phaser3-docs/Phaser.Curves.Path.html

> パスは、複数の曲線を 1 つの連続した複合曲線に結合します。パスにカーブがいくつあるか、またはカーブがどのタイプであるかは関係ありません。
> パス内のカーブは、前のカーブが終了する場所から開始する必要はありません。つまり、パスは途切れのないカーブである必要はありません。カーブの順序のみがパス上の実際のポイントに影響します。

# 項目

- Simple Path<Badge color="lightgreen">入門用</Badge>
  - 直線の Path が 2 本だが、途切れていても一つの Path として扱われる例
  - Graphics クラスを利用した Path の描画
  - Path にそって Graphics を移動させる例
- Path Add Line Curve
  - 線 Path をつなげる
- Circle Path
  - 円 path
- Circle Loop Path
  - 円 path でループさせる例
- Line To Ellipse
  - 線 path と円 path をつなげる例
- Move To
  - Path 間のギャップ設定を行う
- Path Line And Bezier
  - 線 path とベジェ曲線 path をつなげる例
- Path Bounds
  - 線 Path の境界(Bounds)を表示
- All Types
  - 応用
  - spline,line,ellipse,cubicBezier を利用した例
- Complex Path Bounds
  - All Types の領域(Bounds)表示方法
- Zig Zag Path
  - 線 path を Gruop 化した GameObject が移動する例
- Velocity From Tangent Vectors<Badge color="red">難しい</Badge>
  - GameObject を Path の特定地点になめらかに移動させる例

# サブフォルダ

Path Examples のサブフォルダの項目を解説します。

## Curves

細かい Path の形状についての説明です。  
項目が多いので、基本、情報の取得、リアルタイム操作、応用という分類で項目を分けています。

### 基本

<Badge color="lightgreen">入門用</Badge>

- Line Curve
  - 線 Path の例
- Ellipse curve
  - 円 path の例
  - Tween で形状変化
- Spline Curve / Spline Curve from Array
  - Spline path の例
- Quadratic Bezier Curve
  - 3 次ベジェ曲線 path の例
- Cubic Bezier Curve
  - 3 次ベジェ曲線 path の例

### 情報の取得

- Pint Types
  - Path 上の位置取得 method の getPoints と getPoint の違いの例
- Get Distance On Line Curve
  - path の距離から位置を取得し描画する例
- Spline Curve Distance Points
  - 指定した間隔分離れた位置を取得。数を小さくすると分割数は大きくなる。
- Get Points On Line Curve / Get Points On Cubic Bezier Curve
  - path に沿った位置を指定した数で分割して取得する
  - 1 つの曲線から等間隔の点のシーケンスを取得
  - getSpacedPoint との違いは、分割距離の計算が、path 全体で等分されるか、一つの形状で等分されるかの違い
- Get Spaced Points On Line Curve / Get Spaced Points On Cubic Bezier Curve
  - path に沿った位置を指定した数で分割して取得する
  - 曲線全体から等間隔の点を取得
  - getPoint との違いは、分割距離の計算が、path 全体で等分されるか、一つの形状で等分されるかの違い

### path のリアルタイム変更

- Drag Line Curve / Line Curve Bounds
  - 線 path をリアルタイム操作
  - 境界(Bounds)の表示
- Drag Ellipse curve / Ellipse Curve Bounds
  - 円 path をリアルタイム操作
- Drag Spline Curve 　/ Spline Curve Bounds
  - スプライン曲線 path のリアルタイム操作
- Drag Quadratic Bezier Curve
  - 2 次ベジェ曲線 path のリアルタイム操作
- Drag Cubic Bezier Curve / Cubic Bezier Bounds
  - リアルタイムで 3 次ベジェ曲線 path の制御点を操作できる
- Spline Builder
  - マウスでスプラインを追加して、Follower を動かすデモ

### 応用

- Get Tangent Vectores On Cubic Bezier Curve

  - 2 次ベジェ曲線の接線と法線の描画例

- Cubic Bezier Curve Debug <Badge color="red">難しい</Badge>

  - 3 次ベジェ曲線 path のデバッグ表現

- Spline Between Points<Badge color="red">難しい</Badge>

  - 2 点を基準とした Spline の描画

- Rectangle Spline Intersection
  - :hammer_and_pick:
  - PR 済み

## Followers

Follower は Path に沿って移動する GameObject のことを指します。

Document  
https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.PathFollower.html

scene.add.follower という API を利用すると、Path に沿って移動する処理を簡単に実現できます。

Document  
https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.GameObjectFactory.html#follower__anchor

- Basic Follower
  - GameObject の移動の例
  - GameObject は Path にピッタリ同じ座標上になくても良い<Badge color="blue">おもしろい</Badge>
- Rotate To Path / Rotation Offset / Start At / Yoyo Follower
  - startFollow の Config 設定の例
  - rotateToPath で 角度に合わせて GameObject の角度が変化する
  - rotationOffset で GameObject の角度変化
  - startAt で開始位置変更
  - yoyo で往復運動
- Pause And Resume
  - Follower の動きを停止、再開する例
- Change Path <Badge color="blue">おもしろい</Badge>
  - Follower が移動する path を切り替える例
- Mass Followers
  - 複数の Follower を制御する例
- Multi Curve Path
  - 複雑な Path を Follower が移動する例
  - 実装は非常に簡単！
- Path From Json / Path From Json All Types
  - Json ファイルで定義された Path を読み込む例
- Wave Path
  - 技術デモ
  - Wave 形状の Path の作り方例
- Sparkkle Trail
  - 技術デモ
  - 発光体による演出例

## Path Editor

:hammer_and_pick:

- 未実装っぽい
