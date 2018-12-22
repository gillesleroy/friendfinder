var express = require('express');
var path = require('path');
// var app = express.Router();
var app = express();

app.get('/survey', function(req, res) {
//   res.send('Hello from get/survey route.');
  res.sendFile(path.join(__dirname, "./../public/survey.html"));
});

app.get('/', function(req, res) {
    // res.send('Hello to get home.html');
    res.sendFile(path.join(__dirname, "./../public/home.html"));
  });

module.exports = app;