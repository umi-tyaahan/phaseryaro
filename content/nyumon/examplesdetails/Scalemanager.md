---
title: 'Scalemanager'
order: 43
showToc: true
tocDepth: 3
---

# 公式

http://labs.phaser.io/index.html?dir=scalemanager

# 概要
GameConfigを設定して、画面の自動拡大縮小の設定を行う。


例は[Phaser.Scale.Scalemode](https://photonstorm.github.io/phaser3-docs/Phaser.Scale.html#.ScaleModeType)の適用した例

<Alert>
この項目はExampleで共通のIFが使えない場合がある。  

Chromeの開発者モードでソースコードを見る。  
</Alert>


# 項目

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