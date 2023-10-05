const button = document.getElementById("button")

let clicou = 0

function playOrPauseAudio() {
    clicou++
    if (clicou %2 !== 0) {
        audio.play()
        button.style.filter = "hue-rotate(-200deg)"
    } else {
        audio.pause()  
        button.style.filter = "none"
    }
}