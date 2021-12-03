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
const screen = document.querySelector('#numbers');
const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

zero.addEventListener('click', () => {
    buttonToScreen(screen, zero);
    calculation += zero.textContent;
})

one.addEventListener('click', () => {
    buttonToScreen(screen, one);
    calculation += one.textContent;
})

two.addEventListener('click', () => {
    buttonToScreen(screen, two);
    calculation += two.textContent;
})

three.addEventListener('click', () => {
    buttonToScreen(screen, three);
    calculation += three.textContent;
})

four.addEventListener('click', () => {
    buttonToScreen(screen, four);
    calculation += four.textContent;
})

five.addEventListener('click', () => {
    buttonToScreen(screen, five);
    calculation += five.textContent;
})

six.addEventListener('click', () => {
    buttonToScreen(screen, six);
    calculation += six.textContent;
})

seven.addEventListener('click', () => {
    buttonToScreen(screen, seven);
    calculation += seven.textContent;
})

eight.addEventListener('click', () => {
    buttonToScreen(screen, eight);
    calculation += eight.textContent;
})

nine.addEventListener('click', () => {
    buttonToScreen(screen, nine);
    calculation  += nine.textContent;
})

