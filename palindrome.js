function palindromeOne(str) {
  return str.split("").reduce((rev, char) => char + rev, "") === str;
}

function palindromeTwo(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

function pal(str) {
  str.split("").every((char, i) => {
    return console.log(char === str[str.length - i - 1]);
  });
}

function maxC(str) {
  let chars = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    if (chars[char]) {
      chars[char]++;
    } else {
      chars[char] = 1;
    }
  }

  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maxChar = char;
    }
  }
  console.log(chars, maxChar, max);
}
