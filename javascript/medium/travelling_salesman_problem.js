function paths(n) {
  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 1;
  } else {
    return n * paths(n - 1);
  }
}

let res = paths(4);
console.log(res);
