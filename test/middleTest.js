const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns [4] for [1,2,3,4,5,6,7]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });
  it("returns [2] for [1,2,4]", () => {
    assert.deepEqual(middle([1, 2, 4]), [2]);
  });
  it("returns ['b'] for ['a', 'b', 'c']", () => {
    assert.deepEqual(middle(["a", "b", "c"]), ["b"]);
  });
});
