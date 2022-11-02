const display = document.getElementById("display");
const numPad = document.querySelectorAll("[data-number]");
const operatorButton = document.querySelectorAll("[data-operator]");
const clear = document.querySelectorAll("[data-clear]");
const equals = document.querySelectorAll("[data-equals]");
const decimal = document.querySelectorAll("[data-decimal");
const ac = document.querySelectorAll("[data-ac]");
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

const operate = (a, operator, b) => {
  if (operator === "+")
    return Math.round((temp = Number(a) + Number(b)) * 10) / 10;
  if (operator === "-") return Math.round((temp = a - b) * 10) / 10;
  if (operator === "*") return Math.round((temp = a * b) * 10) / 10;
  if (operator === "/") return Math.round((temp = a / b) * 10) / 10;
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
    if (lastPress === operator) {
      operator = button.textContent;
      lastPress = button.textContent;
    } else if (lastPress === "=") {
      operator = button.textContent;
      lastPress = button.textContent;
      firstNum = display.value;
    } else {
      if (firstNum === null && secondNum === null) {
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
    }
  })
);

clear.forEach((button) => button.addEventListener("click", () => initialize()));

ac.forEach((button) => button.addEventListener("click", () => clearDisplay()));

equals.forEach((button) =>
  button.addEventListener("click", () => {
    equal();
    lastPress = button.textContent;
  })
);

decimal.forEach((button) =>
  button.addEventListener("click", () => {
    if (
      lastPress === operator ||
      lastPress === "=" ||
      lastPress === "." ||
      display.value.includes(".")
    ) {
      return;
    }
    display.value += ".";
    lastPress = button.textContent;
  })
);

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

click.forEach((button) => {
  button.addEventListener("click", () => {
    playSound();
  });
});

function playSound() {
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
    display.value = operate(firstNum, operator, secondNum);
  } else if (lastPress === "=") {
    display.value = operate(temp, operator, secondNum);
  } else {
    secondNum = display.value;
    display.value = operate(temp, operator, secondNum);
  }
  if (display.value === "undefined" || display.value === "NaN") {
    display.value = "Error";
  } else if (display.value === "Infinity") {
    display.value = "Lol";
  }

  firstNum = null;
}
