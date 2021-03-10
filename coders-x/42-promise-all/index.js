var fs = require('fs');

function readFilePromise(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, {encoding: 'utf-8'}, function(err, data) {
            if (err) reject(err);   //reject - err                              // remenber call reject and resolve
            else resolve(data);     //resolve - data
        });
    });
}

// readFilePromise('./song1.txt')
//     .then( function (song1) {
//         console.log(song1);
//         return readFilePromise('./song2.txt');
//     })
//     .then( (song2) => {
//         console.log(song2);
//         return readFilePromise('./song3.txt')} )
//     .then( function(song3) {console.log(song3)} )
//     .catch( (err) => console.log(err) )

Promise.all([
    readFilePromise('./song1.txt'),
    readFilePromise('./song2.txt'),
    readFilePromise('./song3.txt')])
        .then( (value) => console.log(value) )
        .catch( (error) => console.log(error) )




