// for( i = 0; i<5; i++ ) {
//     console.log(i);
// };

var employees = [
    {name: 'Trung', age: 26},
    {name: 'Ngoc', age: 28},
    {name: 'Nguyet', age: 23},
];


// for (var i = 0; i < employees.length; i++){
//     console.log(employees[i].name, employees[i].age);
// };


// For...of // Lặp qua các phần tử của mảng
// for (var employee of employees){
//     console.log(employee.name, employee.age);
// };


//for .. in // Lặp qua các key trong 1 object
// var myDog = {
//     name: "Đần",
//     age: 1,
//     weight: 3,
// };
// //myDog.name ~ myDog['name'] // "Đần"
// for (var key in myDog){
//     console.log(key, myDog[key]); // key là 1 string
// };


var people = [
    {
        name: 'Trung',
        age: 26,
        isMale: true,
        haveLover: true,
    },
    {
        name: 'Nguyet',
        age: 23,
        isMale: false,
        haveLover: true,
    },
    {
        name: 'Ngoc',
        age: 28,
        isMale: false,
        haveLover: true,
    },
    {
        name: 'Hieu',
        age: 26,
        isMale: true,
        haveLover: false,
    },
    
];

for (var person of people){
    for (var key in person){
        console.log(key, person[key]);
    };    
    console.log('-----------');
};

