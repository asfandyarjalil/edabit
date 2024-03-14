// https://edabit.com/challenge/J4idWvahCYHPGnsMT
function cipherString(message) {
  var key = [
    ["m", "c"],
    ["u", "e"],
    ["b", "g"],
    ["a", "k"],
    ["s", "v"],
    ["h", "x"],
    ["i", "z"],
    ["r", "y"],
    ["p", "w"],
    ["l", "n"],
    ["o", "j"],
    ["t", "f"],
    ["q", "d"],
  ];
  key = key.flat();

  let str = "";
  for (let i = 0; i < message.length; i++) {
    let index = key.indexOf(message[i]);

    if (message[i] === " " || index === -1) {
      str = str + message[i];
    } else if (index % 2 === 0) {
      str = str + key[index + 1];
    } else {
      str = str + key[index - 1];
    }
  }
  return str;
}

const result = cipherString("cegkvxzy zv ljf kckizlb");
console.log(result);
