const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const audio = document.querySelector('#audio');


let flag = true;


function togglePlayPause() {
    if (flag) {
        pause.style.display = "none";
        play.style.display = "inline";
        audio.muted = false;
        // audio.pause();
    } else {
        play.style.display = "none";
        pause.style.display = "inline";
        audio.muted = true;
        // audio.play();
    }
    // if(pause.style.display == "none"){
    //     audio.pause();
    // }
    // if(play.style.display == "none"){
    //     audio.play();
    // }
    flag = !flag;
}

pause.addEventListener('click', togglePlayPause);
play.addEventListener('click', togglePlayPause);

document.addEventListener("keydown", function(event){
    if(event.keyCode === 32){
        togglePlayPause();
    }
});
