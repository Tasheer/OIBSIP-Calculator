let displayValue = "0";

function updateDisplayValue() {
    document.getElementById("display").textContent = displayValue;
}

function clearDisplay() {
    displayValue = "0";
    updateDisplayValue();
}

function appendToDisplay(value) {
    if (displayValue === "0") {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplayValue();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = "Error";
    }
    updateDisplayValue();
}
