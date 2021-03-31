//Phương thức array.find() sẽ trả về giá trị đầu tiên tìm thấy ở trong mảng được cung cấp. Hoặc có thể trả về undefined .

var numbers = [1, 2, 3, 4, 5];

 var even = numbers.find(function (item) {
     console.log(item);
     return item % 2 === 0;
 });

 console.log('even = ',even);