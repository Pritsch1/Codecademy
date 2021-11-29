function missingNos(array, k) {
let add = 1, limit = k, arr = [];
for (let i = 0; i < (array.length + k) && limit != 0; i++)
{
  let a = array[i], b = array[i - 1];
  if (a === undefined) {a = array[i - 1] + 1+ limit;}    
  let correct = a - b;
  if (b === undefined) {correct = array[i]}
  if (add === array[i])
  {
    add++;
  } 
  else if (correct > 1)
  { 
    let stop = correct;
    do
    {
      stop--;      
      limit--;    
      arr = [...arr, add++]//How does this even add 1?!
    } while (stop != 1)
    if (b != undefined){add = array[i] + 1;}
    else if(b === undefined){add++;}
  }  
}
return arr;
}
console.log(missingNos([2, 4, 5, 8], 10))

// Leave this so we can test your code:
module.exports = missingNos;