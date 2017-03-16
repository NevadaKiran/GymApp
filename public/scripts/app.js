
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
  function isIndex(element) {
    return element >= 15;
  }
  function deleteWorkout(id){
    console.log("DELETE");
 $http.delete(`/workouts/${id}`)
 .then(function(deletedWorkout){
  //  console.log("deleted", deletedWorkout.data);

var deletedId = deletedWorkout.data._id;

$scope.weekData.forEach(function(day, i) {
  if (deletedId === day._id) {
    // delete $scope.weekData[i];
    $scope.weekData.splice(i, 1);
  }
});


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
// scope data is the view.
// $scope.weekData.forEach(function(day) {
//  if(deletedWorkout.data._id === day._id) {
//    delete day;
//    return;
//  }    //delete
// });
