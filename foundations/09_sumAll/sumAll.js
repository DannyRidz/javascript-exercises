const sumAll = function (a, b) {
    let total = 0;

    if (typeof a !== "number" || a < 0 || !Number.isInteger(a) ||
        typeof b !== "number" || b < 0 || !Number.isInteger(b)) {

        return "ERROR"
    }

    for (i = Math.min(a, b); i <= Math.max(a, b); i++) {
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
