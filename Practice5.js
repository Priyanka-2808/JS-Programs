// 1. pattern
let n = 6; 
let string = "";

{
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += String.fromCharCode(j + 65);
  }
  string += "\n";
}
for (let i = 1; i <= n-1; i++) {
  for (let d = 0; d < n - i ; d++) {
    string += String.fromCharCode(d + 65);
  }
  string += "\n";
}
console.log(string);

}


// 2. vowels removed

// function Vowel(str)
// {
//     let vowels = [ 'a', 'e', 'i', 'o', 'u', 
//                'A', 'E', 'I', 'O', 'U' ];
//     let result = "";
      
//     for(let i = 0; i < str.length; i++) 
//     {
          
//         if (!vowels.includes(str[i]))
//         {
//             result += str[i];
//         }
//     }
//     return result;
// }
// let str = "Alphabin Technology Consulting";
// console.log(Vowel(str));


//3. Intersection 

// let first_array = [1,2,3,4,5,6];
// let second_array = [2,4,6,8,10];

// let res_arr = (first_array, second_array) => {
//     let new_array = [];
//     for (let i = 0; i < first_array.length; i++) {
//         for (let j = 0; j < second_array.length; j++) {
//             if (first_array[i] === second_array[j]) {
//                 new_array.push(first_array[i]);
//             }
//         }
//     }
//     return new_array;
// };
// console.log(res_arr(first_array, second_array));

//4. array containing only the numbers that are present in both input arrays

const array1 = [1,4,2,5,3,'A','B',];
const array2 = [8,5,4,2,'C','D'];
     
    function findCommonElement(array1, array2){
        
         let new_array=[];
    
        for(let i = 0; i < array1.length; i++) {
           
            for(let j = 0; j < array2.length; j++) {
                
                if(array1[i] === array2[j]) {
                  new_array.push(array1[i]);
                 
                    
                }
            }
        }
        return new_array;
    
        console.log("No numbers has been found");
        // return /^[0-9]*$/.test(str);
    }
console.log(findCommonElement(array1, array2));

