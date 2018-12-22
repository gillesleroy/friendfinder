var express = require("express");
// var path = require("path");
// var friends = require("./app/data/friends.js");

// const PORT = 3000;
const PORT = process.env.PORT || 3000;
var app = express();
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', require('./app/routing/htmlRoutes.js'));
app.use('/', require('./app/routing/apiRoutes.js'));

app.listen(PORT,function () {
console.log("Listening on port:"+PORT)    
// console.log(friends.friends[1]);
});
