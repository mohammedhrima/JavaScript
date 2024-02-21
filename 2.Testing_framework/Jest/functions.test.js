const { test, beforeEach, afterEach } = require("node:test");
const functions = require("./functions");
// const { default: axios } = require("axios");

const initDatabase = () => console.log("init database");
const closeDatabase = () => console.log("close database");

beforeEach(() => initDatabase);
afterEach(() => closeDatabase);

test("test add(2,2) == 4 :", () => {
    expect(functions.add(2, 2)).toBe(4);
});

test("Adds add(2,2) != 5 :", () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test("Should be null", () => {
    expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
    expect(functions.checkValue(0)).toBeFalsy();
});

test("User should be object", () => {
    expect(functions.createUser()).toEqual({
        firstName: "Mohammed",
        lastName: "Hrima",
    });
});

test("Should be under 1600", () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1800);
});

test("There is no I in team", () => {
    expect("team").not.toMatch(/I/);
});

test("Admin should be in usernames", () => {
    usernames = ["john", "karen", "admin"];
    expect(usernames).toContain("admin");
});

// test("fetch data", async () => {
//     expect.assertions(1);
//     const data = await functions.fetchUser();
//     expect(data.title).toEqual("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
// });
