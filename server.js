var express = require('express');
var app = express();
// var router = new Router()
var hbs = require('hbs')
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var workoutController = require('./controllers/workoutController.js')

// CONTROLLERS
app.use('/workout', workoutController)

// MIDDLE WARES
app.use(express.static('/public'));
app.use(bodyParser.json());
app.set("view engine", "hbs");


// LISTENERS
app.listen(process.env.PORT || 3000, function(){
  console.log("Listening to 3000");
});
