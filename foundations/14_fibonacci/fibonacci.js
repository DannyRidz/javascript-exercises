const fibonacci = function (input) {
    input = Number(input);

    if (input < 0) {
        return "OOPS";
    }
    else if (input === 0) {
        return 0;
    }

    let a = 0;
    let b = 1;
    let c;

    for (let i = 2; i <= input; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
