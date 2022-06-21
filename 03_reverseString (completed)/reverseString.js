const reverseString = function(string) {
    // 1. split string into single letter. Return a new array
    let splitStrings = string.split("")

    // 2. Reverse the array using .reverse()
    let reverseArray = splitStrings.reverse()

    // 3. join array
    let reverseWord = reverseArray.join("")

    return reverseWord
};

// Do not edit below this line
module.exports = reverseString;
