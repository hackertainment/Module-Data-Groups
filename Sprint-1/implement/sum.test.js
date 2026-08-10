/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
test("given an empty array, returns 0", () => {
    expect(sum([])).toEqual(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with just one number, returns that number", () => {
    expect(sum([-1])).toEqual(-1);
    expect(sum([0])).toEqual(0);
    expect(sum([1])).toEqual(1);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array with both positive and negative numbers, returns the largest number overall", () => {
    expect(sum([0, 1])).toEqual(1);
    expect(sum([0, -1])).toEqual(-1);
    expect(sum([1, 0])).toEqual(1);
    expect(sum([-1, 0])).toEqual(-1);
    expect(sum([1, 0, 1])).toEqual(2);
    expect(sum([1, 0, -1])).toEqual(0);
    expect(sum([-1, 0, 1])).toEqual(0);
    expect(sum([-1, 0, -1])).toEqual(-2);
    expect(sum([10, 20, 30])).toEqual(60);
    expect(sum([10, 20, -30])).toEqual(0);
    expect(sum([10, -20, 30])).toEqual(20);
    expect(sum([10, -20, -30])).toEqual(-40);
    expect(sum([-10, 20, 30])).toEqual(40);
    expect(sum([-10, 20, -30])).toEqual(-20);
    expect(sum([-10, -20, 30])).toEqual(0);
    expect(sum([-10, -20, -30])).toEqual(-60);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array with decimal/float numbers, returns the correct total sum", () => {
    expect(sum([0, 0.1])).toBeCloseTo(0.1);
    expect(sum([0, -0.1])).toBeCloseTo(-0.1);
    expect(sum([0.1, 0])).toBeCloseTo(0.1);
    expect(sum([-0.1, 0])).toBeCloseTo(-0.1);
    expect(sum([0.1, 0, 0.1])).toBeCloseTo(0.2);
    expect(sum([0.1, 0, -0.1])).toBeCloseTo(0);
    expect(sum([-0.1, 0, 0.1])).toBeCloseTo(0);
    expect(sum([-0.1, 0, -0.1])).toBeCloseTo(-0.2);
    expect(sum([0.1, 0.2, 0.3])).toBeCloseTo(0.6);
    expect(sum([0.1, 0.2, -0.3])).toBeCloseTo(0);
    expect(sum([0.1, -0.2, 0.3])).toBeCloseTo(0.2);
    expect(sum([0.1, -0.2, -0.3])).toBeCloseTo(-0.4);
    expect(sum([-0.1, 0.2, 0.3])).toBeCloseTo(0.4);
    expect(sum([-0.1, 0.2, -0.3])).toBeCloseTo(-0.2);
    expect(sum([-0.1, -0.2, 0.3])).toBeCloseTo(0);
    expect(sum([-0.1, -0.2, -0.3])).toBeCloseTo(-0.6);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array containing non-number values, returns the sum of the numerical elements", () => {
    expect(sum(['hey', 10, 'hi', 60, 10])).toEqual(80);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, returns 0", () => {
    expect(sum(['hey', 'hi'])).toEqual(0);
});
