let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLocaleLowerCase());
console.log(challenge.substr(0,2));
console.log(challenge.substr(3, 18));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(" "));
let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(string.split(','));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
let word = 'You cannot end a sentence with because because because is a conjunction'
console.log(word.indexOf("because"));
console.log(word.lastIndexOf("because"));
console.log(challenge.trim());
console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("Script"));
console.log(challenge.match("a"));
let merge = '30 Days of'
console.log(merge.concat(" Javascript"));
console.log(challenge.repeat(2));