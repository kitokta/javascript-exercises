const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((total, currentNumber) => {
    return total + currentNumber}, 0)

};

const multiply = function(array) {
  return array.reduce((total, currentNumber) => {
    return total*currentNumber})
};

const power = function(num1, num2) {
	let power = num1;
  for (let i=1; i<num2; i++) {
    power *= num1
  }
return power;
};

const factorial = function(num) {
	if (num === 1 || num === 0) return 1;
  else {
    let result = num;
  for (let i = num-1; i >=1; i--) {
    result *= i;
  }
  return result;
}};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
