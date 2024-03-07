// https://edabit.com/challenge/96fvErFZEjvi4yqn4
function swapCards(n1, n2) {
  let str1 = n1.toString();
  let str2 = n2.toString();
  let lowestNumber;
  let highestNumber;
  let paulsN;
  //   let otherPlayeNum;
  if (parseInt(str1[0]) > parseInt(str1[1])) {
    lowestNumber = str1[1];
    highestNumber = str1[0];
    paulsN = `${highestNumber}${str2[0]}`;
  } else {
    lowestNumber = str1[0];
    highestNumber = str1[1];
    paulsN = `${str2[0]}${highestNumber}`;
  }

  let otherPlayeNum = `${lowestNumber}${str2[1]}`;

  return parseInt(paulsN) > parseInt(otherPlayeNum);
}

const result = swapCards(67, 53);
console.log(result);
