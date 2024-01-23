// Number1
let base = prompt("Enter base")
let height = prompt("Enter height")
let area = Number(0.5 * base * height)
console.log(`The area of the triangle is ${area}`);

// Number2
let sideA = prompt("Enter side A of the Triangle")
let sideB = prompt("Enter side B of the Triangle")
let sideC = prompt("Enter side C of the Triangle")
let perimeter = Number(sideA) + Number(sideB) + Number(sideC)
console.log(`The perimeter of the triangle is ${perimeter}`);

// Number3
let length = parseFloat(prompt("Length"))
let width = parseFloat(prompt("width"))
let perimeter$ = 2 * (length + width)

// Number4
let radius = prompt("Enter radius")
const pi = 3.14
const areaOfCircle = pi * radius * radius
const perimeterOfACircle = 2 * pi * radius

// Number7
let hour = prompt("Enter hour")
let rate = prompt("Enter rate")
let weeklyEarning = Number(hour * rate) 
console.log(`Your weekly earning is ${weeklyEarning}`);

// Number8
let myName = "Muteeat"
myName.length > 7 ? console.log('My name is long') : console.log('My name is short');

// Number9
let firstName$ = "Muteeat"
let lastName$ = "Ibraheem"
firstName$.length < lastName$.length ? console.log('My first name, Muteeat is shorter than my family name, Ibraheem') : console.log('My first name, Muteeat is longer than my family name, Ibraheem');

// Number10
let myAge = 250
let yourAge = 25
console.log(`I am ${myAge - yourAge} years older than you`);

// Number11
let birthYear1 = parseFloat(prompt("1995"))
let birthYear2 = parseFloat(prompt("2005"))
2020 - birthYear1 >= 18 ? console.log(`You are ${2020 - birthYear1} years old. You are old enough to drive`) : console.log('You are not old enough to drive');
2020 - birthYear2 < 18 ? console.log(`You are ${2020 - birthYear2} years old.You will be allowed to drive after 3 years`) : console.log('You are old enough to drive');

// Number12
let yearsLived = parseFloat(prompt("Enter numbers of years you live"))
console.log(`You lived ${yearsLived * 31536000} seconds.`);

// Number13
const d = new Date();
let mins = d.getMinutes()
let hours = d.getHours()
let year = d.getFullYear()
let month = d.getMonth()
let date = d.getDate()

console.log(`${year}-${month + 1}-${date} ${hours}:${mins}`);
console.log(`${date}-${month + 1}-${year} ${hours}:${mins}`);
console.log(`${date}/${month + 1}/${year} ${hours}:${mins}`);