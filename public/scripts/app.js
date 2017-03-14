
angular.module('gym-app')
.controller('WorkoutController', WorkoutController)


function WorkoutController($http, $scope){
  var controller = this;


  // this out here is workout controller
  function week(){

    $http.get('/workouts')
    .then(function (response) {
        console.log(response.data);
        // this in here actually refers to $http
        controller.week = response.data;
      })
  }

  function addWorkout(day){
    console.log('add workout')
    console.log(day);
    $http.post('/workouts', day )
    .then(function(response){
        console.log(response.data);

      controller.addWorkout = response.data;
      console.log(response.data._id);

    })
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


  this.week = week;
  this.addWorkout = addWorkout;

}

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
