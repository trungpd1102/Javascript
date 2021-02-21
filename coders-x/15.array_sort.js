// syntax: array.sort(function(a, b){}) --> return a sorted array
//                       ^ sort function
//if sort function
//  1. return a value <0 
//      a will come before b
//  2. return a value >0
//      a will come after b
//  3. return 0
//      a and b is stay unchanged

var numbers = [1, 4, 5, 2, 9];
// expect [1, 2, 4, 5, 9]
var ascendingNumbers = numbers.sort(function (a, b) {
    return a -b;
});
//console.log(ascendingNumbers);

var descendingNumbers = numbers.sort(function (a, b) {
    return b-a;
});
//console.log(descendingNumbers);


var employees = [
    {name: 'Trung', age: 26},
    {name: 'Nam', age: 23},
    {name: 'Trang', age: 22},
];

var sortedEmployees = employees.sort(function (a, b) {
    return a.age - b.age;
});

console.log(sortedEmployees); // sort descending by age