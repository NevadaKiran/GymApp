console.log("CONTROLLER HIT");
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var workout = require('../models/workout.js');

// index routes
router.get("/", function(req, res){
  res.render("workout/index.hbs",{
    workout: workout
  });
});










module.exports = router;
