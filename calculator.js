// Javascript code

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
