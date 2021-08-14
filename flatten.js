//function to flatten array elements, works for only 1 level of nesting
const flatten = function (input) {
  let result = [];

  for (let i = 0; i < input.length; i++) {
    if (!Array.isArray(input[i])) {
      result.push(input[i]);
    } else if (Array.isArray(input[i])) {
      for (let j = 0; j < input[i].length; j++) result.push(input[i][j]);
    }
  }
  return result;
};

//Alternate flatten function using the .flat method for all levels of nesting

// const flatten = (input) => {return (input.flat(Infinity))}

module.exports = flatten;
