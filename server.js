var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlParser = bodyParser.urlencoded({ extended: false });
	// app.use(bodyParser.json());

var Firebase = require('firebase');
var firebaseRef = new Firebase('https://cloudseeder.firebaseio.com/');

app.get('/', function(req, res) {
  res.send('you home now little one');
});

app.get('/add/:track', urlParser, function (req, res) { 
  
  firebaseRef.push({
  	track: req.params.track
  });

  res.send('Saved ' + req.params.track);
});

var port = process.env.PORT || 5000;
 app.listen(port, function() {
   console.log("cloud seeder is listening on " + port);
 });