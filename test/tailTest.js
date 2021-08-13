const assert = require("chai").assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
  assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns [7,3,1] for [5,7,3,1]", () => {
    assert.deepEqual(tail([5,7,3,1]), [7,3,1]);
  });
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });
});