//var game = {"Red, Blue, Green, Orange, Purple, Yellow"};

function mastermind(guessedColours){
    var mastermindSelectedColours ="Red, Orange, Yellow, Orange";
    var result = new RegExp(guessedColours); // matching
    var output = result.test(mastermindSelectedColours);
    return output;
};
exports.output;