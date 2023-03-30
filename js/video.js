var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector(".video");
	video.autoplay = false;
	video.loop = false; 
});

const volume = document.querySelector("#slider");
const volumeInfo = document.getElementById("volume");

function updateVolume() {
  video.volume = volumePercent;
  const volumePercent = volume.value / 100;
  console.log("The current value is " + volumePercent);
  volumeInfo.innerHTML = volume.value + "%";
}

volume.addEventListener("change", updateVolume);


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play(); 
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
}); 

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate); 
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video"); 
	video.playbackRate += 0.1; 
	console.log("Speed is " + video.playbackRate); 
});

document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip ahead Video");
    video.currentTime += 10;
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    }
    console.log("Current time: " + video.currentTime);
});


document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
    video.muted = false;
		console.log("Video Unmute");  
    console.log("Video Unmuted");
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
    video.muted = true; 
		console.log("Video Muted");
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100; 
	updateVolume(); 
	console.log("The current value is " + video.volume); 
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool"); 
  console.log("Vintage");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool"); 
  console.log("Original");
});
