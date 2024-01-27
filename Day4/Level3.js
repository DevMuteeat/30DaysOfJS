let month$ = prompt("Enter month to check the number of days")
if (month$ == 'january' || month$ == 'march' || month$ == 'may' || month$ == 'july' || month$ == 'august' || month$ == 'october' || month$ == 'december'){
    console.log(`${month$} has 31 days`);
} else if (month$ == 'april' || month$ == 'june' || month$ == 'september' || month$ == 'november'){
    console.log(`${month} has 30 days`);
} else if (month$ == 'february'){
    console.log(`${month$} has 29 days`);
} else console.log("invalid month entered");