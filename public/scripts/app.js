angular.module('gym-app')
.controller('WorkoutController', WorkoutController)


function WorkoutController($http){
  var controller = this;

  // this out here is workout controller
  function test(){
    console.log(this);
    console.log("so far so good");
  $http.get('/workouts')
  .then(function (response) {
          console.log(response);
          // this in here actually refers to $http
          controller.fitWeek = response.data;
          // console.log(fitWeek);
          // res.render(fitWeek)
        })
        // $scope.week = fitWeek
}
function workoutById(){
  console.log("workoutById ");
  console.log(this);
$http.get('/workouts/:id')
.then(function(response){
  console.log(response);
  controller.fitDay = response.data;
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
    controller.fitWeek = response.data;
    console.log(controller.fitWeek);
  })
    console.log("createWorkout");
    // if to add users, would add it above
     controller.newWorkout = {
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
