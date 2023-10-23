const analyzeArray = require("./analyze-array.js");

it(" analyzing array ", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});

it(" analyzing array ", () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual({
    average: 5.5,
    min: 1,
    max: 10,
    length: 10
  });
});
