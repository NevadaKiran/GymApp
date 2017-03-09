console.log("CONTROLLER HIT");
var express = require('express');
var router = express.Router();
var Workout = require('../models/workout.js');

var http = require('http');

var mongoose = require('mongoose')
// var workout = require('../models/workout.js');

// index routes
router.get('/', function(req,res) {

  res.render('workout/index', {
    todos: data.seededWorkouts
  });
});







module.exports = router;
