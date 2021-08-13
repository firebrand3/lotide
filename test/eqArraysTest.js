const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 4], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "5"], ["1", "2", 5]), false);
assertEqual(eqArrays([], [1, 2, 3]), true);