var express = require('express');
// var app = express.Router();
var friends = require("./../data/friends.js");
var app = express();

app.get('/api/friends', function(req, res) {
  res.send('Hello from api GET friends route.');
});

app.post('/api/friends', function(req, res) {
  console.log(req.body);
  console.log(friends.friends[1]);
  res.send('Hello from api POST friends route.');
});

module.exports = app;