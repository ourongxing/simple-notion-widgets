module.exports = async (req, res) => {
  const video = {};
  const paras = {};
  const url = req.query.url;
  if (!url) {
    res.send("名字呢？");
    res.end();
  } else {
    const vars = url.split("&");
    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split("=");
      if (pair[0] == "auto") {
        video.url = vars[i].split("auto=")[1];
      }
      else if (pair[0].indexOf('.') != -1) {
        const v = pair[0].split(".");
        if (!paras[v[0]]) {
          paras[v[0]] = {
            [v[1]]: pair[1]
          };
        }
        else paras[v[0]][v[1]] = pair[1];
      }
      else paras[pair[0]] = pair[1];
    }
    if (video.url && /.mp4/.test(video.url)) {
      video.url = video.url.replace(/.mp4/, "")
      if (video.url.indexOf("?p") != -1) {
        video.bvid = video.url.split("video/")[1].split("?p=")[0];
        video.page = parseInt(video.url.split("video/")[1].split("?p=")[1]) - 1;
      }
      else {
        video.bvid = video.url.split("video/")[1];
        video.page = 0;
      }

      if (video.bvid.indexOf("/") != -1) {
        video.bvid = video.bvid.substring(0, video.bvid.length - 1)
      }
      (async () => {
        await fetch("https://bili-api.vercel.app/api/v0/acg_video/list?bvid=" + video.bvid)
          .then(res => res.json())
          .then(res => video.cid = res.data[video.page].cid)
        await fetch(`https://bili-api.vercel.app/api/v0/acg_video/playurl?bvid=${video.bvid}&cid=${video.cid}&type=mp4`)
          .then(res => res.json())
          .then(res => video.direct = res.data[0].url)
      })()
      res.writeHead(302, {
        Location: video.direct
      });
      res.end();
    }

  }
}
