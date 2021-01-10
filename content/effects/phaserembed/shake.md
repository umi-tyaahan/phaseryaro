---
title: "シェイク"
order: 3
showToc: true
tocDepth: 3
---

![shake](/assets/shake.gif)

ここではシェイクの実装方法について記載します。  
シェイクは、対象を揺らします。

主に何か衝突するような演出で利用します。  
ガトリングガンの発射時にキャラクターを揺らすなどして、ユーザーへのフィードバック表現で効果的に利用すると、  
演出がより「ジューシー」になるようです。:hammer_and_pick:

# 画面全体のシェイク

Camera クラスで実現します。

- 公式の Examples
  - http://labs.phaser.io/view.html?src=src/camera/shake.js
  - クリックすると、画面全体が激しくシェイクします。
- Document
  - https://photonstorm.github.io/phaser3-docs/Phaser.Cameras.Scene2D.Camera.html#shake__anchor

メインコード

```js
this.cameras.main.shake(2000);
```

# その他のシェイク

- 一つの画像(GameObject)

  - 画像を直接シェイクさせる API は無いです
    - Camera の Shake と ignore を組み合わせれば間接的に実現可能ですが、実践的な設計ではないです
  - Rex さんが専用の Shake プラグインを作成したようです。管理人も公開しているゲームではこちらを使っています。
    - https://rexrainbow.github.io/phaser3-rex-notes/docs/site/shake-position/
  - tween の x 振動と yoyo を利用した簡単な実装例

メインコード

```
import 'phaser';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  parent: 'game',
  scene: {
    preload: preload,
    create: create,
  },
};

function preload() {

  this.load.image('sky', 'assets/space3.png');
  this.load.image('akane', 'assets/akane_base7_s.png');

  this.load.image('bad', 'assets/bad.png')

  this.load.image('lifeContainer', 'assets/lifeContainer.png');
  this.load.image('lifeBar', 'assets/lifeBar.png');
}

function create() {
  this.add.image(400, 300, 'sky');
  let img1 = this.add.image(400, 300, 'akane');
  let badButton = this.add.image(650, 300, 'bad').setScale(1.5, 1.5).setInteractive();
  let lifeBarMask = createLifeBar(this);

  // this.cameras.main.shake(2000);

  badButton.on('pointerdown', () => {

    //オブジェクトシェイク
    this.tweens.add({
      targets: img1,
      duration: 66,
      scope: img1,
      yoyo: true,
      repeat: 8,
      x: { from: img1.x + 10, to: img1.x - 10 },
      onComplete: () => {
        //演出完了後にライフゲージを減らす
        lifeBarMask.x -= 20;
      },
    });

    budButtonAnimation(this, badButton);

  });
}

function createLifeBar(scene: Phaser.Scene): Phaser.GameObjects.Image {
  let lifeContainer = scene.add.image(32, 23, 'lifeContainer').setOrigin(0, 0);
  let lifeBar = scene.add.image(
    lifeContainer.x + 7,
    lifeContainer.y + 4,
    'lifeBar',
  ).setOrigin(0, 0);

  let lifeBarMask = scene.add.image(lifeBar.x, lifeBar.y, "lifeBar").setOrigin(0, 0).setVisible(false);
  lifeBar.mask = new Phaser.Display.Masks.BitmapMask(scene, lifeBarMask);

  return lifeBarMask
}

function budButtonAnimation(scene: Phaser.Scene, badButton: Phaser.GameObjects.Image): void {
  scene.tweens.add({
    targets: badButton,
    duration: 100,
    y: '+=4',
    yoyo: true,
  });
}

export class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

//HTMLがロードされた後にインスタンスを生成する
window.addEventListener('load', () => {
  const game = new Game(config);
});



```

- 特定の Scene のみシェイク
  - シーン内で`this.cameras.main.shake`をすれば OK です
