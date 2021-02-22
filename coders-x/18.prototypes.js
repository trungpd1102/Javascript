// https://www.youtube.com/watch?v=5Jy8XeMWiuA&list=PLkY6Xj8Sg8-uPZnTdScfuH0xD-O6Kb-V-&index=28
// Prototypes in JavaScript
// creat a new object,  object literal
//  Tiết kiệm bộ nhớ vì Mouse khởi tạo 1 lần
var mouse = {
    weight: 0.2,
    getWeight: function () {
        return this.weight;
    },
};
// constructor function
function Mouse(color, weight) {
    this.type = 'mouse';
    this.color = color;
    this.weight = weight;
    // this.sleep = function(){            //console.log(jerry.sleep === mickey.sleep); // false
    //     console.log('Sleeping...zzz');
    // };
};

//console.log(Mouse.prototype.constructor === Mouse);
Mouse.prototype.sleep = function () {
    console.log(this.color, 'Sleeping...zzz');
    return 'Done'
};

var jerry = new Mouse('Orange', 20);
console.log(jerry);
console.log(jerry.sleep());

var mickey = new Mouse('Black', 10);
// console.log(mickey.sleep());
console.log(jerry.sleep === mickey.sleep);// true