//my solution using the for..in loop; Object.keys method not used
const findKeyByValue = function (obj, val) {
  // let result = [];
  for (const key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
  return undefined;
};

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

module.exports = findKeyByValue;

// TEST CODE
// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))
// console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"))
