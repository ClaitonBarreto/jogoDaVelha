function definePlayers()
{
	player1.setName(prompt('Defina o nome do Jogador 1'))
	player1.setValue(prompt('Defina a figura com que joga o Jogador 1'))
	player1.setScore(0)
	player2.setName(prompt('Defina o nome do Jogador 2'))
	player2.setValue(prompt('Defina a figura com que joga o Jogador 2'))
	player2.setScore(0)
}

function defineMuralValue(definitions)
{
	for(var prop in definitions) 
	{
		document.querySelector(prop).innerHTML = definitions[prop]
	}
}

function defineValues()
{
	if(sessionStorage.length == 0)
	{
		definePlayers()
		sessionStorage.setItem('player1', JSON.stringify(player1))
		sessionStorage.setItem('player2', JSON.stringify(player2))
		defineMuralValue({
			'#score-player-1' : player1._score,
			'#score-player-2' : player2._score,
			'#name-player-1' : player1._name + " : " + player1._value,
			'#name-player-2' : player2._name + " : " + player2._value
		})
	} else {
		defineMuralValue({
				'#score-player-1' : JSON.parse(sessionStorage.getItem('player1'))._score,
				'#score-player-2' : JSON.parse(sessionStorage.getItem('player2'))._score,
				'#name-player-1' : JSON.parse(sessionStorage.getItem('player1'))._name + " : " + JSON.parse(sessionStorage.getItem('player1'))._value, 
				'#name-player-2' : JSON.parse(sessionStorage.getItem('player2'))._name + " : " + JSON.parse(sessionStorage.getItem('player2'))._value	
			})
		player1 = JSON.parse(sessionStorage.getItem('player1'))
		player2 = JSON.parse(sessionStorage.getItem('player2'))
		session = 'player1'
	}
}