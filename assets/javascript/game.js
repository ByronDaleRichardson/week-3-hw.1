//available letter choices
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//zeroing out values
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

//computer selects a random letter from array
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//
var updateGuessesLeft = function() {
	document.querySelector('#guessLeft').innerHTML = "Tries Remaining: " + guessesLeft;
};

var updateLetterToGuess = function() {
	this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

var updateGuessessSoFar = function() {
	document.querySelector('#guess').innerHTML = "What You Have Tried: " + guessedLetters.join(", ");
};

var reset = function() {
	totalGuesses = 9;
	guessesLeft = 9;
	guessedLetters = [];

	updateLetterToGuess();
	updateGuessesLeft();
	updateGuessessSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

document.onkeyup = function(event) {
	guessesLeft--;

	var userGuess = String.fromCharCode(event.keycode).toLowerCase();

	guessedLetters.push(userGuess);
	updateGuessesLeft();
	updateGuessessSoFar();

	if (guessesLeft > 0) {
		if (userGuess == letterToGuess) {
			wins++;
			document.querySelector("#wins").innerHTML = "Success: " + wins;
			reset();
		}
	}
	else if (guessesLeft == 0) {
		losses++;
		document.querySelector("#losses").innerHTML = "Failure: " + losses;
		reset();
	}
};