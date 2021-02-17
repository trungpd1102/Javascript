// function first(){
//     setTimeout( function(){
//         console.log("first");
//     }, 5000);
    
// }
// function second(){
//     console.log("second");
// }

// first();
// second();

function first(second){
    setTimeout( function(){
        console.log("first");
        second();
    }, 5000);
    
}
function second(){
    console.log("second");
}

first(second);
