const display = document.getElementById("display");

function handleClick(char) {
    if (display.innerText === "0" && char !== ".") {
        display.innerText = char;
    } else if ("+-*/".includes(char) && "+-*/".includes(display.innerText.slice(-1))) {
        display.innerText = display.innerText.slice(0, -1) + char; 
    } else {
        display.innerText += char;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText); 
    } catch {
        display.innerText = "Error";
    }
}

// Modifying  calculator.js to use the lexer, parser, and interpreter
function evaluate() {
    let input = document.getElementById("display").value;
    let tokens = lexer(input);
    let ast = parseToAST(tokens);
    let result = interpret(ast);
     document.getElementById("display").innerText = result;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("equals").addEventListener("click", evaluate);
});
   
