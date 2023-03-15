// function occurenceofeveryLetter(str) {
//     let counts={};
//     for(let i=0; i<str.length; i++) {
//         let char=str[i].toLowerCase();
//     if(/[a-z]/.test(char)) {
//         if(char in counts) {
//             counts[char] ++;
//         }
//         else 
//         {
//             counts[char]=1;
//         }
//     }
//     }
//     return counts;
// }
// console.log(occurenceofeveryLetter("hello world"));

// // /// ///// (Correct)





// class classroom {
//     constructor(name,enNo) {
//         this.name=name;
//         this.enNo=enNo;
//     }
//     static attendance() {
//         console.log(this.name+","+this.enNo+" "+ "is present");
//     }
// }
// class exam extends classroom{
//     constructor(name,enNo,marks) {
//         super(ame,enNo);
//         this.marks=marks;
//     }
//     static marks() {
//         console.log("she get"+this.marks+"marks");
//     }
// } 
// class rank extends exam{
//     constructor (name,enNo,marks,rank) {
//         super(name,enNo,marks);
//     }
//     static ranking() {
//         console.log("she got"+this.rank+"rank");
//     }
// }
//     let student =new classroom("priya",16,96,1);

  ////////no output 





// class Abstraction{
//     set(x,y) {
//         this.a=x
//         this.b=y
//     }
//     display() {
//         console.log(this.a+this.b);
//     }
// }
// let obj =new Abstraction();
// obj.set(10,20);
// obj.display();

///// correct




// function pattern(n){
//     let string="";
//     for(let i=1;i<=n;i++){
//         for(let j=0; j<n-1;j++){
//             string+=" ";
//         }
//         for(let k=0;k,i;k++) {
//             string +="*";
//         }
//         string+="\n";
//     }
//     return string;
// }
// console.log(pattern(5));

//error