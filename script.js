const display = document.getElementById("display");
const numPad = document.querySelectorAll("[data-number]");
const operatorButton = document.querySelectorAll("[data-operator]");
const clear = document.getElementById("clear");
const equals = document.getElementById("equal");
const decimal = document.getElementById("decimal");
const ac = document.getElementById("ac");
const click = document.querySelectorAll("button");
const sound = document.getElementById("play");
let firstNum = null;
let secondNum = null;
let operator = null;
let lastPress = null;
let temp = null;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

numPad.forEach((button) =>
  button.addEventListener("click", () => selectNumber(button))
);

operatorButton.forEach((button) =>
  button.addEventListener("click", () => selectOperator(button))
);

click.forEach((button) => button.addEventListener("click", playSound));

clear.addEventListener("click", initialize);
ac.addEventListener("click", clearDisplay);
equals.addEventListener("click", equalButton);
decimal.addEventListener("click", decimalButton);

function operate(a, operator, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return (temp = add(a, b));
    case "-":
      return (temp = subtract(a, b));
    case "*":
      return (temp = multiply(a, b));
    case "/":
      return (temp = divide(a, b));
  }
}

function selectNumber(number) {
  if (display.value === "0") {
    clearDisplay();
  } else if (lastPress === operator || lastPress === "=") {
    clearDisplay();
  } else {
  }
  display.value += number.textContent;
  lastPress = number.textContent;
}

function selectOperator(button) {
  if (lastPress === operator) {
  } else if (lastPress === "=") {
    firstNum = display.value;
  } else {
    if (firstNum === null && secondNum === null) {
      firstNum = display.value;
    } else if (firstNum !== null && secondNum !== null) {
      equal();
    } else {
      secondNum = display.value;
      equal();
    }
  }
  operator = button.textContent;
  lastPress = button.textContent;
}

function equalButton() {
  equal();
  lastPress = "=";
}

function decimalButton() {
  if (
    lastPress === operator ||
    lastPress === "=" ||
    lastPress === "." ||
    display.value.includes(".")
  ) {
    return;
  }
  display.value += ".";
  lastPress = decimal.textContent;
}

function clearDisplay() {
  display.value = null;
}

function initialize() {
  display.value = 0;
  firstNum = null;
  secondNum = null;
  temp = null;
  lastPress = null;
  operator = null;
}

function playSound() {
  sound.currentTime = 0;
  sound.play();
}

function toggleMute() {
  sound.muted = !sound.muted;
  let img = document.getElementById("mute").src;
  if (img.indexOf("audible.png") != -1) {
    document.getElementById("mute").src = "muted.png";
  } else {
    document.getElementById("mute").src = "audible.png";
  }
}

function equal() {
  if (temp === null) {
    secondNum = display.value;
    display.value =
      Math.round(operate(firstNum, operator, secondNum) * 100) / 100;
  } else if (lastPress === "=") {
    display.value = Math.round(operate(temp, operator, secondNum) * 100) / 100;
  } else {
    secondNum = display.value;
    display.value = Math.round(operate(temp, operator, secondNum) * 100) / 100;
  }
  if (display.value === "undefined" || display.value === "NaN") {
    display.value = "Error";
    console.log("4");
  } else if (display.value === "Infinity") {
    display.value = "Lol";
  }
  firstNum = null;
}
