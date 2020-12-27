---
title: 'Camera'
order: 6
showToc: true
tocDepth: 3
---

# 概要

CameraはPhaserの強力な機能のうちの一つです。  
ゲーム内の表示領域を制御できます。

Cameraの役割について、アクションゲーム…マリオブラザースの例で例えてみます。  
大抵のゲームでは、プレイヤーが中心にいて、その周辺のみが描画されます。

プレイヤーが前方に移動します。  
すると現在の背景が後方に下がり、見えなくなります。  
そして、前方の様子が新たに描画されます。  

ゲーム制作の視点でこのことを考えます。  
プレイヤーは、今見ている画面上では常に同じ位置、つまり画面の中心にいるだけです。  
背景だけが変化しているということです。

今見ている画面内の座標をローカル座標、ゲーム世界全体の座標をワールド座標と呼びます。:hammer_and_pick:  
カメラは、このワールド座標について制御を行います。

以下はDocumentによるCameraクラスの説明です

>カメラは、すべてのゲームがPhaserでレンダリングされる方法です。  
これらはゲームの世界を表示し、それに応じて配置、回転、ズーム、スクロールすることができます。  
カメラは、ビューポートとスクロール値の2つの要素で構成されています。  
ビューポートは、ゲーム内のカメラの物理的な位置とサイズです。  
デフォルトでは、カメラはゲームと同じサイズで作成されますが、カメラの位置とサイズは任意に設定できます。  
つまり、ゲームの右下隅に配置されたサイズが320x200のカメラを作成する場合は、ビューポートを調整（setViewportやsetSizeなどの方法を使用）してそれを行います。  
ゲーム内でカメラが見ている場所を変更したい場合は、スクロールします。  
これは、setScrollプロパティまたはscrollXやscrollYメソッドを介して行うことができます。  
スクロールはビューポートに影響を与えません。また、ビューポートを変更してもスクロールには影響しません。  
デフォルトでは、カメラは表示できるすべてのゲームオブジェクトをレンダリングします。  
このignoreメソッドを使用してこれを変更し、カメラごとにゲームオブジェクトを除外することができます。  
カメラには、フェード、フラッシュ、カメラシェイクなどの特殊効果も組み込まれています。  

# 公式

http://labs.phaser.io/index.html?dir=camera

# 公式Exampleの解説

## Cameraの追加・配置

- Basics<Badge color="lightgreen">入門用</Badge>
  - 小さいカメラを追加
  - GUI付き
- Multiple Cameras
  - 複数のカメラを並べる
- Overlap
  - 追加したカメラを重ねる
- 16 Camera Test / 16 Camera Shader Test / 32 Camera Test
  - 小さいカメラをたくさん並べる例
  - ゲーム実況動画で死ぬシーンを並べるような演出に使える？🤔
  - `cam.setPostPipeline(<pipeline>)`で特定のカメラにポストエフェクト！
- Add Camera On Click
  - クリックで小さいカメラを追加
- Background Color
  - 小さいカメラを追加し、透明度付き背景色を指定 
- Cameras From State config
  - Scene Configでカメラを作成する例
- Single Small Camera / Set Viewport
  - [Viewportの設定](https://photonstorm.github.io/phaser3-docs/Phaser.Cameras.Scene2D.BaseCamera.html#setViewport__anchor)
  - 基本的にカメラは画面全体を描画するが、Viewportを設定すると指定された範囲だけ描画する。
  - ミニサイズのカメラを使った時に、Viewportから外れた範囲のTextureは描画されなくなる

## Cameraの移動
- Origin
  - カメラの移動
- Scroll View
  - カメラの移動（パンではなく、直線移動）
- Move Camera With Keys
  - キーボードによるスムーズスクロールカメラの実装例
  - Guiあり
- Set Bounds / Bounds At Zero / Set Small Bounds
  - カメラが移動できる範囲の指定
- Camera Center On
  - カメラの位置を変更
  - 画像の解像度は1024x2048で4倍に拡大表示している
  - 拡大してピクセルがボケないようにGameConfigで`pixcelArt : true`している
- Fixed To Camera
  - `setScrollFactor(0)`でGameObjectのスクロールなし
- Follow User Controlled Sprite / Follow Zoom<Badge color="lightgreen">入門用</Badge>
  - ユーザー操作のスプライトの移動にカメラが追従
  - カメラの追従速度を指定指定して、リアルな演出を行う
  - よく使いそうな設計
- Follow Zoom Tilemap
  - Tilemapを利用して、ユーザー操作のスプライトにカメラが追従
- Follow Offset
  - カメラのGameObject追従にオフセット設定
- Follow Sprite / Follo Spirete Small Bounds
  - カメラがスプライトの移動に追従
- Set Scroll Factor
  - カメラへのGameObject追従設定
- Follow Sprite With Dadzone
  - キーボードでカメラ位置の変更・移動の制限


## Cameraのエフェクト
- Camera Effects<Badge color="blue">おもしろい</Badge>
  - カメラエフェクト（フェード、フラッシュ、シェイク）
- Camera Blur Shader
  - カメラへのブラーエフェクト
  - cam.ignoreでGameObjectをカメラで非表示にできる
- Camera Fade In And Out / Camera Fade Out And In
  - フェードイン、フェードアウト
- Fade
  - フェード効果
- Flash
  - フラッシュ効果
- Pan To
  - カメラのパン
  - イージングを指定し、なめらかなパンを行う
- Zoom To
  - カメラのズーム
- Shake / Tile Map With Camera Shake
  - カメラのシェイク
- Rotate camera
  - カメラの回転
- Change Camera Shader
  - クリックでカメラへのシェーダー適用
- Camera Effect Callbacks
  - Camera Effectのコールバックの使い方
  - コールバックは毎フレーム呼ばれる。Example微妙にバグってる:hammer_and_pick:
- Shader Multi Cam Test / Select Shader Test
  - デモ
  - カメラに交互にポストエフェクトを適用
- Game Shader Test 1
  - ゲームデモ
  - カメラにHueRotatePostFXシェーダー適用する例
- Game Shader Test 2 / Game Shader Test 3<Badge color="blue">おもしろい</Badge>
  - ゲームデモ
  - カメラに歪みシェーダー(BendWavesPostFX)適用する例
  - ゲーム画面がゆがみながら動作！
- Render To Texure
  - PixelatedFXシェーダーの適用
  - ドット感UP
- Render To Texture Shader 
  - HueRotatePostFXシェーダーの適用
  - 🎮ゲーミングエフェクト！
- REnder To Texture Shader 2
  - BendRotationWavesPostFXシェーダーの適用
- Render To Texture Shader 3
  - BendWavesPostFXシェーダーの適用
- Render To Texture Shader 4
  - PlasmaPost2FXシェーダーの適用
- Render To Texture Shader 5
  - ScalinePostFXシェーダーの適用
- Render To Texture Shader 6
  - LazersPostFXシェーダーの適用

## Cameraのその他の機能
- Remove Camera On Click
  - カメラの削除
- Ignore / Ignore Gameobjects<Badge color="lightgreen">入門用</Badge>
  - 特定のGameObjectをカメラで非表示にする
- Ignore Container / Ignore Gameobjects In Containers
  - コンテナをカメラで非表示にする
- Ignore Group Children
  - Groupをカメラで非表示にする
- Camera Filter
  - 複数カメラがある場合、cameraFilterでGameObjectの排他的な表示を設定する
- Cross Scene Object Placement
  - UI Sceneを作成し、カメラ情報を利用する例
- Gat Worrld Point
  - `cam.getWorldPoint`で現在座標を取得
- Round Pixels
  - ドットのエイリアシングに関する設定
  - pixcelArtモードでは設定を考慮する必要がある
- World View<Badge color="lightgreen">入門用</Badge>
  - ワールド座標系の情報の取得
- World Camera
  - ローカル座標とワールド座標の変換・利用方法の例
  - `camera.getWorldPoint(pointer.x,pointer.y)`を使ってワールド上のマウス位置を取得
- World Coorinate From Another Scene
  - 別のシーンからのワールド座標の取得

## 応用・高度な使い方
- Background Color Interpolate<Badge color="red">難しい</Badge><Badge color="blue">おもしろい</Badge>
  - カメラの透明度付き背景色指定機能と、色の補完合成を利用したデモ
  - なめらかな背景変化の実装
  - カメラはプレイヤー中心で追従する
- Camera Alpha<Badge color="red">難しい</Badge><Badge color="blue">おもしろい</Badge>
  - カメラのアルファ指定
  - 複雑なExample。クリックでパン、ズームする。
  - 画像の解像度は1024x2048
- Graphics Landscape
  - Graphicsクラスを利用したLandscape生成デモ
- Minimap Camera<Badge color="blue">おもしろい</Badge>
  - デモ
  - カメラ機能を応用したMinimapの実装
- Multi Camera<Badge color="red">難しい</Badge>
  - 複数のSceneを立ち上げ、それぞれのMainCameraを操作して画面表示を切り替える
  - Controller.jsで各シーンを制御
  - 各シーン内ではcameras.mainの座標(cam.x,cam.y)がタイル状に設定されている
  - このExampleはLiveCording用のIFが無いので注意。`/public/src/camera/multicamera/`ファイルを直接見よう
