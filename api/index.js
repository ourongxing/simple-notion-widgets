import fetch from "node-fetch";
export default async (req, res) => {
  const video = {};
  const paras = {};
  const url = req.query.url;
  if (!url) {
    res.send("B 站链接呢");
    res.end();
  } else {
    video.url = url
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

    if (video.bvid) {
      await fetch("https://bili-api.vercel.app/api/v0/acg_video/list?bvid=" + video.bvid)
        .then(res => res.json())
        .then(res => video.cid = res.data[video.page].cid)
      await fetch(`https://bili-api.vercel.app/api/v0/acg_video/playurl?bvid=${video.bvid}&cid=${video.cid}&type=mp4`)
        .then(res => res.json())
        .then(res => video.direct = res.data[0].url)
      res.writeHead(302, {
        Location: video.direct
      });
      res.end();
    }
    res.end();
  }
}
