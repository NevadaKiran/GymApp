var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var WorkoutSchema = new Schema({
  name: String
});

var WorkoutSchema = new Schema({
  warmup: String,
  workout: String,
  cooldown: String,
  created_at: Date,
  updated_at: Date,

});

WorkoutSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});


var WorkoutModel = mongoose.model("Workout", WorkoutSchema)

module.exports = {
  workout: WorkoutModel
};
