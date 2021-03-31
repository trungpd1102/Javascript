// Promise hạn chế callback hell

var fs = require('promise-fs');

function onDone(song) {
    console.log(song);
}

function onError(error) {
    console.log(error);
}
function readFile(path) {
    return fs.readFile(path, encoding = 'utf8')
}

readFile('./song1.txt')
    .then(onDone)
    .then(() => readFile('./song2.txt'))
    .then(onDone)
    .catch(onError);