const cesarCiphers = require("./cesar-cipher.js");

it("cesar cipher", () => {
  expect(cesarCiphers("hello!", 1)).toBe("ifmmp!");
});

it("cesar cipher second test", () => {
  expect(cesarCiphers("The odin project", 13)).toBe("gur bqva cebwrpg");
});

it("cesar cipher third test", () => {
  expect(cesarCiphers("¿Javascript?", 5)).toBe("¿ofafxhwnuy?");
});
