const appBody = document.querySelector("#app-body");

const videoBG = document.querySelector(".video-container");
const video = document.querySelector(".video-player");

const videoPlayer = document.querySelector("video");

function videoToggle(path) {
  videoBG.classList.toggle("hidden");
  video.classList.toggle("hidden");
  appBody.classList.toggle("stop-scroll");
  videoPlayer.src = path;
  // videoStop.pause();
  videoPlayer.currentTime = 0;
}
