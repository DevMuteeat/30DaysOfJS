// Number1
let age = Number(prompt("Enter your age:"))
if (age >= 18){
    alert("You are old enough to drive")
} else {
    alert(`You are left with ${18 - age} years to drive`)
}

// Number2
let myAge = 30
let yourAge = Number(prompt("Enter your age"))
if (myAge < yourAge){
    alert(`You are ${yourAge - myAge} years older than me`)
} else{
    alert(`I am ${myAge - yourAge} years older than you`)
}

// Number3
let a = 4;
let b = 3;
// Using if else
if (a > b){
    console.log(`${a} is greater than ${b}`)
} else
console.log(`${a} is less than ${b}`);
// Using Ternary operator
a > b ? console.log(`${a} is greater than ${b}`) :
console.log(`${a} is less than ${b}`);

// Number4
const number = Number(prompt("What number do you wish to know if its even or odd?"))
if (number % 2 === 0){
    alert(`${number} is an even number`)
} else {
    alert(`${number} is an odd number`)
}