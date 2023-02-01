function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(operator, numberOne, numberTwo) {
    if (operator === "plus") {
        let sum = add(numberOne,numberTwo);
        console.log(sum);
    } else if (operator === "minus") {
        let difference = subtract(numberOne, numberTwo);
        console.log(difference);
    } else if (operator === "times") {
        let multiplication = multiply(numberOne, numberTwo);
        console.log(multiplication);
    } else if (operator === "divided") {
        let division = divide(numberOne, numberTwo);
        console.log(division);
    } else {
        console.log("ERROR")
    }
};

const lastEntered = document.querySelector('#lastEntered');
const currentEntered = document.querySelector('currentEntered');

function getOne(
    document.getElementById('currentEntered').innerHTML = "1";
);