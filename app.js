const inputs = document.querySelectorAll("input");
const buttons = document.querySelectorAll("button");
let num1, num2;

function getNumbers(inputs) {
    num1 = parseInt(inputs[0].value);
    num2 = parseInt(inputs[1].value);
}

function parseOperation(operation) {
    if (operation === "+") {
        return num1 + num2;
    } else if (operation === "-") {
        return num1 - num2;
    }
    if (operation === "*") {
        return num1 * num2;
    } else if (operation === "/") {
        return num1 / num2;
    }
}

function setWarning(element) {
    isNaN(element.target.value) ? element.target.classList.add("red-border") : element.target.classList.remove("red-border");
}

buttons.forEach(button => button.addEventListener("click", (e) => {
    getNumbers(inputs);
    const result = parseOperation(e.target.innerText);
    isNaN(result) ? alert("Invalid input!") : alert(`${num1} ${e.target.innerText} ${num2} = ${result} `);
}))

inputs.forEach(value => value.addEventListener("input", setWarning));