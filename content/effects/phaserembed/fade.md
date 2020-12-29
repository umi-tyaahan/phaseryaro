---
title: "フェード"
order: 1
showToc: true
tocDepth: 3
---

![fade](/assets/fadescene.gif)

ここではフェードイン・フェードアウトの実装方法について記載します。  
フェードは主にシーンの遷移で利用する事が多いと思います。

# 画面全体のフェードイン・フェードアウト

Camera クラスで実現します。

- 公式の Examples
  - http://labs.phaser.io/view.html?src=src\camera\fade.js
  - クリックすると、指定したカラーでフェードアウトする例
- Document
  - https://photonstorm.github.io/phaser3-docs/Phaser.Cameras.Scene2D.Camera.html#fade__anchor

メインコード

```js
this.cameras.main.fade(2000);
```

## シーン遷移での利用

シーン遷移では以下の手順でフェードを利用します。

- カメラのフェードアウトが完了したら、次のシーンを呼び出すイベントを設定
- カメラのフェードアウトを実行

メインコード

```
this.cameras.main.once(
  Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, // completeイベントが来たら一度だけ起動するイベント
  (cam, effect) => {
    this.scene.start('EndingScene');
  },
);

this.cameras.main.fadeOut(3000, 0, 0, 0);
```

# その他のフェード

- 一つの画像(GameObject)
  - Tween を利用して、GameObject のアルファ値を変化させます

メインコード

```
let img = this.add.image(400, 300, 'akane');

this.tweens.add({
  targets: img,
  duration: 2000,
  alpha: 0,
});
```

- 複数の画像(layer)

![fade](/assets/fade.gif)

- Tween を利用して、layer のアルファ値を変化させます
  - group だと、alpha が直接操作できないため、コードが煩雑になります

メインコード

```
let img1 = this.add.image(400, 300, 'akane');
let img2 = this.add.image(450, 300, 'akane');

const layer = this.add.layer();
layer.add([img1,img2]);

this.tweens.add({
targets: layer,
duration: 2000,
alpha: 0
});

```

- 特定の Scene のみフェード
  - フェードさせたいシーン内で`this.cameras.main.fade`をすれば OK です
  - ゲーム画面だけフェードさせて、HUD にはフェードをかけない場合等

TS のサンプルコード

```
import 'phaser';

class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'Main',
    });
  }

  preload(): void {
    this.load.image('sky', 'assets/space3.png');
    this.load.image('akane', 'assets/akane_base7_s.png');
  }

  create(): void {
    this.add.image(400, 300, 'sky');
    this.add.image(400, 300, 'akane');

    this.cameras.main.fade(2000);
  }
  update(): void {
  }
}

class UIScene extends Phaser.Scene {

  constructor() {
    super({
      key: 'UIScene',
      active: true // コレをやらないと、シーンが並列起動しない
    });
  }

  create(): void {
    //  Our Text object to display the Score
    var info = this.add.text(10, 10, 'Score: 0', { font: '48px Arial', color: '#fff' });
  }
  update(): void {
    //console.log(this.acorn.x, this.acorn.y);
  }
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game',
  scene:
    [GameScene, UIScene,]
  ,
};

var game = new Phaser.Game(config);
``
```
