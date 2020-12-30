/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let array = [];
  if (numRows === 1) {
    return s;
  }
  for (let j = 0; j < numRows; j++) {
    for (let i = 0; i < s.length / (numRows * 2 - 2); i++) {
      if (j == 0 || j == numRows - 1) {
        array.push(
          s.slice(j + i * (numRows * 2 - 2), j + i * (numRows * 2 - 2) + 1)
        );
      } else {
        array.push(
          s.slice(j + i * (numRows - 1) * 2, j + i * (numRows - 1) * 2 + 1)
        );
        array.push(
          s.slice(
            j + i * (numRows - 1) * 2 + (numRows - j - 1) * 2,
            j + i * (numRows - 1) * 2 + (numRows - j - 1) * 2 + 1
          )
        );
      }
    }
  }
  return array.join("");
};
console.log(convert("PAYPALISHIRING", 3));