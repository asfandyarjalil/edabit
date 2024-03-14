// https://edabit.com/challenge/tRx22rECqK4dTJTg8

// function combinations(...items) {
//   console.log(items);
//   let resu = 1;
//   for (let i in arguments) {
//     resu = resu * arguments[i];
//   }
//   return resu;
// }

function combinations(...items) {
  let resu = 1;
  for (let i in items) {
    resu = items[i] > 0 ? resu * items[i] : resu;
  }
  return resu;
}

const result = combinations(6, 0, 7);

console.log(result);
