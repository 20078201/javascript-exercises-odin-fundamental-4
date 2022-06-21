const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) return 'ERROR'
    if (isNaN(num1) || isNaN(num2)) return 'ERROR'
    if (typeof num1 === 'string' || typeof num2 === 'string') return 'ERROR'
    
    let sum = 0

    let smallNum = Math.min(num1, num2)
    let largerNumber = Math.max(num1, num2)

    for (let index = smallNum; index <= largerNumber; index++) {
        sum = sum + index
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
