// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    if (invertedObj.hasOwnProperty(value)) {
      throw new Error();
    }
    invertedObj[value] = key;
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
//    {"key":1}
// b) What is the current return value when invert is called with { a: 1, b: 2 }
//    {"key":2}
// c) What is the target return value when invert is called with {a : 1, b: 2}
//    {"1":"a", "2":"b"}
// c) What does Object.entries return? Why is it needed in this program?
//    It returns all key-value pairs of the given `obj` as an array.  It is needed for looping all key-value pairs in order.
// d) Explain why the current return value is different from the target output
//    It does not swap the keys and values, and it used `.key` but not `[key]` so that `key` would be treated as literal string in the new `invertedObj` object.
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
module.exports = invert;