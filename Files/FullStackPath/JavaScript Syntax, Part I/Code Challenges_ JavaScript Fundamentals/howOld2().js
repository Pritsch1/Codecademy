//Changed the newAge math to make the code more clear

function howOld(age, year) {
  let today = new Date().getFullYear();
  //we can remove a few -1 multiplications at the return statements
  let newAge = (year - today) + age;
  let sign = Math.sign(newAge);
  if (year > 2021) {
    return `You will be ${newAge} in the year ${year}`;
  }
  else if (year < 2021 && sign === -1) {
    return `The year ${year} was ${newAge * -1} years before you were born`;
  }
  else if (year < 2021 && sign === +1) {
    return `You were ${newAge} in the year ${year}`;
  }
  else if (year === today) {
    return `Really... On ${year} you are ${newAge}. Which is the age you just typed... Tadaaa.`;
  }
  else if (newAge === 0) {
    return "That's the year you were born!"
  }
}
console.log("1959");
console.log(howOld(27, 1959));
console.log("\n2001");
console.log(howOld(27, 2001));
console.log("\n2030");
console.log(howOld(27, 2030));
console.log("\n3030");
console.log(howOld(27, 3030));
console.log("\n1354");
console.log(howOld(27, 1354));
console.log("\n1994");
console.log(howOld(27, 1994));
console.log("\n2021");
console.log(howOld(27, 2021));
