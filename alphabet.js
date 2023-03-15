let str = prompt("enter a string");
let res = "The quick brown fox jumps over the lazy dog"
function alphabet(str){
    let alpha = new Set("abcdefghijklmnopqrstuvwxyz")
    for (let a of str.toLowerCase()){
        
        if (alpha.size == 0) return true
    }
    return false
}
// console.log(alphabet(str));
console.log(alphabet(res));


// function Alphabet(a) {
//     var a = thewryuiop;
//     var string=abcdefghijklmnopqrstuvwxyz;
//     if(a.value.match(string))
//     {
//         console.log("true");
//     } else {
//         console.log("false");
//     }
// }
