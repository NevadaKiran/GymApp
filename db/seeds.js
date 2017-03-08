var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3000');

var Workout = require('../models/user');


mongoose.Promise = global.Promise;


Workout.remove({}, function(err){
  console.log(err);
});

Workout.remove({}, function(err){
  console.log(err);
});

// create new Workout
var monday = new workout({
  warmup: '',
  workout: '',
  cooldown: ''
});

var tuesday = new workout({
  warmup: '',
  workout: '',
  cooldown: ''
});

var wednesday = new workout({
  warmup: '',
  workout: '',
  cooldown: ''
});

var thursday = new workout({
  warmup: '',
  workout: '',
  cooldown: ''
});

var friday = new workout({
  warmup: '',
  workout: '',
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
