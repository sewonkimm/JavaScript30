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
  /* method를 호출하는 다른 방법 */
  const method = video.paused ? "play" : "pause";
  video[method]();

  /* 내가 구현한 코드 */
  //   if (video.paused) {
  //     video.play();
  //     toggle.innerHTML = "❚❚";
  //   } else {
  //     video.pause();
  //     toggle.innerHTML = "►";
  //   }
}

function updateButton() {
  const icon = video.paused ? "►" : "❚❚";
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

/* Hook up the event listners */
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach(button => button.addEventListener("click", skip));
