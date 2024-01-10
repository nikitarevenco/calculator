const inputField = document.querySelector(".input-field");
const btnNine = document.querySelector(".nine");
const btnEight = document.querySelector(".eight");
const btnSeven = document.querySelector(".seven");
const btnSix = document.querySelector(".six");
const btnFive = document.querySelector(".five");
const btnFour = document.querySelector(".four");
const btnThree = document.querySelector(".three");
const btnTwo = document.querySelector(".two");
const btnOne = document.querySelector(".one");
const btnZero = document.querySelector(".zero");
const btnDel = document.querySelector(".del");
const btnAc = document.querySelector(".ac");
const btnReverseSign = document.querySelector(".reverse-sign");
const btnEquals = document.querySelector(".equals");
const btnPeriod = document.querySelector(".period");
const btnFactorial = document.querySelector(".factorial");
const btnSin = document.querySelector(".sin");
const btnCos = document.querySelector(".cos");
const btnTan = document.querySelector(".tan");
const btnAdd = document.querySelector(".add");
const btnSubtract = document.querySelector(".subtract");
const btnDivide = document.querySelector(".divide");
const btnMultiply = document.querySelector(".multiply");
const btnPower = document.querySelector(".power");

let input1 = 0;
let input2 = 0;
let operator;
let operatorSingle;

function calculator() {
  input1 = inputField.textContent;
  input2 = input1;

  if (operator && operatorSingle === true) {
    if (operator === "factorial") {
      inputField.textContent = factorial(input1);
    }
  }
}

btnFactorial.addEventListener("click", function () {
  operator = "factorial";
  operatorSingle = true;
  calculator();
});

btnNine.addEventListener("click", function () {
  inputField.textContent += "9";
});

// At first, I will only add support for "9" and "add"

function factorial(input) {
  if (input === 0) {
    return 1;
  } else if (input % 1 !== 0) {
    return "ERROR";
  }
  storedInput = input;
  for (let i = input - 1; i > 0; i--) {
    storedInput *= i;
  }
  return storedInput;
}

function sin(input) {
  return Math.sin(input);
}

function cos(input) {
  return Math.cos(input);
}

function tan(input) {
  return Math.tan(input);
}

function add(input1, input2) {
  return input1 + input2;
}

function subtract(input1, input2) {
  return input1 - input2;
}

function multiply(input1, input2) {
  return input1 * input2;
}

function divide(input1, input2) {
  return input1 / input2;
}

function power(input1, input2) {
  return input1 ** input2;
}