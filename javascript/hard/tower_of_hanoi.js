function towerHanoi(discs) {
  if (discs === 0) {
    return 0;
  } else {
    return Math.pow(2, discs) - 1;
  }
}

const res = towerHanoi(5);
console.log(res);
