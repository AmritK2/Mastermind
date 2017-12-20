module.exports.returnInvalidColourArray = function mastermind(guessedColours, validColours) {
    for (var i in guessedColours) {
        for (var j in validColours) {

            if (guessedColours[i] !== validColours[j]) {
                return "Error: You have given an invalid colour.";
            }

            return true;
        }
    }
};

module.exports.returnInvalidArrayLength = function mastermind(guessedColours) {
    if (guessedColours.length !== 4) {
        return "Error: You must pass 4 colours.";
    }
    else {
        return true;
    }
};