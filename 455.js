/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let res = 0;
  for (let i = 0, j = 0; i < s.length; i++) {
    if (s[i] >= g[j]) {
      res++;
      j++;
    }
    if (j === g.length) {
      break;
    }
  }
  console.log(res)
  return res
};
findContentChildren();
