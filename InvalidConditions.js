module.exports.returnInvalidColourArray = function mastermind(guessedColours){

    var result = [""];
    var validColours = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple"];

    for (var i = 0; i < guessedColours.length; i++) {
        for (var j = 0; j < validColours.length; j++) {
            if (guessedColours[i] !== validColours[j]) {
                result = "Error: You have given an invalid colour.";

            }
            // var bool = true;
            // return bool;
        }

    }
    return result;
};

module.exports.returnInvalidArrayLength = function mastermind(guessedColours){

    var result = [""];
    if (guessedColours.length !== 4)
    {
        result = "Error: You must pass 4 colours.";
    }
    // else
    // {
    //     var bool = true;
    // }
    // return bool;
    return result;
};