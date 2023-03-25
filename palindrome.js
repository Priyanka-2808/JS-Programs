function palindrome(string) {
    const len=string.length;

    for(let i=0;i<len/2;i++) {
        if(string[i] !==string[len - 1 -i]){
            return 'it is not a palindrome';
        }
    }
    return 'it is a palindrome';
}

const string = DayPilot.Modal('enter a string');
const value = palindrome(string);
console.log(value);

