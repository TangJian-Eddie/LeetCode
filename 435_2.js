var eraseOverlapIntervals = function (intervals) {
  if (!intervals.length) {
    return 0;
  }
  intervals.sort((a, b) => a[1] - b[1]);
  let n = intervals.length;
  let res = 0;
  for (let i = 1; i < n; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      intervals.splice(i, 1);
      res++;
      n--;
      i--;
    }
  }
  return res;
};
eraseOverlapIntervals([
  [1, 2],
  [1, 2],
  [1, 2],
]);
