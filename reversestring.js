function reverseSolOne(str) {
  return str.split("").reverse().join("");
}

function reverseSolTwo(str) {
  let reversed = "";
  debugger;
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

function reverseSolTrhee(str) {
  debugger;
  return str.split("").reduce((rev, char) => char + rev, "");
}

function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    //Is the number a multiple of 3 and 5?
    if (i % 15 === 0) {
      console.log("FizzBUzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzbuzz(15);
