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
    let curNum = document.getElementById('currentEntered').innerHTML;
    newNum = curNum + 0;
    actNum = +newNum;  
    document.getElementById('currentEntered').innerHTML = actNum;
};

function getOne() {
    let curNum = document.getElementById('currentEntered').innerHTML;
    newNum = curNum + 1;
    actNum = +newNum;  
    document.getElementById('currentEntered').innerHTML = actNum;
};

function getTwo() {
    let curNum = document.getElementById('currentEntered').innerHTML;
    newNum = curNum + 2;
    actNum = +newNum;  
    document.getElementById('currentEntered').innerHTML = actNum;
};

function getThree() {
    let curNum = document.getElementById('currentEntered').innerHTML;
    newNum = curNum + 3;
    actNum = +newNum;  
    document.getElementById('currentEntered').innerHTML = actNum;
};

function getFour() {
    let curNum = document.getElementById('currentEntered').innerHTML;
    newNum = curNum + 4;
    actNum = +newNum;  
    document.getElementById('currentEntered').innerHTML = actNum;
};

function getFive() {
    let curNum = document.getElementById('currentEntered').innerHTML;
    newNum = curNum + 5;
    actNum = +newNum;  
    document.getElementById('currentEntered').innerHTML = actNum;
};

function getSix() {
    let curNum = document.getElementById('currentEntered').innerHTML;
    newNum = curNum + 6;
    actNum = +newNum;  
    document.getElementById('currentEntered').innerHTML = actNum;
};

function getSeven() {
    let curNum = document.getElementById('currentEntered').innerHTML;
    newNum = curNum + 7;
    actNum = +newNum;  
    document.getElementById('currentEntered').innerHTML = actNum;
};

function getEight() {
    let curNum = document.getElementById('currentEntered').innerHTML;
    newNum = curNum + 8;
    actNum = +newNum;  
    document.getElementById('currentEntered').innerHTML = actNum;
};

function getNine() {
    let curNum = document.getElementById('currentEntered').innerHTML;
    newNum = curNum + 9;
    actNum = +newNum;  
    document.getElementById('currentEntered').innerHTML = actNum;
};

function clear() {
    let curNum = document.getElementById('currentEntered').innerHTML;
    curNum = '';
    actNum = +curNum;
    document.getElementById('currentEntered').innerHTML = actNum;
}

function plus() {
    let curNum = document.getElementById('currentEntered').innerHTML;
    let lastNum = document.getElementById('lastEntered').innerHTML;
    lastNum = +curNum;
    document.getElementById('lastEntered').innerHTML = lastNum + '+';
}