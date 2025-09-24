const toggleBtn = document.querySelector('.toggle');
const video = document.querySelector('.player__video');
const volumeBtn = document.querySelector('.volume');
const playbackSpeedBtn = document.querySelector('.playbackSpeed');
const rewindBtn = document.querySelector('.rewind');
const forwardBtn = document.querySelector('.forward');
const progressFilled = document.querySelector('.progress__filled');


toggleBtn.addEventListener('click',()=> {
	if(video.paused) {
		video.play();
		toggleBtn.textContent = `❚ ❚`;
	} else {
		video.pause();
		toggleBtn.textContent = `►`;
	}	
});

volumeBtn.addEventListener('input',()=>{
	video.volume=volumeBtn.value;
});
playbackSpeedBtn.addEventListener('input',()=>{
	video.playbackRate=playbackSpeedBtn.value;
});
rewindBtn.addEventListener('click',()=>{
	video.currentTime-=10;
});
forwardBtn.addEventListener('click',()=>{
	video.currentTime+=25;
});
video.addEventListener('timeupdate', ()=> {
	const percent = (video.currentTime/video.duration) *100;
	progressFilled.style.width=`${percent}%`;
});