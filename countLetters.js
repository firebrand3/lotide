// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let results = {};
  //let count = 0;
  for (const letter of string) {
    //console.log(letter)
    if (results[letter]) {
      //console.log(results[letter]);
      //console.log(results);
      results[letter]++;
    }
    else if (letter !== " ") {
      results[letter] = 1;  
  }
//console.log(results);
  }
  return results;
};
  

console.log(countLetters("lighthouse in the house"));