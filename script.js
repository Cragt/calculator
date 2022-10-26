const display = document.getElementById("display");
const numPad = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operator]");
const clear = document.querySelectorAll("[data-clear]");
let firstNum = display.value;

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
    appendNumber(button.textContent);
  })
);

operators.forEach((button) =>
  button.addEventListener("click", () => (firstNum = button.value))
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
