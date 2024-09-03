const calculate = (a, b, operation) => {
  if (typeof a === "number" && typeof b === "number") {
    switch (operation) {
      case "add":
        return a + b;

      case "subtract":
        return a - b;

      case "multiply":
        return a * b;

      case "divide":
        return a / b;

      default:
        throw new Error("The operation specified is not allowed");
    }
  } else {
    throw new Error("The first two arguments must be numbers");
  }
};

console.log(calculate(7, 3, "add"));
console.log(calculate(7, 3, "subtract"));
console.log(calculate(7, 3, "multiply"));
console.log(calculate(7, 3, "divide"));
