function doHomework(subject, callback){
    setTimeout( function(){
        console.log(`Doing homework: ${subject}.`);
        callback();
    }, 5000);

}

function printDone(){
    console.log('Homework Done!');
}

doHomework('Math',printDone);

// function doHomework(subject, callback){
//     setTimeout( function(){
//         console.log(`Doing homework: ${subject}.`);
//         callback();     
//     }, 5000);
// }

// function printDone(){
//     console.log('Homework Done!');
// }

// doHomework('Math',printDone());