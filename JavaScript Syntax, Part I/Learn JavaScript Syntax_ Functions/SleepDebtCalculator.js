function getSleepHours(day) {
  switch (day) {
    case "monday":
    return 7;
    break;
    case "tuesday":
    return 7;
    break;
    case "wednesday":
    return 7;
    break;
    case "thursday":
    return 7;
    break;
    case "friday":
    return 7;
    break;
    case "saturday":
    return 7;
    break;
    case "sunday":
    return 7;
    break;
  }
}

function getActualSleepHours() {
  return getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday"); 
}

function getIdealSleepHours(idealHours) {
  return idealHours * 7;
}

function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(7);
  if (actualSleepHours === idealSleepHours) {
        console.log("Spot on! You are well rested my friend.");
  }
  else if (actualSleepHours > idealSleepHours) {
    console.log("Son of a Coala! Someone is feeling lazy.");
    console.log(`You have ${actualSleepHours - idealSleepHours} hour(s) of sleep surplus.`);
  }
  else if (actualSleepHours < idealSleepHours) {
    console.log("Hey Zombie! What about getting some rest?");
    console.log(`You have to catch up on ${idealSleepHours - actualSleepHours} hour(s) of sleep.\n`);
  }
}
calculateSleepDebt();
