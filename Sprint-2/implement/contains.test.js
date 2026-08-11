const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise

// Given an empty object
// When passed to contains
// Then it should return false
test("contains on empty object returns false", () => {
    expect(contains({}, "c")).toEqual(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("contains on object with an existing property name returns true", () => {
    expect(contains({a: 1, b: 2}, "a")).toEqual(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("contains on object with a non-existent property name returns false", () => {
    expect(contains({a: 1, b: 2}, "c")).toEqual(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("contains on invalid object returns false", () => {
    expect(contains([], "c")).toEqual(false);
    expect(contains("", "c")).toEqual(false);
    expect(contains(true, "c")).toEqual(false);
    expect(contains(0, "c")).toEqual(false);
    expect(contains(0n, "c")).toEqual(false);
    expect(contains(NaN, "c")).toEqual(false);
    expect(contains(Symbol(), "c")).toEqual(false);
    expect(contains(new Map(), "c")).toEqual(false);
    expect(contains(new Set(), "c")).toEqual(false);
    expect(contains(undefined, "c")).toEqual(false);
    expect(contains(null, "c")).toEqual(false);
    expect(contains(function(){}, "c")).toEqual(false);
});
