// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


//my solution using the for..in loop; Object.keys method not used
const findKeyByValue = function(obj, val){
// let result = [];
  for (const key in obj) {
  if (obj[key] === val) {
    return(key);
  }
  }
  return(undefined); 
}


// Solution using the Object.keys method and the for..of loop as suggested in compass
/*
const findKeyByValue = function(obj, val){
  let result = Object.keys(obj);
  for (const key of result) {
    if (obj[key] === val) {
      return key;
    }
  }
    return(undefined);
  }
*/


// TEST CODE
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");

console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"))
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);