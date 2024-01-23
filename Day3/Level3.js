const d$ = new Date()
mins = d$.getMinutes();
mins < 10 ? '0' + mins.toString() : mins;
hours = d$.getHours()
hours < 10 ? '0' + hours.toString() : hours;

year = d$.getFullYear()
date = d$.getDate()
month = d$.getMonth()
console.log(`${year}-${month + 1}-${date} ${hours}:${mins}`);