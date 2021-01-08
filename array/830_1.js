/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  let res = [];
  let temp = [s.slice(0, 1)];
  for (let i = 1; i < s.length; i++) {
    if (temp[temp.length - 1] === s.slice(i, i + 1)) {
      temp.push(s.slice(i, i + 1));
      if (i === s.length - 1 && temp.length >= 3) {
        res.push([i - temp.length + 1, i]);
      }
    } else {
      if (temp.length >= 3) {
        res.push([i - temp.length, i - 1]);
      }
      temp = [s.slice(i, i + 1)];
    }
  }
  return res;
};
console.log(largeGroupPositions("aaa"));
