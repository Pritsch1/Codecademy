function howOld(age, year) {
  let today = new Date().getFullYear();
  let newAge = (today - year) - age;
  let sign = Math.sign(newAge);
  if (year > 2021) {
    return `You will be ${newAge * -1} in the year ${year}`;
  }
  else if (year < 2021 && sign === +1) {
    return `The year ${year} was ${newAge} years before you were born`;
  }
  else if (year < 2021 && sign === -1) {
    return `You were ${newAge * -1} in the year ${year}`;
  }
  else if (year === today) {
    return `Really... On ${year} you are ${newAge * -1}. Which is the age you just typed... Tadaaa.`;
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
