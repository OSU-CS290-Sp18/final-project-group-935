// server.js

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var MongoClient = require('mongodb').MongoClient;

var mongoHost = 'classmongo.engr.oregonstate.edu';
var mongoPort = 27017;
var mongoUser = 'cs290_robeshel';
var mongoPassword = 'cs290_robeshel';
var mongoDBName = 'cs290_robeshel';

console.log(mongoHost);
console.log(mongoPort);
console.log(mongoUser);
console.log(mongoPassword);
console.log(mongoDBName);

var mongoDBDatabase;

var mongoURL = 'mongodb://' + mongoUser + ':' + mongoPassword + '@' + mongoHost + ':' + mongoPort + '/' + mongoDBName;

console.log(mongoURL);

var app = express();
var port = process.env.PORT || 3000;

/*
var playerMoney = db.collection('playerMoney');
	var newPlayerMoney = getElementById("imperialCredit");
	//var playerMoneyCursor = collection.find();
	db.playerMoney.updateOne(
		{playerMoneyId: "player"},
		{$set: {currency: newPlayerMoney.textContent}}
	);
*/

app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

app.get('/textBlackJack.html', function(req, res){
	res.status(200).render('game_page');
});

app.get('/style.css', function(req, res){
	res.status(200).sendFile(path.join(__dirname, 'style.css'));
});

app.get('/textBlackJack.js', function(req, res){
	res.status(200).sendFile(path.join(__dirname, 'textBlackJack.js'));
});

app.get('/index.js', function(req, res){
	res.status(200).sendFile(path.join(__dirname, 'index.js'));
});

app.get('/', function(req, res, next){
	res.status(200).render('home_page');
});

app.get('/update', function(req, res, next){
	
	var playerMoney = db.collection('playerMoney');
	var newPlayerMoney = getElementById("imperialCredit");
	//var playerMoneyCursor = collection.find();
	db.playerMoney.updateOne(
		{playerMoneyId: "player"},
		{$set: {currency: newPlayerMoney.textContent}}
	);

	console.log("updated mongoDB");
	res.redirect('/textBlackJack.html');
});

app.get('*', function(req, res){
	res.status(404).render('home_page');
});

MongoClient.connect(mongoURL, function (err, client) {
	  if (err) {
	    throw err;
	}
db = mongoDBDatabase = client.db(mongoDBName);
	app.listen(port, function () {
    console.log("Server listening on port 3000");
  });
});
