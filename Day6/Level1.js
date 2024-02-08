// Number1
// for loop
for (let i = 0; i <= 10; i++){
    console.log(i);
}

// while loop
let a = 0;
while(a <=10){
    console.log(a);
    a++
}

// do while loop
let b = 0;
do {
    console.log(b)
    b++;
} while (b <= 10);

// Number2
// for loop
for (let c = 10; c >=0; c--) {
    console.log(c);
}

// while loop
let d = 10;
while (d >=0) {
    console.log(d);
    d--
}


// do while loop
let e = 10;
do {
    console.log(e);
    e--
} while (e >= 0);

// Number3
let f = Number(prompt("Enter a number"))
for (let g = 0; g <= f; g++){
    console.log(g);
}

// Number4
let line = ""
for (let h = 0; h <=7; h++){
    line += "#"
    console.log(line);
}

// Number5
for (let j = 0; j <= 10; j++){
    console.log(`${j} * ${j} = ${j * j}`);
}

// Number6
for (let k = 0; k <= 10; k++){
    console.log(`${k} ${Math.pow(k, 2)} ${Math.pow(k,3)}`);
}

// Number7
for (let l = 0; l <= 100; l++){
    if (l % 2 == 0){
        console.log(l);
    }
}

// Number8
for (let m = 0; m <= 100; m++){
    if (m % 2 !==0){
        console.log(m);
    }
}

// // Number9
// for (let n = 0; n <= 100; n++){
//     for (let p = 2; p < n; p++){
//         if (n % p === 0 && n > 1){
//             console.log(n);
//         }
//     }
    
// }

// Number10
let sum = 0
for (let p = 0; p <= 100; p++){
    console.log(sum += p);
} 

// Number11
let even = 0
let odd = 0
for (let q = 0; q <= 100; q++){
    if (q % 2 == 0){
        even += q
    } else if (q % 2 > 0){
        odd += q
    }
}
console.log(`The sum of even is ${even} and the sum of odd is ${odd}`);

// Number12
let totalSum = [0, 0]
for (let r = 0; r<=100; r++){
    if (r % 2 == 0){
        totalSum[0] += r
    } else if (r % 2 > 0){
        totalSum[1] += r
    } 
}
console.log(totalSum);

// Number13
let randomNumber = [];
for (let s = 0; s < 5; s++){
    randomNumber.push(Math.floor(Math.random() * 10))
}
console.log(randomNumber);

// Number14
let uniqueNumber = [];
for (let t = 0; uniqueNumber.length < t;){
    let random = Math.floor(Math.random() * 10)
    if (uniqueNumber.indexOf(random) ==-1){
        uniqueNumber.push(random);
    }
} console.log(uniqueNumber);

let characters = "abcdef123456789";
let lengthofChar = 6;
let uniqueNum = ""
for (let le = 0; le < lengthofChar; le++) {
    const element = characters[le];
    // console.log(element);
    uniqueNum += characters[Math.floor(Math.random() * characters.length)]
    console.log(uniqueNum);
    
}

let characterss = "abcdef123456789";
let lengthofChars = 6;
let uniqueNumm = new Set();
for (let fe = 0; fe < lengthofChar; fe++) {
    // const element = characters[fe];
    // console.log(element);
    uniqueNumm += characterss[Math.floor(Math.random() * characterss.length)]
    console.log(uniqueNumm);
    
}