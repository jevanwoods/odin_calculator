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

function getZero() {
    document.getElementById('currentEntered').innerHTML = "0";
};

function getOne() {
    document.getElementById('currentEntered').innerHTML = "1";
};

function getTwo() {
    document.getElementById('currentEntered').innerHTML = "2";
};

function getThree() {
    document.getElementById('currentEntered').innerHTML = "3";
};

function getFour() {
    document.getElementById('currentEntered').innerHTML = "4";
};

function getFive() {
    document.getElementById('currentEntered').innerHTML = "5";
};

function getSix() {
    document.getElementById('currentEntered').innerHTML = "6";
};

function getSeven() {
    document.getElementById('currentEntered').innerHTML = "7";
};

function getEight() {
    document.getElementById('currentEntered').innerHTML = "8";
};

function getNine() {
    document.getElementById('currentEntered').innerHTML = "9";
};

