let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");
let operatorSelect = document.getElementById("operator");
let resultSpan = document.getElementById("result");
let calcBtn = document.getElementById("calcBtn");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("Cannot divide by zero!");
        return null;
    }
    return a / b;
}

function calculate() {
    let a = Number(num1Input.value);
    let b = Number(num2Input.value);
    let op = operatorSelect.value;
    let res;

    if (isNaN(a) || isNaN(b)) {
        alert("Please enter valid numbers!");
        return;
    }

    switch(op) {
        case '+':
            res = add(a, b);
            break;
        case '-':
            res = subtract(a, b);
            break;
        case '*':
            res = multiply(a, b);
            break;
        case '/':
            res = divide(a, b);
            if (res === null) return;
            break;
        default:
            alert("Unknown operator");
            return;
    }

    resultSpan.textContent = res.toFixed(2);
}

calcBtn.addEventListener("click", calculate);
