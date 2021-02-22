//`new` keyword
// var today = new Date();
// console.log(today);
// creat a new object by object literal
// var mouse = {
//     weight: 0.2,
//     getWeight: function () {
//         return this.weight;
//     }
// };
// // constructor function
// function Mouse(color, weight) {
//     this.type = 'mouse';
//     this.color = color;
//     this.weight = weight;
// };

// var mouse1 = new Mouse('red', 0.3);
// var mouse2 = new Mouse('white', 0.4);
// console.log(mouse1);
// console.log(mouse2);

//-------------------------------------------------------------------------------
var tom = {
    name: 'Tom',
    stomach: [],
    eat: function (mouse) {
        this.stomach.push(mouse);
        this.weight += mouse.weight;
        return this;
    },
    weight: 2,
};

// var mouse1 = {name: 'mouse1'};
// var mouse2 = {name: 'mouse2'};
// var mouse3 = {name: 'mouse3'};
// tom.eat(mouse1).eat(mouse2).eat(mouse3); // method chianing
function mouse(nameOfMouse, weightOfMouse) {
    this.name = nameOfMouse;
    this.weight = weightOfMouse;
}

var mouse1 = new mouse('mickey', 0.4);
var mouse2 = new mouse('dubby', 0.5);
var mouse3 = new mouse('punny', 0.6);
tom.eat(mouse1).eat(mouse2)

console.log(tom);
console.log(mouse1, mouse3);