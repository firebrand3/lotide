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

const middle = function(input) {
  let arrayLength = input.length;
  let result = [];
  let i = 0;

  if (arrayLength <= 2) {
  } else if (arrayLength % 2 === 0) {
    i = arrayLength / 2;
    result.push(input[i - 1], input[i]);
  } else if (arrayLength % 2 !== 0) {
    i = Math.round(arrayLength / 2);
    result.push(i);
  }
  return result;
};

//console.log eqArrays((middle([1,2]),);

assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6,7]), [4]));
assertArraysEqual(eqArrays(middle([1, 2, 4]), [2]));
assertArraysEqual(eqArrays(middle(["1", "2", "5"]), [5]));
assertArraysEqual(eqArrays(middle([]), [1, 2, 3]));
