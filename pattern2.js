
let n = 5;
let string = " ";
for (let i = 0; i <= 5; i++) {
  for (let j = 5; j > i; j--) {
  }
  string += "\n";


    for (let k = 0; k <= i; k++) {
      string += String.fromCharCode(k + 65);
    
    // string += "\n";
  }
}
console.log(string);
