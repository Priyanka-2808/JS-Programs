const sumLargestNumbers = function(data) {
    let largest = data[0];
    let secondLargest = data[1];
  
    if(largest > secondLargest) {
      largest = data[0];
      secondLargest = data[1];
    } else {
      secondLargest = data[0];
      largest = data[1];
    }
  
    for(let i = 2; i < data.length; i++){
      if(data[i] > largest) {
        secondLargest = largest;
        largest = data[i];
      }
    }
    return largest + secondLargest;
  }
  
  console.log(sumLargestNumbers([1, 2, 3])); 