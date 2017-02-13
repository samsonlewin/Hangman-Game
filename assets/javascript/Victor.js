var Eleven = "eleven";
var Mike = "mike";
var Nancy = "nancy";
var Peter = "peter";

var names = [Eleven, Mike, Nancy, Peter];
var wrongLetters = [];
var goodLetters = [];

var win = 0;
var guess = 12;
var currentName = "";
var currentNameNumber = 0;
giveNextName();

document.onkeyup = function(event){
	var userGuess = event.key;

	var indexList = isLetterInName(userGuess, currentName) //gives an array of the position of the letter in the name

	///////////////////////

		guess = guess-1;


if (indexList.length === 0) {
	wrongLetters.push(userGuess);
	document.getElementById("wrongLetters").innerHTML = "Les mauvaises lettres sont : "+wrongLetters.join();
} else {
	goodLetters.push(userGuess);
	document.getElementById("goodLetters").innerHTML = "Les bonnes lettres sont : "+goodLetters.join();

}

}



//FUNCTIONS
function isLetterInName(letter, name) {
	var indexList = [];
	for (var i =0; i< name.length; i++){
		if(name[i]===letter){
			indexList.push(i);
		}
	}
	return indexList;
}

function giveNextName() {
	currentName = names[currentNameNumber];
	currentNameNumber+=1;

	if (currentNameNumber >= names.length) {
		currentNameNumber = 0
	}
}
