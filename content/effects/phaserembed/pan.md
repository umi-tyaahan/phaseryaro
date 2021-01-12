---
title: "パン"
order: 4
showToc: true
tocDepth: 3
---

![pan](/assets/pan.gif)

ここではパンの実装方法について記載します。

Camera クラスには、パンの API があります。  
これを利用すると、カメラをワールド座標上の指定位置にスムーズに移動させる事ができます。  
GameObject にはカメラに追従させるかどうか設定が可能です。(setScrollFactor)

マップにおいて、注目すべき点を強調させる演出などで利用できるでしょう。

# パン

Camera クラスで実現します。

- 公式の Examples
  - http://labs.phaser.io/view.html?src=src/camera/pan%20to.js
  - クリックすると、ワールドマップの違う座標に飛びます
  - カメラのズームも同時に行っています
    - ズームでドットが荒れないように、GameConfig で pixel perfect(pixcel art モード)に設定されています
- Document
  - https://photonstorm.github.io/phaser3-docs/Phaser.Cameras.Scene2D.Camera.html#pan__anchor

メインコード

```js
this.cameras.main.pan(767, 1096, 2000, "Power2");
```
