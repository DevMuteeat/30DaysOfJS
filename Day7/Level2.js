// Number3
const printArray = (names) => {
    let name$ = ["Ayo", "Muteeat", "Tosin", "Eniola", "Aisha"]
    name$.forEach(element => {console.log(element);
        
    });
    return names
} 
printArray()
// Number4
const showDateTime = () => {
    let time = new Date ();
    let date = time.getDate()
    let month = time.getMonth()
    let year = time.getFullYear()
    let hours = time.getHours()
    let minute = time.getMinutes()
    let time$ = `${date}/${month +1}/${year} ${hours}:${minute}`
    return time$

} 
console.log(showDateTime());

// Number5
swapValues = (x, y) => {
    return `x = ${y} y =${x}`
}
console.log(swapValues(3, 4));
console.log(swapValues(4, 5));

// Number6
let array = ["Ayo", "Muteeat", "Tosin", "Eniola", "Aisha"]
reverseArray = (arr) => {
    let newArray = [];
    for (let i = array.length-1; i >=0; i--) {
        newArray.push(arr[i]);
    }
    return newArray
} 
console.log(reverseArray(array));

// Number7
let names$ = ["Ayo", "Muteeat", "Tosin", "Eniola", "Aisha"]
capitalizedArray = (word) => {
    let newArr = [];
    for (let i = 0; i <names$.length; i++) {
        newArr.push(word[i]);
    word[i] = names$[i].toUpperCase()
    }
        return word
}
console.log(capitalizedArray(names$));

// Number8
addItem = (arr) => {
    let result = [arr];
    return result;
}
console.log(addItem("rice", "beans", "spagh"));

// Number9
let item = [1, 2, 3, 4]
removeItem = (index) => {
    item.splice(index, 1);
    return item
}
console.log(removeItem(item));

// Number10
sumOfNumbers = (...args) => {
    let sum = 0;
    args.forEach((arg) => sum += arg);
    return sum
}
console.log(sumOfNumbers(10, 5, 2, 8));

// Number11
sumOfOdd = (...args) => {
    let oddSum = 0;
    args.forEach((arg) =>{
        if (arg % 2 !== 0) {
            oddSum += arg
        }
    })
    return oddSum
}
console.log(sumOfOdd(5, 2, 6, 8, 3, 7, 4, 9));

// Number12
sumOfEven = (...args) => {
    let evenSum = 0;
    args.forEach((arg) =>{
        if (arg % 2 === 0) {
            evenSum += arg
        }
    })
    return evenSum
}
console.log(sumOfEven(5, 2, 6, 8, 3, 7, 4, 9));

// Number13
evensAndOdds = (num) => {
    let odd = 0;
    let even = 0;
    for (let i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            even++
        } else {odd++}
    }
    return`the number of odds are ${odd} and the number of even are ${even}`

}
console.log(evensAndOdds(100));

// Number14
sum = (...args) => {
    let sum = 0;
   args.forEach((el) => sum += el);
   return sum
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

// Number15
randomUserIp = () => {
    let one = Math.floor(Math.random() * 255);
    let two = Math.floor(Math.random() * 255);
    let three = Math.floor(Math.random() * 255);
    let four = Math.floor(Math.random() * 255);
    return `userIp: ${one}:${two}:${three}:${four}`
}
console.log(randomUserIp());