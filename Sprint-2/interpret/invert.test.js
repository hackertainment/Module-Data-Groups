const invert = require("./invert.js");

test("invert on an empty object returns an empty object", () => {
    expect(invert({})).toEqual({});
});

test("invert on an object returns swapped keys and values", () => {
    expect(invert({a:1})).toEqual({"1":"a"});
    expect(invert({a:1, b:2})).toEqual({"1":"a", "2":"b"});
    expect(invert({a:undefined, b:null, c:NaN, d:true, e:""})).toEqual({"undefined":"a", "null":"b", "NaN":"c", "true":"d", "":"e"});
    expect(invert({a:[], b:[1,2], c:{}})).toEqual({"":"a", "1,2":"b", "[object Object]":"c"});
});

test("invert on an object with duplicate stringify values throws an error", () => {
    expect(() => {invert({a:1, b:1});}).toThrow();
    expect(() => {invert({a:"", b:[]});}).toThrow();
});
