---
title: 'アンダーテイルの文字震え:hammer_and_pick:'
order: 2
showToc: true
tocDepth: 3
---
:hammer_and_pick:

- Display/Masksの震え処理を参考

```
create(){
  const phaser2 = this.add.dynamicBitmapText(60, 200, 'desyrel', 'PHASER', 72);

  phaser2.setDisplayCallback(this.textCallback);
}

textCallback (data)
{
  data.x = Phaser.Math.Between(data.x - 2, data.x + 2);
  data.y = Phaser.Math.Between(data.y - 4, data.y + 4);

  return data;
}

```