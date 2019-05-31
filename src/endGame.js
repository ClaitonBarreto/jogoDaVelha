function draw() {
    alert('Jogo empatado! Deu velha!')
    window.setTimeout(() => {location.reload()}, 1000)    
}

function win(player) {
    incrementScore(player)
    alert('Fim da rodada! Vitoria de ' + player._name)
    window.setTimeout(() => {location.reload()}, 1000)
}

function incrementScore(player) {

	player._score += 1
	sessionStorage.setItem(session, JSON.stringify(player))
}