function averageCalculate (arr) {
  const sumAll = arr.reduce((acu, current) => {
    acu += current;
    return acu;
  }, 0);

  return Number.isInteger(sumAll)
    ? sumAll / arr.length
    : (sumAll / arr.length).toFixed(2);
}
function minNumber (arr) {
  let min = maxNumber(arr);
  for (let i = 0; i < arr.length; i++) {
    min = Math.min(arr[i], min);
  }
  return min;
}
function maxNumber (arr) {
  let max = 0;
  for (const n of arr) {
    max = Math.max(max, n);
  }
  return max;
}

const analyzeArray = (arr) => {
  return {
    average: averageCalculate(arr),
    min: minNumber(arr),
    max: maxNumber(arr),
    length: arr.length
  };
};

module.exports = analyzeArray;
