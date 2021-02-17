function doHomework(subject, callback){
    console.log(`Start doing Homework: ${subject}.`);
    callback();
}

doHomework('Math', function(){
    console.log('Done homework');
});