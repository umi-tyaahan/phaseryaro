---
title: "ゲームを公開する"
order: 20
---

ここでは、Phaser で作ったゲームの公開方法について記載します。

<Warning>
GitHub と Gitの操作方法について、詳しい説明はしません！

様々な解説サイトがありますので、そちらで習得して下さい。
</Warning>

# GitHub Pages で公開

GitHub では、指定したフォルダを WebPage として公開する機能(hosting 機能)を持っています。  
これを GitHub Pages と呼びます。

https://docs.github.com/ja/free-pro-team@latest/github/working-with-github-pages/getting-started-with-github-pages

基本的に index.html と game.js ファイルのセットを GitHub に登録すれば  
 GitHub Pages 上でゲームが実行できます。

Git と GitHub に慣れている方向けのポイントは以下 2 点です

- `.nojekyll`ファイルを登録する
- Settings から GitHub Pages の設定が行える

参考のリポジトリ

https://github.com/umi-tyaahan/ts_phaser_test

参考のゲーム実行ページ(GitHubPages)

https://umi-tyaahan.github.io/ts_phaser_test/

## 詳細

:hammer_and_pick:

ゲームを開発しているフォルダ（プロジェクトフォルダ）内のファイルの配置は以下のようになっているとします。

```
index.html
game.js
.nojekyll # 空ファイルを下記の手順途中で追加します
```

- GitHub にアカウントを作成

  - GitHub 上でリポジトリ`myPhaserGame`を作成
  - ※`myPhaserGame`はこの解説上付けた適当な名前です
  - ※作成すると下で使う`git remote add origin <追加したいリポジトリ>`のコマンドが表示されます

- Git を PC にインストール

  - `git init`で Phaser プロジェクトフォルダにてリポジトリを初期化
  - myPhaserGame のリモートリポジトリを登録
    - `git remote add origin <追加したいリポジトリ>`

- `.nojekyll`という空のファイルをプロジェクトフォルダに作成

  - GitHub Pgaes ではデフォルトで自動デザイン機能が動いている。Phaser 実行に問題が生じるため停止する。
  - 詳細は[この記事](https://docs.github.com/ja/free-pro-team@latest/github/working-with-github-pages/about-github-pages#%E9%9D%99%E7%9A%84%E3%82%B5%E3%82%A4%E3%83%88%E3%82%B8%E3%82%A7%E3%83%8D%E3%83%AC%E3%83%BC%E3%82%BF)を参照

- GitHub にファイルを送信

  - `git add .`でファイルをステージング
  - `git commit -m 'first commit'`でファイルを登録完了
  - `git push origin master`で GitHub に送信（pull)
  - `2.`で作ったリポジトリのページを見て、ファイルが登録されているのを確認

- GitHub のサイトに行き`myPhaserGame`リポジトリの Settings を開く

  - GitHub Pages の項目で公開するフォルダを選ぶ（root)
  - 公開 URL が決まる。URL をクリックして開く
  - ゲームが実行されているかを確認する

## 参考

こちらは windows 環境での、RPG ツクール MV の GitHub Pages への登録方法の記事です。

http://fanblogs.jp/tabirpglab/archive/206/0

<Info>
無料プランの場合は、PublicリポジトリじゃないとGitHubPagesは利用できません
</Info>

# firebase で公開

:hammer_and_pick:

- firebase tools
  - `firebase deploy --only Hosting`

# itch.io で公開

:hammer_and_pick:

- https://itch.io/docs/creators/html5

# Steam で公開

:hammer_and_pick:

- Phaser で steam ゲーム公開の手順を解説している記事
  - https://qiita.com/laineus/items/0bb62f58910ccdfa1d34
