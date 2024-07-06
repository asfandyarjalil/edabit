const incorrectCapitalization = (names) =>
  names.some((name) => name[0] !== name[0].toUpperCase());

const notTwoOrThreeNames = (names) => ![2, 3].includes(names.length);

const someInitialsDontEndWithDot = (names) =>
  names
    .filter((name) => name.length <= 2)
    .some((initial) => !initial.endsWith("."));

const someWordsEndWithDot = (names) =>
  names.filter((name) => name.length > 2).some((word) => word.endsWith("."));

const lastNameIsInitial = (lastName) => lastName.length <= 2;

const incorrectExpansion = (names) =>
  names.length >= 3 && names[0].length <= 2 && names[1].length > 2;

const validName = (name) => {
  const names = name.split(" ");
  const isInvalid =
    incorrectCapitalization(names) ||
    notTwoOrThreeNames(names) ||
    someInitialsDontEndWithDot(names) ||
    someWordsEndWithDot(names) ||
    lastNameIsInitial(names[names.length - 1]) ||
    incorrectExpansion(names);

  return !isInvalid;
};

// Test cases
console.log(validName("H. Wells")); // true
// console.log(validName("H. G. Wells")); // true
// console.log(validName("Herbert G. Wells")); // true
// console.log(validName("Herbert George Wells")); // true
// console.log(validName("Herbert")); // false
// console.log(validName("h. Wells")); // false
// console.log(validName("H Wells")); // false
// console.log(validName("H. George Wells")); // false
// console.log(validName("H. George W.")); // false
// console.log(validName("Herb. George Wells")); // false
