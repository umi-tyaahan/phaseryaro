---
title: 'Events'
order: 21
showToc: true
tocDepth: 3
---

# 公式

http://labs.phaser.io/index.html?dir=events

# 概要
イベント処理の例。

GameObjectにイベントを追加して、GameObjectを削除すると、  
イベントがメモリ上に残ってしまう。  
不要になったイベントは削除しよう。メモリリーク原因になる

一度だけイベントを起動したい場合の`once`は便利。

# 項目

- Emit Scene Event<Badge color="lightgreen">入門用</Badge>
    - `this.events.on` : イベント名と関数の登録
    - `events.emit` : イベント名で実際に呼び出し
- Turn Off Event Handler
  - イベントの削除方法
- Once Event
  - 一度だけイベントを動かしたい場合の例。かなり使う！
  - 複数回イベントが呼ばれても初回だけ反応する
- Event Arguments
  - 引数付きイベント呼び出し 
- Create Event Emitter
  - イベント作成と呼び出しの例
- Game Object Events
  - GameObjectへのイベント登録と呼び出し
- Emit Using Symbols
  - ES6のsynbol()をりようしたイベント名称の登録
- Turn Off Anonymous Event Handler
  - Event内での自身のイベント削除
- Listen To Game Object Event
  - イベント呼び出しのチェーン
  - マウスクリックイベントからGameObjectイベントを呼び出す