/*Simple Challange to convert celcius, fahrenheit and kelvin*/

//Variables
let celcius;
let fahrenheit;
let newton;
const kelvin = 200;
//Convesions
celcius = kelvin - 273;
fahrenheit = 9/5 * celcius + 32;
newton = 33/100 * celcius;
//Log Results
console.log(`
The temperature is ${Math.floor(fahrenheit)} degrees Fahrenheit\n
`);
console.log(`Celcius: ${celcius} Kelvin: ${kelvin}\n`);
console.log(`${celcius} Celcius is ${newton} Newton\n`);
