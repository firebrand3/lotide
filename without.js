const without = function (source, itemsToRemove) {
  let newArray = source;
  for (let i = source.length - 1; i >= 0; i--) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      //console.log(source[i],itemsToRemove[j]);
      if (source[i] === itemsToRemove[j]) {
        newArray.splice(i, 1);
      }
    }
  }
  return newArray;
};

module.exports = without;
