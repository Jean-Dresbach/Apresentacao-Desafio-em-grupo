const button = document.getElementById("button")

const audio = document.getElementById("audio")



let clicou = 0
clicou = pauseAudio()

function playAudio(clicou) {
    if (clicou %2 === 0) {
        audio.play()
        
    } 
}

function pauseAudio() {
    return clicou++
}
console.log(clicou);