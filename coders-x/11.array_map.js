// // array.map
// var numbers = [1 ,2, 3, 4, 7];

// var squaredNumbers = numbers.map(function(x){
//     return x*x;
// });

// console.log(squaredNumbers);


// Bai tap:  Tính diện tích các hình chữ nhật đã cho
var rectangles = [
    {width: 4, height: 10},
    {width: 47, height: 110},
    {width: 2, height: 7},
];


var acreageRectangles = rectangles.map(function(obj){
    var acreage = obj.width * obj.height;
    var objResult = {'acreage': acreage};
    return  objResult
});

console.log(acreageRectangles);