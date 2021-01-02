---
title: "ゲーム素材:hammer_and_pick:"
---

（作成中)

ゲーム制作で完成までに必要なゲーム素材は想像よりもかなり多いです。  
例えば、PRG ツクールには豊富な数のアセットが含まれているため、素材制作の工数をかなり減らすことができるのがメリットです。

Phaser では、アセットが全く無いため、ゲーム素材を集めることが必要です。  
必要なアセットをすべてを自分で作るのもできますが、
今は無料・有料のアセットを入手できる場所も多いです。

- 自分で作る
- 素材の探し方
- 画像
- 音楽(BGM/ジングル)
  - Audiosprite 構築
    - 若干不安
- 国内/海外
- ボタンサイズの最小は 44px

  - apple の公式指針

## ツール

- Tiled

  - https://www.mapeditor.org/
  - 日本語情報
  - https://1-notes.com/phaser3-create-tile-map-with-tiled/

- ワールドマップ

  - https://inkarnate.com/

- スプライトエフェクト:hammer_and_pick:

  - https://effekseer.github.io/jp/index.html

- パーティクル:hammer_and_pick:
  - https://neutrinoparticles.com/en/
  - https://neutrinoparticles.gitlab.io/neutrinoparticles.phaser-doc/master/

## テクスチャーのパッキング

:hammer_and_pick:

ゲームロード時に大量の Asset を個別にユーザーにダウンロードさせると失敗することがあります。  
(Phaser のローダーにリトライがないせい？:hammer_and_pick:)  
そのため、ある程度開発が進んだら texture packer を利用するのが良いでしょう。

### 無料版

http://free-tex-packer.com/

- png の圧縮用 api key 取って入れておくとかなり強力に圧縮されます

要チェック

- 日本語ファイル名だとバグる可能性あり
- packer 内にトップディレクトリを作ってその中にファイルを入れないとプロジェクトが保存できないことがある

- オンライン版
  - https://www.leshylabs.com/apps/sstool/
  - 管理人は使ったことないです

### 有料版

https://www.codeandweb.com/texturepacker

- かなり有名で様々なプラットフォームで利用されている
- 使いやすくて便利
- 体験版あります

## ベクターツールの練習

- https://note.com/hanasakuno/n/nb39c8ac75776
- ヘリコプターを作る
  - https://2dgameartguru.com/creating-apache-helicopter-in-inkscape/
