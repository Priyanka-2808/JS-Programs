let n=6;
let string=" ";
for(let i=1; i<=n;i++){
    for(let k=0; k<i;k++){
        string+=String.fromCharCode(k+65);
    }
    string+="\n";
}
for(let i=1;i<n-1;i++) {
    for(let k=0;k<n-i;k++){
        string+=String.fromCharCode(k+65);
    }
    string+="\n";
}
console.log(string);
