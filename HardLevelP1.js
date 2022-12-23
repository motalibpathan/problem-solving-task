const nums = [-1, 0, 1, 2, -1, -4];

let result = [];

for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    for (let k = j + 1; k < nums.length; k++) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        const r = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
        let isAvailable = false;
        result.forEach((element) => {
          if (r.join() === element.join()) {
            isAvailable = true;
          }
        });
        if (!isAvailable) {
          result.push(r);
        }
      }
    }
  }
}

console.log(result);
