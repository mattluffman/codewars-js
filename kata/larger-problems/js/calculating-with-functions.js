function zero(operation) {
    return calculateOperationIfExists(0, operation);
}

function one(operation) {
    return calculateOperationIfExists(1, operation);
}

function two(operation) {
    return calculateOperationIfExists(2, operation);
}

function three(operation) {
    return calculateOperationIfExists(3, operation);
}

function four(operation) {
    return calculateOperationIfExists(4, operation);
}

function five(operation) {
    return calculateOperationIfExists(5, operation);
}

function six(operation) {
    return calculateOperationIfExists(6, operation);
}

function seven(operation) {
    return calculateOperationIfExists(7, operation);
}

function eight(operation) {
    return calculateOperationIfExists(8, operation);
}

function nine(operation) {
    return calculateOperationIfExists(9, operation);
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

/**
 * Operation enum
 */
const Operation = Object.freeze({
    SUBTRACTION: 0,
    ADDITION: 1,
    MULTIPLICATION: 2,
    DIVISION: 3
});

/**
 * do the mathematical operation if the operation is provided, otherwise return the first operand.
 * @param firstOperand the number for the given numerical named function caller
 * @param operationInfo object with mathematical {@link Operation} & the right-hand operand
 * @returns {number|*}
 */
function calculateOperationIfExists(firstOperand, operationInfo) {
    return operationInfo ? calculate(firstOperand, operationInfo.operation, operationInfo.rightOperand) : firstOperand;
}

/**
 * Calculate the result of the operation
 * @param firstOperand - the first operand
 * @param operation - the operation to perform
 * @param secondOperand - the second operand
 * @returns {number} - the result of the mathematical operation
 */
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

module.exports = {zero, one, two, three, four, five, six, seven, eight, nine, plus, minus, times, dividedBy};