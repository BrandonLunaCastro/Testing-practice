const revertString = require("./revert-string.js");

test("revert to string", () => {
  expect(revertString("amazing")).toBe("gnizama");
});

test("revert to string", () => {
  expect(revertString("FREEDOM")).toBe("MODEERF");
});
