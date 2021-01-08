/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0;
  let j = height.length;
  let res = 0;
  while (i < j) {
    if (res < Math.min(height[i], height[j]) * (j - i)) {
      res = Math.min(height[i], height[j]) * (j - i);
    }
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  console.log(res);
  return res;
};
maxArea([1,8,6,2,5,4,8,3,7])