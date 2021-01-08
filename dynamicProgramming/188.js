var maxProfit = function (k, prices) {
  let n = prices.length;
  k = Math.min(k, Math.floor(n / 2));
  let profit = new Array(k + 1);
  //初始化买入卖出时的利润
  for (let j = 0; j <= k; j++) {
    profit[j] = {
      profit_in: -prices[0],
      profit_out: 0,
    };
  }
  console.log(profit)
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= k; j++) {
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
  console.log(profit[k].profit_out);
  return profit[k].profit_out;
};
maxProfit(2, [3, 2, 6, 5, 0, 3]);
