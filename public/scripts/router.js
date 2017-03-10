angular.module('gym-app', ['ui.router'])
.config(WorkoutRouter);

function WorkoutRouter($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');




  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: '/partials/home.html',
    controller: 'WorkoutController as workout'
  })
  .state('createWorkout', {
    url: '/workout',
    templateUrl:'/partials/createWorkout.html',
    controller: 'WorkoutController as workout'
  })


  .state('user', {
    url: '/user',
    templateUrl: '/partials/user.html',
    controller: 'UserController as user',
    params: {userId: null}
  })

}
