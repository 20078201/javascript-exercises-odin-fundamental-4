const repeatString = function(string, num) {
    let repeatedWord = ""

    if (num === 0) return repeatedWord

    if (num < 0) return 'ERROR'

    for (let index = 0; index < num; index++) {
        repeatedWord = repeatedWord.concat(string)
    }

    return repeatedWord
};

// Do not edit below this line
module.exports = repeatString;
