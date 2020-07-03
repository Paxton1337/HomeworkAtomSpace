import {number_1, number_2} from './data.mjs'
import {plus, minus} from './utils.mjs'

console.log("Работа с экспортами и импортами на ESJS:");
console.log(`1.Функция "+" : ${plus(number_1, number_2)}`);
console.log(`2.Функция "-" : ${minus(number_1, number_2)}`);
