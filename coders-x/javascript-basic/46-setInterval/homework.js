//  write a function count from 1 to 10
//  return a promise

//-------------------------------------------------------------------
// var fs = require('fs')
// var i = 0;

// function readFilePromise(path) {
//     return new Promise(function (resolve, reject) {
//         fs.readFile(path, {encoding: 'utf8'}, function (err, data) {
//             if (err) reject(err)
//             else resolve(data)
//         })
//     })
// }

// var intervalID = setInterval(function () {
//     i++;
//     console.log(i);
//     if (i === 10) {
//         readFilePromise('./song1.txt')
//             .then( (data) => console.log(data))
//             .then( () => readFilePromise('./song2.txt') )
//             .then ( (data) => console.log(data) )
//             .catch ( (err) => console.log(err) );

//         clearInterval(intervalID) 
//         }
//     }
// ,1000)


//------------------------------------------------------------------
function countFrom(i, n) {
    return new Promise(() => {
        var intervalID = setInterval(() => {
            console.log(i);
            i++;
            if (i === (n + 1)) {
                console.log("Done");
                clearInterval(intervalID);
            }
        }, 500);
    })
}

countFrom(1, 10).then(() => console.log("Done"))

var progressNumber = 0
await setInterval( () => {

} )