var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let pointer = 0;
  let str;
  for (let i = 1; i < s.length + 1; i++) {
    str = s.slice(pointer, i);
    if (Array.from(new Set(str)).length < str.length) {
      if (str.length - 1 > maxLength) {
        maxLength = str.length - 1;
      }
      pointer++;
      i = pointer + maxLength;
    } else {
      maxLength++;
    }
  }
  return maxLength;
};
lengthOfLongestSubstring(" ");
