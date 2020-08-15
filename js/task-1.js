console.log("start: task-1");
console.log("");

function getDigit(number, n = 1) {
  n--;
  if (number < 0) return NaN;
  if (n == 0) {
    return number % 10;
  } else if (n > 0) {
    return (number - number % 10**n) / 10**n % 10;
  } else {
    return NaN;
  }
}

function numberToObj(number) {
  if (number >= 0 && number <= 999) {
      var obj = {
        units: getDigit(number, 1),
        tens: getDigit(number, 2),
        hundreds: getDigit(number, 3)
      }
      return obj;
  } else {
    return undefined;
  }
}

number = 245;
console.log(number, numberToObj(number));

console.log("");
console.log("end: task-1");
