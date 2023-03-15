// let message="hello";
// message=123;
// console.log(message);

// let user='Abc';
// let age=20;
// let occupation='service';
// console.log(user,age);

// let admin, names;
// names = "John";
// admin = names;
// console.log(admin);

// let planet="earth";

// let currentvisitor="abc";

// const BIRTHDAY = '18.04.1982';
// const age = someCode(BIRTHDAY);
// let currentage = age;
// console.log(currentage);   

// let message="hello";
// message = 1234;
// console.log(message);
// "use strict";
// alert("not a number"/2); //infinity
// alert(NaN + 1);

// console.log(85439525757 + 1);

// let str="hello";
// let str1='single quote';
// let phrase=`embedded together ${str}`;

// let names = "John";
// console.log(`Hello, ${names}!`);
// console.log(`result is ${1+2}`);

// let isgreater=4>1;
// console.log(isgreater);

// let age;
// console.log(age);

// let names='Nisha';
// console.log(`hello ${1}`);
// console.log(`hello ${'names'}`);
// console.log(`hello ${names}`);

// let age = 21;
// console.log(`you are ${age} years old!`);

// let isBoss = confirm("are you the boss?");
// console.log(isBoss);

// let names=prompt("what is yout name?","");
// alert(names);

// let conf = confirm("You must be at least 18 years old to view this content.");
// let name = prompt("What's your name?");
// let age = prompt("What's your age?");

// if (age>=18) {
// console.log("Welcome!");
// }
// else {
// console.log("Sorry, you must be at least 18 years old to view this content.");
// }

// let value=true;
// console.log(typeof value);

// value=String(value);
// console.log(typeof value);

// console.log(2**32);
// console.log(4**(1/2));

// let s="abc"+"def";
// console.log(s);

// console.log(2+2+2+"1");
// console.log(6-'2');

// let apples="2";
// let oranges="3";
// console.log(+apples+oranges);

// let year;
// if(year==3023){
//     console.log('correct');
//     console.log('you are smart');
// }
// console.log(year);

// let result=(age>18)?true:false;
// let age=50;
// console.log(result);


// console.log('what is th eofficial name of Js?');

// let result=(a+b<4)? 'Below':'over';
// console.log(result);

// let hour=12;
// let weekend=true;
// if(hour<10|| hour>18|| weekend); {
//     console.log('the office is closed');
// }

// result=a && b;

// let hour=12;
// let min=30;
// if(hour==12 && min==30) {
//     console.log('time is 12:30');
// }

// console.log(!!"non-empty string");

// console.log(!!null);

// console.log(!0);
// console.log(null||2||undefined);
// console.log(console.log(1)||2||console.log(3));

// console.log(1&&null&2);

// let age;
// if(age<14 && age>90);

// if(!(age>14 && age<=90));

// let username=prompt('whos there?');
// if(username==admin){
//     let pass=prompt('password','');
//     if(pass=='themaster');
//     {
//         console.log('Welcome');
//     }
//     else if(pass==''|| pass===null){
//         console.log("canceled");
//     }else{
//         console.log('wrong pswd');
//     }
// }

// let firstName = null;
// let lastName = null;
// let nickName = "Supercoder";

// // shows the first defined value:
// console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

// let area=height ?? 100*width??50;
// console.log(area);

// let i=0;
// while(i++<5)
// console.log(i);

// for(let i=0;i<5;i++) console.log(i);

// for(let j=0;j<5;++j) console.log(j);

// for(let a=2;a<=10;a++){
//     if(a%2==0){
//         console.log(a);
//     }
// // } 

/* Print upto 3 */

// let i=0;
// while(i<3){
//     console.log(`number ${i}!`);
//     i++;
// }

            /* PrimeNumbers */

// let num,n=10;
// nextPrime:
// for(num=2;num<=n;num++){
//     for(let j=2;j<n;j++){
//         if(n%j==0) continue nextPrime;
//     }
//     console.log(n);
// }

                /* Switch Case */
// let a="1";
// let b= 0;
// switch(+a) {
//     case b+1:
//     console.log('this runs, +a is 1, exactly b+!');
//     break;
//     default:
//         console.log("this doesn't rune");
// }

                /* switch to if stmt*/
// let browser;
// if(browser=='edge'){
//     console.log("ypu got the edge");
// } else if (browser=='chrome'
// || browser=='firefox'
// || browser=='safari'
// || browser=='opera') {
//     console.log("okay we support these browsers")
// } else {
//     console.log("we hope that this page looks unsupportable");
// }

// function sayHi(){
//     console.log("hello");
// };

// let sum=(a+b);
// console.log(sum(1,2));

// let user={
//     name: "John",
//     age: 30,
//     "likes birds": true
// } 
// console.log(user);

// let user={};
// user["likes birds"]= true;
// console.log(user["likes birds"]);

// let fruit='apple';
// let bag={
//     [fruit + 'computers']: 5
// };
// console.log(bag);

// function makeUser(name,age){
//     return{
//         name:name,
//         age:age,
//     };
// }
// let user=makeUser("john",30);
// console.log(user);

// 

// let user={age:30};
// let key="age";
// console.log(key in user);

// let user={
//     names:"john",
//     age: 30,
//     isadmin:true
// };

// for(let key in user){
//     console.log(key);
//     console.log(user[key]);
// }

// let codes={
//     "49":"germany",
//     "44":"paris",
//     "45":"usa",
//     "1":"britain"
// };
// for(let code in codes){
//     console.log(code);
// }

// console.log(String(Math.trunc(Number("49"))));
// console.log(String(Math.trunc(Number("+49"))));
// console.log(String(Math.trunc(Number("1.2"))));

// let user={
//     name:"john",
//     surname:"smith"
// };
// user.age=25;
// for(let prop in user){
//     console.log(prop);
// }

// let user={};
//     user.names="john",
//     user.surname="Smith";
//     user.name="Pete";
//     delete user.name;

// function isempty(obj){
//     for(let key in obj){
//         return false;
//     }
//     return true;
// }

// let salaries={
//     John:100,
//     Ann:160,
//     Pete:130
// };
// let sum=0;
// for(let key in salaries){
//     sum+=salaries[key]
// }
// console.log(sum);

// let user = {names: 'John'};
// let admin = user;
// admin.names='Pete';
// console.log(user.name);

// let a={};
// let b=a;
// console.log(a==b);
// console.log(a===b);

// let a={
//     names:"john",
//     age:30
// };
// let clone={};  //new empty obj
// //lets copy all the properties

// for(let key in user){
//     clone[key]=user [key];
// }
// clone.name="pete";
// console.log(user);

// let user={
//     names:"abc",
//     age:80,
//     sayHi() {
//         console.log(this.age);
//     }
// };
// user.sayHi();


/*  CALCULATOR */
// let CALCULATOR={
// sum() {
//     return this.a +this.b;
// },
// mul() {
//     return this.a*this.b;
// },
// read() {
//     this.a = +prompt('a?',0);
//     this.b = +prompt('b?',0);
// }
// };
// CALCULATOR.read();
// console.log(CALCULATOR.sum());
// console.log(CALCULATOR.mul());

// class Animal{
//     constructor(name){
//         this.speed=0;
//         this.name=name;
//     }
// }
// class Rabbit extends Animal {
//     constructor (name,earLength){
//         super(name);
//         this.earLength=earLength;
    
//     }
// }
// let rabbit = new Rabbit("white rabbit",10);
// console.log(rabbit.name);
// console.log(rabbit.earLength);

// class User{}
// User.staticMethod=function() {
//     console.log(this==User);
// };
// User.staticMethod();

// class Animal {}
// class Rabbit extends Animal {}
// console.log(Rabbit._proto_===Animal);

// console.log(Rabbit.prototype._proto_===Animal.prototype);

            /* public to protected */

// class CoffeMachine{
//     _waterAmount=0;
// set waterAmount(value) {
//     if(value<0) {
//         value=0;
//     }
//     this._waterAmount=value;
// }
// get waterAmount() {
//     return this._waterAmount;
// }
// constructor(power) {
//     this._power=power;
// }
// }
// let coffeMachine= new CoffeMachine(100);
// coffeMachine.waterAmount=-10;

                // public to private //

//                 class CoffeeMachine {
//                     #waterLimit = 200;
                  
//                     #fixWaterAmount(value) {
//                       if (value < 0) return 0;
//                       if (value > this.#waterLimit) return this.#waterLimit;
//                     }
                  
//                     setWaterAmount(value) {
//                       this.#waterLimit = this.#fixWaterAmount(value);
//                       }
//  }
// let coffeeMachine = new CoffeeMachine();                  
// coffeeMachine.#fixWaterAmount(123); 
//   coffeeMachine.#waterLimit = 1000; 

