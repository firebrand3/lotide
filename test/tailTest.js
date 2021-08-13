const tail = require('../tail');
const assertEqual = require('../assertEqual');


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 1: Check the returned array elements
console.log("Test Case 1");
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Check the returned array elements
console.log("Test Case 2");
const result1 = tail([5,7,3,1]);
assertEqual(result1.length, 4); // ensure we get back two elements
assertEqual(result1[0], 7); // ensure first element is "Lighthouse"
assertEqual(result1[1], 3); // ensure second element is "Labs"