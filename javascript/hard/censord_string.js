// https://edabit.com/challenge/5S5HBQW6zZp8eH3eL

function uncensor(str, vowels) {
  if (vowels.length <= 0) {
    return str;
  }
  for (let i = 0; i < vowels.length; i++) {
    let index = str.indexOf("*");
    str = str.replace(str[index], vowels[i]);
  }
  return str;
}

const result = uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo");
console.log(result);
