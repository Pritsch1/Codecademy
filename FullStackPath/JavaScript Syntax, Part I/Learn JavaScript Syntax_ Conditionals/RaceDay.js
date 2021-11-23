/*Registration for runners challenge */

//Variables
let raceNumber = Math.floor(Math.random() * 1000);
let runnerEarlyTime = true;
let runnerAge = 19;
//Assing number for Early adults
if (runnerAge > 18 && runnerEarlyTime){
  raceNumber += 1000;
  //console.log(raceNumber);
}
//Log runner's racing time
if (runnerAge > 18 && runnerEarlyTime){
  console.log(`Runner ${raceNumber} shall race at 9:30 am.`);
}
else if (runnerAge > 18 && !runnerEarlyTime){
  console.log(`Runner ${raceNumber} shall race at 11:00 am.`);
}
else if (runnerAge < 18){
  console.log(`Runner ${raceNumber} shall race at 12:30 pm.`);
} 
else if(runnerAge = 18){
  console.log(`Plese direct yourself to the registration desk.`)
}


