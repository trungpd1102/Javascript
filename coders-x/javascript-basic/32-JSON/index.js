// JSON object
// 1. stringify: Convert an Object to JSON string
// 2. parse Convert a JSON string to an Object
var myDog = {
    name: 'Scooby-doo',
    age: 1,
    dead: false,
};

var myDogString = JSON.stringify(myDog);

//console.log(myDogString);

var myCatString = '{"name": "Tom", "age": 2, "dead": true}';
var myCat = JSON.parse(myCatString);
console.log(myCat);