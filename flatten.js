
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

const flatten = function(input) {
  let result = [];
  //console.log(result);
  
  for (let i = 0; i < input.length; i++) {
    //console.log(Array.isArray(input[i]));

    if (!Array.isArray(input[i])) {
      result.push(input[i]);
      //console.log(result);
    } else if (Array.isArray(input[i])) {
      for (let j = 0; j < input[i].length; j++)

        result.push(input[i][j]);
    //console.log(result);
    }
  }
  return result;
};

console.log(flatten([[1, 7], [3, 4], 5, [6]]));