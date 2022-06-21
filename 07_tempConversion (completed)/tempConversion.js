function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const ftoc = function(tempFa) {
  let convertedTemp = (tempFa - 32)* (5/9)
  return round(convertedTemp, 1)
};

const ctof = function(tempCelsius) {
  let convertedTemp = (tempCelsius * (9/5)) + 32
  return round(convertedTemp, 1)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
