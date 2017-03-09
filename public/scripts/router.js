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
    url: '/workout/:id/meme',
    templateUrl:'/partials/createMeme.html',
    controller: 'MemeController as meme'
  })

  .state('login', {
    url: '/login',
    templateUrl: '/partials/login.html',
    controller: 'AuthController as auth'
  })
  .state('user', {
    url: '/user',
    templateUrl: '/partials/user.html',
    controller: 'MemeController as meme',
    params: {userId: null}
  })

}
