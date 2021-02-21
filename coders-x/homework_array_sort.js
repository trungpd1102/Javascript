var  fruits = [
    {name:'apple', price: 10000, onstock: 10, stockValue:null},
    {name:'banana', price: 5000, onstock: 20, stockValue:null},
    {name:'dragonfruit', price: 15000, onstock: 3, stockValue:null},
    {name:'orange', price: 13000, onstock: 11, stockValue:null},
    {name:'durian', price: 2000000, onstock: 99, stockValue:null},
];

// sort bt price from more expensive to less expensive
// var descendingPrice = fruits.sort(function (a, b) {
//     return b.price-a.price;
// });

// console.log(descendingPrice);

//  sort by in stock form high price to low price

var stockValueFruits = fruits.map(function (fruit) {
    stockValue = fruit.price * fruit.onstock;
    // console.log(fruit);
    // console.log(stockValue);
    fruit.stockValue = stockValue;
    return fruit
});

//console.log(stockValueFruits);

var sortedFruits = stockValueFruits.sort(function (a, b) {
    return b.stockValue - a.stockValue
});

console.log(sortedFruits);