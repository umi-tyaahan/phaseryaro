---
title: 'Examplesの使い方２'
order: 2
showToc: true
tocDepth: 3
---

# トップレベルの分類:hammer_and_pick:

- Actions / 沢山のGameObjectの整列と配置
- Animation / Phaserでのスプライトアニメーション利用方法
- Audio / 音声に関するもの
- Bugs / 既知のバグ検証用
- Cache / json,text,xmlのロード
- Camera / :hammer_and_pick:
- Components / GameObject自体にデータを持たせる例
- DemoScene / 様々なゲームデモ
- DepthSorting / GameObjectの前後表示関係
- Display / GameObjectへの様々な表示効果
- Dwitter / 140文字で表現するJSエフェクト
- Events /　イベント処理 
- Game Config / Game全般の設定項目
- Game Objects / :hammer_and_pick:
- Games / 実際のゲームサンプル
- Geom / 幾何学的な図形データの活用 :hammer_and_pick:
- Input / :hammer_and_pick:
- Loader / 様々なデータのLoadを行う :hammer_and_pick:
- Math / 距離計算のユーティリティ
- Paths / :hammer_and_pick:
- Physics / :hammer_and_pick:
- Plugins /  :hammer_and_pick:
- Pools / Groupを利用した弾幕GameObjectの再利用例
- Renderer / :hammer_and_pick:
- Scalemanager / ゲーム画面のスケール
- Scenes / ゲームシーン  :hammer_and_pick:
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
- Events /　イベント処理
- Time / Timerの汎用的な使い方
- Components / GameObject自体にデータを持たせる例

## 中級
- Actions / 沢山のゲームオブジェクトの整列・配置

## 上級

## その他・特殊
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

- Align
  - ベースとなるオブジェクトへの配置方法
  - 中央、右下等のよくある配置箇所への便利なAPIの例
- Alpha
  - GameObjectへの透明度設定
- Blend Modes
  - 複数の画像の合成方法の設定
  - 高度な合成方法はWebGLのみで動作する場合がほとんど
  - Graphics Blend Mode
    - 基本の例。スクリーン合成
  - Difference<Badge color="blue">おもしろい</Badge>
    - 差合成
  - Overlay
    - オーバーレイ合成
  - Particle
    - 加算合成
    - 光の演出でよく使う例
  - Circle Cut Out
    - 排他合成の応用
    - よくある演出円フェードアウトに使えそう
  - Blend Modes Tester<Badge color="red">難しい</Badge>
    - 画像ブレンドモードの組み合わせをテストできる
  - Custom Blend Mode / Custom Blend Mode With Graphics<Badge color="red">難しい</Badge>
    - カスタムしたブレンドモードをテストできる
  - Custom Separate Blend Mode
    - :hammer_and_pick:
- Color
  - 色のクラス
    - Brighten / lighten
      - %指定で色を明るくする
      - lightenの場合は、r,g,bのうち0のものは増加しない
    - Darken
      - %指定で色を暗くする
    - Random Color / Random Gray
      - ランダム色の作り方の例
- Effects<Badge color="red">難しい</Badge>
  - Fractal Terrain
    - [フラクタル地形](https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%AB%E5%9C%B0%E5%BD%A2)
    - 地形のランダム生成。コメント解除で川も生成できる
- Masks:hammer_and_pick:
- Shaders
  - シェーダーを利用した演出の例
  - シェーダーを使うと、ゲームデータを利用したド派手な演出が可能！
  - シェーダー演出についてはこちら(:hammer_and_pick:)で詳しく解説
  - コードの前半はシェーダーの処理部分(slgl)となっている
    - Shader Test2
      - 基本的な例。ゲーム背景として利用
    - Shader Test1
      - フラグメントシェーダーの切り替え
    - Shader Test3
      - シェーダーにリアルタイムでマウスポインター座標を渡す例
      - Update()を使わないスマートな例！
    - Shader Test4
      - シェーダーにマスクを適用
    - Shader Test5
      - Containerに5つのシェーダーを追加している
      - 複雑そうに見えるが、そうでもない
    - Shader Test6 / Shadert Test 7
      - ファイルからシェーダーを読み込み
    - Shader Test 8
      - シェーダーに変数を渡す
- Masks
  - マスクされたところだけが表示される処理の例
    - Bitmap Mask Example
      - 基本的な例。GameObject.maskにマスク形状を設定する
    - Bitmap Mask Example 2<Badge color="blue">おもしろい</Badge>
      - プログレスバーの実装例
      - カラー画像を、円弧の形状でマスクして実現する
    - Bitmap Mask Alpha
      - アルファ付きマスク
    - Bitmap Mask Text
      - 文字列を元にしたマスク
      - Bitmap Mask Text 2は逆の例。文字列を画像でマスクする
    - Bitmap Mask Bitmap Font
      - Bitmap Fontでのマスク例
      - Bitmap Mask Btimap Font 2は逆の例。文字列を画像でマスクする
    - BitMap Mask Particles
      - パーティクルで画像をマスク
      - Bitmap Mask Masked Particlesは逆。パーティクルのを画像でマスク
    - Geometry Mask Example
      - Graphicsオブジェクトでのマスク
      - Geometry Maskはさらに複数のExampleがあり
    - Spotlight<Badge color="blue">おもしろい</Badge>
      - 暗闇へのスポットライトの実装例。よくあるやつ！
      - Spotlight Rect : 矩形
      - Flicking Spotlight : 明滅するスポットライト。tweenでの実装
    - Magnify Glass
      - 虫眼鏡の実装例
        - ベースイメージをTintで暗く表示
        - ベースイメージの拡大コピーを作成
        - 眼鏡のレンズ部分で拡大コピーをマスク表示。
        - マスク外はベースが表示される
    - Logo Shine
      - 技術デモ
      - 下部のパーティクルマスクが美しい！
    - Bitmap Mask Text masking Text
      - 技術的デモ
      - Bitmap textを文字列でマスク
    - Components/ Add Mask To Sprite
      - スプライトにマスク追加
    - Geometory Mask
      - 動的にマスク形状を生成する例
        - Image Mask
          - 基本的な例
          - Multiple Image Mask : 複数画像へ同じマスクを適用可能
        - Graphics Mask
          - Graphicsを利用したマスク
        - Image Mask Arc / Image Mask Multiple Circles
          - shapeを利用したマスク
        
        

- Tint
  - 簡単な色の変更方法の例。色味の変更。
    - Atlas Frame Tint / Single Color Tint
      - 基本的なTint使い方の例
    - Corner Tint / Per Vertex tint
      - 上下左右にTint。グラデーションになる。
    - Tint Fill / Tint Fill Effect
      - 塗りつぶしのTintの例
      - アクションゲームでダメージを受けた時の演出などに使う
    - Text Tint / Rainvow Text
      - 文字にTint
    - Rasters
      - ビーム的な表現。
      - 矩形画像をTintでグラデーションで暗くする。上下で重ねる。
    - Tile Sprite Tint
      - Atlusスプライトを分割表示して、それぞれに上下左右Tintしてるだけ
    - Tint And Alpha
      - TintとAlpha
    - Tween Tint
      - Tweenを利用したTintの変更
    - Pixcel Wave<Badge color="blue">おもしろい</Badge><Badge color="red">難しい</Badge>
      - 技術デモ。画像がバラバラになったり、戻ったりする！
        - 画像データを解析して色情報を取り出す
        - 色を元に小さなスプライトを作成
        - 元座標を計算して、tweenを利用してアニメーションの組み立て

以下は動作しなかった
- Masks
  - Camera Mask Test 1-5
  - Container Mask Texst 1-3 
  - Mask Pref Test
- Color
  - Hex String To color
  - RGB Striing To color
  - Value To color

## Dwitter
140文字で表現するJSエフェクトアート。  
[dwitter.net](https://www.dwitter.net/)  

Shaderのように、大きめな演出として使える？  
ゲームへどのぐらい負荷がかかるかは不明🤔:hammer_and_pick:

## Events

イベント処理の例。
GameObjectにイベントを追加して、GameObjectを削除すると、  
イベントがメモリ上に残ってしまう。  
不要になったイベントは削除しよう。メモリリーク原因になるよ！  
一度だけイベントを起動したい場合の`once`は便利。

- Emit Scene Event
  - 基本的なイベント作成の例
    - `this.events.on` : イベント名と関数の登録
    - `events.emit` : イベント名で実際に呼び出し
- Turn Off Event Handler
  - イベントの削除方法
- Once Event
  - 一度だけイベントを動かしたい場合の例。かなり使う！
  - 複数回イベントが呼ばれても初回だけ反応する
- Event Arguments
  - 引数付きイベント呼び出し 
- Create Event Emitter
  - イベント作成と呼び出しの例
- Game Object Events
  - GameObjectへのイベント登録と呼び出し
- Emit Using Symbols
  - ES6のsynbol()をりようしたイベント名称の登録
- Turn Off Anonymous Event Handler
  - Event内での自身のイベント削除
- Listen To Game Object Event
  - イベント呼び出しのチェーン
  - マウスクリックイベントからGameObjectイベントを呼び出す

## GameConfig

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

## Game Objects:hammer_and_pick:

## Games
 実際のゲームサンプル:hammer_and_pick:

# Geom
幾何学的な図形データ。形状データ。
ポイントは、あくまで形状データだけで、表示には関係ないこと。
画面に表示するためには、Graphicsクラスなどで描画しないといけない。

- Circle : 円
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
- Ellipse : 楕円 :hammer_and_pick:
- Intersects : 交差 :hammer_and_pick:
- Line : 線 :hammer_and_pick:
- Point : 点 :hammer_and_pick:
- Polygon : 多角形 :hammer_and_pick:
- Rectangle : 矩形 :hammer_and_pick:
- Triangle : 三角形 :hammer_and_pick:

## Input :hammer_and_pick:

## Loader :hammer_and_pick:

## Math
2点間の距離計算。  
Examplesには無いが、Mathクラスは便利なツールが多いためDocumentを見ると良い。

- Distance
  - ゲームオブジェクト2点間の距離の取得
  - いくつかの計算パターンがある

<Info>
MathクラスはExampleで紹介されている項目は少ないが、

配列からのランダムピック等の便利なクラスがある。ドキュメントを見るべき。  
</Info>

## Paths :hammer_and_pick:

## Physics :hammer_and_pick:

## Physics :hammer_and_pick:

## Plugins

## Pools
Groupを利用したGameObjectの再利用例。

- Create Pool
  - 基本的な利用方法
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

## Renderer

## Scalemanager
GameConfigを設定して、画面の自動拡大縮小の設定を行う。

注意点  
この項目はExampleで共通のIFが使えない場合がある。  
Chromeの開発者モードでソースコードを見る。  

以下の例は[Phaser.Scale.Scalemode](https://photonstorm.github.io/phaser3-docs/Phaser.Scale.html#.ScaleModeType)の適用した例

- Fit Runnning Game
  - 基本的な設定の例
  - アスペクト比固定で、ゲーム画面用のdiv(ターゲット)を満たすように広がるが、はみ出ないようになる
  - ターゲットの水平垂直中央に配置する
  - 動作しているゲームはチュートリアルの内容
  - 詳細設定：GameConfig部分を見る
    - mode : Phaser.Scale.FIT
    - autoCenter : Phaser.Scale.CENTER_BOTH
    - width:800 , height:600
- Envelop / Envelop Min Max
  - アスペクト比固定で幅と高さが自動調整。ターゲット全体に広がる。
  - ターゲットより大きくなる場合がある
  - Min,Maxで制限を設けられる
- Fit / Fit Min Max / Fit With Auto Center / Zoom Manual Resize / Zoom With Fit
  - アスペクト比固定で、ターゲットに収まるように広がる。
  - ターゲットに隙間ができる場合がある
  - Zoomは無視される感じ？
  - Zoom Manual Resize はうまく動いてない？:hammer_and_pick:
- Resize / Resize Min Max
  - アスペクト比無視で、ターゲットサイズに広がる
  - Min,Maxで制限を設けられる
- Height Control Width
  - 幅は高さに基づいて自動調整される
- Width Control Height
  - 高さは幅に基づいて自動調整される
- No Scale / NoScele Auto Center / Zoom With No Scale
  - 自動スケーリングをしない
  - AutoCenterはターゲットの水平垂直中央に配置
  - Zoomで拡大率設定
- Manually resize / Manually Resize With Zoom:
  - 自動スケーリングをしない
  - 画面サイズ変更時のゲーム画面再設定を自分で実装する例
  - Manually Resize With Zoomうまく動いてない？:hammer_and_pick:
- Resize And Fit
  - Resize設定で起動し、ゲーム内で動的に画面サイズをFitさせている例
- Resize On Click
  - Fit状態で起動し、ゲーム内で画面サイズを固定値で変更する例

それ以外
- Full Screen Game<Badge color="blue">おもしろい</Badge>
  - ゲーム画面内へのFullScreenボタンの実装例
  - スケール設定はFit / AutoCenterBoth
- Mobile Game Example<Badge color="red">難しい</Badge>
  - スマフォ環境へのサイズ適用例
  - 背景画像などは画面にFitさせるが、実ゲーム領域はAspect比固定拡大を目指している
  - 基本的な実装：画面サイズを元に、ゲーム部分のmain.cameraの拡大率を計算してフィットさせる？
- OrientationCheck
  - 画面の縦横を検出して、処理を変える例
  - 主にスマフォ用。Chrome開発者モードのスマフォ表示からテスト可能
- World Input
  - 画面座標領域とゲームワールド座標の違いの例
  - 詳しくはCameraの方で説明されると思うが…🤔:hammer_and_pick:


- Envelop Min Max


こちらのスケール設定値の適用例。  
https://photonstorm.github.io/phaser3-docs/Phaser.Scale.html#.ScaleModeType

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