import webTechs from "./web_techs.js"
import {countries} from "./countries.js"

// Number2
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python."
let Array = text.split()
console.log(Array);
console.log(Array.length);

// Number3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// Number4
shoppingCart.unshift("Meat")
console.log(shoppingCart);

// Number5
shoppingCart.push("Sugar")
console.log(shoppingCart);

// Number6
shoppingCart.splice(shoppingCart.indexOf("Honey"), 1)
console.log(shoppingCart);

// Number7
shoppingCart.splice(shoppingCart.indexOf("Tea"), 1, "Green Tea")
console.log(shoppingCart);

// Number8
if (countries.includes("Ethiopia")) {
    console.log("Ethiopia exists");
} else countries.push("Ethiopia")

// Number9
if (webTechs.includes("Sass")) {
    console.log("Sass is a CSS preprocess");
} else {
    console.log(webTechs.push("Sass"));
} 

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullstack = frontEnd.concat(backEnd)
console.log(fullstack);