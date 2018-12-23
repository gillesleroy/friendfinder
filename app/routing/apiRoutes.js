var express = require('express');
var path = require('path');
// var app = express.Router();
var friends = require("./../data/friends.js");
var app = express();

app.get('/api/friends', function(req, res) {
  // res.send('Hello from api GET friends route.');
  res.sendFile(path.join(__dirname, "./../public/friends.html"));
});

app.get('/api/data', function(req, res) {
  // res.send('Hello from api GET friends route.');
  res.send(friends.friends);
});

app.post('/api/friends', function(req, res) {
  // console.log(req.body);
  // console.log(friends.friends[1]);
  // res.send('Hello from api POST friends route.');

  var userScores = req.body.scores;
  var totalDiff = [];
  var best = 0;
  var bestScore = 50;
  for (var i = 0; i<friends.friends.length; i++)
  {
    var total = 0;
    for (var j =0; j<friends.friends[i].scores.length; j++){
      var a = friends.friends[i].scores[j];
      var b = userScores[j];
      var c = Math.abs(parseInt(a)-parseInt(b));
      total = total + c;
      // console.log("a="+a+" b="+b+" c="+c);
    }
    totalDiff[i] = total;
  }
  for (var i = 0; i<friends.friends.length; i++){
    console.log("totalDiff["+i+"]="+totalDiff[i]);
    var score = totalDiff[i];
    if (score <= bestScore){
      console.log("best="+i+" score="+score+" better than "+bestScore);
      best = i;
      bestScore = score; 
    }
  }
  console.log("best="+best);
  res.send(friends.friends[best]);
});

module.exports = app;