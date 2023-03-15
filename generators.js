// function* generateSequence() {
//     yield 1;
//     yield 2;
//     yield 3;
// }
// let generator = generateSequence();
// console.log(generator);

// function* generateSequence(){
//     yield 1;
//     yield 2;
//     yield 3;
// }
// let generator=generateSequence();
// let one=generator.next();
// console.log(JSON.stringify(one));

// function hello(name){
//     let phrase =`hello,${name}!`;
//     debugger;
//     SyntaxError(phrase);
// }

export function sayHi(user){
    console.log(`hello,${user}`);
}

import {sayhi} from './sayHi.js';
console.log(sayHi);
sayHi('John');

console.log
