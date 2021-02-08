console.log("Welcome to the slot machine!");

var balance = 100;
var machineBalance = 100;
var tries = 0;
var wins = 0;

console.log("Your initial balance is " + balance + ".");

//ENDING
function ending() {
  console.log("YOUR total balance: " + balance);
  console.log("Balance of the slot machine: " + machineBalance);
}

//NUMBER TO VALUE METHOD
function convert(result) {
//  console.log(result);
		switch (true) {
      case (result < 0.6):
			console.log(">> Tree");
      return 0;
		break;	
      case (0.6 <= result && result < 0.85):
			console.log(">> Bike");
      return 1;
		break;	
      case (0.85 <= result && result < 0.95):
			console.log(">> Car");
      return 2;
		break;
      case (result >= 0.95):
			console.log(">> Spaceship");
      return 3;
		break;
	}
}

//MULTIPLIER
var multiplier = [1, 5, 20, 250];

//WINNING LINES
var lines = ["Three trees! That means you won ", "Tricycle! Not bad, not bad at all. Take your reward of ", "Triplecar! This is quite rare, so your winnings are also above average: ",
"THREE SPACESHIPS?! Looks like you have been blessed with divine luck. Your reward is magnificent "];


//METHOD DOUBLE
function double(amount) {
	var coinThrow = Math.random();
	if (coinThrow < 0.5) {
		var doublewin = amount * 2;
		console.log("It's your lucky day! The amount was doubled!");
    wins++;
    balance += doublewin;
		console.log(doublewin + " was added to your balance.");
		machineBalance -= doublewin;
		ending();
	} else {
		console.log("Dang... your winnings disappeared just like that. Better luck next time.");
    ending();
	}
}


function roll(stake) {
	if (stake <= balance) {
    tries++;
    console.log("Your stake: " + stake);
    balance -= stake;
	machineBalance += stake;
	var first = convert(Math.random());
    var second = convert(Math.random());
    var third = convert(Math.random());
	if (first == second && second == third) {
		var winnings = stake * multiplier[first];
      	console.log(lines[first] + winnings + "!");
//		var yesno = prompt("Do you want to try to double your winnings? There's a 50% chance of success. (yes/no)"); 
//			if (yesno.toLowerCase === yes) {
      	var yesno = Math.random();
      if (yesno < 0.5) {
        console.log("The fate has decided that you will try to double your winnings.")
				double(winnings);
			} else {
        wins++;
				balance += winnings;
				console.log("All clear mate. " + winnings + " was added to your balance.");
				machineBalance -= winnings;
				ending();
			}	
		} else {
			console.log("Oopsie doopsie... No three matching images. You lost. Try again?");
      ending();
		}
	} else {
		console.log("Not enough balance to play. Select lower stake or add more money you poor piece of shiit.");
	}
}

//METHOD ADD BALANCE
function addMoney(cash) {
	balance += cash;
}


roll(10);
roll(10);
roll(10);
roll(10);
roll(10);
roll(10);
roll(10);
roll(10);
roll(10);
roll(10);

//STATISTICS
function stats() {
	console.log("");
	console.log("STATISTICS:");
	console.log("Number of tries: " + tries);
	console.log("Number of wins: " + wins);
  console.log("Winning percent: " + (wins/tries).toFixed(2) + "%");
  console.log("Average win amount: " + ((balance-100)/tries).toFixed(2));
}

stats();