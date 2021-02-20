# Notion Widgets With [Netlify](https://app.netlify.com/)
## 1. Music Player
> Based on [Aplayer](https://github.com/MoePlayer/APlayer) & [MetingJS](https://github.com/metowolf/MetingJS)

![](./img/1.png)
Just use https://simple-notion-widgets.netlify.app/music-player?auto=https://y.qq.com/n/yqq/playlist/7888484143.html

### Quick Start
> You must use [QQ Music](https://y.qq.com/) or [NetEase Cloud Music](https://music.163.com/) on Web to get the URL.  Using QQ music may be easier.
- https://music.163.com/#/song?id=28754103
  - https://simple-notion-widgets.netlify.app/music-player?server=netease&type=song&id=28754103
- https://music.163.com/#/playlist?id=60198
  - https://simple-notion-widgets.netlify.app/music-player?server=netease&type=playlist&id=60198
- https://y.qq.com/n/yqq/song/001RGrEX3ija5X.html
  - https://simple-notion-widgets.netlify.app/music-player?auto=https://y.qq.com/n/yqq/song/001RGrEX3ija5X.html
- https://y.qq.com/n/yqq/playlist/7888484143.html
  - https://simple-notion-widgets.netlify.app/music-player?auto=https://y.qq.com/n/yqq/playlist/7888484143.html
- If you want to use paid songs, you may need to find resources yourself. **Any links are not allowed to appear \ and &**, otherwise you need to use shortening link services, such as [suowo.cn](https://suowo.cn/).
  - https://simple-notion-widgets.netlify.app/music-player?name=rainymood&artist=rainymood&url=https://rainymood.com/audio1110/0.m4a&cover=https://rainymood.com/i/badge.jpg

### Option

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

## 2. Video Player
> Based on [Dplayer](https://github.com/MoePlayer/DPlayer)
![](./img/1.png)
Just use https://simple-notion-widgets.netlify.app/video-player?video.url=https://1drv.ws/v/s!Aqj17zg0iQ5Sg9waDXVBOoL6iYDAww&video.pic=

### Quick Start
> **Any links are not allowed to appear \ and &**, otherwise you need to use shortening link services, such as [suowo.cn](https://suowo.cn/).

### Option

| Name                 | Default                            | Description                                                  |
| -------------------- | ---------------------------------- | ------------------------------------------------------------ |
| live                 | false                              | enable live mode, see [#live](https://dplayer.js.org/guide.html#live) |
| autoplay             | false                              | video autoplay                                               |
| theme                | '#b7daff'                          | main color                                                   |
| loop                 | false                              | video loop                                                   |
| lang                 | navigator.language.toLowerCase()   | values: 'en', 'zh-cn', 'zh-tw'                               |
| screenshot           | false                              | enable screenshot, if true, video and video poster must enable Cross-Origin |
| airplay              | true                               | enable airplay in Safari                                     |
| hotkey               | true                               | enable hotkey, support FF, FR, volume control, play & pause  |
| preload              | 'auto'                             | values: 'none', 'metadata', 'auto'                           |
| volume               | 0.7                                | default volume, notice that player will remember user setting, default volume will not work after user set volume themselves |
| playbackSpeed        | [0.5, 0.75, 1, 1.25, 1.5, 2]       | optional playback speed, or or you can set a custom one      |
| logo                 | -                                  | showing logo in the top left corner, you can adjust its size and position by CSS |
| apiBackend           | -                                  | getting and sending danmaku in your way, see [#live](https://dplayer.js.org/guide.html#live) |
| video                | -                                  | video info                                                   |
| video.quality        | -                                  | see [#Quality switching](https://dplayer.js.org/guide.html#quality-switching) |
| video.defaultQuality | -                                  | see [#Quality switching](https://dplayer.js.org/guide.html#quality-switching) |
| video.url            | -                                  | video url                                                    |
| video.pic            | -                                  | video poster                                                 |
| video.thumbnails     | -                                  | video thumbnails, generated by [DPlayer-thumbnails(opens new window)](https://github.com/MoePlayer/DPlayer-thumbnails) |
| video.type           | 'auto'                             | values: 'auto', 'hls', 'flv', 'dash', 'webtorrent', 'normal' or other custom type, see [#MSE support](https://dplayer.js.org/guide.html#mse-support) |
| video.customType     | -                                  | custom video type, see [#MSE support](https://dplayer.js.org/guide.html#mse-support) |
| subtitle             | -                                  | external subtitle                                            |
| subtitle.url         | `required`                         | subtitle url                                                 |
| subtitle.type        | 'webvtt'                           | subtitle type, values: 'webvtt', 'ass', but only webvtt is supported for now |
| subtitle.fontSize    | '20px'                             | subtitle font size                                           |
| subtitle.bottom      | '40px'                             | the distance between the subtitle and player bottom, values like: '10px' '10%' |
| subtitle.color       | '#fff'                             | subtitle color                                               |
| danmaku              | -                                  | showing danmaku                                              |
| danmaku.id           | `required`                         | danmaku pool id, it must be unique                           |
| danmaku.api          | `required`                         | see [#Danmaku API](https://dplayer.js.org/guide.html#danmaku-api) |
| danmaku.token        | -                                  | back end verification token                                  |
| danmaku.maximum      | -                                  | danmaku maximum quantity                                     |
| danmaku.addition     | -                                  | additional danmaku, see [#bilibili danmaku](https://dplayer.js.org/guide.html#bilibili-danmaku) |
| danmaku.user         | 'DIYgod'                           | danmaku user name                                            |
| danmaku.bottom       | -                                  | values like: '10px' '10%', the distance between the danmaku bottom and player bottom, in order to prevent warding off subtitle |
| danmaku.unlimited    | false                              | display all danmaku even though danmaku overlap, notice that player will remember user setting, default setting will not work after user set it themselves |
| contextmenu          | []                                 | custom contextmenu                                           |
| highlight            | []                                 | custom time markers upon progress bar                        |
| mutex                | true                               | prevent to play multiple player at the same time, pause other players when this player start play |