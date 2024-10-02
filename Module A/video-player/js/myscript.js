const video = document.getElementById('video');const play = document.getElementById('play');
const stop = document.getElementById('stop');const progress = document.getElementById('progress');
const time = document.getElementById('time');const totalTime = document.getElementById('totalTime');
const control = document.getElementById('control');
function playPauseVideo() {// function update for the play pause updated icon
    if (video.paused) {    // check if video pause or playing
        video.play(); // if video pause, turn to play the video
    } else {        video.pause(); // if video playing, trun to pause the video 
    }};
function updateIcon() {// function update for the play pause updated icon
    if (video.paused) {play.innerHTML = '<i class="fa fa-play fa-1x"></i>'; // if paused the show the play button
    } else { play.innerHTML = '<i class="fa fa-pause fa-1x"></i>';  // if playing the show the pause button
    }}; function timeUpdateProgress() { // function update for the video progress
    progress.value = (video.currentTime / video. duration) *100; // update the progress bar using current time /  total time
//    console.log(video.currentTime);
    let minutes = Math.floor(video.currentTime / 60);    // use current time to calculate minutes
    if (minutes < 10) { // format minutes to always be 2 digits
        minutes ='0'+ String(minutes);} 
    let seconds = Math.floor(video.currentTime % 60);
    if (seconds < 10) {        seconds = '0' + String(seconds);};
        time.innerHTML =`${minutes}:${seconds}`;
    /// total time of video
    let  totalMinutes = Math.floor(video.duration / 60); // total time show in minutes   // totalMinutes = '' + String(totalMinutes);
    let totalseconds = Math.floor(video.duration % 60);    // totalseconds = '' + String(totalseconds);
   totalseconds = totalTime.innerHTML = String( totalMinutes)+':'+ String( totalseconds);};
function stopVideo() {// function for stop Video
    video.currentTime = 0;  // reset the video time to zero
    video.pause();};  function updateProgressVideo() {// function for progress video while progress bar
    video.currentTime = (progress.value * video.duration) / 100;
};
    


// function  controlShowHide(control) {
//     if (video.onload) {
//      control.style.transform = "translateY(-62px)";
//     control.style.opacity = 5;
//     } else {
//            control.style.transform = "translateY(-62px)";
//     control.style.opacity = 0;
// }
// }


// function show(x) {
//     x.style.transform = "translateY(-62px)";
//     x.style.opacity= 5;
// }

// function hides(x) {
//     x.style.transform = "translateY(-1px)";
//     x.style.opacity= 0.5;
       
// }


// Event Listener
video.addEventListener('click', playPauseVideo); // 1. listen for  click video element
video.addEventListener('pause', updateIcon); // 2. listen for  pause event on video element and updates icon while play and pause video 
video.addEventListener('play', updateIcon); // 3. listen for  play event on video element and updates icon while play and pause video 
video.addEventListener('timeupdate', timeUpdateProgress); // 4. listen for time update with progress bar
play.addEventListener('click', playPauseVideo); // 5. listen for  click play video button
stop.addEventListener('click', stopVideo); // 6. listen for  click play stop button
progress.addEventListener('change', updateProgressVideo); // 7. listen for chane event progress bar
