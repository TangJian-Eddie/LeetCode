/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  function Fibonacci2(n, ac1 = 0, ac2 = 1) {
    if( n <= 1 ) {return ac2};
    return Fibonacci2(n - 1, ac2, ac1 + ac2);
  }
  return Fibonacci2(n)
};
