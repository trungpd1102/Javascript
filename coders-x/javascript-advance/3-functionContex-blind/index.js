// global context
//function context
// bind


var mouse = {
    name: 'mickey',
    sayHi: function () {
        console.log('Hi! My name is', this.name); // function context
    }
}

//mouse.sayHi()

// var say = mouse.sayHi
// say  = function() { console.log... }
// context ở đây là global context, và k đc gán vào 1 object nào 
// say() // sẽ trả về 1 kết quả chứa undefined
//Hi! My name is undefined

// bind tạo ra 1 hàm mới có this được set là đối số truyền vào
// ở đây this là object mouse
var say = mouse.sayHi.bind(mouse)
say() // trả về kết quả: Hi! My name is mickey

var cat = {
    name: 'Tom'
}
var cat = mouse.sayHi.bind(cat)
cat() // return: Hi! My name is Tom