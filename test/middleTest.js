const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6,7]), [4]));
assertArraysEqual(eqArrays(middle([1, 2, 4]), [2]));
assertArraysEqual(eqArrays(middle(["1", "2", "5"]), [5]));
assertArraysEqual(eqArrays(middle([]), [1, 2, 3]));
