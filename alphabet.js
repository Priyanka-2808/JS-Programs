let str = prompt("enter a string");
let res = "The quick brown fox jumps over the lazy dog"
function alphabet(str){
    let alpha = new Set("abcdefghijklmnopqrstuvwxyz")
    for (let a of str.toLowerCase()){
        if (alpha.size == 0) return true
    }
    return false
}
console.log(alphabet(res));