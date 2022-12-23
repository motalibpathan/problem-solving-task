const nums = [2, 7, 11, 15];
const target = 9;

let result = [];
let breakCheck1 = false;

for (let i = 0; i < nums.length; i++) {
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] + nums[j] == target) {
      result = [i, j];
      breakCheck1 = true;
      break;
    }
  }
  if (breakCheck1) break;
}

console.log(result);
