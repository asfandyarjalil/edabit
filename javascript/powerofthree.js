var isPowerOfThree = function (n) {
  let sum = 3;
  if (n <= 0) {
    return false;
  }
  if (sum > n) {
    return false;
  }
  while (sum < n) {
    sum *= 3;
  }
  return sum === n;
};
let n = 27;
let res = isPowerOfThree(n);
console.log(res);
