function ValidateResponse(num1, num2, operation) {

    let message = ''
    let status = ''
    let result = null
    // checking num1 and num2 are numbers or not -
    let isNum1Str = /^([^0-9]*)$/.test(num1);
    let isNum2Str = /^([^0-9]*)$/.test(num2);
    if (isNum1Str || isNum2Str) {
        message = "Invalid data types"
        status = 'error'
    }
    // checking underflow -
    else if (+num1 < -1000000 || +num2 < -1000000) {
        message = "Underflow"
        status = 'error'
    }
    // checking overflow -
    else if (+num1 > 1000000 || +num2 > 1000000) {
        message = "Overflow"
        status = 'error'
    }
    // Mathematical operations -
    else {
        switch (operation) {
            case 'add':
                result = (+num1) + (+num2)
                message = 'the sum of given two numbers'
                status = 'success'
                break;
            case 'sub':
                result = (+num1) - (+num2)
                message = 'the difference of given two numbers'
                status = 'success'
                break;
            case 'multiply':
                result = (+num1) * (+num2)
                message = 'The product of given numbers'
                status = 'success'
                break;
            case 'divide':
                if (+num2 === 0) {
                    message = "Cannot divide by zero"
                    status = 'error'
                } else {
                    result = (+num1) / (+num2)
                    message = 'The division of given numbers'
                    status = 'success'
                    break;
                }
        }
        // checking result -
        if (result < -1000000) {
            message = "Underflow"
            status = 'error'
            result = null
        }
        else if (result > 1000000) {
            message = "Overflow"
            status = 'error'
            result = null
        }
    }

    return [status, message, result]
}

module.exports = ValidateResponse