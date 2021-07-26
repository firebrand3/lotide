const words = ["hello", "world", "lighthouse"];


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
  return [match, arr1, arr2];
};

const assertArraysEqual = function(match) {
  //console.log(match[1]);
  //console.log(match[2]);

  if (match[0]) {
    console.log(`✅✅✅ ${match[1]} matches ${match[2]}`);
  } else {
    console.log(`🛑🛑🛑 ${match[1]} does not match ${match[2]}`);
  }
};

const without = function(source, itemsToRemove) {
  let newArray = source;
  //let counter = 0;
  //console.log(newArray);
  //console.log(source);
  //console.log(itemsToRemove);

  for (let i = source.length - 1; i >= 0; i--) {

    for (let j = 0; j < itemsToRemove.length; j++) {
    //console.log(source[i],itemsToRemove[j]);
      if (source[i] === itemsToRemove[j]) {
        newArray.splice(i,1);
      }
    }
  }
  return newArray;
};

//console.log(without([1, 2, 4], [3, 2, 1]));
//console.log(without([1, 2, 3], [1])); // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(eqArrays(words, ["hello", "world", "lighthouse"]));
console.log(words);


//assertArrayEqual(eqArrays([1, 2, 3], [1, 2, 3]));
//assertArrayEqual(eqArrays([1, 2, 4], [3, 2, 1]));
//assertArrayEqual(eqArrays(["1", "2", "5"], ["1", "2", 5]));
//assertArrayEqual(eqArrays([], [1, 2, 3]));