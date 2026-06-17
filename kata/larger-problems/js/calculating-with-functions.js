function zero(operation) {
    return operation ? calculate(0, operation.operation, operation.rightOperand) : 0;
}

function one(operation) {
    return operation ? calculate(1, operation.operation, operation.rightOperand) : 1;
}

function two(operation) {
    return operation ? calculate(2, operation.operation, operation.rightOperand) : 2;
}

function three(operation) {
    return operation ? calculate(3, operation.operation, operation.rightOperand) : 3;
}

function four(operation) {
    return operation ? calculate(4, operation.operation, operation.rightOperand) : 4;
}

function five(operation) {
    return operation ? calculate(5, operation.operation, operation.rightOperand) : 5;
}

function six(operation) {
    return operation ? calculate(6, operation.operation, operation.rightOperand) : 6;
}

function seven(operation) {
    return operation ? calculate(7, operation.operation, operation.rightOperand) : 7;
}

function eight(operation) {
    return operation ? calculate(8, operation.operation, operation.rightOperand) : 8;
}

function nine(operation) {
    return operation ? calculate(9, operation.operation, operation.rightOperand) : 9;
}

function plus(rightOperand) {
    return {
        operation: Operation.ADDITION,
        rightOperand: rightOperand
    };
}

function minus(rightOperand) {
    return {
        operation: Operation.SUBTRACTION,
        rightOperand: rightOperand
    };
}

function times(rightOperand) {
    return {
        operation: Operation.MULTIPLICATION,
        rightOperand: rightOperand
    };
}

function dividedBy(rightOperand) {
    return {
        operation: Operation.DIVISION,
        rightOperand: rightOperand
    };
}

const Operation = Object.freeze({
    SUBTRACTION: 0,
    ADDITION: 1,
    MULTIPLICATION: 2,
    DIVISION: 3
});

function calculate(firstOperand, operation, secondOperand) {
    switch (operation) {
        case Operation.ADDITION:
            return firstOperand + secondOperand;
        case Operation.SUBTRACTION:
            return firstOperand - secondOperand;
        case Operation.MULTIPLICATION:
            return firstOperand * secondOperand;
        case Operation.DIVISION:
            return Math.trunc(firstOperand / secondOperand);
    }
}

module.exports =  { zero, one, two, three, four, five, six, seven, eight, nine, plus, minus, times, dividedBy };