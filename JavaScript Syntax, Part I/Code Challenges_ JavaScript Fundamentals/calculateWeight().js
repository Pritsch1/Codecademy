// Write your function here:
function calculateWeight(earthWheight, planet) {
  switch (planet) {
    case "Mercury":
    return earthWheight * 0.378;
    break;
    case "Venus":
    return earthWheight * 0.907;
    break;
    case "Mars":
    return earthWheight * 0.377;
    break;
    case "Jupiter":
    return earthWheight * 2.36;
    break;
    case "Saturn":
    return earthWheight * 0.916;
    break;
    default:
    return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
    break;
  }
}
console.log(calculateWeight(100, 'Mercury'));
console.log(calculateWeight(100, 'Venus'));
console.log(calculateWeight(100, 'Mars'));
console.log(calculateWeight(100, 'Jupiter'));
console.log(calculateWeight(100, 'Saturn'));
console.log(calculateWeight(100, 'Pluto')); 
