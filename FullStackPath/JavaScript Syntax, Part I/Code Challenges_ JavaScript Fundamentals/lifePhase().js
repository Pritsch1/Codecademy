// Write your function here:
function lifePhase(age) {
  if (age >= 0 && age <= 3) {
    return "baby";
  }
  else if (age >= 4 && age <= 12) {
    return "child";
  }
  else if (age >= 13 && age <= 19) {
    return "teen";
  }
  else if (age >= 20 && age <= 64) {
    return "adult";
  }
  else if (age >= 65 && age <= 140) {
    return "senior citizen";
  }
  else if (age < 0 || age > 140) {
    return "This is not a valid age";
  }
}
// Uncomment the line below when you're ready to try out your function
console.log(lifePhase(5)); //should print 'child'

// We encourage you to add more function calls of your own to test your code!
console.log(lifePhase(0));
console.log(lifePhase(2));
console.log(lifePhase(3));
//
console.log(lifePhase(4));
console.log(lifePhase(7));
console.log(lifePhase(12));
//
console.log(lifePhase(13));
console.log(lifePhase(15));
console.log(lifePhase(19));
//
console.log(lifePhase(20));
console.log(lifePhase(28));
console.log(lifePhase(64));
//
console.log(lifePhase(65));
console.log(lifePhase(98));
console.log(lifePhase(140));
//
console.log(lifePhase(141));
console.log(lifePhase(-1));
//
