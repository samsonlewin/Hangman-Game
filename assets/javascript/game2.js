var Eleven = ["e","l","e","v","e","n"];
var Mike = ["m","i","k","e"];
var Nancy = ["n","a","n","c","y"];


var names = [Eleven, Mike, Nancy]; 
var currentNameNumber = 0;
var currentName = "";

var win = 0;
var guesses = 12;

newName();

document.onkeyup = function(event){
	var userGuess = event.key;

// while Eleven[i]<= Eleven.lenght 

// if (//letter already typed) {

//}else{

	if (userGuess === Eleven[0] && userGuess === Eleven[2] && userGuess === Eleven[4]) {
		guesses-1;
		// store letter as already typed
		// register letter as good letter
		document.getElementsByClassName("Eleven[0]").innerHTML = Eleven[0];

	}else if(userGuess === Eleven[1]){
		guesses-1;
		// store letter as already typed
		// register letter as good letter
		document.getElementsByClassName("Eleven[1]").innerHTML = Eleven[1];
	}else if(userGuess === Eleven[3]){
		guesses-1;
		// store letter as already typed
		// register letter as good letter
		document.getElementsByClassName("Eleven[3]").innerHTML = Eleven[3];
	}else if(userGuess === Eleven[5]){
		guesses-1;
		// store letter as already typed
		// register letter as good letter
		document.getElementsByClassName("Eleven[5]").innerHTML = Eleven[5];
	}else{
		guesses-1;
		// store letter as already typed
		// letter registered as wrong
		// the letter is wrong and ads up to a list of wrong letters
		//document.getElementsByClassName("Eleven[5]").innerHTML = Eleven[5];
	}

//}else{
	//nothing happens - actions us refused
//}


// FUNCTIONS 
// Function that makes us switch to next name when the current one is finished
function newName() {
	currentName=names[currentNameNumber];
	currentNameNumber+1;
	if (currentNameNumber >= names.lenght){
		currentNameNumber=0;
	}
}

//

