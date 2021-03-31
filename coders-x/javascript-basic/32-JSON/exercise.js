// Excercise
// 1. Show all students
// 2. Create a new student by readline-sync
// 3. Save and Exit 

var readlineSync = require('readline-sync');
var fs = require('fs');

var students = [
    {name: "Trung", age: 18, class: '12A1'},
    {name: "Trang", age: 16, class: '10A1'},
    {name: "Hung", age: 17, class: '11A2'},
    {name: "Hoa", age: 18, class: '12A2'},
];

var newStudent = {};

// Enter student infomation
var studentName = readlineSync.question('Your name: ');
var studentAge = readlineSync.question('Your age: ');
var studentClass = readlineSync.question('Your class: ')

newStudent.name = studentName;
newStudent.age = parseInt(studentAge);
newStudent.class = studentClass;

//console.log(newStudent);
students.push(newStudent); // add newStudent to students array
//console.log(students);

var studentsString = JSON.stringify(students, null, '\t');
//console.log(studentsString);

// write studentsString to 'students.txt' file
fs.writeFileSync('students.json', studentsString);
//fs.writeFileSync('students.txt', studentsString);

