// date
// moment.js

var now = new Date()

const options = {
    dateStyle: 'full',
    timeStyle: 'full',
    hour12: true,
    month: 'long',
    year: '2-digit',
    minute: '2-digit',
    second: '2-digit',
 };

console.log(new Intl.DateTimeFormat('en', options).format(now));

console.log(now);