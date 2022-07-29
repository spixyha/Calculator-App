const nubmer1 = document.querySelector("#number1");
const nubmer2 = document.querySelector("#number2");
const addition = document.querySelector("#addition");
const substraction = document.querySelector("#substraction");
const division = document.querySelector("#division");
const multiplication = document.querySelector("#multiplication");

function checkResult(result) {
    if (isNaN(result)) {
        alert("Invalid input!");
    } else {
        alert(`${number1.value} + ${number2.value} = ${result}`);
    }
}

number1.addEventListener("input", function (e) {
    if (isNaN(number1.value)) {
        number1.classList.add("red-border");
    } else {
        number1.classList.remove("red-border");
    }
})

number2.addEventListener("input", function (e) {
    if (isNaN(number2.value)) {
        number2.classList.add("red-border");
    } else {
        number2.classList.remove("red-border");
    }
})

addition.addEventListener("click", function () {
    const result = parseInt(number1.value) + parseInt(number2.value);
    checkResult(result);
});

substraction.addEventListener("click", function () {
    const result = parseInt(number1.value) - parseInt(number2.value);
    checkResult(result);
});

division.addEventListener("click", function () {
    const result = parseInt(number1.value) / parseInt(number2.value);
    checkResult(result);
});

multiplication.addEventListener("click", function () {
    const result = parseInt(number1.value) * parseInt(number2.value);
    checkResult(result);
});