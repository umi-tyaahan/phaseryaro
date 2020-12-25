---
title: 'Plugins'
order: 40
showToc: true
tocDepth: 3
---

# 公式

http://labs.phaser.io/index.html?dir=plugins

# 概要

プラグインの利用方法の例
- ベースクラスの継承とプラグイン化
- プラグイン自体の紹介

プラグインは2種類
- Global Plugin
- Scene Plugin

違いについては、Documentsから引用する  
https://photonstorm.github.io/phaser3-docs/Phaser.Plugins.PluginManager.html

>グローバルプラグインは、シーンではなくプラグインマネージャー内に存在するプラグインです。PluginManager.getキーを呼び出して提供することで、アクセスできます。この方法でプラグインをリクエストするシーンはすべて同じプラグインインスタンスにアクセスできるため、複数のシーンで1つのプラグインを使用できます。
> 
シーンプラグインは、シーン内での実行専用のプラグインです。これらは、インスタンスがプラグインマネージャー内ではなく、代わりにSceneSystemsクラス内に存在するという点でグローバルプラグインとは異なります。また、作成されたすべてのシーンには、シーンプラグインの独自のインスタンスが与えられます。コアシーンプラグインの例には、入力プラグイン、Tweenプラグイン、物理プラグインが含まれます。

# 項目

- Load Scene Plugin Test 1 / Load Scene Plugin Test 2<Badge color="lightgreen">入門用</Badge>
  - 簡単なScenePluginの利用方法
- Global Plugin Test 1<Badge color="lightgreen">入門用</Badge>
  - GameConfigを利用した簡単なGlobalPlugin利用方法
  - GameConfigでPluginを読み込みSceneで利用する例
- Global Scene Plugin
  - GameConfigでPluginを読み込み、変数にmappingする。Sceneで呼び出す
- Load Plugin Test 1 / Load Plugin Test 2
  - Sceneから呼び出す、簡単なGlobalPluginの利用方法
- Add Scene Plugin In config<Badge color="blue">おもしろい</Badge>
  - SceneにPluginを読み込む例
  - 画像を並べて文字を表現するプラグインの紹介
- Add Global Plugin
  - LoaderでPluginを読み込む例
  - 画像を並べて文字を表現するプラグイン（上のやつより低機能）
- Custom File Type
  - テキストファイルローダーを継承してテキスト独自処理を行うプラグインの作例
  - 文字列をハッカー用語に変換(Leeting)するプラグインの紹介
- Custom Game Object
  - Imageを継承して独自のGameObjectを生成するプラグインの作例
  - 道化師の画像を生成するプラグイン
- Destroy Game With Plugin
  - プラグイン読み込んだゲームのシャットダウンと再スタート
  - 終了時には特にプラグイン固有の後処理はいらない
  - Random名称生成プラグイン
- Install Global Plugin At Runtime / Multiple Global Plugin Instances<Badge color="red">難しい</Badge>
  - 同じプラグインを複数利用する例
- Scene Plugin Test 1 / Scene Plugin Test 2 / Scene Plugin Test 3
  - Scene Pluginの具体的な使用方法
  - GameConfigで変数名にmappingすれば、Sceneで簡単に呼び出せる
- Start And Stop A Plugin
  - Pluginに定義されたMethod呼び出し方法の例
