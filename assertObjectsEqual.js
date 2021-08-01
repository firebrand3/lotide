// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
  return [match];
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let match;
  
  if ((Object.keys(object1).length) === (Object.keys(object2).length)) {
    
    for (const key in object1) {
      
      if (Array.isArray(object1[key])) {
        
        match = eqArrays(object1[key], object2[key]);
      } else {
        if (key !== object2.key) {
          match = false;
        } else {
          match = true;
        }
      }
    }
  } else {
    match = false;
  }
  return [match, object1, object2];
};


const assertObjectsEqual = function(match) {
  //console.log(match[1]);
  //console.log(match[2]);
  const inspect = require('util').inspect;
  if (match[0]) {
    console.log(`✅✅✅ ${inspect(match[1])} matches ${inspect(match[2])}`);
  } else if (!match[0]) {
    console.log(`🛑🛑🛑 ${inspect(match[1])} does not match ${inspect(match[2])}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertObjectsEqual(eqObjects(ab, ba)); // => true
// eqObjects(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc)); // => false
// eqObjects(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(eqObjects(cd, dc)); // => true
// console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(eqObjects(cd, cd2)); // => false
// console.log(eqObjects(cd, cd2)); // => false



// TEST CODE
// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual(1, 3);
