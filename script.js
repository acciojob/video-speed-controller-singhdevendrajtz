const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

const video = document.querySelector('.video');
const playPauseBtn = document.querySelector('.toggle');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const skipButtons = document.querySelectorAll('[data-skip]');
const volumeSlider = document.querySelector('input[name="volume"]');
const playbackSpeedSlider = document.querySelector('input[name="playbackSpeed"]');

// Function to toggle play and pause
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Function to update the play/pause button icon
function updatePlayPauseIcon() {
    const icon = video.paused ? '►' : '❚ ❚';
    playPauseBtn.textContent = icon;
}

// Function to handle video progress
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

// Function to skip video time
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

// Function to set volume
function setVolume() {
    video.volume = volumeSlider.value;
}

// Function to set playback speed
function setPlaybackSpeed() {
    video.playbackRate = playbackSpeedSlider.value;
}

// Add event listeners
playPauseBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updatePlayPauseIcon);
video.addEventListener('pause', updatePlayPauseIcon);
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(button => button.addEventListener('click', skip));

volumeSlider.addEventListener('input', setVolume);
playbackSpeedSlider.addEventListener('input', setPlaybackSpeed);

// Handle progress bar clicks to seek video
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

// Initial setup
video.volume = volumeSlider.value;
video.playbackRate = playbackSpeedSlider.value;