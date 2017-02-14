var names = {
		  	name1 : ["m","i","k","e"],
		  	name2 : ["n","a","n","c","y"],
		  	name3 : ["e","l","e","v","e","n"]
		  }; 


var alreadyTyped = [];
var maxNumberOfGuesses = 12;
var wins = 0;
var goodLetters =[];
var wrongLetters = [];

// Chose random world within the names
var index = Math.floor((Math.random() * 3) + 1);
var randomWord = names["name"+index];
//displayName();

//if number of guesses>0 or the word is not complete 

    //Sow the number of letters of that world in HTML
  		//listen to user imput 
  		document.onkeyup = function(event){
			var userGuess = event.key; 

  		// IF user imput is already typed
  		if (alreadyTyped.includes(event.key)) {
  			//nothing happens
  		}else{
  			//if number of guesses>0 or the word is not complete (meaning if at least one letter from GoodLetters is not in the array RandomWord)
  			if (maxNumberOfGuesses > 0 || arrayContainsAnotherArray(goodLetters,randomWord)=== false)
  				{
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
	  				// show in HTML in good position -- 

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
  		}else if (maxNumberOfGuesses > 0 && arrayContainsAnotherArray(goodLetters,randomWord)=== true){
  			wins++;
  			document.getElementById("wins").innerHTML = wins;
  		}


  	}
  	};

//What do i miss : 
// - determining when a world is complete and adding a win
// - creating a loop to change world when complete and 
//replay game with another world chosen randomly 


//////////////////////////////////////////////////////

word = "cat";

guessed = ["c"];

var displayString = ""

for (var i = name.length - 1; i >= 0; i--) {
	if (goodLetters.includes(event.key)){
		document.getElementById("").innerHTML = event.key;
	}else()
		document.getElementById("").innerHTML = "_";
	// else show an "_"
}

//////////////////////////////////////////////////////

function arrayContainsAnotherArray(a, b){
  for(var i = 0; i < a.length; i++){
    if(b.indexOf(a[i]) === -1){
       return false;
    }else{
  	return true;
  }
  }
 };

//////////////////////////////////////////////////////
