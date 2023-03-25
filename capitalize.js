const mySentence = "alphabin technology consulting";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

words.join(" ");
console.log(words);
