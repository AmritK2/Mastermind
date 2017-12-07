//var game = {"Red, Blue, Green, Orange, Purple, Yellow"};

var checkGuess = function mastermind(guessedColours){
    var mastermindSelectedColours ="Red, Orange, Yellow, Yellow";
    var result = new RegExp(guessedColours); // matching
    var output = result.test(mastermindSelectedColours);
    return output;
};
module.exports.checkGuess = checkGuess;