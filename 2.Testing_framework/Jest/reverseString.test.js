const { test } = require("node:test");
const reverseString = require("./reverseString");

test("reverseString function exists", () => {
    expect(reverseString).toBeDefined();
});

test("String revrses", () => {
    expect(reverseString("hello")).toEqual("olleh");
});
