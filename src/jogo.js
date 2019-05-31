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
 */

const 
casas = document.querySelectorAll('.casa');

var
player1 = Object.create(Player),
player2 = Object.create(Player),
jogadas = 0,
player = {},
session = ''

function verificaPlayer() 
{
	if(player == player1) {
		player = player2
		session = 'player2'
	}
	else if (player == player2){
		player = player1
		session = 'player1'
	}
}

function game(casa)
{
	 
	if(casa.innerText == player1._value || casa.innerText == player2._value) return

	verificaPlayer()
	jogadas++
	joga(casa)
}

function joga(casa) 
{
	if(casa.innerText == '') 
	{
		casa.innerHTML = player._value
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

function verifica(possibilities)
{
	possibilities.forEach((pos) => { roundVerificator(pos[0], pos[1], pos[2]) })
}


function defineValues()
{
	player1.setName(prompt('Defina o nome do Jogador 1'))
	player1.setValue(prompt('Defina a figura com que joga o Jogador 1'))
	player1.setScore(0)
	player2.setName(prompt('Defina o nome do Jogador 2'))
	player2.setValue(prompt('Defina a figura com que joga o Jogador 2'))
	player2.setScore(0)
}


function main() 
{

	document.querySelector('#score-player-1').innerHTML = JSON.parse(sessionStorage.getItem('player1'))._score
	document.querySelector('#score-player-2').innerHTML = JSON.parse(sessionStorage.getItem('player2'))._score
	document.querySelector('#name-player-1').innerHTML = JSON.parse(sessionStorage.getItem('player1'))._name
	document.querySelector('#name-player-2').innerHTML = JSON.parse(sessionStorage.getItem('player2'))._name
	
	if(sessionStorage.length == 0)
	{
		defineValues()
		sessionStorage.setItem('player1', JSON.stringify(player1))
		sessionStorage.setItem('player2', JSON.stringify(player2))
	} else {
		player1 = JSON.parse(sessionStorage.getItem('player1'))
		player2 = JSON.parse(sessionStorage.getItem('player2'))
		player = player1
		session = 'player1'
	}

	casas.forEach(function(casa) 
	{
		casa.addEventListener('click', function(e)
		{
			game(casa)
			return true
		})
	})
}
main()

