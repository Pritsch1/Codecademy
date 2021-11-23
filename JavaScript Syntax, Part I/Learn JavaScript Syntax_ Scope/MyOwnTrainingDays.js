//#MyOwn
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

const getTrainingDays = event => {
let days = 11;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }
  return days;
};

function logEventAndTime (name, event, days) {
  console.log(`${name}'s event is: ${event}`);
  console.log(`${name}'s time to train is: ${days} days`);    
}

const event = getRandEvent();
const days = getTrainingDays(event);
const name = 'Nala';
logEventAndTime(name, event, days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
logEventAndTime(name2, event2, days2);

//deleted code
/*const logEvent = event => {
  console.log(`${name}'s event is: ${event}`);
};
const logTime = days => {
  console.log(`${name}'s time to train is: ${days} days`);
};*/
