var Player = {
        _name : undefined,
        _score : undefined,
        _value : undefined,

        getValue: function(){
            return this._value
        },

        getName: function(){
            return this._value._name
        },

        getScore: function(){
            return this._score
        },

        setName: function(val){
            this._name = val
        },

        setScore: function(val){
            this._score = val
        },

        setValue: function(val){
            this._value = val
        }

    }

