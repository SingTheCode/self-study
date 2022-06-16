const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();
const audio1 = document.querySelector("#audio1");
const audio2 = document.querySelector("#audio2");
const playButton1 = document.querySelector("button1");
const playButton2 = document.querySelector("button2");

const track1 = audioContext.createMediaElementSource(audio1);
const track2 = audioContext.createMediaElementSource(audio2);

playButton1.addEventListener(
  "click",
  function () {
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }
    console.log(this.dataset.playing);
    if (this.dataset.playing === "false") {
      setTimeout(() => {
        audio1.play();
        this.dataset.playing = "true";
      }, 1000);
    } else if (this.dataset.playing === "true") {
      setTimeout(() => {
        audio1.pause();
        this.dataset.playing = "false";
      }, 2000);
    }
  },
  false
);

audio1.addEventListener(
  "ended",
  () => {
    playButton1.dataset.playing = "false";
  },
  false
);

const gainNode = audioContext.createGain();
track1.connect(gainNode).connect(audioContext.destination);
const volumecontrol = document.querySelector("#volume");
volumecontrol.addEventListener("input", function () {
  gainNode.gain.value = this.value;
  console.log(gainNode);
});

// playButton2.addEventListener(
//   "click",
//   function () {
//     if (audioContext.state === "suspended") {
//       audioContext.resume();
//     }
//     console.log(this.dataset.playing);
//     if (this.dataset.playing === "false") {
//       setTimeout(() => {
//         audio2.play();
//         this.dataset.playing = "true";
//       }, 1000);
//     } else if (this.dataset.playing === "true") {
//       setTimeout(() => {
//         audio2.pause();
//         this.dataset.playing = "false";
//       }, 2000);
//     }
//   },
//   false
// );

// const gainNode2 = audioContext.createGain();
// track1.connect(gainNode2).connect(audioContext.destination);
// const volumecontrol2 = document.querySelector("#volume2");
// volumecontrol2.addEventListener("input", function () {
//   gainNode2.gain.value = this.value;
//   console.log(gainNode2);
// });
