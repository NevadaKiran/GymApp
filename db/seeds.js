console.log("SEEDS");
var express = require('express');
var router = express.Router();
var seeder = require('mongoose-seed');
var mongoose = require('mongoose');
var Workout = require('../models/workout.js');

// seeder.connect(process.env.MONGODB_URI || 'mongodb://localhost/gym-app', function(){
//   //loads workout in theory
//   seeder.loadModels(['./models/workout.js']);
//
//   //clear collection
//   seeder.clearModels(['Workout'], function(){
//     //pupulates data to collection
//     seeder.populateModels(workoutData, function(){
//       console.log('got me a seeds workout');
//     });
//   });           //this is from the project3
// });


router.get('/', function(req, res){



Workout.remove({}, function(err){
  console.log(err);
});

module.exports =[
{
  day: 'Monday',
  warmup: 'Ten Minute Run',
  heavy: 'Squats',
  cooldown: 'Ten Minute Walk'
},{
  day: 'Tuesday',
  warmup: 'Ten Minute Shadow Boxing',
  heavy: 'Back and Chest',
  cooldown: 'Half Mile Swim'
},{
  day: 'wednesday',
  warmup: 'Jump Rope',
  heavy: 'Bicepts, Tricepts',
  cooldown: 'Half Mile Swim'
},{
  day: 'thursday',
  warmup: 'slow jog',
  heavy: 'sprints',
  cooldown: 'Ten Minute Walk'
},{
  day:'friday',
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

})
module.exports = router;
// module.exports = fitWeek;
