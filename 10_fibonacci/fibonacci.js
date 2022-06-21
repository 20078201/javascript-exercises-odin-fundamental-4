const fibonacci = function(num) {
    let n1 = 0
    let n2 = 1
    let count = 0
    

    if (num <= 0) {
        return "OOPS"
    } else if (num === 1) {
        return n1
    } else {
        while (count < num) {
            let nth = n1 + n2
            n1 = n2
            n2 = nth
        }
        return n1
    }
};

// Do not edit below this line
module.exports = fibonacci;
