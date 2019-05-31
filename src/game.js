/**
 * Jogo da Velha by Claiton Barreto
 * 
 * Author: Claiton Barreto de Carvalho
 * Email: claitonbarreto@gmail.com
 * URL: https://github.com/claitonbarreto/jogoDaVelha.git
 * 
 * Created at: 22/05/2019
 * 
 * Version: 1.0
 */

const 
casas = document.querySelectorAll('.casa');

var
player1 = Object.create(Player),
player2 = Object.create(Player),
jogadas = 0,
player = {},
session = ''

function game(casa)
{
	 
	if(casa.innerText == player1._value || casa.innerText == player2._value) return

	playerVerificator()
	jogadas++
	console.log(jogadas)
	played(casa)
}

function played(casa) 
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
	verificator(possibilities)
}

function main() 
{ 

	defineValues()
	casas.forEach(function(casa) 
	{
		casa.addEventListener('click', function(e)
		{
			game(casa)
		})
	})
	player = player1
}

function restartGame() {
	sessionStorage.clear()
	window.setTimeout(() => {location.reload()}, 500)
}

main()

