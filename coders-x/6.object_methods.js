// Phương thức của object

var myDog = {
    weight: 5,
    name: "Jec",
    age: 2,
    bark: function() { //anonymous function
        console.log('Gau gau, my name is', this.name); // this  đại diện cho chính object mà nó thuộc về
        // return undefined
    },
    eat: function(bone){
        this.weight = this.weight + bone.weight;
        return this.weight; // tra ve weight cua myDog
    },
    defecate: function(shit){
        this.weight = this.weight - shit.weight;
        return this;
    },
};

var bone = { weight: 0.5 };
console.log('Before eating', myDog.weight);

myDog.eat(bone);
console.log('After eating', myDog.weight);

var shit = { weight: 0.3 };
myDog.defecate(shit);
console.log('After defecate', myDog.weight);

console.log(myDog);

//myDog.bark();

// function bark() {
//     console.log('Gau gau, my name is', this.name); // object mà this thuộc về k có thuộc tính name mà là 1 cái gì đó
// }

// bark();

