// Video player script

const player = document.querySelector("#player");
let video;

// Initialize video
window.addEventListener("load", function() {
  console.log("Video player loaded.");
  video = player.querySelector("video");
  video.autoplay = false;
  video.loop = false;
  console.log("Autoplay is set to " + video.autoplay);
  console.log("Loop is set to " + video.loop);
});

// Event listeners for status display
const status = document.getElementById("status");
document.querySelector("#play").addEventListener("click", function() {
  console.log("Play Video");
  video.play();
  status.innerHTML = "Playing";
});

document.querySelector("#pause").addEventListener("click", function() {
  console.log("Pause Video");
  video.pause();
  status.innerHTML = "Paused";
});

document.querySelector("#mute").addEventListener("click", function() {
  if(video.muted) {
    console.log("Unmute Video");
    video.muted = false;
    this.innerHTML = "Mute";
  } else {
    console.log("Mute Video");
    video.muted = true;
    this.innerHTML = "Unmute";
  }
});

// Video speed controls
document.querySelector("#slower").addEventListener("click", function() {
  console.log("Slow down Video");
  video.playbackRate *= 0.9;
  console.log("Video speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
  console.log("Speed up Video");
  video.playbackRate /= 0.9; 
  console.log("Video speed: " + video.playbackRate);
});

// Video skip controls
document.querySelector("#skip").addEventListener("click", function() {
  console.log("Skip ahead Video");
  video.currentTime += 10;
  if(video.currentTime >= video.duration) {
    video.currentTime = 0;
  }
  console.log("Current time: " + video.currentTime);
});

// Volume controls
const volumeSlider = document.querySelector("#volume-slider");
const volumeDisplay = document.getElementById("volume-display");

function updateVolume() {
  const volumeFraction = volumeSlider.value / 100;
  video.volume = volumeFraction;
  console.log("The current volume is " + volumeFraction);
  volumeDisplay.innerHTML = volumeSlider.value + "%";
}

volumeSlider.addEventListener("change", updateVolume);

// Video effects controls
document.querySelector("#vintage").addEventListener("click", function() {
  console.log("Apply Vintage effect");
  video.classList.add("vintage");
});

document.querySelector("#orig").addEventListener("click", function() {
  console.log("Remove Vintage effect");
  video.classList.remove("vintage");
});
