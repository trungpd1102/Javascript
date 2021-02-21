var a = [1, 2, 4, 5, 9];
var b = [32, 3];
var c = 7;

//console.log(a.concat(b)); // ghép mảng

a.push(c); // Thêm c vào cuối mảng a và trả về độ dài mảng sau khi thêm
console.log(a);

// console.log(a.pop()); // Cắt 1 ptu cuối mảng a và trả về phần tử cuối màng a trước khi cắt hay phẩn tử bị cắt
// console.log(a);


// a.shift() 
// a.unshift()


//Phương thức slice() trả về một bản sao tham chiếu (shallow copy) một phần của một mảng dưới dạng một mảng mới nhận các giá trị có chỉ số từ begin dến end (không bao gồm end). Mảng ban đầu không bị thay đổi.
//Cắt mảng
// console.log(a.slice(3)); 
// console.log(a.slice(0,2));


//Phương thức splice() thay đổi phần tử của mảng bằng cách xóa phần tử đang tồn tại và/hoặc thêm phần tử mới.
//Thêm, bớt phần tử trong mảng
//a.splice(2,0, 99);
// a.splice(2,1, 99);
// a.splice(2,2, 99);
// a.splice(2,1); // Xóa phần 1 phần tử ở 1 vị trí số 2
// console.log(a);