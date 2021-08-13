const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));
assertArraysEqual(eqArrays([1, 2, 4], [3, 2, 1]));
assertArraysEqual(eqArrays(["1", "2", "5"], ["1", "2", 5]));
assertArraysEqual(eqArrays([], [1, 2, 3]));