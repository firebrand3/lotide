const assertEqual = require('./assertEqual');

const head = function(arr) {
  return(arr[0]);
};


//head([5,6,7,8,3]);
//console.log(head([5,6,7,8,3]));

// assertEqual(head([0,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;