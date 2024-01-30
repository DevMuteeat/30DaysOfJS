// Number1
let empArr = Array()
console.log(empArr);

// Number2
let empArr2 = ["Muteeat", "Olaide", "Mubarak", "Yusuf", "Muhammad", "Eniola"]
console.log(empArr2);

// Number3
console.log(empArr2.length);

// Number4
console.log(empArr2[0]);
let middle = empArr2.length/2
console.log(empArr2[middle]);
console.log(empArr2[empArr2.length-1]);

// Number5
let mixedDataTypes = ["Eniola", 3, 2, true, "Mubarak", "Muhammad", "Muteeat"]
console.log(mixedDataTypes.length);

// Number6
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// Number7
console.log(itCompanies);

// Number8
console.log(itCompanies.length);

// Number9
console.log(itCompanies[0]);
let middleIt = (itCompanies.length-1)/2
let lastIt = itCompanies.length-1
console.log(itCompanies[middleIt]);
console.log(itCompanies[lastIt]);

// Number10
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

// Number11
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

// Number12
console.log(itCompanies.join(", "));

// Number13
if (itCompanies.includes("Amazon")) {
    console.log("Amazon exists");
} else {
    console.log("Amazon is not found");
}

// Number15
console.log(itCompanies.sort());

// Number16
console.log(itCompanies.reverse());

// Number17
console.log(itCompanies.slice(0, 3));

// Number18
let last3 = itCompanies.length-3
console.log(itCompanies.slice(last3, itCompanies.length));

// Number19
let midComp = (itCompanies.length-1)/2
let middleCompany = itCompanies.slice(midComp, 4)
console.log(middleCompany);

// Number20
itCompanies.shift()
console.log(itCompanies);

// Number21
itCompanies.splice((itCompanies.length-1)/2, 1)
console.log(itCompanies);

// Number22
itCompanies.pop()
console.log(itCompanies);

// Number23
itCompanies.splice(0)
console.log(itCompanies);