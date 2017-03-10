angular.module('gym-app')
.controller('WorkoutController', WorkoutController)





// function WorkoutController($scope, $http){
//   console.log("APP.JS");
//   var self = this;
function WorkoutController($http){

  function test(){
    console.log("THIS IS WORKING");
  $http.get('/workouts', function (response) {
          console.log(response);
          })
          }
  // console.log(workout);
 //  this.workouts = fitWeek;
 //  this.show = function(workout){
 //   this.workout = workout;
 // };
// console.log("fitWeek");

function createWorkout(workout) {
  $http.get('/')
  .then(function(response){
    self.fitWeek = response.data;
    console.log(self.fitWeek);
  })
    console.log("createWorkout");
    // if to add users, would add it above
     self.newWorkout = {
        day: newWorkoutInfo.day
    }
  }
  this.test = test;
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
