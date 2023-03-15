// try{
//     console.log('start of try runs');

//     console.log('end of try runs');

// } catch (err) {

//     console.log('catch is ignored');
// }

// let json="{ bad json }";
// try {
//     let user= JSON.parse(json);
//     console.log(user.name);
// }

// catch(err) {
//     console.log("our apologies,the data has errors");
//     console.log(err.name);
//     console.log(err.message);}

// let json='{"age":30}';
// try{
//     let user=JSON.parse(json);
//     console.log(user.name);
// } catch (err) {
//     console.log("doesn't execute");
// }

// let json = '{ "age": 30 }'; 

// try {

//   let user = JSON.parse(json); 

//   if (!user.name) {
//     throw new SyntaxError("Incomplete data: no name"); 
//   }

//   console.log( user.name );

// } catch (err) {
//   console.log( "JSON Error: " + err.message ); 
// }

class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name=this.constructor.name;
    }
}
let err= new FormatError("formatting error");
console.log(err.message);
console.log(err.name);
console.log(err.stack);

console.log(err instanceof SyntaxError );

