let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
let k = 4;
nums.sort((a, b) => b - a);
let result = nums[k - 1];
console.log(result);
