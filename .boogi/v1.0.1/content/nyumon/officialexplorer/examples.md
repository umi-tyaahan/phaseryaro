---
title: 'Examplesの使い方'
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

# トップレベルの分類


- Utils / データ構造・操作系

# 詳細

## Utils
データ構造・操作  

- Array構造
  - 特別な2次元配列の操作ツール
- [R木（空間データの高速検索)](https://tanishiking24.hatenablog.com/entry/introduction_rtree_index)構造<Badge color="blue">おもしろい</Badge>
  - リアルタイムストラテジーで民兵とかを一括選択するアレ！
- Size構造
  - 矩形のAspect比固定操作など