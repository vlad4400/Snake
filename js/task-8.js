console.log("start: task-8");
console.log("");

function power(val, pow) {
  if (pow == 1) {
    return val;
  } else if (pow >= 1) {
    return val * power(val, pow - 1);
  } else {
    return "error";
  }
}

console.log(power(2, 8));

console.log("");
console.log("end: task-8");
