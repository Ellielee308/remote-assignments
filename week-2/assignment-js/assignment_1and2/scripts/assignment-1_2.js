function max(numbers) {
  let numberMax = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numberMax) {
      numberMax = numbers[i];
    }
  }
  return numberMax;
}

// function calculate(args) {
function calculate(args) {
  let calculateResult;
  if (args.op === "+") {
    calculateResult = args.n1 + args.n2;
  } else if (args.op === "-") {
    calculateResult = args.n1 - args.n2;
  } else if (args.op === "*") {
    calculateResult = args.n1 * args.n2;
  } else if (args.op === "/") {
    calculateResult = args.n1 / args.n2;
  } else {
    calculateResult = "Not supported";
  }
  return calculateResult;
}
