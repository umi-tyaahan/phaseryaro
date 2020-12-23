---
title: 'Examplesの使い方１'
order: 1
showToc: true
tocDepth: 3
---

# 機能の探し方

Phaserゲームフレームワークでゲーム制作をする場合、  
フレームワークの機能を調べるにはいくつか方法があると思います。

1.  [公式のAPI Documents](https://photonstorm.github.io/phaser3-docs/)から機能を調べる
2. [公式のExamples](http://labs.phaser.io/index.html)から機能を調べる
3. web上のチュートリアルを探す
4. githubで公開されているサンプルを見る

機能について、実際の画面上の挙動を確認するには2.の方法が良いと思います。  
しかし、PhaserのExamplesは現在、1772もあります！  

実際にExamplesに飛ぶと、ある程度の分類はされているようですが、いまいち探し方が分からない…  
ここでは、Examplesの分類ごとにどんな物があるかを調べた結果を記載しています。

<Info>
Phaser公式サイト内のExamplesとラボ(http://labs.phaser.io/)のExamplesは基本的に同じ内容のようです。

すぐにメンテナンスされそうなのはラボの方だと思うので、基本的にそちらの内容で解説していきます。
</Info>

<LinkCard title="ローカルでExampleを見る方法はこちら" url="/nyumon/devenv/buildlocalexamples" />

# サイトの使い方

:hammer_and_pick:

- サムネイルが似ているものは、近い機能の説明となっている
例えばランスロット

# コードの読み解き方のヒント

## クリックイベントに着目する
クリックして変化するExamplsは、  
以下のような`pointerdown`イベントから読み解いていくとコードが追いやすい。

```js
this.input.on('pointerdown', function (pointer) {
    const child = this.children.getAt(0);
    child.y -= 32;
    this.children.bringToTop(child);
}, this);
```

Phaserでは、`XXX.on`または`XXXX.once`で大体のイベントを設定している。

## 演出用のTweenを止めてみる

Examplesではアニメーションの見栄えが非常に良くなるTweenが多用されている。  

```
this.tweens.add({
  ///tween設定
})
```

Examplesのコード量が多く大事な処理がわからない場合は、
試しにtween部分をコメントアウトして動かしてみる。

## Groupのrepeat数を1にしてみる

大量のGameObjectを動かしている例は、  
まずはGroup内のGameObject数を１つにしてみると基本的な動きが追いやすい。

