Notion 提供了非常强大且开放的 Embed 功能，但是 Notion 并没有针对国内的音乐平台，视频平台进行优化，使得无法嵌入其中。为了解决这个问题，所以我基于 Aplayer 和 Dplayer 做了两个小组件，可以自动解析 QQ 音乐，网易云音乐的歌曲，专辑，以及歌单，还可以解析 B 站 1080P 的视频，并提供了众多设置选项（视频播放器暂时不开放）。

## Music Player

> 基于 [Aplayer](https://github.com/MoePlayer/APlayer) & [MetingJS](https://github.com/metowolf/MetingJS)

![](./img/1.png)
只需要 https://simple-notion-widgets.vercel.app/music-player/index.html?auto=https://y.qq.com/n/yqq/playlist/7888484143.html

### 快速开始
> 你必须在浏览器中使用[ QQ 音乐 ](https://y.qq.com/)或者[ 网易云音乐 ](https://music.163.com/) 来获取这些链接，QQ 音乐可能更简单。
- https://music.163.com/#/song?id=28754103
  - https://simple-notion-widgets.vercel.app/music-player/index.html?server=netease&type=song&id=28754103
- https://music.163.com/#/playlist?id=60198
  - https://simple-notion-widgets.vercel.app/music-player/index.html?server=netease&type=playlist&id=60198
- https://y.qq.com/n/yqq/song/001RGrEX3ija5X.html
  - https://simple-notion-widgets.vercel.app/music-player/index.html?auto=https://y.qq.com/n/yqq/song/001RGrEX3ija5X.html
- https://y.qq.com/n/yqq/playlist/7888484143.html
  - https://simple-notion-widgets.vercel.app/music-player/index.html?auto=https://y.qq.com/n/yqq/playlist/7888484143.html
- 你也可以使用自己的音乐资源，只要可以被访问即可。如果链接过长或出现了`&?`之类的符号，需要使用 [suowo.cn](https://suowo.cn/) 来缩短链接.
  - https://simple-notion-widgets.vercel.app/music-player/index.html?name=rainymood&artist=rainymood&url=https://rainymood.com/audio1110/0.m4a&cover=https://rainymood.com/i/badge.jpg

### 选项

|option               |default      |description|
|--------------------|------------|----------|
|id              |**require**   |song id / playlist id / album id / search keyword|
|server          |**require**   |music platform: `netease`, `tencent`, `kugou`, `baidu`|
|type            |**require**   |`song`, `playlist`, `album`, `search`, `artist`|
|auto            |options       |music link, support: `tencent`|
|fixed           |`false`       |enable fixed mode|
|mini            |`false`       |enable mini mode|
|autoplay        |`false`       |audio autoplay|
|theme           |`#2980b9`     |main color|
|loop            |`all`         |player loop play, values: 'all', 'one', 'none'|
|order           |`list`        |player play order, values: 'list', 'random'|
|preload         |`auto`        |values: 'none', 'metadata', 'auto'|
|volume          |`0.7`         |default volume, notice that player will remember user setting, default volume will not work after user set volume themselves|
|mutex           |`true`        |prevent to play multiple player at the same time, pause other players when this player start play|
|lrc-type         |`0`           |lyric type|
|list-folded      |`false`       |indicate whether list should folded at first|
|list-max-height   |`340px`       |list max height|
|storage-name     |`metingjs`    |localStorage key that store player setting|

## Video Player
> 基于 [Dplayer](https://github.com/MoePlayer/DPlayer) & [bilili](https://github.com/SigureMo/bilili)
