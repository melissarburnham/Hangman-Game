//Create an array of words
var wordBank = 
["South Carolina", 
"North Carolina", 
"Georgia",
"Virginia",
 "New Jersey", 
"Connecticut",
 "Massachusetts", 
 "Rhode Island", 
 "Maryland", 
"Delaware", 
"New Hampshire",
 "New York", 
 "Pennsylvania"];

var guessesRemaining = 13;
var hangmanWord = "";
var underScore = [];
var winCount = 0;
var lossCount = 0;
var lettersGuessed = [];
var images =[ "<img src='assets/images/connecticut.jpg'>",
  "<img src='assets/images/delaware.jpg'>",
  "<img src='assets/images/georgia.jpeg'>",
  "<img src='assets/images/maryland.jpg'>",
  "<img src='assets/images/Massachusetts.jpg'>",
  "<img src='assets/images/Newhampshire.jpg'>",
  "<img src='assets/images/newjersey.jpg'>",
  "<img src='assets/images/newyork.jpg'>",
  "<img src='assets/images/northcarolina.jpeg'>",
  "<img src='assets/images/pennsylvania.jpg'>",
  "<img src='assets/images/rhodeisland.jpg'>",
  "<img src='assets/images/southcarolina.jpg'>",
  "<img src='assets/images/virginia.jpg'>"] 

//choose hangman word from wordbank
function chooseHangmanWord () {
	var index = Math.floor(Math.random() * wordBank.length);
	hangmanWord = wordBank[index];
}

//create underscore word (after wordbank word chosen)
function createUnderscore (){
	var underScoreArray = [];
	for (var i = 0; i < hangmanWord.length; i++) {
		underScoreArray.push("_");
	}

	underScore = underScoreArray;
}

//test if guess was a match
function isUserGuessCorrect(userGuess) {
	if ( hangmanWord.indexOf(userGuess) !== -1 ) {
		return true;
	} else {
		return false;
	}
}

//test if key is a letter
function letterTest(userGuess){
	var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";

	if ( alphabet.indexOf(userGuess) !== -1) {
		return true;
	} else {
		return false;
	}
}

//replace underscore with letter 
function replaceUnderscore(userGuess) {
for (var i = 0; i < hangmanWord.length; i++) {	
		if (userGuess === hangmanWord[i]) {
			underScore[i] = userGuess;
		}
	}
}

//subtract from guesses remaining
function subtractGuessesRemaining (){
	guessesRemaining--;
}

//add letters to Letters Guessed array
function addToLettersGuessed (userGuess) {
	lettersGuessed.push(userGuess);
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

//add to user win counter
function addWins () {
	winCount++;
}

//add to user loss tracker
function addLoss () {
	lossCount++;
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

//alerts win
function alertWin (){
	alert("You won this round! Can you get all 13 colonies?");
}

//alerts loss
function alertLoss (){
	alert("You lost this round! Try again!");
}

function addPicture(){
	if(didUserWin() && hangmanWord==="Connecticut"){
		 document.getElementById("getStarted").innerHTML = images[0];
	}

	if(didUserWin() && hangmanWord==="Delaware"){
		document.getElementById("getStarted").innerHTML = images[1];
	}	
	
	if(didUserWin() && hangmanWord==="Georgia"){
		document.getElementById("getStarted").innerHTML = images[2];   
	};
	
	if(didUserWin() && hangmanWord==="Maryland"){
		document.getElementById("getStarted").innerHTML = images[3]; 
   };

	if(didUserWin() && hangmanWord==="Massachusetts"){
	document.getElementById("getStarted").innerHTML = images[4];
	}; 

	if(didUserWin() && hangmanWord==="New Hampshire"){
	document.getElementById("getStarted").innerHTML = images[5];
	};    

	if(didUserWin() && hangmanWord==="New Jersey"){
		document.getElementById("getStarted").innerHTML = images[6];
		};  

	if(didUserWin() && hangmanWord==="New York"){
	document.getElementById("getStarted").innerHTML = images[7];
	};    

	if(didUserWin() && hangmanWord==="North Carolina"){
	document.getElementById("getStarted").innerHTML = images[8];
	};   

	if(didUserWin() && hangmanWord==="Pennsylvania"){
	document.getElementById("getStarted").innerHTML = images[9];
	};

	if(didUserWin() && hangmanWord==="Rhode Island"){
	document.getElementById("getStarted").innerHTML = images[10];
	};
	
	if(didUserWin() && hangmanWord==="South Carolina"){
	document.getElementById("getStarted").innerHTML = images[11];
	};
	
	if(didUserWin() && hangmanWord==="Virginia"){
	document.getElementById("getStarted").innerHTML = images[12];
	};
}

function newRound() {
	guessesRemaining = 13;
	lettersGuessed = [];
	chooseHangmanWord();
	createUnderscore();
	updateBrowserWindow();
}

function updateBrowserWindow() {
	document.getElementById("wins").innerHTML = winCount;
	document.getElementById("losses").innerHTML = lossCount;
	document.getElementById("guessesRemain").innerHTML = guessesRemaining;
	document.getElementById("currentWord").innerHTML = underScore.join(" ");
	document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
}

//manage game play logic
function startGame(userGuess) {

	//is user guess a letter
	if (letterTest(userGuess))  {

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
				subtractGuessesRemaining();
				updateBrowserWindow();
			}	
		}
	} 

	//test if user won
	if (didUserWin()) {
		addWins();
		addPicture();
		alertWin();
		newRound();
	}

	//test if user lost
	if (didUserLose()) {
		addLoss();
		alertLoss();
		newRound();
	}
}	

newRound();
//document.addEventListener

document.addEventListener('keyup', function(event) {
	var userGuess = event.key;

	startGame(userGuess);
});


