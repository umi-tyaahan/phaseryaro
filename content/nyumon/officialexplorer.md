---
title: "公式サイトの使い方"
order: 20
---

公式サイトはこちら！  
:rocket: http://phaser.io/

Phaser は長い間 VersionUP を繰り返してきており、  
それに合わせて、公式サイトにもかなりの情報が集まっています。

ゲーム制作時にどのように公式サイトを活用するかを解説します。

# サイト構成

サイトトップにあるリンクより、個別の情報へと飛べます。

- news
  - 最新の公式の update 情報や、Phaser 製の最近のインディーゲームなどの紹介
  - イベント情報や過去の記事などがあります
  - 更新頻度はそれほどではないようです
- learn<Badge color="red">重要</Badge>
  - チュートリアルや Examples,API Documents へのリンク
  - Tip を紹介したブログ記事へのリンクはここから飛ぶのが良さそうです
- download
  - Phaser 本体の Download に関するものがあります[^1]
    - 直接ここから DL するよりも、チュートリアル通りに進めたほうが良いと思います
  - 最上部の、`Download Phaser from GitHub`より更に深い項目が表示されます
    - ロゴ画像の取得
    - ライセンスやバグの報告方法など
- examples<Badge color="red">重要</Badge>
  - フレームワークの機能が実際に試せます
    - 若干表示が重いです。可能なら[Labo](http://labs.phaser.io/index.html)の方を見たほうが良いでしょう
    - 💡 GitHub からローカル環境に落として見るのが最速です！

<LinkCard title="やりかたはこちら" url="/nyumon/devenv/buildlocalexamples" />

- community
  - [コミュニティフォーラム](https://phaser.discourse.group/)へのリンクがあります
    - 技術的な問題にハマったらまずはここで検索かけるのが良いと思います
  - 公式の Discord と Twitter の紹介など
- plugin
  - 有料のコンテンツの販売など
    - Phaser2 のものが含まれているので、購入時は注意が必要でしょう
  - 開発者サポート・本・動画コース等
    - 本体の大きなアップデート(3.5)がありましたので、講座などの対応がどうなってるか？:hammer_and_pick:

# 個人的な感想

入門時には tutorial ページを見ます。（当たり前だが 😤）

ある程度開発環境に慣れたら、Examples や Community を覗く感じで使います。  
問題にハマった場合、ネット検索だと Phaser2 系の内容がしばしば出てしまうので、  
Community ページで、Phaser3 に絞り込んで検索すると良いかも知れません。

download にある Tip の記事は、特定の機能への理解を深めることができるチャンスです。  
Examples で単機能のサンプルを見ていても、応用の仕方が思いつかない場合があるためです。

# Advance！

ある程度コーディングの経験のあるソフトウェア開発者ですか？  
Phaser の GitHub リポジトリの Readme.md には開発者向けの情報が多く記載されています。

https://github.com/photonstorm/phaser

- チュートリアルとガイドへの案内
- TypeScript 向け情報<Badge color="red">重要</Badge>
- カスタムビルド方法
- バグ報告など、Contributing 方法の説明[^2]

是非チェックしてみて下さい。

[^1]: 最近の開発コードが subaru とか remu となってますが、これは[リゼロ](http://re-zero-anime.jp/tv/)か？🤔
[^2]: この間初めてプルリクを送りました 😁 緊張するぜ！
