// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// TEST CODE
//assertEqual("Lighthouse Labs", "Lighthouse Labs");
//assertEqual(1, 3);

const eqArrays = function(arr1, arr2) {
  let match = "";
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        match = false;
      } else {
        match = true;
      }
    }
  } else {
    match = false;
  }
  return match;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 4], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "5"], ["1", "2", 5]), false);
assertEqual(eqArrays([], [1, 2, 3]), true);