/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let array = [];
  for (let j = 0; j < numRows; j++) {
    for (let i = 0; i < s.length / (numRows * 2 - 1); i++) {
      if (j == 0 || j == numRows) {
        array.push(
          s.slice(j + i * (numRows * 2 - 2), j + i * (numRows * 2 - 2) + 1)
        );
      } else {
        array.push(
          s.slice(j + i * (numRows - 1) * 2, j + i * (numRows - 1) * 2 + 1)
        );
        array.push(
          s.slice(j + i * (numRows - 1) * 2, j + i * (numRows - 1) * 2 + 1)
        );
      }
    }
  }

  console.log(array);
};
convert("LEETCODEISHIRING", 3);
