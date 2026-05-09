const removeFromArray = function (firstArg, ...theRest) {
    return firstArg.filter(element => !theRest.includes(element))
}

// Do not edit below this line
module.exports = removeFromArray;
