var longestPalindrome = function (s) {
  let len = s.length;
  let res = "";
  let dp = Array.from(new Array(len), () => new Array(len).fill(0));
  for (let i = 0; i < len; i++) {
    for (let j = i; j >= 0; j--) {
      if (s[i] === s[j] && (i - j < 2 || dp[j + 1][i - 1])) {
        dp[j][i] = true;
      } else {
        dp[j][i] = false;
      }
      if (dp[j][i] && i - j + 1 > res.length) {
        res = s.slice(j, i + 1);
      }
    }
  }
  console.log(dp)
  return res;
};
console.log(longestPalindrome("aaaa"));
