const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (a, operator, b) => {
    if (operator === '+') return a + b;
    if (operator === '-') return a - b;
    if (operator === '*') return a * b;
    if (operator === '/') return a / b;
}


console.log(operate(5, '/', 5))
// console.log(add(9, 3))
// console.log(subtract(9, 3))
// console.log(multiply(9, 3))
// console.log(divide(9, 3))