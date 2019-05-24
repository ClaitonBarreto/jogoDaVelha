function draw() {
    alert('Jogo empatado! Deu velha!')
    window.setTimeout(() => {location.reload()}, 1000)    
}

function win(player) {
    alert('Fim da rodada! Vitoria de ' + player.getName())
    window.setTimeout(() => {location.reload()}, 1000)
}