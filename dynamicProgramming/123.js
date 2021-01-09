/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length <= 1) {
    return 0;
  }
  const n = prices.length;
  const k = Math.min(2, Math.floor(n / 2));
  let profit = new Array(k + 1);
  //初始化买入卖出时的利润
  for (let j = 0; j <= 2; j++) {
    profit[j] = {
      profit_in: -prices[0],
      profit_out: 0,
    };
  }
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= 2; j++) {
      profit[j] = {
        profit_out: Math.max(
          profit[j].profit_out,
          profit[j].profit_in + prices[i]
        ),
        profit_in: Math.max(
          profit[j].profit_in,
          profit[j - 1].profit_out - prices[i]
        ),
      };
    }
  }
  console.log(profit);
  console.log(profit[2].profit_out);
  return profit[2].profit_out;
};
maxProfit([3,3,5,0,0,3,1,4]);
