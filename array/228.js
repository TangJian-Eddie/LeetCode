/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) {
    return [];
  }
  if (nums.length === 1) {
    return [`${nums[0]}`];
  }
  let res = [];
  let start = null;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] == nums[i] + 1) {
      if (start === null) start = nums[i];
    } else if (start !== null) {
      res.push(`${start}->${nums[i]}`);
      start = null;
    } else {
      res.push(`${nums[i]}`);
    }
  }
  return res;
};
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
