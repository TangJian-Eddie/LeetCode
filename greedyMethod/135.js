/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let rank = [1];
  let res = 1;
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i - 1] < ratings[i]) {
      rank.push(rank[i - 1] + 1);
      res += rank[i - 1] + 1;
    } else {
      rank.push(1);
      res += 1;
    }
  }
  for (let i = rank.length; i >= 1; i--) {
    if (rank[i - 1] <= rank[i] && ratings[i - 1] > ratings[i]) {
      res += rank[i] + 1 - rank[i - 1];
      rank[i - 1] = rank[i] + 1;
    }
  }
  console.log(rank);
  console.log(res);
  return res;
};
candy([2, 0, 1]);
