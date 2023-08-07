let video = document.querySelector('.video');
let btnPlay = document.getElementsByTagName('button')[0];
let btnPause = document.getElementsByTagName('button')[1];
let btnFF = document.getElementsByTagName('button')[3];
let btnRW = document.getElementsByTagName('button')[2];
let pDurationMin = document.querySelector('.timer_minutes');
let pDurationSec = document.querySelector('.timer_seconds');
let pCurrMin = document.querySelector('.timer_currMinutes');
let pCurrSec = document.querySelector('.timer_currSeconds');
let progressBar = document.querySelector('.progressBar_foreground');
let containerPlayer = document.querySelector('.containerPlayer');

btnPlay.addEventListener('click', ()=> {
    video.play();
    containerPlayer.classList.add('containerPlayer_hidden');
});

btnPause.addEventListener('click', ()=> {
    video.pause();
});

btnFF.addEventListener('click', ()=> {
    video.currentTime = video.currentTime + 10;
});

btnRW.addEventListener('click', ()=> {
    video.currentTime = video.currentTime - 10;
});


video.onloadedmetadata = () => {
    let durationMinutes = parseInt(video.duration / 60);
    let durationSeconds = parseInt((video.duration / 60 - durationMinutes) * 60);

    pDurationMin.textContent = `0${durationMinutes}`;
    pDurationSec.textContent = durationSeconds;
};

video.ontimeupdate = () => {
    progressBar.style.width = (video.currentTime / video.duration) * 100 + '%';

    let durationMinutes = parseInt(video.currentTime / 60);
    let durationSeconds = parseInt((video.currentTime / 60 - durationMinutes) * 60);

    pCurrMin.textContent = `0${durationMinutes}`;

    if(durationSeconds < 10) {
        pCurrSec.textContent = `0${durationSeconds}`;
    } else {
        pCurrSec.textContent = durationSeconds;
    }
};

video.onended = () => {
    containerPlayer.classList.toggle('containerPlayer_hidden');
};