function calculate(inputVal) {
    const regEx = /\+|\-|\*|\//;
    const numbers = inputVal.split(regEx);
    [numberA, numberB] = [parseInt(numbers[0]), parseInt(numbers[1])];
    const operator = inputVal.match(regEx);

    if(Number.isNaN(numberA) || Number.isNaN(numberB) || operator === null) {
        updateResult("Operation not valid")
        return
    }

    const calculator = new Calculator();

    calculator.add(numberA);

    let result = 0

    switch(operator[0]) {
        case '+':
            result = calculator.add(numberB)
            break;
        case '-':
            result = calculator.substract(numberB)
            break;
        case '*':
            result = calculator.multiply(numberB)
            break;
        case '/':
            result = calculator.divide(numberB)
            break;
    }

    updateResult(result)
}

function updateResult(result) {
    let element = document.getElementById("result")

    if(element) {
        element.innerHTML= result;
    }
}

function showVersion() {
    const calculator = new Calculator();

    const element = document.getElementById('version');

    element.innerText = calculator.version;
}