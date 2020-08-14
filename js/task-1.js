console.log("start: task-1");
console.log("");

var strPrimeNumbers = getStrPrimeNumbers(0, 100);
if (strPrimeNumbers) {
  console.log("Prime numbers: " + strPrimeNumbers);
} else {
  console.log("No prime numbers!");
}

function getStrPrimeNumbers(minNum, maxNum) {
  if (maxNum <= 0) {
    return "";
  }
  if (minNum < 0) {
    minNum = 0;
  }
  if (minNum > maxNum) {
    return "";
  }
  if (minNum == maxNum) {
    return isPrimeNumber(minNum)?(""+minNum):"";
  }

  var strPrimeNumbers = "";
  for (var num = minNum; num <= maxNum; num++) {
    strPrimeNumbers += isPrimeNumber(num)?(" "+num):"";
  }

  return strPrimeNumbers.slice(1);
}

function isPrimeNumber(num) {
  if (num <= 0) return false;
  if (num == 1 || num == 2) return true;

  for (var i = 2; i < num; i++) {
    if (!(num % i)) {
      return false;
    };
  }
  return true;
}

console.log("");
console.log("end: task-1");
