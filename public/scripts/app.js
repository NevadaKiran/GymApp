angular.module('gym-app')
.controller('WorkoutController', WorkoutController)


function WorkoutController($http, $scope){
  var controller = this;
  // this out here is workout controller
  function week(){
  $http.get('/workouts')
  .then(function (response) {
          console.log(response);
          // this in here actually refers to $http
          controller.fitWeek = response.data;
        })
}

function createWorkout($scope) {

  $scope.addWorkout = function(){
    $scope.workouts.push({day: $scope.day });
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

// function($scope){
//   $scope.posts = [
//   {title: 'post 1', upvotes: 5},
//   {title: 'post 2', upvotes: 2},
//   {title: 'post 3', upvotes: 15},
//   {title: 'post 4', upvotes: 9},
//   {title: 'post 5', upvotes: 4}
// ];
// $scope.addPost = function(){
//   $scope.posts.push({title: $scope.title, upvotes: 0});
//   $scope.title = '';
//   if(!$scope.title || $scope.title === '') { return; }
// };
// };





  // console.log("controller.fitWeek");
  //   controller.fitWeek.push(newWorkout);
  //   console.log(controller.fitWeek);
  //   console.log("createWorkout");

  }
  this.week = week;
  // this.fitDay = fitDay;
}
