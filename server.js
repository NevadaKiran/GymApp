var express = require('express');
var app = express();
var logger = require('morgan');
var router = express.Router()
var hbs = require('hbs')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// MIDDLE WARES
app.use(logger("dev"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('/public'));
app.set("view engine", "hbs");
app.use(logger('dev'))

// CONTROLLERS
app.use('/workout', workoutController)
var workoutController = require('./controllers/workoutController.js')






// LISTENERS
app.listen(process.env.PORT || 3000, function(){
  console.log("Listening to 3000");
});
