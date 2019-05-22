/**
 * Jogo da Velha by Claiton Barreto
 * 
 * Author: Claiton Barreto de Carvalho
 * Email: claitonbarreto@gmail.com
 * URL: https://github.com/claitonbarreto/jogoDaVelha.git
 * 
 * Created at: 22/05/2019
 * 
 * Version: 0.0.1
 * 
 * 
 * 
 * Note: Preciso Criar um contador para o Score de cada jogador... TALVEZ a utilização do Local Storage 
 * do navegador seja uma boa ideia, visto que quando dou reload() na pagina, todos os scores voltam a 0
 */

const 
casas = document.querySelectorAll('.casa'),
player1 = { value: "X", score: 0, objScore: document.querySelector('.score-player1') },
player2 = { value: 'O', score: 0, objScore: document.querySelector('.score-player2') }

let 
player = player1,
info_player = document.querySelector('.info-player'),
jogadas = 0;

function verificaPlayer() {
	info_player.innerHTML = 'Proximo Jogador: ' + player.value
	if(player == player1) {
		player = player2
	}
	else if (player == player2){
		player = player1
	}
}

function game(casa) {
	if(casa.innerText == 'O' || casa.innerText == 'X'){
		return
	}
	verificaPlayer()
	jogadas++
	joga(casa)
}

function joga(casa) {
	if(casa.innerText == '') {
		casa.innerHTML = player.value
	}	
	verifica()
	console.log(jogadas)
}

function verifica() {
	verificaEmpate()
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
		anuncio('Fim de partida! Vitoria do Jogador ' + player.value)
		player.score++
		player.objScore.innerHTML += player.score
		player = {value: ''}
		casas.forEach((casa) => {
			casa.addEventListener('click', (e) => { return false })
		})
	}
}

function verificaEmpate(){
	if(jogadas >= 9) {
		anuncio('Jogo Empatado!')
	}
}	

function anuncio(text){
	alert(text)
	window.setTimeout(function(){location.reload()}, 10000)
}


casas.forEach(function(casa) {
	casa.addEventListener('click', function(e) {
		game(casa)
		return true
	})
})