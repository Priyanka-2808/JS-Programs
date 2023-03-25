
// let length=3;
// const char="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let result="";
// let singlechar="";
// const charLength=char.length
// for(let i=0;i<charLength;i++) 
// {
//   result+=char.charAt(Math.floor(Math.random()*charLength))
// }
// let digit=Math.floor(Math.random()*(1111-4999+1))+4999
// console.log(result);

function panCard(length)
{
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

let result = ""
let singleChar = ""

const charLength = characters.length

let counter = 0;
    while (counter < length) 
    {
      result += characters.charAt(Math.floor(Math.random() * charLength));
      counter += 1;
    }


let digit = Math.floor(Math.random()* (1111 - 4999 + 1)+ 4999) 

singleChar += characters[Math.floor(Math.random() * charLength)]
 
return result+digit+singleChar

}

console.log(panCard(5));
