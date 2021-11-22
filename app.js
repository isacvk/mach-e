const appBody = document.querySelector("#app-body");

const video1 = document.querySelector(".video-1");

const btnClose = document.querySelector(".btn-close");
const videoBG = document.querySelector(".video-container");
const video = document.querySelector(".video-player");

video1.addEventListener("click", function () {
  videoBG.classList.toggle("hidden");
  video.classList.toggle("hidden");
  appBody.classList.toggle("stop-scroll");
});

btnClose.addEventListener("click", function () {
  //   console.log("Closed");
  videoBG.classList.toggle("hidden");
  video.classList.toggle("hidden");
});
