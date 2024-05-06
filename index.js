let audioElemnts = new Audio("1.mp3");  
const play = document.getElementById("play")
const bar = document.getElementById("bar")
const btn = document.getElementById("btn-1")
const mute = document.getElementById("mutebtn")
const mutea = document.getElementById("mute")








let a = true
const getSongs = () => {
    if (a) {
        a = false
        audioElemnts.play();
        console.log(a);
    } else {
        a = true
        audioElemnts.pause();
        console.log(a);
    }
}

let b = true
const mutes = ()=>{
if(b){
    audioElemnts.muted = true
    b = false
    console.log(a);
}else{
    audioElemnts.muted = false
    b = true
    console.log(a);
}
}

const progressBar = ()=>{
    const progress =parseInt((audioElemnts.currentTime/audioElemnts.duration)*100) 
    // const progress = parseInt(audioElemnts.duration)
    console.log(progress)
    bar.value = progress
}

btn.addEventListener("click", getSongs)
mutebtn.addEventListener("click", mutes)
audioElemnts.addEventListener("timeupdate", progressBar)











