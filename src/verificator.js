/*function roundVerificator(val1, val2, val3, player) {
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
}*/