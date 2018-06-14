//This program is a text version of blackjack
//I will clearly mark the output variables so they can be changed later to display the cards and such

//Math.floor((Math.random() * 13) + 1); = return a random number between 1-13

//button variables
var newGame = document.getElementById('newGame');
var dealCards = document.getElementById('hit');
var standCards = document.getElementById('stand');
var doubleDownCards = document.getElementById('doubleDown');
var bet = document.getElementById('bet');
if (bet){
	var bet_val = bet.value;
}
var imperialCredit = document.getElementById('imperialCredit');
if(imperialCredit){
	var imperialCreditVal = imperialCredit.textContent;
	imperialCreditVal = Number(imperialCreditVal);
}

//home page button variables
var game_button = document.getElementById('start');
var head_home_button = document.getElementById('headhome');
var head_game_button = document.getElementById('headstart');


//normal variables
var dealerCard1;
var dealerCard2;
var playerCard1;
var playerCard2;
var dealerTotal;
var playerTotal;
var newCardNum;
var switchingVar;

//imperialCreditVal = 1000;			//NOT WORKING, WHERE I LEFT OFF

if(newGame){
	newGame.style.display = "block";
}
if(dealCards){
	dealCards.style.display = "none";			//This block of code appears often
}
if(standCards){
	standCards.style.display = "none";			//It is just blocking all buttons except newGame when not in a game
}
if(doubleDownCards){
	doubleDownCards.style.display = "none";		//Or it showing all the buttons except newGame when in game
}

function display_card(num, place){
	var amount = {
		number: num
};
	var card_html = Handlebars.templates.card(amount);
	var hand = document.getElementById(place);
	hand.insertAdjacentHTML('beforeEnd', card_html);
}

function new_game() {					//when newGame button is pressed
	if (bet){
		var bet_val = bet.value;
		
	}
	if(bet_val == ""){
		alert("Enter a bet");
		return;
	}else if(isNaN(bet_val)){
		alert("Bet must be a number");
		return;
	}else if(bet_val>imperialCreditVal){
		alert("Bet can not be more than you have");
		console.log(bet_val);
		console.log(imperialCreditVal);
		return;
	}	
	newGame.style.display = "none";
	dealCards.style.display = "block";
	standCards.style.display = "block";
	doubleDownCards.style.display = "block";

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

	display_card('?', "dealers_hand");
	display_card(dealerCard2, "dealers_hand");

	playerCard1 = Math.floor((Math.random() * 13) + 1);
	if (playerCard1 > 10) {
		playerCard1 = 10;
	}
	console.log("playerCard1 = " + playerCard1);

	playerCard2 = Math.floor((Math.random() * 13) + 1);
	if (playerCard2 > 10) {
		playerCard2 = 10;
	}

	display_card(playerCard1, "players_hand");
	display_card(playerCard2, "players_hand");

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

		imperialCredit.textContent = imperialCredit.textContent + bet_val;
		newGame.style.display = "block";
		dealCards.style.display = "none";
		standCards.style.display = "none";
		doubleDownCards.style.display = "none";
		window.location.href='/update';
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

function deal_cards() {							//when hit button is pressed
    if (bet){
		var bet_val = bet.value;
		
	}
    newCardNum = Math.floor((Math.random() * 13) + 1);
    if (newCardNum > 10) {
		newCardNum = 10;
	}

	display_card(newCardNum, "players_hand");

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
		
		imperialCredit.textContent = imperialCredit.textContent + bet_val;
		newGame.style.display = "block";
		dealCards.style.display = "none";
		standCards.style.display = "none";
		doubleDownCards.style.display = "none";
		window.location.href='/update';
	}

	if (ifBust(playerTotal) == true) {				//checking if new card made player go bust
		console.log("player bust.");
		alert("player bust.");

		imperialCredit.textContent = imperialCredit.textContent - bet_val;
		newGame.style.display = "block";
		dealCards.style.display = "none";
		standCards.style.display = "none";
		doubleDownCards.style.display = "none";
		window.location.href='/update';
	}
	else if (playerTotal == 21) {
		console.log("player wins.");
		alert("player wins.");

		imperialCredit.textContent = imperialCredit.textContent + bet_val;
		newGame.style.display = "block";
		dealCards.style.display = "none";
		standCards.style.display = "none";
		doubleDownCards.style.display = "none";
		window.location.href='/update';
	}
}

function stand_cards() {			//when stand button is pressed
    if (bet){
		var bet_val = bet.value;
		
    }
    newCardNum = Math.floor((Math.random() * 13) + 1);

	if (playerTotal > dealerTotal) {					//if player has a higher score, player wins
		console.log("player wins.");
		alert("player wins.");

		imperialCredit.textContent = imperialCredit.textContent + bet_val;
		newGame.style.display = "block";
		dealCards.style.display = "none";
		standCards.style.display = "none";
		doubleDownCards.style.display = "none";
		window.location.href='/update';
	}
	else if (playerTotal == dealerTotal) {				//if player and dealer have same score, its a tie
		console.log("draw.");
		alert("draw.");

		newGame.style.display = "block";
		dealCards.style.display = "none";
		standCards.style.display = "none";
		doubleDownCards.style.display = "none";
		window.location.href='/update';
	}
	else {												//if dealer has a higher score than player, dealer wins
		console.log("dealer wins.");
		alert("dealer wins.");

		imperialCredit.textContent = imperialCredit.textContent - bet_val;
		newGame.style.display = "block";
		dealCards.style.display = "none";
		standCards.style.display = "none";
		doubleDownCards.style.display = "none";
		window.location.href='/update';
	}
}

//home page functions
function start_game(){
	window.location.href='/textBlackJack.html';
}

function go_home(){
	window.location.href='/';
}

//game page event handlers
if(newGame){
	newGame.addEventListener('click', new_game);
}
if(dealCards){
	dealCards.addEventListener('click', deal_cards);
}

if(standCards){
	standCards.addEventListener('click', stand_cards);
}

//home page event handlers
if(head_home_button){
	head_home_button.addEventListener('click', go_home);
}
if(game_button){
	game_button.addEventListener('click', start_game);
}
if(head_game_button){
	head_game_button.addEventListener('click', start_game);
}
