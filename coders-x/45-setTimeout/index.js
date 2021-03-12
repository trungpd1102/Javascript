// setTimeout // do function after a specified amount of time
// clearTimeout
// timer

function Finish() {
    console.log("Finish");  
      
}

console.log("Start");
var timeoutID = setTimeout( Finish, 1000 );
console.log('Done!@@@@');

clearTimeout(timeoutID);     // no run setTimeout