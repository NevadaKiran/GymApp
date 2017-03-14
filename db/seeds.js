
var mongoose = require('mongoose');
var Workout = require('../models/workout.js');

mongoose.Promise = global.Promise;

var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/gym-app'

var db = mongoose.connect(mongoURI)

var workouts = [
{
  day: ' Monday',
  warmup: 'Ten Minute Run',
  heavy: 'Squats',
  cooldown: 'Ten Minute Walk'
},{
  day: ' Tuesday',
  warmup: 'Ten Minute Shadow Boxing',
  heavy: 'Back and Chest',
  cooldown: 'Half Mile Swim'
},{
  day: ' Wednesday',
  warmup: 'Jump Rope',
  heavy: 'Bicepts, Tricepts',
  cooldown: 'Half Mile Swim'
},{
  day: ' Thursday',
  warmup: 'slow jog',
  heavy: 'sprints',
  cooldown: 'Ten Minute Walk'
},{
  day:' Friday',
  warmup: 'Wrestle a bear',
  heavy: 'Climb a mountain',
  cooldown: 'Sky Dive'
}]


Workout.remove({})
   .then(function() {
       return Workout.create(workouts);
   })
   .then(function(workouts) {
       console.log(workouts);
   })
   .then(function() {
       db.disconnect(function() {
           console.log('New workouts seeded!');
       });
   });

// module.exports = router;

  //  console.log("SEEDS");
  //  var express = require('express');
  //  var router = express.Router();
  //  var seeder = require('mongoose-seed');
