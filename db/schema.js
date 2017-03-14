var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;


var WorkoutSchema = new Schema({
  day: String,
  warmup: String,
  heavy: String,
  cooldown: String
});

var UserSchema = new Schema({
  name: String,
  email: String,
  user: String
});

WorkoutSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

UserSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

var UserModel = mongoose.model("User", UserSchema);
var WorkoutModel = mongoose.model("Workout", WorkoutSchema);

module.exports = {
  Workout: WorkoutModel,
  User: UserModel
};
