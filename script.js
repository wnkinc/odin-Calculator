let num1 = 0;
let num2 = 0;
let operator = '';

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, operator, num2){
    if(operator === '+') return add(num1, num2);
    if(operator === '-') return subtract(num1, num2);
    if(operator === '*') return multiply(num1, num2);
    if(operator === '/') return divide(num1, num2);
}