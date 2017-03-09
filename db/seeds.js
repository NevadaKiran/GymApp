console.log("SEEDS");

var seeder = require('mongoose-seed');
var mongoose = require('mongoose');
var Workout = require('../models/workout.js');

seeder.connect(process.env.MONGODB_URI || 'mongodb://localhost/gym-app-app', function(){
  //loads workout in theory
  seeder.loadModels(['./models/workout.js']);

  //clear collection
  seeder.clearModels(['Workout'], function(){
    //pupulates data to collection
    seeder.populateModels(workoutData, function(){
      console.log('got me a seeds workout');
    });
  });           //this is from the project3
});


Workout.remove({}, function(err){
  console.log(err);
});

Workout.remove({}, function(err){
  console.log(err);
});

// create new Workout
var monday = new workout({
  warmup: 'Ten Minute Run',
  heavy: 'Squats',
  cooldown: 'Ten Minute Walk'
});

var tuesday = new workout({
  warmup: 'Then Minute Shadow Boxing',
  heavy: 'Back and Chest',
  cooldown: 'Half Mile Swim'
});

var wednesday = new workout({
  warmup: 'Jump Rope',
  heavy: 'Bicepts, Tricepts',
  cooldown: 'Half Mile Swim'
});

var thursday = new workout({
  warmup: 'slow jog',
  heavy: 'sprints',
  cooldown: 'Ten Minute Walk'
});

var friday = new workout({
  warmup: '',
  heavy: '',
  cooldown: ''
});

// save the wokouts
monday.save(function(err) {
  if (err) console.log(err);
  console.log('Workout created!');
});

tuesday.save(function(err) {
  if (err) console.log(err);
  console.log('Workout created!');
});

thursday.save(function(err) {
  if (err) console.log(err);
  console.log('Workout created!');
});

friday.save(function(err) {
  if (err) console.log(err);
  console.log('Workout created!');
});
