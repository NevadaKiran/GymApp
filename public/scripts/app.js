console.log("APP.JS");
angular.module('gym-app')
.controller('WorkoutController', WorkoutController)

function WorkoutController($scope, $http){
  var self = this;
}

function createWorkout($scope, $state, $http) {
  console.log("createWorkout");
// if to add users, would add it above
    self.newWorkout = {
     day: newWorkoutInfo.day
    }
  }

//
//   function saveWorkout(){
//     console.log("saveWorkout");
//     var day = $('.day')
//     var warmup = $('.warmup')
//     var heavy = $('.heavy')
//     var cooldown =$('.cooldown')
//   }
//
//
//
//   function getSavedWorkouts(){
//     console.log("get saved workouts");
//     $http.get(`/workout/${currentUser}`)
//   }
//
//
//
//
//
//
//
//
//
//


// module.exports = router;
