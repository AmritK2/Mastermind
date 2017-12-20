var expect = require('chai').expect; // gives access to files
var mastermind = require("./Mastermind");
var Invalid = require("./InvalidConditions")

describe("ShouldCheckGuessedColours", function() {
    it("return true", function() {
        var mastermindSelectedColours = ["Red", "Orange", "Yellow", "Yellow"];
        var guessedColours = ["Red", "Orange", "Yellow", "Yellow"];
        expect(true).to.equal(mastermind.checkGuess(guessedColours, mastermindSelectedColours));
    });
});


describe ("ShouldReturnBlackAndWhiteColours", function (){
    it("return true", function(){
        var mastermindSelectedColours = ["Red", "Blue", "Orange","Yellow"];
       var guessedColours = ["Red", "Orange", "Blue", "Green"];
       expect("Black" +" " + "White" + " " + "White").to.equal(mastermind.returnedArray(guessedColours, mastermindSelectedColours));
    });
});

describe ("ShouldReturnWON", function (){
    it("return true", function(){
        var mastermindSelectedColours = ["Red", "Blue", "Orange","Yellow"];
        var guessedColours = ["Red", "Blue", "Orange", "Yellow"];
        expect("WON").to.equal(mastermind.returnWin(guessedColours, mastermindSelectedColours));
    });
});

describe ("ShouldReturnInvalidColours", function (){
    it("return true", function(){
        var guessedColours = ["Red", "Blue", "Pink", "Yellow"];
        expect("Error: You have given an invalid colour.").to.equal(Invalid.returnInvalidColourArray(guessedColours));
    });
});

describe ("ShouldReturnInvalidArrayLength", function (){
    it("return true", function(){
        var guessedColours = ["Red", "Blue", "Orange"];
        expect("Error: You must pass 4 colours.").to.equal(Invalid.returnInvalidArrayLength(guessedColours));
    });
});


describe ("ShouldReturnExceededAttempts", function (){
    it("return true", function(){
        var num = 0;
        while (num <= 60)
        {
            var guessedColours = ["Red", "Blue", "Orange", "Yellow"];
            num++;
        }
        expect("Error: You have had more than 60 tries.").to.equal(mastermind.returnExceededAttempt(guessedColours));
    });
});
