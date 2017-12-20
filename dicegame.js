"use strict"

function startGame(){

	let userInput = prompt("Roll Four Dice (1)");

	switch(userInput) {
		case "1":
			rollFourDice();
			break;
		default:
			console.log("roll again!");
			startGame();
			break;
	}
}

function rollFourDice(playerOne, playerTwo) {
	var max = 4;
	var min = 1;
	var playerArray = [playerOne, playerTwo];
    var fourDiceValue = Math.round(Math.random()*(max-min)+min);
    console.log(fourDiceValue);

    if (rollFourDice === 1) {
    	alert("Player Two Gets 5 Points");
    	playerArray[1].score += 5;
    	return playerArray;
    }
    else if (rollFourDice === 2) {
    	alert("Player One Gets 5 Points");
    	playerArray[0].score += 5;
    	return playerArray; 
    	 
    }
    else if (rollFourDice === 3) {
    	alert("Roll Six Dice");
    	rollSixDice(playerArray[0], playerArray[1]);
    }
    else if (rollFourDice === 4) {
    	alert("Roll Again");
    	rollFourDice(playerArray[0], playerArray[1]); 
    }

function rollSixDice(playerOne, playerTwo) {
	var max = 6;
	var min = 1;
	var playerArray = [playerOne, playerTwo];
	var sixDiceValue = Math.round(Math.random()*(max-min)+min);
	console.log(sixDiceValue);

	if (rollSixDice === 2) {
		alert("Both Players Get Two Points");
		playerArray[0].score += 2;
		playerArray[1].score += 2;
	}
	else if (rollSixDice === 3) {
		alert("Roll Four Dice");
		rollFourDice(playerArray[0], playerArray[1]);
	}
	else if (rollSixDice === 6) {
		alert("Roll Eight Dice");
		rollEightDice(playerArray[0], playerArray[1]);
	}
	else{
			alert("Roll Again");
			rollSixDice(playerArray[0], playerArray[1]);
	}

	}

function rollEightDice(playerOne, playerTwo) {
	var max = 8;
	var min = 1;
	var playerArray = [playerOne, playerTwo];
	var eightDiceValue = Math.round(Math.random()*(max-min)+min);
	console.log(eightDiceValue);

	if (rollEightDice % 2 === 0) {
		alert("You Suck, Roll Again");
		rollEightDice(playerArray[0], playerArray[1]);
	}
	else {
		alert("Roll Ten Dice");
		rollTenDice(playerArray[0], playerArray[1]);
	}
	
	}
function rollTenDice(playerOne, playerTwo) {
	var max = 10;
	var min = 1;
	var playerArray = [playerOne, playerTwo];
	var tenDiceValue = Math.round(Math.random()*(max-min)+min);
	console.log(tenDiceValue);
	//needs to be in same scope as the twenty die
}
function rollTwentyDice(playerOne, playerTwo) {
	var max = 20;
	var min = 1; 
	var playerArray = [playerOne, playerTwo];
	var twentyDiceValue = Math.round(Math.random()*(max-min)+min);
	console.log(twentyDiceValue);  
}
}
  
function runGame(){
	var playerArray = [
		var playerOne = {
			name: "Player One",
			score: 0,
			turnCounter: 0
		}
		var playerTwo = {
			name: "Player Two",
			score: 0,
			turnCounter: 0
		}
	];
	playerArray = rollFourDice(playerArray[0], playerArray[1]);



	startGame();

}

}



