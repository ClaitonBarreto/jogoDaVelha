const casas = document.querySelectorAll('.casa'),
player1 = {
	value: "X",
	score: 0
},
player2 = {
	value: 'O',
	score: 0
}

let player = player1,
info_player = document.querySelector('.info-player');

function verificaPlayer() {
	info_player.innerHTML = 'Proximo Jogador: ' + player.value
	if(player == player1) {
		player = player2
	}
	else {
		player = player1
	}
}

function game(casa) {
	if(casa.innerText == 'O' || casa.innerText == 'X'){
		return
	}
	verificaPlayer()
	joga(casa)
}

function joga(casa) {

	if(casa.innerText == '') {
		casa.innerHTML = player.value
	}

	verifica()
}

function verifica() {
	
	verificaVitoria(0,3,6)
	verificaVitoria(0,1,2)
	verificaVitoria(0,4,8)
	verificaVitoria(3,4,5)
	verificaVitoria(6,7,8)
	verificaVitoria(6,4,2)
	verificaVitoria(1,4,7)
	verificaVitoria(2,5,8)
}

function verificaVitoria(val1, val2, val3) {
	if(casas[val1].innerText == casas[val2].innerText 
		&& casas[val1].innerText == casas[val3].innerText 
		&& casas[val1].innerText != '') 
	{
		casas[val1].classList.add('green')
		casas[val2].classList.add('green')
		casas[val3].classList.add('green')
		//Preciso invalidar qualquer jogada apos a confirmação de uma vitória
	}
}


casas.forEach(function(casa) {
	casa.addEventListener('click', function(e) {
		game(casa)
	})
})