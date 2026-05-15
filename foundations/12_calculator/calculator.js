const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((acc, curr) => acc * curr);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (number) {
  let initialValue = 1;
  for (let i = number; i > 0; i--) {
    initialValue *= i;
  }

  return initialValue;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
