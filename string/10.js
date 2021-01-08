/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let reg = new RegExp(p);
  if (!s) {
    return reg.test(s);
  }
  if (!s.replace(reg, "")) {
    return true;
  } else {
    return false;
  }
};
isMatch("", ".");
