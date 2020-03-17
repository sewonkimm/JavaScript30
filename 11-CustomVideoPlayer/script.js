/* Get our elements */
const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle");
const skipButtons = document.querySelectorAll("[data-skip");
const ranges = document.querySelectorAll(".player__slider");

/* Build out functions */
function togglePlay() {
  // method를 호출하는 다른 방법
  const method = video.paused ? "play" : "pause";
  video[method]();

  //   if (video.paused) {
  //     video.play();
  //   } else {
  //     video.pause();
  //   }
}

/* Hook up the event listners */
video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);
