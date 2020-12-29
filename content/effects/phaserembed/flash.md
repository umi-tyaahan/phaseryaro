---
title: "フラッシュ"
order: 1
showToc: true
tocDepth: 3
---

![flash](/assets/flash.gif)

ここではフラッシュの実装方法について記載します。  
フラッシュは指定色に素早く変化し、変化した色がすぐにフェードする効果です。

<Info>
強い白色フラッシュは、ゲームプレイヤーにストレスとなります。

フラッシュ効果を利用する場合は加減が必要でしょう。:hammer_and_pick:
</Info>

# 画面全体のフラッシュ

Camera クラスで実現します。

- 公式の Examples
  - http://labs.phaser.io/edit.html?src=src\camera\flash.js
  - クリックすると、フラッシュし、ロゴを表示し、終了するとロゴが消えます。
- Document
  - https://photonstorm.github.io/phaser3-docs/Phaser.Cameras.Scene2D.Camera.html#flash__anchor

メインコード

```js
this.cameras.main.flash();
```

# その他のフラッシュ

- 一つの画像(GameObject)

  - 画像を直接フラッシュさせる API は無いです
    - Camera の Flash と ignore を組み合わせれば間接的に実現可能ですが、実践的な設計ではないです
  - Rex さんの記事ではグロー後処理フィルターを利用しています
    - https://rexrainbow.github.io/phaser3-rex-notes/docs/site/shader-glowfilter/
  - 3.50 で PostFX として追加されている？:hammer_and_pick:

- 横スクロールアクションのダメージ演出
  - ダメージを受けたらプレイヤーキャラクターが数回点滅するアレ
  - Tween を利用して、白色で TintFill 、Tint 取り消しを繰り返します
  - フェード的な中間色演出はできません

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

  badButton.on('pointerdown', () => {

    //オブジェクトフラッシュ
    this.tweens.add({
      targets: img1,
      duration: 100,
      scope: img1,
      onLoop: () => {
        img1.isTinted ? img1.clearTint() : img1.setTintFill(0xffffff);
      },
      loop: 4,
      onComplete: () => {
        //演出完了後にライフゲージを減らす
        lifeBarMask.x -= 4;
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

- 特定の Scene のみフラッシュ
  - フェードさせたいシーン内で`this.cameras.main.flash`をすれば OK です
