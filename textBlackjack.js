//This program is a text version of blackjack
//I will clearly mark the output variables so they can be changed later to display the cards and such

//Math.floor((Math.random() * 13) + 1); = return a random number between 1-13

var dealCards = document.getElementById('hit');
var stayCards = document.getElementById('stay');

var dealerCard1;
var dealerCard2;
var playerCard1;
var playerCard2;
var dealerTotal;
var playerTotal;
var newCardNum;


dealerCard1 = Math.floor((Math.random() * 13) + 1);
dealerCard2 = Math.floor((Math.random() * 13) + 1);

playerCard1 = Math.floor((Math.random() * 13) + 1);
console.log("playerCard1 = " + playerCard1);

playerCard2 = Math.floor((Math.random() * 13) + 1);
console.log("playerCard2 = " + playerCard2);

alert("dealer's first card is: " + dealerCard1);

dealerTotal = dealerCard1 + dealerCard2;
playerTotal = playerCard1 + playerCard2;
console.log("dealer total = " + dealerTotal);
console.log("");
console.log("playerTotal = " + playerTotal);

if (ifBust(dealerTotal) == true) {
	console.log("dealer bust.");
	alert("dealer bust.");
}
else if (ifBust(playerTotal) == true) {
	console.log("player bust.");
	alert("player bust.");
}
else {}



function ifBust(number) {

	if (number > 21){
		return true;
	}
	else {
		return false;
	}
}


dealCards.onclick = function() {
    newCardNum = Math.floor((Math.random() * 13) + 1);
	console.log("newCardNum = " + newCardNum);
	playerTotal = playerTotal + newCardNum;
	console.log("");
	console.log("player total = " + playerTotal);
	console.log("");

	if (ifBust(playerTotal) == true) {
	console.log("player bust.");
	alert("player bust.");
	}
	else {}
}

stayCards.onclick = function() {
    newCardNum = Math.floor((Math.random() * 13) + 1);

	if (playerTotal > dealerTotal) {
	console.log("player wins.");
	alert("player wins.");
	}
	else if (playerTotal == dealerTotal) {
		console.log("draw.");
		alert("draw.");
	}
	else {
		console.log("dealer wins.");
		alert("dealer wins.");
	}
}