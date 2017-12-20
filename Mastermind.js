var checkValidity = require("./InvalidConditions")

module.exports.checkGuess = function mastermind(guessedColours, mastermindSelectedColours){

    var result = new RegExp(guessedColours); // matching
    var output = result.test(mastermindSelectedColours);
    if (output === true)
    {
        return "Won!";
    }
    return "Lost";
};

module.exports.returnedArray = function mastermind(guessedColours,mastermindSelectedColours){

    var result = [""];
    for (var i = 0; i < guessedColours.length; i++)
    {
        for (var j = 0; j < mastermindSelectedColours.length; j++)
        {
            if (guessedColours[i] === mastermindSelectedColours[j])
            {
                if (i === j)
                {
                    result += "Black";
                }
               else {result += " " + "White";}
            }
        }

    }
    return result;
};

module.exports.returnExceededAttempt = function mastermind(guessedColours){

    var result = "Error: You have had more than 60 tries.";
    return result;

};

//
// var resultedOutput = function mastermind(guessedColours, mastermindSelectedColours){
//     if (checkValidity.returnInvalidArrayLength(guessedColours) === true)
//     {
//         if (checkValidity.returnInvalidColourArray(guessedColours) === true)
//         {
//
//         }
//     }
//
//
// }