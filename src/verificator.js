var winner = false

function roundVerificator(val1, val2, val3) {
	verifyDraw()
	if(casas[val1].innerText == casas[val2].innerText 
		&& casas[val1].innerText == casas[val3].innerText 
		&& casas[val1].innerText != '') 
	{
		casas[val1].classList.add('green')
		casas[val2].classList.add('green')
		casas[val3].classList.add('green')
		win(player)
		player = {value: ''}
		casas.forEach((casa) => {
			casa.addEventListener('click', (e) => { return false })
		})
		winner = true;
	} 
}

function verifyDraw() {
	if(jogadas >= 9 && winner != true) {
		draw()
		winner = true
	}
}