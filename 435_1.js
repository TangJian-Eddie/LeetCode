/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if (!intervals.length) {
    return 0;
  }
  intervals.sort((a, b) => a[0] - b[0]);
  let len = intervals.length;
  let res = 0;
  for (let i = 1; i < len; i++) {
    if (intervals[i][1] <= intervals[i - 1][1]) {
      intervals.splice(i - 1, 1);
      i--;
      len--;
      res++;
      continue;
    }
    if (intervals[i][0] < intervals[i - 1][1]) {
      intervals.splice(i, 1);
      i--;
      len--;
      res++;
      continue;
    }
  }
  console.log(res);
  console.log(intervals);
  return res;
};
eraseOverlapIntervals([[1, 2]]);
