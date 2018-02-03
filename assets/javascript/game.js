//Create an array of words

var wordBank = ["South Carolina", "North Carolina", "Georgia","Virginia", "New Jersey", "Connecticut", "Massachusetts", "Rhode Island", "Maryland", "Delaware", "New Hampshire", "New York", "Pennsylvania"];

var winCount = 0;
var lossCount = 0;
var guessesRemaining = 13;
var hangmanWord = "";
var underScore = [];
var lettersGuessed = [];




//increment user win
function incrementWinCount () {
	winCount++;
}

//increment user loss
function incrementLossCount () {
	lossCount++;
}

//decrement guesses remaining
function decrememntGuessesRemaining (){
	guessesRemaining--;
}

//test if the user won
function didUserWin() {
	var underScoreString = underScore.join("");
	 if (underScoreString === hangmanWord) {
		 return true;
	 } else {
		 return false;
	 }
}
//test if the user lost
function didUserLose(){
	if (guessesRemaining === 0){
		return true;
	} else {
		return false;
	}
}
//choose hangman word from wordbank
function chooseHangmanWord () {
	var index = Math.floor(Math.random() * wordBank.length);
	hangmanWord = wordBank[index];
}

//replace underscore with letter 
function replaceUnderscore(userGuess) {

for (var i = 0; i < hangmanWord.length; i++) {	
		if (userGuess === hangmanWord[i]) {
			underScore[i] = userGuess;
		}
	}
}

//test if guess was a match
function isUserGuessCorrect(userGuess) {
	if ( hangmanWord.indexOf(userGuess) !== -1 ) {
		return true;
		// cal replace underscore with userGuess
	} else {
		return false;
	}
}

//create underscore word (after wordbank word chosen)

function createUnderscore (){
	var underScoreArray = [];
	for (var i = 0; i < hangmanWord.length; i++) {
		underScoreArray.push("_");
	}
	underScore = underScoreArray;
}

function addToLettersGuessed (userGuess) {
	lettersGuessed.push(userGuess);
}

//screens out duplicate guesses
function isGuessValid(userGuess) {
	if (underScore.indexOf(userGuess) === -1 && 
		lettersGuessed.indexOf(userGuess) === -1)
	{
		return true;
	} else {
		return false;
	}
}

function newRound() {
	guessesRemaining = 13;
	lettersGuessed = [];
	chooseHangmanWord();
	createUnderscore();
	updateBrowserWindow()
}

function updateBrowserWindow() {
	document.getElementById("wins").innerHTML = winCount;
	document.getElementById("losses").innerHTML = lossCount;
	document.getElementById("guessesRemain").innerHTML = guessesRemaining;
	document.getElementById("currentWord").innerHTML = underScore;
	document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
}

function isGuessALetter (userGuess){
	var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";

	if ( alphabet.indexOf(userGuess) !== -1) {
		return true;
	} else {
		return false;
	}
}
//manage game play logic -- shots caller
function gamePlayEngine(userGuess) {

	//is user guess a letter
	if (isGuessALetter(userGuess))  {

		//if so, is user guess previously guessed
		if (isGuessValid(userGuess)) {

			//is guess correct
			if (isUserGuessCorrect(userGuess)) {
				
				//repace under score 
				replaceUnderscore(userGuess);
				updateBrowserWindow();
			} else { //user guess was wrong
				
				//add letter to array
				addToLettersGuessed(userGuess);
				decrememntGuessesRemaining();
				updateBrowserWindow();
			}	
		}
	} 
	//test if user won
	if (didUserWin()) {
		incrementWinCount();
		console.log("You won this round! Try again!");
		newRound();
	}
	//test if user lost
	if (didUserLose()) {
		incrementLossCount();
		console.log("You lost! Try again!");
		newRound();
	}
}	

newRound();
//document.addEventListener

document.addEventListener('keyup', function(event) {
	var userGuess = event.key;

	gamePlayEngine(userGuess);
});