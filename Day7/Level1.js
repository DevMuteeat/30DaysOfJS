// Number1
function fullName$(){
    console.log("Muteeat Ibraheem");
 } 
 fullName$()

// Number2
function fullName(firstName, lastName){
    return `${firstName} ${lastName}`
}
console.log(fullName("Muteeat", "Ibraheem"));

// Number3
function addNumbers(a,b) {
    return a + b
}
console.log(addNumbers(5, 10));

// Number4
function areaOfRectangle(l, w){
    let area = l  * w
    return area
}
console.log(areaOfRectangle(2, 3));

// Number5
function perimeterOfRectangle(l, w){
    let perimeter = 2 * (l *w)
    return perimeter
}
console.log(perimeterOfRectangle(2, 3));

// Number6
function volumeOfRectPrism(l, w, h){
    let volume = l * w * h
    return volume

} 
console.log(volumeOfRectPrism(2, 3, 4));

// Number7
function areaOfACircle(r){
    let area = Math.PI * r * r
    return area
}

console.log(areaOfACircle(3));

// Number8
function circumOfCircle(r){
    let circumference = 2 * Math.PI * r
    return circumference
}
console.log(circumOfCircle(4));

// Number9
function density(m, v){
    let density = m/v
    return density
}
console.log(density(10, 2));

// Number10
const speed = (distance, time) => {
    return distance/time
}
console.log(speed(10, 5));

// Number11
const weight = (mass, gravity) => {
    return mass/gravity
}

console.log(weight(20, 4));

// Number12
const cToF = (c) => {
    f = (c * 9/5) + 32
    return f
}
console.log(cToF(100));

// Number13
const bmi = (weight, height) => {
    bmiiValue = weight / (height * height)
    if (bmiiValue < 18.5) {
        return "Underweight"
    } else if (bmiiValue >18.5 && bmiiValue <= 24.9) {
        return "Normal weight"
    } else if (bmiiValue >= 25 && bmiiValue < 29.9) {
        return "overweight"
    } else {
        return "Obese"
    }
}
console.log(bmi(85, 180));

// Number14
const checkSeason = (month) => {
    switch (month) {
        case "september":
        case "october":
        case "november":
            console.log("The sesason is Autumn");
            break;
        case "december":
        case "january":
        case "february":
            console.log("The saeson is winter");
            break;
        case "march":
        case "april":
        case "may":
            console.log("The season is spring");
            break;
        case "june":
        case "july":
        case "august":
            console.log("The season is summer");
            break;
    
        default:
            (console.log("Invalid month entered"))
    }
}
(checkSeason("april"));

// Number15
const findMax = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        return `${num1}`
    } else if (num2 > num1 && num2 > num3) {
        return `${num2}`
    } else (num3 > num1 && num3 > num2)
    return `${num3}`
} 
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));