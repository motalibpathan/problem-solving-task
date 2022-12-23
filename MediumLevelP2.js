const nums = [0, 1];

nums.sort((a, b) => a - b);

let result;

for (let i = 0; i < nums.length; i++) {
  const element = nums[i];
  if (nums[i + 1] !== element + 1) {
    result = element + 1;
    break;
  }
}

console.log(result);
