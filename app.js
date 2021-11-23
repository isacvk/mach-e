const appBody = document.querySelector("#app-body");

const videoBG = document.querySelector(".video-container");
const video = document.querySelector(".video-player");

const videoStop = document.querySelector("video");

const vidPath = document.getElementById("vid-path");

function videoToggle(path) {
  videoBG.classList.toggle("hidden");
  video.classList.toggle("hidden");
  appBody.classList.toggle("stop-scroll");
  vidPath.src = path;
  videoStop.pause();
  videoStop.currentTime = 0;
}
