function add (num1, num2) {
    let result;
    result = num1 + num2;
    return result;
}

function substract (num1, num2) {
    let result;
    result = num1 - num2;
    return result;
}

function multiply (num1, num2) {
    let result;
    result = num1 * num2;
    return result;
}

function divide (num1, num2) {
    let result;
    if(num2 == 0) {
        result = "Math Error";
    } else {
        result = num1 / num2;
    }
    
    return result;
}

function operate(operator, num1, num2) {
    let result;
    switch(operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = substract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            result = "That's not a valid operation"
    }
    return result;
}

const buttons = document.querySelectorAll('button');
const displayInput = document.querySelector('.display-input');
const displayOutput = document.querySelector('.display-output');

let operator = "";
let input = ""
let numbers = [];
let answer;


function populateDisplay(e) {
    if(e.target.textContent !== "CLEAR" && e.target.textContent !== "DELETE" && e.target.textContent !== "=") {
        if(!"+-/*".includes(e.target.textContent)) {
            input += e.target.textContent;
        } else {
            input += " " + e.target.textContent + " ";
            operator = e.target.textContent;
        }
    } else if(e.target.textContent === "DELETE") {
        input = input.slice(0, -1);
        displayInput.textContent = input;

    } else if("=".includes(e.target.textContent)) {
        numbers = input.split(" ");

        let firstOperand = parseInt(numbers[0]);
        let currentOperand = "";
        let symbol;
        let answer;
        
        for(let i = 1; i < numbers.length; i++) {
            if("+-/*".includes(numbers[i])) {
                symbol = numbers[i];
                
                currentOperand = numbers[i + 1];
                if(currentOperand % 1 != 0 || firstOperand % 1 != 0) {
                    firstOperand = parseFloat(firstOperand);
                    currentOperand = parseFloat(currentOperand);
                } else {
                    firstOperand = parseInt(firstOperand);
                    currentOperand = parseInt(currentOperand);
                }
                answer = operate(symbol, firstOperand, currentOperand);
            }
            firstOperand = answer;
        }
        displayOutput.textContent = answer;

    } else if(e.target.textContent === "CLEAR") {
        firstNumber = "";
        secondNumber = "";
        input = "";
        result = 0;
        displayInput.textContent = "";
        displayOutput.textContent = result;
    }   

    displayInput.textContent = input;
    
}

buttons.forEach(button => button.addEventListener('click', populateDisplay));