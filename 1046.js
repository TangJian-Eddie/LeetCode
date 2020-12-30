/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  stones.sort((a, b) => b - a);
  while (stones.length > 1) {
    if (stones[0] - stones[1] != 0) stones.push(stones[0] - stones[1]);
    stones.shift();
    stones.shift();
    stones.sort((a, b) => b - a);
  }
  console.log(stones);
  return stones[0] ? stones[0] : 0;
};
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
