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


// ALL VARIABLE GAME DECLARATIONS
const 
casas = document.querySelectorAll('.casa'),
player1 = new Player(prompt('Defina o nome do Jogador1'), "C", '.score-player1'),
player2 = new Player(prompt('Defina o nome do Jogador2'), "X", '.score-player2');

let 
player = player1,
info_player = document.querySelector('.info-player'),
jogadas = 0;

function verificaPlayer() {
	info_player.innerHTML = 'Proximo Jogador: ' + player.getNome()
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
		casa.innerHTML = player.getValue()
	}
	
	let possibilities = [
		[0,3,6],
		[0,1,2],
		[0,4,8],
		[3,4,5],
		[6,7,8],
		[6,4,2],
		[1,4,7],
		[2,5,8]
	]
	verifica(possibilities)
}

function verifica(possibilities) {
	possibilities.forEach((pos) => { roundVerificator(pos[0], pos[1], pos[2]) })
	verificaEmpate()
}

function verificaEmpate(){
	if(jogadas >= 9) {
		anuncio('Jogo Empatado!')
	}
}	

function anuncio(text){
	alert(text)
	window.setTimeout(function(){location.reload()}, 1000)
}


function main() {

	casas.forEach(function(casa) {
		casa.addEventListener('click', function(e) {
			game(casa)
			return true
		})
	})

	sessionStorage.setItem(player1.getNome(), 0)
	sessionStorage.setItem(player2.getNome(), 0)

}

main()

