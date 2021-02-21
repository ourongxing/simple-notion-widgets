const video = {};
const paras = {};
const query = window.location.search.substring(1);
const vars = query.split("&");
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
if (video.url) {
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
    await fetch("https://bili-api.vercel.app/api/v0/video_info?bvid=" + video.bvid)
      .then(res => res.json())
      .then(res => res.data.picture)
      .then(res => {
        // video.pic = res.replace(/http/, "https")
        video.pic = res
      })
    await fetch("https://bili-api.vercel.app/api/v0/acg_video/list?bvid=" + video.bvid)
      .then(res => res.json())
      .then(res => video.cid = res.data[video.page].cid)
    await fetch(`https://bili-api.vercel.app/api/v0/acg_video/playurl?bvid=${video.bvid}&cid=${video.cid}&type=mp4`)
      .then(res => res.json())
      .then(res => video.direct = res.data[0].url)
    const picPre = () => {
      const Img = document.createElement("img");
      Img.setAttribute("src", video.pic);
      Img.crossOrigin = '';
      Img.style.display = "none";
      document.body.appendChild(Img)
    }
    await picPre();
    if (!paras.video) {
      paras.video = {}
    }
    paras.video.url = video.direct;
    paras.video.pic = video.pic;
    const options = Object.assign({ container: document.getElementById('dplayer') }, paras);
    const dp = await new DPlayer(options)
  })()
}
else {
  const options = Object.assign({ container: document.getElementById('dplayer') }, paras);
  const dp = new DPlayer(options)
}