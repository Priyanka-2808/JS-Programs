1. Anagram or not

    function Anagram(a, b) {
        
        let len1 = a.length;
        let len2 = b.length;
        if(len1 !== len2){
           console.log('Invalid Input');
           return
        }
        let str1 = a.split('').sort().join('');
        let str2 = b.split('').sort().join('');
        if(str1 === str2){
           console.log("True");
        } else { 
           console.log("False");
        }
     }
     
     Anagram("fried","fired")

2. pascal shape 

let n = 5;
let string = " ";
for (let i = 1; i <= n; i++) {
  for (let k = 0; k < i; k++) {
    string += String.fromCharCode(k + 65);
  }
  string += "\n";
}

for (let i = 1; i <= n - 1; i++) {
    for (let k = 0; k < n - i; k++) {
      string += String.fromCharCode(k + 65);
    }
    string += "\n";
  }
console.log(string);

3. Adding up of string

let arr=[1,2,3,4,6,7,8,9];
function Add(arr,final) {
    let hash = {};
    let sum=[]
    arr.forEach((item)=> {
        let diff = final - item;
        if(hash[diff.toString()]!== undefined) {
            sum.push([item,diff]);
        }
        hash[item.toString()]=item;
    })
    return sum;
}
console.log(Add(arr,9));

4. Reverse the statement
function reverseWords(str) {

    const words = str.split(' ');
    
    const reversedWords = words.reverse();
    
    const reversedString = reversedWords.join(' ');
  
    return reversedString;
    
}
const inputString = 'The quick brown fox jumps over the lazy dog.';
const outputString = reverseWords(inputString);
console.log(outputString);


function reverseWords(str) {

    let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
    return reverseWordArr.join(" ");
  }
  console.log();


