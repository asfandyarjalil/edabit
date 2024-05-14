const months = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "H",
  7: "L",
  8: "M",
  9: "P",
  10: "R",
  11: "S",
  12: "T",
};
const consonants = [
  "B",
  "C",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let vowels = ["A", "E", "I", "O", "U"];
// console.log(consonants);

function generateConsonantsFromName(name) {
  let code = "";
  let vowel = "";
  for (let i = 0; i < name.length; i++) {
    if (consonants.indexOf(name[i]) > -1) {
      code = code + name[i];
    }
    if (vowels.indexOf(name[i]) > -1) {
      vowel = vowel + name[i];
    }
  }
  return {
    code,
    vowel,
  };
}

function generateCodeFromSurname(surname) {
  let code = "";
  let resp = generateConsonantsFromName(surname);
  if (resp.code.length >= 3) {
    let r = resp.code[0] + resp.code[1] + resp.code[2];
    code = code + r;
  }
  if (resp.code.length < 3 && surname.length > 2) {
    code = replaceVowels(resp);
  }
  if (!code) {
    code = ifLessThanThreeLetter(resp);
  }
  return code;
}
function generateCodeFromName(name) {
  let code = "";
  let respFromName = generateConsonantsFromName(name);
  if (respFromName.code.length === 3) {
    code = respFromName.code;
  }
  if (respFromName.code.length > 3) {
    let r = respFromName.code[0] + respFromName.code[2] + respFromName.code[3];
    code = code + r;
  }
  if (respFromName.code.length < 3 && name.length > 2) {
    code = replaceVowels(respFromName);
  }
  if (!code) {
    code = ifLessThanThreeLetter(respFromName);
  }
  return code;
}
function ifLessThanThreeLetter(resp) {
  if (resp.code) {
    code = resp.code;
  }
  if (resp.vowel) {
    code = code + resp.vowel;
  }
  if (!resp.code && !resp.vowel) {
    code = "XXX";
  }
  while (code.length < 3) {
    code = code + "X";
    code.length++;
  }
  return code;
}
function replaceVowels(resp) {
  let j = 0;
  let l = resp.code.length;
  let code = resp.code;
  while (l < 3) {
    code = code + resp.vowel[j];
    j++;
    l++;
  }
  return code;
}
function fiscalCode(person) {
  let code = "";
  let surname = person.surname.toUpperCase();
  let name = person.name.toUpperCase();
  let gender = person.gender;

  let codeFromSurname = generateCodeFromSurname(surname);
  let codeFromName = generateCodeFromName(name);

  let dob = person.dob.split("/");
  let year = dob[2].slice(-2);
  let date = dob[0];
  let month = months[dob[1]];

  if (date <= 9 && gender === "M") {
    date = "0" + date;
  }
  if (gender === "F") {
    date = parseInt(date) + 40;
  }

  code = codeFromSurname + codeFromName + year + month + date;
  return code;
}
let person = {
  name: "Helen",
  surname: "Yu",
  gender: "F",
  dob: "1/12/1950",
};
let res = fiscalCode(person);

console.log(res);
