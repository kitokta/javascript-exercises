const palindromes = function (string) {
const reverseString = string.split('').reverse().join('');
const length = string.length;
let result = 0;
for (let i =0; i<length;i++) {
    reverseString[i] === string[i] ? result += 0 : result += 1;
}
if (result != 0) return false;
else return true;

};

// Do not edit below this line
module.exports = palindromes;
