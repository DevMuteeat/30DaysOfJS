// Number1
let score = Number(prompt("Enter your score:"))
if (score > 79 && score < 101){
    alert("Your grade is A")
} else if (score > 69 && score < 90){
    alert("Your grade is B")
} else if (score > 59 && score < 70){
    alert("Your grade is C")
} else if (score > 49 && score < 60){
    alert("Your grade is D")
} else {
    alert("your grade is F")
}

// Number2
let month = prompt("Enter month")
// switch (month) {
//     case "September":
//     case "October":
//     case "November":
//         console.log("The season is Autumn");
//         break;
//     case "December":
//     case "January":
//     case "February":
//         console.log("The season is winter");
//         break;
//     case "March":
//     case "April":
//     case "May":
//         console.log("The season is Spring");
//         break;
//     case "June":
//     case "July":
//     case "August":
//         console.log("The season is Summer");
//         break;
        
//     default:
//         console.log("This is not a season");
//         break;
// } 
if (month == "September" || month == "October" || month == "November"){
    alert("The season is Autumn")
} else if (month == "December" || month == "January" || month == "February"){
    alert("The season is winter")
} else if (month == "March" || month == "April" || month == "May"){
    alert("The season is Spring")
} else if (month == "June" || month == "July" || month == "August"){
    alert("The season is Summer")
} else ("This is not a month")

// Number3
let day = prompt("What day is it today")
if (day == 'saturday' || day == 'sunday'){
    console.log(`${day} is a weekend`);
} else {
    console.log(`${day} is a working day`);
}