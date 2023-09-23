let currentInput = '';
let operator = '';
let previousInput = '';
const display = document.getElementById('display');

function appendToDisplay(value) {
  currentInput += value;
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  previousInput = '';
  display.value = '';
}

function setOperator(op) {
  if (currentInput !== '') {
    operator = op;
    previousInput = currentInput;
    currentInput = '';
  }
}

function calculateResult() {
  if (operator !== '' && previousInput !== '' && currentInput !== '') {
    let result;
    switch (operator) {
      case '+':
        result = parseFloat(previousInput) + parseFloat(currentInput);
        break;
      case '-':
        result = parseFloat(previousInput) - parseFloat(currentInput);
        break;
      case '*':
        result = parseFloat(previousInput) * parseFloat(currentInput);
        break;
      case '/':
        if (currentInput === '0') {
          result = 'Infinity';
        } else {
          result = parseFloat(previousInput) / parseFloat(currentInput);
        }
        break;
      default:
        return;
    }
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    display.value = currentInput;
  }
}