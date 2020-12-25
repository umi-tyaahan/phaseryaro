---
title: 'Display'
order: 10
showToc: true
tocDepth: 3
---

# 公式

http://labs.phaser.io/index.html?dir=display

# 概要
GameObjectへの様々な表示効果

# 項目
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
