function admirable(n) {
  let sum = 0;
  let arr = [];
  for (var i = 1; i < n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  sum = arr.reduce((acc, currentValue) => acc + currentValue, 0);
  if (sum === n) {
    return "Perfect";
  } else if (sum > n) {
    let r = (n - sum) / 2;

    let index = arr.indexOf(Math.abs(r));
    if (index !== -1) {
      arr[index] = r;
    }

    sum = arr.reduce((acc, currentValue) => acc + currentValue, 0);

    if (sum === n) {
      return Math.abs(r);
    } else {
      return "Neither";
    }
  } else {
    return "Neither";
  }
}

const result = admirable(496);
console.log(result);
