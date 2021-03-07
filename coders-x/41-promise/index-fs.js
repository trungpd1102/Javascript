var fs = require('fs');

function readFilePromise(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, encodeing='utf-8', function(err, data) {
            if (err) reject(err);   //reject - err                              // remenber call reject and resolve
            else resolve(data);     //resolve - data
        });    
    });
    
}

readFilePromise('song2.txt')
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

    // var fs = require('fs');

    // function readFilePromise(path) {
    //     return new Promise((resolve, reject) =>
    //         fs.readFile(path, encoding = "utf-8", (err, data) => {
    //             if (err) reject(err)
    //             else resolve(data)
    //         }
    //         )
    //     )
    
    // }
    
    // readFilePromise('song1.txt')
    //     .then((data) => console.log(data))
    //     .catch((err) => console.log(err))