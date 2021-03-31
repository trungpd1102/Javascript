// array.filer() // dùng để tạo một mảng mới với tất cả các phần tử thỏa điều kiện của một hàm test.

var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = numbers.filter(function (item) {
    console.log(item);
    return item % 2 === 0;
});

console.log('evenNumbers = ',evenNumbers); 