const fibonacci = function(number) {
let result = 1;
if (number < 0) return "OOPS";
else {
    for (i = 3; i<parseInt(number); i++) {
        result = result + (result+1);
    }
    return result;
}
};

// Do not edit below this line
module.exports = fibonacci;
