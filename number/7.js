/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res;
  if (!x) {
    return 0;
  }
  if (x < 0) {
    res = `-${parseInt((-x).toString().split("").reverse().join(""))}`;
  } else {
    res = parseInt(x.toString().split("").reverse().join(""));
  }
  if (res > Math.pow(2, 31) - 1 || res < -Math.pow(2, 31)) {
    return 0;
  }
  console.log(res);
  return res;
};
reverse(-123);
