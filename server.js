var express = require('express');

var logger = require('morgan');

// var router = express.Router()

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var json = require('json');

//CONTROLLERS
var usersController = require('./controllers/users.js');
// var seedsController = require('./db/seeds.js');
var workoutsController = require('./controllers/workoutsController.js')
var app = express();

// MIDDLE WARES
app.use(logger("dev"));

var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/gym-app'
mongoose.connect(mongoURI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'))

//trying to solve the "requires middleware functions" error
// app.use('/router', router);
// var workoutController = require('./controllers/workoutsController.js');

app.use(express.static('public'));

app.use('/workouts', workoutsController)
app.use('/users', usersController)
// app.use('/seeds', seedsController);


// LISTENERS
app.listen(process.env.PORT || 3000, function(){
  console.log("Listening to 3000");
});
