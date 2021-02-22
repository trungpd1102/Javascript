// Math object in JavaScript
// Math.PI

function discArea(r) {
    return r * r * Math.PI;
};

console.log(discArea(5));
console.log(Math.PI);

console.log(Math.ceil(9.1)); // 10 // Làm tròn lên
console.log(Math.floor(9.1)); // 9 // Làm tròn xuống
console.log(Math.round(9.1), Math.round(9.7), Math.round(9.5)); // 9 ,10 , 10 // làm tròn số nguyên gần nhất
console.log(Math.max(4.5, 4, 6));
//Math.min()
console.log('Random: ',Math.random());// Random float around 0->1 except 1
console.log('------------------');

function tossCoin() {
    randomNumber = Math.random();
    if (randomNumber >= 0.5)
        console.log("Mặt Sấp");
    else 
        console.log("Mặt Ngửa");
};

tossCoin();
console.log('-------------');

function rollAdie() {
    randomNumber = Math.floor( Math.random() * 6 +1 );
    console.log("Lắc xí ngầu");
    console.log("Điểm: ",randomNumber);
}

rollAdie();
console.log("----------");

var res = new rollAdie();
