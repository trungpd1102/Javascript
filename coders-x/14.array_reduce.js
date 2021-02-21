// Phương thức reduce() dùng để thực thi một hàm lên từng phần tử của mảng (từ trái sang phải) với một biến tích lũy để thu về một giá trị duy nhất.

// var numbers = [1, 2, 3, 4];

// var sum = numbers.reduce(function (a, b) { // Tính tổng các phàn tử trong mảng
//     console.log(a, b);
//     return a + b;    
// });

// console.log(sum);


// Giỏ hàng
var oders = [
    {name: "eggs", quantity: 10, unitPrice: 3000},
    {name: "bananas", quantity: 10, unitPrice: 1000},
    {name: "apples", quantity: 5, unitPrice: 20000},
]; 

// Tính tổng đơn hàng
var initialValue = 0;
var totalPrice = oders.reduce(function(item1, item2){
    var total = item1+ item2.quantity * item2.unitPrice;
    // console.log(item1, item2);
    // console.log(total);
    return total
},initialValue);

console.log('totalPrice:', totalPrice, 'd');


// var initialValue = 0;
// var sum = [{x: 1}, {x:2}, {x:3}].reduce(function (accumulator, currentValue) {
//     console.log('accumulator: ', accumulator, 'currentValue: ',currentValue);
//     return accumulator + currentValue.x;
// },initialValue)

// console.log(sum) // logs 6