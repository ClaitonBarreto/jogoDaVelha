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

    register = function(){
        sessionStorage.setItem(this.name, 0)
    },

    validate = function(){
        if(sessionStorage.getItem(this.name)) return true
        return false
    }
}
