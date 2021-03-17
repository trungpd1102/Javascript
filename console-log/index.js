const trung = {name: "Trung", age: "26"}
const ngoc = {name: "Ngoc", age:"28"}
const dev = "developer"

//timer
console.time('timer')

//    Bad
console.log(trung);
console.log(ngoc);

//  Good
console.log({trung});
console.log({ngoc});
//  Or
console.log({trung, ngoc});


// Style console
console.log("%c Pham Duc Trung", "color: red");
console.log(`%c ${trung.name + trung.age}`, "color: red");

// Console table
console.table([trung,  ngoc, dev], ["name"])
console.table([trung, ngoc]);

//end timer
console.timeEnd('timer')

//
!function TRACE(){console.trace('test trace')}()