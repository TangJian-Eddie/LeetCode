/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const MAP_S = new Map();
  const MAP_T = new Map()
  for (let i = 0; i < s.length; i++) {
    if (MAP_S.has(s.slice(i, i + 1))) {
      if (MAP_S.get(s.slice(i, i + 1)) !== t.slice(i, i + 1)) {
        return false;
      }
    } else {
        MAP_S.set(s.slice(i, i + 1), t.slice(i, i + 1));
    }
    if (MAP_T.has(t.slice(i, i + 1))) {
        if (MAP_T.get(t.slice(i, i + 1)) !== s.slice(i, i + 1)) {
          return false;
        }
      } else {
          MAP_T.set(t.slice(i, i + 1), s.slice(i, i + 1));
      }
  }
  return true;
};
console.log(isIsomorphic("ab", "aa"));
