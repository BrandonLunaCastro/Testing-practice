const calculator = require("./calculator.js");

it("use function calculate sum", () => {
  expect(calculator.sum(2, 3)).toBe(5);
});

it("use function calculate subtract", () => {
  expect(calculator.subtract(10, 4)).toBe(6);
});

it("use function calculate divide", () => {
  expect(calculator.divide(100, 5)).toBe(20);
});

it("use function calculate multiply", () => {
  expect(calculator.multiply(7, 5)).toBe(35);
});
