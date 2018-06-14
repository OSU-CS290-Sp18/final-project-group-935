//index.js

var game_button = document.getElementById('start');
var rule_button = document.getElementById('rules');
var head_home_button = document.getElementById('headhome');
var head_game_button = document.getElementById('headstart');
var head_rule_button = document.getElementById('headrules');

function start_game(){
	window.location.href='/textBlackJack.html';
}

function rule_page(){
	window.location.href='/BlackJackRules.html';
}

function go_home(){
	window.location.href='/';
}

head_home_button.addEventListener('click', go_home);
head_rule_button.addEventListener('click', rule_page);
rule_button.addEventListener('click', rule_page);
game_button.addEventListener('click', start_game);
head_game_button.addEventListener('click', start_game);