/*
This was actually a fun one to do. I made a mistake that should have not passed as a correct solition and ended up finding an error in the correction of the challenge.
This made me confident that I was getting all I can from these leasons and was really devoted to it.   
*/
// Write your function here:
function finalGrade(a, b, c) {
  if (a < 0 || a > 100 || b < 0 || b > 100 || c < 0 || c > 100){
    return "You have entered an invalid grade.";
  }
  let average = (a + b + c) / 3;
  if (average >= 0 && average <=59) {
    return "F";
  }
  else if (average >= 60 && average <=69) {
    return "D";
  }
  else if (average >= 70 && average <=79) {
    return "C";
  }
  else if (average >= 80 && average <=89) {
    return "B";
  }
  else if (average >= 90 && average <=100) {
    return "A";
  }
}
console.log("\nBugs for Averages 0 and 100");
console.log(finalGrade(0, 0, 0));
console.log(finalGrade(100, 100, 100));

/*console.log("Average F");
console.log(finalGrade(0, 0, 0));
console.log(finalGrade(20, 20, 20));
console.log(finalGrade(59, 59, 59));
//
console.log("\nAverage D");
console.log(finalGrade(60, 60, 60));
console.log(finalGrade(65, 65, 65));
console.log(finalGrade(69, 69, 69));
//
console.log("\nAverage C");
console.log(finalGrade(70, 70, 70));
console.log(finalGrade(75, 75, 75));
console.log(finalGrade(79, 79, 79));
//
console.log("\nAverage B");
console.log(finalGrade(80, 80, 80));
console.log(finalGrade(85, 85, 85));
console.log(finalGrade(89, 89, 89));
//
console.log("\nAverage A");
console.log(finalGrade(90, 90, 90));
console.log(finalGrade(95, 95, 95));
console.log(finalGrade(100, 100, 100));
//
console.log("\nAverage Wrong");
console.log(finalGrade(101, 101, 101));
console.log(finalGrade(-1, -1, -1));
//
console.log("\nGrade Wrong");
console.log(finalGrade(-1, 10, 10));
console.log(finalGrade(10, -1, 10));
console.log(finalGrade(10, 10, -1));
*/
