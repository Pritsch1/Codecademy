/*
This one took me to an endeavor reaching down to IEEE 754 standards and also learning what cohorts are. 
At first i didn't fully get the concept of Truthy and Falsy and was most confused by the fact that divisions by 0 result in infinity and not NaN.
Couple of days wen't to searching all of this. Had a lot of fun.
*/

function truthyOrFalsy(value) {
  if (value) {
    return true;
  }
  else {
    return false;
  }
}
let fiveByZero = 5 / -0;
let fiveByZeroTimesZero = (5 / 0) * 0;
console.log("5/0");
console.log(truthyOrFalsy(fiveByZero));
console.log("5/0*0");
console.log(truthyOrFalsy(fiveByZeroTimesZero));
console.log(truthyOrFalsy(NaN));

/*
console.log("\nNaN (std, real, truthy)");
console.log(truthyOrFalsy(NaN));
console.log(truthyOrFalsy(iamdefined));
console.log(truthyOrFalsy(4));

console.log("\nfalse (std = real, truthy)");
console.log(truthyOrFalsy(false));
console.log(truthyOrFalsy(true));

console.log("\n0 (std = real, truthy)");
console.log(truthyOrFalsy(0));
console.log(truthyOrFalsy(1));

console.log("\n-0 (std, real, truthy)");
console.log(truthyOrFalsy(-0));

console.log("\n0n (std, real, truthy)");
//console.log(truthyOrFalsy(0n));
//console.log(truthyOrFalsy(0));
//console.log(truthyOrFalsy(0));

console.log("\nEmpty String (std, real, truthy)");
console.log(truthyOrFalsy(""));
console.log(truthyOrFalsy(''));
console.log(truthyOrFalsy("asda"));

console.log("\nNull (std, real, truthy)");
console.log(truthyOrFalsy(null));
console.log(truthyOrFalsy());
console.log(truthyOrFalsy(5));

console.log("\nUndef. (std, real, truthy)");
console.log(truthyOrFalsy(undefined));
//console.log(truthyOrFalsy(imnotdefined));
console.log(truthyOrFalsy(iamdefined));*/
