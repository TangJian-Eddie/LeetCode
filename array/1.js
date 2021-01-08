var twoSum = function(nums, target) {
  let temp = []
  for(let i = 0; i < nums.length; i++){
      let diff = target - nums[i]
      if(temp[diff] != undefined){
          return [temp[diff],i]
      }
      temp[nums[i]] = i
  }
};