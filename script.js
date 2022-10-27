const display = document.getElementById("display");
const numPad = document.querySelectorAll("[data-number]");
const operatorButton = document.querySelectorAll("[data-operator]");
const clear = document.querySelectorAll("[data-clear]");
let firstNum;
let operator = "";


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
    }
    display.value += (button.textContent);
  })
);

operatorButton.forEach((button) =>
  button.addEventListener("click", () => {
    firstNum = display.value,
    operator = button.textContent
  })
);

clear.forEach((button) =>
  button.addEventListener("click", () => clearDisplay())
);

function appendNumber(number) {
  display.value += number;
}

function clearDisplay() {
  display.value = "";
}

console.log(firstNum);
