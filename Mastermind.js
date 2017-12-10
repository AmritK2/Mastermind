//var game = {"Red, Blue, Green, Orange, Purple, Yellow"};

var checkGuess = function mastermind(guessedColours){
    var mastermindSelectedColours = ["Red", "Orange", "Yellow", "Yellow"];
    var result = new RegExp(guessedColours); // matching
    var output = result.test(mastermindSelectedColours);
    return output;
};
module.exports.checkGuess = checkGuess;


var returnedArray = function mastermind(guessedColours){

    var result = [""];
    var mastermindSelectedColours = ["Red", "Blue", "Orange","Yellow"];

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
module.exports.returnedArray = returnedArray;

var returnWin = function mastermind(guessedColours){

    var result = [""];
    var mastermindSelectedColours = ["Red", "Blue", "Orange","Yellow"];

    if (guessedColours.length == mastermindSelectedColours.length)
    {
        result = "WON";
    }
    return result;
};
module.exports.returnWin = returnWin;

var returnInvalid = function mastermind(guessedColours){

    var result = [""];
    var validColours = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple"];

    for (var i = 0; i < guessedColours.length; i++) {
        for (var j = 0; j < validColours.length; j++) {
            if (guessedColours[i] !== validColours[j]) {
                result = "Error: You have given an invalid colour.";
            }
        }
    }
    return result;
};
module.exports.returnInvalid = returnInvalid;