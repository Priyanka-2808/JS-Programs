// function printans( ans )
//     {
//       for( let [ key ,value] of ans)
//       {
//         console.log(`${key}  occurs  ${value} times` );
           
//       }
//     }
     
//     function count( str , outp_map )
//     {
//       for( let i = 0 ;i < str.length ;i++)
//       {
     
//         let k = outp_map.get(str[i]);
//         outp_map.set(str[i], k+1) ;
             
         
//       }
//       printans(outp_map);
//     }
//          function count_occurs( test , callback )
//     {
     
//       if( test.length === 0 )
//       {
//         console.log(" empty string ");
//         return ;
//       }
//       else
//       {
//         // map for storing count values
//         let ans = new Map();
//         for( let i = 0 ;i < test.length;i++)
//         {
//           ans.set(test[i], 0);
//         }
         
//         callback( test ,ans);
         
//       }
     
//     }
     
//     // test string
//     let test =  "helloworld";
//     count_occurs( test ,count);

// class BaseClass { }
// // SocialNetworkMixin
// const SocialNetwork = (superclass) => class extends superclass {
//     foo() {
//         console.log('foo');
//     }
// }
// // AdProviderMixin
// const AdProvider = (superclass) => class extends superclass {
//     bar() {
//         console.log('bar');
//     }
// }
// // Our helper class that will make things look better
// class MixinBuilder {
//     constructor(superclass) {
//         this.superclass = superclass;
//     }
//     with(...mixins) {
//         return mixins.reduce((c, mixin) => mixin(c), this.superclass);
//     }
// }
// // this will combine everything in one class
// const mix = (superclass) => new MixinBuilder(superclass);

// class Facebook extends mix(BaseClass).with(SocialNetwork, AdProvider) {}
// const fb = new Facebook();
// fb.foo();
// fb.bar();


// let s = 'hello';
// var result = [...s].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {}); 
// console.log(result); // {h: 1, e: 1, l: 2, o: 1}

// let h="priyanka";
// var result=[...h].reduce((a,e)=> {a[e]= a[e] ? a[e] + 1:1; return a}, {});
// console.log(result);


// let sayMixin = {
//     say(phrase) {
//       alert(phrase);
//     }
//   };
  
//   let sayHiMixin = {
//     __proto__: sayMixin, // (or we could use Object.setPrototypeOf to set the prototype here)
  
//     sayHi() {
//       // call parent method
//       super.say(`Hello ${this.name}`); // (*)
//     },
//     sayBye() {
//       super.say(`Bye ${this.name}`); // (*)
//     }
//   };
  
//   class User {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   // copy the methods
//   Object.assign(User.prototype, sayHiMixin);
  
//   // now User can say hi
//   new User("Dude").sayHi(); // Hello Dude!


//   function createArr() {
//     let quantity = 3
//     let result = []
//     for (let i = 1; i <= quantity; i++) {
//         let res;
//         for (let j = 1; j <= i; j++) {
//             res += `${j}`;
//         }
//         result.push(res);
//     }
 
//     alert(result)
// }

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 0; j < n - i; j++) {
//     process.stdout.write(' ');
//   }
//   // printing star
//   for (let k = 0; k < i; k++) {
//     process.stdout.write('*');
//   }
//   console.log();
// }

// let n = 5
// let right = " "

// for (let i = 1; i <= n; i++){
//   // console.log(i)
//   // i + 1,2,3,4,5
//   for (let j = 1; j <= i; j++){
//      right += "*"
//     // right = *
//   }
//    right += "\n"
//    // * += 5
// }

// console.log(right)


// let n=5;
// let string="";
// for(let i=1; i<=n;i++) {
//     for(let j=0; j<n-i; j++) {
//         string += " ";
//     }
//     for(let k=0; k<i; k++) {
//         string +="*";
//     }
//     string+="\n";
// }
// console.log(string);

// let pattern = "";
// for (let i = 1; i <= 4; i++) {
// //   let numZeros = i - 1;
//   let num = i.toString().repeat(i);
//   pattern += num;
//   if (i < 4) {
//     pattern += "0"*i;
//     pattern += ",";
//   }
// }
// console.log(pattern);

// ////Abstraction
// function Employee(name,age,salary){
//     this.name=name;
//     this.age=age;
//     this.salary=salary;

//     this.getEmpDetails=function() {
//         console.log ('Name:' +this.name+' |Age: '+this.age);
//      }
// }

// let emp1=new Employee("xyz",20,34423);
// emp1.getEmpDetails();


// class HumanBeing{
//     havelegs(){
//         console.log(`have four legs`);
//     }
// }
// class Person extends HumanBeing{
//     constructor(name) 
//         havetwohands() { 
//         super();
//         this.hands=hands;
//         this.name=name;

//     }
// }
// class Senses extends Person {
//     havesensitiveSense() {
//         this.eye=eye;
//         this.nose=nose;
//         this.ear=ear;
//     }
// }
// let personObj = new Person("ABC");



// let n=4;
// let pattern=" ";
// for(let i=1;i<=4;i++) {
//     pattern+=i.toString().repeat(i);
// }
// console.log(pattern);

