// setInterval
// clearInterval
// setInterval(function, ms)

var i = 0;

var intervalID = setInterval(function () {
    i++;
    console.log(i);
    if (i === 10) clearInterval(intervalID)
}, 1000)
