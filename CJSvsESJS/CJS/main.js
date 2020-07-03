const { plus, minus } = require("./utils");
const { number_1, number_2 } = require("./data");

console.log("Работа с экспортами и импортами на CJS:");
console.log(`1.Функция "+" : ${plus(number_1, number_2)}`);
console.log(`2.Функция "-" : ${minus(number_1, number_2)}`);
