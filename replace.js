const arr = ['a', 'b', 'c'];

const index = arr.indexOf('a'); // 👉️  0

if (index !== -1) {
  arr[index] = 'z';
}

console.log(arr); 