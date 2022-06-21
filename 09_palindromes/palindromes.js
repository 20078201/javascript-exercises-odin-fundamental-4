const palindromes = function (string) {
    const stringLength = string.length;
	for (let i = 0; i < stringLength / 2; i++) {
		if (string[i] !== string[stringLength - 1 - i]) {
			return false;
		}
	}
	return true;
};

// Do not edit below this line
module.exports = palindromes;
