//Create an array of words

var wordChoices = ["South Carolina", "North Carolina", "Georgia","Virginia", "New Jersey", "Connecticut", "Massachusetts", "Rhode Island", "Maryland", "Delaware", "New Hampshire", "New York", "Pennsylvania"];

// var userWins = 0;


// Randomly chooses a choice from the options array.
var randomWord = Math.floor(Math.random() * wordChoices.length);
var rightLetter = [];
var wrongLetter = [];
var underScore = [];
var chosenWord = wordChoices[randomWord];

//testing
console.log(chosenWord);


//Create underscore based on word
var generateUnderscore = () => {
	for (var i = 0; i < chosenWord.length; i++) {
		underScore.push('_'); 
		docUnderscore[0].innerHTML = underScore.join('');
	}
	return underScore;
}

//User presses key to guess
	document.addEventListener('keypress', (event) => {
		var keyCode = event.keyCode;
		var keyLetter = String.fromCharCode(keyCode);
		console.log(keyLetter);
	//if users guess is right
    	if(chosenWord.indexOf(keyLetter) > -1) {
    //push to right letter array
    		rightLetter.push(keyLetter);
    //replace underscore with right letter
    		underScore[chosenWord.indexOf(keyLetter)] = keyLetter;
    //check to see if word matches guesses
    		if(underScore.join('') == chosenWord) {
    			alert("You Win!");
    			console.log(underScore); 
    		}		
    	
    //push wrong guesses to wrong letter array		
    	}

    	else{
    		wrongLetter.push(keyLetter);
    		console.log(wrongLetter);
    	}

	});

    

    		

   

    		//replace underscore with right letter
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
	


 

