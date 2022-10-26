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

let display = document.getElementById("display");

const btn = document.getElementsByTagName("button");
const numberOfButtons = btn.length;
for (i = 0; i < numberOfButtons; i++) {
  btn[i].addEventListener("click", myFunction);
}

function myFunction() {
  // document.getElementById("display").value = btn[0].value;
}

// Make myFunction display the button's number in the input field, currently only works if I specify the specific index of btn
