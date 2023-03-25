function longestSubstring(str) {
    let longest = '';
    let current = '';
    const map= {};

    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);

        if (map[char]) {
            const index = current.indexOf(char);
            current = current.slice(index + 1);
        }

        current += char;
        map[char] = true;

        if (current.length > longest.length) {
            longest = current;
        }
       
    }
    return longest;
}

console.log(longestSubstring("Whatsapp Facebook Instagram"));

 