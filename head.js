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

const head = function(arr) {
  return arr[0];
};

//head([5,6,7,8,3]);
//console.log(head([5,6,7,8,3]));

assertEqual(head([0,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");