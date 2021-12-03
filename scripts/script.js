//----------------- FUNCTION DEFINITIONS-----------------
//-------------------------------------------------------

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === 'x') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    };
}

function buttonToScreen(screen, button) {
    screen.textContent += button.textContent;
}

function storeCalculation(variable, button) {
    variable += button.textContent;
}

function printToScreen(screen, button) {
    button.addEventListener('click', () => {
        buttonToScreen(screen, button);
    })
}

//------------------------EXECUTION-------------------------
//----------------------------------------------------------

let calculation = '';
let num1 = '';
let num2 = '';
let operator = '';
let result = '';

const screen = document.querySelector('#numbers');

const displayBtns = document.querySelectorAll('.display');
const operatorBtns = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('#equal');

displayBtns.forEach((button) => {
    button.addEventListener('click', () => {
        buttonToScreen(screen, button);
        calculation += button.textContent;
    })
});

operatorBtns.forEach((button) => {
    button.addEventListener('click', () => {
        buttonToScreen(screen, button);
        operator = button.textContent;
        num1 = calculation;
        calculation = '';
    })
})

equalBtn.addEventListener('click', () => {
    num2 = calculation; 
    result = operate(Number(num1), Number(num2), operator);
    screen.textContent = result;
    num1 = result;
    calculation = result;
    num2 = '';
    operator = '';
})