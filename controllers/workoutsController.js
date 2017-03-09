console.log("CONTROLLER HIT");
var express = require('express');
var router = express.Router();
var Workout = require('../models/workout.js');

var http = require('http');

var mongoose = require('mongoose')
// var workout = require('../model/workout.js');

// index routes
router.get('/', function(req,res) {
    res.render("partials/show.html",{
      // console.log(workout);
    workout: workout
    });

  });

  router.get('/new', function(req, res){
	res.render("partials/new.html");
});

// console.log(workout);






module.exports = router;
