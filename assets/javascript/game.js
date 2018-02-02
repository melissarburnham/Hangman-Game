//Create an array of words

var wordBank = ["South Carolina", "North Carolina", "Georgia","Virginia", "New Jersey", "Connecticut", "Massachusetts", "Rhode Island", "Maryland", "Delaware", "New Hampshire", "New York", "Pennsylvania"];

var randomWord = Math.floor(Math.random() * wordBank.length);
var rightLetter = [];
var wrongLetter = [];
var underScore = [];
var chosenWord = wordBank[randomWord];
var lettersInChosenWord = [];
var winTracker = 0;
var lossTracker = 0;
var guessesRemain = 13;
var lettersguessed = [];
var guess = [];
var letters = chosenWord.split("");
var blanksAndSuccesses = [];



//picks word randomly from bank
function wordChoice() {

	var chosenWord = wordBank[randomWord];
	console.log(chosenWord);
}

//splits word and assigns underscore
function assignUnderscore(guess) {

	var letters = chosenWord.split("");
	var underScore = letters.length;
	
	for (i = 0; i < chosenWord.length; i++){
		guess.push('_');
	}

	document.getElementById("word").innerHTML = guess.join(" ");
	document.getElementById("guessesRemain").innerHTML = guessesRemain

}

function checkLetter (){
	var letterCheck = true;
	// If the letter exists somewhere in the word, then figure out exactly where (which indices).
	if (letterCheck) {
		// Loop through the word.
		for (var j = 0; j < chosenWord.length; j++) {
		// Populate the underScores with every instance of the letter.
		if (chosenWord[j] === letters) {
		// Here we set the specific space in blanks and letter equal to the letter when there is a match.
			guess[j].push(letters);
				}
			else {
				wrongLetter.push(letters);
				guessesRemain--;		
			}	
		}
	}
	console.log(guess);
};





document.addEventListener('keypress', (event) => {
	var keyCode = event.keyCode;
	var keyLetter = String.fromCharCode(keyCode);
	console.log(keyLetter);
	console.log(underScore);
});
wordChoice ();
assignUnderscore (guess);
checkLetter(blanksAndSuccesses);


// function startGame (){

// 	//pick random word...
	
// 	var chosenWord = wordChoices[randomWord];

// 	//splits letters in string... 
// 	lettersInChosenWord = chosenWord.split("");
// 	underScore = lettersInChosenWord.length;
// 	console.log (chosenWord);
// 	console.log (underScore);


// 	//...and assigns underScore to length of word
// 	for (i = 0; i < underScore; i++){
// 		userGuesses.push('_');
// 	}

// 	document.getElementById("word").innerHTML = userGuesses.join("");
// 	document.getElementById("guessesRemain").innerHTML = guessesRemain

// }


// function checkLetter(userGuess){




// startGame ();

// document.addEventListener('keypress', (event) => {
// 	var letter = event.userGuess;
// }

// checkLetter(userGuess);
	









// 	//User presses key to guess
// 	document.addEventListener('keypress', (event) => {
// 		var keyCode = event.keyCode;
// 		var keyLetter = String.fromCharCode(keyCode);
// 		console.log(keyLetter);
// 		console.log(underScore);
// 		//if users guess is right
// 	    if(chosenWord.indexOf(keyLetter) > -1) {

// 	    	//add for loop//
// 		}










// 	//Create underscore based on word
// 	var generateUnderscore = () => {
// 		for (var i = 0; i < chosenWord.length; i++) {
// 			underScore.push('_'); 
// 		}
// 		 generateUnderscore();
// 		 console.log(underScore);
// }

// 	//Number of Guesses left to start at 13

// }


 // If the letter exists somewhere in the word, then figure out exactly where (which indices).
//   if (letterInWord) {

//     // Loop through the word.
//     for (var j = 0; j < underScore; j++) {

//       // Populate the blanksAndSuccesses with every instance of the letter.
//       if (chosenWord[j] === letter) {
//         // Here we set the specific space in blanks and letter equal to the letter when there is a match.
//         blanksAndSuccesses[j] = letter;
//         // blanksAndSuccesses = ['_','a','_','a']
//       }
//     }
//     // Logging for testing.
//     console.log(blanksAndSuccesses);
//   }
//   // If the letter doesn't exist at all...
//   else {
//     // ..then we add the letter to the list of wrong letters, and we subtract one of the guesses.
//     wrongGuesses.push(letter);
//     numGuesses--;
//   }

	// for (i = 0; i < underScore; i++){
// 		if (chosenWord[i] === lettersInChosenWord){
// 			lettersInChosenWord = true;
// 		}
	

// 	else {
// 		guessesRemain--;
// 		wrongLetter.push(lettersInChosenWord);
// 	}
// }










// // Check if a letter exists inside the array at all.
//   for (var i = 0; i < underScore; i++) {
//     if (chosenWord[i] === letter) {
//       lettersInChosenWord = true;
//     }
//   }

//   // If the letter exists somewhere in the word, then figure out exactly where (which indices).
//   if (lettersInChosenWord) {

//     // Loop through the word.
//     for (var j = 0; j < underScore; j++) {

//       // Populate the underScore with every instance of the letter.
//       if (chosenWord[j] === letter) {
//         underScore[j] = letter;
//       }
//     }
//     console.log(underScore);
//   }
//   // If the letter doesn't exist at all...
//   else {
//     wrongGuesses.push(letter);
//     numGuesses--;
//   }

// }











//     //check to see if word matches guesses
// 		if(underScore.join('') == chosenWord) {
//     			alert("You Win!");
//     			console.log(underScore); 
//     		}		
    		
    	
//     	//push wrong guesses to wrong letter array
//     	else{
//     		wrongLetter.push(keyLetter);
//     		console.log(wrongLetter);
//     		//decrease number of Guesses by 1
//     	}

// };


// function endRound (){



// }

// startGame();

// checkLetter(keyLetter)

// endRound();

















//     //push to right letter array
// 		rightLetter.push(keyLetter);
//     //replace underscore with right letter
//     	var letterPosition = chosenWord.indexOf(keyLetter);

//     	
// 	});

    		// replace underscore with right letter
    		// underScore[chosenWord.indexOf(keyLetter)] = keyLetter

    		// if(underScore.join('') " " (chosenWord){
    		// 	//play a song and post a picture
    		// }
    	

    	// else (wrongLetter.push(keyLetter))
    	// 		console.log(keyLetter);
    	
  

    //   // Determines which key was pressed.
    //   var userGuess = event.key;

	//if correct, display letter in place of correct dash
	//if wrong, number of guesses decreases by 1
//If user presses same key twice, nothing happens
//When user gets word correct, new message, picture, and song
//New round resets with new word while previous song plays	
	


 

