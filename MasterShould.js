var expect = require('chai').expect; // gives access to files
var mastermind = require("./MasterLogic");
var Invalid = require("./InvalidConditions");
var actualGame = require("./MastermindGame");

describe("ShouldReturnWon", function() {
    it("return true", function() {
        var mastermindSelectedColours = ["Red", "Orange", "Yellow", "Yellow"];
        var guessedColours = ["Red", "Orange", "Yellow", "Yellow"];
        expect("Won!").to.equal(mastermind.checkGuess(guessedColours, mastermindSelectedColours));
    });
});


describe ("ShouldReturnBlackAndWhiteColours", function (){
    it("return true", function(){
        var mastermindSelectedColours = ["Red", "Blue", "Orange","Yellow"];
       var guessedColours = ["Red", "Orange", "Blue", "Green"];
       expect("Black" +" " + "White" + " " + "White").to.equal
       (mastermind.returnedArray(guessedColours, mastermindSelectedColours));
    });
});


describe ("ShouldReturnInvalidColours", function (){
    it("return true", function(){
        var guessedColours = ["Red", "Blue", "Pink", "Yellow"];
        var validColours = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple"];
        expect("Error: You have given an invalid colour.").to.equal
        (Invalid.returnInvalidColourArray(guessedColours, validColours));
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
        expect("Error: You have had more than 60 tries.").to.equal
        (mastermind.returnExceededAttempt(guessedColours));
    });
});

describe ("ShouldReturnWonFromCombinedFunctionality", function (){
    it("return true", function() {
        var mastermindSelectedColours = ["Red", "Orange", "Yellow", "Yellow"];
        var guessedColours = ["Red", "Orange", "Yellow", "Yellow"];
        expect("Won!").to.equal(actualGame.resultedOutput(guessedColours, mastermindSelectedColours));
    });
});