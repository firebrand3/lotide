const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");
const without = require("./without");
const flatten = require("./flatten");
const countOnly = require("./countOnly");
const countLetters = require("./countLetters");
const letterPositions = require("./letterPositions");
const findKeyByValue = require("./findKeyByValue");
const eqObjects = require("./eqObjects");
const assertObjectsEqual = require("./assertObjectsEqual");
const takeUntil = require("./takeUntil");
const findKey = require("./findKey");
const map = require("./map");

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  assertEqual: assertEqual,
  eqArrays: eqArrays,
  assertArraysEqual: assertArraysEqual,
  without: without,
  flatten: flatten,
  countOnly: countOnly,
  countLetters: countLetters,
  letterPositions: letterPositions,
  findKeyByValue: findKeyByValue,
  eqObjects: eqObjects,
  assertObjectsEqual: assertObjectsEqual,
  takeUntil: takeUntil,
  findKey: findKey,
  map: map,
};
