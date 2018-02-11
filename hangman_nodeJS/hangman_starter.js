const readlineSync = require('readline-sync');

/*** this array holds all the possible words that can be the answer ***/

let words = [
	'hey',
	'person',
	'you',
	'think',
	'youre',
	'better',
	'than',
	'me'
];

let answer; 
let nWrong; 
let pastGuesses = [];
let pastGames = [];
let cont = true;

function startGame() {
	setUpGame();
	while (!checkGameOver()) {
		printGameState();
		const guess = readlineSync.question("please enter a guess: ");
		console.log('guess is', guess);
		
/*** past guesses start ***/

		for(i=0; i<=pastGuesses.length; i++) {
			if (i===pastGuesses.length) {
				pastGuesses.push(guess);
				console.log(pastGuesses)
				pastguessMatch = false;
			  	break;
			} else if (guess===pastGuesses[i]){
				console.log("you've already guessed " + "'" + guess + "'"),
				console.log(pastGuesses)
				pastguessMatch = true;
				break;
			}
		}
/*** past guesses finish ***/

	let found = false;
		if(!pastguessMatch) {
			for (let i=0; i<answer.length; i++) {
				if (guess==answer[i]) {
					found=true;
					break;
					}
			}				
			if(!found) {
				nWrong += 1;
				console.log(nWrong);
			}	
		}
	}
	printGameState();
}

/*** Log whether or not the game was won or lost ***/

function checkGameOver(){
	
	// nWrong check
	//win Check
	var n=0;
	var winCheck=false;


	for(i=0; i<answer.length; i++) {
		for(j=0; j<pastGuesses.length; j++){
			if (answer[i] === pastGuesses[j]){
				n+=1;
			}
		}
	}
	if(n===answer.length){
			winCheck = true;	
		}
	
	
	if ((nWrong < 6)&&(winCheck===false)) {
		return false;
	}
	
	else if (nWrong==6) { 
		console.log("you looser game over!");
		return true; }

	else if (winCheck)	{
		console.log("you win..!")
		return true;
		}
	}


	
	


function printGameState(){
	console.log('\n');
	let str = "";
	for(let i = 0; i < answer.length; i++){
		let found = false;
		for(let j = 0; j < pastGuesses.length; j++){
			if(answer[i] === pastGuesses[j]){
				found = true;
			}
		}
		if(found){
			str += answer[i];
			str += "\t";
		}else{
			str += "_\t";
		}
	}
	console.log(str);
		
	console.log('\n');
	printHangMan(nWrong);	
	console.log('\n\n');
}


function getRandomWord(){
	const index = Math.floor(Math.random()*words.length);
	return words[index];
}

function printHangMan(nWrong){
	const headSpot = (nWrong > 0) ? "O" : " ";
	const bodySpot = (nWrong > 1) ? "|" : " ";
	const leftArm = (nWrong > 2) ? "/": " ";
	const rightArm = (nWrong > 3) ? "\\" : " ";
	const leftLeg = (nWrong > 4) ? "/" : " ";
	const rightLeg = (nWrong > 5) ? "\\" : " ";
	let str = "";
	console.log(" ___ ");
	console.log(" |  | ");
	console.log(" |  " +  headSpot + " ");
	console.log(" | " + leftArm + bodySpot + rightArm);
	console.log(" | " + leftLeg + " " + rightLeg);

	return;
}

function setUpGame(){
	// choose a new word
	answer = getRandomWord().split('');
	// reset the total of wrong guesses
	nWrong = 0;
	// empty our array of previously guessed letters
	pastGuesses = []; 
}

//logging past games

gameHistory = [];

 function GameLog(answer, guesses, result){
	   	this.answer = answer;
		this.guesses = guesses;
		this.result = result
	}

function history(){
 if (nWrong!==6){
		   result = "win";
		 } else {result = "loose";}
 var game = new GameLog(answer, pastGuesses, result);
 gameHistory.push(game);
 console.log(gameHistory); // can be run to see logs
 }

startGame()

while(cont){
	history();
	let answer = readlineSync.question('Would you like to play again? y/n')
	if(answer.toLowerCase() === 'y'){
		startGame();
	}
	else if(answer.toLowerCase() === 'n'){
		cont = false;
		console.log('Good game!')
		
	}
	else {
		console.log('Please enter either y (yes) or n (no).')

	}
}

