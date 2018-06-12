// server.js

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/textBlackJack.html', function(req, res){
	res.status(200).sendFile(path.join(__dirname, 'textBlackJack.html'));
});

app.get('/textBlackJack.js', function(req, res){
	res.status(200).sendFile(path.join(__dirname, 'textBlackJack.js'));
});

app.get('/BlackJackRules.html', function(req, res){
	res.status(200).sendFile(path.join(__dirname, 'BlackJack Rules.html'));
});

app.get('/index.js', function(req, res){
	res.status(200).sendFile(path.join(__dirname, 'index.js'));
});


app.get('*', function(req, res){
	res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function(){
	console.log("server is on port 3000");
});