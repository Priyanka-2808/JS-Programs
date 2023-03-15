// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("done!"), 1000);
//   });
//   promise.then(
//     result => console.log(result), // shows "done!" after 1 second
//     error => console.log(error) // doesn't run
//   );

new Promise((resolve,reject)=> {
    setTimeout(()=>resolve("value"),)
})