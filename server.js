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

	var playerMoney1 = db.collection('playerMoney');
	var playerMoney2 = playerMoney1.findOne({}/*, {_id: 0, amount: 1}*/);
	var playerMoney3 = playerMoney2.amount;
	console.log(playerMoney3);
	var amount = playerMoney3;
	
	/*
	playerCursor.toArray(function (err, playerDocs) {
		if (err) {
			res.status(500).send("Error fetching playerMoney from DB.");
		}
		else {
			var playerMoney = db.collection('playerMoney');
			var playerCursor = collection.find({player})
		}
	});
	*/

	/*
	var playerMoneyNew = db.playerMoney.find('playerMoney');//, {_id: 0, playerId: 0, currency: 1});
	var amount = playerMoneyNew.currency;
	console.log(playerMoneyNew);
	imperialCreditNew = playerMoneyNew;
	//db.playerMoney.find();
	*/

	res.status(200).render('game_page', {amount});
});


app.get('/style.css', function(req, res){
	res.status(200).sendFile(path.join(__dirname, 'style.css'));
});

app.get('/cardTemplate.js', function(req, res){
	res.status(200).sendFile(path.join(__dirname, 'cardTemplate.js'));
});

app.get('/img_background', function(req, res){
	res.status(200).sendFile(path.join(__dirname, 'img_background.png'));
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

app.get('/', function(req, res, next){
	res.status(200).render('home_page');
});

app.get('/update/:number', function(req, res, next){
	
	var newPlayerMoney = req.params.number;
	//var playerMoneyCursor = collection.find();
	db.playerMoney.updateOne(
		{$set: {amount: newPlayerMoney}}
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