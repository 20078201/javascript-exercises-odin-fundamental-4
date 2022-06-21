const removeFromArray = function(array, ...inputValues) {
    return array.filter(v => {
        return !inputValues.includes(v)
    })
};

// Do not edit below this line
module.exports = removeFromArray;
