var firstUniqChar = function (s) {
  const MAP = new Map();
  const n = s.length;
  for (let [i, ch] of Array.from(s).entries()) {
    if (MAP.has(ch)) {
      MAP.set(ch, -1);
    } else {
      MAP.set(ch, i);
    }
  }
  let first = n;
  for (let pos of MAP.values()) {
    if (pos !== -1 && pos < first) {
      first = pos;
      break;
    }
  }
  if (first === n) {
    first = -1;
  }
  return first;
};
