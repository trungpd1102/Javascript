// var let const
// 1. Declaration (Khai bao bien)
// 2. Hoisting
// 3. Block scope (if, for...)
// 4. Redeclaretion (Khai bao lai)

// var a = 1
// let b = 2
// const c = 3
// console.log(a, b, c);

// var a = 2
// console.log(a);

// 'var' doesn't have block scope, only function scope------------------------------------
// if(true) {
//     var x =10
// }
// console.log(x);

// function var_scope() {
//     var x = 10
// }
// console.log(x);

//'let' and 'const' have block scope, but doesn't function scope -----------------------------------------------
{
    const x
    let y
}
console.log(x);
console.log(y);












