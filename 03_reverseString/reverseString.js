const reverseString = function(string) {
myString ='';

for (let i=string.length-1; i>=0; i--){
    myString = myString + string[i];
}

return myString;
};

reverseString('')
// Do not edit below this line
module.exports = reverseString;
