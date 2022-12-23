const nums = [3, 30, 34, 5, 9];
let result = "";

nums.sort((a, b) => {
  if (a.toString().length > 1 && b.toString().length > 1) {
    return b - a;
  }
  return +b.toString()[0] - +a.toString()[0];
});

result = nums.join("");

console.log(result);
