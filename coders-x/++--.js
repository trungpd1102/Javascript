var a = 5;
//var b = a++ + ++a;
//5 + ++a -> a=6
//5 + 7 
//12
var c = a++ + ++a - --a + a--;
//5 + ++a - --a + a--  -> a=6
//5 + 7 - --a + a--  -> a=7
//5 + 7 - 6 + a--  -> a=6
//5 + 7 - 6 + 6  -> a=5
//12
//console.log(b);
console.log(c);
