const add = function(num1, num2) {
  return num1 + num2
};

const subtract = function(num1, num2) {
    return num1 - num2
};

const sum = function(array) {
    let sum = 0
    array.forEach(element => {
      sum = sum + element
    })
    return sum
};

const multiply = function(array) {  
  const firstMultiply = array[0] * array[1]

  if (array.length === 2) return firstMultiply

  let total = firstMultiply
  for (let i = 2; i < array.length; i++){
    total = total * array[i]   
  }
  return total
};

const power = function(num, power) {
    return Math.pow(num, power)
};

const factorial = function(num) {
	let result = num 
  if (num === 0 || num === 1) return 1
  while (num > 1) {
    num--
    result *= num
  }

  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
