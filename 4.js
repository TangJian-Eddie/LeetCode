var findMedianSortedArrays = function (nums1, nums2) {
  let nums = [];
  let i = 0;
  let j = 0;
  for (let k = 0; k < nums1.length + nums2.length; k++) {
    if (i === nums1.length) {
      nums = nums.concat(nums2.slice(j));
      break;
    }
    if (j === nums2.length) {
      nums = nums.concat(nums1.slice(i));
      break;
    }
    if (nums1[i] < nums2[j]) {
      nums.push(nums1[i]);
      i++;
    } else {
      nums.push(nums2[j]);
      j++;
    }
  }
  if (nums.length % 2 === 0) {
    return (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2;
  }
  return nums[nums.length / 2 - 0.5];
};

console.log(findMedianSortedArrays([1, 3], [2]));
