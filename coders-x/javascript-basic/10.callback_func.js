var coffeeMachine = {
    makeCoffee: function(onDone){
        console.log('Making coffee......');
        onDone();
    },
};

var beep = function(){
    console.log('Beep Beeppppppppppppppp');
};

coffeeMachine.makeCoffee(beep);

coffeeMachine.makeCoffee(function(){
    console.log('Tít tít');
});