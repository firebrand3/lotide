// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let match;

  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key in object1) {
      if (Array.isArray(object1[key])) {
        match = eqArrays(object1[key], object2[key]);
      } else {
        if (key !== object2.key) {
          match = false;
        } else {
          match = true;
        }
      }
    }
  } else {
    match = false;
  }
  return match;
};

module.exports = eqObjects;

// TEST CODE

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// eqObjects(ab, ba);

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };

// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };

// console.log(eqObjects(cd, cd2)); // => false
