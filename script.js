let video = document.getElementsByTagName('video')[0];
let btnPlay = document.getElementsByTagName('button')[0];
let btnPause = document.getElementsByTagName('button')[1];

btnPlay.addEventListener('click', ()=> {
    video.play();
});

btnPause.addEventListener('click', ()=> {
    video.pause();
});