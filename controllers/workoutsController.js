console.log("CONTROLLER HIT");
var express = require('express');
var router = express.Router();
var Workout = require('../models/workout.js');

var http = require('http');

var mongoose = require('mongoose')
// var workout = require('../model/workout.js');

// index routes
router.get('/', function(req, res) {
  Workout.find()
    .exec(function(err, workouts) {
      if (err) { console.log(err); }
      res.json({
        workouts
      });
    });
});


  router.get('/new', function(req, res){
	res.render("partials/new.html");
});

router.post('/', function(req, res){
  var workout = new Workout({
    day: req.body.day,
    warmup: req.body.warmup,
    heavy: req.body.heavy,
    cooldown: req.body.cooldown
  });
  workout.save;
  res.json(workout)
})
// console.log(workout);
// router.put('/',)





module.exports = router;
