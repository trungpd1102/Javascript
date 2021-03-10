var fs = require('fs');
var co = require('co');  // a function

function readFilePromise(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, {encoding: 'utf-8'}, function (err, data) {
            if (err) reject(err)
            else resolve(data)    
        });
    });
}

// co(function *() {
//     // var song1 = yield readFilePromise('./song1.txt');
//     // var song2 = yield readFilePromise('./song2.txt');
//     // var song3 = yield readFilePromise('./song3.txt');

//     var values= yield [
//         readFilePromise('./song1.txt'),
//         readFilePromise('./song2.txt'),
//         readFilePromise('./song3.txt')
//     ]
//     return values;
// }).then( (value) => console.log(value))
//     .catch( (err) => console.log(err))


var readFiles = co.wrap( function *(flies) {
    // [String] -> Promise
    var values = yield flies.map( function (files) {
        return readFilePromise(files)
    });
    return values
});

readFiles(['song1.txt', 'song2.txt', 'song3.txt'])
    .then( (values) => console.log(values) )
    .catch( (err) => console.log(err) )







