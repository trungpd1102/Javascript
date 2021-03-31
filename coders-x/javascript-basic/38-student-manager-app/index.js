// 1. Show all students
// 2. Create a new student
// 3. Save & Exit
var readlineSync = require('readline-sync');
var fs = require('fs');

var students = [];

function loadData() {
    var data = fs.readFileSync('./data.json', encoding = 'utf8');
    students = JSON.parse(data);
}

function startApp() {
    console.log('\n-------Student Management App-------');
    console.log('1. Show all students');
    console.log('2. Create a new student');
    console.log('3. Save & Exit');

    var option = readlineSync.question('Please select a number(1 or 2 or 3) : ');
    // console.log(option);
    switch (option) {
        case '1':
            showStudents();
            startApp();
            break;
        case '2':
            showCreateStudent();
            startApp();
            break;
        case '3':
            saveAndExit();
            break;
        default:
            console.log('\nWrong option!!! Please try again!');
            startApp();
            break;
    }
}

function showStudents() {
    for (var student of students){
        console.log(student.name, student.age, student.class);
    }
}

function showCreateStudent() {


    // Enter student infomation
    var studentName = readlineSync.question('Name: ');
    var studentAge = readlineSync.question('Age: ');
    var studentClass = readlineSync.question('Class: ')
    
    var newStudent = {
            
        name: studentName,
        age: parseInt(studentAge),
        class: studentClass,
    
    };
    //console.log(newStudent);
    students.push(newStudent); // add newStudent to students array    
}

function saveAndExit() {
    var content = JSON.stringify(students, null, '\t');
    fs.writeFileSync('./data.json', content);
}

function main() {
    loadData();
    // console.log(typeof(students));
    startApp();
}

main();

