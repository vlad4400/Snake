console.log("start: task-6");
console.log("");

function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case "sum":
      return arg1 + arg2;
    case "sub":
      return arg1 - arg2;
    case "mul":
      return arg1 * arg2;
    case "div":
      if (arg2 == 0)
        return "error";
      return arg1 / arg2;
    default:
      return "error";
  }
}

a = 23;
b = -12;

console.log(mathOperation(a, b, "sum"));
console.log(mathOperation(a, b, "sub"));
console.log(mathOperation(a, b, "mul"));
console.log(mathOperation(a, b, "div"));

console.log("");
console.log("end: task-6");
