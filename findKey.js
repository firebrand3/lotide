const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


//my solution using the for..in loop; Object.keys method not used
const findKey = function(obj, val) {
  for (const key in obj) {
    if ((val(obj[key]))) {
      return (key);
    }
  }
  // return (undefined);
};
  

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"





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
