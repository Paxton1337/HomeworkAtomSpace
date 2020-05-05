//первый вариант


let numbers_1 = {
    firstNumber: null,
    secondNumber: null,
    primitives: {
        boolean: true,
        money: null,
        friends: undefined,
        number: 1,
        string: "string",
        symbol: Symbol("a"),
    }
};

let { firstNumber, secondNumber } = numbers_1;
const { boolean, ...rest } = numbers_1.primitives;

const divide_1 = (firstNumber, secondNumber) => {
    numbers_1.firstNumber = firstNumber;
    numbers_1.secondNumber = secondNumber;
    return firstNumber / secondNumber;
}

for (let key in numbers_1.primitives) {
    console.log(typeof numbers_1.primitives[key]);
}

document.getElementById('result_1').innerHTML = divide_1(10, 5);
document.getElementById('firstNumber_1').innerHTML = numbers_1.firstNumber;
document.getElementById('secondNumber_1').innerHTML = numbers_1.secondNumber;


//Второй вариант


const numbers_2 = {
    firstNumber_2: 50,
    secondNumber_2: 10,
};

const { firstNumber_2, secondNumber_2 } = numbers_2;

const divide_2 = (numbers_2) => {

    return firstNumber_2 / secondNumber_2;
}

document.getElementById('result_2').innerHTML = divide_2(numbers_2);
document.getElementById('firstNumber_2').innerHTML = firstNumber_2;
document.getElementById('secondNumber_2').innerHTML = secondNumber_2;


// Третий вариант


let numbers_3 = {};
numbers_3["firstNumber_3"] = prompt("Введите первое число");
numbers_3["secondNumber_3"] = prompt("Введите второе число");

let { firstNumber_3, secondNumber_3 } = numbers_3;


const divide_3 = (numbers_3) => {
    return firstNumber_3 / secondNumber_3;
}

document.getElementById('result_3').innerHTML = divide_3(numbers_3);
document.getElementById('firstNumber_3').innerHTML = firstNumber_3;
document.getElementById('secondNumber_3').innerHTML = secondNumber_3;