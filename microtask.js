// let promise=Promise.resolve();
// promise.then(()=>console.log("promise done!"));
// console.log("code finished");


Promise.resolve()
.then(()=> console.log("promise done"))
.then(()=> console.log("code done"));