console.log("APP.JS");
var app = angular.module("GymApp", []);

app.controller("MainController", ['$http', '$scope', function($http, $scope){
  $scope.workout = [
    'workout 1',
    'workout 2',
    'workout 3',
    'workout 4',
    'workout 4'
  ];

}]);
