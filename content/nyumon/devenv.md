---
title: "開発環境構築"
order: 10
---

このページでは、Phaser の開発環境構築について記載しています。

# 基本的な環境構築

公式ページのチュートリアル、GettingStarted にて、環境構築方法の紹介がされています。  
基本的に、こちらの内容通りに進めて開発環境を作ることができます。

https://phaser.io/tutorials/getting-started-phaser3

## 開発環境のサーバー

ゲームを動かすにはサーバーを立ち上げないといけません。  
チュートリアルの内容では以下のサーバーの例が紹介されています。

- windows
  - WAMP サーバー
  - XAMPP サーバー
  - Cesanta サーバー
- OS X
  - MAMP サーバー
  - 自分でーサーバーを設定

その他オプションとして以下が上げられています。<Badge color="red">難しい</Badge>

- Grunt
- Python
- node.js
- php5

## ガイドブック

- Phaser 公式がおすすめする本について:hammer_and_pick:
  - https://blog.ourcade.co/

# Advance！<Badge color="red">難しい</Badge>

Linux 上での開発にある程度慣れている方！  
ネットの構築例では、サーバーには Express を使う例が多いようです。

https://dev.to/cschratz/getting-started-with-phaser-3-and-node-js-4mbp

管理人も初期の頃は Express で構築していました。  
ただ、構成上仕方ないですが、プロジェクトフォルダ内の Express 関連のファイルがちょっと邪魔です…😅

webpack でバンドルを行うついでに、webpack server を実行して動かすという手段もあります。  
以下の Typescript 環境構築では、webpack server または webpac-dev-server を利用しています。

## TypeScript 環境

公式は Typescript のスターターテンプレートを用意しています！  
コーディング中に PhaserAPI の型情報が参照できるため、かなり便利です。

https://github.com/photonstorm/phaser3-typescript-project-template

このスターターのバンドルには rollup.js が使われています。  
rollup.js は設定が分かりやすいのがメリットです。  
ただ、webpack よりもビルド速度は劣ると感じました。

## その他の Typescript 環境

公式以外でも、開発環境のテンプレートを公開されている方がいます。  
利用する場合、最後にメンテナンスされたのがいつなのかをチェックしましょう。  
JS/TS,webpack 関連は進化が早いので、古い環境だと、思わぬビルドエラーが発生するかも知れません。

- [Phaser 3 and TypeScript](https://github.com/digitsensitive/phaser3-typescript)<Badge color="lightgreen">おすすめ</Badge>
  - webpack を利用する構成です
  - サンプルゲームが豊富です
- [ネイティブアプリ化&PWA&webpack 対応の構成](https://github.com/yandeu/phaser-project-template)
  - 管理人はまだ試してませんが、最強に見えます:hammer_and_pick:
  - メンテナンスが活発です

日本語情報もいくつかあります。  
比較的最近のものを紹介します。

- [Typescript で構築する記事](https://tech.e3factory.com/programming/2551)
  - webpack 構成です。丁寧な解説です。
- [Qiita の記事](https://qiita.com/KUMANOPUXTU/items/a7c4f935f34fa55dd2aa)<Badge color="lightgreen">おすすめ</Badge>
  - Phaser 3 and TypeScript を改造した感じです。詳細に内容を解説しています
  - tslint や prettier にも踏み込んでいるので、結構実践的な内容です

## 管理人の環境

参考になるかは分かりませんが、現在(2020/12)の管理人の開発環境を記載します。

- windows 10 / wsl2 / ubuntu
  - wsl2 で linux 環境構築する[参考記事はこちら](https://zenn.dev/moroya/articles/0ab24a733e4b7a)
- 開発用に高速な自動ビルド + hotreload がほしかったので、バンドラーに webpack を採用
- 上に記載した「Phaser 3 and TypeScript」の構成を参考に構築しました

下記の Github リポジトリに置いてあります。  
何かの参考にして下さい。

https://github.com/umi-tyaahan/ts_phaser_test

この構成で動作するゲーム画面のデモは以下で見れます。

https://umi-tyaahan.github.io/ts_phaser_test/
