let input = "ax ex ix ox ux";
const vowels = ["A", "E", "I", "O", "U"];
let resultArray = [];

for (let i = 0; i < input.length; i++) 
{
  for (let j = 0; j < vowels.length; j++)
{
   input = input.toUpperCase();
    
    if (input[i] === vowels[j]) 
 {
     resultArray.push(vowels[j]);
    if (input[i] === "E" || input[i] === "U") 
 {
    resultArray.push(vowels[j]);
 }
 }
}
}
console.log(resultArray.join());
/*
 switch (input[i]) {
     case vowels[j]:
     resultArray.push(vowels[j]);
     break;
     case "E":
     resultArray.push("E");
     break;
     case "U":
     resultArray.push("U");
     break;
   }  

   --------------

   else if (input[j] === "E") 
{
    resultArray.push("E");
}
    else if (input[i] === "U") 
{
    resultArray.push("U");   
} 
   */
