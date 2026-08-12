const totalTill = require("./till.js");

test("empty till returns zero", () => {
    expect(totalTill({})).toEqual("£0");
});

test("coins in a till returns pound", () => {
    expect(totalTill({"1p": 10, "5p": 6, "50p": 4, "20p": 10})).toEqual("£4.4");
});
