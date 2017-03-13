console.log("CONTROLLER HIT");
var express = require('express');
var router = express.Router();
var Workout = require('../models/workout.js');
var User = require('../models/user.js')
var fitWeek = require('../db/seeds.js')
// var fitDay =require('../db/seeds.js')
var http = require('http');
var mongoose = require('mongoose');


// index routes THIS BLOCK SHOULD DEAL WITH SEEDED WORKOUTS
router.get('/', function(req, res) {

  console.log("seeded workout");
  res.json({fitWeek: fitWeek})
});

    router.get('/:id', function(req, res){
      console.log("ID ID ID");
      console.log(req.params.id);

      res.json({fitDay: fitWeek[req.params.id]})
    });


// BELOW FOR USER CREATED WORKOUTS

  router.get('/new', function(req, res){
	res.render("/partials/createWorkout.html");
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
