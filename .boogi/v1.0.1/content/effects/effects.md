---
title: "演出全般"
order: 1
showToc: true
tocDepth: 3
---

ゲームでカッコいい演出をやりたい！

遊んだゲームでのカッコいい演出は模倣したくなります！  
個人制作のゲームはある種、特定の演出を制作したいがためにやっている面もあると思います。

(作成中):hammer_and_pick:

- 自作のゲームへの実装方法について検討
- motiongraphics についての調査 / Animation Effects
  - https://developers.cyberagent.co.jp/blog/archives/14815/
  - https://vook.vc/n/1545
- イージングの活用(具体例)
  - https://note.com/syun77/n/nd796c574fa96
- トランジションとマスク
  - https://phaser.discourse.group/t/use-camera-mask-as-transition-at-start-of-scene/3571/2

# エフェクト対象

:hammer_and_pick:

Phaser では下記のように、エフェクトをかける対象によって効果範囲が変わります。

- camera : 表示領域全体へのエフェクト
- scene : シーン全体
  - UI シーンと Game シーンを重ねて表示し、Game 画面だけにエフェクトをかけるという使い方
- layer / Container:hammer_and_pick: GameObject をグループにまとめたもの
- GameObject : スプライト画像など

上に行くほど広範囲にエフェクトがかかります。

## memo

- フラッシュライト実装
  - 公式エフェクトがきたので古くなってそう
  - https://blog.ourcade.co/posts/2020/phaser-3-object-reveal-flashlight-spotlight-magic-lens/
