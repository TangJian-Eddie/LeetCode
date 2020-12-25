/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let res = parseInt(s);
  if (isNaN(res)) {
    return 0;
  }
  if (res > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  }
  if (res < -Math.pow(2, 31)) {
    return -Math.pow(2, 31);
  }
  return res;
};
myAtoi("words and 987");
