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

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));
assertArraysEqual(eqArrays([1, 2, 4], [3, 2, 1]));
assertArraysEqual(eqArrays(["1", "2", "5"], ["1", "2", 5]));
assertArraysEqual(eqArrays([], [1, 2, 3]));