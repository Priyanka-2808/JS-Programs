
function allLetters(str){
    let alpha = new Set("abcdefghijklmnopqrstuvwxyz")
    for (let c of str.toLowerCase()){
        alpha.delete(c)
        if (alpha.size == 0) return true
    }
    return false
}
let text = "hello my name if gunther"
let text2 = "The quick brown fox jumps over the lazy dog"

console.log(allLetters(text))
console.log(allLetters(text2))

function maximumSubarraySum(arr) {
    let maxSum = -Infinity;
    let currentSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      currentSum += num;
  
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
  
      if (currentSum < 0) {
        currentSum = 0;
      }
    }
  
    return maxSum;
  }
  
  var a = [1,4,7], count = a[a.length - 1];
var missing = [];
for ( var i = 1; i <= count; i++ ) {
    if (a.indexOf(i) == -1) {
        a.push(i);
    }
}
// alert(missing.toString());
console.log(a)