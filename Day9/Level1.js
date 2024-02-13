const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Number1
/*forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and array itself.

map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.

Filter: Filter out items which full fill filtering conditions and return a new array.

reduce: Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value.*/

// Number2
const callback = (n) => n * n;

// Number3
countries.forEach(country => {
    console.log(country);
})

// Number4
names.forEach(name => {
    console.log(name);
})

// Number5
numbers.forEach(number => {
    console.log(number);
})

// Number6
const upperCase = countries.map((country) => country.toUpperCase());
console.log(upperCase);

// Number7
const length = countries.map((country) => country.length);
console.log(length);

// Number8
const square = numbers.map((sqr) => sqr * sqr);
console.log(square);

// Number9
const nameUpper = names.map((name$) => name$.toUpperCase());
console.log(nameUpper);

// Number10


// Number11
const countryFilter = countries.filter((country) => {
    return country.includes('land')
})
console.log(countryFilter);

// Number12
const filter = countries.filter((country) => {
    if (country.length === 6) {
        return countries
    }
})
console.log(filter);

// Number13
const moreThanSixChar  = countries.filter((country) => {
    if (country.length >= 6) {
        return countries
    }
})
console.log(moreThanSixChar);

// Number14
const countryWithE = countries.filter((country) => country.startsWith("E"));
console.log(countryWithE);

// Number15

// Number16

// Number17
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

// Number18

// Number19
// some: Check if some of the elements are similar in one aspect. It returns boolean

// every: Check if all the elements are similar in one aspect. It returns boolean

// Number20
const nameLength = names.some((len) => len.length > 7);
console.log(nameLength);

// Number21
const allCountries = countries.every((country) => country.includes("land"));
console.log(allCountries);

// Number22
// find: Return the first element which satisfies the condition

// findIndex: Return the position of the first element which satisfies the condition


// Number23
const sixLetters = countries.find((country) => country.length === 6);
console.log(sixLetters);


// Number24
const sixLettersIndex = countries.findIndex((country) => country.length == 6);
console.log(sixLettersIndex);

// Number25
const norway = countries.findIndex((country) => country === "Norway");
console.log(norway);

// Number26
const russia = countries.findIndex((country) => country === "Russia");
console.log(russia);