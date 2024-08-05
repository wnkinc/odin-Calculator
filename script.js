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
    if(num2 === 0){
        return display.textContent = 'Error'
    }
    return num1 / num2;
}

let displayValue = [];
let calcValue = [];
const display = document.querySelector('.display');
display.textContent = 0;

function populateDisplay(num) {
    if(num === '.'){
        //IDK
        return;
    }
    if(num === 'AC'){
        calcValue = [];
        displayValue = [];
        display.textContent = 0;
        return;
    }
    if(num === '=') {
        calculate(calcValue);
        return;
    }
    if(['/', '*', '-', '+'].includes(num)) {
        if (calcValue.length && typeof calcValue[calcValue.length - 1] === 'string') {
            calcValue.pop();
        }
        calcValue.push(num);
        displayValue = [];
        return;
    }
    num = Number(num);
    displayValue.push(num);
    calcValue.push(num)
    display.textContent = displayValue.join('');
}

function calculate(array) {
    let operatorIndex = array.findIndex(item => typeof item === 'string');
    if(operatorIndex < 0) return;
    let num1 = array.slice(0, operatorIndex).join('');
    num1 = Number(num1);
    let operator = array[operatorIndex];
    let num2 = array.slice(operatorIndex + 1).join('');
    num2 = Number(num2);
    let total = 0;

    if(operator === '+') total = add(num1, num2);
    if(operator === '-') total = subtract(num1, num2);
    if(operator === '*') total = multiply(num1, num2);
    if(operator === '/') total = divide(num1, num2);

    function roundIfExceeds(num, maxDecimalPlaces) {
        // Convert number to string and split by the decimal point
        let [integerPart, decimalPart] = num.toString().split('.');
        
        // Check if decimal part exists and exceeds the maxDecimalPlaces
        if (decimalPart && decimalPart.length > maxDecimalPlaces) {
            const factor = Math.pow(10, maxDecimalPlaces);
            return Math.round(num * factor) / factor;
        }
    
        // Return the number as is if it does not exceed the maxDecimalPlaces
        return num;
    }

    total = roundIfExceeds(total, 5);
    calcValue = [total];
    display.textContent = total;

    console.log(array);
    console.log(calcValue);
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        populateDisplay(button.textContent);
    });
});