var names = {
		  	name1 : ["m","i","k","e"],
		  	name2 : ["n","a","n","c","y"],
		  	name3 : ["e","l","e","v","e","n"]
		  }; 


var alreadyTyped = [];
var maxNumberOfGuesses = 12;
var goodLetters =[];
var wrongLetters = [];

	// document.getElementById("surprise").style.display = block;

// Chose random world within the names
var index = Math.floor((Math.random() * 3) + 1);
var randomWord = names["name"+index];

//if number of guesses>0 or the word is not complete 

    //Sow the number of letters of that world in HTML
  		//listen to user imput 
  		document.onkeyup = function(event){
			var userGuess = event.key; 

  		// IF user imput is already typed
  		if (alreadyTyped.includes(event.key)) {
  			//nothing happens
  		}else{
  			//if number of guesses>0 or the word is not complete
  			if (maxNumberOfGuesses > 0) {
	  			// if user imput is inside random word
	  			if(randomWord.indexOf(event.key) > -1){
	  				// decrement user guesses
	  				maxNumberOfGuesses = maxNumberOfGuesses-1;
	  				document.getElementById("guesses").innerHTML = maxNumberOfGuesses;
	  				// store letter in already typed array
	  				alreadyTyped.push(event.key);
	  				// store letter in good letters
	  				goodLetters.push(event.key);
	  				document.getElementById("").innerHTML = goodLetters;
	  				// show in HTML in good position

	  			}else{
	  				// decrement user guesses
	  				maxNumberOfGuesses = maxNumberOfGuesses-1;
	  				document.getElementById("guesses").innerHTML = maxNumberOfGuesses;
	  				// store letter in already typed array
	  				alreadyTyped.push(event.key);
	  				// store letter in wrong letters
	  				wrongLetters.push(event.key);
	  				// add in HTML on list of wrong letters guessed
	  				document.getElementById("letters").innerHTML = wrongLetters;
	  			}
  		}else{

  		}
  	}
  	}
//What do i miss : 
// - determining when a world is complete and adding a win
// - creating a loop to change world when complete and 
//replay game with another world chosen randomly 


// FUNCTIONS 
