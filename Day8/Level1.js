// Number1
let dog = {}

// Number2
console.log(dog);

// Number3
dog = {
    name: "Bingo",
    legs: 4,
    color: "brown",
    age: 2,
    bark: function () {
        return "woof woof"
    }
}

// Number4
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

// Number5
dog.breed = "Caucasian"
dog.getDogInfo = function () {
    return `${this.name}, ${this.legs}, ${this.color}, ${this.age}, ${this.bark()}, ${this.breed}`

}
console.log(dog.getDogInfo());