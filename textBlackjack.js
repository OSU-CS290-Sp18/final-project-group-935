//This program is a text version of blackjack
//I will clearly mark the output variables so they can be changed later to display the cards and such

//Math.floor((Math.random() * 13) + 1); = return a random number between 1-13

//button variables
var newGame = document.getElementById('newGame');
var dealCards = document.getElementById('hit');
var standCards = document.getElementById('stand');
var doubleDownCards = document.getElementById('doubleDown');
var splitCards = document.getElementById('split');
var imperialCredit = document.getElementById('imperialCredit');
var imperialCreditVal = imperialCredit.value;

//normal variables
var dealerCard1;
var dealerCard2;
var playerCard1;
var playerCard2;
var dealerTotal;
var playerTotal;
var newCardNum;
var switchingVar;

imperialCreditVal = 1000;			//NOT WORKING, WHERE I LEFT OFF

newGame.style.display = "block";
dealCards.style.display = "none";			//This block of code appears often
standCards.style.display = "none";			//It is just blocking all buttons except newGame when not in a game
doubleDownCards.style.display = "none";		//Or it showing all the buttons except newGame when in game
splitCards.style.display = "none";

newGame.onclick = function() {					//when newGame button is pressed

	newGame.style.display = "none";
	dealCards.style.display = "block";
	standCards.style.display = "block";
	doubleDownCards.style.display = "block";
	splitCards.style.display = "block";

	dealerTotal = 0;
	playerTotal = 0;

	//dealer gets 2 cards, player gets 2 cards
	//if the card is equal to 11, 12, or 13, the value is replaced with 10
	dealerCard1 = Math.floor((Math.random() * 13) + 1);
	if (dealerCard1 > 10) {
		dealerCard1 = 10;
	}

	dealerCard2 = Math.floor((Math.random() * 13) + 1);
	if (dealerCard2 > 10) {
		dealerCard2 = 10;
	}

	if ( (dealerCard1 == 1) || (dealerCard2 == 1) ) {		//if dealer gets an ace, dealerTotal+10
		dealerTotal = 10;
	}

	playerCard1 = Math.floor((Math.random() * 13) + 1);
	if (playerCard1 > 10) {
		playerCard1 = 10;
	}
	console.log("playerCard1 = " + playerCard1);

	playerCard2 = Math.floor((Math.random() * 13) + 1);
	if (playerCard2 > 10) {
		playerCard2 = 10;
	}

	console.log("playerCard2 = " + playerCard2);
	console.log("");


	alert("dealer's first card is: " + dealerCard1);			//showing the player the dealer's first card

	dealerTotal = dealerTotal + dealerCard1 + dealerCard2;		//calculating totals for player and dealer after first two cards are drawn
	playerTotal = playerCard1 + playerCard2;
	console.log("dealer total = " + dealerTotal);
	console.log("playerTotal = " + playerTotal);
	console.log("");

	if ((playerCard1 + playerCard2) == 21) {		//if player gets blackjack, automatic win
		console.log("player wins.");
		alert("player wins.");

		newGame.style.display = "block";
		dealCards.style.display = "none";
		standCards.style.display = "none";
		doubleDownCards.style.display = "none";
		splitCards.style.display = "none";
	}

}

function ifBust(number) {			//returns true if player/dealer is bust, returns false if player/dealer isn't

	if (number > 21){
		return true;
	}
	else {
		return false;
	}
}

dealCards.onclick = function() {							//when hit button is pressed
    newCardNum = Math.floor((Math.random() * 13) + 1);
    if (newCardNum > 10) {
		newCardNum = 10;
	}

	console.log("newCardNum = " + newCardNum);
	playerTotal = playerTotal + newCardNum;
	console.log("");
	console.log("player total = " + playerTotal);
	console.log("");

	if (newCardNum == 1) {						//if new card number is an ace, switch it with playerCard1 so that the next if statement will work
		switchingVar = newCardNum;				//works regardless if player previously had an ace
		newCardNum = playerCard1;
		playerCard1 = switchingVar;
	}

	if ( ( (playerCard1 == 1) || (playerCard2 == 1) ) && (playerTotal + 10 == 21) ) {			//if player has an ace, and playerTotal + 10 would equal 21, player wins
		console.log("player wins.");
		alert("player wins.");

		newGame.style.display = "block";
		dealCards.style.display = "none";
		standCards.style.display = "none";
		doubleDownCards.style.display = "none";
		splitCards.style.display = "none";
	}

	if (ifBust(playerTotal) == true) {				//checking if new card made player go bust
		console.log("player bust.");
		alert("player bust.");

		newGame.style.display = "block";
		dealCards.style.display = "none";
		standCards.style.display = "none";
		doubleDownCards.style.display = "none";
		splitCards.style.display = "none";
	}
	else if (playerTotal == 21) {
		console.log("player wins.");
		alert("player wins.");

		newGame.style.display = "block";
		dealCards.style.display = "none";
		standCards.style.display = "none";
		doubleDownCards.style.display = "none";
		splitCards.style.display = "none";
	}
}

standCards.onclick = function() {			//when stand button is pressed
    newCardNum = Math.floor((Math.random() * 13) + 1);

	if (playerTotal > dealerTotal) {					//if player has a higher score, player wins
		console.log("player wins.");
		alert("player wins.");

		newGame.style.display = "block";
		dealCards.style.display = "none";
		standCards.style.display = "none";
		doubleDownCards.style.display = "none";
		splitCards.style.display = "none";
	}
	else if (playerTotal == dealerTotal) {				//if player and dealer have same score, its a tie
		console.log("draw.");
		alert("draw.");

		newGame.style.display = "block";
		dealCards.style.display = "none";
		standCards.style.display = "none";
		doubleDownCards.style.display = "none";
		splitCards.style.display = "none";
	}
	else {												//if dealer has a higher score than player, dealer wins
		console.log("dealer wins.");
		alert("dealer wins.");

		newGame.style.display = "block";
		dealCards.style.display = "none";
		standCards.style.display = "none";
		doubleDownCards.style.display = "none";
		splitCards.style.display = "none";
	}
}
