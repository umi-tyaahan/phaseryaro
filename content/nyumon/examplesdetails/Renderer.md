---
title: 'Renderer'
order: 42
showToc: true
tocDepth: 3
---

# 公式

http://labs.phaser.io/index.html?dir=renderer

# 概要

CustomPipelineに関連する例。

Pipeline(パイプライン）とはコンピューターにおける描画手順のこと。
[参考記事](https://yttm-work.jp/shader/shader_0002.html)

Batch(バッチ)は、レンダリング処理におけるひとかたまりの処理、といったニュアンス
[参考記事](https://qastack.jp/gamedev/32910/what-is-the-technical-definition-of-sprite-batching)

> 技術的には、「バッチ処理」とは、複数のアクションとそのデータを1つのデータ構造に入れて、すべてを個別にではなく一度に実行できるようにすることです。最新のGPUの最大のボトルネックは、その処理能力ではなく、CPU上で実行されるゲームとGPU間の通信です。GPUに送信されるデータの各パッケージにはオーバーヘッドがありますが、小さなパッケージのオーバーヘッドは大きなパッケージのオーバーヘッドと同じくらい大きいため、100個の小さなパッケージではなく1つの大きなパッケージを送信する場合に大きな利益になります。そして、それがバッチ処理です。小さいパッケージすべてから1つの大きなパッケージを作成します。スプライトごとのデータ量が途方もなく少ないため、バッチ処理はスプライトに特に役立ちます。4つの頂点と4つのtex座標。そのため、小さなパッケージのオーバーヘッドは比例して大きくなります。

# 項目

- Grayscale Pipeline<Badge color="lightgreen">入門用</Badge>
  - PipelineにGlayscaleシェーダーを適用する
- Hue Rotation Pipeline<Badge color="blue">おもしろい</Badge>
  - Pipelineに輝度変更シェーダーを適用する
  - 🎮ゲーミングエフェクト！
- 32 Texture Test
  - Texture表示テスト
- Batch Test
  - Texture表示のテスト。Textureを2048個描画する
- Batch Size
  - WebGLのバッチサイズ設定
  - [この記事](https://docs.unity3d.com/ja/2019.4/Manual/GPUInstancing.html)によるとバッチサイズ設定はあんまり意味ない？🤔:hammer_and_pick:
- Bend Pipeline
  - 外部パイプラインモジュールの適用。Bend(曲げる)
  - [ニュース記事](https://phaser.io/news/2020/12/phaser-350-released)によるとPhaser3.50で劇的に処理が軽くなったようです
- Color Post Fx Pipeline<Badge color="blue">おもしろい</Badge>
  - PostFXパイプラインでの画面効果適用
  - [Phaser3.50の新機能です](https://phaser.io/news/2020/12/phaser-350-released)。後処理のタイミングで効果を適用できます
  - PostFXによりブラー、グローなどのよく使う画面効果がすぐに実装できそうです😁
- Custiom Pipeline Multi TExture / Custom Pipeline Multi Texture Es6
  - MultiPipelineを用いたカスタムパイプライン作成方法
  - [Document](https://photonstorm.github.io/phaser3-docs/Phaser.Renderer.WebGL.Pipelines.MultiPipeline.html)
  - 複数のテクスチャに適用した例。共通のエフェクトがかかっているように見える
- Custom Pipeline Single Texture / Custom Pipeline Single Texture Es6<Badge color="red">難しい</Badge>
  - SinglePipelineを用いたカスタムパイプライン作成方法
  - [Document](https://photonstorm.github.io/phaser3-docs/Phaser.Renderer.WebGL.Pipelines.SinglePipeline.html)
  - SinglePipelineはマルチパイプラインの特別なバージョンで通常は使用されない（簡易的な方法に便利？🤔:hammer_and_pick:)
- Multi Color Pipeline / Set Pipeline Data
  - カスタムパイプラインで変数を渡し、違うシェーダーを動かす
- Webgl Info
  - webglのデータを表示
- Container Pipeline
  - 正常に動かない？:hammer_and_pick: