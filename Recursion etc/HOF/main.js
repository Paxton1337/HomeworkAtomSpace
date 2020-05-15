const sum = (a, b) => {
  return (total = a + b);
};
const multi = (a, b) => {
  return (total = a * b);
};
const subtr = (a, b) => {
  return (total = a - b);
};
const divide = (a, b) => {
  return (total = a / b);
};
let total;
const calculator = (fn, a, b) => {
  switch (fn) {
    case sum:
      sum(a, b);
      console.log(`The sum of your numbers is: ${total}`);
      break;
    case multi:
      multi(a, b);
      console.log(`Multiplying your numbers is equal to: ${total}`);
      break;
    case subtr:
      subtr(a, b);
      console.log(`Subtracting your numbers is equal to: ${total}`);
      break;
    case divide:
      divide(a, b);
      console.log(`Divide your numbers equals: ${total}`);
      break;
    default:
      console.log("Function does not exist");
      break;
  }
};
calculator(multi, 10, 5);
