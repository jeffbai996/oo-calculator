// get button elements
const numberButtons = document.getElementsByClassName("number");
const operatorButtons = document.getElementsByClassName("operator");
const clearButton = document.getElementById("allclear");
const decimalButton = document.getElementById("decimal");

// get display elements
let lastOperandDisplay = document.getElementById("last-operand");
let currentOperandDisplay = document.getElementById("current-operand");