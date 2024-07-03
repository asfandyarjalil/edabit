// function timeToEat(currentTime) {
//   let breakfastTime = 7 * 60;
//   let lunchTime = 12 * 60;
//   let dinnerTime = 7 * 60;
//   let result = 0;
//   let period = currentTime.includes("p.m");
//   let [time, _] = currentTime.split(" ");

//   let [hours, minutes] = time.split(":");

//   minutes = hours * 60 + parseInt(minutes);
//   //   console.log(hours, minutes);
//   if (period) {
//     result = dinnerTime - minutes;
//   }
//   console.log({ result: result / 60 });
// }

// function timeToEat(currentTime) {
//   let breakfastTime = 7;
//   let lunchTime = 12;
//   let dinnerTime = 12 + 7;
//   let result;
//   let period = currentTime.includes("p.m");
//   let [time, _] = currentTime.split(" ");

//   let [hours, minutes] = time.split(":");

//   if (period) {
//     hours = 12 + parseInt(hours);
//   }
//   let t2 = parseInt(hours) * 60 + parseInt(minutes);
//   console.log({ t2 });
//   if (hours <= breakfastTime) {
//     result = breakfastTime * 60 - t2;
//   }
//   if (hours > breakfastTime && hours <= lunchTime) {
//     result = lunchTime * 60 - t2;
//   }
//   if (hours > lunchTime && hours <= dinnerTime) {
//     result = dinnerTime * 60 - t2;
//     result = result - 12 * 60;
//   }
//   if (hours >= dinnerTime) {
//     result = breakfastTime * 60 - t2;
//   }
//   let h = Math.floor(result / 60);
//   let m = result % 60;
//   return [h, m];
// }

function timeToEat(currentTime) {
  const breakfastTime = 7 * 60;
  const lunchTime = 12 * 60;
  const dinnerTime = 19 * 60;

  let period = currentTime.includes("p.m");
  let [time, _] = currentTime.split(" ");
  let [hours, minutes] = time.split(":");

  hours = parseInt(hours);
  minutes = parseInt(minutes);

  if (period && hours !== 12) {
    hours += 12;
  } else if (!period && hours === 12) {
    hours = 0;
  }

  let currentTimeInMinutes = hours * 60 + minutes;

  let nextMealTime;
  if (currentTimeInMinutes < breakfastTime) {
    nextMealTime = breakfastTime;
  } else if (currentTimeInMinutes < lunchTime) {
    nextMealTime = lunchTime;
  } else if (currentTimeInMinutes < dinnerTime) {
    nextMealTime = dinnerTime;
  } else {
    nextMealTime = breakfastTime + 24 * 60; // Next day's breakfast
  }

  let timeToNextMeal = nextMealTime - currentTimeInMinutes;

  let h = Math.floor(timeToNextMeal / 60);
  let m = timeToNextMeal % 60;

  return [h, m];
}

// // Example usage:
// console.log(timeToEat("6:00 a.m.")); // Output: [1, 0]
// console.log(timeToEat("11:30 a.m.")); // Output: [0, 30]
// console.log(timeToEat("1:00 p.m.")); // Output: [6, 0]
// console.log(timeToEat("8:00 p.m.")); // Output: [11, 0]

let currentTime = "8:00 p.m.";
let res = timeToEat(currentTime);
console.log(res);

// 13 : 1
// 14 : 2
// 15 : 3
// 16 : 4
// 17 : 5
// 18 : 6
// 19 : 7
// 20 : 8
// 21 : 9
// 22 : 10
// 23 : 11
// 24 : 12
