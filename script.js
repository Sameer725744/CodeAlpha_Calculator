const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

let expression = "";

// Add a value to the calculator display.
function addValue(value) {
    expression += value;
    display.value = expression;
}

// Calculate the entered expression.
function calculate() {
    if (expression === "") return;

    // Only allow numbers and basic arithmetic operators.
    if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
        display.value = "Error";
        expression = "";
        return;
    }

    try {
        const result = Function('"use strict"; return (' + expression + ')')();

        if (!Number.isFinite(result)) {
            display.value = "Error";
            expression = "";
        } else {
            expression = String(Number(result.toFixed(8)));
            display.value = expression;
        }
    } catch (error) {
        display.value = "Error";
        expression = "";
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", function () {
        const value = button.dataset.value;

        if (value === "clear") {
            expression = "";
            display.value = "";
        } else if (value === "backspace") {
            expression = expression.slice(0, -1);
            display.value = expression;
        } else if (value === "equal") {
            calculate();
        } else {
            addValue(value);
        }
    });
});

// Basic keyboard support.
document.addEventListener("keydown", function (event) {
    if (/^[0-9.+\-*/]$/.test(event.key)) {
        addValue(event.key);
    } else if (event.key === "Enter") {
        calculate();
    } else if (event.key === "Backspace") {
        expression = expression.slice(0, -1);
        display.value = expression;
    } else if (event.key === "Escape") {
        expression = "";
        display.value = "";
    }
});
