---
title: 'Audio'
order: 3
showToc: true
tocDepth: 3
---

# 公式

http://labs.phaser.io/index.html?dir=audio

# 概要
- Phaserの音声に関する例
  - 複雑に音声操作を行えるのはWeb Audioクラス  
  - 基本的な操作のみ行えるのはHtml5 Audioクラス
  - 無音声時に呼ばれるのがNo Audioクラス

ゲーム制作時には、とにかく高機能なWeb Audio使えば良いのだろうか？🤔:hammer_and_pick:

# 項目

## Web Audio
- Play Audio File<Badge color="lightgreen">入門用</Badge>
  - 音声ファイルの再生例
- AudioSprite
  - AudioSprite(サウンドファイルの1ファイルにまとめる）の利用例
  - Web公開時にはなるべく使ったほうが良い。使い方はAssetで解説:hammer_and_pick:
- Markers Pause,Resume / Markers Play
  - Sound Markerの例
  - 再生位置と再生時間をセットしたデータをSound Markerと呼ぶ
  - マーカー位置から音声の再生・停止・再開できる
- Seek<Badge color="blue">おもしろい</Badge>
  - 再生位置の変更の例
  - Seekは音声再生中でもリアルタイムで変更可能
  - catをドラッグすると再生位置が変わる！
  - Guiを利用
- Play Audio From Child Scene
  - シーン遷移して別の音声を再生する例
- Play Sound ON keypress
  - 技術デモ。キーボードで音声再生。ミキシング。
- Reuse Audio Context
  - ゲーム再開時にAudioContextを再利用する例
- Volume Mute rate Detune
  - 音量・ミュート・サウンドレート・デチューンの例
  - Guiを利用

## 技術デモ<Badge color="red">難しい</Badge>
応用的な使い方をしている例です

- Basic Playback and Events
  - いろいろな音声再生機能をイベントを呼び出す
- Loop Delay
  - 音声再生開始をズラしてミキシングする

## HTML5 Audio
:hammer_and_pick:

## No Audio
- NoAudioはブラウザがミュートされている等で、音声無し状態の場合に内部的に利用されるクラス。  
  - 実際に例を動かしても、何も音声が再生されない
  - [Documentの説明はこちら](https://photonstorm.github.io/phaser3-docs/Phaser.Sound.NoAudioSoundManager.html)

> サウンドマネージャの音声なしの実装。ゲーム設定でオーディオが無効になっている場合、またはデバイスがオーディオをサポートしていない場合に使用されます。これは、最小限の機能を提供し、オーディオ再生テクノロジーをサポートしていないデバイスでオーディオを使用するPhaserプロジェクトが中断するのを防ぐSoundManagerロジックの優雅な劣化を表しています。



## SID
 [SID音源](https://sidplayer.cebix.net/)の再生
