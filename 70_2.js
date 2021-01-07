/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 2) {
        return n;
    }
    let val = [];
    for (let i = 1; i <= n; i++) {
        if (i <= 2) {
            val[i - 1] = i;
        } else {
            val[i - 1] = val[i - 2] + val[i - 3];
        }
    }
    return val[n - 1];
};
console.log(climbStairs(4));
