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
var images =[ "<img src='assets/images/delaware.jpg'>",
  "<img src='assets/images/southcarolina.jpg'>",
  "<img src='assets/images/northcarolina.jpeg'>",
  "<img src='assets/images/newyork.jpg'>",
  "<img src='assets/images/rhodeisland.jpg'>"] 

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
	if(didUserWin() && chooseHangmanWord()==="Delaware"){
	 	document.write("<img src='assets/images/delaware.jpg'>");
	}
	document.getElementById("getStarted").innerHTML = images[0];
	

	if(didUserWin() && chooseHangmanWord()==="South Carolina"){
		document.write("<img src='assets/images/southcarolina.jpg'>");
	}	
		document.getElementById("getStarted").innerHTML = images[1];
	
	   

	// if(didUserWin() && chooseHangmanWord()==="North Carolina"){
	// 	document.write("<img src='assets/images/northcarolina.jpg'>");
	// 	document.getElementById("getStarted").innerHTML = ncImg;   
	// };
	

	// if(didUserWin() && chooseHangmanWord()==="Rhode Island"){
	// 	document.write("<img src='assets/images/rhodeisland.jpg'>");
	// 	document.getElementById("getStarted").innerHTML = riImg;
	//    }; 
	  

	// if(didUserWin() && chooseHangmanWord()==="New York"){
	// 	 document.write("<img src='assets/images/newyork.jpg'>");
	// 	 document.getElementById("getStarted").innerHTML = nyImg; 
	// };
	  
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


//need to do
	//when user wins
		//keep word up
		//add picture and song
			//keep song playing throughout next round	

	
// //adds picture with win
// function createPicture (src, width, height, alt){
// 	img.src = src;
// 	img.width = width;
// 	img.height = height;
// 	img.alt = alt;
// }

