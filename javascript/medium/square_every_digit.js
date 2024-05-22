function squareDigits(n) {
  let str = n.toString();

  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let squar = str[i] * str[i];

    newStr = newStr + squar;
  }
  return parseInt(newStr);
}

let res = squareDigits(9119);
console.log(res);
