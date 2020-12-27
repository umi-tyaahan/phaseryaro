---
title: '開発環境構築'
order: 10
---

このページでは、Phaserの開発環境構築について記載しています。

# 基本的な環境構築

公式ページのチュートリアル、GettingStartedにて、環境構築方法の紹介がされています。  
基本的に、こちらの内容通りに進めて開発環境を作ることができます。

https://phaser.io/tutorials/getting-started-phaser3

## 開発環境のサーバー
ゲームを動かすにはサーバーを立ち上げないといけません。  
チュートリアルの内容では以下のサーバーの例が紹介されています。

- windows
  - WAMPサーバー
  - XAMPPサーバー
  - Cesantaサーバー
- OS X
  - MAMPサーバー
  - 自分でーサーバーを設定

その他オプションとして以下が上げられています。<Badge color="red">難しい</Badge>
- Grunt
- Python
- node.js
- php5

## ガイドブック

- Phaser公式がおすすめする本について:hammer_and_pick:
  - https://blog.ourcade.co/

# Advance！<Badge color="red">難しい</Badge>
Linux上での開発にある程度慣れている方！  
ネットの構築例では、サーバーにはExpressを使う例が多いようです。

https://dev.to/cschratz/getting-started-with-phaser-3-and-node-js-4mbp

管理人も初期の頃はExpressで構築していました。  
ただ、構成上仕方ないですが、プロジェクトフォルダ内のExpress関連のファイルがちょっと邪魔です…😅

webpackでバンドルを行うついでに、webpack serverを実行して動かすという手段もあります。  
以下のTypescript環境構築では、webpack server または webpac-dev-serverを利用しています。

## TypeScript環境
公式はTypescriptのスターターテンプレートを用意しています！  
コーディング中にPhaserAPIの型情報が参照できるため、かなり便利です。

https://github.com/photonstorm/phaser3-typescript-project-template

このスターターのバンドルにはrollup.jsが使われています。  
rollup.jsは設定が分かりやすいのがメリットです。  
ただ、webpackよりもビルド速度は劣ると感じました。

## その他のTypescript環境

公式以外でも、開発環境のテンプレートを公開されている方がいます。  
利用する場合、最後にメンテナンスされたのがいつなのかをチェックしましょう。  
JS/TS,webpack関連は進化が早いので、古い環境だと、思わぬビルドエラーが発生するかも知れません。

- [Phaser 3 and TypeScript](https://github.com/digitsensitive/phaser3-typescript)<Badge color="lightgreen">おすすめ</Badge>
  - webpackを利用する構成です
  - サンプルゲームが豊富です
- mobile / PWA対応の構成:hammer_and_pick:

日本語情報もいくつかあります。  
比較的最近のものを紹介します。

- [Typescriptで構築する記事](https://tech.e3factory.com/programming/2551)
  - webpack構成です。丁寧な解説です。
- [Qiitaの記事](https://qiita.com/KUMANOPUXTU/items/a7c4f935f34fa55dd2aa)<Badge color="lightgreen">おすすめ</Badge>
  - Phaser 3 and TypeScriptを改造した感じです。詳細に内容を解説しています
  - tslintやprettierにも踏み込んでいるので、結構実践的な内容です

## 管理人の環境

参考になるかは分かりませんが、現在(2020/12)の管理人の開発環境を記載します。

- windows 10 / wsl2 / ubuntu
  - wsl2でlinux環境構築する[参考記事はこちら](https://zenn.dev/moroya/articles/0ab24a733e4b7a)
- 開発用に高速な自動ビルド + hotreloadがほしかったので、バンドラーにwebpackを採用
- 上に記載した「Phaser 3 and TypeScript」の構成を参考に構築しました

下記のGithubリポジトリに置いてあります。  
何かの参考にして下さい。

https://github.com/umi-tyaahan/ts_phaser_test

この構成で動作するゲーム画面のデモは以下で見れます。

https://umi-tyaahan.github.io/ts_phaser_test/

