angular.module('gym-app')
.controller('WorkoutController', WorkoutController)





// function WorkoutController($scope, $http){
//   console.log("APP.JS");
//   var self = this;
function WorkoutController($http){
  function test(){
    console.log("so far so good");
  $http.get('/workouts')
  .then(function (response) {
          console.log(response);
          self.fitWeek = response.data;
          console.log(fitWeek);
          // res.render(fitWeek)
        })
        // $scope.test = fitWeek
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
