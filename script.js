const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const timelapse = document.getElementById('timelapse')

progress.value=0
const changeicon = () =>{
    if(video.paused){
        play.innerHTML='<i class="fas fa-play">'
    }else{
        play.innerHTML='<i class="fas fa-pause">'
    }
}

const videoHandle = () =>{
    if(video.paused){
        video.play()
    }else
    video.pause();
}

const stopvideo = () =>{
    video.currentTime='00';
    video.pause();
    
}

const updateprogress = () =>{
    progress.value=(video.currentTime/video.duration)*100

    let min = Math.floor(video.currentTime/60)
    // console.log(mins)
    let sec = Math.floor(video.currentTime)
    if (sec<10){
        sec = `0${sec}`
    }
    timelapse.innerText = `00:${sec}`   
}

const setVideo = () =>{
    // console.log('working')
    video.currentTime=(+progress.value*video.duration)/100
}

video.addEventListener('click', videoHandle)
video.addEventListener('play', changeicon)
video.addEventListener('pause', changeicon)
video.addEventListener('timeupdate', updateprogress )
play.addEventListener('click', videoHandle)
stop.addEventListener('click', stopvideo)
progress.addEventListener('change', setVideo)


window.onkeypress = function(event) {
    if (event.keyCode == 32) {
      videoHandle()
    }
 }


