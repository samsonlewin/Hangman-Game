
// variables
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


document.getElementById("surprise").style.display = 'none';
document.getElementById("surprise").muted = true;

// Chose random world within the names
var index = Math.floor((Math.random() * 3) + 1);
var randomWord = names["name"+index];


// display dashes to begin
var dash = document.getElementById("name");
for (var i=0;i<randomWord.length;i++){
	var newDash = document.createElement("div");
	newDash.innerHTML = "_";
	dash.appendChild(newDash);
	dash.style.display="inline";
	newDash.style.display="inline";
}


//listen to user imput 
document.onkeyup = function(event){
	var userGuess = event.key; 


/////////////////////////////////////////////

var displayString = "";
for (var i=0; i<randomWord.length; i++){
    if(goodLetters.indexOf(randomWord[i]) === -1){
        displayString = displayString + "_";            
        }else{
        displayString = displayString + randomWord[i];
        
        }
}

document.getElementById("name").innerHTML = displayString;

/////////////////////////////////////////////



  		// IF user imput is already typed
  		if (alreadyTyped.includes(event.key)) {
  			//nothing happens
  		}else{
  			//if number of guesses>0 or the word is not complete (meaning if at least one letter from GoodLetters is not in the array RandomWord)
  			if (maxNumberOfGuesses > 0){
	  			// if user imput is inside random word
	  			if(randomWord.indexOf(event.key) > -1){
	  				// decrement user guesses
	  				maxNumberOfGuesses = maxNumberOfGuesses-1;
	  				document.getElementById("guesses").innerHTML = maxNumberOfGuesses;
	  				// store letter in already typed array
	  				alreadyTyped.push(event.key);
	  				// store letter in good letters
	  				goodLetters.push(event.key);
	  
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
  		}


  	}

  	// check to see if the game has been won or lost yet

		if (containsAll(randomWord, goodLetters)){

			console.log("The game has been won");
			wins++;
			document.getElementById("wins").innerHTML = wins;


			// add code here to signify to user that they've won
		} else if (maxNumberOfGuesses === 0) {
			console.log("The game has been lost");
			document.getElementById("surprise").style.display = 'inline';
			document.getElementById("surprise").muted = false;

			// add code here to signify to user that they've los
		}
  	};

/////////////////////////////////////////////

function containsAll(needles, haystack){ 
  for(var i = 0 , len = needles.length; i < len; i++){
     if($.inArray(needles[i], haystack) == -1) return false;
  }
  return true;
}





