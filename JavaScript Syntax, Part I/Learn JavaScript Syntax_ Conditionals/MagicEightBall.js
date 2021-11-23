/*It's a Magic Eight Ball...*/

//Variables
let userName = "Pritsch";
let userQuestion = "Is this project good?";
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = ""; //NOT USING IT
//Zie Game
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");
console.log(`The answer to "${userQuestion}" is:`);

switch (randomNumber){
  case 0:
  console.log('It is certain');
  break;
  case 1:
  console.log('It is decidedly so');
  break;
  case 2:
  console.log('Reply hazy try again');
  break;
  case 3:
  console.log('Cannot predict now');
  break;
  case 4:
  console.log('Do not count on it');
  break;
  case 5:
  console.log('My sources say no');
  break;
  case 6:
  console.log('Outlook not so good');
  break;
  case 7:
  console.log('Signs point to yes');
  break;
}
/*
if (randomNumber === 0){
  console.log('It is certain');
}
else if (randomNumber === 1){
  console.log('It is decidedly so');
}
else if (randomNumber === 2){
  console.log('Reply hazy try again');
}
else if (randomNumber === 3){
  console.log('Cannot predict now');
}
else if (randomNumber === 4){
  console.log('Do not count on it');
}
else if (randomNumber === 5){
  console.log('My sources say no');
}
else if (randomNumber === 6){
  console.log('Outlook not so good');
}
else {
  console.log('Signs point to yes');
}
*/
