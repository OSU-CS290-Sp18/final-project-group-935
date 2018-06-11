//index.js

var game_button = document.getElementById('start');
var rule_button = document.getElementById('rules');

function start_game(){
	window.location.href='/textBlackJack.html';
}

function rule_page(){
	window.location.href='/BlackJackRules.html';
}

rule_button.addEventListener('click', rule_page);
game_button.addEventListener('click', start_game);