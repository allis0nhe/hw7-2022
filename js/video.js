let video;

window.addEventListener("load", function() {
  console.log("Good job opening the window");
  video = document.querySelector("video");
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
  updateVolume();
  status.innerHTML = "Playing";
});

document.querySelector("#pause").addEventListener("click", function() {
  console.log("Pause Video");
  video.pause();
  status.innerHTML = "Paused";
});

document.querySelector("#mute").addEventListener("click", function() {
  if (video.muted) {
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
  if (video.currentTime >= video.duration) {
    video.currentTime = 0;
  }
  console.log("Current time: " + video.currentTime);
});

// Volume controls
const volumeSlider = document.querySelector("#slider");
const volumeDisplay = document.querySelector("#volume");

function updateVolume() {
  volumeDisplay.innerHTML = Math.round(video.volume * 100) + "%";
  volumeSlider.value = Math.round(video.volume * 100);
  console.log("The current value is " + video.volume);
}

volumeSlider.addEventListener("input", function() {
  video.volume = this.value / 100;
  updateVolume();
});

// Video effects controls
document.querySelector("#vintage").addEventListener("click", function() {
  console.log("Apply Vintage effect");
  video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
  console.log("Remove Vintage effect");
  video.classList.remove("oldSchool");
});
