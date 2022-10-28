const display = document.getElementById("display");
const numPad = document.querySelectorAll("[data-number]");
const operatorButton = document.querySelectorAll("[data-operator]");
const clear = document.querySelectorAll("[data-clear]");
const equals = document.querySelectorAll("[data-equals]");
let firstNum = null;
let secondNum = null;
let operator = null;
let lastPress = null;
let temp = null;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (a, operator, b) => {
  if (operator === "+") return temp = Number(a) + Number(b);
  if (operator === "-") return temp = a - b;
  if (operator === "*") return temp = a * b;
  if (operator === "/") return temp = a / b;
};

numPad.forEach((button) =>
  button.addEventListener("click", () => {
    if (display.value === "0") {
      clearDisplay();
      display.value += button.textContent;
      lastPress = button.textContent;
    } else if (lastPress === operator || lastPress === "=") {
      clearDisplay();
      display.value += button.textContent;
      lastPress = button.textContent;
    } else {
      display.value += button.textContent;
      lastPress = button.textContent;
    }
  })
);

operatorButton.forEach((button) =>
  button.addEventListener("click", () => {
    if (firstNum === null) {
    firstNum = display.value;
    operator = button.textContent;
    lastPress = button.textContent;
    } else if (firstNum !== null && secondNum !== null) {
      equal();
      operator = button.textContent;
      lastPress = button.textContent;
    } else {
    secondNum = display.value; 
    equal();
    operator = button.textContent;
    lastPress = button.textContent;
    }
  })
);

clear.forEach((button) => button.addEventListener("click", () => initialize()));

equals.forEach((button) => 
button.addEventListener("click", () => equal()));

function clearDisplay() {
  display.value = null;
}

function initialize() {
  display.value = 0;
  firstNum = null;
  secondNum = null;
  temp = null;
  lastPress = null;
}

function equal() {
  secondNum = display.value;
  if (temp === null) {
  display.value = operate(firstNum, operator, secondNum)
  } else {
    display.value = operate(temp, operator, secondNum)
  }
}
