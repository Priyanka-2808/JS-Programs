const text1 = 'hello';
const text2 = 'world';
const text3 = 'JavaScript';


const result1 = text1.concat(' ', text2);
console.log(result1); // "hello world"


const result2 = text1.toUpperCase();
console.log(result2); // HELLO

const result3 = text3.trim();
console.log(result3); // JavaScript

const result4 = text1.split();
console.log(result4); // ["hello"]

const result5= text1.slice(1, 3);
console.log(result5); // "el"