console.log("CONTROLLER HIT");

var express = require('express');
var router = express.Router();
var Workout = require('../models/workout.js');
var User = require('../models/user.js');
var http = require('http');
var mongoose = require('mongoose');

// BELOW FOR USER CREATED WORKOUTS
router.get('/', function(req, res) {
  Workout.find({})
    .exec(function(err, data) {
      if (err) { console.log(err); }
      res.json(data);
    });
});

    router.get('/:id', function(req, res){
          console.log("ID ID ID");
          console.log(req.params.id);

          Workout.findById(req.params.id)
          .exec(function(err, data){
            if(err){console.log(err);}
            res.json(data)
          })
          });


router.put('/:id', function(req, res) {
  console.log("PUT ROUTE");
  Workout.findById(req.params.id).exec()
    .then(function(data) {
      console.log(data);
      var workout = Workout(req.body.id);

      data.day = req.body.day
      data.warmup = req.body.warmup;
      data.heavy = req.body.heavy;
      data.cooldown = req.body.cooldown;
      console.log(data);
      console.log(workout);
      data.save();

      res.json(data);
    })
    .catch(function(err) {
      res.json(err)
    })
});

router.post('/', function(req, res){
  console.log("HIT WORKOUTS");
  var workout = new Workout({
    day: req.body.day,
    warmup: req.body.warmup,
    heavy: req.body.heavy,
    cooldown: req.body.cooldown
  });
  // workout.push({day:'', warmup:'', heavy:'', cooldown:''})
workout.save(function(err, data){
  if(err)console.log(err);
  res.json(workout)
    });
})
// console.log(workout);
// router.put('/',)
router.delete('/:id', function(req, res){
    console.log("DELETE ROUTE");
  Workout.findById(req.params.id).exec()
     .then(function(workout){
       workout.remove();
      //  data.save();
       res.json(workout);
       console.log(workout, "workout");

     })
     .catch(function(err) {
       res.json(err)
     })
});





module.exports = router;

// // index routes THIS BLOCK SHOULD DEAL WITH SEEDED WORKOUTS
// router.get('/', function(req, res) {
//   res.json({fitWeek: fitWeek})
// });
//     router.get('/:id', function(req, res){
//       console.log("ID ID ID");
//       console.log(req.params.id);
//
//       res.json({fitDay: fitWeek[req.params.id]})
//     });

// var fitWeek = require('../db/seeds.js')
// var fitDay =require('../db/seeds.js')
