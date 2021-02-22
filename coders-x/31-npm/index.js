var readlineSync = require('readline-sync');

var pet = {};

var name = readlineSync.question('Your pet name: ');
var gender = readlineSync.question('Your pet gender: ');
var weight = readlineSync.question('Your pet weight: ');


pet.name = name;
pet.gender = gender;
pet.weight = parseInt(weight);

console.log(pet);
