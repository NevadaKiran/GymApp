
angular.module('gym-app')
.controller('WorkoutController', WorkoutController)


function WorkoutController($http, $scope){
  var controller = this;
  // $scope.weekData = [];
  // this out here is workout controller

  function week(){
    $http.get('/workouts')
    .then(function (allWorkouts) {
        console.log(allWorkouts.data);
        // this in here actually refers to $http
        // controller.weekData = response.data;
        $scope.weekData = allWorkouts.data;
      })
  }

  function addWorkout(day){
    console.log('add workout')
    console.log(day);
    $http.post('/workouts', day )
    .then(function(newWorkout){
        console.log(newWorkout.data, "responsedata");
console.log($scope.weekData, "weekData");
    $scope.weekData.push(newWorkout.data)
      // controller.addWorkout = response.data;
      // console.log(response.data._id);

    })
  }

  function deleteWorkout(id){
    console.log("DELETE");
 $http.delete(`/workouts/${id}`)
 .then(function(deletedWorkout){
  //  console.log("deleted", deletedWorkout.data);
console.log("dleted", deletedWorkout.data);
   var deletedIndex = $scope.weekData.indexOf(deletedWorkout.data);
console.log(deletedIndex);
   if (deletedIndex !== -1) {
     $scope.weekData.splice(deletedIndex, 1);
   }

  //  getSavedWorkouts();
  })
 }

  this.deleteWorkout = deleteWorkout;
  this.week = week;
  this.addWorkout = addWorkout;
}



// function addWorkout(day){
//     console.log();
//   $http.post('/workouts' )
//   .then(function(response){
//       console.log(response.data);
//       var post = response.data
//
//     controller.addWorkout = response.data;
//
//     console.log(response.data._id);
//     // $scope.post.push({day: $scope.day,
//     //   warmup: $scope.warmup, heavy: $scope.heavy, cooldown: $scope.cooldown})
//   })
// }


// $scope.addWorkout = function(){
//   $scope.workouts.push({day: $scope.day });
// }

// console.log("controller.fitWeek");
//   controller.fitWeek.push(newWorkout);
//   console.log(controller.fitWeek);
//   console.log("createWorkout");

//
// function workoutById(req, res){
//     console.log("workoutById ");
//     console.log(this);
//
//     // controller.fitDay = response.data;
//       })


// $scope.fitDay.push({day: $scope.day});
