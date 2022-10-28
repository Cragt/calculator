const display = document.getElementById("display");
const numPad = document.querySelectorAll("[data-number]");
const operatorButton = document.querySelectorAll("[data-operator]");
const clear = document.querySelectorAll("[data-clear]");
const equals = document.querySelectorAll("[data-equals]");
let firstNum = null;
let secondNum = null;
let operator = null;
let lastPress = null;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (a, operator, b) => {
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "*") return a * b;
  if (operator === "/") return a / b;
};

numPad.forEach((button) =>
  button.addEventListener("click", () => {
    if (display.value === "0") {
      clearDisplay();
      display.value += button.textContent;
      lastPress = button.textContent;
    } else if (lastPress === operator) {
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
    (firstNum = display.value), (operator = button.textContent);
    lastPress = button.textContent;
  })
);

clear.forEach((button) => button.addEventListener("click", () => initialize()));

equals.forEach((button) => button.addEventListener("click", () => equal()));

function clearDisplay() {
  display.value = null;
}

function initialize() {
  display.value = 0;
  firstNum = null;
}

function equal() {
  secondNum = display.value;
  console.log(operate(firstNum, operator, secondNum));
}

console.log(firstNum);
//Fix equals
