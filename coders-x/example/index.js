//node module
//constructor function
//import Mouse from './mouse';
var Mouse = require('./mouse');
var Cat = require('./cat');

var jerry = new Mouse('Orange');
var mickey = new Mouse('Black');

console.log(jerry);
console.log(mickey);

var tom = new Cat();
tom.eat(jerry);
tom.eat(mickey);

console.log(tom);