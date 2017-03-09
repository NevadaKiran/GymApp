console.log("APP.JS");
var app = angular.module("gym-app", ['ui.router'])
.controller('WorkoutController', WorkoutController)

function WorkoutController($scope, $http){
  var self = this;


  var saveWorkout = function(){
    console.log("saveWorkout");
    var day = $('.day')
    var warmup = $('.warmup')
    var heavy = $('.heavy')
    var cooldown =$('.cooldown')
  }



  function getSavedWorkouts(){
    console.log("get saved workouts");
    $http.get(`/workout/${currentUser}`)
  }



}






function createWorkout(newWorkoutInfo, workoutId) {
// if to add users, would add it above
    self.newWorkout = {
     day: newWorkoutInfo.day

    }
  }


// module.exports = router;
