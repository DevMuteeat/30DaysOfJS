// Number2
rgbColorGenerator = () => {
    let one = Math.floor(Math.random() * 255);
    let two = Math.floor(Math.random() * 255);
    let three = Math.floor(Math.random() * 255);
    return `rgb(${one},${two},${three})`

}
console.log(rgbColorGenerator());

// Number10
isEmpty = (age) => {
    if (age === undefined) {
        return `it is empty`
    } else {
        return `it is not empty`
    }
}
console.log(isEmpty(10));

// Number11
sum = (...args) => {
    let sum = 0;
    args.forEach((args) => sum += args)
    return sum
}

console.log(sum(2, 3, 8, 4, 6));

// Number12
// sumOfArrayItems = (arr) => {
//     let sum = 0;
//     arr.forEach((el) => {
//         if (typeof el === "number") {
//             sum += el
//         } else {
//             `it is a string`
//         }
//     })
// }
// console.log(sumOfArrayItems(5, 9, 8));

// Number13
// average = (arr) => {
//     let sum = 0;
//     arr.forEach((el) => {
//         if (typeof el === "number") {
//             sum += el;
//             sum = arr.length/sum
//         } else {
//             sum = `it is a string`
//         }
//     })
//     return sum
// }
// console.log(average(1, 2, 3, 4, 5, 6, 7, 8));

// Number20
reverseCountries = () => {
    let countries = ["Nigeria", "Ghana", "Cameroon", "Canada", "China"]
    countries.reverse()
    return countries
}
console.log(reverseCountries());