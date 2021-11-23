/*Calculate your dog years challange*/

//variables -local-
let myAge;
let earlyYears;
let laterYears;
let myAgeInDogYears;
let myName;
//Ask info
myAge = 26;
myName = "Pritsch";
//assingments and calculations
earlyYears = 2;
earlyYears *= 10.5;
laterYears = myAge - 2;
laterYears *= 4;
myAgeInDogYears = earlyYears + laterYears;
//check work
/*console.log(earlyYears);
console.log(laterYears);*/
//Print
console.log(`
My name is ${myName.toLowerCase()}.\n 
I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.
`);
