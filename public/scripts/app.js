angular.module('gym-app')
.controller('WorkoutController', WorkoutController)


function WorkoutController($http){
  var controller = this;

  // this out here is workout controller
  function week(){
  $http.get('/workouts')
  .then(function (response) {
          console.log(response);
          // this in here actually refers to $http
          controller.fitWeek = response.data;
        })
          // console.log(fitWeek);
        // $scope.week = fitWeek
        //FITWEEK MEANS NOTHING HERE
}
function workoutById(req, res){
    console.log("workoutById ");
    console.log(this);
  $http.get('/workouts/:id')
  .then(function(response){
    self.fitDay = response.data;
    console.log(response);
    console.log(fitDay);
    // controller.fitDay = response.data;
  })

}


function createWorkout(newWorkout) {
  // $http.get('/')
  // .then(function(response){
  console.log("controller.fitWeek");
    controller.fitWeek.push(newWorkout);
    console.log(controller.fitWeek);
  // })
    console.log("createWorkout");

  }
  this.week = week;
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
