const startButton = document.querySelector("#startButton");
const resetButton = document.querySelector("#resetButton");
let counter1 = 0;
let counter2 = 0;
let interval;
let timeout;

const intervalFunction = (count) => {
  ++counter1;
  return console.log(`Timeout ${counter1}`);
};
const timeoutFuntion = (count) => {
  ++counter2;
  return console.log(`Iterval ${counter2}`);
};

startButton.addEventListener("click", () => {
  interval = setInterval(intervalFunction, 1000);
  timeout = setTimeout(timeoutFuntion, 5000);
});

resetButton.addEventListener("click", () => {
  clearInterval(interval);
  clearTimeout(timeout);
});
