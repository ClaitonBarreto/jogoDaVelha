function roundVerificator(val1, val2, val3) {
	if(casas[val1].innerText == casas[val2].innerText 
		&& casas[val1].innerText == casas[val3].innerText 
		&& casas[val1].innerText != '') 
	{
		casas[val1].classList.add('green')
		casas[val2].classList.add('green')
		casas[val3].classList.add('green')
		win(player)
		saveScore(player.getNome())
		player = {value: ''}
		casas.forEach((casa) => {
			casa.addEventListener('click', (e) => { return false })
		})
	} 
	
	else if (jogadas >= 9)
	{
		draw()
	}
}