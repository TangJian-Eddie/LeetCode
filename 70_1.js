/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) {
    return n;
  }
  function Fibonacci2(n, ac1 = 1, ac2 = 2) {
    if (n <= 2) {
      return ac2;
    }
    return Fibonacci2(n - 1, ac2, ac1 + ac2);
  }
  return Fibonacci2(n);
};
console.log(climbStairs(4));
