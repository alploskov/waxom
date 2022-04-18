_video = () => {
    let videoEl = document.getElementsByTagName('video')[0];
    document.getElementById('start-video').onclick = () => {
        document.getElementById('video-palyer').style.opacity = 0;
        videoEl.play();
        videoEl.controls = true;
    }
    videoEl.onpause = () => {
        document.getElementById('video-palyer').style.opacity = 1;
        videoEl.controls = false;
    }
}