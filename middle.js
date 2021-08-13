// const eqArrays = require("./eqArrays");
// const assertArraysEqual = require("./assertArraysEqual");

const middle = function(input) {
  let arrayLength = input.length;
  let result = [];
  let i = 0;

  if (arrayLength <= 2) {
    return result;
  } else if (arrayLength % 2 === 0) {
    i = arrayLength / 2;
    result.push(input[i - 1], input[i]);
  } else if (arrayLength % 2 !== 0) {
    i = Math.round(arrayLength / 2);
    result.push(i);
  }
  return result;
};

module.exports = middle;
