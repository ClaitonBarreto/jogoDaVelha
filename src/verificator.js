var winner = 0



function playerVerificator() 
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

function verificator(possibilities)
{
	possibilities.forEach((pos) => { roundVerificator(pos[0], pos[1], pos[2]) })
}

function roundVerificator(val1, val2, val3) {
	if(casas[val1].innerText == casas[val2].innerText 
		&& casas[val1].innerText == casas[val3].innerText 
		&& casas[val1].innerText != '') 
	{
		casas[val1].classList.add('green')
		casas[val2].classList.add('green')
		casas[val3].classList.add('green')
		winner = 1;
		win(player)	
	} else if(jogadas >= 9 && winner == 0) 
	{
		draw()
		return
	}
}

function verifyDraw() {
	if(jogadas >= 9 && winner != false) {
		draw()
	}
}