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
casas = document.querySelectorAll('.casa');

var
player1 = Object.create(Player),
player2 = Object.create(Player)

let 
player = player1;
jogadas = 0;

function verificaPlayer() 
{
	if(player == player1) {
		player = player2
	}
	else if (player == player2){
		player = player1
	}
}

function game(casa)
{
	 
	if(casa.innerText == player1.getValue() || casa.innerText == player2.getValue()) return

	verificaPlayer()

	jogadas++

	joga(casa)
}

function joga(casa) 
{
	if(casa.innerText == '') 
	{
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

function verifica(possibilities)
{
	possibilities.forEach((pos) => { roundVerificator(pos[0], pos[1], pos[2]) })
}


function defineValues()
{
	player1.setName(prompt('Defina o nome do Jogador 1'))
	player1.setValue(prompt('Defina a figura com que joga o Jogador 1'))
	player.setScore(0)
	player2.setName(prompt('Defina o nome do Jogador 2'))
	player2.setValue(prompt('Defina a figura com que joga o Jogador 2'))
	player2.setScore(0)
}


function main()
{
	
	if(sessionStorage.getItem('player1') == undefined)
	{
		defineValues()
		json_player1 = JSON.stringify(player1)
		json_player2 = JSON.stringify(player2)
		sessionStorage.setItem('player1', json_player1)
		sessionStorage.setItem('player2', json_player2)
	} else {
		player1 = JSON.parse(sessionStorage.getItem('player1'))
		player2 = JSON.parse(sessionStorage.getItem('player2'))
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

