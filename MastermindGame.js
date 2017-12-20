var checkValidity = require("./InvalidConditions");
var checkCorrectness = require ("./MasterLogic");

module.exports.resultedOutput = function mastermind(guessedColours, mastermindSelectedColours){

    if (checkValidity.returnInvalidArrayLength(guessedColours) === true)
    {
        if (checkValidity.returnInvalidColourArray(guessedColours) === true)
        {
            var gameCheckResponse = checkCorrectness.returnedArray(guessedColours, mastermindSelectedColours);
            for (var i = 0; i < gameCheckResponse.length; i++)
            {
                if (gameCheckResponse[i] !== gameCheckResponse[0])
                {
                   checkCorrectness.returnedArray(guessedColours,mastermindSelectedColours);
                }
                else
                {
                    checkCorrectness.checkGuess(guessedColours, mastermindSelectedColours);
                }
            }

        }
    }

};