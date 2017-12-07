var expect = require('chai').expect; // gives access to files
var mastermind = require("./Mastermind");

describe("RandomlySelectedColourShould", function() {
    it("return true", function() {
        var guessedColours = "Red, Orange, Yellow, Yellow";
        expect(true).to.equal(mastermind.checkGuess(guessedColours));
    });
});