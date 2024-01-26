let sentence2 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern = /love/gi
console.log(sentence2.match(pattern));
let sentence3 = 'You cannot end a sentence with because because because is a conjunction'
let pattern2 = /because/gi
console.log(sentence3.match(pattern2));
let sent = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let regEx = /[!@#$%^&;]/g
console.log(sent.replace(regEx, ''));
let income =  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let digit = /\d+/g;
let digitWords = income.match(digit)
let income1 = parseInt(digitWords[0])*12;
let income2 = parseInt(digitWords[1]);
let income3 = parseInt(digitWords[2]*12);
let totalIncome = income1 + income2 + income3;
// let income4 = parseInt(digitWords[0]*12 + digitWords[1]+ digitWords[2]*12);
console.log(totalIncome);