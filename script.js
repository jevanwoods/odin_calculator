let currentOperation = '';
let actNum = 0;
let lastNum = 0;


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

function dlt() {
    let curNum = document.getElementById('currentEntered').innerHTML;
    let text = curNum.toString();
    let newNumText = text.slice(0,-1);
    newNum = +newNumText;
    document.getElementById('currentEntered').innerHTML = newNum;
};

function clr() {
    let curNum = document.getElementById('currentEntered').innerHTML;
    curNum = '';
    actNum = +curNum;
    console.log(actNum);
    document.getElementById('currentEntered').innerHTML = actNum;
    let lastNum = document.getElementById('lastEntered').innerHTML;
    lastNum = '';
    let clearedLastNum = +lastNum;
    console.log(clearedLastNum);
    document.getElementById('lastEntered').innerHTML = clearedLastNum;
};

function plus() {
    let curNum = document.getElementById('currentEntered').innerHTML;
    let lastNum = document.getElementById('lastEntered').innerHTML;
    lastNum = +curNum;
    document.getElementById('lastEntered').innerHTML = lastNum + '+';
    curNum = '';
    actNum = +curNum;
    console.log(actNum);
    document.getElementById('currentEntered').innerHTML = actNum;
    currentOperation = 'plus';
};

function minus() {
    let curNum = document.getElementById('currentEntered').innerHTML;
    let lastNum = document.getElementById('lastEntered').innerHTML;
    lastNum = +curNum;
    document.getElementById('lastEntered').innerHTML = lastNum + '-';
    curNum = '';
    actNum = +curNum;
    console.log(actNum);
    document.getElementById('currentEntered').innerHTML = actNum;
};

function times() {
    let curNum = document.getElementById('currentEntered').innerHTML;
    let lastNum = document.getElementById('lastEntered').innerHTML;
    lastNum = +curNum;
    document.getElementById('lastEntered').innerHTML = lastNum + 'x';
    curNum = '';
    actNum = +curNum;
    console.log(actNum);
    document.getElementById('currentEntered').innerHTML = actNum;
};

function dividedBy() {
    let curNum = document.getElementById('currentEntered').innerHTML;
    let lastNum = document.getElementById('lastEntered').innerHTML;
    lastNum = +curNum;
    document.getElementById('lastEntered').innerHTML = lastNum + '/';
    curNum = '';
    actNum = +curNum;
    console.log(actNum);
    document.getElementById('currentEntered').innerHTML = actNum;
};

// Math Functions
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

// Operate Function - aka - Equals Function
function operate(lastNum, actNum) {
    console.log(currentOperation);
    console.log(lastNum);
    console.log(typeof lastNum);
    console.log(actNum);
    console.log(typeof actNum);
    if (currentOperation === "plus") {
        let sum = add(lastNum, actNum);
        console.log(sum);
    } else if (currentOperation === "minus") {
        let difference = subtract(lastNum, actNum);
        console.log(difference);
    } else if (currentOperation === "times") {
        let multiplication = multiply(lastNum, actNum);
        console.log(multiplication);
    } else if (currentOperation === "divided") {
        let division = divide(lastNum, actNum);
        console.log(division);
    } else {
        console.log("ERROR")
    }
};