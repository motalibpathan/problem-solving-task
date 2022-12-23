const nums = [3, 6, 1, 0];

const findIndex = (arr) => {
  let maxnum = 0,
    second = 0,
    maxidx = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxnum) {
      second = maxnum;
      maxnum = arr[i];
      maxidx = i;
    } else {
      if (arr[i] > second) {
        second = arr[i];
      }
    }
  }
  if (maxnum >= 2 * second) {
    return maxidx;
  }
  return -1;
};

console.log(findIndex(nums));
