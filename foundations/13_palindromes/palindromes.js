const palindromes = function (strings) {
    let string = strings.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedString = string.split('').reverse().join('');
    return string === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
