var Player = function(name, value, field){
    name = name
    score = getScore(this.name)
    value = value
    objScore = document.querySelector(field),
    
    this.getNome = function(){ 
        return name
    }

    this.getValue = function(){
        return value
    }

    this.register = function(){
        sessionStorage.setItem(this.name, 0)
    },

    this.validate = function(){
        if(sessionStorage.getItem(this.name)) return true
        return false
    }

    function alernate(currentPlayer, player1, player2) {
        if(currentPlayer === player1)
            currentPlayer = player2
        else
            currentPlayer = player1
    }
}
