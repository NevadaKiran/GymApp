angular.module('gym-app', ['ui.router'])
.config(WorkoutRouter);

function WorkoutRouter($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: '/partials/home.html',
      controller: 'ShowWorkoutController as workout'
    })
    .state('createWorkout', {
      url: '/user/:id/workout',
      templateUrl:'/partials/createWorkout.html',
      controller: 'WorkoutController as workout'
    })
  }
