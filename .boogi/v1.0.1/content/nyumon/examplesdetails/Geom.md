---
title: 'Geom'
order: 25
showToc: true
tocDepth: 3
---

# 公式

http://labs.phaser.io/index.html?dir=geom

# 概要
幾何学的な図形データ。形状データ。
ポイントは、あくまで形状データだけで、表示には関係ないこと。
画面に表示するためには、Graphicsクラスなどで描画しないといけない。


# 項目

## Circle
 円
- Create / Set Position / SetTo
  - 基本的な使い方
  - Geomで形状を作成し、Graphicsで描画
  - Geomの情報を変更し、Graphicsで描画
  - SetToで円の半径を設定
- Propertyies
  - Geomの形状確認例
- Area / Change Size
  - Geomへのパラメーター設定
- Circumference
  - Geomから座標を取得
- Equals
  - Geom形状の一致をチェック
- Get Bounds
  - Bounds(境界)形状の取得
- Get Point At / Circumference Point<Badge color="blue">おもしろい</Badge>
  - 角度を元に円の特定位置の座標を取得
  - Geom構造を利用したアニメーションの基本
- Get Points
  - 指定した分割数で均等割された円上の位置を取得
- Get Random Point
  - 円内のランダム座標の取得
- Is Empty
  - 形状の半径が0未満であるかどうかチェック
- Set Empty
  - 半径０に設定
- Offset / Offset Point
  - Offset付きのGeom
- Contains Contains Point / Contains Rect
  - 座標がGeom内にあるかどうかチェックする例
  - Rectは4点が含まれている状態でtrueとなる
- Clone
  - 応用デモ
  - CloneでGeom情報をコピーする
- Copy From
  - 応用デモ
    - クリック位置の円の構造データを違うデータに置き換える

## Ellipse
楕円 :hammer_and_pick:

## Intersects
交差 :hammer_and_pick:

## Line
線 :hammer_and_pick:

## Point
点 :hammer_and_pick:

## Polygon
多角形 :hammer_and_pick:

## Rectangle
矩形 :hammer_and_pick:

## Triangle
三角形 :hammer_and_pick:

