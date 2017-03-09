console.log("APP.JS");
var app = angular.module("gym-app", ['ui.router'])
.controller('WorkoutController', WorkoutController)

function WorkoutController($scope, $http){
  var self = this;

  getSavedWorkouts(){
    $http.get(`/workout/`)
  }



}






function createWorkout(newWorkoutInfo, workoutId) {
// if to add users, would add it above
    self.newWorkout = {
     day: newWorkoutInfo.day

    }
  }


// module.exports = router;
