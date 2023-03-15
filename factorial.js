const numbers = parseInt(prompt('Enter a positive integer: '));
if (numbers < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}
else if (numbers === 0) {
    console.log(`The factorial of ${numbers} is 1.`);
}
else {
    let fact = 1;
    for (i = 1; i <= numbers; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${numbers} is ${fact}.`);
}