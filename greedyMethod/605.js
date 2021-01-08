/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) {
    return true;
  }
  let plant = [];
  let res = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1) {
      const left = plant.length === 0 ? -2 : plant[plant.length - 1];
      if (i - left >= 3) {
        res += Math.floor((i - left - 2) / 2);
      }
      if (res >= n) {
        return true;
      }
      plant.push(i);
    }
  }
  if (plant.length === 0 && (flowerbed.length + 1) / 2 >= n) {
    return true;
  }
  if (flowerbed.length - plant[plant.length - 1] >= 3) {
    res += Math.floor((flowerbed.length - plant[plant.length - 1] - 1) / 2);
    if (res >= n) {
      return true;
    }
  }
  return false;
};
console.log(canPlaceFlowers([0, 0, 0], 2));
