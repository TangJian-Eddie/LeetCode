/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  let matrix = {};
  let map = {};
  let obj = [];
  let res = [];
  equations.forEach((value, index) => {
    if (matrix[value[0]] === undefined) matrix[value[0]] = {};
    if (matrix[value[1]] === undefined) matrix[value[1]] = {};
    matrix[value[0]][value[1]] = values[index];
    matrix[value[1]][value[0]] = 1 / values[index];
  });
  for (let item in matrix) {
    if (!obj[item]) obj[item] = 1;
    for (let key in matrix[item]) {
      obj[key] = obj[item] / matrix[item][key];
    }
  }
  console.log(obj);
  for (let item of queries) {
    let result;
    if (!obj[item[0]] || !obj[item[1]]) {
      result = -1;
    } else {
      result = obj[item[0]] / obj[item[1]];
      break;
    }
    res.push(result);
  }
  console.log(res);
  return res;
};
calcEquation(
  [
    ["a", "c"],
    ["b", "e"],
    ["c", "d"],
    ["e", "d"],
  ],
  [2.0, 3.0, 0.5, 5.0],
  [["a", "b"]]
);
// [0.06667]
/* calcEquation(
  [
    ["a", "b"],
    ["c", "d"],
  ],
  [1, 1],
  [
    ["a", "c"],
    ["b", "d"],
    ["b", "a"],
    ["d", "c"],
  ]
);
// [-1.0,-1.0,1.0,1.0] */
/* calcEquation(
  [
    ["a", "b"],
    ["e", "f"],
    ["b", "e"],
  ],
  [3.4, 1.4, 2.3],
  [
    ["b", "a"],
    ["a", "f"],
    ["f", "f"],
    ["e", "e"],
    ["c", "c"],
    ["a", "c"],
    ["f", "e"],
  ]
);
// [0.29411764705882354, 10.947999999999999, 1, 1, -1, -1, 0.7142857142857143]; */
