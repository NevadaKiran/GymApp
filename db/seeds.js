console.log("SEEDS");
var express = require('express');
var router = express.Router();
var seeder = require('mongoose-seed');
var mongoose = require('mongoose');
var Workout = require('../models/workout.js');


module.exports =[
{
  id: 1,
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
// create new Workout
// var monday = new Workout({
//   warmup: 'Ten Minute Run',
//   heavy: 'Squats',
//   cooldown: 'Ten Minute Walk'
// });
//
// var tuesday = new Workout({
//   warmup: 'Then Minute Shadow Boxing',
//   heavy: 'Back and Chest',
//   cooldown: 'Half Mile Swim'
// });
//
// var wednesday = new Workout({
//   warmup: 'Jump Rope',
//   heavy: 'Bicepts, Tricepts',
//   cooldown: 'Half Mile Swim'
// });
//
// var thursday = new Workout({
//   warmup: 'slow jog',
//   heavy: 'sprints',
//   cooldown: 'Ten Minute Walk'
// });
//
// var friday = new Workout({
//   warmup: 'Wrestle a bear',
//   heavy: 'Climb a mountain',
//   cooldown: 'Sky Dive'
// });
//
// // save the wokouts
// monday.save(function(err) {
//   if (err) console.log(err);
//   console.log('Workout created!');
// });
//
// tuesday.save(function(err) {
//   if (err) console.log(err);
//   console.log('Workout created!');
// });
//
// thursday.save(function(err) {
//   if (err) console.log(err);
//   console.log('Workout created!');
// });
//
// friday.save(function(err) {
//   if (err) console.log(err);
//   console.log('Workout created!');
// });

// })
// module.exports = router;
// module.exports = fitWeek;
