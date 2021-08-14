const assertArraysEqual = function (match) {
  if (match) {
    // console.log(`✅✅✅ ${arr1} matches ${arr2}`);
    console.log(`✅✅✅ Assertion Passed: both arrays match`);
  } else {
    // console.log(`🛑🛑🛑 ${arr1} does not match ${arr2}`);
    console.log(`🛑🛑🛑 Assertion Failed: arrays dont match`);
  }
};

module.exports = assertArraysEqual;
