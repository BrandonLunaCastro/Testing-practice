const capitalize = require("./capitalize.js");

test("first character capitalize", () => {
  expect(capitalize("hello")).toBe("Hello");
});
